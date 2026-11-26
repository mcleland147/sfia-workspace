/**
 * C19 — residual invariants (deterministic).
 */
import { describe, expect, it } from "vitest";
import { sanitizePublicWebQuery } from "@/domains/conversation/web-search-sanitize";
import {
  assertOutboundHasNoPrivateLeak,
  __resetPublicWebOutboundLogForTests,
  __getPublicWebOutboundLogForTests,
  executePublicWebSearch,
} from "@/domains/conversation/public-web-search-frontier";
describe("C19 I3 WEB sanitize / egress confidentiality", () => {
  it("redacts studio-private ids and blocks secretish queries", () => {
    const a = sanitizePublicWebQuery(
      "compare prep_abc12345-aaaa-bbbb-cccc-ddddeeee0000 with public RFC",
    );
    expect(a.ok).toBe(true);
    expect(a.query).not.toMatch(/prep_/);
    expect(a.redactions.length).toBeGreaterThan(0);

    const blocked = sanitizePublicWebQuery("my api_key is sk-abcdefghijklmnopqrstuvwxyz");
    expect(blocked.ok).toBe(false);
  });

  it("blocks outbound when private markers leak into fields", () => {
    const r = assertOutboundHasNoPrivateLeak(
      { q: "public topic prep_secretid12345678" },
      ["prep_secretid12345678"],
    );
    expect(r.ok).toBe(false);
  });

  it("scripted search records only sanitized outbound query", async () => {
    __resetPublicWebOutboundLogForTests();
    const prev = process.env.SFIA_WEB_SEARCH_ENABLED;
    process.env.SFIA_WEB_SEARCH_ENABLED = "1";
    delete process.env.SFIA_WEB_SEARCH_LIVE;
    try {
      const exact = "public markdown specification";
      const r = await executePublicWebSearch({
        explicitlyAuthorizedExactQuery: exact,
        turnAuthorizedExactQueries: [exact],
        turnPublicTopics: { markdown_spec: exact },
        privateContextMarkers: ["proj_should_not_appear_zzzzzzzz"],
      });
      expect(r.status).toBe("AVAILABLE");
      const log = __getPublicWebOutboundLogForTests();
      expect(log.length).toBe(1);
      expect(JSON.stringify(log[0]!.outboundFields)).not.toContain("proj_should_not_appear");
      // C21 — free-form rawQuery alone is refused (provenance required).
      const denied = await executePublicWebSearch({
        rawQuery: "public markdown specification with proj_should_not_appear_zzzzzzzz",
        privateContextMarkers: ["proj_should_not_appear_zzzzzzzz"],
      });
      expect(denied.status).toBe("DENIED");
    } finally {
      if (prev === undefined) delete process.env.SFIA_WEB_SEARCH_ENABLED;
      else process.env.SFIA_WEB_SEARCH_ENABLED = prev;
    }
  });
});
