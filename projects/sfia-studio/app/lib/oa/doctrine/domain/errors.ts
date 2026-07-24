import type {
  DoctrineDetailCode,
  DoctrineStructuredError,
  ModeledErrorCode,
  ProvenanceRecord,
} from "./types";

const DETAIL_TO_MODELED: Record<DoctrineDetailCode, ModeledErrorCode> = {
  DOCTRINE_UNRESOLVED: "DOCTRINE_UNRESOLVED",
  DOCTRINE_MANIFEST_INVALID: "DOCTRINE_UNRESOLVED",
  DOCTRINE_SCHEMA_MISMATCH: "DOCTRINE_UNRESOLVED",
  DOCTRINE_DIGEST_MISMATCH: "DOCTRINE_UNRESOLVED",
  DOCTRINE_SOURCE_FORBIDDEN: "DOCTRINE_UNRESOLVED",
  DOCTRINE_VERSION_UNSUPPORTED: "DOCTRINE_UNRESOLVED",
  CONTEXT_STALE: "CONTEXT_STALE",
  INTERNAL_RESOLUTION_ERROR: "DOCTRINE_UNRESOLVED",
};

const SAFE_MESSAGES: Record<DoctrineDetailCode, string> = {
  DOCTRINE_UNRESOLVED: "Doctrine package could not be resolved.",
  DOCTRINE_MANIFEST_INVALID: "Doctrine package manifest is invalid.",
  DOCTRINE_SCHEMA_MISMATCH: "Doctrine package schema validation failed.",
  DOCTRINE_DIGEST_MISMATCH: "Doctrine package digest mismatch.",
  DOCTRINE_SOURCE_FORBIDDEN: "Doctrine package source is forbidden.",
  DOCTRINE_VERSION_UNSUPPORTED: "Doctrine package version is unsupported.",
  CONTEXT_STALE: "Doctrine package is stale.",
  INTERNAL_RESOLUTION_ERROR: "Internal doctrine resolution error.",
};

export function mapDetailToModeledCode(
  detail: DoctrineDetailCode,
): ModeledErrorCode {
  return DETAIL_TO_MODELED[detail];
}

export function createDoctrineError(input: {
  detailCode: DoctrineDetailCode;
  timestamp: string;
  correlationId?: string;
  doctrinePackageId?: string;
  version?: string;
  expectedDigest?: string;
  observedDigest?: string;
  provenance?: ProvenanceRecord;
  internalCauseRef?: string;
  retryable?: boolean;
}): DoctrineStructuredError {
  const detailCode = input.detailCode;
  const severity =
    detailCode === "INTERNAL_RESOLUTION_ERROR" ? "error" : "critical";
  const retryable =
    input.retryable ??
    (detailCode === "DOCTRINE_UNRESOLVED" ||
      detailCode === "INTERNAL_RESOLUTION_ERROR");

  return {
    code: mapDetailToModeledCode(detailCode),
    detailCode,
    message: SAFE_MESSAGES[detailCode],
    severity,
    retryable,
    blocking: true,
    recoverable: detailCode !== "DOCTRINE_SOURCE_FORBIDDEN",
    domain: "B",
    correlationId: input.correlationId,
    doctrinePackageId: input.doctrinePackageId,
    version: input.version,
    expectedDigest: input.expectedDigest,
    observedDigest: input.observedDigest,
    provenance: input.provenance,
    timestamp: input.timestamp,
    internalCauseRef: input.internalCauseRef,
  };
}

export class DoctrineResolutionError extends Error {
  readonly structured: DoctrineStructuredError;

  constructor(structured: DoctrineStructuredError) {
    super(structured.message);
    this.name = "DoctrineResolutionError";
    this.structured = structured;
  }
}
