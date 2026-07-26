/**
 * ClaimEvaluation invariants — mirrors claim-evaluation.schema.json 0.1.0-oa.
 */
import {
  containsForbiddenSecret,
  isEvidenceId,
  isOaIdentifier,
} from "./invariants";
import { isReviewBundleId } from "./reviewBundleInvariants";
import type {
  ClaimCriticality,
  ClaimEvaluation,
  ClaimEvaluationDetailCode,
  ClaimEvaluationMethod,
  ClaimEvaluationStatus,
  ClaimType,
} from "./claimEvaluationTypes";

export type ClaimInvariantViolation = {
  detailCode: ClaimEvaluationDetailCode;
  reason: string;
};

export const CLAIM_TYPES: ReadonlySet<ClaimType> = new Set([
  "technique",
  "conformite",
  "qualite",
  "securite",
  "maturite_support",
]);

export const CLAIM_CRITICALITIES: ReadonlySet<ClaimCriticality> = new Set([
  "non_critical",
  "critical",
  "structural",
]);

export const CLAIM_METHODS: ReadonlySet<ClaimEvaluationMethod> = new Set([
  "deterministic",
  "assisted",
  "human_review",
]);

export const CLAIM_STATUSES: ReadonlySet<ClaimEvaluationStatus> = new Set([
  "pending",
  "evaluating",
  "pass",
  "fail",
  "not_proven",
  "waived",
  "disputed",
]);

export function isClaimEvaluationId(value: unknown): value is string {
  return isOaIdentifier(value) && value.startsWith("clm:");
}

export { isReviewBundleId } from "./reviewBundleInvariants";

export function sortEvidenceIds(ids: string[]): string[] {
  return [...ids].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
}

export function validateClaimEvaluationShape(
  claim: ClaimEvaluation,
): ClaimInvariantViolation | null {
  if (claim.schemaVersion !== "0.1.0-oa") {
    return { detailCode: "CLAIM_EVALUATION_INVALID", reason: "schema_version" };
  }
  if (!isClaimEvaluationId(claim.claimEvaluationId)) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "claim_evaluation_id",
    };
  }
  if (!CLAIM_TYPES.has(claim.claimType)) {
    return { detailCode: "CLAIM_EVALUATION_INVALID", reason: "claim_type" };
  }
  if (
    typeof claim.claimStatement !== "string" ||
    claim.claimStatement.length < 1 ||
    claim.claimStatement.length > 2000
  ) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "claim_statement",
    };
  }
  if (containsForbiddenSecret(claim.claimStatement)) {
    return {
      detailCode: "CLAIM_SECRET_FORBIDDEN",
      reason: "secret_in_claim_statement",
    };
  }
  if (!CLAIM_CRITICALITIES.has(claim.criticality)) {
    return { detailCode: "CLAIM_EVALUATION_INVALID", reason: "criticality" };
  }
  if (!CLAIM_METHODS.has(claim.evaluationMethod)) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "evaluation_method",
    };
  }
  if (!CLAIM_STATUSES.has(claim.status)) {
    return { detailCode: "CLAIM_EVALUATION_INVALID", reason: "status" };
  }
  if (!isReviewBundleId(claim.reviewBundleId)) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "review_bundle_id",
    };
  }
  if (
    typeof claim.reviewBundleVersion !== "number" ||
    claim.reviewBundleVersion < 1
  ) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "review_bundle_version",
    };
  }
  if (typeof claim.version !== "number" || claim.version < 1) {
    return { detailCode: "CLAIM_EVALUATION_INVALID", reason: "occ_version" };
  }
  if (!Array.isArray(claim.requiredEvidenceRefs)) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "required_evidence_refs",
    };
  }
  for (const id of claim.requiredEvidenceRefs) {
    if (!isEvidenceId(id)) {
      return {
        detailCode: "CLAIM_EVALUATION_INVALID",
        reason: "required_evidence_id",
      };
    }
  }
  if (
    new Set(claim.requiredEvidenceRefs).size !==
    claim.requiredEvidenceRefs.length
  ) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "duplicate_required_evidence",
    };
  }
  if (!claim.proposedBy?.actorId || !claim.proposedAt) {
    return { detailCode: "CLAIM_EVALUATION_INVALID", reason: "proposed" };
  }
  if (!claim.provenance?.provenanceRecordId) {
    return { detailCode: "CLAIM_EVALUATION_INVALID", reason: "provenance" };
  }
  if (containsForbiddenSecret(claim.proposedBy.displayName)) {
    return { detailCode: "CLAIM_SECRET_FORBIDDEN", reason: "secret_in_actor" };
  }
  if (containsForbiddenSecret(claim.confirmedBy?.displayName)) {
    return {
      detailCode: "CLAIM_SECRET_FORBIDDEN",
      reason: "secret_in_confirmed_by",
    };
  }
  if (containsForbiddenSecret(claim.waiver?.reason)) {
    return {
      detailCode: "CLAIM_SECRET_FORBIDDEN",
      reason: "secret_in_waiver_reason",
    };
  }
  if (containsForbiddenSecret(claim.dispute?.reason)) {
    return {
      detailCode: "CLAIM_SECRET_FORBIDDEN",
      reason: "secret_in_dispute_reason",
    };
  }
  if (containsForbiddenSecret(claim.rejectionReason)) {
    return {
      detailCode: "CLAIM_SECRET_FORBIDDEN",
      reason: "secret_in_rejection_reason",
    };
  }

  if (claim.status === "pass") {
    if (
      !claim.requiredEvidenceRefs.length ||
      !claim.providedEvidenceRefs?.length ||
      !claim.evaluatedAt
    ) {
      return {
        detailCode: "CLAIM_REQUIRED_EVIDENCE_MISSING",
        reason: "pass_requires_evidence_and_evaluated_at",
      };
    }
    if (claim.criticality === "non_critical" && claim.evaluationMethod === "deterministic") {
      if (claim.confirmationAuthority !== "system_deterministic") {
        return {
          detailCode: "CLAIM_EVALUATION_INVALID",
          reason: "non_critical_deterministic_requires_system_authority",
        };
      }
    }
    if (claim.criticality === "critical") {
      if (
        claim.confirmationAuthority !== "authorized_human" ||
        !claim.confirmedBy ||
        !claim.confirmedAt
      ) {
        return {
          detailCode: "CLAIM_CONFIRMATION_REQUIRED",
          reason: "critical_pass_requires_human_confirm",
        };
      }
      if (
        claim.confirmedBy.role === "system" ||
        claim.confirmedBy.role === "agent"
      ) {
        return {
          detailCode: "CLAIM_AUTHORITY_FORBIDDEN",
          reason: "critical_system_or_agent_confirm",
        };
      }
      if (claim.confirmedBy.actorId === claim.proposedBy.actorId) {
        return {
          detailCode: "CLAIM_SELF_REVIEW_FORBIDDEN",
          reason: "critical_self_review",
        };
      }
    }
    if (claim.criticality === "structural") {
      if (
        claim.confirmationAuthority !== "morris" ||
        !claim.confirmedBy ||
        !claim.confirmedAt ||
        claim.confirmedBy.role !== "decision_maker"
      ) {
        return {
          detailCode: "CLAIM_AUTHORITY_FORBIDDEN",
          reason: "structural_requires_morris",
        };
      }
    }
  }

  if (claim.status === "waived") {
    if (!claim.waiver) {
      return {
        detailCode: "CLAIM_EVALUATION_INVALID",
        reason: "waived_requires_waiver",
      };
    }
    if (
      claim.waiver.authorizedBy.role === "system" ||
      claim.waiver.authorizedBy.role === "agent"
    ) {
      return {
        detailCode: "CLAIM_WAIVER_FORBIDDEN",
        reason: "waiver_system_or_agent",
      };
    }
    if (claim.waiver.reversible !== true) {
      return {
        detailCode: "CLAIM_EVALUATION_INVALID",
        reason: "waiver_must_be_reversible",
      };
    }
  }

  if (claim.status === "disputed" && !claim.dispute) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "disputed_requires_dispute",
    };
  }

  if (
    (claim.status === "fail" || claim.status === "not_proven") &&
    !claim.evaluatedAt
  ) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "terminal_requires_evaluated_at",
    };
  }

  return null;
}

/** Evidence can contribute to PASS only when verified + available + not stale. */
export function evidenceSupportsPass(input: {
  status: string;
  availability: string;
  freshness?: string;
}): boolean {
  if (input.availability !== "available") return false;
  if (input.status !== "verified") return false;
  if (input.freshness === "stale") return false;
  return true;
}
