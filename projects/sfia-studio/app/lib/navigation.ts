export type StudioRoute =
  | "/synthese"
  | "/nouvelle-demande"
  | "/cycle-actif"
  | "/decision";

/**
 * Shell-level routes include the real Studio namespace while preserving the
 * legacy POC union consumed exhaustively by vertical-slice/mapping.ts.
 */
export type StudioProjectWorkspaceRoute = `/studio/projects/${string}`;

export type StudioShellRoute =
  | StudioRoute
  | "/studio"
  | "/studio/projects/new"
  | StudioProjectWorkspaceRoute;

export type NavTier = "primary" | "historical";

export function isStudioProjectWorkspaceRoute(
  route: StudioShellRoute,
): boolean {
  return (
    route.startsWith("/studio/projects/") && route !== "/studio/projects/new"
  );
}

export interface NavItem {
  id: string;
  route: StudioShellRoute;
  label: string;
  railIcon: string;
  railKey: "home" | "plus" | "grid" | "diamond" | "project" | "gear";
  /** Primary product nav vs demoted historical/secondary surfaces. */
  tier: NavTier;
  /** aria/title hint for historical links */
  historicalHint?: string;
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
    id: "studio-projects",
    route: "/studio",
    label: "Projets",
    railIcon: "⌂",
    railKey: "home",
    tier: "primary",
  },
  {
    id: "studio-create-project",
    route: "/studio/projects/new",
    label: "Nouveau projet",
    railIcon: "＋",
    railKey: "plus",
    tier: "primary",
  },
  {
    id: "synthese",
    route: "/synthese",
    label: "Vue synthèse",
    railIcon: "◫",
    railKey: "grid",
    tier: "historical",
    historicalHint: "Historique — POC synthèse",
  },
  {
    id: "nouvelle-demande",
    route: "/nouvelle-demande",
    label: "Nouvelle demande",
    railIcon: "◇",
    railKey: "diamond",
    tier: "historical",
    historicalHint: "Historique — POC nouvelle demande",
  },
  {
    id: "cycle-actif",
    route: "/cycle-actif",
    label: "Cycle actif",
    railIcon: "◎",
    railKey: "gear",
    tier: "historical",
    historicalHint: "Historique — POC cycle actif",
  },
  {
    id: "decision",
    route: "/decision",
    label: "Décision Morris",
    railIcon: "◆",
    railKey: "project",
    tier: "historical",
    historicalHint: "Historique — POC décision",
  },
];

export const STUDIO_PRIMARY_ROUTES = STUDIO_ROUTES.filter(
  (item) => item.tier === "primary",
);

export const STUDIO_HISTORICAL_ROUTES = STUDIO_ROUTES.filter(
  (item) => item.tier === "historical",
);

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
  if (route === "/studio") {
    return activeRoute === "/studio";
  }
  return activeRoute === route;
}

export function currentProjectIdFromRoute(
  activeRoute: StudioShellRoute,
): string | null {
  if (!isStudioProjectWorkspaceRoute(activeRoute)) return null;
  const encoded = activeRoute.slice("/studio/projects/".length);
  try {
    return decodeURIComponent(encoded);
  } catch {
    return encoded;
  }
}
