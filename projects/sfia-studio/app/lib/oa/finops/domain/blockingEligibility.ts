/**
 * FinOps T0 — blocking eligibility from Source of Truth (never from amount).
 */

import { classifyCostEvidenceFromSource } from "./costEvidence";
import type {
  FinOpsBlockingDecision,
  FinOpsSourceOfTruth,
} from "./types";

/**
 * Estimation never blocks — invariant exported for explicit assertion.
 * Blocking eligibility is decided by SoT, not by evidence class alone.
 */
export const ESTIMATION_NEVER_BLOCKS = true as const;

export function evaluateBlockingEligibility(
  source: FinOpsSourceOfTruth,
): FinOpsBlockingDecision {
  const confidenceClass = classifyCostEvidenceFromSource(source);
  switch (source) {
    case "BILLED":
      return {
        eligible: true,
        reason: "SOURCE_MAY_BLOCK",
        source,
        confidenceClass,
      };
    case "PROVIDER_OBSERVED":
      return {
        eligible: true,
        reason: "SOURCE_MAY_BLOCK",
        source,
        confidenceClass,
      };
    case "API_USAGE":
      return {
        eligible: false,
        reason: "API_USAGE_NEVER_BLOCKS",
        source,
        confidenceClass,
      };
    case "LOCAL_COUNT":
      return {
        eligible: false,
        reason: "LOCAL_COUNT_NEVER_BLOCKS",
        source,
        confidenceClass,
      };
    case "PARAMETRIC_ESTIMATE":
      return {
        eligible: false,
        reason: "ESTIMATE_NEVER_BLOCKS",
        source,
        confidenceClass,
      };
    case "UNKNOWN":
      return {
        eligible: false,
        reason: "UNKNOWN_NEVER_BLOCKS",
        source,
        confidenceClass,
      };
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}
