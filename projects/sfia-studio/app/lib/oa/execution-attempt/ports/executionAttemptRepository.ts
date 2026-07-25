import type { ExecutionAttempt } from "../domain/types";

export type ActiveIndexDrift = {
  executionContractId: string;
  attemptId?: string;
  reason:
    | "indexed_attempt_missing"
    | "indexed_attempt_terminal"
    | "active_attempt_not_indexed"
    | "multiple_active_attempts";
};

/**
 * ExecutionAttempt repository (RTA5-02 / RTA5-05).
 *
 * - OCC via `expectedVersion` on update (primary concurrency control)
 * - `activeByContractId` invariant: at most one non-terminal Attempt per
 *   ExecutionContract, reserved before create and released on terminal
 * - drift between the index and the stored Attempts is detectable and
 *   handled fail-closed by the use-cases
 * - memory only, no durability claim
 */
export interface ExecutionAttemptRepositoryPort {
  findById(attemptId: string): Promise<ExecutionAttempt | null>;
  findByIdempotencyKey(idempotencyKey: string): Promise<ExecutionAttempt | null>;
  exists(attemptId: string): Promise<boolean>;
  /** Insert a new Attempt (version must be 1). */
  create(attempt: ExecutionAttempt): Promise<void>;
  /** OCC update — refuses when the stored version differs. */
  update(attempt: ExecutionAttempt, expectedVersion: number): Promise<void>;
  listByContract(executionContractId: string): Promise<ExecutionAttempt[]>;
  findActiveByContract(
    executionContractId: string,
  ): Promise<ExecutionAttempt | null>;
  /** Idempotent for the same attemptId; refuses a different active Attempt. */
  reserveActiveContract(
    executionContractId: string,
    attemptId: string,
  ): Promise<void>;
  releaseActiveContract(
    executionContractId: string,
    attemptId: string,
  ): Promise<void>;
  /** Recompute the index from non-terminal Attempts (boot / recovery). */
  rebuildActiveIndex(): Promise<void>;
  detectActiveIndexDrift(): Promise<ActiveIndexDrift[]>;
  /** Fail-closed guard used before any mutating command. */
  assertActiveIndexConsistent(): Promise<void>;
}
