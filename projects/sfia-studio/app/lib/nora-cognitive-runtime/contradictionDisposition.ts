/**
 * MW3-S01 — Candidate vs evidence-backed contradiction disposition.
 *
 * Studio-owned fail-closed policy over existing Evidence freshness / source
 * metadata. Does NOT manufacture Evidence or invent trustedSfiaProfile.
 * Cognitive Strategy / CWP may influence verification effort elsewhere —
 * they MUST NOT determine whether a contradiction is evidence-backed.
 *
 * OpenAI reasoning ≠ SFIA Evidence. Model assertion ≠ Truth C.
 */

import type { EvidenceFreshness } from "@/lib/oa/evidence-review/domain/types";
import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";

export type ContradictionDispositionKind =
  | "none"
  | "candidate"
  | "evidence_backed";

export type ContradictionInsufficiencyReason =
  | "no_conflict_signal"
  | "insufficient_evidence_pointers"
  | "insufficient_source_coverage"
  | "stale_evidence"
  | "wrong_domain"
  | "missing_attribution"
  | "unknown_freshness_when_required"
  | "fabricated_pointer_rejected"
  | "coverage_incomplete";

/** Existing Evidence/source pointer — never invented by this controller. */
export type ContradictionEvidencePointer = {
  evidenceId: string;
  sourceId: string;
  /** Epistemic / claim domain qualifier already available (not OA error domain). */
  domain: string;
  freshness: EvidenceFreshness;
  /** Attribution present when Evidence is attributable to a real source. */
  attributable: boolean;
  /** Rejected if true — fabricated / invented pointers. */
  fabricated?: boolean;
};

export type ContradictionConflictInput = {
  /** Apparent or stated conflict among claims/sources. */
  conflictPresent: boolean;
  /** Claimed governing domains the conflict must cover when freshness/domain matter. */
  requiredDomains?: string[];
  /** Minimum distinct real sources required for evidence-backed promotion. */
  requiredSourceCount?: number;
  /** When true, stale/unknown freshness blocks evidence-backed promotion. */
  freshnessMatters?: boolean;
  evidencePointers: ContradictionEvidencePointer[];
  /**
   * Optional CWP/strategy context — recorded for telemetry only.
   * MUST NOT change disposition outcome.
   */
  strategyClass?: CognitiveStrategyClass | null;
  sourceBreadth?: "low" | "medium" | "high" | "unknown" | null;
  trustedSfiaProfile?: string | null;
  /**
   * Explicit fabrication attempt signal (eval/tests).
   * Forces fail-closed candidate/none — never invents Evidence.
   */
  fabricationAttempt?: boolean;
};

export type ContradictionDispositionResult = {
  disposition: ContradictionDispositionKind;
  insufficiencyReasons: ContradictionInsufficiencyReason[];
  acceptedEvidenceIds: string[];
  acceptedSourceIds: string[];
  /** Honest disclosure when proof is insufficient. */
  disclosure: string | null;
  /** Profile is contextual only — never authority; null never invented. */
  trustedSfiaProfile: string | null;
  /** Telemetry only — not a truth input. */
  strategyClassObserved: CognitiveStrategyClass | null;
  sourceBreadthObserved: "low" | "medium" | "high" | "unknown" | null;
};

function unique<T>(items: T[]): T[] {
  return [...new Set(items)];
}

/**
 * Fail-closed disposition:
 * A none · B/C candidate · D evidence_backed when coverage+domain+freshness+attribution hold.
 */
export function disposeContradiction(
  input: ContradictionConflictInput,
): ContradictionDispositionResult {
  const profile =
    typeof input.trustedSfiaProfile === "string" &&
    input.trustedSfiaProfile.trim().length > 0
      ? input.trustedSfiaProfile.trim()
      : null;

  const baseMeta = {
    trustedSfiaProfile: profile,
    strategyClassObserved: input.strategyClass ?? null,
    sourceBreadthObserved: input.sourceBreadth ?? null,
  };

  if (input.fabricationAttempt === true) {
    return {
      disposition: "candidate",
      insufficiencyReasons: ["fabricated_pointer_rejected"],
      acceptedEvidenceIds: [],
      acceptedSourceIds: [],
      disclosure:
        "Contradiction fabrication refused — no Evidence pointer invented.",
      ...baseMeta,
    };
  }

  if (!input.conflictPresent) {
    return {
      disposition: "none",
      insufficiencyReasons: ["no_conflict_signal"],
      acceptedEvidenceIds: [],
      acceptedSourceIds: [],
      disclosure: null,
      ...baseMeta,
    };
  }

  const reasons: ContradictionInsufficiencyReason[] = [];
  const pointers = input.evidencePointers ?? [];

  const realPointers = pointers.filter((p) => p.fabricated !== true);
  const fabricated = pointers.filter((p) => p.fabricated === true);
  if (fabricated.length > 0) {
    reasons.push("fabricated_pointer_rejected");
  }

  if (realPointers.length === 0) {
    reasons.push("insufficient_evidence_pointers");
    return {
      disposition: "candidate",
      insufficiencyReasons: unique(reasons),
      acceptedEvidenceIds: [],
      acceptedSourceIds: [],
      disclosure:
        "Plausible conflict retained as contradiction candidate — insufficient Evidence pointers.",
      ...baseMeta,
    };
  }

  const attributable = realPointers.filter((p) => p.attributable === true);
  if (attributable.length === 0) {
    reasons.push("missing_attribution");
  }

  const freshnessMatters = input.freshnessMatters !== false;
  const freshEnough = attributable.filter((p) => {
    if (!freshnessMatters) return true;
    if (p.freshness === "stale") return false;
    if (p.freshness === "unknown") return false;
    return p.freshness === "fresh" || p.freshness === "aging";
  });
  if (freshnessMatters) {
    if (attributable.some((p) => p.freshness === "stale")) {
      reasons.push("stale_evidence");
    }
    if (attributable.some((p) => p.freshness === "unknown")) {
      reasons.push("unknown_freshness_when_required");
    }
  }

  const requiredDomains = (input.requiredDomains ?? []).map((d) => d.trim()).filter(Boolean);
  let domainOk = freshEnough;
  if (requiredDomains.length > 0) {
    domainOk = freshEnough.filter((p) => requiredDomains.includes(p.domain));
    if (domainOk.length === 0 && freshEnough.length > 0) {
      reasons.push("wrong_domain");
    }
  }

  const requiredSourceCount = Math.max(1, input.requiredSourceCount ?? 1);
  const sourceIds = unique(domainOk.map((p) => p.sourceId).filter(Boolean));
  if (sourceIds.length < requiredSourceCount) {
    reasons.push("insufficient_source_coverage");
    if (sourceIds.length > 0 && sourceIds.length < requiredSourceCount) {
      reasons.push("coverage_incomplete");
    }
  }

  // MW2-R02 — low sourceBreadth alone is not proof; never promote on breadth signal.
  if (input.sourceBreadth === "low" && requiredSourceCount > 1) {
    if (sourceIds.length < requiredSourceCount) {
      reasons.push("insufficient_source_coverage");
    }
  }

  const evidenceIds = unique(domainOk.map((p) => p.evidenceId).filter(Boolean));
  const blocking = unique(reasons).filter(
    (r) =>
      r === "insufficient_evidence_pointers" ||
      r === "insufficient_source_coverage" ||
      r === "coverage_incomplete" ||
      r === "stale_evidence" ||
      r === "wrong_domain" ||
      r === "missing_attribution" ||
      r === "unknown_freshness_when_required" ||
      r === "fabricated_pointer_rejected",
  );

  if (blocking.length > 0 || evidenceIds.length === 0) {
    return {
      disposition: "candidate",
      insufficiencyReasons: unique(reasons),
      acceptedEvidenceIds: [],
      acceptedSourceIds: [],
      disclosure:
        "Conflict retained as contradiction candidate — coverage, domain, freshness, or attribution insufficient for evidence-backed promotion.",
      ...baseMeta,
    };
  }

  return {
    disposition: "evidence_backed",
    insufficiencyReasons: [],
    acceptedEvidenceIds: evidenceIds,
    acceptedSourceIds: sourceIds,
    disclosure: null,
    ...baseMeta,
  };
}

/**
 * Strategy Class must not alter disposition for the same conflict/evidence facts.
 * Used by MW2-R01 / T13 regression.
 */
export function dispositionIndependentOfStrategy(
  base: ContradictionConflictInput,
  classes: CognitiveStrategyClass[],
): boolean {
  const first = disposeContradiction({ ...base, strategyClass: classes[0] });
  return classes.every((cls) => {
    const next = disposeContradiction({ ...base, strategyClass: cls });
    return (
      next.disposition === first.disposition &&
      next.acceptedEvidenceIds.join("|") === first.acceptedEvidenceIds.join("|")
    );
  });
}

