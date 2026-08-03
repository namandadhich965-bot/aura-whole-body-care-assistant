import { NextRequest, NextResponse } from 'next/server';
import { RoutineRequestSchema } from '@/lib/schemas';
import { callAiProvider } from '@/lib/aiClient';

export const dynamic = 'force-dynamic';
export const maxDuration = 15;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = RoutineRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400 }
      );
    }

    return NextResponse.json({ result: await callAiProvider(parsed.data) });
  } catch (error) {
    return NextResponse.json(
      { error: 'Unable to process request' },
      { status: 500 }
    );
  }
}
