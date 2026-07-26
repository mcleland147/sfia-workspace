/**
 * MaturityAssessment errors — safe messages, refs-only.
 */
import type {
  MaturityDetailCode,
  MaturityModeledErrorCode,
  MaturityStructuredError,
} from "./maturityAssessmentTypes";

const SAFE_MESSAGES: Record<MaturityDetailCode, string> = {
  MATURITY_ASSESSMENT_INVALID: "Maturity assessment request is invalid.",
  MATURITY_ASSESSMENT_NOT_FOUND: "Maturity assessment was not found.",
  MATURITY_ASSESSMENT_ALREADY_EXISTS: "Maturity assessment already exists.",
  MATURITY_INVALID_STATE: "Maturity assessment is not in a valid state.",
  MATURITY_ALREADY_CONFIRMED: "Maturity assessment is already confirmed.",
  MATURITY_SUPERSEDED: "Maturity assessment has been superseded.",
  MATURITY_CLAIM_NOT_FOUND: "Claim evaluation was not found for maturity.",
  MATURITY_CLAIM_VERSION_MISMATCH:
    "Claim evaluation version does not match the bound version.",
  MATURITY_CLAIM_NOT_ELIGIBLE:
    "Claim evaluation is not eligible for positive maturity.",
  MATURITY_CLAIM_DISPUTED: "Disputed claim cannot contribute positively.",
  MATURITY_CLAIM_SUPERSEDED: "Superseded claim cannot contribute positively.",
  MATURITY_CLAIM_WAIVED: "Waived claim does not count as PASS for maturity.",
  MATURITY_CONFIRMATION_REQUIRED: "Human or Morris confirmation is required.",
  MATURITY_AUTHORITY_FORBIDDEN:
    "Actor is not authorized for this maturity action.",
  MATURITY_SELF_REVIEW_FORBIDDEN:
    "Self-review confirmation of maturity is forbidden.",
  MATURITY_BLOCKED_BY_RESERVATION:
    "HARD blocking reservation prevents maturity confirmation.",
  MATURITY_AUTO_PROMOTION_FORBIDDEN: "Auto-promotion of maturity is forbidden.",
  MATURITY_DOWNGRADE_FORBIDDEN: "Maturity downgrade is forbidden.",
  MATURITY_DOWNGRADE_REQUIRED: "Explicit maturity downgrade is required.",
  MATURITY_SECRET_FORBIDDEN:
    "Secrets or tokens are forbidden in maturity metadata.",
  VERSION_CONFLICT: "Optimistic concurrency conflict on maturity assessment.",
  CONCURRENT_MODIFICATION: "Concurrent modification rejected.",
  IDEMPOTENCY_CONFLICT: "Idempotency key reused with a different command.",
  MATURITY_PERSISTENCE_FAILED: "Maturity assessment persistence failed.",
};

export class MaturityAssessmentDomainError extends Error {
  readonly detailCode: MaturityDetailCode;
  readonly expectedVersion?: number;
  readonly currentVersion?: number;

  constructor(
    detailCode: MaturityDetailCode,
    message: string,
    extra?: { expectedVersion?: number; currentVersion?: number },
  ) {
    super(message);
    this.name = "MaturityAssessmentDomainError";
    this.detailCode = detailCode;
    this.expectedVersion = extra?.expectedVersion;
    this.currentVersion = extra?.currentVersion;
  }
}

export function isMaturityAssessmentDomainError(
  err: unknown,
): err is MaturityAssessmentDomainError {
  return err instanceof MaturityAssessmentDomainError;
}

export function modeledCodeForMaturity(
  detailCode: MaturityDetailCode,
): MaturityModeledErrorCode {
  if (detailCode === "MATURITY_BLOCKED_BY_RESERVATION") {
    return "MATURITY_BLOCKED_BY_RESERVATION";
  }
  if (detailCode === "MATURITY_CONFIRMATION_REQUIRED") {
    return "MATURITY_CONFIRMATION_REQUIRED";
  }
  if (detailCode === "MATURITY_AUTO_PROMOTION_FORBIDDEN") {
    return "MATURITY_AUTO_PROMOTION_FORBIDDEN";
  }
  if (
    detailCode === "MATURITY_DOWNGRADE_REQUIRED" ||
    detailCode === "MATURITY_DOWNGRADE_FORBIDDEN"
  ) {
    return "MATURITY_DOWNGRADE_REQUIRED";
  }
  if (
    detailCode === "MATURITY_AUTHORITY_FORBIDDEN" ||
    detailCode === "MATURITY_SELF_REVIEW_FORBIDDEN"
  ) {
    return "AUTHORITY_DENIED";
  }
  if (
    detailCode === "VERSION_CONFLICT" ||
    detailCode === "CONCURRENT_MODIFICATION" ||
    detailCode === "MATURITY_INVALID_STATE" ||
    detailCode === "MATURITY_ALREADY_CONFIRMED" ||
    detailCode === "MATURITY_SUPERSEDED" ||
    detailCode === "IDEMPOTENCY_CONFLICT"
  ) {
    return "STATE_CONFLICT";
  }
  return "VALIDATION_FAILED";
}

export function createMaturityAssessmentError(input: {
  detailCode: MaturityDetailCode;
  timestamp: string;
  correlationId?: string;
  maturityAssessmentId?: string;
  claimEvaluationId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  internalCauseRef?: string;
}): MaturityStructuredError {
  return {
    schemaVersion: "0.1.0-oa",
    errorCode: modeledCodeForMaturity(input.detailCode),
    detailCode: input.detailCode,
    message: SAFE_MESSAGES[input.detailCode],
    severity:
      input.detailCode === "MATURITY_SECRET_FORBIDDEN" ? "critical" : "error",
    recoverable: input.detailCode !== "MATURITY_SECRET_FORBIDDEN",
    timestamp: input.timestamp,
    correlationId: input.correlationId,
    maturityAssessmentId: input.maturityAssessmentId,
    claimEvaluationId: input.claimEvaluationId,
    expectedVersion: input.expectedVersion,
    currentVersion: input.currentVersion,
  };
}
