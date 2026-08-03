import { RoutineResult, RoutineRequest, CommunicationTone, BodyAreaId } from './schemas';
import { FALLBACK_TEMPLATES, GENERIC_FALLBACK } from '../data/fallbackTemplates';
import { getBodyArea, getFallbackCategory } from '../data/bodyAreas';

const CATEGORY_PRIORITIES: Record<string, string[]> = {
  dryness: [
    'Support the skin barrier with gentle cleansing.',
    'Moisturize while the area is still slightly damp.',
  ],
  'oil-control': [
    'Use a gentle cleanser without stripping the area.',
    'Choose lightweight moisturizing products.',
  ],
  'breakout-care': [
    'Keep pores clear with gentle cleansing.',
    'Use targeted treatment only on active spots when tolerated.',
  ],
  'uneven-appearance': [
    'Protect the area from extra irritation.',
    'Keep exfoliation gentle and infrequent.',
  ],
  'rough-texture': [
    'Soften roughness with steady hydration.',
    'Avoid harsh scrubbing or aggressive exfoliation.',
  ],
  'shaving-care': [
    'Reduce friction before and after shaving.',
    'Use a clean razor and a gentle shaving product.',
  ],
  'friction-care': [
    'Reduce rubbing and keep the area comfortable.',
    'Use a plain moisturizer or barrier balm when needed.',
  ],
  'sweat-odour': [
    'Keep the area clean and dry with gentle washing.',
    'Use breathable products that do not overwhelm the skin.',
  ],
  'scalp-flakes': [
    'Wash the scalp gently and avoid scratching.',
    'Use anti-dandruff care only as needed and tolerated.',
  ],
  'scalp-oil': [
    'Clean the scalp without over-washing.',
    'Keep conditioner and heavier products away from the roots.',
  ],
  'hair-dryness': [
    'Add moisture to mid-lengths and ends.',
    'Reduce heat and rough handling.',
  ],
  'hair-frizz': [
    'Smooth and seal moisture into the hair.',
    'Protect hair from rough drying and humidity when possible.',
  ],
  'hair-breakage': [
    'Protect weak lengths from friction and heat.',
    'Support the ends with gentle conditioning.',
  ],
  'nail-cuticle-care': [
    'Keep nails and cuticles moisturized.',
    'Use gentle trimming and avoid cutting cuticles deeply.',
  ],
  'foot-care': [
    'Keep feet clean, dry, and comfortably moisturized.',
    'Ease rough areas gradually instead of forcing them smooth.',
  ],
  generic: [
    'Use a gentle routine that is easy to repeat.',
    'Avoid piling on new products all at once.',
  ],
};

const TONE_MODIFIERS: Record<CommunicationTone, { prefix: string; postfix: string }> = {
  gentle: {
    prefix: 'For gentle care: ',
    postfix: 'Be kind to yourself as you build this routine.',
  },
  direct: {
    prefix: '',
    postfix: '',
  },
  curious: {
    prefix: '',
    postfix: 'This approach supports your barrier and comfort.',
  },
  minimal: {
    prefix: '',
    postfix: '',
  },
};

export function generateFallbackRoutine(request: RoutineRequest): RoutineResult {
  const { bodyArea, concern, answers } = request;
  const area = getBodyArea(bodyArea as BodyAreaId);
  const fallbackCategory = getFallbackCategory(bodyArea as BodyAreaId, concern);
  const template = FALLBACK_TEMPLATES[fallbackCategory] ?? GENERIC_FALLBACK;
  const tone = answers.communicationStyle ?? ('direct' as CommunicationTone);

  const areaLabel = area?.label ?? bodyArea;
  const currentProducts = answers.currentProducts?.trim();
  const sensitivity = answers.sensitivity;
  const routineTime = answers.routineTime;

  let morning = [...template.morning];
  let evening = [...template.evening];
  let weekly = [...template.weekly];
  let avoid = [...template.avoid];
  let useWhatYouOwn = [...template.useWhatYouOwn];
  let priorities = buildPriorities(fallbackCategory, areaLabel, currentProducts);
  let safetyNote = template.safetyBase;

  if (sensitivity === 'irritated') {
    avoidanceTriggersAdd(avoid, [
      'new active treatments',
      'strong fragrances',
      'exfoliating acids on irritated skin',
    ]);
    morning = morning.slice(0, 1);
    weekly = [];
    priorities = ensurePriority(priorities, 'Keep the routine gentle and pause anything that stings.');
  }

  if (routineTime === 'two-minutes') {
    morning = morning.slice(0, 1);
    evening = evening.slice(0, 1);
    weekly = weekly.slice(0, 1);
  } else if (routineTime === 'five-minutes') {
    morning = morning.slice(0, 2);
    evening = evening.slice(0, 1);
    weekly = weekly.slice(0, 1);
  } else {
    morning = morning.slice(0, 2);
    evening = evening.slice(0, 2);
  }

  if (answers.budgetPreference === 'owned-only') {
    useWhatYouOwn = [
      `Use only what you already own: ${currentProducts || 'your current routine'}`,
    ];
  }

  if (currentProducts) {
    useWhatYouOwn = ensureEntry(
      useWhatYouOwn,
      'Work your existing products into the plan where they already feel comfortable.'
    );
  }

  if (answers.budgetPreference === 'low-cost') {
    priorities = ensurePriority(priorities, 'Look for simple, low-cost additions only if you need them.');
  }

  if (tone === 'gentle') {
    morning = withPrefix(morning, 'Start gently: ');
    evening = withPrefix(evening, 'Wind down with: ');
  } else if (tone === 'curious') {
    useWhatYouOwn = ensureEntry(
      useWhatYouOwn,
      'Using what you already own reduces waste and lowers the chance of irritation.'
    );
  } else if (tone === 'minimal') {
    morning = withPrefix(morning, '- ');
    evening = withPrefix(evening, '- ');
    weekly = [];
    avoid = avoid.slice(0, 3);
  }

  const summary = applyTone(
    `A simple ${tone} routine for ${areaLabel}, focused on ${template.titles[tone] || areaLabel}.`,
    tone
  );

  return {
    title: applyTone(template.titles[tone], tone),
    summary,
    priorities: priorities.slice(0, 3),
    morning: morning.length > 0 ? morning : ['Gently cleanse with a mild cleanser.'],
    evening: evening.length > 0 ? evening : ['Apply a moisturizer after cleansing.'],
    weekly: weekly.length > 0 ? weekly : [],
    avoid: avoid.length > 0 ? avoid : ['Avoid harsh products and over-exfoliation.'],
    useWhatYouOwn: useWhatYouOwn.length > 0 ? useWhatYouOwn : ['Use what you currently own.'],
    safetyNote,
    source: 'fallback',
    tone,
  };
}

function buildPriorities(fallbackCategory: string, areaLabel: string, currentProducts?: string): string[] {
  const base = CATEGORY_PRIORITIES[fallbackCategory] ?? CATEGORY_PRIORITIES.generic;
  const priorities = [...base];

  if (currentProducts) {
    priorities.push('Use the products you already have where they fit.');
  } else {
    priorities.push(`Keep the ${areaLabel.toLowerCase()} routine simple and easy to repeat.`);
  }

  return priorities.slice(0, 3);
}

function ensurePriority(priorities: string[], priority: string): string[] {
  if (priorities.includes(priority)) {
    return priorities;
  }
  return [...priorities, priority].slice(0, 3);
}

function ensureEntry(items: string[], item: string): string[] {
  if (items.includes(item)) {
    return items;
  }
  return [...items, item].slice(0, 3);
}

function withPrefix(arr: string[], prefix: string): string[] {
  return arr.map((item) => (item.startsWith(prefix) ? item : `${prefix}${item}`));
}

function applyTone(text: string, tone: CommunicationTone): string {
  const mod = TONE_MODIFIERS[tone];
  const base = mod.prefix + text + mod.postfix;
  if (mod.prefix || mod.postfix) {
    return base.trim();
  }
  return text;
}

function avoidanceTriggersAdd(avoid: string[], items: string[]): void {
  items.forEach((item) => {
    if (!avoid.includes(item)) {
      avoid.push(item);
    }
  });
  if (avoid.length > 4) {
    avoid.splice(4);
  }
}

export const TONE_LABELS: Record<string, { label: string; description: string }> = {
  gentle: {
    label: 'Gentle',
    description: 'Calm and supportive language.',
  },
  direct: {
    label: 'Direct',
    description: 'Short instructions without extra motivation.',
  },
  curious: {
    label: 'Curious',
    description: 'More explanation about why each step exists.',
  },
  minimal: {
    label: 'Minimal',
    description: 'Only the essential daily actions.',
  },
};

export const BUDGET_LABELS: Record<string, { label: string; description: string }> = {
  'owned-only': {
    label: 'Use only what I own',
    description: 'Use only what I own',
  },
  'low-cost': {
    label: 'Low-cost additions okay',
    description: 'Low-cost additions okay',
  },
  flexible: {
    label: 'No preference',
    description: 'No preference',
  },
};

export const ROUTINE_TIME_LABELS: Record<string, string> = {
  'two-minutes': '2 minutes',
  'five-minutes': '5 minutes',
  'ten-minutes': '10 minutes',
  'full-routine': 'Complete routine',
};

export const SENSITIVITY_LABELS: Record<string, string> = {
  'not-sensitive': 'Not sensitive',
  'sometimes-sensitive': 'Sometimes sensitive',
  'very-sensitive': 'Very sensitive',
  irritated: 'Currently irritated',
};

export const DURATION_LABELS: Record<string, string> = {
  'few-days': 'A few days',
  'few-weeks': 'A few weeks',
  'few-months': 'A few months',
  'longer-six-months': 'Longer than six months',
};

export const SKIN_TYPE_LABELS: Record<string, string> = {
  dry: 'Dry',
  oily: 'Oily',
  balanced: 'Balanced',
  combination: 'Combination',
  unsure: 'Unsure',
};

export const HAIR_TYPE_LABELS: Record<string, string> = {
  fine: 'Fine',
  medium: 'Medium',
  thick: 'Thick',
  unsure: 'Unsure',
};

export const SCALP_TYPE_LABELS: Record<string, string> = {
  dry: 'Dry',
  oily: 'Oily',
  balanced: 'Balanced',
  unsure: 'Unsure',
};

function getAreaTypeLabel(bodyArea: BodyAreaId): string {
  const hairAreas: BodyAreaId[] = ['hair-scalp'];
  if (hairAreas.includes(bodyArea)) return 'hair-scalp';
  return 'skin';
}

export { getAreaTypeLabel };

export default generateFallbackRoutine;
