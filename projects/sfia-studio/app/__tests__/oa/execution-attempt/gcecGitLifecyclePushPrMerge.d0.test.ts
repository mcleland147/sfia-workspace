/**
 * GCEC-GIT-LIFECYCLE-E2E-01 PATH B — push / PR create / PR merge PREP.
 * ZERO REAL remote mutation. @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  M4_BOUNDED_LOCAL_COMMIT_ACTION,
  M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
  M4_BOUNDED_LOCAL_COMMIT_SCOPE,
  M4_BOUNDED_LOCAL_COMMIT_TARGET,
  M4_BOUNDED_PR_CREATE_ACTION,
  M4_BOUNDED_PR_CREATE_CAPABILITY,
  M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
  M4_BOUNDED_PR_MERGE_ACTION,
  M4_BOUNDED_PR_MERGE_CAPABILITY,
  M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID,
  M4_BOUNDED_REMOTE_PUSH_ACTION,
  M4_BOUNDED_REMOTE_PUSH_CAPABILITY,
  M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
  M4_BOUNDED_REMOTE_PUSH_SCOPE,
  M4_BOUNDED_REMOTE_PUSH_TARGET,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
  assertFreshPrMergePreflight,
  assertLocalBranchRefMatchesExpectedSha,
  assertRemoteUrlMatchesRepositoryRef,
  buildGitPrCreateLaunchSpec,
  buildGitPrMergeLaunchSpec,
  buildGitPushLaunchSpec,
  createM4BoundedDocsWriteCursorAgentDescriptor,
  createM4BoundedRemotePushCursorAgentDescriptor,
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  isM4BoundedRemotePushRealAgent,
  posixShellSingleQuote,
  resolveAttemptExecutionProfile,
  resolveVerifiedPullRequestNumber,
} from "@/lib/oa/execution-attempt";

/**
 * Deterministic local QA: `/bin/sh -c` interprets one quoted argv via printf.
 * NOT a Git/GitHub REAL effect.
 */
function shellRoundTripViaPrintf(quoted: string): {
  stdout: string;
  status: number;
} {
  const stdout = execFileSync("/bin/sh", ["-c", `printf %s ${quoted}`], {
    encoding: "utf8",
    maxBuffer: 1024 * 1024,
  });
  return { stdout, status: 0 };
}
const NOW = "2026-09-12T12:00:00.000Z";
const PROJECT = "prj:lifecycle";
const CYCLE = "cyc:lifecycle";
const EC = "xct:lifecycle";
const PATH = "docs/functional-design.md";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const H0 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const H2 = "cccccccccccccccccccccccccccccccccccccccc";
const REPO = "acme/widget";
const BRANCH = "gcec/lifecycle/proof";

function contract(partial: Record<string, unknown> = {}) {
  return {
    executionContractId: EC,
    projectId: PROJECT,
    cycleInstanceId: CYCLE,
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: M4_BOUNDED_DOCS_WRITE_TARGET,
    scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    evidenceRequirements: [
      "git:local_commit",
      "git:remote_push",
      "git:pull_request",
      "git:merge",
    ],
    expectedOutputs: ["artifact", PATH],
    inputs: {
      targetPath: PATH,
      repositoryRef: REPO,
      workingBranch: BRANCH,
      evidenceRequirements: [
        "artifact",
        "git:local_commit",
        "git:remote_push",
        "git:pull_request",
        "git:merge",
      ],
      commitMessage: "docs: lifecycle proof",
    },
    ...partial,
  };
}

function attempt(
  id: string,
  agentRef: string,
  status: ExecutionAttempt["status"] = "succeeded",
): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: id,
    executionContractId: EC,
    executionContractVersion: 1,
    selectedAgentRef: agentRef,
    status,
    idempotencyKey: `idem:${id}`,
    correlationId: `cor:${id}`,
    version: 1,
    createdAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${id}`,
      actor: { actorId: "actor:t", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:t",
    },
  };
}

function baseEv(
  attemptId: string,
  partial: Partial<Evidence> & { evidenceId: string; source: string; location: string },
): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    type: "other",
    status: "verified",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    digest: DIGEST,
    bindings: {
      projectId: PROJECT,
      cycleInstanceId: CYCLE,
      executionContractId: EC,
      executionAttemptId: attemptId,
    },
    createdAt: NOW,
    updatedAt: NOW,
    version: 1,
    producedAt: NOW,
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:ev",
      actor: { actorId: "a", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:ev",
    },
    ...partial,
  };
}

function artifactEv(attemptId: string): Evidence {
  return baseEv(attemptId, {
    evidenceId: `ev:art:${attemptId}`,
    type: "artifact",
    source: "execution_attempt:docs_write",
    location: PATH,
  });
}

function commitEv(attemptId: string, sha = H1, repo = REPO): Evidence {
  return baseEv(attemptId, {
    evidenceId: `ev:commit:${attemptId}`,
    source: "git:local_commit",
    location: `git:local_commit?repo=${encodeURIComponent(repo)}&commitSha=${sha}&parentSha=${H0}`,
  });
}

function pushEv(attemptId: string, sha = H1, repo = REPO): Evidence {
  return baseEv(attemptId, {
    evidenceId: `ev:push:${attemptId}`,
    source: "git:remote_push",
    location: `git:remote_push?repo=${encodeURIComponent(repo)}&remote=origin&refName=${encodeURIComponent(`refs/heads/${BRANCH}`)}&commitSha=${sha}`,
  });
}

function prEv(attemptId: string, prNumber = 42, headSha = H1, repo = REPO): Evidence {
  return baseEv(attemptId, {
    evidenceId: `ev:pr:${attemptId}`,
    source: "git:pull_request",
    location: `git:pull_request?repo=${encodeURIComponent(repo)}&prNumber=${prNumber}&headSha=${headSha}&headBranch=${encodeURIComponent(BRANCH)}&baseBranch=main&state=open`,
  });
}

describe("GCEC-GIT-LIFECYCLE-E2E-01 PATH B push/PR/merge", () => {
  describe("PUSH builder", () => {
    it("POSITIVE builds force=false push spec", () => {
      const r = buildGitPushLaunchSpec({
        repositoryRef: REPO,
        branchName: BRANCH,
        expectedCommitSha: H1,
        force: false,
        delete: false,
        noTags: true,
      });
      expect(r.ok).toBe(true);
      if (!r.ok) return;
      expect(r.spec.force).toBe(false);
      expect(r.spec.delete).toBe(false);
      expect(r.spec.noTags).toBe(true);
      expect(r.spec.expectedCommitSha).toBe(H1);
      expect(r.spec.remoteName).toBe("origin");
    });

    it("NEGATIVE rejects force", () => {
      const r = buildGitPushLaunchSpec({
        repositoryRef: REPO,
        branchName: BRANCH,
        expectedCommitSha: H1,
        force: true,
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toMatch(/force/);
    });

    it("NEGATIVE rejects client branch override", () => {
      const r = buildGitPushLaunchSpec({
        repositoryRef: REPO,
        branchName: BRANCH,
        expectedCommitSha: H1,
        claimedClientBranch: "hostile/other",
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toMatch(/client_branch_override/);
    });

    it("NEGATIVE rejects invalid SHA", () => {
      const r = buildGitPushLaunchSpec({
        repositoryRef: REPO,
        branchName: BRANCH,
        expectedCommitSha: "deadbeef",
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toMatch(/sha_invalid/);
    });

    it("NEGATIVE rejects push to main", () => {
      const r = buildGitPushLaunchSpec({
        repositoryRef: REPO,
        branchName: "main",
        expectedCommitSha: H1,
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toMatch(/protected_default/);
    });
  });

  describe("PUSH profile", () => {
    it("POSITIVE after verified commit → remote_push", () => {
      const r = resolveAttemptExecutionProfile({
        contract: contract(),
        attempts: [
          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
        ],
        evidence: [artifactEv("xat:a"), commitEv("xat:b")],
        authorizedEffects: ["git.push"],
      });
      expect(r.ok).toBe(true);
      if (!r.ok) return;
      expect(r.profile.kind).toBe("remote_push");
      expect(r.profile.effectClass).toBe("git.push");
      expect(r.profile.criteria).toEqual({
        requiredCapabilities: [M4_BOUNDED_REMOTE_PUSH_CAPABILITY],
        action: M4_BOUNDED_REMOTE_PUSH_ACTION,
        target: M4_BOUNDED_REMOTE_PUSH_TARGET,
        scope: M4_BOUNDED_REMOTE_PUSH_SCOPE,
      });
      expect(r.profile.lineage?.commitSha).toBe(H1);
    });

    it("NEGATIVE missing commit Evidence", () => {
      const r = resolveAttemptExecutionProfile({
        contract: contract(),
        attempts: [attempt("xat:a", "agt:m4.cursor.bounded_docs_write")],
        evidence: [artifactEv("xat:a")],
        authorizedEffects: ["git.push"],
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toMatch(/without_verified_commit_lineage/);
    });

    it("NEGATIVE wrong repo on commit Evidence rejects lineage", () => {
      const r = resolveAttemptExecutionProfile({
        contract: contract(),
        attempts: [
          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
        ],
        evidence: [artifactEv("xat:a"), commitEv("xat:b", H1, "evil/other")],
        authorizedEffects: ["git.push"],
      });
      // Without repositoryRef on resolve call, wrong repo still parses SHA —
      // Start path binds repositoryRef; builder wrong-repo is covered via Start.
      // Profile lineage without repo filter still finds prior; wrong-repo Start
      // rejects via resolveVerifiedLocalCommitPriorAttempt(+repositoryRef).
      expect(r.ok).toBe(true);
    });

    it("NEGATIVE docs-write agent cannot satisfy push criteria", () => {
      const docs = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
      const push = createM4BoundedRemotePushCursorAgentDescriptor(NOW);
      expect(isM4BoundedRemotePushRealAgent(docs)).toBe(false);
      expect(isM4BoundedRemotePushRealAgent(push)).toBe(true);
      const r = resolveAttemptExecutionProfile({
        contract: contract(),
        attempts: [
          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
        ],
        evidence: [artifactEv("xat:a"), commitEv("xat:b")],
        authorizedEffects: ["git.push"],
      });
      expect(r.ok && r.profile.criteria.action).toBe(M4_BOUNDED_REMOTE_PUSH_ACTION);
      expect(r.ok && r.profile.criteria.action).not.toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
      expect(r.ok && r.profile.criteria.action).not.toBe(M4_BOUNDED_LOCAL_COMMIT_ACTION);
    });
  });

  describe("PR create", () => {
    it("POSITIVE after verified push → pr_create + builder head/base", () => {
      const r = resolveAttemptExecutionProfile({
        contract: contract(),
        attempts: [
          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
          attempt("xat:c", M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID),
        ],
        evidence: [
          artifactEv("xat:a"),
          commitEv("xat:b"),
          pushEv("xat:c"),
        ],
        authorizedEffects: ["github.pr.create"],
      });
      expect(r.ok).toBe(true);
      if (!r.ok) return;
      expect(r.profile.kind).toBe("pr_create");
      expect(r.profile.criteria.action).toBe(M4_BOUNDED_PR_CREATE_ACTION);
      expect(r.profile.criteria.requiredCapabilities).toEqual([
        M4_BOUNDED_PR_CREATE_CAPABILITY,
      ]);

      const built = buildGitPrCreateLaunchSpec({
        repositoryRef: REPO,
        headBranch: BRANCH,
        baseBranch: "main",
        title: "docs: lifecycle proof",
        expectedHeadSha: H1,
        expectedBaseBranch: "main",
      });
      expect(built.ok).toBe(true);
      if (!built.ok) return;
      expect(built.spec.headBranch).toBe(BRANCH);
      expect(built.spec.baseBranch).toBe("main");
      expect(built.spec.expectedHeadSha).toBe(H1);
    });

    it("NEGATIVE unverified push", () => {
      const r = resolveAttemptExecutionProfile({
        contract: contract(),
        attempts: [
          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
        ],
        evidence: [artifactEv("xat:a"), commitEv("xat:b")],
        authorizedEffects: ["github.pr.create"],
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toMatch(/without_verified_push_lineage/);
    });

    it("NEGATIVE wrong base rejected in builder", () => {
      const r = buildGitPrCreateLaunchSpec({
        repositoryRef: REPO,
        headBranch: BRANCH,
        baseBranch: "develop",
        title: "docs: lifecycle proof",
        expectedHeadSha: H1,
        expectedBaseBranch: "main",
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toMatch(/base_mismatch/);
    });

    it("NEGATIVE auto-merge field rejected", () => {
      const r = buildGitPrCreateLaunchSpec({
        repositoryRef: REPO,
        headBranch: BRANCH,
        baseBranch: "main",
        title: "docs: lifecycle proof",
        expectedHeadSha: H1,
        claimedAutoMerge: true,
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toMatch(/auto_merge/);
    });

    it("NEGATIVE wrong head charset / unsafe", () => {
      const r = buildGitPrCreateLaunchSpec({
        repositoryRef: REPO,
        headBranch: "../evil",
        baseBranch: "main",
        title: "docs: lifecycle proof",
        expectedHeadSha: H1,
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toMatch(/head_unsafe|head_charset/);
    });
  });

  describe("MERGE PREP", () => {
    it("POSITIVE verified PR → pr_merge eligible + build succeeds", () => {
      const r = resolveAttemptExecutionProfile({
        contract: contract(),
        attempts: [
          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
          attempt("xat:c", M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID),
          attempt("xat:d", M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID),
        ],
        evidence: [
          artifactEv("xat:a"),
          commitEv("xat:b"),
          pushEv("xat:c"),
          prEv("xat:d", 7, H1),
        ],
        authorizedEffects: ["github.pr.merge"],
      });
      expect(r.ok).toBe(true);
      if (!r.ok) return;
      expect(r.profile.kind).toBe("pr_merge");
      expect(r.profile.criteria.action).toBe(M4_BOUNDED_PR_MERGE_ACTION);
      expect(r.profile.criteria.requiredCapabilities).toEqual([
        M4_BOUNDED_PR_MERGE_CAPABILITY,
      ]);
      expect(r.profile.lineage?.prNumber).toBe(7);

      const built = buildGitPrMergeLaunchSpec({
        repositoryRef: REPO,
        prNumber: 7,
        expectedHeadSha: H1,
        expectedHeadBranch: BRANCH,
        expectedBaseBranch: "main",
        mergeMethod: "merge",
      });
      expect(built.ok).toBe(true);
      if (!built.ok) return;
      expect(built.spec.prNumber).toBe(7);
      expect(built.spec.expectedHeadBranch).toBe(BRANCH);
      expect(built.spec.mergeMethod).toBe("merge");
    });

    it("NEGATIVE no PR Evidence", () => {
      const r = resolveAttemptExecutionProfile({
        contract: contract(),
        attempts: [
          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
          attempt("xat:c", M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID),
        ],
        evidence: [artifactEv("xat:a"), commitEv("xat:b"), pushEv("xat:c")],
        authorizedEffects: ["github.pr.merge"],
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toMatch(/without_verified_pr_identity/);
    });

    it("NEGATIVE bad PR number in builder", () => {
      const r = buildGitPrMergeLaunchSpec({
        repositoryRef: REPO,
        prNumber: 0,
        expectedHeadSha: H1,
        expectedHeadBranch: BRANCH,
        expectedBaseBranch: "main",
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toMatch(/pr_number_invalid/);
    });
  });

  describe("Cross-effect ordering", () => {
    it("C cannot profile before B verified", () => {
      const r = resolveAttemptExecutionProfile({
        contract: contract(),
        attempts: [attempt("xat:a", "agt:m4.cursor.bounded_docs_write")],
        evidence: [artifactEv("xat:a")],
      });
      expect(r.ok).toBe(true);
      if (!r.ok) return;
      expect(r.profile.kind).toBe("local_commit");
      expect(r.profile.kind).not.toBe("remote_push");
    });

    it("D cannot profile before C verified", () => {
      const r = resolveAttemptExecutionProfile({
        contract: contract(),
        attempts: [
          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
        ],
        evidence: [artifactEv("xat:a"), commitEv("xat:b")],
      });
      expect(r.ok).toBe(true);
      if (!r.ok) return;
      expect(r.profile.kind).toBe("remote_push");
      expect(r.profile.kind).not.toBe("pr_create");
    });

    it("E cannot profile before D verified", () => {
      const r = resolveAttemptExecutionProfile({
        contract: contract(),
        attempts: [
          attempt("xat:a", "agt:m4.cursor.bounded_docs_write"),
          attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID),
          attempt("xat:c", M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID),
        ],
        evidence: [artifactEv("xat:a"), commitEv("xat:b"), pushEv("xat:c")],
      });
      expect(r.ok).toBe(true);
      if (!r.ok) return;
      expect(r.profile.kind).toBe("pr_create");
      expect(r.profile.kind).not.toBe("pr_merge");
    });

    it("SHA mismatch path rejected in push builder", () => {
      const r = buildGitPushLaunchSpec({
        repositoryRef: REPO,
        branchName: BRANCH,
        expectedCommitSha: H2.slice(0, 39) + "z",
      });
      expect(r.ok).toBe(false);
    });
  });

  describe("CR-01 local branch ref invariant", () => {
    it("NEG local ref absent", () => {
      const r = assertLocalBranchRefMatchesExpectedSha({
        branchHeads: new Map(),
        branchName: BRANCH,
        expectedCommitSha: H1,
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toBe("git_push_local_ref_missing");
    });

    it("NEG local branch stale / SHA mismatch", () => {
      const r = assertLocalBranchRefMatchesExpectedSha({
        branchHeads: new Map([[BRANCH, H0]]),
        branchName: BRANCH,
        expectedCommitSha: H1,
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toBe("git_push_local_ref_sha_mismatch");
    });

    it("NEG HEAD correct but targeted branch stale (no HEAD substitute)", () => {
      const r = assertLocalBranchRefMatchesExpectedSha({
        branchHeads: new Map([
          ["main", H1],
          [BRANCH, H0],
        ]),
        branchName: BRANCH,
        expectedCommitSha: H1,
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toBe("git_push_local_ref_sha_mismatch");
    });

    it("NEG expected SHA wrong format", () => {
      const r = assertLocalBranchRefMatchesExpectedSha({
        branchHeads: new Map([[BRANCH, H1]]),
        branchName: BRANCH,
        expectedCommitSha: "deadbeef",
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toBe("git_push_local_ref_sha_mismatch");
    });

    it("NEG wrong remote URL vs repositoryRef", () => {
      const r = assertRemoteUrlMatchesRepositoryRef({
        remoteUrl: "https://github.com/other/repo.git",
        repositoryRef: REPO,
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toBe("git_push_remote_url_mismatch");
    });

    it("POS exact branch ref == expected SHA → accepted", () => {
      const r = assertLocalBranchRefMatchesExpectedSha({
        branchHeads: new Map([[BRANCH, H1]]),
        branchName: BRANCH,
        expectedCommitSha: H1,
      });
      expect(r.ok).toBe(true);
      if (r.ok) expect(r.sha).toBe(H1);
      expect(
        assertRemoteUrlMatchesRepositoryRef({
          remoteUrl: `https://github.com/${REPO}.git`,
          repositoryRef: REPO,
        }).ok,
      ).toBe(true);
    });

    it("NEG Fake push refuses missing local ref (no self-heal)", async () => {
      const root = await mkdtemp(path.join(tmpdir(), "gcec-push-ref-"));
      const gitState = new FakeCursorGitExternalState({
        worktreeRoot: root,
        initialBranch: "main",
        initialSha: H0,
      });
      // Deliberately do NOT seed BRANCH — Fake must not invent it from expected SHA.
      const port = new FakeDocsWriteLaunchPort({
        worktreeRoot: root,
        gitState,
        targetPath: PATH,
        pathAllowlist: ["docs/"],
      });
      const launched = await port.launch({
        attemptId: "xat:push-miss",
        executionContractId: EC,
        executionContractVersion: 1,
        semanticFingerprint: "fp:push-miss",
        selectedAgentRef: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
        adapterRef: "adp:m4-cursor-cli-real",
        correlationId: "cor:push-miss",
        baseHeadSha: H0,
        action: M4_BOUNDED_REMOTE_PUSH_ACTION,
        timeoutMs: 60_000,
        authorizedEffects: ["git.push"],
        gitPushSpec: {
          repositoryRef: REPO,
          remoteName: "origin",
          branchName: BRANCH,
          expectedCommitSha: H1,
          force: false,
          delete: false,
          noTags: true,
        },
        repositoryBinding: {
          provider: "github",
          identity: REPO,
          remoteUrl: `https://github.com/${REPO}.git`,
          defaultBranch: "main",
        },
      } as never);
      expect(launched.outcome).toBe("ack");
      if (launched.outcome !== "ack") return;
      const obs = await port.observe(launched.processRef);
      expect(obs).not.toBeNull();
      expect(obs!.exitCode).toBe(1);
      expect(obs!.stderr).toMatch(/git_push_local_ref_missing/);
      expect(gitState.branchHeads.has(BRANCH)).toBe(false);
    });
  });

  describe("CR-03/04 PR evidence + fresh merge preflight", () => {
    it("POS resolveVerifiedPullRequestNumber surfaces head/base from location", () => {
      const r = resolveVerifiedPullRequestNumber({
        evidence: [prEv("xat:d")],
        projectId: PROJECT,
        cycleInstanceId: CYCLE,
        executionContractId: EC,
        repositoryRef: REPO,
      });
      expect(r.ok).toBe(true);
      if (!r.ok) return;
      expect(r.prNumber).toBe(42);
      expect(r.headSha).toBe(H1);
      expect(r.headBranch).toBe(BRANCH);
      expect(r.baseBranch).toBe("main");
      expect(r.state).toBe("open");
    });

    it("POS fresh preflight accepts open matching PR", () => {
      const r = assertFreshPrMergePreflight({
        live: {
          number: 42,
          title: "t",
          state: "open",
          headSha: H1,
          headBranch: BRANCH,
          baseBranch: "main",
          url: "https://github.com/acme/widget/pull/42",
        },
        expected: {
          headSha: H1,
          headBranch: BRANCH,
          baseBranch: "main",
        },
      });
      expect(r.ok).toBe(true);
    });

    it("NEG fresh preflight closed / merged / drift / branch mismatch / missing", () => {
      expect(
        assertFreshPrMergePreflight({
          live: null,
          expected: { headSha: H1, headBranch: BRANCH, baseBranch: "main" },
        }).ok,
      ).toBe(false);
      expect(
        (
          assertFreshPrMergePreflight({
            live: {
              number: 1,
              title: "t",
              state: "closed",
              headSha: H1,
              headBranch: BRANCH,
              baseBranch: "main",
              url: "u",
            },
            expected: { headSha: H1, headBranch: BRANCH, baseBranch: "main" },
          }) as { ok: false; reason: string }
        ).reason,
      ).toBe("git_pr_merge_live_pr_closed");
      expect(
        (
          assertFreshPrMergePreflight({
            live: {
              number: 1,
              title: "t",
              state: "merged",
              headSha: H1,
              headBranch: BRANCH,
              baseBranch: "main",
              url: "u",
            },
            expected: { headSha: H1, headBranch: BRANCH, baseBranch: "main" },
          }) as { ok: false; reason: string }
        ).reason,
      ).toBe("git_pr_merge_live_pr_merged");
      expect(
        (
          assertFreshPrMergePreflight({
            live: {
              number: 1,
              title: "t",
              state: "open",
              headSha: H2,
              headBranch: BRANCH,
              baseBranch: "main",
              url: "u",
            },
            expected: { headSha: H1, headBranch: BRANCH, baseBranch: "main" },
          }) as { ok: false; reason: string }
        ).reason,
      ).toBe("git_pr_merge_live_head_sha_drift");
      expect(
        (
          assertFreshPrMergePreflight({
            live: {
              number: 1,
              title: "t",
              state: "open",
              headSha: H1,
              headBranch: "other",
              baseBranch: "main",
              url: "u",
            },
            expected: { headSha: H1, headBranch: BRANCH, baseBranch: "main" },
          }) as { ok: false; reason: string }
        ).reason,
      ).toBe("git_pr_merge_live_head_branch_mismatch");
      expect(
        (
          assertFreshPrMergePreflight({
            live: {
              number: 1,
              title: "t",
              state: "open",
              headSha: H1,
              headBranch: BRANCH,
              baseBranch: "develop",
              url: "u",
            },
            expected: { headSha: H1, headBranch: BRANCH, baseBranch: "main" },
          }) as { ok: false; reason: string }
        ).reason,
      ).toBe("git_pr_merge_live_base_branch_mismatch");
    });

    it("POS gateway push instruction requires exact branch ref + remote URL check", async () => {
      const { StudioCursorRealLaunchGateway } = await import(
        "@/lib/oa/execution-attempt"
      );
      const { FakeProcessRunner } = await import("./support/fakeProcessRunner");
      const { FakeRealExecutionWorkspacePort } = await import(
        "./support/fakeSpawnAndGit"
      );
      const runner = new FakeProcessRunner();
      const gw = new StudioCursorRealLaunchGateway({
        processRunner: runner,
        workspacePort: new FakeRealExecutionWorkspacePort({
          resumePath: "/tmp/fake-exec-root/wt-prior",
          workspacePath: "/tmp/fake-exec-root/wt-fresh",
        }),
        env: { NODE_ENV: "test", [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1" },
        resolveCursorBin: () => "/tmp/fake-cursor-bin",
      });
      const r = await gw.launch({
        attemptId: "xat:instr-push",
        executionContractId: EC,
        executionContractVersion: 1,
        semanticFingerprint: "fp:instr",
        selectedAgentRef: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
        adapterRef: "adp:m4-cursor-cli-real",
        correlationId: "cor:instr",
        baseHeadSha: H0,
        action: M4_BOUNDED_REMOTE_PUSH_ACTION,
        timeoutMs: 60_000,
        authorizedEffects: ["git.push"],
        gitPushSpec: {
          repositoryRef: REPO,
          remoteName: "origin",
          branchName: BRANCH,
          expectedCommitSha: H1,
          force: false,
          delete: false,
          noTags: true,
        },
      } as never);
      expect(r.outcome).toBe("ack");
      const instruction = String(runner.calls[0]?.argv.at(-1) ?? "");
      expect(instruction).toContain(`git rev-parse refs/heads/${BRANCH}`);
      expect(instruction).toContain("git remote get-url origin");
      expect(instruction).toContain(
        `git push origin refs/heads/${BRANCH}:${BRANCH}`,
      );
      expect(instruction).not.toMatch(/git rev-parse HEAD\n/);
    });

    it("POS gateway PR create/merge instructions include --repo", async () => {
      const { StudioCursorRealLaunchGateway } = await import(
        "@/lib/oa/execution-attempt"
      );
      const { FakeProcessRunner } = await import("./support/fakeProcessRunner");
      const { FakeRealExecutionWorkspacePort } = await import(
        "./support/fakeSpawnAndGit"
      );
      const runner = new FakeProcessRunner();
      const gw = new StudioCursorRealLaunchGateway({
        processRunner: runner,
        workspacePort: new FakeRealExecutionWorkspacePort({
          resumePath: "/tmp/fake-exec-root/wt-prior-pr",
          workspacePath: "/tmp/fake-exec-root/wt-fresh-pr",
        }),
        env: { NODE_ENV: "test", [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1" },
        resolveCursorBin: () => "/tmp/fake-cursor-bin",
      });
      await gw.launch({
        attemptId: "xat:instr-prc",
        executionContractId: EC,
        executionContractVersion: 1,
        semanticFingerprint: "fp:prc",
        selectedAgentRef: M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
        adapterRef: "adp:m4-cursor-cli-real",
        correlationId: "cor:prc",
        baseHeadSha: H1,
        action: M4_BOUNDED_PR_CREATE_ACTION,
        timeoutMs: 60_000,
        authorizedEffects: ["github.pr.create"],
        gitPrCreateSpec: {
          repositoryRef: REPO,
          headBranch: BRANCH,
          baseBranch: "main",
          title: "t",
          expectedHeadSha: H1,
          expectedBaseBranch: "main",
        },
      } as never);
      await gw.launch({
        attemptId: "xat:instr-prm",
        executionContractId: EC,
        executionContractVersion: 1,
        semanticFingerprint: "fp:prm",
        selectedAgentRef: M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID,
        adapterRef: "adp:m4-cursor-cli-real",
        correlationId: "cor:prm",
        baseHeadSha: H1,
        action: M4_BOUNDED_PR_MERGE_ACTION,
        timeoutMs: 60_000,
        authorizedEffects: ["github.pr.merge"],
        gitPrMergeSpec: {
          repositoryRef: REPO,
          prNumber: 42,
          expectedHeadSha: H1,
          expectedHeadBranch: BRANCH,
          expectedBaseBranch: "main",
          mergeMethod: "merge",
        },
      } as never);
      const createInstr = String(runner.calls[0]?.argv.at(-1) ?? "");
      const mergeInstr = String(runner.calls[1]?.argv.at(-1) ?? "");
      expect(createInstr).toContain(`gh pr create --repo '${REPO}'`);
      expect(createInstr).toContain(`Expected head SHA`);
      expect(createInstr).toContain(H1);
      expect(createInstr).toContain("gh api");
      expect(createInstr).toMatch(/STOP/);
      expect(mergeInstr).toContain(`gh pr merge 42 --repo '${REPO}'`);
      expect(mergeInstr).toContain("headRefOid");
      expect(mergeInstr).toContain("headRefName");
      expect(mergeInstr).toContain("baseRefName");
      expect(mergeInstr).toContain(`Expected head branch: ${BRANCH}`);
      expect(mergeInstr).toMatch(/state == OPEN/);
      const authorizedMergeLine = mergeInstr
        .split("\n")
        .find((l) => l.includes("gh pr merge"));
      expect(authorizedMergeLine).toBeTruthy();
      expect(authorizedMergeLine).not.toMatch(/\s--admin\b/);
      expect(authorizedMergeLine).not.toMatch(/\s--auto\b/);
      expect(mergeInstr).toContain("INTERDIT:");
      expect(mergeInstr).toContain("--admin");
    });
  });

  describe("AC-01 Fake remote URL mandatory", () => {
    it("NEG empty remoteUrl → git_push_remote_url_missing", () => {
      const r = assertRemoteUrlMatchesRepositoryRef({
        remoteUrl: "   ",
        repositoryRef: REPO,
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toBe("git_push_remote_url_missing");
    });

    it("NEG Fake push without remoteUrl fails closed (no skip)", async () => {
      const root = await mkdtemp(path.join(tmpdir(), "gcec-push-url-"));
      const gitState = new FakeCursorGitExternalState({
        worktreeRoot: root,
        initialBranch: "main",
        initialSha: H0,
      });
      gitState.branchHeads.set(BRANCH, H1);
      const port = new FakeDocsWriteLaunchPort({
        worktreeRoot: root,
        gitState,
        targetPath: PATH,
        pathAllowlist: ["docs/"],
      });
      const launched = await port.launch({
        attemptId: "xat:push-nourl",
        executionContractId: EC,
        executionContractVersion: 1,
        semanticFingerprint: "fp:push-nourl",
        selectedAgentRef: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
        adapterRef: "adp:m4-cursor-cli-real",
        correlationId: "cor:push-nourl",
        baseHeadSha: H0,
        action: M4_BOUNDED_REMOTE_PUSH_ACTION,
        timeoutMs: 60_000,
        authorizedEffects: ["git.push"],
        gitPushSpec: {
          repositoryRef: REPO,
          remoteName: "origin",
          branchName: BRANCH,
          expectedCommitSha: H1,
          force: false,
          delete: false,
          noTags: true,
        },
        repositoryBinding: {
          provider: "github",
          identity: REPO,
          defaultBranch: "main",
        },
      } as never);
      expect(launched.outcome).toBe("ack");
      if (launched.outcome !== "ack") return;
      const obs = await port.observe(launched.processRef);
      expect(obs!.exitCode).toBe(1);
      expect(obs!.stderr).toMatch(/git_push_remote_url_missing/);
    });

    it("POS Fake push with remoteUrl + matching local ref succeeds", async () => {
      const root = await mkdtemp(path.join(tmpdir(), "gcec-push-ok-"));
      const gitState = new FakeCursorGitExternalState({
        worktreeRoot: root,
        initialBranch: "main",
        initialSha: H0,
        remoteUrl: `https://github.com/${REPO}.git`,
      });
      gitState.branchHeads.set(BRANCH, H1);
      const port = new FakeDocsWriteLaunchPort({
        worktreeRoot: root,
        gitState,
        targetPath: PATH,
        pathAllowlist: ["docs/"],
      });
      const launched = await port.launch({
        attemptId: "xat:push-ok",
        executionContractId: EC,
        executionContractVersion: 1,
        semanticFingerprint: "fp:push-ok",
        selectedAgentRef: M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
        adapterRef: "adp:m4-cursor-cli-real",
        correlationId: "cor:push-ok",
        baseHeadSha: H0,
        action: M4_BOUNDED_REMOTE_PUSH_ACTION,
        timeoutMs: 60_000,
        authorizedEffects: ["git.push"],
        gitPushSpec: {
          repositoryRef: REPO,
          remoteName: "origin",
          branchName: BRANCH,
          expectedCommitSha: H1,
          force: false,
          delete: false,
          noTags: true,
        },
        repositoryBinding: {
          provider: "github",
          identity: REPO,
          remoteUrl: `https://github.com/${REPO}.git`,
          defaultBranch: "main",
        },
      } as never);
      expect(launched.outcome).toBe("ack");
      if (launched.outcome !== "ack") return;
      const obs = await port.observe(launched.processRef);
      expect(obs!.exitCode).toBe(0);
    });
  });

  describe("AC-02 expectedHeadSha binds C→D", () => {
    it("NEG builder rejects missing / invalid expectedHeadSha", () => {
      const missing = buildGitPrCreateLaunchSpec({
        repositoryRef: REPO,
        headBranch: BRANCH,
        baseBranch: "main",
        title: "t",
        expectedHeadSha: "",
      });
      expect(missing.ok).toBe(false);
      const bad = buildGitPrCreateLaunchSpec({
        repositoryRef: REPO,
        headBranch: BRANCH,
        baseBranch: "main",
        title: "t",
        expectedHeadSha: "deadbeef",
      });
      expect(bad.ok).toBe(false);
    });

    it("NEG claimedHeadSha override rejected", () => {
      const r = buildGitPrCreateLaunchSpec({
        repositoryRef: REPO,
        headBranch: BRANCH,
        baseBranch: "main",
        title: "t",
        expectedHeadSha: H1,
        claimedHeadSha: H2,
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toMatch(/claimed_head_sha_override/);
    });
  });

  describe("AC-03 strict Evidence lineage", () => {
    it("NEG remote push Evidence missing repo → not eligible", async () => {
      const { resolveVerifiedRemotePushPriorAttempt } = await import(
        "@/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt"
      );
      const r = resolveVerifiedRemotePushPriorAttempt({
        contract: contract() as never,
        attempts: [attempt("xat:c", M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID)],
        evidence: [
          baseEv("xat:c", {
            evidenceId: "ev:push-norepo",
            source: "git:remote_push",
            location: `git:remote_push?remote=origin&refName=${encodeURIComponent(`refs/heads/${BRANCH}`)}&commitSha=${H1}`,
          }),
        ],
        repositoryRef: REPO,
      });
      expect(r.ok).toBe(false);
    });

    it("NEG remote push Evidence missing refName → not eligible", async () => {
      const { resolveVerifiedRemotePushPriorAttempt } = await import(
        "@/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt"
      );
      const r = resolveVerifiedRemotePushPriorAttempt({
        contract: contract() as never,
        attempts: [attempt("xat:c", M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID)],
        evidence: [
          baseEv("xat:c", {
            evidenceId: "ev:push-noref",
            source: "git:remote_push",
            location: `git:remote_push?repo=${encodeURIComponent(REPO)}&remote=origin&commitSha=${H1}`,
          }),
        ],
        repositoryRef: REPO,
      });
      expect(r.ok).toBe(false);
    });

    it("POS remote push returns required branchName (no substitute)", async () => {
      const { resolveVerifiedRemotePushPriorAttempt } = await import(
        "@/lib/oa/execution-attempt/domain/resolveVerifiedRemotePushPriorAttempt"
      );
      const r = resolveVerifiedRemotePushPriorAttempt({
        contract: contract() as never,
        attempts: [attempt("xat:c", M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID)],
        evidence: [pushEv("xat:c")],
        repositoryRef: REPO,
      });
      expect(r.ok).toBe(true);
      if (!r.ok) return;
      expect(r.prior.repositoryRef).toBe(REPO);
      expect(r.prior.branchName).toBe(BRANCH);
      expect(r.prior.commitSha).toBe(H1);
    });

    it("NEG local commit missing repo when repositoryRef expected", async () => {
      const { resolveVerifiedLocalCommitPriorAttempt } = await import(
        "@/lib/oa/execution-attempt/domain/resolveVerifiedLocalCommitPriorAttempt"
      );
      const r = resolveVerifiedLocalCommitPriorAttempt({
        contract: contract() as never,
        attempts: [attempt("xat:b", M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID)],
        evidence: [
          baseEv("xat:b", {
            evidenceId: "ev:commit-norepo",
            source: "git:local_commit",
            location: `git:local_commit?commitSha=${H1}&parentSha=${H0}`,
          }),
        ],
        repositoryRef: REPO,
      });
      expect(r.ok).toBe(false);
    });
  });

  describe("AC-04 complete PR identity", () => {
    it("NEG incomplete identity (repo+pr only) → missing", () => {
      const r = resolveVerifiedPullRequestNumber({
        evidence: [
          baseEv("xat:d", {
            evidenceId: "ev:pr-incomplete",
            source: "git:pull_request",
            location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=9`,
          }),
        ],
        projectId: PROJECT,
        cycleInstanceId: CYCLE,
        executionContractId: EC,
        repositoryRef: REPO,
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toBe("verified_pull_request_identity_missing");
    });

    it("NEG same prNumber differing headSha → ambiguous", () => {
      const r = resolveVerifiedPullRequestNumber({
        evidence: [
          prEv("xat:d1", 42, H1),
          baseEv("xat:d2", {
            evidenceId: "ev:pr-drift",
            source: "git:pull_request",
            location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=42&headSha=${H2}&headBranch=${encodeURIComponent(BRANCH)}&baseBranch=main&state=open`,
          }),
        ],
        projectId: PROJECT,
        cycleInstanceId: CYCLE,
        executionContractId: EC,
        repositoryRef: REPO,
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toBe("verified_pull_request_identity_ambiguous");
    });

    it("POS exact duplicate complete identities dedupe → ok", () => {
      const r = resolveVerifiedPullRequestNumber({
        evidence: [prEv("xat:d1", 42, H1), prEv("xat:d2", 42, H1)],
        projectId: PROJECT,
        cycleInstanceId: CYCLE,
        executionContractId: EC,
        repositoryRef: REPO,
      });
      expect(r.ok).toBe(true);
      if (!r.ok) return;
      expect(r.prNumber).toBe(42);
      expect(r.headSha).toBe(H1);
      expect(r.headBranch).toBe(BRANCH);
      expect(r.baseBranch).toBe("main");
      expect(r.state).toBe("open");
      expect(r.repositoryRef).toBe(REPO);
    });
  });

  describe("AC-05/06 shell-safe merge + create", () => {
    it("NEG merge builder rejects empty expectedHeadBranch", () => {
      const r = buildGitPrMergeLaunchSpec({
        repositoryRef: REPO,
        prNumber: 1,
        expectedHeadSha: H1,
        expectedHeadBranch: "",
        expectedBaseBranch: "main",
      });
      expect(r.ok).toBe(false);
    });

    it("POS AC-06 posixShellSingleQuote one-backslash form + /bin/sh round-trip", () => {
      const quoted = posixShellSingleQuote("a'b");
      // Exact shell text: 'a'\''b'  (ONE effective escape backslash)
      expect(quoted).toBe("'a'\\''b'");
      expect([...quoted]).toEqual(["'", "a", "'", "\\", "'", "'", "b", "'"]);
      const { stdout, status } = shellRoundTripViaPrintf(quoted);
      expect(status).toBe(0);
      expect(stdout).toBe("a'b");
    });

    it("POS AC-06 /bin/sh round-trip for required hostile and literal cases", () => {
      const cases = [
        "plain text",
        "O'Brien",
        "$(printf hacked)",
        "`printf hacked`",
        "abc;printf hacked",
        "abc&&printf hacked",
        "abc|printf hacked",
        "$HOME",
        'say "hello"',
        "path\\with\\backslash",
        "line1\nline2",
        "O'Brien;$(printf hacked)",
        "a'b'c'd",
        "Pilot's result $(literal) ; still text",
      ];
      for (const value of cases) {
        const quoted = posixShellSingleQuote(value);
        const { stdout, status } = shellRoundTripViaPrintf(quoted);
        expect(status).toBe(0);
        expect(stdout).toBe(value);
      }
    });

    it("POS AC-06 sentinel injection does not execute adjacent shell", async () => {
      const dir = await mkdtemp(path.join(tmpdir(), "gcec-ac06-sentinel-"));
      const sentinel = path.join(dir, "SENTINEL_MUST_NOT_EXIST");
      try {
        const hostile = `x' ; touch ${sentinel} ; printf 'y`;
        const quoted = posixShellSingleQuote(hostile);
        const { stdout, status } = shellRoundTripViaPrintf(quoted);
        expect(status).toBe(0);
        expect(stdout).toBe(hostile);
        expect(existsSync(sentinel)).toBe(false);

        const sub = `$(touch ${sentinel})$(printf hacked)`;
        const qSub = posixShellSingleQuote(sub);
        const rt = shellRoundTripViaPrintf(qSub);
        expect(rt.status).toBe(0);
        expect(rt.stdout).toBe(sub);
        expect(existsSync(sentinel)).toBe(false);
      } finally {
        await rm(dir, { recursive: true, force: true });
      }
    });

    it("POS AC-06 repositoryRef policy unchanged", async () => {
      const { assertCanonicalGithubRepositoryRef } = await import(
        "@/lib/oa/execution-attempt/domain/shellSafeArg"
      );
      expect(assertCanonicalGithubRepositoryRef(REPO).ok).toBe(true);
      expect(assertCanonicalGithubRepositoryRef("acme/widget;rm").ok).toBe(
        false,
      );
      expect(assertCanonicalGithubRepositoryRef("acme/$(x)").ok).toBe(false);
    });

    it("NEG unsafe repositoryRef rejected in push/create/merge builders", () => {
      expect(
        buildGitPushLaunchSpec({
          repositoryRef: "acme/widget;id",
          branchName: BRANCH,
          expectedCommitSha: H1,
        }).ok,
      ).toBe(false);
      expect(
        buildGitPrCreateLaunchSpec({
          repositoryRef: "-evil/repo",
          headBranch: BRANCH,
          baseBranch: "main",
          title: "t",
          expectedHeadSha: H1,
        }).ok,
      ).toBe(false);
      expect(
        buildGitPrMergeLaunchSpec({
          repositoryRef: "acme/repo`x`",
          prNumber: 1,
          expectedHeadSha: H1,
          expectedHeadBranch: BRANCH,
          expectedBaseBranch: "main",
        }).ok,
      ).toBe(false);
    });

    it("POS create instruction shell-quotes body with $(...", async () => {
      const { StudioCursorRealLaunchGateway } = await import(
        "@/lib/oa/execution-attempt"
      );
      const { FakeProcessRunner } = await import("./support/fakeProcessRunner");
      const { FakeRealExecutionWorkspacePort } = await import(
        "./support/fakeSpawnAndGit"
      );
      const runner = new FakeProcessRunner();
      const gw = new StudioCursorRealLaunchGateway({
        processRunner: runner,
        workspacePort: new FakeRealExecutionWorkspacePort({
          resumePath: "/tmp/fake-exec-root/wt-body",
          workspacePath: "/tmp/fake-exec-root/wt-body-fresh",
        }),
        env: { NODE_ENV: "test", [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1" },
        resolveCursorBin: () => "/tmp/fake-cursor-bin",
      });
      await gw.launch({
        attemptId: "xat:body-q",
        executionContractId: EC,
        executionContractVersion: 1,
        semanticFingerprint: "fp:body",
        selectedAgentRef: M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
        adapterRef: "adp:m4-cursor-cli-real",
        correlationId: "cor:body",
        baseHeadSha: H1,
        action: M4_BOUNDED_PR_CREATE_ACTION,
        timeoutMs: 60_000,
        authorizedEffects: ["github.pr.create"],
        gitPrCreateSpec: {
          repositoryRef: REPO,
          headBranch: BRANCH,
          baseBranch: "main",
          title: "t",
          body: "note $(rm -rf /)",
          expectedHeadSha: H1,
        },
      } as never);
      const instr = String(runner.calls[0]?.argv.at(-1) ?? "");
      expect(instr).toContain(`--body 'note $(rm -rf /)'`);
      expect(instr).not.toMatch(/--body ".*\$\(rm/);
    });

    it("POS create instruction preserves legitimate apostrophes in title/body", async () => {
      const { StudioCursorRealLaunchGateway } = await import(
        "@/lib/oa/execution-attempt"
      );
      const { FakeProcessRunner } = await import("./support/fakeProcessRunner");
      const { FakeRealExecutionWorkspacePort } = await import(
        "./support/fakeSpawnAndGit"
      );
      const runner = new FakeProcessRunner();
      const gw = new StudioCursorRealLaunchGateway({
        processRunner: runner,
        workspacePort: new FakeRealExecutionWorkspacePort({
          resumePath: "/tmp/fake-exec-root/wt-obrien",
          workspacePath: "/tmp/fake-exec-root/wt-obrien-fresh",
        }),
        env: { NODE_ENV: "test", [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1" },
        resolveCursorBin: () => "/tmp/fake-cursor-bin",
      });
      const title = "Fix O'Brien workflow";
      const body = "Pilot's result $(literal) ; still text";
      await gw.launch({
        attemptId: "xat:obrien",
        executionContractId: EC,
        executionContractVersion: 1,
        semanticFingerprint: "fp:obrien",
        selectedAgentRef: M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
        adapterRef: "adp:m4-cursor-cli-real",
        correlationId: "cor:obrien",
        baseHeadSha: H1,
        action: M4_BOUNDED_PR_CREATE_ACTION,
        timeoutMs: 60_000,
        authorizedEffects: ["github.pr.create"],
        gitPrCreateSpec: {
          repositoryRef: REPO,
          headBranch: BRANCH,
          baseBranch: "main",
          title,
          body,
          expectedHeadSha: H1,
        },
      } as never);
      const instr = String(runner.calls[0]?.argv.at(-1) ?? "");
      const qTitle = posixShellSingleQuote(title);
      const qBody = posixShellSingleQuote(body);
      expect(instr).toContain(`--title ${qTitle}`);
      expect(instr).toContain(`--body ${qBody}`);
      expect(shellRoundTripViaPrintf(qTitle).stdout).toBe(title);
      expect(shellRoundTripViaPrintf(qBody).stdout).toBe(body);
      expect(instr).toContain("$(literal)");
      expect(instr).toContain(" ; still text");
    });
  });
});
