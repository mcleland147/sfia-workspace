/**
 * PG backend for derived embeddings — inactive until migration 027 GO.
 * No dual-read/dual-write with file. When SFIA_DERIVED_EMBEDDING_BACKEND=pg,
 * this module is the sole operational store; file path must not be used.
 *
 * Authorization: caller MUST revalidate pilot/project via D4 (listProjectKnowledge
 * / assertOwnedProject). owner_pilot_id on rows is attribution only.
 */
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  DERIVED_EMBEDDING_MODEL,
  cosineSimilarity,
  type DerivedIndexEntry,
  type MobilizableHit,
} from "@/domains/knowledge/derived-embedding-index";

export function derivedEmbeddingBackend(
  env: NodeJS.ProcessEnv = process.env,
): "file" | "pg" {
  const v = (env.SFIA_DERIVED_EMBEDDING_BACKEND || "file").trim().toLowerCase();
  return v === "pg" ? "pg" : "file";
}

/** True only when PG backend selected AND migration 027 expected applied. */
export function pgDerivedStoreActive(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return derivedEmbeddingBackend(env) === "pg";
}

type ChunkRow = {
  id: string;
  project_id: string;
  preparation_id: string;
  owner_pilot_id: string;
  source_id: string;
  source_kind: string;
  content_fingerprint: string;
  model: string;
  dims: number;
  vector_json: unknown;
  text_excerpt: string | null;
  revoked: boolean;
  deleted: boolean;
  version_label: string | null;
  index_ref: string;
  updated_at: Date;
};

/**
 * Upsert admissible entries for a project (idempotent on unique key).
 * Does not authorize — caller already filtered sources.
 */
export async function upsertDerivedChunksPg(input: {
  projectId: string;
  preparationId: string;
  ownerPilotId: string;
  entries: DerivedIndexEntry[];
  vectors: Map<string, number[]>;
}): Promise<{ written: number }> {
  if (!pgDerivedStoreActive()) {
    throw new Error("PG_DERIVED_STORE_INACTIVE");
  }
  let written = 0;
  for (const e of input.entries) {
    const vector = input.vectors.get(e.sourceId);
    if (!vector) continue;
    const id = `${input.projectId}:${e.sourceId}:${e.contentFingerprint}:${e.model}`;
    await db.execute(sql`
      INSERT INTO derived_embedding_chunks (
        id, project_id, preparation_id, owner_pilot_id,
        source_id, source_kind, content_fingerprint, model, dims,
        vector_json, text_excerpt, revoked, deleted, version_label, index_ref, updated_at
      ) VALUES (
        ${id}, ${input.projectId}, ${input.preparationId}, ${input.ownerPilotId},
        ${e.sourceId}, ${e.sourceKind}, ${e.contentFingerprint}, ${e.model}, ${e.dims},
        ${JSON.stringify(vector)}::jsonb, ${e.text.slice(0, 2000)},
        ${e.revoked}, ${e.deleted}, ${e.versionLabel}, ${e.indexRef}, now()
      )
      ON CONFLICT (project_id, source_id, content_fingerprint, model)
      DO UPDATE SET
        vector_json = EXCLUDED.vector_json,
        text_excerpt = EXCLUDED.text_excerpt,
        revoked = EXCLUDED.revoked,
        deleted = EXCLUDED.deleted,
        version_label = EXCLUDED.version_label,
        index_ref = EXCLUDED.index_ref,
        updated_at = now(),
        preparation_id = EXCLUDED.preparation_id,
        owner_pilot_id = EXCLUDED.owner_pilot_id,
        dims = EXCLUDED.dims
    `);
    written += 1;
  }
  return { written };
}

/** Mark revoked/deleted idempotently. */
export async function markDerivedChunkLifecyclePg(input: {
  projectId: string;
  sourceId: string;
  revoked?: boolean;
  deleted?: boolean;
}): Promise<number> {
  if (!pgDerivedStoreActive()) {
    throw new Error("PG_DERIVED_STORE_INACTIVE");
  }
  const sets: string[] = ["updated_at = now()"];
  if (input.revoked != null) sets.push(`revoked = ${input.revoked ? "true" : "false"}`);
  if (input.deleted != null) sets.push(`deleted = ${input.deleted ? "true" : "false"}`);
  const result = await db.execute(sql`
    UPDATE derived_embedding_chunks
    SET
      revoked = COALESCE(${input.revoked ?? null}::boolean, revoked),
      deleted = COALESCE(${input.deleted ?? null}::boolean, deleted),
      updated_at = now()
    WHERE project_id = ${input.projectId}
      AND source_id = ${input.sourceId}
  `);
  return Number((result as { rowCount?: number }).rowCount ?? 0);
}

/**
 * Search mobilizable chunks. Caller must still revalidate allowedSourceIds
 * against live D4 before exposing hits.
 */
export async function searchDerivedChunksPg(input: {
  projectId: string;
  queryVector: number[];
  limit?: number;
  model?: string;
}): Promise<MobilizableHit[]> {
  if (!pgDerivedStoreActive()) {
    throw new Error("PG_DERIVED_STORE_INACTIVE");
  }
  const model = input.model ?? DERIVED_EMBEDDING_MODEL;
  const limit = Math.min(Math.max(input.limit ?? 8, 1), 20);
  const result = await db.execute(sql`
    SELECT source_id, source_kind, preparation_id, version_label, index_ref,
           vector_json, text_excerpt
    FROM derived_embedding_chunks
    WHERE project_id = ${input.projectId}
      AND model = ${model}
      AND revoked = false
      AND deleted = false
  `);
  const rows = (result as { rows?: ChunkRow[] }).rows ?? (result as unknown as ChunkRow[]);
  const hits: MobilizableHit[] = [];
  for (const row of rows) {
    const vector = Array.isArray(row.vector_json)
      ? (row.vector_json as number[])
      : typeof row.vector_json === "string"
        ? (JSON.parse(row.vector_json) as number[])
        : null;
    if (!vector?.length) continue;
    hits.push({
      sourceId: row.source_id,
      sourceKind: row.source_kind as MobilizableHit["sourceKind"],
      score: cosineSimilarity(input.queryVector, vector),
      versionLabel: row.version_label,
      indexRef: row.index_ref,
      preparationId: row.preparation_id,
      snippet: (row.text_excerpt ?? "").slice(0, 280),
    });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}

/** Compatibility shim — drizzle eq helpers reserved for typed schema later. */
export const _pgStoreDrizzleRefs = { and, eq };
