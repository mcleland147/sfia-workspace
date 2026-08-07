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
