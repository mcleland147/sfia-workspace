/**
 * Shared in-memory store with transactional helper for ExecutionContract.
 * Reversible candidate — NOT DATABASE SELECTED (T-A4).
 *
 * Cross-store note (R-T-A3-2 residual): Confirmation live in the Decision
 * store. ConfirmExecutionContract consumes via DecisionServices public API
 * then persists the contract here — not a single atomic cross-store txn.
 */
import type { ExecutionContract } from "../domain/types";

type Snapshot = {
  contracts: Map<string, ExecutionContract>;
  idempotencyIndex: Map<string, string>;
};

function cloneMap<K, V>(source: Map<K, V>): Map<K, V> {
  const next = new Map<K, V>();
  for (const [k, v] of source) {
    next.set(k, structuredClone(v));
  }
  return next;
}

function takeSnapshot(store: MemoryExecutionContractStore): Snapshot {
  return {
    contracts: cloneMap(store.contracts),
    idempotencyIndex: new Map(store.idempotencyIndex),
  };
}

function restoreSnapshot(
  store: MemoryExecutionContractStore,
  snap: Snapshot,
): void {
  store.contracts = snap.contracts;
  store.idempotencyIndex = snap.idempotencyIndex;
}

export class MemoryExecutionContractStore {
  contracts = new Map<string, ExecutionContract>();
  /** idempotencyKey → executionContractId */
  idempotencyIndex = new Map<string, string>();

  private depth = 0;
  private stack: Snapshot[] = [];
  private queue: Promise<void> = Promise.resolve();

  /** Test hook — force next save to throw. */
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
