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
  partial: Omit<
    FinOpsCostEvent,
    "costEventId" | "dedupKey" | "correctionRef" | "attributionScope" | "derivedSourceReference"
  > & {
    correctionRef?: string | null;
    attributionScope?: FinOpsCostEvent["attributionScope"];
    derivedSourceReference?: string | null;
  },
): FinOpsCostEvent {
  const correctionRef = partial.correctionRef ?? null;
  const attributionScope = partial.attributionScope ?? "EXECUTION_RUN";
  const derivedSourceReference =
    partial.derivedSourceReference === undefined
      ? null
      : partial.derivedSourceReference;
  const identity = deriveCostEventIdentity({
    projectId: partial.projectId,
    executionRunId: partial.executionRunId ?? "",
    evidenceClass: partial.evidenceClass,
    correctionRef,
    amount: partial.amount,
    currency: partial.currency,
  });
  return {
    ...partial,
    attributionScope,
    derivedSourceReference,
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
