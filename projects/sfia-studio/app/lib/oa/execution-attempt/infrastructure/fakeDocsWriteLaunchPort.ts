/**
 * TEST-ONLY — fake Cursor docs-write external boundary.
 * Writes allowlisted text files into an isolated worktree directory.
 * Same Product StartExecution / Gate D path as REAL; substitutes launch only.
 * ZERO REAL Cursor. ZERO remote Git.
 *
 * D-GCEC-15: honors AuthorizedExecutionSlice — filesystem + optional fake Git
 * effects via shared FakeCursorGitExternalState.
 *
 * CR-GCEC-02: prefer request.docsWriteSpec; constructor options are fallback
 * for unit tests only.
 */
import { createHash } from "node:crypto";
import { mkdir, writeFile, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_REAL_GATEWAY_ADAPTER_ID,
  type RealExecutionLaunchPort,
  type RealLaunchRequest,
  type RealLaunchResult,
  type RealProcessObservation,
} from "@/lib/oa/execution-attempt";
import { M4_BOUNDED_LOCAL_COMMIT_ACTION } from "./m4BoundedLocalCommitCursorAgent";
import { M4_BOUNDED_REMOTE_PUSH_ACTION } from "./m4BoundedRemotePushCursorAgent";
import { M4_BOUNDED_PR_CREATE_ACTION } from "./m4BoundedPrCreateCursorAgent";
import { M4_BOUNDED_PR_MERGE_ACTION } from "./m4BoundedPrMergeCursorAgent";
import {
  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
  M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
  M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID,
  M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
} from "../domain/realLaunchSafety";
import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
import { buildGitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
import {
  buildGitPushLaunchSpec,
  isBoundedGitPushOnlySlice,
} from "../domain/gitPushLaunchSpec";
import {
  assertLocalBranchRefMatchesExpectedSha,
  assertRemoteUrlMatchesRepositoryRef,
} from "../domain/assertLocalBranchRefMatchesExpectedSha";
import {
  buildGitPrCreateLaunchSpec,
  isBoundedGitPrCreateOnlySlice,
} from "../domain/gitPrCreateLaunchSpec";
import {
  buildGitPrMergeLaunchSpec,
  isBoundedGitPrMergeOnlySlice,
} from "../domain/gitPrMergeLaunchSpec";
import type {
  CursorAuthorizedEffectId,
  CursorExecutionReport,
  CursorGitEffectClaims,
} from "../domain/cursorExecutionReport";
import {
  FakeCursorGitExternalState,
} from "./fakeCursorGitExternalState";

export type FakeDocsWriteLaunchPortOptions = {
  worktreeRoot: string;
  pathAllowlist: readonly string[];
  /** Relative path written on success (must be allowlisted). Fallback only. */
  targetPath?: string;
  failLaunch?: boolean;
  content?: string;
  /** Optional fallback repositoryRef when docsWriteSpec absent. */
  repositoryRef?: string;
  /** Shared mutable Fake Cursor Git/GitHub external state (D-GCEC-15). */
  gitState?: FakeCursorGitExternalState;
  /** Default branch name used for fake commit/push when not otherwise known. */
  defaultBranch?: string;
};

const DEFAULT_FILESYSTEM_EFFECTS: readonly CursorAuthorizedEffectId[] = [
  "filesystem.create",
  "filesystem.modify",
  "validation.run",
];

const ALL_PROGRESSIVE_EFFECTS: readonly CursorAuthorizedEffectId[] = [
  "filesystem.create",
  "filesystem.modify",
  "validation.run",
  "git.commit",
  "git.push",
  "github.pr.create",
  "github.pr.merge",
];

function normalizeRel(p: string): string {
  const n = p.replace(/\\/g, "/").replace(/^\.\//, "").replace(/\/+$/, "");
  if (!n || n.startsWith("/") || n.split("/").includes("..")) {
    throw new Error("PATH_ESCAPE");
  }
  return n;
}

function isAllowlisted(rel: string, allowlist: readonly string[]): boolean {
  const n = normalizeRel(rel);
  return allowlist.some((a) => {
    const root = normalizeRel(a);
    return n === root || n.startsWith(`${root}/`);
  });
}

function resolveAuthorizedEffects(
  request: RealLaunchRequest,
): {
  authorized: Set<CursorAuthorizedEffectId>;
  blocked: CursorAuthorizedEffectId[];
} {
  const fromRequest = request.authorizedEffects;
  const slice = request.authorizedExecutionSlice;
  if (fromRequest && fromRequest.length > 0) {
    const authorized = new Set<CursorAuthorizedEffectId>(fromRequest);
    const blocked =
      (slice?.blockedEffects as CursorAuthorizedEffectId[] | undefined) ??
      ALL_PROGRESSIVE_EFFECTS.filter((e) => !authorized.has(e));
    return { authorized, blocked };
  }
  if (slice?.authorizedEffects?.length) {
    const authorized = new Set(
      slice.authorizedEffects as CursorAuthorizedEffectId[],
    );
    const blocked =
      (slice.blockedEffects as CursorAuthorizedEffectId[] | undefined) ??
      ALL_PROGRESSIVE_EFFECTS.filter((e) => !authorized.has(e));
    return { authorized, blocked };
  }
  // Default: filesystem only (CR-GCEC-15 — Git never inferred).
  const authorized = new Set<CursorAuthorizedEffectId>(DEFAULT_FILESYSTEM_EFFECTS);
  return {
    authorized,
    blocked: [
      "filesystem.delete",
      "git.commit",
      "git.push",
      "github.pr.create",
      "github.pr.update",
      "github.pr.merge",
    ],
  };
}

export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
  readonly gatewayId = M4_REAL_GATEWAY_ADAPTER_ID;
  readonly externalEffects = true as const;
  readonly calls: RealLaunchRequest[] = [];
  readonly touchedFiles: string[] = [];
  lastDigest: string | null = null;
  lastReport: CursorExecutionReport | null = null;
  private readonly options: FakeDocsWriteLaunchPortOptions;
  private readonly observations = new Map<string, RealProcessObservation>();
  readonly gitState: FakeCursorGitExternalState;

  constructor(options: FakeDocsWriteLaunchPortOptions) {
    this.options = options;
    this.gitState =
      options.gitState ??
      new FakeCursorGitExternalState({
        worktreeRoot: options.worktreeRoot,
        initialBranch: options.defaultBranch ?? "main",
      });
  }

  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
    this.calls.push(request);
    if (this.options.failLaunch) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "FAKE_DOCS_WRITE_LAUNCH_FAILED",
        realProcessInvoked: false,
        detailCode: "REAL_LAUNCH_FAILED",
      };
    }
    const { authorized, blocked } = resolveAuthorizedEffects(request);
    const wantsCommitProfile = Boolean(request.gitCommitSpec);
    const wantsPushProfile = Boolean(request.gitPushSpec);
    const wantsPrCreateProfile = Boolean(request.gitPrCreateSpec);
    const wantsPrMergeProfile = Boolean(request.gitPrMergeSpec);
    if (wantsCommitProfile) {
      if (!isBoundedGitCommitOnlySlice([...authorized])) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason:
            authorized.size === 0
              ? "git_commit_authorized_effects_empty"
              : "git_commit_slice_not_commit_only",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      if (
        request.selectedAgentRef !== M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID
      ) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason:
            request.selectedAgentRef === "agt:m4.cursor.bounded_docs_write"
              ? "git_commit_agent_capability_bypass"
              : "git_commit_selected_agent_invalid",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      if (!request.workspaceContinuation) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_commit_continuation_required",
          realProcessInvoked: false,
          detailCode: "REAL_WORKSPACE_INVALID",
        };
      }
      const revalidated = buildGitCommitLaunchSpec({
        repositoryRef: request.gitCommitSpec!.repositoryRef,
        expectedParentSha: request.gitCommitSpec!.expectedParentSha,
        exactPaths: request.gitCommitSpec!.exactPaths,
        commitMessage: request.gitCommitSpec!.commitMessage,
        ...(request.gitCommitSpec!.branchOrRef
          ? { branchOrRef: request.gitCommitSpec!.branchOrRef }
          : {}),
      });
      if (!revalidated.ok) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: revalidated.reason,
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
    }
    if (wantsPushProfile) {
      if (!isBoundedGitPushOnlySlice([...authorized])) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_push_slice_not_push_only",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      if (request.selectedAgentRef !== M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_push_agent_capability_bypass",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const revalidated = buildGitPushLaunchSpec({
        repositoryRef: request.gitPushSpec!.repositoryRef,
        remoteName: request.gitPushSpec!.remoteName,
        branchName: request.gitPushSpec!.branchName,
        expectedCommitSha: request.gitPushSpec!.expectedCommitSha,
        force: false,
        delete: false,
        noTags: true,
      });
      if (!revalidated.ok) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: revalidated.reason,
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
    }
    if (wantsPrCreateProfile) {
      if (!isBoundedGitPrCreateOnlySlice([...authorized])) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_pr_create_slice_not_create_only",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      if (request.selectedAgentRef !== M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_pr_create_agent_capability_bypass",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const revalidated = buildGitPrCreateLaunchSpec({
        repositoryRef: request.gitPrCreateSpec!.repositoryRef,
        headBranch: request.gitPrCreateSpec!.headBranch,
        baseBranch: request.gitPrCreateSpec!.baseBranch,
        title: request.gitPrCreateSpec!.title,
        expectedHeadSha: request.gitPrCreateSpec!.expectedHeadSha,
        ...(request.gitPrCreateSpec!.body != null
          ? { body: request.gitPrCreateSpec!.body }
          : {}),
        expectedBaseBranch: request.gitPrCreateSpec!.baseBranch,
        claimedAutoMerge: (request as { autoMerge?: unknown }).autoMerge,
      });
      if (!revalidated.ok) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: revalidated.reason,
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
    }
    if (wantsPrMergeProfile) {
      if (!isBoundedGitPrMergeOnlySlice([...authorized])) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_pr_merge_slice_not_merge_only",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      if (request.selectedAgentRef !== M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_pr_merge_agent_capability_bypass",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const revalidated = buildGitPrMergeLaunchSpec({
        repositoryRef: request.gitPrMergeSpec!.repositoryRef,
        prNumber: request.gitPrMergeSpec!.prNumber,
        expectedHeadSha: request.gitPrMergeSpec!.expectedHeadSha,
        expectedHeadBranch: request.gitPrMergeSpec!.expectedHeadBranch,
        expectedBaseBranch: request.gitPrMergeSpec!.expectedBaseBranch,
        mergeMethod: request.gitPrMergeSpec!.mergeMethod,
      });
      if (!revalidated.ok) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: revalidated.reason,
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
    }
    const isCommitOnly =
      wantsCommitProfile && isBoundedGitCommitOnlySlice([...authorized]);
    const isPushOnly =
      wantsPushProfile && isBoundedGitPushOnlySlice([...authorized]);
    const isPrCreateOnly =
      wantsPrCreateProfile && isBoundedGitPrCreateOnlySlice([...authorized]);
    const isPrMergeOnly =
      wantsPrMergeProfile && isBoundedGitPrMergeOnlySlice([...authorized]);
    const actionOk =
      request.action === M4_BOUNDED_DOCS_WRITE_ACTION ||
      request.action === M4_BOUNDED_LOCAL_COMMIT_ACTION ||
      request.action === M4_BOUNDED_REMOTE_PUSH_ACTION ||
      request.action === M4_BOUNDED_PR_CREATE_ACTION ||
      request.action === M4_BOUNDED_PR_MERGE_ACTION ||
      isCommitOnly ||
      isPushOnly ||
      isPrCreateOnly ||
      isPrMergeOnly;
    if (!actionOk) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "ACTION_NOT_DOCS_WRITE",
        realProcessInvoked: false,
        detailCode: "REAL_AGENT_PROFILE_INVALID",
      };
    }

    const commitSpec = request.gitCommitSpec;
    const pushSpec = request.gitPushSpec;
    const prCreateSpec = request.gitPrCreateSpec;
    const spec = request.docsWriteSpec;
    const pathAllowlist = spec?.pathAllowlist ?? this.options.pathAllowlist;
    const targetPath =
      commitSpec?.exactPaths[0] ??
      spec?.targetPath ??
      this.options.targetPath ??
      "docs/functional-design.md";
    const repositoryRef =
      commitSpec?.repositoryRef ??
      pushSpec?.repositoryRef ??
      prCreateSpec?.repositoryRef ??
      request.gitPrMergeSpec?.repositoryRef ??
      spec?.repositoryRef ??
      this.options.repositoryRef ??
      "unknown/repo";
    const branch =
      pushSpec?.branchName ??
      prCreateSpec?.headBranch ??
      commitSpec?.branchOrRef ??
      this.options.defaultBranch ??
      request.repositoryBinding?.defaultBranch ??
      "gcec/docs";

    let rel: string;
    try {
      rel = normalizeRel(targetPath);
    } catch {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "PATH_ESCAPE",
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    if (!isCommitOnly && !isAllowlisted(rel, pathAllowlist)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "OUT_OF_SCOPE_WRITE",
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    const root = path.resolve(this.options.worktreeRoot);
    const abs = path.resolve(root, ...rel.split("/"));
    if (!abs.startsWith(root + path.sep) && abs !== root) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "PATH_ESCAPE",
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    const executed: CursorAuthorizedEffectId[] = [];
    const stoppedBefore: CursorAuthorizedEffectId[] = [];
    const gitEffects: CursorGitEffectClaims = {};
    let created: string[] = [];
    let modified: string[] = [];
    const digests: Record<string, string> = {};

    const canFsCreate = !isCommitOnly && authorized.has("filesystem.create");
    const canFsModify = !isCommitOnly && authorized.has("filesystem.modify");

    if (canFsCreate || canFsModify) {
      await mkdir(path.dirname(abs), { recursive: true });
      const brief = spec?.artifactBrief ?? "Functional design";
      const contentReqs = (spec?.contentRequirements ?? []).join(", ");
      const body =
        this.options.content ??
        `# Functional design\n\nGenerated by FakeDocsWriteLaunchPort\n` +
          `repository=${repositoryRef}\n` +
          `attempt=${request.attemptId}\n` +
          `brief=${brief}\n` +
          `contentRequirements=${contentReqs}\n`;
      let existed = false;
      try {
        await readFile(abs);
        existed = true;
      } catch {
        existed = false;
      }
      await writeFile(abs, body, "utf8");
      this.touchedFiles.push(rel);
      const digest = `sha256:${createHash("sha256").update(body).digest("hex")}`;
      this.lastDigest = digest;
      digests[rel] = digest;
      if (existed && canFsModify) {
        modified = [rel];
        executed.push("filesystem.modify");
      } else if (canFsCreate) {
        created = [rel];
        executed.push("filesystem.create");
        if (canFsModify) executed.push("filesystem.modify");
      } else if (canFsModify) {
        modified = [rel];
        executed.push("filesystem.modify");
      }
    } else {
      stoppedBefore.push("filesystem.create", "filesystem.modify");
    }

    if (authorized.has("validation.run")) {
      executed.push("validation.run");
    }

    // Progressive Git effects — only when authorized.
    try {
      if (authorized.has("git.commit")) {
        this.gitState.currentBranch = branch;
        if (request.baseHeadSha && !this.gitState.branchHeads.has(branch)) {
          this.gitState.branchHeads.set(branch, request.baseHeadSha.toLowerCase());
        }
        const commitPaths =
          commitSpec?.exactPaths ?? [rel];
        const commitMessage =
          commitSpec?.commitMessage ??
          `docs: ${spec?.artifactBrief ?? "functional design"}`;
        const commit = await this.gitState.commit(commitPaths, commitMessage);
        executed.push("git.commit");
        gitEffects.commit = {
          branch,
          sha: commit.sha,
          ...(commit.parent ? { parentSha: commit.parent } : {}),
          message: commit.message,
        };
      } else if (!stoppedBefore.includes("git.commit")) {
        stoppedBefore.push("git.commit");
      }

      if (authorized.has("git.push")) {
        const pushBranch = request.gitPushSpec?.branchName ?? branch;
        const expectedSha =
          request.gitPushSpec?.expectedCommitSha ??
          this.gitState.branchHeads.get(pushBranch);
        if (!expectedSha) {
          throw new Error("git_push_local_ref_missing");
        }
        const refCheck = assertLocalBranchRefMatchesExpectedSha({
          branchHeads: this.gitState.branchHeads,
          branchName: pushBranch,
          expectedCommitSha: expectedSha,
        });
        if (!refCheck.ok) {
          throw new Error(refCheck.reason);
        }
        const remoteUrl =
          request.repositoryBinding?.remoteUrl ??
          this.gitState.remoteUrl;
        if (
          typeof remoteUrl !== "string" ||
          !remoteUrl.trim()
        ) {
          throw new Error("git_push_remote_url_missing");
        }
        if (!request.gitPushSpec?.repositoryRef?.trim()) {
          throw new Error("git_push_repository_ref_missing");
        }
        const urlCheck = assertRemoteUrlMatchesRepositoryRef({
          remoteUrl,
          repositoryRef: request.gitPushSpec.repositoryRef,
        });
        if (!urlCheck.ok) {
          throw new Error(urlCheck.reason);
        }
        this.gitState.currentBranch = pushBranch;
        const pushed = this.gitState.push(pushBranch);
        executed.push("git.push");
        gitEffects.push = {
          remote: request.gitPushSpec?.remoteName ?? "origin",
          ref: pushed.ref,
          sha: pushed.sha,
        };
      } else if (executed.includes("git.commit")) {
        stoppedBefore.push("git.push");
      }

      if (authorized.has("github.pr.create")) {
        const base =
          request.gitPrCreateSpec?.baseBranch ??
          request.repositoryBinding?.defaultBranch ??
          "main";
        const head =
          request.gitPrCreateSpec?.headBranch ?? branch;
        const pr = this.gitState.openPr(base, head);
        executed.push("github.pr.create");
        gitEffects.pullRequest = {
          number: pr.number,
          url: `https://github.com/${repositoryRef}/pull/${pr.number}`,
          headSha: pr.headSha,
          baseBranch: pr.base,
          state: "open",
        };
      } else if (executed.includes("git.push")) {
        stoppedBefore.push("github.pr.create");
      }

      if (authorized.has("github.pr.merge")) {
        const prNumber =
          request.gitPrMergeSpec?.prNumber ??
          gitEffects.pullRequest?.number ??
          [...this.gitState.prs.values()].find((p) => p.state === "open")
            ?.number;
        if (prNumber == null) {
          throw new Error("fake_pr_merge_no_open_pr");
        }
        const merged = this.gitState.mergePr(prNumber);
        executed.push("github.pr.merge");
        gitEffects.merge = {
          prNumber: merged.number,
          mergeSha: merged.mergeSha!,
          targetBranch: merged.base,
        };
        if (gitEffects.pullRequest) {
          gitEffects.pullRequest = {
            ...gitEffects.pullRequest,
            state: "merged",
          };
        }
      } else if (executed.includes("github.pr.create")) {
        stoppedBefore.push("github.pr.merge");
      }
    } catch (err) {
      const reason = err instanceof Error ? err.message : "fake_git_effect_failed";
      const report: CursorExecutionReport = {
        schemaVersion: "oa.cursor-execution-report.1",
        attemptId: request.attemptId,
        executionContractId: request.executionContractId,
        repositoryRef,
        baseSha: request.baseHeadSha,
        status: "failed",
        fileEffects: {
          created,
          modified,
          deleted: [],
          digests,
        },
        validationEffects: executed.includes("validation.run")
          ? [
              {
                identity: "docs-write-path-allowlist",
                result: "pass",
                summary: "allowlist ok",
              },
            ]
          : [],
        gitEffects: Object.keys(gitEffects).length > 0 ? gitEffects : undefined,
        authorizedEffectsExecuted: executed,
        stoppedBeforeEffects: stoppedBefore,
      };
      this.lastReport = report;
      const processRef = `proc:fake-docs-write:${request.attemptId}`;
      this.observations.set(processRef, {
        processRef,
        exitCode: 1,
        timedOut: false,
        stdout: `FAKE_DOCS_WRITE_FAILED\nreason=${reason}\nCURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(report)}\n`,
        stderr: reason,
        durationMs: 1,
        realProcessInvoked: true,
        worktreeRef: root,
      });
      return {
        outcome: "ack",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        realProcessInvoked: true,
        processRef,
        worktreeRef: root,
      };
    }

    // Any remaining blocked progressive effects that we did not execute.
    for (const effect of blocked) {
      if (
        effect === "filesystem.delete" ||
        effect === "github.pr.update"
      ) {
        if (!stoppedBefore.includes(effect)) stoppedBefore.push(effect);
        continue;
      }
      if (!executed.includes(effect) && !stoppedBefore.includes(effect)) {
        stoppedBefore.push(effect);
      }
    }

    // succeeded if no blocked remaining after executing authorized; else stopped.
    const progressiveBlockedRemain = blocked.filter(
      (e) =>
        (e === "git.commit" ||
          e === "git.push" ||
          e === "github.pr.create" ||
          e === "github.pr.merge" ||
          e === "filesystem.create" ||
          e === "filesystem.modify" ||
          e === "validation.run") &&
        !executed.includes(e),
    );
    const finalStatus: CursorExecutionReport["status"] =
      progressiveBlockedRemain.length > 0 ? "stopped" : "succeeded";

    const report: CursorExecutionReport = {
      schemaVersion: "oa.cursor-execution-report.1",
      attemptId: request.attemptId,
      executionContractId: request.executionContractId,
      repositoryRef,
      baseSha: request.baseHeadSha,
      status: finalStatus,
      fileEffects: {
        created,
        modified,
        deleted: [],
        digests,
      },
      validationEffects: executed.includes("validation.run")
        ? [
            {
              identity: "docs-write-path-allowlist",
              result: "pass",
              summary: "allowlist ok",
            },
          ]
        : [],
      gitEffects: Object.keys(gitEffects).length > 0 ? gitEffects : undefined,
      authorizedEffectsExecuted: executed,
      stoppedBeforeEffects: stoppedBefore.length > 0 ? stoppedBefore : undefined,
    };
    this.lastReport = report;

    const processRef = `proc:fake-docs-write:${request.attemptId}`;
    this.observations.set(processRef, {
      processRef,
      exitCode: 0,
      timedOut: false,
      stdout:
        `FAKE_DOCS_WRITE_OK\nfiles=${rel}\ndigest=${this.lastDigest ?? ""}\n` +
        `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(report)}\n`,
      stderr: "",
      durationMs: 1,
      realProcessInvoked: true,
      worktreeRef: root,
    });

    return {
      outcome: "ack",
      gatewayId: this.gatewayId,
      attemptId: request.attemptId,
      realProcessInvoked: true,
      processRef,
      worktreeRef: root,
    };
  }

  async observe(processRef: string): Promise<RealProcessObservation | null> {
    return this.observations.get(processRef) ?? null;
  }

  async awaitCompletion(
    processRef: string,
  ): Promise<RealProcessObservation | null> {
    return this.observe(processRef);
  }
}

export async function listRelativeFiles(root: string): Promise<string[]> {
  const out: string[] = [];
  async function walk(dir: string, prefix: string): Promise<void> {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const rel = prefix ? `${prefix}/${e.name}` : e.name;
      if (e.isDirectory()) await walk(path.join(dir, e.name), rel);
      else out.push(rel);
    }
  }
  await walk(root, "");
  return out;
}

export async function sha256File(absPath: string): Promise<string> {
  const buf = await readFile(absPath);
  return `sha256:${createHash("sha256").update(buf).digest("hex")}`;
}
