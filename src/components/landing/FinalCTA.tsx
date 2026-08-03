'use client';

import Link from 'next/link';
import { Button } from '../ui/Button';

export function FinalCTA() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="rounded-[2rem] border border-strong bg-surface-elevated px-6 py-10 text-center shadow-soft md:px-10">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
            Start with one concern.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-secondary">
            Choose an area and let AURA turn it into a routine that feels manageable.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/routine">
              <Button variant="primary" size="lg">
                Build my routine
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="secondary" size="lg">
                Learn how AURA works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
