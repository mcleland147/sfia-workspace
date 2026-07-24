import type {
  DecisionDetailCode,
  DecisionModeledErrorCode,
  DecisionStructuredError,
  ProvenanceRecord,
} from "./types";

const DETAIL_TO_MODELED: Record<DecisionDetailCode, DecisionModeledErrorCode> = {
  DECISION_INVALID: "STATE_CONFLICT",
  DECISION_ALREADY_EXISTS: "STATE_CONFLICT",
  DECISION_NOT_FOUND: "STATE_CONFLICT",
  DECISION_REQUIRED: "DECISION_REQUIRED",
  CONFIRMATION_INVALID: "CONFIRMATION_REQUIRED",
  CONFIRMATION_ALREADY_EXISTS: "STATE_CONFLICT",
  CONFIRMATION_NOT_FOUND: "CONFIRMATION_REQUIRED",
  CONFIRMATION_REQUIRED: "CONFIRMATION_REQUIRED",
  CONFIRMATION_EXPIRED: "CONFIRMATION_REQUIRED",
  CONFIRMATION_ALREADY_CONSUMED: "STATE_CONFLICT",
  CONFIRMATION_IDEMPOTENCY_CONFLICT: "STATE_CONFLICT",
  AUTHORITY_DENIED: "AUTHORITY_DENIED",
  AUTHORITY_SCOPE_MISMATCH: "AUTHORITY_DENIED",
  PROJECT_NOT_FOUND: "STATE_CONFLICT",
  CYCLE_NOT_FOUND: "STATE_CONFLICT",
  CYCLE_PROJECT_MISMATCH: "STATE_CONFLICT",
  STATE_CONFLICT: "STATE_CONFLICT",
  VERSION_CONFLICT: "STATE_CONFLICT",
  LPS_VERSION_CONFLICT: "STATE_CONFLICT",
  PERSISTENCE_FAILURE: "STATE_CONFLICT",
};

const SAFE_MESSAGES: Record<DecisionDetailCode, string> = {
  DECISION_INVALID: "Decision input is invalid.",
  DECISION_ALREADY_EXISTS: "Decision already exists.",
  DECISION_NOT_FOUND: "Decision was not found.",
  DECISION_REQUIRED: "An explicit human decision is required.",
  CONFIRMATION_INVALID: "Confirmation input is invalid.",
  CONFIRMATION_ALREADY_EXISTS: "Confirmation already exists.",
  CONFIRMATION_NOT_FOUND: "Confirmation was not found.",
  CONFIRMATION_REQUIRED: "A confirmation is required.",
  CONFIRMATION_EXPIRED: "Confirmation has expired and is not consumable.",
  CONFIRMATION_ALREADY_CONSUMED: "Confirmation was already consumed.",
  CONFIRMATION_IDEMPOTENCY_CONFLICT:
    "Confirmation idempotency key conflicts with a different payload.",
  AUTHORITY_DENIED: "Authority verification denied the requested action.",
  AUTHORITY_SCOPE_MISMATCH: "Authority evidence scope does not match.",
  PROJECT_NOT_FOUND: "Project was not found.",
  CYCLE_NOT_FOUND: "Cycle instance was not found.",
  CYCLE_PROJECT_MISMATCH: "Cycle does not belong to the decision project.",
  STATE_CONFLICT: "Decision domain state conflict.",
  VERSION_CONFLICT: "Decision version conflict.",
  LPS_VERSION_CONFLICT: "Living project state version conflict.",
  PERSISTENCE_FAILURE: "Decision domain persistence failed.",
};

export function mapDetailToModeledCode(
  detail: DecisionDetailCode,
): DecisionModeledErrorCode {
  return DETAIL_TO_MODELED[detail];
}

export function createDecisionError(input: {
  detailCode: DecisionDetailCode;
  timestamp: string;
  correlationId?: string;
  projectId?: string;
  decisionId?: string;
  confirmationId?: string;
  subject?: string;
  expectedVersion?: number;
  currentVersion?: number;
  provenance?: ProvenanceRecord;
  internalCauseRef?: string;
  retryable?: boolean;
}): DecisionStructuredError {
  const detailCode = input.detailCode;
  const severity =
    detailCode === "PERSISTENCE_FAILURE" ||
    detailCode === "AUTHORITY_DENIED" ||
    detailCode === "AUTHORITY_SCOPE_MISMATCH"
      ? "error"
      : "critical";
  const retryable =
    input.retryable ??
    (detailCode === "VERSION_CONFLICT" ||
      detailCode === "LPS_VERSION_CONFLICT" ||
      detailCode === "PERSISTENCE_FAILURE");

  return {
    code: mapDetailToModeledCode(detailCode),
    detailCode,
    message: SAFE_MESSAGES[detailCode],
    severity,
    retryable,
    blocking: true,
    recoverable:
      detailCode !== "DECISION_INVALID" &&
      detailCode !== "CONFIRMATION_INVALID" &&
      detailCode !== "AUTHORITY_DENIED" &&
      detailCode !== "AUTHORITY_SCOPE_MISMATCH",
    domain: "E",
    correlationId: input.correlationId,
    projectId: input.projectId,
    decisionId: input.decisionId,
    confirmationId: input.confirmationId,
    subject: input.subject,
    expectedVersion: input.expectedVersion,
    currentVersion: input.currentVersion,
    provenance: input.provenance,
    timestamp: input.timestamp,
    internalCauseRef: input.internalCauseRef,
  };
}

export class DecisionDomainError extends Error {
  readonly structured: DecisionStructuredError;

  constructor(structured: DecisionStructuredError) {
    super(structured.message);
    this.name = "DecisionDomainError";
    this.structured = structured;
  }
}
