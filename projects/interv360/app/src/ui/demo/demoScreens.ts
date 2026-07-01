export const DEMO_SCREENS = [
  {
    id: "overview",
    label: "Vue d'ensemble",
    shortLabel: "Vue d'ensemble",
  },
  {
    id: "scenario",
    label: "Scénario guidé",
    shortLabel: "Scénario",
  },
  {
    id: "requests",
    label: "Demandes",
    shortLabel: "Demandes",
  },
  {
    id: "details",
    label: "Détail & workflow",
    shortLabel: "Détail",
  },
  {
    id: "journal",
    label: "Journal & reset",
    shortLabel: "Journal",
  },
] as const;

export type DemoScreenId = (typeof DEMO_SCREENS)[number]["id"];

export const INITIAL_DEMO_SCREEN_ID: DemoScreenId = "overview";

export function getDemoScreenIndex(screenId: DemoScreenId): number {
  return DEMO_SCREENS.findIndex((screen) => screen.id === screenId);
}

export function getDemoScreenById(screenId: DemoScreenId) {
  return DEMO_SCREENS[getDemoScreenIndex(screenId)];
}
