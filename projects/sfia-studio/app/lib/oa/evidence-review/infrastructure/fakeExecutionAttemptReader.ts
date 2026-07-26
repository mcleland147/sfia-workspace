import type { ExecutionAttemptSnapshot } from "../domain/types";
import type { ExecutionAttemptReaderPort } from "../ports/executionAttemptReader";

/**
 * FakeExecutionAttemptReader — in-memory Attempt snapshots only.
 * Does not import or mutate T-A5 stores. No network/shell.
 */
export class FakeExecutionAttemptReader implements ExecutionAttemptReaderPort {
  private readonly attempts = new Map<string, ExecutionAttemptSnapshot>();

  seed(attempt: ExecutionAttemptSnapshot): void {
    this.attempts.set(attempt.attemptId, structuredClone(attempt));
  }

  clear(): void {
    this.attempts.clear();
  }

  /** Returns a clone — callers cannot mutate the store through the snapshot. */
  async findById(
    attemptId: string,
  ): Promise<ExecutionAttemptSnapshot | null> {
    const found = this.attempts.get(attemptId);
    return found ? structuredClone(found) : null;
  }

  /** Test helper — prove Attempt immutability across ingestion. */
  getRaw(attemptId: string): ExecutionAttemptSnapshot | undefined {
    return this.attempts.get(attemptId);
  }
}
