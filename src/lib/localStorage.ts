import { SavedRoutine, SavedRoutineSchema } from './schemas';

const STORAGE_KEY = 'aura.savedRoutines.v1';
const MAX_SAVED_ROUTINES = 50;

export function safeGetStorage(): Storage | null {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return null;
  }
  try {
    return localStorage;
  } catch {
    return null;
  }
}

function validateSavedRoutine(item: unknown): SavedRoutine | null {
  try {
    const result = SavedRoutineSchema.safeParse(item);
    return result.success ? result.data : null;
  } catch {
    return null;
  }
}

export function getSavedRoutines(): SavedRoutine[] {
  const storage = safeGetStorage();
  if (!storage) return [];

  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const deduped = new Map<string, SavedRoutine>();
    parsed.forEach((item: unknown) => {
      const routine = validateSavedRoutine(item);
      if (routine) {
        deduped.set(routine.id, routine);
      }
    });

    return Array.from(deduped.values()).sort(
      (a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime()
    );
  } catch {
    return [];
  }
}

export function saveRoutine(routine: SavedRoutine): boolean {
  const storage = safeGetStorage();
  if (!storage) return false;

  try {
    const routines = getSavedRoutines();
    const exists = routines.some((r) => r.id === routine.id);
    if (exists) {
      return false;
    }

    const updated = [routine, ...routines].slice(0, MAX_SAVED_ROUTINES);
    storage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch {
    return false;
  }
}

export function deleteRoutine(id: string): boolean {
  const storage = safeGetStorage();
  if (!storage) return false;

  try {
    const routines = getSavedRoutines();
    const updated = routines.filter((r) => r.id !== id);
    storage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch {
    return false;
  }
}

export function deleteAllRoutines(): boolean {
  const storage = safeGetStorage();
  if (!storage) return false;

  try {
    storage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
