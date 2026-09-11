/**
 * D-GCEC-CONT-01 — same-EC A→B StartExecution continuation + restart rediscovery.
 * ZERO REAL Cursor / OS git. Product persistence: NONE new.
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  assertStudioCursorRealOffForTests,
  buildGitEffectActionRef,
  createM4BoundedDocsWriteCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  SqliteRealLaunchSafetyJournal,
  StudioGitWorktreeWorkspace,
  TestExecutionAdapter,
  workspacePathForAttempt,
  type ExecutionAttempt,
} from "@/lib/oa/execution-attempt";
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
import { FakeGitCommandRunner } from "./support/fakeSpawnAndGit";
import { M4_EVIDENCE, M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";

const IDENTITY = "acme/widget";
const BRANCH = "gcec/docs";
const TARGET_PATH = "docs/functional-design.md";
const ARTIFACT_BODY = "# Cont A→B verified artifact\n";
const ARTIFACT_DIGEST = `sha256:${createHash("sha256")
  .update(ARTIFACT_BODY)
  .digest("hex")}` as Digest;

function tempJournalPath(prefix: string): string {
  const dir = mkdtempSync(path.join(os.tmpdir(), prefix));
  return path.join(dir, "safety.sqlite");
}

function docsWriteInputs(baseHeadSha: string): Record<string, unknown> {
  return {
    baseHeadSha,
    repositoryRef: IDENTITY,
    repositoryIdentity: IDENTITY,
    remoteUrl: `https://github.com/${IDENTITY}.git`,
    defaultBranch: "main",
    workingBranch: BRANCH,
    pathRoot: "docs",
    targetPath: TARGET_PATH,
    pathAllowlist: ["docs/"],
    scopeIn: ["docs/"],
    scopeOut: ["src/"],
    artifactType: "functional_design",
    artifactBrief: "Functional design for continuation proof",
    contentRequirements: ["problem", "constraints", "acceptance"],
    expectedOutputs: [TARGET_PATH],
    validationExpectations: ["markdown"],
    evidenceRequirements: ["artifact", "git:local_commit"],
  };
}

function docsWriteEvidence(input: {
  evidenceId: string;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
  status?: Evidence["status"];
}): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: input.evidenceId,
    type: "artifact",
    status: input.status ?? "verified",
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
      correlationId: "cor:cont-ev",
    },
  };
}

function succeededAttempt(input: {
  attemptId: string;
  executionContractId: string;
  executionContractVersion: number;
}): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    executionContractVersion: input.executionContractVersion,
    selectedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
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

async function seedDocsWriteConfirmedContract(
  stack: Stack,
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
    M4_BOUNDED_DOCS_WRITE_SCOPE,
    M4_EVIDENCE,
  );
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack, cycleInstanceId);

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId,
      executionContractId: "xct:cont-ab",
      idempotencyKey: "idem-xct-cont-ab",
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
      // Contract-level ids must match OA identifier pattern (prefix:…).
      evidenceRequirements: ["git:local_commit"],
      expectedOutputs: ["artifact", TARGET_PATH],
      authorityEvidenceId: M4_EVIDENCE,
      inputs: docsWriteInputs(M4_TEST_BASE_HEAD_SHA),
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
    confirmationId: "cfm:cont-ec",
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
  expect(confirmed.contract.status).toBe("confirmed");

  return {
    contractId: confirmed.contract.executionContractId,
    version: confirmed.contract.version,
    projectId,
    cycleInstanceId,
  };
}

describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("A→B StartExecution passes unique governed continuation descriptor (no path)", async () => {
    const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-cont-managed-"));
    const repoRoot = path.join(managedBase, "acme__widget");
    mkdirSync(repoRoot, { recursive: true });
    mkdirSync(path.join(repoRoot, ".git"));

    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: tempJournalPath("gcec-cont-ab-"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const evidenceBag: Evidence[] = [];

    const stack = buildStack({ agents: [agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [agent],
      adapter: fixtureAdapter,
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
      listProjectEvidence: async () => evidenceBag,
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const seeded = await seedDocsWriteConfirmedContract(stack);
    const attemptA = "xat:cont-a";
    const attemptB = "xat:cont-b";
    expect(attemptA).not.toBe(attemptB);

    await stack.attempts.attempts.create(
      succeededAttempt({
        attemptId: attemptA,
        executionContractId: seeded.contractId,
        executionContractVersion: seeded.version,
      }),
    );
    evidenceBag.push(
      docsWriteEvidence({
        evidenceId: "ev:cont-a-art",
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: seeded.contractId,
        executionAttemptId: attemptA,
      }),
    );

    const ecBefore = await stack.execution.getExecutionContract.execute({
      executionContractId: seeded.contractId,
    });
    expect(ecBefore.ok).toBe(true);
    if (!ecBefore.ok) return;
    expect(ecBefore.contract.status).toBe("confirmed");

    const selected = await selectStandardAgent(stack, {
      attemptId: attemptB,
      executionContractId: seeded.contractId,
      requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);

    const granted = await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:cont-b",
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const gitActionRef = buildGitEffectActionRef({
      executionContractId: seeded.contractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: BRANCH,
    });
    registerMorris(stack.decisions.authority, gitActionRef, "evd:morris-git-ab");
    await grantContractConfirmation(stack, {
      confirmationId: "cfm:cont-git-commit",
      actionRef: gitActionRef,
      scope: gitActionRef,
      evidenceId: "evd:morris-git-ab",
    });
    const gitCnf = await stack.decisions.confirmations.findById(
      "cfm:cont-git-commit",
    );
    expect(gitCnf?.status).toBe("granted");

    const started = await stack.attempts.startExecution.execute({
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      confirmations: gitCnf ? [gitCnf] : [],
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(true);
    if (!started.ok) {
      throw new Error(started.error.internalCauseRef);
    }

    expect(launchPort.calls).toHaveLength(1);
    const req = launchPort.calls[0]!;
    expect(req.workspaceContinuation).toBeDefined();
    expect(req.workspaceContinuation?.priorAttemptId).toBe(attemptA);
    expect(req.workspaceContinuation?.expectedHeadSha).toBe(
      M4_TEST_BASE_HEAD_SHA,
    );
    expect(req.workspaceContinuation?.expectedVerifiedFiles).toEqual([
      { path: TARGET_PATH, digest: ARTIFACT_DIGEST },
    ]);
    expect(
      (req.workspaceContinuation as { workspacePath?: string } | undefined)
        ?.workspacePath,
    ).toBeUndefined();
    expect(
      (req as { workspacePath?: string; cwd?: string }).workspacePath,
    ).toBeUndefined();

    const a = await stack.attempts.attempts.findById(attemptA);
    const b = await stack.attempts.attempts.findById(attemptB);
    expect(a?.status).toBe("succeeded");
    expect(b?.status).toBe("running");
    expect(a?.attemptId).not.toBe(b?.attemptId);
    expect(a?.executionContractId).toBe(b?.executionContractId);

    const ecAfter = await stack.execution.getExecutionContract.execute({
      executionContractId: seeded.contractId,
    });
    expect(ecAfter.ok).toBe(true);
    if (ecAfter.ok) {
      // Start moves EC to executing while Attempt runs — still same EC, no completion.
      expect(["confirmed", "executing"]).toContain(ecAfter.contract.status);
    }

    journal.close();
  });

  it("CONT-06 StartExecution fails closed when continuation required but none", async () => {
    const managedBase = mkdtempSync(
      path.join(os.tmpdir(), "gcec-cont-none-"),
    );
    const repoRoot = path.join(managedBase, "acme__widget");
    mkdirSync(repoRoot, { recursive: true });
    mkdirSync(path.join(repoRoot, ".git"));

    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: tempJournalPath("gcec-cont-none-"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [agent],
      adapter: fixtureAdapter,
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
      listProjectEvidence: async () => [],
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const seeded = await seedDocsWriteConfirmedContract(stack);
    // Prior succeeded Attempt opens the continuation window; missing Evidence → fail closed.
    await stack.attempts.attempts.create(
      succeededAttempt({
        attemptId: "xat:cont-none-a",
        executionContractId: seeded.contractId,
        executionContractVersion: seeded.version,
      }),
    );
    const attemptB = "xat:cont-none-b";
    await selectStandardAgent(stack, {
      attemptId: attemptB,
      executionContractId: seeded.contractId,
      requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
      idempotencyKey: "idem-cont-none-b",
    });
    await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:cont-none",
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    const gitActionRef = buildGitEffectActionRef({
      executionContractId: seeded.contractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: BRANCH,
    });
    registerMorris(
      stack.decisions.authority,
      gitActionRef,
      "evd:morris-git-none",
    );
    await grantContractConfirmation(stack, {
      confirmationId: "cfm:cont-none-git",
      actionRef: gitActionRef,
      scope: gitActionRef,
      evidenceId: "evd:morris-git-none",
    });
    const gitCnf = await stack.decisions.confirmations.findById(
      "cfm:cont-none-git",
    );
    const started = await stack.attempts.startExecution.execute({
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      confirmations: gitCnf ? [gitCnf] : [],
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.detailCode).toBe("ATTEMPT_INVALID");
      expect(started.error.internalCauseRef).toBe(
        "continuation_candidate_none",
      );
    }
    expect(launchPort.launchCallCount).toBe(0);
    journal.close();
  });

  it("restart rediscovery: new workspace service + same execRoot resumes without processRef", async () => {
    const root = mkdtempSync(path.join(os.tmpdir(), "gcec-cont-restart-"));
    const repoRoot = path.join(root, "repo");
    const execRoot = path.join(root, "exec");
    mkdirSync(repoRoot);
    mkdirSync(execRoot);
    const priorAttemptId = "xat:cont-restart-a";
    const workspacePath = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(workspacePath, { recursive: true });
    const abs = path.join(workspacePath, TARGET_PATH);
    mkdirSync(path.dirname(abs), { recursive: true });
    writeFileSync(abs, ARTIFACT_BODY, "utf8");

    const git1 = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: `https://github.com/${IDENTITY}.git`,
      registeredWorktrees: [workspacePath],
    });
    const ws1 = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git1,
    });
    // Drop ws1 — simulate process restart (no worktreeRef retained).
    void ws1;

    const git2 = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: `https://github.com/${IDENTITY}.git`,
      registeredWorktrees: [workspacePath],
    });
    const ws2 = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git2,
    });
    const resumed = await ws2.resumeVerifiedWorkspace({
      currentAttemptId: "xat:cont-restart-b",
      priorAttemptId,
      expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
      expectedVerifiedFiles: [
        { path: TARGET_PATH, digest: ARTIFACT_DIGEST },
      ],
      repositoryBinding: {
        identity: IDENTITY,
        remoteUrl: `https://github.com/${IDENTITY}.git`,
        defaultBranch: "main",
      },
    });
    expect(resumed.workspacePath).toBe(workspacePath);
    expect(
      git2.calls.some(
        (c) => c.argv[0] === "worktree" && c.argv[1] === "add",
      ),
    ).toBe(false);

    // Negative: path absent after restart
    const missingExec = path.join(root, "exec-missing");
    mkdirSync(missingExec);
    const wsMissing = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot: missingExec,
      gitRunner: new FakeGitCommandRunner({
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
        remoteUrl: `https://github.com/${IDENTITY}.git`,
      }),
    });
    await expect(
      wsMissing.resumeVerifiedWorkspace({
        currentAttemptId: "xat:cont-restart-b2",
        priorAttemptId,
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          { path: TARGET_PATH, digest: ARTIFACT_DIGEST },
        ],
      }),
    ).rejects.toThrow(/resume_workspace_missing/);
  });
});
