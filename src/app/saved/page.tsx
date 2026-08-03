'use client';

import Link from 'next/link';
import { useSavedRoutines } from '@/hooks/useSavedRoutines';
import { SavedRoutineList } from '@/components/saved/SavedRoutineList';
import { Button } from '@/components/ui/Button';

export default function SavedPage() {
  const { routines, remove, clearAll } = useSavedRoutines();

  return (
    <div className="py-12">
      <div className="container space-y-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">Saved routines</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-primary">Your saved routines</h1>
          <p className="mt-4 text-lg leading-8 text-secondary">
            Routines are stored only in this browser.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/routine">
            <Button variant="primary">Create another routine</Button>
          </Link>
        </div>

        <SavedRoutineList routines={routines} onDelete={remove} onClearAll={clearAll} />
      </div>
    </div>
  );
}
