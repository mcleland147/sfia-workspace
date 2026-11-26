import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { extractPdfText, isPdfPathOrMime } from "@/domains/documents/pdf-extract-server";

function fixturePdfBytes(): Uint8Array {
  return new Uint8Array(
    readFileSync(
      path.resolve(__dirname, "../fixtures/ml5-sample.pdf"),
    ),
  );
}

describe("ML5 PDF extract server", () => {
  it("detects pdf path and mime", () => {
    expect(isPdfPathOrMime("docs/a.pdf")).toBe(true);
    expect(isPdfPathOrMime("https://ex.invalid/x.PDF?x=1")).toBe(true);
    expect(isPdfPathOrMime("readme.md")).toBe(false);
    expect(isPdfPathOrMime("x", "application/pdf")).toBe(true);
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
});
