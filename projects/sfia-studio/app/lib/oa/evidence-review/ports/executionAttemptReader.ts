import type { ExecutionAttemptSnapshot } from "../domain/types";

/**
 * Read-only Attempt reader for T-A6 ingestion (D-T-A6-DEL-04).
 * Must never mutate Attempt. T-A5 must not depend on T-A6.
 */
export interface ExecutionAttemptReaderPort {
  findById(attemptId: string): Promise<ExecutionAttemptSnapshot | null>;
}
