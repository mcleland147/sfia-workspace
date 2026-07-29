export type StudioRoute =
  | "/synthese"
  | "/nouvelle-demande"
  | "/cycle-actif"
  | "/decision";

/**
 * Shell-level routes include the real Studio namespace while preserving the
 * legacy POC union consumed exhaustively by vertical-slice/mapping.ts.
 */
export type StudioShellRoute = StudioRoute | "/studio/projects/new";

export interface NavItem {
  id: string;
  route: StudioShellRoute;
  label: string;
  railIcon: string;
  railKey: "home" | "plus" | "grid" | "diamond" | "project" | "gear";
}

export interface TabItem {
  id: string;
  route?: StudioRoute;
  label: string;
  disabled?: boolean;
  simulated?: boolean;
}

export const STUDIO_ROUTES: NavItem[] = [
  {
    id: "synthese",
    route: "/synthese",
    label: "Vue synthèse",
    railIcon: "⌂",
    railKey: "home",
  },
  {
    id: "nouvelle-demande",
    route: "/nouvelle-demande",
    label: "Nouvelle demande",
    railIcon: "＋",
    railKey: "plus",
  },
  {
    id: "studio-create-project",
    route: "/studio/projects/new",
    label: "Créer un projet Studio",
    railIcon: "◆",
    railKey: "project",
  },
  {
    id: "cycle-actif",
    route: "/cycle-actif",
    label: "Cycle actif",
    railIcon: "◫",
    railKey: "grid",
  },
  {
    id: "decision",
    route: "/decision",
    label: "Décision Morris",
    railIcon: "◇",
    railKey: "diamond",
  },
];

export const FLUSH_TABS: TabItem[] = [
  { id: "synthese", route: "/synthese", label: "Synthèse" },
  { id: "demande", route: "/nouvelle-demande", label: "Demande" },
  { id: "cycle", route: "/cycle-actif", label: "Cycle actif" },
  { id: "decisions", route: "/decision", label: "Décisions" },
  {
    id: "preuves",
    label: "Preuves",
    disabled: true,
    simulated: true,
  },
];

export const SIMULATION_TITLE = "Simulation — aucune action Git réelle";

export function routeForTab(tabId: string): StudioRoute | undefined {
  return FLUSH_TABS.find((t) => t.id === tabId)?.route;
}

export function isActiveRoute(
  activeRoute: StudioShellRoute,
  route: StudioShellRoute,
): boolean {
  return activeRoute === route;
}
