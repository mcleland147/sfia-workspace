/**
 * Shared PDF read contract — bytes already authorized by B1 / D9 / D4 owner.
 * The PDF processor never resolves access rights.
 *
 * Opposable access before parse:
 * - WEB viewerToken path: `pdf-viewer-authorization` + authenticated Studio session
 * - Git base64 in UI: authorized via D9 read_git_* gates before bytes reach the client
 * - D4 / FIXTURE: explicit server-side contract only — never inferred from MIME/path alone
 */

export type PdfProvenance = "WEB" | "GIT" | "D4" | "FIXTURE";

export type PdfCoverage =
  | "IDENTIFIED"
  | "METADATA"
  | "PARTIAL"
  | "PAGE_READ"
  | "SEARCHED"
  | "UNAVAILABLE"
  | "DENIED";

export type PdfPageText = {
  pageNumber: number; // 1-based
  text: string;
  charCount: number;
};

export type PdfSearchHit = {
  pageNumber: number;
  excerpt: string;
  matchIndex: number;
};

export type PdfReadLimits = {
  maxBytes: number;
  maxPages: number;
  maxTextChars: number;
  timeoutMs: number;
};

export type PdfSourceIdentity = {
  provenance: PdfProvenance;
  /** Owner-scoped id (url, git path@blob, document revision, fixture id). */
  sourceRef: string;
  /** Version / blob / etag when known — never invent. */
  versionToken: string | null;
  mimeClaimed: string | null;
  byteLength: number;
};

export type PdfReadResult =
  | {
      ok: true;
      identity: PdfSourceIdentity;
      pageCount: number;
      pagesAvailable: number[];
      pages: PdfPageText[];
      searchHits?: PdfSearchHit[];
      coverage: PdfCoverage;
      textCharsExtracted: number;
      limits: string[];
      fingerprint: string | null;
    }
  | {
      ok: false;
      identity: PdfSourceIdentity;
      coverage: "UNAVAILABLE" | "DENIED";
      reasonCode:
        | "NOT_PDF"
        | "ENCRYPTED"
        | "CORRUPT"
        | "TOO_LARGE"
        | "TOO_MANY_PAGES"
        | "TIMEOUT"
        | "NO_EXTRACTABLE_TEXT"
        | "SCANNED_NO_TEXT"
        | "ACTIVE_CONTENT_BLOCKED"
        | "PROCESSING_ERROR";
      message: string;
      limits: string[];
    };

export const DEFAULT_PDF_READ_LIMITS: PdfReadLimits = {
  maxBytes: 8_000_000,
  maxPages: 80,
  maxTextChars: 200_000,
  timeoutMs: 15_000,
};

export function resolvePdfReadLimits(
  env: NodeJS.ProcessEnv = process.env,
): PdfReadLimits {
  const num = (key: string, fallback: number) => {
    const n = Number(env[key] || "");
    return Number.isFinite(n) && n > 0 ? n : fallback;
  };
  return {
    maxBytes: num("SFIA_PDF_MAX_BYTES", DEFAULT_PDF_READ_LIMITS.maxBytes),
    maxPages: num("SFIA_PDF_MAX_PAGES", DEFAULT_PDF_READ_LIMITS.maxPages),
    maxTextChars: num(
      "SFIA_PDF_MAX_TEXT_CHARS",
      DEFAULT_PDF_READ_LIMITS.maxTextChars,
    ),
    timeoutMs: num("SFIA_PDF_TIMEOUT_MS", DEFAULT_PDF_READ_LIMITS.timeoutMs),
  };
}
