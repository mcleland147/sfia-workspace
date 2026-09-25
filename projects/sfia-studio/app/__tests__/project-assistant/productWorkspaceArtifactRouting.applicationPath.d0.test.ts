/**
 * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 — deterministic Product Journey
 * + CR-PWR-01…04 corrections + Proposal→Evidence E2E.
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
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { revalidateSealedArtifactWriteMode } from "@/features/project-assistant/f3/prepareM3FromDecision";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { sealProposalExecutionBasis } from "@/features/project-assistant/w2/proposalSubjectIntegrity";
import {
  deriveProposalSubjectOptions,
  deriveProposalSubjectRecommendation,
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { governedExecuteAuthorizedContract } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
import { materializeProductOutcomeFromAttempt } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { deriveTrajectoryOptions } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  closedProposalIdsFromProposalDecisionRefs,
  readActiveProposalDecisionSubject,
} from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  registerLocalMorrisGateAuthority,
} from "@/lib/oa/decision";
import type { Digest } from "@/lib/oa/doctrine";
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  MemoryLaunchSafetyJournal,
  isStudioCursorRealEnabled,
} from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  ensureManagedRepoCloneSkeleton,
  listManagedRepoPathsUnderRoot,
} from "@/lib/oa/project";
import {
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { createLocalVerticalSliceServices } from "@/lib/vertical-slice-core";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_FIXED_NOW,
  W2_REGISTRY_ROOT,
  W2_SCHEMAS_ROOT,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const NATURAL_REQUEST = `Matérialise la note de cadrage de ce cycle. N'exécute rien : prépare la proposition pour ma décision.`;

const EXPECTED_PROJECT_ROOT = "projects/mini-cadrage-suivi-de-taches";
const EXPECTED_CYCLE_ROOT = `${EXPECTED_PROJECT_ROOT}/01-cadrage`;
const EXPECTED_TARGET = `${EXPECTED_CYCLE_ROOT}/note-de-cadrage.md`;
const IDENTITY = "acme/widget";
const BRANCH = "main";
const DIGEST_SEED =
  "sha256:cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc" as Digest;

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

describe("PRODUCT-PWR-01 deterministic workspace routing journey", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;
  let managedBase: string;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;
  let previousIdentity: string | undefined;
  let previousRemote: string | undefined;
  let previousBranch: string | undefined;
  let previousManaged: string | undefined;

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
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = IDENTITY;
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/widget.git";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = BRANCH;
    managedBase = fs.mkdtempSync(path.join(os.tmpdir(), "pwr-managed-"));
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("pwr-workspace-routing.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "pwr" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    try {
      fs.rmSync(managedBase, { recursive: true, force: true });
    } catch {
      /* ignore */
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

  async function seedFramingProject(input?: {
    idempotencyKey?: string;
    name?: string;
  }): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: input?.name ?? "Mini cadrage — Suivi de tâches",
      objective: "Cadrer le suivi de tâches",
      context: "Product Journey workspace routing reproof",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "PWR01",
      idempotencyKey: input?.idempotencyKey ?? "idem:pwr-workspace-1",
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

    const cycleInstanceId = `cyc:pwr-framing-${projectId.slice(-6)}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:framing",
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
      issuedAt: "2026-09-19T10:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("authority failed");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps1.ok).toBe(true);
    if (!lps1.ok) throw new Error("LPS unavailable");

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
      nowIso: () => "2026-09-19T10:01:00.000Z",
    });
    expect(obligation.ok).toBe(true);

    return { projectId, cycleInstanceId };
  }

  it("CA-PWR — auto workspace + CREATE mode when target absent", async () => {
    expect(NATURAL_REQUEST).not.toMatch(/__F2_/);
    expect(NATURAL_REQUEST).not.toMatch(/docs\//);

    const { projectId, cycleInstanceId } = await seedFramingProject();

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed: ${JSON.stringify(send)}`);

    expect(send.f2?.turnKind).toBe("f2_proposal");
    expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(send.f2?.proposal?.executionIntent?.targetPath).toBe(EXPECTED_TARGET);
    expect(send.f2?.proposal?.executionIntent?.artifactFileName).toBe(
      "note-de-cadrage.md",
    );
    expect(send.f2?.proposal?.executionIntent?.scopeIn).toEqual([
      EXPECTED_CYCLE_ROOT,
    ]);
    expect(send.f2?.proposal?.executionIntent?.artifactWriteMode).toBe("CREATE");
    expect(send.f2?.proposal?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );

    const sealed = sealProposalExecutionBasis(send.f2!.proposal!);
    expect(sealed.artifactWriteMode).toBe("CREATE");
    expect(sealed.targetPath).toBe(EXPECTED_TARGET);
    expect(sealed.projectWorkspaceRoot).toBe(EXPECTED_PROJECT_ROOT);
    expect(sealed.cycleWorkspaceRoot).toBe(EXPECTED_CYCLE_ROOT);

    const oa = runtime.oa!;
    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    const active = cycles.filter((c) => c.status === "active");
    expect(active.map((c) => c.cycleInstanceId)).toEqual([cycleInstanceId]);
  });

  it("CR-PWR-01 — proposedTargetPath ../x.md never salvages; no executable Proposal", async () => {
    const { enrichExecutionIntentFromBinding } = await import(
      "@/features/project-assistant/f2/activeCycleGovernedContinuation"
    );
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        targetPath: "../x.md",
        requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      },
      binding: {
        provider: "github",
        identity: IDENTITY,
        remoteUrl: "https://github.com/acme/widget.git",
        defaultBranch: BRANCH,
        pathRoot: EXPECTED_PROJECT_ROOT,
      },
      activeCycleTypeId: "cyc:framing",
    });
    expect(enriched.needsTargetClarification).toBe(true);
    expect(enriched.executionIntent?.targetPath ?? null).not.toBe("x.md");
    expect(JSON.stringify(enriched)).not.toMatch(
      /projects\/mini-cadrage-suivi-de-taches\/01-cadrage\/x\.md/,
    );

    const { projectId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-cr01-trav",
    });
    // Natural materialization without a salvageable leaf → clarification, never x.md
    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed`);
    // Fresh empty workspace → CREATE Proposal (path is server-composed, not ../x.md)
    expect(send.f2?.proposal?.executionIntent?.targetPath).toBe(EXPECTED_TARGET);
    expect(JSON.stringify(send)).not.toMatch(/\.\.\/x\.md/);
  });

  it("CR-PWR-02A — file exists WITHOUT exact Evidence → ASK (not UPDATE)", async () => {
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });
    const abs = path.join(repoRoot, EXPECTED_TARGET);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, "# orphan file — no Evidence\n", "utf8");

    const { projectId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-ask-no-ev",
    });

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed`);
    // Occupied workspace without durable ownership OR write-mode ASK — fail closed.
    expect(send.f2?.turnKind).toBe("f2_clarification");
    expect(send.f2?.proposal).toBeFalsy();
    expect(send.text ?? "").toMatch(
      /ASK|Evidence|appartenance|collision|ambigu|indisponible|CREATE|UPDATE/i,
    );
  });

  it("CR-PWR-02A — exact prior Evidence + file exists → Proposal UPDATE", async () => {
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });
    const abs = path.join(repoRoot, EXPECTED_TARGET);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, "# prior artifact\n", "utf8");

    const { projectId, cycleInstanceId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-update-ev",
    });
    void cycleInstanceId;
    const oa = runtime.oa!;
    // Same-deliverable Evidence: projectId + exact location + governed source.
    // Omit GCEC attempt/contract bindings so Pilot lifecycle does NOT mark
    // artifact obligation SATISFIED (UPDATE rematerialization still open).
    const reg = await oa.evidenceReviewServices.registerEvidence.execute({
      evidenceId: `ev:pwr-prior-${projectId}`,
      idempotencyKey: `idem:ev-pwr-prior-${projectId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      status: "available",
      location: EXPECTED_TARGET,
      digest: DIGEST_SEED,
      classification: "internal",
      storageMode: "metadata_only",
      bindings: {
        projectId,
      },
    });
    expect(reg.ok).toBe(true);

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed: ${JSON.stringify(send)}`);
    expect(send.f2?.turnKind).toBe("f2_proposal");
    expect(send.f2?.proposal?.executionIntent?.artifactWriteMode).toBe("UPDATE");
    expect(send.f2?.proposal?.executionIntent?.targetPath).toBe(EXPECTED_TARGET);
    const sealed = sealProposalExecutionBasis(send.f2!.proposal!);
    expect(sealed.artifactWriteMode).toBe("UPDATE");
  });

  it("CR-PWR-02B — managedRepoRootBase absent → ASK / no executable Proposal", async () => {
    delete process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    const { projectId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-no-base",
    });
    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed`);
    expect(send.f2?.turnKind).toBe("f2_clarification");
    expect(send.f2?.proposal).toBeFalsy();
    expect(send.text ?? "").toMatch(/indisponible|UNKNOWN|managed|repository/i);
  });

  it("CR-PWR-02B — managed base present but clone absent → ASK", async () => {
    const clone = path.join(managedBase, IDENTITY.replace("/", "__"));
    fs.rmSync(clone, { recursive: true, force: true });
    const { projectId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-no-clone",
    });
    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed`);
    expect(send.f2?.turnKind).toBe("f2_clarification");
    expect(send.f2?.proposal).toBeFalsy();
  });

  it("CR-PWR-03 — inventory null is NOT absent_ok", () => {
    const inventory = listManagedRepoPathsUnderRoot({
      identity: IDENTITY,
      pathRoot: EXPECTED_PROJECT_ROOT,
      managedRepoRootBase: "/tmp/sfia-pwr-nonexistent-base-xyz",
    });
    expect(inventory).toBeNull();
    // Domain contract: caller must not treat null as [].
    expect(inventory === null).toBe(true);
    expect(inventory === null ? "unknown_inventory" : "absent_ok").toBe(
      "unknown_inventory",
    );
  });

  it("CR-PWR-03 — listProjects fails + occupied workspace → ASK", async () => {
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });
    fs.mkdirSync(path.join(repoRoot, EXPECTED_CYCLE_ROOT), { recursive: true });
    fs.writeFileSync(
      path.join(repoRoot, EXPECTED_TARGET),
      "# occupied\n",
      "utf8",
    );

    const { projectId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-list-fail",
    });
    const oa = runtime.oa!;
    const spy = vi
      .spyOn(oa.projectServices.listProjects, "execute")
      .mockResolvedValue({
        ok: false,
        error: {
          code: "INTERNAL",
          detailCode: "LIST_FAILED",
          message: "forced listProjects failure",
        },
      } as never);

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    spy.mockRestore();
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed`);
    expect(send.f2?.turnKind).toBe("f2_clarification");
    expect(send.f2?.proposal).toBeFalsy();
  });

  it("CR-PWR-03 — Evidence read fails + occupied workspace → ASK / fail-closed", async () => {
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });
    fs.mkdirSync(path.join(repoRoot, EXPECTED_CYCLE_ROOT), { recursive: true });
    fs.writeFileSync(
      path.join(repoRoot, EXPECTED_TARGET),
      "# occupied\n",
      "utf8",
    );

    const { projectId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-ev-fail",
    });
    const oa = runtime.oa!;
    const spy = vi
      .spyOn(oa.evidenceReviewServices.repository, "listByProject")
      .mockRejectedValue(new Error("forced evidence read failure"));

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    spy.mockRestore();
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed`);
    expect(send.f2?.proposal).toBeFalsy();
    expect(["f2_clarification", "f2_blocked"]).toContain(send.f2?.turnKind);
  });

  it("CR-PWR-02C TOCTOU — CREATE/UPDATE + probe null STOP; null mode STOP on automatic", () => {
    const createUnknown = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "CREATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: "/tmp/sfia-pwr-missing-base",
    });
    expect(createUnknown.ok).toBe(false);
    if (createUnknown.ok) return;
    expect(createUnknown.code).toBe(
      "ARTIFACT_WRITE_MODE_REVALIDATION_UNAVAILABLE",
    );

    const updateUnknown = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "UPDATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: "/tmp/sfia-pwr-missing-base",
    });
    expect(updateUnknown.ok).toBe(false);
    if (updateUnknown.ok) return;
    expect(updateUnknown.code).toBe(
      "ARTIFACT_WRITE_MODE_REVALIDATION_UNAVAILABLE",
    );

    const nullMode = revalidateSealedArtifactWriteMode({
      artifactWriteMode: null,
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: managedBase,
      requireResolvedWriteMode: true,
    });
    expect(nullMode.ok).toBe(false);
    if (nullMode.ok) return;
    expect(nullMode.code).toBe("ARTIFACT_WRITE_MODE_UNRESOLVED");
  });

  it("CR-PWR-02 TOCTOU — CREATE stale when file appears; UPDATE stale when file disappears", () => {
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });
    const abs = path.join(repoRoot, EXPECTED_TARGET);

    const createOk = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "CREATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: managedBase,
    });
    expect(createOk.ok).toBe(true);

    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, "# appeared\n", "utf8");
    const createStale = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "CREATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: managedBase,
    });
    expect(createStale.ok).toBe(false);
    if (createStale.ok) return;
    expect(createStale.code).toBe("ARTIFACT_WRITE_MODE_STALE_CREATE");

    const updateOk = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "UPDATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: managedBase,
    });
    expect(updateOk.ok).toBe(true);

    fs.rmSync(abs, { force: true });
    const updateStale = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "UPDATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: managedBase,
    });
    expect(updateStale.ok).toBe(false);
    if (updateStale.ok) return;
    expect(updateStale.code).toBe("ARTIFACT_WRITE_MODE_STALE_UPDATE");

    const ask = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "ASK",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: managedBase,
    });
    expect(ask.ok).toBe(false);
    if (ask.ok) return;
    expect(ask.code).toBe("ARTIFACT_WRITE_MODE_ASK");
  });

  it("CR-PWR-02 — ASK/null blocks pursue on automatic docs_write options", () => {
    const askSealed = sealProposalExecutionBasis({
      proposalId: "prop:ask",
      status: "DECISION_REQUIRED",
      rephrasedRequest: "mat",
      objective: "mat",
      cycleTypeId: "cyc:framing",
      recommendedProfile: "Standard",
      rationale: "t",
      scope: EXPECTED_CYCLE_ROOT,
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "artifact",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "x",
      contextSnapshot: {
        projectId: "prj:x",
        lpsId: "lps:x",
        lpsVersion: 1,
        doctrineDigest: "sha256:aa",
        activeCycleInstanceId: "cyc:x",
      },
      processLocalNotice: "n",
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      executionIntent: {
        intentKind: "docs_write",
        targetPath: EXPECTED_TARGET,
        artifactFileName: "note-de-cadrage.md",
        artifactWriteMode: "ASK",
        scopeIn: [EXPECTED_CYCLE_ROOT],
        requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      },
    } as never);
    const opts = deriveProposalSubjectOptions({
      sealed: askSealed,
      proposalId: "prop:ask",
    });
    const pursue = opts.find((o) => o.optionRef === PROPOSAL_SUBJECT_PURSUE_REF);
    expect(pursue?.reservations).toContain("ARTIFACT_WRITE_MODE_ASK");
    const rec = deriveProposalSubjectRecommendation({
      sealed: askSealed,
      proposalId: "prop:ask",
    });
    expect(rec.recommendedOptionRef).toBe(PROPOSAL_SUBJECT_AMEND_REF);

    const nullSealed = sealProposalExecutionBasis({
      proposalId: "prop:null",
      status: "DECISION_REQUIRED",
      rephrasedRequest: "mat",
      objective: "mat",
      cycleTypeId: "cyc:framing",
      recommendedProfile: "Standard",
      rationale: "t",
      scope: EXPECTED_CYCLE_ROOT,
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "artifact",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "x",
      contextSnapshot: {
        projectId: "prj:x",
        lpsId: "lps:x",
        lpsVersion: 1,
        doctrineDigest: "sha256:aa",
        activeCycleInstanceId: "cyc:x",
      },
      processLocalNotice: "n",
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      executionIntent: {
        intentKind: "docs_write",
        targetPath: EXPECTED_TARGET,
        artifactFileName: "note-de-cadrage.md",
        artifactWriteMode: null,
        scopeIn: [EXPECTED_CYCLE_ROOT],
        requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      },
    } as never);
    const nullOpts = deriveProposalSubjectOptions({
      sealed: nullSealed,
      proposalId: "prop:null",
    });
    const nullPursue = nullOpts.find(
      (o) => o.optionRef === PROPOSAL_SUBJECT_PURSUE_REF,
    );
    expect(nullPursue?.reservations).toContain("ARTIFACT_WRITE_MODE_ASK");
  });

  it("CR-PWR-03 — second Project same title cannot silently write into first workspace", async () => {
    const first = await seedFramingProject({ idempotencyKey: "idem:pwr-c1" });
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });
    fs.mkdirSync(path.join(repoRoot, EXPECTED_CYCLE_ROOT), { recursive: true });
    fs.writeFileSync(
      path.join(repoRoot, EXPECTED_TARGET),
      "# first project note\n",
      "utf8",
    );

    const second = await seedFramingProject({
      idempotencyKey: "idem:pwr-c2",
      name: "Mini cadrage — Suivi de tâches",
    });
    expect(second.projectId).not.toBe(first.projectId);

    const send = await projectAssistantSendAction({
      projectId: second.projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed`);
    expect(send.f2?.turnKind).toBe("f2_clarification");
    expect(send.f2?.proposal).toBeFalsy();

    const oa = runtime.oa!;
    const cycles = await oa.cycleServices.cycles.listByProject(second.projectId);
    const active = cycles.filter((c) => c.status === "active");
    expect(active).toHaveLength(1);
    expect(active[0]!.cycleInstanceId).toBe(second.cycleInstanceId);
  });
});

describe("CR-PWR-01…04 + DETERMINISTIC E2E Proposal→Evidence", () => {
  let managedBase: string;
  let repoRoot: string;
  let baseHeadSha: string;
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

    const root = fs.mkdtempSync(path.join(os.tmpdir(), "pwr-e2e-"));
    tempRoots.push(root);
    managedBase = path.join(root, "managed");
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
    ({ repoRoot, baseHeadSha } = initManagedGitRepo(managedBase, IDENTITY));

    const gitState = new FakeCursorGitExternalState({
      worktreeRoot: repoRoot,
      initialBranch: BRANCH,
      initialSha: baseHeadSha,
    });
    fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: repoRoot,
      pathAllowlist: [EXPECTED_CYCLE_ROOT],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
      gitState,
      content: "# Note de cadrage\n\nObjectif / Périmètre\n",
    });
    const safetyJournal = new MemoryLaunchSafetyJournal();

    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    runtime = getRuntimeApplicationService({
      registryRoot: W2_REGISTRY_ROOT,
      schemasRoot: W2_SCHEMAS_ROOT,
      nowIso: W2_FIXED_NOW,
      idSource: new SeededIdSource("pwr-e2e"),
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

  async function seedFramingForE2e(): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "Mini cadrage — Suivi de tâches",
      objective: "Cadrer le suivi de tâches",
      context: "Product Journey workspace routing E2E",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "PWRE2E",
      idempotencyKey: "idem:pwr-e2e-create",
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

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("LPS");
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

    const cycleInstanceId = `cyc:pwr-e2e-${projectId.slice(-6)}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:framing",
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
      issuedAt: "2026-09-19T10:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("auth");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("LPS1");
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
      nowIso: () => "2026-09-19T10:01:00.000Z",
    });
    expect(obligation.ok).toBe(true);
    return { projectId, cycleInstanceId };
  }

  it("DETERMINISTIC E2E — Proposal→HD→EC→Attempt→Artifact Evidence (CREATE)", async () => {
    const { projectId, cycleInstanceId } = await seedFramingForE2e();
    const oa = runtime.oa!;

    // Target absent initially
    expect(fs.existsSync(path.join(repoRoot, EXPECTED_TARGET))).toBe(false);

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed: ${JSON.stringify(send)}`);
    expect(send.f2?.turnKind).toBe("f2_proposal");
    const proposal = send.f2!.proposal!;
    expect(proposal.executionIntent?.targetPath).toBe(EXPECTED_TARGET);
    expect(proposal.executionIntent?.artifactFileName).toBe(
      "note-de-cadrage.md",
    );
    expect(proposal.executionIntent?.targetRepositoryRef).toBe(IDENTITY);
    expect(proposal.executionIntent?.artifactWriteMode).toBe("CREATE");
    const sealed = sealProposalExecutionBasis(proposal);
    expect(sealed.projectWorkspaceRoot).toBe(EXPECTED_PROJECT_ROOT);
    expect(sealed.cycleWorkspaceRoot).toBe(EXPECTED_CYCLE_ROOT);
    expect(sealed.artifactWriteMode).toBe("CREATE");
    expect(sealed.targetRepositoryRef).toBe(IDENTITY);
    const proposalId = proposal.proposalId;

    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) throw new Error("overview");

    const decided = await recordF2Decision({
      proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
        activeCycleInstanceId: cycleInstanceId,
      },
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: true,
      oa,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error(`decide: ${decided.message}`);
    const decisionId = decided.decision.decisionId;

    const hd = await oa.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) throw new Error("hd");
    expect(hd.decision.decisionBasis?.executionBasis?.targetPath).toBe(
      EXPECTED_TARGET,
    );
    expect(hd.decision.decisionBasis?.executionBasis?.targetRepositoryRef).toBe(
      IDENTITY,
    );
    expect(hd.decision.decisionBasis?.executionBasis?.artifactWriteMode).toBe(
      "CREATE",
    );
    expect(hd.decision.decisionBasis?.executionBasis?.artifactFileName).toBe(
      "note-de-cadrage.md",
    );

    const overviewAfter = await runtime.getProject(projectId);
    expect(overviewAfter.ok).toBe(true);
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
        boundedDocsWriteBaseHeadSha: baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(`prepare: ${prepared.message}`);
    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_DOCS_WRITE");
    const successor = prepared.payload.successor;
    const executionContractId = successor.executionContractId;

    // F3 prepare DTO omits inputs; durable EC + successor must retain DecisionBasis target.
    const durable =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId,
      });
    expect(durable.ok).toBe(true);
    if (!durable.ok) throw new Error("durable EC");
    expect(durable.contract.inputs?.targetPath).toBe(EXPECTED_TARGET);
    expect(durable.contract.inputs?.pathAllowlist).toEqual([EXPECTED_CYCLE_ROOT]);
    expect(durable.contract.inputs?.artifactWriteMode).toBe("CREATE");
    const successorInputs = (
      successor as { inputs?: Record<string, unknown> }
    ).inputs;
    expect(successorInputs?.targetPath ?? durable.contract.inputs?.targetPath).toBe(
      EXPECTED_TARGET,
    );

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId,
    });
    expect(inspected.ok).toBe(true);

    const confirmed = await confirmExecutionContractForAuthorization({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);

    const authorized = await evaluateExecutionAuthorization({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) throw new Error("authz");
    expect(authorized.outcome).toBe("AUTHORIZED");

    const launchBefore = fakeLaunch.calls.length;
    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) throw new Error(`execute: ${JSON.stringify(executed)}`);
    expect(executed.phase).toBe("terminal");
    expect(executed.selectedAgentRef).toBe(M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID);
    expect(executed.realExecution).toBe(false);
    expect(executed.boundaryProofMode).toBe("deterministic_fake");
    expect(executed.attemptStatus).toBe("succeeded");
    expect(fakeLaunch.calls.length).toBe(launchBefore + 1);

    const absTarget = path.join(repoRoot, EXPECTED_TARGET);
    expect(fs.existsSync(absTarget)).toBe(true);
    expect(fs.existsSync(path.dirname(absTarget))).toBe(true);
    expect(fs.readFileSync(absTarget, "utf8")).toContain("Note de cadrage");

    const listed =
      await oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) throw new Error("list attempts");
    const succeeded = listed.attempts.filter((a) => a.status === "succeeded");
    expect(succeeded).toHaveLength(1);
    const attemptId = succeeded[0]!.attemptId;

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

    // FINAL GAP 3 — ReviewBundle produced by governed ingest pipeline
    const bundles =
      await oa.evidenceReviewServices.reviewBundleRepository.listByProject(
        projectId,
      );
    const linked = bundles.filter((b) =>
      (b.evidenceRefs ?? []).includes(artifact!.evidenceId),
    );
    expect(linked.length).toBeGreaterThanOrEqual(1);
    const rb = linked[0]!;
    expect(rb.projectId).toBe(projectId);
    expect(rb.executionContractId).toBe(executionContractId);
    expect(rb.evidenceRefs).toContain(artifact!.evidenceId);
    expect(rb.reviewBundleId).toMatch(/^rb:docs-write:/);
    // No parasite bundles for other projects
    expect(bundles.every((b) => b.projectId === projectId)).toBe(true);

    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    const active = cycles.filter((c) => c.status === "active");
    expect(active.map((c) => c.cycleInstanceId)).toEqual([cycleInstanceId]);

    // ——— POST-EXECUTION CONTINUITY (D-MORRIS-PCONT) ———
    const ecAfter =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId,
      });
    expect(ecAfter.ok).toBe(true);
    if (!ecAfter.ok) throw new Error("ecAfter");
    // Option A: verified docs_write artifact ⇒ completed (or honest non-completed).
    expect(["completed", "confirmed"]).toContain(ecAfter.contract.status);
    if (artifact!.status === "verified") {
      expect(ecAfter.contract.status).toBe("completed");
    }

    const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
    expect(
      closedProposalIdsFromProposalDecisionRefs(epistemic).has(proposalId),
    ).toBe(true);
    const subject = await readActiveProposalDecisionSubject(oa, projectId);
    expect(subject.ok).toBe(true);
    if (subject.ok) {
      expect(subject.kind).not.toBe("bound_awaiting_decision");
      expect(subject.kind).not.toBe("pending_reinstruction_required");
    }

    const continuity = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok).toBe(true);
    if (continuity.ok) {
      // Terminal Attempt ⇒ not pre-execution current (no false EC conflict).
      expect(continuity.kind).toBe("none");
    }

    const materialized = await materializeProductOutcomeFromAttempt({
      oa,
      projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) throw new Error(materialized.message);
    expect(materialized.product.outcome).toBe("UNCLAIMED");

    const recovery = await resolvePostEvidenceRecoveryContext({
      oa,
      projectId,
    });
    expect(recovery.ok).toBe(true);
    if (!recovery.ok) throw new Error(recovery.message);
    expect(recovery.context).not.toBeNull();
    if (!recovery.context) throw new Error("recovery");
    expect(recovery.context.productOutcome).toBe("UNCLAIMED");
    expect(recovery.context.attemptStatus).toBe("succeeded");

    const recoveryOptions = deriveTrajectoryOptions({
      cycleTypeId: "cyc:framing",
      recommendedProfile: "Critical",
      criticalSignalsPresent: true,
      irreversible: false,
      reservations: [],
      ckcAttribution: null,
      recoveryContext: recovery.context,
    });
    const recoveryBlob = JSON.stringify(recoveryOptions);
    expect(recoveryBlob).not.toMatch(/FAIL durable/i);
    expect(recoveryBlob).not.toMatch(/Attempt failed/i);
    expect(recoveryBlob).toMatch(
      /technique réussie|non encore prouvé|non prouvé|Attempt succeeded/i,
    );

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error(proposed.message);
    expect(proposed.decisionSubjectMode).toBe("project_trajectory");

    const subjectAfterPropose = await readActiveProposalDecisionSubject(
      oa,
      projectId,
    );
    expect(subjectAfterPropose.ok).toBe(true);
    if (subjectAfterPropose.ok) {
      expect(subjectAfterPropose.kind).not.toBe("bound_awaiting_decision");
    }
    const continuityAfterPropose = await readCurrentGovernedExecutionContinuity({
      oa,
      projectId,
    });
    expect(continuityAfterPropose.ok).toBe(true);
    if (continuityAfterPropose.ok) {
      expect(continuityAfterPropose.kind).toBe("none");
    }

    const rehydrated = await materializeProductOutcomeFromAttempt({
      oa,
      projectId,
      attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) throw new Error(rehydrated.message);
    expect(rehydrated.product.outcome).toBe("UNCLAIMED");

    const cyclesAfter = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesAfter.filter((c) => c.status === "active")).toHaveLength(1);
    expect(cyclesAfter.map((c) => c.cycleInstanceId)).toEqual(
      expect.arrayContaining([cycleInstanceId]),
    );
  });

  async function reachAuthorizedDocsWrite(input: {
    projectId: string;
    cycleInstanceId: string;
    proposalId: string;
  }): Promise<{ decisionId: string; executionContractId: string }> {
    const oa = runtime.oa!;
    const overview = await runtime.getProject(input.projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) throw new Error("overview");
    const decided = await recordF2Decision({
      proposalId: input.proposalId,
      projectId: input.projectId,
      decisionKind: "GO",
      currentContext: {
        projectId: input.projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
        activeCycleInstanceId: input.cycleInstanceId,
      },
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: true,
      oa,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error(decided.message);
    const decisionId = decided.decision.decisionId;
    const overviewAfter = await runtime.getProject(input.projectId);
    if (!overviewAfter.ok) throw new Error("overviewAfter");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: input.projectId,
      decisionId,
      currentContext: {
        projectId: input.projectId,
        lpsId: overviewAfter.livingState.id,
        lpsVersion: overviewAfter.livingState.version,
        doctrineDigest: overviewAfter.doctrine.digest,
        activeCycleInstanceId: input.cycleInstanceId,
      },
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.message);
    const executionContractId = prepared.payload.successor.executionContractId;
    await inspectExecutionContract({
      oa,
      projectId: input.projectId,
      executionContractId,
    });
    await confirmExecutionContractForAuthorization({
      oa,
      projectId: input.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    const authorized = await evaluateExecutionAuthorization({
      oa,
      projectId: input.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (authorized.ok) expect(authorized.outcome).toBe("AUTHORIZED");
    return { decisionId, executionContractId };
  }

  it("EXEC TOCTOU — CREATE stale after PREPARE → STOP, no overwrite, no success Evidence", async () => {
    const { projectId, cycleInstanceId } = await seedFramingForE2e();
    const oa = runtime.oa!;
    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok && send.f2?.turnKind === "f2_proposal").toBe(true);
    const proposal = send.f2!.proposal!;
    expect(proposal.executionIntent?.artifactWriteMode).toBe("CREATE");
    const { executionContractId } = await reachAuthorizedDocsWrite({
      projectId,
      cycleInstanceId,
      proposalId: proposal.proposalId,
    });

    const absTarget = path.join(repoRoot, EXPECTED_TARGET);
    fs.mkdirSync(path.dirname(absTarget), { recursive: true });
    const prior = "# preexisting after PREPARE — must not be overwritten\n";
    fs.writeFileSync(absTarget, prior, "utf8");

    const launchBefore = fakeLaunch.calls.length;
    const touchedBefore = fakeLaunch.touchedFiles.length;
    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    // Existing semantics: execute call completes as technical terminal; Attempt failed.
    expect(executed.ok).toBe(true);
    if (!executed.ok) throw new Error(JSON.stringify(executed));
    expect(executed.phase).toBe("terminal");
    expect(executed.attemptStatus).toBe("failed");
    expect(executed.technicalTerminal).toBe(true);
    expect(executed.productSuccessSemantics).toBe(false);
    expect(fs.readFileSync(absTarget, "utf8")).toBe(prior);
    expect(fakeLaunch.touchedFiles.length).toBe(touchedBefore);
    expect(fakeLaunch.calls.length).toBeGreaterThanOrEqual(launchBefore + 1);
    const lastSpec = fakeLaunch.calls[fakeLaunch.calls.length - 1]?.docsWriteSpec;
    expect(lastSpec?.artifactWriteMode).toBe("CREATE");
    expect(lastSpec?.targetPath).toBe(EXPECTED_TARGET);
    const listed =
      await oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) throw new Error("list attempts");
    expect(listed.attempts.some((a) => a.status === "succeeded")).toBe(false);
    const failed = listed.attempts.filter((a) => a.status === "failed");
    expect(failed.length).toBeGreaterThanOrEqual(1);
    expect(failed[0]!.stopReason ?? "").toMatch(
      /ARTIFACT_WRITE_MODE_STALE_CREATE_AT_EXECUTION/,
    );
    const evidence = await oa.evidenceReviewServices.repository.listByProject(
      projectId,
    );
    expect(
      evidence.some(
        (e) =>
          e.type === "artifact" &&
          e.location === EXPECTED_TARGET &&
          e.status === "available",
      ),
    ).toBe(false);
  });

  it("EXEC TOCTOU — UPDATE stale after PREPARE → STOP, file not recreated", async () => {
    const absTarget = path.join(repoRoot, EXPECTED_TARGET);
    fs.mkdirSync(path.dirname(absTarget), { recursive: true });
    fs.writeFileSync(absTarget, "# prior for UPDATE\n", "utf8");

    const { projectId, cycleInstanceId } = await seedFramingForE2e();
    const oa = runtime.oa!;
    const reg = await oa.evidenceReviewServices.registerEvidence.execute({
      evidenceId: `ev:pwr-upd-${projectId}`,
      idempotencyKey: `idem:ev-pwr-upd-${projectId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      status: "available",
      location: EXPECTED_TARGET,
      digest: DIGEST_SEED,
      classification: "internal",
      storageMode: "metadata_only",
      bindings: { projectId },
    });
    expect(reg.ok).toBe(true);

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok && send.f2?.turnKind === "f2_proposal").toBe(true);
    expect(send.f2!.proposal!.executionIntent?.artifactWriteMode).toBe("UPDATE");
    const { executionContractId } = await reachAuthorizedDocsWrite({
      projectId,
      cycleInstanceId,
      proposalId: send.f2!.proposal!.proposalId,
    });

    fs.rmSync(absTarget, { force: true });
    expect(fs.existsSync(absTarget)).toBe(false);
    const touchedBefore = fakeLaunch.touchedFiles.length;

    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) throw new Error(JSON.stringify(executed));
    expect(executed.phase).toBe("terminal");
    expect(executed.attemptStatus).toBe("failed");
    expect(executed.technicalTerminal).toBe(true);
    expect(executed.productSuccessSemantics).toBe(false);
    const listed =
      await oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) throw new Error("list attempts");
    const failed = listed.attempts.filter((a) => a.status === "failed");
    expect(failed.length).toBeGreaterThanOrEqual(1);
    expect(failed[0]!.stopReason ?? "").toMatch(
      /ARTIFACT_WRITE_MODE_STALE_UPDATE_AT_EXECUTION/,
    );
    expect(fs.existsSync(absTarget)).toBe(false);
    expect(fakeLaunch.touchedFiles.length).toBe(touchedBefore);
  });

  it("EXEC TOCTOU — repository fact unavailable after PREPARE → STOP", async () => {
    const { projectId, cycleInstanceId } = await seedFramingForE2e();
    const oa = runtime.oa!;
    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok && send.f2?.turnKind === "f2_proposal").toBe(true);
    const { executionContractId } = await reachAuthorizedDocsWrite({
      projectId,
      cycleInstanceId,
      proposalId: send.f2!.proposal!.proposalId,
    });

    // Destroy worktree / managed clone after PREPARE — existence fact unavailable
    fs.rmSync(repoRoot, { recursive: true, force: true });
    expect(fs.existsSync(repoRoot)).toBe(false);

    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(false);
    expect(JSON.stringify(executed)).toMatch(
      /EXECUTION_REVALIDATION_UNAVAILABLE|REAL_WORKSPACE_INVALID|REAL_LAUNCH_FAILED|managed_repo/i,
    );
    expect(fs.existsSync(path.join(repoRoot, EXPECTED_TARGET))).toBe(false);
  });

  it("EXEC TOCTOU — UPDATE nominal (Evidence-derived) → file modified", async () => {
    const absTarget = path.join(repoRoot, EXPECTED_TARGET);
    fs.mkdirSync(path.dirname(absTarget), { recursive: true });
    fs.writeFileSync(absTarget, "# prior content before UPDATE\n", "utf8");

    const { projectId, cycleInstanceId } = await seedFramingForE2e();
    const oa = runtime.oa!;
    const reg = await oa.evidenceReviewServices.registerEvidence.execute({
      evidenceId: `ev:pwr-upd-nom-${projectId}`,
      idempotencyKey: `idem:ev-pwr-upd-nom-${projectId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      status: "available",
      location: EXPECTED_TARGET,
      digest: DIGEST_SEED,
      classification: "internal",
      storageMode: "metadata_only",
      bindings: { projectId },
    });
    expect(reg.ok).toBe(true);

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok && send.f2?.turnKind === "f2_proposal").toBe(true);
    expect(send.f2!.proposal!.executionIntent?.artifactWriteMode).toBe("UPDATE");
    const { executionContractId } = await reachAuthorizedDocsWrite({
      projectId,
      cycleInstanceId,
      proposalId: send.f2!.proposal!.proposalId,
    });

    const durable =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId,
      });
    expect(durable.ok).toBe(true);
    if (durable.ok) {
      expect(durable.contract.inputs?.artifactWriteMode).toBe("UPDATE");
    }

    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) throw new Error(JSON.stringify(executed));
    expect(executed.attemptStatus).toBe("succeeded");
    const after = fs.readFileSync(absTarget, "utf8");
    expect(after).toContain("Note de cadrage");
    expect(after).not.toBe("# prior content before UPDATE\n");
  });
});

describe("CR-PWR-04 Product Create fail-closed without server-owned config", () => {
  const APP_ROOT = path.resolve(__dirname, "../..");
  const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
  const SCHEMAS_ROOT = path.resolve(
    APP_ROOT,
    "../sfia-v3-modeled/v3-native-option-a/schemas",
  );

  let prevIdentity: string | undefined;
  let prevRemote: string | undefined;

  beforeEach(() => {
    prevIdentity = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    prevRemote = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
  });

  afterEach(() => {
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY", prevIdentity);
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL", prevRemote);
  });

  it("missing identity → Product Create refused, no Project/LPS", async () => {
    delete process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/widget.git";
    const services = createLocalVerticalSliceServices({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-09-19T12:00:00.000Z",
    });
    const result = await services.facade.createProject({
      name: "Should Fail",
      objective: "x",
      context: "y",
      perceivedCriticality: "STANDARD",
      constraints: [],
      shortReference: "FAIL",
      idempotencyKey: "idem:pwr04-missing-id",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.message).toMatch(/Identité|server-owned|refusée/i);
    const listed = await services.projectServices.listProjects.execute();
    expect(listed.ok).toBe(true);
    if (listed.ok) expect(listed.projects).toHaveLength(0);
  });

  it("missing remote → Product Create refused", async () => {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/widget";
    delete process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
    const services = createLocalVerticalSliceServices({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-09-19T12:00:00.000Z",
    });
    const result = await services.facade.createProject({
      name: "Should Fail Remote Missing",
      objective: "x",
      context: "y",
      perceivedCriticality: "STANDARD",
      constraints: [],
      shortReference: "FAILR",
      idempotencyKey: "idem:pwr04-missing-remote",
    });
    expect(result.ok).toBe(false);
  });

  it("invalid remote → Product Create refused", async () => {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/widget";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL = "not-a-url";
    const services = createLocalVerticalSliceServices({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-09-19T12:00:00.000Z",
    });
    const result = await services.facade.createProject({
      name: "Should Fail Remote",
      objective: "x",
      context: "y",
      perceivedCriticality: "STANDARD",
      constraints: [],
      shortReference: "FAIL2",
      idempotencyKey: "idem:pwr04-bad-remote",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.message).toMatch(/Remote|invalide|refusée/i);
  });

  it("complete config → Product Project with automatic binding", async () => {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/widget";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/widget.git";
    const services = createLocalVerticalSliceServices({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-09-19T12:00:00.000Z",
    });
    const result = await services.facade.createProject({
      name: "Mini cadrage — Suivi de tâches",
      objective: "x",
      context: "y",
      perceivedCriticality: "STANDARD",
      constraints: [],
      shortReference: "OK",
      idempotencyKey: "idem:pwr04-ok",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.project.projectWorkspaceKey).toBe(
      "mini-cadrage-suivi-de-taches",
    );
    expect(result.project.repositoryBinding?.pathRoot).toBe(
      EXPECTED_PROJECT_ROOT,
    );
  });
});
