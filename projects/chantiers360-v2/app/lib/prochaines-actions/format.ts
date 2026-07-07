import type { ChantierSectionTab, ProchaineActionSourceType } from "./types";

const SOURCE_LABELS: Record<ProchaineActionSourceType, string> = {
  tache: "Tâche",
  reserve: "Réserve",
  "jalon-intervention": "Prochaine intervention",
  "jalon-milestone": "Jalon à venir",
  retard: "Retard chantier",
};

export function getSourceTypeLabel(sourceType: ProchaineActionSourceType): string {
  return SOURCE_LABELS[sourceType];
}

export function buildChantierSectionHref(
  chantierId: string,
  targetTab: ChantierSectionTab | null
): string {
  if (!targetTab) {
    return `/chantiers/${chantierId}`;
  }

  return `/chantiers/${chantierId}?tab=${targetTab}`;
}
