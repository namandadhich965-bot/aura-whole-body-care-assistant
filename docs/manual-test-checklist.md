# Manual Test Checklist

## Home
- [ ] Home opens at `/`
- [ ] Navigation works on desktop
- [ ] Mobile menu opens and closes
- [ ] Hero CTA goes to `/routine`
- [ ] Secondary CTA goes to `/how-it-works`

## Routine Builder
- [ ] `/routine` opens
- [ ] Area selection works
- [ ] Concern selection works
- [ ] Questionnaire accepts answers
- [ ] Review step shows the selected inputs
- [ ] Generate step completes
- [ ] Result displays priorities, routines, avoid items, and safety note

## Fallback and Saving
- [ ] Routine generation works without AI credentials
- [ ] Save works
- [ ] Copy works
- [ ] Start another routine works
- [ ] `/saved` shows saved routines
- [ ] Delete one works
- [ ] Delete all confirmation works

## Supporting Pages
- [ ] `/how-it-works` loads
- [ ] `/safety` loads
- [ ] `/about` loads
- [ ] `/privacy` loads
- [ ] Custom not-found page loads for unknown routes

## Final Checks
- [ ] No broken placeholder links remain
- [ ] No horizontal scrolling on mobile
- [ ] Production build succeeds
