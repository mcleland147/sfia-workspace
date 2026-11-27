/**
 * Product service for ML2 derived embeddings.
 * Backend: file until Morris GO migration 027; then PG-only (no dual-write).
 * Index is never métier SoT — D4/D9 ownership + mobilization filters apply.
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
} from "@/domains/knowledge/derived-embedding-index";
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

/**
 * Frontier-bound embeddings client only — never raw fetch outside Frontier.
 * Requires ALS campaign when a required latch / active envelope is present.
 */
async function defaultEmbedClient(): Promise<EmbedClient | null> {
  const key = (process.env.OPENAI_API_KEY || "").trim();
  if (!key) return null;
  try {
    const frontier = await import(
      "@/domains/conversation/provider-emission-frontier"
    );
    const als = frontier.getActiveCampaignEnvelope?.() ?? null;
    const requireCampaign = Boolean(als?.required) || als != null;
    // Always wrap fetch — refuse silent bypass of Frontier accounting.
    const fetchImpl = frontier.createFrontierAwareFetch(
      globalThis.fetch.bind(globalThis),
      { requireCampaign },
    );
    const OpenAI = (await import("openai")).default;
    return new OpenAI({
      apiKey: key,
      fetch: fetchImpl,
      maxRetries: 0,
    }) as unknown as EmbedClient;
  } catch {
    return null;
  }
}

export async function embedQueryText(
  text: string,
  client?: EmbedClient | null,
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
  return { vector, tokens: res.usage?.total_tokens ?? 0 };
}

/** Admissible D4 sources for index rebuild / mobilization (CURRENT/OPEN only). */
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

/**
 * Rebuild derived index from CURRENT/OPEN admissible sources only.
 * Revoked / superseded / closed texts are never sent to Embeddings API.
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
}> {
  if (!derivedEmbeddingSearchEnabled()) {
    return { ok: false, entryCount: 0, tokens: 0, reason: "FLAG_OFF" };
  }
  const client = input.client ?? (await defaultEmbedClient());
  if (!client) {
    return { ok: false, entryCount: 0, tokens: 0, reason: "NO_OPENAI_CLIENT" };
  }
  // Rights: listProjectKnowledge → assertOwnedProject (throws if foreign).
  const bundle = await listProjectKnowledge(input.pilotId, input.projectId);
  const nonAdmissible =
    bundle.acquis.filter((a) => a.status !== "CURRENT").length +
    bundle.openPoints.filter((o) => o.status !== "OPEN").length +
    bundle.subjects.filter((s) => s.status === "ARCHIVED").length;
  const sources = collectAdmissibleKnowledgeSources(bundle);
  if (sources.length === 0) {
    writeDerivedIndex({
      projectId: input.projectId,
      entries: [],
      vectors: new Map(),
    });
    return {
      ok: true,
      entryCount: 0,
      tokens: 0,
      skippedNonAdmissible: nonAdmissible,
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
  writeDerivedIndex({
    projectId: input.projectId,
    entries,
    vectors,
  });
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
        callOrdinal: Date.now() % 100000,
      }),
      limits: [
        "DERIVED_INDEX",
        "ADMISSIBLE_SOURCES_ONLY",
        "EMBEDDING_TARIFF_PARTIAL",
        "AWAITING_MIGRATION_027_GO",
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
  };
}

/**
 * Hybrid search with D4 rights revalidation before derived mobilization.
 * Foreign / revoked / non-current ids are stripped after merge.
 */
export async function hybridSearchProjectKnowledge(input: {
  pilotId: string;
  projectId: string;
  query: string;
  lexical: LexicalHit[];
  limit?: number;
  client?: EmbedClient | null;
  /** When true, only open points may appear in derived channel. */
  openPointsOnly?: boolean;
}): Promise<{
  hits: HybridHit[];
  derivedUsed: boolean;
  derivedSkippedReason: string | null;
  rightsRevalidated: boolean;
}> {
  if (!derivedEmbeddingSearchEnabled()) {
    return {
      hits: input.lexical.map((l) => ({ ...l, channel: "lexical" as const })),
      derivedUsed: false,
      derivedSkippedReason: "FLAG_OFF",
      rightsRevalidated: false,
    };
  }
  // Revalidate ownership + current admissible set (throws NOT_FOUND if foreign).
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
  // Lexical hits already came from authorized paths — keep their exact ids.
  for (const l of input.lexical) admissible.add(l.sourceId);

  const emb = await embedQueryText(input.query, input.client);
  if (!emb) {
    return {
      hits: input.lexical
        .filter((l) => admissible.has(l.sourceId))
        .map((l) => ({ ...l, channel: "lexical" as const })),
      derivedUsed: false,
      derivedSkippedReason: "EMBED_UNAVAILABLE",
      rightsRevalidated: true,
    };
  }
  const snippets = new Map<string, string>();
  for (const l of input.lexical) snippets.set(l.sourceId, l.snippet);
  const merged = mergeLexicalAndDerived({
    projectId: input.projectId,
    lexical: input.lexical.filter((l) => admissible.has(l.sourceId)),
    queryVector: emb.vector,
    limit: input.limit,
    snippets,
    allowedSourceIds: admissible,
  });
  return { ...merged, rightsRevalidated: true };
}

export function revokeDerivedSource(
  projectId: string,
  sourceId: string,
): boolean {
  return markSourceLifecycle(projectId, sourceId, { revoked: true });
}

export function deleteDerivedSource(
  projectId: string,
  sourceId: string,
): boolean {
  return markSourceLifecycle(projectId, sourceId, { deleted: true });
}

export { searchDerivedIndex, derivedEmbeddingSearchEnabled };
