/**
 * Server-side PDF text extraction (pdfjs-dist).
 * Input bytes must already be authorized by the owning domain (B1/D9/D4).
 * Never call from the PDF viewer API — authorization and bytes delivery are separate.
 * No network I/O — disable worker and external font fetches.
 */

import { createHash } from "node:crypto";
import {
  type PdfPageText,
  type PdfReadResult,
  type PdfSearchHit,
  type PdfSourceIdentity,
  resolvePdfReadLimits,
} from "./pdf-read-contract";

function looksLikePdf(bytes: Uint8Array): boolean {
  if (bytes.length < 5) return false;
  // %PDF-
  return (
    bytes[0] === 0x25 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x44 &&
    bytes[3] === 0x46 &&
    bytes[4] === 0x2d
  );
}

export type ExtractPdfInput = {
  bytes: Uint8Array;
  identity: Omit<PdfSourceIdentity, "byteLength"> & { byteLength?: number };
  /** 1-based inclusive page range; omit = metadata + first pages until budget. */
  pageFrom?: number;
  pageTo?: number;
  /** Optional case-insensitive search after extraction. */
  searchQuery?: string | null;
  maxSearchHits?: number;
};

export async function extractPdfText(
  input: ExtractPdfInput,
): Promise<PdfReadResult> {
  const limits = resolvePdfReadLimits();
  const byteLength = input.bytes.byteLength;
  const identity: PdfSourceIdentity = {
    ...input.identity,
    byteLength,
  };

  if (byteLength > limits.maxBytes) {
    return {
      ok: false,
      identity,
      coverage: "UNAVAILABLE",
      reasonCode: "TOO_LARGE",
      message: `PDF exceeds max bytes (${byteLength} > ${limits.maxBytes})`,
      limits: [`MAX_BYTES_${limits.maxBytes}`],
    };
  }
  if (!looksLikePdf(input.bytes)) {
    return {
      ok: false,
      identity,
      coverage: "UNAVAILABLE",
      reasonCode: "NOT_PDF",
      message: "Bytes do not start with a PDF header",
      limits: [],
    };
  }

  const fingerprint = createHash("sha256")
    .update(input.bytes)
    .digest("hex")
    .slice(0, 32);

  let pdfjs: typeof import("pdfjs-dist/legacy/build/pdf.mjs");
  try {
    pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  } catch {
    return {
      ok: false,
      identity,
      coverage: "UNAVAILABLE",
      reasonCode: "PROCESSING_ERROR",
      message: "pdfjs-dist unavailable in this runtime",
      limits: ["PDFJS_IMPORT_FAILED"],
    };
  }

  // Copy — pdf.js may transfer/detach the caller's ArrayBuffer.
  const data = new Uint8Array(input.bytes);
  const loadingTask = pdfjs.getDocument({
    data,
    isEvalSupported: false,
    useSystemFonts: true,
    useWorkerFetch: false,
    // Never fetch remote fonts / CMaps over the network from document.
    disableFontFace: true,
    stopAtErrors: false,
  });

  const timeoutMs = limits.timeoutMs;
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    try {
      void loadingTask.destroy();
    } catch {
      /* best effort */
    }
  }, timeoutMs);

  try {
    const doc = await loadingTask.promise;
    if (timedOut) {
      return {
        ok: false,
        identity,
        coverage: "UNAVAILABLE",
        reasonCode: "TIMEOUT",
        message: "PDF processing timed out",
        limits: [`TIMEOUT_MS_${timeoutMs}`],
      };
    }

    const pageCount = doc.numPages;
    if (pageCount > limits.maxPages) {
      await doc.destroy();
      return {
        ok: false,
        identity,
        coverage: "UNAVAILABLE",
        reasonCode: "TOO_MANY_PAGES",
        message: `PDF has ${pageCount} pages (max ${limits.maxPages})`,
        limits: [`MAX_PAGES_${limits.maxPages}`],
      };
    }

    const from = Math.max(1, input.pageFrom ?? 1);
    const to = Math.min(pageCount, input.pageTo ?? Math.min(pageCount, from + 4));
    const pages: PdfPageText[] = [];
    let textChars = 0;
    const limitCodes: string[] = [];

    for (let p = from; p <= to; p++) {
      if (timedOut) break;
      if (textChars >= limits.maxTextChars) {
        limitCodes.push("TEXT_BUDGET_EXHAUSTED");
        break;
      }
      const page = await doc.getPage(p);
      const content = await page.getTextContent();
      const parts: string[] = [];
      for (const item of content.items) {
        if (item && typeof item === "object" && "str" in item) {
          const s = String((item as { str?: string }).str ?? "");
          if (s) parts.push(s);
        }
      }
      let text = parts.join(" ").replace(/\s+/g, " ").trim();
      const remaining = limits.maxTextChars - textChars;
      if (text.length > remaining) {
        text = text.slice(0, remaining);
        limitCodes.push("TEXT_TRUNCATED");
      }
      textChars += text.length;
      pages.push({ pageNumber: p, text, charCount: text.length });
      page.cleanup();
    }

    await doc.destroy();

    if (pages.length === 0) {
      return {
        ok: false,
        identity,
        coverage: "UNAVAILABLE",
        reasonCode: "NO_EXTRACTABLE_TEXT",
        message: "No extractable text in requested page range",
        limits: limitCodes,
      };
    }

    const allEmpty = pages.every((p) => p.charCount === 0);
    if (allEmpty) {
      return {
        ok: false,
        identity,
        coverage: "UNAVAILABLE",
        reasonCode: "SCANNED_NO_TEXT",
        message:
          "Pages contain no extractable text (possible scan) — OCR out of scope",
        limits: [...limitCodes, "OCR_OUT_OF_SCOPE"],
      };
    }

    let searchHits: PdfSearchHit[] | undefined;
    const q = (input.searchQuery ?? "").trim();
    if (q) {
      searchHits = [];
      const needle = q.toLowerCase();
      const maxHits = Math.min(20, input.maxSearchHits ?? 10);
      for (const page of pages) {
        const hay = page.text.toLowerCase();
        let idx = 0;
        while (searchHits.length < maxHits) {
          const found = hay.indexOf(needle, idx);
          if (found < 0) break;
          const start = Math.max(0, found - 40);
          const end = Math.min(page.text.length, found + q.length + 60);
          searchHits.push({
            pageNumber: page.pageNumber,
            excerpt: page.text.slice(start, end),
            matchIndex: found,
          });
          idx = found + needle.length;
        }
      }
    }

    return {
      ok: true,
      identity,
      pageCount,
      pagesAvailable: pages.map((p) => p.pageNumber),
      pages,
      searchHits,
      coverage: searchHits?.length
        ? "SEARCHED"
        : pages.length < pageCount
          ? "PARTIAL"
          : "PAGE_READ",
      textCharsExtracted: textChars,
      limits: [
        ...limitCodes,
        `PAGES_${from}_${to}`,
        `PAGE_COUNT_${pageCount}`,
      ],
      fingerprint,
    };
  } catch (e) {
    const msg = String((e as Error)?.message ?? e);
    if (/password|encrypt/i.test(msg)) {
      return {
        ok: false,
        identity,
        coverage: "UNAVAILABLE",
        reasonCode: "ENCRYPTED",
        message: "Encrypted PDF is not supported",
        limits: [],
      };
    }
    if (/Invalid PDF|corrupt|FormatError/i.test(msg)) {
      return {
        ok: false,
        identity,
        coverage: "UNAVAILABLE",
        reasonCode: "CORRUPT",
        message: "PDF appears corrupt or unreadable",
        limits: [],
      };
    }
    return {
      ok: false,
      identity,
      coverage: "UNAVAILABLE",
      reasonCode: "PROCESSING_ERROR",
      message: msg.slice(0, 200),
      limits: timedOut ? [`TIMEOUT_MS_${timeoutMs}`] : [],
    };
  } finally {
    clearTimeout(timer);
  }
}

/** Detect PDF from path or content-type claim. */
export function isPdfPathOrMime(
  pathOrUrl: string,
  contentType?: string | null,
): boolean {
  if ((contentType || "").toLowerCase().includes("application/pdf")) return true;
  return /\.pdf($|\?)/i.test(pathOrUrl);
}
