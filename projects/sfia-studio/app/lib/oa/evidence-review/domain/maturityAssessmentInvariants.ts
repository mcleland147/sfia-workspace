/**
 * MaturityAssessment invariants — mirrors maturity-assessment.schema.json 0.2.0-oa.
 */
import { containsForbiddenSecret, isOaIdentifier } from "./invariants";
import type {
  MaturityAssessment,
  MaturityDetailCode,
  MaturityLevel,
} from "./maturityAssessmentTypes";
import { MATURITY_LEVEL_ORDER } from "./maturityAssessmentTypes";

export type MaturityInvariantViolation = {
  detailCode: MaturityDetailCode;
  reason: string;
};

export const MATURITY_LEVELS: ReadonlySet<MaturityLevel> = new Set(
  MATURITY_LEVEL_ORDER,
);

export const MATURITY_STATUSES = new Set([
  "proposed",
  "confirmed",
  "rejected",
  "superseded",
  "blocked",
] as const);

export function isMaturityAssessmentId(value: string): boolean {
  return isOaIdentifier(value) && value.startsWith("mat:");
}

export function isProjectId(value: string): boolean {
  return isOaIdentifier(value) && value.startsWith("prj:");
}

export function levelRank(level: MaturityLevel): number {
  return MATURITY_LEVEL_ORDER.indexOf(level);
}

export function minLevel(
  a: MaturityLevel,
  b: MaturityLevel,
): MaturityLevel {
  return levelRank(a) <= levelRank(b) ? a : b;
}

export function validateMaturityAssessmentShape(
  assessment: MaturityAssessment,
): MaturityInvariantViolation | null {
  if (assessment.schemaVersion !== "0.2.0-oa") {
    return {
      detailCode: "MATURITY_ASSESSMENT_INVALID",
      reason: "schema_version",
    };
  }
  if (!isMaturityAssessmentId(assessment.maturityAssessmentId)) {
    return {
      detailCode: "MATURITY_ASSESSMENT_INVALID",
      reason: "maturity_assessment_id",
    };
  }
  if (!isProjectId(assessment.projectId)) {
    return {
      detailCode: "MATURITY_ASSESSMENT_INVALID",
      reason: "project_id",
    };
  }
  if (!assessment.subjectRef || !isOaIdentifier(assessment.subjectRef)) {
    return {
      detailCode: "MATURITY_ASSESSMENT_INVALID",
      reason: "subject_ref",
    };
  }
  if (!MATURITY_LEVELS.has(assessment.proposedLevel)) {
    return {
      detailCode: "MATURITY_ASSESSMENT_INVALID",
      reason: "proposed_level",
    };
  }
  if (!MATURITY_STATUSES.has(assessment.status)) {
    return {
      detailCode: "MATURITY_ASSESSMENT_INVALID",
      reason: "status",
    };
  }
  if (assessment.autoPromoted !== false) {
    return {
      detailCode: "MATURITY_AUTO_PROMOTION_FORBIDDEN",
      reason: "auto_promoted_must_be_false",
    };
  }
  if (
    assessment.status === "confirmed" &&
    (!assessment.confirmedLevel ||
      !assessment.confirmedBy ||
      !assessment.confirmedAt)
  ) {
    return {
      detailCode: "MATURITY_CONFIRMATION_REQUIRED",
      reason: "confirmed_requires_fields",
    };
  }
  if (
    assessment.status === "confirmed" &&
    (assessment.confirmedBy?.role === "system" ||
      assessment.confirmedBy?.role === "agent")
  ) {
    return {
      detailCode: "MATURITY_AUTHORITY_FORBIDDEN",
      reason: "confirmed_by_system_or_agent",
    };
  }
  if (
    assessment.status === "confirmed" &&
    (assessment.blockingReservationRefs?.length ?? 0) > 0
  ) {
    return {
      detailCode: "MATURITY_BLOCKED_BY_RESERVATION",
      reason: "confirmed_with_hard_reserve",
    };
  }
  if (
    assessment.status === "blocked" &&
    (assessment.blockingReservationRefs?.length ?? 0) < 1
  ) {
    return {
      detailCode: "MATURITY_ASSESSMENT_INVALID",
      reason: "blocked_requires_reservation",
    };
  }
  if (
    assessment.status === "superseded" &&
    !assessment.supersedesMaturityAssessmentId
  ) {
    return {
      detailCode: "MATURITY_ASSESSMENT_INVALID",
      reason: "superseded_requires_link",
    };
  }
  if (
    assessment.supersedesMaturityAssessmentId &&
    !isMaturityAssessmentId(assessment.supersedesMaturityAssessmentId)
  ) {
    return {
      detailCode: "MATURITY_ASSESSMENT_INVALID",
      reason: "supersedes_id",
    };
  }
  if (
    assessment.downgradeReason &&
    containsForbiddenSecret(assessment.downgradeReason)
  ) {
    return {
      detailCode: "MATURITY_SECRET_FORBIDDEN",
      reason: "secret_in_downgrade_reason",
    };
  }
  if (containsForbiddenSecret(assessment.proposedBy.displayName)) {
    return {
      detailCode: "MATURITY_SECRET_FORBIDDEN",
      reason: "secret_in_proposed_by",
    };
  }
  if (containsForbiddenSecret(assessment.confirmedBy?.displayName)) {
    return {
      detailCode: "MATURITY_SECRET_FORBIDDEN",
      reason: "secret_in_confirmed_by",
    };
  }
  if (!Array.isArray(assessment.claimBindings)) {
    return {
      detailCode: "MATURITY_ASSESSMENT_INVALID",
      reason: "claim_bindings_required",
    };
  }
  if (assessment.claimEvaluationRefs.length !== assessment.claimBindings.length) {
    return {
      detailCode: "MATURITY_ASSESSMENT_INVALID",
      reason: "claim_refs_bindings_mismatch",
    };
  }
  if (assessment.version < 1) {
    return {
      detailCode: "MATURITY_ASSESSMENT_INVALID",
      reason: "version",
    };
  }
  return null;
}
