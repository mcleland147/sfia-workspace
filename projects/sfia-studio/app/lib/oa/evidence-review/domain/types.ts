/**
 * T-A6-D1 Evidence core — domain types (Option A v3-native).
 *
 * Modeled reference: evidence.schema.json schemaVersion 0.2.0-oa.
 * Runtime OCC `version` / `idempotencyKey` / timestamps follow T-A5 conventions
 * and are NOT claimed as modeled schema fields.
 *
 * Attempt is a source binding, never the Evidence owner.
 * No ReviewBundle / ClaimEvaluation / MaturityAssessment in D1.
 */

import type {
  ActorReference,
  Digest,
  ProvenanceRecord,
} from "@/lib/oa/doctrine";

export type { ActorReference, Digest, ProvenanceRecord };

export const EVIDENCE_SCHEMA_VERSION = "0.2.0-oa" as const;

export type EvidenceType =
  | "document"
  | "screenshot"
  | "log_ref"
  | "artifact"
  | "attestation"
  | "other";

export type EvidenceSourceKind =
  | "execution_attempt"
  | "manual"
  | "external"
  | "system";

export type EvidenceStatus =
  | "expected"
  | "available"
  | "verified"
  | "incomplete"
  | "stale"
  | "rejected"
  | "superseded"
  | "unavailable";

export type EvidenceClassification =
  | "public"
  | "internal"
  | "confidential"
  | "restricted";

export type EvidenceStorageMode =
  | "metadata_only"
  | "internal_payload_ref"
  | "external_payload_ref";

export type EvidenceAvailability = "available" | "unavailable" | "unknown";

export type EvidenceFreshness = "fresh" | "aging" | "stale" | "unknown";

export type EvidenceRetentionClass =
  | "short"
  | "standard"
  | "extended"
  | "legal_hold_eligible";

/** At least one structural binding required (D-T-A6-01 / modeled). */
export type EvidenceBindings = {
  executionAttemptId?: string;
  executionContractId?: string;
  decisionId?: string;
  cycleInstanceId?: string;
  projectId?: string;
  reviewBundleId?: string;
};

/**
 * Evidence aggregate — independent identity, memory OCC via `version`.
 * Never stores a raw payload.
 */
export type Evidence = {
  schemaVersion: typeof EVIDENCE_SCHEMA_VERSION;
  evidenceId: string;
  type: EvidenceType;
  source: string;
  sourceKind: EvidenceSourceKind;
  location?: string;
  digest?: Digest;
  verifiablePayload?: boolean;
  producedBy?: ActorReference;
  producedAt: string;
  freshness?: EvidenceFreshness;
  status: EvidenceStatus;
  classification: EvidenceClassification;
  storageMode: EvidenceStorageMode;
  availability: EvidenceAvailability;
  retentionClass?: EvidenceRetentionClass;
  legalHold?: boolean;
  bindings: EvidenceBindings;
  containsSecrets: false;
  provenance: ProvenanceRecord;
  /** Runtime OCC — monotone, repository-owned. */
  version: number;
  createdAt: string;
  updatedAt?: string;
  /** Command idempotency key that created this Evidence (when applicable). */
  idempotencyKey?: string;
  /** Technical Attempt resultRef captured at ingestion — never implies verified/PASS. */
  technicalResultRef?: string;
  unavailableReason?: string;
  unavailableAt?: string;
};

export type EvidenceDetailCode =
  | "EVIDENCE_INVALID"
  | "EVIDENCE_NOT_FOUND"
  | "EVIDENCE_ALREADY_EXISTS"
  | "EVIDENCE_SOURCE_REQUIRED"
  | "EVIDENCE_BINDING_REQUIRED"
  | "EVIDENCE_DIGEST_REQUIRED"
  | "EVIDENCE_UNAVAILABLE"
  | "EVIDENCE_SECRET_FORBIDDEN"
  | "EVIDENCE_INTEGRITY_MISMATCH"
  | "EVIDENCE_VERIFIED_FORBIDDEN"
  | "ATTEMPT_NOT_FOUND"
  | "ATTEMPT_RESULT_UNAVAILABLE"
  | "ATTEMPT_STATUS_REFUSED"
  | "VERSION_CONFLICT"
  | "CONCURRENT_MODIFICATION"
  | "IDEMPOTENCY_CONFLICT"
  | "EVIDENCE_PERSISTENCE_FAILED"
  | "PAYLOAD_METADATA_ERROR";

export type EvidenceModeledErrorCode =
  | "STATE_CONFLICT"
  | "CONTEXT_STALE"
  | "AUTHORITY_DENIED"
  | "VALIDATION_FAILED";

export type EvidenceStructuredError = {
  code: EvidenceModeledErrorCode;
  detailCode: EvidenceDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: true;
  recoverable: boolean;
  domain: "F";
  timestamp: string;
  correlationId?: string;
  evidenceId?: string;
  executionAttemptId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  internalCauseRef?: string;
};

export type EvidenceResult = {
  ok: true;
  evidence: Evidence;
  reusedFromIdempotencyKey?: boolean;
  durationMs: number;
} | {
  ok: false;
  error: EvidenceStructuredError;
  evidence?: Evidence;
  durationMs: number;
};

export type RegisterEvidenceRequest = {
  evidenceId: string;
  idempotencyKey: string;
  actor: ActorReference;
  type: EvidenceType;
  source: string;
  sourceKind: Exclude<EvidenceSourceKind, "execution_attempt">;
  bindings: EvidenceBindings;
  classification: EvidenceClassification;
  storageMode: EvidenceStorageMode;
  availability?: EvidenceAvailability;
  status?: Exclude<EvidenceStatus, "verified">;
  freshness?: EvidenceFreshness;
  location?: string;
  digest?: Digest;
  verifiablePayload?: boolean;
  retentionClass?: EvidenceRetentionClass;
  legalHold?: boolean;
  producedBy?: ActorReference;
  correlationId?: string;
  nowIso?: string;
};

export type IngestExecutionAttemptEvidenceRequest = {
  evidenceId: string;
  executionAttemptId: string;
  idempotencyKey: string;
  actor: ActorReference;
  classification: EvidenceClassification;
  retentionClass?: EvidenceRetentionClass;
  /** Extra structural bindings (project/cycle/decision…). Attempt binding is always set. */
  bindings?: Omit<EvidenceBindings, "executionAttemptId">;
  type?: EvidenceType;
  storageMode?: EvidenceStorageMode;
  location?: string;
  digest?: Digest;
  legalHold?: boolean;
  correlationId?: string;
  nowIso?: string;
};

export type VerifyEvidenceIntegrityRequest = {
  evidenceId: string;
  actor: ActorReference;
  expectedVersion: number;
  correlationId?: string;
  nowIso?: string;
};

export type MarkEvidenceUnavailableRequest = {
  evidenceId: string;
  actor: ActorReference;
  expectedVersion: number;
  reason: string;
  idempotencyKey: string;
  correlationId?: string;
  nowIso?: string;
};

/** Read-only Attempt snapshot for T-A6 ingestion (never mutates T-A5). */
export type ExecutionAttemptSnapshot = {
  attemptId: string;
  executionContractId: string;
  executionContractVersion: number;
  status: string;
  resultRef?: string;
  errorRef?: string;
  stopReason?: string;
  cancelledAt?: string;
  failedAt?: string;
  timedOutAt?: string;
  stopOrigin?: "USER_CANCEL" | "SYSTEM_GOVERNED_STOP";
  stopCode?: string;
  stopSourceRef?: string;
  stopObservedAt?: string;
  completedAt?: string;
  selectedAgentRef?: string;
};
