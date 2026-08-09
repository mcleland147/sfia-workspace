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
  cost_event_id, dedup_key, project_id, attribution_scope, execution_run_id,
  derived_source_reference, usage_event_id,
  period_start, currency, amount, evidence_class, source_of_truth,
  estimation_status, correction_ref, catalog_version, provider, model,
  unit, billing_quantum, usage_quantity, occurred_at, created_at
) VALUES (
  $1,$2,$3,$4,$5,$6,$7,$8::date,$9,$10::numeric,$11,$12,$13,$14,$15,$16,$17,
  $18,$19::numeric,$20::numeric,$21::timestamptz,NOW()
)
ON CONFLICT (dedup_key) DO NOTHING
RETURNING cost_event_id
`;

function rowToCostEvent(row: Record<string, unknown>): FinOpsCostEvent {
  const attributionScopeRaw = row.attribution_scope;
  const attributionScope =
    attributionScopeRaw === null || attributionScopeRaw === undefined
      ? ("EXECUTION_RUN" as const)
      : (String(attributionScopeRaw) as FinOpsCostEvent["attributionScope"]);
  return {
    costEventId: String(row.cost_event_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    attributionScope,
    executionRunId:
      row.execution_run_id === null || row.execution_run_id === undefined
        ? null
        : String(row.execution_run_id),
    derivedSourceReference:
      row.derived_source_reference === null ||
      row.derived_source_reference === undefined
        ? null
        : String(row.derived_source_reference),
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
    a.attributionScope === b.attributionScope &&
    a.executionRunId === b.executionRunId &&
    a.derivedSourceReference === b.derivedSourceReference &&
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
  const coreOps = {
    async insertCostEvent(
      client: PoolClient,
      event: FinOpsCostEvent,
    ): Promise<FinOpsCostEventInsertResult> {
      const inserted = await client.query<{ cost_event_id: string }>(
        INSERT_COST_SQL,
        [
          event.costEventId,
          event.dedupKey,
          event.projectId,
          event.attributionScope,
          event.executionRunId,
          event.derivedSourceReference,
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
        return { outcome: "created", costEventId: event.costEventId };
      }

      const existing = await client.query(
        `SELECT * FROM finops_cost_event WHERE dedup_key = $1 LIMIT 1`,
        [event.dedupKey],
      );
      if (existing.rowCount !== 1) {
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
        return {
          outcome: "conflict",
          code: "FINOPS_COST_DEDUP_CONFLICT",
          message: "FinOps cost dedup conflict with divergent payload",
        };
      }
      return {
        outcome: "duplicate",
        costEventId: existingEvent.costEventId,
      };
    },

    async listCostEventsForProjectPeriod(
      client: PoolClient | Pool,
      input: {
        readonly projectId: string;
        readonly periodStart: string;
        readonly currency?: string;
      },
    ) {
      const params: unknown[] = [input.projectId, input.periodStart];
      let sql = `SELECT * FROM finops_cost_event
        WHERE project_id = $1 AND period_start = $2::date`;
      if (input.currency) {
        params.push(input.currency);
        sql += ` AND currency = $3`;
      }
      sql += ` ORDER BY occurred_at ASC, cost_event_id ASC`;
      const result = await client.query(sql, params);
      return result.rows.map((row) =>
        rowToCostEvent(row as Record<string, unknown>),
      );
    },

    async findReconciliationByDedup(client: PoolClient | Pool, dedupKey: string) {
      const result = await client.query(
        `SELECT * FROM finops_reconciliation_record WHERE dedup_key = $1 LIMIT 1`,
        [dedupKey],
      );
      if (result.rowCount !== 1) return null;
      return rowToRecon(result.rows[0] as Record<string, unknown>);
    },

    async insertReconciliationRecord(
      client: PoolClient | Pool,
      record: FinOpsReconciliationRecord,
    ) {
      try {
        const inserted = await client.query(
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
        const existing = await client.query(
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

    async completeReconciliationRecord(
      client: PoolClient | Pool,
      input: {
        readonly reconciliationId: string;
        readonly status: "succeeded" | "failed";
        readonly processedCount: number;
        readonly errorCode: string | null;
        readonly errorMessage: string | null;
        readonly completedAt: string;
      },
    ) {
      await client.query(
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

  return {
    async insertCostEvent(event): Promise<FinOpsCostEventInsertResult> {
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        const result = await coreOps.insertCostEvent(client, event);
        if (result.outcome === "failed") {
          await client.query("ROLLBACK");
        } else {
          await client.query("COMMIT");
        }
        return result;
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
      return coreOps.listCostEventsForProjectPeriod(pool, input);
    },

    async findReconciliationByDedup(dedupKey) {
      return coreOps.findReconciliationByDedup(pool, dedupKey);
    },

    async insertReconciliationRecord(record) {
      return coreOps.insertReconciliationRecord(pool, record);
    },

    async completeReconciliationRecord(input) {
      await coreOps.completeReconciliationRecord(pool, input);
    },

    async withExclusiveProjectPeriodReconciliation(input, work) {
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        await client.query(
          `SELECT pg_advisory_xact_lock(hashtext($1), hashtext($2))`,
          [`finops-t2-period:${input.projectId}`, input.periodStart],
        );
        const ops = {
          insertCostEvent: (event: FinOpsCostEvent) =>
            coreOps.insertCostEvent(client!, event),
          listCostEventsForProjectPeriod: (listInput: {
            readonly projectId: string;
            readonly periodStart: string;
            readonly currency?: string;
          }) => coreOps.listCostEventsForProjectPeriod(client!, listInput),
          findReconciliationByDedup: (dedupKey: string) =>
            coreOps.findReconciliationByDedup(client!, dedupKey),
          insertReconciliationRecord: (record: FinOpsReconciliationRecord) =>
            coreOps.insertReconciliationRecord(client!, record),
          completeReconciliationRecord: (
            completeInput: Parameters<
              FinOpsReconciliationPort["completeReconciliationRecord"]
            >[0],
          ) => coreOps.completeReconciliationRecord(client!, completeInput),
        };
        const result = await work(ops);
        await client.query("COMMIT");
        return result;
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore
          }
        }
        throw error;
      } finally {
        client?.release();
      }
    },
  };
}
