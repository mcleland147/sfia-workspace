/**
 * POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 — integrated Product proof (R1–R4).
 * Deterministic FakeDocsWriteLaunchPort only. ZERO REAL.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import {
  docsWriteArtifactRefsRelative,
  loadDocsWriteArtifactReviewMaterial,
} from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import {
  classifyDocsWriteClaimCompletionFailure,
  governedExecuteAuthorizedContract,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import * as claimCompletionMod from "@/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  materializeProductOutcomeFromAttempt,
  rehydrateProductOutcomeFromAttempt,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import {
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  materializeLifecycleRecommendationFromStructuredOutput,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  prepareCycleFromValidatedTrajectory,
  resolveTrajectoryBootstrapPresence,
  startPreparedTrajectoryCycle,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  MemoryLaunchSafetyJournal,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  isStudioCursorRealEnabled,
  type FakeDocsWriteLaunchPortOptions,
} from "@/lib/oa/execution-attempt";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
  type RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";

import { W2_REGISTRY_ROOT, W2_SCHEMAS_ROOT } from "./w2Harness";

const IDENTITY = "acme/widget";
const BRANCH = "main";
const NOW = "2026-09-16T18:00:00.000Z";
const PILOTE = LOCAL_PILOTE_ACTOR;
const TARGET_PATH = "docs/functional-design.md";
const ARTIFACT_CONTENT =
  "# Functional design\n\n## Goals\nPost-execution handoff integrated proof.\n";

const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const tempRoots: string[] = [];
let previousProductDb: string | undefined;
let previousManaged: string | undefined;
let previousProvider: string | undefined;
let previousMorris: string | undefined;
let previousAllowReset: string | undefined;

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempRoots.push(dir);
  return dir;
}

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function assertRealOff(): void {
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.OPS1_CURSOR_REAL = "0";
  expect(isStudioCursorRealEnabled()).toBe(false);
}

function initManagedRepo(managedBase: string, identity: string) {
  fs.mkdirSync(managedBase, { recursive: true });
  const repoRoot = path.join(managedBase, identity.replace("/", "__"));
  fs.mkdirSync(path.join(repoRoot, "docs"), { recursive: true });
  fs.writeFileSync(path.join(repoRoot, "docs", ".keep"), "");
  execFileSync("git", ["init"], { cwd: repoRoot });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: repoRoot,
  });
  execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
  execFileSync("git", ["add", "."], { cwd: repoRoot });
  execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
  const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
  return { repoRoot, baseHeadSha };
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:peh-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    this.n += 1;
    return `lps:peh-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    this.n += 1;
    return `cor:peh-${this.prefix}-${this.n}`;
  }
}

type HandoffCtx = {
  suffix: string;
  root: string;
  managedBase: string;
  repoRoot: string;
  baseHeadSha: string;
  productDbPath: string;
  refsRoot: string;
  runtime: RuntimeApplicationService;
  oa: RuntimeOaStack;
  projectId: string;
  cycleInstanceId: string;
  decisionId: string;
  fakeLaunch: FakeDocsWriteLaunchPort;
  currentContext: {
    projectId: string;
    lpsId: string;
    lpsVersion: number;
    doctrineDigest: string;
    activeCycleInstanceId: string;
  };
};

async function bootHandoffJourney(
  suffix: string,
  launchOverrides: Pick<
    FakeDocsWriteLaunchPortOptions,
    "cursorReportMode" | "content" | "targetPath"
  > = {},
): Promise<HandoffCtx> {
  const root = tempDir(`sfia-peh-${suffix}-`);
  const managedBase = path.join(root, "managed");
  const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);
  const gitState = new FakeCursorGitExternalState({
    worktreeRoot: repoRoot,
    initialBranch: BRANCH,
    initialSha: baseHeadSha,
  });
  const fakeLaunch = new FakeDocsWriteLaunchPort({
    worktreeRoot: repoRoot,
    pathAllowlist: ["docs/"],
    defaultBranch: BRANCH,
    repositoryRef: IDENTITY,
    gitState,
    targetPath: TARGET_PATH,
    content: ARTIFACT_CONTENT,
    ...launchOverrides,
  });
  const safetyJournal = new MemoryLaunchSafetyJournal();
  const productDbPath = path.join(root, "oa.sqlite");
  const refsRoot = path.join(path.dirname(productDbPath), "mission-result-refs");
  process.env.SFIA_STUDIO_PRODUCT_DB_PATH = productDbPath;
  process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;

  const runtime = getRuntimeApplicationService({
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: NOW,
    idSource: new FixedIdSource(suffix),
    auditMode: "noop",
    productDbPath,
    realBoundary: {
      launchPort: fakeLaunch,
      safetyJournal,
      managedRepoRootBase: managedBase,
    },
  });
  const oa = runtime.oa!;

  const created = await runtime.createProject({
    name: `PEH ${suffix}`,
    objective: "Post-execution handoff integrated",
    context: "delivery",
    criticality: "STANDARD",
    constraints: ["ZERO LIVE"],
    shortReference: `PEH${suffix}`.slice(0, 8),
    idempotencyKey: `idem:peh-${suffix}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("createProject");
  const projectId = created.project.projectId;

  const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
    projectId,
    actor: PILOTE,
    binding: {
      provider: "github",
      identity: IDENTITY,
      remoteUrl: `https://github.com/${IDENTITY}.git`,
      defaultBranch: BRANCH,
      pathRoot: "docs",
      baseSha: baseHeadSha,
    },
  });
  expect(bound.ok).toBe(true);

  const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions0 = await oa.decisionServices.decisions.listByProject(projectId);
  const lpsBoot = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lpsBoot.ok) throw new Error("lps");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const projectBoot = await oa.projectServices.getProject.execute({ projectId });
  if (!projectBoot.ok || !projectBoot.project.doctrinePackageRef) {
    throw new Error("doctrine pin missing");
  }
  const pin = projectBoot.project.doctrinePackageRef;

  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "PEH Next cycle.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Design fonctionnel.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:functional-design",
        rationale: "PEH",
        authority: "none" as const,
        isHumanDecision: false as const,
        qualificationSignals: { ...SIGNALS_LIGHT },
      },
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles: cycles0,
      lpsActiveCycleInstanceId: lpsBoot.livingProjectState.activeCycleInstanceId,
      lpsVersion: lpsBoot.livingProjectState.version,
      doctrinePackageId: pin.doctrinePackageId,
      doctrinePackageVersion: pin.version,
      doctrinePackageDigest: pin.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions: decisions0,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: NOW,
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  if (!mat.materialization?.ok) {
    throw new Error(
      `materialization failed: ${JSON.stringify(mat, null, 2).slice(0, 2000)}`,
    );
  }

  const bridgeDeps = {
    trajectories: oa.cycleServices.trajectories,
    createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    runInTransaction: ((fn: () => Promise<unknown>) =>
      oa.projectServices.store.runInTransaction(fn)) as <T>(
      fn: () => Promise<T>,
    ) => Promise<T>,
    listEpistemicByProject: (pid: string) =>
      oa.cycleServices.epistemic.listByProject(pid),
    listCyclesByProject: (pid: string) =>
      oa.cycleServices.cycles.listByProject(pid),
    listDecisionsByProject: (pid: string) =>
      oa.decisionServices.decisions.listByProject(pid),
    listEvidenceByProject: (pid: string) =>
      oa.evidenceReviewServices.repository.listByProject(pid),
    getCurrentLps: (pid: string) =>
      oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: pid,
      }),
    getProjectDoctrinePin: async (pid: string) => {
      const p = await oa.projectServices.getProject.execute({ projectId: pid });
      if (!p.ok) return null;
      const d = p.project.doctrinePackageRef;
      return d
        ? {
            doctrinePackageId: d.doctrinePackageId,
            version: d.version,
            digest: d.digest,
          }
        : null;
    },
    newTrajectoryId: () => `trj:peh-${suffix}`,
    newStepId: () => `stp:peh-${suffix}`,
    newProvenanceObservationId: () => `epi:peh-${suffix}`,
    correlationId: `cor:peh-bridge-${suffix}`,
  };

  const candidate = await prepareCandidateTrajectoryFromCurrentRecommendation({
    projectId,
    deps: bridgeDeps,
  });
  expect(candidate.ok).toBe(true);
  const presentation = await buildPreCycleCandidateApprovalPresentation({
    oa,
    projectId,
  });
  expect(presentation.ok && presentation.presentation).toBeTruthy();
  if (!presentation.ok || !presentation.presentation) {
    throw new Error("presentation");
  }
  const approved = await approveCandidateTrajectory({
    oa,
    projectId,
    presentationDigest: presentation.presentation.presentationDigest,
    forceLocalAuthority: true,
  });
  expect(approved.ok).toBe(true);
  const prep = await prepareCycleFromValidatedTrajectory({ oa, projectId });
  expect(prep.ok).toBe(true);
  if (!prep.ok) throw new Error(prep.code);
  const startedCycle = await startPreparedTrajectoryCycle({
    oa,
    projectId,
    cycleInstanceId: prep.cycle.cycleInstanceId,
    forceLocalAuthority: true,
  });
  expect(startedCycle.ok).toBe(true);
  if (!startedCycle.ok) throw new Error(startedCycle.code);
  const cycleInstanceId = startedCycle.cycle.cycleInstanceId;

  const overview = await runtime.getProject(projectId);
  expect(overview.ok).toBe(true);
  if (!overview.ok) throw new Error("overview");
  const provider = new FakeConversationProvider();
  const analyzed = await analyzeIntent({
    userContent: "__F2_DOCS_WRITE_GCEC__ produce functional design",
    projectSummary: overview.project.name ?? "PEH",
    provider,
  });
  const snapshot = {
    projectId,
    lpsId: overview.livingState.id,
    lpsVersion: overview.livingState.version,
    doctrineDigest: overview.doctrine.digest,
    activeCycleInstanceId: cycleInstanceId,
    ckcResolutionRef: null as string | null,
  };
  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: analyzed.analysis.rephrasedRequest ?? "docs write",
    objective: analyzed.analysis.objective ?? "FD",
    cycleTypeId:
      analyzed.analysis.candidateCycleTypeId ?? "cyc:functional-design",
    recommendedProfile: "Standard",
    rationale: "PEH",
    scope: analyzed.analysis.scope ?? "docs/",
    outOfScope: analyzed.analysis.outOfScope,
    activatedBlocks: analyzed.analysis.activatedBlocks,
    expectedOutcome: analyzed.analysis.expectedOutcome ?? "artifact",
    sources: [],
    risks: analyzed.analysis.risks,
    reservations: analyzed.analysis.reservations,
    stopConditions: analyzed.analysis.stopConditions,
    morrisGateRequired: true,
    nextPossibleStep: "F3 PREPARE",
    contextSnapshot: snapshot,
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: analyzed.analysis.requestedOperation,
    executionIntent: analyzed.analysis.executionIntent,
  });
  const go = await recordF2Decision({
    proposalId: proposal.proposalId,
    projectId,
    decisionKind: "GO",
    currentContext: snapshot,
    decisionServices: oa.decisionServices,
    authorityResolver: oa.authorityResolver,
    nowIso: () => oa.clock.nowIso(),
    oa,
    forceM3Authority: true,
  });
  expect(go.ok).toBe(true);
  if (!go.ok) throw new Error("go");
  const decisionId = go.decision.decisionId;

  const overviewAfter = await runtime.getProject(projectId);
  if (!overviewAfter.ok) throw new Error("overviewAfter");

  return {
    suffix,
    root,
    managedBase,
    repoRoot,
    baseHeadSha,
    productDbPath,
    refsRoot,
    runtime,
    oa,
    projectId,
    cycleInstanceId,
    decisionId,
    fakeLaunch,
    currentContext: {
      projectId,
      lpsId: overviewAfter.livingState.id,
      lpsVersion: overviewAfter.livingState.version,
      doctrineDigest: overviewAfter.doctrine.digest,
      activeCycleInstanceId: cycleInstanceId,
    },
  };
}

async function prepareInspectConfirmAuthorize(ctx: HandoffCtx): Promise<string> {
  const prepared = await prepareAndResolveM3ProductPath({
    projectId: ctx.projectId,
    decisionId: ctx.decisionId,
    currentContext: ctx.currentContext,
    deps: {
      decisionServices: ctx.oa.decisionServices,
      authorityResolver: ctx.oa.authorityResolver,
      executionContractServices: ctx.oa.executionContractServices,
      nowIso: () => ctx.oa.clock.nowIso(),
      forceM3Authority: true,
      boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
    },
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error(`prepare: ${prepared.message}`);
  const executionContractId = prepared.payload.successor.executionContractId;

  const inspected = await inspectExecutionContract({
    oa: ctx.oa,
    projectId: ctx.projectId,
    executionContractId,
  });
  expect(inspected.ok).toBe(true);

  const confirmed = await confirmExecutionContractForAuthorization({
    oa: ctx.oa,
    projectId: ctx.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(confirmed.ok).toBe(true);

  const authorized = await evaluateExecutionAuthorization({
    oa: ctx.oa,
    projectId: ctx.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok).toBe(true);
  if (!authorized.ok) throw new Error("authz");
  expect(authorized.outcome).toBe("AUTHORIZED");
  return executionContractId;
}

async function loadSucceededAttemptId(
  ctx: HandoffCtx,
  executionContractId: string,
): Promise<string> {
  const listed =
    await ctx.oa.executionAttemptServices!.listExecutionAttempts.execute({
      executionContractId,
    });
  expect(listed.ok).toBe(true);
  if (!listed.ok) throw new Error("list attempts");
  const succeeded = listed.attempts.filter((a) => a.status === "succeeded");
  expect(succeeded.length).toBeGreaterThanOrEqual(1);
  return succeeded[0]!.attemptId;
}

function reopenRuntimeOnSameDb(ctx: HandoffCtx): RuntimeApplicationService {
  resetRuntimeApplicationServiceForTests();
  process.env.SFIA_STUDIO_PRODUCT_DB_PATH = ctx.productDbPath;
  process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = ctx.managedBase;
  const gitState = new FakeCursorGitExternalState({
    worktreeRoot: ctx.repoRoot,
    initialBranch: BRANCH,
  });
  const fakeLaunch = new FakeDocsWriteLaunchPort({
    worktreeRoot: ctx.repoRoot,
    pathAllowlist: ["docs/"],
    defaultBranch: BRANCH,
    repositoryRef: IDENTITY,
    gitState,
    targetPath: TARGET_PATH,
    content: ARTIFACT_CONTENT,
  });
  return getRuntimeApplicationService({
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: NOW,
    idSource: new FixedIdSource(`${ctx.suffix}-restart`),
    auditMode: "noop",
    productDbPath: ctx.productDbPath,
    realBoundary: {
      launchPort: fakeLaunch,
      safetyJournal: new MemoryLaunchSafetyJournal(),
      managedRepoRootBase: ctx.managedBase,
    },
  });
}

beforeEach(() => {
  assertRealOff();
  previousProductDb = process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
  previousManaged = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
  previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
  previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
  previousAllowReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  setConversationProviderForTests(null);
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
});

afterEach(() => {
  vi.restoreAllMocks();
  resetF2ProposalStoreForTests();
  setConversationProviderForTests(null);
  resetRuntimeApplicationServiceForTests();
  while (tempRoots.length) {
    const d = tempRoots.pop();
    if (d) {
      try {
        fs.rmSync(d, { recursive: true, force: true });
      } catch {
        /* ignore */
      }
    }
  }
  restoreEnvVar("SFIA_STUDIO_PRODUCT_DB_PATH", previousProductDb);
  restoreEnvVar(SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV, previousManaged);
  restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
  restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
  restoreEnvVar("SFIA_V2_RUNTIME_ALLOW_RESET", previousAllowReset);
  assertRealOff();
});

describe("POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 integrated (R1–R4)", () => {
  it("integrated happy — fresh execute, hot worktree removed, restart rehydrates executionReport (R2)", async () => {
    const nora = new FakeConversationProvider({
      scripted: Array(12).fill("PEH_HANDOFF_NORA_ANALYSIS"),
    });
    setConversationProviderForTests(nora);

    const ctx = await bootHandoffJourney("happy");
    const executionContractId = await prepareInspectConfirmAuthorize(ctx);

    // Product journey profile may include unsupported VE (e.g. path_allowlist) →
    // BOUND_ACCEPTANCE_ORACLE_UNSUPPORTED (continuity under closed R3). For R4
    // handoff proof, force closed content-insufficiency so RecordResult continues
    // after durable report/artifact persist. Oracle unsupported covered by T-R3-02.
    const claimSpy = vi
      .spyOn(claimCompletionMod, "completeDocsWriteClaimEvidenceCompletion")
      .mockResolvedValue({
        ok: false,
        code: "CONFORMITY_HEADINGS_MISSING",
        message: "missing required headings (handoff R4 harness)",
      });

    let executed: Awaited<
      ReturnType<typeof governedExecuteAuthorizedContract>
    >;
    try {
      executed = await governedExecuteAuthorizedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId,
        forceLocalAuthority: true,
        missionResultRefsRoot: ctx.refsRoot,
      });
      expect(claimSpy).toHaveBeenCalled();
    } finally {
      claimSpy.mockRestore();
    }
    expect(executed.ok).toBe(true);
    if (!executed.ok) throw new Error(JSON.stringify(executed));
    expect(executed.phase).toBe("terminal");
    expect(executed.attemptStatus).toBe("succeeded");
    expect(executed.selectedAgentRef).toBe(M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID);

    const attemptId = executed.attemptId!;
    const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
    const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
    const evidence =
      await ctx.oa.evidenceReviewServices!.evidenceReader.findById(evidenceId);
    expect(evidence).toBeTruthy();
    expect(evidence!.storageMode).toBe("external_payload_ref");
    expect(evidence!.location).toBeTruthy();
    expect(fs.existsSync(evidence!.location!)).toBe(true);
    expect(evidence!.location!.startsWith(ctx.refsRoot)).toBe(true);

    const rel = docsWriteArtifactRefsRelative(attemptId, TARGET_PATH);
    const cursorReportPath = path.join(ctx.refsRoot, rel.cursorReport);
    expect(fs.existsSync(cursorReportPath)).toBe(true);

    const loaded = loadDocsWriteArtifactReviewMaterial({
      refsRoot: ctx.refsRoot,
      attemptId,
      targetPath: TARGET_PATH,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error(loaded.message);
    expect(loaded.completeness).toMatch(/^(FULL|PARTIAL)$/);
    expect(loaded.cursorReport?.status).toMatch(/^(succeeded|stopped)$/);

    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) throw new Error(materialized.message);
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) {
      throw new Error("postEvidence missing");
    }
    const report = materialized.postEvidence.executionReport;
    expect(report).toBeTruthy();
    expect(report!.cursorStatus).toBeTruthy();
    expect(
      report!.workPerformedSummary ?? report!.artifactsSummary,
    ).toBeTruthy();
    expect(report!.artifactReviewCompleteness).toMatch(/^(FULL|PARTIAL)$/);
    const analysisBlob = materialized.postEvidence.analysisText ?? "";
    expect(analysisBlob).not.toMatch(/PATH_NOT_ALLOWED/);

    const recommendationKind = materialized.postEvidence.recommendation.kind;

    fs.rmSync(ctx.repoRoot, { recursive: true, force: true });
    expect(fs.existsSync(ctx.repoRoot)).toBe(false);
    expect(fs.existsSync(cursorReportPath)).toBe(true);

    const restarted = reopenRuntimeOnSameDb(ctx);
    const oa2 = restarted.oa!;

    const rehydrated = await rehydrateProductOutcomeFromAttempt({
      oa: oa2,
      projectId: ctx.projectId,
      attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) throw new Error(rehydrated.message);
    expect(rehydrated.postEvidence?.ok).toBe(true);
    if (!rehydrated.postEvidence || !rehydrated.postEvidence.ok) {
      throw new Error("rehydrate postEvidence");
    }
    expect(rehydrated.postEvidence.recommendation.kind).toBe(recommendationKind);
    expect(rehydrated.postEvidence.executionReport).toBeTruthy();
    expect(rehydrated.postEvidence.executionReport!.cursorStatus).toBeTruthy();
    expect(
      rehydrated.postEvidence.executionReport!.workPerformedSummary ??
        rehydrated.postEvidence.executionReport!.artifactsSummary,
    ).toBeTruthy();
    expect(rehydrated.postEvidence.executionReport!.artifactReviewCompleteness).toMatch(
      /^(FULL|PARTIAL)$/,
    );
    const reanalysis = rehydrated.postEvidence.analysisText ?? "";
    expect(reanalysis).not.toMatch(/PATH_NOT_ALLOWED/);
  });

  it("N1 — omit Cursor report → CURSOR_EXECUTION_REPORT_REQUIRED", async () => {
    const ctx = await bootHandoffJourney("n1", { cursorReportMode: "omit" });
    const executionContractId = await prepareInspectConfirmAuthorize(ctx);

    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
      missionResultRefsRoot: ctx.refsRoot,
    });
    expect(executed.ok).toBe(false);
    if (executed.ok) return;
    expect(executed.code).toBe("CURSOR_EXECUTION_REPORT_REQUIRED");

    const attemptId = await loadSucceededAttemptId(ctx, executionContractId);

    const rel = docsWriteArtifactRefsRelative(attemptId, TARGET_PATH);
    const cursorReportPath = path.join(ctx.refsRoot, rel.cursorReport);
    expect(fs.existsSync(cursorReportPath)).toBe(false);

    const loaded = loadDocsWriteArtifactReviewMaterial({
      refsRoot: ctx.refsRoot,
      attemptId,
      targetPath: TARGET_PATH,
    });
    if (loaded.ok) {
      expect(loaded.cursorReport).toBeNull();
    }

    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId,
    });
    if (materialized.postEvidence?.ok) {
      expect(materialized.postEvidence.executionReport ?? null).toBeFalsy();
    }
  });

  it("N2 — malformed Cursor report → CURSOR_EXECUTION_REPORT_MALFORMED", async () => {
    const ctx = await bootHandoffJourney("n2", {
      cursorReportMode: "malformed",
    });
    const executionContractId = await prepareInspectConfirmAuthorize(ctx);

    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
      missionResultRefsRoot: ctx.refsRoot,
    });
    expect(executed.ok).toBe(false);
    if (executed.ok) return;
    expect(executed.code).toBe("CURSOR_EXECUTION_REPORT_MALFORMED");

    const attemptId = await loadSucceededAttemptId(ctx, executionContractId);

    const rel = docsWriteArtifactRefsRelative(attemptId, TARGET_PATH);
    expect(fs.existsSync(path.join(ctx.refsRoot, rel.cursorReport))).toBe(false);

    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.projectId,
      attemptId,
    });
    if (materialized.postEvidence?.ok) {
      expect(materialized.postEvidence.executionReport ?? null).toBeFalsy();
    }
  });

  it("T-R3-01 — CONFORMITY_HEADINGS_MISSING → continuity ok, Product NOT SUCCESS", async () => {
    const ctx = await bootHandoffJourney("r301");
    const executionContractId = await prepareInspectConfirmAuthorize(ctx);
    const spy = vi
      .spyOn(claimCompletionMod, "completeDocsWriteClaimEvidenceCompletion")
      .mockResolvedValue({
        ok: false,
        code: "CONFORMITY_HEADINGS_MISSING",
        message: "missing required headings: Objectif",
      });
    try {
      const executed = await governedExecuteAuthorizedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId,
        forceLocalAuthority: true,
        missionResultRefsRoot: ctx.refsRoot,
      });
      expect(executed.ok).toBe(true);
      if (!executed.ok) return;
      expect(executed.attemptStatus).toBe("succeeded");
      expect(spy).toHaveBeenCalled();

      const attemptId = await loadSucceededAttemptId(ctx, executionContractId);
      const materialized = await materializeProductOutcomeFromAttempt({
        oa: ctx.oa,
        projectId: ctx.projectId,
        attemptId,
      });
      expect(materialized.ok).toBe(true);
      if (!materialized.ok) return;
      expect(materialized.product.outcome).not.toBe("SUCCESS");
      expect(materialized.product.claimAllowed).toBe(false);
    } finally {
      spy.mockRestore();
    }
  });

  it("T-R3-02 — BOUND_ACCEPTANCE_ORACLE_MISSING → POST_EXECUTION_CONTINUITY_ADVANCE_FAILED", async () => {
    const ctx = await bootHandoffJourney("r302");
    const executionContractId = await prepareInspectConfirmAuthorize(ctx);
    const spy = vi
      .spyOn(claimCompletionMod, "completeDocsWriteClaimEvidenceCompletion")
      .mockResolvedValue({
        ok: false,
        code: "BOUND_ACCEPTANCE_ORACLE_MISSING",
        message: "bound acceptance oracle missing",
      });
    try {
      const executed = await governedExecuteAuthorizedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId,
        forceLocalAuthority: true,
        missionResultRefsRoot: ctx.refsRoot,
      });
      expect(executed.ok).toBe(false);
      if (executed.ok) return;
      expect(executed.code).toBe("POST_EXECUTION_CONTINUITY_ADVANCE_FAILED");
      expect(executed.message).toContain("BOUND_ACCEPTANCE_ORACLE_MISSING");
      await loadSucceededAttemptId(ctx, executionContractId);
    } finally {
      spy.mockRestore();
    }
  });

  it("T-R3-03 — HISTORICAL_ARTIFACT_DIGEST_MISMATCH → continuity fail-closed", async () => {
    const ctx = await bootHandoffJourney("r303");
    const executionContractId = await prepareInspectConfirmAuthorize(ctx);
    const spy = vi
      .spyOn(claimCompletionMod, "completeDocsWriteClaimEvidenceCompletion")
      .mockResolvedValue({
        ok: false,
        code: "HISTORICAL_ARTIFACT_DIGEST_MISMATCH",
        message: "computed digest != expected",
      });
    try {
      const executed = await governedExecuteAuthorizedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId,
        forceLocalAuthority: true,
        missionResultRefsRoot: ctx.refsRoot,
      });
      expect(executed.ok).toBe(false);
      if (executed.ok) return;
      expect(executed.code).toBe("POST_EXECUTION_CONTINUITY_ADVANCE_FAILED");
      expect(executed.message).toContain("HISTORICAL_ARTIFACT_DIGEST_MISMATCH");
      await loadSucceededAttemptId(ctx, executionContractId);
    } finally {
      spy.mockRestore();
    }
  });

  it("T-R3-04 — closed classifier: known insufficiency vs continuity vs unknown", () => {
    expect(classifyDocsWriteClaimCompletionFailure("CONFORMITY_HEADINGS_MISSING")).toBe(
      "CONFORMITY_INSUFFICIENCY",
    );
    expect(classifyDocsWriteClaimCompletionFailure("ARTIFACT_EMPTY")).toBe(
      "CONFORMITY_INSUFFICIENCY",
    );
    expect(
      classifyDocsWriteClaimCompletionFailure("BOUND_ACCEPTANCE_ORACLE_MISSING"),
    ).toBe("CONTINUITY_FAILURE");
    expect(
      classifyDocsWriteClaimCompletionFailure("BOUND_ACCEPTANCE_ORACLE_INVALID"),
    ).toBe("CONTINUITY_FAILURE");
    expect(
      classifyDocsWriteClaimCompletionFailure("BOUND_ACCEPTANCE_ORACLE_UNSUPPORTED"),
    ).toBe("CONTINUITY_FAILURE");
    expect(
      classifyDocsWriteClaimCompletionFailure("HISTORICAL_ARTIFACT_DIGEST_MISMATCH"),
    ).toBe("CONTINUITY_FAILURE");
    expect(classifyDocsWriteClaimCompletionFailure("ARTIFACT_PATH_MISMATCH")).toBe(
      "CONTINUITY_FAILURE",
    );
    expect(classifyDocsWriteClaimCompletionFailure("ARTIFACT_TYPE_PATH_MISMATCH")).toBe(
      "CONTINUITY_FAILURE",
    );
    expect(
      classifyDocsWriteClaimCompletionFailure("HISTORICAL_ARTIFACT_PAYLOAD_UNAVAILABLE"),
    ).toBe("CONTINUITY_FAILURE");
    expect(classifyDocsWriteClaimCompletionFailure("DOCS_WRITE_EVIDENCE_MISSING")).toBe(
      "CONTINUITY_FAILURE",
    );
    expect(
      classifyDocsWriteClaimCompletionFailure("DOCS_WRITE_REVIEW_BUNDLE_MISSING"),
    ).toBe("CONTINUITY_FAILURE");
    expect(
      classifyDocsWriteClaimCompletionFailure("DOCS_WRITE_REVIEW_BUNDLE_NOT_FROZEN"),
    ).toBe("CONTINUITY_FAILURE");
    expect(
      classifyDocsWriteClaimCompletionFailure(
        "DOCS_WRITE_CONFORMITY_ORACLE_FINGERPRINT_UNPARSEABLE",
      ),
    ).toBe("CONTINUITY_FAILURE");
    // Former permissive catch-alls must NOT classify as insufficiency:
    expect(classifyDocsWriteClaimCompletionFailure("CONFORMITY_FUTURE_CODE")).toBe(
      "CONTINUITY_FAILURE",
    );
    expect(classifyDocsWriteClaimCompletionFailure("ARTIFACT_SOMETHING_NEW")).toBe(
      "CONTINUITY_FAILURE",
    );
    expect(classifyDocsWriteClaimCompletionFailure("NOT_PROVEN_MYSTERY")).toBe(
      "CONTINUITY_FAILURE",
    );
    expect(classifyDocsWriteClaimCompletionFailure("UNKNOWN_CODE_XYZ")).toBe(
      "CONTINUITY_FAILURE",
    );
  });
});
