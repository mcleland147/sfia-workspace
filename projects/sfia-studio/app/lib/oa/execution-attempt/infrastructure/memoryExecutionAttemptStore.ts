/**
 * Shared in-memory store for ExecutionAttempt with a transactional helper.
 * Reversible candidate — NOT DATABASE SELECTED (T-A5).
 *
 * Non-durability (RTA5-06): everything here is lost on process restart,
 * including `result_pending` Attempts. This is a memory foundation, not a
 * durable execution runtime.
 *
 * Cross-store note (R1 / R-T-A3-2 residual): ExecutionContract lives in the
 * T-A4 store and Confirmation in the T-A3 store. Writes are sequential with
 * documented fail-closed compensation — not one atomic transaction.
 */
import type { ExecutionAttempt } from "../domain/types";

type Snapshot = {
  attempts: Map<string, ExecutionAttempt>;
  idempotencyIndex: Map<string, string>;
  activeByContractId: Map<string, string>;
  resultRecordingAttempts: Map<string, number>;
};

function cloneMap<K, V>(source: Map<K, V>): Map<K, V> {
  const next = new Map<K, V>();
  for (const [k, v] of source) {
    next.set(k, structuredClone(v));
  }
  return next;
}

function takeSnapshot(store: MemoryExecutionAttemptStore): Snapshot {
  return {
    attempts: cloneMap(store.attempts),
    idempotencyIndex: new Map(store.idempotencyIndex),
    activeByContractId: new Map(store.activeByContractId),
    resultRecordingAttempts: new Map(store.resultRecordingAttempts),
  };
}

function restoreSnapshot(
  store: MemoryExecutionAttemptStore,
  snap: Snapshot,
): void {
  store.attempts = snap.attempts;
  store.idempotencyIndex = snap.idempotencyIndex;
  store.activeByContractId = snap.activeByContractId;
  store.resultRecordingAttempts = snap.resultRecordingAttempts;
}

export class MemoryExecutionAttemptStore {
  attempts = new Map<string, ExecutionAttempt>();
  /** idempotencyKey → attemptId */
  idempotencyIndex = new Map<string, string>();
  /** executionContractId → attemptId of the single non-terminal Attempt */
  activeByContractId = new Map<string, string>();
  /** attemptId → bounded RecordExecutionResult attempts (RTA5-06 budget) */
  resultRecordingAttempts = new Map<string, number>();

  private depth = 0;
  private stack: Snapshot[] = [];
  private queue: Promise<void> = Promise.resolve();

  /** Test hook — force the next Attempt persist to throw. */
  failNextSave = false;

  begin(): void {
    this.stack.push(takeSnapshot(this));
    this.depth += 1;
  }

  commit(): void {
    if (this.depth === 0) {
      throw new Error("commit_without_begin");
    }
    this.stack.pop();
    this.depth -= 1;
  }

  rollback(): void {
    if (this.depth === 0) {
      throw new Error("rollback_without_begin");
    }
    const snap = this.stack.pop();
    this.depth -= 1;
    if (snap) restoreSnapshot(this, snap);
  }

  async runInTransaction<T>(fn: () => Promise<T>): Promise<T> {
    const run = async (): Promise<T> => {
      this.begin();
      try {
        const result = await fn();
        this.commit();
        return result;
      } catch (err) {
        this.rollback();
        throw err;
      }
    };

    const next = this.queue.then(run, run);
    this.queue = next.then(
      () => undefined,
      () => undefined,
    );
    return next;
  }
}
