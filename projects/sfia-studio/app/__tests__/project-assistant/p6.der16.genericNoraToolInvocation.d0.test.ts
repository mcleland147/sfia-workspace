/**
 * D-ER-16…19 — Generic Execution Nora Tool Delivery (Option 2).
 *
 * Proves (deterministic, Fake OpenAI boundary only — ZERO Cursor REAL):
 *  E8   Nora Agents tool `request_generic_execution_prepare` registered and wired to the
 *       unique Product backend; PREPARE only — never an ExecutionAttempt.
 *  E9   natural documentary analysis WITHOUT docs_write / artifactMaterializationOperation
 *       discriminants → Generic PREPARE (recommend → OK → EC) — no Fake discriminant injection.
 *  E9b  code-like mission (no docs taxonomy) → same Generic path.
 *  E10  project WITHOUT activeCycleInstanceId → Generic PREPARE; no CycleInstance created.
 *  E11  incompatible_execution_intent is no longer the exclusive dead-end for a natural signal
 *       without docs_write (explicit hostile continuationKind stays BLOCKED).
 *  E12  D-P6-SHE-01 — structural signals → PREPARE OK (empty decisionRefs, MATERIALITY:STRUCTURAL);
 *       HD/authority deferred to Execute; protected-path remains fail-closed.
 *  E14  accept "OK" without a CURRENT offer clarifies — no invented prepare.
 *  NR   REQUIRE_ARTIFACT + docs_write-compatible effect still routes Artifact governed (F05 T05).
 *
 * PREPARE ≠ AUTHORIZE ≠ EXECUTE. No synthetic HumanDecision.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ScriptedModel, assistantMessage, functionCall } from "@openai/agents/testing";
import { RunContext } from "@openai/agents";
import * as prepareSvc from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { runNoraAgentsTurn, sfiaBoundaryInstructions } from "@/lib/nora-cognitive-runtime";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import {
  orchestrateProjectAssistantTurn,
} from "@/features/project-assistant/orchestrateTurn";
import {
  inspectExecutionContract,
} from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  authorizeGenericPreparedContract,
} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import {
  decideTrajectory,
} from "@/features/project-assistant/w2/decideTrajectory";
import {
  proposeTrajectoryOptions,
} from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import {
  resolveW2QualificationInputs,
} from "@/features/project-assistant/w2/qualificationInputs";
import {
  CLARIFY_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  governedExecuteSelectAgent,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import {
  orchestrateAssistantSend,
} from "@/features/project-assistant/f2/orchestrateF2";
import {
  resolveActiveCycleGovernedContinuation,
  hasCompatibleDocsWriteMaterializationEffect,
  hasNaturalActiveCycleDeliverableMaterializationSignal,
} from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
import {
  validateIntentAnalysisPayload,
} from "@/features/project-assistant/f2/intentAnalysis";
import {
  recordObligationPolicyRequireArtifact,
} from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  resetF2ProposalStoreForTests,
} from "@/features/project-assistant/f2/proposalStore";
import {
  resetMw5ChallengeStoreForTests,
} from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  getPendingGenericPrepareOffer,
  resetPendingGenericPrepareOfferStoreForTests,
  resolvePrepareOfferSessionKey,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  rememberGenericPrepareRecommendation,
  resolveChatFirstGenericPrepareGo,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import type {
  ProjectAssistantContextDto,
} from "@/features/project-assistant/types";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
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
import {
  ensureManagedRepoCloneSkeleton,
} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { createProductExecutionAgentsTools } from "@/lib/nora-cognitive-runtime/productExecutionAgentsTools";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const APP_ROOT = path.resolve(__dirname, "../..");

// ---------------------------------------------------------------------------
// Deterministic F2 intent-analysis provider — NO docs_write discriminants.
// Wraps the Fake provider; only intercepts F2 intent analysis for DER16 markers.
// ---------------------------------------------------------------------------

const SIGNALS_OK = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
};

function baseAnalysisJson(over: Record<string, unknown>): Record<string, unknown> {
  return {
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:delivery",
    signals: SIGNALS_OK,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    continuationKind: null,
    artifactMaterializationOperation: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    activatedBlocks: ["qualification"],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
    pilotDecisionCandidate: null,
    ...over,
  };
}

/** E9 — natural documentary mission: NO executionIntent, NO artifactMaterializationOperation. */
function naturalDocAnalysisJson(over: Record<string, unknown> = {}) {
  return baseAnalysisJson({
    objective: "Écrire une spécification Markdown dans le dépôt du projet",
    scope: "projects/demo/docs",
    rephrasedRequest:
      "Rédiger un document Markdown de spécification dans le dépôt du projet",
    expectedOutcome: "Spécification consultable dans le dépôt du projet",
    ...over,
  });
}

/** E9b — code-like mission: intentKind "other", NO docs taxonomy. */
function codeLikeAnalysisJson(over: Record<string, unknown> = {}) {
  return baseAnalysisJson({
    objective: "Refactorer le module d'export du projet demo",
    scope: "projects/demo/src",
    rephrasedRequest: "Refactorer le module d'export sous projects/demo/src",
    expectedOutcome: "Module d'export simplifié, tests inchangés",
    executionIntent: {
      intentKind: "other",
      scopeIn: ["projects/demo/src"],
      scopeOut: [],
    },
    ...over,
  });
}

const MARKER_NATURAL_DOC = "__DER16_NATURAL_DOC__";
const MARKER_CODE_LIKE = "__DER16_CODE_LIKE__";
const MARKER_STRUCTURAL_DOC = "__DER16_STRUCTURAL_DOC__";
const MARKER_NEW_CYCLE = "__DER16_NEW_CYCLE__";
const MARKER_ACCEPT_NO_OFFER = "__DER16_ACCEPT_NO_OFFER__";

function intercept(messages: ProviderChatMessage[]): string | null {
  const isF2 = messages.some(
    (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
  );
  if (!isF2) return null;
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const full = lastUser?.content ?? "";
  // Only the CURRENT demand — canonical history may carry earlier markers.
  const cur = full.split("Demande courante (à évaluer):").pop() ?? full;
  const u = cur;
  let payload: Record<string, unknown> | null = null;
  if (u.includes(MARKER_NATURAL_DOC)) payload = naturalDocAnalysisJson();
  else if (u.includes(MARKER_CODE_LIKE)) payload = codeLikeAnalysisJson();
  else if (u.includes(MARKER_NEW_CYCLE)) {
    payload = baseAnalysisJson({
      objective: "Préparer un nouveau cycle Delivery pour formaliser la suite",
      rephrasedRequest: "Prépare un nouveau cycle Delivery",
      scope: "Formalisation bornée sans exécution",
      expectedOutcome: "Cycle Delivery proposé",
    });
  }
  else if (u.includes(MARKER_STRUCTURAL_DOC)) {
    payload = naturalDocAnalysisJson({
      signals: { ...SIGNALS_OK, architectureImpact: true, lowRiskBounded: false },
    });
  } else if (u.includes(MARKER_ACCEPT_NO_OFFER)) {
    payload = naturalDocAnalysisJson({
      pilotDecisionCandidate: {
        disposition: "accept",
        targetKind: "current_recommendation",
        rationale: "Le Pilote dit OK sans offre courante.",
      },
    });
  }
  if (!payload) return null;
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify(payload)}`;
}

class Der16Provider implements ConversationProvider {
  readonly providerId = "fake-test";
  private readonly inner: FakeConversationProvider;

  constructor(inner?: FakeConversationProvider) {
    this.inner = inner ?? new FakeConversationProvider();
  }

  private result(text: string): ProviderCompletionResult {
    return {
      text,
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "fake-der16",
      },
    };
  }

  async complete(
    messages: ProviderChatMessage[],
    options?: { signal?: AbortSignal },
  ): Promise<ProviderCompletionResult> {
    const hit = intercept(messages);
    if (hit) return this.result(hit);
    return this.inner.complete(messages, options);
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
    signal?: AbortSignal;
  }): Promise<ProviderCompletionResult> {
    const hit = intercept(input.messages);
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

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
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
    setConversationProviderForTests(new Der16Provider());
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    sessionDbPath = tempProductDbPath("p6-der16-session.sqlite");
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-der16-product.sqlite"),
      idPrefix: "d16",
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
  });

  async function seedProject(input: {
    suffix: string;
    withCycle: boolean;
    withRequireArtifactPolicy?: boolean;
  }) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `D16 ${input.suffix}`,
      objective: "Generic Nora tool invocation",
      context: "det der16",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `D1${input.suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:d16-${input.suffix}`,
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
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });

    let cycleInstanceId: string | null = null;
    if (input.withCycle) {
      cycleInstanceId = `cyc:d16-${input.suffix}`;
      await oa.cycleServices.createCycle.execute({
        cycleInstanceId,
        cycleTypeId: "cyc:delivery",
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
        issuedAt: "2026-10-16T08:00:00.000Z",
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
      if (input.withRequireArtifactPolicy) {
        const pol = await recordObligationPolicyRequireArtifact({
          projectId,
          cycleInstanceId,
          cycleServices: oa.cycleServices,
          decisionServices: oa.decisionServices,
          authorityResolver: oa.authorityResolver,
          nowIso: () => "2026-10-16T08:02:00.000Z",
        });
        if (!pol.ok) throw new Error("require_artifact_policy");
      }
    }

    const identity = `acme/d16-${input.suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, cycleInstanceId, oa };
  }

  async function countCycles(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    return (await oa.cycleServices.cycles.listByProject(projectId)).length;
  }

  async function countAttempts(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    const contracts = await oa.executionContractServices.contracts.listByProject(
      projectId,
    );
    let total = 0;
    for (const c of contracts) {
      total += (
        await oa.executionAttemptServices.attempts.listByContract(
          c.executionContractId,
        )
      ).length;
    }
    return total;
  }

  function projectDto(input: {
    projectId: string;
    cycleInstanceId: string | null;
    overview: {
      project: { name: string; objective: string };
      livingState: { id: string; version: number; createdAt: string };
      doctrine: {
        id: string;
        version: string | number;
        digest: string;
        status: string;
      };
    };
  }): ProjectAssistantContextDto {
    return {
      projectId: input.projectId,
      name: input.overview.project.name,
      shortReference: null,
      objective: input.overview.project.objective,
      contextSummary: "p6 der16",
      criticality: "STANDARD",
      constraints: [],
      lpsId: input.overview.livingState.id,
      lpsVersion: input.overview.livingState.version,
      lpsCreatedAt: input.overview.livingState.createdAt,
      doctrineId: input.overview.doctrine.id,
      doctrineVersion: String(input.overview.doctrine.version),
      doctrineDigest: input.overview.doctrine.digest,
      doctrineStatus: input.overview.doctrine.status,
      runtimeMode: "local",
      persistence: "product-sqlite",
      readiness: "ready",
      activeCycleInstanceId: input.cycleInstanceId,
      ckcResolutionRef: null,
    };
  }

  function productTools(projectId: string, oa: NonNullable<RuntimeApplicationService["oa"]>) {
    return createProductExecutionAgentsTools({
      projectId,
      resolve: async () => ({
        ok: false as const,
        code: "NOT_USED",
        message: "not used in this proof",
      }),
      // Same wiring shape as orchestrateTurn.ts (same Product backend).
      solicitPrepare: async (args) =>
        solicitGenericExecutionPrepare({
          oa,
          projectId,
          cycleInstanceId: null,
          mission: args,
          sessionDbPath,
          forceLocalAuthority: true,
          pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
        }),
    });
  }

  async function invokeTool(
    tool: ReturnType<typeof productTools>[number],
    args: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    const raw = await tool.invoke(new RunContext({}), JSON.stringify(args));
    return JSON.parse(String(raw)) as Record<string, unknown>;
  }

  // -------------------------------------------------------------------------
  // E8 — Nora tool registered; PREPARE only
  // -------------------------------------------------------------------------

  it("E8 — tool registered only when solicitPrepare injected; no taxonomy params; Agents-local", async () => {
    const readOnly = createProductExecutionAgentsTools({
      projectId: "proj-x",
      resolve: async () => ({ ok: false as const, code: "X", message: "x" }),
    });
    expect(readOnly.map((t) => t.name)).toEqual(["product_execution_context_get"]);

    const { projectId, oa } = await seedProject({ suffix: "e8a", withCycle: false });
    const tools = productTools(projectId, oa);
    expect(tools.map((t) => t.name)).toEqual([
      "product_execution_context_get",
      "request_generic_execution_prepare",
    ]);
    const prepareTool = tools[1]!;
    const params = JSON.stringify(
      (prepareTool as unknown as { parameters: unknown }).parameters,
    );
    expect(params).not.toMatch(/docs_write|REQUIRE_ARTIFACT|cycleTypeId|continuationKind|artifactMaterialization/);
    expect(
      (prepareTool as unknown as { parameters: { required: string[] } }).parameters
        .required,
    ).toEqual([]);
    expect(
      (prepareTool as unknown as { description: string }).description,
    ).toMatch(/PREPARE ≠ AUTHORIZE ≠ EXECUTE/);

    // Agents-local skip list (not projected to Fake/provider ToolDefinition).
    const src = fs.readFileSync(
      path.join(APP_ROOT, "lib/nora-cognitive-runtime/providerAgentsModel.ts"),
      "utf8",
    );
    expect(src).toContain('name === "request_generic_execution_prepare"');
    // Wired in orchestrateTurn to the SAME Product backend (no parallel engine).
    const orch = fs.readFileSync(
      path.join(APP_ROOT, "features/project-assistant/orchestrateTurn.ts"),
      "utf8",
    );
    expect(orch).toContain("solicitPrepare");
    expect(orch).toContain("solicitGenericExecutionPrepare");
    const svc = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/w2/prepareGenericExecutionContractDraft.ts",
      ),
      "utf8",
    );
    expect(svc).toMatch(/solicitGenericExecutionPrepare[\s\S]*prepareGenericExecutionContractDraft\(/);
  });

  it("E8 — invoke → Generic PREPARE (EC draft/validated), executionAttemptCreated false, no Attempt, no HD, no cycle", async () => {
    const { projectId, oa } = await seedProject({ suffix: "e8b", withCycle: false });
    const cyclesBefore = await countCycles(oa, projectId);
    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId)).length;
    const attemptsBefore = await countAttempts(oa, projectId);

    const out = await invokeTool(productTools(projectId, oa)[1]!, {
      objective: "Refactorer le module d'export",
      expectedOutcome: "Module d'export simplifié",
      scope: "projects/demo/src",
    });
    expect(out.ok).toBe(true);
    expect(out.executionAttemptCreated).toBe(false);
    expect(out.humanDecisionCreated).toBe(false);
    expect(out.projectId).toBe(projectId);
    expect(String(out.executionContractId)).toMatch(/^xct:gen-prep:/);
    expect(String(out.disclosure)).toMatch(/PREPARE ≠ AUTHORIZE ≠ EXECUTE/);
    expect(out.projectContextOnly).toBe(true);
    expect(out.cycleInstanceId).toBeNull();

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: String(out.executionContractId),
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
    expect(["draft", "validated", "confirmation_required"]).toContain(
      loaded.contract.status,
    );

    expect(await countCycles(oa, projectId)).toBe(cyclesBefore);
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(hdBefore);
    expect(await countAttempts(oa, projectId)).toBe(attemptsBefore);
  });

  it("E8 — tool cannot force an Attempt flag; hostile solicit result is normalized; insufficient mission fails honestly", async () => {
    const hostile = createProductExecutionAgentsTools({
      projectId: "proj-h",
      resolve: async () => ({ ok: false as const, code: "X", message: "x" }),
      solicitPrepare: async () => ({ ok: true, executionAttemptCreated: true }),
    });
    const o = await invokeTool(hostile[1]!, { objective: "x" });
    expect(o.executionAttemptCreated).toBe(false);

    const { projectId, oa } = await seedProject({ suffix: "e8c", withCycle: false });
    const out = await invokeTool(productTools(projectId, oa)[1]!, {});
    expect(out.ok).toBe(false);
    expect(out.code).toBe("MISSION_INSUFFICIENTLY_QUALIFIED");
    expect(out.executionAttemptCreated).toBe(false);

    const noProject = createProductExecutionAgentsTools({
      projectId: "  ",
      resolve: async () => ({ ok: false as const, code: "X", message: "x" }),
      solicitPrepare: async () => ({ ok: true }),
    });
    const np = await invokeTool(noProject[1]!, { objective: "x" });
    expect(np.code).toBe("PRODUCT_PROJECT_REQUIRED");
    expect(np.executionAttemptCreated).toBe(false);
  });

  // -------------------------------------------------------------------------
  // E9 — natural documentary WITHOUT docs_write discriminants
  // -------------------------------------------------------------------------

  it("E9 — natural documentary (no docs_write / no artifactMaterializationOperation) on active cycle → recommend → OK → EC; same cycle; no HD", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "e9",
      withCycle: true,
    });
    // Analysis shape proof: this is NOT the F05 Fake discriminant shape.
    const probe = validateIntentAnalysisPayload(naturalDocAnalysisJson());
    expect(probe.parseOk).toBe(true);
    expect(probe.executionIntent).toBeNull();
    expect(probe.artifactMaterializationOperation ?? null).toBeNull();
    expect(hasNaturalActiveCycleDeliverableMaterializationSignal(probe)).toBe(true);
    expect(hasCompatibleDocsWriteMaterializationEffect(probe)).toBe(false);

    const cyclesBefore = await countCycles(oa, projectId);
    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId)).length;

    const turn1 = await orchestrateAssistantSend({
      projectId,
      content: `Produis-moi une spécification Markdown pour le projet. ${MARKER_NATURAL_DOC}`,
      sessionDbPath,
    });
    expect(turn1.ok).toBe(true);
    if (!turn1.ok) throw new Error(turn1.message);
    expect(turn1.text).not.toMatch(/incompatible|REQUIRE_ARTIFACT/i);
    expect(turn1.text).toMatch(/Je recommande|Je peux préparer/i);
    expect(turn1.text).toMatch(/Le cycle actif est conservé/);

    const offer = getPendingGenericPrepareOffer(
      projectId,
      resolvePrepareOfferSessionKey({ sessionDbPath }),
    );
    expect(offer).toBeTruthy();
    expect(offer?.cycleInstanceId).toBe(cycleInstanceId);
    expect(offer?.missionEffects?.intentKind ?? null).toBeNull();

    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "OK, vas-y",
      sessionDbPath,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    const ecId = turn2.text.match(/xct:gen-prep:[a-f0-9]+/)?.[0];
    expect(ecId).toBeTruthy();
    expect(turn2.text).toMatch(/Aucune exécution n'a été lancée/);

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: ecId!,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.cycleInstanceId).toBe(cycleInstanceId);

    expect(await countCycles(oa, projectId)).toBe(cyclesBefore);
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(hdBefore);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("E9b — code-like mission (intentKind other, no docs taxonomy gate) on active cycle → same Generic path", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "e9b",
      withCycle: true,
    });
    const turn1 = await orchestrateAssistantSend({
      projectId,
      content: `Refactore le module d'export. ${MARKER_CODE_LIKE}`,
      sessionDbPath,
    });
    expect(turn1.ok).toBe(true);
    if (!turn1.ok) throw new Error(turn1.message);
    expect(turn1.text).toMatch(/Je recommande|Je peux préparer/i);
    const offer = getPendingGenericPrepareOffer(
      projectId,
      resolvePrepareOfferSessionKey({ sessionDbPath }),
    );
    expect(offer?.cycleInstanceId).toBe(cycleInstanceId);
    expect(offer?.missionEffects?.intentKind).toBe("other");

    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "OK, vas-y",
      sessionDbPath,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    expect(turn2.text).toMatch(/xct:gen-prep:/);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  // -------------------------------------------------------------------------
  // E10 — no active cycle (S8)
  // -------------------------------------------------------------------------

  it("E10 — project WITHOUT active cycle: natural documentary → recommend (null-cycle offer) → OK → EC; NO CycleInstance created", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "e10",
      withCycle: false,
    });
    expect(cycleInstanceId).toBeNull();
    const cyclesBefore = await countCycles(oa, projectId);
    expect(cyclesBefore).toBe(0);

    const turn1 = await orchestrateAssistantSend({
      projectId,
      content: `Produis-moi une spécification Markdown pour le projet. ${MARKER_NATURAL_DOC}`,
      sessionDbPath,
    });
    expect(turn1.ok).toBe(true);
    if (!turn1.ok) throw new Error(turn1.message);
    expect(turn1.text).toMatch(/Je recommande|Je peux préparer/i);
    // Honest wording — never claims an active cycle that does not exist.
    expect(turn1.text).not.toMatch(/Le cycle actif est conservé/);
    expect(turn1.text).toMatch(/Contexte projet conservé/);
    expect(turn1.text).toMatch(/aucun cycle artificiel/i);
    // R3/R4 — NO synthetic catalog id: cycleTypeId is null, never "project-context".
    expect(turn1.f2?.qualification?.cycleTypeId).toBeNull();
    expect(turn1.f2?.qualification?.cycleInstanceId).toBeUndefined();
    expect(turn1.f2?.qualification?.cycleStatus).toBeUndefined();
    expect(turn1.f2?.qualification?.disclosures).toContain("NO_ACTIVE_CYCLE");
    expect(turn1.f2?.qualification?.disclosures).toContain("PROJECT_CONTEXT_ONLY");
    expect(JSON.stringify(turn1.f2?.qualification)).not.toMatch(/"project-context"/);

    const offer = getPendingGenericPrepareOffer(
      projectId,
      resolvePrepareOfferSessionKey({ sessionDbPath }),
    );
    expect(offer).toBeTruthy();
    expect(offer?.cycleInstanceId).toBeNull();

    const turn2 = await orchestrateAssistantSend({
      projectId,
      content: "OK, vas-y",
      sessionDbPath,
    });
    expect(turn2.ok).toBe(true);
    if (!turn2.ok) throw new Error(turn2.message);
    const ecId = turn2.text.match(/xct:gen-prep:[a-f0-9]+/)?.[0];
    expect(ecId).toBeTruthy();

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: ecId!,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);

    expect(await countCycles(oa, projectId)).toBe(0);
    expect(await countAttempts(oa, projectId)).toBe(0);
    // Consumed by PREPARE.
    expect(
      getPendingGenericPrepareOffer(
        projectId,
        resolvePrepareOfferSessionKey({ sessionDbPath }),
      ),
    ).toBeNull();
  });

  it("E10 — null-cycle offer binds only to null-cycle GO (no cross-bind with a cycle)", async () => {
    const { projectId } = await seedProject({ suffix: "e10b", withCycle: false });
    const analysis = validateIntentAnalysisPayload(naturalDocAnalysisJson());
    const fpNull = rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: "2026-10-16T09:00:00.000Z",
      sessionDbPath,
    });
    const okNull = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: null,
      text: "OK, vas-y",
      sessionDbPath,
    });
    expect(okNull).toEqual({ kind: "prepare", offerFingerprint: fpNull });
    const withCycle = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: "cyc:other",
      text: "OK, vas-y",
      sessionDbPath,
    });
    expect(withCycle).toEqual({
      kind: "no_go",
      reason: "prepare_offer_cycle_mismatch",
    });

    // Fingerprint differs between null-cycle and cycle-bound offers.
    const fpCycle = rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: "cyc:other",
      analysis,
      offeredAtIso: "2026-10-16T09:01:00.000Z",
      sessionDbPath,
    });
    expect(fpCycle).not.toBe(fpNull);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId,
        cycleInstanceId: null,
        text: "OK, vas-y",
        sessionDbPath,
      }),
    ).toEqual({ kind: "no_go", reason: "prepare_offer_cycle_mismatch" });
  });

  it("E10 — explicit prepare intent on a code-like mission WITHOUT active cycle → direct Generic PREPARE (cycleInstanceId null)", async () => {
    const { projectId, oa } = await seedProject({ suffix: "e10c", withCycle: false });
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Prépare le contrat d'exécution pour refactorer le module d'export. ${MARKER_CODE_LIKE}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    const ecId = turn.text.match(/xct:gen-prep:[a-f0-9]+/)?.[0];
    expect(ecId).toBeTruthy();
    expect(turn.text).toMatch(/Aucune exécution n'a été lancée/);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: ecId!,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
    expect(await countCycles(oa, projectId)).toBe(0);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("E10 — explicit NEW_CYCLE formalization WITHOUT cycle stays on the historical createCycle path (not hijacked)", async () => {
    const { projectId } = await seedProject({ suffix: "e10d", withCycle: false });
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Prépare un nouveau cycle Delivery pour formaliser la suite. ${MARKER_NEW_CYCLE}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    expect(turn.text).not.toMatch(/xct:gen-prep:/);
    expect(turn.text).not.toMatch(/Contexte projet conservé/);
  });

  // -------------------------------------------------------------------------
  // E11 — incompatible_execution_intent no longer exclusive dead-end
  // -------------------------------------------------------------------------

  it("E11 — natural signal WITHOUT docs_write → NEW_CYCLE_FORMALIZATION (no_compatible_artifact_effect), not BLOCKED; explicit hostile kind stays BLOCKED", async () => {
    const { projectId, cycleInstanceId } = await seedProject({
      suffix: "e11",
      withCycle: true,
    });
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const project = projectDto({ projectId, cycleInstanceId, overview });

    const natural = validateIntentAnalysisPayload(naturalDocAnalysisJson());
    const resolved = await resolveActiveCycleGovernedContinuation({
      project,
      analysis: natural,
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("NEW_CYCLE_FORMALIZATION");
    if (resolved.mode === "NEW_CYCLE_FORMALIZATION") {
      expect(resolved.reason).toBe("no_compatible_artifact_effect");
    }

    // Same without any active cycle — still not BLOCKED no_active_cycle/incompatible.
    const noCycle = await resolveActiveCycleGovernedContinuation({
      project: projectDto({ projectId, cycleInstanceId: null, overview }),
      analysis: natural,
      oa: runtime.oa!,
    });
    expect(noCycle.mode).toBe("NEW_CYCLE_FORMALIZATION");

    // Explicit (hostile / contradictory) Artifact continuationKind stays fail-closed.
    const hostile = validateIntentAnalysisPayload(
      naturalDocAnalysisJson({
        continuationKind: "active_cycle_artifact_materialization",
      }),
    );
    const blocked = await resolveActiveCycleGovernedContinuation({
      project,
      analysis: hostile,
      oa: runtime.oa!,
    });
    expect(blocked.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (blocked.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(blocked.reason).toBe("incompatible_execution_intent");
    }
  });

  // -------------------------------------------------------------------------
  // E12 — structural (D-P6-SHE-01 requalification: PREPARE OK, HD at Execute)
  // -------------------------------------------------------------------------

  it("E12 — D-P6-SHE-01: tool structural impact → PREPARE OK empty decisionRefs MATERIALITY:STRUCTURAL; no Attempt / no HD", async () => {
    const { projectId, oa } = await seedProject({ suffix: "e12a", withCycle: false });
    const out = await invokeTool(productTools(projectId, oa)[1]!, {
      objective: "Migrer le schéma de données",
      expectedOutcome: "Schéma migré",
      scope: "projects/demo/src",
      impactSignals: { dataImpact: true },
    });
    expect(out.ok).toBe(true);
    expect(out.executionAttemptCreated).toBe(false);
    expect(out.humanDecisionCreated).toBe(false);
    expect(String(out.executionContractId)).toMatch(/^xct:gen-prep:/);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: String(out.executionContractId),
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("E12 — D-P6-SHE-01: protected path PREPARE stamps STRUCTURAL (no silent NON_STRUCTURAL; no Attempt); model cannot bypass", async () => {
    const { projectId, oa } = await seedProject({ suffix: "e12b", withCycle: false });
    const out = await invokeTool(productTools(projectId, oa)[1]!, {
      objective: "Modifier la doctrine Studio",
      expectedOutcome: "Doctrine modifiée",
      scope: "projects/sfia-studio/app/lib/oa/doctrine/product/registry.json",
      impactSignals: {},
    });
    expect(out.executionAttemptCreated).toBe(false);
    expect(out.humanDecisionCreated).toBe(false);
    // D-P6-SHE-01 — protected path is STRUCTURAL materiality; PREPARE may succeed
    // inspectably. Authority / protected gate remains at Execute (not silent NON_STRUCTURAL).
    if (out.ok) {
      const loaded = await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: String(out.executionContractId),
      });
      expect(loaded.ok).toBe(true);
      if (!loaded.ok) throw new Error("load");
      expect(loaded.contract.decisionRefs ?? []).toEqual([]);
      expect(loaded.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
      expect(loaded.contract.constraints).not.toContain("MATERIALITY:NON_STRUCTURAL");
    } else {
      // If another gate still refuses at PREPARE, keep fail-closed honesty.
      expect(out.code).not.toBe("GENERIC_PREPARE_DRAFTED");
    }
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("E12 — D-P6-SHE-01 F2: structural signals → recommend/prepare path (SHE); solicit OK empty refs STRUCTURAL", async () => {
    const { projectId, oa } = await seedProject({ suffix: "e12c", withCycle: true });
    const sessionKey = resolvePrepareOfferSessionKey({ sessionDbPath });
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Écris la note d'architecture Markdown du projet. ${MARKER_STRUCTURAL_DOC}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    // D-P6-SHE-01 — structural no longer blocks the prepare recommendation path.
    // Either recommend-prepare text or an inspectable prepared EC id is admissible.
    const recommended = /Je recommande de confier cette mission à Cursor/i.test(
      turn.text,
    );
    const prepared = /xct:gen-prep:/.test(turn.text);
    expect(recommended || prepared).toBe(true);

    const offer = getPendingGenericPrepareOffer(projectId, sessionKey);
    if (!prepared) {
      expect(offer).not.toBeNull();
      expect(offer!.signalArchitectureImpact).toBe(true);
      expect(offer!.signalSecurityImpact).toBe(false);
      expect(offer!.signalDataImpact).toBe(false);
      expect(offer!.signalArchitectureImpact || offer!.signalStructuralChange).toBe(
        true,
      );
    }

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: offer?.cycleInstanceId ?? null,
      analysis: validateIntentAnalysisPayload(
        naturalDocAnalysisJson({
          signals: {
            ...SIGNALS_OK,
            architectureImpact: true,
            lowRiskBounded: false,
          },
        }),
      ),
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get");
    expect(live.contract.decisionRefs ?? []).toEqual([]);
    expect(live.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("E12 — D-P6-SHE-01 F2: securityImpact / dataImpact solicit PREPARE OK (empty refs STRUCTURAL)", async () => {
    for (const [suffix, flag] of [
      ["e12sec", "securityImpact"],
      ["e12data", "dataImpact"],
    ] as const) {
      const { projectId, cycleInstanceId, oa } = await seedProject({
        suffix,
        withCycle: true,
      });
      const providerPayload = naturalDocAnalysisJson({
        signals: {
          ...SIGNALS_OK,
          [flag]: true,
          lowRiskBounded: false,
        },
      });
      rememberGenericPrepareRecommendation({
        projectId,
        cycleInstanceId,
        analysis: validateIntentAnalysisPayload(providerPayload),
        offeredAtIso: "2026-08-23T04:30:00.000Z",
        sessionDbPath,
      });
      const offer = getPendingGenericPrepareOffer(
        projectId,
        resolvePrepareOfferSessionKey({ sessionDbPath }),
      );
      expect(offer).not.toBeNull();
      if (flag === "securityImpact") {
        expect(offer!.signalSecurityImpact).toBe(true);
      } else {
        expect(offer!.signalDataImpact).toBe(true);
      }
      const prep = await solicitGenericExecutionPrepare({
        oa,
        projectId,
        cycleInstanceId,
        analysis: validateIntentAnalysisPayload(providerPayload),
        sessionDbPath,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(prep.message);
      expect(prep.humanDecisionCreated).toBe(false);
      expect(prep.executionAttemptCreated).toBe(false);
      const live = await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prep.executionContractId,
      });
      expect(live.ok).toBe(true);
      if (!live.ok) throw new Error("get");
      expect(live.contract.decisionRefs ?? []).toEqual([]);
      expect(live.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
      expect(await countAttempts(oa, projectId)).toBe(0);
    }
  });

  // -------------------------------------------------------------------------
  // E14 — accept without offer
  // -------------------------------------------------------------------------

  it("E14 — accept OK without a CURRENT offer clarifies (no invented prepare) — with cycle and without", async () => {
    for (const withCycle of [true, false]) {
      const { projectId, oa } = await seedProject({
        suffix: withCycle ? "e14a" : "e14b",
        withCycle,
      });
      const turn = await orchestrateAssistantSend({
        projectId,
        content: `OK, vas-y ${MARKER_ACCEPT_NO_OFFER}`,
        sessionDbPath: tempProductDbPath(`p6-der16-e14-${withCycle}.sqlite`),
      });
      expect(turn.ok).toBe(true);
      if (!turn.ok) throw new Error(turn.message);
      expect(turn.text).toMatch(/Aucune recommandation de préparation courante/);
      expect(turn.text).not.toMatch(/xct:gen-prep:/);
      expect(turn.text).toMatch(
        withCycle ? /Le cycle actif est conservé/ : /Contexte projet conservé/,
      );
      expect(await countAttempts(oa, projectId)).toBe(0);
    }
  });

  // -------------------------------------------------------------------------
  // NR — Artifact governed path unchanged (F05 T05)
  // -------------------------------------------------------------------------

  it("NR — REQUIRE_ARTIFACT CURRENT + docs_write-compatible effect keeps Artifact governed (no Generic PREPARE offer)", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "nr",
      withCycle: true,
      withRequireArtifactPolicy: true,
    });
    const turn = await orchestrateAssistantSend({
      projectId,
      content: "__F2_ARTIFACT_MATERIALIZE__",
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    expect(turn.text).not.toMatch(/xct:gen-prep:/);
    expect(
      getPendingGenericPrepareOffer(
        projectId,
        resolvePrepareOfferSessionKey({ sessionDbPath }),
      ),
    ).toBeNull();
    if (turn.f2?.qualification?.cycleInstanceId) {
      expect(turn.f2.qualification.cycleInstanceId).toBe(cycleInstanceId);
    }
    expect(
      turn.f2?.turnKind === "f2_proposal" ||
        turn.f2?.turnKind === "f2_clarification" ||
        turn.f2?.turnKind === "f2_blocked",
    ).toBe(true);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("NR — natural doc signal WITH REQUIRE_ARTIFACT but no docs_write effect still reaches Generic (not Artifact obligation dead-end)", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "nr2",
      withCycle: true,
      withRequireArtifactPolicy: true,
    });
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Produis-moi une spécification Markdown pour le projet. ${MARKER_NATURAL_DOC}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    expect(turn.text).not.toMatch(/incompatible/i);
    expect(turn.text).toMatch(/Je recommande|Je peux préparer/i);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  // =========================================================================
  // CORRECTION PASS — R1…R6
  // =========================================================================

  /** Same wiring shape as orchestrateTurn.ts solicitPrepare (shared Product service). */
  function runnerSolicitWiring(
    projectId: string,
    oa: NonNullable<RuntimeApplicationService["oa"]>,
  ) {
    return {
      projectId,
      resolve: async () => ({
        ok: false as const,
        code: "NOT_USED",
        message: "not used in this proof",
      }),
      solicitPrepare: async (args: {
        objective?: string;
        expectedOutcome?: string;
        scope?: string;
        contextNotes?: string;
        impactSignals?: Record<string, boolean | undefined>;
      }) =>
        prepareSvc.solicitGenericExecutionPrepare({
          oa,
          projectId,
          cycleInstanceId: null,
          mission: args,
          sessionDbPath,
          forceLocalAuthority: true,
          pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
        }),
    };
  }

  // -------------------------------------------------------------------------
  // R1 — ONE Product admission service for F2 and the Nora tool
  // -------------------------------------------------------------------------

  it("R1 — BEHAVIORAL: F2 Generic PREPARE goes through solicitGenericExecutionPrepare({analysis}); Nora tool goes through the SAME service ({mission})", async () => {
    const spy = vi.spyOn(prepareSvc, "solicitGenericExecutionPrepare");
    try {
      const { projectId, cycleInstanceId, oa } = await seedProject({
        suffix: "r1a",
        withCycle: true,
      });

      // --- F2 entry: recommend → OK → EC
      await orchestrateAssistantSend({
        projectId,
        content: `Refactore le module d'export. ${MARKER_CODE_LIKE}`,
        sessionDbPath,
      });
      expect(spy).not.toHaveBeenCalled(); // recommendation alone never prepares
      const turn2 = await orchestrateAssistantSend({
        projectId,
        content: "OK, vas-y",
        sessionDbPath,
      });
      expect(turn2.ok).toBe(true);
      if (!turn2.ok) throw new Error(turn2.message);
      const f2EcId = turn2.text.match(/xct:gen-prep:[a-f0-9]+/)?.[0];
      expect(f2EcId).toBeTruthy();

      expect(spy).toHaveBeenCalledTimes(1);
      const f2Arg = spy.mock.calls[0]![0];
      expect(f2Arg.analysis).toBeTruthy();
      expect(f2Arg.mission).toBeUndefined();
      expect(f2Arg.projectId).toBe(projectId);
      expect(f2Arg.cycleInstanceId).toBe(cycleInstanceId);
      const f2Result = await spy.mock.results[0]!.value;
      expect(f2Result.ok).toBe(true);
      expect(f2Result.executionContractId).toBe(f2EcId);

      // --- Nora tool entry: same service, mission fields
      const out = await invokeTool(productTools(projectId, oa)[1]!, {
        objective: "Refactorer le module d'export du projet demo",
        expectedOutcome: "Module d'export simplifié",
        scope: "projects/demo/src",
      });
      expect(out.ok).toBe(true);
      expect(spy).toHaveBeenCalledTimes(2);
      const toolArg = spy.mock.calls[1]![0];
      expect(toolArg.mission).toBeTruthy();
      expect(toolArg.analysis).toBeUndefined();

      // Both ECs are produced by the unique backend: identical contract surface.
      const [a, b] = await Promise.all(
        [f2EcId!, String(out.executionContractId)].map((id) =>
          oa.executionContractServices.getExecutionContract.execute({
            executionContractId: id,
          }),
        ),
      );
      expect(a!.ok && b!.ok).toBe(true);
      if (!a!.ok || !b!.ok) throw new Error("load");
      expect(a!.contract.action).toBe(b!.contract.action);
      expect(a!.contract.scope).toBe(b!.contract.scope);
      expect(a!.contract.constraints).toContain("PREPARE_WITHOUT_SYSTEMATIC_HD");
      expect(b!.contract.constraints).toContain("PREPARE_WITHOUT_SYSTEMATIC_HD");
      expect(a!.contract.decisionRefs ?? []).toEqual([]);
      expect(b!.contract.decisionRefs ?? []).toEqual([]);
    } finally {
      spy.mockRestore();
    }
  });

  it("R1 — BEHAVIORAL: F2 maps whatever the shared service returns (forced refusal surfaces in F2; no EC; F2 cannot bypass admission)", async () => {
    const { projectId, oa } = await seedProject({ suffix: "r1b", withCycle: true });
    await orchestrateAssistantSend({
      projectId,
      content: `Refactore le module d'export. ${MARKER_CODE_LIKE}`,
      sessionDbPath,
    });
    const spy = vi
      .spyOn(prepareSvc, "solicitGenericExecutionPrepare")
      .mockResolvedValueOnce({
        ok: false,
        code: "R1_SPY_FORCED_REFUSAL",
        message: "REFUS FORCÉ PAR LE SERVICE PARTAGÉ (spy).",
        humanDecisionCreated: false,
        executionAttemptCreated: false,
      });
    try {
      const turn = await orchestrateAssistantSend({
        projectId,
        content: "OK, vas-y",
        sessionDbPath,
      });
      expect(turn.ok).toBe(true);
      if (!turn.ok) throw new Error(turn.message);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(turn.text).toContain("REFUS FORCÉ PAR LE SERVICE PARTAGÉ (spy).");
      expect(turn.text).not.toMatch(/xct:gen-prep:/);
      expect(await countAttempts(oa, projectId)).toBe(0);
      expect(
        (await oa.executionContractServices.contracts.listByProject(projectId))
          .length,
      ).toBe(0);
    } finally {
      spy.mockRestore();
    }
  });

  it("R1 — static complement: orchestrateF2 no longer imports prepareGenericExecutionContractDraft directly", () => {
    const f2 = fs.readFileSync(
      path.join(APP_ROOT, "features/project-assistant/f2/orchestrateF2.ts"),
      "utf8",
    );
    expect(f2).not.toMatch(/\bprepareGenericExecutionContractDraft\b\s*\(/);
    expect(f2).toMatch(/solicitGenericExecutionPrepare\(\{/);
  });

  // -------------------------------------------------------------------------
  // R2 — FULL RUNNER tool invocation
  //   MODEL TOOL SELECTION: SCRIPTED (ScriptedModel / Fake provider script)
  //   PRODUCT BEHAVIOR: PROVEN (real Agents Runner → real tool → real Product)
  // -------------------------------------------------------------------------

  it("R2a — [MODEL TOOL SELECTION SCRIPTED · PRODUCT BEHAVIOR PROVEN] runNoraAgentsTurn: Pilote message → Runner invokes request_generic_execution_prepare → Product prepare → EC", async () => {
    const spy = vi.spyOn(prepareSvc, "solicitGenericExecutionPrepare");
    try {
      const { projectId, oa } = await seedProject({ suffix: "r2a", withCycle: false });
      const model = new ScriptedModel([
        [
          functionCall(
            "request_generic_execution_prepare",
            {
              objective: "Refactorer le module d'export du projet demo",
              expectedOutcome: "Module d'export simplifié, tests inchangés",
              scope: "projects/demo/src",
            },
            { callId: "call_prepare_r2a" },
          ),
        ],
        [assistantMessage("Contrat préparé (non autorisé, non lancé).")],
      ]);
      const budgetCalls: string[] = [];
      const result = await runNoraAgentsTurn({
        correlationId: "der16-r2a",
        projectId,
        systemInstructions: sfiaBoundaryInstructions(),
        userContent:
          "Peux-tu faire refactorer le module d'export par Cursor ? Prépare la mission.",
        model,
        workspaceRoot: resolveWorkspaceRootFromAppCwd(),
        enableTools: true,
        productExecutionTools: runnerSolicitWiring(projectId, oa),
      });
      void budgetCalls;

      // Runner really selected + invoked the tool (SDK function_call_result).
      expect(result.toolCalls).toBeGreaterThanOrEqual(1);
      expect(model.calls.length).toBe(2);
      const secondInput = model.calls[1]!.request.input as unknown[];
      const toolResultItem = secondInput.find(
        (item) =>
          item &&
          typeof item === "object" &&
          (item as { type?: string }).type === "function_call_result" &&
          (item as { name?: string }).name === "request_generic_execution_prepare",
      ) as { output?: unknown } | undefined;
      expect(toolResultItem).toBeTruthy();
      const rawOut =
        typeof toolResultItem!.output === "string"
          ? toolResultItem!.output
          : JSON.stringify(toolResultItem!.output);
      const payloadText =
        typeof toolResultItem!.output === "object" &&
        toolResultItem!.output &&
        "text" in (toolResultItem!.output as Record<string, unknown>)
          ? String((toolResultItem!.output as { text: unknown }).text)
          : rawOut;
      const payload = JSON.parse(payloadText) as Record<string, unknown>;
      expect(payload.ok).toBe(true);
      expect(payload.executionAttemptCreated).toBe(false);
      expect(payload.projectContextOnly).toBe(true);
      const ecId = String(payload.executionContractId);
      expect(ecId).toMatch(/^xct:gen-prep:/);

      // Product behavior proven: shared service called with Runner mission fields.
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy.mock.calls[0]![0].mission?.objective).toMatch(/Refactorer/);
      expect(spy.mock.calls[0]![0].analysis).toBeUndefined();

      // EC durable, inspectable, no HD, no Attempt, no cycle.
      const loaded = await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: ecId,
      });
      expect(loaded.ok).toBe(true);
      if (!loaded.ok) throw new Error("load");
      expect(loaded.contract.decisionRefs ?? []).toEqual([]);
      expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
      expect(await countAttempts(oa, projectId)).toBe(0);
      expect(await countCycles(oa, projectId)).toBe(0);
      model.assertComplete();
    } finally {
      spy.mockRestore();
    }
  });

  it("R2a — D-P6-SHE-01: Runner structural tool call PREPARE OK (empty refs STRUCTURAL; no Attempt)", async () => {
    const { projectId, oa } = await seedProject({ suffix: "r2a2", withCycle: false });
    const model = new ScriptedModel([
      [
        functionCall(
          "request_generic_execution_prepare",
          {
            objective: "Migrer le schéma de données",
            expectedOutcome: "Schéma migré",
            scope: "projects/demo/src",
            impactSignals: { dataImpact: true },
          },
          { callId: "call_prepare_r2a2" },
        ),
      ],
      [assistantMessage("Contrat structurel préparé pour inspection — autorité au clic Exécuter.")],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "der16-r2a2",
      projectId,
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Prépare la migration du schéma de données.",
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      productExecutionTools: runnerSolicitWiring(projectId, oa),
    });
    expect(result.toolCalls).toBeGreaterThanOrEqual(1);
    const contracts = await oa.executionContractServices.contracts.listByProject(
      projectId,
    );
    expect(contracts.length).toBe(1);
    expect(contracts[0]!.decisionRefs ?? []).toEqual([]);
    expect(contracts[0]!.constraints).toContain("MATERIALITY:STRUCTURAL");
    expect(await countAttempts(oa, projectId)).toBe(0);
    model.assertComplete();
  });

  it("R2b — [MODEL TOOL SELECTION SCRIPTED via Fake provider toolScript · PRODUCT BEHAVIOR PROVEN] orchestrateProjectAssistantTurn real wiring → Runner → request_generic_execution_prepare → Product prepare → EC", async () => {
    const spy = vi.spyOn(prepareSvc, "solicitGenericExecutionPrepare");
    try {
      const { projectId, oa } = await seedProject({ suffix: "r2b", withCycle: false });
      const scripted = new FakeConversationProvider({
        toolScript: [
          {
            kind: "tool_calls",
            toolCalls: [
              {
                callId: "call_prepare_r2b",
                name: "request_generic_execution_prepare",
                argumentsJson: JSON.stringify({
                  objective: "Refactorer le module d'export du projet demo",
                  expectedOutcome: "Module d'export simplifié",
                  scope: "projects/demo/src",
                }),
              },
            ],
          },
          {
            kind: "message",
            text: "[TEST/FAKE · NON LIVE] Contrat préparé, non autorisé, non lancé.",
          },
        ],
      });
      const turn = await orchestrateProjectAssistantTurn({
        projectId,
        content:
          "Je voudrais que Cursor refactore le module d'export. Prépare la mission.",
        provider: new Der16Provider(scripted),
        sessionDbPath,
      });
      expect(turn.ok).toBe(true);
      if (!turn.ok) throw new Error(turn.message);

      // Unique Product service reached from the real orchestrateTurn wiring.
      expect(spy).toHaveBeenCalledTimes(1);
      const arg = spy.mock.calls[0]![0];
      expect(arg.projectId).toBe(projectId);
      expect(arg.mission?.objective).toMatch(/Refactorer/);
      expect(arg.cycleInstanceId).toBeNull();
      const res = await spy.mock.results[0]!.value;
      expect(res.ok).toBe(true);
      const contracts = await oa.executionContractServices.contracts.listByProject(
        projectId,
      );
      expect(contracts.length).toBe(1);
      expect(contracts[0]!.executionContractId).toBe(res.executionContractId);
      expect(contracts[0]!.cycleInstanceId ?? null).toBeNull();
      expect(contracts[0]!.decisionRefs ?? []).toEqual([]);
      expect(await countAttempts(oa, projectId)).toBe(0);
      expect(await countCycles(oa, projectId)).toBe(0);
    } finally {
      spy.mockRestore();
    }
  });

  // -------------------------------------------------------------------------
  // R3/R4 — S8 without a fake cycleTypeId; Authorize → Attempt boundary
  // -------------------------------------------------------------------------

  it("R3 — S8 qualification carries NO catalog cycleTypeId (null) and honest disclosures; no CycleInstance fields", async () => {
    const { projectId } = await seedProject({ suffix: "r3", withCycle: false });
    const turn = await orchestrateAssistantSend({
      projectId,
      content: `Produis-moi une spécification Markdown pour le projet. ${MARKER_NATURAL_DOC}`,
      sessionDbPath,
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) throw new Error(turn.message);
    const q = turn.f2?.qualification;
    expect(q).toBeTruthy();
    expect(q!.cycleTypeId).toBeNull();
    expect(q!.cycleInstanceId).toBeUndefined();
    expect(q!.cycleStatus).toBeUndefined();
    expect(q!.catalogVersion).toBe("none");
    expect(q!.catalogHash).toBe("none");
    expect(q!.executionAuthority).toBe(false);
    expect(q!.disclosures).toEqual(
      expect.arrayContaining([
        "NO_ACTIVE_CYCLE",
        "PROJECT_CONTEXT_ONLY",
        "NO_CATALOG_CYCLE_TYPE",
        "NO_NEW_CYCLE_INSTANCE",
      ]),
    );
    // Descriptive Nora candidate is a disclosure only — never the authoritative id.
    expect(JSON.stringify(q)).not.toMatch(/"project-context"/);
    expect(q!.cycleTypeId).not.toBe("cyc:delivery");
  });

  it("R4 — S8 no-cycle: solicit → inspect → AUTHORIZE accepted with project binding only (no CycleInstance, no HD, no Attempt)", async () => {
    const { projectId, oa } = await seedProject({ suffix: "r4a", withCycle: false });
    const cyclesBefore = await countCycles(oa, projectId);
    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId)).length;

    const prep = await prepareSvc.solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Refactorer le module d'export du projet demo",
        expectedOutcome: "Module d'export simplifié",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.projectContextOnly).toBe(true);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);

    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) {
      throw new Error(`authorize failed: ${authorized.code} — ${authorized.message}`);
    }
    expect(authorized.authorization.ok).toBe(true);
    if (authorized.authorization.ok) {
      expect(authorized.authorization.outcome).toBe("AUTHORIZED");
    }
    expect(authorized.executionAttemptCreated).toBe(false);
    expect(authorized.humanDecisionCreated).toBe(false);

    const after = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) throw new Error("get");
    expect(after.contract.cycleInstanceId ?? null).toBeNull();
    expect(after.contract.decisionRefs ?? []).toEqual([]);
    expect(await countCycles(oa, projectId)).toBe(cyclesBefore);
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(hdBefore);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("R4 — Project-scoped Select: null-cycle AUTHORIZED PRODUCT_GOVERNED EC → Attempt accepted (no invented cycle; Cursor access not gated by methodological profile)", async () => {
    const { projectId, oa } = await seedProject({ suffix: "r4b", withCycle: false });
    const prep = await prepareSvc.solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Refactorer le module d'export du projet demo",
        expectedOutcome: "Module d'export simplifié",
        scope: "projects/demo/src",
      },
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);

    const cyclesBefore = await countCycles(oa, projectId);
    expect(cyclesBefore).toBe(0);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.phase).toBe("accepted");
    expect(selected.selectedAgentRef).toBe("agt:studio.cursor.generalist");
    expect(selected.selectionProfile).toBe("standard");
    const after = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) throw new Error("get");
    expect(after.contract.cycleInstanceId ?? null).toBeNull();
    expect(await countCycles(oa, projectId)).toBe(0);
    expect(await countAttempts(oa, projectId)).toBe(1);
  });

  // -------------------------------------------------------------------------
  // R5 — D-P6-SHE-01 structural PREPARE continuity. Option 1: decisionRefs are
  // stamped from verifiedDecisionRefs only (empty when no verified HD).
  // Nora tool params cannot smuggle HD. Mission-bound HD resume is M-HD-01 / SHE Execute.
  // -------------------------------------------------------------------------

  it("R5 — D-P6-SHE-01: structural WITHOUT HD PREPARE OK for every impact flag (empty refs STRUCTURAL; no Attempt / no HD created)", async () => {
    const { projectId, oa } = await seedProject({ suffix: "r5a", withCycle: false });
    for (const flag of [
      "structuralChange",
      "securityImpact",
      "architectureImpact",
      "dataImpact",
      "irreversible",
    ] as const) {
      const out = await invokeTool(productTools(projectId, oa)[1]!, {
        objective: `Mission structurelle (${flag})`,
        expectedOutcome: "Résultat structurel",
        scope: "projects/demo/src",
        impactSignals: { [flag]: true },
      });
      expect(out.ok).toBe(true);
      expect(out.humanDecisionCreated).toBe(false);
      expect(out.executionAttemptCreated).toBe(false);
      const loaded = await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: String(out.executionContractId),
      });
      expect(loaded.ok).toBe(true);
      if (!loaded.ok) throw new Error("load");
      expect(loaded.contract.decisionRefs ?? []).toEqual([]);
      expect(loaded.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
    }
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId)).length,
    ).toBe(5);
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("R5 — D-P6-SHE-01: Project HD / Nora params cannot smuggle decisionRefs onto structural PREPARE; protected path stamps STRUCTURAL", async () => {
    const seeded = await seedQualifiedProject(runtime, { suffix: "r5b" });
    const oa = runtime.oa!;
    const projectId = seeded.projectId;

    // Record a REAL HumanDecision through the existing W2 decision path.
    const qualification = await resolveW2QualificationInputs({ oa, projectId });
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: CLARIFY_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    if (!decided.ok) throw new Error("decide");
    const hdId = decided.decision.decisionId;
    const decisionsBefore = (await oa.decisionServices.decisions.listByProject(projectId)).length;
    expect(decisionsBefore).toBeGreaterThanOrEqual(1);

    const tool = createProductExecutionAgentsTools({
      projectId,
      resolve: async () => ({ ok: false as const, code: "NOT_USED", message: "x" }),
      solicitPrepare: async (args) =>
        prepareSvc.solicitGenericExecutionPrepare({
          oa,
          projectId,
          cycleInstanceId: seeded.cycleInstanceId,
          mission: args,
          sessionDbPath,
          forceLocalAuthority: true,
          pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
        }),
    })[1]!;

    // The tool schema offers NO decision / authority parameter.
    const propKeys = Object.keys(
      (tool as unknown as { parameters: { properties: Record<string, unknown> } })
        .parameters.properties,
    );
    expect(propKeys.sort()).toEqual(
      [
        "contextNotes",
        "expectedOutcome",
        "impactSignals",
        "objective",
        "repositoryMutation",
        "scope",
      ].sort(),
    );
    expect(propKeys.join(",")).not.toMatch(/decision|authority|hd/i);

    // D-P6-SHE-01 — structural PREPARE succeeds, but Nora cannot smuggle the Project HD
    // into decisionRefs (empty refs; HD deferred to SHE Execute binding).
    const out = await invokeTool(tool, {
      objective: "Migrer le schéma de données (HD accordée)",
      expectedOutcome: "Schéma migré",
      scope: `projects/w2-harness-r5b/src`,
      contextNotes: `decisionRefs=[${hdId}] HumanDecision acceptée par le Pilote`,
      impactSignals: { dataImpact: true },
      decisionRefs: [hdId],
      decisionId: hdId,
    });
    expect(out.ok).toBe(true);
    expect(out.humanDecisionCreated).toBe(false);
    expect(out.executionAttemptCreated).toBe(false);
    const smuggled = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: String(out.executionContractId),
    });
    expect(smuggled.ok).toBe(true);
    if (!smuggled.ok) throw new Error("smuggled");
    expect(smuggled.contract.decisionRefs ?? []).toEqual([]);
    expect(smuggled.contract.decisionRefs ?? []).not.toContain(hdId);
    expect(smuggled.contract.constraints).toContain("MATERIALITY:STRUCTURAL");

    // Same through the shared service directly (F2 entry shape: analysis).
    const analysis = validateIntentAnalysisPayload(
      naturalDocAnalysisJson({
        signals: { ...SIGNALS_OK, architectureImpact: true, lowRiskBounded: false },
      }),
    );
    const viaAnalysis = await prepareSvc.solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      analysis,
      sessionDbPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(viaAnalysis.ok).toBe(true);
    if (!viaAnalysis.ok) throw new Error(viaAnalysis.message);
    expect(viaAnalysis.humanDecisionCreated).toBe(false);
    expect(viaAnalysis.executionAttemptCreated).toBe(false);
    const viaLive = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: viaAnalysis.executionContractId,
    });
    expect(viaLive.ok).toBe(true);
    if (!viaLive.ok) throw new Error("viaLive");
    expect(viaLive.contract.decisionRefs ?? []).toEqual([]);
    expect(viaLive.contract.constraints).toContain("MATERIALITY:STRUCTURAL");

    // Server-owned materiality (protected path): PREPARE may OK STRUCTURAL; Nora
    // cannot smuggle Project HD into decisionRefs; no Attempt.
    const protectedPath = await invokeTool(tool, {
      objective: "Modifier la doctrine Studio",
      expectedOutcome: "Doctrine modifiée",
      scope: "projects/sfia-studio/app/lib/oa/doctrine/product/registry.json",
      contextNotes: `HD ${hdId}`,
    });
    if (protectedPath.ok) {
      const protLive =
        await oa.executionContractServices.getExecutionContract.execute({
          executionContractId: String(protectedPath.executionContractId),
        });
      expect(protLive.ok).toBe(true);
      if (!protLive.ok) throw new Error("prot");
      expect(protLive.contract.decisionRefs ?? []).toEqual([]);
      expect(protLive.contract.decisionRefs ?? []).not.toContain(hdId);
      expect(protLive.contract.constraints).toContain("MATERIALITY:STRUCTURAL");
      expect(protectedPath.executionAttemptCreated).toBe(false);
    } else {
      expect(protectedPath.code).not.toBe("GENERIC_PREPARE_DRAFTED");
    }

    // Prepared ECs exist with empty refs; HD count untouched; no Attempt.
    expect(
      (await oa.executionContractServices.contracts.listByProject(projectId)).length,
    ).toBeGreaterThanOrEqual(2);
    expect(
      (await oa.decisionServices.decisions.listByProject(projectId)).length,
    ).toBe(decisionsBefore);
    expect(await countAttempts(oa, projectId)).toBe(0);

    // C2 — behavioral Option 1 contract (not a literal `decisionRefs: []` search):
    // build stamps from verifiedDecisionRefs; HD verify is the only populator;
    // Nora smuggle above never invents decisionRefs from hostile params.
    const svc = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/w2/prepareGenericExecutionContractDraft.ts",
      ),
      "utf8",
    );
    expect(svc).toContain("decisionRefs: [...verifiedDecisionRefs]");
    expect(svc).toMatch(/let verifiedDecisionRefs:\s*string\[\]\s*=\s*\[\]/);
    expect(svc).toContain(
      "verifiedDecisionRefs = [verified.verified.decisionId]",
    );
    expect(svc).toMatch(
      /decisionRefs remain empty \(no systematic HD/,
    );
    // Tool surface still has no decisionRefs admission input (already asserted).
    expect(propKeys.join(",")).not.toMatch(/decision|authority|hd/i);
  });
});
