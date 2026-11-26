import { describe, expect, it, beforeEach } from "vitest";
import {
  __resetWebPageSessionsForTests,
  __webPageSessionStatsForTests,
  putWebPageSession,
  readWebPageProgressive,
  readWebPdfPages,
  searchWebPageSession,
  getWebPageSession,
  getWebPageSessionByViewerToken,
  unionCoverageChars,
} from "@/domains/conversation/public-web-page-session";
import { confrontWebSources } from "@/domains/conversation/public-web-search-frontier";
import { estimateCostUsd, resolveTariffModel } from "@/domains/conversation/usage-accounting";

const SCOPE = {
  lane: "DEV",
  projectId: "proj-qual-1",
  cognitiveWorkId: "work-1",
  ownerPilotId: "pilot-1",
};

describe("ML5 progressive WEB page session", () => {
  beforeEach(() => {
    __resetWebPageSessionsForTests();
  });

  it("reads HTML progressively and searches with scoped identity", () => {
    const text = "alpha ".repeat(500) + "FINDME " + "beta ".repeat(200);
    putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/doc",
      kind: "html",
      text,
      contentFingerprint: "fp1",
      limits: ["TEST"],
      bytesObtained: Buffer.byteLength(text, "utf8"),
    });
    const first = readWebPageProgressive({
      scope: SCOPE,
      url: "https://example.com/doc",
      from: 0,
      maxChars: 200,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.coverage).toBe("PARTIAL");
    expect(first.excerpt.length).toBeLessThanOrEqual(200);
    expect(first.viewerToken).toBeTruthy();

    const found = searchWebPageSession({
      scope: SCOPE,
      url: "https://example.com/doc",
      query: "FINDME",
    });
    expect(found.ok).toBe(true);
    if (!found.ok) return;
    expect(found.hits.length).toBeGreaterThan(0);
  });

  it("refuses ambiguous anon scope and isolates works", () => {
    expect(() =>
      putWebPageSession({
        scope: {
          lane: "DEV",
          projectId: "p1",
          cognitiveWorkId: "",
        },
        url: "https://example.com/x",
        kind: "html",
        text: "x",
        contentFingerprint: "a",
        limits: [],
      }),
    ).toThrow(/SESSION_SCOPE_WORK_REQUIRED/);

    putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/shared",
      kind: "html",
      text: "secret-for-work-1",
      contentFingerprint: "a",
      limits: [],
    });
    const other = readWebPageProgressive({
      scope: { ...SCOPE, cognitiveWorkId: "work-2" },
      url: "https://example.com/shared",
      maxChars: 50,
    });
    expect(other.ok).toBe(false);
    if (!other.ok) expect(other.reason).toBe("NO_OPEN_SESSION");
  });

  it("detects content fingerprint change and resets coverage", () => {
    putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/a",
      kind: "html",
      text: "v1",
      contentFingerprint: "aaa",
      limits: [],
    });
    readWebPageProgressive({
      scope: SCOPE,
      url: "https://example.com/a",
      maxChars: 10,
    });
    const next = putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/a",
      kind: "html",
      text: "v2 changed",
      contentFingerprint: "bbb",
      limits: [],
    });
    expect(next.limits).toContain("SOURCE_MODIFIED_SINCE_PRIOR_OPEN");
    expect(next.charOffset).toBe(0);
  });

  it("rotates viewerToken on fingerprint change and revokes the old token", () => {
    const first = putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/doc.pdf",
      kind: "pdf",
      text: "page1",
      contentFingerprint: "fp-v1",
      pdfBytes: new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d]),
      limits: [],
    });
    const oldToken = first.viewerToken;
    expect(getWebPageSessionByViewerToken(oldToken)?.contentFingerprint).toBe(
      "fp-v1",
    );

    const second = putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/doc.pdf",
      kind: "pdf",
      text: "page1-revised",
      contentFingerprint: "fp-v2",
      pdfBytes: new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31]),
      limits: [],
    });
    expect(second.viewerToken).not.toBe(oldToken);
    expect(getWebPageSessionByViewerToken(oldToken)).toBeNull();
    expect(
      getWebPageSessionByViewerToken(second.viewerToken)?.contentFingerprint,
    ).toBe("fp-v2");
  });

  it("computes honest union coverage — mid-doc end is not COMPLETE", () => {
    const cov = unionCoverageChars(
      [
        { from: 100, to: 200 },
        { from: 150, to: 300 },
      ],
      300,
    );
    expect(cov.coveredChars).toBe(200);
    expect(cov.coverage).toBe("PARTIAL");

    const full = unionCoverageChars([{ from: 0, to: 100 }], 100);
    expect(full.coverage).toBe("COMPLETE");
  });

  it("reads PDF pages beyond initial range without claiming absence from first pages", async () => {
    const pages = Array.from({ length: 8 }, (_, i) => ({
      pageNumber: i + 1,
      text:
        i === 5
          ? "DETERMINANT_TOKEN_PAGE_SIX unique marker"
          : `filler page ${i + 1}`,
    }));
    const session = putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/doc.pdf",
      kind: "pdf",
      text: pages.slice(0, 5).map((p) => p.text).join("\n"),
      pages: pages.slice(0, 5),
      pageCount: 8,
      contentFingerprint: "pdf-fp",
      limits: ["INITIAL_PAGES_1_5"],
    });
    // Simulate full preload remaining pages (SCRIPTED progressive store).
    session.pages = pages;
    session.extractedPages = [1, 2, 3, 4, 5];
    session.consultedPages = [1, 2, 3, 4, 5];

    const early = searchWebPageSession({
      scope: SCOPE,
      url: "https://example.com/doc.pdf",
      query: "DETERMINANT_TOKEN_PAGE_SIX",
    });
    expect(early.ok).toBe(true);
    if (!early.ok) return;
    // Only extracted pages searched — honesty flags when not found in extracted set.
    expect(early.hits.length).toBe(0);
    expect(early.limits).toContain("SEARCH_LIMITED_TO_EXTRACTED_PAGES");
    expect(early.limits.some((l) => l.includes("NOT_FULLY") || l.includes("EXTRACTED"))).toBe(
      true,
    );

    const later = await readWebPdfPages({
      scope: SCOPE,
      url: "https://example.com/doc.pdf",
      pageFrom: 6,
      pageTo: 6,
      searchQuery: "DETERMINANT_TOKEN_PAGE_SIX",
    });
    expect(later.ok).toBe(true);
    if (!later.ok) return;
    expect(later.pages[0]?.pageNumber).toBe(6);
    expect(later.searchHits?.length).toBeGreaterThan(0);
    expect(later.coverage).toBe("PARTIAL");
    expect(later.limits).toContain("NOT_FULLY_CONSULTED");
    expect(getWebPageSessionByViewerToken(later.viewerToken)?.pdfBytes).toBeUndefined();
  });

  it("enrich footprint counts retained pdf bytes and prior pages", () => {
    const pdfBytes = new Uint8Array(24_000);
    const firstPages = [
      { pageNumber: 1, text: "alpha ".repeat(400) },
      { pageNumber: 2, text: "beta ".repeat(400) },
    ];
    putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/enrich-footprint.pdf",
      kind: "pdf",
      text: firstPages.map((p) => p.text).join("\n"),
      pages: firstPages,
      pageCount: 4,
      contentFingerprint: "fp-enrich",
      pdfBytes,
      limits: ["INITIAL"],
    });

    const enrichedPages = [
      ...firstPages,
      { pageNumber: 3, text: "gamma ".repeat(600) },
    ];
    putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/enrich-footprint.pdf",
      kind: "pdf",
      text: enrichedPages.map((p) => p.text).join("\n"),
      pages: enrichedPages,
      pageCount: 4,
      contentFingerprint: "fp-enrich",
      limits: ["ENRICHED"],
    });

    const stats = __webPageSessionStatsForTests();
    expect(stats.count).toBe(1);
    expect(stats.memoryBytes).toBeGreaterThanOrEqual(
      pdfBytes.byteLength +
        enrichedPages.reduce(
          (n, p) => n + Buffer.byteLength(p.text, "utf8"),
          0,
        ),
    );

    process.env.SFIA_WEB_PAGE_SESSION_MAX_BYTES = String(
      pdfBytes.byteLength + 4_000,
    );
    putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/anchor.pdf",
      kind: "pdf",
      text: "anchor",
      contentFingerprint: "anchor",
      pdfBytes: new Uint8Array(8_000),
      limits: [],
    });
    expect(
      getWebPageSession(SCOPE, "https://example.com/enrich-footprint.pdf"),
    ).toBeNull();
    expect(
      getWebPageSession(SCOPE, "https://example.com/anchor.pdf")?.pdfBytes
        ?.byteLength,
    ).toBe(8_000);
    delete process.env.SFIA_WEB_PAGE_SESSION_MAX_BYTES;
  });

  it("enrich text-only update keeps prior pages in eviction sizing", () => {
    const pdfBytes = new Uint8Array(12_000);
    const pages = [{ pageNumber: 1, text: "hold ".repeat(800) }];
    const url = "https://example.com/text-only-enrich.pdf";
    putWebPageSession({
      scope: SCOPE,
      url,
      kind: "pdf",
      text: pages[0]!.text,
      pages,
      pageCount: 1,
      contentFingerprint: "fp-text-enrich",
      pdfBytes,
      limits: [],
    });
    putWebPageSession({
      scope: SCOPE,
      url,
      kind: "pdf",
      text: `${pages[0]!.text}\nconsulted overlay`,
      contentFingerprint: "fp-text-enrich",
      limits: ["READ_PROGRESS"],
    });
    const stats = __webPageSessionStatsForTests();
    expect(stats.memoryBytes).toBeGreaterThanOrEqual(
      pdfBytes.byteLength + Buffer.byteLength(pages[0]!.text, "utf8"),
    );
    expect(getWebPageSession(SCOPE, url)?.pages?.length).toBe(1);
    expect(getWebPageSession(SCOPE, url)?.pdfBytes?.byteLength).toBe(
      pdfBytes.byteLength,
    );
  });

  it("enrich without new pdfBytes retains server-side bytes", () => {
    const pdfBytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31]);
    const url = "https://example.com/retain-bytes.pdf";
    const first = putWebPageSession({
      scope: SCOPE,
      url,
      kind: "pdf",
      text: "page one",
      pages: [{ pageNumber: 1, text: "page one" }],
      pageCount: 2,
      contentFingerprint: "fp-retain",
      pdfBytes,
      limits: [],
    });
    const second = putWebPageSession({
      scope: SCOPE,
      url,
      kind: "pdf",
      text: "page one\npage two expanded",
      pages: [
        { pageNumber: 1, text: "page one" },
        { pageNumber: 2, text: "page two expanded" },
      ],
      pageCount: 2,
      contentFingerprint: "fp-retain",
      limits: ["TEXT_ENRICHED"],
    });
    expect(second.viewerToken).toBe(first.viewerToken);
    expect(second.pdfBytes?.byteLength).toBe(pdfBytes.byteLength);
    expect(second.pages?.map((p) => p.pageNumber)).toEqual([1, 2]);
  });

  it("evicts oldest sessions when session cap is exceeded", () => {
    process.env.SFIA_WEB_PAGE_SESSION_MAX = "2";
    process.env.SFIA_WEB_PAGE_SESSION_MAX_BYTES = "200000";
    const big = new Uint8Array(50);
    putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/a.pdf",
      kind: "pdf",
      text: "a",
      contentFingerprint: "a",
      pdfBytes: big,
      limits: [],
    });
    putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/b.pdf",
      kind: "pdf",
      text: "b",
      contentFingerprint: "b",
      pdfBytes: big,
      limits: [],
    });
    expect(__webPageSessionStatsForTests().count).toBe(2);
    putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/c.pdf",
      kind: "pdf",
      text: "c",
      contentFingerprint: "c",
      pdfBytes: big,
      limits: [],
    });
    const stats = __webPageSessionStatsForTests();
    expect(stats.count).toBeLessThanOrEqual(2);
    delete process.env.SFIA_WEB_PAGE_SESSION_MAX;
    delete process.env.SFIA_WEB_PAGE_SESSION_MAX_BYTES;
  });

  it("expires sessions and refuses expired reads", () => {
    process.env.SFIA_WEB_PAGE_SESSION_TTL_MS = "1";
    putWebPageSession({
      scope: SCOPE,
      url: "https://example.com/ttl",
      kind: "html",
      text: "ephemeral",
      contentFingerprint: "ttl",
      limits: [],
    });
    const start = Date.now();
    while (Date.now() - start < 5) {
      /* spin */
    }
    const read = readWebPageProgressive({
      scope: SCOPE,
      url: "https://example.com/ttl",
      maxChars: 10,
    });
    delete process.env.SFIA_WEB_PAGE_SESSION_TTL_MS;
    expect(read.ok).toBe(false);
    if (!read.ok) {
      expect(["SESSION_EXPIRED", "NO_OPEN_SESSION"]).toContain(read.reason);
    }
  });
});

describe("ML5 confrontWebSources authority", () => {
  it("does not assert lexical contradictions as authority", () => {
    const r = confrontWebSources([
      {
        url: "https://a.example/x",
        title: "deprecated 2020",
        snippet: "must not use",
      },
      {
        url: "https://b.example/y",
        title: "recommended 2024",
        snippet: "must use",
      },
    ]);
    expect(r.judgmentAuthority).toBe("NORA");
    expect(r.contradictions).toEqual([]);
    expect(r.notes).toContain("NORA_JUDGES_SEMANTICS");
  });
});

describe("ML5 Luna tariff when modelApplied=UNVERIFIED", () => {
  it("falls back to modelRequested with PARTIAL", () => {
    const usage = { inputTokens: 1000, outputTokens: 100, cachedInputTokens: null };
    const { model, modelAppliedUnverified } = resolveTariffModel({
      modelApplied: "UNVERIFIED",
      modelRequested: "gpt-6-luna",
    });
    expect(model).toBe("gpt-6-luna");
    expect(modelAppliedUnverified).toBe(true);
    const cost = estimateCostUsd(usage, model, { modelAppliedUnverified });
    expect(cost.estimatedCostUsd).not.toBeNull();
    expect(cost.costCoverage).toBe("PARTIAL");
    expect(cost.limits).toContain("MODEL_APPLIED_UNVERIFIED");
  });
});
