export const TACHE_STATUSES = ["À faire", "En cours", "Terminée"] as const;

export type TacheStatus = (typeof TACHE_STATUSES)[number];

export function isTacheStatus(value: string): value is TacheStatus {
  return TACHE_STATUSES.includes(value as TacheStatus);
}
