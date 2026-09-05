/**
 * AUTH-D01→D26 — allowlist, actor mapping, S1 authority, hostile input.
 * ZERO real GitHub OAuth.
 */

import { describe, expect, it } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision";
import {
  authorizeByGithubLoginOrEmail,
  canonicalizeGithubUserId,
  isGithubUserAllowed,
  parseAllowedGithubUserIds,
} from "@/lib/auth/allowlist";
import {
  githubActorId,
  mapGithubIdentityToPiloteActor,
} from "@/lib/auth/actorMapping";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import {
  BETTER_AUTH_GITHUB_MULTI_USER_S1,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
} from "@/lib/auth";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";

describe("AUTH allowlist multi-user", () => {
  it("AUTH-D01 parses two valid users", () => {
    const r = parseAllowedGithubUserIds("11111111,22222222");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.ids).toEqual(["11111111", "22222222"]);
  });

  it("AUTH-D02 parses N users", () => {
    const r = parseAllowedGithubUserIds("1,2,3,4,5");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.ids).toHaveLength(5);
  });

  it("AUTH-D03 deduplicates", () => {
    const r = parseAllowedGithubUserIds("10,10, 11 ,10");
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.ids).toEqual(["10", "11"]);
  });

  it("AUTH-D04 missing config fails closed", () => {
    const r = parseAllowedGithubUserIds(undefined);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("ALLOWLIST_MISSING");
  });

  it("AUTH-D05 empty config fails closed", () => {
    const r = parseAllowedGithubUserIds("   ");
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("ALLOWLIST_EMPTY");
  });

  it("AUTH-D06 malformed member fails closed", () => {
    expect(parseAllowedGithubUserIds("12,abc").ok).toBe(false);
    expect(parseAllowedGithubUserIds("12,").ok).toBe(false);
    expect(parseAllowedGithubUserIds("0").ok).toBe(false);
    expect(parseAllowedGithubUserIds("-1").ok).toBe(false);
    expect(parseAllowedGithubUserIds("1.5").ok).toBe(false);
  });

  it("AUTH-D07 login/email/displayName cannot authorize", () => {
    expect(authorizeByGithubLoginOrEmail("morris")).toBe(false);
    expect(authorizeByGithubLoginOrEmail("a@b.co")).toBe(false);
    const ids = ["11111111"];
    expect(isGithubUserAllowed("morris", ids)).toBe(false);
  });

  it("AUTH-D08/D09/D10 allow A+B deny C", () => {
    const ids = ["11111111", "22222222"];
    expect(isGithubUserAllowed("11111111", ids)).toBe(true);
    expect(isGithubUserAllowed("22222222", ids)).toBe(true);
    expect(isGithubUserAllowed("33333333", ids)).toBe(false);
  });

  it("AUTH-D14/D15 removal A blocks A not B", () => {
    let ids = ["11111111", "22222222"];
    ids = ids.filter((id) => id !== "11111111");
    expect(isGithubUserAllowed("11111111", ids)).toBe(false);
    expect(isGithubUserAllowed("22222222", ids)).toBe(true);
  });
});

describe("AUTH actor mapping", () => {
  it("AUTH-D11/D12/D13/D22 distinct Pilote actors", () => {
    const a = mapGithubIdentityToPiloteActor({
      githubUserId: "11111111",
      displayName: "Alice",
    });
    const b = mapGithubIdentityToPiloteActor({
      githubUserId: "22222222",
      displayName: "Bob",
    });
    expect(a.actorId).toBe("actor:github:11111111");
    expect(b.actorId).toBe("actor:github:22222222");
    expect(a.actorId).not.toBe(b.actorId);
    expect(a.role).toBe("decision_maker");
    expect(b.role).toBe("decision_maker");
    expect(a.authorityLevel).toBe("none");
    expect(b.authorityLevel).toBe("none");
  });

  it("AUTH-D26 historical local-pilote id remains distinct", () => {
    expect(LOCAL_PILOTE_ACTOR.actorId).toBe("actor:local-pilote");
    expect(githubActorId("11111111")).not.toBe(LOCAL_PILOTE_ACTOR.actorId);
  });
});

describe("AUTH S1 AuthorityEvidence", () => {
  it("AUTH-D23/D24/D25 no auto-N3; collision-safe register; canActAsMorris false", () => {
    const resolver = new MemoryAuthorityResolver();
    const piloteA = {
      ok: true as const,
      githubUserId: "11111111",
      betterAuthUserId: "ba-user-a",
      actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
    };
    const piloteB = {
      ok: true as const,
      githubUserId: "22222222",
      betterAuthUserId: "ba-user-b",
      actor: mapGithubIdentityToPiloteActor({ githubUserId: "22222222" }),
    };

    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();

    const blocked = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      issuedAt,
      expiresAt,
    });
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) {
      expect(blocked.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }

    const contract = {
      executionContractId: "xct:auth-d23",
      projectId: "prj:demo",
      action: "product:read",
      target: "tgt:demo",
      scope: "biz:demo",
      requiredAuthority: "N1" as const,
      requiredCapabilities: ["cap:demo"],
      constraints: ["c:demo"],
      stopConditions: ["stop:demo"],
      evidenceRequirements: ["evreq:demo"],
      reversibility: "partially_reversible" as const,
      idempotencyKey: "idem:auth-d23",
    };
    const bind = computeInspectionFingerprint(contract);
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:github-s1:test-a",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(issued.evidence.scope).toBe(bind);

    const okA = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N1",
      scope: bind,
      evidenceId: issued.evidence.evidenceId,
      requireMorrisGate: false,
    });
    expect(okA.ok).toBe(true);

    const misuseB = resolver.verify({
      actorId: piloteB.actor.actorId,
      requiredLevel: "N1",
      scope: bind,
      evidenceId: issued.evidence.evidenceId,
    });
    expect(misuseB.ok).toBe(false);
    expect(misuseB.reason).toBe("actor_mismatch");

    const morrisGate = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N1",
      scope: bind,
      evidenceId: issued.evidence.evidenceId,
      requireMorrisGate: true,
    });
    expect(morrisGate.ok).toBe(false);
    expect(morrisGate.reason).toBe("morris_gate_denied");
  });

  it("AUTH-D16/D17/D18 canonicalize ignores hostile non-id shapes", () => {
    expect(canonicalizeGithubUserId("11111111")).toBe("11111111");
    expect(canonicalizeGithubUserId(11111111)).toBe("11111111");
    expect(canonicalizeGithubUserId("Pilote")).toBeNull();
    expect(canonicalizeGithubUserId({ canActAsMorris: true })).toBeNull();
    expect(canonicalizeGithubUserId(true)).toBeNull();
  });
});
