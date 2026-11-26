/**
 * Progressive HTML/PDF consultation sessions for B1-opened pages.
 * In-memory, work/lane/project scoped — not a document registry.
 * Authorized PDF bytes stay server-side for viewer/progressive extract;
 * Nora tools never receive base64 payloads.
 */

import { createHash, randomBytes } from "node:crypto";

export type WebPageSessionKind = "html" | "pdf";

export type WebPageSessionScope = {
  lane: string;
  projectId: string;
  cognitiveWorkId: string;
  ownerPilotId?: string | null;
};

export type WebPageSession = {
  sessionId: string;
  viewerToken: string;
  scope: WebPageSessionScope;
  url: string;
  kind: WebPageSessionKind;
  /** HTML text or concatenated known PDF page texts. */
  text: string;
  pages?: Array<{ pageNumber: number; text: string }>;
  pageCount?: number;
  /** Pages already extracted into `pages` (1-based). */
  extractedPages: number[];
  /** Pages Nora actually returned/consulted (1-based). */
  consultedPages: number[];
  contentFingerprint: string;
  openedAt: string;
  expiresAt: string;
  charOffset: number;
  consultedRanges: Array<{ from: number; to: number }>;
  /** Byte length of authorized body when known. */
  bytesObtained: number;
  sourceTruncated: boolean;
  /** Server-only PDF bytes — never serialize into Nora tool payloads. */
  pdfBytes?: Uint8Array;
  limits: string[];
};

const DEFAULT_TTL_MS = 30 * 60 * 1000;
const DEFAULT_MAX_SESSIONS = 40;
const DEFAULT_MAX_MEMORY_BYTES = 64 * 1024 * 1024;

const sessions = new Map<string, WebPageSession>();
const byViewerToken = new Map<string, string>(); // token → map key

function ttlMs(): number {
  const n = Number(process.env.SFIA_WEB_PAGE_SESSION_TTL_MS || "");
  return Number.isFinite(n) && n > 0 ? n : DEFAULT_TTL_MS;
}

function maxSessions(): number {
  const n = Number(process.env.SFIA_WEB_PAGE_SESSION_MAX || "");
  return Number.isFinite(n) && n > 0 ? n : DEFAULT_MAX_SESSIONS;
}

function maxMemoryBytes(): number {
  const n = Number(process.env.SFIA_WEB_PAGE_SESSION_MAX_BYTES || "");
  return Number.isFinite(n) && n > 0 ? n : DEFAULT_MAX_MEMORY_BYTES;
}

function requireScope(scope: WebPageSessionScope): WebPageSessionScope {
  const lane = (scope.lane || "").trim();
  const projectId = (scope.projectId || "").trim();
  const cognitiveWorkId = (scope.cognitiveWorkId || "").trim();
  if (!lane || lane === "UNKNOWN") {
    throw new Error("SESSION_SCOPE_LANE_REQUIRED");
  }
  if (!projectId) throw new Error("SESSION_SCOPE_PROJECT_REQUIRED");
  if (!cognitiveWorkId) throw new Error("SESSION_SCOPE_WORK_REQUIRED");
  return { lane, projectId, cognitiveWorkId, ownerPilotId: scope.ownerPilotId ?? null };
}

function mapKey(scope: WebPageSessionScope, url: string): string {
  const s = requireScope(scope);
  return `${s.lane}::${s.projectId}::${s.cognitiveWorkId}::${url}`;
}

function memoryFootprint(s: WebPageSession): number {
  return (
    (s.pdfBytes?.byteLength ?? 0) +
    Buffer.byteLength(s.text, "utf8") +
    (s.pages ?? []).reduce((n, p) => n + Buffer.byteLength(p.text, "utf8"), 0)
  );
}

function totalMemory(): number {
  let n = 0;
  for (const s of sessions.values()) n += memoryFootprint(s);
  return n;
}

function purgeExpired(now = Date.now()): void {
  for (const [k, s] of sessions) {
    if (Date.parse(s.expiresAt) <= now) {
      byViewerToken.delete(s.viewerToken);
      sessions.delete(k);
    }
  }
}

function evictOldestUntilFit(neededBytes: number): void {
  purgeExpired();
  while (
    (sessions.size >= maxSessions() || totalMemory() + neededBytes > maxMemoryBytes()) &&
    sessions.size > 0
  ) {
    let oldestKey: string | null = null;
    let oldestTs = Number.POSITIVE_INFINITY;
    for (const [k, s] of sessions) {
      const t = Date.parse(s.openedAt);
      if (t < oldestTs) {
        oldestTs = t;
        oldestKey = k;
      }
    }
    if (!oldestKey) break;
    const doomed = sessions.get(oldestKey);
    if (doomed) byViewerToken.delete(doomed.viewerToken);
    sessions.delete(oldestKey);
  }
}

export function unionCoverageChars(
  ranges: Array<{ from: number; to: number }>,
  totalChars: number,
): { coveredChars: number; coverage: "PARTIAL" | "COMPLETE" | "EMPTY" } {
  if (totalChars <= 0) return { coveredChars: 0, coverage: "EMPTY" };
  if (!ranges.length) return { coveredChars: 0, coverage: "EMPTY" };
  const sorted = [...ranges]
    .map((r) => ({
      from: Math.max(0, Math.min(totalChars, r.from)),
      to: Math.max(0, Math.min(totalChars, r.to)),
    }))
    .filter((r) => r.to > r.from)
    .sort((a, b) => a.from - b.from);
  if (!sorted.length) return { coveredChars: 0, coverage: "EMPTY" };
  const merged: Array<{ from: number; to: number }> = [];
  for (const r of sorted) {
    const last = merged[merged.length - 1];
    if (!last || r.from > last.to) merged.push({ ...r });
    else last.to = Math.max(last.to, r.to);
  }
  const coveredChars = merged.reduce((n, r) => n + (r.to - r.from), 0);
  // COMPLETE only if contiguous coverage from 0 covers the entire available text.
  const complete =
    merged.length === 1 && merged[0]!.from === 0 && merged[0]!.to >= totalChars;
  return {
    coveredChars,
    coverage: complete ? "COMPLETE" : "PARTIAL",
  };
}

export function putWebPageSession(input: {
  scope: WebPageSessionScope;
  url: string;
  kind: WebPageSessionKind;
  text: string;
  pages?: Array<{ pageNumber: number; text: string }>;
  pageCount?: number;
  contentFingerprint: string;
  limits: string[];
  bytesObtained?: number;
  sourceTruncated?: boolean;
  pdfBytes?: Uint8Array;
  openedAt?: string;
}): WebPageSession {
  const scope = requireScope(input.scope);
  const k = mapKey(scope, input.url);
  purgeExpired();
  const existing = sessions.get(k);
  const needed =
    (input.pdfBytes?.byteLength ?? 0) +
    Buffer.byteLength(input.text, "utf8") +
    4096;
  if (!existing) evictOldestUntilFit(needed);

  const now = new Date();
  const expiresAt = new Date(now.getTime() + ttlMs()).toISOString();
  const viewerToken =
    existing?.viewerToken ?? randomBytes(24).toString("base64url");
  const extractedPages = [
    ...new Set([
      ...(existing?.extractedPages ?? []),
      ...(input.pages ?? []).map((p) => p.pageNumber),
    ]),
  ].sort((a, b) => a - b);

  // Copy PDF bytes — pdf.js getDocument may detach the caller's ArrayBuffer.
  const incomingPdf =
    input.pdfBytes && input.pdfBytes.byteLength > 0
      ? new Uint8Array(input.pdfBytes)
      : undefined;
  const retainedPdf =
    incomingPdf ??
    (existing?.pdfBytes && existing.pdfBytes.byteLength > 0
      ? existing.pdfBytes
      : undefined);

  const next: WebPageSession = {
    sessionId:
      existing?.sessionId ??
      createHash("sha256").update(k).digest("hex").slice(0, 16),
    viewerToken,
    scope,
    url: input.url,
    kind: input.kind,
    text: input.text,
    pages: input.pages ?? existing?.pages,
    pageCount: input.pageCount ?? existing?.pageCount,
    extractedPages,
    consultedPages: existing?.consultedPages ?? [],
    contentFingerprint: input.contentFingerprint,
    openedAt: input.openedAt ?? now.toISOString(),
    expiresAt,
    charOffset: existing?.charOffset ?? 0,
    consultedRanges: existing?.consultedRanges ?? [],
    bytesObtained: input.bytesObtained ?? existing?.bytesObtained ?? 0,
    sourceTruncated: Boolean(input.sourceTruncated ?? existing?.sourceTruncated),
    pdfBytes: retainedPdf,
    limits: [...input.limits],
  };

  if (existing && existing.contentFingerprint !== next.contentFingerprint) {
    next.limits = [...next.limits, "SOURCE_MODIFIED_SINCE_PRIOR_OPEN"];
    next.charOffset = 0;
    next.consultedRanges = [];
    next.consultedPages = [];
    next.extractedPages = (input.pages ?? []).map((p) => p.pageNumber);
  }

  if (existing) byViewerToken.delete(existing.viewerToken);
  sessions.set(k, next);
  byViewerToken.set(viewerToken, k);
  return next;
}

export function getWebPageSession(
  scope: WebPageSessionScope,
  url: string,
): WebPageSession | null {
  purgeExpired();
  try {
    return sessions.get(mapKey(scope, url)) ?? null;
  } catch {
    return null;
  }
}

export function getWebPageSessionByViewerToken(
  token: string,
): WebPageSession | null {
  purgeExpired();
  const k = byViewerToken.get(token);
  if (!k) return null;
  return sessions.get(k) ?? null;
}

export function touchSessionExpiry(session: WebPageSession): void {
  session.expiresAt = new Date(Date.now() + ttlMs()).toISOString();
}

export function readWebPageProgressive(input: {
  scope: WebPageSessionScope;
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
      coveredChars: number;
      coverage: "PARTIAL" | "COMPLETE" | "EMPTY";
      sourceTruncated: boolean;
      bytesObtained: number;
      limits: string[];
      contentFingerprint: string;
      viewerToken: string;
    }
  | { ok: false; reason: string } {
  const session = getWebPageSession(input.scope, input.url);
  if (!session) return { ok: false, reason: "NO_OPEN_SESSION" };
  if (Date.parse(session.expiresAt) <= Date.now()) {
    return { ok: false, reason: "SESSION_EXPIRED" };
  }
  if (session.kind !== "html") {
    return { ok: false, reason: "SESSION_NOT_HTML_USE_PDF_READ" };
  }
  const from = Math.max(0, input.from ?? session.charOffset);
  const max = Math.min(8_000, Math.max(200, input.maxChars ?? 4_000));
  const excerpt = session.text.slice(from, from + max);
  const to = from + excerpt.length;
  session.charOffset = to;
  session.consultedRanges.push({ from, to });
  touchSessionExpiry(session);
  const cov = unionCoverageChars(session.consultedRanges, session.text.length);
  const limits = [...session.limits];
  if (session.sourceTruncated) limits.push("SOURCE_BYTES_TRUNCATED");
  if (cov.coverage !== "COMPLETE") limits.push("NOT_FULLY_CONSULTED");
  sessions.set(mapKey(session.scope, session.url), session);
  return {
    ok: true,
    sessionId: session.sessionId,
    excerpt,
    from,
    to,
    totalChars: session.text.length,
    coveredChars: cov.coveredChars,
    coverage: cov.coverage,
    sourceTruncated: session.sourceTruncated,
    bytesObtained: session.bytesObtained,
    limits,
    contentFingerprint: session.contentFingerprint,
    viewerToken: session.viewerToken,
  };
}

export async function readWebPdfPages(input: {
  scope: WebPageSessionScope;
  url: string;
  pageFrom: number;
  pageTo: number;
  searchQuery?: string | null;
}): Promise<
  | {
      ok: true;
      sessionId: string;
      pageCount: number;
      pages: Array<{ pageNumber: number; text: string; charCount: number }>;
      pagesAvailable: number[];
      consultedPages: number[];
      searchHits?: Array<{ pageNumber: number; excerpt: string; matchIndex: number }>;
      coverage: "PARTIAL" | "COMPLETE" | "EMPTY";
      limits: string[];
      contentFingerprint: string;
      viewerToken: string;
      sourceTruncated: boolean;
    }
  | { ok: false; reason: string; limits?: string[] }
> {
  const session = getWebPageSession(input.scope, input.url);
  if (!session) return { ok: false, reason: "NO_OPEN_SESSION" };
  if (Date.parse(session.expiresAt) <= Date.now()) {
    return { ok: false, reason: "SESSION_EXPIRED" };
  }
  if (session.kind !== "pdf") {
    return { ok: false, reason: "SESSION_NOT_PDF" };
  }
  if (!session.pageCount) {
    return { ok: false, reason: "PDF_PAGE_COUNT_UNKNOWN", limits: session.limits };
  }

  const from = Math.max(1, input.pageFrom);
  const to = Math.min(session.pageCount, Math.max(from, input.pageTo));

  type Page = { pageNumber: number; text: string; charCount: number };
  let returned: Page[] = [];
  let searchHits:
    | Array<{ pageNumber: number; excerpt: string; matchIndex: number }>
    | undefined;
  let extractLimits: string[] = [];

  if (session.pdfBytes && session.pdfBytes.byteLength >= 5) {
    const { extractPdfText } = await import(
      "@/domains/documents/pdf-extract-server"
    );
    const pdf = await extractPdfText({
      bytes: session.pdfBytes,
      identity: {
        provenance: "WEB",
        sourceRef: session.url,
        versionToken: session.contentFingerprint,
        mimeClaimed: "application/pdf",
      },
      pageFrom: from,
      pageTo: to,
      searchQuery: input.searchQuery ?? null,
    });
    if (!pdf.ok) {
      return {
        ok: false,
        reason: pdf.reasonCode,
        limits: [...session.limits, ...pdf.limits],
      };
    }
    returned = pdf.pages;
    searchHits = pdf.searchHits;
    extractLimits = pdf.limits;
    const byPage = new Map((session.pages ?? []).map((p) => [p.pageNumber, p]));
    for (const p of pdf.pages) byPage.set(p.pageNumber, p);
    session.pages = [...byPage.values()].sort((a, b) => a.pageNumber - b.pageNumber);
  } else if (session.pages?.length) {
    // SCRIPTED / preloaded pages — no binary re-parse.
    returned = session.pages
      .filter((p) => p.pageNumber >= from && p.pageNumber <= to)
      .map((p) => ({
        pageNumber: p.pageNumber,
        text: p.text,
        charCount: p.text.length,
      }));
    extractLimits = ["PRELOADED_SESSION_PAGES"];
    if (input.searchQuery?.trim()) {
      const needle = input.searchQuery.trim().toLowerCase();
      searchHits = [];
      for (const p of returned) {
        const hay = p.text.toLowerCase();
        let idx = 0;
        while (searchHits.length < 10) {
          const found = hay.indexOf(needle, idx);
          if (found < 0) break;
          searchHits.push({
            pageNumber: p.pageNumber,
            matchIndex: found,
            excerpt: p.text.slice(
              Math.max(0, found - 40),
              Math.min(p.text.length, found + needle.length + 60),
            ),
          });
          idx = found + needle.length;
        }
      }
    }
  } else {
    return { ok: false, reason: "PDF_BYTES_UNAVAILABLE", limits: session.limits };
  }

  const pagesAvailable = returned.map((p) => p.pageNumber);
  session.extractedPages = [
    ...new Set([...session.extractedPages, ...pagesAvailable]),
  ].sort((a, b) => a - b);
  session.consultedPages = [
    ...new Set([...session.consultedPages, ...pagesAvailable]),
  ].sort((a, b) => a - b);
  session.text = (session.pages ?? returned).map((p) => p.text).join("\n");
  touchSessionExpiry(session);
  sessions.set(mapKey(session.scope, session.url), session);

  const allConsulted =
    session.pageCount > 0 &&
    session.consultedPages.length >= session.pageCount &&
    session.consultedPages[0] === 1 &&
    session.consultedPages[session.consultedPages.length - 1] ===
      session.pageCount &&
    session.consultedPages.every((p, i) => p === i + 1);

  const limits = [
    ...session.limits,
    ...extractLimits,
    `PAGES_RETURNED_${from}_${to}`,
  ];
  if (!allConsulted) limits.push("NOT_FULLY_CONSULTED");
  if (session.sourceTruncated) limits.push("SOURCE_BYTES_TRUNCATED");

  return {
    ok: true,
    sessionId: session.sessionId,
    pageCount: session.pageCount,
    pages: returned,
    pagesAvailable,
    consultedPages: session.consultedPages,
    searchHits,
    coverage: allConsulted ? "COMPLETE" : returned.length ? "PARTIAL" : "EMPTY",
    limits,
    contentFingerprint: session.contentFingerprint,
    viewerToken: session.viewerToken,
    sourceTruncated: session.sourceTruncated,
  };
}

export function searchWebPageSession(input: {
  scope: WebPageSessionScope;
  url: string;
  query: string;
  maxHits?: number;
}):
  | {
      ok: true;
      hits: Array<{ index: number; excerpt: string; pageNumber?: number }>;
      limits: string[];
      searchScope: "EXTRACTED_PAGES_ONLY" | "HTML_TEXT";
      extractedPages?: number[];
      pageCount?: number;
    }
  | { ok: false; reason: string } {
  const session = getWebPageSession(input.scope, input.url);
  if (!session) return { ok: false, reason: "NO_OPEN_SESSION" };
  if (Date.parse(session.expiresAt) <= Date.now()) {
    return { ok: false, reason: "SESSION_EXPIRED" };
  }
  const q = input.query.trim().toLowerCase();
  if (!q) return { ok: false, reason: "EMPTY_QUERY" };
  const maxHits = Math.min(20, input.maxHits ?? 8);
  const hits: Array<{ index: number; excerpt: string; pageNumber?: number }> = [];
  const limits = [...session.limits];

  if (session.kind === "pdf") {
    // Honest: search only pages already extracted/consulted via open or read_pdf_pages.
    const extracted = new Set(session.extractedPages);
    const searchable = (session.pages ?? []).filter((p) =>
      extracted.has(p.pageNumber),
    );
    if (!searchable.length) {
      return { ok: false, reason: "NO_EXTRACTED_PDF_PAGES" };
    }
    for (const page of searchable) {
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
    if (
      session.pageCount &&
      session.extractedPages.length < session.pageCount
    ) {
      limits.push("SEARCH_LIMITED_TO_EXTRACTED_PAGES");
      limits.push(
        `EXTRACTED_${session.extractedPages.length}_OF_${session.pageCount}`,
      );
      if (hits.length === 0) {
        limits.push("ABSENCE_NOT_PROVEN_FOR_UNEXTRACTED_PAGES");
      }
    }
    return {
      ok: true,
      hits,
      limits,
      searchScope: "EXTRACTED_PAGES_ONLY",
      extractedPages: session.extractedPages,
      pageCount: session.pageCount,
    };
  }

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
  return { ok: true, hits, limits, searchScope: "HTML_TEXT" };
}

export function __resetWebPageSessionsForTests() {
  sessions.clear();
  byViewerToken.clear();
}

export function __webPageSessionStatsForTests() {
  purgeExpired();
  return {
    count: sessions.size,
    memoryBytes: totalMemory(),
    maxSessions: maxSessions(),
    maxMemoryBytes: maxMemoryBytes(),
    ttlMs: ttlMs(),
  };
}
