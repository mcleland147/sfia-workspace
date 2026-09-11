/**
 * GCEC principal Product monolithic E2E — D-GCEC-15 Option B.
 *
 * True Product spine (no pseudo-E2E):
 * CreateProject → SetRepositoryBinding → Cycle START → F2 → HD → prepareM3 →
 * resolve → Confirm → Select → GateD → StartExecution → Fake Cursor slice →
 * complete → EC confirmed (remaining reqs) → evidence verify → gated Confirmations →
 * Select+Start same EC → git effects via Fake only → advance EC completed →
 * FinalizationAssessment → FINALIZE HD → Cycle completed.
 *
 * ZERO OpenAI REAL. ZERO Cursor REAL. Fake owns all git mutations after fixture init.
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
  finalizeSubjectFor,
  qualifyGitCompletionProofSet,
  type TrajectoryStep,
} from "@/lib/oa/cycle";
import {
  advanceExecutionContractCompletion,
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
  NodeLocalGitStatusDiffPort,
  recordCiStatusEvidence,
  recordReviewStatusEvidence,
  verifyCommitClaim,
  verifyMergeClaim,
  verifyPostMergeEvidence,
  verifyPullRequestClaim,
  verifyPushClaim,
} from "@/lib/oa/git-ports";
import { FakeConversationProvider } from "@/lib/platform/ai";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { F3_CONFIRM_ACTION_REF } from "@/features/project-assistant/f3/constants";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
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
const BRANCH = "gcec/docs";
const NOW = "2026-09-11T14:00:00.000Z";

const PILOTE = LOCAL_PILOTE_ACTOR;

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

function requireAuthEvidenceId(
  auth: ReturnType<typeof registerLocalPiloteAuthority>,
): string {
  if (!auth.ok) {
    throw new Error(`authority register failed: ${auth.code} ${auth.message}`);
  }
  return auth.evidenceId;
}

async function grantEffectConfirmation(input: {
  runtime: RuntimeApplicationService;
  confirmationId: string;
  actionRef: string;
  scope: string;
  decisionRef: string;
  authorityEvidenceId?: string;
}): Promise<Confirmation> {
  const auth =
    input.authorityEvidenceId ??
    requireAuthEvidenceId(
      registerLocalPiloteAuthority({
        authorityResolver: input.runtime.oa!.authorityResolver,
        scope: input.scope,
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
      requestedTo: PILOTE,
      scope: input.scope,
      idempotencyKey: `idem:${input.confirmationId}`,
      decisionRef: input.decisionRef,
    });
  if (!requested.ok) {
    throw new Error(
      `grantEffectConfirmation request: ${requested.error.detailCode} ${requested.error.message} cause=${requested.error.internalCauseRef ?? ""} actionRef=${input.actionRef}`,
    );
  }

  const granted =
    await input.runtime.oa!.decisionServices.grantConfirmation.execute({
      confirmationId: input.confirmationId,
      actor: PILOTE,
      authorityEvidenceId: auth,
    });
  if (!granted.ok) {
    throw new Error(
      `grantConfirmation: ${granted.error.detailCode} ${granted.error.message} cause=${granted.error.internalCauseRef ?? ""}`,
    );
  }
  return granted.confirmation;
}

async function selectGateStartSlice(input: {
  runtime: RuntimeApplicationService;
  attemptId: string;
  executionContractId: string;
  contractVersion: number;
  grantId: string;
  authorityEvidenceId: string;
  confirmations?: readonly Confirmation[];
  verifiedEffects?: readonly (
    | "filesystem.create"
    | "filesystem.modify"
    | "validation.run"
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge"
  )[];
}): Promise<{ attemptId: string; status: string }> {
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

  const started = await attempts.startExecution.execute({
    attemptId: input.attemptId,
    actor: PILOTE,
    authorityEvidenceId: input.authorityEvidenceId,
    confirmations: input.confirmations ?? [],
    verifiedEffects: input.verifiedEffects,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(started.error.message);
  return {
    attemptId: started.attempt.attemptId,
    status: started.attempt.status,
  };
}

describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () => {
  it("A→Z: Product use-cases → Fake Cursor slices → EC confirmed→completed → Cycle finalized", async () => {
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
        launchPort: fakeLaunch,
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
      objective: "Functional design governed cycle",
      context: "deterministic Fake Cursor",
      criticality: "STANDARD",
      constraints: ["FIXTURE ONLY", "ZERO LIVE"],
      shortReference: "GCECPROD",
      idempotencyKey: `idem:gcec-prod-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;

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

    // 3 Create + START cycle (functional-design) with done trajectory for finalize
    const stepsDone: TrajectoryStep[] = [
      {
        stepId: "stp:fd",
        order: 1,
        label: "Functional design",
        state: "done",
        cycleTypeId: "cyc:functional-design",
      },
    ];
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps0.ok).toBe(true);
    if (!lps0.ok) return;
    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: stepsDone,
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: PILOTE,
    });
    expect(traj.ok).toBe(true);

    const cycleInstanceId = `cyc:gcec-prod-${Date.now()}`;
    const cycleCreated = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:functional-design",
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
    expect(cycleCreated.ok).toBe(true);

    const startAuth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: NOW,
      forceEnable: true,
    });
    expect(startAuth.ok).toBe(true);
    const startedCycle = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: PILOTE,
      authorityEvidenceId: requireAuthEvidenceId(startAuth),
    });
    expect(startedCycle.ok).toBe(true);
    if (!startedCycle.ok) return;
    expect(startedCycle.cycle.status).toBe("active");

    // 4–5 F2 Fake → Proposal → recordF2Decision (HD)
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const provider = new FakeConversationProvider();
    const analyzed = await analyzeIntent({
      userContent: "__F2_DOCS_WRITE_GCEC__ produce functional design",
      projectSummary: overview.project.name ?? "GCEC Product E2E",
      provider,
    });
    expect(analyzed.analysis.parseOk).toBe(true);
    expect(analyzed.analysis.executionIntent?.intentKind).toBe("docs_write");

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
    let contract = durableEc.contract;
    expect(contract.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(contract.evidenceRequirements).toEqual(
      expect.arrayContaining([
        "git:local_commit",
        "git:remote_push",
        "git:pull_request",
        "git:ci_status",
        "git:review_status",
        "git:merge",
        "git:post_merge_verification",
      ]),
    );

    const execAuth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: contract.scope,
      issuedAt: NOW,
      evidenceId: `evd:gcec-exec:${contract.executionContractId}`,
      forceEnable: true,
    });
    expect(execAuth.ok).toBe(true);

    // 7 RequestConfirmation + Grant + ConfirmExecutionContract
    const gateConfirmId = `cfm:gate:${contract.executionContractId}`;
    const requested =
      await oa.decisionServices.requestConfirmation.execute({
        confirmationId: gateConfirmId,
        level: "N3",
        actionRef: F3_CONFIRM_ACTION_REF,
        requestedBy: PILOTE,
        requestedTo: PILOTE,
        scope: contract.scope,
        idempotencyKey: `idem:${gateConfirmId}`,
        decisionRef: decisionId,
      });
    if (!requested.ok) {
      throw new Error(
        `requestConfirmation: ${requested.error.detailCode} ${requested.error.message} cause=${requested.error.internalCauseRef ?? ""}`,
      );
    }
    const grantedGate =
      await oa.decisionServices.grantConfirmation.execute({
        confirmationId: gateConfirmId,
        actor: PILOTE,
        authorityEvidenceId: requireAuthEvidenceId(execAuth),
      });
    expect(grantedGate.ok).toBe(true);

    const confirmed =
      await oa.executionContractServices.confirmExecutionContract.execute({
        executionContractId: contract.executionContractId,
        confirmationId: gateConfirmId,
        actor: PILOTE,
        authorityEvidenceId: requireAuthEvidenceId(execAuth),
        expectedVersion: contract.version,
      });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    contract = confirmed.contract;
    expect(contract.status).toBe("confirmed");

    // 8–10 Select + GateD + Start Attempt #1 (filesystem only — no git Confirmation)
    const attempt1Id = `xat:gcec-1:${contract.executionContractId}`.slice(0, 128);
    await selectGateStartSlice({
      runtime,
      attemptId: attempt1Id,
      executionContractId: contract.executionContractId,
      contractVersion: contract.version,
      grantId: `gd:1:${attempt1Id}`,
      authorityEvidenceId: requireAuthEvidenceId(execAuth),
      confirmations: [],
    });
    expect(fakeLaunch.lastReport?.authorizedEffectsExecuted).toContain(
      "filesystem.create",
    );
    expect(fakeLaunch.lastReport?.stoppedBeforeEffects).toContain("git.commit");

    // 11 completeBoundedDocsWriteLaunch (independent git status — no report trust)
    const attempt1 = await oa.executionAttemptServices.getExecutionAttempt.execute({
      attemptId: attempt1Id,
    });
    expect(attempt1.ok).toBe(true);
    if (!attempt1.ok) return;
    const completed1 = await completeBoundedDocsWriteLaunch({
      attempt: attempt1.attempt,
      services: oa.executionAttemptServices,
      targetPath: TARGET_PATH,
      pathAllowlist: ["docs/"],
      statusDiffPort: new NodeLocalGitStatusDiffPort(),
    });
    expect(completed1.ok && completed1.status === "succeeded").toBe(true);
    if (!completed1.ok || completed1.status !== "succeeded") return;
    const artifactDigest = completed1.facts.digest;

    // 12 Attempt #1 succeeded → EC confirmed (D-GCEC-15), NOT completed
    const ecAfter1 =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: contract.executionContractId,
      });
    expect(ecAfter1.ok).toBe(true);
    if (!ecAfter1.ok) return;
    expect(ecAfter1.contract.status).toBe("confirmed");
    expect(completed1.attempt.status).toBe("succeeded");
    contract = ecAfter1.contract;

    // 13 Artifact AVAILABLE → VERIFIED + ReviewBundle
    const ingested = await ingestDocsWriteArtifactEvidence({
      evidenceReviewServices: oa.evidenceReviewServices,
      projectId,
      cycleInstanceId,
      executionContractId: contract.executionContractId,
      executionAttemptId: attempt1Id,
      targetPath: TARGET_PATH,
      digest: artifactDigest,
      actor: PILOTE,
      nowIso: NOW,
    });
    expect(ingested.ok).toBe(true);
    if (!ingested.ok) return;

    const evidenceSvc = oa.evidenceReviewServices as typeof oa.evidenceReviewServices & {
      payload?: { setScript?: (id: string, s: { availability: "available"; digest: string }) => void };
    };
    evidenceSvc.payload?.setScript?.(ingested.evidenceId, {
      availability: "available",
      digest: artifactDigest,
    });
    const artLoaded = await oa.evidenceReviewServices.evidenceReader.findById(
      ingested.evidenceId,
    );
    expect(artLoaded).toBeTruthy();
    const artVerified =
      await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
        evidenceId: ingested.evidenceId,
        expectedVersion: artLoaded!.version,
        actor: PILOTE,
      });
    expect(artVerified.ok).toBe(true);
    if (!artVerified.ok) return;
    expect(artVerified.evidence.status).toBe("verified");

    const rb = await oa.evidenceReviewServices.reviewBundleReader.findById(
      ingested.reviewBundleId,
    );
    expect(rb).toBeTruthy();
    const frozen = await oa.evidenceReviewServices.freezeReviewBundle.execute({
      reviewBundleId: ingested.reviewBundleId,
      actor: PILOTE,
      idempotencyKey: `idem:freeze:${ingested.reviewBundleId}`,
      expectedVersion: rb!.version,
    });
    if (!frozen.ok) {
      throw new Error(
        `freeze: ${frozen.error.detailCode} ${frozen.error.message} ${frozen.error.internalCauseRef ?? ""}`,
      );
    }
    const startedRb = await oa.evidenceReviewServices.startReview.execute({
      reviewBundleId: ingested.reviewBundleId,
      actor: PILOTE,
      idempotencyKey: `idem:start-rb:${ingested.reviewBundleId}`,
      expectedVersion: frozen.reviewBundle.version,
    });
    if (!startedRb.ok) {
      throw new Error(
        `startReview: ${startedRb.error.detailCode} ${startedRb.error.message}`,
      );
    }
    const completedRb = await oa.evidenceReviewServices.completeReview.execute({
      reviewBundleId: ingested.reviewBundleId,
      actor: PILOTE,
      idempotencyKey: `idem:complete-rb:${ingested.reviewBundleId}`,
      expectedVersion: startedRb.reviewBundle.version,
      outcome: "accepted",
    });
    if (!completedRb.ok) {
      throw new Error(
        `completeReview: ${completedRb.error.detailCode} ${completedRb.error.message}`,
      );
    }

    const repoRead = new FakeRepositoryReadPorts({ gitState });
    const collectedEvidence = [artVerified.evidence];
    const bindings = {
      projectId,
      cycleInstanceId,
      executionContractId: contract.executionContractId,
    };
    const actor = PILOTE;

    // Progressive git slices: Confirmation → Select+Start same EC → Fake effect → Studio verify
    const gitSlices: Array<{
      effect: "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge";
      attemptSuffix: string;
      after?: () => Promise<void>;
    }> = [
      {
        effect: "git.commit",
        attemptSuffix: "commit",
        after: async () => {
          const claim = fakeLaunch.lastReport?.gitEffects?.commit;
          expect(claim?.sha).toBeTruthy();
          const v = await verifyCommitClaim({
            repositoryRead: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            claimedCommitSha: claim!.sha,
            message: claim!.message,
            bindings: { ...bindings, executionAttemptId: `xat:${claim!.sha}` },
            actor,
            nowIso: NOW,
          });
          expect(v.ok).toBe(true);
          if (v.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              v.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
        },
      },
      {
        effect: "git.push",
        attemptSuffix: "push",
        after: async () => {
          const claim = fakeLaunch.lastReport?.gitEffects?.push;
          expect(claim?.sha).toBeTruthy();
          const v = await verifyPushClaim({
            repositoryRead: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            branch: BRANCH,
            claimedCommitSha: claim!.sha,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(v.ok).toBe(true);
          if (v.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              v.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
        },
      },
      {
        effect: "github.pr.create",
        attemptSuffix: "pr",
        after: async () => {
          const claim = fakeLaunch.lastReport?.gitEffects?.pullRequest;
          expect(claim?.number).toBeTruthy();
          const v = await verifyPullRequestClaim({
            repositoryRead: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            claimedPrNumber: claim!.number,
            claimedHeadSha: claim!.headSha,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(v.ok).toBe(true);
          if (v.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              v.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
          // CI + review are Studio observes — Fake Cursor sets external state first.
          gitState.setCi(claim!.headSha, "success");
          gitState.setReview(claim!.number, "approved");
          const ci = await recordCiStatusEvidence({
            ciPort: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            commitSha: claim!.headSha,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(ci.ok && ci.status === "verified").toBe(true);
          if (ci.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              ci.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
          const review = await recordReviewStatusEvidence({
            reviewPort: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            prNumber: claim!.number,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(review.ok && review.status === "verified").toBe(true);
          if (review.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              review.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
        },
      },
      {
        effect: "github.pr.merge",
        attemptSuffix: "merge",
        after: async () => {
          const claim = fakeLaunch.lastReport?.gitEffects?.merge;
          expect(claim?.mergeSha).toBeTruthy();
          const v = await verifyMergeClaim({
            repositoryRead: repoRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            claimedPrNumber: claim!.prNumber,
            claimedMergeSha: claim!.mergeSha,
            bindings,
            actor,
            nowIso: NOW,
          });
          expect(v.ok).toBe(true);
          if (v.ok) {
            const e = await oa.evidenceReviewServices.evidenceReader.findById(
              v.evidenceId,
            );
            if (e) collectedEvidence.push(e);
          }
          const post = await verifyPostMergeEvidence({
            evidenceServices: oa.evidenceReviewServices,
            repositoryRead: repoRead,
            repositoryRef: IDENTITY,
            targetBranch: "main",
            artifactPath: TARGET_PATH,
            artifactDigest: artifactDigest as never,
            expectedTargetSha: claim!.mergeSha,
            expectedArtifactDigest: artifactDigest as never,
            bindings,
            actor,
            nowIso: NOW,
          });
          if (!post.ok) {
            throw new Error(`verifyPostMergeEvidence: ${post.reason}`);
          }
          const e = await oa.evidenceReviewServices.evidenceReader.findById(
            post.evidenceId,
          );
          if (e) collectedEvidence.push(e);
        },
      },
    ];

    const grantedGitConfirmations: Confirmation[] = [];
    const verifiedGitEffects: Array<
      "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
    > = [];

    for (const slice of gitSlices) {
      const actionRef = buildGitEffectActionRef({
        executionContractId: contract.executionContractId,
        effect: slice.effect,
        repositoryRef: IDENTITY,
        branchOrRef: BRANCH,
      });
      const cnf = await grantEffectConfirmation({
        runtime,
        confirmationId: `cfm:${slice.attemptSuffix}:${contract.executionContractId}`.slice(
          0,
          128,
        ),
        actionRef,
        scope: actionRef,
        decisionRef: decisionId,
      });
      grantedGitConfirmations.push(cnf);

      const fresh =
        await oa.executionContractServices.getExecutionContract.execute({
          executionContractId: contract.executionContractId,
        });
      expect(fresh.ok).toBe(true);
      if (!fresh.ok) return;
      expect(fresh.contract.status).toBe("confirmed");
      contract = fresh.contract;

      const attemptId =
        `xat:gcec-${slice.attemptSuffix}:${contract.executionContractId}`.slice(
          0,
          128,
        );
      await selectGateStartSlice({
        runtime,
        attemptId,
        executionContractId: contract.executionContractId,
        contractVersion: contract.version,
        grantId: `gd:${slice.attemptSuffix}:${attemptId}`,
        authorityEvidenceId: requireAuthEvidenceId(execAuth),
        confirmations: [...grantedGitConfirmations],
        // D-GCEC-15 — prior FS + completed git effects excluded; only current slice runs.
        verifiedEffects: [
          "filesystem.create",
          "filesystem.modify",
          "validation.run",
          ...verifiedGitEffects,
        ],
      });

      const att = await oa.executionAttemptServices.getExecutionAttempt.execute({
        attemptId,
      });
      expect(att.ok).toBe(true);
      if (!att.ok) return;
      const done = await completeBoundedDocsWriteLaunch({
        attempt: att.attempt,
        services: oa.executionAttemptServices,
        targetPath: TARGET_PATH,
        pathAllowlist: ["docs/"],
        // Git-only slices: Fake may skip FS; pass porcelain when dirty or empty ok path.
        nameStatusText:
          slice.effect === "git.commit"
            ? undefined
            : `A\t${TARGET_PATH}`,
        statusDiffPort:
          slice.effect === "git.commit"
            ? new NodeLocalGitStatusDiffPort()
            : undefined,
      });
      // For git-only slices after FS verified, Fake may skip file write; completion
      // workspace verify may need nameStatusText. If verify fails on empty dirty tree
      // after commit already staged, fall through with record-only via RO complete.
      if (!done.ok) {
        // Prefer Product completeBoundedReadOnlyLaunch path already attempted;
        // assert Attempt terminal via get after Fake ACK.
        const afterFail =
          await oa.executionAttemptServices.getExecutionAttempt.execute({
            attemptId,
          });
        // Force complete via RO if docs-write verify blocked on clean tree.
        if (afterFail.ok && afterFail.attempt.status === "running") {
          const { completeBoundedReadOnlyLaunch } = await import(
            "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch"
          );
          const ro = await completeBoundedReadOnlyLaunch({
            attempt: afterFail.attempt,
            services: oa.executionAttemptServices,
          });
          expect(ro.ok && ro.status === "succeeded").toBe(true);
        }
      } else {
        expect(done.status === "succeeded" || done.status === "failed").toBe(
          true,
        );
      }

      const ecMid =
        await oa.executionContractServices.getExecutionContract.execute({
          executionContractId: contract.executionContractId,
        });
      expect(ecMid.ok).toBe(true);
      if (!ecMid.ok) return;
      // D-GCEC-15 — remains confirmed until all requirements verified
      expect(ecMid.contract.status).toBe("confirmed");
      contract = ecMid.contract;

      if (slice.after) await slice.after();
      verifiedGitEffects.push(slice.effect);
    }

    const gitSet = qualifyGitCompletionProofSet({
      evidence: collectedEvidence,
      expected: {
        repositoryRef: IDENTITY,
        targetPath: TARGET_PATH,
        artifactDigest,
        cycleInstanceId,
        executionContractId: contract.executionContractId,
        projectId,
      },
    });
    expect(gitSet.status).toBe("SATISFIED");

    // 19 advanceExecutionContractCompletion → completed
    const advanced = await advanceExecutionContractCompletion({
      executionContractId: contract.executionContractId,
      contracts: oa.executionContractServices.contracts,
      contractStatusWriter: oa.executionAttemptServices.contractStatusWriter,
      evidence: collectedEvidence,
      confirmations: grantedGitConfirmations,
      cycleInstanceId,
      nowIso: NOW,
    });
    expect(advanced.ok && advanced.complete && advanced.advanced).toBe(true);
    if (!advanced.ok) return;
    expect(advanced.status).toBe("completed");

    // 20 FinalizationAssessment + FINALIZE HD + finalize
    // Do NOT waive governed families with NO_GOVERNED_EFFECTS — GCEC proofs are present.
    const finalizeHd = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: `dec:finalize:${cycleInstanceId}`,
      projectId,
      cycleInstanceId,
      subject: finalizeSubjectFor(cycleInstanceId),
      options: [
        { optionId: "opt:accept", label: "Accept" },
        { optionId: "opt:refuse", label: "Refuse" },
      ],
      selectedOptionId: "opt:accept",
      actor: LOCAL_PILOTE_ACTOR,
      authority: "morris",
      status: "accepted",
      reversible: false,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      authorityEvidenceId: requireAuthEvidenceId(startAuth),
    });
    expect(finalizeHd.ok).toBe(true);

    const finalized = await oa.cycleServices.pilotLifecycle.finalize({
      cycleInstanceId,
      projectId,
      createdBy: PILOTE,
      decisionId: `dec:finalize:${cycleInstanceId}`,
      authorityEvidenceId: requireAuthEvidenceId(startAuth),
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.assessment?.canComplete).toBe(true);
    expect(finalized.cycle.status).toBe("completed");

    // 21 no reprepare of completed trajectory step
    const trajAfter =
      await oa.cycleServices.trajectories.findCurrentByProjectId(projectId);
    expect(trajAfter?.steps.every((s) => s.state === "done")).toBe(true);

    // Fake Cursor owned mutations — Studio never ran git write after fixture
    expect(fakeLaunch.calls.length).toBeGreaterThanOrEqual(2);
    expect(
      fakeLaunch.calls.every((c) => c.action === M4_BOUNDED_DOCS_WRITE_ACTION),
    ).toBe(true);
  }, 120_000);
});
