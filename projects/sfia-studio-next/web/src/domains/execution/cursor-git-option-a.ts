/**
 * DÉC-ML5-GIT Option A — Cursor publishes Git directly under D6 mandate.
 * Studio does NOT publish Cursor code. Studio D9 reads/verifies remote facts.
 *
 * CP-01: preflight uses independent workspace/remote observations — never
 * contract-declared SHA as "observed". No GitHub REAL mutation in this module.
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

export type CursorGitMandate = {
  repositoryFullName: string;
  baseRef: string;
  workBranch: string;
  baseSha: string | null;
  allowedOps: Array<"commit" | "push" | "create_branch">;
  /** PR/merge require distinct mandate — never implied by develop/push. */
  allowPullRequest: boolean;
  allowMerge: boolean;
};

export type ObservedWorkspaceGitFacts = {
  workspacePath: string;
  workspaceExists: boolean;
  gitDirExists: boolean;
  isGitRepo: boolean;
  currentBranch: string | null;
  localHeadSha: string | null;
  originUrl: string | null;
  /** Normalized owner/repo from origin when recognizable. */
  originRepoFullName: string | null;
  /** SHA of base ref — prefer ls-remote (fresh); may fall back to tracking ref. */
  observedRemoteBaseSha: string | null;
  observedWorkBranchRemoteSha: string | null;
  /** true only when SHA came from ls-remote / fresh transport read. */
  remoteBaseFresh: boolean;
  limits: string[];
  errors: string[];
};

/** Map SSH/HTTPS Git remotes to `owner/repo` when possible. */
export function normalizeGitHubRepoFromUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  const raw = url.trim().replace(/\.git$/i, "");
  const https = /^(?:https?:\/\/)?(?:www\.)?github\.com[/:]([^/\s]+)\/([^/\s#?]+)/i.exec(raw);
  if (https) return `${https[1]}/${https[2]}`.toLowerCase();
  const ssh = /^git@github\.com:([^/\s]+)\/([^/\s]+)/i.exec(raw);
  if (ssh) return `${ssh[1]}/${ssh[2]}`.toLowerCase();
  // Local bare / path alias — last two path segments when they look like owner/repo
  const pathish = /(?:^|\/)([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)$/.exec(raw.replace(/\/+$/, ""));
  if (pathish && !pathish[1]!.includes(":")) {
    return `${pathish[1]}/${pathish[2]}`.toLowerCase();
  }
  return null;
}

export function reposMatch(authorized: string, observed: string | null): boolean {
  if (!observed) return false;
  return authorized.trim().toLowerCase() === observed.trim().toLowerCase();
}

export type CursorGitPreflightResult =
  | {
      ok: true;
      mandate: CursorGitMandate;
      workspacePath: string;
      remoteUrl: string | null;
      observedBaseSha: string | null;
      observedLocalHead: string | null;
      observedBranch: string | null;
      limits: string[];
    }
  | {
      ok: false;
      reason: string;
      limits: string[];
      observations?: ObservedWorkspaceGitFacts;
    };

export type CursorGitObservation = {
  at: string;
  workBranch: string;
  baseShaDeclared: string | null;
  localHeadSha: string | null;
  remoteHeadShaVerified: string | null;
  publicationStatus:
    | "LOCAL_ONLY"
    | "PUSHED_UNVERIFIED"
    | "REMOTE_VERIFIED"
    | "DIVERGED"
    | "INACCESSIBLE"
    | "DENIED";
  limits: string[];
};

function gitExec(cwd: string, args: string[]): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

/** Prompt text alone is never a permission barrier — preflight must check facts. */
export function buildCursorGitMandateFromScope(
  gitScope: {
    required?: boolean;
    repositoryFullName?: string | null;
    baseRef?: string | null;
    workBranch?: string | null;
    baseSha?: string | null;
  } | null | undefined,
  opts?: { allowPullRequest?: boolean; allowMerge?: boolean },
): CursorGitMandate | null {
  if (!gitScope?.required) return null;
  const repositoryFullName = (gitScope.repositoryFullName ?? "").trim();
  const baseRef = (gitScope.baseRef ?? "").trim();
  const workBranch = (gitScope.workBranch ?? "").trim();
  if (!repositoryFullName || !baseRef || !workBranch) return null;
  if (workBranch === "main" || workBranch === "master") {
    return null;
  }
  return {
    repositoryFullName,
    baseRef,
    workBranch,
    baseSha: gitScope.baseSha?.trim() || null,
    allowedOps: ["commit", "push", "create_branch"],
    allowPullRequest: Boolean(opts?.allowPullRequest),
    allowMerge: Boolean(opts?.allowMerge),
  };
}

/**
 * Independent observation of workspace Git facts.
 * Never copies mandate/contract SHA into observed fields.
 */
export function observeWorkspaceGitFacts(workspacePath: string, baseRef: string, workBranch: string): ObservedWorkspaceGitFacts {
  const limits: string[] = ["INDEPENDENT_GIT_OBSERVATION", "CONTRACT_SHA_NOT_USED_AS_OBSERVED"];
  const errors: string[] = [];
  const workspaceExists = existsSync(workspacePath);
  if (!workspaceExists) {
    return {
      workspacePath,
      workspaceExists: false,
      gitDirExists: false,
      isGitRepo: false,
      currentBranch: null,
      localHeadSha: null,
      originUrl: null,
      originRepoFullName: null,
      observedRemoteBaseSha: null,
      observedWorkBranchRemoteSha: null,
      remoteBaseFresh: false,
      limits,
      errors: ["WORKSPACE_MISSING"],
    };
  }
  const gitDirExists = existsSync(join(workspacePath, ".git"));
  let isGitRepo = false;
  try {
    const top = gitExec(workspacePath, ["rev-parse", "--is-inside-work-tree"]);
    isGitRepo = top === "true";
  } catch {
    errors.push("NOT_A_GIT_REPO");
  }

  let currentBranch: string | null = null;
  let localHeadSha: string | null = null;
  let originUrl: string | null = null;
  let observedRemoteBaseSha: string | null = null;
  let observedWorkBranchRemoteSha: string | null = null;
  let remoteBaseFresh = false;

  if (isGitRepo) {
    try {
      currentBranch = gitExec(workspacePath, ["rev-parse", "--abbrev-ref", "HEAD"]);
    } catch {
      errors.push("BRANCH_UNREADABLE");
    }
    try {
      localHeadSha = gitExec(workspacePath, ["rev-parse", "HEAD"]);
    } catch {
      errors.push("LOCAL_HEAD_UNREADABLE");
    }
    try {
      originUrl = gitExec(workspacePath, ["remote", "get-url", "origin"]);
    } catch {
      errors.push("ORIGIN_MISSING");
      limits.push("ORIGIN_URL_UNAVAILABLE");
    }
    /** Fresh read first (ls-remote); tracking ref is stale-cache only. */
    const lsRemoteSha = (ref: string): string | null => {
      try {
        const out = gitExec(workspacePath, ["ls-remote", "origin", `refs/heads/${ref}`]);
        const sha = out.split(/\s+/)[0]?.trim();
        return sha && /^[0-9a-f]{7,40}$/i.test(sha) ? sha : null;
      } catch {
        return null;
      }
    };
    const trackingSha = (ref: string): string | null => {
      try {
        return gitExec(workspacePath, ["rev-parse", `refs/remotes/origin/${ref}`]);
      } catch {
        return null;
      }
    };
    const freshBase = lsRemoteSha(baseRef);
    if (freshBase) {
      observedRemoteBaseSha = freshBase;
      remoteBaseFresh = true;
      limits.push("REMOTE_BASE_VIA_LS_REMOTE");
    } else {
      observedRemoteBaseSha = trackingSha(baseRef);
      if (observedRemoteBaseSha) {
        limits.push("REMOTE_BASE_VIA_TRACKING_REF_MAY_BE_STALE");
      } else {
        errors.push("REMOTE_BASE_UNREADABLE");
        limits.push("REMOTE_BASE_SHA_NOT_OBSERVED");
      }
    }
    const freshWork = lsRemoteSha(workBranch);
    observedWorkBranchRemoteSha = freshWork ?? trackingSha(workBranch);
  }

  return {
    workspacePath,
    workspaceExists,
    gitDirExists,
    isGitRepo,
    currentBranch,
    localHeadSha,
    originUrl,
    originRepoFullName: normalizeGitHubRepoFromUrl(originUrl),
    observedRemoteBaseSha,
    observedWorkBranchRemoteSha,
    remoteBaseFresh,
    limits,
    errors,
  };
}

/**
 * Preflight Option A — requires independent observations.
 * Do NOT pass contract baseSha as observedRemoteBaseSha.
 */
export function preflightCursorGitOptionA(input: {
  mandate: CursorGitMandate | null;
  workspacePath: string;
  authorizedRepos: string[];
  /** Independent observations — prefer observeWorkspaceGitFacts(). */
  observations?: ObservedWorkspaceGitFacts | null;
  /**
   * @deprecated CP-01 — do not use contract SHA. Kept only for explicit fail when
   * callers still pass self-confirming values without observations.
   */
  observedRemoteBaseSha?: string | null;
  workspaceExists?: boolean;
}): CursorGitPreflightResult {
  const limits: string[] = ["OPTION_A_CURSOR_PUBLISHES", "STUDIO_IS_NOT_CODE_PUBLISHER"];
  if (!input.mandate) {
    return { ok: false, reason: "GIT_MANDATE_MISSING", limits: [...limits, "NO_GIT_SCOPE"] };
  }
  const m = input.mandate;
  if (!input.authorizedRepos.includes(m.repositoryFullName)) {
    return {
      ok: false,
      reason: "REPO_NOT_AUTHORIZED",
      limits: [...limits, `repo:${m.repositoryFullName}`],
    };
  }
  if (m.allowMerge || m.allowPullRequest) {
    limits.push("PR_OR_MERGE_REQUIRES_DISTINCT_MANDATE_FLAG");
  }

  // CP-01: self-confirming call pattern (contract SHA as observed, workspaceExists:true forced)
  // without independent observations → refuse.
  const obs =
    input.observations ??
    (input.workspaceExists === true && input.observedRemoteBaseSha != null && !existsSync(input.workspacePath)
      ? null
      : observeWorkspaceGitFacts(input.workspacePath, m.baseRef, m.workBranch));

  if (!obs) {
    return {
      ok: false,
      reason: "GIT_OBSERVATION_REQUIRED",
      limits: [...limits, "SELF_CONFIRMING_PREFLIGHT_REFUSED"],
    };
  }

  limits.push(...obs.limits);

  if (!obs.workspaceExists) {
    return { ok: false, reason: "WORKSPACE_MISSING", limits, observations: obs };
  }
  if (!obs.isGitRepo) {
    return { ok: false, reason: "WORKSPACE_NOT_GIT", limits, observations: obs };
  }
  if (!obs.originUrl) {
    return { ok: false, reason: "ORIGIN_MISSING", limits, observations: obs };
  }

  // Origin must match mandate repositoryFullName (normalized), or be an explicit local-bare alias.
  const originMatchesMandate = reposMatch(m.repositoryFullName, obs.originRepoFullName);
  const localBareAlias =
    m.repositoryFullName.startsWith("local-bare/") &&
    input.authorizedRepos.includes(m.repositoryFullName);
  if (!originMatchesMandate && !localBareAlias) {
    return {
      ok: false,
      reason: "ORIGIN_REPO_MISMATCH",
      limits: [
        ...limits,
        `mandate:${m.repositoryFullName}`,
        `origin:${obs.originRepoFullName ?? "unparsed"}`,
      ],
      observations: obs,
    };
  }
  if (localBareAlias && !originMatchesMandate) {
    limits.push("LOCAL_BARE_ALIAS_ORIGIN");
  }

  // Work-branch mandate: refuse if currently on protected default when about to mutate.
  if (obs.currentBranch === "main" || obs.currentBranch === "master") {
    limits.push(`CURRENT_BRANCH_IS_DEFAULT:${obs.currentBranch}`);
  }
  if (
    obs.currentBranch &&
    obs.currentBranch !== m.workBranch &&
    obs.currentBranch !== "HEAD" &&
    obs.currentBranch !== m.baseRef
  ) {
    limits.push(`CURRENT_BRANCH_DIFFERS:${obs.currentBranch}≠${m.workBranch}`);
  }

  // Independent remote base SHA required when mandate declares a baseSha.
  if (m.baseSha) {
    if (!obs.observedRemoteBaseSha) {
      return {
        ok: false,
        reason: "REMOTE_BASE_UNOBSERVED",
        limits: [...limits, `declared:${m.baseSha.slice(0, 12)}`],
        observations: obs,
      };
    }
    if (m.baseSha !== obs.observedRemoteBaseSha) {
      return {
        ok: false,
        reason: "BASE_SHA_DIVERGED",
        limits: [
          ...limits,
          `declared:${m.baseSha.slice(0, 12)}`,
          `observed:${obs.observedRemoteBaseSha.slice(0, 12)}`,
        ],
        observations: obs,
      };
    }
  }

  // Reject legacy callers that pass observedRemoteBaseSha equal to mandate without matching real obs
  // (defense in depth — already covered by observeWorkspaceGitFacts).
  if (
    input.observedRemoteBaseSha != null &&
    input.observations == null &&
    input.observedRemoteBaseSha === m.baseSha &&
    obs.observedRemoteBaseSha !== input.observedRemoteBaseSha
  ) {
    return {
      ok: false,
      reason: "SELF_CONFIRMING_SHA_REFUSED",
      limits: [...limits, "CONTRACT_SHA_ECHO_REJECTED"],
      observations: obs,
    };
  }

  return {
    ok: true,
    mandate: m,
    workspacePath: input.workspacePath,
    remoteUrl: obs.originUrl,
    observedBaseSha: obs.observedRemoteBaseSha,
    observedLocalHead: obs.localHeadSha,
    observedBranch: obs.currentBranch,
    limits,
  };
}

/**
 * Publication is only REMOTE_VERIFIED after independent re-read AND local HEAD
 * matches the verified remote SHA for the expected realization.
 * A remote SHA alone (without local HEAD) is not publication of the expected work.
 * Cursor declaring `git push` is never enough.
 */
export function qualifyCursorGitPublication(input: {
  localHeadSha: string | null;
  remoteHeadShaVerified: string | null;
  pushDeclaredByCursor: boolean;
}): CursorGitObservation["publicationStatus"] {
  if (!input.remoteHeadShaVerified) {
    return input.pushDeclaredByCursor ? "PUSHED_UNVERIFIED" : "LOCAL_ONLY";
  }
  if (!input.localHeadSha) {
    // Remote ref exists but we cannot attest the realization commit without local HEAD.
    return input.pushDeclaredByCursor ? "PUSHED_UNVERIFIED" : "INACCESSIBLE";
  }
  if (input.localHeadSha === input.remoteHeadShaVerified) return "REMOTE_VERIFIED";
  return "DIVERGED";
}

export function buildCursorGitObservation(input: {
  workBranch: string;
  baseShaDeclared: string | null;
  localHeadSha: string | null;
  remoteHeadShaVerified: string | null;
  pushDeclaredByCursor: boolean;
  limits?: string[];
}): CursorGitObservation {
  return {
    at: new Date().toISOString(),
    workBranch: input.workBranch,
    baseShaDeclared: input.baseShaDeclared,
    localHeadSha: input.localHeadSha,
    remoteHeadShaVerified: input.remoteHeadShaVerified,
    publicationStatus: qualifyCursorGitPublication(input),
    limits: input.limits ?? ["DETERMINISTIC_GIT_OBS"],
  };
}

/** Re-read remote branch SHA from a workspace (independent of Cursor claim). */
export function verifyRemoteBranchSha(workspacePath: string, branch: string): string | null {
  if (!existsSync(workspacePath)) return null;
  try {
    return gitExec(workspacePath, ["rev-parse", `refs/remotes/origin/${branch}`]);
  } catch {
    try {
      const out = gitExec(workspacePath, ["ls-remote", "origin", `refs/heads/${branch}`]);
      const sha = out.split(/\s+/)[0]?.trim();
      return sha && /^[0-9a-f]{7,40}$/i.test(sha) ? sha : null;
    } catch {
      return null;
    }
  }
}

/** Local bare + clone harness — DETERMINISTIC only, never GitHub REAL. */
export type LocalGitHarness = {
  root: string;
  barePath: string;
  workPath: string;
  remoteName: string;
  cleanup: () => void;
  run: (cwd: string, args: string[]) => string;
  headSha: (cwd: string) => string;
  pushWorkBranch: (branch: string) => void;
  remoteHead: (branch: string) => string;
};

export function createLocalBareGitHarness(prefix = "sfia-ml5-git-a-"): LocalGitHarness {
  const root = mkdtempSync(join(tmpdir(), prefix));
  const barePath = join(root, "remote.git");
  const workPath = join(root, "work");
  const run = (cwd: string, args: string[]) =>
    execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
  run(root, ["init", "--bare", barePath]);
  mkdirSync(workPath);
  run(workPath, ["init"]);
  run(workPath, ["config", "user.email", "ml5-git-a@studio.local"]);
  run(workPath, ["config", "user.name", "ML5 Git A Harness"]);
  writeFileSync(join(workPath, "README.md"), "# ML5 Git A harness\n");
  run(workPath, ["add", "README.md"]);
  run(workPath, ["commit", "-m", "init"]);
  run(workPath, ["branch", "-M", "main"]);
  run(workPath, ["remote", "add", "origin", barePath]);
  run(workPath, ["push", "-u", "origin", "main"]);
  const headSha = (cwd: string) => run(cwd, ["rev-parse", "HEAD"]);
  return {
    root,
    barePath,
    workPath,
    remoteName: "local-bare/ml5-git-a",
    cleanup: () => {
      try {
        rmSync(root, { recursive: true, force: true });
      } catch {
        /* best-effort */
      }
    },
    run,
    headSha,
    pushWorkBranch: (branch: string) => {
      run(workPath, ["checkout", "-B", branch]);
      writeFileSync(join(workPath, "change.txt"), `change ${Date.now()}\n`);
      run(workPath, ["add", "change.txt"]);
      run(workPath, ["commit", "-m", `ml5 work on ${branch}`]);
      run(workPath, ["push", "-u", "origin", branch]);
    },
    remoteHead: (branch: string) => run(barePath, ["rev-parse", branch]),
  };
}

export function readLocalFileAtRef(repoPath: string, ref: string, filePath: string): string | null {
  try {
    return execFileSync("git", ["show", `${ref}:${filePath}`], {
      cwd: repoPath,
      encoding: "utf8",
    });
  } catch {
    return null;
  }
}

export function assertHarnessFile(path: string, expectedSubstring: string): boolean {
  if (!existsSync(path)) return false;
  return readFileSync(path, "utf8").includes(expectedSubstring);
}
