/**
 * FinOps T0 — pure domain invariants (no hidden wall-clock, no Money arithmetic).
 */

import { createFinOpsError, FinOpsDomainError } from "./errors";
import type { FinOpsCostEvidenceClass, FinOpsPeriod } from "./types";

export type InvariantViolation = {
  readonly detailCode:
    | "FINOPS_INVALID_TIMESTAMP"
    | "FINOPS_INVALID_PERIOD"
    | "FINOPS_INVALID_TIMEZONE"
    | "FINOPS_UNKNOWN_AS_ZERO";
  readonly reason: string;
};

/**
 * ISO-8601 instant with Z or numeric offset.
 * Captures calendar/time components for strict round-trip validation.
 */
const ISO_INSTANT_RE =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,9}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;

function fractionToMilliseconds(fraction: string | undefined): number {
  if (fraction === undefined) {
    return 0;
  }
  const padded = `${fraction}000`.slice(0, 3);
  return Number(padded);
}

export function validateIsoTimestamp(
  instantIso: string,
): InvariantViolation | null {
  if (typeof instantIso !== "string" || instantIso.length === 0) {
    return {
      detailCode: "FINOPS_INVALID_TIMESTAMP",
      reason: "timestamp_empty_or_not_string",
    };
  }
  const match = ISO_INSTANT_RE.exec(instantIso);
  if (!match) {
    return {
      detailCode: "FINOPS_INVALID_TIMESTAMP",
      reason: "timestamp_not_iso_instant",
    };
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  const second = Number(match[6]);
  const fraction = match[7];
  const offsetSign = match[8];
  const offsetHour = match[9] !== undefined ? Number(match[9]) : undefined;
  const offsetMinute = match[10] !== undefined ? Number(match[10]) : undefined;
  const millis = fractionToMilliseconds(fraction);

  if (month < 1 || month > 12) {
    return {
      detailCode: "FINOPS_INVALID_TIMESTAMP",
      reason: "timestamp_invalid_calendar_components",
    };
  }
  if (hour < 0 || hour > 23) {
    return {
      detailCode: "FINOPS_INVALID_TIMESTAMP",
      reason: "timestamp_invalid_calendar_components",
    };
  }
  if (minute < 0 || minute > 59) {
    return {
      detailCode: "FINOPS_INVALID_TIMESTAMP",
      reason: "timestamp_invalid_calendar_components",
    };
  }
  if (second < 0 || second > 59) {
    return {
      detailCode: "FINOPS_INVALID_TIMESTAMP",
      reason: "timestamp_invalid_calendar_components",
    };
  }

  if (offsetSign !== undefined) {
    if (
      offsetHour === undefined ||
      offsetMinute === undefined ||
      offsetHour < 0 ||
      offsetHour > 14 ||
      offsetMinute < 0 ||
      offsetMinute > 59 ||
      (offsetHour === 14 && offsetMinute !== 0)
    ) {
      return {
        detailCode: "FINOPS_INVALID_TIMESTAMP",
        reason: "timestamp_invalid_calendar_components",
      };
    }
  }

  // Round-trip calendar components without applying the offset (years 0000–0099 safe).
  const control = new Date(0);
  control.setUTCFullYear(year, month - 1, day);
  control.setUTCHours(hour, minute, second, millis);

  if (
    control.getUTCFullYear() !== year ||
    control.getUTCMonth() !== month - 1 ||
    control.getUTCDate() !== day ||
    control.getUTCHours() !== hour ||
    control.getUTCMinutes() !== minute ||
    control.getUTCSeconds() !== second ||
    control.getUTCMilliseconds() !== millis
  ) {
    return {
      detailCode: "FINOPS_INVALID_TIMESTAMP",
      reason: "timestamp_invalid_calendar_components",
    };
  }

  const ms = Date.parse(instantIso);
  if (!Number.isFinite(ms)) {
    return {
      detailCode: "FINOPS_INVALID_TIMESTAMP",
      reason: "timestamp_not_parseable",
    };
  }
  return null;
}

export function validateFinOpsPeriodShape(
  period: FinOpsPeriod,
): InvariantViolation | null {
  if (period.timezone !== "UTC") {
    return {
      detailCode: "FINOPS_INVALID_TIMEZONE",
      reason: "timezone_must_be_utc",
    };
  }
  const startViolation = validateIsoTimestamp(period.periodStart);
  if (startViolation) {
    return {
      detailCode: "FINOPS_INVALID_PERIOD",
      reason: "period_start_invalid",
    };
  }
  const endViolation = validateIsoTimestamp(period.periodEnd);
  if (endViolation) {
    return {
      detailCode: "FINOPS_INVALID_PERIOD",
      reason: "period_end_invalid",
    };
  }
  const startMs = Date.parse(period.periodStart);
  const endMs = Date.parse(period.periodEnd);
  if (!(startMs < endMs)) {
    return {
      detailCode: "FINOPS_INVALID_PERIOD",
      reason: "period_start_not_strictly_before_end",
    };
  }
  return null;
}

/**
 * Canonical FinOps UTC calendar-month period (internal; not public barrel).
 * Start = first UTC instant of month; end = first UTC instant of next month; Z + toISOString form.
 */
function validateCanonicalUtcMonthPeriod(
  period: FinOpsPeriod,
): InvariantViolation | null {
  if (!period.periodStart.endsWith("Z") || !period.periodEnd.endsWith("Z")) {
    return {
      detailCode: "FINOPS_INVALID_PERIOD",
      reason: "period_start_not_utc_month_boundary",
    };
  }

  const startMs = Date.parse(period.periodStart);
  const start = new Date(startMs);
  const canonicalStart = new Date(0);
  canonicalStart.setUTCFullYear(
    start.getUTCFullYear(),
    start.getUTCMonth(),
    1,
  );
  canonicalStart.setUTCHours(0, 0, 0, 0);
  const expectedStart = canonicalStart.toISOString();

  if (period.periodStart !== expectedStart) {
    return {
      detailCode: "FINOPS_INVALID_PERIOD",
      reason: "period_start_not_utc_month_boundary",
    };
  }

  const expectedEnd = new Date(0);
  expectedEnd.setUTCFullYear(
    start.getUTCFullYear(),
    start.getUTCMonth() + 1,
    1,
  );
  expectedEnd.setUTCHours(0, 0, 0, 0);
  if (period.periodEnd !== expectedEnd.toISOString()) {
    return {
      detailCode: "FINOPS_INVALID_PERIOD",
      reason: "period_end_not_next_utc_month_boundary",
    };
  }

  return null;
}

/**
 * Unknown evidence must never be silently treated as numeric zero.
 * Money representation remains deferred — this only guards assimilation.
 */
export function assertUnknownNotNumericZero(
  evidenceClass: FinOpsCostEvidenceClass,
  representedAs: unknown,
): InvariantViolation | null {
  if (evidenceClass !== "unknown") {
    return null;
  }
  if (
    representedAs === 0 ||
    representedAs === BigInt(0) ||
    representedAs === "0" ||
    representedAs === "0.0" ||
    representedAs === "0.00"
  ) {
    return {
      detailCode: "FINOPS_UNKNOWN_AS_ZERO",
      reason: "unknown_must_not_equal_numeric_zero",
    };
  }
  return null;
}

export function requireValidIsoTimestamp(instantIso: string): number {
  const violation = validateIsoTimestamp(instantIso);
  if (violation) {
    throw new FinOpsDomainError(
      createFinOpsError({
        detailCode: violation.detailCode,
        reason: violation.reason,
        timestamp: instantIso,
      }),
    );
  }
  return Date.parse(instantIso);
}

export function requireValidFinOpsPeriod(period: FinOpsPeriod): void {
  const shapeViolation = validateFinOpsPeriodShape(period);
  if (shapeViolation) {
    throw new FinOpsDomainError(
      createFinOpsError({
        detailCode: shapeViolation.detailCode,
        reason: shapeViolation.reason,
      }),
    );
  }
  const canonicalViolation = validateCanonicalUtcMonthPeriod(period);
  if (canonicalViolation) {
    throw new FinOpsDomainError(
      createFinOpsError({
        detailCode: canonicalViolation.detailCode,
        reason: canonicalViolation.reason,
      }),
    );
  }
}
