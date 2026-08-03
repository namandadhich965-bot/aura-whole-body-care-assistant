import { z } from 'zod';
import { RoutineRequest, RoutineRequestSchema, RoutineResult, RoutineResultSchema } from './schemas';
import generateFallbackRoutine from './fallbackGenerator';

const AI_TIMEOUT_MS = 8000;
const AI_BASE_URL = process.env.AI_BASE_URL;
const AI_API_KEY = process.env.AI_API_KEY;
const AI_MODEL = process.env.AI_MODEL;

const OpenAIResponseSchema = z.object({
  choices: z.array(
    z.object({
      message: z.object({
        content: z.string().min(1),
      }),
    })
  ),
});

export async function callAiProvider(request: RoutineRequest): Promise<RoutineResult> {
  if (!AI_API_KEY || !AI_BASE_URL || !AI_MODEL) {
    return generateFallbackRoutine(request);
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), AI_TIMEOUT_MS);

    const response = await fetch(`${AI_BASE_URL.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AI_API_KEY}`,
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: [
          {
            role: 'system',
            content: [
              'You are AURA, a friendly AI whole-body cosmetic care assistant.',
              'Provide general cosmetic self-care guidance only.',
              'Do not diagnose medical conditions.',
              'Do not prescribe medication.',
              'Do not promise guaranteed outcomes.',
              'Do not recommend whitening, bleaching, or skin-lightening.',
              'Do not recommend lemon, bleach, toothpaste, baking soda, harsh scrubbing, or unsafe DIY practices.',
              'Do not make attractiveness or beauty scores.',
              'Do not shame users.',
              'Prefer the smallest useful routine.',
              'Prefer product categories and items the user already owns.',
              'Advise professional assessment for severe pain, swelling, difficulty breathing, eye involvement, open wounds, infected-looking skin, rapidly spreading reactions, sudden major hair loss, or symptoms that persist or worsen.',
              'Return only JSON in this structure:',
              '{',
              '  "title": "string",',
              '  "summary": "string",',
              '  "priorities": ["string"],',
              '  "morning": ["string"],',
              '  "evening": ["string"],',
              '  "weekly": ["string"],',
              '  "avoid": ["string"],',
              '  "useWhatYouOwn": ["string"],',
              '  "safetyNote": "string",',
              '  "source": "ai",',
              '  "tone": "gentle | direct | curious | minimal"',
              '}',
              'priorities: up to 3 items',
              'morning: up to 2 items',
              'evening: up to 2 items',
              'weekly: up to 2 items',
              'avoid: up to 4 items',
              'useWhatYouOwn: up to 3 items',
              'No brand names. Use product categories only.',
              'Be concise and calming.',
            ].join('\n'),
          },
          {
            role: 'user',
            content: JSON.stringify(request),
          },
        ],
        max_tokens: 1200,
        temperature: 0.4,
        response_format: { type: 'json_object' },
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const parsedResponse = OpenAIResponseSchema.safeParse(await response.json());
    if (!parsedResponse.success) {
      throw new Error('Unexpected provider response');
    }

    const content = parsedResponse.data.choices[0]?.message?.content;
    if (!content) {
      throw new Error('Missing provider content');
    }

    const contentJson = JSON.parse(content) as unknown;
    const result = RoutineResultSchema.safeParse(contentJson);
    if (!result.success) {
      throw new Error('Invalid provider routine result');
    }

    const validatedRequest = RoutineRequestSchema.safeParse(request);
    if (!validatedRequest.success) {
      throw new Error('Invalid request data');
    }

    return result.data;
  } catch {
    return generateFallbackRoutine(request);
  }
}
