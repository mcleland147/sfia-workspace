/**
 * Live managed-repository composition — bare default Product singleton exit proof.
 *
 * Closes Reproof09 pre-spawn STOP:
 *   REAL_WORKSPACE_INVALID / docs_write_managed_repo_root_base_unconfigured
 *
 * BINDING EXIT PROOF (CASE EXIT):
 *   server env → getRuntimeApplicationService() ZERO ARGS → returned runtime
 *   → deterministic RealBoundaryWiring + managedRepoRootBase
 *   → canonical Product Journey → StartExecution → ManagedProjectRepositoryResolver
 *   → exactly ONE TestOnlyDeterministicCursorLaunchPort launch → ZERO OS Cursor REAL
 *
 * Lower-level injected `realBoundaryComposition` probes remain labeled as such —
 * they are NOT the exit proof.
 *
 * ZERO Cursor REAL process. ZERO OpenAI LIVE. ZERO Nora LIVE.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  MemoryLaunchSafetyJournal,
  isStudioCursorRealEnabled,
  sanitizeManagedRepoIdentity,
} from "@/lib/oa/execution-attempt";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  composeStudioProductRealBoundary,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  resolveManagedRepoRootBaseFromEnv,
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
  type RuntimeApplicationService,
  type RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";
import {
  TestOnlyDeterministicCursorLaunchPort,
} from "@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary";
import {
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  prepareCycleFromValidatedTrajectory,
  startPreparedTrajectoryCycle,
  materializeLifecycleRecommendationFromStructuredOutput,
  resolveTrajectoryBootstrapPresence,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import {
  governedExecuteAuthorizedContract,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const IDENTITY = "acme/widget";
const BRANCH = "main";
const NOW = "2026-09-17T08:00:00.000Z";
const PILOTE = LOCAL_PILOTE_ACTOR;
const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const ENV_KEYS = [
  "SFIA_STUDIO_CURSOR_REAL",
  "OPS1_CURSOR_REAL",
  "SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY",
  "SFIA_STUDIO_E2E_QA_CONTROL",
  "OPS1_E2E_ALLOW_DIRTY_PRINCIPAL",
  "SFIA_STUDIO_E2E_DETERMINISTIC_PENDING_OBSERVES",
  "SFIA_STUDIO_PRODUCT_DB_PATH",
  "SFIA_V2_RUNTIME_NOW_ISO",
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
] as const;

const tempRoots: string[] = [];
let cursorRealExternalLaunches = 0;
let openAiLiveCalls = 0;
let noraLiveCalls = 0;

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempRoots.push(dir);
  return dir;
}

function clearManagedEnv(): void {
  for (const key of ENV_KEYS) {
    delete process.env[key];
  }
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.OPS1_CURSOR_REAL = "0";
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
}

/** Arm existing env-controlled deterministic Cursor boundary (REAL stays OFF). */
function armDeterministicBoundaryEnv(managedBase: string, productDbPath: string): void {
  process.env.SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY = "1";
  process.env.SFIA_STUDIO_E2E_QA_CONTROL = "1";
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
  process.env.SFIA_STUDIO_E2E_DETERMINISTIC_PENDING_OBSERVES = "0";
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.OPS1_CURSOR_REAL = "0";
  process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
  process.env.SFIA_STUDIO_PRODUCT_DB_PATH = productDbPath;
  process.env.SFIA_V2_RUNTIME_NOW_ISO = NOW;
}

function initManagedRepo(managedBase: string, identity: string) {
  fs.mkdirSync(managedBase, { recursive: true });
  const repoRoot = path.join(
    managedBase,
    sanitizeManagedRepoIdentity(identity),
  );
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

function detLaunchPortOf(
  oa: RuntimeOaStack,
): TestOnlyDeterministicCursorLaunchPort {
  const port = oa.executionAttemptServices.realBoundary?.launchPort;
  expect(port).toBeInstanceOf(TestOnlyDeterministicCursorLaunchPort);
  return port as TestOnlyDeterministicCursorLaunchPort;
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:lmr-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    this.n += 1;
    return `lps:lmr-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    this.n += 1;
    return `cor:lmr-${this.prefix}-${this.n}`;
  }
}

beforeEach(() => {
  clearManagedEnv();
  cursorRealExternalLaunches = 0;
  openAiLiveCalls = 0;
  noraLiveCalls = 0;
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  setConversationProviderForTests(null);
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
});

afterEach(() => {
  clearManagedEnv();
  setConversationProviderForTests(null);
  resetF2ProposalStoreForTests();
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
  expect(cursorRealExternalLaunches).toBe(0);
  expect(openAiLiveCalls).toBe(0);
  expect(noraLiveCalls).toBe(0);
  expect(isStudioCursorRealEnabled()).toBe(false);
});

describe("managedRepoRootBase env parse", () => {
  it("absent / blank → undefined (fail-closed input)", () => {
    expect(resolveManagedRepoRootBaseFromEnv({})).toBeUndefined();
    expect(
      resolveManagedRepoRootBaseFromEnv({
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: "",
      }),
    ).toBeUndefined();
    expect(
      resolveManagedRepoRootBaseFromEnv({
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: "   ",
      }),
    ).toBeUndefined();
  });

  it("configured path resolves absolute", () => {
    const raw = path.join(tempDir("sfia-lmr-env-"), "managed");
    fs.mkdirSync(raw, { recursive: true });
    const resolved = resolveManagedRepoRootBaseFromEnv({
      [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: raw,
    });
    expect(resolved).toBe(path.resolve(raw));
  });
});

describe("CASE A — REAL OFF + DET OFF", () => {
  it("default singleton creates no REAL/DET boundary / no managed side-effect", () => {
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = path.join(
      tempDir("sfia-lmr-a-"),
      "managed",
    );
    expect(isStudioCursorRealEnabled()).toBe(false);
    const off = composeStudioProductRealBoundary({ env: process.env });
    expect(off).toBeUndefined();

    const root = tempDir("sfia-lmr-a-svc-");
    const runtime = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      idSource: new FixedIdSource("a"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
    });
    expect(runtime.oa?.executionAttemptServices.realBoundary).toBeUndefined();
  });
});

describe("lower-level composition probes (NOT the exit proof)", () => {
  it("injected realBoundaryComposition carries env managed base (composition unit)", () => {
    const managedBase = path.join(tempDir("sfia-lmr-comp-"), "managed");
    fs.mkdirSync(managedBase, { recursive: true });
    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
    process.env.OPS1_CURSOR_REAL = "0";
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;

    const root = tempDir("sfia-lmr-comp-svc-");
    const fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: managedBase,
      pathAllowlist: ["docs/"],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
    });
    const runtime = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      idSource: new FixedIdSource("comp"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
      realBoundaryComposition: {
        launchPort: fakeLaunch,
        safetyJournal: new MemoryLaunchSafetyJournal(),
        env: process.env,
      },
    });
    const base =
      runtime.oa?.executionAttemptServices.realBoundary?.managedRepoRootBase;
    expect(base).toBe(path.resolve(managedBase));
    expect(fakeLaunch.calls.length).toBe(0);
  });
});

/**
 * Product Journey on the EXACT runtime returned by zero-arg singleton.
 * No RuntimeApplicationServiceOptions at getRuntimeApplicationService().
 */
async function bootBareSingletonDocsWriteJourney(input: {
  suffix: string;
  managedBase: string;
  baseHeadSha: string;
}): Promise<{
  runtime: RuntimeApplicationService;
  oa: RuntimeOaStack;
  projectId: string;
  cycleInstanceId: string;
  decisionId: string;
  baseHeadSha: string;
  launchPort: TestOnlyDeterministicCursorLaunchPort;
  currentContext: {
    projectId: string;
    lpsId: string;
    lpsVersion: number;
    doctrineDigest: string;
    activeCycleInstanceId: string;
  };
}> {
  const productDbPath = path.join(
    tempDir(`sfia-lmr-${input.suffix}-db-`),
    "oa-product.sqlite",
  );
  armDeterministicBoundaryEnv(input.managedBase, productDbPath);

  resetRuntimeApplicationServiceForTests();
  // BINDING EXIT CALL — zero arguments. No options / composition injection.
  const runtime = getRuntimeApplicationService();
  const oa = runtime.oa;
  expect(oa).toBeTruthy();
  if (!oa) throw new Error("bare singleton missing oa");

  expect(
    oa.executionAttemptServices.realBoundary?.managedRepoRootBase,
  ).toBe(path.resolve(input.managedBase));
  const launchPort = detLaunchPortOf(oa);
  expect(launchPort.boundaryProofMode).toBe("deterministic_fake");
  expect(launchPort.launchCallCount).toBe(0);

  const created = await runtime.createProject({
    name: `LMR ${input.suffix}`,
    objective: "Live managed repo composition bare singleton",
    context: "delivery",
    criticality: "STANDARD",
    constraints: ["ZERO LIVE", "ZERO REAL"],
    shortReference: `LMR${input.suffix}`.slice(0, 8),
    idempotencyKey: `idem:lmr-bare-${input.suffix}-${Date.now()}`,
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
      baseSha: input.baseHeadSha,
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
      narrative: "LMR Next cycle.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Design fonctionnel.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:functional-design",
        rationale: "LMR bare singleton",
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
    newTrajectoryId: () => `trj:lmr-bare-${input.suffix}`,
    newStepId: () => `stp:lmr-bare-${input.suffix}`,
    newProvenanceObservationId: () => `epi:lmr-bare-${input.suffix}`,
    correlationId: `cor:lmr-bare-bridge-${input.suffix}`,
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
    projectSummary: overview.project.name ?? "LMR",
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
    rationale: "LMR bare singleton exit",
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
    runtime,
    oa,
    projectId,
    cycleInstanceId,
    decisionId,
    baseHeadSha: input.baseHeadSha,
    launchPort,
    currentContext: {
      projectId,
      lpsId: overviewAfter.livingState.id,
      lpsVersion: overviewAfter.livingState.version,
      doctrineDigest: overviewAfter.doctrine.digest,
      activeCycleInstanceId: cycleInstanceId,
    },
  };
}

describe("CASE B/C — fail-close + CASE EXIT bare zero-arg singleton", () => {
  it("CASE B — DET ON + managed base absent → wiring omits base (Reproof09 STOP shape)", () => {
    const root = tempDir("sfia-lmr-b-");
    const productDbPath = path.join(root, "oa-product.sqlite");
    armDeterministicBoundaryEnv(path.join(root, "unused"), productDbPath);
    delete process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];

    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService();
    expect(
      runtime.oa?.executionAttemptServices.realBoundary?.managedRepoRootBase,
    ).toBeUndefined();
    expect(runtime.oa?.executionAttemptServices.realBoundary?.launchPort).toBeInstanceOf(
      TestOnlyDeterministicCursorLaunchPort,
    );
    expect(
      composeStudioProductRealBoundary({ env: process.env })?.managedRepoRootBase,
    ).toBeUndefined();
  });

  it("CASE C — bare singleton + managed base + repo missing → unresolved, zero launch", async () => {
    const root = tempDir("sfia-lmr-c-");
    const managedBase = path.join(root, "managed");
    fs.mkdirSync(managedBase, { recursive: true });
    // Need a valid sha for EC; create orphan repo elsewhere for baseHead only
    const { baseHeadSha } = initManagedRepo(path.join(root, "sha-source"), IDENTITY);

    const ctx = await bootBareSingletonDocsWriteJourney({
      suffix: "c",
      managedBase,
      baseHeadSha,
    });

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
        preferBoundedDocsWriteProfile: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const successor = prepared.payload.successor;

    const inspected = await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const auth = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    expect(auth.outcome).toBe("AUTHORIZED");

    const launchBefore = ctx.launchPort.launchCallCount;
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(false);
    if (executed.ok) return;
    const blob = JSON.stringify(executed);
    expect(blob).toMatch(
      /docs_write_managed_repo_unresolved|REAL_WORKSPACE_INVALID/,
    );
    expect(ctx.launchPort.launchCallCount).toBe(launchBefore);
  });

  it("CASE EXIT — bare getRuntimeApplicationService() ZERO ARGS → one DET launch (ZERO REAL)", async () => {
    const root = tempDir("sfia-lmr-exit-");
    const managedBase = path.join(root, "managed");
    const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);
    expect(fs.existsSync(path.join(repoRoot, ".git"))).toBe(true);

    const ctx = await bootBareSingletonDocsWriteJourney({
      suffix: "exit",
      managedBase,
      baseHeadSha,
    });

    // Direct assertions against the ACTUAL returned zero-arg runtime
    expect(ctx.runtime.oa).toBe(ctx.oa);
    expect(
      ctx.oa.executionAttemptServices.realBoundary?.managedRepoRootBase,
    ).toBe(path.resolve(managedBase));
    expect(ctx.launchPort).toBeInstanceOf(TestOnlyDeterministicCursorLaunchPort);
    expect(ctx.launchPort.boundaryProofMode).toBe("deterministic_fake");
    expect(isStudioCursorRealEnabled()).toBe(false);

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
        preferBoundedDocsWriteProfile: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const successor = prepared.payload.successor;
    expect(successor.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(successor.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
    expect(successor.scope).toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);

    const inspected = await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const auth = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    expect(auth.outcome).toBe("AUTHORIZED");

    expect(ctx.launchPort.launchCallCount).toBe(0);
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) {
      throw new Error(JSON.stringify(executed).slice(0, 2000));
    }
    expect(ctx.launchPort.launchCallCount).toBe(1);
    expect(ctx.launchPort.boundaryProofMode).toBe("deterministic_fake");
    expect(executed.realExecution).toBe(false);

    const req = ctx.launchPort.calls[0];
    expect(req).toBeDefined();
    expect(req?.docsWriteSpec?.targetPath).toBe("docs/functional-design.md");
    expect(successor.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
    expect(req?.managedRepoRoot).toBe(repoRoot);
    expect(req?.baseHeadSha).toBe(baseHeadSha);
    expect(req?.repositoryBinding?.identity ?? req?.docsWriteSpec?.repositoryRef).toBe(
      IDENTITY,
    );

    expect(cursorRealExternalLaunches).toBe(0);
    expect(openAiLiveCalls).toBe(0);
    expect(noraLiveCalls).toBe(0);
  });
});

/** Legacy injected FakeDocsWrite path retained as non-exit composition regression. */
describe("injected FakeDocsWrite composition regression (NOT exit proof)", () => {
  async function bootInjectedFakeJourney(input: {
    suffix: string;
    managedBase: string;
    repoRoot: string;
    baseHeadSha: string;
    fakeLaunch: FakeDocsWriteLaunchPort;
  }) {
    const root = tempDir(`sfia-lmr-inj-${input.suffix}-`);
    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
    process.env.OPS1_CURSOR_REAL = "0";
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = input.managedBase;

    const runtime = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      idSource: new FixedIdSource(input.suffix),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
      realBoundaryComposition: {
        launchPort: input.fakeLaunch,
        safetyJournal: new MemoryLaunchSafetyJournal(),
        env: process.env,
      },
    });
    const oa = runtime.oa!;
    expect(
      oa.executionAttemptServices.realBoundary?.managedRepoRootBase,
    ).toBe(path.resolve(input.managedBase));

    const created = await runtime.createProject({
      name: `LMR inj ${input.suffix}`,
      objective: "Injected composition regression",
      context: "delivery",
      criticality: "STANDARD",
      constraints: ["ZERO LIVE"],
      shortReference: `INJ${input.suffix}`.slice(0, 8),
      idempotencyKey: `idem:lmr-inj-${input.suffix}`,
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
        baseSha: input.baseHeadSha,
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
        narrative: "LMR inj Next cycle.",
        preCycleRoutingAssessment: {
          ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
        },
        lifecycleRecommendation: {
          intent: "NEXT_CYCLE" as const,
          statement: "Design fonctionnel.",
          subjectCycleInstanceId: null,
          targetCycleInstanceId: null,
          targetCycleTypeId: "cyc:functional-design",
          rationale: "LMR inj",
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
      newTrajectoryId: () => `trj:lmr-inj-${input.suffix}`,
      newStepId: () => `stp:lmr-inj-${input.suffix}`,
      newProvenanceObservationId: () => `epi:lmr-inj-${input.suffix}`,
      correlationId: `cor:lmr-inj-bridge-${input.suffix}`,
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
      projectSummary: overview.project.name ?? "LMR",
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
      rationale: "LMR inj",
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
    const overviewAfter = await runtime.getProject(projectId);
    if (!overviewAfter.ok) throw new Error("overviewAfter");

    return {
      runtime,
      oa,
      projectId,
      cycleInstanceId,
      decisionId: go.decision.decisionId,
      baseHeadSha: input.baseHeadSha,
      fakeLaunch: input.fakeLaunch,
      currentContext: {
        projectId,
        lpsId: overviewAfter.livingState.id,
        lpsVersion: overviewAfter.livingState.version,
        doctrineDigest: overviewAfter.doctrine.digest,
        activeCycleInstanceId: cycleInstanceId,
      },
    };
  }

  it("injected FakeDocsWrite + valid repo still reaches one launch", async () => {
    const root = tempDir("sfia-lmr-inj-d-");
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
    });

    const ctx = await bootInjectedFakeJourney({
      suffix: "d",
      managedBase,
      repoRoot,
      baseHeadSha,
      fakeLaunch,
    });

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
        preferBoundedDocsWriteProfile: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const successor = prepared.payload.successor;

    const inspected = await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const auth = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(auth.ok && auth.outcome === "AUTHORIZED").toBe(true);

    const launchBefore = ctx.fakeLaunch.calls.length;
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId: successor.executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) throw new Error(JSON.stringify(executed).slice(0, 2000));
    expect(ctx.fakeLaunch.calls.length).toBe(launchBefore + 1);
    expect(executed.realExecution).toBe(false);
  });
});
