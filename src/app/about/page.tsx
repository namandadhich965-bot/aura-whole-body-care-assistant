import Link from 'next/link';
import { siteConfig } from '@/config/site';

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

        <div className="rounded-[1.5rem] border border-soft bg-surface p-8">
          <h2 className="text-xl font-semibold text-primary">See the demo</h2>
          <p className="mt-3 text-sm leading-7 text-secondary">
            A product walkthrough is being prepared. In the meantime, you can try the full routine builder right now.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#demo"
              className="inline-flex items-center justify-center rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View the demo section
            </Link>
            <Link
              href="/routine"
              className="inline-flex items-center justify-center rounded-full border border-soft bg-surface px-5 py-2.5 text-sm font-medium text-secondary transition-colors hover:bg-surface-elevated hover:text-primary"
            >
              Build a routine
            </Link>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-soft bg-surface p-8">
          <h2 className="text-xl font-semibold text-primary">Open source</h2>
          <p className="mt-3 text-sm leading-7 text-secondary">
            The full source code is available on GitHub. Contributions, feedback, and issues are welcome.
          </p>
          <div className="mt-5">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-soft bg-surface px-5 py-2.5 text-sm font-medium text-secondary transition-colors hover:bg-surface-elevated hover:text-primary"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              View source on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
