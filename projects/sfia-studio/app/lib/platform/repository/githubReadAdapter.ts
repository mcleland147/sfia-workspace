/**
 * GitHub read adapter — transport-agnostic interface.
 * Default transport: encapsulated `gh` CLI (read-only). Optional REST via token.
 * CR-GCEC-18: CLI calls go through shared `runGhFixedArgv`.
 */
import { execFileSync } from "node:child_process";
import { decideGithubRepo } from "../security/pathPolicy";
import { digestText, redactSecrets, truncateText } from "../security/redaction";
import {
  CT_GITHUB_REPO_ALLOWLIST,
  CT_MAX_TOOL_RESULT_CHARS,
  CT_TOOL_TIMEOUT_MS,
  type ToolTransport,
} from "../tools/types";
import { runGhFixedArgv } from "./ghCliTransport";

export interface GithubRepositoryView {
  fullName: string;
  defaultBranch: string;
  description: string | null;
  url: string;
}

export interface GithubBranchView {
  name: string;
  sha: string;
}

export interface GithubCommitView {
  sha: string;
  message: string;
  author: string | null;
}

export interface GithubPullRequestView {
  number: number;
  title: string;
  state: string;
  headRef: string;
  baseRef: string;
  url: string;
}

export interface GithubCheckView {
  name: string;
  conclusion: string | null;
  status: string;
}

export interface GithubCommentView {
  id: number;
  user: string;
  bodyDigest: string;
}

export interface GithubFileAtRefView {
  path: string;
  ref: string;
  content: string;
}

export interface GithubCompareRefsView {
  base: string;
  head: string;
  aheadBy: number;
  behindBy: number;
  files: string[];
}

export interface GithubReadPort {
  readonly transport: ToolTransport;
  getRepository(owner: string, name: string): Promise<GithubRepositoryView>;
  getBranch(owner: string, name: string, branch: string): Promise<GithubBranchView>;
  getCommit(owner: string, name: string, sha: string): Promise<GithubCommitView>;
  getPullRequest(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubPullRequestView>;
  listPullRequestComments(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubCommentView[]>;
  listChecks(
    owner: string,
    name: string,
    ref: string,
  ): Promise<GithubCheckView[]>;
  /** Optional — Nora repository context (read-only). */
  listPullRequests?(
    owner: string,
    name: string,
    options?: { limit?: number; state?: "open" | "closed" | "all" },
  ): Promise<GithubPullRequestView[]>;
  listPullRequestFiles?(
    owner: string,
    name: string,
    number: number,
  ): Promise<string[]>;
  getPullRequestDiff?(
    owner: string,
    name: string,
    number: number,
  ): Promise<string>;
  /** Read file blob at ref (branch/tag/sha). Read-only. */
  readFileAtRef?(
    owner: string,
    name: string,
    path: string,
    ref: string,
  ): Promise<GithubFileAtRefView | null>;
  /** Compare two refs. Read-only. */
  compareRefs?(
    owner: string,
    name: string,
    base: string,
    head: string,
  ): Promise<GithubCompareRefsView>;
}

function assertRepo(owner: string, name: string): void {
  const d = decideGithubRepo(owner, name);
  if (!d.allowed) {
    throw Object.assign(new Error(d.reason ?? "repo denied"), {
      toolErrorCode: d.errorCode ?? "REPOSITORY_NOT_ALLOWED",
    });
  }
}

async function ghJson(args: string[]): Promise<unknown> {
  const result = await runGhFixedArgv("gh", args, {
    timeoutMs: CT_TOOL_TIMEOUT_MS,
    maxStdoutBytes: 2 * 1024 * 1024,
  });
  if (result.exitCode !== 0) {
    throw Object.assign(
      new Error(result.stderr.trim() || `gh exit ${result.exitCode}`),
      { toolErrorCode: "TRANSPORT_UNAVAILABLE" },
    );
  }
  return JSON.parse(result.stdout);
}

async function ghText(args: string[]): Promise<string> {
  const result = await runGhFixedArgv("gh", args, {
    timeoutMs: CT_TOOL_TIMEOUT_MS,
    maxStdoutBytes: 2 * 1024 * 1024,
  });
  if (result.exitCode !== 0) {
    throw Object.assign(
      new Error(result.stderr.trim() || `gh exit ${result.exitCode}`),
      { toolErrorCode: "TRANSPORT_UNAVAILABLE" },
    );
  }
  return result.stdout;
}

export function probeGhAuth(): {
  available: boolean;
  authenticated: boolean;
  reason?: string;
} {
  try {
    execFileSync("gh", ["--version"], {
      encoding: "utf8",
      timeout: 5000,
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch {
    return {
      available: false,
      authenticated: false,
      reason: "gh CLI introuvable",
    };
  }
  try {
    const status = execFileSync("gh", ["auth", "status"], {
      encoding: "utf8",
      timeout: 8000,
      stdio: ["ignore", "pipe", "pipe"],
    });
    // Never return token material — only presence of Logged in
    const ok = /Logged in to github\.com/i.test(status);
    return {
      available: true,
      authenticated: ok,
      reason: ok ? undefined : "gh non authentifié",
    };
  } catch {
    return {
      available: true,
      authenticated: false,
      reason: "gh auth status échec",
    };
  }
}

export class GhCliGithubReadAdapter implements GithubReadPort {
  readonly transport: ToolTransport = "gh_cli";

  async getRepository(owner: string, name: string): Promise<GithubRepositoryView> {
    assertRepo(owner, name);
    const data = (await ghJson([
      "api",
      `repos/${owner}/${name}`,
      "--jq",
      "{full_name,default_branch,description,html_url}",
    ])) as Record<string, string | null>;
    return {
      fullName: String(data.full_name),
      defaultBranch: String(data.default_branch ?? "main"),
      description: data.description ? redactSecrets(String(data.description)) : null,
      url: String(data.html_url ?? ""),
    };
  }

  async getBranch(
    owner: string,
    name: string,
    branch: string,
  ): Promise<GithubBranchView> {
    assertRepo(owner, name);
    const data = (await ghJson([
      "api",
      `repos/${owner}/${name}/branches/${encodeURIComponent(branch)}`,
      "--jq",
      "{name,commit:{sha:.commit.sha}}",
    ])) as { name: string; commit: { sha: string } };
    return { name: data.name, sha: data.commit.sha };
  }

  async getCommit(
    owner: string,
    name: string,
    sha: string,
  ): Promise<GithubCommitView> {
    assertRepo(owner, name);
    const data = (await ghJson([
      "api",
      `repos/${owner}/${name}/commits/${encodeURIComponent(sha)}`,
      "--jq",
      "{sha,commit:{message:.commit.message,author:.commit.author.name}}",
    ])) as {
      sha: string;
      commit: { message: string; author: string | null };
    };
    return {
      sha: data.sha,
      message: redactSecrets(data.commit.message).slice(0, 500),
      author: data.commit.author,
    };
  }

  async getPullRequest(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubPullRequestView> {
    assertRepo(owner, name);
    const data = (await ghJson([
      "api",
      `repos/${owner}/${name}/pulls/${number}`,
      "--jq",
      "{number,title,state,html_url,head:{ref:.head.ref},base:{ref:.base.ref}}",
    ])) as {
      number: number;
      title: string;
      state: string;
      html_url: string;
      head: { ref: string };
      base: { ref: string };
    };
    return {
      number: data.number,
      title: redactSecrets(data.title),
      state: data.state,
      headRef: data.head.ref,
      baseRef: data.base.ref,
      url: data.html_url,
    };
  }

  async listPullRequestComments(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubCommentView[]> {
    assertRepo(owner, name);
    const data = (await ghJson([
      "api",
      `repos/${owner}/${name}/pulls/${number}/comments?per_page=10`,
      "--jq",
      "[.[] | {id,user:.user.login,body}]",
    ])) as Array<{ id: number; user: string; body: string }>;
    return data.map((c) => ({
      id: c.id,
      user: c.user,
      bodyDigest: digestText(redactSecrets(c.body ?? "")),
    }));
  }

  async listChecks(
    owner: string,
    name: string,
    ref: string,
  ): Promise<GithubCheckView[]> {
    assertRepo(owner, name);
    const data = (await ghJson([
      "api",
      `repos/${owner}/${name}/commits/${encodeURIComponent(ref)}/check-runs?per_page=20`,
      "--jq",
      "[.check_runs[] | {name,status,conclusion}]",
    ])) as Array<{
      name: string;
      status: string;
      conclusion: string | null;
    }>;
    return data.map((c) => ({
      name: c.name,
      status: c.status,
      conclusion: c.conclusion,
    }));
  }

  async listPullRequests(
    owner: string,
    name: string,
    options?: { limit?: number; state?: "open" | "closed" | "all" },
  ): Promise<GithubPullRequestView[]> {
    assertRepo(owner, name);
    const limit = Math.min(Math.max(options?.limit ?? 5, 1), 20);
    const state = options?.state ?? "open";
    const data = (await ghJson([
      "pr",
      "list",
      "--repo",
      `${owner}/${name}`,
      "--limit",
      String(limit),
      "--state",
      state,
      "--json",
      "number,title,state,headRefName,baseRefName,url",
    ])) as Array<{
      number: number;
      title: string;
      state: string;
      headRefName: string;
      baseRefName: string;
      url: string;
    }>;
    return data.map((p) => ({
      number: p.number,
      title: redactSecrets(p.title),
      state: p.state,
      headRef: p.headRefName,
      baseRef: p.baseRefName,
      url: p.url,
    }));
  }

  async listPullRequestFiles(
    owner: string,
    name: string,
    number: number,
  ): Promise<string[]> {
    assertRepo(owner, name);
    const data = (await ghJson([
      "pr",
      "view",
      String(number),
      "--repo",
      `${owner}/${name}`,
      "--json",
      "files",
    ])) as { files?: Array<{ path: string }> };
    return (data.files ?? []).map((f) => f.path);
  }

  async getPullRequestDiff(
    owner: string,
    name: string,
    number: number,
  ): Promise<string> {
    assertRepo(owner, name);
    const out = await ghText([
      "pr",
      "diff",
      String(number),
      "--repo",
      `${owner}/${name}`,
    ]);
    return truncateText(redactSecrets(out), CT_MAX_TOOL_RESULT_CHARS).text;
  }

  async readFileAtRef(
    owner: string,
    name: string,
    path: string,
    ref: string,
  ): Promise<GithubFileAtRefView | null> {
    assertRepo(owner, name);
    const result = await runGhFixedArgv(
      "gh",
      [
        "api",
        `repos/${owner}/${name}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(ref)}`,
        "--jq",
        ".content",
      ],
      { timeoutMs: CT_TOOL_TIMEOUT_MS, maxStdoutBytes: 2 * 1024 * 1024 },
    );
    if (result.exitCode !== 0 || !result.stdout.trim()) return null;
    try {
      const b64 = result.stdout.trim().replace(/\s+/g, "");
      const content = Buffer.from(b64, "base64").toString("utf8");
      return {
        path,
        ref,
        content: truncateText(redactSecrets(content), CT_MAX_TOOL_RESULT_CHARS)
          .text,
      };
    } catch {
      return null;
    }
  }

  async compareRefs(
    owner: string,
    name: string,
    base: string,
    head: string,
  ): Promise<GithubCompareRefsView> {
    assertRepo(owner, name);
    const data = (await ghJson([
      "api",
      `repos/${owner}/${name}/compare/${encodeURIComponent(base)}...${encodeURIComponent(head)}`,
    ])) as {
      ahead_by?: number;
      behind_by?: number;
      files?: Array<{ filename: string }>;
    };
    return {
      base,
      head,
      aheadBy: data.ahead_by ?? 0,
      behindBy: data.behind_by ?? 0,
      files: (data.files ?? []).map((f) => f.filename),
    };
  }
}

/** REST transport — only when GITHUB_TOKEN explicitly set (never echoed). */
export class RestGithubReadAdapter implements GithubReadPort {
  readonly transport: ToolTransport = "github_rest";
  private readonly token: string;

  constructor(token: string) {
    this.token = token;
  }

  private async api(pathname: string): Promise<unknown> {
    const res = await fetch(`https://api.github.com${pathname}`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${this.token}`,
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "sfia-studio-control-tower",
      },
      signal: AbortSignal.timeout(CT_TOOL_TIMEOUT_MS),
    });
    if (!res.ok) {
      throw Object.assign(
        new Error(`GitHub REST ${res.status}`),
        { toolErrorCode: "TRANSPORT_UNAVAILABLE" },
      );
    }
    return res.json();
  }

  async getRepository(owner: string, name: string): Promise<GithubRepositoryView> {
    assertRepo(owner, name);
    const data = (await this.api(`/repos/${owner}/${name}`)) as Record<
      string,
      string | null
    >;
    return {
      fullName: String(data.full_name),
      defaultBranch: String(data.default_branch ?? "main"),
      description: data.description
        ? redactSecrets(String(data.description))
        : null,
      url: String(data.html_url ?? ""),
    };
  }

  async getBranch(
    owner: string,
    name: string,
    branch: string,
  ): Promise<GithubBranchView> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/branches/${encodeURIComponent(branch)}`,
    )) as { name: string; commit: { sha: string } };
    return { name: data.name, sha: data.commit.sha };
  }

  async getCommit(
    owner: string,
    name: string,
    sha: string,
  ): Promise<GithubCommitView> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/commits/${encodeURIComponent(sha)}`,
    )) as {
      sha: string;
      commit: { message: string; author: { name?: string } | null };
    };
    return {
      sha: data.sha,
      message: redactSecrets(data.commit.message).slice(0, 500),
      author: data.commit.author?.name ?? null,
    };
  }

  async getPullRequest(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubPullRequestView> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/pulls/${number}`,
    )) as {
      number: number;
      title: string;
      state: string;
      html_url: string;
      head: { ref: string };
      base: { ref: string };
    };
    return {
      number: data.number,
      title: redactSecrets(data.title),
      state: data.state,
      headRef: data.head.ref,
      baseRef: data.base.ref,
      url: data.html_url,
    };
  }

  async listPullRequestComments(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubCommentView[]> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/pulls/${number}/comments?per_page=10`,
    )) as Array<{ id: number; user: { login: string }; body: string }>;
    return data.map((c) => ({
      id: c.id,
      user: c.user.login,
      bodyDigest: digestText(redactSecrets(c.body ?? "")),
    }));
  }

  async listChecks(
    owner: string,
    name: string,
    ref: string,
  ): Promise<GithubCheckView[]> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/commits/${encodeURIComponent(ref)}/check-runs?per_page=20`,
    )) as {
      check_runs: Array<{
        name: string;
        status: string;
        conclusion: string | null;
      }>;
    };
    return (data.check_runs ?? []).map((c) => ({
      name: c.name,
      status: c.status,
      conclusion: c.conclusion,
    }));
  }

  async readFileAtRef(
    owner: string,
    name: string,
    path: string,
    ref: string,
  ): Promise<GithubFileAtRefView | null> {
    assertRepo(owner, name);
    try {
      const data = (await this.api(
        `/repos/${owner}/${name}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(ref)}`,
      )) as { content?: string; encoding?: string };
      if (!data.content || data.encoding !== "base64") return null;
      const content = Buffer.from(data.content.replace(/\s+/g, ""), "base64").toString(
        "utf8",
      );
      return {
        path,
        ref,
        content: truncateText(redactSecrets(content), CT_MAX_TOOL_RESULT_CHARS)
          .text,
      };
    } catch {
      return null;
    }
  }

  async compareRefs(
    owner: string,
    name: string,
    base: string,
    head: string,
  ): Promise<GithubCompareRefsView> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/compare/${encodeURIComponent(base)}...${encodeURIComponent(head)}`,
    )) as {
      ahead_by?: number;
      behind_by?: number;
      files?: Array<{ filename: string }>;
    };
    return {
      base,
      head,
      aheadBy: data.ahead_by ?? 0,
      behindBy: data.behind_by ?? 0,
      files: (data.files ?? []).map((f) => f.filename),
    };
  }
}

export type GithubTransportChoice =
  | { kind: "gh_cli"; adapter: GithubReadPort }
  | { kind: "github_rest"; adapter: GithubReadPort }
  | { kind: "unavailable"; reason: string };

/**
 * Resolve transport without silent fallback.
 * Prefer gh when authenticated; else REST if GITHUB_TOKEN set; else unavailable.
 */
export function resolveGithubReadTransport(): GithubTransportChoice {
  const forceRest = process.env.SFIA_GITHUB_TRANSPORT === "rest";
  const token = process.env.GITHUB_TOKEN?.trim() || process.env.GH_TOKEN?.trim();

  if (forceRest) {
    if (!token) {
      return {
        kind: "unavailable",
        reason: "SFIA_GITHUB_TRANSPORT=rest mais GITHUB_TOKEN absent",
      };
    }
    return { kind: "github_rest", adapter: new RestGithubReadAdapter(token) };
  }

  const gh = probeGhAuth();
  if (gh.available && gh.authenticated) {
    return { kind: "gh_cli", adapter: new GhCliGithubReadAdapter() };
  }

  if (token) {
    return { kind: "github_rest", adapter: new RestGithubReadAdapter(token) };
  }

  return {
    kind: "unavailable",
    reason: gh.reason ?? "GitHub transport indisponible",
  };
}

export function defaultGithubOwnerRepo(): { owner: string; name: string } {
  const [owner, name] = CT_GITHUB_REPO_ALLOWLIST[0].split("/");
  return { owner, name };
}

export function summarizeGithubPayload(data: unknown): string {
  const json = redactSecrets(JSON.stringify(data));
  return truncateText(json, CT_MAX_TOOL_RESULT_CHARS).text;
}
