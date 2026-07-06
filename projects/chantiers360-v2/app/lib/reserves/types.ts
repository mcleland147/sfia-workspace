export const RESERVE_STATUSES = [
  "Ouverte",
  "En cours de traitement",
  "Levée",
] as const;

export type ReserveStatus = (typeof RESERVE_STATUSES)[number];

export function isReserveStatus(value: string): value is ReserveStatus {
  return RESERVE_STATUSES.includes(value as ReserveStatus);
}
