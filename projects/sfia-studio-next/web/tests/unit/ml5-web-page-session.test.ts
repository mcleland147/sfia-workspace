import { describe, expect, it, beforeEach } from "vitest";
import {
  __resetWebPageSessionsForTests,
  putWebPageSession,
  readWebPageProgressive,
  searchWebPageSession,
} from "@/domains/conversation/public-web-page-session";
import { confrontWebSources } from "@/domains/conversation/public-web-search-frontier";
import { estimateCostUsd, resolveTariffModel } from "@/domains/conversation/usage-accounting";

describe("ML5 progressive WEB page session", () => {
  beforeEach(() => {
    __resetWebPageSessionsForTests();
  });

  it("reads HTML progressively and searches", () => {
    const text = "alpha ".repeat(500) + "FINDME " + "beta ".repeat(200);
    putWebPageSession("work-1", {
      url: "https://example.com/doc",
      kind: "html",
      text,
      contentFingerprint: "fp1",
      openedAt: new Date().toISOString(),
      limits: ["TEST"],
    });
    const first = readWebPageProgressive({
      workId: "work-1",
      url: "https://example.com/doc",
      from: 0,
      maxChars: 200,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.coverage).toBe("PARTIAL");
    expect(first.excerpt.length).toBeLessThanOrEqual(200);

    const found = searchWebPageSession({
      workId: "work-1",
      url: "https://example.com/doc",
      query: "FINDME",
    });
    expect(found.ok).toBe(true);
    if (!found.ok) return;
    expect(found.hits.length).toBeGreaterThan(0);
  });

  it("detects content fingerprint change", () => {
    putWebPageSession("work-1", {
      url: "https://example.com/a",
      kind: "html",
      text: "v1",
      contentFingerprint: "aaa",
      openedAt: new Date().toISOString(),
      limits: [],
    });
    readWebPageProgressive({
      workId: "work-1",
      url: "https://example.com/a",
      maxChars: 10,
    });
    const next = putWebPageSession("work-1", {
      url: "https://example.com/a",
      kind: "html",
      text: "v2 changed",
      contentFingerprint: "bbb",
      openedAt: new Date().toISOString(),
      limits: [],
    });
    expect(next.limits).toContain("SOURCE_MODIFIED_SINCE_PRIOR_OPEN");
    expect(next.charOffset).toBe(0);
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
