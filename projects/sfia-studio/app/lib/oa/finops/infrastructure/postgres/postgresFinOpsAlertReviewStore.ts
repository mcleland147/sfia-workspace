/**
 * FinOps T3 — PostgreSQL durable Alert / Morris Review store (A1 + D2).
 *
 * Transaction-scoped advisory lock namespace: finops-t3:<projectId> + periodStart.
 * Distinct from T2 finops-a1: — never held together / never reuses T2 lock.
 */

import type { Pool, PoolClient } from "pg";
import type {
  ApplyProjectPeriodEvaluationInput,
  ApplyProjectPeriodEvaluationResult,
  FinOpsAlertLifecycleState,
  FinOpsAlertState,
  FinOpsMorrisReviewLifecycleState,
  FinOpsMorrisReviewState,
  FinOpsThresholdBasis,
  FinOpsThresholdEvaluationOutcome,
} from "../../application/types.alertReview";
import {
  formatMoneyString,
  parseMoneyString,
} from "../../domain/money";
import type { FinOpsAlertReviewPort } from "../../ports/finopsAlertReviewPort";
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

function formatPgTs(value: unknown): string {
  if (value instanceof Date) return value.toISOString();
  return String(value);
}

function canonicalAmount(raw: unknown, currency: string): string {
  return formatMoneyString(parseMoneyString(String(raw), currency));
}

function rowToAlert(row: Record<string, unknown>): FinOpsAlertState {
  const currency = String(row.currency);
  return {
    alertId: String(row.alert_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    periodStart: formatPgDate(row.period_start),
    currency,
    thresholdCode: String(row.threshold_code),
    evaluationBasis: row.evaluation_basis as FinOpsThresholdBasis,
    thresholdAmount: canonicalAmount(row.threshold_amount, currency),
    evaluatedAmount: canonicalAmount(row.evaluated_amount, currency),
    rebuildVersion: Number(row.rebuild_version),
    state: row.state as FinOpsAlertLifecycleState,
    firstCrossedAt: formatPgTs(row.first_crossed_at),
    lastEvaluatedAt: formatPgTs(row.last_evaluated_at),
    clearedAt:
      row.cleared_at === null || row.cleared_at === undefined
        ? null
        : formatPgTs(row.cleared_at),
    createdAt: formatPgTs(row.created_at),
    updatedAt: formatPgTs(row.updated_at),
  };
}

function rowToReview(row: Record<string, unknown>): FinOpsMorrisReviewState {
  const currency = String(row.currency);
  return {
    reviewId: String(row.review_id),
    dedupKey: String(row.dedup_key),
    projectId: String(row.project_id),
    periodStart: formatPgDate(row.period_start),
    currency,
    thresholdCode: String(row.threshold_code),
    evaluationBasis: row.evaluation_basis as FinOpsThresholdBasis,
    thresholdAmount: canonicalAmount(row.threshold_amount, currency),
    evaluatedAmount: canonicalAmount(row.evaluated_amount, currency),
    rebuildVersion: Number(row.rebuild_version),
    state: row.state as FinOpsMorrisReviewLifecycleState,
    firstRequiredAt: formatPgTs(row.first_required_at),
    lastEvaluatedAt: formatPgTs(row.last_evaluated_at),
    supersededAt:
      row.superseded_at === null || row.superseded_at === undefined
        ? null
        : formatPgTs(row.superseded_at),
    createdAt: formatPgTs(row.created_at),
    updatedAt: formatPgTs(row.updated_at),
  };
}

async function loadAlert(
  client: PoolClient,
  projectId: string,
  periodStart: string,
  thresholdCode: string,
  currency: string,
): Promise<FinOpsAlertState | null> {
  const result = await client.query(
    `SELECT * FROM finops_alert_state
     WHERE project_id = $1 AND period_start = $2::date
       AND threshold_code = $3 AND currency = $4
     LIMIT 1`,
    [projectId, periodStart, thresholdCode, currency],
  );
  if (result.rowCount !== 1) return null;
  return rowToAlert(result.rows[0] as Record<string, unknown>);
}

async function loadReview(
  client: PoolClient,
  projectId: string,
  periodStart: string,
  thresholdCode: string,
  currency: string,
): Promise<FinOpsMorrisReviewState | null> {
  const result = await client.query(
    `SELECT * FROM finops_morris_review_state
     WHERE project_id = $1 AND period_start = $2::date
       AND threshold_code = $3 AND currency = $4
     LIMIT 1`,
    [projectId, periodStart, thresholdCode, currency],
  );
  if (result.rowCount !== 1) return null;
  return rowToReview(result.rows[0] as Record<string, unknown>);
}

async function upsertAlert(
  client: PoolClient,
  row: FinOpsAlertState,
): Promise<void> {
  await client.query(
    `INSERT INTO finops_alert_state (
      alert_id, dedup_key, project_id, period_start, currency, threshold_code,
      evaluation_basis, threshold_amount, evaluated_amount, rebuild_version,
      state, first_crossed_at, last_evaluated_at, cleared_at, created_at, updated_at
    ) VALUES (
      $1,$2,$3,$4::date,$5,$6,$7,$8::numeric,$9::numeric,$10,
      $11,$12::timestamptz,$13::timestamptz,$14::timestamptz,$15::timestamptz,$16::timestamptz
    )
    ON CONFLICT (project_id, period_start, threshold_code, currency) DO UPDATE SET
      evaluation_basis = EXCLUDED.evaluation_basis,
      threshold_amount = EXCLUDED.threshold_amount,
      evaluated_amount = EXCLUDED.evaluated_amount,
      rebuild_version = EXCLUDED.rebuild_version,
      state = EXCLUDED.state,
      last_evaluated_at = EXCLUDED.last_evaluated_at,
      cleared_at = EXCLUDED.cleared_at,
      updated_at = EXCLUDED.updated_at
    WHERE finops_alert_state.rebuild_version <= EXCLUDED.rebuild_version`,
    [
      row.alertId,
      row.dedupKey,
      row.projectId,
      row.periodStart,
      row.currency,
      row.thresholdCode,
      row.evaluationBasis,
      row.thresholdAmount,
      row.evaluatedAmount,
      row.rebuildVersion,
      row.state,
      row.firstCrossedAt,
      row.lastEvaluatedAt,
      row.clearedAt,
      row.createdAt,
      row.updatedAt,
    ],
  );
}

async function upsertReview(
  client: PoolClient,
  row: FinOpsMorrisReviewState,
): Promise<void> {
  await client.query(
    `INSERT INTO finops_morris_review_state (
      review_id, dedup_key, project_id, period_start, currency, threshold_code,
      evaluation_basis, threshold_amount, evaluated_amount, rebuild_version,
      state, first_required_at, last_evaluated_at, superseded_at, created_at, updated_at
    ) VALUES (
      $1,$2,$3,$4::date,$5,$6,$7,$8::numeric,$9::numeric,$10,
      $11,$12::timestamptz,$13::timestamptz,$14::timestamptz,$15::timestamptz,$16::timestamptz
    )
    ON CONFLICT (project_id, period_start, threshold_code, currency) DO UPDATE SET
      evaluation_basis = EXCLUDED.evaluation_basis,
      threshold_amount = EXCLUDED.threshold_amount,
      evaluated_amount = EXCLUDED.evaluated_amount,
      rebuild_version = EXCLUDED.rebuild_version,
      state = EXCLUDED.state,
      last_evaluated_at = EXCLUDED.last_evaluated_at,
      superseded_at = EXCLUDED.superseded_at,
      updated_at = EXCLUDED.updated_at
    WHERE finops_morris_review_state.rebuild_version <= EXCLUDED.rebuild_version`,
    [
      row.reviewId,
      row.dedupKey,
      row.projectId,
      row.periodStart,
      row.currency,
      row.thresholdCode,
      row.evaluationBasis,
      row.thresholdAmount,
      row.evaluatedAmount,
      row.rebuildVersion,
      row.state,
      row.firstRequiredAt,
      row.lastEvaluatedAt,
      row.supersededAt,
      row.createdAt,
      row.updatedAt,
    ],
  );
}

function nextAlert(
  existing: FinOpsAlertState | null,
  outcome: FinOpsThresholdEvaluationOutcome,
  projectId: string,
  periodStart: string,
  evaluatedAt: string,
): FinOpsAlertState | null {
  if (existing && outcome.rebuildVersion < existing.rebuildVersion) {
    return existing;
  }
  if (outcome.crossed) {
    if (!existing) {
      return {
        alertId: outcome.alertId,
        dedupKey: outcome.dedupKey,
        projectId,
        periodStart,
        currency: outcome.currency,
        thresholdCode: outcome.thresholdCode,
        evaluationBasis: outcome.evaluationBasis,
        thresholdAmount: outcome.thresholdAmount,
        evaluatedAmount: outcome.evaluatedAmount,
        rebuildVersion: outcome.rebuildVersion,
        state: "open",
        firstCrossedAt: evaluatedAt,
        lastEvaluatedAt: evaluatedAt,
        clearedAt: null,
        createdAt: evaluatedAt,
        updatedAt: evaluatedAt,
      };
    }
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "open",
      lastEvaluatedAt: evaluatedAt,
      clearedAt: null,
      updatedAt: evaluatedAt,
    };
  }
  if (!existing) return null;
  if (existing.state === "open") {
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "cleared",
      lastEvaluatedAt: evaluatedAt,
      clearedAt: evaluatedAt,
      updatedAt: evaluatedAt,
    };
  }
  return {
    ...existing,
    evaluationBasis: outcome.evaluationBasis,
    thresholdAmount: outcome.thresholdAmount,
    evaluatedAmount: outcome.evaluatedAmount,
    rebuildVersion: outcome.rebuildVersion,
    lastEvaluatedAt: evaluatedAt,
    updatedAt: evaluatedAt,
  };
}

function nextReview(
  existing: FinOpsMorrisReviewState | null,
  outcome: FinOpsThresholdEvaluationOutcome,
  projectId: string,
  periodStart: string,
  evaluatedAt: string,
): FinOpsMorrisReviewState | null {
  if (existing && outcome.rebuildVersion < existing.rebuildVersion) {
    return existing;
  }
  if (
    existing &&
    (existing.state === "acknowledged" || existing.state === "resolved")
  ) {
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      lastEvaluatedAt: evaluatedAt,
      updatedAt: evaluatedAt,
    };
  }
  if (outcome.crossed) {
    if (!existing) {
      return {
        reviewId: outcome.reviewId,
        dedupKey: outcome.dedupKey,
        projectId,
        periodStart,
        currency: outcome.currency,
        thresholdCode: outcome.thresholdCode,
        evaluationBasis: outcome.evaluationBasis,
        thresholdAmount: outcome.thresholdAmount,
        evaluatedAmount: outcome.evaluatedAmount,
        rebuildVersion: outcome.rebuildVersion,
        state: "pending",
        firstRequiredAt: evaluatedAt,
        lastEvaluatedAt: evaluatedAt,
        supersededAt: null,
        createdAt: evaluatedAt,
        updatedAt: evaluatedAt,
      };
    }
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "pending",
      lastEvaluatedAt: evaluatedAt,
      supersededAt: null,
      updatedAt: evaluatedAt,
    };
  }
  if (!existing) return null;
  if (existing.state === "pending") {
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "superseded",
      lastEvaluatedAt: evaluatedAt,
      supersededAt: evaluatedAt,
      updatedAt: evaluatedAt,
    };
  }
  return {
    ...existing,
    evaluationBasis: outcome.evaluationBasis,
    thresholdAmount: outcome.thresholdAmount,
    evaluatedAmount: outcome.evaluatedAmount,
    rebuildVersion: outcome.rebuildVersion,
    lastEvaluatedAt: evaluatedAt,
    updatedAt: evaluatedAt,
  };
}

export function createPostgresFinOpsAlertReviewStore(
  pool: Pool,
): FinOpsAlertReviewPort {
  return {
    async applyProjectPeriodEvaluation(
      input: ApplyProjectPeriodEvaluationInput,
    ): Promise<ApplyProjectPeriodEvaluationResult> {
      const projectId = input.projectId.trim();
      const periodStart = input.periodStart.trim();
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        // T3-only advisory lock — distinct namespace from T2 finops-a1:
        await client.query(
          `SELECT pg_advisory_xact_lock(
             hashtext('finops-t3:' || $1),
             hashtext($2)
           )`,
          [projectId, periodStart],
        );

        for (const outcome of input.outcomes) {
          if (outcome.kind === "informational_alert") {
            const existing = await loadAlert(
              client,
              projectId,
              periodStart,
              outcome.thresholdCode,
              outcome.currency,
            );
            const next = nextAlert(
              existing,
              outcome,
              projectId,
              periodStart,
              input.evaluatedAt,
            );
            if (next) await upsertAlert(client, next);
          } else if (outcome.kind === "morris_review") {
            const existing = await loadReview(
              client,
              projectId,
              periodStart,
              outcome.thresholdCode,
              outcome.currency,
            );
            const next = nextReview(
              existing,
              outcome,
              projectId,
              periodStart,
              input.evaluatedAt,
            );
            if (next) await upsertReview(client, next);
          }
        }

        const alerts = await listAlertsOnClient(client, projectId, periodStart);
        const reviews = await listReviewsOnClient(
          client,
          projectId,
          periodStart,
        );
        await client.query("COMMIT");
        return { outcome: "succeeded", alerts, reviews };
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
          code: sanitized.code,
          message: sanitized.message,
          finopsSideOnly: true,
        };
      } finally {
        client?.release();
      }
    },

    async listAlertsForProjectPeriod(input) {
      const result = await pool.query(
        `SELECT * FROM finops_alert_state
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY currency ASC, threshold_code ASC`,
        [input.projectId.trim(), input.periodStart.trim()],
      );
      return result.rows.map((row) =>
        rowToAlert(row as Record<string, unknown>),
      );
    },

    async listReviewsForProjectPeriod(input) {
      const result = await pool.query(
        `SELECT * FROM finops_morris_review_state
         WHERE project_id = $1 AND period_start = $2::date
         ORDER BY currency ASC, threshold_code ASC`,
        [input.projectId.trim(), input.periodStart.trim()],
      );
      return result.rows.map((row) =>
        rowToReview(row as Record<string, unknown>),
      );
    },
  };
}

async function listAlertsOnClient(
  client: PoolClient,
  projectId: string,
  periodStart: string,
): Promise<ReadonlyArray<FinOpsAlertState>> {
  const result = await client.query(
    `SELECT * FROM finops_alert_state
     WHERE project_id = $1 AND period_start = $2::date
     ORDER BY currency ASC, threshold_code ASC`,
    [projectId, periodStart],
  );
  return result.rows.map((row) => rowToAlert(row as Record<string, unknown>));
}

async function listReviewsOnClient(
  client: PoolClient,
  projectId: string,
  periodStart: string,
): Promise<ReadonlyArray<FinOpsMorrisReviewState>> {
  const result = await client.query(
    `SELECT * FROM finops_morris_review_state
     WHERE project_id = $1 AND period_start = $2::date
     ORDER BY currency ASC, threshold_code ASC`,
    [projectId, periodStart],
  );
  return result.rows.map((row) => rowToReview(row as Record<string, unknown>));
}
