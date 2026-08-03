'use client';

import { BodyAreaId } from '../../lib/schemas';

interface StepIndicatorProps {
  currentStep: number;
  area: BodyAreaId | null;
  concern: string | null;
}

const STEPS = [
  { number: 1, label: 'Choose area' },
  { number: 2, label: 'Select concern' },
  { number: 3, label: 'Tell us more' },
  { number: 4, label: 'Review' },
  { number: 5, label: 'Your routine' },
];

export function StepIndicator({ currentStep, area, concern }: StepIndicatorProps) {
  const displayLabel = (step: number) => {
    if (step === 2 && area) {
      return `Concern for ${area.replace(/-/g, ' ')}`;
    }
    if (step === 4 && concern) {
      return `Review: ${concern.replace(/-/g, ' ')}`;
    }
    return STEPS.find((item) => item.number === step)?.label ?? '';
  };

  return (
    <div className="mb-8 rounded-[1.75rem] border border-soft bg-surface p-5">
      <div className="flex items-center justify-between gap-3" aria-label="Routine builder progress">
        {STEPS.map((step) => {
          const isComplete = step.number < currentStep;
          const isCurrent = step.number === currentStep;
          return (
            <div key={step.number} className="flex min-w-0 flex-1 flex-col items-center text-center">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold ${
                  isComplete
                    ? 'border-sage bg-sage text-background'
                    : isCurrent
                      ? 'border-sage-300 bg-sage-light text-primary'
                      : 'border-soft bg-background-soft text-muted'
                }`}
                aria-current={isCurrent ? 'step' : undefined}
              >
                {step.number}
              </div>
              <span className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted">{displayLabel(step.number)}</span>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-secondary">
        Step {currentStep} of {STEPS.length}: {displayLabel(currentStep)}
      </p>
    </div>
  );
}
