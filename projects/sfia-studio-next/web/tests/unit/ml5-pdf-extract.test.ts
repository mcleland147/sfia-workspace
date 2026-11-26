import { readFileSync } from "node:fs";
import path from "node:path";
import { beforeEach, describe, expect, it } from "vitest";
import {
  __resetPdfExtractConcurrencyForTests,
  extractPdfText,
  isPdfPathOrMime,
} from "@/domains/documents/pdf-extract-server";
import {
  DEFAULT_PDF_READ_LIMITS,
  resolvePdfReadLimits,
} from "@/domains/documents/pdf-read-contract";

function fixturePdfBytes(): Uint8Array {
  return new Uint8Array(
    readFileSync(
      path.resolve(__dirname, "../fixtures/ml5-sample.pdf"),
    ),
  );
}

describe("ML5 PDF extract server", () => {
  beforeEach(() => {
    __resetPdfExtractConcurrencyForTests();
  });

  it("detects pdf path and mime", () => {
    expect(isPdfPathOrMime("docs/a.pdf")).toBe(true);
    expect(isPdfPathOrMime("https://ex.invalid/x.PDF?x=1")).toBe(true);
    expect(isPdfPathOrMime("readme.md")).toBe(false);
    expect(isPdfPathOrMime("x", "application/pdf")).toBe(true);
  });

  it("exposes size/pages/chars/time/concurrency/decompress/render limits", () => {
    const lim = resolvePdfReadLimits({});
    expect(lim.maxBytes).toBe(DEFAULT_PDF_READ_LIMITS.maxBytes);
    expect(lim.maxPages).toBe(DEFAULT_PDF_READ_LIMITS.maxPages);
    expect(lim.maxTextChars).toBe(DEFAULT_PDF_READ_LIMITS.maxTextChars);
    expect(lim.timeoutMs).toBe(DEFAULT_PDF_READ_LIMITS.timeoutMs);
    expect(lim.maxConcurrency).toBe(DEFAULT_PDF_READ_LIMITS.maxConcurrency);
    expect(lim.maxDecompressBytes).toBe(
      DEFAULT_PDF_READ_LIMITS.maxDecompressBytes,
    );
    expect(lim.maxRenderPixels).toBe(DEFAULT_PDF_READ_LIMITS.maxRenderPixels);
  });

  it("extracts text from the multi-page fixture PDF", async () => {
    const bytes = fixturePdfBytes();
    const result = await extractPdfText({
      bytes,
      identity: {
        provenance: "FIXTURE",
        sourceRef: "fixture:ml5-sample.pdf",
        versionToken: null,
        mimeClaimed: "application/pdf",
      },
      searchQuery: "contradiction",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.pageCount).toBe(3);
    expect(result.pages[0]?.text.toLowerCase()).toContain("inventory");
    expect(result.searchHits?.some((h) => h.pageNumber === 2)).toBe(true);
    expect(result.fingerprint).toBeTruthy();
  });

  it("rejects non-pdf bytes", async () => {
    const result = await extractPdfText({
      bytes: new TextEncoder().encode("not a pdf"),
      identity: {
        provenance: "FIXTURE",
        sourceRef: "fixture:bad",
        versionToken: null,
        mimeClaimed: null,
      },
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.reasonCode).toBe("NOT_PDF");
  });

  it("rejects oversized payloads", async () => {
    const prev = process.env.SFIA_PDF_MAX_BYTES;
    process.env.SFIA_PDF_MAX_BYTES = "16";
    try {
      const result = await extractPdfText({
        bytes: fixturePdfBytes(),
        identity: {
          provenance: "FIXTURE",
          sourceRef: "fixture:big",
          versionToken: null,
          mimeClaimed: "application/pdf",
        },
      });
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.reasonCode).toBe("TOO_LARGE");
    } finally {
      if (prev === undefined) delete process.env.SFIA_PDF_MAX_BYTES;
      else process.env.SFIA_PDF_MAX_BYTES = prev;
    }
  });

  it("blocks active content markers", async () => {
    const header = "%PDF-1.4\n";
    const body = "/JavaScript (app.alert('x'))\n/OpenAction << /S /JavaScript >>\n";
    const bytes = new TextEncoder().encode(header + body);
    const result = await extractPdfText({
      bytes,
      identity: {
        provenance: "FIXTURE",
        sourceRef: "fixture:js",
        versionToken: null,
        mimeClaimed: "application/pdf",
      },
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.reasonCode).toBe("ACTIVE_CONTENT_BLOCKED");
  });

  it("honours abort signal (cancel)", async () => {
    const ac = new AbortController();
    ac.abort();
    const result = await extractPdfText({
      bytes: fixturePdfBytes(),
      identity: {
        provenance: "FIXTURE",
        sourceRef: "fixture:cancel",
        versionToken: null,
        mimeClaimed: "application/pdf",
      },
      signal: ac.signal,
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.reasonCode).toBe("CANCELLED");
  });

  it("refuses when decompress budget is tiny", async () => {
    const prev = process.env.SFIA_PDF_MAX_DECOMPRESS_BYTES;
    process.env.SFIA_PDF_MAX_DECOMPRESS_BYTES = "8";
    try {
      const result = await extractPdfText({
        bytes: fixturePdfBytes(),
        identity: {
          provenance: "FIXTURE",
          sourceRef: "fixture:inflate",
          versionToken: null,
          mimeClaimed: "application/pdf",
        },
      });
      expect(result.ok).toBe(false);
      if (!result.ok) expect(result.reasonCode).toBe("DECOMPRESS_BUDGET_EXCEEDED");
    } finally {
      if (prev === undefined) delete process.env.SFIA_PDF_MAX_DECOMPRESS_BYTES;
      else process.env.SFIA_PDF_MAX_DECOMPRESS_BYTES = prev;
    }
  });
});
