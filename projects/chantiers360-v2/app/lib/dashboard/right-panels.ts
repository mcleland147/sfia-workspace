import type { Chantier } from "@/lib/db/schema";
import { CHANTIER_STATUSES, type ChantierStatus } from "@/lib/chantiers/types";
import { buildChantierSectionHref } from "@/lib/prochaines-actions/format";
import type { ProchaineActionItem } from "@/lib/prochaines-actions/types";

const STATUS_COLORS: Record<ChantierStatus, string> = {
  "À démarrer": "#94a3b8",
  "En cours": "#7c5cff",
  "En retard": "#ff9f43",
  "Terminé": "#3ecf8e",
};

const SOURCE_ACCENT: Record<ProchaineActionItem["sourceType"], string> = {
  tache: "#7c5cff",
  reserve: "#ff6b6b",
  "jalon-intervention": "#4f8cff",
  "jalon-milestone": "#4f8cff",
  retard: "#f5c451",
};

export type DashboardTodoItem = {
  id: string;
  label: string;
  accent: string;
  href: string;
};

export type DashboardDistributionItem = {
  label: ChantierStatus;
  count: number;
  color: string;
  width: string;
};

export function buildDashboardTodoItems(
  actions: ProchaineActionItem[],
  limit = 5
): DashboardTodoItem[] {
  return actions.slice(0, limit).map((item) => ({
    id: item.id,
    label: item.label,
    accent: SOURCE_ACCENT[item.sourceType],
    href: buildChantierSectionHref(item.chantierId, item.targetTab),
  }));
}

export function buildStatusDistribution(chantiers: Chantier[]): DashboardDistributionItem[] {
  const counts = Object.fromEntries(
    CHANTIER_STATUSES.map((status) => [status, 0])
  ) as Record<ChantierStatus, number>;

  for (const chantier of chantiers) {
    const status = chantier.status as ChantierStatus;
    if (status in counts) {
      counts[status] += 1;
    }
  }

  const max = Math.max(...CHANTIER_STATUSES.map((status) => counts[status]), 1);

  return CHANTIER_STATUSES.map((label) => ({
    label,
    count: counts[label],
    color: STATUS_COLORS[label],
    width: counts[label] === 0 ? "0%" : `${Math.round((counts[label] / max) * 100)}%`,
  }));
}
