/**
 * MW6 REAL authorization runtime bridge — B01–B20 deterministic matrix.
 *
 * Server-owned SFIA_MW6_REAL_PROOF_GRANT_JSON consumer.
 * ZERO OpenAI LIVE / ZERO hosted web_search REAL dispatch.
 *
 * @vitest-environment node
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision/infrastructure/memoryAuthorityResolver";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import {
  MW6_EXTERNAL_DISCOVERY_ACTION,
} from "@/lib/auth";
import {
  buildMw6CurrentExternalDiscoveryIntent,
  buildMw6ExternalDiscoveryContractSemantic,
  computeMw6CurrentIntentFingerprint,
  issueMw6ExternalDiscoveryS1,
  type Mw6ExternalDiscoveryContractInput,
} from "@/lib/auth/mw6ExternalDiscoveryBinding";
import {
  acquireNoraCampaignBudget,
  evaluateRealSourceExecutionPreflight,
  MW6_REAL_PROOF_GRANT_ENV,
  MW6_REAL_PROOF_PURPOSE,
  matchMw6RealProofGrant,
  parseMw6RealProofGrantJson,
  resolveMw6RealAuthorization,
  type Mw6CheckExecutionAuthorizationPort,
  type Mw6GetExecutionContractPort,
  type Mw6GovernedAuthorityContext,
  type Mw6RealProofGrantV1,
} from "@/lib/nora-cognitive-runtime";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";
import {
  DELEGATE_ACTOR,
  buildStack,
  buildValidatedContract,
  grantConfirmation,
  registerDelegate,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
  type Stack,
} from "@/__tests__/oa/execution-contract/helpers";
import {
  bindSourceProviderCapability,
  decideSourceStrategy,
} from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import type { SourceStrategyInput } from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
} from "@/__tests__/project-assistant/w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { ActorReference } from "@/lib/oa/decision";

const CLAIM =
  "corroborate externally the current CEO of Acme Corp";
const NOW = "2026-09-05T12:00:00.000Z";
const FUTURE = "2026-09-06T12:00:00.000Z";
const PAST = "2026-09-04T12:00:00.000Z";

function makePilote(
  githubUserId: string,
): Extract<ResolveCurrentPiloteResult, { ok: true }> {
  return {
    ok: true,
    githubUserId,
    betterAuthUserId: `ba-user-${githubUserId}`,
    actor: mapGithubIdentityToPiloteActor({ githubUserId }),
  };
}

function productContext(input: {
  campaignId: string;
  strategyInput?: SourceStrategyInput;
}) {
  const strategy = decideSourceStrategy(
    input.strategyInput ?? {
      claimText: CLAIM,
      requiresExternalCorroboration: true,
    },
  );
  const binding = bindSourceProviderCapability(strategy);
  return {
    strategy,
    binding,
    context: {
      strategy,
      binding,
      campaignId: input.campaignId,
    },
  };
}

async function seedConfirmedExternalDiscovery(input: {
  stack: Stack;
  campaignId: string;
  executionContractId: string;
  decisionId: string;
  cycleInstanceId: string;
  confirmationId: string;
  strategyInput?: SourceStrategyInput;
  humanActor?: typeof DELEGATE_ACTOR;
  registryEvidenceId?: string;
}): Promise<{
  intent: Mw6ExternalDiscoveryContractInput;
  fingerprint: string;
  product: ReturnType<typeof productContext>;
}> {
  const humanActor = input.humanActor ?? DELEGATE_ACTOR;
  const registryEvidenceId =
    input.registryEvidenceId ?? `evd:registry-${input.executionContractId}`;
  const product = productContext({
    campaignId: input.campaignId,
    strategyInput: input.strategyInput,
  });
  const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
    executionContractId: input.executionContractId,
    projectId: "prj:campus360-oa",
    campaignId: input.campaignId,
    strategy: product.strategy,
    binding: product.binding,
    decisionRefs: [input.decisionId],
    idempotencyKey: `idem:${input.executionContractId}`,
    cycleInstanceId: input.cycleInstanceId,
  });
  expect(intentBuilt.ok).toBe(true);
  if (!intentBuilt.ok) throw new Error(intentBuilt.reason);
  const intent = intentBuilt.intent;
  const semantic = buildMw6ExternalDiscoveryContractSemantic(intent);
  const { fingerprint } = computeMw6CurrentIntentFingerprint(intent);

  input.stack.decisions.authority.register({
    evidenceId: registryEvidenceId,
    actorId: humanActor.actorId,
    level: "N2",
    scope: semantic.scope,
    issuedAt: "2026-07-01T00:00:00.000Z",
    source: "registry",
  });

  const { contractId, version } = await buildValidatedContract(input.stack, {
    executionContractId: intent.executionContractId,
    projectId: intent.projectId,
    decisionRefs: [input.decisionId],
    action: semantic.action,
    target: semantic.target,
    scope: semantic.scope,
    inputs: semantic.inputs as Record<string, unknown> | undefined,
    expectedOutputs: semantic.expectedOutputs,
    requiredCapabilities: [...semantic.requiredCapabilities],
    requiredAuthority: "N2",
    constraints: [...semantic.constraints],
    stopConditions: [...semantic.stopConditions],
    evidenceRequirements: [...semantic.evidenceRequirements],
    reversibility: semantic.reversibility,
    idempotencyKey: intent.idempotencyKey,
    cycleInstanceId: intent.cycleInstanceId,
    actor: humanActor,
    authorityEvidenceId: registryEvidenceId,
  });

  const cfmId = await grantConfirmation(input.stack, {
    confirmationId: input.confirmationId,
    level: "N2",
    scope: semantic.scope,
    decisionRef: input.decisionId,
    actor: humanActor,
    evidenceId: registryEvidenceId,
  });

  const confirmed = await input.stack.execution.confirmExecutionContract.execute({
    executionContractId: contractId,
    confirmationId: cfmId,
    actor: humanActor,
    authorityEvidenceId: registryEvidenceId,
    expectedVersion: version,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");

  return { intent, fingerprint, product };
}

function portsFromStack(stack: Stack): {
  getExecutionContract: Mw6GetExecutionContractPort;
  checkExecutionAuthorization: Mw6CheckExecutionAuthorizationPort;
} {
  return {
    getExecutionContract: stack.execution.getExecutionContract,
    checkExecutionAuthorization: stack.execution.checkExecutionAuthorization,
  };
}

function govRefs(input: {
  actorId: string;
  evidenceId: string;
  executionContractId: string;
  resolver: MemoryAuthorityResolver;
  stack: Stack;
}): Mw6GovernedAuthorityContext {
  const ports = portsFromStack(input.stack);
  return {
    actorId: input.actorId,
    authorityEvidenceId: input.evidenceId,
    executionContractId: input.executionContractId,
    requiredLevel: "N2",
    getExecutionContract: ports.getExecutionContract,
    checkExecutionAuthorization: ports.checkExecutionAuthorization,
    authorityResolver: input.resolver,
  };
}

function baseGrant(overrides: Partial<Mw6RealProofGrantV1> & {
  projectId: string;
  executionContractId: string;
  semanticFingerprint: string;
}): Mw6RealProofGrantV1 {
  return {
    version: "v1",
    purpose: MW6_REAL_PROOF_PURPOSE,
    decisionRef: "TEST:mw6-real-bridge-b12",
    action: MW6_EXTERNAL_DISCOVERY_ACTION,
    requiredAuthority: "N2",
    expiresAt: FUTURE,
    ...overrides,
  };
}

function setGrantEnv(grant: Mw6RealProofGrantV1 | Record<string, unknown>) {
  process.env[MW6_REAL_PROOF_GRANT_ENV] = JSON.stringify(grant);
}

function clearGrantEnv() {
  delete process.env[MW6_REAL_PROOF_GRANT_ENV];
}

async function seedAuthorityBoundStack(suffix: string) {
  const stack = buildStack();
  await seedProject(stack.projects);
  registerDelegate(stack.decisions.authority, "subj:exec-gate");
  const decisionId = await seedAcceptedDecision(stack, {
    decisionId: `dec:bridge-${suffix}`,
    authority: "delegated",
    actor: DELEGATE_ACTOR,
    evidenceId: "evd:delegate-n2",
  });
  await seedStandardCycle(stack, `cyc:bridge-${suffix}`);
  const campaignId = `camp-bridge-${suffix}`;
  const seeded = await seedConfirmedExternalDiscovery({
    stack,
    campaignId,
    executionContractId: `xct:bridge-${suffix}`,
    decisionId,
    cycleInstanceId: `cyc:bridge-${suffix}`,
    confirmationId: `cfm:bridge-${suffix}`,
  });
  const pilote = makePilote("11111111");
  const issueResolver = new MemoryAuthorityResolver();
  const issued = issueMw6ExternalDiscoveryS1({
    pilote,
    authorityResolver: issueResolver,
    contract: seeded.intent,
    evidenceId: `evd:bridge-${suffix}-s1`,
  });
  expect(issued.ok).toBe(true);
  if (!issued.ok) throw new Error("s1 failed");
  // Mirror S1 onto the stack resolver used by CheckExecutionAuthorization + verify.
  stack.decisions.authority.register({ ...issued.evidence });
  const campaign = acquireNoraCampaignBudget({
    campaignId,
    maxModelInvocations: 4,
    maxHostedWebOperations: 2,
  });
  return {
    stack,
    seeded,
    pilote,
    issued,
    campaign,
    campaignId,
    fingerprint: seeded.fingerprint,
  };
}

describe("MW6 REAL authorization bridge — parser/matcher", () => {
  afterEach(() => {
    clearGrantEnv();
  });

  it("B01 — GRANT_ABSENT default deny", () => {
    const parsed = parseMw6RealProofGrantJson(undefined);
    expect(parsed.ok).toBe(false);
    if (parsed.ok) return;
    expect(parsed.code).toBe("GRANT_ABSENT");
    const decision = resolveMw6RealAuthorization({
      context: {
        projectId: "p",
        executionContractId: "x",
        action: MW6_EXTERNAL_DISCOVERY_ACTION,
        requiredAuthority: "N2",
        semanticFingerprint: "fp",
        nowIso: NOW,
      },
      grantJson: null,
    });
    expect(decision.authorized).toBe(false);
    expect(decision.code).toBe("GRANT_ABSENT");
  });

  it("B02 — malformed grant fail-closed", () => {
    expect(parseMw6RealProofGrantJson("{").ok).toBe(false);
    expect(parseMw6RealProofGrantJson("null").ok).toBe(false);
    expect(parseMw6RealProofGrantJson("[]").ok).toBe(false);
    expect(
      parseMw6RealProofGrantJson(JSON.stringify({ version: "v2" })).ok,
    ).toBe(false);
  });

  it("B03 — expired grant DENY", () => {
    const grant = baseGrant({
      projectId: "p",
      executionContractId: "x",
      semanticFingerprint: "fp",
      expiresAt: PAST,
    });
    const parsed = parseMw6RealProofGrantJson(JSON.stringify(grant));
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    const d = matchMw6RealProofGrant(parsed.grant, {
      projectId: "p",
      executionContractId: "x",
      action: MW6_EXTERNAL_DISCOVERY_ACTION,
      requiredAuthority: "N2",
      semanticFingerprint: "fp",
      nowIso: NOW,
    });
    expect(d.authorized).toBe(false);
    expect(d.code).toBe("GRANT_EXPIRED");
    expect(d.expired).toBe(true);
  });

  it("B04 — wrong purpose DENY", () => {
    const raw = JSON.stringify({
      ...baseGrant({
        projectId: "p",
        executionContractId: "x",
        semanticFingerprint: "fp",
      }),
      purpose: "other_purpose",
    });
    const parsed = parseMw6RealProofGrantJson(raw);
    expect(parsed.ok).toBe(false);
  });

  it("B05–B09 — exact-scope mismatches DENY", () => {
    const grant = baseGrant({
      projectId: "prj:a",
      executionContractId: "xct:a",
      semanticFingerprint: "fp-a",
      campaignId: "camp-a",
    });
    const ctx = {
      projectId: "prj:a",
      executionContractId: "xct:a",
      action: MW6_EXTERNAL_DISCOVERY_ACTION,
      requiredAuthority: "N2" as const,
      semanticFingerprint: "fp-a",
      campaignId: "camp-a",
      nowIso: NOW,
    };
    expect(
      matchMw6RealProofGrant(grant, { ...ctx, projectId: "prj:b" }).code,
    ).toBe("PROJECT_MISMATCH");
    expect(
      matchMw6RealProofGrant(grant, {
        ...ctx,
        executionContractId: "xct:b",
      }).code,
    ).toBe("EXECUTION_CONTRACT_MISMATCH");
    expect(
      matchMw6RealProofGrant(grant, {
        ...ctx,
        action: "product:other",
      }).code,
    ).toBe("ACTION_MISMATCH");
    expect(
      matchMw6RealProofGrant(
        { ...grant, requiredAuthority: "N2" },
        { ...ctx, semanticFingerprint: "fp-b" },
      ).code,
    ).toBe("SEMANTIC_FINGERPRINT_MISMATCH");
    const wrongAction = parseMw6RealProofGrantJson(
      JSON.stringify({ ...grant, action: "external_discovery" }),
    );
    expect(wrongAction.ok).toBe(false);
    const wrongAuth = parseMw6RealProofGrantJson(
      JSON.stringify({ ...grant, requiredAuthority: "N1" }),
    );
    expect(wrongAuth.ok).toBe(false);
  });

  it("B20 — decisionRef is opaque non-empty provenance only", () => {
    expect(
      parseMw6RealProofGrantJson(
        JSON.stringify(
          baseGrant({
            projectId: "p",
            executionContractId: "x",
            semanticFingerprint: "fp",
            decisionRef: "",
          }),
        ),
      ).ok,
    ).toBe(false);
    expect(
      parseMw6RealProofGrantJson(
        JSON.stringify(
          baseGrant({
            projectId: "p",
            executionContractId: "x",
            semanticFingerprint: "fp",
            decisionRef: "   ",
          }),
        ),
      ).ok,
    ).toBe(false);
    const ok = parseMw6RealProofGrantJson(
      JSON.stringify(
        baseGrant({
          projectId: "p",
          executionContractId: "x",
          semanticFingerprint: "fp",
          decisionRef: "TEST:opaque-provenance-ref",
        }),
      ),
    );
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    // decisionRef content does not create authority — match still requires exact scope.
    const deniedByScope = matchMw6RealProofGrant(ok.grant, {
      projectId: "other",
      executionContractId: "x",
      action: MW6_EXTERNAL_DISCOVERY_ACTION,
      requiredAuthority: "N2",
      semanticFingerprint: "fp",
      nowIso: NOW,
    });
    expect(deniedByScope.authorized).toBe(false);
    expect(deniedByScope.code).toBe("PROJECT_MISMATCH");
  });

  it("CAMP-01…05 — campaign optional-in-grant / exact when present", () => {
    const base = baseGrant({
      projectId: "prj:a",
      executionContractId: "xct:a",
      semanticFingerprint: "fp-a",
      decisionRef: "TEST:camp-matrix",
    });
    const ctxBase = {
      projectId: "prj:a",
      executionContractId: "xct:a",
      action: MW6_EXTERNAL_DISCOVERY_ACTION,
      requiredAuthority: "N2" as const,
      semanticFingerprint: "fp-a",
      nowIso: NOW,
    };
    // CAMP-01 — grant no campaign, context no campaign → campaign does not deny
    expect(
      matchMw6RealProofGrant(base, ctxBase).authorized,
    ).toBe(true);
    // CAMP-02 — grant no campaign, context camp-A → campaign criterion allows
    expect(
      matchMw6RealProofGrant(base, { ...ctxBase, campaignId: "camp-A" })
        .authorized,
    ).toBe(true);
    // CAMP-03 — grant camp-A, context camp-A → PASS
    expect(
      matchMw6RealProofGrant(
        { ...base, campaignId: "camp-A" },
        { ...ctxBase, campaignId: "camp-A" },
      ).authorized,
    ).toBe(true);
    // CAMP-04 — grant camp-A, context camp-B → CAMPAIGN_MISMATCH
    const mismatch = matchMw6RealProofGrant(
      { ...base, campaignId: "camp-A" },
      { ...ctxBase, campaignId: "camp-B" },
    );
    expect(mismatch.authorized).toBe(false);
    expect(mismatch.code).toBe("CAMPAIGN_MISMATCH");
    // CAMP-05 BLOCKING — grant camp-A, context absent → CAMPAIGN_MISMATCH
    const absentCtx = matchMw6RealProofGrant(
      { ...base, campaignId: "camp-A" },
      ctxBase,
    );
    expect(absentCtx.authorized).toBe(false);
    expect(absentCtx.code).toBe("CAMPAIGN_MISMATCH");
    expect(absentCtx.matchedScope).toBe(false);
  });

  it("invalid timestamp fail-closed", () => {
    const raw = JSON.stringify({
      ...baseGrant({
        projectId: "p",
        executionContractId: "x",
        semanticFingerprint: "fp",
      }),
      expiresAt: "not-a-date",
    });
    expect(parseMw6RealProofGrantJson(raw).ok).toBe(false);
  });
});

describe("MW6 REAL authorization bridge — preflight B01–B18", () => {
  afterEach(() => {
    clearGrantEnv();
  });

  it("B01/B11 — default deny preserves AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED", async () => {
    const ctx = await seedAuthorityBoundStack("b01");
    clearGrantEnv();
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.authorityBound).toBe(true);
    expect(pre.realAuthorized).toBe(false);
    expect(pre.eligible).toBe(false);
    expect(pre.code).toBe("AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED");
  });

  it("B02 — malformed env grant does not open REAL", async () => {
    const ctx = await seedAuthorityBoundStack("b02");
    process.env[MW6_REAL_PROOF_GRANT_ENV] = "{not-json";
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.realAuthorized).toBe(false);
    expect(pre.eligible).toBe(false);
  });

  it("B03 — expired exact grant DENY realAuthorized", async () => {
    const ctx = await seedAuthorityBoundStack("b03");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: ctx.fingerprint,
        campaignId: ctx.campaignId,
        expiresAt: PAST,
        decisionRef: "TEST:b03-expired",
      }),
    );
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.authorityBound).toBe(true);
    expect(pre.realAuthorized).toBe(false);
    expect(pre.eligible).toBe(false);
  });

  it("B05 — wrong project DENY", async () => {
    const ctx = await seedAuthorityBoundStack("b05");
    setGrantEnv(
      baseGrant({
        projectId: "prj:wrong",
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: ctx.fingerprint,
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b05",
      }),
    );
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.realAuthorized).toBe(false);
    expect(pre.eligible).toBe(false);
  });

  it("B06 — wrong EC DENY", async () => {
    const ctx = await seedAuthorityBoundStack("b06");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: "xct:other",
        semanticFingerprint: ctx.fingerprint,
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b06",
      }),
    );
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.realAuthorized).toBe(false);
  });

  it("B09 — wrong semantic fingerprint DENY", async () => {
    const ctx = await seedAuthorityBoundStack("b09");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: "deadbeef",
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b09",
      }),
    );
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.realAuthorized).toBe(false);
  });

  it("B10 — REAL grant exact + authority not bound → realAuthorized may be true, eligible=false", async () => {
    const ctx = await seedAuthorityBoundStack("b10");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: ctx.fingerprint,
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b10",
      }),
    );
    // Wrong actor/evidence → CheckExecutionAuthorization fails after fingerprint.
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: "actor:hostile-unbound",
        evidenceId: "evd:missing",
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.realAuthorized).toBe(true);
    expect(pre.eligible).toBe(false);
  });

  it("B12 — exact both axes → eligible=true (no network)", async () => {
    const ctx = await seedAuthorityBoundStack("b12");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: ctx.fingerprint,
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b12-both-axes",
      }),
    );
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
      // Hostile caller fields — must not affect (B13/B14)
      realAuthorized: true,
      morrisGo: true,
      allowReal: true,
      mw6RealProofGrant: { authorized: true },
    });
    expect(pre.authorityBound).toBe(true);
    expect(pre.realAuthorized).toBe(true);
    expect(pre.eligible).toBe(true);
    expect(pre.blocked).toBe(false);
    expect(pre.code).toBe("OK");
  });

  it("B13/B14 — client hostile booleans/grant objects ignored without env grant", async () => {
    const ctx = await seedAuthorityBoundStack("b13");
    clearGrantEnv();
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
      realAuthorized: true,
      realAuthorization: { authorized: true },
      morrisGo: true,
      realGate: true,
      goReal: true,
      allowReal: true,
      mw6RealProofGrant: baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: ctx.fingerprint,
      }),
    });
    expect(pre.realAuthorized).toBe(false);
    expect(pre.eligible).toBe(false);
  });

  it("B15 — N1 evidence insufficient for N2 → eligible=false even with REAL grant", async () => {
    const ctx = await seedAuthorityBoundStack("b15");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: ctx.fingerprint,
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b15",
      }),
    );
    // Register N1-only evidence for a different id; use it as authorityEvidenceId.
    const n1Id = "evd:bridge-b15-n1";
    ctx.stack.decisions.authority.register({
      evidenceId: n1Id,
      actorId: ctx.pilote.actor.actorId,
      level: "N1",
      scope: ctx.fingerprint,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: n1Id,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.eligible).toBe(false);
    expect(pre.authorityBound).toBe(false);
  });

  it("B16 — confirmation missing → eligible=false with valid REAL grant", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:bridge-b16",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:bridge-b16");
    const campaignId = "camp-bridge-b16";
    const product = productContext({ campaignId });
    const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
      executionContractId: "xct:bridge-b16",
      projectId: "prj:campus360-oa",
      campaignId,
      strategy: product.strategy,
      binding: product.binding,
      decisionRefs: [decisionId],
      idempotencyKey: "idem:xct:bridge-b16",
      cycleInstanceId: "cyc:bridge-b16",
    });
    expect(intentBuilt.ok).toBe(true);
    if (!intentBuilt.ok) return;
    const semantic = buildMw6ExternalDiscoveryContractSemantic(intentBuilt.intent);
    const { fingerprint } = computeMw6CurrentIntentFingerprint(intentBuilt.intent);
    stack.decisions.authority.register({
      evidenceId: "evd:b16-build",
      actorId: DELEGATE_ACTOR.actorId,
      level: "N2",
      scope: semantic.scope,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });
    await buildValidatedContract(stack, {
      executionContractId: intentBuilt.intent.executionContractId,
      projectId: intentBuilt.intent.projectId,
      decisionRefs: [decisionId],
      action: semantic.action,
      target: semantic.target,
      scope: semantic.scope,
      inputs: semantic.inputs as Record<string, unknown> | undefined,
      expectedOutputs: semantic.expectedOutputs,
      requiredCapabilities: [...semantic.requiredCapabilities],
      requiredAuthority: "N2",
      constraints: [...semantic.constraints],
      stopConditions: [...semantic.stopConditions],
      evidenceRequirements: [...semantic.evidenceRequirements],
      reversibility: semantic.reversibility,
      idempotencyKey: intentBuilt.intent.idempotencyKey,
      cycleInstanceId: intentBuilt.intent.cycleInstanceId,
      actor: DELEGATE_ACTOR,
      authorityEvidenceId: "evd:b16-build",
    });
    setGrantEnv(
      baseGrant({
        projectId: intentBuilt.intent.projectId,
        executionContractId: intentBuilt.intent.executionContractId,
        semanticFingerprint: fingerprint,
        campaignId,
        decisionRef: "TEST:b16",
      }),
    );
    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 4,
      maxHostedWebOperations: 2,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: product.context,
      governedAuthority: govRefs({
        actorId: DELEGATE_ACTOR.actorId,
        evidenceId: "evd:b16-build",
        executionContractId: intentBuilt.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    expect(pre.eligible).toBe(false);
    expect(pre.authorityBound).toBe(false);
  });

  it("B17 — stale fingerprint grant DENY", async () => {
    const ctx = await seedAuthorityBoundStack("b17");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: "stale-semantic-fingerprint",
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b17",
      }),
    );
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: ctx.campaign,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.realAuthorized).toBe(false);
    expect(pre.eligible).toBe(false);
  });

  it("B18 — budget exhausted → not eligible despite both axes", async () => {
    const ctx = await seedAuthorityBoundStack("b18");
    setGrantEnv(
      baseGrant({
        projectId: ctx.seeded.intent.projectId,
        executionContractId: ctx.seeded.intent.executionContractId,
        semanticFingerprint: ctx.fingerprint,
        campaignId: ctx.campaignId,
        decisionRef: "TEST:b18",
      }),
    );
    const exhausted = acquireNoraCampaignBudget({
      campaignId: `${ctx.campaignId}-exhausted`,
      maxModelInvocations: 4,
      maxHostedWebOperations: 0,
    });
    // Campaign id on lease must match product context — remount context.
    const product = productContext({ campaignId: exhausted.campaignId });
    // Re-seed is heavy; instead use same campaign with hosted already at cap.
    // Prefer: claim all hosted on original campaign.
    const camp = ctx.campaign;
    // Consume hosted ops if API allows — otherwise use zero-cap with matching seed.
    // Zero-cap campaign requires matching EC campaignId in grant+context — use
    // original stack with a fresh zero-hosted campaign id requires EC rebuild.
    // Simpler: evaluate capability via original campaign after marking blocked /
    // consuming. Use maxHostedWebOperations:0 with rebuilt context matching grant.
    void product;
    void exhausted;
    // Consume both hosted slots on the bound campaign.
    const { claimHostedWebOperations } = await import(
      "@/lib/nora-cognitive-runtime/campaignBudget"
    );
    claimHostedWebOperations(camp, 2);
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign: camp,
      wantHostedWebSearch: true,
      nowIso: NOW,
      currentProductContext: ctx.seeded.product.context,
      governedAuthority: govRefs({
        actorId: ctx.pilote.actor.actorId,
        evidenceId: ctx.issued.evidence.evidenceId,
        executionContractId: ctx.seeded.intent.executionContractId,
        resolver: ctx.stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack: ctx.stack,
      }),
    });
    expect(pre.authorityBound).toBe(true);
    expect(pre.realAuthorized).toBe(true);
    expect(pre.eligible).toBe(false);
    expect(pre.capabilitySatisfied).toBe(false);
  });
});

describe("MW6 REAL authorization bridge — product path B12/B19", () => {
  const HUMAN_ACTOR: ActorReference = {
    actorId: "actor:mw6-hd-human",
    role: "project_owner",
    displayName: "MW6 HD",
    authorityLevel: "N2",
  };

  let runtime: RuntimeApplicationService;
  let projectId: string;
  let cycleInstanceId: string;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    clearGrantEnv();
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("mw6-bridge.sqlite"),
      idPrefix: "mw6b",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "bridge" });
    projectId = seeded.projectId;
    cycleInstanceId = seeded.cycleInstanceId;
  });

  afterEach(() => {
    clearGrantEnv();
    cleanupW2TempDirs();
    setConversationProviderForTests(null);
  });

  async function seedAcceptedDecisionOnRuntime(input: {
    decisionId: string;
  }): Promise<void> {
    const oa = runtime.oa!;
    const subject = "subj:mw6-ext-discovery";
    try {
      oa.authorityResolver.register({
        evidenceId: "evd:registry-mw6-hd",
        actorId: HUMAN_ACTOR.actorId,
        level: "N2",
        scope: subject,
        issuedAt: "2026-07-01T00:00:00.000Z",
        source: "registry",
      });
    } catch {
      /* immutable re-register */
    }
    const recorded = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: input.decisionId,
      projectId,
      cycleInstanceId,
      subject,
      options: [
        { optionId: "opt:go", label: "Go" },
        { optionId: "opt:no", label: "No" },
      ],
      selectedOptionId: "opt:go",
      actor: HUMAN_ACTOR,
      authority: "delegated",
      reversible: false,
      authorityEvidenceId: "evd:registry-mw6-hd",
    });
    expect(recorded.ok).toBe(true);
  }

  async function seedConfirmedMw6Ec(input: {
    campaignId: string;
    executionContractId: string;
    decisionId: string;
    confirmationId: string;
  }): Promise<{ fingerprint: string }> {
    const oa = runtime.oa!;
    const strategy = decideSourceStrategy({ claimText: CLAIM });
    const binding = bindSourceProviderCapability(strategy);
    const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
      executionContractId: input.executionContractId,
      projectId,
      campaignId: input.campaignId,
      strategy,
      binding,
      decisionRefs: [input.decisionId],
      idempotencyKey: `idem:${input.executionContractId}`,
      cycleInstanceId,
    });
    expect(intentBuilt.ok).toBe(true);
    if (!intentBuilt.ok) throw new Error(intentBuilt.reason);
    const intent = intentBuilt.intent;
    const semantic = buildMw6ExternalDiscoveryContractSemantic(intent);
    const { fingerprint } = computeMw6CurrentIntentFingerprint(intent);

    const registryEvidenceId = `evd:registry-${input.executionContractId}`;
    try {
      oa.authorityResolver.register({
        evidenceId: registryEvidenceId,
        actorId: HUMAN_ACTOR.actorId,
        level: "N2",
        scope: semantic.scope,
        issuedAt: "2026-07-01T00:00:00.000Z",
        source: "registry",
      });
    } catch {
      /* already */
    }

    const built = await oa.executionContractServices.buildExecutionContract.execute({
      executionContractId: semantic.executionContractId,
      projectId: semantic.projectId,
      decisionRefs: [input.decisionId],
      action: semantic.action,
      target: semantic.target,
      scope: semantic.scope,
      inputs: semantic.inputs as Record<string, unknown> | undefined,
      expectedOutputs: semantic.expectedOutputs,
      requiredCapabilities: [...semantic.requiredCapabilities],
      requiredAuthority: "N2",
      constraints: [...semantic.constraints],
      stopConditions: [...semantic.stopConditions],
      evidenceRequirements: [...semantic.evidenceRequirements],
      reversibility: semantic.reversibility,
      idempotencyKey: semantic.idempotencyKey,
      cycleInstanceId: semantic.cycleInstanceId,
      actor: HUMAN_ACTOR,
      authorityEvidenceId: registryEvidenceId,
    });
    expect(built.ok).toBe(true);
    if (!built.ok) throw new Error("build failed");

    const validated =
      await oa.executionContractServices.validateExecutionContract.execute({
        executionContractId: built.contract.executionContractId,
        actor: HUMAN_ACTOR,
        authorityEvidenceId: registryEvidenceId,
      });
    expect(validated.ok).toBe(true);
    if (!validated.ok) throw new Error("validate failed");

    const requested = await oa.decisionServices.requestConfirmation.execute({
      confirmationId: input.confirmationId,
      level: "N2",
      actionRef: `act:confirm:${input.executionContractId}`,
      requestedBy: HUMAN_ACTOR,
      requestedTo: HUMAN_ACTOR,
      scope: semantic.scope,
      idempotencyKey: `idem-cfm-${input.confirmationId}`,
      decisionRef: input.decisionId,
    });
    expect(requested.ok).toBe(true);

    const granted = await oa.decisionServices.grantConfirmation.execute({
      confirmationId: input.confirmationId,
      actor: HUMAN_ACTOR,
      authorityEvidenceId: registryEvidenceId,
    });
    expect(granted.ok).toBe(true);

    const confirmed =
      await oa.executionContractServices.confirmExecutionContract.execute({
        executionContractId: built.contract.executionContractId,
        confirmationId: input.confirmationId,
        actor: HUMAN_ACTOR,
        authorityEvidenceId: registryEvidenceId,
        expectedVersion: validated.contract.version,
      });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) throw new Error("confirm failed");

    return { fingerprint };
  }

  it("B12 product path — authorityBound+realAuthorized+eligible without network", async () => {
    const executionContractId = "xct:mw6-bridge-prod";
    const decisionId = "dec:mw6-bridge-prod";
    const campaignId = "camp-bridge-prod";
    await seedAcceptedDecisionOnRuntime({ decisionId });
    const { fingerprint } = await seedConfirmedMw6Ec({
      campaignId,
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-bridge-prod",
    });

    setGrantEnv(
      baseGrant({
        projectId,
        executionContractId,
        semanticFingerprint: fingerprint,
        campaignId,
        decisionRef: "TEST:product-path-b12",
        expiresAt: "2099-01-01T00:00:00.000Z",
      }),
    );

    const pilote = makePilote("11111111");
    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
      // Hostile client REAL surfaces — structurally not accepted on send input
      // (not in ProjectAssistantSendInput; extra keys ignored by TS callers).
      governedAuthority: { realAuthorized: true },
      canActAsMorris: true,
      authorizedContract: { realAuthorized: true },
    } as Parameters<typeof projectAssistantSendAction>[0]);

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const comp = result.mw6AuthorityComposition;
    expect(comp).toBeDefined();
    expect(comp!.authorityBound).toBe(true);
    expect(comp!.realAuthorized).toBe(true);
    expect(comp!.eligible).toBe(true);
    expect(comp!.liveHostedDispatchCalls).toBe(0);
    // B19 — no raw grant / decisionRef leak in client composition surface
    const serialized = JSON.stringify(result);
    expect(serialized).not.toContain(MW6_REAL_PROOF_GRANT_ENV);
    expect(serialized).not.toContain("TEST:product-path-b12");
    expect(serialized).not.toContain(fingerprint);
    expect(process.env.OPENAI_API_KEY).toBeUndefined();
  });

  it("B11 product path — authority bound without grant remains blocked", async () => {
    const executionContractId = "xct:mw6-bridge-nogrant";
    const decisionId = "dec:mw6-bridge-nogrant";
    const campaignId = "camp-bridge-nogrant";
    await seedAcceptedDecisionOnRuntime({ decisionId });
    await seedConfirmedMw6Ec({
      campaignId,
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-bridge-nogrant",
    });
    clearGrantEnv();
    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => makePilote("11111111"),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw6AuthorityComposition!.authorityBound).toBe(true);
    expect(result.mw6AuthorityComposition!.realAuthorized).toBe(false);
    expect(result.mw6AuthorityComposition!.eligible).toBe(false);
    expect(result.mw6AuthorityComposition!.realPreflightCode).toBe(
      "AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED",
    );
  });
});
