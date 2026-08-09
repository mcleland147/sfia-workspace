/**
 * @vitest-environment node
 *
 * FinOps T4 — Soft Enforcement foundation unit tests (≥18).
 * FICTITIOUS fixtures only — NOT historical calibration 15/20/25/30.
 */
import { describe, expect, it, vi } from "vitest";
import {
  createFinOpsEnforcementPort,
  evaluateFinOpsEnforcement,
} from "@/lib/oa/finops/application/evaluateFinOpsEnforcement";
import {
  buildEnforcementProjectionsFromCostEvents,
  rebuildEnforcementProjection,
} from "@/lib/oa/finops/application/rebuildEnforcementProjection";
import type { FinOpsCostEvent } from "@/lib/oa/finops/application/types.aggregate";
import type { FinOpsEnforcementPolicy } from "@/lib/oa/finops/application/types.enforcement";
import { createMemoryFinOpsEnforcementProjection } from "@/lib/oa/finops/infrastructure/memory/memoryFinOpsEnforcementProjection";

/** FICTITIOUS — arbitrary test amounts; NOT project calibration 15/20/25/30. */
const FICT_THRESHOLD = "12.34000000";
const FICT_BELOW = "12.33000000";
const FICT_ABOVE = "12.35000000";
const FICT_BILLED = "5.11000000";
const FICT_PROVIDER = "7.24000000";
const FICT_API = "99.99000000";
const FICT_EUR = "4.00000000";

function costEvent(
  partial: Partial<FinOpsCostEvent> &
    Pick<
      FinOpsCostEvent,
      "costEventId" | "sourceOfTruth" | "evidenceClass" | "amount" | "currency"
    >,
): FinOpsCostEvent {
  return {
    dedupKey: `dedup:${partial.costEventId}`,
    projectId: "proj-t4",
    attributionScope: "EXECUTION_RUN",
    executionRunId: "run-t4",
    derivedSourceReference: null,
    usageEventId: null,
    periodStart: "2026-08-01",
    estimationStatus: "available",
    correctionRef: null,
    catalogVersion: null,
    provider: "openai",
    model: "gpt-test",
    unit: null,
    billingQuantum: null,
    usageQuantity: null,
    occurredAt: "2026-08-07T12:00:00.000Z",
    ...partial,
  };
}

describe("FinOps T4 enforcement unit", () => {
  it("1. projection sums BILLED + PROVIDER_OBSERVED only", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: "proj-t4",
      periodStart: "2026-08-01",
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_BILLED,
          currency: "USD",
        }),
        costEvent({
          costEventId: "c2",
          sourceOfTruth: "PROVIDER_OBSERVED",
          evidenceClass: "observed",
          amount: FICT_PROVIDER,
          currency: "USD",
        }),
      ],
    });
    expect(projections).toHaveLength(1);
    expect(projections[0]!.blockingEligibleAmount).toBe("12.35000000");
    expect(projections[0]!.billedAmount).toBe(FICT_BILLED);
    expect(projections[0]!.providerObservedAmount).toBe(FICT_PROVIDER);
  });

  it("2. API_USAGE with amount is excluded", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: "proj-t4",
      periodStart: "2026-08-01",
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_BILLED,
          currency: "USD",
        }),
        costEvent({
          costEventId: "c2",
          sourceOfTruth: "API_USAGE",
          evidenceClass: "observed",
          amount: FICT_API,
          currency: "USD",
        }),
      ],
    });
    expect(projections[0]!.blockingEligibleAmount).toBe(FICT_BILLED);
    expect(projections[0]!.eligibleCostEventCount).toBe(1);
  });

  it("3. LOCAL_COUNT / PARAMETRIC_ESTIMATE / UNKNOWN excluded", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: "proj-t4",
      periodStart: "2026-08-01",
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "LOCAL_COUNT",
          evidenceClass: "estimated",
          amount: "1.00000000",
          currency: "USD",
        }),
        costEvent({
          costEventId: "c2",
          sourceOfTruth: "PARAMETRIC_ESTIMATE",
          evidenceClass: "estimated",
          amount: "2.00000000",
          currency: "USD",
        }),
        costEvent({
          costEventId: "c3",
          sourceOfTruth: "UNKNOWN",
          evidenceClass: "unknown",
          amount: "3.00000000",
          currency: "USD",
        }),
      ],
    });
    expect(projections[0]!.blockingEligibleAmount).toBe("0.00000000");
    expect(projections[0]!.eligibleCostEventCount).toBe(0);
  });

  it("4. billedAmount and providerObservedAmount remain separately visible", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: "proj-t4",
      periodStart: "2026-08-01",
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_BILLED,
          currency: "USD",
        }),
        costEvent({
          costEventId: "c2",
          sourceOfTruth: "PROVIDER_OBSERVED",
          evidenceClass: "observed",
          amount: FICT_PROVIDER,
          currency: "USD",
        }),
      ],
    });
    expect(projections[0]!.billedAmount).toBe(FICT_BILLED);
    expect(projections[0]!.providerObservedAmount).toBe(FICT_PROVIDER);
    expect(projections[0]!.billedEventCount).toBe(1);
    expect(projections[0]!.providerObservedEventCount).toBe(1);
  });

  it("5. multi-currency isolated", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: "proj-t4",
      periodStart: "2026-08-01",
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_BILLED,
          currency: "USD",
        }),
        costEvent({
          costEventId: "c2",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_EUR,
          currency: "EUR",
        }),
      ],
    });
    expect(projections).toHaveLength(2);
    const usd = projections.find((p) => p.currency === "USD")!;
    const eur = projections.find((p) => p.currency === "EUR")!;
    expect(usd.blockingEligibleAmount).toBe(FICT_BILLED);
    expect(eur.blockingEligibleAmount).toBe(FICT_EUR);
  });

  it("6. no FX / no cross-sum", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: "proj-t4",
      periodStart: "2026-08-01",
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: "1.00000000",
          currency: "USD",
        }),
        costEvent({
          costEventId: "c2",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: "2.00000000",
          currency: "EUR",
        }),
      ],
    });
    const totalAcross = projections.reduce(
      (n, p) => n + Number(p.blockingEligibleAmount),
      0,
    );
    // Number used only to prove rows are NOT a single cross-currency sum field.
    expect(projections.every((p) => p.currency === "USD" || p.currency === "EUR")).toBe(
      true,
    );
    expect(projections).toHaveLength(2);
    expect(totalAcross).toBe(3);
  });

  it("7. inconsistent blocking-eligible SoT/evidenceClass fails rebuild/build safely", async () => {
    expect(() =>
      buildEnforcementProjectionsFromCostEvents({
        projectId: "proj-t4",
        periodStart: "2026-08-01",
        rebuiltAt: "2026-08-07T12:00:00.000Z",
        events: [
          costEvent({
            costEventId: "c1",
            sourceOfTruth: "BILLED",
            evidenceClass: "observed",
            amount: FICT_BILLED,
            currency: "USD",
          }),
        ],
      }),
    ).toThrow(/inconsistent/i);

    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "PROVIDER_OBSERVED",
          evidenceClass: "billed",
          amount: FICT_PROVIDER,
          currency: "USD",
        }),
      ],
    });
    const result = await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    expect(result.outcome).toBe("failed");
    if (result.outcome !== "failed") return;
    expect(result.finopsSideOnly).toBe(true);
    expect(result.code).toBe("FINOPS_T4_SOT_EVIDENCE_INCONSISTENT");
  });

  it("8. Money exact canonical scale", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: "proj-t4",
      periodStart: "2026-08-01",
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: "0.10000000",
          currency: "USD",
        }),
        costEvent({
          costEventId: "c2",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: "0.20000000",
          currency: "USD",
        }),
      ],
    });
    expect(projections[0]!.blockingEligibleAmount).toBe("0.30000000");
  });

  it("9. policy absent → allow / no projection access", async () => {
    const readSpy = vi.fn();
    const store = createMemoryFinOpsEnforcementProjection();
    const projection = {
      withExclusiveProjectPeriod: <T,>(
        input: { readonly projectId: string; readonly periodStart: string },
        work: Parameters<typeof store.withExclusiveProjectPeriod>[1],
      ): Promise<T> => {
        readSpy();
        return store.withExclusiveProjectPeriod(input, work) as Promise<T>;
      },
    };
    const decision = await evaluateFinOpsEnforcement(
      {
        projection,
        resolvePolicy: () => null,
      },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("allow");
    expect(decision.reason).toBe("not_configured");
    expect(readSpy).not.toHaveBeenCalled();
  });

  it("10. below threshold → allow", async () => {
    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_BELOW,
          currency: "USD",
        }),
      ],
    });
    await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    const policy: FinOpsEnforcementPolicy = {
      thresholdCode: "FICT_T4",
      currency: "USD",
      thresholdAmount: FICT_THRESHOLD,
      effect: "enforce",
    };
    const decision = await evaluateFinOpsEnforcement(
      { projection: store, resolvePolicy: () => policy },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("allow");
    expect(decision.reason).toBe("below_threshold");
  });

  it("11. crossing + signal_only → soft_signal", async () => {
    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_ABOVE,
          currency: "USD",
        }),
      ],
    });
    await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    const decision = await evaluateFinOpsEnforcement(
      {
        projection: store,
        resolvePolicy: () => ({
          thresholdCode: "FICT_T4",
          currency: "USD",
          thresholdAmount: FICT_THRESHOLD,
          effect: "signal_only",
        }),
      },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("soft_signal");
  });

  it("12. crossing + enforce → block", async () => {
    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "PROVIDER_OBSERVED",
          evidenceClass: "observed",
          amount: FICT_ABOVE,
          currency: "USD",
        }),
      ],
    });
    await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    const decision = await evaluateFinOpsEnforcement(
      {
        projection: store,
        resolvePolicy: () => ({
          thresholdCode: "FICT_T4",
          currency: "USD",
          thresholdAmount: FICT_THRESHOLD,
          effect: "enforce",
        }),
      },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("block");
  });

  it("13. missing projection → failed / finopsSideOnly", async () => {
    const store = createMemoryFinOpsEnforcementProjection();
    const decision = await evaluateFinOpsEnforcement(
      {
        projection: store,
        resolvePolicy: () => ({
          thresholdCode: "FICT_T4",
          currency: "USD",
          thresholdAmount: FICT_THRESHOLD,
          effect: "enforce",
        }),
      },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("failed");
    expect(decision.finopsSideOnly).toBe(true);
    expect(decision.reason).toBe("projection_missing");
  });

  it("14. projection read throw → failed / sanitized", async () => {
    const projection = {
      async withExclusiveProjectPeriod() {
        throw new Error("SELECT * FROM secret_table WHERE password='x'");
      },
    };
    const decision = await evaluateFinOpsEnforcement(
      {
        projection,
        resolvePolicy: () => ({
          thresholdCode: "FICT_T4",
          currency: "USD",
          thresholdAmount: FICT_THRESHOLD,
          effect: "enforce",
        }),
      },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("failed");
    expect(decision.finopsSideOnly).toBe(true);
    expect(JSON.stringify(decision)).not.toMatch(/password|secret_table/i);
  });

  it("15. FAILED is never BLOCK", async () => {
    const store = createMemoryFinOpsEnforcementProjection();
    const decision = await evaluateFinOpsEnforcement(
      {
        projection: store,
        resolvePolicy: () => ({
          thresholdCode: "FICT_T4",
          currency: "USD",
          thresholdAmount: FICT_THRESHOLD,
          effect: "enforce",
        }),
      },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("failed");
    expect(decision.decision).not.toBe("block");
  });

  it("16. internal soft_signal contains no REVIEW_REQUIRED or WOULD_BLOCK literal", async () => {
    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_ABOVE,
          currency: "USD",
        }),
      ],
    });
    await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    const decision = await evaluateFinOpsEnforcement(
      {
        projection: store,
        resolvePolicy: () => ({
          thresholdCode: "FICT_T4",
          currency: "USD",
          thresholdAmount: FICT_THRESHOLD,
          effect: "signal_only",
        }),
      },
      {
        projectId: "proj-t4",
        executionRunId: "run-1",
        correlationId: "corr-1",
        occurredAt: "2026-08-07T12:00:00.000Z",
      },
    );
    expect(decision.decision).toBe("soft_signal");
    const serialized = JSON.stringify(decision);
    expect(serialized).not.toContain("REVIEW_REQUIRED");
    expect(serialized).not.toContain("WOULD_BLOCK");
  });

  it("17. memory rebuild version monotonic", async () => {
    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_BILLED,
          currency: "USD",
        }),
      ],
    });
    const r1 = await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    const r2 = await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:01:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    expect(r1.outcome).toBe("succeeded");
    expect(r2.outcome).toBe("succeeded");
    if (r1.outcome !== "succeeded" || r2.outcome !== "succeeded") return;
    expect(r1.projections[0]!.rebuildVersion).toBe(1);
    expect(r2.projections[0]!.rebuildVersion).toBe(2);
  });

  it("18. same project/period concurrent rebuild remains deterministic", async () => {
    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_BILLED,
          currency: "USD",
        }),
      ],
    });
    const deps = {
      projection: store,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };
    const input = { projectId: "proj-t4", periodStart: "2026-08-01" };
    const [a, b, c] = await Promise.all([
      rebuildEnforcementProjection(deps, input),
      rebuildEnforcementProjection(deps, input),
      rebuildEnforcementProjection(deps, input),
    ]);
    expect(a.outcome).toBe("succeeded");
    expect(b.outcome).toBe("succeeded");
    expect(c.outcome).toBe("succeeded");
    if (
      a.outcome !== "succeeded" ||
      b.outcome !== "succeeded" ||
      c.outcome !== "succeeded"
    ) {
      return;
    }
    const versions = [
      a.projections[0]!.rebuildVersion,
      b.projections[0]!.rebuildVersion,
      c.projections[0]!.rebuildVersion,
    ].sort((x, y) => x - y);
    expect(versions).toEqual([1, 2, 3]);
    const final = await store.withExclusiveProjectPeriod(input, (ops) =>
      ops.readProjection("USD"),
    );
    expect(final?.rebuildVersion).toBe(3);
    expect(final?.blockingEligibleAmount).toBe(FICT_BILLED);
  });

  it("19. createFinOpsEnforcementPort factory wires injected resolver", async () => {
    const store = createMemoryFinOpsEnforcementProjection({
      costEvents: [
        costEvent({
          costEventId: "c1",
          sourceOfTruth: "BILLED",
          evidenceClass: "billed",
          amount: FICT_ABOVE,
          currency: "USD",
        }),
      ],
    });
    await rebuildEnforcementProjection(
      { projection: store, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId: "proj-t4", periodStart: "2026-08-01" },
    );
    const port = createFinOpsEnforcementPort({
      projection: store,
      resolvePolicy: () => ({
        thresholdCode: "FICT_T4",
        currency: "USD",
        thresholdAmount: FICT_THRESHOLD,
        effect: "enforce",
      }),
    });
    const decision = await port.evaluateBeforeProvider({
      projectId: "proj-t4",
      executionRunId: "run-1",
      correlationId: "corr-1",
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    expect(decision.decision).toBe("block");
  });
});
