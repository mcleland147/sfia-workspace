/**
 * T-A6-D3 ClaimEvaluation — domain types (Option A v3-native).
 * Modeled: claim-evaluation.schema.json 0.1.0-oa.
 * Commands: EvaluateClaim · ConfirmClaimEvaluation · RejectClaimEvaluation.
 * CreateClaim absorbed into EvaluateClaim v1. No MaturityAssessment.
 */

import type { ActorReference, ProvenanceRecord } from "@/lib/oa/doctrine";

export type { ActorReference, ProvenanceRecord };

export const CLAIM_EVALUATION_SCHEMA_VERSION = "0.1.0-oa" as const;

export type ClaimType =
  | "technique"
  | "conformite"
  | "qualite"
  | "securite"
  | "maturite_support";

export type ClaimCriticality = "non_critical" | "critical" | "structural";

export type ClaimEvaluationMethod =
  | "deterministic"
  | "assisted"
  | "human_review";

export type ClaimEvaluationStatus =
  | "pending"
  | "evaluating"
  | "pass"
  | "fail"
  | "not_proven"
  | "waived"
  | "disputed";

export type ClaimConfirmationAuthority =
  | "system_deterministic"
  | "authorized_human"
  | "morris";

export type ClaimEvidenceAssessmentCode =
  | "ok"
  | "missing"
  | "not_in_bundle"
  | "version_mismatch"
  | "unavailable"
  | "not_verified"
  | "stale"
  | "incomplete"
  | "rejected";

export type ClaimEvidenceAssessment = {
  evidenceId: string;
  expectedVersion?: number;
  observedVersion?: number;
  status?: string;
  availability?: string;
  freshness?: string;
  code: ClaimEvidenceAssessmentCode;
};

export type ClaimWaiver = {
  reason: string;
  authorizedBy: ActorReference;
  authorizedAt: string;
  reversible: true;
};

export type ClaimDispute = {
  reason: string;
  raisedBy: ActorReference;
  raisedAt: string;
};

export type ClaimEvaluation = {
  schemaVersion: typeof CLAIM_EVALUATION_SCHEMA_VERSION;
  claimEvaluationId: string;
  claimType: ClaimType;
  claimStatement: string;
  criticality: ClaimCriticality;
  evaluationMethod: ClaimEvaluationMethod;
  ruleRef?: string;
  requiredEvidenceRefs: string[];
  providedEvidenceRefs?: string[];
  reviewBundleId: string;
  reviewBundleVersion: number;
  status: ClaimEvaluationStatus;
  proposedBy: ActorReference;
  reviewedBy?: ActorReference;
  confirmedBy?: ActorReference;
  confirmationAuthority?: ClaimConfirmationAuthority;
  proposedAt: string;
  evaluatedAt?: string;
  confirmedAt?: string;
  waiver?: ClaimWaiver;
  dispute?: ClaimDispute;
  provenance: ProvenanceRecord;
  /** Runtime OCC — monotone. */
  version: number;
  /** Runtime evidence assessments (refs-only). */
  evidenceAssessments?: ClaimEvidenceAssessment[];
  /** Runtime: prior claim evaluation this supersedes (new id; old unchanged). */
  supersedesClaimEvaluationId?: string;
  idempotencyKey?: string;
  updatedAt?: string;
  rejectionReason?: string;
};

export type ClaimEvaluationDetailCode =
  | "CLAIM_EVALUATION_INVALID"
  | "CLAIM_EVALUATION_NOT_FOUND"
  | "CLAIM_EVALUATION_ALREADY_EXISTS"
  | "CLAIM_EVALUATION_INVALID_STATE"
  | "CLAIM_EVALUATION_ALREADY_CONFIRMED"
  | "CLAIM_EVALUATION_SUPERSEDED"
  | "CLAIM_REQUIRED_EVIDENCE_MISSING"
  | "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE"
  | "CLAIM_EVIDENCE_VERSION_MISMATCH"
  | "CLAIM_EVIDENCE_UNAVAILABLE"
  | "CLAIM_EVIDENCE_NOT_VERIFIED"
  | "CLAIM_REVIEW_BUNDLE_INVALID"
  | "CLAIM_REVIEW_BUNDLE_VERSION_MISMATCH"
  | "CLAIM_CONFIRMATION_REQUIRED"
  | "CLAIM_AUTHORITY_FORBIDDEN"
  | "CLAIM_SELF_REVIEW_FORBIDDEN"
  | "CLAIM_WAIVER_FORBIDDEN"
  | "CLAIM_DISPUTED"
  | "CLAIM_SECRET_FORBIDDEN"
  | "REVIEW_BUNDLE_NOT_FOUND"
  | "VERSION_CONFLICT"
  | "CONCURRENT_MODIFICATION"
  | "IDEMPOTENCY_CONFLICT"
  | "CLAIM_EVALUATION_PERSISTENCE_FAILED";

export type ClaimEvaluationModeledErrorCode =
  | "STATE_CONFLICT"
  | "VALIDATION_FAILED"
  | "AUTHORITY_DENIED";

export type ClaimEvaluationStructuredError = {
  code: ClaimEvaluationModeledErrorCode;
  detailCode: ClaimEvaluationDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: true;
  recoverable: boolean;
  domain: "F";
  timestamp: string;
  correlationId?: string;
  claimEvaluationId?: string;
  reviewBundleId?: string;
  evidenceId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  internalCauseRef?: string;
};

export type ClaimEvaluationResult = {
  ok: true;
  claimEvaluation: ClaimEvaluation;
  reusedFromIdempotencyKey?: boolean;
  durationMs: number;
} | {
  ok: false;
  error: ClaimEvaluationStructuredError;
  claimEvaluation?: ClaimEvaluation;
  durationMs: number;
};

export type EvaluateClaimIntent = "evaluate" | "waive" | "dispute";

export type EvaluateClaimRequest = {
  claimEvaluationId: string;
  idempotencyKey: string;
  actor: ActorReference;
  claimType: ClaimType;
  claimStatement: string;
  criticality: ClaimCriticality;
  evaluationMethod: ClaimEvaluationMethod;
  ruleRef?: string;
  requiredEvidenceRefs: string[];
  reviewBundleId: string;
  reviewBundleVersion: number;
  intent?: EvaluateClaimIntent;
  waiverReason?: string;
  disputeReason?: string;
  supersedesClaimEvaluationId?: string;
  correlationId?: string;
  nowIso?: string;
};

export type ConfirmClaimEvaluationRequest = {
  claimEvaluationId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  authorityEvidenceId?: string;
  correlationId?: string;
  nowIso?: string;
};

export type RejectClaimEvaluationRequest = {
  claimEvaluationId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  outcome: "fail" | "not_proven";
  reason?: string;
  correlationId?: string;
  nowIso?: string;
};
