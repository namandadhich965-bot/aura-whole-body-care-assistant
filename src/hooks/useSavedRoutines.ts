'use client';

import { useEffect, useState } from 'react';
import { getSavedRoutines, saveRoutine, deleteRoutine, deleteAllRoutines } from '../lib/localStorage';
import type { SavedRoutine } from '../lib/schemas';

export function useSavedRoutines() {
  const [routines, setRoutines] = useState<SavedRoutine[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRoutines(getSavedRoutines());
    setLoading(false);
  }, []);

  const save = (routine: SavedRoutine) => {
    const success = saveRoutine(routine);
    if (success) {
      setRoutines((current) => [routine, ...current.filter((item) => item.id !== routine.id)].slice(0, 50));
    }
    return success;
  };

  const remove = (id: string) => {
    const success = deleteRoutine(id);
    if (success) {
      setRoutines((current) => current.filter((r) => r.id !== id));
    }
    return success;
  };

  const clearAll = () => {
    const success = deleteAllRoutines();
    if (success) {
      setRoutines([]);
    }
    return success;
  };

  return { routines, loading, save, remove, clearAll };
}
