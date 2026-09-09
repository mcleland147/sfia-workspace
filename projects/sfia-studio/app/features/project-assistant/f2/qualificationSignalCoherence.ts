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
  | "safe_cosmetic_envelope_confirmed"
  | "not_lifecycle_formalization_envelope"
  | "genuine_critical_preserved"
  | "false_structural_lifecycle_formalization_neutralized"
  | "lifecycle_formalization_substantive_residual";

export type CosmeticSafeClauseRole =
  | "cycle_meta"
  | "cosmetic_wording"
  | "no_impact"
  | "governance";

export type LifecycleFormalizationClauseRole =
  | "lifecycle_formalize_verb"
  | "lifecycle_rec_object"
  | "lifecycle_bookkeeping_filler"
  | "lifecycle_rec_formalize"
  | "decision_handoff"
  | "no_product_critical_impact"
  | "governance";

/** Neutralize structuralChange only — do not invent lowRiskBounded/Light. */
export const LIFECYCLE_FORMALIZATION_DAMPENED_SIGNALS: Pick<
  F2QualificationSignals,
  | "structuralChange"
  | "securityImpact"
  | "architectureImpact"
  | "dataImpact"
  | "irreversible"
> = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
};

export type QualificationSignalCoherenceResult = {
  signals: F2QualificationSignals;
  cosmeticSafeToSuppress: boolean;
  reason: QualificationSignalCoherenceReason;
  residual: string;
  recognizedRoles: Array<CosmeticSafeClauseRole | LifecycleFormalizationClauseRole>;
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

/**
 * Closed-world lifecycle formalization grammar.
 * NO arbitrary [\s\S]{0,N} spans — only whitelist tokens may be consumed.
 * Unknown text between anchors must remain as residual.
 */
const LIFECYCLE_FORMALIZE_VERB_RES: readonly RegExp[] = [
  /\b(?:formalise|formaliser|enregistre|enregistrer|mat[eé]rialise|mat[eé]rialiser)\b/i,
];

const LIFECYCLE_REC_OBJECT_RES: readonly RegExp[] = [
  /\brecommandation(?:\s+de\s+prochaine\s+[eé]tape)?\b/i,
  /\bprochaine\s+[eé]tape\b/i,
];

/** Explicitly permitted bookkeeping fillers only — never open windows. */
const LIFECYCLE_BOOKKEEPING_FILLER_RES: readonly RegExp[] = [
  /\bdans\s+studio\b/i,
  /\bmaintenant\b/i,
  /\b(?:cette|la|une|le|les|l['’])\b/i,
];

const DECISION_HANDOFF_RES: readonly RegExp[] = [
  /\b(?:afin|pour)\s+que\s+je\s+(?:puisse\s+)?(?:la\s+)?d[eé]cider\b/i,
  /\bsans\s+(?:cr[eé]er|d[eé]marrer|activer)\s+(?:de\s+|un\s+)?cycle\b/i,
  /\brecommandation\s*(?:n['’]est\s+pas|≠|!=)\s*(?:une\s+)?d[eé]cision\b/i,
];

const NO_PRODUCT_CRITICAL_IMPACT_RES: readonly RegExp[] = [
  /\bsans\s+(?:impact\s+)?(?:s[eé]curit[eé]|security|architecture|donn[eé]es|data|irr[eé]versib)/i,
  /\bwithout\s+(?:security|architecture|data|irreversib)/i,
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
 * the exact original provider signals — except a bounded lifecycle-formalization
 * dampener that clears structuralChange alone when a COMPLETE closed-world
 * formalization envelope is proven (recognized clauses only; empty residual).
 */
export function reconcileQualificationSignals(input: {
  userContent: string;
  signals: F2QualificationSignals;
}): QualificationSignalCoherenceResult {
  const classification = classifyClosedWorldCosmeticRequest(input.userContent);
  if (classification.cosmeticSafeToSuppress) {
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

  const lifecycle = classifyLifecycleFormalizationRequest(input.userContent);
  const hasFormalizeClause =
    lifecycle.recognizedRoles.includes("lifecycle_formalize_verb") &&
    lifecycle.recognizedRoles.includes("lifecycle_rec_object");
  const s = input.signals;

  // Formalization clause present but residual remains → fail-closed: never dampen.
  if (hasFormalizeClause && lifecycle.residual.length > 0) {
    if (
      s.securityImpact === true ||
      s.architectureImpact === true ||
      s.dataImpact === true ||
      s.irreversible === true
    ) {
      return {
        signals: s,
        cosmeticSafeToSuppress: false,
        reason: "genuine_critical_preserved",
        residual: lifecycle.residual,
        recognizedRoles: lifecycle.recognizedRoles,
      };
    }
    return {
      signals: s,
      cosmeticSafeToSuppress: false,
      reason: "lifecycle_formalization_substantive_residual",
      residual: lifecycle.residual,
      recognizedRoles: lifecycle.recognizedRoles,
    };
  }

  // Dampen only on positively proven closed-world envelope (empty residual).
  if (lifecycle.lifecycleFormalizationEnvelope) {
    if (
      s.securityImpact === true ||
      s.architectureImpact === true ||
      s.dataImpact === true ||
      s.irreversible === true
    ) {
      return {
        signals: s,
        cosmeticSafeToSuppress: false,
        reason: "genuine_critical_preserved",
        residual: lifecycle.residual,
        recognizedRoles: lifecycle.recognizedRoles,
      };
    }
    if (s.structuralChange !== true) {
      return {
        signals: s,
        cosmeticSafeToSuppress: false,
        reason: "signals_already_safe",
        residual: lifecycle.residual,
        recognizedRoles: lifecycle.recognizedRoles,
      };
    }
    return {
      signals: {
        ...s,
        ...LIFECYCLE_FORMALIZATION_DAMPENED_SIGNALS,
        // Preserve caller lowRiskBounded — never invent Light eligibility.
        lowRiskBounded: s.lowRiskBounded,
      },
      cosmeticSafeToSuppress: false,
      reason: "false_structural_lifecycle_formalization_neutralized",
      residual: lifecycle.residual,
      recognizedRoles: lifecycle.recognizedRoles,
    };
  }

  return {
    signals: input.signals,
    cosmeticSafeToSuppress: false,
    reason: classification.reason,
    residual: classification.residual,
    recognizedRoles: classification.recognizedRoles,
  };
}

/**
 * Bounded closed-world classifier: advisory lifecycle recommendation formalization
 * for Pilote decision. Envelope is dampenable ONLY when:
 * - a formalize verb AND a recommendation object are each recognized as whitelist tokens, AND
 * - no substantive residual remains after stripping whitelist spans only.
 * No arbitrary [\s\S]{0,N} windows — unknown text between anchors stays residual.
 */
export function classifyLifecycleFormalizationRequest(userContent: string): {
  lifecycleFormalizationEnvelope: boolean;
  residual: string;
  recognizedRoles: LifecycleFormalizationClauseRole[];
} {
  let cursor = normalizeRequest(userContent);
  const recognizedRoles: LifecycleFormalizationClauseRole[] = [];
  const specs: Array<{
    role: LifecycleFormalizationClauseRole;
    res: readonly RegExp[];
  }> = [
    // Prefer longer object phrases via equal-start length preference in matcher.
    { role: "lifecycle_rec_object", res: LIFECYCLE_REC_OBJECT_RES },
    { role: "lifecycle_formalize_verb", res: LIFECYCLE_FORMALIZE_VERB_RES },
    { role: "lifecycle_bookkeeping_filler", res: LIFECYCLE_BOOKKEEPING_FILLER_RES },
    { role: "decision_handoff", res: DECISION_HANDOFF_RES },
    { role: "no_product_critical_impact", res: NO_PRODUCT_CRITICAL_IMPACT_RES },
    { role: "governance", res: GOVERNANCE_RES },
  ];
  for (let i = 0; i < 32; i += 1) {
    let best: {
      start: number;
      end: number;
      role: LifecycleFormalizationClauseRole;
    } | null = null;
    for (const { role, res } of specs) {
      for (const re of res) {
        const copy = new RegExp(re.source, re.flags.replace("g", ""));
        const m = copy.exec(cursor);
        if (!m || m.index == null) continue;
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
    }
    if (!best) break;
    recognizedRoles.push(best.role);
    cursor = `${cursor.slice(0, best.start)} ${cursor.slice(best.end)}`;
    cursor = cursor.replace(/\s+/g, " ").trim();
  }
  const residual = stripNonSubstantive(cursor);
  const hasVerb = recognizedRoles.includes("lifecycle_formalize_verb");
  const hasObject = recognizedRoles.includes("lifecycle_rec_object");
  const hasFormalize = hasVerb && hasObject;
  if (hasFormalize) {
    recognizedRoles.push("lifecycle_rec_formalize");
  }
  return {
    lifecycleFormalizationEnvelope: hasFormalize && residual.length === 0,
    residual,
    recognizedRoles,
  };
}
