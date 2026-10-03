/**
 * MD-WR-03 — chat-first Work Recommendation (ACW identity) disposition oracle.
 *
 * ACW Recommendation → lazy seal (Observation + Options + optset
 * Recommendation) → HumanDecision (dec:w2-wr:) → DecisionRef → dispose
 * carrier AND ACW. ZERO Proposal, ZERO ProjectTrajectory mutation.
 *
 * ZERO REAL / ZERO LIVE / ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  LOCAL_PILOTE_ACTOR,
  computeDecisionBasisSourceDigest,
  registerLocalPiloteAuthority,
  validateDecisionBasis,
  type DecisionBasis,
} from "@/lib/oa/decision";
import {
  deriveRecommendationClassificationUnavailableRefs,
  deriveUndisposedRecommendations,
  projectCycleWorkRecommendations,
  recommendationClassificationUnavailableRef,
} from "@/lib/oa/cycle";
import { assessChatFirstWorkEligibility } from "@/features/project-assistant/w2/assessChatFirstWorkEligibility";
import { resolveChatFirstPilotDecision } from "@/features/project-assistant/w2/resolveChatFirstPilotDecision";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { sealWorkRecommendationPresentedOptionSet } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import {
  findActiveWorkRecommendationSubject,
  selectActiveWorkRecommendationCandidates,
} from "@/features/project-assistant/w2/activeWorkRecommendationDecisionSubject";
import {
  isWorkRecommendationPresentedSet,
  parsePresentedOptionSetStatement,
} from "@/features/project-assistant/w2/presentedOptionSet";
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import {
  resolveTrajectoryDecisionSupportProjection,
  shouldExposeTrajectoryDecisionSupport,
} from "@/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection";
import {
  classifyAcwRecommendationCurrentness,
  readCurrentTrajectoryDecidedByRef,
  resolveProjectTrajectoryRecommendationCutoff,
  resolveTrajectoryRecommendationCutoffFromDecisions,
} from "@/features/project-assistant/trajectoryRecommendationCurrentness";
import { listProposalsForProject } from "@/features/project-assistant/f2/proposalStore";
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

const CHAT_ACCEPT = "Oui, poursuis cette proposition. __F2_DECIDE_ACCEPT__";

const EXPECTED_PROJECT_ROOT = "projects/mini-cadrage-suivi-de-taches";
const EXPECTED_CYCLE_ROOT = `${EXPECTED_PROJECT_ROOT}/02-conception-fonctionnelle`;
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

const ACW_STATEMENT_A =
  "Recommandation de travail : consolider la liste des statuts avant la conception détaillée.";
const ACW_STATEMENT_B =
  "Recommandation de travail : documenter les filtres par statut et P.";

describe("MD-WR-03 chat-first Work Recommendation continuity", () => {
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

  async function seedCycle(
    suffix: string,
    opts: { requireArtifact?: boolean } = {},
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

    if (!opts.requireArtifact) return { projectId, cycleInstanceId };
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


  /** Seed a Nora ACW Recommendation (identity) for the active cycle. */
  async function seedAcwRecommendation(input: {
    projectId: string;
    cycleInstanceId: string;
    id: string;
    statement: string;
    extraRelated?: string[];
  }): Promise<string> {
    const oa = runtime.oa!;
    const written = await oa.cycleServices.updateEpistemicState.execute({
      projectId: input.projectId,
      createdBy: {
        actorId: "actor:nora-active-cycle-work",
        role: "agent",
        displayName: "Nora",
        authorityLevel: "N1",
      },
      items: [
        {
          epistemicItemId: input.id,
          type: "Recommendation",
          statement: input.statement,
          status: "active",
          source: "active-cycle-work:nora",
          relatedObjects: [
            input.projectId,
            input.cycleInstanceId,
            ...(input.extraRelated ?? []),
          ],
        },
      ],
    });
    expect(written.ok).toBe(true);
    return input.id;
  }

  async function epistemicItems(projectId: string) {
    const r = await runtime.oa!.cycleServices.getEpistemicState.execute({
      projectId,
    });
    if (!r.ok) throw new Error("epistemic read failed");
    return r.state.items;
  }

  async function hdCount(projectId: string): Promise<number> {
    return (
      await runtime.oa!.decisionServices.decisions.listByProject(projectId)
    ).length;
  }

  async function trajectorySnapshot(projectId: string) {
    const t = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    if (!t.ok) throw new Error("trajectory read failed");
    return {
      version: t.trajectory.version,
      status: t.trajectory.status,
      decidedByDecisionRef: t.trajectory.decidedByDecisionRef ?? null,
    };
  }

  async function dispose(
    projectId: string,
    disposition: "accept" | "refuse" | "amend" | "defer",
    targetKind: "current_recommendation" | "presented_subject" | "ambiguous" =
      "current_recommendation",
  ) {
    return resolveChatFirstPilotDecision({
      oa: runtime.oa!,
      projectId,
      disposition,
      targetKind,
      forceLocalAuthority: true,
    });
  }

  it("T1 — unique active ACW Work → eligible work_recommendation (seal required, nothing written)", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t1");
    const acw = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t1aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const before = (await epistemicItems(projectId)).length;
    const gate = await assessChatFirstWorkEligibility({
      oa: runtime.oa!,
      projectId,
    });
    expect(gate.eligible).toBe(true);
    if (!gate.eligible) throw new Error("expected eligible");
    expect(gate.subjectFamily).toBe("work_recommendation");
    expect(gate.presented).toBeNull();
    expect("sealRequired" in gate && gate.sealRequired).toBe(true);
    expect((await epistemicItems(projectId)).length).toBe(before);
    expect(acw).toMatch(/^epi:acw:/);
  });

  it("T2 — multiple active ACW Work → ambiguous, zero HD", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t2");
    await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t2aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t2bbbbbbbbbbbbbbbbbb",
      statement: ACW_STATEMENT_B,
    });
    const gate = await assessChatFirstWorkEligibility({
      oa: runtime.oa!,
      projectId,
    });
    expect(gate.eligible).toBe(false);
    if (gate.eligible) throw new Error("expected ineligible");
    expect(gate.kind).toBe("ambiguous_subjects");

    const hdBefore = await hdCount(projectId);
    const resolved = await dispose(projectId, "accept");
    expect(resolved.kind).toBe("ambiguous_subjects");
    expect(await hdCount(projectId)).toBe(hdBefore);
  });

  it("T3 — no ACW Work → no eligible subject, no_eligible_subject on resolve", async () => {
    const { projectId } = await seedCycle("t3");
    const gate = await assessChatFirstWorkEligibility({
      oa: runtime.oa!,
      projectId,
    });
    expect(gate.eligible).toBe(false);
    if (gate.eligible) throw new Error("expected ineligible");
    expect(gate.kind).toBe("no_eligible_subject");
    const resolved = await dispose(projectId, "accept");
    expect(resolved.kind).toBe("no_eligible_subject");
  });

  it("T4 — seal creates Observation+Options+optset Recommendation linked to ACW; no Proposal, no PT", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t4");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t4aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const trajBefore = await trajectorySnapshot(projectId);

    const sealed = await sealWorkRecommendationPresentedOptionSet({
      oa: runtime.oa!,
      projectId,
      workRecommendationEpistemicItemId: acwId,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) throw new Error(sealed.message);
    expect(sealed.created).toBe(true);
    const p = sealed.presented;
    expect(isWorkRecommendationPresentedSet(p)).toBe(true);
    expect(p.decisionSubjectMode).toBe("work_recommendation");
    expect(p.workRecommendationEpistemicItemId).toBe(acwId);
    expect(p.promotesProjectTrajectory).toBe(false);
    expect(p.trajectoryId).toBeNull();
    expect(p.candidateVersion).toBeNull();
    expect(p.proposalId ?? null).toBeNull();
    expect(p.optionRefs).toEqual([
      PROPOSAL_SUBJECT_PURSUE_REF,
      PROPOSAL_SUBJECT_AMEND_REF,
      PROPOSAL_SUBJECT_REFUSE_REF,
    ]);
    expect(p.options.map((o) => o.label).join(" ")).toMatch(
      /recommandation de travail/i,
    );

    const items = await epistemicItems(projectId);
    const obs = items.find(
      (i) =>
        i.type === "Observation" &&
        parsePresentedOptionSetStatement(i.statement)?.optionSetRef ===
          p.optionSetRef,
    );
    expect(obs).toBeTruthy();
    expect(obs!.relatedObjects).toContain(acwId);
    const rec = items.find(
      (i) => i.type === "Recommendation" && i.source === p.optionSetRef,
    );
    expect(rec).toBeTruthy();
    expect(rec!.relatedObjects).toEqual(
      expect.arrayContaining([acwId, cycleInstanceId, p.optionSetRef]),
    );
    expect(rec!.relatedObjects!.some((r) => r.startsWith("prop:"))).toBe(false);
    expect(
      items.filter((i) => i.type === "Option" && i.source === p.optionSetRef),
    ).toHaveLength(3);

    // Idempotent re-seal.
    const again = await sealWorkRecommendationPresentedOptionSet({
      oa: runtime.oa!,
      projectId,
      workRecommendationEpistemicItemId: acwId,
    });
    expect(again.ok && again.created).toBe(false);
    expect(again.ok && again.presented.optionSetRef).toBe(p.optionSetRef);

    expect(listProposalsForProject(projectId)).toHaveLength(0);
    expect(await trajectorySnapshot(projectId)).toEqual(trajBefore);
    expect(await hdCount(projectId)).toBe(0);
  });

  it("T5 — accept: one HD (dec:w2-wr:), DecisionRef with optset+ACW, ACW and carrier resolved, zero PT/Proposal mutation", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t5");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t5aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const trajBefore = await trajectorySnapshot(projectId);

    const resolved = await dispose(projectId, "accept");
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") throw new Error(JSON.stringify(resolved));
    expect(resolved.subjectFamily).toBe("work_recommendation");
    expect(resolved.proposalId).toBeNull();
    expect(resolved.decisionId).toMatch(/^dec:w2-wr:/);
    expect(resolved.selectedOptionRef).toBe(PROPOSAL_SUBJECT_PURSUE_REF);
    expect(resolved.executionPerformed).toBe(false);
    expect(resolved.executionContractPrepared).toBe(false);
    expect(await hdCount(projectId)).toBe(1);

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) throw new Error("hd read failed");
    expect(hd.decision.status).toBe("accepted");
    expect(hd.decision.selectedOptionId).toBe(PROPOSAL_SUBJECT_PURSUE_REF);
    const basis = hd.decision.decisionBasis!;
    expect(basis.sourceType).toBe("work_recommendation");
    expect(basis.sourceRef).toBe(resolved.optionSetRef);
    expect(basis.sourceRef.startsWith("prop:")).toBe(false);
    expect(basis.trajectoryContext).toBeUndefined();
    expect(basis.candidateTrajectoryContext).toBeUndefined();
    expect(basis.workRecommendationContext).toMatchObject({
      workRecommendationEpistemicItemId: acwId,
      optionSetRef: resolved.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    });
    expect(basis.workRecommendationContext!.optionRefs).toEqual([
      PROPOSAL_SUBJECT_PURSUE_REF,
      PROPOSAL_SUBJECT_AMEND_REF,
      PROPOSAL_SUBJECT_REFUSE_REF,
    ]);
    expect(basis.workRecommendationContext!.optionSetDigest).toMatch(/^[0-9a-f]{64}$/);
    expect(basis.executionBasis.targetPath).toBeUndefined();

    const items = await epistemicItems(projectId);
    const decRef = items.find(
      (i) => i.type === "DecisionRef" && i.source === resolved.decisionId,
    );
    expect(decRef).toBeTruthy();
    expect(decRef!.relatedObjects).toEqual(
      expect.arrayContaining([resolved.optionSetRef, acwId, resolved.decisionId]),
    );
    const acw = items.find((i) => i.epistemicItemId === acwId)!;
    expect(acw.status).toBe("resolved");
    expect(acw.relatedObjects).toContain(resolved.decisionId);
    const carrier = items.find(
      (i) => i.type === "Recommendation" && i.source === resolved.optionSetRef,
    )!;
    expect(carrier.status).toBe("resolved");

    expect(listProposalsForProject(projectId)).toHaveLength(0);
    expect(await trajectorySnapshot(projectId)).toEqual(trajBefore);

    // Idempotent: second accept finds no subject, no second HD.
    const second = await dispose(projectId, "accept");
    expect(second.kind).toBe("no_eligible_subject");
    expect(await hdCount(projectId)).toBe(1);
  });

  it("T6 — refuse → rejected; amend → superseded (ACW + carrier same status)", async () => {
    for (const [suffix, disposition, status, option] of [
      ["t6r", "refuse", "rejected", PROPOSAL_SUBJECT_REFUSE_REF],
      ["t6a", "amend", "superseded", PROPOSAL_SUBJECT_AMEND_REF],
    ] as const) {
      const { projectId, cycleInstanceId } = await seedCycle(suffix);
      const acwId = await seedAcwRecommendation({
        projectId,
        cycleInstanceId,
        id: `epi:acw:${suffix}aaaaaaaaaaaaaaaa`,
        statement: ACW_STATEMENT_A,
      });
      const resolved = await dispose(projectId, disposition, "presented_subject");
      expect(resolved.kind).toBe("decision_recorded");
      if (resolved.kind !== "decision_recorded") throw new Error(JSON.stringify(resolved));
      expect(resolved.selectedOptionRef).toBe(option);
      const items = await epistemicItems(projectId);
      expect(items.find((i) => i.epistemicItemId === acwId)!.status).toBe(status);
      expect(
        items.find(
          (i) => i.type === "Recommendation" && i.source === resolved.optionSetRef,
        )!.status,
      ).toBe(status);
    }
  });

  it("T7 — defer: HD + Reservation + ACW/carrier resolved, no Proposal closure", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t7");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t7aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const resolved = await dispose(projectId, "defer");
    expect(resolved.kind).toBe("decision_recorded");
    if (resolved.kind !== "decision_recorded") throw new Error(JSON.stringify(resolved));
    expect(resolved.disposition).toBe("defer");
    expect(resolved.subjectFamily).toBe("work_recommendation");
    expect(resolved.proposalId).toBeNull();
    const items = await epistemicItems(projectId);
    const reservation = items.find(
      (i) => i.type === "Reservation" && i.source === "work-recommendation-defer",
    );
    expect(reservation).toBeTruthy();
    expect(reservation!.relatedObjects).toContain(acwId);
    expect(items.find((i) => i.epistemicItemId === acwId)!.status).toBe("resolved");
    expect(
      items.find(
        (i) => i.type === "Recommendation" && i.source === resolved.optionSetRef,
      )!.status,
    ).toBe("resolved");
    expect(
      items.some(
        (i) =>
          i.type === "DecisionRef" &&
          i.relatedObjects?.includes(acwId) &&
          i.relatedObjects?.includes(resolved.optionSetRef),
      ),
    ).toBe(true);
    expect(listProposalsForProject(projectId)).toHaveLength(0);
  });

  it("T8 — specific_alternative / ambiguous targetKind records nothing", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t8");
    await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t8aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const before = (await epistemicItems(projectId)).length;
    const resolved = await resolveChatFirstPilotDecision({
      oa: runtime.oa!,
      projectId,
      disposition: "accept",
      targetKind: "specific_alternative",
      forceLocalAuthority: true,
    });
    expect(resolved.kind).toBe("no_eligible_subject");
    expect(await hdCount(projectId)).toBe(0);
    expect((await epistemicItems(projectId)).length).toBe(before);
  });

  it("T9 — Journal dedup: sealed carrier suppresses the bare ACW card; disposition id reconstructed", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t9");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t9aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const cards0 = projectCycleWorkRecommendations({
      items: await epistemicItems(projectId),
      cycleInstanceId,
      fallbackCycleInstanceId: cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(cards0).toHaveLength(1);
    expect(cards0[0]!.optionSetRef).toBeNull();

    const sealed = await sealWorkRecommendationPresentedOptionSet({
      oa: runtime.oa!,
      projectId,
      workRecommendationEpistemicItemId: acwId,
    });
    expect(sealed.ok).toBe(true);
    const cards1 = projectCycleWorkRecommendations({
      items: await epistemicItems(projectId),
      cycleInstanceId,
      fallbackCycleInstanceId: cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(cards1).toHaveLength(1);
    expect(cards1[0]!.optionSetRef).toBe(
      sealed.ok ? sealed.presented.optionSetRef : null,
    );
    expect(cards1[0]!.workRecommendationEpistemicItemId).toBe(acwId);

    const resolved = await dispose(projectId, "accept");
    if (resolved.kind !== "decision_recorded") throw new Error(JSON.stringify(resolved));
    const cards2 = projectCycleWorkRecommendations({
      items: await epistemicItems(projectId),
      cycleInstanceId,
      fallbackCycleInstanceId: cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(cards2).toHaveLength(1);
    expect(cards2[0]!.status).toBe("resolved");
    expect(cards2[0]!.dispositionDecisionId).toBe(resolved.decisionId);
  });

  it("T10 — PT-fuel ACW (opt:trajectory:*) excluded under PRESENT/UNAVAILABLE, Work only under NONE", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t10");
    await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t10aaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
      extraRelated: ["opt:trajectory:governed"],
    });
    const items = await epistemicItems(projectId);
    const present = selectActiveWorkRecommendationCandidates({
      items,
      cycleInstanceId,
      trajectoryDecisionSupportState: "PRESENT",
    });
    expect(present.acwIds).toHaveLength(0);
    const unavailable = selectActiveWorkRecommendationCandidates({
      items,
      cycleInstanceId,
      trajectoryDecisionSupportState: "UNAVAILABLE",
    });
    expect(unavailable.acwIds).toHaveLength(0);
    const none = selectActiveWorkRecommendationCandidates({
      items,
      cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(none.acwIds).toEqual(["epi:acw:t10aaaaaaaaaaaaaaaaa"]);
  });

  it("T11 — decideTrajectory on a work set: hostile trajectory fields ignored, unknown option refused, second decision refused", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t11");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t11aaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const sealed = await sealWorkRecommendationPresentedOptionSet({
      oa: runtime.oa!,
      projectId,
      workRecommendationEpistemicItemId: acwId,
    });
    if (!sealed.ok) throw new Error(sealed.message);
    const trajBefore = await trajectorySnapshot(projectId);

    const unknown = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: sealed.presented.optionSetRef,
      selectedOptionRef: "opt:not-presented",
      forceLocalAuthority: true,
    });
    expect(unknown.ok).toBe(false);
    expect(await hdCount(projectId)).toBe(0);

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: sealed.presented.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      trajectoryId: "trj:hostile",
      candidateVersion: 99,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error(decided.message);
    expect(decided.decisionSubjectMode).toBe("work_recommendation");
    expect(decided.promotesProjectTrajectory).toBe(false);
    expect(decided.trajectory).toBeNull();
    expect(decided.decision.decisionId).toMatch(/^dec:w2-wr:/);
    expect(await trajectorySnapshot(projectId)).toEqual(trajBefore);

    const again = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: sealed.presented.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_REFUSE_REF,
      forceLocalAuthority: true,
    });
    expect(again.ok).toBe(false);
    if (again.ok) throw new Error("expected refusal");
    expect(again.code).toBe("SUBJECT_ALREADY_DECIDED");
    expect(await hdCount(projectId)).toBe(1);
  });

  it("T12 — Proposal keeps priority: pending Proposal + ACW Work → Proposal path, ACW untouched", async () => {
    const { projectId, cycleInstanceId } =
      await seedCycle("t12", { requireArtifact: true });
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t12aaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const send = await projectAssistantSendAction({
      projectId,
      content: MATERIALIZATION_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    const accepted = await projectAssistantSendAction({
      projectId,
      content: CHAT_ACCEPT,
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) throw new Error(JSON.stringify(accepted));
    expect(accepted.f2?.turnKind).toBe("f2_decision");
    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: accepted.f2!.decision!.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) throw new Error("hd");
    // Proposal HD — NOT a work-recommendation HD.
    expect(hd.decision.decisionId).not.toMatch(/^dec:w2-wr:/);
    expect(hd.decision.decisionBasis?.sourceRef.startsWith("prop:")).toBe(true);
    const acw = (await epistemicItems(projectId)).find(
      (i) => i.epistemicItemId === acwId,
    )!;
    expect(acw.status).toBe("active");
  });

  it("T13 — chat front door: unique ACW Work accepted from the conversation", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t13");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t13aaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const accepted = await projectAssistantSendAction({
      projectId,
      content: "Oui, je retiens cette recommandation de travail. __F2_DECIDE_ACCEPT__",
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) throw new Error(JSON.stringify(accepted));
    expect(accepted.f2?.turnKind).toBe("f2_decision");
    expect(accepted.f2?.decision?.decisionId).toMatch(/^dec:w2-wr:/);
    expect(accepted.f2?.proposal ?? null).toBeNull();
    const acw = (await epistemicItems(projectId)).find(
      (i) => i.epistemicItemId === acwId,
    )!;
    expect(acw.status).toBe("resolved");
    expect(listProposalsForProject(projectId)).toHaveLength(0);
  });

  it("T14 — unrelated chat turn leaves the ACW Work untouched (no HD)", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("t14");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:t14aaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const unrelated = await projectAssistantSendAction({
      projectId,
      content:
        "Par curiosité, quelles réserves méthodologiques vois-tu sur la lisibilité du projet en général ? __F2_INFORMATIVE__",
    });
    expect(unrelated.ok).toBe(true);
    expect(await hdCount(projectId)).toBe(0);
    const acw = (await epistemicItems(projectId)).find(
      (i) => i.epistemicItemId === acwId,
    )!;
    expect(acw.status).toBe("active");
  });

  it("MX-J1 — unbound ACW Work is visible in Journal Recommandations (MD-WR-02)", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("mxj1");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:mxj1aaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const cards = projectCycleWorkRecommendations({
      items: await epistemicItems(projectId),
      cycleInstanceId,
      fallbackCycleInstanceId: cycleInstanceId,
      trajectoryDecisionSupportState: "NONE",
    });
    expect(cards).toHaveLength(1);
    expect(cards[0]!.epistemicItemId).toBe(acwId);
    expect(cards[0]!.optionSetRef).toBeNull();
    expect(cards[0]!.status).toBe("active");
    expect(cards[0]!.workRecommendationEpistemicItemId).toBe(acwId);
  });

  it("MX-F1 — unbound ACW Work blocks finalization (MD-WR-07); seal dedupes to ONE; disposed clears", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("mxf1");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:mxf1aaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const unbound = deriveUndisposedRecommendations(
      await epistemicItems(projectId),
      cycleInstanceId,
    );
    expect(unbound).toHaveLength(1);
    expect(unbound[0]!.workRecommendationEpistemicItemId).toBe(acwId);
    expect(unbound[0]!.optionSetRef).toBeNull();

    const sealed = await sealWorkRecommendationPresentedOptionSet({
      oa: runtime.oa!,
      projectId,
      workRecommendationEpistemicItemId: acwId,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) throw new Error(sealed.message);
    const pending = deriveUndisposedRecommendations(
      await epistemicItems(projectId),
      cycleInstanceId,
    );
    expect(pending).toHaveLength(1);
    expect(pending[0]!.optionSetRef).toBe(sealed.presented.optionSetRef);

    const resolved = await dispose(projectId, "accept");
    expect(resolved.kind).toBe("decision_recorded");
    const after = deriveUndisposedRecommendations(
      await epistemicItems(projectId),
      cycleInstanceId,
    );
    expect(after).toHaveLength(0);
  });

  // ───────────────────────── Correction Pass 01 ─────────────────────────

  it("CP01-T1 — MD-WR-06: accept writes DecisionBasis sourceType work_recommendation + typed context (never proposal)", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp1");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp1aaaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const resolved = await dispose(projectId, "accept");
    if (resolved.kind !== "decision_recorded") throw new Error(JSON.stringify(resolved));
    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    if (!hd.ok) throw new Error("hd read failed");
    const basis = hd.decision.decisionBasis!;
    expect(basis.sourceType).toBe("work_recommendation");
    expect(basis.sourceType).not.toBe("proposal");
    expect(basis.sourceRef).toBe(resolved.optionSetRef);
    expect(basis.workRecommendationContext!.workRecommendationEpistemicItemId).toBe(acwId);
    expect(basis.workRecommendationContext!.optionSetRef).toBe(resolved.optionSetRef);
    expect(basis.trajectoryContext).toBeUndefined();
    expect(basis.candidateTrajectoryContext).toBeUndefined();
    expect(validateDecisionBasis(basis)).toBeNull();
  });

  it("CP01-T2 — MD-WR-06: refuse and amend also carry honest work_recommendation basis with selected option", async () => {
    for (const [suffix, disposition, option] of [
      ["cp2r", "refuse", PROPOSAL_SUBJECT_REFUSE_REF],
      ["cp2a", "amend", PROPOSAL_SUBJECT_AMEND_REF],
    ] as const) {
      const { projectId, cycleInstanceId } = await seedCycle(suffix);
      await seedAcwRecommendation({
        projectId,
        cycleInstanceId,
        id: `epi:acw:${suffix}aaaaaaaaaaaaaaaa`,
        statement: ACW_STATEMENT_A,
      });
      const resolved = await dispose(projectId, disposition, "presented_subject");
      if (resolved.kind !== "decision_recorded") throw new Error(JSON.stringify(resolved));
      const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
        decisionId: resolved.decisionId,
      });
      if (!hd.ok) throw new Error("hd read failed");
      const basis = hd.decision.decisionBasis!;
      expect(basis.sourceType).toBe("work_recommendation");
      expect(basis.workRecommendationContext!.selectedOptionRef).toBe(option);
      expect(basis.workRecommendationContext!.optionRefs).toContain(option);
      expect(validateDecisionBasis(basis)).toBeNull();
    }
  });

  it("CP01-T3-defer — MD-WR-06: defer Work HD never carries Proposal DecisionBasis; Reservation + ZERO Proposal", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp3d");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp3daaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const resolved = await dispose(projectId, "defer");
    if (resolved.kind !== "decision_recorded") throw new Error(JSON.stringify(resolved));
    expect(resolved.disposition).toBe("defer");
    expect(resolved.subjectFamily).toBe("work_recommendation");
    expect(resolved.proposalId).toBeNull();
    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: resolved.decisionId,
    });
    if (!hd.ok) throw new Error("hd read failed");
    // Defer today records HD without DecisionBasis; if a basis appears later it
    // MUST be work_recommendation — never a false Proposal provenance.
    const basis = hd.decision.decisionBasis;
    if (basis) {
      expect(basis.sourceType).toBe("work_recommendation");
      expect(basis.sourceType).not.toBe("proposal");
      expect(basis.workRecommendationContext?.workRecommendationEpistemicItemId).toBe(
        acwId,
      );
      expect(basis.trajectoryContext).toBeUndefined();
    } else {
      expect(basis).toBeUndefined();
    }
    const items = await epistemicItems(projectId);
    expect(
      items.some(
        (i) => i.type === "Reservation" && i.source === "work-recommendation-defer",
      ),
    ).toBe(true);
    expect(listProposalsForProject(projectId)).toHaveLength(0);
  });

  it("CP01-T10 — Blocker 2: unreadable current trajectory → TDS UNAVAILABLE (never silent undecided)", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp10");
    const spy = vi
      .spyOn(runtime.oa!.cycleServices.getCurrentTrajectory, "execute")
      .mockResolvedValue({
        ok: false,
        error: { detailCode: "PERSISTENCE_FAILURE" },
      } as never);
    try {
      const tds = await resolveTrajectoryDecisionSupportProjection({
        oa: runtime.oa!,
        projectId,
        cycleInstanceId,
      });
      expect(tds.state).toBe("UNAVAILABLE");
      spy.mockRejectedValue(new Error("boom"));
      const thrown = await resolveTrajectoryDecisionSupportProjection({
        oa: runtime.oa!,
        projectId,
        cycleInstanceId,
      });
      expect(thrown.state).toBe("UNAVAILABLE");
    } finally {
      spy.mockRestore();
    }
  });

  it("CP01-T14 — MD-WR-07: unbound active ACW blocks finalization via pilotLifecycle.assess; disposed clears", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp14");
    await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp14aaaaaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const before = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    if (!before.ok) throw new Error("assess failed");
    expect(before.assessment.blockers).toContain("undisposed_recommendations");

    const resolved = await dispose(projectId, "accept");
    expect(resolved.kind).toBe("decision_recorded");
    const after = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    if (!after.ok) throw new Error("assess failed");
    expect(after.assessment.blockers).not.toContain("undisposed_recommendations");
  });

  // ───────────────────────── Correction Pass 02 ─────────────────────────

  async function bindTdsState(
    state: "PRESENT" | "NONE" | "UNAVAILABLE",
  ): Promise<void> {
    runtime.oa!.cycleServices.pilotLifecycle.bindTrajectoryDecisionSupportStateResolver?.(
      async () => state,
    );
  }

  it("CP02-T1 — TDS UNAVAILABLE + ACW opt:trajectory → finalization blocked; not Work/PT", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp02t1");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp02t1aaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
      extraRelated: ["opt:trajectory:governed"],
    });
    await bindTdsState("UNAVAILABLE");

    // Classification: NOT Work.
    expect(
      projectCycleWorkRecommendations({
        items: await epistemicItems(projectId),
        cycleInstanceId,
        fallbackCycleInstanceId: cycleInstanceId,
        trajectoryDecisionSupportState: "UNAVAILABLE",
      }),
    ).toHaveLength(0);
    expect(
      selectActiveWorkRecommendationCandidates({
        items: await epistemicItems(projectId),
        cycleInstanceId,
        trajectoryDecisionSupportState: "UNAVAILABLE",
      }).acwIds,
    ).not.toContain(acwId);
    // Classification: NOT PT fuel either (PRESENT-only) — Work derive empty.
    expect(
      deriveUndisposedRecommendations(await epistemicItems(projectId), cycleInstanceId, {
        trajectoryDecisionSupportState: "UNAVAILABLE",
      }),
    ).toHaveLength(0);

    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    if (!assessed.ok) throw new Error("assess failed");
    expect(assessed.assessment.blockers).toContain("undisposed_recommendations");
    expect(assessed.assessment.canComplete).toBe(false);
    const detail =
      assessed.assessment.obligations.find((o) => o.family === "blockers")
        ?.detail ?? "";
    expect(detail).toContain(recommendationClassificationUnavailableRef(acwId));
  });

  it("CP02-T2 — Journal Work projection unchanged under UNAVAILABLE", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp02t2");
    await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp02t2aaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
      extraRelated: ["opt:trajectory:bounded"],
    });
    expect(
      projectCycleWorkRecommendations({
        items: await epistemicItems(projectId),
        cycleInstanceId,
        fallbackCycleInstanceId: cycleInstanceId,
        trajectoryDecisionSupportState: "UNAVAILABLE",
      }),
    ).toHaveLength(0);
  });

  it("CP02-T3 — findActiveWorkRecommendationSubject skips UNAVAILABLE+opt:trajectory", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp02t3");
    await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp02t3aaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
      extraRelated: ["opt:trajectory:governed"],
    });
    // Force real TDS path to UNAVAILABLE (subject lookup rebinds its own resolver).
    const spy = vi
      .spyOn(runtime.oa!.cycleServices.getCurrentTrajectory, "execute")
      .mockResolvedValue({
        ok: false,
        error: { detailCode: "PERSISTENCE_FAILURE" },
      } as never);
    try {
      expect(
        selectActiveWorkRecommendationCandidates({
          items: await epistemicItems(projectId),
          cycleInstanceId,
          trajectoryDecisionSupportState: "UNAVAILABLE",
        }).acwIds,
      ).toHaveLength(0);
      const subject = await findActiveWorkRecommendationSubject({
        oa: runtime.oa!,
        projectId,
      });
      expect(subject).toEqual({ ok: true, kind: "none" });
    } finally {
      spy.mockRestore();
    }
  });

  it("CP02-T4 — TDS NONE → Work blocker only; no classification-unavailable sentinel", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp02t4");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp02t4aaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
      extraRelated: ["opt:trajectory:governed"],
    });
    await bindTdsState("NONE");
    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    if (!assessed.ok) throw new Error("assess failed");
    expect(assessed.assessment.blockers).toContain("undisposed_recommendations");
    expect(assessed.assessment.canComplete).toBe(false);
    const detail =
      assessed.assessment.obligations.find((o) => o.family === "blockers")
        ?.detail ?? "";
    expect(detail).toContain(acwId);
    expect(detail).not.toContain(
      recommendationClassificationUnavailableRef(acwId),
    );
  });

  it("CP02-T5 — TDS PRESENT → 0 Work blocker and 0 unavailable sentinel", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp02t5");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp02t5aaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
      extraRelated: ["opt:trajectory:governed"],
    });
    await bindTdsState("PRESENT");
    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    if (!assessed.ok) throw new Error("assess failed");
    const detail =
      assessed.assessment.obligations.find((o) => o.family === "blockers")
        ?.detail ?? "";
    expect(detail).not.toContain(acwId);
    expect(detail).not.toContain(
      recommendationClassificationUnavailableRef(acwId),
    );
    expect(
      deriveRecommendationClassificationUnavailableRefs(
        await epistemicItems(projectId),
        cycleInstanceId,
        "PRESENT",
      ),
    ).toEqual([]);
  });

  it("CP02-T6 — plain ACW under UNAVAILABLE remains normal Work blocker", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp02t6");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp02t6aaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    await bindTdsState("UNAVAILABLE");
    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    if (!assessed.ok) throw new Error("assess failed");
    expect(assessed.assessment.blockers).toContain("undisposed_recommendations");
    const detail =
      assessed.assessment.obligations.find((o) => o.family === "blockers")
        ?.detail ?? "";
    expect(detail).toContain(acwId);
    expect(detail).not.toContain(
      recommendationClassificationUnavailableRef(acwId),
    );
  });

  it("CP02-T7 — mixed plain Work + uncertain opt:trajectory under UNAVAILABLE", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp02t7");
    const plainId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp02t7plainaaaaaaaaa",
      statement: ACW_STATEMENT_A,
    });
    const ptId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp02t7ptaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
      extraRelated: ["opt:trajectory:bounded"],
    });
    await bindTdsState("UNAVAILABLE");
    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    if (!assessed.ok) throw new Error("assess failed");
    expect(assessed.assessment.canComplete).toBe(false);
    const detail =
      assessed.assessment.obligations.find((o) => o.family === "blockers")
        ?.detail ?? "";
    expect(detail).toContain(plainId);
    expect(detail).toContain(recommendationClassificationUnavailableRef(ptId));
    expect(detail).not.toContain(
      recommendationClassificationUnavailableRef(plainId),
    );
  });

  it("CP02-T8 — transient: UNAVAILABLE sentinel disappears when TDS becomes NONE", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp02t8");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp02t8aaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
      extraRelated: ["opt:trajectory:governed"],
    });
    await bindTdsState("UNAVAILABLE");
    const first = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    if (!first.ok) throw new Error("assess failed");
    expect(
      first.assessment.obligations.find((o) => o.family === "blockers")?.detail,
    ).toContain(recommendationClassificationUnavailableRef(acwId));

    await bindTdsState("NONE");
    const second = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    if (!second.ok) throw new Error("assess failed");
    const detail =
      second.assessment.obligations.find((o) => o.family === "blockers")
        ?.detail ?? "";
    expect(detail).not.toContain(
      recommendationClassificationUnavailableRef(acwId),
    );
    expect(detail).toContain(acwId);
    expect(second.assessment.canComplete).toBe(false);
  });

  it("CP02-T9 — finalize front door consumes same canComplete=false assessment", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp02t9");
    const acwId = await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp02t9aaaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
      extraRelated: ["opt:trajectory:governed"],
    });
    await bindTdsState("UNAVAILABLE");
    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    if (!assessed.ok) throw new Error("assess failed");
    expect(assessed.assessment.canComplete).toBe(false);
    // Call graph: finalize → assessFinalizationSnapshot →
    // loadUndisposedRecommendationRefs → classification-unavailable sentinel
    // → assessFinalizationObligations.canComplete=false → finalize refuses.
    expect(
      assessed.assessment.obligations.find((o) => o.family === "blockers")
        ?.detail,
    ).toContain(recommendationClassificationUnavailableRef(acwId));
    const cycles = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cycles.find((c) => c.cycleInstanceId === cycleInstanceId)?.status).toBe(
      "active",
    );
  });

  it("CP02-T10 — epistemic unreadability still yields recommendation_source_unreadable", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp02t10");
    await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp02t10aaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
      extraRelated: ["opt:trajectory:governed"],
    });
    const spy = vi
      .spyOn(runtime.oa!.cycleServices.epistemic, "listByProject")
      .mockRejectedValue(new Error("epistemic down"));
    try {
      const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
        cycleInstanceId,
        projectId,
      });
      if (!assessed.ok) throw new Error("assess failed");
      expect(assessed.assessment.canComplete).toBe(false);
      expect(assessed.assessment.blockers).toContain("undisposed_recommendations");
      expect(
        assessed.assessment.obligations.find((o) => o.family === "blockers")
          ?.detail,
      ).toContain("recommendation_source_unreadable");
    } finally {
      spy.mockRestore();
    }
  });

  it("CP02-T11 — Lifecycle Recommendation alone never becomes CP02 classification blocker", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp02t11");
    // Source alone is enough for isLifecycleRecommendationItem; avoid inventing
    // a full EpistemicLifecycleRecommendation payload in this oracle.
    await runtime.oa!.cycleServices.updateEpistemicState.execute({
      projectId,
      createdBy: LOCAL_PILOTE_ACTOR,
      items: [
        {
          epistemicItemId: "epi:lr:cp02t11aaaaaaaaaaaaaaa",
          type: "Recommendation",
          statement: "NEXT_CYCLE",
          status: "active",
          source: "lifecycle-recommendation:nora",
          relatedObjects: [projectId, cycleInstanceId],
        },
      ],
    });
    await bindTdsState("UNAVAILABLE");
    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    if (!assessed.ok) throw new Error("assess failed");
    const detail =
      assessed.assessment.obligations.find((o) => o.family === "blockers")
        ?.detail ?? "";
    expect(detail).not.toContain("recommendation_classification_unavailable:");
  });

  it("CP02-T12 — UNAVAILABLE path creates ZERO HD / DecisionRef / POS / PT / EC / Attempt", async () => {
    const { projectId, cycleInstanceId } = await seedCycle("cp02t12");
    await seedAcwRecommendation({
      projectId,
      cycleInstanceId,
      id: "epi:acw:cp02t12aaaaaaaaaaaaa",
      statement: ACW_STATEMENT_A,
      extraRelated: ["opt:trajectory:governed"],
    });
    const trajBefore = await trajectorySnapshot(projectId);
    const hdBefore = await hdCount(projectId);
    await bindTdsState("UNAVAILABLE");
    const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
      cycleInstanceId,
      projectId,
    });
    if (!assessed.ok) throw new Error("assess failed");
    expect(assessed.assessment.canComplete).toBe(false);
    expect(await hdCount(projectId)).toBe(hdBefore);
    const items = await epistemicItems(projectId);
    expect(items.filter((i) => i.type === "DecisionRef")).toHaveLength(0);
    expect(
      items.filter(
        (i) =>
          i.type === "Observation" &&
          (i.source?.startsWith("optset:") ||
            (i.relatedObjects ?? []).some((r) => r.startsWith("optset:"))),
      ),
    ).toHaveLength(0);
    expect(await trajectorySnapshot(projectId)).toEqual(trajBefore);
    expect(listProposalsForProject(projectId)).toHaveLength(0);
  });
});

describe("MD-WR-04 / currentness pure gates", () => {
  it("MX-TDS — PT decided without replan → no exposure; replan/requiresHD → expose", () => {
    expect(
      shouldExposeTrajectoryDecisionSupport({
        cycleInstanceId: "cyc:1",
        trajectoryReadOk: true,
        decidedByDecisionRef: "dec:pt",
        recoveryReadOk: true,
        recommendationKind: "recover",
        requiresHumanDecision: false,
      }),
    ).toEqual({ expose: false, reason: "pt_decided_no_replan" });

    expect(
      shouldExposeTrajectoryDecisionSupport({
        cycleInstanceId: "cyc:1",
        trajectoryReadOk: true,
        decidedByDecisionRef: "dec:pt",
        recoveryReadOk: true,
        recommendationKind: "replan",
        requiresHumanDecision: false,
      }).expose,
    ).toBe(true);

    expect(
      shouldExposeTrajectoryDecisionSupport({
        cycleInstanceId: "cyc:1",
        trajectoryReadOk: true,
        decidedByDecisionRef: null,
        recoveryReadOk: true,
      }).expose,
    ).toBe(true);
  });

  it("MX-CUR — candidate_trajectory decidedByDecisionRef cuts off prior PT Recs; Work dates unaffected conceptually", () => {
    const cutoff = resolveTrajectoryRecommendationCutoffFromDecisions({
      decisions: [
        {
          decisionId: "dec:gf-trj:1",
          status: "accepted",
          effectiveAt: "2026-10-02T20:25:44.944Z",
          decisionBasis: {
            sourceType: "candidate_trajectory",
            sourceRef: "trj:x",
            sourceDigest: "d",
            projectId: "prj:x",
          },
        } as never,
      ],
      cycleInstanceId: "cyc:trj-1",
      decidedByDecisionRef: "dec:gf-trj:1",
    });
    expect(cutoff).toBe("2026-10-02T20:25:44.944Z");
    expect(
      classifyAcwRecommendationCurrentness({
        createdAt: "2026-10-02T19:00:00.000Z",
        ignoreCreatedAtOnOrBefore: cutoff,
      }),
    ).toBe("HISTORICAL");
    expect(
      classifyAcwRecommendationCurrentness({
        createdAt: "2026-10-03T07:00:00.000Z",
        ignoreCreatedAtOnOrBefore: cutoff,
      }),
    ).toBe("CURRENT");
  });
});


// ───────────────────────── Correction Pass 01 (pure) ─────────────────────────

const CP_PROJECT = "prj:cp01";
const CP_CYCLE = "cyc:cp01";
const CP_OPTSET = "optset:w2-wr-cp01";
const CP_ACW = "epi:acw:cp01aaaaaaaaaaaaaaaaaa";
const CP_OPTIONS = [
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
];

function workBasis(overrides: Partial<DecisionBasis> = {}): DecisionBasis {
  return {
    sourceType: "work_recommendation",
    sourceRef: CP_OPTSET,
    sourceDigest: computeDecisionBasisSourceDigest({ a: 1 }),
    projectId: CP_PROJECT,
    proposalContext: { lpsId: "lps:1", lpsVersion: 1 },
    workRecommendationContext: {
      workRecommendationEpistemicItemId: CP_ACW,
      optionSetRef: CP_OPTSET,
      optionRefs: [...CP_OPTIONS],
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      optionSetDigest: "d".repeat(64),
    },
    executionBasis: {},
    ...overrides,
  };
}

function acwItem(
  id: string,
  related: string[] = [],
  overrides: Record<string, unknown> = {},
) {
  return {
    epistemicItemId: id,
    type: "Recommendation",
    status: "active",
    source: "active-cycle-work:nora",
    statement: "Travail ACW",
    createdAt: "2026-10-03T08:00:00.000Z",
    relatedObjects: [CP_PROJECT, CP_CYCLE, ...related],
    ...overrides,
  };
}

function carrierItem(acwId = CP_ACW) {
  return {
    epistemicItemId: "epi:optset-rec-cp01",
    type: "Recommendation",
    status: "active",
    source: CP_OPTSET,
    statement: "Travail ACW",
    createdAt: "2026-10-03T08:01:00.000Z",
    relatedObjects: [CP_PROJECT, CP_OPTSET, acwId, CP_CYCLE],
  };
}

function decisionRefFor(...related: string[]) {
  return {
    epistemicItemId: "epi:decref-cp01",
    type: "DecisionRef",
    status: "active",
    source: "dec:w2-wr:cp01",
    statement: "Décision",
    relatedObjects: [CP_PROJECT, "dec:w2-wr:cp01", ...related],
  };
}

describe("Correction Pass 01 — DecisionBasis / TDS tri-state / finalization / currentness", () => {
  it("CP01-T3 — validateDecisionBasis accepts a coherent work basis and refuses sourceRef/selection drift", () => {
    expect(validateDecisionBasis(workBasis())).toBeNull();
    expect(
      validateDecisionBasis(workBasis({ sourceRef: "optset:other" }))?.reason,
    ).toBe("work_recommendation_source_ref_mismatch");
    const ctx = workBasis().workRecommendationContext!;
    expect(
      validateDecisionBasis(
        workBasis({
          sourceRef: "prop:f2:1",
          workRecommendationContext: { ...ctx, optionSetRef: "prop:f2:1" },
        }),
      )?.reason,
    ).toBe("work_recommendation_source_ref_is_proposal_id");
    expect(
      validateDecisionBasis(
        workBasis({
          workRecommendationContext: { ...ctx, selectedOptionRef: "opt:nope" },
        }),
      )?.reason,
    ).toBe("work_recommendation_selected_option_not_presented");
  });

  it("CP01-T4 — work basis requires context and forbids trajectoryContext / candidateTrajectoryContext", () => {
    expect(
      validateDecisionBasis(workBasis({ workRecommendationContext: undefined }))
        ?.reason,
    ).toBe("work_recommendation_context_required");
    expect(
      validateDecisionBasis(
        workBasis({
          trajectoryContext: {
            trajectoryId: "trj:x",
            candidateVersion: 1,
            optionRefs: ["a"],
            selectedOptionRef: "a",
          },
        }),
      )?.reason,
    ).toBe("work_recommendation_forbids_trajectory_context");
    expect(
      validateDecisionBasis(
        workBasis({
          candidateTrajectoryContext: {} as never,
        }),
      )?.reason,
    ).toBe("work_recommendation_forbids_candidate_trajectory_context");
  });

  it("CP01-T5 — proposal / trajectory_option / candidate_trajectory forbid workRecommendationContext", () => {
    const ctx = workBasis().workRecommendationContext!;
    for (const sourceType of [
      "proposal",
      "trajectory_option",
      "candidate_trajectory",
    ] as const) {
      const violation = validateDecisionBasis({
        ...workBasis(),
        sourceType,
        workRecommendationContext: ctx,
      });
      expect(violation?.reason).toBe(`${sourceType}_forbids_work_recommendation_context`);
    }
    // A plain proposal basis is still valid.
    expect(
      validateDecisionBasis({
        ...workBasis(),
        sourceType: "proposal",
        sourceRef: "prop:f2:1",
        workRecommendationContext: undefined,
      }),
    ).toBeNull();
  });

  it("CP01-T6 — sourceDigest is deterministic and bound to the ACW identity", () => {
    const a = computeDecisionBasisSourceDigest({
      decisionSubjectMode: "work_recommendation",
      optionSetRef: CP_OPTSET,
      workRecommendationEpistemicItemId: CP_ACW,
    });
    expect(a).toBe(
      computeDecisionBasisSourceDigest({
        workRecommendationEpistemicItemId: CP_ACW,
        optionSetRef: CP_OPTSET,
        decisionSubjectMode: "work_recommendation",
      }),
    );
    expect(a).not.toBe(
      computeDecisionBasisSourceDigest({
        decisionSubjectMode: "work_recommendation",
        optionSetRef: CP_OPTSET,
        workRecommendationEpistemicItemId: "epi:acw:other",
      }),
    );
  });

  it("CP01-T7 — a work HD never cuts off PT Recommendation currentness", () => {
    const workHd = {
      decisionId: "dec:w2-wr:cp01",
      status: "accepted",
      effectiveAt: "2026-10-03T09:00:00.000Z",
      cycleInstanceId: CP_CYCLE,
      decisionBasis: workBasis(),
    } as never;
    expect(
      resolveTrajectoryRecommendationCutoffFromDecisions({
        decisions: [workHd],
        cycleInstanceId: CP_CYCLE,
        decidedByDecisionRef: null,
      }),
    ).toBeNull();
  });

  it("CP01-T8 — Blocker 2: TRAJECTORY_NOT_FOUND = no current PT (undecided, may expose)", async () => {
    const oa = {
      cycleServices: {
        getCurrentTrajectory: {
          execute: async () => ({
            ok: false,
            error: { detailCode: "TRAJECTORY_NOT_FOUND" },
          }),
        },
      },
    } as never;
    expect(
      await readCurrentTrajectoryDecidedByRef({ oa, projectId: CP_PROJECT }),
    ).toEqual({
      kind: "ok",
      hasCurrentTrajectory: false,
      decidedByDecisionRef: null,
    });
  });

  it("CP01-T9 — Blocker 2: other failure / thrown error → unavailable; decided ref is surfaced", async () => {
    const mk = (execute: () => Promise<unknown>) =>
      ({ cycleServices: { getCurrentTrajectory: { execute } } }) as never;
    expect(
      await readCurrentTrajectoryDecidedByRef({
        oa: mk(async () => ({ ok: false, error: { detailCode: "PERSISTENCE_FAILURE" } })),
        projectId: CP_PROJECT,
      }),
    ).toEqual({ kind: "unavailable" });
    expect(
      await readCurrentTrajectoryDecidedByRef({
        oa: mk(async () => {
          throw new Error("boom");
        }),
        projectId: CP_PROJECT,
      }),
    ).toEqual({ kind: "unavailable" });
    expect(
      await readCurrentTrajectoryDecidedByRef({
        oa: mk(async () => ({
          ok: true,
          trajectory: { decidedByDecisionRef: " dec:pt:1 " },
        })),
        projectId: CP_PROJECT,
      }),
    ).toEqual({
      kind: "ok",
      hasCurrentTrajectory: true,
      decidedByDecisionRef: "dec:pt:1",
    });
  });

  it("CP01-T11 — Journal tri-state: ACW+opt:trajectory is PT fuel (PRESENT) / fail-closed (UNAVAILABLE) / Work (NONE)", () => {
    const items = [acwItem("epi:acw:ptfuel", ["opt:trajectory:governed"])];
    const run = (state: "PRESENT" | "NONE" | "UNAVAILABLE") =>
      projectCycleWorkRecommendations({
        items,
        cycleInstanceId: CP_CYCLE,
        fallbackCycleInstanceId: CP_CYCLE,
        trajectoryDecisionSupportState: state,
      });
    expect(run("PRESENT")).toHaveLength(0);
    expect(run("UNAVAILABLE")).toHaveLength(0);
    expect(run("NONE")).toHaveLength(1);
  });

  it("CP01-T12 — Journal tri-state: plain ACW without opt:trajectory stays Work in every state", () => {
    for (const state of ["PRESENT", "NONE", "UNAVAILABLE"] as const) {
      expect(
        projectCycleWorkRecommendations({
          items: [acwItem("epi:acw:plain")],
          cycleInstanceId: CP_CYCLE,
          fallbackCycleInstanceId: CP_CYCLE,
          trajectoryDecisionSupportState: state,
        }),
      ).toHaveLength(1);
    }
  });

  it("CP01-T13 — chat-first candidate selection: UNAVAILABLE keeps plain ACW, drops opt:trajectory ACW", () => {
    const items = [
      acwItem("epi:acw:plain"),
      acwItem("epi:acw:ptfuel", ["opt:trajectory:bounded"]),
    ] as never;
    expect(
      selectActiveWorkRecommendationCandidates({
        items,
        cycleInstanceId: CP_CYCLE,
        trajectoryDecisionSupportState: "UNAVAILABLE",
      }).acwIds,
    ).toEqual(["epi:acw:plain"]);
    expect(
      selectActiveWorkRecommendationCandidates({
        items,
        cycleInstanceId: CP_CYCLE,
        trajectoryDecisionSupportState: "NONE",
      }).acwIds.slice().sort(),
    ).toEqual(["epi:acw:plain", "epi:acw:ptfuel"]);
  });

  it("CP01-T15 — finalization: unbound ACW = 1 blocker; seal dedupes to 1 (ACW identity); disposed = 0", () => {
    const unbound = deriveUndisposedRecommendations([acwItem(CP_ACW)], CP_CYCLE, {
      trajectoryDecisionSupportState: "NONE",
    });
    expect(unbound).toHaveLength(1);
    expect(unbound[0]!.workRecommendationEpistemicItemId).toBe(CP_ACW);

    const sealed = deriveUndisposedRecommendations(
      [acwItem(CP_ACW), carrierItem()],
      CP_CYCLE,
      { trajectoryDecisionSupportState: "NONE" },
    );
    expect(sealed).toHaveLength(1);
    expect(sealed[0]!.workRecommendationEpistemicItemId).toBe(CP_ACW);
    expect(sealed[0]!.optionSetRef).toBe(CP_OPTSET);

    // Disposed by optset ref, by ACW id alone, and by status.
    for (const decisionRef of [
      decisionRefFor(CP_OPTSET, CP_ACW),
      decisionRefFor(CP_ACW),
    ]) {
      expect(
        deriveUndisposedRecommendations(
          [acwItem(CP_ACW), carrierItem(), decisionRef],
          CP_CYCLE,
          { trajectoryDecisionSupportState: "NONE" },
        ),
      ).toHaveLength(0);
    }
    expect(
      deriveUndisposedRecommendations(
        [
          acwItem(CP_ACW, [], { status: "resolved" }),
          { ...carrierItem(), status: "resolved" },
        ],
        CP_CYCLE,
        { trajectoryDecisionSupportState: "NONE" },
      ),
    ).toHaveLength(0);
  });

  it("CP01-T16 — finalization tri-state: Lifecycle never; PT fuel never when PRESENT; UNAVAILABLE fail-closed; NONE blocks", () => {
    const lifecycle = {
      epistemicItemId: "epi:lr-next",
      type: "Recommendation",
      status: "active",
      source: "lifecycle-recommendation:nora",
      statement: "NEXT_CYCLE",
      lifecycleRecommendation: { intent: "NEXT_CYCLE", basisFingerprint: "fp" },
      relatedObjects: [CP_PROJECT, CP_CYCLE],
    };
    const ptFuel = acwItem("epi:acw:ptfuel", ["opt:trajectory:governed"]);
    const plain = acwItem("epi:acw:plain");
    const count = (
      items: unknown[],
      state: "PRESENT" | "NONE" | "UNAVAILABLE",
    ) =>
      deriveUndisposedRecommendations(items as never, CP_CYCLE, {
        trajectoryDecisionSupportState: state,
      }).length;

    for (const state of ["PRESENT", "NONE", "UNAVAILABLE"] as const) {
      expect(count([lifecycle], state)).toBe(0);
      expect(count([plain], state)).toBe(1);
    }
    expect(count([ptFuel], "PRESENT")).toBe(0);
    expect(count([ptFuel], "UNAVAILABLE")).toBe(0);
    expect(count([ptFuel], "NONE")).toBe(1);
    // Omitted state = UNAVAILABLE (fail-closed default).
    expect(
      deriveUndisposedRecommendations([ptFuel] as never, CP_CYCLE),
    ).toHaveLength(0);
  });

  it("CP01-T17 — Blocker 4: shared PT cutoff feeds decidedByDecisionRef; unreadable trajectory fails closed", async () => {
    const candidateHd = {
      decisionId: "dec:gf-trj:cp01",
      status: "accepted",
      effectiveAt: "2026-10-02T20:25:44.944Z",
      decisionBasis: {
        sourceType: "candidate_trajectory",
        sourceRef: "trj:x",
        sourceDigest: "d",
        projectId: CP_PROJECT,
      },
    };
    const ports = (traj: () => Promise<unknown>) =>
      ({
        decisionServices: { decisions: { listByProject: async () => [candidateHd] } },
        cycleServices: { getCurrentTrajectory: { execute: traj } },
      }) as never;

    const ok = await resolveProjectTrajectoryRecommendationCutoff({
      oa: ports(async () => ({
        ok: true,
        trajectory: { decidedByDecisionRef: "dec:gf-trj:cp01" },
      })),
      projectId: CP_PROJECT,
      cycleInstanceId: CP_CYCLE,
    });
    expect(ok).toEqual({ ok: true, cutoff: "2026-10-02T20:25:44.944Z" });

    const bad = await resolveProjectTrajectoryRecommendationCutoff({
      oa: ports(async () => ({ ok: false, error: { detailCode: "PERSISTENCE_FAILURE" } })),
      projectId: CP_PROJECT,
      cycleInstanceId: CP_CYCLE,
    });
    expect(bad).toEqual({ ok: false, reason: "trajectory_unreadable" });

    const none = await resolveProjectTrajectoryRecommendationCutoff({
      oa: ports(async () => ({ ok: false, error: { detailCode: "TRAJECTORY_NOT_FOUND" } })),
      projectId: CP_PROJECT,
      cycleInstanceId: CP_CYCLE,
    });
    expect(none).toEqual({ ok: true, cutoff: null });
  });

  it("CP01-T18 — source guards: no silent TDS catch in actions.ts; cutoff only computed via shared helper", () => {
    const root = path.resolve(__dirname, "../../features/project-assistant");
    const actions = fs.readFileSync(path.join(root, "actions.ts"), "utf8");
    expect(actions).not.toMatch(/trajectoryDecisionSupportOpen/);
    expect(actions).not.toMatch(/catch\s*\{\s*trajectoryDecisionSupport\w*\s*=\s*false/);

    const callers = [
      "f2/studioCognitiveContext.ts",
      "w2/resolveCurrentNoraTrajectoryRecommendation.ts",
    ];
    for (const rel of callers) {
      const src = fs.readFileSync(path.join(root, rel), "utf8");
      expect(src).toMatch(/resolveProjectTrajectoryRecommendationCutoff\(/);
      expect(src).not.toMatch(/resolveTrajectoryRecommendationCutoffFromDecisions\(\{/);
    }
  });
});
