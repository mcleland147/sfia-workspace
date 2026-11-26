import { describe, expect, it, vi, beforeEach } from "vitest";
import {
  buildWebPublicQueryEffectConditions,
  buildWebPublicQueryObjectRef,
  fingerprintWebPublicQueryInspection,
  inspectWebPublicQueryAuthorityCandidate,
  parseWebPublicQueryEffectConditions,
  promoteExactQueriesFromAuthority,
  validateWebPublicQueryDecisionRow,
  WEB_PUBLIC_QUERY_DESTINATION,
} from "@/domains/conversation/web-public-query-authority";
import {
  extractPilotAuthorizedExactQueries,
  resolvePublicWebRegistry,
} from "@/domains/conversation/public-web-registry";

const futureExpiry = new Date(Date.now() + 60 * 60 * 1000).toISOString();

const basePayload = {
  query: "HTTP/3 site:datatracker.ietf.org",
  destination: WEB_PUBLIC_QUERY_DESTINATION,
  purpose: "public protocol documentation research",
  projectId: "prj_test",
  pilotId: "pilot_a",
  policyVersion: "pol_v3",
  expiresAt: futureExpiry,
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

  it("parseWebPublicQueryEffectConditions fails closed on missing/malformed/incomplete", () => {
    expect(parseWebPublicQueryEffectConditions(null).ok).toBe(false);
    expect(parseWebPublicQueryEffectConditions("not-json").ok).toBe(false);
    expect(parseWebPublicQueryEffectConditions("{}").ok).toBe(false);
    // missing expiresAt
    expect(
      parseWebPublicQueryEffectConditions(
        JSON.stringify({
          query: basePayload.query,
          destination: WEB_PUBLIC_QUERY_DESTINATION,
          purpose: basePayload.purpose,
          projectId: basePayload.projectId,
          pilotId: basePayload.pilotId,
          policyVersion: basePayload.policyVersion,
        }),
      ).ok,
    ).toBe(false);
    const valid = parseWebPublicQueryEffectConditions(
      buildWebPublicQueryEffectConditions(basePayload),
    );
    expect(valid.ok).toBe(true);
    if (!valid.ok) throw new Error("expected ok");
    expect(valid.payload.policyVersion).toBe("pol_v3");
    expect(valid.payload.destination).toBe(WEB_PUBLIC_QUERY_DESTINATION);
    expect(valid.payload.expiresAt).toBeTruthy();
  });

  it("validateWebPublicQueryDecisionRow enforces kind, state, policy, purpose, expiry, payload", () => {
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

    const noPolicy = validateWebPublicQueryDecisionRow(row, {
      query: basePayload.query,
      projectId: basePayload.projectId,
      pilotId: basePayload.pilotId,
      objectRef,
    });
    expect(noPolicy.allowed).toBe(false);
    if (noPolicy.allowed) throw new Error("expected deny");
    expect(noPolicy.reasonCode).toBe("POLICY_VERSION_REQUIRED");

    const expired = validateWebPublicQueryDecisionRow(row, {
      query: basePayload.query,
      projectId: basePayload.projectId,
      pilotId: basePayload.pilotId,
      policyVersion: basePayload.policyVersion,
      objectRef,
      now: Date.parse(futureExpiry) + 1,
    });
    expect(expired.allowed).toBe(false);
    if (expired.allowed) throw new Error("expected deny");
    expect(expired.reasonCode).toBe("EXPIRED");

    const purposeMismatch = validateWebPublicQueryDecisionRow(row, {
      query: basePayload.query,
      projectId: basePayload.projectId,
      pilotId: basePayload.pilotId,
      policyVersion: basePayload.policyVersion,
      purpose: "other purpose",
      objectRef,
    });
    expect(purposeMismatch.allowed).toBe(false);
    if (purposeMismatch.allowed) throw new Error("expected deny");
    expect(purposeMismatch.reasonCode).toBe("PAYLOAD_MISMATCH");

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

  it("inspect → apply path is the real inspected-decision chain (not helper injection)", async () => {
    const pilotText = `AUTHORIZE_PUBLIC_QUERY: "${basePayload.query}"`;
    const inspected = inspectWebPublicQueryAuthorityCandidate({
      pilotText,
      projectId: basePayload.projectId,
      pilotId: basePayload.pilotId,
      purpose: basePayload.purpose,
      policyVersion: basePayload.policyVersion,
      expiresAt: futureExpiry,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error("expected inspection");
    expect(inspected.inspection.payload.destination).toBe(
      WEB_PUBLIC_QUERY_DESTINATION,
    );
    expect(inspected.inspection.payload.purpose).toBe(basePayload.purpose);
    expect(inspected.inspection.inspectedFingerprint).toBe(
      fingerprintWebPublicQueryInspection(
        inspected.inspection.effectConditions,
        inspected.inspection.objectRef,
      ),
    );

    const refuseUnconfirmed = await (
      await import("@/domains/conversation/web-public-query-authority")
    ).applyWebPublicQueryAuthorityDecision({
      pilotId: basePayload.pilotId,
      projectId: basePayload.projectId,
      inspection: inspected.inspection,
      inspectedFingerprint: inspected.inspection.inspectedFingerprint,
      confirmed: false,
      sourceRef: "unit-test-act",
    });
    expect(refuseUnconfirmed.allowed).toBe(false);
    if (refuseUnconfirmed.allowed) throw new Error("expected deny");
    expect(refuseUnconfirmed.reasonCode).toBe("NOT_CONFIRMED");

    const refuseWrongFp = await (
      await import("@/domains/conversation/web-public-query-authority")
    ).applyWebPublicQueryAuthorityDecision({
      pilotId: basePayload.pilotId,
      projectId: basePayload.projectId,
      inspection: inspected.inspection,
      inspectedFingerprint: "tampered",
      confirmed: true,
      sourceRef: "unit-test-act",
    });
    expect(refuseWrongFp.allowed).toBe(false);
    if (refuseWrongFp.allowed) throw new Error("expected deny");
    expect(refuseWrongFp.reasonCode).toBe("INSPECTION_FINGERPRINT_MISMATCH");

    // Deterministic apply without live DB: exercise validate on the would-be row.
    const syntheticRow = {
      id: "dec_from_inspect",
      pilotId: basePayload.pilotId,
      kind: "RECORD_DECISION" as const,
      objectRef: inspected.inspection.objectRef,
      state: "APPLICABLE",
      effectConditions: inspected.inspection.effectConditions,
    };
    const applied = validateWebPublicQueryDecisionRow(syntheticRow, {
      query: basePayload.query,
      projectId: basePayload.projectId,
      pilotId: basePayload.pilotId,
      policyVersion: basePayload.policyVersion,
      purpose: basePayload.purpose,
      objectRef: inspected.inspection.objectRef,
    });
    expect(applied.allowed).toBe(true);

    // Checkpoint reuse simulation: same decisionId/objectRef re-validated later.
    const reused = validateWebPublicQueryDecisionRow(syntheticRow, {
      query: basePayload.query,
      projectId: basePayload.projectId,
      pilotId: basePayload.pilotId,
      policyVersion: basePayload.policyVersion,
      objectRef: inspected.inspection.objectRef,
    });
    expect(reused.allowed).toBe(true);

    // Checkpoint reuse after expiry must fail closed.
    const reusedExpired = validateWebPublicQueryDecisionRow(syntheticRow, {
      query: basePayload.query,
      projectId: basePayload.projectId,
      pilotId: basePayload.pilotId,
      policyVersion: basePayload.policyVersion,
      objectRef: inspected.inspection.objectRef,
      now: Date.parse(futureExpiry) + 5_000,
    });
    expect(reusedExpired.allowed).toBe(false);
    if (reusedExpired.allowed) throw new Error("expected deny");
    expect(reusedExpired.reasonCode).toBe("EXPIRED");
  });

  it("inspect refuses missing purpose / policy / project", () => {
    const pilotText = `AUTHORIZE_PUBLIC_QUERY: "${basePayload.query}"`;
    expect(
      inspectWebPublicQueryAuthorityCandidate({
        pilotText,
        projectId: "",
        pilotId: basePayload.pilotId,
        purpose: basePayload.purpose,
        policyVersion: basePayload.policyVersion,
      }).ok,
    ).toBe(false);
    expect(
      inspectWebPublicQueryAuthorityCandidate({
        pilotText,
        projectId: basePayload.projectId,
        pilotId: basePayload.pilotId,
        purpose: "",
        policyVersion: basePayload.policyVersion,
      }).ok,
    ).toBe(false);
    expect(
      inspectWebPublicQueryAuthorityCandidate({
        pilotText,
        projectId: basePayload.projectId,
        pilotId: basePayload.pilotId,
        purpose: basePayload.purpose,
        policyVersion: "",
      }).ok,
    ).toBe(false);
  });
});

describe("S5 — inspect→apply with mocked DB (create→inspect→apply)", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("apply inserts RECORD_DECISION with effectConditions then reverify path uses decisionId", async () => {
    const inserted: Array<Record<string, unknown>> = [];
    vi.doMock("@/db/client", () => ({
      db: {
        transaction: async (fn: (tx: unknown) => Promise<string>) =>
          fn({
            insert: () => ({
              values: async (v: Record<string, unknown>) => {
                inserted.push(v);
              },
            }),
          }),
        select: () => {
          const chain = {
            from: () => chain,
            where: () => chain,
            limit: async () => [
              {
                id: basePayload.projectId,
                ownerPilotId: basePayload.pilotId,
              },
            ],
          };
          return chain;
        },
      },
    }));
    vi.doMock("@/domains/decisions/service", () => ({
      insertHumanDecision: async (
        _tx: unknown,
        input: { kind: string; effectConditions: string; objectRef: string },
      ) => {
        inserted.push(input as unknown as Record<string, unknown>);
        expect(input.kind).toBe("RECORD_DECISION");
        expect(input.effectConditions).toContain("expiresAt");
        expect(input.objectRef.startsWith("web.public_query:")).toBe(true);
        return "dec_applied_1";
      },
    }));

    const {
      inspectWebPublicQueryAuthorityCandidate: inspect,
      applyWebPublicQueryAuthorityDecision: apply,
    } = await import("@/domains/conversation/web-public-query-authority");

    const pilotText = `AUTHORIZE_PUBLIC_QUERY: "${basePayload.query}"`;
    const inspected = inspect({
      pilotText,
      projectId: basePayload.projectId,
      pilotId: basePayload.pilotId,
      purpose: basePayload.purpose,
      policyVersion: basePayload.policyVersion,
      expiresAt: futureExpiry,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error("expected inspection");

    const applied = await apply({
      pilotId: basePayload.pilotId,
      projectId: basePayload.projectId,
      inspection: inspected.inspection,
      inspectedFingerprint: inspected.inspection.inspectedFingerprint,
      confirmed: true,
      sourceRef: "turn_abc",
    });
    expect(applied.allowed).toBe(true);
    if (!applied.allowed) throw new Error("expected allow");
    expect(applied.decisionId).toBe("dec_applied_1");
    expect(applied.query).toBe(basePayload.query);
    expect(inserted.length).toBeGreaterThanOrEqual(1);
  });
});
