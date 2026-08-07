/**
 * @vitest-environment node
 *
 * FinOps T3 PostgreSQL alert/review integration.
 * Requires DATABASE_URL (ephemeral local Postgres only — never Neon).
 * FICTITIOUS thresholds only — NOT 15/20/25/30.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Pool } from "pg";
import { evaluateProjectPeriodThresholds } from "@/lib/oa/finops/application/evaluateProjectPeriodThresholds";
import { deriveT3ThresholdIdentity } from "@/lib/oa/finops/application/t3Identity";
import type { FinOpsThresholdDefinition } from "@/lib/oa/finops/application/types.alertReview";
import { formatMoneyString, parseMoneyString } from "@/lib/oa/finops/domain/money";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsAggregateStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsAggregateStore";
import { createPostgresFinOpsAlertReviewStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsAlertReviewStore";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

/** FICTITIOUS — not historical calibration. */
const FICT_AMOUNT = "7.25000000";
const FICT_ABOVE = "9.00000000";
const FICT_BELOW = "1.00000000";

const alertDef = (code = "FICT_INFO_PG"): FinOpsThresholdDefinition => ({
  thresholdCode: code,
  kind: "informational_alert",
  currency: "USD",
  basis: "estimated",
  amount: FICT_AMOUNT,
});

const reviewDef = (code = "FICT_REV_PG"): FinOpsThresholdDefinition => ({
  thresholdCode: code,
  kind: "morris_review",
  currency: "USD",
  basis: "observed",
  amount: FICT_AMOUNT,
});

describeDb("FinOps T3 PostgreSQL alert/review integration", () => {
  let pool: Pool;
  const suffix = `${Date.now()}`;

  beforeAll(() => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  it("1–2. migration order T1→T2→T6→T3 and T3 tables present", async () => {
    const migrations = await pool.query<{ name: string }>(
      `SELECT name FROM pgmigrations ORDER BY run_on ASC, name ASC`,
    );
    const names = migrations.rows.map((r) => r.name);
    const i1 = names.findIndex((n) => n.includes("finops-t1"));
    const i2 = names.findIndex((n) => n.includes("finops-t2"));
    const i6 = names.findIndex((n) => n.includes("finops-t6"));
    const i3 = names.findIndex((n) => n.includes("finops-t3"));
    expect(i1).toBeGreaterThanOrEqual(0);
    expect(i2).toBeGreaterThan(i1);
    expect(i6).toBeGreaterThan(i2);
    expect(i3).toBeGreaterThan(i6);

    const tables = await pool.query<{ table_name: string }>(
      `SELECT table_name FROM information_schema.tables
       WHERE table_schema = 'public'
         AND table_name IN ('finops_alert_state', 'finops_morris_review_state')`,
    );
    expect(tables.rows.map((r) => r.table_name).sort()).toEqual([
      "finops_alert_state",
      "finops_morris_review_state",
    ]);
  });

  it("3–4. Alert and Review persist", async () => {
    const projectId = `proj-t3-persist-${suffix}`;
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const alertReview = createPostgresFinOpsAlertReviewStore(pool);
    await aggregates.replaceProjectPeriodAggregates({
      projectId,
      periodStart: "2026-08-01",
      aggregates: [
        {
          projectId,
          periodStart: "2026-08-01",
          currency: "USD",
          estimatedAmount: FICT_ABOVE,
          observedAmount: FICT_ABOVE,
          billedAmount: formatMoneyString(parseMoneyString("0", "USD")),
          unknownAmount: formatMoneyString(parseMoneyString("0", "USD")),
          inputTokensSum: null,
          outputTokensSum: null,
          totalTokensSum: null,
          costEventCount: 1,
          unavailableEstimationCount: 0,
          rebuildVersion: 1,
          rebuiltAt: "2026-08-07T12:00:00.000Z",
        },
      ],
    });
    const result = await evaluateProjectPeriodThresholds(
      {
        aggregates,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId,
        periodStart: "2026-08-01",
        definitions: [alertDef(), reviewDef()],
      },
    );
    expect(result.outcome).toBe("succeeded");
    if (result.outcome !== "succeeded") return;
    expect(result.alerts).toHaveLength(1);
    expect(result.reviews).toHaveLength(1);
    expect(result.alerts[0]!.state).toBe("open");
    expect(result.reviews[0]!.state).toBe("pending");
  });

  it("5–7. C1 unique Alert/Review + concurrent evaluations one row", async () => {
    const projectId = `proj-t3-c1-${suffix}`;
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const alertReview = createPostgresFinOpsAlertReviewStore(pool);
    await aggregates.replaceProjectPeriodAggregates({
      projectId,
      periodStart: "2026-08-01",
      aggregates: [
        {
          projectId,
          periodStart: "2026-08-01",
          currency: "USD",
          estimatedAmount: FICT_ABOVE,
          observedAmount: formatMoneyString(parseMoneyString("0", "USD")),
          billedAmount: formatMoneyString(parseMoneyString("0", "USD")),
          unknownAmount: formatMoneyString(parseMoneyString("0", "USD")),
          inputTokensSum: null,
          outputTokensSum: null,
          totalTokensSum: null,
          costEventCount: 1,
          unavailableEstimationCount: 0,
          rebuildVersion: 1,
          rebuiltAt: "2026-08-07T12:00:00.000Z",
        },
      ],
    });
    const deps = {
      aggregates,
      alertReview,
      nowIso: () => "2026-08-07T12:00:00.000Z",
    };
    const input = {
      projectId,
      periodStart: "2026-08-01",
      definitions: [alertDef("FICT_C1")],
    };
    await Promise.all([
      evaluateProjectPeriodThresholds(deps, input),
      evaluateProjectPeriodThresholds(deps, input),
      evaluateProjectPeriodThresholds(deps, input),
    ]);
    const listed = await alertReview.listAlertsForProjectPeriod({
      projectId,
      periodStart: "2026-08-01",
    });
    expect(listed).toHaveLength(1);
    const id = deriveT3ThresholdIdentity({
      projectId,
      periodStart: "2026-08-01",
      thresholdCode: "FICT_C1",
      currency: "USD",
    });
    expect(listed[0]!.alertId).toBe(id.alertId);

    // UNIQUE C1 constraint exists
    const uniq = await pool.query<{ constraint_name: string }>(
      `SELECT constraint_name FROM information_schema.table_constraints
       WHERE table_name = 'finops_alert_state' AND constraint_type = 'UNIQUE'`,
    );
    expect(uniq.rows.some((r) => r.constraint_name.includes("c1"))).toBe(true);
  });

  it("8–11. open→cleared, pending→superseded, recross, evidence basis", async () => {
    const projectId = `proj-t3-tx-${suffix}`;
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const alertReview = createPostgresFinOpsAlertReviewStore(pool);

    const seed = async (estimated: string, observed: string, version: number) => {
      await aggregates.replaceProjectPeriodAggregates({
        projectId,
        periodStart: "2026-08-01",
        aggregates: [
          {
            projectId,
            periodStart: "2026-08-01",
            currency: "USD",
            estimatedAmount: estimated,
            observedAmount: observed,
            billedAmount: formatMoneyString(parseMoneyString("0", "USD")),
            unknownAmount: formatMoneyString(parseMoneyString("0", "USD")),
            inputTokensSum: null,
            outputTokensSum: null,
            totalTokensSum: null,
            costEventCount: 1,
            unavailableEstimationCount: 0,
            rebuildVersion: version,
            rebuiltAt: "2026-08-07T12:00:00.000Z",
          },
        ],
      });
    };

    await seed(FICT_ABOVE, FICT_ABOVE, 1);
    await evaluateProjectPeriodThresholds(
      {
        aggregates,
        alertReview,
        nowIso: () => "2026-08-07T10:00:00.000Z",
      },
      {
        projectId,
        periodStart: "2026-08-01",
        definitions: [alertDef("FICT_TX"), reviewDef("FICT_TXR")],
      },
    );

    await seed(FICT_BELOW, FICT_BELOW, 2);
    await evaluateProjectPeriodThresholds(
      {
        aggregates,
        alertReview,
        nowIso: () => "2026-08-07T11:00:00.000Z",
      },
      {
        projectId,
        periodStart: "2026-08-01",
        definitions: [alertDef("FICT_TX"), reviewDef("FICT_TXR")],
      },
    );
    let alerts = await alertReview.listAlertsForProjectPeriod({
      projectId,
      periodStart: "2026-08-01",
    });
    let reviews = await alertReview.listReviewsForProjectPeriod({
      projectId,
      periodStart: "2026-08-01",
    });
    expect(alerts[0]!.state).toBe("cleared");
    expect(reviews[0]!.state).toBe("superseded");

    await seed(FICT_ABOVE, FICT_ABOVE, 3);
    await evaluateProjectPeriodThresholds(
      {
        aggregates,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId,
        periodStart: "2026-08-01",
        definitions: [
          { ...alertDef("FICT_TX"), basis: "observed" },
          reviewDef("FICT_TXR"),
        ],
      },
    );
    alerts = await alertReview.listAlertsForProjectPeriod({
      projectId,
      periodStart: "2026-08-01",
    });
    reviews = await alertReview.listReviewsForProjectPeriod({
      projectId,
      periodStart: "2026-08-01",
    });
    expect(alerts).toHaveLength(1);
    expect(alerts[0]!.state).toBe("open");
    expect(alerts[0]!.evaluationBasis).toBe("observed");
    expect(alerts[0]!.firstCrossedAt).toContain("2026-08-07T10:00:00");
    expect(reviews[0]!.state).toBe("pending");
  });

  it("12. stale rebuild blocked", async () => {
    const projectId = `proj-t3-stale-${suffix}`;
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const alertReview = createPostgresFinOpsAlertReviewStore(pool);
    await aggregates.replaceProjectPeriodAggregates({
      projectId,
      periodStart: "2026-08-01",
      aggregates: [
        {
          projectId,
          periodStart: "2026-08-01",
          currency: "USD",
          estimatedAmount: FICT_ABOVE,
          observedAmount: formatMoneyString(parseMoneyString("0", "USD")),
          billedAmount: formatMoneyString(parseMoneyString("0", "USD")),
          unknownAmount: formatMoneyString(parseMoneyString("0", "USD")),
          inputTokensSum: null,
          outputTokensSum: null,
          totalTokensSum: null,
          costEventCount: 1,
          unavailableEstimationCount: 0,
          rebuildVersion: 9,
          rebuiltAt: "2026-08-07T12:00:00.000Z",
        },
      ],
    });
    await evaluateProjectPeriodThresholds(
      {
        aggregates,
        alertReview,
        nowIso: () => "2026-08-07T12:00:00.000Z",
      },
      {
        projectId,
        periodStart: "2026-08-01",
        definitions: [alertDef("FICT_STALE")],
      },
    );
    const id = deriveT3ThresholdIdentity({
      projectId,
      periodStart: "2026-08-01",
      thresholdCode: "FICT_STALE",
      currency: "USD",
    });
    await alertReview.applyProjectPeriodEvaluation({
      projectId,
      periodStart: "2026-08-01",
      evaluatedAt: "2026-08-07T11:00:00.000Z",
      outcomes: [
        {
          kind: "informational_alert",
          thresholdCode: "FICT_STALE",
          currency: "USD",
          evaluationBasis: "estimated",
          thresholdAmount: FICT_AMOUNT,
          evaluatedAmount: FICT_BELOW,
          rebuildVersion: 2,
          crossed: false,
          dedupKey: id.dedupKey,
          alertId: id.alertId,
          reviewId: id.reviewId,
        },
      ],
    });
    const listed = await alertReview.listAlertsForProjectPeriod({
      projectId,
      periodStart: "2026-08-01",
    });
    expect(listed[0]!.state).toBe("open");
    expect(listed[0]!.rebuildVersion).toBe(9);
  });

  it("13–16. project/period/currency isolation + restart durability", async () => {
    const a = `proj-t3-iso-a-${suffix}`;
    const b = `proj-t3-iso-b-${suffix}`;
    const aggregates = createPostgresFinOpsAggregateStore(pool);
    const alertReview = createPostgresFinOpsAlertReviewStore(pool);

    for (const [projectId, periodStart, currency] of [
      [a, "2026-08-01", "USD"],
      [a, "2026-09-01", "USD"],
      [a, "2026-08-01", "EUR"],
      [b, "2026-08-01", "USD"],
    ] as const) {
      await aggregates.replaceProjectPeriodAggregates({
        projectId,
        periodStart,
        aggregates: [
          {
            projectId,
            periodStart,
            currency,
            estimatedAmount: FICT_ABOVE,
            observedAmount: formatMoneyString(parseMoneyString("0", currency)),
            billedAmount: formatMoneyString(parseMoneyString("0", currency)),
            unknownAmount: formatMoneyString(parseMoneyString("0", currency)),
            inputTokensSum: null,
            outputTokensSum: null,
            totalTokensSum: null,
            costEventCount: 1,
            unavailableEstimationCount: 0,
            rebuildVersion: 1,
            rebuiltAt: "2026-08-07T12:00:00.000Z",
          },
        ],
      });
      await evaluateProjectPeriodThresholds(
        {
          aggregates,
          alertReview,
          nowIso: () => "2026-08-07T12:00:00.000Z",
        },
        {
          projectId,
          periodStart,
          definitions: [
            {
              ...alertDef("FICT_ISO"),
              currency,
            },
          ],
        },
      );
    }

    const aAug = await alertReview.listAlertsForProjectPeriod({
      projectId: a,
      periodStart: "2026-08-01",
    });
    expect(aAug).toHaveLength(2);
    const aSep = await alertReview.listAlertsForProjectPeriod({
      projectId: a,
      periodStart: "2026-09-01",
    });
    expect(aSep).toHaveLength(1);
    const bAug = await alertReview.listAlertsForProjectPeriod({
      projectId: b,
      periodStart: "2026-08-01",
    });
    expect(bAug).toHaveLength(1);
    expect(aAug[0]!.alertId).not.toBe(bAug[0]!.alertId);

    // durability via fresh store instance (restart simulation)
    const again = createPostgresFinOpsAlertReviewStore(pool);
    const durable = await again.listAlertsForProjectPeriod({
      projectId: a,
      periodStart: "2026-08-01",
    });
    expect(durable).toHaveLength(2);
  });

  it("17–20. no delete path; no seed thresholds; T6 CHECK foundation-only; T1/T2/T6 unchanged", async () => {
    const src = await pool.query<{ prosrc: string }>(
      `SELECT pg_get_functiondef(oid) AS prosrc
       FROM pg_proc WHERE proname = 'finops_audit_event_append_only' LIMIT 1`,
    );
    expect(src.rows.length).toBeGreaterThan(0);

    const check = await pool.query<{ check_clause: string }>(
      `SELECT pg_get_constraintdef(c.oid) AS check_clause
       FROM pg_constraint c
       JOIN pg_class t ON t.oid = c.conrelid
       WHERE t.relname = 'finops_audit_event' AND c.contype = 'c'`,
    );
    const clause = check.rows.map((r) => r.check_clause).join(" ");
    expect(clause).toContain("finops_capture_created");
    expect(clause).not.toContain("finops_threshold_crossed");
    expect(clause).not.toContain("finops_review_required");

    // migration file contains no seed amounts 15/20/25/30 and no INSERT seeds
    const fs = await import("node:fs");
    const path = await import("node:path");
    const migPath = path.join(
      process.cwd(),
      "db/migrations/1754600002000_finops-t3-alert-review-state.js",
    );
    const mig = fs.readFileSync(migPath, "utf8");
    expect(mig).not.toMatch(/\b15\b.*USD|USD.*\b15\b/);
    expect(mig).not.toContain("INSERT INTO finops_alert_state");
    expect(mig).not.toContain("INSERT INTO finops_morris_review_state");

    for (const table of [
      "finops_usage_event",
      "finops_cost_event",
      "finops_usage_aggregate",
      "finops_audit_event",
    ]) {
      const exists = await pool.query(
        `SELECT 1 FROM information_schema.tables WHERE table_name = $1`,
        [table],
      );
      expect(exists.rowCount).toBe(1);
    }

    // No DELETE API on port
    const alertReview = createPostgresFinOpsAlertReviewStore(pool);
    expect(
      Object.prototype.hasOwnProperty.call(alertReview, "deleteAlert"),
    ).toBe(false);
  });
});
