/**
 * @vitest-environment node
 *
 * FinOps T6 runtime composition integration — RC-01..RC-04.
 * Requires DATABASE_URL pointing at ephemeral local/CI Postgres — never Neon.
 *
 * Anti-claims: Composition Ready ≠ product activation.
 * This suite exercises the canonical server composition boundary only.
 */
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import type { Pool } from "pg";
import {
  closeFinOpsPool,
  createFinOpsPool,
} from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { composeFinOpsRuntime } from "@/lib/oa/finops/server/composeFinOpsRuntime";
import { readFileSync } from "node:fs";
import path from "node:path";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("FinOps T6 runtime composition integration", () => {
  let pool: Pool;

  beforeAll(() => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 4 });
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  it("RC-01 composed capture persists ledger + audit finops_capture_created", async () => {
    const runtime = composeFinOpsRuntime({ pool });
    const runId = `run-t6-rc01-${Date.now()}`;
    const providerResponseId = `resp-t6-rc01-${Date.now()}`;
    const request = {
      projectId: "proj-t6-rc",
      executionRunId: runId,
      correlationId: "corr-t6-rc01",
      provider: "openai",
      occurredAt: "1999-07-08T10:00:00.000Z",
      usage: {
        status: "validated" as const,
        inputTokens: 3,
        outputTokens: 2,
        totalTokens: 5,
        providerResponseId,
      },
    };

    const created = await runtime.capture.captureUsage(request);
    expect(created.status).toBe("created");
    await runtime.flushAudit();

    const ledger = await pool.query<{
      event_id: string;
      project_id: string;
      execution_run_id: string;
      correlation_id: string;
    }>(
      `SELECT event_id, project_id, execution_run_id, correlation_id
       FROM finops_usage_event
       WHERE execution_run_id = $1`,
      [runId],
    );
    expect(ledger.rows).toHaveLength(1);
    expect(ledger.rows[0]?.project_id).toBe("proj-t6-rc");
    expect(ledger.rows[0]?.correlation_id).toBe("corr-t6-rc01");
    if (created.status === "created") {
      expect(ledger.rows[0]?.event_id).toBe(created.eventId);
    }

    const audit = await pool.query<{
      event_type: string;
      project_id: string | null;
      execution_run_id: string | null;
      correlation_id: string | null;
    }>(
      `SELECT event_type, project_id, execution_run_id, correlation_id
       FROM finops_audit_event
       WHERE execution_run_id = $1
       ORDER BY created_at ASC`,
      [runId],
    );
    expect(audit.rows).toHaveLength(1);
    expect(audit.rows[0]?.event_type).toBe("finops_capture_created");
    expect(audit.rows[0]?.project_id).toBe("proj-t6-rc");
    expect(audit.rows[0]?.execution_run_id).toBe(runId);
    expect(audit.rows[0]?.correlation_id).toBe("corr-t6-rc01");
  });

  it("RC-02 duplicate remains captured + audited; ledger idempotent", async () => {
    const runtime = composeFinOpsRuntime({ pool });
    const runId = `run-t6-rc02-${Date.now()}`;
    const providerResponseId = `resp-t6-rc02-${Date.now()}`;
    const request = {
      projectId: "proj-t6-rc",
      executionRunId: runId,
      correlationId: "corr-t6-rc02",
      provider: "openai",
      occurredAt: "1999-07-08T10:00:00.000Z",
      usage: {
        status: "validated" as const,
        inputTokens: 7,
        outputTokens: 4,
        totalTokens: 11,
        providerResponseId,
      },
    };

    const first = await runtime.capture.captureUsage(request);
    expect(first.status).toBe("created");
    const second = await runtime.capture.captureUsage(request);
    expect(second.status).toBe("duplicate");
    await runtime.flushAudit();

    const ledger = await pool.query(
      `SELECT event_id FROM finops_usage_event WHERE execution_run_id = $1`,
      [runId],
    );
    expect(ledger.rows).toHaveLength(1);
    if (first.status === "created" && second.status === "duplicate") {
      expect(second.eventId).toBe(first.eventId);
    }

    const audit = await pool.query<{ event_type: string }>(
      `SELECT event_type FROM finops_audit_event
       WHERE execution_run_id = $1
       ORDER BY created_at ASC`,
      [runId],
    );
    expect(audit.rows.map((r) => r.event_type)).toEqual([
      "finops_capture_created",
      "finops_capture_duplicate",
    ]);
  });

  it("RC-03 redaction contract preserved through composition (fictitious data)", async () => {
    const runtime = composeFinOpsRuntime({ pool });
    const runId = `run-t6-rc03-${Date.now()}`;
    // Fictitious markers only — never real credentials.
    const fictitiousPassword = "FAKE_PASSWORD_NOT_REAL";
    const fictitiousPrompt = "RAW_PROMPT_SHOULD_NOT_PERSIST";
    const request = {
      projectId: "proj-t6-rc",
      executionRunId: runId,
      correlationId: "corr-t6-rc03",
      provider: "openai",
      occurredAt: "1999-07-08T10:00:00.000Z",
      usage: {
        status: "validated" as const,
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: `resp-t6-rc03-${Date.now()}`,
        // Non-allow-listed / secret-shaped fields must not appear in durable audit.
        model: `model-with-${fictitiousPassword}-and-${fictitiousPrompt}`,
        reason: fictitiousPrompt,
      },
    };

    const created = await runtime.capture.captureUsage(request);
    expect(created.status).toBe("created");
    await runtime.flushAudit();

    const audit = await pool.query<{
      payload_json: Record<string, unknown>;
    }>(
      `SELECT payload_json FROM finops_audit_event WHERE execution_run_id = $1`,
      [runId],
    );
    expect(audit.rows).toHaveLength(1);
    const payloadText = JSON.stringify(audit.rows[0]?.payload_json).toLowerCase();
    expect(payloadText).not.toContain("password");
    expect(payloadText).not.toContain("fake_password");
    expect(payloadText).not.toContain("raw_prompt");
    expect(payloadText).not.toContain("postgres://");
    expect(payloadText).not.toContain("postgresql://");
    const payload = audit.rows[0]?.payload_json ?? {};
    expect(payload).not.toHaveProperty("model");
    expect(payload).not.toHaveProperty("reason");
    expect(payload).not.toHaveProperty("usage");
    expect(payload).toHaveProperty("projectId");
    expect(payload).toHaveProperty("correlationId");
  });

  it("RC-04 composition never ends the pool; caller closes", async () => {
    const endSpy = vi.spyOn(pool, "end");
    const runtime = composeFinOpsRuntime({ pool });
    const created = await runtime.capture.captureUsage({
      projectId: "proj-t6-rc",
      executionRunId: `run-t6-rc04-${Date.now()}`,
      correlationId: "corr-t6-rc04",
      provider: "openai",
      occurredAt: "1999-07-08T10:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: `resp-t6-rc04-${Date.now()}`,
      },
    });
    expect(created.status).toBe("created");
    await runtime.flushAudit();
    expect(endSpy).not.toHaveBeenCalled();
    endSpy.mockRestore();

    const source = readFileSync(
      path.join(
        process.cwd(),
        "lib/oa/finops/server/composeFinOpsRuntime.ts",
      ),
      "utf8",
    );
    // Strip comments before executable-pattern checks (anti-claim prose may mention ownership).
    const executable = source
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\/\/.*$/gm, "");
    expect(executable).not.toMatch(/\.end\s*\(/);
    expect(executable).not.toMatch(/closeFinOpsPool/);
    expect(executable).not.toMatch(/createFinOpsPool/);
    expect(executable).not.toMatch(/process\.env/);
    expect(executable).not.toMatch(/connectionString/);

    // Caller retains ownership — pool remains usable after composition use.
    const stillOpen = await pool.query<{ ok: number }>("SELECT 1::int AS ok");
    expect(stillOpen.rows[0]?.ok).toBe(1);
  });
});
