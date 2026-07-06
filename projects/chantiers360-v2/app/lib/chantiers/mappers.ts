import type { Chantier } from "@/lib/db/schema";
import type { ChantierCardData, ChantierStatus, DashboardStats } from "./types";

const ACCENT_COLORS = [
  "#7c5cff",
  "#4f8cff",
  "#3ecf8e",
  "#f5c451",
  "#ff9f43",
];

function statusToProgress(status: ChantierStatus): number {
  switch (status) {
    case "À démarrer":
      return 10;
    case "En cours":
      return 55;
    case "En retard":
      return 40;
    case "Terminé":
      return 100;
    default:
      return 0;
  }
}

function formatDateLabel(value: string | Date | null | undefined): string {
  if (!value) return "—";
  const date = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }).format(
    date
  );
}

export function toChantierCardData(chantier: Chantier, index: number): ChantierCardData {
  const statut = chantier.status as ChantierStatus;

  return {
    id: chantier.id,
    title: chantier.title,
    client: chantier.client,
    location: chantier.address,
    progress: statusToProgress(statut),
    retardDays: statut === "En retard" ? 1 : undefined,
    accentColor: ACCENT_COLORS[index % ACCENT_COLORS.length],
    tasks: 0,
    reserves: 0,
    dateLabel: formatDateLabel(
      chantier.plannedEndDate ?? chantier.nextInterventionDate
    ),
    statut,
  };
}

export function buildDashboardStats(chantiers: Chantier[]): DashboardStats {
  const actifs = chantiers.filter((c) => c.status !== "Terminé").length;
  const enRetard = chantiers.filter((c) => c.status === "En retard").length;

  return {
    actifs,
    enRetard,
    tachesOuvertes: 0,
    reservesOuvertes: 0,
  };
}

export function buildHeroSubtitle(stats: DashboardStats): string {
  return `${stats.enRetard} chantier${stats.enRetard > 1 ? "s" : ""} en retard · INC-02+ hors scope`;
}
