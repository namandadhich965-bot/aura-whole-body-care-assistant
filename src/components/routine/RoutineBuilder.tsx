'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { BodyAreaSelector } from './BodyAreaSelector';
import { ConcernSelector } from './ConcernSelector';
import { Questionnaire } from './Questionnaire';
import { ReviewStep } from './ReviewStep';
import { GenerationState } from './GenerationState';
import { RoutineResultDisplay } from './RoutineResultDisplay';
import { StepIndicator } from './StepIndicator';
import { RoutineRequest, RoutineResult, BodyAreaId, SavedRoutine } from '../../lib/schemas';
import { generateFallbackRoutine } from '../../lib/fallbackGenerator';
import { callAiProvider } from '../../lib/aiClient';
import { useSavedRoutines } from '../../hooks/useSavedRoutines';

type Step = 1 | 2 | 3 | 4 | 5;

interface RoutineState {
  area: BodyAreaId | null;
  concern: string | null;
  answers: {
    areaDescription: string;
    sensitivity: string;
    duration: string;
    currentProducts: string;
    routineTime: string;
    communicationStyle: 'gentle' | 'direct' | 'curious' | 'minimal';
    budgetPreference: 'owned-only' | 'low-cost' | 'flexible';
  } | null;
  result: RoutineResult | null;
}

const STATUSES = [
  'Understanding your concern',
  'Keeping the routine simple',
  'Reviewing safety',
  'Preparing your plan',
];

export function RoutineBuilder() {
  const searchParams = useSearchParams();
  const { save } = useSavedRoutines();

  const [step, setStep] = useState<Step>(1);
  const [state, setState] = useState<RoutineState>({
    area: null,
    concern: null,
    answers: null,
    result: null,
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStatus, setGenerationStatus] = useState(0);

  useEffect(() => {
    const areaParam = searchParams.get('area');
    if (areaParam) {
      const areas = ['face', 'hair-scalp', 'neck', 'underarms', 'chest-back', 'arms-hands', 'body-friction', 'knees-elbows', 'legs', 'feet-nails'];
      if (areas.includes(areaParam)) {
        setState((prev) => ({ ...prev, area: areaParam as BodyAreaId }));
        setStep(2);
      }
    }
  }, [searchParams]);

  const handleAreaSelect = (area: BodyAreaId) => {
    setState((prev) => ({ ...prev, area }));
    setStep(2);
  };

  const handleConcernSelect = (concern: string) => {
    setState((prev) => ({ ...prev, concern }));
    setStep(3);
  };

  const handleAnswers = (answers: RoutineState['answers']) => {
    setState((prev) => ({ ...prev, answers }));
    setStep(4);
  };

  const handleReview = () => {
    setStep(5);
    generateRoutine();
  };

  const generateRoutine = useCallback(async () => {
    if (!state.area || !state.concern || !state.answers) {
      return;
    }

    const area = state.area;
    const concern = state.concern;
    const answers = state.answers;

    setIsGenerating(true);
    setGenerationStatus(0);

    let statusIndex = 0;
    const statusInterval = setInterval(() => {
      setGenerationStatus((prev) => (prev + 1) % STATUSES.length);
      statusIndex++;
      if (statusIndex > 10) {
        clearInterval(statusInterval);
      }
    }, 600);

    try {
      const request: RoutineRequest = {
        bodyArea: area,
        concern: concern,
        answers: {
          areaDescription: answers.areaDescription as RoutineRequest['answers']['areaDescription'],
          sensitivity: answers.sensitivity as RoutineRequest['answers']['sensitivity'],
          duration: answers.duration as RoutineRequest['answers']['duration'],
          currentProducts: answers.currentProducts,
          routineTime: answers.routineTime as RoutineRequest['answers']['routineTime'],
          communicationStyle: answers.communicationStyle,
          budgetPreference: answers.budgetPreference,
        },
      };

      const result = await callAiProvider(request);
      setState((prev) => ({ ...prev, result }));
      clearInterval(statusInterval);
      setIsGenerating(false);
    } catch (err) {
      clearInterval(statusInterval);
      setIsGenerating(false);
      const request: RoutineRequest = {
        bodyArea: area,
        concern: concern,
        answers: {
          areaDescription: answers.areaDescription as RoutineRequest['answers']['areaDescription'],
          sensitivity: answers.sensitivity as RoutineRequest['answers']['sensitivity'],
          duration: answers.duration as RoutineRequest['answers']['duration'],
          currentProducts: answers.currentProducts,
          routineTime: answers.routineTime as RoutineRequest['answers']['routineTime'],
          communicationStyle: answers.communicationStyle,
          budgetPreference: answers.budgetPreference,
        },
      };
      const fallback = generateFallbackRoutine(request);
      setState((prev) => ({ ...prev, result: fallback }));
    }
  }, [state]);

  const handleSave = () => {
    if (!state.result || !state.area || !state.concern) return;

    const savedRoutine: SavedRoutine = {
      ...state.result,
      id: `aura-${Date.now().toString(36)}-${Math.random().toString(36).substr(2, 9)}`,
      savedAt: new Date().toISOString(),
      bodyArea: state.area,
      concern: state.concern,
    };

    const success = save(savedRoutine);
    if (!success) {
      alert('This routine could not be saved in your browser, but you can still copy it.');
    } else {
      alert('Routine saved!');
    }
  };

  const resetBuilder = () => {
    setState({
      area: null,
      concern: null,
      answers: null,
      result: null,
    });
    setStep(1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <BodyAreaSelector onSelect={handleAreaSelect} />;
      case 2:
        return state.area ? (
          <ConcernSelector
            area={state.area}
            onSelect={handleConcernSelect}
            onBack={() => setStep(1)}
          />
        ) : null;
      case 3:
        return state.area && state.concern ? (
          <Questionnaire
            area={state.area}
            concern={state.concern}
            onSubmit={handleAnswers}
            onBack={() => setStep(2)}
          />
        ) : null;
      case 4:
        return state.area && state.concern && state.answers ? (
          <ReviewStep
            area={state.area}
            concern={state.concern}
            answers={state.answers}
            onBack={() => setStep(3)}
            onGenerate={handleReview}
          />
        ) : null;
      case 5:
        if (isGenerating) {
          return (
            <GenerationState
              status={STATUSES[generationStatus]}
              onCancel={resetBuilder}
            />
          );
        }
        if (state.result) {
          return (
            <RoutineResultDisplay
              result={state.result}
              area={state.area}
              concern={state.concern}
              onSave={handleSave}
              onNewRoutine={resetBuilder}
            />
          );
        }
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <StepIndicator
        currentStep={step}
        area={state.area}
        concern={state.concern}
      />
      {renderStep()}
    </div>
  );
}