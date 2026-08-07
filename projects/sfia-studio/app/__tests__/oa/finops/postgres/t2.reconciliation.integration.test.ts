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
