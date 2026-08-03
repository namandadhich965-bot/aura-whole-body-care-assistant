'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Copy, Save, RefreshCw, ShieldAlert } from 'lucide-react';
import { RoutineResult } from '../../lib/schemas';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { BODY_AREAS } from '../../data/bodyAreas';

interface RoutineResultDisplayProps {
  result: RoutineResult;
  area: string | null;
  concern: string | null;
  onSave: () => void;
  onNewRoutine: () => void;
}

function SectionList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items.length) return null;

  return (
    <section className="rounded-2xl border border-soft bg-background-soft p-5">
      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-sage">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-7 text-secondary">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sage" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function RoutineResultDisplay({ result, area, concern, onSave, onNewRoutine }: RoutineResultDisplayProps) {
  const [copied, setCopied] = useState(false);
  const areaData = area ? BODY_AREAS.find((item) => item.id === area) : null;
  const concernData = areaData?.concerns.find((item) => item.id === concern);

  const formatRoutineText = () => {
    const lines = [
      `AURA routine: ${result.title}`,
      `Area: ${areaData?.label ?? area ?? 'Unknown area'}`,
      `Concern: ${concernData?.label ?? concern ?? 'Unknown concern'}`,
      '',
      `Summary: ${result.summary}`,
      '',
      'Priorities:',
      ...result.priorities.map((item) => `- ${item}`),
      '',
      'Morning:',
      ...result.morning.map((item) => `- ${item}`),
      '',
      'Evening:',
      ...result.evening.map((item) => `- ${item}`),
    ];

    if (result.weekly.length) {
      lines.push('', 'Weekly:', ...result.weekly.map((item) => `- ${item}`));
    }

    lines.push(
      '',
      'Use what you own:',
      ...result.useWhatYouOwn.map((item) => `- ${item}`),
      '',
      'Avoid:',
      ...result.avoid.map((item) => `- ${item}`),
      '',
      `Safety note: ${result.safetyNote}`,
      '',
      `Source: ${result.source === 'fallback' ? 'Built-in guidance because live AI was unavailable' : 'Generated from your answers and reviewed for simplicity'}`
    );

    return lines.join('\n');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formatRoutineText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="secondary">{areaData?.label ?? area}</Badge>
        <Badge variant="outline">{concernData?.label ?? concern}</Badge>
        <Badge variant={result.source === 'fallback' ? 'warning' : 'success'}>
          {result.source === 'fallback' ? 'Fallback' : 'AI'}
        </Badge>
      </div>

      <Card variant="elevated">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-primary">{result.title}</h2>
          <p className="max-w-3xl text-base leading-8 text-secondary">{result.summary}</p>
          <div className="flex items-center gap-3 rounded-2xl border border-soft bg-background-soft px-4 py-3 text-sm text-secondary">
            <ShieldAlert className="h-4 w-4 text-sage" />
            {result.source === 'fallback'
              ? 'AURA used its built-in guidance because live AI generation was unavailable.'
              : 'Generated from your answers and reviewed for simplicity.'}
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-sage">Priorities</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-secondary">
              {result.priorities.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sage" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <SectionList title="Morning" items={result.morning} />
            <SectionList title="Evening" items={result.evening} />
            {result.weekly.length > 0 && <SectionList title="Weekly" items={result.weekly} />}
            <SectionList title="Use what you own" items={result.useWhatYouOwn} />
            <SectionList title="Avoid" items={result.avoid} />
          </div>

          <div className="rounded-2xl border border-soft bg-background-soft p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-sage">Safety note</h3>
            <p className="mt-3 text-sm leading-7 text-secondary">{result.safetyNote}</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Review details</h3>
          <dl className="grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-soft bg-background-soft p-4">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">Area</dt>
              <dd className="mt-2 text-sm text-primary">{areaData?.label ?? area}</dd>
            </div>
            <div className="rounded-2xl border border-soft bg-background-soft p-4">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">Concern</dt>
              <dd className="mt-2 text-sm text-primary">{concernData?.label ?? concern}</dd>
            </div>
          </dl>
        </div>
      </Card>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="primary" onClick={onSave} className="gap-2">
          <Save className="h-4 w-4" />
          Save routine
        </Button>
        <Button variant="secondary" onClick={handleCopy} className="gap-2">
          <Copy className="h-4 w-4" />
          {copied ? 'Copied' : 'Copy routine'}
        </Button>
        <Button variant="tertiary" onClick={onNewRoutine} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Start another routine
        </Button>
        <Link href="/saved">
          <Button variant="secondary">View saved routines</Button>
        </Link>
      </div>
    </div>
  );
}
