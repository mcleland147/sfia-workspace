/**
 * Shared in-memory store with transactional helper for Decision / Confirmation.
 * Reversible candidate — NOT DATABASE SELECTED (T-A3).
 */
import type { Confirmation, HumanDecision } from "../domain/types";

type Snapshot = {
  decisions: Map<string, HumanDecision>;
  confirmations: Map<string, Confirmation>;
  idempotencyIndex: Map<string, string>;
};

function cloneMap<K, V>(source: Map<K, V>): Map<K, V> {
  const next = new Map<K, V>();
  for (const [k, v] of source) {
    next.set(k, structuredClone(v));
  }
  return next;
}

function takeSnapshot(store: MemoryDecisionStore): Snapshot {
  return {
    decisions: cloneMap(store.decisions),
    confirmations: cloneMap(store.confirmations),
    idempotencyIndex: new Map(store.idempotencyIndex),
  };
}

function restoreSnapshot(store: MemoryDecisionStore, snap: Snapshot): void {
  store.decisions = snap.decisions;
  store.confirmations = snap.confirmations;
  store.idempotencyIndex = snap.idempotencyIndex;
}

export class MemoryDecisionStore {
  decisions = new Map<string, HumanDecision>();
  confirmations = new Map<string, Confirmation>();
  /** idempotencyKey → confirmationId */
  idempotencyIndex = new Map<string, string>();

  private depth = 0;
  private stack: Snapshot[] = [];
  private queue: Promise<void> = Promise.resolve();

  /** Test hook — force next save to throw. */
  failNextSave: "decision" | "confirmation" | null = null;

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
