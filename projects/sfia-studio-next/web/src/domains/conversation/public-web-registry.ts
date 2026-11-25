/**
 * C24 — product mechanism to feed the public WEB registry.
 *
 * Nora cannot self-authorize. The server registers public topics from:
 * 1. Existing investigation state (prior turns).
 * 2. Preparation / project explicit exact-query authorizations (when present).
 * 3. A DEV catalog of known-public topic templates (env), matched against
 *    the Pilote message / objective — never private markers.
 * 4. A generic pilot-public query composed from *this-turn* Pilote text when
 *    public-research intent is detected (REGISTERED_PUBLIC_COMPOSITION /
 *    EXPLICIT_AUTHORIZED_EXACT) — no topic-specific hardcoding required.
 *
 * Tests must not inject registry entries solely to force a PASS; they may
 * exercise the catalog/matching path with representative public topics.
 */

import { assertPublicHttpsUrl } from "./public-web-search-frontier";
import { sanitizePublicWebQuery } from "./web-search-sanitize";

export type PublicWebRegistry = {
  topics: Record<string, string>;
  exactQueries: string[];
  facts: string[];
  limits: string[];
  /**
   * Public https URLs literally supplied by the Pilote in this-turn pilot text.
   * May seed open_page discovery after URL/DNS public checks — never private hosts.
   */
  pilotProvidedUrls: string[];
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
  {
    ref: "ms-power-query",
    query: "What is Power Query Microsoft Learn site:learn.microsoft.com",
    matchTokens: [
      "power query",
      "powerquery",
      "microsoft learn power",
      "learn.microsoft.com/fr-fr/power-query",
    ],
  },
  {
    ref: "ms-sharepoint-folder-pq",
    query:
      "SharePoint Folder connector Power Query Microsoft Learn site:learn.microsoft.com",
    matchTokens: [
      "sharepoint folder",
      "connecteur sharepoint",
      "sharepoint power query",
      "power-query/connectors/sharepoint",
    ],
  },
];

const PILOT_PUBLIC_QUERY_REF = "pilot-public-query";

/**
 * Extract public https URLs from Pilote-only text.
 * Authority is NOT created by regex — only candidates for discovery after assertPublicHttpsUrl.
 */
export function extractPilotProvidedPublicUrls(pilotText: string): string[] {
  const found: string[] = [];
  const re = /https:\/\/[^\s<>"'\)\]]+/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(pilotText)) !== null) {
    const raw = m[0]!.replace(/[.,;:!?)]+$/g, "");
    const checked = assertPublicHttpsUrl(raw);
    if (!checked.ok) continue;
    found.push(checked.url);
  }
  return [...new Set(found)].slice(0, 8);
}

function normalize(s: string): string {
  return s.replace(/\s+/g, " ").trim().toLowerCase();
}

/**
 * Detect public-research intent on Pilote utterance (server-side).
 * Intent ≠ authorization — registration still requires sanitize + provenance modes.
 */
export function detectPublicResearchIntent(text: string): boolean {
  return /\b(recherch|search|vérifi|verify|quelle version|current version|documentation officielle|site officiel|consulter (le |la |l')?(doc|documentation|site)|look up|official (docs?|documentation)|documentation publique|page publique)\b/i.test(
    text,
  );
}

/**
 * Compose a generic public search query from this-turn Pilote text.
 * Strips intent boilerplate; never pulls private context haystack.
 */
export function composePilotPublicSearchQuery(
  pilotText: string,
  privateMarkers: string[] = [],
): { ok: true; query: string } | { ok: false; reason: string } {
  let q = (pilotText || "").replace(/\s+/g, " ").trim();
  if (!q) return { ok: false, reason: "EMPTY_PILOT_TEXT" };

  // Drop literal URLs — open_page path handles them separately.
  q = q.replace(/https:\/\/[^\s<>"'\)\]]+/gi, " ").replace(/\s+/g, " ").trim();

  q = q
    .replace(
      /\b(peux[- ]tu|pouvez[- ]vous|please|merci de|je (te|vous) (demande|prie)|nora[,:]?)\b/gi,
      " ",
    )
    .replace(
      /\b(rechercher?|search|consulter|look up|vérifier|verify|trouver|find)\b/gi,
      " ",
    )
    .replace(
      /\b(la |le |les |du |de la |des |une? |the |a |an )?(documentation officielle|documentation publique|site officiel|official docs?|page publique)\b/gi,
      " ",
    )
    .replace(/\s+/g, " ")
    .trim();

  // Prefer quoted public topic if present.
  const quoted = /[«"]([^»"]{3,120})[»"]/.exec(pilotText);
  if (quoted?.[1]?.trim()) {
    q = quoted[1].trim();
  }

  if (q.length < 3) return { ok: false, reason: "QUERY_TOO_SHORT_AFTER_STRIP" };
  if (q.length > 280) q = q.slice(0, 280);

  for (const m of privateMarkers) {
    if (m.trim().length >= 4 && q.toLowerCase().includes(m.toLowerCase())) {
      return { ok: false, reason: "PRIVATE_MARKER_IN_PILOT_QUERY" };
    }
  }

  const sanitized = sanitizePublicWebQuery(q);
  if (!sanitized.ok) {
    return { ok: false, reason: sanitized.blockedReason ?? "SANITIZE_BLOCKED" };
  }
  return { ok: true, query: sanitized.query };
}

/**
 * Parse SFIA_DEV_PUBLIC_WEB_TOPIC_CATALOG JSON when set; else DEFAULT catalog
 * on DEV and RECETTE (known-public templates only — never free search).
 * STABLE/PROD/UNKNOWN get empty catalog unless explicitly configured.
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
  if (lane !== "DEV" && lane !== "RECETTE") return [];
  if ((env.SFIA_PUBLIC_WEB_CATALOG_DEFAULT || "1").trim() === "0") return [];
  return DEFAULT_DEV_CATALOG;
}

/**
 * Merge prior registry with catalog matches + optional generic pilot query.
 * Does not accept free-form Nora proposals as public provenance.
 *
 * `pilotText` (this-turn Pilote message) is the only source for:
 * - pilotProvidedUrls
 * - pilot-public-query composition
 * Haystack may include objective/intent for catalog matching only.
 */
export function resolvePublicWebRegistry(input: {
  priorTopics?: Record<string, string> | null;
  priorExactQueries?: string[] | null;
  priorFacts?: string[] | null;
  /** Explicit exact queries authorized by Pilote/server for this preparation. */
  explicitExactQueries?: string[] | null;
  haystack: string;
  /**
   * This-turn Pilote utterance only — never objectives, documents, tool results,
   * or checkpoints. Defaults to haystack for backward-compatible callers.
   */
  pilotText?: string;
  privateMarkers?: string[];
  env?: Record<string, string | undefined>;
}): PublicWebRegistry {
  const limits: string[] = [];
  const markers = (input.privateMarkers ?? []).filter((m) => m.trim().length >= 4);
  const hay = normalize(input.haystack);
  const pilotText = (input.pilotText ?? input.haystack).trim();
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

  const publicResearchIntent = detectPublicResearchIntent(pilotText);
  if (publicResearchIntent) {
    limits.push("PUBLIC_RESEARCH_INTENT_DETECTED");
  }

  for (const entry of catalog) {
    // Catalog registration requires a real topic token match — never a single
    // generic word like "documentation" via public-research intent alone.
    // Generic public subjects use pilot-public-query (below).
    const hit = entry.matchTokens.some((t) => hay.includes(normalize(t)));
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

  // Generic path — no new hardcoded topic required for a new public subject.
  // Prefer catalog when it already registered something for this turn; still
  // allow pilot-public-query when research intent is clear and sanitize passes.
  if (publicResearchIntent) {
    const composed = composePilotPublicSearchQuery(pilotText, markers);
    if (composed.ok) {
      const alreadySame = Object.values(topics).some(
        (t) => normalize(t) === normalize(composed.query),
      );
      if (!alreadySame && !topics[PILOT_PUBLIC_QUERY_REF]) {
        topics[PILOT_PUBLIC_QUERY_REF] = composed.query;
        exact.add(composed.query);
        limits.push("PILOT_PUBLIC_QUERY_REGISTERED");
      } else if (alreadySame) {
        limits.push("PILOT_PUBLIC_QUERY_DEDUPED_CATALOG");
      }
    } else {
      limits.push(`PILOT_PUBLIC_QUERY_SKIPPED:${composed.reason}`);
    }
  }

  // C — URLs only from this-turn Pilote text (not objective / prior summaries).
  const pilotProvidedUrls = extractPilotProvidedPublicUrls(pilotText);
  if (pilotProvidedUrls.length > 0) {
    limits.push(`PILOT_PROVIDED_PUBLIC_URLS:${pilotProvidedUrls.length}`);
  }

  if (
    Object.keys(topics).length === 0 &&
    exact.size === 0 &&
    facts.length === 0 &&
    pilotProvidedUrls.length === 0
  ) {
    limits.push("PUBLIC_WEB_REGISTRY_EMPTY");
  }

  return {
    topics,
    exactQueries: [...exact],
    facts,
    limits,
    pilotProvidedUrls,
  };
}
