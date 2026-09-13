/**
 * GCEC-GIT-LIFECYCLE-E2E-01 — Product RepositoryRead composition (P-RR-01..08).
 * ZERO REAL. Deterministic FakeRepositoryReadPorts only.
 *
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, readFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  assertStudioCursorRealOffForTests,
  buildGitEffectActionRef,
  createM4BoundedDocsWriteCursorAgentDescriptor,
  createM4BoundedLocalCommitCursorAgentDescriptor,
  createM4BoundedPrCreateCursorAgentDescriptor,
  createM4BoundedRemotePushCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
  M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
  M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
  SqliteRealLaunchSafetyJournal,
  TestExecutionAdapter,
  type ExecutionAttempt,
} from "@/lib/oa/execution-attempt";
import {
  FakeRepositoryReadPorts,
  GithubCliRepositoryReadAdapter,
  type RepositoryReadPort,
  type RepositoryReadRef,
} from "@/lib/oa/git-ports";
import {
  createRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
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
} from "../execution-attempt/helpers";
import { M4_EVIDENCE, M4_TEST_BASE_HEAD_SHA } from "../execution-attempt/support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "../execution-attempt/support/testOnlyRealExecutionLaunchPort";

const APP_ROOT = path.resolve(__dirname, "../../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);
const SERVICE_SRC = path.join(
  APP_ROOT,
  "lib/vertical-slice-runtime/service.ts",
);

const IDENTITY = "acme/widget";
const FEATURE_BRANCH = "gcec/lifecycle/proof";
const TARGET_PATH = "docs/functional-design.md";
const ARTIFACT_BODY = "# RR composition artifact\n";
const ARTIFACT_DIGEST = `sha256:${createHash("sha256")
  .update(ARTIFACT_BODY)
  .digest("hex")}` as Digest;
const H0 = M4_TEST_BASE_HEAD_SHA;
const H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const H2 = "cccccccccccccccccccccccccccccccccccccccc";
const MSG = "docs: RepositoryRead composition proof";

type TrackingRead = RepositoryReadPort & {
  readonly getBranchHeadCalls: Array<
    RepositoryReadRef & { branch: string }
  >;
};

function trackingFake(seed?: {
  branch?: string;
  sha?: string | null;
}): TrackingRead {
  const inner = new FakeRepositoryReadPorts();
  if (seed?.branch && seed.sha) {
    inner.seedBranchHead(seed.branch, seed.sha);
  }
  const getBranchHeadCalls: Array<RepositoryReadRef & { branch: string }> = [];
  return {
    getBranchHeadCalls,
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
      if (seed?.sha === null) return null;
      return inner.getBranchHead(input);
    },
  };
}

function startExecutionRepositoryRead(
  start: unknown,
): RepositoryReadPort | undefined {
  return (start as { repositoryRead?: RepositoryReadPort }).repositoryRead;
}

function docsWriteInputs(): Record<string, unknown> {
  return {
    baseHeadSha: H0,
    repositoryRef: IDENTITY,
    repositoryIdentity: IDENTITY,
    remoteUrl: `https://github.com/${IDENTITY}.git`,
    defaultBranch: "main",
    workingBranch: FEATURE_BRANCH,
    pathRoot: "docs",
    targetPath: TARGET_PATH,
    pathAllowlist: ["docs/"],
    scopeIn: ["docs/"],
    scopeOut: ["src/"],
    artifactType: "functional_design",
    artifactBrief: "RepositoryRead composition",
    contentRequirements: ["problem"],
    expectedOutputs: [TARGET_PATH],
    validationExpectations: ["markdown"],
    evidenceRequirements: [
      "artifact",
      "git:local_commit",
      "git:remote_push",
      "git:pull_request",
    ],
    commitMessage: MSG,
  };
}

function docsWriteEvidence(input: {
  evidenceId: string;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
}): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: input.evidenceId,
    type: "artifact",
    status: "verified",
    source: "execution_attempt:docs_write",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    location: TARGET_PATH,
    digest: ARTIFACT_DIGEST,
    bindings: {
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      executionContractId: input.executionContractId,
      executionAttemptId: input.executionAttemptId,
    },
    createdAt: NOW,
    updatedAt: NOW,
    version: 1,
    producedAt: NOW,
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${input.evidenceId}`,
      actor: { actorId: "actor:system", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:rr-ev",
    },
  };
}

function commitEvidence(input: {
  evidenceId: string;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
  sha?: string;
}): Evidence {
  const sha = input.sha ?? H1;
  return {
    ...docsWriteEvidence({ ...input, evidenceId: input.evidenceId }),
    type: "other",
    source: "git:local_commit",
    location: `git:local_commit?repo=${encodeURIComponent(IDENTITY)}&commitSha=${sha}&parentSha=${H0}`,
    digest: undefined,
  };
}

function pushEvidence(input: {
  evidenceId: string;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
  sha?: string;
  branch?: string;
}): Evidence {
  const sha = input.sha ?? H1;
  const branch = input.branch ?? FEATURE_BRANCH;
  return {
    ...docsWriteEvidence({ ...input, evidenceId: input.evidenceId }),
    type: "other",
    source: "git:remote_push",
    location: `git:remote_push?repo=${encodeURIComponent(IDENTITY)}&remote=origin&refName=${encodeURIComponent(`refs/heads/${branch}`)}&commitSha=${sha}`,
    digest: undefined,
  };
}

function succeededAttempt(input: {
  attemptId: string;
  executionContractId: string;
  executionContractVersion: number;
  selectedAgentRef: string;
}): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    executionContractVersion: input.executionContractVersion,
    selectedAgentRef: input.selectedAgentRef,
    status: "succeeded",
    idempotencyKey: `idem:${input.attemptId}`,
    correlationId: `cor:${input.attemptId}`,
    version: 1,
    createdAt: NOW,
    launchedAt: NOW,
    startedAt: NOW,
    completedAt: NOW,
    resultRef: `res:${input.attemptId}`,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${input.attemptId}`,
      actor: MORRIS_ACTOR,
      source: "system",
      timestamp: NOW,
      correlationId: `cor:${input.attemptId}`,
    },
  };
}

async function seedConfirmedDocsContract(stack: Stack): Promise<{
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
    M4_BOUNDED_DOCS_WRITE_SCOPE,
    M4_EVIDENCE,
  );
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack, cycleInstanceId);

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId,
      executionContractId: "xct:rr-pr-create",
      idempotencyKey: "idem-xct-rr-pr",
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
      evidenceRequirements: [
        "git:local_commit",
        "git:remote_push",
        "git:pull_request",
      ],
      expectedOutputs: ["artifact", TARGET_PATH],
      authorityEvidenceId: M4_EVIDENCE,
      inputs: docsWriteInputs(),
    }),
  );
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");

  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");

  const confirmationId = await grantContractConfirmation(stack, {
    confirmationId: "cfm:rr-ec",
    scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
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
  if (!confirmed.ok) throw new Error("confirm failed");

  return {
    contractId: confirmed.contract.executionContractId,
    version: confirmed.contract.version,
    projectId,
    cycleInstanceId,
  };
}

async function startAttemptD(input: {
  repositoryRead?: RepositoryReadPort;
  omitRepositoryRead?: boolean;
}): Promise<{
  started: Awaited<
    ReturnType<
      ReturnType<typeof createTestExecutionAttemptServices>["startExecution"]["execute"]
    >
  >;
  read: TrackingRead | undefined;
}> {
  const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-rr-d-"));
  mkdirSync(path.join(managedBase, "acme__widget", ".git"), {
    recursive: true,
  });
  const journal = new SqliteRealLaunchSafetyJournal({
    databasePath: path.join(managedBase, "safety.sqlite"),
  });
  const launchPort = new TestOnlyRealExecutionLaunchPort();
  const agents = [
    createM4BoundedDocsWriteCursorAgentDescriptor(NOW),
    createM4BoundedLocalCommitCursorAgentDescriptor(NOW),
    createM4BoundedRemotePushCursorAgentDescriptor(NOW),
    createM4BoundedPrCreateCursorAgentDescriptor(NOW),
  ];
  const evidenceBag: Evidence[] = [];
  const read =
    input.omitRepositoryRead
      ? undefined
      : ((input.repositoryRead as TrackingRead | undefined) ??
        trackingFake({ branch: FEATURE_BRANCH, sha: H1 }));

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
      baseSha: H0,
    }),
    listProjectEvidence: async () => ({
      ok: true as const,
      evidence: evidenceBag,
    }),
    ...(read ? { repositoryRead: read } : {}),
    fixedNowIso: NOW,
  }) as typeof stack.attempts;

  const seeded = await seedConfirmedDocsContract(stack);
  const attemptA = "xat:rr-a";
  const attemptB = "xat:rr-b";
  const attemptC = "xat:rr-c";
  const attemptD = "xat:rr-d";

  await stack.attempts.attempts.create(
    succeededAttempt({
      attemptId: attemptA,
      executionContractId: seeded.contractId,
      executionContractVersion: seeded.version,
      selectedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    }),
  );
  await stack.attempts.attempts.create(
    succeededAttempt({
      attemptId: attemptB,
      executionContractId: seeded.contractId,
      executionContractVersion: seeded.version,
      selectedAgentRef: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
    }),
  );
  await stack.attempts.attempts.create(
    succeededAttempt({
      attemptId: attemptC,
      executionContractId: seeded.contractId,
      executionContractVersion: seeded.version,
      selectedAgentRef: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
    }),
  );

  evidenceBag.push(
    docsWriteEvidence({
      evidenceId: "ev:rr-a",
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      executionContractId: seeded.contractId,
      executionAttemptId: attemptA,
    }),
    commitEvidence({
      evidenceId: "ev:rr-b",
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      executionContractId: seeded.contractId,
      executionAttemptId: attemptB,
    }),
    pushEvidence({
      evidenceId: "ev:rr-c",
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      executionContractId: seeded.contractId,
      executionAttemptId: attemptC,
    }),
  );

  const selected = await selectStandardAgent(stack, {
    attemptId: attemptD,
    executionContractId: seeded.contractId,
    requestedAgentRef: M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error("select D failed");

  const granted = await stack.attempts.grantRealExecutionGate!.execute({
    grantId: "gd:rr-d",
    attemptId: attemptD,
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
  registerMorris(stack.decisions.authority, gitActionRef, "evd:morris-rr-pr");
  await grantContractConfirmation(stack, {
    confirmationId: "cfm:rr-pr-create",
    actionRef: gitActionRef,
    scope: gitActionRef,
    evidenceId: "evd:morris-rr-pr",
  });
  const gitCnf = await stack.decisions.confirmations.findById(
    "cfm:rr-pr-create",
  );
  expect(gitCnf?.status).toBe("granted");

  const started = await stack.attempts.startExecution.execute({
    attemptId: attemptD,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
    confirmations: gitCnf ? [gitCnf] : [],
    confirmationMatch: {
      repositoryRef: IDENTITY,
      branchOrRef: FEATURE_BRANCH,
      actorId: MORRIS_ACTOR.actorId,
    },
    verifiedEffects: [
      "filesystem.create",
      "filesystem.modify",
      "git.commit",
      "git.push",
    ],
  });

  return { started, read };
}

describe("GCEC RepositoryRead Product composition (P-RR)", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
    resetRuntimeApplicationServiceForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
    resetRuntimeApplicationServiceForTests();
  });

  it("P-RR-01 Product SQLite OA composition wires RepositoryRead into StartExecution", () => {
    const productDbPath = path.join(
      mkdtempSync(path.join(os.tmpdir(), "gcec-rr-comp-")),
      "oa.sqlite",
    );
    const fake = trackingFake({ branch: FEATURE_BRANCH, sha: H1 });
    const runtime = createRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      auditMode: "noop",
      productDbPath,
      repositoryRead: fake,
    });
    expect(runtime.oa?.productDurablePath).toBe(true);
    const wired = startExecutionRepositoryRead(
      runtime.oa!.executionAttemptServices.startExecution,
    );
    expect(wired).toBe(fake);

    const defaultRuntime = createRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      auditMode: "noop",
      productDbPath: path.join(
        mkdtempSync(path.join(os.tmpdir(), "gcec-rr-def-")),
        "oa.sqlite",
      ),
    });
    const defaultRead = startExecutionRepositoryRead(
      defaultRuntime.oa!.executionAttemptServices.startExecution,
    );
    expect(defaultRead).toBeInstanceOf(GithubCliRepositoryReadAdapter);

    const src = readFileSync(SERVICE_SRC, "utf8");
    expect(src).toContain("GithubCliRepositoryReadAdapter");
    expect(src).toContain("resolveStudioRepositoryRead");
    expect(src).toMatch(/repositoryRead:\s*options\.repositoryRead/);
    expect(src).toMatch(/\.\.\.\(repositoryRead \? \{ repositoryRead \} : \{\}\)/);
    // No second read engine / mutation surface.
    expect(src).not.toContain("PlatformGithubReadBridge");
    expect(src).not.toMatch(/git\s+push|gh\s+pr\s+create/);
  });

  it("P-RR-02 exact fresh branch SHA permits D preflight when eligibility holds", async () => {
    const { started, read } = await startAttemptD({});
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.error.internalCauseRef ?? "");
    expect(read!.getBranchHeadCalls).toEqual([
      { repositoryRef: IDENTITY, branch: FEATURE_BRANCH },
    ]);
  });

  it("P-RR-03 missing repositoryRead fails closed", async () => {
    const { started } = await startAttemptD({ omitRepositoryRead: true });
    expect(started.ok).toBe(false);
    if (started.ok) return;
    expect(started.error.internalCauseRef).toBe(
      "git_pr_create_repository_read_unavailable",
    );
  });

  it("P-RR-04 null/missing branch head fails closed", async () => {
    const { started } = await startAttemptD({
      repositoryRead: trackingFake({ branch: FEATURE_BRANCH, sha: null }),
    });
    expect(started.ok).toBe(false);
    if (started.ok) return;
    expect(started.error.internalCauseRef).toBe(
      "git_pr_create_remote_head_missing",
    );
  });

  it("P-RR-05 drifted branch head fails closed", async () => {
    const { started } = await startAttemptD({
      repositoryRead: trackingFake({ branch: FEATURE_BRANCH, sha: H2 }),
    });
    expect(started.ok).toBe(false);
    if (started.ok) return;
    expect(started.error.internalCauseRef).toBe(
      "git_pr_create_remote_head_sha_drift",
    );
  });

  it("P-RR-06 getBranchHead receives exact C lineage repositoryRef + branch", async () => {
    const read = trackingFake({ branch: FEATURE_BRANCH, sha: H1 });
    const { started } = await startAttemptD({ repositoryRead: read });
    expect(started.ok).toBe(true);
    expect(read.getBranchHeadCalls).toHaveLength(1);
    expect(read.getBranchHeadCalls[0]).toEqual({
      repositoryRef: IDENTITY,
      branch: FEATURE_BRANCH,
    });
  });

  it("P-RR-07 composition construction performs no remote mutation / no getBranchHead", () => {
    const productDbPath = path.join(
      mkdtempSync(path.join(os.tmpdir(), "gcec-rr-nomut-")),
      "oa.sqlite",
    );
    const fake = trackingFake({ branch: FEATURE_BRANCH, sha: H1 });
    createRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      auditMode: "noop",
      productDbPath,
      repositoryRead: fake,
    });
    expect(fake.getBranchHeadCalls).toEqual([]);
  });

  it("P-RR-08 C semantics unchanged — push Start path does not require RepositoryRead", () => {
    const src = readFileSync(
      path.join(
        APP_ROOT,
        "lib/oa/execution-attempt/application/startExecution.ts",
      ),
      "utf8",
    );
    // Bounded push application block — no fresh RepositoryRead gate (unlike D).
    const pushMarker = "GCEC bounded git.push-only Attempt C";
    const prMarker = "GCEC bounded github.pr.create-only Attempt D";
    const pushStart = src.indexOf(pushMarker);
    const prStart = src.indexOf(prMarker);
    expect(pushStart).toBeGreaterThan(0);
    expect(prStart).toBeGreaterThan(pushStart);
    const pushBlock = src.slice(pushStart, prStart);
    expect(pushBlock).toContain("buildGitPushLaunchSpec");
    expect(pushBlock).not.toContain("repository_read_unavailable");
    expect(pushBlock).not.toContain("getBranchHead");
    expect(src.slice(prStart)).toContain(
      "git_pr_create_repository_read_unavailable",
    );
  });

  it("P-RR force-absent null composition remains fail-closed on Product path", () => {
    const productDbPath = path.join(
      mkdtempSync(path.join(os.tmpdir(), "gcec-rr-null-")),
      "oa.sqlite",
    );
    const runtime = createRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      auditMode: "noop",
      productDbPath,
      repositoryRead: null,
    });
    expect(
      startExecutionRepositoryRead(
        runtime.oa!.executionAttemptServices.startExecution,
      ),
    ).toBeUndefined();
  });
});
