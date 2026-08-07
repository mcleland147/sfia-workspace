/**
 * FinOps T2 — PostgreSQL A1 durable aggregate store.
 *
 * Exclusive rebuild uses ONE PoolClient + transaction advisory lock so the
 * critical section (read cost events → derive → replace) cannot starve the
 * pool: waiters block on lock acquisition inside their own transactions; the
 * holder uses the same connection for all SQL until COMMIT/ROLLBACK.
 */

import type { Pool, PoolClient } from "pg";
import type {
  FinOpsAggregateKey,
  FinOpsCostEvent,
  FinOpsProjectPeriodAggregate,
} from "../../application/types.aggregate";
import { formatMoneyString, parseMoneyString } from "../../domain/money";
import type {
  FinOpsAggregatePort,
  FinOpsExclusiveProjectPeriodRebuildOps,
} from "../../ports/finopsAggregatePort";
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
  const match = /^(\d{4}-\d{2}-\d{2})/.exec(raw);
  if (match) return match[1]!;
  throw new Error("invalid period_start from postgres");
}

function canonicalAmount(raw: unknown, currency: string): string {
  return formatMoneyString(parseMoneyString(String(raw), currency));
}

function rowToAggregate(
  row: Record<string, unknown>,
): FinOpsProjectPeriodAggregate {
  const currency = String(row.currency);
  return {
    projectId: String(row.project_id),
    periodStart: formatPgDate(row.period_start),
    currency,
    estimatedAmount: canonicalAmount(row.estimated_amount, currency),
    observedAmount: canonicalAmount(row.observed_amount, currency),
    billedAmount: canonicalAmount(row.billed_amount, currency),
    unknownAmount: canonicalAmount(row.unknown_amount, currency),
    inputTokensSum:
      row.input_tokens_sum === null || row.input_tokens_sum === undefined
        ? null
        : Number(row.input_tokens_sum),
    outputTokensSum:
      row.output_tokens_sum === null || row.output_tokens_sum === undefined
        ? null
        : Number(row.output_tokens_sum),
    totalTokensSum:
      row.total_tokens_sum === null || row.total_tokens_sum === undefined
        ? null
        : Number(row.total_tokens_sum),
    costEventCount: Number(row.cost_event_count),
    unavailableEstimationCount: Number(row.unavailable_estimation_count),
    rebuildVersion: Number(row.rebuild_version),
    rebuiltAt:
      row.rebuilt_at instanceof Date
        ? row.rebuilt_at.toISOString()
        : String(row.rebuilt_at),
  };
}

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

async function deleteAndInsertAggregates(
  client: PoolClient,
  projectId: string,
  periodStart: string,
  aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>,
): Promise<void> {
  await client.query(
    `DELETE FROM finops_usage_aggregate
     WHERE project_id = $1 AND period_start = $2::date`,
    [projectId, periodStart],
  );
  for (const agg of aggregates) {
    await client.query(
      `INSERT INTO finops_usage_aggregate (
        project_id, period_start, currency,
        estimated_amount, observed_amount, billed_amount, unknown_amount,
        input_tokens_sum, output_tokens_sum, total_tokens_sum,
        cost_event_count, unavailable_estimation_count,
        rebuild_version, rebuilt_at
      ) VALUES (
        $1,$2::date,$3,$4::numeric,$5::numeric,$6::numeric,$7::numeric,
        $8,$9,$10,$11,$12,$13,$14::timestamptz
      )`,
      [
        agg.projectId,
        agg.periodStart,
        agg.currency,
        agg.estimatedAmount,
        agg.observedAmount,
        agg.billedAmount,
        agg.unknownAmount,
        agg.inputTokensSum,
        agg.outputTokensSum,
        agg.totalTokensSum,
        agg.costEventCount,
        agg.unavailableEstimationCount,
        agg.rebuildVersion,
        agg.rebuiltAt,
      ],
    );
  }
}

function buildExclusiveOps(
  client: PoolClient,
  projectId: string,
  periodStart: string,
): FinOpsExclusiveProjectPeriodRebuildOps {
  return {
    async listAllCostEventsForPeriod() {
      const result = await client.query(
        `SELECT * FROM finops_cost_event
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY occurred_at ASC, cost_event_id ASC`,
        [projectId, periodStart],
      );
      return result.rows.map((row) =>
        rowToCostEvent(row as Record<string, unknown>),
      );
    },
    async listAggregates() {
      const result = await client.query(
        `SELECT * FROM finops_usage_aggregate
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY currency ASC`,
        [projectId, periodStart],
      );
      return result.rows.map((row) =>
        rowToAggregate(row as Record<string, unknown>),
      );
    },
    async replaceAggregates(aggregates) {
      await deleteAndInsertAggregates(
        client,
        projectId,
        periodStart,
        aggregates,
      );
    },
  };
}

export function createPostgresFinOpsAggregateStore(
  pool: Pool,
): FinOpsAggregatePort {
  return {
    async replaceProjectPeriodAggregates(input) {
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        await deleteAndInsertAggregates(
          client,
          input.projectId,
          input.periodStart,
          input.aggregates,
        );
        await client.query("COMMIT");
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore
          }
        }
        const sanitized = sanitizeDbError(error);
        throw new Error(sanitized.message);
      } finally {
        client?.release();
      }
    },

    async readAggregate(key: FinOpsAggregateKey) {
      const result = await pool.query(
        `SELECT * FROM finops_usage_aggregate
         WHERE project_id = $1 AND period_start = $2::date AND currency = $3
         LIMIT 1`,
        [key.projectId, key.periodStart, key.currency],
      );
      if (result.rowCount !== 1) return null;
      return rowToAggregate(result.rows[0] as Record<string, unknown>);
    },

    async listAggregatesForProjectPeriod(input) {
      const result = await pool.query(
        `SELECT * FROM finops_usage_aggregate
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY currency ASC`,
        [input.projectId, input.periodStart],
      );
      return result.rows.map((row) =>
        rowToAggregate(row as Record<string, unknown>),
      );
    },

    async withExclusiveProjectPeriodRebuild(input, work) {
      const projectId = input.projectId.trim();
      const periodStart = input.periodStart.trim();
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        // Transaction-scoped advisory lock: released on COMMIT/ROLLBACK.
        // Keys derived from projectId + periodStart only (not global FinOps).
        await client.query(
          `SELECT pg_advisory_xact_lock(
             hashtext('finops-a1:' || $1),
             hashtext($2)
           )`,
          [projectId, periodStart],
        );
        const ops = buildExclusiveOps(client, projectId, periodStart);
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
        const sanitized = sanitizeDbError(error);
        throw new Error(sanitized.message);
      } finally {
        // Session never retains an advisory lock: xact locks end with txn.
        client?.release();
      }
    },
  };
}
