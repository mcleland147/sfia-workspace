export const CHANTIER_STATUSES = [
  "À démarrer",
  "En cours",
  "En retard",
  "Terminé",
] as const;

export type ChantierStatus = (typeof CHANTIER_STATUSES)[number];

export function isChantierStatus(value: string): value is ChantierStatus {
  return CHANTIER_STATUSES.includes(value as ChantierStatus);
}

export type CreateChantierInput = {
  title: string;
  client: string;
  address: string;
  plannedStartDate?: string;
  plannedEndDate?: string;
  nextInterventionDate?: string;
  simplePlanningComment?: string;
};

export type DashboardStats = {
  actifs: number;
  enRetard: number;
  tachesOuvertes: number;
  reservesOuvertes: number;
};

export type ChantierCardData = {
  id: string;
  title: string;
  client: string;
  location: string;
  progress: number;
  retardDays?: number;
  accentColor: string;
  tasks: number;
  reserves: number;
  dateLabel: string;
  statut: ChantierStatus;
};
