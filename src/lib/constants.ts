export const BODY_AREAS = [
  'face',
  'hair-scalp',
  'underarms',
  'chest-back',
  'knees-elbows',
  'hands-feet',
] as const;

export type BodyArea = typeof BODY_AREAS[number];

export const BODY_AREA_LABELS: Record<BodyArea, string> = {
  face: 'Face',
  'hair-scalp': 'Hair & Scalp',
  underarms: 'Underarms',
  'chest-back': 'Chest & Back',
  'knees-elbows': 'Knees & Elbows',
  'hands-feet': 'Hands & Feet',
};

export const BODY_AREA_ICONS: Record<BodyArea, string> = {
  face: '😊',
  'hair-scalp': '💇',
  underarms: '🫀',
  'chest-back': '🫁',
  'knees-elbows': '🦵',
  'hands-feet': '🤲',
};

export const CONCERNS_BY_AREA: Record<BodyArea, readonly string[]> = {
  face: ['dryness', 'oiliness', 'acne-prone', 'dark-spots', 'dullness'],
  'hair-scalp': ['oily-scalp', 'flakes', 'dry-hair', 'frizz', 'breakage'],
  underarms: ['dryness', 'shaving-irritation', 'uneven-appearance', 'sweat-odour'],
  'chest-back': ['body-acne', 'dryness', 'rough-texture', 'post-acne-marks'],
  'knees-elbows': ['dryness', 'rough-texture', 'dark-uneven'],
  'hands-feet': ['dryness', 'cracked-skin', 'roughness', 'nail-cuticle-care'],
} as const;

export const CONCERN_LABELS: Record<string, string> = {
  dryness: 'Dryness',
  oiliness: 'Oiliness',
  'acne-prone': 'Acne-prone skin',
  'dark-spots': 'Dark spots or uneven appearance',
  dullness: 'Dull-looking skin',
  'oily-scalp': 'Oily scalp',
  flakes: 'Visible flakes',
  'dry-hair': 'Dry hair',
  frizz: 'Frizz',
  breakage: 'Breakage',
  'shaving-irritation': 'Shaving irritation',
  'uneven-appearance': 'Uneven appearance',
  'sweat-odour': 'Sweat and odour management',
  'body-acne': 'Body acne',
  'rough-texture': 'Rough texture',
  'post-acne-marks': 'Post-acne marks',
  'dark-uneven': 'Dark or uneven appearance',
  'cracked-skin': 'Cracked-looking skin',
  roughness: 'Roughness',
  'nail-cuticle-care': 'Basic nail and cuticle care',
};