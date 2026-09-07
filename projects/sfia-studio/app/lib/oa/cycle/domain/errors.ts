import type {
  CycleDetailCode,
  CycleModeledErrorCode,
  CycleStructuredError,
  ProvenanceRecord,
} from "./types";

const DETAIL_TO_MODELED: Record<CycleDetailCode, CycleModeledErrorCode> = {
  CYCLE_INVALID: "STATE_CONFLICT",
  CYCLE_ALREADY_EXISTS: "STATE_CONFLICT",
  CYCLE_NOT_FOUND: "STATE_CONFLICT",
  CYCLE_CRITICAL_JUSTIFICATION_REQUIRED: "DECISION_REQUIRED",
  CYCLE_ALREADY_ACTIVE_EXISTS: "STATE_CONFLICT",
  CYCLE_TRANSITION_INVALID: "STATE_CONFLICT",
  CYCLE_TERMINAL: "STATE_CONFLICT",
  CYCLE_RESUME_DRIFT: "CONTEXT_STALE",
  CYCLE_START_NOT_READY: "STATE_CONFLICT",
  CYCLE_FINALIZE_INCOMPLETE: "STATE_CONFLICT",
  CYCLE_DECISION_REQUIRED: "DECISION_REQUIRED",
  CYCLE_LIFECYCLE_DENIED: "AUTHORITY_DENIED",
  AUTHORITY_NOT_CONFIGURED: "AUTHORITY_DENIED",
  PROJECT_NOT_FOUND: "STATE_CONFLICT",
  TRAJECTORY_INVALID: "STATE_CONFLICT",
  TRAJECTORY_ALREADY_EXISTS: "STATE_CONFLICT",
  TRAJECTORY_NOT_FOUND: "STATE_CONFLICT",
  TRAJECTORY_VERSION_CONFLICT: "STATE_CONFLICT",
  EPISTEMIC_INVALID: "STATE_CONFLICT",
  EPISTEMIC_PROMOTION_FORBIDDEN: "AUTHORITY_DENIED",
  CKC_UNAVAILABLE: "CKC_UNAVAILABLE",
  LPS_VERSION_CONFLICT: "STATE_CONFLICT",
  CONTEXT_STALE: "CONTEXT_STALE",
  STATE_CONFLICT: "STATE_CONFLICT",
  PERSISTENCE_FAILURE: "STATE_CONFLICT",
};

const SAFE_MESSAGES: Record<CycleDetailCode, string> = {
  CYCLE_INVALID: "Cycle input is invalid.",
  CYCLE_ALREADY_EXISTS: "Cycle instance already exists.",
  CYCLE_NOT_FOUND: "Cycle instance was not found.",
  CYCLE_CRITICAL_JUSTIFICATION_REQUIRED:
    "Critical profile requires a non-empty justification.",
  CYCLE_ALREADY_ACTIVE_EXISTS:
    "Another ACTIVE CycleInstance already exists for this Project.",
  CYCLE_TRANSITION_INVALID: "Cycle lifecycle transition is not allowed.",
  CYCLE_TERMINAL: "Terminal CycleInstance cannot be transitioned.",
  CYCLE_RESUME_DRIFT:
    "Material context drift prevents silent RESUME; replan required.",
  CYCLE_START_NOT_READY:
    "START refused — candidate is not ready to become ACTIVE authority.",
  CYCLE_FINALIZE_INCOMPLETE:
    "FINALIZE accepted but applicable exit obligations are not satisfied.",
  CYCLE_DECISION_REQUIRED:
    "Pilot HumanDecision is required for this lifecycle action.",
  CYCLE_LIFECYCLE_DENIED: "Pilot lifecycle action was denied.",
  AUTHORITY_NOT_CONFIGURED:
    "Pilot local authority is not configured (fail-closed).",
  PROJECT_NOT_FOUND: "Project was not found.",
  TRAJECTORY_INVALID: "Trajectory input is invalid.",
  TRAJECTORY_ALREADY_EXISTS: "Trajectory already exists.",
  TRAJECTORY_NOT_FOUND: "Trajectory was not found.",
  TRAJECTORY_VERSION_CONFLICT: "Trajectory version conflict.",
  EPISTEMIC_INVALID: "Epistemic item input is invalid.",
  EPISTEMIC_PROMOTION_FORBIDDEN:
    "Automatic Hypothesis to DecisionRef promotion is forbidden.",
  CKC_UNAVAILABLE: "Cycle knowledge contract is unavailable.",
  LPS_VERSION_CONFLICT: "Living project state version conflict.",
  CONTEXT_STALE: "Project context is stale.",
  STATE_CONFLICT: "Cycle domain state conflict.",
  PERSISTENCE_FAILURE: "Cycle domain persistence failed.",
};

export function mapDetailToModeledCode(
  detail: CycleDetailCode,
): CycleModeledErrorCode {
  return DETAIL_TO_MODELED[detail];
}

export function createCycleError(input: {
  detailCode: CycleDetailCode;
  timestamp: string;
  correlationId?: string;
  projectId?: string;
  cycleInstanceId?: string;
  trajectoryId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  epistemicItemId?: string;
  cycleTypeId?: string;
  provenance?: ProvenanceRecord;
  internalCauseRef?: string;
  retryable?: boolean;
}): CycleStructuredError {
  const detailCode = input.detailCode;
  const severity =
    detailCode === "PERSISTENCE_FAILURE" ||
    detailCode === "CKC_UNAVAILABLE"
      ? "error"
      : "critical";
  const retryable =
    input.retryable ??
    (detailCode === "TRAJECTORY_VERSION_CONFLICT" ||
      detailCode === "LPS_VERSION_CONFLICT" ||
      detailCode === "PERSISTENCE_FAILURE" ||
      detailCode === "CONTEXT_STALE");

  return {
    code: mapDetailToModeledCode(detailCode),
    detailCode,
    message: SAFE_MESSAGES[detailCode],
    severity,
    retryable,
    blocking: true,
    recoverable:
      detailCode !== "CYCLE_INVALID" &&
      detailCode !== "TRAJECTORY_INVALID" &&
      detailCode !== "EPISTEMIC_INVALID" &&
      detailCode !== "EPISTEMIC_PROMOTION_FORBIDDEN",
    domain: "D",
    correlationId: input.correlationId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    trajectoryId: input.trajectoryId,
    expectedVersion: input.expectedVersion,
    currentVersion: input.currentVersion,
    epistemicItemId: input.epistemicItemId,
    cycleTypeId: input.cycleTypeId,
    provenance: input.provenance,
    timestamp: input.timestamp,
    internalCauseRef: input.internalCauseRef,
  };
}

export class CycleDomainError extends Error {
  readonly structured: CycleStructuredError;

  constructor(structured: CycleStructuredError) {
    super(structured.message);
    this.name = "CycleDomainError";
    this.structured = structured;
  }
}
