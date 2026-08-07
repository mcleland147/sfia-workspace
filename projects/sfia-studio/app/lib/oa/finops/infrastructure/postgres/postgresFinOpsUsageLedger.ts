/**
 * FinOps T1 — PostgreSQL append-only usage ledger adapter.
 */

import type { Pool, PoolClient } from "pg";
import type {
  FinOpsLedgerInsertResult,
  FinOpsUsageEvent,
  FinOpsUsageFingerprint,
} from "../../application/types";
import type { FinOpsUsageLedgerPort } from "../../ports/finopsUsageLedgerPort";
import { readPgTokenField } from "./readPgToken";
import { sanitizeDbError } from "./sanitizeDbError";

const INSERT_SQL = `
INSERT INTO finops_usage_event (
  event_id,
  dedup_key,
  project_id,
  execution_run_id,
  correlation_id,
  provider,
  model,
  occurred_at,
  period_start,
  source_of_truth,
  evidence_class,
  input_tokens,
  output_tokens,
  total_tokens,
  provider_request_id,
  correction_ref,
  usage_status,
  created_at
) VALUES (
  $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,NOW()
)
ON CONFLICT (dedup_key) DO NOTHING
RETURNING event_id
`;

const SELECT_BY_DEDUP_SQL = `
SELECT
  event_id,
  project_id,
  execution_run_id,
  correlation_id,
  provider,
  model,
  usage_status,
  input_tokens,
  output_tokens,
  total_tokens,
  provider_request_id,
  source_of_truth,
  evidence_class
FROM finops_usage_event
WHERE dedup_key = $1
LIMIT 1
`;

function fingerprintEqual(
  existing: FinOpsUsageFingerprint,
  candidate: FinOpsUsageFingerprint,
): boolean {
  return (
    existing.projectId === candidate.projectId &&
    existing.executionRunId === candidate.executionRunId &&
    existing.provider === candidate.provider &&
    existing.providerRequestId === candidate.providerRequestId &&
    existing.correlationId === candidate.correlationId &&
    existing.usageStatus === candidate.usageStatus &&
    existing.inputTokens === candidate.inputTokens &&
    existing.outputTokens === candidate.outputTokens &&
    existing.totalTokens === candidate.totalTokens &&
    existing.model === candidate.model &&
    existing.sourceOfTruth === candidate.sourceOfTruth &&
    existing.evidenceClass === candidate.evidenceClass
  );
}

function rowToFingerprint(
  row: Record<string, unknown>,
):
  | { readonly ok: true; readonly fingerprint: FinOpsUsageFingerprint }
  | { readonly ok: false; readonly error: ReturnType<typeof sanitizeDbError> } {
  const inputTokens = readPgTokenField(row.input_tokens);
  if (!inputTokens.ok) return inputTokens;
  const outputTokens = readPgTokenField(row.output_tokens);
  if (!outputTokens.ok) return outputTokens;
  const totalTokens = readPgTokenField(row.total_tokens);
  if (!totalTokens.ok) return totalTokens;

  return {
    ok: true,
    fingerprint: {
      projectId: String(row.project_id),
      executionRunId: String(row.execution_run_id),
      provider: String(row.provider),
      providerRequestId:
        row.provider_request_id === null || row.provider_request_id === undefined
          ? null
          : String(row.provider_request_id),
      correlationId:
        row.correlation_id === null || row.correlation_id === undefined
          ? null
          : String(row.correlation_id),
      usageStatus: row.usage_status as FinOpsUsageFingerprint["usageStatus"],
      inputTokens: inputTokens.value,
      outputTokens: outputTokens.value,
      totalTokens: totalTokens.value,
      model:
        row.model === null || row.model === undefined ? null : String(row.model),
      sourceOfTruth:
        row.source_of_truth as FinOpsUsageFingerprint["sourceOfTruth"],
      evidenceClass:
        row.evidence_class as FinOpsUsageFingerprint["evidenceClass"],
    },
  };
}

export function createPostgresFinOpsUsageLedger(
  pool: Pool,
): FinOpsUsageLedgerPort {
  return {
    async insertUsageEvent(
      event: FinOpsUsageEvent,
      fingerprint: FinOpsUsageFingerprint,
    ): Promise<FinOpsLedgerInsertResult> {
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        const inserted = await client.query<{ event_id: string }>(INSERT_SQL, [
          event.eventId,
          event.dedupKey,
          event.projectId,
          event.executionRunId,
          event.correlationId,
          event.provider,
          event.model,
          event.occurredAt,
          event.periodStart,
          event.sourceOfTruth,
          event.evidenceClass,
          event.inputTokens,
          event.outputTokens,
          event.totalTokens,
          event.providerRequestId,
          event.correctionRef,
          event.usageStatus,
        ]);

        if (inserted.rowCount === 1) {
          await client.query("COMMIT");
          return { outcome: "created", eventId: event.eventId };
        }

        const existing = await client.query(SELECT_BY_DEDUP_SQL, [
          event.dedupKey,
        ]);
        if (existing.rowCount !== 1) {
          await client.query("ROLLBACK");
          return {
            outcome: "failed",
            error: {
              code: "FINOPS_CAPTURE_FAILED",
              message: "FinOps capture failed",
              retryable: true,
              technicalDetailsRedacted: true,
            },
          };
        }

        const existingFpResult = rowToFingerprint(
          existing.rows[0] as Record<string, unknown>,
        );
        if (!existingFpResult.ok) {
          await client.query("ROLLBACK");
          return { outcome: "failed", error: existingFpResult.error };
        }
        if (!fingerprintEqual(existingFpResult.fingerprint, fingerprint)) {
          await client.query("ROLLBACK");
          return {
            outcome: "conflict",
            error: {
              code: "FINOPS_DEDUP_CONFLICT",
              message: "FinOps dedup key conflict with divergent payload",
              retryable: false,
              technicalDetailsRedacted: true,
            },
          };
        }

        await client.query("COMMIT");
        return {
          outcome: "duplicate",
          eventId: String(existing.rows[0].event_id),
        };
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore rollback errors
          }
        }
        return { outcome: "failed", error: sanitizeDbError(error) };
      } finally {
        client?.release();
      }
    },
  };
}
