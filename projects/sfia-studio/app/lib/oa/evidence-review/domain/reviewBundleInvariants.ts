/**
 * ReviewBundle invariants — mirrors review-bundle.schema.json 0.2.0-oa.
 */
import {
  containsForbiddenSecret,
  isEvidenceId,
  isOaIdentifier,
} from "./invariants";
import type {
  ReviewBundle,
  ReviewBundleCompleteness,
  ReviewBundleDetailCode,
  ReviewBundleEvidenceSnapshot,
  ReviewBundleStatus,
} from "./reviewBundleTypes";

export type ReviewBundleInvariantViolation = {
  detailCode: ReviewBundleDetailCode;
  reason: string;
};

export const REVIEW_BUNDLE_STATUSES: ReadonlySet<ReviewBundleStatus> = new Set([
  "draft",
  "ready_for_review",
  "under_review",
  "accepted",
  "rejected",
  "incomplete",
  "superseded",
]);

export const TERMINAL_REVIEW_STATUSES: ReadonlySet<ReviewBundleStatus> = new Set([
  "accepted",
  "rejected",
  "incomplete",
  "superseded",
]);

export const POST_DRAFT_STATUSES: ReadonlySet<ReviewBundleStatus> = new Set([
  "ready_for_review",
  "under_review",
  "accepted",
  "rejected",
  "incomplete",
  "superseded",
]);

export function isReviewBundleId(value: unknown): value is string {
  return isOaIdentifier(value) && value.startsWith("rb:");
}

export function isProjectId(value: unknown): value is string {
  return isOaIdentifier(value) && value.startsWith("prj:");
}

export function sortEvidenceRefs(refs: string[]): string[] {
  return [...refs].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
}

/**
 * Completeness: complete only with ≥1 evidence refs, !synthesisOnly,
 * and no unavailable Evidence in known snapshots (when provided).
 */
export function computeCompleteness(input: {
  evidenceRefs: string[];
  synthesisOnly: boolean;
  snapshots?: ReviewBundleEvidenceSnapshot[];
}): ReviewBundleCompleteness {
  if (input.synthesisOnly) return "incomplete";
  if (input.evidenceRefs.length < 1) return "incomplete";
  if (
    input.snapshots?.some(
      (s) => s.availability === "unavailable" || s.status === "unavailable",
    )
  ) {
    return "incomplete";
  }
  return "complete";
}

export function validateReviewBundleShape(
  bundle: ReviewBundle,
): ReviewBundleInvariantViolation | null {
  if (bundle.schemaVersion !== "0.2.0-oa") {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "schema_version" };
  }
  if (!isReviewBundleId(bundle.reviewBundleId)) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "review_bundle_id" };
  }
  if (!isProjectId(bundle.projectId)) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "project_id" };
  }
  if (
    bundle.cycleInstanceId !== undefined &&
    (!isOaIdentifier(bundle.cycleInstanceId) ||
      !bundle.cycleInstanceId.startsWith("cyc:"))
  ) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "cycle_instance_id" };
  }
  if (
    bundle.executionContractId !== undefined &&
    (!isOaIdentifier(bundle.executionContractId) ||
      !bundle.executionContractId.startsWith("xct:"))
  ) {
    return {
      detailCode: "REVIEW_BUNDLE_INVALID",
      reason: "execution_contract_id",
    };
  }
  if (!REVIEW_BUNDLE_STATUSES.has(bundle.status)) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "status" };
  }
  if (bundle.completeness !== "complete" && bundle.completeness !== "incomplete") {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "completeness" };
  }
  if (typeof bundle.version !== "number" || bundle.version < 1) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "version" };
  }
  if (!bundle.createdAt) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "created_at" };
  }
  if (!bundle.provenance?.provenanceRecordId) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "provenance" };
  }
  if (!Array.isArray(bundle.evidenceRefs)) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "evidence_refs" };
  }
  for (const ref of bundle.evidenceRefs) {
    if (!isEvidenceId(ref)) {
      return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "evidence_ref_id" };
    }
  }
  const unique = new Set(bundle.evidenceRefs);
  if (unique.size !== bundle.evidenceRefs.length) {
    return {
      detailCode: "REVIEW_BUNDLE_EVIDENCE_DUPLICATE",
      reason: "duplicate_evidence_refs",
    };
  }
  if (!Array.isArray(bundle.claimEvaluationRefs)) {
    return {
      detailCode: "REVIEW_BUNDLE_INVALID",
      reason: "claim_evaluation_refs",
    };
  }
  // D2: claimEvaluationRefs must stay empty (no ClaimEvaluation created).
  if (bundle.claimEvaluationRefs.length > 0) {
    return {
      detailCode: "REVIEW_BUNDLE_INVALID",
      reason: "claim_evaluation_refs_forbidden_in_d2",
    };
  }

  if (bundle.synthesisOnly && bundle.completeness === "complete") {
    return {
      detailCode: "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT",
      reason: "synthesis_only_complete",
    };
  }

  if (POST_DRAFT_STATUSES.has(bundle.status) && !bundle.frozenAt) {
    return {
      detailCode: "REVIEW_BUNDLE_NOT_FROZEN",
      reason: "frozen_at_required",
    };
  }

  if (bundle.status === "under_review" && !bundle.reviewStartedAt) {
    return {
      detailCode: "REVIEW_BUNDLE_INVALID",
      reason: "review_started_at_required",
    };
  }

  if (bundle.status === "accepted") {
    if (bundle.completeness !== "complete" || bundle.synthesisOnly) {
      return {
        detailCode: "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT",
        reason: "accepted_requires_complete_non_synthesis",
      };
    }
    if (!bundle.validatedAt || !bundle.reviewer) {
      return {
        detailCode: "REVIEW_BUNDLE_INVALID",
        reason: "accepted_requires_validated_at_reviewer",
      };
    }
  }

  if (
    (bundle.status === "rejected" || bundle.status === "accepted") &&
    bundle.synthesisOnly
  ) {
    return {
      detailCode: "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT",
      reason: "verdict_synthesis_only",
    };
  }

  if (
    (bundle.status === "rejected" || bundle.status === "accepted") &&
    (!bundle.validatedAt || !bundle.reviewer)
  ) {
    return {
      detailCode: "REVIEW_BUNDLE_INVALID",
      reason: "verdict_requires_validated_at_reviewer",
    };
  }

  if (bundle.status === "incomplete" && bundle.completeness !== "incomplete") {
    return {
      detailCode: "REVIEW_BUNDLE_INCOMPLETE",
      reason: "incomplete_status_requires_incomplete_completeness",
    };
  }

  if (containsForbiddenSecret(bundle.completionReason)) {
    return {
      detailCode: "REVIEW_BUNDLE_SECRET_FORBIDDEN",
      reason: "secret_in_completion_reason",
    };
  }
  if (containsForbiddenSecret(bundle.reopenReason)) {
    return {
      detailCode: "REVIEW_BUNDLE_SECRET_FORBIDDEN",
      reason: "secret_in_reopen_reason",
    };
  }
  if (containsForbiddenSecret(bundle.reviewer?.displayName)) {
    return {
      detailCode: "REVIEW_BUNDLE_SECRET_FORBIDDEN",
      reason: "secret_in_reviewer",
    };
  }
  if (bundle.reservations) {
    for (const r of bundle.reservations) {
      if (containsForbiddenSecret(r)) {
        return {
          detailCode: "REVIEW_BUNDLE_SECRET_FORBIDDEN",
          reason: "secret_in_reservation",
        };
      }
    }
  }

  return null;
}

export function isTerminalReviewStatus(status: ReviewBundleStatus): boolean {
  return TERMINAL_REVIEW_STATUSES.has(status);
}
