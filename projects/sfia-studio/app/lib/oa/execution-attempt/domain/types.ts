/**
 * T-A5 ExecutionAttempt Runtime Foundation — domain types (Option A v3-native).
 *
 * Modeled references:
 * - execution-attempt.schema.json schemaVersion 0.2.0-oa
 * - agent-descriptor.schema.json schemaVersion 0.1.0-oa
 *
 * Ownership:
 * - T-A4 owns ExecutionContract draft…confirmed (+ cancelled pre-exec, superseded)
 * - T-A5 owns ExecutionAttempt and the contract post-start statuses
 *   (executing|completed|failed) written through the shared contract repository.
 *
 * Memory-only foundation. No real execution capability: the only injectable
 * adapters are TestExecutionAdapter and NoOpExecutionAdapter.
 */

import type { ActorReference, ProvenanceRecord } from "@/lib/oa/doctrine";
import type { AuthorityClass } from "@/lib/oa/execution-contract";

export type { ActorReference, ProvenanceRecord, AuthorityClass };

export const EXECUTION_ATTEMPT_SCHEMA_VERSION = "0.2.0-oa" as const;
export const AGENT_DESCRIPTOR_SCHEMA_VERSION = "0.1.0-oa" as const;

/** Closed Attempt lifecycle (modeled 0.2.0-oa). */
export type ExecutionAttemptStatus =
  | "accepted"
  | "running"
  | "result_pending"
  | "succeeded"
  | "failed"
  | "timeout"
  | "cancelled";

/** Non-terminal statuses hold the activeByContractId invariant. */
export type ActiveExecutionAttemptStatus =
  | "accepted"
  | "running"
  | "result_pending";

export type TerminalExecutionAttemptStatus =
  | "succeeded"
  | "failed"
  | "timeout"
  | "cancelled";

/** Closed selection strategies (Morris D02). */
export type SelectionStrategy =
  | "capabilities_deterministic"
  | "human_confirmed_proposal";

export type SelectionProfile =
  | "critical"
  | "standard"
  | "light"
  | "capitalization";

/** Modeled AgentDescriptor 0.1.0-oa — docs-first capability envelope. */
export type AgentTrustLevel = "fixture" | "bounded" | "elevated" | "restricted";

export type AgentExecutionMode =
  | "dry_run"
  | "simulated"
  | "adapter_async"
  | "adapter_sync_fixture";

export type AgentHealthStatus =
  | "unknown"
  | "healthy"
  | "degraded"
  | "unhealthy";

export type AgentDescriptor = {
  schemaVersion: "0.1.0-oa";
  agentId: string;
  agentType: string;
  adapterRef: string;
  supportedCapabilities: string[];
  allowedActions: string[];
  allowedTargets: string[];
  allowedScopes: string[];
  trustLevel: AgentTrustLevel;
  executionMode: AgentExecutionMode;
  /** Simulated snapshot — never a live probe. */
  healthStatus: AgentHealthStatus;
  version: number;
  enabled: boolean;
  provenance: ProvenanceRecord;
  createdAt: string;
  updatedAt?: string;
};

export type ExecutionAttempt = {
  schemaVersion: "0.2.0-oa";
  attemptId: string;
  executionContractId: string;
  executionContractVersion: number;
  selectedAgentRef: string;
  status: ExecutionAttemptStatus;
  idempotencyKey: string;
  correlationId: string;
  version: number;
  createdAt: string;
  provenance: ProvenanceRecord;
  selectionStrategy?: SelectionStrategy;
  selectionProfile?: SelectionProfile;
  proposedAgentRef?: string;
  /** Confirmation scope agent_selection — required at Start+ for human_confirmed_proposal. */
  agentConfirmationRef?: string;
  selectionExpiresAt?: string;
  retryOfAttemptId?: string;
  retryIndex?: number;
  maxRetriesBudget?: number;
  startedAt?: string;
  completedAt?: string;
  failedAt?: string;
  timedOutAt?: string;
  cancelledAt?: string;
  resultPendingAt?: string;
  resultRef?: string;
  errorRef?: string;
  stopReason?: string;
  technicalExitCode?: number;
  durationMs?: number;
  logRefs?: string[];
  cancellationRequested?: boolean;
  irreversibleEffectsPossible?: boolean;
  updatedAt?: string;
  launchedAt?: string;
};

/**
 * Canonical binding carried by the agent_selection Confirmation actionRef.
 * See invariants.formatAgentSelectionActionRef.
 */
export type AgentSelectionBinding = {
  executionContractId: string;
  executionContractVersion: number;
  selectedAgentRef: string;
};

export type SelectExecutionAgentRequest = {
  attemptId: string;
  executionContractId: string;
  idempotencyKey: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  correlationId?: string;
  /** OCC guard on the contract read at selection time. */
  expectedContractVersion?: number;
  selectionProfile: SelectionProfile;
  /** Defaults from profile: critical → human_confirmed_proposal. */
  selectionStrategy?: SelectionStrategy;
  /** Required for human_confirmed_proposal. Confirmation scope agent_selection. */
  agentConfirmationRef?: string;
  /** Optional explicit agent — still filtered deny-by-default by the registry. */
  requestedAgentRef?: string;
  selectionExpiresAt?: string;
  selectionTtlMs?: number;
  retryOfAttemptId?: string;
  retryIndex?: number;
  maxRetriesBudget?: number;
  /** System-initiated selection: non-Critical + capabilities_deterministic only. */
  systemInitiated?: boolean;
  /** Hostile — ignored, never trusted. */
  claimedAuthorityLevel?: string;
  nowIso?: string;
};

export type StartExecutionRequest = {
  attemptId: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  correlationId?: string;
  expectedAttemptVersion?: number;
  expectedContractVersion?: number;
  /** Hostile — ignored, never trusted. */
  claimedAuthorityLevel?: string;
  nowIso?: string;
};

export type CancelExecutionAttemptRequest = {
  attemptId: string;
  reason: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  correlationId?: string;
  expectedAttemptVersion?: number;
  /** Morris emergency stop — requires N3 ∧ canActAsMorris (server verified). */
  emergency?: boolean;
  /** Hostile — ignored, never trusted. */
  claimedAuthorityLevel?: string;
  nowIso?: string;
};

export type RecordExecutionResultRequest = {
  attemptId: string;
  /** Adapter identity — must match the adapter bound to this Attempt. */
  adapterId: string;
  resultRef: string;
  technicalExitCode?: number;
  durationMs?: number;
  logRefs?: string[];
  correlationId?: string;
  expectedAttemptVersion?: number;
  nowIso?: string;
};

export type RecordExecutionFailureRequest = {
  attemptId: string;
  adapterId: string;
  errorRef?: string;
  stopReason?: string;
  technicalExitCode?: number;
  durationMs?: number;
  logRefs?: string[];
  correlationId?: string;
  expectedAttemptVersion?: number;
  nowIso?: string;
};

export type RetryExecutionAttemptRequest = {
  priorAttemptId: string;
  newAttemptId: string;
  idempotencyKey: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  correlationId?: string;
  maxRetriesBudget?: number;
  selectionTtlMs?: number;
  selectionExpiresAt?: string;
  /** Required when the contract reversibility is irreversible. */
  irreversibleRetryPolicyRef?: string;
  /** Required for human_confirmed_proposal retries — a NEW confirmation. */
  agentConfirmationRef?: string;
  /** Hostile — ignored, never trusted. */
  claimedAuthorityLevel?: string;
  nowIso?: string;
};

export type TriggerAttemptTimeoutRequest = {
  attemptId: string;
  /** Bounded deterministic auto-safety (no scheduler, explicit command). */
  autoSafety?: boolean;
  actor?: ActorReference;
  authorityEvidenceId?: string;
  correlationId?: string;
  expectedAttemptVersion?: number;
  /** Hostile — ignored, never trusted. */
  claimedAuthorityLevel?: string;
  nowIso?: string;
};

export type GetExecutionAttemptRequest = {
  attemptId: string;
  correlationId?: string;
};

export type ListExecutionAttemptsRequest = {
  executionContractId: string;
  correlationId?: string;
};

export type CheckAttemptAuthorizationRequest = {
  attemptId: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  correlationId?: string;
  /** Hostile — ignored, never trusted. */
  claimedAuthorityLevel?: string;
  nowIso?: string;
};

/** Modeled ErrorRecord codes reused by T-A5 (enum NOT widened). */
export type AttemptModeledErrorCode =
  | "CONFIRMATION_REQUIRED"
  | "DECISION_REQUIRED"
  | "CAPABILITY_MISSING"
  | "AUTHORITY_DENIED"
  | "STATE_CONFLICT"
  | "CONTEXT_STALE"
  | "EXECUTION_FAILED"
  | "EXECUTION_TIMEOUT";

/** T-A5 detail codes — catalogue `09-command-event-error-and-transition-catalog.md`. */
export type AttemptDetailCode =
  | "ATTEMPT_INVALID"
  | "ATTEMPT_NOT_FOUND"
  | "ATTEMPT_ALREADY_EXISTS"
  | "ATTEMPT_STATE_CONFLICT"
  | "ATTEMPT_IDEMPOTENCY_CONFLICT"
  | "EXECUTION_CONTRACT_NOT_FOUND"
  | "EXECUTION_CONTRACT_NOT_CONFIRMED"
  | "EXECUTION_CONTRACT_STALE"
  | "EXECUTION_CONTRACT_SUPERSEDED"
  | "EXECUTION_CONTRACT_CANCELLED"
  | "EXECUTION_CONTRACT_UPDATE_FAILED"
  | "AGENT_NOT_FOUND"
  | "AGENT_DISABLED"
  | "AGENT_UNHEALTHY"
  | "AGENT_CAPABILITY_MISMATCH"
  | "AGENT_SCOPE_MISMATCH"
  | "AGENT_SELECTION_EXPIRED"
  | "AGENT_SELECTION_STRATEGY_REFUSED"
  | "AGENT_CONFIRMATION_REQUIRED"
  | "AGENT_CONFIRMATION_INVALID"
  | "AGENT_CONFIRMATION_EXPIRED"
  | "AGENT_CONFIRMATION_ALREADY_CONSUMED"
  | "AGENT_CONFIRMATION_TTL_MISALIGNED"
  | "AGENT_CONFIRMATION_CONSUME_FAILED"
  | "ADAPTER_NOT_ALLOWED"
  | "ADAPTER_ATTEMPT_MISMATCH"
  | "AUTHORITY_DENIED"
  | "AUTHORITY_SCOPE_MISMATCH"
  | "AUTHORIZATION_DENIED"
  | "CRITICAL_NOT_ACKNOWLEDGED"
  | "DECISION_NOT_CURRENT"
  | "EXECUTION_ALREADY_ACTIVE"
  | "ACTIVE_INDEX_DRIFT"
  | "EXECUTION_PERSISTENCE_FAILED"
  | "EXECUTION_LAUNCH_REJECTED"
  | "EXECUTION_LAUNCH_FAILED"
  | "EXECUTION_CANCEL_FAILED"
  | "RESULT_RECORDING_FAILED"
  | "RETRY_NOT_AUTHORIZED"
  | "RETRY_BUDGET_EXHAUSTED"
  | "RETRY_IRREVERSIBLE_REFUSED"
  | "TIMEOUT_NOT_REACHED"
  | "EXECUTION_TIMEOUT"
  | "STALE_CONTEXT_DETECTED"
  | "CONCURRENCY_CONFLICT"
  | "VERSION_CONFLICT";

export type AttemptStructuredError = {
  code: AttemptModeledErrorCode;
  detailCode: AttemptDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: boolean;
  recoverable: boolean;
  domain: "F";
  correlationId?: string;
  attemptId?: string;
  executionContractId?: string;
  executionContractVersion?: number;
  selectedAgentRef?: string;
  confirmationId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  provenance?: ProvenanceRecord;
  timestamp: string;
  internalCauseRef?: string;
};

export type ExecutionAttemptSuccess = {
  ok: true;
  attempt: ExecutionAttempt;
  /** Contract snapshot after any T-A5 status write. */
  contractStatus?: string;
  contractVersion?: number;
  reusedFromIdempotencyKey?: boolean;
  /** Start replay of an already running Attempt — no second adapter call. */
  replayed?: boolean;
  durationMs: number;
};

export type ExecutionAttemptFailure = {
  ok: false;
  error: AttemptStructuredError;
  /** Attempt state after a fail-closed compensation, when applicable. */
  attempt?: ExecutionAttempt;
  durationMs: number;
};

export type ExecutionAttemptResult =
  | ExecutionAttemptSuccess
  | ExecutionAttemptFailure;

export type GetExecutionAttemptResult =
  | { ok: true; attempt: ExecutionAttempt }
  | { ok: false; error: AttemptStructuredError };

export type ListExecutionAttemptsResult =
  | { ok: true; attempts: ExecutionAttempt[] }
  | { ok: false; error: AttemptStructuredError };

export type CheckAttemptAuthorizationResult =
  | {
      ok: true;
      authorized: true;
      attempt: ExecutionAttempt;
      durationMs: number;
    }
  | {
      ok: false;
      authorized: false;
      error: AttemptStructuredError;
      durationMs: number;
    };
