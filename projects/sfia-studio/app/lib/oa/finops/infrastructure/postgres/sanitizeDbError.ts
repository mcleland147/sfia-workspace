/**
 * FinOps T1 — sanitize PostgreSQL / pg / Node network errors.
 * Never expose host, SQL, secrets, or connection strings.
 */

import type { SanitizedFinOpsCaptureError } from "../../application/types";

/** PostgreSQL SQLSTATE codes treated as transient / unavailable. */
const TRANSIENT_SQLSTATES = new Set([
  "40001", // serialization_failure
  "40P01", // deadlock_detected
  "57P01", // admin_shutdown
  "57P02", // crash_shutdown
  "57P03", // cannot_connect_now
  "08000",
  "08003",
  "08006",
  "08001",
  "08004",
]);

/** Node.js network / socket codes treated as transient DB unavailability. */
const TRANSIENT_NODE_CODES = new Set([
  "ECONNREFUSED",
  "ECONNRESET",
  "ETIMEDOUT",
  "ENOTFOUND",
  "EHOSTUNREACH",
  "ENETUNREACH",
  "EPIPE",
]);

function readErrorCode(error: unknown): string | undefined {
  if (!error || typeof error !== "object") return undefined;
  if (
    "code" in error &&
    typeof (error as { code: unknown }).code === "string"
  ) {
    return (error as { code: string }).code;
  }
  return undefined;
}

export function sanitizeDbError(error: unknown): SanitizedFinOpsCaptureError {
  const code = readErrorCode(error);

  if (code === "23505") {
    return {
      code: "FINOPS_CAPTURE_FAILED",
      message: "FinOps capture failed",
      retryable: false,
      technicalDetailsRedacted: true,
    };
  }

  if (code === "23514") {
    return {
      code: "FINOPS_VALIDATION_FAILED",
      message: "FinOps ledger rejected invalid usage values",
      retryable: false,
      technicalDetailsRedacted: true,
    };
  }

  const transient =
    code !== undefined &&
    (TRANSIENT_SQLSTATES.has(code) || TRANSIENT_NODE_CODES.has(code));

  return {
    code: transient ? "FINOPS_DB_UNAVAILABLE" : "FINOPS_CAPTURE_FAILED",
    message: "FinOps capture failed",
    retryable: transient,
    technicalDetailsRedacted: true,
  };
}

export function assertNoSecretLeak(message: string): void {
  const lower = message.toLowerCase();
  if (
    lower.includes("password") ||
    lower.includes("postgres://") ||
    lower.includes("postgresql://") ||
    /:\d{2,5}\//.test(message)
  ) {
    throw new Error("Sanitized FinOps error must not leak connection details");
  }
}
