import { afterEach, describe, expect, it } from "vitest";
import {
  __getPublicWebOutboundLogForTests,
  __resetPublicWebOutboundLogForTests,
  __parseLiveWebItemsForTests,
  assertOutboundHasNoPrivateLeak,
  assertPublicHttpsUrl,
  canUsePublicWebFrontier,
  confrontWebSources,
  executePublicWebOpenPage,
  executePublicWebSearch,
} from "@/domains/conversation/public-web-search-frontier";
import type { CognitivePolicy } from "@/domains/conversation/cognitive-policy";

const basePolicy = {
  profile: "analyse",
  profileType: "OPERATIONAL",
} as unknown as CognitivePolicy;

function env(partial: Record<string, string>): NodeJS.ProcessEnv {
  // Default LIVE off in unit tests unless the case opts in — avoid shell pollution.
  return { ...process.env, SFIA_WEB_SEARCH_LIVE: "0", ...partial };
}

afterEach(() => {
  __resetPublicWebOutboundLogForTests();
});

describe("ML5 B1 public web frontier", () => {
  it("is off by default", () => {
    expect(canUsePublicWebFrontier(basePolicy, env({ SFIA_WEB_SEARCH_ENABLED: "0" }))).toBe(
      false,
    );
  });

  it("blocks secretish queries and records no useful outbound", async () => {
    const r = await executePublicWebSearch({
      explicitlyAuthorizedExactQuery: "api_key=sk-abcdefghijklmnopqrstuvwxyz123456",
      turnAuthorizedExactQueries: ["api_key=sk-abcdefghijklmnopqrstuvwxyz123456"],
      env: env({ SFIA_WEB_SEARCH_ENABLED: "1" }),
    });
    expect(r.status).toBe("DENIED");
    expect(__getPublicWebOutboundLogForTests()).toHaveLength(0);
  });

  it("SCRIPTED search records only authorized publicTopic query", async () => {
    const secret = "super-private-doc-xyz";
    const exact = "RFC 9110 HTTP semantics";
    const r = await executePublicWebSearch({
      explicitlyAuthorizedExactQuery: exact,
      turnAuthorizedExactQueries: [exact],
      privateContextMarkers: [secret, "/Users/morris/secret"],
      env: env({ SFIA_WEB_SEARCH_ENABLED: "1" }),
    });
    expect(r.status).toBe("AVAILABLE");
    expect(r.mode).toBe("SCRIPTED");
    const log = __getPublicWebOutboundLogForTests();
    expect(log).toHaveLength(1);
    expect(log[0]!.outboundFields.q).toMatch(/RFC 9110/);
    const leak = assertOutboundHasNoPrivateLeak(log[0]!.outboundFields, [
      secret,
      "/Users/morris/secret",
    ]);
    expect(leak.ok).toBe(true);
  });

  it("refuses private path leakage in publicTopic", async () => {
    const r = await executePublicWebSearch({
      publicTopic: "see /Users/morris/Projects/private/notes.md for details",
      // free-form without registry → denied (C22)
      env: env({ SFIA_WEB_SEARCH_ENABLED: "1" }),
    });
    if (r.status === "AVAILABLE") {
      const log = __getPublicWebOutboundLogForTests();
      expect(JSON.stringify(log)).not.toMatch(/\/Users\/morris/);
    } else {
      expect(r.limits.length).toBeGreaterThan(0);
    }
  });

  it(
    "SCRIPTED open_page marks PAGE_OPENED; LIVE open is no longer Morris-gate-denied",
    async () => {
      const opened = await executePublicWebOpenPage({
        url: "https://example.invalid/doc",
        env: env({ SFIA_WEB_SEARCH_ENABLED: "1" }),
        allowedUrls: ["https://example.invalid/doc"],
      });
      expect(opened.coverage).toBe("PAGE_OPENED");
      // LIVE open attempts a real fetch (fail-closed on DNS/timeout) — not MORRIS_GATE stub.
      process.env.SFIA_WEB_FETCH_TIMEOUT_MS = "2000";
      const liveOpen = await executePublicWebOpenPage({
        url: "https://example.invalid/doc",
        env: env({ SFIA_WEB_SEARCH_ENABLED: "1", SFIA_WEB_SEARCH_LIVE: "1" }),
        allowedUrls: ["https://example.invalid/doc"],
      });
      expect(liveOpen.limits.some((l) => /MORRIS_GATE/.test(l))).toBe(false);
      expect(["ERROR", "DENIED", "AVAILABLE"]).toContain(liveOpen.status);
    },
    12_000,
  );

  it("assertPublicHttpsUrl rejects private and credentialed destinations", () => {
    expect(assertPublicHttpsUrl("http://example.com").ok).toBe(false);
    expect(assertPublicHttpsUrl("https://127.0.0.1/x").ok).toBe(false);
    expect(assertPublicHttpsUrl("https://10.0.0.5/x").ok).toBe(false);
    expect(assertPublicHttpsUrl("https://192.168.1.1/x").ok).toBe(false);
    expect(assertPublicHttpsUrl("https://user:pass@example.com/x").ok).toBe(false);
    expect(assertPublicHttpsUrl("https://example.invalid/doc").ok).toBe(true);
  });

  it("open_page denies private IP even over https", async () => {
    const r = await executePublicWebOpenPage({
      url: "https://10.1.2.3/secret",
      env: env({ SFIA_WEB_SEARCH_ENABLED: "1" }),
      explicitlyAuthorized: true,
    });
    expect(r.status).toBe("DENIED");
    expect(r.limits).toContain("URL_PRIVATE_IP");
    expect(__getPublicWebOutboundLogForTests()).toHaveLength(0);
  });

  it("C20 open_page refuses URL outside authorized discovery before egress", async () => {
    const r = await executePublicWebOpenPage({
      url: "https://example.invalid/not-discovered",
      env: env({ SFIA_WEB_SEARCH_ENABLED: "1" }),
      allowedUrls: ["https://example.invalid/other"],
    });
    expect(r.status).toBe("DENIED");
    expect(r.limits).toContain("URL_NOT_IN_AUTHORIZED_DISCOVERY");
    expect(__getPublicWebOutboundLogForTests()).toHaveLength(0);
  });

  it("parses LIVE single-object, array, and hosted navigation shapes", () => {
    const one = __parseLiveWebItemsForTests(
      '{"url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map","title":"map","snippet":"creates a new array"}',
    );
    expect(one).toHaveLength(1);
    expect(one[0]!.url).toContain("developer.mozilla.org");
    const many = __parseLiveWebItemsForTests(
      '[{"url":"https://example.invalid/a","title":"A","snippet":"a"},{"url":"https://example.invalid/b","title":"B","snippet":"b"}]',
    );
    expect(many).toHaveLength(2);
    const nav = __parseLiveWebItemsForTests(
      '{"navigation":[["MDN map","developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"]],"needs_search":true}',
    );
    expect(nav).toHaveLength(1);
    expect(nav[0]!.url).toMatch(/^https:\/\/developer\.mozilla\.org\//);
  });

  it("confrontWebSources leaves semantic judgment to Nora", () => {
    const c = confrontWebSources([
      { url: "https://a.example/x", title: "Spec 2019", snippet: "deprecated in practice" },
      { url: "https://b.example/y", title: "Guide 2024", snippet: "recommended current approach" },
    ]);
    expect(c.judgmentAuthority).toBe("NORA");
    expect(c.contradictions).toEqual([]);
    expect(c.notes).toContain("NORA_JUDGES_SEMANTICS");
    expect(c.notes.some((n) => n.startsWith("YEAR_TOKENS_DIVERGE_HINT:"))).toBe(true);
  });

  it("never treats ISOLATION_PROVEN env as attaching hosted tool", async () => {
    const { canAttachWebSearchTool, buildPublicWebSearchTool } = await import(
      "@/domains/conversation/web-search-tools"
    );
    expect(
      buildPublicWebSearchTool(
        env({
          SFIA_WEB_SEARCH_ENABLED: "1",
          SFIA_WEB_SEARCH_ISOLATION_PROVEN: "0",
        }),
      ),
    ).toBeNull();
    expect(
      canAttachWebSearchTool(
        basePolicy,
        env({
          SFIA_WEB_SEARCH_ENABLED: "1",
          SFIA_WEB_SEARCH_ISOLATION_PROVEN: "0",
        }),
      ),
    ).toBe(false);
  });
});
