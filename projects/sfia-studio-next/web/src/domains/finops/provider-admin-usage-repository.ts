/**
 * Admin Usage/Costs snapshot repository — PostgreSQL SoT for FinOps product reads.
 *
 * Product/Next: read-only against authorized snapshots (no Admin collection capability).
 * Isolated collector: write runs + upsert snapshots.
 * Distinct from provider_usage_observations (Studio attribution ledger).
 */

import { randomUUID } from "node:crypto";
import { and, desc, eq, gte, lte, sql as dsql } from "drizzle-orm";
import { db, sql } from "@/db/client";
import {
  providerAdminCollectionRuns,
  providerAdminUsageSnapshots,
} from "@/db/schema";
import type {
  AdminCollectorStatus,
  AdminUsageSnapshot,
} from "./provider-admin-usage-collector";

function metricToNumber(
  m: AdminUsageSnapshot["metrics"][keyof AdminUsageSnapshot["metrics"]],
): number | null {
  if (m.presence !== "MEASURED" || m.value == null) return null;
  const n = Number(m.value);
  return Number.isFinite(n) ? n : null;
}

function metricFromDb(
  v: string | number | null | undefined,
  kind: "int" | "decimal" | "string" = "int",
): AdminUsageSnapshot["metrics"]["input_tokens"] {
  if (v == null) return { presence: "ABSENT", value: null };
  if (kind === "string") {
    return { presence: "MEASURED", value: String(v) };
  }
  const n = typeof v === "number" ? v : Number(v);
  if (!Number.isFinite(n)) return { presence: "INVALID", value: null };
  return {
    presence: "MEASURED",
    value: kind === "decimal" ? String(v) : String(Math.trunc(n)),
  };
}

export async function insertAdminCollectionRun(input: {
  collectionId: string;
  startedAtUtc: string;
  status: AdminCollectorStatus;
  path: string;
  organizationScope: string;
  pagesFetched?: number;
  limits?: string[];
  lastError?: string | null;
}): Promise<void> {
  await db
    .insert(providerAdminCollectionRuns)
    .values({
      collectionId: input.collectionId,
      startedAt: new Date(input.startedAtUtc),
      finishedAt: null,
      status: input.status,
      pagesFetched: input.pagesFetched ?? 0,
      path: input.path,
      organizationScope: input.organizationScope,
      limitsJson: input.limits ?? [],
      lastError: input.lastError ?? null,
    })
    .onConflictDoUpdate({
      target: providerAdminCollectionRuns.collectionId,
      set: {
        status: input.status,
        pagesFetched: input.pagesFetched ?? 0,
        limitsJson: input.limits ?? [],
        lastError: input.lastError ?? null,
      },
    });
}

export async function finishAdminCollectionRun(input: {
  collectionId: string;
  finishedAtUtc: string;
  status: AdminCollectorStatus;
  pagesFetched: number;
  limits: string[];
  lastError: string | null;
}): Promise<void> {
  await db
    .update(providerAdminCollectionRuns)
    .set({
      finishedAt: new Date(input.finishedAtUtc),
      status: input.status,
      pagesFetched: input.pagesFetched,
      limitsJson: input.limits,
      lastError: input.lastError,
    })
    .where(eq(providerAdminCollectionRuns.collectionId, input.collectionId));
}

/**
 * Idempotent upsert via NULLS NOT DISTINCT unique index
 * (provider_admin_usage_snapshots_canon_uidx).
 */
export async function upsertAdminSnapshotsPg(
  snapshots: AdminUsageSnapshot[],
): Promise<number> {
  let written = 0;
  for (const s of snapshots) {
    const id = randomUUID();
    const amount =
      s.metrics.amount.presence === "MEASURED" && s.metrics.amount.value
        ? s.metrics.amount.value
        : null;
    const currency =
      s.metrics.currency.presence === "MEASURED"
        ? s.metrics.currency.value
        : null;
    await sql`
      INSERT INTO provider_admin_usage_snapshots (
        id, collected_at, collection_id, source_endpoint, surface_object,
        organization_scope, interval_start_utc, interval_end_utc, granularity,
        project_id, api_key_id, user_id, model, line_item, api_source,
        input_tokens, output_tokens, input_cached_tokens,
        num_model_requests, num_requests, amount, currency,
        completeness, schema_version
      ) VALUES (
        ${id}::uuid,
        ${s.collectedAtUtc}::timestamptz,
        ${s.collectionId},
        ${s.sourceEndpoint},
        ${s.surfaceObject},
        ${s.organizationScope},
        ${s.intervalStartUtc}::timestamptz,
        ${s.intervalEndUtc}::timestamptz,
        ${s.granularity},
        ${s.dimensions.project_id},
        ${s.dimensions.api_key_id},
        ${s.dimensions.user_id},
        ${s.dimensions.model},
        ${s.dimensions.line_item},
        ${s.dimensions.api_source},
        ${metricToNumber(s.metrics.input_tokens)},
        ${metricToNumber(s.metrics.output_tokens)},
        ${metricToNumber(s.metrics.input_cached_tokens)},
        ${metricToNumber(s.metrics.num_model_requests)},
        ${metricToNumber(s.metrics.num_requests)},
        ${amount},
        ${currency},
        ${s.completeness},
        ${"2"}
      )
      ON CONFLICT (
        source_endpoint, surface_object, organization_scope,
        interval_start_utc, interval_end_utc, granularity,
        project_id, api_key_id, user_id, model, line_item, api_source
      )
      DO UPDATE SET
        collected_at = EXCLUDED.collected_at,
        collection_id = EXCLUDED.collection_id,
        input_tokens = EXCLUDED.input_tokens,
        output_tokens = EXCLUDED.output_tokens,
        input_cached_tokens = EXCLUDED.input_cached_tokens,
        num_model_requests = EXCLUDED.num_model_requests,
        num_requests = EXCLUDED.num_requests,
        amount = EXCLUDED.amount,
        currency = EXCLUDED.currency,
        completeness = CASE
          WHEN provider_admin_usage_snapshots.completeness = 'complete'
            AND EXCLUDED.completeness = 'partial'
          THEN provider_admin_usage_snapshots.completeness
          ELSE EXCLUDED.completeness
        END,
        schema_version = EXCLUDED.schema_version
    `;
    written += 1;
  }
  return written;
}

export async function listAdminSnapshotsFromPg(filter?: {
  organizationScope?: string;
  intervalStartUtc?: string;
  intervalEndUtc?: string;
  limit?: number;
}): Promise<AdminUsageSnapshot[]> {
  const clauses = [];
  if (filter?.organizationScope) {
    clauses.push(
      eq(
        providerAdminUsageSnapshots.organizationScope,
        filter.organizationScope,
      ),
    );
  }
  if (filter?.intervalStartUtc) {
    clauses.push(
      gte(
        providerAdminUsageSnapshots.intervalEndUtc,
        new Date(filter.intervalStartUtc),
      ),
    );
  }
  if (filter?.intervalEndUtc) {
    clauses.push(
      lte(
        providerAdminUsageSnapshots.intervalStartUtc,
        new Date(filter.intervalEndUtc),
      ),
    );
  }
  const limit = Math.min(5_000, Math.max(1, filter?.limit ?? 2_000));
  const rows = await db
    .select()
    .from(providerAdminUsageSnapshots)
    .where(clauses.length ? and(...clauses) : undefined)
    .orderBy(desc(providerAdminUsageSnapshots.intervalStartUtc))
    .limit(limit);

  return rows.map((r) => ({
    sourceEndpoint: r.sourceEndpoint,
    surfaceObject: r.surfaceObject,
    organizationScope: r.organizationScope,
    intervalStartUtc: r.intervalStartUtc.toISOString(),
    intervalEndUtc: r.intervalEndUtc.toISOString(),
    granularity: r.granularity as "1m" | "1h" | "1d",
    dimensions: {
      project_id: r.projectId,
      api_key_id: r.apiKeyId,
      user_id: r.userId,
      model: r.model,
      line_item: r.lineItem,
      api_source: r.apiSource,
    },
    metrics: {
      input_tokens: metricFromDb(r.inputTokens),
      output_tokens: metricFromDb(r.outputTokens),
      input_cached_tokens: metricFromDb(r.inputCachedTokens),
      num_model_requests: metricFromDb(r.numModelRequests),
      num_requests: metricFromDb(r.numRequests),
      amount: metricFromDb(r.amount, "decimal"),
      currency: metricFromDb(r.currency, "string"),
    },
    completeness: r.completeness as "complete" | "partial",
    collectedAtUtc: r.collectedAt.toISOString(),
    collectionId: r.collectionId,
  }));
}

export async function getAdminCollectionFreshnessFromPg(): Promise<{
  lastAttemptAtUtc: string | null;
  lastSuccessAtUtc: string | null;
  lastCollectionId: string | null;
  status: AdminCollectorStatus;
  snapshotCount: number;
  secretReadableByProduct: false;
}> {
  const [latest] = await db
    .select()
    .from(providerAdminCollectionRuns)
    .orderBy(desc(providerAdminCollectionRuns.startedAt))
    .limit(1);
  const [latestOk] = await db
    .select()
    .from(providerAdminCollectionRuns)
    .where(eq(providerAdminCollectionRuns.status, "READY"))
    .orderBy(desc(providerAdminCollectionRuns.finishedAt))
    .limit(1);
  const [countRow] = await db
    .select({
      n: dsql<number>`count(*)::int`,
    })
    .from(providerAdminUsageSnapshots);

  return {
    lastAttemptAtUtc: latest?.startedAt?.toISOString() ?? null,
    lastSuccessAtUtc: latestOk?.finishedAt?.toISOString() ?? null,
    lastCollectionId: latestOk?.collectionId ?? latest?.collectionId ?? null,
    status: (latest?.status as AdminCollectorStatus) ?? "IDLE",
    snapshotCount: countRow?.n ?? 0,
    secretReadableByProduct: false,
  };
}

/** Non-destructive product rollback: stop serving snapshot reads. */
export function isAdminSnapshotReadEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return (env.SFIA_ADMIN_SNAPSHOT_READ ?? "1").trim() !== "0";
}
