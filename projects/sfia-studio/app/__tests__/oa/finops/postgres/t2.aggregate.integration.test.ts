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
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-rt-${suffix}`,
        derivedSourceReference: null,
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
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-a-${suffix}`,
        derivedSourceReference: null,
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
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-a-${suffix}`,
        derivedSourceReference: null,
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
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-${currency}-${suffix}`,
        derivedSourceReference: null,
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
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-eur-${suffix}`,
        derivedSourceReference: null,
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
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-${label}-${suffix}`,
        derivedSourceReference: null,
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
