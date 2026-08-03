import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'How It Works | AURA',
  description: 'Simple guidance built around one routine at a time.',
};

export default function HowItWorksPage() {
  return (
    <div className="py-12">
      <div className="container space-y-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">How it works</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-primary">
            Simple guidance, built around your routine.
          </h1>
          <p className="mt-4 text-lg leading-8 text-secondary">
            AURA works in a simple flow: choose an area, answer a few quick questions, and receive a short routine that you can save locally.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['Choose an area', 'Select the part of your face, hair, scalp, or body you want to care for.'],
            ['Choose a concern', 'Pick the cosmetic concern that matters most to you.'],
            ['Answer a few questions', 'Share sensitivity, timing, current products, tone, and budget preference.'],
            ['Receive a short routine', 'Get morning, evening, and optional weekly steps with things to avoid.'],
            ['Save it locally', 'Keep routines in your browser and delete them whenever you want.'],
            ['Why fallback exists', 'The built-in fallback keeps the app useful even when live AI is unavailable.'],
          ].map(([title, body]) => (
            <Card key={title} variant="elevated">
              <h2 className="text-lg font-semibold text-primary">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-secondary">{body}</p>
            </Card>
          ))}
        </div>

        <Card>
          <h2 className="text-xl font-semibold text-primary">Why routines stay short</h2>
          <p className="mt-3 text-sm leading-7 text-secondary">
            AURA keeps routines limited so the plan stays practical, easier to repeat, and less likely to overload the area.
          </p>
        </Card>
      </div>
    </div>
  );
}
