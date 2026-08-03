# AURA

## Problem
AURA addresses fragmented cosmetic self-care guidance. People often need separate advice for face, hair, scalp, body, hands, and feet, and the result is usually too long or too scattered to follow.

## Solution
AURA is a friendly whole-body cosmetic-care assistant. It turns one selected concern and a few simple answers into a short routine that is easier to follow.

## Features
- Whole-body coverage for face, hair, scalp, and body
- Short routines with morning, evening, and optional weekly steps
- Built-in fallback generation when no AI credentials are available
- Saved routines in localStorage
- Copy, delete, and filter saved routines
- Safety boundaries that avoid diagnosis and unsafe advice

## Routes
- `/`
- `/routine`
- `/saved`
- `/how-it-works`
- `/safety`
- `/about`
- `/privacy`
- custom not-found page

## Architecture
- Next.js app router
- TypeScript for shared types and runtime code
- Zod schemas for request, response, and saved-data validation
- Local-only storage for saved routines
- Optional server-side AI route at `POST /api/generate-routine`

## Fallback Mode
Fallback mode is required and always available. If AI credentials are missing or the provider fails, AURA returns a safe built-in routine instead of breaking the flow.

## Optional Live AI Mode
Set these environment variables to enable live generation:
- `AI_API_KEY`
- `AI_BASE_URL`
- `AI_MODEL`

The server route validates the request, calls one provider, validates the result, and falls back automatically on failure.

## Setup
```bash
npm install
npm run dev
```

## Environment Variables
Client-facing optional links:
- `NEXT_PUBLIC_GITHUB_URL`
- `NEXT_PUBLIC_DEMO_VIDEO_URL`
- `NEXT_PUBLIC_PROJECT_DOC_URL`
- `NEXT_PUBLIC_DEPLOYED_URL`

AI generation:
- `AI_API_KEY`
- `AI_BASE_URL`
- `AI_MODEL`

## Commands
```bash
npm run dev
npm run build
npm run lint
npm run test
npm run typecheck
```

## Testing
The project uses Vitest. The current test coverage checks request and result schemas, body-area data coverage, fallback routines, saved-data safety, tone values, and missing-AI fallback behavior.

## Deployment
1. Set the optional AI and public-link environment variables if needed.
2. Run `npm run build`.
3. Deploy the Next.js app to your hosting platform of choice.

### Live Production URL
https://project-azure-ten-87.vercel.app

## Safety
AURA provides general cosmetic self-care guidance only. It does not diagnose, prescribe, promise results, or recommend unsafe DIY treatments.

## Privacy
- No account
- No photos
- Saved routines stay in the browser
- No intentional medical data collection
- Text may be sent to a configured AI provider only when live AI is enabled

## Known Limitations
- Live AI output depends on the configured provider
- Saved routines exist only in the current browser
- This is a hackathon project and not a substitute for professional care
