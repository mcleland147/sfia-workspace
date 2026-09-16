/**
 * PRODUCT JOURNEY ↔ GOVERNED DOCS_WRITE EXECUTION WIRING — Delivery proofs.
 *
 * Deterministic only. ZERO Cursor REAL. ZERO OpenAI LIVE.
 * Proves: EC machine profile auto-resolve, W2 inspect/confirm/authority,
 * Product Execute → existing OA Attempt/Evidence pipeline, Fake boundary,
 * fail-closed without boundary, Reproof 05/06/07 non-regression properties.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  LOCAL_PILOTE_ACTOR,
} from "@/lib/oa/decision";
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  M4_REAL_GATEWAY_ADAPTER_ID,
  MemoryLaunchSafetyJournal,
  createM4BoundedDocsWriteCursorAgentDescriptor,
  isStudioCursorRealEnabled,
} from "@/lib/oa/execution-attempt";
import { agentMatchViolation } from "@/lib/oa/execution-attempt/domain/invariants";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
import { boundedDocsWriteM3ResolutionProfile } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import {
  authorizedM3ResolutionKind,
  selectProductM3ResolutionProfile,
} from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
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
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
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
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import {
  governedExecuteAuthorizedContract,
  governedExecuteSelectAgent,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const IDENTITY = "acme/widget";
const BRANCH = "main";
const NOW = "2026-09-16T18:00:00.000Z";
const PILOTE = LOCAL_PILOTE_ACTOR;
const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const tempRoots: string[] = [];

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempRoots.push(dir);
  return dir;
}

function assertRealOff(): void {
  delete process.env.SFIA_STUDIO_CURSOR_REAL;
  delete process.env.OPS1_CURSOR_REAL;
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
    return `prj:pjw-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    this.n += 1;
    return `lps:pjw-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    this.n += 1;
    return `cor:pjw-${this.prefix}-${this.n}`;
  }
}

beforeEach(() => {
  assertRealOff();
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  setConversationProviderForTests(null);
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
});

afterEach(() => {
  assertRealOff();
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
});

describe("10.1 / profile — machine scope vs business disclosure", () => {
  it("bounded docs_write profile is canonical M4 scope without PREPARE_ONLY", () => {
    const profile = boundedDocsWriteM3ResolutionProfile();
    expect(profile.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(profile.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
    expect(profile.scope).toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);
    expect(profile.constraints).not.toContain("PREPARE_ONLY");
    expect(profile.constraints).not.toContain("NO_CURSOR_REAL");
    expect(profile.constraints).not.toContain("NO_ATTEMPT");
    expect(authorizedM3ResolutionKind({
      action: profile.action,
      target: profile.target,
      scope: profile.scope!,
      reversibility: profile.reversibility,
      requiredCapabilities: profile.requiredCapabilities,
      constraints: profile.constraints ?? [],
      stopConditions: profile.stopConditions ?? [],
    })).toBe("bounded_docs_write");
  });

  it("narrative/French scope alone never matches M4 agent", () => {
    const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const violation = agentMatchViolation(agent, {
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      requiredCapabilities: ["cap:cursor.docs_write"],
      scope: "docs_write borné — cycle actif — aucune exécution automatique",
    });
    expect(violation).not.toBeNull();
    expect(violation?.detailCode).toMatch(/SCOPE|scope/i);
  });

  it("selectProductM3ResolutionProfile docs-write explicit; fixture default", () => {
    expect(
      selectProductM3ResolutionProfile({ preferBoundedDocsWriteProfile: true })
        .kind,
    ).toBe("bounded_docs_write");
    expect(selectProductM3ResolutionProfile().kind).toBe("fixture");
  });
});

async function bootDocsWriteJourney(suffix: string, withBoundary: boolean) {
  const root = tempDir(`sfia-pjw-${suffix}-`);
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
  const safetyJournal = new MemoryLaunchSafetyJournal();
  const runtime = getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: NOW,
    idSource: new FixedIdSource(suffix),
    auditMode: "noop",
    productDbPath: path.join(root, "oa.sqlite"),
    ...(withBoundary
      ? {
          realBoundary: {
            launchPort: fakeLaunch,
            safetyJournal,
            managedRepoRootBase: managedBase,
          },
        }
      : {}),
  });
  const oa = runtime.oa!;

  const created = await runtime.createProject({
    name: `PJW ${suffix}`,
    objective: "Product Journey docs_write wiring",
    context: "delivery",
    criticality: "STANDARD",
    constraints: ["ZERO LIVE"],
    shortReference: `PJW${suffix}`.slice(0, 8),
    idempotencyKey: `idem:pjw-${suffix}`,
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
      narrative: "PJW Next cycle.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Design fonctionnel.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:functional-design",
        rationale: "PJW",
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
    newTrajectoryId: () => `trj:pjw-${suffix}`,
    newStepId: () => `stp:pjw-${suffix}`,
    newProvenanceObservationId: () => `epi:pjw-${suffix}`,
    correlationId: `cor:pjw-bridge-${suffix}`,
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
    projectSummary: overview.project.name ?? "PJW",
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
    rationale: "PJW",
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

  return {
    runtime,
    oa,
    projectId,
    cycleInstanceId,
    decisionId,
    baseHeadSha,
    fakeLaunch,
    currentContext: {
      projectId,
      lpsId: overviewAfter.livingState.id,
      lpsVersion: overviewAfter.livingState.version,
      doctrineDigest: overviewAfter.doctrine.digest,
      activeCycleInstanceId: cycleInstanceId,
    },
    dbPath: path.join(root, "oa.sqlite"),
  };
}

describe("10.1 / 10.3 / 10.4 / 10.5 / 10.6 / 10.7 — Product Execute wiring", () => {
  it("AUTO resolve docs_write (no prefer flag) → inspect → confirm → AUTHORIZED → governedExecute one Attempt", async () => {
    const ctx = await bootDocsWriteJourney("auto", true);
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
        // Intentionally omit preferBoundedDocsWriteProfile — DecisionBasis auto-select.
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_DOCS_WRITE");
    const successor = prepared.payload.successor;
    expect(successor.scope).toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);
    expect(successor.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(successor.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
    expect(successor.constraints).not.toContain("PREPARE_ONLY");
    expect(successor.constraints).not.toContain("NO_ATTEMPT");
    expect(prepared.payload.prepare.contract.constraints).toContain("PREPARE_ONLY");
    expect(prepared.payload.prepare.contract.scope).not.toBe(
      M4_BOUNDED_DOCS_WRITE_SCOPE,
    );

    const executionContractId = successor.executionContractId;

    const inspected = await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.inspectionSufficient).toBe(true);

    const blocked = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(true);
    if (!blocked.ok) return;
    expect(blocked.outcome).toBe("BLOCKED");

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const authorized = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) return;
    expect(authorized.outcome).toBe("AUTHORIZED");

    const launchBefore = ctx.fakeLaunch.calls.length;
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.phase).toBe("terminal");
    expect(executed.selectedAgentRef).toBe(M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID);
    expect(executed.adapterId).toBe(M4_REAL_GATEWAY_ADAPTER_ID);
    expect(executed.realExecution).toBe(false);
    expect(executed.boundaryProofMode).toBe("deterministic_fake");
    // Isolated temp FS mutations via Fake port — not Cursor REAL.
    expect(executed.externalEffects).toBe(true);
    expect(executed.attemptStatus).toBe("succeeded");
    expect(ctx.fakeLaunch.calls.length).toBe(launchBefore + 1);

    const listed =
      await ctx.oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) return;
    const succeeded = listed.attempts.filter((a) => a.status === "succeeded");
    expect(succeeded).toHaveLength(1);

    const replay = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedExistingAttempt).toBe(true);
    expect(ctx.fakeLaunch.calls.length).toBe(launchBefore + 1);

    const evidence = await ctx.oa.evidenceReviewServices.repository.listByProject(
      ctx.projectId,
    );
    expect(
      evidence.some(
        (e) =>
          e.bindings?.executionAttemptId === succeeded[0]!.attemptId ||
          e.bindings?.executionContractId === executionContractId,
      ),
    ).toBe(true);
  });

  it("docs_write EC without realBoundary → REAL_BOUNDARY_REQUIRED fail-closed", async () => {
    const ctx = await bootDocsWriteJourney("nobound", false);
    expect(ctx.oa.executionAttemptServices.realBoundary).toBeUndefined();
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
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_DOCS_WRITE");

    const executionContractId = prepared.payload.successor.executionContractId;
    await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
    });
    await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });

    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) return;
    expect(selected.code).toBe("REAL_BOUNDARY_REQUIRED");
  });
});

describe("10.9 — Reproof 05/06/07 non-regression properties", () => {
  it("Reproof 07 — legacy narrative scope never equals studio.gcec.docs_write match", () => {
    expect(
      authorizedM3ResolutionKind({
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: M4_BOUNDED_DOCS_WRITE_TARGET,
        scope: "docs_write borné — cycle actif — aucune exécution automatique",
        reversibility: "reversible",
        requiredCapabilities: ["cap:cursor.docs_write"],
        constraints: [
          "PREPARE_ONLY",
          "NO_CURSOR_REAL",
          "NO_ATTEMPT",
          "OUT_OF_SCOPE:Cursor REAL",
        ],
        stopConditions: ["AUTHORITY_DENIED"],
      }),
    ).toBeNull();
  });

  it("Reproof 07 — REAL flag alone never auto-selects docs_write profile", () => {
    const off = selectProductM3ResolutionProfile({
      env: { SFIA_STUDIO_CURSOR_REAL: "0", NODE_ENV: "test" },
    });
    const on = selectProductM3ResolutionProfile({
      env: { SFIA_STUDIO_CURSOR_REAL: "1", NODE_ENV: "test" },
    });
    // REAL may arm bounded_read_only composition; it must NEVER silently
    // promote docs_write or rewrite an inspected EC's semantics.
    expect(off.kind).not.toBe("bounded_docs_write");
    expect(on.kind).not.toBe("bounded_docs_write");
    expect(on.kind === "fixture" || on.kind === "bounded_read_only").toBe(true);
  });

  it("Reproof 06 — missing Confirmation blocks authority on resolved docs_write", async () => {
    const ctx = await bootDocsWriteJourney("nocfm", true);
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
    if (!prepared.ok) return;
    const executionContractId = prepared.payload.successor.executionContractId;
    await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
    });
    const auth = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    expect(auth.outcome).toBe("BLOCKED");
    expect(auth.reasonCode).toMatch(/confirmation/i);
  });

  it("Reproof 05 — prepare original is superseded; successor linked; PREPARE_ONLY preserved on original", async () => {
    const ctx = await bootDocsWriteJourney("stale", true);
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
    if (!prepared.ok) return;
    const originalLoaded =
      await ctx.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prepared.payload.original.executionContractId,
      });
    expect(originalLoaded.ok).toBe(true);
    if (!originalLoaded.ok) return;
    expect(originalLoaded.contract.status).toBe("superseded");
    expect(originalLoaded.contract.constraints).toContain("PREPARE_ONLY");
    expect(prepared.payload.successor.supersedesExecutionContractId).toBe(
      prepared.payload.original.executionContractId,
    );
    expect(prepared.payload.successor.constraints).not.toContain("PREPARE_ONLY");
  });
});

describe("B1 — provenance Fake/Real truth", () => {
  it("B1.1 Fake docs_write: M4 profile + deterministic_fake ⇒ realExecution false", async () => {
    const ctx = await bootDocsWriteJourney("b11", true);
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
    if (!prepared.ok) return;
    const executionContractId = prepared.payload.successor.executionContractId;
    await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
    });
    await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    expect(selected.realExecution).toBe(false);
    expect(selected.boundaryProofMode).toBe("deterministic_fake");

    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.selectedAgentRef).toBe(M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID);
    expect(executed.adapterId).toBe(M4_REAL_GATEWAY_ADAPTER_ID);
    expect(executed.boundaryProofMode).toBe("deterministic_fake");
    expect(executed.realExecution).toBe(false);
  });

  it("B1.4/B1.5 REAL-shaped stub boundary without Cursor ⇒ projection can claim REAL metadata only via boundaryProofMode", () => {
    const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const fakeProv = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:b15-fake",
        selectedAgentRef: agent.agentId,
        status: "succeeded",
        launchedAt: NOW,
        resultRef: "res:x",
      },
      agent,
      boundaryProofMode: "deterministic_fake",
    });
    expect(fakeProv.realExecution).toBe(false);
    expect(fakeProv.boundaryProofMode).toBe("deterministic_fake");
    expect(fakeProv.mode).toBe("BOUNDED_M4_DETERMINISTIC");

    const realShapedProv = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:b15-stub",
        selectedAgentRef: agent.agentId,
        status: "succeeded",
        launchedAt: NOW,
        resultRef: "res:y",
      },
      agent,
      boundaryProofMode: "cursor_real",
    });
    // Projection capability: cursor_real proof mode + launched ⇒ realExecution true
    // without spawning Cursor (metadata test only — cycle still ZERO REAL launches).
    expect(realShapedProv.realExecution).toBe(true);
    expect(realShapedProv.boundaryProofMode).toBe("cursor_real");
    expect(realShapedProv.mode).toBe("CURSOR_CLI_REAL");

    const agentOnly = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:b15-agent",
        selectedAgentRef: agent.agentId,
        status: "succeeded",
        launchedAt: NOW,
      },
      agent,
      boundaryProofMode: null,
    });
    expect(agentOnly.realExecution).toBe(false);
  });

  it("B1.3 rejected/failed fake never promotes REAL", () => {
    const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const failed = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:b13",
        selectedAgentRef: agent.agentId,
        status: "failed",
        launchedAt: NOW,
      },
      agent,
      boundaryProofMode: "deterministic_fake",
    });
    expect(failed.realExecution).toBe(false);
    expect(failed.boundaryProofMode).toBe("deterministic_fake");
  });
});

describe("B2 — no DecisionBasis / intent widening", () => {
  it("B2.1 structured DecisionBasis docs_write + action + capability → bounded_docs_write", async () => {
    const ctx = await bootDocsWriteJourney("b21", false);
    const decision = await ctx.oa.decisionServices.getHumanDecision.execute({
      decisionId: ctx.decisionId,
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    const eb = decision.decision.decisionBasis?.executionBasis;
    expect(eb?.intentKind === "docs_write" || eb?.requestedOperation).toBeTruthy();

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
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_DOCS_WRITE");
    expect(prepared.payload.successor.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(prepared.payload.successor.scope).toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);
  });

  it("B2.2/B2.4 incompatible DecisionBasis requestedOperation fails closed (no promotion)", async () => {
    const ctx = await bootDocsWriteJourney("b24", false);
    // Re-record a sibling decision with contradictory requestedOperation via new proposal
    const overview = await ctx.runtime.getProject(ctx.projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const snapshot = {
      projectId: ctx.projectId,
      lpsId: overview.livingState.id,
      lpsVersion: overview.livingState.version,
      doctrineDigest: overview.doctrine.digest,
      activeCycleInstanceId: ctx.cycleInstanceId,
      ckcResolutionRef: null as string | null,
    };
    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest: "contradictory op",
      objective: "FD",
      cycleTypeId: "cyc:functional-design",
      recommendedProfile: "Standard",
      rationale: "B2.4",
      scope: "docs/",
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "artifact",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "F3 PREPARE",
      contextSnapshot: snapshot,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
      requestedOperation: "github.pr.merge",
      executionIntent: {
        intentKind: "docs_write",
        requestedOperation: "github.pr.merge",
        artifactType: "functional_design",
        targetRepositoryRef: IDENTITY,
        targetPath: "docs/functional-design.md",
        scopeIn: ["docs/"],
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibilityExpectation: "reversible",
      },
    });
    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId: ctx.projectId,
      decisionKind: "GO",
      currentContext: snapshot,
      decisionServices: ctx.oa.decisionServices,
      authorityResolver: ctx.oa.authorityResolver,
      nowIso: () => ctx.oa.clock.nowIso(),
      forceM3Authority: true,
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: go.decision.decisionId,
      currentContext: {
        projectId: ctx.projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
        activeCycleInstanceId: ctx.cycleInstanceId,
      },
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("DOCS_WRITE_INTENT_INCOHERENT");
  });

  it("B2.3 prefer=true without coherent prepare action/capability fails closed", async () => {
    const root = tempDir("sfia-pjw-b23-");
    const managedBase = path.join(root, "managed");
    const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);
    const runtime = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      idSource: new FixedIdSource("b23"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
    });
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "B23",
      objective: "non-docs",
      context: "delivery",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "B23",
      idempotencyKey: "idem:b23",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;
    await oa.projectServices.setProjectRepositoryBinding.execute({
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
    // Minimal non-docs GO via empty executionIntent → prepare UNRESOLVED
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const snapshot = {
      projectId,
      lpsId: overview.livingState.id,
      lpsVersion: overview.livingState.version,
      doctrineDigest: overview.doctrine.digest,
      activeCycleInstanceId: null as string | null,
      ckcResolutionRef: null as string | null,
    };
    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest: "generic",
      objective: "generic",
      cycleTypeId: "cyc:functional-design",
      recommendedProfile: "Standard",
      rationale: "B2.3",
      scope: "n/a",
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "n/a",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "F3 PREPARE",
      contextSnapshot: snapshot,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
      requestedOperation: null,
      executionIntent: null,
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
    if (!go.ok) return;
    const prepared = await prepareAndResolveM3ProductPath({
      projectId,
      decisionId: go.decision.decisionId,
      currentContext: {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
        activeCycleInstanceId: null,
      },
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
        preferBoundedDocsWriteProfile: true,
        boundedDocsWriteBaseHeadSha: baseHeadSha,
        gitStartDir: repoRoot,
      },
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("DOCS_WRITE_PROFILE_PREPARE_INCOHERENT");
  });

  it("B2.5 REAL env does not auto-select docs_write", () => {
    expect(
      selectProductM3ResolutionProfile({
        env: { SFIA_STUDIO_CURSOR_REAL: "1", NODE_ENV: "test" },
      }).kind,
    ).not.toBe("bounded_docs_write");
  });

  it("B2.6 client cannot force profile via selectProduct alone", () => {
    // Without server prefer flag, selector stays fixture — no client-forced machine profile.
    expect(selectProductM3ResolutionProfile().kind).toBe("fixture");
    expect(
      selectProductM3ResolutionProfile({
        preferBoundedDocsWriteProfile: false,
      }).kind,
    ).toBe("fixture");
  });

  it("B2.7 narrative French scope never matches M4", () => {
    expect(
      authorizedM3ResolutionKind({
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: M4_BOUNDED_DOCS_WRITE_TARGET,
        scope: "docs_write borné — cycle actif — aucune exécution automatique",
        reversibility: "reversible",
        requiredCapabilities: ["cap:cursor.docs_write"],
        constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL"],
        stopConditions: ["AUTHORITY_DENIED"],
      }),
    ).toBeNull();
  });
});

describe("P1 — SQLite TEMP fresh-runtime restart", () => {
  it("Runtime A execute → destroy → Runtime B same SQLite rehydrates Attempt+Evidence without relaunch", async () => {
    const ctx = await bootDocsWriteJourney("p1rst", true);
    const dbPath = ctx.dbPath;
    const managedBase = path.dirname(ctx.fakeLaunch.gitState.worktreeRoot);
    // Fake worktreeRoot is repoRoot under managed/<identity>

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
    if (!prepared.ok) return;
    const executionContractId = prepared.payload.successor.executionContractId;
    await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
    });
    await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.attemptStatus).toBe("succeeded");
    const attemptIdA = executed.attemptId;
    const launchCountA = ctx.fakeLaunch.calls.length;
    expect(launchCountA).toBe(1);

    const listedA =
      await ctx.oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listedA.ok).toBe(true);
    if (!listedA.ok) return;
    const attemptsA = listedA.attempts.filter((a) => a.status === "succeeded");
    expect(attemptsA).toHaveLength(1);

    const evidenceA = await ctx.oa.evidenceReviewServices.repository.listByProject(
      ctx.projectId,
    );
    const evidenceBoundA = evidenceA.filter(
      (e) => e.bindings?.executionAttemptId === attemptIdA,
    );
    expect(evidenceBoundA.length).toBeGreaterThanOrEqual(1);
    const evidenceCountA = evidenceA.length;

    // --- Simulated process stop: destroy Runtime A in-memory services ---
    const projectId = ctx.projectId;
    const repoRoot = ctx.fakeLaunch.gitState.worktreeRoot;
    const baseHeadSha = ctx.baseHeadSha;
    resetRuntimeApplicationServiceForTests();

    // --- Runtime B: same SQLite, fresh Fake port (calls=0) ---
    const gitStateB = new FakeCursorGitExternalState({
      worktreeRoot: repoRoot,
      initialBranch: BRANCH,
      initialSha: baseHeadSha,
    });
    const fakeLaunchB = new FakeDocsWriteLaunchPort({
      worktreeRoot: repoRoot,
      pathAllowlist: ["docs/"],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
      gitState: gitStateB,
    });
    expect(fakeLaunchB.calls.length).toBe(0);
    expect(fakeLaunchB.boundaryProofMode).toBe("deterministic_fake");

    const runtimeB = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      idSource: new FixedIdSource("p1b"),
      auditMode: "noop",
      productDbPath: dbPath,
      realBoundary: {
        launchPort: fakeLaunchB,
        safetyJournal: new MemoryLaunchSafetyJournal(),
        managedRepoRootBase: managedBase,
      },
    });
    const oaB = runtimeB.oa!;

    const projectB = await oaB.projectServices.getProject.execute({ projectId });
    expect(projectB.ok).toBe(true);

    const ecB = await oaB.executionContractServices.getExecutionContract.execute({
      executionContractId,
    });
    expect(ecB.ok).toBe(true);
    if (!ecB.ok) return;
    expect(ecB.contract.scope).toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);

    const listedB =
      await oaB.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listedB.ok).toBe(true);
    if (!listedB.ok) return;
    const succeededB = listedB.attempts.filter((a) => a.status === "succeeded");
    expect(succeededB).toHaveLength(1);
    expect(succeededB[0]!.attemptId).toBe(attemptIdA);
    expect(succeededB[0]!.resultRef).toBe(attemptsA[0]!.resultRef);

    const evidenceB = await oaB.evidenceReviewServices.repository.listByProject(
      projectId,
    );
    expect(evidenceB.length).toBe(evidenceCountA);
    expect(
      evidenceB.some((e) => e.bindings?.executionAttemptId === attemptIdA),
    ).toBe(true);

    // Replay on Runtime B — must reuse Attempt, no Fake relaunch
    const replay = await governedExecuteAuthorizedContract({
      oa: oaB,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedExistingAttempt).toBe(true);
    expect(replay.attemptId).toBe(attemptIdA);
    expect(fakeLaunchB.calls.length).toBe(0);
    expect(replay.realExecution).toBe(false);
    expect(replay.boundaryProofMode).toBe("deterministic_fake");

    const listedAfter =
      await oaB.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listedAfter.ok).toBe(true);
    if (!listedAfter.ok) return;
    expect(
      listedAfter.attempts.filter((a) => a.status === "succeeded"),
    ).toHaveLength(1);
    const evidenceAfter =
      await oaB.evidenceReviewServices.repository.listByProject(projectId);
    expect(evidenceAfter.length).toBe(evidenceCountA);
  });
});

describe("smoke — env REAL off", () => {
  it("SFIA_STUDIO_CURSOR_REAL and OPS1_CURSOR_REAL remain off", () => {
    assertRealOff();
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).toBe("0");
    expect(process.env.OPS1_CURSOR_REAL).toBe("0");
  });
});
