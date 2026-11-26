import { readFileSync } from "node:fs";
import path from "node:path";
import { beforeEach, describe, expect, it } from "vitest";
import {
  __resetWebPageSessionsForTests,
  putWebPageSession,
  readWebPdfPages,
  searchWebPageSession,
} from "@/domains/conversation/public-web-page-session";
import { extractPdfText } from "@/domains/documents/pdf-extract-server";
import {
  __resetPublicWebOutboundLogForTests,
  executePublicWebOpenPage,
} from "@/domains/conversation/public-web-search-frontier";

const SCOPE = {
  lane: "DEV",
  projectId: "proj-pdf-prog",
  cognitiveWorkId: "work-pdf-prog",
  ownerPilotId: "pilot-pdf",
};

const FIXTURE = path.resolve(__dirname, "../fixtures/ml5-progressive-8p.pdf");

describe("ML5 progressive PDF beyond initial page range", () => {
  beforeEach(() => {
    __resetWebPageSessionsForTests();
    __resetPublicWebOutboundLogForTests();
    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_WEB_SEARCH_ENABLED = "1";
    process.env.SFIA_WEB_SEARCH_LIVE = "0";
  });

  it("fixture has 8 pages with determinant on page 6", async () => {
    const bytes = new Uint8Array(readFileSync(FIXTURE));
    const full = await extractPdfText({
      bytes,
      identity: {
        provenance: "FIXTURE",
        sourceRef: "fixture:ml5-progressive-8p.pdf",
        versionToken: null,
        mimeClaimed: "application/pdf",
      },
      pageFrom: 1,
      pageTo: 8,
      searchQuery: "DETERMINANT_TOKEN_PAGE_SIX",
    });
    expect(full.ok).toBe(true);
    if (!full.ok) return;
    expect(full.pageCount).toBe(8);
    expect(full.searchHits?.some((h) => h.pageNumber === 6)).toBe(true);
  });

  it("SCRIPTED open returns only first pages; progressive read finds page 6", async () => {
    const url = "https://example.com/docs/ml5-progressive-8p.pdf";
    const opened = await executePublicWebOpenPage({
      url,
      allowedUrls: [url],
      cognitiveWorkId: SCOPE.cognitiveWorkId,
      projectId: SCOPE.projectId,
      ownerPilotId: SCOPE.ownerPilotId,
      env: {
        STUDIO_LANE: "DEV",
        SFIA_WEB_SEARCH_ENABLED: "1",
        SFIA_WEB_SEARCH_LIVE: "0",
      },
    });
    expect(opened.status).toBe("AVAILABLE");
    expect(opened.contentKind).toBe("pdf");
    expect(opened.pageCount).toBe(8);
    expect(opened.pagesAvailable?.every((p) => p <= 5)).toBe(true);
    expect(opened.viewerToken).toBeTruthy();
    expect(
      JSON.stringify(opened).toLowerCase().includes("pdfbase64") ||
        JSON.stringify(opened).includes("JVBERi0"),
    ).toBe(false);

    const early = searchWebPageSession({
      scope: SCOPE,
      url,
      query: "SECRET_MARKER_P6",
    });
    expect(early.ok).toBe(true);
    if (!early.ok) return;
    expect(early.hits.length).toBe(0);
    expect(early.limits).toContain("ABSENCE_NOT_PROVEN_FOR_UNEXTRACTED_PAGES");

    const later = await readWebPdfPages({
      scope: SCOPE,
      url,
      pageFrom: 6,
      pageTo: 6,
      searchQuery: "SECRET_MARKER_P6",
    });
    expect(later.ok).toBe(true);
    if (!later.ok) return;
    expect(later.pages[0]?.pageNumber).toBe(6);
    expect(later.searchHits?.length).toBeGreaterThan(0);
    expect(later.coverage).toBe("PARTIAL");
  });

  it("LIVE-style session with real bytes reads pages 6+ without Nora base64", async () => {
    // Fresh copy — extractPdfText/pdf.js may detach the ArrayBuffer.
    const fileBytes = new Uint8Array(readFileSync(FIXTURE));
    const forExtract = new Uint8Array(fileBytes);
    const forSession = new Uint8Array(fileBytes);
    const initial = await extractPdfText({
      bytes: forExtract,
      identity: {
        provenance: "WEB",
        sourceRef: "https://example.com/live.pdf",
        versionToken: "fp",
        mimeClaimed: "application/pdf",
      },
      pageFrom: 1,
      pageTo: 5,
    });
    expect(initial.ok).toBe(true);
    if (!initial.ok) return;
    putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/live.pdf",
      kind: "pdf",
      text: initial.pages.map((p) => p.text).join("\n"),
      pages: initial.pages,
      pageCount: initial.pageCount,
      contentFingerprint: "live-fp",
      limits: ["WEB_LIVE_PDF"],
      bytesObtained: forSession.byteLength,
      pdfBytes: forSession,
    });
    const page6 = await readWebPdfPages({
      scope: SCOPE,
      url: "https://example.com/live.pdf",
      pageFrom: 6,
      pageTo: 7,
      searchQuery: "DETERMINANT_TOKEN_PAGE_SIX",
    });
    expect(page6.ok).toBe(true);
    if (!page6.ok) return;
    expect(page6.pages.some((p) => p.pageNumber === 6)).toBe(true);
    expect(page6.searchHits?.some((h) => h.pageNumber === 6)).toBe(true);
    // Cognitive path exposes viewerToken only — bytes stay server-side.
    expect(page6.viewerToken).toBeTruthy();
    expect(JSON.stringify(page6).includes("pdfBytes")).toBe(false);
  });
});
