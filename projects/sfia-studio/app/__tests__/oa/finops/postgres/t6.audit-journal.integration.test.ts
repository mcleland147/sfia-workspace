/**
 * @vitest-environment node
 *
 * Requires DATABASE_URL pointing at ephemeral local/CI Postgres — never Neon.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Pool } from "pg";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import {
  createDurableFinOpsAuditEmitter,
  createPostgresFinOpsAuditJournal,
} from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsAuditJournal";
import { createFinOpsCaptureService } from "@/lib/oa/finops/application/captureFinOpsUsage";
import { createPostgresFinOpsUsageLedger } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("FinOps T6 PostgreSQL audit journal integration", () => {
  let pool: Pool;

  beforeAll(() => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 4 });
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  it("has finops_audit_event table without money columns", async () => {
    const cols = await pool.query<{ column_name: string }>(
      `SELECT column_name FROM information_schema.columns
       WHERE table_name = 'finops_audit_event'
       ORDER BY column_name`,
    );
    const names = cols.rows.map((r) => r.column_name);
    expect(names).toContain("audit_event_id");
    expect(names).toContain("event_type");
    expect(names).toContain("payload_json");
    expect(names).not.toContain("cost");
    expect(names).not.toContain("currency");
  });

  it("persists created then duplicate audits with correlation fields", async () => {
    const journal = createPostgresFinOpsAuditJournal(pool);
    const emitter = createDurableFinOpsAuditEmitter(journal, {
      nowIso: () => "2026-08-07T11:00:00.000Z",
    });
    const ledger = createPostgresFinOpsUsageLedger(pool);
    const capture = createFinOpsCaptureService({ ledger, audit: emitter });
    const runId = `run-t6-audit-${Date.now()}`;
    const providerResponseId = `resp-t6-audit-${Date.now()}`;
    const request = {
      projectId: "proj-t6-db",
      executionRunId: runId,
      correlationId: "corr-t6-db",
      provider: "openai",
      occurredAt: "2026-08-07T11:00:00.000Z",
      usage: {
        status: "validated" as const,
        inputTokens: 3,
        outputTokens: 2,
        totalTokens: 5,
        providerResponseId,
      },
    };
    const created = await capture.captureUsage(request);
    expect(created.status).toBe("created");
    const duplicate = await capture.captureUsage(request);
    expect(duplicate.status).toBe("duplicate");
    await emitter.flush();

    const rows = await pool.query<{
      event_type: string;
      project_id: string | null;
      execution_run_id: string | null;
      correlation_id: string | null;
      payload_json: Record<string, unknown>;
    }>(
      `SELECT event_type, project_id, execution_run_id, correlation_id, payload_json
       FROM finops_audit_event
       WHERE execution_run_id = $1
       ORDER BY created_at ASC`,
      [runId],
    );
    expect(rows.rows.map((r) => r.event_type)).toEqual([
      "finops_capture_created",
      "finops_capture_duplicate",
    ]);
    for (const row of rows.rows) {
      expect(row.project_id).toBe("proj-t6-db");
      expect(row.correlation_id).toBe("corr-t6-db");
      const payloadText = JSON.stringify(row.payload_json).toLowerCase();
      expect(payloadText).not.toContain("password");
      expect(payloadText).not.toContain("postgres://");
    }
  });

  it("enforces append-only on finops_audit_event", async () => {
    const inserted = await pool.query<{ audit_event_id: string }>(
      `INSERT INTO finops_audit_event (
         audit_event_id, event_type, project_id, execution_run_id, correlation_id,
         occurred_at, payload_json, created_at
       ) VALUES ($1, 'finops_capture_failed', 'proj-ao', 'run-ao', 'corr-ao',
                 NOW(), '{"code":"FINOPS_CAPTURE_FAILED"}'::jsonb, NOW())
       RETURNING audit_event_id`,
      [`aud_append_only_${Date.now()}`],
    );
    const id = inserted.rows[0]?.audit_event_id;
    expect(id).toBeTruthy();
    await expect(
      pool.query(
        `UPDATE finops_audit_event SET project_id = 'x' WHERE audit_event_id = $1`,
        [id],
      ),
    ).rejects.toThrow(/append-only/i);
    await expect(
      pool.query(`DELETE FROM finops_audit_event WHERE audit_event_id = $1`, [
        id,
      ]),
    ).rejects.toThrow(/append-only/i);
  });

  it("keeps capture success when journal insert fails", async () => {
    const failingJournal = {
      async append() {
        throw new Error("forced journal failure");
      },
    };
    const emitter = createDurableFinOpsAuditEmitter(failingJournal);
    const ledger = createPostgresFinOpsUsageLedger(pool);
    const capture = createFinOpsCaptureService({ ledger, audit: emitter });
    const result = await capture.captureUsage({
      projectId: "proj-t6-db",
      executionRunId: `run-t6-failopen-${Date.now()}`,
      correlationId: "corr-t6-failopen-db",
      provider: "openai",
      occurredAt: "2026-08-07T11:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: `resp-t6-failopen-${Date.now()}`,
      },
    });
    expect(result.status).toBe("created");
    await emitter.flush();
  });
});
