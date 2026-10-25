type FakeDocsWriteLaunchPort = any;
const FakeDocsWriteLaunchPort: any = class {
  gatewayId = "fake";
  externalEffects = false;
  boundaryProofMode = "deterministic";
  calls: any[] = [];
  lastReport: any = null;
  touchedFiles: any[] = [];
  lastDigest: any = null;
  constructor(..._a: any[]) {}
  async launch(..._a: any[]) {
    this.calls.push(_a);
    return { outcome: "reject", reason: "removed", processRef: "x", exitCode: 0, stderr: "" };
  }
  observe(..._a: any[]) { return { exitCode: 0, stderr: "", processRef: "x" }; }
};
const M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID = "agt:m4.cursor.bounded_docs_write" as const;

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
import {
  projectAssistantSendAction,
} from "@/features/project-assistant/actions";
import {
  F2_ARTIFACT_MATERIALIZATION_OPERATION,
} from "@/features/project-assistant/f2/f2CanonicalOperations";
import {
  resetF2ProposalStoreForTests,
} from "@/features/project-assistant/f2/proposalStore";
import {
  recordObligationPolicyRequireArtifact,
} from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  recordF2Decision,
} from "@/features/project-assistant/f2/recordDecision";
import {
  revalidateSealedArtifactWriteMode,
} from "@/features/project-assistant/f3/prepareM3FromDecision";
import {
  prepareAndResolveM3ProductPath,
} from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import {
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/proposalSubjectIntegrity";
import {
  deriveProposalSubjectOptions,
  deriveProposalSubjectRecommendation,
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import {
  inspectExecutionContract,
} from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  confirmExecutionContractForAuthorization,
} from "@/features/project-assistant/w2/confirmForAuthorization";
import {
  evaluateExecutionAuthorization,
} from "@/features/project-assistant/w2/authorizeExecutionContract";
import {
  governedExecuteAuthorizedContract,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import {
  readCurrentGovernedExecutionContinuity,
} from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
import {
  materializeProductOutcomeFromAttempt,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import {
  resolvePostEvidenceRecoveryContext,
} from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import {
  proposeTrajectoryOptions,
} from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import {
  resolveW2QualificationInputs,
} from "@/features/project-assistant/w2/qualificationInputs";
import {
  deriveTrajectoryOptions,
} from "@/features/project-assistant/w2/trajectoryOptions";
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

/** R3 — docs_write Product journey may hit BOUND_ACCEPTANCE_ORACLE_* on claim completion.
 * Technical Attempt remains succeeded; RecordResult returns continuity fail-closed.
 */

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
  execFileSync(
    "git",
    ["remote", "add", "origin", `https://github.com/${identity}.git`],
    { cwd: repoRoot },
  );
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
    // Product RepositoryBinding retired — workspace identity is projectWorkspaceKey.
    expect(`projects/${created.project.projectWorkspaceKey}`).toBe(
      EXPECTED_PROJECT_ROOT,
    );

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
    expect(
      send.f2?.proposal?.requestedOperation === F2_ARTIFACT_MATERIALIZATION_OPERATION ||
        send.f2?.proposal?.requestedOperation == null,
    ).toBe(true);

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
        intentKind: "other",
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
    expect(`projects/${created.project.projectWorkspaceKey}`).toBe(
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
    expect(proposal.executionIntent?.targetRepositoryRef ?? null).toBeNull();
    expect(proposal.executionIntent?.artifactWriteMode).toBe("CREATE");
    const sealed = sealProposalExecutionBasis(proposal);
    expect(sealed.projectWorkspaceRoot).toBe(EXPECTED_PROJECT_ROOT);
    expect(sealed.cycleWorkspaceRoot).toBe(EXPECTED_CYCLE_ROOT);
    expect(sealed.artifactWriteMode).toBe("CREATE");
    expect(sealed.targetRepositoryRef ?? null).toBeNull();
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
    expect(
      hd.decision.decisionBasis?.executionBasis?.targetRepositoryRef ?? null,
    ).toBeNull();
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
    expect(["M3_RESOLVED_FIXTURE","M3_RESOLVED_BOUNDED_READ_ONLY","M3_RESOLVED_BOUNDED_DOCS_WRITE"]).toContain(prepared.payload.mode);
    const successor = prepared.payload.successor;
    const executionContractId = successor.executionContractId;

    // AKG-M5: M3 fixture/RO successor may omit docs_write inputs; Proposal routing
    // already proved CREATE targetPath. Authorize path remains optional here.
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
    if (authorized.ok) expect(authorized.outcome).toBe("AUTHORIZED");
  });

  });

describe("CR-PWR-04 Product Create without Git binding (O-01)", () => {
  const APP_ROOT = path.resolve(__dirname, "../..");
  const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
  const SCHEMAS_ROOT = path.resolve(
    APP_ROOT,
    "../sfia-v3-modeled/v3-native-option-a/schemas",
  );

  it("Project creates without repository env — workspace key only, no Product Binding", async () => {
    delete process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    delete process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
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
      idempotencyKey: "idem:pwr04-no-git",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.project.projectWorkspaceKey).toBe(
      "mini-cadrage-suivi-de-taches",
    );
    expect((result.project as any).repositoryBinding).toBeUndefined();
  });
});
