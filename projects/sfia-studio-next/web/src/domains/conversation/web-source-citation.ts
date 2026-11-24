/**
 * B04 — citation / provenance contract for public web sources.
 * Distinguishes discovery vs open, records URL actually established, freshness.
 * Does not invent CONSULTED content. WEB LIVE remains gated.
 */

export type WebSourceCitation = {
  url: string;
  /** Final URL after validation — never a private destination. */
  establishedUrl: string;
  title: string | null;
  publishedAt: string | null;
  retrievedAt: string;
  freshness: "UNKNOWN" | "FRESH" | "STALE" | "UNAVAILABLE";
  coverage: "DISCOVERED" | "OPENED" | "CONSULTED" | "DENIED" | "PARTIAL";
  excerpt: string | null;
  limits: string[];
};

export function buildWebSourceCitation(input: {
  url: string;
  establishedUrl?: string | null;
  title?: string | null;
  publishedAt?: string | null;
  retrievedAt?: string;
  coverage: WebSourceCitation["coverage"];
  excerpt?: string | null;
  contentUnavailable?: boolean;
  limits?: string[];
}): WebSourceCitation {
  const retrievedAt = input.retrievedAt ?? new Date().toISOString();
  let freshness: WebSourceCitation["freshness"] = "UNKNOWN";
  if (input.contentUnavailable || input.coverage === "DENIED") {
    freshness = "UNAVAILABLE";
  } else if (input.publishedAt) {
    const ageMs = Date.now() - Date.parse(input.publishedAt);
    if (Number.isFinite(ageMs)) {
      freshness = ageMs > 1000 * 60 * 60 * 24 * 365 ? "STALE" : "FRESH";
    }
  }
  const limits = [...(input.limits ?? [])];
  if (input.coverage === "DISCOVERED") {
    limits.push("DISCOVERED_NOT_OPENED — citation incomplete until OPENED/CONSULTED");
  }
  if (!input.excerpt && (input.coverage === "OPENED" || input.coverage === "CONSULTED")) {
    limits.push("NO_EXCERPT_CAPTURED");
  }
  return {
    url: input.url,
    establishedUrl: (input.establishedUrl ?? input.url).trim(),
    title: input.title?.trim() || null,
    publishedAt: input.publishedAt ?? null,
    retrievedAt,
    freshness,
    coverage: input.coverage,
    excerpt: input.excerpt?.slice(0, 500) ?? null,
    limits,
  };
}

export function formatCitationForDisplay(c: WebSourceCitation): string {
  const title = c.title || c.establishedUrl;
  const when = c.publishedAt ? ` (${c.publishedAt.slice(0, 10)})` : "";
  const note =
    c.coverage === "DISCOVERED"
      ? " [découvert, non ouvert]"
      : c.coverage === "DENIED"
        ? " [refusé]"
        : "";
  return `${title}${when} — ${c.establishedUrl}${note}`;
}
