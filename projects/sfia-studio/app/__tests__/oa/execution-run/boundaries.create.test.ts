/**
 * @vitest-environment node
 */
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
import { FixedClock } from "@/lib/oa/execution-run/infrastructure/fixedClock";
import { SequentialIdentity } from "@/lib/oa/execution-run/infrastructure/sequentialIdentity";
import { createExecutionRun } from "@/lib/oa/execution-run";
import { getFixture } from "@/lib/oa/execution-run";
import type { ExecutionRunRepositoryPort } from "@/lib/oa/execution-run";

const schemasDir = path.resolve(
  __dirname,
  "../../../lib/oa/execution-run/schemas",
);

function deps(repo: ExecutionRunRepositoryPort) {
  return {
    clock: new FixedClock("2026-08-03T20:00:00.000Z"),
    identity: new SequentialIdentity(),
    repository: repo,
    schemas: new AjvExecutionRunSchemaValidation(schemasDir),
  };
}

describe("D2-D1 create boundary validation before metadata", () => {
  it("rejects null/undefined/primitive/array without save or identity", async () => {
    const save = vi.fn();
    const getById = vi.fn();
    const listByCorrelationId = vi.fn();
    const identity = new SequentialIdentity();
    const nextRunId = vi.spyOn(identity, "nextRunId");
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById,
      listByCorrelationId,
    };
    const base = {
      clock: new FixedClock("2026-08-03T20:00:00.000Z"),
      identity,
      repository,
      schemas: new AjvExecutionRunSchemaValidation(schemasDir),
    };
    for (const bad of [null, undefined, 42, "x", [], true]) {
      const r = await createExecutionRun(bad, base);
      expect(r.ok).toBe(false);
    }
    expect(save).not.toHaveBeenCalled();
    expect(nextRunId).not.toHaveBeenCalled();
  });

  it("rejects incomplete object and additional properties", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const d = deps(repository);
    expect((await createExecutionRun({ intent: getFixture("nominal").intent }, d)).ok).toBe(
      false,
    );
    expect(
      (
        await createExecutionRun(
          {
            intent: getFixture("nominal").intent,
            context: getFixture("nominal").context,
            extra: true,
          },
          d,
        )
      ).ok,
    ).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("rejects invalid nested context permissions and capability", async () => {
    const save = vi.fn();
    const repository: ExecutionRunRepositoryPort = {
      save,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    const d = deps(repository);
    const f = getFixture("nominal");
    expect(
      (
        await createExecutionRun(
          {
            intent: f.intent,
            context: {
              ...f.context,
              permissions: { gitRead: true, gitWrite: false } as never,
            },
          },
          d,
        )
      ).ok,
    ).toBe(false);
    expect(
      (
        await createExecutionRun(
          {
            intent: f.intent,
            context: f.context,
            capability: { ...f.capability!, lane: "openai" as never },
          },
          d,
        )
      ).ok,
    ).toBe(false);
    expect(save).not.toHaveBeenCalled();
  });

  it("does not throw on adversarial payloads", async () => {
    const repository: ExecutionRunRepositoryPort = {
      save: async () => undefined,
      getById: async () => null,
      listByCorrelationId: async () => [],
    };
    await expect(
      createExecutionRun({ circular: null }, deps(repository)),
    ).resolves.toMatchObject({ ok: false });
  });
});
