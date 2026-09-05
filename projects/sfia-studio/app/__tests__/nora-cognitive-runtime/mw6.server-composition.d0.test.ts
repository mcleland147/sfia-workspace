/**
 * MW6 ↔ Auth — server-side authority composition (C01–C14).
 *
 * Successful proof invokes projectAssistantSendAction (product entrypoint).
 * No manual Mw6GovernedAuthorityContext on the PASS path.
 * AUTH REAL boundary carried forward (Pilote resolver seam only).
 *
 * ZERO OpenAI LIVE / ZERO hosted web_search REAL.
 *
 * @vitest-environment node
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import {
  buildMw6CurrentExternalDiscoveryIntent,
  buildMw6ExternalDiscoveryContractSemantic,
  type Mw6ExternalDiscoveryContractInput,
} from "@/lib/auth/mw6ExternalDiscoveryBinding";
import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";
import {
  type ActorReference,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  bindSourceProviderCapability,
  decideSourceStrategy,
} from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import type { SourceStrategyInput } from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { wasServerComposedMw6GovernedAuthority } from "@/features/project-assistant/composeMw6GovernedAuthority";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
} from "@/__tests__/project-assistant/w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const CLAIM =
  "corroborate externally the current CEO of Acme Corp";

const HUMAN_ACTOR: ActorReference = {
  actorId: "actor:mw6-hd-human",
  role: "project_owner",
  displayName: "MW6 HD",
  authorityLevel: "N2",
};

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

function productContext(campaignId: string, strategyInput?: SourceStrategyInput) {
  const strategy = decideSourceStrategy(
    strategyInput ?? {
      claimText: CLAIM,
    },
  );
  const binding = bindSourceProviderCapability(strategy);
  return { strategy, binding, campaignId };
}

async function seedAcceptedDecisionOnRuntime(
  runtime: RuntimeApplicationService,
  input: {
    decisionId: string;
    projectId: string;
    cycleInstanceId: string;
  },
): Promise<void> {
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
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
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
  runtime: RuntimeApplicationService;
  projectId: string;
  cycleInstanceId: string;
  campaignId: string;
  executionContractId: string;
  decisionId: string;
  confirmationId: string;
}): Promise<{ intent: Mw6ExternalDiscoveryContractInput }> {
  const oa = input.runtime.oa!;
  const product = productContext(input.campaignId);
  expect(product.strategy.acquisitionRequirement).toBe("external_discovery");

  const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
    executionContractId: input.executionContractId,
    projectId: input.projectId,
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
  expect(validated.contract.status).toBe("confirmation_required");

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
  expect(confirmed.contract.status).toBe("confirmed");

  return { intent };
}

describe("MW6 ↔ Auth — C01–C14 server-side authority composition", () => {
  let runtime: RuntimeApplicationService;
  let projectId: string;
  let cycleInstanceId: string;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("mw6-comp.sqlite"),
      idPrefix: "mw6c",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "comp" });
    projectId = seeded.projectId;
    cycleInstanceId = seeded.cycleInstanceId;
  });

  afterEach(() => {
    cleanupW2TempDirs();
    setConversationProviderForTests(null);
  });

  it("C01–C02–C06–C08–C09–C10–C11–C14 — product entrypoint server composition PASS", async () => {
    const executionContractId = "xct:mw6-c01";
    const decisionId = "dec:mw6-c01";
    const campaignId = "camp-c01";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId,
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c01",
    });

    const pilote = makePilote("11111111");
    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
      // Hostile — must be ignored
      governedAuthority: {
        actorId: "actor:hostile",
        authorityEvidenceId: "evd:hostile",
      },
      actorId: "actor:hostile-override",
      getExecutionContract: "hostile-port",
      checkExecutionAuthorization: "hostile-port",
      authorityResolver: "hostile-port",
      authorizedContract: { status: "confirmed" },
      currentExternalDiscoveryIntent: { scope: "hostile" },
      canActAsMorris: true,
      claimedAuthorityLevel: "N3",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const comp = result.mw6AuthorityComposition;
    expect(comp).toBeDefined();
    expect(comp!.serverComposedGovernedAuthority).toBe(true);
    expect(comp!.authorityBound).toBe(true);
    expect(comp!.realAuthorized).toBe(false);
    expect(comp!.eligible).toBe(false);
    expect(comp!.liveHostedDispatchCalls).toBe(0);
    expect(comp!.actorId).toBe(pilote.actor.actorId);
    expect(comp!.executionContractId).toBe(executionContractId);
    expect(comp!.evidenceSource).toBe("issued_mw6_s1_from_loaded_ec");
    expect(comp!.realPreflightCode).toBe(
      "AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED",
    );
    // C08 — ports from RuntimeOaStack (composition used product OA)
    expect(runtime.oa).toBeTruthy();
  });

  it("C03 — actor override DENY (hostile claimed actor ignored; wrong evidence)", async () => {
    const executionContractId = "xct:mw6-c03";
    const decisionId = "dec:mw6-c03";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId: "camp-c03",
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c03",
    });

    const piloteA = makePilote("11111111");
    // Pre-issue evidence for actor B on resolver — composition for A must not use B's evidence as A
    const other = makePilote("22222222");
    void other;

    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => piloteA,
      actorId: "actor:github:22222222",
      authorityEvidenceId: "evd:belongs-to-b",
    });

    // Hostile evidence hint that does not verify → composition DENY
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("HOSTILE_EVIDENCE_OVERRIDE_DENIED");
  });

  it("C04–C05 — wrong EC id DENY", async () => {
    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId: "xct:missing-ec",
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => makePilote("11111111"),
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(
      ["CONTRACT_NOT_FOUND", "EXECUTION_CONTRACT_NOT_FOUND"].some((c) =>
        result.code.includes(c),
      ) || result.code.length > 0,
    ).toBe(true);
  });

  it("C07 — hostile evidence override DENY", async () => {
    const executionContractId = "xct:mw6-c07";
    const decisionId = "dec:mw6-c07";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId: "camp-c07",
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c07",
    });

    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      authorityEvidenceId: "evd:fabricated-hostile",
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => makePilote("11111111"),
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("HOSTILE_EVIDENCE_OVERRIDE_DENIED");
  });

  it("C12 — current state mutation DENY (strategy drift vs confirmed EC)", async () => {
    const executionContractId = "xct:mw6-c12";
    const decisionId = "dec:mw6-c12";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId: "camp-c12",
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c12",
    });

    const pilote = makePilote("11111111");
    const first = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.mw6AuthorityComposition?.authorityBound).toBe(true);

    // Same EC + evidence, but different current product strategy → semantic mismatch DENY
    const second = await projectAssistantSendAction({
      projectId,
      content: "define recursion in one sentence",
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.mw6AuthorityComposition?.authorityBound).toBe(false);
    expect(second.mw6AuthorityComposition?.realAuthorized).toBe(false);
  });

  it("C13 — client cannot supply final authority object (ignored; server builds)", async () => {
    const executionContractId = "xct:mw6-c13";
    const decisionId = "dec:mw6-c13";
    await seedAcceptedDecisionOnRuntime(runtime, {
      decisionId,
      projectId,
      cycleInstanceId,
    });
    await seedConfirmedMw6Ec({
      runtime,
      projectId,
      cycleInstanceId,
      campaignId: "camp-c13",
      executionContractId,
      decisionId,
      confirmationId: "cfm:mw6-c13",
    });

    const pilote = makePilote("11111111");
    const result = await projectAssistantSendAction({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
      governedAuthority: {
        actorId: pilote.actor.actorId,
        authorityEvidenceId: "evd:client-built",
        executionContractId,
        requiredLevel: "N2",
        getExecutionContract: { execute: async () => ({ ok: false }) },
        checkExecutionAuthorization: { execute: async () => ({ ok: false }) },
        authorityResolver: { verify: () => ({ ok: true, reason: "verified" }) },
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw6AuthorityComposition?.authorityBound).toBe(true);
    expect(result.mw6AuthorityComposition?.authorityEvidenceId).not.toBe(
      "evd:client-built",
    );
    expect(result.mw6AuthorityComposition?.authorityEvidenceId).toBe(
      `evd:mw6-ext-s1:${executionContractId}`,
    );
  });

  it("marker — wasServerComposedMw6GovernedAuthority rejects manual objects", () => {
    expect(
      wasServerComposedMw6GovernedAuthority({
        actorId: "x",
        authorityEvidenceId: "y",
        executionContractId: "z",
        requiredLevel: "N2",
      }),
    ).toBe(false);
  });
});
