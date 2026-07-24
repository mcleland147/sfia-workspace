/**
 * Shared in-memory store with transactional helper for Cycle / Trajectory / Epistemic.
 * Reversible candidate — NOT DATABASE SELECTED (T-A2-D06).
 */
import type {
  CycleInstance,
  EpistemicItem,
  ProjectTrajectory,
} from "../domain/types";

type Snapshot = {
  cycles: Map<string, CycleInstance>;
  trajectoriesByKey: Map<string, ProjectTrajectory>;
  currentTrajectoryByProject: Map<string, string>;
  epistemicById: Map<string, EpistemicItem>;
  epistemicByProject: Map<string, string[]>;
};

function cloneMap<K, V>(source: Map<K, V>): Map<K, V> {
  const next = new Map<K, V>();
  for (const [k, v] of source) {
    next.set(k, structuredClone(v));
  }
  return next;
}

function takeSnapshot(store: MemoryCycleStore): Snapshot {
  return {
    cycles: cloneMap(store.cycles),
    trajectoriesByKey: cloneMap(store.trajectoriesByKey),
    currentTrajectoryByProject: new Map(store.currentTrajectoryByProject),
    epistemicById: cloneMap(store.epistemicById),
    epistemicByProject: new Map(
      [...store.epistemicByProject.entries()].map(([k, v]) => [k, [...v]]),
    ),
  };
}

function restoreSnapshot(store: MemoryCycleStore, snap: Snapshot): void {
  store.cycles = snap.cycles;
  store.trajectoriesByKey = snap.trajectoriesByKey;
  store.currentTrajectoryByProject = snap.currentTrajectoryByProject;
  store.epistemicById = snap.epistemicById;
  store.epistemicByProject = snap.epistemicByProject;
}

export function trajectoryKey(trajectoryId: string, version: number): string {
  return `${trajectoryId}:${version}`;
}

export class MemoryCycleStore {
  cycles = new Map<string, CycleInstance>();
  /** `${trajectoryId}:${version}` → trajectory */
  trajectoriesByKey = new Map<string, ProjectTrajectory>();
  /** projectId → `${trajectoryId}:${version}` of current */
  currentTrajectoryByProject = new Map<string, string>();
  epistemicById = new Map<string, EpistemicItem>();
  epistemicByProject = new Map<string, string[]>();

  private depth = 0;
  private stack: Snapshot[] = [];
  private queue: Promise<void> = Promise.resolve();

  /** Test hook — force next save to throw. */
  failNextSave: "cycle" | "trajectory" | "epistemic" | null = null;

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
