import type { ProductSqliteHandle } from "@/lib/oa/project";
import type { ExecutionAttemptTechnicalStorePort } from "../../ports/executionAttemptTechnicalStorePort";

/**
 * Durable Map-like facade for result-recording budget.
 * Persists to oa_execution_attempt_result_budget (side table).
 */
class SqliteResultRecordingAttemptsMap {
  constructor(private readonly store: ProductSqliteHandle) {}

  get(attemptId: string): number | undefined {
    const row = this.store.db
      .prepare(
        `SELECT count FROM oa_execution_attempt_result_budget WHERE attempt_id = ?`,
      )
      .get(attemptId) as { count?: number } | undefined;
    return typeof row?.count === "number" ? row.count : undefined;
  }

  set(attemptId: string, count: number): this {
    this.store.db
      .prepare(
        `INSERT INTO oa_execution_attempt_result_budget(attempt_id, count)
         VALUES (?, ?)
         ON CONFLICT(attempt_id) DO UPDATE SET count = excluded.count`,
      )
      .run(attemptId, count);
    return this;
  }
}

/**
 * Technical Attempt store over Product SQLite — shares UoW with contracts/LPS.
 */
export class SqliteExecutionAttemptTechnicalStore
  implements ExecutionAttemptTechnicalStorePort
{
  readonly resultRecordingAttempts: SqliteResultRecordingAttemptsMap;

  constructor(private readonly productStore: ProductSqliteHandle) {
    this.resultRecordingAttempts = new SqliteResultRecordingAttemptsMap(
      productStore,
    );
  }

  async runInTransaction<T>(fn: () => Promise<T>): Promise<T> {
    return this.productStore.runInTransaction(fn);
  }
}
