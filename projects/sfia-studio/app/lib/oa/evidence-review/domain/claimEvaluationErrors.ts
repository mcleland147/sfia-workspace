import type {
  ClaimEvaluationDetailCode,
  ClaimEvaluationModeledErrorCode,
  ClaimEvaluationStructuredError,
} from "./claimEvaluationTypes";

const SAFE_MESSAGES: Record<ClaimEvaluationDetailCode, string> = {
  CLAIM_EVALUATION_INVALID: "Claim evaluation request is invalid.",
  CLAIM_EVALUATION_NOT_FOUND: "Claim evaluation was not found.",
  CLAIM_EVALUATION_ALREADY_EXISTS: "Claim evaluation already exists.",
  CLAIM_EVALUATION_INVALID_STATE: "Claim evaluation is not in a valid state.",
  CLAIM_EVALUATION_ALREADY_CONFIRMED: "Claim evaluation is already confirmed.",
  CLAIM_EVALUATION_SUPERSEDED: "Claim evaluation has been superseded.",
  CLAIM_REQUIRED_EVIDENCE_MISSING: "Required evidence is missing for PASS.",
  CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE:
    "Evidence is not in the frozen ReviewBundle snapshot.",
  CLAIM_EVIDENCE_VERSION_MISMATCH: "Evidence version does not match snapshot.",
  CLAIM_EVIDENCE_UNAVAILABLE: "Evidence is unavailable and cannot support PASS.",
  CLAIM_EVIDENCE_NOT_VERIFIED: "Evidence is not verified and cannot support PASS.",
  CLAIM_REVIEW_BUNDLE_INVALID: "ReviewBundle is invalid for claim evaluation.",
  CLAIM_REVIEW_BUNDLE_VERSION_MISMATCH:
    "ReviewBundle version does not match the bound frozen version.",
  CLAIM_CONFIRMATION_REQUIRED: "Human or Morris confirmation is required.",
  CLAIM_AUTHORITY_FORBIDDEN: "Actor is not authorized for this claim action.",
  CLAIM_SELF_REVIEW_FORBIDDEN: "Critical self-review confirmation is forbidden.",
  CLAIM_WAIVER_FORBIDDEN: "Waiver is forbidden for this actor or state.",
  CLAIM_DISPUTED: "Claim evaluation is disputed.",
  CLAIM_SECRET_FORBIDDEN: "Secrets or tokens are forbidden in claim metadata.",
  REVIEW_BUNDLE_NOT_FOUND: "ReviewBundle was not found.",
  VERSION_CONFLICT: "Optimistic concurrency conflict on claim evaluation.",
  CONCURRENT_MODIFICATION: "Concurrent modification rejected.",
  IDEMPOTENCY_CONFLICT: "Idempotency key reused with a different command.",
  CLAIM_EVALUATION_PERSISTENCE_FAILED: "Claim evaluation persistence failed.",
};

export class ClaimEvaluationDomainError extends Error {
  readonly detailCode: ClaimEvaluationDetailCode;
  readonly expectedVersion?: number;
  readonly currentVersion?: number;

  constructor(
    detailCode: ClaimEvaluationDetailCode,
    message: string,
    extra?: { expectedVersion?: number; currentVersion?: number },
  ) {
    super(message);
    this.name = "ClaimEvaluationDomainError";
    this.detailCode = detailCode;
    this.expectedVersion = extra?.expectedVersion;
    this.currentVersion = extra?.currentVersion;
  }
}

export function isClaimEvaluationDomainError(
  err: unknown,
): err is ClaimEvaluationDomainError {
  return err instanceof ClaimEvaluationDomainError;
}

export function modeledCodeFor(
  detailCode: ClaimEvaluationDetailCode,
): ClaimEvaluationModeledErrorCode {
  if (
    detailCode === "CLAIM_AUTHORITY_FORBIDDEN" ||
    detailCode === "CLAIM_SELF_REVIEW_FORBIDDEN" ||
    detailCode === "CLAIM_WAIVER_FORBIDDEN"
  ) {
    return "AUTHORITY_DENIED";
  }
  if (
    detailCode === "VERSION_CONFLICT" ||
    detailCode === "CONCURRENT_MODIFICATION" ||
    detailCode === "CLAIM_EVALUATION_INVALID_STATE" ||
    detailCode === "CLAIM_EVALUATION_ALREADY_CONFIRMED" ||
    detailCode === "CLAIM_DISPUTED" ||
    detailCode === "IDEMPOTENCY_CONFLICT"
  ) {
    return "STATE_CONFLICT";
  }
  return "VALIDATION_FAILED";
}

export function createClaimEvaluationError(input: {
  detailCode: ClaimEvaluationDetailCode;
  timestamp: string;
  correlationId?: string;
  claimEvaluationId?: string;
  reviewBundleId?: string;
  evidenceId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  internalCauseRef?: string;
}): ClaimEvaluationStructuredError {
  return {
    code: modeledCodeFor(input.detailCode),
    detailCode: input.detailCode,
    message: SAFE_MESSAGES[input.detailCode],
    severity:
      input.detailCode === "CLAIM_AUTHORITY_FORBIDDEN" ||
      input.detailCode === "CLAIM_SELF_REVIEW_FORBIDDEN"
        ? "critical"
        : "error",
    retryable:
      input.detailCode === "VERSION_CONFLICT" ||
      input.detailCode === "CONCURRENT_MODIFICATION" ||
      input.detailCode === "CLAIM_EVALUATION_PERSISTENCE_FAILED",
    blocking: true,
    recoverable: input.detailCode === "VERSION_CONFLICT",
    domain: "F",
    timestamp: input.timestamp,
    correlationId: input.correlationId,
    claimEvaluationId: input.claimEvaluationId,
    reviewBundleId: input.reviewBundleId,
    evidenceId: input.evidenceId,
    expectedVersion: input.expectedVersion,
    currentVersion: input.currentVersion,
    internalCauseRef: input.internalCauseRef,
  };
}
