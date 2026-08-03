'use client';

import Link from 'next/link';
import { Button } from '../ui/Button';

export function EmptySavedState() {
  return (
    <div className="rounded-[1.75rem] border border-soft bg-surface p-8 text-center shadow-soft">
      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-primary">No saved routines yet.</h3>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-secondary">
        Build one routine, save it in this browser, and return here when you want to review or copy it again.
      </p>
      <div className="mt-6">
        <Link href="/routine">
          <Button variant="primary">Create a routine</Button>
        </Link>
      </div>
    </div>
  );
}
