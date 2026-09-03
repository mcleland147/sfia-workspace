/**
 * F2-local closed-world cosmetic guardrail (CORR-MW5-DLV-05).
 * Applied BEFORE QualifyCycleWithCkc. Does not change OA recommendProfile.
 *
 * Safety is positively proven: every substantive span must match a closed
 * allowlist of cosmetic/meta roles. Unknown residual preserves provider signals.
 * A denylist of dangerous words is NOT the safety authority.
 */

import type { F2QualificationSignals } from "./types";

export const CRITICAL_QUALIFICATION_SIGNAL_KEYS = [
  "structuralChange",
  "securityImpact",
  "architectureImpact",
  "dataImpact",
  "irreversible",
] as const;

export type CriticalQualificationSignalKey =
  (typeof CRITICAL_QUALIFICATION_SIGNAL_KEYS)[number];

export const COSMETIC_SAFE_SIGNALS: F2QualificationSignals = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
};

export type QualificationSignalCoherenceReason =
  | "not_pure_cosmetic_envelope"
  | "unknown_substantive_residual"
  | "signals_already_safe"
  | "false_critical_neutralized"
  | "safe_cosmetic_envelope_confirmed";

export type CosmeticSafeClauseRole =
  | "cycle_meta"
  | "cosmetic_wording"
  | "no_impact"
  | "governance";

export type QualificationSignalCoherenceResult = {
  signals: F2QualificationSignals;
  cosmeticSafeToSuppress: boolean;
  reason: QualificationSignalCoherenceReason;
  residual: string;
  recognizedRoles: CosmeticSafeClauseRole[];
};

const ARTICLE = "(?:le |la |les |l['’]|the )?";
const DIM =
  `${ARTICLE}(?:comportement|behaviou?r|donn[ée]es|data|architecture|s[ée]curit[ée]|security|autorit[ée]|authority|ex[ée]cution|execution|irr[ée]versibilit[ée]|irr[ée]versible|irreversib(?:ility|le))`;

const CYCLE_META_RE =
  /\bqualifie(?:r)?(?:\s+ce\s+chantier)?\s+en(?:\s+cycle)?\s+delivery\b/i;

const COSMETIC_WORDING_RES: readonly RegExp[] = [
  /\bune?\s+correction\s+purement\s+cosm[eé]tique\s+de\s+wording\s+dans\s+un\s+libell[eé]\s+d['’]interface\b/i,
  /\bcorrection\s+purement\s+cosm[eé]tique\s+de\s+wording\s+dans\s+un\s+libell[eé]\s+d['’]interface\b/i,
  /\bmodifie(?:r)?\s+uniquement\s+la\s+formulation\s+d['’]un\s+libell[eé]\s+ui\b/i,
  /\brenomme(?:r)?\s+uniquement\s+le\s+texte\s+affich[eé]\s+dans\s+l['’]interface\b/i,
];

const NO_IMPACT_RE = new RegExp(
  String.raw`\b(?:sans impact(?:\s+sur)?|without impact(?:\s+on)?|aucun impact sur|sans modifier)\s+${DIM}(?:\s*,\s*${DIM})*(?:\s+(?:ou|or|et|and|ni)\s+${DIM})?`,
  "i",
);

const GOVERNANCE_RES: readonly RegExp[] = [
  /\bpr[eé]pare(?:r)?(?:\s+uniquement)?\s+la\s+proposition(?:\s+si\s+le\s+cadre\s+le\s+permet)?\b/i,
  /\bne\s+d[eé]cide(?:r)?\s+pas(?:\s+[aà]\s+ma\s+place)?\b/i,
  /\bn['’]ex[eé]cute(?:r)?\s+rien\b/i,
  /\baucune\s+ex[eé]cution\b/i,
];

const CONNECTOR_OR_PUNCT_RE =
  /[.,;:!?()[\]«»""''’]+|\b(?:et|and|puis|then|ou|or|ni)\b/gi;

function normalizeRequest(content: string): string {
  return content
    .normalize("NFC")
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function coversRequiredNoImpactDimensions(span: string): boolean {
  const t = span.toLowerCase();
  const behavior = /comportement|behaviou?r/.test(t);
  const data = /donn[ée]es|\bdata\b/.test(t);
  const architecture = /architecture/.test(t);
  const security = /s[ée]curit[ée]|security/.test(t);
  const authorityOrExecution =
    /autorit[ée]|authority|ex[ée]cution|execution/.test(t);
  const irreversibility = /irr[ée]versib/.test(t);
  return (
    behavior &&
    data &&
    architecture &&
    security &&
    authorityOrExecution &&
    irreversibility
  );
}

type SpanSpec = { role: CosmeticSafeClauseRole; re: RegExp };

function spanSpecs(): SpanSpec[] {
  return [
    { role: "cycle_meta", re: CYCLE_META_RE },
    ...COSMETIC_WORDING_RES.map((re) => ({
      role: "cosmetic_wording" as const,
      re,
    })),
    { role: "no_impact", re: NO_IMPACT_RE },
    ...GOVERNANCE_RES.map((re) => ({ role: "governance" as const, re })),
  ];
}

function findLeftmostSafeSpan(
  text: string,
): { start: number; end: number; role: CosmeticSafeClauseRole } | null {
  let best: { start: number; end: number; role: CosmeticSafeClauseRole } | null =
    null;
  for (const { role, re } of spanSpecs()) {
    const copy = new RegExp(re.source, re.flags.replace("g", ""));
    const m = copy.exec(text);
    if (!m || m.index == null) continue;
    if (role === "no_impact" && !coversRequiredNoImpactDimensions(m[0])) {
      continue;
    }
    const start = m.index;
    const end = start + m[0].length;
    if (
      !best ||
      start < best.start ||
      (start === best.start && end - start > best.end - best.start)
    ) {
      best = { start, end, role };
    }
  }
  return best;
}

function stripNonSubstantive(text: string): string {
  let next = text;
  for (let i = 0; i < 8; i += 1) {
    const stripped = next.replace(CONNECTOR_OR_PUNCT_RE, " ").replace(/\s+/g, " ").trim();
    if (stripped === next) return stripped;
    next = stripped;
  }
  return next;
}

/**
 * Closed-world classification of the user request only (no signal mutation).
 */
export function classifyClosedWorldCosmeticRequest(userContent: string): {
  cosmeticSafeToSuppress: boolean;
  reason: QualificationSignalCoherenceReason;
  residual: string;
  recognizedRoles: CosmeticSafeClauseRole[];
} {
  let cursor = normalizeRequest(userContent);
  const recognizedRoles: CosmeticSafeClauseRole[] = [];
  for (let i = 0; i < 32; i += 1) {
    const hit = findLeftmostSafeSpan(cursor);
    if (!hit) break;
    recognizedRoles.push(hit.role);
    cursor = `${cursor.slice(0, hit.start)} ${cursor.slice(hit.end)}`;
    cursor = cursor.replace(/\s+/g, " ").trim();
  }
  const residual = stripNonSubstantive(cursor);
  const hasWording = recognizedRoles.includes("cosmetic_wording");
  const hasNoImpact = recognizedRoles.includes("no_impact");
  if (!hasWording || !hasNoImpact) {
    return {
      cosmeticSafeToSuppress: false,
      reason: "not_pure_cosmetic_envelope",
      residual,
      recognizedRoles,
    };
  }
  if (residual.length > 0) {
    return {
      cosmeticSafeToSuppress: false,
      reason: "unknown_substantive_residual",
      residual,
      recognizedRoles,
    };
  }
  return {
    cosmeticSafeToSuppress: true,
    reason: "safe_cosmetic_envelope_confirmed",
    residual: "",
    recognizedRoles,
  };
}

export function hasCriticalQualificationSignal(
  signals: F2QualificationSignals,
): boolean {
  return CRITICAL_QUALIFICATION_SIGNAL_KEYS.some((key) => signals[key] === true);
}

function signalsAlreadySafe(signals: F2QualificationSignals): boolean {
  return (
    !hasCriticalQualificationSignal(signals) && signals.lowRiskBounded === true
  );
}

/**
 * Neutralize false Critical provider signals only when the request is a
 * positively proven closed-world pure-cosmetic envelope. Otherwise return
 * the exact original provider signals.
 */
export function reconcileQualificationSignals(input: {
  userContent: string;
  signals: F2QualificationSignals;
}): QualificationSignalCoherenceResult {
  const classification = classifyClosedWorldCosmeticRequest(input.userContent);
  if (!classification.cosmeticSafeToSuppress) {
    return {
      signals: input.signals,
      cosmeticSafeToSuppress: false,
      reason: classification.reason,
      residual: classification.residual,
      recognizedRoles: classification.recognizedRoles,
    };
  }
  if (signalsAlreadySafe(input.signals)) {
    return {
      signals: input.signals,
      cosmeticSafeToSuppress: true,
      reason: "signals_already_safe",
      residual: classification.residual,
      recognizedRoles: classification.recognizedRoles,
    };
  }
  return {
    signals: { ...COSMETIC_SAFE_SIGNALS },
    cosmeticSafeToSuppress: true,
    reason: "false_critical_neutralized",
    residual: classification.residual,
    recognizedRoles: classification.recognizedRoles,
  };
}
