import type { StudioRoute } from "@/lib/navigation";
import type { VsStateId, VsStateMeta } from "./types";

export const VS_STATES: VsStateMeta[] = [
  {
    id: "VS-UX-01",
    label: "01 — Nouvelle demande",
    route: "/nouvelle-demande",
    kind: "state",
    figmaNode: "51:3",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-02",
    label: "02 — Qualification en cours",
    route: "/nouvelle-demande",
    kind: "state",
    figmaNode: "51:139",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-03",
    label: "03 — Qualification proposée",
    route: "/nouvelle-demande",
    kind: "state",
    figmaNode: "51:277",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-04",
    label: "04 — Gate Morris",
    route: "/decision",
    kind: "state",
    figmaNode: "51:415",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-05",
    label: "05 — Exécution",
    route: "/cycle-actif",
    kind: "state",
    figmaNode: "51:540",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-06",
    label: "06 — Rapport disponible",
    route: "/cycle-actif",
    kind: "state",
    figmaNode: "51:678",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-07",
    label: "07 — Analyse GPT",
    route: "/cycle-actif",
    kind: "state",
    figmaNode: "51:816",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-08",
    label: "08 — Verdict proposé",
    route: "/cycle-actif",
    kind: "state",
    figmaNode: "51:954",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-09",
    label: "09 — Décision Morris finale",
    route: "/decision",
    kind: "state",
    figmaNode: "51:1079",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-10",
    label: "10 — Clôture slice-only",
    route: "/synthese",
    kind: "state",
    figmaNode: "51:1204",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-VAR-LOADING",
    label: "VAR — Loading GPT",
    route: "/nouvelle-demande",
    kind: "variant",
    figmaNode: "52:2",
    dimensions: "720×420",
  },
  {
    id: "VS-UX-VAR-ERROR",
    label: "VAR — Erreur fail-closed",
    route: "/nouvelle-demande",
    kind: "variant",
    figmaNode: "52:10",
    dimensions: "720×420",
  },
  {
    id: "VS-UX-VAR-STOP",
    label: "VAR — STOP Morris",
    route: "/cycle-actif",
    kind: "variant",
    figmaNode: "52:18",
    dimensions: "720×420",
  },
  {
    id: "VS-UX-VAR-GO-INVALID",
    label: "VAR — GO invalide",
    route: "/decision",
    kind: "variant",
    figmaNode: "52:26",
    dimensions: "720×420",
  },
];

export const VS_STATE_IDS = VS_STATES.map((s) => s.id);

export const STUDIO_ROUTES_ONLY: StudioRoute[] = [
  "/nouvelle-demande",
  "/decision",
  "/cycle-actif",
  "/synthese",
];

export function metaFor(id: VsStateId): VsStateMeta {
  const found = VS_STATES.find((s) => s.id === id);
  if (!found) throw new Error(`Unknown VS state: ${id}`);
  return found;
}

export function defaultStateForRoute(route: StudioRoute): VsStateId {
  switch (route) {
    case "/nouvelle-demande":
      return "VS-UX-01";
    case "/decision":
      return "VS-UX-04";
    case "/cycle-actif":
      return "VS-UX-05";
    case "/synthese":
      return "VS-UX-10";
  }
}

export function parseVsQuery(value: string | null | undefined): VsStateId | null {
  if (!value) return null;
  const normalized = value.trim().toUpperCase();
  const aliases: Record<string, VsStateId> = {
    "01": "VS-UX-01",
    "02": "VS-UX-02",
    "03": "VS-UX-03",
    "04": "VS-UX-04",
    "05": "VS-UX-05",
    "06": "VS-UX-06",
    "07": "VS-UX-07",
    "08": "VS-UX-08",
    "09": "VS-UX-09",
    "10": "VS-UX-10",
    LOADING: "VS-UX-VAR-LOADING",
    ERROR: "VS-UX-VAR-ERROR",
    STOP: "VS-UX-VAR-STOP",
    "GO-INVALID": "VS-UX-VAR-GO-INVALID",
    GO_INVALID: "VS-UX-VAR-GO-INVALID",
  };
  if (normalized in aliases) return aliases[normalized];
  if ((VS_STATE_IDS as string[]).includes(normalized)) {
    return normalized as VsStateId;
  }
  return null;
}

export function queryFor(id: VsStateId): string {
  return id.replace("VS-UX-", "").replace("VAR-", "VAR-");
}
