/**
 * @vitest-environment node
 */
import { describe, expect, it, vi } from "vitest";
import { buildUsageEvent } from "@/lib/oa/finops/application/buildUsageEvent";
import { createFinOpsCaptureService } from "@/lib/oa/finops/application/captureFinOpsUsage";
import { deriveFinOpsIdentity } from "@/lib/oa/finops/application/identity";
import {
  FINOPS_MAX_SAFE_TOKEN,
  resolveTotalTokens,
  validateSafeToken,
} from "@/lib/oa/finops/application/safeTokens";
import { createFinOpsPool } from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { readPgTokenField } from "@/lib/oa/finops/infrastructure/postgres/readPgToken";
import { sanitizeDbError } from "@/lib/oa/finops/infrastructure/postgres/sanitizeDbError";
import type { FinOpsUsageLedgerPort } from "@/lib/oa/finops/ports/finopsUsageLedgerPort";

describe("FinOps T1 identity", () => {
  it("derives deterministic eventId and dedupKey", () => {
    const a = deriveFinOpsIdentity({
      projectId: "p1",
      executionRunId: "run-1",
      provider: "openai",
      providerRequestId: "resp_abc",
      correlationId: "corr-1",
    });
    const b = deriveFinOpsIdentity({
      projectId: "p1",
      executionRunId: "run-1",
      provider: "openai",
      providerRequestId: "resp_abc",
      correlationId: "corr-1",
    });
    expect(a.eventId).toBe(b.eventId);
    expect(a.dedupKey).toBe(b.dedupKey);
    expect(a.eventId.startsWith("evt_")).toBe(true);
    expect(a.dedupKey.startsWith("dedup_")).toBe(true);
  });

  it("changes identity when run or provider response id changes", () => {
    const base = {
      projectId: "p1",
      executionRunId: "run-1",
      provider: "openai",
      providerRequestId: "resp_abc",
      correlationId: "corr-1",
    };
    const a = deriveFinOpsIdentity(base);
    const b = deriveFinOpsIdentity({ ...base, executionRunId: "run-2" });
    const c = deriveFinOpsIdentity({
      ...base,
      providerRequestId: "resp_other",
    });
    expect(a.eventId).not.toBe(b.eventId);
    expect(a.eventId).not.toBe(c.eventId);
  });
});

describe("FinOps T1 buildUsageEvent", () => {
  const base = {
    projectId: "proj-1",
    executionRunId: "run-1",
    correlationId: "corr-1",
    provider: "openai",
    occurredAt: "2026-08-06T22:05:00.000Z",
  };

  it("builds validated API_USAGE event without Money fields", () => {
    const result = buildUsageEvent({
      ...base,
      usage: {
        status: "validated",
        inputTokens: 10,
        outputTokens: 5,
        totalTokens: 15,
        model: "gpt-test",
        providerResponseId: "resp_1",
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.event.usageStatus).toBe("validated");
    expect(result.event.sourceOfTruth).toBe("API_USAGE");
    expect(JSON.stringify(result.event)).not.toMatch(/cost|currency|price|Money/i);
  });

  it("builds unavailable with UNKNOWN and null tokens (unknown ≠ zero)", () => {
    const result = buildUsageEvent({
      ...base,
      usage: { status: "unavailable", reason: "missing" },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.event.usageStatus).toBe("unavailable");
    expect(result.event.inputTokens).toBeNull();
  });

  it("marks negative tokens as invalid without inventing values", () => {
    const result = buildUsageEvent({
      ...base,
      usage: { status: "validated", inputTokens: -1, outputTokens: 2 },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.event.usageStatus).toBe("invalid");
    expect(result.event.inputTokens).toBeNull();
  });

  it("accepts Number.MAX_SAFE_INTEGER tokens", () => {
    const result = buildUsageEvent({
      ...base,
      usage: {
        status: "validated",
        inputTokens: FINOPS_MAX_SAFE_TOKEN,
        outputTokens: 0,
        totalTokens: FINOPS_MAX_SAFE_TOKEN,
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.event.usageStatus).toBe("validated");
    expect(result.event.inputTokens).toBe(FINOPS_MAX_SAFE_TOKEN);
  });

  it("rejects Number.MAX_SAFE_INTEGER + 1 as invalid", () => {
    const result = buildUsageEvent({
      ...base,
      usage: {
        status: "validated",
        inputTokens: FINOPS_MAX_SAFE_TOKEN + 1,
        outputTokens: 0,
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.event.usageStatus).toBe("invalid");
    expect(result.event.inputTokens).toBeNull();
  });

  it("rejects sum exceeding MAX_SAFE_INTEGER", () => {
    expect(
      resolveTotalTokens({
        inputTokens: FINOPS_MAX_SAFE_TOKEN,
        outputTokens: 1,
        totalTokens: null,
      }),
    ).toBe("invalid");
    const result = buildUsageEvent({
      ...base,
      usage: {
        status: "validated",
        inputTokens: FINOPS_MAX_SAFE_TOKEN,
        outputTokens: 1,
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.event.usageStatus).toBe("invalid");
  });

  it("returns FINOPS_VALIDATION_FAILED for invalid occurredAt", () => {
    const result = buildUsageEvent({
      ...base,
      occurredAt: "not-a-date",
      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.code).toBe("FINOPS_VALIDATION_FAILED");
    expect(result.error.retryable).toBe(false);
  });
});

describe("FinOps T1 safe token helpers", () => {
  it("validateSafeToken accepts MAX_SAFE_INTEGER and rejects beyond", () => {
    expect(validateSafeToken(FINOPS_MAX_SAFE_TOKEN)).toBe(FINOPS_MAX_SAFE_TOKEN);
    expect(validateSafeToken(FINOPS_MAX_SAFE_TOKEN + 1)).toBe("invalid");
  });

  it("readPgTokenField rejects out-of-range DB strings without silent Number()", () => {
    const ok = readPgTokenField(String(FINOPS_MAX_SAFE_TOKEN));
    expect(ok.ok).toBe(true);
    if (ok.ok) expect(ok.value).toBe(FINOPS_MAX_SAFE_TOKEN);
    const bad = readPgTokenField("9007199254740992");
    expect(bad.ok).toBe(false);
    if (!bad.ok) {
      expect(bad.error.code).toBe("FINOPS_VALIDATION_FAILED");
      expect(bad.error.retryable).toBe(false);
    }
  });
});

describe("FinOps T1 sanitized DB errors (T1-VAL-01)", () => {
  it("classifies SQLSTATE 08006 as FINOPS_DB_UNAVAILABLE retryable", () => {
    const err = sanitizeDbError({ code: "08006", message: "connection failed" });
    expect(err.code).toBe("FINOPS_DB_UNAVAILABLE");
    expect(err.retryable).toBe(true);
    expect(err.technicalDetailsRedacted).toBe(true);
  });

  it("classifies ECONNREFUSED as FINOPS_DB_UNAVAILABLE retryable", () => {
    const err = sanitizeDbError({ code: "ECONNREFUSED", message: "refused" });
    expect(err.code).toBe("FINOPS_DB_UNAVAILABLE");
    expect(err.retryable).toBe(true);
  });

  it("classifies ETIMEDOUT as FINOPS_DB_UNAVAILABLE retryable", () => {
    const err = sanitizeDbError({ code: "ETIMEDOUT", message: "timeout" });
    expect(err.code).toBe("FINOPS_DB_UNAVAILABLE");
    expect(err.retryable).toBe(true);
  });

  it("classifies non-transient codes as FINOPS_CAPTURE_FAILED", () => {
    const err = sanitizeDbError({ code: "42P01", message: "undefined_table" });
    expect(err.code).toBe("FINOPS_CAPTURE_FAILED");
    expect(err.retryable).toBe(false);
  });

  it("classifies CHECK violation 23514 as FINOPS_VALIDATION_FAILED", () => {
    const err = sanitizeDbError({ code: "23514", message: "check" });
    expect(err.code).toBe("FINOPS_VALIDATION_FAILED");
    expect(err.retryable).toBe(false);
  });

  it("never leaks connection strings in sanitized messages", () => {
    const err = sanitizeDbError({
      code: "ECONNREFUSED",
      message: "connect ECONNREFUSED 127.0.0.1:55432",
    });
    expect(err.message).toBe("FinOps capture failed");
    expect(err.message).not.toMatch(/55432|127\.0\.0\.1|postgres/i);
  });
});

describe("FinOps T1 audit isolation (T1-VAL-03)", () => {
  it("keeps created when audit emitter throws", async () => {
    const ledger: FinOpsUsageLedgerPort = {
      insertUsageEvent: async (event) => ({
        outcome: "created",
        eventId: event.eventId,
      }),
    };
    const audit = {
      emit: vi.fn(() => {
        throw new Error("audit boom");
      }),
    };
    const finops = createFinOpsCaptureService({ ledger, audit });
    const result = await finops.captureUsage({
      projectId: "p",
      executionRunId: "r",
      correlationId: "c",
      provider: "openai",
      occurredAt: "2026-08-06T22:05:00.000Z",
      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
    });
    expect(result.status).toBe("created");
  });

  it("keeps duplicate when audit emitter throws", async () => {
    const ledger: FinOpsUsageLedgerPort = {
      insertUsageEvent: async (event) => ({
        outcome: "duplicate",
        eventId: event.eventId,
      }),
    };
    const finops = createFinOpsCaptureService({
      ledger,
      audit: {
        emit: () => {
          throw new Error("audit boom");
        },
      },
    });
    const result = await finops.captureUsage({
      projectId: "p",
      executionRunId: "r",
      correlationId: "c",
      provider: "openai",
      occurredAt: "2026-08-06T22:05:00.000Z",
      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
    });
    expect(result.status).toBe("duplicate");
  });

  it("keeps failed when audit emitter throws during failure path", async () => {
    const ledger: FinOpsUsageLedgerPort = {
      insertUsageEvent: async () => ({
        outcome: "failed",
        error: {
          code: "FINOPS_DB_UNAVAILABLE",
          message: "FinOps capture failed",
          retryable: true,
          technicalDetailsRedacted: true,
        },
      }),
    };
    const finops = createFinOpsCaptureService({
      ledger,
      audit: {
        emit: () => {
          throw new Error("audit boom");
        },
      },
    });
    const result = await finops.captureUsage({
      projectId: "p",
      executionRunId: "r",
      correlationId: "c",
      provider: "openai",
      occurredAt: "2026-08-06T22:05:00.000Z",
      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
    });
    expect(result.status).toBe("failed");
  });
});

describe("FinOps T1 pool SSL options (T1-VAL-04)", () => {
  it("defaults ssl to false and accepts explicit ssl option shape", () => {
    const pool = createFinOpsPool({
      connectionString:
        "postgres://sfia_t1:sfia_t1_local_only@127.0.0.1:1/sfia_studio_finops_t1",
      connectionTimeoutMillis: 100,
      ssl: false,
    });
    expect(pool).toBeTruthy();
    void pool.end();
  });

  it("rejects non-positive or unsafe statementTimeoutMillis", () => {
    expect(() =>
      createFinOpsPool({
        connectionString:
          "postgres://sfia_t1:sfia_t1_local_only@127.0.0.1:1/sfia_studio_finops_t1",
        statementTimeoutMillis: 0,
      }),
    ).toThrow(/statementTimeoutMillis/);
    expect(() =>
      createFinOpsPool({
        connectionString:
          "postgres://sfia_t1:sfia_t1_local_only@127.0.0.1:1/sfia_studio_finops_t1",
        statementTimeoutMillis: 999_999,
      }),
    ).toThrow(/statementTimeoutMillis/);
  });
});

describe("FinOps T1 unused mapper removal (T1-VAL-05)", () => {
  it("does not ship mapProviderUsage module", () => {
    const fs = require("node:fs") as typeof import("node:fs");
    const path = require("node:path") as typeof import("node:path");
    const target = path.join(
      __dirname,
      "../../lib/oa/finops/infrastructure/openai/mapProviderUsage.ts",
    );
    expect(fs.existsSync(target)).toBe(false);
  });
});
