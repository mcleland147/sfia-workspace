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
  isTargetCycleCurrentlySelectable,
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
  STUDIO_COGNITIVE_CONTEXT_BUDGET,
} from "@/features/project-assistant/f2/studioCognitiveContext";
import { loadProductCkcCognitiveContent } from "@/features/project-assistant/f2/ckcCognitiveContext";
import {
  materializeActiveCycleWork,
  activeCycleWorkEpistemicItemId,
  ACTIVE_CYCLE_WORK_SOURCE,
} from "@/features/project-assistant/materializeActiveCycleWork";
import {
  buildActiveCycleWorkContextSeal,
  type ActiveCycleWorkContextSeal,
} from "@/features/project-assistant/f2/activeCycleCognitiveContext";
import {
  resolveOrMintLogicalProductTurn,
  createTurnRetryKey,
  preparePendingTurnRetryEnvelope,
  serializeCanonicalTurnPayload,
  canonicalTurnPayloadDigest,
} from "@/features/project-assistant/logicalProductTurn";
import type { ProviderChatMessage } from "@/lib/platform/ai";
import { ProductSqliteSession } from "@/lib/nora-cognitive-runtime/productSqliteSession";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { EpistemicItem } from "@/lib/oa/cycle";
import type { EpistemicRepositoryPort } from "@/lib/oa/cycle/ports/epistemicRepository";

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
  sealOverride?: ActiveCycleWorkContextSeal,
) {
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const existingItems = await oa.cycleServices.epistemic.listByProject(projectId);
  const cycleLoad = await oa.cycleServices.getCycle.execute({ cycleInstanceId });
  if (!cycleLoad.ok) throw new Error("cycle missing");
  const cycle = cycleLoad.cycle;
  const contextSeal =
    sealOverride ??
    Object.freeze({
      projectId,
      cycleInstanceId: cycle.cycleInstanceId,
      cycleTypeId: cycle.cycleTypeId,
      profile: cycle.profile,
      status: "active" as const,
      trajectoryId: cycle.trajectoryId?.trim() || null,
      trajectoryVersion:
        typeof cycle.trajectoryVersion === "number"
          ? cycle.trajectoryVersion
          : null,
      trajectoryStepId: cycle.trajectoryStepId?.trim() || null,
      ckcResolutionRef: cycle.ckcResolutionRef?.trim() || null,
    });
  return {
    projectId,
    activeCycleInstanceId: cycleInstanceId,
    lpsVersion: lps.livingProjectState.version,
    lpsObjective: lps.livingProjectState.objective,
    existingEpistemicItemIds: lps.livingProjectState.epistemicItemIds ?? [],
    existingItems,
    turnCorrelationId,
    contextSeal,
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
      // CR-ACW-01 seal compares lps.version first → CONTEXT_STALE; OCC remains valid alt.
      expect([
        "ACTIVE_CYCLE_CONTEXT_STALE",
        "LPS_VERSION_CONFLICT",
        "ACTIVE_CYCLE_WORK_ATOMIC_FAILURE",
      ]).toContain(mat.code);
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
    // CR-ACW-01 seal catches LPS pointer drift as CONTEXT_STALE before pointer-specific code.
    if (!mat.ok) {
      expect([
        "ACTIVE_CYCLE_CONTEXT_STALE",
        "ACTIVE_CYCLE_LPS_POINTER_STALE",
      ]).toContain(mat.code);
    }
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

// ─── CR-ACW-01 context seal ──────────────────────────────────────────────────

describe("CR-ACW-01 context seal (ACW-CORR-01A..H)", () => {
  async function sealFromStarted(
    s: Awaited<ReturnType<typeof seedStarted>>,
  ): Promise<ActiveCycleWorkContextSeal> {
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "ltu:seal-base",
    );
    return facts.contextSeal;
  }

  it("ACW-CORR-01A: seal cycleInstanceId drift → ACTIVE_CYCLE_CONTEXT_STALE", async () => {
    const s = await seedStarted("corr01a");
    const seal = await sealFromStarted(s);
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "ltu:corr01a",
      { ...seal, cycleInstanceId: "cycinst:forged-other" },
    );
    // facts.activeCycleInstanceId still points at real cycle; seal id forged.
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, {
        ...facts,
        activeCycleInstanceId: s.cycle.cycleInstanceId,
      }, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(false);
    if (mat.ok) throw new Error("expected fail");
    expect(mat.code).toBe("ACTIVE_CYCLE_CONTEXT_STALE");
  });

  it("ACW-CORR-01B: seal cycleTypeId drift → STALE", async () => {
    const s = await seedStarted("corr01b");
    const seal = await sealFromStarted(s);
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "ltu:corr01b",
      { ...seal, cycleTypeId: "cyc:delivery" },
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(false);
    if (mat.ok) throw new Error("expected fail");
    expect(mat.code).toBe("ACTIVE_CYCLE_CONTEXT_STALE");
    expect(mat.reason).toContain("cycleTypeId");
  });

  it("ACW-CORR-01C: seal trajectoryId drift → STALE", async () => {
    const s = await seedStarted("corr01c");
    const seal = await sealFromStarted(s);
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "ltu:corr01c",
      { ...seal, trajectoryId: "trj:forged" },
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(false);
    if (mat.ok) throw new Error("expected fail");
    expect(mat.code).toBe("ACTIVE_CYCLE_CONTEXT_STALE");
    expect(mat.reason).toContain("trajectoryId");
  });

  it("ACW-CORR-01D: seal ckcResolutionRef drift → STALE", async () => {
    const s = await seedStarted("corr01d");
    const seal = await sealFromStarted(s);
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "ltu:corr01d",
      { ...seal, ckcResolutionRef: "ckc-res:forged" },
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(false);
    if (mat.ok) throw new Error("expected fail");
    expect(mat.code).toBe("ACTIVE_CYCLE_CONTEXT_STALE");
    expect(mat.reason).toContain("ckcResolutionRef");
  });

  it("ACW-CORR-01E: seal lps.version drift → STALE (zero writes)", async () => {
    const s = await seedStarted("corr01e");
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "ltu:corr01e",
    );
    const before = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, { ...facts, lpsVersion: facts.lpsVersion + 99 }, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(false);
    if (mat.ok) throw new Error("expected fail");
    expect(mat.code).toBe("ACTIVE_CYCLE_CONTEXT_STALE");
    expect(mat.reason).toContain("lps.version");
    const after = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    expect(after.length).toBe(before.length);
  });

  it("ACW-CORR-01F: matching seal → materialize success", async () => {
    const s = await seedStarted("corr01f");
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "ltu:corr01f",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 2)),
    );
    expect(mat.ok).toBe(true);
    if (!mat.ok) throw new Error(mat.reason);
    expect(mat.createdIds.length).toBe(2);
  });

  it("ACW-CORR-01G: ACW emit without studio activeCycle → ACTIVE_CYCLE_CONTEXT_REQUIRED", async () => {
    const s = await seedStarted("corr01g");
    const provider = new FakeConversationProvider({
      scripted: [JSON.stringify(acwTurn(MVP_OBS.slice(0, 1), "No studio."))],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "observe",
      sessionDbPath: tempDbPath("corr01g-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: null,
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("ACTIVE_CYCLE_CONTEXT_REQUIRED");
    expect(result.logicalTurnId).toMatch(/^ltu:/);
  });

  it("ACW-CORR-01H: buildActiveCycleWorkContextSeal null when not workEligible", async () => {
    const s = await seedStarted("corr01h");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    const sealOk = buildActiveCycleWorkContextSeal({
      projectId: s.projectId,
      activeCycle: composed.context.activeCycle,
    });
    expect(sealOk).not.toBeNull();
    expect(sealOk!.status).toBe("active");
    const sealBad = buildActiveCycleWorkContextSeal({
      projectId: s.projectId,
      activeCycle: composed.context.activeCycle
        ? { ...composed.context.activeCycle, workEligible: false, status: "paused" }
        : null,
    });
    expect(sealBad).toBeNull();
  });
});

// ─── CR-ACW-02 logical Product turn ──────────────────────────────────────────

describe("CR-ACW-02 logical Product turn (ACW-CORR-02A..F)", () => {
  it("ACW-CORR-02A: default path mints durable logicalTurnId (ltu:) via Session", async () => {
    const s = await seedStarted("corr02a");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    const sessionDbPath = tempDbPath("corr02a-sess.sqlite");
    const result = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "Observations MVP",
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({
        scripted: [JSON.stringify(acwTurn(MVP_OBS.slice(0, 1)))],
      }),
      studioCognitiveContext: composed.context,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.message);
    expect(result.logicalTurnId).toMatch(/^ltu:[0-9a-f]+$/);
    const session = new ProductSqliteSession({
      projectId: s.projectId,
      dbPath: sessionDbPath,
      sessionKey: "f1-default",
    });
    try {
      const row = session.getLogicalProductTurn(result.logicalTurnId!);
      expect(row).not.toBeNull();
      expect(row!.logicalTurnId).toBe(result.logicalTurnId);
    } finally {
      session.close();
    }
  });

  it("ACW-CORR-02B: same logicalTurnId rematerialize → no duplicate items", async () => {
    const s = await seedStarted("corr02b");
    const sessionDbPath = tempDbPath("corr02b-sess.sqlite");
    const minted = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      cycleInstanceId: s.cycle.cycleInstanceId,
    });
    expect(minted.ok).toBe(true);
    if (!minted.ok) throw new Error(minted.reason);
    const facts1 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      minted.logicalTurnId,
    );
    const first = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts1, MVP_OBS.slice(0, 2)),
    );
    expect(first.ok).toBe(true);
    if (!first.ok) throw new Error(first.reason);
    const facts2 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      minted.logicalTurnId,
    );
    const second = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts2, MVP_OBS.slice(0, 2)),
    );
    expect(second.ok).toBe(true);
    if (!second.ok) throw new Error(second.reason);
    expect(second.idempotent).toBe(true);
    expect(second.createdIds).toHaveLength(0);
    expect(second.reusedIds).toEqual(first.createdIds);
  });

  it("ACW-CORR-02C: reopen Session DB → same logicalTurnId reconstructible + idempotent", async () => {
    const s = await seedStarted("corr02c");
    const sessionDbPath = tempDbPath("corr02c-sess.sqlite");
    const minted = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      cycleInstanceId: s.cycle.cycleInstanceId,
    });
    expect(minted.ok).toBe(true);
    if (!minted.ok) throw new Error(minted.reason);
    const facts1 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      minted.logicalTurnId,
    );
    const first = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts1, MVP_OBS.slice(0, 1)),
    );
    expect(first.ok).toBe(true);

    const reopened = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      presentedLogicalTurnId: minted.logicalTurnId,
      cycleInstanceId: s.cycle.cycleInstanceId,
    });
    expect(reopened.ok).toBe(true);
    if (!reopened.ok) throw new Error(reopened.reason);
    expect(reopened.logicalTurnId).toBe(minted.logicalTurnId);
    expect(reopened.minted).toBe(false);

    const facts2 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      reopened.logicalTurnId,
    );
    const second = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts2, MVP_OBS.slice(0, 1)),
    );
    expect(second.ok).toBe(true);
    if (!second.ok) throw new Error(second.reason);
    expect(second.idempotent).toBe(true);
  });

  it("ACW-CORR-02D: two new turns same user text → two distinct logicalTurnIds", async () => {
    const s = await seedStarted("corr02d");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    const sessionDbPath = tempDbPath("corr02d-sess.sqlite");
    const payload = JSON.stringify(acwTurn(MVP_OBS.slice(0, 1), "Same text."));
    const r1 = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "same user text",
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: [payload] }),
      studioCognitiveContext: composed.context,
    });
    const dto2 = await projectDtoFromOa(s.oa, s.projectId);
    const composed2 = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto2,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed2.ok).toBe(true);
    if (!composed2.ok) throw new Error(composed2.code);
    const r2 = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "same user text",
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: [payload] }),
      studioCognitiveContext: composed2.context,
    });
    expect(r1.ok && r2.ok).toBe(true);
    if (!r1.ok || !r2.ok) throw new Error("expected ok");
    expect(r1.logicalTurnId).toMatch(/^ltu:/);
    expect(r2.logicalTurnId).toMatch(/^ltu:/);
    expect(r1.logicalTurnId).not.toBe(r2.logicalTurnId);
  });

  it("ACW-CORR-02E: same logicalTurnId + changed material → IDEM_CONFLICT", async () => {
    const s = await seedStarted("corr02e");
    const corr = "ltu:corr02e-fixed";
    const sessionDbPath = tempDbPath("corr02e-sess.sqlite");
    const session = new ProductSqliteSession({
      projectId: s.projectId,
      dbPath: sessionDbPath,
      sessionKey: "f1-default",
    });
    try {
      session.ensureLogicalTurnSchema();
      session.getSqlite()
        .prepare(
          `INSERT INTO logical_product_turns(
             project_id, session_key, logical_turn_id, status, created_at, cycle_instance_id
           ) VALUES (?, ?, ?, ?, ?, ?)`,
        )
        .run(
          s.projectId,
          "f1-default",
          corr,
          "accepted",
          "2026-09-10T10:00:00.000Z",
          s.cycle.cycleInstanceId,
        );
    } finally {
      session.close();
    }
    const facts1 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      corr,
    );
    const first = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts1, [
        {
          type: "Observation",
          statement: "Original statement for conflict test.",
          confidence: "high",
          blocking: false,
        },
      ]),
    );
    expect(first.ok).toBe(true);
    const facts2 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      corr,
    );
    // Same id formula uses statement digest — different statement → different id,
    // so force conflict via same index+type but mutate after creating same id path:
    // Use identical type/index/statement digest key by using same statement text
    // is impossible for conflict. Instead reuse first item id material via
    // different confidence on same statement (parity check).
    const conflict = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts2, [
        {
          type: "Observation",
          statement: "Original statement for conflict test.",
          confidence: "low",
          blocking: false,
        },
      ]),
    );
    expect(conflict.ok).toBe(false);
    if (conflict.ok) throw new Error("expected conflict");
    expect(conflict.code).toBe("ACTIVE_CYCLE_WORK_IDEM_CONFLICT");
  });

  it("ACW-CORR-02F: client-invented logicalTurnId → LOGICAL_TURN_UNKNOWN", async () => {
    const s = await seedStarted("corr02f");
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
      content: "hi",
      sessionDbPath: tempDbPath("corr02f-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({
        scripted: [JSON.stringify(acwTurn(MVP_OBS.slice(0, 1)))],
      }),
      studioCognitiveContext: composed.context,
      logicalTurnId: "ltu:client-invented-deadbeef",
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("LOGICAL_TURN_UNKNOWN");
  });

  it("ACW-CORR-02G: silent response-loss + retry key recovers same ltu (no client ltu)", async () => {
    const s = await seedStarted("corr02g");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);

    // Client allocates opaque retry key BEFORE transport (never Product identity).
    const turnRetryKey = createTurnRetryKey();
    expect(turnRetryKey).toMatch(/^trk:/);
    const sessionDbPath = tempDbPath("corr02g-sess.sqlite");
    const userText = "Observations MVP after silent loss";
    const payload = JSON.stringify(acwTurn(MVP_OBS.slice(0, 1), "Silent loss."));
    const provider = new FakeConversationProvider({
      scripted: [payload, payload],
    });

    const first = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: userText,
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed.context,
      turnRetryKey,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) throw new Error(first.message);
    // Harness observes server-issued id for assertion only — NOT passed to retry.
    const serverOwnedLtu = first.logicalTurnId!;
    expect(serverOwnedLtu).toMatch(/^ltu:/);
    const epiAfterFirst = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    expect(epiAfterFirst.length).toBe(1);

    // Silent loss: client retains only turnRetryKey (no logicalTurnId).
    const dto2 = await projectDtoFromOa(s.oa, s.projectId);
    const composed2 = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto2,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed2.ok).toBe(true);
    if (!composed2.ok) throw new Error(composed2.code);

    const retry = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: userText,
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed2.context,
      turnRetryKey,
      // intentional: no logicalTurnId — simulates total response loss
    });
    expect(retry.ok).toBe(true);
    if (!retry.ok) throw new Error(retry.message);
    expect(retry.logicalTurnId).toBe(serverOwnedLtu);
    // Cognition may re-run; Product ACW materialization remains exactly-once.
    expect(provider.getCallCountForTests()).toBe(2);
    const epiAfterRetry = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    expect(epiAfterRetry.length).toBe(1);
    expect(epiAfterRetry.map((e) => e.epistemicItemId).sort()).toEqual(
      epiAfterFirst.map((e) => e.epistemicItemId).sort(),
    );
  });

  it("ACW-CORR-02H: process restart — retry key still resolves same ltu", async () => {
    const s = await seedStarted("corr02h");
    const sessionDbPath = tempDbPath("corr02h-sess.sqlite");
    const turnRetryKey = createTurnRetryKey();
    const content = "restart durable binding";
    const first = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      turnRetryKey,
      content,
      cycleInstanceId: s.cycle.cycleInstanceId,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) throw new Error(first.reason);
    expect(first.minted).toBe(true);

    const recovered = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      turnRetryKey,
      content,
      cycleInstanceId: s.cycle.cycleInstanceId,
    });
    expect(recovered.ok).toBe(true);
    if (!recovered.ok) throw new Error(recovered.reason);
    expect(recovered.minted).toBe(false);
    expect(recovered.recoveredViaRetryKey).toBe(true);
    expect(recovered.logicalTurnId).toBe(first.logicalTurnId);
  });

  it("ACW-CORR-02I: identical text + new retry key → distinct ltu", async () => {
    const s = await seedStarted("corr02i");
    const sessionDbPath = tempDbPath("corr02i-sess.sqlite");
    const content = "same user text deliberate new submit";
    const k1 = createTurnRetryKey();
    const k2 = createTurnRetryKey();
    expect(k1).not.toBe(k2);
    const a = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      turnRetryKey: k1,
      content,
    });
    const b = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      turnRetryKey: k2,
      content,
    });
    expect(a.ok && b.ok).toBe(true);
    if (!a.ok || !b.ok) throw new Error("expected ok");
    expect(a.logicalTurnId).not.toBe(b.logicalTurnId);
  });

  it("ACW-CORR-02J: same retry key + different payload → LOGICAL_TURN_RETRY_CONFLICT", async () => {
    const s = await seedStarted("corr02j");
    const sessionDbPath = tempDbPath("corr02j-sess.sqlite");
    const turnRetryKey = createTurnRetryKey();
    const first = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      turnRetryKey,
      content: "original submission",
    });
    expect(first.ok).toBe(true);
    const conflict = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      turnRetryKey,
      content: "materially different submission",
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) throw new Error("expected conflict");
    expect(conflict.code).toBe("LOGICAL_TURN_RETRY_CONFLICT");
  });

  it("ACW-CORR-02K: stable retry envelope — same history+content recovers same ltu; no user dup", async () => {
    const s = await seedStarted("corr02k");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);

    const historyH = [
      { role: "user" as const, content: "prior context alpha" },
      { role: "assistant" as const, content: "prior reply beta" },
    ];
    const contentC = "Observations MVP stable envelope";
    const turnRetryKey = createTurnRetryKey();
    const envelope = preparePendingTurnRetryEnvelope({
      content: contentC,
      history: historyH,
      turnRetryKey,
    });
    expect(envelope.history).toEqual(historyH);
    expect(envelope.content).toBe(contentC);

    const sessionDbPath = tempDbPath("corr02k-sess.sqlite");
    const payload = JSON.stringify(acwTurn(MVP_OBS.slice(0, 1), "Envelope."));
    const recorded: ProviderChatMessage[][] = [];
    class RecordingFake extends FakeConversationProvider {
      override async complete(messages: ProviderChatMessage[]) {
        recorded.push(messages.map((m) => ({ ...m })));
        return super.complete(messages);
      }
      override async completeStructured(input: {
        messages: ProviderChatMessage[];
        schemaName: string;
        jsonSchema: Record<string, unknown>;
      }) {
        recorded.push(input.messages.map((m) => ({ ...m })));
        return super.completeStructured(input);
      }
    }
    const provider = new RecordingFake({ scripted: [payload, payload] });

    const first = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: envelope.content,
      history: [...envelope.history],
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed.context,
      turnRetryKey: envelope.turnRetryKey,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) throw new Error(first.message);
    const ltu = first.logicalTurnId!;

    const dto2 = await projectDtoFromOa(s.oa, s.projectId);
    const composed2 = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto2,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed2.ok).toBe(true);
    if (!composed2.ok) throw new Error(composed2.code);

    const retry = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: envelope.content,
      history: [...envelope.history],
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed2.context,
      turnRetryKey: envelope.turnRetryKey,
    });
    expect(retry.ok).toBe(true);
    if (!retry.ok) throw new Error(retry.message);
    expect(retry.logicalTurnId).toBe(ltu);
    expect(provider.getCallCountForTests()).toBe(2);

    expect(recorded.length).toBeGreaterThanOrEqual(2);
    const userRoles = (msgs: ProviderChatMessage[]) =>
      msgs.filter((m) => m.role === "user").map((m) => m.content);
    // Same logical user content once per call — not duplicated from history.
    expect(userRoles(recorded[0]!).filter((c) => c === contentC)).toHaveLength(1);
    expect(userRoles(recorded[1]!).filter((c) => c === contentC)).toHaveLength(1);
    expect(serializeCanonicalTurnPayload(envelope.content, envelope.history)).toBe(
      serializeCanonicalTurnPayload(contentC, historyH),
    );

    const epi = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    expect(epi).toHaveLength(1);
  });

  it("ACW-CORR-02L: same K + same content + different history → CONFLICT before provider", async () => {
    const s = await seedStarted("corr02l");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);

    const turnRetryKey = createTurnRetryKey();
    const content = "same content different history";
    const historyA = [{ role: "user" as const, content: "history A only" }];
    const historyB = [{ role: "user" as const, content: "history B only" }];
    expect(canonicalTurnPayloadDigest(content, historyA)).not.toBe(
      canonicalTurnPayloadDigest(content, historyB),
    );

    const sessionDbPath = tempDbPath("corr02l-sess.sqlite");
    const payload = JSON.stringify(acwTurn(MVP_OBS.slice(0, 1)));
    const provider = new FakeConversationProvider({ scripted: [payload] });

    const first = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content,
      history: historyA,
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed.context,
      turnRetryKey,
    });
    expect(first.ok).toBe(true);
    const callsAfterFirst = provider.getCallCountForTests();

    const conflict = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content,
      history: historyB,
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed.context,
      turnRetryKey,
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) throw new Error("expected conflict");
    expect(conflict.code).toBe("LOGICAL_TURN_RETRY_CONFLICT");
    expect(provider.getCallCountForTests()).toBe(callsAfterFirst);

    const epi = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    expect(epi).toHaveLength(1);
  });

  it("ACW-CORR-02M: same K under different active cycle → CONFLICT; no ACW on B", async () => {
    const s = await seedStarted("corr02m");
    const sessionDbPath = tempDbPath("corr02m-sess.sqlite");
    const turnRetryKey = createTurnRetryKey();
    const content = "cycle binding probe";
    const history = [{ role: "user" as const, content: "h0" }];
    const cycleA = s.cycle.cycleInstanceId;
    const cycleB = "cycinst:other-active-cycle-b";

    const first = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      turnRetryKey,
      content,
      history,
      cycleInstanceId: cycleA,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) throw new Error(first.reason);

    const conflict = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      turnRetryKey,
      content,
      history,
      cycleInstanceId: cycleB,
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) throw new Error("expected cycle conflict");
    expect(conflict.code).toBe("LOGICAL_TURN_RETRY_CONFLICT");
    expect(conflict.reason).toMatch(/retry_cycle_mismatch/);

    // Orchestrate path: accept under A then retry under forged B context.
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    const k2 = createTurnRetryKey();
    const payload = JSON.stringify(acwTurn(MVP_OBS.slice(0, 1)));
    const provider = new FakeConversationProvider({ scripted: [payload] });
    const sessionDbPath2 = tempDbPath("corr02m-orch.sqlite");
    const r1 = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "orch cycle probe",
      history,
      sessionDbPath: sessionDbPath2,
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed.context,
      turnRetryKey: k2,
    });
    expect(r1.ok).toBe(true);
    const epiA = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    const idsA = new Set(epiA.map((e) => e.epistemicItemId));

    const forgedB = {
      ...composed.context,
      activeCycle: {
        ...composed.context.activeCycle!,
        cycleInstanceId: cycleB,
      },
    };
    const r2 = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "orch cycle probe",
      history,
      sessionDbPath: sessionDbPath2,
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: forgedB,
      turnRetryKey: k2,
    });
    expect(r2.ok).toBe(false);
    if (r2.ok) throw new Error("expected conflict");
    expect(r2.code).toBe("LOGICAL_TURN_RETRY_CONFLICT");
    const epiAfter = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    expect(epiAfter.every((e) => idsA.has(e.epistemicItemId))).toBe(true);
    expect(epiAfter.some((e) => e.relatedObjects?.includes(cycleB))).toBe(false);
  });

  it("ACW-CORR-02N: LPS bump same-cycle replay remains valid (not conflicted by lpsVersion)", async () => {
    const s = await seedStarted("corr02n");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);

    const turnRetryKey = createTurnRetryKey();
    const content = "lps bump same cycle";
    const history = [{ role: "assistant" as const, content: "prior" }];
    const sessionDbPath = tempDbPath("corr02n-sess.sqlite");
    const payload = JSON.stringify(acwTurn(MVP_OBS.slice(0, 1)));
    const provider = new FakeConversationProvider({ scripted: [payload, payload] });

    const lpsBefore = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    expect(lpsBefore.ok).toBe(true);
    if (!lpsBefore.ok) throw new Error("lps");

    const first = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content,
      history,
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed.context,
      turnRetryKey,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) throw new Error(first.message);

    const lpsAfter = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) throw new Error("lps after");
    expect(lpsAfter.livingProjectState.version).toBeGreaterThan(
      lpsBefore.livingProjectState.version,
    );

    const dto2 = await projectDtoFromOa(s.oa, s.projectId);
    expect(dto2.lpsVersion).toBe(lpsAfter.livingProjectState.version);
    const composed2 = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto2,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed2.ok).toBe(true);
    if (!composed2.ok) throw new Error(composed2.code);
    expect(composed2.context.activeCycle?.cycleInstanceId).toBe(
      s.cycle.cycleInstanceId,
    );

    const retry = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content,
      history,
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed2.context,
      turnRetryKey,
    });
    expect(retry.ok).toBe(true);
    if (!retry.ok) throw new Error(retry.message);
    expect(retry.logicalTurnId).toBe(first.logicalTurnId);

    const epi = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    expect(epi).toHaveLength(1);
  });

  it("ACW-CORR-02O: deliberate new submit same content/history + new K → new ltu", async () => {
    const s = await seedStarted("corr02o");
    const sessionDbPath = tempDbPath("corr02o-sess.sqlite");
    const content = "deliberate new submit";
    const history = [{ role: "user" as const, content: "shared prior" }];
    const env1 = preparePendingTurnRetryEnvelope({
      content,
      history,
      turnRetryKey: createTurnRetryKey(),
    });
    const env2 = preparePendingTurnRetryEnvelope({
      content,
      history,
      turnRetryKey: createTurnRetryKey(),
    });
    expect(env1.turnRetryKey).not.toBe(env2.turnRetryKey);
    expect(serializeCanonicalTurnPayload(env1.content, env1.history)).toBe(
      serializeCanonicalTurnPayload(env2.content, env2.history),
    );

    const a = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      turnRetryKey: env1.turnRetryKey,
      content: env1.content,
      history: env1.history,
      cycleInstanceId: s.cycle.cycleInstanceId,
    });
    const b = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      turnRetryKey: env2.turnRetryKey,
      content: env2.content,
      history: env2.history,
      cycleInstanceId: s.cycle.cycleInstanceId,
    });
    expect(a.ok && b.ok).toBe(true);
    if (!a.ok || !b.ok) throw new Error("expected ok");
    expect(a.logicalTurnId).not.toBe(b.logicalTurnId);
  });
});

// ─── CR-ACW-03 newest-N ──────────────────────────────────────────────────────

describe("CR-ACW-03 newest-N prompt budget (ACW-CORR-03A..D)", () => {
  it("ACW-CORR-03A/B/C/D: >budget items → newest retained, oldest evicted, chronological ASC, restart parity", async () => {
    const budget = STUDIO_COGNITIVE_CONTEXT_BUDGET.maxActiveCycleWorkItems;
    const total = budget + 3;
    const dbPath = tempDbPath("corr03.sqlite");
    const s = await seedStarted("corr03", { dbPath });

    for (let i = 0; i < total; i += 1) {
      const facts = await materializeFacts(
        s.oa,
        s.projectId,
        s.cycle.cycleInstanceId,
        `ltu:corr03-${String(i).padStart(2, "0")}`,
      );
      const mat = await materializeActiveCycleWork({
        ...acwMaterializeInput(s.oa, facts, [
          {
            type: "Observation",
            statement: `ACW newest-N item ${String(i).padStart(2, "0")}`,
            confidence: "medium",
            blocking: false,
          },
        ]),
        producedAt: `2026-09-10T10:${String(i).padStart(2, "0")}:00.000Z`,
      });
      expect(mat.ok).toBe(true);
      if (!mat.ok) throw new Error(mat.reason);
      // Runtime clock is fixed — patch durable createdAt so newest-N sort is observable.
      // Note: EpistemicRepositoryPort.save() is a no-op; Product SQLite uses saveForProject.
      const written = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
      const epistemicStore = s.oa.cycleServices.epistemic as EpistemicRepositoryPort & {
        saveForProject: (projectId: string, item: EpistemicItem) => Promise<void>;
      };
      for (const id of mat.createdIds) {
        const item = written.find((e) => e.epistemicItemId === id);
        if (!item) throw new Error(`missing ${id}`);
        await epistemicStore.saveForProject(s.projectId, {
          ...item,
          createdAt: `2026-09-10T10:${String(i).padStart(2, "0")}:00.000Z`,
        });
      }
    }

    const all = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    expect(all.length).toBe(total);

    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    expect(composed.context.activeCycleWorkItems.state).toBe("PRESENT");
    const items = composed.context.activeCycleWorkItems.items;
    expect(items.length).toBe(budget);
    // Oldest of retained should be index 3 (0..2 evicted); chronological ASC.
    expect(items[0]!.statement).toContain(
      `item ${String(3).padStart(2, "0")}`,
    );
    expect(items[items.length - 1]!.statement).toContain(
      `item ${String(total - 1).padStart(2, "0")}`,
    );
    for (let i = 1; i < items.length; i += 1) {
      expect(items[i]!.statement > items[i - 1]!.statement).toBe(true);
    }
    // Global epistemic repository order unchanged (still has all items).
    expect(all.length).toBe(total);

    const reopened = await reopenRuntime("corr03", dbPath);
    const dto2 = await projectDtoFromOa(reopened.oa!, s.projectId);
    const composed2 = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto2,
      registryRoot: PRODUCT_REGISTRY,
      oa: reopened.oa!,
    });
    expect(composed2.ok).toBe(true);
    if (!composed2.ok) throw new Error(composed2.code);
    expect(composed2.context.activeCycleWorkItems.items.map((i) => i.statement)).toEqual(
      items.map((i) => i.statement),
    );
  });
});

// ─── CR-ACW-04 catalog-wide proof ────────────────────────────────────────────

describe("CR-ACW-04 catalog-wide active-cycle cognitive context", () => {
  it("for each selectable cycle type: START → compose workEligible + CKC + no unresolved", async () => {
    const selectable = listCycleTypes().filter(
      (t) =>
        t.lifecycleStatus === "active" &&
        isTargetCycleCurrentlySelectable(t.cycleTypeId),
    );
    expect(selectable.length).toBeGreaterThan(0);
    // Do NOT hardcode catalog length === 15
    expect(selectable.length).not.toBe(0);

    const unresolved: string[] = [];
    for (const entry of selectable) {
      const suffix = entry.cycleTypeId.replace(/[^a-z0-9]+/gi, "").slice(-8);
      const s = await seedStarted(`c4-${suffix}`, {
        targetCycleTypeId: entry.cycleTypeId,
      });
      expect(s.cycle.cycleTypeId).toBe(entry.cycleTypeId);
      const dto = await projectDtoFromOa(s.oa, s.projectId);
      const composed = await composeStudioCognitiveContext({
        analysis: analysisStub({ intentClass: "informative", parseOk: true }),
        project: dto,
        registryRoot: PRODUCT_REGISTRY,
        oa: s.oa,
      });
      if (!composed.ok) {
        unresolved.push(`${entry.cycleTypeId}:${composed.code}`);
        continue;
      }
      const ac = composed.context.activeCycle;
      if (!ac) {
        unresolved.push(`${entry.cycleTypeId}:missing_activeCycle`);
        continue;
      }
      expect(ac.cycleTypeId).toBe(entry.cycleTypeId);
      expect(ac.workEligible).toBe(true);
      expect(ac.trajectoryId).toBeTruthy();
      expect(ac.trajectoryVersion).toEqual(expect.any(Number));
      expect(ac.trajectoryStepId).toBeTruthy();
      expect(ac.ckcResolutionRef).toBeTruthy();
      expect(composed.context.method.activeCycleCkcAuthoritative).toBe(true);
      expect(composed.context.method.ckcLoaded).toBe(true);
    }
    expect(unresolved, `unresolved=[${unresolved.join(",")}]`).toEqual([]);

    const acwSrc = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/f2/activeCycleCognitiveContext.ts",
      ),
      "utf8",
    );
    expect(acwSrc).not.toMatch(/cyc:framing|cyc:delivery|cyc:architecture/);
    expect(acwSrc).not.toMatch(/switch\s*\(\s*cycleTypeId\s*\)/);
    expect(acwSrc).not.toMatch(/if\s*\(\s*cycleTypeId\s*===/);
  });
});
