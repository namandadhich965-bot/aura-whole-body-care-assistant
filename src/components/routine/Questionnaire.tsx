'use client';

import { useId, useState } from 'react';
import { Button } from '../ui/Button';
import { BodyAreaId, CommunicationTone, BudgetPreference, SensitivityLevel, Duration, RoutineTime } from '../../lib/schemas';

interface QuestionnaireProps {
  area: BodyAreaId;
  concern: string;
  onSubmit: (_answers: {
    areaDescription: string;
    sensitivity: string;
    duration: string;
    currentProducts: string;
    routineTime: string;
    communicationStyle: CommunicationTone;
    budgetPreference: BudgetPreference;
  }) => void;
  onBack: () => void;
}

function getAreaType(area: BodyAreaId): 'skin' | 'hair' {
  return area === 'hair-scalp' ? 'hair' : 'skin';
}

function ChoiceGroup({
  legend,
  options,
  value,
  onChange,
  columns = 'md:grid-cols-3',
}: {
  legend: string;
  options: { value: string; label: string; description?: string }[];
  value: string;
  onChange: (_value: string) => void;
  columns?: string;
}) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold text-primary">{legend}</legend>
      <div className={`grid grid-cols-2 gap-3 ${columns}`}>
        {options.map((option) => {
          const selected = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={selected}
              className={`rounded-2xl border px-4 py-3 text-left transition-colors ${
                selected
                  ? 'border-sage-300 bg-sage-light text-primary'
                  : 'border-soft bg-surface text-secondary hover:border-strong hover:bg-surface-elevated hover:text-primary'
              }`}
            >
              <span className="block text-sm font-medium">{option.label}</span>
              {option.description ? <span className="mt-1 block text-xs leading-5 text-muted">{option.description}</span> : null}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function Questionnaire({ area, concern: _concern, onSubmit, onBack }: QuestionnaireProps) {
  const areaType = getAreaType(area);
  const productsId = useId();

  const [areaDescription, setAreaDescription] = useState<string>('unsure');
  const [sensitivity, setSensitivity] = useState<SensitivityLevel>('not-sensitive');
  const [duration, setDuration] = useState<Duration>('few-weeks');
  const [currentProducts, setCurrentProducts] = useState('');
  const [routineTime, setRoutineTime] = useState<RoutineTime>('five-minutes');
  const [communicationStyle, setCommunicationStyle] = useState<CommunicationTone>('direct');
  const [budgetPreference, setBudgetPreference] = useState<BudgetPreference>('flexible');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      areaDescription,
      sensitivity,
      duration,
      currentProducts,
      routineTime,
      communicationStyle,
      budgetPreference,
    });
  };

  const areaTypeOptions =
    areaType === 'hair'
      ? [
          { value: 'fine', label: 'Fine' },
          { value: 'medium', label: 'Medium' },
          { value: 'thick', label: 'Thick' },
          { value: 'unsure', label: 'Unsure' },
        ]
      : [
          { value: 'dry', label: 'Dry' },
          { value: 'oily', label: 'Oily' },
          { value: 'balanced', label: 'Balanced' },
          { value: 'combination', label: 'Combination' },
          { value: 'unsure', label: 'Unsure' },
        ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-primary">Step 3: Tell us a little more</h2>
        <p className="mt-2 text-sm leading-6 text-secondary">
          Answer a few quick questions about your concern.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <ChoiceGroup
          legend="How would you describe this area?"
          options={areaTypeOptions}
          value={areaDescription}
          onChange={setAreaDescription}
          columns="sm:grid-cols-2 md:grid-cols-3"
        />

        <ChoiceGroup
          legend="How sensitive does the area feel?"
          options={[
            { value: 'not-sensitive', label: 'Not sensitive' },
            { value: 'sometimes-sensitive', label: 'Sometimes sensitive' },
            { value: 'very-sensitive', label: 'Very sensitive' },
            { value: 'irritated', label: 'Currently irritated' },
          ]}
          value={sensitivity}
          onChange={(value) => setSensitivity(value as SensitivityLevel)}
          columns="sm:grid-cols-2 md:grid-cols-4"
        />

        <ChoiceGroup
          legend="How long has this been bothering you?"
          options={[
            { value: 'few-days', label: 'A few days' },
            { value: 'few-weeks', label: 'A few weeks' },
            { value: 'few-months', label: 'A few months' },
            { value: 'longer-six-months', label: 'Longer than six months' },
          ]}
          value={duration}
          onChange={(value) => setDuration(value as Duration)}
          columns="sm:grid-cols-2 md:grid-cols-4"
        />

        <div className="space-y-3">
          <label htmlFor={productsId} className="text-sm font-semibold text-primary">
            What are you currently using? <span className="text-muted">(optional)</span>
          </label>
          <textarea
            id={productsId}
            value={currentProducts}
            onChange={(event) => setCurrentProducts(event.target.value)}
            placeholder="Example: cleanser, moisturizer, sunscreen"
            maxLength={500}
            rows={4}
            className="w-full rounded-2xl border border-soft bg-surface px-4 py-3 text-sm text-primary placeholder:text-muted focus:border-strong focus:outline-none focus:ring-2 focus:ring-[rgba(157,185,166,0.5)]"
          />
          <p className="text-xs text-muted">{currentProducts.length}/500 characters</p>
        </div>

        <ChoiceGroup
          legend="How much time do you want to spend?"
          options={[
            { value: 'two-minutes', label: 'Two minutes' },
            { value: 'five-minutes', label: 'Five minutes' },
            { value: 'ten-minutes', label: 'Ten minutes' },
            { value: 'full-routine', label: 'Full routine day' },
          ]}
          value={routineTime}
          onChange={(value) => setRoutineTime(value as RoutineTime)}
          columns="sm:grid-cols-2 md:grid-cols-4"
        />

        <ChoiceGroup
          legend="Optional tone"
          options={[
            { value: 'gentle', label: 'Gentle', description: 'Calm and supportive' },
            { value: 'direct', label: 'Direct', description: 'Short and clear' },
            { value: 'curious', label: 'Curious', description: 'A little more context' },
            { value: 'minimal', label: 'Minimal', description: 'Just essentials' },
          ]}
          value={communicationStyle}
          onChange={(value) => setCommunicationStyle(value as CommunicationTone)}
          columns="sm:grid-cols-2 md:grid-cols-4"
        />

        <ChoiceGroup
          legend="Optional budget preference"
          options={[
            { value: 'owned-only', label: 'Use only what I own' },
            { value: 'low-cost', label: 'Low-cost additions are okay' },
            { value: 'flexible', label: 'No preference' },
          ]}
          value={budgetPreference}
          onChange={(value) => setBudgetPreference(value as BudgetPreference)}
          columns="sm:grid-cols-2 md:grid-cols-3"
        />

        <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-between">
          <Button variant="secondary" type="button" onClick={onBack}>
            Back
          </Button>
          <Button type="submit" variant="primary">
            Continue to review
          </Button>
        </div>
      </form>
    </div>
  );
}
