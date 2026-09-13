/**
 * GCEC-CROSS-EC-VERIFIED-REMOTE-PUSH-PRIOR-BINDING-01 — phase-scoped integration.
 * EC_C != EC_D; C launch count 0; D reaches fake launch with PR-create only.
 * ZERO MUTATING REAL. @vitest-environment node
 */
import { mkdirSync, mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  assertStudioCursorRealOffForTests,
  buildGitEffectActionRef,
  createM4BoundedPrCreateCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  M4_BOUNDED_PR_CREATE_ACTION,
  M4_BOUNDED_PR_CREATE_CAPABILITY,
  M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
  M4_BOUNDED_PR_CREATE_SCOPE,
  M4_BOUNDED_PR_CREATE_TARGET,
  SqliteRealLaunchSafetyJournal,
  TestExecutionAdapter,
  VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY,
} from "@/lib/oa/execution-attempt";
import {
  FakeRepositoryReadPorts,
  type RepositoryReadPort,
  type RepositoryReadRef,
} from "@/lib/oa/git-ports";
import {
  MORRIS_ACTOR,
  NOW,
  baseBuildRequest,
  buildStack,
  grantContractConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
  selectStandardAgent,
  type Stack,
} from "./helpers";
import { M4_EVIDENCE, M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";

const IDENTITY = "acme/widget";
const FEATURE_BRANCH = "gcec/xec/proof";
const EC_C = "xct:xec-c-push";
const EC_D = "xct:xec-d-pr";
const ATTEMPT_C = "xat:xec-c-push";
const ATTEMPT_D = "xat:xec-d-pr";
const EVIDENCE_C = "ev:xec-c-push";
const H1 = "dddddddddddddddddddddddddddddddddddddddd";
const H_DRIFT = "ffffffffffffffffffffffffffffffffffffffff";

type TrackingRead = RepositoryReadPort & {
  readonly getBranchHeadCalls: Array<RepositoryReadRef & { branch: string }>;
  readonly mutationGuard: { called: boolean };
};

function trackingFake(seed: {
  branch: string;
  sha: string | null;
}): TrackingRead {
  const inner = new FakeRepositoryReadPorts();
  if (seed.sha) inner.seedBranchHead(seed.branch, seed.sha);
  const getBranchHeadCalls: Array<RepositoryReadRef & { branch: string }> = [];
  const mutationGuard = { called: false };
  return {
    getBranchHeadCalls,
    mutationGuard,
    listPullRequests: (i) => inner.listPullRequests(i),
    getPullRequest: (i) => inner.getPullRequest(i),
    listPullRequestFiles: (i) => inner.listPullRequestFiles(i),
    getPullRequestDiff: (i) => inner.getPullRequestDiff(i),
    listCommits: (i) => inner.listCommits(i),
    getCommit: (i) => inner.getCommit(i),
    readFileAtRef: (i) => inner.readFileAtRef(i),
    listPathAtRef: (i) => inner.listPathAtRef(i),
    compareRefs: (i) => inner.compareRefs(i),
    getCiStatus: (i) => inner.getCiStatus(i),
    getReviewStatus: (i) => inner.getReviewStatus(i),
    getMergeInfo: (i) => inner.getMergeInfo(i),
    async getBranchHead(input) {
      getBranchHeadCalls.push({
        repositoryRef: input.repositoryRef,
        branch: input.branch,
      });
      if (seed.sha === null) return null;
      return inner.getBranchHead(input);
    },
  };
}

function pushEvidenceC(projectId: string, cycleInstanceId: string): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: EVIDENCE_C,
    type: "other",
    status: "verified",
    source: "git:remote_push",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    location: `git:remote_push?repo=${encodeURIComponent(IDENTITY)}&remote=origin&refName=${encodeURIComponent(`refs/heads/${FEATURE_BRANCH}`)}&commitSha=${H1}`,
    bindings: {
      projectId,
      cycleInstanceId,
      executionContractId: EC_C,
      executionAttemptId: ATTEMPT_C,
    },
    createdAt: NOW,
    updatedAt: NOW,
    version: 1,
    producedAt: NOW,
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${EVIDENCE_C}`,
      actor: { actorId: "actor:system", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:xec-ev",
    },
  };
}

function dInputs(includeBinding: boolean): Record<string, unknown> {
  const base: Record<string, unknown> = {
    baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    repositoryRef: IDENTITY,
    workingBranch: FEATURE_BRANCH,
    defaultBranch: "main",
    prTitle: "GCEC cross-EC PR create",
    evidenceRequirements: ["git:pull_request"],
  };
  if (includeBinding) {
    base[VERIFIED_REMOTE_PUSH_PRIOR_INPUT_KEY] = {
      sourceExecutionContractId: EC_C,
      sourceExecutionAttemptId: ATTEMPT_C,
      evidenceId: EVIDENCE_C,
      repositoryRef: IDENTITY,
      branchName: FEATURE_BRANCH,
      commitSha: H1,
    };
  }
  return base;
}

async function seedConfirmedPrCreateD(
  stack: Stack,
  includeBinding: boolean,
): Promise<{
  contractId: string;
  version: number;
  projectId: string;
  cycleInstanceId: string;
}> {
  const projectId = "prj:campus360-oa";
  const cycleInstanceId = "cyc:std-001";
  await seedProject(stack.projects, projectId);
  registerMorris(
    stack.decisions.authority,
    M4_BOUNDED_PR_CREATE_SCOPE,
    M4_EVIDENCE,
  );
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack, cycleInstanceId);

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId,
      executionContractId: EC_D,
      idempotencyKey: "idem-xct-xec-d-pr",
      action: M4_BOUNDED_PR_CREATE_ACTION,
      target: M4_BOUNDED_PR_CREATE_TARGET,
      scope: M4_BOUNDED_PR_CREATE_SCOPE,
      requiredCapabilities: [M4_BOUNDED_PR_CREATE_CAPABILITY],
      evidenceRequirements: ["git:pull_request"],
      expectedOutputs: ["git:pull_request"],
      authorityEvidenceId: M4_EVIDENCE,
      inputs: dInputs(includeBinding),
    }),
  );
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build D failed");

  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate D failed");

  const confirmationId = await grantContractConfirmation(stack, {
    confirmationId: "cfm:xec-d-ec",
    scope: M4_BOUNDED_PR_CREATE_SCOPE,
    evidenceId: M4_EVIDENCE,
  });
  const confirmed = await stack.execution.confirmExecutionContract.execute({
    executionContractId: validated.contract.executionContractId,
    confirmationId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
    expectedVersion: validated.contract.version,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm D failed");

  return {
    contractId: confirmed.contract.executionContractId,
    version: confirmed.contract.version,
    projectId,
    cycleInstanceId,
  };
}

async function runStartD(input: {
  includeBinding?: boolean;
  seedEvidence?: boolean;
  remoteSha?: string | null;
  omitRepositoryRead?: boolean;
}): Promise<{
  started: Awaited<
    ReturnType<
      ReturnType<typeof createTestExecutionAttemptServices>["startExecution"]["execute"]
    >
  >;
  launchPort: TestOnlyRealExecutionLaunchPort;
  read: TrackingRead | undefined;
  cLaunchCount: number;
}> {
  const includeBinding = input.includeBinding !== false;
  const seedEvidence = input.seedEvidence !== false;
  const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-xec-d-"));
  mkdirSync(path.join(managedBase, "acme__widget", ".git"), {
    recursive: true,
  });
  const journal = new SqliteRealLaunchSafetyJournal({
    databasePath: path.join(managedBase, "safety.sqlite"),
  });
  const launchPort = new TestOnlyRealExecutionLaunchPort();
  const agents = [createM4BoundedPrCreateCursorAgentDescriptor(NOW)];
  const evidenceBag: Evidence[] = [];
  const read = input.omitRepositoryRead
    ? undefined
    : trackingFake({
        branch: FEATURE_BRANCH,
        sha: input.remoteSha === undefined ? H1 : input.remoteSha,
      });

  const stack = buildStack({
    agents,
    adapter: new TestExecutionAdapter(),
  });
  stack.attempts = createTestExecutionAttemptServices({
    decisionServices: stack.decisions,
    executionContractServices: stack.execution,
    agents,
    adapter: new TestExecutionAdapter(),
    realBoundary: {
      launchPort,
      safetyJournal: journal,
      managedRepoRootBase: managedBase,
    },
    resolveProjectRepositoryBinding: async () => ({
      provider: "github",
      identity: IDENTITY,
      remoteUrl: `https://github.com/${IDENTITY}.git`,
      defaultBranch: "main",
      pathRoot: "docs",
      baseSha: M4_TEST_BASE_HEAD_SHA,
    }),
    listProjectEvidence: async () => ({
      ok: true as const,
      evidence: evidenceBag,
    }),
    ...(read ? { repositoryRead: read } : {}),
    fixedNowIso: NOW,
  }) as typeof stack.attempts;

  const seeded = await seedConfirmedPrCreateD(stack, includeBinding);
  // Critical: NO C Attempt row; NO C launch. Durable Evidence only.
  const cLaunchCount = 0;
  if (seedEvidence) {
    evidenceBag.push(pushEvidenceC(seeded.projectId, seeded.cycleInstanceId));
  }

  const selected = await selectStandardAgent(stack, {
    attemptId: ATTEMPT_D,
    executionContractId: seeded.contractId,
    requestedAgentRef: M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(`select D failed: ${JSON.stringify(selected)}`);

  const granted = await stack.attempts.grantRealExecutionGate!.execute({
    grantId: "gd:xec-d",
    attemptId: ATTEMPT_D,
    actor: MORRIS_ACTOR,
    expiresAt: "2026-07-25T07:00:00.000Z",
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(granted.ok).toBe(true);

  const gitActionRef = buildGitEffectActionRef({
    executionContractId: seeded.contractId,
    effect: "github.pr.create",
    repositoryRef: IDENTITY,
    branchOrRef: FEATURE_BRANCH,
  });
  registerMorris(stack.decisions.authority, gitActionRef, "evd:morris-xec-pr");
  await grantContractConfirmation(stack, {
    confirmationId: "cfm:xec-pr-create",
    actionRef: gitActionRef,
    scope: gitActionRef,
    evidenceId: "evd:morris-xec-pr",
  });
  const gitCnf = await stack.decisions.confirmations.findById(
    "cfm:xec-pr-create",
  );
  expect(gitCnf?.status).toBe("granted");

  const started = await stack.attempts.startExecution.execute({
    attemptId: ATTEMPT_D,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
    confirmations: gitCnf ? [gitCnf] : [],
    confirmationMatch: {
      repositoryRef: IDENTITY,
      branchOrRef: FEATURE_BRANCH,
      actorId: MORRIS_ACTOR.actorId,
    },
  });

  return { started, launchPort, read, cLaunchCount };
}

describe("GCEC cross-EC phase-scoped PR-create integration", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("phase-scoped: EC_C != EC_D, Attempt_C absent, D reaches PR-create launch", async () => {
    const { started, launchPort, read, cLaunchCount } = await runStartD({});
    expect(started.ok).toBe(true);
    if (!started.ok) {
      throw new Error(`start D failed: ${JSON.stringify(started)}`);
    }
    expect(cLaunchCount).toBe(0);
    expect(launchPort.launchCallCount).toBe(1);
    const req = launchPort.calls[0]!;
    expect(req.authorizedEffects).toEqual(["github.pr.create"]);
    expect(req.gitPrCreateSpec).toBeDefined();
    expect(req.gitPrCreateSpec?.headBranch).toBe(FEATURE_BRANCH);
    expect(req.gitPrCreateSpec?.expectedHeadSha).toBe(H1);
    expect(req.gitPushSpec).toBeUndefined();
    expect(req.gitCommitSpec).toBeUndefined();
    expect(req.gitPrMergeSpec).toBeUndefined();
    expect(read?.getBranchHeadCalls.length).toBeGreaterThanOrEqual(1);
    expect(EC_C).not.toBe(EC_D);
  });

  it("XEC-03 integration: no binding → fail closed (no auto-discovery)", async () => {
    const { started, launchPort } = await runStartD({ includeBinding: false });
    expect(started.ok).toBe(false);
    expect(launchPort.launchCallCount).toBe(0);
  });

  it("XEC-04 integration: Evidence missing → fail", async () => {
    const { started, launchPort } = await runStartD({ seedEvidence: false });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(String(started.error.internalCauseRef ?? "")).toMatch(
        /cross_ec_remote_push_evidence_not_found/,
      );
    }
    expect(launchPort.launchCallCount).toBe(0);
  });

  it("XEC-14 RepositoryRead unavailable → fail", async () => {
    const { started, launchPort } = await runStartD({
      omitRepositoryRead: true,
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(String(started.error.internalCauseRef ?? "")).toMatch(
        /cross_ec_remote_push_repository_read_unavailable/,
      );
    }
    expect(launchPort.launchCallCount).toBe(0);
  });

  it("XEC-15 remote branch missing → fail", async () => {
    const { started, launchPort } = await runStartD({ remoteSha: null });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(String(started.error.internalCauseRef ?? "")).toMatch(
        /cross_ec_remote_push_remote_head_drift/,
      );
    }
    expect(launchPort.launchCallCount).toBe(0);
  });

  it("XEC-16 remote branch drifted → fail", async () => {
    const { started, launchPort } = await runStartD({ remoteSha: H_DRIFT });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(String(started.error.internalCauseRef ?? "")).toMatch(
        /cross_ec_remote_push_remote_head_drift/,
      );
    }
    expect(launchPort.launchCallCount).toBe(0);
  });
});
