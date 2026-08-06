# Review Pack Full — FinOps Technical Lot T0 PR Readiness Findings Fix

## Meta

| Champ | Valeur |
|---|---|
| Date locale | 2026-08-06 07:34:38 CEST (+0200) |
| Date UTC | 2026-08-06 05:34:38 UTC |
| GO | `GO DELIVERY SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — FIX FINOPS TECHNICAL LOT T0 PR READINESS FINDINGS` |
| GO timestamp | 2026-08-06 07:06 CEST / 05:06 UTC |
| Cycle | Delivery — Bounded Corrective — Critical — EVOL/FIX/QA |
| CKC | candidate experimental guidance — no extra authority |
| Branche initiale | decisions/…-pr-readiness-reserves |
| Branche Delivery | `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness-fixes` |
| review pack verdict | complete |

## Interprétation

Corrections FIND-01/02/04/05/08 exécutées dans six fichiers fermés. FIND-03/06/07 préservés. Manifest Option C exact **pending**. Publication **NOT AUTHORIZED**. PR readiness re-run **REQUIRED**. T1–T7 / LOT-D1 / TB-04-04 NOT DONE.

## Local Git Truth initiale

HEAD=main=mb=`8dc54db…` · 0/0 · handoff tip `9bd59ac…` · blob `fe5c41d…` · docs 103–129 + fourteen T0 hashes GO PASS · 130/131 absents.

## Hashes

| Artefact | SHA-256 | Lignes |
|---|---|---|
| 103 final | `d95c96963ce41549291f14fe14cc2ed71737dd94549183009434045155b19b47` | 2673 |
| 130 | `e8fbf30d51d5e656ac776940b7ee684c772a25177e3c2351b6b374a1eca1e080` | 363 |
| 129 (byte-identical) | `6b7290e192e44babcb632551d4edbd092d8a9d04308b1fcd41769daffa070096` | 594 |
| package.json | `fcb004b52d4547bffd171dd0411d08f41f87b21a5e5fa5cdf1193e23342175cf` | |
| package-lock.json | `042fc4467b24d5c8dea1c768fa97d01861f2c0b76667ce6bd20cde6b0e0a18ea` | |

## Décisions 129 / scope

Six fichiers autorisés. Huit protégés. FIND-03 deferred. FIND-06 Option C pending. FIND-07 unchanged.

## Six fichiers modifiés (contenus complets)

### app/lib/oa/finops/domain/types.ts

SHA-before `1f27721ddb930257e0491bc901f0de1a230fcaa5fd9b706e42cd40e53b026b09` / 64 lines
SHA-after `f32ccf3f4532b04d7dc82948276bddb83c869e6abb78e1093819c819ffcad254` / 63 lines

```typescript
/**
 * FinOps T0 — pure domain contracts (provider- and persistence-independent).
 */

export type FinOpsPeriod = {
  readonly periodStart: string;
  readonly periodEnd: string;
  readonly timezone: "UTC";
};

export type FinOpsSourceOfTruth =
  | "BILLED"
  | "PROVIDER_OBSERVED"
  | "API_USAGE"
  | "LOCAL_COUNT"
  | "PARAMETRIC_ESTIMATE"
  | "UNKNOWN";

export type FinOpsCostEvidenceClass =
  | "estimated"
  | "observed"
  | "billed"
  | "unknown";

export type FinOpsBlockingReason =
  | "SOURCE_MAY_BLOCK"
  | "API_USAGE_NEVER_BLOCKS"
  | "LOCAL_COUNT_NEVER_BLOCKS"
  | "ESTIMATE_NEVER_BLOCKS"
  | "UNKNOWN_NEVER_BLOCKS";

export type FinOpsBlockingDecision = {
  readonly eligible: boolean;
  readonly reason: FinOpsBlockingReason;
  readonly source: FinOpsSourceOfTruth;
  readonly confidenceClass: FinOpsCostEvidenceClass;
};

export type FinOpsDetailCode =
  | "FINOPS_INVALID_TIMESTAMP"
  | "FINOPS_INVALID_PERIOD"
  | "FINOPS_INVALID_TIMEZONE"
  | "FINOPS_UNKNOWN_AS_ZERO"
  | "FINOPS_EVIDENCE_COLLAPSE";

/** Lower rank = more authoritative (SoT hierarchy 1–6). */
export const FINOPS_SOT_RANK = {
  BILLED: 1,
  PROVIDER_OBSERVED: 2,
  API_USAGE: 3,
  LOCAL_COUNT: 4,
  PARAMETRIC_ESTIMATE: 5,
  UNKNOWN: 6,
} as const satisfies Record<FinOpsSourceOfTruth, 1 | 2 | 3 | 4 | 5 | 6>;

export const FINOPS_SOURCES = [
  "BILLED",
  "PROVIDER_OBSERVED",
  "API_USAGE",
  "LOCAL_COUNT",
  "PARAMETRIC_ESTIMATE",
  "UNKNOWN",
] as const satisfies ReadonlyArray<FinOpsSourceOfTruth>;
```
### app/lib/oa/finops/domain/invariants.ts

SHA-before `e27a5b9dce23ae1d2427e1684a17ee8a82ac81db1a3a8064d471200d7ff35b7b` / 130 lines
SHA-after `69f590de4e4c0b35a6787800c95c870d3b7fbe2b5c04b833e964dfef934a1fa6` / 275 lines

```typescript
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
```
### app/lib/oa/finops/index.ts

SHA-before `44008d949a8342b558a37bed755fcda6953a406b906f7a84ecec385ed8c7ccec` / 52 lines
SHA-after `978fba3f48988b442909aa8cc4de39932c72d224a11dcfd6ef8ad127237b027f` / 50 lines

```typescript
/**
 * Public FinOps T0 API — pure domain contracts only.
 */

export type {
  FinOpsBlockingDecision,
  FinOpsBlockingReason,
  FinOpsCostEvidenceClass,
  FinOpsDetailCode,
  FinOpsPeriod,
  FinOpsSourceOfTruth,
} from "./domain/types";
export { FINOPS_SOT_RANK, FINOPS_SOURCES } from "./domain/types";

export type { FinOpsStructuredError } from "./domain/errors";
export { createFinOpsError, FinOpsDomainError } from "./domain/errors";

export type { InvariantViolation } from "./domain/invariants";
export {
  assertUnknownNotNumericZero,
  validateFinOpsPeriodShape,
  validateIsoTimestamp,
} from "./domain/invariants";

export {
  assignInstantToPeriod,
  compareFinOpsPeriods,
  computeUtcMonthPeriod,
  finOpsPeriodKey,
  periodContainsInstant,
} from "./domain/period";

export {
  compareSourceOfTruth,
  sourceMayBlock,
  sourceMayInform,
  sourceMayRequestHumanReview,
  sourceOfTruthRank,
} from "./domain/sourceOfTruth";

export {
  assertDistinctEvidenceClasses,
  classifyCostEvidenceFromSource,
  isUnknownEvidence,
} from "./domain/costEvidence";

export {
  ESTIMATION_NEVER_BLOCKS,
  evaluateBlockingEligibility,
} from "./domain/blockingEligibility";
```
### app/__tests__/oa/finops/period.test.ts

SHA-before `9d275dfdf8dcb8b5c120670ab1db6ebb9cfd7a49e3fbbedc4cce79d8659de552` / 99 lines
SHA-after `d142cfd2d53466f054eb2f42a632ec8e9ffc143f6abb71418a290f057975f705` / 141 lines

```typescript
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
```
### app/__tests__/oa/finops/domainInvariants.test.ts

SHA-before `98a885ca11d6a4de5427abfbcd989161d833ac23dcab1b4933281e1a3f7e3b74` / 76 lines
SHA-after `db8b4a6b9f558179250a14e91d099b0941d20295ba0f93c10aedc0ba836b9e7f` / 222 lines

```typescript
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
```
### app/__tests__/oa/finops/importBoundaries.test.ts

SHA-before `49068a52271e98fbf1de55f17e191182f141a8215b8e1bcdc32102cbaa8ccc8d` / 87 lines
SHA-after `e22187f6342bd4dda9d5ed663e2fc1bd74253c40e635047c3b728dc210212bdb` / 351 lines

```typescript
/**
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const MODULE_ROOT = path.join(APP_ROOT, "lib/oa/finops");

const FORBIDDEN_EXACT = new Set([
  "node:fs",
  "node:fs/promises",
  "node:net",
  "node:crypto",
  "pg",
  "sqlite",
  "sqlite3",
  "better-sqlite3",
  "openai",
  "next",
  "react",
]);

const FORBIDDEN_SEGMENTS = [
  "platform",
  "execution-run",
  "infrastructure",
  "persistence",
  "ops1",
] as const;

export type ExtractedSpecifier = {
  readonly specifier: string;
  readonly form:
    | "static-from"
    | "export-from"
    | "side-effect"
    | "dynamic"
    | "require";
};

/** Strip line and block comments so commented imports are not treated as active. */
export function stripComments(source: string): string {
  let out = "";
  let i = 0;
  let inLine = false;
  let inBlock = false;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  while (i < source.length) {
    const ch = source[i];
    const next = source[i + 1];
    if (inLine) {
      if (ch === "\n") {
        inLine = false;
        out += ch;
      }
      i += 1;
      continue;
    }
    if (inBlock) {
      if (ch === "*" && next === "/") {
        inBlock = false;
        i += 2;
        continue;
      }
      i += 1;
      continue;
    }
    if (inSingle) {
      out += ch;
      if (ch === "\\" && next !== undefined) {
        out += next;
        i += 2;
        continue;
      }
      if (ch === "'") inSingle = false;
      i += 1;
      continue;
    }
    if (inDouble) {
      out += ch;
      if (ch === "\\" && next !== undefined) {
        out += next;
        i += 2;
        continue;
      }
      if (ch === '"') inDouble = false;
      i += 1;
      continue;
    }
    if (inTemplate) {
      out += ch;
      if (ch === "\\" && next !== undefined) {
        out += next;
        i += 2;
        continue;
      }
      if (ch === "`") inTemplate = false;
      i += 1;
      continue;
    }
    if (ch === "/" && next === "/") {
      inLine = true;
      i += 2;
      continue;
    }
    if (ch === "/" && next === "*") {
      inBlock = true;
      i += 2;
      continue;
    }
    if (ch === "'") {
      inSingle = true;
      out += ch;
      i += 1;
      continue;
    }
    if (ch === '"') {
      inDouble = true;
      out += ch;
      i += 1;
      continue;
    }
    if (ch === "`") {
      inTemplate = true;
      out += ch;
      i += 1;
      continue;
    }
    out += ch;
    i += 1;
  }
  return out;
}

export function extractModuleSpecifiers(source: string): ExtractedSpecifier[] {
  const code = stripComments(source);
  const found: ExtractedSpecifier[] = [];

  const patterns: Array<{
    form: ExtractedSpecifier["form"];
    re: RegExp;
  }> = [
    {
      form: "static-from",
      re: /\bimport\s+(?:type\s+)?[\s\S]*?\bfrom\s*["']([^"']+)["']/g,
    },
    {
      form: "export-from",
      re: /\bexport\s+(?:type\s+)?[\s\S]*?\bfrom\s*["']([^"']+)["']/g,
    },
    {
      form: "side-effect",
      re: /\bimport\s*["']([^"']+)["']/g,
    },
    {
      form: "dynamic",
      re: /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g,
    },
    {
      form: "require",
      re: /\brequire\s*\(\s*["']([^"']+)["']\s*\)/g,
    },
  ];

  for (const { form, re } of patterns) {
    for (const match of code.matchAll(re)) {
      const specifier = match[1];
      if (specifier !== undefined) {
        found.push({ specifier, form });
      }
    }
  }
  return found;
}

export function findProcessEnv(source: string): boolean {
  return /\bprocess\.env\b/.test(stripComments(source));
}

function violationForSpecifier(
  file: string,
  specifier: string,
): string | null {
  const base = specifier.split("/")[0] ?? specifier;
  if (FORBIDDEN_EXACT.has(specifier) || FORBIDDEN_EXACT.has(base)) {
    return `${file}: forbidden module "${specifier}"`;
  }
  for (const segment of FORBIDDEN_SEGMENTS) {
    if (
      specifier === segment ||
      specifier.includes(`/${segment}/`) ||
      specifier.includes(`/${segment}`) ||
      specifier.startsWith(`${segment}/`) ||
      specifier.includes(`@/lib/${segment}`) ||
      specifier.includes(`lib/${segment}`)
    ) {
      return `${file}: forbidden path segment "${segment}" via "${specifier}"`;
    }
  }
  return null;
}

function listTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      out.push(...listTsFiles(full));
    } else if (/\.tsx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function productT0Files(): string[] {
  const domain = listTsFiles(path.join(MODULE_ROOT, "domain"));
  const barrel = path.join(MODULE_ROOT, "index.ts");
  return [...domain, barrel];
}

describe("FinOps T0 import specifier extractor", () => {
  it("detects static from, side-effect, export-from, dynamic, and require", () => {
    const fixture = `
      import x from "openai";
      import "node:fs";
      export { y } from "react";
      const p = import("pg");
      const s = require("sqlite3");
    `;
    const specs = extractModuleSpecifiers(fixture).map((s) => s.specifier);
    expect(specs).toEqual(
      expect.arrayContaining([
        "openai",
        "node:fs",
        "react",
        "pg",
        "sqlite3",
      ]),
    );
    expect(extractModuleSpecifiers(fixture).map((s) => s.form)).toEqual(
      expect.arrayContaining([
        "static-from",
        "side-effect",
        "export-from",
        "dynamic",
        "require",
      ]),
    );
  });

  it("detects multiline and mixed quotes without false negatives", () => {
    const fixture = `
      import {
        foo
      } from 'node:fs/promises';
      import type { Bar } from "next";
    `;
    const specs = extractModuleSpecifiers(fixture).map((s) => s.specifier);
    expect(specs).toEqual(
      expect.arrayContaining(["node:fs/promises", "next"]),
    );
  });

  it("ignores commented imports", () => {
    const fixture = `
      // import "node:fs"
      /* import x from "openai" */
      import { ok } from "./types";
    `;
    const specs = extractModuleSpecifiers(fixture).map((s) => s.specifier);
    expect(specs).toEqual(["./types"]);
  });

  it("detects process.env outside comments", () => {
    expect(findProcessEnv('const x = process.env.FOO;')).toBe(true);
    expect(findProcessEnv("// process.env\nconst x = 1;")).toBe(false);
  });

  it("flags adversarial fixtures for forbidden modules and paths", () => {
    const adversarial = [
      'import "node:fs"',
      'import x from "openai"',
      'export { x } from "react"',
      'import("pg")',
      'require("sqlite3")',
      'import { z } from "../../platform/ai"',
      "const v = process.env.X",
    ];
    const hits: string[] = [];
    for (const line of adversarial) {
      if (findProcessEnv(line)) {
        hits.push(`process.env via ${line}`);
      }
      for (const { specifier } of extractModuleSpecifiers(line)) {
        const v = violationForSpecifier("fixture", specifier);
        if (v) hits.push(v);
      }
    }
    expect(hits.length).toBeGreaterThanOrEqual(7);
  });
});

describe("FinOps T0 import boundaries", () => {
  it("product T0 sources stay free of forbidden imports and process.env", () => {
    const files = productT0Files();
    expect(files.length).toBeGreaterThan(0);
    const hits: string[] = [];
    for (const file of files) {
      const rel = path.relative(APP_ROOT, file);
      const src = fs.readFileSync(file, "utf8");
      if (/\bDate\.now\b/.test(stripComments(src))) {
        hits.push(`${rel}: Date.now`);
      }
      if (findProcessEnv(src)) {
        hits.push(`${rel}: process.env`);
      }
      for (const { specifier, form } of extractModuleSpecifiers(src)) {
        const v = violationForSpecifier(rel, specifier);
        if (v) {
          hits.push(`${v} (form=${form})`);
        }
        // Non-relative package imports forbidden in FinOps T0 product tree
        if (!specifier.startsWith(".") && !specifier.startsWith("@/")) {
          // Relative domain-only; absolute package names are forbidden
          if (!specifier.startsWith("./") && !specifier.startsWith("../")) {
            hits.push(
              `${rel}: non-relative module "${specifier}" (form=${form})`,
            );
          }
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("public barrel does not export infrastructure or application surfaces", () => {
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/repository|adapter|ledger|migration|openai|pg/i);
    expect(barrel).not.toMatch(/Money|currency|price/i);
    expect(fs.existsSync(path.join(MODULE_ROOT, "domain/index.ts"))).toBe(
      false,
    );
  });
});
```


## Huit fichiers protégés (hashes)

- errors.ts: `9fcbcc89dad3d1856cbb3ae5245d90d1f09ed71991e760303693c9687dcac498` OK
- period.ts: `83bcad8da568c411c49f25ff3e2c6c9c0f17bee4d992dfbc5873beceafae0689` OK
- sourceOfTruth.ts: `33a288ba238a51f9ec4dc649d7b6d80277d39b541fb76d4c94b9eb79993e4c8e` OK
- costEvidence.ts: `eb021400549674d86fbdb022e5d7f7e85ca2f69ecb3a60455563d91d6527021c` OK
- blockingEligibility.ts: `664b32863e2606a3488b6d5b349e03547736fc3f631b47431bc3148764ec1898` OK
- sourceOfTruth.test.ts: `8d3bf36c6055792cb8eea53bfe7d7468ff46de739a1d516fd1c48526a3e26be0` OK
- costEvidence.test.ts: `8961e132d7d6804074158fa2ce9efbe715e82b6dbbb2e18b37dba76d27b844a2` OK
- blockingEligibility.test.ts: `d19baba0fbaa5ecd06766993c1a7acf4581eef0166f1b2d27e92e826340d9ae4` OK

## FIND matrix

| ID | État |
|---|---|
| FIND-01 | implemented — strict calendar round-trip |
| FIND-02 | implemented — canonical UTC month |
| FIND-03 | accepted/deferred — unchanged |
| FIND-04 | implemented — require* out of barrel |
| FIND-05 | implemented — import boundary hardening |
| FIND-06 | Option C preserved — manifest pending |
| FIND-07 | note accepted — unchanged |
| FIND-08 | FINOPS_INVALID_SOURCE removed |

## Validations

### Targeted
```
=== RERUN targeted 2026-08-06 07:31:01 CEST (+0200) / 2026-08-06 05:31:01 UTC ===
CMD: npm run test -- __tests__/oa/finops

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/finops


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1/projects/sfia-studio/app

 ✓ __tests__/oa/finops/importBoundaries.test.ts (7 tests) 4ms
 ✓ __tests__/oa/finops/costEvidence.test.ts (5 tests) 2ms
 ✓ __tests__/oa/finops/blockingEligibility.test.ts (9 tests) 1ms
 ✓ __tests__/oa/finops/sourceOfTruth.test.ts (5 tests) 2ms
 ✓ __tests__/oa/finops/period.test.ts (14 tests) 3ms
 ✓ __tests__/oa/finops/domainInvariants.test.ts (14 tests) 4ms

 Test Files  6 passed (6)
      Tests  54 passed (54)
   Start at  07:31:01
   Duration  221ms (transform 88ms, setup 176ms, collect 211ms, tests 16ms, environment 0ms, prepare 235ms)

EXIT=0 DURATION=0.57s
```

### Typecheck
```
=== RERUN typecheck 2026-08-06 07:31:02 CEST (+0200) / 2026-08-06 05:31:02 UTC ===
CMD: npm run typecheck

> sfia-studio@0.1.0 typecheck
> tsc --noEmit

EXIT=0 DURATION=0.95s
```

### Lint
```
=== RERUN lint 2026-08-06 07:31:03 CEST (+0200) / 2026-08-06 05:31:03 UTC ===
CMD: npm run lint

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
EXIT=0 DURATION=1.55s
```

### Full suite
```
 ✓ __tests__/oa/finops/domainInvariants.test.ts (14 tests) 4ms
 ✓ __tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts (6 tests) 5ms
 ✓ __tests__/oa/execution-run/adapter.events.redaction.test.ts (3 tests) 3ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.test.ts (14 tests) 8ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 6ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (9 tests) 6ms
 ✓ __tests__/oa/execution-run/adapter.secrets.opaque.test.ts (2 tests) 4ms
 ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 4ms
 ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 3ms
 ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 7ms
 ✓ __tests__/oa/execution-run/policy.test.ts (9 tests) 3ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 11ms
 ✓ __tests__/oa/execution-run/adversarial.providerBoundary.test.ts (17 tests) 2ms
 ✓ __tests__/platform/platform-ai.test.ts (5 tests) 3ms
 ✓ __tests__/oa/finops/period.test.ts (14 tests) 6ms
 ✓ __tests__/oa/execution-run/adapter.git.readonly.test.ts (4 tests) 6ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 4ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 2ms
 ✓ __tests__/oa/execution-run/transitions.test.ts (8 tests) 4ms
 ✓ __tests__/oa/finops/costEvidence.test.ts (5 tests) 4ms
 ✓ __tests__/oa/finops/sourceOfTruth.test.ts (5 tests) 4ms
 ✓ __tests__/oa/finops/blockingEligibility.test.ts (9 tests) 2ms
 ✓ __tests__/oa/execution-run/evidence.test.ts (6 tests) 2ms

 Test Files  136 passed (136)
      Tests  1370 passed (1370)
   Start at  07:31:05
   Duration  7.80s (transform 3.54s, setup 4.88s, collect 14.56s, tests 22.57s, environment 6.21s, prepare 5.23s)

EXIT=0 DURATION=8.13s
```

Corrections intermédiaires : aucune.

## Document 130 complet

```markdown
# SFIA Studio — Assistant SFIA natif OpenAI —
FinOps Technical Lot T0 —
PR Readiness Findings Fix

## 1. Statut et anti-claims

**FINOPS TECHNICAL LOT T0 PR READINESS FINDINGS FIX EXECUTED —**
**BOUNDED CORRECTIVE DELIVERY CONSUMED —**
**FIND-01 STRICT CALENDAR ROUND-TRIP REMEDIATION IMPLEMENTED —**
**FIND-02 CANONICAL UTC CALENDAR-MONTH REMEDIATION IMPLEMENTED —**
**FIND-03 RESERVE ACCEPTED AND DEFERRED TO MONEY —**
**FIND-04 PUBLIC BARREL REDUCED AS DECIDED —**
**FIND-05 IMPORT BOUNDARY TEST HARDENED —**
**FIND-06 OPTION C PRESERVED —**
**EXACT DEPENDENCY-CLOSED MANIFEST VALIDATION PENDING —**
**FIND-07 NOTE ACCEPTED AND UNCHANGED —**
**FIND-08 FINOPS_INVALID_SOURCE REMOVED —**
**SIX AUTHORIZED FILES MODIFIED —**
**NO FILE OUTSIDE SCOPE MODIFIED —**
**TARGETED TESTS PASSED —**
**TYPECHECK PASSED —**
**LINT PASSED —**
**FULL TEST SUITE PASSED —**
**PUBLICATION NOT AUTHORIZED —**
**PR READINESS RE-RUN REQUIRED —**
**NO GIT ADD, COMMIT, PUSH, PR OR MERGE —**
**T1 TO T7 NOT AUTHORIZED —**
**TB-04-04 NOT DONE —**
**LOT-D1 NOT AUTHORIZED —**
**NO BACKLOG ITEM DONE**

Anti-claims :
- Fix exécuté ≠ PR readiness validée.
- Tests verts ≠ publication autorisée.
- Option C sélectionnée ≠ manifest exact validé.
- Correction FIND-03 interdite ≠ réserve oubliée.
- Delivery corrective T0 consommée ≠ Delivery LOT-D1 consommée.
- Aucun git add / commit / push / PR projet.

## 2. Autorité Morris

Morris — unique autorité d’autorisation. Document **129** = décisions autoritatives. Le présent document **130** enregistre l’exécution corrective bornée.

## 3. GO exact

```text
GO DELIVERY SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
FIX FINOPS TECHNICAL LOT T0 PR READINESS FINDINGS
```

## 4. Horodatage CEST et UTC

| Champ | Valeur |
|---|---|
| GO | 2026-08-06 07:06 CEST (+0200) / 05:06 UTC |
| Secondes exactes | non disponibles — non inventées |
| Exécution locale (truth initiale) | 2026-08-06 07:27 CEST (+0200) / 05:27 UTC |

## 5. Cycle / profil / typologie

| Champ | Valeur |
|---|---|
| Type | 8 — Delivery |
| Mode | Bounded Corrective Delivery — FinOps Technical Lot T0 PR Readiness Findings Fix |
| Profil SFIA | Critical |
| Typologie | EVOL / FIX / QA |

## 6. Sources

Méthode Git (template, Delivery, QA, PR readiness, operating model, Review Pack/Handoff, publisher) · documents **103**, **123**, **125**, **126**, **127**, **128**, **129** · quatorze fichiers T0 · package/lock · handoff tip `9bd59ac…` / blob `fe5c41d…`. Aucune recherche externe.

## 7. Local Git Truth initiale

| Champ | Valeur |
|---|---|
| Branche | `decisions/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness-reserves` |
| HEAD / origin/main / merge-base | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| Ahead / behind | 0 / 0 |
| Upstream projet | aucun |
| Staged | aucun |

## 8. Handoff entrant

| Champ | Valeur |
|---|---|
| Branche | `sfia/review-handoff` |
| Tip | `9bd59ac54d18ec11fc0c4dc39d8579c6ab511ff8` |
| Parent | `29f39894d1242c90f0c891cae11f85b7e48b3981` |
| Blob | `fe5c41d1814e901167adcbd2ea4b2d7f7266759f` |
| Message | `docs(review-handoff): publish Assistant SFIA FinOps technical lot T0 reserve decisions applied` |

## 9. Hashes entrants

Document **103** `b49141fe…` / 2614 · **129** `6b7290e1…` / 594 · documents **104–128** conformes aux hashes GO · quatorze fichiers T0 pré-fix conformes · package `fcb004b5…` · lock `042fc446…` · **130/131** absents.

## 10. Décisions 129

FIND-01/02/04/05/08 = corrections autorisées · FIND-03 accepté/différé Money · FIND-06 Option C / manifest pending · FIND-07 note acceptée · publication non autorisée · PR readiness re-run requis.

## 11. Scope autorisé

Six fichiers produit/tests uniquement · 0 CREATE · 6 MODIFY · 0 DELETE · documents 103 MODIFY + 130 CREATE · handoff L3 uniquement.

## 12. Scope final

Conforme : six MODIFY produit/tests · huit T0 protégés byte-identical · 103 MODIFY · 130 CREATE · 104–129 byte-identical · 131 ABSENT · package/lock inchangés · aucun staged projet.

## 13. Six fichiers modifiés

| Fichier | SHA avant | L avant | SHA après | L après |
|---|---|---|---|---|
| domain/types.ts | `1f27721ddb930257e0491bc901f0de1a230fcaa5fd9b706e42cd40e53b026b09` | 64 | `f32ccf3f4532b04d7dc82948276bddb83c869e6abb78e1093819c819ffcad254` | 63 |
| domain/invariants.ts | `e27a5b9dce23ae1d2427e1684a17ee8a82ac81db1a3a8064d471200d7ff35b7b` | 130 | `69f590de4e4c0b35a6787800c95c870d3b7fbe2b5c04b833e964dfef934a1fa6` | 275 |
| finops/index.ts | `44008d949a8342b558a37bed755fcda6953a406b906f7a84ecec385ed8c7ccec` | 52 | `978fba3f48988b442909aa8cc4de39932c72d224a11dcfd6ef8ad127237b027f` | 50 |
| period.test.ts | `9d275dfdf8dcb8b5c120670ab1db6ebb9cfd7a49e3fbbedc4cce79d8659de552` | 99 | `d142cfd2d53466f054eb2f42a632ec8e9ffc143f6abb71418a290f057975f705` | 141 |
| domainInvariants.test.ts | `98a885ca11d6a4de5427abfbcd989161d833ac23dcab1b4933281e1a3f7e3b74` | 76 | `db8b4a6b9f558179250a14e91d099b0941d20295ba0f93c10aedc0ba836b9e7f` | 222 |
| importBoundaries.test.ts | `49068a52271e98fbf1de55f17e191182f141a8215b8e1bcdc32102cbaa8ccc8d` | 87 | `e22187f6342bd4dda9d5ed663e2fc1bd74253c40e635047c3b728dc210212bdb` | 351 |

## 14. Huit fichiers T0 préservés

errors.ts · period.ts · sourceOfTruth.ts · costEvidence.ts · blockingEligibility.ts · sourceOfTruth.test.ts · costEvidence.test.ts · blockingEligibility.test.ts — hashes pré-fix inchangés.

## 15. FIND-01 avant/après

Avant : `Date.parse` unique preuve après regex ISO → overflow silencieux (2023-02-29 accepté).
Après : capture composants + bornes + round-trip `setUTCFullYear` + `Date.parse` fini. detailCode `FINOPS_INVALID_TIMESTAMP` · reason `timestamp_invalid_calendar_components`.

## 16. Algorithme round-trip

1. Format ISO avec capture année/mois/jour/heure/minute/seconde/fraction/zone.
2. Conversion numérique.
3. Bornes mois 1–12 · heure 0–23 · min/sec 0–59 · offset h 0–14 · si h=14 alors min=0.
4. Construction contrôle UTC sans appliquer l’offset (`setUTCFullYear`).
5. Comparaison round-trip des composants + millisecondes fraction.
6. Rejet si débordement.
7. `Date.parse` doit être fini.

## 17. Cas calendaires invalides

2023-02-29 · 2026-02-30 · 2026-04-31 · mois 00/13 · heure 24 · minute/seconde 60 · offset +14:01 · +15:00 — tous rejetés.

## 18. Cas calendaires valides

2024-02-29 · 2026-12-31T23:00:00.000-01:00 · 2026-01-01T00:00:00.000+14:00 · fractions déjà supportées — acceptés.

## 19. Validation des offsets

Offsets numériques Z ou ±HH:MM · +14:00 accepté · +14:01 et +15:00 rejetés · pas de Date.now · pas de dépendance externe.

## 20. FIND-02 avant/après

Avant : `requireValidFinOpsPeriod` = shape seule (UTC + timestamps + start < end).
Après : shape générique préservée + `validateCanonicalUtcMonthPeriod` interne + require enchaîne les deux.

## 21. Shape générique

`validateFinOpsPeriodShape` continue d’accepter des formes chronologiques UTC non mensuelles (ex. 2→15 janvier) pour distinction explicite.

## 22. Période canonique

Start = premier instant UTC du mois (`…-01T00:00:00.000Z`) · End = premier instant du mois suivant · représentation `toISOString` Z · ni fraction ni multi-mois · `computeUtcMonthPeriod` demeure producteur de référence · period.ts **non modifié**.

## 23. Raisons d’erreur

`period_start_not_utc_month_boundary` · `period_end_not_next_utc_month_boundary` · detailCode `FINOPS_INVALID_PERIOD` inchangé.

## 24. FIND-03 préservé

`assertUnknownNotNumericZero` inchangé · `"00"` / `"0.000"` / `"-0"` non traités · Money **DEFERRED** · dette explicitement conservée.

## 25. FIND-04 avant/après barrel

Avant : barrel exportait `requireValidIsoTimestamp` et `requireValidFinOpsPeriod`.
Après : retirés du barrel · restent exportés depuis `domain/invariants.ts`.

## 26. API conservée

`FINOPS_SOURCES` · `createFinOpsError` · `FinOpsDomainError` · symboles T0 acceptés (validate*, period*, SoT*, evidence*, blocking*).

## 27. Helpers devenus internes

`requireValidIsoTimestamp` / `requireValidFinOpsPeriod` internes au domaine · utilisés par `period.ts` · testés via import direct `domain/invariants`.

## 28. FIND-05 avant/après

Avant : regex ligne `from` + `process.env` partiels · faux négatifs dynamiques/require/side-effect.
Après : strip commentaires · extracteur multi-formes · liste fermée interdits · fixtures adversariales · scan produit T0 réel.

## 29. Formes d’import détectées

static-from · export-from · side-effect · dynamic `import()` · `require()` · `process.env` séparé · import type / quotes / multilignes.

## 30. Fixtures adversariales

`import "node:fs"` · `from "openai"` · `export … from "react"` · `import("pg")` · `require("sqlite3")` · chemin `platform` · `process.env` — détectées ; commentaires ignorés.

## 31. Limites résiduelles

Pas de parser AST complet · pas de dépendance nouvelle · chaînes adversariales uniquement en fixtures de test · pas de claim de couverture hors formes listées.

## 32. FIND-06 préservé

OPTION C SELECTED — DEPENDENCY-CLOSED INCREMENTAL PACKAGE — aucun scan de fermeture · aucun manifest inventé · aucun staging.

## 33. Manifest pending

EXACT MANIFEST VALIDATION PENDING — TO BE RESOLVED DURING PR READINESS RE-RUN BEFORE ANY GIT ADD.

## 34. FIND-07 préservé

`assertDistinctEvidenceClasses` inchangé · tests evidence mapping inchangés · note acceptée.

## 35. FIND-08 supprimé

`FINOPS_INVALID_SOURCE` retiré de `FinOpsDetailCode` · aucune dépendance runtime active hors types avant suppression · réintroduction uniquement par futur lot autorisé.

## 36. DetailCodes finaux

`FINOPS_INVALID_TIMESTAMP` · `FINOPS_INVALID_PERIOD` · `FINOPS_INVALID_TIMEZONE` · `FINOPS_UNKNOWN_AS_ZERO` · `FINOPS_EVIDENCE_COLLAPSE`.

## 37. Tests modifiés

`period.test.ts` · `domainInvariants.test.ts` · `importBoundaries.test.ts` — seuls tests modifiés.

## 38. Nouveaux cas de test

Dates impossibles · offsets hors bornes · périodes partielles/multi-mois/non-Z · barrel public · extracteur 5 formes · fixtures adversariales · process.env · FIND-03 non-régression textuelle.

## 39. Résultat tests ciblés

`npm run test -- __tests__/oa/finops` — exit 0 · 6 files · **54** tests · rerun exit 0.

## 40. Résultat typecheck

`npm run typecheck` — exit 0 · aucune erreur.

## 41. Résultat lint

`npm run lint` — exit 0 · No ESLint warnings or errors.

## 42. Résultat suite complète

`npm run test` — exit 0 · **136** files · **1370** tests · rerun exit 0.

## 43. Warnings

Lint : avertissement dépréciation `next lint` (préexistant, non bloquant). Aucun warning ESLint.

## 44. Corrections intermédiaires

Aucune — première chaîne et rerun verts sans correction hors scope.

## 45. Critères d’acceptation

50/50 critères GO satisfaits (six fichiers · calendrier · canonique · barrel · imports · FIND-03/06/07 préservés · SoT/blocking/ESTIMATION préservés · package inchangé · docs protégés · publication non autorisée · TB-04-04 NOT DONE).

## 46. Package/lockfile

`package.json` `fcb004b5…` · `package-lock.json` `042fc446…` — inchangés · aucun `npm install`.

## 47. Contrôle scope

MODIFY six fichiers autorisés · BYTE-IDENTICAL huit T0 · 103 MODIFY · 130 CREATE · 104–129 BYTE-IDENTICAL · 131 ABSENT · aucun staged · aucun Money/provider/persistence dans le delta produit.

## 48. Sécurité / RSSI

Domaine pur sans I/O · pas de secrets · pas de `process.env` dans le domaine · frontières d’import durcies · surface publique réduite.

## 49. RGPD

Aucune donnée personnelle ajoutée · minimisation préservée · pas de logging de payloads utilisateur.

## 50. Performance

Validation O(1) par timestamp/période · tests import O(fichiers T0) · pas de dépendance runtime nouvelle.

## 51. GreenOps

Pas de boucle inutile · pas de package ajouté · validations ciblées puis suite unique + rerun justifié.

## 52. Résilience

Erreurs structurées `FinOpsDomainError` · pas de normalisation silencieuse calendaire · reject explicite des périodes non canoniques.

## 53. Réversibilité

Delta local non commité · revert possible fichier par fichier · period.ts intact · décisions 123/125/129 non mutées.

## 54. Risques résiduels

FIND-03 (unknown textuel) ouvert jusqu’à Money · manifest Option C non validé · PR readiness re-run non consommé · publication toujours non autorisée.

## 55. Dette résiduelle

PR-T0-FIND-03 ACCEPTED — DEFERRED TO FUTURE MONEY REPRESENTATION · packaging dependency-closed exact pending · T1–T7 non démarrés.

## 56. Impact TB-04-04

T0 fix execution = completed locally · fix evidence = produced · PR readiness re-run = pending · publication = not authorized · DONE = **no**.

## 57. Impact TB-02-05

Aucun metering runtime · aucun ledger · aucun contrôle actif · statut DONE inchangé (non DONE).

## 58. T1 à T7

**NOT AUTHORIZED — NOT STARTED**.

## 59. LOT-D1

**NOT AUTHORIZED** · Delivery LOT-D1 **NOT-CONSUMED**.

## 60. Graphe 33/56

33 nœuds · 56 arêtes · acyclique — préservé.

## 61. Priorités

P0=6 · P1=13 · P2=13 · P3=1 — préservées.

## 62. Aucun backlog item DONE

Aucun item marqué DONE · TB-04-04 NOT DONE.

## 63. Publication non autorisée

Aucun git add · aucun commit/push/PR/merge projet · packaging final non autorisé.

## 64. Local Git Truth finale

Branche `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness-fixes` @ `8dc54db…` · 0/0 · aucun upstream · fichiers T0/docs locaux untracked · aucun staged.

## 65. Prochaine gate candidate

```text
GO PR READINESS SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
REVIEW FINOPS TECHNICAL LOT T0 AFTER FIXES
```

Candidate uniquement — non consommée. N’autorise aucun git add/commit/push/PR/merge · ni T1–T7 · ni LOT-D1.

## 66. Verdict

**FINOPS TECHNICAL LOT T0 PR READINESS FINDINGS FIX EXECUTED —**
**BOUNDED CORRECTIVE DELIVERY T0 CONSUMED —**
**SIX AUTHORIZED FILES MODIFIED —**
**ZERO FILE OUTSIDE SCOPE MODIFIED —**
**FIND-01 STRICT CALENDAR ROUND-TRIP VALIDATION IMPLEMENTED —**
**FIND-02 CANONICAL UTC CALENDAR-MONTH VALIDATION IMPLEMENTED —**
**FIND-03 RESERVE ACCEPTED AND DEFERRED TO MONEY —**
**FIND-04 PUBLIC BARREL REDUCED —**
**FIND-05 IMPORT BOUNDARY TEST HARDENED —**
**FIND-06 OPTION C PRESERVED — EXACT MANIFEST VALIDATION PENDING —**
**FIND-07 NOTE ACCEPTED AND NO FIX APPLIED —**
**FIND-08 FINOPS_INVALID_SOURCE REMOVED —**
**TARGETED FINOPS TESTS PASSED — TYPECHECK PASSED — LINT PASSED — FULL TEST SUITE PASSED —**
**PACKAGE AND LOCKFILE UNCHANGED —**
**PUBLICATION NOT AUTHORIZED — PR READINESS RE-RUN REQUIRED —**
**NO GIT ADD, PROJECT COMMIT, PUSH, PR OR MERGE —**
**T1 TO T7 NOT AUTHORIZED — TB-04-04 NOT DONE — LOT-D1 NOT AUTHORIZED —**
**READY FOR CHATGPT VALIDATION AND MORRIS T0 PR READINESS RE-RUN DECISION**

```

## Sections 103 modifiées complètes

### §1 Statut
```markdown
## 1. Statut

**LOT-IP-0A DECISIONS APPLIED —**
**LOT-IP-0B DECISIONS APPLIED —**
**PERSISTENCE A2 TECHNOLOGY SELECTION FULLY ARBITRATED —**
**FIVE TECHNOLOGY DECISIONS SELECTED —**
**POSTGRESQL SELECTED —**
**NEON SELECTED —**
**PG NODE-POSTGRES SELECTED —**
**NODE-PG-MIGRATE SELECTED —**
**LOCAL DEV TEST LD-A SELECTED —**
**LOT-IP-0C SELECTION PREPARATION EXECUTED —**
**LOT-IP-0C SELECTION DECISION APPLIED —**
**LOT-IP-0C EXECUTED —**
**FINOPS CONTROL CONTRACT PRODUCED —**
**FINOPS ENFORCEMENT ARBITRATION COMPLETED —**
**FINOPS ENFORCEMENT DECISIONS APPLIED —**
**FINOPS TECHNICAL IMPLEMENTATION DECISION PACK PREPARATION EXECUTED —**
**FINOPS TECHNICAL IMPLEMENTATION DECISION PACK PREPARED —**
**FINOPS TECHNICAL IMPLEMENTATION ARBITRATION COMPLETED —**
**FINOPS TECHNICAL IMPLEMENTATION DECISIONS APPLIED —**
**CAP-C AND BND-A SELECTED —**
**POSTGRESQL LEDGER AND AGGREGATES SELECTED —**
**ENF-B SELECTED —**
**ESTIMATION NEVER BLOCKS —**
**POSTGRES TRANSACTION AND ROW LOCK SELECTED —**
**DEFAULT-OFF FINOPS FEATURE FLAG SELECTED —**
**SHADOW / MONITOR / E1 ROLLOUT MODEL SELECTED —**
**T0 TO T7 STRUCTURE ACCEPTED —**
**T0 TO T7 NOT AUTHORIZED —**
**T0 EXECUTION PACK PREPARATION EXECUTED —**
**T0 SCOPE BOUNDED —**
**T0 FILES AND SYMBOLS BOUNDED —**
**T0 TEST PLAN BOUNDED —**
**FINOPS TECHNICAL LOT T0 DELIVERY AUTHORIZED —**
**FINOPS TECHNICAL LOT T0 EXECUTED —**
**T0 CONTRACTS AND PURE DOMAIN RULES IMPLEMENTED —**
**T0 TESTS PASSED —**
**T0 TYPECHECK PASSED —**
**T0 LINT PASSED —**
**T0 FULL REGRESSION PASSED —**
**T0 LOCAL DELIVERY COMPLETE —**
**T0 READY FOR CHATGPT VALIDATION —**
**FINOPS TECHNICAL LOT T0 PR READINESS REVIEWED —**
**T0 EXECUTED LOCALLY —**
**CHATGPT VALIDATED —**
**PR READINESS REVIEWED —**
**READY WITH RESERVES —**
**RESERVES ARBITRATED BY MORRIS —**
**RESERVE DECISIONS APPLIED —**
**FINOPS TECHNICAL LOT T0 PR READINESS RESERVES ARBITRATED —**
**BOUNDED FIX DELIVERY AUTHORIZED —**
**BOUNDED FIX DELIVERY EXECUTED —**
**FIND-01 REMEDIATION IMPLEMENTED —**
**FIND-02 REMEDIATION IMPLEMENTED —**
**FIND-03 ACCEPTED AND DEFERRED TO MONEY —**
**FIND-04 PARTIAL PUBLIC API FIX IMPLEMENTED —**
**FIND-05 IMPORT BOUNDARY HARDENING IMPLEMENTED —**
**FIND-06 OPTION C PRESERVED —**
**EXACT DEPENDENCY-CLOSED MANIFEST VALIDATION PENDING —**
**FIND-07 NOTE ACCEPTED —**
**FIND-08 REMEDIATION IMPLEMENTED —**
**PR READINESS RE-RUN REQUIRED —**
**PUBLICATION NOT AUTHORIZED —**
**NO GIT ADD, COMMIT, PUSH OR PR —**
**NO COMMIT OR PUSH —**
**NO PR CREATED —**
**T1 TO T7 NOT AUTHORIZED —**
**TB-04-04 NOT DONE —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**NO BACKLOG ITEM DONE —**
**NO PROJECT COMMIT OR PUSH —**
**LOT-D1 DELIVERY NOT-CONSUMED —**
**E1 SOFT CONTROL WITH HUMAN GATE SELECTED —**
**USD 15 INFORMATIONAL ALERT SELECTED —**
**USD 20 CRITICAL MORRIS REVIEW SELECTED —**
**USD 25 MONTHLY PLANNING TARGET PRESERVED —**
**USD 30 SOFT APPLICATION CAP SELECTED —**
**DG-NEW SELECTED —**
**MORRIS-ONLY OVERRIDE POLICY SELECTED —**
**DATA MINIMIZATION POLICY SELECTED —**
**NUMERIC TTL DEFERRED —**
**TECHNICAL ENFORCEMENT NOT IMPLEMENTED —**
**PROVIDER CONFIGURATION NOT PERFORMED —**
**RECALIBRATION REQUIRED —**
**NO ITEM DONE**

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md` |
| **Items** | 33 |
| **Épics** | 7 (EPIC-TB-00 … EPIC-TB-06) |
| **Documents 90–102** | Inchangés |
| **Bounded Delivery T0** | CONSUMED |
| **Bounded corrective Delivery T0** | CONSUMED (findings fix) |
| **PR readiness T0** | REVIEWED — READY WITH RESERVES — RESERVES ARBITRATED — FIX EXECUTED — RE-RUN REQUIRED |
| **Packaging** | OPTION C SELECTED — DEPENDENCY-CLOSED INCREMENTAL PACKAGE — EXACT MANIFEST VALIDATION PENDING — NO GIT ADD AUTHORIZED |
| **LOT-D1 Delivery** | NOT AUTHORIZED — NOT-CONSUMED |
| **Project publication / PR** | not started — publication NOT AUTHORIZED — PR readiness re-run pending |



```

### §1unviginties GO Fix findings
```markdown
## 1unviginties. GO Morris — Fix FinOps Technical Lot T0 PR Readiness Findings

```text
GO DELIVERY SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
FIX FINOPS TECHNICAL LOT T0 PR READINESS FINDINGS
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-06 07:06 CEST (+0200) / 05:06 UTC |
| **Cycle** | Delivery — Bounded Corrective Delivery — FinOps Technical Lot T0 PR Readiness Findings Fix |
| **Profil** | **Critical** |
| **Typologie** | EVOL / FIX / QA |
| **Fichiers autorisés** | 6 MODIFY fermés — `types.ts` · `invariants.ts` · `index.ts` · `period.test.ts` · `domainInvariants.test.ts` · `importBoundaries.test.ts` |
| **Corrections** | FIND-01 strict calendar round-trip · FIND-02 canonical UTC month · FIND-04 require* hors barrel · FIND-05 import boundary hardening · FIND-08 `FINOPS_INVALID_SOURCE` removed |
| **Préservations** | FIND-03 accepted/deferred to Money · FIND-06 Option C · exact manifest pending · FIND-07 note accepted · SoT · evidence · blocking · ESTIMATION NEVER BLOCKS |
| **Validations** | targeted FinOps · typecheck · lint · full suite — all passed |
| **Non-effet** | aucun git add/commit/push/PR · aucune publication · manifest exact non calculé · T1–T7 **NOT AUTHORIZED** · TB-04-04 **NOT DONE** · LOT-D1 **NOT AUTHORIZED** · Money **DEFERRED** |
| **Record** | `projects/sfia-studio/130-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness-findings-fix.md` |

### Findings → état post-fix

| Finding | État |
|---|---|
| PR-T0-FIND-01 | remediation implemented — verification pending (PR readiness re-run) |
| PR-T0-FIND-02 | remediation implemented — verification pending |
| PR-T0-FIND-03 | accepted/deferred to Money — unchanged |
| PR-T0-FIND-04 | remediation implemented — verification pending |
| PR-T0-FIND-05 | remediation implemented — verification pending |
| PR-T0-FIND-06 | Option C selected — exact manifest validation pending |
| PR-T0-FIND-07 | note accepted — no fix |
| PR-T0-FIND-08 | remediation implemented — verification pending |

### Chaîne documentaire LOT-IP-0C (post findings fix)

| Document | Rôle |
|---|---|
| **126** | T0 Execution Pack |
| **127** | T0 Execution |
| **128** | T0 PR Readiness |
| **129** | Reserve Decisions Applied |
| **130** | PR Readiness Findings Fix |

---


```

### §32 Verdict
```markdown
## 32. Verdict

**LOT-IP-0A DECISIONS APPLIED — LOT-IP-0B DECISIONS APPLIED —**
**PERSISTENCE A2 TECHNOLOGY SELECTION FULLY ARBITRATED —**
**FIVE TECHNOLOGY DECISIONS SELECTED —**
**POSTGRESQL SELECTED — NEON SELECTED — PG NODE-POSTGRES SELECTED —**
**NODE-PG-MIGRATE SELECTED — LD-A SELECTED —**
**LOT-IP-0C EXECUTED — FINOPS ENFORCEMENT DECISIONS APPLIED —**
**FINOPS TECHNICAL IMPLEMENTATION DECISIONS APPLIED —**
**FINOPS TECHNICAL LOT T0 EXECUTED —**
**FINOPS TECHNICAL LOT T0 PR READINESS REVIEWED —**
**READY WITH RESERVES — RESERVES ARBITRATED BY MORRIS —**
**RESERVE DECISIONS APPLIED —**
**BOUNDED FIX DELIVERY EXECUTED —**
**FIND-01 REMEDIATION IMPLEMENTED —**
**FIND-02 REMEDIATION IMPLEMENTED —**
**FIND-03 ACCEPTED AND DEFERRED TO MONEY —**
**FIND-04 PARTIAL PUBLIC API FIX IMPLEMENTED —**
**FIND-05 IMPORT BOUNDARY HARDENING IMPLEMENTED —**
**FIND-06 OPTION C PRESERVED — EXACT MANIFEST VALIDATION PENDING —**
**FIND-07 NOTE ACCEPTED —**
**FIND-08 REMEDIATION IMPLEMENTED —**
**PR READINESS RE-RUN REQUIRED —**
**PUBLICATION NOT AUTHORIZED —**
**NO GIT ADD, COMMIT, PUSH OR PR —**
**T1 TO T7 NOT AUTHORIZED —**
**DOCUMENT 103 UPDATED — DOCUMENT 130 CREATED —**
**DOCUMENTS 104 TO 129 BYTE-IDENTICAL — DOCUMENT 131 ABSENT —**
**SIX AUTHORIZED FILES MODIFIED — EIGHT PROTECTED T0 FILES BYTE-IDENTICAL —**
**GRAPH 33/56 PRESERVED — PRIORITIES PRESERVED — NO ITEM DONE —**
**TB-04-04 NOT DONE — TB-02-05 PRESERVED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**BOUNDED DELIVERY T0 CONSUMED — BOUNDED CORRECTIVE DELIVERY T0 CONSUMED —**
**LOT-D1 DELIVERY NOT-CONSUMED —**
**NO PROJECT COMMIT OR PUSH —**
**READY FOR CHATGPT VALIDATION AND MORRIS T0 PR READINESS RE-RUN DECISION**


---


```

### §33 Prochaine gate
```markdown
## 33. Prochaine gate candidate

```text
GO PR READINESS SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
REVIEW FINOPS TECHNICAL LOT T0 AFTER FIXES
```

Statut : **candidate uniquement — non consommée**.

Cette gate future :
- reverra les six fichiers corrigés ;
- réexécutera les preuves Critical ;
- statuera sur la clôture de FIND-01/02/04/05/08 ;
- vérifiera la réserve FIND-03 ;
- préservera FIND-07 ;
- calculera et validera le manifest dependency-closed exact ;
- n’autorisera toujours aucun git add, commit, push ou PR ;
- n’autorisera pas T1 à T7 ;
- n’autorisera pas LOT-D1 ;
- ne marquera pas TB-04-04 DONE.

**FINOPS TECHNICAL LOT T0 PR READINESS FINDINGS FIX EXECUTED — PR READINESS RE-RUN CANDIDATE — PUBLICATION NOT AUTHORIZED — LOT-D1 DELIVERY NOT CONSUMED**

```

## Diff RAW utile 103/130/produit

```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1/.tmp-sfia-review/lot-t0-fix/103-before.md	2026-08-06 07:27:55
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1/.tmp-sfia-review/lot-t0-fix/103-after.md	2026-08-06 07:34:38
@@ -50,20 +50,21 @@
 **READY WITH RESERVES —**
 **RESERVES ARBITRATED BY MORRIS —**
 **RESERVE DECISIONS APPLIED —**
-**FIND-01 FIX REQUIRED BEFORE PUBLICATION —**
-**FIND-02 FIX REQUIRED BEFORE PUBLICATION —**
+**FINOPS TECHNICAL LOT T0 PR READINESS RESERVES ARBITRATED —**
+**BOUNDED FIX DELIVERY AUTHORIZED —**
+**BOUNDED FIX DELIVERY EXECUTED —**
+**FIND-01 REMEDIATION IMPLEMENTED —**
+**FIND-02 REMEDIATION IMPLEMENTED —**
 **FIND-03 ACCEPTED AND DEFERRED TO MONEY —**
-**FIND-04 PARTIAL FIX REQUIRED —**
-**FIND-05 FIX REQUIRED BEFORE PUBLICATION —**
-**FIND-06 OPTION C DEPENDENCY-CLOSED INCREMENTAL PACKAGE SELECTED —**
+**FIND-04 PARTIAL PUBLIC API FIX IMPLEMENTED —**
+**FIND-05 IMPORT BOUNDARY HARDENING IMPLEMENTED —**
+**FIND-06 OPTION C PRESERVED —**
+**EXACT DEPENDENCY-CLOSED MANIFEST VALIDATION PENDING —**
 **FIND-07 NOTE ACCEPTED —**
-**FIND-08 REMOVAL REQUIRED —**
-**BOUNDED FIX CYCLE REQUIRED —**
+**FIND-08 REMEDIATION IMPLEMENTED —**
 **PR READINESS RE-RUN REQUIRED —**
-**EXACT PACKAGING MANIFEST VALIDATION PENDING —**
 **PUBLICATION NOT AUTHORIZED —**
 **NO GIT ADD, COMMIT, PUSH OR PR —**
-**MORRIS RESERVE ACCEPTANCE REQUIRED BEFORE PUBLICATION —**
 **NO COMMIT OR PUSH —**
 **NO PR CREATED —**
 **T1 TO T7 NOT AUTHORIZED —**
@@ -93,10 +94,11 @@
 | **Épics** | 7 (EPIC-TB-00 … EPIC-TB-06) |
 | **Documents 90–102** | Inchangés |
 | **Bounded Delivery T0** | CONSUMED |
-| **PR readiness T0** | REVIEWED — READY WITH RESERVES — RESERVES ARBITRATED |
-| **Packaging** | OPTION C SELECTED — DEPENDENCY-CLOSED INCREMENTAL PACKAGE — EXACT MANIFEST PENDING VALIDATION — NO GIT ADD AUTHORIZED |
+| **Bounded corrective Delivery T0** | CONSUMED (findings fix) |
+| **PR readiness T0** | REVIEWED — READY WITH RESERVES — RESERVES ARBITRATED — FIX EXECUTED — RE-RUN REQUIRED |
+| **Packaging** | OPTION C SELECTED — DEPENDENCY-CLOSED INCREMENTAL PACKAGE — EXACT MANIFEST VALIDATION PENDING — NO GIT ADD AUTHORIZED |
 | **LOT-D1 Delivery** | NOT AUTHORIZED — NOT-CONSUMED |
-| **Project publication / PR** | not started — publication NOT AUTHORIZED — bounded fix pending |
+| **Project publication / PR** | not started — publication NOT AUTHORIZED — PR readiness re-run pending |


 ## 1bis. GO Morris — validation priorités et premier lot
@@ -888,8 +890,8 @@
 | **Implementation** | **IMPLEMENTED** |
 | **Tests** | **TESTED** |
 | **Validation ChatGPT** | **VALIDATED (via PR readiness Critical review)** |
-| **PR readiness** | **REVIEWED — READY WITH RESERVES — RESERVES ARBITRATED** |
-| **Statut publication** | **TECHNICALLY VALIDATED WITH RESERVES — FIX REQUIRED BEFORE PUBLICATION — PUBLICATION NOT AUTHORIZED — AWAITING BOUNDED FIX CYCLE** |
+| **PR readiness** | **REVIEWED — READY WITH RESERVES — RESERVES ARBITRATED — BOUNDED FIX EXECUTED — AWAITING PR READINESS RE-RUN** |
+| **Statut publication** | **EXECUTED LOCALLY — PR READINESS REVIEWED WITH RESERVES — RESERVES ARBITRATED — BOUNDED FIX EXECUTED — AWAITING PR READINESS RE-RUN — PUBLICATION NOT AUTHORIZED** |
 | **Commit / push projet** | **NO PROJECT COMMIT OR PUSH — NO GIT ADD AUTHORIZED** |
 | **DONE backlog** | **no** |

@@ -904,7 +906,9 @@
 | Bounded Delivery cycle T0 | **consumed** |
 | PR readiness T0 | **reviewed — READY WITH RESERVES — reserves arbitrated** |
 | Reserve decisions | **applied (129)** |
-| Bounded fix cycle | **REQUIRED — NOT CONSUMED** |
+| Bounded corrective Delivery T0 | **consumed (130)** |
+| Publication Delivery | **not authorized** |
+| PR readiness re-run | **REQUIRED — NOT CONSUMED** |
 | LOT-D1 Delivery | **NOT AUTHORIZED — NOT-CONSUMED** |
 | Project publication | not started — NOT AUTHORIZED |
 | PR | not created |
@@ -1057,6 +1061,53 @@

 ---

+## 1unviginties. GO Morris — Fix FinOps Technical Lot T0 PR Readiness Findings
+
+```text
+GO DELIVERY SFIA STUDIO —
+ASSISTANT SFIA NATIF OPENAI —
+FIX FINOPS TECHNICAL LOT T0 PR READINESS FINDINGS
+```
+
+| Champ | Valeur |
+|---|---|
+| **Autorité** | Morris |
+| **Consommation** | 2026-08-06 07:06 CEST (+0200) / 05:06 UTC |
+| **Cycle** | Delivery — Bounded Corrective Delivery — FinOps Technical Lot T0 PR Readiness Findings Fix |
+| **Profil** | **Critical** |
+| **Typologie** | EVOL / FIX / QA |
+| **Fichiers autorisés** | 6 MODIFY fermés — `types.ts` · `invariants.ts` · `index.ts` · `period.test.ts` · `domainInvariants.test.ts` · `importBoundaries.test.ts` |
+| **Corrections** | FIND-01 strict calendar round-trip · FIND-02 canonical UTC month · FIND-04 require* hors barrel · FIND-05 import boundary hardening · FIND-08 `FINOPS_INVALID_SOURCE` removed |
+| **Préservations** | FIND-03 accepted/deferred to Money · FIND-06 Option C · exact manifest pending · FIND-07 note accepted · SoT · evidence · blocking · ESTIMATION NEVER BLOCKS |
+| **Validations** | targeted FinOps · typecheck · lint · full suite — all passed |
+| **Non-effet** | aucun git add/commit/push/PR · aucune publication · manifest exact non calculé · T1–T7 **NOT AUTHORIZED** · TB-04-04 **NOT DONE** · LOT-D1 **NOT AUTHORIZED** · Money **DEFERRED** |
+| **Record** | `projects/sfia-studio/130-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness-findings-fix.md` |
+
+### Findings → état post-fix
+
+| Finding | État |
+|---|---|
+| PR-T0-FIND-01 | remediation implemented — verification pending (PR readiness re-run) |
+| PR-T0-FIND-02 | remediation implemented — verification pending |
+| PR-T0-FIND-03 | accepted/deferred to Money — unchanged |
+| PR-T0-FIND-04 | remediation implemented — verification pending |
+| PR-T0-FIND-05 | remediation implemented — verification pending |
+| PR-T0-FIND-06 | Option C selected — exact manifest validation pending |
+| PR-T0-FIND-07 | note accepted — no fix |
+| PR-T0-FIND-08 | remediation implemented — verification pending |
+
+### Chaîne documentaire LOT-IP-0C (post findings fix)
+
+| Document | Rôle |
+|---|---|
+| **126** | T0 Execution Pack |
+| **127** | T0 Execution |
+| **128** | T0 PR Readiness |
+| **129** | Reserve Decisions Applied |
+| **130** | PR Readiness Findings Fix |
+
+---
+
 ## 2. GO Morris

 ```text
@@ -1968,19 +2019,19 @@
 | **Type** | DECISION-PREP |
 | **Epic** | EPIC-TB-04 |
 | **Priorité validée** | **P2** — VALIDATED BY MORRIS |
-| **Statut** | T0 EXECUTED LOCALLY — PR READINESS REVIEWED — RESERVES ARBITRATED — FIX REQUIRED BEFORE PUBLICATION — NOT DONE |
+| **Statut** | T0 EXECUTED LOCALLY — PR READINESS REVIEWED — RESERVES ARBITRATED — BOUNDED FIX EXECUTED — AWAITING PR READINESS RE-RUN — NOT DONE |
 | **Dépendances** | TB-02-05 |
-| **Gate Morris** | reserve decisions applied (129) · bounded fix cycle pending · publication not authorized |
-| **Source** | doc 102 FPI-14-HARD-CAP=DEFER-BEFORE-PILOT · R-TECH-FINOPS-HARD-01 · 122/123/124/125/126/127/128/129 |
+| **Gate Morris** | findings fix executed (130) · PR readiness re-run pending · publication not authorized |
+| **Source** | doc 102 FPI-14-HARD-CAP=DEFER-BEFORE-PILOT · R-TECH-FINOPS-HARD-01 · 122/123/124/125/126/127/128/129/130 |
 | **Réserves liées** | R-TECH-FINOPS-HARD-01 · R-TECH-TTL-01 |
 | **Non-sélections liées** | hard stop fournisseur · TTL numériques · config provider · exécution T1–T7 · Money deferred |
-| **Delivery** | NOT AUTHORIZED (LOT-D1) · bounded Delivery T0 **consumed** ≠ LOT-D1 · publication **NOT AUTHORIZED** |
+| **Delivery** | NOT AUTHORIZED (LOT-D1) · bounded Delivery T0 **consumed** · bounded corrective Delivery T0 **consumed** ≠ LOT-D1 · publication **NOT AUTHORIZED** |
 | **Relation main** | T0 code local untracked · dépend de la preuve metering/soft cap (TB-02-05) sans bloquer TB-02-05 |
-| **Préparation LOT-IP-0C** | decision preparation = **completed** · technical decisions = **applied** · T0 execution pack = **prepared** · T0 execution authorization = **consumed** · T0 implementation = **completed locally** · T0 PR readiness = **reviewed** · reserve arbitration = **completed** · reserve decisions = **applied** · bounded fix = **pending** · PR readiness re-run = **pending** · publication = **not authorized** · T1 to T7 = **not authorized** · complete FinOps implementation = **not completed** · DONE = **no** |
+| **Préparation LOT-IP-0C** | decision preparation = **completed** · technical decisions = **applied** · T0 execution pack = **prepared** · T0 execution authorization = **consumed** · T0 implementation = **completed locally** · T0 PR readiness = **reviewed** · reserve arbitration = **completed** · reserve decisions = **applied** · T0 fix execution = **completed locally** · T0 fix evidence = **produced** · PR readiness re-run = **pending** · publication = **not authorized** · T1 to T7 = **not authorized** · complete FinOps implementation = **not completed** · DONE = **no** |
 | **Calibration provisoire** | 15 / 20 / 25 / 30 USD · baseline 1–2 users · **NOT CONFIGURED** |
 | **Enforcement** | E1 · A15-CAL/PROJ/ONCE · C20-WARN · S30-SOFT · DG-NEW **SELECTED** · **NOT IMPLEMENTED** |
 | **Technique** | CAP-C · BND-A · ENF-B · PG ledger/aggregates · etc. **SELECTED** (125) · T0 domain contracts **IMPLEMENTED** · T1–T7 **NOT IMPLEMENTED** |
-| **Statut item** | T0 **completed locally** · ChatGPT validation **pending** · full FinOps **not completed** · DONE = **no** |
+| **Statut item** | T0 **completed locally** · bounded fix **completed locally** · PR readiness re-run **pending** · full FinOps **not completed** · DONE = **no** |

 **Objectif :** Préparer le Decision Pack hard cap FinOps (FPI-14) sans fixer de seuil définitif ni configurer de limite fournisseur. Contrats de mesure/enforcement produits en 122 ; arbitrage enforcement futur distinct.

@@ -2373,7 +2424,7 @@
 | **T0 Execution Pack** | record **126** · GO 23:49 CEST · scope/files/symbols/tests **bounded** · **byte-identical** |
 | **T0 Execution** | record **127** · GO 2026-08-06 00:04 CEST · 14 fichiers CREATE · tests/typecheck/lint/full suite **PASSED** |
 | **Lots techniques** | T0 **EXECUTED LOCALLY** · T1–T7 **NOT AUTHORIZED** · **NOT STARTED** · graphe 33/56 **inchangé** |
-| **TB-04-04** | decision preparation = **completed** · technical decisions = **applied** · T0 execution pack = **prepared** · T0 execution authorization = **consumed** · T0 implementation = **completed locally** · T0 PR readiness = **reviewed** · reserve arbitration = **completed** · reserve decisions = **applied** · bounded fix = **pending** · PR readiness re-run = **pending** · publication = **not authorized** · T1 to T7 = **not authorized** · complete FinOps implementation = **not completed** · DONE = **no** |
+| **TB-04-04** | decision preparation = **completed** · technical decisions = **applied** · T0 execution pack = **prepared** · T0 execution authorization = **consumed** · T0 implementation = **completed locally** · T0 PR readiness = **reviewed** · reserve arbitration = **completed** · reserve decisions = **applied** · T0 fix execution = **completed locally** · T0 fix evidence = **produced** · PR readiness re-run = **pending** · publication = **not authorized** · T1 to T7 = **not authorized** · complete FinOps implementation = **not completed** · DONE = **no** |
 | **Calibration** | 1–2 utilisateurs · 15 / 20 / 25 / 30 USD provisoire **préservée** · **RECALIBRATION REQUIRED** · **NOT CONFIGURED** |
 | **Enforcement** | E1 **SELECTED** · NOT IMPLEMENTED · provider config **NOT PERFORMED** |
 | **Note** | Requis avant pilote · ne bloque pas TB-02-05 · T0 local ≠ contrôle FinOps actif · TB-04-04 reste **NOT DONE** · Delivery T0 ≠ Delivery LOT-D1 |
@@ -2570,24 +2621,29 @@
 **FINOPS TECHNICAL LOT T0 PR READINESS REVIEWED —**
 **READY WITH RESERVES — RESERVES ARBITRATED BY MORRIS —**
 **RESERVE DECISIONS APPLIED —**
-**FIND-01/02/04/05/08 FIX OR REMOVAL REQUIRED BEFORE PUBLICATION —**
+**BOUNDED FIX DELIVERY EXECUTED —**
+**FIND-01 REMEDIATION IMPLEMENTED —**
+**FIND-02 REMEDIATION IMPLEMENTED —**
 **FIND-03 ACCEPTED AND DEFERRED TO MONEY —**
-**FIND-06 OPTION C DEPENDENCY-CLOSED INCREMENTAL PACKAGE SELECTED —**
+**FIND-04 PARTIAL PUBLIC API FIX IMPLEMENTED —**
+**FIND-05 IMPORT BOUNDARY HARDENING IMPLEMENTED —**
+**FIND-06 OPTION C PRESERVED — EXACT MANIFEST VALIDATION PENDING —**
 **FIND-07 NOTE ACCEPTED —**
-**BOUNDED FIX CYCLE REQUIRED — PR READINESS RE-RUN REQUIRED —**
-**EXACT PACKAGING MANIFEST VALIDATION PENDING —**
+**FIND-08 REMEDIATION IMPLEMENTED —**
+**PR READINESS RE-RUN REQUIRED —**
 **PUBLICATION NOT AUTHORIZED —**
 **NO GIT ADD, COMMIT, PUSH OR PR —**
 **T1 TO T7 NOT AUTHORIZED —**
-**DOCUMENT 103 UPDATED — DOCUMENT 129 CREATED —**
-**DOCUMENTS 104 TO 128 BYTE-IDENTICAL — DOCUMENT 130 ABSENT —**
-**FOURTEEN T0 FILES BYTE-IDENTICAL —**
+**DOCUMENT 103 UPDATED — DOCUMENT 130 CREATED —**
+**DOCUMENTS 104 TO 129 BYTE-IDENTICAL — DOCUMENT 131 ABSENT —**
+**SIX AUTHORIZED FILES MODIFIED — EIGHT PROTECTED T0 FILES BYTE-IDENTICAL —**
 **GRAPH 33/56 PRESERVED — PRIORITIES PRESERVED — NO ITEM DONE —**
 **TB-04-04 NOT DONE — TB-02-05 PRESERVED —**
 **LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
-**BOUNDED DELIVERY T0 CONSUMED — LOT-D1 DELIVERY NOT-CONSUMED —**
+**BOUNDED DELIVERY T0 CONSUMED — BOUNDED CORRECTIVE DELIVERY T0 CONSUMED —**
+**LOT-D1 DELIVERY NOT-CONSUMED —**
 **NO PROJECT COMMIT OR PUSH —**
-**READY FOR CHATGPT VALIDATION AND MORRIS BOUNDED FIX CYCLE DECISION**
+**READY FOR CHATGPT VALIDATION AND MORRIS T0 PR READINESS RE-RUN DECISION**


 ---
@@ -2595,20 +2651,23 @@
 ## 33. Prochaine gate candidate

 ```text
-GO DELIVERY SFIA STUDIO —
+GO PR READINESS SFIA STUDIO —
 ASSISTANT SFIA NATIF OPENAI —
-FIX FINOPS TECHNICAL LOT T0 PR READINESS FINDINGS
+REVIEW FINOPS TECHNICAL LOT T0 AFTER FIXES
 ```

 Statut : **candidate uniquement — non consommée**.

 Cette gate future :
-- autorisera uniquement les corrections décidées (FIND-01/02/04/05/08) ;
-- exigera un périmètre de fichiers fermé ;
-- n’autorisera pas git add, commit, push ou PR ;
+- reverra les six fichiers corrigés ;
+- réexécutera les preuves Critical ;
+- statuera sur la clôture de FIND-01/02/04/05/08 ;
+- vérifiera la réserve FIND-03 ;
+- préservera FIND-07 ;
+- calculera et validera le manifest dependency-closed exact ;
+- n’autorisera toujours aucun git add, commit, push ou PR ;
 - n’autorisera pas T1 à T7 ;
 - n’autorisera pas LOT-D1 ;
-- exigera une nouvelle PR readiness après corrections ;
 - ne marquera pas TB-04-04 DONE.

-**FINOPS TECHNICAL LOT T0 RESERVE DECISIONS APPLIED — BOUNDED FIX CYCLE CANDIDATE — PUBLICATION NOT AUTHORIZED — LOT-D1 DELIVERY NOT CONSUMED**
+**FINOPS TECHNICAL LOT T0 PR READINESS FINDINGS FIX EXECUTED — PR READINESS RE-RUN CANDIDATE — PUBLICATION NOT AUTHORIZED — LOT-D1 DELIVERY NOT CONSUMED**

```

```diff
diff --git a/projects/sfia-studio/130-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness-findings-fix.md b/projects/sfia-studio/130-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness-findings-fix.md
new file
+# SFIA Studio — Assistant SFIA natif OpenAI —
+FinOps Technical Lot T0 —
+PR Readiness Findings Fix
+
+## 1. Statut et anti-claims
+
+**FINOPS TECHNICAL LOT T0 PR READINESS FINDINGS FIX EXECUTED —**
+**BOUNDED CORRECTIVE DELIVERY CONSUMED —**
+**FIND-01 STRICT CALENDAR ROUND-TRIP REMEDIATION IMPLEMENTED —**
+**FIND-02 CANONICAL UTC CALENDAR-MONTH REMEDIATION IMPLEMENTED —**
+**FIND-03 RESERVE ACCEPTED AND DEFERRED TO MONEY —**
+**FIND-04 PUBLIC BARREL REDUCED AS DECIDED —**
+**FIND-05 IMPORT BOUNDARY TEST HARDENED —**
+**FIND-06 OPTION C PRESERVED —**
+**EXACT DEPENDENCY-CLOSED MANIFEST VALIDATION PENDING —**
+**FIND-07 NOTE ACCEPTED AND UNCHANGED —**
+**FIND-08 FINOPS_INVALID_SOURCE REMOVED —**
+**SIX AUTHORIZED FILES MODIFIED —**
+**NO FILE OUTSIDE SCOPE MODIFIED —**
+**TARGETED TESTS PASSED —**
+**TYPECHECK PASSED —**
+**LINT PASSED —**
+**FULL TEST SUITE PASSED —**
+**PUBLICATION NOT AUTHORIZED —**
+**PR READINESS RE-RUN REQUIRED —**
+**NO GIT ADD, COMMIT, PUSH, PR OR MERGE —**
+**T1 TO T7 NOT AUTHORIZED —**
+**TB-04-04 NOT DONE —**
+**LOT-D1 NOT AUTHORIZED —**
+**NO BACKLOG ITEM DONE**
+
+Anti-claims :
+- Fix exécuté ≠ PR readiness validée.
+- Tests verts ≠ publication autorisée.
+- Option C sélectionnée ≠ manifest exact validé.
+- Correction FIND-03 interdite ≠ réserve oubliée.
+- Delivery corrective T0 consommée ≠ Delivery LOT-D1 consommée.
+- Aucun git add / commit / push / PR projet.
+
+## 2. Autorité Morris
+
+Morris — unique autorité d’autorisation. Document **129** = décisions autoritatives. Le présent document **130** enregistre l’exécution corrective bornée.
+
+## 3. GO exact
+
+```text
+GO DELIVERY SFIA STUDIO —
+ASSISTANT SFIA NATIF OPENAI —
+FIX FINOPS TECHNICAL LOT T0 PR READINESS FINDINGS
+```
+
+## 4. Horodatage CEST et UTC
+
+| Champ | Valeur |
+|---|---|
+| GO | 2026-08-06 07:06 CEST (+0200) / 05:06 UTC |
+| Secondes exactes | non disponibles — non inventées |
+| Exécution locale (truth initiale) | 2026-08-06 07:27 CEST (+0200) / 05:27 UTC |
+
+## 5. Cycle / profil / typologie
+
+| Champ | Valeur |
+|---|---|
+| Type | 8 — Delivery |
+| Mode | Bounded Corrective Delivery — FinOps Technical Lot T0 PR Readiness Findings Fix |
+| Profil SFIA | Critical |
+| Typologie | EVOL / FIX / QA |
+
+## 6. Sources
+
+Méthode Git (template, Delivery, QA, PR readiness, operating model, Review Pack/Handoff, publisher) · documents **103**, **123**, **125**, **126**, **127**, **128**, **129** · quatorze fichiers T0 · package/lock · handoff tip `9bd59ac…` / blob `fe5c41d…`. Aucune recherche externe.
+
+## 7. Local Git Truth initiale
+
+| Champ | Valeur |
+|---|---|
+| Branche | `decisions/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness-reserves` |
+| HEAD / origin/main / merge-base | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
+| Ahead / behind | 0 / 0 |
+| Upstream projet | aucun |
+| Staged | aucun |
+
+## 8. Handoff entrant
+
+| Champ | Valeur |
+|---|---|
+| Branche | `sfia/review-handoff` |
+| Tip | `9bd59ac54d18ec11fc0c4dc39d8579c6ab511ff8` |
+| Parent | `29f39894d1242c90f0c891cae11f85b7e48b3981` |
+| Blob | `fe5c41d1814e901167adcbd2ea4b2d7f7266759f` |
+| Message | `docs(review-handoff): publish Assistant SFIA FinOps technical lot T0 reserve decisions applied` |
+
+## 9. Hashes entrants
+
+Document **103** `b49141fe…` / 2614 · **129** `6b7290e1…` / 594 · documents **104–128** conformes aux hashes GO · quatorze fichiers T0 pré-fix conformes · package `fcb004b5…` · lock `042fc446…` · **130/131** absents.
+
+## 10. Décisions 129
+
+FIND-01/02/04/05/08 = corrections autorisées · FIND-03 accepté/différé Money · FIND-06 Option C / manifest pending · FIND-07 note acceptée · publication non autorisée · PR readiness re-run requis.
+
+## 11. Scope autorisé
+
+Six fichiers produit/tests uniquement · 0 CREATE · 6 MODIFY · 0 DELETE · documents 103 MODIFY + 130 CREATE · handoff L3 uniquement.
+
+## 12. Scope final
+
+Conforme : six MODIFY produit/tests · huit T0 protégés byte-identical · 103 MODIFY · 130 CREATE · 104–129 byte-identical · 131 ABSENT · package/lock inchangés · aucun staged projet.
+
+## 13. Six fichiers modifiés
+
+| Fichier | SHA avant | L avant | SHA après | L après |
+|---|---|---|---|---|
+| domain/types.ts | `1f27721ddb930257e0491bc901f0de1a230fcaa5fd9b706e42cd40e53b026b09` | 64 | `f32ccf3f4532b04d7dc82948276bddb83c869e6abb78e1093819c819ffcad254` | 63 |
+| domain/invariants.ts | `e27a5b9dce23ae1d2427e1684a17ee8a82ac81db1a3a8064d471200d7ff35b7b` | 130 | `69f590de4e4c0b35a6787800c95c870d3b7fbe2b5c04b833e964dfef934a1fa6` | 275 |
+| finops/index.ts | `44008d949a8342b558a37bed755fcda6953a406b906f7a84ecec385ed8c7ccec` | 52 | `978fba3f48988b442909aa8cc4de39932c72d224a11dcfd6ef8ad127237b027f` | 50 |
+| period.test.ts | `9d275dfdf8dcb8b5c120670ab1db6ebb9cfd7a49e3fbbedc4cce79d8659de552` | 99 | `d142cfd2d53466f054eb2f42a632ec8e9ffc143f6abb71418a290f057975f705` | 141 |
+| domainInvariants.test.ts | `98a885ca11d6a4de5427abfbcd989161d833ac23dcab1b4933281e1a3f7e3b74` | 76 | `db8b4a6b9f558179250a14e91d099b0941d20295ba0f93c10aedc0ba836b9e7f` | 222 |
+| importBoundaries.test.ts | `49068a52271e98fbf1de55f17e191182f141a8215b8e1bcdc32102cbaa8ccc8d` | 87 | `e22187f6342bd4dda9d5ed663e2fc1bd74253c40e635047c3b728dc210212bdb` | 351 |
+
+## 14. Huit fichiers T0 préservés
+
+errors.ts · period.ts · sourceOfTruth.ts · costEvidence.ts · blockingEligibility.ts · sourceOfTruth.test.ts · costEvidence.test.ts · blockingEligibility.test.ts — hashes pré-fix inchangés.
+
+## 15. FIND-01 avant/après
+
+Avant : `Date.parse` unique preuve après regex ISO → overflow silencieux (2023-02-29 accepté).
+Après : capture composants + bornes + round-trip `setUTCFullYear` + `Date.parse` fini. detailCode `FINOPS_INVALID_TIMESTAMP` · reason `timestamp_invalid_calendar_components`.
+
+## 16. Algorithme round-trip
+
+1. Format ISO avec capture année/mois/jour/heure/minute/seconde/fraction/zone.
+2. Conversion numérique.
+3. Bornes mois 1–12 · heure 0–23 · min/sec 0–59 · offset h 0–14 · si h=14 alors min=0.
+4. Construction contrôle UTC sans appliquer l’offset (`setUTCFullYear`).
+5. Comparaison round-trip des composants + millisecondes fraction.
+6. Rejet si débordement.
+7. `Date.parse` doit être fini.
+
+## 17. Cas calendaires invalides
+
+2023-02-29 · 2026-02-30 · 2026-04-31 · mois 00/13 · heure 24 · minute/seconde 60 · offset +14:01 · +15:00 — tous rejetés.
+
+## 18. Cas calendaires valides
+
+2024-02-29 · 2026-12-31T23:00:00.000-01:00 · 2026-01-01T00:00:00.000+14:00 · fractions déjà supportées — acceptés.
+
+## 19. Validation des offsets
+
+Offsets numériques Z ou ±HH:MM · +14:00 accepté · +14:01 et +15:00 rejetés · pas de Date.now · pas de dépendance externe.
+
+## 20. FIND-02 avant/après
+
+Avant : `requireValidFinOpsPeriod` = shape seule (UTC + timestamps + start < end).
+Après : shape générique préservée + `validateCanonicalUtcMonthPeriod` interne + require enchaîne les deux.
+
+## 21. Shape générique
+
+`validateFinOpsPeriodShape` continue d’accepter des formes chronologiques UTC non mensuelles (ex. 2→15 janvier) pour distinction explicite.
+
+## 22. Période canonique
+
+Start = premier instant UTC du mois (`…-01T00:00:00.000Z`) · End = premier instant du mois suivant · représentation `toISOString` Z · ni fraction ni multi-mois · `computeUtcMonthPeriod` demeure producteur de référence · period.ts **non modifié**.
+
+## 23. Raisons d’erreur
+
+`period_start_not_utc_month_boundary` · `period_end_not_next_utc_month_boundary` · detailCode `FINOPS_INVALID_PERIOD` inchangé.
+
+## 24. FIND-03 préservé
+
+`assertUnknownNotNumericZero` inchangé · `"00"` / `"0.000"` / `"-0"` non traités · Money **DEFERRED** · dette explicitement conservée.
+
+## 25. FIND-04 avant/après barrel
+
+Avant : barrel exportait `requireValidIsoTimestamp` et `requireValidFinOpsPeriod`.
+Après : retirés du barrel · restent exportés depuis `domain/invariants.ts`.
+
+## 26. API conservée
+
+`FINOPS_SOURCES` · `createFinOpsError` · `FinOpsDomainError` · symboles T0 acceptés (validate*, period*, SoT*, evidence*, blocking*).
+
+## 27. Helpers devenus internes
+
+`requireValidIsoTimestamp` / `requireValidFinOpsPeriod` internes au domaine · utilisés par `period.ts` · testés via import direct `domain/invariants`.
+
+## 28. FIND-05 avant/après
+
+Avant : regex ligne `from` + `process.env` partiels · faux négatifs dynamiques/require/side-effect.
+Après : strip commentaires · extracteur multi-formes · liste fermée interdits · fixtures adversariales · scan produit T0 réel.
+
+## 29. Formes d’import détectées
+
+static-from · export-from · side-effect · dynamic `import()` · `require()` · `process.env` séparé · import type / quotes / multilignes.
+
+## 30. Fixtures adversariales
+
+`import "node:fs"` · `from "openai"` · `export … from "react"` · `import("pg")` · `require("sqlite3")` · chemin `platform` · `process.env` — détectées ; commentaires ignorés.
+
+## 31. Limites résiduelles
+
+Pas de parser AST complet · pas de dépendance nouvelle · chaînes adversariales uniquement en fixtures de test · pas de claim de couverture hors formes listées.
+
+## 32. FIND-06 préservé
+
+OPTION C SELECTED — DEPENDENCY-CLOSED INCREMENTAL PACKAGE — aucun scan de fermeture · aucun manifest inventé · aucun staging.
+
+## 33. Manifest pending
+
+EXACT MANIFEST VALIDATION PENDING — TO BE RESOLVED DURING PR READINESS RE-RUN BEFORE ANY GIT ADD.
+
+## 34. FIND-07 préservé
+
+`assertDistinctEvidenceClasses` inchangé · tests evidence mapping inchangés · note acceptée.
+
+## 35. FIND-08 supprimé
+
+`FINOPS_INVALID_SOURCE` retiré de `FinOpsDetailCode` · aucune dépendance runtime active hors types avant suppression · réintroduction uniquement par futur lot autorisé.
+
+## 36. DetailCodes finaux
+
+`FINOPS_INVALID_TIMESTAMP` · `FINOPS_INVALID_PERIOD` · `FINOPS_INVALID_TIMEZONE` · `FINOPS_UNKNOWN_AS_ZERO` · `FINOPS_EVIDENCE_COLLAPSE`.
+
+## 37. Tests modifiés
+
+`period.test.ts` · `domainInvariants.test.ts` · `importBoundaries.test.ts` — seuls tests modifiés.
+
+## 38. Nouveaux cas de test
+
+Dates impossibles · offsets hors bornes · périodes partielles/multi-mois/non-Z · barrel public · extracteur 5 formes · fixtures adversariales · process.env · FIND-03 non-régression textuelle.
+
+## 39. Résultat tests ciblés
+
+`npm run test -- __tests__/oa/finops` — exit 0 · 6 files · **54** tests · rerun exit 0.
+
+## 40. Résultat typecheck
+
+`npm run typecheck` — exit 0 · aucune erreur.
+
+## 41. Résultat lint
+
+`npm run lint` — exit 0 · No ESLint warnings or errors.
+
+## 42. Résultat suite complète
+
+`npm run test` — exit 0 · **136** files · **1370** tests · rerun exit 0.
+
+## 43. Warnings
+
+Lint : avertissement dépréciation `next lint` (préexistant, non bloquant). Aucun warning ESLint.
+
+## 44. Corrections intermédiaires
+
+Aucune — première chaîne et rerun verts sans correction hors scope.
+
+## 45. Critères d’acceptation
+
+50/50 critères GO satisfaits (six fichiers · calendrier · canonique · barrel · imports · FIND-03/06/07 préservés · SoT/blocking/ESTIMATION préservés · package inchangé · docs protégés · publication non autorisée · TB-04-04 NOT DONE).
+
+## 46. Package/lockfile
+
+`package.json` `fcb004b5…` · `package-lock.json` `042fc446…` — inchangés · aucun `npm install`.
+
+## 47. Contrôle scope
+
+MODIFY six fichiers autorisés · BYTE-IDENTICAL huit T0 · 103 MODIFY · 130 CREATE · 104–129 BYTE-IDENTICAL · 131 ABSENT · aucun staged · aucun Money/provider/persistence dans le delta produit.
+
+## 48. Sécurité / RSSI
+
+Domaine pur sans I/O · pas de secrets · pas de `process.env` dans le domaine · frontières d’import durcies · surface publique réduite.
+
+## 49. RGPD
+
+Aucune donnée personnelle ajoutée · minimisation préservée · pas de logging de payloads utilisateur.
+
+## 50. Performance
+
+Validation O(1) par timestamp/période · tests import O(fichiers T0) · pas de dépendance runtime nouvelle.
+
+## 51. GreenOps
+
+Pas de boucle inutile · pas de package ajouté · validations ciblées puis suite unique + rerun justifié.
+
+## 52. Résilience
+
+Erreurs structurées `FinOpsDomainError` · pas de normalisation silencieuse calendaire · reject explicite des périodes non canoniques.
+
+## 53. Réversibilité
+
+Delta local non commité · revert possible fichier par fichier · period.ts intact · décisions 123/125/129 non mutées.
+
+## 54. Risques résiduels
+
+FIND-03 (unknown textuel) ouvert jusqu’à Money · manifest Option C non validé · PR readiness re-run non consommé · publication toujours non autorisée.
+
+## 55. Dette résiduelle
+
+PR-T0-FIND-03 ACCEPTED — DEFERRED TO FUTURE MONEY REPRESENTATION · packaging dependency-closed exact pending · T1–T7 non démarrés.
+
+## 56. Impact TB-04-04
+
+T0 fix execution = completed locally · fix evidence = produced · PR readiness re-run = pending · publication = not authorized · DONE = **no**.
+
+## 57. Impact TB-02-05
+
+Aucun metering runtime · aucun ledger · aucun contrôle actif · statut DONE inchangé (non DONE).
+
+## 58. T1 à T7
+
+**NOT AUTHORIZED — NOT STARTED**.
+
+## 59. LOT-D1
+
+**NOT AUTHORIZED** · Delivery LOT-D1 **NOT-CONSUMED**.
+
+## 60. Graphe 33/56
+
+33 nœuds · 56 arêtes · acyclique — préservé.
+
+## 61. Priorités
+
+P0=6 · P1=13 · P2=13 · P3=1 — préservées.
+
+## 62. Aucun backlog item DONE
+
+Aucun item marqué DONE · TB-04-04 NOT DONE.
+
+## 63. Publication non autorisée
+
+Aucun git add · aucun commit/push/PR/merge projet · packaging final non autorisé.
+
+## 64. Local Git Truth finale
+
+Branche `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness-fixes` @ `8dc54db…` · 0/0 · aucun upstream · fichiers T0/docs locaux untracked · aucun staged.
+
+## 65. Prochaine gate candidate
+
+```text
+GO PR READINESS SFIA STUDIO —
+ASSISTANT SFIA NATIF OPENAI —
+REVIEW FINOPS TECHNICAL LOT T0 AFTER FIXES
+```
+
+Candidate uniquement — non consommée. N’autorise aucun git add/commit/push/PR/merge · ni T1–T7 · ni LOT-D1.
+
+## 66. Verdict
+
+**FINOPS TECHNICAL LOT T0 PR READINESS FINDINGS FIX EXECUTED —**
+**BOUNDED CORRECTIVE DELIVERY T0 CONSUMED —**
+**SIX AUTHORIZED FILES MODIFIED —**
+**ZERO FILE OUTSIDE SCOPE MODIFIED —**
+**FIND-01 STRICT CALENDAR ROUND-TRIP VALIDATION IMPLEMENTED —**
+**FIND-02 CANONICAL UTC CALENDAR-MONTH VALIDATION IMPLEMENTED —**
+**FIND-03 RESERVE ACCEPTED AND DEFERRED TO MONEY —**
+**FIND-04 PUBLIC BARREL REDUCED —**
+**FIND-05 IMPORT BOUNDARY TEST HARDENED —**
+**FIND-06 OPTION C PRESERVED — EXACT MANIFEST VALIDATION PENDING —**
+**FIND-07 NOTE ACCEPTED AND NO FIX APPLIED —**
+**FIND-08 FINOPS_INVALID_SOURCE REMOVED —**
+**TARGETED FINOPS TESTS PASSED — TYPECHECK PASSED — LINT PASSED — FULL TEST SUITE PASSED —**
+**PACKAGE AND LOCKFILE UNCHANGED —**
+**PUBLICATION NOT AUTHORIZED — PR READINESS RE-RUN REQUIRED —**
+**NO GIT ADD, PROJECT COMMIT, PUSH, PR OR MERGE —**
+**T1 TO T7 NOT AUTHORIZED — TB-04-04 NOT DONE — LOT-D1 NOT AUTHORIZED —**
+**READY FOR CHATGPT VALIDATION AND MORRIS T0 PR READINESS RE-RUN DECISION**

```

```diff
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/types.ts b/projects/sfia-studio/app/lib/oa/finops/domain/types.ts
--- a/projects/sfia-studio/app/lib/oa/finops/domain/types.ts (pre-fix 1f27721ddb930257e0491bc901f0de1a230fcaa5fd9b706e42cd40e53b026b09)
+++ b/projects/sfia-studio/app/lib/oa/finops/domain/types.ts (post-fix f32ccf3f4532b04d7dc82948276bddb83c869e6abb78e1093819c819ffcad254)
+/**
+ * FinOps T0 — pure domain contracts (provider- and persistence-independent).
+ */
+
+export type FinOpsPeriod = {
+  readonly periodStart: string;
+  readonly periodEnd: string;
+  readonly timezone: "UTC";
+};
+
+export type FinOpsSourceOfTruth =
+  | "BILLED"
+  | "PROVIDER_OBSERVED"
+  | "API_USAGE"
+  | "LOCAL_COUNT"
+  | "PARAMETRIC_ESTIMATE"
+  | "UNKNOWN";
+
+export type FinOpsCostEvidenceClass =
+  | "estimated"
+  | "observed"
+  | "billed"
+  | "unknown";
+
+export type FinOpsBlockingReason =
+  | "SOURCE_MAY_BLOCK"
+  | "API_USAGE_NEVER_BLOCKS"
+  | "LOCAL_COUNT_NEVER_BLOCKS"
+  | "ESTIMATE_NEVER_BLOCKS"
+  | "UNKNOWN_NEVER_BLOCKS";
+
+export type FinOpsBlockingDecision = {
+  readonly eligible: boolean;
+  readonly reason: FinOpsBlockingReason;
+  readonly source: FinOpsSourceOfTruth;
+  readonly confidenceClass: FinOpsCostEvidenceClass;
+};
+
+export type FinOpsDetailCode =
+  | "FINOPS_INVALID_TIMESTAMP"
+  | "FINOPS_INVALID_PERIOD"
+  | "FINOPS_INVALID_TIMEZONE"
+  | "FINOPS_UNKNOWN_AS_ZERO"
+  | "FINOPS_EVIDENCE_COLLAPSE";
+
+/** Lower rank = more authoritative (SoT hierarchy 1–6). */
+export const FINOPS_SOT_RANK = {
+  BILLED: 1,
+  PROVIDER_OBSERVED: 2,
+  API_USAGE: 3,
+  LOCAL_COUNT: 4,
+  PARAMETRIC_ESTIMATE: 5,
+  UNKNOWN: 6,
+} as const satisfies Record<FinOpsSourceOfTruth, 1 | 2 | 3 | 4 | 5 | 6>;
+
+export const FINOPS_SOURCES = [
+  "BILLED",
+  "PROVIDER_OBSERVED",
+  "API_USAGE",
+  "LOCAL_COUNT",
+  "PARAMETRIC_ESTIMATE",
+  "UNKNOWN",
+] as const satisfies ReadonlyArray<FinOpsSourceOfTruth>;

diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts
--- a/projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts (pre-fix e27a5b9dce23ae1d2427e1684a17ee8a82ac81db1a3a8064d471200d7ff35b7b)
+++ b/projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts (post-fix 69f590de4e4c0b35a6787800c95c870d3b7fbe2b5c04b833e964dfef934a1fa6)
+/**
+ * FinOps T0 — pure domain invariants (no hidden wall-clock, no Money arithmetic).
+ */
+
+import { createFinOpsError, FinOpsDomainError } from "./errors";
+import type { FinOpsCostEvidenceClass, FinOpsPeriod } from "./types";
+
+export type InvariantViolation = {
+  readonly detailCode:
+    | "FINOPS_INVALID_TIMESTAMP"
+    | "FINOPS_INVALID_PERIOD"
+    | "FINOPS_INVALID_TIMEZONE"
+    | "FINOPS_UNKNOWN_AS_ZERO";
+  readonly reason: string;
+};
+
+/**
+ * ISO-8601 instant with Z or numeric offset.
+ * Captures calendar/time components for strict round-trip validation.
+ */
+const ISO_INSTANT_RE =
+  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,9}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;
+
+function fractionToMilliseconds(fraction: string | undefined): number {
+  if (fraction === undefined) {
+    return 0;
+  }
+  const padded = `${fraction}000`.slice(0, 3);
+  return Number(padded);
+}
+
+export function validateIsoTimestamp(
+  instantIso: string,
+): InvariantViolation | null {
+  if (typeof instantIso !== "string" || instantIso.length === 0) {
+    return {
+      detailCode: "FINOPS_INVALID_TIMESTAMP",
+      reason: "timestamp_empty_or_not_string",
+    };
+  }
+  const match = ISO_INSTANT_RE.exec(instantIso);
+  if (!match) {
+    return {
+      detailCode: "FINOPS_INVALID_TIMESTAMP",
+      reason: "timestamp_not_iso_instant",
+    };
+  }
+
+  const year = Number(match[1]);
+  const month = Number(match[2]);
+  const day = Number(match[3]);
+  const hour = Number(match[4]);
+  const minute = Number(match[5]);
+  const second = Number(match[6]);
+  const fraction = match[7];
+  const offsetSign = match[8];
+  const offsetHour = match[9] !== undefined ? Number(match[9]) : undefined;
+  const offsetMinute = match[10] !== undefined ? Number(match[10]) : undefined;
+  const millis = fractionToMilliseconds(fraction);
+
+  if (month < 1 || month > 12) {
+    return {
+      detailCode: "FINOPS_INVALID_TIMESTAMP",
+      reason: "timestamp_invalid_calendar_components",
+    };
+  }
+  if (hour < 0 || hour > 23) {
+    return {
+      detailCode: "FINOPS_INVALID_TIMESTAMP",
+      reason: "timestamp_invalid_calendar_components",
+    };
+  }
+  if (minute < 0 || minute > 59) {
+    return {
+      detailCode: "FINOPS_INVALID_TIMESTAMP",
+      reason: "timestamp_invalid_calendar_components",
+    };
+  }
+  if (second < 0 || second > 59) {
+    return {
+      detailCode: "FINOPS_INVALID_TIMESTAMP",
+      reason: "timestamp_invalid_calendar_components",
+    };
+  }
+
+  if (offsetSign !== undefined) {
+    if (
+      offsetHour === undefined ||
+      offsetMinute === undefined ||
+      offsetHour < 0 ||
+      offsetHour > 14 ||
+      offsetMinute < 0 ||
+      offsetMinute > 59 ||
+      (offsetHour === 14 && offsetMinute !== 0)
+    ) {
+      return {
+        detailCode: "FINOPS_INVALID_TIMESTAMP",
+        reason: "timestamp_invalid_calendar_components",
+      };
+    }
+  }
+
+  // Round-trip calendar components without applying the offset (years 0000–0099 safe).
+  const control = new Date(0);
+  control.setUTCFullYear(year, month - 1, day);
+  control.setUTCHours(hour, minute, second, millis);
+
+  if (
+    control.getUTCFullYear() !== year ||
+    control.getUTCMonth() !== month - 1 ||
+    control.getUTCDate() !== day ||
+    control.getUTCHours() !== hour ||
+    control.getUTCMinutes() !== minute ||
+    control.getUTCSeconds() !== second ||
+    control.getUTCMilliseconds() !== millis
+  ) {
+    return {
+      detailCode: "FINOPS_INVALID_TIMESTAMP",
+      reason: "timestamp_invalid_calendar_components",
+    };
+  }
+
+  const ms = Date.parse(instantIso);
+  if (!Number.isFinite(ms)) {
+    return {
+      detailCode: "FINOPS_INVALID_TIMESTAMP",
+      reason: "timestamp_not_parseable",
+    };
+  }
+  return null;
+}
+
+export function validateFinOpsPeriodShape(
+  period: FinOpsPeriod,
+): InvariantViolation | null {
+  if (period.timezone !== "UTC") {
+    return {
+      detailCode: "FINOPS_INVALID_TIMEZONE",
+      reason: "timezone_must_be_utc",
+    };
+  }
+  const startViolation = validateIsoTimestamp(period.periodStart);
+  if (startViolation) {
+    return {
+      detailCode: "FINOPS_INVALID_PERIOD",
+      reason: "period_start_invalid",
+    };
+  }
+  const endViolation = validateIsoTimestamp(period.periodEnd);
+  if (endViolation) {
+    return {
+      detailCode: "FINOPS_INVALID_PERIOD",
+      reason: "period_end_invalid",
+    };
+  }
+  const startMs = Date.parse(period.periodStart);
+  const endMs = Date.parse(period.periodEnd);
+  if (!(startMs < endMs)) {
+    return {
+      detailCode: "FINOPS_INVALID_PERIOD",
+      reason: "period_start_not_strictly_before_end",
+    };
+  }
+  return null;
+}
+
+/**
+ * Canonical FinOps UTC calendar-month period (internal; not public barrel).
+ * Start = first UTC instant of month; end = first UTC instant of next month; Z + toISOString form.
+ */
+function validateCanonicalUtcMonthPeriod(
+  period: FinOpsPeriod,
+): InvariantViolation | null {
+  if (!period.periodStart.endsWith("Z") || !period.periodEnd.endsWith("Z")) {
+    return {
+      detailCode: "FINOPS_INVALID_PERIOD",
+      reason: "period_start_not_utc_month_boundary",
+    };
+  }
+
+  const startMs = Date.parse(period.periodStart);
+  const start = new Date(startMs);
+  const canonicalStart = new Date(0);
+  canonicalStart.setUTCFullYear(
+    start.getUTCFullYear(),
+    start.getUTCMonth(),
+    1,
+  );
+  canonicalStart.setUTCHours(0, 0, 0, 0);
+  const expectedStart = canonicalStart.toISOString();
+
+  if (period.periodStart !== expectedStart) {
+    return {
+      detailCode: "FINOPS_INVALID_PERIOD",
+      reason: "period_start_not_utc_month_boundary",
+    };
+  }
+
+  const expectedEnd = new Date(0);
+  expectedEnd.setUTCFullYear(
+    start.getUTCFullYear(),
+    start.getUTCMonth() + 1,
+    1,
+  );
+  expectedEnd.setUTCHours(0, 0, 0, 0);
+  if (period.periodEnd !== expectedEnd.toISOString()) {
+    return {
+      detailCode: "FINOPS_INVALID_PERIOD",
+      reason: "period_end_not_next_utc_month_boundary",
+    };
+  }
+
+  return null;
+}
+
+/**
+ * Unknown evidence must never be silently treated as numeric zero.
+ * Money representation remains deferred — this only guards assimilation.
+ */
+export function assertUnknownNotNumericZero(
+  evidenceClass: FinOpsCostEvidenceClass,
+  representedAs: unknown,
+): InvariantViolation | null {
+  if (evidenceClass !== "unknown") {
+    return null;
+  }
+  if (
+    representedAs === 0 ||
+    representedAs === BigInt(0) ||
+    representedAs === "0" ||
+    representedAs === "0.0" ||
+    representedAs === "0.00"
+  ) {
+    return {
+      detailCode: "FINOPS_UNKNOWN_AS_ZERO",
+      reason: "unknown_must_not_equal_numeric_zero",
+    };
+  }
+  return null;
+}
+
+export function requireValidIsoTimestamp(instantIso: string): number {
+  const violation = validateIsoTimestamp(instantIso);
+  if (violation) {
+    throw new FinOpsDomainError(
+      createFinOpsError({
+        detailCode: violation.detailCode,
+        reason: violation.reason,
+        timestamp: instantIso,
+      }),
+    );
+  }
+  return Date.parse(instantIso);
+}
+
+export function requireValidFinOpsPeriod(period: FinOpsPeriod): void {
+  const shapeViolation = validateFinOpsPeriodShape(period);
+  if (shapeViolation) {
+    throw new FinOpsDomainError(
+      createFinOpsError({
+        detailCode: shapeViolation.detailCode,
+        reason: shapeViolation.reason,
+      }),
+    );
+  }
+  const canonicalViolation = validateCanonicalUtcMonthPeriod(period);
+  if (canonicalViolation) {
+    throw new FinOpsDomainError(
+      createFinOpsError({
+        detailCode: canonicalViolation.detailCode,
+        reason: canonicalViolation.reason,
+      }),
+    );
+  }
+}

diff --git a/projects/sfia-studio/app/lib/oa/finops/index.ts b/projects/sfia-studio/app/lib/oa/finops/index.ts
--- a/projects/sfia-studio/app/lib/oa/finops/index.ts (pre-fix 44008d949a8342b558a37bed755fcda6953a406b906f7a84ecec385ed8c7ccec)
+++ b/projects/sfia-studio/app/lib/oa/finops/index.ts (post-fix 978fba3f48988b442909aa8cc4de39932c72d224a11dcfd6ef8ad127237b027f)
+/**
+ * Public FinOps T0 API — pure domain contracts only.
+ */
+
+export type {
+  FinOpsBlockingDecision,
+  FinOpsBlockingReason,
+  FinOpsCostEvidenceClass,
+  FinOpsDetailCode,
+  FinOpsPeriod,
+  FinOpsSourceOfTruth,
+} from "./domain/types";
+export { FINOPS_SOT_RANK, FINOPS_SOURCES } from "./domain/types";
+
+export type { FinOpsStructuredError } from "./domain/errors";
+export { createFinOpsError, FinOpsDomainError } from "./domain/errors";
+
+export type { InvariantViolation } from "./domain/invariants";
+export {
+  assertUnknownNotNumericZero,
+  validateFinOpsPeriodShape,
+  validateIsoTimestamp,
+} from "./domain/invariants";
+
+export {
+  assignInstantToPeriod,
+  compareFinOpsPeriods,
+  computeUtcMonthPeriod,
+  finOpsPeriodKey,
+  periodContainsInstant,
+} from "./domain/period";
+
+export {
+  compareSourceOfTruth,
+  sourceMayBlock,
+  sourceMayInform,
+  sourceMayRequestHumanReview,
+  sourceOfTruthRank,
+} from "./domain/sourceOfTruth";
+
+export {
+  assertDistinctEvidenceClasses,
+  classifyCostEvidenceFromSource,
+  isUnknownEvidence,
+} from "./domain/costEvidence";
+
+export {
+  ESTIMATION_NEVER_BLOCKS,
+  evaluateBlockingEligibility,
+} from "./domain/blockingEligibility";

diff --git a/projects/sfia-studio/app/__tests__/oa/finops/period.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/period.test.ts
--- a/projects/sfia-studio/app/__tests__/oa/finops/period.test.ts (pre-fix 9d275dfdf8dcb8b5c120670ab1db6ebb9cfd7a49e3fbbedc4cce79d8659de552)
+++ b/projects/sfia-studio/app/__tests__/oa/finops/period.test.ts (post-fix d142cfd2d53466f054eb2f42a632ec8e9ffc143f6abb71418a290f057975f705)
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  FinOpsDomainError,
+  assignInstantToPeriod,
+  compareFinOpsPeriods,
+  computeUtcMonthPeriod,
+  finOpsPeriodKey,
+  periodContainsInstant,
+} from "@/lib/oa/finops";
+
+describe("FinOps T0 period (T-TECH-07)", () => {
+  it("maps January instant to February-bounded UTC month", () => {
+    const period = computeUtcMonthPeriod("2026-01-15T12:00:00.000Z");
+    expect(period).toEqual({
+      periodStart: "2026-01-01T00:00:00.000Z",
+      periodEnd: "2026-02-01T00:00:00.000Z",
+      timezone: "UTC",
+    });
+    expect(finOpsPeriodKey(period)).toBe("2026-01");
+  });
+
+  it("maps December to January of the next year", () => {
+    const period = computeUtcMonthPeriod("2026-12-31T23:59:59.999Z");
+    expect(period.periodStart).toBe("2026-12-01T00:00:00.000Z");
+    expect(period.periodEnd).toBe("2027-01-01T00:00:00.000Z");
+    expect(finOpsPeriodKey(period)).toBe("2026-12");
+  });
+
+  it("places leap-day in February of a leap year", () => {
+    const period = computeUtcMonthPeriod("2024-02-29T10:00:00.000Z");
+    expect(period.periodStart).toBe("2024-02-01T00:00:00.000Z");
+    expect(period.periodEnd).toBe("2024-03-01T00:00:00.000Z");
+    expect(periodContainsInstant(period, "2024-02-29T23:59:59.999Z")).toBe(
+      true,
+    );
+  });
+
+  it("treats periodStart as inclusive and periodEnd as exclusive", () => {
+    const period = computeUtcMonthPeriod("2026-03-10T00:00:00.000Z");
+    expect(periodContainsInstant(period, period.periodStart)).toBe(true);
+    expect(periodContainsInstant(period, period.periodEnd)).toBe(false);
+    expect(
+      periodContainsInstant(period, "2026-03-31T23:59:59.999Z"),
+    ).toBe(true);
+  });
+
+  it("converts offset timestamps to the UTC month of the instant", () => {
+    // 2026-12-31T23:00:00-01:00 === 2027-01-01T00:00:00.000Z → January 2027
+    const period = computeUtcMonthPeriod("2026-12-31T23:00:00.000-01:00");
+    expect(period.periodStart).toBe("2027-01-01T00:00:00.000Z");
+    expect(period.periodEnd).toBe("2027-02-01T00:00:00.000Z");
+    expect(finOpsPeriodKey(period)).toBe("2027-01");
+  });
+
+  it("accepts valid +14:00 offset for month assignment", () => {
+    const period = computeUtcMonthPeriod("2026-01-01T00:00:00.000+14:00");
+    // +14:00 → previous day UTC → December 2025
+    expect(period.periodStart).toBe("2025-12-01T00:00:00.000Z");
+    expect(period.periodEnd).toBe("2026-01-01T00:00:00.000Z");
+  });
+
+  it("is unaffected by DST because boundaries are UTC", () => {
+    // US spring-forward window does not change UTC month math.
+    const before = computeUtcMonthPeriod("2026-03-08T06:59:59.000Z");
+    const after = computeUtcMonthPeriod("2026-03-08T07:00:01.000Z");
+    expect(before).toEqual(after);
+    expect(finOpsPeriodKey(before)).toBe("2026-03");
+  });
+
+  it("assigns late events by occurredAt, not reception time (T-TECH-07)", () => {
+    const occurredAt = "2026-01-31T23:30:00.000Z";
+    const receptionAt = "2026-02-02T09:00:00.000Z";
+    const assigned = assignInstantToPeriod(occurredAt);
+    const receptionPeriod = computeUtcMonthPeriod(receptionAt);
+    expect(assigned).toEqual(computeUtcMonthPeriod(occurredAt));
+    expect(finOpsPeriodKey(assigned)).toBe("2026-01");
+    expect(finOpsPeriodKey(receptionPeriod)).toBe("2026-02");
+    expect(compareFinOpsPeriods(assigned, receptionPeriod)).toBe(-1);
+  });
+
+  it("compares periods deterministically", () => {
+    const a = computeUtcMonthPeriod("2026-01-01T00:00:00.000Z");
+    const b = computeUtcMonthPeriod("2026-02-01T00:00:00.000Z");
+    const a2 = computeUtcMonthPeriod("2026-01-20T00:00:00.000Z");
+    expect(compareFinOpsPeriods(a, b)).toBe(-1);
+    expect(compareFinOpsPeriods(b, a)).toBe(1);
+    expect(compareFinOpsPeriods(a, a2)).toBe(0);
+  });
+
+  it("is deterministic for the same injected instant", () => {
+    const iso = "2026-06-15T12:34:56.789Z";
+    expect(computeUtcMonthPeriod(iso)).toEqual(computeUtcMonthPeriod(iso));
+  });
+
+  it("rejects invalid timestamps including impossible calendar dates", () => {
+    expect(() => computeUtcMonthPeriod("not-a-timestamp")).toThrow(
+      FinOpsDomainError,
+    );
+    expect(() => computeUtcMonthPeriod("2026-01-01")).toThrow(
+      FinOpsDomainError,
+    );
+    for (const iso of [
+      "2023-02-29T00:00:00.000Z",
+      "2026-02-30T00:00:00.000Z",
+      "2026-04-31T00:00:00.000Z",
+    ]) {
+      expect(() => computeUtcMonthPeriod(iso)).toThrow(FinOpsDomainError);
+    }
+  });
+
+  it("rejects partial periods in periodContainsInstant via canonical require", () => {
+    const partial = {
+      periodStart: "2026-01-01T00:00:00.000Z",
+      periodEnd: "2026-01-15T00:00:00.000Z",
+      timezone: "UTC" as const,
+    };
+    expect(() =>
+      periodContainsInstant(partial, "2026-01-10T00:00:00.000Z"),
+    ).toThrow(FinOpsDomainError);
+  });
+
+  it("rejects multi-month periods in finOpsPeriodKey via canonical require", () => {
+    const multi = {
+      periodStart: "2026-01-01T00:00:00.000Z",
+      periodEnd: "2026-03-01T00:00:00.000Z",
+      timezone: "UTC" as const,
+    };
+    expect(() => finOpsPeriodKey(multi)).toThrow(FinOpsDomainError);
+  });
+
+  it("accepts computeUtcMonthPeriod outputs for domain operations", () => {
+    const period = computeUtcMonthPeriod("2024-02-15T00:00:00.000Z");
+    expect(periodContainsInstant(period, "2024-02-20T00:00:00.000Z")).toBe(
+      true,
+    );
+    expect(finOpsPeriodKey(period)).toBe("2024-02");
+  });
+});

diff --git a/projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts
--- a/projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts (pre-fix 98a885ca11d6a4de5427abfbcd989161d833ac23dcab1b4933281e1a3f7e3b74)
+++ b/projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts (post-fix db8b4a6b9f558179250a14e91d099b0941d20295ba0f93c10aedc0ba836b9e7f)
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import * as FinOpsPublic from "@/lib/oa/finops";
+import {
+  assertUnknownNotNumericZero,
+  computeUtcMonthPeriod,
+  validateFinOpsPeriodShape,
+  validateIsoTimestamp,
+  type FinOpsPeriod,
+} from "@/lib/oa/finops";
+import {
+  requireValidFinOpsPeriod,
+  requireValidIsoTimestamp,
+} from "@/lib/oa/finops/domain/invariants";
+import { FinOpsDomainError } from "@/lib/oa/finops";
+
+describe("FinOps T0 domain invariants", () => {
+  it("accepts valid ISO instants with Z or offset", () => {
+    expect(validateIsoTimestamp("2026-01-01T00:00:00.000Z")).toBeNull();
+    expect(validateIsoTimestamp("2026-06-15T12:00:00.000+02:00")).toBeNull();
+    expect(validateIsoTimestamp("2024-02-29T00:00:00.000Z")).toBeNull();
+    expect(validateIsoTimestamp("2026-12-31T23:00:00.000-01:00")).toBeNull();
+    expect(validateIsoTimestamp("2026-01-01T00:00:00.000+14:00")).toBeNull();
+  });
+
+  it("rejects impossible calendar dates by round-trip", () => {
+    for (const iso of [
+      "2023-02-29T00:00:00.000Z",
+      "2026-02-30T00:00:00.000Z",
+      "2026-04-31T00:00:00.000Z",
+    ]) {
+      expect(validateIsoTimestamp(iso)).toEqual({
+        detailCode: "FINOPS_INVALID_TIMESTAMP",
+        reason: "timestamp_invalid_calendar_components",
+      });
+    }
+  });
+
+  it("rejects out-of-range time and offset components", () => {
+    for (const iso of [
+      "2026-00-01T00:00:00.000Z",
+      "2026-13-01T00:00:00.000Z",
+      "2026-01-01T24:00:00.000Z",
+      "2026-01-01T00:60:00.000Z",
+      "2026-01-01T00:00:60.000Z",
+      "2026-01-01T00:00:00.000+14:01",
+      "2026-01-01T00:00:00.000+15:00",
+    ]) {
+      expect(validateIsoTimestamp(iso)?.detailCode).toBe(
+        "FINOPS_INVALID_TIMESTAMP",
+      );
+    }
+  });
+
+  it("rejects invalid timestamps", () => {
+    expect(validateIsoTimestamp("")).not.toBeNull();
+    expect(validateIsoTimestamp("2026-01-01")).not.toBeNull();
+    expect(validateIsoTimestamp("not-iso")).not.toBeNull();
+    expect(validateIsoTimestamp("2026-13-40T99:99:99.000Z")).not.toBeNull();
+  });
+
+  it("accepts a valid UTC period shape", () => {
+    const period = computeUtcMonthPeriod("2026-04-01T00:00:00.000Z");
+    expect(validateFinOpsPeriodShape(period)).toBeNull();
+  });
+
+  it("validateFinOpsPeriodShape still accepts generic chronological UTC shapes", () => {
+    // Generic shape: valid timestamps, UTC, start < end — not necessarily a full month.
+    expect(
+      validateFinOpsPeriodShape({
+        periodStart: "2026-01-02T00:00:00.000Z",
+        periodEnd: "2026-01-15T00:00:00.000Z",
+        timezone: "UTC",
+      }),
+    ).toBeNull();
+  });
+
+  it("rejects non-UTC timezone", () => {
+    const bad = {
+      periodStart: "2026-01-01T00:00:00.000Z",
+      periodEnd: "2026-02-01T00:00:00.000Z",
+      timezone: "Europe/Paris",
+    } as unknown as FinOpsPeriod;
+    expect(validateFinOpsPeriodShape(bad)).toEqual({
+      detailCode: "FINOPS_INVALID_TIMEZONE",
+      reason: "timezone_must_be_utc",
+    });
+  });
+
+  it("rejects start >= end", () => {
+    expect(
+      validateFinOpsPeriodShape({
+        periodStart: "2026-02-01T00:00:00.000Z",
+        periodEnd: "2026-02-01T00:00:00.000Z",
+        timezone: "UTC",
+      }),
+    ).toEqual({
+      detailCode: "FINOPS_INVALID_PERIOD",
+      reason: "period_start_not_strictly_before_end",
+    });
+    expect(
+      validateFinOpsPeriodShape({
+        periodStart: "2026-03-01T00:00:00.000Z",
+        periodEnd: "2026-02-01T00:00:00.000Z",
+        timezone: "UTC",
+      })?.detailCode,
+    ).toBe("FINOPS_INVALID_PERIOD");
+  });
+
+  it("requireValidFinOpsPeriod accepts canonical months including leap Feb and Dec→Jan", () => {
+    expect(() =>
+      requireValidFinOpsPeriod(
+        computeUtcMonthPeriod("2026-04-15T12:00:00.000Z"),
+      ),
+    ).not.toThrow();
+    expect(() =>
+      requireValidFinOpsPeriod(
+        computeUtcMonthPeriod("2024-02-29T10:00:00.000Z"),
+      ),
+    ).not.toThrow();
+    expect(() =>
+      requireValidFinOpsPeriod(
+        computeUtcMonthPeriod("2026-12-31T23:59:59.999Z"),
+      ),
+    ).not.toThrow();
+  });
+
+  it("requireValidFinOpsPeriod rejects non-canonical periods", () => {
+    const cases: Array<{ period: FinOpsPeriod; reason: string }> = [
+      {
+        period: {
+          periodStart: "2026-01-02T00:00:00.000Z",
+          periodEnd: "2026-02-01T00:00:00.000Z",
+          timezone: "UTC",
+        },
+        reason: "period_start_not_utc_month_boundary",
+      },
+      {
+        period: {
+          periodStart: "2026-01-01T00:00:00.001Z",
+          periodEnd: "2026-02-01T00:00:00.000Z",
+          timezone: "UTC",
+        },
+        reason: "period_start_not_utc_month_boundary",
+      },
+      {
+        period: {
+          periodStart: "2026-01-01T00:00:00.000Z",
+          periodEnd: "2026-01-15T00:00:00.000Z",
+          timezone: "UTC",
+        },
+        reason: "period_end_not_next_utc_month_boundary",
+      },
+      {
+        period: {
+          periodStart: "2026-01-01T00:00:00.000Z",
+          periodEnd: "2026-03-01T00:00:00.000Z",
+          timezone: "UTC",
+        },
+        reason: "period_end_not_next_utc_month_boundary",
+      },
+      {
+        // Offset-equivalent midnight but not canonical Z form
+        period: {
+          periodStart: "2026-01-01T00:00:00.000+00:00",
+          periodEnd: "2026-02-01T00:00:00.000+00:00",
+          timezone: "UTC",
+        },
+        reason: "period_start_not_utc_month_boundary",
+      },
+    ];
+    for (const { period, reason } of cases) {
+      try {
+        requireValidFinOpsPeriod(period);
+        expect.unreachable(`expected throw for ${reason}`);
+      } catch (err) {
+        expect(err).toBeInstanceOf(FinOpsDomainError);
+        expect((err as FinOpsDomainError).structured.reason).toBe(reason);
+      }
+    }
+  });
+
+  it("public barrel omits require* helpers but keeps support symbols", () => {
+    expect("requireValidIsoTimestamp" in FinOpsPublic).toBe(false);
+    expect("requireValidFinOpsPeriod" in FinOpsPublic).toBe(false);
+    expect(FinOpsPublic.FINOPS_SOURCES).toBeDefined();
+    expect(FinOpsPublic.createFinOpsError).toBeTypeOf("function");
+    expect(FinOpsPublic.FinOpsDomainError).toBeTypeOf("function");
+    // Internal helpers remain available for domain/tests
+    expect(typeof requireValidIsoTimestamp).toBe("function");
+    expect(typeof requireValidFinOpsPeriod).toBe("function");
+  });
+
+  it("FINOPS_INVALID_SOURCE is absent from public FinOpsDetailCode runtime surface", () => {
+    const sample = FinOpsPublic.createFinOpsError({
+      detailCode: "FINOPS_INVALID_TIMESTAMP",
+      reason: "probe",
+    });
+    expect(sample.detailCode).toBe("FINOPS_INVALID_TIMESTAMP");
+    expect(JSON.stringify(FinOpsPublic)).not.toContain("FINOPS_INVALID_SOURCE");
+  });
+
+  it("never lets unknown become numeric zero", () => {
+    expect(assertUnknownNotNumericZero("unknown", 0)?.detailCode).toBe(
+      "FINOPS_UNKNOWN_AS_ZERO",
+    );
+    expect(assertUnknownNotNumericZero("unknown", undefined)).toBeNull();
+    // FIND-03 deferred textual variants remain unhandled by design
+    expect(assertUnknownNotNumericZero("unknown", "00")).toBeNull();
+    expect(assertUnknownNotNumericZero("unknown", "0.000")).toBeNull();
+    expect(assertUnknownNotNumericZero("unknown", "-0")).toBeNull();
+  });
+
+  it("has no side effects and does not mutate period objects", () => {
+    const period = computeUtcMonthPeriod("2026-05-01T00:00:00.000Z");
+    const frozen = Object.freeze({ ...period });
+    expect(validateFinOpsPeriodShape(frozen)).toBeNull();
+    expect(frozen).toEqual(period);
+  });
+});

diff --git a/projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts
--- a/projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts (pre-fix 49068a52271e98fbf1de55f17e191182f141a8215b8e1bcdc32102cbaa8ccc8d)
+++ b/projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts (post-fix e22187f6342bd4dda9d5ed663e2fc1bd74253c40e635047c3b728dc210212bdb)
+/**
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const MODULE_ROOT = path.join(APP_ROOT, "lib/oa/finops");
+
+const FORBIDDEN_EXACT = new Set([
+  "node:fs",
+  "node:fs/promises",
+  "node:net",
+  "node:crypto",
+  "pg",
+  "sqlite",
+  "sqlite3",
+  "better-sqlite3",
+  "openai",
+  "next",
+  "react",
+]);
+
+const FORBIDDEN_SEGMENTS = [
+  "platform",
+  "execution-run",
+  "infrastructure",
+  "persistence",
+  "ops1",
+] as const;
+
+export type ExtractedSpecifier = {
+  readonly specifier: string;
+  readonly form:
+    | "static-from"
+    | "export-from"
+    | "side-effect"
+    | "dynamic"
+    | "require";
+};
+
+/** Strip line and block comments so commented imports are not treated as active. */
+export function stripComments(source: string): string {
+  let out = "";
+  let i = 0;
+  let inLine = false;
+  let inBlock = false;
+  let inSingle = false;
+  let inDouble = false;
+  let inTemplate = false;
+  while (i < source.length) {
+    const ch = source[i];
+    const next = source[i + 1];
+    if (inLine) {
+      if (ch === "\n") {
+        inLine = false;
+        out += ch;
+      }
+      i += 1;
+      continue;
+    }
+    if (inBlock) {
+      if (ch === "*" && next === "/") {
+        inBlock = false;
+        i += 2;
+        continue;
+      }
+      i += 1;
+      continue;
+    }
+    if (inSingle) {
+      out += ch;
+      if (ch === "\\" && next !== undefined) {
+        out += next;
+        i += 2;
+        continue;
+      }
+      if (ch === "'") inSingle = false;
+      i += 1;
+      continue;
+    }
+    if (inDouble) {
+      out += ch;
+      if (ch === "\\" && next !== undefined) {
+        out += next;
+        i += 2;
+        continue;
+      }
+      if (ch === '"') inDouble = false;
+      i += 1;
+      continue;
+    }
+    if (inTemplate) {
+      out += ch;
+      if (ch === "\\" && next !== undefined) {
+        out += next;
+        i += 2;
+        continue;
+      }
+      if (ch === "`") inTemplate = false;
+      i += 1;
+      continue;
+    }
+    if (ch === "/" && next === "/") {
+      inLine = true;
+      i += 2;
+      continue;
+    }
+    if (ch === "/" && next === "*") {
+      inBlock = true;
+      i += 2;
+      continue;
+    }
+    if (ch === "'") {
+      inSingle = true;
+      out += ch;
+      i += 1;
+      continue;
+    }
+    if (ch === '"') {
+      inDouble = true;
+      out += ch;
+      i += 1;
+      continue;
+    }
+    if (ch === "`") {
+      inTemplate = true;
+      out += ch;
+      i += 1;
+      continue;
+    }
+    out += ch;
+    i += 1;
+  }
+  return out;
+}
+
+export function extractModuleSpecifiers(source: string): ExtractedSpecifier[] {
+  const code = stripComments(source);
+  const found: ExtractedSpecifier[] = [];
+
+  const patterns: Array<{
+    form: ExtractedSpecifier["form"];
+    re: RegExp;
+  }> = [
+    {
+      form: "static-from",
+      re: /\bimport\s+(?:type\s+)?[\s\S]*?\bfrom\s*["']([^"']+)["']/g,
+    },
+    {
+      form: "export-from",
+      re: /\bexport\s+(?:type\s+)?[\s\S]*?\bfrom\s*["']([^"']+)["']/g,
+    },
+    {
+      form: "side-effect",
+      re: /\bimport\s*["']([^"']+)["']/g,
+    },
+    {
+      form: "dynamic",
+      re: /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g,
+    },
+    {
+      form: "require",
+      re: /\brequire\s*\(\s*["']([^"']+)["']\s*\)/g,
+    },
+  ];
+
+  for (const { form, re } of patterns) {
+    for (const match of code.matchAll(re)) {
+      const specifier = match[1];
+      if (specifier !== undefined) {
+        found.push({ specifier, form });
+      }
+    }
+  }
+  return found;
+}
+
+export function findProcessEnv(source: string): boolean {
+  return /\bprocess\.env\b/.test(stripComments(source));
+}
+
+function violationForSpecifier(
+  file: string,
+  specifier: string,
+): string | null {
+  const base = specifier.split("/")[0] ?? specifier;
+  if (FORBIDDEN_EXACT.has(specifier) || FORBIDDEN_EXACT.has(base)) {
+    return `${file}: forbidden module "${specifier}"`;
+  }
+  for (const segment of FORBIDDEN_SEGMENTS) {
+    if (
+      specifier === segment ||
+      specifier.includes(`/${segment}/`) ||
+      specifier.includes(`/${segment}`) ||
+      specifier.startsWith(`${segment}/`) ||
+      specifier.includes(`@/lib/${segment}`) ||
+      specifier.includes(`lib/${segment}`)
+    ) {
+      return `${file}: forbidden path segment "${segment}" via "${specifier}"`;
+    }
+  }
+  return null;
+}
+
+function listTsFiles(dir: string): string[] {
+  if (!fs.existsSync(dir)) return [];
+  const out: string[] = [];
+  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
+    const full = path.join(dir, entry.name);
+    if (entry.isDirectory()) {
+      if (entry.name === "node_modules") continue;
+      out.push(...listTsFiles(full));
+    } else if (/\.tsx?$/.test(entry.name)) {
+      out.push(full);
+    }
+  }
+  return out;
+}
+
+function productT0Files(): string[] {
+  const domain = listTsFiles(path.join(MODULE_ROOT, "domain"));
+  const barrel = path.join(MODULE_ROOT, "index.ts");
+  return [...domain, barrel];
+}
+
+describe("FinOps T0 import specifier extractor", () => {
+  it("detects static from, side-effect, export-from, dynamic, and require", () => {
+    const fixture = `
+      import x from "openai";
+      import "node:fs";
+      export { y } from "react";
+      const p = import("pg");
+      const s = require("sqlite3");
+    `;
+    const specs = extractModuleSpecifiers(fixture).map((s) => s.specifier);
+    expect(specs).toEqual(
+      expect.arrayContaining([
+        "openai",
+        "node:fs",
+        "react",
+        "pg",
+        "sqlite3",
+      ]),
+    );
+    expect(extractModuleSpecifiers(fixture).map((s) => s.form)).toEqual(
+      expect.arrayContaining([
+        "static-from",
+        "side-effect",
+        "export-from",
+        "dynamic",
+        "require",
+      ]),
+    );
+  });
+
+  it("detects multiline and mixed quotes without false negatives", () => {
+    const fixture = `
+      import {
+        foo
+      } from 'node:fs/promises';
+      import type { Bar } from "next";
+    `;
+    const specs = extractModuleSpecifiers(fixture).map((s) => s.specifier);
+    expect(specs).toEqual(
+      expect.arrayContaining(["node:fs/promises", "next"]),
+    );
+  });
+
+  it("ignores commented imports", () => {
+    const fixture = `
+      // import "node:fs"
+      /* import x from "openai" */
+      import { ok } from "./types";
+    `;
+    const specs = extractModuleSpecifiers(fixture).map((s) => s.specifier);
+    expect(specs).toEqual(["./types"]);
+  });
+
+  it("detects process.env outside comments", () => {
+    expect(findProcessEnv('const x = process.env.FOO;')).toBe(true);
+    expect(findProcessEnv("// process.env\nconst x = 1;")).toBe(false);
+  });
+
+  it("flags adversarial fixtures for forbidden modules and paths", () => {
+    const adversarial = [
+      'import "node:fs"',
+      'import x from "openai"',
+      'export { x } from "react"',
+      'import("pg")',
+      'require("sqlite3")',
+      'import { z } from "../../platform/ai"',
+      "const v = process.env.X",
+    ];
+    const hits: string[] = [];
+    for (const line of adversarial) {
+      if (findProcessEnv(line)) {
+        hits.push(`process.env via ${line}`);
+      }
+      for (const { specifier } of extractModuleSpecifiers(line)) {
+        const v = violationForSpecifier("fixture", specifier);
+        if (v) hits.push(v);
+      }
+    }
+    expect(hits.length).toBeGreaterThanOrEqual(7);
+  });
+});
+
+describe("FinOps T0 import boundaries", () => {
+  it("product T0 sources stay free of forbidden imports and process.env", () => {
+    const files = productT0Files();
+    expect(files.length).toBeGreaterThan(0);
+    const hits: string[] = [];
+    for (const file of files) {
+      const rel = path.relative(APP_ROOT, file);
+      const src = fs.readFileSync(file, "utf8");
+      if (/\bDate\.now\b/.test(stripComments(src))) {
+        hits.push(`${rel}: Date.now`);
+      }
+      if (findProcessEnv(src)) {
+        hits.push(`${rel}: process.env`);
+      }
+      for (const { specifier, form } of extractModuleSpecifiers(src)) {
+        const v = violationForSpecifier(rel, specifier);
+        if (v) {
+          hits.push(`${v} (form=${form})`);
+        }
+        // Non-relative package imports forbidden in FinOps T0 product tree
+        if (!specifier.startsWith(".") && !specifier.startsWith("@/")) {
+          // Relative domain-only; absolute package names are forbidden
+          if (!specifier.startsWith("./") && !specifier.startsWith("../")) {
+            hits.push(
+              `${rel}: non-relative module "${specifier}" (form=${form})`,
+            );
+          }
+        }
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+
+  it("public barrel does not export infrastructure or application surfaces", () => {
+    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
+    expect(barrel).not.toMatch(/repository|adapter|ledger|migration|openai|pg/i);
+    expect(barrel).not.toMatch(/Money|currency|price/i);
+    expect(fs.existsSync(path.join(MODULE_ROOT, "domain/index.ts"))).toBe(
+      false,
+    );
+  });
+});

```

## Scope final / préservations / anti-stub

104–129 byte-identical · 131 absent · package/lock unchanged · SoT/evidence/blocking/ESTIMATION NEVER BLOCKS preserved · Money deferred · no exact manifest validated claim · no publication authorized · no T1/LOT-D1/TB-04-04 DONE claims as completed items.

## Local Git Truth finale

Branche `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness-fixes` · HEAD `8dc54db0069eed78a8d8930cc2b035450ab56ad1` · main `8dc54db0069eed78a8d8930cc2b035450ab56ad1` · mb `8dc54db0069eed78a8d8930cc2b035450ab56ad1` · lr `0	0`

```text
?? projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
?? projects/sfia-studio/130-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness-findings-fix.md
?? projects/sfia-studio/app/__tests__/oa/finops/
?? projects/sfia-studio/app/lib/oa/finops/
```

## Prochaine gate candidate

```text
GO PR READINESS SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
REVIEW FINOPS TECHNICAL LOT T0 AFTER FIXES
```

## Verdict

**FINOPS TECHNICAL LOT T0 PR READINESS FINDINGS FIX EXECUTED —**
**BOUNDED CORRECTIVE DELIVERY T0 CONSUMED —**
**SIX AUTHORIZED FILES MODIFIED —**
**ZERO FILE OUTSIDE SCOPE MODIFIED —**
**FIND-01 STRICT CALENDAR ROUND-TRIP VALIDATION IMPLEMENTED —**
**IMPOSSIBLE CALENDAR DATES REJECTED —**
**VALID LEAP DATE PRESERVED —**
**VALID UTC OFFSETS PRESERVED —**
**FIND-02 CANONICAL UTC CALENDAR-MONTH VALIDATION IMPLEMENTED —**
**GENERIC PERIOD SHAPE AND CANONICAL MONTH VALIDATION SEPARATED —**
**PARTIAL AND MULTI-MONTH PERIODS REJECTED BY DOMAIN OPERATIONS —**
**COMPUTE UTC MONTH PERIOD PRESERVED AS REFERENCE —**
**FIND-03 RESERVE ACCEPTED AND DEFERRED TO MONEY —**
**NO MONEY PARSING INTRODUCED —**
**FIND-04 PUBLIC BARREL REDUCED —**
**FINOPS_SOURCES, CREATE FINOPS ERROR AND FINOPS DOMAIN ERROR PRESERVED —**
**REQUIRE VALID HELPERS REMOVED FROM PUBLIC BARREL AND KEPT INTERNAL —**
**FIND-05 IMPORT BOUNDARY TEST HARDENED —**
**STATIC, SIDE-EFFECT, DYNAMIC AND REQUIRE IMPORTS COVERED —**
**PROCESS ENV COVERED —**
**FIND-06 OPTION C PRESERVED —**
**EXACT DEPENDENCY-CLOSED MANIFEST VALIDATION PENDING —**
**FIND-07 NOTE ACCEPTED AND NO FIX APPLIED —**
**FIND-08 FINOPS_INVALID_SOURCE REMOVED —**
**SOURCE-OF-TRUTH PRESERVED —**
**COST EVIDENCE MAPPING PRESERVED —**
**BLOCKING ELIGIBILITY PRESERVED —**
**ESTIMATION NEVER BLOCKS PRESERVED —**
**TARGETED FINOPS TESTS PASSED —**
**TYPECHECK PASSED —**
**LINT PASSED —**
**FULL TEST SUITE PASSED —**
**PACKAGE AND LOCKFILE UNCHANGED —**
**DOCUMENT 103 UPDATED —**
**DOCUMENT 130 FINDINGS FIX CREATED —**
**DOCUMENTS 104 TO 129 BYTE-IDENTICAL —**
**DOCUMENT 131 ABSENT —**
**EIGHT PROTECTED T0 FILES BYTE-IDENTICAL —**
**PUBLICATION NOT AUTHORIZED —**
**PR READINESS RE-RUN REQUIRED —**
**NO GIT ADD, PROJECT COMMIT, PUSH, PR OR MERGE —**
**T1 TO T7 NOT AUTHORIZED —**
**GRAPH 33/56 PRESERVED —**
**PRIORITIES PRESERVED —**
**NO BACKLOG ITEM DONE —**
**TB-04-04 NOT DONE —**
**TB-02-05 PRESERVED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**LOT-D1 DELIVERY NOT-CONSUMED —**
**HANDOFF UPDATED AND REMOTE VERIFIED** *(après publication)* —
**READY FOR CHATGPT VALIDATION AND MORRIS T0 PR READINESS RE-RUN DECISION**
