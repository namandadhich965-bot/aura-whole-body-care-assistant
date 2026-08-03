import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  RoutineRequestSchema,
  RoutineResultSchema,
  SavedRoutineSchema,
  BodyAreaIdSchema,
  CommunicationToneSchema,
  BudgetPreferenceSchema,
} from '../lib/schemas';
import { BODY_AREAS, getBodyArea, getConcern, getAllConcerns, getFallbackCategory } from '../data/bodyAreas';
import { FALLBACK_TEMPLATES } from '../data/fallbackTemplates';
import { generateFallbackRoutine } from '../lib/fallbackGenerator';
import { RoutineRequest } from '../lib/schemas';
import { getSavedRoutines } from '../lib/localStorage';

function createTestRequest(overrides: Partial<{
  area: string;
  concern: string;
  areaDescription: string;
  sensitivity: string;
  duration: string;
  routineTime: string;
  communicationStyle: string;
  budgetPreference: string;
  currentProducts: string;
}> = {}): RoutineRequest {
  return {
    bodyArea: (overrides.area || 'face') as RoutineRequest['bodyArea'],
    concern: overrides.concern || 'dryness',
    answers: {
      areaDescription: (overrides.areaDescription || 'balanced') as RoutineRequest['answers']['areaDescription'],
      sensitivity: (overrides.sensitivity || 'not-sensitive') as RoutineRequest['answers']['sensitivity'],
      duration: (overrides.duration || 'few-weeks') as RoutineRequest['answers']['duration'],
      currentProducts: overrides.currentProducts ?? '',
      routineTime: (overrides.routineTime || 'five-minutes') as RoutineRequest['answers']['routineTime'],
      communicationStyle: (overrides.communicationStyle || 'direct') as RoutineRequest['answers']['communicationStyle'],
      budgetPreference: (overrides.budgetPreference || 'flexible') as RoutineRequest['answers']['budgetPreference'],
    },
  };
}

describe('Schemas', () => {
  it('RoutineRequestSchema accepts valid data', () => {
    const valid = {
      bodyArea: 'face',
      concern: 'dryness',
      answers: {
        areaDescription: 'dry',
        sensitivity: 'not-sensitive',
        duration: 'few-weeks',
        currentProducts: '',
        routineTime: 'five-minutes',
        communicationStyle: 'direct',
        budgetPreference: 'flexible',
      },
    };
    const result = RoutineRequestSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it('RoutineRequestSchema rejects invalid data', () => {
    const invalid = {
      bodyArea: 'invalid-area',
      concern: 'dryness',
      answers: {},
    };
    const result = RoutineRequestSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it('RoutineResultSchema accepts valid output', () => {
    const valid = {
      title: 'Dryness Care',
      summary: 'A simple routine for dry skin.',
      priorities: ['Cleanse gently.', 'Moisturize consistently.', 'Avoid harsh scrubs.'],
      morning: ['Cleanse gently.'],
      evening: ['Moisturize.'],
      weekly: ['Exfoliate once.'],
      avoid: ['Harsh scrubbing'],
      useWhatYouOwn: ['Gentle cleanser'],
      safetyNote: 'Seek professional care if symptoms worsen.',
      source: 'fallback' as const,
      tone: 'direct' as const,
    };
    const result = RoutineResultSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it('RoutineResultSchema rejects unsafe structure', () => {
    const invalid = {
      title: '',
      summary: '',
      morning: [],
      evening: [],
      avoid: [],
      source: 'invalid' as const,
    };
    const result = RoutineResultSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it('CommunicationToneSchema accepts valid values', () => {
    expect(CommunicationToneSchema.safeParse('gentle').success).toBe(true);
    expect(CommunicationToneSchema.safeParse('direct').success).toBe(true);
    expect(CommunicationToneSchema.safeParse('invalid').success).toBe(false);
  });

  it('BudgetPreferenceSchema accepts valid values', () => {
    expect(BudgetPreferenceSchema.safeParse('owned-only').success).toBe(true);
    expect(BudgetPreferenceSchema.safeParse('invalid').success).toBe(false);
  });
});

describe('Body Area Data', () => {
  it('Every body area has concerns', () => {
    BODY_AREAS.forEach((area) => {
      expect(area.concerns.length).toBeGreaterThan(0);
      expect(area.label.length).toBeGreaterThan(0);
    });
  });

  it('Every body area has a valid id', () => {
    BODY_AREAS.forEach((area) => {
      expect(BodyAreaIdSchema.safeParse(area.id).success).toBe(true);
    });
  });

  it('getConcern returns the correct concern', () => {
    const concern = getConcern('face', 'dryness');
    expect(concern?.id).toBe('dryness');
    expect(concern?.label).toBe('Dryness');
  });

  it('getConcern returns undefined for unknown concern', () => {
    const concern = getConcern('face', 'unknown');
    expect(concern).toBeUndefined();
  });

  it('getBodyArea returns the correct area', () => {
    const area = getBodyArea('face');
    expect(area?.id).toBe('face');
    expect(area?.label).toBe('Face');
  });

  it('getAllConcerns returns all concerns', () => {
    const allConcerns = getAllConcerns();
    expect(allConcerns.length).toBeGreaterThan(10);
  });
});

describe('Fallback Generator', () => {
  it('Every concern maps to a fallback category with a template', () => {
    const allConcerns = getAllConcerns();
    allConcerns.forEach((concern) => {
      const category = concern.fallbackCategory;
      expect(FALLBACK_TEMPLATES[category]).toBeDefined();
    });
  });

  it('Every fallback template returns a valid routine', () => {
    Object.keys(FALLBACK_TEMPLATES).forEach((category) => {
      const area = BODY_AREAS[0];
      const concern = area.concerns.find((c) => c.fallbackCategory === category);
      if (!concern) return;
      const request = createTestRequest({ area: area.id, concern: concern.id });
      const result = generateFallbackRoutine(request);
      expect(RoutineResultSchema.safeParse(result).success).toBe(true);
      expect(result.title.length).toBeGreaterThan(0);
      expect(result.safetyNote.length).toBeGreaterThan(0);
      expect(result.morning.length).toBeLessThanOrEqual(2);
      expect(result.evening.length).toBeLessThanOrEqual(2);
      expect(result.avoid.length).toBeLessThanOrEqual(4);
      expect(result.weekly.length).toBeLessThanOrEqual(2);
      expect(result.useWhatYouOwn.length).toBeLessThanOrEqual(3);
    });
  });

  it('Unsupported concern uses generic fallback', () => {
    const request = createTestRequest({ area: 'face', concern: 'nonexistent-concern' });
    const result = generateFallbackRoutine(request);
    expect(result.title.length).toBeGreaterThan(0);
    expect(result.safetyNote.length).toBeGreaterThan(0);
  });

  it('Fallback respects communication tone', () => {
    const tones: ('gentle' | 'direct' | 'curious' | 'minimal')[] = ['gentle', 'direct', 'curious', 'minimal'];
    tones.forEach((tone) => {
      const request = createTestRequest({
        area: 'face',
        concern: 'dryness',
        communicationStyle: tone,
      });
      const result = generateFallbackRoutine(request);
      expect(result.tone).toBe(tone);
    });
  });

  it('Fallback respects routine time (2 minutes = minimal steps)', () => {
    const request = createTestRequest({
      area: 'face',
      concern: 'dryness',
      routineTime: 'two-minutes',
    });
    const result = generateFallbackRoutine(request);
    expect(result.morning.length).toBeLessThanOrEqual(1);
    expect(result.evening.length).toBeLessThanOrEqual(1);
  });

  it('Fallback never throws for supported area and concern', () => {
    BODY_AREAS.forEach((area) => {
      area.concerns.forEach((concern) => {
        const request = createTestRequest({ area: area.id, concern: concern.id });
        expect(() => generateFallbackRoutine(request)).not.toThrow();
      });
    });
  });

  it('Fallback never includes unsafe practices', () => {
    BODY_AREAS.forEach((area) => {
      area.concerns.forEach((concern) => {
        const request = createTestRequest({ area: area.id, concern: concern.id });
        const result = generateFallbackRoutine(request);

        const allText = [
          result.title, result.summary,
          ...result.morning, ...result.evening, ...result.weekly,
          ...result.avoid, ...result.useWhatYouOwn, result.safetyNote
        ].join(' ').toLowerCase();

        expect(allText).not.toMatch(/lemon/);
        expect(allText).not.toMatch(/bleach/i);
        expect(allText).not.toMatch(/toothpaste/i);
        expect(allText).not.toMatch(/baking soda/i);
      });
    });
  });

  it('Fallback always includes a safety note', () => {
    BODY_AREAS.forEach((area) => {
      area.concerns.forEach((concern) => {
        const request = createTestRequest({ area: area.id, concern: concern.id });
        const result = generateFallbackRoutine(request);
        expect(result.safetyNote.length).toBeGreaterThan(10);
        expect(result.safetyNote).toMatch(/professional|qualified/i);
      });
    });
  });

  it('Fallback always includes source field', () => {
    const request = createTestRequest();
    const result = generateFallbackRoutine(request);
    expect(result.source).toBe('fallback');
  });
});

describe('Saved Routine validation', () => {
  it('Valid saved routine passes validation', () => {
    const valid = {
      id: '550e8400-e29b-41d4-a716-446655440000',
      title: 'Test Routine',
      summary: 'A test routine.',
      priorities: ['Keep it simple', 'Use what you own'],
      morning: ['Cleanse.'],
      evening: ['Moisturize.'],
      weekly: [],
      avoid: ['Scrubbing'],
      useWhatYouOwn: ['Cleanser'],
      safetyNote: 'Seek professional help for severe issues.',
      source: 'fallback' as const,
      tone: 'direct' as const,
      savedAt: new Date().toISOString(),
      bodyArea: 'face' as const,
      concern: 'dryness',
    };
    const result = SavedRoutineSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it('Corrupted data fails validation', () => {
    const corrupted = {
      id: 'test',
      title: 123,
      summary: null,
      morning: 'not an array',
      source: 'invalid',
    };
    const result = SavedRoutineSchema.safeParse(corrupted);
    expect(result.success).toBe(false);
  });

  it('Missing required fields fail validation', () => {
    const incomplete = {
      id: 'test',
      title: 'Test',
    };
    const result = SavedRoutineSchema.safeParse(incomplete);
    expect(result.success).toBe(false);
  });
});

describe('Runtime safeguards', () => {
  const originalEnv = {
    AI_API_KEY: process.env.AI_API_KEY,
    AI_BASE_URL: process.env.AI_BASE_URL,
    AI_MODEL: process.env.AI_MODEL,
  };

  beforeEach(() => {
    process.env.AI_API_KEY = '';
    process.env.AI_BASE_URL = '';
    process.env.AI_MODEL = '';
    localStorage.clear();
    vi.resetModules();
  });

  afterEach(() => {
    process.env.AI_API_KEY = originalEnv.AI_API_KEY;
    process.env.AI_BASE_URL = originalEnv.AI_BASE_URL;
    process.env.AI_MODEL = originalEnv.AI_MODEL;
    localStorage.clear();
    vi.resetModules();
  });

  it('Missing API key returns fallback', async () => {
    const { callAiProvider } = await import('../lib/aiClient');
    const result = await callAiProvider(createTestRequest({ area: 'face', concern: 'dryness' }));
    expect(result.source).toBe('fallback');
  });

  it('Corrupted saved data is handled safely', () => {
    localStorage.setItem('aura.savedRoutines.v1', 'not-json');
    expect(getSavedRoutines()).toEqual([]);

    localStorage.setItem('aura.savedRoutines.v1', JSON.stringify([{ bad: 'data' }]));
    expect(getSavedRoutines()).toEqual([]);
  });
});

describe('getFallbackCategory', () => {
  it('Returns correct category for known concern', () => {
    expect(getFallbackCategory('face', 'dryness')).toBe('dryness');
    expect(getFallbackCategory('face', 'acne-prone')).toBe('breakout-care');
    expect(getFallbackCategory('hair-scalp', 'oily-scalp')).toBe('scalp-oil');
  });

  it('Returns default for unknown concern', () => {
    expect(getFallbackCategory('face', 'unknown')).toBe('dryness');
  });
});
