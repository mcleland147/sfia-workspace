/**
 * Public FinOps T0 API — pure domain contracts only.
 */

export type {
  FinOpsBlockingDecision,
  FinOpsBlockingReason,
  FinOpsCostEvidenceClass,
  FinOpsDetailCode,
  FinOpsPeriod,
  FinOpsSourceOfTruth,
} from "./domain/types";
export { FINOPS_SOT_RANK, FINOPS_SOURCES } from "./domain/types";

export type { FinOpsStructuredError } from "./domain/errors";
export { createFinOpsError, FinOpsDomainError } from "./domain/errors";

export type { InvariantViolation } from "./domain/invariants";
export {
  assertUnknownNotNumericZero,
  validateFinOpsPeriodShape,
  validateIsoTimestamp,
} from "./domain/invariants";

export {
  assignInstantToPeriod,
  compareFinOpsPeriods,
  computeUtcMonthPeriod,
  finOpsPeriodKey,
  periodContainsInstant,
} from "./domain/period";

export {
  compareSourceOfTruth,
  sourceMayBlock,
  sourceMayInform,
  sourceMayRequestHumanReview,
  sourceOfTruthRank,
} from "./domain/sourceOfTruth";

export {
  assertDistinctEvidenceClasses,
  classifyCostEvidenceFromSource,
  isUnknownEvidence,
} from "./domain/costEvidence";

export {
  ESTIMATION_NEVER_BLOCKS,
  evaluateBlockingEligibility,
} from "./domain/blockingEligibility";
