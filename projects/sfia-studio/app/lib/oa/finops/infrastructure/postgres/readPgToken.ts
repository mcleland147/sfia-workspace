/**
 * FinOps T1 — controlled PostgreSQL token reading (safe integer contract).
 * Tokens remain JavaScript number; never silently Number() a bigint out of range.
 */

import { FINOPS_MAX_SAFE_TOKEN } from "../../application/safeTokens";
import type { SanitizedFinOpsCaptureError } from "../../application/types";

export type ReadPgTokenResult =
  | { readonly ok: true; readonly value: number | null }
  | { readonly ok: false; readonly error: SanitizedFinOpsCaptureError };

/**
 * Accept null; accept string or number; require non-negative safe integer.
 * Fail sanitized / non-retryable when DB value is outside the T1 contract.
 */
export function readPgTokenField(raw: unknown): ReadPgTokenResult {
  if (raw === null || raw === undefined) {
    return { ok: true, value: null };
  }

  let asNumber: number;
  if (typeof raw === "number") {
    asNumber = raw;
  } else if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (!/^\d+$/.test(trimmed)) {
      return {
        ok: false,
        error: {
          code: "FINOPS_VALIDATION_FAILED",
          message: "FinOps ledger rejected invalid usage values",
          retryable: false,
          technicalDetailsRedacted: true,
        },
      };
    }
    // Reject strings that exceed MAX_SAFE_INTEGER before Number() loses precision.
    if (
      trimmed.length > String(FINOPS_MAX_SAFE_TOKEN).length ||
      (trimmed.length === String(FINOPS_MAX_SAFE_TOKEN).length &&
        trimmed > String(FINOPS_MAX_SAFE_TOKEN))
    ) {
      return {
        ok: false,
        error: {
          code: "FINOPS_VALIDATION_FAILED",
          message: "FinOps ledger rejected invalid usage values",
          retryable: false,
          technicalDetailsRedacted: true,
        },
      };
    }
    asNumber = Number(trimmed);
  } else if (typeof raw === "bigint") {
    const max = BigInt(FINOPS_MAX_SAFE_TOKEN);
    if (raw < BigInt(0) || raw > max) {
      return {
        ok: false,
        error: {
          code: "FINOPS_VALIDATION_FAILED",
          message: "FinOps ledger rejected invalid usage values",
          retryable: false,
          technicalDetailsRedacted: true,
        },
      };
    }
    asNumber = Number(raw);
  } else {
    return {
      ok: false,
      error: {
        code: "FINOPS_VALIDATION_FAILED",
        message: "FinOps ledger rejected invalid usage values",
        retryable: false,
        technicalDetailsRedacted: true,
      },
    };
  }

  if (
    !Number.isFinite(asNumber) ||
    asNumber < 0 ||
    !Number.isSafeInteger(asNumber)
  ) {
    return {
      ok: false,
      error: {
        code: "FINOPS_VALIDATION_FAILED",
        message: "FinOps ledger rejected invalid usage values",
        retryable: false,
        technicalDetailsRedacted: true,
      },
    };
  }

  return { ok: true, value: asNumber };
}
