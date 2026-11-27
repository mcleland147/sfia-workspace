/**
 * Product service for ML2 derived embeddings.
 * Ops backend: PostgreSQL (Morris GO A). File helpers remain for unit tests
 * when SFIA_DERIVED_EMBEDDING_BACKEND=file only — no dual-write.
 */
import {
  contentFingerprint,
  DERIVED_EMBEDDING_MODEL,
  derivedEmbeddingSearchEnabled,
  makeIndexRef,
  markSourceLifecycle,
  searchDerivedIndex,
  writeDerivedIndex,
  type DerivedIndexEntry,
  type DerivedSourceKind,
  type MobilizableHit,
} from "@/domains/knowledge/derived-embedding-index";
import {
  derivedEmbeddingBackend,
  markDerivedChunkLifecyclePg,
  replaceDerivedChunksPg,
  searchDerivedChunksPg,
  upsertDerivedChunkPg,
} from "@/domains/knowledge/derived-embedding-pg";
import {
  mergeLexicalAndDerived,
  type HybridHit,
  type LexicalHit,
} from "@/domains/knowledge/hybrid-knowledge-search";
import { listProjectKnowledge } from "@/domains/knowledge/journal";

export type EmbedClient = {
  embeddings: {
    create: (body: {
      model: string;
      input: string | string[];
    }) => Promise<{
      data: Array<{ embedding: number[] }>;
      usage?: { total_tokens?: number };
    }>;
  };
};

async function defaultEmbedClient(): Promise<EmbedClient | null> {
  const key = (process.env.OPENAI_API_KEY || "").trim();
  if (!key) return null;
  try {
    const frontier = await import(
      "@/domains/conversation/provider-emission-frontier"
    );
    const client = await frontier.createFrontierBoundOpenAIClient({
      maxRetries: 0,
    });
    return client as unknown as EmbedClient | null;
  } catch {
    return null;
  }
}

export async function embedQueryText(
  text: string,
  client?: EmbedClient | null,
  opts?: {
    /** When false, skip ledger write (reuse / substituted / already recorded). */
    recordUsage?: boolean;
    /** Stable attempt id when recording a real emission (caller-owned). */
    attemptId?: string;
    projectId?: string | null;
    ownerPilotId?: string | null;
  },
): Promise<{ vector: number[]; tokens: number } | null> {
  const c = client ?? (await defaultEmbedClient());
  if (!c) return null;
  const q = text.trim();
  if (!q) return null;
  const res = await c.embeddings.create({
    model: DERIVED_EMBEDDING_MODEL,
    input: q,
  });
  const vector = res.data[0]?.embedding;
  if (!vector?.length) return null;
  const tokens = res.usage?.total_tokens ?? 0;
  if (opts?.recordUsage === false) {
    return { vector, tokens };
  }
  try {
    const { randomUUID } = await import("node:crypto");
    const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
      "@/domains/conversation/usage-accounting"
    );
    const fp = contentFingerprint(q).slice(0, 12);
    // Distinct HTTP consumption ⇒ caller attemptId or fresh UUID (not content FP).
    const attemptId = opts?.attemptId?.trim() || randomUUID();
    await recordProviderUsageObservation({
      operation: "embeddings.derived_query",
      modelRequested: DERIVED_EMBEDDING_MODEL,
      modelApplied: DERIVED_EMBEDDING_MODEL,
      inputTokens: tokens || null,
      outputTokens: 0,
      status: "succeeded",
      granularity: "REQUEST",
      costCoverage: "PARTIAL",
      projectId: opts?.projectId ?? null,
      ownerPilotId: opts?.ownerPilotId ?? null,
      idempotencyKey: buildIdempotencyKey({
        granularity: "REQUEST",
        lane: process.env.STUDIO_LANE || "DEV",
        operation: "embeddings.derived_query",
        projectId: opts?.projectId ?? undefined,
        attemptId,
        callOrdinal: 0,
      }),
      limits: ["DERIVED_QUERY_EMBED", "EMBEDDING_TARIFF_PARTIAL", `FP_${fp}`],
    });
  } catch {
    /* FinOps best-effort */
  }
  return { vector, tokens };
}

export function collectAdmissibleKnowledgeSources(bundle: Awaited<
  ReturnType<typeof listProjectKnowledge>
>): Array<{
  sourceId: string;
  sourceKind: DerivedSourceKind;
  text: string;
  versionLabel: string | null;
}> {
  const sources: Array<{
    sourceId: string;
    sourceKind: DerivedSourceKind;
    text: string;
    versionLabel: string | null;
  }> = [];
  for (const a of bundle.acquis) {
    if (a.status !== "CURRENT") continue;
    sources.push({
      sourceId: a.id,
      sourceKind: "acquis",
      text: `${a.kind}: ${a.statement}`,
      versionLabel: "CURRENT",
    });
  }
  for (const o of bundle.openPoints) {
    if (o.status !== "OPEN") continue;
    sources.push({
      sourceId: o.id,
      sourceKind: "open_point",
      text: o.statement,
      versionLabel: o.status,
    });
  }
  for (const s of bundle.subjects) {
    if (s.status === "ARCHIVED") continue;
    sources.push({
      sourceId: s.id,
      sourceKind: "subject",
      text: s.title,
      versionLabel: s.status,
    });
  }
  return sources;
}

async function persistDerivedIndex(input: {
  pilotId: string;
  projectId: string;
  preparationId: string;
  entries: DerivedIndexEntry[];
  vectors: Map<string, number[]>;
}): Promise<void> {
  if (derivedEmbeddingBackend() === "pg") {
    await replaceDerivedChunksPg({
      projectId: input.projectId,
      preparationId: input.preparationId,
      ownerPilotId: input.pilotId,
      entries: input.entries,
      vectors: input.vectors,
    });
    return;
  }
  // Test-only file backend — not an operational dual-write path.
  writeDerivedIndex({
    projectId: input.projectId,
    entries: input.entries,
    vectors: input.vectors,
  });
}

/**
 * Rebuild derived index from CURRENT/OPEN admissible sources only.
 */
export async function rebuildDerivedIndexFromProjectKnowledge(input: {
  pilotId: string;
  projectId: string;
  preparationId: string;
  client?: EmbedClient | null;
}): Promise<{
  ok: boolean;
  entryCount: number;
  tokens: number;
  reason?: string;
  skippedNonAdmissible?: number;
  backend?: string;
}> {
  if (!derivedEmbeddingSearchEnabled()) {
    return { ok: false, entryCount: 0, tokens: 0, reason: "FLAG_OFF" };
  }
  const client = input.client ?? (await defaultEmbedClient());
  if (!client) {
    return { ok: false, entryCount: 0, tokens: 0, reason: "NO_OPENAI_CLIENT" };
  }
  const bundle = await listProjectKnowledge(input.pilotId, input.projectId);
  const nonAdmissible =
    bundle.acquis.filter((a) => a.status !== "CURRENT").length +
    bundle.openPoints.filter((o) => o.status !== "OPEN").length +
    bundle.subjects.filter((s) => s.status === "ARCHIVED").length;
  const sources = collectAdmissibleKnowledgeSources(bundle);
  if (sources.length === 0) {
    await persistDerivedIndex({
      pilotId: input.pilotId,
      projectId: input.projectId,
      preparationId: input.preparationId,
      entries: [],
      vectors: new Map(),
    });
    return {
      ok: true,
      entryCount: 0,
      tokens: 0,
      skippedNonAdmissible: nonAdmissible,
      backend: derivedEmbeddingBackend(),
    };
  }
  const texts = sources.map((s) => s.text);
  const emb = await client.embeddings.create({
    model: DERIVED_EMBEDDING_MODEL,
    input: texts,
  });
  const vectors = new Map<string, number[]>();
  const entries: DerivedIndexEntry[] = [];
  for (let i = 0; i < sources.length; i++) {
    const src = sources[i]!;
    const vector = emb.data[i]?.embedding;
    if (!vector) continue;
    const fp = contentFingerprint(src.text);
    vectors.set(src.sourceId, vector);
    entries.push({
      sourceId: src.sourceId,
      sourceKind: src.sourceKind,
      projectId: input.projectId,
      preparationId: input.preparationId,
      contentFingerprint: fp,
      model: DERIVED_EMBEDDING_MODEL,
      dims: vector.length,
      revoked: false,
      deleted: false,
      versionLabel: src.versionLabel,
      indexRef: makeIndexRef({
        projectId: input.projectId,
        sourceId: src.sourceId,
        contentFingerprint: fp,
      }),
      updatedAt: new Date().toISOString(),
      text: src.text,
    });
  }
  await persistDerivedIndex({
    pilotId: input.pilotId,
    projectId: input.projectId,
    preparationId: input.preparationId,
    entries,
    vectors,
  });
  const { randomUUID: rebuildRandomUUID } = await import("node:crypto");
  const rebuildEmissionAttemptId = rebuildRandomUUID();
  try {
    const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
      "@/domains/conversation/usage-accounting"
    );
    await recordProviderUsageObservation({
      operation: "embeddings.derived_index_rebuild",
      modelRequested: DERIVED_EMBEDDING_MODEL,
      modelApplied: DERIVED_EMBEDDING_MODEL,
      inputTokens: emb.usage?.total_tokens ?? null,
      outputTokens: 0,
      status: "succeeded",
      granularity: "REQUEST",
      costCoverage: "PARTIAL",
      projectId: input.projectId,
      ownerPilotId: input.pilotId,
      preparationId: input.preparationId,
      idempotencyKey: buildIdempotencyKey({
        granularity: "REQUEST",
        lane: process.env.STUDIO_LANE || "DEV",
        operation: "embeddings.derived_index_rebuild",
        projectId: input.projectId,
        preparationId: input.preparationId,
        // Emission identity (not content size) — distinct rebuild HTTP ⇒ new attemptId.
        attemptId: rebuildEmissionAttemptId,
        callOrdinal: 0,
      }),
      limits: [
        "DERIVED_INDEX_PG",
        "ADMISSIBLE_SOURCES_ONLY",
        "EMBEDDING_TARIFF_PARTIAL",
        `BACKEND_${derivedEmbeddingBackend().toUpperCase()}`,
      ],
    });
  } catch {
    /* FinOps best-effort */
  }
  return {
    ok: true,
    entryCount: entries.length,
    tokens: emb.usage?.total_tokens ?? 0,
    skippedNonAdmissible: nonAdmissible,
    backend: derivedEmbeddingBackend(),
  };
}

export async function hybridSearchProjectKnowledge(input: {
  pilotId: string;
  projectId: string;
  query: string;
  lexical: LexicalHit[];
  limit?: number;
  client?: EmbedClient | null;
  openPointsOnly?: boolean;
  /**
   * Reuse a query embedding already obtained (e.g. journal route).
   * Skips provider emission and FinOps — local search only.
   */
  queryVector?: number[] | null;
}): Promise<{
  hits: HybridHit[];
  derivedUsed: boolean;
  derivedSkippedReason: string | null;
  rightsRevalidated: boolean;
  backend?: string;
}> {
  if (!derivedEmbeddingSearchEnabled()) {
    return {
      hits: input.lexical.map((l) => ({ ...l, channel: "lexical" as const })),
      derivedUsed: false,
      derivedSkippedReason: "FLAG_OFF",
      rightsRevalidated: false,
      backend: derivedEmbeddingBackend(),
    };
  }
  const bundle = await listProjectKnowledge(input.pilotId, input.projectId);
  const admissible = new Set(
    collectAdmissibleKnowledgeSources(bundle).map((s) => s.sourceId),
  );
  if (input.openPointsOnly) {
    for (const id of [...admissible]) {
      const op = bundle.openPoints.find((o) => o.id === id);
      if (!op || op.status !== "OPEN") admissible.delete(id);
    }
  }
  // Lexical subjectIds must NOT widen the semantic admissibility set (CONV-F06/F23).

  let queryVector = input.queryVector ?? null;
  if (!queryVector || queryVector.length === 0) {
    const emb = await embedQueryText(input.query, input.client, {
      projectId: input.projectId,
      ownerPilotId: input.pilotId,
    });
    if (!emb) {
      return {
        hits: input.lexical.map((l) => ({ ...l, channel: "lexical" as const })),
        derivedUsed: false,
        derivedSkippedReason: "EMBED_UNAVAILABLE",
        rightsRevalidated: true,
        backend: derivedEmbeddingBackend(),
      };
    }
    queryVector = emb.vector;
  }

  const snippets = new Map<string, string>();
  for (const l of input.lexical) snippets.set(l.sourceId, l.snippet);

  let semanticHits: MobilizableHit[] =
    derivedEmbeddingBackend() === "pg"
      ? await searchDerivedChunksPg({
          projectId: input.projectId,
          queryVector,
          limit: Math.max((input.limit ?? 12) * 2, 16),
        })
      : searchDerivedIndex({
          projectId: input.projectId,
          queryVector,
          limit: Math.max((input.limit ?? 12) * 2, 16),
          snippets,
        });
  semanticHits = semanticHits.map((h) => ({
    ...h,
    snippet: h.snippet || snippets.get(h.sourceId) || "",
  }));

  // Concurrent revoke / content change: re-read D4 admissible + fingerprint.
  const freshBundle = await listProjectKnowledge(input.pilotId, input.projectId);
  const freshSources = collectAdmissibleKnowledgeSources(freshBundle);
  const freshFp = new Map(
    freshSources.map((s) => [s.sourceId, contentFingerprint(s.text)]),
  );
  const subjectBySource = new Map<string, string | null>();
  const openPointBySource = new Map<string, string | null>();
  for (const a of freshBundle.acquis) {
    if (a.status === "CURRENT") subjectBySource.set(a.id, a.subjectId);
  }
  for (const o of freshBundle.openPoints) {
    if (o.status === "OPEN") {
      subjectBySource.set(o.id, o.subjectId);
      openPointBySource.set(o.id, o.id);
    }
  }
  for (const s of freshBundle.subjects) {
    subjectBySource.set(s.id, s.id);
  }

  // Semantic: only CURRENT/OPEN with matching FP. Missing indexRef ⇒ exclude.
  semanticHits = semanticHits.filter((h) => {
    if (!freshFp.has(h.sourceId)) return false;
    const m = /@([a-f0-9]+)$/i.exec(h.indexRef || "");
    if (!m) return false;
    return m[1] === freshFp.get(h.sourceId);
  });
  const semanticAllowed = new Set(
    [...semanticHits.map((h) => h.sourceId)].filter((id) => freshFp.has(id)),
  );

  const merged = mergeLexicalAndDerived({
    projectId: input.projectId,
    lexical: input.lexical,
    queryVector,
    limit: input.limit,
    snippets,
    allowedSourceIds: semanticAllowed,
    semanticHits,
  });
  const kindBySource = new Map(
    freshSources.map((s) => [s.sourceId, s.sourceKind] as const),
  );
  return {
    hits: merged.hits.map((h) => ({
      ...h,
      subjectId: subjectBySource.get(h.sourceId) ?? null,
      openPointId: openPointBySource.get(h.sourceId) ?? null,
      sourceKind:
        kindBySource.get(h.sourceId) ??
        (h as { sourceKind?: DerivedSourceKind }).sourceKind,
    })),
    derivedUsed: merged.derivedUsed,
    derivedSkippedReason: merged.derivedSkippedReason,
    rightsRevalidated: true,
    backend: derivedEmbeddingBackend(),
  };
}

/**
 * Product lifecycle: upsert one admissible source into the derived index.
 * Best-effort; flag OFF / missing client → no-op. Never full-rebuild.
 */
export async function upsertDerivedAdmissibleSource(input: {
  pilotId: string;
  projectId: string;
  preparationId: string;
  sourceId: string;
  sourceKind: DerivedSourceKind;
  text: string;
  versionLabel?: string | null;
  client?: EmbedClient | null;
}): Promise<{ ok: boolean; reason?: string; tokens?: number }> {
  if (!derivedEmbeddingSearchEnabled()) {
    return { ok: false, reason: "FLAG_OFF" };
  }
  const text = input.text.trim();
  if (!text || !input.sourceId.trim()) {
    return { ok: false, reason: "EMPTY" };
  }
  const client = input.client ?? (await defaultEmbedClient());
  if (!client) return { ok: false, reason: "NO_OPENAI_CLIENT" };
  const emb = await client.embeddings.create({
    model: DERIVED_EMBEDDING_MODEL,
    input: text,
  });
  const vector = emb.data[0]?.embedding;
  if (!vector?.length) return { ok: false, reason: "NO_VECTOR" };
  const fp = contentFingerprint(text);
  const entry: DerivedIndexEntry = {
    sourceId: input.sourceId,
    sourceKind: input.sourceKind,
    projectId: input.projectId,
    preparationId: input.preparationId,
    contentFingerprint: fp,
    model: DERIVED_EMBEDDING_MODEL,
    dims: vector.length,
    revoked: false,
    deleted: false,
    versionLabel: input.versionLabel ?? null,
    indexRef: makeIndexRef({
      projectId: input.projectId,
      sourceId: input.sourceId,
      contentFingerprint: fp,
    }),
    updatedAt: new Date().toISOString(),
    text,
  };
  if (derivedEmbeddingBackend() === "pg") {
    await upsertDerivedChunkPg({
      projectId: input.projectId,
      preparationId: input.preparationId,
      ownerPilotId: input.pilotId,
      entry,
      vector,
    });
  } else {
    // File backend (unit tests): single-entry write — not product ops path.
    writeDerivedIndex({
      projectId: input.projectId,
      entries: [entry],
      vectors: new Map([[input.sourceId, vector]]),
    });
  }
  const { randomUUID: upsertRandomUUID } = await import("node:crypto");
  const upsertEmissionAttemptId = upsertRandomUUID();
  try {
    const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
      "@/domains/conversation/usage-accounting"
    );
    await recordProviderUsageObservation({
      operation: "embeddings.derived_index_upsert",
      modelRequested: DERIVED_EMBEDDING_MODEL,
      modelApplied: DERIVED_EMBEDDING_MODEL,
      inputTokens: emb.usage?.total_tokens ?? null,
      outputTokens: 0,
      status: "succeeded",
      granularity: "REQUEST",
      costCoverage: "PARTIAL",
      projectId: input.projectId,
      ownerPilotId: input.pilotId,
      preparationId: input.preparationId,
      idempotencyKey: buildIdempotencyKey({
        granularity: "REQUEST",
        lane: process.env.STUDIO_LANE || "DEV",
        operation: "embeddings.derived_index_upsert",
        projectId: input.projectId,
        preparationId: input.preparationId,
        // Distinct HTTP emission ⇒ distinct attemptId. Content FP stays in limits.
        attemptId: upsertEmissionAttemptId,
        callOrdinal: 0,
      }),
      limits: [
        "DERIVED_INDEX_UPSERT",
        "ADMISSIBLE_SOURCE",
        `BACKEND_${derivedEmbeddingBackend().toUpperCase()}`,
        `FP_${fp.slice(0, 12)}`,
        `SOURCE_${input.sourceId.slice(0, 24)}`,
      ],
    });
  } catch {
    /* FinOps best-effort */
  }
  return {
    ok: true,
    tokens: emb.usage?.total_tokens ?? 0,
  };
}

export async function revokeDerivedSource(
  projectId: string,
  sourceId: string,
): Promise<boolean> {
  if (derivedEmbeddingBackend() === "pg") {
    const n = await markDerivedChunkLifecyclePg({
      projectId,
      sourceId,
      revoked: true,
    });
    return n > 0;
  }
  return markSourceLifecycle(projectId, sourceId, { revoked: true });
}

export async function deleteDerivedSource(
  projectId: string,
  sourceId: string,
): Promise<boolean> {
  if (derivedEmbeddingBackend() === "pg") {
    const n = await markDerivedChunkLifecyclePg({
      projectId,
      sourceId,
      deleted: true,
    });
    return n > 0;
  }
  return markSourceLifecycle(projectId, sourceId, { deleted: true });
}

export {
  searchDerivedIndex,
  derivedEmbeddingSearchEnabled,
  derivedEmbeddingBackend,
};
