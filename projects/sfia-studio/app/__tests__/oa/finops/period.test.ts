/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  FinOpsDomainError,
  assignInstantToPeriod,
  compareFinOpsPeriods,
  computeUtcMonthPeriod,
  finOpsPeriodKey,
  periodContainsInstant,
} from "@/lib/oa/finops";

describe("FinOps T0 period (T-TECH-07)", () => {
  it("maps January instant to February-bounded UTC month", () => {
    const period = computeUtcMonthPeriod("2026-01-15T12:00:00.000Z");
    expect(period).toEqual({
      periodStart: "2026-01-01T00:00:00.000Z",
      periodEnd: "2026-02-01T00:00:00.000Z",
      timezone: "UTC",
    });
    expect(finOpsPeriodKey(period)).toBe("2026-01");
  });

  it("maps December to January of the next year", () => {
    const period = computeUtcMonthPeriod("2026-12-31T23:59:59.999Z");
    expect(period.periodStart).toBe("2026-12-01T00:00:00.000Z");
    expect(period.periodEnd).toBe("2027-01-01T00:00:00.000Z");
    expect(finOpsPeriodKey(period)).toBe("2026-12");
  });

  it("places leap-day in February of a leap year", () => {
    const period = computeUtcMonthPeriod("2024-02-29T10:00:00.000Z");
    expect(period.periodStart).toBe("2024-02-01T00:00:00.000Z");
    expect(period.periodEnd).toBe("2024-03-01T00:00:00.000Z");
    expect(periodContainsInstant(period, "2024-02-29T23:59:59.999Z")).toBe(
      true,
    );
  });

  it("treats periodStart as inclusive and periodEnd as exclusive", () => {
    const period = computeUtcMonthPeriod("2026-03-10T00:00:00.000Z");
    expect(periodContainsInstant(period, period.periodStart)).toBe(true);
    expect(periodContainsInstant(period, period.periodEnd)).toBe(false);
    expect(
      periodContainsInstant(period, "2026-03-31T23:59:59.999Z"),
    ).toBe(true);
  });

  it("converts offset timestamps to the UTC month of the instant", () => {
    // 2026-12-31T23:00:00-01:00 === 2027-01-01T00:00:00.000Z → January 2027
    const period = computeUtcMonthPeriod("2026-12-31T23:00:00.000-01:00");
    expect(period.periodStart).toBe("2027-01-01T00:00:00.000Z");
    expect(period.periodEnd).toBe("2027-02-01T00:00:00.000Z");
    expect(finOpsPeriodKey(period)).toBe("2027-01");
  });

  it("accepts valid +14:00 offset for month assignment", () => {
    const period = computeUtcMonthPeriod("2026-01-01T00:00:00.000+14:00");
    // +14:00 → previous day UTC → December 2025
    expect(period.periodStart).toBe("2025-12-01T00:00:00.000Z");
    expect(period.periodEnd).toBe("2026-01-01T00:00:00.000Z");
  });

  it("is unaffected by DST because boundaries are UTC", () => {
    // US spring-forward window does not change UTC month math.
    const before = computeUtcMonthPeriod("2026-03-08T06:59:59.000Z");
    const after = computeUtcMonthPeriod("2026-03-08T07:00:01.000Z");
    expect(before).toEqual(after);
    expect(finOpsPeriodKey(before)).toBe("2026-03");
  });

  it("assigns late events by occurredAt, not reception time (T-TECH-07)", () => {
    const occurredAt = "2026-01-31T23:30:00.000Z";
    const receptionAt = "2026-02-02T09:00:00.000Z";
    const assigned = assignInstantToPeriod(occurredAt);
    const receptionPeriod = computeUtcMonthPeriod(receptionAt);
    expect(assigned).toEqual(computeUtcMonthPeriod(occurredAt));
    expect(finOpsPeriodKey(assigned)).toBe("2026-01");
    expect(finOpsPeriodKey(receptionPeriod)).toBe("2026-02");
    expect(compareFinOpsPeriods(assigned, receptionPeriod)).toBe(-1);
  });

  it("compares periods deterministically", () => {
    const a = computeUtcMonthPeriod("2026-01-01T00:00:00.000Z");
    const b = computeUtcMonthPeriod("2026-02-01T00:00:00.000Z");
    const a2 = computeUtcMonthPeriod("2026-01-20T00:00:00.000Z");
    expect(compareFinOpsPeriods(a, b)).toBe(-1);
    expect(compareFinOpsPeriods(b, a)).toBe(1);
    expect(compareFinOpsPeriods(a, a2)).toBe(0);
  });

  it("is deterministic for the same injected instant", () => {
    const iso = "2026-06-15T12:34:56.789Z";
    expect(computeUtcMonthPeriod(iso)).toEqual(computeUtcMonthPeriod(iso));
  });

  it("rejects invalid timestamps including impossible calendar dates", () => {
    expect(() => computeUtcMonthPeriod("not-a-timestamp")).toThrow(
      FinOpsDomainError,
    );
    expect(() => computeUtcMonthPeriod("2026-01-01")).toThrow(
      FinOpsDomainError,
    );
    for (const iso of [
      "2023-02-29T00:00:00.000Z",
      "2026-02-30T00:00:00.000Z",
      "2026-04-31T00:00:00.000Z",
    ]) {
      expect(() => computeUtcMonthPeriod(iso)).toThrow(FinOpsDomainError);
    }
  });

  it("rejects partial periods in periodContainsInstant via canonical require", () => {
    const partial = {
      periodStart: "2026-01-01T00:00:00.000Z",
      periodEnd: "2026-01-15T00:00:00.000Z",
      timezone: "UTC" as const,
    };
    expect(() =>
      periodContainsInstant(partial, "2026-01-10T00:00:00.000Z"),
    ).toThrow(FinOpsDomainError);
  });

  it("rejects multi-month periods in finOpsPeriodKey via canonical require", () => {
    const multi = {
      periodStart: "2026-01-01T00:00:00.000Z",
      periodEnd: "2026-03-01T00:00:00.000Z",
      timezone: "UTC" as const,
    };
    expect(() => finOpsPeriodKey(multi)).toThrow(FinOpsDomainError);
  });

  it("accepts computeUtcMonthPeriod outputs for domain operations", () => {
    const period = computeUtcMonthPeriod("2024-02-15T00:00:00.000Z");
    expect(periodContainsInstant(period, "2024-02-20T00:00:00.000Z")).toBe(
      true,
    );
    expect(finOpsPeriodKey(period)).toBe("2024-02");
  });
});
