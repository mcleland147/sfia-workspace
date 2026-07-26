import type {
  ReviewBundleDetailCode,
  ReviewBundleModeledErrorCode,
  ReviewBundleStructuredError,
} from "./reviewBundleTypes";

const DETAIL_TO_MODELED: Record<
  ReviewBundleDetailCode,
  ReviewBundleModeledErrorCode
> = {
  REVIEW_BUNDLE_INVALID: "VALIDATION_FAILED",
  REVIEW_BUNDLE_NOT_FOUND: "STATE_CONFLICT",
  REVIEW_BUNDLE_ALREADY_EXISTS: "STATE_CONFLICT",
  REVIEW_BUNDLE_NOT_DRAFT: "STATE_CONFLICT",
  REVIEW_BUNDLE_NOT_FROZEN: "STATE_CONFLICT",
  REVIEW_BUNDLE_ALREADY_FROZEN: "STATE_CONFLICT",
  REVIEW_BUNDLE_NOT_UNDER_REVIEW: "STATE_CONFLICT",
  REVIEW_BUNDLE_INCOMPLETE: "VALIDATION_FAILED",
  REVIEW_BUNDLE_VERSION_MISMATCH: "STATE_CONFLICT",
  REVIEW_BUNDLE_EVIDENCE_REQUIRED: "VALIDATION_FAILED",
  REVIEW_BUNDLE_EVIDENCE_DUPLICATE: "VALIDATION_FAILED",
  REVIEW_BUNDLE_EVIDENCE_MISSING: "VALIDATION_FAILED",
  REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT: "VALIDATION_FAILED",
  REVIEW_BUNDLE_TERMINAL: "STATE_CONFLICT",
  REVIEW_BUNDLE_NOT_TERMINAL: "STATE_CONFLICT",
  REVIEW_BUNDLE_SECRET_FORBIDDEN: "AUTHORITY_DENIED",
  EVIDENCE_NOT_FOUND: "STATE_CONFLICT",
  VERSION_CONFLICT: "STATE_CONFLICT",
  CONCURRENT_MODIFICATION: "STATE_CONFLICT",
  IDEMPOTENCY_CONFLICT: "STATE_CONFLICT",
  REVIEW_BUNDLE_PERSISTENCE_FAILED: "STATE_CONFLICT",
};

const SAFE_MESSAGES: Record<ReviewBundleDetailCode, string> = {
  REVIEW_BUNDLE_INVALID: "Review bundle input is invalid.",
  REVIEW_BUNDLE_NOT_FOUND: "Review bundle was not found.",
  REVIEW_BUNDLE_ALREADY_EXISTS: "Review bundle already exists.",
  REVIEW_BUNDLE_NOT_DRAFT: "Review bundle is not in draft status.",
  REVIEW_BUNDLE_NOT_FROZEN: "Review bundle is not frozen.",
  REVIEW_BUNDLE_ALREADY_FROZEN: "Review bundle is already frozen.",
  REVIEW_BUNDLE_NOT_UNDER_REVIEW: "Review bundle is not under review.",
  REVIEW_BUNDLE_INCOMPLETE: "Review bundle completeness is incomplete.",
  REVIEW_BUNDLE_VERSION_MISMATCH: "Review bundle version mismatch.",
  REVIEW_BUNDLE_EVIDENCE_REQUIRED: "At least one Evidence reference is required.",
  REVIEW_BUNDLE_EVIDENCE_DUPLICATE: "Evidence reference is already attached.",
  REVIEW_BUNDLE_EVIDENCE_MISSING: "Evidence reference is not attached.",
  REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT:
    "Synthesis-only review bundle cannot be complete or accepted.",
  REVIEW_BUNDLE_TERMINAL: "Review bundle is already terminal.",
  REVIEW_BUNDLE_NOT_TERMINAL: "Review bundle is not in a terminal status.",
  REVIEW_BUNDLE_SECRET_FORBIDDEN:
    "Secrets or tokens are forbidden in review bundle metadata.",
  EVIDENCE_NOT_FOUND: "Evidence was not found.",
  VERSION_CONFLICT: "Review bundle version conflict.",
  CONCURRENT_MODIFICATION: "Review bundle concurrent modification conflict.",
  IDEMPOTENCY_CONFLICT:
    "Review bundle idempotency key conflicts with a different command.",
  REVIEW_BUNDLE_PERSISTENCE_FAILED: "Review bundle persistence failed.",
};

const RETRYABLE: ReadonlySet<ReviewBundleDetailCode> = new Set([
  "VERSION_CONFLICT",
  "CONCURRENT_MODIFICATION",
  "REVIEW_BUNDLE_PERSISTENCE_FAILED",
]);

export function createReviewBundleError(input: {
  detailCode: ReviewBundleDetailCode;
  timestamp: string;
  correlationId?: string;
  reviewBundleId?: string;
  evidenceId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  internalCauseRef?: string;
  retryable?: boolean;
}): ReviewBundleStructuredError {
  const detailCode = input.detailCode;
  return {
    code: DETAIL_TO_MODELED[detailCode],
    detailCode,
    message: SAFE_MESSAGES[detailCode],
    severity:
      detailCode === "REVIEW_BUNDLE_SECRET_FORBIDDEN" ? "critical" : "error",
    retryable: input.retryable ?? RETRYABLE.has(detailCode),
    blocking: true,
    recoverable: detailCode !== "REVIEW_BUNDLE_SECRET_FORBIDDEN",
    domain: "F",
    timestamp: input.timestamp,
    correlationId: input.correlationId,
    reviewBundleId: input.reviewBundleId,
    evidenceId: input.evidenceId,
    expectedVersion: input.expectedVersion,
    currentVersion: input.currentVersion,
    internalCauseRef: input.internalCauseRef,
  };
}

export class ReviewBundleDomainError extends Error {
  readonly detailCode: ReviewBundleDetailCode;
  readonly expectedVersion?: number;
  readonly currentVersion?: number;

  constructor(
    detailCode: ReviewBundleDetailCode,
    internalCauseRef: string,
    versions?: { expectedVersion?: number; currentVersion?: number },
  ) {
    super(internalCauseRef);
    this.name = "ReviewBundleDomainError";
    this.detailCode = detailCode;
    this.expectedVersion = versions?.expectedVersion;
    this.currentVersion = versions?.currentVersion;
  }
}

export function isReviewBundleDomainError(
  value: unknown,
): value is ReviewBundleDomainError {
  return value instanceof ReviewBundleDomainError;
}
