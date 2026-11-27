/**
 * PG backend for derived embeddings — sole operational store after Morris GO A.
 * No dual-read/dual-write with file. File helpers remain for unit tests only.
 *
 * Authorization: caller MUST revalidate pilot/project via D4.
 * owner_pilot_id on rows is attribution only.
 */
import { sql as pg } from "@/db/client";
import {
  DERIVED_EMBEDDING_MODEL,
  cosineSimilarity,
  type DerivedIndexEntry,
  type MobilizableHit,
} from "@/domains/knowledge/derived-embedding-index";

export function derivedEmbeddingBackend(
  env: NodeJS.ProcessEnv = process.env,
): "file" | "pg" {
  const v = (env.SFIA_DERIVED_EMBEDDING_BACKEND || "pg").trim().toLowerCase();
  // Explicit file only for unit tests / emergency — ops default is pg.
  return v === "file" ? "file" : "pg";
}

export function pgDerivedStoreActive(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return derivedEmbeddingBackend(env) === "pg";
}

/**
 * Replace project projection: delete prior rows then upsert admissible entries.
 * Transactional via postgres.js reserved transaction.
 */
export async function replaceDerivedChunksPg(input: {
  projectId: string;
  preparationId: string;
  ownerPilotId: string;
  entries: DerivedIndexEntry[];
  vectors: Map<string, number[]>;
}): Promise<{ written: number }> {
  if (!pgDerivedStoreActive()) {
    throw new Error("PG_DERIVED_STORE_INACTIVE");
  }
  await pg.begin(async (tx) => {
    await tx`
      DELETE FROM derived_embedding_chunks
      WHERE project_id = ${input.projectId}
    `;
    for (const e of input.entries) {
      const vector = input.vectors.get(e.sourceId);
      if (!vector) continue;
      const id = `${input.projectId}:${e.sourceId}:${e.contentFingerprint}:${e.model}`;
      const vectorJson = JSON.stringify(vector);
      await tx.unsafe(
        `INSERT INTO derived_embedding_chunks (
          id, project_id, preparation_id, owner_pilot_id,
          source_id, source_kind, content_fingerprint, model, dims,
          vector_json, text_excerpt, revoked, deleted, version_label, index_ref, updated_at
        ) VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,$14,$15,now()
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
          dims = EXCLUDED.dims`,
        [
          id,
          input.projectId,
          input.preparationId,
          input.ownerPilotId,
          e.sourceId,
          e.sourceKind,
          e.contentFingerprint,
          e.model,
          e.dims,
          vectorJson,
          e.text.slice(0, 2000),
          e.revoked,
          e.deleted,
          e.versionLabel,
          e.indexRef,
        ],
      );
    }
  });
  return { written: input.entries.filter((e) => input.vectors.has(e.sourceId)).length };
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
  const rows = await pg`
    UPDATE derived_embedding_chunks
    SET
      revoked = COALESCE(${input.revoked ?? null}, revoked),
      deleted = COALESCE(${input.deleted ?? null}, deleted),
      updated_at = now()
    WHERE project_id = ${input.projectId}
      AND source_id = ${input.sourceId}
    RETURNING id
  `;
  return rows.length;
}

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
  const rows = await pg`
    SELECT source_id, source_kind, preparation_id, version_label, index_ref,
           vector_json, text_excerpt
    FROM derived_embedding_chunks
    WHERE project_id = ${input.projectId}
      AND model = ${model}
      AND revoked = false
      AND deleted = false
  `;
  const hits: MobilizableHit[] = [];
  for (const row of rows) {
    const raw = row.vector_json;
    const vector = Array.isArray(raw)
      ? (raw as number[])
      : typeof raw === "string"
        ? (JSON.parse(raw) as number[])
        : null;
    if (!vector?.length) continue;
    hits.push({
      sourceId: String(row.source_id),
      sourceKind: String(row.source_kind) as MobilizableHit["sourceKind"],
      score: cosineSimilarity(input.queryVector, vector),
      versionLabel: (row.version_label as string | null) ?? null,
      indexRef: String(row.index_ref),
      preparationId: String(row.preparation_id),
      snippet: String(row.text_excerpt ?? "").slice(0, 280),
    });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}

export async function countDerivedChunksPg(projectId?: string): Promise<number> {
  if (projectId) {
    const rows = await pg`
      SELECT count(*)::int AS n FROM derived_embedding_chunks
      WHERE project_id = ${projectId}
    `;
    return Number(rows[0]?.n ?? 0);
  }
  const rows = await pg`SELECT count(*)::int AS n FROM derived_embedding_chunks`;
  return Number(rows[0]?.n ?? 0);
}
