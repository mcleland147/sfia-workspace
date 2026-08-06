/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import * as FinOpsPublic from "@/lib/oa/finops";
import {
  assertUnknownNotNumericZero,
  computeUtcMonthPeriod,
  validateFinOpsPeriodShape,
  validateIsoTimestamp,
  type FinOpsPeriod,
} from "@/lib/oa/finops";
import {
  requireValidFinOpsPeriod,
  requireValidIsoTimestamp,
} from "@/lib/oa/finops/domain/invariants";
import { FinOpsDomainError } from "@/lib/oa/finops";

describe("FinOps T0 domain invariants", () => {
  it("accepts valid ISO instants with Z or offset", () => {
    expect(validateIsoTimestamp("2026-01-01T00:00:00.000Z")).toBeNull();
    expect(validateIsoTimestamp("2026-06-15T12:00:00.000+02:00")).toBeNull();
    expect(validateIsoTimestamp("2024-02-29T00:00:00.000Z")).toBeNull();
    expect(validateIsoTimestamp("2026-12-31T23:00:00.000-01:00")).toBeNull();
    expect(validateIsoTimestamp("2026-01-01T00:00:00.000+14:00")).toBeNull();
  });

  it("rejects impossible calendar dates by round-trip", () => {
    for (const iso of [
      "2023-02-29T00:00:00.000Z",
      "2026-02-30T00:00:00.000Z",
      "2026-04-31T00:00:00.000Z",
    ]) {
      expect(validateIsoTimestamp(iso)).toEqual({
        detailCode: "FINOPS_INVALID_TIMESTAMP",
        reason: "timestamp_invalid_calendar_components",
      });
    }
  });

  it("rejects out-of-range time and offset components", () => {
    for (const iso of [
      "2026-00-01T00:00:00.000Z",
      "2026-13-01T00:00:00.000Z",
      "2026-01-01T24:00:00.000Z",
      "2026-01-01T00:60:00.000Z",
      "2026-01-01T00:00:60.000Z",
      "2026-01-01T00:00:00.000+14:01",
      "2026-01-01T00:00:00.000+15:00",
    ]) {
      expect(validateIsoTimestamp(iso)?.detailCode).toBe(
        "FINOPS_INVALID_TIMESTAMP",
      );
    }
  });

  it("rejects invalid timestamps", () => {
    expect(validateIsoTimestamp("")).not.toBeNull();
    expect(validateIsoTimestamp("2026-01-01")).not.toBeNull();
    expect(validateIsoTimestamp("not-iso")).not.toBeNull();
    expect(validateIsoTimestamp("2026-13-40T99:99:99.000Z")).not.toBeNull();
  });

  it("accepts a valid UTC period shape", () => {
    const period = computeUtcMonthPeriod("2026-04-01T00:00:00.000Z");
    expect(validateFinOpsPeriodShape(period)).toBeNull();
  });

  it("validateFinOpsPeriodShape still accepts generic chronological UTC shapes", () => {
    // Generic shape: valid timestamps, UTC, start < end — not necessarily a full month.
    expect(
      validateFinOpsPeriodShape({
        periodStart: "2026-01-02T00:00:00.000Z",
        periodEnd: "2026-01-15T00:00:00.000Z",
        timezone: "UTC",
      }),
    ).toBeNull();
  });

  it("rejects non-UTC timezone", () => {
    const bad = {
      periodStart: "2026-01-01T00:00:00.000Z",
      periodEnd: "2026-02-01T00:00:00.000Z",
      timezone: "Europe/Paris",
    } as unknown as FinOpsPeriod;
    expect(validateFinOpsPeriodShape(bad)).toEqual({
      detailCode: "FINOPS_INVALID_TIMEZONE",
      reason: "timezone_must_be_utc",
    });
  });

  it("rejects start >= end", () => {
    expect(
      validateFinOpsPeriodShape({
        periodStart: "2026-02-01T00:00:00.000Z",
        periodEnd: "2026-02-01T00:00:00.000Z",
        timezone: "UTC",
      }),
    ).toEqual({
      detailCode: "FINOPS_INVALID_PERIOD",
      reason: "period_start_not_strictly_before_end",
    });
    expect(
      validateFinOpsPeriodShape({
        periodStart: "2026-03-01T00:00:00.000Z",
        periodEnd: "2026-02-01T00:00:00.000Z",
        timezone: "UTC",
      })?.detailCode,
    ).toBe("FINOPS_INVALID_PERIOD");
  });

  it("requireValidFinOpsPeriod accepts canonical months including leap Feb and Dec→Jan", () => {
    expect(() =>
      requireValidFinOpsPeriod(
        computeUtcMonthPeriod("2026-04-15T12:00:00.000Z"),
      ),
    ).not.toThrow();
    expect(() =>
      requireValidFinOpsPeriod(
        computeUtcMonthPeriod("2024-02-29T10:00:00.000Z"),
      ),
    ).not.toThrow();
    expect(() =>
      requireValidFinOpsPeriod(
        computeUtcMonthPeriod("2026-12-31T23:59:59.999Z"),
      ),
    ).not.toThrow();
  });

  it("requireValidFinOpsPeriod rejects non-canonical periods", () => {
    const cases: Array<{ period: FinOpsPeriod; reason: string }> = [
      {
        period: {
          periodStart: "2026-01-02T00:00:00.000Z",
          periodEnd: "2026-02-01T00:00:00.000Z",
          timezone: "UTC",
        },
        reason: "period_start_not_utc_month_boundary",
      },
      {
        period: {
          periodStart: "2026-01-01T00:00:00.001Z",
          periodEnd: "2026-02-01T00:00:00.000Z",
          timezone: "UTC",
        },
        reason: "period_start_not_utc_month_boundary",
      },
      {
        period: {
          periodStart: "2026-01-01T00:00:00.000Z",
          periodEnd: "2026-01-15T00:00:00.000Z",
          timezone: "UTC",
        },
        reason: "period_end_not_next_utc_month_boundary",
      },
      {
        period: {
          periodStart: "2026-01-01T00:00:00.000Z",
          periodEnd: "2026-03-01T00:00:00.000Z",
          timezone: "UTC",
        },
        reason: "period_end_not_next_utc_month_boundary",
      },
      {
        // Offset-equivalent midnight but not canonical Z form
        period: {
          periodStart: "2026-01-01T00:00:00.000+00:00",
          periodEnd: "2026-02-01T00:00:00.000+00:00",
          timezone: "UTC",
        },
        reason: "period_start_not_utc_month_boundary",
      },
    ];
    for (const { period, reason } of cases) {
      try {
        requireValidFinOpsPeriod(period);
        expect.unreachable(`expected throw for ${reason}`);
      } catch (err) {
        expect(err).toBeInstanceOf(FinOpsDomainError);
        expect((err as FinOpsDomainError).structured.reason).toBe(reason);
      }
    }
  });

  it("public barrel omits require* helpers but keeps support symbols", () => {
    expect("requireValidIsoTimestamp" in FinOpsPublic).toBe(false);
    expect("requireValidFinOpsPeriod" in FinOpsPublic).toBe(false);
    expect(FinOpsPublic.FINOPS_SOURCES).toBeDefined();
    expect(FinOpsPublic.createFinOpsError).toBeTypeOf("function");
    expect(FinOpsPublic.FinOpsDomainError).toBeTypeOf("function");
    // Internal helpers remain available for domain/tests
    expect(typeof requireValidIsoTimestamp).toBe("function");
    expect(typeof requireValidFinOpsPeriod).toBe("function");
  });

  it("FINOPS_INVALID_SOURCE is absent from public FinOpsDetailCode runtime surface", () => {
    const sample = FinOpsPublic.createFinOpsError({
      detailCode: "FINOPS_INVALID_TIMESTAMP",
      reason: "probe",
    });
    expect(sample.detailCode).toBe("FINOPS_INVALID_TIMESTAMP");
    expect(JSON.stringify(FinOpsPublic)).not.toContain("FINOPS_INVALID_SOURCE");
  });

  it("never lets unknown become numeric zero", () => {
    expect(assertUnknownNotNumericZero("unknown", 0)?.detailCode).toBe(
      "FINOPS_UNKNOWN_AS_ZERO",
    );
    expect(assertUnknownNotNumericZero("unknown", undefined)).toBeNull();
    // FIND-03 deferred textual variants remain unhandled by design
    expect(assertUnknownNotNumericZero("unknown", "00")).toBeNull();
    expect(assertUnknownNotNumericZero("unknown", "0.000")).toBeNull();
    expect(assertUnknownNotNumericZero("unknown", "-0")).toBeNull();
  });

  it("has no side effects and does not mutate period objects", () => {
    const period = computeUtcMonthPeriod("2026-05-01T00:00:00.000Z");
    const frozen = Object.freeze({ ...period });
    expect(validateFinOpsPeriodShape(frozen)).toBeNull();
    expect(frozen).toEqual(period);
  });
});
