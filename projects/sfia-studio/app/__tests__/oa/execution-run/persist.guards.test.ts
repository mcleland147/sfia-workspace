/**
 * @vitest-environment node
 */
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
import {
  checkExecutionRunInvariants,
  createSourceDisclosure,
  usageUnavailable,
  EXECUTION_RUN_SCHEMA_VERSION,
  getFixture,
} from "@/lib/oa/execution-run";
import type { ExecutionRun, ExecutionRunRepositoryPort } from "@/lib/oa/execution-run";
import { persistExecutionRunInternal } from "@/lib/oa/execution-run/application/internal/persistExecutionRunInternal";

const schemasDir = path.resolve(
  __dirname,
  "../../../lib/oa/execution-run/schemas",
);

function baseRun(over: Partial<ExecutionRun> = {}): ExecutionRun {
  const f = getFixture("nominal");
  return {
    schemaVersion: EXECUTION_RUN_SCHEMA_VERSION,
    runId: "run:persist:1",
    correlationId: f.intent.correlationId,
    state: "idle",
    intent: f.intent,
    context: f.context,
    disclosure: createSourceDisclosure({
      source: "fixture",
      providerLane: "ai",
      limits: ["test"],
    }),
    createdAt: "2026-08-03T20:00:00.000Z",
    updatedAt: "2026-08-03T20:00:00.000Z",
    version: 1,
    capability: f.capability,
    usage: usageUnavailable("not_provided"),
    persistence: {
      kind: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
    },
    ...over,
  };
}

describe("D2-D1 persistExecutionRunInternal guards", () => {
  it("saves valid idle run", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const r = await persistExecutionRunInternal(baseRun(), {
      repository,
      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
    });
    expect(r.ok).toBe(true);
    expect(save).toHaveBeenCalledOnce();
  });

  it("refuses ninth state before save", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const r = await persistExecutionRunInternal(baseRun({ state: "STATE-B" as never }), {
      repository,
      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
    });
    expect(r.ok).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("refuses succeeded without external result / evidence", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const schemas = new AjvExecutionRunSchemaValidation(schemasDir);
    const noResult = await persistExecutionRunInternal(baseRun({ state: "succeeded" }), {
      repository,
      schemas,
    });
    expect(noResult.ok).toBe(false);
    expect(checkExecutionRunInvariants(baseRun({ state: "succeeded" })).length).toBeGreaterThan(
      0,
    );

    const partial = await persistExecutionRunInternal(
      baseRun({
        state: "succeeded",
        externalResult: {
          kind: "success",
          completeness: "partial",
          redactedSummary: "p",
          rawPresent: false,
        },
        evidence: [
          {
            evidenceId: "e1",
            runId: "run:persist:1",
            correlationId: "c",
            source: "fixture",
            completeness: "complete",
            producedAt: "2026-08-03T20:00:00.000Z",
            summary: "x",
            late: false,
            official: true,
          },
        ],
      }),
      { repository, schemas },
    );
    expect(partial.ok).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("refuses failed without failure and blocked without reason", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const schemas = new AjvExecutionRunSchemaValidation(schemasDir);
    expect(
      (await persistExecutionRunInternal(baseRun({ state: "failed" }), { repository, schemas }))
        .ok,
    ).toBe(false);
    expect(
      (await persistExecutionRunInternal(baseRun({ state: "blocked" }), { repository, schemas }))
        .ok,
    ).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("refuses disclosure source mismatch and durable claim", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const schemas = new AjvExecutionRunSchemaValidation(schemasDir);
    const mismatch = baseRun({
      disclosure: createSourceDisclosure({ source: "real", providerLane: "ai" }),
    });
    expect((await persistExecutionRunInternal(mismatch, { repository, schemas })).ok).toBe(false);
    const durable = baseRun({
      persistence: {
        kind: "memory_process_local",
        durable: true as never,
        multiInstance: false,
        restartSafe: false,
      },
    });
    expect((await persistExecutionRunInternal(durable, { repository, schemas })).ok).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("refuses invalid timestamp format when schema requires date-time", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const r = await persistExecutionRunInternal(baseRun({ createdAt: "yesterday" }), {
      repository,
      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
    });
    expect(r.ok).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });
});
