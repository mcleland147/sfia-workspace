import type { ChantierSectionTab, ProchaineActionSourceType } from "./types";
import type { ProchaineActionItem } from "./types";

const SOURCE_LABELS: Record<ProchaineActionSourceType, string> = {
  tache: "Tâche",
  reserve: "Réserve",
  "jalon-intervention": "Prochaine intervention",
  "jalon-milestone": "Jalon à venir",
  retard: "Retard chantier",
};

const SOURCE_BADGE_LABELS: Record<ProchaineActionSourceType, string> = {
  tache: "Tâche",
  reserve: "Réserve",
  "jalon-intervention": "Intervention",
  "jalon-milestone": "Jalon",
  retard: "Retard",
};

/** Tokens exacts Figma P2 — frame 121:5 */
const SOURCE_BADGE_CLASSES: Record<ProchaineActionSourceType, string> = {
  retard: "bg-[#fef3c7] text-[#d97706]",
  tache: "bg-[#eef2ff] text-[#4f46e5]",
  reserve: "bg-[#ffedd5] text-[#ea580c]",
  "jalon-intervention": "bg-[#dcfce7] text-[#16a34a]",
  "jalon-milestone": "bg-[#dcfce7] text-[#16a34a]",
};

const STATUS_BADGE_CLASSES: Record<string, string> = {
  "En retard": "bg-[#fee2e2] text-[#ef4444]",
  "À faire": "bg-[#f3f4f6] text-[#6b7280]",
  "En cours": "bg-[#f3f4f6] text-[#6b7280]",
  Ouverte: "bg-[#fee2e2] text-[#ef4444]",
  "En cours de traitement": "bg-[#fee2e2] text-[#ef4444]",
  Planifié: "bg-[#dcfce7] text-[#16a34a]",
  Jalon: "bg-[#dcfce7] text-[#16a34a]",
  Terminée: "bg-[#f3f4f6] text-[#6b7280]",
};

export const PROCHAINES_ACTIONS_CTA_CLASS =
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[10px] bg-[#4f46e5] px-4 py-2 text-[13px] font-semibold leading-none text-white transition hover:bg-[#4338ca]";

export function getSourceTypeLabel(sourceType: ProchaineActionSourceType): string {
  return SOURCE_LABELS[sourceType];
}

export function getSourceTypeBadgeLabel(sourceType: ProchaineActionSourceType): string {
  return SOURCE_BADGE_LABELS[sourceType];
}

export function getSourceTypeBadgeClass(sourceType: ProchaineActionSourceType): string {
  return SOURCE_BADGE_CLASSES[sourceType];
}

export function getProchainesActionStatusDisplay(item: ProchaineActionItem): string {
  if (item.sourceType === "jalon-milestone") {
    return "Planifié";
  }
  return item.statusLabel;
}

export function getStatusBadgeClass(statusLabel: string): string {
  return STATUS_BADGE_CLASSES[statusLabel] ?? "bg-[#f3f4f6] text-[#6b7280]";
}

export function formatProchainesActionShortDate(value: string | null | undefined): string {
  if (!value) return "";
  const iso = value.slice(0, 10);
  const [year, month, day] = iso.split("-");
  if (!year || !month || !day) return "";
  return `${day}/${month}`;
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
