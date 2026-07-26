/**
 * Shared in-memory store for Evidence (T-A6-D1).
 * Reversible candidate — NOT DATABASE SELECTED (U-M02 OPEN).
 * Non-durable: lost on process restart.
 */
import type { Evidence } from "../domain/types";
import type { IdempotencyRecord } from "../ports/evidenceRepository";

type Snapshot = {
  evidences: Map<string, Evidence>;
  idempotencyIndex: Map<string, IdempotencyRecord>;
};

function cloneMap<K, V>(source: Map<K, V>): Map<K, V> {
  const next = new Map<K, V>();
  for (const [k, v] of source) {
    next.set(k, structuredClone(v));
  }
  return next;
}

export class MemoryEvidenceStore {
  evidences = new Map<string, Evidence>();
  /** idempotencyKey → record */
  idempotencyIndex = new Map<string, IdempotencyRecord>();

  /** Test hook — next create/update fails once. */
  failNextSave = false;

  private depth = 0;
  private stack: Snapshot[] = [];

  begin(): void {
    if (this.depth === 0) {
      this.stack.push({
        evidences: cloneMap(this.evidences),
        idempotencyIndex: cloneMap(this.idempotencyIndex),
      });
    }
    this.depth += 1;
  }

  commit(): void {
    if (this.depth === 0) return;
    this.depth -= 1;
    if (this.depth === 0) this.stack.pop();
  }

  rollback(): void {
    if (this.depth === 0) return;
    this.depth -= 1;
    if (this.depth === 0) {
      const snap = this.stack.pop();
      if (snap) {
        this.evidences = snap.evidences;
        this.idempotencyIndex = snap.idempotencyIndex;
      }
    }
  }
}
