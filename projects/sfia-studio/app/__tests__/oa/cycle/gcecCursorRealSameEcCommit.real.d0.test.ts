/**
 * FUTURE REAL harness — same-EC A (docs-write) → B (local git.commit).
 *
 * NEVER runs in ordinary vitest. Requires ALL three:
 *   SFIA_STUDIO_CURSOR_REAL=1
 *   SFIA_GCEC_CURSOR_REAL_PROOF=1
 *   SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF=1
 *
 * Campaign shape (when Morris authorizes a distinct REAL GO):
 *   PRECHECK → remote ls-remote BEFORE → A REAL docs-write (retain worktree)
 *   → B REAL local commit → governed observe-owned Evidence VERIFIED
 *   → FS→SHA supersession → remote ls-remote AFTER (heads/tags/main equal).
 *
 * CR-GCEC-AGENT-10: remote anti-effect uses actual `git ls-remote` snapshots —
 * local clone HEAD alone is NOT remote proof.
 *
 * Forensic phases (harness-local only — not Product FSM):
 *   A_LAUNCHED_UNRECONCILED → A_RECONCILED_RETAINED
 *   → B_LAUNCHED_UNRECONCILED → B_RECONCILED_COMMIT_VERIFIED
 *
 * D-GCEC-AGENT-01: Attempt B selects agt:m4.cursor.bounded_local_commit under
 * the SAME EC via server-derived AttemptExecutionProfile.
 *
 * Do NOT reuse prior docs-write pid workspaces. Fresh proof root only.
 * ZERO push / PR / merge. ZERO Product mutation.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Confirmation } from "@/lib/oa/decision";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
  ManagedProjectRepositoryResolver,
  NodeGitCommandRunner,
  buildGitCommitLaunchSpec,
  buildGitEffectActionRef,
  deriveTrustedCommitMessage,
  isFsAnchorSupersededByVerifiedLocalCommit,
  observeLocalCommitFacts,
  resolvePreCommitWorkspaceContinuation,
  sanitizeManagedRepoIdentity,
  verifyLocalCommitEffect,
  workspacePathForAttempt,
  type GovernedWorkspaceObservationContext,
} from "@/lib/oa/execution-attempt";
import { NodeLocalGitStatusDiffPort } from "@/lib/oa/git-ports";
import { F3_CONFIRM_ACTION_REF } from "@/features/project-assistant/f3/constants";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
import { completeBoundedReadOnlyLaunch } from "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
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

const ENABLED =
  process.env.SFIA_STUDIO_CURSOR_REAL === "1" &&
  process.env.SFIA_GCEC_CURSOR_REAL_PROOF === "1" &&
  process.env.SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF === "1";

const APP_ROOT = path.resolve(__dirname, "../../..");
const WORKSPACE_ROOT = path.resolve(APP_ROOT, "../../..");
const PROOF_REVIEW_DIR = path.join(
  WORKSPACE_ROOT,
  ".tmp-sfia-review/gcec-cursor-real-commit-proof",
);
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const IDENTITY = "mcleland147/sfia-gcec-proof-task-manager";
const BASE_SHA = "32c7c2008197e5c61b32c16479144e9863291358";
const TARGET_PATH = "docs/functional-design.md";
const BRANCH = "main";
const NOW = "2026-09-11T18:00:00.000Z";
const PILOTE = LOCAL_PILOTE_ACTOR;
/** Shell-safe subject; also used as docs-write artifactBrief (deriveTrustedCommitMessage). */
const ARTIFACT_BRIEF = "add task manager functional design";
const COMMIT_MSG = `docs: ${ARTIFACT_BRIEF}`;

const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const CONTENT_REQUIREMENTS = [
  "Task fields: identifier, mandatory title, optional description, status, optional due date",
  "Statuses: TODO, IN_PROGRESS, DONE",
  "Flows: create task, list tasks, filter by status, edit task, change status",
  "Rules: blank title refused; status must be in defined set; due date optional",
  "Acceptance criteria: observable/testable for the flows above",
  "OUT OF SCOPE: authentication, multi-user, notifications, architecture, DB, API, framework, pixel UX",
];

/** Harness-local forensic state — not Product domain persistence. */
export type RealCommitHarnessPhase =
  | "PRECHECK"
  | "A_LAUNCHED_UNRECONCILED"
  | "A_RECONCILED_RETAINED"
  | "B_LAUNCHED_UNRECONCILED"
  | "B_RECONCILED_COMMIT_VERIFIED";

export type RealSameEcCommitHarnessState = {
  phase: RealCommitHarnessPhase;
  realLaunchConsumed: boolean;
  reconciliationComplete: boolean;
  attemptAId?: string;
  attemptBId?: string;
  executionContractId?: string;
  processRefA?: string;
  processRefB?: string;
  worktreeRef?: string;
  proofRoot?: string;
  execRoot?: string;
  productDbPath?: string;
  safetyJournalPath?: string;
  managedClonePath?: string;
  expectedH0?: string;
  observedH1?: string;
  durableReviewSnapshotWritten: boolean;
  failure?: string;
};

export function createRealSameEcCommitHarnessState(): RealSameEcCommitHarnessState {
  return {
    phase: "PRECHECK",
    realLaunchConsumed: false,
    reconciliationComplete: false,
    durableReviewSnapshotWritten: false,
  };
}

export function shouldPreserveRealCommitProofState(input: {
  realLaunchConsumed: boolean;
  reconciliationComplete: boolean;
}): boolean {
  return (
    input.realLaunchConsumed === true && input.reconciliationComplete !== true
  );
}

function writeJson(filePath: string, value: unknown): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function sha256FileOrMissing(filePath: string): string | null {
  if (!fs.existsSync(filePath)) return null;
  return createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function safeGit(cwd: string, args: string[]): string | null {
  try {
    return execFileSync("git", args, {
      cwd,
      encoding: "utf8",
      shell: false,
    }).trim();
  } catch {
    return null;
  }
}

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    shell: false,
  }).trim();
}

/** CR-10 — read-only remote ref snapshot (future REAL harness only). */
export type RemoteRefSnapshot = {
  readonly headsNormalized: string;
  readonly tagsNormalized: string;
  readonly mainSha: string | null;
  readonly targetBranchLine: string | null;
  readonly capturedAt: string;
};

function normalizeLsRemote(raw: string): string {
  return raw
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .sort()
    .join("\n");
}

function captureRemoteRefSnapshot(cloneRoot: string): RemoteRefSnapshot {
  const headsRaw = git(cloneRoot, ["ls-remote", "--heads", "origin"]);
  const tagsRaw = git(cloneRoot, ["ls-remote", "--tags", "origin"]);
  const headsNormalized = normalizeLsRemote(headsRaw);
  const tagsNormalized = normalizeLsRemote(tagsRaw);
  const mainLine = headsNormalized
    .split("\n")
    .find((l) => l.endsWith("\trefs/heads/main") || l.endsWith(" refs/heads/main"));
  const mainSha = mainLine ? mainLine.split(/[\s\t]/)[0] ?? null : null;
  const targetRef = `refs/heads/${BRANCH}`;
  const targetBranchLine =
    headsNormalized
      .split("\n")
      .find((l) => l.endsWith(`\t${targetRef}`) || l.endsWith(` ${targetRef}`)) ??
    null;
  return {
    headsNormalized,
    tagsNormalized,
    mainSha,
    targetBranchLine,
    capturedAt: new Date().toISOString(),
  };
}

const temps: string[] = [];
const harnessState = createRealSameEcCommitHarnessState();

afterEach(() => {
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
  if (shouldPreserveRealCommitProofState(harnessState)) {
    temps.length = 0;
    return;
  }
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
  if (!shouldPreserveRealCommitProofState(harnessState)) {
    Object.assign(harnessState, createRealSameEcCommitHarnessState());
  }
});

function tempDir(prefix: string): string {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  temps.push(d);
  return d;
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:gcec-commit-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:gcec-commit-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:gcec-commit-${this.prefix}-${this.n}`;
  }
}

function requireAuth(
  auth: ReturnType<typeof registerLocalPiloteAuthority>,
): string {
  if (!auth.ok) throw new Error(`auth: ${auth.code}`);
  return auth.evidenceId;
}

async function writeLaunchFrontierSnapshot(input: {
  state: RealSameEcCommitHarnessState;
  phase: RealCommitHarnessPhase;
}): Promise<void> {
  writeJson(path.join(PROOF_REVIEW_DIR, "launch-frontier.json"), {
    timestamp: new Date().toISOString(),
    phase: input.phase,
    attemptAId: input.state.attemptAId ?? null,
    attemptBId: input.state.attemptBId ?? null,
    executionContractId: input.state.executionContractId ?? null,
    processRefA: input.state.processRefA ?? null,
    processRefB: input.state.processRefB ?? null,
    proofRoot: input.state.proofRoot ?? null,
    execRoot: input.state.execRoot ?? null,
    safetyJournalPath: input.state.safetyJournalPath ?? null,
    productDbPath: input.state.productDbPath ?? null,
    worktreeRef: input.state.worktreeRef ?? null,
    managedClonePath: input.state.managedClonePath ?? null,
    remoteBaseSha: BASE_SHA,
  });
}

async function writeFailureReconciliationSnapshot(input: {
  state: RealSameEcCommitHarnessState;
  error: unknown;
  observationSummary: Record<string, unknown> | null;
  gitFacts: Record<string, unknown> | null;
}): Promise<void> {
  const failure =
    input.error instanceof Error
      ? `${input.error.name}: ${input.error.message}`
      : String(input.error);
  input.state.failure = failure;
  const artifactPath = input.state.worktreeRef
    ? path.join(input.state.worktreeRef, TARGET_PATH)
    : null;
  writeJson(path.join(PROOF_REVIEW_DIR, "reconciliation-state.json"), {
    phase: "POST_LAUNCH_FAILURE_PRESERVED",
    harnessPhase: input.state.phase,
    attemptAId: input.state.attemptAId ?? null,
    attemptBId: input.state.attemptBId ?? null,
    executionContractId: input.state.executionContractId ?? null,
    processRefA: input.state.processRefA ?? null,
    processRefB: input.state.processRefB ?? null,
    observationSummary: input.observationSummary,
    worktreePath: input.state.worktreeRef ?? null,
    filesystemPathsRetained: {
      proofRoot: input.state.proofRoot ?? null,
      execRoot: input.state.execRoot ?? null,
      safetyJournalPath: input.state.safetyJournalPath ?? null,
      productDbPath: input.state.productDbPath ?? null,
      worktreeRef: input.state.worktreeRef ?? null,
    },
    pathsExist: {
      proofRoot: Boolean(
        input.state.proofRoot && fs.existsSync(input.state.proofRoot),
      ),
      execRoot: Boolean(
        input.state.execRoot && fs.existsSync(input.state.execRoot),
      ),
      safetyJournalPath: Boolean(
        input.state.safetyJournalPath &&
          fs.existsSync(input.state.safetyJournalPath),
      ),
      productDbPath: Boolean(
        input.state.productDbPath && fs.existsSync(input.state.productDbPath),
      ),
      worktreeRef: Boolean(
        input.state.worktreeRef && fs.existsSync(input.state.worktreeRef),
      ),
    },
    artifactExists: Boolean(artifactPath && fs.existsSync(artifactPath)),
    gitFacts: input.gitFacts,
    failure,
    reconciliationComplete: false,
  });
}

describe("GCEC future REAL same-EC commit A→B — static campaign shape", () => {
  it("harness encodes A docs-write + retain + B local-commit + observer-owned Evidence + remote ls-remote", () => {
    const source = fs.readFileSync(__filename, "utf8");
    expect(source).toContain("M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID");
    expect(source).toContain("M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID");
    expect(source).toContain("getRuntimeApplicationService");
    expect(source).toContain("selectExecutionAgent");
    expect(source).toContain("startExecution");
    expect(source).toContain("observeLocalCommitFacts");
    expect(source).toContain("verifyLocalCommitEffect");
    expect(source).toContain("GovernedWorkspaceObservationContext");
    expect(source).toContain('ls-remote", "--heads"');
    expect(source).toContain('ls-remote", "--tags"');
    expect(source).toContain("captureRemoteRefSnapshot");
    expect(source).toContain("remoteHeadsBefore");
    expect(source).toContain("remoteHeadsAfter");
    expect(source).toContain("remoteTagsBefore");
    expect(source).toContain("remoteTagsAfter");
    expect(source).toContain("remoteMainBefore");
    expect(source).toContain("remoteMainAfter");
    expect(
      source.includes("resolvePreCommitWorkspaceContinuation") ||
        source.includes("isFsAnchorSupersededByVerifiedLocalCommit"),
    ).toBe(true);
    expect(source).toContain("A_RECONCILED_RETAINED");
    expect(source).toContain("B_RECONCILED_COMMIT_VERIFIED");
    expect(source).toContain("SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF");
    expect(source).toContain("D-GCEC-AGENT-01");
    expect(source).toContain("CR-GCEC-AGENT-10");
    // CR-09: Evidence creator must receive gitRunner+governed, not free observed facts.
    expect(source).toMatch(
      /verifyLocalCommitEffect\(\{[\s\S]*?\bgitRunner[\s\S]*?\bgoverned\b/,
    );
    expect(source).not.toMatch(
      /verifyLocalCommitEffect\(\{[\s\S]*?observed:\s*observed\.facts/,
    );
    void M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID;
    void M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID;
    void observeLocalCommitFacts;
    void verifyLocalCommitEffect;
    void getRuntimeApplicationService;
    void captureRemoteRefSnapshot;
  });

  it("shouldPreserveRealCommitProofState matrix", () => {
    expect(
      shouldPreserveRealCommitProofState({
        realLaunchConsumed: false,
        reconciliationComplete: false,
      }),
    ).toBe(false);
    expect(
      shouldPreserveRealCommitProofState({
        realLaunchConsumed: true,
        reconciliationComplete: false,
      }),
    ).toBe(true);
    expect(
      shouldPreserveRealCommitProofState({
        realLaunchConsumed: true,
        reconciliationComplete: true,
      }),
    ).toBe(false);
  });
});

describe.skipIf(!ENABLED)(
  "GCEC future REAL same-EC commit A→B — Morris-gated campaign",
  () => {
    it(
      "REAL A→B: docs-write retain → local-commit agent → observe → Evidence → remote unchanged",
      async () => {
        const managedBase = process.env.SFIA_GCEC_MANAGED_REPO_BASE?.trim();
        if (!managedBase) {
          throw new Error("SFIA_GCEC_MANAGED_REPO_BASE required when ENABLED");
        }
        const sanitized = sanitizeManagedRepoIdentity(IDENTITY);
        const cloneRoot = path.join(managedBase, sanitized);
        if (!fs.existsSync(path.join(cloneRoot, ".git"))) {
          throw new Error(`managed clone missing: ${cloneRoot}`);
        }
        expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
        expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);
        const resolved =
          new ManagedProjectRepositoryResolver().resolveLocalRepoRoot(
            { identity: IDENTITY },
            managedBase,
          );
        expect(resolved).toBe(cloneRoot);
        expect(cloneRoot.includes("sfia-product-proof")).toBe(false);
        expect(cloneRoot.includes("sfia-workspace")).toBe(false);

        const root = tempDir("gcec-real-commit-");
        const execRoot = path.join(root, "m4-worktrees");
        const safetyJournalPath = path.join(root, "m4", "launch-safety.sqlite");
        fs.mkdirSync(execRoot, { recursive: true });
        fs.mkdirSync(path.dirname(safetyJournalPath), { recursive: true });

        harnessState.proofRoot = root;
        harnessState.execRoot = execRoot;
        harnessState.safetyJournalPath = safetyJournalPath;
        harnessState.productDbPath = path.join(root, "oa.sqlite");
        harnessState.managedClonePath = cloneRoot;
        harnessState.expectedH0 = BASE_SHA;
        harnessState.phase = "PRECHECK";

        // CR-GCEC-AGENT-10 — read-only remote snapshot BEFORE A/B (future REAL only).
        const remoteBefore = captureRemoteRefSnapshot(cloneRoot);
        expect(remoteBefore.mainSha?.toLowerCase()).toBe(BASE_SHA.toLowerCase());
        expect(remoteBefore.headsNormalized.length).toBeGreaterThan(0);

        const runtime = getRuntimeApplicationService({
          registryRoot: REGISTRY_ROOT,
          schemasRoot: SCHEMAS_ROOT,
          nowIso: NOW,
          idSource: new FixedIdSource("ab"),
          auditMode: "noop",
          productDbPath: harnessState.productDbPath,
          realBoundaryEnv: {
            ...process.env,
            SFIA_STUDIO_CURSOR_REAL: "1",
          },
          realBoundaryComposition: {
            managedRepoRootBase: managedBase,
            execRoot,
            safetyJournalPath,
            repoRoot: cloneRoot,
            studioRoot: path.resolve(APP_ROOT, ".."),
          },
        });
        const oa = runtime.oa!;
        expect(oa.executionAttemptServices.realBoundary).toBeTruthy();
        expect(
          oa.executionAttemptServices.realBoundary?.managedRepoRootBase,
        ).toBe(path.resolve(managedBase));

        const created = await runtime.createProject({
          name: "Gestion de tâches",
          objective: "GCEC Cursor REAL same-EC A→B commit proof",
          context: "proof-vehicle",
          criticality: "STANDARD",
          constraints: ["BOUNDED REAL DOCS-WRITE THEN LOCAL COMMIT ONLY"],
          shortReference: "GCECAB",
          idempotencyKey: "idem:gcec-cursor-real-commit-ab",
        });
        expect(created.ok).toBe(true);
        if (!created.ok) throw new Error("createProject failed");
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
            baseSha: BASE_SHA,
          },
        });
        expect(bound.ok).toBe(true);

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
        const projectBoot = await oa.projectServices.getProject.execute({
          projectId,
        });
        if (!projectBoot.ok || !projectBoot.project.doctrinePackageRef) {
          throw new Error("doctrine pin missing");
        }
        const pin = projectBoot.project.doctrinePackageRef;

        const mat = await materializeLifecycleRecommendationFromStructuredOutput({
          projectId,
          structuredOutput: {
            narrative: "Next cycle: Conception fonctionnelle.",
            preCycleRoutingAssessment: {
              ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
            },
            lifecycleRecommendation: {
              intent: "NEXT_CYCLE" as const,
              statement: "Conception fonctionnelle task manager.",
              subjectCycleInstanceId: null,
              targetCycleInstanceId: null,
              targetCycleTypeId: "cyc:functional-design",
              rationale: "GCEC-CURSOR-REAL-COMMIT-AB",
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
            doctrinePackageId: pin.doctrinePackageId,
            doctrinePackageVersion: pin.version,
            doctrinePackageDigest: pin.digest,
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
            const p = await oa.projectServices.getProject.execute({
              projectId: pid,
            });
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
          newTrajectoryId: () => `trj:gcec-commit-${projectId}`,
          newStepId: () => `stp:fd-commit`,
          newProvenanceObservationId: () => `epi:gcec-commit-trj`,
          correlationId: `cor:gcec-commit-bridge`,
        };

        const candidatePrepared =
          await prepareCandidateTrajectoryFromCurrentRecommendation({
            projectId,
            deps: bridgeDeps,
          });
        expect(candidatePrepared.ok).toBe(true);
        if (!candidatePrepared.ok) throw new Error(String(candidatePrepared));

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
        if (!approved.ok) throw new Error(String(approved));

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
          userContent:
            "__F2_DOCS_WRITE_GCEC__ produce functional design for personal task manager",
          projectSummary: overview.project.name ?? "Gestion de tâches",
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
        const ei = analyzed.analysis.executionIntent;
        const proposal = saveProposal({
          proposalId: createProposalId(),
          status: "DECISION_REQUIRED",
          rephrasedRequest:
            analyzed.analysis.rephrasedRequest ?? "docs write task manager",
          objective:
            analyzed.analysis.objective ?? "Functional design task manager",
          cycleTypeId:
            analyzed.analysis.candidateCycleTypeId ?? "cyc:functional-design",
          recommendedProfile: "Standard",
          rationale: "GCEC-CURSOR-REAL-COMMIT-AB",
          scope: "docs/functional-design.md uniquement",
          outOfScope: analyzed.analysis.outOfScope,
          activatedBlocks: analyzed.analysis.activatedBlocks,
          expectedOutcome: "docs/functional-design.md",
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
          requestedOperation: "cursor.docs_write.apply",
          executionIntent: {
            ...(ei && typeof ei === "object" ? ei : {}),
            intentKind: "docs_write",
            artifactType: "functional_design",
            targetRepositoryRef: IDENTITY,
            targetPath: TARGET_PATH,
            scopeIn: ["docs/"],
            scopeOut: ["src/", ".github/", "README.md"],
            expectedOutputs: [TARGET_PATH],
            requiredCapabilities: ["cap:cursor.docs_write"],
            validationExpectations: ["path_allowlist", "no_delete"],
            evidenceRequirements: [
              "git:local_commit",
              "git:remote_push",
              "git:pull_request",
              "git:ci_status",
              "git:review_status",
              "git:merge",
              "git:post_merge_verification",
            ],
            requestedOperation: "cursor.docs_write.apply",
            reversibilityExpectation: "reversible",
            artifactBrief: ARTIFACT_BRIEF,
            contentRequirements: CONTENT_REQUIREMENTS,
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
            boundedDocsWriteBaseHeadSha: BASE_SHA,
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
        expect(contract.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
        const inputs = (contract.inputs ?? {}) as Record<string, unknown>;
        expect(inputs.repositoryRef ?? inputs.targetRepositoryRef).toBe(IDENTITY);
        expect(inputs.targetPath).toBe(TARGET_PATH);
        expect(inputs.baseHeadSha).toBe(BASE_SHA);

        const execAuth = registerLocalPiloteAuthority({
          authorityResolver: oa.authorityResolver,
          scope: contract.scope,
          issuedAt: NOW,
          evidenceId: `evd:gcec-commit-exec:${contract.executionContractId}`,
          forceEnable: true,
        });
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
        expect(requested.ok).toBe(true);
        const grantedGate =
          await oa.decisionServices.grantConfirmation.execute({
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
        harnessState.executionContractId = contract.executionContractId;

        expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);
        expect(M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID).not.toBe(
          M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
        );

        const attempts = oa.executionAttemptServices;
        const attemptAId =
          `xat:gcec-commit-a:${contract.executionContractId}`.slice(0, 128);
        const attemptBId =
          `xat:gcec-commit-b:${contract.executionContractId}`.slice(0, 128);
        expect(attemptAId).not.toBe(attemptBId);
        harnessState.attemptAId = attemptAId;
        harnessState.attemptBId = attemptBId;

        // ----- Attempt A: bounded docs-write (retain worktree) -----
        const selectedA = await attempts.selectExecutionAgent.execute({
          attemptId: attemptAId,
          executionContractId: contract.executionContractId,
          idempotencyKey: `idem:sel:${attemptAId}`,
          actor: PILOTE,
          authorityEvidenceId: requireAuth(execAuth),
          expectedContractVersion: contract.version,
          selectionProfile: "standard",
          selectionStrategy: "capabilities_deterministic",
          requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
          systemInitiated: true,
        });
        expect(selectedA.ok).toBe(true);
        if (!selectedA.ok) throw new Error(selectedA.error.message);

        const expiresAt = new Date(Date.parse(NOW) + 60 * 60 * 1000).toISOString();
        const gateA = await attempts.grantRealExecutionGate!.execute({
          grantId: `gd:gcec-commit-a:${attemptAId}`.slice(0, 128),
          attemptId: attemptAId,
          actor: PILOTE,
          expiresAt,
          authorityEvidenceId: requireAuth(execAuth),
        });
        expect(gateA.ok).toBe(true);
        if (!gateA.ok) throw new Error(gateA.error.message);

        const startedA = await attempts.startExecution.execute({
          attemptId: attemptAId,
          actor: PILOTE,
          authorityEvidenceId: requireAuth(execAuth),
          confirmations: [] as Confirmation[],
        });
        expect(startedA.ok).toBe(true);
        if (!startedA.ok) {
          throw new Error(
            `StartExecution A failed: ${startedA.error.detailCode} ${startedA.error.internalCauseRef ?? ""} ${startedA.error.message}`,
          );
        }
        expect(startedA.attempt.status).toBe("running");

        const frontiersA =
          await attempts.realBoundary!.safetyJournal.findFrontierByAttempt(
            attemptAId,
          );
        const launchedA = frontiersA.find(
          (row) =>
            row.kind === "LAUNCHED" &&
            typeof row.processRef === "string" &&
            row.processRef.trim().length > 0,
        );
        expect(launchedA?.processRef).toBeTruthy();
        const processRefA = String(launchedA!.processRef);
        expect(processRefA).toMatch(/^(pid:|proc:)/);

        harnessState.realLaunchConsumed = true;
        harnessState.processRefA = processRefA;
        harnessState.phase = "A_LAUNCHED_UNRECONCILED";
        await writeLaunchFrontierSnapshot({
          state: harnessState,
          phase: "A_LAUNCHED_UNRECONCILED",
        });

        let artifactDigest = "";
        let worktree = "";

        try {
          const attemptRunningA =
            await attempts.getExecutionAttempt.execute({ attemptId: attemptAId });
          expect(attemptRunningA.ok).toBe(true);
          if (!attemptRunningA.ok) throw new Error("attempt A missing");

          const completedA = await completeBoundedDocsWriteLaunch({
            attempt: attemptRunningA.attempt,
            services: attempts,
            targetPath: TARGET_PATH,
            pathAllowlist: ["docs/"],
            statusDiffPort: new NodeLocalGitStatusDiffPort(),
            awaitIfPending: true,
          });
          expect(completedA.ok).toBe(true);
          if (!completedA.ok) {
            throw new Error(
              `complete A failed: ${completedA.code} ${completedA.message}`,
            );
          }
          expect(completedA.status).toBe("succeeded");
          if (completedA.status !== "succeeded") throw new Error("A not succeeded");

          worktree = completedA.facts.worktreeRef!;
          harnessState.worktreeRef = worktree;
          expect(worktree).toBeTruthy();
          expect(worktree.includes("sfia-product-proof")).toBe(false);
          expect(fs.existsSync(path.join(worktree, TARGET_PATH))).toBe(true);
          const artifactText = fs.readFileSync(
            path.join(worktree, TARGET_PATH),
            "utf8",
          );
          expect(artifactText.trim().length).toBeGreaterThan(80);
          expect(git(worktree, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
          expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
          expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);

          artifactDigest = completedA.facts.digest;
          const ingested = await ingestDocsWriteArtifactEvidence({
            evidenceReviewServices: oa.evidenceReviewServices,
            projectId,
            cycleInstanceId,
            executionContractId: contract.executionContractId,
            executionAttemptId: attemptAId,
            targetPath: TARGET_PATH,
            digest: artifactDigest,
            actor: PILOTE,
            nowIso: oa.clock.nowIso(),
          });
          expect(ingested.ok).toBe(true);
          if (!ingested.ok) throw new Error(ingested.code);

          const artLoaded =
            await oa.evidenceReviewServices.evidenceReader.findById(
              ingested.evidenceId,
            );
          expect(artLoaded).toBeTruthy();
          const evidenceSvc = oa.evidenceReviewServices as typeof oa.evidenceReviewServices & {
            payload?: {
              setScript?: (
                id: string,
                s: { availability: "available"; digest: string },
              ) => void;
            };
          };
          evidenceSvc.payload?.setScript?.(ingested.evidenceId, {
            availability: "available",
            digest: artifactDigest,
          });
          const artVerified =
            await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
              evidenceId: ingested.evidenceId,
              expectedVersion: artLoaded!.version,
              actor: PILOTE,
            });
          expect(artVerified.ok).toBe(true);

          const ecAfterA =
            await oa.executionContractServices.getExecutionContract.execute({
              executionContractId: contract.executionContractId,
            });
          expect(ecAfterA.ok).toBe(true);
          if (!ecAfterA.ok) throw new Error("ec after A");
          expect(ecAfterA.contract.status).toBe("confirmed");
          contract = ecAfterA.contract;

          // Retain worktree — do NOT mark campaign reconciled yet.
          harnessState.phase = "A_RECONCILED_RETAINED";
          await writeLaunchFrontierSnapshot({
            state: harnessState,
            phase: "A_RECONCILED_RETAINED",
          });

          // ----- Attempt B: bounded local-commit under SAME EC (Cont01 resume) -----
          const selectedB = await attempts.selectExecutionAgent.execute({
            attemptId: attemptBId,
            executionContractId: contract.executionContractId,
            idempotencyKey: `idem:sel:${attemptBId}`,
            actor: PILOTE,
            authorityEvidenceId: requireAuth(execAuth),
            expectedContractVersion: contract.version,
            selectionProfile: "standard",
            selectionStrategy: "capabilities_deterministic",
            requestedAgentRef: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
            systemInitiated: true,
          });
          expect(selectedB.ok).toBe(true);
          if (!selectedB.ok) throw new Error(selectedB.error.message);
          expect(selectedB.attempt.selectedAgentRef).toBe(
            M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
          );
          expect(selectedB.attempt.selectedAgentRef).not.toBe(
            M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
          );

          const gateB = await attempts.grantRealExecutionGate!.execute({
            grantId: `gd:gcec-commit-b:${attemptBId}`.slice(0, 128),
            attemptId: attemptBId,
            actor: PILOTE,
            expiresAt,
            authorityEvidenceId: requireAuth(execAuth),
          });
          expect(gateB.ok).toBe(true);
          if (!gateB.ok) throw new Error(gateB.error.message);

          const gitActionRef = buildGitEffectActionRef({
            executionContractId: contract.executionContractId,
            effect: "git.commit",
            repositoryRef: IDENTITY,
            branchOrRef: BRANCH,
          });
          const gitAuth = registerLocalPiloteAuthority({
            authorityResolver: oa.authorityResolver,
            scope: gitActionRef,
            issuedAt: NOW,
            evidenceId: `evd:gcec-commit-git:${contract.executionContractId}`,
            forceEnable: true,
          });
          const gitConfirmId = `cfm:git-commit:${contract.executionContractId}`;
          const gitRequested =
            await oa.decisionServices.requestConfirmation.execute({
              confirmationId: gitConfirmId,
              level: "N3",
              actionRef: gitActionRef,
              requestedBy: PILOTE,
              requestedTo: PILOTE,
              scope: gitActionRef,
              idempotencyKey: `idem:${gitConfirmId}`,
              decisionRef: decisionId,
            });
          expect(gitRequested.ok).toBe(true);
          const gitGranted =
            await oa.decisionServices.grantConfirmation.execute({
              confirmationId: gitConfirmId,
              actor: PILOTE,
              authorityEvidenceId: requireAuth(gitAuth),
            });
          expect(gitGranted.ok).toBe(true);
          const gitCnf = await oa.decisionServices.confirmations.findById(
            gitConfirmId,
          );
          expect(gitCnf?.status).toBe("granted");

          // Cont01 + server-derived gitCommitSpec built inside StartExecution.
          const startedB = await attempts.startExecution.execute({
            attemptId: attemptBId,
            actor: PILOTE,
            authorityEvidenceId: requireAuth(execAuth),
            confirmations: gitCnf ? [gitCnf] : [],
            confirmationMatch: {
              repositoryRef: IDENTITY,
              branchOrRef: BRANCH,
              actorId: PILOTE.actorId,
            },
            verifiedEffects: ["filesystem.create", "filesystem.modify"],
          });
          expect(startedB.ok).toBe(true);
          if (!startedB.ok) {
            throw new Error(
              `StartExecution B failed: ${startedB.error.detailCode} ${startedB.error.internalCauseRef ?? ""} ${startedB.error.message}`,
            );
          }
          expect(startedB.attempt.status).toBe("running");

          const frontiersB =
            await attempts.realBoundary!.safetyJournal.findFrontierByAttempt(
              attemptBId,
            );
          const launchedB = frontiersB.find(
            (row) =>
              row.kind === "LAUNCHED" &&
              typeof row.processRef === "string" &&
              row.processRef.trim().length > 0,
          );
          expect(launchedB?.processRef).toBeTruthy();
          const processRefB = String(launchedB!.processRef);
          expect(processRefB).toMatch(/^(pid:|proc:)/);
          harnessState.processRefB = processRefB;
          harnessState.phase = "B_LAUNCHED_UNRECONCILED";
          await writeLaunchFrontierSnapshot({
            state: harnessState,
            phase: "B_LAUNCHED_UNRECONCILED",
          });

          const attemptRunningB =
            await attempts.getExecutionAttempt.execute({ attemptId: attemptBId });
          expect(attemptRunningB.ok).toBe(true);
          if (!attemptRunningB.ok) throw new Error("attempt B missing");

          const completedB = await completeBoundedReadOnlyLaunch({
            attempt: attemptRunningB.attempt,
            services: attempts,
            awaitIfPending: true,
          });
          expect(completedB.ok).toBe(true);
          if (!completedB.ok) {
            throw new Error(
              `complete B failed: ${completedB.code} ${completedB.message}`,
            );
          }
          expect(completedB.status).toBe("succeeded");
          if (completedB.status !== "succeeded") {
            throw new Error("B not succeeded");
          }

          // Reconstruct the same Cont01 / gitCommitSpec facts StartExecution used.
          const peerListed = await attempts.listExecutionAttempts.execute({
            executionContractId: contract.executionContractId,
          });
          expect(peerListed.ok).toBe(true);
          if (!peerListed.ok) throw new Error("list attempts");
          const evidenceList =
            await oa.evidenceReviewServices.repository.listByProject(projectId);
          const cont = resolvePreCommitWorkspaceContinuation({
            currentAttemptId: attemptBId,
            executionContractId: contract.executionContractId,
            projectId,
            cycleInstanceId,
            expectedHeadSha: BASE_SHA,
            attempts: peerListed.attempts,
            evidence: evidenceList,
            repositoryRef: IDENTITY,
            authorizedEffects: ["git.commit"],
            verifiedEffects: ["filesystem.create", "filesystem.modify"],
          });
          expect(cont.required).toBe(true);
          if (!cont.required || !cont.ok) {
            throw new Error(
              `Cont01 expected: ${"reason" in cont ? cont.reason : "n/a"}`,
            );
          }
          expect(cont.descriptor.priorAttemptId).toBe(attemptAId);

          const contractInputs =
            contract.inputs && typeof contract.inputs === "object"
              ? (contract.inputs as Record<string, unknown>)
              : {};
          const message = deriveTrustedCommitMessage({
            contractInputs: {
              ...contractInputs,
              commitMessage: COMMIT_MSG,
            },
            docsWriteArtifactBrief: ARTIFACT_BRIEF,
          });
          expect(message.ok).toBe(true);
          if (!message.ok) throw new Error(message.reason);
          const builtSpec = buildGitCommitLaunchSpec({
            repositoryRef: IDENTITY,
            expectedParentSha: cont.descriptor.expectedHeadSha,
            exactPaths: cont.descriptor.expectedVerifiedFiles.map((f) => f.path),
            commitMessage: message.message,
            branchOrRef: BRANCH,
          });
          expect(builtSpec.ok).toBe(true);
          if (!builtSpec.ok) throw new Error(builtSpec.reason);

          const governedPath = workspacePathForAttempt(execRoot, attemptAId);
          const workspacePath =
            harnessState.worktreeRef &&
            fs.existsSync(harnessState.worktreeRef)
              ? harnessState.worktreeRef
              : governedPath;
          expect(fs.existsSync(workspacePath)).toBe(true);

          const governed: GovernedWorkspaceObservationContext = {
            workspacePath,
            execRoot,
            priorAttemptId: attemptAId,
            managedRepoRoot: cloneRoot,
            repositoryBinding: {
              identity: IDENTITY,
              remoteUrl: `https://github.com/${IDENTITY}.git`,
              defaultBranch: BRANCH,
            },
            expectedCommonGitRoot: cloneRoot,
          };

          const gitRunner = new NodeGitCommandRunner();
          // CR-09: Evidence creator owns observation — no free LocalCommitObservedFacts.
          const verified = await verifyLocalCommitEffect({
            gitRunner,
            governed,
            spec: builtSpec.spec,
            expectedArtifactDigests: { [TARGET_PATH]: artifactDigest },
            expectedBindings: {
              projectId,
              cycleInstanceId,
              executionContractId: contract.executionContractId,
              executionAttemptId: attemptBId,
            },
            actor: { actorId: PILOTE.actorId, role: "human" },
            evidenceServices: oa.evidenceReviewServices,
            nowIso: oa.clock.nowIso(),
          });
          expect(verified.ok).toBe(true);
          if (!verified.ok) throw new Error(verified.reason);
          expect(verified.status).toBe("verified");
          expect(verified.provenance).toBe(
            "studio:local_git_readonly:observe",
          );
          harnessState.observedH1 = verified.commitSha;

          // Optional forensic re-observe (read-only) — not Evidence authority.
          const observed = await observeLocalCommitFacts({
            gitRunner,
            governed,
            spec: builtSpec.spec,
            expectedArtifactDigests: { [TARGET_PATH]: artifactDigest },
          });
          expect(observed.ok).toBe(true);
          if (!observed.ok) throw new Error(observed.reason);
          expect(observed.facts.observedParentSha.toLowerCase()).toBe(
            BASE_SHA.toLowerCase(),
          );
          expect(observed.facts.commitsFromExpectedParent).toBe(1);
          expect(observed.facts.worktreeDirty).toBe(false);
          expect(verified.commitSha.toLowerCase()).toBe(
            observed.facts.observedHeadSha.toLowerCase(),
          );

          const peersAfter = await attempts.listExecutionAttempts.execute({
            executionContractId: contract.executionContractId,
          });
          expect(peersAfter.ok).toBe(true);
          if (!peersAfter.ok) throw new Error("peers after");
          const evidenceAfter =
            await oa.evidenceReviewServices.repository.listByProject(projectId);
          expect(
            isFsAnchorSupersededByVerifiedLocalCommit({
              projectId,
              cycleInstanceId,
              executionContractId: contract.executionContractId,
              evidence: evidenceAfter,
              priorAttemptId: attemptAId,
              attempts: peersAfter.attempts,
              repositoryRef: IDENTITY,
              expectedParentSha: BASE_SHA,
              requiredPaths: [TARGET_PATH],
            }),
          ).toBe(true);

          // Local clone HEAD anti-effect (worktree commit must not mutate clone).
          expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
          expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);

          // CR-GCEC-AGENT-10 — actual remote read-only AFTER; must equal BEFORE.
          const remoteAfter = captureRemoteRefSnapshot(cloneRoot);
          expect(remoteAfter.headsNormalized).toBe(remoteBefore.headsNormalized);
          expect(remoteAfter.tagsNormalized).toBe(remoteBefore.tagsNormalized);
          expect(remoteAfter.mainSha?.toLowerCase()).toBe(BASE_SHA.toLowerCase());
          expect(remoteAfter.mainSha).toBe(remoteBefore.mainSha);
          expect(remoteAfter.targetBranchLine).toBe(
            remoteBefore.targetBranchLine,
          );

          harnessState.phase = "B_RECONCILED_COMMIT_VERIFIED";
          fs.mkdirSync(PROOF_REVIEW_DIR, { recursive: true });
          writeJson(path.join(PROOF_REVIEW_DIR, "facts.json"), {
            projectId,
            cycleInstanceId,
            executionContractId: contract.executionContractId,
            attemptAId,
            attemptBId,
            attemptAAgent: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
            attemptBAgent: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
            processRefA,
            processRefB,
            worktreeRef: worktree,
            artifactDigest,
            expectedH0: BASE_SHA,
            observedH1: verified.commitSha,
            commitMessage: COMMIT_MSG,
            gitEvidenceId: verified.evidenceId,
            cloneHead: git(cloneRoot, ["rev-parse", "HEAD"]),
            remoteHeadsBefore: remoteBefore.headsNormalized,
            remoteHeadsAfter: remoteAfter.headsNormalized,
            remoteTagsBefore: remoteBefore.tagsNormalized,
            remoteTagsAfter: remoteAfter.tagsNormalized,
            remoteMainBefore: remoteBefore.mainSha,
            remoteMainAfter: remoteAfter.mainSha,
            targetBranchRemoteBefore: remoteBefore.targetBranchLine,
            targetBranchRemoteAfter: remoteAfter.targetBranchLine,
            dGcecAgent01: "ADOPTED",
            crGcecAgent10: "remote_ls_remote_before_after",
          });
          writeJson(path.join(PROOF_REVIEW_DIR, "reconciliation-state.json"), {
            phase: harnessState.phase,
            attemptAId,
            attemptBId,
            attemptAAgent: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
            attemptBAgent: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
            expectedH0: harnessState.expectedH0,
            observedH1: harnessState.observedH1,
            commitMessage: COMMIT_MSG,
            digestHint: createHash("sha256")
              .update(artifactDigest)
              .digest("hex"),
            gitEvidenceId: verified.evidenceId,
            remoteMainBefore: remoteBefore.mainSha,
            remoteMainAfter: remoteAfter.mainSha,
            reconciliationComplete: true,
            dGcecAgent01: "ADOPTED",
          });
          harnessState.durableReviewSnapshotWritten = true;
          harnessState.reconciliationComplete = true;
        } catch (err) {
          let observationSummary: Record<string, unknown> | null = null;
          const processRef =
            harnessState.processRefB ?? harnessState.processRefA;
          try {
            const port = attempts.realBoundary?.launchPort;
            if (port && typeof port.observe === "function" && processRef) {
              const obs = await port.observe(processRef);
              if (obs) {
                observationSummary = {
                  processRef: obs.processRef,
                  exitCode: obs.exitCode,
                  timedOut: obs.timedOut,
                  durationMs: obs.durationMs,
                  realProcessInvoked: obs.realProcessInvoked,
                  worktreeRef: obs.worktreeRef ?? null,
                  stdoutCap: (obs.stdout ?? "").slice(0, 1000),
                  stderrCap: (obs.stderr ?? "").slice(0, 1000),
                };
                if (obs.worktreeRef) {
                  harnessState.worktreeRef = obs.worktreeRef;
                }
              }
            }
          } catch {
            /* ignore observe errors */
          }
          if (!harnessState.worktreeRef && harnessState.execRoot) {
            try {
              const kids = fs.readdirSync(harnessState.execRoot);
              if (kids.length === 1) {
                harnessState.worktreeRef = path.join(
                  harnessState.execRoot,
                  kids[0]!,
                );
              }
            } catch {
              /* ignore */
            }
          }
          let gitFacts: Record<string, unknown> | null = null;
          const wt = harnessState.worktreeRef;
          if (wt && fs.existsSync(wt)) {
            gitFacts = {
              head: safeGit(wt, ["rev-parse", "HEAD"]),
              statusPorcelain: safeGit(wt, ["status", "--porcelain"]),
              diffNameStatus: safeGit(wt, ["diff", "--name-status"]),
              targetArtifactExists: fs.existsSync(path.join(wt, TARGET_PATH)),
              readmeSha256: sha256FileOrMissing(path.join(wt, "README.md")),
              cloneHead: safeGit(cloneRoot, ["rev-parse", "HEAD"]),
            };
          }
          await writeFailureReconciliationSnapshot({
            state: harnessState,
            error: err,
            observationSummary,
            gitFacts,
          });
          throw err;
        }
      },
      20 * 60 * 1000,
    );
  },
);
