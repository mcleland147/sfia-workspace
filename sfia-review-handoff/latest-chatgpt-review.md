# ChatGPT Review Pack — FinOps Snapshot Coverage Fix (FULL)

## Meta
- Level: FULL
- Timestamp CEST: 2026-08-10 00:02:02 CEST
- Timestamp UTC: 2026-08-09 22:02:02 UTC
- Repo: mcleland147/sfia-workspace
- Branch: `delivery/sfia-studio-finops-fast-track-billed-period-e2e`
- Review base origin/main: `96a8a14bc894b520043b3a8f758b1fb14a72a5e4`
- Review HEAD: `8feaa747f0bb33f304989c438fbfc9880d5ce2e7`
- HEAD before micro-correction: `b4ce168f0f9ab3a90f430c3237c3eb5403815ccd`
- Synthesis-only: NO
- Project push: NO
- Provider calls: 0
- Pilot DB mutations: 0
- MONITOR: NOT ACTIVATED
- E1: NOT AUTHORIZED
- Live Costs reserve: OPEN
- R-T4-T3-SYNC-01: OPEN BEFORE MONITOR
- T4 logic changed: NO
- T2-v1 identity unchanged: YES
- Adapter contract: openai-costs-v1 → openai-costs-v2 (coverage-bound sourceBatchId)
- Period identity t2-v2-period: UNCHANGED
- PostgreSQL ephemeral used: YES
- Verdict target: FINOPS SNAPSHOT COVERAGE FIX PASS — COMPLETE SNAPSHOT TEMPORALLY BOUNDED — OUT-OF-COVERAGE ATOMS PRESERVED — EMPTY SNAPSHOT IDENTITIES COVERAGE-SAFE — REPLAY IDEMPOTENT — POSTGRES COVERAGE ISOLATION PROVED — T2-V1 PRESERVED — T4 UNCHANGED — LIVE COSTS RESERVE OPEN — REVIEW HANDOFF COMPLETE — READY FOR PR READINESS

## Local Git Truth
```
?? .tmp-sfia-review/

```

## Commits (origin/main..HEAD)
```
8feaa74 fix(sfia-studio): bind billed snapshots to temporal coverage
b4ce168 fix(sfia-studio): close billed snapshot reconciliation reserves
eb50183 fix(sfia-studio): parse OpenAI Costs amount.value from raw JSON decimals
a7844d7 feat(sfia-studio): complete FinOps billed period fast-track

```

## Diff inventory
### git diff --stat origin/main...HEAD
```
 .../postgres/t2.aggregate.integration.test.ts      |   20 +-
 ...2.billed-period-concurrency.integration.test.ts |  466 +++++++
 .../postgres/t2.reconciliation.integration.test.ts |    4 +-
 .../t4.enforcement-projection.integration.test.ts  |   34 +-
 .../t4.projection-refresh.integration.test.ts      |    2 +
 .../__tests__/oa/finops/t2.aggregate.unit.test.ts  |   16 +-
 .../oa/finops/t2.billed-period.unit.test.ts        | 1326 ++++++++++++++++++++
 .../oa/finops/t2.reconciliation.unit.test.ts       |    2 +
 .../oa/finops/t3.alert-review.unit.test.ts         |    6 +
 .../oa/finops/t4.enforcement.unit.test.ts          |    2 +
 .../oa/finops/t4.projection-refresh.unit.test.ts   |   37 +
 ...00005000_finops-t2-billed-period-attribution.js |  117 ++
 .../oa/finops/application/billedPeriodIdentity.ts  |  221 ++++
 .../oa/finops/application/providerMoneyBoundary.ts |   67 +
 .../oa/finops/application/reconcileBilledPeriod.ts |  884 +++++++++++++
 .../finops/application/reconcileProjectPeriod.ts   |    5 +
 .../application/refreshEnforcementAfterT2.ts       |   35 +
 .../app/lib/oa/finops/application/t2Identity.ts    |   57 +-
 .../lib/oa/finops/application/types.aggregate.ts   |   55 +-
 .../finops/infrastructure/memory/memoryFinOpsT2.ts |   56 +-
 .../postgres/postgresFinOpsAggregateStore.ts       |   16 +-
 .../postgresFinOpsEnforcementProjectionStore.ts    |   16 +-
 .../postgres/postgresFinOpsReconciliation.ts       |  288 +++--
 .../oa/finops/ports/finopsReconciliationPort.ts    |   17 +
 .../lib/oa/finops/server/composeFinOpsT7Runtime.ts |   11 +
 .../server/openaiOrganizationCostsAdapter.ts       |  333 +++++
 26 files changed, 3977 insertions(+), 116 deletions(-)

```

### git diff --name-status origin/main...HEAD
```
M	projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.aggregate.integration.test.ts
A	projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.billed-period-concurrency.integration.test.ts
M	projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts
M	projects/sfia-studio/app/__tests__/oa/finops/postgres/t4.enforcement-projection.integration.test.ts
M	projects/sfia-studio/app/__tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts
M	projects/sfia-studio/app/__tests__/oa/finops/t2.aggregate.unit.test.ts
A	projects/sfia-studio/app/__tests__/oa/finops/t2.billed-period.unit.test.ts
M	projects/sfia-studio/app/__tests__/oa/finops/t2.reconciliation.unit.test.ts
M	projects/sfia-studio/app/__tests__/oa/finops/t3.alert-review.unit.test.ts
M	projects/sfia-studio/app/__tests__/oa/finops/t4.enforcement.unit.test.ts
M	projects/sfia-studio/app/__tests__/oa/finops/t4.projection-refresh.unit.test.ts
A	projects/sfia-studio/app/db/migrations/1754600005000_finops-t2-billed-period-attribution.js
A	projects/sfia-studio/app/lib/oa/finops/application/billedPeriodIdentity.ts
A	projects/sfia-studio/app/lib/oa/finops/application/providerMoneyBoundary.ts
A	projects/sfia-studio/app/lib/oa/finops/application/reconcileBilledPeriod.ts
M	projects/sfia-studio/app/lib/oa/finops/application/reconcileProjectPeriod.ts
M	projects/sfia-studio/app/lib/oa/finops/application/refreshEnforcementAfterT2.ts
M	projects/sfia-studio/app/lib/oa/finops/application/t2Identity.ts
M	projects/sfia-studio/app/lib/oa/finops/application/types.aggregate.ts
M	projects/sfia-studio/app/lib/oa/finops/infrastructure/memory/memoryFinOpsT2.ts
M	projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore.ts
M	projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsEnforcementProjectionStore.ts
M	projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsReconciliation.ts
M	projects/sfia-studio/app/lib/oa/finops/ports/finopsReconciliationPort.ts
M	projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7Runtime.ts
A	projects/sfia-studio/app/lib/oa/finops/server/openaiOrganizationCostsAdapter.ts
```

## Bug fixed
A COMPLETE snapshot previously meant “complete for the economic scope in the month”, allowing an empty/partial-day snapshot to tombstone atoms belonging to other day buckets in the same month.

## Coverage contract
- `snapshot.completeness = complete` means complete ONLY for `[coverageStart, coverageEndExclusive)`
- Scope remains: provider + SFIA projectId + externalProjectId + periodStart
- Coverage must be parseable UTC, start < endExclusive, entirely inside the UTC month of periodStart
- Invalid coverage → `FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE` before any economic write
- Facts prevalidated (incl. bucket fully inside coverage) before first cost-event write
- Missing-atom tombstone only if historical bucket fully inside coverage; unparsable same-scope interval → `FINOPS_RECON_ATOM_COVERAGE_UNPROVABLE` (fail closed, no partial mutation)

## sourceBatchId binding
Material now includes coverageStart + coverageEndExclusive.
Empty atoms + different coverages → different sourceBatchId (T44).
Adapter contract bumped to `openai-costs-v2`.
COMPLETE snapshot adapter requires explicit endTimeUnix (`OPENAI_COSTS_COMPLETE_SNAPSHOT_REQUIRES_BOUNDED_END`).

## Validation results
### Unit FinOps (74)
```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/projects/sfia-studio/app

 ✓ __tests__/oa/finops/t2.money.unit.test.ts (12 tests) 2ms
 ✓ __tests__/oa/finops/t2.aggregate.unit.test.ts (5 tests) 4ms
 ✓ __tests__/oa/finops/t2.reconciliation.unit.test.ts (4 tests) 4ms
 ✓ __tests__/oa/finops/t4.projection-refresh.unit.test.ts (8 tests) 8ms
 ✓ __tests__/oa/finops/t4.enforcement.unit.test.ts (19 tests) 10ms
 ✓ __tests__/oa/finops/t2.billed-period.unit.test.ts (26 tests) 19ms

 Test Files  6 passed (6)
      Tests  74 passed (74)
   Start at  00:01:35
   Duration  298ms (transform 187ms, setup 214ms, collect 414ms, tests 47ms, environment 1ms, prepare 225ms)

```

### PostgreSQL T2 incl PG-T01..04 (14)
```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/projects/sfia-studio/app

 ✓ __tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts (3 tests) 49ms
 ✓ __tests__/oa/finops/postgres/t2.aggregate.integration.test.ts (7 tests) 61ms
 ✓ __tests__/oa/finops/postgres/t2.billed-period-concurrency.integration.test.ts (4 tests) 86ms

 Test Files  3 passed (3)
      Tests  14 passed (14)
   Start at  00:01:34
   Duration  417ms (transform 119ms, setup 141ms, collect 209ms, tests 196ms, environment 0ms, prepare 148ms)

```

### Typecheck
```
tsc --noEmit: EXIT 0
```

### Lint
```

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
```

### Checklist
- T41 narrow coverage isolation: PASS
- T42 missing atom inside coverage: PASS
- T43 outside coverage preserved: PASS
- T44 empty snapshots distinct sourceBatchId: PASS
- T45 invalid/cross-period fails before writes: PASS
- T46 incomplete never tombstones: PASS
- T47 exact replay coverage idempotent: PASS
- T48 adapter bounded snapshot declaration: PASS
- T49 adapter missing end bound fails closed: PASS
- T50 fact outside coverage rejected before writes: PASS
- PG-T01/02/03/04: PASS

## Files — exploitable content

### `projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.aggregate.integration.test.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (15010 bytes)

```
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

```

### `projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.billed-period-concurrency.integration.test.ts` (CREATED) — content mode FULL
Coverage: COMPLETE. full file (14152 bytes)

```
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

```

### `projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (7318 bytes)

```
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
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-ao-${suffix}`,
        derivedSourceReference: null,
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

```

### `projects/sfia-studio/app/__tests__/oa/finops/postgres/t4.enforcement-projection.integration.test.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (24227 bytes)

```
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

```

### `projects/sfia-studio/app/__tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (20327 bytes)

```
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
        attributionScope: "EXECUTION_RUN",
        executionRunId: `run-03-${id}-${suffix}`,
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

```

### `projects/sfia-studio/app/__tests__/oa/finops/t2.aggregate.unit.test.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (9492 bytes)

```
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

```

### `projects/sfia-studio/app/__tests__/oa/finops/t2.billed-period.unit.test.ts` (CREATED) — content mode FULL
Coverage: COMPLETE. full file (42800 bytes)

```
/**
 * @vitest-environment node
 *
 * FinOps T2 — BILLED period attribution (PROJECT_PERIOD / OPTION B).
 */
import { describe, expect, it } from "vitest";
import {
  buildBilledPeriodSourceBatchId,
  buildDerivedSourceReference,
} from "@/lib/oa/finops/application/billedPeriodIdentity";
import { reconcileBilledPeriod } from "@/lib/oa/finops/application/reconcileBilledPeriod";
import {
  deriveCostEventIdentity,
  derivePeriodCostEventIdentity,
} from "@/lib/oa/finops/application/t2Identity";
import type { BilledPeriodFact } from "@/lib/oa/finops/application/types.aggregate";
import {
  canonicalProviderAmountString,
  normalizeProviderCurrency,
  parseProviderMoneyString,
} from "@/lib/oa/finops/application/providerMoneyBoundary";
import { buildEnforcementProjectionsFromCostEvents } from "@/lib/oa/finops/application/rebuildEnforcementProjection";
import { createMemoryFinOpsT2Pair } from "@/lib/oa/finops/infrastructure/memory/memoryFinOpsT2";
import {
  buildOpenAiCostsSourceBatchId,
  fetchOpenAiOrganizationCostsSnapshot,
  mapAtomsToBilledPeriodFacts,
  parseCostsPageToAtoms,
} from "@/lib/oa/finops/server/openaiOrganizationCostsAdapter";

const PROJECT = "sfia-proj-1";
const EXTERNAL = "proj_openai_1";
const PERIOD = "2026-08-01";
const BUCKET = "2026-08-07T00:00:00.000Z";

function derivedRef(lineItem: string | null = "ALL"): string {
  return buildDerivedSourceReference({
    provider: "openai",
    externalProjectId: EXTERNAL,
    sfiaProjectId: PROJECT,
    sourceBucketStart: BUCKET,
    sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
    lineItem: lineItem === "ALL" ? null : lineItem,
    currency: "USD",
  });
}

function billedFact(
  providerAmount: string,
  sourceBatchId: string,
  lineItem: string | null = null,
): BilledPeriodFact {
  return {
    projectId: PROJECT,
    externalProjectId: EXTERNAL,
    periodStart: PERIOD,
    provider: "openai",
    sourceBucketStart: BUCKET,
    sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
    lineItem,
    providerAmount,
    currency: "USD",
    derivedSourceReference: derivedRef(lineItem),
    sourceBatchId,
  };
}

const COV_START = BUCKET;
const COV_END = "2026-08-08T00:00:00.000Z";
const BUCKET_AUG7 = "2026-08-07T00:00:00.000Z";
const BUCKET_AUG8 = "2026-08-08T00:00:00.000Z";
const BUCKET_AUG9 = "2026-08-09T00:00:00.000Z";
const END_AUG8 = "2026-08-08T00:00:00.000Z";
const END_AUG9 = "2026-08-09T00:00:00.000Z";
const END_AUG10 = "2026-08-10T00:00:00.000Z";

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

function incompleteSnapshot(
  coverageStart: string = COV_START,
  coverageEndExclusive: string = COV_END,
  externalProjectId: string = EXTERNAL,
) {
  return {
    completeness: "incomplete" as const,
    provider: "openai",
    externalProjectId,
    coverageStart,
    coverageEndExclusive,
  };
}

function derivedRefAt(
  bucketStart: string,
  bucketEndExclusive: string,
  lineItem: string | null = "ALL",
  externalProjectId: string = EXTERNAL,
): string {
  return buildDerivedSourceReference({
    provider: "openai",
    externalProjectId,
    sfiaProjectId: PROJECT,
    sourceBucketStart: bucketStart,
    sourceBucketEndExclusive: bucketEndExclusive,
    lineItem: lineItem === "ALL" ? null : lineItem,
    currency: "USD",
  });
}

function billedFactAt(
  providerAmount: string,
  sourceBatchId: string,
  bucketStart: string,
  bucketEndExclusive: string,
  lineItem: string | null = null,
  externalProjectId: string = EXTERNAL,
): BilledPeriodFact {
  return {
    projectId: PROJECT,
    externalProjectId,
    periodStart: PERIOD,
    provider: "openai",
    sourceBucketStart: bucketStart,
    sourceBucketEndExclusive: bucketEndExclusive,
    lineItem,
    providerAmount,
    currency: "USD",
    derivedSourceReference: derivedRefAt(
      bucketStart,
      bucketEndExclusive,
      lineItem,
      externalProjectId,
    ),
    sourceBatchId,
  };
}

function batchForAtoms(
  atoms: ReadonlyArray<{
    line_item: string | null;
    providerAmount: string;
    sourceBucketStart?: string;
    sourceBucketEndExclusive?: string;
  }>,
  coverageStart: string = COV_START,
  coverageEndExclusive: string = COV_END,
  externalProjectId: string = EXTERNAL,
): string {
  return buildBilledPeriodSourceBatchId({
    provider: "openai",
    externalProjectId,
    sfiaProjectId: PROJECT,
    periodStart: PERIOD,
    adapterContractVersion: "openai-costs-v2",
    coverageStart,
    coverageEndExclusive,
    atoms: atoms.map((a) => ({
      sourceBucketStart: a.sourceBucketStart ?? coverageStart,
      sourceBucketEndExclusive:
        a.sourceBucketEndExclusive ?? coverageEndExclusive,
      project_id: externalProjectId,
      line_item: a.line_item,
      currency: "USD",
      providerAmount: a.providerAmount,
    })),
  });
}

describe("FinOps T2 billed period", () => {
  it("deriveCostEventIdentity unchanged for fixed RUN inputs", () => {
    const identity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "run-1",
      evidenceClass: "observed",
      correctionRef: "corr-1",
      sourceBatchId: "batch-1",
      amount: "0.12000000",
      currency: "USD",
    });
    expect(identity).toEqual({
      costEventId:
        "cost_b861bab1869be863abac5ce1ae8fb7def8fc93ac42ed5328fb73968ab46b8f9b",
      dedupKey:
        "cost_dedup_b861bab1869be863abac5ce1ae8fb7def8fc93ac42ed5328fb73968ab46b8f9b",
    });
  });

  it("PROJECT_PERIOD identity is deterministic", () => {
    const a = derivePeriodCostEventIdentity({
      projectId: PROJECT,
      periodStart: PERIOD,
      provider: "openai",
      derivedSourceReference: derivedRef(),
      correctionRef: "INITIAL",
      sourceBatchId: "batch_test",
      amount: "100.00000000",
      currency: "USD",
    });
    const b = derivePeriodCostEventIdentity({
      projectId: PROJECT,
      periodStart: PERIOD,
      provider: "openai",
      derivedSourceReference: derivedRef(),
      correctionRef: "INITIAL",
      sourceBatchId: "batch_test",
      amount: "100.00000000",
      currency: "USD",
    });
    expect(a).toEqual(b);
  });

  it("rejects EXECUTION_RUN empty-string executionRunId via reconcileProjectPeriod path", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const { reconcileProjectPeriod } = await import(
      "@/lib/oa/finops/application/reconcileProjectPeriod"
    );
    const result = await reconcileProjectPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: PERIOD,
        sourceBatchId: "batch-empty-run",
        facts: [
          {
            executionRunId: "",
            usageEventId: null,
            evidenceClass: "observed",
            sourceOfTruth: "PROVIDER_OBSERVED",
            amount: "1.00000000",
            currency: "USD",
            correctionRef: "corr-1",
            provider: "openai",
            model: null,
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(result.outcome).toBe("failed");
  });

  it("requires derivedSourceReference on billed facts", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const fact = billedFact("100.00000000", "batch-a");
    const bad = { ...fact, derivedSourceReference: "  " };
    const result = await reconcileBilledPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      {
        projectId: PROJECT,
        periodStart: PERIOD,
        sourceBatchId: "batch-a",
        facts: [bad],
        snapshot: completeSnapshot(),
      },
    );
    expect(result.outcome).toBe("failed");
  });

  it("sourceBatchId is deterministic and order-independent", () => {
    const atomA = {
      sourceBucketStart: BUCKET,
      sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
      project_id: EXTERNAL,
      line_item: null,
      currency: "USD",
      providerAmount: "100.00000000",
    };
    const atomB = {
      ...atomA,
      sourceBucketStart: "2026-08-08T00:00:00.000Z",
      providerAmount: "5.00000000",
    };
    const forward = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
      atoms: [atomA, atomB],
    });
    const reverse = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
      atoms: [atomB, atomA],
    });
    expect(forward).toBe(reverse);
    expect(forward.startsWith("batch_")).toBe(true);

    const changed = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
      atoms: [{ ...atomA, providerAmount: "101.00000000" }],
    });
    expect(changed).not.toBe(forward);
  });

  it("correction path 100→105→103 yields deltas and aggregate billed 103; replay adds 0", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
      atoms: [
        {
          sourceBucketStart: BUCKET,
          sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
          project_id: EXTERNAL,
          line_item: null,
          currency: "USD",
          providerAmount: "100.00000000",
        },
      ],
    });
    const first = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [billedFact("100.00000000", batch1)],
      snapshot: completeSnapshot(),
    });
    expect(first.outcome).toBe("succeeded");
    if (first.outcome !== "succeeded") return;
    expect(first.createdCount).toBe(1);

    const batch2 = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
      atoms: [
        {
          sourceBucketStart: BUCKET,
          sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
          project_id: EXTERNAL,
          line_item: null,
          currency: "USD",
          providerAmount: "105.00000000",
        },
      ],
    });
    const second = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch2,
      facts: [billedFact("105.00000000", batch2)],
      snapshot: completeSnapshot(),
    });
    expect(second.outcome).toBe("succeeded");
    if (second.outcome !== "succeeded") return;
    expect(second.createdCount).toBe(1);

    const batch3 = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
      atoms: [
        {
          sourceBucketStart: BUCKET,
          sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
          project_id: EXTERNAL,
          line_item: null,
          currency: "USD",
          providerAmount: "103.00000000",
        },
      ],
    });
    const third = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch3,
      facts: [billedFact("103.00000000", batch3)],
      snapshot: completeSnapshot(),
    });
    expect(third.outcome).toBe("succeeded");
    if (third.outcome !== "succeeded") return;

    const usd = third.aggregates.find((a) => a.currency === "USD");
    expect(usd?.billedAmount).toBe("103.00000000");

    const replay = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch3,
      facts: [billedFact("103.00000000", batch3)],
      snapshot: completeSnapshot(),
    });
    expect(replay.outcome).toBe("succeeded");
    if (replay.outcome !== "succeeded") return;
    expect(replay.idempotentReplay).toBe(true);
    expect(replay.createdCount).toBe(0);
  });

  it("PARAMETRIC estimate never contributes to T4 blockingEligibleAmount", () => {
    const projections = buildEnforcementProjectionsFromCostEvents({
      projectId: PROJECT,
      periodStart: PERIOD,
      rebuiltAt: "2026-08-07T12:00:00.000Z",
      events: [
        {
          costEventId: "c-est",
          dedupKey: "d-est",
          projectId: PROJECT,
          attributionScope: "EXECUTION_RUN",
          executionRunId: "run-1",
          derivedSourceReference: null,
          usageEventId: null,
          periodStart: PERIOD,
          currency: "USD",
          amount: "99.00000000",
          evidenceClass: "estimated",
          sourceOfTruth: "PARAMETRIC_ESTIMATE",
          estimationStatus: "available",
          correctionRef: null,
          catalogVersion: "v1",
          provider: "openai",
          model: "gpt-test",
          unit: "token",
          billingQuantum: "1000",
          usageQuantity: "1000",
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
        {
          costEventId: "c-bill",
          dedupKey: "d-bill",
          projectId: PROJECT,
          attributionScope: "PROJECT_PERIOD",
          executionRunId: null,
          derivedSourceReference: derivedRef(),
          usageEventId: null,
          periodStart: PERIOD,
          currency: "USD",
          amount: "5.00000000",
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          estimationStatus: "available",
          correctionRef: "INITIAL",
          catalogVersion: null,
          provider: "openai",
          model: null,
          unit: null,
          billingQuantum: null,
          usageQuantity: null,
          occurredAt: BUCKET,
        },
      ],
    });
    expect(projections[0]!.blockingEligibleAmount).toBe("5.00000000");
    expect(projections[0]!.billedAmount).toBe("5.00000000");
  });

  it("OpenAI mapper handles null line_item and rejects external project mismatch", () => {
    // Wire format mirrors OpenAI docs: amount.value is a JSON number.
    const raw = JSON.stringify({
      object: "page",
      data: [
        {
          object: "bucket",
          start_time: 1786060800,
          end_time: 1786147200,
          results: [
            {
              object: "organization.costs.result",
              project_id: EXTERNAL,
              line_item: null,
              amount: { value: 1.23, currency: "usd" },
            },
          ],
        },
      ],
      next_page: null,
    });
    const atoms = parseCostsPageToAtoms(raw);
    expect(atoms).toHaveLength(1);
    expect(atoms[0]!.line_item).toBeNull();
    expect(atoms[0]!.currency).toBe("USD");
    expect(atoms[0]!.providerAmount).toBe("1.23000000");

    const facts = mapAtomsToBilledPeriodFacts({
      projectId: PROJECT,
      externalProjectId: EXTERNAL,
      periodStart: PERIOD,
      provider: "openai",
      atoms,
      sourceBatchId: "batch-map",
    });
    expect(facts[0]!.lineItem).toBeNull();

    expect(() =>
      mapAtomsToBilledPeriodFacts({
        projectId: PROJECT,
        externalProjectId: "other-project",
        periodStart: PERIOD,
        provider: "openai",
        atoms,
        sourceBatchId: "batch-map",
      }),
    ).toThrow(/external project mismatch/);
  });

  it("invalid provider money fails closed", () => {
    expect(() =>
      parseProviderMoneyString("not-a-number", "USD"),
    ).toThrow();
    expect(normalizeProviderCurrency("usd")).toBe("USD");
    expect(
      canonicalProviderAmountString("1.123456785", "USD"),
    ).toBe("1.12345678");
    expect(
      canonicalProviderAmountString("1.123456795", "USD"),
    ).toBe("1.12345680");
  });

  it("concurrent reconcileBilledPeriod with same atom yields one economic delta", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
      atoms: [
        {
          sourceBucketStart: BUCKET,
          sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
          project_id: EXTERNAL,
          line_item: null,
          currency: "USD",
          providerAmount: "50.00000000",
        },
      ],
    });
    const input = {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch,
      facts: [billedFact("50.00000000", batch)],
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
    const billedEvents = reconciliation._costEvents.filter(
      (e) => e.attributionScope === "PROJECT_PERIOD",
    );
    expect(billedEvents).toHaveLength(1);
    expect(billedEvents[0]!.amount).toBe("50.00000000");
    expect(billedEvents[0]!.executionRunId).toBeNull();
  });

  it("T35 removed atom correction: A100+B10 then complete A100/B absent => billed 100", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms([
      { line_item: "A", providerAmount: "100.00000000" },
      { line_item: "B", providerAmount: "10.00000000" },
    ]);
    const s1 = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFact("100.00000000", batch1, "A"),
        billedFact("10.00000000", batch1, "B"),
      ],
      snapshot: completeSnapshot(),
    });
    expect(s1.outcome).toBe("succeeded");
    if (s1.outcome !== "succeeded") return;
    expect(s1.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "110.00000000",
    );

    const batch2 = batchForAtoms([
      { line_item: "A", providerAmount: "100.00000000" },
    ]);
    const s2 = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch2,
      facts: [billedFact("100.00000000", batch2, "A")],
      snapshot: completeSnapshot(),
    });
    expect(s2.outcome).toBe("succeeded");
    if (s2.outcome !== "succeeded") return;
    expect(s2.createdCount).toBe(1);
    expect(s2.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "100.00000000",
    );
    const bDelta = reconciliation._costEvents.find(
      (e) =>
        e.derivedSourceReference === derivedRef("B") &&
        e.amount === "-10.00000000",
    );
    expect(bDelta).toBeTruthy();
    expect(bDelta?.correctionRef?.startsWith("ABSENT_FROM_COMPLETE_SNAPSHOT|")).toBe(
      true,
    );
  });

  it("T36 removed atom exact replay adds no new economic event", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms([
      { line_item: "A", providerAmount: "100.00000000" },
      { line_item: "B", providerAmount: "10.00000000" },
    ]);
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFact("100.00000000", batch1, "A"),
        billedFact("10.00000000", batch1, "B"),
      ],
      snapshot: completeSnapshot(),
    });
    const batch2 = batchForAtoms([
      { line_item: "A", providerAmount: "100.00000000" },
    ]);
    const input = {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch2,
      facts: [billedFact("100.00000000", batch2, "A")],
      snapshot: completeSnapshot(),
    };
    const s2 = await reconcileBilledPeriod(deps, input);
    expect(s2.outcome).toBe("succeeded");
    const eventsAfterS2 = reconciliation._costEvents.length;
    const replay = await reconcileBilledPeriod(deps, input);
    expect(replay.outcome).toBe("succeeded");
    if (replay.outcome !== "succeeded") return;
    expect(replay.idempotentReplay).toBe(true);
    expect(replay.createdCount).toBe(0);
    expect(reconciliation._costEvents.length).toBe(eventsAfterS2);
    expect(
      (await aggregates.listAggregatesForProjectPeriod({
        projectId: PROJECT,
        periodStart: PERIOD,
      })).find((a) => a.currency === "USD")?.billedAmount,
    ).toBe("100.00000000");
  });

  it("T37 empty complete snapshot zeros all atoms in scope", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms([
      { line_item: "A", providerAmount: "100.00000000" },
      { line_item: "B", providerAmount: "10.00000000" },
    ]);
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFact("100.00000000", batch1, "A"),
        billedFact("10.00000000", batch1, "B"),
      ],
      snapshot: completeSnapshot(),
    });
    const batch2 = batchForAtoms([]);
    const s2 = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch2,
      facts: [],
      snapshot: completeSnapshot(),
    });
    expect(s2.outcome).toBe("succeeded");
    if (s2.outcome !== "succeeded") return;
    expect(s2.createdCount).toBe(2);
    expect(s2.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "0.00000000",
    );
    const amounts = reconciliation._costEvents
      .filter((e) => e.attributionScope === "PROJECT_PERIOD")
      .map((e) => e.amount)
      .sort();
    expect(amounts).toEqual([
      "-10.00000000",
      "-100.00000000",
      "10.00000000",
      "100.00000000",
    ]);
  });

  it("T38 provider failure / incomplete is NOT empty snapshot", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms([
      { line_item: "A", providerAmount: "100.00000000" },
      { line_item: "B", providerAmount: "10.00000000" },
    ]);
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFact("100.00000000", batch1, "A"),
        billedFact("10.00000000", batch1, "B"),
      ],
      snapshot: completeSnapshot(),
    });
    const eventsBefore = reconciliation._costEvents.length;
    const batchFail = "batch_incomplete_failure_not_empty";
    const incomplete = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batchFail,
      facts: [],
      snapshot: incompleteSnapshot(),
    });
    expect(incomplete.outcome).toBe("succeeded");
    if (incomplete.outcome !== "succeeded") return;
    expect(incomplete.createdCount).toBe(0);
    expect(reconciliation._costEvents.length).toBe(eventsBefore);
    expect(
      incomplete.aggregates.find((a) => a.currency === "USD")?.billedAmount,
    ).toBe("110.00000000");
    expect(
      reconciliation._costEvents.some((e) =>
        (e.correctionRef ?? "").startsWith("ABSENT_FROM_COMPLETE_SNAPSHOT|"),
      ),
    ).toBe(false);
  });

  it("T39 scope isolation: other externalProjectId atom is never zeroed", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const OTHER = "proj_openai_other";
    const batch1 = batchForAtoms([
      { line_item: "A", providerAmount: "100.00000000" },
      { line_item: "B", providerAmount: "10.00000000" },
    ]);
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFact("100.00000000", batch1, "A"),
        billedFact("10.00000000", batch1, "B"),
      ],
      snapshot: completeSnapshot(),
    });

    const otherRef = buildDerivedSourceReference({
      provider: "openai",
      externalProjectId: OTHER,
      sfiaProjectId: PROJECT,
      sourceBucketStart: BUCKET,
      sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
      lineItem: "X",
      currency: "USD",
    });
    const otherBatch = buildBilledPeriodSourceBatchId({
      provider: "openai",
      externalProjectId: OTHER,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      adapterContractVersion: "openai-costs-v2",
      coverageStart: COV_START,
      coverageEndExclusive: COV_END,
      atoms: [
        {
          sourceBucketStart: BUCKET,
          sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
          project_id: OTHER,
          line_item: "X",
          currency: "USD",
          providerAmount: "7.00000000",
        },
      ],
    });
    const otherFact: BilledPeriodFact = {
      projectId: PROJECT,
      externalProjectId: OTHER,
      periodStart: PERIOD,
      provider: "openai",
      sourceBucketStart: BUCKET,
      sourceBucketEndExclusive: "2026-08-08T00:00:00.000Z",
      lineItem: "X",
      providerAmount: "7.00000000",
      currency: "USD",
      derivedSourceReference: otherRef,
      sourceBatchId: otherBatch,
    };
    const other = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: otherBatch,
      facts: [otherFact],
      snapshot: completeSnapshot(COV_START, COV_END, OTHER),
    });
    expect(other.outcome).toBe("succeeded");

    const emptyLocal = batchForAtoms([]);
    const s2 = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: emptyLocal,
      facts: [],
      snapshot: completeSnapshot(COV_START, COV_END, EXTERNAL),
    });
    expect(s2.outcome).toBe("succeeded");
    if (s2.outcome !== "succeeded") return;
    expect(s2.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "7.00000000",
    );
    const otherEvents = reconciliation._costEvents.filter(
      (e) => e.derivedSourceReference === otherRef,
    );
    expect(otherEvents).toHaveLength(1);
    expect(otherEvents[0]!.amount).toBe("7.00000000");
  });

  it("T40 reappearance after absence: B=10 → absent → 7 yields aggregate 7", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms([
      { line_item: "B", providerAmount: "10.00000000" },
    ]);
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [billedFact("10.00000000", batch1, "B")],
      snapshot: completeSnapshot(),
    });
    const batchAbsent = batchForAtoms([]);
    const absent = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batchAbsent,
      facts: [],
      snapshot: completeSnapshot(),
    });
    expect(absent.outcome).toBe("succeeded");
    if (absent.outcome !== "succeeded") return;
    expect(absent.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "0.00000000",
    );

    const batchRe = batchForAtoms([
      { line_item: "B", providerAmount: "7.00000000" },
    ]);
    const reappear = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batchRe,
      facts: [billedFact("7.00000000", batchRe, "B")],
      snapshot: completeSnapshot(),
    });
    expect(reappear.outcome).toBe("succeeded");
    if (reappear.outcome !== "succeeded") return;
    expect(
      reappear.aggregates.find((a) => a.currency === "USD")?.billedAmount,
    ).toBe("7.00000000");
    const bAmounts = reconciliation._costEvents
      .filter((e) => e.derivedSourceReference === derivedRef("B"))
      .map((e) => e.amount);
    expect(bAmounts).toEqual([
      "10.00000000",
      "-10.00000000",
      "7.00000000",
    ]);
  });

  it("T41 narrow coverage isolation: empty Aug8 does not zero Aug7", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch7 = batchForAtoms(
      [{ line_item: "A", providerAmount: "10.00000000" }],
      BUCKET_AUG7,
      END_AUG8,
    );
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch7,
      facts: [
        billedFactAt("10.00000000", batch7, BUCKET_AUG7, END_AUG8, "A"),
      ],
      snapshot: completeSnapshot(BUCKET_AUG7, END_AUG8),
    });
    const batch8 = batchForAtoms(
      [{ line_item: "B", providerAmount: "5.00000000" }],
      BUCKET_AUG8,
      END_AUG9,
    );
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch8,
      facts: [
        billedFactAt("5.00000000", batch8, BUCKET_AUG8, END_AUG9, "B"),
      ],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    const emptyAug8 = batchForAtoms([], BUCKET_AUG8, END_AUG9);
    const result = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: emptyAug8,
      facts: [],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "10.00000000",
    );
    const amountsA = reconciliation._costEvents
      .filter((e) => e.derivedSourceReference === derivedRefAt(BUCKET_AUG7, END_AUG8, "A"))
      .map((e) => e.amount);
    const amountsB = reconciliation._costEvents
      .filter((e) => e.derivedSourceReference === derivedRefAt(BUCKET_AUG8, END_AUG9, "B"))
      .map((e) => e.amount);
    expect(amountsA).toEqual(["10.00000000"]);
    expect(amountsB).toEqual(["5.00000000", "-5.00000000"]);
  });

  it("T42 missing atom inside coverage still tombstones", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms(
      [
        { line_item: "A", providerAmount: "100.00000000" },
        { line_item: "B", providerAmount: "10.00000000" },
      ],
      BUCKET_AUG8,
      END_AUG9,
    );
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFactAt("100.00000000", batch1, BUCKET_AUG8, END_AUG9, "A"),
        billedFactAt("10.00000000", batch1, BUCKET_AUG8, END_AUG9, "B"),
      ],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    const batch2 = batchForAtoms(
      [{ line_item: "A", providerAmount: "100.00000000" }],
      BUCKET_AUG8,
      END_AUG9,
    );
    const s2 = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch2,
      facts: [
        billedFactAt("100.00000000", batch2, BUCKET_AUG8, END_AUG9, "A"),
      ],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    expect(s2.outcome).toBe("succeeded");
    if (s2.outcome !== "succeeded") return;
    expect(s2.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "100.00000000",
    );
    expect(
      reconciliation._costEvents.some(
        (e) =>
          e.derivedSourceReference ===
            derivedRefAt(BUCKET_AUG8, END_AUG9, "B") &&
          e.amount === "-10.00000000",
      ),
    ).toBe(true);
  });

  it("T43 outside coverage preserved across multi-day month", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    for (const [start, end, line, amt] of [
      [BUCKET_AUG7, END_AUG8, "A", "10.00000000"],
      [BUCKET_AUG8, END_AUG9, "B", "5.00000000"],
      [BUCKET_AUG9, END_AUG10, "C", "7.00000000"],
    ] as const) {
      const batch = batchForAtoms(
        [{ line_item: line, providerAmount: amt }],
        start,
        end,
      );
      const r = await reconcileBilledPeriod(deps, {
        projectId: PROJECT,
        periodStart: PERIOD,
        sourceBatchId: batch,
        facts: [billedFactAt(amt, batch, start, end, line)],
        snapshot: completeSnapshot(start, end),
      });
      expect(r.outcome).toBe("succeeded");
    }
    const emptyAug8 = batchForAtoms([], BUCKET_AUG8, END_AUG9);
    const result = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: emptyAug8,
      facts: [],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.aggregates.find((a) => a.currency === "USD")?.billedAmount).toBe(
      "17.00000000",
    );
    expect(
      reconciliation._costEvents.filter((e) => e.amount?.startsWith("-")),
    ).toHaveLength(1);
    expect(
      reconciliation._costEvents.find((e) => e.amount === "-5.00000000")
        ?.derivedSourceReference,
    ).toBe(derivedRefAt(BUCKET_AUG8, END_AUG9, "B"));
  });

  it("T44 empty snapshots different coverage have different sourceBatchId", () => {
    const a = batchForAtoms([], BUCKET_AUG7, END_AUG8);
    const b = batchForAtoms([], BUCKET_AUG8, END_AUG9);
    expect(a).not.toBe(b);
    const a2 = batchForAtoms([], BUCKET_AUG7, END_AUG8);
    expect(a2).toBe(a);
  });

  it("T45 invalid/cross-period coverage fails before writes", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch = batchForAtoms([]);
    const inverted = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch,
      facts: [],
      snapshot: completeSnapshot(END_AUG9, BUCKET_AUG8),
    });
    expect(inverted.outcome).toBe("failed");
    if (inverted.outcome !== "failed") return;
    expect(inverted.code).toBe("FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE");
    expect(reconciliation._costEvents).toHaveLength(0);

    const cross = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: "batch_cross_month",
      facts: [],
      snapshot: completeSnapshot(
        "2026-07-31T00:00:00.000Z",
        "2026-08-02T00:00:00.000Z",
      ),
    });
    expect(cross.outcome).toBe("failed");
    if (cross.outcome !== "failed") return;
    expect(cross.code).toBe("FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE");
    expect(reconciliation._costEvents).toHaveLength(0);
    const aggs = await aggregates.listAggregatesForProjectPeriod({
      projectId: PROJECT,
      periodStart: PERIOD,
    });
    expect(aggs).toHaveLength(0);
  });

  it("T46 incomplete snapshot never tombstones", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms(
      [
        { line_item: "A", providerAmount: "100.00000000" },
        { line_item: "B", providerAmount: "10.00000000" },
      ],
      BUCKET_AUG8,
      END_AUG9,
    );
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFactAt("100.00000000", batch1, BUCKET_AUG8, END_AUG9, "A"),
        billedFactAt("10.00000000", batch1, BUCKET_AUG8, END_AUG9, "B"),
      ],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    const before = reconciliation._costEvents.length;
    const incomplete = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: "batch_incomplete_aug8",
      facts: [],
      snapshot: incompleteSnapshot(BUCKET_AUG8, END_AUG9),
    });
    expect(incomplete.outcome).toBe("succeeded");
    if (incomplete.outcome !== "succeeded") return;
    expect(incomplete.createdCount).toBe(0);
    expect(reconciliation._costEvents.length).toBe(before);
    expect(
      incomplete.aggregates.find((a) => a.currency === "USD")?.billedAmount,
    ).toBe("110.00000000");
  });

  it("T47 exact replay coverage idempotent", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch1 = batchForAtoms(
      [{ line_item: "A", providerAmount: "10.00000000" }],
      BUCKET_AUG8,
      END_AUG9,
    );
    await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch1,
      facts: [
        billedFactAt("10.00000000", batch1, BUCKET_AUG8, END_AUG9, "A"),
      ],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    const empty = batchForAtoms([], BUCKET_AUG8, END_AUG9);
    const input = {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: empty,
      facts: [] as BilledPeriodFact[],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    };
    const first = await reconcileBilledPeriod(deps, input);
    expect(first.outcome).toBe("succeeded");
    const events = reconciliation._costEvents.length;
    const replay = await reconcileBilledPeriod(deps, input);
    expect(replay.outcome).toBe("succeeded");
    if (replay.outcome !== "succeeded") return;
    expect(replay.idempotentReplay).toBe(true);
    expect(replay.createdCount).toBe(0);
    expect(reconciliation._costEvents.length).toBe(events);
    expect(batchForAtoms([], BUCKET_AUG8, END_AUG9)).toBe(empty);
  });

  it("T48 adapter bounded snapshot declaration", async () => {
    const start = 1786147200; // 2026-08-08T00:00:00.000Z
    const end = 1786233600; // 2026-08-09T00:00:00.000Z
    const raw = JSON.stringify({
      object: "page",
      data: [],
      next_page: null,
    });
    const prev = process.env.OPENAI_ADMIN_KEY;
    process.env.OPENAI_ADMIN_KEY = "test-admin-key-not-live";
    let result;
    try {
    result = await fetchOpenAiOrganizationCostsSnapshot({
      projectId: PROJECT,
      externalProjectId: EXTERNAL,
      periodStart: PERIOD,
      startTimeUnix: start,
      endTimeUnix: end,
      fetchImpl: async () =>
        new Response(raw, { status: 200, headers: { "content-type": "application/json" } }),
    });
    expect(result.snapshot.coverageStart).toBe("2026-08-08T00:00:00.000Z");
    expect(result.snapshot.coverageEndExclusive).toBe("2026-08-09T00:00:00.000Z");
    expect(result.snapshot.completeness).toBe("complete");
    const expectedBatch = buildOpenAiCostsSourceBatchId({
      externalProjectId: EXTERNAL,
      sfiaProjectId: PROJECT,
      periodStart: PERIOD,
      coverageStart: "2026-08-08T00:00:00.000Z",
      coverageEndExclusive: "2026-08-09T00:00:00.000Z",
      atoms: [],
    });
    expect(result.sourceBatchId).toBe(expectedBatch);
    } finally {
      if (prev === undefined) delete process.env.OPENAI_ADMIN_KEY;
      else process.env.OPENAI_ADMIN_KEY = prev;
    }
  });

  it("T49 adapter complete snapshot without end bound fails closed", async () => {
    await expect(
      fetchOpenAiOrganizationCostsSnapshot({
        projectId: PROJECT,
        externalProjectId: EXTERNAL,
        periodStart: PERIOD,
        startTimeUnix: 1786147200,
        fetchImpl: async () => {
          throw new Error("fetch must not be called");
        },
      }),
    ).rejects.toThrow("OPENAI_COSTS_COMPLETE_SNAPSHOT_REQUIRES_BOUNDED_END");
  });

  it("T50 fact outside declared coverage rejected before writes", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const batch = batchForAtoms(
      [{ line_item: "A", providerAmount: "10.00000000" }],
      BUCKET_AUG8,
      END_AUG9,
    );
    const result = await reconcileBilledPeriod(deps, {
      projectId: PROJECT,
      periodStart: PERIOD,
      sourceBatchId: batch,
      facts: [
        billedFactAt("10.00000000", batch, BUCKET_AUG7, END_AUG8, "A"),
      ],
      snapshot: completeSnapshot(BUCKET_AUG8, END_AUG9),
    });
    expect(result.outcome).toBe("failed");
    if (result.outcome !== "failed") return;
    expect(result.code).toBe("FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE");
    expect(reconciliation._costEvents).toHaveLength(0);
  });

});

```

### `projects/sfia-studio/app/__tests__/oa/finops/t2.reconciliation.unit.test.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (8222 bytes)

```
/**
 * @vitest-environment node
 *
 * FinOps T2 — reconcileProjectPeriod (on-demand, bounded, idempotent).
 */
import { describe, expect, it } from "vitest";
import { reconcileProjectPeriod } from "@/lib/oa/finops/application/reconcileProjectPeriod";
import { deriveCostEventIdentity } from "@/lib/oa/finops/application/t2Identity";
import { createMemoryFinOpsT2Pair } from "@/lib/oa/finops/infrastructure/memory/memoryFinOpsT2";

describe("FinOps T2 reconciliation", () => {
  it("applies estimated→observed→billed via append-only correction events", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();

    // Prior estimated cost event (adjacent Money ledger).
    const estimatedIdentity = deriveCostEventIdentity({
      projectId: "p1",
      executionRunId: "run-1",
      evidenceClass: "estimated",
      correctionRef: null,
      amount: "0.10000000",
      currency: "USD",
    });
    await reconciliation.insertCostEvent({
      costEventId: estimatedIdentity.costEventId,
      dedupKey: estimatedIdentity.dedupKey,
      projectId: "p1",
      attributionScope: "EXECUTION_RUN",
      executionRunId: "run-1",
      derivedSourceReference: null,
      usageEventId: "evt_usage_1",
      periodStart: "2026-08-01",
      currency: "USD",
      amount: "0.10000000",
      evidenceClass: "estimated",
      sourceOfTruth: "PARAMETRIC_ESTIMATE",
      estimationStatus: "available",
      correctionRef: null,
      catalogVersion: "fixture-v1",
      provider: "fixture-provider",
      model: "fixture-model",
      unit: "token",
      billingQuantum: "1000",
      usageQuantity: "1000",
      occurredAt: "2026-08-07T10:00:00.000Z",
    });

    const observed = await reconcileProjectPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-obs-1",
        facts: [
          {
            executionRunId: "run-1",
            usageEventId: "evt_usage_1",
            evidenceClass: "observed",
            sourceOfTruth: "PROVIDER_OBSERVED",
            amount: "0.12000000",
            currency: "USD",
            correctionRef: "corr-obs-run-1",
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:05:00.000Z",
          },
        ],
      },
    );
    expect(observed.outcome).toBe("succeeded");
    if (observed.outcome !== "succeeded") return;
    expect(observed.createdCount).toBe(1);
    const observedUsd = observed.aggregates.find((a) => a.currency === "USD");
    expect(observedUsd?.estimatedAmount).toBe("0.10000000");
    expect(observedUsd?.observedAmount).toBe("0.12000000");

    const billed = await reconcileProjectPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-bill-1",
        facts: [
          {
            executionRunId: "run-1",
            usageEventId: "evt_usage_1",
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            amount: "0.11500000",
            currency: "USD",
            correctionRef: "corr-bill-run-1",
            provider: "fixture-provider",
            model: "fixture-model",
            occurredAt: "2026-08-07T10:10:00.000Z",
          },
        ],
      },
    );
    expect(billed.outcome).toBe("succeeded");
    if (billed.outcome !== "succeeded") return;
    const billedUsd = billed.aggregates.find((a) => a.currency === "USD");
    expect(billedUsd?.billedAmount).toBe("0.11500000");
    expect(reconciliation._costEvents).toHaveLength(3);
  });

  it("is idempotent on project+period+sourceBatchId", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const input = {
      projectId: "p1",
      periodStart: "2026-08-01",
      sourceBatchId: "batch-idem-1",
      facts: [
        {
          executionRunId: "run-2",
          usageEventId: null,
          evidenceClass: "observed" as const,
          sourceOfTruth: "PROVIDER_OBSERVED" as const,
          amount: "1.00000000",
          currency: "USD",
          correctionRef: "corr-idem-1",
          provider: "fixture-provider",
          model: null,
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
      ],
    };
    const deps = {
      reconciliation,
      aggregates,
      nowIso: () => "2026-08-07T11:00:00.000Z",
    };
    const first = await reconcileProjectPeriod(deps, input);
    const second = await reconcileProjectPeriod(deps, input);
    expect(first.outcome).toBe("succeeded");
    expect(second.outcome).toBe("succeeded");
    if (first.outcome !== "succeeded" || second.outcome !== "succeeded") return;
    expect(first.idempotentReplay).toBe(false);
    expect(second.idempotentReplay).toBe(true);
    expect(reconciliation._costEvents).toHaveLength(1);
  });

  it("rejects unbounded batch and keeps failure FinOps-side", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const result = await reconcileProjectPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-too-big",
        maxFacts: 1,
        facts: [
          {
            executionRunId: "a",
            usageEventId: null,
            evidenceClass: "observed",
            sourceOfTruth: "PROVIDER_OBSERVED",
            amount: "1.00000000",
            currency: "USD",
            correctionRef: "c1",
            provider: "fixture-provider",
            model: null,
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
          {
            executionRunId: "b",
            usageEventId: null,
            evidenceClass: "observed",
            sourceOfTruth: "PROVIDER_OBSERVED",
            amount: "2.00000000",
            currency: "USD",
            correctionRef: "c2",
            provider: "fixture-provider",
            model: null,
            occurredAt: "2026-08-07T10:00:00.000Z",
          },
        ],
      },
    );
    expect(result.outcome).toBe("failed");
    if (result.outcome !== "failed") return;
    expect(result.finopsSideOnly).toBe(true);
    expect(result.code).toBe("FINOPS_RECON_BATCH_TOO_LARGE");
  });

  it("duplicate correction within batch is duplicate, not conflict", async () => {
    const { reconciliation, aggregates } = createMemoryFinOpsT2Pair();
    const fact = {
      executionRunId: "run-dup",
      usageEventId: null,
      evidenceClass: "observed" as const,
      sourceOfTruth: "PROVIDER_OBSERVED" as const,
      amount: "0.50000000",
      currency: "USD",
      correctionRef: "corr-dup",
      provider: "fixture-provider",
      model: null,
      occurredAt: "2026-08-07T10:00:00.000Z",
    };
    const first = await reconcileProjectPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-dup-a",
        facts: [fact],
      },
    );
    expect(first.outcome).toBe("succeeded");

    // Same correction identity in a different batch → same cost dedup
    // (correction_ref + amount + run) without sourceBatchId in cost identity
    // actually includes sourceBatchId — different batch ⇒ new event.
    // Re-run same batch is covered by recon idempotence.
    // Here: identical cost identity without changing batch uses same correction.
    const replayFacts = await reconcileProjectPeriod(
      {
        reconciliation,
        aggregates,
        nowIso: () => "2026-08-07T11:05:00.000Z",
      },
      {
        projectId: "p1",
        periodStart: "2026-08-01",
        sourceBatchId: "batch-dup-a",
        facts: [fact],
      },
    );
    expect(replayFacts.outcome).toBe("succeeded");
    if (replayFacts.outcome !== "succeeded") return;
    expect(replayFacts.idempotentReplay).toBe(true);
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/finops/t3.alert-review.unit.test.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (37045 bytes)

```
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
      attributionScope: "EXECUTION_RUN",
      executionRunId: "r1",
      derivedSourceReference: null,
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
      attributionScope: "EXECUTION_RUN",
      executionRunId: "r1",
      derivedSourceReference: null,
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
      attributionScope: "EXECUTION_RUN",
      executionRunId: "r1",
      derivedSourceReference: null,
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

```

### `projects/sfia-studio/app/__tests__/oa/finops/t4.enforcement.unit.test.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (20479 bytes)

```
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

```

### `projects/sfia-studio/app/__tests__/oa/finops/t4.projection-refresh.unit.test.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (18077 bytes)

```
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
      attributionScope: "EXECUTION_RUN",
      executionRunId: "r1",
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
      attributionScope: "EXECUTION_RUN",
      executionRunId: "r1",
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
      attributionScope: "EXECUTION_RUN",
      executionRunId: "r1",
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
      withExclusiveProjectPeriodReconciliation: <T>(
        _input: { readonly projectId: string; readonly periodStart: string },
        work: (
          ops: Pick<
            typeof pair.reconciliation,
            | "insertCostEvent"
            | "listCostEventsForProjectPeriod"
            | "findReconciliationByDedup"
            | "insertReconciliationRecord"
            | "completeReconciliationRecord"
          >,
        ) => Promise<T>,
      ) =>
        work({
          insertCostEvent: (event) => pair.reconciliation.insertCostEvent(event),
          listCostEventsForProjectPeriod: (input) =>
            pair.reconciliation.listCostEventsForProjectPeriod(input),
          findReconciliationByDedup: (dedupKey) =>
            pair.reconciliation.findReconciliationByDedup(dedupKey),
          insertReconciliationRecord: async () => ({
            outcome: "failed" as const,
            message: "injected reconciliation persist failure",
            retryable: false,
          }),
          completeReconciliationRecord: (input) =>
            pair.reconciliation.completeReconciliationRecord(input),
        }),
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
      attributionScope: "EXECUTION_RUN",
      executionRunId: "r1",
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
      attributionScope: "EXECUTION_RUN",
      executionRunId: "r1",
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

```

### `projects/sfia-studio/app/db/migrations/1754600005000_finops-t2-billed-period-attribution.js` (CREATED) — content mode FULL
Coverage: COMPLETE. full file (2866 bytes)

```
/**
 * Migration: FinOps T2 BILLED period attribution scope (OPTION B).
 *
 * Adds attribution_scope + derived_source_reference; execution_run_id nullable
 * for PROJECT_PERIOD facts without fake executionRunId.
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.addColumn("finops_cost_event", {
    attribution_scope: { type: "text" },
  });

  pgm.sql(`
UPDATE finops_cost_event
SET attribution_scope = 'EXECUTION_RUN'
WHERE attribution_scope IS NULL;
`);

  pgm.alterColumn("finops_cost_event", "attribution_scope", {
    notNull: true,
  });

  pgm.alterColumn("finops_cost_event", "execution_run_id", {
    notNull: false,
  });

  pgm.addColumn("finops_cost_event", {
    derived_source_reference: { type: "text" },
  });

  pgm.addConstraint(
    "finops_cost_event",
    "finops_cost_event_attribution_scope_chk",
    {
      check: "attribution_scope IN ('EXECUTION_RUN', 'PROJECT_PERIOD')",
    },
  );

  pgm.addConstraint(
    "finops_cost_event",
    "finops_cost_event_scope_execution_run_id_chk",
    {
      check: `(
        (attribution_scope = 'EXECUTION_RUN' AND execution_run_id IS NOT NULL)
        OR
        (attribution_scope = 'PROJECT_PERIOD' AND execution_run_id IS NULL)
      )`,
    },
  );

  pgm.addConstraint(
    "finops_cost_event",
    "finops_cost_event_scope_derived_source_reference_chk",
    {
      check: `(
        (attribution_scope = 'EXECUTION_RUN')
        OR
        (attribution_scope = 'PROJECT_PERIOD' AND derived_source_reference IS NOT NULL)
      )`,
    },
  );

  pgm.createIndex(
    "finops_cost_event",
    [
      "project_id",
      "period_start",
      "attribution_scope",
      "derived_source_reference",
    ],
    {
      name: "finops_cost_event_project_period_scope_derived_idx",
    },
  );
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  pgm.sql(`
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM finops_cost_event
    WHERE attribution_scope = 'PROJECT_PERIOD'
  ) THEN
    RAISE EXCEPTION
      'Refusing to drop BILLED period attribution: PROJECT_PERIOD rows exist';
  END IF;
END $$;
`);

  pgm.dropIndex(
    "finops_cost_event",
    [],
    { name: "finops_cost_event_project_period_scope_derived_idx" },
  );
  pgm.dropConstraint(
    "finops_cost_event",
    "finops_cost_event_scope_derived_source_reference_chk",
  );
  pgm.dropConstraint(
    "finops_cost_event",
    "finops_cost_event_scope_execution_run_id_chk",
  );
  pgm.dropConstraint(
    "finops_cost_event",
    "finops_cost_event_attribution_scope_chk",
  );
  pgm.dropColumn("finops_cost_event", "derived_source_reference");
  pgm.dropColumn("finops_cost_event", "attribution_scope");
  pgm.alterColumn("finops_cost_event", "execution_run_id", {
    notNull: true,
  });
};

```

### `projects/sfia-studio/app/lib/oa/finops/application/billedPeriodIdentity.ts` (CREATED) — content mode FULL
Coverage: COMPLETE. full file (7130 bytes)

```
/**
 * FinOps T2 — BILLED period identity helpers (content-addressed, deterministic).
 */

import { createHash } from "node:crypto";

/**
 * Adapter contract bumped for coverage-bound sourceBatchId material
 * (coverageStart + coverageEndExclusive). No live PROJECT_PERIOD data exists.
 */
export const OPENAI_COSTS_ADAPTER_CONTRACT_VERSION = "openai-costs-v2" as const;

function normalizePart(value: string | null | undefined): string {
  if (value === null || value === undefined) return "";
  return value.trim();
}

function sha256Hex(material: string): string {
  return createHash("sha256").update(material, "utf8").digest("hex");
}

export function buildDerivedSourceReference(input: {
  readonly provider: string;
  readonly externalProjectId: string;
  readonly sfiaProjectId: string;
  readonly sourceBucketStart: string;
  readonly sourceBucketEndExclusive: string | null;
  readonly lineItem: string | null;
  readonly currency: string;
}): string {
  const lineItemOrAll = input.lineItem ?? "ALL";
  return [
    normalizePart(input.provider),
    normalizePart(input.externalProjectId),
    normalizePart(input.sfiaProjectId),
    normalizePart(input.sourceBucketStart),
    normalizePart(input.sourceBucketEndExclusive),
    lineItemOrAll,
    normalizePart(input.currency),
  ].join("|");
}

type BilledPeriodBatchAtom = {
  readonly sourceBucketStart: string;
  readonly sourceBucketEndExclusive: string | null;
  readonly project_id: string;
  readonly line_item: string | null;
  readonly currency: string;
  readonly providerAmount: string;
};

function canonicalAtomKey(atom: BilledPeriodBatchAtom): string {
  return [
    normalizePart(atom.sourceBucketStart),
    normalizePart(atom.sourceBucketEndExclusive),
    normalizePart(atom.project_id),
    normalizePart(atom.line_item ?? "ALL"),
    normalizePart(atom.currency),
    normalizePart(atom.providerAmount),
  ].join("|");
}

export function buildBilledPeriodSourceBatchId(input: {
  readonly provider: string;
  readonly externalProjectId: string;
  readonly sfiaProjectId: string;
  readonly periodStart: string;
  readonly adapterContractVersion: string;
  readonly coverageStart: string;
  readonly coverageEndExclusive: string;
  readonly atoms: ReadonlyArray<BilledPeriodBatchAtom>;
}): string {
  const sorted = [...input.atoms]
    .map(canonicalAtomKey)
    .sort((a, b) => a.localeCompare(b));
  const material = [
    normalizePart(input.provider),
    normalizePart(input.externalProjectId),
    normalizePart(input.sfiaProjectId),
    normalizePart(input.periodStart),
    normalizePart(input.adapterContractVersion),
    normalizePart(input.coverageStart),
    normalizePart(input.coverageEndExclusive),
    sorted.join("\n"),
  ].join("|");
  return `batch_${sha256Hex(material)}`;
}

export function buildCorrectionRef(input: {
  readonly kind: "INITIAL" | "CORR";
  readonly providerPayloadDigest?: string;
}): string {
  if (input.kind === "INITIAL") return "INITIAL";
  const digest = normalizePart(input.providerPayloadDigest);
  if (!digest) {
    throw new Error("providerPayloadDigest is required for CORR correctionRef");
  }
  return `CORR|${digest}`;
}

export function buildProviderPayloadDigest(input: {
  readonly provider: string;
  readonly externalProjectId: string;
  readonly projectId: string;
  readonly periodStart: string;
  readonly sourceBucketStart: string;
  readonly sourceBucketEndExclusive: string | null;
  readonly lineItem: string | null;
  readonly currency: string;
  readonly providerAmount: string;
  readonly derivedSourceReference: string;
}): string {
  const material = [
    normalizePart(input.provider),
    normalizePart(input.externalProjectId),
    normalizePart(input.projectId),
    normalizePart(input.periodStart),
    normalizePart(input.sourceBucketStart),
    normalizePart(input.sourceBucketEndExclusive),
    normalizePart(input.lineItem ?? "ALL"),
    normalizePart(input.currency),
    normalizePart(input.providerAmount),
    normalizePart(input.derivedSourceReference),
  ].join("|");
  return sha256Hex(material);
}

/**
 * derivedSourceReference material:
 * provider|externalProjectId|sfiaProjectId|sourceBucketStart|sourceBucketEndExclusive|lineItemOrALL|currency
 */
export function derivedSourceReferenceBelongsToScope(
  derivedSourceReference: string,
  scope: {
    readonly provider: string;
    readonly externalProjectId: string;
    readonly sfiaProjectId: string;
  },
): boolean {
  const parts = derivedSourceReference.split("|");
  if (parts.length < 7) return false;
  return (
    parts[0] === normalizePart(scope.provider) &&
    parts[1] === normalizePart(scope.externalProjectId) &&
    parts[2] === normalizePart(scope.sfiaProjectId)
  );
}

export function isParsableDerivedSourceReference(
  derivedSourceReference: string,
): boolean {
  return derivedSourceReference.split("|").length >= 7;
}

/** Parse bucket bounds from derivedSourceReference; null if unprovable. */
export function parseBucketIntervalFromDerivedSourceReference(
  derivedSourceReference: string,
): {
  readonly sourceBucketStart: string;
  readonly sourceBucketEndExclusive: string;
} | null {
  const parts = derivedSourceReference.split("|");
  if (parts.length < 7) return null;
  const sourceBucketStart = normalizePart(parts[3]);
  const sourceBucketEndExclusive = normalizePart(parts[4]);
  if (!sourceBucketStart || !sourceBucketEndExclusive) return null;
  if (
    Number.isNaN(Date.parse(sourceBucketStart)) ||
    Number.isNaN(Date.parse(sourceBucketEndExclusive))
  ) {
    return null;
  }
  return { sourceBucketStart, sourceBucketEndExclusive };
}

/** bucketStart >= coverageStart AND bucketEndExclusive <= coverageEndExclusive */
export function bucketFullyWithinCoverage(
  bucket: {
    readonly sourceBucketStart: string;
    readonly sourceBucketEndExclusive: string;
  },
  coverage: {
    readonly coverageStart: string;
    readonly coverageEndExclusive: string;
  },
): boolean {
  const bStart = Date.parse(bucket.sourceBucketStart);
  const bEnd = Date.parse(bucket.sourceBucketEndExclusive);
  const cStart = Date.parse(coverage.coverageStart);
  const cEnd = Date.parse(coverage.coverageEndExclusive);
  if (
    Number.isNaN(bStart) ||
    Number.isNaN(bEnd) ||
    Number.isNaN(cStart) ||
    Number.isNaN(cEnd)
  ) {
    return false;
  }
  return bStart >= cStart && bEnd <= cEnd;
}

/** Deterministic correction for an atom absent from a complete snapshot. */
export function buildAbsentFromCompleteSnapshotCorrectionRef(input: {
  readonly derivedSourceReference: string;
  readonly sourceBatchId: string;
  readonly provider: string;
  readonly externalProjectId: string;
  readonly sfiaProjectId: string;
  readonly periodStart: string;
}): string {
  const material = [
    "ABSENT_FROM_COMPLETE_SNAPSHOT",
    normalizePart(input.derivedSourceReference),
    normalizePart(input.sourceBatchId),
    normalizePart(input.provider),
    normalizePart(input.externalProjectId),
    normalizePart(input.sfiaProjectId),
    normalizePart(input.periodStart),
  ].join("|");
  return `ABSENT_FROM_COMPLETE_SNAPSHOT|${sha256Hex(material)}`;
}

```

### `projects/sfia-studio/app/lib/oa/finops/application/providerMoneyBoundary.ts` (CREATED) — content mode FULL
Coverage: COMPLETE. full file (2032 bytes)

```
/**
 * FinOps T2 — provider decimal boundary (never JS Number for money math).
 */

import {
  FINOPS_MONEY_SCALE,
  divideHalfEven,
  formatMoneyString,
  moneyFromMinor,
  normalizeCurrency,
  parseMoneyString,
  type FinOpsMoney,
} from "../domain/money";

function pow10(exp: number): bigint {
  let result = BigInt(1);
  const ten = BigInt(10);
  for (let i = 0; i < exp; i += 1) {
    result = result * ten;
  }
  return result;
}

function parseProviderDecimalToMinor(unsigned: string): bigint {
  const [intPartRaw, fracRaw = ""] = unsigned.split(".");
  const intPart = intPartRaw === "" ? "0" : intPartRaw;
  if (fracRaw.length <= FINOPS_MONEY_SCALE) {
    const fracPadded = fracRaw.padEnd(FINOPS_MONEY_SCALE, "0");
    return BigInt(intPart) * pow10(FINOPS_MONEY_SCALE) + BigInt(fracPadded);
  }
  const highScaleFactor = pow10(fracRaw.length);
  const minorHigh = BigInt(intPart) * highScaleFactor + BigInt(fracRaw);
  const divisor = pow10(fracRaw.length - FINOPS_MONEY_SCALE);
  return divideHalfEven(minorHigh, divisor);
}

/**
 * Parse a provider decimal STRING into canonical Money (scale 8).
 * Values with >8 fractional digits are HALF_EVEN quantized via BigInt.
 */
export function parseProviderMoneyString(
  amount: string,
  currency: string,
): FinOpsMoney {
  const trimmed = amount.trim();
  if (!/^[+-]?\d+(\.\d+)?$/.test(trimmed)) {
    return parseMoneyString(trimmed, currency);
  }
  const negative = trimmed.startsWith("-");
  const unsigned = trimmed.replace(/^[+-]/, "");
  const minorAbs = parseProviderDecimalToMinor(unsigned);
  const amountMinor = negative ? -minorAbs : minorAbs;
  return moneyFromMinor(amountMinor, currency);
}

export function normalizeProviderCurrency(currency: string): string {
  return normalizeCurrency(currency);
}

/** Canonical absolute provider amount at scale 8. */
export function canonicalProviderAmountString(
  amount: string,
  currency: string,
): string {
  const money = parseProviderMoneyString(amount, currency);
  return formatMoneyString(money);
}

```

### `projects/sfia-studio/app/lib/oa/finops/application/reconcileBilledPeriod.ts` (CREATED) — content mode FULL
Coverage: COMPLETE. full file (26610 bytes)

```
/**
 * FinOps T2 — BILLED period reconciliation (PROJECT_PERIOD attribution).
 * Delta-based append-only corrections; no fake executionRunId.
 *
 * Complete snapshot semantics are temporally bounded:
 * completeness=complete means complete ONLY for
 * [coverageStart, coverageEndExclusive) within the economic scope.
 */

import {
  bucketFullyWithinCoverage,
  buildAbsentFromCompleteSnapshotCorrectionRef,
  buildCorrectionRef,
  buildProviderPayloadDigest,
  derivedSourceReferenceBelongsToScope,
  isParsableDerivedSourceReference,
  parseBucketIntervalFromDerivedSourceReference,
} from "./billedPeriodIdentity";
import {
  formatMoneyString,
  moneyFromMinor,
  normalizeCurrency,
  parseMoneyString,
  sumMoney,
} from "../domain/money";
import { computeUtcMonthPeriod } from "../domain/period";
import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type { FinOpsReconciliationPort } from "../ports/finopsReconciliationPort";
import { buildAggregatesFromCostEvents } from "./recomputeAggregates";
import {
  derivePeriodCostEventIdentity,
  derivePeriodReconciliationDedupKey,
} from "./t2Identity";
import type {
  BilledPeriodFact,
  FinOpsCostEvent,
  ReconcileBilledPeriodInput,
  ReconcileBilledPeriodResult,
} from "./types.aggregate";

export type ReconcileBilledPeriodDeps = {
  readonly reconciliation: FinOpsReconciliationPort;
  readonly aggregates: FinOpsAggregatePort;
  readonly nowIso: () => string;
};

const DEFAULT_MAX_FACTS = 100;

class ReconValidationError extends Error {
  readonly code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

function periodStartMatchesOccurredAt(
  periodStart: string,
  occurredAt: string,
): boolean {
  try {
    const period = computeUtcMonthPeriod(occurredAt);
    return period.periodStart.slice(0, 10) === periodStart;
  } catch {
    return false;
  }
}

function parseUtcInstantMs(value: string, label: string): number {
  const trimmed = value.trim();
  if (!trimmed) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      `${label} is required`,
    );
  }
  const ms = Date.parse(trimmed);
  if (Number.isNaN(ms)) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      `${label} is not a parseable UTC instant`,
    );
  }
  return ms;
}

function validateSnapshotCoverage(input: {
  readonly periodStart: string;
  readonly coverageStart: string;
  readonly coverageEndExclusive: string;
}): {
  readonly coverageStart: string;
  readonly coverageEndExclusive: string;
} {
  const coverageStart = input.coverageStart.trim();
  const coverageEndExclusive = input.coverageEndExclusive.trim();
  const cStart = parseUtcInstantMs(coverageStart, "coverageStart");
  const cEnd = parseUtcInstantMs(coverageEndExclusive, "coverageEndExclusive");
  if (!(cStart < cEnd)) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      "coverageStart must be strictly before coverageEndExclusive",
    );
  }

  const periodInstant = `${input.periodStart}T00:00:00.000Z`;
  let period;
  try {
    period = computeUtcMonthPeriod(periodInstant);
  } catch {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      "periodStart is not a valid UTC month anchor",
    );
  }
  const pStart = Date.parse(period.periodStart);
  const pEnd = Date.parse(period.periodEnd);
  // Coverage must lie entirely inside the UTC month (end may equal next month start).
  if (cStart < pStart || cEnd > pEnd) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      "snapshot coverage is not entirely contained in periodStart UTC month",
    );
  }

  return { coverageStart, coverageEndExclusive };
}

function validateProjectPeriodFact(
  fact: BilledPeriodFact,
  input: {
    readonly projectId: string;
    readonly periodStart: string;
    readonly provider: string;
    readonly externalProjectId: string;
    readonly sourceBatchId: string;
    readonly coverageStart: string;
    readonly coverageEndExclusive: string;
  },
): void {
  if (!fact.derivedSourceReference.trim()) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      "derivedSourceReference is required for BILLED period facts",
    );
  }
  if (!isParsableDerivedSourceReference(fact.derivedSourceReference)) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      "derivedSourceReference is not parsable for scope proof",
    );
  }
  if (fact.projectId.trim() !== input.projectId) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      "fact projectId does not match reconciliation projectId",
    );
  }
  if (fact.periodStart.trim() !== input.periodStart) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      "fact periodStart does not match reconciliation periodStart",
    );
  }
  if (fact.provider.trim() !== input.provider) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      "fact provider does not match snapshot provider",
    );
  }
  if (fact.externalProjectId.trim() !== input.externalProjectId) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      "fact externalProjectId does not match snapshot externalProjectId",
    );
  }
  if (fact.sourceBatchId.trim() !== input.sourceBatchId) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      "fact sourceBatchId does not match input.sourceBatchId",
    );
  }
  if (
    !derivedSourceReferenceBelongsToScope(fact.derivedSourceReference, {
      provider: input.provider,
      externalProjectId: input.externalProjectId,
      sfiaProjectId: input.projectId,
    })
  ) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      "derivedSourceReference does not belong to reconciliation economic scope",
    );
  }
  if (!periodStartMatchesOccurredAt(input.periodStart, fact.sourceBucketStart)) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      "fact sourceBucketStart does not belong to periodStart",
    );
  }
  parseUtcInstantMs(fact.sourceBucketStart, "fact.sourceBucketStart");
  if (
    fact.sourceBucketEndExclusive === null ||
    !fact.sourceBucketEndExclusive.trim()
  ) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      "fact sourceBucketEndExclusive is required to prove coverage containment",
    );
  }
  parseUtcInstantMs(
    fact.sourceBucketEndExclusive,
    "fact.sourceBucketEndExclusive",
  );
  if (
    !bucketFullyWithinCoverage(
      {
        sourceBucketStart: fact.sourceBucketStart.trim(),
        sourceBucketEndExclusive: fact.sourceBucketEndExclusive.trim(),
      },
      {
        coverageStart: input.coverageStart,
        coverageEndExclusive: input.coverageEndExclusive,
      },
    )
  ) {
    throw new ReconValidationError(
      "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      "fact bucket is outside declared snapshot coverage",
    );
  }
}

function sumLedgerForAtom(
  events: ReadonlyArray<FinOpsCostEvent>,
  input: {
    readonly projectId: string;
    readonly periodStart: string;
    readonly currency: string;
    readonly derivedSourceReference: string;
  },
): bigint {
  const matching = events.filter(
    (e) =>
      e.projectId === input.projectId &&
      e.periodStart === input.periodStart &&
      e.currency === input.currency &&
      e.derivedSourceReference === input.derivedSourceReference &&
      e.sourceOfTruth === "BILLED" &&
      e.attributionScope === "PROJECT_PERIOD" &&
      e.amount !== null,
  );
  if (matching.length === 0) return BigInt(0);
  return sumMoney(
    input.currency,
    matching.map((e) => parseMoneyString(e.amount!, input.currency)),
  ).amountMinor;
}

function currencyFromDerivedSourceReference(
  derivedSourceReference: string,
): string {
  const parts = derivedSourceReference.split("|");
  return normalizeCurrency(parts[parts.length - 1]!);
}

function collectActiveScopedAtoms(
  ledger: ReadonlyArray<FinOpsCostEvent>,
  scope: {
    readonly projectId: string;
    readonly periodStart: string;
    readonly provider: string;
    readonly externalProjectId: string;
  },
): ReadonlyArray<{
  readonly derivedSourceReference: string;
  readonly currency: string;
  readonly cumulativeMinor: bigint;
  readonly occurredAt: string;
}> {
  const byRef = new Map<
    string,
    { currency: string; occurredAt: string; events: FinOpsCostEvent[] }
  >();

  for (const event of ledger) {
    if (
      event.projectId !== scope.projectId ||
      event.periodStart !== scope.periodStart ||
      event.sourceOfTruth !== "BILLED" ||
      event.attributionScope !== "PROJECT_PERIOD" ||
      event.amount === null
    ) {
      continue;
    }
    const ref = event.derivedSourceReference;
    if (!ref || !ref.trim()) {
      throw new ReconValidationError(
        "FINOPS_RECON_ATOM_SCOPE_UNPROVABLE",
        "PROJECT_PERIOD BILLED event missing derivedSourceReference",
      );
    }
    if (!isParsableDerivedSourceReference(ref)) {
      throw new ReconValidationError(
        "FINOPS_RECON_ATOM_SCOPE_UNPROVABLE",
        "PROJECT_PERIOD BILLED event has unparsable derivedSourceReference",
      );
    }
    if (
      !derivedSourceReferenceBelongsToScope(ref, {
        provider: scope.provider,
        externalProjectId: scope.externalProjectId,
        sfiaProjectId: scope.projectId,
      })
    ) {
      continue;
    }
    const existing = byRef.get(ref);
    if (!existing) {
      byRef.set(ref, {
        currency: normalizeCurrency(event.currency),
        occurredAt: event.occurredAt,
        events: [event],
      });
    } else {
      existing.events.push(event);
    }
  }

  const active: Array<{
    derivedSourceReference: string;
    currency: string;
    cumulativeMinor: bigint;
    occurredAt: string;
  }> = [];

  for (const [derivedSourceReference, bucket] of byRef) {
    const cumulativeMinor = sumMoney(
      bucket.currency,
      bucket.events.map((e) => parseMoneyString(e.amount!, bucket.currency)),
    ).amountMinor;
    if (cumulativeMinor === BigInt(0)) continue;
    active.push({
      derivedSourceReference,
      currency: bucket.currency,
      cumulativeMinor,
      occurredAt: bucket.occurredAt,
    });
  }
  return active;
}

/**
 * Before any economic write: classify active atoms for complete-snapshot tombstones.
 * Unparsable same-scope intervals fail closed (no partial mutation).
 */
function planMissingAtomCorrections(input: {
  readonly ledger: ReadonlyArray<FinOpsCostEvent>;
  readonly projectId: string;
  readonly periodStart: string;
  readonly provider: string;
  readonly externalProjectId: string;
  readonly coverageStart: string;
  readonly coverageEndExclusive: string;
  readonly presentRefs: ReadonlySet<string>;
}): ReadonlyArray<{
  readonly derivedSourceReference: string;
  readonly currency: string;
  readonly occurredAt: string;
}> {
  const active = collectActiveScopedAtoms(input.ledger, {
    projectId: input.projectId,
    periodStart: input.periodStart,
    provider: input.provider,
    externalProjectId: input.externalProjectId,
  });

  const toCorrect: Array<{
    derivedSourceReference: string;
    currency: string;
    occurredAt: string;
  }> = [];

  for (const atom of active) {
    if (input.presentRefs.has(atom.derivedSourceReference)) continue;
    const interval = parseBucketIntervalFromDerivedSourceReference(
      atom.derivedSourceReference,
    );
    if (!interval) {
      throw new ReconValidationError(
        "FINOPS_RECON_ATOM_COVERAGE_UNPROVABLE",
        "active atom bucket interval is not provable for coverage-safe tombstone",
      );
    }
    if (
      !bucketFullyWithinCoverage(interval, {
        coverageStart: input.coverageStart,
        coverageEndExclusive: input.coverageEndExclusive,
      })
    ) {
      // Outside coverage — preserve economically; never tombstone.
      continue;
    }
    toCorrect.push({
      derivedSourceReference: atom.derivedSourceReference,
      currency: atom.currency,
      occurredAt: atom.occurredAt,
    });
  }
  return toCorrect;
}

async function appendDeltaEvent(input: {
  readonly ops: {
    readonly insertCostEvent: FinOpsReconciliationPort["insertCostEvent"];
  };
  readonly ledger: FinOpsCostEvent[];
  readonly projectId: string;
  readonly periodStart: string;
  readonly sourceBatchId: string;
  readonly provider: string;
  readonly derivedSourceReference: string;
  readonly currency: string;
  readonly deltaAmount: string;
  readonly correctionRef: string;
  readonly occurredAt: string;
}): Promise<"created" | "duplicate"> {
  const identity = derivePeriodCostEventIdentity({
    projectId: input.projectId,
    periodStart: input.periodStart,
    provider: input.provider,
    derivedSourceReference: input.derivedSourceReference,
    correctionRef: input.correctionRef,
    sourceBatchId: input.sourceBatchId,
    amount: input.deltaAmount,
    currency: input.currency,
  });

  const event: FinOpsCostEvent = {
    costEventId: identity.costEventId,
    dedupKey: identity.dedupKey,
    projectId: input.projectId,
    attributionScope: "PROJECT_PERIOD",
    executionRunId: null,
    derivedSourceReference: input.derivedSourceReference,
    usageEventId: null,
    periodStart: input.periodStart,
    currency: input.currency,
    amount: input.deltaAmount,
    evidenceClass: "billed",
    sourceOfTruth: "BILLED",
    estimationStatus: "available",
    correctionRef: input.correctionRef,
    catalogVersion: null,
    provider: input.provider,
    model: null,
    unit: null,
    billingQuantum: null,
    usageQuantity: null,
    occurredAt: input.occurredAt,
  };

  const result = await input.ops.insertCostEvent(event);
  if (result.outcome === "created") {
    input.ledger.push(event);
    return "created";
  }
  if (result.outcome === "duplicate") {
    return "duplicate";
  }
  if (result.outcome === "conflict") {
    throw new Error(result.message);
  }
  throw new Error(result.message);
}

export async function reconcileBilledPeriod(
  deps: ReconcileBilledPeriodDeps,
  input: ReconcileBilledPeriodInput,
): Promise<ReconcileBilledPeriodResult> {
  const projectId = input.projectId.trim();
  const periodStart = input.periodStart.trim();
  const sourceBatchId = input.sourceBatchId.trim();
  if (!projectId || !periodStart || !sourceBatchId) {
    return {
      outcome: "failed",
      reconciliationId: null,
      code: "FINOPS_RECON_INVALID_INPUT",
      message: "projectId, periodStart, and sourceBatchId are required",
      finopsSideOnly: true,
    };
  }

  const snapshot = input.snapshot;
  if (
    !snapshot ||
    (snapshot.completeness !== "complete" &&
      snapshot.completeness !== "incomplete") ||
    !snapshot.provider?.trim() ||
    !snapshot.externalProjectId?.trim()
  ) {
    return {
      outcome: "failed",
      reconciliationId: null,
      code: "FINOPS_RECON_INVALID_INPUT",
      message:
        "snapshot.completeness, snapshot.provider, and snapshot.externalProjectId are required",
      finopsSideOnly: true,
    };
  }

  let coverageStart: string;
  let coverageEndExclusive: string;
  try {
    const coverage = validateSnapshotCoverage({
      periodStart,
      coverageStart: snapshot.coverageStart ?? "",
      coverageEndExclusive: snapshot.coverageEndExclusive ?? "",
    });
    coverageStart = coverage.coverageStart;
    coverageEndExclusive = coverage.coverageEndExclusive;
  } catch (error) {
    if (error instanceof ReconValidationError) {
      return {
        outcome: "failed",
        reconciliationId: null,
        code: error.code,
        message: error.message,
        finopsSideOnly: true,
      };
    }
    throw error;
  }

  const provider = snapshot.provider.trim();
  const externalProjectId = snapshot.externalProjectId.trim();

  try {
    for (const fact of input.facts) {
      validateProjectPeriodFact(fact, {
        projectId,
        periodStart,
        provider,
        externalProjectId,
        sourceBatchId,
        coverageStart,
        coverageEndExclusive,
      });
      // Money parse fail-closed before any write.
      parseMoneyString(fact.providerAmount, normalizeCurrency(fact.currency));
    }
  } catch (error) {
    if (error instanceof ReconValidationError) {
      return {
        outcome: "failed",
        reconciliationId: null,
        code: error.code,
        message: error.message,
        finopsSideOnly: true,
      };
    }
    return {
      outcome: "failed",
      reconciliationId: null,
      code: "FINOPS_RECON_INVALID_SNAPSHOT_COVERAGE",
      message:
        error instanceof Error ? error.message : "fact prevalidation failed",
      finopsSideOnly: true,
    };
  }

  const { reconciliationId, dedupKey } = derivePeriodReconciliationDedupKey({
    projectId,
    periodStart,
    sourceBatchId,
  });

  return deps.reconciliation.withExclusiveProjectPeriodReconciliation(
    { projectId, periodStart },
    async (ops) => {
      const existing = await ops.findReconciliationByDedup(dedupKey);
      if (existing && existing.status === "succeeded") {
        const aggregates = await deps.aggregates.listAggregatesForProjectPeriod({
          projectId,
          periodStart,
        });
        return {
          outcome: "succeeded",
          reconciliationId: existing.reconciliationId,
          processedCount: existing.processedCount,
          createdCount: 0,
          duplicateCount: existing.processedCount,
          aggregates,
          idempotentReplay: true,
        };
      }

      const maxFacts = input.maxFacts ?? DEFAULT_MAX_FACTS;
      if (
        typeof maxFacts !== "number" ||
        !Number.isSafeInteger(maxFacts) ||
        maxFacts <= 0
      ) {
        return {
          outcome: "failed",
          reconciliationId: null,
          code: "FINOPS_RECON_INVALID_BATCH_BOUND",
          message: "maxFacts must be a positive safe integer",
          finopsSideOnly: true,
        };
      }

      if (input.facts.length > maxFacts) {
        return {
          outcome: "failed",
          reconciliationId: null,
          code: "FINOPS_RECON_BATCH_TOO_LARGE",
          message: `facts exceed bounded batch maxFacts=${maxFacts}`,
          finopsSideOnly: true,
        };
      }

      // Read ledger + plan missing-atom corrections BEFORE any economic write.
      let ledger: FinOpsCostEvent[];
      let missingPlan: ReadonlyArray<{
        readonly derivedSourceReference: string;
        readonly currency: string;
        readonly occurredAt: string;
      }> = [];
      const presentRefs = new Set(
        input.facts.map((f) => f.derivedSourceReference),
      );
      try {
        ledger = [
          ...(await ops.listCostEventsForProjectPeriod({
            projectId,
            periodStart,
          })),
        ];
        if (snapshot.completeness === "complete") {
          missingPlan = planMissingAtomCorrections({
            ledger,
            projectId,
            periodStart,
            provider,
            externalProjectId,
            coverageStart,
            coverageEndExclusive,
            presentRefs,
          });
        }
      } catch (error) {
        const code =
          error instanceof ReconValidationError
            ? error.code
            : "FINOPS_RECON_FAILED";
        const message =
          error instanceof Error
            ? error.message
            : "billed period prevalidation failed";
        return {
          outcome: "failed",
          reconciliationId: null,
          code,
          message,
          finopsSideOnly: true,
        };
      }

      const insert = await ops.insertReconciliationRecord({
        reconciliationId,
        dedupKey,
        projectId,
        periodStart,
        sourceBatchId,
        status: "failed",
        processedCount: 0,
        errorCode: null,
        errorMessage: null,
        completedAt: null,
      });

      if (insert.outcome === "duplicate" && insert.existing.status === "succeeded") {
        const aggregates = await deps.aggregates.listAggregatesForProjectPeriod({
          projectId,
          periodStart,
        });
        return {
          outcome: "succeeded",
          reconciliationId: insert.existing.reconciliationId,
          processedCount: insert.existing.processedCount,
          createdCount: 0,
          duplicateCount: insert.existing.processedCount,
          aggregates,
          idempotentReplay: true,
        };
      }

      if (insert.outcome === "failed") {
        return {
          outcome: "failed",
          reconciliationId,
          code: "FINOPS_RECON_PERSIST_FAILED",
          message: insert.message,
          finopsSideOnly: true,
        };
      }

      let createdCount = 0;
      let duplicateCount = 0;
      let processedCount = 0;

      try {
        for (const fact of input.facts) {
          const currency = normalizeCurrency(fact.currency);
          const providerAmount = parseMoneyString(fact.providerAmount, currency);

          const cumulative = sumLedgerForAtom(ledger, {
            projectId,
            periodStart,
            currency,
            derivedSourceReference: fact.derivedSourceReference,
          });
          const deltaMinor = providerAmount.amountMinor - cumulative;
          if (deltaMinor === BigInt(0)) {
            duplicateCount += 1;
            processedCount += 1;
            continue;
          }

          const deltaAmount = formatMoneyString(
            moneyFromMinor(deltaMinor, currency),
          );
          const correctionRef =
            cumulative === BigInt(0)
              ? buildCorrectionRef({ kind: "INITIAL" })
              : buildCorrectionRef({
                  kind: "CORR",
                  providerPayloadDigest: buildProviderPayloadDigest({
                    provider: fact.provider,
                    externalProjectId: fact.externalProjectId,
                    projectId: fact.projectId,
                    periodStart,
                    sourceBucketStart: fact.sourceBucketStart,
                    sourceBucketEndExclusive: fact.sourceBucketEndExclusive,
                    lineItem: fact.lineItem,
                    currency,
                    providerAmount: fact.providerAmount,
                    derivedSourceReference: fact.derivedSourceReference,
                  }),
                });

          const insertOutcome = await appendDeltaEvent({
            ops,
            ledger,
            projectId,
            periodStart,
            sourceBatchId,
            provider,
            derivedSourceReference: fact.derivedSourceReference,
            currency,
            deltaAmount,
            correctionRef,
            occurredAt: fact.sourceBucketStart,
          });
          if (insertOutcome === "created") {
            createdCount += 1;
          } else {
            duplicateCount += 1;
          }
          processedCount += 1;
        }

        for (const atom of missingPlan) {
          const currency =
            atom.currency ||
            currencyFromDerivedSourceReference(atom.derivedSourceReference);
          const cumulative = sumLedgerForAtom(ledger, {
            projectId,
            periodStart,
            currency,
            derivedSourceReference: atom.derivedSourceReference,
          });
          if (cumulative === BigInt(0)) continue;

          const deltaMinor = BigInt(0) - cumulative;
          const deltaAmount = formatMoneyString(
            moneyFromMinor(deltaMinor, currency),
          );
          const correctionRef = buildAbsentFromCompleteSnapshotCorrectionRef({
            derivedSourceReference: atom.derivedSourceReference,
            sourceBatchId,
            provider,
            externalProjectId,
            sfiaProjectId: projectId,
            periodStart,
          });

          const insertOutcome = await appendDeltaEvent({
            ops,
            ledger,
            projectId,
            periodStart,
            sourceBatchId,
            provider,
            derivedSourceReference: atom.derivedSourceReference,
            currency,
            deltaAmount,
            correctionRef,
            occurredAt: atom.occurredAt,
          });
          if (insertOutcome === "created") {
            createdCount += 1;
          } else {
            duplicateCount += 1;
          }
          processedCount += 1;
        }

        // Rebuild from the in-session ledger (visible uncommitted inserts).
        const existingAggregates =
          await deps.aggregates.listAggregatesForProjectPeriod({
            projectId,
            periodStart,
          });
        const previousVersions = new Map(
          existingAggregates.map((row) => [row.currency, row.rebuildVersion]),
        );
        const rebuilt = buildAggregatesFromCostEvents({
          projectId,
          periodStart,
          events: ledger,
          rebuiltAt: deps.nowIso(),
          previousVersions,
        });
        const aggregates =
          await deps.aggregates.withExclusiveProjectPeriodRebuild(
            { projectId, periodStart },
            async (aggregateOps) => {
              await aggregateOps.replaceAggregates(rebuilt);
              return rebuilt;
            },
          );

        await ops.completeReconciliationRecord({
          reconciliationId,
          status: "succeeded",
          processedCount,
          errorCode: null,
          errorMessage: null,
          completedAt: deps.nowIso(),
        });

        return {
          outcome: "succeeded",
          reconciliationId,
          processedCount,
          createdCount,
          duplicateCount,
          aggregates,
          idempotentReplay: false,
        };
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "billed period reconciliation failed";
        await ops.completeReconciliationRecord({
          reconciliationId,
          status: "failed",
          processedCount,
          errorCode: "FINOPS_RECON_FAILED",
          errorMessage: message,
          completedAt: deps.nowIso(),
        });
        return {
          outcome: "failed",
          reconciliationId,
          code: "FINOPS_RECON_FAILED",
          message,
          finopsSideOnly: true,
        };
      }
    },
  );
}

```

### `projects/sfia-studio/app/lib/oa/finops/application/reconcileProjectPeriod.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (8345 bytes)

```
/**
 * FinOps T2 — explicit reconcileProjectPeriod (on-demand + bounded batch).
 * estimated → observed → billed via append-only correction cost events.
 * No cron / always-on polling. Failures are FinOps-side only.
 *
 * After the batch inserts, A1 is rebuilt ONCE for the full project/period
 * (all currencies) — never per-currency.
 */

import { normalizeCurrency, parseMoneyString } from "../domain/money";
import { computeUtcMonthPeriod } from "../domain/period";
import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type { FinOpsReconciliationPort } from "../ports/finopsReconciliationPort";
import {
  recomputeAggregates,
  type RecomputeAggregatesDeps,
} from "./recomputeAggregates";
import {
  deriveCostEventIdentity,
  deriveReconciliationDedupKey,
} from "./t2Identity";
import type {
  FinOpsCostEvent,
  ReconcileProjectPeriodInput,
  ReconcileProjectPeriodResult,
} from "./types.aggregate";

export type ReconcileProjectPeriodDeps = {
  readonly reconciliation: FinOpsReconciliationPort;
  readonly aggregates: FinOpsAggregatePort;
  readonly nowIso: () => string;
};

const DEFAULT_MAX_FACTS = 100;

function periodStartMatchesOccurredAt(
  periodStart: string,
  occurredAt: string,
): boolean {
  try {
    const period = computeUtcMonthPeriod(occurredAt);
    return period.periodStart.slice(0, 10) === periodStart;
  } catch {
    return false;
  }
}

export async function reconcileProjectPeriod(
  deps: ReconcileProjectPeriodDeps,
  input: ReconcileProjectPeriodInput,
): Promise<ReconcileProjectPeriodResult> {
  const projectId = input.projectId.trim();
  const periodStart = input.periodStart.trim();
  const sourceBatchId = input.sourceBatchId.trim();
  if (!projectId || !periodStart || !sourceBatchId) {
    return {
      outcome: "failed",
      reconciliationId: null,
      code: "FINOPS_RECON_INVALID_INPUT",
      message: "projectId, periodStart, and sourceBatchId are required",
      finopsSideOnly: true,
    };
  }

  const { reconciliationId, dedupKey } = deriveReconciliationDedupKey({
    projectId,
    periodStart,
    sourceBatchId,
  });

  const existing = await deps.reconciliation.findReconciliationByDedup(dedupKey);
  if (existing && existing.status === "succeeded") {
    const aggregates = await deps.aggregates.listAggregatesForProjectPeriod({
      projectId,
      periodStart,
    });
    return {
      outcome: "succeeded",
      reconciliationId: existing.reconciliationId,
      processedCount: existing.processedCount,
      createdCount: 0,
      duplicateCount: existing.processedCount,
      aggregates,
      idempotentReplay: true,
    };
  }

  const insert = await deps.reconciliation.insertReconciliationRecord({
    reconciliationId,
    dedupKey,
    projectId,
    periodStart,
    sourceBatchId,
    status: "failed",
    processedCount: 0,
    errorCode: null,
    errorMessage: null,
    completedAt: null,
  });

  if (insert.outcome === "duplicate" && insert.existing.status === "succeeded") {
    const aggregates = await deps.aggregates.listAggregatesForProjectPeriod({
      projectId,
      periodStart,
    });
    return {
      outcome: "succeeded",
      reconciliationId: insert.existing.reconciliationId,
      processedCount: insert.existing.processedCount,
      createdCount: 0,
      duplicateCount: insert.existing.processedCount,
      aggregates,
      idempotentReplay: true,
    };
  }

  if (insert.outcome === "failed") {
    return {
      outcome: "failed",
      reconciliationId,
      code: "FINOPS_RECON_PERSIST_FAILED",
      message: insert.message,
      finopsSideOnly: true,
    };
  }

  const maxFacts = input.maxFacts ?? DEFAULT_MAX_FACTS;
  if (
    typeof maxFacts !== "number" ||
    !Number.isSafeInteger(maxFacts) ||
    maxFacts <= 0
  ) {
    await deps.reconciliation.completeReconciliationRecord({
      reconciliationId,
      status: "failed",
      processedCount: 0,
      errorCode: "FINOPS_RECON_INVALID_BATCH_BOUND",
      errorMessage: "maxFacts must be a positive safe integer",
      completedAt: deps.nowIso(),
    });
    return {
      outcome: "failed",
      reconciliationId,
      code: "FINOPS_RECON_INVALID_BATCH_BOUND",
      message: "maxFacts must be a positive safe integer",
      finopsSideOnly: true,
    };
  }

  if (input.facts.length > maxFacts) {
    await deps.reconciliation.completeReconciliationRecord({
      reconciliationId,
      status: "failed",
      processedCount: 0,
      errorCode: "FINOPS_RECON_BATCH_TOO_LARGE",
      errorMessage: `facts exceed bounded batch maxFacts=${maxFacts}`,
      completedAt: deps.nowIso(),
    });
    return {
      outcome: "failed",
      reconciliationId,
      code: "FINOPS_RECON_BATCH_TOO_LARGE",
      message: `facts exceed bounded batch maxFacts=${maxFacts}`,
      finopsSideOnly: true,
    };
  }

  let createdCount = 0;
  let duplicateCount = 0;
  let processedCount = 0;

  try {
    for (const fact of input.facts) {
      if (!fact.correctionRef.trim()) {
        throw new Error("correctionRef is required for reconciliation facts");
      }
      if (!fact.executionRunId.trim()) {
        throw new Error("executionRunId is required for EXECUTION_RUN reconciliation facts");
      }
      if (!periodStartMatchesOccurredAt(periodStart, fact.occurredAt)) {
        throw new Error("fact occurredAt does not belong to periodStart");
      }
      const currency = normalizeCurrency(fact.currency);
      // Validate canonical Money (rejects float leakage / over-scale).
      parseMoneyString(fact.amount, currency);

      const identity = deriveCostEventIdentity({
        projectId,
        executionRunId: fact.executionRunId,
        evidenceClass: fact.evidenceClass,
        correctionRef: fact.correctionRef,
        sourceBatchId,
        amount: fact.amount,
        currency,
      });

      const event: FinOpsCostEvent = {
        costEventId: identity.costEventId,
        dedupKey: identity.dedupKey,
        projectId,
        attributionScope: "EXECUTION_RUN",
        executionRunId: fact.executionRunId,
        derivedSourceReference: null,
        usageEventId: fact.usageEventId,
        periodStart,
        currency,
        amount: fact.amount,
        evidenceClass: fact.evidenceClass,
        sourceOfTruth: fact.sourceOfTruth,
        estimationStatus: "available",
        correctionRef: fact.correctionRef,
        catalogVersion: null,
        provider: fact.provider,
        model: fact.model,
        unit: null,
        billingQuantum: null,
        usageQuantity: null,
        occurredAt: fact.occurredAt,
      };

      const result = await deps.reconciliation.insertCostEvent(event);
      if (result.outcome === "created") createdCount += 1;
      else if (result.outcome === "duplicate") duplicateCount += 1;
      else if (result.outcome === "conflict") {
        throw new Error(result.message);
      } else {
        throw new Error(result.message);
      }
      processedCount += 1;
    }

    const recomputeDeps: RecomputeAggregatesDeps = {
      aggregates: deps.aggregates,
      nowIso: deps.nowIso,
    };

    // ONE full project/period rebuild for ALL currencies (no per-currency path).
    const recomputed = await recomputeAggregates(recomputeDeps, {
      projectId,
      periodStart,
    });
    if (recomputed.outcome === "failed") {
      throw new Error(recomputed.message);
    }

    await deps.reconciliation.completeReconciliationRecord({
      reconciliationId,
      status: "succeeded",
      processedCount,
      errorCode: null,
      errorMessage: null,
      completedAt: deps.nowIso(),
    });

    return {
      outcome: "succeeded",
      reconciliationId,
      processedCount,
      createdCount,
      duplicateCount,
      aggregates: recomputed.aggregates,
      idempotentReplay: false,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "reconciliation failed";
    await deps.reconciliation.completeReconciliationRecord({
      reconciliationId,
      status: "failed",
      processedCount,
      errorCode: "FINOPS_RECON_FAILED",
      errorMessage: message,
      completedAt: deps.nowIso(),
    });
    return {
      outcome: "failed",
      reconciliationId,
      code: "FINOPS_RECON_FAILED",
      message,
      finopsSideOnly: true,
    };
  }
}

```

### `projects/sfia-studio/app/lib/oa/finops/application/refreshEnforcementAfterT2.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (5513 bytes)

```
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
  reconcileBilledPeriod,
  type ReconcileBilledPeriodDeps,
} from "./reconcileBilledPeriod";
import {
  rebuildEnforcementProjection,
  type RebuildEnforcementProjectionDeps,
} from "./rebuildEnforcementProjection";
import type {
  ReconcileBilledPeriodInput,
  ReconcileBilledPeriodResult,
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

export type RefreshAfterBilledReconcileResult = {
  readonly t2: ReconcileBilledPeriodResult;
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

/**
 * Wrapper: reconcileBilledPeriod → on success → rebuildEnforcementProjection once.
 */
export async function reconcileBilledPeriodThenRefreshEnforcementProjection(
  deps: RefreshEnforcementAfterT2Deps,
  input: ReconcileBilledPeriodInput,
): Promise<RefreshAfterBilledReconcileResult> {
  const reconDeps: ReconcileBilledPeriodDeps = {
    reconciliation: deps.reconciliation,
    aggregates: deps.aggregates,
    nowIso: deps.nowIso,
  };
  const t2 = await reconcileBilledPeriod(reconDeps, input);
  if (t2.outcome !== "succeeded") {
    return { t2, t4Refresh: null, t4RefreshAttempted: false };
  }
  const t4Refresh = await safeRebuild(projectionDeps(deps), {
    projectId: input.projectId,
    periodStart: input.periodStart,
  });
  return { t2, t4Refresh, t4RefreshAttempted: true };
}

```

### `projects/sfia-studio/app/lib/oa/finops/application/t2Identity.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (3485 bytes)

```
/**
 * FinOps T2 — deterministic cost-event / reconciliation identity (SHA-256).
 */

import { createHash } from "node:crypto";
import {
  FINOPS_T2_IDENTITY_CONTRACT_VERSION,
  FINOPS_T2_PERIOD_IDENTITY_CONTRACT_VERSION,
} from "./types.aggregate";

function normalizePart(value: string | null | undefined): string {
  if (value === null || value === undefined) return "";
  return value.trim();
}

function sha256Hex(material: string): string {
  return createHash("sha256").update(material, "utf8").digest("hex");
}

export function deriveCostEventIdentity(input: {
  readonly projectId: string;
  readonly executionRunId: string;
  readonly evidenceClass: string;
  readonly correctionRef: string | null;
  readonly sourceBatchId?: string | null;
  readonly amount: string | null;
  readonly currency: string;
}): { readonly costEventId: string; readonly dedupKey: string } {
  const material = [
    FINOPS_T2_IDENTITY_CONTRACT_VERSION,
    "cost",
    normalizePart(input.projectId),
    normalizePart(input.executionRunId),
    normalizePart(input.evidenceClass),
    normalizePart(input.correctionRef),
    normalizePart(input.sourceBatchId),
    normalizePart(input.amount),
    normalizePart(input.currency),
  ].join("|");
  const digest = sha256Hex(material);
  return {
    costEventId: `cost_${digest}`,
    dedupKey: `cost_dedup_${digest}`,
  };
}

export function deriveReconciliationDedupKey(input: {
  readonly projectId: string;
  readonly periodStart: string;
  readonly sourceBatchId: string;
}): { readonly reconciliationId: string; readonly dedupKey: string } {
  const material = [
    FINOPS_T2_IDENTITY_CONTRACT_VERSION,
    "recon",
    normalizePart(input.projectId),
    normalizePart(input.periodStart),
    normalizePart(input.sourceBatchId),
  ].join("|");
  const digest = sha256Hex(material);
  return {
    reconciliationId: `recon_${digest}`,
    dedupKey: `recon_dedup_${digest}`,
  };
}

export function derivePeriodCostEventIdentity(input: {
  readonly projectId: string;
  readonly periodStart: string;
  readonly provider: string;
  readonly derivedSourceReference: string;
  readonly correctionRef: string;
  readonly sourceBatchId: string;
  readonly amount: string;
  readonly currency: string;
}): { readonly costEventId: string; readonly dedupKey: string } {
  const material = [
    FINOPS_T2_PERIOD_IDENTITY_CONTRACT_VERSION,
    "cost",
    "PROJECT_PERIOD",
    normalizePart(input.projectId),
    normalizePart(input.periodStart),
    normalizePart(input.provider),
    "BILLED",
    "billed",
    normalizePart(input.derivedSourceReference),
    normalizePart(input.correctionRef),
    normalizePart(input.sourceBatchId),
    normalizePart(input.amount),
    normalizePart(input.currency),
  ].join("|");
  const digest = sha256Hex(material);
  return {
    costEventId: `cost_${digest}`,
    dedupKey: `cost_dedup_${digest}`,
  };
}

export function derivePeriodReconciliationDedupKey(input: {
  readonly projectId: string;
  readonly periodStart: string;
  readonly sourceBatchId: string;
}): { readonly reconciliationId: string; readonly dedupKey: string } {
  const material = [
    FINOPS_T2_PERIOD_IDENTITY_CONTRACT_VERSION,
    "recon",
    "PROJECT_PERIOD",
    normalizePart(input.projectId),
    normalizePart(input.periodStart),
    normalizePart(input.sourceBatchId),
  ].join("|");
  const digest = sha256Hex(material);
  return {
    reconciliationId: `recon_${digest}`,
    dedupKey: `recon_dedup_${digest}`,
  };
}

```

### `projects/sfia-studio/app/lib/oa/finops/application/types.aggregate.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (6926 bytes)

```
/**
 * FinOps T2 — aggregate / cost-event / reconciliation application types.
 * Money amounts use canonical decimal strings (numeric(20,8) boundary).
 */

import type { FinOpsCostEvidenceClass, FinOpsSourceOfTruth } from "../domain/types";

export const FINOPS_T2_IDENTITY_CONTRACT_VERSION = "t2-v1" as const;
export const FINOPS_T2_PERIOD_IDENTITY_CONTRACT_VERSION =
  "t2-v2-period" as const;

export type FinOpsAttributionScope = "EXECUTION_RUN" | "PROJECT_PERIOD";

export type FinOpsEstimationStatus =
  | "available"
  | "unavailable"
  | "unknown";

export type FinOpsAggregateKey = {
  readonly projectId: string;
  /** UTC month start YYYY-MM-DD */
  readonly periodStart: string;
  readonly currency: string;
};

export type FinOpsProjectPeriodAggregate = {
  readonly projectId: string;
  readonly periodStart: string;
  readonly currency: string;
  readonly estimatedAmount: string;
  readonly observedAmount: string;
  readonly billedAmount: string;
  readonly unknownAmount: string;
  readonly inputTokensSum: number | null;
  readonly outputTokensSum: number | null;
  readonly totalTokensSum: number | null;
  readonly costEventCount: number;
  readonly unavailableEstimationCount: number;
  readonly rebuildVersion: number;
  readonly rebuiltAt: string;
};

export type FinOpsCostEvent = {
  readonly costEventId: string;
  readonly dedupKey: string;
  readonly projectId: string;
  readonly attributionScope: FinOpsAttributionScope;
  readonly executionRunId: string | null;
  readonly derivedSourceReference: string | null;
  readonly usageEventId: string | null;
  readonly periodStart: string;
  readonly currency: string;
  /** Canonical numeric(20,8) string when amount is known; null when unavailable. */
  readonly amount: string | null;
  readonly evidenceClass: FinOpsCostEvidenceClass;
  readonly sourceOfTruth: FinOpsSourceOfTruth;
  readonly estimationStatus: FinOpsEstimationStatus;
  readonly correctionRef: string | null;
  readonly catalogVersion: string | null;
  readonly provider: string;
  readonly model: string | null;
  readonly unit: string | null;
  readonly billingQuantum: string | null;
  readonly usageQuantity: string | null;
  readonly occurredAt: string;
};

export type FinOpsCostEventInsertResult =
  | { readonly outcome: "created"; readonly costEventId: string }
  | { readonly outcome: "duplicate"; readonly costEventId: string }
  | {
      readonly outcome: "conflict";
      readonly code: "FINOPS_COST_DEDUP_CONFLICT";
      readonly message: string;
    }
  | {
      readonly outcome: "failed";
      readonly code: "FINOPS_COST_PERSIST_FAILED";
      readonly message: string;
      readonly retryable: boolean;
    };

export type FinOpsReconciliationStatus = "succeeded" | "failed";

export type FinOpsReconciliationRecord = {
  readonly reconciliationId: string;
  readonly dedupKey: string;
  readonly projectId: string;
  readonly periodStart: string;
  readonly sourceBatchId: string;
  readonly status: FinOpsReconciliationStatus;
  readonly processedCount: number;
  readonly errorCode: string | null;
  readonly errorMessage: string | null;
  readonly completedAt: string | null;
};

export type ReconcileFact = {
  readonly executionRunId: string;
  readonly usageEventId: string | null;
  readonly evidenceClass: "observed" | "billed";
  readonly sourceOfTruth: "PROVIDER_OBSERVED" | "BILLED";
  /** Canonical decimal string — already quantized Money (scale 8). */
  readonly amount: string;
  readonly currency: string;
  readonly correctionRef: string;
  readonly provider: string;
  readonly model: string | null;
  readonly occurredAt: string;
};

export type ReconcileProjectPeriodInput = {
  readonly projectId: string;
  /** UTC month start YYYY-MM-DD */
  readonly periodStart: string;
  readonly sourceBatchId: string;
  readonly facts: ReadonlyArray<ReconcileFact>;
  /** Soft bound on facts processed in one call (on-demand bounded batch). */
  readonly maxFacts?: number;
};

export type BilledPeriodFact = {
  readonly projectId: string;
  readonly externalProjectId: string;
  readonly periodStart: string;
  readonly provider: string;
  readonly sourceBucketStart: string; // ISO
  readonly sourceBucketEndExclusive: string | null;
  readonly lineItem: string | null;
  readonly providerAmount: string; // absolute canonical Money scale-8
  readonly currency: string;
  readonly derivedSourceReference: string;
  readonly sourceBatchId: string;
};

/**
 * Declares whether the caller holds a COMPLETE provider snapshot for a scope.
 * incomplete / failed provider fetch must NEVER be treated as empty-complete.
 *
 * When completeness = "complete", the snapshot is complete ONLY for
 * [coverageStart, coverageEndExclusive) — never for the whole UTC month.
 */
export type BilledPeriodSnapshotDeclaration = {
  readonly completeness: "complete" | "incomplete";
  readonly provider: string;
  readonly externalProjectId: string;
  /** Inclusive UTC instant bound of the covered window. */
  readonly coverageStart: string;
  /** Exclusive UTC instant bound of the covered window. */
  readonly coverageEndExclusive: string;
};

export type ReconcileBilledPeriodInput = {
  readonly projectId: string;
  readonly periodStart: string;
  readonly sourceBatchId: string;
  readonly facts: ReadonlyArray<BilledPeriodFact>;
  readonly maxFacts?: number;
  /**
   * Snapshot completeness + economic scope for missing-atom corrections.
   * Scope = provider + SFIA projectId + externalProjectId + periodStart.
   */
  readonly snapshot: BilledPeriodSnapshotDeclaration;
};

export type ReconcileProjectPeriodResult =
  | {
      readonly outcome: "succeeded";
      readonly reconciliationId: string;
      readonly processedCount: number;
      readonly createdCount: number;
      readonly duplicateCount: number;
      /** Full project/period projection after rebuild (all currencies). */
      readonly aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>;
      readonly idempotentReplay: boolean;
    }
  | {
      readonly outcome: "failed";
      readonly reconciliationId: string | null;
      readonly code: string;
      readonly message: string;
      /** FinOps-side only — never invalidates a successful user AI run. */
      readonly finopsSideOnly: true;
    };

/** Alias — billed period reconciliation reuses the same result shape. */
export type ReconcileBilledPeriodResult = ReconcileProjectPeriodResult;

/**
 * Full A1 rebuild for a project + UTC period.
 * Always rebuilds ALL currencies — no partial per-currency rebuild path.
 */
export type RecomputeAggregatesInput = {
  readonly projectId: string;
  readonly periodStart: string;
};

export type RecomputeAggregatesResult =
  | {
      readonly outcome: "succeeded";
      readonly aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>;
    }
  | {
      readonly outcome: "failed";
      readonly code: string;
      readonly message: string;
    };

```

### `projects/sfia-studio/app/lib/oa/finops/infrastructure/memory/memoryFinOpsT2.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (9154 bytes)

```
/**
 * In-memory FinOps T2 ports for unit tests (no Postgres).
 */

import type {
  FinOpsCostEvent,
  FinOpsCostEventInsertResult,
  FinOpsProjectPeriodAggregate,
  FinOpsReconciliationRecord,
} from "../../application/types.aggregate";
import type { FinOpsAggregatePort } from "../../ports/finopsAggregatePort";
import type {
  FinOpsPriceCatalogEntry,
  FinOpsPriceCatalogPort,
} from "../../ports/finopsPriceCatalogPort";
import type { FinOpsReconciliationPort } from "../../ports/finopsReconciliationPort";

export function createMemoryFinOpsAggregateStore(
  reconciliation?: {
    readonly listCostEventsForProjectPeriod: FinOpsReconciliationPort["listCostEventsForProjectPeriod"];
  },
): FinOpsAggregatePort & {
  readonly _rows: Map<string, FinOpsProjectPeriodAggregate>;
} {
  const rows = new Map<string, FinOpsProjectPeriodAggregate>();
  const keyOf = (projectId: string, periodStart: string, currency: string) =>
    `${projectId}|${periodStart}|${currency}`;

  /** Per project+period async mutex (unit-test stand-in; PG uses advisory locks). */
  const exclusiveChains = new Map<string, Promise<unknown>>();

  const replaceLocal = (input: {
    projectId: string;
    periodStart: string;
    aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>;
  }) => {
    for (const [k, v] of [...rows.entries()]) {
      if (v.projectId === input.projectId && v.periodStart === input.periodStart) {
        rows.delete(k);
      }
    }
    for (const agg of input.aggregates) {
      rows.set(keyOf(agg.projectId, agg.periodStart, agg.currency), agg);
    }
  };

  return {
    _rows: rows,
    async replaceProjectPeriodAggregates(input) {
      replaceLocal(input);
    },
    async readAggregate(key) {
      return rows.get(keyOf(key.projectId, key.periodStart, key.currency)) ?? null;
    },
    async listAggregatesForProjectPeriod(input) {
      return [...rows.values()]
        .filter(
          (r) =>
            r.projectId === input.projectId &&
            r.periodStart === input.periodStart,
        )
        .sort((a, b) => a.currency.localeCompare(b.currency));
    },
    async withExclusiveProjectPeriodRebuild(input, work) {
      const lockKey = `${input.projectId}|${input.periodStart}`;
      const prev = exclusiveChains.get(lockKey) ?? Promise.resolve();
      let release!: () => void;
      const gate = new Promise<void>((resolve) => {
        release = resolve;
      });
      const next = prev.then(() => gate);
      exclusiveChains.set(lockKey, next.catch(() => undefined));
      await prev.catch(() => undefined);
      try {
        const costSource = reconciliation;
        return await work({
          async listAllCostEventsForPeriod() {
            if (!costSource) {
              throw new Error(
                "memory aggregate exclusive rebuild requires reconciliation wiring",
              );
            }
            return costSource.listCostEventsForProjectPeriod({
              projectId: input.projectId,
              periodStart: input.periodStart,
            });
          },
          async listAggregates() {
            return [...rows.values()]
              .filter(
                (r) =>
                  r.projectId === input.projectId &&
                  r.periodStart === input.periodStart,
              )
              .sort((a, b) => a.currency.localeCompare(b.currency));
          },
          async replaceAggregates(aggregates) {
            replaceLocal({
              projectId: input.projectId,
              periodStart: input.periodStart,
              aggregates,
            });
          },
        });
      } finally {
        release();
      }
    },
  };
}

export function createMemoryFinOpsReconciliation(): FinOpsReconciliationPort & {
  readonly _costEvents: FinOpsCostEvent[];
  readonly _recon: Map<string, FinOpsReconciliationRecord>;
} {
  const costEvents: FinOpsCostEvent[] = [];
  const recon = new Map<string, FinOpsReconciliationRecord>();
  const byDedup = new Map<string, FinOpsCostEvent>();
  const exclusiveChains = new Map<string, Promise<unknown>>();

  const coreOps = {
    async insertCostEvent(event: FinOpsCostEvent): Promise<FinOpsCostEventInsertResult> {
      const existing = byDedup.get(event.dedupKey);
      if (existing) {
        const same =
          existing.amount === event.amount &&
          existing.evidenceClass === event.evidenceClass &&
          existing.correctionRef === event.correctionRef &&
          existing.executionRunId === event.executionRunId &&
          existing.attributionScope === event.attributionScope &&
          existing.derivedSourceReference === event.derivedSourceReference;
        if (!same) {
          return {
            outcome: "conflict",
            code: "FINOPS_COST_DEDUP_CONFLICT",
            message: "FinOps cost dedup conflict with divergent payload",
          };
        }
        return { outcome: "duplicate", costEventId: existing.costEventId };
      }
      costEvents.push(event);
      byDedup.set(event.dedupKey, event);
      return { outcome: "created", costEventId: event.costEventId };
    },
    async listCostEventsForProjectPeriod(input: {
      readonly projectId: string;
      readonly periodStart: string;
      readonly currency?: string;
    }) {
      return costEvents.filter(
        (e) =>
          e.projectId === input.projectId &&
          e.periodStart === input.periodStart &&
          (input.currency === undefined || e.currency === input.currency),
      );
    },
    async findReconciliationByDedup(dedupKey: string) {
      return recon.get(dedupKey) ?? null;
    },
    async insertReconciliationRecord(record: FinOpsReconciliationRecord) {
      const existing = recon.get(record.dedupKey);
      if (existing) {
        return { outcome: "duplicate" as const, existing };
      }
      recon.set(record.dedupKey, record);
      return { outcome: "created" as const };
    },
    async completeReconciliationRecord(input: {
      readonly reconciliationId: string;
      readonly status: "succeeded" | "failed";
      readonly processedCount: number;
      readonly errorCode: string | null;
      readonly errorMessage: string | null;
      readonly completedAt: string;
    }) {
      for (const [k, v] of recon.entries()) {
        if (v.reconciliationId === input.reconciliationId) {
          recon.set(k, {
            ...v,
            status: input.status,
            processedCount: input.processedCount,
            errorCode: input.errorCode,
            errorMessage: input.errorMessage,
            completedAt: input.completedAt,
          });
        }
      }
    },
  };

  return {
    _costEvents: costEvents,
    _recon: recon,
    insertCostEvent: coreOps.insertCostEvent,
    listCostEventsForProjectPeriod: coreOps.listCostEventsForProjectPeriod,
    findReconciliationByDedup: coreOps.findReconciliationByDedup,
    insertReconciliationRecord: coreOps.insertReconciliationRecord,
    completeReconciliationRecord: coreOps.completeReconciliationRecord,
    async withExclusiveProjectPeriodReconciliation(input, work) {
      const lockKey = `${input.projectId}|${input.periodStart}`;
      const prev = exclusiveChains.get(lockKey) ?? Promise.resolve();
      let release!: () => void;
      const gate = new Promise<void>((resolve) => {
        release = resolve;
      });
      const next = prev.then(() => gate);
      exclusiveChains.set(lockKey, next.catch(() => undefined));
      await prev.catch(() => undefined);
      try {
        return await work(coreOps);
      } finally {
        release();
      }
    },
  };
}

/** Pair memory aggregate + reconciliation so exclusive rebuild can list events. */
export function createMemoryFinOpsT2Pair(): {
  readonly reconciliation: ReturnType<typeof createMemoryFinOpsReconciliation>;
  readonly aggregates: ReturnType<typeof createMemoryFinOpsAggregateStore>;
} {
  const reconciliation = createMemoryFinOpsReconciliation();
  const aggregates = createMemoryFinOpsAggregateStore(reconciliation);
  return { reconciliation, aggregates };
}

/** Fictitious fixture catalog — NOT real provider tariffs. */
export function createMemoryFinOpsPriceCatalog(
  entries: ReadonlyArray<FinOpsPriceCatalogEntry>,
): FinOpsPriceCatalogPort {
  return {
    async lookup(query) {
      const matches = entries.filter((e) => {
        if (e.provider !== query.provider) return false;
        if (e.model !== query.model) return false;
        if (e.unit !== query.unit) return false;
        if (e.ratePerQuantum.currency !== query.currency) return false;
        if (query.catalogVersion && e.catalogVersion !== query.catalogVersion) {
          return false;
        }
        if (e.validFrom > query.at) return false;
        if (e.validTo !== null && e.validTo <= query.at) return false;
        return true;
      });
      matches.sort((a, b) => (a.validFrom < b.validFrom ? 1 : -1));
      if (matches.length === 0) {
        return {
          status: "unavailable",
          reason: "no catalog entry configured for provider/model/unit/currency",
        };
      }
      return { status: "found", entry: matches[0]! };
    },
  };
}

```

### `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (10318 bytes)

```
/**
 * FinOps T2 — PostgreSQL A1 durable aggregate store.
 *
 * Exclusive rebuild uses ONE PoolClient + transaction advisory lock so the
 * critical section (read cost events → derive → replace) cannot starve the
 * pool: waiters block on lock acquisition inside their own transactions; the
 * holder uses the same connection for all SQL until COMMIT/ROLLBACK.
 */

import type { Pool, PoolClient } from "pg";
import type {
  FinOpsAggregateKey,
  FinOpsCostEvent,
  FinOpsProjectPeriodAggregate,
} from "../../application/types.aggregate";
import { formatMoneyString, parseMoneyString } from "../../domain/money";
import type {
  FinOpsAggregatePort,
  FinOpsExclusiveProjectPeriodRebuildOps,
} from "../../ports/finopsAggregatePort";
import { sanitizeDbError } from "./sanitizeDbError";

function formatPgDate(value: unknown): string {
  if (value instanceof Date) {
    // node-pg maps DATE to a local-midnight Date; use local Y/M/D (not UTC).
    const y = value.getFullYear();
    const m = String(value.getMonth() + 1).padStart(2, "0");
    const d = String(value.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  const raw = String(value);
  const match = /^(\d{4}-\d{2}-\d{2})/.exec(raw);
  if (match) return match[1]!;
  throw new Error("invalid period_start from postgres");
}

function canonicalAmount(raw: unknown, currency: string): string {
  return formatMoneyString(parseMoneyString(String(raw), currency));
}

function rowToAggregate(
  row: Record<string, unknown>,
): FinOpsProjectPeriodAggregate {
  const currency = String(row.currency);
  return {
    projectId: String(row.project_id),
    periodStart: formatPgDate(row.period_start),
    currency,
    estimatedAmount: canonicalAmount(row.estimated_amount, currency),
    observedAmount: canonicalAmount(row.observed_amount, currency),
    billedAmount: canonicalAmount(row.billed_amount, currency),
    unknownAmount: canonicalAmount(row.unknown_amount, currency),
    inputTokensSum:
      row.input_tokens_sum === null || row.input_tokens_sum === undefined
        ? null
        : Number(row.input_tokens_sum),
    outputTokensSum:
      row.output_tokens_sum === null || row.output_tokens_sum === undefined
        ? null
        : Number(row.output_tokens_sum),
    totalTokensSum:
      row.total_tokens_sum === null || row.total_tokens_sum === undefined
        ? null
        : Number(row.total_tokens_sum),
    costEventCount: Number(row.cost_event_count),
    unavailableEstimationCount: Number(row.unavailable_estimation_count),
    rebuildVersion: Number(row.rebuild_version),
    rebuiltAt:
      row.rebuilt_at instanceof Date
        ? row.rebuilt_at.toISOString()
        : String(row.rebuilt_at),
  };
}

function rowToCostEvent(row: Record<string, unknown>): FinOpsCostEvent {
  const attributionScopeRaw = row.attribution_scope;
  const attributionScope =
    attributionScopeRaw === null || attributionScopeRaw === undefined
      ? ("EXECUTION_RUN" as const)
      : (String(attributionScopeRaw) as FinOpsCostEvent["attributionScope"]);
  return {
    costEventId: String(row.cost_event_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    attributionScope,
    executionRunId:
      row.execution_run_id === null || row.execution_run_id === undefined
        ? null
        : String(row.execution_run_id),
    derivedSourceReference:
      row.derived_source_reference === null ||
      row.derived_source_reference === undefined
        ? null
        : String(row.derived_source_reference),
    usageEventId:
      row.usage_event_id === null || row.usage_event_id === undefined
        ? null
        : String(row.usage_event_id),
    periodStart: formatPgDate(row.period_start),
    currency: String(row.currency),
    amount:
      row.amount === null || row.amount === undefined
        ? null
        : formatMoneyString(
            parseMoneyString(String(row.amount), String(row.currency)),
          ),
    evidenceClass: row.evidence_class as FinOpsCostEvent["evidenceClass"],
    sourceOfTruth: row.source_of_truth as FinOpsCostEvent["sourceOfTruth"],
    estimationStatus:
      row.estimation_status as FinOpsCostEvent["estimationStatus"],
    correctionRef:
      row.correction_ref === null || row.correction_ref === undefined
        ? null
        : String(row.correction_ref),
    catalogVersion:
      row.catalog_version === null || row.catalog_version === undefined
        ? null
        : String(row.catalog_version),
    provider: String(row.provider),
    model:
      row.model === null || row.model === undefined ? null : String(row.model),
    unit: row.unit === null || row.unit === undefined ? null : String(row.unit),
    billingQuantum:
      row.billing_quantum === null || row.billing_quantum === undefined
        ? null
        : String(row.billing_quantum),
    usageQuantity:
      row.usage_quantity === null || row.usage_quantity === undefined
        ? null
        : String(row.usage_quantity),
    occurredAt:
      row.occurred_at instanceof Date
        ? row.occurred_at.toISOString()
        : String(row.occurred_at),
  };
}

async function deleteAndInsertAggregates(
  client: PoolClient,
  projectId: string,
  periodStart: string,
  aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>,
): Promise<void> {
  await client.query(
    `DELETE FROM finops_usage_aggregate
     WHERE project_id = $1 AND period_start = $2::date`,
    [projectId, periodStart],
  );
  for (const agg of aggregates) {
    await client.query(
      `INSERT INTO finops_usage_aggregate (
        project_id, period_start, currency,
        estimated_amount, observed_amount, billed_amount, unknown_amount,
        input_tokens_sum, output_tokens_sum, total_tokens_sum,
        cost_event_count, unavailable_estimation_count,
        rebuild_version, rebuilt_at
      ) VALUES (
        $1,$2::date,$3,$4::numeric,$5::numeric,$6::numeric,$7::numeric,
        $8,$9,$10,$11,$12,$13,$14::timestamptz
      )`,
      [
        agg.projectId,
        agg.periodStart,
        agg.currency,
        agg.estimatedAmount,
        agg.observedAmount,
        agg.billedAmount,
        agg.unknownAmount,
        agg.inputTokensSum,
        agg.outputTokensSum,
        agg.totalTokensSum,
        agg.costEventCount,
        agg.unavailableEstimationCount,
        agg.rebuildVersion,
        agg.rebuiltAt,
      ],
    );
  }
}

function buildExclusiveOps(
  client: PoolClient,
  projectId: string,
  periodStart: string,
): FinOpsExclusiveProjectPeriodRebuildOps {
  return {
    async listAllCostEventsForPeriod() {
      const result = await client.query(
        `SELECT * FROM finops_cost_event
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY occurred_at ASC, cost_event_id ASC`,
        [projectId, periodStart],
      );
      return result.rows.map((row) =>
        rowToCostEvent(row as Record<string, unknown>),
      );
    },
    async listAggregates() {
      const result = await client.query(
        `SELECT * FROM finops_usage_aggregate
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY currency ASC`,
        [projectId, periodStart],
      );
      return result.rows.map((row) =>
        rowToAggregate(row as Record<string, unknown>),
      );
    },
    async replaceAggregates(aggregates) {
      await deleteAndInsertAggregates(
        client,
        projectId,
        periodStart,
        aggregates,
      );
    },
  };
}

export function createPostgresFinOpsAggregateStore(
  pool: Pool,
): FinOpsAggregatePort {
  return {
    async replaceProjectPeriodAggregates(input) {
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        await deleteAndInsertAggregates(
          client,
          input.projectId,
          input.periodStart,
          input.aggregates,
        );
        await client.query("COMMIT");
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore
          }
        }
        const sanitized = sanitizeDbError(error);
        throw new Error(sanitized.message);
      } finally {
        client?.release();
      }
    },

    async readAggregate(key: FinOpsAggregateKey) {
      const result = await pool.query(
        `SELECT * FROM finops_usage_aggregate
         WHERE project_id = $1 AND period_start = $2::date AND currency = $3
         LIMIT 1`,
        [key.projectId, key.periodStart, key.currency],
      );
      if (result.rowCount !== 1) return null;
      return rowToAggregate(result.rows[0] as Record<string, unknown>);
    },

    async listAggregatesForProjectPeriod(input) {
      const result = await pool.query(
        `SELECT * FROM finops_usage_aggregate
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY currency ASC`,
        [input.projectId, input.periodStart],
      );
      return result.rows.map((row) =>
        rowToAggregate(row as Record<string, unknown>),
      );
    },

    async withExclusiveProjectPeriodRebuild(input, work) {
      const projectId = input.projectId.trim();
      const periodStart = input.periodStart.trim();
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        // Transaction-scoped advisory lock: released on COMMIT/ROLLBACK.
        // Keys derived from projectId + periodStart only (not global FinOps).
        await client.query(
          `SELECT pg_advisory_xact_lock(
             hashtext('finops-a1:' || $1),
             hashtext($2)
           )`,
          [projectId, periodStart],
        );
        const ops = buildExclusiveOps(client, projectId, periodStart);
        const result = await work(ops);
        await client.query("COMMIT");
        return result;
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore
          }
        }
        const sanitized = sanitizeDbError(error);
        throw new Error(sanitized.message);
      } finally {
        // Session never retains an advisory lock: xact locks end with txn.
        client?.release();
      }
    },
  };
}

```

### `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsEnforcementProjectionStore.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (8550 bytes)

```
/**
 * FinOps T4 — PostgreSQL enforcement projection store.
 *
 * Authoritative read: finops_cost_event
 * Derived write: finops_enforcement_projection
 *
 * ONE PoolClient + transaction advisory lock (namespace finops-t4:) for
 * rebuild and decision reads. Lock released on COMMIT/ROLLBACK — never held
 * across provider I/O.
 */

import type { Pool, PoolClient } from "pg";
import type { FinOpsCostEvent } from "../../application/types.aggregate";
import type { FinOpsEnforcementProjection } from "../../application/types.enforcement";
import { formatMoneyString, parseMoneyString } from "../../domain/money";
import type {
  FinOpsEnforcementProjectionPort,
  FinOpsExclusiveEnforcementOps,
} from "../../ports/finopsEnforcementProjectionPort";
import { sanitizeDbError } from "./sanitizeDbError";

function formatPgDate(value: unknown): string {
  if (value instanceof Date) {
    const y = value.getFullYear();
    const m = String(value.getMonth() + 1).padStart(2, "0");
    const d = String(value.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  const raw = String(value);
  const match = /^(\d{4}-\d{2}-\d{2})/.exec(raw);
  if (match) return match[1]!;
  throw new Error("invalid period_start from postgres");
}

function canonicalAmount(raw: unknown, currency: string): string {
  return formatMoneyString(parseMoneyString(String(raw), currency));
}

function rowToCostEvent(row: Record<string, unknown>): FinOpsCostEvent {
  const attributionScopeRaw = row.attribution_scope;
  const attributionScope =
    attributionScopeRaw === null || attributionScopeRaw === undefined
      ? ("EXECUTION_RUN" as const)
      : (String(attributionScopeRaw) as FinOpsCostEvent["attributionScope"]);
  return {
    costEventId: String(row.cost_event_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    attributionScope,
    executionRunId:
      row.execution_run_id === null || row.execution_run_id === undefined
        ? null
        : String(row.execution_run_id),
    derivedSourceReference:
      row.derived_source_reference === null ||
      row.derived_source_reference === undefined
        ? null
        : String(row.derived_source_reference),
    usageEventId:
      row.usage_event_id === null || row.usage_event_id === undefined
        ? null
        : String(row.usage_event_id),
    periodStart: formatPgDate(row.period_start),
    currency: String(row.currency),
    amount:
      row.amount === null || row.amount === undefined
        ? null
        : formatMoneyString(
            parseMoneyString(String(row.amount), String(row.currency)),
          ),
    evidenceClass: row.evidence_class as FinOpsCostEvent["evidenceClass"],
    sourceOfTruth: row.source_of_truth as FinOpsCostEvent["sourceOfTruth"],
    estimationStatus:
      row.estimation_status as FinOpsCostEvent["estimationStatus"],
    correctionRef:
      row.correction_ref === null || row.correction_ref === undefined
        ? null
        : String(row.correction_ref),
    catalogVersion:
      row.catalog_version === null || row.catalog_version === undefined
        ? null
        : String(row.catalog_version),
    provider: String(row.provider),
    model:
      row.model === null || row.model === undefined ? null : String(row.model),
    unit: row.unit === null || row.unit === undefined ? null : String(row.unit),
    billingQuantum:
      row.billing_quantum === null || row.billing_quantum === undefined
        ? null
        : String(row.billing_quantum),
    usageQuantity:
      row.usage_quantity === null || row.usage_quantity === undefined
        ? null
        : String(row.usage_quantity),
    occurredAt:
      row.occurred_at instanceof Date
        ? row.occurred_at.toISOString()
        : String(row.occurred_at),
  };
}

function rowToProjection(
  row: Record<string, unknown>,
): FinOpsEnforcementProjection {
  const currency = String(row.currency);
  return {
    projectId: String(row.project_id),
    periodStart: formatPgDate(row.period_start),
    currency,
    blockingEligibleAmount: canonicalAmount(
      row.blocking_eligible_amount,
      currency,
    ),
    billedAmount: canonicalAmount(row.billed_amount, currency),
    providerObservedAmount: canonicalAmount(
      row.provider_observed_amount,
      currency,
    ),
    eligibleCostEventCount: Number(row.eligible_cost_event_count),
    billedEventCount: Number(row.billed_event_count),
    providerObservedEventCount: Number(row.provider_observed_event_count),
    rebuildVersion: Number(row.rebuild_version),
    rebuiltAt:
      row.rebuilt_at instanceof Date
        ? row.rebuilt_at.toISOString()
        : String(row.rebuilt_at),
  };
}

async function deleteAndInsertProjections(
  client: PoolClient,
  projectId: string,
  periodStart: string,
  projections: ReadonlyArray<FinOpsEnforcementProjection>,
): Promise<void> {
  await client.query(
    `DELETE FROM finops_enforcement_projection
     WHERE project_id = $1 AND period_start = $2::date`,
    [projectId, periodStart],
  );
  for (const row of projections) {
    await client.query(
      `INSERT INTO finops_enforcement_projection (
        project_id, period_start, currency,
        blocking_eligible_amount, billed_amount, provider_observed_amount,
        eligible_cost_event_count, billed_event_count, provider_observed_event_count,
        rebuild_version, rebuilt_at
      ) VALUES (
        $1,$2::date,$3,$4::numeric,$5::numeric,$6::numeric,
        $7,$8,$9,$10,$11::timestamptz
      )`,
      [
        row.projectId,
        row.periodStart,
        row.currency,
        row.blockingEligibleAmount,
        row.billedAmount,
        row.providerObservedAmount,
        row.eligibleCostEventCount,
        row.billedEventCount,
        row.providerObservedEventCount,
        row.rebuildVersion,
        row.rebuiltAt,
      ],
    );
  }
}

function buildExclusiveOps(
  client: PoolClient,
  projectId: string,
  periodStart: string,
): FinOpsExclusiveEnforcementOps {
  return {
    async listAllCostEventsForPeriod() {
      const result = await client.query(
        `SELECT * FROM finops_cost_event
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY occurred_at ASC, cost_event_id ASC`,
        [projectId, periodStart],
      );
      return result.rows.map((row) =>
        rowToCostEvent(row as Record<string, unknown>),
      );
    },
    async listProjections() {
      const result = await client.query(
        `SELECT * FROM finops_enforcement_projection
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY currency ASC`,
        [projectId, periodStart],
      );
      return result.rows.map((row) =>
        rowToProjection(row as Record<string, unknown>),
      );
    },
    async replaceProjections(projections) {
      await deleteAndInsertProjections(
        client,
        projectId,
        periodStart,
        projections,
      );
    },
    async readProjection(currency) {
      const result = await client.query(
        `SELECT * FROM finops_enforcement_projection
         WHERE project_id = $1 AND period_start = $2::date AND currency = $3
         LIMIT 1`,
        [projectId, periodStart, currency],
      );
      if (result.rowCount !== 1) return null;
      return rowToProjection(result.rows[0] as Record<string, unknown>);
    },
  };
}

export function createPostgresFinOpsEnforcementProjectionStore(
  pool: Pool,
): FinOpsEnforcementProjectionPort {
  return {
    async withExclusiveProjectPeriod(input, work) {
      const projectId = input.projectId.trim();
      const periodStart = input.periodStart.trim();
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        // Transaction-scoped advisory lock: same namespace for rebuild + decision.
        await client.query(
          `SELECT pg_advisory_xact_lock(
             hashtext('finops-t4:' || $1),
             hashtext($2)
           )`,
          [projectId, periodStart],
        );
        const ops = buildExclusiveOps(client, projectId, periodStart);
        const result = await work(ops);
        await client.query("COMMIT");
        return result;
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore
          }
        }
        const sanitized = sanitizeDbError(error);
        throw new Error(sanitized.message);
      } finally {
        client?.release();
      }
    },
  };
}

```

### `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsReconciliation.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (14393 bytes)

```
/**
 * FinOps T2 — PostgreSQL reconciliation + append-only cost-event adapter.
 */

import type { Pool, PoolClient } from "pg";
import type {
  FinOpsCostEvent,
  FinOpsCostEventInsertResult,
  FinOpsReconciliationRecord,
} from "../../application/types.aggregate";
import { formatMoneyString, parseMoneyString } from "../../domain/money";
import type { FinOpsReconciliationPort } from "../../ports/finopsReconciliationPort";
import { sanitizeDbError } from "./sanitizeDbError";

function formatPgDate(value: unknown): string {
  if (value instanceof Date) {
    // node-pg maps DATE to a local-midnight Date; use local Y/M/D (not UTC).
    const y = value.getFullYear();
    const m = String(value.getMonth() + 1).padStart(2, "0");
    const d = String(value.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  const raw = String(value);
  // node-pg may return 'YYYY-MM-DD' or a longer timestamp string.
  const match = /^(\d{4}-\d{2}-\d{2})/.exec(raw);
  if (match) return match[1]!;
  throw new Error("invalid period_start from postgres");
}

const INSERT_COST_SQL = `
INSERT INTO finops_cost_event (
  cost_event_id, dedup_key, project_id, attribution_scope, execution_run_id,
  derived_source_reference, usage_event_id,
  period_start, currency, amount, evidence_class, source_of_truth,
  estimation_status, correction_ref, catalog_version, provider, model,
  unit, billing_quantum, usage_quantity, occurred_at, created_at
) VALUES (
  $1,$2,$3,$4,$5,$6,$7,$8::date,$9,$10::numeric,$11,$12,$13,$14,$15,$16,$17,
  $18,$19::numeric,$20::numeric,$21::timestamptz,NOW()
)
ON CONFLICT (dedup_key) DO NOTHING
RETURNING cost_event_id
`;

function rowToCostEvent(row: Record<string, unknown>): FinOpsCostEvent {
  const attributionScopeRaw = row.attribution_scope;
  const attributionScope =
    attributionScopeRaw === null || attributionScopeRaw === undefined
      ? ("EXECUTION_RUN" as const)
      : (String(attributionScopeRaw) as FinOpsCostEvent["attributionScope"]);
  return {
    costEventId: String(row.cost_event_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    attributionScope,
    executionRunId:
      row.execution_run_id === null || row.execution_run_id === undefined
        ? null
        : String(row.execution_run_id),
    derivedSourceReference:
      row.derived_source_reference === null ||
      row.derived_source_reference === undefined
        ? null
        : String(row.derived_source_reference),
    usageEventId:
      row.usage_event_id === null || row.usage_event_id === undefined
        ? null
        : String(row.usage_event_id),
    periodStart: formatPgDate(row.period_start),
    currency: String(row.currency),
    amount:
      row.amount === null || row.amount === undefined
        ? null
        : formatMoneyString(
            parseMoneyString(String(row.amount), String(row.currency)),
          ),
    evidenceClass: row.evidence_class as FinOpsCostEvent["evidenceClass"],
    sourceOfTruth: row.source_of_truth as FinOpsCostEvent["sourceOfTruth"],
    estimationStatus:
      row.estimation_status as FinOpsCostEvent["estimationStatus"],
    correctionRef:
      row.correction_ref === null || row.correction_ref === undefined
        ? null
        : String(row.correction_ref),
    catalogVersion:
      row.catalog_version === null || row.catalog_version === undefined
        ? null
        : String(row.catalog_version),
    provider: String(row.provider),
    model:
      row.model === null || row.model === undefined ? null : String(row.model),
    unit: row.unit === null || row.unit === undefined ? null : String(row.unit),
    billingQuantum:
      row.billing_quantum === null || row.billing_quantum === undefined
        ? null
        : String(row.billing_quantum),
    usageQuantity:
      row.usage_quantity === null || row.usage_quantity === undefined
        ? null
        : String(row.usage_quantity),
    occurredAt:
      row.occurred_at instanceof Date
        ? row.occurred_at.toISOString()
        : String(row.occurred_at),
  };
}

function rowToRecon(row: Record<string, unknown>): FinOpsReconciliationRecord {
  return {
    reconciliationId: String(row.reconciliation_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    periodStart: formatPgDate(row.period_start),
    sourceBatchId: String(row.source_batch_id),
    status: row.status as FinOpsReconciliationRecord["status"],
    processedCount: Number(row.processed_count),
    errorCode:
      row.error_code === null || row.error_code === undefined
        ? null
        : String(row.error_code),
    errorMessage:
      row.error_message === null || row.error_message === undefined
        ? null
        : String(row.error_message),
    completedAt:
      row.completed_at === null || row.completed_at === undefined
        ? null
        : row.completed_at instanceof Date
          ? row.completed_at.toISOString()
          : String(row.completed_at),
  };
}

function fingerprintEqual(a: FinOpsCostEvent, b: FinOpsCostEvent): boolean {
  return (
    a.projectId === b.projectId &&
    a.attributionScope === b.attributionScope &&
    a.executionRunId === b.executionRunId &&
    a.derivedSourceReference === b.derivedSourceReference &&
    a.usageEventId === b.usageEventId &&
    a.periodStart === b.periodStart &&
    a.currency === b.currency &&
    a.amount === b.amount &&
    a.evidenceClass === b.evidenceClass &&
    a.sourceOfTruth === b.sourceOfTruth &&
    a.estimationStatus === b.estimationStatus &&
    a.correctionRef === b.correctionRef &&
    a.provider === b.provider &&
    a.model === b.model
  );
}

export function createPostgresFinOpsReconciliation(
  pool: Pool,
): FinOpsReconciliationPort {
  const coreOps = {
    async insertCostEvent(
      client: PoolClient,
      event: FinOpsCostEvent,
    ): Promise<FinOpsCostEventInsertResult> {
      const inserted = await client.query<{ cost_event_id: string }>(
        INSERT_COST_SQL,
        [
          event.costEventId,
          event.dedupKey,
          event.projectId,
          event.attributionScope,
          event.executionRunId,
          event.derivedSourceReference,
          event.usageEventId,
          event.periodStart,
          event.currency,
          event.amount,
          event.evidenceClass,
          event.sourceOfTruth,
          event.estimationStatus,
          event.correctionRef,
          event.catalogVersion,
          event.provider,
          event.model,
          event.unit,
          event.billingQuantum,
          event.usageQuantity,
          event.occurredAt,
        ],
      );

      if (inserted.rowCount === 1) {
        return { outcome: "created", costEventId: event.costEventId };
      }

      const existing = await client.query(
        `SELECT * FROM finops_cost_event WHERE dedup_key = $1 LIMIT 1`,
        [event.dedupKey],
      );
      if (existing.rowCount !== 1) {
        return {
          outcome: "failed",
          code: "FINOPS_COST_PERSIST_FAILED",
          message: "FinOps cost event persist failed",
          retryable: true,
        };
      }
      const existingEvent = rowToCostEvent(
        existing.rows[0] as Record<string, unknown>,
      );
      if (!fingerprintEqual(existingEvent, event)) {
        return {
          outcome: "conflict",
          code: "FINOPS_COST_DEDUP_CONFLICT",
          message: "FinOps cost dedup conflict with divergent payload",
        };
      }
      return {
        outcome: "duplicate",
        costEventId: existingEvent.costEventId,
      };
    },

    async listCostEventsForProjectPeriod(
      client: PoolClient | Pool,
      input: {
        readonly projectId: string;
        readonly periodStart: string;
        readonly currency?: string;
      },
    ) {
      const params: unknown[] = [input.projectId, input.periodStart];
      let sql = `SELECT * FROM finops_cost_event
        WHERE project_id = $1 AND period_start = $2::date`;
      if (input.currency) {
        params.push(input.currency);
        sql += ` AND currency = $3`;
      }
      sql += ` ORDER BY occurred_at ASC, cost_event_id ASC`;
      const result = await client.query(sql, params);
      return result.rows.map((row) =>
        rowToCostEvent(row as Record<string, unknown>),
      );
    },

    async findReconciliationByDedup(client: PoolClient | Pool, dedupKey: string) {
      const result = await client.query(
        `SELECT * FROM finops_reconciliation_record WHERE dedup_key = $1 LIMIT 1`,
        [dedupKey],
      );
      if (result.rowCount !== 1) return null;
      return rowToRecon(result.rows[0] as Record<string, unknown>);
    },

    async insertReconciliationRecord(
      client: PoolClient | Pool,
      record: FinOpsReconciliationRecord,
    ) {
      try {
        const inserted = await client.query(
          `INSERT INTO finops_reconciliation_record (
            reconciliation_id, dedup_key, project_id, period_start,
            source_batch_id, status, processed_count, error_code,
            error_message, created_at, completed_at
          ) VALUES (
            $1,$2,$3,$4::date,$5,$6,$7,$8,$9,NOW(),$10::timestamptz
          )
          ON CONFLICT (dedup_key) DO NOTHING
          RETURNING reconciliation_id`,
          [
            record.reconciliationId,
            record.dedupKey,
            record.projectId,
            record.periodStart,
            record.sourceBatchId,
            record.status,
            record.processedCount,
            record.errorCode,
            record.errorMessage,
            record.completedAt,
          ],
        );
        if (inserted.rowCount === 1) return { outcome: "created" as const };
        const existing = await client.query(
          `SELECT * FROM finops_reconciliation_record WHERE dedup_key = $1 LIMIT 1`,
          [record.dedupKey],
        );
        if (existing.rowCount !== 1) {
          return {
            outcome: "failed" as const,
            message: "reconciliation record missing after conflict",
            retryable: true,
          };
        }
        return {
          outcome: "duplicate" as const,
          existing: rowToRecon(existing.rows[0] as Record<string, unknown>),
        };
      } catch (error) {
        const sanitized = sanitizeDbError(error);
        return {
          outcome: "failed" as const,
          message: sanitized.message,
          retryable: sanitized.retryable,
        };
      }
    },

    async completeReconciliationRecord(
      client: PoolClient | Pool,
      input: {
        readonly reconciliationId: string;
        readonly status: "succeeded" | "failed";
        readonly processedCount: number;
        readonly errorCode: string | null;
        readonly errorMessage: string | null;
        readonly completedAt: string;
      },
    ) {
      await client.query(
        `UPDATE finops_reconciliation_record
         SET status = $2,
             processed_count = $3,
             error_code = $4,
             error_message = $5,
             completed_at = $6::timestamptz
         WHERE reconciliation_id = $1`,
        [
          input.reconciliationId,
          input.status,
          input.processedCount,
          input.errorCode,
          input.errorMessage,
          input.completedAt,
        ],
      );
    },
  };

  return {
    async insertCostEvent(event): Promise<FinOpsCostEventInsertResult> {
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        const result = await coreOps.insertCostEvent(client, event);
        if (result.outcome === "failed") {
          await client.query("ROLLBACK");
        } else {
          await client.query("COMMIT");
        }
        return result;
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore
          }
        }
        const sanitized = sanitizeDbError(error);
        return {
          outcome: "failed",
          code: "FINOPS_COST_PERSIST_FAILED",
          message: sanitized.message,
          retryable: sanitized.retryable,
        };
      } finally {
        client?.release();
      }
    },

    async listCostEventsForProjectPeriod(input) {
      return coreOps.listCostEventsForProjectPeriod(pool, input);
    },

    async findReconciliationByDedup(dedupKey) {
      return coreOps.findReconciliationByDedup(pool, dedupKey);
    },

    async insertReconciliationRecord(record) {
      return coreOps.insertReconciliationRecord(pool, record);
    },

    async completeReconciliationRecord(input) {
      await coreOps.completeReconciliationRecord(pool, input);
    },

    async withExclusiveProjectPeriodReconciliation(input, work) {
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        await client.query(
          `SELECT pg_advisory_xact_lock(hashtext($1), hashtext($2))`,
          [`finops-t2-period:${input.projectId}`, input.periodStart],
        );
        const ops = {
          insertCostEvent: (event: FinOpsCostEvent) =>
            coreOps.insertCostEvent(client!, event),
          listCostEventsForProjectPeriod: (listInput: {
            readonly projectId: string;
            readonly periodStart: string;
            readonly currency?: string;
          }) => coreOps.listCostEventsForProjectPeriod(client!, listInput),
          findReconciliationByDedup: (dedupKey: string) =>
            coreOps.findReconciliationByDedup(client!, dedupKey),
          insertReconciliationRecord: (record: FinOpsReconciliationRecord) =>
            coreOps.insertReconciliationRecord(client!, record),
          completeReconciliationRecord: (
            completeInput: Parameters<
              FinOpsReconciliationPort["completeReconciliationRecord"]
            >[0],
          ) => coreOps.completeReconciliationRecord(client!, completeInput),
        };
        const result = await work(ops);
        await client.query("COMMIT");
        return result;
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore
          }
        }
        throw error;
      } finally {
        client?.release();
      }
    },
  };
}

```

### `projects/sfia-studio/app/lib/oa/finops/ports/finopsReconciliationPort.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (1811 bytes)

```
/**
 * FinOps T2 — reconciliation / adjacent Money cost-event port.
 * Append-only cost history; corrections are new events.
 */

import type {
  FinOpsCostEvent,
  FinOpsCostEventInsertResult,
  FinOpsReconciliationRecord,
} from "../application/types.aggregate";

export type FinOpsReconciliationPort = {
  readonly insertCostEvent: (
    event: FinOpsCostEvent,
  ) => Promise<FinOpsCostEventInsertResult>;

  readonly listCostEventsForProjectPeriod: (input: {
    readonly projectId: string;
    readonly periodStart: string;
    readonly currency?: string;
  }) => Promise<ReadonlyArray<FinOpsCostEvent>>;

  readonly findReconciliationByDedup: (
    dedupKey: string,
  ) => Promise<FinOpsReconciliationRecord | null>;

  readonly insertReconciliationRecord: (
    record: FinOpsReconciliationRecord,
  ) => Promise<
    | { readonly outcome: "created" }
    | { readonly outcome: "duplicate"; readonly existing: FinOpsReconciliationRecord }
    | { readonly outcome: "failed"; readonly message: string; readonly retryable: boolean }
  >;

  readonly completeReconciliationRecord: (input: {
    readonly reconciliationId: string;
    readonly status: "succeeded" | "failed";
    readonly processedCount: number;
    readonly errorCode: string | null;
    readonly errorMessage: string | null;
    readonly completedAt: string;
  }) => Promise<void>;

  readonly withExclusiveProjectPeriodReconciliation: <T>(
    input: {
      readonly projectId: string;
      readonly periodStart: string;
    },
    work: (
      ops: Pick<
        FinOpsReconciliationPort,
        | "insertCostEvent"
        | "listCostEventsForProjectPeriod"
        | "findReconciliationByDedup"
        | "insertReconciliationRecord"
        | "completeReconciliationRecord"
      >,
    ) => Promise<T>,
  ) => Promise<T>;
};

```

### `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7Runtime.ts` (MODIFIED) — content mode FULL
Coverage: COMPLETE. full file (4407 bytes)

```
/**
 * FinOps T7 — canonical server-side foundation runtime composition (default-OFF).
 *
 * Reuses T6 composeFinOpsRuntime (ledger + audit + capture) without modification.
 * Wires T2 mutation / reconciliation through post-T2 T4 refresh wrappers.
 * Exposes T7 rollout resolution (read-only at composition boundary).
 *
 * Anti-claims:
 * - Foundation Ready ≠ SHADOW / MONITOR / E1 activated.
 * - Does not expose upsertProjectRollout as a product API.
 * - Does not modify composeFinOpsRuntime, execution-run, T3, T4, T6 sources.
 * - Does not create pools, read env, or close the injected pool.
 * - Does not create FinOpsEnforcementPort / provider consumers.
 */

import type { Pool } from "pg";
import {
  recomputeAggregatesThenRefreshEnforcementProjection,
  reconcileBilledPeriodThenRefreshEnforcementProjection,
  reconcileProjectPeriodThenRefreshEnforcementProjection,
  type RefreshAfterBilledReconcileResult,
  type RefreshAfterReconcileResult,
  type RefreshAfterRecomputeResult,
} from "../application/refreshEnforcementAfterT2";
import { resolveFinOpsRollout } from "../application/resolveFinOpsRollout";
import type {
  ReconcileBilledPeriodInput,
  ReconcileProjectPeriodInput,
  RecomputeAggregatesInput,
} from "../application/types.aggregate";
import type { FinOpsRolloutInstruction } from "../application/types.rollout";
import { createPostgresFinOpsAggregateStore } from "../infrastructure/postgres/postgresFinOpsAggregateStore";
import { createPostgresFinOpsEnforcementProjectionStore } from "../infrastructure/postgres/postgresFinOpsEnforcementProjectionStore";
import { createPostgresFinOpsReconciliation } from "../infrastructure/postgres/postgresFinOpsReconciliation";
import { createPostgresFinOpsRolloutStore } from "../infrastructure/postgres/postgresFinOpsRolloutStore";
import type { FinOpsCapturePort } from "../ports/finopsCapturePort";
import {
  composeFinOpsRuntime,
  type FinOpsRuntimeComposition,
} from "./composeFinOpsRuntime";

export type ComposeFinOpsT7RuntimeInput = {
  /** Caller-owned pool. Composition never closes it. */
  readonly pool: Pool;
  readonly nowIso: () => string;
};

export type FinOpsT7RuntimeComposition = {
  readonly capture: FinOpsCapturePort;
  readonly flushAudit: () => Promise<void>;
  readonly resolveProjectRollout: (
    projectId: string,
  ) => Promise<FinOpsRolloutInstruction>;
  readonly recomputeAggregatesAndRefresh: (
    input: RecomputeAggregatesInput,
  ) => Promise<RefreshAfterRecomputeResult>;
  readonly reconcileProjectPeriodAndRefresh: (
    input: ReconcileProjectPeriodInput,
  ) => Promise<RefreshAfterReconcileResult>;
  readonly reconcileBilledPeriodAndRefresh: (
    input: ReconcileBilledPeriodInput,
  ) => Promise<RefreshAfterBilledReconcileResult>;
};

function assertServerOnly(): void {
  if (typeof window !== "undefined") {
    throw new Error(
      "oa/finops/server/composeFinOpsT7Runtime is server-only and must not run in a browser context.",
    );
  }
}

/**
 * Compose the canonical T7 server foundation boundary.
 * T6 capture/audit reused; T2 mutations always route through T4 refresh wrappers.
 */
export function composeFinOpsT7Runtime(
  input: ComposeFinOpsT7RuntimeInput,
): FinOpsT7RuntimeComposition {
  assertServerOnly();
  const { pool, nowIso } = input;

  const t6: FinOpsRuntimeComposition = composeFinOpsRuntime({ pool });
  const aggregates = createPostgresFinOpsAggregateStore(pool);
  const reconciliation = createPostgresFinOpsReconciliation(pool);
  const projection = createPostgresFinOpsEnforcementProjectionStore(pool);
  const rollout = createPostgresFinOpsRolloutStore(pool);

  const refreshDeps = {
    aggregates,
    reconciliation,
    projection,
    nowIso,
  };

  return {
    capture: t6.capture,
    flushAudit: t6.flushAudit,
    resolveProjectRollout: (projectId: string) =>
      resolveFinOpsRollout({ rollout }, projectId),
    recomputeAggregatesAndRefresh: (recomputeInput) =>
      recomputeAggregatesThenRefreshEnforcementProjection(
        refreshDeps,
        recomputeInput,
      ),
    reconcileProjectPeriodAndRefresh: (reconcileInput) =>
      reconcileProjectPeriodThenRefreshEnforcementProjection(
        refreshDeps,
        reconcileInput,
      ),
    reconcileBilledPeriodAndRefresh: (reconcileInput) =>
      reconcileBilledPeriodThenRefreshEnforcementProjection(
        refreshDeps,
        reconcileInput,
      ),
  };
}

```

### `projects/sfia-studio/app/lib/oa/finops/server/openaiOrganizationCostsAdapter.ts` (CREATED) — content mode FULL
Coverage: COMPLETE. full file (11142 bytes)

```
/**
 * OpenAI Organization Costs adapter — server-only BILLED period facts.
 * OPENAI_ADMIN_KEY from process env only (never logged).
 */

import {
  buildBilledPeriodSourceBatchId,
  buildDerivedSourceReference,
  OPENAI_COSTS_ADAPTER_CONTRACT_VERSION,
} from "../application/billedPeriodIdentity";
import {
  canonicalProviderAmountString,
  normalizeProviderCurrency,
  parseProviderMoneyString,
} from "../application/providerMoneyBoundary";
import type { BilledPeriodFact } from "../application/types.aggregate";
import { computeUtcMonthPeriod } from "../domain/period";

function assertServerOnly(): void {
  if (typeof window !== "undefined") {
    throw new Error(
      "oa/finops/server/openaiOrganizationCostsAdapter is server-only",
    );
  }
}

export type OpenAiCostsAtom = {
  readonly sourceBucketStart: string;
  readonly sourceBucketEndExclusive: string | null;
  readonly project_id: string;
  readonly line_item: string | null;
  readonly currency: string;
  readonly providerAmount: string;
};


function unixSecondsToIso(seconds: number): string {
  return new Date(seconds * 1000).toISOString();
}

type ParsedCostsPage = {
  readonly data?: ReadonlyArray<{
    readonly start_time: number;
    readonly end_time?: number;
    readonly results?: ReadonlyArray<{
      readonly object?: string;
      readonly project_id?: string | null;
      readonly line_item?: string | null;
      readonly amount?: {
        readonly value?: unknown;
        readonly currency?: string;
      };
    }>;
  }>;
};

// Numbered groups only (tsc target < ES2018 rejects named capturing groups).
// 1=valueNum, 2=valueStr, 3=currencyA, 4=currencyB, 5=valueNum2, 6=valueStr2
const AMOUNT_BLOCK_RE =
  /"amount"\s*:\s*\{\s*(?:(?:"value"\s*:\s*(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|"value"\s*:\s*"(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)")\s*,\s*"currency"\s*:\s*"([^"]+)"|"currency"\s*:\s*"([^"]+)"\s*,\s*(?:"value"\s*:\s*(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|"value"\s*:\s*"(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)"))\s*\}/g;

/**
 * Extract amount.value decimal literals from raw JSON wire text.
 * Never uses JSON Number as authoritative Money input.
 */
export function extractAmountLiteralsFromRawCostsPage(
  rawPage: string,
): ReadonlyArray<{ readonly valueLiteral: string; readonly currencyRaw: string }> {
  const out: Array<{ valueLiteral: string; currencyRaw: string }> = [];
  for (const match of rawPage.matchAll(AMOUNT_BLOCK_RE)) {
    const valueLiteral = match[1] ?? match[2] ?? match[5] ?? match[6];
    const currencyRaw = match[3] ?? match[4];
    if (!valueLiteral || !currencyRaw) {
      throw new Error("OpenAI costs amount block incomplete in raw page text");
    }
    out.push({ valueLiteral, currencyRaw });
  }
  return out;
}

export function parseCostsPageToAtoms(rawPage: string): OpenAiCostsAtom[] {
  let parsed: ParsedCostsPage;
  try {
    parsed = JSON.parse(rawPage) as ParsedCostsPage;
  } catch {
    throw new Error("OpenAI costs page is not valid JSON");
  }

  const amountLiterals = extractAmountLiteralsFromRawCostsPage(rawPage);
  let amountCursor = 0;

  const atoms: OpenAiCostsAtom[] = [];
  for (const bucket of parsed.data ?? []) {
    const sourceBucketStart = unixSecondsToIso(bucket.start_time);
    const sourceBucketEndExclusive =
      bucket.end_time === undefined ? null : unixSecondsToIso(bucket.end_time);
    for (const result of bucket.results ?? []) {
      if (
        result.object !== undefined &&
        result.object !== "organization.costs.result"
      ) {
        continue;
      }
      const projectId =
        typeof result.project_id === "string" ? result.project_id.trim() : "";
      if (!projectId) continue;
      if (result.amount == null) continue;

      const literal = amountLiterals[amountCursor];
      amountCursor += 1;
      if (!literal) {
        throw new Error(
          "OpenAI costs amount.value literal missing from raw page text",
        );
      }

      const currency = normalizeProviderCurrency(literal.currencyRaw);
      // Authoritative Money path: raw decimal literal → BigInt scale-8 (no Number).
      const providerAmount = canonicalProviderAmountString(
        literal.valueLiteral,
        currency,
      );
      atoms.push({
        sourceBucketStart,
        sourceBucketEndExclusive,
        project_id: projectId,
        line_item: result.line_item ?? null,
        currency,
        providerAmount,
      });
    }
  }
  return atoms;
}

export function mapAtomsToBilledPeriodFacts(input: {
  readonly projectId: string;
  readonly externalProjectId: string;
  readonly periodStart: string;
  readonly provider: string;
  readonly atoms: ReadonlyArray<OpenAiCostsAtom>;
  readonly sourceBatchId: string;
}): BilledPeriodFact[] {
  const facts: BilledPeriodFact[] = [];
  for (const atom of input.atoms) {
    if (atom.project_id !== input.externalProjectId) {
      throw new Error(
        `OpenAI costs external project mismatch: expected ${input.externalProjectId}, got ${atom.project_id}`,
      );
    }
    parseProviderMoneyString(atom.providerAmount, atom.currency);
    const bucketPeriod = computeUtcMonthPeriod(atom.sourceBucketStart)
      .periodStart.slice(0, 10);
    if (bucketPeriod !== input.periodStart) {
      throw new Error("OpenAI costs bucket period does not match requested periodStart");
    }
    const derivedSourceReference = buildDerivedSourceReference({
      provider: input.provider,
      externalProjectId: input.externalProjectId,
      sfiaProjectId: input.projectId,
      sourceBucketStart: atom.sourceBucketStart,
      sourceBucketEndExclusive: atom.sourceBucketEndExclusive,
      lineItem: atom.line_item,
      currency: atom.currency,
    });
    facts.push({
      projectId: input.projectId,
      externalProjectId: input.externalProjectId,
      periodStart: input.periodStart,
      provider: input.provider,
      sourceBucketStart: atom.sourceBucketStart,
      sourceBucketEndExclusive: atom.sourceBucketEndExclusive,
      lineItem: atom.line_item,
      providerAmount: atom.providerAmount,
      currency: atom.currency,
      derivedSourceReference,
      sourceBatchId: input.sourceBatchId,
    });
  }
  return facts;
}

export function buildOpenAiCostsSourceBatchId(input: {
  readonly externalProjectId: string;
  readonly sfiaProjectId: string;
  readonly periodStart: string;
  readonly coverageStart: string;
  readonly coverageEndExclusive: string;
  readonly atoms: ReadonlyArray<OpenAiCostsAtom>;
}): string {
  return buildBilledPeriodSourceBatchId({
    provider: "openai",
    externalProjectId: input.externalProjectId,
    sfiaProjectId: input.sfiaProjectId,
    periodStart: input.periodStart,
    adapterContractVersion: OPENAI_COSTS_ADAPTER_CONTRACT_VERSION,
    coverageStart: input.coverageStart,
    coverageEndExclusive: input.coverageEndExclusive,
    atoms: input.atoms.map((atom) => ({
      sourceBucketStart: atom.sourceBucketStart,
      sourceBucketEndExclusive: atom.sourceBucketEndExclusive,
      project_id: atom.project_id,
      line_item: atom.line_item,
      currency: atom.currency,
      providerAmount: atom.providerAmount,
    })),
  });
}

function unixSecondsToIsoUtc(unixSeconds: number): string {
  if (!Number.isFinite(unixSeconds) || !Number.isInteger(unixSeconds)) {
    throw new Error("OpenAI costs unix bound must be a finite integer");
  }
  return new Date(unixSeconds * 1000).toISOString();
}

export type FetchOpenAiOrganizationCostsInput = {
  readonly projectId: string;
  readonly externalProjectId: string;
  readonly periodStart: string;
  readonly startTimeUnix: number;
  readonly endTimeUnix?: number;
  readonly fetchImpl?: typeof fetch;
};

export async function fetchOpenAiOrganizationCostsPage(
  input: FetchOpenAiOrganizationCostsInput & { readonly page?: string | null },
): Promise<{ readonly raw: string; readonly nextPage: string | null }> {
  assertServerOnly();
  const adminKey = process.env.OPENAI_ADMIN_KEY;
  if (!adminKey) {
    throw new Error("OPENAI_ADMIN_KEY is required for OpenAI organization costs");
  }
  const params = new URLSearchParams();
  params.set("start_time", String(input.startTimeUnix));
  if (input.endTimeUnix !== undefined) {
    params.set("end_time", String(input.endTimeUnix));
  }
  params.set("bucket_width", "1d");
  params.append("project_ids[]", input.externalProjectId);
  params.append("group_by[]", "project_id");
  params.append("group_by[]", "line_item");
  if (input.page) params.set("page", input.page);

  const fetchImpl = input.fetchImpl ?? fetch;
  const response = await fetchImpl(
    `https://api.openai.com/v1/organization/costs?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${adminKey}`,
        "Content-Type": "application/json",
      },
    },
  );
  const raw = await response.text();
  if (!response.ok) {
    throw new Error(`OpenAI organization costs request failed: ${response.status}`);
  }
  const nextPageMatch = /"next_page"\s*:\s*(null|"([^"\\]|\\.)*")/.exec(raw);
  const nextPage =
    nextPageMatch === null
      ? null
      : nextPageMatch[1] === "null"
        ? null
        : JSON.parse(nextPageMatch[1]!) as string;
  return { raw, nextPage };
}

export async function fetchOpenAiOrganizationCostsSnapshot(
  input: FetchOpenAiOrganizationCostsInput,
): Promise<{
  readonly atoms: OpenAiCostsAtom[];
  readonly sourceBatchId: string;
  readonly facts: BilledPeriodFact[];
  readonly snapshot: {
    readonly completeness: "complete";
    readonly provider: "openai";
    readonly externalProjectId: string;
    readonly coverageStart: string;
    readonly coverageEndExclusive: string;
  };
}> {
  // COMPLETE snapshot requires an explicit bounded end — never invent Date.now.
  if (input.endTimeUnix === undefined || input.endTimeUnix === null) {
    throw new Error("OPENAI_COSTS_COMPLETE_SNAPSHOT_REQUIRES_BOUNDED_END");
  }

  const coverageStart = unixSecondsToIsoUtc(input.startTimeUnix);
  const coverageEndExclusive = unixSecondsToIsoUtc(input.endTimeUnix);

  const allAtoms: OpenAiCostsAtom[] = [];
  let page: string | null = null;
  do {
    const pageResult = await fetchOpenAiOrganizationCostsPage({ ...input, page });
    allAtoms.push(...parseCostsPageToAtoms(pageResult.raw));
    page = pageResult.nextPage;
  } while (page);

  const sourceBatchId = buildOpenAiCostsSourceBatchId({
    externalProjectId: input.externalProjectId,
    sfiaProjectId: input.projectId,
    periodStart: input.periodStart,
    coverageStart,
    coverageEndExclusive,
    atoms: allAtoms,
  });
  const facts = mapAtomsToBilledPeriodFacts({
    projectId: input.projectId,
    externalProjectId: input.externalProjectId,
    periodStart: input.periodStart,
    provider: "openai",
    atoms: allAtoms,
    sourceBatchId,
  });
  return {
    atoms: allAtoms,
    sourceBatchId,
    facts,
    snapshot: {
      completeness: "complete",
      provider: "openai",
      externalProjectId: input.externalProjectId,
      coverageStart,
      coverageEndExclusive,
    },
  };
}

export {
  OPENAI_COSTS_ADAPTER_CONTRACT_VERSION,
  buildDerivedSourceReference,
};

```

## REVIEW CONTENT COVERAGE

| path | status | content mode | coverage | reason if not FULL |
|---|---|---|---|---|
| `projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.aggregate.integration.test.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.billed-period-concurrency.integration.test.ts` | CREATED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/__tests__/oa/finops/postgres/t2.reconciliation.integration.test.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/__tests__/oa/finops/postgres/t4.enforcement-projection.integration.test.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/__tests__/oa/finops/postgres/t4.projection-refresh.integration.test.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/__tests__/oa/finops/t2.aggregate.unit.test.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/__tests__/oa/finops/t2.billed-period.unit.test.ts` | CREATED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/__tests__/oa/finops/t2.reconciliation.unit.test.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/__tests__/oa/finops/t3.alert-review.unit.test.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/__tests__/oa/finops/t4.enforcement.unit.test.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/__tests__/oa/finops/t4.projection-refresh.unit.test.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/db/migrations/1754600005000_finops-t2-billed-period-attribution.js` | CREATED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/lib/oa/finops/application/billedPeriodIdentity.ts` | CREATED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/lib/oa/finops/application/providerMoneyBoundary.ts` | CREATED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/lib/oa/finops/application/reconcileBilledPeriod.ts` | CREATED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/lib/oa/finops/application/reconcileProjectPeriod.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/lib/oa/finops/application/refreshEnforcementAfterT2.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/lib/oa/finops/application/t2Identity.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/lib/oa/finops/application/types.aggregate.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/lib/oa/finops/infrastructure/memory/memoryFinOpsT2.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsEnforcementProjectionStore.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsReconciliation.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/lib/oa/finops/ports/finopsReconciliationPort.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7Runtime.ts` | MODIFIED | FULL | COMPLETE |  |
| `projects/sfia-studio/app/lib/oa/finops/server/openaiOrganizationCostsAdapter.ts` | CREATED | FULL | COMPLETE |  |

Incomplete rows: 0
Synthesis-only: NO

## Reserves
- Live OpenAI Costs: OPEN
- R-T4-T3-SYNC-01: OPEN BEFORE MONITOR
- MONITOR: NOT ACTIVATED
- E1: NOT AUTHORIZED

## Instruction for ChatGPT
Read Git branch `sfia/review-handoff` file `sfia-review-handoff/latest-chatgpt-review.md`.
Verify base/HEAD, total diff, exploitable content for all files, coverageStart/End, no out-of-coverage tombstones, distinct empty snapshot sourceBatchIds, pre-write validation, T41–T50, PG-T01–04, no double count, T2-v1/T4 unchanged, reserves, tip/blob.
Do not conclude READY if a partial snapshot can still tombstone an out-of-coverage bucket.

## Cursor recommendation
NEXT = PR READINESS
NO MORE FINOPS DEVELOPMENT CYCLE
AFTER INTEGRATION = STOP FINOPS PHASE 1 — RETURN TO PRODUCT

## Proposed verdict
FINOPS SNAPSHOT COVERAGE FIX PASS — COMPLETE SNAPSHOT TEMPORALLY BOUNDED — OUT-OF-COVERAGE ATOMS PRESERVED — EMPTY SNAPSHOT IDENTITIES COVERAGE-SAFE — REPLAY IDEMPOTENT — POSTGRES COVERAGE ISOLATION PROVED — T2-V1 PRESERVED — T4 UNCHANGED — LIVE COSTS RESERVE OPEN — REVIEW HANDOFF COMPLETE — READY FOR PR READINESS
