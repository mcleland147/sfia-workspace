import type { Task } from "./types";
import { STORAGE_KEY } from "./constants";

export function loadTasks(storage: Storage | null = getBrowserStorage()): Task[] {
  if (!storage) {
    return [];
  }

  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(isValidTask);
  } catch {
    return [];
  }
}

export function saveTasks(
  tasks: Task[],
  storage: Storage | null = getBrowserStorage(),
): void {
  if (!storage) {
    return;
  }

  storage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function getBrowserStorage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage;
}

function isValidTask(value: unknown): value is Task {
  if (!value || typeof value !== "object") {
    return false;
  }

  const task = value as Partial<Task>;

  return (
    typeof task.id === "string" &&
    typeof task.title === "string" &&
    typeof task.status === "string" &&
    typeof task.priority === "string" &&
    typeof task.createdAt === "string" &&
    typeof task.updatedAt === "string"
  );
}
