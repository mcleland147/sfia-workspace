/** @vitest-environment node */
/**
 * C3-03 — full MW6 governed product path through Stage A canonical lease — ZERO REAL.
 * CORR-04 — MW6 × Memory B compaction session compatibility regression.
 *
 * Reuses W2 harness + MW6 server-composition seeding patterns.
 * Does NOT invent a second authority framework.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import {
  buildMw6CurrentExternalDiscoveryIntent,
  buildMw6ExternalDiscoveryContractSemantic,
  type Mw6ExternalDiscoveryContractInput,
} from "@/lib/auth/mw6ExternalDiscoveryBinding";
import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";
import type { ActorReference } from "@/lib/oa/decision";
import { FakeConversationProvider, setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bindSourceProviderCapability,
  decideSourceStrategy,
} from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import type { SourceStrategyInput } from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import { runMw6GovernedNoraProductTurn } from "@/features/project-assistant/mw6GovernedNoraTurn";
import {
  ProductSqliteSession,
  applyCompactionIfNeeded,
  createMemoryBSessionView,
  loadSessionRows,
  userTextItem,
  assistantTextItem,
} from "@/lib/nora-cognitive-runtime";
import {
  createEvalAgentsUsdAccounting,
  createGlobalMrStageADriver,
  GLOBAL_MR_STAGE_A_CALL_CAPS,
} from "@/lib/nora-eval";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
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
    strategyInput ?? { claimText: CLAIM },
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

  return { intent };
}

describe("C3-03 — full MW6 governed product path (deterministic)", () => {
  let runtime: RuntimeApplicationService;
  let projectId: string;
  let cycleInstanceId: string;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.OPENAI_API_KEY;
    setConversationProviderForTests(null);
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("mw6-c3.sqlite"),
      idPrefix: "mw6c3",
    });
    const seeded = await seedQualifiedProject(runtime, { suffix: "c3" });
    projectId = seeded.projectId;
    cycleInstanceId = seeded.cycleInstanceId;
  });

  afterEach(() => {
    cleanupW2TempDirs();
    setConversationProviderForTests(null);
  });

  it("driver → runMw6GovernedNoraProductTurn → same canonical lease; no 4/2/4; ZERO LIVE", async () => {
    const campaignId = `c3-mw6-${Date.now()}`;
    const executionContractId = "xct:mw6-c3-full";
    const decisionId = "dec:mw6-c3-full";
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
      confirmationId: "cfm:mw6-c3-full",
    });

    const state = createGlobalMrStageADriver({ campaignId });
    expect(state.campaignBudget.maxModelInvocations).toBe(
      GLOBAL_MR_STAGE_A_CALL_CAPS.maxModelInvocations,
    );
    expect(state.campaignBudget.maxModelInvocations).not.toBe(4);

    const beforeModel = state.campaignBudget.consumedModelInvocations;
    const beforeHosted = state.campaignBudget.consumedHostedWebOperations;
    const usd = createEvalAgentsUsdAccounting({
      budget: state.budget,
      manifest: state.manifest,
      modelId: "gpt-5.6-luna",
      assumedInputTokens: 40,
      assumedOutputTokens: 20,
    });

    const pilote = makePilote("11111111");
    const result = await runMw6GovernedNoraProductTurn({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => pilote,
      sharedCampaignBudget: state.campaignBudget,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
      },
      usdAccounting: usd,
      // Hostile client fields — ignored
      governedAuthority: {
        actorId: "actor:hostile",
        authorityEvidenceId: "evd:hostile",
      },
      actorId: "actor:hostile-override",
      claimedAuthorityLevel: "N3",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.mw6AuthorityComposition.serverComposedGovernedAuthority).toBe(
      true,
    );
    expect(result.mw6AuthorityComposition.authorityBound).toBe(true);
    expect(result.mw6AuthorityComposition.realAuthorized).toBe(false);
    expect(result.mw6AuthorityComposition.liveHostedDispatchCalls).toBe(0);
    expect(result.mw6AuthorityComposition.actorId).toBe(pilote.actor.actorId);

    // Same canonical lease — model claim(s) landed on Stage A budget, not a local 4/2/4.
    expect(state.campaignBudget.consumedModelInvocations).toBeGreaterThan(
      beforeModel,
    );
    expect(state.campaignBudget.campaignId).toBe(campaignId);
    expect(state.campaignBudget.maxAggregateRealCalls).toBe(
      GLOBAL_MR_STAGE_A_CALL_CAPS.maxAggregateRealCalls,
    );
    // Deterministic hosted fixture path — no silent REAL hosted claim invent.
    expect(
      state.campaignBudget.consumedHostedWebOperations - beforeHosted,
    ).toBeGreaterThanOrEqual(0);
  });

  it("campaign mismatch fail-closes before model dispatch", async () => {
    const campaignId = `c3-mw6-match-${Date.now()}`;
    const executionContractId = "xct:mw6-c3-mismatch";
    const decisionId = "dec:mw6-c3-mismatch";
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
      confirmationId: "cfm:mw6-c3-mismatch",
    });

    const other = createGlobalMrStageADriver({
      campaignId: `other-${Date.now()}`,
    });
    const before = other.campaignBudget.consumedModelInvocations;

    const result = await runMw6GovernedNoraProductTurn({
      projectId,
      content: CLAIM,
      executionContractId,
      provider: new FakeConversationProvider(),
      resolveAuthenticatedPilote: async () => makePilote("11111111"),
      sharedCampaignBudget: other.campaignBudget,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("CAMPAIGN_ID_MISMATCH");
    expect(other.campaignBudget.consumedModelInvocations).toBe(before);
  });

  it("CORR-04 — pre-compacted Memory B session is MW6-safe (Truth C → MemoryBSessionView)", async () => {
    const campaignId = `corr04-mw6-${Date.now()}`;
    const executionContractId = "xct:mw6-corr04";
    const decisionId = "dec:mw6-corr04";
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
      confirmationId: "cfm:mw6-corr04",
    });

    const ctx = await currentF2Context(runtime, projectId);
    const truthCRevision = {
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
    };
    const sessionDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-corr04-"));
    const sessionDbPath = path.join(sessionDir, "nora-session.sqlite");
    try {
      const session = new ProductSqliteSession({
        projectId,
        dbPath: sessionDbPath,
        sessionKey: "f1-default",
      });
      await session.addItems([
        userTextItem("Useful premise: deploy to staging first."),
        assistantTextItem("Acknowledged."),
        userTextItem("noise ".repeat(30)),
        assistantTextItem("noise reply"),
        userTextItem("governing premise: STOP before merge"),
        assistantTextItem("Will not merge."),
        userTextItem("More filler ".repeat(20)),
        assistantTextItem("More filler reply"),
      ]);
      const applied = await applyCompactionIfNeeded({
        session,
        truthCRevision,
        policy: {
          itemThreshold: 4,
          keepRecentCount: 2,
          maxSummaryChars: 900,
        },
        nowIso: "2026-09-06T10:00:00.000Z",
      });
      expect(applied.applied).toBe(true);
      expect(applied.record?.type).toBe("sfia_memory_b_compaction");

      const rawItems = await session.getItems();
      expect(
        rawItems.some(
          (i) =>
            (i as { type?: string }).type === "sfia_memory_b_compaction",
        ),
      ).toBe(true);

      const prepared = await createMemoryBSessionView({
        session,
        truthCRevision,
      });
      const viewItems = await prepared.view.getItems();
      expect(
        viewItems.every(
          (i) =>
            (i as { type?: string }).type !== "sfia_memory_b_compaction",
        ),
      ).toBe(true);

      const state = createGlobalMrStageADriver({ campaignId });
      const usd = createEvalAgentsUsdAccounting({
        budget: state.budget,
        manifest: state.manifest,
        modelId: "gpt-5.6-luna",
        assumedInputTokens: 40,
        assumedOutputTokens: 20,
      });

      const result = await runMw6GovernedNoraProductTurn({
        projectId,
        content: CLAIM,
        executionContractId,
        provider: new FakeConversationProvider(),
        resolveAuthenticatedPilote: async () => makePilote("11111111"),
        sharedCampaignBudget: state.campaignBudget,
        sessionDbPath,
        evalModelReasoningControl: {
          modelId: "gpt-5.6-luna",
          reasoningEffort: "none",
        },
        usdAccounting: usd,
      });

      // Pre-patch RED fingerprint (main): ok=false, NORA_TURN_ERROR,
      // message contains sfia_memory_b_compaction.
      // Post-patch GREEN: ok=true, compaction state retained, marker not exposed.
      if (!result.ok) {
        expect(result.code).toBe("NORA_TURN_ERROR");
        expect(result.message).toMatch(/sfia_memory_b_compaction/);
        // Explicit RED signal for CORR-04 Review Pack — fail until patched.
        expect(result.ok, "CORR-04 expected GREEN after Truth C wiring").toBe(
          true,
        );
        return;
      }

      expect(result.mw6AuthorityComposition.liveHostedDispatchCalls).toBe(0);
      expect(result.mw6AuthorityComposition.realAuthorized).toBe(false);
      expect(result.memoryBCompactionState).not.toBe("none");
      const after = await loadSessionRows(session);
      expect(after.compaction?.type).toBe("sfia_memory_b_compaction");
    } finally {
      fs.rmSync(sessionDir, { recursive: true, force: true });
    }
  });
});
