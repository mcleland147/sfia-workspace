/**
 * POLICY-01…15 + BYPASS-* + BIND-* + REG-* — Auth policy / contract-binding closure.
 * ZERO real GitHub / OpenAI / web_search.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision";
import {
  resolveExecutionAuthorityVerifyScope,
  verifyRequiredAuthority,
} from "@/lib/oa/execution-contract/application/authorityHelper";
import * as AuthPublic from "@/lib/auth";
import {
  createSfiaAuth,
  resetSfiaAuthSingletonForTests,
} from "@/lib/auth/auth";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import {
  AUTHORITY_REQUIREMENT_MISMATCH,
  AUTHORITY_REQUIREMENT_UNTRUSTED,
  AUTHORITY_UNRESOLVED,
  CONTRACT_BINDING_MISMATCH,
  CONTRACT_CONTEXT_REQUIRED,
  MORRIS_AUTHORITY_NOT_AVAILABLE,
  MORRIS_GATE_REQUIRED,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  resolvePiloteS1AuthorityFromGovernedContract,
  resolvePiloteS1AuthorityFromGovernedEffects,
  resolvePiloteS1AuthorityLevel,
  type AuthS1GovernedContractContext,
  type GovernedEffectsAuthorityInput,
} from "@/lib/auth/piloteS1AuthorityPolicy";
import { BETTER_AUTH_GITHUB_MULTI_USER_S1 } from "@/lib/auth/constants";
import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";
import { headersWithAccountCookie } from "./helpers/accountCookie";

const TEST_ENV = {
  BETTER_AUTH_SECRET: "test-secret-at-least-32-characters-long!!",
  BETTER_AUTH_URL: "http://localhost:3020",
  GITHUB_CLIENT_ID: "test-github-client-id",
  GITHUB_CLIENT_SECRET: "test-github-client-secret",
  SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "11111111,22222222",
} as unknown as NodeJS.ProcessEnv;

const piloteA = {
  ok: true as const,
  githubUserId: "11111111",
  betterAuthUserId: "ba-user-a",
  actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
};

function futureWindow() {
  const issuedAt = new Date().toISOString();
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
  return { issuedAt, expiresAt };
}

function makeContract(
  overrides: Partial<AuthS1GovernedContractContext> & {
    executionContractId: string;
    action: string;
  },
): AuthS1GovernedContractContext {
  const base: AuthS1GovernedContractContext = {
    executionContractId: overrides.executionContractId,
    projectId: overrides.projectId ?? "prj:demo",
    action: overrides.action,
    target: overrides.target ?? "tgt:demo",
    scope: overrides.scope ?? "biz:shared-scope",
    requiredAuthority: overrides.requiredAuthority ?? "N1",
    requiredCapabilities: overrides.requiredCapabilities ?? ["cap:demo"],
    constraints: overrides.constraints ?? ["c:demo"],
    stopConditions: overrides.stopConditions ?? ["stop:demo"],
    evidenceRequirements: overrides.evidenceRequirements ?? ["evreq:demo"],
    reversibility: overrides.reversibility ?? "partially_reversible",
    idempotencyKey:
      overrides.idempotencyKey ?? `idem:${overrides.executionContractId}`,
  };
  if (overrides.decisionRefs !== undefined) {
    base.decisionRefs = overrides.decisionRefs;
  }
  if (overrides.cycleInstanceId !== undefined) {
    base.cycleInstanceId = overrides.cycleInstanceId;
  }
  if (overrides.inputs !== undefined) {
    base.inputs = overrides.inputs;
  }
  if (overrides.expectedOutputs !== undefined) {
    base.expectedOutputs = overrides.expectedOutputs;
  }
  if (overrides.executionWindowClass !== undefined) {
    base.executionWindowClass = overrides.executionWindowClass;
  }
  if (overrides.requiredAuthority !== undefined) {
    base.requiredAuthority = overrides.requiredAuthority;
  }
  return base;
}

function bindingScope(contract: AuthS1GovernedContractContext): string {
  return computeInspectionFingerprint(contract);
}

function makeEffects(
  effectClass: GovernedEffectsAuthorityInput["effectClass"],
  contract: AuthS1GovernedContractContext,
  extras: Partial<GovernedEffectsAuthorityInput> = {},
): GovernedEffectsAuthorityInput {
  return {
    effectClass,
    rollbackAvailable: extras.rollbackAvailable ?? true,
    protectedBoundaries: extras.protectedBoundaries ?? [],
    scopeIn: extras.scopeIn ?? contract.scope,
    target: extras.target ?? contract.target,
    claimedRequiredAuthority: extras.claimedRequiredAuthority,
  };
}

function issueFor(
  resolver: MemoryAuthorityResolver,
  contract: AuthS1GovernedContractContext,
  effectClass: GovernedEffectsAuthorityInput["effectClass"],
  evidenceId: string,
  extras: Partial<GovernedEffectsAuthorityInput> = {},
) {
  const { issuedAt, expiresAt } = futureWindow();
  return issueS1AuthorityEvidence({
    pilote: piloteA,
    authorityResolver: resolver,
    contract,
    governedEffects: makeEffects(effectClass, contract, extras),
    issuedAt,
    expiresAt,
    evidenceId,
  });
}

describe("AUTH POLICY Morris BASE NONE + ACTION-SCOPED", () => {
  beforeEach(() => {
    resetSfiaAuthSingletonForTests();
  });
  afterEach(() => {
    resetSfiaAuthSingletonForTests();
    vi.restoreAllMocks();
  });

  it("POLICY-01 login only → actor authority none; no S1", () => {
    expect(piloteA.actor.authorityLevel).toBe("none");
    expect(resolvePiloteS1AuthorityLevel().ok).toBe(false);
    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      issuedAt,
      expiresAt,
    });
    expect(issued.ok).toBe(false);
    if (!issued.ok) {
      expect(issued.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }
  });

  it("POLICY-02 trusted N1 effect → exact S1 N1; canActAsMorris=false", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:pol02",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "read", "evd:pol02");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N1");
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(issued.evidence.scope).toBe(bindingScope(contract));
    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
  });

  it("POLICY-03 trusted N2 effect → exact S1 N2", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:pol03",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const issued = issueFor(resolver, contract, "commit", "evd:pol03");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N2");
    expect(issued.evidence.scope).toBe(bindingScope(contract));
  });

  it("POLICY-04 trusted N3 effect → exact S1 N3", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:pol04",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "push", "evd:pol04");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N3");
    expect(issued.evidence.canActAsMorris).toBe(false);
  });

  it("POLICY-05 MORRIS / Morris construction gate → FAIL-CLOSED", () => {
    const gate = resolvePiloteS1AuthorityFromGovernedContract({
      contract: makeContract({
        executionContractId: "xct:gate",
        action: "product:baseline-promotion",
      }),
      governedEffects: makeEffects(
        "baseline-promotion",
        makeContract({
          executionContractId: "xct:gate",
          action: "product:baseline-promotion",
        }),
        { rollbackAvailable: false },
      ),
    });
    expect(gate.ok).toBe(false);
    if (!gate.ok) expect(gate.code).toBe(MORRIS_GATE_REQUIRED);

    const claimMorris = resolvePiloteS1AuthorityFromGovernedContract({
      contract: makeContract({
        executionContractId: "xct:morris-claim",
        action: "product:read",
        requiredAuthority: "N1",
      }),
      governedEffects: makeEffects(
        "read",
        makeContract({
          executionContractId: "xct:morris-claim",
          action: "product:read",
        }),
        { claimedRequiredAuthority: "MORRIS" },
      ),
    });
    expect(claimMorris.ok).toBe(false);
    if (!claimMorris.ok) {
      expect(claimMorris.code).toBe(MORRIS_AUTHORITY_NOT_AVAILABLE);
    }

    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:pol05-n3",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const n3 = issueFor(resolver, contract, "push", "evd:pol05-n3");
    expect(n3.ok).toBe(true);
    if (!n3.ok) return;
    const verifyScope = resolveExecutionAuthorityVerifyScope({
      contractScope: contract.scope,
      evidence: n3.evidence,
      contractSemantic: contract,
    });
    const morrisCheck = verifyRequiredAuthority(resolver, {
      requiredAuthority: "MORRIS",
      actorId: piloteA.actor.actorId,
      scope: verifyScope,
      evidenceId: n3.evidence.evidenceId,
    });
    expect(morrisCheck.ok).toBe(false);
    expect(morrisCheck.reason).toBe("morris_gate_denied");
  });

  it("POLICY-06 client claims N1 while server requires N3 → no downgrade", () => {
    const contract = makeContract({
      executionContractId: "xct:pol06",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("push", contract, {
        claimedRequiredAuthority: "N1",
      }),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("POLICY-07 client claims N3 while server requires N1 → no self-escalation", () => {
    const contract = makeContract({
      executionContractId: "xct:pol07",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("read", contract, {
        claimedRequiredAuthority: "N3",
      }),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("POLICY-08 client claims MORRIS → denied; canActAsMorris false", () => {
    const contract = makeContract({
      executionContractId: "xct:pol08",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("commit", contract, {
        claimedRequiredAuthority: "MORRIS",
      }),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(MORRIS_AUTHORITY_NOT_AVAILABLE);
  });

  it("POLICY-09 no trusted requirement → PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN", () => {
    const r = resolvePiloteS1AuthorityLevel();
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
  });

  it("POLICY-10 malformed/unknown authority → fail closed", () => {
    const contract = makeContract({
      executionContractId: "xct:pol10",
      action: "product:read",
    });
    const unknown = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("unknown", contract),
    });
    expect(unknown.ok).toBe(false);
    if (!unknown.ok) expect(unknown.code).toBe(AUTHORITY_UNRESOLVED);

    const badClaim = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("read", contract, {
        claimedRequiredAuthority: "N9",
      }),
    });
    expect(badClaim.ok).toBe(false);
    if (!badClaim.ok) expect(badClaim.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("POLICY-11 contract binding — S1 for Contract A cannot authorize Contract B", () => {
    const resolver = new MemoryAuthorityResolver();
    const contractA = makeContract({
      executionContractId: "xct:pol11-a",
      action: "product:push",
      scope: "biz:shared",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contractA, "push", "evd:pol11");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    const contractB = makeContract({
      executionContractId: "xct:pol11-b",
      action: "product:push",
      scope: "biz:shared",
      requiredAuthority: "N3",
    });
    const cross = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N3",
      scope: bindingScope(contractB),
      evidenceId: issued.evidence.evidenceId,
    });
    expect(cross.ok).toBe(false);
    expect(cross.reason).toBe("scope_mismatch");
  });

  it("POLICY-12 middleware/session resolution does not issue S1", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);

    const resolver = new MemoryAuthorityResolver();
    const before = resolver.listByActor(piloteA.actor.actorId).length;
    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.actor.authorityLevel).toBe("none");
    expect(resolver.listByActor(piloteA.actor.actorId).length).toBe(before);
  });

  it("POLICY-13 cross-user session B + provider A → SESSION_USER_MISMATCH", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-b",
        name: "B",
        email: "b@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-b",
        userId: "ba-user-b",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("SESSION_USER_MISMATCH");
  });

  it("POLICY-14 protected hot path → zero GitHub provider network", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const hits: string[] = [];
    const original = globalThis.fetch;
    globalThis.fetch = vi.fn(async (input: RequestInfo | URL) => {
      hits.push(String(input));
      throw new Error("NETWORK");
    }) as typeof fetch;
    try {
      expect(vi.spyOn(auth.api, "accountInfo")).not.toHaveBeenCalled();
      await resolveCurrentAuthenticatedPilote({ auth, headers, env: TEST_ENV });
      expect(hits).toEqual([]);
    } finally {
      globalThis.fetch = original;
    }
  });

  it("POLICY-15 allowlist removal → deny before S1", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const denied = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: {
        ...TEST_ENV,
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "22222222",
      } as NodeJS.ProcessEnv,
    });
    expect(denied.ok).toBe(false);
    if (!denied.ok) expect(denied.code).toBe("ALLOWLIST_DENIED");
  });
});

describe("BYPASS — Auth S1 policy surface", () => {
  it("BYPASS-01 no public Auth export buildValidatedS1Evidence", () => {
    expect("buildValidatedS1Evidence" in AuthPublic).toBe(false);
    expect(
      (AuthPublic as Record<string, unknown>).buildValidatedS1Evidence,
    ).toBeUndefined();
  });

  it("BYPASS-02 no public Auth export registerS1EvidenceImmutable", () => {
    expect("registerS1EvidenceImmutable" in AuthPublic).toBe(false);
    expect(
      (AuthPublic as Record<string, unknown>).registerS1EvidenceImmutable,
    ).toBeUndefined();
  });

  it("BYPASS-03 no Auth N3 without canonical policy evaluation", () => {
    const effectsOnly = resolvePiloteS1AuthorityFromGovernedEffects({
      effectClass: "push",
      rollbackAvailable: true,
      scopeIn: "biz:x",
      target: "tgt:x",
    });
    expect(effectsOnly.ok).toBe(false);
    if (!effectsOnly.ok) {
      expect(effectsOnly.code).toBe(CONTRACT_CONTEXT_REQUIRED);
    }

    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      issuedAt,
      expiresAt,
      evidenceId: "evd:bypass03",
    });
    expect(issued.ok).toBe(false);
    expect(resolver.getEvidence("evd:bypass03")).toBeNull();
  });

  it("BYPASS-04 legitimate N3 hierarchy uses action-scoped issuance", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bypass04",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "push", "evd:bypass04");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N3");
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N2",
        scope: bindingScope(contract),
        evidenceId: issued.evidence.evidenceId,
      }).ok,
    ).toBe(true);
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N3",
        scope: bindingScope(contract),
        evidenceId: issued.evidence.evidenceId,
        requireMorrisGate: true,
      }).reason,
    ).toBe("morris_gate_denied");
  });
});

describe("BIND — ExecutionContract / action binding", () => {
  it("BIND-01 trusted read contract → exact N1 S1", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind01",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "read", "evd:bind01");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N1");
    expect(issued.evidence.scope).toBe(bindingScope(contract));
  });

  it("BIND-02 trusted commit contract → exact N2 S1", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind02",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const issued = issueFor(resolver, contract, "commit", "evd:bind02");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N2");
  });

  it("BIND-03 trusted push contract → exact N3 S1", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind03",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "push", "evd:bind03");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N3");
  });

  it("BIND-04 effects=push / contract requiredAuthority=N1 → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind04",
      action: "product:push",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "push", "evd:bind04");
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("BIND-05 effects=read / contract requiredAuthority=N3 → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind05",
      action: "product:read",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "read", "evd:bind05");
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("BIND-06 effects action ≠ contract action → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind06",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "push", "evd:bind06");
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("BIND-07 effects/contract scope mismatch → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind07",
      action: "product:read",
      scope: "biz:a",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "read", "evd:bind07", {
      scopeIn: "biz:b",
    });
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("BIND-08 target mismatch → DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:bind08",
      action: "product:read",
      target: "tgt:a",
      requiredAuthority: "N1",
    });
    const issued = issueFor(resolver, contract, "read", "evd:bind08", {
      target: "tgt:b",
    });
    expect(issued.ok).toBe(false);
    if (!issued.ok) expect(issued.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("BIND-09 unknown/missing trusted effect context → DENY", () => {
    const effectsOnly = resolvePiloteS1AuthorityFromGovernedEffects({
      effectClass: "read",
      rollbackAvailable: true,
      scopeIn: "biz:x",
      target: "tgt:x",
    });
    expect(effectsOnly.ok).toBe(false);
    if (!effectsOnly.ok) {
      expect(effectsOnly.code).toBe(CONTRACT_CONTEXT_REQUIRED);
    }

    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      issuedAt,
      expiresAt,
      evidenceId: "evd:bind09",
      contract: makeContract({
        executionContractId: "xct:bind09",
        action: "product:read",
      }),
      // missing governedEffects
    });
    expect(issued.ok).toBe(false);
    if (!issued.ok) {
      expect(issued.code).toBe(PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN);
    }
  });

  it("BIND-10 MORRIS contract/claim → DENY", () => {
    const contract = makeContract({
      executionContractId: "xct:bind10",
      action: "product:push",
      requiredAuthority: "MORRIS",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("push", contract),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(MORRIS_AUTHORITY_NOT_AVAILABLE);
  });

  it("BIND-11 morrisConstructionGateRequired → DENY", () => {
    const contract = makeContract({
      executionContractId: "xct:bind11",
      action: "product:doctrine-change",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("doctrine-change", contract, {
        rollbackAvailable: false,
      }),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(MORRIS_GATE_REQUIRED);
  });

  it("BIND-12 Contract A S1 cannot authorize Contract B (same actor/N/business scope)", () => {
    const resolver = new MemoryAuthorityResolver();
    const sharedBiz = "biz:identical-business-scope";
    const contractA = makeContract({
      executionContractId: "xct:bind12-a",
      action: "product:push",
      scope: sharedBiz,
      target: "tgt:same",
      requiredAuthority: "N3",
    });
    const contractB = makeContract({
      executionContractId: "xct:bind12-b",
      action: "product:push",
      scope: sharedBiz,
      target: "tgt:same",
      requiredAuthority: "N3",
    });
    const issuedA = issueFor(resolver, contractA, "push", "evd:bind12-a");
    expect(issuedA.ok).toBe(true);
    if (!issuedA.ok) return;

    // Adapter maps Auth S1 verify to executionContractId — not business scope.
    const scopeForB = resolveExecutionAuthorityVerifyScope({
      contractScope: contractB.scope,
      evidence: issuedA.evidence,
      contractSemantic: contractB,
    });
    expect(scopeForB).toBe(bindingScope(contractB));
    expect(scopeForB).not.toBe(issuedA.evidence.scope);

    const cross = resolver.verify({
      actorId: piloteA.actor.actorId,
      requiredLevel: "N3",
      scope: scopeForB,
      evidenceId: issuedA.evidence.evidenceId,
    });
    expect(cross.ok).toBe(false);
    expect(cross.reason).toBe("scope_mismatch");

    // Same business scope alone would have wrongly matched pre-correction.
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N3",
        scope: sharedBiz,
        evidenceId: issuedA.evidence.evidenceId,
      }).reason,
    ).toBe("scope_mismatch");
  });

  it("BIND-13 Contract A S1 cannot authorize Contract B with different action", () => {
    const resolver = new MemoryAuthorityResolver();
    const contractA = makeContract({
      executionContractId: "xct:bind13-a",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const contractB = makeContract({
      executionContractId: "xct:bind13-b",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const issuedA = issueFor(resolver, contractA, "read", "evd:bind13-a");
    expect(issuedA.ok).toBe(true);
    if (!issuedA.ok) return;
    const scopeB = resolveExecutionAuthorityVerifyScope({
      contractScope: contractB.scope,
      evidence: issuedA.evidence,
      contractSemantic: contractB,
    });
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N2",
        scope: scopeB,
        evidenceId: issuedA.evidence.evidenceId,
      }).reason,
    ).toBe("scope_mismatch");
  });

  it("BIND-14 Contract A S1 cannot authorize Contract B with different target/scope", () => {
    const resolver = new MemoryAuthorityResolver();
    const contractA = makeContract({
      executionContractId: "xct:bind14-a",
      action: "product:commit",
      scope: "biz:a",
      target: "tgt:a",
      requiredAuthority: "N2",
    });
    const contractB = makeContract({
      executionContractId: "xct:bind14-b",
      action: "product:commit",
      scope: "biz:b",
      target: "tgt:b",
      requiredAuthority: "N2",
    });
    const issuedA = issueFor(resolver, contractA, "commit", "evd:bind14-a");
    expect(issuedA.ok).toBe(true);
    if (!issuedA.ok) return;
    const scopeB = resolveExecutionAuthorityVerifyScope({
      contractScope: contractB.scope,
      evidence: issuedA.evidence,
      contractSemantic: contractB,
    });
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N2",
        scope: scopeB,
        evidenceId: issuedA.evidence.evidenceId,
      }).reason,
    ).toBe("scope_mismatch");
  });

  it("BIND-15 login/session/allowlist → authorityLevel=none and zero S1", async () => {
    expect(piloteA.actor.authorityLevel).toBe("none");
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const resolver = new MemoryAuthorityResolver();
    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.actor.authorityLevel).toBe("none");
    expect(resolver.listByActor(piloteA.actor.actorId)).toEqual([]);
  });
});

describe("REG — regression matrix", () => {
  beforeEach(() => {
    resetSfiaAuthSingletonForTests();
  });
  afterEach(() => {
    resetSfiaAuthSingletonForTests();
    vi.restoreAllMocks();
  });

  it("REG-01 session B + provider A still SESSION_USER_MISMATCH", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-b",
        name: "B",
        email: "b@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-b",
        userId: "ba-user-b",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const r = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: TEST_ENV,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("SESSION_USER_MISMATCH");
  });

  it("REG-02 allowlist removal still denies before S1", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const denied = await resolveCurrentAuthenticatedPilote({
      auth,
      headers,
      env: {
        ...TEST_ENV,
        SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS: "22222222",
      } as NodeJS.ProcessEnv,
    });
    expect(denied.ok).toBe(false);
    if (!denied.ok) expect(denied.code).toBe("ALLOWLIST_DENIED");
  });

  it("REG-03 protected Auth identity hot path still zero GitHub provider network", async () => {
    const auth = createSfiaAuth({ env: TEST_ENV });
    const headers = await headersWithAccountCookie({
      auth,
      userId: "ba-user-a",
      accountId: "11111111",
    });
    vi.spyOn(auth.api, "getSession").mockResolvedValue({
      user: {
        id: "ba-user-a",
        name: "A",
        email: "a@example.com",
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      session: {
        id: "sess-a",
        userId: "ba-user-a",
        token: "t",
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: new Date(Date.now() + 60_000),
      },
    } as never);
    const hits: string[] = [];
    const original = globalThis.fetch;
    globalThis.fetch = vi.fn(async (input: RequestInfo | URL) => {
      hits.push(String(input));
      throw new Error("NETWORK");
    }) as typeof fetch;
    try {
      await resolveCurrentAuthenticatedPilote({ auth, headers, env: TEST_ENV });
      expect(hits).toEqual([]);
    } finally {
      globalThis.fetch = original;
    }
  });

  it("REG-04 TTL max remains bounded to session max", () => {
    const { validateS1EvidenceLifetime } = AuthPublic;
    const issuedAt = "2026-09-04T12:00:00.000Z";
    const over = new Date(
      Date.parse(issuedAt) + (AuthPublic.SESSION_COOKIE_MAX_AGE_SECONDS + 1) * 1000,
    ).toISOString();
    const r = validateS1EvidenceLifetime({ issuedAt, expiresAt: over });
    expect(r.ok).toBe(false);
  });

  it("REG-05 duplicate evidenceId remains fail-closed", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:reg05",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const first = issueFor(resolver, contract, "read", "evd:reg05");
    expect(first.ok).toBe(true);
    const second = issueFor(resolver, contract, "read", "evd:reg05");
    expect(second.ok).toBe(false);
    if (!second.ok) expect(second.code).toBe("EVIDENCE_ID_COLLISION");
    expect(resolver.getEvidence("evd:reg05")?.level).toBe("N1");
    expect(resolver.getEvidence("evd:reg05")?.canActAsMorris).toBe(false);
  });

  it("REG-06 expired S1 remains denied", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:reg06",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      contract,
      governedEffects: makeEffects("read", contract),
      issuedAt: "2020-01-01T00:00:00.000Z",
      expiresAt: "2020-01-01T01:00:00.000Z",
      evidenceId: "evd:reg06",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N1",
        scope: bindingScope(contract),
        evidenceId: "evd:reg06",
      }).reason,
    ).toBe("expired");
  });

  it("REG-07 N2 cannot satisfy N3", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:reg07",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const issued = issueFor(resolver, contract, "commit", "evd:reg07");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N3",
        scope: bindingScope(contract),
        evidenceId: issued.evidence.evidenceId,
      }).reason,
    ).toBe("level_insufficient");
  });

  it("REG-08 N3 cannot satisfy MORRIS", () => {
    const resolver = new MemoryAuthorityResolver();
    const contract = makeContract({
      executionContractId: "xct:reg08",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const issued = issueFor(resolver, contract, "push", "evd:reg08");
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(
      resolver.verify({
        actorId: piloteA.actor.actorId,
        requiredLevel: "N3",
        scope: bindingScope(contract),
        evidenceId: issued.evidence.evidenceId,
        requireMorrisGate: true,
      }).reason,
    ).toBe("morris_gate_denied");
  });
});

describe("AUTHSEM — contract authority precedence", () => {
  it("AUTHSEM-A01 contract.requiredAuthority missing → DENY", () => {
    const base = makeContract({
      executionContractId: "xct:authsem-a01",
      action: "product:read",
      requiredAuthority: "N1",
    });
    const { requiredAuthority: _drop, ...without } = base;
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract: without as AuthS1GovernedContractContext,
      governedEffects: makeEffects("read", base),
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(AUTHORITY_REQUIREMENT_UNTRUSTED);
  });

  it("AUTHSEM-A02 contract=N1 / projection=N3 / hostile effects.contractRequiredAuthority=N3 → DENY", () => {
    const contract = makeContract({
      executionContractId: "xct:authsem-a02",
      action: "product:push",
      requiredAuthority: "N1",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: {
        ...makeEffects("push", contract),
        contractRequiredAuthority: "N3",
      } as GovernedEffectsAuthorityInput & {
        contractRequiredAuthority: "N3";
      },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("AUTHSEM-A03 contract=N3 / projection=N1 / hostile effects.contractRequiredAuthority=N1 → DENY", () => {
    const contract = makeContract({
      executionContractId: "xct:authsem-a03",
      action: "product:read",
      requiredAuthority: "N3",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: {
        ...makeEffects("read", contract),
        contractRequiredAuthority: "N1",
      } as GovernedEffectsAuthorityInput & {
        contractRequiredAuthority: "N1";
      },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
  });

  it("AUTHSEM-A04 contract=N3 / projection=N3 → PASS", () => {
    const contract = makeContract({
      executionContractId: "xct:authsem-a04",
      action: "product:push",
      requiredAuthority: "N3",
    });
    const r = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("push", contract),
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.level).toBe("N3");
    expect(r.authorityBindingScope).toBe(bindingScope(contract));
  });

  it("AUTHSEM-A05 claimedRequiredAuthority cannot alter result", () => {
    const contract = makeContract({
      executionContractId: "xct:authsem-a05",
      action: "product:commit",
      requiredAuthority: "N2",
    });
    const escalate = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("commit", contract, {
        claimedRequiredAuthority: "N3",
      }),
    });
    expect(escalate.ok).toBe(false);
    if (!escalate.ok) {
      expect(escalate.code).toBe(AUTHORITY_REQUIREMENT_MISMATCH);
    }

    const ok = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: makeEffects("commit", contract, {
        claimedRequiredAuthority: "N2",
      }),
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    expect(ok.level).toBe("N2");
  });
});
