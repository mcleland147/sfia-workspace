/**
 * PRODUCT-CYCLE-E2E-STABILIZATION-01 — deterministic PRODUCT E2E oracle.
 *
 * Nominal lineage traverses Product server actions used by useProductConversation:
 *   projectAssistantSendAction
 *   → projectAssistantDecideAction
 *   → projectAssistantPrepareResolvedM3Action
 *   → projectAssistantConfirmAndExecuteResolvedM3Action
 *   → projectAssistantRehydrateEvidenceOutcomeAction
 *
 * Pending restart uses product subject-read (w2ReadActiveDecisionSubjectAction)
 * then optional conversation reinstruction before Decide — no artificial store reinject.
 *
 * ZERO REAL / ZERO LIVE / ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  projectAssistantConfirmAndExecuteResolvedM3Action,
  projectAssistantDecideAction,
  projectAssistantPrepareResolvedM3Action,
  projectAssistantRehydrateEvidenceOutcomeAction,
  projectAssistantSendAction,
} from "@/features/project-assistant/actions";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import {
  getProposal,
  resetF2ProposalStoreForTests,
} from "@/features/project-assistant/f2/proposalStore";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import { sealProposalExecutionBasis } from "@/features/project-assistant/w2/proposalSubjectIntegrity";
import { w2ReadActiveDecisionSubjectAction } from "@/features/project-assistant/w2/actions";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  MemoryLaunchSafetyJournal,
  isStudioCursorRealEnabled,
} from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project";
import {
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  W2_FIXED_NOW,
  W2_REGISTRY_ROOT,
  W2_SCHEMAS_ROOT,
} from "./w2Harness";

/** Synthetic WHAT — analogous to PocketTasks; not PocketTasks-named. */
const STABILIZED_WHAT = [
  "statuts A / B / C",
  "attribut optionnel P avec valeurs basse / moyenne / haute",
  "attribut optionnel D",
  "filtres par statut et P",
  "règle dérivée dépendant de D et du statut",
  "persistance locale requise",
  "règle Z explicitement hors périmètre",
].join("; ");

const PATHLESS_NATURAL_REQUEST = `Matérialise cette spécification fonctionnelle comme livrable de référence du cycle, sans élargir le périmètre ni ajouter de choix techniques.
La spécification consolidée inclut : ${STABILIZED_WHAT}.
N'exécute rien : prépare la proposition pour ma décision.`;

const PATHLESS_WITH_HA = `${PATHLESS_NATURAL_REQUEST}
__MW5_HIGH_ASSURANCE__`;

const VAGUE_TALK = `Parlons du livrable attendu du cycle — qu'est-ce qui doit y figurer ?`;

const EXPECTED_PROJECT_ROOT = "projects/mini-cadrage-suivi-de-taches";
const EXPECTED_CYCLE_ROOT = `${EXPECTED_PROJECT_ROOT}/02-conception-fonctionnelle`;
const EXPECTED_ARTIFACT_FILE = "specification-fonctionnelle.md";
const EXPECTED_TARGET = `${EXPECTED_CYCLE_ROOT}/${EXPECTED_ARTIFACT_FILE}`;
const IDENTITY = "acme/widget";
const BRANCH = "main";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function assertRealOff(): void {
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.OPS1_CURSOR_REAL = "0";
  expect(isStudioCursorRealEnabled()).toBe(false);
}

function initManagedGitRepo(managedBase: string, identity: string) {
  fs.mkdirSync(managedBase, { recursive: true });
  const repoRoot = path.join(managedBase, identity.replace("/", "__"));
  fs.mkdirSync(repoRoot, { recursive: true });
  fs.writeFileSync(path.join(repoRoot, ".keep"), "");
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

class SeededIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:${this.prefix}-${this.correlation}`;
  }
}

function assertWhatContinuity(blob: string): void {
  expect(blob).toMatch(/statuts A \/ B \/ C/i);
  expect(blob).toMatch(/attribut optionnel P/i);
  expect(blob).toMatch(/attribut optionnel D/i);
  expect(blob).toMatch(/persistance locale/i);
  expect(blob).toMatch(/règle Z explicitement hors périmètre/i);
  expect(blob).not.toMatch(/priorit[ée]s?\s+(retir|hors périmètre)/i);
  expect(blob).not.toMatch(/échéances?\s+(retir|hors périmètre)/i);
}

describe("PRODUCT-CYCLE-E2E-STABILIZATION-01 front-door oracle", () => {
  let managedBase: string;
  let repoRoot: string;
  let fakeLaunch: FakeDocsWriteLaunchPort;
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;
  let previousIdentity: string | undefined;
  let previousRemote: string | undefined;
  let previousBranch: string | undefined;
  let previousManaged: string | undefined;
  const tempRoots: string[] = [];

  beforeEach(() => {
    assertRealOff();
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousIdentity = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    previousRemote = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
    previousBranch = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH;
    previousManaged = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = IDENTITY;
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/widget.git";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = BRANCH;

    const root = fs.mkdtempSync(path.join(os.tmpdir(), "pces-e2e-"));
    tempRoots.push(root);
    managedBase = path.join(root, "managed");
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
    const initialized = initManagedGitRepo(managedBase, IDENTITY);
    repoRoot = initialized.repoRoot;

    const gitState = new FakeCursorGitExternalState({
      worktreeRoot: repoRoot,
      initialBranch: BRANCH,
      initialSha: initialized.baseHeadSha,
    });
    fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: repoRoot,
      pathAllowlist: [EXPECTED_CYCLE_ROOT],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
      gitState,
      content: `# Spécification fonctionnelle\n\n${STABILIZED_WHAT}\n`,
    });
    const safetyJournal = new MemoryLaunchSafetyJournal();

    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    runtime = getRuntimeApplicationService({
      registryRoot: W2_REGISTRY_ROOT,
      schemasRoot: W2_SCHEMAS_ROOT,
      nowIso: W2_FIXED_NOW,
      idSource: new SeededIdSource("pces"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
      realBoundary: {
        launchPort: fakeLaunch,
        safetyJournal,
        managedRepoRootBase: managedBase,
      },
    });
  });

  afterEach(() => {
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
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar(
      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
      previousMorrisAuthority,
    );
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY", previousIdentity);
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL", previousRemote);
    restoreEnvVar(
      "SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH",
      previousBranch,
    );
    restoreEnvVar(SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV, previousManaged);
    assertRealOff();
  });

  async function seedFunctionalDesignWithRequireArtifact(suffix: string): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "Mini cadrage — Suivi de tâches",
      objective: "Cadrer le suivi de tâches",
      context: `PRODUCT-CYCLE-E2E-STABILIZATION-01 ${suffix}`,
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `PCES${suffix.toUpperCase()}`,
      idempotencyKey: `idem:pces-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject failed");
    const projectId = created.project.projectId;

    expect(created.project.projectWorkspaceKey).toBe(
      "mini-cadrage-suivi-de-taches",
    );
    expect(created.project.repositoryBinding?.pathRoot).toBe(
      EXPECTED_PROJECT_ROOT,
    );
    expect(created.project.repositoryBinding?.identity).toBe(IDENTITY);

    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps0.ok).toBe(true);
    if (!lps0.ok) throw new Error("LPS unavailable");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
        { stepId: "stp:deliver", order: 2, label: "Deliver", state: "done" },
      ],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    expect(traj.ok).toBe(true);

    const cycleInstanceId = `cyc:pces-${suffix}-${projectId.slice(-6)}`;
    const candidate = await oa.cycleServices.createCycle.execute({
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
    expect(candidate.ok).toBe(true);

    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-09-27T12:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("authority failed");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps1.ok).toBe(true);
    if (!lps1.ok) throw new Error("LPS1 unavailable");

    const started = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth.evidenceId,
      expectedLpsVersion: lps1.livingProjectState.version,
    });
    expect(started.ok).toBe(true);

    const obligation = await recordObligationPolicyRequireArtifact({
      projectId,
      cycleInstanceId,
      cycleServices: oa.cycleServices,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => "2026-09-27T12:01:00.000Z",
    });
    expect(obligation.ok).toBe(true);

    return { projectId, cycleInstanceId };
  }

  it("DETERMINISTIC PRODUCT E2E — Send→Decide→Prepare→ConfirmExecute→Rehydrate", async () => {
    // FS-05 Fake magic-only / PocketTasks-named request forbidden in oracle input.
    expect(PATHLESS_NATURAL_REQUEST).not.toMatch(/__F2_/);
    expect(PATHLESS_NATURAL_REQUEST).not.toMatch(/docs\//);
    expect(PATHLESS_NATURAL_REQUEST).not.toMatch(/PocketTasks/i);
    expect(PATHLESS_NATURAL_REQUEST).not.toMatch(/note-de-cadrage/);

    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("main");
    const oa = runtime.oa!;
    expect(fs.existsSync(path.join(repoRoot, EXPECTED_TARGET))).toBe(false);

    const cyclesBefore = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesBefore.filter((c) => c.status === "active")).toHaveLength(1);
    const hdCountSeed = (
      await oa.decisionServices.decisions.listByProject(projectId)
    ).length;

    // A — Conversation / materialization (product front door)
    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed: ${JSON.stringify(send)}`);

    // FS-01 — same CycleInstance; no silent NEW_CYCLE.
    const cyclesAfterSend = await oa.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesAfterSend.map((c) => c.cycleInstanceId)).toEqual(
      cyclesBefore.map((c) => c.cycleInstanceId),
    );
    expect(
      cyclesAfterSend
        .filter((c) => c.status === "active")
        .map((c) => c.cycleInstanceId),
    ).toEqual([cycleInstanceId]);

    expect(send.f2?.turnKind).toBe("f2_proposal");
    expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(send.f2?.qualification?.cycleInstanceId).toBe(cycleInstanceId);
    expect(send.f2?.proposal?.contextSnapshot?.activeCycleInstanceId).toBe(
      cycleInstanceId,
    );
    expect(send.f2?.proposal?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
    expect(send.f2?.decision).toBeNull();

    const proposal = send.f2!.proposal!;
    // FS-09 — targetPath server-composed (not client-authoritative).
    expect(proposal.executionIntent?.targetPath).toBe(EXPECTED_TARGET);
    expect(proposal.executionIntent?.artifactFileName).toBe(
      EXPECTED_ARTIFACT_FILE,
    );
    expect(proposal.executionIntent?.artifactWriteMode).toBe("CREATE");
    expect(proposal.executionIntent?.targetRepositoryRef).toBe(IDENTITY);

    const sealed = sealProposalExecutionBasis(proposal);
    expect(sealed.targetPath).toBe(EXPECTED_TARGET);
    expect(sealed.projectWorkspaceRoot).toBe(EXPECTED_PROJECT_ROOT);
    expect(sealed.cycleWorkspaceRoot).toBe(EXPECTED_CYCLE_ROOT);
    expect(sealed.artifactWriteMode).toBe("CREATE");

    // FS-03 filename micro-gate / FS-04 MW5 gratuitous challenge forbidden.
    expect(send.text).not.toMatch(/Indiquez un filename Markdown/i);
    expect(send.text).not.toMatch(/\[MW5 CHALLENGE\]/);

    const what =
      [
        proposal.executionIntent?.artifactBrief,
        ...(proposal.executionIntent?.contentRequirements ?? []),
      ]
        .filter(Boolean)
        .join("\n") || "";
    assertWhatContinuity(what);

    const proposalId = proposal.proposalId;

    // B — Pending / restart (process-local wipe; no invented HD)
    expect(getProposal(proposalId)).not.toBeNull();
    resetF2ProposalStoreForTests();
    expect(getProposal(proposalId)).toBeNull();
    const hdAfterWipe = (
      await oa.decisionServices.decisions.listByProject(projectId)
    ).length;
    expect(hdAfterWipe).toBe(hdCountSeed);

    // Product subject-read — hydrates recoverable snapshots; does not invent HD.
    const subject = await w2ReadActiveDecisionSubjectAction({ projectId });
    expect(subject.ok).toBe(true);
    if (!subject.ok) throw new Error("subject read failed");
    expect(subject.kind).toBe("pending_reinstruction_required");
    if (subject.kind !== "pending_reinstruction_required") {
      throw new Error(`unexpected subject kind: ${subject.kind}`);
    }
    expect(subject.recoverableProposalIds).toContain(proposalId);
    expect(getProposal(proposalId)?.status).toBe("DECISION_REQUIRED");

    // Conversation product path — explicit reinstruction of pending subject.
    const reinstruct = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_NATURAL_REQUEST,
      reinstructionOfProposalId: proposalId,
    });
    expect(reinstruct.ok).toBe(true);
    if (!reinstruct.ok) {
      throw new Error(`reinstruction failed: ${JSON.stringify(reinstruct)}`);
    }
    expect(reinstruct.f2?.turnKind).toBe("f2_proposal");
    expect(reinstruct.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(reinstruct.f2?.qualification?.cycleInstanceId).toBe(cycleInstanceId);
    expect(reinstruct.f2?.proposal?.executionIntent?.targetPath).toBe(
      EXPECTED_TARGET,
    );
    expect(reinstruct.text).not.toMatch(/\[MW5 CHALLENGE\]/);
    expect(reinstruct.text).not.toMatch(/Indiquez un filename Markdown/i);

    const decideProposalId = reinstruct.f2!.proposal!.proposalId;
    expect(decideProposalId).toBeTruthy();
    // FS-06 — reinstruction supersedes prior pending; decide on current subject.
    expect(reinstruct.reinstructionTransition).toBe("superseded");
    expect(decideProposalId).not.toBe(proposalId);

    // C — HumanDecision via product Decide action (FS-11 restart invents decision forbidden)
    const decided = await projectAssistantDecideAction({
      projectId,
      proposalId: decideProposalId,
      decisionKind: "GO",
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error(`decide: ${decided.message}`);
    expect(decided.f2.turnKind).toBe("f2_decision");
    expect(decided.f2.decision?.kind).toBe("GO");
    expect(decided.f2.decision?.readyForNextGatedStep).toBe(true);
    const decisionId = decided.f2.decision!.decisionId;

    const hd = await oa.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) throw new Error("hd");
    expect(hd.decision.decisionBasis?.executionBasis?.targetPath).toBe(
      EXPECTED_TARGET,
    );
    expect(hd.decision.decisionBasis?.executionBasis?.artifactFileName).toBe(
      EXPECTED_ARTIFACT_FILE,
    );
    expect(hd.decision.decisionBasis?.executionBasis?.artifactWriteMode).toBe(
      "CREATE",
    );
    const basisWhat = [
      hd.decision.decisionBasis?.executionBasis?.artifactBrief,
      ...(hd.decision.decisionBasis?.executionBasis?.contentRequirements ?? []),
    ]
      .filter(Boolean)
      .join("\n");
    assertWhatContinuity(basisWhat);

    // D — ExecutionContract via product PrepareResolvedM3 (FS-07 EC before HD forbidden already passed)
    const prepared = await projectAssistantPrepareResolvedM3Action({
      projectId,
      decisionId,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(`prepare: ${prepared.message}`);
    expect(prepared.f3.mode).toBe("M3_RESOLVED_BOUNDED_DOCS_WRITE");
    expect(prepared.f3.executionPerformed).toBe(false);
    expect(prepared.f3.attemptCreated).toBe(false);
    expect(prepared.f3.confirmationRequired).toBe(true);
    const executionContractId = prepared.f3.successor.executionContractId;
    const expectedContractVersion = prepared.f3.successor.version;
    expect(executionContractId).toMatch(/^xct:/);
    expect(expectedContractVersion).toBeGreaterThanOrEqual(1);

    const durable =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId,
      });
    expect(durable.ok).toBe(true);
    if (!durable.ok) throw new Error("durable EC");
    expect(durable.contract.inputs?.targetPath).toBe(EXPECTED_TARGET);
    expect(durable.contract.inputs?.pathAllowlist).toEqual([
      EXPECTED_CYCLE_ROOT,
    ]);
    expect(durable.contract.inputs?.artifactWriteMode).toBe("CREATE");

    const attemptsAfterPrepare =
      await oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(attemptsAfterPrepare.ok).toBe(true);
    if (attemptsAfterPrepare.ok) {
      expect(attemptsAfterPrepare.attempts).toHaveLength(0);
    }

    // E — Attempt / Evidence via product ConfirmAndExecuteResolvedM3
    const launchBefore = fakeLaunch.calls.length;
    const executed = await projectAssistantConfirmAndExecuteResolvedM3Action({
      projectId,
      decisionId,
      executionContractId,
      expectedContractVersion,
    });
    if (!executed.ok) {
      throw new Error(`execute: ${JSON.stringify(executed)}`);
    }
    expect(executed.ok).toBe(true);
    // Bounded docs-write Fake: launch port may ACK (realProcessInvoked) without Cursor OS REAL.
    expect(executed.f3.realExecution).toBe(false);
    expect(executed.f3.attempt.realProcessInvoked).toBe(true);
    expect(executed.f3.attempt.status).toBe("succeeded");
    expect(executed.f3.evidence.evidenceId).toBeTruthy();
    expect(executed.f3.reviewBundle.reviewBundleId).toBeTruthy();
    expect(executed.f3.recommendation.kind).toBe("recommendation");
    expect(executed.f3.recommendation.decisionCreated).toBe(false);
    expect(executed.f3.recommendation.executionAuthority).toBe(false);
    // FS-10 — SUCCESS ≠ Product READY
    expect(executed.f3.recommendation.status).not.toBe("READY");
    expect(executed.text).not.toMatch(/PRODUCT GLOBAL READY|READY FOR REAL|END-TO-END REAL/);

    const absTarget = path.join(repoRoot, EXPECTED_TARGET);
    expect(fs.existsSync(absTarget)).toBe(true);
    expect(fs.readFileSync(absTarget, "utf8")).toMatch(
      /Spécification fonctionnelle/i,
    );
    expect(fakeLaunch.calls.length).toBe(launchBefore + 1);

    const listed =
      await oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) throw new Error("list attempts");
    const terminal = listed.attempts.filter((a) =>
      /succeeded|completed|ok/i.test(a.status),
    );
    expect(terminal.length).toBeGreaterThanOrEqual(1);
    const attemptId = terminal[0]!.attemptId;
    expect(executed.f3.attempt.attemptId).toBe(attemptId);

    const evidence = await oa.evidenceReviewServices.repository.listByProject(
      projectId,
    );
    const artifact = evidence.find(
      (e) =>
        e.type === "artifact" &&
        e.location === EXPECTED_TARGET &&
        e.bindings?.projectId === projectId,
    );
    expect(artifact).toBeTruthy();
    expect(artifact!.digest).toMatch(/^sha256:/);
    expect(artifact!.bindings?.executionAttemptId).toBe(attemptId);
    expect(artifact!.bindings?.executionContractId).toBe(executionContractId);

    const bundles =
      await oa.evidenceReviewServices.reviewBundleRepository.listByProject(
        projectId,
      );
    const linked = bundles.filter((b) =>
      (b.evidenceRefs ?? []).includes(artifact!.evidenceId),
    );
    expect(linked.length).toBeGreaterThanOrEqual(1);
    expect(linked[0]!.executionContractId).toBe(executionContractId);

    // F — Recovery via product RehydrateEvidenceOutcome (FS-12 auto-finalize forbidden)
    const hdBeforeRehydrate = (
      await oa.decisionServices.decisions.listByProject(projectId)
    ).length;
    const rehydrated = await projectAssistantRehydrateEvidenceOutcomeAction({
      projectId,
    });
    if (!rehydrated.ok) {
      throw new Error(`rehydrate: ${JSON.stringify(rehydrated)}`);
    }
    expect(rehydrated.ok).toBe(true);
    expect(rehydrated.evidenceIds.length).toBeGreaterThanOrEqual(1);
    expect(rehydrated.evidenceIds).toContain(artifact!.evidenceId);
    expect(rehydrated.reviewBundleIds.length).toBeGreaterThanOrEqual(1);
    expect(rehydrated.recommendation.kind).toBe("recommendation");
    expect(rehydrated.recommendation.decisionCreated).toBe(false);
    expect(rehydrated.recommendation.executionAuthority).toBe(false);
    expect(rehydrated.text).toMatch(/RECOMMANDATION — PAS UNE DÉCISION HUMAINE/);

    const hdAfterRehydrate = (
      await oa.decisionServices.decisions.listByProject(projectId)
    ).length;
    expect(hdAfterRehydrate).toBe(hdBeforeRehydrate);

    const cyclesFinal = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesFinal.filter((c) => c.status === "active")).toHaveLength(1);
    expect(
      cyclesFinal
        .filter((c) => c.status === "active")
        .map((c) => c.cycleInstanceId),
    ).toEqual([cycleInstanceId]);
  });

  it("NEG FS-01/FS-02 — vague talk does not open materialization / no new cycle", async () => {
    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("vague");
    const oa = runtime.oa!;
    const cyclesBefore = await oa.cycleServices.cycles.listByProject(projectId);

    const send = await projectAssistantSendAction({
      projectId,
      content: VAGUE_TALK,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    expect(await oa.cycleServices.cycles.listByProject(projectId)).toHaveLength(
      cyclesBefore.length,
    );
    expect(send.f2?.proposal ?? null).toBeNull();
    expect(send.f2?.turnKind === "f2_proposal").toBe(false);
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (lps.ok) {
      expect(lps.livingProjectState.activeCycleInstanceId).toBe(
        cycleInstanceId,
      );
    }
  });

  it("NEG FS-04 — HA + structurally resolved continuation still Proposal (no gratuitous MW5)", async () => {
    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("ha");

    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_WITH_HA,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    expect(send.f2?.turnKind).toBe("f2_proposal");
    expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(send.f2?.qualification?.cycleInstanceId).toBe(cycleInstanceId);
    expect(send.f2?.proposal?.executionIntent?.targetPath).toBe(
      EXPECTED_TARGET,
    );
    expect(send.text).not.toMatch(/\[MW5 CHALLENGE\]/);
    expect(send.text).not.toMatch(/Indiquez un filename Markdown/i);
  });

  it("NEG FS-13 — oracle principal refuses front-door bypass claim without Send", async () => {
    // Structural guard: this suite's nominal lineage must import Product actions.
    const src = fs.readFileSync(__filename, "utf8");
    expect(src).toMatch(/projectAssistantSendAction/);
    expect(src).toMatch(/projectAssistantDecideAction/);
    expect(src).toMatch(/projectAssistantPrepareResolvedM3Action/);
    expect(src).toMatch(/projectAssistantConfirmAndExecuteResolvedM3Action/);
    expect(src).toMatch(/projectAssistantRehydrateEvidenceOutcomeAction/);
    // Nominal lineage must not call internal seams directly.
    expect(src).not.toMatch(/recordF2Decision\(/);
    expect(src).not.toMatch(/prepareAndResolveM3ProductPath\(/);
    expect(src).not.toMatch(/confirmAndExecuteResolvedM3\(/);
    expect(src).not.toMatch(/rehydrateEvidenceOutcomeFromLps\(/);
  });
});
