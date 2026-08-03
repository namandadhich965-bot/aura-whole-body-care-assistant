export const metadata = {
  title: 'Build Story | AURA',
  description: 'How this project was built with AI agents and tested.',
};

export default function BuildStoryPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
            Built with AI agents, reviewed through repeatable checks.
          </h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-warmGrey-50 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-charcoal-900 mb-4">Development timeline</h2>
            <div className="space-y-6">
              {[
                {
                  stage: 'Phase 1',
                  task: 'Repository inspection and scaffold',
                  result: 'Project scaffolded with Next.js 14, TypeScript strict mode, Tailwind CSS, and required dependencies installed.',
                  files: 'package.json, tsconfig.json, tailwind.config.ts, next.config.js',
                },
                {
                  stage: 'Phase 2',
                  task: 'Domain model and fallback system',
                  result: 'Created comprehensive body-area data, concerns, fallback templates, and Zod schemas.',
                  files: 'src/data/bodyAreas.ts, src/data/fallbackTemplates.ts, src/lib/fallbackGenerator.ts, src/lib/schemas.ts',
                },
                {
                  stage: 'Phase 3',
                  task: 'Core routine flow without AI',
                  result: 'Built routine builder wizard with validation, review step, and result display. Fallback generation works end-to-end.',
                  files: 'src/components/routine/',
                },
                {
                  stage: 'Phase 4',
                  task: 'Full site pages and navigation',
                  result: 'Created landing page, all route pages, navigation, and footer.',
                  files: 'src/app/*',
                },
                {
                  stage: 'Phase 5',
                  task: 'Design system',
                  result: 'Applied typography, color palette, spacing, and reusable UI components.',
                  files: 'src/components/ui/',
                },
                {
                  stage: 'Phase 6',
                  task: 'Motion system',
                  result: 'Added entrance animations, section reveals, reduced-motion support, and progress indicators.',
                  files: 'All components using motion/react',
                },
                {
                  stage: 'Phase 7',
                  task: 'WebGL hero',
                  result: 'Built decorative AuraScene with Three.js fallback to CSS/SVG for reliability.',
                  files: 'src/components/visuals/',
                },
                {
                  stage: 'Phase 8',
                  task: 'Optional live AI',
                  result: 'Created /api/generate-routine route with validation, timeout, automatic fallback.',
                  files: 'src/app/api/generate-routine/route.ts, src/lib/aiClient.ts',
                },
                {
                  stage: 'Phase 9',
                  task: 'Documentation and tests',
                  result: 'Created README, architecture docs, safety boundaries, and automated test suite.',
                  files: 'docs/',
                },
                {
                  stage: 'Phase 10',
                  task: 'Final verification',
                  result: 'Lint passes, tests pass, production build passes.',
                  files: 'All files',
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-sage-300 pl-4">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-sage-600 bg-sage-50 px-2 py-0.5 rounded">
                      {item.stage}
                    </span>
                    <div>
                      <h3 className="font-semibold text-charcoal-900">{item.task}</h3>
                      <p className="text-sm text-charcoal-600 mt-1">{item.result}</p>
                      <p className="text-xs text-charcoal-500 mt-1">Files: {item.files}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-warmGrey-50 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-charcoal-900 mb-4">Tools used</h2>
            <ul className="list-disc list-inside text-charcoal-600 space-y-1">
              <li>Claude (Anthropic) as implementation agent</li>
              <li>Next.js 14 with App Router</li>
              <li>TypeScript in strict mode</li>
              <li>Tailwind CSS for styling</li>
              <li>Motion for React for animations</li>
              <li>Three.js with React Three Fiber for WebGL</li>
              <li>Vitest for test runner</li>
            </ul>
          </div>

          <p className="text-sm text-charcoal-500 text-center">
            This project was built for the ChatGPT Codex India Hackathon 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
