import type {
  AttemptDetailCode,
  AttemptModeledErrorCode,
  AttemptStructuredError,
  ProvenanceRecord,
} from "./types";

const DETAIL_TO_MODELED: Record<AttemptDetailCode, AttemptModeledErrorCode> = {
  ATTEMPT_INVALID: "STATE_CONFLICT",
  ATTEMPT_NOT_FOUND: "STATE_CONFLICT",
  ATTEMPT_ALREADY_EXISTS: "STATE_CONFLICT",
  ATTEMPT_STATE_CONFLICT: "STATE_CONFLICT",
  ATTEMPT_IDEMPOTENCY_CONFLICT: "STATE_CONFLICT",
  EXECUTION_CONTRACT_NOT_FOUND: "STATE_CONFLICT",
  EXECUTION_CONTRACT_NOT_CONFIRMED: "STATE_CONFLICT",
  EXECUTION_CONTRACT_STALE: "CONTEXT_STALE",
  EXECUTION_CONTRACT_SUPERSEDED: "CONTEXT_STALE",
  EXECUTION_CONTRACT_CANCELLED: "STATE_CONFLICT",
  EXECUTION_CONTRACT_UPDATE_FAILED: "STATE_CONFLICT",
  AGENT_NOT_FOUND: "CAPABILITY_MISSING",
  AGENT_DISABLED: "CAPABILITY_MISSING",
  AGENT_UNHEALTHY: "CAPABILITY_MISSING",
  AGENT_CAPABILITY_MISMATCH: "CAPABILITY_MISSING",
  AGENT_SCOPE_MISMATCH: "CAPABILITY_MISSING",
  AGENT_SELECTION_EXPIRED: "CONTEXT_STALE",
  AGENT_SELECTION_STRATEGY_REFUSED: "AUTHORITY_DENIED",
  AGENT_CONFIRMATION_REQUIRED: "CONFIRMATION_REQUIRED",
  AGENT_CONFIRMATION_INVALID: "CONFIRMATION_REQUIRED",
  AGENT_CONFIRMATION_EXPIRED: "CONFIRMATION_REQUIRED",
  AGENT_CONFIRMATION_ALREADY_CONSUMED: "STATE_CONFLICT",
  AGENT_CONFIRMATION_TTL_MISALIGNED: "CONFIRMATION_REQUIRED",
  AGENT_CONFIRMATION_CONSUME_FAILED: "STATE_CONFLICT",
  ADAPTER_NOT_ALLOWED: "AUTHORITY_DENIED",
  ADAPTER_ATTEMPT_MISMATCH: "AUTHORITY_DENIED",
  AUTHORITY_DENIED: "AUTHORITY_DENIED",
  AUTHORITY_SCOPE_MISMATCH: "AUTHORITY_DENIED",
  AUTHORIZATION_DENIED: "AUTHORITY_DENIED",
  CRITICAL_NOT_ACKNOWLEDGED: "STATE_CONFLICT",
  DECISION_NOT_CURRENT: "DECISION_REQUIRED",
  EXECUTION_ALREADY_ACTIVE: "STATE_CONFLICT",
  ACTIVE_INDEX_DRIFT: "STATE_CONFLICT",
  EXECUTION_PERSISTENCE_FAILED: "EXECUTION_FAILED",
  EXECUTION_LAUNCH_REJECTED: "EXECUTION_FAILED",
  EXECUTION_LAUNCH_FAILED: "EXECUTION_FAILED",
  EXECUTION_CANCEL_FAILED: "EXECUTION_FAILED",
  RESULT_RECORDING_FAILED: "EXECUTION_FAILED",
  RETRY_NOT_AUTHORIZED: "AUTHORITY_DENIED",
  RETRY_BUDGET_EXHAUSTED: "STATE_CONFLICT",
  RETRY_IRREVERSIBLE_REFUSED: "AUTHORITY_DENIED",
  TIMEOUT_NOT_REACHED: "STATE_CONFLICT",
  EXECUTION_TIMEOUT: "EXECUTION_TIMEOUT",
  STALE_CONTEXT_DETECTED: "CONTEXT_STALE",
  CONCURRENCY_CONFLICT: "STATE_CONFLICT",
  VERSION_CONFLICT: "STATE_CONFLICT",
};

/** Safe operator-facing messages — never echo payloads, secrets or evidence. */
const SAFE_MESSAGES: Record<AttemptDetailCode, string> = {
  ATTEMPT_INVALID: "Execution attempt input is invalid.",
  ATTEMPT_NOT_FOUND: "Execution attempt was not found.",
  ATTEMPT_ALREADY_EXISTS: "Execution attempt already exists.",
  ATTEMPT_STATE_CONFLICT: "Execution attempt state conflict.",
  ATTEMPT_IDEMPOTENCY_CONFLICT:
    "Execution attempt idempotency key conflicts with a different selection.",
  EXECUTION_CONTRACT_NOT_FOUND: "Execution contract was not found.",
  EXECUTION_CONTRACT_NOT_CONFIRMED:
    "Execution contract is not confirmed; selection and start are refused.",
  EXECUTION_CONTRACT_STALE:
    "Execution contract version changed since selection.",
  EXECUTION_CONTRACT_SUPERSEDED: "Execution contract has been superseded.",
  EXECUTION_CONTRACT_CANCELLED: "Execution contract has been cancelled.",
  EXECUTION_CONTRACT_UPDATE_FAILED:
    "Execution contract status update failed; attempt was compensated fail-closed.",
  AGENT_NOT_FOUND: "No registered agent matches the execution contract.",
  AGENT_DISABLED: "Agent is disabled in the registry.",
  AGENT_UNHEALTHY: "Agent health snapshot is not healthy.",
  AGENT_CAPABILITY_MISMATCH:
    "Agent capabilities do not cover the required capabilities.",
  AGENT_SCOPE_MISMATCH:
    "Agent action/target/scope envelope does not cover the contract.",
  AGENT_SELECTION_EXPIRED: "Agent selection TTL has expired.",
  AGENT_SELECTION_STRATEGY_REFUSED:
    "Selection strategy is refused for this profile or actor.",
  AGENT_CONFIRMATION_REQUIRED:
    "A granted agent_selection confirmation is required.",
  AGENT_CONFIRMATION_INVALID:
    "Agent selection confirmation binding is invalid for this contract or agent.",
  AGENT_CONFIRMATION_EXPIRED: "Agent selection confirmation has expired.",
  AGENT_CONFIRMATION_ALREADY_CONSUMED:
    "Agent selection confirmation was already consumed.",
  AGENT_CONFIRMATION_TTL_MISALIGNED:
    "Agent selection confirmation TTL does not cover the selection TTL.",
  AGENT_CONFIRMATION_CONSUME_FAILED:
    "Agent selection confirmation consumption failed after start.",
  ADAPTER_NOT_ALLOWED:
    "Only TestExecutionAdapter and NoOpExecutionAdapter are injectable.",
  ADAPTER_ATTEMPT_MISMATCH:
    "Adapter identity is not bound to this execution attempt.",
  AUTHORITY_DENIED: "Authority verification denied the requested action.",
  AUTHORITY_SCOPE_MISMATCH: "Authority evidence scope does not match.",
  AUTHORIZATION_DENIED:
    "Execution authorization denied (deny-by-default mismatch or gate).",
  CRITICAL_NOT_ACKNOWLEDGED:
    "Critical cycle is not acknowledged; start is fail-closed (R-T-A3-1).",
  DECISION_NOT_CURRENT: "Referenced decision is no longer current.",
  EXECUTION_ALREADY_ACTIVE:
    "Another non-terminal attempt is already active for this contract.",
  ACTIVE_INDEX_DRIFT:
    "Active attempt index drift detected; operation refused fail-closed.",
  EXECUTION_PERSISTENCE_FAILED: "Execution attempt persistence failed.",
  EXECUTION_LAUNCH_REJECTED: "Adapter rejected the launch request.",
  EXECUTION_LAUNCH_FAILED: "Adapter launch failed.",
  EXECUTION_CANCEL_FAILED: "Adapter cancel failed; cancellation is best-effort.",
  RESULT_RECORDING_FAILED: "Execution result recording failed.",
  RETRY_NOT_AUTHORIZED: "Retry is not authorized for this attempt.",
  RETRY_BUDGET_EXHAUSTED: "Retry budget is exhausted.",
  RETRY_IRREVERSIBLE_REFUSED:
    "Retry of an irreversible contract requires an explicit policy reference.",
  TIMEOUT_NOT_REACHED: "Timeout deadline has not been reached.",
  EXECUTION_TIMEOUT: "Execution attempt timed out.",
  STALE_CONTEXT_DETECTED:
    "Stale contract or decision detected; operation refused (no auto-cancel).",
  CONCURRENCY_CONFLICT: "Concurrent execution attempt conflict.",
  VERSION_CONFLICT: "Execution attempt version conflict.",
};

const NON_RECOVERABLE: ReadonlySet<AttemptDetailCode> = new Set<
  AttemptDetailCode
>([
  "ATTEMPT_INVALID",
  "AUTHORITY_DENIED",
  "AUTHORITY_SCOPE_MISMATCH",
  "AUTHORIZATION_DENIED",
  "ADAPTER_NOT_ALLOWED",
  "ADAPTER_ATTEMPT_MISMATCH",
  "RETRY_NOT_AUTHORIZED",
  "RETRY_IRREVERSIBLE_REFUSED",
]);

const RETRYABLE: ReadonlySet<AttemptDetailCode> = new Set<AttemptDetailCode>([
  "VERSION_CONFLICT",
  "CONCURRENCY_CONFLICT",
  "EXECUTION_PERSISTENCE_FAILED",
  "RESULT_RECORDING_FAILED",
  "EXECUTION_CONTRACT_UPDATE_FAILED",
  "TIMEOUT_NOT_REACHED",
]);

const NON_CRITICAL_SEVERITY: ReadonlySet<AttemptDetailCode> = new Set<
  AttemptDetailCode
>([
  "AUTHORITY_DENIED",
  "AUTHORITY_SCOPE_MISMATCH",
  "AUTHORIZATION_DENIED",
  "ADAPTER_NOT_ALLOWED",
  "ADAPTER_ATTEMPT_MISMATCH",
  "TIMEOUT_NOT_REACHED",
  "EXECUTION_PERSISTENCE_FAILED",
]);

export function mapAttemptDetailToModeledCode(
  detail: AttemptDetailCode,
): AttemptModeledErrorCode {
  return DETAIL_TO_MODELED[detail];
}

export function createAttemptError(input: {
  detailCode: AttemptDetailCode;
  timestamp: string;
  correlationId?: string;
  attemptId?: string;
  executionContractId?: string;
  executionContractVersion?: number;
  selectedAgentRef?: string;
  confirmationId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  provenance?: ProvenanceRecord;
  internalCauseRef?: string;
  retryable?: boolean;
}): AttemptStructuredError {
  const detailCode = input.detailCode;
  return {
    code: mapAttemptDetailToModeledCode(detailCode),
    detailCode,
    message: SAFE_MESSAGES[detailCode],
    severity: NON_CRITICAL_SEVERITY.has(detailCode) ? "error" : "critical",
    retryable: input.retryable ?? RETRYABLE.has(detailCode),
    blocking: true,
    recoverable: !NON_RECOVERABLE.has(detailCode),
    domain: "F",
    correlationId: input.correlationId,
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    executionContractVersion: input.executionContractVersion,
    selectedAgentRef: input.selectedAgentRef,
    confirmationId: input.confirmationId,
    expectedVersion: input.expectedVersion,
    currentVersion: input.currentVersion,
    provenance: input.provenance,
    timestamp: input.timestamp,
    internalCauseRef: input.internalCauseRef,
  };
}

/** Thrown by the repository so use-cases can map detail codes fail-closed. */
export class ExecutionAttemptDomainError extends Error {
  readonly detailCode: AttemptDetailCode;
  readonly expectedVersion?: number;
  readonly currentVersion?: number;

  constructor(
    detailCode: AttemptDetailCode,
    internalCauseRef: string,
    versions?: { expectedVersion?: number; currentVersion?: number },
  ) {
    super(internalCauseRef);
    this.name = "ExecutionAttemptDomainError";
    this.detailCode = detailCode;
    this.expectedVersion = versions?.expectedVersion;
    this.currentVersion = versions?.currentVersion;
  }
}

export function isExecutionAttemptDomainError(
  value: unknown,
): value is ExecutionAttemptDomainError {
  return value instanceof ExecutionAttemptDomainError;
}
