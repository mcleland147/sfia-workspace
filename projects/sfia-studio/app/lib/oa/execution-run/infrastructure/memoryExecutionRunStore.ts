import type { ExecutionRun } from "../domain/types";

export class MemoryExecutionRunStore {
  readonly runs = new Map<string, ExecutionRun>();
}
