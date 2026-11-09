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

export type FileContentResult = {
  path: string;
  ref: string;
  sha: string;
  content: string;
  encoding: "utf-8";
};

export type PullRequestInfo = {
  number: number;
  title: string;
  state: string;
  headSha: string;
  baseSha: string;
  headRef: string;
  baseRef: string;
  htmlUrl: string;
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
 * REAL mutations require STUDIO_GITHUB_ALLOW_MUTATIONS=documentary exactly (merge always blocked).
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
