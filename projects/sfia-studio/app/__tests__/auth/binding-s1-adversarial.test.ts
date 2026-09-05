/**
 * AUTH-BIND / AUTH-S1 / AUTH-POLICY — adversarial deterministic correction suite.
 * ZERO real GitHub OAuth / OpenAI / web_search.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision";
import {
  createSfiaAuth,
  resetSfiaAuthSingletonForTests,
} from "@/lib/auth/auth";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";
import { readSessionBoundGithubProviderAccount } from "@/lib/auth/providerAccountBinding";
import {
  issueS1AuthorityEvidence,
  validateS1EvidenceLifetime,
} from "@/lib/auth/s1Authority";
import {
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  resolvePiloteS1AuthorityLevel,
} from "@/lib/auth/piloteS1AuthorityPolicy";
import { SESSION_COOKIE_MAX_AGE_SECONDS } from "@/lib/auth/constants";
import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";
import { headersWithAccountCookie } from "./helpers/accountCookie";

const TEST_ENV = {
  BETTER_AUTH_SECRET: "test-secret-at-least-32-characters-long!!",
  BETTER_AUTH_URL: "http://localhost:3020",
  GITHUB_CLIENT_ID: "test-github-client-id",
  GITHUB_CLIENT_SECRET: "test-github-client-secret",
  SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
} as unknown as NodeJS.ProcessEnv;

function installNetworkSentinel() {
  const hits: string[] = [];
  const originalFetch = globalThis.fetch;
  globalThis.fetch = vi.fn(async (input: RequestInfo | URL) => {
    const url = String(input);
    hits.push(url);
    throw new Error(`NETWORK_SENTINEL_BLOCKED:${url}`);
  }) as typeof fetch;
  return {
    hits,
    restore: () => {
      globalThis.fetch = originalFetch;
    },
  };
}

describe("AUTH-BIND session↔provider (better-auth@1.7.2 account_data)", () => {
  beforeEach(() => {
    resetSfiaAuthSingletonForTests();
  });
  afterEach(() => {
    resetSfiaAuthSingletonForTests();
    vi.restoreAllMocks();
  });

  it("AUTH-BIND-01 A session + A provider subject → PASS", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    const sentinel = installNetworkSentinel();
    try {
      vi.spyOn(auth.api, "getSession").mockResolvedValue({
        user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
        session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
      } as never);

      const r = await resolveCurrentAuthenticatedPilote({
        auth,
        headers,
        env: TEST_ENV,
      });
      expect(r.ok).toBe(true);
      if (r.ok) {
        expect(r.githubUserId).toBe("11111111");
        expect(r.betterAuthUserId).toBe("ba-user-a");
        expect(r.betterAuthUserId).not.toBe(r.githubUserId);
      }
      expect(sentinel.hits.filter((u) => u.includes("api.github.com"))).toEqual(
        [],
      );
    } finally {
      sentinel.restore();
    }
  });

  it("AUTH-BIND-02 B session + A provider/account state → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-b", name: "B", email: "b@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-b", userId: "ba-user-b", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("SESSION_USER_MISMATCH");
  });

  it("AUTH-BIND-03 session valid + provider state missing → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers: new Headers(),
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROVIDER_ACCOUNT_MISSING");
  });

  it("AUTH-BIND-04 provider != GitHub → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
      providerId: "google",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROVIDER_NOT_GITHUB");
  });

  it("AUTH-BIND-05 GitHub accountId malformed → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "not-a-github-id",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("GITHUB_ID_INVALID");
  });

  it("AUTH-BIND-06/07/08 hostile claims ignored", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
      claimedGithubUserId: "22222222",
      claimedRole: "Admin",
      claimedCanActAsMorris: true,
    });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.githubUserId).toBe("11111111");
      expect(r.actor.role).toBe("decision_maker");
    }
  });

  it("AUTH-BIND-09 allowlist removal after session → DENY", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);

    const removed = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: {
        ...TEST_ENV,
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "22222222",
      } as NodeJS.ProcessEnv,
    });
    expect(removed.ok).toBe(false);
    if (!removed.ok) expect(removed.code).toBe("ALLOWLIST_DENIED");
  });

  it("AUTH-BIND-10 two allowlisted users → distinct actor IDs", () => {
    const a = mapGithubIdentityToPiloteActor({ githubUserId: "11111111" });
    const b = mapGithubIdentityToPiloteActor({ githubUserId: "22222222" });
    expect(a.actorId).not.toBe(b.actorId);
  });

  it("AUTH-BIND-11 protected identity resolution → zero GitHub provider network", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: { id: "ba-user-a", name: "A", email: "a@example.com", emailVerified: false, createdAt: new Date(), updatedAt: new Date() },
      session: { id: "sess-a", userId: "ba-user-a", token: "t", createdAt: new Date(), updatedAt: new Date(), expiresAt: new Date(Date.now() + 60_000) },
    } as never);
    const spyAccountInfo = vi.spyOn(auth.api, "accountInfo");
    const sentinel = installNetworkSentinel();
    try {
      await resolveCurrentAuthenticatedPilote({ auth, headers, env: TEST_ENV });
      expect(spyAccountInfo).not.toHaveBeenCalled();
      expect(sentinel.hits).toEqual([]);
    } finally {
      sentinel.restore();
    }
  });

  it("AUTH-BIND-12 cookie payload includes userId; public accountInfo shape does not invent binding", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    const bound = await readSessionBoundGithubProviderAccount({
      auth,
      headers,
      sessionUserId: "ba-user-a",
    });
    expect(bound.ok).toBe(true);
    if (bound.ok) {
      expect(bound.account.betterAuthUserId).toBe("ba-user-a");
      expect(bound.account.githubUserId).toBe("11111111");
    }

    // Missing userId in cookie → deny (cannot bind)
    const headersNoUser = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
      omitUserId: true,
    });
    const missing = await readSessionBoundGithubProviderAccount({
      auth,
      headers: headersNoUser,
      sessionUserId: "ba-user-a",
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) expect(missing.code).toBe("ACCOUNT_USER_ID_MISSING");
  });
});

describe("AUTH-POLICY S1 level", () => {
  it("AUTH-POLICY-01 login alone does not imply N3 — NOT PROVEN without governed effects", () => {
    const policy = resolvePiloteS1AuthorityLevel();
    expect(policy.ok).toBe(false);
    if (!policy.ok) {
      expect(policy.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }
  });

  it("AUTH-S1-01 issueS1 without contract fails; with read contract → N1", () => {
    const resolver = new MemoryAuthorityResolver();
    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const pilote = {
      ok: true as const,
      githubUserId: "11111111",
      betterAuthUserId: "ba-user-a",
      actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
    };
    const blocked = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      issuedAt,
      expiresAt,
    });
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) {
      expect(blocked.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }

    const contract = {
      executionContractId: "xct:auth-s1-01",
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
      idempotencyKey: "idem:auth-s1-01",
    };
    const ok = issueS1AuthorityEvidence({
      pilote,
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
      evidenceId: "evd:auth-s1-01",
    });
    expect(ok.ok).toBe(true);
    if (ok.ok) {
      expect(ok.evidence.level).toBe("N1");
      expect(ok.evidence.canActAsMorris).toBe(false);
      expect(ok.evidence.scope).toBe(computeInspectionFingerprint(contract));
    }
  });
});

describe("AUTH-S1 lifetime + collision integrity", () => {
  const pilote = {
    ok: true as const,
    githubUserId: "11111111",
    betterAuthUserId: "ba-user-a",
    actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
  };

  it("AUTH-S1-02 missing/empty expiresAt → FAIL", () => {
    expect(
      validateS1EvidenceLifetime({
        issuedAt: "2026-09-04T12:00:00.000Z",
        expiresAt: "",
      }).ok,
    ).toBe(false);
  });

  it("AUTH-S1-03 invalid issuedAt → FAIL", () => {
    const r = validateS1EvidenceLifetime({
      issuedAt: "not-a-date",
      expiresAt: "2026-09-04T13:00:00.000Z",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_ISSUED_AT");
  });

  it("AUTH-S1-04 invalid expiresAt → FAIL", () => {
    const r = validateS1EvidenceLifetime({
      issuedAt: "2026-09-04T12:00:00.000Z",
      expiresAt: "nope",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_EXPIRES_AT");
  });

  it("AUTH-S1-05 expiresAt <= issuedAt → FAIL", () => {
    const r = validateS1EvidenceLifetime({
      issuedAt: "2026-09-04T12:00:00.000Z",
      expiresAt: "2026-09-04T12:00:00.000Z",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_EVIDENCE_LIFETIME");
  });

  it("AUTH-S1-06 TTL over session max → FAIL", () => {
    const issuedAt = "2026-09-04T12:00:00.000Z";
    const overMs =
      Date.parse(issuedAt) + (SESSION_COOKIE_MAX_AGE_SECONDS + 1) * 1000;
    const r = validateS1EvidenceLifetime({
      issuedAt,
      expiresAt: new Date(overMs).toISOString(),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("INVALID_EVIDENCE_LIFETIME");
  });

  it("AUTH-S1-07 evidence expired → resolver refuses", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = {
      executionContractId: "xct:expired-test",
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
      idempotencyKey: "idem:expired",
    };
    const built = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt: "2020-01-01T00:00:00.000Z",
      expiresAt: "2020-01-01T01:00:00.000Z",
      evidenceId: "evd:expired-test",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const v = resolver.verify({
      actorId: pilote.actor.actorId,
      requiredLevel: "N1",
      scope: computeInspectionFingerprint(contract),
      evidenceId: "evd:expired-test",
    });
    expect(v.ok).toBe(false);
    expect(v.reason).toBe("expired");
  });

  it("AUTH-S1-08/09 duplicate evidenceId → FAIL-CLOSED; registry unchanged", () => {
    const resolver = new MemoryAuthorityResolver();
    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const contract = {
      executionContractId: "xct:collision",
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
      idempotencyKey: "idem:collision",
    };
    const first = issueS1AuthorityEvidence({
      pilote,
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
      evidenceId: "evd:collision",
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const second = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract: {
        ...contract,
        executionContractId: "xct:collision-other",
        idempotencyKey: "idem:collision-other",
      },
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:collision",
    });
    expect(second.ok).toBe(false);
    if (!second.ok) expect(second.code).toBe("EVIDENCE_ID_COLLISION");

    const stored = resolver.getEvidence("evd:collision");
    expect(stored?.canActAsMorris).toBe(false);
    expect(stored?.level).toBe("N1");
    expect(stored?.actorId).toBe(pilote.actor.actorId);
    expect(stored?.scope).toBe(computeInspectionFingerprint(contract));
  });

  it("AUTH-S1-10/11/12/13 actor/scope/morris/canActAsMorris invariants", () => {
    const resolver = new MemoryAuthorityResolver();
    const issuedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    const contract = {
      executionContractId: "xct:verify",
      projectId: "prj:demo",
      action: "product:commit",
      target: "tgt:demo",
      scope: "biz:demo",
      requiredAuthority: "N2" as const,
      requiredCapabilities: ["cap:demo"],
      constraints: ["c:demo"],
      stopConditions: ["stop:demo"],
      evidenceRequirements: ["evreq:demo"],
      reversibility: "partially_reversible" as const,
      idempotencyKey: "idem:verify",
    };
    const built = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "commit",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:verify",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    expect(built.evidence.canActAsMorris).toBe(false);

    expect(
      resolver.verify({
        actorId: "actor:github:22222222",
        requiredLevel: "N2",
        scope: computeInspectionFingerprint(contract),
        evidenceId: "evd:verify",
      }).reason,
    ).toBe("actor_mismatch");

    expect(
      resolver.verify({
        actorId: pilote.actor.actorId,
        requiredLevel: "N2",
        scope: "xct:other",
        evidenceId: "evd:verify",
      }).reason,
    ).toBe("scope_mismatch");

    expect(
      resolver.verify({
        actorId: pilote.actor.actorId,
        requiredLevel: "N2",
        scope: computeInspectionFingerprint(contract),
        evidenceId: "evd:verify",
        requireMorrisGate: true,
      }).reason,
    ).toBe("morris_gate_denied");
  });
});
