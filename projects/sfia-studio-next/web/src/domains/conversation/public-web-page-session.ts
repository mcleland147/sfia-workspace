/**
 * Progressive HTML/PDF consultation sessions for B1-opened pages.
 * In-memory, work/lane scoped — not a document registry.
 */

import { createHash } from "node:crypto";

export type WebPageSessionKind = "html" | "pdf";

export type WebPageSession = {
  sessionId: string;
  url: string;
  kind: WebPageSessionKind;
  /** Full extracted text (HTML) or concatenated PDF page texts when known. */
  text: string;
  /** PDF pages when kind=pdf. */
  pages?: Array<{ pageNumber: number; text: string }>;
  pageCount?: number;
  contentFingerprint: string;
  openedAt: string;
  charOffset: number;
  consultedRanges: Array<{ from: number; to: number }>;
  limits: string[];
};

const sessions = new Map<string, WebPageSession>();

function key(workId: string | null | undefined, url: string): string {
  return `${workId ?? "anon"}::${url}`;
}

export function putWebPageSession(
  workId: string | null | undefined,
  session: Omit<WebPageSession, "sessionId" | "charOffset" | "consultedRanges"> & {
    sessionId?: string;
  },
): WebPageSession {
  const k = key(workId, session.url);
  const existing = sessions.get(k);
  const next: WebPageSession = {
    sessionId:
      session.sessionId ??
      existing?.sessionId ??
      createHash("sha256").update(k).digest("hex").slice(0, 16),
    url: session.url,
    kind: session.kind,
    text: session.text,
    pages: session.pages,
    pageCount: session.pageCount,
    contentFingerprint: session.contentFingerprint,
    openedAt: session.openedAt,
    charOffset: existing?.charOffset ?? 0,
    consultedRanges: existing?.consultedRanges ?? [],
    limits: session.limits,
  };
  if (
    existing &&
    existing.contentFingerprint !== next.contentFingerprint
  ) {
    next.limits = [...next.limits, "SOURCE_MODIFIED_SINCE_PRIOR_OPEN"];
    next.charOffset = 0;
    next.consultedRanges = [];
  }
  sessions.set(k, next);
  return next;
}

export function getWebPageSession(
  workId: string | null | undefined,
  url: string,
): WebPageSession | null {
  return sessions.get(key(workId, url)) ?? null;
}

export function readWebPageProgressive(input: {
  workId?: string | null;
  url: string;
  from?: number | null;
  maxChars?: number | null;
}):
  | {
      ok: true;
      sessionId: string;
      excerpt: string;
      from: number;
      to: number;
      totalChars: number;
      coverage: "PARTIAL" | "COMPLETE";
      limits: string[];
      contentFingerprint: string;
    }
  | { ok: false; reason: string } {
  const session = getWebPageSession(input.workId, input.url);
  if (!session) return { ok: false, reason: "NO_OPEN_SESSION" };
  if (session.kind !== "html") {
    return { ok: false, reason: "SESSION_NOT_HTML_USE_PDF_READ" };
  }
  const from = Math.max(0, input.from ?? session.charOffset);
  const max = Math.min(8_000, Math.max(200, input.maxChars ?? 4_000));
  const excerpt = session.text.slice(from, from + max);
  const to = from + excerpt.length;
  session.charOffset = to;
  session.consultedRanges.push({ from, to });
  sessions.set(key(input.workId, input.url), session);
  return {
    ok: true,
    sessionId: session.sessionId,
    excerpt,
    from,
    to,
    totalChars: session.text.length,
    coverage: to >= session.text.length ? "COMPLETE" : "PARTIAL",
    limits: session.limits,
    contentFingerprint: session.contentFingerprint,
  };
}

export function searchWebPageSession(input: {
  workId?: string | null;
  url: string;
  query: string;
  maxHits?: number;
}):
  | {
      ok: true;
      hits: Array<{ index: number; excerpt: string; pageNumber?: number }>;
      limits: string[];
    }
  | { ok: false; reason: string } {
  const session = getWebPageSession(input.workId, input.url);
  if (!session) return { ok: false, reason: "NO_OPEN_SESSION" };
  const q = input.query.trim().toLowerCase();
  if (!q) return { ok: false, reason: "EMPTY_QUERY" };
  const maxHits = Math.min(20, input.maxHits ?? 8);
  const hits: Array<{ index: number; excerpt: string; pageNumber?: number }> = [];
  if (session.kind === "pdf" && session.pages) {
    for (const page of session.pages) {
      const hay = page.text.toLowerCase();
      let idx = 0;
      while (hits.length < maxHits) {
        const found = hay.indexOf(q, idx);
        if (found < 0) break;
        hits.push({
          index: found,
          pageNumber: page.pageNumber,
          excerpt: page.text.slice(
            Math.max(0, found - 40),
            Math.min(page.text.length, found + q.length + 60),
          ),
        });
        idx = found + q.length;
      }
    }
  } else {
    const hay = session.text.toLowerCase();
    let idx = 0;
    while (hits.length < maxHits) {
      const found = hay.indexOf(q, idx);
      if (found < 0) break;
      hits.push({
        index: found,
        excerpt: session.text.slice(
          Math.max(0, found - 40),
          Math.min(session.text.length, found + q.length + 60),
        ),
      });
      idx = found + q.length;
    }
  }
  return { ok: true, hits, limits: session.limits };
}

export function __resetWebPageSessionsForTests() {
  sessions.clear();
}
