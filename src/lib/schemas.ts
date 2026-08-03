import { z } from 'zod';

export const CommunicationToneSchema = z.enum(['gentle', 'direct', 'curious', 'minimal']);
export type CommunicationTone = z.infer<typeof CommunicationToneSchema>;

export const BudgetPreferenceSchema = z.enum(['owned-only', 'low-cost', 'flexible']);
export type BudgetPreference = z.infer<typeof BudgetPreferenceSchema>;

export const RoutineSourceSchema = z.enum(['ai', 'fallback']);
export type RoutineSource = z.infer<typeof RoutineSourceSchema>;

export const BodyAreaIdSchema = z.enum([
  'face',
  'hair-scalp',
  'neck',
  'underarms',
  'chest-back',
  'arms-hands',
  'body-friction',
  'knees-elbows',
  'legs',
  'feet-nails',
]);
export type BodyAreaId = z.infer<typeof BodyAreaIdSchema>;

export const SensitivityLevelSchema = z.enum(['not-sensitive', 'sometimes-sensitive', 'very-sensitive', 'irritated']);
export type SensitivityLevel = z.infer<typeof SensitivityLevelSchema>;

export const DurationSchema = z.enum(['few-days', 'few-weeks', 'few-months', 'longer-six-months']);
export type Duration = z.infer<typeof DurationSchema>;

export const SkinTypeSchema = z.enum(['dry', 'oily', 'balanced', 'combination', 'unsure']);
export type SkinType = z.infer<typeof SkinTypeSchema>;

export const HairTypeSchema = z.enum(['fine', 'medium', 'thick', 'unsure']);
export type HairType = z.infer<typeof HairTypeSchema>;

export const ScalpTypeSchema = z.enum(['dry', 'oily', 'balanced', 'unsure']);
export type ScalpType = z.infer<typeof ScalpTypeSchema>;

export const RoutineTimeSchema = z.enum(['two-minutes', 'five-minutes', 'ten-minutes', 'full-routine']);
export type RoutineTime = z.infer<typeof RoutineTimeSchema>;

export const QuestionnaireResponseSchema = z.object({
  areaDescription: z.union([SkinTypeSchema, HairTypeSchema, ScalpTypeSchema]),
  sensitivity: SensitivityLevelSchema,
  duration: DurationSchema,
  currentProducts: z.string().max(500).optional().default(''),
  routineTime: RoutineTimeSchema,
  communicationStyle: CommunicationToneSchema.default('direct'),
  budgetPreference: BudgetPreferenceSchema.default('flexible'),
});
export type QuestionnaireResponse = z.infer<typeof QuestionnaireResponseSchema>;

export const RoutineRequestSchema = z.object({
  bodyArea: BodyAreaIdSchema,
  concern: z.string().min(1),
  answers: QuestionnaireResponseSchema,
});
export type RoutineRequest = z.infer<typeof RoutineRequestSchema>;

export const RoutineResultSchema = z.object({
  title: z.string().min(1).max(120),
  summary: z.string().min(1).max(400),
  priorities: z.array(z.string().min(1).max(160)).max(3),
  morning: z.array(z.string().min(1).max(200)).max(2),
  evening: z.array(z.string().min(1).max(200)).max(2),
  weekly: z.array(z.string().min(1).max(200)).max(2),
  avoid: z.array(z.string().min(1).max(200)).max(4),
  useWhatYouOwn: z.array(z.string().min(1).max(200)).max(3),
  safetyNote: z.string().min(1).max(400),
  source: RoutineSourceSchema,
  tone: CommunicationToneSchema,
});
export type RoutineResult = z.infer<typeof RoutineResultSchema>;

export const SavedRoutineSchema = RoutineResultSchema.extend({
  id: z.string().uuid(),
  savedAt: z.string().datetime(),
  bodyArea: BodyAreaIdSchema,
  concern: z.string(),
});
export type SavedRoutine = z.infer<typeof SavedRoutineSchema>;

export const GenerateRequestSchema = RoutineRequestSchema;
export type GenerateRequest = z.infer<typeof GenerateRequestSchema>;
export const GenerateResponseSchema = z.object({
  result: RoutineResultSchema,
});
export type GenerateResponse = z.infer<typeof GenerateResponseSchema>;
