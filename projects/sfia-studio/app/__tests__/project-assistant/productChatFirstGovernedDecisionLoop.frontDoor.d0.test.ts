/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — deterministic PRODUCT front-door oracle.
 *
 * Nominal governed disposition happens IN THE CONVERSATION:
 *   projectAssistantSendAction (proposal)
 *   → projectAssistantSendAction (chat-first accept/refuse/amend)
 *   → projectAssistantPrepareResolvedM3Action
 *
 * No « Instruire les options » CTA, no per-option « Décider » button and no
 * client-supplied reinstructionOfProposalId are used anywhere in this suite.
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
  projectAssistantPrepareResolvedM3Action,
  projectAssistantSendAction,
} from "@/features/project-assistant/actions";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import { w2ReadActiveDecisionSubjectAction } from "@/features/project-assistant/w2/actions";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  deriveUndisposedRecommendations,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  produceLifecycleRecommendation,
  resolveCanonicalLifecycleRecommendationBasis,
} from "@/lib/oa/cycle";
import { assessChatFirstWorkEligibility } from "@/features/project-assistant/w2/assessChatFirstWorkEligibility";
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
import { W2_FIXED_NOW, W2_REGISTRY_ROOT, W2_SCHEMAS_ROOT } from "./w2Harness";

const STABILIZED_WHAT = [
  "statuts A / B / C",
  "attribut optionnel P avec valeurs basse / moyenne / haute",
  "filtres par statut et P",
  "persistance locale requise",
].join("; ");

const MATERIALIZATION_REQUEST = `Matérialise cette spécification fonctionnelle comme livrable de référence du cycle, sans élargir le périmètre.
La spécification consolidée inclut : ${STABILIZED_WHAT}.
N'exécute rien : prépare la proposition pour ma décision.`;

/** Unrelated informative topic — must never dispose of a governed subject. */
const UNRELATED_TOPIC =
  "Par curiosité, quelles réserves méthodologiques vois-tu sur la lisibilité du projet en général ? __F2_INFORMATIVE__";

/** Bare acknowledgement with no governed target — disposition must be none. */
const UNRELATED_YES = "oui __F2_DECIDE_NONE__";

const CHAT_ACCEPT = "Oui, poursuis cette proposition. __F2_DECIDE_ACCEPT__";
const CHAT_REFUSE = "Non, ne poursuis pas ce sujet. __F2_DECIDE_REFUSE__";
const CHAT_AMEND = "Amende le sujet avant d'engager. __F2_DECIDE_AMEND__";
const CHAT_DEFER = "On verra plus tard pour ce sujet. __F2_DECIDE_DEFER__";
const CHAT_AMBIGUOUS = "Oui, vas-y. __F2_DECIDE_AMBIGUOUS__";

const EXPECTED_PROJECT_ROOT = "projects/mini-cadrage-suivi-de-taches";
const EXPECTED_CYCLE_ROOT = `${EXPECTED_PROJECT_ROOT}/02-conception-fonctionnelle`;
const EXPECTED_ARTIFACT_FILE = "specification-fonctionnelle.md";
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

describe("CHAT-FIRST-GOVERNED-DECISION-LOOP-01 front-door oracle", () => {
  let managedBase: string;
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

    const root = fs.mkdtempSync(path.join(os.tmpdir(), "cfgdl-"));
    tempRoots.push(root);
    managedBase = path.join(root, "managed");
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
    const initialized = initManagedGitRepo(managedBase, IDENTITY);

    const gitState = new FakeCursorGitExternalState({
      worktreeRoot: initialized.repoRoot,
      initialBranch: BRANCH,
      initialSha: initialized.baseHeadSha,
    });
    const fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: initialized.repoRoot,
      pathAllowlist: [EXPECTED_CYCLE_ROOT],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
      gitState,
      content: `# Spécification fonctionnelle\n\n${STABILIZED_WHAT}\n`,
    });

    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    runtime = getRuntimeApplicationService({
      registryRoot: W2_REGISTRY_ROOT,
      schemasRoot: W2_SCHEMAS_ROOT,
      nowIso: W2_FIXED_NOW,
      idSource: new SeededIdSource("cfgdl"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
      realBoundary: {
        launchPort: fakeLaunch,
        safetyJournal: new MemoryLaunchSafetyJournal(),
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

  async function seedFunctionalDesignWithRequireArtifact(
    suffix: string,
  ): Promise<{ projectId: string; cycleInstanceId: string }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "Mini cadrage — Suivi de tâches",
      objective: "Cadrer le suivi de tâches",
      context: `CHAT-FIRST-GOVERNED-DECISION-LOOP-01 ${suffix}`,
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `CFGDL${suffix.toUpperCase()}`,
      idempotencyKey: `idem:cfgdl-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject failed");
    const projectId = created.project.projectId;

    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("LPS unavailable");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        {
          stepId: "stp:fd",
          order: 1,
          label: "Conception fonctionnelle",
          state: "active",
          cycleTypeId: "cyc:functional-design",
        },
        {
          stepId: "stp:deliver",
          order: 2,
          label: "Livraison",
          state: "pending",
          cycleTypeId: "cyc:delivery",
        },
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

    const cycleInstanceId = `cyc:cfgdl-${suffix}-${projectId.slice(-6)}`;
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
    if (!auth.ok) throw new Error("authority failed");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
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

  async function sendPendingProposal(projectId: string): Promise<string> {
    const send = await projectAssistantSendAction({
      projectId,
      content: MATERIALIZATION_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed: ${JSON.stringify(send)}`);
    expect(send.f2?.turnKind).toBe("f2_proposal");
    expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    return send.f2!.proposal!.proposalId;
  }

  async function hdCount(projectId: string): Promise<number> {
    return (
      await runtime.oa!.decisionServices.decisions.listByProject(projectId)
    ).length;
  }

  async function materializeCurrentNextCycleLr(
    projectId: string,
    cycleInstanceId: string,
  ): Promise<void> {
    const oa = runtime.oa!;
    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps.ok) throw new Error("lps");
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    if (!traj.ok) throw new Error("traj");
    const pin = lps.livingProjectState.doctrinePackageRef;
    const basis = resolveCanonicalLifecycleRecommendationBasis({
      intent: "FINALIZE_CURRENT_CYCLE",
      projectId,
      subjectCycleInstanceId: cycleInstanceId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: pin.doctrinePackageId,
      doctrinePackageVersion: pin.version,
      doctrinePackageDigest: pin.digest,
      trajectory: traj.trajectory,
      decisions: await oa.decisionServices.decisions.listByProject(projectId),
      evidence: [],
      blockingReservationStatements: [],
    });
    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: oa.cycleServices.updateEpistemicState,
      projectId,
      structured: {
        intent: "FINALIZE_CURRENT_CYCLE" as const,
        statement: "Envisager la finalisation pendant un sujet ouvert.",
        subjectCycleInstanceId: cycleInstanceId,
        targetCycleInstanceId: null,
        targetCycleTypeId: null,
        rationale: "Finalisation supportable pendant travail en cours.",
        authority: "none" as const,
        isHumanDecision: false as const,
        qualificationSignals: null,
      },
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      basisRefs: basis,
      producedAt: "2026-09-27T13:00:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      existingItems: await oa.cycleServices.epistemic.listByProject(projectId),
    });
    expect(produced.ok).toBe(true);
  }

  it("A — conversation stays non-blocking under a pending subject (unrelated topic)", async () => {
    const { projectId } = await seedFunctionalDesignWithRequireArtifact("nonblk");
    const proposalId = await sendPendingProposal(projectId);
    const hdBefore = await hdCount(projectId);

    const unrelated = await projectAssistantSendAction({
      projectId,
      content: UNRELATED_TOPIC,
    });
    expect(unrelated.ok).toBe(true);
    if (!unrelated.ok) throw new Error(JSON.stringify(unrelated));

    // No dead-end: an ordinary turn is answered, not rejected.
    expect(unrelated.text.length).toBeGreaterThan(0);
    expect(unrelated.f2?.decision ?? null).toBeNull();
    expect(await hdCount(projectId)).toBe(hdBefore);

    // The governed subject survives the unrelated turn.
    const subject = await w2ReadActiveDecisionSubjectAction({ projectId });
    expect(subject.ok).toBe(true);
    if (!subject.ok) throw new Error("subject read failed");
    expect(subject.kind).not.toBe("none");
    if (subject.kind === "pending_reinstruction_required") {
      expect(subject.proposalIds).toContain(proposalId);
    }
  });

  it("B — chat-first accept records exactly one HD with DecisionBasis and opens PREPARE", async () => {
    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("accept");
    await sendPendingProposal(projectId);
    const hdBefore = await hdCount(projectId);

    const accepted = await projectAssistantSendAction({
      projectId,
      content: CHAT_ACCEPT,
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) throw new Error(JSON.stringify(accepted));

    expect(accepted.f2?.turnKind).toBe("f2_decision");
    expect(accepted.f2?.decision?.kind).toBe("GO");
    expect(accepted.f2?.decision?.readyForNextGatedStep).toBe(true);
    expect(accepted.f2?.labels.decisionTaken).toBe("DÉCISION PRISE");
    // Chat-first must not mint a competing proposal on the same turn.
    expect(accepted.f2?.proposal ?? null).toBeNull();

    expect(await hdCount(projectId)).toBe(hdBefore + 1);

    const decisionId = accepted.f2!.decision!.decisionId;
    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) throw new Error("hd read failed");
    expect(hd.decision.status).toBe("accepted");
    expect(hd.decision.decisionBasis?.sourceType).toBe("proposal");
    expect(hd.decision.decisionBasis?.executionBasis?.artifactFileName).toBe(
      EXPECTED_ARTIFACT_FILE,
    );

    // PREPARE is reachable straight from the conversational decision.
    const prepared = await projectAssistantPrepareResolvedM3Action({
      projectId,
      decisionId,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(`prepare: ${prepared.message}`);
    expect(prepared.f3.executionPerformed).toBe(false);
    expect(prepared.f3.attemptCreated).toBe(false);
    expect(prepared.f3.successor.executionContractId).toMatch(/^xct:/);

    const cycles =
      await runtime.oa!.cycleServices.cycles.listByProject(projectId);
    expect(
      cycles.filter((c) => c.status === "active").map((c) => c.cycleInstanceId),
    ).toEqual([cycleInstanceId]);
  });

  it("C — chat-first refuse records exactly one refused HD and closes the subject", async () => {
    const { projectId } = await seedFunctionalDesignWithRequireArtifact("refuse");
    await sendPendingProposal(projectId);
    const hdBefore = await hdCount(projectId);

    const refused = await projectAssistantSendAction({
      projectId,
      content: CHAT_REFUSE,
    });
    expect(refused.ok).toBe(true);
    if (!refused.ok) throw new Error(JSON.stringify(refused));

    expect(refused.f2?.turnKind).toBe("f2_decision");
    expect(refused.f2?.decision?.kind).toBe("NO_GO");
    expect(refused.f2?.decision?.readyForNextGatedStep).toBe(false);
    expect(await hdCount(projectId)).toBe(hdBefore + 1);

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: refused.f2!.decision!.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) throw new Error("hd read failed");
    expect(hd.decision.status).toBe("accepted");
    expect(hd.decision.decisionBasis?.sourceType).toBe("proposal");

    const subject = await w2ReadActiveDecisionSubjectAction({ projectId });
    expect(subject.ok).toBe(true);
    if (!subject.ok) throw new Error("subject read failed");
    expect(subject.kind).toBe("none");
  });

  it("D — chat-first amend closes the subject without any client reinstructionOfProposalId", async () => {
    const { projectId } = await seedFunctionalDesignWithRequireArtifact("amend");
    await sendPendingProposal(projectId);
    const hdBefore = await hdCount(projectId);

    const amended = await projectAssistantSendAction({
      projectId,
      content: CHAT_AMEND,
    });
    expect(amended.ok).toBe(true);
    if (!amended.ok) throw new Error(JSON.stringify(amended));
    expect(amended.f2?.turnKind).toBe("f2_decision");
    expect(amended.f2?.decision?.kind).toBe("AMEND");
    expect(await hdCount(projectId)).toBe(hdBefore + 1);

    // Server-owned continuity: the next formalization turn needs NO client arm
    // and must not dead-end on EXPLICIT_REINSTRUCTION_REQUIRED.
    const next = await projectAssistantSendAction({
      projectId,
      content: MATERIALIZATION_REQUEST,
    });
    expect(next.ok).toBe(true);
    if (!next.ok) throw new Error(JSON.stringify(next));
    expect(next.f2?.turnKind).toBe("f2_proposal");
    expect(next.f2?.proposal?.status).toBe("DECISION_REQUIRED");
  });

  it("E — chat-first defer records durable HD, closes subject, resolves work Recommendation", async () => {
    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("defer");
    await sendPendingProposal(projectId);
    const hdBefore = await hdCount(projectId);

    const deferred = await projectAssistantSendAction({
      projectId,
      content: CHAT_DEFER,
    });
    expect(deferred.ok).toBe(true);
    if (!deferred.ok) throw new Error(JSON.stringify(deferred));
    expect(deferred.f2?.turnKind).toBe("f2_decision");
    expect(deferred.f2?.decision?.kind).toBe("GO_WITH_RESERVES");
    expect(deferred.text).toMatch(/report/i);
    expect(await hdCount(projectId)).toBe(hdBefore + 1);

    const subject = await w2ReadActiveDecisionSubjectAction({ projectId });
    expect(subject.ok).toBe(true);
    if (!subject.ok) throw new Error("subject read failed");
    expect(subject.kind).toBe("none");

    const items =
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId);
    expect(
      deriveUndisposedRecommendations(items, cycleInstanceId),
    ).toHaveLength(0);
    expect(
      items.some(
        (i) =>
          i.type === "Reservation" &&
          i.source === "work-recommendation-defer" &&
          i.status === "active",
      ),
    ).toBe(true);
  });

  it("F — two pending subjects + « oui » → ambiguity, no HD", async () => {
    const { projectId } = await seedFunctionalDesignWithRequireArtifact("ambig");
    const first = await sendPendingProposal(projectId);

    // Second pending subject written directly through the durable marker path.
    const { writePendingDecisionSubjectMarker } = await import(
      "@/features/project-assistant/w2/pendingDecisionSubjectMarker"
    );
    const { getProposal } = await import(
      "@/features/project-assistant/f2/proposalStore"
    );
    const { sealProposalExecutionBasis, computeProposalSubjectDigest } =
      await import(
        "@/features/project-assistant/w2/resolveProposalDecisionSubject"
      );
    const firstProposal = getProposal(first);
    expect(firstProposal).not.toBeNull();
    const secondProposalId = `prop:cfgdl-second-${Date.now()}`;
    const secondProposal = {
      ...firstProposal!,
      proposalId: secondProposalId,
    };
    const sealed = sealProposalExecutionBasis(secondProposal);
    const marker = await writePendingDecisionSubjectMarker({
      oa: runtime.oa!,
      projectId,
      proposalId: secondProposalId,
      subjectDigest: computeProposalSubjectDigest(sealed, secondProposalId),
      lpsId: secondProposal.contextSnapshot.lpsId,
      lpsVersion: secondProposal.contextSnapshot.lpsVersion,
      doctrineDigest: secondProposal.contextSnapshot.doctrineDigest,
      proposal: secondProposal,
      correlationId: `cor:pending-subject:${secondProposalId}`,
    });
    expect(marker.ok).toBe(true);

    const hdBefore = await hdCount(projectId);
    const ambiguous = await projectAssistantSendAction({
      projectId,
      content: CHAT_AMBIGUOUS,
    });
    expect(ambiguous.ok).toBe(true);
    if (!ambiguous.ok) throw new Error(JSON.stringify(ambiguous));
    expect(ambiguous.f2?.decision ?? null).toBeNull();
    expect(await hdCount(projectId)).toBe(hdBefore);

    // A literal accept on two competing subjects must also record nothing.
    const accepted = await projectAssistantSendAction({
      projectId,
      content: CHAT_ACCEPT,
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) throw new Error(JSON.stringify(accepted));
    expect(accepted.f2?.decision ?? null).toBeNull();
    expect(accepted.f2?.turnKind).toBe("f2_clarification");
    expect(await hdCount(projectId)).toBe(hdBefore);
  });

  it("G — an unrelated « oui » without a governed target records nothing", async () => {
    const { projectId } = await seedFunctionalDesignWithRequireArtifact("yes");
    await sendPendingProposal(projectId);
    const hdBefore = await hdCount(projectId);

    const yes = await projectAssistantSendAction({
      projectId,
      content: UNRELATED_YES,
    });
    expect(yes.ok).toBe(true);
    if (!yes.ok) throw new Error(JSON.stringify(yes));
    expect(yes.f2?.decision ?? null).toBeNull();
    expect(yes.f2?.turnKind).toBe("f1_informative");
    expect(await hdCount(projectId)).toBe(hdBefore);

    const subject = await w2ReadActiveDecisionSubjectAction({ projectId });
    expect(subject.ok).toBe(true);
    if (!subject.ok) throw new Error("subject read failed");
    expect(subject.kind).not.toBe("none");
  });

  it("K — finalization is blocked by an undisposed Recommendation and unblocked after disposition", async () => {
    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("final");

    const cleanAssessment = async () => {
      const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
        cycleInstanceId,
        projectId,
      });
      expect(assessed.ok).toBe(true);
      if (!assessed.ok) throw new Error("assess failed");
      return assessed.assessment;
    };

    const baseline = await cleanAssessment();
    expect(baseline.blockers).not.toContain("undisposed_recommendations");

    await sendPendingProposal(projectId);
    // Lazy FR-01 materialisation — Work Recommendation exists only after sealed OptionSet bind.
    const bound = await assessChatFirstWorkEligibility({
      oa: runtime.oa!,
      projectId,
    });
    expect(bound.eligible).toBe(true);

    const blocked = await cleanAssessment();
    expect(blocked.blockers).toContain("undisposed_recommendations");
    expect(blocked.canComplete).toBe(false);

    const deferred = await projectAssistantSendAction({
      projectId,
      content: CHAT_DEFER,
    });
    expect(deferred.ok).toBe(true);
    if (!deferred.ok) throw new Error(JSON.stringify(deferred));
    expect(deferred.f2?.decision?.kind).toBe("GO_WITH_RESERVES");

    const itemsFinal =
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId);
    expect(
      deriveUndisposedRecommendations(itemsFinal, cycleInstanceId),
    ).toHaveLength(0);

    const unblocked = await cleanAssessment();
    expect(unblocked.blockers).not.toContain("undisposed_recommendations");
  });

  it("B-lifecycle — NEXT_CYCLE CURRENT + chat « oui » → ZERO START / ZERO lifecycle HD from chat", async () => {
    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("lc-yes");
    // No Work subject — only Lifecycle CURRENT NEXT_CYCLE.
    await materializeCurrentNextCycleLr(projectId, cycleInstanceId);

    const workGate = await assessChatFirstWorkEligibility({
      oa: runtime.oa!,
      projectId,
    });
    expect(workGate.eligible).toBe(false);

    const hdBefore = await hdCount(projectId);
    const cyclesBefore = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    const activeBefore = cyclesBefore.filter((c) => c.status === "active").length;
    const statusesBefore = cyclesBefore.map((c) => c.status).sort();

    const yes = await projectAssistantSendAction({
      projectId,
      content: CHAT_ACCEPT,
    });
    expect(yes.ok).toBe(true);
    if (!yes.ok) throw new Error(JSON.stringify(yes));
    // Chat-first Work path must not record a Work HD nor trigger START.
    expect(yes.f2?.decision ?? null).toBeNull();
    expect(await hdCount(projectId)).toBe(hdBefore);

    const cyclesAfter = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesAfter.filter((c) => c.status === "active").length).toBe(
      activeBefore,
    );
    expect(cyclesAfter.map((c) => c.status).sort()).toEqual(statusesBefore);
  });

  it("B-hybrid — Work + Lifecycle CURRENT + chat accept → Work HD only, ZERO START", async () => {
    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("hybrid");
    await sendPendingProposal(projectId);
    await materializeCurrentNextCycleLr(projectId, cycleInstanceId);

    const workGate = await assessChatFirstWorkEligibility({
      oa: runtime.oa!,
      projectId,
    });
    expect(workGate.eligible).toBe(true);

    const hdBefore = await hdCount(projectId);
    const cyclesBefore = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    const activeBefore = cyclesBefore.filter((c) => c.status === "active").length;

    const accepted = await projectAssistantSendAction({
      projectId,
      content: CHAT_ACCEPT,
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) throw new Error(JSON.stringify(accepted));
    expect(accepted.f2?.decision?.kind).toBe("GO");
    expect(await hdCount(projectId)).toBe(hdBefore + 1);

    const cyclesAfter = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesAfter.filter((c) => c.status === "active").length).toBe(
      activeBefore,
    );
  });

  it("STRUCTURAL — the chat-first lineage never touches CTA/decide seams", () => {
    // Only the suite body above this guard is the lineage under proof; the
    // guard's own literals must not count as usages.
    const src = fs
      .readFileSync(__filename, "utf8")
      .split("STRUCTURAL — the chat-first lineage")[0]!;
    expect(src).toMatch(/projectAssistantSendAction/);
    expect(src).toMatch(/projectAssistantPrepareResolvedM3Action/);
    // No « Instruire les options » CTA, no per-option decide button,
    // no legacy F2 gate decide, no client-supplied reinstruction arm.
    for (const forbidden of [
      "w2ProposeTrajectoryOptionsAction",
      "w2DecideTrajectoryAction",
      "projectAssistantDecideAction",
      "reinstructionOfProposalId:",
    ]) {
      expect(src.includes(forbidden)).toBe(false);
    }
  });
});
