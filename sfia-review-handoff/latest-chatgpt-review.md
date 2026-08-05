# Review Pack Full — FinOps Technical Lot T0 Execution

## Meta

| Champ | Valeur |
|---|---|
| **Date locale** | 2026-08-06 00:19:42 CEST (+0200) |
| **Date UTC** | 2026-08-05 22:19:42 UTC |
| **GO** | `GO DELIVERY SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE FINOPS TECHNICAL LOT T0` |
| **Interprétation** | Exécuter uniquement T0 (contracts and pure domain rules) selon document 126 |
| **Cycle** | Delivery — Bounded Local Delivery — FinOps Technical Lot T0 |
| **Profil** | Critical |
| **Typologie** | EVOL |
| **CKC** | candidate/experimental guidance only · 126 remains authoritative |
| **Niveau Review Pack** | Full |
| **review pack verdict** | complete |

## Local Git Truth initiale

| Champ | Valeur |
|---|---|
| Branche initiale | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0-execution-pack` |
| HEAD / origin/main / merge-base | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| Ahead / behind | 0 / 0 |
| Upstream projet | aucun |

## Branche Delivery

`delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0` @ `8dc54db0069eed78a8d8930cc2b035450ab56ad1` · aucun upstream · aucun push projet.

## Handoff entrant

tip `b9cf5ced84d768ba501aed711377011b9e6b4c2e` · blob `8cc1d801d6ae923daaa91d8162ec14b62dec7e11` · msg pack T0.

## Hashes entrants 103–126

- **103**: `0e6fb9fb06a0e887cef1ceea5005426b52827584c3ae4eaf59806ee62fea3d1a` (2363 lignes)
- **104**: `48859ae1f54d4f5d64a39099e00fe9af3e89b6f1cf38a24bc12c58b5dbf11802` (484 lignes)
- **105**: `bfdb737713b9d93204aa870c2842ae8246eec6d2f70535b7efae136ecf0694a9` (565 lignes)
- **106**: `7f009bfef42dd020fe22bdd7ba718ab647f54695adf2eeea9bcdd22cbf1ceb17` (286 lignes)
- **107**: `b2c59ea42306231b6c8649a3b5c2897b9eb38ebef043d2af72b208f73bf13a45` (451 lignes)
- **108**: `101932c574c4685017ab1c631858c78e038cb7c9a447ffe1bdd5c619393662ec` (415 lignes)
- **109**: `037eb7220ded4ba8f19da4c0a256b39c6a45f8d4588953361c4b99260a32296b` (683 lignes)
- **110**: `475d79dec7474e80f6b058a68630572c2b281ef1c6a79e90d39d2c9c3bb29af5` (295 lignes)
- **111**: `da9357a9ec051fe80d596711fdac9c7d38b084ab922a54af6789a9d112c5f8cb` (474 lignes)
- **112**: `510e8d8b49d2acf3fda5e21b4404a5140c4cce1f381220eedfd87466cea24642` (939 lignes)
- **113**: `8531a6278e0a4beae63eeba1f1788bfb1fdadc9c38f5a80d8f10f2fba97a96ba` (460 lignes)
- **114**: `c41d77e30e98f8b71bcb84a360d1712550ea9ae8255c000950b30f86d99c51b4` (530 lignes)
- **115**: `2e814ccfd6c735efaaae6193b08b555bd9a9d478927b06b78c5d78c67c61944b` (533 lignes)
- **116**: `b756dc931ba02f1573d7efd4729d4aac74d4c641b06163b608b5530c9c046e08` (442 lignes)
- **117**: `3bf6adc9d7e53ffe3f6a3a82fb41f6763f300488df8dc33e8b49fcb90bbe3d68` (260 lignes)
- **118**: `0ab4b68ccf2ca5b81e943df4b8a160ca1c008facedfc0e06c92d58a5ff506966` (422 lignes)
- **119**: `91737dc4c47f69068fc899d4f430088284a5a7b26413da3c9772952809bb26be` (549 lignes)
- **120**: `8171bdf13349ead303a67f57ed07761f572eb9dbfdf369139a26d5544920ab9c` (284 lignes)
- **121**: `928e6a591feae23155f0d74b41f6f43c35cc8a79939122b555683506ad1e4f87` (515 lignes)
- **122**: `6606e527c3ba25580cb5cad7eb5f7db581e7f4ff86e302e49b8e47b8ace02212` (739 lignes)
- **123**: `832438b4c315e4ab276ab57de30f0209f33567a4b079e480880c185e71057a0a` (620 lignes)
- **124**: `19eacd7f3f46d2693e270b0e6a4a046b8386faab702e67b1712666b7634fc7be` (573 lignes)
- **125**: `bdd84e33602377a39ab3b9832884723bcc20c050389a93be7631a3c132ceb6f6` (849 lignes)
- **126**: `03a3e94c438721597e97199f6afa16a84d45aeaf5adac35f88a1d40dc062bf64` (935 lignes)

## Package / lockfile hashes initiaux et finaux

| Fichier | SHA-256 |
|---|---|
| package.json | `fcb004b52d4547bffd171dd0411d08f41f87b21a5e5fa5cdf1193e23342175cf` |
| package-lock.json | `042fc4467b24d5c8dea1c768fa97d01861f2c0b76667ce6bd20cde6b0e0a18ea` |

**Unchanged:** yes

## Sources Git / contrat

Document **126** = contrat d’exécution. Documents 122–125 = décisions FinOps / techniques. Méthode Delivery/QA/Review Pack/Handoff depuis main.

## Périmètre autorisé

14 CREATE produit · 103 MODIFY · 127 CREATE · Review Pack · Handoff L3. Interdit : T1–T7, persistence, provider, Money, LOT-D1, commit/push/PR projet.

## Contenu complet des quatorze fichiers

### `projects/sfia-studio/app/lib/oa/finops/domain/types.ts`

- SHA-256: `1f27721ddb930257e0491bc901f0de1a230fcaa5fd9b706e42cd40e53b026b09`
- Lines: 64

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
  | "FINOPS_INVALID_SOURCE"
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

### `projects/sfia-studio/app/lib/oa/finops/domain/errors.ts`

- SHA-256: `9fcbcc89dad3d1856cbb3ae5245d90d1f09ed71991e760303693c9687dcac498`
- Lines: 35

```typescript
/**
 * FinOps T0 — structured domain errors (no infrastructure dependency).
 */

import type { FinOpsDetailCode } from "./types";

export type FinOpsStructuredError = {
  readonly detailCode: FinOpsDetailCode;
  readonly message: string;
  readonly reason: string;
  readonly timestamp?: string;
};

export function createFinOpsError(input: {
  detailCode: FinOpsDetailCode;
  reason: string;
  timestamp?: string;
}): FinOpsStructuredError {
  return {
    detailCode: input.detailCode,
    message: `FinOps domain error: ${input.detailCode}`,
    reason: input.reason,
    ...(input.timestamp !== undefined ? { timestamp: input.timestamp } : {}),
  };
}

export class FinOpsDomainError extends Error {
  readonly structured: FinOpsStructuredError;

  constructor(structured: FinOpsStructuredError) {
    super(structured.message);
    this.name = "FinOpsDomainError";
    this.structured = structured;
  }
}
```

### `projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts`

- SHA-256: `e27a5b9dce23ae1d2427e1684a17ee8a82ac81db1a3a8064d471200d7ff35b7b`
- Lines: 130

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

/** ISO-8601 instant with Z or numeric offset (converted later via UTC ms). */
const ISO_INSTANT_RE =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/;

export function validateIsoTimestamp(
  instantIso: string,
): InvariantViolation | null {
  if (typeof instantIso !== "string" || instantIso.length === 0) {
    return {
      detailCode: "FINOPS_INVALID_TIMESTAMP",
      reason: "timestamp_empty_or_not_string",
    };
  }
  if (!ISO_INSTANT_RE.test(instantIso)) {
    return {
      detailCode: "FINOPS_INVALID_TIMESTAMP",
      reason: "timestamp_not_iso_instant",
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
  const violation = validateFinOpsPeriodShape(period);
  if (violation) {
    throw new FinOpsDomainError(
      createFinOpsError({
        detailCode: violation.detailCode,
        reason: violation.reason,
      }),
    );
  }
}
```

### `projects/sfia-studio/app/lib/oa/finops/domain/period.ts`

- SHA-256: `83bcad8da568c411c49f25ff3e2c6c9c0f17bee4d992dfbc5873beceafae0689`
- Lines: 67

```typescript
/**
 * FinOps T0 — UTC calendar-month period helpers (injected instant; no hidden wall-clock).
 */

import { requireValidFinOpsPeriod, requireValidIsoTimestamp } from "./invariants";
import type { FinOpsPeriod } from "./types";

/**
 * Calendar month in UTC for the given instant.
 * periodStart inclusive; periodEnd exclusive (= first instant of next UTC month).
 */
export function computeUtcMonthPeriod(instantIso: string): FinOpsPeriod {
  const ms = requireValidIsoTimestamp(instantIso);
  const d = new Date(ms);
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth();
  const periodStart = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0)).toISOString();
  const periodEnd = new Date(
    Date.UTC(year, month + 1, 1, 0, 0, 0, 0),
  ).toISOString();
  return {
    periodStart,
    periodEnd,
    timezone: "UTC",
  };
}

export function periodContainsInstant(
  period: FinOpsPeriod,
  instantIso: string,
): boolean {
  requireValidFinOpsPeriod(period);
  const t = requireValidIsoTimestamp(instantIso);
  const start = Date.parse(period.periodStart);
  const end = Date.parse(period.periodEnd);
  return start <= t && t < end;
}

/** Deterministic ordering by periodStart (UTC instant). */
export function compareFinOpsPeriods(
  a: FinOpsPeriod,
  b: FinOpsPeriod,
): -1 | 0 | 1 {
  requireValidFinOpsPeriod(a);
  requireValidFinOpsPeriod(b);
  const aMs = Date.parse(a.periodStart);
  const bMs = Date.parse(b.periodStart);
  if (aMs < bMs) return -1;
  if (aMs > bMs) return 1;
  return 0;
}

/** Stable key YYYY-MM from UTC periodStart. */
export function finOpsPeriodKey(period: FinOpsPeriod): string {
  requireValidFinOpsPeriod(period);
  const d = new Date(Date.parse(period.periodStart));
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth() + 1;
  return `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}`;
}

/**
 * Late events attach to the UTC month of occurredAt (injected instant).
 */
export function assignInstantToPeriod(instantIso: string): FinOpsPeriod {
  return computeUtcMonthPeriod(instantIso);
}
```

### `projects/sfia-studio/app/lib/oa/finops/domain/sourceOfTruth.ts`

- SHA-256: `33a288ba238a51f9ec4dc649d7b6d80277d39b541fb76d4c94b9eb79993e4c8e`
- Lines: 73

```typescript
/**
 * FinOps T0 — Source of Truth ranking and eligibility helpers.
 */

import { FINOPS_SOT_RANK, type FinOpsSourceOfTruth } from "./types";

export function sourceOfTruthRank(source: FinOpsSourceOfTruth): number {
  return FINOPS_SOT_RANK[source];
}

/** Negative if a is more authoritative than b (lower rank). */
export function compareSourceOfTruth(
  a: FinOpsSourceOfTruth,
  b: FinOpsSourceOfTruth,
): number {
  return sourceOfTruthRank(a) - sourceOfTruthRank(b);
}

export function sourceMayBlock(source: FinOpsSourceOfTruth): boolean {
  switch (source) {
    case "BILLED":
    case "PROVIDER_OBSERVED":
      return true;
    case "API_USAGE":
    case "LOCAL_COUNT":
    case "PARAMETRIC_ESTIMATE":
    case "UNKNOWN":
      return false;
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}

/** All SoT levels remain observable / informational. */
export function sourceMayInform(source: FinOpsSourceOfTruth): boolean {
  switch (source) {
    case "BILLED":
    case "PROVIDER_OBSERVED":
    case "API_USAGE":
    case "LOCAL_COUNT":
    case "PARAMETRIC_ESTIMATE":
    case "UNKNOWN":
      return true;
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}

/**
 * All sources may feed a future human-review path.
 * T0 never triggers review.
 */
export function sourceMayRequestHumanReview(
  source: FinOpsSourceOfTruth,
): boolean {
  switch (source) {
    case "BILLED":
    case "PROVIDER_OBSERVED":
    case "API_USAGE":
    case "LOCAL_COUNT":
    case "PARAMETRIC_ESTIMATE":
    case "UNKNOWN":
      return true;
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/finops/domain/costEvidence.ts`

- SHA-256: `eb021400549674d86fbdb022e5d7f7e85ca2f69ecb3a60455563d91d6527021c`
- Lines: 47

```typescript
/**
 * FinOps T0 — cost evidence classification (no monetary values).
 */

import { createFinOpsError, FinOpsDomainError } from "./errors";
import type { FinOpsCostEvidenceClass, FinOpsSourceOfTruth } from "./types";

export function classifyCostEvidenceFromSource(
  source: FinOpsSourceOfTruth,
): FinOpsCostEvidenceClass {
  switch (source) {
    case "BILLED":
      return "billed";
    case "PROVIDER_OBSERVED":
    case "API_USAGE":
      return "observed";
    case "LOCAL_COUNT":
    case "PARAMETRIC_ESTIMATE":
      return "estimated";
    case "UNKNOWN":
      return "unknown";
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}

/** Runtime guard that evidence class literals remain distinct. */
export function assertDistinctEvidenceClasses(): true {
  const classes = ["estimated", "observed", "billed", "unknown"] as const;
  if (new Set<string>(classes).size !== classes.length) {
    throw new FinOpsDomainError(
      createFinOpsError({
        detailCode: "FINOPS_EVIDENCE_COLLAPSE",
        reason: "evidence_classes_must_remain_distinct",
      }),
    );
  }
  return true;
}

export function isUnknownEvidence(
  evidenceClass: FinOpsCostEvidenceClass,
): boolean {
  return evidenceClass === "unknown";
}
```

### `projects/sfia-studio/app/lib/oa/finops/domain/blockingEligibility.ts`

- SHA-256: `664b32863e2606a3488b6d5b349e03547736fc3f631b47431bc3148764ec1898`
- Lines: 69

```typescript
/**
 * FinOps T0 — blocking eligibility from Source of Truth (never from amount).
 */

import { classifyCostEvidenceFromSource } from "./costEvidence";
import type {
  FinOpsBlockingDecision,
  FinOpsSourceOfTruth,
} from "./types";

/**
 * Estimation never blocks — invariant exported for explicit assertion.
 * Blocking eligibility is decided by SoT, not by evidence class alone.
 */
export const ESTIMATION_NEVER_BLOCKS = true as const;

export function evaluateBlockingEligibility(
  source: FinOpsSourceOfTruth,
): FinOpsBlockingDecision {
  const confidenceClass = classifyCostEvidenceFromSource(source);
  switch (source) {
    case "BILLED":
      return {
        eligible: true,
        reason: "SOURCE_MAY_BLOCK",
        source,
        confidenceClass,
      };
    case "PROVIDER_OBSERVED":
      return {
        eligible: true,
        reason: "SOURCE_MAY_BLOCK",
        source,
        confidenceClass,
      };
    case "API_USAGE":
      return {
        eligible: false,
        reason: "API_USAGE_NEVER_BLOCKS",
        source,
        confidenceClass,
      };
    case "LOCAL_COUNT":
      return {
        eligible: false,
        reason: "LOCAL_COUNT_NEVER_BLOCKS",
        source,
        confidenceClass,
      };
    case "PARAMETRIC_ESTIMATE":
      return {
        eligible: false,
        reason: "ESTIMATE_NEVER_BLOCKS",
        source,
        confidenceClass,
      };
    case "UNKNOWN":
      return {
        eligible: false,
        reason: "UNKNOWN_NEVER_BLOCKS",
        source,
        confidenceClass,
      };
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/finops/index.ts`

- SHA-256: `44008d949a8342b558a37bed755fcda6953a406b906f7a84ecec385ed8c7ccec`
- Lines: 52

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
  requireValidFinOpsPeriod,
  requireValidIsoTimestamp,
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

### `projects/sfia-studio/app/__tests__/oa/finops/period.test.ts`

- SHA-256: `9d275dfdf8dcb8b5c120670ab1db6ebb9cfd7a49e3fbbedc4cce79d8659de552`
- Lines: 99

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

  it("rejects invalid timestamps", () => {
    expect(() => computeUtcMonthPeriod("not-a-timestamp")).toThrow(
      FinOpsDomainError,
    );
    expect(() => computeUtcMonthPeriod("2026-01-01")).toThrow(
      FinOpsDomainError,
    );
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/sourceOfTruth.test.ts`

- SHA-256: `8d3bf36c6055792cb8eea53bfe7d7468ff46de739a1d516fd1c48526a3e26be0`
- Lines: 70

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  FINOPS_SOT_RANK,
  FINOPS_SOURCES,
  compareSourceOfTruth,
  sourceMayBlock,
  sourceMayInform,
  sourceMayRequestHumanReview,
  sourceOfTruthRank,
  type FinOpsSourceOfTruth,
} from "@/lib/oa/finops";

describe("FinOps T0 source of truth", () => {
  it("exposes exactly six closed SoT values", () => {
    expect([...FINOPS_SOURCES]).toEqual([
      "BILLED",
      "PROVIDER_OBSERVED",
      "API_USAGE",
      "LOCAL_COUNT",
      "PARAMETRIC_ESTIMATE",
      "UNKNOWN",
    ]);
  });

  it("ranks SoT from 1 (most authoritative) to 6", () => {
    expect(FINOPS_SOT_RANK.BILLED).toBe(1);
    expect(FINOPS_SOT_RANK.PROVIDER_OBSERVED).toBe(2);
    expect(FINOPS_SOT_RANK.API_USAGE).toBe(3);
    expect(FINOPS_SOT_RANK.LOCAL_COUNT).toBe(4);
    expect(FINOPS_SOT_RANK.PARAMETRIC_ESTIMATE).toBe(5);
    expect(FINOPS_SOT_RANK.UNKNOWN).toBe(6);
    for (const source of FINOPS_SOURCES) {
      expect(sourceOfTruthRank(source)).toBe(FINOPS_SOT_RANK[source]);
    }
  });

  it("orders the full hierarchy by rank", () => {
    const ordered = [...FINOPS_SOURCES].sort(compareSourceOfTruth);
    expect(ordered).toEqual([...FINOPS_SOURCES]);
    expect(compareSourceOfTruth("BILLED", "UNKNOWN")).toBeLessThan(0);
    expect(compareSourceOfTruth("UNKNOWN", "BILLED")).toBeGreaterThan(0);
    expect(compareSourceOfTruth("API_USAGE", "API_USAGE")).toBe(0);
  });

  it("marks only BILLED and PROVIDER_OBSERVED as blocking-eligible", () => {
    const blocking: FinOpsSourceOfTruth[] = [];
    const nonBlocking: FinOpsSourceOfTruth[] = [];
    for (const source of FINOPS_SOURCES) {
      if (sourceMayBlock(source)) blocking.push(source);
      else nonBlocking.push(source);
    }
    expect(blocking).toEqual(["BILLED", "PROVIDER_OBSERVED"]);
    expect(nonBlocking).toEqual([
      "API_USAGE",
      "LOCAL_COUNT",
      "PARAMETRIC_ESTIMATE",
      "UNKNOWN",
    ]);
  });

  it("keeps all sources informational and review-capable without triggering review", () => {
    for (const source of FINOPS_SOURCES) {
      expect(sourceMayInform(source)).toBe(true);
      expect(sourceMayRequestHumanReview(source)).toBe(true);
    }
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/costEvidence.test.ts`

- SHA-256: `8961e132d7d6804074158fa2ce9efbe715e82b6dbbb2e18b37dba76d27b844a2`
- Lines: 74

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  FINOPS_SOURCES,
  assertDistinctEvidenceClasses,
  assertUnknownNotNumericZero,
  classifyCostEvidenceFromSource,
  evaluateBlockingEligibility,
  isUnknownEvidence,
  type FinOpsSourceOfTruth,
} from "@/lib/oa/finops";

describe("FinOps T0 cost evidence (T-TECH-05 / T-TECH-06)", () => {
  it("maps every SoT to the closed evidence class", () => {
    const expected: Record<FinOpsSourceOfTruth, string> = {
      BILLED: "billed",
      PROVIDER_OBSERVED: "observed",
      API_USAGE: "observed",
      LOCAL_COUNT: "estimated",
      PARAMETRIC_ESTIMATE: "estimated",
      UNKNOWN: "unknown",
    };
    for (const source of FINOPS_SOURCES) {
      expect(classifyCostEvidenceFromSource(source)).toBe(expected[source]);
    }
  });

  it("keeps estimated, observed, billed, and unknown distinct", () => {
    expect(assertDistinctEvidenceClasses()).toBe(true);
    const classes = new Set(
      FINOPS_SOURCES.map((s) => classifyCostEvidenceFromSource(s)),
    );
    expect(classes.has("estimated")).toBe(true);
    expect(classes.has("observed")).toBe(true);
    expect(classes.has("billed")).toBe(true);
    expect(classes.has("unknown")).toBe(true);
    expect(
      classifyCostEvidenceFromSource("LOCAL_COUNT"),
    ).not.toBe(classifyCostEvidenceFromSource("PROVIDER_OBSERVED"));
    expect(
      classifyCostEvidenceFromSource("PROVIDER_OBSERVED"),
    ).not.toBe(classifyCostEvidenceFromSource("BILLED"));
  });

  it("classifies API_USAGE as observed without making it blocking (T-TECH-05)", () => {
    expect(classifyCostEvidenceFromSource("API_USAGE")).toBe("observed");
    expect(evaluateBlockingEligibility("API_USAGE").eligible).toBe(false);
    // Model/tarif unknown stays unknown — not silently priced.
    expect(classifyCostEvidenceFromSource("UNKNOWN")).toBe("unknown");
    expect(isUnknownEvidence("unknown")).toBe(true);
  });

  it("maps LOCAL_COUNT and PARAMETRIC_ESTIMATE to estimated", () => {
    expect(classifyCostEvidenceFromSource("LOCAL_COUNT")).toBe("estimated");
    expect(classifyCostEvidenceFromSource("PARAMETRIC_ESTIMATE")).toBe(
      "estimated",
    );
  });

  it("keeps unknown distinct from zero with no zero fallback (T-TECH-06)", () => {
    expect(assertUnknownNotNumericZero("unknown", 0)).toEqual({
      detailCode: "FINOPS_UNKNOWN_AS_ZERO",
      reason: "unknown_must_not_equal_numeric_zero",
    });
    expect(assertUnknownNotNumericZero("unknown", BigInt(0))).not.toBeNull();
    expect(assertUnknownNotNumericZero("unknown", "0")).not.toBeNull();
    expect(assertUnknownNotNumericZero("unknown", null)).toBeNull();
    expect(assertUnknownNotNumericZero("billed", 0)).toBeNull();
    expect(isUnknownEvidence("unknown")).toBe(true);
    expect(isUnknownEvidence("estimated")).toBe(false);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/blockingEligibility.test.ts`

- SHA-256: `d19baba0fbaa5ecd06766993c1a7acf4581eef0166f1b2d27e92e826340d9ae4`
- Lines: 93

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  ESTIMATION_NEVER_BLOCKS,
  evaluateBlockingEligibility,
  type FinOpsSourceOfTruth,
} from "@/lib/oa/finops";

describe("FinOps T0 blocking eligibility (T-TECH-12)", () => {
  const matrix: Array<{
    source: FinOpsSourceOfTruth;
    eligible: boolean;
    reason: string;
    confidenceClass: string;
  }> = [
    {
      source: "BILLED",
      eligible: true,
      reason: "SOURCE_MAY_BLOCK",
      confidenceClass: "billed",
    },
    {
      source: "PROVIDER_OBSERVED",
      eligible: true,
      reason: "SOURCE_MAY_BLOCK",
      confidenceClass: "observed",
    },
    {
      source: "API_USAGE",
      eligible: false,
      reason: "API_USAGE_NEVER_BLOCKS",
      confidenceClass: "observed",
    },
    {
      source: "LOCAL_COUNT",
      eligible: false,
      reason: "LOCAL_COUNT_NEVER_BLOCKS",
      confidenceClass: "estimated",
    },
    {
      source: "PARAMETRIC_ESTIMATE",
      eligible: false,
      reason: "ESTIMATE_NEVER_BLOCKS",
      confidenceClass: "estimated",
    },
    {
      source: "UNKNOWN",
      eligible: false,
      reason: "UNKNOWN_NEVER_BLOCKS",
      confidenceClass: "unknown",
    },
  ];

  it.each(matrix)(
    "applies matrix row for $source",
    ({ source, eligible, reason, confidenceClass }) => {
      const decision = evaluateBlockingEligibility(source);
      expect(decision).toEqual({
        eligible,
        reason,
        source,
        confidenceClass,
      });
    },
  );

  it("exports ESTIMATION_NEVER_BLOCKS and never blocks estimates", () => {
    expect(ESTIMATION_NEVER_BLOCKS).toBe(true);
    expect(evaluateBlockingEligibility("PARAMETRIC_ESTIMATE").eligible).toBe(
      false,
    );
    expect(evaluateBlockingEligibility("LOCAL_COUNT").eligible).toBe(false);
  });

  it("allows official observed / billed eligibility without reading an amount", () => {
    expect(evaluateBlockingEligibility("BILLED").eligible).toBe(true);
    expect(evaluateBlockingEligibility("PROVIDER_OBSERVED").eligible).toBe(
      true,
    );
    // Decision shape has no monetary field.
    expect(
      Object.keys(evaluateBlockingEligibility("BILLED")).sort(),
    ).toEqual(["confidenceClass", "eligible", "reason", "source"]);
  });

  it("is deterministic", () => {
    expect(evaluateBlockingEligibility("API_USAGE")).toEqual(
      evaluateBlockingEligibility("API_USAGE"),
    );
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts`

- SHA-256: `98a885ca11d6a4de5427abfbcd989161d833ac23dcab1b4933281e1a3f7e3b74`
- Lines: 76

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assertUnknownNotNumericZero,
  computeUtcMonthPeriod,
  validateFinOpsPeriodShape,
  validateIsoTimestamp,
  type FinOpsPeriod,
} from "@/lib/oa/finops";

describe("FinOps T0 domain invariants", () => {
  it("accepts valid ISO instants with Z or offset", () => {
    expect(validateIsoTimestamp("2026-01-01T00:00:00.000Z")).toBeNull();
    expect(validateIsoTimestamp("2026-06-15T12:00:00.000+02:00")).toBeNull();
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

  it("never lets unknown become numeric zero", () => {
    expect(assertUnknownNotNumericZero("unknown", 0)?.detailCode).toBe(
      "FINOPS_UNKNOWN_AS_ZERO",
    );
    expect(assertUnknownNotNumericZero("unknown", undefined)).toBeNull();
  });

  it("has no side effects and does not mutate period objects", () => {
    const period = computeUtcMonthPeriod("2026-05-01T00:00:00.000Z");
    const frozen = Object.freeze({ ...period });
    expect(validateFinOpsPeriodShape(frozen)).toBeNull();
    expect(frozen).toEqual(period);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts`

- SHA-256: `49068a52271e98fbf1de55f17e191182f141a8215b8e1bcdc32102cbaa8ccc8d`
- Lines: 87

```typescript
/**
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const MODULE_ROOT = path.join(APP_ROOT, "lib/oa/finops");

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

function importsOf(file: string): string[] {
  return fs
    .readFileSync(file, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("import ") || l.startsWith("export "));
}

describe("FinOps T0 import boundaries", () => {
  it("domain stays pure — no openai/platform/ops1/pg/next/react/fs/net/env", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
    expect(files.length).toBeGreaterThan(0);
    const hits: string[] = [];
    const forbidden =
      /from\s+["'](?:openai|pg|sqlite|node:fs|node:net|node:crypto|next|react|@\/lib\/(?:ops1|platform|d1|execution-run|oa\/execution-run)|fs|path|child_process)|process\.env/;
    for (const file of files) {
      const src = fs.readFileSync(file, "utf8");
      if (/\bDate\.now\b/.test(src)) {
        hits.push(`${file}: Date.now`);
      }
      if (/\bprocess\.env\b/.test(src)) {
        hits.push(`${file}: process.env`);
      }
      for (const line of importsOf(file)) {
        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
        if (
          /execution-run|platform\/ai|ops1|openai|ProviderUsage/.test(line)
        ) {
          hits.push(`${file}: ${line}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("module root only uses relative domain imports", () => {
    const files = listTsFiles(MODULE_ROOT);
    expect(files.length).toBeGreaterThan(0);
    const hits: string[] = [];
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (
          /from\s+["'](?!\.)/.test(line) &&
          !/from\s+["'](?:vitest)/.test(line)
        ) {
          // Absolute / package imports are forbidden in FinOps T0 domain tree.
          hits.push(`${path.relative(APP_ROOT, file)}: ${line}`);
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


## Hashes et lignes des quatorze fichiers

| Fichier | SHA-256 | Lignes |
|---|---|---|
| `projects/sfia-studio/app/lib/oa/finops/domain/types.ts` | `1f27721ddb930257e0491bc901f0de1a230fcaa5fd9b706e42cd40e53b026b09` | 64 |
| `projects/sfia-studio/app/lib/oa/finops/domain/errors.ts` | `9fcbcc89dad3d1856cbb3ae5245d90d1f09ed71991e760303693c9687dcac498` | 35 |
| `projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts` | `e27a5b9dce23ae1d2427e1684a17ee8a82ac81db1a3a8064d471200d7ff35b7b` | 130 |
| `projects/sfia-studio/app/lib/oa/finops/domain/period.ts` | `83bcad8da568c411c49f25ff3e2c6c9c0f17bee4d992dfbc5873beceafae0689` | 67 |
| `projects/sfia-studio/app/lib/oa/finops/domain/sourceOfTruth.ts` | `33a288ba238a51f9ec4dc649d7b6d80277d39b541fb76d4c94b9eb79993e4c8e` | 73 |
| `projects/sfia-studio/app/lib/oa/finops/domain/costEvidence.ts` | `eb021400549674d86fbdb022e5d7f7e85ca2f69ecb3a60455563d91d6527021c` | 47 |
| `projects/sfia-studio/app/lib/oa/finops/domain/blockingEligibility.ts` | `664b32863e2606a3488b6d5b349e03547736fc3f631b47431bc3148764ec1898` | 69 |
| `projects/sfia-studio/app/lib/oa/finops/index.ts` | `44008d949a8342b558a37bed755fcda6953a406b906f7a84ecec385ed8c7ccec` | 52 |
| `projects/sfia-studio/app/__tests__/oa/finops/period.test.ts` | `9d275dfdf8dcb8b5c120670ab1db6ebb9cfd7a49e3fbbedc4cce79d8659de552` | 99 |
| `projects/sfia-studio/app/__tests__/oa/finops/sourceOfTruth.test.ts` | `8d3bf36c6055792cb8eea53bfe7d7468ff46de739a1d516fd1c48526a3e26be0` | 70 |
| `projects/sfia-studio/app/__tests__/oa/finops/costEvidence.test.ts` | `8961e132d7d6804074158fa2ce9efbe715e82b6dbbb2e18b37dba76d27b844a2` | 74 |
| `projects/sfia-studio/app/__tests__/oa/finops/blockingEligibility.test.ts` | `d19baba0fbaa5ecd06766993c1a7acf4581eef0166f1b2d27e92e826340d9ae4` | 93 |
| `projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts` | `98a885ca11d6a4de5427abfbcd989161d833ac23dcab1b4933281e1a3f7e3b74` | 76 |
| `projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts` | `49068a52271e98fbf1de55f17e191182f141a8215b8e1bcdc32102cbaa8ccc8d` | 87 |

## Tests complets et résultats des quatre commandes

### 1. Targeted

```text

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/finops


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1/projects/sfia-studio/app

 ✓ __tests__/oa/finops/importBoundaries.test.ts (3 tests) 2ms
 ✓ __tests__/oa/finops/sourceOfTruth.test.ts (5 tests) 2ms
 ✓ __tests__/oa/finops/costEvidence.test.ts (5 tests) 3ms
 ✓ __tests__/oa/finops/domainInvariants.test.ts (7 tests) 2ms
 ✓ __tests__/oa/finops/blockingEligibility.test.ts (9 tests) 2ms
 ✓ __tests__/oa/finops/period.test.ts (10 tests) 3ms

 Test Files  6 passed (6)
      Tests  39 passed (39)
   Start at  00:14:57
   Duration  296ms (transform 96ms, setup 360ms, collect 198ms, tests 13ms, environment 0ms, prepare 265ms)


```

### 2. Typecheck

```text

> sfia-studio@0.1.0 typecheck
> tsc --noEmit


```

### 3. Lint

```text

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors

```

### 4. Full suite

```text

> sfia-studio@0.1.0 test
> vitest run


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1/projects/sfia-studio/app

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-05T22:15:13.155Z","status":"started","intentLength":53,"sessionLocalId":"s1"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-05T22:15:13.234Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"s1","durationMs":79,"providerMode":"fake"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-05T22:15:13.234Z","status":"started","intentLength":22,"sessionLocalId":"s2"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_clarification_requested","ts":"2026-08-05T22:15:13.343Z","status":"NEED_CLARIFICATION","intentLength":22,"sessionLocalId":"s2","durationMs":109,"providerMode":"fake"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-05T22:15:13.244Z","status":"started","intentLength":53,"sessionLocalId":"harden-1"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-05T22:15:13.349Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"harden-1","durationMs":105,"providerMode":"fake"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-05T22:15:13.350Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-05T22:15:13.350Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}

stderr | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
{"event":"d1_intake_live_config_unavailable","ts":"2026-08-05T22:15:13.350Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
{"event":"d1_intake_live_config_unavailable","ts":"2026-08-05T22:15:13.350Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > exact name ranks first with strong evidence
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-05T22:15:13.352Z","status":"started","sessionLocalId":"m1","proposalId":"rrp-campus"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-05T22:15:13.352Z","status":"AVAILABLE","sessionLocalId":"m1","durationMs":0,"proposalId":"rrp-campus","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-05T22:15:13.352Z","status":"STRONG_MATCH","sessionLocalId":"m1","durationMs":0,"proposalId":"rrp-campus","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > detects semantic proximity for contrats
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-05T22:15:13.353Z","status":"started","sessionLocalId":"m2","proposalId":"rrp-c"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-05T22:15:13.353Z","status":"AVAILABLE","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-05T22:15:13.353Z","status":"STRONG_MATCH","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > flags multiple close matches as ambiguity
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-05T22:15:13.353Z","status":"started","sessionLocalId":"m3","proposalId":"rrp-multi"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-05T22:15:13.353Z","status":"AVAILABLE","sessionLocalId":"m3","durationMs":0,"proposalId":"rrp-multi","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-05T22:15:13.359Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m3","durationMs":6,"proposalId":"rrp-multi","candidateCount":2,"topScoreBand":"WEAK_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > returns no-match without inventing ids
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-05T22:15:13.359Z","status":"started","sessionLocalId":"m4","proposalId":"rrp-none"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-05T22:15:13.359Z","status":"AVAILABLE","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-05T22:15:13.359Z","status":"NO_MATCH","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > warns on inactive project without auto-resume
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-05T22:15:13.360Z","status":"started","sessionLocalId":"m5","proposalId":"rrp-draft"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-05T22:15:13.360Z","status":"AVAILABLE","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-05T22:15:13.360Z","status":"STRONG_MATCH","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > analyze-only does not force attachment
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-05T22:15:13.360Z","status":"started","sessionLocalId":"m6","proposalId":"rrp-ao"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-05T22:15:13.360Z","status":"AVAILABLE","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-05T22:15:13.360Z","status":"STRONG_MATCH","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > distinguishes context unavailable from empty
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-05T22:15:13.360Z","status":"started","sessionLocalId":"m7","proposalId":"rrp-u"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-05T22:15:13.360Z","status":"UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"proposalId":"rrp-u","sourceProjectCount":0,"truncationApplied":false}
[d1.intake] {"event":"intake_context_unavailable","ts":"2026-08-05T22:15:13.360Z","status":"CONTEXT_UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"errorCode":"UNAVAILABLE","proposalId":"rrp-u"}
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-05T22:15:13.360Z","status":"started","sessionLocalId":"m8","proposalId":"rrp-e"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-05T22:15:13.360Z","status":"EMPTY","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0,"truncationApplied":false}
[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-05T22:15:13.360Z","status":"NO_MATCH","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > caps candidates at 5 and keeps scores bounded
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-05T22:15:13.360Z","status":"started","sessionLocalId":"m9","proposalId":"rrp-cap"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-05T22:15:13.360Z","status":"AVAILABLE","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","sourceProjectCount":8,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-05T22:15:13.361Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m9","durationMs":1,"proposalId":"rrp-cap","candidateCount":5,"topScoreBand":"WEAK_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 snapshot from real repository (read-only) > matches against created projects without mutation
{"event":"d1.project_create","ts":"2026-08-05T22:15:13.373Z","status":"ok","projectId":"proj-e90d24c9-5d3b-4fd4-a28a-3f2c566ce0ef","durationMs":1}
{"event":"d1.project_create","ts":"2026-08-05T22:15:13.374Z","status":"ok","projectId":"proj-4f0d3ba2-80d9-40e9-afbb-d4d849b0e2c5","durationMs":1}
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-05T22:15:13.374Z","status":"started","sessionLocalId":"repo-1","proposalId":"rrp-repo"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-05T22:15:13.374Z","status":"AVAILABLE","sessionLocalId":"repo-1","durationMs":0,"proposalId":"rrp-repo","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-05T22:15:13.374Z","status":"STRONG_MATCH","sessionLocalId":"repo-1","durationMs":0,"proposalId":"rrp-repo","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

 ✓ __tests__/d1/intake-c3.test.ts (16 tests) 131ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-05T22:15:13.343Z","status":"started","intentLength":22,"sessionLocalId":"s2"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-05T22:15:13.447Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":22,"sessionLocalId":"s2","durationMs":104,"providerMode":"fake"}

 ✓ __tests__/ops1/globalModeBadge.ui.test.tsx (5 tests) 284ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-05T22:15:13.448Z","status":"started","intentLength":39,"sessionLocalId":"s4"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-05T22:15:13.556Z","status":"PROVIDER","intentLength":39,"sessionLocalId":"s4","durationMs":108,"providerMode":"fake","errorCode":"PROVIDER"}

 ✓ __tests__/d1/intake-c2.test.ts (13 tests) 405ms
 ✓ __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx (4 tests) 355ms
 ✓ __tests__/navigation.test.tsx (2 tests) 45ms
 ✓ __tests__/d1/intake-c1.test.tsx (6 tests) 716ms
   ✓ D1-C2 IntakeView > shows structured proposal without executable confirm  394ms
 ✓ __tests__/increment-e.test.tsx (4 tests) 85ms
 ✓ __tests__/ops1/Ops1SessionScreen.test.tsx (4 tests) 146ms
 ✓ __tests__/increment-a.test.tsx (8 tests) 104ms
 ✓ __tests__/shell.test.tsx (1 test) 55ms
 ✓ __tests__/increment-d.test.tsx (5 tests) 69ms
 ✓ __tests__/ops1/allowlistEvaluation.test.ts (9 tests) 46ms
 ✓ __tests__/gates.test.tsx (1 test) 51ms
stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > creates project only with explicit confirmation and audits
[d1.intake] {"event":"intake_mutation_failed","ts":"2026-08-05T22:15:14.631Z","status":"FAILED","sessionLocalId":"s1","durationMs":0,"errorCode":"VALIDATION","proposalId":"rrp-1"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-05T22:15:14.631Z","status":"CREATE_PROJECT","sessionLocalId":"s1","proposalId":"rrp-1"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-05T22:15:14.632Z","status":"confirmed","sessionLocalId":"s1","proposalId":"rrp-1"}
{"event":"d1.project_create","ts":"2026-08-05T22:15:14.632Z","status":"ok","projectId":"proj-0b8a9698-d399-4638-9285-3eca162a61a9","durationMs":0}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-05T22:15:14.633Z","status":"SUCCEEDED","projectId":"proj-0b8a9698-d399-4638-9285-3eca162a61a9","sessionLocalId":"s1","durationMs":2,"proposalId":"rrp-1"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > replays same key same payload without duplicate
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-05T22:15:14.636Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-05T22:15:14.636Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
{"event":"d1.project_create","ts":"2026-08-05T22:15:14.637Z","status":"ok","projectId":"proj-7aef46a6-8766-4c3c-9fc6-15a76c04265f","durationMs":1}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-05T22:15:14.637Z","status":"SUCCEEDED","projectId":"proj-7aef46a6-8766-4c3c-9fc6-15a76c04265f","sessionLocalId":"s2","durationMs":1,"proposalId":"rrp-2"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-05T22:15:14.637Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-05T22:15:14.637Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_replayed","ts":"2026-08-05T22:15:14.637Z","status":"ALREADY_APPLIED","projectId":"proj-7aef46a6-8766-4c3c-9fc6-15a76c04265f","sessionLocalId":"s2","durationMs":0,"proposalId":"rrp-2"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > conflicts when same key different payload
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-05T22:15:14.641Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-05T22:15:14.641Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
{"event":"d1.project_create","ts":"2026-08-05T22:15:14.641Z","status":"ok","projectId":"proj-aadd5c9d-4a52-4e98-af33-3ae856d5a136","durationMs":0}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-05T22:15:14.642Z","status":"SUCCEEDED","projectId":"proj-aadd5c9d-4a52-4e98-af33-3ae856d5a136","sessionLocalId":"s3","durationMs":1,"proposalId":"rrp-3"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-05T22:15:14.642Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-05T22:15:14.642Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_mutation_rejected","ts":"2026-08-05T22:15:14.642Z","status":"CONFLICT","sessionLocalId":"s3","durationMs":0,"errorCode":"IDEMPOTENCY","proposalId":"rrp-3"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > existing project confirm is NO_MUTATION without invented link
{"event":"d1.project_create","ts":"2026-08-05T22:15:14.647Z","status":"ok","projectId":"proj-ae33e4b9-9053-4b55-bb87-576fbae91176","durationMs":1}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-05T22:15:14.647Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s4","proposalId":"rrp-4"}
[d1.intake] {"event":"intake_existing_project_confirmed","ts":"2026-08-05T22:15:14.647Z","status":"NO_MUTATION","projectId":"proj-ae33e4b9-9053-4b55-bb87-576fbae91176","sessionLocalId":"s4","durationMs":0,"proposalId":"rrp-4"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > detects stale existing project conflict
{"event":"d1.project_create","ts":"2026-08-05T22:15:14.650Z","status":"ok","projectId":"proj-9198ced7-652d-4019-a56b-806c1de4dff1","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-05T22:15:14.650Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-05T22:15:14.651Z","status":"ok","projectId":"proj-9198ced7-652d-4019-a56b-806c1de4dff1","durationMs":1}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-05T22:15:14.651Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s5","proposalId":"rrp-5"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-05T22:15:14.651Z","status":"STALE","projectId":"proj-9198ced7-652d-4019-a56b-806c1de4dff1","sessionLocalId":"s5","durationMs":0,"errorCode":"CONFLICT","proposalId":"rrp-5"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > analyze-only and cancel produce no mutation
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-05T22:15:14.654Z","status":"ANALYZE_ONLY","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_analyze_only_completed","ts":"2026-08-05T22:15:14.654Z","status":"NO_MUTATION","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-05T22:15:14.654Z","status":"CANCEL","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_cancelled","ts":"2026-08-05T22:15:14.654Z","status":"CANCELLED","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-05T22:15:14.658Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-05T22:15:14.658Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":0,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}

 ✓ __tests__/d1/intake-c4.test.ts (10 tests) 34ms
 ✓ __tests__/increment-c.test.tsx (8 tests) 1326ms
   ✓ Increment C — editable demand + confirmation > accepts editable Campus360 demand and shows exact text in confirmation  352ms
   ✓ Increment C — editable demand + confirmation > back from confirmation allows editing again  306ms
 ✓ __tests__/ops1/executionI5.test.ts (5 tests) 1739ms
   ✓ ops1 I5 execution contract + fixture run > creates contract, records GO linked to hash, runs fixture, blocks double exec  743ms
   ✓ ops1 I5 execution contract + fixture run > refuses HEAD drift and remote flags stay true  325ms
   ✓ ops1 I5 execution contract + fixture run > rejects run adapterMode mismatch (no silent real→fixture swap)  338ms
stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > creates project with audit and mono-operator assignments
{"event":"d1.project_create","ts":"2026-08-05T22:15:15.025Z","status":"ok","projectId":"proj-cdf1682b-db2c-4cb0-8bf9-fa550aa0744c","durationMs":1}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > is idempotent on duplicate key
{"event":"d1.project_create","ts":"2026-08-05T22:15:15.030Z","status":"ok","projectId":"proj-1be9d3dd-9219-41d0-b93f-a49a2a249fd6","durationMs":1}
{"event":"d1.project_create","ts":"2026-08-05T22:15:15.030Z","status":"idempotent","projectId":"proj-1be9d3dd-9219-41d0-b93f-a49a2a249fd6","durationMs":0}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
{"event":"d1.project_create","ts":"2026-08-05T22:15:15.035Z","status":"ok","projectId":"proj-dfdd8c10-1df8-4df0-b8b2-9e50248638ee","durationMs":1}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-05T22:15:15.035Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-05T22:15:15.035Z","status":"ok","projectId":"proj-dfdd8c10-1df8-4df0-b8b2-9e50248638ee","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-05T22:15:15.035Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-05T22:15:15.036Z","status":"failed","durationMs":1,"errorCode":"CONFLICT"}

 ✓ __tests__/d1/project-foundation.test.ts (7 tests) 19ms
 ✓ __tests__/increment-b.test.tsx (6 tests) 28ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 11ms
 ✓ __tests__/status-pill.test.tsx (1 test) 14ms
 ✓ __tests__/fixtures.test.ts (2 tests) 3ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 1ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 3ms
 ✓ __tests__/oa/cycle/qualifyCycleWithCkc.test.ts (13 tests) 6ms
 ✓ __tests__/oa/cycle/ckcQualificationResult.test.ts (2 tests) 3ms
stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-05T22:15:15.688Z","status":"started","intentLength":53,"sessionLocalId":"plat-1"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-05T22:15:15.782Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-1","durationMs":94,"providerMode":"fake"}

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-77d7be3a-7c6d-4086-9921-b87f458893a6 ops1-att-7fc3e5ae-0d9a-4366-a01a-d0b80572947b fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-77d7be3a-7c6d-4086-9921-b87f458893a6 ops1-att-7fc3e5ae-0d9a-4366-a01a-d0b80572947b 15 tools=0

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-77d7be3a-7c6d-4086-9921-b87f458893a6 ops1-att-8d65474b-781a-4643-8f74-1e456d021d0c fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-77d7be3a-7c6d-4086-9921-b87f458893a6 ops1-att-8d65474b-781a-4643-8f74-1e456d021d0c 30 tools=0

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-77d7be3a-7c6d-4086-9921-b87f458893a6 ops1-att-78989c8e-6298-4841-a30d-4cc20e2ec459 fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-77d7be3a-7c6d-4086-9921-b87f458893a6 ops1-att-78989c8e-6298-4841-a30d-4cc20e2ec459 45 tools=0

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-05T22:15:15.783Z","status":"started","intentLength":76,"sessionLocalId":"plat-2"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-05T22:15:15.928Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":76,"sessionLocalId":"plat-2","durationMs":145,"providerMode":"fake"}

 ✓ __tests__/oa/project/projectLpsFoundation.test.ts (26 tests) 125ms
stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-05T22:15:15.929Z","status":"started","intentLength":77,"sessionLocalId":"plat-3"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-05T22:15:16.017Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":77,"sessionLocalId":"plat-3","durationMs":88,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-05T22:15:16.017Z","status":"started","intentLength":53,"sessionLocalId":"plat-4"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-05T22:15:16.018Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-4","durationMs":1,"providerMode":"fake"}

 ✓ __tests__/d1/intake-platform-integration.test.ts (5 tests) 331ms
stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-7599f21c-30c5-4003-b702-c3ce7befa031 ops1-att-ee90853d-b446-4a84-9394-204cdc33a341 fake-test

 ✓ __tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts (95 tests) 448ms
stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-7599f21c-30c5-4003-b702-c3ce7befa031 ops1-att-ee90853d-b446-4a84-9394-204cdc33a341 45 tools=1

 ✓ __tests__/ops1/controlTowerTools.test.ts (7 tests) 575ms
   ✓ GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker  319ms
stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-dd0bb731-f345-406d-8703-c49ac935be73 ops1-att-444d6040-d6db-43db-a654-a835be31106d fake-test

stderr | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
[ops1] CONVERSATION_ATTEMPT_FAILED ops1-sess-dd0bb731-f345-406d-8703-c49ac935be73 ops1-att-444d6040-d6db-43db-a654-a835be31106d INTERNAL

 ✓ __tests__/ops1/conversation-repository.test.ts (9 tests) 676ms
   ✓ ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write  342ms
 ✓ __tests__/oa/execution-run/d2d3.readiness.test.ts (5 tests) 87ms
 ✓ __tests__/oa/execution-run/d2d3.negative.resilience.test.ts (16 tests) 122ms
 ✓ __tests__/oa/execution-attempt/lifecycleFoundation.test.ts (24 tests) 154ms
 ✓ __tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts (10 tests) 116ms
 ✓ __tests__/oa/execution-contract/runtimeValidationHardening.test.ts (16 tests) 117ms
 ✓ __tests__/oa/execution-contract/executionContractGovernance.test.ts (18 tests) 102ms
 ✓ __tests__/oa/execution-run/lateResult.test.ts (3 tests) 94ms
 ✓ __tests__/oa/execution-contract/adversarialCriticalAntiTa5.test.ts (12 tests) 88ms
 ✓ __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts (4 tests) 86ms
 ✓ __tests__/oa/execution-contract/supersedeCancelAuthz.test.ts (11 tests) 113ms
 ✓ __tests__/ops1/actionGate.test.ts (10 tests) 113ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 134ms
 ✓ __tests__/oa/execution-attempt/qaAdversarialValidation.test.ts (12 tests) 164ms
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 3817ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1818ms
   ✓ V2-A2 Create Project UI > calls only the runtime action with the exact DTO and parsed constraints  371ms
 ✓ __tests__/oa/execution-run/d2d3.coordination.fixture.test.ts (5 tests) 131ms
 ✓ __tests__/oa/execution-run/qaFindings.closure.test.ts (10 tests) 99ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 3904ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  599ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  685ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  583ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  627ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  620ms
 ✓ __tests__/oa/decision/decisionConfirmationAuthority.test.ts (26 tests) 107ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 102ms
 ✓ __tests__/oa/doctrine/resolveDoctrinePackage.test.ts (22 tests) 104ms
 ✓ __tests__/oa/decision/validationAdversarial.test.ts (12 tests) 114ms
 ✓ __tests__/oa/decision/adversarialAuthority.test.ts (8 tests) 113ms
 ✓ __tests__/oa/doctrine/schemaValidation.test.ts (3 tests) 46ms
 ✓ __tests__/oa/execution-run/lifecycle.fixture.test.ts (5 tests) 69ms
 ✓ __tests__/vertical-slice-runtime/runtimeApplicationService.test.ts (8 tests) 72ms
 ✓ __tests__/oa/execution-run/d2d3.projection.test.ts (3 tests) 76ms
 ✓ __tests__/oa/execution-run/schemas.adversarial.test.ts (9 tests) 66ms
 ✓ __tests__/vertical-slice-core/localProjectComposition.test.ts (13 tests) 85ms
 ✓ __tests__/oa/execution-run/persist.guards.test.ts (6 tests) 102ms
 ✓ __tests__/oa/execution-run/repository.memory.test.ts (6 tests) 74ms
 ✓ __tests__/vertical-slice-core/importBoundaries.test.ts (3 tests) 55ms
 ✓ __tests__/ops1/repository.test.ts (6 tests) 67ms
 ✓ __tests__/vertical-slice-runtime/importBoundaries.test.ts (5 tests) 51ms
 ✓ __tests__/oa/execution-run/boundaries.create.test.ts (4 tests) 71ms
 ✓ __tests__/oa/execution-run/boundaries.transition.test.ts (3 tests) 98ms
 ✓ __tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts (15 tests) 44ms
 ✓ __tests__/oa/execution-run/d2d2.evidence.pack.test.ts (2 tests) 44ms
 ✓ __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts (5 tests) 36ms
 ✓ __tests__/platform/t-a7-canonical-consumers.probe.test.ts (3 tests) 26ms
 ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 25ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 15ms
 ✓ __tests__/oa/execution-run/contract.equivalence.test.ts (5 tests) 52ms
 ✓ __tests__/oa/execution-run/async.cancel.lateResult.providers.test.ts (4 tests) 31ms
 ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 18ms
 ✓ __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts (3 tests) 3ms
 ✓ __tests__/ops1/controlTowerReinjection.test.ts (2 tests) 21ms
 ✓ __tests__/oa/cycle/qualifyCycleWithCkc.independent.qa.test.ts (70 tests) 22ms
 ✓ __tests__/platform/import-boundaries.test.ts (3 tests) 7ms
 ✓ __tests__/oa/evidence-review/adversarialCoordinationValidation.test.ts (7 tests) 15ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts (10 tests) 18ms
 ✓ __tests__/oa/evidence-review/claimEvaluationLifecycle.test.ts (14 tests) 21ms
 ✓ __tests__/oa/evidence-review/recommendNextGate.test.ts (11 tests) 23ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 13ms
stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks transitions while hold is active
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-05T22:15:18.651Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.project_create","ts":"2026-08-05T22:15:18.660Z","status":"ok","projectId":"proj-e91d9991-3f83-41f8-bba2-f8fb8a6b86f8","durationMs":2}
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-05T22:15:18.660Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.method_mode_selected","ts":"2026-08-05T22:15:18.661Z","status":"failed","durationMs":1,"errorCode":"CONFLICT"}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > allows transitions when hold is inactive (test override)
{"event":"d1.project_create","ts":"2026-08-05T22:15:18.668Z","status":"ok","projectId":"proj-c02fcaef-0b50-40a7-b58d-d28c8b9ea27d","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-05T22:15:18.668Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-05T22:15:18.669Z","status":"ok","projectId":"proj-c02fcaef-0b50-40a7-b58d-d28c8b9ea27d","durationMs":1}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks when hold is active even with empty reasons
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-05T22:15:18.670Z","status":"blocked","reasonCount":0,"codes":"ACTIVE_NO_REASONS"}

 ✓ __tests__/d1/t-a7-method-mode-hold.test.ts (6 tests) 27ms
 ✓ __tests__/oa/evidence-review/reviewBundleLifecycle.test.ts (14 tests) 15ms
 ✓ __tests__/oa/execution-contract/antiLegacy.test.ts (4 tests) 11ms
 ✓ __tests__/oa/execution-run/importBoundaries.test.ts (17 tests) 16ms
 ✓ __tests__/ops1/sfia/canonicalEngine.test.ts (17 tests) 3265ms
   ✓ SFIA action compiler > compiles valid CREATE and persists ActionCandidate  341ms
   ✓ SFIA action compiler > denies commit/push operations  319ms
   ✓ SFIA action compiler > denies protected path  318ms
   ✓ SFIA action compiler > denies context stale  334ms
   ✓ SFIA action compiler > preserves exact content  339ms
   ✓ SFIA action compiler > instantiates cursor prompt from real template  383ms
   ✓ SFIA conversation integration (fixture markers) > commit marker → POLICY_DENIED  348ms
 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 13ms
 ✓ __tests__/oa/evidence-review/verifyAndUnavailable.test.ts (13 tests) 9ms
 ✓ __tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts (4 tests) 9ms
 ✓ __tests__/oa/decision/antiLegacy.test.ts (4 tests) 17ms
 ✓ __tests__/oa/cycle/qualifyCycleWithCkc.qa.test.ts (12 tests) 9ms
 ✓ __tests__/ops1/openai-provider.test.ts (2 tests) 9ms
 ✓ __tests__/oa/project/antiLegacy.test.ts (4 tests) 8ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.test.ts (14 tests) 7ms
 ✓ __tests__/oa/evidence-review/adversarialMaturityValidation.test.ts (3 tests) 10ms
 ✓ __tests__/platform/t-a7-consolidated-blocker-reduction.test.ts (19 tests) 6ms
 ✓ __tests__/oa/execution-attempt/attemptRepository.test.ts (33 tests) 8ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 6ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 7ms
 ✓ __tests__/oa/evidence-review/adversarialValidation.test.ts (9 tests) 9ms
 ✓ __tests__/oa/execution-run/ports.conformance.test.ts (5 tests) 6ms
 ✓ __tests__/oa/cycle/ckcConsumptionProof.test.ts (8 tests) 7ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 10ms
 ✓ __tests__/oa/evidence-review/adversarialClaimEvaluationValidation.test.ts (4 tests) 18ms
 ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 7ms
 ✓ __tests__/oa/execution-run/transitions.test.ts (8 tests) 3ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (9 tests) 5ms
 ✓ __tests__/oa/evidence-review/reviewBundleDomain.test.ts (12 tests) 7ms
 ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 10ms
 ✓ __tests__/oa/execution-run/adapter.git.readonly.test.ts (4 tests) 3ms
 ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 4ms
 ✓ __tests__/oa/execution-run/adapter.secrets.opaque.test.ts (2 tests) 3ms
 ✓ __tests__/oa/cycle/ckcReferenceManifest.test.ts (5 tests) 4ms
 ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 9ms
 ✓ __tests__/platform/platform-ai.test.ts (5 tests) 2ms
 ✓ __tests__/oa/execution-run/adapter.events.redaction.test.ts (3 tests) 3ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 3ms
 ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 6ms
 ✓ __tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts (6 tests) 4ms
 ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 10ms
 ✓ __tests__/oa/execution-run/adversarial.providerBoundary.test.ts (17 tests) 2ms
 ✓ __tests__/oa/execution-run/adapter.ai.fake.test.ts (2 tests) 4ms
 ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 10ms
 ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 5ms
 ✓ __tests__/oa/execution-run/policy.test.ts (9 tests) 11ms
 ✓ __tests__/oa/finops/period.test.ts (10 tests) 5ms
 ✓ __tests__/oa/finops/costEvidence.test.ts (5 tests) 10ms
 ✓ __tests__/oa/finops/domainInvariants.test.ts (7 tests) 9ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 2ms
 ✓ __tests__/oa/finops/importBoundaries.test.ts (3 tests) 5ms
 ✓ __tests__/oa/execution-run/evidence.test.ts (6 tests) 2ms
 ✓ __tests__/oa/finops/sourceOfTruth.test.ts (5 tests) 3ms
 ✓ __tests__/oa/finops/blockingEligibility.test.ts (9 tests) 2ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 3ms

 Test Files  136 passed (136)
      Tests  1355 passed (1355)
   Start at  00:15:12
   Duration  7.96s (transform 3.85s, setup 5.14s, collect 14.30s, tests 22.84s, environment 7.19s, prepare 5.34s)


```

## Corrections effectuées

1. Commentaires sans littéral Date.now (importBoundaries).
2. `BigInt(0)` au lieu de `0n`.
3. `assertDistinctEvidenceClasses` via Set.
4. switch exhaustifs pour lint unused.

## Critères d’acceptation

Tous les critères du GO T0 sont satisfaits localement (voir document 127 §44). Coverage: targeted=yes · typecheck=yes · lint=yes · full suite=yes · package/lock unchanged=yes · files outside scope=none · T1–T7 untouched=yes · Local Git Truth initiale=yes · Local Git Truth finale=yes · synthesis only=no · placeholder actif=no · quatorze fichiers complets=yes · document 127 complet=yes · sections 103 modifiées complètes=yes · diff utile complet=yes.

## Document 127 complet

SHA-256: `2eaf97d06354c4d0823a902f8a249bb1dca9f394fb95199d5391a9b7631e8b01` · Lines: 686

```markdown
# SFIA Studio — Assistant SFIA natif OpenAI —
FinOps Technical Lot T0 —
Execution

## 1. Statut et anti-claims

**FINOPS TECHNICAL LOT T0 EXECUTED —**
**T0 CONTRACTS AND PURE DOMAIN RULES IMPLEMENTED —**
**14 FILES CREATED —**
**0 EXISTING PRODUCT FILE MODIFIED —**
**FINOPS PERIOD IMPLEMENTED —**
**CALENDAR MONTH UTC IMPLEMENTED —**
**SOURCE-OF-TRUTH LEVELS 1 TO 6 IMPLEMENTED —**
**COST EVIDENCE CLASSIFICATION IMPLEMENTED —**
**BLOCKING ELIGIBILITY IMPLEMENTED —**
**UNKNOWN DISTINCT FROM ZERO —**
**ESTIMATION NEVER BLOCKS —**
**MONEY DEFERRED —**
**NO PROVIDER DEPENDENCY —**
**NO PERSISTENCE DEPENDENCY —**
**NO RUNTIME WIRING —**
**T0 TARGETED TESTS PASSED —**
**TYPECHECK PASSED —**
**LINT PASSED —**
**FULL TEST SUITE PASSED —**
**T0 LOCAL DELIVERY COMPLETE —**
**T0 READY FOR CHATGPT VALIDATION —**
**T1 TO T7 NOT AUTHORIZED —**
**TB-04-04 NOT DONE —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**NO BACKLOG ITEM DONE —**
**NO PROJECT COMMIT OR PUSH —**
**LOT-D1 DELIVERY NOT-CONSUMED**

### Anti-claims

| Anti-claim | Statut |
|---|---|
| Exécution de T0 ≠ exécution de LOT-D1 | vrai |
| Delivery T0 consommée ≠ Delivery LOT-D1 consommée | vrai |
| Contrats de domaine implémentés ≠ contrôle FinOps actif | vrai |
| Tests T0 verts ≠ TB-04-04 DONE | vrai |
| T0 terminé localement ≠ T1 autorisé | vrai |
| Unknown ≠ zéro | vrai |
| Estimation never blocks | vrai |
| Money deferred | vrai |

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/127-assistant-sfia-native-openai-finops-technical-lot-t0-execution.md` |
| **Contrat** | document **126** |
| **Backlog** | document **103** mis à jour |
| **Delivery T0** | consumed |
| **LOT-D1 Delivery** | NOT-CONSUMED |

---

## 2. Autorité Morris

Morris est l’unique autorité d’autorisation. Cursor a exécuté le lot T0 borné sous ce GO. Aucune autorité supplémentaire pour T1–T7, LOT-D1, commit/push/PR/merge projet.

---

## 3. GO exact

```text
GO DELIVERY SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
EXECUTE FINOPS TECHNICAL LOT T0
```

---

## 4. Horodatage CEST et UTC

| Instant | Valeur |
|---|---|
| **GO Morris** | 2026-08-06 00:04 CEST (+0200) / 2026-08-05 22:04 UTC (secondes exactes non disponibles — non inventées) |
| **Rédaction Cursor (approx.)** | 2026-08-06 00:19:42 CEST (+0200) / 2026-08-05 22:19:42 UTC |

---

## 5. Qualification cycle / profil / typologie

| Champ | Valeur |
|---|---|
| **Type de cycle** | 8 — Delivery |
| **Mode** | Bounded Local Delivery — FinOps Technical Lot T0 Execution |
| **Profil SFIA** | Critical |
| **Typologie** | EVOL |
| **CKC** | candidate si présent dans Git · experimental cognitive guidance · aucune autorité d’exécution supplémentaire · document 126 reste autoritatif |

---

## 6. Sources

- document **126** (contrat d’exécution autoritatif) ;
- documents **103**, **122–125** (contexte / décisions) ;
- conventions `app/lib/oa/**`, `__tests__/oa/**`, Vitest, ESLint ;
- handoff entrant tip `b9cf5ced84d768ba501aed711377011b9e6b4c2e` ;
- méthode Delivery / QA / Review Pack / Review Handoff depuis Git main.

Aucune recherche externe. Aucun tarif externe.

---

## 7. Local Git Truth initiale

| Champ | Valeur |
|---|---|
| **Branche initiale** | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0-execution-pack` |
| **HEAD** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **origin/main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Merge-base** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Ahead / behind** | 0 / 0 |
| **Upstream projet** | aucun |
| **14 fichiers T0** | absents avant exécution |
| **127 / 128** | absents |

---

## 8. Handoff entrant

| Champ | Valeur |
|---|---|
| **Branche** | `sfia/review-handoff` |
| **Tip** | `b9cf5ced84d768ba501aed711377011b9e6b4c2e` |
| **Blob** | `8cc1d801d6ae923daaa91d8162ec14b62dec7e11` |
| **Fichier** | `sfia-review-handoff/latest-chatgpt-review.md` |
| **Message** | `docs(review-handoff): publish Assistant SFIA FinOps technical lot T0 execution pack` |

---

## 9. Hashes entrants 103 à 126

| Doc | SHA-256 | Lignes |
|---|---|---|
| **103** | `0e6fb9fb06a0e887cef1ceea5005426b52827584c3ae4eaf59806ee62fea3d1a` | 2363 |
| **104** | `48859ae1f54d4f5d64a39099e00fe9af3e89b6f1cf38a24bc12c58b5dbf11802` | 484 |
| **105** | `bfdb737713b9d93204aa870c2842ae8246eec6d2f70535b7efae136ecf0694a9` | 565 |
| **106** | `7f009bfef42dd020fe22bdd7ba718ab647f54695adf2eeea9bcdd22cbf1ceb17` | 286 |
| **107** | `b2c59ea42306231b6c8649a3b5c2897b9eb38ebef043d2af72b208f73bf13a45` | 451 |
| **108** | `101932c574c4685017ab1c631858c78e038cb7c9a447ffe1bdd5c619393662ec` | 415 |
| **109** | `037eb7220ded4ba8f19da4c0a256b39c6a45f8d4588953361c4b99260a32296b` | 683 |
| **110** | `475d79dec7474e80f6b058a68630572c2b281ef1c6a79e90d39d2c9c3bb29af5` | 295 |
| **111** | `da9357a9ec051fe80d596711fdac9c7d38b084ab922a54af6789a9d112c5f8cb` | 474 |
| **112** | `510e8d8b49d2acf3fda5e21b4404a5140c4cce1f381220eedfd87466cea24642` | 939 |
| **113** | `8531a6278e0a4beae63eeba1f1788bfb1fdadc9c38f5a80d8f10f2fba97a96ba` | 460 |
| **114** | `c41d77e30e98f8b71bcb84a360d1712550ea9ae8255c000950b30f86d99c51b4` | 530 |
| **115** | `2e814ccfd6c735efaaae6193b08b555bd9a9d478927b06b78c5d78c67c61944b` | 533 |
| **116** | `b756dc931ba02f1573d7efd4729d4aac74d4c641b06163b608b5530c9c046e08` | 442 |
| **117** | `3bf6adc9d7e53ffe3f6a3a82fb41f6763f300488df8dc33e8b49fcb90bbe3d68` | 260 |
| **118** | `0ab4b68ccf2ca5b81e943df4b8a160ca1c008facedfc0e06c92d58a5ff506966` | 422 |
| **119** | `91737dc4c47f69068fc899d4f430088284a5a7b26413da3c9772952809bb26be` | 549 |
| **120** | `8171bdf13349ead303a67f57ed07761f572eb9dbfdf369139a26d5544920ab9c` | 284 |
| **121** | `928e6a591feae23155f0d74b41f6f43c35cc8a79939122b555683506ad1e4f87` | 515 |
| **122** | `6606e527c3ba25580cb5cad7eb5f7db581e7f4ff86e302e49b8e47b8ace02212` | 739 |
| **123** | `832438b4c315e4ab276ab57de30f0209f33567a4b079e480880c185e71057a0a` | 620 |
| **124** | `19eacd7f3f46d2693e270b0e6a4a046b8386faab702e67b1712666b7634fc7be` | 573 |
| **125** | `bdd84e33602377a39ab3b9832884723bcc20c050389a93be7631a3c132ceb6f6` | 849 |
| **126** | `03a3e94c438721597e97199f6afa16a84d45aeaf5adac35f88a1d40dc062bf64` | 935 |

Document **103** a été modifié dans ce cycle (hash entrant ci-dessus = avant modification). Documents **104–126** restent byte-identical.

---

## 10. État avant / après

| Élément | Avant | Après |
|---|---|---|
| 14 fichiers T0 | absents | créés |
| Document 127 | absent | créé |
| Document 103 | hash entrant | mis à jour |
| Documents 104–126 | présents | byte-identical |
| Document 128 | absent | absent |
| package.json / lock | `fcb004b52d4547bffd171dd0411d08f41f87b21a5e5fa5cdf1193e23342175cf` / `042fc4467b24d5c8dea1c768fa97d01861f2c0b76667ce6bd20cde6b0e0a18ea` | inchangés |
| T1–T7 | NOT AUTHORIZED | NOT AUTHORIZED |
| TB-04-04 | NOT DONE | NOT DONE |
| LOT-D1 Delivery | NOT-CONSUMED | NOT-CONSUMED |
| Bounded Delivery T0 | not consumed | consumed |

---

## 11. Scope autorisé

14 CREATE produit · 0 MODIFY produit · 0 DELETE · 103 MODIFY · 127 CREATE · handoff L3 · Review Pack Full.

---

## 12. Scope final

**14 CREATE — 0 MODIFY — 0 DELETE** (produit) · **103 MODIFY — 127 CREATE — 104 TO 126 BYTE-IDENTICAL — 128 ABSENT**.

---

## 13. Liste des quatorze fichiers

1. `app/lib/oa/finops/domain/types.ts`
2. `app/lib/oa/finops/domain/errors.ts`
3. `app/lib/oa/finops/domain/invariants.ts`
4. `app/lib/oa/finops/domain/period.ts`
5. `app/lib/oa/finops/domain/sourceOfTruth.ts`
6. `app/lib/oa/finops/domain/costEvidence.ts`
7. `app/lib/oa/finops/domain/blockingEligibility.ts`
8. `app/lib/oa/finops/index.ts`
9. `__tests__/oa/finops/period.test.ts`
10. `__tests__/oa/finops/sourceOfTruth.test.ts`
11. `__tests__/oa/finops/costEvidence.test.ts`
12. `__tests__/oa/finops/blockingEligibility.test.ts`
13. `__tests__/oa/finops/domainInvariants.test.ts`
14. `__tests__/oa/finops/importBoundaries.test.ts`

Préfixe projet : `projects/sfia-studio/`.

---

## 14. Hashes et lignes des quatorze fichiers

| Fichier | SHA-256 | Lignes |
|---|---|---|
| `projects/sfia-studio/app/lib/oa/finops/domain/types.ts` | `1f27721ddb930257e0491bc901f0de1a230fcaa5fd9b706e42cd40e53b026b09` | 64 |
| `projects/sfia-studio/app/lib/oa/finops/domain/errors.ts` | `9fcbcc89dad3d1856cbb3ae5245d90d1f09ed71991e760303693c9687dcac498` | 35 |
| `projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts` | `e27a5b9dce23ae1d2427e1684a17ee8a82ac81db1a3a8064d471200d7ff35b7b` | 130 |
| `projects/sfia-studio/app/lib/oa/finops/domain/period.ts` | `83bcad8da568c411c49f25ff3e2c6c9c0f17bee4d992dfbc5873beceafae0689` | 67 |
| `projects/sfia-studio/app/lib/oa/finops/domain/sourceOfTruth.ts` | `33a288ba238a51f9ec4dc649d7b6d80277d39b541fb76d4c94b9eb79993e4c8e` | 73 |
| `projects/sfia-studio/app/lib/oa/finops/domain/costEvidence.ts` | `eb021400549674d86fbdb022e5d7f7e85ca2f69ecb3a60455563d91d6527021c` | 47 |
| `projects/sfia-studio/app/lib/oa/finops/domain/blockingEligibility.ts` | `664b32863e2606a3488b6d5b349e03547736fc3f631b47431bc3148764ec1898` | 69 |
| `projects/sfia-studio/app/lib/oa/finops/index.ts` | `44008d949a8342b558a37bed755fcda6953a406b906f7a84ecec385ed8c7ccec` | 52 |
| `projects/sfia-studio/app/__tests__/oa/finops/period.test.ts` | `9d275dfdf8dcb8b5c120670ab1db6ebb9cfd7a49e3fbbedc4cce79d8659de552` | 99 |
| `projects/sfia-studio/app/__tests__/oa/finops/sourceOfTruth.test.ts` | `8d3bf36c6055792cb8eea53bfe7d7468ff46de739a1d516fd1c48526a3e26be0` | 70 |
| `projects/sfia-studio/app/__tests__/oa/finops/costEvidence.test.ts` | `8961e132d7d6804074158fa2ce9efbe715e82b6dbbb2e18b37dba76d27b844a2` | 74 |
| `projects/sfia-studio/app/__tests__/oa/finops/blockingEligibility.test.ts` | `d19baba0fbaa5ecd06766993c1a7acf4581eef0166f1b2d27e92e826340d9ae4` | 93 |
| `projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts` | `98a885ca11d6a4de5427abfbcd989161d833ac23dcab1b4933281e1a3f7e3b74` | 76 |
| `projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts` | `49068a52271e98fbf1de55f17e191182f141a8215b8e1bcdc32102cbaa8ccc8d` | 87 |

---

## 15. Architecture T0

Module pur `lib/oa/finops` :
- `domain/*` — contrats et règles pures ;
- `index.ts` — barrel public T0 uniquement ;
- aucun `domain/index.ts` ;
- aucun port, adapter, repository, application, infrastructure.

---

## 16. Contrats créés

`FinOpsPeriod` · `FinOpsSourceOfTruth` · `FinOpsCostEvidenceClass` · `FinOpsBlockingDecision` · `FinOpsBlockingReason` · `FinOpsDetailCode` · `FINOPS_SOT_RANK` · erreurs structurées · invariants · helpers période / SoT / evidence / blocking.

---

## 17. Symboles créés

Conformément au document 126 §26 : types fermés, `createFinOpsError`, `FinOpsDomainError`, `validateIsoTimestamp`, `validateFinOpsPeriodShape`, `assertUnknownNotNumericZero`, `computeUtcMonthPeriod`, `periodContainsInstant`, `compareFinOpsPeriods`, `finOpsPeriodKey`, `assignInstantToPeriod`, `sourceOfTruthRank`, `compareSourceOfTruth`, `sourceMayBlock`, `sourceMayInform`, `sourceMayRequestHumanReview`, `classifyCostEvidenceFromSource`, `assertDistinctEvidenceClasses`, `isUnknownEvidence`, `evaluateBlockingEligibility`, `ESTIMATION_NEVER_BLOCKS`.

---

## 18. FinOpsPeriod

`periodStart` / `periodEnd` ISO Z · `timezone: "UTC"` · start inclusif · end exclusif.

---

## 19. Règles UTC

Mois calendaire UTC · janvier→février · décembre→janvier année suivante · année bissextile · DST sans effet · offset ISO converti via instant UTC · late event = période de `occurredAt` · pas d’horloge globale cachée · instant injecté.

---

## 20. Source of Truth

Six littéraux fermés : BILLED · PROVIDER_OBSERVED · API_USAGE · LOCAL_COUNT · PARAMETRIC_ESTIMATE · UNKNOWN.

---

## 21. Rang 1 à 6

`FINOPS_SOT_RANK` : BILLED=1 … UNKNOWN=6 · rang inférieur = plus autoritatif.

---

## 22. Cost Evidence

Classes : estimated · observed · billed · unknown — distinctes · pas de montant.

---

## 23. Mapping source → class

| Source | Class |
|---|---|
| BILLED | billed |
| PROVIDER_OBSERVED | observed |
| API_USAGE | observed |
| LOCAL_COUNT | estimated |
| PARAMETRIC_ESTIMATE | estimated |
| UNKNOWN | unknown |

Le blocage lit le SoT, pas seulement la classe.

---

## 24. Blocking Eligibility

`evaluateBlockingEligibility(source)` retourne `FinOpsBlockingDecision` · `ESTIMATION_NEVER_BLOCKS = true` · aucun blocage runtime déclenché.

---

## 25. Matrice source → blocage

| Source | eligible | reason | confidenceClass |
|---|---|---|---|
| BILLED | true | SOURCE_MAY_BLOCK | billed |
| PROVIDER_OBSERVED | true | SOURCE_MAY_BLOCK | observed |
| API_USAGE | false | API_USAGE_NEVER_BLOCKS | observed |
| LOCAL_COUNT | false | LOCAL_COUNT_NEVER_BLOCKS | estimated |
| PARAMETRIC_ESTIMATE | false | ESTIMATE_NEVER_BLOCKS | estimated |
| UNKNOWN | false | UNKNOWN_NEVER_BLOCKS | unknown |

---

## 26. Unknown handling

`UNKNOWN` / `unknown` n’est pas zéro · non bloquant · observable · pas de fallback zéro · `assertUnknownNotNumericZero` refuse 0 / BigInt(0) / "0".

---

## 27. Money deferred

Aucun type Money · aucun montant · aucune conversion · aucune valeur tarifaire inventée.

---

## 28. Invariants

Timestamps ISO avec Z ou offset · période start < end · timezone UTC strict · unknown ≠ zero · pas de mutation · pas d’horloge globale.

---

## 29. Erreurs

`FinOpsStructuredError` + `FinOpsDomainError` + `createFinOpsError` · detailCode fermé · pas de framework Result générique · pas de donnée sensible.

---

## 30. Immutabilité

Types `readonly` / `as const` · fonctions pures · objets période non mutés par les validateurs.

---

## 31. Déterminisme

Même instant → même période · même source → même décision · comparaisons d’ordre stables.

---

## 32. Import boundaries

Domaine libre de openai / platform / ops1 / execution-run / pg / sqlite / node:fs / node:net / next / react / process.env · imports relatifs uniquement · test `importBoundaries.test.ts`.

---

## 33. Absence d’effet de bord

Pas d’I/O · pas de réseau · pas de disque · pas d’env · pas d’aléatoire · pas d’écriture.

---

## 34. Absence provider

Aucun import OpenAI · aucune capture usage · aucune modification provider.

---

## 35. Absence persistence

Aucun SQL · migration · repository · Neon · pg runtime.

---

## 36. Absence runtime wiring

Aucun enforcement actif · flag · rollout · alert · override · wiring execution-run.

---

## 37. Tests créés

Six fichiers : period · sourceOfTruth · costEvidence · blockingEligibility · domainInvariants · importBoundaries (T-TECH-05/06/07/12 inclus).

---

## 38. Résultats tests ciblés

Commande : `npm run test -- __tests__/oa/finops` depuis `projects/sfia-studio/app`.

- Exit code : **0**
- Test files : **6 passed**
- Tests : **39 passed**
- Durée approx. : **~0.3–0.5 s**
- Warnings : npm notice major version only (hors échec)

Extrait :

```text

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/finops


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1/projects/sfia-studio/app

 ✓ __tests__/oa/finops/importBoundaries.test.ts (3 tests) 2ms
 ✓ __tests__/oa/finops/sourceOfTruth.test.ts (5 tests) 2ms
 ✓ __tests__/oa/finops/costEvidence.test.ts (5 tests) 3ms
 ✓ __tests__/oa/finops/domainInvariants.test.ts (7 tests) 2ms
 ✓ __tests__/oa/finops/blockingEligibility.test.ts (9 tests) 2ms
 ✓ __tests__/oa/finops/period.test.ts (10 tests) 3ms

 Test Files  6 passed (6)
      Tests  39 passed (39)
   Start at  00:14:57
   Duration  296ms (transform 96ms, setup 360ms, collect 198ms, tests 13ms, environment 0ms, prepare 265ms)


```

---

## 39. Résultat typecheck

Commande : `npm run typecheck` · exit **0** · `tsc --noEmit` sans erreur.

```text

> sfia-studio@0.1.0 typecheck
> tsc --noEmit


```

---

## 40. Résultat lint

Commande : `npm run lint` · exit **0** · `No ESLint warnings or errors` (après correction unused).

```text

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors

```

---

## 41. Résultat suite complète

Commande : `npm run test` · exit **0** · **136** files passed · **1355** tests passed · durée **~8 s**.

```text
e.test.ts (6 tests) 4ms
 ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 10ms
 ✓ __tests__/oa/execution-run/adversarial.providerBoundary.test.ts (17 tests) 2ms
 ✓ __tests__/oa/execution-run/adapter.ai.fake.test.ts (2 tests) 4ms
 ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 10ms
 ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 5ms
 ✓ __tests__/oa/execution-run/policy.test.ts (9 tests) 11ms
 ✓ __tests__/oa/finops/period.test.ts (10 tests) 5ms
 ✓ __tests__/oa/finops/costEvidence.test.ts (5 tests) 10ms
 ✓ __tests__/oa/finops/domainInvariants.test.ts (7 tests) 9ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 2ms
 ✓ __tests__/oa/finops/importBoundaries.test.ts (3 tests) 5ms
 ✓ __tests__/oa/execution-run/evidence.test.ts (6 tests) 2ms
 ✓ __tests__/oa/finops/sourceOfTruth.test.ts (5 tests) 3ms
 ✓ __tests__/oa/finops/blockingEligibility.test.ts (9 tests) 2ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 3ms

 Test Files  136 passed (136)
      Tests  1355 passed (1355)
   Start at  00:15:12
   Duration  7.96s (transform 3.85s, setup 5.14s, collect 14.30s, tests 22.84s, environment 7.19s, prepare 5.34s)


```

---

## 42. Warnings

- Notice npm « New major version » (informational).
- Message Next.js `next lint` deprecated (préexistant) — lint vert.
- Aucun warning ESLint final.

---

## 43. Corrections effectuées

1. Commentaires domaine reformulés (éviter littéral Date.now détecté comme violation d’import boundary).
2. Remplacement `0n` → `BigInt(0)` (target TS < ES2020).
3. `assertDistinctEvidenceClasses` via Set de littéraux (évite TS2367).
4. `sourceMayInform` / `sourceMayRequestHumanReview` exhaustifs (lint unused).

Toutes corrections **dans les 14 fichiers autorisés**.

---

## 44. Critères d’acceptation

Les 41 critères du GO (quatorze fichiers, indépendance provider/persistence, UTC, SoT, unknown≠zero, matrice blocking, ESTIMATION NEVER BLOCKS, Money deferred, validations vertes, package/lock inchangés, T1–T7 non touchés, TB-04-04 NOT DONE, TB-02-05 préservé, aucun item DONE, Review Pack/Handoff) sont **satisfaits** au moment de la rédaction locale.

---

## 45. Contrôle package/lockfile

| Fichier | SHA-256 |
|---|---|
| `package.json` | `fcb004b52d4547bffd171dd0411d08f41f87b21a5e5fa5cdf1193e23342175cf` |
| `package-lock.json` | `042fc4467b24d5c8dea1c768fa97d01861f2c0b76667ce6bd20cde6b0e0a18ea` |

Attendu initial capturé : `fcb004b5…` / `042fc446…` — **byte-identical**.

---

## 46. Contrôle scope

Inventaire `lib/oa/finops` + `__tests__/oa/finops` = **exactement 14 fichiers**. Aucun fichier produit existant modifié. Aucun SQL/migration/config. Aucun staged. Aucun commit/push projet.

---

## 47. Sécurité / RSSI

Pas de secrets · pas de PII · erreurs sans données sensibles · frontières d’import empêchent leakage infrastructure · pas de surface réseau.

---

## 48. RGPD

Minimisation : aucun stockage · aucune capture d’usage · contrats purs uniquement · aligné policy data minimization SELECTED (non implémentée hors T0).

---

## 49. Performance

Fonctions O(1) pures · pas d’I/O · suite T0 < 1 s · full suite ~8 s inchangée structurellement.

---

## 50. GreenOps

Pas de dépendance ajoutée · pas de runtime cloud · calculs CPU triviaux · pas de surconsommation.

---

## 51. Résilience

Erreurs structurées pour timestamps/périodes invalides · décisions déterministes · pas d’état mutable partagé.

---

## 52. Réversibilité

Suppression des 14 fichiers + rollback doc 103/127 restaure l’état pré-T0 · aucun schéma DB · aucun package.

---

## 53. Risques résiduels

- Validation ChatGPT encore pending ;
- confusion possible T0 Delivery vs LOT-D1 (mitigée par anti-claims) ;
- Money encore absent (volontaire) ;
- T1+ non préparés au-delà des contrats ;
- recalibration 15/20/25/30 USD toujours requise.

---

## 54. Dette résiduelle

Money deferred · ClockPort application future · persistence/ledger T2+ · enforcement runtime T4+ · metering TB-02-05 distinct · feature flag / rollout futurs.

---

## 55. Impact TB-04-04

T0 exécuté localement · QA evidence produite · ChatGPT validation pending · **DONE = no** · FinOps complete **not completed**.

---

## 56. Impact TB-02-05

Statut **préservé** (CANDIDATE) · contrats T0 présents · aucun metering/soft cap/ledger runtime.

---

## 57. T1 à T7

**NOT AUTHORIZED — NOT STARTED**.

---

## 58. Graphe et priorités

33 nœuds · 56 arêtes · acyclique · P0=6 · P1=13 · P2=13 · P3=1 — **préservés**.

---

## 59. Aucun item DONE

Aucun backlog item marqué DONE.

---

## 60. Delivery T0 consommée

Bounded Delivery cycle T0 = **consumed**.

---

## 61. LOT-D1 Delivery non consommée

LOT-D1 = **NOT AUTHORIZED — NOT-CONSUMED**.

---

## 62. Absence commit/push projet

HEAD reste `8dc54db0069eed78a8d8930cc2b035450ab56ad1` · aucun commit projet · aucun push projet · aucun PR/merge.

---

## 63. Local Git Truth finale

| Champ | Valeur |
|---|---|
| **Branche Delivery** | `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0` |
| **HEAD** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **origin/main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Merge-base** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Ahead/behind** | `0	0` |
| **toplevel** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1` |
| **Status scoped** | |

```text
?? projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
?? projects/sfia-studio/app/__tests__/oa/finops/
?? projects/sfia-studio/app/lib/oa/finops/
```

---

## 64. Prochaine gate candidate

```text
GO PR READINESS SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
REVIEW FINOPS TECHNICAL LOT T0
```

Candidate uniquement — non consommée. N’autorise pas T1–T7, LOT-D1, PostgreSQL/Neon runtime, provider wiring, enforcement actif, push, PR ou merge sans gates distinctes.

---

## 65. Verdict

**FINOPS TECHNICAL LOT T0 EXECUTED —**
**BOUNDED DELIVERY T0 CONSUMED —**
**T0 CONTRACTS AND PURE DOMAIN RULES IMPLEMENTED —**
**14 AUTHORIZED FILES CREATED —**
**0 EXISTING PRODUCT FILE MODIFIED —**
**T0 READY FOR CHATGPT VALIDATION —**
**T1 TO T7 NOT AUTHORIZED —**
**TB-04-04 NOT DONE —**
**TB-02-05 PRESERVED —**
**LOT-D1 DELIVERY NOT-CONSUMED —**
**NO PROJECT COMMIT OR PUSH —**
**READY FOR CHATGPT VALIDATION AND MORRIS FINOPS TECHNICAL LOT T0 PR READINESS DECISION**

```

## Sections 103 modifiées complètes

### Statut (§1)

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
| **LOT-D1 Delivery** | NOT AUTHORIZED — NOT-CONSUMED |
| **Project publication / PR** | not started |

```

### GO Execute T0 (§1novodecies)

```markdown
## 1novodecies. GO Morris — Execute FinOps Technical Lot T0

```text
GO DELIVERY SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE FINOPS TECHNICAL LOT T0
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-06 00:04 CEST (+0200) / 2026-08-05 22:04 UTC |
| **Cycle** | Delivery — Bounded Local Delivery — FinOps Technical Lot T0 Execution |
| **Profil** | **Critical** |
| **Typologie** | EVOL |
| **Autorisation bornée** | T0 uniquement — contracts and pure domain rules selon document **126** |
| **Fichiers autorisés** | 14 CREATE fermés sous `app/lib/oa/finops/**` et `__tests__/oa/finops/**` · 0 MODIFY produit existant |
| **Validations exécutées** | `npm run test -- __tests__/oa/finops` · `npm run typecheck` · `npm run lint` · `npm run test` |
| **Livrables** | 14 fichiers T0 · document **127** · mise à jour **103** · Review Pack Full · Review Handoff |
| **Non-effet** | T1–T7 **NOT AUTHORIZED** · LOT-D1–D5 **NOT AUTHORIZED** · aucun provider/persistence/runtime wiring · aucun Money · aucun enforcement actif · TB-04-04 **pas DONE** · aucun item DONE · aucun commit/push/PR/merge projet |
| **Record** | `projects/sfia-studio/127-assistant-sfia-native-openai-finops-technical-lot-t0-execution.md` |

### Chaîne documentaire LOT-IP-0C (post T0 Execution)

| Document | Rôle |
|---|---|
| **119** | préparation de sélection |
| **120** | Selection Decision Pack |
| **121** | sélection appliquée |
| **122** | contrat FinOps |
| **123** | enforcement decisions applied |
| **124** | Technical Implementation Decision Pack |
| **125** | Technical Implementation Decisions Applied |
| **126** | T0 Execution Pack |
| **127** | T0 Execution |

### Statut lot technique T0

| Champ | Valeur |
|---|---|
| **Autorisation** | **AUTHORIZED BY MORRIS** |
| **Exécution** | **EXECUTED LOCALLY** |
| **Implementation** | **IMPLEMENTED** |
| **Tests** | **TESTED** |
| **Validation ChatGPT** | **AWAITING CHATGPT VALIDATION** |
| **Commit / push projet** | **NO PROJECT COMMIT OR PUSH** |
| **DONE backlog** | **no** |

### Lots T1 à T7 (inchangés)

**NOT AUTHORIZED — NOT STARTED**

### Delivery distinction

| Gate | Statut |
|---|---|
| Bounded Delivery cycle T0 | **consumed** |
| LOT-D1 Delivery | **NOT AUTHORIZED — NOT-CONSUMED** |
| Project publication | not started |
| PR | not created |

---

```

### TB-02-05

```markdown
#### TB-02-05 — Metering provider et soft cap (sans hard cap)

| Champ | Valeur |
|---|---|
| **ID** | `TB-02-05` |
| **Type** | NFR |
| **Epic** | EPIC-TB-02 |
| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
| **Statut** | CANDIDATE |
| **Dépendances** | TB-02-01, TB-03-04 |
| **Gate Morris** | aucune pour metering/soft cap · hard cap reste DEFER-BEFORE-PILOT (TB-04-04) — non bloquant pour cet item |
| **Source** | doc 102 FPI-14 soft · R-TECH-FINOPS-HARD-01 · impact metering |
| **Réserves liées** | R-TECH-FINOPS-HARD-01 (contexte KEEP-OPEN — **non bloquante** pour soft cap/metering) |
| **Non-sélections liées** | hard cap FinOps, tarif, SLO |
| **Delivery** | NOT AUTHORIZED |
| **Relation main** | EXTEND — `usage-summary` schéma + events usage_validated (PR #308/#309) comme base metering · soft cap Assistant NEW · hard cap non implémenté |

**Objectif :** Mesurer l’usage provider et appliquer soft cap indépendamment de la décision hard cap ; hard cap reste différé avant pilote (TB-04-04).

**Note LOT-IP-0C / T0 (122/124/125/126/127) :** TB-02-05 reste **distinct** et **non réalisé** · statut **préservé** · contrats T0 **implémentés** · **aucun** metering runtime · **aucune** capture provider · **aucun** soft cap actif · **aucun** ledger · **aucun** item DONE · gate distincte requise.

**Critères d’acceptation :**
  - Le metering enregistre les tentatives provider indépendamment du succès métier.
  - Le soft cap est configurable Admin sans valeur inventée ici.
  - Le hard cap n’est pas implémenté tant que DEFER-BEFORE-PILOT.

**Preuves attendues :**
  - tests soft cap
  - preuve absence hard cap implicite

**Hors périmètre :** tarifs, SLO, hard cap numérique


```

### TB-04-04

```markdown
#### TB-04-04 — Decision Pack hard cap FinOps avant pilote

| Champ | Valeur |
|---|---|
| **ID** | `TB-04-04` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-04 |
| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
| **Statut** | T0 EXECUTED LOCALLY — AWAITING CHATGPT VALIDATION — NOT DONE |
| **Dépendances** | TB-02-05 |
| **Gate Morris** | T0 exécuté localement (127) · validation ChatGPT pending · future PR readiness gate candidate |
| **Source** | doc 102 FPI-14-HARD-CAP=DEFER-BEFORE-PILOT · R-TECH-FINOPS-HARD-01 · 122/123/124/125/126/127 |
| **Réserves liées** | R-TECH-FINOPS-HARD-01 · R-TECH-TTL-01 |
| **Non-sélections liées** | hard stop fournisseur · TTL numériques · config provider · exécution T1–T7 · Money deferred |
| **Delivery** | NOT AUTHORIZED (LOT-D1) · bounded Delivery T0 **consumed** ≠ LOT-D1 |
| **Relation main** | T0 code local untracked · dépend de la preuve metering/soft cap (TB-02-05) sans bloquer TB-02-05 |
| **Préparation LOT-IP-0C** | decision preparation = **completed** · technical decisions = **applied** · T0 execution pack = **prepared** · T0 execution authorization = **consumed** · T0 implementation = **completed locally** · T0 QA evidence = **produced** · T0 ChatGPT validation = **pending** · T1 to T7 = **not authorized** · complete FinOps implementation = **not completed** · DONE = **no** |
| **Calibration provisoire** | 15 / 20 / 25 / 30 USD · baseline 1–2 users · **NOT CONFIGURED** |
| **Enforcement** | E1 · A15-CAL/PROJ/ONCE · C20-WARN · S30-SOFT · DG-NEW **SELECTED** · **NOT IMPLEMENTED** |
| **Technique** | CAP-C · BND-A · ENF-B · PG ledger/aggregates · etc. **SELECTED** (125) · T0 domain contracts **IMPLEMENTED** · T1–T7 **NOT IMPLEMENTED** |
| **Statut item** | T0 **completed locally** · ChatGPT validation **pending** · full FinOps **not completed** · DONE = **no** |

**Objectif :** Préparer le Decision Pack hard cap FinOps (FPI-14) sans fixer de seuil définitif ni configurer de limite fournisseur. Contrats de mesure/enforcement produits en 122 ; arbitrage enforcement futur distinct.

**Critères d’acceptation :**
  - Options de politique hard cap sont comparées sans valeur numérique inventée.
  - Lien explicite soft cap / metering / pilote est tracé.
  - La réserve R-TECH-FINOPS-HARD-01 reste OPEN jusqu’à décision Morris.

**Preuves attendues :**
  - Decision Pack FinOps hard cap candidat

**Hors périmètre :** seuil inventé, tarification


```

### LOT-IP-0C

```markdown
### LOT-IP-0C — Pre-Pilot FinOps Decision Preparation

| Champ | Valeur |
|---|---|
| **Items** | TB-04-04 |
| **Dépendance** | TB-02-05 |
| **Statut** | **EXECUTED — IMPLEMENTATION PREPARATION COMPLETE — FINOPS ENFORCEMENT DECISIONS APPLIED — FINOPS TECHNICAL IMPLEMENTATION DECISIONS APPLIED — T0 EXECUTION PACK PREPARED — T0 EXECUTED LOCALLY — T0 READY FOR CHATGPT VALIDATION — T1 TO T7 NOT AUTHORIZED — TB-04-04 NOT DONE — FUTURE T1 PREPARATION REQUIRES MORRIS GATE** |
| **Décision sélection** | `D-ASST-IP0C-LOT-SELECTION-01 = OPTION A` · record **121** |
| **Exécution** | record **122** · GO 22:05 CEST |
| **Enforcement applied** | record **123** · `D-ASST-IP0C-ENFORCEMENT-01=E1` · A15-CAL/PROJ/ONCE · C20-WARN · S30-SOFT · DG-NEW |
| **Technical Decision Pack** | record **124** · pré-arbitrage · **byte-identical** |
| **Technical decisions applied** | record **125** · CAP-C · BND-A · ENF-B · PG ledger/aggregates · etc. · **NOT IMPLEMENTED** (hors T0) |
| **T0 Execution Pack** | record **126** · GO 23:49 CEST · scope/files/symbols/tests **bounded** · **byte-identical** |
| **T0 Execution** | record **127** · GO 2026-08-06 00:04 CEST · 14 fichiers CREATE · tests/typecheck/lint/full suite **PASSED** |
| **Lots techniques** | T0 **EXECUTED LOCALLY** · T1–T7 **NOT AUTHORIZED** · **NOT STARTED** · graphe 33/56 **inchangé** |
| **TB-04-04** | decision preparation = **completed** · technical decisions = **applied** · T0 execution pack = **prepared** · T0 execution authorization = **consumed** · T0 implementation = **completed locally** · T0 QA evidence = **produced** · T0 ChatGPT validation = **pending** · T1 to T7 = **not authorized** · complete FinOps implementation = **not completed** · DONE = **no** |
| **Calibration** | 1–2 utilisateurs · 15 / 20 / 25 / 30 USD provisoire **préservée** · **RECALIBRATION REQUIRED** · **NOT CONFIGURED** |
| **Enforcement** | E1 **SELECTED** · NOT IMPLEMENTED · provider config **NOT PERFORMED** |
| **Note** | Requis avant pilote · ne bloque pas TB-02-05 · T0 local ≠ contrôle FinOps actif · TB-04-04 reste **NOT DONE** · Delivery T0 ≠ Delivery LOT-D1 |


```

### Verdict (§32)

```markdown
## 32. Verdict

**LOT-IP-0A DECISIONS APPLIED — LOT-IP-0B DECISIONS APPLIED —**
**PERSISTENCE A2 TECHNOLOGY SELECTION FULLY ARBITRATED —**
**FIVE TECHNOLOGY DECISIONS SELECTED —**
**POSTGRESQL SELECTED — NEON SELECTED — PG NODE-POSTGRES SELECTED —**
**NODE-PG-MIGRATE SELECTED — LD-A SELECTED —**
**LOT-IP-0C EXECUTED — FINOPS ENFORCEMENT DECISIONS APPLIED —**
**FINOPS TECHNICAL IMPLEMENTATION DECISIONS APPLIED —**
**T0 EXECUTION PACK PREPARATION EXECUTED —**
**FINOPS TECHNICAL LOT T0 DELIVERY AUTHORIZED —**
**FINOPS TECHNICAL LOT T0 EXECUTED —**
**T0 CONTRACTS AND PURE DOMAIN RULES IMPLEMENTED —**
**T0 TESTS PASSED — T0 TYPECHECK PASSED — T0 LINT PASSED —**
**T0 FULL REGRESSION PASSED — T0 LOCAL DELIVERY COMPLETE —**
**T0 READY FOR CHATGPT VALIDATION —**
**T1 TO T7 NOT AUTHORIZED —**
**E1 SOFT CONTROL WITH HUMAN GATE SELECTED —**
**USD 15 INFORMATIONAL ALERT SELECTED — USD 20 C20-WARN SELECTED —**
**USD 25 TARGET PRESERVED — USD 30 S30-SOFT SELECTED — DG-NEW SELECTED —**
**TECHNICAL ENFORCEMENT NOT IMPLEMENTED — PROVIDER CONFIGURATION NOT PERFORMED —**
**DOCUMENT 103 UPDATED — DOCUMENT 127 CREATED —**
**DOCUMENTS 104 TO 126 BYTE-IDENTICAL — DOCUMENT 128 ABSENT —**
**GRAPH 33/56 PRESERVED — PRIORITIES PRESERVED — NO ITEM DONE —**
**TB-04-04 NOT DONE — TB-02-05 PRESERVED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**BOUNDED DELIVERY T0 CONSUMED — LOT-D1 DELIVERY NOT-CONSUMED —**
**NO PROJECT COMMIT OR PUSH —**
**READY FOR CHATGPT VALIDATION AND MORRIS FINOPS TECHNICAL LOT T0 PR READINESS DECISION**


---


```

### Prochaine gate (§33)

```markdown
## 33. Prochaine gate candidate

```text
GO PR READINESS SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — REVIEW FINOPS TECHNICAL LOT T0
```

Statut : **candidate uniquement — non consommée**.

Cette gate future :
- vérifiera le diff T0 ;
- vérifiera les preuves Critical ;
- vérifiera l’absence de scope creep ;
- préparera éventuellement commit/push/PR sous gates distinctes ;
- n’autorisera pas T1 à T7 ;
- n’autorisera pas LOT-D1 ;
- ne marquera pas TB-04-04 DONE ;
- n’autorisera pas PostgreSQL/Neon runtime, provider wiring, enforcement actif, push, PR ou merge sans gates Morris distinctes.

**FINOPS TECHNICAL LOT T0 EXECUTED — T0 READY FOR CHATGPT VALIDATION — PR READINESS CANDIDATE — LOT-D1 DELIVERY NOT CONSUMED**

```

Document 103 final hash: `cf9989bf283f46b16600e578708f2fabc2f2ad4d6c12ced5f88515aa7a12136b` · lines: 2435

## Diff RAW utile (quatorze fichiers CREATE)

```diff
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/types.ts b/projects/sfia-studio/app/lib/oa/finops/domain/types.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/domain/types.ts
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
+  | "FINOPS_INVALID_SOURCE"
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
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/errors.ts b/projects/sfia-studio/app/lib/oa/finops/domain/errors.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/domain/errors.ts
+/**
+ * FinOps T0 — structured domain errors (no infrastructure dependency).
+ */
+
+import type { FinOpsDetailCode } from "./types";
+
+export type FinOpsStructuredError = {
+  readonly detailCode: FinOpsDetailCode;
+  readonly message: string;
+  readonly reason: string;
+  readonly timestamp?: string;
+};
+
+export function createFinOpsError(input: {
+  detailCode: FinOpsDetailCode;
+  reason: string;
+  timestamp?: string;
+}): FinOpsStructuredError {
+  return {
+    detailCode: input.detailCode,
+    message: `FinOps domain error: ${input.detailCode}`,
+    reason: input.reason,
+    ...(input.timestamp !== undefined ? { timestamp: input.timestamp } : {}),
+  };
+}
+
+export class FinOpsDomainError extends Error {
+  readonly structured: FinOpsStructuredError;
+
+  constructor(structured: FinOpsStructuredError) {
+    super(structured.message);
+    this.name = "FinOpsDomainError";
+    this.structured = structured;
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts
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
+/** ISO-8601 instant with Z or numeric offset (converted later via UTC ms). */
+const ISO_INSTANT_RE =
+  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/;
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
+  if (!ISO_INSTANT_RE.test(instantIso)) {
+    return {
+      detailCode: "FINOPS_INVALID_TIMESTAMP",
+      reason: "timestamp_not_iso_instant",
+    };
+  }
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
+  const violation = validateFinOpsPeriodShape(period);
+  if (violation) {
+    throw new FinOpsDomainError(
+      createFinOpsError({
+        detailCode: violation.detailCode,
+        reason: violation.reason,
+      }),
+    );
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/period.ts b/projects/sfia-studio/app/lib/oa/finops/domain/period.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/domain/period.ts
+/**
+ * FinOps T0 — UTC calendar-month period helpers (injected instant; no hidden wall-clock).
+ */
+
+import { requireValidFinOpsPeriod, requireValidIsoTimestamp } from "./invariants";
+import type { FinOpsPeriod } from "./types";
+
+/**
+ * Calendar month in UTC for the given instant.
+ * periodStart inclusive; periodEnd exclusive (= first instant of next UTC month).
+ */
+export function computeUtcMonthPeriod(instantIso: string): FinOpsPeriod {
+  const ms = requireValidIsoTimestamp(instantIso);
+  const d = new Date(ms);
+  const year = d.getUTCFullYear();
+  const month = d.getUTCMonth();
+  const periodStart = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0)).toISOString();
+  const periodEnd = new Date(
+    Date.UTC(year, month + 1, 1, 0, 0, 0, 0),
+  ).toISOString();
+  return {
+    periodStart,
+    periodEnd,
+    timezone: "UTC",
+  };
+}
+
+export function periodContainsInstant(
+  period: FinOpsPeriod,
+  instantIso: string,
+): boolean {
+  requireValidFinOpsPeriod(period);
+  const t = requireValidIsoTimestamp(instantIso);
+  const start = Date.parse(period.periodStart);
+  const end = Date.parse(period.periodEnd);
+  return start <= t && t < end;
+}
+
+/** Deterministic ordering by periodStart (UTC instant). */
+export function compareFinOpsPeriods(
+  a: FinOpsPeriod,
+  b: FinOpsPeriod,
+): -1 | 0 | 1 {
+  requireValidFinOpsPeriod(a);
+  requireValidFinOpsPeriod(b);
+  const aMs = Date.parse(a.periodStart);
+  const bMs = Date.parse(b.periodStart);
+  if (aMs < bMs) return -1;
+  if (aMs > bMs) return 1;
+  return 0;
+}
+
+/** Stable key YYYY-MM from UTC periodStart. */
+export function finOpsPeriodKey(period: FinOpsPeriod): string {
+  requireValidFinOpsPeriod(period);
+  const d = new Date(Date.parse(period.periodStart));
+  const y = d.getUTCFullYear();
+  const m = d.getUTCMonth() + 1;
+  return `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}`;
+}
+
+/**
+ * Late events attach to the UTC month of occurredAt (injected instant).
+ */
+export function assignInstantToPeriod(instantIso: string): FinOpsPeriod {
+  return computeUtcMonthPeriod(instantIso);
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/sourceOfTruth.ts b/projects/sfia-studio/app/lib/oa/finops/domain/sourceOfTruth.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/domain/sourceOfTruth.ts
+/**
+ * FinOps T0 — Source of Truth ranking and eligibility helpers.
+ */
+
+import { FINOPS_SOT_RANK, type FinOpsSourceOfTruth } from "./types";
+
+export function sourceOfTruthRank(source: FinOpsSourceOfTruth): number {
+  return FINOPS_SOT_RANK[source];
+}
+
+/** Negative if a is more authoritative than b (lower rank). */
+export function compareSourceOfTruth(
+  a: FinOpsSourceOfTruth,
+  b: FinOpsSourceOfTruth,
+): number {
+  return sourceOfTruthRank(a) - sourceOfTruthRank(b);
+}
+
+export function sourceMayBlock(source: FinOpsSourceOfTruth): boolean {
+  switch (source) {
+    case "BILLED":
+    case "PROVIDER_OBSERVED":
+      return true;
+    case "API_USAGE":
+    case "LOCAL_COUNT":
+    case "PARAMETRIC_ESTIMATE":
+    case "UNKNOWN":
+      return false;
+    default: {
+      const _exhaustive: never = source;
+      return _exhaustive;
+    }
+  }
+}
+
+/** All SoT levels remain observable / informational. */
+export function sourceMayInform(source: FinOpsSourceOfTruth): boolean {
+  switch (source) {
+    case "BILLED":
+    case "PROVIDER_OBSERVED":
+    case "API_USAGE":
+    case "LOCAL_COUNT":
+    case "PARAMETRIC_ESTIMATE":
+    case "UNKNOWN":
+      return true;
+    default: {
+      const _exhaustive: never = source;
+      return _exhaustive;
+    }
+  }
+}
+
+/**
+ * All sources may feed a future human-review path.
+ * T0 never triggers review.
+ */
+export function sourceMayRequestHumanReview(
+  source: FinOpsSourceOfTruth,
+): boolean {
+  switch (source) {
+    case "BILLED":
+    case "PROVIDER_OBSERVED":
+    case "API_USAGE":
+    case "LOCAL_COUNT":
+    case "PARAMETRIC_ESTIMATE":
+    case "UNKNOWN":
+      return true;
+    default: {
+      const _exhaustive: never = source;
+      return _exhaustive;
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/costEvidence.ts b/projects/sfia-studio/app/lib/oa/finops/domain/costEvidence.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/domain/costEvidence.ts
+/**
+ * FinOps T0 — cost evidence classification (no monetary values).
+ */
+
+import { createFinOpsError, FinOpsDomainError } from "./errors";
+import type { FinOpsCostEvidenceClass, FinOpsSourceOfTruth } from "./types";
+
+export function classifyCostEvidenceFromSource(
+  source: FinOpsSourceOfTruth,
+): FinOpsCostEvidenceClass {
+  switch (source) {
+    case "BILLED":
+      return "billed";
+    case "PROVIDER_OBSERVED":
+    case "API_USAGE":
+      return "observed";
+    case "LOCAL_COUNT":
+    case "PARAMETRIC_ESTIMATE":
+      return "estimated";
+    case "UNKNOWN":
+      return "unknown";
+    default: {
+      const _exhaustive: never = source;
+      return _exhaustive;
+    }
+  }
+}
+
+/** Runtime guard that evidence class literals remain distinct. */
+export function assertDistinctEvidenceClasses(): true {
+  const classes = ["estimated", "observed", "billed", "unknown"] as const;
+  if (new Set<string>(classes).size !== classes.length) {
+    throw new FinOpsDomainError(
+      createFinOpsError({
+        detailCode: "FINOPS_EVIDENCE_COLLAPSE",
+        reason: "evidence_classes_must_remain_distinct",
+      }),
+    );
+  }
+  return true;
+}
+
+export function isUnknownEvidence(
+  evidenceClass: FinOpsCostEvidenceClass,
+): boolean {
+  return evidenceClass === "unknown";
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/blockingEligibility.ts b/projects/sfia-studio/app/lib/oa/finops/domain/blockingEligibility.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/domain/blockingEligibility.ts
+/**
+ * FinOps T0 — blocking eligibility from Source of Truth (never from amount).
+ */
+
+import { classifyCostEvidenceFromSource } from "./costEvidence";
+import type {
+  FinOpsBlockingDecision,
+  FinOpsSourceOfTruth,
+} from "./types";
+
+/**
+ * Estimation never blocks — invariant exported for explicit assertion.
+ * Blocking eligibility is decided by SoT, not by evidence class alone.
+ */
+export const ESTIMATION_NEVER_BLOCKS = true as const;
+
+export function evaluateBlockingEligibility(
+  source: FinOpsSourceOfTruth,
+): FinOpsBlockingDecision {
+  const confidenceClass = classifyCostEvidenceFromSource(source);
+  switch (source) {
+    case "BILLED":
+      return {
+        eligible: true,
+        reason: "SOURCE_MAY_BLOCK",
+        source,
+        confidenceClass,
+      };
+    case "PROVIDER_OBSERVED":
+      return {
+        eligible: true,
+        reason: "SOURCE_MAY_BLOCK",
+        source,
+        confidenceClass,
+      };
+    case "API_USAGE":
+      return {
+        eligible: false,
+        reason: "API_USAGE_NEVER_BLOCKS",
+        source,
+        confidenceClass,
+      };
+    case "LOCAL_COUNT":
+      return {
+        eligible: false,
+        reason: "LOCAL_COUNT_NEVER_BLOCKS",
+        source,
+        confidenceClass,
+      };
+    case "PARAMETRIC_ESTIMATE":
+      return {
+        eligible: false,
+        reason: "ESTIMATE_NEVER_BLOCKS",
+        source,
+        confidenceClass,
+      };
+    case "UNKNOWN":
+      return {
+        eligible: false,
+        reason: "UNKNOWN_NEVER_BLOCKS",
+        source,
+        confidenceClass,
+      };
+    default: {
+      const _exhaustive: never = source;
+      return _exhaustive;
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/index.ts b/projects/sfia-studio/app/lib/oa/finops/index.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/index.ts
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
+  requireValidFinOpsPeriod,
+  requireValidIsoTimestamp,
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
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/finops/period.test.ts
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
+  it("rejects invalid timestamps", () => {
+    expect(() => computeUtcMonthPeriod("not-a-timestamp")).toThrow(
+      FinOpsDomainError,
+    );
+    expect(() => computeUtcMonthPeriod("2026-01-01")).toThrow(
+      FinOpsDomainError,
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/sourceOfTruth.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/sourceOfTruth.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/finops/sourceOfTruth.test.ts
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  FINOPS_SOT_RANK,
+  FINOPS_SOURCES,
+  compareSourceOfTruth,
+  sourceMayBlock,
+  sourceMayInform,
+  sourceMayRequestHumanReview,
+  sourceOfTruthRank,
+  type FinOpsSourceOfTruth,
+} from "@/lib/oa/finops";
+
+describe("FinOps T0 source of truth", () => {
+  it("exposes exactly six closed SoT values", () => {
+    expect([...FINOPS_SOURCES]).toEqual([
+      "BILLED",
+      "PROVIDER_OBSERVED",
+      "API_USAGE",
+      "LOCAL_COUNT",
+      "PARAMETRIC_ESTIMATE",
+      "UNKNOWN",
+    ]);
+  });
+
+  it("ranks SoT from 1 (most authoritative) to 6", () => {
+    expect(FINOPS_SOT_RANK.BILLED).toBe(1);
+    expect(FINOPS_SOT_RANK.PROVIDER_OBSERVED).toBe(2);
+    expect(FINOPS_SOT_RANK.API_USAGE).toBe(3);
+    expect(FINOPS_SOT_RANK.LOCAL_COUNT).toBe(4);
+    expect(FINOPS_SOT_RANK.PARAMETRIC_ESTIMATE).toBe(5);
+    expect(FINOPS_SOT_RANK.UNKNOWN).toBe(6);
+    for (const source of FINOPS_SOURCES) {
+      expect(sourceOfTruthRank(source)).toBe(FINOPS_SOT_RANK[source]);
+    }
+  });
+
+  it("orders the full hierarchy by rank", () => {
+    const ordered = [...FINOPS_SOURCES].sort(compareSourceOfTruth);
+    expect(ordered).toEqual([...FINOPS_SOURCES]);
+    expect(compareSourceOfTruth("BILLED", "UNKNOWN")).toBeLessThan(0);
+    expect(compareSourceOfTruth("UNKNOWN", "BILLED")).toBeGreaterThan(0);
+    expect(compareSourceOfTruth("API_USAGE", "API_USAGE")).toBe(0);
+  });
+
+  it("marks only BILLED and PROVIDER_OBSERVED as blocking-eligible", () => {
+    const blocking: FinOpsSourceOfTruth[] = [];
+    const nonBlocking: FinOpsSourceOfTruth[] = [];
+    for (const source of FINOPS_SOURCES) {
+      if (sourceMayBlock(source)) blocking.push(source);
+      else nonBlocking.push(source);
+    }
+    expect(blocking).toEqual(["BILLED", "PROVIDER_OBSERVED"]);
+    expect(nonBlocking).toEqual([
+      "API_USAGE",
+      "LOCAL_COUNT",
+      "PARAMETRIC_ESTIMATE",
+      "UNKNOWN",
+    ]);
+  });
+
+  it("keeps all sources informational and review-capable without triggering review", () => {
+    for (const source of FINOPS_SOURCES) {
+      expect(sourceMayInform(source)).toBe(true);
+      expect(sourceMayRequestHumanReview(source)).toBe(true);
+    }
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/costEvidence.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/costEvidence.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/finops/costEvidence.test.ts
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  FINOPS_SOURCES,
+  assertDistinctEvidenceClasses,
+  assertUnknownNotNumericZero,
+  classifyCostEvidenceFromSource,
+  evaluateBlockingEligibility,
+  isUnknownEvidence,
+  type FinOpsSourceOfTruth,
+} from "@/lib/oa/finops";
+
+describe("FinOps T0 cost evidence (T-TECH-05 / T-TECH-06)", () => {
+  it("maps every SoT to the closed evidence class", () => {
+    const expected: Record<FinOpsSourceOfTruth, string> = {
+      BILLED: "billed",
+      PROVIDER_OBSERVED: "observed",
+      API_USAGE: "observed",
+      LOCAL_COUNT: "estimated",
+      PARAMETRIC_ESTIMATE: "estimated",
+      UNKNOWN: "unknown",
+    };
+    for (const source of FINOPS_SOURCES) {
+      expect(classifyCostEvidenceFromSource(source)).toBe(expected[source]);
+    }
+  });
+
+  it("keeps estimated, observed, billed, and unknown distinct", () => {
+    expect(assertDistinctEvidenceClasses()).toBe(true);
+    const classes = new Set(
+      FINOPS_SOURCES.map((s) => classifyCostEvidenceFromSource(s)),
+    );
+    expect(classes.has("estimated")).toBe(true);
+    expect(classes.has("observed")).toBe(true);
+    expect(classes.has("billed")).toBe(true);
+    expect(classes.has("unknown")).toBe(true);
+    expect(
+      classifyCostEvidenceFromSource("LOCAL_COUNT"),
+    ).not.toBe(classifyCostEvidenceFromSource("PROVIDER_OBSERVED"));
+    expect(
+      classifyCostEvidenceFromSource("PROVIDER_OBSERVED"),
+    ).not.toBe(classifyCostEvidenceFromSource("BILLED"));
+  });
+
+  it("classifies API_USAGE as observed without making it blocking (T-TECH-05)", () => {
+    expect(classifyCostEvidenceFromSource("API_USAGE")).toBe("observed");
+    expect(evaluateBlockingEligibility("API_USAGE").eligible).toBe(false);
+    // Model/tarif unknown stays unknown — not silently priced.
+    expect(classifyCostEvidenceFromSource("UNKNOWN")).toBe("unknown");
+    expect(isUnknownEvidence("unknown")).toBe(true);
+  });
+
+  it("maps LOCAL_COUNT and PARAMETRIC_ESTIMATE to estimated", () => {
+    expect(classifyCostEvidenceFromSource("LOCAL_COUNT")).toBe("estimated");
+    expect(classifyCostEvidenceFromSource("PARAMETRIC_ESTIMATE")).toBe(
+      "estimated",
+    );
+  });
+
+  it("keeps unknown distinct from zero with no zero fallback (T-TECH-06)", () => {
+    expect(assertUnknownNotNumericZero("unknown", 0)).toEqual({
+      detailCode: "FINOPS_UNKNOWN_AS_ZERO",
+      reason: "unknown_must_not_equal_numeric_zero",
+    });
+    expect(assertUnknownNotNumericZero("unknown", BigInt(0))).not.toBeNull();
+    expect(assertUnknownNotNumericZero("unknown", "0")).not.toBeNull();
+    expect(assertUnknownNotNumericZero("unknown", null)).toBeNull();
+    expect(assertUnknownNotNumericZero("billed", 0)).toBeNull();
+    expect(isUnknownEvidence("unknown")).toBe(true);
+    expect(isUnknownEvidence("estimated")).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/blockingEligibility.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/blockingEligibility.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/finops/blockingEligibility.test.ts
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  ESTIMATION_NEVER_BLOCKS,
+  evaluateBlockingEligibility,
+  type FinOpsSourceOfTruth,
+} from "@/lib/oa/finops";
+
+describe("FinOps T0 blocking eligibility (T-TECH-12)", () => {
+  const matrix: Array<{
+    source: FinOpsSourceOfTruth;
+    eligible: boolean;
+    reason: string;
+    confidenceClass: string;
+  }> = [
+    {
+      source: "BILLED",
+      eligible: true,
+      reason: "SOURCE_MAY_BLOCK",
+      confidenceClass: "billed",
+    },
+    {
+      source: "PROVIDER_OBSERVED",
+      eligible: true,
+      reason: "SOURCE_MAY_BLOCK",
+      confidenceClass: "observed",
+    },
+    {
+      source: "API_USAGE",
+      eligible: false,
+      reason: "API_USAGE_NEVER_BLOCKS",
+      confidenceClass: "observed",
+    },
+    {
+      source: "LOCAL_COUNT",
+      eligible: false,
+      reason: "LOCAL_COUNT_NEVER_BLOCKS",
+      confidenceClass: "estimated",
+    },
+    {
+      source: "PARAMETRIC_ESTIMATE",
+      eligible: false,
+      reason: "ESTIMATE_NEVER_BLOCKS",
+      confidenceClass: "estimated",
+    },
+    {
+      source: "UNKNOWN",
+      eligible: false,
+      reason: "UNKNOWN_NEVER_BLOCKS",
+      confidenceClass: "unknown",
+    },
+  ];
+
+  it.each(matrix)(
+    "applies matrix row for $source",
+    ({ source, eligible, reason, confidenceClass }) => {
+      const decision = evaluateBlockingEligibility(source);
+      expect(decision).toEqual({
+        eligible,
+        reason,
+        source,
+        confidenceClass,
+      });
+    },
+  );
+
+  it("exports ESTIMATION_NEVER_BLOCKS and never blocks estimates", () => {
+    expect(ESTIMATION_NEVER_BLOCKS).toBe(true);
+    expect(evaluateBlockingEligibility("PARAMETRIC_ESTIMATE").eligible).toBe(
+      false,
+    );
+    expect(evaluateBlockingEligibility("LOCAL_COUNT").eligible).toBe(false);
+  });
+
+  it("allows official observed / billed eligibility without reading an amount", () => {
+    expect(evaluateBlockingEligibility("BILLED").eligible).toBe(true);
+    expect(evaluateBlockingEligibility("PROVIDER_OBSERVED").eligible).toBe(
+      true,
+    );
+    // Decision shape has no monetary field.
+    expect(
+      Object.keys(evaluateBlockingEligibility("BILLED")).sort(),
+    ).toEqual(["confidenceClass", "eligible", "reason", "source"]);
+  });
+
+  it("is deterministic", () => {
+    expect(evaluateBlockingEligibility("API_USAGE")).toEqual(
+      evaluateBlockingEligibility("API_USAGE"),
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  assertUnknownNotNumericZero,
+  computeUtcMonthPeriod,
+  validateFinOpsPeriodShape,
+  validateIsoTimestamp,
+  type FinOpsPeriod,
+} from "@/lib/oa/finops";
+
+describe("FinOps T0 domain invariants", () => {
+  it("accepts valid ISO instants with Z or offset", () => {
+    expect(validateIsoTimestamp("2026-01-01T00:00:00.000Z")).toBeNull();
+    expect(validateIsoTimestamp("2026-06-15T12:00:00.000+02:00")).toBeNull();
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
+  it("never lets unknown become numeric zero", () => {
+    expect(assertUnknownNotNumericZero("unknown", 0)?.detailCode).toBe(
+      "FINOPS_UNKNOWN_AS_ZERO",
+    );
+    expect(assertUnknownNotNumericZero("unknown", undefined)).toBeNull();
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
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts
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
+function importsOf(file: string): string[] {
+  return fs
+    .readFileSync(file, "utf8")
+    .split("\n")
+    .map((l) => l.trim())
+    .filter((l) => l.startsWith("import ") || l.startsWith("export "));
+}
+
+describe("FinOps T0 import boundaries", () => {
+  it("domain stays pure — no openai/platform/ops1/pg/next/react/fs/net/env", () => {
+    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
+    expect(files.length).toBeGreaterThan(0);
+    const hits: string[] = [];
+    const forbidden =
+      /from\s+["'](?:openai|pg|sqlite|node:fs|node:net|node:crypto|next|react|@\/lib\/(?:ops1|platform|d1|execution-run|oa\/execution-run)|fs|path|child_process)|process\.env/;
+    for (const file of files) {
+      const src = fs.readFileSync(file, "utf8");
+      if (/\bDate\.now\b/.test(src)) {
+        hits.push(`${file}: Date.now`);
+      }
+      if (/\bprocess\.env\b/.test(src)) {
+        hits.push(`${file}: process.env`);
+      }
+      for (const line of importsOf(file)) {
+        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
+        if (
+          /execution-run|platform\/ai|ops1|openai|ProviderUsage/.test(line)
+        ) {
+          hits.push(`${file}: ${line}`);
+        }
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+
+  it("module root only uses relative domain imports", () => {
+    const files = listTsFiles(MODULE_ROOT);
+    expect(files.length).toBeGreaterThan(0);
+    const hits: string[] = [];
+    for (const file of files) {
+      for (const line of importsOf(file)) {
+        if (
+          /from\s+["'](?!\.)/.test(line) &&
+          !/from\s+["'](?:vitest)/.test(line)
+        ) {
+          // Absolute / package imports are forbidden in FinOps T0 domain tree.
+          hits.push(`${path.relative(APP_ROOT, file)}: ${line}`);
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

## Scope final

14 CREATE · 0 MODIFY produit · 0 DELETE · 103 MODIFY · 127 CREATE · 104–126 byte-identical · 128 absent.

## Contrôles

- aucun fichier existant produit modifié : **yes**
- documents 104–126 byte-identical : **yes**
- document 128 absent : **yes**
- décisions FinOps / techniques préservées : **yes**
- T1–T7 non autorisés : **yes**
- TB-04-04 NOT DONE : **yes**
- TB-02-05 préservé : **yes**
- graphe 33/56 · priorités préservées · aucun backlog item DONE : **yes**
- Delivery T0 consommée · LOT-D1 Delivery non consommée : **yes**
- risques / dette résiduels : voir 127 §§53–54
- anti-stub : pas de TODO/FIXME/ts-ignore/eslint-disable/horloge globale/process.env/Money/runtime enforcement actifs dans le domaine

## Local Git Truth finale

| Champ | Valeur |
|---|---|
| Branche | `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0` |
| HEAD | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| origin/main | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| merge-base | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| ahead/behind | `0	0` |

```text
?? projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
?? projects/sfia-studio/app/__tests__/oa/finops/
?? projects/sfia-studio/app/lib/oa/finops/
```

## Prochaine gate candidate

```text
GO PR READINESS SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — REVIEW FINOPS TECHNICAL LOT T0
```

Candidate uniquement — non consommée.

## Verdict

**FINOPS TECHNICAL LOT T0 EXECUTED —**
**BOUNDED DELIVERY T0 CONSUMED —**
**T0 CONTRACTS AND PURE DOMAIN RULES IMPLEMENTED —**
**14 AUTHORIZED FILES CREATED —**
**0 EXISTING PRODUCT FILE MODIFIED —**
**0 FILE OUTSIDE SCOPE MODIFIED —**
**FINOPS PERIOD IMPLEMENTED —**
**CALENDAR MONTH UTC IMPLEMENTED —**
**PERIOD START INCLUSIVE —**
**PERIOD END EXCLUSIVE —**
**LATE EVENTS ASSIGNED BY OCCURRED-AT —**
**SOURCE-OF-TRUTH LEVELS 1 TO 6 IMPLEMENTED —**
**SOURCE RANKING IMPLEMENTED —**
**COST EVIDENCE CLASSIFICATION IMPLEMENTED —**
**BILLED, OBSERVED, ESTIMATED AND UNKNOWN REMAIN DISTINCT —**
**UNKNOWN REMAINS DISTINCT FROM ZERO —**
**BLOCKING ELIGIBILITY MATRIX IMPLEMENTED —**
**BILLED MAY BLOCK —**
**OFFICIAL PROVIDER-OBSERVED MAY BLOCK —**
**API USAGE DOES NOT BLOCK —**
**LOCAL COUNT DOES NOT BLOCK —**
**PARAMETRIC ESTIMATE DOES NOT BLOCK —**
**UNKNOWN DOES NOT BLOCK —**
**ESTIMATION NEVER BLOCKS —**
**MONEY REPRESENTATION REMAINS DEFERRED —**
**PURE DOMAIN ERRORS AND INVARIANTS IMPLEMENTED —**
**NO SIDE EFFECTS —**
**NO PROVIDER DEPENDENCY —**
**NO PERSISTENCE DEPENDENCY —**
**NO RUNTIME WIRING —**
**IMPORT BOUNDARIES VERIFIED —**
**TARGETED T0 TESTS PASSED —**
**TYPECHECK PASSED —**
**LINT PASSED —**
**FULL TEST SUITE PASSED —**
**PACKAGE AND LOCKFILE UNCHANGED —**
**DOCUMENT 103 UPDATED —**
**DOCUMENT 127 T0 EXECUTION CREATED —**
**DOCUMENTS 104 TO 126 BYTE-IDENTICAL —**
**DOCUMENT 128 ABSENT —**
**FINOPS ENFORCEMENT DECISIONS PRESERVED —**
**FINOPS TECHNICAL DECISIONS PRESERVED —**
**PROVISIONAL CALIBRATION PRESERVED —**
**RECALIBRATION REQUIRED —**
**T0 LOCAL IMPLEMENTATION COMPLETE —**
**T0 READY FOR CHATGPT VALIDATION —**
**T1 TO T7 NOT AUTHORIZED —**
**GRAPH 33/56 PRESERVED —**
**PRIORITIES PRESERVED —**
**NO BACKLOG ITEM DONE —**
**TB-04-04 NOT DONE —**
**TB-02-05 PRESERVED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**LOT-D1 DELIVERY NOT-CONSUMED —**
**NO PROJECT COMMIT, PUSH, PR OR MERGE —**
**HANDOFF UPDATED AND REMOTE VERIFIED —** *(après publication)*
**READY FOR CHATGPT VALIDATION AND MORRIS FINOPS TECHNICAL LOT T0 PR READINESS DECISION**
