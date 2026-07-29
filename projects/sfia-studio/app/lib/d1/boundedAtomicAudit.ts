/**
 * Bounded local atomic audit — uses existing D1 node:sqlite.
 * NOT product persistence SELECTED. Git remains method truth.
 * Implements ProjectCycleAuditPort without platform importing d1.
 */

import type { DatabaseSync } from "node:sqlite";
import { openD1Db, nowIso } from "@/lib/d1/db";
import type { ProjectCycleAuditPort } from "@/lib/platform/t-a7/projectCycleAtomicCoordinator";

export const BOUNDED_ATOMIC_AUDIT_SCHEMA_VERSION =
  "t-a7-bounded-atomic-audit.1" as const;

export type BoundedAtomicPhase =
  | "prepare"
  | "apply_project"
  | "apply_cycle"
  | "verify"
  | "commit"
  | "rollback";

export type BoundedAtomicOutcome =
  | "IN_PROGRESS"
  | "COMMITTED"
  | "ROLLED_BACK"
  | "FAILED"
  | "CONFLICT";

export interface BoundedAtomicAuditRecord {
  readonly opId: string;
  readonly idempotencyKey: string;
  readonly phase: BoundedAtomicPhase;
  readonly outcome: BoundedAtomicOutcome;
  readonly correlationId: string;
  readonly projectRef: string | null;
  readonly cycleRef: string | null;
  readonly payloadJson: string;
  readonly createdAt: string;
  readonly schemaVersion: typeof BOUNDED_ATOMIC_AUDIT_SCHEMA_VERSION;
}

export interface AppendAtomicAuditInput {
  readonly opId: string;
  readonly idempotencyKey: string;
  readonly phase: BoundedAtomicPhase;
  readonly outcome: BoundedAtomicOutcome;
  readonly correlationId: string;
  readonly projectRef?: string | null;
  readonly cycleRef?: string | null;
  readonly payload?: unknown;
}

export class BoundedAtomicAuditStore implements ProjectCycleAuditPort {
  constructor(private readonly db: DatabaseSync = openD1Db()) {}

  append(input: AppendAtomicAuditInput): BoundedAtomicAuditRecord {
    const createdAt = nowIso();
    const record: BoundedAtomicAuditRecord = {
      opId: input.opId,
      idempotencyKey: input.idempotencyKey,
      phase: input.phase,
      outcome: input.outcome,
      correlationId: input.correlationId,
      projectRef: input.projectRef ?? null,
      cycleRef: input.cycleRef ?? null,
      payloadJson: JSON.stringify(input.payload ?? {}),
      createdAt,
      schemaVersion: BOUNDED_ATOMIC_AUDIT_SCHEMA_VERSION,
    };

    this.db.exec("BEGIN IMMEDIATE");
    try {
      this.db
        .prepare(
          `INSERT INTO d1_atomic_audit (
            op_id, idempotency_key, phase, outcome, correlation_id,
            project_ref, cycle_ref, payload_json, created_at, schema_version
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(
          record.opId,
          record.idempotencyKey,
          record.phase,
          record.outcome,
          record.correlationId,
          record.projectRef,
          record.cycleRef,
          record.payloadJson,
          record.createdAt,
          record.schemaVersion,
        );
      this.db.exec("COMMIT");
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      throw error;
    }
    return Object.freeze(record);
  }

  findByIdempotencyKey(key: string): BoundedAtomicAuditRecord[] {
    const rows = this.db
      .prepare(
        `SELECT * FROM d1_atomic_audit
         WHERE idempotency_key = ?
         ORDER BY created_at ASC`,
      )
      .all(key) as Record<string, unknown>[];
    return rows.map(mapRow);
  }

  listByOpId(opId: string): BoundedAtomicAuditRecord[] {
    const rows = this.db
      .prepare(
        `SELECT * FROM d1_atomic_audit
         WHERE op_id = ?
         ORDER BY created_at ASC`,
      )
      .all(opId) as Record<string, unknown>[];
    return rows.map(mapRow);
  }

  clearForTests(): void {
    this.db.exec("DELETE FROM d1_atomic_audit");
  }
}

function mapRow(row: Record<string, unknown>): BoundedAtomicAuditRecord {
  return Object.freeze({
    opId: String(row.op_id),
    idempotencyKey: String(row.idempotency_key),
    phase: String(row.phase) as BoundedAtomicPhase,
    outcome: String(row.outcome) as BoundedAtomicOutcome,
    correlationId: String(row.correlation_id),
    projectRef: row.project_ref == null ? null : String(row.project_ref),
    cycleRef: row.cycle_ref == null ? null : String(row.cycle_ref),
    payloadJson: String(row.payload_json),
    createdAt: String(row.created_at),
    schemaVersion: BOUNDED_ATOMIC_AUDIT_SCHEMA_VERSION,
  });
}
