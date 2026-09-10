/** @vitest-environment node */
/**
 * D-GF-ACW-01 — BAR-WORK-01…50
 * Active-cycle cognitive work: context/CKC, routing, schema, materialization,
 * atomicity, idempotence, restart, no silent promotion, genericity.
 * ZERO NEW REAL. Deterministic Fake Nora + Product SQLite only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  classifyTrajectoryBinding,
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  prepareCycleFromValidatedTrajectory,
  resolveTrajectoryBootstrapPresence,
  startPreparedTrajectoryCycle,
  listCycleTypes,
  getCycleTypeById,
} from "@/lib/oa/cycle";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";
import {
  PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
  NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA,
  NORA_ACTIVE_CYCLE_WORK_OUTPUT_SCHEMA,
  applyPreCycleRoutingBoundaryCoherence,
  isNoraActiveCycleWorkOutput,
  normalizeNoraProductTurnStructuredOutput,
  type NoraActiveCycleWorkItem,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { FakeConversationProvider } from "@/lib/platform/ai";
import {
  composeStudioCognitiveContext,
  buildStudioCognitivePromptSections,
} from "@/features/project-assistant/f2/studioCognitiveContext";
import { loadProductCkcCognitiveContent } from "@/features/project-assistant/f2/ckcCognitiveContext";
import {
  materializeActiveCycleWork,
  activeCycleWorkEpistemicItemId,
  ACTIVE_CYCLE_WORK_SOURCE,
} from "@/features/project-assistant/materializeActiveCycleWork";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { EpistemicItem } from "@/lib/oa/cycle";

const APP_ROOT = path.resolve(__dirname, "../..");
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

const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const ACW_DEFER_ASSESSMENT = {
  routingBlockingUnknownPresent: false,
  candidateCycleSupportable: false,
  remainingUnknownsAreCycleOwned: true,
  multiplePlausibleCycles: false,
  activeCycleAlreadyCoversWork: true,
} as const;

const tempDirs: string[] = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  vi.restoreAllMocks();
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "acw-"));
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

function nextCycleLr(
  targetCycleTypeId: string,
  statement: string,
  signals: typeof SIGNALS_LIGHT = SIGNALS_LIGHT,
) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement,
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
    rationale: "Prochain travail gouverné supportable.",
    authority: "none" as const,
    isHumanDecision: false as const,
    qualificationSignals: { ...signals },
  };
}

function productTurn(lr: ReturnType<typeof nextCycleLr>) {
  return {
    narrative: "Narrative recommandée.",
    preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
    lifecycleRecommendation: lr,
  };
}

function acwTurn(items: NoraActiveCycleWorkItem[], narrative = "Travail in-cycle.") {
  return {
    narrative,
    preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
    lifecycleRecommendation: null,
    activeCycleWork: { items },
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
  };
}

async function bootFreshProject(suffix: string, dbPath?: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const productDbPath = dbPath ?? tempDbPath(`${suffix}.sqlite`);
  const runtime = getRuntimeApplicationService({
    // Product doctrine root — required for active-cycle CKC cognitive load.
    // FIXTURES/SCHEMAS retained as sibling constants for parity with START tests.
    registryRoot: PRODUCT_REGISTRY,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-10T08:00:00.000Z",
    idSource: new FixedIdSource(`acw-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Fresh ACW ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `AW${suffix}`.slice(0, 8),
    idempotencyKey: `idem:acw-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  return { runtime, projectId: created.projectId, productDbPath };
}

async function reopenRuntime(suffix: string, productDbPath: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: PRODUCT_REGISTRY,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-10T09:00:00.000Z",
    idSource: new FixedIdSource(`acw-re-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing on reopen");
  return runtime;
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
    structuredOutput: productTurn(lr),
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
    producedAt: "2026-09-10T08:01:00.000Z",
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

async function seedValidated(
  suffix: string,
  opts?: {
    targetCycleTypeId?: string;
    dbPath?: string;
  },
) {
  const { runtime, projectId, productDbPath } = await bootFreshProject(
    suffix,
    opts?.dbPath,
  );
  const targetCycleTypeId = opts?.targetCycleTypeId ?? "cyc:framing";
  const mat = await materializeFreshNext(
    runtime,
    projectId,
    nextCycleLr(targetCycleTypeId, `Envisager ${targetCycleTypeId}.`),
  );
  expect(mat.recommendationAttempted).toBe(true);
  expect(mat.materialization?.ok).toBe(true);
  if (!mat.materialization?.ok) throw new Error("materialize failed");

  const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
    projectId,
    deps: bridgeDeps(runtime, {
      newTrajectoryId: () => `trj:acw-${suffix}`,
      newStepId: () => `stp:acw-${suffix}`,
      newProvenanceObservationId: () => `epi:trj-prov-acw-${suffix}`,
      correlationId: `cor:acw-bridge-${suffix}`,
    }),
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error("bridge failed");

  const presentation = await buildPreCycleCandidateApprovalPresentation({
    oa: runtime.oa!,
    projectId,
  });
  expect(presentation.ok).toBe(true);
  if (!presentation.ok || !presentation.presentation) {
    throw new Error("presentation missing");
  }

  const approved = await approveCandidateTrajectory({
    oa: runtime.oa!,
    projectId,
    presentationDigest: presentation.presentation.presentationDigest,
    forceLocalAuthority: true,
  });
  expect(approved.ok).toBe(true);
  if (!approved.ok) throw new Error("approve failed");

  return {
    runtime,
    projectId,
    productDbPath,
    oa: runtime.oa!,
    prepared,
    approved,
    targetCycleTypeId,
  };
}

async function seedStarted(
  suffix: string,
  opts?: Parameters<typeof seedValidated>[1],
) {
  const seeded = await seedValidated(suffix, opts);
  const prep = await prepareCycleFromValidatedTrajectory({
    oa: seeded.oa,
    projectId: seeded.projectId,
  });
  expect(prep.ok).toBe(true);
  if (!prep.ok) throw new Error(`prepare failed: ${prep.code}`);
  const started = await startPreparedTrajectoryCycle({
    oa: seeded.oa,
    projectId: seeded.projectId,
    cycleInstanceId: prep.cycle.cycleInstanceId,
    forceLocalAuthority: true,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(`start failed: ${started.code}`);
  return { ...seeded, prep, started, cycle: started.cycle };
}

async function projectDtoFromOa(
  oa: NonNullable<Awaited<ReturnType<typeof bootFreshProject>>["runtime"]["oa"]>,
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

async function materializeFacts(
  oa: NonNullable<Awaited<ReturnType<typeof bootFreshProject>>["runtime"]["oa"]>,
  projectId: string,
  cycleInstanceId: string,
  turnCorrelationId: string,
) {
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const existingItems = await oa.cycleServices.epistemic.listByProject(projectId);
  return {
    projectId,
    activeCycleInstanceId: cycleInstanceId,
    lpsVersion: lps.livingProjectState.version,
    lpsObjective: lps.livingProjectState.objective,
    existingEpistemicItemIds: lps.livingProjectState.epistemicItemIds ?? [],
    existingItems,
    turnCorrelationId,
  };
}

function acwMaterializeInput(
  oa: NonNullable<Awaited<ReturnType<typeof bootFreshProject>>["runtime"]["oa"]>,
  facts: Awaited<ReturnType<typeof materializeFacts>>,
  items: NoraActiveCycleWorkItem[],
  extras?: {
    appendLivingProjectStateVersion?: typeof oa.projectServices.appendLivingProjectStateVersion;
    updateEpistemicState?: typeof oa.cycleServices.updateEpistemicState;
  },
) {
  return {
    items,
    facts,
    updateEpistemicState:
      extras?.updateEpistemicState ?? oa.cycleServices.updateEpistemicState,
    appendLivingProjectStateVersion:
      extras?.appendLivingProjectStateVersion ??
      oa.projectServices.appendLivingProjectStateVersion,
    getCurrentLivingProjectState: oa.projectServices.getCurrentLivingProjectState,
    getCycle: oa.cycleServices.getCycle,
    runInTransaction: oa.cycleServices.store.runInTransaction.bind(
      oa.cycleServices.store,
    ),
    producedAt: "2026-09-10T10:00:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  };
}

const MVP_OBS: NoraActiveCycleWorkItem[] = [
  {
    type: "Observation",
    statement: "L'utilisateur gère des tâches quotidiennes dispersées.",
    confidence: "high",
    blocking: false,
  },
  {
    type: "Observation",
    statement: "Priorisation manuelle est un besoin MVP explicite.",
    confidence: "medium",
    blocking: null,
  },
  {
    type: "Hypothesis",
    statement: "Une vue simple date+priorité couvre le besoin MVP.",
    confidence: "medium",
    blocking: false,
  },
  {
    type: "Recommendation",
    statement: "Cadrer le MVP autour d'une liste priorisée datée.",
    confidence: null,
    blocking: null,
  },
];

// ─── Context + CKC ───────────────────────────────────────────────────────────

describe("D-GF-ACW-01 context + CKC (BAR-WORK-01..08)", () => {
  it("BAR-WORK-01/02/03: compose after START has server-owned activeCycle + CKC ref", async () => {
    const s = await seedStarted("ctx01");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    if (!composed.ok) throw new Error(`${composed.code}: ${composed.message}`);
    expect(composed.ok).toBe(true);
    const ac = composed.context.activeCycle;
    expect(ac).not.toBeNull();
    expect(ac!.cycleInstanceId).toBe(s.cycle.cycleInstanceId);
    expect(ac!.cycleTypeId).toBe(s.targetCycleTypeId);
    expect(ac!.profile).toBe(s.cycle.profile);
    expect(ac!.trajectoryId).toBeTruthy();
    expect(ac!.trajectoryStepId).toBeTruthy();
    expect(ac!.ckcResolutionRef).toBeTruthy();
    expect(ac!.ckcResolutionRef).toBe(s.cycle.ckcResolutionRef);
    expect(ac!.workEligible).toBe(true);
    expect(classifyTrajectoryBinding(s.cycle)).toBe("COMPLETE_TRAJECTORY_BOUND");
  });

  it("BAR-WORK-04/05: active CKC authoritative; different intent candidate does not override", async () => {
    const s = await seedStarted("ctx04");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const other = listCycleTypes().find(
      (c) => c.cycleTypeId !== s.targetCycleTypeId,
    )!.cycleTypeId;
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "actionable",
        parseOk: true,
        candidateCycleTypeId: other,
      }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    expect(composed.context.method.activeCycleCkcAuthoritative).toBe(true);
    expect(composed.context.activeCycle!.cycleTypeId).toBe(s.targetCycleTypeId);
    expect(composed.context.method.orientation.candidateCycleTypeId).toBe(other);
    const sections = buildStudioCognitivePromptSections(composed.context);
    const blob = sections.join("\n");
    expect(blob).toMatch(/cycle ACTIVE|autoritative|AUTORITATIVE/i);
    expect(composed.context.method.ckcLoaded).toBe(true);
    expect(composed.context.method.ckcLensSection).toBeTruthy();
    const framingLabel = getCycleTypeById(s.targetCycleTypeId)?.label;
    if (framingLabel) {
      expect(composed.context.method.cycleLabel).toBe(framingLabel);
    }
  });

  it("BAR-WORK-06: corrupt ckcResolutionRef → ACTIVE_CYCLE_CKC_REF_DRIFT before model", async () => {
    const s = await seedStarted("ctx06");
    await s.oa.cycleServices.cycles.save({
      ...structuredClone(s.cycle),
      ckcResolutionRef: "ckc-ref:TAMPERED-DRIFT",
    });
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(false);
    if (composed.ok) throw new Error("expected fail");
    expect(composed.code).toBe("ACTIVE_CYCLE_CKC_REF_DRIFT");
  });

  it("BAR-WORK-07: missing cycle for LPS pointer → ACTIVE_CYCLE_NOT_FOUND", async () => {
    const s = await seedStarted("ctx07");
    const lps = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!lps.ok) throw new Error("lps");
    const ghostId = "cyc:ghost-missing-acw-07";
    const cleared = await s.oa.projectServices.appendLivingProjectStateVersion.execute({
      projectId: s.projectId,
      expectedVersion: lps.livingProjectState.version,
      objective: lps.livingProjectState.objective,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      activeCycleInstanceId: ghostId,
      correlationId: "cor:acw-ghost-07",
    });
    expect(cleared.ok).toBe(true);
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    expect(dto.activeCycleInstanceId).toBe(ghostId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(false);
    if (composed.ok) throw new Error("expected fail");
    expect(composed.code).toBe("ACTIVE_CYCLE_NOT_FOUND");
  });

  it("BAR-WORK-08: project mismatch on compose fails closed", async () => {
    const s = await seedStarted("ctx08");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: { ...dto, projectId: "prj:other-mismatch-08" },
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
      activeCycleInstanceId: s.cycle.cycleInstanceId,
    });
    expect(composed.ok).toBe(false);
    if (composed.ok) throw new Error("expected fail");
    expect(composed.code).toBe("ACTIVE_CYCLE_PROJECT_MISMATCH");
  });
});

// ─── Routing ─────────────────────────────────────────────────────────────────

describe("D-GF-ACW-01 routing (BAR-WORK-09..11)", () => {
  it("BAR-WORK-09: paused cycle → workEligible false; materialize ACTIVE_CYCLE_NOT_ELIGIBLE", async () => {
    const s = await seedStarted("rt09");
    await s.oa.cycleServices.cycles.save({
      ...structuredClone(s.cycle),
      status: "paused",
    });
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    expect(composed.context.activeCycle!.workEligible).toBe(false);

    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-pause-09",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, [
        {
          type: "Observation",
          statement: "Should not persist while paused.",
          confidence: null,
          blocking: null,
        },
      ]),
    );
    expect(mat.ok).toBe(false);
    if (mat.ok) throw new Error("expected fail");
    expect(mat.code).toBe("ACTIVE_CYCLE_NOT_ELIGIBLE");
  });

  it("BAR-WORK-10: coversWork=true strips NEXT_CYCLE via coherence", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Defer to active.",
      preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
      lifecycleRecommendation: nextCycleLr("cyc:delivery", "Next delivery."),
      activeCycleWork: { items: MVP_OBS.slice(0, 1) },
    });
    expect(coherent.disposition).toBe("DEFER_TO_ACTIVE_CYCLE");
    expect(coherent.lifecycleRecommendation).toBeNull();
    expect(coherent.lifecycleRecommendationSuppressed).toBe(true);
    expect(coherent.activeCycleWork?.items).toHaveLength(1);
  });

  it("BAR-WORK-11: coversWork=false preserves EMIT path", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Emit framing.",
      preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      lifecycleRecommendation: nextCycleLr("cyc:framing", "Cadrage."),
      activeCycleWork: null,
    });
    expect(coherent.disposition).toBe("EMIT_LIFECYCLE_RECOMMENDATION");
    expect(coherent.lifecycleRecommendation?.targetCycleTypeId).toBe(
      "cyc:framing",
    );
    expect(coherent.lifecycleRecommendationSuppressed).toBe(false);
  });
});

// ─── Schema ──────────────────────────────────────────────────────────────────

describe("D-GF-ACW-01 schema (BAR-WORK-12..15)", () => {
  it("BAR-WORK-12: Fake product turn → exactly one provider call", async () => {
    const s = await seedStarted("sch12");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);

    const payload = acwTurn(MVP_OBS.slice(0, 2), "Observations MVP cadrage.");
    const provider = new FakeConversationProvider({
      scripted: [JSON.stringify(payload)],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "Quelles observations pour le MVP tâches ?",
      sessionDbPath: tempDbPath("sch12-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed.context,
      turnCorrelationId: "cor:acw-orch-12",
    });
    expect(result.ok).toBe(true);
    expect(provider.getCallCountForTests()).toBe(1);
  });

  it("BAR-WORK-13/14: isNoraActiveCycleWorkOutput / normalize reject forbidden types", () => {
    const forbidden = [
      { type: "DecisionRef", statement: "x", confidence: null, blocking: null },
      { type: "EvidenceRef", statement: "x", confidence: null, blocking: null },
      {
        type: "HumanDecision",
        statement: "x",
        confidence: null,
        blocking: null,
      },
      { type: "Fact", statement: "x", confidence: null, blocking: null },
    ];
    for (const item of forbidden) {
      expect(isNoraActiveCycleWorkOutput({ items: [item] })).toBe(false);
      expect(
        normalizeNoraProductTurnStructuredOutput({
          narrative: "n",
          preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
          lifecycleRecommendation: null,
          activeCycleWork: { items: [item] },
        }),
      ).toBeNull();
    }
    expect(
      isNoraActiveCycleWorkOutput({
        items: [
          {
            type: "Observation",
            statement: "ok",
            confidence: null,
            blocking: null,
          },
        ],
      }),
    ).toBe(true);
  });

  it("BAR-WORK-15: ACW schema items have no id/authority/provenance property keys", () => {
    const itemSchema = JSON.stringify(NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA);
    const outSchema = JSON.stringify(NORA_ACTIVE_CYCLE_WORK_OUTPUT_SCHEMA);
    const turnSchema = JSON.stringify(
      NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.schema,
    );
    for (const key of ['"id"', '"authority"', '"provenance"']) {
      expect(itemSchema).not.toContain(key);
    }
    // Nested item schema under activeCycleWork must not declare those keys.
    expect(outSchema).toContain('"items"');
    expect(turnSchema).toContain("activeCycleWork");
    const acwSlice = turnSchema.slice(
      turnSchema.indexOf("activeCycleWork"),
      turnSchema.indexOf("activeCycleWork") + 1200,
    );
    expect(acwSlice).not.toMatch(/"properties":\{[^}]*"(id|authority|provenance)"/);
  });
});

// ─── Materialization authority ───────────────────────────────────────────────

describe("D-GF-ACW-01 materialization authority (BAR-WORK-16..20)", () => {
  it("BAR-WORK-16/17/18/19/20: Observations/Hypothesis/Recommendation materialize with ACW provenance", async () => {
    const s = await seedStarted("mat16");
    const corr = "cor:acw-mat-16";
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      corr,
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS),
    );
    expect(mat.ok).toBe(true);
    if (!mat.ok) throw new Error(mat.code);
    expect(mat.createdIds.length).toBe(MVP_OBS.length);

    const items = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    const acw = items.filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    expect(acw.length).toBeGreaterThanOrEqual(MVP_OBS.length);

    const obs = acw.find((e) => e.type === "Observation");
    expect(obs).toBeTruthy();
    expect(obs!.source).toBe("active-cycle-work:nora");
    expect(obs!.relatedObjects).toContain(s.projectId);
    expect(obs!.relatedObjects).toContain(s.cycle.cycleInstanceId);
    if (s.cycle.trajectoryId) {
      expect(obs!.relatedObjects).toContain(s.cycle.trajectoryId);
    }
    expect(obs!.provenance?.correlationId).toBe(corr);
    expect(obs!.createdBy?.actorId).toBe("actor:nora");

    const hyp = acw.find((e) => e.type === "Hypothesis");
    expect(hyp?.type).toBe("Hypothesis");

    const rec = acw.find((e) => e.type === "Recommendation");
    expect(rec).toBeTruthy();
    expect(rec!.lifecycleRecommendation).toBeUndefined();
    expect((rec as EpistemicItem & { authority?: unknown }).authority).toBeUndefined();
    expect(rec!.source).toBe(ACTIVE_CYCLE_WORK_SOURCE);
  });
});

// ─── Atomicity (BLOCKING) ────────────────────────────────────────────────────

describe("D-GF-ACW-01 atomicity (BAR-WORK-21..24)", () => {
  it("BAR-WORK-21: happy path Epistemic + LPS.epistemicItemIds atomic; version bumps", async () => {
    const s = await seedStarted("atm21");
    const before = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!before.ok) throw new Error("lps");
    const v0 = before.livingProjectState.version;
    const ids0 = before.livingProjectState.epistemicItemIds ?? [];

    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-atm-21",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 2)),
    );
    expect(mat.ok).toBe(true);
    if (!mat.ok) throw new Error(mat.code);
    expect(mat.lpsVersionAfter).toBe(v0 + 1);

    const after = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!after.ok) throw new Error("lps after");
    expect(after.livingProjectState.version).toBe(v0 + 1);
    for (const id of mat.createdIds) {
      expect(after.livingProjectState.epistemicItemIds).toContain(id);
      expect(ids0).not.toContain(id);
    }
    const durable = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    for (const id of mat.createdIds) {
      expect(durable.some((e) => e.epistemicItemId === id)).toBe(true);
    }
  });

  it("BAR-WORK-22: LPS append failure rolls back — no new epistemic, no version bump", async () => {
    const s = await seedStarted("atm22");
    const before = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!before.ok) throw new Error("lps");
    const v0 = before.livingProjectState.version;
    const epiBefore = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    const epiIdsBefore = new Set(epiBefore.map((e) => e.epistemicItemId));

    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-atm-22",
    );
    const failingAppend = {
      execute: async () =>
        ({
          ok: false as const,
          error: {
            code: "STATE_CONFLICT" as const,
            detailCode: "PERSISTENCE_FAILURE" as const,
            message: "forced_lps_append_fail",
            severity: "error" as const,
            retryable: false,
            internalCauseRef: "forced_lps_append_fail",
          },
        }),
    };

    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 2), {
        appendLivingProjectStateVersion: failingAppend as never,
      }),
    );
    expect(mat.ok).toBe(false);

    const after = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!after.ok) throw new Error("lps after");
    expect(after.livingProjectState.version).toBe(v0);
    const epiAfter = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    const newOnes = epiAfter.filter((e) => !epiIdsBefore.has(e.epistemicItemId));
    expect(newOnes.filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE)).toHaveLength(
      0,
    );
  });

  it("BAR-WORK-23/24: LPS OCC expectedVersion mismatch → no new items", async () => {
    const s = await seedStarted("atm23");
    const before = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!before.ok) throw new Error("lps");
    const v0 = before.livingProjectState.version;
    const epiBefore = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).map((e) => e.epistemicItemId);

    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-atm-23",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(
        s.oa,
        { ...facts, lpsVersion: v0 + 99 },
        [
          {
            type: "Observation",
            statement: "OCC mismatch should not write.",
            confidence: null,
            blocking: null,
          },
        ],
      ),
    );
    expect(mat.ok).toBe(false);
    if (!mat.ok) {
      expect(["LPS_VERSION_CONFLICT", "ACTIVE_CYCLE_WORK_ATOMIC_FAILURE"]).toContain(
        mat.code,
      );
    }

    const after = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!after.ok) throw new Error("lps");
    expect(after.livingProjectState.version).toBe(v0);
    const epiAfter = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    expect(
      epiAfter.filter(
        (e) =>
          e.source === ACTIVE_CYCLE_WORK_SOURCE &&
          !epiBefore.includes(e.epistemicItemId),
      ),
    ).toHaveLength(0);
  });
});

// ─── Idempotence / stale ─────────────────────────────────────────────────────

describe("D-GF-ACW-01 idempotence / stale (BAR-WORK-25..28)", () => {
  it("BAR-WORK-25: same turnCorrelationId + same items → idempotent, no duplicate ids", async () => {
    const s = await seedStarted("idm25");
    const corr = "cor:acw-idm-25";
    const items = MVP_OBS.slice(0, 2);
    const facts1 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      corr,
    );
    const first = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts1, items),
    );
    expect(first.ok).toBe(true);
    if (!first.ok) throw new Error(first.code);

    const facts2 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      corr,
    );
    const second = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts2, items),
    );
    expect(second.ok).toBe(true);
    if (!second.ok) throw new Error(second.code);
    expect(second.idempotent).toBe(true);
    expect(second.createdIds).toHaveLength(0);
    expect(second.reusedIds).toEqual(first.createdIds);

    const durable = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    const ids = durable.map((e) => e.epistemicItemId);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("BAR-WORK-26: same id different material → ACTIVE_CYCLE_WORK_IDEM_CONFLICT", async () => {
    const s = await seedStarted("idm26");
    const corr = "cor:acw-idm-26";
    const statement = "Original observation statement for conflict.";
    const item: NoraActiveCycleWorkItem = {
      type: "Observation",
      statement,
      confidence: null,
      blocking: null,
    };
    const id = activeCycleWorkEpistemicItemId({
      projectId: s.projectId,
      cycleInstanceId: s.cycle.cycleInstanceId,
      turnCorrelationId: corr,
      index: 0,
      type: "Observation",
      statement,
    });
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      corr,
    );
    const conflicting: EpistemicItem = {
      schemaVersion: "0.1.0-oa",
      epistemicItemId: id,
      type: "Observation",
      statement: "DIFFERENT material — conflict.",
      status: "active",
      source: ACTIVE_CYCLE_WORK_SOURCE,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      createdAt: "2026-09-10T09:00:00.000Z",
      relatedObjects: [s.projectId, s.cycle.cycleInstanceId],
    };
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(
        s.oa,
        { ...facts, existingItems: [...facts.existingItems, conflicting] },
        [item],
      ),
    );
    expect(mat.ok).toBe(false);
    if (!mat.ok) expect(mat.code).toBe("ACTIVE_CYCLE_WORK_IDEM_CONFLICT");
  });

  it("BAR-WORK-27: pause after model conceptually then materialize → fail, no write", async () => {
    const s = await seedStarted("idm27");
    await s.oa.cycleServices.cycles.save({
      ...structuredClone(s.cycle),
      status: "paused",
    });
    const epiBefore = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).map((e) => e.epistemicItemId);
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-idm-27",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(false);
    if (!mat.ok) expect(mat.code).toBe("ACTIVE_CYCLE_NOT_ELIGIBLE");
    const epiAfter = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    expect(
      epiAfter.filter(
        (e) =>
          e.source === ACTIVE_CYCLE_WORK_SOURCE &&
          !epiBefore.includes(e.epistemicItemId),
      ),
    ).toHaveLength(0);
  });

  it("BAR-WORK-28: LPS active pointer changed → ACTIVE_CYCLE_LPS_POINTER_STALE", async () => {
    const s = await seedStarted("idm28");
    const lps = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!lps.ok) throw new Error("lps");
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-idm-28",
    );
    const cleared = await s.oa.projectServices.appendLivingProjectStateVersion.execute({
      projectId: s.projectId,
      expectedVersion: lps.livingProjectState.version,
      objective: lps.livingProjectState.objective,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      activeCycleInstanceId: null,
      correlationId: "cor:acw-clear-ptr-28",
    });
    expect(cleared.ok).toBe(true);

    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(false);
    if (!mat.ok) expect(mat.code).toBe("ACTIVE_CYCLE_LPS_POINTER_STALE");
  });
});

// ─── Restart ─────────────────────────────────────────────────────────────────

describe("D-GF-ACW-01 restart (BAR-WORK-29..31)", () => {
  it("BAR-WORK-29/30/31: reopen same dbPath → activeCycle + work items durable (no Memory B)", async () => {
    const dbPath = tempDbPath("rst29.sqlite");
    const s = await seedStarted("rst29", { dbPath });
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-rst-29",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 2)),
    );
    expect(mat.ok).toBe(true);
    if (!mat.ok) throw new Error(mat.code);

    const reopened = await reopenRuntime("rst29", dbPath);
    const dto = await projectDtoFromOa(reopened.oa!, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: reopened.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    expect(composed.context.activeCycle?.cycleInstanceId).toBe(
      s.cycle.cycleInstanceId,
    );
    expect(composed.context.activeCycleWorkItems.state).toBe("PRESENT");
    expect(composed.context.activeCycleWorkItems.items.length).toBeGreaterThanOrEqual(
      2,
    );
  });
});

// ─── No silent promotion ─────────────────────────────────────────────────────

describe("D-GF-ACW-01 no silent promotion (BAR-WORK-32..38)", () => {
  it("BAR-WORK-32..38: ACW does not change objective/scope/HD/EC/Attempt/Confirmation/trajectory version", async () => {
    const s = await seedStarted("nsp32");
    const lpsBefore =
      await s.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: s.projectId,
      });
    if (!lpsBefore.ok) throw new Error("lps");
    const hdBefore = await s.oa.decisionServices.decisions.listByProject(
      s.projectId,
    );
    const trajBefore =
      await s.oa.cycleServices.trajectories.findCurrentByProjectId(s.projectId);
    const ecsBefore =
      await s.oa.executionContractServices.contracts.listByProject(s.projectId);
    const attemptsRepo = s.oa.executionAttemptServices.attempts as {
      listByProject?: (id: string) => Promise<unknown[]>;
    };
    const attemptsBefore = attemptsRepo.listByProject
      ? await attemptsRepo.listByProject(s.projectId)
      : [];

    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-nsp-32",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS),
    );
    expect(mat.ok).toBe(true);
    if (!mat.ok) throw new Error(mat.code);

    const lpsAfter =
      await s.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: s.projectId,
      });
    if (!lpsAfter.ok) throw new Error("lps after");
    expect(lpsAfter.livingProjectState.objective).toBe(
      lpsBefore.livingProjectState.objective,
    );
    expect(lpsAfter.livingProjectState.scope).toBe(
      lpsBefore.livingProjectState.scope,
    );
    const hdAfter = await s.oa.decisionServices.decisions.listByProject(
      s.projectId,
    );
    expect(hdAfter.length).toBe(hdBefore.length);
    const ecsAfter =
      await s.oa.executionContractServices.contracts.listByProject(s.projectId);
    expect(ecsAfter).toHaveLength(0);
    expect(ecsBefore).toHaveLength(0);
    const attemptsAfter = attemptsRepo.listByProject
      ? await attemptsRepo.listByProject(s.projectId)
      : [];
    expect(attemptsAfter.length).toBe(0);
    expect(attemptsBefore.length).toBe(0);
    const store = s.oa.projectServices.store as {
      failNextSave?: unknown;
      db?: { prepare: (sql: string) => { all: (...a: unknown[]) => unknown[] } };
    };
    // Confirmation count via Product SQLite when accessible
    if (store.db) {
      const rows = store.db
        .prepare("SELECT COUNT(*) AS c FROM oa_confirmations WHERE project_id = ?")
        .all(s.projectId) as Array<{ c: number }>;
      expect(Number(rows[0]?.c ?? 0)).toBe(0);
    }
    const trajAfter =
      await s.oa.cycleServices.trajectories.findCurrentByProjectId(s.projectId);
    expect(trajAfter?.version).toBe(trajBefore?.version);
  });
});

// ─── Genericity (BLOCKING) ───────────────────────────────────────────────────

describe("D-GF-ACW-01 genericity (BAR-WORK-39..45)", () => {
  it("BAR-WORK-39: Cadrage vertical — scripted Observations via Fake orchestrate path", async () => {
    const s = await seedStarted("gen39", { targetCycleTypeId: "cyc:framing" });
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);

    const provider = new FakeConversationProvider({
      scripted: [JSON.stringify(acwTurn(MVP_OBS, "Cadrage MVP observations."))],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "Observe les tâches MVP pour le cadrage.",
      sessionDbPath: tempDbPath("gen39-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed.context,
      turnCorrelationId: "cor:acw-gen-39",
    });
    expect(result.ok).toBe(true);
    const acw = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    expect(acw.some((e) => e.type === "Observation")).toBe(true);
  });

  it("BAR-WORK-40: second representative cycle (technical-architecture) prepare/start + ACW", async () => {
    const types = listCycleTypes();
    const arch =
      types.find((t) => t.cycleTypeId === "cyc:technical-architecture") ??
      types.find(
        (t) =>
          t.cycleTypeId !== "cyc:framing" &&
          t.lifecycleStatus === "active",
      );
    expect(arch).toBeTruthy();
    const s = await seedStarted("gen40", {
      targetCycleTypeId: arch!.cycleTypeId,
    });
    expect(s.cycle.cycleTypeId).toBe(arch!.cycleTypeId);
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-gen-40",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, [
        {
          type: "Observation",
          statement: `Observation for ${arch!.cycleTypeId}.`,
          confidence: "medium",
          blocking: false,
        },
      ]),
    );
    expect(mat.ok).toBe(true);
  });

  it("BAR-WORK-41: third evidence/validation-oriented cycle (qa-validation)", async () => {
    const qa = listCycleTypes().find((t) => t.cycleTypeId === "cyc:qa-validation");
    expect(qa).toBeTruthy();
    const s = await seedStarted("gen41", {
      targetCycleTypeId: qa!.cycleTypeId,
    });
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-gen-41",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, [
        {
          type: "Observation",
          statement: "Evidence expectations for QA validation cycle.",
          confidence: "high",
          blocking: false,
        },
      ]),
    );
    expect(mat.ok).toBe(true);
  });

  it("BAR-WORK-42/43: catalog-wide CKC loader path; no cycle-specific branch in activeCycleCognitiveContext", () => {
    expect(fs.existsSync(FIXTURES)).toBe(true);
    expect(fs.existsSync(PRODUCT_REGISTRY)).toBe(true);
    const catalog = listCycleTypes();
    expect(catalog.length).toBeGreaterThan(0);
    // Must not hardcode === 15
    expect(catalog.length).not.toBe(0);

    const resolved: string[] = [];
    const unresolved: string[] = [];
    for (const entry of catalog) {
      const content = loadProductCkcCognitiveContent({
        // Product doctrine registry (DEFAULT pin) — FIXTURES pin is pkg:studio-v3-oa
        // and does not host the product CKC cognitive index.
        registryRoot: PRODUCT_REGISTRY,
        cycleTypeId: entry.cycleTypeId,
        packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      });
      if (content) resolved.push(entry.cycleTypeId);
      else unresolved.push(entry.cycleTypeId);
    }
    expect(
      resolved.length + unresolved.length,
      `catalog=${catalog.length} resolved=${resolved.length} unresolved=[${unresolved.join(",")}]`,
    ).toBe(catalog.length);
    expect(
      resolved.length,
      `expected some CKC resolutions; unresolved=[${unresolved.join(",")}]`,
    ).toBeGreaterThan(0);

    const acwSrc = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/f2/activeCycleCognitiveContext.ts",
      ),
      "utf8",
    );
    expect(acwSrc).not.toContain("cyc:framing");
    expect(acwSrc).not.toMatch(/switch\s*\(\s*cycleTypeId\s*\)/);
  });

  it("BAR-WORK-44: cycleTypeId remains authority — getCycleTypeById by id not label", () => {
    const framing = getCycleTypeById("cyc:framing");
    expect(framing?.label).toBe("Cadrage");
    expect(getCycleTypeById("Cadrage")).toBeUndefined();
    expect(getCycleTypeById("cadrage")).toBeUndefined();
  });

  it("BAR-WORK-45: activeCycleCognitiveContext / studioCognitiveContext must not import sfia-fast-track", () => {
    for (const rel of [
      "features/project-assistant/f2/activeCycleCognitiveContext.ts",
      "features/project-assistant/f2/studioCognitiveContext.ts",
    ]) {
      const src = fs.readFileSync(path.join(APP_ROOT, rel), "utf8");
      expect(src).not.toMatch(/sfia-fast-track/);
      expect(src).not.toMatch(/from\s+["'][^"']*method\/sfia/);
    }
  });
});

// ─── Regressions smoke ───────────────────────────────────────────────────────

describe("D-GF-ACW-01 regressions smoke (BAR-WORK-46..50)", () => {
  it("BAR-WORK-46: applyPreCycleRoutingBoundaryCoherence still works for READY_TO_EMIT", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Ready.",
      preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      lifecycleRecommendation: nextCycleLr("cyc:framing", "Cadrage."),
    });
    expect(coherent.disposition).toBe("EMIT_LIFECYCLE_RECOMMENDATION");
    expect(coherent.boundaryContradiction).toBeNull();
  });

  it("BAR-WORK-47: classifyTrajectoryBinding COMPLETE after start", async () => {
    const s = await seedStarted("reg47");
    expect(classifyTrajectoryBinding(s.cycle)).toBe("COMPLETE_TRAJECTORY_BOUND");
  });

  it("BAR-WORK-48: orchestrateTurn Fake path readable / exports", async () => {
    expect(typeof orchestrateProjectAssistantTurn).toBe("function");
    const s = await seedStarted("reg48");
    const provider = new FakeConversationProvider({
      scripted: [
        JSON.stringify(
          acwTurn(
            [
              {
                type: "Observation",
                statement: "Smoke observation.",
                confidence: null,
                blocking: null,
              },
            ],
            "Smoke.",
          ),
        ),
      ],
    });
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    const result = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "smoke",
      sessionDbPath: tempDbPath("reg48-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed.context,
      turnCorrelationId: "cor:acw-reg-48",
    });
    expect(result.ok).toBe(true);
  });

  it("BAR-WORK-49: materializeActiveCycleWork must not import prepareM3FromDecision / f3", () => {
    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/materializeActiveCycleWork.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/prepareM3FromDecision/);
    expect(src).not.toMatch(/\/f3\b|features\/project-assistant\/f3/);
  });

  it("BAR-WORK-50: restart parity covered via reopen compose (smoke)", async () => {
    const dbPath = tempDbPath("reg50.sqlite");
    const s = await seedStarted("reg50", { dbPath });
    const reopened = await reopenRuntime("reg50", dbPath);
    const cycle = await reopened.oa!.cycleServices.cycles.findById(
      s.cycle.cycleInstanceId,
    );
    expect(cycle?.status).toBe("active");
    const lps = await reopened.oa!.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    expect(lps.ok && lps.livingProjectState.activeCycleInstanceId).toBe(
      s.cycle.cycleInstanceId,
    );
  });
});
