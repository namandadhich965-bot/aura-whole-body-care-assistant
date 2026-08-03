'use client';

import { Button } from '../ui/Button';
import { BodyAreaId, BODY_AREAS } from '../../data/bodyAreas';
import { CommunicationTone, BudgetPreference } from '../../lib/schemas';

interface ReviewStepProps {
  area: BodyAreaId;
  concern: string;
  answers: {
    areaDescription: string;
    sensitivity: string;
    duration: string;
    currentProducts: string;
    routineTime: string;
    communicationStyle: CommunicationTone;
    budgetPreference: BudgetPreference;
  };
  onBack: () => void;
  onGenerate: () => void;
}

const SENSITIVITY_LABELS: Record<string, string> = {
  'not-sensitive': 'Not sensitive',
  'sometimes-sensitive': 'Sometimes sensitive',
  'very-sensitive': 'Very sensitive',
  irritated: 'Currently irritated',
};

const DURATION_LABELS: Record<string, string> = {
  'few-days': 'A few days',
  'few-weeks': 'A few weeks',
  'few-months': 'A few months',
  'longer-six-months': 'Longer than six months',
};

const ROUTINE_TIME_LABELS: Record<string, string> = {
  'two-minutes': 'Two minutes',
  'five-minutes': 'Five minutes',
  'ten-minutes': 'Ten minutes',
  'full-routine': 'Full routine day',
};

const TONE_LABELS: Record<string, string> = {
  gentle: 'Gentle',
  direct: 'Direct',
  curious: 'Curious',
  minimal: 'Minimal',
};

const BUDGET_LABELS: Record<string, string> = {
  'owned-only': 'Use only what I own',
  'low-cost': 'Low-cost additions are okay',
  flexible: 'No preference',
};

export function ReviewStep({ area, concern, answers, onBack, onGenerate }: ReviewStepProps) {
  const areaData = BODY_AREAS.find((item) => item.id === area);
  const concernData = areaData?.concerns.find((item) => item.id === concern);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-primary">Step 4: Review your selections</h2>
        <p className="mt-2 text-sm leading-6 text-secondary">
          Check your answers before AURA generates your routine.
        </p>
      </div>

      <div className="grid gap-3 rounded-[1.75rem] border border-soft bg-surface p-5 md:grid-cols-2">
        {[
          ['Body area', areaData?.label ?? area],
          ['Concern', concernData?.label ?? concern],
          ['Area description', answers.areaDescription],
          ['Sensitivity', SENSITIVITY_LABELS[answers.sensitivity] ?? answers.sensitivity],
          ['Duration', DURATION_LABELS[answers.duration] ?? answers.duration],
          ['Current products', answers.currentProducts || 'None specified'],
          ['Time available', ROUTINE_TIME_LABELS[answers.routineTime] ?? answers.routineTime],
          ['Communication style', TONE_LABELS[answers.communicationStyle] ?? answers.communicationStyle],
          ['Budget preference', BUDGET_LABELS[answers.budgetPreference] ?? answers.budgetPreference],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-soft bg-background-soft p-4">
            <dt className="text-xs uppercase tracking-[0.2em] text-muted">{label}</dt>
            <dd className="mt-2 text-sm leading-6 text-primary">{value}</dd>
          </div>
        ))}
      </div>

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="primary" onClick={onGenerate}>
          Create my routine
        </Button>
      </div>
    </div>
  );
}
