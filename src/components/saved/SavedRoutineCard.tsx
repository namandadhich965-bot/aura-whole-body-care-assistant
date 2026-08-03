'use client';

import { useState } from 'react';
import { Copy, Trash2, Calendar } from 'lucide-react';
import { SavedRoutine } from '../../lib/schemas';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { BODY_AREAS } from '../../data/bodyAreas';

interface SavedRoutineCardProps {
  routine: SavedRoutine;
  onDelete: (_id: string) => void;
}

export function SavedRoutineCard({ routine, onDelete }: SavedRoutineCardProps) {
  const [copied, setCopied] = useState(false);
  const areaData = BODY_AREAS.find((area) => area.id === routine.bodyArea);
  const concernData = areaData?.concerns.find((item) => item.id === routine.concern);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formatRoutineText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const formatRoutineText = () => {
    const lines = [
      routine.title,
      `Area: ${areaData?.label ?? routine.bodyArea}`,
      `Concern: ${concernData?.label ?? routine.concern}`,
      '',
      routine.summary,
      '',
      'Priorities:',
      ...routine.priorities.map((item) => `- ${item}`),
      '',
      'Morning:',
      ...routine.morning.map((item) => `- ${item}`),
      '',
      'Evening:',
      ...routine.evening.map((item) => `- ${item}`),
    ];

    if (routine.weekly.length > 0) {
      lines.push('', 'Weekly:', ...routine.weekly.map((item) => `- ${item}`));
    }

    lines.push(
      '',
      'Use what you own:',
      ...routine.useWhatYouOwn.map((item) => `- ${item}`),
      '',
      'Avoid:',
      ...routine.avoid.map((item) => `- ${item}`),
      '',
      `Safety note: ${routine.safetyNote}`
    );

    return lines.join('\n');
  };

  return (
    <Card variant="elevated">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{areaData?.label ?? routine.bodyArea}</Badge>
            <Badge variant="outline">{concernData?.label ?? routine.concern}</Badge>
            {routine.source === 'fallback' && <Badge variant="warning">Fallback</Badge>}
          </div>
          <span className="flex items-center gap-2 text-xs text-muted">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(routine.savedAt).toLocaleDateString()}
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-primary">{routine.title}</h3>
          <p className="mt-2 text-sm leading-6 text-secondary">{routine.summary}</p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-soft bg-background-soft p-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Morning</h4>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-secondary">
              {routine.morning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-soft bg-background-soft p-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Evening</h4>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-secondary">
              {routine.evening.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-soft bg-background-soft p-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Safety note</h4>
          <p className="mt-3 text-sm leading-6 text-secondary">{routine.safetyNote}</p>
        </div>

        <div className="flex flex-col gap-3 border-t border-soft pt-4 sm:flex-row">
          <Button variant="secondary" size="sm" onClick={handleCopy}>
            <Copy className="mr-1 h-4 w-4" />
            {copied ? 'Copied' : 'Copy'}
          </Button>
          <Button
            variant="tertiary"
            size="sm"
            onClick={() => onDelete(routine.id)}
            className="text-terracotta"
          >
            <Trash2 className="mr-1 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}
