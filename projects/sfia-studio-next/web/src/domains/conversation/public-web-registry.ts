/**
 * C24 / T1 — public WEB registry feeding (server-owned provenance).
 *
 * Nora may identify a public research need and propose a public-only query.
 * She cannot self-authorize egress. Admission remains EXPLICIT_AUTHORIZED_EXACT
 * or REGISTERED_PUBLIC_COMPOSITION after server sanitize + private-marker checks.
 *
 * Lexical helpers (catalog token match, URL parse) are not semantic authorization.
 */

import { assertPublicHttpsUrl } from "./public-web-search-frontier";
import { sanitizePublicWebQuery } from "./web-search-sanitize";

export type PublicWebRegistry = {
  topics: Record<string, string>;
  exactQueries: string[];
  facts: string[];
  limits: string[];
  /**
   * Public https URLs literally present in this-turn Pilote text.
   * Candidates only — open_page still requires admission (not auto-authorized).
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

export const PILOT_PUBLIC_QUERY_REF = "pilot-public-query";

/**
 * Explicit Pilote authorization of an exact public query (Option B).
 * Lexical free-form research phrasing does NOT authorize — only these markers.
 * Patterns (case-insensitive):
 *   AUTHORIZE_PUBLIC_QUERY: "exact query"
 *   Autoriser la recherche publique exacte : « exact query »
 *   Autoriser la recherche publique exacte: "exact query"
 */
export function extractPilotAuthorizedExactQueries(pilotText: string): string[] {
  const text = pilotText || "";
  if (!text.trim()) return [];
  const out: string[] = [];
  const patterns = [
    /AUTHORIZE_PUBLIC_QUERY\s*:\s*[«"']([^»"']+)[»"']/gi,
    /Autoriser\s+la\s+recherche\s+publique\s+exacte\s*:\s*[«"']([^»"']+)[»"']/gi,
  ];
  for (const re of patterns) {
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      const q = (m[1] || "").replace(/\s+/g, " ").trim();
      if (q.length >= 3) out.push(q);
    }
  }
  return [...new Set(out)].slice(0, 8);
}

/**
 * Stage a Nora-proposed public query for Pilote admission (no egress).
 * Sanitize + private-marker checks only — never auto-authorizes.
 */
export function stageNoraProposedPublicQuery(input: {
  proposedQuery: string;
  privateMarkers?: string[];
}):
  | { ok: true; query: string; pending: true }
  | { ok: false; reason: string } {
  const raw = (input.proposedQuery || "").replace(/\s+/g, " ").trim();
  if (!raw || raw.length < 3) {
    return { ok: false, reason: "PROPOSED_QUERY_EMPTY" };
  }
  const markers = (input.privateMarkers ?? []).filter((m) => m.trim().length >= 4);
  for (const m of markers) {
    if (raw.toLowerCase().includes(m.toLowerCase())) {
      return { ok: false, reason: "PRIVATE_MARKER_IN_PROPOSED_QUERY" };
    }
  }
  const sanitized = sanitizePublicWebQuery(raw);
  if (!sanitized.ok) {
    return { ok: false, reason: sanitized.blockedReason ?? "SANITIZE_BLOCKED" };
  }
  return { ok: true, query: sanitized.query, pending: true };
}

/**
 * Extract public https URL candidates from an explicit Pilote-only string.
 * Parsing only — does not create open authorization.
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
 * Server admission of a Nora-proposed public-only query (Option B).
 * Semantic need is Nora's; permission is the server's.
 * Sanitize + private-marker checks are necessary but NOT sufficient:
 * the exact query must already appear in a server-owned registered public set
 * (catalog topic queries and/or explicit exact allowlist for the turn).
 * Does not invent a third provenance mode — caller registers then uses
 * EXPLICIT_AUTHORIZED_EXACT / REGISTERED_PUBLIC_COMPOSITION via authorizePublicWebQuery.
 */
export function admitNoraProposedPublicQuery(input: {
  proposedQuery: string;
  privateMarkers?: string[];
  /**
   * Server-owned public queries already registered for this turn
   * (catalog compositions + explicit exacts). Required for admission.
   */
  registeredPublicQueries?: string[] | null;
}):
  | { ok: true; query: string; ref: typeof PILOT_PUBLIC_QUERY_REF }
  | { ok: false; reason: string } {
  const raw = (input.proposedQuery || "").replace(/\s+/g, " ").trim();
  if (!raw || raw.length < 3) {
    return { ok: false, reason: "PROPOSED_QUERY_EMPTY" };
  }
  const markers = (input.privateMarkers ?? []).filter((m) => m.trim().length >= 4);
  for (const m of markers) {
    if (raw.toLowerCase().includes(m.toLowerCase())) {
      return { ok: false, reason: "PRIVATE_MARKER_IN_PROPOSED_QUERY" };
    }
  }
  const sanitized = sanitizePublicWebQuery(raw);
  if (!sanitized.ok) {
    return { ok: false, reason: sanitized.blockedReason ?? "SANITIZE_BLOCKED" };
  }
  const registered = (input.registeredPublicQueries ?? [])
    .map((q) => q.replace(/\s+/g, " ").trim())
    .filter(Boolean);
  if (registered.length === 0) {
    return { ok: false, reason: "PUBLIC_PROVENANCE_REQUIRED" };
  }
  const hit = registered.find(
    (q) => q.toLowerCase() === sanitized.query.toLowerCase(),
  );
  if (!hit) {
    return { ok: false, reason: "PROPOSED_QUERY_NOT_IN_REGISTERED_PUBLIC_SET" };
  }
  return {
    ok: true,
    query: hit,
    ref: PILOT_PUBLIC_QUERY_REF,
  };
}

/**
 * @deprecated Lexical intent detection must not authorize egress.
 * Kept as a no-op diagnostic helper for tests migrating off the prior path.
 */
export function detectPublicResearchIntent(_text: string): boolean {
  return false;
}

/**
 * @deprecated Free-form pilot-text composition is not an authorization path.
 * Use admitNoraProposedPublicQuery after Nora proposes a public-only query.
 */
export function composePilotPublicSearchQuery(
  _pilotText: string,
  _privateMarkers: string[] = [],
): { ok: true; query: string } | { ok: false; reason: string } {
  return { ok: false, reason: "LEXICAL_COMPOSITION_DISABLED" };
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
 * Merge prior registry with catalog matches.
 *
 * `pilotText` is REQUIRED for pilot-originated URL candidate extraction.
 * Haystack is NEVER a fallback provenance for URLs or free-form queries.
 * Stale `pilot-public-query` from prior turns is stripped (must be re-admitted).
 */
export function resolvePublicWebRegistry(input: {
  priorTopics?: Record<string, string> | null;
  priorExactQueries?: string[] | null;
  priorFacts?: string[] | null;
  /** Explicit exact queries authorized by Pilote/server for this preparation. */
  explicitExactQueries?: string[] | null;
  /**
   * Aggregated context for catalog token matching only (objective / intent).
   * Never used as URL or free-form query provenance.
   */
  haystack: string;
  /**
   * This-turn Pilote utterance — required for pilot URL candidates.
   * Absence ⇒ fail closed for pilot-originated URL extraction.
   */
  pilotText?: string | null;
  privateMarkers?: string[];
  env?: Record<string, string | undefined>;
}): PublicWebRegistry {
  const limits: string[] = [];
  const markers = (input.privateMarkers ?? []).filter((m) => m.trim().length >= 4);
  const hay = normalize(input.haystack);

  // Strip stale ephemeral generic registration — must be re-admitted this turn.
  const priorTopicsRaw = { ...(input.priorTopics ?? {}) };
  if (priorTopicsRaw[PILOT_PUBLIC_QUERY_REF]) {
    delete priorTopicsRaw[PILOT_PUBLIC_QUERY_REF];
    limits.push("STALE_PILOT_PUBLIC_QUERY_STRIPPED");
  }

  const topics: Record<string, string> = { ...priorTopicsRaw };
  const exact = new Set(
    [...(input.priorExactQueries ?? []), ...(input.explicitExactQueries ?? [])]
      .map((q) => q.replace(/\s+/g, " ").trim())
      .filter(Boolean)
      // Drop exacts that only existed for a prior pilot-public-query value.
      .filter((q) => {
        const priorPilot = (input.priorTopics ?? {})[PILOT_PUBLIC_QUERY_REF];
        return !priorPilot || normalize(q) !== normalize(priorPilot);
      }),
  );
  const facts = [...new Set((input.priorFacts ?? []).map((f) => f.trim()).filter(Boolean))];

  const catalog = loadPublicTopicCatalog(input.env ?? process.env);
  if (catalog.length === 0) {
    limits.push("PUBLIC_WEB_CATALOG_EMPTY");
  }

  // Catalog = server-owned known-public templates (REGISTERED_PUBLIC_COMPOSITION).
  // Token match is navigation onto a pre-approved public query — not free-form auth.
  for (const entry of catalog) {
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

  // T1.2 — no haystack fallback for pilot provenance.
  let pilotProvidedUrls: string[] = [];
  if (typeof input.pilotText === "string" && input.pilotText.trim()) {
    pilotProvidedUrls = extractPilotProvidedPublicUrls(input.pilotText);
    if (pilotProvidedUrls.length > 0) {
      limits.push(`PILOT_URL_CANDIDATES:${pilotProvidedUrls.length}`);
      limits.push("PILOT_URL_NOT_AUTO_AUTHORIZED");
    }
    // Option B — explicit exact authorization markers from this-turn Pilote only.
    const pilotExact = extractPilotAuthorizedExactQueries(input.pilotText);
    for (const q of pilotExact) {
      if (markers.some((m) => q.toLowerCase().includes(m.toLowerCase()))) {
        limits.push("PILOT_EXACT_SKIP_PRIVATE_MARKER");
        continue;
      }
      const sanitized = sanitizePublicWebQuery(q);
      if (!sanitized.ok) {
        limits.push(`PILOT_EXACT_SANITIZE_BLOCKED:${sanitized.blockedReason ?? "BLOCKED"}`);
        continue;
      }
      if (!exact.has(sanitized.query)) {
        exact.add(sanitized.query);
        limits.push("PILOT_EXACT_AUTHORIZED");
      }
    }
  } else {
    limits.push("PILOT_TEXT_ABSENT_URL_EXTRACTION_CLOSED");
  }

  // Lexical free-form registration removed (T1.1). Nora must propose via tool;
  // server admits with admitNoraProposedPublicQuery after Pilote exact auth or catalog.
  limits.push("LEXICAL_PILOT_QUERY_REGISTRATION_DISABLED");

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
