# ChatGPT Review Pack — FinOps T3 Delivery Correction (Cycle 8 Critical)

**Profil:** Critical
**Typologie:** EVOL / CODE / DOC / TEST — bounded Delivery correction
**GO:** `GO correction T3 — sécuriser F3 no-op + B3 failure posture.`
**Worktree:** `.tmp-sfia-review/worktrees/finops-t3-preparation`
**Branch:** `delivery/sfia-studio-assistant-sfia-native-openai-finops-t3-alert-morris-review-state`
**HEAD / origin/main:** `b8259859983577c31965aa877c956e7a25dd1c4d`
**Staged:** empty
**Manifest:** exactly 13 T3 paths (no 14th)
**145 SHA:** `809bc5bd20fc23c0c7d3368728e81193e1fe459f26c314d1ba1d4526b61540ba`
**146 SHA:** `a5eda99a97ab5887407db8b6290e6cae0405ed2b59a22a60b9ed7f4662150da1`
**Handoff before:**
```
before_tip=67cdc009fec1e7432722b00398e8b0452f4d97bf
before_blob=e8cd9411aac341059e9ba5f299075abb76e689bc
```
**Pack timestamp:** 2026-08-07 19:54:20 CEST (+0200) / 2026-08-07 17:54:20 UTC

---

## Absolute bans respected

NO new project files · NO migration/schema/store changes · NO modify 145/146/T1/T2/T6/decision/** · NO A1/C1/D2/E1 redesign · NO threshold activation/IAM/ack-resolve/T4/T5/T6-ext · NO project git add/commit/push/PR · Only the 4 allowed paths modified.

---

## BEFORE blocker proof (ChatGPT NOT READY)

Prior Delivery pack tip/blob matched `67cdc009…` / `e8cd9411…`. ChatGPT returned **NOT READY** for:

### 1) F3 empty defs was NOT a true no-op

BEFORE (from published Delivery pack):

```typescript
if (input.definitions.length === 0) {
    const alerts = await deps.alertReview.listAlertsForProjectPeriod({
      projectId,
      periodStart,
    });
    const reviews = await deps.alertReview.listReviewsForProjectPeriod({
      projectId,
      periodStart,
    });
    return {
```

This called `listAlertsForProjectPeriod` / `listReviewsForProjectPeriod` on empty definitions — side effects on the anti-activation path.

### 2) apply throw not contained

BEFORE (from published Delivery pack):

```typescript
const applied = await deps.alertReview.applyProjectPeriodEvaluation({
    projectId,
    periodStart,
    outcomes,
    evaluatedAt: deps.nowIso(),
  });
```

No try/catch → unexpected apply throw rejected the evaluate promise and could leak raw error content.

### 3) B3 wrappers lacked safeEvaluate

BEFORE pack had **no** `safeEvaluate`, **no** `FINOPS_T3_APPLY_THROWN`, **no** `FINOPS_T3_EVALUATION_THROWN`. Wrappers awaited `evaluateProjectPeriodThresholds` directly — unexpected T3 throws could reject the wrapper after T2 success.

---

## Corrections applied

| Fix | Code | Result |
|-----|------|--------|
| F3 true no-op | `definitions.length===0` early return empty | no aggregates.* / no list / no apply |
| Apply containment | try/catch around apply | `FINOPS_T3_APPLY_THROWN` + sanitized message + `finopsSideOnly` |
| B3 boundary | private `safeEvaluate` | `FINOPS_T3_EVALUATION_THROWN`; wrappers resolve with T2 preserved |

## Tests

Kept 1–22. Added 23–26 (empty no-op spies; apply thrown; recompute/reconcile EVALUATION_THROWN).

## QA

- vitest t3.alert-review.unit: **26/26 PASS**
- typecheck / lint / build: **PASS**
- vitest `__tests__/oa/finops` (no DB): **135 PASS / 31 SKIP**
- npm test (serial + ephemeral local PG16): **148 files / 1482 PASS**
- migrate:up + test:db: **31/31 PASS** (NOT Neon); PG torn down
- git diff --check: **PASS**
- 145/146 SHA unchanged; decisions unchanged; 13-path preserved

Evidence: `.tmp-sfia-review/t3-delivery-correction/`

---

## Modified files (FULL contents) — 4 allowed paths only



### FILE 1: `projects/sfia-studio/app/lib/oa/finops/application/evaluateProjectPeriodThresholds.ts`

```typescript
/**
 * FinOps T3 — evaluate injected threshold definitions against T2 aggregates (F3/B3).
 *
 * Crossing rule (implementation detail, not Morris calibration):
 *   evaluatedAmount >= thresholdAmount using existing Money (BigInt minor units).
 * No FX / cross-currency sum. Empty definitions → explicit success no-op.
 */

import {
  formatMoneyString,
  moneyFromMinor,
  normalizeCurrency,
  parseMoneyString,
  type FinOpsMoney,
} from "../domain/money";
import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type { FinOpsAlertReviewPort } from "../ports/finopsAlertReviewPort";
import { deriveT3ThresholdIdentity } from "./t3Identity";
import type {
  EvaluateProjectPeriodThresholdsInput,
  EvaluateProjectPeriodThresholdsResult,
  FinOpsThresholdBasis,
  FinOpsThresholdDefinition,
  FinOpsThresholdEvaluationOutcome,
  FinOpsThresholdKind,
} from "./types.alertReview";

export type EvaluateProjectPeriodThresholdsDeps = {
  readonly aggregates: FinOpsAggregatePort;
  readonly alertReview: FinOpsAlertReviewPort;
  readonly nowIso: () => string;
};

function isUtcMonthStartDate(periodStart: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(periodStart)) return false;
  const [y, m, d] = periodStart.split("-").map((x) => Number(x));
  if (!y || !m || !d) return false;
  if (d !== 1) return false;
  if (m < 1 || m > 12) return false;
  // Reject impossible calendar dates via UTC Date round-trip.
  const dt = new Date(Date.UTC(y, m - 1, 1));
  return (
    dt.getUTCFullYear() === y &&
    dt.getUTCMonth() === m - 1 &&
    dt.getUTCDate() === 1
  );
}

function assertPositiveMoney(money: FinOpsMoney): void {
  if (money.amountMinor <= BigInt(0)) {
    throw new Error("threshold amount must be strictly positive");
  }
}

function moneyGte(evaluated: FinOpsMoney, threshold: FinOpsMoney): boolean {
  if (evaluated.currency !== threshold.currency) {
    throw new Error("Money currency mismatch in threshold compare");
  }
  return evaluated.amountMinor >= threshold.amountMinor;
}

function selectBucketAmount(
  basis: FinOpsThresholdBasis,
  agg: {
    readonly estimatedAmount: string;
    readonly observedAmount: string;
    readonly billedAmount: string;
    readonly currency: string;
  },
): string {
  switch (basis) {
    case "estimated":
      return agg.estimatedAmount;
    case "observed":
      return agg.observedAmount;
    case "billed":
      return agg.billedAmount;
    default: {
      const _exhaustive: never = basis;
      return _exhaustive;
    }
  }
}

function isKind(value: string): value is FinOpsThresholdKind {
  return value === "informational_alert" || value === "morris_review";
}

function isBasis(value: string): value is FinOpsThresholdBasis {
  return value === "estimated" || value === "observed" || value === "billed";
}

/**
 * Validate injected definitions. Conflicting kind/basis/amount on the same C1
 * key fails with FINOPS_T3_THRESHOLD_CONFIG_CONFLICT (never "take the first").
 */
export function validateThresholdDefinitions(
  definitions: ReadonlyArray<FinOpsThresholdDefinition>,
):
  | { readonly ok: true; readonly normalized: ReadonlyArray<FinOpsThresholdDefinition> }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const seen = new Map<
    string,
    { kind: FinOpsThresholdKind; basis: FinOpsThresholdBasis; amount: string }
  >();
  const normalized: FinOpsThresholdDefinition[] = [];

  for (const def of definitions) {
    const thresholdCode = def.thresholdCode.trim();
    if (!thresholdCode) {
      return {
        ok: false,
        code: "FINOPS_T3_THRESHOLD_INVALID",
        message: "thresholdCode must be non-empty",
      };
    }
    if (!isKind(def.kind)) {
      return {
        ok: false,
        code: "FINOPS_T3_THRESHOLD_INVALID",
        message: "threshold kind is invalid",
      };
    }
    if (!isBasis(def.basis)) {
      return {
        ok: false,
        code: "FINOPS_T3_THRESHOLD_INVALID",
        message: "threshold basis is invalid",
      };
    }
    let currency: string;
    let amountMoney: FinOpsMoney;
    try {
      currency = normalizeCurrency(def.currency);
      amountMoney = parseMoneyString(def.amount, currency);
      assertPositiveMoney(amountMoney);
    } catch {
      return {
        ok: false,
        code: "FINOPS_T3_THRESHOLD_INVALID",
        message: "threshold currency/amount is invalid",
      };
    }
    const amount = formatMoneyString(amountMoney);
    const c1 = `${thresholdCode}|${currency}`;
    const prior = seen.get(c1);
    if (prior) {
      if (
        prior.kind !== def.kind ||
        prior.basis !== def.basis ||
        prior.amount !== amount
      ) {
        return {
          ok: false,
          code: "FINOPS_T3_THRESHOLD_CONFIG_CONFLICT",
          message:
            "Conflicting threshold definitions share the same C1 key (project-period deferred to apply; code+currency collide with incompatible kind/basis/amount)",
        };
      }
      // Exact duplicate — ignore second copy (same rule twice is not a conflict).
      continue;
    }
    seen.set(c1, { kind: def.kind, basis: def.basis, amount });
    normalized.push({
      thresholdCode,
      kind: def.kind,
      currency,
      basis: def.basis,
      amount,
    });
  }

  return { ok: true, normalized };
}

export async function evaluateProjectPeriodThresholds(
  deps: EvaluateProjectPeriodThresholdsDeps,
  input: EvaluateProjectPeriodThresholdsInput,
): Promise<EvaluateProjectPeriodThresholdsResult> {
  const projectId = input.projectId.trim();
  const periodStart = input.periodStart.trim();
  if (!projectId || !periodStart) {
    return {
      outcome: "failed",
      code: "FINOPS_T3_EVAL_INVALID_INPUT",
      message: "projectId and periodStart are required",
      finopsSideOnly: true,
    };
  }
  if (!isUtcMonthStartDate(periodStart)) {
    return {
      outcome: "failed",
      code: "FINOPS_T3_EVAL_INVALID_INPUT",
      message: "periodStart must be UTC month-start YYYY-MM-DD",
      finopsSideOnly: true,
    };
  }

  // F3 true no-op: empty injected definitions → success without touching
  // aggregates or alert/review stores (no list/apply side effects).
  if (input.definitions.length === 0) {
    return {
      outcome: "succeeded",
      noop: true,
      evaluatedDefinitionCount: 0,
      alerts: [],
      reviews: [],
    };
  }

  const validated = validateThresholdDefinitions(input.definitions);
  if (!validated.ok) {
    return {
      outcome: "failed",
      code: validated.code,
      message: validated.message,
      finopsSideOnly: true,
    };
  }

  let aggregates;
  try {
    aggregates = await deps.aggregates.listAggregatesForProjectPeriod({
      projectId,
      periodStart,
    });
  } catch {
    return {
      outcome: "failed",
      code: "FINOPS_T3_AGGREGATE_READ_FAILED",
      message: "Failed to read FinOps T2 aggregates for evaluation",
      finopsSideOnly: true,
    };
  }

  const byCurrency = new Map(
    aggregates.map((a) => [normalizeCurrency(a.currency), a] as const),
  );

  const outcomes: FinOpsThresholdEvaluationOutcome[] = [];
  for (const def of validated.normalized) {
    const agg = byCurrency.get(def.currency);
    const evaluatedAmount = agg
      ? selectBucketAmount(def.basis, agg)
      : formatMoneyString(moneyFromMinor(BigInt(0), def.currency));
    const rebuildVersion = agg?.rebuildVersion ?? 0;
    const thresholdMoney = parseMoneyString(def.amount, def.currency);
    const evaluatedMoney = parseMoneyString(evaluatedAmount, def.currency);
    const crossed = moneyGte(evaluatedMoney, thresholdMoney);
    const identity = deriveT3ThresholdIdentity({
      projectId,
      periodStart,
      thresholdCode: def.thresholdCode,
      currency: def.currency,
    });
    outcomes.push({
      kind: def.kind,
      thresholdCode: def.thresholdCode,
      currency: def.currency,
      evaluationBasis: def.basis,
      thresholdAmount: def.amount,
      evaluatedAmount: formatMoneyString(evaluatedMoney),
      rebuildVersion,
      crossed,
      dedupKey: identity.dedupKey,
      alertId: identity.alertId,
      reviewId: identity.reviewId,
    });
  }

  const evaluatedAt = deps.nowIso();

  let applied;
  try {
    applied = await deps.alertReview.applyProjectPeriodEvaluation({
      projectId,
      periodStart,
      outcomes,
      evaluatedAt,
    });
  } catch {
    // Contain unexpected apply throws — never leak raw/sensitive error content.
    return {
      outcome: "failed",
      code: "FINOPS_T3_APPLY_THROWN",
      message: "Unexpected error while applying FinOps T3 evaluation",
      finopsSideOnly: true,
    };
  }

  if (applied.outcome === "failed") {
    return {
      outcome: "failed",
      code: applied.code,
      message: applied.message,
      finopsSideOnly: true,
    };
  }

  return {
    outcome: "succeeded",
    noop: false,
    evaluatedDefinitionCount: validated.normalized.length,
    alerts: applied.alerts,
    reviews: applied.reviews,
  };
}
```


### FILE 2: `projects/sfia-studio/app/lib/oa/finops/application/evaluateAfterT2.ts`

```typescript
/**
 * FinOps T3 — B3 orchestration wrappers around T2 WITHOUT modifying T2.
 *
 * T3 evaluation runs only AFTER T2 success returns; never inside T2 locks/txns.
 * T3 failure must not rewrite a successful T2 outcome.
 */

import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type { FinOpsAlertReviewPort } from "../ports/finopsAlertReviewPort";
import type { FinOpsReconciliationPort } from "../ports/finopsReconciliationPort";
import { recomputeAggregates } from "./recomputeAggregates";
import {
  reconcileProjectPeriod,
  type ReconcileProjectPeriodDeps,
} from "./reconcileProjectPeriod";
import {
  evaluateProjectPeriodThresholds,
  type EvaluateProjectPeriodThresholdsDeps,
} from "./evaluateProjectPeriodThresholds";
import type {
  EvaluateProjectPeriodThresholdsResult,
  FinOpsThresholdDefinition,
} from "./types.alertReview";
import type {
  ReconcileProjectPeriodInput,
  ReconcileProjectPeriodResult,
  RecomputeAggregatesInput,
  RecomputeAggregatesResult,
} from "./types.aggregate";

export type EvaluateAfterT2Deps = {
  readonly aggregates: FinOpsAggregatePort;
  readonly reconciliation: FinOpsReconciliationPort;
  readonly alertReview: FinOpsAlertReviewPort;
  readonly nowIso: () => string;
  readonly definitions: ReadonlyArray<FinOpsThresholdDefinition>;
};

export type EvaluateAfterRecomputeResult = {
  readonly t2: RecomputeAggregatesResult;
  readonly t3: EvaluateProjectPeriodThresholdsResult | null;
  /** True when T2 succeeded and T3 was attempted (success or failure). */
  readonly t3Attempted: boolean;
};

export type EvaluateAfterReconcileResult = {
  readonly t2: ReconcileProjectPeriodResult;
  readonly t3: EvaluateProjectPeriodThresholdsResult | null;
  readonly t3Attempted: boolean;
};

function t3Deps(
  deps: EvaluateAfterT2Deps,
): EvaluateProjectPeriodThresholdsDeps {
  return {
    aggregates: deps.aggregates,
    alertReview: deps.alertReview,
    nowIso: deps.nowIso,
  };
}

/**
 * B3 defensive boundary: unexpected throws from evaluate must not reject the
 * wrapper promise or erase a successful T2 outcome.
 */
async function safeEvaluate(
  deps: EvaluateProjectPeriodThresholdsDeps,
  input: {
    readonly projectId: string;
    readonly periodStart: string;
    readonly definitions: ReadonlyArray<FinOpsThresholdDefinition>;
  },
): Promise<EvaluateProjectPeriodThresholdsResult> {
  try {
    return await evaluateProjectPeriodThresholds(deps, input);
  } catch {
    return {
      outcome: "failed",
      code: "FINOPS_T3_EVALUATION_THROWN",
      message: "Unexpected error while evaluating FinOps T3 thresholds",
      finopsSideOnly: true,
    };
  }
}

/**
 * Wrapper: recomputeAggregates → on success → evaluateProjectPeriodThresholds.
 */
export async function recomputeAggregatesThenEvaluateThresholds(
  deps: EvaluateAfterT2Deps,
  input: RecomputeAggregatesInput,
): Promise<EvaluateAfterRecomputeResult> {
  const t2 = await recomputeAggregates(
    { aggregates: deps.aggregates, nowIso: deps.nowIso },
    input,
  );
  if (t2.outcome !== "succeeded") {
    return { t2, t3: null, t3Attempted: false };
  }
  const t3 = await safeEvaluate(t3Deps(deps), {
    projectId: input.projectId,
    periodStart: input.periodStart,
    definitions: deps.definitions,
  });
  return { t2, t3, t3Attempted: true };
}

/**
 * Wrapper: reconcileProjectPeriod → on success → evaluateProjectPeriodThresholds.
 */
export async function reconcileProjectPeriodThenEvaluateThresholds(
  deps: EvaluateAfterT2Deps,
  input: ReconcileProjectPeriodInput,
): Promise<EvaluateAfterReconcileResult> {
  const reconDeps: ReconcileProjectPeriodDeps = {
    reconciliation: deps.reconciliation,
    aggregates: deps.aggregates,
    nowIso: deps.nowIso,
  };
  const t2 = await reconcileProjectPeriod(reconDeps, input);
  if (t2.outcome !== "succeeded") {
    return { t2, t3: null, t3Attempted: false };
  }
  const t3 = await safeEvaluate(t3Deps(deps), {
    projectId: input.projectId,
    periodStart: input.periodStart,
    definitions: deps.definitions,
  });
  return { t2, t3, t3Attempted: true };
}
```


### FILE 3: `projects/sfia-studio/app/__tests__/oa/finops/t3.alert-review.unit.test.ts`

```typescript
/**
 * @vitest-environment node
 *
 * FinOps T3 — Alert & Morris Review unit tests (items 1–26).
 * FICTITIOUS fixtures only — NOT historical calibration 15/20/25/30.
 */
import { describe, expect, it, vi } from "vitest";
import {
  reconcileProjectPeriodThenEvaluateThresholds,
  recomputeAggregatesThenEvaluateThresholds,
} from "@/lib/oa/finops/application/evaluateAfterT2";
import { evaluateProjectPeriodThresholds } from "@/lib/oa/finops/application/evaluateProjectPeriodThresholds";
import { deriveT3ThresholdIdentity } from "@/lib/oa/finops/application/t3Identity";
import type { FinOpsThresholdDefinition } from "@/lib/oa/finops/application/types.alertReview";
import type { FinOpsProjectPeriodAggregate as T2Agg } from "@/lib/oa/finops/application/types.aggregate";
import { formatMoneyString, parseMoneyString } from "@/lib/oa/finops/domain/money";
import { createMemoryFinOpsAlertReview } from "@/lib/oa/finops/infrastructure/memory/memoryFinOpsAlertReview";
import {
  createMemoryFinOpsT2Pair,
} from "@/lib/oa/finops/infrastructure/memory/memoryFinOpsT2";
import type { FinOpsAggregatePort } from "@/lib/oa/finops/ports/finopsAggregatePort";
import { deriveCostEventIdentity } from "@/lib/oa/finops/application/t2Identity";

/** FICTITIOUS — arbitrary test amounts; NOT project calibration 15/20/25/30. */
const FICT_ALERT_AMOUNT = "7.25000000";
const FICT_REVIEW_AMOUNT = "11.50000000";
const FICT_BELOW = "3.00000000";
const FICT_EQUAL = "7.25000000";
const FICT_ABOVE = "9.00000000";

function agg(partial: Partial<T2Agg> & Pick<T2Agg, "projectId" | "periodStart" | "currency">): T2Agg {
  const currency = partial.currency;
  const zero = formatMoneyString(parseMoneyString("0", currency));
  return {
    estimatedAmount: zero,
    observedAmount: zero,
    billedAmount: zero,
    unknownAmount: zero,
    inputTokensSum: null,
    outputTokensSum: null,
    totalTokensSum: null,
    costEventCount: 0,
    unavailableEstimationCount: 0,
    rebuildVersion: 1,
    rebuiltAt: "2026-08-07T12:00:00.000Z",
    ...partial,
  };
}

function memoryAggregates(
  rows: ReadonlyArray<T2Agg>,
): FinOpsAggregatePort {
  return {
    async replaceProjectPeriodAggregates() {
      /* no-op for evaluate-only tests */
    },
    async readAggregate(key) {
      return (
        rows.find(
          (r) =>
            r.projectId === key.projectId &&
            r.periodStart === key.periodStart &&
            r.currency === key.currency,
        ) ?? null
      );
    },
    async listAggregatesForProjectPeriod(input) {
      return rows.filter(
        (r) =>
          r.projectId === input.projectId &&
          r.periodStart === input.periodStart,
      );
    },
    async withExclusiveProjectPeriodRebuild(_input, work) {
      return work({
        async listAllCostEventsForPeriod() {
          return [];
        },
        async listAggregates() {
          return rows;
        },
        async replaceAggregates() {
          /* no-op */
        },
      });
    },
  };
}

const alertDef = (code = "FICT_INFO_A"): FinOpsThresholdDefinition => ({
  thresholdCode: code,
  kind: "informational_alert",
  currency: "USD",
  basis: "estimated",
  amount: FICT_ALERT_AMOUNT,
});

const reviewDef = (code = "FICT_REV_A"): FinOpsThresholdDefinition => ({
  thresholdCode: code,
  kind: "morris_review",
  currency: "USD",
  basis: "observed",
  amount: FICT_REVIEW_AMOUNT,
});

describe("FinOps T3 alert/review unit", () => {
  it("1. threshold below → no initial row", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_BELOW,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [alertDef()],
      },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.alerts).toHaveLength(0);
  });

  it("2. threshold equal → crossed", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_EQUAL,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [alertDef()],
      },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.alerts).toHaveLength(1);
    expect(result.alerts[0]!.state).toBe("open");
  });

  it("3. threshold above → crossed", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [alertDef()],
      },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.alerts[0]!.state).toBe("open");
  });

  it("4. informational → Alert open", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.alerts[0]!.state).toBe("open");
    expect(result.reviews).toHaveLength(0);
  });

  it("5. review → Morris Review pending", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            observedAmount: "12.00000000",
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [reviewDef()],
      },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.reviews).toHaveLength(1);
    expect(result.reviews[0]!.state).toBe("pending");
    expect(result.alerts).toHaveLength(0);
  });

  it("6. repeat evaluation → C1 idempotent", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const deps = {
      aggregates: memoryAggregates([
        agg({
          projectId: "p1",
          periodStart: "2026-08-01",
          currency: "USD",
          estimatedAmount: FICT_ABOVE,
        }),
      ]),
      alertReview,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };
    const input = {
      projectId: "p1",
      periodStart: "2026-08-01",
      definitions: [alertDef()],
    };
    await evaluateProjectPeriodThresholds(deps, input);
    await evaluateProjectPeriodThresholds(deps, input);
    const listed = await alertReview.listAlertsForProjectPeriod({
      projectId: "p1",
      periodStart: "2026-08-01",
    });
    expect(listed).toHaveLength(1);
    const id = deriveT3ThresholdIdentity({
      projectId: "p1",
      periodStart: "2026-08-01",
      thresholdCode: "FICT_INFO_A",
      currency: "USD",
    });
    expect(listed[0]!.alertId).toBe(id.alertId);
  });

  it("7. same key + evidence basis evolution → same identity", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const a1 = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
            rebuildVersion: 1,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [
          { ...alertDef(), basis: "estimated", amount: FICT_ALERT_AMOUNT },
        ],
      },
    );
    expect(a1.outcome).toBe("succeeded");
    const a2 = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            observedAmount: FICT_ABOVE,
            rebuildVersion: 2,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T13:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [
          { ...alertDef(), basis: "observed", amount: FICT_ALERT_AMOUNT },
        ],
      },
    );
    expect(a2.outcome).toBe("succeeded");
    if (a2.outcome !== "succeeded") return;
    expect(a2.alerts).toHaveLength(1);
    expect(a2.alerts[0]!.evaluationBasis).toBe("observed");
    expect(a2.alerts[0]!.alertId).toBe(
      deriveT3ThresholdIdentity({
        projectId: "p1",
        periodStart: "2026-08-01",
        thresholdCode: "FICT_INFO_A",
        currency: "USD",
      }).alertId,
    );
  });

  it("8. correction downward → Alert cleared", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
            rebuildVersion: 1,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    const after = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_BELOW,
            rebuildVersion: 2,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T13:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    expect(after.outcome).toBe("succeeded");
    if (after.outcome !== "succeeded") return;
    expect(after.alerts[0]!.state).toBe("cleared");
  });

  it("9. correction downward → Review superseded", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            observedAmount: "12.00000000",
            rebuildVersion: 1,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [reviewDef()],
      },
    );
    const after = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            observedAmount: "1.00000000",
            rebuildVersion: 2,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T13:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [reviewDef()],
      },
    );
    expect(after.outcome).toBe("succeeded");
    if (after.outcome !== "succeeded") return;
    expect(after.reviews[0]!.state).toBe("superseded");
  });

  it("10. recross → same row reopened", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const id = deriveT3ThresholdIdentity({
      projectId: "p1",
      periodStart: "2026-08-01",
      thresholdCode: "FICT_INFO_A",
      currency: "USD",
    });
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
            rebuildVersion: 1,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T10:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_BELOW,
            rebuildVersion: 2,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    const again = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
            rebuildVersion: 3,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    expect(again.outcome).toBe("succeeded");
    if (again.outcome !== "succeeded") return;
    expect(again.alerts).toHaveLength(1);
    expect(again.alerts[0]!.alertId).toBe(id.alertId);
    expect(again.alerts[0]!.state).toBe("open");
    expect(again.alerts[0]!.firstCrossedAt).toBe("2026-08-07T10:00:00.000Z");
  });

  it("11. period rollover → new identity", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-09-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-09-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-09-01", definitions: [alertDef()] },
    );
    const aug = await alertReview.listAlertsForProjectPeriod({
      projectId: "p1",
      periodStart: "2026-08-01",
    });
    const sep = await alertReview.listAlertsForProjectPeriod({
      projectId: "p1",
      periodStart: "2026-09-01",
    });
    expect(aug[0]!.alertId).not.toBe(sep[0]!.alertId);
  });

  it("12. currency isolation", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
          }),
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "EUR",
            estimatedAmount: FICT_ABOVE,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [
          alertDef(),
          { ...alertDef(), currency: "EUR" },
        ],
      },
    );
    const listed = await alertReview.listAlertsForProjectPeriod({
      projectId: "p1",
      periodStart: "2026-08-01",
    });
    expect(listed).toHaveLength(2);
    expect(listed.map((a) => a.currency).sort()).toEqual(["EUR", "USD"]);
    expect(listed[0]!.alertId).not.toBe(listed[1]!.alertId);
  });

  it("13. conflicting definition → explicit error", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [
          alertDef("SAME"),
          {
            thresholdCode: "SAME",
            kind: "morris_review",
            currency: "USD",
            basis: "estimated",
            amount: FICT_ALERT_AMOUNT,
          },
        ],
      },
    );
    expect(result.outcome).toBe("failed");
    if (result.outcome !== "failed") return;
    expect(result.code).toBe("FINOPS_T3_THRESHOLD_CONFIG_CONFLICT");
  });

  it("14. stale rebuildVersion → no overwrite", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
            rebuildVersion: 5,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [alertDef()] },
    );
    // Stale evaluation with lower rebuild + below must not clear.
    await alertReview.applyProjectPeriodEvaluation({
      projectId: "p1",
      periodStart: "2026-08-01",
      evaluatedAt: "2026-08-07T11:00:00.000Z",
      outcomes: [
        {
          kind: "informational_alert",
          thresholdCode: "FICT_INFO_A",
          currency: "USD",
          evaluationBasis: "estimated",
          thresholdAmount: FICT_ALERT_AMOUNT,
          evaluatedAmount: FICT_BELOW,
          rebuildVersion: 2,
          crossed: false,
          ...deriveT3ThresholdIdentity({
            projectId: "p1",
            periodStart: "2026-08-01",
            thresholdCode: "FICT_INFO_A",
            currency: "USD",
          }),
        },
      ],
    });
    const listed = await alertReview.listAlertsForProjectPeriod({
      projectId: "p1",
      periodStart: "2026-08-01",
    });
    expect(listed[0]!.state).toBe("open");
    expect(listed[0]!.rebuildVersion).toBe(5);
  });

  it("15. empty definitions → F3 no-op", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [] },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.noop).toBe(true);
    expect(result.alerts).toHaveLength(0);
  });

  it("16. estimated basis informs/review without blocking/enforcement", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: "12.00000000",
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [
          { ...reviewDef(), basis: "estimated", amount: FICT_REVIEW_AMOUNT },
        ],
      },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.reviews[0]!.state).toBe("pending");
    expect(result.reviews[0]!.evaluationBasis).toBe("estimated");
    // No blocking field / enforcement API exists on the result.
    expect(
      Object.prototype.hasOwnProperty.call(result, "blocked"),
    ).toBe(false);
  });

  it("17. B3 rebuild wrapper evaluates only after T2 success", async () => {
    const pair = createMemoryFinOpsT2Pair();
    const alertReview = createMemoryFinOpsAlertReview();
    const identity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "r1",
      evidenceClass: "estimated",
      correctionRef: null,
      amount: FICT_ABOVE,
      currency: "USD",
    });
    await pair.reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId: "p1",
      executionRunId: "r1",
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_ABOVE,
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
    const result = await recomputeAggregatesThenEvaluateThresholds(
      {
        aggregates: pair.aggregates,
        reconciliation: pair.reconciliation,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
        definitions: [alertDef()],
      },
      { projectId: "p1", periodStart: "2026-08-01" },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t3Attempted).toBe(true);
    expect(result.t3?.outcome).toBe("succeeded");
  });

  it("18. B3 reconciliation wrapper evaluates only after T2 success", async () => {
    const pair = createMemoryFinOpsT2Pair();
    const alertReview = createMemoryFinOpsAlertReview();
    const result = await reconcileProjectPeriodThenEvaluateThresholds(
      {
        aggregates: pair.aggregates,
        reconciliation: pair.reconciliation,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
        definitions: [
          {
            ...reviewDef(),
            basis: "observed",
            amount: FICT_REVIEW_AMOUNT,
          },
        ],
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-1",
        facts: [
          {
            executionRunId: "run-obs",
            usageEventId: null,
            evidenceClass: "observed",
            sourceOfTruth: "PROVIDER_OBSERVED",
            amount: "12.00000000",
            currency: "USD",
            correctionRef: "corr-1",
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t3Attempted).toBe(true);
    expect(result.t3?.outcome).toBe("succeeded");
  });

  it("19. T2 failure → no T3 evaluation", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const failingAggregates: FinOpsAggregatePort = {
      async replaceProjectPeriodAggregates() {
        throw new Error("should not replace");
      },
      async readAggregate() {
        return null;
      },
      async listAggregatesForProjectPeriod() {
        return [];
      },
      async withExclusiveProjectPeriodRebuild() {
        throw new Error("T2 exclusive rebuild failed");
      },
    };
    const spy = vi.spyOn(alertReview, "applyProjectPeriodEvaluation");
    const result = await recomputeAggregatesThenEvaluateThresholds(
      {
        aggregates: failingAggregates,
        reconciliation: createMemoryFinOpsT2Pair().reconciliation,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
        definitions: [alertDef()],
      },
      { projectId: "p1", periodStart: "2026-08-01" },
    );
    expect(result.t2.outcome).toBe("failed");
    expect(result.t3Attempted).toBe(false);
    expect(result.t3).toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it("20. T3 failure after T2 success → T2 success preserved", async () => {
    const pair = createMemoryFinOpsT2Pair();
    const identity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "r1",
      evidenceClass: "estimated",
      correctionRef: null,
      amount: FICT_ABOVE,
      currency: "USD",
    });
    await pair.reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId: "p1",
      executionRunId: "r1",
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_ABOVE,
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
    const alertReview = createMemoryFinOpsAlertReview();
    vi.spyOn(alertReview, "applyProjectPeriodEvaluation").mockResolvedValue({
      outcome: "failed",
      code: "FINOPS_T3_APPLY_FAILED",
      message: "injected T3 failure",
      finopsSideOnly: true,
    });
    const result = await recomputeAggregatesThenEvaluateThresholds(
      {
        aggregates: pair.aggregates,
        reconciliation: pair.reconciliation,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
        definitions: [alertDef()],
      },
      { projectId: "p1", periodStart: "2026-08-01" },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t3Attempted).toBe(true);
    expect(result.t3?.outcome).toBe("failed");
  });

  it("21. explicit evaluate repair/replay idempotent", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    const deps = {
      aggregates: memoryAggregates([
        agg({
          projectId: "p1",
          periodStart: "2026-08-01",
          currency: "USD",
          estimatedAmount: FICT_ABOVE,
        }),
      ]),
      alertReview,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };
    const input = {
      projectId: "p1",
      periodStart: "2026-08-01",
      definitions: [alertDef()],
    };
    const a = await evaluateProjectPeriodThresholds(deps, input);
    const b = await evaluateProjectPeriodThresholds(deps, input);
    expect(a.outcome).toBe("succeeded");
    expect(b.outcome).toBe("succeeded");
    const listed = await alertReview.listAlertsForProjectPeriod({
      projectId: "p1",
      periodStart: "2026-08-01",
    });
    expect(listed).toHaveLength(1);
  });

  it("22. no privileged ack/resolve functions used", async () => {
    const alertReview = createMemoryFinOpsAlertReview();
    expect(
      Object.prototype.hasOwnProperty.call(
        alertReview,
        "acknowledgeMorrisReview",
      ),
    ).toBe(false);
    expect(
      Object.prototype.hasOwnProperty.call(alertReview, "resolveMorrisReview"),
    ).toBe(false);
    expect(typeof (alertReview as { acknowledge?: unknown }).acknowledge).toBe(
      "undefined",
    );
    expect(typeof (alertReview as { resolve?: unknown }).resolve).toBe(
      "undefined",
    );
  });

  it("23. empty defs no-op with spies/throwing deps — none called", async () => {
    const listAgg = vi.fn(async () => {
      throw new Error("aggregates must not be called on empty defs");
    });
    const apply = vi.fn(async () => {
      throw new Error("apply must not be called on empty defs");
    });
    const listAlerts = vi.fn(async () => {
      throw new Error("listAlerts must not be called on empty defs");
    });
    const listReviews = vi.fn(async () => {
      throw new Error("listReviews must not be called on empty defs");
    });
    const aggregates: FinOpsAggregatePort = {
      async replaceProjectPeriodAggregates() {
        throw new Error("replace must not be called");
      },
      async readAggregate() {
        throw new Error("readAggregate must not be called");
      },
      async listAggregatesForProjectPeriod() {
        return listAgg();
      },
      async withExclusiveProjectPeriodRebuild() {
        throw new Error("rebuild must not be called");
      },
    };
    const alertReview = {
      applyProjectPeriodEvaluation: apply,
      listAlertsForProjectPeriod: listAlerts,
      listReviewsForProjectPeriod: listReviews,
    };
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates,
        alertReview,
        nowIso: () => {
          throw new Error("nowIso must not be called on empty defs");
        },
      },
      { projectId: "p1", periodStart: "2026-08-01", definitions: [] },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.noop).toBe(true);
    expect(result.evaluatedDefinitionCount).toBe(0);
    expect(result.alerts).toEqual([]);
    expect(result.reviews).toEqual([]);
    expect(listAgg).not.toHaveBeenCalled();
    expect(apply).not.toHaveBeenCalled();
    expect(listAlerts).not.toHaveBeenCalled();
    expect(listReviews).not.toHaveBeenCalled();
  });

  it("24. apply throws → FINOPS_T3_APPLY_THROWN; promise resolved; secret not leaked", async () => {
    const FAKE_SECRET = "super-secret-token-DO-NOT-LEAK-9f3a";
    const alertReview = createMemoryFinOpsAlertReview();
    vi.spyOn(alertReview, "applyProjectPeriodEvaluation").mockImplementation(
      async () => {
        throw new Error(`apply boom ${FAKE_SECRET}`);
      },
    );
    const resultPromise = evaluateProjectPeriodThresholds(
      {
        aggregates: memoryAggregates([
          agg({
            projectId: "p1",
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: FICT_ABOVE,
          }),
        ]),
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        definitions: [alertDef()],
      },
    );
    await expect(resultPromise).resolves.toMatchObject({
      outcome: "failed",
      code: "FINOPS_T3_APPLY_THROWN",
      finopsSideOnly: true,
    });
    const result = await resultPromise;
    expect(result.outcome).toBe("failed");
    if (result.outcome !== "failed") return;
    expect(result.message).not.toContain(FAKE_SECRET);
    expect(result.message).not.toMatch(/super-secret/i);
  });

  it("25. recompute wrapper after T2 success + T3 throw → FINOPS_T3_EVALUATION_THROWN", async () => {
    const FAKE_SECRET = "eval-secret-LEAK-CHECK-7c2b";
    const pair = createMemoryFinOpsT2Pair();
    const identity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "r1",
      evidenceClass: "estimated",
      correctionRef: null,
      amount: FICT_ABOVE,
      currency: "USD",
    });
    await pair.reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId: "p1",
      executionRunId: "r1",
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_ABOVE,
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
    const alertReview = createMemoryFinOpsAlertReview();
    // T2 uses withExclusiveProjectPeriodRebuild; T3 evaluate uses listAggregates.
    // Poison list result so parseMoneyString throws outside apply containment.
    const aggregates: FinOpsAggregatePort = {
      replaceProjectPeriodAggregates: (input) =>
        pair.aggregates.replaceProjectPeriodAggregates(input),
      readAggregate: (key) => pair.aggregates.readAggregate(key),
      withExclusiveProjectPeriodRebuild: (input, work) =>
        pair.aggregates.withExclusiveProjectPeriodRebuild(input, work),
      async listAggregatesForProjectPeriod(input) {
        const rows = await pair.aggregates.listAggregatesForProjectPeriod(input);
        return rows.map((r) => ({
          ...r,
          estimatedAmount: `not-money-${FAKE_SECRET}`,
        }));
      },
    };
    const resultPromise = recomputeAggregatesThenEvaluateThresholds(
      {
        aggregates,
        reconciliation: pair.reconciliation,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
        definitions: [alertDef()],
      },
      { projectId: "p1", periodStart: "2026-08-01" },
    );
    await expect(resultPromise).resolves.toMatchObject({
      t2: { outcome: "succeeded" },
      t3Attempted: true,
      t3: {
        outcome: "failed",
        code: "FINOPS_T3_EVALUATION_THROWN",
        finopsSideOnly: true,
      },
    });
    const result = await resultPromise;
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t3?.outcome).toBe("failed");
    if (result.t3?.outcome !== "failed") return;
    expect(result.t3.message).not.toContain(FAKE_SECRET);
  });

  it("26. reconcile wrapper after T2 success + T3 throw → FINOPS_T3_EVALUATION_THROWN", async () => {
    const FAKE_SECRET = "recon-secret-LEAK-CHECK-4e1d";
    const pair = createMemoryFinOpsT2Pair();
    const alertReview = createMemoryFinOpsAlertReview();
    const aggregates: FinOpsAggregatePort = {
      replaceProjectPeriodAggregates: (input) =>
        pair.aggregates.replaceProjectPeriodAggregates(input),
      readAggregate: (key) => pair.aggregates.readAggregate(key),
      withExclusiveProjectPeriodRebuild: (input, work) =>
        pair.aggregates.withExclusiveProjectPeriodRebuild(input, work),
      async listAggregatesForProjectPeriod(input) {
        const rows = await pair.aggregates.listAggregatesForProjectPeriod(input);
        return rows.map((r) => ({
          ...r,
          observedAmount: `not-money-${FAKE_SECRET}`,
        }));
      },
    };
    const resultPromise = reconcileProjectPeriodThenEvaluateThresholds(
      {
        aggregates,
        reconciliation: pair.reconciliation,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
        definitions: [
          {
            ...reviewDef(),
            basis: "observed",
            amount: FICT_REVIEW_AMOUNT,
          },
        ],
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-1",
        facts: [
          {
            executionRunId: "run-obs",
            usageEventId: null,
            evidenceClass: "observed",
            sourceOfTruth: "PROVIDER_OBSERVED",
            amount: "12.00000000",
            currency: "USD",
            correctionRef: "corr-1",
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    await expect(resultPromise).resolves.toMatchObject({
      t2: { outcome: "succeeded" },
      t3Attempted: true,
      t3: {
        outcome: "failed",
        code: "FINOPS_T3_EVALUATION_THROWN",
        finopsSideOnly: true,
      },
    });
    const result = await resultPromise;
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t3?.outcome).toBe("failed");
    if (result.t3?.outcome !== "failed") return;
    expect(result.t3.message).not.toContain(FAKE_SECRET);
  });
});
```


### FILE 4: `projects/sfia-studio/147-assistant-sfia-native-openai-finops-technical-lot-t3-execution.md`

```markdown
# 147 — FinOps Technical Lot T3 — Alert & Morris Review State — Execution

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/147-assistant-sfia-native-openai-finops-technical-lot-t3-execution.md`
**Cycle:** 8 — Delivery · FinOps Technical Lot T3
**Profil:** Critical
**Typologie:** EVOL / CODE / DOC / TEST
**Statut:** T3 DELIVERY FOUNDATION LOCAL — NO PROJECT COMMIT / PUSH / PR

---

## A. Statut et anti-claims

| Claim | Statut |
|-------|--------|
| GO Delivery T3 executed | **TRUE** |
| A1+B3+C1+D2+E1+F3 implemented locally | **TRUE** |
| T6-ext event names SELECTED | **FALSE** — DEFERRED |
| Real thresholds 15/20/25/30 activated | **FALSE** |
| Product IAM / session Morris | **FALSE** — NOT_SELECTED |
| Ack/resolve product APIs | **FALSE** |
| T1/T2/T6 runtime modified | **FALSE** |
| decision/** modified | **FALSE** |
| Project git add/commit/push/PR/merge | **FALSE** |
| T4/T5 Delivery | **FALSE** |
| Document 145/146 modified | **FALSE** — byte-identical |

---

## B. GO Morris exact

```
GO Delivery T3.
```

Consumed with validated decisions: A1 + B3 + C1 + D2 + E1 + F3 ; D-T3-T6EXT-CONTRACT-01 exact event names DEFERRED.

---

## C. Horodatage

| Fuseau | Valeur |
|--------|--------|
| CEST | 2026-08-07 19:22:15 CEST (+0200) |
| UTC | 2026-08-07 17:22:15 UTC |

---

## D. Git / branche

| Field | Value |
|-------|-------|
| Worktree | `.tmp-sfia-review/worktrees/finops-t3-preparation` |
| Delivery branch | `delivery/sfia-studio-assistant-sfia-native-openai-finops-t3-alert-morris-review-state` |
| HEAD | `b8259859983577c31965aa877c956e7a25dd1c4d` |
| origin/main | `b8259859983577c31965aa877c956e7a25dd1c4d` |
| Staged | empty (project files untracked only) |
| Handoff before tip | `bf608f7de0d61098bd34383edf3d2ba5cec7a780` |
| Handoff before blob | `63ba9724efa478dd17e6283940b414450f09915e` |

---

## E. Relation 145 / 146 / 147

| Doc | Role |
|-----|------|
| **145** | Pre-arbitration preparation — **IMMUTABLE** this cycle |
| **146** | Post-arbitration decisions applied — **IMMUTABLE** this cycle |
| **147** | Delivery execution record (this document) |

### SHA-256 (must remain forever)

| Doc | SHA-256 |
|-----|---------|
| 145 | `809bc5bd20fc23c0c7d3368728e81193e1fe459f26c314d1ba1d4526b61540ba` |
| 146 | `a5eda99a97ab5887407db8b6290e6cae0405ed2b59a22a60b9ed7f4662150da1` |

---

## F. Décisions implémentées

| ID | Value | Delivery effect |
|----|-------|-----------------|
| D-T3-STATE-01 | A1 | Durable PG tables `finops_alert_state` + `finops_morris_review_state` separate from T6 audit |
| D-T3-TRIGGER-01 | B3 | `evaluateAfterT2` wrappers after T2 success; explicit `evaluateProjectPeriodThresholds` |
| D-T3-DEDUPE-01 | C1 | ONCE key projectId+periodStart+thresholdCode+currency ; UNIQUE DB |
| D-T3-LIFECYCLE-01 | D2 | Alert open/cleared · Review pending/acknowledged/resolved/superseded (system writes pending/superseded only) |
| D-T3-AUTHORITY-01 | E1 | System create pending OK ; no product ack/resolve ; IAM NOT_SELECTED |
| D-T3-CALIBRATION-01 | F3 | Injected definitions only ; no 15/20/25/30 runtime constants |
| D-T3-T6EXT-CONTRACT-01 | DEFERRED | No T6 enum/migration change ; draft names not adopted |

---

## G. Manifest réel (13 paths)

PRESERVE untracked:

1. `projects/sfia-studio/145-assistant-sfia-native-openai-finops-technical-lot-t3-alert-morris-review-preparation.md`
2. `projects/sfia-studio/146-assistant-sfia-native-openai-finops-technical-lot-t3-decisions-applied.md`

CREATE:

3. `projects/sfia-studio/147-assistant-sfia-native-openai-finops-technical-lot-t3-execution.md`
4. `app/lib/oa/finops/application/types.alertReview.ts`
5. `app/lib/oa/finops/application/t3Identity.ts`
6. `app/lib/oa/finops/application/evaluateProjectPeriodThresholds.ts`
7. `app/lib/oa/finops/application/evaluateAfterT2.ts`
8. `app/lib/oa/finops/ports/finopsAlertReviewPort.ts`
9. `app/lib/oa/finops/infrastructure/memory/memoryFinOpsAlertReview.ts`
10. `app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAlertReviewStore.ts`
11. `app/db/migrations/1754600002000_finops-t3-alert-review-state.js`
12. `app/__tests__/oa/finops/t3.alert-review.unit.test.ts`
13. `app/__tests__/oa/finops/postgres/t3.alert-review.integration.test.ts`

No 14th path. No rename. Existing T1/T2/T6/index/runtime untouched.

---

## H. Choix d’implémentation bornés

### Schema / tables

- `finops_alert_state` — informational alert durable state
- `finops_morris_review_state` — Morris review durable state
- Constraints: state / basis / currency /^[A-Z]{3}$/ / period month-start / threshold_amount > 0
- UNIQUE C1 on (project_id, period_start, threshold_code, currency)
- UNIQUE dedup_key ; indexes (project_id, period_start)
- No FK to `finops_usage_aggregate`
- DOWN refuses drop when rows exist

### Migration order

```
1754500000000 T1
< 1754600000000 T2
< 1754600001000 T6
< 1754600002000 T3
```

### C1 identity

`FINOPS_T3_IDENTITY_CONTRACT_VERSION=t3-v1` + projectId + periodStart + thresholdCode + currency → SHA-256 → prefixes `t3_dedup_` / `alert_` / `review_`.

Conflict on incompatible same-C1 definitions in one config: `FINOPS_T3_THRESHOLD_CONFIG_CONFLICT`.

### Threshold definition F3

Injected `FinOpsThresholdDefinition` only. Empty list = success no-op. FICTITIOUS test fixtures only.

### Comparator >=

Crossing uses existing Money (`amountMinor` BigInt): `evaluatedAmount >= thresholdAmount`.
This is an **implementation detail** of the foundation engine, **not** a Morris calibration decision. No Number/parseFloat/toFixed authoritative math.

### B3 wrappers

`recomputeAggregatesThenEvaluateThresholds` / `reconcileProjectPeriodThenEvaluateThresholds` call T2 first; evaluate T3 only after T2 success returns. No T2 lock held. Explicit evaluate remains independently callable.

### Failure posture

- T2 fail → no T3
- T2 success + T3 fail → return composite with T2 success preserved (`finopsSideOnly`); no T2 rollback

### E1 / IAM

Port exposes apply + list only. No acknowledge/resolve services. Product IAM NOT_SELECTED.

### T6-ext

Deferred. No draft event names in production code. T6 CHECK remains foundation capture-only.

### Concurrency / idempotence

T3 advisory lock `finops-t3:<projectId>` + periodStart (xact). Distinct from T2 `finops-a1:`. UNIQUE C1 as independent DB defence.

### Stale rebuild guard

Incoming `rebuildVersion` < persisted → no overwrite.

### Evidence evolution

estimated → observed → billed updates same C1 row (basis/amounts/version), no new identity.

### Data minimization

No prompts, secrets, raw provider payloads, actor/identity fields for deferred privileged mutations.

---

## I. Tests

Unit (`t3.alert-review.unit.test.ts`): items 1–22 with FICTITIOUS amounts (7.25 / 11.50 / etc.) — not 15/20/25/30.

Integration (`t3.alert-review.integration.test.ts`): migration order, tables, persistence, C1, concurrency, transitions, stale, isolation, durability, no seeds, T6 CHECK foundation-only, T1/T2/T6 present.

Regressions: typecheck, lint, build, vitest finops, npm test, ephemeral local PG migrate:up + test:db, git diff --check.

---

## J. Résultats

| Check | Result |
|-------|--------|
| typecheck | PASS |
| lint | PASS (0 warnings/errors) |
| build | PASS |
| vitest t3.alert-review.unit | **22/22 PASS** |
| vitest __tests__/oa/finops (no DB) | **131 PASS / 31 SKIP** |
| npm test | **148 files / 1478 tests PASS** |
| migrate:up (ephemeral PG16 Docker) | T1→T2→T6→T3 complete |
| test:db | **31/31 PASS** (incl. 7 T3 integration) |
| git diff --check | PASS |
| Threshold scan (new code) | No activation constants 15/20/25/30 (only negative assertion regex in integration test) |
| 145/146 SHA | unchanged byte-identical |
| Ephemeral PG | torn down (`finops-t3-pg-ephemeral` removed) |

---

## K. Réserves

| Reserve | Statut |
|---------|--------|
| R-T6-RUNTIME-COMPOSITION-01 | OPEN |
| R-PR-T2-API-01 | OPEN MINOR |
| T6-ext event names | DEFERRED |
| Real threshold calibration | REQUIRED before activation |
| Product Morris identity | REQUIRED before privileged mutations |
| Product IAM | NOT_SELECTED |

---

## L. Hors scope

T4/T5 · Neon · provider-real · UI/HTTP · external notifications · cron/poller · ack/resolve product · T6-ext · real 15/20/25/30 · project commit/push/PR · modify T1/T2/T6/decision/**

---

## M. Git final

HEAD remains `b8259859983577c31965aa877c956e7a25dd1c4d`. Delivery branch local only. Project files untracked. Staged empty. No project commit/push/PR.

---

## N. Verdict

```
FINOPS TECHNICAL LOT T3 —
LOCAL DELIVERY IMPLEMENTATION COMPLETE WITH RESERVES —

A1 MATERIALIZED DURABLE STATE IMPLEMENTED —
D2 ALERT / MORRIS REVIEW SPLIT IMPLEMENTED —
C1 CORE ONCE IDENTITY IMPLEMENTED —
B3 POST-T2 + EXPLICIT EVALUATE IMPLEMENTED —
F3 ENGINE WITHOUT REAL ACTIVE AMOUNTS IMPLEMENTED —
E1 SYSTEM REVIEW CREATION IMPLEMENTED —
PRIVILEGED MORRIS MUTATIONS NOT ACTIVATED —

T3 MIGRATION ADDITIVE VERIFIED —
T1/T2/T6 REGRESSION GREEN —
LOCAL POSTGRESQL VALIDATION GREEN —
CONCURRENCY / IDEMPOTENCE VERIFIED —
STALE REBUILD PROTECTION VERIFIED —

145 PRE-ARBITRATION RECORD PRESERVED —
146 DECISIONS RECORD PRESERVED —
147 DELIVERY EXECUTION RECORD CREATED —

NO REAL THRESHOLD ACTIVATION —
PRODUCT IAM NOT_SELECTED —
NO ACK/RESOLVE PRODUCT MUTATION —
NO T4 —
NO T5 —
NO T6-EXT —
NO T6 EVENT NAME ADOPTION —
NO GLOBAL T6 COMPOSITION —

R-T6-RUNTIME-COMPOSITION-01 OPEN —
R-PR-T2-API-01 OPEN MINOR —
T6-EXT-T2 EXCLUDED —
T6-EXT-T3T4 NOT AUTHORIZED —

NO PROJECT STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —

READY FOR CHATGPT DELIVERY VALIDATION
```

---

## O. Cycle 8 Critical correction — F3 no-op + B3 failure posture

**Statut correction:** LOCAL DELIVERY CORRECTION APPLIED — NO PROJECT COMMIT / PUSH / PR

### O.1 ChatGPT NOT READY blocker (BEFORE)

ChatGPT Delivery validation returned **NOT READY** on Cycle 8 Critical path for:

1. **F3 empty-definitions path not a true no-op** — `definitions.length === 0` still called `alertReview.listAlertsForProjectPeriod` / `listReviewsForProjectPeriod` (side effects / store coupling on the anti-activation path).
2. **`applyProjectPeriodEvaluation` throw not contained** — unexpected apply rejection could reject the evaluate promise and leak raw error text.
3. **B3 wrappers lacked defensive boundary** — unexpected throws from `evaluateProjectPeriodThresholds` after T2 success could reject the wrapper promise and erase the composite T2-succeeded posture.

### O.2 GO correction (exact)

```
GO correction T3 — sécuriser F3 no-op + B3 failure posture.
```

### O.3 Fixes (allowed paths only)

| Fix | Path | Behavior |
|-----|------|----------|
| **F3 true no-op** | `evaluateProjectPeriodThresholds.ts` | `definitions.length === 0` → immediate `succeeded` / `noop: true` / empty alerts+reviews / `evaluatedDefinitionCount: 0` — **no** `aggregates.*`, **no** alertReview list/apply |
| **Apply throw containment** | `evaluateProjectPeriodThresholds.ts` | `applyProjectPeriodEvaluation` wrapped: unexpected throw → `failed` / `FINOPS_T3_APPLY_THROWN` / `finopsSideOnly: true` / sanitized message (no raw/sensitive content) |
| **B3 defensive boundary** | `evaluateAfterT2.ts` | private `safeEvaluate` around evaluate; unexpected throw → `FINOPS_T3_EVALUATION_THROWN` / `finopsSideOnly: true`; wrappers always resolve `{ t2: succeeded, t3: failed, t3Attempted: true }` and never reject solely due to T3 throw |

### O.4 Tests added (keep 1–22; add 23–26)

| # | Assertion |
|---|-----------|
| 23 | empty defs no-op with spies/throwing deps — aggregates list / apply / listAlerts / listReviews **none called** |
| 24 | apply throws → `FINOPS_T3_APPLY_THROWN`; promise **resolved**; fake secret **not** in message |
| 25 | recompute wrapper after T2 success + T3 throw → `FINOPS_T3_EVALUATION_THROWN`; T2 succeeded preserved |
| 26 | reconcile wrapper after T2 success + T3 throw → `FINOPS_T3_EVALUATION_THROWN`; T2 succeeded preserved |

### O.5 QA (correction)

| Check | Result |
|-------|--------|
| vitest t3.alert-review.unit | **26/26 PASS** |
| typecheck | PASS |
| lint | PASS (0 warnings/errors) |
| build | PASS |
| vitest `__tests__/oa/finops` (no DB) | **135 PASS / 31 SKIP** |
| npm test (serial + ephemeral local PG) | **148 files / 1482 tests PASS** |
| git diff --check | PASS |
| migrate:up (ephemeral PG16 Docker, NOT Neon) | T1→T2→T6→T3 complete |
| test:db | **31/31 PASS** |
| Ephemeral PG | torn down after validation |
| 145 SHA | unchanged `809bc5bd20fc23c0c7d3368728e81193e1fe459f26c314d1ba1d4526b61540ba` |
| 146 SHA | unchanged `a5eda99a97ab5887407db8b6290e6cae0405ed2b59a22a60b9ed7f4662150da1` |
| Manifest | still exactly **13** T3 paths — no 14th file |
| Decisions A1/B3/C1/D2/E1/F3 | **unchanged** (posture hardened only) |

### O.6 Absolute bans respected

NO new project files · NO migration/schema/store changes · NO modify 145/146/T1/T2/T6/decision/** · NO A1/C1/D2/E1 redesign · NO threshold activation/IAM/ack-resolve/T4/T5/T6-ext · NO project git add/commit/push/PR · Only the 4 allowed paths modified.

### O.7 Horodatage correction

| Fuseau | Valeur |
|--------|--------|
| CEST | 2026-08-07 19:51:35 CEST (+0200) |
| UTC | 2026-08-07 17:51:35 UTC |

### O.8 Verdict correction

```
FINOPS TECHNICAL LOT T3 —
LOCAL DELIVERY CORRECTION COMPLETE —

F3 TRUE NO-OP SECURED —
APPLY THROW CONTAINED (FINOPS_T3_APPLY_THROWN) —
B3 DEFENSIVE BOUNDARY SECURED (FINOPS_T3_EVALUATION_THROWN) —
UNIT TESTS 26/26 GREEN —
LOCAL POSTGRESQL VALIDATION GREEN —
145/146 IMMUTABLE —
13-PATH MANIFEST PRESERVED —
DECISIONS UNCHANGED —

NO PROJECT STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —

READY FOR CHATGPT T3 DELIVERY RE-VALIDATION
```

---

*Document 147 — T3 Delivery execution record + Cycle 8 Critical correction. Documents 145 and 146 remain immutable.*
```


---

## Verdict for ChatGPT re-validation

```
FINOPS TECHNICAL LOT T3 —
LOCAL DELIVERY CORRECTION COMPLETE —

F3 TRUE NO-OP SECURED —
APPLY THROW CONTAINED (FINOPS_T3_APPLY_THROWN) —
B3 DEFENSIVE BOUNDARY SECURED (FINOPS_T3_EVALUATION_THROWN) —
UNIT TESTS 26/26 GREEN —
LOCAL POSTGRESQL VALIDATION GREEN —
145/146 IMMUTABLE —
13-PATH MANIFEST PRESERVED —
DECISIONS UNCHANGED —

NO PROJECT STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —

READY FOR CHATGPT T3 DELIVERY RE-VALIDATION
```
