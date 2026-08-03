# Architecture

## Overview
AURA uses the Next.js app router with shared data and schema modules.

## Key Layers
- `src/app`: route pages, API route, and app shell
- `src/components`: landing, routine, saved, UI, and layout components
- `src/data`: body-area definitions and fallback templates
- `src/lib`: Zod schemas, fallback generator, AI client, and storage helpers
- `src/hooks`: saved-routine state hook

## Data Flow
1. The builder collects area, concern, and questionnaire answers.
2. The client sends a validated request to the AI route or uses the local fallback directly.
3. The result is validated against the routine schema.
4. Saved routines are stored locally with validation before rendering.

## Validation Strategy
- Requests are checked with Zod before generation
- Generated routines are checked with Zod before display or storage
- Saved routines are checked again when read from localStorage

## Failure Strategy
- Missing AI config returns fallback output
- Provider failures return fallback output
- Corrupted saved data is ignored instead of crashing the page
