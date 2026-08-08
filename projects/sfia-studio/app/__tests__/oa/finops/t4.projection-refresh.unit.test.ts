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
