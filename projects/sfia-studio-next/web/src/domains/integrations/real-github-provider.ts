import { and, desc, eq } from "drizzle-orm";
import { StudioError } from "@/lib/http-errors";
import { db } from "@/db/client";
import { integrationAuthorizations } from "@/db/schema";
import {
  authenticateInstallationReadOnly,
  createFileContents,
  createGitRef,
  createPullRequestRemote,
  fetchFileContentUtf8,
  fetchMatchingRefs,
  fetchPullRequestRemote,
  fetchRefSha,
  fetchRepositoryMetadata,
  listInstallationRepositories,
  listPullRequestsRemote,
  type GitHubFetch,
  type InstallationAccessToken,
} from "./github-app-auth";
import {
  loadGitHubAppCredentialsFromEnv,
  type GitHubAppLoadedCredentials,
  parseFullName,
} from "./github-app-config";
import { classifyPublicationPath } from "./path-policy";
import type {
  FileContentResult,
  GitHubProvider,
  InstallationRepo,
  PullRequestInfo,
  RefInfo,
} from "./github-provider";

/**
 * Bounded REAL documentary mutations (create branch / new file / open PR).
 * Requires explicit operator flag — never inferred from OAuth CONNECTED alone.
 * Merge remains hard-blocked.
 */
export function isBoundedRealMutationAllowed(): boolean {
  const v = (process.env.STUDIO_GITHUB_ALLOW_MUTATIONS ?? "").toLowerCase().trim();
  // Contract: only `documentary` opens the gate. `1`/`bounded` are rejected.
  return v === "documentary";
}

/** Exact line match for publication marker — substring/prefix matches refuse. */
export function prBodyHasPublicationMarker(body: string | null | undefined, marker: string): boolean {
  if (!body || !marker) return false;
  const needle = `sfia-publication:${marker}`;
  return body.split(/\r?\n/).some((line) => line.trim() === needle);
}

function mutationBlocked(op: string): never {
  throw new StudioError(
    "ACCESS_DENIED",
    `Mutation GitHub REAL interdite (${op}) — STUDIO_GITHUB_ALLOW_MUTATIONS≠documentary ou merge hors périmètre`,
    { httpStatus: 403 },
  );
}

function assertMutableBranch(branch: string, op: string) {
  const b = branch.replace(/^refs\/heads\//, "").toLowerCase();
  if (!b || b === "main" || b === "master") {
    throw new StudioError(
      "ACCESS_DENIED",
      `Branche protégée refusée pour ${op}`,
      { httpStatus: 403 },
    );
  }
}

function assertAllowedRepo(creds: GitHubAppLoadedCredentials, fullName: string) {
  if (fullName.toLowerCase() !== creds.allowedFullName.toLowerCase()) {
    throw new StudioError(
      "ACCESS_DENIED",
      `Dépôt hors périmètre REAL READ (${fullName})`,
      { httpStatus: 403 },
    );
  }
}

type TokenCache = {
  access: InstallationAccessToken;
  fetchedAtMs: number;
};

/**
 * D9 GitHub provider — REAL.
 * Reads: installation-to-server (restricted) when no user context required.
 * Mutations (bounded documentary): user-to-server token only — never installation fallback.
 * Merge: always hard-blocked.
 */
export class RealGitHubReadProvider implements GitHubProvider {
  readonly mode = "REAL" as const;
  private readonly creds: GitHubAppLoadedCredentials;
  private readonly fetchImpl: GitHubFetch;
  private tokenCache: TokenCache | null = null;
  private mutationAttempts = {
    createBranch: 0,
    putFileContents: 0,
    createPR: 0,
    mergePR: 0,
  };

  constructor(creds: GitHubAppLoadedCredentials, fetchImpl: GitHubFetch = fetch) {
    this.creds = creds;
    this.fetchImpl = fetchImpl;
  }

  /** User-to-server token for the CONNECTED pilot — no installation substitute. */
  private async userAccessToken(pilotId: string): Promise<string> {
    const auth = (
      await db
        .select()
        .from(integrationAuthorizations)
        .where(
          and(
            eq(integrationAuthorizations.pilotId, pilotId),
            eq(integrationAuthorizations.status, "CONNECTED"),
          ),
        )
        .orderBy(desc(integrationAuthorizations.createdAt))
        .limit(1)
    )[0];
    if (!auth) {
      throw new StudioError("ACCESS_DENIED", "User OAuth CONNECTED requis pour mutation REAL", {
        httpStatus: 403,
      });
    }
    // Dynamic import avoids module cycle with authorization-service → resolveGitHubProvider.
    const { loadOrRefreshUserAccessToken } = await import("./authorization-service");
    return loadOrRefreshUserAccessToken(auth, this.fetchImpl);
  }

  getMutationCounts() {
    return { ...this.mutationAttempts };
  }

  resetMutationCounts() {
    this.mutationAttempts = {
      createBranch: 0,
      putFileContents: 0,
      createPR: 0,
      mergePR: 0,
    };
  }

  private async installationToken(): Promise<string> {
    const now = Date.now();
    if (this.tokenCache) {
      const expires = Date.parse(this.tokenCache.access.expiresAt);
      // Refresh 60s before expiry.
      if (Number.isFinite(expires) && expires - now > 60_000) {
        return this.tokenCache.access.token;
      }
    }
    const { access } = await authenticateInstallationReadOnly(this.creds, this.fetchImpl);
    this.tokenCache = { access, fetchedAtMs: now };
    return access.token;
  }

  async listInstallationRepos(
    _pilotId: string,
    installationId: string,
  ): Promise<InstallationRepo[]> {
    if (installationId !== this.creds.installationId) {
      throw new StudioError("ACCESS_DENIED", "Installation ID hors mandat REAL READ", {
        httpStatus: 403,
      });
    }
    const token = await this.installationToken();
    const repos = await listInstallationRepositories(token, this.fetchImpl);
    const allowed = repos.filter(
      (r) => r.fullName.toLowerCase() === this.creds.allowedFullName.toLowerCase(),
    );
    if (allowed.length === 0) {
      throw new StudioError(
        "ACCESS_DENIED",
        `Dépôt ${this.creds.allowedFullName} non inclus dans l'installation`,
        { httpStatus: 403 },
      );
    }
    return allowed.map((r) => {
      const { owner, name } = parseFullName(r.fullName);
      return {
        id: String(r.id),
        owner,
        name,
        fullName: r.fullName,
        defaultBranch: r.defaultBranch,
      };
    });
  }

  async getRefSha(pilotId: string, fullName: string, ref: string): Promise<string> {
    void pilotId;
    assertAllowedRepo(this.creds, fullName);
    const token = await this.installationToken();
    return fetchRefSha(token, fullName, ref, this.fetchImpl);
  }

  async getFileContent(
    pilotId: string,
    fullName: string,
    path: string,
    ref: string,
  ): Promise<FileContentResult> {
    void pilotId;
    assertAllowedRepo(this.creds, fullName);
    const token = await this.installationToken();
    const file = await fetchFileContentUtf8(token, fullName, path, ref, this.fetchImpl);
    return {
      path: file.path,
      ref: file.ref,
      sha: file.sha,
      content: file.content,
      encoding: "utf-8",
    };
  }

  async listRefs(pilotId: string, fullName: string, refPrefix?: string): Promise<RefInfo[]> {
    void pilotId;
    assertAllowedRepo(this.creds, fullName);
    const token = await this.installationToken();
    return fetchMatchingRefs(token, fullName, refPrefix, this.fetchImpl);
  }

  async createBranch(
    pilotId: string,
    fullName: string,
    branch: string,
    fromSha: string,
  ): Promise<{ ref: string; sha: string }> {
    this.mutationAttempts.createBranch += 1;
    if (!isBoundedRealMutationAllowed()) return mutationBlocked("createBranch");
    assertAllowedRepo(this.creds, fullName);
    assertMutableBranch(branch, "createBranch");
    const token = await this.userAccessToken(pilotId);
    return createGitRef({
      token,
      fullName,
      branch,
      fromSha,
      fetchImpl: this.fetchImpl,
    });
  }

  async putFileContents(input: {
    pilotId: string;
    fullName: string;
    path: string;
    branch: string;
    message: string;
    content: string;
    expectedHeadSha?: string;
  }): Promise<{ commitSha: string; headSha: string }> {
    this.mutationAttempts.putFileContents += 1;
    if (!isBoundedRealMutationAllowed()) return mutationBlocked("putFileContents");
    assertAllowedRepo(this.creds, input.fullName);
    assertMutableBranch(input.branch, "putFileContents");
    const policy = classifyPublicationPath(input.path);
    if (!policy.allowed || !policy.normalizedPath) {
      throw new StudioError("ACCESS_DENIED", `Chemin refusé: ${policy.reason}`, {
        httpStatus: 403,
        exposeMessage: true,
      });
    }
    const token = await this.userAccessToken(input.pilotId);
    if (input.expectedHeadSha) {
      const headNow = await fetchRefSha(
        token,
        input.fullName,
        input.branch,
        this.fetchImpl,
      );
      if (headNow !== input.expectedHeadSha) {
        throw new StudioError("CONFLICT", "HEAD de branche périmé avant put contents", {
          httpStatus: 409,
        });
      }
    }
    const put = await createFileContents({
      token,
      fullName: input.fullName,
      path: policy.normalizedPath,
      branch: input.branch,
      message: input.message,
      contentUtf8: input.content,
      fetchImpl: this.fetchImpl,
    });
    return { commitSha: put.commitSha, headSha: put.commitSha };
  }

  async createPullRequest(input: {
    pilotId: string;
    fullName: string;
    title: string;
    head: string;
    base: string;
    body?: string;
    publicationMarker?: string;
  }): Promise<PullRequestInfo> {
    this.mutationAttempts.createPR += 1;
    if (!isBoundedRealMutationAllowed()) return mutationBlocked("createPullRequest");
    assertAllowedRepo(this.creds, input.fullName);
    assertMutableBranch(input.head, "createPullRequest.head");
    const token = await this.userAccessToken(input.pilotId);
    const marker = input.publicationMarker;
    const body =
      input.body ??
      (marker
        ? `Publication documentaire ML4 — merge mandat distinct requis\nsfia-publication:${marker}`
        : "Publication documentaire ML4 — merge mandat distinct requis");
    const pr = await createPullRequestRemote({
      token,
      fullName: input.fullName,
      title: input.title,
      head: input.head,
      base: input.base,
      body,
      fetchImpl: this.fetchImpl,
    });
    return {
      number: pr.number,
      title: pr.title,
      state: pr.state,
      headSha: pr.headSha,
      baseSha: pr.baseSha,
      headRef: pr.headRef,
      baseRef: pr.baseRef,
      htmlUrl: pr.htmlUrl,
    };
  }

  async findPullRequest(input: {
    pilotId: string;
    fullName: string;
    head: string;
    base: string;
    publicationMarker?: string;
    expectedHeadSha?: string;
  }): Promise<{ matches: PullRequestInfo[]; ambiguous: boolean }> {
    assertAllowedRepo(this.creds, input.fullName);
    const token = await this.userAccessToken(input.pilotId);
    const listed = await listPullRequestsRemote({
      token,
      fullName: input.fullName,
      head: input.head,
      base: input.base,
      state: "open",
      fetchImpl: this.fetchImpl,
    });
    let matches = listed.map((p) => ({
      number: p.number,
      title: p.title,
      state: p.state,
      headSha: p.headSha,
      baseSha: p.baseSha,
      headRef: p.headRef,
      baseRef: p.baseRef,
      htmlUrl: p.htmlUrl,
    }));
    if (input.publicationMarker) {
      const marker = input.publicationMarker;
      matches = listed
        .filter((p) => prBodyHasPublicationMarker(p.body, marker))
        .map((p) => ({
          number: p.number,
          title: p.title,
          state: p.state,
          headSha: p.headSha,
          baseSha: p.baseSha,
          headRef: p.headRef,
          baseRef: p.baseRef,
          htmlUrl: p.htmlUrl,
        }));
    }
    if (input.expectedHeadSha) {
      matches = matches.filter((m) => m.headSha === input.expectedHeadSha);
    }
    return { matches, ambiguous: matches.length > 1 };
  }

  async mergePullRequest(_input: {
    pilotId: string;
    fullName: string;
    prNumber: number;
    expectedHeadSha: string;
    expectedBaseSha?: string | null;
  }): Promise<{ merged: boolean; sha: string }> {
    this.mutationAttempts.mergePR += 1;
    return mutationBlocked("mergePullRequest");
  }

  async getPullRequest(
    pilotId: string,
    fullName: string,
    prNumber: number,
  ): Promise<PullRequestInfo> {
    assertAllowedRepo(this.creds, fullName);
    const token = await this.userAccessToken(pilotId);
    const pr = await fetchPullRequestRemote({
      token,
      fullName,
      prNumber,
      fetchImpl: this.fetchImpl,
    });
    return {
      number: pr.number,
      title: pr.title,
      state: pr.merged ? "merged" : pr.state,
      headSha: pr.headSha,
      baseSha: pr.baseSha,
      headRef: pr.headRef,
      baseRef: pr.baseRef,
      htmlUrl: pr.htmlUrl,
    };
  }

  /** Qualification helper: repo metadata + default branch HEAD (no secrets). */
  async observeAllowedRepository(): Promise<{
    repositoryId: number;
    fullName: string;
    defaultBranch: string;
    headSha: string;
    private: boolean;
    installationRepos: string[];
    tokenPermissions: Record<string, string>;
    tokenExpiresAt: string;
  }> {
    const { access } = await authenticateInstallationReadOnly(this.creds, this.fetchImpl);
    this.tokenCache = { access, fetchedAtMs: Date.now() };
    const listed = await listInstallationRepositories(access.token, this.fetchImpl);
    const names = listed.map((r) => r.fullName);
    if (!names.some((n) => n.toLowerCase() === this.creds.allowedFullName.toLowerCase())) {
      throw new StudioError(
        "ACCESS_DENIED",
        `Dépôt ${this.creds.allowedFullName} absent de l'installation`,
        { httpStatus: 403 },
      );
    }
    const meta = await fetchRepositoryMetadata(
      access.token,
      this.creds.allowedFullName,
      this.fetchImpl,
    );
    const headSha = await fetchRefSha(
      access.token,
      this.creds.allowedFullName,
      meta.defaultBranch,
      this.fetchImpl,
    );
    return {
      repositoryId: meta.id,
      fullName: meta.fullName,
      defaultBranch: meta.defaultBranch,
      headSha,
      private: meta.private,
      installationRepos: names,
      tokenPermissions: access.permissions,
      tokenExpiresAt: access.expiresAt,
    };
  }
}

export function createRealGitHubReadProviderFromEnv(
  fetchImpl: GitHubFetch = fetch,
): RealGitHubReadProvider {
  const creds = loadGitHubAppCredentialsFromEnv();
  return new RealGitHubReadProvider(creds, fetchImpl);
}
