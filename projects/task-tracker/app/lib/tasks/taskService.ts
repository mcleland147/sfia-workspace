import type {
  CreateTaskInput,
  Task,
  TaskStatus,
  UpdateTaskInput,
} from "./types";
import {
  normalizeDescription,
  normalizeDueDate,
  validateTitle,
} from "./validation";

export type TaskServiceResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export function createTask(
  tasks: Task[],
  input: CreateTaskInput,
  now: () => string = isoNow,
  idFactory: () => string = createId,
): TaskServiceResult<{ tasks: Task[]; task: Task }> {
  const titleError = validateTitle(input.title);
  if (titleError) {
    return { ok: false, error: titleError };
  }

  const timestamp = now();
  const task: Task = {
    id: idFactory(),
    title: input.title.trim(),
    description: normalizeDescription(input.description),
    status: "todo",
    priority: input.priority ?? "normal",
    dueDate: normalizeDueDate(input.dueDate),
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  return { ok: true, data: { tasks: [task, ...tasks], task } };
}

export function updateTask(
  tasks: Task[],
  id: string,
  input: UpdateTaskInput,
  now: () => string = isoNow,
): TaskServiceResult<{ tasks: Task[]; task: Task }> {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    return { ok: false, error: "Tâche introuvable." };
  }

  const current = tasks[index];
  const nextTitle = input.title !== undefined ? input.title : current.title;
  const titleError = validateTitle(nextTitle);
  if (titleError) {
    return { ok: false, error: titleError };
  }

  const updated: Task = {
    ...current,
    title: nextTitle.trim(),
    description:
      input.description !== undefined
        ? normalizeDescription(input.description)
        : current.description,
    status: input.status ?? current.status,
    priority: input.priority ?? current.priority,
    dueDate:
      input.dueDate !== undefined
        ? normalizeDueDate(input.dueDate)
        : current.dueDate,
    updatedAt: now(),
  };

  const nextTasks = [...tasks];
  nextTasks[index] = updated;

  return { ok: true, data: { tasks: nextTasks, task: updated } };
}

export function changeTaskStatus(
  tasks: Task[],
  id: string,
  status: TaskStatus,
  now: () => string = isoNow,
): TaskServiceResult<{ tasks: Task[]; task: Task }> {
  return updateTask(tasks, id, { status }, now);
}

export function deleteTask(tasks: Task[], id: string): Task[] {
  return tasks.filter((task) => task.id !== id);
}

function isoNow(): string {
  return new Date().toISOString();
}

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `task-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
