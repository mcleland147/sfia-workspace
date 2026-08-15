/**
 * Technical store surface used by Attempt use-cases:
 * - transactional unit of work
 * - durable/process-local result-recording budget (RTA5-06)
 *
 * MemoryExecutionAttemptStore satisfies this structurally.
 * SQLite backs resultRecordingAttempts via oa_execution_attempt_result_budget.
 */
export interface ExecutionAttemptTechnicalStorePort {
  /**
   * attemptId → bounded RecordExecutionResult attempts.
   * Only get/set are required by application code; Map satisfies this.
   */
  resultRecordingAttempts: {
    get(key: string): number | undefined;
    set(key: string, value: number): unknown;
  };
  runInTransaction<T>(fn: () => Promise<T>): Promise<T>;
  /** Test hook — force next Attempt persist to throw (Memory path). */
  failNextSave?: boolean;
}
