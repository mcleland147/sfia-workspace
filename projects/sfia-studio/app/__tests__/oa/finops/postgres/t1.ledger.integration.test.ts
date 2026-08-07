/**
 * @vitest-environment node
 *
 * Requires DATABASE_URL (and preferably DATABASE_URL_DIRECT) pointing at an
 * ephemeral local/CI Postgres — never Neon.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createFinOpsPool, closeFinOpsPool } from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsUsageLedger } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger";
import { buildUsageEvent } from "@/lib/oa/finops/application/buildUsageEvent";
import type { Pool } from "pg";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("FinOps T1 PostgreSQL integration", () => {
  let pool: Pool;

  beforeAll(() => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 4 });
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  it("has finops_usage_event table and constraints without money columns", async () => {
    const cols = await pool.query<{ column_name: string }>(
      `SELECT column_name FROM information_schema.columns
       WHERE table_name = 'finops_usage_event'
       ORDER BY column_name`,
    );
    const names = cols.rows.map((r) => r.column_name);
    expect(names).toContain("event_id");
    expect(names).toContain("dedup_key");
    expect(names).not.toContain("cost");
    expect(names).not.toContain("cost_minor");
    expect(names).not.toContain("cost_numeric");
    expect(names).not.toContain("currency");
    expect(names).not.toContain("currency_code");
  });

  it("inserts created then duplicate for identical event", async () => {
    const ledger = createPostgresFinOpsUsageLedger(pool);
    const built = buildUsageEvent({
      projectId: "proj-db",
      executionRunId: `run-${Date.now()}-a`,
      correlationId: "corr-db-a",
      provider: "openai",
      occurredAt: "2026-08-06T22:05:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 11,
        outputTokens: 7,
        totalTokens: 18,
        model: "gpt-test",
        providerResponseId: `resp-${Date.now()}-a`,
      },
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const first = await ledger.insertUsageEvent(built.event, built.fingerprint);
    const second = await ledger.insertUsageEvent(built.event, built.fingerprint);
    expect(first.outcome).toBe("created");
    expect(second.outcome).toBe("duplicate");
  });

  it("handles concurrent identical inserts with one created and rest duplicate", async () => {
    const ledger = createPostgresFinOpsUsageLedger(pool);
    const built = buildUsageEvent({
      projectId: "proj-db",
      executionRunId: `run-concurrent-${Date.now()}`,
      correlationId: "corr-concurrent",
      provider: "openai",
      occurredAt: "2026-08-06T22:05:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: `resp-concurrent-${Date.now()}`,
      },
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const results = await Promise.all(
      Array.from({ length: 8 }, () =>
        ledger.insertUsageEvent(built.event, built.fingerprint),
      ),
    );
    const created = results.filter((r) => r.outcome === "created");
    const duplicates = results.filter((r) => r.outcome === "duplicate");
    expect(created.length).toBe(1);
    expect(duplicates.length).toBe(7);
  });

  it("returns structured conflict when dedup matches but fingerprint diverges", async () => {
    const ledger = createPostgresFinOpsUsageLedger(pool);
    const providerResponseId = `resp-conflict-${Date.now()}`;
    const firstBuilt = buildUsageEvent({
      projectId: "proj-db",
      executionRunId: `run-conflict-${Date.now()}`,
      correlationId: "corr-conflict",
      provider: "openai",
      occurredAt: "2026-08-06T22:05:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 2,
        outputTokens: 2,
        totalTokens: 4,
        providerResponseId,
      },
    });
    expect(firstBuilt.ok).toBe(true);
    if (!firstBuilt.ok) return;
    const inserted = await ledger.insertUsageEvent(
      firstBuilt.event,
      firstBuilt.fingerprint,
    );
    expect(inserted.outcome).toBe("created");

    const diverged = {
      ...firstBuilt.event,
      inputTokens: 99,
      totalTokens: 101,
    };
    const divergedFp = {
      ...firstBuilt.fingerprint,
      inputTokens: 99,
      totalTokens: 101,
    };
    const conflict = await ledger.insertUsageEvent(diverged, divergedFp);
    expect(conflict.outcome).toBe("conflict");
    if (conflict.outcome === "conflict") {
      expect(conflict.error.code).toBe("FINOPS_DEDUP_CONFLICT");
    }
  });

  it("rejects negative tokens via DB check", async () => {
    await expect(
      pool.query(
        `INSERT INTO finops_usage_event (
          event_id, dedup_key, project_id, execution_run_id, provider,
          occurred_at, period_start, source_of_truth, evidence_class,
          input_tokens, usage_status
        ) VALUES (
          'evt_neg', 'dedup_neg', 'p', 'r', 'openai',
          NOW(), '2026-08-01', 'API_USAGE', 'observed',
          -1, 'validated'
        )`,
      ),
    ).rejects.toBeTruthy();
  });

  it("rejects tokens above MAX_SAFE_INTEGER via DB check", async () => {
    await expect(
      pool.query(
        `INSERT INTO finops_usage_event (
          event_id, dedup_key, project_id, execution_run_id, provider,
          occurred_at, period_start, source_of_truth, evidence_class,
          input_tokens, usage_status
        ) VALUES (
          'evt_oversafe', 'dedup_oversafe', 'p', 'r', 'openai',
          NOW(), '2026-08-01', 'API_USAGE', 'observed',
          9007199254740992, 'validated'
        )`,
      ),
    ).rejects.toBeTruthy();
  });

  it("preserves MAX_SAFE_INTEGER in duplicate fingerprint without precision loss", async () => {
    const ledger = createPostgresFinOpsUsageLedger(pool);
    const built = buildUsageEvent({
      projectId: "proj-db",
      executionRunId: `run-safeint-${Date.now()}`,
      correlationId: "corr-safeint",
      provider: "openai",
      occurredAt: "2026-08-06T22:05:00.000Z",
      usage: {
        status: "validated",
        inputTokens: Number.MAX_SAFE_INTEGER,
        outputTokens: 0,
        totalTokens: Number.MAX_SAFE_INTEGER,
        providerResponseId: `resp-safeint-${Date.now()}`,
      },
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const first = await ledger.insertUsageEvent(built.event, built.fingerprint);
    const second = await ledger.insertUsageEvent(built.event, built.fingerprint);
    expect(first.outcome).toBe("created");
    expect(second.outcome).toBe("duplicate");
    expect(built.fingerprint.inputTokens).toBe(Number.MAX_SAFE_INTEGER);
  });

  it("forbids UPDATE and DELETE via append-only trigger", async () => {
    const id = `evt_immut_${Date.now()}`;
    const dedup = `dedup_immut_${Date.now()}`;
    await pool.query(
      `INSERT INTO finops_usage_event (
        event_id, dedup_key, project_id, execution_run_id, provider,
        occurred_at, period_start, source_of_truth, evidence_class,
        input_tokens, usage_status
      ) VALUES (
        $1, $2, 'p', 'r', 'openai',
        NOW(), '2026-08-01', 'API_USAGE', 'observed',
        1, 'validated'
      )`,
      [id, dedup],
    );
    await expect(
      pool.query(`UPDATE finops_usage_event SET provider = 'x' WHERE event_id = $1`, [
        id,
      ]),
    ).rejects.toThrow(/append-only/i);
    await expect(
      pool.query(`DELETE FROM finops_usage_event WHERE event_id = $1`, [id]),
    ).rejects.toThrow(/append-only/i);
  });

  it("supports restart-safe behavior across two pools", async () => {
    const poolB = createFinOpsPool({ connectionString: DATABASE_URL, max: 2 });
    try {
      const ledgerA = createPostgresFinOpsUsageLedger(pool);
      const ledgerB = createPostgresFinOpsUsageLedger(poolB);
      const built = buildUsageEvent({
        projectId: "proj-db",
        executionRunId: `run-restart-${Date.now()}`,
        correlationId: "corr-restart",
        provider: "openai",
        occurredAt: "2026-08-06T22:05:00.000Z",
        usage: {
          status: "validated",
          inputTokens: 5,
          outputTokens: 5,
          totalTokens: 10,
          providerResponseId: `resp-restart-${Date.now()}`,
        },
      });
      expect(built.ok).toBe(true);
      if (!built.ok) return;
      const a = await ledgerA.insertUsageEvent(built.event, built.fingerprint);
      const b = await ledgerB.insertUsageEvent(built.event, built.fingerprint);
      expect(a.outcome).toBe("created");
      expect(b.outcome).toBe("duplicate");
    } finally {
      await closeFinOpsPool(poolB);
    }
  });

  it("sanitizes connection failures", async () => {
    const badPool = createFinOpsPool({
      connectionString:
        "postgres://sfia_ci:sfia_ci_local_only@127.0.0.1:1/sfia_studio_finops_t1",
      connectionTimeoutMillis: 500,
      max: 1,
    });
    try {
      const ledger = createPostgresFinOpsUsageLedger(badPool);
      const built = buildUsageEvent({
        projectId: "proj-db",
        executionRunId: "run-bad",
        correlationId: "corr-bad",
        provider: "openai",
        occurredAt: "2026-08-06T22:05:00.000Z",
        usage: { status: "unavailable", reason: "x" },
      });
      expect(built.ok).toBe(true);
      if (!built.ok) return;
      const result = await ledger.insertUsageEvent(
        built.event,
        built.fingerprint,
      );
      expect(result.outcome).toBe("failed");
      if (result.outcome === "failed") {
        expect(result.error.code).toBe("FINOPS_DB_UNAVAILABLE");
        expect(result.error.retryable).toBe(true);
        expect(result.error.message).not.toMatch(/postgres:\/\/|password|127\.0\.0\.1/i);
        expect(result.error.technicalDetailsRedacted).toBe(true);
      }
    } finally {
      await closeFinOpsPool(badPool);
    }
  });
});
