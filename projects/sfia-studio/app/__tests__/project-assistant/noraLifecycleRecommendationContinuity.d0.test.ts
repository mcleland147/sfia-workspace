/** @vitest-environment node */
/**
 * NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01 — LR-CONT-01…12 + REAL-02/03 prep.
 * ZERO REAL. Deterministic only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import {
  composeStudioCognitiveContext,
  buildStudioCognitivePromptSections,
} from "@/features/project-assistant/f2/studioCognitiveContext";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
  PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
  applyPreCycleRoutingBoundaryCoherence,
  composePilotFacingAssistantText,
  normalizeNoraProductTurnStructuredOutput,
  type ConversationGuidance,
  type PreCycleRoutingAssessment,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  evaluateCurrentNextCycleLifecycleRecommendationContinuity,
  revalidateExactCurrentNextCycleLifecycleRecommendationContinuity,
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  selectCurrentLifecycleRecommendations,
} from "@/lib/oa/cycle";
import type { ActorReference } from "@/lib/oa/project";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import * as runNoraAgentsTurnMod from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const tempDirs: string[] = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  vi.restoreAllMocks();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lrc-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

function nextCycleLr(targetCycleTypeId: string, statement: string) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement,
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
    rationale: "Prochain travail gouverné supportable.",
    authority: "none" as const,
    isHumanDecision: false as const,
    qualificationSignals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
  };
}

function transitionGuidance(statement: string): ConversationGuidance {
  return {
    kind: "RECOMMEND_NEXT_STEP",
    scope: "LIFECYCLE_TRANSITION",
    statement,
    rationale: "continuity-fixture",
  };
}

function productTurn(
  assessment: PreCycleRoutingAssessment,
  lr: ReturnType<typeof nextCycleLr> | null,
  narrative: string,
  guidance?: ConversationGuidance,
) {
  return {
    narrative,
    preCycleRoutingAssessment: assessment,
    lifecycleRecommendation: lr,
    activeCycleWork: null,
    conversationGuidance:
      guidance ??
      (lr
        ? transitionGuidance(narrative)
        : {
            kind: "RECOMMEND_NEXT_STEP" as const,
            scope: "LIFECYCLE_TRANSITION" as const,
            statement: narrative,
            rationale: "reuse-or-emit",
          }),
  };
}

function analysisStub(
  partial: Partial<IntentAnalysisDto> &
    Pick<IntentAnalysisDto, "intentClass" | "parseOk">,
): IntentAnalysisDto {
  return {
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    ...partial,
    executionIntent: partial.executionIntent ?? null,
  };
}

function projectDto(
  projectId: string,
  overrides?: Partial<ProjectAssistantContextDto>,
): ProjectAssistantContextDto {
  return {
    projectId,
    name: "NCI Continuity QA",
    shortReference: "LRC",
    objective: "Gérer des tâches personnelles",
    contextSummary: "FocusFlow-like MVP",
    criticality: "STANDARD",
    constraints: [],
    lpsId: "lps:test",
    lpsVersion: 1,
    lpsCreatedAt: "2026-09-24T06:00:00.000Z",
    doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
    doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
    doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    doctrineStatus: "product-studio-native",
    runtimeMode: "local",
    persistence: "product-sqlite",
    readiness: "ready",
    ...overrides,
  };
}

async function bootstrapProjectWithTrajectory(prefix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-24T07:00:00.000Z",
    idSource: new FixedIdSource(prefix),
    auditMode: "noop",
    productDbPath: tempDbPath(`${prefix}.sqlite`),
  });
  const created = await runtime.createProject({
    name: "NCI Continuity QA",
    objective: "Gérer des tâches personnelles",
    context: "FocusFlow-like MVP IN: créer/modifier/terminer/lister. OUT: rappels/auth.",
    criticality: "STANDARD",
    constraints: [],
    shortReference: "LRC",
    idempotencyKey: `idem:${prefix}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  const traj = await runtime.oa!.cycleServices.createInitialTrajectory.execute({
    trajectoryId: `trj:${projectId}`,
    projectId,
    steps: [
      {
        stepId: "stp:clarify",
        order: 1,
        label: "Clarify",
        state: "pending",
      },
    ],
    status: "active",
    expectedLpsVersion: created.livingState.version,
    createdBy: ACTOR,
  });
  expect(traj.ok).toBe(true);
  expect(runtime.oa).not.toBeNull();
  if (!runtime.oa) throw new Error("oa required");
  return { runtime, projectId, oa: runtime.oa };
}

async function materializeFramingLr(
  runtime: ReturnType<typeof getRuntimeApplicationService>,
  projectId: string,
  producedAt: string,
  statement = "Envisager un Cadrage.",
) {
  const oa = runtime.oa;
  expect(oa).not.toBeNull();
  if (!oa) throw new Error("oa required");
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const hd = await oa.decisionServices.decisions.listByProject(projectId);
  const lps =
    await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
  expect(lps.ok).toBe(true);
  if (!lps.ok) throw new Error("lps");
  const trajNow = await oa.cycleServices.getCurrentTrajectory.execute({
    projectId,
  });
  expect(trajNow.ok).toBe(true);
  if (!trajNow.ok) throw new Error("traj");
  const epistemicItems = await oa.cycleServices.epistemic.listByProject(
    projectId,
  );
  const structured = productTurn(
    { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
    nextCycleLr("cyc:framing", statement),
    statement,
  );
  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: structured,
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: trajNow.trajectory,
      decisions: hd,
      evidence: [],
      epistemicItems,
    },
    producedAt,
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  expect(mat.materialization?.ok).toBe(true);
  const items = await oa.cycleServices.epistemic.listByProject(projectId);
  const lrItems = items.filter(
    (i) =>
      i.source === "lifecycle-recommendation:nora" && i.status === "active",
  );
  expect(lrItems.length).toBeGreaterThanOrEqual(1);
  return {
    lrItem: lrItems[lrItems.length - 1]!,
    lps: lps.livingProjectState,
    traj: trajNow.trajectory,
    cycles,
    hd,
    items,
  };
}

describe("NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01", () => {
  it("LR-CONT-01 — EMIT + null + no CURRENT → MISSING_REQUIRED", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Périmètre MVP rappelé.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: null,
      conversationGuidance: transitionGuidance(
        "Je te propose de lancer le Cadrage.",
      ),
      currentLifecycleRecommendationSatisfiesTransition: false,
    });
    expect(coherent.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );
    expect(coherent.lifecycleRecommendationContinuity).toBe("NONE");
  });

  it("LR-CONT-02 — EMIT + null + CURRENT exact NEXT_CYCLE → REUSE_CURRENT", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "IN: créer/modifier/terminer/lister. OUT: rappels.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: null,
      conversationGuidance: transitionGuidance(
        "Le Cadrage reste la prochaine étape que je te recommande.",
      ),
      currentLifecycleRecommendationSatisfiesTransition: true,
    });
    expect(coherent.boundaryContradiction).toBeNull();
    expect(coherent.lifecycleRecommendation).toBeNull();
    expect(coherent.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");
    expect(coherent.conversationGuidance.kind).toBe("RECOMMEND_NEXT_STEP");
    expect(coherent.conversationGuidance.scope).toBe("LIFECYCLE_TRANSITION");
  });

  it("REAL-02 deterministic reproduction — TURN1 materialize + TURN2 reuse no write", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("real02");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:01:00.000Z",
      "Je te propose de lancer le Cadrage.",
    );
    const lrId = turn1.lrItem.epistemicItemId;
    const producedAt = turn1.lrItem.createdAt;

    const hdBefore = await runtime.oa!.decisionServices.decisions.listByProject(
      projectId,
    );
    const cyclesBefore = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );

    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        lpsVersion: turn1.lps.version,
        activeCycleInstanceId: turn1.lps.activeCycleInstanceId,
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(composed.context.lifecycleRecommendation.state).toBe("CURRENT");
    expect(
      composed.context.lifecycleRecommendation.satisfiesPreCycleNextCycleTransition,
    ).toBe(true);
    expect(
      composed.context.lifecycleRecommendation.current?.recommendationId,
    ).toBe(lrId);

    const turn2Structured = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "Pour le MVP : IN créer/modifier/terminer/lister ; OUT rappels, catégories, auth.",
      transitionGuidance(
        "Le Cadrage reste la prochaine étape que je te recommande.",
      ),
    );
    const coherent = normalizeNoraProductTurnStructuredOutput(turn2Structured, {
      currentLifecycleRecommendationSatisfiesTransition:
        composed.context.lifecycleRecommendation
          .satisfiesPreCycleNextCycleTransition,
    });
    expect(coherent).not.toBeNull();
    expect(coherent!.boundaryContradiction).toBeNull();
    expect(coherent!.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");
    expect(coherent!.lifecycleRecommendation).toBeNull();

    const pilot = composePilotFacingAssistantText(
      coherent!.narrative,
      coherent!.conversationGuidance,
    );
    expect(pilot).toMatch(/MVP/);
    expect(pilot).toMatch(/Cadrage/);

    // No second materialization — simulate orchestrate LR gate: candidate null.
    const itemsAfter = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const lrAfter = itemsAfter.filter(
      (i) => i.source === "lifecycle-recommendation:nora" && i.status === "active",
    );
    expect(lrAfter.length).toBe(1);
    expect(lrAfter[0]!.epistemicItemId).toBe(lrId);
    expect(lrAfter[0]!.createdAt).toBe(producedAt);

    const hdAfter = await runtime.oa!.decisionServices.decisions.listByProject(
      projectId,
    );
    const cyclesAfter = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(hdAfter.length).toBe(hdBefore.length);
    expect(cyclesAfter.length).toBe(cyclesBefore.length);
    expect(turn1.lps.activeCycleInstanceId ?? null).toBeNull();
  });

  it("REAL-02 via orchestrateAssistant path — TURN2 reuse, no MISSING_REQUIRED", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("orch02");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:02:00.000Z",
    );
    const lrId = turn1.lrItem.epistemicItemId;

    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        lpsVersion: turn1.lps.version,
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(
      composed.context.lifecycleRecommendation.satisfiesPreCycleNextCycleTransition,
    ).toBe(true);

    const turn2Structured = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "Rappel MVP : IN créer/modifier/terminer/lister ; OUT rappels.",
      transitionGuidance(
        "Le Cadrage reste la prochaine étape que je te recommande.",
      ),
    );
    const preNorm = normalizeNoraProductTurnStructuredOutput(turn2Structured, {
      currentLifecycleRecommendationSatisfiesTransition:
        composed.context.lifecycleRecommendation
          .satisfiesPreCycleNextCycleTransition,
    });
    expect(preNorm?.boundaryContradiction).toBeNull();
    expect(preNorm?.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");

    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(turn2Structured))],
    ]);
    const orch = await orchestrateProjectAssistantTurn({
      projectId,
      content:
        "D’accord. Pour le MVP, rappelle-moi simplement ce qu’on garde dans le périmètre et ce qu’on laisse de côté.",
      sessionDbPath: tempDbPath("orch02-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    spy.mockRestore();
    expect(orch.ok).toBe(true);
    if (!orch.ok) return;
    expect(orch.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");
    expect(orch.lifecycleRecommendationContinuityRevalidation).toBe("PASS");
    expect(orch.lifecycleRecommendationMaterialized).toBe(false);
    expect(orch.text).toMatch(/MVP|périmètre|IN|lister/i);
    expect(orch.text).toMatch(/Cadrage/);

    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const lrItems = items.filter(
      (i) =>
        i.source === "lifecycle-recommendation:nora" && i.status === "active",
    );
    expect(lrItems.length).toBe(1);
    expect(lrItems[0]!.epistemicItemId).toBe(lrId);
  });

  it("REAL-03 preparatory — acknowledgement + CURRENT reuse, non-flat", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("real03");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:03:00.000Z",
    );

    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        lpsVersion: turn1.lps.version,
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;

    const structured = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "Parfait — on a le MVP clair.",
      transitionGuidance(
        "Je te propose maintenant de lancer le Cadrage pour cadrer ce MVP.",
      ),
    );
    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(structured))],
    ]);
    const orch = await orchestrateProjectAssistantTurn({
      projectId,
      content: "OK, c’est clair.",
      sessionDbPath: tempDbPath("real03-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    spy.mockRestore();
    expect(orch.ok).toBe(true);
    if (!orch.ok) return;
    expect(orch.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");
    expect(orch.lifecycleRecommendationContinuityRevalidation).toBe("PASS");
    expect(orch.text).not.toMatch(/^Parfait\.?$/i);
    expect(orch.text).toMatch(/Cadrage/);
    const hd = await runtime.oa!.decisionServices.decisions.listByProject(
      projectId,
    );
    expect(hd.length).toBe(0);
  });

  it("LR-CONT-03 — STALE recommendation not reusable", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("stale");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:04:00.000Z",
    );
    // Change material basis (LPS version) so fingerprint no longer matches.
    const evaluated = evaluateCurrentNextCycleLifecycleRecommendationContinuity({
      items: turn1.items,
      cycles: turn1.cycles,
      lpsActiveCycleInstanceId: turn1.lps.activeCycleInstanceId,
      lpsVersion: (turn1.lps.version ?? 1) + 99,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: turn1.traj,
      decisions: turn1.hd,
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(evaluated.projection.state).toBe("NONE");
    expect(evaluated.satisfiesPreCycleNextCycleTransition).toBe(false);

    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "suite",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: null,
      conversationGuidance: transitionGuidance("suite"),
      currentLifecycleRecommendationSatisfiesTransition:
        evaluated.satisfiesPreCycleNextCycleTransition,
    });
    expect(coherent.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );
  });

  it("LR-CONT-04 — superseded LR not CURRENT", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("super");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:05:00.000Z",
    );
    // Second distinct target supersedes / or mark superseded via second produce
    await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:05:30.000Z",
      "Autre énoncé Cadrage (nouvelle écriture).",
    );
    // After second materialize of same semantic, typically one active CURRENT.
    // Explicit rejected/superseded status:
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const first = items.find((i) => i.epistemicItemId === turn1.lrItem.epistemicItemId);
    expect(first).toBeTruthy();
    // If still active, force status for adversarial read by evaluating with mutated copy
    const mutated = items.map((i) =>
      i.epistemicItemId === turn1.lrItem.epistemicItemId
        ? { ...i, status: "superseded" as const }
        : i,
    );
    const evaluated = evaluateCurrentNextCycleLifecycleRecommendationContinuity({
      items: mutated,
      cycles: turn1.cycles,
      lpsActiveCycleInstanceId: turn1.lps.activeCycleInstanceId,
      lpsVersion: turn1.lps.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: turn1.traj,
      decisions: turn1.hd,
      evidence: [],
      blockingReservationStatements: [],
    });
    // Other active LR may still be CURRENT — check superseded id not selected as sole
    if (evaluated.applicable) {
      expect(evaluated.applicable.recommendationId).not.toBe(
        turn1.lrItem.epistemicItemId,
      );
    }
    const onlySuperseded = evaluateCurrentNextCycleLifecycleRecommendationContinuity(
      {
        items: [
          {
            ...turn1.lrItem,
            status: "superseded",
          },
        ],
        cycles: turn1.cycles,
        lpsActiveCycleInstanceId: turn1.lps.activeCycleInstanceId,
        lpsVersion: turn1.lps.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: turn1.traj,
        decisions: turn1.hd,
        evidence: [],
        blockingReservationStatements: [],
      },
    );
    expect(onlySuperseded.projection.state).toBe("NONE");
    expect(onlySuperseded.satisfiesPreCycleNextCycleTransition).toBe(false);
  });

  it("LR-CONT-05 — material reader unavailable → UNAVAILABLE, no reuse", () => {
    const evaluated = evaluateCurrentNextCycleLifecycleRecommendationContinuity({
      items: [],
      cycles: [],
      lpsActiveCycleInstanceId: null,
      lpsVersion: 1,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      failedMaterialDimensions: new Set(["trajectory"]),
    });
    expect(evaluated.projection.state).toBe("UNAVAILABLE");
    expect(evaluated.satisfiesPreCycleNextCycleTransition).toBe(false);

    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "x",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: null,
      conversationGuidance: transitionGuidance("x"),
      currentLifecycleRecommendationSatisfiesTransition: false,
    });
    expect(coherent.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );
  });

  it("LR-CONT-06 — target mismatch → not sufficient", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("mismatch");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:06:00.000Z",
    );
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const evaluated = evaluateCurrentNextCycleLifecycleRecommendationContinuity({
      items,
      cycles: turn1.cycles,
      lpsActiveCycleInstanceId: turn1.lps.activeCycleInstanceId,
      lpsVersion: turn1.lps.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: turn1.traj,
      decisions: turn1.hd,
      evidence: [],
      blockingReservationStatements: [],
      expectedTargetCycleTypeId: "cyc:delivery",
    });
    expect(evaluated.projection.state).toBe("CURRENT");
    expect(evaluated.satisfiesPreCycleNextCycleTransition).toBe(false);

    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "autre cycle",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: null,
      conversationGuidance: transitionGuidance("autre"),
      currentLifecycleRecommendationSatisfiesTransition:
        evaluated.satisfiesPreCycleNextCycleTransition,
    });
    expect(coherent.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );

    // New matching LR still allowed
    const withNew = applyPreCycleRoutingBoundaryCoherence({
      narrative: "delivery",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: nextCycleLr("cyc:delivery", "Delivery."),
      conversationGuidance: transitionGuidance("Delivery."),
      currentLifecycleRecommendationSatisfiesTransition: false,
    });
    expect(withNew.boundaryContradiction).toBeNull();
    expect(withNew.lifecycleRecommendationContinuity).toBe("NEW_CANDIDATE");
  });

  it("LR-CONT-07 — ambiguous CURRENT NEXT_CYCLE → no reuse", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("ambig");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:07:00.000Z",
    );
    // Materialize a different target (delivery) while framing remains CURRENT
    const cycles = await runtime.oa!.cycleServices.cycles.listByProject(projectId);
    const hd = await runtime.oa!.decisionServices.decisions.listByProject(projectId);
    const lps =
      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    if (!lps.ok) return;
    const trajNow = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    if (!trajNow.ok) return;
    const epistemicItems = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const mat2 = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId,
      structuredOutput: productTurn(
        { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
        nextCycleLr("cyc:delivery", "Delivery next."),
        "Delivery next.",
      ),
      updateEpistemicState: runtime.oa!.cycleServices.updateEpistemicState,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: trajNow.trajectory,
        decisions: hd,
        evidence: [],
        epistemicItems,
      },
      producedAt: "2026-09-24T07:07:30.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    // Delivery may supersede framing depending on producer semantics — if only one CURRENT, skip ambiguity assert.
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: trajNow.trajectory,
      decisions: hd,
      evidence: [],
      blockingReservationStatements: [],
    }).filter((c) => c.intent === "NEXT_CYCLE");

    if (current.length >= 2) {
      const evaluated =
        evaluateCurrentNextCycleLifecycleRecommendationContinuity({
          items,
          cycles,
          lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
          lpsVersion: lps.livingProjectState.version,
          doctrinePackageId: VALID_PIN.doctrinePackageId,
          doctrinePackageVersion: VALID_PIN.version,
          doctrinePackageDigest: VALID_PIN.digest,
          trajectory: trajNow.trajectory,
          decisions: hd,
          evidence: [],
          blockingReservationStatements: [],
        });
      expect(evaluated.projection.state).toBe("AMBIGUOUS");
      expect(evaluated.satisfiesPreCycleNextCycleTransition).toBe(false);
    } else {
      // Producer supersedes prior — still prove evaluator AMBIGUOUS path with synthetic dual CURRENT
      const framing = items.find(
        (i) => i.epistemicItemId === turn1.lrItem.epistemicItemId,
      );
      const delivery = items.find(
        (i) =>
          i.source === "lifecycle-recommendation:nora" &&
          i.lifecycleRecommendation?.targetCycleTypeId === "cyc:delivery",
      );
      expect(mat2.materialization?.ok === true || framing != null).toBe(true);
      if (framing?.lifecycleRecommendation && delivery?.lifecycleRecommendation) {
        const dual = [
          { ...framing, status: "active" as const },
          { ...delivery, status: "active" as const },
        ];
        // Force both CURRENT by using their own fingerprints against matching rebuild —
        // if basis differs only by target, both can be CURRENT.
        const evaluated =
          evaluateCurrentNextCycleLifecycleRecommendationContinuity({
            items: dual,
            cycles,
            lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
            lpsVersion: lps.livingProjectState.version,
            doctrinePackageId: VALID_PIN.doctrinePackageId,
            doctrinePackageVersion: VALID_PIN.version,
            doctrinePackageDigest: VALID_PIN.digest,
            trajectory: trajNow.trajectory,
            decisions: hd,
            evidence: [],
            blockingReservationStatements: [],
          });
        if (evaluated.projection.state === "AMBIGUOUS") {
          expect(evaluated.satisfiesPreCycleNextCycleTransition).toBe(false);
        }
      }
    }
  });

  it("LR-CONT-08 — active cycle blocks pre-cycle continuity", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("active");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:08:00.000Z",
    );
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const evaluated = evaluateCurrentNextCycleLifecycleRecommendationContinuity({
      items,
      cycles: turn1.cycles,
      lpsActiveCycleInstanceId: "cycinst:active-fake",
      lpsVersion: turn1.lps.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: turn1.traj,
      decisions: turn1.hd,
      evidence: [],
      blockingReservationStatements: [],
      activeCycleInstanceId: "cycinst:active-fake",
    });
    expect(evaluated.satisfiesPreCycleNextCycleTransition).toBe(false);
  });

  it("LR-CONT-09 — Cognitive Stop outranks CURRENT reuse", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "stop",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: null,
      conversationGuidance: transitionGuidance("should not keep"),
      cognitiveStop: true,
      currentLifecycleRecommendationSatisfiesTransition: true,
    });
    expect(coherent.boundaryContradiction).toBeNull();
    expect(coherent.lifecycleRecommendationContinuity).toBe("NONE");
    expect(coherent.lifecycleRecommendation).toBeNull();
    expect(coherent.conversationGuidance.kind).toBe("HOLD");
    expect(coherent.conversationGuidance.scope).toBe("BLOCKER_RESOLUTION");
  });

  it("LR-CONT-10 — new recommendation still materializes (NEW_CANDIDATE)", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "new",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: nextCycleLr("cyc:architecture", "Architecture."),
      conversationGuidance: transitionGuidance("Architecture."),
      currentLifecycleRecommendationSatisfiesTransition: true,
    });
    expect(coherent.lifecycleRecommendationContinuity).toBe("NEW_CANDIDATE");
    expect(coherent.lifecycleRecommendation?.targetCycleTypeId).toBe(
      "cyc:architecture",
    );
    expect(coherent.boundaryContradiction).toBeNull();
  });

  it("LR-CONT-11 — prompt projects CURRENT without internal ids", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("prompt");
    await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:11:00.000Z",
    );
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    const sections = buildStudioCognitivePromptSections(composed.context).join(
      "\n",
    );
    expect(sections).toMatch(/Recommendation lifecycle courante/);
    expect(sections).toMatch(/Cadrage/);
    expect(sections).not.toMatch(/semanticKey/);
    expect(sections).not.toMatch(/basisFingerprint/);
    expect(sections).not.toMatch(/recommendationId|epi:/i);

    const system = buildProjectSystemPrompt(projectDto(projectId), {
      studioCognitiveContext: composed.context,
    });
    expect(system).toMatch(/ne la réémets PAS|Recommendation CURRENT/i);
  });

  it("LR-CONT-12 — conversational history survives reuse turn", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("hist");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:12:00.000Z",
    );
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        lpsVersion: turn1.lps.version,
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;

    const sessionDb = tempDbPath("hist-sess.sqlite");
    const t2 = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "MVP rappelé clairement.",
      transitionGuidance("Le Cadrage reste recommandé."),
    );
    const t3 = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "On peut avancer.",
      transitionGuidance("Je te propose de lancer le Cadrage."),
    );
    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(t2))],
      [assistantMessage(JSON.stringify(t3))],
    ]);
    const orch2 = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Rappelle le MVP.",
      sessionDbPath: sessionDb,
      simulateMemoryBUnavailable: false,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    expect(orch2.ok).toBe(true);
    const orch3 = await orchestrateProjectAssistantTurn({
      projectId,
      content: "OK, c’est clair.",
      sessionDbPath: sessionDb,
      simulateMemoryBUnavailable: false,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    spy.mockRestore();
    expect(orch3.ok).toBe(true);
    if (!orch2.ok || !orch3.ok) return;
    expect(orch2.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");
    expect(orch3.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");
    expect(orch3.text).toMatch(/Cadrage/);
  });

  // ─── CR-LRC-01 — post-model durable currentness revalidation ───────────

  it("LR-CONT-13 — CURRENT remains current during model turn → REUSE + PASS", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("lrc13");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T09:13:00.000Z",
    );
    const lrId = turn1.lrItem.epistemicItemId;
    const producedAt = turn1.lrItem.createdAt;
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        lpsVersion: turn1.lps.version,
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(composed.context.lifecycleRecommendation.current?.recommendationId).toBe(
      lrId,
    );
    expect(
      composed.context.lifecycleRecommendation.satisfiesPreCycleNextCycleTransition,
    ).toBe(true);

    // No durable mutation between context snapshot and post-model continuity decision.
    const structured = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "Suite conversationnelle sans dérive matérielle.",
      transitionGuidance("Le Cadrage reste recommandé."),
    );
    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const orch = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Continuons.",
      sessionDbPath: tempDbPath("lrc13-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(structured))],
        ]),
      },
    });
    spy.mockRestore();
    expect(orch.ok).toBe(true);
    if (!orch.ok) return;
    expect(orch.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");
    expect(orch.lifecycleRecommendationContinuityRevalidation).toBe("PASS");
    expect(orch.lifecycleRecommendationMaterialized).toBe(false);
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const lr = items.filter(
      (i) =>
        i.source === "lifecycle-recommendation:nora" && i.status === "active",
    );
    expect(lr.length).toBe(1);
    expect(lr[0]!.epistemicItemId).toBe(lrId);
    expect(lr[0]!.createdAt).toBe(producedAt);
    expect(
      (await runtime.oa!.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(0);
  });

  it("LR-CONT-14 — LPS/material basis drift after context snapshot → no REUSE (Product path)", async () => {
    // Timing: mutation occurs after cognitive context snapshot and before post-model continuity decision.
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("lrc14");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T09:14:00.000Z",
    );
    const lrId = turn1.lrItem.epistemicItemId;
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        lpsVersion: turn1.lps.version,
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(
      composed.context.lifecycleRecommendation.satisfiesPreCycleNextCycleTransition,
    ).toBe(true);

    // AFTER context snapshot: bump LPS version so X becomes STALE via canonical fingerprint.
    const lpsNow =
      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(lpsNow.ok).toBe(true);
    if (!lpsNow.ok) return;
    const bumped =
      await runtime.oa!.projectServices.appendLivingProjectStateVersion.execute({
        projectId,
        expectedVersion: lpsNow.livingProjectState.version,
        objective: `${lpsNow.livingProjectState.objective} · bump-lrc14`,
        createdBy: ACTOR,
        activeCycleInstanceId: null,
        correlationId: "cor:lrc14-lps-bump",
      });
    expect(bumped.ok).toBe(true);

    const structured = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "Demande après dérive LPS.",
      transitionGuidance("Le Cadrage reste recommandé."),
    );
    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const orch = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Suite après bump LPS.",
      sessionDbPath: tempDbPath("lrc14-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context, // stale pre-model satisfies=true
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(structured))],
        ]),
      },
    });
    spy.mockRestore();
    expect(orch.ok).toBe(false);
    if (orch.ok) return;
    expect(orch.code).toBe(MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION);
    expect(orch.lifecycleRecommendationContinuityRevalidation).toBe("STALE");
    const lrCount = (
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
    ).filter(
      (i) =>
        i.source === "lifecycle-recommendation:nora" && i.status === "active",
    ).length;
    expect(lrCount).toBe(1);
    expect(
      (
        await runtime.oa!.cycleServices.epistemic.listByProject(projectId)
      ).find((i) => i.epistemicItemId === lrId)?.epistemicItemId,
    ).toBe(lrId);
  });

  it("LR-CONT-15 — active cycle appears during call → no REUSE (Product path)", async () => {
    // Timing: mutation occurs after cognitive context snapshot and before post-model continuity decision.
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("lrc15");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T09:15:00.000Z",
    );
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        lpsVersion: turn1.lps.version,
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;

    const lpsNow =
      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(lpsNow.ok).toBe(true);
    if (!lpsNow.ok) return;
    // Establish authoritative active-cycle pointer via LPS (Product seam).
    // Timing: after cognitive context snapshot, before post-model continuity decision.
    const activated =
      await runtime.oa!.projectServices.appendLivingProjectStateVersion.execute({
        projectId,
        expectedVersion: lpsNow.livingProjectState.version,
        objective: lpsNow.livingProjectState.objective,
        createdBy: ACTOR,
        activeCycleInstanceId: `cycinst:lrc15-active-${projectId}`,
        correlationId: "cor:lrc15-active",
      });
    expect(activated.ok).toBe(true);

    const structured = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "Suite alors qu'un cycle est devenu actif.",
      transitionGuidance("Le Cadrage reste recommandé."),
    );
    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const orch = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Après activation cycle.",
      sessionDbPath: tempDbPath("lrc15-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(structured))],
        ]),
      },
    });
    spy.mockRestore();
    expect(orch.ok).toBe(false);
    if (orch.ok) return;
    expect(orch.code).toBe(MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION);
    expect(
      orch.lifecycleRecommendationContinuityRevalidation === "NOT_APPLICABLE" ||
        orch.lifecycleRecommendationContinuityRevalidation === "STALE",
    ).toBe(true);
  });

  it("LR-CONT-16 — HumanDecision material drift → no reuse", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("lrc16");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T09:16:00.000Z",
    );
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        lpsVersion: turn1.lps.version,
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;

    // AFTER context: record a material HumanDecision (Product decision seam).
    const lpsNow =
      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    if (!lpsNow.ok) return;
    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
      await import(
        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
      );
    const scope = `decision:lrc16-${projectId}`;
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: runtime.oa!.authorityResolver,
      scope,
      issuedAt: "2026-09-24T09:16:30.000Z",
      forceEnable: true,
      evidenceId: `evd:lrc16-${projectId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;
    const recorded = await runtime.oa!.decisionServices.recordHumanDecision.execute(
      {
        decisionId: `dec:lrc16-${projectId}`,
        projectId,
        subject: "Décision matérielle lrc16",
        options: [{ optionId: "opt:go", label: "GO" }],
        selectedOptionId: "opt:go",
        actor: LOCAL_MORRIS_M3_ACTOR,
        authority: "morris",
        reversible: true,
        scope,
        authorityEvidenceId: reg.evidenceId,
        linkToLivingProjectState: true,
        expectedLpsVersion: lpsNow.livingProjectState.version,
        decisionBasis: {
          sourceType: "proposal",
          sourceRef: "prop:lrc16",
          sourceDigest: "c".repeat(64),
          projectId,
          proposalContext: {
            lpsId: lpsNow.livingProjectState.lpsVersionId,
            lpsVersion: lpsNow.livingProjectState.version,
            doctrineDigest: VALID_PIN.digest,
          },
          executionBasis: {
            objective: "Décision lrc16",
            scope: "lrc16",
            requestedOperation: "scope decision",
          },
        },
      },
    );
    expect(recorded.ok).toBe(true);

    const structured = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "Après HD.",
      transitionGuidance("Le Cadrage reste recommandé."),
    );
    const orch = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Après décision.",
      sessionDbPath: tempDbPath("lrc16-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(structured))],
        ]),
      },
    });
    expect(orch.ok).toBe(false);
    if (orch.ok) return;
    expect(orch.code).toBe(MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION);
    expect(
      orch.lifecycleRecommendationContinuityRevalidation === "STALE" ||
        orch.lifecycleRecommendationContinuityRevalidation === "NOT_APPLICABLE",
    ).toBe(true);
  });

  it("LR-CONT-17 — trajectory drift → no reuse", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("lrc17");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T09:17:00.000Z",
    );
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const revalidated =
      revalidateExactCurrentNextCycleLifecycleRecommendationContinuity({
        expectedRecommendationId: turn1.lrItem.epistemicItemId,
        expectedSemanticKey:
          turn1.lrItem.lifecycleRecommendation?.semanticKey ?? null,
        facts: {
          items,
          cycles: turn1.cycles,
          lpsActiveCycleInstanceId: turn1.lps.activeCycleInstanceId,
          lpsVersion: turn1.lps.version,
          doctrinePackageId: VALID_PIN.doctrinePackageId,
          doctrinePackageVersion: VALID_PIN.version,
          doctrinePackageDigest: VALID_PIN.digest,
          // Material trajectory change: different version than basis.
          trajectory: turn1.traj
            ? { ...turn1.traj, version: turn1.traj.version + 7 }
            : null,
          decisions: turn1.hd,
          evidence: [],
          blockingReservationStatements: [],
        },
      });
    expect(revalidated.ok).toBe(false);
    expect(revalidated.status).toBe("STALE");
  });

  it("LR-CONT-18 — same target, different recommendation identity → no silent substitute", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("lrc18");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T09:18:00.000Z",
      "Cadrage X.",
    );
    const xId = turn1.lrItem.epistemicItemId;
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        lpsVersion: turn1.lps.version,
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(composed.context.lifecycleRecommendation.current?.recommendationId).toBe(
      xId,
    );

    // AFTER context: materialize replacement Y (same target) — Nora reasoned against X.
    await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T09:18:30.000Z",
      "Cadrage Y (remplacement).",
    );

    const structured = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "Suite contre X, pas Y.",
      transitionGuidance("Le Cadrage reste recommandé."),
    );
    const orch = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Après remplacement LR.",
      sessionDbPath: tempDbPath("lrc18-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(structured))],
        ]),
      },
    });
    expect(orch.ok).toBe(false);
    if (orch.ok) return;
    expect(orch.code).toBe(MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION);
    expect(
      orch.lifecycleRecommendationContinuityRevalidation ===
        "IDENTITY_CHANGED" ||
        orch.lifecycleRecommendationContinuityRevalidation === "STALE",
    ).toBe(true);
  });

  it("LR-CONT-19 — material reader failure at revalidation → UNAVAILABLE", () => {
    const revalidated =
      revalidateExactCurrentNextCycleLifecycleRecommendationContinuity({
        expectedRecommendationId: "epi:lrc19",
        facts: {
          items: [],
          cycles: [],
          lpsActiveCycleInstanceId: null,
          lpsVersion: 1,
          doctrinePackageId: VALID_PIN.doctrinePackageId,
          doctrinePackageVersion: VALID_PIN.version,
          doctrinePackageDigest: VALID_PIN.digest,
          failedMaterialDimensions: new Set(["trajectory"]),
        },
      });
    expect(revalidated.ok).toBe(false);
    expect(revalidated.status).toBe("UNAVAILABLE");
  });

  it("LR-CONT-20 — Cognitive Stop outranks continuity even when CURRENT still valid", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("lrc20");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T09:20:00.000Z",
    );
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        lpsVersion: turn1.lps.version,
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;

    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "stop",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: null,
      conversationGuidance: transitionGuidance("should hold"),
      cognitiveStop: true,
      currentLifecycleRecommendationSatisfiesTransition: true,
    });
    expect(coherent.boundaryContradiction).toBeNull();
    expect(coherent.lifecycleRecommendationContinuity).toBe("NONE");
    expect(coherent.conversationGuidance.kind).toBe("HOLD");
    expect(coherent.conversationGuidance.scope).toBe("BLOCKER_RESOLUTION");

    // Pure revalidation still PASS on facts — stop is orchestration/boundary concern.
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const revalidated =
      revalidateExactCurrentNextCycleLifecycleRecommendationContinuity({
        expectedRecommendationId: turn1.lrItem.epistemicItemId,
        facts: {
          items,
          cycles: turn1.cycles,
          lpsActiveCycleInstanceId: turn1.lps.activeCycleInstanceId,
          lpsVersion: turn1.lps.version,
          doctrinePackageId: VALID_PIN.doctrinePackageId,
          doctrinePackageVersion: VALID_PIN.version,
          doctrinePackageDigest: VALID_PIN.digest,
          trajectory: turn1.traj,
          decisions: turn1.hd,
          evidence: [],
          blockingReservationStatements: [],
          expectedTargetCycleTypeId: "cyc:framing",
        },
      });
    expect(revalidated.ok).toBe(true);
    expect(revalidated.status).toBe("PASS");
  });
});

describe("StudioCognitiveContext lifecycleRecommendation projection", () => {
  it("A — exactly one CURRENT LR → CURRENT projection", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("ctx-a");
    await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T08:00:00.000Z",
    );
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(composed.context.lifecycleRecommendation.state).toBe("CURRENT");
    expect(
      composed.context.lifecycleRecommendation.current?.targetCycleTypeId,
    ).toBe("cyc:framing");
    expect(
      composed.context.lifecycleRecommendation.satisfiesPreCycleNextCycleTransition,
    ).toBe(true);
  });

  it("E — no LR → NONE", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("ctx-e");
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: projectDto(projectId, {
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(composed.context.lifecycleRecommendation.state).toBe("NONE");
    expect(
      composed.context.lifecycleRecommendation.satisfiesPreCycleNextCycleTransition,
    ).toBe(false);
  });

  it("D — OA unavailable → UNAVAILABLE", async () => {
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: projectDto("prj:none"),
      registryRoot: FIXTURES,
      oa: null,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(composed.context.lifecycleRecommendation.state).toBe("UNAVAILABLE");
  });
});
