import { afterEach, describe, expect, it } from "vitest";
import {
  buildCursorGitMandateFromScope,
  buildCursorGitObservation,
  createLocalBareGitHarness,
  observeWorkspaceGitFacts,
  preflightCursorGitOptionA,
  qualifyCursorGitPublication,
  verifyRemoteBranchSha,
  type LocalGitHarness,
} from "@/domains/execution/cursor-git-option-a";

describe("ML5 Git Cursor option A (DÉC-ML5-GIT / CP-01)", () => {
  let harness: LocalGitHarness | null = null;
  afterEach(() => {
    harness?.cleanup();
    harness = null;
  });

  it("refuses missing mandate and protected default branches", () => {
    expect(buildCursorGitMandateFromScope(null)).toBeNull();
    expect(
      buildCursorGitMandateFromScope({
        required: true,
        repositoryFullName: "org/repo",
        baseRef: "main",
        workBranch: "main",
        baseSha: null,
      }),
    ).toBeNull();
  });

  it("preflight denies unauthorized repo", () => {
    harness = createLocalBareGitHarness();
    const mandate = buildCursorGitMandateFromScope({
      required: true,
      repositoryFullName: "org/repo",
      baseRef: "main",
      workBranch: "cursor/ml5-work",
      baseSha: harness.headSha(harness.workPath),
    })!;
    const obs = observeWorkspaceGitFacts(harness.workPath, "main", "cursor/ml5-work");
    const denied = preflightCursorGitOptionA({
      mandate,
      workspacePath: harness.workPath,
      authorizedRepos: ["other/repo"],
      observations: obs,
    });
    expect(denied.ok).toBe(false);
    if (!denied.ok) expect(denied.reason).toBe("REPO_NOT_AUTHORIZED");
  });

  it("CP-01: independent observation — missing workspace fails", () => {
    const mandate = buildCursorGitMandateFromScope({
      required: true,
      repositoryFullName: "org/repo",
      baseRef: "main",
      workBranch: "cursor/ml5-work",
      baseSha: "aaa",
    })!;
    const obs = observeWorkspaceGitFacts("/tmp/sfia-missing-ws-" + Date.now(), "main", "cursor/ml5-work");
    expect(obs.workspaceExists).toBe(false);
    const pre = preflightCursorGitOptionA({
      mandate,
      workspacePath: obs.workspacePath,
      authorizedRepos: ["org/repo"],
      observations: obs,
    });
    expect(pre.ok).toBe(false);
    if (!pre.ok) expect(pre.reason).toBe("WORKSPACE_MISSING");
  });

  it("CP-01: base SHA divergence uses observed remote, not contract echo", () => {
    harness = createLocalBareGitHarness();
    const real = harness.headSha(harness.workPath);
    const mandate = buildCursorGitMandateFromScope({
      required: true,
      repositoryFullName: harness.remoteName,
      baseRef: "main",
      workBranch: "cursor/ml5-work",
      baseSha: "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    })!;
    const obs = observeWorkspaceGitFacts(harness.workPath, "main", "cursor/ml5-work");
    expect(obs.observedRemoteBaseSha).toBe(real);
    const pre = preflightCursorGitOptionA({
      mandate,
      workspacePath: harness.workPath,
      authorizedRepos: [harness.remoteName],
      observations: obs,
    });
    expect(pre.ok).toBe(false);
    if (!pre.ok) expect(pre.reason).toBe("BASE_SHA_DIVERGED");
  });

  it("push declared ≠ remote verified until independent re-read + local match", () => {
    expect(
      qualifyCursorGitPublication({
        localHeadSha: "abc",
        remoteHeadShaVerified: null,
        pushDeclaredByCursor: true,
      }),
    ).toBe("PUSHED_UNVERIFIED");
    expect(
      qualifyCursorGitPublication({
        localHeadSha: null,
        remoteHeadShaVerified: "abc",
        pushDeclaredByCursor: true,
      }),
    ).toBe("PUSHED_UNVERIFIED");
    expect(
      qualifyCursorGitPublication({
        localHeadSha: "abc",
        remoteHeadShaVerified: "abc",
        pushDeclaredByCursor: true,
      }),
    ).toBe("REMOTE_VERIFIED");
  });

  it("local bare harness: commit+push then remote HEAD matches", () => {
    harness = createLocalBareGitHarness();
    const branch = "cursor/ml5-work";
    harness.pushWorkBranch(branch);
    const local = harness.headSha(harness.workPath);
    const remote = harness.remoteHead(branch);
    expect(local).toBe(remote);
    const verified = verifyRemoteBranchSha(harness.workPath, branch);
    expect(verified).toBe(remote);
    const obs = buildCursorGitObservation({
      workBranch: branch,
      baseShaDeclared: null,
      localHeadSha: local,
      remoteHeadShaVerified: verified,
      pushDeclaredByCursor: true,
    });
    expect(obs.publicationStatus).toBe("REMOTE_VERIFIED");
  });

  it("preflight passes when observations match mandate", () => {
    harness = createLocalBareGitHarness();
    const base = harness.headSha(harness.workPath);
    const mandate = buildCursorGitMandateFromScope({
      required: true,
      repositoryFullName: harness.remoteName,
      baseRef: "main",
      workBranch: "cursor/ml5-work",
      baseSha: base,
    })!;
    const observations = observeWorkspaceGitFacts(
      harness.workPath,
      "main",
      "cursor/ml5-work",
    );
    expect(observations.originUrl).toBeTruthy();
    expect(observations.observedRemoteBaseSha).toBe(base);
    const pre = preflightCursorGitOptionA({
      mandate,
      workspacePath: harness.workPath,
      authorizedRepos: [harness.remoteName],
      observations,
    });
    expect(pre.ok).toBe(true);
    if (pre.ok) {
      expect(pre.observedBaseSha).toBe(base);
      expect(pre.remoteUrl).toBeTruthy();
    }
  });
});
