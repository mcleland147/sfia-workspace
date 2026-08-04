/**
 * Server-only concrete composition for D2-D1 execution-run.
 * Assembles memory store + AJV + clock + identity. Not exported from root barrel.
 */
import { assertServerOnly } from "./serverOnly";
import { AjvExecutionRunSchemaValidation } from "../infrastructure/ajvExecutionRunSchemaValidation";
import { FixedClock } from "../infrastructure/fixedClock";
import { MemoryExecutionRunRepository } from "../infrastructure/memoryExecutionRunRepository";
import { MemoryExecutionRunStore } from "../infrastructure/memoryExecutionRunStore";
import { SequentialIdentity } from "../infrastructure/sequentialIdentity";
import {
  createExecutionRun,
  type CreateExecutionRunResult,
} from "../application/createExecutionRun";
import {
  transitionExecutionRun,
  type TransitionExecutionRunResult,
} from "../application/transitionExecutionRun";
import type { ExecutionRun } from "../domain/types";

assertServerOnly("oa/execution-run/server");

export type ExecutionRunServerComposition = {
  createExecutionRun: (input: unknown) => Promise<CreateExecutionRunResult>;
  transitionExecutionRun: (
    input: unknown,
  ) => Promise<TransitionExecutionRunResult>;
  getById: (runId: string) => Promise<ExecutionRun | null>;
  listByCorrelationId: (correlationId: string) => Promise<ExecutionRun[]>;
  disclosure: {
    persistence: "memory_process_local";
    durable: false;
    multiInstance: false;
    restartSafe: false;
  };
};

/**
 * Concrete memory process-local composition. Read helpers only; writes go through
 * create/transition which enforce invariant + schema guards before save.
 */
export function composeExecutionRunMemory(options?: {
  clockIso?: string;
}): ExecutionRunServerComposition {
  const store = new MemoryExecutionRunStore();
  const clock = new FixedClock(options?.clockIso ?? "2026-08-03T20:00:00.000Z");
  const identity = new SequentialIdentity();
  const repository = new MemoryExecutionRunRepository(store);
  const schemas = new AjvExecutionRunSchemaValidation();
  const deps = { clock, identity, repository, schemas };
  return {
    createExecutionRun: (input) => createExecutionRun(input, deps),
    transitionExecutionRun: (input) => transitionExecutionRun(input, deps),
    getById: (runId) => repository.getById(runId),
    listByCorrelationId: (correlationId) =>
      repository.listByCorrelationId(correlationId),
    disclosure: {
      persistence: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
    },
  };
}
