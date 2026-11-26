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
  /** Cap concurrent extractPdfText calls process-wide. */
  maxConcurrency: number;
  /**
   * Soft ceiling on pdf.js internal stream / image buffers we are willing to
   * admit. Exceeding binary maxBytes already blocks; this documents the
   * decompress budget used for fail-closed refusal when known.
   */
  maxDecompressBytes: number;
  /** Max canvas width×height product for in-app render (PdfViewer). */
  maxRenderPixels: number;
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
        | "CONCURRENCY_LIMIT"
        | "CANCELLED"
        | "RENDER_DIMS_EXCEEDED"
        | "DECOMPRESS_BUDGET_EXCEEDED"
        | "PROCESSING_ERROR";
      message: string;
      limits: string[];
    };

export const DEFAULT_PDF_READ_LIMITS: PdfReadLimits = {
  maxBytes: 8_000_000,
  maxPages: 80,
  maxTextChars: 200_000,
  timeoutMs: 15_000,
  maxConcurrency: 2,
  /** 4× compressed budget — beyond this we refuse rather than guess RSS. */
  maxDecompressBytes: 32_000_000,
  /** ~8MP — blocks pathological zoom/page sizes in PdfViewer. */
  maxRenderPixels: 8_000_000,
};

/**
 * PDF robustness qualification (Sequence D / D4):
 * - size/pages/chars/time: enforced in extractPdfText (proven by unit tests).
 * - concurrency: process-wide semaphore in extractPdfText.
 * - cancel: AbortSignal supported; destroys loadingTask.
 * - render dims: PdfViewer refuses viewport product > maxRenderPixels.
 * - decompress/memory: pdfjs does not expose a reliable RSS oracle under this
 *   mandate — we refuse when known content length / inflate hints exceed
 *   maxDecompressBytes, and isolate residual RSS as B-reserve
 *   `R-PDF-RSS-ORACLE` (timeout ≠ memory proof).
 */

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
    maxConcurrency: num(
      "SFIA_PDF_MAX_CONCURRENCY",
      DEFAULT_PDF_READ_LIMITS.maxConcurrency,
    ),
    maxDecompressBytes: num(
      "SFIA_PDF_MAX_DECOMPRESS_BYTES",
      DEFAULT_PDF_READ_LIMITS.maxDecompressBytes,
    ),
    maxRenderPixels: num(
      "SFIA_PDF_MAX_RENDER_PIXELS",
      DEFAULT_PDF_READ_LIMITS.maxRenderPixels,
    ),
  };
}
