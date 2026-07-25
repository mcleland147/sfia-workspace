/**
 * T-A4 ExecutionContract Governance — domain types (Option A v3-native).
 * Modeled schema reference: execution-contract.schema.json schemaVersion 0.2.0-oa.
 *
 * Ownership:
 * - T-A4: draft|proposed|validated|confirmation_required|confirmed|cancelled|superseded
 * - T-A5: executing|completed|failed + selectedAgentRef — REFUSED in this module
 *
 * requiredAuthority: N1|N2|N3|MORRIS
 * MORRIS = N3 verified ∧ canActAsMorris=true (via T-A3 AuthorityResolverPort).
 */

import type {
  ActorReference,
  DoctrinePackageRef,
  ProvenanceRecord,
} from "@/lib/oa/doctrine";

export type { ActorReference, DoctrinePackageRef, ProvenanceRecord };

/** Closed enum from modeled schema 0.2.0-oa. */
export type AuthorityClass = "N1" | "N2" | "N3" | "MORRIS";

/** Full lifecycle enum (schema). T-A4 must not produce T-A5 statuses. */
export type ExecutionContractStatus =
  | "draft"
  | "proposed"
  | "validated"
  | "confirmation_required"
  | "confirmed"
  | "executing"
  | "completed"
  | "failed"
  | "cancelled"
  | "superseded";

/** Statuses T-A4 may produce / transition among. */
export type Ta4ExecutionContractStatus =
  | "draft"
  | "proposed"
  | "validated"
  | "confirmation_required"
  | "confirmed"
  | "cancelled"
  | "superseded";

/** Statuses owned exclusively by T-A5 — refused by T-A4 use-cases. */
export type Ta5ExecutionContractStatus =
  | "executing"
  | "completed"
  | "failed";

export type Reversibility =
  | "reversible"
  | "partially_reversible"
  | "irreversible";

export type ExecutionContract = {
  schemaVersion: "0.2.0-oa";
  executionContractId: string;
  projectId: string;
  cycleInstanceId?: string;
  decisionRefs?: string[];
  confirmationRef?: string;
  doctrinePackageRef?: DoctrinePackageRef;
  action: string;
  target: string;
  scope: string;
  inputs?: Record<string, unknown>;
  expectedOutputs?: string[];
  requiredCapabilities: string[];
  requiredAuthority: AuthorityClass;
  /** T-A5 only — T-A4 must never set. */
  selectedAgentRef?: string;
  constraints: string[];
  stopConditions: string[];
  evidenceRequirements: string[];
  reversibility: Reversibility;
  idempotencyKey: string;
  correlationId: string;
  status: ExecutionContractStatus;
  version: number;
  supersedesExecutionContractId?: string;
  supersessionReason?: string;
  adapterExportRef?: string;
  immutableAfterConfirm?: true;
  provenance?: ProvenanceRecord;
};

export type BuildExecutionContractRequest = {
  executionContractId: string;
  projectId: string;
  cycleInstanceId?: string;
  decisionRefs: string[];
  doctrinePackageRef?: DoctrinePackageRef;
  action: string;
  target: string;
  scope: string;
  inputs?: Record<string, unknown>;
  expectedOutputs?: string[];
  requiredCapabilities: string[];
  requiredAuthority: AuthorityClass;
  constraints: string[];
  stopConditions: string[];
  evidenceRequirements: string[];
  reversibility: Reversibility;
  idempotencyKey: string;
  correlationId?: string;
  /** draft (default) or proposed. */
  status?: "draft" | "proposed";
  adapterExportRef?: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  /** Hostile — ignored. */
  claimedAuthorityLevel?: string;
  /** Hostile T-A5 injection — ignored / refused. */
  selectedAgentRef?: string;
};

export type ValidateExecutionContractRequest = {
  executionContractId: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  expectedVersion?: number;
  correlationId?: string;
  claimedAuthorityLevel?: string;
};

export type ConfirmExecutionContractRequest = {
  executionContractId: string;
  confirmationId: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  expectedVersion?: number;
  correlationId?: string;
  claimedAuthorityLevel?: string;
  /** Wall-clock override for confirmation expiry (tests). */
  nowIso?: string;
};

export type SupersedeExecutionContractRequest = {
  newExecutionContractId: string;
  supersedesExecutionContractId: string;
  supersessionReason: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  expectedVersion?: number;
  correlationId?: string;
  claimedAuthorityLevel?: string;
  /** Optional field overrides on successor (defaults copy from prior). */
  action?: string;
  target?: string;
  scope?: string;
  decisionRefs?: string[];
  requiredCapabilities?: string[];
  requiredAuthority?: AuthorityClass;
  constraints?: string[];
  stopConditions?: string[];
  evidenceRequirements?: string[];
  reversibility?: Reversibility;
  idempotencyKey?: string;
  inputs?: Record<string, unknown>;
  expectedOutputs?: string[];
  adapterExportRef?: string;
  /** Initial status of successor — draft or proposed. */
  status?: "draft" | "proposed";
};

export type CancelExecutionContractRequest = {
  executionContractId: string;
  reason: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  expectedVersion?: number;
  correlationId?: string;
  claimedAuthorityLevel?: string;
};

export type CheckExecutionAuthorizationRequest = {
  executionContractId: string;
  action: string;
  target: string;
  scope: string;
  actor: ActorReference;
  authorityEvidenceId?: string;
  correlationId?: string;
  claimedAuthorityLevel?: string;
};

export type GetExecutionContractRequest = {
  executionContractId: string;
  correlationId?: string;
};

export type ListExecutionContractHistoryRequest = {
  projectId: string;
  correlationId?: string;
};

/** Modeled ErrorRecord codes applicable to ExecutionContract (domain F). */
export type ExecutionModeledErrorCode =
  | "CONFIRMATION_REQUIRED"
  | "DECISION_REQUIRED"
  | "CAPABILITY_MISSING"
  | "AUTHORITY_DENIED"
  | "STATE_CONFLICT"
  | "CONTEXT_STALE"
  | "EXECUTION_FAILED"
  | "DOCTRINE_UNRESOLVED"
  | "REPLAN_REQUIRED";

/**
 * T-A4 detail codes — finer than modeled ErrorRecord enum.
 */
export type ExecutionDetailCode =
  | "CONTRACT_INVALID"
  | "CONTRACT_ALREADY_EXISTS"
  | "CONTRACT_NOT_FOUND"
  | "CONTRACT_IDEMPOTENCY_CONFLICT"
  | "CONFIRMATION_REQUIRED"
  | "CONFIRMATION_NOT_FOUND"
  | "CONFIRMATION_INVALID"
  | "CONFIRMATION_EXPIRED"
  | "CONFIRMATION_ALREADY_CONSUMED"
  | "CONFIRMATION_CONSUME_FAILED"
  | "DECISION_REQUIRED"
  | "DECISION_NOT_FOUND"
  | "DECISION_NOT_CURRENT"
  | "AUTHORITY_DENIED"
  | "AUTHORITY_SCOPE_MISMATCH"
  | "CRITICAL_NOT_ACKNOWLEDGED"
  | "TA5_STATUS_REFUSED"
  | "SELF_SUPERSESSION"
  | "SUPERSESSION_REASON_INVALID"
  | "AUTHORIZATION_DENIED"
  | "PROJECT_NOT_FOUND"
  | "CYCLE_NOT_FOUND"
  | "CYCLE_PROJECT_MISMATCH"
  | "STATE_CONFLICT"
  | "VERSION_CONFLICT"
  | "PERSISTENCE_FAILURE";

export type ExecutionStructuredError = {
  code: ExecutionModeledErrorCode;
  detailCode: ExecutionDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: boolean;
  recoverable: boolean;
  domain: "F";
  correlationId?: string;
  projectId?: string;
  executionContractId?: string;
  confirmationId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  provenance?: ProvenanceRecord;
  timestamp: string;
  internalCauseRef?: string;
};

export type ExecutionContractSuccess = {
  ok: true;
  contract: ExecutionContract;
  /** When supersede: the prior contract now superseded. */
  supersededContract?: ExecutionContract;
  reusedFromIdempotencyKey?: boolean;
  durationMs: number;
};

export type ExecutionContractFailure = {
  ok: false;
  error: ExecutionStructuredError;
  durationMs: number;
};

export type ExecutionContractResult =
  | ExecutionContractSuccess
  | ExecutionContractFailure;

export type GetExecutionContractSuccess = {
  ok: true;
  contract: ExecutionContract;
};

export type GetExecutionContractFailure = {
  ok: false;
  error: ExecutionStructuredError;
};

export type GetExecutionContractResult =
  | GetExecutionContractSuccess
  | GetExecutionContractFailure;

export type ListExecutionContractsSuccess = {
  ok: true;
  contracts: ExecutionContract[];
};

export type ListExecutionContractsFailure = {
  ok: false;
  error: ExecutionStructuredError;
};

export type ListExecutionContractsResult =
  | ListExecutionContractsSuccess
  | ListExecutionContractsFailure;

export type CheckAuthorizationSuccess = {
  ok: true;
  authorized: true;
  contract: ExecutionContract;
  durationMs: number;
};

export type CheckAuthorizationFailure = {
  ok: false;
  authorized: false;
  error: ExecutionStructuredError;
  durationMs: number;
};

export type CheckAuthorizationResult =
  | CheckAuthorizationSuccess
  | CheckAuthorizationFailure;
