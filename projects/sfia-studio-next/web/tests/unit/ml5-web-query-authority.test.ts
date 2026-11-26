import { describe, expect, it } from "vitest";
import {
  buildWebPublicQueryObjectRef,
  promoteExactQueriesFromAuthority,
} from "@/domains/conversation/web-public-query-authority";
import {
  extractPilotAuthorizedExactQueries,
  resolvePublicWebRegistry,
} from "@/domains/conversation/public-web-registry";

describe("S4 — WEB public query authority (parse ≠ D6)", () => {
  it("rejects negation / example framing around AUTHORIZE", () => {
    expect(
      extractPilotAuthorizedExactQueries(
        'Ne pas autoriser AUTHORIZE_PUBLIC_QUERY: "HTTP/3 site:datatracker.ietf.org"',
      ),
    ).toEqual([]);
    expect(
      extractPilotAuthorizedExactQueries(
        'Exemple: AUTHORIZE_PUBLIC_QUERY: "HTTP/3 site:datatracker.ietf.org"',
      ),
    ).toEqual([]);
  });

  it("does not promote parse alone into exactQueries", () => {
    const r = resolvePublicWebRegistry({
      pilotText:
        'OK. AUTHORIZE_PUBLIC_QUERY: "HTTP/3 site:datatracker.ietf.org"',
      haystack: "suite",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },
    });
    expect(r.exactQueries).not.toContain("HTTP/3 site:datatracker.ietf.org");
    expect(r.limits).toContain("PILOT_EXACT_PARSE_OBSERVED");
    expect(r.limits).toContain("PARSE_NOT_D6_AUTHORITY");
    expect(r.limits).toContain("PILOT_EXACT_AWAITING_D6_DECISION");
  });

  it("promotes only when d6BoundExactQueries supplied", () => {
    const q = "HTTP/3 site:datatracker.ietf.org";
    const r = resolvePublicWebRegistry({
      pilotText: `AUTHORIZE_PUBLIC_QUERY: "${q}"`,
      d6BoundExactQueries: [q],
      haystack: "suite",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },
    });
    expect(r.exactQueries).toContain(q);
    expect(r.limits).toContain("PILOT_EXACT_AUTHORIZED_D6");
  });

  it("objectRef is stable for identical payload", () => {
    const a = buildWebPublicQueryObjectRef({
      query: "HTTP/3 site:datatracker.ietf.org",
      projectId: "prj_test",
    });
    const b = buildWebPublicQueryObjectRef({
      query: "  HTTP/3 site:datatracker.ietf.org  ",
      projectId: "prj_test",
    });
    expect(a).toBe(b);
    expect(a.startsWith("web.public_query:")).toBe(true);
  });

  it("promoteExactQueriesFromAuthority refuses without decision", () => {
    const r = promoteExactQueriesFromAuthority({
      pilotText: 'AUTHORIZE_PUBLIC_QUERY: "alpha beta gamma"',
      authority: {
        allowed: false,
        reasonCode: "DECISION_NOT_FOUND",
        reason: "missing",
      },
    });
    expect(r.exactQueries).toEqual([]);
    expect(r.limits).toContain("PILOT_EXACT_PARSE_NOT_PROMOTED");
  });
});
