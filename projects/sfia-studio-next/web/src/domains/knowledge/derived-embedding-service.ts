/**
 * Product service for ML2 derived embeddings (file backend until GO migration 027).
 * Index is never métier SoT — mobilization filters apply before any Nora/API exposure.
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

async function defaultEmbedClient(): Promise<EmbedClient | null> {
  const key = (process.env.OPENAI_API_KEY || "").trim();
  if (!key) return null;
  try {
    const OpenAI = (await import("openai")).default;
    // Prefer Frontier-aware fetch when ALS campaign is active (Nora/LIVE).
    const frontier = await import(
      "@/domains/conversation/provider-emission-frontier"
    );
    const als = frontier.getActiveCampaignEnvelope?.();
    const fetchImpl = als
      ? frontier.createFrontierAwareFetch(globalThis.fetch.bind(globalThis), {
          requireCampaign: true,
        })
      : globalThis.fetch.bind(globalThis);
    return new OpenAI({ apiKey: key, fetch: fetchImpl, maxRetries: 0 }) as unknown as EmbedClient;
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

/** Rebuild file index from CURRENT acquis + OPEN points + subjects for a project. */
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
}> {
  if (!derivedEmbeddingSearchEnabled()) {
    return { ok: false, entryCount: 0, tokens: 0, reason: "FLAG_OFF" };
  }
  const client = input.client ?? (await defaultEmbedClient());
  if (!client) {
    return { ok: false, entryCount: 0, tokens: 0, reason: "NO_OPENAI_CLIENT" };
  }
  const bundle = await listProjectKnowledge(input.pilotId, input.projectId);
  const sources: Array<{
    sourceId: string;
    sourceKind: DerivedSourceKind;
    text: string;
    versionLabel: string | null;
    revoked: boolean;
  }> = [];
  for (const a of bundle.acquis) {
    if (a.status !== "CURRENT") {
      sources.push({
        sourceId: a.id,
        sourceKind: "acquis",
        text: a.statement,
        versionLabel: a.status,
        revoked: true,
      });
      continue;
    }
    sources.push({
      sourceId: a.id,
      sourceKind: "acquis",
      text: `${a.kind}: ${a.statement}`,
      versionLabel: "CURRENT",
      revoked: false,
    });
  }
  for (const o of bundle.openPoints) {
    sources.push({
      sourceId: o.id,
      sourceKind: "open_point",
      text: o.statement,
      versionLabel: o.status,
      revoked: o.status !== "OPEN",
    });
  }
  for (const s of bundle.subjects) {
    if (s.status === "ARCHIVED") continue;
    sources.push({
      sourceId: s.id,
      sourceKind: "subject",
      text: s.title,
      versionLabel: s.status,
      revoked: false,
    });
  }
  if (sources.length === 0) {
    writeDerivedIndex({
      projectId: input.projectId,
      entries: [],
      vectors: new Map(),
    });
    return { ok: true, entryCount: 0, tokens: 0 };
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
      revoked: src.revoked,
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
      limits: ["DERIVED_FILE_INDEX", "AWAITING_MIGRATION_027_GO", "EMBEDDING_TARIFF_PARTIAL"],
    });
  } catch {
    /* FinOps best-effort */
  }
  return {
    ok: true,
    entryCount: entries.length,
    tokens: emb.usage?.total_tokens ?? 0,
  };
}

export async function hybridSearchProjectKnowledge(input: {
  pilotId: string;
  projectId: string;
  query: string;
  lexical: LexicalHit[];
  limit?: number;
  client?: EmbedClient | null;
}): Promise<{
  hits: HybridHit[];
  derivedUsed: boolean;
  derivedSkippedReason: string | null;
}> {
  if (!derivedEmbeddingSearchEnabled()) {
    return {
      hits: input.lexical.map((l) => ({ ...l, channel: "lexical" as const })),
      derivedUsed: false,
      derivedSkippedReason: "FLAG_OFF",
    };
  }
  const emb = await embedQueryText(input.query, input.client);
  if (!emb) {
    return {
      hits: input.lexical.map((l) => ({ ...l, channel: "lexical" as const })),
      derivedUsed: false,
      derivedSkippedReason: "EMBED_UNAVAILABLE",
    };
  }
  const snippets = new Map<string, string>();
  for (const l of input.lexical) snippets.set(l.sourceId, l.snippet);
  return mergeLexicalAndDerived({
    projectId: input.projectId,
    lexical: input.lexical,
    queryVector: emb.vector,
    limit: input.limit,
    snippets,
  });
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
