/**
 * Lifecycle Closure Phase B — deterministic proofs (LC-B-03..23 subset).
 * ZERO REAL — ScriptedModel / Memory OA / temp Product SQLite only.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai";
import {
  createTestDoctrineResolver,
  FixedClock,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import {
  createSqliteCycleServices,
  finalizeSubjectFor,
  obligationPolicySubjectFor,
  OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
  OBLIGATION_POLICY_REQUIRE_ARTIFACT,
  projectPilotLifecycle,
  selectCurrentLifecycleRecommendations,
  validateLifecycleRecommendation,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  prepareCycleFromValidatedTrajectory,
  startPreparedTrajectoryCycle,
  materializeLifecycleRecommendationFromStructuredOutput,
  resolveTrajectoryBootstrapPresence,
  type LifecycleRecommendationEnvelope,
  type TrajectoryStep,
} from "@/lib/oa/cycle";
import {
  MemoryAuthorityResolver,
  createSqliteDecisionServices,
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type DecisionServices,
} from "@/lib/oa/decision";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import { composeStudioCognitiveContext } from "@/features/project-assistant/f2/studioCognitiveContext";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";
import {
  recordObligationPolicyNoGovernedEffects,
  completeBoundTrajectoryStepAction,
  resolveBlockingReservationAction,
} from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  readyExceptFinalizeDecision,
  lifecycleCtaPresentation,
  FINALIZE_HD_BLOCKER,
} from "@/features/pre-m6-product-ui/surfaces/lifecyclePresentation";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import * as runNoraAgentsTurnMod from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";

function fakeFinalizeEnvelope(
  projectId: string,
  cycleInstanceId: string,
): LifecycleRecommendationEnvelope {
  return {
    recommendationId: "epi:fake-lr",
    projectId,
    intent: "FINALIZE_CURRENT_CYCLE",
    subjectCycleInstanceId: cycleInstanceId,
    targetCycleInstanceId: null,
    targetCycleTypeId: null,
    producer: "nora",
    producedAt: "2026-09-10T20:00:00.000Z",
    statement: "Finaliser",
    basisFingerprint: "fp:test",
    basisRefs: {
      projectId,
      subjectCycleInstanceId: cycleInstanceId,
      subjectCycleStatus: "active",
      lpsActiveCycleInstanceId: cycleInstanceId,
    },
    semanticKey: "sk:finalize",
    authority: "none",
    isHumanDecision: false,
    doesNotActivateCycle: true,
    doesNotFinalize: true,
    doesNotCreateHumanDecision: true,
    epistemicStatus: "active",
    supersedesRecommendationId: null,
    derivedCurrentness: "CURRENT",
  };
}

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const PRODUCT_REGISTRY = resolveProductDoctrineRegistryRoot(APP_ROOT);
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

const PILOTE = {
  actorId: LOCAL_PILOTE_ACTOR.actorId,
  role: LOCAL_PILOTE_ACTOR.role,
  displayName: LOCAL_PILOTE_ACTOR.displayName,
  authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
};

const STEPS_DONE: TrajectoryStep[] = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "done",
    dependencies: ["stp:clarify"],
  },
];

const STEPS_PENDING: TrajectoryStep[] = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "pending" },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "pending",
    dependencies: ["stp:clarify"],
  },
];

const ACW_DEFER_ASSESSMENT = {
  routingBlockingUnknownPresent: false,
  candidateCycleSupportable: false,
  remainingUnknownsAreCycleOwned: true,
  multiplePlausibleCycles: false,
  activeCycleAlreadyCoversWork: true,
} as const;

const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  vi.restoreAllMocks();
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-lcb-"));
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

function authorityAdapter(authority: MemoryAuthorityResolver) {
  return {
    verify: (req: {
      actorId: string;
      scope: string;
      evidenceId?: string;
      requiredLevel?: "N1" | "N2" | "N3";
      requireMorrisGate?: boolean;
    }) => {
      const r = authority.verify({
        actorId: req.actorId,
        requiredLevel: req.requiredLevel ?? "N3",
        scope: req.scope,
        evidenceId: req.evidenceId,
        requireMorrisGate: req.requireMorrisGate ?? true,
      });
      return { ok: r.ok, reason: r.reason };
    },
  };
}

function buildStack(dbPath: string): {
  project: SqliteProductProjectServices;
  cycles: ReturnType<typeof createSqliteCycleServices>;
  decisions: DecisionServices;
  authority: MemoryAuthorityResolver;
} {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const project = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-09-10T20:00:00.000Z",
    dbPath,
  });
  openServices.push(project);
  const authority = new MemoryAuthorityResolver();
  const clock = new FixedClock("2026-09-10T20:00:00.000Z");
  let decisions!: DecisionServices;
  const cycles = createSqliteCycleServices({
    projectServices: project,
    productStore: project.store,
    clock,
    decisions: {
      getById: (id) => decisions.decisions.findById(id),
      listByProject: (pid) => decisions.decisions.listByProject(pid),
    },
    authority: authorityAdapter(authority),
  });
  decisions = createSqliteDecisionServices({
    projectServices: project,
    cycleServices: cycles,
    productStore: project.store,
    clock,
    authorityResolver: authority,
  });
  return { project, cycles, decisions, authority };
}

async function registerPilotAuth(
  authority: MemoryAuthorityResolver,
  cycleId: string,
): Promise<string> {
  const auth = registerLocalPiloteAuthority({
    authorityResolver: authority,
    scope: `pilot-lifecycle:${cycleId}`,
    issuedAt: "2026-09-10T20:00:00.000Z",
    forceEnable: true,
  });
  expect(auth.ok).toBe(true);
  if (!auth.ok) throw new Error(auth.message);
  return auth.evidenceId;
}

async function seedProject(
  project: SqliteProductProjectServices,
  projectId: string,
) {
  const created = await project.createProject.execute({
    projectId,
    title: "LC-B",
    objective: "lifecycle-closure",
    context: "phase-b",
    scope: "pilot-lifecycle",
    doctrinePackagePin: VALID_PIN,
    createdBy: ACTOR,
    lpsVersionId: `lps:${projectId}-v1`,
    idempotencyKey: `idem:${projectId}`,
  });
  expect(created.ok).toBe(true);
}

async function seedTrajectory(
  cycles: ReturnType<typeof createSqliteCycleServices>,
  project: SqliteProductProjectServices,
  projectId: string,
  steps: TrajectoryStep[] = STEPS_DONE,
) {
  const lps = await project.getCurrentLivingProjectState.execute({ projectId });
  expect(lps.ok).toBe(true);
  if (!lps.ok) return;
  const created = await cycles.createInitialTrajectory.execute({
    trajectoryId: `trj:${projectId}`,
    projectId,
    steps,
    status: "active",
    expectedLpsVersion: lps.livingProjectState.version,
    createdBy: ACTOR,
  });
  expect(created.ok).toBe(true);
}

async function createCandidate(
  cycles: ReturnType<typeof createSqliteCycleServices>,
  projectId: string,
  cycleInstanceId: string,
) {
  return cycles.createCycle.execute({
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
}

async function recordHd(input: {
  decisions: DecisionServices;
  authority: MemoryAuthorityResolver;
  projectId: string;
  cycleInstanceId: string;
  subject: string;
  decisionId: string;
  evidenceId?: string;
  selectedOptionId?: string;
  options?: Array<{ optionId: string; label: string }>;
}) {
  const evidenceId =
    input.evidenceId ??
    (await registerPilotAuth(input.authority, input.cycleInstanceId));
  return input.decisions.recordHumanDecision.execute({
    decisionId: input.decisionId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    subject: input.subject,
    options: input.options ?? [
      { optionId: "opt:accept", label: "Accept" },
      { optionId: "opt:refuse", label: "Refuse" },
    ],
    selectedOptionId: input.selectedOptionId ?? "opt:accept",
    actor: LOCAL_PILOTE_ACTOR,
    authority: "morris",
    status: "accepted",
    reversible: false,
    scope: `pilot-lifecycle:${input.cycleInstanceId}`,
    authorityEvidenceId: evidenceId,
  });
}

async function recordObligationPolicy(input: {
  decisions: DecisionServices;
  authority: MemoryAuthorityResolver;
  projectId: string;
  cycleInstanceId: string;
  decisionId: string;
  evidenceId?: string;
  selectedOptionId: string;
}) {
  return recordHd({
    ...input,
    subject: obligationPolicySubjectFor(input.cycleInstanceId),
    selectedOptionId: input.selectedOptionId,
    options: [
      {
        optionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
        label: "No governed effects",
      },
      {
        optionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
        label: "Require artifact",
      },
      { optionId: "opt:accept", label: "Accept" },
    ],
  });
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
    qualificationSignals: { ...SIGNALS_LIGHT },
  };
}

function finalizeCandidate(subjectCycleInstanceId: string) {
  return {
    intent: "FINALIZE_CURRENT_CYCLE" as const,
    statement: "Envisager la finalisation du cycle actif.",
    subjectCycleInstanceId,
    targetCycleInstanceId: null,
    targetCycleTypeId: null,
    rationale: null,
    authority: "none" as const,
    isHumanDecision: false as const,
    qualificationSignals: null,
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

async function bootFreshProject(suffix: string, dbPath?: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const productDbPath = dbPath ?? tempDbPath(`${suffix}.sqlite`);
  const runtime = getRuntimeApplicationService({
    registryRoot: PRODUCT_REGISTRY,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-10T20:00:00.000Z",
    idSource: new FixedIdSource(`lcb-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `LC-B ${suffix}`,
    objective: "gestion de tâches",
    context: "phase-b-closure",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `LB${suffix}`.slice(0, 8),
    idempotencyKey: `idem:lcb-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  return { runtime, projectId: created.projectId, productDbPath, oa: runtime.oa };
}

async function materializeFreshNext(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  projectId: string,
  lr: ReturnType<typeof nextCycleLr>,
) {
  const oa = runtime.oa!;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  return materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "Narrative recommandée.",
      preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      lifecycleRecommendation: lr,
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-10T20:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
}

function bridgeDeps(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  extras?: {
    newTrajectoryId?: () => string;
    newStepId?: (k: string) => string;
    newProvenanceObservationId?: () => string;
    correlationId?: string;
  },
) {
  const oa = runtime.oa!;
  return {
    trajectories: oa.cycleServices.trajectories,
    createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    runInTransaction: ((fn: () => Promise<unknown>) =>
      oa.projectServices.store.runInTransaction(fn)) as <T>(
      fn: () => Promise<T>,
    ) => Promise<T>,
    listEpistemicByProject: (projectId: string) =>
      oa.cycleServices.epistemic.listByProject(projectId),
    listCyclesByProject: (projectId: string) =>
      oa.cycleServices.cycles.listByProject(projectId),
    listDecisionsByProject: (projectId: string) =>
      oa.decisionServices.decisions.listByProject(projectId),
    listEvidenceByProject: (projectId: string) =>
      oa.evidenceReviewServices.repository.listByProject(projectId),
    getCurrentLps: (projectId: string) =>
      oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
    getProjectDoctrinePin: async (projectId: string) => {
      const project = await oa.projectServices.getProject.execute({ projectId });
      if (!project.ok) return null;
      const pin = project.project.doctrinePackageRef;
      return pin
        ? {
            doctrinePackageId: pin.doctrinePackageId,
            version: pin.version,
            digest: pin.digest,
          }
        : null;
    },
    ...extras,
  };
}

async function seedStarted(suffix: string) {
  const { runtime, projectId, productDbPath, oa } = await bootFreshProject(suffix);
  const mat = await materializeFreshNext(
    runtime,
    projectId,
    nextCycleLr("cyc:framing", "Envisager cyc:framing."),
  );
  expect(mat.materialization?.ok).toBe(true);
  const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
    projectId,
    deps: bridgeDeps(runtime, {
      newTrajectoryId: () => `trj:lcb-${suffix}`,
      newStepId: () => `stp:lcb-${suffix}`,
      newProvenanceObservationId: () => `epi:trj-prov-lcb-${suffix}`,
      correlationId: `cor:lcb-bridge-${suffix}`,
    }),
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error("bridge failed");
  const presentation = await buildPreCycleCandidateApprovalPresentation({
    oa,
    projectId,
  });
  expect(presentation.ok && presentation.presentation).toBeTruthy();
  if (!presentation.ok || !presentation.presentation) {
    throw new Error("presentation missing");
  }
  const approved = await approveCandidateTrajectory({
    oa,
    projectId,
    presentationDigest: presentation.presentation.presentationDigest,
    forceLocalAuthority: true,
  });
  expect(approved.ok).toBe(true);
  if (!approved.ok) throw new Error("approve failed");
  const prep = await prepareCycleFromValidatedTrajectory({ oa, projectId });
  expect(prep.ok).toBe(true);
  if (!prep.ok) throw new Error(`prepare failed: ${prep.code}`);
  const started = await startPreparedTrajectoryCycle({
    oa,
    projectId,
    cycleInstanceId: prep.cycle.cycleInstanceId,
    forceLocalAuthority: true,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(`start failed: ${started.code}`);
  return {
    runtime,
    projectId,
    productDbPath,
    oa,
    cycle: started.cycle,
  };
}

async function projectDtoFromOa(
  oa: NonNullable<Awaited<ReturnType<typeof bootFreshProject>>["oa"]>,
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
  };
}

async function currentFinalizeLr(
  oa: NonNullable<Awaited<ReturnType<typeof bootFreshProject>>["oa"]>,
  projectId: string,
) {
  const items = await oa.cycleServices.epistemic.listByProject(projectId);
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  expect(lps.ok).toBe(true);
  if (!lps.ok) throw new Error("lps");
  const traj = await oa.cycleServices.getCurrentTrajectory.execute({ projectId });
  const pin =
    lps.livingProjectState.doctrinePackageRef ?? VALID_PIN;
  return selectCurrentLifecycleRecommendations({
    items,
    cycles,
    lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
    lpsVersion: lps.livingProjectState.version,
    doctrinePackageId: pin.doctrinePackageId,
    doctrinePackageVersion: pin.version,
    doctrinePackageDigest: pin.digest,
    trajectory: traj.ok ? traj.trajectory : null,
    decisions,
    evidence: [],
    blockingReservationStatements: [],
  }).filter((r) => r.intent === "FINALIZE_CURRENT_CYCLE");
}

// ─── LC-B-03 / 05 / 06 — post-ACW LR order via orchestrateTurn ───────────────

describe("LC-B Phase B — post-ACW LR materialization (D-LC-01)", () => {
  it("LC-B-03/05/06 — ACW+FINALIZE same turn: LR binds post-ACW LPS / CURRENT; one Agents call; no HD", async () => {
    const s = await seedStarted("acw-lr");
    const beforeLps =
      await s.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: s.projectId,
      });
    expect(beforeLps.ok).toBe(true);
    if (!beforeLps.ok) return;
    const lpsBefore = beforeLps.livingProjectState.version;
    const hdBefore = await s.oa.decisionServices.decisions.listByProject(
      s.projectId,
    );
    const cyclesBefore = await s.oa.cycleServices.cycles.listByProject(
      s.projectId,
    );

    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);

    const payload = {
      narrative: "Travail in-cycle puis recommandation de finalisation.",
      preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
      lifecycleRecommendation: finalizeCandidate(s.cycle.cycleInstanceId),
      activeCycleWork: {
        items: [
          {
            type: "Observation",
            statement: "Observation ACW same-turn pour bump LPS.",
            confidence: "high",
            blocking: false,
          },
        ],
      },
    };
    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(payload))],
    ]);

    const result = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "Peux-tu avancer puis recommander la finalisation?",
      sessionDbPath: tempDbPath("acw-lr-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.lifecycleRecommendationMaterialized).toBe(true);
    expect(spy).toHaveBeenCalledTimes(1);

    const afterLps =
      await s.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: s.projectId,
      });
    expect(afterLps.ok).toBe(true);
    if (!afterLps.ok) return;
    expect(afterLps.livingProjectState.version).toBeGreaterThan(lpsBefore);

    const current = await currentFinalizeLr(s.oa, s.projectId);
    expect(current).toHaveLength(1);
    expect(current[0]!.derivedCurrentness).toBe("CURRENT");
    expect(current[0]!.basisRefs.lpsVersion).toBe(
      afterLps.livingProjectState.version,
    );
    expect(current[0]!.basisRefs.lpsVersion).toBeGreaterThan(lpsBefore);

    const hdAfter = await s.oa.decisionServices.decisions.listByProject(
      s.projectId,
    );
    expect(hdAfter.length).toBe(hdBefore.length);
    const cyclesAfter = await s.oa.cycleServices.cycles.listByProject(
      s.projectId,
    );
    expect(cyclesAfter.map((c) => c.status)).toEqual(
      cyclesBefore.map((c) => c.status),
    );
  });

  it("LC-B-04 — later material LPS bump still makes FINALIZE LR STALE", async () => {
    const s = await seedStarted("stale-later");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);

    const payload = {
      narrative: "Finalize now.",
      preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
      lifecycleRecommendation: finalizeCandidate(s.cycle.cycleInstanceId),
      activeCycleWork: {
        items: [
          {
            type: "Observation",
            statement: "ACW for first LPS bump.",
            confidence: "medium",
            blocking: false,
          },
        ],
      },
    };
    const turn = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "Finalize?",
      sessionDbPath: tempDbPath("stale-later-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: new ScriptedModel([
          [assistantMessage(JSON.stringify(payload))],
        ]),
      },
    });
    expect(turn.ok).toBe(true);
    if (!turn.ok) return;
    expect(turn.lifecycleRecommendationMaterialized).toBe(true);

    const lps =
      await s.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: s.projectId,
      });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const bumped = await s.oa.projectServices.appendLivingProjectStateVersion.execute({
      projectId: s.projectId,
      expectedVersion: lps.livingProjectState.version,
      objective: `${lps.livingProjectState.objective} [later bump]`,
      createdBy: ACTOR,
    });
    expect(bumped.ok).toBe(true);

    const current = await currentFinalizeLr(s.oa, s.projectId);
    expect(current).toHaveLength(0);
    const items = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    const lr = items.find(
      (i) =>
        i.source === "lifecycle-recommendation:nora" &&
        i.lifecycleRecommendation?.intent === "FINALIZE_CURRENT_CYCLE",
    );
    expect(lr).toBeTruthy();
  });
});

// ─── LC-B-07 — dual-intent FINALIZE wins ─────────────────────────────────────

describe("LC-B Phase B — dual-intent (D-LC-04)", () => {
  it("LC-B-07 — FINALIZE validator clears targetCycleTypeId (NEXT_CYCLE payload ignored)", async () => {
    const stack = buildStack(tempDbPath("dual.sqlite"));
    await seedProject(stack.project, "prj:lcb-dual");
    await seedTrajectory(stack.cycles, stack.project, "prj:lcb-dual");
    await createCandidate(stack.cycles, "prj:lcb-dual", "cyc:lcb-dual");
    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-dual");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:lcb-dual",
      projectId: "prj:lcb-dual",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const cycles = await stack.cycles.cycles.listByProject("prj:lcb-dual");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:lcb-dual",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const validated = validateLifecycleRecommendation({
      projectId: "prj:lcb-dual",
      candidate: {
        intent: "FINALIZE_CURRENT_CYCLE",
        statement: "Finaliser maintenant malgré next-cycle cible.",
        subjectCycleInstanceId: "cyc:lcb-dual",
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:functional-design",
      },
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    expect(validated.intent).toBe("FINALIZE_CURRENT_CYCLE");
    expect(validated.targetCycleTypeId).toBeNull();
    expect(validated.targetCycleInstanceId).toBeNull();
    expect(validated.subjectCycleInstanceId).toBe("cyc:lcb-dual");
  });
});

// ─── LC-B-10 / 13–15 / 16–17 / 18–22 — domain + Product actions ──────────────

describe("LC-B Phase B — assess / policy / blockers / finalize", () => {
  it("LC-B-10 — ASSESS creates no HumanDecision", async () => {
    const stack = buildStack(tempDbPath("assess.sqlite"));
    await seedProject(stack.project, "prj:lcb-assess");
    await seedTrajectory(stack.cycles, stack.project, "prj:lcb-assess");
    await createCandidate(stack.cycles, "prj:lcb-assess", "cyc:lcb-assess");
    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-assess");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:lcb-assess",
      projectId: "prj:lcb-assess",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const before = await stack.decisions.decisions.listByProject("prj:lcb-assess");
    const assessed = await stack.cycles.pilotLifecycle.assess({
      cycleInstanceId: "cyc:lcb-assess",
      projectId: "prj:lcb-assess",
    });
    expect(assessed.ok).toBe(true);
    const after = await stack.decisions.decisions.listByProject("prj:lcb-assess");
    expect(after.length).toBe(before.length);
  });

  it("LC-B-13/14 — opt:no-governed-effects records one HD, no auto finalize", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const stack = buildStack(tempDbPath("policy.sqlite"));
    await seedProject(stack.project, "prj:lcb-pol");
    await seedTrajectory(stack.cycles, stack.project, "prj:lcb-pol");
    await createCandidate(stack.cycles, "prj:lcb-pol", "cyc:lcb-pol");
    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-pol");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:lcb-pol",
      projectId: "prj:lcb-pol",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const before = await stack.decisions.decisions.listByProject("prj:lcb-pol");
    const recorded = await recordObligationPolicyNoGovernedEffects({
      projectId: "prj:lcb-pol",
      cycleInstanceId: "cyc:lcb-pol",
      cycleServices: stack.cycles,
      decisionServices: stack.decisions,
      authorityResolver: stack.authority,
      nowIso: () => "2026-09-10T20:00:00.000Z",
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    const after = await stack.decisions.decisions.listByProject("prj:lcb-pol");
    expect(after.length).toBe(before.length + 1);
    const policy = after.find(
      (d) => d.subject === obligationPolicySubjectFor("cyc:lcb-pol"),
    );
    expect(policy?.selectedOptionId).toBe(OBLIGATION_POLICY_NO_GOVERNED_EFFECTS);
    const cycle = await stack.cycles.getCycle.execute({
      cycleInstanceId: "cyc:lcb-pol",
    });
    expect(cycle.ok && cycle.cycle.status).toBe("active");
    expect(recorded.assessment.canComplete).toBe(false);
  });

  it("LC-B-15 — APPLICABLE governed-effect family contradicts grouped N/A", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const stack = buildStack(tempDbPath("contra.sqlite"));
    await seedProject(stack.project, "prj:lcb-contra");
    await seedTrajectory(stack.cycles, stack.project, "prj:lcb-contra");
    await createCandidate(stack.cycles, "prj:lcb-contra", "cyc:lcb-contra");
    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-contra");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:lcb-contra",
      projectId: "prj:lcb-contra",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:lcb-contra",
      cycleInstanceId: "cyc:lcb-contra",
      decisionId: "dec:lcb-require-art",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
    });
    const refused = await recordObligationPolicyNoGovernedEffects({
      projectId: "prj:lcb-contra",
      cycleInstanceId: "cyc:lcb-contra",
      cycleServices: stack.cycles,
      decisionServices: stack.decisions,
      authorityResolver: stack.authority,
      nowIso: () => "2026-09-10T20:00:00.000Z",
    });
    expect(refused.ok).toBe(false);
    if (refused.ok) return;
    expect(refused.code).toBe("OBLIGATION_POLICY_CONTRADICTED");
  });

  it("LC-B-16 — completeBoundActiveTrajectoryStep removes exit_criteria_open", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const s = await seedStarted("exit");
    const before = await s.oa.cycleServices.pilotLifecycle.assess({
      cycleInstanceId: s.cycle.cycleInstanceId,
      projectId: s.projectId,
    });
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    expect(before.assessment.blockers).toContain("exit_criteria_open");

    const closed = await completeBoundTrajectoryStepAction({
      projectId: s.projectId,
      cycleInstanceId: s.cycle.cycleInstanceId,
      cycleServices: s.oa.cycleServices,
      authorityResolver: s.oa.authorityResolver,
      nowIso: () => "2026-09-10T20:00:00.000Z",
    });
    expect(closed.ok).toBe(true);
    if (!closed.ok) return;
    expect(closed.assessment.blockers).not.toContain("exit_criteria_open");
  });

  it("LC-B-17 — resolve blocking reservation removes blocking_reservations", async () => {
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    const s = await seedStarted("rsv");
    const epi = await s.oa.cycleServices.updateEpistemicState.execute({
      projectId: s.projectId,
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:lcb-block-rsv",
          type: "Reservation",
          statement: "Deadline definition still open",
          status: "active",
          blocking: true,
        },
      ],
    });
    expect(epi.ok).toBe(true);
    const before = await s.oa.cycleServices.pilotLifecycle.assess({
      cycleInstanceId: s.cycle.cycleInstanceId,
      projectId: s.projectId,
    });
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    expect(before.assessment.blockers).toContain("blocking_reservations");

    const resolved = await resolveBlockingReservationAction({
      projectId: s.projectId,
      cycleInstanceId: s.cycle.cycleInstanceId,
      epistemicItemId: "epi:lcb-block-rsv",
      cycleServices: s.oa.cycleServices,
      authorityResolver: s.oa.authorityResolver,
      nowIso: () => "2026-09-10T20:00:00.000Z",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.assessment.blockers).not.toContain("blocking_reservations");
  });

  it("LC-B-18 — only finalize HD missing → readyExceptFinalize true", async () => {
    const stack = buildStack(tempDbPath("ready.sqlite"));
    await seedProject(stack.project, "prj:lcb-ready");
    await seedTrajectory(stack.cycles, stack.project, "prj:lcb-ready");
    await createCandidate(stack.cycles, "prj:lcb-ready", "cyc:lcb-ready");
    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-ready");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:lcb-ready",
      projectId: "prj:lcb-ready",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:lcb-ready",
      cycleInstanceId: "cyc:lcb-ready",
      decisionId: "dec:lcb-ready-pol",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    });
    const assessed = await stack.cycles.pilotLifecycle.assess({
      cycleInstanceId: "cyc:lcb-ready",
      projectId: "prj:lcb-ready",
    });
    expect(assessed.ok).toBe(true);
    if (!assessed.ok) return;
    expect(assessed.assessment.canComplete).toBe(false);
    expect(assessed.assessment.blockers).toContain(FINALIZE_HD_BLOCKER);
    expect(readyExceptFinalizeDecision(assessed.assessment)).toBe(true);

    const cycles = await stack.cycles.cycles.listByProject("prj:lcb-ready");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:lcb-ready",
    });
    const projection = projectPilotLifecycle({
      projectId: "prj:lcb-ready",
      cycles,
      lpsActiveCycleInstanceId: lps.ok
        ? lps.livingProjectState.activeCycleInstanceId
        : null,
      assessment: assessed.assessment,
      currentRecommendations: [
        fakeFinalizeEnvelope("prj:lcb-ready", "cyc:lcb-ready"),
      ],
    });
    const cta = lifecycleCtaPresentation(projection);
    expect(cta.readyExceptFinalize).toBe(true);
    expect(cta.finalizeEnabled).toBe(true);
    expect(cta.showAssess).toBe(false);
  });

  it("LC-B-19/20/21 — explicit finalize completes + clears LPS activeCycleInstanceId + reload", async () => {
    const dbPath = tempDbPath("fin.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:lcb-fin");
    await seedTrajectory(stack.cycles, stack.project, "prj:lcb-fin");
    await createCandidate(stack.cycles, "prj:lcb-fin", "cyc:lcb-fin");
    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-fin");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:lcb-fin",
      projectId: "prj:lcb-fin",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:lcb-fin",
      cycleInstanceId: "cyc:lcb-fin",
      decisionId: "dec:lcb-fin-pol",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    });
    await recordHd({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:lcb-fin",
      cycleInstanceId: "cyc:lcb-fin",
      subject: finalizeSubjectFor("cyc:lcb-fin"),
      decisionId: "dec:lcb-fin-hd",
      evidenceId: ev,
    });
    const finalized = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:lcb-fin",
      projectId: "prj:lcb-fin",
      createdBy: PILOTE,
      decisionId: "dec:lcb-fin-hd",
      authorityEvidenceId: ev,
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.assessment?.canComplete).toBe(true);
    expect(finalized.cycle.status).toBe("completed");
    expect(finalized.activeCycleInstanceId).toBeNull();

    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:lcb-fin",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.activeCycleInstanceId).toBeUndefined();

    // Reload parity — reopen same sqlite via fresh stack binding.
    stack.project.dispose();
    openServices.pop();
    const reopened = buildStack(dbPath);
    const cycle = await reopened.cycles.getCycle.execute({
      cycleInstanceId: "cyc:lcb-fin",
    });
    expect(cycle.ok && cycle.cycle.status).toBe("completed");
    const lps2 = await reopened.project.getCurrentLivingProjectState.execute({
      projectId: "prj:lcb-fin",
    });
    expect(lps2.ok).toBe(true);
    if (!lps2.ok) return;
    expect(lps2.livingProjectState.activeCycleInstanceId).toBeUndefined();
  });

  it("LC-B-22 — incomplete finalize returns canComplete false; cycle stays active", async () => {
    const stack = buildStack(tempDbPath("inc.sqlite"));
    await seedProject(stack.project, "prj:lcb-inc");
    await seedTrajectory(
      stack.cycles,
      stack.project,
      "prj:lcb-inc",
      STEPS_PENDING,
    );
    await createCandidate(stack.cycles, "prj:lcb-inc", "cyc:lcb-inc");
    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-inc");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:lcb-inc",
      projectId: "prj:lcb-inc",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:lcb-inc",
      cycleInstanceId: "cyc:lcb-inc",
      decisionId: "dec:lcb-inc-pol",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    });
    await recordHd({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:lcb-inc",
      cycleInstanceId: "cyc:lcb-inc",
      subject: finalizeSubjectFor("cyc:lcb-inc"),
      decisionId: "dec:lcb-inc-hd",
      evidenceId: ev,
    });
    const incomplete = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:lcb-inc",
      projectId: "prj:lcb-inc",
      createdBy: PILOTE,
      decisionId: "dec:lcb-inc-hd",
      authorityEvidenceId: ev,
    });
    expect(incomplete.ok).toBe(true);
    if (!incomplete.ok) return;
    expect(incomplete.assessment?.canComplete).toBe(false);
    expect(incomplete.assessment?.blockers).toContain("exit_criteria_open");
    expect(incomplete.cycle.status).toBe("active");
  });

  it("LC-B-09/11 — projection assessment + CTA honesty when blockers remain", async () => {
    const stack = buildStack(tempDbPath("cta.sqlite"));
    await seedProject(stack.project, "prj:lcb-cta");
    await seedTrajectory(
      stack.cycles,
      stack.project,
      "prj:lcb-cta",
      STEPS_PENDING,
    );
    await createCandidate(stack.cycles, "prj:lcb-cta", "cyc:lcb-cta");
    const ev = await registerPilotAuth(stack.authority, "cyc:lcb-cta");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:lcb-cta",
      projectId: "prj:lcb-cta",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const assessed = await stack.cycles.pilotLifecycle.assess({
      cycleInstanceId: "cyc:lcb-cta",
      projectId: "prj:lcb-cta",
    });
    expect(assessed.ok).toBe(true);
    if (!assessed.ok) return;
    expect(assessed.assessment).toBeTruthy();
    expect(assessed.assessment.blockers.length).toBeGreaterThan(0);

    const cycles = await stack.cycles.cycles.listByProject("prj:lcb-cta");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:lcb-cta",
    });
    const projection = projectPilotLifecycle({
      projectId: "prj:lcb-cta",
      cycles,
      lpsActiveCycleInstanceId: lps.ok
        ? lps.livingProjectState.activeCycleInstanceId
        : null,
      assessment: assessed.assessment,
    });
    expect(projection.assessment).toBeTruthy();
    const cta = lifecycleCtaPresentation(projection);
    expect(cta.readyExceptFinalize).toBe(false);
    expect(cta.finalizeEnabled).toBe(false);
    expect(cta.showAssess).toBe(true);
  });
});
