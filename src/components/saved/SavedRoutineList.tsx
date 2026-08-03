'use client';

import { useMemo, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { SavedRoutine } from '../../lib/schemas';
import { SavedRoutineCard } from './SavedRoutineCard';
import { EmptySavedState } from './EmptySavedState';
import { Button } from '../ui/Button';
import { BODY_AREAS } from '../../data/bodyAreas';
import { Dialog } from '../ui/Dialog';

interface SavedRoutineListProps {
  routines: SavedRoutine[];
  onDelete: (_id: string) => void;
  onClearAll: () => void;
}

export function SavedRoutineList({ routines, onDelete, onClearAll }: SavedRoutineListProps) {
  const [filter, setFilter] = useState<string>('all');
  const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);

  const filteredRoutines = useMemo(() => {
    const filtered = filter === 'all' ? routines : routines.filter((routine) => routine.bodyArea === filter);
    return [...filtered].sort((a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime());
  }, [filter, routines]);

  const availableFilters = Array.from(new Set(routines.map((routine) => routine.bodyArea)));

  return (
    <div className="space-y-6">
      {routines.length === 0 ? (
        <EmptySavedState />
      ) : (
        <>
          <div className="flex flex-col gap-3 rounded-[1.5rem] border border-soft bg-surface p-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-wrap gap-3">
              <label className="space-y-2">
                <span className="block text-xs uppercase tracking-[0.2em] text-muted">Filter by area</span>
                <select
                  value={filter}
                  onChange={(event) => setFilter(event.target.value)}
                  className="min-w-44 rounded-2xl border border-soft bg-background-soft px-3 py-2 text-sm text-primary focus:border-strong focus:outline-none focus:ring-2 focus:ring-[rgba(157,185,166,0.5)]"
                >
                  <option value="all">All areas</option>
                  {availableFilters.map((area) => {
                    const areaData = BODY_AREAS.find((item) => item.id === area);
                    return (
                      <option key={area} value={area}>
                        {areaData?.label ?? area}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>

            <Button variant="secondary" size="sm" onClick={() => setShowDeleteAllDialog(true)}>
              <Trash2 className="mr-1 h-4 w-4" />
              Delete all
            </Button>
          </div>

          <div className="grid gap-4">
            {filteredRoutines.map((routine) => (
              <SavedRoutineCard key={routine.id} routine={routine} onDelete={onDelete} />
            ))}
          </div>
        </>
      )}

      <Dialog
        isOpen={showDeleteAllDialog}
        onClose={() => setShowDeleteAllDialog(false)}
        title="Delete all routines?"
      >
        <div className="space-y-5">
          <p className="text-sm leading-6 text-secondary">
            This will permanently remove all saved routines from this browser. This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setShowDeleteAllDialog(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                onClearAll();
                setShowDeleteAllDialog(false);
              }}
            >
              Delete all
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
