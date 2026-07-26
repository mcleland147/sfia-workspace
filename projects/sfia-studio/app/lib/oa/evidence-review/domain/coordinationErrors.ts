/**
 * D5 coordination errors — safe messages, refs-only.
 * Includes modeled T_A7_AUTO_LAUNCH_FORBIDDEN.
 */
import type {
  CoordinationDetailCode,
  CoordinationModeledErrorCode,
  CoordinationStructuredError,
} from "./coordinationTypes";

const SAFE_MESSAGES: Record<CoordinationDetailCode, string> = {
  COORDINATION_INVALID: "Coordination request is invalid.",
  COORDINATION_NO_SOURCES: "No evidence-review sources were provided.",
  COORDINATION_SOURCE_MISSING: "A required coordination source was not found.",
  COORDINATION_VERSION_MISMATCH:
    "A coordination source version does not match the requested binding.",
  COORDINATION_INCONSISTENT:
    "Cross-aggregate bindings are inconsistent for coordination.",
  T_A7_AUTO_LAUNCH_FORBIDDEN:
    "T-A6 must not auto-launch T-A7 or the next cycle.",
  COORDINATION_SECRET_FORBIDDEN:
    "Secrets or tokens are forbidden in coordination metadata.",
};

export class CoordinationDomainError extends Error {
  readonly detailCode: CoordinationDetailCode;

  constructor(detailCode: CoordinationDetailCode, message: string) {
    super(message);
    this.name = "CoordinationDomainError";
    this.detailCode = detailCode;
  }
}

export function isCoordinationDomainError(
  err: unknown,
): err is CoordinationDomainError {
  return err instanceof CoordinationDomainError;
}

export function modeledCodeForCoordination(
  detailCode: CoordinationDetailCode,
): CoordinationModeledErrorCode {
  if (detailCode === "T_A7_AUTO_LAUNCH_FORBIDDEN") {
    return "T_A7_AUTO_LAUNCH_FORBIDDEN";
  }
  if (detailCode === "COORDINATION_INCONSISTENT") {
    return "STATE_CONFLICT";
  }
  return "VALIDATION_FAILED";
}

export function createCoordinationError(input: {
  detailCode: CoordinationDetailCode;
  timestamp: string;
  correlationId?: string;
  projectId?: string;
  internalCauseRef?: string;
}): CoordinationStructuredError {
  return {
    schemaVersion: "0.1.0-oa",
    errorCode: modeledCodeForCoordination(input.detailCode),
    detailCode: input.detailCode,
    message: SAFE_MESSAGES[input.detailCode],
    severity:
      input.detailCode === "T_A7_AUTO_LAUNCH_FORBIDDEN" ? "critical" : "error",
    recoverable: input.detailCode !== "T_A7_AUTO_LAUNCH_FORBIDDEN",
    timestamp: input.timestamp,
    correlationId: input.correlationId,
    projectId: input.projectId,
  };
}
