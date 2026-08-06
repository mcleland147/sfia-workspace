/**
 * FinOps T0 — pure domain contracts (provider- and persistence-independent).
 */

export type FinOpsPeriod = {
  readonly periodStart: string;
  readonly periodEnd: string;
  readonly timezone: "UTC";
};

export type FinOpsSourceOfTruth =
  | "BILLED"
  | "PROVIDER_OBSERVED"
  | "API_USAGE"
  | "LOCAL_COUNT"
  | "PARAMETRIC_ESTIMATE"
  | "UNKNOWN";

export type FinOpsCostEvidenceClass =
  | "estimated"
  | "observed"
  | "billed"
  | "unknown";

export type FinOpsBlockingReason =
  | "SOURCE_MAY_BLOCK"
  | "API_USAGE_NEVER_BLOCKS"
  | "LOCAL_COUNT_NEVER_BLOCKS"
  | "ESTIMATE_NEVER_BLOCKS"
  | "UNKNOWN_NEVER_BLOCKS";

export type FinOpsBlockingDecision = {
  readonly eligible: boolean;
  readonly reason: FinOpsBlockingReason;
  readonly source: FinOpsSourceOfTruth;
  readonly confidenceClass: FinOpsCostEvidenceClass;
};

export type FinOpsDetailCode =
  | "FINOPS_INVALID_TIMESTAMP"
  | "FINOPS_INVALID_PERIOD"
  | "FINOPS_INVALID_TIMEZONE"
  | "FINOPS_UNKNOWN_AS_ZERO"
  | "FINOPS_EVIDENCE_COLLAPSE";

/** Lower rank = more authoritative (SoT hierarchy 1–6). */
export const FINOPS_SOT_RANK = {
  BILLED: 1,
  PROVIDER_OBSERVED: 2,
  API_USAGE: 3,
  LOCAL_COUNT: 4,
  PARAMETRIC_ESTIMATE: 5,
  UNKNOWN: 6,
} as const satisfies Record<FinOpsSourceOfTruth, 1 | 2 | 3 | 4 | 5 | 6>;

export const FINOPS_SOURCES = [
  "BILLED",
  "PROVIDER_OBSERVED",
  "API_USAGE",
  "LOCAL_COUNT",
  "PARAMETRIC_ESTIMATE",
  "UNKNOWN",
] as const satisfies ReadonlyArray<FinOpsSourceOfTruth>;
