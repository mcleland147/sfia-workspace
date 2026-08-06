/**
 * FinOps T0 — cost evidence classification (no monetary values).
 */

import { createFinOpsError, FinOpsDomainError } from "./errors";
import type { FinOpsCostEvidenceClass, FinOpsSourceOfTruth } from "./types";

export function classifyCostEvidenceFromSource(
  source: FinOpsSourceOfTruth,
): FinOpsCostEvidenceClass {
  switch (source) {
    case "BILLED":
      return "billed";
    case "PROVIDER_OBSERVED":
    case "API_USAGE":
      return "observed";
    case "LOCAL_COUNT":
    case "PARAMETRIC_ESTIMATE":
      return "estimated";
    case "UNKNOWN":
      return "unknown";
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}

/** Runtime guard that evidence class literals remain distinct. */
export function assertDistinctEvidenceClasses(): true {
  const classes = ["estimated", "observed", "billed", "unknown"] as const;
  if (new Set<string>(classes).size !== classes.length) {
    throw new FinOpsDomainError(
      createFinOpsError({
        detailCode: "FINOPS_EVIDENCE_COLLAPSE",
        reason: "evidence_classes_must_remain_distinct",
      }),
    );
  }
  return true;
}

export function isUnknownEvidence(
  evidenceClass: FinOpsCostEvidenceClass,
): boolean {
  return evidenceClass === "unknown";
}
