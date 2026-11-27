/**
 * ML2 E = lexical (KEEP) + derived local embeddings (ADAPT).
 * Semantic hits never bypass mobilization filters.
 */
import {
  derivedEmbeddingSearchEnabled,
  searchDerivedIndex,
  type MobilizableHit,
} from "@/domains/knowledge/derived-embedding-index";
import { derivedEmbeddingBackend } from "@/domains/knowledge/derived-embedding-pg";

export type LexicalHit = {
  sourceId: string;
  title?: string;
  snippet: string;
  matchKind: string;
  channel: "lexical";
};

export type HybridHit = {
  sourceId: string;
  title?: string;
  snippet: string;
  matchKind: string;
  channel: "lexical" | "derived_embedding" | "both";
  score?: number;
  versionLabel?: string | null;
  indexRef?: string;
};

/**
 * Merge lexical + mobilizable derived hits. Lexical wins on exact id collision
 * for channel tagging; semantic score retained when present.
 */
export function mergeLexicalAndDerived(input: {
  projectId: string;
  lexical: LexicalHit[];
  queryVector?: number[] | null;
  limit?: number;
  snippets?: Map<string, string>;
  env?: NodeJS.ProcessEnv;
  /**
   * When set, only these source ids may leave the merge (post-rights filter).
   * Exact lexical ids already authorized should be included by the caller.
   */
  allowedSourceIds?: Set<string> | null;
  /**
   * Precomputed semantic hits (PG ops path). When omitted and backend=file,
   * falls back to local file search for unit tests only.
   */
  semanticHits?: MobilizableHit[] | null;
}): {
  hits: HybridHit[];
  derivedUsed: boolean;
  derivedSkippedReason: string | null;
} {
  const limit = Math.min(Math.max(input.limit ?? 12, 1), 24);
  const byId = new Map<string, HybridHit>();
  const allowed = input.allowedSourceIds ?? null;

  for (const L of input.lexical) {
    if (allowed && !allowed.has(L.sourceId)) continue;
    byId.set(L.sourceId, {
      sourceId: L.sourceId,
      title: L.title,
      snippet: L.snippet,
      matchKind: L.matchKind,
      channel: "lexical",
    });
  }

  let derivedUsed = false;
  let derivedSkippedReason: string | null = null;
  if (!derivedEmbeddingSearchEnabled(input.env)) {
    derivedSkippedReason = "FLAG_OFF";
  } else if (
    !input.semanticHits &&
    (!input.queryVector || input.queryVector.length === 0)
  ) {
    derivedSkippedReason = "NO_QUERY_VECTOR";
  } else {
    const semantic =
      input.semanticHits ??
      (derivedEmbeddingBackend(input.env) === "file" && input.queryVector
        ? searchDerivedIndex({
            projectId: input.projectId,
            queryVector: input.queryVector,
            limit: Math.max(limit * 2, 16),
            snippets: input.snippets,
          })
        : []);
    if (!input.semanticHits && derivedEmbeddingBackend(input.env) !== "file") {
      derivedSkippedReason = "SEMANTIC_HITS_REQUIRED_FOR_PG";
    }
    derivedUsed = semantic.length > 0 || input.semanticHits != null;
    for (const s of semantic) {
      if (allowed && !allowed.has(s.sourceId)) continue;
      const existing = byId.get(s.sourceId);
      if (existing) {
        // Exact lexical identity wins channel tag; retain semantic score.
        existing.channel = "both";
        existing.score = s.score;
        existing.versionLabel = s.versionLabel;
        existing.indexRef = s.indexRef;
        if (!existing.snippet && s.snippet) existing.snippet = s.snippet;
      } else {
        byId.set(s.sourceId, {
          sourceId: s.sourceId,
          snippet: s.snippet,
          matchKind: s.sourceKind,
          channel: "derived_embedding",
          score: s.score,
          versionLabel: s.versionLabel,
          indexRef: s.indexRef,
        });
      }
    }
  }

  const hits = [...byId.values()];
  // Prefer exact lexical / both over pure derived when scores tie.
  hits.sort((a, b) => {
    const channelBoost = (c: HybridHit["channel"]) =>
      c === "lexical" || c === "both" ? 0.05 : 0;
    const sa =
      (a.score ?? (a.channel === "lexical" || a.channel === "both" ? 0.5 : 0)) +
      channelBoost(a.channel);
    const sb =
      (b.score ?? (b.channel === "lexical" || b.channel === "both" ? 0.5 : 0)) +
      channelBoost(b.channel);
    if (sb !== sa) return sb - sa;
    return a.sourceId.localeCompare(b.sourceId);
  });
  return {
    hits: hits.slice(0, limit),
    derivedUsed,
    derivedSkippedReason,
  };
}

/** Test/helper: assert no revoked id appears in hybrid output given a denylist. */
export function assertNoRevokedMobilized(
  hits: Array<{ sourceId: string }>,
  revokedIds: Set<string>,
): { ok: boolean; leaks: string[] } {
  const leaks = hits.filter((h) => revokedIds.has(h.sourceId)).map((h) => h.sourceId);
  return { ok: leaks.length === 0, leaks };
}

export type { MobilizableHit };
