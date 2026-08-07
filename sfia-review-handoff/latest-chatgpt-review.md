# ChatGPT Review Pack — FinOps Technical Lot T2 (Correction — A1 Multi-currency / Multi-instance)

## Meta

- date_cest: 2026-08-07 13:45:16 CEST (+0200)
- date_utc: 2026-08-07 11:45:16 UTC
- cycle: 8 — Delivery / implémentation
- mode: T2 Delivery Correction — A1 Multi-currency + Multi-instance Safety
- profil: Critical
- GO Morris: `ok go` (correction bornée only)
- GO original Delivery: GO Delivery T2 (+ parallel T6-foundation; this pack is T2 only)
- Incoming ChatGPT verdict: **NOT READY**
- Incoming handoff tip: `49884691692e058622c466e24ad4675518bc5ca3`
- Incoming handoff blob: `5ff4d559db080b045d6f857bd06899854ebe17c6`
- Branch: `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t2-aggregation-reconciliation`
- HEAD / origin/main: `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c`
- Project commit/push/PR: NO

## Findings

### BLOCKER — multi-currency rebuild
Per-currency recompute + DELETE on project_id+period_start wiped sibling currencies.

### RESERVE — multi-instance serialization
No demonstrated exclusive serialization for concurrent project/period rebuilds.

## Root cause

`reconcileProjectPeriod` looped currencies and called `recomputeAggregates(..., currency)`.
`replaceProjectPeriodAggregates` deleted ALL rows for project+period then inserted only the filtered set.

## Correction

1. Removed `RecomputeAggregatesInput.currency` (no public partial rebuild).
2. One full project/period rebuild after recon batch (all currencies).
3. Result contract: `aggregates[]` (not singular ambiguous `aggregate`).
4. `withExclusiveProjectPeriodRebuild`: one PoolClient + BEGIN + `pg_advisory_xact_lock(hashtext('finops-a1:'||projectId), hashtext(periodStart))` covering read cost events → derive → replace → COMMIT/ROLLBACK.
5. Waiters block on their own txn lock acquisition; holder uses same connection for entire critical section — no pool starvation from session locks.

## Conceptual before → after

### Before (unsafe)
```
for currency in touched:
  events = list(project, period, currency)  # partial
  DELETE aggregates WHERE project+period    # ALL currencies
  INSERT filtered currency only             # wipes others
```

### After (safe)
```
BEGIN; advisory_xact_lock(project, period);
events = list ALL cost events for project+period;
derive ALL currency aggregates;
DELETE aggregates WHERE project+period;
INSERT full multi-currency projection;
COMMIT; -- lock released with txn
```

## Validation results (post-correction — full re-run)

| Commande | Résultat |
|----------|----------|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `npm test` | PASS — 144 files / 1439 tests (≥ 1435) |
| `npm run migrate:up` | PASS |
| `npm run test:db` | PASS — 20 tests (≥ 17) |
| `git diff --check` | PASS |

### typecheck

```text

> sfia-studio@0.1.0 typecheck
> tsc --noEmit
```

### lint

```text

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
```

### build (tail)

```text
   ▲ Next.js 15.5.20

   Creating an optimized production build ...
 ✓ Compiled successfully in 1206ms
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/10) ...
   Generating static pages (2/10)
   Generating static pages (4/10)
   Generating static pages (7/10)
 ✓ Generating static pages (10/10)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      127 B         103 kB
├ ○ /_not-found                            127 B         103 kB
├ ○ /cycle-actif                         3.82 kB         119 kB
├ ○ /decision                            5.53 kB         121 kB
├ ƒ /nouvelle-demande                    10.2 kB         116 kB
├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
├ ƒ /projects/[id]                       2.65 kB         108 kB
├ ○ /projects/new                        2.62 kB         108 kB
├ ƒ /studio/projects/[id]                2.14 kB         112 kB
├ ○ /studio/projects/new                 4.07 kB         114 kB
├ ○ /synthese                            4.84 kB         120 kB
└ ƒ /workspace                             571 B         106 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.96 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

### npm test (tail)

```text
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-07T11:43:51.389Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-07T11:43:51.390Z","status":"failed","durationMs":1,"errorCode":"CONFLICT"}

 ✓ __tests__/d1/project-foundation.test.ts (7 tests) 20ms
 ✓ __tests__/status-pill.test.tsx (1 test) 14ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 26ms
 ✓ __tests__/fixtures.test.ts (2 tests) 3ms
 ✓ __tests__/oa/cycle/qualifyCycleWithCkc.test.ts (13 tests) 8ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 1ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 2ms
 ✓ __tests__/oa/cycle/ckcQualificationResult.test.ts (2 tests) 2ms
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 3019ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1666ms
   ✓ V2-A2 Create Project UI > calls only the runtime action with the exact DTO and parsed constraints  336ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 3132ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  629ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  694ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  467ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  322ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  315ms

 Test Files  144 passed (144)
      Tests  1439 passed (1439)
   Start at  13:43:43
   Duration  9.16s (transform 3.91s, setup 5.39s, collect 15.48s, tests 23.04s, environment 7.22s, prepare 6.01s)
```

### test:db

```text

> sfia-studio@0.1.0 test:db
> vitest run __tests__/oa/finops/postgres


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack/projects/sfia-studio/app

 ✓ __tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts (3 tests) 49ms
 ✓ __tests__/oa/finops/postgres/t1.ledger.integration.test.ts (10 tests) 60ms
 ✓ __tests__/oa/finops/postgres/t2.aggregate.integration.test.ts (7 tests) 69ms

 Test Files  3 passed (3)
      Tests  20 passed (20)
   Start at  13:43:53
   Duration  309ms (transform 115ms, setup 75ms, collect 181ms, tests 178ms, environment 0ms, prepare 98ms)
```

## Documents 138–141 (byte-identical)

```
138 54964202c785df64011c351001b8db60b4d651b5dc9c075fbcedefbae1f7c87a
139 0aaf10541776bc64671d02e53b7df76ee01bb7c88e56cdf116d9268e719a615f
140 e69cfedcdfdfd4bf3b94c35b28ac68fc4ca5dfbd5f5b6df52dcd5d11050aeb4b
141 96c16ce9de9020596c74908d7976297295cb38ebc7b79e0d333d02aad78806a4
```

## Correction file hashes (SHA-256)

- `projects/sfia-studio/app/lib/oa/finops/application/recomputeAggregates.ts` → `1dab9e5003c7ea77902ad0f4ef373c2cb5057119878be52b7bdbf2a1b6b35283`
- `projects/sfia-studio/app/lib/oa/finops/application/reconcileProjectPeriod.ts` → `449519a60f69782f5090e939f15211666e400752607b5934d7f546b16f02ad60`
- `projects/sfia-studio/app/lib/oa/finops/application/types.aggregate.ts` → `dd7b06c4d0bce2cf4093bc9f76af5693ea38a485031bda287610dc509a31d221`
- `projects/sfia-studio/app/lib/oa/finops/ports/finopsAggregatePort.ts` → `1de6c7ff64269c7a8053dbedcce48ac56d60e0fd752b27a3474e9929dc86bd91`
- `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore.ts` → `ff73926ad2042052db182047c96e4a977413cb73f4b1bcaaa153a048f2fa8cd9`
- `projects/sfia-studio/app/lib/oa/finops/infrastructure/memory/memoryFinOpsT2.ts` → `aebacd862548e71410f67bf3fdd6665a7924b44a83094beae1fe52809b3674e0`
- `projects/sfia-studio/app/__tests__/oa/finops/t2.aggregate.unit.test.ts` → `88c998321de0de67b9a8cc5e483176a9d8173b14b09ae3ab73d45a862022b31a`
- `projects/sfia-studio/app/__tests__/oa/finops/t2.reconciliation.unit.test.ts` → `3bf9bbf0d8691e2c21dbcf80c9f7762223215279428ed9680c457a172e91257a`
- `projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.aggregate.integration.test.ts` → `9b4bd896c3e7e4fb5e75cde141c82f29961ca2efa738ec6f77e2210e6dde2e73`
- `projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts` → `bf539e3a335c479b88559ebec2dbfba7d6df64cf4879661e7ca61a698a207ff4`
- `projects/sfia-studio/142-assistant-sfia-native-openai-finops-technical-lot-t2-execution.md` → `c9c847e4e018caad3d0b69f6ff86053b60ae91a67b49109be39ece2218141b6e`

## CREATED / CURRENT T2 files (complete contents — untracked Delivery)

### `projects/sfia-studio/app/lib/oa/finops/domain/money.ts`

```ts
/**
 * FinOps T2 — Money (M2): exact decimal via BigInt minor units + currency.
 * PostgreSQL contract: numeric(20,8). No authoritative JS Number/float math.
 *
 * HALF_EVEN (D-T2-ROUNDING-01) applies once at rate × usage → Money scale 8.
 * SUM of already scale-8 amounts does not re-round.
 */

export const FINOPS_MONEY_PRECISION = 20 as const;
export const FINOPS_MONEY_SCALE = 8 as const;
export const FINOPS_MONEY_SCALE_FACTOR = BigInt(100000000); // 10^8

function pow10(exp: number): bigint {
  let result = BigInt(1);
  const ten = BigInt(10);
  for (let i = 0; i < exp; i += 1) {
    result = result * ten;
  }
  return result;
}

/** Absolute max |amountMinor| for numeric(20,8): 12 integer digits → 10^12 − 10^-8. */
export const FINOPS_MONEY_MAX_ABS_MINOR =
  pow10(FINOPS_MONEY_PRECISION - FINOPS_MONEY_SCALE) * FINOPS_MONEY_SCALE_FACTOR -
  BigInt(1);

export type FinOpsMoney = {
  /** Signed minor units at scale 8 (1 = 10^-8 currency unit). */
  readonly amountMinor: bigint;
  readonly currency: string;
};

export type FinOpsMoneyErrorCode =
  | "FINOPS_MONEY_INVALID_CURRENCY"
  | "FINOPS_MONEY_INVALID_AMOUNT"
  | "FINOPS_MONEY_OVERFLOW"
  | "FINOPS_MONEY_CURRENCY_MISMATCH"
  | "FINOPS_MONEY_INVALID_QUANTUM"
  | "FINOPS_MONEY_INVALID_USAGE";

export class FinOpsMoneyError extends Error {
  readonly code: FinOpsMoneyErrorCode;
  constructor(code: FinOpsMoneyErrorCode, message: string) {
    super(message);
    this.name = "FinOpsMoneyError";
    this.code = code;
  }
}

function absBigInt(n: bigint): bigint {
  return n < BigInt(0) ? -n : n;
}

/**
 * Integer division with IEEE-style round half to even on the quotient.
 * Sign is applied after rounding the absolute magnitude (symmetric HALF_EVEN).
 */
export function divideHalfEven(numerator: bigint, denominator: bigint): bigint {
  if (denominator === BigInt(0)) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_INVALID_QUANTUM",
      "Division by zero in Money HALF_EVEN",
    );
  }
  const negative =
    (numerator < BigInt(0) && denominator > BigInt(0)) ||
    (numerator > BigInt(0) && denominator < BigInt(0));
  const a = absBigInt(numerator);
  const b = absBigInt(denominator);
  const q = a / b;
  const r = a % b;
  if (r === BigInt(0)) {
    return negative ? -q : q;
  }
  const twiceR = r * BigInt(2);
  let rounded: bigint;
  if (twiceR < b) {
    rounded = q;
  } else if (twiceR > b) {
    rounded = q + BigInt(1);
  } else {
    // Exactly halfway: choose even quotient.
    rounded = q % BigInt(2) === BigInt(0) ? q : q + BigInt(1);
  }
  return negative ? -rounded : rounded;
}

export function normalizeCurrency(currency: string): string {
  const c = currency.trim().toUpperCase();
  if (!/^[A-Z]{3}$/.test(c)) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_INVALID_CURRENCY",
      "Currency must be a 3-letter code",
    );
  }
  return c;
}

export function assertMoneyInRange(amountMinor: bigint): void {
  if (absBigInt(amountMinor) > FINOPS_MONEY_MAX_ABS_MINOR) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_OVERFLOW",
      "Money amount exceeds numeric(20,8) range",
    );
  }
}

export function moneyFromMinor(
  amountMinor: bigint,
  currency: string,
): FinOpsMoney {
  assertMoneyInRange(amountMinor);
  return { amountMinor, currency: normalizeCurrency(currency) };
}

/**
 * Parse a canonical decimal string into Money (exact; no Number/float).
 * Accepts optional sign, integer and fractional parts; fractional digits ≤ 8
 * are scaled exactly (trailing zeros optional). More than 8 fractional digits
 * are rejected (quantize via rate×usage HALF_EVEN, not parse).
 */
export function parseMoneyString(
  amount: string,
  currency: string,
): FinOpsMoney {
  const trimmed = amount.trim();
  if (!/^[+-]?\d+(\.\d+)?$/.test(trimmed)) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_INVALID_AMOUNT",
      "Money amount string is not a valid decimal",
    );
  }
  const negative = trimmed.startsWith("-");
  const unsigned = trimmed.replace(/^[+-]/, "");
  const [intPartRaw, fracRaw = ""] = unsigned.split(".");
  if (fracRaw.length > FINOPS_MONEY_SCALE) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_INVALID_AMOUNT",
      "Money amount has more than 8 fractional digits",
    );
  }
  const intPart = intPartRaw === "" ? "0" : intPartRaw;
  const fracPadded = fracRaw.padEnd(FINOPS_MONEY_SCALE, "0");
  // Digits only — never Number/parseFloat/parseInt on the monetary value.
  const minorAbs = BigInt(intPart) * FINOPS_MONEY_SCALE_FACTOR + BigInt(fracPadded);
  const amountMinor = negative ? -minorAbs : minorAbs;
  return moneyFromMinor(amountMinor, currency);
}

/** Canonical fixed-scale decimal string (always 8 fractional digits). */
export function formatMoneyString(money: FinOpsMoney): string {
  assertMoneyInRange(money.amountMinor);
  const negative = money.amountMinor < BigInt(0);
  const abs = absBigInt(money.amountMinor);
  const intPart = abs / FINOPS_MONEY_SCALE_FACTOR;
  const frac = abs % FINOPS_MONEY_SCALE_FACTOR;
  const fracStr = frac.toString().padStart(FINOPS_MONEY_SCALE, "0");
  return `${negative ? "-" : ""}${intPart.toString()}.${fracStr}`;
}

export function addMoney(a: FinOpsMoney, b: FinOpsMoney): FinOpsMoney {
  if (a.currency !== b.currency) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_CURRENCY_MISMATCH",
      "Cannot add Money with different currencies",
    );
  }
  return moneyFromMinor(a.amountMinor + b.amountMinor, a.currency);
}

/** Exact SUM of already scale-8 amounts — no additional rounding. */
export function sumMoney(
  currency: string,
  amounts: ReadonlyArray<FinOpsMoney>,
): FinOpsMoney {
  const c = normalizeCurrency(currency);
  let total = BigInt(0);
  for (const m of amounts) {
    if (m.currency !== c) {
      throw new FinOpsMoneyError(
        "FINOPS_MONEY_CURRENCY_MISMATCH",
        "Cannot sum Money with different currencies",
      );
    }
    total += m.amountMinor;
  }
  return moneyFromMinor(total, c);
}

export function moneyEquals(a: FinOpsMoney, b: FinOpsMoney): boolean {
  return a.currency === b.currency && a.amountMinor === b.amountMinor;
}

/**
 * R3: Money amount = rate_money_per_quantum × (usage_count / quantum),
 * quantized once to scale 8 with HALF_EVEN.
 *
 * Exact integer form: divideHalfEven(rateMinor * usageCount, quantum).
 */
export function moneyFromRateUsageHalfEven(input: {
  readonly ratePerQuantum: FinOpsMoney;
  readonly usageCount: bigint;
  readonly billingQuantum: bigint;
}): FinOpsMoney {
  if (input.billingQuantum <= BigInt(0)) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_INVALID_QUANTUM",
      "Billing quantum must be a positive integer",
    );
  }
  if (input.usageCount < BigInt(0)) {
    throw new FinOpsMoneyError(
      "FINOPS_MONEY_INVALID_USAGE",
      "Usage count must be non-negative",
    );
  }
  const product = input.ratePerQuantum.amountMinor * input.usageCount;
  const amountMinor = divideHalfEven(product, input.billingQuantum);
  return moneyFromMinor(amountMinor, input.ratePerQuantum.currency);
}
```

### `projects/sfia-studio/app/lib/oa/finops/application/types.aggregate.ts`

```ts
/**
 * FinOps T2 — aggregate / cost-event / reconciliation application types.
 * Money amounts use canonical decimal strings (numeric(20,8) boundary).
 */

import type { FinOpsCostEvidenceClass, FinOpsSourceOfTruth } from "../domain/types";

export const FINOPS_T2_IDENTITY_CONTRACT_VERSION = "t2-v1" as const;

export type FinOpsEstimationStatus =
  | "available"
  | "unavailable"
  | "unknown";

export type FinOpsAggregateKey = {
  readonly projectId: string;
  /** UTC month start YYYY-MM-DD */
  readonly periodStart: string;
  readonly currency: string;
};

export type FinOpsProjectPeriodAggregate = {
  readonly projectId: string;
  readonly periodStart: string;
  readonly currency: string;
  readonly estimatedAmount: string;
  readonly observedAmount: string;
  readonly billedAmount: string;
  readonly unknownAmount: string;
  readonly inputTokensSum: number | null;
  readonly outputTokensSum: number | null;
  readonly totalTokensSum: number | null;
  readonly costEventCount: number;
  readonly unavailableEstimationCount: number;
  readonly rebuildVersion: number;
  readonly rebuiltAt: string;
};

export type FinOpsCostEvent = {
  readonly costEventId: string;
  readonly dedupKey: string;
  readonly projectId: string;
  readonly executionRunId: string;
  readonly usageEventId: string | null;
  readonly periodStart: string;
  readonly currency: string;
  /** Canonical numeric(20,8) string when amount is known; null when unavailable. */
  readonly amount: string | null;
  readonly evidenceClass: FinOpsCostEvidenceClass;
  readonly sourceOfTruth: FinOpsSourceOfTruth;
  readonly estimationStatus: FinOpsEstimationStatus;
  readonly correctionRef: string | null;
  readonly catalogVersion: string | null;
  readonly provider: string;
  readonly model: string | null;
  readonly unit: string | null;
  readonly billingQuantum: string | null;
  readonly usageQuantity: string | null;
  readonly occurredAt: string;
};

export type FinOpsCostEventInsertResult =
  | { readonly outcome: "created"; readonly costEventId: string }
  | { readonly outcome: "duplicate"; readonly costEventId: string }
  | {
      readonly outcome: "conflict";
      readonly code: "FINOPS_COST_DEDUP_CONFLICT";
      readonly message: string;
    }
  | {
      readonly outcome: "failed";
      readonly code: "FINOPS_COST_PERSIST_FAILED";
      readonly message: string;
      readonly retryable: boolean;
    };

export type FinOpsReconciliationStatus = "succeeded" | "failed";

export type FinOpsReconciliationRecord = {
  readonly reconciliationId: string;
  readonly dedupKey: string;
  readonly projectId: string;
  readonly periodStart: string;
  readonly sourceBatchId: string;
  readonly status: FinOpsReconciliationStatus;
  readonly processedCount: number;
  readonly errorCode: string | null;
  readonly errorMessage: string | null;
  readonly completedAt: string | null;
};

export type ReconcileFact = {
  readonly executionRunId: string;
  readonly usageEventId: string | null;
  readonly evidenceClass: "observed" | "billed";
  readonly sourceOfTruth: "PROVIDER_OBSERVED" | "BILLED";
  /** Canonical decimal string — already quantized Money (scale 8). */
  readonly amount: string;
  readonly currency: string;
  readonly correctionRef: string;
  readonly provider: string;
  readonly model: string | null;
  readonly occurredAt: string;
};

export type ReconcileProjectPeriodInput = {
  readonly projectId: string;
  /** UTC month start YYYY-MM-DD */
  readonly periodStart: string;
  readonly sourceBatchId: string;
  readonly facts: ReadonlyArray<ReconcileFact>;
  /** Soft bound on facts processed in one call (on-demand bounded batch). */
  readonly maxFacts?: number;
};

export type ReconcileProjectPeriodResult =
  | {
      readonly outcome: "succeeded";
      readonly reconciliationId: string;
      readonly processedCount: number;
      readonly createdCount: number;
      readonly duplicateCount: number;
      /** Full project/period projection after rebuild (all currencies). */
      readonly aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>;
      readonly idempotentReplay: boolean;
    }
  | {
      readonly outcome: "failed";
      readonly reconciliationId: string | null;
      readonly code: string;
      readonly message: string;
      /** FinOps-side only — never invalidates a successful user AI run. */
      readonly finopsSideOnly: true;
    };

/**
 * Full A1 rebuild for a project + UTC period.
 * Always rebuilds ALL currencies — no partial per-currency rebuild path.
 */
export type RecomputeAggregatesInput = {
  readonly projectId: string;
  readonly periodStart: string;
};

export type RecomputeAggregatesResult =
  | {
      readonly outcome: "succeeded";
      readonly aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>;
    }
  | {
      readonly outcome: "failed";
      readonly code: string;
      readonly message: string;
    };
```

### `projects/sfia-studio/app/lib/oa/finops/application/t2Identity.ts`

```ts
/**
 * FinOps T2 — deterministic cost-event / reconciliation identity (SHA-256).
 */

import { createHash } from "node:crypto";
import { FINOPS_T2_IDENTITY_CONTRACT_VERSION } from "./types.aggregate";

function normalizePart(value: string | null | undefined): string {
  if (value === null || value === undefined) return "";
  return value.trim();
}

function sha256Hex(material: string): string {
  return createHash("sha256").update(material, "utf8").digest("hex");
}

export function deriveCostEventIdentity(input: {
  readonly projectId: string;
  readonly executionRunId: string;
  readonly evidenceClass: string;
  readonly correctionRef: string | null;
  readonly sourceBatchId?: string | null;
  readonly amount: string | null;
  readonly currency: string;
}): { readonly costEventId: string; readonly dedupKey: string } {
  const material = [
    FINOPS_T2_IDENTITY_CONTRACT_VERSION,
    "cost",
    normalizePart(input.projectId),
    normalizePart(input.executionRunId),
    normalizePart(input.evidenceClass),
    normalizePart(input.correctionRef),
    normalizePart(input.sourceBatchId),
    normalizePart(input.amount),
    normalizePart(input.currency),
  ].join("|");
  const digest = sha256Hex(material);
  return {
    costEventId: `cost_${digest}`,
    dedupKey: `cost_dedup_${digest}`,
  };
}

export function deriveReconciliationDedupKey(input: {
  readonly projectId: string;
  readonly periodStart: string;
  readonly sourceBatchId: string;
}): { readonly reconciliationId: string; readonly dedupKey: string } {
  const material = [
    FINOPS_T2_IDENTITY_CONTRACT_VERSION,
    "recon",
    normalizePart(input.projectId),
    normalizePart(input.periodStart),
    normalizePart(input.sourceBatchId),
  ].join("|");
  const digest = sha256Hex(material);
  return {
    reconciliationId: `recon_${digest}`,
    dedupKey: `recon_dedup_${digest}`,
  };
}
```

### `projects/sfia-studio/app/lib/oa/finops/application/estimateUsageCost.ts`

```ts
/**
 * FinOps T2 — estimate usage cost from R3 catalog (HALF_EVEN once).
 * Missing catalog entry ⇒ unavailable/unknown estimation; never invents tariffs.
 * Estimated cost never blocks (caller responsibility; this module only computes).
 */

import {
  formatMoneyString,
  moneyFromRateUsageHalfEven,
  type FinOpsMoney,
} from "../domain/money";
import type { FinOpsPriceCatalogPort } from "../ports/finopsPriceCatalogPort";
import type { FinOpsEstimationStatus } from "./types.aggregate";

export type EstimateUsageCostInput = {
  readonly provider: string;
  readonly model: string | null;
  readonly unit: string;
  readonly currency: string;
  readonly usageQuantity: bigint;
  readonly occurredAt: string;
  readonly catalogVersion?: string;
};

export type EstimateUsageCostResult =
  | {
      readonly status: "available";
      readonly estimationStatus: "available";
      readonly amount: FinOpsMoney;
      readonly amountCanonical: string;
      readonly catalogVersion: string;
      readonly unit: string;
      readonly billingQuantum: string;
      readonly usageQuantity: string;
    }
  | {
      readonly status: "unavailable";
      readonly estimationStatus: FinOpsEstimationStatus;
      readonly reason: string;
    };

export async function estimateUsageCost(
  catalog: FinOpsPriceCatalogPort,
  input: EstimateUsageCostInput,
): Promise<EstimateUsageCostResult> {
  if (!input.model || !input.model.trim()) {
    return {
      status: "unavailable",
      estimationStatus: "unavailable",
      reason: "model required for catalog lookup",
    };
  }

  const lookup = await catalog.lookup({
    provider: input.provider,
    model: input.model,
    unit: input.unit,
    currency: input.currency,
    at: input.occurredAt,
    catalogVersion: input.catalogVersion,
  });

  if (lookup.status === "unavailable") {
    return {
      status: "unavailable",
      estimationStatus: "unavailable",
      reason: lookup.reason,
    };
  }

  const money = moneyFromRateUsageHalfEven({
    ratePerQuantum: lookup.entry.ratePerQuantum,
    usageCount: input.usageQuantity,
    billingQuantum: lookup.entry.billingQuantum,
  });

  return {
    status: "available",
    estimationStatus: "available",
    amount: money,
    amountCanonical: formatMoneyString(money),
    catalogVersion: lookup.entry.catalogVersion,
    unit: lookup.entry.unit,
    billingQuantum: lookup.entry.billingQuantum.toString(),
    usageQuantity: input.usageQuantity.toString(),
  };
}
```

### `projects/sfia-studio/app/lib/oa/finops/application/recomputeAggregates.ts`

```ts
/**
 * FinOps T2 — full rebuild of A1 durable derived aggregates from cost events.
 * Ledger/cost events remain authoritative; aggregates are projections only.
 * SUM of scale-8 amounts — no additional rounding.
 *
 * Rebuild is always project+period COMPLETE (all currencies). Partial
 * per-currency rebuild is intentionally not supported: replace deletes the
 * whole project/period projection.
 */

import {
  formatMoneyString,
  moneyFromMinor,
  normalizeCurrency,
  parseMoneyString,
  type FinOpsMoney,
} from "../domain/money";
import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type {
  FinOpsCostEvent,
  FinOpsProjectPeriodAggregate,
  RecomputeAggregatesInput,
  RecomputeAggregatesResult,
} from "./types.aggregate";

export type RecomputeAggregatesDeps = {
  readonly aggregates: FinOpsAggregatePort;
  /** Injected clock for rebuiltAt (ISO). */
  readonly nowIso: () => string;
};

function zeroCanonical(currency: string): string {
  return formatMoneyString(moneyFromMinor(BigInt(0), currency));
}

function addCanonical(
  currency: string,
  left: string,
  right: FinOpsMoney,
): string {
  const sum = parseMoneyString(left, currency).amountMinor + right.amountMinor;
  return formatMoneyString(moneyFromMinor(sum, currency));
}

export function buildAggregatesFromCostEvents(input: {
  readonly projectId: string;
  readonly periodStart: string;
  readonly events: ReadonlyArray<FinOpsCostEvent>;
  readonly rebuiltAt: string;
  readonly previousVersions?: ReadonlyMap<string, number>;
}): ReadonlyArray<FinOpsProjectPeriodAggregate> {
  type Acc = {
    estimated: string;
    observed: string;
    billed: string;
    unknown: string;
    costEventCount: number;
    unavailableEstimationCount: number;
  };

  const byCurrency = new Map<string, Acc>();

  const ensure = (currencyRaw: string): Acc => {
    const currency = normalizeCurrency(currencyRaw);
    let acc = byCurrency.get(currency);
    if (!acc) {
      acc = {
        estimated: zeroCanonical(currency),
        observed: zeroCanonical(currency),
        billed: zeroCanonical(currency),
        unknown: zeroCanonical(currency),
        costEventCount: 0,
        unavailableEstimationCount: 0,
      };
      byCurrency.set(currency, acc);
    }
    return acc;
  };

  for (const event of input.events) {
    if (event.projectId !== input.projectId) continue;
    if (event.periodStart !== input.periodStart) continue;
    const acc = ensure(event.currency);
    acc.costEventCount += 1;
    if (
      event.estimationStatus === "unavailable" ||
      event.estimationStatus === "unknown"
    ) {
      if (event.evidenceClass === "estimated" || event.evidenceClass === "unknown") {
        acc.unavailableEstimationCount += 1;
      }
    }
    if (event.amount === null) continue;
    const money = parseMoneyString(event.amount, event.currency);
    switch (event.evidenceClass) {
      case "estimated":
        acc.estimated = addCanonical(event.currency, acc.estimated, money);
        break;
      case "observed":
        acc.observed = addCanonical(event.currency, acc.observed, money);
        break;
      case "billed":
        acc.billed = addCanonical(event.currency, acc.billed, money);
        break;
      case "unknown":
        acc.unknown = addCanonical(event.currency, acc.unknown, money);
        break;
      default: {
        const _exhaustive: never = event.evidenceClass;
        void _exhaustive;
      }
    }
  }

  const out: FinOpsProjectPeriodAggregate[] = [];
  for (const [currency, acc] of byCurrency) {
    const prev = input.previousVersions?.get(currency) ?? 0;
    out.push({
      projectId: input.projectId,
      periodStart: input.periodStart,
      currency,
      estimatedAmount: acc.estimated,
      observedAmount: acc.observed,
      billedAmount: acc.billed,
      unknownAmount: acc.unknown,
      inputTokensSum: null,
      outputTokensSum: null,
      totalTokensSum: null,
      costEventCount: acc.costEventCount,
      unavailableEstimationCount: acc.unavailableEstimationCount,
      rebuildVersion: prev + 1,
      rebuiltAt: input.rebuiltAt,
    });
  }
  return out;
}

/**
 * Full project/period A1 rebuild under exclusive serialization.
 * Covers authoritative read → derive → replace on one locked session.
 */
export async function recomputeAggregates(
  deps: RecomputeAggregatesDeps,
  input: RecomputeAggregatesInput,
): Promise<RecomputeAggregatesResult> {
  try {
    const projectId = input.projectId.trim();
    const periodStart = input.periodStart.trim();
    if (!projectId || !periodStart) {
      return {
        outcome: "failed",
        code: "FINOPS_AGGREGATE_INVALID_INPUT",
        message: "projectId and periodStart are required",
      };
    }

    const aggregates = await deps.aggregates.withExclusiveProjectPeriodRebuild(
      { projectId, periodStart },
      async (ops) => {
        const events = await ops.listAllCostEventsForPeriod();
        const existing = await ops.listAggregates();
        const previousVersions = new Map(
          existing.map((row) => [row.currency, row.rebuildVersion]),
        );
        const rebuilt = buildAggregatesFromCostEvents({
          projectId,
          periodStart,
          events,
          rebuiltAt: deps.nowIso(),
          previousVersions,
        });
        await ops.replaceAggregates(rebuilt);
        return rebuilt;
      },
    );

    return { outcome: "succeeded", aggregates };
  } catch (error) {
    return {
      outcome: "failed",
      code: "FINOPS_AGGREGATE_RECOMPUTE_FAILED",
      message:
        error instanceof Error ? error.message : "aggregate recompute failed",
    };
  }
}
```

### `projects/sfia-studio/app/lib/oa/finops/application/reconcileProjectPeriod.ts`

```ts
/**
 * FinOps T2 — explicit reconcileProjectPeriod (on-demand + bounded batch).
 * estimated → observed → billed via append-only correction cost events.
 * No cron / always-on polling. Failures are FinOps-side only.
 *
 * After the batch inserts, A1 is rebuilt ONCE for the full project/period
 * (all currencies) — never per-currency.
 */

import { normalizeCurrency, parseMoneyString } from "../domain/money";
import { computeUtcMonthPeriod } from "../domain/period";
import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type { FinOpsReconciliationPort } from "../ports/finopsReconciliationPort";
import {
  recomputeAggregates,
  type RecomputeAggregatesDeps,
} from "./recomputeAggregates";
import {
  deriveCostEventIdentity,
  deriveReconciliationDedupKey,
} from "./t2Identity";
import type {
  FinOpsCostEvent,
  ReconcileProjectPeriodInput,
  ReconcileProjectPeriodResult,
} from "./types.aggregate";

export type ReconcileProjectPeriodDeps = {
  readonly reconciliation: FinOpsReconciliationPort;
  readonly aggregates: FinOpsAggregatePort;
  readonly nowIso: () => string;
};

const DEFAULT_MAX_FACTS = 100;

function periodStartMatchesOccurredAt(
  periodStart: string,
  occurredAt: string,
): boolean {
  try {
    const period = computeUtcMonthPeriod(occurredAt);
    return period.periodStart.slice(0, 10) === periodStart;
  } catch {
    return false;
  }
}

export async function reconcileProjectPeriod(
  deps: ReconcileProjectPeriodDeps,
  input: ReconcileProjectPeriodInput,
): Promise<ReconcileProjectPeriodResult> {
  const projectId = input.projectId.trim();
  const periodStart = input.periodStart.trim();
  const sourceBatchId = input.sourceBatchId.trim();
  if (!projectId || !periodStart || !sourceBatchId) {
    return {
      outcome: "failed",
      reconciliationId: null,
      code: "FINOPS_RECON_INVALID_INPUT",
      message: "projectId, periodStart, and sourceBatchId are required",
      finopsSideOnly: true,
    };
  }

  const { reconciliationId, dedupKey } = deriveReconciliationDedupKey({
    projectId,
    periodStart,
    sourceBatchId,
  });

  const existing = await deps.reconciliation.findReconciliationByDedup(dedupKey);
  if (existing && existing.status === "succeeded") {
    const aggregates = await deps.aggregates.listAggregatesForProjectPeriod({
      projectId,
      periodStart,
    });
    return {
      outcome: "succeeded",
      reconciliationId: existing.reconciliationId,
      processedCount: existing.processedCount,
      createdCount: 0,
      duplicateCount: existing.processedCount,
      aggregates,
      idempotentReplay: true,
    };
  }

  const insert = await deps.reconciliation.insertReconciliationRecord({
    reconciliationId,
    dedupKey,
    projectId,
    periodStart,
    sourceBatchId,
    status: "failed",
    processedCount: 0,
    errorCode: null,
    errorMessage: null,
    completedAt: null,
  });

  if (insert.outcome === "duplicate" && insert.existing.status === "succeeded") {
    const aggregates = await deps.aggregates.listAggregatesForProjectPeriod({
      projectId,
      periodStart,
    });
    return {
      outcome: "succeeded",
      reconciliationId: insert.existing.reconciliationId,
      processedCount: insert.existing.processedCount,
      createdCount: 0,
      duplicateCount: insert.existing.processedCount,
      aggregates,
      idempotentReplay: true,
    };
  }

  if (insert.outcome === "failed") {
    return {
      outcome: "failed",
      reconciliationId,
      code: "FINOPS_RECON_PERSIST_FAILED",
      message: insert.message,
      finopsSideOnly: true,
    };
  }

  const maxFacts = input.maxFacts ?? DEFAULT_MAX_FACTS;
  if (
    typeof maxFacts !== "number" ||
    !Number.isSafeInteger(maxFacts) ||
    maxFacts <= 0
  ) {
    await deps.reconciliation.completeReconciliationRecord({
      reconciliationId,
      status: "failed",
      processedCount: 0,
      errorCode: "FINOPS_RECON_INVALID_BATCH_BOUND",
      errorMessage: "maxFacts must be a positive safe integer",
      completedAt: deps.nowIso(),
    });
    return {
      outcome: "failed",
      reconciliationId,
      code: "FINOPS_RECON_INVALID_BATCH_BOUND",
      message: "maxFacts must be a positive safe integer",
      finopsSideOnly: true,
    };
  }

  if (input.facts.length > maxFacts) {
    await deps.reconciliation.completeReconciliationRecord({
      reconciliationId,
      status: "failed",
      processedCount: 0,
      errorCode: "FINOPS_RECON_BATCH_TOO_LARGE",
      errorMessage: `facts exceed bounded batch maxFacts=${maxFacts}`,
      completedAt: deps.nowIso(),
    });
    return {
      outcome: "failed",
      reconciliationId,
      code: "FINOPS_RECON_BATCH_TOO_LARGE",
      message: `facts exceed bounded batch maxFacts=${maxFacts}`,
      finopsSideOnly: true,
    };
  }

  let createdCount = 0;
  let duplicateCount = 0;
  let processedCount = 0;

  try {
    for (const fact of input.facts) {
      if (!fact.correctionRef.trim()) {
        throw new Error("correctionRef is required for reconciliation facts");
      }
      if (!periodStartMatchesOccurredAt(periodStart, fact.occurredAt)) {
        throw new Error("fact occurredAt does not belong to periodStart");
      }
      const currency = normalizeCurrency(fact.currency);
      // Validate canonical Money (rejects float leakage / over-scale).
      parseMoneyString(fact.amount, currency);

      const identity = deriveCostEventIdentity({
        projectId,
        executionRunId: fact.executionRunId,
        evidenceClass: fact.evidenceClass,
        correctionRef: fact.correctionRef,
        sourceBatchId,
        amount: fact.amount,
        currency,
      });

      const event: FinOpsCostEvent = {
        costEventId: identity.costEventId,
        dedupKey: identity.dedupKey,
        projectId,
        executionRunId: fact.executionRunId,
        usageEventId: fact.usageEventId,
        periodStart,
        currency,
        amount: fact.amount,
        evidenceClass: fact.evidenceClass,
        sourceOfTruth: fact.sourceOfTruth,
        estimationStatus: "available",
        correctionRef: fact.correctionRef,
        catalogVersion: null,
        provider: fact.provider,
        model: fact.model,
        unit: null,
        billingQuantum: null,
        usageQuantity: null,
        occurredAt: fact.occurredAt,
      };

      const result = await deps.reconciliation.insertCostEvent(event);
      if (result.outcome === "created") createdCount += 1;
      else if (result.outcome === "duplicate") duplicateCount += 1;
      else if (result.outcome === "conflict") {
        throw new Error(result.message);
      } else {
        throw new Error(result.message);
      }
      processedCount += 1;
    }

    const recomputeDeps: RecomputeAggregatesDeps = {
      aggregates: deps.aggregates,
      nowIso: deps.nowIso,
    };

    // ONE full project/period rebuild for ALL currencies (no per-currency path).
    const recomputed = await recomputeAggregates(recomputeDeps, {
      projectId,
      periodStart,
    });
    if (recomputed.outcome === "failed") {
      throw new Error(recomputed.message);
    }

    await deps.reconciliation.completeReconciliationRecord({
      reconciliationId,
      status: "succeeded",
      processedCount,
      errorCode: null,
      errorMessage: null,
      completedAt: deps.nowIso(),
    });

    return {
      outcome: "succeeded",
      reconciliationId,
      processedCount,
      createdCount,
      duplicateCount,
      aggregates: recomputed.aggregates,
      idempotentReplay: false,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "reconciliation failed";
    await deps.reconciliation.completeReconciliationRecord({
      reconciliationId,
      status: "failed",
      processedCount,
      errorCode: "FINOPS_RECON_FAILED",
      errorMessage: message,
      completedAt: deps.nowIso(),
    });
    return {
      outcome: "failed",
      reconciliationId,
      code: "FINOPS_RECON_FAILED",
      message,
      finopsSideOnly: true,
    };
  }
}
```

### `projects/sfia-studio/app/lib/oa/finops/ports/finopsAggregatePort.ts`

```ts
/**
 * FinOps T2 — durable A1 aggregate port (derived; fully rebuildable).
 */

import type {
  FinOpsAggregateKey,
  FinOpsCostEvent,
  FinOpsProjectPeriodAggregate,
} from "../application/types.aggregate";

/**
 * Transactional ops bound to one exclusive project/period rebuild session.
 * Callers must not escape this boundary (no pool reuse outside these ops).
 */
export type FinOpsExclusiveProjectPeriodRebuildOps = {
  /** Authoritative cost events for the full project/period (all currencies). */
  readonly listAllCostEventsForPeriod: () => Promise<
    ReadonlyArray<FinOpsCostEvent>
  >;
  readonly listAggregates: () => Promise<
    ReadonlyArray<FinOpsProjectPeriodAggregate>
  >;
  /**
   * Replace the entire project/period projection (all currencies) atomically
   * within the exclusive session.
   */
  readonly replaceAggregates: (
    aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>,
  ) => Promise<void>;
};

export type FinOpsAggregatePort = {
  /**
   * Replace all aggregate rows for a project+period (full rebuild write).
   * Prefer `withExclusiveProjectPeriodRebuild` for production rebuilds so
   * authoritative read → derive → replace stays serialized.
   */
  readonly replaceProjectPeriodAggregates: (input: {
    readonly projectId: string;
    readonly periodStart: string;
    readonly aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>;
  }) => Promise<void>;

  readonly readAggregate: (
    key: FinOpsAggregateKey,
  ) => Promise<FinOpsProjectPeriodAggregate | null>;

  readonly listAggregatesForProjectPeriod: (input: {
    readonly projectId: string;
    readonly periodStart: string;
  }) => Promise<ReadonlyArray<FinOpsProjectPeriodAggregate>>;

  /**
   * Serialize the full A1 rebuild critical section for one project+period:
   * acquire → read cost events → read aggregates → derive → replace → release.
   * PostgreSQL: one connection + transaction advisory lock (no pool starvation).
   */
  readonly withExclusiveProjectPeriodRebuild: <T>(
    input: {
      readonly projectId: string;
      readonly periodStart: string;
    },
    work: (ops: FinOpsExclusiveProjectPeriodRebuildOps) => Promise<T>,
  ) => Promise<T>;
};
```

### `projects/sfia-studio/app/lib/oa/finops/ports/finopsReconciliationPort.ts`

```ts
/**
 * FinOps T2 — reconciliation / adjacent Money cost-event port.
 * Append-only cost history; corrections are new events.
 */

import type {
  FinOpsCostEvent,
  FinOpsCostEventInsertResult,
  FinOpsReconciliationRecord,
} from "../application/types.aggregate";

export type FinOpsReconciliationPort = {
  readonly insertCostEvent: (
    event: FinOpsCostEvent,
  ) => Promise<FinOpsCostEventInsertResult>;

  readonly listCostEventsForProjectPeriod: (input: {
    readonly projectId: string;
    readonly periodStart: string;
    readonly currency?: string;
  }) => Promise<ReadonlyArray<FinOpsCostEvent>>;

  readonly findReconciliationByDedup: (
    dedupKey: string,
  ) => Promise<FinOpsReconciliationRecord | null>;

  readonly insertReconciliationRecord: (
    record: FinOpsReconciliationRecord,
  ) => Promise<
    | { readonly outcome: "created" }
    | { readonly outcome: "duplicate"; readonly existing: FinOpsReconciliationRecord }
    | { readonly outcome: "failed"; readonly message: string; readonly retryable: boolean }
  >;

  readonly completeReconciliationRecord: (input: {
    readonly reconciliationId: string;
    readonly status: "succeeded" | "failed";
    readonly processedCount: number;
    readonly errorCode: string | null;
    readonly errorMessage: string | null;
    readonly completedAt: string;
  }) => Promise<void>;
};
```

### `projects/sfia-studio/app/lib/oa/finops/ports/finopsPriceCatalogPort.ts`

```ts
/**
 * FinOps T2 — R3 versioned server-side price catalog port.
 * No provider tariffs hardcoded; missing entry ⇒ unavailable estimation.
 */

import type { FinOpsMoney } from "../domain/money";

export type FinOpsPriceCatalogEntry = {
  readonly catalogEntryId: string;
  readonly catalogVersion: string;
  readonly provider: string;
  readonly model: string;
  /** Explicit unit declared by the catalog entry (R3). */
  readonly unit: string;
  /** Explicit billing quantum (positive integer count of `unit`). */
  readonly billingQuantum: bigint;
  readonly ratePerQuantum: FinOpsMoney;
  readonly validFrom: string;
  readonly validTo: string | null;
};

export type FinOpsPriceCatalogLookupQuery = {
  readonly provider: string;
  readonly model: string;
  readonly unit: string;
  readonly currency: string;
  /** ISO instant used to select the version window. */
  readonly at: string;
  readonly catalogVersion?: string;
};

export type FinOpsPriceCatalogLookupResult =
  | { readonly status: "found"; readonly entry: FinOpsPriceCatalogEntry }
  | { readonly status: "unavailable"; readonly reason: string };

export type FinOpsPriceCatalogPort = {
  readonly lookup: (
    query: FinOpsPriceCatalogLookupQuery,
  ) => Promise<FinOpsPriceCatalogLookupResult>;
};
```

### `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore.ts`

```ts
/**
 * FinOps T2 — PostgreSQL A1 durable aggregate store.
 *
 * Exclusive rebuild uses ONE PoolClient + transaction advisory lock so the
 * critical section (read cost events → derive → replace) cannot starve the
 * pool: waiters block on lock acquisition inside their own transactions; the
 * holder uses the same connection for all SQL until COMMIT/ROLLBACK.
 */

import type { Pool, PoolClient } from "pg";
import type {
  FinOpsAggregateKey,
  FinOpsCostEvent,
  FinOpsProjectPeriodAggregate,
} from "../../application/types.aggregate";
import { formatMoneyString, parseMoneyString } from "../../domain/money";
import type {
  FinOpsAggregatePort,
  FinOpsExclusiveProjectPeriodRebuildOps,
} from "../../ports/finopsAggregatePort";
import { sanitizeDbError } from "./sanitizeDbError";

function formatPgDate(value: unknown): string {
  if (value instanceof Date) {
    // node-pg maps DATE to a local-midnight Date; use local Y/M/D (not UTC).
    const y = value.getFullYear();
    const m = String(value.getMonth() + 1).padStart(2, "0");
    const d = String(value.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  const raw = String(value);
  const match = /^(\d{4}-\d{2}-\d{2})/.exec(raw);
  if (match) return match[1]!;
  throw new Error("invalid period_start from postgres");
}

function canonicalAmount(raw: unknown, currency: string): string {
  return formatMoneyString(parseMoneyString(String(raw), currency));
}

function rowToAggregate(
  row: Record<string, unknown>,
): FinOpsProjectPeriodAggregate {
  const currency = String(row.currency);
  return {
    projectId: String(row.project_id),
    periodStart: formatPgDate(row.period_start),
    currency,
    estimatedAmount: canonicalAmount(row.estimated_amount, currency),
    observedAmount: canonicalAmount(row.observed_amount, currency),
    billedAmount: canonicalAmount(row.billed_amount, currency),
    unknownAmount: canonicalAmount(row.unknown_amount, currency),
    inputTokensSum:
      row.input_tokens_sum === null || row.input_tokens_sum === undefined
        ? null
        : Number(row.input_tokens_sum),
    outputTokensSum:
      row.output_tokens_sum === null || row.output_tokens_sum === undefined
        ? null
        : Number(row.output_tokens_sum),
    totalTokensSum:
      row.total_tokens_sum === null || row.total_tokens_sum === undefined
        ? null
        : Number(row.total_tokens_sum),
    costEventCount: Number(row.cost_event_count),
    unavailableEstimationCount: Number(row.unavailable_estimation_count),
    rebuildVersion: Number(row.rebuild_version),
    rebuiltAt:
      row.rebuilt_at instanceof Date
        ? row.rebuilt_at.toISOString()
        : String(row.rebuilt_at),
  };
}

function rowToCostEvent(row: Record<string, unknown>): FinOpsCostEvent {
  return {
    costEventId: String(row.cost_event_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    executionRunId: String(row.execution_run_id),
    usageEventId:
      row.usage_event_id === null || row.usage_event_id === undefined
        ? null
        : String(row.usage_event_id),
    periodStart: formatPgDate(row.period_start),
    currency: String(row.currency),
    amount:
      row.amount === null || row.amount === undefined
        ? null
        : formatMoneyString(
            parseMoneyString(String(row.amount), String(row.currency)),
          ),
    evidenceClass: row.evidence_class as FinOpsCostEvent["evidenceClass"],
    sourceOfTruth: row.source_of_truth as FinOpsCostEvent["sourceOfTruth"],
    estimationStatus:
      row.estimation_status as FinOpsCostEvent["estimationStatus"],
    correctionRef:
      row.correction_ref === null || row.correction_ref === undefined
        ? null
        : String(row.correction_ref),
    catalogVersion:
      row.catalog_version === null || row.catalog_version === undefined
        ? null
        : String(row.catalog_version),
    provider: String(row.provider),
    model:
      row.model === null || row.model === undefined ? null : String(row.model),
    unit: row.unit === null || row.unit === undefined ? null : String(row.unit),
    billingQuantum:
      row.billing_quantum === null || row.billing_quantum === undefined
        ? null
        : String(row.billing_quantum),
    usageQuantity:
      row.usage_quantity === null || row.usage_quantity === undefined
        ? null
        : String(row.usage_quantity),
    occurredAt:
      row.occurred_at instanceof Date
        ? row.occurred_at.toISOString()
        : String(row.occurred_at),
  };
}

async function deleteAndInsertAggregates(
  client: PoolClient,
  projectId: string,
  periodStart: string,
  aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>,
): Promise<void> {
  await client.query(
    `DELETE FROM finops_usage_aggregate
     WHERE project_id = $1 AND period_start = $2::date`,
    [projectId, periodStart],
  );
  for (const agg of aggregates) {
    await client.query(
      `INSERT INTO finops_usage_aggregate (
        project_id, period_start, currency,
        estimated_amount, observed_amount, billed_amount, unknown_amount,
        input_tokens_sum, output_tokens_sum, total_tokens_sum,
        cost_event_count, unavailable_estimation_count,
        rebuild_version, rebuilt_at
      ) VALUES (
        $1,$2::date,$3,$4::numeric,$5::numeric,$6::numeric,$7::numeric,
        $8,$9,$10,$11,$12,$13,$14::timestamptz
      )`,
      [
        agg.projectId,
        agg.periodStart,
        agg.currency,
        agg.estimatedAmount,
        agg.observedAmount,
        agg.billedAmount,
        agg.unknownAmount,
        agg.inputTokensSum,
        agg.outputTokensSum,
        agg.totalTokensSum,
        agg.costEventCount,
        agg.unavailableEstimationCount,
        agg.rebuildVersion,
        agg.rebuiltAt,
      ],
    );
  }
}

function buildExclusiveOps(
  client: PoolClient,
  projectId: string,
  periodStart: string,
): FinOpsExclusiveProjectPeriodRebuildOps {
  return {
    async listAllCostEventsForPeriod() {
      const result = await client.query(
        `SELECT * FROM finops_cost_event
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY occurred_at ASC, cost_event_id ASC`,
        [projectId, periodStart],
      );
      return result.rows.map((row) =>
        rowToCostEvent(row as Record<string, unknown>),
      );
    },
    async listAggregates() {
      const result = await client.query(
        `SELECT * FROM finops_usage_aggregate
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY currency ASC`,
        [projectId, periodStart],
      );
      return result.rows.map((row) =>
        rowToAggregate(row as Record<string, unknown>),
      );
    },
    async replaceAggregates(aggregates) {
      await deleteAndInsertAggregates(
        client,
        projectId,
        periodStart,
        aggregates,
      );
    },
  };
}

export function createPostgresFinOpsAggregateStore(
  pool: Pool,
): FinOpsAggregatePort {
  return {
    async replaceProjectPeriodAggregates(input) {
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        await deleteAndInsertAggregates(
          client,
          input.projectId,
          input.periodStart,
          input.aggregates,
        );
        await client.query("COMMIT");
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore
          }
        }
        const sanitized = sanitizeDbError(error);
        throw new Error(sanitized.message);
      } finally {
        client?.release();
      }
    },

    async readAggregate(key: FinOpsAggregateKey) {
      const result = await pool.query(
        `SELECT * FROM finops_usage_aggregate
         WHERE project_id = $1 AND period_start = $2::date AND currency = $3
         LIMIT 1`,
        [key.projectId, key.periodStart, key.currency],
      );
      if (result.rowCount !== 1) return null;
      return rowToAggregate(result.rows[0] as Record<string, unknown>);
    },

    async listAggregatesForProjectPeriod(input) {
      const result = await pool.query(
        `SELECT * FROM finops_usage_aggregate
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY currency ASC`,
        [input.projectId, input.periodStart],
      );
      return result.rows.map((row) =>
        rowToAggregate(row as Record<string, unknown>),
      );
    },

    async withExclusiveProjectPeriodRebuild(input, work) {
      const projectId = input.projectId.trim();
      const periodStart = input.periodStart.trim();
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        // Transaction-scoped advisory lock: released on COMMIT/ROLLBACK.
        // Keys derived from projectId + periodStart only (not global FinOps).
        await client.query(
          `SELECT pg_advisory_xact_lock(
             hashtext('finops-a1:' || $1),
             hashtext($2)
           )`,
          [projectId, periodStart],
        );
        const ops = buildExclusiveOps(client, projectId, periodStart);
        const result = await work(ops);
        await client.query("COMMIT");
        return result;
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore
          }
        }
        const sanitized = sanitizeDbError(error);
        throw new Error(sanitized.message);
      } finally {
        // Session never retains an advisory lock: xact locks end with txn.
        client?.release();
      }
    },
  };
}
```

### `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsReconciliation.ts`

```ts
/**
 * FinOps T2 — PostgreSQL reconciliation + append-only cost-event adapter.
 */

import type { Pool, PoolClient } from "pg";
import type {
  FinOpsCostEvent,
  FinOpsCostEventInsertResult,
  FinOpsReconciliationRecord,
} from "../../application/types.aggregate";
import { formatMoneyString, parseMoneyString } from "../../domain/money";
import type { FinOpsReconciliationPort } from "../../ports/finopsReconciliationPort";
import { sanitizeDbError } from "./sanitizeDbError";

function formatPgDate(value: unknown): string {
  if (value instanceof Date) {
    // node-pg maps DATE to a local-midnight Date; use local Y/M/D (not UTC).
    const y = value.getFullYear();
    const m = String(value.getMonth() + 1).padStart(2, "0");
    const d = String(value.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  const raw = String(value);
  // node-pg may return 'YYYY-MM-DD' or a longer timestamp string.
  const match = /^(\d{4}-\d{2}-\d{2})/.exec(raw);
  if (match) return match[1]!;
  throw new Error("invalid period_start from postgres");
}

const INSERT_COST_SQL = `
INSERT INTO finops_cost_event (
  cost_event_id, dedup_key, project_id, execution_run_id, usage_event_id,
  period_start, currency, amount, evidence_class, source_of_truth,
  estimation_status, correction_ref, catalog_version, provider, model,
  unit, billing_quantum, usage_quantity, occurred_at, created_at
) VALUES (
  $1,$2,$3,$4,$5,$6::date,$7,$8::numeric,$9,$10,$11,$12,$13,$14,$15,
  $16,$17::numeric,$18::numeric,$19::timestamptz,NOW()
)
ON CONFLICT (dedup_key) DO NOTHING
RETURNING cost_event_id
`;

function rowToCostEvent(row: Record<string, unknown>): FinOpsCostEvent {
  return {
    costEventId: String(row.cost_event_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    executionRunId: String(row.execution_run_id),
    usageEventId:
      row.usage_event_id === null || row.usage_event_id === undefined
        ? null
        : String(row.usage_event_id),
    periodStart: formatPgDate(row.period_start),
    currency: String(row.currency),
    amount:
      row.amount === null || row.amount === undefined
        ? null
        : formatMoneyString(
            parseMoneyString(String(row.amount), String(row.currency)),
          ),
    evidenceClass: row.evidence_class as FinOpsCostEvent["evidenceClass"],
    sourceOfTruth: row.source_of_truth as FinOpsCostEvent["sourceOfTruth"],
    estimationStatus:
      row.estimation_status as FinOpsCostEvent["estimationStatus"],
    correctionRef:
      row.correction_ref === null || row.correction_ref === undefined
        ? null
        : String(row.correction_ref),
    catalogVersion:
      row.catalog_version === null || row.catalog_version === undefined
        ? null
        : String(row.catalog_version),
    provider: String(row.provider),
    model:
      row.model === null || row.model === undefined ? null : String(row.model),
    unit: row.unit === null || row.unit === undefined ? null : String(row.unit),
    billingQuantum:
      row.billing_quantum === null || row.billing_quantum === undefined
        ? null
        : String(row.billing_quantum),
    usageQuantity:
      row.usage_quantity === null || row.usage_quantity === undefined
        ? null
        : String(row.usage_quantity),
    occurredAt:
      row.occurred_at instanceof Date
        ? row.occurred_at.toISOString()
        : String(row.occurred_at),
  };
}

function rowToRecon(row: Record<string, unknown>): FinOpsReconciliationRecord {
  return {
    reconciliationId: String(row.reconciliation_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    periodStart: formatPgDate(row.period_start),
    sourceBatchId: String(row.source_batch_id),
    status: row.status as FinOpsReconciliationRecord["status"],
    processedCount: Number(row.processed_count),
    errorCode:
      row.error_code === null || row.error_code === undefined
        ? null
        : String(row.error_code),
    errorMessage:
      row.error_message === null || row.error_message === undefined
        ? null
        : String(row.error_message),
    completedAt:
      row.completed_at === null || row.completed_at === undefined
        ? null
        : row.completed_at instanceof Date
          ? row.completed_at.toISOString()
          : String(row.completed_at),
  };
}

function fingerprintEqual(a: FinOpsCostEvent, b: FinOpsCostEvent): boolean {
  return (
    a.projectId === b.projectId &&
    a.executionRunId === b.executionRunId &&
    a.usageEventId === b.usageEventId &&
    a.periodStart === b.periodStart &&
    a.currency === b.currency &&
    a.amount === b.amount &&
    a.evidenceClass === b.evidenceClass &&
    a.sourceOfTruth === b.sourceOfTruth &&
    a.estimationStatus === b.estimationStatus &&
    a.correctionRef === b.correctionRef &&
    a.provider === b.provider &&
    a.model === b.model
  );
}

export function createPostgresFinOpsReconciliation(
  pool: Pool,
): FinOpsReconciliationPort {
  return {
    async insertCostEvent(event): Promise<FinOpsCostEventInsertResult> {
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        const inserted = await client.query<{ cost_event_id: string }>(
          INSERT_COST_SQL,
          [
            event.costEventId,
            event.dedupKey,
            event.projectId,
            event.executionRunId,
            event.usageEventId,
            event.periodStart,
            event.currency,
            event.amount,
            event.evidenceClass,
            event.sourceOfTruth,
            event.estimationStatus,
            event.correctionRef,
            event.catalogVersion,
            event.provider,
            event.model,
            event.unit,
            event.billingQuantum,
            event.usageQuantity,
            event.occurredAt,
          ],
        );

        if (inserted.rowCount === 1) {
          await client.query("COMMIT");
          return { outcome: "created", costEventId: event.costEventId };
        }

        const existing = await client.query(
          `SELECT * FROM finops_cost_event WHERE dedup_key = $1 LIMIT 1`,
          [event.dedupKey],
        );
        if (existing.rowCount !== 1) {
          await client.query("ROLLBACK");
          return {
            outcome: "failed",
            code: "FINOPS_COST_PERSIST_FAILED",
            message: "FinOps cost event persist failed",
            retryable: true,
          };
        }
        const existingEvent = rowToCostEvent(
          existing.rows[0] as Record<string, unknown>,
        );
        if (!fingerprintEqual(existingEvent, event)) {
          await client.query("ROLLBACK");
          return {
            outcome: "conflict",
            code: "FINOPS_COST_DEDUP_CONFLICT",
            message: "FinOps cost dedup conflict with divergent payload",
          };
        }
        await client.query("COMMIT");
        return {
          outcome: "duplicate",
          costEventId: existingEvent.costEventId,
        };
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore
          }
        }
        const sanitized = sanitizeDbError(error);
        return {
          outcome: "failed",
          code: "FINOPS_COST_PERSIST_FAILED",
          message: sanitized.message,
          retryable: sanitized.retryable,
        };
      } finally {
        client?.release();
      }
    },

    async listCostEventsForProjectPeriod(input) {
      const params: unknown[] = [input.projectId, input.periodStart];
      let sql = `SELECT * FROM finops_cost_event
        WHERE project_id = $1 AND period_start = $2::date`;
      if (input.currency) {
        params.push(input.currency);
        sql += ` AND currency = $3`;
      }
      sql += ` ORDER BY occurred_at ASC, cost_event_id ASC`;
      const result = await pool.query(sql, params);
      return result.rows.map((row) =>
        rowToCostEvent(row as Record<string, unknown>),
      );
    },

    async findReconciliationByDedup(dedupKey) {
      const result = await pool.query(
        `SELECT * FROM finops_reconciliation_record WHERE dedup_key = $1 LIMIT 1`,
        [dedupKey],
      );
      if (result.rowCount !== 1) return null;
      return rowToRecon(result.rows[0] as Record<string, unknown>);
    },

    async insertReconciliationRecord(record) {
      try {
        const inserted = await pool.query(
          `INSERT INTO finops_reconciliation_record (
            reconciliation_id, dedup_key, project_id, period_start,
            source_batch_id, status, processed_count, error_code,
            error_message, created_at, completed_at
          ) VALUES (
            $1,$2,$3,$4::date,$5,$6,$7,$8,$9,NOW(),$10::timestamptz
          )
          ON CONFLICT (dedup_key) DO NOTHING
          RETURNING reconciliation_id`,
          [
            record.reconciliationId,
            record.dedupKey,
            record.projectId,
            record.periodStart,
            record.sourceBatchId,
            record.status,
            record.processedCount,
            record.errorCode,
            record.errorMessage,
            record.completedAt,
          ],
        );
        if (inserted.rowCount === 1) return { outcome: "created" as const };
        const existing = await pool.query(
          `SELECT * FROM finops_reconciliation_record WHERE dedup_key = $1 LIMIT 1`,
          [record.dedupKey],
        );
        if (existing.rowCount !== 1) {
          return {
            outcome: "failed" as const,
            message: "reconciliation record missing after conflict",
            retryable: true,
          };
        }
        return {
          outcome: "duplicate" as const,
          existing: rowToRecon(existing.rows[0] as Record<string, unknown>),
        };
      } catch (error) {
        const sanitized = sanitizeDbError(error);
        return {
          outcome: "failed" as const,
          message: sanitized.message,
          retryable: sanitized.retryable,
        };
      }
    },

    async completeReconciliationRecord(input) {
      await pool.query(
        `UPDATE finops_reconciliation_record
         SET status = $2,
             processed_count = $3,
             error_code = $4,
             error_message = $5,
             completed_at = $6::timestamptz
         WHERE reconciliation_id = $1`,
        [
          input.reconciliationId,
          input.status,
          input.processedCount,
          input.errorCode,
          input.errorMessage,
          input.completedAt,
        ],
      );
    },
  };
}
```

### `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsPriceCatalog.ts`

```ts
/**
 * FinOps T2 — PostgreSQL R3 price catalog adapter.
 * Empty catalog ⇒ unavailable estimation (no invented tariffs).
 */

import type { Pool } from "pg";
import { parseMoneyString } from "../../domain/money";
import type {
  FinOpsPriceCatalogEntry,
  FinOpsPriceCatalogLookupQuery,
  FinOpsPriceCatalogLookupResult,
  FinOpsPriceCatalogPort,
} from "../../ports/finopsPriceCatalogPort";

function rowToEntry(row: Record<string, unknown>): FinOpsPriceCatalogEntry {
  const currency = String(row.currency);
  return {
    catalogEntryId: String(row.catalog_entry_id),
    catalogVersion: String(row.catalog_version),
    provider: String(row.provider),
    model: String(row.model),
    unit: String(row.unit),
    billingQuantum: BigInt(String(row.billing_quantum)),
    ratePerQuantum: parseMoneyString(String(row.amount_per_quantum), currency),
    validFrom:
      row.valid_from instanceof Date
        ? row.valid_from.toISOString()
        : String(row.valid_from),
    validTo:
      row.valid_to === null || row.valid_to === undefined
        ? null
        : row.valid_to instanceof Date
          ? row.valid_to.toISOString()
          : String(row.valid_to),
  };
}

export function createPostgresFinOpsPriceCatalog(
  pool: Pool,
): FinOpsPriceCatalogPort {
  return {
    async lookup(
      query: FinOpsPriceCatalogLookupQuery,
    ): Promise<FinOpsPriceCatalogLookupResult> {
      const params: unknown[] = [
        query.provider,
        query.model,
        query.unit,
        query.currency,
        query.at,
      ];
      let sql = `
        SELECT * FROM finops_price_catalog_entry
        WHERE provider = $1
          AND model = $2
          AND unit = $3
          AND currency = $4
          AND valid_from <= $5::timestamptz
          AND (valid_to IS NULL OR valid_to > $5::timestamptz)
      `;
      if (query.catalogVersion) {
        params.push(query.catalogVersion);
        sql += ` AND catalog_version = $6`;
      }
      sql += ` ORDER BY valid_from DESC LIMIT 1`;

      const result = await pool.query(sql, params);
      if (result.rowCount !== 1) {
        return {
          status: "unavailable",
          reason: "no catalog entry configured for provider/model/unit/currency",
        };
      }
      return {
        status: "found",
        entry: rowToEntry(result.rows[0] as Record<string, unknown>),
      };
    },
  };
}
```

### `projects/sfia-studio/app/lib/oa/finops/infrastructure/memory/memoryFinOpsT2.ts`

```ts
/**
 * In-memory FinOps T2 ports for unit tests (no Postgres).
 */

import type {
  FinOpsCostEvent,
  FinOpsCostEventInsertResult,
  FinOpsProjectPeriodAggregate,
  FinOpsReconciliationRecord,
} from "../../application/types.aggregate";
import type { FinOpsAggregatePort } from "../../ports/finopsAggregatePort";
import type {
  FinOpsPriceCatalogEntry,
  FinOpsPriceCatalogPort,
} from "../../ports/finopsPriceCatalogPort";
import type { FinOpsReconciliationPort } from "../../ports/finopsReconciliationPort";

export function createMemoryFinOpsAggregateStore(
  reconciliation?: {
    readonly listCostEventsForProjectPeriod: FinOpsReconciliationPort["listCostEventsForProjectPeriod"];
  },
): FinOpsAggregatePort & {
  readonly _rows: Map<string, FinOpsProjectPeriodAggregate>;
} {
  const rows = new Map<string, FinOpsProjectPeriodAggregate>();
  const keyOf = (projectId: string, periodStart: string, currency: string) =>
    `${projectId}|${periodStart}|${currency}`;

  /** Per project+period async mutex (unit-test stand-in; PG uses advisory locks). */
  const exclusiveChains = new Map<string, Promise<unknown>>();

  const replaceLocal = (input: {
    projectId: string;
    periodStart: string;
    aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>;
  }) => {
    for (const [k, v] of [...rows.entries()]) {
      if (v.projectId === input.projectId && v.periodStart === input.periodStart) {
        rows.delete(k);
      }
    }
    for (const agg of input.aggregates) {
      rows.set(keyOf(agg.projectId, agg.periodStart, agg.currency), agg);
    }
  };

  return {
    _rows: rows,
    async replaceProjectPeriodAggregates(input) {
      replaceLocal(input);
    },
    async readAggregate(key) {
      return rows.get(keyOf(key.projectId, key.periodStart, key.currency)) ?? null;
    },
    async listAggregatesForProjectPeriod(input) {
      return [...rows.values()]
        .filter(
          (r) =>
            r.projectId === input.projectId &&
            r.periodStart === input.periodStart,
        )
        .sort((a, b) => a.currency.localeCompare(b.currency));
    },
    async withExclusiveProjectPeriodRebuild(input, work) {
      const lockKey = `${input.projectId}|${input.periodStart}`;
      const prev = exclusiveChains.get(lockKey) ?? Promise.resolve();
      let release!: () => void;
      const gate = new Promise<void>((resolve) => {
        release = resolve;
      });
      const next = prev.then(() => gate);
      exclusiveChains.set(lockKey, next.catch(() => undefined));
      await prev.catch(() => undefined);
      try {
        const costSource = reconciliation;
        return await work({
          async listAllCostEventsForPeriod() {
            if (!costSource) {
              throw new Error(
                "memory aggregate exclusive rebuild requires reconciliation wiring",
              );
            }
            return costSource.listCostEventsForProjectPeriod({
              projectId: input.projectId,
              periodStart: input.periodStart,
            });
          },
          async listAggregates() {
            return [...rows.values()]
              .filter(
                (r) =>
                  r.projectId === input.projectId &&
                  r.periodStart === input.periodStart,
              )
              .sort((a, b) => a.currency.localeCompare(b.currency));
          },
          async replaceAggregates(aggregates) {
            replaceLocal({
              projectId: input.projectId,
              periodStart: input.periodStart,
              aggregates,
            });
          },
        });
      } finally {
        release();
      }
    },
  };
}

export function createMemoryFinOpsReconciliation(): FinOpsReconciliationPort & {
  readonly _costEvents: FinOpsCostEvent[];
  readonly _recon: Map<string, FinOpsReconciliationRecord>;
} {
  const costEvents: FinOpsCostEvent[] = [];
  const recon = new Map<string, FinOpsReconciliationRecord>();
  const byDedup = new Map<string, FinOpsCostEvent>();

  return {
    _costEvents: costEvents,
    _recon: recon,
    async insertCostEvent(event): Promise<FinOpsCostEventInsertResult> {
      const existing = byDedup.get(event.dedupKey);
      if (existing) {
        const same =
          existing.amount === event.amount &&
          existing.evidenceClass === event.evidenceClass &&
          existing.correctionRef === event.correctionRef &&
          existing.executionRunId === event.executionRunId;
        if (!same) {
          return {
            outcome: "conflict",
            code: "FINOPS_COST_DEDUP_CONFLICT",
            message: "FinOps cost dedup conflict with divergent payload",
          };
        }
        return { outcome: "duplicate", costEventId: existing.costEventId };
      }
      costEvents.push(event);
      byDedup.set(event.dedupKey, event);
      return { outcome: "created", costEventId: event.costEventId };
    },
    async listCostEventsForProjectPeriod(input) {
      return costEvents.filter(
        (e) =>
          e.projectId === input.projectId &&
          e.periodStart === input.periodStart &&
          (input.currency === undefined || e.currency === input.currency),
      );
    },
    async findReconciliationByDedup(dedupKey) {
      return recon.get(dedupKey) ?? null;
    },
    async insertReconciliationRecord(record) {
      const existing = recon.get(record.dedupKey);
      if (existing) {
        return { outcome: "duplicate" as const, existing };
      }
      recon.set(record.dedupKey, record);
      return { outcome: "created" as const };
    },
    async completeReconciliationRecord(input) {
      for (const [k, v] of recon.entries()) {
        if (v.reconciliationId === input.reconciliationId) {
          recon.set(k, {
            ...v,
            status: input.status,
            processedCount: input.processedCount,
            errorCode: input.errorCode,
            errorMessage: input.errorMessage,
            completedAt: input.completedAt,
          });
        }
      }
    },
  };
}

/** Pair memory aggregate + reconciliation so exclusive rebuild can list events. */
export function createMemoryFinOpsT2Pair(): {
  readonly reconciliation: ReturnType<typeof createMemoryFinOpsReconciliation>;
  readonly aggregates: ReturnType<typeof createMemoryFinOpsAggregateStore>;
} {
  const reconciliation = createMemoryFinOpsReconciliation();
  const aggregates = createMemoryFinOpsAggregateStore(reconciliation);
  return { reconciliation, aggregates };
}

/** Fictitious fixture catalog — NOT real provider tariffs. */
export function createMemoryFinOpsPriceCatalog(
  entries: ReadonlyArray<FinOpsPriceCatalogEntry>,
): FinOpsPriceCatalogPort {
  return {
    async lookup(query) {
      const matches = entries.filter((e) => {
        if (e.provider !== query.provider) return false;
        if (e.model !== query.model) return false;
        if (e.unit !== query.unit) return false;
        if (e.ratePerQuantum.currency !== query.currency) return false;
        if (query.catalogVersion && e.catalogVersion !== query.catalogVersion) {
          return false;
        }
        if (e.validFrom > query.at) return false;
        if (e.validTo !== null && e.validTo <= query.at) return false;
        return true;
      });
      matches.sort((a, b) => (a.validFrom < b.validFrom ? 1 : -1));
      if (matches.length === 0) {
        return {
          status: "unavailable",
          reason: "no catalog entry configured for provider/model/unit/currency",
        };
      }
      return { status: "found", entry: matches[0]! };
    },
  };
}
```

### `projects/sfia-studio/app/db/migrations/1754600000000_finops-t2-aggregation-reconciliation.js`

```js
/**
 * Migration: FinOps T2 aggregation + reconciliation (Money adjacent to T1 ledger).
 *
 * Money persistence choice (Delivery implementation):
 *   Adjacent append-only table `finops_cost_event` — T1 `finops_usage_event`
 *   remains usage-only / append-only without Money columns.
 *
 * A1: durable derived aggregates in `finops_usage_aggregate` (rebuildable).
 * R3: versioned catalog table `finops_price_catalog_entry` (no seed tariffs).
 * Recon: `finops_reconciliation_record` for on-demand idempotent batches.
 *
 * Reserved path: 1754600000000 (before T6 1754600001000).
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.createTable("finops_cost_event", {
    cost_event_id: { type: "text", primaryKey: true, notNull: true },
    dedup_key: { type: "text", notNull: true },
    project_id: { type: "text", notNull: true },
    execution_run_id: { type: "text", notNull: true },
    usage_event_id: { type: "text" },
    period_start: { type: "date", notNull: true },
    currency: { type: "text", notNull: true },
    amount: { type: "numeric(20,8)" },
    evidence_class: { type: "text", notNull: true },
    source_of_truth: { type: "text", notNull: true },
    estimation_status: { type: "text", notNull: true },
    correction_ref: { type: "text" },
    catalog_version: { type: "text" },
    provider: { type: "text", notNull: true },
    model: { type: "text" },
    unit: { type: "text" },
    billing_quantum: { type: "numeric(20,0)" },
    usage_quantity: { type: "numeric(20,0)" },
    occurred_at: { type: "timestamptz", notNull: true },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
  });

  pgm.addConstraint("finops_cost_event", "finops_cost_event_dedup_key_key", {
    unique: ["dedup_key"],
  });

  pgm.addConstraint("finops_cost_event", "finops_cost_event_evidence_class_chk", {
    check: "evidence_class IN ('estimated', 'observed', 'billed', 'unknown')",
  });

  pgm.addConstraint(
    "finops_cost_event",
    "finops_cost_event_source_of_truth_chk",
    {
      check:
        "source_of_truth IN ('BILLED', 'PROVIDER_OBSERVED', 'API_USAGE', 'LOCAL_COUNT', 'PARAMETRIC_ESTIMATE', 'UNKNOWN')",
    },
  );

  pgm.addConstraint(
    "finops_cost_event",
    "finops_cost_event_estimation_status_chk",
    {
      check: "estimation_status IN ('available', 'unavailable', 'unknown')",
    },
  );

  pgm.addConstraint("finops_cost_event", "finops_cost_event_currency_chk", {
    check: "currency ~ '^[A-Z]{3}$'",
  });

  pgm.addConstraint("finops_cost_event", "finops_cost_event_period_start_chk", {
    check: "period_start = date_trunc('month', period_start::timestamp)::date",
  });

  pgm.createIndex("finops_cost_event", ["project_id", "period_start", "currency"], {
    name: "finops_cost_event_project_period_currency_idx",
  });

  pgm.sql(`
CREATE OR REPLACE FUNCTION finops_cost_event_append_only()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  RAISE EXCEPTION 'finops_cost_event is append-only';
END;
$$;
`);

  pgm.sql(`
CREATE TRIGGER trg_finops_cost_event_no_update
BEFORE UPDATE ON finops_cost_event
FOR EACH ROW
EXECUTE FUNCTION finops_cost_event_append_only();
`);

  pgm.sql(`
CREATE TRIGGER trg_finops_cost_event_no_delete
BEFORE DELETE ON finops_cost_event
FOR EACH ROW
EXECUTE FUNCTION finops_cost_event_append_only();
`);

  pgm.createTable("finops_usage_aggregate", {
    project_id: { type: "text", notNull: true },
    period_start: { type: "date", notNull: true },
    currency: { type: "text", notNull: true },
    estimated_amount: {
      type: "numeric(20,8)",
      notNull: true,
      default: "0",
    },
    observed_amount: {
      type: "numeric(20,8)",
      notNull: true,
      default: "0",
    },
    billed_amount: {
      type: "numeric(20,8)",
      notNull: true,
      default: "0",
    },
    unknown_amount: {
      type: "numeric(20,8)",
      notNull: true,
      default: "0",
    },
    input_tokens_sum: { type: "bigint" },
    output_tokens_sum: { type: "bigint" },
    total_tokens_sum: { type: "bigint" },
    cost_event_count: { type: "bigint", notNull: true, default: 0 },
    unavailable_estimation_count: {
      type: "bigint",
      notNull: true,
      default: 0,
    },
    rebuild_version: { type: "bigint", notNull: true, default: 1 },
    rebuilt_at: { type: "timestamptz", notNull: true },
  });

  pgm.addConstraint("finops_usage_aggregate", "finops_usage_aggregate_pkey", {
    primaryKey: ["project_id", "period_start", "currency"],
  });

  pgm.addConstraint("finops_usage_aggregate", "finops_usage_aggregate_currency_chk", {
    check: "currency ~ '^[A-Z]{3}$'",
  });

  pgm.addConstraint(
    "finops_usage_aggregate",
    "finops_usage_aggregate_period_start_chk",
    {
      check:
        "period_start = date_trunc('month', period_start::timestamp)::date",
    },
  );

  pgm.createTable("finops_price_catalog_entry", {
    catalog_entry_id: { type: "text", primaryKey: true, notNull: true },
    catalog_version: { type: "text", notNull: true },
    provider: { type: "text", notNull: true },
    model: { type: "text", notNull: true },
    unit: { type: "text", notNull: true },
    billing_quantum: { type: "numeric(20,0)", notNull: true },
    currency: { type: "text", notNull: true },
    amount_per_quantum: { type: "numeric(20,8)", notNull: true },
    valid_from: { type: "timestamptz", notNull: true },
    valid_to: { type: "timestamptz" },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
  });

  pgm.addConstraint(
    "finops_price_catalog_entry",
    "finops_price_catalog_entry_currency_chk",
    { check: "currency ~ '^[A-Z]{3}$'" },
  );

  pgm.addConstraint(
    "finops_price_catalog_entry",
    "finops_price_catalog_entry_quantum_chk",
    { check: "billing_quantum > 0" },
  );

  pgm.addConstraint(
    "finops_price_catalog_entry",
    "finops_price_catalog_entry_uniq",
    {
      unique: [
        "catalog_version",
        "provider",
        "model",
        "unit",
        "currency",
        "valid_from",
      ],
    },
  );

  pgm.createTable("finops_reconciliation_record", {
    reconciliation_id: { type: "text", primaryKey: true, notNull: true },
    dedup_key: { type: "text", notNull: true },
    project_id: { type: "text", notNull: true },
    period_start: { type: "date", notNull: true },
    source_batch_id: { type: "text", notNull: true },
    status: { type: "text", notNull: true },
    processed_count: { type: "bigint", notNull: true, default: 0 },
    error_code: { type: "text" },
    error_message: { type: "text" },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
    completed_at: { type: "timestamptz" },
  });

  pgm.addConstraint(
    "finops_reconciliation_record",
    "finops_reconciliation_record_dedup_key_key",
    { unique: ["dedup_key"] },
  );

  pgm.addConstraint(
    "finops_reconciliation_record",
    "finops_reconciliation_record_status_chk",
    { check: "status IN ('succeeded', 'failed')" },
  );
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  pgm.sql(`
DO $$
DECLARE
  cost_count bigint;
  agg_count bigint;
BEGIN
  SELECT COUNT(*) INTO cost_count FROM finops_cost_event;
  SELECT COUNT(*) INTO agg_count FROM finops_usage_aggregate;
  IF cost_count > 0 OR agg_count > 0 THEN
    RAISE EXCEPTION
      'Refusing to drop T2 FinOps tables: cost_event=% aggregate=%',
      cost_count, agg_count;
  END IF;
END $$;
`);

  pgm.dropTable("finops_reconciliation_record");
  pgm.dropTable("finops_price_catalog_entry");
  pgm.dropTable("finops_usage_aggregate");

  pgm.sql(
    `DROP TRIGGER IF EXISTS trg_finops_cost_event_no_delete ON finops_cost_event;`,
  );
  pgm.sql(
    `DROP TRIGGER IF EXISTS trg_finops_cost_event_no_update ON finops_cost_event;`,
  );
  pgm.sql(`DROP FUNCTION IF EXISTS finops_cost_event_append_only();`);
  pgm.dropTable("finops_cost_event");
};
```

### `projects/sfia-studio/app/__tests__/oa/finops/t2.money.unit.test.ts`

```ts
/**
 * @vitest-environment node
 *
 * FinOps T2 — Money exact decimal + HALF_EVEN (no JS float authority).
 */
import { describe, expect, it } from "vitest";
import {
  FINOPS_MONEY_SCALE,
  addMoney,
  divideHalfEven,
  formatMoneyString,
  moneyEquals,
  moneyFromMinor,
  moneyFromRateUsageHalfEven,
  parseMoneyString,
  sumMoney,
} from "@/lib/oa/finops/domain/money";

describe("FinOps T2 Money", () => {
  it("uses scale 8 and round-trips canonical decimal strings without Number", () => {
    expect(FINOPS_MONEY_SCALE).toBe(8);
    const m = parseMoneyString("12.34567890", "usd");
    expect(m.currency).toBe("USD");
    expect(formatMoneyString(m)).toBe("12.34567890");
    expect(m.amountMinor).toBe(BigInt(1234567890));
  });

  it("rejects over-scale fractional strings (quantize only at rate×usage)", () => {
    expect(() => parseMoneyString("1.000000001", "USD")).toThrow(
      /more than 8 fractional digits/,
    );
  });

  it("sums scale-8 amounts without re-rounding", () => {
    const a = parseMoneyString("0.00000001", "USD");
    const b = parseMoneyString("0.00000001", "USD");
    const c = addMoney(a, b);
    expect(formatMoneyString(c)).toBe("0.00000002");
    const total = sumMoney("USD", [
      parseMoneyString("1.00000001", "USD"),
      parseMoneyString("2.00000002", "USD"),
      parseMoneyString("3.00000003", "USD"),
    ]);
    expect(formatMoneyString(total)).toBe("6.00000006");
  });

  it("HALF_EVEN positive tie: 5/2 → 2 (even)", () => {
    expect(divideHalfEven(BigInt(5), BigInt(2))).toBe(BigInt(2));
  });

  it("HALF_EVEN positive tie: 3/2 → 2 (odd 1 → even 2)", () => {
    expect(divideHalfEven(BigInt(3), BigInt(2))).toBe(BigInt(2));
  });

  it("HALF_EVEN positive non-tie rounds normally", () => {
    expect(divideHalfEven(BigInt(10), BigInt(3))).toBe(BigInt(3)); // 3.333… → 3
    expect(divideHalfEven(BigInt(11), BigInt(3))).toBe(BigInt(4)); // 3.666… → 4
  });

  it("HALF_EVEN negative ties are symmetric on magnitude", () => {
    expect(divideHalfEven(BigInt(-5), BigInt(2))).toBe(BigInt(-2));
    expect(divideHalfEven(BigInt(-3), BigInt(2))).toBe(BigInt(-2));
    expect(divideHalfEven(BigInt(5), BigInt(-2))).toBe(BigInt(-2));
  });

  it("rate×usage HALF_EVEN positive tie cases (fictitious fixtures)", () => {
    // rate 0.00000005 per quantum 1 → usage 1 => 0.00000005
    // Construct midpoint: rateMinor * usage / quantum = X + 0.5
    // rateMinor=5, usage=1, quantum=2 → 2.5 → 2 (even)
    const rate = moneyFromMinor(BigInt(5), "USD");
    const midEven = moneyFromRateUsageHalfEven({
      ratePerQuantum: rate,
      usageCount: BigInt(1),
      billingQuantum: BigInt(2),
    });
    expect(formatMoneyString(midEven)).toBe("0.00000002");

    // rateMinor=3, usage=1, quantum=2 → 1.5 → 2
    const midOdd = moneyFromRateUsageHalfEven({
      ratePerQuantum: moneyFromMinor(BigInt(3), "USD"),
      usageCount: BigInt(1),
      billingQuantum: BigInt(2),
    });
    expect(formatMoneyString(midOdd)).toBe("0.00000002");
  });

  it("rate×usage HALF_EVEN negative correction tie cases", () => {
    const negativeRate = moneyFromMinor(BigInt(-5), "USD");
    const mid = moneyFromRateUsageHalfEven({
      ratePerQuantum: negativeRate,
      usageCount: BigInt(1),
      billingQuantum: BigInt(2),
    });
    expect(formatMoneyString(mid)).toBe("-0.00000002");

    const midOdd = moneyFromRateUsageHalfEven({
      ratePerQuantum: moneyFromMinor(BigInt(-3), "USD"),
      usageCount: BigInt(1),
      billingQuantum: BigInt(2),
    });
    expect(formatMoneyString(midOdd)).toBe("-0.00000002");
  });

  it("documents pedagogical midpoint examples at money scale", () => {
    // 2.500000005 midway between 2.50000000 and 2.50000001 → even 2.50000000
    // Represent as (rateMinor * usage) / quantum with exact midpoint.
    // 250000000.5 minor? Use: numerator=500000001, denom=2 → 250000000.5 → 250000000
    expect(divideHalfEven(BigInt(500000001), BigInt(2))).toBe(BigInt(250000000));
    expect(formatMoneyString(moneyFromMinor(BigInt(250000000), "USD"))).toBe(
      "2.50000000",
    );

    // 2.500000015 midway between …001 and …002 → even …002
    // numerator=500000003 / 2 = 250000001.5 → 250000002
    expect(divideHalfEven(BigInt(500000003), BigInt(2))).toBe(BigInt(250000002));
    expect(formatMoneyString(moneyFromMinor(BigInt(250000002), "USD"))).toBe(
      "2.50000002",
    );
  });

  it("rejects currency mismatch and invalid quantum", () => {
    expect(() =>
      addMoney(parseMoneyString("1.00", "USD"), parseMoneyString("1.00", "EUR")),
    ).toThrow(/different currencies/);
    expect(() =>
      moneyFromRateUsageHalfEven({
        ratePerQuantum: parseMoneyString("1.00", "USD"),
        usageCount: BigInt(1),
        billingQuantum: BigInt(0),
      }),
    ).toThrow(/positive integer/);
  });

  it("moneyEquals compares currency and minor units", () => {
    expect(
      moneyEquals(parseMoneyString("1.0", "USD"), parseMoneyString("1.00000000", "USD")),
    ).toBe(true);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/t2.aggregate.unit.test.ts`

```ts
/**
 * @vitest-environment node
 *
 * FinOps T2 — A1 aggregate rebuild + R3 estimation (fictitious catalog only).
 */
import { describe, expect, it } from "vitest";
import { estimateUsageCost } from "@/lib/oa/finops/application/estimateUsageCost";
import {
  buildAggregatesFromCostEvents,
  recomputeAggregates,
} from "@/lib/oa/finops/application/recomputeAggregates";
import { deriveCostEventIdentity } from "@/lib/oa/finops/application/t2Identity";
import type { FinOpsCostEvent } from "@/lib/oa/finops/application/types.aggregate";
import { formatMoneyString, parseMoneyString } from "@/lib/oa/finops/domain/money";
import {
  createMemoryFinOpsPriceCatalog,
  createMemoryFinOpsT2Pair,
} from "@/lib/oa/finops/infrastructure/memory/memoryFinOpsT2";

const FICTITIOUS_RATE = parseMoneyString("0.00010000", "USD"); // fixture — NOT a provider tariff

function costEvent(
  partial: Omit<FinOpsCostEvent, "costEventId" | "dedupKey" | "correctionRef"> & {
    correctionRef?: string | null;
  },
): FinOpsCostEvent {
  const correctionRef = partial.correctionRef ?? null;
  const identity = deriveCostEventIdentity({
    projectId: partial.projectId,
    executionRunId: partial.executionRunId,
    evidenceClass: partial.evidenceClass,
    correctionRef,
    amount: partial.amount,
    currency: partial.currency,
  });
  return {
    ...partial,
    correctionRef,
    costEventId: identity.costEventId,
    dedupKey: identity.dedupKey,
  };
}

describe("FinOps T2 aggregates", () => {
  it("rebuilds A1 from cost events with exact SUM (no re-round)", () => {
    const events: FinOpsCostEvent[] = [
      costEvent({
        projectId: "p1",
        executionRunId: "r1",
        usageEventId: null,
        periodStart: "2026-08-01",
        currency: "USD",
        amount: "0.00000001",
        evidenceClass: "estimated",
        sourceOfTruth: "PARAMETRIC_ESTIMATE",
        estimationStatus: "available",
        catalogVersion: "fix-v1",
        provider: "fixture-provider",
        model: "fixture-model",
        unit: "token",
        billingQuantum: "1000",
        usageQuantity: "10",
        occurredAt: "2026-08-07T10:00:00.000Z",
      }),
      costEvent({
        projectId: "p1",
        executionRunId: "r2",
        usageEventId: null,
        periodStart: "2026-08-01",
        currency: "USD",
        amount: "0.00000001",
        evidenceClass: "estimated",
        sourceOfTruth: "PARAMETRIC_ESTIMATE",
        estimationStatus: "available",
        catalogVersion: "fix-v1",
        provider: "fixture-provider",
        model: "fixture-model",
        unit: "token",
        billingQuantum: "1000",
        usageQuantity: "10",
        occurredAt: "2026-08-07T11:00:00.000Z",
      }),
      costEvent({
        projectId: "p1",
        executionRunId: "r3",
        usageEventId: null,
        periodStart: "2026-08-01",
        currency: "USD",
        amount: "1.25000000",
        evidenceClass: "observed",
        sourceOfTruth: "PROVIDER_OBSERVED",
        estimationStatus: "available",
        catalogVersion: null,
        provider: "fixture-provider",
        model: "fixture-model",
        unit: null,
        billingQuantum: null,
        usageQuantity: null,
        occurredAt: "2026-08-07T12:00:00.000Z",
        correctionRef: "corr-obs-1",
      }),
    ];

    const aggs = buildAggregatesFromCostEvents({
      projectId: "p1",
      periodStart: "2026-08-01",
      events,
      rebuiltAt: "2026-08-07T12:30:00.000Z",
    });
    expect(aggs).toHaveLength(1);
    expect(aggs[0]!.estimatedAmount).toBe("0.00000002");
    expect(aggs[0]!.observedAmount).toBe("1.25000000");
    expect(aggs[0]!.billedAmount).toBe("0.00000000");
    expect(aggs[0]!.costEventCount).toBe(3);
  });

  it("counts unavailable estimations without inventing amounts", async () => {
    const catalog = createMemoryFinOpsPriceCatalog([]);
    const estimate = await estimateUsageCost(catalog, {
      provider: "openai",
      model: "gpt-anything",
      unit: "token",
      currency: "USD",
      usageQuantity: BigInt(100),
      occurredAt: "2026-08-07T10:00:00.000Z",
    });
    expect(estimate.status).toBe("unavailable");

    const events: FinOpsCostEvent[] = [
      costEvent({
        projectId: "p1",
        executionRunId: "r1",
        usageEventId: null,
        periodStart: "2026-08-01",
        currency: "USD",
        amount: null,
        evidenceClass: "estimated",
        sourceOfTruth: "UNKNOWN",
        estimationStatus: "unavailable",
        catalogVersion: null,
        provider: "openai",
        model: "gpt-anything",
        unit: "token",
        billingQuantum: null,
        usageQuantity: "100",
        occurredAt: "2026-08-07T10:00:00.000Z",
      }),
    ];
    const aggs = buildAggregatesFromCostEvents({
      projectId: "p1",
      periodStart: "2026-08-01",
      events,
      rebuiltAt: "2026-08-07T10:01:00.000Z",
    });
    expect(aggs[0]!.unavailableEstimationCount).toBe(1);
    expect(aggs[0]!.estimatedAmount).toBe("0.00000000");
  });

  it("estimates with fictitious R3 catalog using HALF_EVEN once", async () => {
    const catalog = createMemoryFinOpsPriceCatalog([
      {
        catalogEntryId: "fix-entry-1",
        catalogVersion: "fixture-v1",
        provider: "fixture-provider",
        model: "fixture-model",
        unit: "token",
        billingQuantum: BigInt(1000),
        ratePerQuantum: FICTITIOUS_RATE,
        validFrom: "2026-01-01T00:00:00.000Z",
        validTo: null,
      },
    ]);
    const estimate = await estimateUsageCost(catalog, {
      provider: "fixture-provider",
      model: "fixture-model",
      unit: "token",
      currency: "USD",
      usageQuantity: BigInt(500),
      occurredAt: "2026-08-07T10:00:00.000Z",
    });
    expect(estimate.status).toBe("available");
    if (estimate.status !== "available") return;
    // 0.00010000 * 500 / 1000 = 0.00005000 exactly
    expect(estimate.amountCanonical).toBe("0.00005000");
    expect(formatMoneyString(estimate.amount)).toBe("0.00005000");
  });

  it("recomputeAggregates persists rebuilt projection via port", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const event = costEvent({
      projectId: "p1",
      executionRunId: "r1",
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: "2.00000000",
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      catalogVersion: null,
      provider: "fixture-provider",
      model: null,
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T10:00:00.000Z",
      correctionRef: "bill-1",
    });
    await reconciliation.insertCostEvent(event);

    const result = await recomputeAggregates(
      {
        aggregates,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01" },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.aggregates[0]!.billedAmount).toBe("2.00000000");
    expect(result.aggregates[0]!.rebuildVersion).toBe(1);

    const again = await recomputeAggregates(
      {
        aggregates,
        nowIso: () => "2026-08-07T13:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01" },
    );
    expect(again.outcome).toBe("succeeded");
    if (again.outcome !== "succeeded") return;
    expect(again.aggregates[0]!.rebuildVersion).toBe(2);
  });

  it("full rebuild preserves all currencies (no per-currency wipe)", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    for (const [currency, amount] of [
      ["USD", "1.00000000"],
      ["EUR", "2.00000000"],
    ] as const) {
      await reconciliation.insertCostEvent(
        costEvent({
          projectId: "p-mc",
          executionRunId: `run-${currency}`,
          usageEventId: null,
          periodStart: "2026-08-01",
          currency,
          amount,
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          estimationStatus: "available",
          catalogVersion: null,
          provider: "fixture-provider",
          model: null,
          unit: null,
          billingQuantum: null,
          usageQuantity: null,
          occurredAt: "2026-08-07T10:00:00.000Z",
          correctionRef: `bill-${currency}`,
        }),
      );
    }
    const result = await recomputeAggregates(
      { aggregates, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "p-mc", periodStart: "2026-08-01" },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.aggregates.map((a) => a.currency).sort()).toEqual([
      "EUR",
      "USD",
    ]);
    expect(
      result.aggregates.find((a) => a.currency === "USD")?.billedAmount,
    ).toBe("1.00000000");
    expect(
      result.aggregates.find((a) => a.currency === "EUR")?.billedAmount,
    ).toBe("2.00000000");
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/t2.reconciliation.unit.test.ts`

```ts
/**
 * @vitest-environment node
 *
 * FinOps T2 — reconcileProjectPeriod (on-demand, bounded, idempotent).
 */
import { describe, expect, it } from "vitest";
import { reconcileProjectPeriod } from "@/lib/oa/finops/application/reconcileProjectPeriod";
import { deriveCostEventIdentity } from "@/lib/oa/finops/application/t2Identity";
import { createMemoryFinOpsT2Pair } from "@/lib/oa/finops/infrastructure/memory/memoryFinOpsT2";

describe("FinOps T2 reconciliation", () => {
  it("applies estimated→observed→billed via append-only correction events", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();

    // Prior estimated cost event (adjacent Money ledger).
    const estimatedIdentity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "run-1",
      evidenceClass: "estimated",
      correctionRef: null,
      amount: "0.10000000",
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: estimatedIdentity.costEventId,
      dedupKey: estimatedIdentity.dedupKey,
      projectId: "p1",
      executionRunId: "run-1",
      usageEventId: "evt_usage_1",
      periodStart: "2026-08-01",
      currency: "USD",
      amount: "0.10000000",
      evidenceClass: "estimated",
      sourceOfTruth: "PARAMETRIC_ESTIMATE",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: "fixture-v1",
      provider: "fixture-provider",
      model: "fixture-model",
      unit: "token",
      billingQuantum: "1000",
      usageQuantity: "1000",
      occurredAt: "2026-08-07T10:00:00.000Z",
    });

    const observed = await reconcileProjectPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-obs-1",
        facts: [
          {
            executionRunId: "run-1",
            usageEventId: "evt_usage_1",
            evidenceClass: "observed",
            sourceOfTruth: "PROVIDER_OBSERVED",
            amount: "0.12000000",
            currency: "USD",
            correctionRef: "corr-obs-run-1",
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:05:00.000Z",
          },
        ],
      },
    );
    expect(observed.outcome).toBe("succeeded");
    if (observed.outcome !== "succeeded") return;
    expect(observed.createdCount).toBe(1);
    const observedUsd = observed.aggregates.find((a) => a.currency === "USD");
    expect(observedUsd?.estimatedAmount).toBe("0.10000000");
    expect(observedUsd?.observedAmount).toBe("0.12000000");

    const billed = await reconcileProjectPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-bill-1",
        facts: [
          {
            executionRunId: "run-1",
            usageEventId: "evt_usage_1",
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            amount: "0.11500000",
            currency: "USD",
            correctionRef: "corr-bill-run-1",
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:10:00.000Z",
          },
        ],
      },
    );
    expect(billed.outcome).toBe("succeeded");
    if (billed.outcome !== "succeeded") return;
    const billedUsd = billed.aggregates.find((a) => a.currency === "USD");
    expect(billedUsd?.billedAmount).toBe("0.11500000");
    expect(reconciliation._costEvents).toHaveLength(3);
  });

  it("is idempotent on project+period+sourceBatchId", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const input = {
      projectId: "p1",
      periodStart: "2026-08-01",
      sourceBatchId: "batch-idem-1",
      facts: [
        {
          executionRunId: "run-2",
          usageEventId: null,
          evidenceClass: "observed" as const,
          sourceOfTruth: "PROVIDER_OBSERVED" as const,
          amount: "1.00000000",
          currency: "USD",
          correctionRef: "corr-idem-1",
          provider: "fixture-provider",
          model: null,
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
      ],
    };
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const first = await reconcileProjectPeriod(deps, input);
    const second = await reconcileProjectPeriod(deps, input);
    expect(first.outcome).toBe("succeeded");
    expect(second.outcome).toBe("succeeded");
    if (first.outcome !== "succeeded" || second.outcome !== "succeeded") return;
    expect(first.idempotentReplay).toBe(false);
    expect(second.idempotentReplay).toBe(true);
    expect(reconciliation._costEvents).toHaveLength(1);
  });

  it("rejects unbounded batch and keeps failure FinOps-side", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const result = await reconcileProjectPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-too-big",
        maxFacts: 1,
        facts: [
          {
            executionRunId: "a",
            usageEventId: null,
            evidenceClass: "observed",
            sourceOfTruth: "PROVIDER_OBSERVED",
            amount: "1.00000000",
            currency: "USD",
            correctionRef: "c1",
            provider: "fixture-provider",
            model: null,
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
          {
            executionRunId: "b",
            usageEventId: null,
            evidenceClass: "observed",
            sourceOfTruth: "PROVIDER_OBSERVED",
            amount: "2.00000000",
            currency: "USD",
            correctionRef: "c2",
            provider: "fixture-provider",
            model: null,
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(result.outcome).toBe("failed");
    if (result.outcome !== "failed") return;
    expect(result.finopsSideOnly).toBe(true);
    expect(result.code).toBe("FINOPS_RECON_BATCH_TOO_LARGE");
  });

  it("duplicate correction within batch is duplicate, not conflict", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const fact = {
      executionRunId: "run-dup",
      usageEventId: null,
      evidenceClass: "observed" as const,
      sourceOfTruth: "PROVIDER_OBSERVED" as const,
      amount: "0.50000000",
      currency: "USD",
      correctionRef: "corr-dup",
      provider: "fixture-provider",
      model: null,
      occurredAt: "2026-08-07T10:00:00.000Z",
    };
    const first = await reconcileProjectPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-dup-a",
        facts: [fact],
      },
    );
    expect(first.outcome).toBe("succeeded");

    // Same correction identity in a different batch → same cost dedup
    // (correction_ref + amount + run) without sourceBatchId in cost identity
    // actually includes sourceBatchId — different batch ⇒ new event.
    // Re-run same batch is covered by recon idempotence.
    // Here: identical cost identity without changing batch uses same correction.
    const replayFacts = await reconcileProjectPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T11:05:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-dup-a",
        facts: [fact],
      },
    );
    expect(replayFacts.outcome).toBe("succeeded");
    if (replayFacts.outcome !== "succeeded") return;
    expect(replayFacts.idempotentReplay).toBe(true);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.aggregate.integration.test.ts`

```ts
/**
 * @vitest-environment node
 *
 * Requires DATABASE_URL (and preferably DATABASE_URL_DIRECT) — ephemeral local/CI Postgres only.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Pool } from "pg";
import { recomputeAggregates } from "@/lib/oa/finops/application/recomputeAggregates";
import { deriveCostEventIdentity } from "@/lib/oa/finops/application/t2Identity";
import { formatMoneyString, parseMoneyString } from "@/lib/oa/finops/domain/money";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsAggregateStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore";
import { createPostgresFinOpsPriceCatalog } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsPriceCatalog";
import { createPostgresFinOpsReconciliation } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsReconciliation";
import { estimateUsageCost } from "@/lib/oa/finops/application/estimateUsageCost";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("FinOps T2 PostgreSQL aggregate integration", () => {
  let pool: Pool;
  const suffix = `${Date.now()}`;

  beforeAll(() => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 4 });
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  it("has T2 tables with numeric(20,8) Money columns and no T1 ledger Money columns", async () => {
    const ledgerCols = await pool.query<{ column_name: string }>(
      `SELECT column_name FROM information_schema.columns
       WHERE table_name = 'finops_usage_event'`,
    );
    const ledgerNames = ledgerCols.rows.map((r) => r.column_name);
    expect(ledgerNames).not.toContain("amount");
    expect(ledgerNames).not.toContain("currency");

    const amountCol = await pool.query<{
      data_type: string;
      numeric_precision: number | null;
      numeric_scale: number | null;
    }>(
      `SELECT data_type, numeric_precision, numeric_scale
       FROM information_schema.columns
       WHERE table_name = 'finops_cost_event' AND column_name = 'amount'`,
    );
    expect(amountCol.rows[0]?.data_type).toBe("numeric");
    expect(amountCol.rows[0]?.numeric_precision).toBe(20);
    expect(amountCol.rows[0]?.numeric_scale).toBe(8);
  });

  it("round-trips numeric(20,8) Money strings without float drift", async () => {
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const amount = "123456789012.34567890";
    // Within 12 integer digits: use 1234567890.12345678
    const safe = "1234567890.12345678";
    const identity = deriveCostEventIdentity({
      projectId: `proj-t2-${suffix}`,
      executionRunId: `run-rt-${suffix}`,
      evidenceClass: "estimated",
      correctionRef: null,
      amount: safe,
      currency: "USD",
    });
    const inserted = await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId: `proj-t2-${suffix}`,
      executionRunId: `run-rt-${suffix}`,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: safe,
      evidenceClass: "estimated",
      sourceOfTruth: "PARAMETRIC_ESTIMATE",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: "fixture-v1",
      provider: "fixture-provider",
      model: "fixture-model",
      unit: "token",
      billingQuantum: "1000",
      usageQuantity: "1",
      occurredAt: "2026-08-07T10:00:00.000Z",
    });
    expect(inserted.outcome).toBe("created");
    const listed = await reconciliation.listCostEventsForProjectPeriod({
      projectId: `proj-t2-${suffix}`,
      periodStart: "2026-08-01",
      currency: "USD",
    });
    const found = listed.find((e) => e.costEventId === identity.costEventId);
    expect(found?.amount).toBe(formatMoneyString(parseMoneyString(safe, "USD")));
    void amount;
  });

  it("rebuilds A1 aggregates from cost events and applies late correction", async () => {
    const projectId = `proj-agg-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const aggregates = createPostgresFinOpsAggregateStore(pool);

    const est = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-a-${suffix}`,
      evidenceClass: "estimated",
      correctionRef: null,
      amount: "0.00000003",
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: est.costEventId,
      dedupKey: est.dedupKey,
      projectId,
      executionRunId: `run-a-${suffix}`,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: "0.00000003",
      evidenceClass: "estimated",
      sourceOfTruth: "PARAMETRIC_ESTIMATE",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: "fixture-v1",
      provider: "fixture-provider",
      model: "fixture-model",
      unit: "token",
      billingQuantum: "1",
      usageQuantity: "3",
      occurredAt: "2026-08-07T09:00:00.000Z",
    });

    const first = await recomputeAggregates(
      {
        aggregates,
        nowIso: () => "2026-08-07T09:30:00.000Z",
      },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(first.outcome).toBe("succeeded");
    if (first.outcome !== "succeeded") return;
    expect(first.aggregates[0]!.estimatedAmount).toBe("0.00000003");

    const corr = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-a-${suffix}`,
      evidenceClass: "observed",
      correctionRef: `late-${suffix}`,
      amount: "0.00000005",
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: corr.costEventId,
      dedupKey: corr.dedupKey,
      projectId,
      executionRunId: `run-a-${suffix}`,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: "0.00000005",
      evidenceClass: "observed",
      sourceOfTruth: "PROVIDER_OBSERVED",
      estimationStatus: "available",
      correctionRef: `late-${suffix}`,
      catalogVersion: null,
      provider: "fixture-provider",
      model: "fixture-model",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T09:45:00.000Z",
    });

    const second = await recomputeAggregates(
      {
        aggregates,
        nowIso: () => "2026-08-07T10:00:00.000Z",
      },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(second.outcome).toBe("succeeded");
    if (second.outcome !== "succeeded") return;
    expect(second.aggregates[0]!.estimatedAmount).toBe("0.00000003");
    expect(second.aggregates[0]!.observedAmount).toBe("0.00000005");
    expect(second.aggregates[0]!.rebuildVersion).toBe(2);
  });

  it("returns unavailable estimation when no real tariff is configured", async () => {
    const catalog = createPostgresFinOpsPriceCatalog(pool);
    const result = await estimateUsageCost(catalog, {
      provider: "openai",
      model: "gpt-4o",
      unit: "token",
      currency: "USD",
      usageQuantity: BigInt(100),
      occurredAt: "2026-08-07T10:00:00.000Z",
    });
    expect(result.status).toBe("unavailable");
  });

  it("uses fictitious catalog fixture for R3 estimation (not provider tariffs)", async () => {
    const entryId = `fix-cat-${suffix}`;
    const catalogVersion = `fixture-v1-${suffix}`;
    const model = `fixture-model-${suffix}`;
    await pool.query(
      `INSERT INTO finops_price_catalog_entry (
        catalog_entry_id, catalog_version, provider, model, unit,
        billing_quantum, currency, amount_per_quantum, valid_from, valid_to
      ) VALUES (
        $1, $2, 'fixture-provider', $3, 'token',
        1000, 'USD', '0.00010000', '2026-01-01T00:00:00Z', NULL
      )`,
      [entryId, catalogVersion, model],
    );
    const catalog = createPostgresFinOpsPriceCatalog(pool);
    const result = await estimateUsageCost(catalog, {
      provider: "fixture-provider",
      model,
      unit: "token",
      currency: "USD",
      usageQuantity: BigInt(2500),
      occurredAt: "2026-08-07T10:00:00.000Z",
    });
    expect(result.status).toBe("available");
    if (result.status !== "available") return;
    // 0.00010000 * 2500 / 1000 = 0.00025000
    expect(result.amountCanonical).toBe("0.00025000");
  });

  it("full rebuild keeps USD and EUR; USD correction does not wipe EUR", async () => {
    const projectId = `proj-mc-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const periodStart = "2026-08-01";

    async function insertBilled(
      currency: "USD" | "EUR",
      amount: string,
      ref: string,
    ) {
      const identity = deriveCostEventIdentity({
        projectId,
        executionRunId: `run-${currency}-${suffix}`,
        evidenceClass: "billed",
        correctionRef: ref,
        amount,
        currency,
      });
      const inserted = await reconciliation.insertCostEvent({
        costEventId: identity.costEventId,
        dedupKey: identity.dedupKey,
        projectId,
        executionRunId: `run-${currency}-${suffix}`,
        usageEventId: null,
        periodStart,
        currency,
        amount,
        evidenceClass: "billed",
        sourceOfTruth: "BILLED",
        estimationStatus: "available",
        correctionRef: ref,
        catalogVersion: null,
        provider: "fixture-provider",
        model: null,
        unit: null,
        billingQuantum: null,
        usageQuantity: null,
        occurredAt: "2026-08-07T10:00:00.000Z",
      });
      expect(inserted.outcome).toBe("created");
    }

    await insertBilled("USD", "10.00000000", `usd-base-${suffix}`);
    await insertBilled("EUR", "20.00000000", `eur-base-${suffix}`);

    const first = await recomputeAggregates(
      { aggregates, nowIso: () => "2026-08-07T11:00:00.000Z" },
      { projectId, periodStart },
    );
    expect(first.outcome).toBe("succeeded");
    if (first.outcome !== "succeeded") return;
    expect(first.aggregates.map((a) => a.currency).sort()).toEqual([
      "EUR",
      "USD",
    ]);
    expect(
      first.aggregates.find((a) => a.currency === "USD")?.billedAmount,
    ).toBe("10.00000000");
    expect(
      first.aggregates.find((a) => a.currency === "EUR")?.billedAmount,
    ).toBe("20.00000000");

    // Late USD correction — full rebuild must preserve EUR.
    await insertBilled("USD", "11.00000000", `usd-late-${suffix}`);
    const second = await recomputeAggregates(
      { aggregates, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart },
    );
    expect(second.outcome).toBe("succeeded");
    if (second.outcome !== "succeeded") return;
    const listed = await aggregates.listAggregatesForProjectPeriod({
      projectId,
      periodStart,
    });
    expect(listed.map((a) => a.currency).sort()).toEqual(["EUR", "USD"]);
    expect(listed.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "21.00000000",
    );
    expect(listed.find((a) => a.currency === "EUR")?.billedAmount).toBe(
      "20.00000000",
    );
  });

  it("serializes concurrent project/period rebuilds without lost updates", async () => {
    const projectId = `proj-conc-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const periodStart = "2026-08-01";

    // Seed baseline EUR so multi-currency presence is also exercised.
    const eurId = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-eur-${suffix}`,
      evidenceClass: "billed",
      correctionRef: `eur-${suffix}`,
      amount: "5.00000000",
      currency: "EUR",
    });
    await reconciliation.insertCostEvent({
      costEventId: eurId.costEventId,
      dedupKey: eurId.dedupKey,
      projectId,
      executionRunId: `run-eur-${suffix}`,
      usageEventId: null,
      periodStart,
      currency: "EUR",
      amount: "5.00000000",
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: `eur-${suffix}`,
      catalogVersion: null,
      provider: "fixture-provider",
      model: null,
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T09:00:00.000Z",
    });

    async function insertAndRebuild(label: string, amount: string) {
      const identity = deriveCostEventIdentity({
        projectId,
        executionRunId: `run-${label}-${suffix}`,
        evidenceClass: "billed",
        correctionRef: `corr-${label}-${suffix}`,
        amount,
        currency: "USD",
      });
      const inserted = await reconciliation.insertCostEvent({
        costEventId: identity.costEventId,
        dedupKey: identity.dedupKey,
        projectId,
        executionRunId: `run-${label}-${suffix}`,
        usageEventId: null,
        periodStart,
        currency: "USD",
        amount,
        evidenceClass: "billed",
        sourceOfTruth: "BILLED",
        estimationStatus: "available",
        correctionRef: `corr-${label}-${suffix}`,
        catalogVersion: null,
        provider: "fixture-provider",
        model: null,
        unit: null,
        billingQuantum: null,
        usageQuantity: null,
        occurredAt: "2026-08-07T10:00:00.000Z",
      });
      expect(inserted.outcome).toBe("created");
      return recomputeAggregates(
        { aggregates, nowIso: () => `2026-08-07T10:30:00.000Z` },
        { projectId, periodStart },
      );
    }

    const [a, b] = await Promise.all([
      insertAndRebuild("a", "1.00000000"),
      insertAndRebuild("b", "2.00000000"),
    ]);
    expect(a.outcome).toBe("succeeded");
    expect(b.outcome).toBe("succeeded");

    const listed = await aggregates.listAggregatesForProjectPeriod({
      projectId,
      periodStart,
    });
    expect(listed.map((row) => row.currency).sort()).toEqual(["EUR", "USD"]);
    expect(listed.find((row) => row.currency === "EUR")?.billedAmount).toBe(
      "5.00000000",
    );
    // Both concurrent USD corrections must be present (exact SUM, no lost update).
    expect(listed.find((row) => row.currency === "USD")?.billedAmount).toBe(
      "3.00000000",
    );
    expect(listed.find((row) => row.currency === "USD")?.costEventCount).toBe(2);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts`

```ts
/**
 * @vitest-environment node
 *
 * Requires DATABASE_URL — ephemeral local/CI Postgres only (never Neon).
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Pool } from "pg";
import { reconcileProjectPeriod } from "@/lib/oa/finops/application/reconcileProjectPeriod";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsAggregateStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore";
import { createPostgresFinOpsReconciliation } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsReconciliation";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("FinOps T2 PostgreSQL reconciliation integration", () => {
  let pool: Pool;
  const suffix = `${Date.now()}`;

  beforeAll(() => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 4 });
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  it("reconciles on-demand, recomputes aggregates, and replays idempotently", async () => {
    const projectId = `proj-recon-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };
    const input = {
      projectId,
      periodStart: "2026-08-01",
      sourceBatchId: `batch-${suffix}`,
      facts: [
        {
          executionRunId: `run-${suffix}`,
          usageEventId: null,
          evidenceClass: "billed" as const,
          sourceOfTruth: "BILLED" as const,
          amount: "9.87654321",
          currency: "USD",
          correctionRef: `corr-bill-${suffix}`,
          provider: "fixture-provider",
          model: "fixture-model",
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
      ],
    };

    const first = await reconcileProjectPeriod(deps, input);
    expect(first.outcome).toBe("succeeded");
    if (first.outcome !== "succeeded") return;
    expect(first.idempotentReplay).toBe(false);
    expect(
      first.aggregates.find((a) => a.currency === "USD")?.billedAmount,
    ).toBe("9.87654321");

    const second = await reconcileProjectPeriod(deps, input);
    expect(second.outcome).toBe("succeeded");
    if (second.outcome !== "succeeded") return;
    expect(second.idempotentReplay).toBe(true);
    expect(second.reconciliationId).toBe(first.reconciliationId);

    const read = await aggregates.readAggregate({
      projectId,
      periodStart: "2026-08-01",
      currency: "USD",
    });
    expect(read?.billedAmount).toBe("9.87654321");
  });

  it("reconciles USD+EUR in one batch and preserves both aggregates", async () => {
    const projectId = `proj-recon-mc-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };

    const first = await reconcileProjectPeriod(deps, {
      projectId,
      periodStart: "2026-08-01",
      sourceBatchId: `batch-mc-${suffix}`,
      facts: [
        {
          executionRunId: `run-usd-${suffix}`,
          usageEventId: null,
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          amount: "1.25000000",
          currency: "USD",
          correctionRef: `corr-usd-${suffix}`,
          provider: "fixture-provider",
          model: null,
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
        {
          executionRunId: `run-eur-${suffix}`,
          usageEventId: null,
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          amount: "2.50000000",
          currency: "EUR",
          correctionRef: `corr-eur-${suffix}`,
          provider: "fixture-provider",
          model: null,
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
      ],
    });
    expect(first.outcome).toBe("succeeded");
    if (first.outcome !== "succeeded") return;
    expect(first.aggregates.map((a) => a.currency).sort()).toEqual([
      "EUR",
      "USD",
    ]);
    expect(
      first.aggregates.find((a) => a.currency === "USD")?.billedAmount,
    ).toBe("1.25000000");
    expect(
      first.aggregates.find((a) => a.currency === "EUR")?.billedAmount,
    ).toBe("2.50000000");

    // USD-only correction batch — EUR must remain.
    const second = await reconcileProjectPeriod(deps, {
      projectId,
      periodStart: "2026-08-01",
      sourceBatchId: `batch-mc-usd-late-${suffix}`,
      facts: [
        {
          executionRunId: `run-usd-late-${suffix}`,
          usageEventId: null,
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          amount: "0.75000000",
          currency: "USD",
          correctionRef: `corr-usd-late-${suffix}`,
          provider: "fixture-provider",
          model: null,
          occurredAt: "2026-08-07T11:00:00.000Z",
        },
      ],
    });
    expect(second.outcome).toBe("succeeded");
    if (second.outcome !== "succeeded") return;
    const listed = await aggregates.listAggregatesForProjectPeriod({
      projectId,
      periodStart: "2026-08-01",
    });
    expect(listed.map((a) => a.currency).sort()).toEqual(["EUR", "USD"]);
    expect(listed.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "2.00000000",
    );
    expect(listed.find((a) => a.currency === "EUR")?.billedAmount).toBe(
      "2.50000000",
    );
  });

  it("keeps cost_event append-only (update blocked)", async () => {
    await expect(
      pool.query(`UPDATE finops_cost_event SET currency = 'EUR' WHERE false`),
    ).resolves.toBeTruthy();

    // Insert then attempt update on a real row.
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const { deriveCostEventIdentity } = await import(
      "@/lib/oa/finops/application/t2Identity"
    );
    const identity = deriveCostEventIdentity({
      projectId: `proj-ao-${suffix}`,
      executionRunId: `run-ao-${suffix}`,
      evidenceClass: "observed",
      correctionRef: `ao-${suffix}`,
      amount: "1.00000000",
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId: `proj-ao-${suffix}`,
      executionRunId: `run-ao-${suffix}`,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: "1.00000000",
      evidenceClass: "observed",
      sourceOfTruth: "PROVIDER_OBSERVED",
      estimationStatus: "available",
      correctionRef: `ao-${suffix}`,
      catalogVersion: null,
      provider: "fixture-provider",
      model: null,
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T10:00:00.000Z",
    });

    await expect(
      pool.query(
        `UPDATE finops_cost_event SET amount = 2 WHERE cost_event_id = $1`,
        [identity.costEventId],
      ),
    ).rejects.toThrow(/append-only/);
  });
});
```

### `projects/sfia-studio/142-assistant-sfia-native-openai-finops-technical-lot-t2-execution.md`

````md
# 142 — FinOps Technical Lot T2 — Execution Record (Aggregation + Reconciliation)

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/142-assistant-sfia-native-openai-finops-technical-lot-t2-execution.md`
**Cycle:** 6 — Architecture technique · Delivery T2 (local)
**Profil:** Critical
**Typologie:** EVOL / DOC / ARCH / DELIVERY
**Statut:** LOCAL DELIVERY IMPLEMENTED — HANDOFF FINALIZATION HOLD

---

## 1. Statut et anti-claims

| Claim | Statut |
|-------|--------|
| T2 Money M2 + numeric(20,8) implemented locally | **TRUE** |
| HALF_EVEN at rate×usage → scale 8 | **TRUE** |
| R3 catalog Money/unit/quantum (fictitious fixtures only) | **TRUE** |
| A1 durable PG aggregates rebuildable from cost events | **TRUE** |
| Explicit reconcileProjectPeriod on-demand + bounded batch | **TRUE** |
| T1 ledger append-only preserved (no Money columns on usage event) | **TRUE** |
| Documents 138–141 byte-identical | **TRUE** |
| Project commit / push / PR / merge | **FALSE** |
| Handoff published | **FALSE** — HOLD pending T6 ChatGPT validation |
| Decimal npm dependency | **FALSE** |
| Provider tariffs / Neon / provider-real | **FALSE** |
| Cron / always-on polling | **FALSE** |
| package.json / package-lock / CI workflow modified | **FALSE** |
| T6 files modified | **FALSE** |
| createFinOpsPool / finops/index / composeExecutionRunD2D3 modified | **FALSE** |

---

## 2. GO

Consumed: **GO Delivery T2** only (not T6, not PR/push/merge).

Decisions applied from **139** + **141**:
- D-T2-MONEY-01 = M2
- D-T2-NUMERIC-PS-01 = numeric(20,8)
- D-T2-PRICE-SRC-01 = versioned server-side estimation catalog
- D-T2-PRICE-RATE-REPRESENTATION-01 = R3
- D-T2-PRICE-RATE-PS-01 = NOT REQUIRED UNDER R3
- D-T2-ROUNDING-01 = HALF_EVEN once at rate×usage → Money scale 8
- D-T2-AGG-FORM-01 = A1
- D-T2-RECON-TRIGGER-01 = explicit reconcile · on-demand + bounded batch · no cron

---

## 3. Horodatage

| Événement | Valeur |
|-----------|--------|
| Travail Cursor (CEST) | 2026-08-07 13:02:17 CEST (+0200) |
| Travail Cursor (UTC) | 2026-08-07 11:02:17 UTC |

---

## 4. Git Truth

| Check | Value |
|-------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
| Branche Delivery | `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t2-aggregation-reconciliation` |
| HEAD / origin/main | `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c` |
| Upstream | aucun |
| Staged | vide |
| Project commit | **aucun** |
| Project push | **aucun** |

---

## 5. Sources

- 138 grouped preparation (byte-identical)
- 139 T2 decisions applied (byte-identical)
- 140 numeric p/s decision pack (byte-identical)
- 141 numeric/R3/HALF_EVEN decisions applied (byte-identical)
- T1 runtime under `app/lib/oa/finops/**`, migration `1754500000000_finops-t1-usage-ledger.js`
- package scripts: typecheck, lint, build, test, migrate:up, test:db

---

## 6. Baseline T1

- Append-only `finops_usage_event` (usage-only; no Money columns)
- Fail-open capture path untouched (`captureFinOpsUsage.ts` reserved for T6 parallel)
- Pool factory untouched (`createFinOpsPool.ts`)

---

## 7. Décisions 139 / 141 (consumées)

See §2. Exact p/s reserve closed by 141. FIND-03 remains closed decisionally; Money implementation performed in this Delivery.

---

## 8. Branche

`delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t2-aggregation-reconciliation`

Created from preparation branch at HEAD `093fd916…`. Local docs 138–141 kept untracked/byte-identical.

---

## 9. Manifest réel

### CREATED

- `app/lib/oa/finops/domain/money.ts`
- `app/lib/oa/finops/application/types.aggregate.ts`
- `app/lib/oa/finops/application/t2Identity.ts`
- `app/lib/oa/finops/application/estimateUsageCost.ts`
- `app/lib/oa/finops/application/recomputeAggregates.ts`
- `app/lib/oa/finops/application/reconcileProjectPeriod.ts`
- `app/lib/oa/finops/ports/finopsAggregatePort.ts`
- `app/lib/oa/finops/ports/finopsReconciliationPort.ts`
- `app/lib/oa/finops/ports/finopsPriceCatalogPort.ts`
- `app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore.ts`
- `app/lib/oa/finops/infrastructure/postgres/postgresFinOpsReconciliation.ts`
- `app/lib/oa/finops/infrastructure/postgres/postgresFinOpsPriceCatalog.ts`
- `app/lib/oa/finops/infrastructure/memory/memoryFinOpsT2.ts` (unit-test doubles)
- `app/db/migrations/1754600000000_finops-t2-aggregation-reconciliation.js`
- `app/__tests__/oa/finops/t2.money.unit.test.ts`
- `app/__tests__/oa/finops/t2.aggregate.unit.test.ts`
- `app/__tests__/oa/finops/t2.reconciliation.unit.test.ts`
- `app/__tests__/oa/finops/postgres/t2.aggregate.integration.test.ts`
- `app/__tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts`
- `projects/sfia-studio/142-assistant-sfia-native-openai-finops-technical-lot-t2-execution.md` (this document)

### MODIFIED

- **None** of the T1 MODIFY candidates (`types.ts`, `buildUsageEvent.ts`, `postgresFinOpsUsageLedger.ts`) — new modules preferred.

### Manifest note vs 138 candidates

- Added `estimateUsageCost.ts`, `t2Identity.ts`, `postgresFinOpsPriceCatalog.ts`, `memoryFinOpsT2.ts` as repo-conformant helpers (documented here; not a Morris doctrine change).
- Migration filename uses reserved path `1754600000000_finops-t2-aggregation-reconciliation.js` (before T6 `1754600001000_*`).

---

## 10. Choix d'implémentation — Money persistence

**Choice: adjacent append-only table `finops_cost_event`.**

Rationale:
- Preserves T1 `finops_usage_event` usage-only schema and append-only triggers unchanged.
- Corrections = new cost events (`correction_ref`, dedup).
- A1 rebuilds from cost events (authoritative Money history), not from aggregate-only data.
- Avoids destructive ledger rewrite / identity changes.

This is a **Delivery implementation choice**, not a new Morris doctrine decision.

---

## 11. Money numeric(20,8)

- Domain: BigInt minor units at scale 8 + explicit currency (3-letter).
- Canonical boundary: decimal strings via `parseMoneyString` / `formatMoneyString`.
- PG: `numeric(20,8)` on cost amounts and aggregate amount columns.
- No authoritative `Number` / `parseFloat` / `Math.round` / `toFixed` Money path.
- No Decimal npm package (ES2017-compatible `BigInt(...)` API; no bigint literals required by tsconfig target).

---

## 12. HALF_EVEN

- `divideHalfEven` + `moneyFromRateUsageHalfEven(rate, usage, quantum)`.
- Quantize **once** to scale 8 at rate×usage boundary.
- SUM of scale-8 amounts does not re-round.
- Positive and negative tie-case unit tests included.

---

## 13. R3 price catalog

- Port `FinOpsPriceCatalogPort` + PG table `finops_price_catalog_entry`.
- Entry contract: version, unit, billing quantum, Money amount_per_quantum, currency.
- No seed tariffs; empty catalog ⇒ estimation `unavailable`.
- Tests use clearly labeled **fictitious** fixtures only.

---

## 14. Migration

Path: `projects/sfia-studio/app/db/migrations/1754600000000_finops-t2-aggregation-reconciliation.js`

Creates:
- `finops_cost_event` (append-only)
- `finops_usage_aggregate` (A1)
- `finops_price_catalog_entry` (R3)
- `finops_reconciliation_record` (idempotent on-demand batches)

Down refuses drop when cost/aggregate rows present.

---

## 15. A1 aggregates

- Key: `(project_id, period_start, currency)` UTC month.
- Full rebuild via `recomputeAggregates` / `replaceProjectPeriodAggregates`.
- Derived projection only; cost events remain authoritative for Money.

---

## 16. Reconciliation

- Service: `reconcileProjectPeriod`.
- Scope: project + UTC period + `sourceBatchId`.
- On-demand + `maxFacts` bounded batch (default 100).
- estimated → observed → billed via append-only cost events.
- Idempotent on recon dedup key; aggregate recompute after success.
- Failures FinOps-side only (`finopsSideOnly: true`).

---

## 17. Idempotence

- Cost event dedup includes project, run, evidence class, correction_ref, amount, currency (+ optional batch).
- Reconciliation dedup: project + period + sourceBatchId.
- Successful recon replay returns `idempotentReplay: true` without duplicating work.

---

## 18. Tests

- Unit: money HALF_EVEN ties (+/−), aggregate rebuild, R3 estimate / unavailable, recon path + batch bound + idempotence.
- PG integration: numeric(20,8) round-trip, A1 rebuild + late correction, recon idempotence, append-only guard, empty catalog unavailable, fictitious catalog estimate.
- T1 regression included in full suite / `test:db`.

---

## 19. Résultats

| Commande | Résultat |
|----------|----------|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `npm test` | PASS — 144 files / 1435 tests |
| `npm run migrate:up` | PASS — T1 + T2 migrations |
| `npm run test:db` | PASS — 17 tests (T1+T2 PG) |
| `git diff --check` | PASS (no whitespace errors) |

Ephemeral local Postgres 16 used for migrate/test:db (not Neon).

---

## 20. Parallélisation avec T6

- T2 reserved migration `1754600000000_*`; T6 reserved `1754600001000_*`.
- T2 did **not** modify `captureFinOpsUsage.ts` or any T6 audit modules.
- Avoided shared touchpoints: `createFinOpsPool.ts`, `finops/index.ts`, package/CI, compose D2D3.
- **HANDOFF FINALIZATION HOLD — SIBLING T6 VALIDATION SERIALIZATION**

---

## 21. Réserves

- No real provider tariffs configured (by design).
- FX policy still open.
- T3/T4/T5/T6/T7 / Neon / provider-real not in scope.
- Future T6-ext hooks for aggregate/recon audit events not implemented.

---

## 22. Hors scope

T3 alerts, T4 enforcement, T5 override, T6 audit foundation, Neon, provider-real, real tariffs, FX, UI, cron, queues, IAM.

---

## 23. Git final

- Branch: `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t2-aggregation-reconciliation`
- HEAD unchanged vs main: `093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c`
- Untracked Delivery artifacts + docs 138–142; **no project commit**

### Hashes 138–141 (preserved)

| Doc | SHA-256 |
|-----|---------|
| 138 | `54964202c785df64011c351001b8db60b4d651b5dc9c075fbcedefbae1f7c87a` |
| 139 | `0aaf10541776bc64671d02e53b7df76ee01bb7c88e56cdf116d9268e719a615f` |
| 140 | `e69cfedcdfdfd4bf3b94c35b28ac68fc4ca5dfbd5f5b6df52dcd5d11050aeb4b` |
| 141 | `96c16ce9de9020596c74908d7976297295cb38ebc7b79e0d333d02aad78806a4` |

---

## 24. Verdict

```
T2 LOCAL DELIVERY IMPLEMENTATION COMPLETE —
TESTS EXECUTED —
REVIEW PACK PREPARED —
NO PROJECT COMMIT —
NO PROJECT PUSH —
HANDOFF FINALIZATION HOLD —
T6-FOUNDATION CHATGPT VALIDATION REQUIRED BEFORE T2 HANDOFF PUBLICATION
```

**Statut:** LOCAL COMPLETE — HANDOFF HOLD (not READY for handoff publication)

---

## 25. ChatGPT Validation Correction — A1 Multi-currency / Multi-instance

- **date_cest:** 2026-08-07 13:44:01 CEST (+0200)
- **date_utc:** 2026-08-07 11:44:01 UTC
- **GO:** Morris `ok go` — correction bornée A1 multi-currency + multi-instance only
- **Incoming ChatGPT verdict:** `FINOPS TECHNICAL LOT T2 — NOT READY`
- **Incoming handoff:** tip `49884691692e058622c466e24ad4675518bc5ca3` / blob `5ff4d559db080b045d6f857bd06899854ebe17c6`

### Findings

1. **BLOCKER** — A1 multi-currency rebuild unsafe: per-currency `recomputeAggregates` + `DELETE project_id+period_start` wiped sibling currencies.
2. **RESERVE** — A1 multi-instance serialization not demonstrated.

### Root cause

`reconcileProjectPeriod` rebuilt once per touched currency. Each `replaceProjectPeriodAggregates` deleted the entire project/period projection then inserted only the filtered currency set.

### Correction applied

- Removed public per-currency rebuild (`RecomputeAggregatesInput.currency` deleted).
- `recomputeAggregates` always full project/period (all currencies) under exclusive serialization.
- `reconcileProjectPeriod` calls rebuild **once** after the batch; result returns `aggregates[]` (not ambiguous singular `aggregate`).
- PostgreSQL: `withExclusiveProjectPeriodRebuild` uses **one** `PoolClient` + `BEGIN` + `pg_advisory_xact_lock(hashtext('finops-a1:'||projectId), hashtext(periodStart))` covering authoritative cost-event read → derive → replace → `COMMIT`/`ROLLBACK` (lock released with transaction; no session lock retention; no global FinOps lock; waiters use their own connection/transaction).

### Tests added

- Unit: multi-currency full rebuild preservation.
- PG: USD+EUR rebuild; USD late correction preserves EUR.
- PG: concurrent insert+rebuild without lost updates (USD sum + EUR preserved).
- PG recon: USD+EUR batch + USD-only late batch preserves EUR.

### Validation results (post-correction)

| Commande | Résultat |
|----------|----------|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `npm test` | PASS — 144 files / **1439** tests |
| `npm run migrate:up` | PASS |
| `npm run test:db` | PASS — **20** tests |
| `git diff --check` | PASS |

### Reserves remaining

- No real provider tariffs; FX open; T3–T7/Neon out of scope.
- Sibling T6: global runtime audit composition still deferred (untouched).
- Memory mutex is unit-test only; multi-instance proof is PostgreSQL advisory lock.

### Verdict after correction

```
FINOPS TECHNICAL LOT T2 CORRECTION COMPLETE —
A1 FULL PROJECT/PERIOD MULTI-CURRENCY REBUILD VERIFIED —
NO PER-CURRENCY DESTRUCTIVE REBUILD PATH —
PROJECT/PERIOD MULTI-INSTANCE SERIALIZATION VERIFIED —
LOCK COVERS AUTHORITATIVE READ → DERIVE → REPLACE —
CONCURRENT REBUILD TEST PASSED —
MULTI-CURRENCY USD/EUR TEST PASSED —
M2 numeric(20,8) PRESERVED —
R3 PRESERVED —
HALF_EVEN PRESERVED —
RECONCILIATION PRESERVED —
T1 REGRESSION PASSED —
T6 UNTOUCHED —
DOCUMENTS 138–141 PRESERVED —
DOCUMENT 142 UPDATED —
FULL TEST SUITE PASSED —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
REVIEW HANDOFF REMOTE VERIFIED —
READY FOR CHATGPT REVALIDATION
```
````

## Parallel / T6

- No T6 files in this worktree
- No package/CI changes
- Sibling T6 reserve (context only): global runtime audit composition deferred

## Réserves

- No real tariffs; FX open; T3–T7/Neon out of scope
- Memory mutex is unit-test stand-in; multi-instance proof is PG advisory xact lock

## Final verdict

```
FINOPS TECHNICAL LOT T2 CORRECTION COMPLETE —
A1 FULL PROJECT/PERIOD MULTI-CURRENCY REBUILD VERIFIED —
NO PER-CURRENCY DESTRUCTIVE REBUILD PATH —
PROJECT/PERIOD MULTI-INSTANCE SERIALIZATION VERIFIED —
LOCK COVERS AUTHORITATIVE READ → DERIVE → REPLACE —
CONCURRENT REBUILD TEST PASSED —
MULTI-CURRENCY USD/EUR TEST PASSED —
M2 numeric(20,8) PRESERVED —
R3 PRESERVED —
HALF_EVEN PRESERVED —
RECONCILIATION PRESERVED —
T1 REGRESSION PASSED —
T6 UNTOUCHED —
DOCUMENTS 138–141 PRESERVED —
DOCUMENT 142 UPDATED —
FULL TEST SUITE PASSED —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
REVIEW HANDOFF REMOTE VERIFIED —
READY FOR CHATGPT REVALIDATION
```
