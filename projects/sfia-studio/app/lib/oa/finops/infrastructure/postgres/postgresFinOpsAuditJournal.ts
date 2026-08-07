/**
 * FinOps T6-foundation — PostgreSQL append-only audit journal (O1-backed).
 * Reuses the existing FinOps pg.Pool factory; does not log connection strings.
 */

import { createHash, randomUUID } from "node:crypto";
import type { Pool } from "pg";
import type {
  FinOpsAuditRecord,
  FinOpsT6FoundationEventType,
} from "../../application/finopsAuditTypes";
import { isFinOpsT6FoundationEventType } from "../../application/finopsAuditTypes";
import type { FinOpsAuditEmitter } from "../../application/finopsAuditTypes";
import type { FinOpsAuditJournalPort } from "../../ports/finopsAuditJournalPort";
import {
  assertRedactedPayloadHasNoSecrets,
  redactFinOpsAuditPayload,
} from "./redactFinOpsAuditPayload";

export function createPostgresFinOpsAuditJournal(
  pool: Pool,
): FinOpsAuditJournalPort {
  return {
    async append(record: FinOpsAuditRecord): Promise<void> {
      if (!isFinOpsT6FoundationEventType(record.eventType)) {
        throw new Error("Unsupported FinOps T6-foundation audit event type");
      }
      assertRedactedPayloadHasNoSecrets(record.payload);
      await pool.query(
        `INSERT INTO finops_audit_event (
           audit_event_id,
           event_type,
           project_id,
           execution_run_id,
           correlation_id,
           occurred_at,
           payload_json,
           created_at
         ) VALUES ($1, $2, $3, $4, $5, $6::timestamptz, $7::jsonb, NOW())`,
        [
          record.auditEventId,
          record.eventType,
          record.projectId,
          record.executionRunId,
          record.correlationId,
          record.occurredAt,
          JSON.stringify(record.payload),
        ],
      );
    },
  };
}

function readOptionalString(
  detail: Readonly<Record<string, unknown>>,
  key: string,
): string | null {
  const value = detail[key];
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function deriveAuditEventId(input: {
  readonly type: FinOpsT6FoundationEventType;
  readonly detail: Readonly<Record<string, unknown>>;
  readonly occurredAt: string;
}): string {
  const material = [
    "t6-audit-v1",
    input.type,
    readOptionalString(input.detail, "eventId") ?? "",
    readOptionalString(input.detail, "projectId") ?? "",
    readOptionalString(input.detail, "executionRunId") ?? "",
    readOptionalString(input.detail, "correlationId") ?? "",
    readOptionalString(input.detail, "code") ?? "",
    input.occurredAt,
    randomUUID(),
  ].join("|");
  const digest = createHash("sha256").update(material, "utf8").digest("hex");
  return `aud_${digest}`;
}

/**
 * Best-effort durable emitter implementing the T1 FinOpsAuditEmitter boundary.
 * Journal failures are swallowed — never thrown to capture callers.
 */
export type DurableFinOpsAuditEmitter = FinOpsAuditEmitter & {
  /** Await in-flight journal appends (tests / orderly shutdown). */
  readonly flush: () => Promise<void>;
};

export function createDurableFinOpsAuditEmitter(
  journal: FinOpsAuditJournalPort,
  options?: {
    readonly nowIso?: () => string;
  },
): DurableFinOpsAuditEmitter {
  const nowIso = options?.nowIso ?? (() => new Date().toISOString());
  const pending = new Set<Promise<void>>();
  return {
    emit(event) {
      const occurredAt = nowIso();
      const payload = redactFinOpsAuditPayload(event.detail);
      const record: FinOpsAuditRecord = {
        auditEventId: deriveAuditEventId({
          type: event.type,
          detail: event.detail,
          occurredAt,
        }),
        eventType: event.type,
        projectId: readOptionalString(event.detail, "projectId"),
        executionRunId: readOptionalString(event.detail, "executionRunId"),
        correlationId: readOptionalString(event.detail, "correlationId"),
        occurredAt,
        payload,
      };
      const task = journal.append(record).catch(() => {
        // Fail-open: durable audit must not affect capture / user-run outcomes.
      });
      pending.add(task);
      void task.finally(() => {
        pending.delete(task);
      });
    },
    async flush() {
      await Promise.all([...pending]);
    },
  };
}
