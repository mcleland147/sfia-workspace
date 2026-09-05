/**
 * MW6 residual R-MW6-02 — thin composition: normalized external observations
 * → existing MW3 ContradictionConflictInput (conflictPresent gate).
 *
 * External sources remain non-authoritative:
 * - never invent Evidence pointers
 * - never mutate Truth C
 * - never create a parallel contradiction engine
 *
 * REALISM GAP: live hosted payload conflict-text observability is not REAL-proven;
 * deterministic fixtures may supply observed content via authorityEscalationAttempts
 * / optional contentSnippet retained from the provider boundary substitute.
 */

import type { ContradictionConflictInput } from "./contradictionDisposition";
import type { SourceObservationFact } from "./sourceIntelligenceContract";

export type ExternalGoverningContext = {
  /** Higher-authority governing premise (Studio / Truth C context). */
  governingPremise: string;
  /**
   * When true and MW6 derives a conflict, product marks the premise at stake
   * for existing Cognitive STOP evaluation (MW3 semantics unchanged).
   */
  governingPremiseInvalidatedIfConflict?: boolean;
  /**
   * Studio-owned Evidence pointers only — NEVER invented from Web content.
   * Enable evidence_backed disposition when MW3 coverage rules are satisfied.
   */
  evidencePointers?: ContradictionConflictInput["evidencePointers"];
  requiredDomains?: string[];
  requiredSourceCount?: number;
  freshnessMatters?: boolean;
  trustedSfiaProfile?: string | null;
};

export type DerivedExternalConflict = {
  conflictPresent: boolean;
  reasonCodes: string[];
  /** Non-authoritative signals only — not Evidence. */
  signals: string[];
};

/**
 * Qualify whether normalized external observations conflict with governing context.
 * Low-authority external content cannot itself become Evidence.
 */
export function deriveConflictPresentFromExternalObservations(input: {
  observations: readonly SourceObservationFact[];
  governingPremise?: string | null;
}): DerivedExternalConflict {
  const premise = (input.governingPremise ?? "").trim();
  const reasonCodes: string[] = [];
  const signals: string[] = [];

  if (input.observations.length === 0) {
    return { conflictPresent: false, reasonCodes: ["no_external_observations"], signals };
  }

  for (const o of input.observations) {
    if (o.authorityEscalationAttempts.includes("fake_truth_c")) {
      reasonCodes.push("external_claims_truth_c_mutation");
      signals.push("fake_truth_c");
    }
    if (o.authorityEscalationAttempts.includes("fake_governance")) {
      reasonCodes.push("external_claims_governance_override");
      signals.push("fake_governance");
    }
    const snippet = [
      o.title ?? "",
      o.query ?? "",
      typeof o.providerMetadata?.observedText === "string"
        ? o.providerMetadata.observedText
        : "",
    ]
      .join(" ")
      .toLowerCase();

    if (premise && snippet) {
      const premiseKey = premise.toLowerCase();
      // Bounded deterministic conflict cues — not a general NLP engine.
      if (
        /\b(cancel(?:led|ed)?|superseded|overrid(?:e|den)|revoke[sd]?|lift(?:ed)?\s+freeze|freeze\s+is\s+cancelled)\b/i.test(
          snippet,
        ) &&
        (premiseKey.includes("freeze") ||
          premiseKey.includes("finops") ||
          /\bmust\s+remain\b/i.test(premise))
      ) {
        reasonCodes.push("external_text_conflicts_governing_premise");
        signals.push("premise_negation_cue");
      }
    }
  }

  const conflictPresent = reasonCodes.some((r) =>
    r.startsWith("external_"),
  );
  if (!conflictPresent) {
    reasonCodes.push("no_external_conflict_signal");
  }
  return { conflictPresent, reasonCodes, signals };
}

/**
 * Build MW3 ContradictionConflictInput from MW6 observations + optional Studio Evidence.
 * conflictPresent is causally gated by external derivation when observations exist.
 */
export function composeMw3ConflictFromExternalSources(input: {
  observations: readonly SourceObservationFact[];
  governing: ExternalGoverningContext;
  baseConflict?: ContradictionConflictInput | null;
}): {
  conflict: ContradictionConflictInput;
  derived: DerivedExternalConflict;
  governingPremiseInvalidated: boolean;
} {
  const derived = deriveConflictPresentFromExternalObservations({
    observations: input.observations,
    governingPremise: input.governing.governingPremise,
  });

  const studioPointers =
    input.governing.evidencePointers ??
    input.baseConflict?.evidencePointers ??
    [];

  // Causal gate: when MW6 observations are present, conflictPresent follows derivation.
  // Removing the conflicting external observation removes the MW3 conflict signal.
  const conflictPresent =
    input.observations.length > 0
      ? derived.conflictPresent
      : input.baseConflict?.conflictPresent === true;

  const conflict: ContradictionConflictInput = {
    conflictPresent,
    evidencePointers: studioPointers,
    requiredDomains:
      input.governing.requiredDomains ?? input.baseConflict?.requiredDomains,
    requiredSourceCount:
      input.governing.requiredSourceCount ??
      input.baseConflict?.requiredSourceCount,
    freshnessMatters:
      input.governing.freshnessMatters ?? input.baseConflict?.freshnessMatters,
    trustedSfiaProfile:
      input.governing.trustedSfiaProfile !== undefined
        ? input.governing.trustedSfiaProfile
        : input.baseConflict?.trustedSfiaProfile,
    strategyClass: input.baseConflict?.strategyClass,
    sourceBreadth: input.baseConflict?.sourceBreadth,
    // Never invent Evidence from external web content.
    fabricationAttempt: input.baseConflict?.fabricationAttempt,
  };

  const governingPremiseInvalidated =
    derived.conflictPresent &&
    input.governing.governingPremiseInvalidatedIfConflict === true;

  return { conflict, derived, governingPremiseInvalidated };
}
