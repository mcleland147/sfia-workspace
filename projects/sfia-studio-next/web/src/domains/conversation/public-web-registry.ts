/**
 * C24 — product mechanism to feed the public WEB registry.
 *
 * Nora cannot self-authorize. The server registers public topics from:
 * 1. Existing investigation state (prior turns).
 * 2. Preparation / project explicit exact-query authorizations (when present).
 * 3. A DEV catalog of known-public topic templates (env), matched against
 *    the Pilote message / objective — never private markers.
 *
 * Tests must not inject registry entries solely to force a PASS; they may
 * exercise the catalog/matching path with representative public topics.
 */

export type PublicWebRegistry = {
  topics: Record<string, string>;
  exactQueries: string[];
  facts: string[];
  limits: string[];
};

export type PublicTopicCatalogEntry = {
  ref: string;
  /** Exact public query string (no private context). */
  query: string;
  /** Tokens that must appear in user text / objective to auto-register. */
  matchTokens: string[];
};

const DEFAULT_DEV_CATALOG: PublicTopicCatalogEntry[] = [
  {
    ref: "node-lts",
    query: "Node.js current LTS version site:nodejs.org",
    matchTokens: ["node.js", "nodejs", "node lts", "lts node", "version node"],
  },
  {
    ref: "openai-models",
    query: "OpenAI API models documentation site:platform.openai.com",
    matchTokens: ["openai model", "gpt model", "openai api model", "gpt-4", "gpt-5"],
  },
  {
    ref: "postgres-docs",
    query: "PostgreSQL official documentation site:www.postgresql.org",
    matchTokens: ["postgresql", "postgres docs", "postgres documentation", "psql"],
  },
  {
    ref: "rfc8259-json",
    query: "RFC 8259 JSON site:datatracker.ietf.org",
    matchTokens: ["rfc 8259", "json rfc", "rfc8259"],
  },
  {
    ref: "mdn-fetch",
    query: "Fetch API MDN Web Docs site:developer.mozilla.org",
    matchTokens: ["fetch api", "mdn fetch", "request fetch"],
  },
  {
    ref: "nextjs-docs",
    query: "Next.js App Router documentation site:nextjs.org",
    matchTokens: ["next.js", "nextjs", "app router"],
  },
  {
    ref: "typescript-handbook",
    query: "TypeScript Handbook official documentation site:www.typescriptlang.org",
    matchTokens: ["typescript", "tsconfig", "handbook typescript"],
  },
  {
    ref: "owasp-top10",
    query: "OWASP Top 10 site:owasp.org",
    matchTokens: ["owasp", "top 10", "owasp top"],
  },
];

function normalize(s: string): string {
  return s.replace(/\s+/g, " ").trim().toLowerCase();
}

/**
 * Parse SFIA_DEV_PUBLIC_WEB_TOPIC_CATALOG JSON when set; else DEFAULT_DEV_CATALOG in DEV.
 * Production lanes get empty catalog unless explicitly configured.
 */
export function loadPublicTopicCatalog(
  env: Record<string, string | undefined> = process.env,
): PublicTopicCatalogEntry[] {
  const raw = (env.SFIA_DEV_PUBLIC_WEB_TOPIC_CATALOG || "").trim();
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as PublicTopicCatalogEntry[];
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(
        (e) =>
          e &&
          typeof e.ref === "string" &&
          typeof e.query === "string" &&
          Array.isArray(e.matchTokens),
      );
    } catch {
      return [];
    }
  }
  const lane = (env.STUDIO_LANE || "DEV").trim().toUpperCase();
  if (lane !== "DEV") return [];
  if ((env.SFIA_PUBLIC_WEB_CATALOG_DEFAULT || "1").trim() === "0") return [];
  return DEFAULT_DEV_CATALOG;
}

/**
 * Merge prior registry with catalog matches against haystack (user + objective).
 * Does not accept free-form Nora proposals as public provenance.
 */
export function resolvePublicWebRegistry(input: {
  priorTopics?: Record<string, string> | null;
  priorExactQueries?: string[] | null;
  priorFacts?: string[] | null;
  /** Explicit exact queries authorized by Pilote/server for this preparation. */
  explicitExactQueries?: string[] | null;
  haystack: string;
  privateMarkers?: string[];
  env?: Record<string, string | undefined>;
}): PublicWebRegistry {
  const limits: string[] = [];
  const markers = (input.privateMarkers ?? []).filter((m) => m.trim().length >= 4);
  const hay = normalize(input.haystack);
  const topics: Record<string, string> = {
    ...(input.priorTopics ?? {}),
  };
  const exact = new Set(
    [...(input.priorExactQueries ?? []), ...(input.explicitExactQueries ?? [])]
      .map((q) => q.replace(/\s+/g, " ").trim())
      .filter(Boolean),
  );
  const facts = [...new Set((input.priorFacts ?? []).map((f) => f.trim()).filter(Boolean))];

  const catalog = loadPublicTopicCatalog(input.env ?? process.env);
  if (catalog.length === 0) {
    limits.push("PUBLIC_WEB_CATALOG_EMPTY");
  }

  // Semantic public-research intent (server-side) — still requires catalog match;
  // never free-form Nora text as provenance. Nora may identify the need; the
  // server maps it onto an already-public catalog query.
  const publicResearchIntent =
    /\b(recherch|search|vérifi|verify|quelle version|current version|documentation officielle|site officiel|consulter (le |la |l')?(doc|documentation|site)|look up|official (docs?|documentation))\b/i.test(
      input.haystack,
    );
  if (publicResearchIntent) {
    limits.push("PUBLIC_RESEARCH_INTENT_DETECTED");
  }

  for (const entry of catalog) {
    const hit =
      entry.matchTokens.some((t) => hay.includes(normalize(t))) ||
      (publicResearchIntent &&
        entry.matchTokens.some((t) => {
          // Looser token: single distinctive word from catalog token (≥4 chars).
          const parts = normalize(t).split(/\s+/).filter((w) => w.length >= 4);
          return parts.some((w) => hay.includes(w));
        }));
    if (!hit) continue;
    const q = entry.query.replace(/\s+/g, " ").trim();
    if (!q) continue;
    if (markers.some((m) => q.toLowerCase().includes(m.toLowerCase()))) {
      limits.push(`CATALOG_SKIP_PRIVATE_MARKER:${entry.ref}`);
      continue;
    }
    if (!topics[entry.ref]) {
      topics[entry.ref] = q;
      limits.push(`CATALOG_REGISTERED:${entry.ref}`);
    }
  }

  if (Object.keys(topics).length === 0 && exact.size === 0 && facts.length === 0) {
    limits.push("PUBLIC_WEB_REGISTRY_EMPTY");
  }

  return {
    topics,
    exactQueries: [...exact],
    facts,
    limits,
  };
}
