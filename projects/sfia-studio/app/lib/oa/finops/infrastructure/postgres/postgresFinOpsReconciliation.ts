/**
 * FinOps T2 — PostgreSQL reconciliation + append-only cost-event adapter.
 */

import type { Pool, PoolClient } from "pg";
import type {
  FinOpsCostEvent,
  FinOpsCostEventInsertResult,
  FinOpsReconciliationRecord,
} from "../../application/types.aggregate";
import { formatMoneyString, parseMoneyString } from "../../domain/money";
import type { FinOpsReconciliationPort } from "../../ports/finopsReconciliationPort";
import { sanitizeDbError } from "./sanitizeDbError";

function formatPgDate(value: unknown): string {
  if (value instanceof Date) {
    // node-pg maps DATE to a local-midnight Date; use local Y/M/D (not UTC).
    const y = value.getFullYear();
    const m = String(value.getMonth() + 1).padStart(2, "0");
    const d = String(value.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  const raw = String(value);
  // node-pg may return 'YYYY-MM-DD' or a longer timestamp string.
  const match = /^(\d{4}-\d{2}-\d{2})/.exec(raw);
  if (match) return match[1]!;
  throw new Error("invalid period_start from postgres");
}

const INSERT_COST_SQL = `
INSERT INTO finops_cost_event (
  cost_event_id, dedup_key, project_id, execution_run_id, usage_event_id,
  period_start, currency, amount, evidence_class, source_of_truth,
  estimation_status, correction_ref, catalog_version, provider, model,
  unit, billing_quantum, usage_quantity, occurred_at, created_at
) VALUES (
  $1,$2,$3,$4,$5,$6::date,$7,$8::numeric,$9,$10,$11,$12,$13,$14,$15,
  $16,$17::numeric,$18::numeric,$19::timestamptz,NOW()
)
ON CONFLICT (dedup_key) DO NOTHING
RETURNING cost_event_id
`;

function rowToCostEvent(row: Record<string, unknown>): FinOpsCostEvent {
  return {
    costEventId: String(row.cost_event_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    executionRunId: String(row.execution_run_id),
    usageEventId:
      row.usage_event_id === null || row.usage_event_id === undefined
        ? null
        : String(row.usage_event_id),
    periodStart: formatPgDate(row.period_start),
    currency: String(row.currency),
    amount:
      row.amount === null || row.amount === undefined
        ? null
        : formatMoneyString(
            parseMoneyString(String(row.amount), String(row.currency)),
          ),
    evidenceClass: row.evidence_class as FinOpsCostEvent["evidenceClass"],
    sourceOfTruth: row.source_of_truth as FinOpsCostEvent["sourceOfTruth"],
    estimationStatus:
      row.estimation_status as FinOpsCostEvent["estimationStatus"],
    correctionRef:
      row.correction_ref === null || row.correction_ref === undefined
        ? null
        : String(row.correction_ref),
    catalogVersion:
      row.catalog_version === null || row.catalog_version === undefined
        ? null
        : String(row.catalog_version),
    provider: String(row.provider),
    model:
      row.model === null || row.model === undefined ? null : String(row.model),
    unit: row.unit === null || row.unit === undefined ? null : String(row.unit),
    billingQuantum:
      row.billing_quantum === null || row.billing_quantum === undefined
        ? null
        : String(row.billing_quantum),
    usageQuantity:
      row.usage_quantity === null || row.usage_quantity === undefined
        ? null
        : String(row.usage_quantity),
    occurredAt:
      row.occurred_at instanceof Date
        ? row.occurred_at.toISOString()
        : String(row.occurred_at),
  };
}

function rowToRecon(row: Record<string, unknown>): FinOpsReconciliationRecord {
  return {
    reconciliationId: String(row.reconciliation_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    periodStart: formatPgDate(row.period_start),
    sourceBatchId: String(row.source_batch_id),
    status: row.status as FinOpsReconciliationRecord["status"],
    processedCount: Number(row.processed_count),
    errorCode:
      row.error_code === null || row.error_code === undefined
        ? null
        : String(row.error_code),
    errorMessage:
      row.error_message === null || row.error_message === undefined
        ? null
        : String(row.error_message),
    completedAt:
      row.completed_at === null || row.completed_at === undefined
        ? null
        : row.completed_at instanceof Date
          ? row.completed_at.toISOString()
          : String(row.completed_at),
  };
}

function fingerprintEqual(a: FinOpsCostEvent, b: FinOpsCostEvent): boolean {
  return (
    a.projectId === b.projectId &&
    a.executionRunId === b.executionRunId &&
    a.usageEventId === b.usageEventId &&
    a.periodStart === b.periodStart &&
    a.currency === b.currency &&
    a.amount === b.amount &&
    a.evidenceClass === b.evidenceClass &&
    a.sourceOfTruth === b.sourceOfTruth &&
    a.estimationStatus === b.estimationStatus &&
    a.correctionRef === b.correctionRef &&
    a.provider === b.provider &&
    a.model === b.model
  );
}

export function createPostgresFinOpsReconciliation(
  pool: Pool,
): FinOpsReconciliationPort {
  return {
    async insertCostEvent(event): Promise<FinOpsCostEventInsertResult> {
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        const inserted = await client.query<{ cost_event_id: string }>(
          INSERT_COST_SQL,
          [
            event.costEventId,
            event.dedupKey,
            event.projectId,
            event.executionRunId,
            event.usageEventId,
            event.periodStart,
            event.currency,
            event.amount,
            event.evidenceClass,
            event.sourceOfTruth,
            event.estimationStatus,
            event.correctionRef,
            event.catalogVersion,
            event.provider,
            event.model,
            event.unit,
            event.billingQuantum,
            event.usageQuantity,
            event.occurredAt,
          ],
        );

        if (inserted.rowCount === 1) {
          await client.query("COMMIT");
          return { outcome: "created", costEventId: event.costEventId };
        }

        const existing = await client.query(
          `SELECT * FROM finops_cost_event WHERE dedup_key = $1 LIMIT 1`,
          [event.dedupKey],
        );
        if (existing.rowCount !== 1) {
          await client.query("ROLLBACK");
          return {
            outcome: "failed",
            code: "FINOPS_COST_PERSIST_FAILED",
            message: "FinOps cost event persist failed",
            retryable: true,
          };
        }
        const existingEvent = rowToCostEvent(
          existing.rows[0] as Record<string, unknown>,
        );
        if (!fingerprintEqual(existingEvent, event)) {
          await client.query("ROLLBACK");
          return {
            outcome: "conflict",
            code: "FINOPS_COST_DEDUP_CONFLICT",
            message: "FinOps cost dedup conflict with divergent payload",
          };
        }
        await client.query("COMMIT");
        return {
          outcome: "duplicate",
          costEventId: existingEvent.costEventId,
        };
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore
          }
        }
        const sanitized = sanitizeDbError(error);
        return {
          outcome: "failed",
          code: "FINOPS_COST_PERSIST_FAILED",
          message: sanitized.message,
          retryable: sanitized.retryable,
        };
      } finally {
        client?.release();
      }
    },

    async listCostEventsForProjectPeriod(input) {
      const params: unknown[] = [input.projectId, input.periodStart];
      let sql = `SELECT * FROM finops_cost_event
        WHERE project_id = $1 AND period_start = $2::date`;
      if (input.currency) {
        params.push(input.currency);
        sql += ` AND currency = $3`;
      }
      sql += ` ORDER BY occurred_at ASC, cost_event_id ASC`;
      const result = await pool.query(sql, params);
      return result.rows.map((row) =>
        rowToCostEvent(row as Record<string, unknown>),
      );
    },

    async findReconciliationByDedup(dedupKey) {
      const result = await pool.query(
        `SELECT * FROM finops_reconciliation_record WHERE dedup_key = $1 LIMIT 1`,
        [dedupKey],
      );
      if (result.rowCount !== 1) return null;
      return rowToRecon(result.rows[0] as Record<string, unknown>);
    },

    async insertReconciliationRecord(record) {
      try {
        const inserted = await pool.query(
          `INSERT INTO finops_reconciliation_record (
            reconciliation_id, dedup_key, project_id, period_start,
            source_batch_id, status, processed_count, error_code,
            error_message, created_at, completed_at
          ) VALUES (
            $1,$2,$3,$4::date,$5,$6,$7,$8,$9,NOW(),$10::timestamptz
          )
          ON CONFLICT (dedup_key) DO NOTHING
          RETURNING reconciliation_id`,
          [
            record.reconciliationId,
            record.dedupKey,
            record.projectId,
            record.periodStart,
            record.sourceBatchId,
            record.status,
            record.processedCount,
            record.errorCode,
            record.errorMessage,
            record.completedAt,
          ],
        );
        if (inserted.rowCount === 1) return { outcome: "created" as const };
        const existing = await pool.query(
          `SELECT * FROM finops_reconciliation_record WHERE dedup_key = $1 LIMIT 1`,
          [record.dedupKey],
        );
        if (existing.rowCount !== 1) {
          return {
            outcome: "failed" as const,
            message: "reconciliation record missing after conflict",
            retryable: true,
          };
        }
        return {
          outcome: "duplicate" as const,
          existing: rowToRecon(existing.rows[0] as Record<string, unknown>),
        };
      } catch (error) {
        const sanitized = sanitizeDbError(error);
        return {
          outcome: "failed" as const,
          message: sanitized.message,
          retryable: sanitized.retryable,
        };
      }
    },

    async completeReconciliationRecord(input) {
      await pool.query(
        `UPDATE finops_reconciliation_record
         SET status = $2,
             processed_count = $3,
             error_code = $4,
             error_message = $5,
             completed_at = $6::timestamptz
         WHERE reconciliation_id = $1`,
        [
          input.reconciliationId,
          input.status,
          input.processedCount,
          input.errorCode,
          input.errorMessage,
          input.completedAt,
        ],
      );
    },
  };
}
