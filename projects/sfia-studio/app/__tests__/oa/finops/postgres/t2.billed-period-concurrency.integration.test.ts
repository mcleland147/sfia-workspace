/**
 * @vitest-environment node
 *
 * FinOps T2 — real PostgreSQL concurrency proof for billed-period reconcile.
 * Requires DATABASE_URL — ephemeral local/CI Postgres only (never Neon pilot).
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Pool } from "pg";
import {
  buildBilledPeriodSourceBatchId,
  buildDerivedSourceReference,
} from "@/lib/oa/finops/application/billedPeriodIdentity";
import { reconcileBilledPeriod } from "@/lib/oa/finops/application/reconcileBilledPeriod";
import type { BilledPeriodFact } from "@/lib/oa/finops/application/types.aggregate";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsAggregateStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore";
import { createPostgresFinOpsReconciliation } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsReconciliation";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

const PERIOD = "2026-08-01";
const BUCKET = "2026-08-07T00:00:00.000Z";
const EXTERNAL = "proj_openai_pg_conc";

const COV_START = BUCKET;
const COV_END = "2026-08-08T00:00:00.000Z";

function completeSnapshot(
  coverageStart: string = COV_START,
  coverageEndExclusive: string = COV_END,
  externalProjectId: string = EXTERNAL,
) {
  return {
    completeness: "complete" as const,
    provider: "openai",
    externalProjectId,
    coverageStart,
    coverageEndExclusive,
  };
}

function makeFact(input: {
  readonly projectId: string;
  readonly externalProjectId: string;
  readonly sourceBatchId: string;
  readonly providerAmount: string;
  readonly lineItem: string | null;
  readonly sourceBucketStart?: string;
  readonly sourceBucketEndExclusive?: string;
}): BilledPeriodFact {
  const sourceBucketStart = input.sourceBucketStart ?? BUCKET;
  const sourceBucketEndExclusive =
    input.sourceBucketEndExclusive ?? "2026-08-08T00:00:00.000Z";
  return {
    projectId: input.projectId,
    externalProjectId: input.externalProjectId,
    periodStart: PERIOD,
    provider: "openai",
    sourceBucketStart,
    sourceBucketEndExclusive,
    lineItem: input.lineItem,
    providerAmount: input.providerAmount,
    currency: "USD",
    derivedSourceReference: buildDerivedSourceReference({
      provider: "openai",
      externalProjectId: input.externalProjectId,
      sfiaProjectId: input.projectId,
      sourceBucketStart,
      sourceBucketEndExclusive,
      lineItem: input.lineItem,
      currency: "USD",
    }),
    sourceBatchId: input.sourceBatchId,
  };
}

function batchId(input: {
  readonly projectId: string;
  readonly externalProjectId: string;
  readonly coverageStart?: string;
  readonly coverageEndExclusive?: string;
  readonly atoms: ReadonlyArray<{
    line_item: string | null;
    providerAmount: string;
    sourceBucketStart?: string;
    sourceBucketEndExclusive?: string;
  }>;
}): string {
  const coverageStart = input.coverageStart ?? COV_START;
  const coverageEndExclusive = input.coverageEndExclusive ?? COV_END;
  return buildBilledPeriodSourceBatchId({
    provider: "openai",
    externalProjectId: input.externalProjectId,
    sfiaProjectId: input.projectId,
    periodStart: PERIOD,
    adapterContractVersion: "openai-costs-v2",
    coverageStart,
    coverageEndExclusive,
    atoms: input.atoms.map((a) => ({
      sourceBucketStart: a.sourceBucketStart ?? coverageStart,
      sourceBucketEndExclusive: a.sourceBucketEndExclusive ?? coverageEndExclusive,
      project_id: input.externalProjectId,
      line_item: a.line_item,
      currency: "USD",
      providerAmount: a.providerAmount,
    })),
  });
}

describeDb("FinOps T2 PostgreSQL billed-period concurrency", () => {
  let pool: Pool;
  const suffix = `${Date.now()}`;

  beforeAll(() => {
    // max>=2 so concurrent reconciles use distinct clients under advisory lock.
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 8 });
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  it("PG-T01 concurrent same economic atom yields one +50 delta and billedAmount 50", async () => {
    const projectId = `proj-pg-t01-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };
    const sourceBatchId = batchId({
      projectId,
      externalProjectId: EXTERNAL,
      atoms: [{ line_item: "A", providerAmount: "50.00000000" }],
    });
    const input = {
      projectId,
      periodStart: PERIOD,
      sourceBatchId,
      facts: [
        makeFact({
          projectId,
          externalProjectId: EXTERNAL,
          sourceBatchId,
          providerAmount: "50.00000000",
          lineItem: "A",
        }),
      ],
      snapshot: completeSnapshot(),
    };

    const [a, b] = await Promise.all([
      reconcileBilledPeriod(deps, input),
      reconcileBilledPeriod(deps, input),
    ]);
    expect(a.outcome).toBe("succeeded");
    expect(b.outcome).toBe("succeeded");
    const created =
      (a.outcome === "succeeded" ? a.createdCount : 0) +
      (b.outcome === "succeeded" ? b.createdCount : 0);
    expect(created).toBe(1);

    const events = await reconciliation.listCostEventsForProjectPeriod({
      projectId,
      periodStart: PERIOD,
    });
    const periodEvents = events.filter(
      (e) => e.attributionScope === "PROJECT_PERIOD" && e.sourceOfTruth === "BILLED",
    );
    expect(periodEvents).toHaveLength(1);
    expect(periodEvents[0]!.amount).toBe("50.00000000");
    expect(periodEvents[0]!.executionRunId).toBeNull();

    const agg = await aggregates.readAggregate({
      projectId,
      periodStart: PERIOD,
      currency: "USD",
    });
    expect(agg?.billedAmount).toBe("50.00000000");
  });

  it("PG-T02 concurrent corrected snapshot 50→55 yields total +5 and billedAmount 55", async () => {
    const projectId = `proj-pg-t02-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };

    const batch50 = batchId({
      projectId,
      externalProjectId: EXTERNAL,
      atoms: [{ line_item: "A", providerAmount: "50.00000000" }],
    });
    const seed = await reconcileBilledPeriod(deps, {
      projectId,
      periodStart: PERIOD,
      sourceBatchId: batch50,
      facts: [
        makeFact({
          projectId,
          externalProjectId: EXTERNAL,
          sourceBatchId: batch50,
          providerAmount: "50.00000000",
          lineItem: "A",
        }),
      ],
      snapshot: completeSnapshot(),
    });
    expect(seed.outcome).toBe("succeeded");

    const batch55 = batchId({
      projectId,
      externalProjectId: EXTERNAL,
      atoms: [{ line_item: "A", providerAmount: "55.00000000" }],
    });
    const corrected = {
      projectId,
      periodStart: PERIOD,
      sourceBatchId: batch55,
      facts: [
        makeFact({
          projectId,
          externalProjectId: EXTERNAL,
          sourceBatchId: batch55,
          providerAmount: "55.00000000",
          lineItem: "A",
        }),
      ],
      snapshot: completeSnapshot(),
    };

    const [a, b] = await Promise.all([
      reconcileBilledPeriod(deps, corrected),
      reconcileBilledPeriod(deps, corrected),
    ]);
    expect(a.outcome).toBe("succeeded");
    expect(b.outcome).toBe("succeeded");

    const events = await reconciliation.listCostEventsForProjectPeriod({
      projectId,
      periodStart: PERIOD,
    });
    const periodEvents = events.filter(
      (e) => e.attributionScope === "PROJECT_PERIOD" && e.sourceOfTruth === "BILLED",
    );
    const amounts = periodEvents.map((e) => e.amount).sort();
    expect(amounts).toEqual(["5.00000000", "50.00000000"]);

    const agg = await aggregates.readAggregate({
      projectId,
      periodStart: PERIOD,
      currency: "USD",
    });
    expect(agg?.billedAmount).toBe("55.00000000");
  });

  it("PG-T03 concurrent removed atom corrects B=-10 once; aggregate 100", async () => {
    const projectId = `proj-pg-t03-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };

    const batch1 = batchId({
      projectId,
      externalProjectId: EXTERNAL,
      atoms: [
        { line_item: "A", providerAmount: "100.00000000" },
        { line_item: "B", providerAmount: "10.00000000" },
      ],
    });
    const seed = await reconcileBilledPeriod(deps, {
      projectId,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        makeFact({
          projectId,
          externalProjectId: EXTERNAL,
          sourceBatchId: batch1,
          providerAmount: "100.00000000",
          lineItem: "A",
        }),
        makeFact({
          projectId,
          externalProjectId: EXTERNAL,
          sourceBatchId: batch1,
          providerAmount: "10.00000000",
          lineItem: "B",
        }),
      ],
      snapshot: completeSnapshot(),
    });
    expect(seed.outcome).toBe("succeeded");

    const batch2 = batchId({
      projectId,
      externalProjectId: EXTERNAL,
      atoms: [{ line_item: "A", providerAmount: "100.00000000" }],
    });
    const removed = {
      projectId,
      periodStart: PERIOD,
      sourceBatchId: batch2,
      facts: [
        makeFact({
          projectId,
          externalProjectId: EXTERNAL,
          sourceBatchId: batch2,
          providerAmount: "100.00000000",
          lineItem: "A",
        }),
      ],
      snapshot: completeSnapshot(),
    };

    const [a, b] = await Promise.all([
      reconcileBilledPeriod(deps, removed),
      reconcileBilledPeriod(deps, removed),
    ]);
    expect(a.outcome).toBe("succeeded");
    expect(b.outcome).toBe("succeeded");

    const events = await reconciliation.listCostEventsForProjectPeriod({
      projectId,
      periodStart: PERIOD,
    });
    const negativeB = events.filter((e) => e.amount === "-10.00000000");
    expect(negativeB).toHaveLength(1);
    expect(
      negativeB[0]?.correctionRef?.startsWith("ABSENT_FROM_COMPLETE_SNAPSHOT|"),
    ).toBe(true);

    const agg = await aggregates.readAggregate({
      projectId,
      periodStart: PERIOD,
      currency: "USD",
    });
    expect(agg?.billedAmount).toBe("100.00000000");
  });

  it("PG-T04 coverage isolation: empty Aug8 does not zero Aug7", async () => {
    const projectId = `proj-pg-t04-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };
    const aug7Start = "2026-08-07T00:00:00.000Z";
    const aug7End = "2026-08-08T00:00:00.000Z";
    const aug8Start = "2026-08-08T00:00:00.000Z";
    const aug8End = "2026-08-09T00:00:00.000Z";

    const batch7 = batchId({
      projectId,
      externalProjectId: EXTERNAL,
      coverageStart: aug7Start,
      coverageEndExclusive: aug7End,
      atoms: [
        {
          line_item: "A",
          providerAmount: "10.00000000",
          sourceBucketStart: aug7Start,
          sourceBucketEndExclusive: aug7End,
        },
      ],
    });
    const seed7 = await reconcileBilledPeriod(deps, {
      projectId,
      periodStart: PERIOD,
      sourceBatchId: batch7,
      facts: [
        makeFact({
          projectId,
          externalProjectId: EXTERNAL,
          sourceBatchId: batch7,
          providerAmount: "10.00000000",
          lineItem: "A",
          sourceBucketStart: aug7Start,
          sourceBucketEndExclusive: aug7End,
        }),
      ],
      snapshot: completeSnapshot(aug7Start, aug7End),
    });
    expect(seed7.outcome).toBe("succeeded");

    const batch8 = batchId({
      projectId,
      externalProjectId: EXTERNAL,
      coverageStart: aug8Start,
      coverageEndExclusive: aug8End,
      atoms: [
        {
          line_item: "B",
          providerAmount: "5.00000000",
          sourceBucketStart: aug8Start,
          sourceBucketEndExclusive: aug8End,
        },
      ],
    });
    const seed8 = await reconcileBilledPeriod(deps, {
      projectId,
      periodStart: PERIOD,
      sourceBatchId: batch8,
      facts: [
        makeFact({
          projectId,
          externalProjectId: EXTERNAL,
          sourceBatchId: batch8,
          providerAmount: "5.00000000",
          lineItem: "B",
          sourceBucketStart: aug8Start,
          sourceBucketEndExclusive: aug8End,
        }),
      ],
      snapshot: completeSnapshot(aug8Start, aug8End),
    });
    expect(seed8.outcome).toBe("succeeded");

    const empty8 = batchId({
      projectId,
      externalProjectId: EXTERNAL,
      coverageStart: aug8Start,
      coverageEndExclusive: aug8End,
      atoms: [],
    });
    const cleared = await reconcileBilledPeriod(deps, {
      projectId,
      periodStart: PERIOD,
      sourceBatchId: empty8,
      facts: [],
      snapshot: completeSnapshot(aug8Start, aug8End),
    });
    expect(cleared.outcome).toBe("succeeded");

    const events = await reconciliation.listCostEventsForProjectPeriod({
      projectId,
      periodStart: PERIOD,
    });
    const amounts = events.map((e) => e.amount).sort();
    expect(amounts).toEqual(["-5.00000000", "10.00000000", "5.00000000"]);
    expect(events.filter((e) => e.amount === "-10.00000000")).toHaveLength(0);
    expect(events.filter((e) => e.amount === "-5.00000000")).toHaveLength(1);

    const agg = await aggregates.readAggregate({
      projectId,
      periodStart: PERIOD,
      currency: "USD",
    });
    expect(agg?.billedAmount).toBe("10.00000000");
  });

});
