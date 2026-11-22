import { StudioError } from "@/lib/http-errors";
import { isGitHubAppReadConfigured } from "./github-app-config";
import { createRealGitHubReadProviderFromEnv } from "./real-github-provider";
import { getScriptedGitHubProvider, type ScriptedFaultKind } from "./scripted-github-provider";

export type ProviderMode = "SCRIPTED" | "REAL";

export type InstallationRepo = {
  id: string;
  owner: string;
  name: string;
  fullName: string;
  defaultBranch: string;
};

export type RefInfo = { name: string; sha: string };

/** UI / API bound for branch listing — never present a truncated list as exhaustive. */
export const GIT_REFS_UI_BOUND = 40;

/**
 * Honest refs listing. When `incompleteCoverage` is true, more matching refs existed
 * than were returned; callers must not claim completeness.
 */
export type ListRefsResult = {
  refs: RefInfo[];
  incompleteCoverage: boolean;
  /** Matching refs observed before applying GIT_REFS_UI_BOUND (may exceed refs.length). */
  matchedCount: number;
};

export type FileContentKind = "markdown" | "text" | "binary" | "too_large";

export type FileContentResult = {
  path: string;
  ref: string;
  /**
   * Blob object SHA (GitHub Contents API). Must not be treated as a commit SHA.
   */
  sha: string;
  /** Empty when contentKind is binary or too_large — never invent fallback text. */
  content: string;
  encoding: "utf-8" | "binary";
  contentKind: FileContentKind;
};

export type DirectoryEntry = {
  name: string;
  path: string;
  type: "file" | "dir";
  sha: string;
  size?: number;
};

export type PullRequestInfo = {
  number: number;
  title: string;
  /**
   * Normalized: `open` | `closed` | `merged` (merged wins over closed when GitHub reports merged).
   */
  state: string;
  headSha: string;
  baseSha: string;
  headRef: string;
  baseRef: string;
  htmlUrl: string;
  /** Live mergeability from GitHub when provided; null/undefined = not observed. */
  mergeable?: boolean | null;
  mergeableState?: string | null;
  commits?: number | null;
  changedFiles?: number | null;
  /** Observed merge commit SHA when GitHub reports one — never invent from head. */
  mergeCommitSha?: string | null;
};

export interface GitHubProvider {
  mode: ProviderMode;
  listInstallationRepos(pilotId: string, installationId: string): Promise<InstallationRepo[]>;
  getRefSha(pilotId: string, fullName: string, ref: string): Promise<string>;
  getFileContent(
    pilotId: string,
    fullName: string,
    path: string,
    ref: string,
  ): Promise<FileContentResult>;
  /** Non-recursive directory listing at ref (bounded). */
  listDirectory(
    pilotId: string,
    fullName: string,
    path: string,
    ref: string,
  ): Promise<DirectoryEntry[]>;
  /** Bounded list of refs (branches/tags) for an authorized repository. */
  listRefs(
    pilotId: string,
    fullName: string,
    refPrefix?: string,
  ): Promise<ListRefsResult>;
  createBranch(
    pilotId: string,
    fullName: string,
    branch: string,
    fromSha: string,
  ): Promise<{ ref: string; sha: string }>;
  putFileContents(input: {
    pilotId: string;
    fullName: string;
    path: string;
    branch: string;
    message: string;
    content: string;
    expectedHeadSha?: string;
  }): Promise<{ commitSha: string; headSha: string }>;
  createPullRequest(input: {
    pilotId: string;
    fullName: string;
    title: string;
    head: string;
    base: string;
    body?: string;
    /** Stable publication identity embedded in body for lost-ACK recovery. */
    publicationMarker?: string;
  }): Promise<PullRequestInfo>;
  findPullRequest(input: {
    pilotId: string;
    fullName: string;
    head: string;
    base: string;
    publicationMarker?: string;
    expectedHeadSha?: string;
  }): Promise<{ matches: PullRequestInfo[]; ambiguous: boolean }>;
  mergePullRequest(input: {
    pilotId: string;
    fullName: string;
    prNumber: number;
    expectedHeadSha: string;
    expectedBaseSha?: string | null;
  }): Promise<{ merged: boolean; sha: string }>;
  getPullRequest(pilotId: string, fullName: string, prNumber: number): Promise<PullRequestInfo>;
  /**
   * Bounded list of PRs for a repository (READ). head/base optional filters.
   * Never authorizes merge.
   */
  listPullRequests(input: {
    pilotId: string;
    fullName: string;
    head?: string;
    base?: string;
    state?: "open" | "closed" | "all";
  }): Promise<{
    matches: PullRequestInfo[];
    incompleteCoverage: boolean;
    matchedCount: number;
  }>;
  /** Bounded PR changed-files listing (READ). */
  listPullRequestFiles(
    pilotId: string,
    fullName: string,
    prNumber: number,
  ): Promise<{
    files: Array<{ filename: string; status: string; additions: number; deletions: number }>;
    incompleteCoverage: boolean;
    matchedCount: number;
  }>;
  /** Single-commit metadata + bounded files (READ). */
  getCommit(
    pilotId: string,
    fullName: string,
    ref: string,
  ): Promise<{
    sha: string;
    message: string;
    authorName: string | null;
    authorEmail: string | null;
    authorDate: string | null;
    committerName: string | null;
    committerEmail: string | null;
    committerDate: string | null;
    parents: string[];
    htmlUrl: string;
    files: Array<{ filename: string; status: string; additions: number; deletions: number }>;
    incompleteCoverage: boolean;
    matchedFileCount: number;
  }>;
  /** Bounded compare base...head (READ). No patch hunks. */
  compareRefs(
    pilotId: string,
    fullName: string,
    base: string,
    head: string,
  ): Promise<{
    baseSha: string;
    headSha: string;
    status: string;
    aheadBy: number;
    behindBy: number;
    totalCommits: number;
    files: Array<{ filename: string; status: string; additions: number; deletions: number }>;
    incompleteCoverage: boolean;
    matchedFileCount: number;
    htmlUrl: string;
  }>;
  /** Combined status + check-runs for a commit/ref (READ). Never authorizes merge. */
  getCommitStatus(
    pilotId: string,
    fullName: string,
    ref: string,
  ): Promise<{
    combinedState: string | null;
    combinedStatuses: Array<{ context: string; state: string; description: string | null }>;
    checkRuns: Array<{
      name: string;
      status: string;
      conclusion: string | null;
      htmlUrl: string | null;
    }>;
    incompleteCoverage: boolean;
    matchedCheckCount: number;
    statusCoverage: "COMPLETE" | "PARTIAL" | "DENIED" | "UNAVAILABLE";
    statusNote: string;
  }>;
  /** Deterministic mutation counters for SCRIPTED concurrency proofs (optionally per repo). */
  getMutationCounts?(
    pilotId?: string,
    fullName?: string,
  ): {
    createBranch: number;
    putFileContents: number;
    createPR: number;
    mergePR: number;
  };
  resetMutationCounts?(pilotId?: string, fullName?: string): void;
}

/**
 * REAL App credentials for installation-to-server reads.
 * Uses GITHUB_APP_ID + GITHUB_APP_INSTALLATION_ID + GITHUB_APP_PRIVATE_KEY_PATH.
 * Never treats Better Auth GITHUB_CLIENT_ID/SECRET as App proof.
 */
function realAppReadConfigured(): boolean {
  return isGitHubAppReadConfigured();
}

/**
 * Default SCRIPTED.
 * REAL only when STUDIO_GITHUB_PROVIDER=real AND App read credentials are present.
 * Product user paths must not set STUDIO_GITHUB_PROVIDER=real before D1/user-auth gates.
 * REAL mutations (branch/file/PR/merge) require STUDIO_GITHUB_ALLOW_MUTATIONS=documentary exactly.
 * Merge uses the same documentary gate + WRITE allowlist + D6/D7 SHA gates — not a separate hard-block.
 * The flag is an operator env gate only — never a substitute for D6/D7 authority.
 */
/**
 * Env-configured effect mode without requiring REAL credentials.
 * Used to freeze / compare attempt provenance even when REAL App is not bootable.
 */
export function resolveConfiguredEffectProviderMode(): ProviderMode {
  const mode = (process.env.STUDIO_GITHUB_PROVIDER ?? "scripted").toLowerCase();
  return mode === "real" ? "REAL" : "SCRIPTED";
}

export function resolveGitHubProvider(): GitHubProvider {
  const mode = resolveConfiguredEffectProviderMode();
  if (mode === "REAL") {
    if (!realAppReadConfigured()) {
      throw new StudioError(
        "NOT_CONFIGURED",
        "Fournisseur GitHub REAL non configuré (App ID / installation / PRIVATE_KEY_PATH)",
        { httpStatus: 503 },
      );
    }
    return createRealGitHubReadProviderFromEnv();
  }
  return getScriptedGitHubProvider();
}

export type { ScriptedFaultKind };
export { createRealGitHubReadProviderFromEnv } from "./real-github-provider";
export {
  GITHUB_APP_ALLOWED_FULL_NAME,
  GITHUB_APP_EXPECTED_APP_ID,
  GITHUB_APP_EXPECTED_INSTALLATION_ID,
  isGitHubAppReadConfigured,
} from "./github-app-config";
