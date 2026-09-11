/**
 * D-GCEC-CONT-01 — workspace prepare/resume deterministic proofs (REAL OFF).
 * FakeGitCommandRunner only — never OS git / Cursor.
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
  StudioCursorRealLaunchGateway,
  StudioGitWorktreeWorkspace,
  workspacePathForAttempt,
} from "@/lib/oa/execution-attempt";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import {
  FakeGitCommandRunner,
  FakeRealExecutionWorkspacePort,
} from "./support/fakeSpawnAndGit";
import { M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";

const ARTIFACT_REL = "docs/functional-design.md";
const ARTIFACT_BODY = "# Cont-01 fixture\n";
const ARTIFACT_DIGEST = `sha256:${createHash("sha256")
  .update(ARTIFACT_BODY)
  .digest("hex")}`;
const REMOTE = "https://github.com/acme/widget.git";
const IDENTITY = "acme/widget";

function tempRoots(prefix: string): {
  root: string;
  repoRoot: string;
  execRoot: string;
} {
  const root = mkdtempSync(path.join(os.tmpdir(), prefix));
  const repoRoot = path.join(root, "repo");
  const execRoot = path.join(root, "exec");
  mkdirSync(repoRoot);
  mkdirSync(execRoot);
  return { root, repoRoot, execRoot };
}

function writeVerifiedArtifact(workspacePath: string): void {
  const abs = path.join(workspacePath, ARTIFACT_REL);
  mkdirSync(path.dirname(abs), { recursive: true });
  writeFileSync(abs, ARTIFACT_BODY, "utf8");
}

describe("D-GCEC-CONT-01 workspace resume (REAL OFF)", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
    expect(process.env.SFIA_GCEC_CURSOR_REAL_PROOF).toBeUndefined();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("FRESH-01 fresh Attempt creates its own workspace (worktree add)", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-fresh-");
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    const attemptId = "xat:cont-fresh-01";
    const prepared = await ws.prepareWorkspace({
      attemptId,
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    expect(prepared.workspacePath).toBe(
      workspacePathForAttempt(execRoot, attemptId),
    );
    expect(prepared.verifiedHeadSha).toBe(M4_TEST_BASE_HEAD_SHA);
    expect(
      git.calls.some(
        (c) => c.argv[0] === "worktree" && c.argv[1] === "add",
      ),
    ).toBe(true);
  });

  it("RESUME-01 priorAttemptId derives previous workspace path", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r01-");
    const priorAttemptId = "xat:cont-prior-01";
    const expected = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(expected, { recursive: true });
    writeVerifiedArtifact(expected);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
      registeredWorktrees: [expected],
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    const resumed = await ws.resumeVerifiedWorkspace({
      currentAttemptId: "xat:cont-current-01",
      priorAttemptId,
      expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
      expectedVerifiedFiles: [{ path: ARTIFACT_REL, digest: ARTIFACT_DIGEST }],
      repositoryBinding: {
        identity: IDENTITY,
        remoteUrl: REMOTE,
        defaultBranch: "main",
      },
    });
    expect(resumed.workspacePath).toBe(expected);
    expect(resumed.priorAttemptId).toBe(priorAttemptId);
  });

  it("RESUME-02 resume does NOT call git worktree add", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r02-");
    const priorAttemptId = "xat:cont-prior-02";
    const expected = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(expected, { recursive: true });
    writeVerifiedArtifact(expected);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
      registeredWorktrees: [expected],
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await ws.resumeVerifiedWorkspace({
      currentAttemptId: "xat:cont-current-02",
      priorAttemptId,
      expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
      expectedVerifiedFiles: [{ path: ARTIFACT_REL, digest: ARTIFACT_DIGEST }],
      repositoryBinding: {
        identity: IDENTITY,
        remoteUrl: REMOTE,
        defaultBranch: "main",
      },
    });
    expect(
      git.calls.some(
        (c) => c.argv[0] === "worktree" && c.argv[1] === "add",
      ),
    ).toBe(false);
  });

  it("RESUME-03 valid registered worktree + matching HEAD succeeds", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r03-");
    const priorAttemptId = "xat:cont-prior-03";
    const expected = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(expected, { recursive: true });
    writeVerifiedArtifact(expected);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
      registeredWorktrees: [expected],
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    const resumed = await ws.resumeVerifiedWorkspace({
      currentAttemptId: "xat:cont-current-03",
      priorAttemptId,
      expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
      expectedVerifiedFiles: [{ path: ARTIFACT_REL, digest: ARTIFACT_DIGEST }],
      repositoryBinding: {
        identity: IDENTITY,
        remoteUrl: REMOTE,
        defaultBranch: "main",
      },
    });
    expect(resumed.verifiedHeadSha).toBe(M4_TEST_BASE_HEAD_SHA);
  });

  it("RESUME-04 missing path fails closed", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r04-");
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.resumeVerifiedWorkspace({
        currentAttemptId: "xat:cont-current-04",
        priorAttemptId: "xat:cont-prior-missing",
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          { path: ARTIFACT_REL, digest: ARTIFACT_DIGEST },
        ],
      }),
    ).rejects.toThrow(/resume_workspace_missing/);
  });

  it("RESUME-05 unregistered / wrong-repository worktree fails closed", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r05-");
    const priorAttemptId = "xat:cont-prior-05";
    const expected = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(expected, { recursive: true });
    writeVerifiedArtifact(expected);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
      registeredWorktrees: [],
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.resumeVerifiedWorkspace({
        currentAttemptId: "xat:cont-current-05",
        priorAttemptId,
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          { path: ARTIFACT_REL, digest: ARTIFACT_DIGEST },
        ],
        repositoryBinding: {
          identity: IDENTITY,
          remoteUrl: REMOTE,
          defaultBranch: "main",
        },
      }),
    ).rejects.toThrow(/worktree_unregistered/);
  });

  it("RESUME-06 wrong HEAD fails closed", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r06-");
    const priorAttemptId = "xat:cont-prior-06";
    const expected = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(expected, { recursive: true });
    writeVerifiedArtifact(expected);
    const git = new FakeGitCommandRunner({
      baseHeadSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      remoteUrl: REMOTE,
      registeredWorktrees: [expected],
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.resumeVerifiedWorkspace({
        currentAttemptId: "xat:cont-current-06",
        priorAttemptId,
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          { path: ARTIFACT_REL, digest: ARTIFACT_DIGEST },
        ],
        repositoryBinding: {
          identity: IDENTITY,
          remoteUrl: REMOTE,
          defaultBranch: "main",
        },
      }),
    ).rejects.toThrow(/head_mismatch/);
  });

  it("RESUME-07 expected verified file missing fails closed", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r07-");
    const priorAttemptId = "xat:cont-prior-07";
    const expected = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(expected, { recursive: true });
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
      registeredWorktrees: [expected],
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.resumeVerifiedWorkspace({
        currentAttemptId: "xat:cont-current-07",
        priorAttemptId,
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          { path: ARTIFACT_REL, digest: ARTIFACT_DIGEST },
        ],
        repositoryBinding: {
          identity: IDENTITY,
          remoteUrl: REMOTE,
          defaultBranch: "main",
        },
      }),
    ).rejects.toThrow(/expected_file_missing/);
  });

  it("RESUME-08 digest mismatch fails closed", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r08-");
    const priorAttemptId = "xat:cont-prior-08";
    const expected = workspacePathForAttempt(execRoot, priorAttemptId);
    mkdirSync(expected, { recursive: true });
    writeVerifiedArtifact(expected);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      remoteUrl: REMOTE,
      registeredWorktrees: [expected],
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.resumeVerifiedWorkspace({
        currentAttemptId: "xat:cont-current-08",
        priorAttemptId,
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          {
            path: ARTIFACT_REL,
            digest: `sha256:${"0".repeat(64)}`,
          },
        ],
        repositoryBinding: {
          identity: IDENTITY,
          remoteUrl: REMOTE,
          defaultBranch: "main",
        },
      }),
    ).rejects.toThrow(/expected_digest_mismatch/);
  });

  it("RESUME-09 no caller-controlled arbitrary cwd/path accepted", async () => {
    const workspace = new FakeRealExecutionWorkspacePort({
      resumePath: "/tmp/fake-exec-root/wt-prior",
    });
    const runner = new FakeProcessRunner();
    const gateway = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: workspace,
      env: {
        ...process.env,
        [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
      },
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const hostile = {
      attemptId: "xat:cont-r09",
      executionContractId: "xct:cont",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
      adapterRef: gateway.gatewayId,
      correlationId: "cor:r09",
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      timeoutMs: 15 * 60 * 1000,
      workspaceContinuation: {
        priorAttemptId: "xat:prior",
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          { path: ARTIFACT_REL, digest: ARTIFACT_DIGEST },
        ],
        workspacePath: "/hostile/client/path",
      },
    };
    const result = await gateway.launch(hostile as never);
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.reason).toMatch(/continuation_descriptor_invalid/);
    }
    expect(workspace.resumes).toHaveLength(0);
    expect(workspace.prepares).toHaveLength(0);
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
  });

  it("RESUME-10 fresh prepare still refuses existing current-Attempt path", async () => {
    const { repoRoot, execRoot } = tempRoots("gcec-cont-r10-");
    const attemptId = "xat:cont-exists";
    const existing = workspacePathForAttempt(execRoot, attemptId);
    mkdirSync(existing, { recursive: true });
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.prepareWorkspace({
        attemptId,
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      }),
    ).rejects.toThrow(/workspace_path_exists/);
  });

  it("gateway continuation uses resume not prepare (gateway-local REAL flag)", async () => {
    const resumePath = "/tmp/fake-exec-root/wt-prior-gw";
    const workspace = new FakeRealExecutionWorkspacePort({ resumePath });
    const runner = new FakeProcessRunner();
    const gateway = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: workspace,
      env: {
        ...process.env,
        [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
      },
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const result = await gateway.launch({
      attemptId: "xat:cont-gw",
      executionContractId: "xct:cont",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4.cursor.bounded_readonly",
      adapterRef: gateway.gatewayId,
      correlationId: "cor:gw",
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      timeoutMs: 15 * 60 * 1000,
      workspaceContinuation: {
        priorAttemptId: "xat:prior-gw",
        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
        expectedVerifiedFiles: [
          { path: ARTIFACT_REL, digest: ARTIFACT_DIGEST },
        ],
      },
    });
    expect(result.outcome).toBe("ack");
    expect(workspace.resumes).toHaveLength(1);
    expect(workspace.prepares).toHaveLength(0);
    expect(workspace.resumes[0]?.priorAttemptId).toBe("xat:prior-gw");
    expect(runner.calls[0]?.cwd).toBe(resumePath);
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
  });
});
