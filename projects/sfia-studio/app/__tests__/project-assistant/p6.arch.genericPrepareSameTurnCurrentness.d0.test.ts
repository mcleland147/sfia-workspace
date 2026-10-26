/** @vitest-environment node */
/**
 * P6 Option B — Generic PREPARE same-turn currentness sequencing.
 *
 * Exit proof: Nora tool solicitPrepare + ACW epistemic write in ONE Product turn
 * must NOT leave the EC immediately MATERIALITY_CURRENTNESS_STALE.
 * Fake OpenAI only; real Product OA path; no HQA DB; no Cursor Execute.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as prepareSvc from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  analysisStubFromMaterialityFacts,
  parseStampedProductCurrentness,
  revalidateMaterialityAgainstCurrentProduct,
} from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
import { materialityFromContractConstraints } from "@/lib/oa/execution-contract";
import {
  readCurrentGovernedExecutionContinuity,
} from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
import {
  orchestrateProjectAssistantTurn,
} from "@/features/project-assistant/orchestrateTurn";
import {
  composeStudioCognitiveContext,
} from "@/features/project-assistant/f2/studioCognitiveContext";
import {
  resetF2ProposalStoreForTests,
} from "@/features/project-assistant/f2/proposalStore";
import {
  resetMw5ChallengeStoreForTests,
} from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  resetPendingGenericPrepareOfferStoreForTests,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
} from "@/lib/platform/ai/types";
import type { ToolDefinition } from "@/lib/platform/tools/types";
import type {
  IntentAnalysisDto,
} from "@/features/project-assistant/f2/types";
import type {
  ProjectAssistantContextDto,
} from "@/features/project-assistant/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  ensureManagedRepoCloneSkeleton,
} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  pathUnderProjectWorkspace,
  tempProductDbPath,
  W2_REGISTRY_ROOT,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService, RuntimeOaStack } from "@/lib/vertical-slice-runtime";

async function projectDtoFromOa(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<ProjectAssistantContextDto> {
  const project = await oa.projectServices.getProject.execute({ projectId });
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!project.ok || !lps.ok) throw new Error("project/lps missing");
  const pin =
    project.project.doctrinePackageRef ??
    lps.livingProjectState.doctrinePackageRef;
  const state = lps.livingProjectState;
  return {
    projectId,
    name: project.project.title,
    shortReference: null,
    objective: state.objective,
    contextSummary: state.context ?? "",
    criticality: "STANDARD",
    constraints: [...(state.constraints ?? [])],
    lpsId: state.lpsVersionId,
    lpsVersion: state.version,
    lpsCreatedAt: state.createdAt,
    doctrineId: pin.doctrinePackageId,
    doctrineVersion: pin.version,
    doctrineDigest: pin.digest,
    doctrineStatus: "product-studio-native",
    runtimeMode: "local",
    persistence: "product-sqlite",
    readiness: "ready",
    activeCycleInstanceId: state.activeCycleInstanceId ?? null,
    ckcResolutionRef: state.ckcResolutionRef ?? null,
  };
}

const SIGNALS_OK = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
};

const ACW_DEFER_ASSESSMENT = {
  routingBlockingUnknownPresent: false,
  candidateCycleSupportable: false,
  remainingUnknownsAreCycleOwned: true,
  multiplePlausibleCycles: false,
  activeCycleAlreadyCoversWork: true,
} as const;

function interceptF2(messages: ProviderChatMessage[]): string | null {
  const isF2 = messages.some(
    (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
  );
  if (!isF2) return null;
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify({
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:framing",
    signals: SIGNALS_OK,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective: "Qualifier MVP et préparer mission Cursor lecture seule",
    scope: "projects/ateliernova",
    rephrasedRequest: "préparer mission inspection",
    outOfScope: ["Cursor execute"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION"],
    activatedBlocks: ["qualification"],
    expectedOutcome: "Mission inspectable",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
    continuationKind: null,
    artifactMaterializationOperation: null,
    pilotDecisionCandidate: null,
  })}`;
}

class SameTurnProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  constructor(private readonly inner: FakeConversationProvider) {}

  private result(text: string): ProviderCompletionResult {
    return {
      text,
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "fake-same-turn",
      },
    };
  }

  async complete(
    messages: ProviderChatMessage[],
    options?: { signal?: AbortSignal },
  ): Promise<ProviderCompletionResult> {
    const hit = interceptF2(messages);
    if (hit) return this.result(hit);
    return this.inner.complete(messages, options);
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
    signal?: AbortSignal;
  }): Promise<ProviderCompletionResult> {
    const hit = interceptF2(input.messages);
    if (hit) return this.result(hit);
    return this.inner.completeStructured(input);
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
    signal?: AbortSignal;
  }): Promise<ProviderRoundResult> {
    return this.inner.completeRound!(input);
  }
}

function productTurnMessage(withAcw: boolean): string {
  return JSON.stringify({
    narrative: withAcw
      ? "Orientation V1 retenue ; mission Cursor lecture seule en finalisation Product."
      : "Mission lecture seule préparée.",
    preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
    lifecycleRecommendation: null,
    activeCycleWork: withAcw
      ? {
          items: [
            {
              type: "Observation",
              statement:
                "Orientation V1 : inscriptions au-delà de la capacité avec avertissement ; pas de liste d'attente.",
              confidence: null,
              blocking: null,
            },
            {
              type: "Hypothesis",
              statement:
                "Critères de réussite : inscription possible à capacité atteinte avec avertissement non bloquant.",
              confidence: null,
              blocking: null,
            },
          ],
        }
      : null,
    conversationGuidance: {
      kind: "RECOMMEND_NEXT_STEP",
      scope: "ACTIVE_CYCLE",
      statement: "Examiner la mission de lecture seule lorsque disponible.",
      rationale: "same-turn-currentness-fixture",
    },
    journalDelta: null,
    reservationDelta: null,
  });
}

function baseAnalysis(): IntentAnalysisDto {
  return {
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:framing",
    signals: { ...SIGNALS_OK },
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective: "Inspecter le dépôt",
    scope: "État des lieux du dépôt — lecture seule",
    rephrasedRequest: "mission lecture seule",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: "État des lieux",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "read_only",
      scopeIn: [],
      scopeOut: [],
    } as IntentAnalysisDto["executionIntent"],
    continuationKind: null,
    artifactMaterializationOperation: null,
    pilotDecisionCandidate: null,
  };
}

describe("P6 arch — Generic PREPARE same-turn currentness", () => {
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let sessionDbPath: string;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    sessionDbPath = tempProductDbPath("same-turn-session.sqlite");
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("same-turn-product.sqlite"),
      idPrefix: "stc",
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    if (previousProvider === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousProvider;
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    if (previousDetPin === undefined) {
      delete process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    } else process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = previousDetPin;
    vi.restoreAllMocks();
  });

  async function seedActiveFraming(suffix: string): Promise<{
    projectId: string;
    oa: RuntimeOaStack;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `SameTurn ${suffix}`,
      objective: "AtelierNova MVP",
      context: "same-turn currentness",
      criticality: "STANDARD",
      constraints: [],
      shortReference: `ST${suffix.slice(0, 4)}`,
      idempotencyKey: `idem:stc-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:stc",
        role: "project_owner",
        displayName: "STC",
        authorityLevel: "N3",
      },
    });
    const cycleInstanceId = `cyc:stc-${suffix}`;
    await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:framing",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-10-18T08:00:00.000Z",
      forceEnable: true,
    });
    if (!auth.ok) throw new Error("auth");
    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("lps1");
    const started = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth.evidenceId,
      expectedLpsVersion: lps1.livingProjectState.version,
    });
    if (!started.ok) throw new Error("start");

    const identity = `acme/stc-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa, cycleInstanceId };
  }

  async function runPrepareTurn(input: {
    projectId: string;
    oa: RuntimeOaStack;
    withAcw: boolean;
    content: string;
  }) {
    const projectDto = await projectDtoFromOa(input.oa, input.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: baseAnalysis(),
      project: projectDto,
      registryRoot: W2_REGISTRY_ROOT,
      oa: input.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    expect(composed.context.activeCycle?.workEligible).toBe(true);

    const fake = new FakeConversationProvider({
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "call_prep_same_turn",
              name: "request_generic_execution_prepare",
              argumentsJson: JSON.stringify({
                objective:
                  "Inspecter le dépôt AtelierNova pour établir son état de départ et proposer une première mission d'implémentation minimale de la V1",
                expectedOutcome:
                  "Un bref état des lieux fondé sur le dépôt. Ne modifier aucun fichier.",
                scope:
                  "État des lieux du dépôt — lecture seule, sans modification de fichiers",
                repositoryMutation: "none",
              }),
            },
          ],
        },
        { kind: "message", text: productTurnMessage(input.withAcw) },
      ],
    });
    const provider = new SameTurnProvider(fake);
    setConversationProviderForTests(provider);
    const turn = await orchestrateProjectAssistantTurn({
      projectId: input.projectId,
      content: input.content,
      sessionDbPath,
      provider,
      studioCognitiveContext: composed.context,
      simulateMemoryBUnavailable: true,
    });
    return turn;
  }

  it("A — same-turn tool PREPARE + ACW → EC stamp matches final LPS; continuity not STALE; no Attempt", async () => {
    const { projectId, oa, cycleInstanceId } = await seedActiveFraming("a");
    const lpsBefore = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsBefore.ok).toBe(true);
    if (!lpsBefore.ok) throw new Error("lps");
    const versionBefore = lpsBefore.livingProjectState.version;

    const spy = vi.spyOn(prepareSvc, "solicitGenericExecutionPrepare");
    const queueSpy = vi.spyOn(prepareSvc, "queueGenericPrepareForTurnFinalization");

    const turn = await runPrepareTurn({
      projectId,
      oa,
      withAcw: true,
      content:
        "Pour la V1, autoriser les inscriptions au-delà de la capacité avec avertissement, sans liste d'attente. Prépare une mission Cursor de lecture seule.",
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);

    expect(queueSpy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    const finalized = await spy.mock.results[0]!.value;
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) throw new Error(finalized.message);
    expect(finalized.code).toBe("GENERIC_PREPARE_DRAFTED");
    expect(finalized.executionContractId).toMatch(/^xct:gen-prep:/);

    const lpsAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) throw new Error("lps after");
    expect(lpsAfter.livingProjectState.version).toBeGreaterThan(versionBefore);

    const contracts = await oa.executionContractServices.contracts.listByProject(
      projectId,
    );
    expect(contracts).toHaveLength(1);
    const contract = contracts[0]!;
    expect(contract.executionContractId).toBe(finalized.executionContractId);
    expect(contract.status).toBe("confirmation_required");
    expect(contract.decisionRefs ?? []).toEqual([]);

    const facts = (contract.inputs as Record<string, unknown> | undefined)
      ?.materialityFacts as Record<string, unknown> | undefined;
    const stamped = parseStampedProductCurrentness(facts ?? null);
    expect(stamped).toBeTruthy();
    expect(stamped!.lpsVersion).toBe(lpsAfter.livingProjectState.version);
    expect(stamped!.lpsId).toBe(lpsAfter.livingProjectState.lpsVersionId);
    expect(stamped!.activeCycleInstanceId).toBe(cycleInstanceId);
    expect(stamped!.projectId).toBe(projectId);

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) throw new Error(continuity.message);
    expect(continuity.kind).toBe("active");

    const stampedMateriality = materialityFromContractConstraints(
      contract.constraints,
    );
    expect(stampedMateriality).toBe("non_structural");
    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
      oa,
      projectId,
      analysis: analysisStubFromMaterialityFacts(
        facts ?? null,
        (contract.inputs ?? {}) as Record<string, unknown>,
      ),
      cycleInstanceId,
      stampedMateriality,
      stampedCurrentness: stamped,
    });
    expect(revalidated.ok).toBe(true);

    const attempts = await oa.executionAttemptServices!.listExecutionAttempts.execute({
      executionContractId: contract.executionContractId,
    });
    expect(attempts.ok).toBe(true);
    if (attempts.ok) expect(attempts.attempts).toEqual([]);
    expect(contract.status).not.toBe("confirmed");
    expect(contract.status).not.toBe("authorized");
  });

  it("B — PREPARE without ACW still finalizes CURRENT", async () => {
    const { projectId, oa } = await seedActiveFraming("b");
    const spy = vi.spyOn(prepareSvc, "solicitGenericExecutionPrepare");
    const turn = await runPrepareTurn({
      projectId,
      oa,
      withAcw: false,
      content: "Prépare une mission Cursor de lecture seule sur le dépôt.",
    });
    expect(turn.ok).toBe(true);
    expect(spy).toHaveBeenCalledTimes(1);
    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(true);
    if (continuity.ok) expect(continuity.kind).toBe("active");
  });

  it("C — post-turn LPS bump keeps MATERIALITY_CURRENTNESS_STALE", async () => {
    const { projectId, oa, cycleInstanceId } = await seedActiveFraming("c");
    const turn = await runPrepareTurn({
      projectId,
      oa,
      withAcw: false,
      content: "Prépare la mission lecture seule.",
    });
    expect(turn.ok).toBe(true);

    const before = await readCurrentGovernedExecutionContinuity({ oa, projectId });
    expect(before.ok).toBe(true);

    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    const epiId = `epi:post:${cycleInstanceId}`;
    const written = await oa.cycleServices.updateEpistemicState.execute({
      projectId,
      createdBy: LOCAL_PILOTE_ACTOR,
      correlationId: `cor:post-epi-${cycleInstanceId}`,
      items: [
        {
          epistemicItemId: epiId,
          type: "Observation",
          statement: "Mutation Product postérieure au tour PREPARE.",
          status: "active",
          source: "test:post-turn",
          relatedObjects: [projectId, cycleInstanceId],
        },
      ],
    });
    expect(written.ok).toBe(true);
    const appended = await oa.projectServices.appendLivingProjectStateVersion.execute({
      projectId,
      expectedVersion: lps.livingProjectState.version,
      objective: `${lps.livingProjectState.objective} · post-turn bump`,
      context: lps.livingProjectState.context,
      scope: lps.livingProjectState.scope,
      createdBy: LOCAL_PILOTE_ACTOR,
      correlationId: `cor:post-${cycleInstanceId}`,
      epistemicItemIds: [
        ...(lps.livingProjectState.epistemicItemIds ?? []),
        epiId,
      ],
      activeCycleInstanceId: cycleInstanceId,
    });
    expect(appended.ok).toBe(true);

    const after = await readCurrentGovernedExecutionContinuity({ oa, projectId });
    expect(after.ok).toBe(false);
    if (after.ok) throw new Error("expected stale");
    expect(after.code).toBe("MATERIALITY_CURRENTNESS_STALE");
  });

  it("queue helper exposes deferred code (tool-time contract)", () => {
    const queued = prepareSvc.queueGenericPrepareForTurnFinalization();
    expect(queued.ok).toBe(true);
    expect(queued.code).toBe(GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION);
    expect(queued.deferredFinalize).toBe(true);
    expect(queued.executionAttemptCreated).toBe(false);
  });
});
