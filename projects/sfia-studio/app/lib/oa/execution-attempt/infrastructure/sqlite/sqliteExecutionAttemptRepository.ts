import type { ProductSqliteHandle } from "@/lib/oa/project";
import { ExecutionAttemptDomainError } from "../../domain/errors";
import { isAttemptTerminal, validateAttemptShape } from "../../domain/invariants";
import type { ExecutionAttempt } from "../../domain/types";
import type {
  ActiveIndexDrift,
  ExecutionAttemptRepositoryPort,
} from "../../ports/executionAttemptRepository";

type AttemptRow = {
  attempt_id: string;
  execution_contract_id: string;
  status: string;
  idempotency_key: string;
  version: number;
  payload_json: string;
};

function cloneAttempt(attempt: ExecutionAttempt): ExecutionAttempt {
  return structuredClone(attempt);
}

/**
 * Durable ExecutionAttempt repository on Product SQLite (M5).
 * Mirrors MemoryExecutionAttemptRepository OCC + active-index semantics.
 */
export class SqliteExecutionAttemptRepository
  implements ExecutionAttemptRepositoryPort
{
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(attemptId: string): Promise<ExecutionAttempt | null> {
    const row = this.store.db
      .prepare(
        `SELECT attempt_id, execution_contract_id, status, idempotency_key,
                version, payload_json
         FROM oa_execution_attempts WHERE attempt_id = ?`,
      )
      .get(attemptId) as AttemptRow | undefined;
    if (!row) return null;
    return cloneAttempt(JSON.parse(row.payload_json) as ExecutionAttempt);
  }

  async findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<ExecutionAttempt | null> {
    const row = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_execution_attempts WHERE idempotency_key = ?`,
      )
      .get(idempotencyKey) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return cloneAttempt(JSON.parse(row.payload_json) as ExecutionAttempt);
  }

  async exists(attemptId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(`SELECT 1 AS ok FROM oa_execution_attempts WHERE attempt_id = ?`)
      .get(attemptId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async create(attempt: ExecutionAttempt): Promise<void> {
    const shape = validateAttemptShape(attempt);
    if (shape) {
      throw new ExecutionAttemptDomainError(shape.detailCode, shape.reason);
    }
    if (attempt.version !== 1) {
      throw new ExecutionAttemptDomainError(
        "ATTEMPT_INVALID",
        "create_requires_version_1",
      );
    }
    if (await this.exists(attempt.attemptId)) {
      throw new ExecutionAttemptDomainError(
        "ATTEMPT_ALREADY_EXISTS",
        "attempt_id_taken",
      );
    }
    const existingKeyOwner = await this.findByIdempotencyKey(
      attempt.idempotencyKey,
    );
    if (
      existingKeyOwner &&
      existingKeyOwner.attemptId !== attempt.attemptId
    ) {
      throw new ExecutionAttemptDomainError(
        "ATTEMPT_IDEMPOTENCY_CONFLICT",
        "idempotency_key_taken",
      );
    }
    this.failIfForced();
    const now = attempt.createdAt;
    const payload = JSON.stringify(cloneAttempt(attempt));
    this.store.db
      .prepare(
        `INSERT INTO oa_execution_attempts(
           attempt_id, execution_contract_id, status, idempotency_key,
           version, result_recording_count, payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, 0, ?, ?, ?)`,
      )
      .run(
        attempt.attemptId,
        attempt.executionContractId,
        attempt.status,
        attempt.idempotencyKey,
        attempt.version,
        payload,
        now,
        now,
      );
  }

  async update(
    attempt: ExecutionAttempt,
    expectedVersion: number,
  ): Promise<void> {
    if (attempt.version !== expectedVersion + 1) {
      throw new ExecutionAttemptDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion },
      );
    }
    const shape = validateAttemptShape(attempt);
    if (shape) {
      throw new ExecutionAttemptDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    const now = attempt.updatedAt ?? attempt.completedAt ?? attempt.createdAt;
    const payload = JSON.stringify(cloneAttempt(attempt));
    // Atomic CAS: OCC enforced by SQL WHERE version = expectedVersion.
    const result = this.store.db
      .prepare(
        `UPDATE oa_execution_attempts SET
           execution_contract_id = ?,
           status = ?,
           idempotency_key = ?,
           version = ?,
           payload_json = ?,
           updated_at = ?
         WHERE attempt_id = ? AND version = ?`,
      )
      .run(
        attempt.executionContractId,
        attempt.status,
        attempt.idempotencyKey,
        attempt.version,
        payload,
        now,
        attempt.attemptId,
        expectedVersion,
      );
    if (Number(result.changes) !== 1) {
      const current = await this.findById(attempt.attemptId);
      if (!current) {
        throw new ExecutionAttemptDomainError(
          "ATTEMPT_NOT_FOUND",
          "update_missing_attempt",
        );
      }
      throw new ExecutionAttemptDomainError("VERSION_CONFLICT", "occ_mismatch", {
        expectedVersion,
        currentVersion: current.version,
      });
    }
  }

  async listByContract(
    executionContractId: string,
  ): Promise<ExecutionAttempt[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_execution_attempts
         WHERE execution_contract_id = ?
         ORDER BY attempt_id ASC`,
      )
      .all(executionContractId) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneAttempt(JSON.parse(row.payload_json) as ExecutionAttempt),
    );
  }

  async findActiveByContract(
    executionContractId: string,
  ): Promise<ExecutionAttempt | null> {
    const row = this.store.db
      .prepare(
        `SELECT attempt_id FROM oa_execution_attempt_active
         WHERE execution_contract_id = ?`,
      )
      .get(executionContractId) as { attempt_id?: string } | undefined;
    if (!row?.attempt_id) return null;
    return this.findById(row.attempt_id);
  }

  async reserveActiveContract(
    executionContractId: string,
    attemptId: string,
  ): Promise<void> {
    // Atomic insert — never silently replace another attempt's reservation.
    const result = this.store.db
      .prepare(
        `INSERT INTO oa_execution_attempt_active(execution_contract_id, attempt_id)
         VALUES (?, ?)
         ON CONFLICT(execution_contract_id) DO NOTHING`,
      )
      .run(executionContractId, attemptId);
    if (Number(result.changes) === 1) {
      return;
    }
    const current = this.store.db
      .prepare(
        `SELECT attempt_id FROM oa_execution_attempt_active
         WHERE execution_contract_id = ?`,
      )
      .get(executionContractId) as { attempt_id?: string } | undefined;
    if (current?.attempt_id === attemptId) {
      return; // idempotent same attemptId
    }
    throw new ExecutionAttemptDomainError(
      "EXECUTION_ALREADY_ACTIVE",
      "active_attempt_already_reserved",
    );
  }

  async releaseActiveContract(
    executionContractId: string,
    attemptId: string,
  ): Promise<void> {
    this.store.db
      .prepare(
        `DELETE FROM oa_execution_attempt_active
         WHERE execution_contract_id = ? AND attempt_id = ?`,
      )
      .run(executionContractId, attemptId);
  }

  async rebuildActiveIndex(): Promise<void> {
    await this.store.runInTransaction(async () => {
      const rows = this.store.db
        .prepare(
          `SELECT payload_json FROM oa_execution_attempts ORDER BY attempt_id ASC`,
        )
        .all() as Array<{ payload_json: string }>;
      const rebuilt = new Map<string, string>();
      for (const row of rows) {
        const attempt = JSON.parse(row.payload_json) as ExecutionAttempt;
        if (isAttemptTerminal(attempt.status)) continue;
        const existing = rebuilt.get(attempt.executionContractId);
        if (existing && existing !== attempt.attemptId) {
          throw new ExecutionAttemptDomainError(
            "ACTIVE_INDEX_DRIFT",
            "multiple_active_attempts_for_contract",
          );
        }
        rebuilt.set(attempt.executionContractId, attempt.attemptId);
      }
      this.store.db.exec(`DELETE FROM oa_execution_attempt_active`);
      const insert = this.store.db.prepare(
        `INSERT INTO oa_execution_attempt_active(execution_contract_id, attempt_id)
         VALUES (?, ?)`,
      );
      for (const [executionContractId, attemptId] of rebuilt) {
        insert.run(executionContractId, attemptId);
      }
    });
  }

  async detectActiveIndexDrift(): Promise<ActiveIndexDrift[]> {
    const drifts: ActiveIndexDrift[] = [];
    const indexed = this.store.db
      .prepare(
        `SELECT execution_contract_id, attempt_id FROM oa_execution_attempt_active`,
      )
      .all() as Array<{ execution_contract_id: string; attempt_id: string }>;

    for (const row of indexed) {
      const attempt = await this.findById(row.attempt_id);
      if (!attempt) {
        drifts.push({
          executionContractId: row.execution_contract_id,
          attemptId: row.attempt_id,
          reason: "indexed_attempt_missing",
        });
        continue;
      }
      if (isAttemptTerminal(attempt.status)) {
        drifts.push({
          executionContractId: row.execution_contract_id,
          attemptId: row.attempt_id,
          reason: "indexed_attempt_terminal",
        });
      }
    }

    const allRows = this.store.db
      .prepare(`SELECT payload_json FROM oa_execution_attempts`)
      .all() as Array<{ payload_json: string }>;
    const seenActive = new Map<string, string>();
    const activeIndex = new Map(
      indexed.map((r) => [r.execution_contract_id, r.attempt_id] as const),
    );

    for (const row of allRows) {
      const attempt = JSON.parse(row.payload_json) as ExecutionAttempt;
      if (isAttemptTerminal(attempt.status)) continue;
      const previous = seenActive.get(attempt.executionContractId);
      if (previous && previous !== attempt.attemptId) {
        drifts.push({
          executionContractId: attempt.executionContractId,
          attemptId: attempt.attemptId,
          reason: "multiple_active_attempts",
        });
      }
      seenActive.set(attempt.executionContractId, attempt.attemptId);
      const indexedId = activeIndex.get(attempt.executionContractId);
      if (indexedId !== attempt.attemptId) {
        drifts.push({
          executionContractId: attempt.executionContractId,
          attemptId: attempt.attemptId,
          reason: "active_attempt_not_indexed",
        });
      }
    }
    return drifts;
  }

  async assertActiveIndexConsistent(): Promise<void> {
    const drifts = await this.detectActiveIndexDrift();
    if (drifts.length > 0) {
      throw new ExecutionAttemptDomainError(
        "ACTIVE_INDEX_DRIFT",
        `drift_${drifts[0].reason}`,
      );
    }
  }

  private failIfForced(): void {
    if (this.store.failNextSave === "attempt") {
      this.store.failNextSave = null;
      throw new ExecutionAttemptDomainError(
        "EXECUTION_PERSISTENCE_FAILED",
        "forced_execution_attempt_save_failure",
      );
    }
  }
}
