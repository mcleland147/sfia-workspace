/**
 * FUTURE REAL harness — same-EC A docs-write → B local commit → C bounded
 * remote push → D bounded PR create. ZERO REAL unless Morris gives a distinct
 * campaign GO; ordinary vitest runs construction assertions only.
 *
 * Full campaign requires ALL five:
 *   SFIA_STUDIO_CURSOR_REAL=1
 *   SFIA_GCEC_CURSOR_REAL_PROOF=1
 *   SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF=1
 *   SFIA_GCEC_CURSOR_REAL_PUSH_PROOF=1
 *   SFIA_GCEC_CURSOR_REAL_PR_PROOF=1
 *
 * Campaign shape:
 *   PRECHECK → M3 initial EC → public supersession with final branch inputs
 *   → validate + confirm final EC → registered managed worktree
 *   → A Product Start/complete/Evidence
 *   → registered Cont01 worktree → B Product Start/complete/Evidence → B_SHA
 *   → local feature ref at B_SHA
 *   → C Product Start/complete/Evidence + independent remote read
 *   → D Product Start/complete/Evidence + independent PR read → STOP.
 *
 * The harness local-ref step is setup, never a substitute for the Product C/D
 * mutations. E is not started; no merge, force, delete, or auto.
 * Fresh proof root, fresh Attempts, and fresh Evidence only.
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
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
  M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
  M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
  ManagedProjectRepositoryResolver,
  NodeGitCommandRunner,
  buildGitCommitLaunchSpec,
  buildGitEffectActionRef,
  deriveDeterministicGcecPushBranch,
  deriveTrustedCommitMessage,
  isFsAnchorSupersededByVerifiedLocalCommit,
  observeLocalCommitFacts,
  resolvePreCommitWorkspaceContinuation,
  sanitizeManagedRepoIdentity,
  verifyLocalCommitEffect,
  verifyPrCreateEffect,
  verifyRemotePushEffect,
  workspacePathForAttempt,
  type GovernedWorkspaceObservationContext,
} from "@/lib/oa/execution-attempt";
import {
  GithubCliRepositoryReadAdapter,
  NodeLocalGitStatusDiffPort,
} from "@/lib/oa/git-ports";
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
import {
  assertRegisteredGitWorktree,
  pathsEqualAllowingRealpath,
} from "./support/gcecRealHarnessWorktree";

export const REAL_SAME_EC_AD_FLAGS = [
  "SFIA_STUDIO_CURSOR_REAL",
  "SFIA_GCEC_CURSOR_REAL_PROOF",
  "SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF",
  "SFIA_GCEC_CURSOR_REAL_PUSH_PROOF",
  "SFIA_GCEC_CURSOR_REAL_PR_PROOF",
] as const;

export function isRealSameEcAdCampaignEnabled(
  env: Readonly<Record<string, string | undefined>>,
): boolean {
  return REAL_SAME_EC_AD_FLAGS.every((flag) => env[flag] === "1");
}

const ENABLED = isRealSameEcAdCampaignEnabled(process.env);

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
const DEFAULT_BRANCH = "main";
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
  | "B_RECONCILED_COMMIT_VERIFIED"
  | "C_LAUNCHED_UNRECONCILED"
  | "C_RECONCILED_PUSH_VERIFIED"
  | "D_LAUNCHED_UNRECONCILED"
  | "D_RECONCILED_PR_VERIFIED";

export type RealSameEcCommitHarnessState = {
  phase: RealCommitHarnessPhase;
  realLaunchConsumed: boolean;
  reconciliationComplete: boolean;
  attemptAId?: string;
  attemptBId?: string;
  attemptCId?: string;
  attemptDId?: string;
  executionContractId?: string;
  processRefA?: string;
  processRefB?: string;
  processRefC?: string;
  processRefD?: string;
  worktreeRef?: string;
  proofRoot?: string;
  execRoot?: string;
  productDbPath?: string;
  safetyJournalPath?: string;
  managedClonePath?: string;
  expectedH0?: string;
  observedH1?: string;
  featureBranch?: string;
  remotePushEvidenceId?: string;
  prCreateEvidenceId?: string;
  prNumber?: number;
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
  readonly targetBranchSha: string | null;
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

function captureRemoteRefSnapshot(
  cloneRoot: string,
  targetBranch: string,
): RemoteRefSnapshot {
  const headsRaw = git(cloneRoot, ["ls-remote", "--heads", "origin"]);
  const tagsRaw = git(cloneRoot, ["ls-remote", "--tags", "origin"]);
  const headsNormalized = normalizeLsRemote(headsRaw);
  const tagsNormalized = normalizeLsRemote(tagsRaw);
  const mainLine = headsNormalized
    .split("\n")
    .find((l) => l.endsWith("\trefs/heads/main") || l.endsWith(" refs/heads/main"));
  const mainSha = mainLine ? mainLine.split(/[\s\t]/)[0] ?? null : null;
  const targetRef = `refs/heads/${targetBranch}`;
  const targetBranchLine =
    headsNormalized
      .split("\n")
      .find((l) => l.endsWith(`\t${targetRef}`) || l.endsWith(` ${targetRef}`)) ??
    null;
  const targetBranchSha = targetBranchLine
    ? targetBranchLine.split(/[\s\t]/)[0] ?? null
    : null;
  return {
    headsNormalized,
    tagsNormalized,
    mainSha,
    targetBranchLine,
    targetBranchSha,
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

type FinalContractBinding = {
  executionContractId: string;
  version: number;
  semanticFingerprint: string;
};

function captureFinalContractBinding(
  contract: ExecutionContract,
): FinalContractBinding {
  if (!contract.semanticFingerprint) {
    throw new Error("final execution contract semantic fingerprint missing");
  }
  return {
    executionContractId: contract.executionContractId,
    version: contract.version,
    semanticFingerprint: contract.semanticFingerprint,
  };
}

function assertFinalContractBindingUnchanged(
  current: ExecutionContract,
  expected: FinalContractBinding,
): void {
  expect(captureFinalContractBinding(current)).toEqual(expected);
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
    attemptCId: input.state.attemptCId ?? null,
    attemptDId: input.state.attemptDId ?? null,
    executionContractId: input.state.executionContractId ?? null,
    processRefA: input.state.processRefA ?? null,
    processRefB: input.state.processRefB ?? null,
    processRefC: input.state.processRefC ?? null,
    processRefD: input.state.processRefD ?? null,
    proofRoot: input.state.proofRoot ?? null,
    execRoot: input.state.execRoot ?? null,
    safetyJournalPath: input.state.safetyJournalPath ?? null,
    productDbPath: input.state.productDbPath ?? null,
    worktreeRef: input.state.worktreeRef ?? null,
    managedClonePath: input.state.managedClonePath ?? null,
    remoteBaseSha: BASE_SHA,
    featureBranch: input.state.featureBranch ?? null,
    remotePushEvidenceId: input.state.remotePushEvidenceId ?? null,
    prCreateEvidenceId: input.state.prCreateEvidenceId ?? null,
    prNumber: input.state.prNumber ?? null,
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
    attemptCId: input.state.attemptCId ?? null,
    attemptDId: input.state.attemptDId ?? null,
    executionContractId: input.state.executionContractId ?? null,
    processRefA: input.state.processRefA ?? null,
    processRefB: input.state.processRefB ?? null,
    processRefC: input.state.processRefC ?? null,
    processRefD: input.state.processRefD ?? null,
    featureBranch: input.state.featureBranch ?? null,
    remotePushEvidenceId: input.state.remotePushEvidenceId ?? null,
    prCreateEvidenceId: input.state.prCreateEvidenceId ?? null,
    prNumber: input.state.prNumber ?? null,
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

describe("GCEC future REAL same-EC A→D — static campaign shape", () => {
  it("requires the complete five-flag opt-in ladder", () => {
    const allEnabled = Object.fromEntries(
      REAL_SAME_EC_AD_FLAGS.map((flag) => [flag, "1"]),
    );
    expect(isRealSameEcAdCampaignEnabled(allEnabled)).toBe(true);
    for (const missing of REAL_SAME_EC_AD_FLAGS) {
      expect(
        isRealSameEcAdCampaignEnabled({ ...allEnabled, [missing]: undefined }),
        missing,
      ).toBe(false);
    }
    expect(
      isRealSameEcAdCampaignEnabled({
        SFIA_STUDIO_CURSOR_REAL: "1",
      }),
    ).toBe(false);
    expect(isRealSameEcAdCampaignEnabled({})).toBe(false);
  });

  it("encodes Product A/B/C/D, fresh Evidence verification, and feature alignment", () => {
    const source = fs.readFileSync(__filename, "utf8");
    expect(source).toContain("M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID");
    expect(source).toContain("M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID");
    expect(source).toContain("M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID");
    expect(source).toContain("M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID");
    expect(source).toContain("getRuntimeApplicationService");
    expect(source).toContain("selectExecutionAgent");
    expect(source).toContain("startExecution");
    expect(source).toContain("observeLocalCommitFacts");
    expect(source).toContain("verifyLocalCommitEffect");
    expect(source).toContain("verifyRemotePushEffect");
    expect(source).toContain("verifyPrCreateEffect");
    expect(source).toContain("deriveDeterministicGcecPushBranch");
    expect(source).toContain("GovernedWorkspaceObservationContext");
    expect(source).toContain('ls-remote", "--heads"');
    expect(source).toContain('ls-remote", "--tags"');
    expect(source).toContain("captureRemoteRefSnapshot");
    expect(source).toContain("assertRegisteredGitWorktree");
    expect(source).toContain("pathsEqualAllowingRealpath");
    expect(source).toContain('"update-ref"');
    expect(source).toContain("B_COMMIT_SHA");
    expect(
      source.includes("resolvePreCommitWorkspaceContinuation") ||
        source.includes("isFsAnchorSupersededByVerifiedLocalCommit"),
    ).toBe(true);
    expect(source).toContain("A_RECONCILED_RETAINED");
    expect(source).toContain("B_RECONCILED_COMMIT_VERIFIED");
    expect(source).toContain("C_RECONCILED_PUSH_VERIFIED");
    expect(source).toContain("D_RECONCILED_PR_VERIFIED");
    expect(source).toContain("SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF");
    expect(source).toContain("SFIA_GCEC_CURSOR_REAL_PUSH_PROOF");
    expect(source).toContain("SFIA_GCEC_CURSOR_REAL_PR_PROOF");
    expect(IDENTITY).toBe("mcleland147/sfia-gcec-proof-task-manager");
    expect(IDENTITY).not.toBe("mcleland147/sfia-workspace");
    // CR-09: Evidence creator must receive gitRunner+governed, not free observed facts.
    expect(source).toMatch(
      /verifyLocalCommitEffect\(\{[\s\S]*?\bgitRunner[\s\S]*?\bgoverned\b/,
    );
    expect(source).not.toMatch(
      /verifyLocalCommitEffect\(\{[\s\S]*?observed:\s*observed\.facts/,
    );
    void M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID;
    void M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID;
    void M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID;
    void M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID;
    void observeLocalCommitFacts;
    void verifyLocalCommitEffect;
    void verifyRemotePushEffect;
    void verifyPrCreateEffect;
    void getRuntimeApplicationService;
    void captureRemoteRefSnapshot;
  });

  it("IMM-01 constructs and freezes the final EC before Confirmation", () => {
    const source = fs.readFileSync(__filename, "utf8");
    const campaignStart = source.lastIndexOf("describe.skipIf(!ENABLED)");
    expect(campaignStart).toBeGreaterThan(0);
    const campaignBody = source.slice(campaignStart);

    expect(campaignBody).not.toContain("contracts.save");
    expect(campaignBody).toContain("supersedeExecutionContract.execute");
    expect(campaignBody).toContain("finalExecutionContractId");
    expect(campaignBody).toContain("FINAL_BINDING");
    expect(campaignBody).toContain("assertFinalContractBindingUnchanged");

    const finalIdIndex = campaignBody.indexOf(
      "const finalExecutionContractId",
    );
    const featureBranchIndex = campaignBody.indexOf(
      "const featureBranch = deriveDeterministicGcecPushBranch",
    );
    const supersedeIndex = campaignBody.indexOf(
      "supersedeExecutionContract.execute",
    );
    const validateIndex = campaignBody.indexOf(
      "validateExecutionContract.execute",
    );
    const confirmationIndex = campaignBody.indexOf(
      "requestConfirmation.execute",
    );
    expect(finalIdIndex).toBeGreaterThan(-1);
    expect(featureBranchIndex).toBeGreaterThan(finalIdIndex);
    expect(
      campaignBody.slice(featureBranchIndex, supersedeIndex),
    ).toContain("finalExecutionContractId");
    expect(supersedeIndex).toBeGreaterThan(featureBranchIndex);
    expect(validateIndex).toBeGreaterThan(supersedeIndex);
    expect(confirmationIndex).toBeGreaterThan(validateIndex);
    expect(
      campaignBody.match(/assertFinalContractBindingUnchanged\(/g),
    ).toHaveLength(4);
  });

  it("campaign body has no outer mutation substitute and never starts E", () => {
    const source = fs.readFileSync(__filename, "utf8");
    const campaignStart = source.lastIndexOf("describe.skipIf(!ENABLED)");
    expect(campaignStart).toBeGreaterThan(0);
    const campaignBody = source.slice(campaignStart);
    expect(campaignBody).not.toMatch(
      /\bgit\([^,\n]+,\s*\[\s*"push"(?:\s*,|\s*\])/,
    );
    expect(campaignBody).not.toMatch(
      /execFileSync\(\s*"git"\s*,\s*\[\s*"push"(?:\s*,|\s*\])/,
    );
    expect(campaignBody).not.toMatch(
      /execFileSync\(\s*"gh"\s*,\s*\[\s*"pr"\s*,\s*"(?:create|merge)"/,
    );
    expect(campaignBody).not.toMatch(
      /\[\s*"pr"\s*,\s*"(?:create|merge)"(?:\s*,|\s*\])/,
    );
    const requestedAgents = [
      ...campaignBody.matchAll(/requestedAgentRef:\s*([A-Z0-9_]+)/g),
    ].map((match) => match[1]);
    expect(requestedAgents).toEqual([
      "M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID",
      "M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID",
      "M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID",
      "M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID",
    ]);
    expect(campaignBody).not.toContain("M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID");
    expect(campaignBody).not.toContain("bounded_pr_merge");
    expect(campaignBody).toContain("GithubCliRepositoryReadAdapter");
  });

  it("shouldPreserveRealCommitProofState covers A/B/C/D launch failures", () => {
    expect(
      shouldPreserveRealCommitProofState({
        realLaunchConsumed: false,
        reconciliationComplete: false,
      }),
    ).toBe(false);
    for (const phase of [
      "A_LAUNCHED_UNRECONCILED",
      "B_LAUNCHED_UNRECONCILED",
      "C_LAUNCHED_UNRECONCILED",
      "D_LAUNCHED_UNRECONCILED",
    ] satisfies RealCommitHarnessPhase[]) {
      expect(
        shouldPreserveRealCommitProofState({
          realLaunchConsumed: true,
          reconciliationComplete: false,
        }),
        phase,
      ).toBe(true);
    }
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
  "GCEC future REAL same-EC A→D — Morris-gated campaign",
  () => {
    it(
      "REAL A→D: docs-write → local commit → feature push → PR create → STOP",
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
        expect(IDENTITY).toBe("mcleland147/sfia-gcec-proof-task-manager");
        expect(IDENTITY).not.toBe("mcleland147/sfia-workspace");

        // Harness preflight before A: the managed clone must itself be a
        // registered Git worktree. Product validation remains unchanged.
        assertRegisteredGitWorktree({
          repositoryRoot: cloneRoot,
          worktreePath: cloneRoot,
        });

        const root = tempDir("gcec-real-ad-");
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

        const runtime = getRuntimeApplicationService({
          registryRoot: REGISTRY_ROOT,
          schemasRoot: SCHEMAS_ROOT,
          nowIso: NOW,
          idSource: new FixedIdSource("ad"),
          auditMode: "noop",
          productDbPath: harnessState.productDbPath,
          realBoundaryEnv: process.env,
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
          objective: "GCEC Cursor REAL same-EC A→D governed lifecycle proof",
          context: "proof-vehicle",
          criticality: "STANDARD",
          constraints: ["BOUNDED REAL A→D; STOP BEFORE MERGE"],
          shortReference: "GCECAD",
          idempotencyKey: "idem:gcec-cursor-real-ad",
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
            defaultBranch: DEFAULT_BRANCH,
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
        const durableInitialEc =
          await oa.executionContractServices.getExecutionContract.execute({
            executionContractId: prepared.payload.successor.executionContractId,
          });
        expect(durableInitialEc.ok).toBe(true);
        if (!durableInitialEc.ok) throw new Error("initial EC missing");
        const initialEc = durableInitialEc.contract;
        expect(["confirmation_required", "validated"]).toContain(initialEc.status);
        expect(initialEc.status).not.toBe("confirmed");
        expect(initialEc.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
        const initialInputs = (initialEc.inputs ?? {}) as Record<string, unknown>;
        expect(
          initialInputs.repositoryRef ?? initialInputs.targetRepositoryRef,
        ).toBe(IDENTITY);
        expect(initialInputs.targetPath).toBe(TARGET_PATH);
        expect(initialInputs.baseHeadSha).toBe(BASE_SHA);

        const sanitizedDecisionOrInitialId = decisionId.replace(
          /[^a-zA-Z0-9_.-]/g,
          "-",
        );
        const finalExecutionContractId =
          `xct:gcec-ad-final:${sanitizedDecisionOrInitialId.slice(0, 40)}`;
        expect(finalExecutionContractId).toMatch(/^xct:/);
        expect(finalExecutionContractId).not.toBe(initialEc.executionContractId);
        const featureBranch = deriveDeterministicGcecPushBranch(
          finalExecutionContractId,
        );
        expect(featureBranch).not.toBe(DEFAULT_BRANCH);
        expect(featureBranch).not.toBe("master");
        harnessState.featureBranch = featureBranch;

        const execAuth = registerLocalPiloteAuthority({
          authorityResolver: oa.authorityResolver,
          scope: initialEc.scope,
          issuedAt: NOW,
          evidenceId: `evd:gcec-commit-exec:${finalExecutionContractId}`,
          forceEnable: true,
        });

        const superseded =
          await oa.executionContractServices.supersedeExecutionContract.execute({
            newExecutionContractId: finalExecutionContractId,
            supersedesExecutionContractId: initialEc.executionContractId,
            supersessionReason: "gcec_ad_feature_branch_pre_confirm",
            actor: PILOTE,
            authorityEvidenceId: requireAuth(execAuth),
            expectedVersion: initialEc.version,
            status: "draft",
            inputs: {
              ...(initialEc.inputs ?? {}),
              workingBranch: featureBranch,
              commitMessage: COMMIT_MSG,
              prTitle: COMMIT_MSG,
              prBody:
                "Morris-gated GCEC proof through D; no merge is authorized.",
            },
          });
        expect(superseded.ok).toBe(true);
        if (!superseded.ok) {
          throw new Error(
            `supersede final EC failed: ${superseded.error.detailCode}`,
          );
        }
        expect(superseded.contract.executionContractId).toBe(
          finalExecutionContractId,
        );
        expect(superseded.contract.supersedesExecutionContractId).toBe(
          initialEc.executionContractId,
        );

        const validatedFinal =
          await oa.executionContractServices.validateExecutionContract.execute({
            executionContractId: finalExecutionContractId,
            actor: PILOTE,
            authorityEvidenceId: requireAuth(execAuth),
            expectedVersion: superseded.contract.version,
          });
        expect(validatedFinal.ok).toBe(true);
        if (!validatedFinal.ok) {
          throw new Error(
            `validate final EC failed: ${validatedFinal.error.detailCode}`,
          );
        }
        let contract = validatedFinal.contract;
        expect(contract.executionContractId).toBe(finalExecutionContractId);
        const finalInputs = (contract.inputs ?? {}) as Record<string, unknown>;
        expect(finalInputs.workingBranch).toBe(featureBranch);
        expect(finalInputs.commitMessage).toBe(COMMIT_MSG);
        expect(finalInputs.prTitle).toBe(COMMIT_MSG);
        expect(finalInputs.prBody).toBe(
          "Morris-gated GCEC proof through D; no merge is authorized.",
        );

        const durableSupersededInitial =
          await oa.executionContractServices.getExecutionContract.execute({
            executionContractId: initialEc.executionContractId,
          });
        expect(durableSupersededInitial.ok).toBe(true);
        if (!durableSupersededInitial.ok) {
          throw new Error("superseded initial EC missing");
        }
        expect(durableSupersededInitial.contract.status).toBe("superseded");

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
        expect(confirmed.contract.executionContractId).toBe(
          finalExecutionContractId,
        );
        const durableFinalAfterConfirm =
          await oa.executionContractServices.getExecutionContract.execute({
            executionContractId: finalExecutionContractId,
          });
        expect(durableFinalAfterConfirm.ok).toBe(true);
        if (!durableFinalAfterConfirm.ok) {
          throw new Error("confirmed final EC missing");
        }
        expect(durableFinalAfterConfirm.contract.status).toBe("confirmed");
        expect(durableFinalAfterConfirm.contract.immutableAfterConfirm).toBe(
          true,
        );
        const FINAL_BINDING = captureFinalContractBinding(
          durableFinalAfterConfirm.contract,
        );
        contract = durableFinalAfterConfirm.contract;
        harnessState.executionContractId = contract.executionContractId;

        // Read-only campaign baseline, after the deterministic branch can be
        // derived but before any REAL launch. A prior branch/PR is not reused.
        const remoteBefore = captureRemoteRefSnapshot(
          cloneRoot,
          featureBranch,
        );
        expect(remoteBefore.mainSha?.toLowerCase()).toBe(
          BASE_SHA.toLowerCase(),
        );
        expect(remoteBefore.headsNormalized.length).toBeGreaterThan(0);
        expect(remoteBefore.targetBranchLine).toBeNull();
        const repositoryRead = new GithubCliRepositoryReadAdapter({
          cwd: cloneRoot,
        });
        const priorPrs = await repositoryRead.listPullRequests({
          repositoryRef: IDENTITY,
          state: "all",
          limit: 100,
        });
        expect(
          priorPrs.filter((pr) => pr.headBranch === featureBranch),
        ).toHaveLength(0);
        const evidenceBeforeCampaign =
          await oa.evidenceReviewServices.repository.listByProject(projectId);
        expect(
          evidenceBeforeCampaign.some(
            (evidence) =>
              evidence.bindings?.executionContractId ===
              contract.executionContractId,
          ),
        ).toBe(false);

        expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);
        expect(M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID).not.toBe(
          M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
        );

        const attempts = oa.executionAttemptServices;
        const initialAttemptsBeforeA =
          await attempts.listExecutionAttempts.execute({
            executionContractId: initialEc.executionContractId,
          });
        expect(initialAttemptsBeforeA.ok).toBe(true);
        if (!initialAttemptsBeforeA.ok) {
          throw new Error("initial EC attempt list before A");
        }
        expect(initialAttemptsBeforeA.attempts).toHaveLength(0);
        const attemptAId =
          `xat:gcec-commit-a:${contract.executionContractId}`.slice(0, 128);
        const attemptBId =
          `xat:gcec-commit-b:${contract.executionContractId}`.slice(0, 128);
        const attemptCId =
          `xat:gcec-push-c:${contract.executionContractId}`.slice(0, 128);
        const attemptDId =
          `xat:gcec-pr-d:${contract.executionContractId}`.slice(0, 128);
        expect(new Set([attemptAId, attemptBId, attemptCId, attemptDId]).size).toBe(
          4,
        );
        harnessState.attemptAId = attemptAId;
        harnessState.attemptBId = attemptBId;
        harnessState.attemptCId = attemptCId;
        harnessState.attemptDId = attemptDId;

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

        let artifactDigest = "";
        let worktree = "";

        try {
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
          harnessState.realLaunchConsumed = true;
          harnessState.phase = "A_LAUNCHED_UNRECONCILED";
          await writeLaunchFrontierSnapshot({
            state: harnessState,
            phase: "A_LAUNCHED_UNRECONCILED",
          });

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
          harnessState.processRefA = processRefA;
          const expectedAttemptAWorktree = workspacePathForAttempt(
            execRoot,
            attemptAId,
          );
          const registeredAttemptAWorktree = assertRegisteredGitWorktree({
            repositoryRoot: cloneRoot,
            worktreePath: expectedAttemptAWorktree,
          });
          expect(
            pathsEqualAllowingRealpath(
              registeredAttemptAWorktree,
              expectedAttemptAWorktree,
            ),
          ).toBe(true);
          await writeLaunchFrontierSnapshot({
            state: harnessState,
            phase: "A_LAUNCHED_UNRECONCILED",
          });

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
          expect(
            pathsEqualAllowingRealpath(worktree, expectedAttemptAWorktree),
          ).toBe(true);
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
          assertFinalContractBindingUnchanged(
            ecAfterA.contract,
            FINAL_BINDING,
          );
          contract = ecAfterA.contract;

          // Retain worktree — do NOT mark campaign reconciled yet.
          harnessState.phase = "A_RECONCILED_RETAINED";
          await writeLaunchFrontierSnapshot({
            state: harnessState,
            phase: "A_RECONCILED_RETAINED",
          });

          // ----- Attempt B: bounded local-commit under SAME EC (Cont01 resume) -----
          // Harness Cont01 alignment check; Product performs its own unchanged,
          // stricter resume validation again inside StartExecution.
          assertRegisteredGitWorktree({
            repositoryRoot: cloneRoot,
            worktreePath: worktree,
          });
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
            branchOrRef: DEFAULT_BRANCH,
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
              branchOrRef: DEFAULT_BRANCH,
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
          harnessState.phase = "B_LAUNCHED_UNRECONCILED";
          await writeLaunchFrontierSnapshot({
            state: harnessState,
            phase: "B_LAUNCHED_UNRECONCILED",
          });

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
            branchOrRef: DEFAULT_BRANCH,
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
              defaultBranch: DEFAULT_BRANCH,
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

          const B_COMMIT_SHA = verified.commitSha.toLowerCase();
          expect(B_COMMIT_SHA).toMatch(/^[0-9a-f]{40}$/);
          harnessState.observedH1 = B_COMMIT_SHA;

          // A/B anti-effect: neither Product step changed the remote.
          expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
          expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);
          const remoteAfterB = captureRemoteRefSnapshot(
            cloneRoot,
            featureBranch,
          );
          expect(remoteAfterB.headsNormalized).toBe(
            remoteBefore.headsNormalized,
          );
          expect(remoteAfterB.tagsNormalized).toBe(remoteBefore.tagsNormalized);
          expect(remoteAfterB.mainSha).toBe(remoteBefore.mainSha);
          expect(remoteAfterB.targetBranchLine).toBeNull();
          harnessState.phase = "B_RECONCILED_COMMIT_VERIFIED";
          await writeLaunchFrontierSnapshot({
            state: harnessState,
            phase: "B_RECONCILED_COMMIT_VERIFIED",
          });

          const ecAfterB =
            await oa.executionContractServices.getExecutionContract.execute({
              executionContractId: contract.executionContractId,
            });
          expect(ecAfterB.ok).toBe(true);
          if (!ecAfterB.ok) throw new Error("ec after B");
          assertFinalContractBindingUnchanged(
            ecAfterB.contract,
            FINAL_BINDING,
          );
          contract = ecAfterB.contract;

          // Cont01 worktree and managed clone share a common Git directory.
          // Create the local feature ref Product C requires; Product still owns
          // the bounded remote push itself.
          assertRegisteredGitWorktree({
            repositoryRoot: cloneRoot,
            worktreePath: worktree,
          });
          git(worktree, [
            "update-ref",
            `refs/heads/${featureBranch}`,
            B_COMMIT_SHA,
          ]);
          expect(
            git(worktree, ["rev-parse", `refs/heads/${featureBranch}`]),
          ).toBe(B_COMMIT_SHA);
          expect(git(worktree, ["rev-parse", "HEAD"])).toBe(B_COMMIT_SHA);
          expect(git(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);

          // ----- Attempt C: Product bounded remote push under SAME EC -----
          const selectedC = await attempts.selectExecutionAgent.execute({
            attemptId: attemptCId,
            executionContractId: contract.executionContractId,
            idempotencyKey: `idem:sel:${attemptCId}`,
            actor: PILOTE,
            authorityEvidenceId: requireAuth(execAuth),
            expectedContractVersion: contract.version,
            selectionProfile: "standard",
            selectionStrategy: "capabilities_deterministic",
            requestedAgentRef: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
            systemInitiated: true,
          });
          expect(selectedC.ok).toBe(true);
          if (!selectedC.ok) throw new Error(selectedC.error.message);
          expect(selectedC.attempt.selectedAgentRef).toBe(
            M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
          );

          const gateC = await attempts.grantRealExecutionGate!.execute({
            grantId: `gd:gcec-push-c:${attemptCId}`.slice(0, 128),
            attemptId: attemptCId,
            actor: PILOTE,
            expiresAt,
            authorityEvidenceId: requireAuth(execAuth),
          });
          expect(gateC.ok).toBe(true);
          if (!gateC.ok) throw new Error(gateC.error.message);

          const pushActionRef = buildGitEffectActionRef({
            executionContractId: contract.executionContractId,
            effect: "git.push",
            repositoryRef: IDENTITY,
            branchOrRef: featureBranch,
          });
          const pushAuth = registerLocalPiloteAuthority({
            authorityResolver: oa.authorityResolver,
            scope: pushActionRef,
            issuedAt: NOW,
            evidenceId: `evd:gcec-push:${contract.executionContractId}`,
            forceEnable: true,
          });
          const pushConfirmId = `cfm:git-push:${contract.executionContractId}`;
          const pushRequested =
            await oa.decisionServices.requestConfirmation.execute({
              confirmationId: pushConfirmId,
              level: "N3",
              actionRef: pushActionRef,
              requestedBy: PILOTE,
              requestedTo: PILOTE,
              scope: pushActionRef,
              idempotencyKey: `idem:${pushConfirmId}`,
              decisionRef: decisionId,
            });
          expect(pushRequested.ok).toBe(true);
          const pushGranted =
            await oa.decisionServices.grantConfirmation.execute({
              confirmationId: pushConfirmId,
              actor: PILOTE,
              authorityEvidenceId: requireAuth(pushAuth),
            });
          expect(pushGranted.ok).toBe(true);
          const pushConfirmation =
            await oa.decisionServices.confirmations.findById(pushConfirmId);
          expect(pushConfirmation?.status).toBe("granted");

          const startedC = await attempts.startExecution.execute({
            attemptId: attemptCId,
            actor: PILOTE,
            authorityEvidenceId: requireAuth(execAuth),
            confirmations: pushConfirmation ? [pushConfirmation] : [],
            confirmationMatch: {
              repositoryRef: IDENTITY,
              branchOrRef: featureBranch,
              actorId: PILOTE.actorId,
            },
            verifiedEffects: [
              "filesystem.create",
              "filesystem.modify",
              "git.commit",
            ],
          });
          expect(startedC.ok).toBe(true);
          if (!startedC.ok) {
            throw new Error(
              `StartExecution C failed: ${startedC.error.detailCode} ${startedC.error.internalCauseRef ?? ""} ${startedC.error.message}`,
            );
          }
          expect(startedC.attempt.status).toBe("running");
          harnessState.phase = "C_LAUNCHED_UNRECONCILED";
          await writeLaunchFrontierSnapshot({
            state: harnessState,
            phase: "C_LAUNCHED_UNRECONCILED",
          });

          const frontiersC =
            await attempts.realBoundary!.safetyJournal.findFrontierByAttempt(
              attemptCId,
            );
          const launchedC = frontiersC.find(
            (row) =>
              row.kind === "LAUNCHED" &&
              typeof row.processRef === "string" &&
              row.processRef.trim().length > 0,
          );
          expect(launchedC?.processRef).toBeTruthy();
          const processRefC = String(launchedC!.processRef);
          expect(processRefC).toMatch(/^(pid:|proc:)/);
          harnessState.processRefC = processRefC;
          await writeLaunchFrontierSnapshot({
            state: harnessState,
            phase: "C_LAUNCHED_UNRECONCILED",
          });

          const attemptRunningC =
            await attempts.getExecutionAttempt.execute({ attemptId: attemptCId });
          expect(attemptRunningC.ok).toBe(true);
          if (!attemptRunningC.ok) throw new Error("attempt C missing");
          const completedC = await completeBoundedReadOnlyLaunch({
            attempt: attemptRunningC.attempt,
            services: attempts,
            awaitIfPending: true,
          });
          expect(completedC.ok).toBe(true);
          if (!completedC.ok) {
            throw new Error(
              `complete C failed: ${completedC.code} ${completedC.message}`,
            );
          }
          expect(completedC.status).toBe("succeeded");
          if (completedC.status !== "succeeded") {
            throw new Error("C not succeeded");
          }

          const pushVerified = await verifyRemotePushEffect({
            repositoryRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            branch: featureBranch,
            claimedCommitSha: B_COMMIT_SHA,
            remote: "origin",
            expectedBindings: {
              projectId,
              cycleInstanceId,
              executionContractId: contract.executionContractId,
              executionAttemptId: attemptCId,
            },
            actor: { actorId: PILOTE.actorId, role: "human" },
            nowIso: oa.clock.nowIso(),
          });
          expect(pushVerified.ok).toBe(true);
          if (!pushVerified.ok) throw new Error(pushVerified.reason);
          expect(pushVerified.status).toBe("verified");
          harnessState.remotePushEvidenceId = pushVerified.evidenceId;
          harnessState.phase = "C_RECONCILED_PUSH_VERIFIED";

          // Independent remote read: feature == B SHA while main is untouched.
          // Heads are intentionally not compared wholesale after C.
          const remoteAfterC = captureRemoteRefSnapshot(
            cloneRoot,
            featureBranch,
          );
          expect(remoteAfterC.targetBranchSha?.toLowerCase()).toBe(
            B_COMMIT_SHA,
          );
          expect(remoteAfterC.mainSha?.toLowerCase()).toBe(
            BASE_SHA.toLowerCase(),
          );
          expect(remoteAfterC.mainSha).toBe(remoteBefore.mainSha);
          expect(remoteAfterC.tagsNormalized).toBe(remoteBefore.tagsNormalized);
          expect(remoteAfterC.headsNormalized).not.toBe(
            remoteBefore.headsNormalized,
          );
          await writeLaunchFrontierSnapshot({
            state: harnessState,
            phase: "C_RECONCILED_PUSH_VERIFIED",
          });
          const ecAfterC =
            await oa.executionContractServices.getExecutionContract.execute({
              executionContractId: contract.executionContractId,
            });
          expect(ecAfterC.ok).toBe(true);
          if (!ecAfterC.ok) throw new Error("ec after C");
          assertFinalContractBindingUnchanged(
            ecAfterC.contract,
            FINAL_BINDING,
          );
          contract = ecAfterC.contract;

          // ----- Attempt D: Product bounded PR create under SAME EC -----
          const selectedD = await attempts.selectExecutionAgent.execute({
            attemptId: attemptDId,
            executionContractId: contract.executionContractId,
            idempotencyKey: `idem:sel:${attemptDId}`,
            actor: PILOTE,
            authorityEvidenceId: requireAuth(execAuth),
            expectedContractVersion: contract.version,
            selectionProfile: "standard",
            selectionStrategy: "capabilities_deterministic",
            requestedAgentRef: M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
            systemInitiated: true,
          });
          expect(selectedD.ok).toBe(true);
          if (!selectedD.ok) throw new Error(selectedD.error.message);
          expect(selectedD.attempt.selectedAgentRef).toBe(
            M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
          );

          const gateD = await attempts.grantRealExecutionGate!.execute({
            grantId: `gd:gcec-pr-d:${attemptDId}`.slice(0, 128),
            attemptId: attemptDId,
            actor: PILOTE,
            expiresAt,
            authorityEvidenceId: requireAuth(execAuth),
          });
          expect(gateD.ok).toBe(true);
          if (!gateD.ok) throw new Error(gateD.error.message);

          const prActionRef = buildGitEffectActionRef({
            executionContractId: contract.executionContractId,
            effect: "github.pr.create",
            repositoryRef: IDENTITY,
            branchOrRef: featureBranch,
          });
          const prAuth = registerLocalPiloteAuthority({
            authorityResolver: oa.authorityResolver,
            scope: prActionRef,
            issuedAt: NOW,
            evidenceId: `evd:gcec-pr:${contract.executionContractId}`,
            forceEnable: true,
          });
          const prConfirmId = `cfm:pr-create:${contract.executionContractId}`;
          const prRequested =
            await oa.decisionServices.requestConfirmation.execute({
              confirmationId: prConfirmId,
              level: "N3",
              actionRef: prActionRef,
              requestedBy: PILOTE,
              requestedTo: PILOTE,
              scope: prActionRef,
              idempotencyKey: `idem:${prConfirmId}`,
              decisionRef: decisionId,
            });
          expect(prRequested.ok).toBe(true);
          const prGranted =
            await oa.decisionServices.grantConfirmation.execute({
              confirmationId: prConfirmId,
              actor: PILOTE,
              authorityEvidenceId: requireAuth(prAuth),
            });
          expect(prGranted.ok).toBe(true);
          const prConfirmation =
            await oa.decisionServices.confirmations.findById(prConfirmId);
          expect(prConfirmation?.status).toBe("granted");

          // Runtime Product composition supplies its default read-only
          // GithubCliRepositoryReadAdapter for D's fresh remote-head preflight.
          const startedD = await attempts.startExecution.execute({
            attemptId: attemptDId,
            actor: PILOTE,
            authorityEvidenceId: requireAuth(execAuth),
            confirmations: prConfirmation ? [prConfirmation] : [],
            confirmationMatch: {
              repositoryRef: IDENTITY,
              branchOrRef: featureBranch,
              actorId: PILOTE.actorId,
            },
            verifiedEffects: [
              "filesystem.create",
              "filesystem.modify",
              "git.commit",
              "git.push",
            ],
          });
          expect(startedD.ok).toBe(true);
          if (!startedD.ok) {
            throw new Error(
              `StartExecution D failed: ${startedD.error.detailCode} ${startedD.error.internalCauseRef ?? ""} ${startedD.error.message}`,
            );
          }
          expect(startedD.attempt.status).toBe("running");
          harnessState.phase = "D_LAUNCHED_UNRECONCILED";
          await writeLaunchFrontierSnapshot({
            state: harnessState,
            phase: "D_LAUNCHED_UNRECONCILED",
          });

          const frontiersD =
            await attempts.realBoundary!.safetyJournal.findFrontierByAttempt(
              attemptDId,
            );
          const launchedD = frontiersD.find(
            (row) =>
              row.kind === "LAUNCHED" &&
              typeof row.processRef === "string" &&
              row.processRef.trim().length > 0,
          );
          expect(launchedD?.processRef).toBeTruthy();
          const processRefD = String(launchedD!.processRef);
          expect(processRefD).toMatch(/^(pid:|proc:)/);
          harnessState.processRefD = processRefD;
          await writeLaunchFrontierSnapshot({
            state: harnessState,
            phase: "D_LAUNCHED_UNRECONCILED",
          });

          const attemptRunningD =
            await attempts.getExecutionAttempt.execute({ attemptId: attemptDId });
          expect(attemptRunningD.ok).toBe(true);
          if (!attemptRunningD.ok) throw new Error("attempt D missing");
          const completedD = await completeBoundedReadOnlyLaunch({
            attempt: attemptRunningD.attempt,
            services: attempts,
            awaitIfPending: true,
          });
          expect(completedD.ok).toBe(true);
          if (!completedD.ok) {
            throw new Error(
              `complete D failed: ${completedD.code} ${completedD.message}`,
            );
          }
          expect(completedD.status).toBe("succeeded");
          if (completedD.status !== "succeeded") {
            throw new Error("D not succeeded");
          }

          const openPrs = await repositoryRead.listPullRequests({
            repositoryRef: IDENTITY,
            state: "open",
            limit: 100,
          });
          const matchingPrs = openPrs.filter(
            (pr) =>
              pr.headBranch === featureBranch &&
              pr.baseBranch === DEFAULT_BRANCH &&
              pr.headSha.toLowerCase() === B_COMMIT_SHA,
          );
          expect(matchingPrs).toHaveLength(1);
          const claimedPr = matchingPrs[0]!;
          const prVerified = await verifyPrCreateEffect({
            repositoryRead,
            evidenceServices: oa.evidenceReviewServices,
            repositoryRef: IDENTITY,
            claimedPrNumber: claimedPr.number,
            claimedHeadSha: B_COMMIT_SHA,
            expectedHeadBranch: featureBranch,
            expectedBaseBranch: DEFAULT_BRANCH,
            expectedHeadSha: B_COMMIT_SHA,
            expectedBindings: {
              projectId,
              cycleInstanceId,
              executionContractId: contract.executionContractId,
              executionAttemptId: attemptDId,
            },
            actor: { actorId: PILOTE.actorId, role: "human" },
            nowIso: oa.clock.nowIso(),
          });
          expect(prVerified.ok).toBe(true);
          if (!prVerified.ok) throw new Error(prVerified.reason);
          expect(prVerified.status).toBe("verified");
          harnessState.prCreateEvidenceId = prVerified.evidenceId;
          harnessState.prNumber = prVerified.prNumber;

          // Independent read-only `gh pr view` through the Studio adapter.
          const independentlyObservedPr = await repositoryRead.getPullRequest({
            repositoryRef: IDENTITY,
            number: prVerified.prNumber,
          });
          expect(independentlyObservedPr).not.toBeNull();
          expect(independentlyObservedPr?.state).toBe("open");
          expect(independentlyObservedPr?.headBranch).toBe(featureBranch);
          expect(independentlyObservedPr?.baseBranch).toBe(DEFAULT_BRANCH);
          expect(independentlyObservedPr?.headSha.toLowerCase()).toBe(
            B_COMMIT_SHA,
          );
          const remoteAfterD = captureRemoteRefSnapshot(
            cloneRoot,
            featureBranch,
          );
          expect(remoteAfterD.headsNormalized).toBe(
            remoteAfterC.headsNormalized,
          );
          expect(remoteAfterD.tagsNormalized).toBe(
            remoteAfterC.tagsNormalized,
          );
          expect(remoteAfterD.mainSha?.toLowerCase()).toBe(
            BASE_SHA.toLowerCase(),
          );
          expect(remoteAfterD.targetBranchSha?.toLowerCase()).toBe(
            B_COMMIT_SHA,
          );
          const ecAfterD =
            await oa.executionContractServices.getExecutionContract.execute({
              executionContractId: contract.executionContractId,
            });
          expect(ecAfterD.ok).toBe(true);
          if (!ecAfterD.ok) throw new Error("ec after D");
          assertFinalContractBindingUnchanged(
            ecAfterD.contract,
            FINAL_BINDING,
          );
          contract = ecAfterD.contract;

          harnessState.phase = "D_RECONCILED_PR_VERIFIED";
          const attemptsAtStop =
            await attempts.listExecutionAttempts.execute({
              executionContractId: contract.executionContractId,
            });
          expect(attemptsAtStop.ok).toBe(true);
          if (!attemptsAtStop.ok) throw new Error("attempt list at STOP");
          expect(attemptsAtStop.attempts).toHaveLength(4);
          expect(
            new Set(attemptsAtStop.attempts.map((attempt) => attempt.attemptId)),
          ).toEqual(new Set([attemptAId, attemptBId, attemptCId, attemptDId]));
          expect(
            attemptsAtStop.attempts.every(
              (attempt) => attempt.status === "succeeded",
            ),
          ).toBe(true);
          expect(
            attemptsAtStop.attempts.every(
              (attempt) =>
                attempt.executionContractId === finalExecutionContractId,
            ),
          ).toBe(true);
          const initialAttemptsAtStop =
            await attempts.listExecutionAttempts.execute({
              executionContractId: initialEc.executionContractId,
            });
          expect(initialAttemptsAtStop.ok).toBe(true);
          if (!initialAttemptsAtStop.ok) {
            throw new Error("initial EC attempt list at STOP");
          }
          expect(initialAttemptsAtStop.attempts).toHaveLength(0);

          const finalEvidence =
            await oa.evidenceReviewServices.repository.listByProject(projectId);
          for (const expected of [
            { attemptId: attemptAId, source: "execution_attempt:docs_write" },
            { attemptId: attemptBId, source: "git:local_commit" },
            { attemptId: attemptCId, source: "git:remote_push" },
            { attemptId: attemptDId, source: "git:pull_request" },
          ]) {
            expect(
              finalEvidence.some(
                (evidence) =>
                  evidence.status === "verified" &&
                  evidence.source === expected.source &&
                  evidence.bindings?.executionContractId ===
                    contract.executionContractId &&
                  evidence.bindings?.executionAttemptId === expected.attemptId,
              ),
              `${expected.source} must be fresh and bound to ${expected.attemptId}`,
            ).toBe(true);
          }

          // STOP after D. No fifth Attempt is selected or started.
          fs.mkdirSync(PROOF_REVIEW_DIR, { recursive: true });
          writeJson(path.join(PROOF_REVIEW_DIR, "facts.json"), {
            projectId,
            cycleInstanceId,
            executionContractId: contract.executionContractId,
            attemptAId,
            attemptBId,
            attemptCId,
            attemptDId,
            attemptAAgent: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
            attemptBAgent: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
            attemptCAgent: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
            attemptDAgent: M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
            processRefA,
            processRefB,
            processRefC,
            processRefD,
            worktreeRef: worktree,
            featureBranch,
            artifactDigest,
            expectedH0: BASE_SHA,
            observedH1: B_COMMIT_SHA,
            commitMessage: COMMIT_MSG,
            gitEvidenceId: verified.evidenceId,
            remotePushEvidenceId: pushVerified.evidenceId,
            prCreateEvidenceId: prVerified.evidenceId,
            prNumber: prVerified.prNumber,
            prUrl: independentlyObservedPr?.url ?? null,
            cloneHead: git(cloneRoot, ["rev-parse", "HEAD"]),
            remoteHeadsBefore: remoteBefore.headsNormalized,
            remoteHeadsAfterB: remoteAfterB.headsNormalized,
            remoteHeadsAfterC: remoteAfterC.headsNormalized,
            remoteHeadsAfterD: remoteAfterD.headsNormalized,
            remoteTagsBefore: remoteBefore.tagsNormalized,
            remoteTagsAfterC: remoteAfterC.tagsNormalized,
            remoteTagsAfterD: remoteAfterD.tagsNormalized,
            remoteMainBefore: remoteBefore.mainSha,
            remoteMainAfterC: remoteAfterC.mainSha,
            remoteMainAfterD: remoteAfterD.mainSha,
            targetBranchRemoteBefore: remoteBefore.targetBranchLine,
            targetBranchRemoteAfterC: remoteAfterC.targetBranchLine,
            targetBranchRemoteAfterD: remoteAfterD.targetBranchLine,
            stoppedBeforeE: true,
          });
          writeJson(path.join(PROOF_REVIEW_DIR, "reconciliation-state.json"), {
            phase: harnessState.phase,
            attemptAId,
            attemptBId,
            attemptCId,
            attemptDId,
            expectedH0: harnessState.expectedH0,
            observedH1: harnessState.observedH1,
            featureBranch,
            commitMessage: COMMIT_MSG,
            digestHint: createHash("sha256")
              .update(artifactDigest)
              .digest("hex"),
            gitEvidenceId: verified.evidenceId,
            remotePushEvidenceId: pushVerified.evidenceId,
            prCreateEvidenceId: prVerified.evidenceId,
            prNumber: prVerified.prNumber,
            remoteMainBefore: remoteBefore.mainSha,
            remoteMainAfterC: remoteAfterC.mainSha,
            remoteMainAfterD: remoteAfterD.mainSha,
            reconciliationComplete: true,
            stoppedBeforeE: true,
          });
          harnessState.durableReviewSnapshotWritten = true;
          harnessState.reconciliationComplete = true;
        } catch (err) {
          let observationSummary: Record<string, unknown> | null = null;
          const processRef =
            harnessState.processRefD ??
            harnessState.processRefC ??
            harnessState.processRefB ??
            harnessState.processRefA;
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
              featureBranch: harnessState.featureBranch ?? null,
              featureRef:
                harnessState.featureBranch != null
                  ? safeGit(wt, [
                      "rev-parse",
                      `refs/heads/${harnessState.featureBranch}`,
                    ])
                  : null,
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
