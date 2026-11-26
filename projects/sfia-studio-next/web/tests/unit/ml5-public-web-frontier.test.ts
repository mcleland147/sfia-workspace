import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@/domains/conversation/web-public-query-authority", () => ({
  reverifyWebPublicQueryAuthorityAtEgress: vi.fn(),
}));
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
  vi.clearAllMocks();
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
      turnPublicTopics: { rfc9110: exact },
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

  it("refuses open_page when campaign maxDirectOpens is exhausted", async () => {
    const {
      beginCampaignEnvelope,
      runWithProviderEmissionStoreAsync,
      __resetProviderEmissionFrontierForTests,
    } = await import("@/domains/conversation/provider-emission-frontier");
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxDirectOpens: 0, required: true });
      const r = await executePublicWebOpenPage({
        url: "https://example.invalid/doc",
        env: env({ SFIA_WEB_SEARCH_ENABLED: "1" }),
        allowedUrls: ["https://example.invalid/doc"],
      });
      expect(r.status).toBe("DENIED");
      expect(r.limits).toContain("CAMPAIGN_DIRECT_OPEN_REFUSED");
    });
    __resetProviderEmissionFrontierForTests();
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

  describe("S5 — EXPLICIT_AUTHORIZED_EXACT D6 egress (non-catalog)", () => {
    const exact = "HTTP/3 site:datatracker.ietf.org";
    const enabled = env({ SFIA_WEB_SEARCH_ENABLED: "1" });
    const finops = {
      projectId: "prj_test",
      ownerPilotId: "pilot_a",
    };

    it("denies without projectId — no outbound", async () => {
      const r = await executePublicWebSearch({
        explicitlyAuthorizedExactQuery: exact,
        turnAuthorizedExactQueries: [exact],
        policyVersion: "pol_v3",
        finops: { ownerPilotId: "pilot_a" },
        env: enabled,
      });
      expect(r.status).toBe("DENIED");
      expect(r.limits).toContain("WEB_QUERY_EGRESS_D6_DENIED");
      expect(r.limits).toContain("PROJECT_REQUIRED");
      expect(__getPublicWebOutboundLogForTests()).toHaveLength(0);
    });

    it("denies without policyVersion — no outbound", async () => {
      const r = await executePublicWebSearch({
        explicitlyAuthorizedExactQuery: exact,
        turnAuthorizedExactQueries: [exact],
        finops,
        env: enabled,
      });
      expect(r.status).toBe("DENIED");
      expect(r.limits).toContain("WEB_QUERY_EGRESS_D6_DENIED");
      expect(r.limits).toContain("POLICY_VERSION_REQUIRED");
      expect(__getPublicWebOutboundLogForTests()).toHaveLength(0);
    });

    it("denies without pilotId — no outbound", async () => {
      const r = await executePublicWebSearch({
        explicitlyAuthorizedExactQuery: exact,
        turnAuthorizedExactQueries: [exact],
        policyVersion: "pol_v3",
        finops: { projectId: "prj_test" },
        env: enabled,
      });
      expect(r.status).toBe("DENIED");
      expect(r.limits).toContain("WEB_QUERY_EGRESS_D6_DENIED");
      expect(r.limits).toContain("PILOT_REQUIRED");
      expect(__getPublicWebOutboundLogForTests()).toHaveLength(0);
    });

    it("turnAuthorizedExactQueries alone do not catalog-bind (D6 still required)", async () => {
      const { reverifyWebPublicQueryAuthorityAtEgress } = await import(
        "@/domains/conversation/web-public-query-authority"
      );
      vi.mocked(reverifyWebPublicQueryAuthorityAtEgress).mockResolvedValue({
        allowed: false,
        reasonCode: "DECISION_NOT_FOUND",
        reason: "missing",
      });
      const r = await executePublicWebSearch({
        explicitlyAuthorizedExactQuery: exact,
        turnAuthorizedExactQueries: [exact],
        policyVersion: "pol_v3",
        finops,
        env: enabled,
      });
      expect(r.status).toBe("DENIED");
      expect(r.limits).toContain("WEB_QUERY_EGRESS_D6_DENIED");
      expect(vi.mocked(reverifyWebPublicQueryAuthorityAtEgress)).toHaveBeenCalled();
    });

    it("allows egress when D6 reverify passes (mocked)", async () => {
      const { reverifyWebPublicQueryAuthorityAtEgress } = await import(
        "@/domains/conversation/web-public-query-authority"
      );
      vi.mocked(reverifyWebPublicQueryAuthorityAtEgress).mockResolvedValue({
        allowed: true,
        decisionId: "dec_abc",
        objectRef: "web.public_query:abc",
        query: exact,
        source: "HUMAN_DECISION_RECORD",
      });
      const r = await executePublicWebSearch({
        explicitlyAuthorizedExactQuery: exact,
        turnAuthorizedExactQueries: [exact],
        turnExactQueryDecisionIds: {
          [exact.toLowerCase()]: "dec_abc",
        },
        policyVersion: "pol_v3",
        finops,
        env: enabled,
      });
      expect(r.status).toBe("AVAILABLE");
      expect(__getPublicWebOutboundLogForTests()).toHaveLength(1);
    });
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
