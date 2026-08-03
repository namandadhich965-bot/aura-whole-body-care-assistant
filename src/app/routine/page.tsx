import { Suspense } from 'react';
import { RoutineBuilder } from '@/components/routine/RoutineBuilder';

export const metadata = {
  title: 'Routine Builder | AURA',
  description: 'Build a personalized cosmetic care routine for your face, hair, scalp, or body.',
};

export default function RoutinePage() {
  return (
    <div className="py-12">
      <div className="container">
        <Suspense
          fallback={
            <div className="rounded-[1.75rem] border border-soft bg-surface p-6 text-sm text-secondary">
              Loading routine builder...
            </div>
          }
        >
          <RoutineBuilder />
        </Suspense>
      </div>
    </div>
  );
}
