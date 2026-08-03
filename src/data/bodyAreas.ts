export type BodyAreaId =
  | 'face'
  | 'hair-scalp'
  | 'neck'
  | 'underarms'
  | 'chest-back'
  | 'arms-hands'
  | 'body-friction'
  | 'knees-elbows'
  | 'legs'
  | 'feet-nails';

export type CareCategory =
  | 'face'
  | 'hair-scalp'
  | 'body'
  | 'hands-feet'
  | 'sensitive';

export type CommunicationTone = 'gentle' | 'direct' | 'curious' | 'minimal';
export type BudgetPreference = 'owned-only' | 'low-cost' | 'flexible';
export type RoutineSource = 'ai' | 'fallback';

export interface BodyArea {
  id: BodyAreaId;
  label: string;
  shortDescription: string;
  icon: string;
  careCategory: CareCategory;
  concerns: Concern[];
}

export interface Concern {
  id: string;
  label: string;
  fallbackCategory: string;
}

export const BODY_AREAS: BodyArea[] = [
  {
    id: 'face',
    label: 'Face',
    shortDescription: 'Facial skin including forehead, cheeks, nose, chin, and lips.',
    icon: 'face',
    careCategory: 'face',
    concerns: [
      { id: 'dryness', label: 'Dryness', fallbackCategory: 'dryness' },
      { id: 'oiliness', label: 'Oiliness', fallbackCategory: 'oil-control' },
      { id: 'acne-prone', label: 'Acne-prone skin', fallbackCategory: 'breakout-care' },
      { id: 'dark-spots', label: 'Dark spots or uneven appearance', fallbackCategory: 'uneven-appearance' },
      { id: 'dullness', label: 'Dull-looking skin', fallbackCategory: 'dryness' },
      { id: 'rough-texture', label: 'Rough texture', fallbackCategory: 'rough-texture' },
      { id: 'shaving-irritation', label: 'Shaving irritation', fallbackCategory: 'shaving-care' },
      { id: 'lip-dryness', label: 'Lip dryness', fallbackCategory: 'dryness' },
    ],
  },
  {
    id: 'hair-scalp',
    label: 'Hair and scalp',
    shortDescription: 'Scalp health and hair condition from roots to ends.',
    icon: 'hair-scalp',
    careCategory: 'hair-scalp',
    concerns: [
      { id: 'oily-scalp', label: 'Oily scalp', fallbackCategory: 'scalp-oil' },
      { id: 'flakes', label: 'Visible flakes', fallbackCategory: 'scalp-flakes' },
      { id: 'dry-scalp', label: 'Dry scalp', fallbackCategory: 'dryness' },
      { id: 'dry-hair', label: 'Dry hair', fallbackCategory: 'hair-dryness' },
      { id: 'frizz', label: 'Frizz', fallbackCategory: 'hair-frizz' },
      { id: 'breakage', label: 'Breakage', fallbackCategory: 'hair-breakage' },
      { id: 'product-buildup', label: 'Product buildup', fallbackCategory: 'scalp-oil' },
      { id: 'heat-damaged', label: 'Heat-damaged appearance', fallbackCategory: 'hair-breakage' },
    ],
  },
  {
    id: 'neck',
    label: 'Neck',
    shortDescription: 'Neck area including front and back.',
    icon: 'neck',
    careCategory: 'sensitive',
    concerns: [
      { id: 'dryness', label: 'Dryness', fallbackCategory: 'dryness' },
      { id: 'shaving-irritation', label: 'Shaving irritation', fallbackCategory: 'shaving-care' },
      { id: 'rough-texture', label: 'Rough texture', fallbackCategory: 'rough-texture' },
      { id: 'uneven-appearance', label: 'Uneven appearance', fallbackCategory: 'uneven-appearance' },
      { id: 'friction-discomfort', label: 'Friction-related discomfort', fallbackCategory: 'friction-care' },
    ],
  },
  {
    id: 'underarms',
    label: 'Underarms',
    shortDescription: 'Underarm area including skin and hair concerns.',
    icon: 'underarms',
    careCategory: 'sensitive',
    concerns: [
      { id: 'dryness', label: 'Dryness', fallbackCategory: 'dryness' },
      { id: 'shaving-irritation', label: 'Shaving irritation', fallbackCategory: 'shaving-care' },
      { id: 'uneven-appearance', label: 'Uneven appearance', fallbackCategory: 'uneven-appearance' },
      { id: 'sweat-odour', label: 'Sweat and odour management', fallbackCategory: 'sweat-odour' },
      { id: 'friction-discomfort', label: 'Friction-related discomfort', fallbackCategory: 'friction-care' },
      { id: 'product-sensitivity', label: 'Product sensitivity', fallbackCategory: 'dryness' },
    ],
  },
  {
    id: 'chest-back',
    label: 'Chest and back',
    shortDescription: 'Chest and upper back area.',
    icon: 'chest-back',
    careCategory: 'body',
    concerns: [
      { id: 'body-acne', label: 'Body acne', fallbackCategory: 'breakout-care' },
      { id: 'dryness', label: 'Dryness', fallbackCategory: 'dryness' },
      { id: 'rough-texture', label: 'Rough texture', fallbackCategory: 'rough-texture' },
      { id: 'post-acne-marks', label: 'Post-acne marks', fallbackCategory: 'uneven-appearance' },
      { id: 'sweat-discomfort', label: 'Sweat-related discomfort', fallbackCategory: 'sweat-odour' },
    ],
  },
  {
    id: 'arms-hands',
    label: 'Arms and hands',
    shortDescription: 'Arms, hands, and cuticles.',
    icon: 'arms-hands',
    careCategory: 'hands-feet',
    concerns: [
      { id: 'dryness', label: 'Dryness', fallbackCategory: 'dryness' },
      { id: 'rough-texture', label: 'Rough texture', fallbackCategory: 'rough-texture' },
      { id: 'uneven-appearance', label: 'Uneven appearance', fallbackCategory: 'uneven-appearance' },
      { id: 'hand-cracking', label: 'Hand cracking', fallbackCategory: 'dryness' },
      { id: 'cuticle-care', label: 'Cuticle care', fallbackCategory: 'nail-cuticle-care' },
      { id: 'shaving-irritation', label: 'Shaving irritation', fallbackCategory: 'shaving-care' },
    ],
  },
  {
    id: 'body-friction',
    label: 'Body and friction-prone areas',
    shortDescription: 'Inner thighs, groin folds, and other friction-prone zones.',
    icon: 'body-friction',
    careCategory: 'body',
    concerns: [
      { id: 'dryness', label: 'Dryness', fallbackCategory: 'dryness' },
      { id: 'friction-discomfort', label: 'Friction-related discomfort', fallbackCategory: 'friction-care' },
      { id: 'uneven-appearance', label: 'Uneven appearance', fallbackCategory: 'uneven-appearance' },
      { id: 'rough-texture', label: 'Rough texture', fallbackCategory: 'rough-texture' },
      { id: 'sweat-management', label: 'Sweat management', fallbackCategory: 'sweat-odour' },
    ],
  },
  {
    id: 'knees-elbows',
    label: 'Knees and elbows',
    shortDescription: 'Knees and elbows - often drier and thicker skin.',
    icon: 'knees-elbows',
    careCategory: 'body',
    concerns: [
      { id: 'dryness', label: 'Dryness', fallbackCategory: 'dryness' },
      { id: 'rough-texture', label: 'Rough texture', fallbackCategory: 'rough-texture' },
      { id: 'dark-uneven', label: 'Dark or uneven appearance', fallbackCategory: 'uneven-appearance' },
      { id: 'friction-discomfort', label: 'Friction-related discomfort', fallbackCategory: 'friction-care' },
    ],
  },
  {
    id: 'legs',
    label: 'Legs',
    shortDescription: 'Legs including shaving and dryness concerns.',
    icon: 'legs',
    careCategory: 'body',
    concerns: [
      { id: 'dryness', label: 'Dryness', fallbackCategory: 'dryness' },
      { id: 'rough-texture', label: 'Rough texture', fallbackCategory: 'rough-texture' },
      { id: 'shaving-irritation', label: 'Shaving irritation', fallbackCategory: 'shaving-care' },
      { id: 'uneven-appearance', label: 'Uneven appearance', fallbackCategory: 'uneven-appearance' },
      { id: 'ingrown-prevention', label: 'Ingrown-hair prevention habits', fallbackCategory: 'shaving-care' },
    ],
  },
  {
    id: 'feet-nails',
    label: 'Feet and nails',
    shortDescription: 'Feet, toenails, and cuticles.',
    icon: 'feet-nails',
    careCategory: 'hands-feet',
    concerns: [
      { id: 'dryness', label: 'Dryness', fallbackCategory: 'foot-care' },
      { id: 'cracked-skin', label: 'Cracked-looking skin', fallbackCategory: 'dryness' },
      { id: 'rough-texture', label: 'Rough texture', fallbackCategory: 'rough-texture' },
      { id: 'nail-care', label: 'Basic nail care', fallbackCategory: 'nail-cuticle-care' },
      { id: 'cuticle-care', label: 'Cuticle care', fallbackCategory: 'nail-cuticle-care' },
      { id: 'odour-management', label: 'Odour management', fallbackCategory: 'sweat-odour' },
    ],
  },
];

export function getBodyArea(id: BodyAreaId): BodyArea | undefined {
  return BODY_AREAS.find((area) => area.id === id);
}

export function getConcern(areaId: BodyAreaId, concernId: string): Concern | undefined {
  const area = getBodyArea(areaId);
  return area?.concerns.find((c) => c.id === concernId);
}

export function getAllConcerns(): Concern[] {
  return BODY_AREAS.flatMap((area) => area.concerns);
}

export function getFallbackCategory(areaId: BodyAreaId, concernId: string): string {
  const concern = getConcern(areaId, concernId);
  return concern?.fallbackCategory ?? 'dryness';
}
