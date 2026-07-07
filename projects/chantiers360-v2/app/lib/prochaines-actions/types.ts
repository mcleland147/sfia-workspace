export const PROCHAINE_ACTION_SOURCE_TYPES = [
  "tache",
  "reserve",
  "jalon-intervention",
  "jalon-milestone",
  "retard",
] as const;

export type ProchaineActionSourceType = (typeof PROCHAINE_ACTION_SOURCE_TYPES)[number];

export const CHANTIER_SECTION_TABS = ["taches", "reserves", "jalons"] as const;

export type ChantierSectionTab = (typeof CHANTIER_SECTION_TABS)[number];

export function isChantierSectionTab(value: string): value is ChantierSectionTab {
  return CHANTIER_SECTION_TABS.includes(value as ChantierSectionTab);
}

export type ProchaineActionItem = {
  id: string;
  sourceType: ProchaineActionSourceType;
  sourceId?: string;
  chantierId: string;
  chantierTitle: string;
  label: string;
  statusLabel: string;
  targetTab: ChantierSectionTab | null;
  dueDate?: string | null;
  sortKey: string;
};
