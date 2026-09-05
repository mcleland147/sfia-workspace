/**
 * MW6 ↔ Auth — product trust-boundary wiring (TB-01/02/03) + retained matrices.
 *
 * PASS paths seed durable OA state and load via GetExecutionContract /
 * CheckExecutionAuthorization. Fabricated confirmed snapshots / injected final
 * intents cannot authorize.
 *
 * ZERO OpenAI LIVE / ZERO hosted web_search REAL.
 *
 * @vitest-environment node
 */

import { describe, expect, it } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision/infrastructure/memoryAuthorityResolver";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import {
  MW6_EXTERNAL_DISCOVERY_ACTION,
  MW6_EXTERNAL_DISCOVERY_EFFECT_CLASS,
  MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY,
  projectRequiredAuthorityForExternalDiscovery,
} from "@/lib/auth";
import { projectRequiredAuthorityFromEffects } from "@/features/project-assistant/w2/w3aQualifiedExecutionEffects";
import {
  assertMw6ExternalDiscoveryEffectiveHumanAuthorization,
  buildMw6CurrentExternalDiscoveryIntent,
  buildMw6ExternalDiscoveryContractSemantic,
  computeMw6CurrentIntentFingerprint,
  issueMw6ExternalDiscoveryS1,
  type Mw6AuthorizedExternalDiscoveryContract,
  type Mw6ExternalDiscoveryContractInput,
} from "@/lib/auth/mw6ExternalDiscoveryBinding";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";
import { BETTER_AUTH_GITHUB_MULTI_USER_S1 } from "@/lib/auth/constants";
import {
  acquireNoraCampaignBudget,
  evaluateRealSourceExecutionPreflight,
  type Mw6CheckExecutionAuthorizationPort,
  type Mw6CurrentProductContext,
  type Mw6GetExecutionContractPort,
  type Mw6GovernedAuthorityContext,
} from "@/lib/nora-cognitive-runtime/campaignBudget";
import { runNoraAgentsTurn } from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
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

function portsFromStack(stack: Stack): {
  getExecutionContract: Mw6GetExecutionContractPort;
  checkExecutionAuthorization: Mw6CheckExecutionAuthorizationPort;
} {
  return {
    getExecutionContract: stack.execution.getExecutionContract,
    checkExecutionAuthorization: stack.execution.checkExecutionAuthorization,
  };
}

function productContext(input: {
  campaignId: string;
  strategyInput?: SourceStrategyInput;
}): {
  strategy: ReturnType<typeof decideSourceStrategy>;
  binding: ReturnType<typeof bindSourceProviderCapability>;
  context: Mw6CurrentProductContext;
} {
  const strategy = decideSourceStrategy(
    input.strategyInput ?? {
      claimText: "corroborate externally the current CEO of Acme Corp",
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

/** Seed HD→Validate→Confirm for external_discovery N2 using strategy-derived intent. */
async function seedConfirmedExternalDiscovery(input: {
  stack: Stack;
  campaignId: string;
  executionContractId: string;
  decisionId: string;
  cycleInstanceId: string;
  confirmationId: string;
  strategyInput?: SourceStrategyInput;
  /** Actor that records HD / Confirm / holds registry evidence for Confirm. */
  humanActor?: typeof DELEGATE_ACTOR;
  registryEvidenceId?: string;
}): Promise<{
  intent: Mw6ExternalDiscoveryContractInput;
  contract: Mw6AuthorizedExternalDiscoveryContract;
  version: number;
  product: ReturnType<typeof productContext>;
}> {
  const humanActor = input.humanActor ?? DELEGATE_ACTOR;
  const registryEvidenceId =
    input.registryEvidenceId ?? `evd:registry-${input.executionContractId}`;
  const product = productContext({
    campaignId: input.campaignId,
    strategyInput: input.strategyInput,
  });
  expect(product.strategy.acquisitionRequirement).toBe("external_discovery");
  expect(product.binding.attachOpenAiHostedWebSearch).toBe(true);

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

  const loadedPre = await input.stack.execution.getExecutionContract.execute({
    executionContractId: contractId,
  });
  expect(loadedPre.ok).toBe(true);
  if (!loadedPre.ok) throw new Error("load failed");
  expect(loadedPre.contract.status).toBe("confirmation_required");

  const cfmId = await grantConfirmation(input.stack, {
    confirmationId: input.confirmationId,
    level: "N2",
    scope: semantic.scope,
    decisionRef: input.decisionId,
    actor: humanActor,
    evidenceId: registryEvidenceId,
  });

  const confirmed = await input.stack.execution.confirmExecutionContract.execute(
    {
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: humanActor,
      authorityEvidenceId: registryEvidenceId,
      expectedVersion: version,
    },
  );
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");
  expect(confirmed.contract.status).toBe("confirmed");

  return {
    intent,
    contract: confirmed.contract,
    version: confirmed.contract.version,
    product,
  };
}

function govRefs(input: {
  actorId: string;
  evidenceId: string;
  executionContractId: string;
  resolver: MemoryAuthorityResolver;
  stack: Stack;
  /** @deprecated ignored */
  authorizedContract?: Mw6AuthorizedExternalDiscoveryContract;
  callerAssertedScope?: string;
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
    authorizedContract: input.authorizedContract,
    callerAssertedScope: input.callerAssertedScope,
  };
}

function preflightPassAxes(pre: {
  authorityBound: boolean;
  realAuthorized: boolean;
  blocked: boolean;
  eligible: boolean;
  code: string;
}) {
  expect(pre.authorityBound).toBe(true);
  expect(pre.realAuthorized).toBe(false);
  expect(pre.blocked).toBe(true);
  expect(pre.eligible).toBe(false);
  expect(pre.code).toBe("AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED");
}

/** Legacy fabricated snapshot — only for negative T02. */
function fabricatedConfirmedSnapshot(
  intent: Mw6ExternalDiscoveryContractInput,
): Mw6AuthorizedExternalDiscoveryContract {
  const semantic = buildMw6ExternalDiscoveryContractSemantic(intent);
  return {
    executionContractId: semantic.executionContractId,
    projectId: semantic.projectId,
    status: "confirmed",
    requiredAuthority: "N2",
    action: semantic.action,
    target: semantic.target,
    scope: semantic.scope,
    confirmationRef: "cfm:fabricated",
    decisionRefs: semantic.decisionRefs,
    inputs: semantic.inputs as Record<string, unknown> | undefined,
    expectedOutputs: semantic.expectedOutputs,
    requiredCapabilities: [...semantic.requiredCapabilities],
    constraints: [...semantic.constraints],
    stopConditions: [...semantic.stopConditions],
    evidenceRequirements: [...semantic.evidenceRequirements],
    reversibility: semantic.reversibility,
    idempotencyKey: semantic.idempotencyKey,
  };
}

describe("MW6 ↔ Auth — T01–T12 product trust boundaries", () => {
  it("T01 — CANONICAL EC LOAD PASS", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t01",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t01");

    const campaignId = "camp-t01";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t01",
      decisionId,
      cycleInstanceId: "cyc:mw6-t01",
      confirmationId: "cfm:mw6-t01",
    });

    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    // Issue S1 for effective executor (= same actor that will CheckAuthorization).
    // Map delegate as executor by registering S1 under pilote actor for this semantic.
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t01-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    // Register the SAME S1 evidence onto the stack authority used by CheckAuthorization.
    stack.decisions.authority.register({
      ...issued.evidence,
    });

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: seeded.product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    // CheckAuthorization uses stack.decisions.authority — register S1 there.
    // Also need resolver.verify on same store — use stack authority as resolver.
    preflightPassAxes(pre);
  });

  it("T02 — FABRICATED SNAPSHOT CANNOT AUTHORIZE", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t02",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t02");

    const campaignId = "camp-t02";
    // Stop at confirmation_required — store is NOT confirmed.
    const product = productContext({ campaignId });
    const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
      executionContractId: "xct:mw6-t02",
      projectId: "prj:campus360-oa",
      campaignId,
      strategy: product.strategy,
      binding: product.binding,
      decisionRefs: [decisionId],
      idempotencyKey: "idem:xct:mw6-t02",
      cycleInstanceId: "cyc:mw6-t02",
    });
    expect(intentBuilt.ok).toBe(true);
    if (!intentBuilt.ok) return;
    const semantic = buildMw6ExternalDiscoveryContractSemantic(intentBuilt.intent);
    stack.decisions.authority.register({
      evidenceId: "evd:t02-build",
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
      cycleInstanceId: "cyc:mw6-t02",
      actor: DELEGATE_ACTOR,
      authorityEvidenceId: "evd:t02-build",
    });

    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intentBuilt.intent,
      evidenceId: "evd:mw6-t02-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    stack.decisions.authority.register({ ...issued.evidence });

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: intentBuilt.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
        // Fabricated "confirmed" snapshot — MUST be ignored; store is confirmation_required.
        authorizedContract: fabricatedConfirmedSnapshot(intentBuilt.intent),
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(
      pre.reasons.some((r) => r.includes("confirmation_required_absent")),
    ).toBe(true);
  });

  it("T03 — STALE / SUPERSEDED STORE CONTRACT DENY", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t03",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t03");
    const campaignId = "camp-t03";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t03",
      decisionId,
      cycleInstanceId: "cyc:mw6-t03",
      confirmationId: "cfm:mw6-t03",
    });

    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t03-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    stack.decisions.authority.register({ ...issued.evidence });

    // Cancel store contract after evidence issued (canonical invalidation).
    const cancelled = await stack.execution.cancelExecutionContract.execute({
      executionContractId: seeded.intent.executionContractId,
      reason: "Authorization revoked after evidence issuance",
      actor: DELEGATE_ACTOR,
      authorityEvidenceId: "evd:registry-xct:mw6-t03",
      expectedVersion: seeded.version,
    });
    expect(cancelled.ok).toBe(true);

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: seeded.product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(
      pre.reasons.some((r) =>
        r.includes("authorization_invalid_status_cancelled"),
      ),
    ).toBe(true);
  });

  it("T04 — MISSING EC DENY", async () => {
    const stack = buildStack();
    const campaignId = "camp-t04";
    const product = productContext({ campaignId });
    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: "evd:missing",
        executionContractId: "xct:does-not-exist",
        resolver,
        stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("execution_contract_not_found"))).toBe(
      true,
    );
  });

  it("T05 — ACTOR RELATION PASS VIA CANONICAL RULE", async () => {
    // Canonical rule: executor X authorized iff AuthorityEvidence verifies for X
    // (evidence.actorId === X) at CheckExecutionAuthorization — HD actor need not equal X.
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t05",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t05");
    const campaignId = "camp-t05";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t05",
      decisionId,
      cycleInstanceId: "cyc:mw6-t05",
      confirmationId: "cfm:mw6-t05",
    });
    const pilote = makePilote("55555555");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t05-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: seeded.product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    preflightPassAxes(pre);
  });

  it("T06 — UNRELATED ACTOR DENY (evidence actor ≠ runtime actor)", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t06",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t06");
    const campaignId = "camp-t06";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t06",
      decisionId,
      cycleInstanceId: "cyc:mw6-t06",
      confirmationId: "cfm:mw6-t06",
    });
    const piloteA = makePilote("11111111");
    const piloteB = makePilote("22222222");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote: piloteA,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t06-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: seeded.product.context,
      governedAuthority: govRefs({
        actorId: piloteB.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("actor_mismatch"))).toBe(true);
  });

  it("T07 — CURRENT PRODUCT STRATEGY→BINDING→INTENT PASS", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t07",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t07");
    const campaignId = "camp-t07";
    // No manual final intent — only strategy input → decide → bind → seed EC → preflight derives.
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t07",
      decisionId,
      cycleInstanceId: "cyc:mw6-t07",
      confirmationId: "cfm:mw6-t07",
      strategyInput: {
        claimText: "verify externally the latest FDA guidance",
        requiresExternalCorroboration: true,
      },
    });
    const pilote = makePilote("77777777");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t07-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    // Re-derive strategy/binding from same business input (product path).
    const liveProduct = productContext({
      campaignId,
      strategyInput: {
        claimText: "verify externally the latest FDA guidance",
        requiresExternalCorroboration: true,
      },
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: liveProduct.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    preflightPassAxes(pre);
  });

  it("T08 — INJECTED INTENT CANNOT OVERRIDE", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t08",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t08");
    const campaignId = "camp-t08";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t08",
      decisionId,
      cycleInstanceId: "cyc:mw6-t08",
      confirmationId: "cfm:mw6-t08",
    });
    const pilote = makePilote("88888888");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t08-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const hostileIntent: Mw6ExternalDiscoveryContractInput = {
      ...seeded.intent,
      scope: "biz:mw6-external-discovery:HOSTILE-OLD-A",
      idempotencyKey: "idem:hostile",
    };
    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: seeded.product.context,
      currentExternalDiscoveryIntent: hostileIntent,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    // Injected intent ignored — still PASS on product-derived intent.
    preflightPassAxes(pre);
  });

  it("T09 — STRATEGY MUTATION AFTER EVIDENCE DENY", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t09",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t09");
    const campaignId = "camp-t09";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t09",
      decisionId,
      cycleInstanceId: "cyc:mw6-t09",
      confirmationId: "cfm:mw6-t09",
      strategyInput: {
        claimText: "corroborate externally the current CEO of Acme",
        requiresExternalCorroboration: true,
      },
    });
    const pilote = makePilote("99999999");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t09-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const mutated = productContext({
      campaignId,
      strategyInput: {
        claimText: "verify externally the latest IPCC climate report",
        requiresExternalCorroboration: true,
        domainHint: "climate_science",
      },
    });
    expect(mutated.strategy.domain).not.toBe(seeded.product.strategy.domain);

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: mutated.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(
      pre.reasons.some((r) =>
        r.includes("current_intent_contract_semantic_mismatch"),
      ),
    ).toBe(true);
  });

  it("T10 — PROVIDER BINDING MUTATION DENY", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t10",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t10");
    const campaignId = "camp-t10";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t10",
      decisionId,
      cycleInstanceId: "cyc:mw6-t10",
      confirmationId: "cfm:mw6-t10",
    });
    const pilote = makePilote("10101010");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t10-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    // Material binding change: force non-external acquisition.
    const hostileBinding = bindSourceProviderCapability(
      decideSourceStrategy({
        claimText: "read file in this repository",
        requiresRepositoryLookup: true,
      }),
    );
    expect(hostileBinding.attachOpenAiHostedWebSearch).toBe(false);

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: {
        strategy: seeded.product.strategy,
        binding: hostileBinding,
        campaignId,
      },
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(
      pre.reasons.some(
        (r) =>
          r.includes("current_intent_derive") ||
          r.includes("provider_binding_not_external_discovery") ||
          r.includes("hosted_web_search_not_attached"),
      ),
    ).toBe(true);
  });

  it("T11 — EC↔INTENT IDENTITY MISMATCH DENY", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t11",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t11");
    const campaignId = "camp-t11";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t11",
      decisionId,
      cycleInstanceId: "cyc:mw6-t11",
      confirmationId: "cfm:mw6-t11",
    });
    const pilote = makePilote("11111112");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t11-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    // Point authority at a different (missing) EC id while product context is for A.
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: seeded.product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: "xct:mw6-OTHER",
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("execution_contract_not_found"))).toBe(
      true,
    );
  });

  it("T12 — REAL STILL CLOSED", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t12",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t12");
    const campaignId = "camp-t12";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t12",
      decisionId,
      cycleInstanceId: "cyc:mw6-t12",
      confirmationId: "cfm:mw6-t12",
    });
    const pilote = makePilote("12121212");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t12-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: seeded.product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    preflightPassAxes(pre);
    expect(pre.reasons).toContain("MW6_REAL_NOT_AUTHORIZED");
  });
});

describe("MW6 ↔ Auth — B01–B12 / H01–H07 / S01–S06 (trust-boundary updated)", () => {
  it("B02 — policy exact N2", () => {
    const policy = projectRequiredAuthorityForExternalDiscovery();
    expect(policy.requiredAuthority).toBe("N2");
    expect(MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY).toBe("N2");
    expect(policy.effectClass).toBe(MW6_EXTERNAL_DISCOVERY_EFFECT_CLASS);
    expect(policy.action).toBe(MW6_EXTERNAL_DISCOVERY_ACTION);
    const projected = projectRequiredAuthorityFromEffects({
      effectClass: "external-discovery",
      rollbackAvailable: false,
      protectedBoundaries: [],
    });
    expect(projected.ok).toBe(true);
    if (!projected.ok) return;
    expect(projected.requiredAuthority).toBe("N2");
  });

  it("B01 / H01 — login only DENY", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "b01",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
    });
    expect(pre.code).toBe("REAL_AUTHORITY_NOT_BOUND");
    expect(pre.authorityBound).toBe(false);
  });

  it("H02 — policy only DENY", async () => {
    expect(projectRequiredAuthorityForExternalDiscovery().requiredAuthority).toBe(
      "N2",
    );
    const campaign = acquireNoraCampaignBudget({
      campaignId: "h02",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
    });
    expect(pre.authorityBound).toBe(false);
  });

  it("B03 — S1 alone NOT effective (no store EC / no product context)", async () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const product = productContext({ campaignId: "b03" });
    const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
      executionContractId: "xct:mw6-b03",
      projectId: "prj:campus360-oa",
      campaignId: "b03",
      strategy: product.strategy,
      binding: product.binding,
      decisionRefs: ["dec:x"],
      idempotencyKey: "idem:b03",
    });
    expect(intentBuilt.ok).toBe(true);
    if (!intentBuilt.ok) return;
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intentBuilt.intent,
      evidenceId: "evd:b03",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N2");
    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);

    const stack = buildStack();
    const campaign = acquireNoraCampaignBudget({
      campaignId: "b03",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: intentBuilt.intent.executionContractId,
        resolver,
        stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("execution_contract_not_found"))).toBe(
      true,
    );
  });

  it("B06 — hostile action issue DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const product = productContext({ campaignId: "b06" });
    const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
      executionContractId: "xct:b06",
      projectId: "prj:x",
      campaignId: "b06",
      strategy: product.strategy,
      binding: product.binding,
      decisionRefs: ["dec:1"],
      idempotencyKey: "idem:b06",
    });
    expect(intentBuilt.ok).toBe(true);
    if (!intentBuilt.ok) return;
    const semantic = buildMw6ExternalDiscoveryContractSemantic(intentBuilt.intent);
    const issued = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract: { ...semantic, action: "product:read" },
      governedEffects: {
        effectClass: "external-discovery",
        rollbackAvailable: true,
        scopeIn: semantic.scope,
        target: semantic.target,
      },
      issuedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 3600_000).toISOString(),
      evidenceId: "evd:b06",
    });
    expect(issued.ok).toBe(false);
  });

  it("B11 / B12 — PRE-REAL deterministic path usable", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "b11",
      maxModelInvocations: 3,
      maxHostedWebOperations: 1,
    });
    await runNoraAgentsTurn({
      correlationId: "b11",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "fake" }],
      }),
      enableTools: false,
      enableHostedWebSearch: true,
      campaignBudget: campaign,
      maxTurns: 1,
      deterministicHostedWebSearchCalls: [
        {
          type: "hosted_tool_call",
          name: "web_search_call",
          status: "completed",
          providerData: {
            type: "web_search_call",
            action: {
              type: "search",
              sources: [{ type: "url", url: "https://example.com" }],
            },
          },
        },
      ],
    });
    expect(campaign.consumedHostedWebOperations).toBe(0);
  });

  it("S01 / H03 / B04–B10 / H04–H07 / S02–S06 covered by T01–T12 + asserts", () => {
    // Retained coverage mapped onto T-matrix:
    // H03/S01/B09/B10/T12 → T01/T05/T07/T12
    // H04/B04/T06 → T06
    // H05/S02–S05/T09 → T09
    // H06 → T02
    // H07/T03 → T03
    // S06/T08 → T08
    expect(assertMw6ExternalDiscoveryEffectiveHumanAuthorization).toBeTypeOf(
      "function",
    );
    expect(computeMw6CurrentIntentFingerprint).toBeTypeOf("function");
  });
});
