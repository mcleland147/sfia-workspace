/**
 * T-A6-D4 MaturityAssessment — domain types (Option A v3-native).
 * Modeled: maturity-assessment.schema.json 0.2.0-oa.
 * Commands: ProposeMaturity · ConfirmMaturity · DowngradeMaturity.
 * Never mutates Evidence, ReviewBundle, or ClaimEvaluation.
 * Maturity ≠ executionAuthority. autoPromoted=false const.
 */
import type { ActorReference, ProvenanceRecord } from "@/lib/oa/doctrine";

export type { ActorReference, ProvenanceRecord };

export const MATURITY_ASSESSMENT_SCHEMA_VERSION = "0.2.0-oa" as const;

export type MaturityLevel =
  | "DOCUMENTED"
  | "VALIDATED"
  | "MODELED"
  | "IMPLEMENTED"
  | "ADOPTED";

export type MaturityAssessmentStatus =
  | "proposed"
  | "confirmed"
  | "rejected"
  | "superseded"
  | "blocked";

export type MaturityDimension = {
  dimensionId: string;
  proposedLevel: MaturityLevel;
  confirmedLevel?: MaturityLevel;
  blocked?: boolean;
};

/** Immutable binding of a ClaimEvaluation consumed at calculation time. */
export type MaturityClaimBinding = {
  claimEvaluationId: string;
  claimEvaluationVersion: number;
  claimType: string;
  criticality: string;
  status: string;
  confirmationAuthority?: string;
  confirmedByActorId?: string;
  eligibleForPositive: boolean;
  ineligibilityCode?: MaturityClaimIneligibilityCode;
  reviewBundleId: string;
  reviewBundleVersion: number;
};

export type MaturityClaimIneligibilityCode =
  | "missing"
  | "version_mismatch"
  | "disputed"
  | "waived"
  | "superseded"
  | "not_pass"
  | "confirmation_required"
  | "structural_confirmation_required";

export type MaturityCriterionCode =
  | "has_eligible_pass"
  | "has_confirmed_pass"
  | "has_modeled_support"
  | "has_implemented_support"
  | "has_adopted_morris_support"
  | "no_hard_blocking_reserve";

export type MaturityCriterionResult = {
  code: MaturityCriterionCode;
  satisfied: boolean;
  supportingClaimEvaluationIds: string[];
  detail?: string;
};

export type MaturityGapCode =
  | "no_eligible_claims"
  | "claim_disputed"
  | "claim_waived"
  | "claim_superseded"
  | "claim_not_confirmed"
  | "claim_version_mismatch"
  | "claim_missing"
  | "hard_reserve_blocks_level"
  | "requested_level_unsupported"
  | "insufficient_for_level";

export type MaturityGap = {
  code: MaturityGapCode;
  claimEvaluationId?: string;
  level?: MaturityLevel;
  detail?: string;
};

export type MaturityReviewBundleRef = {
  reviewBundleId: string;
  version: number;
};

export type MaturityAssessment = {
  schemaVersion: typeof MATURITY_ASSESSMENT_SCHEMA_VERSION;
  maturityAssessmentId: string;
  projectId: string;
  subjectRef: string;
  dimensions?: MaturityDimension[];
  proposedLevel: MaturityLevel;
  confirmedLevel?: MaturityLevel;
  claimEvaluationRefs: string[];
  /** Exact versions consumed — runtime immutable bindings (refs-only). */
  claimBindings: MaturityClaimBinding[];
  reviewBundleRefs?: MaturityReviewBundleRef[];
  evidenceRefs?: string[];
  blockingReservationRefs: string[];
  waiverRefs?: string[];
  proposedBy: ActorReference;
  confirmedBy?: ActorReference;
  proposedAt: string;
  confirmedAt?: string;
  status: MaturityAssessmentStatus;
  supersedesMaturityAssessmentId?: string;
  downgradeReason?: string;
  autoPromoted: false;
  provenance: ProvenanceRecord;
  criteriaResults?: MaturityCriterionResult[];
  gaps?: MaturityGap[];
  calculatedAt?: string;
  /** Runtime OCC — monotone. */
  version: number;
  idempotencyKey?: string;
  updatedAt?: string;
};

export type MaturityDetailCode =
  | "MATURITY_ASSESSMENT_INVALID"
  | "MATURITY_ASSESSMENT_NOT_FOUND"
  | "MATURITY_ASSESSMENT_ALREADY_EXISTS"
  | "MATURITY_INVALID_STATE"
  | "MATURITY_ALREADY_CONFIRMED"
  | "MATURITY_SUPERSEDED"
  | "MATURITY_CLAIM_NOT_FOUND"
  | "MATURITY_CLAIM_VERSION_MISMATCH"
  | "MATURITY_CLAIM_NOT_ELIGIBLE"
  | "MATURITY_CLAIM_DISPUTED"
  | "MATURITY_CLAIM_SUPERSEDED"
  | "MATURITY_CLAIM_WAIVED"
  | "MATURITY_CONFIRMATION_REQUIRED"
  | "MATURITY_AUTHORITY_FORBIDDEN"
  | "MATURITY_SELF_REVIEW_FORBIDDEN"
  | "MATURITY_BLOCKED_BY_RESERVATION"
  | "MATURITY_AUTO_PROMOTION_FORBIDDEN"
  | "MATURITY_DOWNGRADE_FORBIDDEN"
  | "MATURITY_DOWNGRADE_REQUIRED"
  | "MATURITY_SECRET_FORBIDDEN"
  | "VERSION_CONFLICT"
  | "CONCURRENT_MODIFICATION"
  | "IDEMPOTENCY_CONFLICT"
  | "MATURITY_PERSISTENCE_FAILED";

export type MaturityModeledErrorCode =
  | "VALIDATION_FAILED"
  | "AUTHORITY_DENIED"
  | "STATE_CONFLICT"
  | "MATURITY_BLOCKED_BY_RESERVATION"
  | "MATURITY_CONFIRMATION_REQUIRED"
  | "MATURITY_AUTO_PROMOTION_FORBIDDEN"
  | "MATURITY_DOWNGRADE_REQUIRED";

export type MaturityStructuredError = {
  schemaVersion: "0.1.0-oa";
  errorCode: MaturityModeledErrorCode;
  detailCode: MaturityDetailCode;
  message: string;
  severity: "error" | "critical";
  recoverable: boolean;
  timestamp: string;
  correlationId?: string;
  maturityAssessmentId?: string;
  claimEvaluationId?: string;
  expectedVersion?: number;
  currentVersion?: number;
};

export type ProposeMaturityRequest = {
  maturityAssessmentId: string;
  idempotencyKey: string;
  actor: ActorReference;
  projectId: string;
  subjectRef: string;
  /** Exact ClaimEvaluation bindings (id + version). */
  claimBindings: Array<{
    claimEvaluationId: string;
    claimEvaluationVersion: number;
  }>;
  requestedLevel: MaturityLevel;
  dimensions?: Array<{ dimensionId: string; proposedLevel: MaturityLevel }>;
  blockingReservationRefs?: string[];
  reviewBundleRefs?: MaturityReviewBundleRef[];
  evidenceRefs?: string[];
  correlationId?: string;
  nowIso?: string;
};

export type ConfirmMaturityRequest = {
  maturityAssessmentId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  authorityEvidenceId?: string;
  correlationId?: string;
  nowIso?: string;
};

export type DowngradeMaturityRequest = {
  sourceMaturityAssessmentId: string;
  successorMaturityAssessmentId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  targetLevel: MaturityLevel;
  downgradeReason: string;
  claimBindings: Array<{
    claimEvaluationId: string;
    claimEvaluationVersion: number;
  }>;
  blockingReservationRefs?: string[];
  authorityEvidenceId?: string;
  correlationId?: string;
  nowIso?: string;
};

export type MaturityAssessmentResult =
  | {
      ok: true;
      maturityAssessment: MaturityAssessment;
      successor?: MaturityAssessment;
      error?: undefined;
      reusedFromIdempotencyKey?: boolean;
      durationMs: number;
    }
  | {
      ok: false;
      maturityAssessment?: MaturityAssessment;
      successor?: MaturityAssessment;
      error: MaturityStructuredError;
      reusedFromIdempotencyKey?: boolean;
      durationMs: number;
    };

export const MATURITY_LEVEL_ORDER: readonly MaturityLevel[] = [
  "DOCUMENTED",
  "VALIDATED",
  "MODELED",
  "IMPLEMENTED",
  "ADOPTED",
] as const;
