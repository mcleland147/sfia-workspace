/**
 * FinOps T0 — Source of Truth ranking and eligibility helpers.
 */

import { FINOPS_SOT_RANK, type FinOpsSourceOfTruth } from "./types";

export function sourceOfTruthRank(source: FinOpsSourceOfTruth): number {
  return FINOPS_SOT_RANK[source];
}

/** Negative if a is more authoritative than b (lower rank). */
export function compareSourceOfTruth(
  a: FinOpsSourceOfTruth,
  b: FinOpsSourceOfTruth,
): number {
  return sourceOfTruthRank(a) - sourceOfTruthRank(b);
}

export function sourceMayBlock(source: FinOpsSourceOfTruth): boolean {
  switch (source) {
    case "BILLED":
    case "PROVIDER_OBSERVED":
      return true;
    case "API_USAGE":
    case "LOCAL_COUNT":
    case "PARAMETRIC_ESTIMATE":
    case "UNKNOWN":
      return false;
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}

/** All SoT levels remain observable / informational. */
export function sourceMayInform(source: FinOpsSourceOfTruth): boolean {
  switch (source) {
    case "BILLED":
    case "PROVIDER_OBSERVED":
    case "API_USAGE":
    case "LOCAL_COUNT":
    case "PARAMETRIC_ESTIMATE":
    case "UNKNOWN":
      return true;
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}

/**
 * All sources may feed a future human-review path.
 * T0 never triggers review.
 */
export function sourceMayRequestHumanReview(
  source: FinOpsSourceOfTruth,
): boolean {
  switch (source) {
    case "BILLED":
    case "PROVIDER_OBSERVED":
    case "API_USAGE":
    case "LOCAL_COUNT":
    case "PARAMETRIC_ESTIMATE":
    case "UNKNOWN":
      return true;
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}
