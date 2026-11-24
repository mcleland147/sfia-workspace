/**
 * C20 — blocking residual invariants (deterministic).
 */
import { describe, expect, it } from "vitest";
import { sanitizePublicWebQuery } from "@/domains/conversation/web-search-sanitize";
import {
  assertOutboundHasNoPrivateLeak,
  executePublicWebOpenPage,
  normalizeDiscoveredWebUrl,
  __resetPublicWebOutboundLogForTests,
  __getPublicWebOutboundLogForTests,
} from "@/domains/conversation/public-web-search-frontier";
describe("C20 I3 WEB confidentiality / URL authorization", () => {
  it("blocks confidential business content without studio id markers", () => {
    const r = sanitizePublicWebQuery(
      "compare our internal only roadmap with public RFCs",
    );
    expect(r.ok).toBe(false);
    expect(r.blockedReason).toBe("SECRETISH_CONTENT");
  });

  it("does not echo raw private markers in leak diagnostics", () => {
    const r = assertOutboundHasNoPrivateLeak(
      { q: "x prep_abc12345-aaaa-bbbb-cccc-ddddeeee0000 y" },
      ["prep_abc12345-aaaa-bbbb-cccc-ddddeeee0000"],
    );
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.leaked[0]).toMatch(/^PRIVATE_MARKER_/);
      expect(r.leaked.join("")).not.toMatch(/prep_/);
    }
  });

  it("refuses open_page for URL outside discovery and does not log egress", async () => {
    __resetPublicWebOutboundLogForTests();
    const r = await executePublicWebOpenPage({
      url: "https://example.invalid/secret-page",
      env: { SFIA_WEB_SEARCH_ENABLED: "1" },
      allowedUrls: ["https://example.invalid/allowed"],
    });
    expect(r.status).toBe("DENIED");
    expect(r.limits).toContain("URL_NOT_IN_AUTHORIZED_DISCOVERY");
    expect(__getPublicWebOutboundLogForTests()).toHaveLength(0);
  });

  it("normalizes discovered URLs without hash", () => {
    expect(normalizeDiscoveredWebUrl("https://example.invalid/a#frag")).toBe(
      "https://example.invalid/a",
    );
  });
});
