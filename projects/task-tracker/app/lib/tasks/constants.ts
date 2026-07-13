import type { TaskPriority, TaskStatus } from "./types";

export const STORAGE_KEY = "task-tracker-tasks";
export const MAX_TITLE_LENGTH = 120;

export const STATUS_LABELS: Record<TaskStatus, string> = {
  todo: "À faire",
  in_progress: "En cours",
  done: "Terminée",
};

export const PRIORITY_LABELS: Record<TaskPriority, string> = {
  low: "Basse",
  normal: "Normale",
  high: "Haute",
};

export const ALL_STATUSES: TaskStatus[] = ["todo", "in_progress", "done"];
export const ALL_PRIORITIES: TaskPriority[] = ["low", "normal", "high"];
