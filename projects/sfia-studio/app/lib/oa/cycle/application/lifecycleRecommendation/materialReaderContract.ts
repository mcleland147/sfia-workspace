/**
 * Intent-scoped material reader contract for Lifecycle Recommendation.
 * UNKNOWN (reader failed) ≠ KNOWN EMPTY (reader succeeded with zero rows).
 */
import type { LifecycleRecommendationIntent } from "./types";

export type LifecycleRecommendationMaterialDimension =
  | "cycles"
  | "lps"
  | "doctrine"
  | "trajectory"
  | "decisions"
  | "evidence"
  | "epistemic_blockers";

export type MaterialReaderOk<T> = { ok: true; value: T };
export type MaterialReaderFail = {
  ok: false;
  code: string;
  reason: string;
  dimension: LifecycleRecommendationMaterialDimension;
};
export type MaterialReaderResult<T> = MaterialReaderOk<T> | MaterialReaderFail;

/**
 * intent → material dimensions → required readers.
 * Evidence is FINALIZE-only. Eligibility assessors are not material readers.
 */
export function requiredMaterialDimensionsForIntent(
  intent: LifecycleRecommendationIntent,
): readonly LifecycleRecommendationMaterialDimension[] {
  if (intent === "FINALIZE_CURRENT_CYCLE") {
    return [
      "cycles",
      "lps",
      "doctrine",
      "trajectory",
      "decisions",
      "evidence",
      "epistemic_blockers",
    ] as const;
  }
  return [
    "cycles",
    "lps",
    "doctrine",
    "trajectory",
    "decisions",
    "epistemic_blockers",
  ] as const;
}

export function materialBasisUnavailableCode(
  dimension: LifecycleRecommendationMaterialDimension,
): string {
  switch (dimension) {
    case "trajectory":
      return "LR_BASIS_TRAJECTORY_UNAVAILABLE";
    case "decisions":
      return "LR_BASIS_DECISIONS_UNAVAILABLE";
    case "evidence":
      return "LR_BASIS_EVIDENCE_UNAVAILABLE";
    case "epistemic_blockers":
      return "LR_BASIS_EPISTEMIC_UNAVAILABLE";
    case "cycles":
      return "LR_BASIS_CYCLES_UNAVAILABLE";
    case "lps":
      return "LR_BASIS_LPS_UNAVAILABLE";
    case "doctrine":
      return "LR_BASIS_DOCTRINE_UNAVAILABLE";
    default:
      return "LR_BASIS_UNAVAILABLE";
  }
}

export function firstFailedRequiredMaterialDimension(
  intent: LifecycleRecommendationIntent,
  failed: ReadonlySet<LifecycleRecommendationMaterialDimension>,
): LifecycleRecommendationMaterialDimension | null {
  for (const d of requiredMaterialDimensionsForIntent(intent)) {
    if (failed.has(d)) return d;
  }
  return null;
}
