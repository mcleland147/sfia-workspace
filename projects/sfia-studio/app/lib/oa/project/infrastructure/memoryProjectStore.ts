/**
 * Shared in-memory store with transactional helper for atomic Project + LPS create.
 * Reversible candidate — NOT DATABASE SELECTED (T-A1-D06).
 */
import type { LivingProjectState, Project } from "../domain/types";

type Snapshot = {
  projects: Map<string, Project>;
  lpsById: Map<string, LivingProjectState>;
  /** `${projectId}:${version}` → lpsVersionId */
  lpsIndex: Map<string, string>;
  /** projectId → active lpsVersionId */
  currentByProject: Map<string, string>;
  idempotency: Map<string, string>;
};

function cloneMap<K, V>(source: Map<K, V>): Map<K, V> {
  const next = new Map<K, V>();
  for (const [k, v] of source) {
    next.set(k, structuredClone(v));
  }
  return next;
}

function takeSnapshot(store: MemoryProjectStore): Snapshot {
  return {
    projects: cloneMap(store.projects),
    lpsById: cloneMap(store.lpsById),
    lpsIndex: new Map(store.lpsIndex),
    currentByProject: new Map(store.currentByProject),
    idempotency: new Map(store.idempotency),
  };
}

function restoreSnapshot(store: MemoryProjectStore, snap: Snapshot): void {
  store.projects = snap.projects;
  store.lpsById = snap.lpsById;
  store.lpsIndex = snap.lpsIndex;
  store.currentByProject = snap.currentByProject;
  store.idempotency = snap.idempotency;
}

export class MemoryProjectStore {
  projects = new Map<string, Project>();
  lpsById = new Map<string, LivingProjectState>();
  lpsIndex = new Map<string, string>();
  currentByProject = new Map<string, string>();
  idempotency = new Map<string, string>();

  private depth = 0;
  private stack: Snapshot[] = [];
  /** Serialize transactions — nested snapshot rollback is not re-entrant safe. */
  private queue: Promise<void> = Promise.resolve();

  /** Test hook — force next save to throw (atomicity tests). */
  failNextSave: "project" | "lps" | null = null;

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
    // Keep the chain alive regardless of transaction outcome.
    this.queue = next.then(
      () => undefined,
      () => undefined,
    );
    return next;
  }
}
