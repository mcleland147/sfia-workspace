/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";
import { PlatformGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter";
import type { GithubReadPort } from "@/lib/platform/repository/githubReadAdapter";

function stubGithub(calls: string[]): GithubReadPort {
  return {
    transport: "github_rest",
    async getRepository(owner, name) {
      calls.push(`${owner}/${name}`);
      return {
        fullName: `${owner}/${name}`,
        defaultBranch: "main",
        description: null,
        url: `https://example.test/${owner}/${name}`,
      };
    },
    async getBranch() {
      return { name: "main", sha: "a".repeat(40) };
    },
    async getCommit() {
      return { sha: "a".repeat(40), message: "m", author: null };
    },
    async getPullRequest() {
      return {
        number: 1,
        title: "t",
        state: "open",
        headRef: "h",
        baseRef: "b",
        url: "https://example.test/pr/1",
      };
    },
    async listPullRequestComments() {
      return [];
    },
    async listChecks() {
      return [];
    },
  };
}

describe("D2D2-03 GIT-C read-only", () => {
  it("discloses transport, allowlist, and aligns path_meta", async () => {
    const git = new FakeGitReadAdapter({
      repositoryAllowlist: ["o/r"],
      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
    });
    expect(git.transport).toBe("fake");
    expect(git.describeCapability().verified).toBe(false);

    const deniedRepo = await git.read({
      correlationId: "g0",
      lane: "git",
      operation: "read",
      owner: "evil",
      repo: "repo",
      kind: "repository",
      timeoutMs: 100,
    });
    expect(deniedRepo.kind).toBe("failure");

    const ok = await git.read({
      correlationId: "g1",
      lane: "git",
      operation: "read",
      owner: "o",
      repo: "r",
      kind: "repository",
      timeoutMs: 100,
    });
    expect(ok.kind).toBe("success");

    const denied = await git.read({
      correlationId: "g2",
      lane: "git",
      operation: "read",
      owner: "o",
      repo: "r",
      kind: "path_meta",
      path: ".env",
      timeoutMs: 100,
    });
    expect(denied.kind).toBe("failure");

    const pathOk = await git.read({
      correlationId: "g3",
      lane: "git",
      operation: "read",
      owner: "o",
      repo: "r",
      kind: "path_meta",
      path: "projects/sfia-studio/README.md",
      timeoutMs: 100,
    });
    expect(pathOk.kind).toBe("success");
  });

  it("platform wrapper enforces allowlist and same path_meta semantics", async () => {
    const calls: string[] = [];
    const platform = new PlatformGitReadAdapter(stubGithub(calls), "rest", {
      repositoryAllowlist: ["o/r"],
      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
      defaultTimeoutMs: 200,
    });
    const denied = await platform.read({
      correlationId: "gp0",
      lane: "git",
      operation: "read",
      owner: "evil-org",
      repo: "evil-repo",
      kind: "repository",
      timeoutMs: 200,
    });
    expect(denied.kind).toBe("failure");
    expect(calls).toEqual([]);

    const pathOk = await platform.read({
      correlationId: "gp1",
      lane: "git",
      operation: "read",
      owner: "o",
      repo: "r",
      kind: "path_meta",
      path: "projects/sfia-studio/app/x.ts",
      timeoutMs: 200,
    });
    expect(pathOk.kind).toBe("success");
    expect(platform.describeCapability().verified).toBe(false);
  });

  it("empty allowlist is fail-closed", async () => {
    const git = new FakeGitReadAdapter({ repositoryAllowlist: [] });
    const r = await git.read({
      correlationId: "g4",
      lane: "git",
      operation: "read",
      owner: "o",
      repo: "r",
      kind: "repository",
      timeoutMs: 50,
    });
    expect(r.kind).toBe("failure");
  });

  it("exposes no write method", () => {
    const git = new FakeGitReadAdapter({ repositoryAllowlist: ["o/r"] });
    expect(Object.getOwnPropertyNames(Object.getPrototypeOf(git))).not.toContain("write");
    expect(Object.getOwnPropertyNames(Object.getPrototypeOf(git))).not.toContain("push");
    expect(Object.getOwnPropertyNames(Object.getPrototypeOf(git))).not.toContain("commit");
  });
});
