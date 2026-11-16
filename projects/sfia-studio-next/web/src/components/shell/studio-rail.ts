/**
 * F1 Navigation rail variants — values from G2 railEvidence (VERIFY PASS).
 * Discriminant fills are intentional: personnel ≠ projet.
 *
 * Variant selection follows proven frame ↔ route ↔ state mapping (G2),
 * not a free pathname heuristic.
 */

import type { CSSProperties } from "react";

export type StudioRailVariant = "personnel" | "projet" | "conversation" | "inspection";

export type StudioSurface =
  | "travail"
  | "projet"
  | "pilotage"
  | "journal"
  | "document"
  | "git"
  | "publication";

export type StudioRailTokens = {
  variant: StudioRailVariant;
  widthPx: number;
  fill: string;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  gap: number;
  railComponentId: string;
  sourceNodeId: string;
};

/** Canonical tokens measured in G2 L2 / railEvidence. */
export const STUDIO_RAIL_VARIANTS: Record<StudioRailVariant, StudioRailTokens> = {
  personnel: {
    variant: "personnel",
    widthPx: 246,
    fill: "#0D1220",
    paddingTop: 20,
    paddingRight: 19,
    paddingBottom: 0,
    paddingLeft: 19,
    gap: 10,
    railComponentId: "shell.rail.personnel",
    sourceNodeId: "606:20",
  },
  projet: {
    variant: "projet",
    widthPx: 246,
    // ML4D 652:* validated — common project rail fill
    fill: "#0C101A",
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    gap: 13,
    railComponentId: "shell.rail.projet",
    sourceNodeId: "652:8",
  },
  conversation: {
    variant: "conversation",
    // Ensemble 04 — project desktop rail fixed at 246 (Figma 652:*)
    widthPx: 246,
    fill: "#0C101A",
    paddingTop: 25,
    paddingRight: 19,
    paddingBottom: 0,
    paddingLeft: 19,
    gap: 13,
    railComponentId: "shell.rail.conversation",
    sourceNodeId: "652:8",
  },
  inspection: {
    variant: "inspection",
    widthPx: 246,
    fill: "#0C101A",
    paddingTop: 23,
    paddingRight: 19,
    paddingBottom: 22,
    paddingLeft: 19,
    gap: 11,
    railComponentId: "shell.rail.inspection",
    sourceNodeId: "652:8",
  },
};

export const PROJECT_SURFACES: StudioSurface[] = [
  "travail",
  "projet",
  "pilotage",
  "journal",
  "document",
  "git",
  "publication",
];

/** Breadcrumb / chrome labels — Trajectoire remains URL-compatible with ?surface=pilotage. */
export const PROJECT_SURFACE_LABELS: Record<StudioSurface, string> = {
  travail: "Travail",
  projet: "Projet",
  pilotage: "Trajectoire",
  journal: "Journal",
  document: "Documents Nora",
  git: "Sources Git",
  publication: "Résultats et preuves",
};

export function parseStudioSurface(raw: string | null | undefined): StudioSurface | null {
  if (!raw) return null;
  const v = raw.toLowerCase();
  return PROJECT_SURFACES.includes(v as StudioSurface) ? (v as StudioSurface) : null;
}

/**
 * Transient project-surface navigation intent shared by StudioShell (rail Links)
 * and ProjectPage (selectSurface / load normalisation).
 *
 * Scoped by projectId so an intent for project A cannot influence load() of B.
 * Not a durable store: cleared when the URL catches up for that project.
 */
type ProjectSurfaceNavIntent = { projectId: string; surface: StudioSurface };

let projectSurfaceNavIntent: ProjectSurfaceNavIntent | null = null;

export function noteProjectSurfaceNavIntent(
  projectId: string | null | undefined,
  surface: StudioSurface | null,
): void {
  if (!projectId || !surface) {
    return;
  }
  projectSurfaceNavIntent = { projectId, surface };
}

/** Peek intent only when it belongs to the given project. */
export function peekProjectSurfaceNavIntent(
  projectId: string | null | undefined,
): StudioSurface | null {
  if (!projectId || !projectSurfaceNavIntent) return null;
  if (projectSurfaceNavIntent.projectId !== projectId) return null;
  return projectSurfaceNavIntent.surface;
}

export function clearProjectSurfaceNavIntent(
  projectId?: string | null,
  matched?: StudioSurface | null,
): void {
  if (!projectSurfaceNavIntent) return;
  if (projectId != null && projectSurfaceNavIntent.projectId !== projectId) return;
  if (matched == null || projectSurfaceNavIntent.surface === matched) {
    projectSurfaceNavIntent = null;
  }
}

export type ProjectLoadSurfaceDecision = {
  /** Surface to display after load settles. */
  effectiveSurface: StudioSurface;
  /** True when the live URL lacks a valid `surface` query and must be normalised. */
  shouldNormalizeUrl: boolean;
};

/**
 * Resolve surface after async project `load()` completes.
 * Priority: valid live URL surface → recent nav intent → default `travail`.
 * Normalise only when the URL has no valid surface; never invent a silent
 * downgrade from an explicit user intent (e.g. pilotage) to travail.
 */
export function resolveProjectLoadSurface(input: {
  rawSurface: string | null | undefined;
  pendingIntent: StudioSurface | null;
}): ProjectLoadSurfaceDecision {
  const qSurface = parseStudioSurface(input.rawSurface ?? null);
  const effectiveSurface = qSurface ?? input.pendingIntent ?? "travail";
  const shouldNormalizeUrl =
    !input.rawSurface || (Boolean(input.rawSurface) && !qSurface);
  return { effectiveSurface, shouldNormalizeUrl };
}

export function parseProjectId(pathname: string): string | null {
  const m = pathname.match(/^\/projects\/([^/?#]+)/);
  return m?.[1] ?? null;
}

export function parsePreparationId(pathname: string): string | null {
  const m = pathname.match(/^\/preparations\/([^/?#]+)/);
  return m?.[1] ?? null;
}

export function railStyle(tokens: StudioRailTokens): CSSProperties {
  return {
    width: tokens.widthPx,
    background: tokens.fill,
    paddingTop: tokens.paddingTop,
    paddingRight: tokens.paddingRight,
    paddingBottom: tokens.paddingBottom,
    paddingLeft: tokens.paddingLeft,
    gap: tokens.gap,
  };
}

/**
 * Frame ↔ route ↔ state from G2 railEvidence (not a free pathname heuristic):
 * - portfolio / login → personnel (94:50)
 * - sas avant projet → personnel (94:135); reprise liée projet → projet (159:145) via ?resume=1
 * - projet + travail (fil long) → conversation (94:214)
 * - projet + document → inspection (94:370 / 97:359)
 * - projet + journal → personnel (94:515 sujets; correctedFrom projet)
 * - projet + pilotage → projet (125:33 / 127:106)
 */
export function resolveRailVariant(input: {
  pathname: string;
  surface?: string | null;
  searchParams?: URLSearchParams | { get(name: string): string | null } | null;
}): StudioRailVariant {
  const path = input.pathname || "/";
  const sp = input.searchParams;
  if (path.startsWith("/portfolio") || path === "/" || path.startsWith("/login")) {
    return "personnel";
  }
  if (path.startsWith("/preparations/")) {
    // Sas Nora Figma 607:* — all five states use the personal minimal rail (606:20).
    void sp;
    return "personnel";
  }
  if (path.startsWith("/settings")) {
    return "personnel";
  }
  if (path.startsWith("/projects/")) {
    const surface = parseStudioSurface(input.surface) ?? "travail";
    if (surface === "document" || surface === "git" || surface === "publication") return "inspection";
    if (surface === "travail") return "conversation";
    if (surface === "journal") return "personnel";
    // projet overview + pilotage/trajectoire share the product rail fill
    return "projet";
  }
  return "personnel";
}

export type ShellNavAction = "open-preparation";

export type ShellNavItem = {
  key: string;
  label: string;
  href: string | null;
  active: boolean;
  /** Inactive without context — never a fake # link. */
  disabledReason?: string;
  /** Explicit UI action (not a GET navigation). */
  action?: ShellNavAction;
};

/**
 * Personal-space breadcrumb second segment — known routes only.
 * Never invent a label; never keep « Portefeuille » on another route.
 */
export function resolvePersonalBreadcrumb(
  pathname: string,
  searchParams?: URLSearchParams | { get(name: string): string | null } | null,
): string | null {
  const path = pathname || "/";
  if (path.startsWith("/portfolio") || path === "/") return "Portefeuille";
  if (path.startsWith("/preparations/")) {
    const resumed =
      searchParams?.get("resume") === "1" || searchParams?.get("from") === "portfolio";
    return resumed ? "Préparation reprise" : "Nouvelle préparation";
  }
  if (path.startsWith("/dev/sas-visual/resume")) return "Préparation reprise";
  if (path.startsWith("/dev/sas-visual/")) return "Nouvelle préparation";
  if (path.startsWith("/settings/integrations")) return "Intégrations";
  if (path.startsWith("/settings")) return "Paramètres";
  return null;
}

export function buildShellNav(input: {
  pathname: string;
  surface?: string | null;
}): ShellNavItem[] {
  const path = input.pathname || "/";
  const projectId = parseProjectId(path);
  const preparationId = parsePreparationId(path);
  const surface = parseStudioSurface(input.surface) ?? (projectId ? "travail" : null);

  // UX-004: one personal destination — Portefeuille (no Mes projets / Tous les projets).
  const items: ShellNavItem[] = [
    {
      key: "portfolio",
      label: "Portefeuille",
      href: "/portfolio",
      active: path.startsWith("/portfolio") || path === "/",
    },
  ];

  if (!projectId && !preparationId) {
    items.push({
      key: "new-prep",
      label: "Nouveau projet",
      href: null,
      active: false,
      action: "open-preparation",
    });
    // Connected personal space: no redundant « Connexion » rail entry.
    return items;
  }

  if (preparationId) {
    // SAS-F-13 — minimal personal rail: Portefeuille + Préparation en cours.
    // No Travail / Pilotage / Documents / Journal before verified project creation.
    items.push({
      key: "sas",
      label: "Préparation en cours",
      href: `/preparations/${preparationId}`,
      active: true,
    });
    return items;
  }

  // Ensemble 04 rail NAVIGATION — Documents/Git stay in Accès directs (not primary).
  // Trajectoire keeps ?surface=pilotage for deep-link compatibility.
  const surfaces: Array<{ key: StudioSurface; label: string }> = [
    { key: "travail", label: "Travail" },
    { key: "projet", label: "Projet" },
    { key: "journal", label: "Journal" },
    { key: "pilotage", label: "Trajectoire" },
  ];
  for (const s of surfaces) {
    items.push({
      key: s.key,
      label: s.label,
      href: `/projects/${projectId}?surface=${s.key}`,
      active: surface === s.key,
    });
  }
  return items;
}
