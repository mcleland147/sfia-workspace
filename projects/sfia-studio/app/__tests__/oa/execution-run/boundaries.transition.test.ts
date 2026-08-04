/**
 * @vitest-environment node
 */
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
import { FixedClock } from "@/lib/oa/execution-run/infrastructure/fixedClock";
import { SequentialIdentity } from "@/lib/oa/execution-run/infrastructure/sequentialIdentity";
import { transitionExecutionRun, normalizedFailure } from "@/lib/oa/execution-run";
import type { ExecutionRunRepositoryPort } from "@/lib/oa/execution-run";

const schemasDir = path.resolve(
  __dirname,
  "../../../lib/oa/execution-run/schemas",
);

describe("D2-D1 transition boundary validation before metadata", () => {
  it("rejects invalid input before repository lookup", async () => {
    const getById = vi.fn();
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById,
      listByCorrelationId: async () => [],
    };
    const deps = {
      clock: new FixedClock("2026-08-03T20:00:00.000Z"),
      identity: new SequentialIdentity(),
      repository,
      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
    };
    for (const bad of [
      null,
      undefined,
      1,
      [],
      {},
      { runId: "r1" },
      { runId: "r1", reason: "not_a_reason" },
      { runId: "r1", reason: "outputs_validated", completeness: "complete" },
      {
        runId: "r1",
        reason: "engaged_operation_failed",
      },
      {
        runId: "r1",
        reason: "intent_valid",
        extra: true,
      },
    ]) {
      const r = await transitionExecutionRun(bad, deps);
      expect(r.ok).toBe(false);
    }
    expect(getById).not.toHaveBeenCalled();
    expect(save).not.toHaveBeenCalled();
  });

  it("rejects invalid externalResult / failure payloads before save", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const deps = {
      clock: new FixedClock("2026-08-03T20:00:00.000Z"),
      identity: new SequentialIdentity(),
      repository,
      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
    };
    const badExternal = await transitionExecutionRun(
      {
        runId: "r1",
        reason: "outputs_validated",
        completeness: "complete",
        externalResult: { kind: "success", completeness: "complete" },
      },
      deps,
    );
    expect(badExternal.ok).toBe(false);
    const badFailure = await transitionExecutionRun(
      {
        runId: "r1",
        reason: "engaged_operation_failed",
        failure: {
          family: "validation",
          code: "NOT_A_CODE",
          userMessage: "x",
          technicalDetailsRedacted: true,
          retryable: false,
          correlationId: "c",
        },
      },
      deps,
    );
    expect(badFailure.ok).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("accepts schema-valid failure enum", async () => {
    const schemas = new AjvExecutionRunSchemaValidation(schemasDir);
    const failure = normalizedFailure({
      family: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      userMessage: "unavailable",
      retryable: true,
      correlationId: "c1",
    });
    expect((await schemas.validate("normalized-failure", failure)).ok).toBe(true);
  });
});
