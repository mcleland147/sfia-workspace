/**
 * T-A6-D2 ReviewBundle — domain types (Option A v3-native).
 * Modeled: review-bundle.schema.json 0.2.0-oa.
 * Runtime OCC uses modeled `version`. ready_for_review ≡ frozen.
 * claimEvaluationRefs remain empty in D2 (no ClaimEvaluation).
 */

import type { ActorReference, ProvenanceRecord } from "@/lib/oa/doctrine";

export type { ActorReference, ProvenanceRecord };

export const REVIEW_BUNDLE_SCHEMA_VERSION = "0.2.0-oa" as const;

export type ReviewBundleStatus =
  | "draft"
  | "ready_for_review"
  | "under_review"
  | "accepted"
  | "rejected"
  | "incomplete"
  | "superseded";

export type ReviewBundleCompleteness = "complete" | "incomplete";

/** Frozen snapshot of an Evidence ref at freeze time (runtime; never a payload). */
export type ReviewBundleEvidenceSnapshot = {
  evidenceId: string;
  evidenceVersion: number;
  status: string;
  availability: string;
};

export type ReviewBundle = {
  schemaVersion: typeof REVIEW_BUNDLE_SCHEMA_VERSION;
  reviewBundleId: string;
  projectId: string;
  cycleInstanceId?: string;
  executionContractId?: string;
  /** OCC + modeled version — verdict binds reviewBundleId + version. */
  version: number;
  evidenceRefs: string[];
  /** Always empty in D2 — ClaimEvaluation is D3. */
  claimEvaluationRefs: string[];
  completeness: ReviewBundleCompleteness;
  reservations?: string[];
  reviewer?: ActorReference;
  status: ReviewBundleStatus;
  createdAt: string;
  frozenAt?: string;
  reviewStartedAt?: string;
  validatedAt?: string;
  supersedesReviewBundleId?: string;
  synthesisOnly: boolean;
  provenance: ProvenanceRecord;
  /** Runtime: set at freeze; immutable thereafter. */
  frozenEvidenceSnapshots?: ReviewBundleEvidenceSnapshot[];
  /** Runtime command idempotency key for create. */
  idempotencyKey?: string;
  updatedAt?: string;
  reopenReason?: string;
  completionReason?: string;
};

export type ReviewBundleDetailCode =
  | "REVIEW_BUNDLE_INVALID"
  | "REVIEW_BUNDLE_NOT_FOUND"
  | "REVIEW_BUNDLE_ALREADY_EXISTS"
  | "REVIEW_BUNDLE_NOT_DRAFT"
  | "REVIEW_BUNDLE_NOT_FROZEN"
  | "REVIEW_BUNDLE_ALREADY_FROZEN"
  | "REVIEW_BUNDLE_NOT_UNDER_REVIEW"
  | "REVIEW_BUNDLE_INCOMPLETE"
  | "REVIEW_BUNDLE_VERSION_MISMATCH"
  | "REVIEW_BUNDLE_EVIDENCE_REQUIRED"
  | "REVIEW_BUNDLE_EVIDENCE_DUPLICATE"
  | "REVIEW_BUNDLE_EVIDENCE_MISSING"
  | "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT"
  | "REVIEW_BUNDLE_TERMINAL"
  | "REVIEW_BUNDLE_NOT_TERMINAL"
  | "REVIEW_BUNDLE_SECRET_FORBIDDEN"
  | "EVIDENCE_NOT_FOUND"
  | "VERSION_CONFLICT"
  | "CONCURRENT_MODIFICATION"
  | "IDEMPOTENCY_CONFLICT"
  | "REVIEW_BUNDLE_PERSISTENCE_FAILED";

export type ReviewBundleModeledErrorCode =
  | "STATE_CONFLICT"
  | "VALIDATION_FAILED"
  | "AUTHORITY_DENIED";

export type ReviewBundleStructuredError = {
  code: ReviewBundleModeledErrorCode;
  detailCode: ReviewBundleDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: true;
  recoverable: boolean;
  domain: "F";
  timestamp: string;
  correlationId?: string;
  reviewBundleId?: string;
  evidenceId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  internalCauseRef?: string;
};

export type ReviewBundleResult = {
  ok: true;
  reviewBundle: ReviewBundle;
  /** Present when ReopenReview also creates a successor draft. */
  successor?: ReviewBundle;
  reusedFromIdempotencyKey?: boolean;
  durationMs: number;
} | {
  ok: false;
  error: ReviewBundleStructuredError;
  reviewBundle?: ReviewBundle;
  durationMs: number;
};

export type CreateReviewBundleRequest = {
  reviewBundleId: string;
  idempotencyKey: string;
  actor: ActorReference;
  projectId: string;
  cycleInstanceId?: string;
  executionContractId?: string;
  synthesisOnly?: boolean;
  evidenceIds?: string[];
  reservations?: string[];
  correlationId?: string;
  nowIso?: string;
};

export type AttachEvidenceToReviewBundleRequest = {
  reviewBundleId: string;
  evidenceId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  correlationId?: string;
  nowIso?: string;
};

export type RemoveEvidenceFromReviewBundleRequest = {
  reviewBundleId: string;
  evidenceId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  correlationId?: string;
  nowIso?: string;
};

export type FreezeReviewBundleRequest = {
  reviewBundleId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  correlationId?: string;
  nowIso?: string;
};

export type StartReviewRequest = {
  reviewBundleId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  correlationId?: string;
  nowIso?: string;
};

export type CompleteReviewOutcome = "accepted" | "rejected" | "incomplete";

export type CompleteReviewRequest = {
  reviewBundleId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  outcome: CompleteReviewOutcome;
  reason?: string;
  correlationId?: string;
  nowIso?: string;
};

export type ReopenReviewRequest = {
  reviewBundleId: string;
  /** New draft successor ID. */
  successorReviewBundleId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  reason: string;
  correlationId?: string;
  nowIso?: string;
};
