import type {
  ExecutionDetailCode,
  ExecutionModeledErrorCode,
  ExecutionStructuredError,
  ProvenanceRecord,
} from "./types";

const DETAIL_TO_MODELED: Record<
  ExecutionDetailCode,
  ExecutionModeledErrorCode
> = {
  CONTRACT_INVALID: "STATE_CONFLICT",
  CONTRACT_ALREADY_EXISTS: "STATE_CONFLICT",
  CONTRACT_NOT_FOUND: "STATE_CONFLICT",
  CONTRACT_IDEMPOTENCY_CONFLICT: "STATE_CONFLICT",
  CONFIRMATION_REQUIRED: "CONFIRMATION_REQUIRED",
  CONFIRMATION_NOT_FOUND: "CONFIRMATION_REQUIRED",
  CONFIRMATION_INVALID: "CONFIRMATION_REQUIRED",
  CONFIRMATION_EXPIRED: "CONFIRMATION_REQUIRED",
  CONFIRMATION_ALREADY_CONSUMED: "STATE_CONFLICT",
  CONFIRMATION_CONSUME_FAILED: "STATE_CONFLICT",
  DECISION_REQUIRED: "DECISION_REQUIRED",
  DECISION_NOT_FOUND: "DECISION_REQUIRED",
  DECISION_NOT_CURRENT: "CONTEXT_STALE",
  AUTHORITY_DENIED: "AUTHORITY_DENIED",
  AUTHORITY_SCOPE_MISMATCH: "AUTHORITY_DENIED",
  CRITICAL_NOT_ACKNOWLEDGED: "STATE_CONFLICT",
  TA5_STATUS_REFUSED: "STATE_CONFLICT",
  SELF_SUPERSESSION: "STATE_CONFLICT",
  SUPERSESSION_REASON_INVALID: "STATE_CONFLICT",
  AUTHORIZATION_DENIED: "AUTHORITY_DENIED",
  PROJECT_NOT_FOUND: "STATE_CONFLICT",
  CYCLE_NOT_FOUND: "STATE_CONFLICT",
  CYCLE_PROJECT_MISMATCH: "STATE_CONFLICT",
  STATE_CONFLICT: "STATE_CONFLICT",
  VERSION_CONFLICT: "STATE_CONFLICT",
  PERSISTENCE_FAILURE: "STATE_CONFLICT",
};

const SAFE_MESSAGES: Record<ExecutionDetailCode, string> = {
  CONTRACT_INVALID: "Execution contract input is invalid.",
  CONTRACT_ALREADY_EXISTS: "Execution contract already exists.",
  CONTRACT_NOT_FOUND: "Execution contract was not found.",
  CONTRACT_IDEMPOTENCY_CONFLICT:
    "Execution contract idempotency key conflicts with a different payload.",
  CONFIRMATION_REQUIRED: "A confirmation is required.",
  CONFIRMATION_NOT_FOUND: "Confirmation was not found.",
  CONFIRMATION_INVALID: "Confirmation is invalid for this contract.",
  CONFIRMATION_EXPIRED: "Confirmation has expired and is not consumable.",
  CONFIRMATION_ALREADY_CONSUMED: "Confirmation was already consumed.",
  CONFIRMATION_CONSUME_FAILED: "Confirmation consumption failed.",
  DECISION_REQUIRED: "An accepted current decision is required.",
  DECISION_NOT_FOUND: "Referenced decision was not found.",
  DECISION_NOT_CURRENT: "Referenced decision is no longer current.",
  AUTHORITY_DENIED: "Authority verification denied the requested action.",
  AUTHORITY_SCOPE_MISMATCH: "Authority evidence scope does not match.",
  CRITICAL_NOT_ACKNOWLEDGED:
    "Critical cycle is not acknowledged; confirm is fail-closed (R-T-A3-1).",
  TA5_STATUS_REFUSED:
    "T-A5 status or selectedAgentRef is refused in T-A4 governance.",
  SELF_SUPERSESSION: "An execution contract cannot supersede itself.",
  SUPERSESSION_REASON_INVALID:
    "Supersession reason must contain a visible letter or number (ZWSP-only rejected).",
  AUTHORIZATION_DENIED:
    "Execution authorization denied (deny-by-default mismatch or gate).",
  PROJECT_NOT_FOUND: "Project was not found.",
  CYCLE_NOT_FOUND: "Cycle instance was not found.",
  CYCLE_PROJECT_MISMATCH: "Cycle does not belong to the contract project.",
  STATE_CONFLICT: "Execution contract domain state conflict.",
  VERSION_CONFLICT: "Execution contract version conflict.",
  PERSISTENCE_FAILURE: "Execution contract domain persistence failed.",
};

export function mapDetailToModeledCode(
  detail: ExecutionDetailCode,
): ExecutionModeledErrorCode {
  return DETAIL_TO_MODELED[detail];
}

export function createExecutionError(input: {
  detailCode: ExecutionDetailCode;
  timestamp: string;
  correlationId?: string;
  projectId?: string;
  executionContractId?: string;
  confirmationId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  provenance?: ProvenanceRecord;
  internalCauseRef?: string;
  retryable?: boolean;
}): ExecutionStructuredError {
  const detailCode = input.detailCode;
  const severity =
    detailCode === "PERSISTENCE_FAILURE" ||
    detailCode === "AUTHORITY_DENIED" ||
    detailCode === "AUTHORITY_SCOPE_MISMATCH" ||
    detailCode === "AUTHORIZATION_DENIED"
      ? "error"
      : "critical";
  const retryable =
    input.retryable ??
    (detailCode === "VERSION_CONFLICT" ||
      detailCode === "PERSISTENCE_FAILURE");

  return {
    code: mapDetailToModeledCode(detailCode),
    detailCode,
    message: SAFE_MESSAGES[detailCode],
    severity,
    retryable,
    blocking: true,
    recoverable:
      detailCode !== "CONTRACT_INVALID" &&
      detailCode !== "AUTHORITY_DENIED" &&
      detailCode !== "AUTHORITY_SCOPE_MISMATCH" &&
      detailCode !== "AUTHORIZATION_DENIED" &&
      detailCode !== "TA5_STATUS_REFUSED" &&
      detailCode !== "SELF_SUPERSESSION",
    domain: "F",
    correlationId: input.correlationId,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    confirmationId: input.confirmationId,
    expectedVersion: input.expectedVersion,
    currentVersion: input.currentVersion,
    provenance: input.provenance,
    timestamp: input.timestamp,
    internalCauseRef: input.internalCauseRef,
  };
}

export class ExecutionDomainError extends Error {
  readonly structured: ExecutionStructuredError;

  constructor(structured: ExecutionStructuredError) {
    super(structured.message);
    this.name = "ExecutionDomainError";
    this.structured = structured;
  }
}
