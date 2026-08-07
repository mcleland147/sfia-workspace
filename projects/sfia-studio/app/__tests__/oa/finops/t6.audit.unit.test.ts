/**
 * FinOps T6-foundation — unit tests for redaction + durable emitter fail-open.
 * @vitest-environment node
 */
import { describe, expect, it, vi } from "vitest";
import { createFinOpsCaptureService } from "@/lib/oa/finops/application/captureFinOpsUsage";
import {
  assertRedactedPayloadHasNoSecrets,
  redactFinOpsAuditPayload,
} from "@/lib/oa/finops/infrastructure/postgres/redactFinOpsAuditPayload";
import { createDurableFinOpsAuditEmitter } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsAuditJournal";
import type { FinOpsAuditJournalPort } from "@/lib/oa/finops/ports/finopsAuditJournalPort";
import type { FinOpsUsageLedgerPort } from "@/lib/oa/finops/ports/finopsUsageLedgerPort";
import type { FinOpsAuditRecord } from "@/lib/oa/finops/application/finopsAuditTypes";

describe("FinOps T6 redactFinOpsAuditPayload", () => {
  it("whitelists correlation and outcome fields only", () => {
    const redacted = redactFinOpsAuditPayload({
      projectId: "prj:demo",
      executionRunId: "executionrun:1",
      correlationId: "corr-1",
      eventId: "evt_abc",
      dedupKey: "dedup_abc",
      code: "FINOPS_CAPTURE_FAILED",
      retryable: true,
      provider: "openai",
      password: "secret",
      apiKey: "sk-leak",
      prompt: "full user prompt must drop",
      nested: { a: 1 },
    });
    expect(redacted).toEqual({
      projectId: "prj:demo",
      executionRunId: "executionrun:1",
      correlationId: "corr-1",
      eventId: "evt_abc",
      dedupKey: "dedup_abc",
      code: "FINOPS_CAPTURE_FAILED",
      retryable: true,
      provider: "openai",
    });
    expect(redacted).not.toHaveProperty("password");
    expect(redacted).not.toHaveProperty("apiKey");
    expect(redacted).not.toHaveProperty("prompt");
    assertRedactedPayloadHasNoSecrets(redacted);
  });

  it("drops secret-like keys even if otherwise tempting", () => {
    const redacted = redactFinOpsAuditPayload({
      authorization: "Bearer abc",
      DATABASE_URL: "postgres://x",
      eventId: "evt_1",
    });
    expect(redacted).toEqual({ eventId: "evt_1" });
  });
});

describe("FinOps T6 durable emitter + capture fail-open", () => {
  it("persists created/duplicate/failed shapes through emitter without failing capture", async () => {
    const records: FinOpsAuditRecord[] = [];
    const journal: FinOpsAuditJournalPort = {
      async append(record) {
        records.push(record);
      },
    };
    const emitter = createDurableFinOpsAuditEmitter(journal, {
      nowIso: () => "2026-08-07T10:00:00.000Z",
    });
    const ledger: FinOpsUsageLedgerPort = {
      async insertUsageEvent(event) {
        return { outcome: "created", eventId: event.eventId };
      },
    };
    const capture = createFinOpsCaptureService({ ledger, audit: emitter });
    const result = await capture.captureUsage({
      projectId: "proj-t6",
      executionRunId: "run-t6-1",
      correlationId: "corr-t6-1",
      provider: "openai",
      occurredAt: "2026-08-07T10:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: "resp-t6-1",
      },
    });
    expect(result.status).toBe("created");
    await emitter.flush();
    expect(records).toHaveLength(1);
    expect(records[0]?.eventType).toBe("finops_capture_created");
    expect(records[0]?.projectId).toBe("proj-t6");
    expect(records[0]?.executionRunId).toBe("run-t6-1");
    expect(records[0]?.correlationId).toBe("corr-t6-1");
    expect(records[0]?.payload).toMatchObject({
      projectId: "proj-t6",
      eventId: expect.any(String),
    });
  });

  it("does not fail successful capture when durable journal rejects", async () => {
    const journal: FinOpsAuditJournalPort = {
      async append() {
        throw new Error("postgres://user:password@host/db boom");
      },
    };
    const emitter = createDurableFinOpsAuditEmitter(journal);
    const ledger: FinOpsUsageLedgerPort = {
      async insertUsageEvent(event) {
        return { outcome: "created", eventId: event.eventId };
      },
    };
    const capture = createFinOpsCaptureService({ ledger, audit: emitter });
    const result = await capture.captureUsage({
      projectId: "proj-t6",
      executionRunId: "run-t6-failopen",
      correlationId: "corr-t6-failopen",
      provider: "openai",
      occurredAt: "2026-08-07T10:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: "resp-t6-failopen",
      },
    });
    expect(result.status).toBe("created");
    await emitter.flush();
  });

  it("records failed capture audits with redacted codes only", async () => {
    const records: FinOpsAuditRecord[] = [];
    const journal: FinOpsAuditJournalPort = {
      async append(record) {
        records.push(record);
      },
    };
    const emitter = createDurableFinOpsAuditEmitter(journal, {
      nowIso: () => "2026-08-07T10:00:00.000Z",
    });
    const ledger: FinOpsUsageLedgerPort = {
      async insertUsageEvent() {
        return {
          outcome: "failed",
          error: {
            code: "FINOPS_DB_UNAVAILABLE",
            message: "FinOps capture failed",
            retryable: true,
            technicalDetailsRedacted: true,
          },
        };
      },
    };
    const capture = createFinOpsCaptureService({ ledger, audit: emitter });
    const result = await capture.captureUsage({
      projectId: "proj-t6",
      executionRunId: "run-t6-failed",
      correlationId: "corr-t6-failed",
      provider: "openai",
      occurredAt: "2026-08-07T10:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: "resp-t6-failed",
      },
    });
    expect(result.status).toBe("failed");
    await emitter.flush();
    expect(records[0]?.eventType).toBe("finops_capture_failed");
    expect(records[0]?.payload).toMatchObject({
      code: "FINOPS_DB_UNAVAILABLE",
      retryable: true,
    });
    const serialized = JSON.stringify(records[0]?.payload);
    expect(serialized.toLowerCase()).not.toContain("password");
  });

  it("ignores synchronous audit throw without changing ledger outcome", async () => {
    const audit = {
      emit: vi.fn(() => {
        throw new Error("audit boom");
      }),
    };
    const ledger: FinOpsUsageLedgerPort = {
      async insertUsageEvent(event) {
        return { outcome: "duplicate", eventId: event.eventId };
      },
    };
    const capture = createFinOpsCaptureService({ ledger, audit });
    const result = await capture.captureUsage({
      projectId: "proj-t6",
      executionRunId: "run-t6-dup",
      correlationId: "corr-t6-dup",
      provider: "openai",
      occurredAt: "2026-08-07T10:00:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: "resp-t6-dup",
      },
    });
    expect(result.status).toBe("duplicate");
    expect(audit.emit).toHaveBeenCalled();
  });
});
