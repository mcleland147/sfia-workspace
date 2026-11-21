/**
 * Deterministic cycle-type normalization at the semantic → D5 boundary.
 * Reuses CYCLE_TYPES / official labels — does not create a parallel catalogue.
 */
import { CYCLE_TYPES, type CycleType, isCycleType } from "@/domains/pilotage/cki-resolve";

/** Official French / display labels (same vocabulary as forecast-builder). */
export const CYCLE_TYPE_LABELS: Record<CycleType, string> = {
  CADRAGE: "cadrage",
  CONCEPTION_FONCTIONNELLE: "conception fonctionnelle",
  ARCHITECTURE_FONCTIONNELLE: "architecture fonctionnelle",
  UX_UI: "conception UX",
  BACKLOG: "backlog",
  ARCHITECTURE_TECHNIQUE: "architecture technique",
  INTEGRATION_DEVOPS: "intégration DevOps",
  DELIVERY: "delivery",
  QA_VALIDATION: "validation qualité",
  SECURITE: "sécurité",
  DEPLOIEMENT_RELEASE: "déploiement release",
  OBSERVABILITE: "observabilité",
  PR_READINESS: "préparation PR",
  POST_MERGE: "post-merge",
  CAPITALISATION: "capitalisation",
};

/** Extra unambiguous aliases → canonical enum (never invent new cycle types). */
const ALIASES: Record<string, CycleType> = {
  ux: "UX_UI",
  "ux/ui": "UX_UI",
  "ux-ui": "UX_UI",
  "conception ux": "UX_UI",
  "conception ux/ui": "UX_UI",
  "experience utilisateur": "UX_UI",
  "expérience utilisateur": "UX_UI",
  "cycle de cadrage": "CADRAGE",
  "premier cycle de cadrage": "CADRAGE",
  "cycle cadrage": "CADRAGE",
};

export type CycleTypeNormalizeResult =
  | { ok: true; cycleType: CycleType; raw: string; via: "enum" | "case" | "label" | "alias" }
  | { ok: false; reason: "EMPTY" | "UNKNOWN" | "AMBIGUOUS"; raw: string; candidates?: CycleType[] };

function fold(raw: string): string {
  return raw
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[_/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Map a semantic / LIVE cycleType string to a canonical CycleType.
 * Safe variants: enum exact, case, official label, known aliases.
 * Never silently maps an unknown string to another type.
 */
export function normalizeCycleType(input: string | null | undefined): CycleTypeNormalizeResult {
  if (input == null) return { ok: false, reason: "EMPTY", raw: "" };
  const raw = String(input).trim();
  if (!raw) return { ok: false, reason: "EMPTY", raw: "" };

  if (isCycleType(raw)) {
    return { ok: true, cycleType: raw, raw, via: "enum" };
  }

  const upper = raw.toUpperCase().replace(/[\s-]+/g, "_");
  if (isCycleType(upper)) {
    return { ok: true, cycleType: upper, raw, via: "case" };
  }

  const folded = fold(raw);
  const labelHits = (CYCLE_TYPES as readonly CycleType[]).filter(
    (t) => fold(CYCLE_TYPE_LABELS[t]) === folded || fold(t.replace(/_/g, " ")) === folded,
  );
  if (labelHits.length === 1) {
    return { ok: true, cycleType: labelHits[0]!, raw, via: "label" };
  }
  if (labelHits.length > 1) {
    return { ok: false, reason: "AMBIGUOUS", raw, candidates: labelHits };
  }

  const alias = ALIASES[folded];
  if (alias) {
    return { ok: true, cycleType: alias, raw, via: "alias" };
  }

  return { ok: false, reason: "UNKNOWN", raw };
}

/** Convenience: canonical type or undefined (never invent). */
export function tryCanonicalCycleType(input: string | null | undefined): CycleType | undefined {
  const r = normalizeCycleType(input);
  return r.ok ? r.cycleType : undefined;
}

/** Short catalogue for Nora context — identifiers + labels only (not full CKI bodies). */
export function formatRecognizedCycleCatalogueSnippet(): string[] {
  return [
    "### Types de cycles Studio reconnus (identifiants canoniques)",
    "Utilise UNIQUEMENT ces identifiants dans parameters.cycleType / toCycleType pour d5.pilotage_command.",
    "Les travaux métier (comparaison de solutions, expérimentation, évaluation…) peuvent être décrits librement,",
    "mais ne sont PAS des types de cycles — place-les dans le raisonnement / rationale, pas dans cycleType.",
    ...CYCLE_TYPES.map((t) => `- ${t} (« ${CYCLE_TYPE_LABELS[t]} »)`),
  ];
}
