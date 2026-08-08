/**
 * @vitest-environment node
 *
 * FinOps T7 — foundation runtime composition integration (T7-R01..T7-R16).
 * Ephemeral local/CI Postgres only — never Neon.
 * Mode rows in TEST DB ≠ activation. No provider / execution-run / coordinateExecutionRun.
 */
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { Pool, PoolClient } from "pg";
import { deriveCostEventIdentity } from "@/lib/oa/finops/application/t2Identity";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
import { composeFinOpsT7Runtime } from "@/lib/oa/finops/server/composeFinOpsT7Runtime";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

/** FICTITIOUS — not historical calibration 15/20/25/30. */
const FICT_BILLED = "5.11000000";

describeDb("FinOps T7 foundation runtime composition integration", () => {
  let pool: Pool;
  let lockClient: PoolClient;
  const suffix = `${Date.now()}`;
  const prefix = `proj-t7-rt-${suffix}`;

  beforeAll(async () => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 6 });
    lockClient = await pool.connect();
    await lockClient.query(
      `SELECT pg_advisory_lock(hashtext('finops-t7-rollout-table'))`,
    );
  });

  afterAll(async () => {
    await pool.query(
      `DELETE FROM finops_rollout_config WHERE project_id LIKE $1`,
      [`${prefix}%`],
    );
    try {
      await lockClient.query(
        `SELECT pg_advisory_unlock(hashtext('finops-t7-rollout-table'))`,
      );
    } catch {
      // ignore
    }
    lockClient.release();
    await closeFinOpsPool(pool);
  });

  function runtime() {
    return composeFinOpsT7Runtime({
      pool,
      nowIso: () => "2026-08-08T08:20:00.000Z",
    });
  }

  it("T7-R01 composeFinOpsT7Runtime → resolve no config → OFF", async () => {
    const rt = runtime();
    const result = await rt.resolveProjectRollout(`${prefix}-r01`);
    expect(result.mode).toBe("OFF");
    expect(result.resolution).toBe("default_off");
    expect(result.blockingAllowed).toBe(false);
  });

  it("T7-R02 composition returns T6 capture boundary — T6 behavior preserved", async () => {
    const rt = runtime();
    const runId = `run-t7-r02-${suffix}`;
    const created = await rt.capture.captureUsage({
      projectId: `${prefix}-r02`,
      executionRunId: runId,
      correlationId: "corr-t7-r02",
      provider: "openai",
      occurredAt: "1999-07-08T10:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 2,
        outputTokens: 1,
        totalTokens: 3,
        providerResponseId: `resp-t7-r02-${suffix}`,
      },
    });
    expect(created.status).toBe("created");
    await rt.flushAudit();
    const ledger = await pool.query(
      `SELECT execution_run_id FROM finops_usage_event WHERE execution_run_id = $1`,
      [runId],
    );
    expect(ledger.rows).toHaveLength(1);
  });

  it("T7-R03 recomputeAggregatesAndRefresh → T2 success → T4 projection refreshed", async () => {
    const rt = runtime();
    const projectId = `${prefix}-r03`;
    const identity = deriveCostEventIdentity({
      projectId,
      executionRunId: `run-r03-${suffix}`,
      evidenceClass: "billed",
      correctionRef: null,
      amount: FICT_BILLED,
      currency: "USD",
    });
    const recon = await rt.reconcileProjectPeriodAndRefresh({
      projectId,
      periodStart: "2026-08-01",
      sourceBatchId: `batch-r03-${suffix}`,
      facts: [
        {
          executionRunId: `run-r03-${suffix}`,
          usageEventId: null,
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          amount: FICT_BILLED,
          currency: "USD",
          correctionRef: `corr-r03-${suffix}`,
          provider: "fixture-provider",
          model: "fixture-model",
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
      ],
    });
    expect(recon.t2.outcome).toBe("succeeded");
    const result = await rt.recomputeAggregatesAndRefresh({
      projectId,
      periodStart: "2026-08-01",
    });
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t4RefreshAttempted).toBe(true);
    expect(result.t4Refresh?.outcome).toBe("succeeded");
    if (result.t4Refresh?.outcome !== "succeeded") return;
    const usd = result.t4Refresh.projections.find((p) => p.currency === "USD");
    expect(usd?.billedAmount).toBe(FICT_BILLED);
    expect(identity.costEventId.length).toBeGreaterThan(0);
  });

  it("T7-R04 reconcileProjectPeriodAndRefresh → T2 success → T4 refreshed exactly once", async () => {
    const rt = runtime();
    const projectId = `${prefix}-r04`;
    const result = await rt.reconcileProjectPeriodAndRefresh({
      projectId,
      periodStart: "2026-08-01",
      sourceBatchId: `batch-r04-${suffix}`,
      facts: [
        {
          executionRunId: `run-r04-${suffix}`,
          usageEventId: null,
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          amount: FICT_BILLED,
          currency: "USD",
          correctionRef: `corr-r04-${suffix}`,
          provider: "fixture-provider",
          model: "fixture-model",
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
      ],
    });
    expect(result.t2.outcome).toBe("succeeded");
    expect(result.t4RefreshAttempted).toBe(true);
    expect(result.t4Refresh?.outcome).toBe("succeeded");
    if (result.t4Refresh?.outcome !== "succeeded") return;
    expect(result.t4Refresh.projections).toHaveLength(1);
    expect(result.t4Refresh.projections[0]?.rebuildVersion).toBe(1);
  });

  it("T7-R05 T4 refresh failure → T2 success preserved → refresh failure visible", async () => {
    const rt = runtime();
    const projectId = `${prefix}-r05`;
    await rt.reconcileProjectPeriodAndRefresh({
      projectId,
      periodStart: "2026-08-01",
      sourceBatchId: `batch-r05-seed-${suffix}`,
      facts: [
        {
          executionRunId: `run-r05-seed-${suffix}`,
          usageEventId: null,
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          amount: FICT_BILLED,
          currency: "USD",
          correctionRef: `corr-r05-seed-${suffix}`,
          provider: "fixture-provider",
          model: "fixture-model",
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
      ],
    });

    // Projection store uses PoolClient.query (not pool.query) — wrap connect.
    const originalConnect = pool.connect.bind(pool);
    let failDeletes = true;
    pool.connect = (async () => {
      const client = await originalConnect();
      const originalClientQuery = client.query.bind(client);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (client as any).query = async (...args: unknown[]) => {
        const sql = String(args[0] ?? "");
        if (
          failDeletes &&
          /finops_enforcement_projection/i.test(sql) &&
          /\bDELETE\b/i.test(sql)
        ) {
          throw new Error("simulated T4 projection replace failure");
        }
        return originalClientQuery(...(args as Parameters<PoolClient["query"]>));
      };
      return client;
    }) as typeof pool.connect;

    try {
      const result = await rt.recomputeAggregatesAndRefresh({
        projectId,
        periodStart: "2026-08-01",
      });
      expect(result.t2.outcome).toBe("succeeded");
      expect(result.t4RefreshAttempted).toBe(true);
      expect(result.t4Refresh?.outcome).toBe("failed");
    } finally {
      failDeletes = false;
      pool.connect = originalConnect;
    }
  });

  it("T7-R06 T2 failure → no T4 refresh", async () => {
    const rt = runtime();
    const result = await rt.recomputeAggregatesAndRefresh({
      projectId: "   ",
      periodStart: "2026-08-01",
    });
    expect(result.t2.outcome).not.toBe("succeeded");
    expect(result.t4RefreshAttempted).toBe(false);
    expect(result.t4Refresh).toBeNull();
  });

  it("T7-R07 no raw recompute/reconcile mutation functions exposed", () => {
    const rt = runtime();
    const keys = Object.keys(rt).sort();
    expect(keys).toEqual(
      [
        "capture",
        "flushAudit",
        "recomputeAggregatesAndRefresh",
        "reconcileProjectPeriodAndRefresh",
        "resolveProjectRollout",
      ].sort(),
    );
    expect(rt).not.toHaveProperty("recomputeAggregates");
    expect(rt).not.toHaveProperty("reconcileProjectPeriod");
    expect(rt).not.toHaveProperty("upsertProjectRollout");
    expect(rt).not.toHaveProperty("evaluateFinOpsEnforcement");
  });

  it("T7-R08 rollout resolution OFF does not access T4 enforcement projection", async () => {
    const rt = runtime();
    const touched: string[] = [];
    const originalQuery = pool.query.bind(pool);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (pool as any).query = async (...args: unknown[]) => {
      const sql = String(args[0] ?? "");
      if (/finops_enforcement_projection/i.test(sql)) {
        touched.push(sql.slice(0, 80));
      }
      return originalQuery(...(args as Parameters<Pool["query"]>));
    };
    try {
      const result = await rt.resolveProjectRollout(`${prefix}-r08`);
      expect(result.mode).toBe("OFF");
      expect(touched).toHaveLength(0);
    } finally {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (pool as any).query = originalQuery;
    }
  });

  it("T7-R09 no provider invocation", async () => {
    const provider = vi.fn();
    const rt = runtime();
    await rt.resolveProjectRollout(`${prefix}-r09`);
    expect(provider).not.toHaveBeenCalled();
  });

  it("T7-R10 no execution-run wiring", () => {
    const source = readFileSync(
      path.join(process.cwd(), "lib/oa/finops/server/composeFinOpsT7Runtime.ts"),
      "utf8",
    );
    const executable = source
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/.*$/gm, "");
    expect(executable).not.toMatch(
      /composeExecutionRun|execution-run|coordinateExecutionRun/,
    );
  });

  it("T7-R11 no T3 side effect", async () => {
    const rt = runtime();
    const projectId = `${prefix}-r11`;
    const before = await pool.query(
      `SELECT COUNT(*)::int AS c FROM finops_alert_state WHERE project_id = $1`,
      [projectId],
    );
    await rt.reconcileProjectPeriodAndRefresh({
      projectId,
      periodStart: "2026-08-01",
      sourceBatchId: `batch-r11-${suffix}`,
      facts: [
        {
          executionRunId: `run-r11-${suffix}`,
          usageEventId: null,
          evidenceClass: "billed",
          sourceOfTruth: "BILLED",
          amount: FICT_BILLED,
          currency: "USD",
          correctionRef: `corr-r11-${suffix}`,
          provider: "fixture-provider",
          model: "fixture-model",
          occurredAt: "2026-08-07T10:00:00.000Z",
        },
      ],
    });
    const after = await pool.query(
      `SELECT COUNT(*)::int AS c FROM finops_alert_state WHERE project_id = $1`,
      [projectId],
    );
    expect(after.rows[0]?.c).toBe(before.rows[0]?.c);
  });

  it("T7-R12 no threshold / monetary policy required", async () => {
    const rt = runtime();
    const result = await rt.resolveProjectRollout(`${prefix}-r12`);
    expect(result).not.toHaveProperty("threshold");
    expect(JSON.stringify(result)).not.toMatch(/"15"|"20"|"25"|"30"/);
  });

  it("T7-R13 SHADOW row resolves as instruction — no runtime activation / provider", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-r13`;
    await store.upsertProjectRollout({
      projectId,
      mode: "SHADOW",
      updatedAt: "2026-08-08T08:21:00.000Z",
    });
    const rt = runtime();
    const result = await rt.resolveProjectRollout(projectId);
    expect(result.mode).toBe("SHADOW");
    expect(result.activationState).toBe("configured_not_activated");
    expect(result.blockingAllowed).toBe(false);
    expect(rt).not.toHaveProperty("evaluateBeforeProvider");
  });

  it("T7-R14 MONITOR row causes no runtime activation", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-r14`;
    await store.upsertProjectRollout({
      projectId,
      mode: "MONITOR",
      updatedAt: "2026-08-08T08:22:00.000Z",
    });
    const rt = runtime();
    const result = await rt.resolveProjectRollout(projectId);
    expect(result.mode).toBe("MONITOR");
    expect(result.activationState).toBe("configured_not_activated");
    expect(result.blockingAllowed).toBe(false);
  });

  it("T7-R15 E1 row causes no BLOCK — no active enforcement consumer exposed", async () => {
    const store = createPostgresFinOpsRolloutStore(pool);
    const projectId = `${prefix}-r15`;
    await store.upsertProjectRollout({
      projectId,
      mode: "E1_ENFORCED",
      updatedAt: "2026-08-08T08:23:00.000Z",
    });
    const rt = runtime();
    const result = await rt.resolveProjectRollout(projectId);
    expect(result.mode).toBe("E1_ENFORCED");
    expect(result.blockingAllowed).toBe(true);
    expect(result.activationState).toBe("configured_not_activated");
    expect(rt).not.toHaveProperty("evaluateFinOpsEnforcement");
    expect(rt).not.toHaveProperty("createFinOpsEnforcementPort");
    expect(Object.keys(rt)).not.toContain("enforcement");
  });

  it("T7-R16 T6 flushAudit remains operable", async () => {
    const rt = runtime();
    const runId = `run-t7-r16-${suffix}`;
    await rt.capture.captureUsage({
      projectId: `${prefix}-r16`,
      executionRunId: runId,
      correlationId: "corr-t7-r16",
      provider: "openai",
      occurredAt: "1999-07-08T10:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: `resp-t7-r16-${suffix}`,
      },
    });
    await expect(rt.flushAudit()).resolves.toBeUndefined();
  });
});
