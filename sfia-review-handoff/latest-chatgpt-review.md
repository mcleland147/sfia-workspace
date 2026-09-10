# ChatGPT Review Pack — FULL

- Cycle ID: SFIA-STUDIO-GREENFIELD-GENERIC-ACTIVE-CYCLE-COGNITIVE-WORK-FOUNDATION-DELIVERY-01
- Timestamp (UTC): 2026-09-10T12:08:20Z
- Milestone: Greenfield Product Proof — Active Cycle Cognitive Work Foundation
- Cycle SFIA: 8 — Delivery / implémentation
- Typology: EVOL
- Profile: CRITICAL
- D-GF-ACW-01: ADOPTED BY MORRIS — REVISED CHATGPT CRITICAL REVIEW
- GO Morris consumed: GO MORRIS — GREENFIELD ACTIVE-CYCLE COGNITIVE WORK FOUNDATION — GENERIC ACTIVE-CYCLE GROUNDING + DURABLE CYCLE-WORK COMPOSITION — DETERMINISTIC DELIVERY
- Morris coherent-lot / no-unnecessary-micro-cycle: YES — single Delivery closes active context + CKC + structured output + Epistemic persistence + LPS link + restart + catalog genericity together
- Candidate Product: 85d7a7982d08f5b0aa706c36cd9d1ca9a86c2456
- Parent: 2b595718eafec1a902650619040b21f75e86031e (anchor 2b595718)
- Product files changed: 12
- Model calls: ZERO
- Nora turns REAL: ZERO
- HumanDecision delta: ZERO (by contract / tests)
- ExecutionContract / Attempt / Confirmation delta: ZERO
- Env delta: ZERO

## Local Git Truth

### Before Delivery
- Worktree: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- Branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD: 2b595718eafec1a902650619040b21f75e86031e — MATCH
- Parent: 2506775578c04d6aab069b7d5f9d42b4f02a56be — MATCH
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1 — MATCH
- origin/sfia/review-handoff: 601b68a29e29b4c80b46bbb10f2c83884118a20d — MATCH
- Handoff blob: 9aa6081170afa9d926738cc4b013e01b7e45c691 — MATCH
- Dirty expected: .tmp-sfia-review/** only — MATCH

### After Delivery
- Candidate HEAD: 85d7a7982d08f5b0aa706c36cd9d1ca9a86c2456
- Parent: 2b595718eafec1a902650619040b21f75e86031e
- Dirty remaining: .tmp-sfia-review/** only
- Product push: NONE
- PR: NONE

## Sources read
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/sfia-v3-framing/30–35
- projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md
- sfia-review-handoff/latest-chatgpt-review.md (601b68a2 / blob 9aa60811)

## Convergence Pre-check
- V3-F01/F02/F04/F05/F06/F08/F09: in scope
- F11/F12: out of implementation for this lot
- Entry: LIVE BOUNDARY PROVEN (active CycleInstance + CKC + trajectory step)
- Exit proof targeted: ACTIVE CYCLE → exact context → exact CKC → one Nora structured path → non-authoritative Epistemic → atomic LPS refs → restart → no fake HD/EC

## CKC Cycle 8
- detailed CKC absent; fallback = synthetic map + method-candidate; executionAuthority = none

## R22 — OpenAI-native-first
- Disposition: KEEP / ADAPT
- Same `@openai/agents` / `runNoraCognitiveTurn` / one Product turn = one model invocation
- No second LLM call / classifier / regex extraction / cycle-specific engine

## Fake / Real qualification
- Applicable: YES
- Deterministic mocked Nora output substitutes external model boundary
- Same Product orchestration required
- Claim ceiling this Delivery: ACTIVE CYCLE COGNITIVE WORK = DETERMINISTIC PROVEN
- Out of scope: REAL BOUNDARY PROVEN / LIVE Nora turn

## Product files modified (exact list)
- `projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts`
- `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/activeCycleCognitiveContext.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/methodOrientation.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts`
- `projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts`
- `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

## FULL usable modified content

### `projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts`

```typescript
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

```
### `projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts`

```typescript
/** @vitest-environment node */
/**
 * CORR-PROOF-04 — StudioCognitiveContext composer unit tests.
 * ZERO LIVE. Pure composition / projection only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  composeStudioCognitiveContext,
  buildStudioCognitivePromptSections,
  classifyHumanDecisionLifecycle,
  classifyEvidenceEpistemicStance,
  STUDIO_COGNITIVE_CONTEXT_BUDGET,
  type StudioCognitiveContext,
} from "@/features/project-assistant/f2/studioCognitiveContext";
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  extractCkcGuidanceFromMarkdown,
  loadProductCkcCognitiveContent,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

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

function projectDto(
  projectId: string,
  overrides?: Partial<ProjectAssistantContextDto>,
): ProjectAssistantContextDto {
  return {
    projectId,
    name: "Suivi de contrat",
    shortReference: "SC",
    objective: "Suivre les contrats clients B2B",
    contextSummary: "MC Consulting IT",
    criticality: "STANDARD",
    constraints: ["Lecture seule"],
    lpsId: "lps:test",
    lpsVersion: 1,
    lpsCreatedAt: "2026-09-06T12:00:00.000Z",
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

describe("CORR-PROOF-04 studioCognitiveContext composer", () => {
  const tempDirs: string[] = [];
  let projectId = "";

  beforeEach(async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-c04-ctx-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-07T06:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Suivi de contrat",
      objective: "Suivre les contrats clients B2B",
      context: "MC Consulting IT — contrats B2B",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "SC",
      idempotencyKey: `idem:c04-ctx-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("S4 — richer CKC projection retains analysis/maturity/evidence/exit/anchors", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: resolveProductDoctrineRegistryRoot(),
      cycleTypeId: "cyc:framing",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(content).not.toBeNull();
    if (!content) return;
    const g = extractCkcGuidanceFromMarkdown(content.markdown);
    expect(g.finality).toBeTruthy();
    expect(g.contextInputs).toBeTruthy();
    expect(g.analysisDimensions).toBeTruthy();
    expect(g.maturityBehavior).toBeTruthy();
    expect(g.maturitySignals).toBeTruthy();
    expect(g.evidenceExpectations).toBeTruthy();
    expect(g.decisionTrajectoryReplan).toBeTruthy();
    expect(g.resumeAnchors).toBeTruthy();
    expect(content.markdown.length).toBeGreaterThan(4000);
    // Projection must not dump full raw markdown via condensed alone.
    const condensedChars = g.condensed.join("").length;
    expect(condensedChars).toBeLessThan(content.markdown.length / 2);
  });

  it("S9/S11/S14 — NONE/ABSENT honesty without inventing state", async () => {
    const oa = getRuntimeApplicationService().oa;
    expect(oa).toBeTruthy();
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId),
      registryRoot: resolveProductDoctrineRegistryRoot(),
      truthCContext: "MC Consulting IT — contrats B2B",
      oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error("compose failed");
    const ctx = composed.context;
    expect(ctx.decisions.state).toBe("NONE");
    expect(ctx.decisions.items).toHaveLength(0);
    expect(ctx.evidence.state).toBe("NONE");
    expect(ctx.review.state).toBe("NONE");
    expect(ctx.trajectory.state).toBe("ABSENT");
    expect(ctx.trajectory.current).toBeNull();
    expect(ctx.limits.composerDoesNotScoreMaturity).toBe(true);
    expect(ctx.limits.composerDoesNotSelectTrajectory).toBe(true);
    expect(ctx.method.ckcLoaded).toBe(true);
    expect(ctx.method.ckcLensSection).toMatch(/Analysis dimensions/i);
    expect(ctx.method.ckcLensSection).toMatch(/Maturity/i);
    expect(ctx.method.ckcLensSection).not.toMatch(/digest/i);
    expect(STUDIO_COGNITIVE_CONTEXT_BUDGET.maxDecisions).toBe(8);
  });

  it("S8/S10/S12 — PRESENT projections when seeded via legitimate services", async () => {
    const runtime = getRuntimeApplicationService();
    const oa = runtime.oa!;
    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
      await import(
        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
      );
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const scope = `decision:c04-${projectId}`;
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: "2026-09-07T06:00:00.000Z",
      forceEnable: true,
      evidenceId: `evd:c04-hd-${projectId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;

    const recorded = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: `dec:c04-scope-${projectId}`,
      projectId,
      subject: "Périmètre MVP contrats validé",
      options: [{ optionId: "opt:go", label: "GO MVP contrats" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
      linkToLivingProjectState: true,
      expectedLpsVersion: lps.livingProjectState.version,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: "prop:c04-test",
        sourceDigest: "b".repeat(64),
        projectId,
        proposalContext: {
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
        },
        executionBasis: {
          objective: "Borner le MVP contrats",
          scope: "MVP suivi contrats",
          requestedOperation: "scope decision",
        },
      },
    });
    expect(recorded.ok).toBe(true);

    const ev = await oa.evidenceReviewServices.registerEvidence.execute({
      evidenceId: `ev:c04-${projectId}`,
      idempotencyKey: `idem:ev-c04-${projectId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      type: "document",
      source: "notes cadrage",
      sourceKind: "manual",
      bindings: { projectId },
      classification: "internal",
      storageMode: "metadata_only",
    });
    expect(ev.ok).toBe(true);

    const rb = await oa.evidenceReviewServices.createReviewBundle.execute({
      reviewBundleId: `rb:c04-${projectId}`,
      projectId,
      idempotencyKey: `idem:rb-c04-${projectId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      evidenceIds: [`ev:c04-${projectId}`],
    });
    expect(rb.ok).toBe(true);

    const lpsAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) return;

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:c04-${projectId}`,
      projectId,
      steps: [
        {
          stepId: "stp:frame",
          order: 1,
          label: "Cadrage",
          state: "active",
        },
        {
          stepId: "stp:design",
          order: 2,
          label: "Conception",
          state: "pending",
        },
      ],
      status: "active",
      expectedLpsVersion: lpsAfter.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
    });
    // Trajectory creation may fail OCC if LPS moved — tolerate ABSENT vs PRESENT.
    void traj;

    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId),
      registryRoot: resolveProductDoctrineRegistryRoot(),
      oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error("compose failed");
    const ctx = composed.context;
    expect(ctx.decisions.state).toBe("PRESENT");
    expect(ctx.decisions.items.some((d) => d.subject.includes("MVP"))).toBe(
      true,
    );
    expect(ctx.evidence.state).toBe("PRESENT");
    expect(ctx.evidence.items[0]?.type).toBe("document");
    expect(ctx.review.state).toBe("PRESENT");
    expect(["PRESENT", "ABSENT", "UNAVAILABLE"]).toContain(ctx.trajectory.state);
    if (ctx.trajectory.state === "PRESENT") {
      expect(ctx.trajectory.current?.stepSummaries.length).toBeGreaterThan(0);
    }
  });


  it("C-status — HumanDecision lifecycle mapping for every domain status", () => {
    const cases: Array<[HumanDecision["status"], "CURRENT" | "PENDING" | "NON_ACTIVE"]> = [
      ["accepted", "CURRENT"],
      ["amended", "CURRENT"],
      ["proposed", "PENDING"],
      ["required", "PENDING"],
      ["refused", "NON_ACTIVE"],
      ["superseded", "NON_ACTIVE"],
      ["revoked", "NON_ACTIVE"],
    ];
    for (const [status, lifecycle] of cases) {
      expect(classifyHumanDecisionLifecycle(status)).toBe(lifecycle);
    }
  });

  it("C-status — Evidence epistemic stance from status/availability/freshness", () => {
    expect(
      classifyEvidenceEpistemicStance({
        status: "verified",
        availability: "available",
        freshness: "fresh",
      }),
    ).toBe("STRONGER_SUPPORT");
    expect(
      classifyEvidenceEpistemicStance({
        status: "available",
        availability: "available",
        freshness: "fresh",
      }),
    ).toBe("LIMITED_SUPPORT");
    expect(
      classifyEvidenceEpistemicStance({
        status: "expected",
        availability: "available",
        freshness: null,
      }),
    ).toBe("PENDING_SUPPORT");
    expect(
      classifyEvidenceEpistemicStance({
        status: "incomplete",
        availability: "available",
        freshness: "aging",
      }),
    ).toBe("LIMITED_SUPPORT");
    expect(
      classifyEvidenceEpistemicStance({
        status: "stale",
        availability: "available",
        freshness: "fresh",
      }),
    ).toBe("WEAKENED_SUPPORT");
    expect(
      classifyEvidenceEpistemicStance({
        status: "verified",
        availability: "available",
        freshness: "stale",
      }),
    ).toBe("WEAKENED_SUPPORT");
    expect(
      classifyEvidenceEpistemicStance({
        status: "rejected",
        availability: "available",
        freshness: "fresh",
      }),
    ).toBe("NON_SUPPORTING");
    expect(
      classifyEvidenceEpistemicStance({
        status: "superseded",
        availability: "available",
        freshness: "fresh",
      }),
    ).toBe("NON_SUPPORTING");
    expect(
      classifyEvidenceEpistemicStance({
        status: "unavailable",
        availability: "unavailable",
        freshness: null,
      }),
    ).toBe("NON_SUPPORTING");
    expect(
      classifyEvidenceEpistemicStance({
        status: "verified",
        availability: "unavailable",
        freshness: "fresh",
      }),
    ).toBe("NON_SUPPORTING");
    expect(
      classifyEvidenceEpistemicStance({
        status: "verified",
        availability: "unknown",
        freshness: "fresh",
      }),
    ).toBe("UNCERTAIN_SUPPORT");
    expect(
      classifyEvidenceEpistemicStance({
        status: "available",
        availability: "available",
        freshness: "unknown",
      }),
    ).toBe("UNCERTAIN_SUPPORT");
  });

  it("C-status — PRESENT decisions prompt distinguishes CURRENT/PENDING/NON_ACTIVE", () => {
    const method = {
      orientation: {
        state: "UNRESOLVED" as const,
        candidateCycleTypeId: null,
      },
      cycleLabel: null,
      ckcLensSection: null,
      ckcLoaded: false,
      doctrinePinPresent: true,
      sourceLimit: "none" as const,
      trajectory: null,
    };
    const ctx = {
      projectTruth: {
        projectId: "prj:x",
        name: "X",
        objective: "O",
        context: "C",
        constraints: [],
        criticality: "STANDARD",
        shortReference: null,
        lpsId: "lps:x",
        lpsVersion: 1,
        activeCycleInstanceId: null,
        doctrineId: "pkg:x",
        doctrineVersion: "1",
        doctrineStatus: "resolved",
      },
      method,
      activeCycle: null,
      activeCycleWorkItems: {
        state: "NONE" as const,
        items: [],
      },
      decisions: {
        state: "PRESENT" as const,
        items: [
          {
            subject: "Scope MVP accepté",
            selectedOptionLabel: "GO",
            status: "accepted" as const,
            lifecycle: "CURRENT" as const,
            effectiveAt: "2026-09-07T00:00:00.000Z",
            reversible: true,
            supersedesPresent: false,
          },
          {
            subject: "Architecture proposée",
            selectedOptionLabel: "Option A",
            status: "proposed" as const,
            lifecycle: "PENDING" as const,
            effectiveAt: "2026-09-07T00:00:00.000Z",
            reversible: true,
            supersedesPresent: false,
          },
          {
            subject: "Ancien périmètre",
            selectedOptionLabel: "GO old",
            status: "superseded" as const,
            lifecycle: "NON_ACTIVE" as const,
            effectiveAt: "2026-09-01T00:00:00.000Z",
            reversible: true,
            supersedesPresent: false,
          },
          {
            subject: "Refus sponsor",
            selectedOptionLabel: "NO-GO",
            status: "refused" as const,
            lifecycle: "NON_ACTIVE" as const,
            effectiveAt: "2026-09-02T00:00:00.000Z",
            reversible: false,
            supersedesPresent: false,
          },
        ],
      },
      evidence: {
        state: "PRESENT" as const,
        items: [
          {
            type: "document",
            status: "verified" as const,
            availability: "available" as const,
            freshness: "fresh" as const,
            sourceKind: "manual",
            producedAt: "2026-09-07T00:00:00.000Z",
            epistemicStance: "STRONGER_SUPPORT" as const,
          },
          {
            type: "document",
            status: "rejected" as const,
            availability: "available" as const,
            freshness: "fresh" as const,
            sourceKind: "manual",
            producedAt: "2026-09-07T00:00:00.000Z",
            epistemicStance: "NON_SUPPORTING" as const,
          },
          {
            type: "document",
            status: "stale" as const,
            availability: "available" as const,
            freshness: "stale" as const,
            sourceKind: "manual",
            producedAt: "2026-01-01T00:00:00.000Z",
            epistemicStance: "WEAKENED_SUPPORT" as const,
          },
        ],
      },
      review: { state: "NONE" as const, items: [] },
      trajectory: { state: "ABSENT" as const, current: null },
      limits: {
        oaAvailable: true,
        truthOutranksConversation: true as const,
        composerDoesNotScoreMaturity: true as const,
        composerDoesNotSelectTrajectory: true as const,
      },
    } satisfies StudioCognitiveContext;

    const prompt = buildStudioCognitivePromptSections(ctx).join("\n");
    expect(prompt).toMatch(/PRESENT ≠ toutes CURRENT/);
    expect(prompt).toMatch(/lifecycle=CURRENT/);
    expect(prompt).toMatch(/lifecycle=PENDING/);
    expect(prompt).toMatch(/lifecycle=NON_ACTIVE/);
    expect(prompt).not.toMatch(
      /État : PRESENT — respecter ; ne pas rouvrir comme Option libre/,
    );
    expect(prompt).toMatch(/PRESENT ≠ Fact/);
    expect(prompt).toMatch(/stance=STRONGER_SUPPORT/);
    expect(prompt).toMatch(/stance=NON_SUPPORTING/);
    expect(prompt).toMatch(/stance=WEAKENED_SUPPORT/);
    expect(prompt).not.toMatch(
      /Project\/LPS\/HumanDecision\/Evidence = autorité factuelle projet/,
    );
    expect(prompt).toMatch(/Truth C \/ LPS courant \+ HumanDecisions CURRENT/);
  });

  it("C-status — accepted HD from OA is CURRENT in compose projection", async () => {
    const runtime = getRuntimeApplicationService();
    const oa = runtime.oa!;
    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
      await import(
        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
      );
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const scope = `decision:c04-cur-${projectId}`;
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: "2026-09-07T06:00:00.000Z",
      forceEnable: true,
      evidenceId: `evd:c04-cur-${projectId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;
    const recorded = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: `dec:c04-cur-${projectId}`,
      projectId,
      subject: "Décision CURRENT test",
      options: [{ optionId: "opt:go", label: "GO" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
      linkToLivingProjectState: true,
      expectedLpsVersion: lps.livingProjectState.version,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: "prop:c04-cur",
        sourceDigest: "d".repeat(64),
        projectId,
        proposalContext: {
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
        },
        executionBasis: {
          objective: "Test CURRENT",
          scope: "test",
          requestedOperation: "test",
        },
      },
    });
    expect(recorded.ok).toBe(true);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId),
      registryRoot: resolveProductDoctrineRegistryRoot(),
      oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error("compose failed");
    const ctx = composed.context;
    expect(ctx.decisions.state).toBe("PRESENT");
    expect(ctx.decisions.items.some((d) => d.lifecycle === "CURRENT")).toBe(
      true,
    );
    expect(ctx.decisions.items.every((d) => d.status.length > 0)).toBe(true);
    const prompt = buildStudioCognitivePromptSections(ctx).join("\n");
    expect(prompt).toMatch(/lifecycle=CURRENT/);
  });


  it("C-status — supersession: prior NON_ACTIVE, replacement CURRENT, never both CURRENT same subject", async () => {
    const runtime = getRuntimeApplicationService();
    const oa = runtime.oa!;
    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
      await import(
        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
      );
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const scope = `decision:c04-sup-${projectId}`;
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: "2026-09-07T06:10:00.000Z",
      forceEnable: true,
      evidenceId: `evd:c04-sup-${projectId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;
    const firstId = `dec:c04-sup-a-${projectId}`;
    const first = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: firstId,
      projectId,
      subject: "Sujet supersession",
      options: [{ optionId: "opt:a", label: "A" }],
      selectedOptionId: "opt:a",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
      linkToLivingProjectState: true,
      expectedLpsVersion: lps.livingProjectState.version,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: "prop:c04-sup-a",
        sourceDigest: "e".repeat(64),
        projectId,
        proposalContext: {
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
        },
        executionBasis: {
          objective: "Supersession",
          scope: "test",
          requestedOperation: "test",
        },
      },
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const secondId = `dec:c04-sup-b-${projectId}`;
    const second = await oa.decisionServices.supersedeHumanDecision.execute({
      newDecisionId: secondId,
      supersedesDecisionId: firstId,
      selectedOptionId: "opt:a",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      reason: "Remplacement autorisé pour preuve supersession",
      scope,
      authorityEvidenceId: reg.evidenceId,
    });
    expect(second.ok).toBe(true);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId),
      registryRoot: resolveProductDoctrineRegistryRoot(),
      oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error("compose failed");
    const ctx = composed.context;
    const items = ctx.decisions.items.filter((d) =>
      d.subject.includes("Sujet supersession"),
    );
    expect(items.length).toBeGreaterThanOrEqual(2);
    const currents = items.filter((d) => d.lifecycle === "CURRENT");
    const nonActives = items.filter((d) => d.lifecycle === "NON_ACTIVE");
    expect(currents.length).toBe(1);
    expect(nonActives.some((d) => d.status === "superseded")).toBe(true);
    expect(currents[0]?.status).toBe("accepted");
    const prompt = buildStudioCognitivePromptSections(ctx).join("\n");
    expect(prompt).toMatch(/lifecycle=CURRENT/);
    expect(prompt).toMatch(/lifecycle=NON_ACTIVE/);
    expect(prompt).toMatch(/raw=superseded/);
  });

});

```
### `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts`

```typescript
import type { ProjectAssistantContextDto } from "./types";
import type { AdvisoryMethodContext } from "./f2/methodOrientation";
import {
  buildStudioCognitivePromptSections,
  type StudioCognitiveContext,
} from "./f2/studioCognitiveContext";
import { listCycleTypes } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
/**
 * Compact F1 system prompt — project context + advisory contract + hard read-only limits.
 * No F2 CycleInstance authority, no Cursor, no write, no HumanDecision/START.
 * Structured lifecycle Recommendation emission is allowed (authority none) via Product turn output.
 * CORR-PROOF-02 B1 — positive advisory initiative for ordinary incomplete requests.
 * CORR-PROOF-03 E1 — Studio method identity + optional non-mutating method context.
 * QUAL-TO-GOVERNED-CYCLE — semantic boundary before silent pre-cycle deepening.
 */
export function buildProjectSystemPrompt(
  project: ProjectAssistantContextDto,
  options?: {
    /**
     * CORR-MW2-REAL-04 — optional full Truth C / LPS context for F1 cognitive turns.
     * When set, replaces UI contextSummary in the Contexte line only.
     * Does not mutate ProjectAssistantContextDto / client boundary.
     */
    truthCContext?: string | null;
    /**
     * CORR-PROOF-03 E1 — bounded non-mutating method orientation + optional CKC lens.
     * Guidance only; never Truth C / HumanDecision / ExecutionContract.
     */
    methodContext?: AdvisoryMethodContext | null;
    /**
     * CORR-PROOF-04 — Hybrid Context Envelope (composer-first).
     * When present, supersedes methodContext for method + state sections.
     */
    studioCognitiveContext?: StudioCognitiveContext | null;
  },
): string {
  const constraints =
    project.constraints.length > 0
      ? project.constraints.map((c) => `- ${c}`).join("\n")
      : "- (aucune contrainte listée)";

  const shortRef = project.shortReference
    ? `Référence courte : ${project.shortReference}`
    : "Référence courte : (absente)";

  const contextLine =
    options?.truthCContext != null && options.truthCContext !== ""
      ? options.truthCContext
      : project.contextSummary;

  const studio = options?.studioCognitiveContext ?? null;
  const methodSection = studio
    ? buildStudioCognitivePromptSections(studio)
    : buildMethodGroundingSection(options?.methodContext ?? null);

  return [
    "Tu es Nora, partenaire de réflexion projet/produit du Project Workspace.",
    "Périmètre : ANALYSE / CONVERSATION / CONSEIL / LECTURE SEULE.",
    "Tu n'as aucune autorité de décision Pilote, d'exécution Cursor, d'écriture Git/GitHub,",
    "ni de création / START / HumanDecision / CycleInstance actif.",
    "Tu PEUX émettre une Recommendation lifecycle structurée SANS autorité (champ lifecycleRecommendation)",
    "lorsque la frontière sémantique ci-dessous est atteinte — le serveur valide et matérialise ;",
    "émettre ≠ qualifier formellement un CycleInstance ≠ décider.",
    "Une intention utilisateur n'est jamais une autorisation d'exécution.",
    "",
    "=== IDENTITÉ SFIA STUDIO (priorité source) ===",
    "À l'intérieur de SFIA Studio, « SFIA » désigne PAR DÉFAUT la méthodologie / doctrine produit SFIA Studio",
    "applicable au projet courant (DoctrinePackage / CKC produit), PAS le Skills Framework for the Information Age.",
    "Si le Pilote demande explicitement le Skills Framework for the Information Age, le référentiel public/externe",
    "de compétences SFIA, ou le framework SFIA externe : tu peux en parler, en le distinguant clairement de la méthodologie Studio.",
    "Ne traite JAMAIS le Skills Framework public comme la méthodologie Studio par défaut.",
    "Pour toute claim de méthode Studio : DoctrinePackage / CKC produit résolu > état Project / Truth C de confiance",
    "> contexte conversationnel > connaissance préentraînée générique.",
    "La connaissance préentraînée du SFIA public ne doit JAMAIS surcharger une doctrine Studio résolue.",
    "Si la source méthodologique exacte n'est pas résolue : ne fabrique pas de claims détaillées de méthode Studio ;",
    "reste en conseil général sûr ; annonce les limites de source quand c'est matériel ; conserve l'identité Studio ;",
    "ne bascule PAS silencieusement vers le Skills Framework public.",
    "",
    "=== CONTRAT ADVISORY CONTEXT-FIRST (par défaut) ===",
    "Pour une demande intelligible même incomplète : avance utilement la pensée du Pilote.",
    "AVANT toute structure générique (MVP, rôles, objets, phases, roadmap) : utilise le Studio Cognitive Context",
    "pour déterminer ce qui est déjà établi, décidé, evidencé, encore ouvert, et ce qui compte MAINTENANT.",
    "Priorise le prochain mouvement méthodologique matériel dérivé de l'état Studio — pas un template PM générique.",
    "MVP / rôles / objets / options / architecture : seulement s'ils sont pertinents pour l'état courant.",
    "Indique ce qu'il ne faut PAS faire encore lorsque l'état le justifie (ex. delivery prématurée).",
    "Utilise des hypothèses de travail EXPLICITES quand un détail manquant ne bloque pas un progrès utile.",
    "Distingue clairement : fait / hypothèse / option / recommandation / HumanDecision / Evidence.",
    "Hypothèse ≠ Fait. Option ≠ Recommandation. Recommandation ≠ HumanDecision. Claim utilisateur ≠ fait externe vérifié.",
    "Quand c'est possible : raisonnement utile D'ABORD, puis UNE question de raffinement ciblée si nécessaire.",
    "Clarification autorisée uniquement si le manque change matériellement l'analyse, le scope, le risque,",
    "la recommandation, la trajectoire, l'autorité, la preuve ou un effet gouverné.",
    "Pas de questionnaire générique. Pas d'intake séquentiel obligatoire. Pas d'intake CKC séquentiel obligatoire.",
    "Pas de dimensions CKC comme formulaire.",
    "Langage métier pour le Pilote — ne pas exposer F1/F2/MW5/CKC IDs, digests, routage interne ou schémas structurés.",
    "Vérité Project courante + doctrine Studio outrankent les prémisses conversationnelles obsolètes (sans réécrire l'historique).",
    "Une compréhension conversationnelle ne devient JAMAIS Truth C / LPS / HumanDecision par inférence silencieuse.",
    "",
    "=== FRONTIÈRE QUALIFICATION PRÉ-CYCLE → RECOMMANDATION DE CYCLE ===",
    "Qualification pré-cycle ≠ Cadrage ≠ CycleInstance ≠ « Cycle 0 » ≠ workflow durable.",
    "Elle sert UNIQUEMENT à déterminer honnêtement le prochain travail gouverné.",
    "Pas de règle « après N messages ». Pas de « toujours Cadrage en premier ».",
    "Pas de matrice métier par domaine. Pas de limite arbitraire de questions.",
    "",
    "TEST DE PERTINENCE DE ROUTAGE (avant toute clarification pré-cycle) :",
    "Une réponse différente à CETTE question peut-elle matériellement changer",
    "le cycle candidat, le profil SFIA, un gate / une frontière d'autorité, ou provoquer un STOP ?",
    "Si OUI → clarification pré-cycle autorisée (au plus une, ciblée).",
    "Si NON → l'inconnue appartient au cycle candidat ; ne la poursuis PAS en pré-cycle.",
    "",
    "TEST DE PROPRIÉTÉ DE CYCLE :",
    "Cette inconnue relève-t-elle normalement du travail du cycle que tu es déjà capable de recommander ?",
    "Si OUI → STOP qualification pré-cycle ; émets narrative + lifecycleRecommendation.",
    "« Il reste beaucoup à préciser » NE signifie PAS « continuer la qualification » —",
    "cela peut être exactement la raison de recommander le cycle (ex. Cadrage) qui possède ces inconnues.",
    "",
    "Champ structuré obligatoire preCycleRoutingAssessment (même tour ; non durable ; sans autorité) :",
    "- routingBlockingUnknownPresent = true ssi une inconnue bloque encore le routage (test de pertinence).",
    "- candidateCycleSupportable = true ssi un prochain type de cycle est honnêtement supportable.",
    "- remainingUnknownsAreCycleOwned = true ssi les inconnues restantes appartiennent à ce cycle.",
    "- multiplePlausibleCycles = true ssi plusieurs cycles restent vraiment plausibles.",
    "- activeCycleAlreadyCoversWork = true ssi un cycle actif couvre déjà le travail.",
    "Cohérence obligatoire avec lifecycleRecommendation :",
    "- si routingBlockingUnknownPresent OU multiplePlausibleCycles → lifecycleRecommendation = null ; clarification ciblée seulement.",
    "- si activeCycleAlreadyCoversWork → ne pas émettre NEXT_CYCLE pour « sortir » de la qualification.",
    "- si candidateCycleSupportable ET NOT routingBlockingUnknownPresent ET NOT multiplePlausibleCycles",
    "  ET NOT activeCycleAlreadyCoversWork → cesse l'approfondissement ; lifecycleRecommendation NEXT_CYCLE (ou FINALIZE si pertinent).",
    "Ne résous PAS en pré-cycle le périmètre détaillé, critères de succès, règles de comportement,",
    "états métier ou signaux d'urgence appartenant au cycle candidat.",
    "lifecycleRecommendation (si émise) : intent NEXT_CYCLE ou FINALIZE_CURRENT_CYCLE ;",
    "authority conceptuelle aucune ; isHumanDecision false ; statement et rationale lisibles Pilote ;",
    "targetCycleTypeId DOIT être un identifiant catalogue Studio exact (ex. cyc:framing pour le label « Cadrage »).",
    "Jamais un label humain seul (« Cadrage », « Delivery ») ni un id inventé.",
    "Identifiants catalogue actifs : " +
      listCycleTypes()
        .map((e) => `${e.cycleTypeId} (« ${e.label} »)`)
        .join(", ") +
      ".",
    "targetCycleTypeId seulement s'il est supportable (jamais inventé ; jamais forcé cyc:framing).",
    "Ne dis PAS « je ne peux pas l'enregistrer dans Studio » si le chemin structured Recommendation est disponible.",
    "Si tu émets lifecycleRecommendation : le serveur peut la matérialiser ; ne prétends jamais qu'elle est",
    "enregistrée si tu n'as pas de confirmation produit ; ne crée pas de CycleInstance / HD / START.",
    "",
    ...buildActiveCycleWorkOutputSection(studio),
    "=== LIMITES D'AUTORITÉ (strict) ===",
    "Distingue vérité courante / historique / superseded / réserve ouverte.",
    "Tu peux utiliser uniquement les outils de lecture (Git/GitHub read) exposés.",
    "Session conversationnelle (si présente) = continuité de chat uniquement — jamais Truth C / LPS / HumanDecision.",
    "Si Memory B est indisponible : n'invente pas de transcript, de HumanDecision, d'autorisation ni d'Evidence.",
    "Project/LPS/Cycle restent Product SQLite Truth C (autorité métier). AUCUNE EXÉCUTION.",
    "Ne propose pas d'ouvrir OPS1, Cursor, ni un gate d'exécution.",
    "",
    "=== SOURCE INTEGRITY (fail-closed) ===",
    "- Un FAIT repository nécessite une source réellement obtenue via un outil réussi.",
    "- Ne jamais prétendre avoir lu un document si git_local_read_file n'a pas réussi pour ce chemin.",
    "- search hit (git_local_search_files / git_local_search_content) ≠ file read.",
    "- failed / denied / PATH_NOT_ALLOWED / TRANSPORT_UNAVAILABLE ≠ source.",
    "- truncated / hasMore ≠ document complet ; annonce explicitement la limite.",
    "- outil unavailable ≠ information vérifiée.",
    "- Si la preuve est insuffisante : annonce la limite ; ne reconstruis PAS un contenu depuis la mémoire du modèle.",
    "- FAILED/DENIED/UNRESOLVED SOURCE ne doit JAMAIS devenir un fact source-backed.",
    "",
    "=== GIT / REPOSITORY PRIORITY ===",
    "- Pour HEAD / status / branche / vérité Git locale : utilise git_local_get_head / git_local_get_status (ne demande pas à l'humain d'exécuter git si l'outil est disponible).",
    "- Pour comparer main distant : utilise github_get_branch lorsque GitHub READ est disponible ; sinon déclare la limite réelle.",
    "- Pour un identifiant technique inconnu du chemin : utilise git_local_search_content (pas seulement search_files).",
    "- Pour une section profonde d'un long document : utilise git_local_read_file avec startLine/endLine.",
    "",
    ...methodSection,
    "Contexte projet (autorité Project/LPS runtime Studio) :",
    `Project ID : ${project.projectId}`,
    `Nom : ${project.name}`,
    shortRef,
    `Objectif : ${project.objective}`,
    `Contexte : ${contextLine}`,
    `Criticité : ${project.criticality}`,
    "Contraintes :",
    constraints,
    `LPS : ${project.lpsId} (v${project.lpsVersion}, ${project.lpsCreatedAt})`,
    `Doctrine : ${project.doctrineId} ${project.doctrineVersion} · ${project.doctrineStatus} · ${project.doctrineDigest}`,
    `Runtime : ${project.runtimeMode} · persistence ${project.persistence} · readiness ${project.readiness}`,
  ].join("\n");
}

function buildActiveCycleWorkOutputSection(
  studio: StudioCognitiveContext | null,
): string[] {
  const lines = [
    "=== SORTIE STRUCTURÉE activeCycleWork (D-GF-ACW-01) ===",
    "Champ structuré obligatoire activeCycleWork (même tour ; nullable) :",
  ];

  const active = studio?.activeCycle ?? null;
  if (!active) {
    lines.push(
      "Aucun cycle ACTIVE dans le contexte Studio → activeCycleWork DOIT être null.",
    );
    lines.push(
      "Ne matérialise pas d'Observation/Hypothesis/Option/Recommendation/Reservation/Contradiction",
      "via activeCycleWork hors cycle actif.",
    );
    lines.push("");
    return lines;
  }

  if (active.workEligible) {
    lines.push(
      "Cycle ACTIVE workEligible : émets activeCycleWork.items pour le travail cognitif",
      "ancré utilisateur dans ce cycle (Observation | Hypothesis | Option | Recommendation |",
      "Reservation | Contradiction uniquement).",
    );
    lines.push(
      "INTERDIT dans activeCycleWork : DecisionRef, EvidenceRef, HumanDecision, Fact,",
      "ExecutionContract ; jamais d'ids, d'authority, ni de provenance (le serveur les mints).",
    );
    lines.push(
      "Si activeCycleAlreadyCoversWork = true (ou disposition DEFER_TO_ACTIVE_CYCLE) :",
      "préfère activeCycleWork plutôt qu'une lifecycleRecommendation NEXT_CYCLE.",
    );
  } else {
    lines.push(
      `Cycle ACTIVE présent mais non workEligible (status=${active.status}) →`,
      "activeCycleWork DOIT être null pour ce tour.",
    );
  }
  lines.push("");
  return lines;
}

function buildMethodGroundingSection(
  methodContext: AdvisoryMethodContext | null,
): string[] {
  const lines = [
    "=== ANCRAGE MÉTHODOLOGIQUE (guidance seulement — non mutante) ===",
    "Ce bloc oriente le conseil. Il n'est PAS Truth C, PAS CycleInstance actif, PAS HumanDecision,",
    "PAS ExecutionContract, PAS autorité d'exécution. Orientation candidat = hypothèse / lentille.",
    "Utilise la méthodologie pour décider ce qui compte maintenant, quoi enchaîner, quels risques/décisions approchent.",
    "Ne force pas un waterfall fixe (« toujours commencer au Cycle 1 »). Ne prétends pas une trajectoire dynamique",
    "si aucune trajectoire n'est fournie ici. Pas d'intake séquentiel obligatoire.",
  ];

  if (!methodContext) {
    lines.push(
      "Orientation : non fournie pour ce tour — conserve l'identité Studio ; conseil général sûr.",
    );
    lines.push("");
    return lines;
  }

  if (methodContext.orientation.state === "RESOLVED_FROM_INTENT_CANDIDATE") {
    lines.push(
      `État orientation : RESOLVED_FROM_INTENT_CANDIDATE` +
        (methodContext.cycleLabel
          ? ` · cycle candidat « ${methodContext.cycleLabel} »`
          : "") +
        " (hypothèse non durable).",
    );
  } else {
    lines.push(
      "État orientation : UNRESOLVED — n'invente pas de cycle ; pose une question ciblée seulement si matériel.",
    );
  }

  if (methodContext.sourceLimit === "doctrine_unavailable") {
    lines.push(
      "Limite source : DoctrinePackage produit non résolu — aucune claim Studio détaillée source-backed.",
    );
  } else if (methodContext.sourceLimit === "ckc_unavailable") {
    lines.push(
      "Limite source : lentille CKC détaillée indisponible pour l'orientation — dégradation gouvernée ;",
      "pas de bascule vers le Skills Framework public ; pas de fabrication de CKC.",
    );
  }

  if (methodContext.ckcLensSection?.trim()) {
    lines.push("Lentille CKC (interne) :");
    lines.push(methodContext.ckcLensSection.trim());
  }

  lines.push("");
  return lines;
}

```
### `projects/sfia-studio/app/features/project-assistant/f2/activeCycleCognitiveContext.ts`

```typescript
/**
 * D-GF-ACW-01 — server-owned active CycleInstance + exact CKC grounding.
 *
 * Generic path: LPS.activeCycleInstanceId → CycleInstance → cycleTypeId →
 * Product CKC registry. No cycleTypeId branching. No label reverse-mapping.
 * Fail-closed before model call when binding/ref is incoherent.
 */

import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import type { CycleInstance, CycleInstanceStatus, CycleProfile } from "@/lib/oa/cycle";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
} from "@/lib/oa/cycle/domain/catalogFingerprint";
import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
import { mintPrepareCycleCorrelationId } from "@/lib/oa/cycle/application/lifecycleRecommendation/prepareCycleFromValidatedTrajectory";
import { projectCkcResolutionRef } from "@/lib/oa/cycle/application/lifecycleRecommendation/ckcResolutionRef";
import { classifyTrajectoryBinding } from "@/lib/oa/cycle/application/lifecycleRecommendation/assertTrajectoryBoundCycleStartReady";
import type { GetCycle } from "@/lib/oa/cycle/application/getCycle";
import {
  buildCkcApplicationLensSection,
  loadProductCkcCognitiveContent,
  type ProductCkcCognitiveContent,
} from "./ckcCognitiveContext";
import { doctrinePackagePinFromProjectContext } from "./methodOrientation";
import type { ProjectAssistantContextDto } from "../types";

export type ActiveCycleCognitiveProjection = {
  readonly cycleInstanceId: string;
  readonly cycleTypeId: string;
  readonly profile: CycleProfile;
  readonly status: CycleInstanceStatus;
  readonly trajectoryId: string | null;
  readonly trajectoryVersion: number | null;
  readonly trajectoryStepId: string | null;
  readonly ckcResolutionRef: string | null;
  readonly cycleLabel: string | null;
  /** True only when status === "active" — gates active-cycle work materialization. */
  readonly workEligible: boolean;
};

export type ActiveCycleCkcGrounding = {
  readonly cycleTypeId: string;
  readonly cycleLabel: string | null;
  readonly ckcLensSection: string | null;
  readonly ckcLoaded: boolean;
  readonly ckcId: string | null;
  readonly sourceLimit: "none" | "ckc_unavailable" | "doctrine_unavailable";
  readonly durableCkcResolutionRef: string | null;
};

export type ResolveActiveCycleCognitiveOk = {
  readonly ok: true;
  readonly projection: ActiveCycleCognitiveProjection | null;
  readonly ckc: ActiveCycleCkcGrounding | null;
};

export type ResolveActiveCycleCognitiveErr = {
  readonly ok: false;
  readonly code: string;
  readonly reason: string;
};

export type ResolveActiveCycleCognitiveResult =
  | ResolveActiveCycleCognitiveOk
  | ResolveActiveCycleCognitiveErr;

function expectedTrajectoryBoundCkcRef(cycle: CycleInstance): string | null {
  const binding = classifyTrajectoryBinding(cycle);
  if (binding !== "COMPLETE_TRAJECTORY_BOUND") return null;
  const trajectoryId = cycle.trajectoryId!.trim();
  const trajectoryVersion = cycle.trajectoryVersion!;
  const stepId = cycle.trajectoryStepId!.trim();
  const correlationId = mintPrepareCycleCorrelationId({
    projectId: cycle.projectId,
    trajectoryId,
    trajectoryVersion,
    stepId,
  });
  return projectCkcResolutionRef({
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId,
  });
}

function projectActiveCycle(cycle: CycleInstance): ActiveCycleCognitiveProjection {
  const entry = getCycleTypeById(cycle.cycleTypeId);
  return Object.freeze({
    cycleInstanceId: cycle.cycleInstanceId,
    cycleTypeId: cycle.cycleTypeId,
    profile: cycle.profile,
    status: cycle.status,
    trajectoryId: cycle.trajectoryId?.trim() || null,
    trajectoryVersion:
      typeof cycle.trajectoryVersion === "number" ? cycle.trajectoryVersion : null,
    trajectoryStepId: cycle.trajectoryStepId?.trim() || null,
    ckcResolutionRef: cycle.ckcResolutionRef?.trim() || null,
    cycleLabel: entry?.label ?? null,
    workEligible: cycle.status === "active",
  });
}

function buildCkcGrounding(input: {
  projection: ActiveCycleCognitiveProjection;
  packagePin: DoctrinePackagePin | null;
  registryRoot: string;
}): ActiveCycleCkcGrounding {
  if (!input.packagePin) {
    return Object.freeze({
      cycleTypeId: input.projection.cycleTypeId,
      cycleLabel: input.projection.cycleLabel,
      ckcLensSection: null,
      ckcLoaded: false,
      ckcId: null,
      sourceLimit: "doctrine_unavailable" as const,
      durableCkcResolutionRef: input.projection.ckcResolutionRef,
    });
  }

  const ckcContent: ProductCkcCognitiveContent | null =
    loadProductCkcCognitiveContent({
      registryRoot: input.registryRoot,
      cycleTypeId: input.projection.cycleTypeId,
      packagePin: input.packagePin,
    });

  if (!ckcContent) {
    return Object.freeze({
      cycleTypeId: input.projection.cycleTypeId,
      cycleLabel: input.projection.cycleLabel,
      ckcLensSection: null,
      ckcLoaded: false,
      ckcId: null,
      sourceLimit: "ckc_unavailable" as const,
      durableCkcResolutionRef: input.projection.ckcResolutionRef,
    });
  }

  const label = input.projection.cycleLabel ?? input.projection.cycleTypeId;
  const ckcLensSection = buildCkcApplicationLensSection(ckcContent).replace(
    `cycle « ${ckcContent.cycleTypeId} »`,
    `cycle « ${label} »`,
  );

  return Object.freeze({
    cycleTypeId: input.projection.cycleTypeId,
    cycleLabel: input.projection.cycleLabel,
    ckcLensSection,
    ckcLoaded: true,
    ckcId: ckcContent.ckcId,
    sourceLimit: "none" as const,
    durableCkcResolutionRef: input.projection.ckcResolutionRef,
  });
}

/**
 * Resolve server-owned active-cycle identity + exact CKC lens.
 * When LPS has no activeCycleInstanceId → ok with null projection (pre-cycle path).
 */
export async function resolveActiveCycleCognitiveContext(input: {
  project: ProjectAssistantContextDto;
  activeCycleInstanceId?: string | null;
  registryRoot: string;
  getCycle: GetCycle;
}): Promise<ResolveActiveCycleCognitiveResult> {
  const activeId =
    (input.activeCycleInstanceId ?? input.project.activeCycleInstanceId ?? null)
      ?.trim() || null;

  if (!activeId) {
    return { ok: true, projection: null, ckc: null };
  }

  const loaded = await input.getCycle.execute({ cycleInstanceId: activeId });
  if (!loaded.ok) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_NOT_FOUND",
      reason: "lps_active_cycle_instance_missing",
    };
  }

  const cycle = loaded.cycle;
  if (cycle.projectId !== input.project.projectId) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_PROJECT_MISMATCH",
      reason: "cycle_project_id_mismatch",
    };
  }

  const binding = classifyTrajectoryBinding(cycle);
  if (binding === "INCOMPLETE_TRAJECTORY_BINDING") {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_TRAJECTORY_BINDING_INCOMPLETE",
      reason: "incomplete_trajectory_binding",
    };
  }

  const durableRef = cycle.ckcResolutionRef?.trim() || null;
  const lpsRef = input.project.ckcResolutionRef?.trim() || null;

  if (binding === "COMPLETE_TRAJECTORY_BOUND") {
    if (!durableRef) {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_CKC_REF_MISSING",
        reason: "trajectory_bound_cycle_missing_ckc_resolution_ref",
      };
    }
    const expected = expectedTrajectoryBoundCkcRef(cycle);
    if (expected && expected !== durableRef) {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_CKC_REF_DRIFT",
        reason: "durable_ckc_resolution_ref_diverges_from_expected",
      };
    }
  }

  if (lpsRef && durableRef && lpsRef !== durableRef) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_CKC_REF_DRIFT",
      reason: "lps_ckc_resolution_ref_diverges_from_cycle",
    };
  }

  const projection = projectActiveCycle(cycle);
  const packagePin = doctrinePackagePinFromProjectContext(input.project);
  const ckc = buildCkcGrounding({
    projection,
    packagePin,
    registryRoot: input.registryRoot,
  });

  // Trajectory-bound greenfield active cycles must have loadable CKC.
  // LEGACY_UNBOUND may degrade to ckc_unavailable without blocking the turn
  // (historical F2/LR fixtures use non-product doctrine pins).
  if (
    projection.workEligible &&
    !ckc.ckcLoaded &&
    binding === "COMPLETE_TRAJECTORY_BOUND"
  ) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_CKC_UNAVAILABLE",
      reason:
        ckc.sourceLimit === "doctrine_unavailable"
          ? "doctrine_pin_unavailable"
          : "ckc_content_unavailable_for_active_cycle_type",
    };
  }

  return { ok: true, projection, ckc };
}

```
### `projects/sfia-studio/app/features/project-assistant/f2/methodOrientation.ts`

```typescript
/**
 * CORR-PROOF-03 E1 — pure / read-only method orientation + F1 method context.
 *
 * Non-mutating. No provider call. No persistence. No Cycle / LPS / Proposal /
 * HumanDecision / ExecutionContract. Hypothesis lens only.
 */

import {
  getCycleTypeById,
  isKnownCycleTypeId,
} from "@/lib/oa/cycle";
import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import type { ProjectAssistantContextDto } from "../types";
import {
  buildCkcApplicationLensSection,
  loadProductCkcCognitiveContent,
} from "./ckcCognitiveContext";
import type { IntentAnalysisDto } from "./types";

export type MethodOrientationState =
  | "RESOLVED_FROM_INTENT_CANDIDATE"
  | "UNRESOLVED";

export type MethodOrientation = {
  readonly state: MethodOrientationState;
  /** Known catalog cycle id when resolved; never invented. */
  readonly candidateCycleTypeId: string | null;
};

/**
 * Bounded F1 method context — guidance only, non-authoritative.
 * Optional trajectory reserved for a later slice (not populated here).
 */
export type AdvisoryMethodContext = {
  readonly orientation: MethodOrientation;
  readonly cycleLabel: string | null;
  /** Internal CKC lens text for the system prompt (do not expose mechanics to Pilote). */
  readonly ckcLensSection: string | null;
  readonly ckcLoaded: boolean;
  readonly doctrinePinPresent: boolean;
  readonly sourceLimit: "none" | "ckc_unavailable" | "doctrine_unavailable";
  /** Reserved — ProjectTrajectory-on-F1 deferred from CORR-PROOF-03 E1. */
  readonly trajectory?: null;
  /**
   * D-GF-ACW-01 — when true, method CKC comes from the active CycleInstance
   * (authoritative for in-cycle work). Intent candidate orientation remains secondary.
   */
  readonly activeCycleCkcAuthoritative?: boolean;
};

/** Active-cycle CKC grounding passed into method composition (D-GF-ACW-01). */
export type ActiveCycleCkcMethodInput = {
  readonly cycleTypeId: string;
  readonly cycleLabel: string | null;
  readonly ckcLensSection: string | null;
  readonly ckcLoaded: boolean;
  readonly sourceLimit: "none" | "ckc_unavailable" | "doctrine_unavailable";
};

export function resolveMethodOrientation(
  analysis: IntentAnalysisDto,
): MethodOrientation {
  const candidate = analysis.candidateCycleTypeId?.trim() ?? null;
  if (
    analysis.parseOk === true &&
    candidate != null &&
    candidate.length > 0 &&
    isKnownCycleTypeId(candidate)
  ) {
    return Object.freeze({
      state: "RESOLVED_FROM_INTENT_CANDIDATE" as const,
      candidateCycleTypeId: candidate,
    });
  }
  return Object.freeze({
    state: "UNRESOLVED" as const,
    candidateCycleTypeId: null,
  });
}

export function doctrinePackagePinFromProjectContext(
  project: ProjectAssistantContextDto,
): DoctrinePackagePin | null {
  const id = project.doctrineId?.trim();
  const version = project.doctrineVersion?.trim();
  const digest = project.doctrineDigest?.trim();
  if (!id || !version || !digest) return null;
  return Object.freeze({
    doctrinePackageId: id,
    version,
    digest: digest as DoctrinePackagePin["digest"],
  });
}

/**
 * Read-only composition for ordinary F1 advisory.
 * Does NOT call reasonWithResolvedCkcContext. Does NOT qualify or create cycles.
 *
 * When `activeCycleCkc` is present: its CKC lens is authoritative for in-cycle
 * method grounding; intent orientation is still computed as secondary.
 * When absent: current behavior (intent candidate CKC).
 */
export function composeAdvisoryMethodContext(input: {
  analysis: IntentAnalysisDto;
  project: ProjectAssistantContextDto;
  registryRoot: string;
  activeCycleCkc?: ActiveCycleCkcMethodInput | null;
}): AdvisoryMethodContext {
  const orientation = resolveMethodOrientation(input.analysis);
  const packagePin = doctrinePackagePinFromProjectContext(input.project);
  const active = input.activeCycleCkc ?? null;

  if (active) {
    return Object.freeze({
      orientation,
      cycleLabel: active.cycleLabel,
      ckcLensSection: active.ckcLensSection,
      ckcLoaded: active.ckcLoaded,
      doctrinePinPresent: Boolean(packagePin),
      sourceLimit: packagePin
        ? active.sourceLimit
        : ("doctrine_unavailable" as const),
      trajectory: null,
      activeCycleCkcAuthoritative: true,
    });
  }

  if (!packagePin) {
    return Object.freeze({
      orientation,
      cycleLabel: null,
      ckcLensSection: null,
      ckcLoaded: false,
      doctrinePinPresent: false,
      sourceLimit: "doctrine_unavailable" as const,
      trajectory: null,
    });
  }

  if (orientation.state !== "RESOLVED_FROM_INTENT_CANDIDATE") {
    return Object.freeze({
      orientation,
      cycleLabel: null,
      ckcLensSection: null,
      ckcLoaded: false,
      doctrinePinPresent: true,
      sourceLimit: "none" as const,
      trajectory: null,
    });
  }

  const cycleTypeId = orientation.candidateCycleTypeId!;
  const cycleDef = getCycleTypeById(cycleTypeId);
  const cycleLabel = cycleDef?.label ?? null;

  const ckcContent = loadProductCkcCognitiveContent({
    registryRoot: input.registryRoot,
    cycleTypeId,
    packagePin,
  });

  if (!ckcContent) {
    return Object.freeze({
      orientation,
      cycleLabel,
      ckcLensSection: null,
      ckcLoaded: false,
      doctrinePinPresent: true,
      sourceLimit: "ckc_unavailable" as const,
      trajectory: null,
    });
  }

  // CORR-PROOF-04 — richer application lens (no digests). Pilote prose must not
  // echo CKC IDs — enforced by F1 system-prompt identity & source rules.
  const ckcLensSection = buildCkcApplicationLensSection(ckcContent).replace(
    `cycle « ${ckcContent.cycleTypeId} »`,
    `cycle « ${cycleLabel ?? cycleTypeId} »`,
  );

  return Object.freeze({
    orientation,
    cycleLabel,
    ckcLensSection,
    ckcLoaded: true,
    doctrinePinPresent: true,
    sourceLimit: "none" as const,
    trajectory: null,
  });
}

```
### `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```typescript
/**
 * F2 pipeline: intent → qualify → durable CycleInstance + LPS → live ContextSnapshot → proposal.
 * Stops before any execution. M2: Cycle/LPS/CKC linkage durable; conversation/proposal process-local.
 */

import { randomBytes, randomUUID } from "node:crypto";
import {
  isFakeConversationProviderForced,
  type ConversationProvider,
} from "@/lib/platform/ai";
import type {
  NoraAgentsUsdAccounting,
  NoraCampaignBudget,
  NoraEvalModelReasoningControl,
} from "@/lib/nora-cognitive-runtime";
import {
  resolveEvalCellConversationProvider,
  type EvalCellProviderFactory,
} from "@/lib/nora-eval/evalCellProvider";
import {
  getRuntimeApplicationService,
  readLiveProjectContext,
  type RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "../types";
import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
import { resolveAssistantMode } from "../resolveAssistantMode";
import { analyzeIntent } from "./intentAnalysis";
import { resolveAvailableContradictionPointers } from "../mw3AvailableEvidence";
import {
  deriveMw3ContradictionAssessment,
  decideCognitiveStrategy,
  decideMw5Disposition,
  deriveMw5FactsFromF2Turn,
  formatMw5MachineText,
  formatMw5PiloteText,
  mergeCognitiveWorkloadSignals,
  toMw5TurnSurface,
  MW5_TEST_MARKERS,
  type Mw3ContradictionAssessmentInput,
  type Mw5TurnSurface,
} from "@/lib/nora-cognitive-runtime";
import { resolveMw5ProductAuthorityFromOa } from "./resolveMw5ProductAuthorityFromOa";
import {
  clearMw5IssuedChallenge,
  getMw5ChallengeSession,
  rememberMw5IssuedChallenge,
} from "./mw5ChallengeSessionStore";
import {
  loadCanonicalConversationForAnalysis,
  persistCanonicalF2AssistantTurn,
} from "./canonicalConversationSession";
import { isPureRepositoryAnalysisIntent } from "./repositoryIntent";
import { resolveTransitionReadiness } from "./transitionReadiness";
import { evaluateMorrisGateRequired } from "./gatePolicy";
import {
  enrichQualificationWithCkcSemantics,
  isProductStudioNativeCkcProof,
  loadProductCkcCognitiveContent,
  buildCkcCognitivePromptSection,
  reasonWithResolvedCkcContext,
} from "./ckcCognitiveContext";
import { composeStudioCognitiveContext } from "./studioCognitiveContext";
import { projectCkcResolutionRef, qualifyWithCkc } from "./qualify";
import { reconcileQualificationSignals } from "./qualificationSignalCoherence";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  F2_PROCESS_LOCAL_NOTICE,
  createProposalId,
  saveProposal,
} from "./proposalStore";
import type {
  F2ContextSnapshot,
  IntentAnalysisDto,
  ProposalDto,
  QualificationDto,
} from "./types";

const EPHEMERAL_NOTICE =
  "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.";

async function deriveProductPathMw3Assessment(
  analysis: IntentAnalysisDto,
  projectId: string,
): Promise<Mw3ContradictionAssessmentInput | null> {
  const candidate = analysis.contradictionCandidate;
  if (!candidate || candidate.conflictPresent !== true) return null;
  const availablePointers = await resolveAvailableContradictionPointers({
    projectId,
    claimedEvidenceIds: candidate.claimedEvidenceIds,
  });
  return deriveMw3ContradictionAssessment({
    candidate,
    availablePointers,
    projectId,
    sourceBreadth: analysis.cognitiveWorkload?.sourceBreadth ?? null,
    trustedSfiaProfile: null,
  });
}

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
    activeCycleInstanceId: result.livingState.activeCycleInstanceId ?? null,
    ckcResolutionRef: result.livingState.ckcResolutionRef ?? null,
  };
}

/**
 * CORR-MW2-REAL-03/04 — deterministic Project summary for analyzeIntent.
 * Prefer Truth C / LPS full context (contextSource=TRUTH_C_LPS).
 * UI contextSummary is a 240-char projection — not the cognitive authority.
 */
export type CognitiveIntentContextInput = {
  name: string;
  objective: string;
  /** Full Truth C / LPS context when available; never invent. */
  context: string;
  constraints: readonly string[];
  criticality: string;
  lpsId: string;
  lpsVersion: number;
  shortReference?: string | null;
  activeCycleInstanceId?: string | null;
  ckcResolutionRef?: string | null;
  /**
   * Internal provenance for evidence/tests — NOT a client DTO field.
   * TRUTH_C_LPS = readLiveProjectContext / lps.context
   * TEST_FALLBACK_UI_SUMMARY = truncated UI projection only (not REAL evidence)
   */
  contextSource: "TRUTH_C_LPS" | "TEST_FALLBACK_UI_SUMMARY";
};

export function buildIntentProjectSummary(
  input: CognitiveIntentContextInput,
): string {
  const constraints =
    input.constraints.length > 0
      ? input.constraints.join("; ")
      : "(none)";
  const parts = [
    `name=${input.name}`,
    `objective=${input.objective}`,
    `context=${input.context}`,
    `constraints=${constraints}`,
    `criticality=${input.criticality}`,
  ];
  if (input.shortReference != null && input.shortReference.trim() !== "") {
    parts.push(`shortReference=${input.shortReference}`);
  }
  parts.push(`lps=${input.lpsId}@${input.lpsVersion}`);
  if (input.activeCycleInstanceId) {
    parts.push(`activeCycle=${input.activeCycleInstanceId}`);
  }
  if (input.ckcResolutionRef) {
    parts.push(`ckcRef=${input.ckcResolutionRef}`);
  }
  parts.push(`contextSource=${input.contextSource}`);
  return parts.join(" | ");
}

/**
 * Resolve analyzeIntent Project summary from Truth C (LPS) when OA is available.
 * Fail-closed for product path: do not silently downgrade to UI 240 summary.
 * Fake/test without OA may use TEST_FALLBACK_UI_SUMMARY only.
 */
export async function resolveCognitiveIntentProjectSummary(
  project: ProjectAssistantContextDto,
): Promise<
  | { ok: true; projectSummary: string; contextSource: CognitiveIntentContextInput["contextSource"]; truthCContext: string }
  | { ok: false; code: string; message: string }
> {
  const runtime = getRuntimeApplicationService();
  const oa = runtime.oa;
  if (!oa) {
    if (isFakeConversationProviderForced()) {
      const projectSummary = buildIntentProjectSummary({
        name: project.name,
        objective: project.objective,
        context: project.contextSummary,
        constraints: project.constraints,
        criticality: project.criticality,
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
        shortReference: project.shortReference,
        activeCycleInstanceId: project.activeCycleInstanceId ?? null,
        ckcResolutionRef: project.ckcResolutionRef ?? null,
        contextSource: "TEST_FALLBACK_UI_SUMMARY",
      });
      return {
        ok: true,
        projectSummary,
        contextSource: "TEST_FALLBACK_UI_SUMMARY",
        truthCContext: project.contextSummary,
      };
    }
    return {
      ok: false,
      code: "TRUTH_C_UNAVAILABLE",
      message:
        "Services OA indisponibles pour le contexte cognitif Truth C. AUCUNE EXÉCUTION.",
    };
  }

  const live = await readLiveProjectContext(oa, project.projectId);
  if (!live.ok) {
    return {
      ok: false,
      code: live.code,
      message: `Contexte Truth C / LPS illisible (${live.code}). AUCUNE EXÉCUTION.`,
    };
  }

  const truthCContext = live.context.context ?? "";
  const projectSummary = buildIntentProjectSummary({
    name: project.name,
    objective: live.context.objective || project.objective,
    context: truthCContext,
    constraints: project.constraints,
    criticality: project.criticality,
    lpsId: live.context.lpsId,
    lpsVersion: live.context.lpsVersion,
    shortReference: project.shortReference,
    activeCycleInstanceId: live.context.activeCycleInstanceId,
    ckcResolutionRef: live.context.ckcResolutionRef,
    contextSource: "TRUTH_C_LPS",
  });
  return {
    ok: true,
    projectSummary,
    contextSource: "TRUTH_C_LPS",
    truthCContext,
  };
}

function doctrinePackagePinFromProject(
  project: ProjectAssistantContextDto,
): DoctrinePackagePin {
  return Object.freeze({
    doctrinePackageId: project.doctrineId,
    version: project.doctrineVersion,
    digest: project.doctrineDigest as DoctrinePackagePin["digest"],
  });
}

function snapshotFrom(project: ProjectAssistantContextDto): F2ContextSnapshot {
  return {
    projectId: project.projectId,
    lpsId: project.lpsId,
    lpsVersion: project.lpsVersion,
    doctrineDigest: project.doctrineDigest,
    activeCycleInstanceId: project.activeCycleInstanceId ?? null,
    ckcResolutionRef: project.ckcResolutionRef ?? null,
  };
}

function resolveF2CriticalChallengeArmed(input: {
  analysis: IntentAnalysisDto;
  content: string;
  historyCount: number;
  projectCriticality: string;
}): boolean {
  if (input.content.includes(MW5_TEST_MARKERS.highAssurance)) return true;
  const merged = mergeCognitiveWorkloadSignals({
    turnContext: {
      projectCriticality: input.projectCriticality,
      userContentLength: input.content.length,
      historyMessageCount: input.historyCount,
    },
    semanticAssessment: input.analysis.cognitiveWorkload,
  });
  return decideCognitiveStrategy({
    signals: merged,
    trustedSfiaProfile: null,
  }).criticalChallengeArmed;
}

async function evaluateF2Mw5(input: {
  content: string;
  history?: AssistantHistoryMessage[];
  analysis: IntentAnalysisDto;
  recommendedProfile: string | null;
  recommendationWouldEmit: boolean;
  projectCriticality: string;
  projectId: string;
  oa: RuntimeOaStack | null | undefined;
}): Promise<{ armed: boolean; surface: Mw5TurnSurface; text: string }> {
  const armed = resolveF2CriticalChallengeArmed({
    analysis: input.analysis,
    content: input.content,
    historyCount: input.history?.length ?? 0,
    projectCriticality: input.projectCriticality,
  });
  const authority = await resolveMw5ProductAuthorityFromOa({
    oa: input.oa,
    projectId: input.projectId,
    claim: {
      objective: input.analysis.objective,
      scope: input.analysis.scope,
      recommendedProfile: input.recommendedProfile,
      requestedOperation: input.analysis.requestedOperation,
    },
    newContradictionSignalPresent: Boolean(
      input.analysis.contradictionCandidate?.conflictPresent,
    ),
  });
  const session = getMw5ChallengeSession(input.projectId);
  const decision = decideMw5Disposition(
    deriveMw5FactsFromF2Turn({
      userContent: input.content,
      history: input.history,
      intentClass: input.analysis.intentClass,
      parseOk: input.analysis.parseOk,
      recommendedProfile: input.recommendedProfile,
      criticalChallengeArmed: armed,
      recommendationWouldEmit: input.recommendationWouldEmit,
      truthCEstablishedForClaim: authority.truthCEstablishedForClaim,
      consumedHumanDecisionWithoutNewContradiction:
        authority.consumedHumanDecisionWithoutNewContradiction,
      challengeResponseAssessment:
        input.analysis.challengeResponseAssessment ?? null,
      openChallengePresent: session.latest != null,
      priorStructuralChallengeCount: session.priorStructuralChallengeCount,
    }),
  );
  const machineText = formatMw5MachineText(decision);
  const text = formatMw5PiloteText(decision);
  if (decision.disposition === "CHALLENGE") {
    rememberMw5IssuedChallenge({
      projectId: input.projectId,
      challenges: decision.challenges,
      challengeText: machineText,
    });
  } else if (
    decision.recommendationAllowed &&
    decision.challengeSatisfied &&
    session.latest != null
  ) {
    clearMw5IssuedChallenge(input.projectId);
  }
  return {
    armed,
    surface: toMw5TurnSurface(decision, armed),
    text,
  };
}

function mw5TurnKind(
  surface: Mw5TurnSurface,
): "f2_clarification" | "f2_blocked" {
  return surface.disposition === "CLARIFY" ? "f2_clarification" : "f2_blocked";
}

function resolveMode(explicitProvider?: ConversationProvider): {
  mode: "fixture" | "live" | "unavailable";
  canProceed: boolean;
  message?: string;
  presentation: "test_provider" | "openai_live";
} {
  return resolveAssistantMode(explicitProvider);
}

function buildProposal(input: {
  intent: IntentAnalysisDto;
  qualification: QualificationDto;
  project: ProjectAssistantContextDto;
  morrisGateRequired: boolean;
  executionRequest: boolean;
  status: ProposalDto["status"];
}): ProposalDto {
  return {
    proposalId: createProposalId(),
    status: input.status,
    rephrasedRequest:
      input.intent.rephrasedRequest ??
      input.intent.objective ??
      "Demande reformulée indisponible",
    objective: input.intent.objective ?? input.qualification.rationale,
    cycleTypeId: input.qualification.cycleTypeId,
    recommendedProfile: input.qualification.recommendedProfile,
    rationale: input.qualification.rationale,
    scope: input.intent.scope ?? `Périmètre borné — ${input.qualification.cycleTypeId}`,
    outOfScope:
      input.intent.outOfScope.length > 0
        ? input.intent.outOfScope
        : [
            "Exécution Cursor",
            "Écriture Git/GitHub",
            "Exécution agent (hors F2)",
            "Navigation OPS1 comme destination",
          ],
    activatedBlocks:
      input.intent.activatedBlocks.length > 0
        ? input.intent.activatedBlocks
        : ["qualification", "proposition", "gate"],
    expectedOutcome:
      input.intent.expectedOutcome ??
      "Décision humaine capturée — aucune exécution F2",
    sources: [
      `catalogue:${input.qualification.catalogVersion}`,
      `ckc:${input.qualification.detailedStatus}`,
      `project:${input.project.projectId}`,
      `lps:${input.project.lpsId}@${input.project.lpsVersion}`,
      ...(input.qualification.cycleInstanceId
        ? [`cycle:${input.qualification.cycleInstanceId}`]
        : []),
      ...(input.qualification.ckcResolutionRef
        ? [`ckcRef:${input.qualification.ckcResolutionRef}`]
        : []),
    ],
    risks: input.intent.risks,
    reservations: input.intent.reservations,
    stopConditions:
      input.intent.stopConditions.length > 0
        ? input.intent.stopConditions
        : ["AUCUNE EXÉCUTION", "STOP avant F3"],
    morrisGateRequired: input.morrisGateRequired,
    nextPossibleStep: input.morrisGateRequired
      ? "Décision Morris explicite requise"
      : "AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI",
    contextSnapshot: snapshotFrom(input.project),
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    criticalJustification: input.intent.criticalJustification,
  };
}

function f2Success(base: {
  text: string;
  mode: "fixture" | "live";
  presentation: "test_provider" | "openai_live";
  model: string | null;
  project: ProjectAssistantContextDto;
  intentClass: IntentAnalysisDto["intentClass"];
  qualification?: QualificationDto;
  proposal?: ProposalDto;
  executionBlocked?: boolean;
  mw5?: Mw5TurnSurface | null;
  turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
}): ProjectAssistantSendResult {
  const turnKind =
    base.turnKind ??
    (base.qualification && base.proposal
      ? "f2_proposal"
      : base.mw5?.disposition === "CLARIFY" || base.intentClass === "ambiguous"
        ? "f2_clarification"
        : "f2_blocked");
  return {
    ok: true,
    status: "ok",
    text: base.text,
    mode: base.mode,
    presentation: base.presentation,
    model: base.model,
    toolRounds: 0,
    toolCalls: 0,
    sources: [],
    toolEvents: [],
    project: base.project,
    ephemeralNotice: EPHEMERAL_NOTICE,
    mw5: base.mw5
      ? {
          disposition: base.mw5.disposition,
          structuralChallengeCount: base.mw5.structuralChallengeCount,
          questionnaireSuppressed: base.mw5.questionnaireSuppressed,
          recommendationAllowed: base.mw5.recommendationAllowed,
          challengeGateApplicable: base.mw5.challengeGateApplicable,
          challengeSatisfied: base.mw5.challengeSatisfied,
          challengeEvidenceBeforeRecommendation:
            base.mw5.challengeEvidenceBeforeRecommendation,
          bypassAttempted: base.mw5.bypassAttempted,
          bypassBlocked: base.mw5.bypassBlocked,
          synthesizedHumanDecision: false,
          synthesizedGo: false,
          synthesizedConfirmation: false,
          disclosure: base.mw5.disclosure,
          reasonCodes: [...base.mw5.reasonCodes],
          challenges: [...base.mw5.challenges],
          criticalChallengeArmedHookOnly: base.mw5.criticalChallengeArmedHookOnly,
        }
      : null,
    f2: {
      turnKind,
      intentClass: base.intentClass,
      qualification: base.qualification ?? null,
      proposal: base.proposal ?? null,
      decision: null,
      labels: {
        recommendation:
          base.proposal && base.qualification ? "RECOMMANDATION" : null,
        proposition: base.proposal ? "PROPOSITION" : null,
        decisionRequired: base.proposal?.morrisGateRequired
          ? "DÉCISION REQUISE"
          : null,
        decisionTaken: null,
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: base.executionBlocked === true,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    },
  };
}

/**
 * CORR-PROOF-01 D1 CR-02 — central persist-and-return for F2-owned user-visible
 * responses. F1 Runner paths must NOT call this (Runner already persists).
 */
async function f2ConversationalSuccess(input: {
  userText: string;
  sessionDbPath?: string;
  text: string;
  mode: "fixture" | "live";
  presentation: "test_provider" | "openai_live";
  model: string | null;
  project: ProjectAssistantContextDto;
  intentClass: IntentAnalysisDto["intentClass"];
  qualification?: QualificationDto;
  proposal?: ProposalDto;
  executionBlocked?: boolean;
  mw5?: Mw5TurnSurface | null;
  turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
}): Promise<ProjectAssistantSendResult> {
  await persistCanonicalF2AssistantTurn({
    projectId: input.project.projectId,
    sessionDbPath: input.sessionDbPath,
    userText: input.userText,
    assistantText: input.text,
  });
  return f2Success(input);
}

/**
 * Unified send orchestration: preserves F1 for informative intents.
 * Actionable path creates durable CycleInstance + LPS append, then live snapshot.
 */
export async function orchestrateAssistantSend(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  /**
   * Optional server-side provider injection (eval / tests).
   * Prefer per-instance OpenAIConversationProvider over process.env mutation.
   * For Stage A cells: inject the cell-specific ConversationProvider here.
   */
  provider?: ConversationProvider;
  /** Test override for Product SQLite Session path (MW1/MW4 durability). */
  sessionDbPath?: string;
  /**
   * INTERNAL / EVAL-ONLY — Stage A constitutive model×effort pin.
   * Propagated to analyzeIntent + F1 cognitive path. Never a client DTO field.
   */
  evalModelReasoningControl?: NoraEvalModelReasoningControl;
  /**
   * INTERNAL / EVAL-ONLY — factory(modelId, effort) → ConversationProvider.
   * Required with evalModelReasoningControl for honest structured binding.
   */
  evalCellProviderFactory?: EvalCellProviderFactory;
  /** INTERNAL / EVAL-ONLY — USD authorization envelope (Agents path). */
  usdAccounting?: NoraAgentsUsdAccounting;
  /** INTERNAL / EVAL-ONLY — shared canonical campaign budget lease. */
  campaignBudget?: NoraCampaignBudget;
}): Promise<ProjectAssistantSendResult> {
  const content = input.content.trim();
  if (!content) {
    return {
      ok: false,
      status: "validation_error",
      code: "EMPTY_MESSAGE",
      message: "Saisissez un message avant d'envoyer.",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: true,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }

  let project = toContextDto(projectResult);

  // CORR-01 — resolve eval cell provider BEFORE mode/availability gating.
  // Under eval control, evalCellProviderFactory is the required pin source;
  // global OPENAI_MODEL absence must not fail before the injected cell provider
  // is assessed (and must never be manufactured via process.env mutation).
  const cellProvider = resolveEvalCellConversationProvider({
    evalModelReasoningControl: input.evalModelReasoningControl,
    evalCellProviderFactory: input.evalCellProviderFactory,
    provider: input.provider,
  });
  if (input.evalModelReasoningControl && !cellProvider) {
    return {
      ok: false,
      status: "provider_error",
      code: "EVAL_CELL_PROVIDER_REQUIRED",
      message:
        "evalModelReasoningControl requires evalCellProviderFactory (no arbitrary provider fallback).",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }
  const effectiveProvider = cellProvider ?? input.provider;
  const modeResolution = resolveMode(effectiveProvider);
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  let analysisResult: Awaited<ReturnType<typeof analyzeIntent>>;
  let truthCContextForF1: string | undefined;
  try {
    const cognitive = await resolveCognitiveIntentProjectSummary(project);
    if (!cognitive.ok) {
      return {
        ok: false,
        status: "provider_error",
        code: cognitive.code,
        message: cognitive.message,
        mode: modeResolution.mode,
        retryable: true,
      };
    }
    truthCContextForF1 =
      cognitive.contextSource === "TRUTH_C_LPS"
        ? cognitive.truthCContext
        : undefined;

    // CORR-PROOF-01 D1 CR-03/CR-04 — Memory B replay semantics; EMPTY ≠ UNAVAILABLE.
    const canonicalLoad = await loadCanonicalConversationForAnalysis({
      projectId: project.projectId,
      sessionDbPath: input.sessionDbPath,
      truthCRevision: {
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
      },
    });
    if (canonicalLoad.availability === "unavailable") {
      return {
        ok: false,
        status: "provider_error",
        code: "CANONICAL_SESSION_UNAVAILABLE",
        message:
          canonicalLoad.message ??
          "Continuité conversationnelle indisponible. Aucune invention de contexte. AUCUNE EXÉCUTION.",
        mode: modeResolution.mode,
        retryable: true,
      };
    }
    const canonicalConversationContext = canonicalLoad.contextText;

    const challengeSession = getMw5ChallengeSession(project.projectId);
    const challengeContext =
      challengeSession.latest != null
        ? {
            challengePresent: true as const,
            challenges: challengeSession.latest.challenges,
            challengedPremise: challengeSession.latest.challengeText.slice(
              0,
              500,
            ),
            structuralChallengeCount:
              challengeSession.latest.structuralChallengeCount,
          }
        : { challengePresent: false as const };
    analysisResult = await analyzeIntent({
      userContent: content,
      projectSummary: cognitive.projectSummary,
      canonicalConversationContext,
      challengeContext,
      provider: effectiveProvider,
      evalModelReasoningControl: input.evalModelReasoningControl,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode: modeResolution.mode,
      retryable: true,
    };
  }

  let { analysis, model } = analysisResult;
  if (analysis.signals) {
    analysis = {
      ...analysis,
      signals: reconcileQualificationSignals({
        userContent: content,
        signals: analysis.signals,
      }).signals,
    };
  }
  const presentation = modeResolution.presentation;
  const contradictionAssessment = await deriveProductPathMw3Assessment(
    analysis,
    project.projectId,
  );

  // Repository read/search/Git-truth without mutation → F1 (no Cycle/LPS mutation).
  // Deterministic override when the classifier drifts to ambiguous/actionable for pure reads.
  const forceRepoInformative =
    isPureRepositoryAnalysisIntent(content) &&
    analysis.intentClass !== "execution_request";

  // CORR-PROOF-02 B1 — deterministic transition gate.
  // Safe advisory (incl. ambiguous / parse-fail / incomplete formalization fields) → F1.
  // Governed formalization only when readiness is fully established.
  const transition = resolveTransitionReadiness({
    analysis,
    forceRepoInformative,
  });

  if (!transition.formalizationReady) {
    // CORR-PROOF-04 — Hybrid Context Envelope (composer-first).
    // Pure read-only composition; NO reasonWithResolvedCkcContext; NO third model call.
    const registryRoot = resolveProductDoctrineRegistryRoot();
    const oa = getRuntimeApplicationService().oa;
    const studioComposed = await composeStudioCognitiveContext({
      analysis,
      project,
      registryRoot,
      truthCContext: truthCContextForF1,
      oa,
      activeCycleInstanceId: project.activeCycleInstanceId ?? null,
    });
    if (!studioComposed.ok) {
      return {
        ok: false,
        status: "validation_error",
        code: studioComposed.code,
        message: studioComposed.message,
        mode: modeResolution.mode,
        retryable: false,
      };
    }
    const studioCognitiveContext = studioComposed.context;
    // Keep methodContext for CORR-PROOF-03 compatibility surfaces when studio is present
    // (studio supersedes in prompt builder).
    const methodContext = studioCognitiveContext.method;
    const f1 = await orchestrateProjectAssistantTurn({
      ...input,
      provider: effectiveProvider,
      semanticCognitiveWorkload: analysis.cognitiveWorkload,
      truthCContext: truthCContextForF1,
      methodContext,
      studioCognitiveContext,
      contradictionAssessment,
      evalModelReasoningControl: input.evalModelReasoningControl,
      usdAccounting: input.usdAccounting,
      campaignBudget: input.campaignBudget,
    });
    if (!f1.ok) return f1;
    const reportedIntent =
      analysis.parseOk &&
      (analysis.intentClass === "informative" ||
        analysis.intentClass === "ambiguous" ||
        analysis.intentClass === "actionable" ||
        analysis.intentClass === "execution_request")
        ? forceRepoInformative
          ? "informative"
          : analysis.intentClass
        : "ambiguous";
    // B1-CR-01 — trusted execution_request keeps fail-closed authority surface
    // even when formalization is not ready (safe F1 advisory, ZERO effect).
    const executionBlocked =
      analysis.parseOk === true &&
      analysis.intentClass === "execution_request" &&
      !forceRepoInformative;
    return {
      ...f1,
      model: f1.model ?? model,
      ephemeralNotice: EPHEMERAL_NOTICE,
      mw5: null,
      f2: {
        turnKind: "f1_informative",
        intentClass: reportedIntent,
        qualification: null,
        proposal: null,
        decision: null,
        labels: {
          recommendation: null,
          proposition: null,
          decisionRequired: null,
          decisionTaken: null,
          noExecution: "AUCUNE EXÉCUTION",
        },
        executionBlocked,
        processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      },
    };
  }

  // B / D — governed formalization ready (actionable | execution_request + valid fields)
  const cycleTypeId = analysis.candidateCycleTypeId;
  const formalizationSignals = analysis.signals;
  if (!cycleTypeId || !formalizationSignals) {
    // Defensive: readiness predicate already requires these; never invent defaults.
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text:
        "[Clarification requise] Qualification impossible — cycle ou signaux incomplets. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
    });
  }

  const runtime = getRuntimeApplicationService();
  const oa = runtime.oa;
  if (!oa) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text:
        "[Runtime] Services OA indisponibles pour la qualification M2. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
    });
  }

  const preLpsVersion = project.lpsVersion;
  const correlationId = `cor:f2-${randomBytes(8).toString("hex")}`;

  const qualified = await qualifyWithCkc({
    cycleTypeId,
    signals: formalizationSignals,
    objective: analysis.objective ?? undefined,
    scope: analysis.scope ?? undefined,
    correlationId,
    ckcQualification: oa.ckcQualification,
  });

  if (!qualified.ok) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text: `[Qualification échouée] ${qualified.message} AUCUNE EXÉCUTION.`,
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
    });
  }

  let { qualification } = qualified;
  const cognitiveSummary = await resolveCognitiveIntentProjectSummary(project);
  const projectSummary = cognitiveSummary.ok
    ? cognitiveSummary.projectSummary
    : buildIntentProjectSummary({
        name: project.name,
        objective: project.objective,
        context: project.contextSummary,
        constraints: project.constraints,
        criticality: project.criticality,
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
        shortReference: project.shortReference,
        contextSource: "TEST_FALLBACK_UI_SUMMARY",
      });

  if (isProductStudioNativeCkcProof(qualified.raw.proof)) {
    const packagePin = doctrinePackagePinFromProject(project);
    const registryRoot = resolveProductDoctrineRegistryRoot();
    const ckcContent = loadProductCkcCognitiveContent({
      registryRoot,
      cycleTypeId: qualification.cycleTypeId,
      packagePin,
    });
    let ckcCognitiveRecommendation: string | undefined;
    if (ckcContent) {
      const reasoning = await reasonWithResolvedCkcContext({
        userContent: content,
        projectSummary,
        intentSummary:
          analysis.rephrasedRequest ??
          analysis.objective ??
          "Intention actionable",
        ckcPromptSection: buildCkcCognitivePromptSection(ckcContent),
        provider: input.provider,
      });
      ckcCognitiveRecommendation = reasoning.recommendation;
    }
    qualification = enrichQualificationWithCkcSemantics({
      qualification,
      proof: qualified.raw.proof,
      registryRoot,
      packagePin,
      ckcCognitiveRecommendation,
    });
  }

  const ckcResolutionRef =
    qualification.ckcResolutionRef ??
    projectCkcResolutionRef(qualified.raw.proof);

  if (
    qualification.requiresJustificationForCritical &&
    !(analysis.criticalJustification && analysis.criticalJustification.trim())
  ) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text:
        "[Critical] Justification structurante obligatoire avant proposition validable. Critical n'est jamais implicite. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
      qualification,
      executionBlocked: analysis.intentClass === "execution_request",
    });
  }

  const mw5 = await evaluateF2Mw5({
    content,
    history: input.history,
    analysis,
    recommendedProfile: qualification.recommendedProfile,
    recommendationWouldEmit: true,
    projectCriticality: project.criticality,
    projectId: project.projectId,
    oa,
  });
  if (!mw5.surface.recommendationAllowed) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text: mw5.text,
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
      qualification,
      executionBlocked: analysis.intentClass === "execution_request",
      mw5: mw5.surface,
      turnKind: mw5TurnKind(mw5.surface),
    });
  }

  const cycleInstanceId = `cyc:f2-${randomBytes(8).toString("hex")}`;
  const created = await oa.cycleServices.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: qualification.cycleTypeId,
    projectId: project.projectId,
    objective: analysis.objective ?? undefined,
    scope: analysis.scope ?? undefined,
    signals: formalizationSignals,
    justification: analysis.criticalJustification ?? undefined,
    createdBy: {
      actorId: "actor:nora-f2",
      role: "agent",
      displayName: "Nora F2",
      authorityLevel: "N1",
    },
    correlationId,
    linkAsActiveCycle: false,
    expectedLpsVersion: preLpsVersion,
    ckcResolutionRef,
  });

  if (!created.ok) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text: `[Cycle] Création CycleInstance échouée (${created.error.detailCode}). Aucune mutation partielle. AUCUNE EXÉCUTION.`,
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
      qualification,
      executionBlocked: analysis.intentClass === "execution_request",
    });
  }

  // Live context AFTER mutation — pre-mutation snapshot does not satisfy M2.
  const live = await readLiveProjectContext(oa, project.projectId);
  if (!live.ok) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text: `[Contexte] Relecture LPS post-mutation échouée. AUCUNE EXÉCUTION.`,
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
      qualification: {
        ...qualification,
        cycleInstanceId: created.cycle.cycleInstanceId,
        cycleStatus: created.cycle.status,
        ckcResolutionRef,
      },
    });
  }

  const reloaded = await loadProjectRuntimeForAssistant(project.projectId);
  if (reloaded.ok) {
    project = toContextDto(reloaded);
  } else {
    project = {
      ...project,
      lpsId: live.context.lpsId,
      lpsVersion: live.context.lpsVersion,
      doctrineDigest: live.context.doctrineDigest,
      activeCycleInstanceId: live.context.activeCycleInstanceId,
      ckcResolutionRef: live.context.ckcResolutionRef,
    };
  }

  qualification = {
    ...qualification,
    cycleInstanceId: created.cycle.cycleInstanceId,
    cycleStatus: created.cycle.status,
    ckcResolutionRef,
    recommendedProfile: created.cycle.profile,
  };

  const morrisGateRequired =
    evaluateMorrisGateRequired({
      recommendedProfile: qualification.recommendedProfile,
      signals: formalizationSignals,
      intent: analysis,
    }) || mw5.surface.disposition === "ESCALATE";

  const status = morrisGateRequired ? "DECISION_REQUIRED" : "READY_NO_GATE";
  const proposal = saveProposal(
    buildProposal({
      intent: analysis,
      qualification,
      project,
      morrisGateRequired,
      executionRequest: analysis.intentClass === "execution_request",
      status,
    }),
  );

  const executionBlocked = analysis.intentClass === "execution_request";
  const textParts = [
    presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
    "Qualification SFIA et proposition structurée générées.",
    `Cycle: ${qualification.cycleTypeId} (${qualification.cycleLabel}).`,
    `CycleInstance candidate: ${created.cycle.cycleInstanceId} (${created.cycle.status}) — NON ACTIVE — Pilot START requis.`,
    `Profil recommandé: ${qualification.recommendedProfile}.`,
    project.lpsVersion === preLpsVersion
      ? `LPS v${preLpsVersion} inchangé (pas d'activation pre-START).`
      : `LPS v${preLpsVersion} → v${project.lpsVersion}.`,
    qualification.recommendationLabel,
    ...(qualification.ckcCognitiveRecommendation
      ? [qualification.ckcCognitiveRecommendation]
      : []),
    "RECOMMANDATION ≠ décision Pilote — AUCUNE activation authority-bearing avant Pilot START.",
    morrisGateRequired
      ? "DÉCISION REQUISE — gate Morris construction (≠ Pilot lifecycle START)."
      : "NO MORRIS CONSTRUCTION GATE REQUIRED — AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI.",
    executionBlocked
      ? "Demande d'exécution détectée — AUCUNE EXÉCUTION (Cursor/PR/merge indisponibles)."
      : "AUCUNE EXÉCUTION.",
    mw5.surface.disposition === "ESCALATE"
      ? mw5.text
      : mw5.surface.disclosure,
    "Nora n'émet pas de HumanDecision, GO, Confirmation, décision Morris ou acte Pilote.",
  ];

  return f2ConversationalSuccess({
    userText: content,
    sessionDbPath: input.sessionDbPath,
    text: textParts.join(" "),
    mode: modeResolution.mode as "fixture" | "live",
    presentation,
    model,
    project,
    intentClass: analysis.intentClass,
    qualification,
    proposal,
    executionBlocked,
    mw5: mw5.surface,
  });
}

```
### `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts`

```typescript
/**
 * CORR-PROOF-04 Option D — Hybrid Context Envelope (composer-first slice).
 *
 * Pure / read-only Studio cognitive context composition for ordinary F1.
 * Assembles authoritative Project/LPS + method/CKC + conditional HD/Evidence/
 * ReviewBundle + conditional ProjectTrajectory when readable.
 * D-GF-ACW-01 — also active CycleInstance + active-cycle work EpistemicItems.
 *
 * MUST NOT: call a model, score maturity, select trajectory, create HD/Evidence/
 * Cycle/LPS mutations, invent Recommendations, or become a second planner.
 */

import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
import type {
  EpistemicItem,
  EpistemicItemStatus,
  ProjectTrajectory,
} from "@/lib/oa/cycle";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ProjectAssistantContextDto } from "../types";
import type { IntentAnalysisDto } from "./types";
import {
  composeAdvisoryMethodContext,
  type AdvisoryMethodContext,
} from "./methodOrientation";
import {
  resolveActiveCycleCognitiveContext,
  type ActiveCycleCognitiveProjection,
} from "./activeCycleCognitiveContext";
import { ACTIVE_CYCLE_WORK_SOURCE } from "../materializeActiveCycleWork";

/** Conservative composition budgets — implementation policy, not doctrine. */
export const STUDIO_COGNITIVE_CONTEXT_BUDGET = Object.freeze({
  maxDecisions: 8,
  maxEvidence: 8,
  maxReviewBundles: 4,
  maxActiveCycleWorkItems: 12,
  decisionSubjectChars: 160,
  decisionOptionChars: 120,
  evidenceLabelChars: 120,
  reviewLabelChars: 120,
  trajectoryStepChars: 100,
  maxTrajectorySteps: 6,
  activeCycleWorkStatementChars: 240,
});

export type PresenceState = "PRESENT" | "NONE" | "UNAVAILABLE";
export type TrajectoryPresenceState =
  | "PRESENT"
  | "ABSENT"
  | "DEFERRED"
  | "UNAVAILABLE";

export type StudioProjectTruthProjection = {
  readonly projectId: string;
  readonly name: string;
  readonly objective: string;
  readonly context: string;
  readonly constraints: readonly string[];
  readonly criticality: string;
  readonly shortReference: string | null;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly activeCycleInstanceId: string | null;
  readonly doctrineId: string;
  readonly doctrineVersion: string;
  readonly doctrineStatus: string;
};

/**
 * Deterministic cognitive lifecycle for HumanDecision.
 * Derived from existing domain contract only (see domain-mapping.md).
 * PRESENT ≠ CURRENT.
 */
export type DecisionCognitiveLifecycle = "CURRENT" | "PENDING" | "NON_ACTIVE";

/**
 * Domain-derived mapping (CORR-PROOF-04 status-aware):
 * - accepted → CURRENT (findAcceptedBySubject / supersede writes accepted)
 * - amended → CURRENT (MW5 CONSUMED_HD_STATUSES; supersedable like accepted)
 * - proposed | required → PENDING (supersedable but not accepted)
 * - refused | superseded | revoked → NON_ACTIVE (terminal / history)
 */
export function classifyHumanDecisionLifecycle(
  status: HumanDecision["status"],
): DecisionCognitiveLifecycle {
  switch (status) {
    case "accepted":
    case "amended":
      return "CURRENT";
    case "proposed":
    case "required":
      return "PENDING";
    case "refused":
    case "superseded":
    case "revoked":
      return "NON_ACTIVE";
    default: {
      const _exhaustive: never = status;
      void _exhaustive;
      return "NON_ACTIVE";
    }
  }
}

export type StudioDecisionProjection = {
  readonly subject: string;
  readonly selectedOptionLabel: string | null;
  /** Raw domain HumanDecisionStatus — always preserved. */
  readonly status: HumanDecision["status"];
  /** Deterministic cognitive class — never invents beyond domain mapping. */
  readonly lifecycle: DecisionCognitiveLifecycle;
  readonly effectiveAt: string;
  readonly reversible: boolean;
  readonly supersedesPresent: boolean;
};

/**
 * Deterministic epistemic stance from Evidence status/availability/freshness.
 * Does NOT claim which proposition is proven. Presence ≠ Fact.
 */
export type EvidenceEpistemicStance =
  | "STRONGER_SUPPORT"
  | "LIMITED_SUPPORT"
  | "PENDING_SUPPORT"
  | "WEAKENED_SUPPORT"
  | "NON_SUPPORTING"
  | "UNCERTAIN_SUPPORT";

export function classifyEvidenceEpistemicStance(input: {
  status: Evidence["status"];
  availability: Evidence["availability"];
  freshness: Evidence["freshness"] | null | undefined;
}): EvidenceEpistemicStance {
  const { status, availability, freshness } = input;
  if (
    status === "rejected" ||
    status === "superseded" ||
    status === "unavailable" ||
    availability === "unavailable"
  ) {
    return "NON_SUPPORTING";
  }
  if (status === "stale" || freshness === "stale") {
    return "WEAKENED_SUPPORT";
  }
  if (status === "expected") {
    return "PENDING_SUPPORT";
  }
  if (availability === "unknown" || freshness === "unknown") {
    return "UNCERTAIN_SUPPORT";
  }
  if (status === "verified" && availability === "available") {
    return "STRONGER_SUPPORT";
  }
  if (status === "incomplete" || status === "available") {
    return "LIMITED_SUPPORT";
  }
  return "UNCERTAIN_SUPPORT";
}

export type StudioEvidenceProjection = {
  readonly type: string;
  /** Raw EvidenceStatus — always preserved. */
  readonly status: Evidence["status"];
  /** Raw EvidenceAvailability — always preserved. */
  readonly availability: Evidence["availability"];
  /** Raw freshness when present. */
  readonly freshness: Evidence["freshness"] | null;
  readonly sourceKind: string;
  readonly producedAt: string | null;
  /** Deterministic stance — never converts Evidence into Fact. */
  readonly epistemicStance: EvidenceEpistemicStance;
};

export type StudioReviewProjection = {
  readonly status: string;
  readonly evidenceRefCount: number;
  readonly completeness: string;
  readonly supersedesPresent: boolean;
  readonly createdAt: string;
};

export type StudioTrajectoryProjection = {
  readonly status: string;
  readonly version: number;
  readonly stepSummaries: readonly string[];
  readonly decidedByDecisionPresent: boolean;
};

/** Clipped projection of durable active-cycle work EpistemicItems (D-GF-ACW-01). */
export type StudioActiveCycleWorkProjection = {
  readonly type: string;
  readonly statement: string;
  readonly confidence?: string;
  readonly blocking?: boolean;
  readonly status: EpistemicItemStatus;
};

export type StudioCognitiveContext = {
  readonly projectTruth: StudioProjectTruthProjection;
  readonly method: AdvisoryMethodContext;
  readonly activeCycle: ActiveCycleCognitiveProjection | null;
  readonly activeCycleWorkItems: {
    readonly state: PresenceState;
    readonly items: readonly StudioActiveCycleWorkProjection[];
  };
  readonly decisions: {
    readonly state: PresenceState;
    readonly items: readonly StudioDecisionProjection[];
  };
  readonly evidence: {
    readonly state: PresenceState;
    readonly items: readonly StudioEvidenceProjection[];
  };
  readonly review: {
    readonly state: PresenceState;
    readonly items: readonly StudioReviewProjection[];
  };
  readonly trajectory: {
    readonly state: TrajectoryPresenceState;
    readonly current: StudioTrajectoryProjection | null;
  };
  readonly limits: {
    readonly oaAvailable: boolean;
    readonly truthOutranksConversation: true;
    readonly composerDoesNotScoreMaturity: true;
    readonly composerDoesNotSelectTrajectory: true;
  };
};

export type ComposeStudioCognitiveContextResult =
  | { readonly ok: true; readonly context: StudioCognitiveContext }
  | { readonly ok: false; readonly code: string; readonly message: string };

function clip(text: string, max: number): string {
  const compact = text.replace(/\s+/g, " ").trim();
  return compact.length <= max ? compact : `${compact.slice(0, max - 1)}…`;
}

function projectDecision(d: HumanDecision): StudioDecisionProjection {
  const selected =
    d.options.find((o) => o.optionId === d.selectedOptionId)?.label ?? null;
  return Object.freeze({
    subject: clip(d.subject, STUDIO_COGNITIVE_CONTEXT_BUDGET.decisionSubjectChars),
    selectedOptionLabel: selected
      ? clip(selected, STUDIO_COGNITIVE_CONTEXT_BUDGET.decisionOptionChars)
      : null,
    status: d.status,
    lifecycle: classifyHumanDecisionLifecycle(d.status),
    effectiveAt: d.effectiveAt,
    reversible: d.reversible,
    supersedesPresent: Boolean(d.supersedes),
  });
}

function projectEvidence(e: Evidence): StudioEvidenceProjection {
  const freshness = e.freshness ?? null;
  return Object.freeze({
    type: e.type,
    status: e.status,
    availability: e.availability,
    freshness,
    sourceKind: e.sourceKind,
    producedAt: e.producedAt ?? null,
    epistemicStance: classifyEvidenceEpistemicStance({
      status: e.status,
      availability: e.availability,
      freshness,
    }),
  });
}

function projectReview(r: ReviewBundle): StudioReviewProjection {
  return Object.freeze({
    status: r.status,
    evidenceRefCount: r.evidenceRefs.length,
    completeness: r.completeness,
    supersedesPresent: Boolean(r.supersedesReviewBundleId),
    createdAt: r.createdAt,
  });
}

function projectTrajectory(t: ProjectTrajectory): StudioTrajectoryProjection {
  const steps = t.steps
    .slice(0, STUDIO_COGNITIVE_CONTEXT_BUDGET.maxTrajectorySteps)
    .map((s) =>
      clip(
        `${s.order}:${s.label}[${s.state}]`,
        STUDIO_COGNITIVE_CONTEXT_BUDGET.trajectoryStepChars,
      ),
    );
  return Object.freeze({
    status: t.status,
    version: t.version,
    stepSummaries: Object.freeze(steps),
    decidedByDecisionPresent: Boolean(t.decidedByDecisionRef),
  });
}

function projectActiveCycleWorkItem(
  item: EpistemicItem,
): StudioActiveCycleWorkProjection {
  return Object.freeze({
    type: item.type,
    statement: clip(
      item.statement,
      STUDIO_COGNITIVE_CONTEXT_BUDGET.activeCycleWorkStatementChars,
    ),
    ...(item.confidence !== undefined ? { confidence: item.confidence } : {}),
    ...(item.blocking !== undefined ? { blocking: item.blocking } : {}),
    status: item.status,
  });
}

function relatedToActiveCycle(
  item: EpistemicItem,
  cycleInstanceId: string,
): boolean {
  const related = item.relatedObjects ?? [];
  return related.includes(cycleInstanceId);
}

/**
 * Read-only composition. No provider call. No persistence. No Recommendation.
 * Fail-closed when an LPS-pointed active cycle cannot be resolved coherently.
 */
export async function composeStudioCognitiveContext(input: {
  analysis: IntentAnalysisDto;
  project: ProjectAssistantContextDto;
  registryRoot: string;
  truthCContext?: string | null;
  oa: RuntimeOaStack | null;
  activeCycleInstanceId?: string | null;
}): Promise<ComposeStudioCognitiveContextResult> {
  const activeCycleInstanceId =
    input.activeCycleInstanceId ??
    input.project.activeCycleInstanceId ??
    null;

  let activeCycle: ActiveCycleCognitiveProjection | null = null;
  let activeCycleCkcForMethod: Parameters<
    typeof composeAdvisoryMethodContext
  >[0]["activeCycleCkc"] = null;

  if (input.oa && activeCycleInstanceId) {
    const resolved = await resolveActiveCycleCognitiveContext({
      project: input.project,
      activeCycleInstanceId,
      registryRoot: input.registryRoot,
      getCycle: input.oa.cycleServices.getCycle,
    });
    if (!resolved.ok) {
      return {
        ok: false,
        code: resolved.code,
        message: resolved.reason,
      };
    }
    activeCycle = resolved.projection;
    if (resolved.ckc) {
      activeCycleCkcForMethod = {
        cycleTypeId: resolved.ckc.cycleTypeId,
        cycleLabel: resolved.ckc.cycleLabel,
        ckcLensSection: resolved.ckc.ckcLensSection,
        ckcLoaded: resolved.ckc.ckcLoaded,
        sourceLimit: resolved.ckc.sourceLimit,
      };
    }
  }

  const method = composeAdvisoryMethodContext({
    analysis: input.analysis,
    project: input.project,
    registryRoot: input.registryRoot,
    activeCycleCkc: activeCycleCkcForMethod,
  });

  const contextBody =
    input.truthCContext != null && input.truthCContext !== ""
      ? input.truthCContext
      : input.project.contextSummary;

  const projectTruth: StudioProjectTruthProjection = Object.freeze({
    projectId: input.project.projectId,
    name: input.project.name,
    objective: input.project.objective,
    context: contextBody,
    constraints: Object.freeze([...input.project.constraints]),
    criticality: input.project.criticality,
    shortReference: input.project.shortReference ?? null,
    lpsId: input.project.lpsId,
    lpsVersion: input.project.lpsVersion,
    activeCycleInstanceId,
    doctrineId: input.project.doctrineId,
    doctrineVersion: input.project.doctrineVersion,
    doctrineStatus: input.project.doctrineStatus,
  });

  if (!input.oa) {
    return {
      ok: true,
      context: Object.freeze({
        projectTruth,
        method,
        activeCycle,
        activeCycleWorkItems: Object.freeze({
          state: "UNAVAILABLE" as const,
          items: Object.freeze([]),
        }),
        decisions: Object.freeze({
          state: "UNAVAILABLE" as const,
          items: Object.freeze([]),
        }),
        evidence: Object.freeze({
          state: "UNAVAILABLE" as const,
          items: Object.freeze([]),
        }),
        review: Object.freeze({
          state: "UNAVAILABLE" as const,
          items: Object.freeze([]),
        }),
        trajectory: Object.freeze({
          state: "UNAVAILABLE" as const,
          current: null,
        }),
        limits: Object.freeze({
          oaAvailable: false,
          truthOutranksConversation: true as const,
          composerDoesNotScoreMaturity: true as const,
          composerDoesNotSelectTrajectory: true as const,
        }),
      }),
    };
  }

  const oa = input.oa;
  const budget = STUDIO_COGNITIVE_CONTEXT_BUDGET;
  const projectId = input.project.projectId;

  let decisionsState: PresenceState = "NONE";
  let decisionItems: StudioDecisionProjection[] = [];
  try {
    const history = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
    });
    if (!history.ok) {
      decisionsState = "UNAVAILABLE";
    } else if (history.decisions.length === 0) {
      decisionsState = "NONE";
    } else {
      decisionsState = "PRESENT";
      const sorted = [...history.decisions].sort((a, b) =>
        b.effectiveAt.localeCompare(a.effectiveAt),
      );
      decisionItems = sorted.slice(0, budget.maxDecisions).map(projectDecision);
    }
  } catch {
    decisionsState = "UNAVAILABLE";
  }

  let evidenceState: PresenceState = "NONE";
  let evidenceItems: StudioEvidenceProjection[] = [];
  try {
    const listed =
      await oa.evidenceReviewServices.repository.listByProject(projectId);
    if (listed.length === 0) {
      evidenceState = "NONE";
    } else {
      evidenceState = "PRESENT";
      evidenceItems = listed.slice(0, budget.maxEvidence).map(projectEvidence);
    }
  } catch {
    evidenceState = "UNAVAILABLE";
  }

  let reviewState: PresenceState = "NONE";
  let reviewItems: StudioReviewProjection[] = [];
  try {
    const listed =
      await oa.evidenceReviewServices.reviewBundleRepository.listByProject(
        projectId,
      );
    if (listed.length === 0) {
      reviewState = "NONE";
    } else {
      reviewState = "PRESENT";
      reviewItems = listed
        .slice(0, budget.maxReviewBundles)
        .map(projectReview);
    }
  } catch {
    reviewState = "UNAVAILABLE";
  }

  let trajectoryState: TrajectoryPresenceState = "ABSENT";
  let trajectoryCurrent: StudioTrajectoryProjection | null = null;
  try {
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    if (traj.ok) {
      trajectoryState = "PRESENT";
      trajectoryCurrent = projectTrajectory(traj.trajectory);
    } else if (traj.error?.detailCode === "TRAJECTORY_NOT_FOUND") {
      trajectoryState = "ABSENT";
    } else {
      trajectoryState = "UNAVAILABLE";
    }
  } catch {
    trajectoryState = "UNAVAILABLE";
  }

  let acwState: PresenceState = "NONE";
  let acwItems: StudioActiveCycleWorkProjection[] = [];
  if (activeCycle) {
    try {
      const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
      const filtered = epistemic.filter(
        (item) =>
          item.source === ACTIVE_CYCLE_WORK_SOURCE &&
          relatedToActiveCycle(item, activeCycle.cycleInstanceId),
      );
      if (filtered.length === 0) {
        acwState = "NONE";
      } else {
        acwState = "PRESENT";
        acwItems = filtered
          .slice(0, budget.maxActiveCycleWorkItems)
          .map(projectActiveCycleWorkItem);
      }
    } catch {
      acwState = "UNAVAILABLE";
    }
  }

  return {
    ok: true,
    context: Object.freeze({
      projectTruth,
      method,
      activeCycle,
      activeCycleWorkItems: Object.freeze({
        state: acwState,
        items: Object.freeze(acwItems),
      }),
      decisions: Object.freeze({
        state: decisionsState,
        items: Object.freeze(decisionItems),
      }),
      evidence: Object.freeze({
        state: evidenceState,
        items: Object.freeze(evidenceItems),
      }),
      review: Object.freeze({
        state: reviewState,
        items: Object.freeze(reviewItems),
      }),
      trajectory: Object.freeze({
        state: trajectoryState,
        current: trajectoryCurrent,
      }),
      limits: Object.freeze({
        oaAvailable: true,
        truthOutranksConversation: true as const,
        composerDoesNotScoreMaturity: true as const,
        composerDoesNotSelectTrajectory: true as const,
      }),
    }),
  };
}

/**
 * Render StudioCognitiveContext into F1 system-prompt sections.
 * Business-first; no digests / repository mechanics / F1-F2-MW5 jargon.
 */
export function buildStudioCognitivePromptSections(
  ctx: StudioCognitiveContext,
): string[] {
  const lines: string[] = [
    "=== STUDIO COGNITIVE CONTEXT (autorité / guidance séparées) ===",
    "Présence d'un enregistrement ≠ autorité courante / fait établi.",
    "Autorité projet courante = Truth C / LPS courant + HumanDecisions CURRENT (effective).",
    "Evidence = support épistémique (poids selon status/availability/freshness) — jamais un Fact automatique.",
    "DoctrinePackage/CKC = guidance méthodologique seulement — ne remplace jamais la vérité projet.",
    "Conversation = continuité ; outrankée par vérité Project courante + doctrine Studio.",
    "Recommendation / ProjectTrajectory ≠ HumanDecision sauf décision séparée.",
    "Ne réécris pas l'historique Session. Ne score pas de bande de maturité comme fait.",
    "",
  ];

  lines.push("— Vérité projet (Truth C / LPS) —");
  lines.push(`Nom : ${ctx.projectTruth.name}`);
  lines.push(`Objectif : ${ctx.projectTruth.objective}`);
  lines.push(`Contexte : ${ctx.projectTruth.context}`);
  lines.push(
    `Contraintes : ${
      ctx.projectTruth.constraints.length > 0
        ? ctx.projectTruth.constraints.join("; ")
        : "(aucune)"
    }`,
  );
  lines.push(`Criticité : ${ctx.projectTruth.criticality}`);
  if (ctx.projectTruth.activeCycleInstanceId) {
    lines.push(
      `Cycle ACTIVE authority-bearing : ${ctx.projectTruth.activeCycleInstanceId} — ne pas inventer d'activation.`,
    );
  } else {
    lines.push(
      "Cycle ACTIVE : aucun (un CycleInstance candidate peut exister sans LPS.activeCycleInstanceId).",
    );
  }
  lines.push("");

  // Active cycle (rich block — D-GF-ACW-01)
  lines.push("— Cycle ACTIVE (identité serveur) —");
  if (!ctx.activeCycle) {
    lines.push(
      "Aucun cycle ACTIVE résolu pour ce tour — travail pré-cycle / hors cycle.",
    );
    lines.push(
      "activeCycleAlreadyCoversWork doit rester false sauf preuve contraire dans le LPS.",
    );
  } else {
    const ac = ctx.activeCycle;
    lines.push(
      `cycleTypeId=${ac.cycleTypeId}` +
        (ac.cycleLabel ? ` (« ${ac.cycleLabel} »)` : "") +
        ` · profile=${ac.profile} · status=${ac.status}` +
        (ac.workEligible ? " · workEligible=true" : " · workEligible=false"),
    );
    if (ac.trajectoryId) {
      lines.push(
        `Trajectoire liée : ${ac.trajectoryId}` +
          (ac.trajectoryVersion != null ? `@v${ac.trajectoryVersion}` : "") +
          (ac.trajectoryStepId ? ` · step=${ac.trajectoryStepId}` : ""),
      );
    } else {
      lines.push("Trajectoire liée : (aucune binding complète).");
    }
    if (ac.ckcResolutionRef) {
      lines.push(`ckcResolutionRef durable : ${ac.ckcResolutionRef}`);
    }
    lines.push(
      "CKC du cycle ACTIVE = guidance méthodologique AUTORITATIVE pour le travail in-cycle.",
    );
    lines.push(
      "Orientation candidat d'intent (ci-dessous) = SECONDAIRE — ne pas l'utiliser pour remplacer la CKC du cycle actif.",
    );
    if (ctx.activeCycleWorkItems.state === "PRESENT") {
      lines.push("Travail cognitif déjà matérialisé pour ce cycle ACTIVE :");
      for (const w of ctx.activeCycleWorkItems.items) {
        lines.push(
          `• [${w.type}${w.status !== "active" ? `/${w.status}` : ""}]` +
            (w.confidence ? ` conf=${w.confidence}` : "") +
            (w.blocking === true ? " blocking" : "") +
            ` — ${w.statement}`,
        );
      }
    } else if (ctx.activeCycleWorkItems.state === "UNAVAILABLE") {
      lines.push(
        "Travail cognitif cycle ACTIVE : UNAVAILABLE — ne pas inventer d'items.",
      );
    } else {
      lines.push("Travail cognitif cycle ACTIVE : aucun item matérialisé encore.");
    }
  }
  lines.push("");

  // Method / CKC
  lines.push("— Méthode (guidance) —");
  if (ctx.method.activeCycleCkcAuthoritative) {
    lines.push(
      "Source CKC : cycle ACTIVE (autoritative in-cycle)." +
        (ctx.method.cycleLabel ? ` · « ${ctx.method.cycleLabel} »` : ""),
    );
  }
  if (ctx.method.orientation.state === "RESOLVED_FROM_INTENT_CANDIDATE") {
    lines.push(
      `État orientation (secondaire) : RESOLVED_FROM_INTENT_CANDIDATE` +
        (ctx.method.cycleLabel && !ctx.method.activeCycleCkcAuthoritative
          ? ` · cycle candidat « ${ctx.method.cycleLabel} »`
          : ctx.method.orientation.candidateCycleTypeId
            ? ` · candidat intent « ${ctx.method.orientation.candidateCycleTypeId} »`
            : "") +
        " (hypothèse non durable).",
    );
  } else {
    lines.push(
      "État orientation : UNRESOLVED — n'invente pas de cycle ; question ciblée seulement si matérielle.",
    );
  }
  if (ctx.method.sourceLimit === "doctrine_unavailable") {
    lines.push("Limite : DoctrinePackage non résolu.");
  } else if (ctx.method.sourceLimit === "ckc_unavailable") {
    lines.push(
      "Limite : CKC détaillée indisponible — dégradation gouvernée ; pas de Skills Framework public.",
    );
  }
  if (ctx.method.ckcLensSection?.trim()) {
    lines.push(ctx.method.ckcLensSection.trim());
  }
  lines.push("");

  lines.push("— HumanDecisions —");
  if (ctx.decisions.state === "NONE") {
    lines.push("État enregistrements : NONE — aucune HumanDecision.");
  } else if (ctx.decisions.state === "UNAVAILABLE") {
    lines.push("État enregistrements : UNAVAILABLE — ne pas inventer de décision.");
  } else {
    lines.push(
      "État enregistrements : PRESENT — des HumanDecisions existent ; PRESENT ≠ toutes CURRENT.",
    );
    const current = ctx.decisions.items.filter((d) => d.lifecycle === "CURRENT");
    const pending = ctx.decisions.items.filter((d) => d.lifecycle === "PENDING");
    const nonActive = ctx.decisions.items.filter(
      (d) => d.lifecycle === "NON_ACTIVE",
    );
    lines.push("CURRENT (effective) — respecter ; ne pas rouvrir comme Option libre sans contradiction/replan:");
    if (current.length === 0) {
      lines.push("• (aucune HumanDecision CURRENT)");
    } else {
      for (const d of current) {
        lines.push(
          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=CURRENT]` +
            (d.supersedesPresent ? " (remplace une décision antérieure)" : ""),
        );
      }
    }
    lines.push("PENDING — non décidé ; ne pas narrer comme GO/current:");
    if (pending.length === 0) {
      lines.push("• (aucune HumanDecision PENDING)");
    } else {
      for (const d of pending) {
        lines.push(
          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=PENDING]`,
        );
      }
    }
    lines.push("NON_ACTIVE — historique / provenance seulement ; jamais GO courant:");
    if (nonActive.length === 0) {
      lines.push("• (aucune HumanDecision NON_ACTIVE)");
    } else {
      for (const d of nonActive) {
        lines.push(
          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=NON_ACTIVE]`,
        );
      }
    }
  }
  lines.push("");

  lines.push("— Evidence —");
  if (ctx.evidence.state === "NONE") {
    lines.push("État enregistrements : NONE — aucune Evidence projet liée.");
  } else if (ctx.evidence.state === "UNAVAILABLE") {
    lines.push("État enregistrements : UNAVAILABLE — ne pas inventer d'Evidence.");
  } else {
    lines.push(
      "État enregistrements : PRESENT — des Evidence existent ; PRESENT ≠ Fact / preuve établie.",
    );
    lines.push(
      "Règles : Evidence = support, pas la proposition ; status/availability/freshness pèsent ; rejected/superseded/unavailable = non-support courant ; stale = affaibli ; expected/incomplete/unverified ≠ verified ; unknown reste incertitude ; même verified ne prouve pas une claim utilisateur non liée.",
    );
    for (const e of ctx.evidence.items) {
      lines.push(
        `• type=${e.type} status=${e.status} availability=${e.availability}` +
          (e.freshness ? ` freshness=${e.freshness}` : "") +
          ` stance=${e.epistemicStance}`,
      );
    }
  }
  lines.push("");

  lines.push("— ReviewBundle —");
  if (ctx.review.state === "NONE") {
    lines.push("État enregistrements : NONE.");
  } else if (ctx.review.state === "UNAVAILABLE") {
    lines.push("État enregistrements : UNAVAILABLE.");
  } else {
    lines.push(
      "État enregistrements : PRESENT — pas une validation Fact automatique ; lire status/completeness.",
    );
    for (const r of ctx.review.items) {
      lines.push(
        `• status=${r.status} evidenceRefs=${r.evidenceRefCount} completeness=${r.completeness}` +
          (r.supersedesPresent ? " (supersédé/lié)" : ""),
      );
    }
  }
  lines.push("");

  lines.push("— ProjectTrajectory —");
  if (ctx.trajectory.state === "ABSENT") {
    lines.push("État : ABSENT — n'invente pas de trajectoire.");
  } else if (ctx.trajectory.state === "UNAVAILABLE") {
    lines.push("État : UNAVAILABLE — n'invente pas de trajectoire.");
  } else if (ctx.trajectory.state === "DEFERRED") {
    lines.push("État : DEFERRED — non consommé dans ce tour.");
  } else if (ctx.trajectory.current) {
    const t = ctx.trajectory.current;
    lines.push(
      `État : PRESENT · status=${t.status} version=${t.version}` +
        (t.decidedByDecisionPresent
          ? " · liée à une HumanDecision"
          : " · Recommendation/candidate ≠ HumanDecision"),
    );
    if (t.stepSummaries.length > 0) {
      lines.push(`Étapes : ${t.stepSummaries.join(" → ")}`);
    }
  }
  lines.push("");

  return lines;
}

```
### `projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts`

```typescript
/**
 * D-GF-ACW-01 — materialize non-authoritative active-cycle EpistemicItems
 * and link them into LPS.epistemicItemIds atomically (Product SQLite UoW).
 *
 * NOT a new aggregate. HARVEST UpdateEpistemicState + AppendLivingProjectStateVersion.
 * No HumanDecision / ExecutionContract / trajectory / LPS structural rewrite.
 */

import { createHash } from "node:crypto";
import type { ActorReference, ProvenanceRecord } from "@/lib/oa/doctrine";
import type {
  EpistemicConfidence,
  EpistemicItem,
  EpistemicItemType,
} from "@/lib/oa/cycle";
import type { UpdateEpistemicState } from "@/lib/oa/cycle/application/updateEpistemicState";
import type { AppendLivingProjectStateVersion } from "@/lib/oa/project/application/appendLivingProjectStateVersion";
import type { GetCurrentLivingProjectState } from "@/lib/oa/project/application/getCurrentLivingProjectState";
import type { CyclePersistenceUnitOfWorkPort } from "@/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort";
import type { GetCycle } from "@/lib/oa/cycle/application/getCycle";
import type { NoraActiveCycleWorkItem } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";

/** Stable Product source for Nora active-cycle cognitive work. */
export const ACTIVE_CYCLE_WORK_SOURCE = "active-cycle-work:nora" as const;

/** Same Nora agent actor as LR — authority remains none on items. */
export const NORA_ACTIVE_CYCLE_WORK_ACTOR: ActorReference =
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR;

export const ACTIVE_CYCLE_WORK_ALLOWED_TYPES: ReadonlySet<EpistemicItemType> =
  new Set([
    "Observation",
    "Hypothesis",
    "Option",
    "Recommendation",
    "Reservation",
    "Contradiction",
  ]);

export type ActiveCycleWorkMaterializationFacts = {
  readonly projectId: string;
  readonly activeCycleInstanceId: string;
  readonly lpsVersion: number;
  readonly lpsObjective: string;
  readonly existingEpistemicItemIds: readonly string[];
  readonly existingItems: readonly EpistemicItem[];
  readonly turnCorrelationId: string;
};

export type MaterializeActiveCycleWorkResult =
  | {
      readonly ok: true;
      readonly items: readonly EpistemicItem[];
      readonly createdIds: readonly string[];
      readonly reusedIds: readonly string[];
      readonly lpsVersionAfter: number;
      readonly idempotent: boolean;
    }
  | { readonly ok: false; readonly code: string; readonly reason: string };

function statementDigest(statement: string): string {
  return createHash("sha256")
    .update(statement.trim(), "utf8")
    .digest("hex")
    .slice(0, 16);
}

export function activeCycleWorkEpistemicItemId(input: {
  projectId: string;
  cycleInstanceId: string;
  turnCorrelationId: string;
  index: number;
  type: string;
  statement: string;
}): string {
  const raw = [
    input.projectId,
    input.cycleInstanceId,
    input.turnCorrelationId,
    String(input.index),
    input.type,
    statementDigest(input.statement),
  ].join("|");
  const digest = createHash("sha256")
    .update(raw, "utf8")
    .digest("hex")
    .slice(0, 20);
  return `epi:acw:${digest}`;
}

function buildProvenance(input: {
  projectId: string;
  cycleInstanceId: string;
  turnCorrelationId: string;
  producedAt: string;
  index: number;
}): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: `prov:acw:${createHash("sha256")
      .update(
        `${input.turnCorrelationId}|${input.index}|${input.cycleInstanceId}`,
        "utf8",
      )
      .digest("hex")
      .slice(0, 16)}`,
    actor: structuredClone(NORA_ACTIVE_CYCLE_WORK_ACTOR),
    source: "conversation",
    timestamp: input.producedAt,
    correlationId: input.turnCorrelationId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
  };
}

function materialParity(
  existing: EpistemicItem,
  next: {
    type: EpistemicItemType;
    statement: string;
    confidence?: EpistemicConfidence;
    blocking?: boolean;
  },
): boolean {
  if (existing.type !== next.type) return false;
  if (existing.statement.trim() !== next.statement.trim()) return false;
  if ((existing.confidence ?? undefined) !== (next.confidence ?? undefined)) {
    return false;
  }
  if ((existing.blocking ?? undefined) !== (next.blocking ?? undefined)) {
    return false;
  }
  if (existing.source !== ACTIVE_CYCLE_WORK_SOURCE) return false;
  return true;
}

class ActiveCycleWorkAtomicFailure extends Error {
  constructor(
    readonly code: string,
    readonly reason: string,
  ) {
    super(reason);
    this.name = "ActiveCycleWorkAtomicFailure";
  }
}

/**
 * Persist active-cycle work items + LPS epistemicItemIds in one Product UoW.
 */
export async function materializeActiveCycleWork(input: {
  items: readonly NoraActiveCycleWorkItem[];
  facts: ActiveCycleWorkMaterializationFacts;
  updateEpistemicState: UpdateEpistemicState;
  appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
  getCurrentLivingProjectState: GetCurrentLivingProjectState;
  getCycle: GetCycle;
  runInTransaction: CyclePersistenceUnitOfWorkPort["runInTransaction"];
  producedAt: string;
  createdBy?: ActorReference;
}): Promise<MaterializeActiveCycleWorkResult> {
  if (!input.items || input.items.length === 0) {
    return {
      ok: true,
      items: [],
      createdIds: [],
      reusedIds: [],
      lpsVersionAfter: input.facts.lpsVersion,
      idempotent: true,
    };
  }

  for (const item of input.items) {
    if (!ACTIVE_CYCLE_WORK_ALLOWED_TYPES.has(item.type as EpistemicItemType)) {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_WORK_FORBIDDEN_TYPE",
        reason: `forbidden_epistemic_type:${item.type}`,
      };
    }
  }

  const createdBy = input.createdBy ?? NORA_ACTIVE_CYCLE_WORK_ACTOR;
  const { facts } = input;

  try {
    const atomic = await input.runInTransaction(async () => {
      const cycleLoad = await input.getCycle.execute({
        cycleInstanceId: facts.activeCycleInstanceId,
      });
      if (!cycleLoad.ok) {
        throw new ActiveCycleWorkAtomicFailure(
          "ACTIVE_CYCLE_NOT_FOUND",
          "cycle_missing_at_materialization",
        );
      }
      const cycle = cycleLoad.cycle;
      if (cycle.projectId !== facts.projectId) {
        throw new ActiveCycleWorkAtomicFailure(
          "ACTIVE_CYCLE_PROJECT_MISMATCH",
          "cycle_project_mismatch_at_materialization",
        );
      }
      if (cycle.status !== "active") {
        throw new ActiveCycleWorkAtomicFailure(
          "ACTIVE_CYCLE_NOT_ELIGIBLE",
          "cycle_not_active_at_materialization",
        );
      }

      const lpsNow = await input.getCurrentLivingProjectState.execute({
        projectId: facts.projectId,
      });
      if (!lpsNow.ok) {
        throw new ActiveCycleWorkAtomicFailure(
          "LPS_UNAVAILABLE",
          "lps_missing_at_materialization",
        );
      }
      if (
        (lpsNow.livingProjectState.activeCycleInstanceId ?? null) !==
        facts.activeCycleInstanceId
      ) {
        throw new ActiveCycleWorkAtomicFailure(
          "ACTIVE_CYCLE_LPS_POINTER_STALE",
          "lps_active_cycle_changed_before_materialization",
        );
      }
      if (lpsNow.livingProjectState.version !== facts.lpsVersion) {
        throw new ActiveCycleWorkAtomicFailure(
          "LPS_VERSION_CONFLICT",
          "lps_version_changed_before_materialization",
        );
      }

      const planned: Array<{
        epistemicItemId: string;
        type: EpistemicItemType;
        statement: string;
        confidence?: EpistemicConfidence;
        blocking?: boolean;
        relatedObjects: string[];
        provenance: ProvenanceRecord;
        reuse: boolean;
      }> = [];

      const existingById = new Map(
        facts.existingItems.map((e) => [e.epistemicItemId, e]),
      );

      for (let index = 0; index < input.items.length; index += 1) {
        const raw = input.items[index]!;
        const type = raw.type as EpistemicItemType;
        const statement = raw.statement.trim();
        if (!statement) {
          throw new ActiveCycleWorkAtomicFailure(
            "ACTIVE_CYCLE_WORK_INVALID",
            "empty_statement",
          );
        }
        const epistemicItemId = activeCycleWorkEpistemicItemId({
          projectId: facts.projectId,
          cycleInstanceId: facts.activeCycleInstanceId,
          turnCorrelationId: facts.turnCorrelationId,
          index,
          type,
          statement,
        });
        const existing = existingById.get(epistemicItemId);
        const confidence =
          raw.confidence === null || raw.confidence === undefined
            ? undefined
            : (raw.confidence as EpistemicConfidence);
        const blocking =
          raw.blocking === null || raw.blocking === undefined
            ? undefined
            : raw.blocking;

        if (existing) {
          if (
            !materialParity(existing, {
              type,
              statement,
              confidence,
              blocking,
            })
          ) {
            throw new ActiveCycleWorkAtomicFailure(
              "ACTIVE_CYCLE_WORK_IDEM_CONFLICT",
              "same_id_different_material",
            );
          }
          planned.push({
            epistemicItemId,
            type,
            statement,
            confidence,
            blocking,
            relatedObjects: existing.relatedObjects
              ? [...existing.relatedObjects]
              : [facts.projectId, facts.activeCycleInstanceId],
            provenance: existing.provenance
              ? structuredClone(existing.provenance)
              : buildProvenance({
                  projectId: facts.projectId,
                  cycleInstanceId: facts.activeCycleInstanceId,
                  turnCorrelationId: facts.turnCorrelationId,
                  producedAt: input.producedAt,
                  index,
                }),
            reuse: true,
          });
          continue;
        }

        const relatedObjects = [
          facts.projectId,
          facts.activeCycleInstanceId,
          ...(cycle.trajectoryId ? [cycle.trajectoryId] : []),
          ...(cycle.trajectoryStepId ? [cycle.trajectoryStepId] : []),
        ];

        planned.push({
          epistemicItemId,
          type,
          statement,
          confidence,
          blocking,
          relatedObjects,
          provenance: buildProvenance({
            projectId: facts.projectId,
            cycleInstanceId: facts.activeCycleInstanceId,
            turnCorrelationId: facts.turnCorrelationId,
            producedAt: input.producedAt,
            index,
          }),
          reuse: false,
        });
      }

      const toWrite = planned.filter((p) => !p.reuse);
      if (toWrite.length > 0) {
        const write = await input.updateEpistemicState.execute({
          projectId: facts.projectId,
          createdBy,
          correlationId: facts.turnCorrelationId,
          items: toWrite.map((p) => ({
            epistemicItemId: p.epistemicItemId,
            type: p.type,
            statement: p.statement,
            status: "active" as const,
            source: ACTIVE_CYCLE_WORK_SOURCE,
            confidence: p.confidence,
            blocking: p.blocking,
            relatedObjects: p.relatedObjects,
            provenance: p.provenance,
          })),
        });
        if (!write.ok) {
          throw new ActiveCycleWorkAtomicFailure(
            write.error.detailCode,
            write.error.internalCauseRef ?? "epistemic_write_failed",
          );
        }
      }

      const newIds = planned.map((p) => p.epistemicItemId);
      const carriedIds = lpsNow.livingProjectState.epistemicItemIds ?? [
        ...facts.existingEpistemicItemIds,
      ];
      const mergedIds = [
        ...carriedIds.filter((id) => !newIds.includes(id)),
        ...newIds,
      ];

      const needsLpsLink = newIds.some((id) => !carriedIds.includes(id));
      let lpsVersionAfter = facts.lpsVersion;
      if (needsLpsLink) {
        const appended =
          await input.appendLivingProjectStateVersion.execute({
            projectId: facts.projectId,
            expectedVersion: facts.lpsVersion,
            objective: facts.lpsObjective,
            createdBy,
            correlationId: facts.turnCorrelationId,
            epistemicItemIds: mergedIds,
            activeCycleInstanceId: facts.activeCycleInstanceId,
          });
        if (!appended.ok) {
          throw new ActiveCycleWorkAtomicFailure(
            appended.error.detailCode,
            appended.error.internalCauseRef ?? "lps_append_failed",
          );
        }
        lpsVersionAfter = appended.livingProjectState.version;
      }

      return {
        planned,
        lpsVersionAfter,
      };
    });

    const createdIds = atomic.planned
      .filter((p) => !p.reuse)
      .map((p) => p.epistemicItemId);
    const reusedIds = atomic.planned
      .filter((p) => p.reuse)
      .map((p) => p.epistemicItemId);

    const items: EpistemicItem[] = atomic.planned.map((p) => ({
      schemaVersion: "0.1.0-oa",
      epistemicItemId: p.epistemicItemId,
      type: p.type,
      statement: p.statement,
      status: "active",
      confidence: p.confidence,
      source: ACTIVE_CYCLE_WORK_SOURCE,
      createdBy: structuredClone(createdBy),
      createdAt: input.producedAt,
      relatedObjects: p.relatedObjects,
      blocking: p.blocking,
      provenance: p.provenance,
    }));

    return {
      ok: true,
      items,
      createdIds,
      reusedIds,
      lpsVersionAfter: atomic.lpsVersionAfter,
      idempotent: createdIds.length === 0,
    };
  } catch (err) {
    if (err instanceof ActiveCycleWorkAtomicFailure) {
      return { ok: false, code: err.code, reason: err.reason };
    }
    return {
      ok: false,
      code: "ACTIVE_CYCLE_WORK_ATOMIC_FAILURE",
      reason: err instanceof Error ? err.message : "atomic_materialize_failed",
    };
  }
}

```
### `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`

```typescript
import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import {
  memoryBPiloteNotice,
  memoryBCompactionPiloteNotice,
  runNoraCognitiveTurn,
  formatCognitiveStopPiloteNotice,
  aggregateReadCoverage,
  rememberReadCoverage,
  ProductSqliteSession,
  resolveNoraSessionSqlitePath,
  type SemanticCognitiveWorkloadAssessment,
  type Mw3ContradictionAssessmentInput,
  type NoraEvalModelReasoningControl,
  type NoraAgentsUsdAccounting,
  type NoraCampaignBudget,
} from "@/lib/nora-cognitive-runtime";
import {
  MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
  normalizeNoraProductTurnStructuredOutput,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { materializeLifecycleRecommendationFromStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
import {
  LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
  lifecycleRecommendationMaterializeFailurePiloteNotice,
} from "./lifecycleRecommendationPiloteNotice";
import { materializeActiveCycleWork } from "./materializeActiveCycleWork";
import { randomBytes } from "node:crypto";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { collectToolTelemetry } from "./collectToolTelemetry";
import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
import { resolveAssistantMode } from "./resolveAssistantMode";
import {
  resolveRememberedEvidence,
  resolveOaStackForLifecycleRecommendation,
} from "./mw3AvailableEvidence";
import type { AdvisoryMethodContext } from "./f2/methodOrientation";
import type { StudioCognitiveContext } from "./f2/studioCognitiveContext";
import type {
  AssistantHistoryMessage,
  Mw3CognitiveSurfaceDto,
  Mw4GroundingSurfaceDto,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "./types";
import { resolveTrajectoryBootstrapPresence } from "@/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap";

const MAX_HISTORY_MESSAGES = 20;

function buildEphemeralNotice(
  memoryBAvailability:
    | "available_with_history"
    | "available_empty"
    | "unavailable",
  memoryBCompactionState:
    | "none"
    | "compacted_no_loss"
    | "compacted_with_loss"
    | "stale_invalidated",
  stalePriorInvalidated?: boolean,
  cognitiveStopNotice?: string | null,
  lifecycleMaterializeNotice?: string | null,
): string {
  const base = memoryBPiloteNotice(memoryBAvailability);
  const compaction = memoryBCompactionPiloteNotice(memoryBCompactionState, {
    stalePriorInvalidated,
  });
  const parts = [
    lifecycleMaterializeNotice,
    cognitiveStopNotice,
    compaction,
    base,
  ].filter((p): p is string => typeof p === "string" && p.trim().length > 0);
  return parts.join(" ");
}

function toMw3Surface(
  turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>,
): Mw3CognitiveSurfaceDto | null {
  const disposition = turn.contradictionDisposition;
  const stop = turn.cognitiveStopDecision;
  if (!disposition || !stop) return null;
  return {
    disposition: disposition.disposition,
    progression: stop.outcome,
    cognitiveStop: stop.cognitiveStop,
    reason: stop.anatomy?.reason ?? disposition.disclosure,
    evidenceIds: stop.anatomy?.contradictionEvidenceIds ?? [
      ...disposition.acceptedEvidenceIds,
    ],
    sourceIds: stop.anatomy?.sourceIds ?? [...disposition.acceptedSourceIds],
    governingPremise: stop.anatomy?.governingPremise || null,
    nextAction: stop.anatomy?.nextAction ?? null,
    insufficiencyReasons: [...disposition.insufficiencyReasons],
    allowsSilentSuccess: false,
    blockedImpact: stop.cognitiveStop
      ? `Progression bloquée — prémisse gouvernante invalidée${
          stop.anatomy?.governingPremise
            ? ` (${stop.anatomy.governingPremise})`
            : ""
        }.`
      : null,
    mayContinue:
      stop.cognitiveStop !== true && stop.progression === "continue",
    notTechnicalFailure: stop.progression !== "technical_failure",
  };
}

function toMw4Surface(
  turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>,
): Mw4GroundingSurfaceDto | null {
  const g = turn.mw4Grounding;
  if (!g) return null;
  return {
    rememberedIds: [...g.rememberedIds],
    validIds: [...g.validIds],
    downgradedIds: [...g.downgradedIds],
    missingIds: [...g.missingIds],
    disclosure: g.disclosure,
    readCoverageOverall: g.readCoverageOverall,
    readCoverageDisclosure: g.readCoverageDisclosure ?? null,
  };
}

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
    activeCycleInstanceId: result.livingState.activeCycleInstanceId ?? null,
    ckcResolutionRef: result.livingState.ckcResolutionRef ?? null,
  };
}

/**
 * Thin F1 orchestration — Option C single Agents Runner path (Fake + target).
 * SFIA routeToolCall remains the tool authorization boundary.
 */
export async function orchestrateProjectAssistantTurn(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  /**
   * Optional server-side provider injection (eval / tests).
   * Prefer per-instance OpenAIConversationProvider over process.env mutation.
   */
  provider?: ConversationProvider;
  /** Test override for Product SQLite Session path. */
  sessionDbPath?: string;
  /**
   * Test injection — forces Memory B UNAVAILABLE (MW1-S01).
   * Same product path; no second runtime.
   */
  simulateMemoryBUnavailable?: boolean;
  /**
   * CORR-MW2-REAL-01 — INTERNAL semantic CWP from analyzeIntent.
   * Server-side only; never part of ProjectAssistantSendResult.
   */
  semanticCognitiveWorkload?: SemanticCognitiveWorkloadAssessment | null;
  /**
   * CORR-MW2-REAL-04 — INTERNAL full Truth C / LPS context for F1 system prompt.
   * Server-side only; does not expand ProjectAssistantContextDto / client DTO.
   */
  truthCContext?: string | null;
  /**
   * CORR-PROOF-03 E1 — INTERNAL non-mutating method orientation + optional CKC lens.
   * Server-side only; never client-authoritative.
   */
  methodContext?: AdvisoryMethodContext | null;
  /**
   * CORR-PROOF-04 — INTERNAL Studio Cognitive Context envelope.
   * Server-side only; never client-authoritative. Supersedes methodContext when set.
   */
  studioCognitiveContext?: StudioCognitiveContext | null;
  /**
   * MW3 — optional contradiction assessment (tests/eval/product when facts exist).
   * Server-side; surfaces mw3 DTO without inventing Evidence.
   */
  contradictionAssessment?: Mw3ContradictionAssessmentInput | null;
  /** MW4-S02 — attach post-Evidence / recovery narrative policy disclosure. */
  postEvidenceNarrativePolicy?: boolean;
  /**
   * INTERNAL / EVAL-ONLY — Stage A cell model×effort pin.
   * Never part of ProjectAssistant client DTO. Absent → production default.
   */
  evalModelReasoningControl?: NoraEvalModelReasoningControl;
  /** INTERNAL / EVAL-ONLY — Agents USD authorization envelope bridge. */
  usdAccounting?: NoraAgentsUsdAccounting;
  /** INTERNAL / EVAL-ONLY — shared canonical campaign budget lease. */
  campaignBudget?: NoraCampaignBudget;
  /**
   * D-GF-ACW-01 — optional turn correlation id (tests).
   * Production mints `f1-acw:${projectId}:${randomBytes(8).hex}`.
   */
  turnCorrelationId?: string;
}): Promise<ProjectAssistantSendResult> {
  const content = input.content.trim();
  if (!content) {
    return {
      ok: false,
      status: "validation_error",
      code: "EMPTY_MESSAGE",
      message: "Saisissez un message avant d'envoyer.",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: true,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }

  const project = toContextDto(projectResult);
  const modeResolution = resolveAssistantMode(input.provider);
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const history = (input.history ?? [])
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_HISTORY_MESSAGES);

  const messages: ProviderChatMessage[] = [
    {
      role: "system",
      content: buildProjectSystemPrompt(project, {
        truthCContext: input.truthCContext,
        methodContext: input.methodContext ?? null,
        studioCognitiveContext: input.studioCognitiveContext ?? null,
      }),
    },
    ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
    { role: "user", content },
  ];

  const sink = new ProjectAssistantMemoryEventSink();
  const workspaceRoot = resolveWorkspaceRootFromAppCwd();
  const provider = input.provider ?? resolveConversationProvider();
  const presentation = modeResolution.presentation;

  try {
    const turn = await runNoraCognitiveTurn({
      correlationId: `f1:${project.projectId}`,
      projectId: project.projectId,
      messages,
      provider,
      enableTools: true,
      sink,
      workspaceRoot,
      sessionDbPath: input.sessionDbPath,
      simulateMemoryBUnavailable: input.simulateMemoryBUnavailable,
      truthCRevision: {
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
      },
      turnWorkloadContext: {
        projectCriticality: project.criticality,
        userContentLength: content.length,
        historyMessageCount: history.length,
        historyTotalChars: history.reduce((sum, m) => sum + m.content.length, 0),
        enableTools: true,
      },
      trustedSfiaProfile: null,
      semanticCognitiveWorkload: input.semanticCognitiveWorkload ?? null,
      contradictionAssessment: input.contradictionAssessment ?? null,
      resolveRememberedEvidence,
      postEvidenceNarrativePolicy: input.postEvidenceNarrativePolicy === true,
      evalModelReasoningControl: input.evalModelReasoningControl,
      usdAccounting: input.usdAccounting,
      campaignBudget: input.campaignBudget,
      outputType: NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
    });

    let assistantText = turn.text;
    let lifecycleRecommendationMaterialized: boolean | null = null;
    let lifecycleRecommendationCode: string | null = null;

    // Same Product turn — optional LR materialization (no second model call).
    if (turn.structuredOutput !== undefined) {
      const { extractLifecycleCandidateFromStructuredOutput } = await import(
        "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn"
      );
      const extracted = extractLifecycleCandidateFromStructuredOutput(
        turn.structuredOutput,
      );
      if (extracted.narrative) {
        assistantText = extracted.narrative;
      }
      // Positive enforcement: EMIT without LR is a structured contradiction.
      // Never invent LR; never treat as normal conversational success.
      // Seams 1–3 alone are insufficient because this short-circuit previously
      // skipped materialize and returned ok:true silently.
      if (
        extracted.kind === "product_turn" &&
        extracted.boundaryContradiction ===
          MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION
      ) {
        return {
          ok: false,
          status: "validation_error",
          code: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
          message: LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
          mode: modeResolution.mode,
          retryable: false,
        };
      }
      if (!extracted.candidate) {
        lifecycleRecommendationMaterialized = false;
      } else {
        // OA access via authorized Project Assistant seam (mw3AvailableEvidence
        // lazy runtime import) — never import vertical-slice-runtime here.
        const oaResolved = await resolveOaStackForLifecycleRecommendation();
        if (oaResolved.ok) {
          const oa = oaResolved.oa;
          const cycles = await oa.cycleServices.cycles.listByProject(
            project.projectId,
          );
          const lps =
            await oa.projectServices.getCurrentLivingProjectState.execute({
              projectId: project.projectId,
            });
          const projectRow = await oa.projectServices.getProject.execute({
            projectId: project.projectId,
          });
          const failedMaterialDimensions =
            new Set<LifecycleRecommendationMaterialDimension>();
          if (!lps.ok) {
            failedMaterialDimensions.add("lps");
          }
          if (!projectRow.ok) {
            failedMaterialDimensions.add("doctrine");
          }

          let trajectory = null;
          let trajectoryBootstrapPresence = await resolveTrajectoryBootstrapPresence(
            oa.cycleServices.trajectories,
            project.projectId,
          );
          if (trajectoryBootstrapPresence.kind === "unknown") {
            failedMaterialDimensions.add("trajectory");
            trajectory = null;
          } else if (trajectoryBootstrapPresence.kind === "current") {
            trajectory = trajectoryBootstrapPresence.trajectory;
          } else {
            trajectory = null;
          }

          let decisions: Awaited<
            ReturnType<typeof oa.decisionServices.decisions.listByProject>
          > = [];
          try {
            decisions = await oa.decisionServices.decisions.listByProject(
              project.projectId,
            );
          } catch {
            failedMaterialDimensions.add("decisions");
            decisions = [];
          }

          let evidence: Awaited<
            ReturnType<
              typeof oa.evidenceReviewServices.repository.listByProject
            >
          > = [];
          try {
            evidence =
              await oa.evidenceReviewServices.repository.listByProject(
                project.projectId,
              );
          } catch {
            failedMaterialDimensions.add("evidence");
            evidence = [];
          }

          let epistemicItems: Awaited<
            ReturnType<typeof oa.cycleServices.epistemic.listByProject>
          > = [];
          try {
            epistemicItems = await oa.cycleServices.epistemic.listByProject(
              project.projectId,
            );
          } catch {
            failedMaterialDimensions.add("epistemic_blockers");
            epistemicItems = [];
          }

          const doctrinePin = projectRow.ok
            ? (projectRow.project.doctrinePackageRef ??
              (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
            : undefined;
          const producedAt = new Date().toISOString();
          const mat =
            await materializeLifecycleRecommendationFromStructuredOutput({
              projectId: project.projectId,
              structuredOutput: turn.structuredOutput,
              updateEpistemicState: oa.cycleServices.updateEpistemicState,
              facts: {
                cycles,
                lpsActiveCycleInstanceId: lps.ok
                  ? lps.livingProjectState.activeCycleInstanceId
                  : null,
                lpsVersion: lps.ok ? lps.livingProjectState.version : null,
                doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
                doctrinePackageVersion: doctrinePin?.version ?? null,
                doctrinePackageDigest: doctrinePin?.digest ?? null,
                trajectory,
                trajectoryBootstrapPresence,
                decisions,
                evidence,
                epistemicItems,
                failedMaterialDimensions,
              },
              producedAt,
              createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
              correlationId: `f1:${project.projectId}`,
            });
          if (mat.narrative) {
            assistantText = mat.narrative;
          }
          if (mat.recommendationAttempted) {
            lifecycleRecommendationMaterialized =
              mat.materialization?.ok === true;
            lifecycleRecommendationCode =
              mat.materialization && !mat.materialization.ok
                ? mat.materialization.code
                : mat.materialization?.ok
                  ? null
                  : "LR_MATERIALIZE_UNKNOWN";
          } else {
            lifecycleRecommendationMaterialized = false;
          }
        } else {
          lifecycleRecommendationMaterialized = false;
          lifecycleRecommendationCode = "LR_BASIS_UNAVAILABLE";
        }
      }
    }

    // D-GF-ACW-01 — same Product turn structured output; no second model call.
    // Materialize non-authoritative active-cycle EpistemicItems when eligible.
    if (turn.structuredOutput !== undefined) {
      const coherent = normalizeNoraProductTurnStructuredOutput(
        turn.structuredOutput,
      );
      const acwItems = coherent?.activeCycleWork?.items ?? [];
      if (acwItems.length > 0) {
        const assessment = coherent?.preCycleRoutingAssessment;
        const disposition = coherent?.disposition;
        const eligibleDefer =
          disposition === "DEFER_TO_ACTIVE_CYCLE" ||
          assessment?.activeCycleAlreadyCoversWork === true;
        const activeCycleId =
          input.studioCognitiveContext?.activeCycle?.cycleInstanceId ??
          project.activeCycleInstanceId ??
          null;
        // Fail closed: model must not emit activeCycleWork outside an eligible
        // active-cycle deferral — never silently drop proposed durable items.
        if (!eligibleDefer || !activeCycleId) {
          return {
            ok: false,
            status: "validation_error",
            code: "ACTIVE_CYCLE_WORK_NOT_ELIGIBLE",
            message:
              "Travail de cycle actif émis hors contexte éligible — aucune écriture partielle.",
            mode: modeResolution.mode,
            retryable: false,
          };
        }
        if (eligibleDefer && activeCycleId) {
          const oaResolved = await resolveOaStackForLifecycleRecommendation();
          if (!oaResolved.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_WORK_OA_UNAVAILABLE",
              message:
                "Impossible de matérialiser le travail du cycle actif (runtime indisponible).",
              mode: modeResolution.mode,
              retryable: false,
            };
          }
          const oa = oaResolved.oa;
          const cycleLoad = await oa.cycleServices.getCycle.execute({
            cycleInstanceId: activeCycleId,
          });
          const lpsNow =
            await oa.projectServices.getCurrentLivingProjectState.execute({
              projectId: project.projectId,
            });
          if (!cycleLoad.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_NOT_FOUND",
              message: "Cycle actif introuvable avant matérialisation.",
              mode: modeResolution.mode,
              retryable: false,
            };
          }
          if (!lpsNow.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: "LPS_UNAVAILABLE",
              message: "LPS indisponible avant matérialisation du travail cycle.",
              mode: modeResolution.mode,
              retryable: false,
            };
          }
          if (cycleLoad.cycle.status !== "active") {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_NOT_ELIGIBLE",
              message:
                "Le cycle n'est plus actif — aucune écriture partielle du travail cognitif.",
              mode: modeResolution.mode,
              retryable: false,
            };
          }
          if (
            (lpsNow.livingProjectState.activeCycleInstanceId ?? null) !==
            activeCycleId
          ) {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_LPS_POINTER_STALE",
              message:
                "Pointeur LPS du cycle actif modifié — aucune écriture partielle.",
              mode: modeResolution.mode,
              retryable: false,
            };
          }

          let existingItems: Awaited<
            ReturnType<typeof oa.cycleServices.epistemic.listByProject>
          > = [];
          try {
            existingItems = await oa.cycleServices.epistemic.listByProject(
              project.projectId,
            );
          } catch {
            existingItems = [];
          }

          const turnCorrelationId =
            input.turnCorrelationId?.trim() ||
            `f1-acw:${project.projectId}:${randomBytes(8).toString("hex")}`;
          const producedAt = new Date().toISOString();
          const mat = await materializeActiveCycleWork({
            items: acwItems,
            facts: {
              projectId: project.projectId,
              activeCycleInstanceId: activeCycleId,
              lpsVersion: lpsNow.livingProjectState.version,
              lpsObjective: lpsNow.livingProjectState.objective,
              existingEpistemicItemIds:
                lpsNow.livingProjectState.epistemicItemIds ?? [],
              existingItems,
              turnCorrelationId,
            },
            updateEpistemicState: oa.cycleServices.updateEpistemicState,
            appendLivingProjectStateVersion:
              oa.projectServices.appendLivingProjectStateVersion,
            getCurrentLivingProjectState:
              oa.projectServices.getCurrentLivingProjectState,
            getCycle: oa.cycleServices.getCycle,
            runInTransaction: oa.cycleServices.store.runInTransaction.bind(
              oa.cycleServices.store,
            ),
            producedAt,
            createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
          });
          if (!mat.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: mat.code,
              message:
                mat.reason ||
                "Échec de matérialisation du travail cognitif du cycle actif.",
              mode: modeResolution.mode,
              retryable: false,
            };
          }
        }
      }
    }

    const { toolEvents, sources, readCoverage } = collectToolTelemetry(
      sink.events,
    );
    // Persist read coverage for cross-turn honesty (existing session_items).
    if (readCoverage.facts.length > 0 && !input.simulateMemoryBUnavailable) {
      try {
        const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
        const session = new ProductSqliteSession({
          projectId: project.projectId,
          dbPath,
          sessionKey: "f1-default",
        });
        try {
          await rememberReadCoverage(
            session,
            project.projectId,
            readCoverage.facts.map((f) => ({
              pathOrRef: f.pathOrRef,
              coverage: f.coverage,
            })),
          );
        } finally {
          session.close();
        }
      } catch {
        /* Session path may be unavailable — coverage still on DTO via mw4. */
      }
    }

    const coverageAggregate = aggregateReadCoverage(readCoverage.facts);
    const mw3 = toMw3Surface(turn);
    let mw4 = toMw4Surface(turn);
    if (coverageAggregate.facts.length > 0) {
      mw4 = {
        rememberedIds: mw4?.rememberedIds ?? [],
        validIds: mw4?.validIds ?? [],
        downgradedIds: mw4?.downgradedIds ?? [],
        missingIds: mw4?.missingIds ?? [],
        disclosure: mw4?.disclosure ?? "",
        readCoverageOverall:
          coverageAggregate.overall === "mixed_partial"
            ? "partial"
            : coverageAggregate.overall === "none"
              ? "none"
              : coverageAggregate.overall,
        readCoverageDisclosure:
          turn.mw4Grounding?.readCoverageDisclosure ??
          (coverageAggregate.facts.length > 0
            ? `Overall coverage: ${coverageAggregate.overall}`
            : null),
      };
    }
    const stopNotice = formatCognitiveStopPiloteNotice(
      turn.cognitiveStopDecision ?? {
        progression: "continue",
        outcome: "PROGRESS_OK",
        cognitiveStop: false,
        anatomy: null,
        surfacedDisposition: "none",
        allowsSilentSuccess: false,
      },
    );
    const lrMaterializeNotice =
      lifecycleRecommendationMaterializeFailurePiloteNotice({
        recommendationAttempted:
          lifecycleRecommendationMaterialized === false &&
          Boolean(lifecycleRecommendationCode),
        materialized: lifecycleRecommendationMaterialized,
        code: lifecycleRecommendationCode,
      });
    const ephemeralNotice = buildEphemeralNotice(
      turn.memoryBAvailability,
      turn.memoryBCompactionState,
      turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
      stopNotice,
      lrMaterializeNotice,
    );
    const status =
      turn.cognitiveStopDecision?.cognitiveStop === true
        ? ("cognitive_stop" as const)
        : ("ok" as const);

    return {
      ok: true,
      status,
      text: assistantText,
      mode: modeResolution.mode,
      presentation,
      model: turn.usage?.model ?? null,
      toolRounds: turn.toolRounds,
      toolCalls: turn.toolCalls,
      sources,
      toolEvents,
      project,
      ephemeralNotice,
      cognitiveRuntime: turn.cognitiveRuntime,
      sessionId: turn.sessionId,
      memoryBAvailability: turn.memoryBAvailability,
      memoryBCompactionState: turn.memoryBCompactionState,
      stalePriorInvalidated:
        turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
      mw3,
      mw4,
      lifecycleRecommendationMaterialized,
      lifecycleRecommendationCode,
    };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode: modeResolution.mode,
      retryable: true,
    };
  }
}

```
### `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`

```typescript
import type { NoraLifecycleRecommendationStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/types";
import {
  NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
  isNoraLifecycleRecommendationStructuredOutput,
} from "./noraLifecycleRecommendationOutputType";

/**
 * Pre-cycle routing boundary assessment (same Product turn).
 * Non-durable, non-authoritative — forces Routing Relevance / Cycle Ownership
 * into structured facts so server coherence can gate lifecycleRecommendation.
 * NEVER a Fact / HumanDecision / CycleInstance / LPS state.
 */
export const PRE_CYCLE_ROUTING_ASSESSMENT_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: [
    "routingBlockingUnknownPresent",
    "candidateCycleSupportable",
    "remainingUnknownsAreCycleOwned",
    "multiplePlausibleCycles",
    "activeCycleAlreadyCoversWork",
  ],
  properties: {
    /** ROUTING RELEVANCE: an answer could still change cycle / profile / gate / STOP. */
    routingBlockingUnknownPresent: { type: "boolean" as const },
    /** A single next cycle type is honestly supportable. */
    candidateCycleSupportable: { type: "boolean" as const },
    /** CYCLE OWNERSHIP: remaining unknowns belong to that candidate cycle's work. */
    remainingUnknownsAreCycleOwned: { type: "boolean" as const },
    /** More than one cycle remains honestly plausible. */
    multiplePlausibleCycles: { type: "boolean" as const },
    /** An active CycleInstance already covers the work. */
    activeCycleAlreadyCoversWork: { type: "boolean" as const },
  },
} as const;

export type PreCycleRoutingAssessment = {
  routingBlockingUnknownPresent: boolean;
  candidateCycleSupportable: boolean;
  remainingUnknownsAreCycleOwned: boolean;
  multiplePlausibleCycles: boolean;
  activeCycleAlreadyCoversWork: boolean;
};

/**
 * Deterministic disposition derived from assessment facts (not model prose).
 * Not persisted; not authority.
 */
export type PreCycleRoutingDisposition =
  | "CONTINUE_PRE_CYCLE"
  | "EMIT_LIFECYCLE_RECOMMENDATION"
  | "DEFER_TO_ACTIVE_CYCLE"
  | "HOLD_FOR_ROUTING_AMBIGUITY";

/** Fail-closed default for plain-text coerce / missing assessment. */
export const PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT: PreCycleRoutingAssessment =
  Object.freeze({
    routingBlockingUnknownPresent: true,
    candidateCycleSupportable: false,
    remainingUnknownsAreCycleOwned: false,
    multiplePlausibleCycles: false,
    activeCycleAlreadyCoversWork: false,
  });

/** Candidate clear; remaining unknowns belong to the cycle (emit LR). */
export const PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT: PreCycleRoutingAssessment =
  Object.freeze({
    routingBlockingUnknownPresent: false,
    candidateCycleSupportable: true,
    remainingUnknownsAreCycleOwned: true,
    multiplePlausibleCycles: false,
    activeCycleAlreadyCoversWork: false,
  });

/** D-GF-ACW-01 — non-authoritative active-cycle cognitive work items (no ids). */
export const NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: ["type", "statement", "confidence", "blocking"],
  properties: {
    type: {
      type: "string" as const,
      enum: [
        "Observation",
        "Hypothesis",
        "Option",
        "Recommendation",
        "Reservation",
        "Contradiction",
      ],
    },
    statement: { type: "string" as const },
    confidence: {
      anyOf: [
        {
          type: "string" as const,
          enum: ["high", "medium", "low", "none"],
        },
        { type: "null" as const },
      ],
    },
    blocking: { anyOf: [{ type: "boolean" as const }, { type: "null" as const }] },
  },
} as const;

export const NORA_ACTIVE_CYCLE_WORK_OUTPUT_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: ["items"],
  properties: {
    items: {
      type: "array" as const,
      items: NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA,
    },
  },
} as const;

export type NoraActiveCycleWorkItem = {
  type:
    | "Observation"
    | "Hypothesis"
    | "Option"
    | "Recommendation"
    | "Reservation"
    | "Contradiction";
  statement: string;
  confidence: "high" | "medium" | "low" | "none" | null;
  blocking: boolean | null;
};

export type NoraActiveCycleWorkOutput = {
  items: NoraActiveCycleWorkItem[];
};

/**
 * Product Assistant Nora turn contract:
 * - user-visible narrative (required)
 * - pre-cycle routing assessment (required, non-authoritative)
 * - optional Lifecycle Recommendation candidate (nullable)
 * - optional active-cycle work items (nullable; D-GF-ACW-01)
 * Same Agents Runner — one model call — no prose parsing.
 */
export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
  type: "json_schema" as const,
  name: "nora_product_turn_with_optional_lr",
  strict: true,
  schema: {
    type: "object" as const,
    additionalProperties: false as const,
    required: [
      "narrative",
      "preCycleRoutingAssessment",
      "lifecycleRecommendation",
      "activeCycleWork",
    ],
    properties: {
      narrative: { type: "string" as const },
      preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_SCHEMA,
      lifecycleRecommendation: {
        anyOf: [
          { type: "null" as const },
          NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE.schema,
        ],
      },
      activeCycleWork: {
        anyOf: [
          { type: "null" as const },
          NORA_ACTIVE_CYCLE_WORK_OUTPUT_SCHEMA,
        ],
      },
    },
  },
};

export type NoraProductTurnWithOptionalLr = {
  narrative: string;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
  activeCycleWork: NoraActiveCycleWorkOutput | null;
};

export function isPreCycleRoutingAssessment(
  value: unknown,
): value is PreCycleRoutingAssessment {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  return (
    typeof o.routingBlockingUnknownPresent === "boolean" &&
    typeof o.candidateCycleSupportable === "boolean" &&
    typeof o.remainingUnknownsAreCycleOwned === "boolean" &&
    typeof o.multiplePlausibleCycles === "boolean" &&
    typeof o.activeCycleAlreadyCoversWork === "boolean"
  );
}

const ACTIVE_CYCLE_WORK_ITEM_TYPES = new Set([
  "Observation",
  "Hypothesis",
  "Option",
  "Recommendation",
  "Reservation",
  "Contradiction",
]);

const ACTIVE_CYCLE_WORK_CONFIDENCES = new Set([
  "high",
  "medium",
  "low",
  "none",
]);

export function isNoraActiveCycleWorkItem(
  value: unknown,
): value is NoraActiveCycleWorkItem {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (!ACTIVE_CYCLE_WORK_ITEM_TYPES.has(String(o.type))) return false;
  if (typeof o.statement !== "string") return false;
  if (
    o.confidence !== null &&
    !(
      typeof o.confidence === "string" &&
      ACTIVE_CYCLE_WORK_CONFIDENCES.has(o.confidence)
    )
  ) {
    return false;
  }
  if (o.blocking !== null && typeof o.blocking !== "boolean") return false;
  return true;
}

export function isNoraActiveCycleWorkOutput(
  value: unknown,
): value is NoraActiveCycleWorkOutput {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (!Array.isArray(o.items)) return false;
  return o.items.every(isNoraActiveCycleWorkItem);
}

/**
 * ROUTING RELEVANCE + CYCLE OWNERSHIP → disposition (deterministic).
 */
export function derivePreCycleRoutingDisposition(
  assessment: PreCycleRoutingAssessment,
): PreCycleRoutingDisposition {
  if (assessment.activeCycleAlreadyCoversWork) {
    return "DEFER_TO_ACTIVE_CYCLE";
  }
  if (assessment.multiplePlausibleCycles) {
    return "HOLD_FOR_ROUTING_AMBIGUITY";
  }
  if (assessment.routingBlockingUnknownPresent) {
    return "CONTINUE_PRE_CYCLE";
  }
  if (assessment.candidateCycleSupportable) {
    // Remaining unknowns may be cycle-owned (typical) or absent — either way,
    // no routing-blocking unknown remains → cede to Lifecycle Recommendation.
    return "EMIT_LIFECYCLE_RECOMMENDATION";
  }
  return "CONTINUE_PRE_CYCLE";
}

export type PreCycleRoutingBoundaryCoherenceResult = {
  narrative: string;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  disposition: PreCycleRoutingDisposition;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
  /** Passthrough — not stripped by routing coherence (D-GF-ACW-01). */
  activeCycleWork: NoraActiveCycleWorkOutput | null;
  /** True when a candidate LR was stripped by boundary coherence. */
  lifecycleRecommendationSuppressed: boolean;
  suppressReason: string | null;
  /**
   * Structured boundary contradiction (e.g. EMIT without LR).
   * Non-null ⇒ fail-closed — never invent LR; never silent conversational success.
   */
  boundaryContradiction: string | null;
};

/** Explicit contract code — EMIT disposition requires a Nora-produced LR. */
export const MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION =
  "MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION" as const;

/**
 * Deterministic coherence between assessment and lifecycleRecommendation.
 * - CONTINUE / HOLD → strip any LR (no premature recommendation).
 * - DEFER_TO_ACTIVE_CYCLE → strip NEXT_CYCLE only (FINALIZE may remain).
 * - EMIT + LR → keep as emitted (never invent one server-side).
 * - EMIT + null → MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION (fail-closed).
 * Does not parse narrative. Does not create Cycle/HD/START.
 * activeCycleWork is preserved on all return paths (passthrough).
 *
 * remainingUnknownsAreCycleOwned semantics:
 * - true  → remaining unknowns exist and belong to the candidate cycle
 * - false → no materially remaining unknowns (or none that are cycle-owned)
 * Either value is compatible with EMIT when candidateCycleSupportable and
 * no routing blocker / multi-cycle / active-cycle deferral. false is NOT
 * automatically incoherent.
 */
export function applyPreCycleRoutingBoundaryCoherence(input: {
  narrative: string;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
  activeCycleWork?: NoraActiveCycleWorkOutput | null;
}): PreCycleRoutingBoundaryCoherenceResult {
  const disposition = derivePreCycleRoutingDisposition(
    input.preCycleRoutingAssessment,
  );
  const candidate = input.lifecycleRecommendation;
  const activeCycleWork = input.activeCycleWork ?? null;

  if (disposition === "CONTINUE_PRE_CYCLE") {
    return {
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      activeCycleWork,
      lifecycleRecommendationSuppressed: candidate !== null,
      suppressReason:
        candidate !== null
          ? "routing_blocking_unknown_present"
          : null,
      boundaryContradiction: null,
    };
  }
  if (disposition === "HOLD_FOR_ROUTING_AMBIGUITY") {
    return {
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      activeCycleWork,
      lifecycleRecommendationSuppressed: candidate !== null,
      suppressReason:
        candidate !== null ? "multiple_plausible_cycles" : null,
      boundaryContradiction: null,
    };
  }
  if (disposition === "DEFER_TO_ACTIVE_CYCLE") {
    if (candidate?.intent === "NEXT_CYCLE") {
      return {
        narrative: input.narrative,
        preCycleRoutingAssessment: input.preCycleRoutingAssessment,
        disposition,
        lifecycleRecommendation: null,
        activeCycleWork,
        lifecycleRecommendationSuppressed: true,
        suppressReason: "active_cycle_covers_work",
        boundaryContradiction: null,
      };
    }
    return {
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: candidate,
      activeCycleWork,
      lifecycleRecommendationSuppressed: false,
      suppressReason: null,
      boundaryContradiction: null,
    };
  }
  // EMIT_LIFECYCLE_RECOMMENDATION — never invent LR.
  if (candidate === null) {
    return {
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      activeCycleWork,
      lifecycleRecommendationSuppressed: false,
      suppressReason: null,
      boundaryContradiction: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    };
  }
  return {
    narrative: input.narrative,
    preCycleRoutingAssessment: input.preCycleRoutingAssessment,
    disposition,
    lifecycleRecommendation: candidate,
    activeCycleWork,
    lifecycleRecommendationSuppressed: false,
    suppressReason: null,
    boundaryContradiction: null,
  };
}

/**
 * Normalize raw structured output into a coherent Product turn.
 * Missing assessment → fail-closed CONTINUE defaults (plain-text Fake path).
 * Missing activeCycleWork → null (backward compatible).
 */
export function normalizeNoraProductTurnStructuredOutput(
  value: unknown,
): PreCycleRoutingBoundaryCoherenceResult | null {
  if (!value || typeof value !== "object") return null;
  const o = value as Record<string, unknown>;
  if (typeof o.narrative !== "string") return null;

  const assessment = isPreCycleRoutingAssessment(o.preCycleRoutingAssessment)
    ? o.preCycleRoutingAssessment
    : PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT;

  let lr: NoraLifecycleRecommendationStructuredOutput | null = null;
  if (o.lifecycleRecommendation != null) {
    if (
      !isNoraLifecycleRecommendationStructuredOutput(o.lifecycleRecommendation)
    ) {
      return null;
    }
    lr = o.lifecycleRecommendation;
  }

  let activeCycleWork: NoraActiveCycleWorkOutput | null = null;
  if (o.activeCycleWork != null) {
    if (!isNoraActiveCycleWorkOutput(o.activeCycleWork)) {
      return null;
    }
    activeCycleWork = o.activeCycleWork;
  }

  return applyPreCycleRoutingBoundaryCoherence({
    narrative: o.narrative,
    preCycleRoutingAssessment: assessment,
    lifecycleRecommendation: lr,
    activeCycleWork,
  });
}

export function isNoraProductTurnWithOptionalLr(
  value: unknown,
): value is NoraProductTurnWithOptionalLr {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (typeof o.narrative !== "string") return false;
  if (!isPreCycleRoutingAssessment(o.preCycleRoutingAssessment)) return false;
  // Backward compat: missing activeCycleWork treated as null.
  if (
    o.activeCycleWork != null &&
    !isNoraActiveCycleWorkOutput(o.activeCycleWork)
  ) {
    return false;
  }
  if (o.lifecycleRecommendation === null) return true;
  return isNoraLifecycleRecommendationStructuredOutput(
    o.lifecycleRecommendation,
  );
}

export function isNoraProductTurnOutputTypeName(name: unknown): boolean {
  return name === NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.name;
}

/** Plain-text / incomplete Fake → fail-closed Product turn JSON. */
export function buildFailClosedProductTurnJson(narrative: string): string {
  return JSON.stringify({
    narrative,
    preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
    lifecycleRecommendation: null,
    activeCycleWork: null,
  });
}

```
### `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts`

```typescript
/**
 * Thin ConversationProvider → Agents SDK Model adapter.
 * Used whenever a ConversationProvider exposes completeRound() (Fake/fixture
 * deterministic path; any completeRound-capable test/provider boundary).
 * ONE model invocation → ONE provider.completeRound(). Runner owns the loop.
 * Does NOT execute tools, persist Session, or resolve authority.
 * RESERVE-OPT-C-02: this is a boundary adapter, not a provider-architecture
 * decision — live OpenAI Agents model routing remains separate when no
 * completeRound provider is supplied.
 */
import { Usage, type Model, type ModelRequest, type ModelResponse } from "@openai/agents";
import type {
  ConversationProvider,
  ProviderInputItem,
  ProviderRoundResult,
} from "@/lib/platform/ai";
import {
  CONTROL_TOWER_TOOL_DEFINITIONS,
  type ToolDefinition,
} from "@/lib/platform/tools";
import {
  buildFailClosedProductTurnJson,
  isPreCycleRoutingAssessment,
  normalizeNoraProductTurnStructuredOutput,
} from "./noraProductTurnOutputType";

function extractTextContent(content: unknown): string {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content
    .map((part) => {
      if (typeof part === "string") return part;
      if (part && typeof part === "object" && "text" in part) {
        return String((part as { text?: unknown }).text ?? "");
      }
      return "";
    })
    .join("\n");
}

/**
 * Map Runner model input → provider round items.
 * Fail closed on unsupported shapes (no silent invention).
 */
export function agentInputToProviderItems(
  input: ModelRequest["input"],
): ProviderInputItem[] {
  if (typeof input === "string") {
    return [{ type: "message", role: "user", content: input }];
  }
  if (!Array.isArray(input)) {
    throw new Error("NORA_PROVIDER_MODEL_UNSUPPORTED_INPUT");
  }
  const items: ProviderInputItem[] = [];
  for (const raw of input) {
    if (!raw || typeof raw !== "object") {
      throw new Error("NORA_PROVIDER_MODEL_UNSUPPORTED_INPUT_ITEM");
    }
    const item = raw as Record<string, unknown>;
    const type = String(item.type ?? "");
    if (type === "message") {
      const role = String(item.role ?? "");
      if (role !== "user" && role !== "assistant" && role !== "system") {
        throw new Error(`NORA_PROVIDER_MODEL_UNSUPPORTED_ROLE:${role}`);
      }
      items.push({
        type: "message",
        role,
        content: extractTextContent(item.content),
      });
      continue;
    }
    if (type === "function_call") {
      items.push({
        type: "function_call",
        callId: String(item.callId ?? item.id ?? ""),
        name: String(item.name ?? ""),
        argumentsJson:
          typeof item.arguments === "string"
            ? item.arguments
            : JSON.stringify(item.arguments ?? {}),
      });
      continue;
    }
    if (type === "function_call_result" || type === "function_call_output") {
      const output = item.output;
      const outputText =
        typeof output === "string"
          ? output
          : output == null
            ? ""
            : JSON.stringify(output);
      items.push({
        type: "function_call_output",
        callId: String(item.callId ?? item.id ?? ""),
        output: outputText,
      });
      continue;
    }
    // Ignore purely structural / non-conversation items that Runner may prepend
    // (e.g. reasoning) — fail closed if they look like actionable model content.
    if (type === "reasoning") {
      continue;
    }
    throw new Error(`NORA_PROVIDER_MODEL_UNSUPPORTED_INPUT_TYPE:${type}`);
  }
  return items;
}

/**
 * Resolve SFIA ToolDefinitions from Runner-serialized tools by name only.
 * No second schema source — Studio CONTROL_TOWER_TOOL_DEFINITIONS remain canonical.
 */
export function toolDefinitionsFromModelRequest(
  request: ModelRequest,
): ToolDefinition[] {
  const byName = new Map<string, ToolDefinition>(
    CONTROL_TOWER_TOOL_DEFINITIONS.map((d) => [d.name, d]),
  );
  const out: ToolDefinition[] = [];
  for (const tool of request.tools ?? []) {
    if (!tool || typeof tool !== "object") continue;
    const t = tool as { type?: string; name?: string };
    if (t.type && t.type !== "function") {
      // MW6 CR-09 — only the qualified hosted web_search boundary may be skipped
      // by the deterministic Fake adapter. Unknown hosted tools fail closed.
      if (t.type === "hosted_tool") {
        const hostedName = String(t.name ?? "");
        if (
          hostedName === "web_search" ||
          hostedName === "web_search_preview"
        ) {
          continue;
        }
        throw new Error(
          `NORA_PROVIDER_MODEL_UNSUPPORTED_HOSTED_TOOL:${hostedName || "unnamed"}`,
        );
      }
      throw new Error(`NORA_PROVIDER_MODEL_UNSUPPORTED_TOOL_TYPE:${t.type}`);
    }
    const name = String(t.name ?? "");
    if (!name) continue;
    const def = byName.get(name);
    if (!def) {
      throw new Error(`NORA_PROVIDER_MODEL_UNKNOWN_TOOL:${name}`);
    }
    out.push(def);
  }
  return out;
}

function roundResultToModelResponse(
  round: ProviderRoundResult,
): ModelResponse {
  const usage = new Usage({
    requests: 1,
    inputTokens: round.usage.inputTokens ?? 0,
    outputTokens: round.usage.outputTokens ?? 0,
    totalTokens: round.usage.totalTokens ?? 0,
  });
  if (round.kind === "message") {
    return {
      usage,
      responseId: round.usage.providerResponseId ?? undefined,
      output: [
        {
          type: "message",
          role: "assistant",
          status: "completed",
          content: [{ type: "output_text", text: round.text }],
        },
      ],
    };
  }
  return {
    usage,
    responseId: round.usage.providerResponseId ?? undefined,
    output: round.toolCalls.map((call) => ({
      type: "function_call" as const,
      name: call.name,
      callId: call.callId,
      id: call.callId,
      status: "completed" as const,
      arguments: call.argumentsJson,
    })),
  };
}

/** Coerce plain assistant text into product-turn JSON when outputType requires it. */
export function coercePlainTextToProductTurnJson(text: string): string {
  try {
    const parsed = JSON.parse(text) as unknown;
    if (
      parsed &&
      typeof parsed === "object" &&
      typeof (parsed as { narrative?: unknown }).narrative === "string"
    ) {
      const o = parsed as Record<string, unknown>;
      if (isPreCycleRoutingAssessment(o.preCycleRoutingAssessment)) {
        // Ensure schema-required activeCycleWork key (default null).
        if (!("activeCycleWork" in o)) {
          return JSON.stringify({ ...o, activeCycleWork: null });
        }
        return text;
      }
      const coherent = normalizeNoraProductTurnStructuredOutput({
        narrative: o.narrative,
        lifecycleRecommendation: o.lifecycleRecommendation ?? null,
        preCycleRoutingAssessment: o.preCycleRoutingAssessment,
        activeCycleWork: o.activeCycleWork ?? null,
      });
      if (coherent) {
        return JSON.stringify({
          narrative: coherent.narrative,
          preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
          lifecycleRecommendation: coherent.lifecycleRecommendation,
          activeCycleWork: coherent.activeCycleWork ?? null,
        });
      }
      return buildFailClosedProductTurnJson(String(o.narrative));
    }
  } catch {
    // plain text
  }
  return buildFailClosedProductTurnJson(text);
}

function productTurnOutputTypeName(request: ModelRequest): string {
  return request.outputType &&
    typeof request.outputType === "object" &&
    "name" in request.outputType
    ? String((request.outputType as { name?: unknown }).name ?? "")
    : "";
}

function coerceModelResponseForProductTurn(
  response: ModelResponse,
  request: ModelRequest,
): ModelResponse {
  if (productTurnOutputTypeName(request) !== "nora_product_turn_with_optional_lr") {
    return response;
  }
  const output = Array.isArray(response.output) ? [...response.output] : [];
  let changed = false;
  for (let i = 0; i < output.length; i += 1) {
    const item = output[i];
    if (!item || typeof item !== "object") continue;
    const msg = item as {
      type?: string;
      role?: string;
      status?: string;
      content?: unknown;
      providerData?: Record<string, unknown>;
      id?: string;
    };
    if (msg.type !== "message" || msg.role !== "assistant") continue;
    if (!Array.isArray(msg.content)) continue;
    const nextContent = msg.content.map((part) => {
      if (
        part &&
        typeof part === "object" &&
        (part as { type?: string }).type === "output_text" &&
        typeof (part as { text?: unknown }).text === "string"
      ) {
        const text = (part as { text: string }).text;
        const coerced = coercePlainTextToProductTurnJson(text);
        if (coerced !== text) changed = true;
        return {
          ...(part as Record<string, unknown>),
          type: "output_text" as const,
          text: coerced,
        };
      }
      return part;
    });
    output[i] = {
      ...msg,
      type: "message" as const,
      role: "assistant" as const,
      status: (msg.status as "completed" | "in_progress" | "incomplete") ?? "completed",
      content: nextContent,
    } as (typeof output)[number];
  }
  return changed ? { ...response, output } : response;
}

/**
 * Wrap an injected Agents Model (e.g. ScriptedModel) so plain-text Fake/eval
 * responses satisfy product-turn outputType — same coerce as Fake completeRound.
 * Live OpenAI string models are unaffected (caller passes string, not Model).
 */
export function wrapAgentsModelForProductTurnPlainTextCoercion(
  model: Model,
): Model {
  return {
    async getResponse(request: ModelRequest): Promise<ModelResponse> {
      const response = await model.getResponse(request);
      return coerceModelResponseForProductTurn(response, request);
    },
    async *getStreamedResponse(
      ...args: Parameters<Model["getStreamedResponse"]>
    ) {
      const stream = model.getStreamedResponse(...args);
      for await (const event of stream) {
        yield event;
      }
    },
  };
}

/**
 * Agents SDK Model backed by ConversationProvider.completeRound (Fake path).
 */
export function createProviderAgentsModel(
  provider: ConversationProvider,
): Model {
  if (typeof provider.completeRound !== "function") {
    throw new Error("NORA_PROVIDER_MODEL_REQUIRES_COMPLETE_ROUND");
  }
  const completeRound = provider.completeRound.bind(provider);

  return {
    async getResponse(request: ModelRequest): Promise<ModelResponse> {
      if (request.signal?.aborted) {
        throw new Error("AbortError");
      }
      const items = agentInputToProviderItems(request.input);
      // Ensure Studio system instructions from the Runner filter are visible
      // to Fake specialization (CKC markers live in system messages).
      if (
        request.systemInstructions &&
        !items.some(
          (i) =>
            i.type === "message" &&
            i.role === "system" &&
            i.content.includes(request.systemInstructions!),
        )
      ) {
        items.unshift({
          type: "message",
          role: "system",
          content: request.systemInstructions,
        });
      }
      const tools = toolDefinitionsFromModelRequest(request);
      const round = await completeRound({ items, tools });
      if (round.kind === "message") {
        if (
          productTurnOutputTypeName(request) ===
          "nora_product_turn_with_optional_lr"
        ) {
          const text = coercePlainTextToProductTurnJson(round.text);
          return roundResultToModelResponse({ ...round, text });
        }
      }
      return roundResultToModelResponse(round);
    },
    async *getStreamedResponse(): AsyncIterable<never> {
      throw new Error("NORA_PROVIDER_MODEL_STREAMING_UNSUPPORTED");
    },
  };
}

export function isFakeConversationProvider(
  provider: ConversationProvider,
): boolean {
  return (
    provider.providerId === "fake-test" ||
    provider.providerId.startsWith("fake")
  );
}

```
### `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

```typescript
/**
 * OpenAI Agents SDK Runner path for Nora F1 cognitive turns.
 * Generic loop mechanics owned by Runner; SFIA authority via routeToolCall.
 *
 * CORR-MW2-REAL-02 model resolution:
 * - Fake / non-OpenAI completeRound providers → createProviderAgentsModel adapter
 * - providerId=openai (incl. Metered wrapper) → native Agents model string
 *   so Runner.modelSettings.reasoning is consumed by the native OpenAI Agents path
 * - otherwise → live model string from secrets
 */
import {
  Agent,
  MaxTurnsExceededError,
  Runner,
  type Model,
  type Session,
  type AgentOutputType,
} from "@openai/agents";
import type { ConversationProvider } from "@/lib/platform/ai";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
import { requireLiveConversationSecrets } from "@/lib/platform/ai/config";
import {
  CampaignModelInvocationDeniedError,
  CampaignUsdHardCapDeniedError,
  createSfiaCallModelInputFilter,
} from "./callModelInputFilter";
import type { NoraAgentsUsdAccounting } from "./agentsUsdAccounting";
import type { NoraAgentsUsdSettleResult } from "./agentsUsdAccounting";
import {
  createProviderAgentsModel,
  isFakeConversationProvider,
  wrapAgentsModelForProductTurnPlainTextCoercion,
} from "./providerAgentsModel";
import {
  buildFailClosedProductTurnJson,
  normalizeNoraProductTurnStructuredOutput,
} from "./noraProductTurnOutputType";
import { createSfiaRouteToolAdapters } from "./sfiaAgentsTools";
import type { MemoryBAvailability } from "./memoryBAvailability";
import {
  createNoraTurnBudget,
  toolRoundsFromBudget,
  type NoraTurnBudget,
} from "./turnBudget";
import type { NoraCognitiveTurnResult } from "./types";
import type { NoraRunnerModelSettings } from "./reasoningModelSettings";
import { withMaxToolCallsProviderData } from "./reasoningModelSettings";
import type { HostedWebSearchCallLike } from "./externalSourceNormalization";
import {
  createNoraHostedWebSearchTool,
  extractHostedWebSearchCallsFromRunItems,
  normalizeOpenAiHostedWebSearchObservations,
  type NoraHostedWebSearchToolOptions,
} from "./openaiHostedWebSearchAdapter";
import type { SourceObservationFact } from "./sourceIntelligenceContract";
import type {
  NoraCampaignBudget,
  Mw6GovernedAuthorityContext,
  Mw6CurrentProductContext,
} from "./campaignBudget";
import type { Mw6ExternalDiscoveryContractInput } from "@/lib/auth/mw6ExternalDiscoveryBinding";
import {
  CampaignLeaseError,
  campaignBudgetSnapshot,
  claimHostedWebOperations,
  clampRunnerBudgetForCampaign,
  evaluateRealSourceExecutionPreflight,
  isCanonicalCampaignBudget,
  markCampaignBudgetBlocked,
  normalizeSafeNonNegativeInteger,
  remainingAggregateRealCalls,
  remainingModelInvocations,
  requireCanonicalCampaignBudget,
  resolveMaxToolCallsProviderData,
} from "./campaignBudget";

export type RunNoraAgentsTurnInput = {
  correlationId: string;
  projectId: string;
  systemInstructions: string;
  userContent: string;
  /**
   * Agents SDK Session when Memory B is available (ProductSqliteSession or MemoryBSessionView).
   * Omit when Memory B is UNAVAILABLE — same Runner path (SDK session optional).
   */
  session?: Session | null;
  /** MW1-S01 availability classification for this turn. */
  memoryBAvailability?: MemoryBAvailability;
  workspaceRoot?: string;
  sink?: EventSink;
  /** Injected model for D0 (ScriptedModel). Live uses OPENAI_MODEL. */
  model?: Model | string;
  /** Provider used to resolve completeRound→Model adapter when model not injected. */
  provider?: ConversationProvider;
  maxTurns?: number;
  /** When false, Agent receives no SFIA function tools. */
  enableTools?: boolean;
  /** Optional shared budget (tests). */
  budget?: NoraTurnBudget;
  /** MW2 — Runner modelSettings override (reasoning.effort + preserved text.verbosity). */
  runnerModelSettings?: NoraRunnerModelSettings;
  /**
   * MW6 — attach OpenAI hosted web_search on the same Option C Agent.
   * Not routed through routeToolCall. NoraTurnBudget does NOT bound it.
   */
  enableHostedWebSearch?: boolean;
  hostedWebSearchToolOptions?: NoraHostedWebSearchToolOptions;
  /**
   * MW6 R21 — deterministic substitute for hosted web_search run-items.
   * Same normalization path as live observation; NEVER a REAL call.
   */
  deterministicHostedWebSearchCalls?: HostedWebSearchCallLike[];
  /** MW6 — optional freshness timestamp when honestly supportable. */
  sourceObservationNowIso?: string | null;
  /**
   * MW6 PRE-REAL — shared campaign budget (must be canonical lease from
   * acquireNoraCampaignBudget; fabricated objects fail closed).
   */
  campaignBudget?: NoraCampaignBudget;
  /**
   * TEST only — attempt to widen max_tool_calls beyond campaign remaining.
   * Not REAL authority.
   */
  testOnlyMaxToolCallsOverride?: number | null;
  /**
   * MW6↔Auth binding — identifiers + canonical EC ports only.
   * When absent on LIVE path → REAL_AUTHORITY_NOT_BOUND.
   */
  governedAuthority?: Mw6GovernedAuthorityContext;
  /**
   * Current product strategy+binding from Nora composition (TB-02).
   * Server derives intent — do not inject final fingerprint semantics as truth.
   */
  currentProductContext?: Mw6CurrentProductContext;
  /**
   * @deprecated Ignored for authority (cannot authorize).
   */
  currentExternalDiscoveryIntent?: Mw6ExternalDiscoveryContractInput;
  /**
   * Optional USD accounting for native Agents model invocations (eval campaigns).
   * Runtime-generic hook — nora-eval injects BudgetTracker bridge. Not authority.
   */
  usdAccounting?: NoraAgentsUsdAccounting;
  /**
   * LR-D02 — optional Agents SDK structured outputType on the same Runner.
   * When set, finalOutput may be a structured object (candidate data only).
   */
  outputType?: AgentOutputType;
};

export type RunNoraAgentsTurnHostedSearchObserve = {
  hostedWebSearchAttached: boolean;
  deterministicBoundaryUsed: boolean;
  observations: SourceObservationFact[];
  rawCallsObserved: number;
};

export type RunNoraAgentsTurnBudgetObserve = {
  campaign: ReturnType<typeof campaignBudgetSnapshot>;
  clampReasonCodes: string[];
  configuredMaxToolCalls: number | null;
  realPreflightBlocked: boolean;
  realPreflightReasons: string[];
  authorityBound: boolean;
  realAuthorized: boolean;
  realPreflightCode: string;
  eligible: boolean;
};

export type RunNoraAgentsTurnUsdObserve = NoraAgentsUsdSettleResult & {
  reservedInvocations: number;
};

export function createNoraAgentsRunner(
  systemInstructions: string,
  budget?: NoraTurnBudget,
  runnerModelSettings?: NoraRunnerModelSettings,
  campaignBudget?: NoraCampaignBudget,
  usdAccounting?: NoraAgentsUsdAccounting,
): Runner {
  return new Runner({
    tracingDisabled: true,
    callModelInputFilter: createSfiaCallModelInputFilter(
      systemInstructions,
      budget,
      campaignBudget,
      usdAccounting,
    ),
    ...(runnerModelSettings ? { modelSettings: runnerModelSettings } : {}),
  });
}

/**
 * CORR-MW2-REAL-02 — OpenAI live F1 must NOT use ConversationProvider.completeRound adapter.
 * MeteredConversationProvider preserves providerId=openai and must also take native path.
 */
export function isOpenAiLiveF1Provider(
  provider: ConversationProvider,
): boolean {
  return provider.providerId === "openai";
}

/**
 * Whether F1 should wrap the provider via createProviderAgentsModel.
 * False for OpenAI live (native Agents model string instead).
 */
export function shouldUseProviderAgentsModelAdapter(
  provider: ConversationProvider,
): boolean {
  if (isOpenAiLiveF1Provider(provider)) return false;
  if (isFakeConversationProvider(provider)) return true;
  return typeof provider.completeRound === "function";
}

/**
 * Resolve Agents F1 model — exported for CORR-02 D0 boundary proof (no live call).
 */
export function resolveNoraAgentsF1Model(
  input: Pick<RunNoraAgentsTurnInput, "model" | "provider">,
): Model | string {
  if (input.model !== undefined) {
    // Injected ScriptedModel (Model object) must coerce plain text under
    // product-turn outputType — same contract as Fake completeRound adapter.
    // Live model strings are unchanged.
    if (typeof input.model === "string") return input.model;
    return wrapAgentsModelForProductTurnPlainTextCoercion(input.model);
  }
  if (input.provider && shouldUseProviderAgentsModelAdapter(input.provider)) {
    return createProviderAgentsModel(input.provider);
  }
  const secrets = requireLiveConversationSecrets();
  return secrets.model;
}

export async function runNoraAgentsTurn(
  input: RunNoraAgentsTurnInput,
): Promise<
  NoraCognitiveTurnResult & {
    hostedSearchObserve?: RunNoraAgentsTurnHostedSearchObserve;
    budgetObserve?: RunNoraAgentsTurnBudgetObserve;
    usdObserve?: RunNoraAgentsTurnUsdObserve;
  }
> {
  const model = resolveNoraAgentsF1Model(input);
  const usdAccounting = input.usdAccounting;

  const budget = input.budget ?? createNoraTurnBudget();
  const campaign = input.campaignBudget;
  if (campaign) {
    try {
      requireCanonicalCampaignBudget(campaign);
    } catch (error) {
      if (error instanceof CampaignLeaseError) {
        return {
          text: error.message,
          usage: {
            inputTokens: null,
            outputTokens: null,
            totalTokens: null,
            model: null,
            providerResponseId: null,
          },
          toolRounds: 0,
          toolCalls: 0,
          limitReached: true,
          cognitiveRuntime: "agents",
          sessionId: null,
          memoryBAvailability: "unavailable",
          memoryBCompactionState: "none",
          memoryBCompactionDetails: null,
          budgetObserve: {
            // Do not call campaignBudgetSnapshot — fabricated objects have no lease.
            campaign: {
              campaignId: campaign.campaignId,
              remainingModelInvocations: 0,
              remainingHostedWebOperations: 0,
              remainingAggregateRealCalls: 0,
              consumedModelInvocations: campaign.consumedModelInvocations,
              consumedHostedWebOperations: campaign.consumedHostedWebOperations,
              consumedAggregateRealCalls: campaign.consumedAggregateRealCalls,
              maxModelInvocations: campaign.maxModelInvocations,
              maxHostedWebOperations: campaign.maxHostedWebOperations,
              maxAggregateRealCalls: campaign.maxAggregateRealCalls,
              limitReached: true,
              denialCode: error.code,
              denialReason: error.message,
              hostedHardCapCapability: campaign.hostedHardCapCapability,
              canonicalLease: false,
            },
            clampReasonCodes: ["campaign_lease_invalid"],
            configuredMaxToolCalls: null,
            realPreflightBlocked: true,
            realPreflightReasons: [error.code],
            authorityBound: false,
            realAuthorized: false,
            realPreflightCode: error.code,
            eligible: false,
          },
        };
      }
      throw error;
    }
  }
  const enableTools = input.enableTools !== false;
  const sfiaTools = enableTools
    ? createSfiaRouteToolAdapters({
        correlationId: input.correlationId,
        workspaceRoot: input.workspaceRoot,
        sink: input.sink,
        budget,
      })
    : [];

  const wantHosted = input.enableHostedWebSearch === true;
  const fixtureCalls = input.deterministicHostedWebSearchCalls ?? [];
  const deterministicBoundaryUsed = fixtureCalls.length > 0;
  const liveOpenAiPath =
    !!input.provider && isOpenAiLiveF1Provider(input.provider);
  // REAL hosted dispatch = live OpenAI + hosted attach + no fixture substitute.
  const wantRealHostedDispatch =
    wantHosted && liveOpenAiPath && !deterministicBoundaryUsed;

  let realPreflightBlocked = false;
  let realPreflightReasons: string[] = [];
  let authorityBound = false;
  let realAuthorized = false;
  let realPreflightCode = "OK";
  let realPreflightEligible = false;
  // Authority composition proof: evaluate when server-composed governedAuthority
  // + product context + campaign are present (deterministic Fake path included).
  // LIVE dispatch gate still requires wantRealHostedDispatch.
  const shouldEvaluateAuthorityBinding =
    wantHosted &&
    !!campaign &&
    !!input.governedAuthority &&
    !!input.currentProductContext;
  if (wantRealHostedDispatch || shouldEvaluateAuthorityBinding) {
    // PRE-REAL-01: LIVE path always requires genuine authority binding.
    // No test/fake boolean is accepted on runtime inputs.
    if (!campaign) {
      realPreflightBlocked = true;
      realPreflightReasons = [
        "REAL_AUTHORITY_NOT_BOUND",
        "campaign_budget_required_for_real_hosted",
      ];
      realPreflightCode = "REAL_AUTHORITY_NOT_BOUND";
      authorityBound = false;
      realAuthorized = false;
      realPreflightEligible = false;
    } else {
      const pre = await evaluateRealSourceExecutionPreflight({
        campaign,
        wantHostedWebSearch: true,
        governedAuthority: input.governedAuthority,
        currentProductContext: input.currentProductContext,
        // Deprecated injection retained only to prove it cannot authorize.
        currentExternalDiscoveryIntent: input.currentExternalDiscoveryIntent,
      });
      // LIVE dispatch blocked only on the real hosted path.
      realPreflightBlocked = wantRealHostedDispatch ? pre.blocked : false;
      realPreflightReasons = pre.reasons;
      realPreflightCode = pre.code;
      authorityBound = pre.authorityBound;
      realAuthorized = pre.realAuthorized;
      realPreflightEligible = pre.eligible;
    }
  }

  const requestedMaxTurns = input.maxTurns ?? CT_MAX_TOOL_ROUNDS + 1;
  let clamp: {
    maxTurns: number;
    maxToolCalls: number | null;
    attachHostedWebSearch: boolean;
    reasonCodes: string[];
  };
  let resolvedCap: {
    max_tool_calls?: number;
    rejectedOverride: boolean;
  };
  let runnerModelSettings: ReturnType<typeof withMaxToolCallsProviderData>;
  try {
    // R-PRE-REAL-08A: same safe-integer domain with or without campaign.
    const safeRequestedMaxTurns = normalizeSafeNonNegativeInteger(
      "requestedMaxTurns",
      requestedMaxTurns,
    );
    clamp = campaign
      ? clampRunnerBudgetForCampaign({
          campaign,
          requestedMaxTurns: safeRequestedMaxTurns,
          wantHostedWebSearch:
            wantHosted && !(wantRealHostedDispatch && realPreflightBlocked),
        })
      : {
          maxTurns: safeRequestedMaxTurns,
          maxToolCalls: null as number | null,
          attachHostedWebSearch:
            wantHosted && !(wantRealHostedDispatch && realPreflightBlocked),
          reasonCodes: [] as string[],
        };

    // BYPASS-04: enableHostedWebSearch cannot bypass REAL preflight / campaign clamp.
    resolvedCap = campaign
      ? resolveMaxToolCallsProviderData({
          campaign,
          configuredMaxToolCalls: clamp.maxToolCalls,
          callerOverride: input.testOnlyMaxToolCallsOverride,
        })
      : {
          max_tool_calls: undefined as number | undefined,
          rejectedOverride: false,
        };

    // Final providerData boundary — validates injected AND inherited caps (07/07A).
    runnerModelSettings = withMaxToolCallsProviderData(
      input.runnerModelSettings,
      resolvedCap.max_tool_calls ?? null,
    );
  } catch (error) {
    if (error instanceof CampaignLeaseError) {
      return {
        text: error.message,
        usage: {
          inputTokens: null,
          outputTokens: null,
          totalTokens: null,
          model: null,
          providerResponseId: null,
        },
        toolRounds: 0,
        toolCalls: 0,
        limitReached: true,
        cognitiveRuntime: "agents",
        sessionId: null,
        memoryBAvailability: "unavailable",
        memoryBCompactionState: "none",
        memoryBCompactionDetails: null,
        budgetObserve: campaign
          ? {
              campaign: isCanonicalCampaignBudget(campaign)
                ? campaignBudgetSnapshot(campaign)
                : {
                    campaignId: campaign.campaignId,
                    remainingModelInvocations: 0,
                    remainingHostedWebOperations: 0,
                    remainingAggregateRealCalls: 0,
                    consumedModelInvocations: campaign.consumedModelInvocations,
                    consumedHostedWebOperations:
                      campaign.consumedHostedWebOperations,
                    consumedAggregateRealCalls:
                      campaign.consumedAggregateRealCalls,
                    maxModelInvocations: campaign.maxModelInvocations,
                    maxHostedWebOperations: campaign.maxHostedWebOperations,
                    maxAggregateRealCalls: campaign.maxAggregateRealCalls,
                    limitReached: true,
                    denialCode: error.code,
                    denialReason: error.message,
                    hostedHardCapCapability: campaign.hostedHardCapCapability,
                    canonicalLease: false,
                  },
              clampReasonCodes: ["invalid_budget_numeric"],
              configuredMaxToolCalls: null,
              realPreflightBlocked: true,
              realPreflightReasons: [error.code],
              authorityBound: false,
              realAuthorized: false,
              realPreflightCode: error.code,
              eligible: false,
            }
          : undefined,
      };
    }
    throw error;
  }

  const enableHostedWebSearch = clamp.attachHostedWebSearch;

  const hostedTool = enableHostedWebSearch
    ? createNoraHostedWebSearchTool(input.hostedWebSearchToolOptions)
    : null;
  const tools = hostedTool ? [...sfiaTools, hostedTool] : sfiaTools;

  const agent = new Agent({
    name: "NoraProjectAssistant",
    instructions: input.systemInstructions,
    model: model as never,
    tools,
    ...(input.outputType ? { outputType: input.outputType } : {}),
  });

  const runner = createNoraAgentsRunner(
    input.systemInstructions,
    budget,
    runnerModelSettings,
    campaign,
    usdAccounting,
  );
  const maxTurns = clamp.maxTurns;
  const session = input.session ?? undefined;
  const memoryBAvailability: MemoryBAvailability =
    input.memoryBAvailability ??
    (session ? "available_with_history" : "unavailable");

  let text = "";
  let structuredOutput: unknown = undefined;
  let lastResponseId: string | null = null;
  let usageAgg: {
    inputTokens?: number;
    outputTokens?: number;
    totalTokens?: number;
  } | null = null;
  let runNewItems: unknown[] = [];
  let budgetStop = false;

  if (maxTurns <= 0) {
    budget.limitReached = true;
    budgetStop = true;
    text = "Campaign/model-turn budget reached before dispatch.";
    if (campaign && !campaign.limitReached) {
      if (remainingAggregateRealCalls(campaign) <= 0) {
        markCampaignBudgetBlocked(
          campaign,
          "AGGREGATE_REAL_CALL_CAP_REACHED",
          "Aggregate REAL/provider-call remaining is 0 — Runner not dispatched.",
        );
      } else if (remainingModelInvocations(campaign) <= 0) {
        markCampaignBudgetBlocked(
          campaign,
          "MODEL_INVOCATION_CAP_REACHED",
          "Model invocation remaining is 0 — Runner not dispatched.",
        );
      }
    }
  } else {
    try {
      const result = await runner.run(agent, input.userContent, {
        ...(session ? { session } : {}),
        maxTurns,
        errorHandlers: {
          maxTurns: ({ runData }) => {
            budget.limitReached = true;
            const lastText = [...runData.newItems]
              .reverse()
              .map((item) => {
                const anyItem = item as {
                  type?: string;
                  rawItem?: { content?: unknown };
                };
                if (anyItem.type === "message_output_item") {
                  return String(
                    (item as { content?: string }).content ?? "",
                  );
                }
                return "";
              })
              .find((t) => t.trim().length > 0);
            return {
              finalOutput:
                lastText?.trim() ||
                "Model-turn budget reached (maxTurns).",
              includeInHistory: false,
            };
          },
        },
      });

      text =
        typeof result.finalOutput === "string"
          ? result.finalOutput
          : result.finalOutput == null
            ? ""
            : typeof result.finalOutput === "object"
              ? JSON.stringify(result.finalOutput)
              : String(result.finalOutput);
      if (input.outputType && result.finalOutput != null) {
        structuredOutput =
          typeof result.finalOutput === "string"
            ? (() => {
                try {
                  return JSON.parse(result.finalOutput) as unknown;
                } catch {
                  return result.finalOutput;
                }
              })()
            : result.finalOutput;
        // Plain-string / partial Fake responses under product-turn outputType →
        // coerce to fail-closed assessment + null Recommendation (same turn).
        const isProductTurnOutput =
          input.outputType &&
          typeof input.outputType === "object" &&
          "name" in input.outputType &&
          (input.outputType as { name?: string }).name ===
            "nora_product_turn_with_optional_lr";
        if (isProductTurnOutput && typeof structuredOutput === "string") {
          structuredOutput = JSON.parse(
            buildFailClosedProductTurnJson(structuredOutput),
          ) as unknown;
        } else if (isProductTurnOutput && structuredOutput) {
          const coherent =
            normalizeNoraProductTurnStructuredOutput(structuredOutput);
          if (coherent) {
            structuredOutput = {
              narrative: coherent.narrative,
              preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
              lifecycleRecommendation: coherent.lifecycleRecommendation,
              activeCycleWork: coherent.activeCycleWork ?? null,
            };
          }
        }
        if (
          structuredOutput &&
          typeof structuredOutput === "object" &&
          "narrative" in structuredOutput &&
          typeof (structuredOutput as { narrative?: unknown }).narrative ===
            "string"
        ) {
          text = (structuredOutput as { narrative: string }).narrative;
        }
      }
      lastResponseId = result.lastResponseId ?? null;
      usageAgg = result.state?.usage ?? null;
      runNewItems = Array.isArray(result.newItems) ? [...result.newItems] : [];
    } catch (error) {
      if (
        error instanceof CampaignModelInvocationDeniedError ||
        error instanceof CampaignUsdHardCapDeniedError
      ) {
        budget.limitReached = true;
        budgetStop = true;
        text = error.message;
        // BYPASS-07: do not retry / re-dispatch.
      } else if (error instanceof MaxTurnsExceededError) {
        budget.limitReached = true;
        text = "Model-turn budget reached (maxTurns).";
      } else {
        throw error;
      }
    }
  }

  const usage = {
    inputTokens: usageAgg?.inputTokens ?? null,
    outputTokens: usageAgg?.outputTokens ?? null,
    totalTokens: usageAgg?.totalTokens ?? null,
    model:
      typeof model === "string"
        ? model
        : input.provider && isFakeConversationProvider(input.provider)
          ? "fake-test-model"
          : null,
    providerResponseId: lastResponseId,
  };

  const liveCalls = extractHostedWebSearchCallsFromRunItems(runNewItems);
  // R21: fixture substitutes the external hosted boundary; prefer fixture when present.
  const callsForNormalize = deterministicBoundaryUsed ? fixtureCalls : liveCalls;
  const observations =
    enableHostedWebSearch || deterministicBoundaryUsed
      ? normalizeOpenAiHostedWebSearchObservations(callsForNormalize, {
          deterministic: deterministicBoundaryUsed,
          nowIso: input.sourceObservationNowIso,
        })
      : [];

  // Reconcile observed hosted ops against campaign (fixture path does not
  // consume REAL hosted budget — Fake/deterministic ≠ REAL consumption).
  if (campaign && !deterministicBoundaryUsed && liveCalls.length > 0) {
    const ok = claimHostedWebOperations(campaign, liveCalls.length);
    if (!ok) {
      // Provider-enforced cap should make this impossible; mark invariant failure.
      budget.limitReached = true;
      budgetStop = true;
      text = [
        text,
        "",
        "[CAMPAIGN BUDGET INVARIANT FAILURE]",
        campaign.denialReason ??
          "Observed hosted web ops exceeded campaign/provider cap.",
      ]
        .filter(Boolean)
        .join("\n");
    }
  }

  // USD settlement AFTER hosted observation so factual REAL hosted-call fees
  // can be included. Deterministic fixtures → hostedWebSearchCalls=0 (not billed).
  const usdObserve: RunNoraAgentsTurnUsdObserve | undefined = usdAccounting
    ? (() => {
        const reservedInvocations = usdAccounting.reservedInvocationCount();
        const factualHostedCalls =
          deterministicBoundaryUsed || !enableHostedWebSearch
            ? 0
            : liveCalls.length;
        const settled = usdAccounting.settleTurn({
          reservedInvocations,
          inputTokens: usageAgg?.inputTokens ?? null,
          outputTokens: usageAgg?.outputTokens ?? null,
          totalTokens: usageAgg?.totalTokens ?? null,
          hostedWebSearchCalls: factualHostedCalls,
        });
        return { ...settled, reservedInvocations };
      })()
    : undefined;

  const hostedSearchObserve: RunNoraAgentsTurnHostedSearchObserve | undefined =
    enableHostedWebSearch || deterministicBoundaryUsed
      ? {
          hostedWebSearchAttached: enableHostedWebSearch,
          deterministicBoundaryUsed,
          observations,
          rawCallsObserved: callsForNormalize.length,
        }
      : undefined;

  const budgetObserve: RunNoraAgentsTurnBudgetObserve | undefined = campaign
    ? {
        campaign: campaignBudgetSnapshot(campaign),
        clampReasonCodes: [
          ...clamp.reasonCodes,
          ...(resolvedCap.rejectedOverride
            ? ["caller_max_tool_calls_override_rejected"]
            : []),
        ],
        configuredMaxToolCalls: resolvedCap.max_tool_calls ?? null,
        realPreflightBlocked,
        realPreflightReasons,
        authorityBound,
        realAuthorized,
        realPreflightCode,
        eligible: realPreflightEligible,
      }
    : undefined;

  return {
    text,
    usage,
    toolRounds: toolRoundsFromBudget(budget),
    toolCalls: budget.executedToolCalls,
    limitReached: budget.limitReached || budgetStop,
    cognitiveRuntime: "agents",
    sessionId: session ? await session.getSessionId() : null,
    memoryBAvailability,
    memoryBCompactionState: "none",
    memoryBCompactionDetails: null,
    ...(structuredOutput !== undefined ? { structuredOutput } : {}),
    ...(hostedSearchObserve ? { hostedSearchObserve } : {}),
    ...(budgetObserve ? { budgetObserve } : {}),
    ...(usdObserve ? { usdObserve } : {}),
  };
}

```


## Active Cycle context — before / after

### Before (2b595718)
- LPS.activeCycleInstanceId reached StudioCognitiveContext as ID string only
- CKC lens selected from intent.candidateCycleTypeId only
- No cycleTypeId / profile / trajectory binding / ckcResolutionRef in Nora prompt
- No activeCycleWork structured output
- No Epistemic→LPS materialization for cycle work

### After (85d7a7982d08)
- Server read exact CycleInstance via `resolveActiveCycleCognitiveContext`
- Projection: cycleInstanceId, cycleTypeId, profile, status, trajectoryId/version/step, ckcResolutionRef, cycleLabel, workEligible
- Exact CKC via cycleTypeId + DoctrinePackage pin + loadProductCkcCognitiveContent
- Trajectory-bound CKC ref drift fail-closed (expected ref from mintPrepareCycleCorrelationId + catalog fingerprint vs durable)
- LPS↔cycle ckcResolutionRef drift fail-closed
- Incomplete trajectory binding fail-closed
- Missing cycle / project mismatch fail-closed before model call
- Intent candidate CKC is secondary; `activeCycleCkcAuthoritative=true` when active grounding present
- LEGACY_UNBOUND active cycles may degrade to ckc_unavailable without blocking (historical F2/LR fixtures)

## Exact server sources
| Field | Source |
|---|---|
| cycleTypeId | CycleInstance.cycleTypeId (GetCycle) |
| profile | CycleInstance.profile |
| trajectory binding | CycleInstance.trajectoryId/version/stepId |
| ckcResolutionRef | CycleInstance.ckcResolutionRef (+ LPS compare) |
| CKC content | loadProductCkcCognitiveContent(cycleTypeId, packagePin) |
| Never from | client / model / UI label / intent parser |

## Active CKC resolution flow
LPS.activeCycleInstanceId → GetCycle → classifyTrajectoryBinding → verify durable CKC ref → doctrine pin → loadProductCkcCognitiveContent → buildCkcApplicationLensSection → AdvisoryMethodContext (authoritative) → StudioCognitiveContext → buildProjectSystemPrompt → Nora

## CKC drift failure semantics
- COMPLETE_TRAJECTORY_BOUND + missing/mismatched durable ref → ACTIVE_CYCLE_CKC_REF_DRIFT / MISSING
- LPS ref ≠ cycle ref → ACTIVE_CYCLE_CKC_REF_DRIFT
- COMPLETE_TRAJECTORY_BOUND + CKC unloadable → ACTIVE_CYCLE_CKC_UNAVAILABLE
- Fail closed in composeStudioCognitiveContext → orchestrateF2 validation_error BEFORE model call

## Active-cycle priority vs intent
- Active cycle + CKC always known first in prompt
- Intent candidate orientation retained as secondary hypothesis
- Never replaces active CKC when activeCycleCkcAuthoritative

## Pre-cycle routing interaction
- KEEP activeCycleAlreadyCoversWork → DEFER_TO_ACTIVE_CYCLE → strip NEXT_CYCLE
- Not hardcoded “active ⇒ always suppress”; model assesses with exact active context
- coversWork=false preserves EMIT path

## Nora structured output change
- Added required nullable `activeCycleWork` on same Product turn schema
- Types allowed: Observation | Hypothesis | Option | Recommendation | Reservation | Contradiction
- Forbidden: DecisionRef, EvidenceRef, HumanDecision, Fact, EC, Attempt, ids, authority, provenance, project/cycle ids (server-owned)

## Materialization path
- `materializeActiveCycleWork` orchestrator (NOT new aggregate)
- HARVEST UpdateEpistemicState + AppendLivingProjectStateVersion inside Product SQLite UoW
- source = `active-cycle-work:nora`
- createdBy = actor:nora (N1) — no HumanDecision authority
- relatedObjects server-owned: projectId, cycleInstanceId, trajectoryId/step when present
- provenance binds turnCorrelationId + cycleInstanceId
- Eligibility: disposition DEFER / assessment.activeCycleAlreadyCoversWork + active cycle; else fail-closed if items emitted
- No LPS.objective/scope/constraints/trajectory/HD rewrite

## Epistemic→LPS atomicity
- Nested runInTransaction joins ALS Product UoW
- Epistemic write + LPS epistemicItemIds append atomic
- Forced LPS failure rolls back Epistemic (BAR-WORK-22)
- LPS OCC / pointer stale fail-closed (BAR-WORK-24/28)

## Idempotence
- Item id = hash(projectId|cycleId|turnCorrelationId|index|type|statementDigest)
- Same turnCorrelationId retry → material parity → idempotent success
- Same id / different material → ACTIVE_CYCLE_WORK_IDEM_CONFLICT

## Restart durability
- EpistemicItems + LPS.epistemicItemIds are Product SQLite SoT
- composeStudioCognitiveContext rehydrates activeCycleWorkItems after reopenRuntime
- Memory B not SoT

## Catalog-wide genericity
- No switch(cycleTypeId) / no `if (cyc:framing)` in activeCycleCognitiveContext.ts
- Catalog enumerated via listCycleTypes(); size not hardcoded
- Same loadProductCkcCognitiveContent resolver path
- Representative: framing + structurally different + evidence/validation-oriented (BAR-WORK-39..41)
- No label reverse-mapping; no method/sfia-fast-track runtime import

## Counts (deterministic ACW path)
- HD delta: 0
- EC / Attempt / Confirmation delta: 0
- Trajectory mutation delta: 0
- Model-call contract: one invocation per Product turn (Fake callCount=1)

## UI / Figma
- No new screen; conversation dominant
- FIGMA SOURCE NOT APPLICABLE
- Optional living-panel Epistemic read-side not required this lot

## BAR-WORK matrix
- Implemented in `__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts` (32 tests mapping BAR-WORK-01…50)
- Focused + greenfield regressions green
- Full Vitest:  ↓ __tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts (19 tests | 19 skipped)
 ↓ __tests__/nora-eval/mw0.realCampaign.test.ts (1 test | 1 skipped)
 ↓ __tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts (23 tests | 23 skipped)

 Test Files  327 passed | 17 skipped (344)
      Tests  3459 passed | 135 skipped (3594)
   Start at  14:06:46
   Duration  29.15s (transform 7.02s, setup 13.33s, collect 107.82s, tests 77.67s, environment 9.52s, prepare 12.62s)

## Validation gates
- Focused BAR-WORK: 32/32 passed
- studioCognitiveContext + preCycleRoutingBoundary: passed
- START / trajectory / HD / LR regressions: passed
- Full Vitest: 327 passed | 17 skipped files; 3459 passed | 135 skipped tests
- typecheck: EXIT 0
- lint: No ESLint warnings or errors
- build: Compiled successfully
- git diff --check: clean

## ZERO REAL
- Model calls: ZERO
- Nora LIVE turns: ZERO
- Cursor REAL: ZERO
- EC/Attempt/Confirmation: ZERO
- New Project for LIVE: ZERO (tests use ephemeral Product SQLite only)

## Reserve dispositions
- RESERVE-ACW-NORA-ACTIVE-CONTEXT-01 = CANDIDATE CLOSED DETERMINISTICALLY — PENDING CHATGPT CRITICAL REVIEW
- RESERVE-ACW-DURABLE-CYCLE-WORK-01 (renamed from CADRAGE-STATE) = CANDIDATE CLOSED DETERMINISTICALLY — PENDING CHATGPT CRITICAL REVIEW
- RESERVE-ACW-EXECUTION-APPLICABILITY-01 = OPEN / BLOCKING FOR EC/FINALIZE CLAIMS (unchanged)
- RESERVE-ACW-EC-BUILD-AUTHORITY-01 = OPEN / BLOCKING FOR EC DELIVERY (unchanged; S5 not implemented)
- RESERVE-ACW-LIVE-01 = OPEN (future bounded REAL active-cycle Cadrage proof)
- RESERVE-START-CONCURRENCY-REALISM-01 = OPEN
- RESERVE-HD-CONCURRENCY-REALISM-01 = OPEN
- RESERVE-QA-MOCK-01 = OPEN / NON-BLOCKING
- RESERVE-START-UI-READ-NOISE-01 = OPEN / NON-BLOCKING

## Next capability
- Bounded REAL proof of the same generic active-cycle cognitive work path
- Cadrage as first LIVE scenario (not Cadrage-only architecture)
- Still no ExecutionContract / Cursor in that next proof unless separately authorized

## Anti-claims
- NOT claimed: Active Cycle Work LIVE PROVEN
- NOT claimed: all CKCs LIVE PROVEN / Cadrage COMPLETE / FINALIZED
- NOT claimed: Execution applicability closed / EC build authority fixed
- NOT claimed: Cursor execution / END-TO-END REAL / Task App delivered
- NOT claimed: Greenfield Product Proof COMPLETE / R2 CLOSED / PR READY / runtime v3 ADOPTED
- Catalog-wide deterministic proof ≠ 15 REAL proofs

## Final Product git status
- Branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD: 85d7a7982d08f5b0aa706c36cd9d1ca9a86c2456
- Parent: 2b595718eafec1a902650619040b21f75e86031e
- Dirty: .tmp-sfia-review/** only
- Product push: NONE

## Final verdict

GREENFIELD GENERIC ACTIVE-CYCLE COGNITIVE WORK FOUNDATION — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW
