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
