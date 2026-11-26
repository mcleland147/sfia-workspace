import { describe, expect, it } from "vitest";
import { authorizePublicWebQuery } from "@/domains/conversation/web-search-authorize";
import {
  __getPublicWebOutboundLogForTests,
  __resetPublicWebOutboundLogForTests,
  executePublicWebSearch,
} from "@/domains/conversation/public-web-search-frontier";

describe("C22 WEB query provenance authorization", () => {
  it("refuses free-form rawQuery without exact allowlist", () => {
    const r = authorizePublicWebQuery({
      rawQuery: "budget interne Q4 1.2M€ AcmeCorp confidentiel projet Orion",
    });
    expect(r.ok).toBe(false);
    expect(r.deniedReason).toMatch(/PROVENANCE_REQUIRED|free-form/);
  });

  it("refuses free-form publicTopic without registry/allowlist", () => {
    const privateFact = "le client NordIndustrie paie 480k€/an pour le support";
    const r = authorizePublicWebQuery({
      publicTopic: `normes ISO ${privateFact}`,
      privateContextMarkers: [privateFact],
    });
    expect(r.ok).toBe(false);
    expect(r.deniedReason).toMatch(/PROVENANCE_NOT_ESTABLISHED/);
  });

  it("refuses authorizedPublicFacts when registry empty", () => {
    const r = authorizePublicWebQuery({
      publicTopicRef: "iso",
      turnPublicTopics: { iso: "ISO 27001 overview" },
      authorizedPublicFacts: ["fait métier inventé 480k"],
      turnPublicFacts: [],
    });
    expect(r.ok).toBe(false);
    expect(r.deniedReason).toMatch(/PUBLIC_REGISTRY_EMPTY|PUBLIC_FACT_NOT_REGISTERED/);
  });

  it("accepts registered publicTopicRef composition", () => {
    const r = authorizePublicWebQuery({
      publicTopicRef: "rfc9110",
      turnPublicTopics: { rfc9110: "RFC 9110 HTTP semantics caching" },
      privateContextMarkers: ["NordIndustrie-secret-480k"],
    });
    expect(r.ok).toBe(true);
    expect(r.provenance).toBe("REGISTERED_PUBLIC_COMPOSITION");
    expect(r.authorizedQuery).toMatch(/RFC 9110/);
    expect(r.authorizedQuery).not.toMatch(/NordIndustrie|480k/);
  });

  it("accepts exact allowlisted query", () => {
    const exact = "MDN Fetch API credentials omit";
    const r = authorizePublicWebQuery({
      explicitlyAuthorizedExactQuery: exact,
      turnAuthorizedExactQueries: [exact],
    });
    expect(r.ok).toBe(true);
    expect(r.provenance).toBe("EXPLICIT_AUTHORIZED_EXACT");
  });

  it("executePublicWebSearch refuses free-form publicTopic with no egress", async () => {
    __resetPublicWebOutboundLogForTests();
    const r = await executePublicWebSearch({
      publicTopic: "norme ISO 27001 pour notre contrat NordIndustrie 480k",
      env: { ...process.env, SFIA_WEB_SEARCH_ENABLED: "1", SFIA_WEB_SEARCH_LIVE: "0" },
    });
    expect(r.status).toBe("DENIED");
    expect(__getPublicWebOutboundLogForTests()).toHaveLength(0);
  });

  it("executePublicWebSearch with allowlisted exact records authorized egress only", async () => {
    __resetPublicWebOutboundLogForTests();
    const exact = "OWASP SSRF prevention checklist";
    const privateFact = "salaire interne 92k€ NoraPilot";
    const r = await executePublicWebSearch({
      explicitlyAuthorizedExactQuery: exact,
      turnAuthorizedExactQueries: [exact],
      // Independent public topic catalog — not Nora-fed priorExactQueries alone.
      turnPublicTopics: { owasp_ssrf: exact },
      privateContextMarkers: [privateFact],
      env: { ...process.env, SFIA_WEB_SEARCH_ENABLED: "1", SFIA_WEB_SEARCH_LIVE: "0" },
    });
    expect(r.status).toBe("AVAILABLE");
    expect(r.query).toBe(exact);
    expect(JSON.stringify(__getPublicWebOutboundLogForTests())).not.toMatch(
      /92k|NoraPilot|salaire/,
    );
  });
});
