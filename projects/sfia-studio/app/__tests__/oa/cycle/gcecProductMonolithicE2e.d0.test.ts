/**
 * GCEC principal Product monolithic E2E — D-GCEC-15 Option B.
 *
 * True Product spine (no pseudo-E2E):
 * CreateProject → SetRepositoryBinding → LR → prepareCandidate → approve →
 * prepareCycleFromValidatedTrajectory → startPreparedTrajectoryCycle →
 * F2 → HD → prepareM3 → resolve → Confirm → Select → GateD → StartExecution →
 * Fake Cursor slice → complete → EC confirmed (remaining reqs) → evidence verify →
 * gated Confirmations → Select+Start same EC → git effects via Fake only →
 * advance EC completed → FinalizationAssessment → FINALIZE HD → Cycle completed.
 *
 * CR-GCEC-25 — no direct cycle/trajectory/EC/Evidence repository mutation after
 * fixture bootstrap for scenario progression.
 *
 * ZERO OpenAI REAL. ZERO Cursor REAL. Fake owns all git mutations after fixture init.
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
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
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  ManagedProjectRepositoryResolver,
  MemoryLaunchSafetyJournal,
  sanitizeManagedRepoIdentity,
  type RealExecutionLaunchPort,
} from "@/lib/oa/execution-attempt";
import { FakeConversationProvider } from "@/lib/platform/ai";
import {
  analyzeIntent,
} from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import {
  recordF2Decision,
} from "@/features/project-assistant/f2/recordDecision";
import {
  F3_ACTION,
} from "@/features/project-assistant/f3/constants";
import {
  prepareAndResolveM3ProductPath,
} from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";


import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";

const APP_ROOT = path.resolve(__dirname, "../../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const IDENTITY = "acme/widget";
const TARGET_PATH = "docs/functional-design.md";
/** Server-derived workingBranch from prepareM3 (defaultBranch). */
const BRANCH = "main";
const NOW = "2026-09-11T14:00:00.000Z";

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
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:gcec-prod-${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:gcec-prod-${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:gcec-prod-${this.prefix}-${this.correlation}`;
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
  git(repoRoot, ["config", "user.email", "gcec@test.local"]);
  git(repoRoot, ["config", "user.name", "GCEC Product E2E"]);
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

describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () => {
  it("AKG-M5 — Product spine to fixture-safe M3 resolve (docs_write profile retired)", async () => {
    const root = tempDir("sfia-gcec-prod-");
    const managedBase = path.join(root, "managed");
    const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);

    // Fixture only — Fake Cursor owns git mutations after this point.
    const gitState = new FakeCursorGitExternalState({
      worktreeRoot: repoRoot,
      initialBranch: "main",
      initialSha: baseHeadSha,
    });
    const fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: repoRoot,
      pathAllowlist: ["docs/"],
      gitState,
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
    });
    const safetyJournal = new MemoryLaunchSafetyJournal();

    const runtime: RuntimeApplicationService = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      idSource: new FixedIdSource("e2e"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa-product.sqlite"),
      realBoundary: {
        launchPort: fakeLaunch as unknown as RealExecutionLaunchPort,
        safetyJournal,
        managedRepoRootBase: managedBase,
      },
    });
    const oa = runtime.oa!;
    expect(oa.executionAttemptServices.realBoundary).toBeDefined();
    expect(oa.executionAttemptServices.grantRealExecutionGate).toBeDefined();

    // 1–2 CreateProject + repository binding
    const created = await runtime.createProject({
      name: "GCEC Product E2E",
      objective: "GCEC Product E2E",
      context: "deterministic Fake Cursor",
      criticality: "STANDARD",
      constraints: ["FIXTURE ONLY", "ZERO LIVE"],
      shortReference: "GCECPROD",
      idempotencyKey: `idem:gcec-prod-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;

    // 3 Product trajectory → cycle binding (CR-GCEC-25) — no cycles.save
    const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
    const decisions0 = await oa.decisionServices.decisions.listByProject(
      projectId,
    );
    const lpsBoot =
      await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(lpsBoot.ok).toBe(true);
    if (!lpsBoot.ok) return;
    const presence = await resolveTrajectoryBootstrapPresence(
      oa.cycleServices.trajectories,
      projectId,
    );
    const projectBoot = await oa.projectServices.getProject.execute({
      projectId,
    });
    expect(projectBoot.ok).toBe(true);
    if (!projectBoot.ok) return;
    const doctrinePin = projectBoot.project.doctrinePackageRef;
    expect(doctrinePin).toBeTruthy();

    const mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId,
      structuredOutput: {
        narrative: "Envisager un design fonctionnel gouverné.",
        preCycleRoutingAssessment: {
          ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
        },
        lifecycleRecommendation: {
          intent: "NEXT_CYCLE" as const,
          statement: "Envisager un Design fonctionnel.",
          subjectCycleInstanceId: null,
          targetCycleInstanceId: null,
          targetCycleTypeId: "cyc:functional-design",
          rationale: "GCEC Product monolithic E2E",
          authority: "none" as const,
          isHumanDecision: false as const,
          qualificationSignals: { ...SIGNALS_LIGHT },
        },
      },
      updateEpistemicState: oa.cycleServices.updateEpistemicState,
      facts: {
        cycles: cycles0,
        lpsActiveCycleInstanceId:
          lpsBoot.livingProjectState.activeCycleInstanceId,
        lpsVersion: lpsBoot.livingProjectState.version,
        doctrinePackageId: doctrinePin!.doctrinePackageId,
        doctrinePackageVersion: doctrinePin!.version,
        doctrinePackageDigest: doctrinePin!.digest,
        trajectory: null,
        trajectoryBootstrapPresence: presence,
        decisions: decisions0,
        evidence: [],
        epistemicItems: await oa.cycleServices.epistemic.listByProject(
          projectId,
        ),
      },
      producedAt: NOW,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.recommendationAttempted).toBe(true);
    expect(mat.materialization?.ok).toBe(true);
    if (!mat.materialization?.ok) return;

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
        const p = await oa.projectServices.getProject.execute({
          projectId: pid,
        });
        if (!p.ok) return null;
        const pin = p.project.doctrinePackageRef;
        return pin
          ? {
              doctrinePackageId: pin.doctrinePackageId,
              version: pin.version,
              digest: pin.digest,
            }
          : null;
      },
      newTrajectoryId: () => `trj:gcec-prod-${projectId}`,
      newStepId: () => `stp:fd`,
      newProvenanceObservationId: () => `epi:trj-prov-gcec-prod`,
      correlationId: `cor:gcec-prod-bridge`,
    };

    const candidatePrepared =
      await prepareCandidateTrajectoryFromCurrentRecommendation({
        projectId,
        deps: bridgeDeps,
      });
    expect(candidatePrepared.ok).toBe(true);
    if (!candidatePrepared.ok) return;

    const presentation = await buildPreCycleCandidateApprovalPresentation({
      oa,
      projectId,
    });
    expect(presentation.ok && presentation.presentation).toBeTruthy();
    if (!presentation.ok || !presentation.presentation) return;

    const approved = await approveCandidateTrajectory({
      oa,
      projectId,
      presentationDigest: presentation.presentation.presentationDigest,
      forceLocalAuthority: true,
    });
    expect(approved.ok).toBe(true);
    if (!approved.ok) return;

    const prep = await prepareCycleFromValidatedTrajectory({ oa, projectId });
    expect(prep.ok).toBe(true);
    if (!prep.ok) {
      throw new Error(`prepareCycle: ${prep.code} ${prep.reason}`);
    }
    const cycleInstanceId = prep.cycle.cycleInstanceId;
    expect(prep.cycle.trajectoryId).toBeTruthy();
    expect(prep.cycle.trajectoryVersion).toBeTruthy();
    expect(prep.cycle.trajectoryStepId).toBe("stp:fd");

    const startedCycle = await startPreparedTrajectoryCycle({
      oa,
      projectId,
      cycleInstanceId,
      forceLocalAuthority: true,
    });
    expect(startedCycle.ok).toBe(true);
    if (!startedCycle.ok) {
      throw new Error(`startPrepared: ${startedCycle.code}`);
    }
    expect(startedCycle.cycle.status).toBe("active");
    expect(startedCycle.cycle.trajectoryId).toBe(prep.cycle.trajectoryId);
    expect(startedCycle.cycle.trajectoryVersion).toBe(
      prep.cycle.trajectoryVersion,
    );
    expect(startedCycle.cycle.trajectoryStepId).toBe("stp:fd");

    const startAuth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: NOW,
      forceEnable: true,
    });
    expect(startAuth.ok).toBe(true);

    // Durable trajectory binding exists BEFORE F2 (CR-GCEC-25)
    const cycleBeforeF2 =
      await oa.cycleServices.cycles.findById(cycleInstanceId);
    expect(cycleBeforeF2?.trajectoryId).toBe(prep.cycle.trajectoryId);
    expect(cycleBeforeF2?.trajectoryVersion).toBe(prep.cycle.trajectoryVersion);
    expect(cycleBeforeF2?.trajectoryStepId).toBe("stp:fd");

    // 4–5 F2 Fake → Proposal → recordF2Decision (HD)
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const provider = new FakeConversationProvider();
    const analyzed = await analyzeIntent({
      userContent:
        "__F2_ARTIFACT_MATERIALIZE__ produce functional design at docs/functional-design.md",
      projectSummary: overview.project.name ?? "GCEC Product E2E",
      provider,
    });
    expect(analyzed.analysis.parseOk).toBe(true);
    // AKG-M5 — specialized docs_write intent retired; generalist/other only.
    expect(analyzed.analysis.executionIntent?.intentKind).toBe("other");

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
      rephrasedRequest:
        analyzed.analysis.rephrasedRequest ??
        "Produire docs/functional-design.md",
      objective: analyzed.analysis.objective ?? "Functional design",
      cycleTypeId:
        analyzed.analysis.candidateCycleTypeId ?? "cyc:functional-design",
      recommendedProfile: "Standard",
      rationale: "GCEC Product monolithic E2E",
      scope: analyzed.analysis.scope ?? "docs/",
      outOfScope: analyzed.analysis.outOfScope,
      activatedBlocks: analyzed.analysis.activatedBlocks,
      expectedOutcome:
        analyzed.analysis.expectedOutcome ?? "artifact functional-design",
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
      executionIntent: {
        ...(analyzed.analysis.executionIntent ?? { intentKind: "other" }),
        intentKind: "other",
        targetPath: TARGET_PATH,
        scopeIn: [TARGET_PATH],
        requiredCapabilities: ["cap:studio.cursor.generalist"],
      },
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
    if (!go.ok) return;
    const decisionId = go.decision.decisionId;

    const overviewAfter = await runtime.getProject(projectId);
    expect(overviewAfter.ok).toBe(true);
    if (!overviewAfter.ok) return;
    const currentContext = {
      projectId,
      lpsId: overviewAfter.livingState.id,
      lpsVersion: overviewAfter.livingState.version,
      doctrineDigest: overviewAfter.doctrine.digest,
      activeCycleInstanceId: cycleInstanceId,
    };

    // 6 prepareM3 + resolve (boundedDocsWrite)
    const prepared = await prepareAndResolveM3ProductPath({
      projectId,
      decisionId,
      currentContext,
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
    if (!prepared.ok) return;
    const durableEc =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prepared.payload.successor.executionContractId,
      });
    expect(durableEc.ok).toBe(true);
    if (!durableEc.ok) return;
    const contract = durableEc.contract;
    // AKG-M5 KNOWN GAP exit proof — bounded docs_write M3 profile retired.
    // Product spine through F2 → HD → generic PREPARE → fixture-safe resolve remains.
    expect(prepared.payload.mode).toBe("M3_RESOLVED_FIXTURE");
    expect(contract.action).toBe(F3_ACTION);
    expect(prepared.payload.prepare.contract.stopConditions).toContain(
      "TARGET_UNRESOLVED",
    );
    const hdSeal = await oa.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    expect(hdSeal.ok).toBe(true);
    if (!hdSeal.ok) return;
    expect(hdSeal.decision.decisionBasis?.executionBasis.intentKind).toBe(
      "other",
    );
    expect(hdSeal.decision.decisionBasis?.executionBasis.targetPath).toBe(
      TARGET_PATH,
    );
    // Full A→B filesystem + git.commit progressive spine: gcecCr23StartExecution.d0.test.ts
  });
});
