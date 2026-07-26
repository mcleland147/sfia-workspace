import type {
  EvidenceDetailCode,
  EvidenceModeledErrorCode,
  EvidenceStructuredError,
} from "./types";

const DETAIL_TO_MODELED: Record<EvidenceDetailCode, EvidenceModeledErrorCode> = {
  EVIDENCE_INVALID: "VALIDATION_FAILED",
  EVIDENCE_NOT_FOUND: "STATE_CONFLICT",
  EVIDENCE_ALREADY_EXISTS: "STATE_CONFLICT",
  EVIDENCE_SOURCE_REQUIRED: "VALIDATION_FAILED",
  EVIDENCE_BINDING_REQUIRED: "VALIDATION_FAILED",
  EVIDENCE_DIGEST_REQUIRED: "VALIDATION_FAILED",
  EVIDENCE_UNAVAILABLE: "STATE_CONFLICT",
  EVIDENCE_SECRET_FORBIDDEN: "AUTHORITY_DENIED",
  EVIDENCE_INTEGRITY_MISMATCH: "VALIDATION_FAILED",
  EVIDENCE_VERIFIED_FORBIDDEN: "VALIDATION_FAILED",
  ATTEMPT_NOT_FOUND: "STATE_CONFLICT",
  ATTEMPT_RESULT_UNAVAILABLE: "STATE_CONFLICT",
  ATTEMPT_STATUS_REFUSED: "STATE_CONFLICT",
  VERSION_CONFLICT: "STATE_CONFLICT",
  CONCURRENT_MODIFICATION: "STATE_CONFLICT",
  IDEMPOTENCY_CONFLICT: "STATE_CONFLICT",
  EVIDENCE_PERSISTENCE_FAILED: "STATE_CONFLICT",
  PAYLOAD_METADATA_ERROR: "STATE_CONFLICT",
};

/** Safe operator-facing messages — never echo payloads, secrets or Evidence content. */
const SAFE_MESSAGES: Record<EvidenceDetailCode, string> = {
  EVIDENCE_INVALID: "Evidence input is invalid.",
  EVIDENCE_NOT_FOUND: "Evidence was not found.",
  EVIDENCE_ALREADY_EXISTS: "Evidence already exists.",
  EVIDENCE_SOURCE_REQUIRED: "Evidence source is required.",
  EVIDENCE_BINDING_REQUIRED: "At least one structural Evidence binding is required.",
  EVIDENCE_DIGEST_REQUIRED: "Evidence digest is required for this operation.",
  EVIDENCE_UNAVAILABLE: "Evidence is unavailable.",
  EVIDENCE_SECRET_FORBIDDEN: "Secrets or tokens are forbidden in Evidence metadata.",
  EVIDENCE_INTEGRITY_MISMATCH: "Evidence integrity digest mismatch.",
  EVIDENCE_VERIFIED_FORBIDDEN:
    "Evidence cannot be registered or ingested as verified without VerifyEvidenceIntegrity.",
  ATTEMPT_NOT_FOUND: "Execution attempt was not found.",
  ATTEMPT_RESULT_UNAVAILABLE:
    "Execution attempt has no exploitable technical result reference.",
  ATTEMPT_STATUS_REFUSED:
    "Execution attempt status is not accepted for Evidence ingestion.",
  VERSION_CONFLICT: "Evidence version conflict.",
  CONCURRENT_MODIFICATION: "Evidence concurrent modification conflict.",
  IDEMPOTENCY_CONFLICT: "Evidence idempotency key conflicts with a different command.",
  EVIDENCE_PERSISTENCE_FAILED: "Evidence persistence failed.",
  PAYLOAD_METADATA_ERROR: "Evidence payload metadata probe failed.",
};

const RETRYABLE: ReadonlySet<EvidenceDetailCode> = new Set([
  "VERSION_CONFLICT",
  "CONCURRENT_MODIFICATION",
  "EVIDENCE_PERSISTENCE_FAILED",
  "PAYLOAD_METADATA_ERROR",
]);

export function createEvidenceError(input: {
  detailCode: EvidenceDetailCode;
  timestamp: string;
  correlationId?: string;
  evidenceId?: string;
  executionAttemptId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  internalCauseRef?: string;
  retryable?: boolean;
}): EvidenceStructuredError {
  const detailCode = input.detailCode;
  return {
    code: DETAIL_TO_MODELED[detailCode],
    detailCode,
    message: SAFE_MESSAGES[detailCode],
    severity:
      detailCode === "EVIDENCE_SECRET_FORBIDDEN" ? "critical" : "error",
    retryable: input.retryable ?? RETRYABLE.has(detailCode),
    blocking: true,
    recoverable: detailCode !== "EVIDENCE_SECRET_FORBIDDEN",
    domain: "F",
    timestamp: input.timestamp,
    correlationId: input.correlationId,
    evidenceId: input.evidenceId,
    executionAttemptId: input.executionAttemptId,
    expectedVersion: input.expectedVersion,
    currentVersion: input.currentVersion,
    internalCauseRef: input.internalCauseRef,
  };
}

/** Thrown by the repository so use-cases can map detail codes fail-closed. */
export class EvidenceDomainError extends Error {
  readonly detailCode: EvidenceDetailCode;
  readonly expectedVersion?: number;
  readonly currentVersion?: number;

  constructor(
    detailCode: EvidenceDetailCode,
    internalCauseRef: string,
    versions?: { expectedVersion?: number; currentVersion?: number },
  ) {
    super(internalCauseRef);
    this.name = "EvidenceDomainError";
    this.detailCode = detailCode;
    this.expectedVersion = versions?.expectedVersion;
    this.currentVersion = versions?.currentVersion;
  }
}

export function isEvidenceDomainError(
  value: unknown,
): value is EvidenceDomainError {
  return value instanceof EvidenceDomainError;
}
