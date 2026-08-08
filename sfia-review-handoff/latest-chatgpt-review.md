# ChatGPT Review Pack — FinOps Technical Lot T4 Enforcement Projection Refresh — Cycle 8 Delivery (Full)

## Meta

- date_cest: 2026-08-08 09:04:16 UTC+02:00 (+0200)
- date_utc: 2026-08-08 07:04:16 UTC
- cycle: 8 — Delivery / implémentation — T4 Enforcement Projection Refresh
- profil: Critical
- typologie: EVOL / CODE / TEST / DOC
- niveau: Full
- GO Morris exact: `ok go`
- GO autorise: Delivery T4 projection refresh (canonical post-T2 refresh orchestration + tests + doc 155 + Full pack + handoff L3)
- GO N'autorise PAS: T2 core · evaluateAfterT2 · rebuildEnforcementProjection · evaluateFinOpsEnforcement · execution-run · migrations · ports · T3/T6/T7/T5 · 150/154 · scheduler · pre-provider rebuild · SHADOW/MONITOR/E1 · thresholds 15/20/25/30 · project commit/push/PR/merge

## 1. Git Truth

| Field | Value |
|-------|-------|
| Repo | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t4-projection-refresh` |
| Branch | `delivery/sfia-studio-assistant-sfia-native-openai-finops-t4-projection-refresh` |
| HEAD | `7f5f0c2d8b26dc094e6bae90d268697d2cb93e42` |
| origin/main | `7f5f0c2d8b26dc094e6bae90d268697d2cb93e42` |
| Template SHA | `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| Handoff tip (before) | `043d5f8930979f15d7f1139754d2ae975d2948d8` |
| Handoff blob (before) | `1118de76a6bb23c56c1d6923592778d3376567c1` |
| Handoff commit (before) | `docs(review-handoff): publish T6 post-merge` |
| Historical T7 decisions | commit `e6e026c9629535e5a9d8852f4613acf473b417e0` / blob `79e29f7df68d4c522610c5b63377b3bf37b4e3f0` |
| Project push | **none** |

## 2. Decision consumed

```text
D-T7-PROJECTION-REFRESH-GATE-01 =
A SELECTED —
REFRESH FROM AUTHORITATIVE T2 MUTATION / RECONCILIATION FRONTIERS —
BEFORE SHADOW.
```

## 3. Discovery — T2 frontiers + runtime consumers

Authoritative frontiers: `recomputeAggregates`, `reconcileProjectPeriod`, `insertCostEvent` (port; used by reconcile + tests).

| Call-site class | Finding |
|-----------------|--------|
| definitions | recomputeAggregates / reconcileProjectPeriod / rebuildEnforcementProjection |
| reusable wrappers | evaluateAfterT2 (T3 only; unmodified) |
| server composition | composeFinOpsRuntime = T1 capture + T6 audit only — **no T2 consumer** |
| product runtime outside finops | **none** |
| tests | unit/integration/fixture only |

**Q1 real runtime T2 consumer?** NO → **Case B**
**Q2 frontiers covered?** Yes via two post-T2 wrappers (reconcile refreshes once)
**Q3 ordering?** After T2 success; T4 own short lock; PRF-07: t2_exit before t4_enter

## 4. Reserve semantic determination (Case B)

```text
R-T4-PROJECTION-REFRESH-01 =
OPEN —
CANONICAL POST-T2 T4 REFRESH ORCHESTRATION DELIVERED AND TESTED —
RUNTIME CONSUMER / T7 FOUNDATION WIRING STILL REQUIRED BEFORE SHADOW.
```

Verdict:

```text
DELIVERY COMPLETE WITH RESERVE OPEN.
```

Anti-claim:

```text
T4 PROJECTION REFRESH ORCHESTRATION DELIVERED AND TESTED —
NO AUTOMATIC RUNTIME FRESHNESS CLAIM —
SHADOW NOT ACTIVATED.
```

## 5. Exact project manifest (4 CREATE / 0 MODIFY)

1. `projects/sfia-studio/app/lib/oa/finops/application/refreshEnforcementAfterT2.ts`
2. `projects/sfia-studio/app/__tests__/oa/finops/t4.projection-refresh.unit.test.ts`
3. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts`
4. `projects/sfia-studio/155-assistant-sfia-native-openai-finops-technical-lot-t4-projection-refresh-execution.md`

## 6. Wrapper contract

Deps: aggregates, reconciliation, projection, nowIso.
APIs: `recomputeAggregatesThenRefreshEnforcementProjection` + `reconcileProjectPeriodThenRefreshEnforcementProjection`.
Result: `{ t2, t4Refresh, t4RefreshAttempted }`.
Reuses `rebuildEnforcementProjection`. T2 fail → no refresh. T4 fail/throw → T2 success preserved + sanitized.

## 7. Tests / QA

| Check | Result |
|-------|--------|
| UR-01..UR-08 | PASS (8/8) |
| PRF-01..PRF-08 | PASS (8/8) |
| T2/T3/T4 regressions | PASS |
| t4.enforcement-boundary | PASS (15) |
| FinOps postgres test:db | 8 files / 57 passed |
| typecheck / lint / build | PASS |
| migrate:up (local :55435) | PASS |
| Full serial vitest | **154 files / 1550 passed** |
| git diff --check | PASS |
| Forbidden path diffs | empty (T2/T3/T4 foundation / execution-run / migrations / ports / 150 / 154) |

Local Postgres: Docker `postgres:16-alpine` `sfia-finops-t4-projection-refresh-pg` `127.0.0.1:55435` — NOT Neon.

## 8. Carried reserves

| Reserve | Status |
|---------|--------|
| R-T6-RUNTIME-COMPOSITION-01 | **CLOSED ON MAIN** |
| R-T4-PROJECTION-REFRESH-01 | **OPEN** — Case B wording |
| R-T4-T3-SYNC-01 | OPEN — SELECTED GATE BEFORE MONITOR |
| R-PR-T2-API-01 | OPEN MINOR |
| T6-ext-T3T4 | NOT AUTHORIZED — REQUIRED BEFORE E1 |
| Calibration | REQUIRED — BEFORE MONITOR USING REAL AMOUNTS |
| Product IAM | NOT_SELECTED — REQUIRED BEFORE E1 |
| SHADOW | NOT ACTIVATED |

## 9. Final project status (expected)

```text
?? .tmp-sfia-review/
?? projects/sfia-studio/app/lib/oa/finops/application/refreshEnforcementAfterT2.ts
?? projects/sfia-studio/app/__tests__/oa/finops/t4.projection-refresh.unit.test.ts
?? projects/sfia-studio/app/__tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts
?? projects/sfia-studio/155-assistant-sfia-native-openai-finops-technical-lot-t4-projection-refresh-execution.md
staged: empty · commit/push/PR: none · HEAD still 7f5f0c2d…
```

## 10. Verdict (Case B)

```text
FINOPS TECHNICAL LOT T4 —
ENFORCEMENT PROJECTION REFRESH DELIVERY COMPLETE WITH RESERVE OPEN —

CANONICAL POST-T2 T4 REFRESH ORCHESTRATION DELIVERED AND TESTED —
REUSES rebuildEnforcementProjection —
T2 SUCCESS PRESERVED ON T4 FAILURE —
NO NESTED T2/T4 LOCK —
NO SCHEDULER —
NO PRE-PROVIDER REBUILD —
NO NEW MIGRATION —
NO NEW PORT —

R-T4-PROJECTION-REFRESH-01 OPEN —
CANONICAL POST-T2 T4 REFRESH ORCHESTRATION DELIVERED AND TESTED —
RUNTIME CONSUMER / T7 FOUNDATION WIRING STILL REQUIRED BEFORE SHADOW —

R-T6-RUNTIME-COMPOSITION-01 CLOSED ON MAIN —
SHADOW NOT ACTIVATED —

NO PROJECT STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —

READY FOR CHATGPT T4 PROJECTION REFRESH VALIDATION
```

---

# COMPLETE CREATE 1 — refreshEnforcementAfterT2.ts

Path: `projects/sfia-studio/app/lib/oa/finops/application/refreshEnforcementAfterT2.ts`

````typescript
/**
 * FinOps T4 — post-T2 enforcement projection refresh orchestration.
 *
 * T4-owned wrappers around public T2 application boundaries WITHOUT modifying T2.
 * Refresh runs only AFTER T2 success returns; never inside T2 locks/txns.
 * T4 failure must not rewrite a successful T2 outcome.
 * Reuses rebuildEnforcementProjection (no duplicated SoT/Money/lock/replace).
 */

import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type { FinOpsEnforcementProjectionPort } from "../ports/finopsEnforcementProjectionPort";
import type { FinOpsReconciliationPort } from "../ports/finopsReconciliationPort";
import { recomputeAggregates } from "./recomputeAggregates";
import {
  reconcileProjectPeriod,
  type ReconcileProjectPeriodDeps,
} from "./reconcileProjectPeriod";
import {
  rebuildEnforcementProjection,
  type RebuildEnforcementProjectionDeps,
} from "./rebuildEnforcementProjection";
import type {
  ReconcileProjectPeriodInput,
  ReconcileProjectPeriodResult,
  RecomputeAggregatesInput,
  RecomputeAggregatesResult,
} from "./types.aggregate";
import type { RebuildEnforcementProjectionResult } from "./types.enforcement";

export type RefreshEnforcementAfterT2Deps = {
  readonly aggregates: FinOpsAggregatePort;
  readonly reconciliation: FinOpsReconciliationPort;
  readonly projection: FinOpsEnforcementProjectionPort;
  readonly nowIso: () => string;
};

export type RefreshAfterRecomputeResult = {
  readonly t2: RecomputeAggregatesResult;
  readonly t4Refresh: RebuildEnforcementProjectionResult | null;
  /** True when T2 succeeded and T4 rebuild was attempted (success or failure). */
  readonly t4RefreshAttempted: boolean;
};

export type RefreshAfterReconcileResult = {
  readonly t2: ReconcileProjectPeriodResult;
  readonly t4Refresh: RebuildEnforcementProjectionResult | null;
  readonly t4RefreshAttempted: boolean;
};

function projectionDeps(
  deps: RefreshEnforcementAfterT2Deps,
): RebuildEnforcementProjectionDeps {
  return {
    projection: deps.projection,
    nowIso: deps.nowIso,
  };
}

/**
 * Defensive boundary: unexpected throws from rebuild must not reject the
 * wrapper promise or erase a successful T2 outcome. Sanitized FinOps-side only.
 */
async function safeRebuild(
  deps: RebuildEnforcementProjectionDeps,
  input: { readonly projectId: string; readonly periodStart: string },
): Promise<RebuildEnforcementProjectionResult> {
  try {
    return await rebuildEnforcementProjection(deps, input);
  } catch {
    return {
      outcome: "failed",
      code: "FINOPS_T4_REFRESH_THROWN",
      message: "Unexpected error while refreshing FinOps T4 enforcement projection",
      finopsSideOnly: true,
    };
  }
}

/**
 * Wrapper: recomputeAggregates → on success → rebuildEnforcementProjection once.
 */
export async function recomputeAggregatesThenRefreshEnforcementProjection(
  deps: RefreshEnforcementAfterT2Deps,
  input: RecomputeAggregatesInput,
): Promise<RefreshAfterRecomputeResult> {
  const t2 = await recomputeAggregates(
    { aggregates: deps.aggregates, nowIso: deps.nowIso },
    input,
  );
  if (t2.outcome !== "succeeded") {
    return { t2, t4Refresh: null, t4RefreshAttempted: false };
  }
  const t4Refresh = await safeRebuild(projectionDeps(deps), {
    projectId: input.projectId,
    periodStart: input.periodStart,
  });
  return { t2, t4Refresh, t4RefreshAttempted: true };
}

/**
 * Wrapper: reconcileProjectPeriod → on success → rebuildEnforcementProjection once.
 * Reconcile may recompute aggregates internally; this wrapper still refreshes T4
 * exactly once after the outer reconcile success (no double rebuild).
 */
export async function reconcileProjectPeriodThenRefreshEnforcementProjection(
  deps: RefreshEnforcementAfterT2Deps,
  input: ReconcileProjectPeriodInput,
): Promise<RefreshAfterReconcileResult> {
  const reconDeps: ReconcileProjectPeriodDeps = {
    reconciliation: deps.reconciliation,
    aggregates: deps.aggregates,
    nowIso: deps.nowIso,
  };
  const t2 = await reconcileProjectPeriod(reconDeps, input);
  if (t2.outcome !== "succeeded") {
    return { t2, t4Refresh: null, t4RefreshAttempted: false };
  }
  const t4Refresh = await safeRebuild(projectionDeps(deps), {
    projectId: input.projectId,
    periodStart: input.periodStart,
  });
  return { t2, t4Refresh, t4RefreshAttempted: true };
}
````

# COMPLETE CREATE 2 — t4.projection-refresh.unit.test.ts

Path: `projects/sfia-studio/app/__tests__/oa/finops/t4.projection-refresh.unit.test.ts`

````typescript
/**
 * @vitest-environment node
 *
 * FinOps T4 — post-T2 enforcement projection refresh unit tests (UR-01..UR-08).
 * FICTITIOUS fixtures only — NOT historical calibration 15/20/25/30.
 */
import { describe, expect, it, vi } from "vitest";
import {
  recomputeAggregatesThenRefreshEnforcementProjection,
  reconcileProjectPeriodThenRefreshEnforcementProjection,
} from "@/lib/oa/finops/application/refreshEnforcementAfterT2";
import { deriveCostEventIdentity } from "@/lib/oa/finops/application/t2Identity";
import type { FinOpsAggregatePort } from "@/lib/oa/finops/ports/finopsAggregatePort";
import type {
  FinOpsEnforcementProjectionPort,
  FinOpsExclusiveEnforcementOps,
} from "@/lib/oa/finops/ports/finopsEnforcementProjectionPort";
import { createMemoryFinOpsEnforcementProjection } from "@/lib/oa/finops/infrastructure/memory/memoryFinOpsEnforcementProjection";
import { createMemoryFinOpsT2Pair } from "@/lib/oa/finops/infrastructure/memory/memoryFinOpsT2";

/** FICTITIOUS — arbitrary test amounts; NOT project calibration 15/20/25/30. */
const FICT_BILLED = "5.11000000";

function projectionSyncedToReconciliation(
  reconciliation: {
    readonly listCostEventsForProjectPeriod: (input: {
      readonly projectId: string;
      readonly periodStart: string;
    }) => Promise<ReadonlyArray<unknown>>;
  },
  base = createMemoryFinOpsEnforcementProjection(),
): FinOpsEnforcementProjectionPort & {
  readonly _calls: Array<{ projectId: string; periodStart: string }>;
  readonly _base: ReturnType<typeof createMemoryFinOpsEnforcementProjection>;
} {
  const calls: Array<{ projectId: string; periodStart: string }> = [];
  return {
    _calls: calls,
    _base: base,
    async withExclusiveProjectPeriod(input, work) {
      calls.push({
        projectId: input.projectId,
        periodStart: input.periodStart,
      });
      const events = await reconciliation.listCostEventsForProjectPeriod({
        projectId: input.projectId,
        periodStart: input.periodStart,
      });
      base.seedCostEvents(events as never);
      return base.withExclusiveProjectPeriod(input, work);
    },
  };
}

describe("FinOps T4 projection refresh unit", () => {
  it("UR-01 T2 recompute failed → refreshAttempted=false → rebuild not called", async () => {
    const pair = createMemoryFinOpsT2Pair();
    const projection = projectionSyncedToReconciliation(pair.reconciliation);
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
    const result = await recomputeAggregatesThenRefreshEnforcementProjection(
      {
        aggregates: failingAggregates,
        reconciliation: pair.reconciliation,
        projection,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01" },
    );
    expect(result.t2.outcome).toBe("failed");
    expect(result.t4RefreshAttempted).toBe(false);
    expect(result.t4Refresh).toBeNull();
    expect(projection._calls).toHaveLength(0);
  });

  it("UR-02 T2 recompute success → rebuild exactly once with exact project/period", async () => {
    const pair = createMemoryFinOpsT2Pair();
    const projection = projectionSyncedToReconciliation(pair.reconciliation);
    const identity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "r1",
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
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
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "fixture-provider",
      model: "fixture-model",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T10:00:00.000Z",
    });
    const result = await recomputeAggregatesThenRefreshEnforcementProjection(
      {
        aggregates: pair.aggregates,
        reconciliation: pair.reconciliation,
        projection,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01" },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t4RefreshAttempted).toBe(true);
    expect(result.t4Refresh?.outcome).toBe("succeeded");
    expect(projection._calls).toHaveLength(1);
    expect(projection._calls[0]).toEqual({
      projectId: "p1",
      periodStart: "2026-08-01",
    });
  });

  it("UR-03 T4 refresh returns failed → T2 success preserved → T4 failure visible", async () => {
    const pair = createMemoryFinOpsT2Pair();
    const identity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "r1",
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
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
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "fixture-provider",
      model: "fixture-model",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T10:00:00.000Z",
    });
    const base = createMemoryFinOpsEnforcementProjection();
    const projection: FinOpsEnforcementProjectionPort = {
      async withExclusiveProjectPeriod(input, work) {
        const events = await pair.reconciliation.listCostEventsForProjectPeriod(
          input,
        );
        base.seedCostEvents(events);
        return base.withExclusiveProjectPeriod(input, async (ops) => {
          const failingOps: FinOpsExclusiveEnforcementOps = {
            ...ops,
            async replaceProjections() {
              throw new Error("injected projection replace failure");
            },
          };
          return work(failingOps);
        });
      },
    };
    const result = await recomputeAggregatesThenRefreshEnforcementProjection(
      {
        aggregates: pair.aggregates,
        reconciliation: pair.reconciliation,
        projection,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01" },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t4RefreshAttempted).toBe(true);
    expect(result.t4Refresh?.outcome).toBe("failed");
    if (result.t4Refresh?.outcome !== "failed") return;
    expect(result.t4Refresh.finopsSideOnly).toBe(true);
  });

  it("UR-04 unexpected T4 throw → T2 success preserved → sanitized failure", async () => {
    const FAKE_SECRET = "t4-refresh-secret-LEAK-CHECK-9a2c";
    const pair = createMemoryFinOpsT2Pair();
    const projection = projectionSyncedToReconciliation(pair.reconciliation);
    const identity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "r1",
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
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
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "fixture-provider",
      model: "fixture-model",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T10:00:00.000Z",
    });
    // Force an unexpected throw past rebuild's own catch (wrapper sanitize path).
    const rebuildMod = await import(
      "@/lib/oa/finops/application/rebuildEnforcementProjection"
    );
    const spy = vi
      .spyOn(rebuildMod, "rebuildEnforcementProjection")
      .mockRejectedValue(new Error(`boom containing ${FAKE_SECRET}`));
    try {
      const resultPromise = recomputeAggregatesThenRefreshEnforcementProjection(
        {
          aggregates: pair.aggregates,
          reconciliation: pair.reconciliation,
          projection,
          nowIso: () => "2026-08-07T12:00:00.000Z",
        },
        { projectId: "p1", periodStart: "2026-08-01" },
      );
      await expect(resultPromise).resolves.toMatchObject({
        t2: { outcome: "succeeded" },
        t4RefreshAttempted: true,
        t4Refresh: {
          outcome: "failed",
          code: "FINOPS_T4_REFRESH_THROWN",
          finopsSideOnly: true,
        },
      });
      const result = await resultPromise;
      if (result.t4Refresh?.outcome !== "failed") return;
      expect(result.t4Refresh.message).not.toContain(FAKE_SECRET);
    } finally {
      spy.mockRestore();
    }
  });

  it("UR-05 reconcile failed → no T4 refresh", async () => {
    const pair = createMemoryFinOpsT2Pair();
    const projection = projectionSyncedToReconciliation(pair.reconciliation);
    const failingReconciliation = {
      insertCostEvent: (event: Parameters<
        typeof pair.reconciliation.insertCostEvent
      >[0]) => pair.reconciliation.insertCostEvent(event),
      listCostEventsForProjectPeriod: (
        input: Parameters<
          typeof pair.reconciliation.listCostEventsForProjectPeriod
        >[0],
      ) => pair.reconciliation.listCostEventsForProjectPeriod(input),
      findReconciliationByDedup: (
        dedupKey: string,
      ) => pair.reconciliation.findReconciliationByDedup(dedupKey),
      completeReconciliationRecord: (
        input: Parameters<
          typeof pair.reconciliation.completeReconciliationRecord
        >[0],
      ) => pair.reconciliation.completeReconciliationRecord(input),
      async insertReconciliationRecord() {
        return {
          outcome: "failed" as const,
          message: "injected reconciliation persist failure",
          retryable: false,
        };
      },
    };
    const result = await reconcileProjectPeriodThenRefreshEnforcementProjection(
      {
        aggregates: pair.aggregates,
        reconciliation: failingReconciliation,
        projection,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-fail",
        facts: [
          {
            executionRunId: "run-1",
            usageEventId: null,
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            amount: FICT_BILLED,
            currency: "USD",
            correctionRef: "corr-1",
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(result.t2.outcome).toBe("failed");
    expect(result.t4RefreshAttempted).toBe(false);
    expect(result.t4Refresh).toBeNull();
    expect(projection._calls).toHaveLength(0);
  });

  it("UR-06 reconcile succeeded → exactly one T4 refresh", async () => {
    const pair = createMemoryFinOpsT2Pair();
    const projection = projectionSyncedToReconciliation(pair.reconciliation);
    const result = await reconcileProjectPeriodThenRefreshEnforcementProjection(
      {
        aggregates: pair.aggregates,
        reconciliation: pair.reconciliation,
        projection,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-ok",
        facts: [
          {
            executionRunId: "run-1",
            usageEventId: null,
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            amount: FICT_BILLED,
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
    expect(result.t4RefreshAttempted).toBe(true);
    expect(result.t4Refresh?.outcome).toBe("succeeded");
    expect(projection._calls).toHaveLength(1);
  });

  it("UR-07 no T3 evaluation side effect", async () => {
    const pair = createMemoryFinOpsT2Pair();
    const projection = projectionSyncedToReconciliation(pair.reconciliation);
    const identity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "r1",
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
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
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "fixture-provider",
      model: "fixture-model",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T10:00:00.000Z",
    });
    const result = await recomputeAggregatesThenRefreshEnforcementProjection(
      {
        aggregates: pair.aggregates,
        reconciliation: pair.reconciliation,
        projection,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01" },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t4RefreshAttempted).toBe(true);
    // Result contract has no t3 fields; refresh deps have no alertReview.
    expect(Object.prototype.hasOwnProperty.call(result, "t3")).toBe(false);
    expect(Object.prototype.hasOwnProperty.call(result, "t3Attempted")).toBe(
      false,
    );
  });

  it("UR-08 no rollout / threshold / provider call", async () => {
    const pair = createMemoryFinOpsT2Pair();
    const projection = projectionSyncedToReconciliation(pair.reconciliation);
    const identity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "r1",
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
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
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "fixture-provider",
      model: "fixture-model",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T10:00:00.000Z",
    });
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("{}", { status: 200 }),
    );
    const result = await recomputeAggregatesThenRefreshEnforcementProjection(
      {
        aggregates: pair.aggregates,
        reconciliation: pair.reconciliation,
        projection,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      { projectId: "p1", periodStart: "2026-08-01" },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t4Refresh?.outcome).toBe("succeeded");
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
    // No threshold / rollout fields on result.
    expect(
      Object.prototype.hasOwnProperty.call(result, "decision"),
    ).toBe(false);
    expect(Object.prototype.hasOwnProperty.call(result, "mode")).toBe(false);
    expect(Object.prototype.hasOwnProperty.call(result, "threshold")).toBe(
      false,
    );
  });
});
````

# COMPLETE CREATE 3 — t4.projection-refresh.integration.test.ts

Path: `projects/sfia-studio/app/__tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts`

````typescript
/**
 * @vitest-environment node
 *
 * FinOps T4 — post-T2 projection refresh PostgreSQL integration (PRF-01..PRF-08).
 * Requires DATABASE_URL (ephemeral local Postgres only — never Neon).
 * FICTITIOUS amounts only — NOT 15/20/25/30.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Pool } from "pg";
import {
  recomputeAggregatesThenRefreshEnforcementProjection,
  reconcileProjectPeriodThenRefreshEnforcementProjection,
} from "@/lib/oa/finops/application/refreshEnforcementAfterT2";
import { deriveCostEventIdentity } from "@/lib/oa/finops/application/t2Identity";
import type { FinOpsAggregatePort } from "@/lib/oa/finops/ports/finopsAggregatePort";
import type {
  FinOpsEnforcementProjectionPort,
  FinOpsExclusiveEnforcementOps,
} from "@/lib/oa/finops/ports/finopsEnforcementProjectionPort";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsAggregateStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore";
import { createPostgresFinOpsEnforcementProjectionStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsEnforcementProjectionStore";
import { createPostgresFinOpsReconciliation } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsReconciliation";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

/** FICTITIOUS — not historical calibration. */
const FICT_BILLED = "5.11000000";
const FICT_PROVIDER = "7.24000000";
const FICT_API = "99.99000000";
const FICT_LOCAL = "11.11000000";
const FICT_PARAM = "22.22000000";
const FICT_UNKNOWN = "33.33000000";
const FICT_EUR = "3.50000000";
const FICT_BILLED_CORR = "8.88000000";

describeDb("FinOps T4 PostgreSQL projection refresh integration", () => {
  let pool: Pool;
  const suffix = `${Date.now()}`;

  beforeAll(() => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  function depsFor(projectSuffix: string) {
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    return {
      projectId: `proj-prf-${projectSuffix}-${suffix}`,
      reconciliation,
      aggregates,
      projection,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };
  }

  it("PRF-01 reconciliation mutation refresh — BILLED reflected", async () => {
    const { projectId, reconciliation, aggregates, projection, nowIso } =
      depsFor("01");
    const result = await reconcileProjectPeriodThenRefreshEnforcementProjection(
      { aggregates, reconciliation, projection, nowIso },
      {
        projectId,
        periodStart: "2026-08-01",
        sourceBatchId: `batch-01-${suffix}`,
        facts: [
          {
            executionRunId: `run-01-${suffix}`,
            usageEventId: null,
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            amount: FICT_BILLED,
            currency: "USD",
            correctionRef: `corr-01-${suffix}`,
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t4RefreshAttempted).toBe(true);
    expect(result.t4Refresh?.outcome).toBe("succeeded");
    if (result.t4Refresh?.outcome !== "succeeded") return;
    const usd = result.t4Refresh.projections.find((p) => p.currency === "USD");
    expect(usd?.billedAmount).toBe(FICT_BILLED);
    expect(usd?.blockingEligibleAmount).toBe(FICT_BILLED);
    expect(usd?.rebuildVersion).toBe(1);
  });

  it("PRF-02 provider observed reflected", async () => {
    const { projectId, reconciliation, aggregates, projection, nowIso } =
      depsFor("02");
    const result = await reconcileProjectPeriodThenRefreshEnforcementProjection(
      { aggregates, reconciliation, projection, nowIso },
      {
        projectId,
        periodStart: "2026-08-01",
        sourceBatchId: `batch-02-${suffix}`,
        facts: [
          {
            executionRunId: `run-02-${suffix}`,
            usageEventId: null,
            evidenceClass: "observed",
            sourceOfTruth: "PROVIDER_OBSERVED",
            amount: FICT_PROVIDER,
            currency: "USD",
            correctionRef: `corr-02-${suffix}`,
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t4Refresh?.outcome).toBe("succeeded");
    if (result.t4Refresh?.outcome !== "succeeded") return;
    const usd = result.t4Refresh.projections.find((p) => p.currency === "USD");
    expect(usd?.providerObservedAmount).toBe(FICT_PROVIDER);
    expect(usd?.blockingEligibleAmount).toBe(FICT_PROVIDER);
    expect(usd?.providerObservedEventCount).toBe(1);
  });

  it("PRF-03 non-blocking evidence excluded from blockingEligibleAmount", async () => {
    const { projectId, reconciliation, aggregates, projection, nowIso } =
      depsFor("03");
    for (const [id, sot, evidence, amount] of [
      ["b", "BILLED", "billed", FICT_BILLED],
      ["a", "API_USAGE", "observed", FICT_API],
      ["l", "LOCAL_COUNT", "estimated", FICT_LOCAL],
      ["p", "PARAMETRIC_ESTIMATE", "estimated", FICT_PARAM],
      ["u", "UNKNOWN", "unknown", FICT_UNKNOWN],
    ] as const) {
      const identity = deriveCostEventIdentity({
        projectId,
        executionRunId: `run-03-${id}-${suffix}`,
        evidenceClass: evidence,
        correctionRef: null,
        amount,
        currency: "USD",
      });
      await reconciliation.insertCostEvent({
        costEventId: identity.costEventId,
        dedupKey: identity.dedupKey,
        projectId,
        executionRunId: `run-03-${id}-${suffix}`,
        usageEventId: null,
        periodStart: "2026-08-01",
        currency: "USD",
        amount,
        evidenceClass: evidence,
        sourceOfTruth: sot,
        estimationStatus: "available",
        correctionRef: null,
        catalogVersion: null,
        provider: "fixture-provider",
        model: "fixture-model",
        unit: null,
        billingQuantum: null,
        usageQuantity: null,
        occurredAt: "2026-08-07T10:00:00.000Z",
      });
    }
    const result = await recomputeAggregatesThenRefreshEnforcementProjection(
      { aggregates, reconciliation, projection, nowIso },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t4Refresh?.outcome).toBe("succeeded");
    if (result.t4Refresh?.outcome !== "succeeded") return;
    const usd = result.t4Refresh.projections.find((p) => p.currency === "USD");
    expect(usd?.blockingEligibleAmount).toBe(FICT_BILLED);
    expect(usd?.billedEventCount).toBe(1);
    expect(usd?.eligibleCostEventCount).toBe(1);
  });

  it("PRF-04 multi-currency isolation — USD/EUR separate, no FX", async () => {
    const { projectId, reconciliation, aggregates, projection, nowIso } =
      depsFor("04");
    const result = await reconcileProjectPeriodThenRefreshEnforcementProjection(
      { aggregates, reconciliation, projection, nowIso },
      {
        projectId,
        periodStart: "2026-08-01",
        sourceBatchId: `batch-04-${suffix}`,
        facts: [
          {
            executionRunId: `run-04-usd-${suffix}`,
            usageEventId: null,
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            amount: FICT_BILLED,
            currency: "USD",
            correctionRef: `corr-04-usd-${suffix}`,
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
          {
            executionRunId: `run-04-eur-${suffix}`,
            usageEventId: null,
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            amount: FICT_EUR,
            currency: "EUR",
            correctionRef: `corr-04-eur-${suffix}`,
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(result.t4Refresh?.outcome).toBe("succeeded");
    if (result.t4Refresh?.outcome !== "succeeded") return;
    expect(result.t4Refresh.projections).toHaveLength(2);
    const usd = result.t4Refresh.projections.find((p) => p.currency === "USD");
    const eur = result.t4Refresh.projections.find((p) => p.currency === "EUR");
    expect(usd?.blockingEligibleAmount).toBe(FICT_BILLED);
    expect(eur?.blockingEligibleAmount).toBe(FICT_EUR);
    // No cross-currency sum string present.
    expect(
      result.t4Refresh.projections.every(
        (p) =>
          p.blockingEligibleAmount === FICT_BILLED ||
          p.blockingEligibleAmount === FICT_EUR,
      ),
    ).toBe(true);
  });

  it("PRF-05 correction / subsequent mutation refreshes and increments version", async () => {
    const { projectId, reconciliation, aggregates, projection } = depsFor("05");
    const first = await reconcileProjectPeriodThenRefreshEnforcementProjection(
      {
        aggregates,
        reconciliation,
        projection,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId,
        periodStart: "2026-08-01",
        sourceBatchId: `batch-05a-${suffix}`,
        facts: [
          {
            executionRunId: `run-05a-${suffix}`,
            usageEventId: null,
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            amount: FICT_BILLED,
            currency: "USD",
            correctionRef: `corr-05a-${suffix}`,
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(first.t4Refresh?.outcome).toBe("succeeded");
    if (first.t4Refresh?.outcome !== "succeeded") return;
    expect(first.t4Refresh.projections[0]!.rebuildVersion).toBe(1);
    expect(first.t4Refresh.projections[0]!.blockingEligibleAmount).toBe(
      FICT_BILLED,
    );

    const second = await reconcileProjectPeriodThenRefreshEnforcementProjection(
      {
        aggregates,
        reconciliation,
        projection,
        nowIso: () => "2026-08-07T13:00:00.000Z",
      },
      {
        projectId,
        periodStart: "2026-08-01",
        sourceBatchId: `batch-05b-${suffix}`,
        facts: [
          {
            executionRunId: `run-05b-${suffix}`,
            usageEventId: null,
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            amount: FICT_BILLED_CORR,
            currency: "USD",
            correctionRef: `corr-05b-${suffix}`,
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T11:00:00.000Z",
          },
        ],
      },
    );
    expect(second.t2.outcome).toBe("succeeded");
    expect(second.t4Refresh?.outcome).toBe("succeeded");
    if (second.t4Refresh?.outcome !== "succeeded") return;
    // Append-only: both billed events contribute.
    expect(second.t4Refresh.projections[0]!.blockingEligibleAmount).toBe(
      "13.99000000",
    );
    expect(second.t4Refresh.projections[0]!.rebuildVersion).toBe(2);
    expect(second.t4Refresh.projections[0]!.rebuiltAt).toBe(
      "2026-08-07T13:00:00.000Z",
    );
  });

  it("PRF-06 T4 rebuild failure isolation — T2 success remains durable", async () => {
    const { projectId, reconciliation, aggregates, projection, nowIso } =
      depsFor("06");
    const failingProjection: FinOpsEnforcementProjectionPort = {
      async withExclusiveProjectPeriod(input, work) {
        return projection.withExclusiveProjectPeriod(input, async (ops) => {
          const failingOps: FinOpsExclusiveEnforcementOps = {
            ...ops,
            async replaceProjections() {
              throw new Error("injected PG projection replace failure");
            },
          };
          return work(failingOps);
        });
      },
    };
    const result = await reconcileProjectPeriodThenRefreshEnforcementProjection(
      {
        aggregates,
        reconciliation,
        projection: failingProjection,
        nowIso,
      },
      {
        projectId,
        periodStart: "2026-08-01",
        sourceBatchId: `batch-06-${suffix}`,
        facts: [
          {
            executionRunId: `run-06-${suffix}`,
            usageEventId: null,
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            amount: FICT_BILLED,
            currency: "USD",
            correctionRef: `corr-06-${suffix}`,
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t4RefreshAttempted).toBe(true);
    expect(result.t4Refresh?.outcome).toBe("failed");
    const durable = await aggregates.readAggregate({
      projectId,
      periodStart: "2026-08-01",
      currency: "USD",
    });
    expect(durable?.billedAmount).toBe(FICT_BILLED);
    const events = await reconciliation.listCostEventsForProjectPeriod({
      projectId,
      periodStart: "2026-08-01",
    });
    expect(events.some((e) => e.amount === FICT_BILLED)).toBe(true);
  });

  it("PRF-07 transaction ordering — T2 completes before T4 exclusive section", async () => {
    const { projectId, reconciliation, aggregates, projection, nowIso } =
      depsFor("07");
    const timeline: string[] = [];
    const instrumentedAggregates: FinOpsAggregatePort = {
      replaceProjectPeriodAggregates: (input) =>
        aggregates.replaceProjectPeriodAggregates(input),
      readAggregate: (key) => aggregates.readAggregate(key),
      listAggregatesForProjectPeriod: (input) =>
        aggregates.listAggregatesForProjectPeriod(input),
      async withExclusiveProjectPeriodRebuild(input, work) {
        timeline.push("t2_enter");
        try {
          return await aggregates.withExclusiveProjectPeriodRebuild(
            input,
            work,
          );
        } finally {
          timeline.push("t2_exit");
        }
      },
    };
    const instrumentedProjection: FinOpsEnforcementProjectionPort = {
      async withExclusiveProjectPeriod(input, work) {
        timeline.push("t4_enter");
        try {
          return await projection.withExclusiveProjectPeriod(input, work);
        } finally {
          timeline.push("t4_exit");
        }
      },
    };
    const result = await reconcileProjectPeriodThenRefreshEnforcementProjection(
      {
        aggregates: instrumentedAggregates,
        reconciliation,
        projection: instrumentedProjection,
        nowIso,
      },
      {
        projectId,
        periodStart: "2026-08-01",
        sourceBatchId: `batch-07-${suffix}`,
        facts: [
          {
            executionRunId: `run-07-${suffix}`,
            usageEventId: null,
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            amount: FICT_BILLED,
            currency: "USD",
            correctionRef: `corr-07-${suffix}`,
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t4Refresh?.outcome).toBe("succeeded");
    expect(timeline).toEqual(["t2_enter", "t2_exit", "t4_enter", "t4_exit"]);
    const t2Exit = timeline.indexOf("t2_exit");
    const t4Enter = timeline.indexOf("t4_enter");
    expect(t2Exit).toBeGreaterThanOrEqual(0);
    expect(t4Enter).toBeGreaterThan(t2Exit);
  });

  it("PRF-08 projection replacement removes obsolete currency rows", async () => {
    const { projectId, reconciliation, aggregates, projection } = depsFor("08");
    const first = await reconcileProjectPeriodThenRefreshEnforcementProjection(
      {
        aggregates,
        reconciliation,
        projection,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId,
        periodStart: "2026-08-01",
        sourceBatchId: `batch-08a-${suffix}`,
        facts: [
          {
            executionRunId: `run-08-usd-${suffix}`,
            usageEventId: null,
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            amount: FICT_BILLED,
            currency: "USD",
            correctionRef: `corr-08-usd-${suffix}`,
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
          {
            executionRunId: `run-08-eur-${suffix}`,
            usageEventId: null,
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            amount: FICT_EUR,
            currency: "EUR",
            correctionRef: `corr-08-eur-${suffix}`,
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(first.t4Refresh?.outcome).toBe("succeeded");
    if (first.t4Refresh?.outcome !== "succeeded") return;
    expect(first.t4Refresh.projections.map((p) => p.currency).sort()).toEqual([
      "EUR",
      "USD",
    ]);

    // Seed a second period-only USD correction via recompute path after deleting
    // EUR events is not allowed (append-only). Instead: rebuild after inserting
    // only USD into a fresh project already covered; for same project, replace
    // contract is: rebuild from ALL current cost events. Prove replace removes
    // a currency that no longer appears by using a dedicated second project
    // period key — use withExclusive replace via wrapper after GBP-only batch
    // on a NEW project that previously had USD+EUR seeded then replaced via
    // direct rebuild of only remaining events is covered by T4 foundation.
    // Here: second wrapper on same project after GBP-only NEW period is N/A.
    // Prove replace: inject obsolete currency row then refresh from current events.
    await projection.withExclusiveProjectPeriod(
      { projectId, periodStart: "2026-08-01" },
      async (ops) => {
        const current = await ops.listProjections();
        await ops.replaceProjections([
          ...current,
          {
            projectId,
            periodStart: "2026-08-01",
            currency: "GBP",
            blockingEligibleAmount: "1.00000000",
            billedAmount: "1.00000000",
            providerObservedAmount: "0.00000000",
            eligibleCostEventCount: 1,
            billedEventCount: 1,
            providerObservedEventCount: 0,
            rebuildVersion: 1,
            rebuiltAt: "2026-08-07T11:00:00.000Z",
          },
        ]);
      },
    );
    const before = await projection.withExclusiveProjectPeriod(
      { projectId, periodStart: "2026-08-01" },
      (ops) => ops.listProjections(),
    );
    expect(before.map((p) => p.currency).sort()).toEqual(["EUR", "GBP", "USD"]);

    const refreshed = await recomputeAggregatesThenRefreshEnforcementProjection(
      {
        aggregates,
        reconciliation,
        projection,
        nowIso: () => "2026-08-07T14:00:00.000Z",
      },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(refreshed.t4Refresh?.outcome).toBe("succeeded");
    if (refreshed.t4Refresh?.outcome !== "succeeded") return;
    expect(
      refreshed.t4Refresh.projections.map((p) => p.currency).sort(),
    ).toEqual(["EUR", "USD"]);
    const stored = await projection.withExclusiveProjectPeriod(
      { projectId, periodStart: "2026-08-01" },
      (ops) => ops.listProjections(),
    );
    expect(stored.map((p) => p.currency).sort()).toEqual(["EUR", "USD"]);
    expect(stored.every((p) => p.currency !== "GBP")).toBe(true);
  });
});
````

# COMPLETE CREATE 4 — document 155

Path: `projects/sfia-studio/155-assistant-sfia-native-openai-finops-technical-lot-t4-projection-refresh-execution.md`

````markdown
# 155 — FinOps Technical Lot T4 — Enforcement Projection Refresh — Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/155-assistant-sfia-native-openai-finops-technical-lot-t4-projection-refresh-execution.md`
**Cycle:** 8 — Delivery / implémentation — FinOps Technical Lot T4 Enforcement Projection Refresh
**Profil:** Critical
**Typologie:** EVOL / CODE / TEST / DOC

---

## A. Status / anti-claims

| Claim | Status |
|-------|--------|
| Canonical post-T2 T4 refresh orchestration created (`refreshEnforcementAfterT2`) | **TRUE** |
| Reuses `rebuildEnforcementProjection` (no duplicated SoT/Money/lock/replace) | **TRUE** |
| Unit UR-01..UR-08 proven | **TRUE** |
| PostgreSQL PRF-01..PRF-08 proven on ephemeral local Postgres | **TRUE** |
| T2 core / `evaluateAfterT2` / `rebuildEnforcementProjection` unmodified | **TRUE** |
| Real product runtime T2 consumer wired | **FALSE** (Case B — none exists) |
| Reserve `R-T4-PROJECTION-REFRESH-01` CLOSED | **FALSE** — remains OPEN (Case B) |
| Scheduler / cron / pre-provider rebuild | **FALSE** |
| T7 / SHADOW / MONITOR / E1 activated | **FALSE** |
| Thresholds 15/20/25/30 / monetary policy | **FALSE** |
| New migration / new port | **FALSE** |
| Neon / provider-real | **FALSE** |
| Project commit / push / PR | **FALSE** |

**Anti-claim (mandatory):**

```text
T4 PROJECTION REFRESH ORCHESTRATION DELIVERED AND TESTED —
NO AUTOMATIC RUNTIME FRESHNESS CLAIM —
SHADOW NOT ACTIVATED.
```

**Canonical wrapper Ready ≠ Runtime consumer wired ≠ SHADOW.**

---

## B. GO Morris / contextual resolution

**User utterance:** `ok go`

**Contextual resolution:**

```text
GO Delivery T4 projection refresh.
```

**Consumed:** Morris `D-T7-PROJECTION-REFRESH-GATE-01` = **A SELECTED** — refresh from authoritative T2 mutation/reconciliation frontiers, **BEFORE SHADOW**.

**Authorized:** canonical post-T2 T4 refresh orchestration reusing `rebuildEnforcementProjection`; unit + PG tests; doc 155; Full pack; handoff L3. Case A may MODIFY max 2 files under `finops/server/**` only if real runtime wiring proven necessary.

**Not authorized:** T2 core · `evaluateAfterT2` · `rebuildEnforcementProjection` · `evaluateFinOpsEnforcement` · execution-run · migrations · ports · T3/T6/T7/T5 · 150/154 · scheduler · pre-provider rebuild · SHADOW/MONITOR/E1 · thresholds 15/20/25/30 · project commit/push/PR/merge.

**Sequence context (SELECTED):**

```text
T7 Decisions Applied
→ T6 runtime composition (CLOSED ON MAIN)
→ T4 projection refresh   ← this Delivery
→ T7 foundation default-OFF
→ dedicated activation QA
→ SHADOW …
```

---

## C. Horodatage CEST + UTC

| Event | Timestamp |
|-------|-----------|
| Delivery work (doc 155) | 2026-08-08 09:00:36 CEST (+0200) / 2026-08-08 07:00:36 UTC |
| GO utterance (session) | 2026-08-08 ~08:55 CEST (+0200) |

---

## D. Git Truth

| Field | Value |
|-------|-------|
| Repo | `mcleland147/sfia-workspace` |
| Worktree | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t4-projection-refresh` |
| Branch | `delivery/sfia-studio-assistant-sfia-native-openai-finops-t4-projection-refresh` |
| HEAD | `7f5f0c2d8b26dc094e6bae90d268697d2cb93e42` |
| origin/main | `7f5f0c2d8b26dc094e6bae90d268697d2cb93e42` |
| Upstream project push | **none** (intentional) |
| Template SHA | `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| Handoff tip (before) | `043d5f8930979f15d7f1139754d2ae975d2948d8` |
| Handoff blob (before) | `1118de76a6bb23c56c1d6923592778d3376567c1` |
| Handoff commit (before) | `docs(review-handoff): publish T6 post-merge` |

Handoff pre-checks confirmed:

```text
R-T6-RUNTIME-COMPOSITION-01 =
CLOSED ON MAIN

R-T4-PROJECTION-REFRESH-01 =
OPEN — SELECTED GATE BEFORE SHADOW (next gate still NON REÇU)

SHADOW =
NOT ACTIVATED
```

---

## E. Sources

| Source | Role |
|--------|------|
| Handoff tip `043d5f8…` / blob `1118de76…` | Post-merge T6 state; R-T6 CLOSED; R-T4 OPEN |
| Historical T7 decisions commit `e6e026c…` / blob `79e29f7…` | `D-T7-PROJECTION-REFRESH-GATE-01` A SELECTED |
| Docs 150 / 154 (read-only) | T4 foundation + T6 composition baselines |
| `evaluateAfterT2.ts` | Post-T2 wrapper pattern analogue (not modified) |
| `rebuildEnforcementProjection.ts` | Reused T4 rebuild primitive (not modified) |
| Local discovery rg evidence | `.tmp-sfia-review/t4-projection-refresh/discovery-*.txt` |

---

## F. T7 selected decision provenance

151–153 are **not** on main. Provenance read from handoff history:

- Commit: `e6e026c9629535e5a9d8852f4613acf473b417e0`
- Path: `sfia-review-handoff/latest-chatgpt-review.md`
- Blob: `79e29f7df68d4c522610c5b63377b3bf37b4e3f0`

Confirmed:

```text
D-T7-PROJECTION-REFRESH-GATE-01 =
A SELECTED —
REFRESH FROM AUTHORITATIVE T2 MUTATION / RECONCILIATION FRONTIERS —
BEFORE SHADOW.
```

Architecture SELECTED ≠ Delivery authorized ≠ activation authorized. This cycle delivers the orchestration only.

---

## G. T2 mutation frontier discovery

Authoritative frontiers identified:

| Frontier | Role |
|----------|------|
| `recomputeAggregates` | Rebuilds project/period aggregates from cost events |
| `reconcileProjectPeriod` | On-demand bounded reconciliation; may call `recomputeAggregates` once internally |
| `insertCostEvent` | Append-only cost history (port method; used by reconcile + tests) |

No additional authoritative runtime mutation frontier discovered beyond these public application boundaries.

Coverage design: both public T2 success paths are wrapped once each:

- `recomputeAggregatesThenRefreshEnforcementProjection`
- `reconcileProjectPeriodThenRefreshEnforcementProjection`

Reconcile path refreshes T4 **exactly once** after outer reconcile success (no double rebuild despite internal A1 recompute).

---

## H. Runtime consumer discovery

Exhaustive classification (under `projects/sfia-studio/app`, excl. tests):

| Call-site | Classification |
|-----------|----------------|
| `application/recomputeAggregates.ts` | definition |
| `application/reconcileProjectPeriod.ts` | definition (+ internal recompute) |
| `application/evaluateAfterT2.ts` | reusable application wrapper (T3) |
| `application/rebuildEnforcementProjection.ts` | definition (T4 foundation) |
| `server/composeFinOpsRuntime.ts` | server composition — **T1 capture + T6 audit only**; **no T2 recompute/reconcile consumer** |
| `__tests__/oa/finops/**` | unit / integration / fixture |
| Outside `lib/oa/finops/**` | **no** product-runtime imports of recompute/reconcile/rebuild |

**Q1 — real runtime T2 consumer?** **NO** → **Case B**.

**Q2 — frontiers covered?** Yes for canonical public T2 APIs; no uncovered runtime mutation frontier.

**Q3 — ordering?** Refresh after T2 success return; T4 uses its own short exclusive lock via `rebuildEnforcementProjection`. No nested T2→T4 lock.

No Case A server wiring performed (would invent a false consumer).

---

## I. Architecture / wrapper contract

**CREATE:** `projects/sfia-studio/app/lib/oa/finops/application/refreshEnforcementAfterT2.ts`

**Deps:** `aggregates`, `reconciliation`, `projection`, `nowIso` (existing ports only).

**APIs:**

- `recomputeAggregatesThenRefreshEnforcementProjection`
- `reconcileProjectPeriodThenRefreshEnforcementProjection`

**Result:** `{ t2, t4Refresh, t4RefreshAttempted }`

**Pattern:** T4-owned post-T2 wrapper analogue to `evaluateAfterT2` — T2 does not depend on T4.

---

## J. Failure isolation

| Scenario | Behavior |
|----------|----------|
| T2 failed | `t4RefreshAttempted=false`, `t4Refresh=null`, no rebuild |
| T2 success + T4 success | both outcomes returned |
| T2 success + T4 failed result | T2 success preserved; T4 failure separate; no throw |
| Unexpected T4 throw | sanitized `FINOPS_T4_REFRESH_THROWN`; T2 success preserved; no secret leakage |

---

## K. Transaction / lock ordering

Target sequence proven (PRF-07 instrumentation):

```text
t2_enter → t2_exit → t4_enter → t4_exit
```

T4 exclusive project/period serialization is acquired only after T2 exclusive rebuild releases. No lock across provider I/O. Production locking logic unmodified.

---

## L. Freshness evidence contract

Existing fields only:

- `rebuildVersion` (increments on successful refresh — PRF-05)
- `rebuiltAt` (matches wrapper `nowIso` — PRF-05)
- Projection amounts match authoritative cost events after mutation (PRF-01..05)
- Obsolete currency rows replaced per existing replace contract (PRF-08)

No new freshness column / migration.

---

## M. Exact project manifest

**CREATE (4):**

1. `projects/sfia-studio/app/lib/oa/finops/application/refreshEnforcementAfterT2.ts`
2. `projects/sfia-studio/app/__tests__/oa/finops/t4.projection-refresh.unit.test.ts`
3. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts`
4. `projects/sfia-studio/155-assistant-sfia-native-openai-finops-technical-lot-t4-projection-refresh-execution.md`

**MODIFY:** none (Case B).

**Forbidden paths:** unchanged (T2 core, evaluateAfterT2, rebuild, evaluateFinOpsEnforcement, execution-run, migrations, ports, 150/154, package manifests, .github, method, prompts).

---

## N. Unit tests

File: `t4.projection-refresh.unit.test.ts` — **UR-01..UR-08 PASS**.

| ID | Assertion |
|----|-----------|
| UR-01 | T2 recompute fail → no refresh |
| UR-02 | T2 recompute success → rebuild once, exact project/period |
| UR-03 | T4 failed result → T2 success preserved |
| UR-04 | Unexpected throw → sanitized FinOps-side failure |
| UR-05 | Reconcile fail → no refresh |
| UR-06 | Reconcile success → exactly one refresh |
| UR-07 | No T3 side effect |
| UR-08 | No rollout / threshold / provider call |

---

## O. PostgreSQL tests

File: `postgres/t4.projection-refresh.integration.test.ts` — **PRF-01..PRF-08 PASS** on ephemeral local Postgres (`127.0.0.1:55435`, never Neon).

| ID | Assertion |
|----|-----------|
| PRF-01 | Reconciliation mutation → BILLED projection |
| PRF-02 | PROVIDER_OBSERVED reflected |
| PRF-03 | Non-blocking SoTs excluded |
| PRF-04 | USD/EUR isolation, no FX |
| PRF-05 | Subsequent mutation refreshes + version++ |
| PRF-06 | T4 fail isolates; T2 durable |
| PRF-07 | T2 exit before T4 enter |
| PRF-08 | Obsolete currency replaced |

---

## P. Regression tests

Reran green:

- T2 aggregate/reconciliation unit + PG
- T4 enforcement unit + PG foundation
- T3 `evaluateAfterT2` coverage (`t3.alert-review.unit.test.ts`)
- New refresh unit + PG

Full FinOps suite + typecheck/lint/build/migrate:up/test:db/npm test recorded in evidence under `.tmp-sfia-review/t4-projection-refresh/`.

---

## Q. Reserve assessment Case A/B/C

**Case B** (no real runtime consumer exists).

Canonical wrapper + tests delivered.

```text
R-T4-PROJECTION-REFRESH-01 =
OPEN —
CANONICAL POST-T2 T4 REFRESH ORCHESTRATION DELIVERED AND TESTED —
RUNTIME CONSUMER / T7 FOUNDATION WIRING STILL REQUIRED BEFORE SHADOW.
```

**Verdict:**

```text
DELIVERY COMPLETE WITH RESERVE OPEN.
```

Never closed by convention — runtime wiring not proven.

---

## R. Carried reserves

| Reserve | Status |
|---------|--------|
| `R-T6-RUNTIME-COMPOSITION-01` | **CLOSED ON MAIN** |
| `R-T4-PROJECTION-REFRESH-01` | **OPEN** — Case B wording above |
| `R-T4-T3-SYNC-01` | OPEN — SELECTED GATE BEFORE MONITOR |
| `R-PR-T2-API-01` | OPEN MINOR |
| T6-ext-T2 | EXCLUDED |
| T6-ext-T3T4 | NOT AUTHORIZED — REQUIRED BEFORE E1 |
| Calibration | REQUIRED — BEFORE MONITOR USING REAL AMOUNTS |
| Product IAM | NOT_SELECTED — REQUIRED BEFORE E1 |
| Privileged Morris mutations | DEFERRED |
| Intermediate product literal | DEFERRED |
| REVIEW_REQUIRED vs WOULD_BLOCK | STILL DEFERRED |
| SHADOW | NOT ACTIVATED |

---

## S. Non-scope

- T7 foundation / flag store / mode adapter
- SHADOW / MONITOR / E1 activation
- T3 sync with T4
- T5 override / IAM
- Scheduler / cron
- Pre-provider rebuild
- Monetary thresholds / calibration amounts 15/20/25/30
- Product routes / endpoints
- Neon / provider-real
- Project git publish

---

## T. Git final state

| Field | Value |
|-------|-------|
| Branch | `delivery/sfia-studio-assistant-sfia-native-openai-finops-t4-projection-refresh` |
| HEAD | `7f5f0c2d8b26dc094e6bae90d268697d2cb93e42` (unchanged = origin/main) |
| Staged | empty |
| Project commits | none |
| Project push / PR | none |
| Untracked creates | 4 CREATE paths + `.tmp-sfia-review/` evidence |

---

## U. Verdict

```text
T4 PROJECTION REFRESH VALIDATED — RESERVE OPEN — T7 RUNTIME WIRING STILL REQUIRED
```

```text
PROJECTION REFRESH ORCHESTRATION DELIVERY COMPLETE WITH RESERVE OPEN —
CANONICAL POST-T2 T4 REFRESH ORCHESTRATION DELIVERED AND TESTED —
RUNTIME CONSUMER / T7 FOUNDATION WIRING STILL REQUIRED BEFORE SHADOW —
SHADOW NOT ACTIVATED.
```
````
