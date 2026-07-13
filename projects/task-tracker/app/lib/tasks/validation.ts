import { MAX_TITLE_LENGTH } from "./constants";

export function validateTitle(title: string): string | null {
  const trimmed = title.trim();

  if (!trimmed) {
    return "Le titre est obligatoire.";
  }

  if (trimmed.length > MAX_TITLE_LENGTH) {
    return `Le titre ne peut pas dépasser ${MAX_TITLE_LENGTH} caractères.`;
  }

  return null;
}

export function normalizeDescription(description?: string): string | undefined {
  const trimmed = description?.trim();
  return trimmed ? trimmed : undefined;
}

export function normalizeDueDate(dueDate?: string | null): string | undefined {
  if (dueDate === null || dueDate === undefined || dueDate === "") {
    return undefined;
  }

  return dueDate;
}
