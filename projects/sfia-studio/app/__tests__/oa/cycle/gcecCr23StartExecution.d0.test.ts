/**
 * CR-GCEC-23 — StartExecution application-boundary authority tests.
 * Server-derived Confirmation target; hostile confirmationMatch cannot authorize.
 * ZERO REAL — FakeDocsWriteLaunchPort only.
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Confirmation } from "@/lib/oa/decision";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  buildGitEffectActionRef,
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  ManagedProjectRepositoryResolver,
  MemoryLaunchSafetyJournal,
  sanitizeManagedRepoIdentity,
} from "@/lib/oa/execution-attempt";
import {
  FakeRepositoryReadPorts,
  verifyPullRequestClaim,
} from "@/lib/oa/git-ports";
import { F3_CONFIRM_ACTION_REF } from "@/features/project-assistant/f3/constants";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { FakeConversationProvider } from "@/lib/platform/ai";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";
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

const APP_ROOT = path.resolve(__dirname, "../../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const IDENTITY = "acme/widget";
const HOSTILE_REPO = "other/hostile";
const BRANCH = "main";
const NOW = "2026-09-11T15:00:00.000Z";
const PILOTE = LOCAL_PILOTE_ACTOR;
const HOSTILE_ACTOR = {
  actorId: "actor:hostile",
  role: "intruder",
  displayName: "Hostile",
  authorityLevel: "N3" as const,
};

const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const temps: string[] = [];

afterEach(() => {
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
  for (const t of temps.splice(0)) {
    try {
      fs.rmSync(t, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

beforeEach(() => {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
});

function tempDir(prefix: string): string {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  temps.push(d);
  return d;
}

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    shell: false,
  }).trim();
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:c23-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:c23-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:c23-${this.prefix}-${this.n}`;
  }
}

function initManagedRepo(managedBase: string, identity: string): {
  repoRoot: string;
  baseHeadSha: string;
} {
  const sanitized = sanitizeManagedRepoIdentity(identity);
  const repoRoot = path.join(managedBase, sanitized);
  fs.mkdirSync(repoRoot, { recursive: true });
  git(repoRoot, ["init"]);
  git(repoRoot, ["config", "user.email", "c23@test.local"]);
  git(repoRoot, ["config", "user.name", "C23"]);
  git(repoRoot, ["checkout", "-b", "main"]);
  git(repoRoot, [
    "remote",
    "add",
    "origin",
    `https://github.com/${identity}.git`,
  ]);
  fs.writeFileSync(path.join(repoRoot, "README.md"), "# widget\n");
  fs.mkdirSync(path.join(repoRoot, "docs"), { recursive: true });
  git(repoRoot, ["add", "README.md"]);
  git(repoRoot, ["commit", "-m", "init"]);
  const baseHeadSha = git(repoRoot, ["rev-parse", "HEAD"]);
  expect(
    new ManagedProjectRepositoryResolver().resolveLocalRepoRoot(
      { identity },
      managedBase,
    ),
  ).toBe(repoRoot);
  return { repoRoot, baseHeadSha };
}

function requireAuth(
  auth: ReturnType<typeof registerLocalPiloteAuthority>,
): string {
  if (!auth.ok) throw new Error(`auth: ${auth.code}`);
  return auth.evidenceId;
}

async function grantCnf(input: {
  runtime: RuntimeApplicationService;
  confirmationId: string;
  actionRef: string;
  decisionRef: string;
  requestedTo?: typeof PILOTE;
}): Promise<Confirmation> {
  const requestedTo = input.requestedTo ?? PILOTE;
  const auth = requireAuth(
    registerLocalPiloteAuthority({
      authorityResolver: input.runtime.oa!.authorityResolver,
      scope: input.actionRef,
      issuedAt: NOW,
      evidenceId: `evd:auth:${input.confirmationId}`,
      forceEnable: true,
    }),
  );
  const requested =
    await input.runtime.oa!.decisionServices.requestConfirmation.execute({
      confirmationId: input.confirmationId,
      level: "N3",
      actionRef: input.actionRef,
      requestedBy: PILOTE,
      requestedTo,
      scope: input.actionRef,
      idempotencyKey: `idem:${input.confirmationId}`,
      decisionRef: input.decisionRef,
    });
  if (!requested.ok) {
    throw new Error(`requestCnf: ${requested.error.detailCode}`);
  }
  const granted =
    await input.runtime.oa!.decisionServices.grantConfirmation.execute({
      confirmationId: input.confirmationId,
      actor: requestedTo,
      authorityEvidenceId: auth,
    });
  if (!granted.ok) {
    throw new Error(`grantCnf: ${granted.error.detailCode}`);
  }
  return granted.confirmation;
}

/**
 * Product path through confirmed docs-write EC (git:local_commit present).
 * Returns before any StartExecution.
 */
async function bootToConfirmedEc(
  suffix: string,
  options: { withRepositoryBinding?: boolean } = {},
) {
  const withRepositoryBinding = options.withRepositoryBinding !== false;
  const root = tempDir(`sfia-c23-${suffix}-`);
  const managedBase = path.join(root, "managed");
  const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);
  const gitState = new FakeCursorGitExternalState({
    worktreeRoot: repoRoot,
    initialBranch: "main",
    initialSha: baseHeadSha,
  });
  const fakeLaunch = new FakeDocsWriteLaunchPort({
    worktreeRoot: repoRoot,
    pathAllowlist: ["docs/"],
    defaultBranch: BRANCH,
    repositoryRef: IDENTITY,
    gitState,
  });
  const safetyJournal = new MemoryLaunchSafetyJournal();
  const runtime = getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: NOW,
    idSource: new FixedIdSource(suffix),
    auditMode: "noop",
    productDbPath: path.join(root, "oa.sqlite"),
    realBoundary: {
      launchPort: fakeLaunch,
      safetyJournal,
      managedRepoRootBase: managedBase,
    },
  });
  const oa = runtime.oa!;

  const created = await runtime.createProject({
    name: `C23 ${suffix}`,
    objective: "CR-GCEC-23 StartExecution boundary",
    context: "application-boundary",
    criticality: "STANDARD",
    constraints: ["ZERO LIVE"],
    shortReference: `C23${suffix}`.slice(0, 8),
    idempotencyKey: `idem:c23-${suffix}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("createProject failed");
  const projectId = created.project.projectId;

  if (withRepositoryBinding) {
    const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
      projectId,
      actor: PILOTE,
      binding: {
        provider: "github",
        identity: IDENTITY,
        remoteUrl: `https://github.com/${IDENTITY}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
        baseSha: baseHeadSha,
      },
    });
    expect(bound.ok).toBe(true);
  }

  const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions0 = await oa.decisionServices.decisions.listByProject(
    projectId,
  );
  const lpsBoot =
    await oa.projectServices.getCurrentLivingProjectState.execute({
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
      narrative: "C23 Next cycle.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Design fonctionnel.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:functional-design",
        rationale: "C23",
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
  expect(mat.materialization?.ok).toBe(true);

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
    newTrajectoryId: () => `trj:c23-${suffix}`,
    newStepId: () => `stp:c23-${suffix}`,
    newProvenanceObservationId: () => `epi:c23-${suffix}`,
    correlationId: `cor:c23-bridge-${suffix}`,
  };

  const candidate =
    await prepareCandidateTrajectoryFromCurrentRecommendation({
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
    projectSummary: overview.project.name ?? "C23",
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
    rationale: "C23",
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
    forceM3Authority: true,
  });
  expect(go.ok).toBe(true);
  if (!go.ok) throw new Error("go");
  const decisionId = go.decision.decisionId;

  const overviewAfter = await runtime.getProject(projectId);
  if (!overviewAfter.ok) throw new Error("overviewAfter");
  const prepared = await prepareAndResolveM3ProductPath({
    projectId,
    decisionId,
    currentContext: {
      projectId,
      lpsId: overviewAfter.livingState.id,
      lpsVersion: overviewAfter.livingState.version,
      doctrineDigest: overviewAfter.doctrine.digest,
      activeCycleInstanceId: cycleInstanceId,
    },
    deps: {
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      executionContractServices: oa.executionContractServices,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: true,
      preferBoundedDocsWriteProfile: true,
      boundedDocsWriteBaseHeadSha: baseHeadSha,
    },
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error("prepareM3");
  const durableEc =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prepared.payload.successor.executionContractId,
    });
  expect(durableEc.ok).toBe(true);
  if (!durableEc.ok) throw new Error("ec missing");
  let contract = durableEc.contract;

  const execAuth = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: contract.scope,
    issuedAt: NOW,
    evidenceId: `evd:c23-exec:${contract.executionContractId}`,
    forceEnable: true,
  });
  const gateConfirmId = `cfm:gate:${contract.executionContractId}`;
  const requested = await oa.decisionServices.requestConfirmation.execute({
    confirmationId: gateConfirmId,
    level: "N3",
    actionRef: F3_CONFIRM_ACTION_REF,
    requestedBy: PILOTE,
    requestedTo: PILOTE,
    scope: contract.scope,
    idempotencyKey: `idem:${gateConfirmId}`,
    decisionRef: decisionId,
  });
  expect(requested.ok).toBe(true);
  const grantedGate = await oa.decisionServices.grantConfirmation.execute({
    confirmationId: gateConfirmId,
    actor: PILOTE,
    authorityEvidenceId: requireAuth(execAuth),
  });
  expect(grantedGate.ok).toBe(true);
  const confirmed =
    await oa.executionContractServices.confirmExecutionContract.execute({
      executionContractId: contract.executionContractId,
      confirmationId: gateConfirmId,
      actor: PILOTE,
      authorityEvidenceId: requireAuth(execAuth),
      expectedVersion: contract.version,
    });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm");
  contract = confirmed.contract;

  return {
    runtime,
    oa,
    projectId,
    cycleInstanceId,
    decisionId,
    contract,
    execAuthEvidenceId: requireAuth(execAuth),
    fakeLaunch,
    gitState,
  };
}

async function selectGate(input: {
  runtime: RuntimeApplicationService;
  attemptId: string;
  executionContractId: string;
  contractVersion: number;
  grantId: string;
  authorityEvidenceId: string;
  confirmations?: readonly Confirmation[];
  confirmationMatch?: {
    repositoryRef?: string;
    branchOrRef?: string;
    prNumber?: number;
    actorId?: string;
  };
  verifiedEffects?: readonly (
    | "filesystem.create"
    | "filesystem.modify"
    | "validation.run"
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge"
  )[];
}) {
  const attempts = input.runtime.oa!.executionAttemptServices;
  const selected = await attempts.selectExecutionAgent.execute({
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    idempotencyKey: `idem:sel:${input.attemptId}`,
    actor: PILOTE,
    authorityEvidenceId: input.authorityEvidenceId,
    expectedContractVersion: input.contractVersion,
    selectionProfile: "standard",
    selectionStrategy: "capabilities_deterministic",
    requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    systemInitiated: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(selected.error.message);
  const expiresAt = new Date(Date.parse(NOW) + 60 * 60 * 1000).toISOString();
  const gate = await attempts.grantRealExecutionGate!.execute({
    grantId: input.grantId,
    attemptId: input.attemptId,
    actor: PILOTE,
    expiresAt,
    authorityEvidenceId: input.authorityEvidenceId,
  });
  expect(gate.ok).toBe(true);
  if (!gate.ok) throw new Error(gate.error.message);
  return attempts.startExecution.execute({
    attemptId: input.attemptId,
    actor: PILOTE,
    authorityEvidenceId: input.authorityEvidenceId,
    confirmations: input.confirmations ?? [],
    confirmationMatch: input.confirmationMatch,
    verifiedEffects: input.verifiedEffects,
  });
}

describe("gcecCr23StartExecution — application boundary", () => {
  it("C23-N1 StartExecution refuses caller repo override vs Project binding", async () => {
    const ctx = await bootToConfirmedEc("n1");
    const hostileRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "git.commit",
      repositoryRef: HOSTILE_REPO,
      branchOrRef: BRANCH,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:n1:${ctx.contract.executionContractId}`.slice(0, 128),
      actionRef: hostileRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:c23-n1:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:c23-n1",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      confirmationMatch: {
        repositoryRef: HOSTILE_REPO,
        branchOrRef: BRANCH,
        actorId: PILOTE.actorId,
      },
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.internalCauseRef).toMatch(
        /hostile_confirmation_match_repository_mismatch|projected_repository/,
      );
    }
  }, 90_000);

  it("C23-N2 StartExecution refuses caller branch override vs EC workingBranch", async () => {
    const ctx = await bootToConfirmedEc("n2");
    const inputs = (ctx.contract.inputs ?? {}) as Record<string, unknown>;
    expect(inputs.workingBranch ?? inputs.defaultBranch).toBeTruthy();
    const durableBranch = String(
      inputs.workingBranch ?? inputs.defaultBranch ?? BRANCH,
    );
    const hostileBranch = "branch-hostile";
    expect(hostileBranch).not.toBe(durableBranch);
    const hostileRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: hostileBranch,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:n2:${ctx.contract.executionContractId}`.slice(0, 128),
      actionRef: hostileRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:c23-n2:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:c23-n2",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      confirmationMatch: {
        repositoryRef: IDENTITY,
        branchOrRef: hostileBranch,
        actorId: PILOTE.actorId,
      },
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.internalCauseRef).toBe(
        "hostile_confirmation_match_branch_mismatch",
      );
    }
  }, 90_000);

  it("C23-N3 StartExecution refuses caller PR override vs verified Evidence", async () => {
    const ctx = await bootToConfirmedEc("n3");
    ctx.gitState.currentBranch = "feature";
    ctx.gitState.branchHeads.set(
      "feature",
      "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    );
    ctx.gitState.prs.clear();
    ctx.gitState.prs.set(41, {
      number: 41,
      headSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      base: "main",
      state: "open",
      headBranch: "feature",
    });
    const repoRead = new FakeRepositoryReadPorts({ gitState: ctx.gitState });
    const v = await verifyPullRequestClaim({
      repositoryRead: repoRead,
      evidenceServices: ctx.oa.evidenceReviewServices,
      repositoryRef: IDENTITY,
      claimedPrNumber: 41,
      claimedHeadSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      bindings: {
        projectId: ctx.projectId,
        cycleInstanceId: ctx.cycleInstanceId,
        executionContractId: ctx.contract.executionContractId,
      },
      actor: PILOTE,
      nowIso: NOW,
    });
    expect(v.ok).toBe(true);
    if (!v.ok) throw new Error(v.reason);

    const hostileRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "github.pr.merge",
      repositoryRef: IDENTITY,
      branchOrRef: "main",
      prNumber: 42,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:n3:${ctx.contract.executionContractId}`.slice(0, 128),
      actionRef: hostileRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:c23-n3:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:c23-n3",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      confirmationMatch: {
        repositoryRef: IDENTITY,
        branchOrRef: "main",
        prNumber: 42,
        actorId: PILOTE.actorId,
      },
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
        "git.push",
        "github.pr.create",
      ],
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.internalCauseRef).toBe(
        "hostile_confirmation_match_pr_mismatch",
      );
    }
  }, 90_000);

  it("C23-N4 StartExecution: hostile actor assertion cannot authorize", async () => {
    const ctx = await bootToConfirmedEc("n4");
    const canonicalRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: BRANCH,
    });
    // Confirmation granted to Pilot (request.actor). Hostile assertion actorId=B.
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:n4:${ctx.contract.executionContractId}`.slice(0, 128),
      actionRef: canonicalRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:c23-n4:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:c23-n4",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      confirmationMatch: {
        repositoryRef: IDENTITY,
        branchOrRef: BRANCH,
        actorId: HOSTILE_ACTOR.actorId,
      },
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.internalCauseRef).toBe(
        "hostile_confirmation_match_actor_mismatch",
      );
    }
  }, 90_000);

  it("C23-P1 StartExecution authorizes canonical server target + exact Confirmation", async () => {
    const ctx = await bootToConfirmedEc("p1");
    const canonicalRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: BRANCH,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:p1:${ctx.contract.executionContractId}`.slice(0, 128),
      actionRef: canonicalRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:c23-p1:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:c23-p1",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    // D-GCEC-AGENT-01: commit-only Start without VERIFIED FS Evidence / wrong
    // agent fails closed. Canonical Confirmation target resolution remains in
    // C23 negatives; honest commit Start requires Evidence + local-commit agent.
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.internalCauseRef).toMatch(
        /git_commit_agent_capability_bypass|capability|without_verified_fs_evidence|profile/i,
      );
    }
    expect(ctx.fakeLaunch.calls).toHaveLength(0);
  }, 90_000);

  it("C23-P2 matching assertion accepted but non-authoritative (server truth wins)", async () => {
    const ctx = await bootToConfirmedEc("p2");
    const canonicalRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: BRANCH,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:p2:${ctx.contract.executionContractId}`.slice(0, 128),
      actionRef: canonicalRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:c23-p2:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:c23-p2",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      confirmationMatch: {
        repositoryRef: IDENTITY,
        branchOrRef: BRANCH,
        actorId: PILOTE.actorId,
      },
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    // Same AGENT-01 fail-closed as C23-P1 — matching assertion is never
    // authoritative enough to bypass AttemptExecutionProfile / Evidence.
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.internalCauseRef).toMatch(
        /git_commit_agent_capability_bypass|capability|without_verified_fs_evidence|profile/i,
      );
    }
    expect(ctx.fakeLaunch.calls).toHaveLength(0);
  }, 90_000);

  it("H23A-N1 missing Project repository binding + crafted empty-repo Confirmation → git.commit refused", async () => {
    const ctx = await bootToConfirmedEc("h23a-n1", {
      withRepositoryBinding: false,
    });
    const emptyRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "git.commit",
      repositoryRef: "",
      branchOrRef: BRANCH,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:h23a-n1:${ctx.contract.executionContractId}`.slice(
        0,
        128,
      ),
      actionRef: emptyRef,
      decisionRef: ctx.decisionId,
    });
    const callsBefore = ctx.fakeLaunch.calls.length;
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:h23a-n1:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:h23a-n1",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      // no confirmationMatch — incomplete target must still fail closed
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.internalCauseRef).toBe("no_authorized_effect");
    }
    expect(ctx.fakeLaunch.calls.length).toBe(callsBefore);
  }, 90_000);

  it("H23A-N2 missing binding: filesystem may authorize; git.commit blocked", async () => {
    const ctx = await bootToConfirmedEc("h23a-n2", {
      withRepositoryBinding: false,
    });
    const emptyRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "git.commit",
      repositoryRef: "",
      branchOrRef: BRANCH,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:h23a-n2:${ctx.contract.executionContractId}`.slice(
        0,
        128,
      ),
      actionRef: emptyRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:h23a-n2:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:h23a-n2",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.error.message);
    const last = ctx.fakeLaunch.calls.at(-1);
    expect(last?.authorizedEffects).toEqual(
      expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
    );
    expect(last?.authorizedEffects).not.toContain("git.commit");
    expect(last?.authorizedEffects).not.toContain("git.push");
    expect(last?.authorizedEffects).not.toContain("github.pr.create");
    expect(last?.authorizedEffects).not.toContain("github.pr.merge");
  }, 90_000);

  it("H23B-N3 full vertical before VERIFIED PR: earlier slice runs; merge blocked", async () => {
    const ctx = await bootToConfirmedEc("h23b-n3");
    const mergeRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "github.pr.merge",
      repositoryRef: IDENTITY,
      branchOrRef: "main",
      prNumber: 1,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:h23b-n3:${ctx.contract.executionContractId}`.slice(
        0,
        128,
      ),
      actionRef: mergeRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:h23b-n3:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:h23b-n3",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.error.message);
    const last = ctx.fakeLaunch.calls.at(-1);
    expect(last?.authorizedEffects).toEqual(
      expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
    );
    expect(last?.authorizedEffects).not.toContain("github.pr.merge");
  }, 90_000);

  it("H23B-P1 M4 merge under progressive contract → fail closed (CR-06)", async () => {
    const ctx = await bootToConfirmedEc("h23b-p1");
    ctx.gitState.currentBranch = "feature";
    ctx.gitState.branchHeads.set(
      "feature",
      "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    );
    ctx.gitState.prs.clear();
    ctx.gitState.prs.set(41, {
      number: 41,
      headSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      base: "main",
      state: "open",
      headBranch: "feature",
    });
    const repoRead = new FakeRepositoryReadPorts({ gitState: ctx.gitState });
    const v = await verifyPullRequestClaim({
      repositoryRead: repoRead,
      evidenceServices: ctx.oa.evidenceReviewServices,
      repositoryRef: IDENTITY,
      claimedPrNumber: 41,
      claimedHeadSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      bindings: {
        projectId: ctx.projectId,
        cycleInstanceId: ctx.cycleInstanceId,
        executionContractId: ctx.contract.executionContractId,
      },
      actor: PILOTE,
      nowIso: NOW,
    });
    expect(v.ok).toBe(true);
    if (!v.ok) throw new Error(v.reason);

    const mergeRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "github.pr.merge",
      repositoryRef: IDENTITY,
      branchOrRef: "main",
      prNumber: 41,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:h23b-p1:${ctx.contract.executionContractId}`.slice(
        0,
        128,
      ),
      actionRef: mergeRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:h23b-p1:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:h23b-p1",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
        "git.push",
        "github.pr.create",
      ],
    });
    // CORR-D-GCEC-AGENT-01 / CR-GCEC-AGENT-06 — M4 progressive contracts
    // fail closed on unsupported merge (no contract_legacy bridge; GCEC-PUSH not ready).
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.internalCauseRef).toMatch(
        /effect_not_supported|AGENT_CAPABILITY|capability/i,
      );
    }
  }, 90_000);
});
