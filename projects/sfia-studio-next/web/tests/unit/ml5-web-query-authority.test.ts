import { describe, expect, it } from "vitest";
import {
  buildWebPublicQueryEffectConditions,
  buildWebPublicQueryObjectRef,
  parseWebPublicQueryEffectConditions,
  promoteExactQueriesFromAuthority,
  validateWebPublicQueryDecisionRow,
  WEB_PUBLIC_QUERY_DESTINATION,
} from "@/domains/conversation/web-public-query-authority";
import {
  extractPilotAuthorizedExactQueries,
  resolvePublicWebRegistry,
} from "@/domains/conversation/public-web-registry";

const basePayload = {
  query: "HTTP/3 site:datatracker.ietf.org",
  destination: WEB_PUBLIC_QUERY_DESTINATION,
  purpose: "public protocol documentation research",
  projectId: "prj_test",
  pilotId: "pilot_a",
  policyVersion: "pol_v3",
};

describe("S5 — WEB public query authority (parse ≠ D6)", () => {
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

  it("ignores priorExactQueries strings without d6 binding", () => {
    const q = "HTTP/3 site:datatracker.ietf.org";
    const r = resolvePublicWebRegistry({
      pilotText: "bonjour",
      priorExactQueries: [q],
      haystack: "suite",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },
    });
    expect(r.exactQueries).not.toContain(q);
    expect(r.limits).toContain("PRIOR_EXACT_STRINGS_IGNORED_WITHOUT_D6_BINDING");
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

  it("parseWebPublicQueryEffectConditions fails closed on missing/malformed", () => {
    expect(parseWebPublicQueryEffectConditions(null).ok).toBe(false);
    expect(parseWebPublicQueryEffectConditions("not-json").ok).toBe(false);
    expect(parseWebPublicQueryEffectConditions("{}").ok).toBe(false);
    const valid = parseWebPublicQueryEffectConditions(
      buildWebPublicQueryEffectConditions(basePayload),
    );
    expect(valid.ok).toBe(true);
    if (!valid.ok) throw new Error("expected ok");
    expect(valid.payload.policyVersion).toBe("pol_v3");
    expect(valid.payload.destination).toBe(WEB_PUBLIC_QUERY_DESTINATION);
  });

  it("validateWebPublicQueryDecisionRow enforces kind, state, policy, payload", () => {
    const objectRef = buildWebPublicQueryObjectRef(basePayload);
    const ec = buildWebPublicQueryEffectConditions(basePayload);
    const row = {
      id: "dec_abc",
      pilotId: basePayload.pilotId,
      kind: "RECORD_DECISION",
      objectRef,
      state: "APPLICABLE",
      effectConditions: ec,
    };

    const ok = validateWebPublicQueryDecisionRow(row, {
      query: basePayload.query,
      projectId: basePayload.projectId,
      pilotId: basePayload.pilotId,
      policyVersion: basePayload.policyVersion,
      objectRef,
    });
    expect(ok.allowed).toBe(true);

    const wrongKind = validateWebPublicQueryDecisionRow(
      { ...row, kind: "OPEN_CYCLE" },
      {
        query: basePayload.query,
        projectId: basePayload.projectId,
        pilotId: basePayload.pilotId,
        policyVersion: basePayload.policyVersion,
        objectRef,
      },
    );
    expect(wrongKind.allowed).toBe(false);
    if (wrongKind.allowed) throw new Error("expected deny");
    expect(wrongKind.reasonCode).toBe("KIND_MISMATCH");

    const wrongPolicy = validateWebPublicQueryDecisionRow(row, {
      query: basePayload.query,
      projectId: basePayload.projectId,
      pilotId: basePayload.pilotId,
      policyVersion: "pol_other",
      objectRef,
    });
    expect(wrongPolicy.allowed).toBe(false);
    if (wrongPolicy.allowed) throw new Error("expected deny");
    expect(wrongPolicy.reasonCode).toBe("POLICY_VERSION_MISMATCH");

    const noEc = validateWebPublicQueryDecisionRow(
      { ...row, effectConditions: null },
      {
        query: basePayload.query,
        projectId: basePayload.projectId,
        pilotId: basePayload.pilotId,
        policyVersion: basePayload.policyVersion,
        objectRef,
      },
    );
    expect(noEc.allowed).toBe(false);
    if (noEc.allowed) throw new Error("expected deny");
    expect(noEc.reasonCode).toBe("EFFECT_CONDITIONS_INVALID");
  });
});