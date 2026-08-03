export const metadata = {
  title: 'About | AURA',
  description: 'Whole-body care without the overwhelm.',
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container space-y-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">About</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-primary">
            Whole-body care without the overwhelm.
          </h1>
          <p className="mt-4 text-lg leading-8 text-secondary">
            AURA turns fragmented personal-care advice into a short routine that is easier to follow.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-soft bg-surface p-6">
            <h2 className="text-xl font-semibold text-primary">Why this exists</h2>
            <p className="mt-3 text-sm leading-7 text-secondary">
              Skin, hair, scalp, and body care are often treated as separate problems. AURA brings them into one place so people can make simpler, lower-stress decisions.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-soft bg-surface p-6">
            <h2 className="text-xl font-semibold text-primary">What makes it different</h2>
            <p className="mt-3 text-sm leading-7 text-secondary">
              The interface avoids beauty scoring, keeps routines short, and always has a built-in fallback mode so the app still works without live AI.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-soft bg-surface p-6">
            <h2 className="text-xl font-semibold text-primary">Hackathon context</h2>
            <p className="mt-3 text-sm leading-7 text-secondary">
              AURA was built for the ChatGPT Codex India Hackathon 2026 as a practical, submission-ready whole-body care assistant.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-soft bg-surface p-6">
            <h2 className="text-xl font-semibold text-primary">Technology</h2>
            <p className="mt-3 text-sm leading-7 text-secondary">
              Next.js, TypeScript, Zod, Tailwind CSS, localStorage for saved routines, and an optional server-side AI route with a fallback engine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
