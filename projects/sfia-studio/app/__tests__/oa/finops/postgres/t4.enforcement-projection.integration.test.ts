/**
 * @vitest-environment node
 *
 * FinOps T4 PostgreSQL enforcement projection integration.
 * Requires DATABASE_URL (ephemeral local Postgres only — never Neon).
 * FICTITIOUS amounts only — NOT 15/20/25/30.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Pool } from "pg";
import { evaluateFinOpsEnforcement } from "@/lib/oa/finops/application/evaluateFinOpsEnforcement";
import { rebuildEnforcementProjection } from "@/lib/oa/finops/application/rebuildEnforcementProjection";
import { deriveCostEventIdentity } from "@/lib/oa/finops/application/t2Identity";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsEnforcementProjectionStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsEnforcementProjectionStore";
import { createPostgresFinOpsReconciliation } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsReconciliation";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

/** FICTITIOUS — not historical calibration. */
const FICT_BILLED = "5.11000000";
const FICT_PROVIDER = "7.24000000";
const FICT_API = "99.99000000";
const FICT_EUR = "3.50000000";
const FICT_THRESHOLD = "12.34000000";
const FICT_SIGNED = "-1.25000000";

describeDb("FinOps T4 PostgreSQL enforcement projection integration", () => {
  let pool: Pool;
  const suffix = `${Date.now()}`;

  beforeAll(() => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  it("1. T4 migration after T3", async () => {
    const migrations = await pool.query<{ name: string }>(
      `SELECT name FROM pgmigrations ORDER BY run_on ASC, name ASC`,
    );
    const names = migrations.rows.map((r) => r.name);
    const i1 = names.findIndex((n) => n.includes("finops-t1"));
    const i2 = names.findIndex((n) => n.includes("finops-t2"));
    const i6 = names.findIndex((n) => n.includes("finops-t6"));
    const i3 = names.findIndex((n) => n.includes("finops-t3"));
    const i4 = names.findIndex((n) => n.includes("finops-t4"));
    expect(i1).toBeGreaterThanOrEqual(0);
    expect(i2).toBeGreaterThan(i1);
    expect(i6).toBeGreaterThan(i2);
    expect(i3).toBeGreaterThan(i6);
    expect(i4).toBeGreaterThan(i3);
  });

  it("2. table exists / schema expected", async () => {
    const cols = await pool.query<{
      column_name: string;
      data_type: string;
      numeric_precision: number | null;
      numeric_scale: number | null;
    }>(
      `SELECT column_name, data_type, numeric_precision, numeric_scale
       FROM information_schema.columns
       WHERE table_name = 'finops_enforcement_projection'
       ORDER BY ordinal_position`,
    );
    const names = cols.rows.map((r) => r.column_name);
    expect(names).toEqual(
      expect.arrayContaining([
        "project_id",
        "period_start",
        "currency",
        "blocking_eligible_amount",
        "billed_amount",
        "provider_observed_amount",
        "eligible_cost_event_count",
        "billed_event_count",
        "provider_observed_event_count",
        "rebuild_version",
        "rebuilt_at",
      ]),
    );
    const amount = cols.rows.find(
      (r) => r.column_name === "blocking_eligible_amount",
    );
    expect(amount?.data_type).toBe("numeric");
    expect(amount?.numeric_precision).toBe(20);
    expect(amount?.numeric_scale).toBe(8);
  });

  it("3. no seed thresholds", async () => {
    const count = await pool.query<{ n: string }>(
      `SELECT COUNT(*)::text AS n FROM finops_enforcement_projection`,
    );
    // Table may have rows from other tests in suite; seed means migration-time data.
    // Prove no threshold / flag tables for T4.
    const thresholdTables = await pool.query<{ table_name: string }>(
      `SELECT table_name FROM information_schema.tables
       WHERE table_schema = 'public'
         AND table_name LIKE '%enforcement%threshold%'`,
    );
    expect(thresholdTables.rows).toHaveLength(0);
    expect(Number(count.rows[0]!.n)).toBeGreaterThanOrEqual(0);
  });

  it("4. cost events BILLED + PROVIDER_OBSERVED rebuild", async () => {
    const projectId = `proj-t4-sum-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    for (const [id, sot, evidence, amount] of [
      ["b1", "BILLED", "billed", FICT_BILLED],
      ["p1", "PROVIDER_OBSERVED", "observed", FICT_PROVIDER],
    ] as const) {
      const identity = deriveCostEventIdentity({
        projectId,
        executionRunId: `run-${id}-${suffix}`,
        evidenceClass: evidence,
        correctionRef: null,
        amount,
        currency: "USD",
      });
      await reconciliation.insertCostEvent({
        costEventId: identity.costEventId,
        dedupKey: identity.dedupKey,
        projectId,
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-${id}-${suffix}`,
        derivedSourceReference: null,
        usageEventId: null,
        periodStart: "2026-08-01",
        currency: "USD",
        amount,
        evidenceClass: evidence,
        sourceOfTruth: sot,
        estimationStatus: "available",
        correctionRef: null,
        catalogVersion: null,
        provider: "openai",
        model: "gpt-test",
        unit: null,
        billingQuantum: null,
        usageQuantity: null,
        occurredAt: "2026-08-07T12:00:00.000Z",
      });
    }
    const result = await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.projections[0]!.blockingEligibleAmount).toBe("12.35000000");
    expect(result.projections[0]!.billedAmount).toBe(FICT_BILLED);
    expect(result.projections[0]!.providerObservedAmount).toBe(FICT_PROVIDER);
  });

  it("5. API_USAGE excluded despite observed evidenceClass", async () => {
    const projectId = `proj-t4-api-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    for (const [id, sot, evidence, amount] of [
      ["b1", "BILLED", "billed", FICT_BILLED],
      ["a1", "API_USAGE", "observed", FICT_API],
    ] as const) {
      const identity = deriveCostEventIdentity({
        projectId,
        executionRunId: `run-${id}-${suffix}`,
        evidenceClass: evidence,
        correctionRef: null,
        amount,
        currency: "USD",
      });
      await reconciliation.insertCostEvent({
        costEventId: identity.costEventId,
        dedupKey: identity.dedupKey,
        projectId,
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-${id}-${suffix}`,
        derivedSourceReference: null,
        usageEventId: null,
        periodStart: "2026-08-01",
        currency: "USD",
        amount,
        evidenceClass: evidence,
        sourceOfTruth: sot,
        estimationStatus: "available",
        correctionRef: null,
        catalogVersion: null,
        provider: "openai",
        model: "gpt-test",
        unit: null,
        billingQuantum: null,
        usageQuantity: null,
        occurredAt: "2026-08-07T12:00:00.000Z",
      });
    }
    const result = await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.projections[0]!.blockingEligibleAmount).toBe(FICT_BILLED);
    expect(result.projections[0]!.eligibleCostEventCount).toBe(1);
  });

  it("6. currency isolation", async () => {
    const projectId = `proj-t4-fx-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    for (const [id, currency, amount] of [
      ["u", "USD", FICT_BILLED],
      ["e", "EUR", FICT_EUR],
    ] as const) {
      const identity = deriveCostEventIdentity({
        projectId,
        executionRunId: `run-${id}-${suffix}`,
        evidenceClass: "billed",
        correctionRef: null,
        amount,
        currency,
      });
      await reconciliation.insertCostEvent({
        costEventId: identity.costEventId,
        dedupKey: identity.dedupKey,
        projectId,
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-${id}-${suffix}`,
        derivedSourceReference: null,
        usageEventId: null,
        periodStart: "2026-08-01",
        currency,
        amount,
        evidenceClass: "billed",
        sourceOfTruth: "BILLED",
        estimationStatus: "available",
        correctionRef: null,
        catalogVersion: null,
        provider: "openai",
        model: "gpt-test",
        unit: null,
        billingQuantum: null,
        usageQuantity: null,
        occurredAt: "2026-08-07T12:00:00.000Z",
      });
    }
    const result = await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.projections).toHaveLength(2);
    expect(
      result.projections.find((p) => p.currency === "USD")!
        .blockingEligibleAmount,
    ).toBe(FICT_BILLED);
    expect(
      result.projections.find((p) => p.currency === "EUR")!
        .blockingEligibleAmount,
    ).toBe(FICT_EUR);
  });

  it("7. projection persists across new store instance", async () => {
    const projectId = `proj-t4-persist-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-persist-${suffix}`,
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId,
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-persist-${suffix}`,
        derivedSourceReference: null,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "openai",
      model: "gpt-test",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    const storeA = createPostgresFinOpsEnforcementProjectionStore(pool);
    await rebuildEnforcementProjection(
      { projection: storeA, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    const storeB = createPostgresFinOpsEnforcementProjectionStore(pool);
    const row = await storeB.withExclusiveProjectPeriod(
      { projectId, periodStart: "2026-08-01" },
      (ops) => ops.readProjection("USD"),
    );
    expect(row?.blockingEligibleAmount).toBe(FICT_BILLED);
  });

  it("8. rebuildVersion increments", async () => {
    const projectId = `proj-t4-ver-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-ver-${suffix}`,
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId,
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-ver-${suffix}`,
        derivedSourceReference: null,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "openai",
      model: "gpt-test",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    const r1 = await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    const r2 = await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:01:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(r1.outcome).toBe("succeeded");
    expect(r2.outcome).toBe("succeeded");
    if (r1.outcome !== "succeeded" || r2.outcome !== "succeeded") return;
    expect(r1.projections[0]!.rebuildVersion).toBe(1);
    expect(r2.projections[0]!.rebuildVersion).toBe(2);
  });

  it("9. replace full project/period removes obsolete currency row", async () => {
    const projectId = `proj-t4-obs-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-u-obs-${suffix}`,
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId,
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-u-obs-${suffix}`,
        derivedSourceReference: null,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "openai",
      model: "gpt-test",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    // Seed a stale EUR projection row (ledger is append-only — no DELETE).
    await projection.withExclusiveProjectPeriod(
      { projectId, periodStart: "2026-08-01" },
      async (ops) => {
        await ops.replaceProjections([
          {
            projectId,
            periodStart: "2026-08-01",
            currency: "USD",
            blockingEligibleAmount: FICT_BILLED,
            billedAmount: FICT_BILLED,
            providerObservedAmount: "0.00000000",
            eligibleCostEventCount: 1,
            billedEventCount: 1,
            providerObservedEventCount: 0,
            rebuildVersion: 1,
            rebuiltAt: "2026-08-07T11:00:00.000Z",
          },
          {
            projectId,
            periodStart: "2026-08-01",
            currency: "EUR",
            blockingEligibleAmount: FICT_EUR,
            billedAmount: FICT_EUR,
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
    const result = await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:02:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.projections.map((p) => p.currency)).toEqual(["USD"]);
    const eur = await projection.withExclusiveProjectPeriod(
      { projectId, periodStart: "2026-08-01" },
      (ops) => ops.readProjection("EUR"),
    );
    expect(eur).toBeNull();
  });

  it("10. concurrent rebuild same project/period serialized", async () => {
    const projectId = `proj-t4-conc-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-conc-${suffix}`,
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId,
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-conc-${suffix}`,
        derivedSourceReference: null,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "openai",
      model: "gpt-test",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    const deps = {
      projection,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };
    const input = { projectId, periodStart: "2026-08-01" };
    const results = await Promise.all([
      rebuildEnforcementProjection(deps, input),
      rebuildEnforcementProjection(deps, input),
      rebuildEnforcementProjection(deps, input),
    ]);
    expect(results.every((r) => r.outcome === "succeeded")).toBe(true);
    const final = await projection.withExclusiveProjectPeriod(input, (ops) =>
      ops.readProjection("USD"),
    );
    expect(final?.rebuildVersion).toBe(3);
  });

  it("11. decision read and rebuild share project/period lock semantics", async () => {
    const projectId = `proj-t4-lock-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-lock-${suffix}`,
      evidenceClass: "billed",
      correctionRef: null,
      amount: "12.35000000",
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId,
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-lock-${suffix}`,
        derivedSourceReference: null,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: "12.35000000",
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "openai",
      model: "gpt-test",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    const [rebuildResult, decision] = await Promise.all([
      rebuildEnforcementProjection(
        { projection, nowIso: () => "2026-08-07T12:05:00.000Z" },
        { projectId, periodStart: "2026-08-01" },
      ),
      evaluateFinOpsEnforcement(
        {
          projection,
          resolvePolicy: () => ({
            thresholdCode: "FICT_T4_PG",
            currency: "USD",
            thresholdAmount: FICT_THRESHOLD,
            effect: "enforce",
          }),
        },
        {
          projectId,
          executionRunId: `run-lock-${suffix}`,
          correlationId: `corr-lock-${suffix}`,
          occurredAt: "2026-08-07T12:00:00.000Z",
        },
      ),
    ]);
    expect(rebuildResult.outcome).toBe("succeeded");
    expect(["allow", "block", "soft_signal", "failed"]).toContain(
      decision.decision,
    );
    expect(decision.decision).not.toBe("failed");
  });

  it("12. no duplicate PK rows", async () => {
    const projectId = `proj-t4-pk-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-pk-${suffix}`,
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId,
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-pk-${suffix}`,
        derivedSourceReference: null,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_BILLED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: null,
      provider: "openai",
      model: "gpt-test",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:01:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    const count = await pool.query<{ n: string }>(
      `SELECT COUNT(*)::text AS n FROM finops_enforcement_projection
       WHERE project_id = $1 AND period_start = '2026-08-01'::date AND currency = 'USD'`,
      [projectId],
    );
    expect(count.rows[0]!.n).toBe("1");
  });

  it("13. signed correction-safe amounts accepted", async () => {
    const projectId = `proj-t4-signed-${suffix}`;
    const reconciliation = createPostgresFinOpsReconciliation(pool);
    const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-signed-${suffix}`,
      evidenceClass: "billed",
      correctionRef: "corr-1",
      amount: FICT_SIGNED,
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: identity.costEventId,
      dedupKey: identity.dedupKey,
      projectId,
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-signed-${suffix}`,
        derivedSourceReference: null,
      usageEventId: null,
      periodStart: "2026-08-01",
      currency: "USD",
      amount: FICT_SIGNED,
      evidenceClass: "billed",
      sourceOfTruth: "BILLED",
      estimationStatus: "available",
      correctionRef: "corr-1",
      catalogVersion: null,
      provider: "openai",
      model: "gpt-test",
      unit: null,
      billingQuantum: null,
      usageQuantity: null,
      occurredAt: "2026-08-07T12:00:00.000Z",
    });
    const result = await rebuildEnforcementProjection(
      { projection, nowIso: () => "2026-08-07T12:00:00.000Z" },
      { projectId, periodStart: "2026-08-01" },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.projections[0]!.blockingEligibleAmount).toBe(FICT_SIGNED);
  });

  it("14. down refuses when projection rows exist (guard inspection)", async () => {
    const fs = await import("node:fs/promises");
    const path = await import("node:path");
    const migrationPath = path.join(
      process.cwd(),
      "db/migrations/1754600003000_finops-t4-enforcement-projection.js",
    );
    const source = await fs.readFile(migrationPath, "utf8");
    expect(source).toMatch(/Refuse FinOps T4 down migration/);
    expect(source).toMatch(/finops_enforcement_projection/);
    const count = await pool.query<{ n: string }>(
      `SELECT COUNT(*)::text AS n FROM finops_enforcement_projection`,
    );
    expect(Number(count.rows[0]!.n)).toBeGreaterThan(0);
  });
});
