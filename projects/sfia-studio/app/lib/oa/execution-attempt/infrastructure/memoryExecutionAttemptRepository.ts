import { ExecutionAttemptDomainError } from "../domain/errors";
import { isAttemptTerminal, validateAttemptShape } from "../domain/invariants";
import type { ExecutionAttempt } from "../domain/types";
import type {
  ActiveIndexDrift,
  ExecutionAttemptRepositoryPort,
} from "../ports/executionAttemptRepository";
import type { MemoryExecutionAttemptStore } from "./memoryExecutionAttemptStore";

export class MemoryExecutionAttemptRepository
  implements ExecutionAttemptRepositoryPort
{
  constructor(private readonly store: MemoryExecutionAttemptStore) {}

  async findById(attemptId: string): Promise<ExecutionAttempt | null> {
    const found = this.store.attempts.get(attemptId);
    return found ? structuredClone(found) : null;
  }

  async findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<ExecutionAttempt | null> {
    const attemptId = this.store.idempotencyIndex.get(idempotencyKey);
    if (!attemptId) return null;
    return this.findById(attemptId);
  }

  async exists(attemptId: string): Promise<boolean> {
    return this.store.attempts.has(attemptId);
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
    if (this.store.attempts.has(attempt.attemptId)) {
      throw new ExecutionAttemptDomainError(
        "ATTEMPT_ALREADY_EXISTS",
        "attempt_id_taken",
      );
    }
    const existingKeyOwner = this.store.idempotencyIndex.get(
      attempt.idempotencyKey,
    );
    if (existingKeyOwner && existingKeyOwner !== attempt.attemptId) {
      throw new ExecutionAttemptDomainError(
        "ATTEMPT_IDEMPOTENCY_CONFLICT",
        "idempotency_key_taken",
      );
    }
    this.failIfForced();
    this.store.attempts.set(attempt.attemptId, structuredClone(attempt));
    this.store.idempotencyIndex.set(attempt.idempotencyKey, attempt.attemptId);
  }

  async update(
    attempt: ExecutionAttempt,
    expectedVersion: number,
  ): Promise<void> {
    const current = this.store.attempts.get(attempt.attemptId);
    if (!current) {
      throw new ExecutionAttemptDomainError(
        "ATTEMPT_NOT_FOUND",
        "update_missing_attempt",
      );
    }
    if (current.version !== expectedVersion) {
      throw new ExecutionAttemptDomainError("VERSION_CONFLICT", "occ_mismatch", {
        expectedVersion,
        currentVersion: current.version,
      });
    }
    if (attempt.version !== expectedVersion + 1) {
      throw new ExecutionAttemptDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    const shape = validateAttemptShape(attempt);
    if (shape) {
      throw new ExecutionAttemptDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    this.store.attempts.set(attempt.attemptId, structuredClone(attempt));
  }

  async listByContract(
    executionContractId: string,
  ): Promise<ExecutionAttempt[]> {
    const out: ExecutionAttempt[] = [];
    for (const attempt of this.store.attempts.values()) {
      if (attempt.executionContractId === executionContractId) {
        out.push(structuredClone(attempt));
      }
    }
    return out.sort((a, b) => (a.attemptId < b.attemptId ? -1 : 1));
  }

  async findActiveByContract(
    executionContractId: string,
  ): Promise<ExecutionAttempt | null> {
    const attemptId = this.store.activeByContractId.get(executionContractId);
    if (!attemptId) return null;
    return this.findById(attemptId);
  }

  async reserveActiveContract(
    executionContractId: string,
    attemptId: string,
  ): Promise<void> {
    const current = this.store.activeByContractId.get(executionContractId);
    if (current && current !== attemptId) {
      throw new ExecutionAttemptDomainError(
        "EXECUTION_ALREADY_ACTIVE",
        "active_attempt_already_reserved",
      );
    }
    this.store.activeByContractId.set(executionContractId, attemptId);
  }

  async releaseActiveContract(
    executionContractId: string,
    attemptId: string,
  ): Promise<void> {
    const current = this.store.activeByContractId.get(executionContractId);
    if (current === attemptId) {
      this.store.activeByContractId.delete(executionContractId);
    }
  }

  async rebuildActiveIndex(): Promise<void> {
    const rebuilt = new Map<string, string>();
    for (const attempt of [...this.store.attempts.values()].sort((a, b) =>
      a.attemptId < b.attemptId ? -1 : 1,
    )) {
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
    this.store.activeByContractId = rebuilt;
  }

  async detectActiveIndexDrift(): Promise<ActiveIndexDrift[]> {
    const drifts: ActiveIndexDrift[] = [];
    for (const [executionContractId, attemptId] of this.store
      .activeByContractId) {
      const attempt = this.store.attempts.get(attemptId);
      if (!attempt) {
        drifts.push({
          executionContractId,
          attemptId,
          reason: "indexed_attempt_missing",
        });
        continue;
      }
      if (isAttemptTerminal(attempt.status)) {
        drifts.push({
          executionContractId,
          attemptId,
          reason: "indexed_attempt_terminal",
        });
      }
    }
    const seenActive = new Map<string, string>();
    for (const attempt of this.store.attempts.values()) {
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
      const indexed = this.store.activeByContractId.get(
        attempt.executionContractId,
      );
      if (indexed !== attempt.attemptId) {
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
    if (this.store.failNextSave) {
      this.store.failNextSave = false;
      throw new ExecutionAttemptDomainError(
        "EXECUTION_PERSISTENCE_FAILED",
        "forced_execution_attempt_save_failure",
      );
    }
  }
}
