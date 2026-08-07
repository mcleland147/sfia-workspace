/**
 * FinOps T4 — PostgreSQL enforcement projection store.
 *
 * Authoritative read: finops_cost_event
 * Derived write: finops_enforcement_projection
 *
 * ONE PoolClient + transaction advisory lock (namespace finops-t4:) for
 * rebuild and decision reads. Lock released on COMMIT/ROLLBACK — never held
 * across provider I/O.
 */

import type { Pool, PoolClient } from "pg";
import type { FinOpsCostEvent } from "../../application/types.aggregate";
import type { FinOpsEnforcementProjection } from "../../application/types.enforcement";
import { formatMoneyString, parseMoneyString } from "../../domain/money";
import type {
  FinOpsEnforcementProjectionPort,
  FinOpsExclusiveEnforcementOps,
} from "../../ports/finopsEnforcementProjectionPort";
import { sanitizeDbError } from "./sanitizeDbError";

function formatPgDate(value: unknown): string {
  if (value instanceof Date) {
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

function rowToProjection(
  row: Record<string, unknown>,
): FinOpsEnforcementProjection {
  const currency = String(row.currency);
  return {
    projectId: String(row.project_id),
    periodStart: formatPgDate(row.period_start),
    currency,
    blockingEligibleAmount: canonicalAmount(
      row.blocking_eligible_amount,
      currency,
    ),
    billedAmount: canonicalAmount(row.billed_amount, currency),
    providerObservedAmount: canonicalAmount(
      row.provider_observed_amount,
      currency,
    ),
    eligibleCostEventCount: Number(row.eligible_cost_event_count),
    billedEventCount: Number(row.billed_event_count),
    providerObservedEventCount: Number(row.provider_observed_event_count),
    rebuildVersion: Number(row.rebuild_version),
    rebuiltAt:
      row.rebuilt_at instanceof Date
        ? row.rebuilt_at.toISOString()
        : String(row.rebuilt_at),
  };
}

async function deleteAndInsertProjections(
  client: PoolClient,
  projectId: string,
  periodStart: string,
  projections: ReadonlyArray<FinOpsEnforcementProjection>,
): Promise<void> {
  await client.query(
    `DELETE FROM finops_enforcement_projection
     WHERE project_id = $1 AND period_start = $2::date`,
    [projectId, periodStart],
  );
  for (const row of projections) {
    await client.query(
      `INSERT INTO finops_enforcement_projection (
        project_id, period_start, currency,
        blocking_eligible_amount, billed_amount, provider_observed_amount,
        eligible_cost_event_count, billed_event_count, provider_observed_event_count,
        rebuild_version, rebuilt_at
      ) VALUES (
        $1,$2::date,$3,$4::numeric,$5::numeric,$6::numeric,
        $7,$8,$9,$10,$11::timestamptz
      )`,
      [
        row.projectId,
        row.periodStart,
        row.currency,
        row.blockingEligibleAmount,
        row.billedAmount,
        row.providerObservedAmount,
        row.eligibleCostEventCount,
        row.billedEventCount,
        row.providerObservedEventCount,
        row.rebuildVersion,
        row.rebuiltAt,
      ],
    );
  }
}

function buildExclusiveOps(
  client: PoolClient,
  projectId: string,
  periodStart: string,
): FinOpsExclusiveEnforcementOps {
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
    async listProjections() {
      const result = await client.query(
        `SELECT * FROM finops_enforcement_projection
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY currency ASC`,
        [projectId, periodStart],
      );
      return result.rows.map((row) =>
        rowToProjection(row as Record<string, unknown>),
      );
    },
    async replaceProjections(projections) {
      await deleteAndInsertProjections(
        client,
        projectId,
        periodStart,
        projections,
      );
    },
    async readProjection(currency) {
      const result = await client.query(
        `SELECT * FROM finops_enforcement_projection
         WHERE project_id = $1 AND period_start = $2::date AND currency = $3
         LIMIT 1`,
        [projectId, periodStart, currency],
      );
      if (result.rowCount !== 1) return null;
      return rowToProjection(result.rows[0] as Record<string, unknown>);
    },
  };
}

export function createPostgresFinOpsEnforcementProjectionStore(
  pool: Pool,
): FinOpsEnforcementProjectionPort {
  return {
    async withExclusiveProjectPeriod(input, work) {
      const projectId = input.projectId.trim();
      const periodStart = input.periodStart.trim();
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        // Transaction-scoped advisory lock: same namespace for rebuild + decision.
        await client.query(
          `SELECT pg_advisory_xact_lock(
             hashtext('finops-t4:' || $1),
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
        client?.release();
      }
    },
  };
}
