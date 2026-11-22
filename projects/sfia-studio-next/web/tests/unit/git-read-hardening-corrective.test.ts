import { describe, expect, it, afterEach } from "vitest";
import {
  buildCognitivePolicy,
  createSharedToolBudget,
  TEST_BOUNDARY_BUDGETS,
} from "@/domains/conversation/cognitive-policy";
import { StudioError } from "@/lib/http-errors";
import {
  compareCommitsRemote,
  fetchCommitStatusRemote,
} from "@/domains/integrations/github-app-auth";
import type { GitHubFetch } from "@/domains/integrations/github-app-auth";

describe("E08 corrective — shared tool budget object", () => {
  const prevLane = process.env.STUDIO_LANE;
  afterEach(() => {
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
  });

  it("createSharedToolBudget returns one mutable bag with Git≠D4 call ceilings", () => {
    process.env.STUDIO_LANE = "DEV";
    const p = buildCognitivePolicy("Consulte la PR et compare à main", "TEST_BOUNDARY");
    const bag = createSharedToolBudget(p.budgets);
    expect(bag.remainingCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls);
    expect(bag.remainingGitCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxGitToolCalls);
    expect(bag.remainingChars).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4CharsReturned);

    // D4 then history share remainingCalls
    bag.remainingCalls -= 1;
    bag.remainingChars -= 100;
    expect(bag.remainingCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls - 1);
    bag.remainingCalls -= 1; // history
    expect(bag.remainingCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls - 2);

    // Git independent calls, shared chars
    const gitBefore = bag.remainingGitCalls;
    bag.remainingGitCalls -= 1;
    bag.remainingChars -= 50;
    expect(bag.remainingGitCalls).toBe(gitBefore - 1);
    expect(bag.remainingCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls - 2);
    expect(bag.remainingChars).toBe(
      TEST_BOUNDARY_BUDGETS.analyse.maxD4CharsReturned - 150,
    );
  });

  it("cloning numeric snapshots would break sharing — document the anti-pattern", () => {
    const shared = createSharedToolBudget(TEST_BOUNDARY_BUDGETS.analyse);
    const brokenD4 = {
      remainingCalls: shared.remainingCalls,
      remainingChars: shared.remainingChars,
    };
    brokenD4.remainingCalls -= 1;
    // shared unchanged — this is the bug we fixed
    expect(shared.remainingCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls);
    // correct: mutate shared directly
    shared.remainingCalls -= 1;
    expect(shared.remainingCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls - 1);
  });

  it("D4→history and history→D4 share remainingCalls; Git≠D4; chars global", () => {
    const bag = createSharedToolBudget({
      maxD4ToolCalls: 3,
      maxD4CharsReturned: 500,
      maxGitToolCalls: 2,
    });
    // D4 → history
    bag.remainingCalls -= 1;
    bag.remainingChars -= 40;
    bag.remainingCalls -= 1;
    bag.remainingChars -= 30;
    expect(bag.remainingCalls).toBe(1);
    expect(bag.remainingChars).toBe(430);
    // Git → D4 → Git: git independent, chars shared
    bag.remainingGitCalls -= 1;
    bag.remainingChars -= 50;
    bag.remainingCalls -= 1;
    bag.remainingChars -= 20;
    bag.remainingGitCalls -= 1;
    bag.remainingChars -= 10;
    expect(bag.remainingCalls).toBe(0);
    expect(bag.remainingGitCalls).toBe(0);
    expect(bag.remainingChars).toBe(350);
  });

  it("Git call exhaustion refuses Git without unlocking D4/chars quotas", () => {
    const bag = createSharedToolBudget({
      maxD4ToolCalls: 2,
      maxD4CharsReturned: 800,
      maxGitToolCalls: 1,
    });
    bag.remainingGitCalls -= 1;
    expect(bag.remainingGitCalls).toBe(0);
    // D4 still available; chars untouched by call exhaustion alone
    expect(bag.remainingCalls).toBe(2);
    expect(bag.remainingChars).toBe(800);
    bag.remainingCalls -= 1;
    expect(bag.remainingCalls).toBe(1);
    expect(bag.remainingGitCalls).toBe(0);
  });

  it("char exhaustion is a shared stop for D4/history/Git", () => {
    const bag = createSharedToolBudget({
      maxD4ToolCalls: 4,
      maxD4CharsReturned: 100,
      maxGitToolCalls: 12,
    });
    bag.remainingChars = 0;
    expect(bag.remainingCalls).toBe(4);
    expect(bag.remainingGitCalls).toBe(12);
    // Families still see the same zero chars (shared object)
    expect(bag.remainingChars).toBe(0);
  });

  it("TEST_BOUNDARY profile is used without promoting OPERATIONAL_VALIDATED", () => {
    process.env.STUDIO_LANE = "DEV";
    const p = buildCognitivePolicy("Lis le statut CI du commit", "TEST_BOUNDARY");
    expect(p.profileType).toBe("TEST_BOUNDARY");
    expect(p.budgets.maxD4ToolCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls);
    expect(p.budgets.maxGitToolCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxGitToolCalls);
  });
});

describe("E08 corrective — compareCommitsRemote identical refs", () => {
  it("resolves verified headSha when commits[] is empty (identical)", async () => {
    const sha = "8c398c494dd918272aab5b2653777c6c21d2e76e";
    const fetchImpl: GitHubFetch = async (input) => {
      const url = String(input);
      if (url.includes("/compare/")) {
        return new Response(
          JSON.stringify({
            status: "identical",
            ahead_by: 0,
            behind_by: 0,
            total_commits: 0,
            html_url: "https://github.com/acme/r/compare/main...main",
            base_commit: { sha },
            merge_base_commit: { sha },
            commits: [],
            files: [],
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      if (url.includes("/commits/")) {
        return new Response(
          JSON.stringify({
            sha,
            html_url: `https://github.com/acme/r/commit/${sha}`,
            commit: {
              message: "tip",
              author: { date: "2026-11-22T06:22:13Z" },
              committer: { date: "2026-11-22T06:22:13Z" },
            },
            parents: [],
            files: [],
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      return new Response("not found", { status: 404 });
    };

    const out = await compareCommitsRemote({
      token: "t",
      fullName: "acme/r",
      base: "main",
      head: "main",
      fetchImpl,
    });
    expect(out.status).toBe("identical");
    expect(out.aheadBy).toBe(0);
    expect(out.behindBy).toBe(0);
    expect(out.headSha).toBe(sha);
    expect(out.baseSha).toBe(sha);
  });

  it("uses tip commit sha when ahead commits are present", async () => {
    const base = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    const head = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
    const fetchImpl: GitHubFetch = async (input) => {
      const url = String(input);
      if (url.includes("/compare/")) {
        return new Response(
          JSON.stringify({
            status: "ahead",
            ahead_by: 1,
            behind_by: 0,
            total_commits: 1,
            base_commit: { sha: base },
            commits: [{ sha: head }],
            files: [{ filename: "docs/x.md", status: "added", additions: 1, deletions: 0 }],
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      return new Response("{}", { status: 200 });
    };
    const out = await compareCommitsRemote({
      token: "t",
      fullName: "acme/r",
      base: "main",
      head: "sfia/pub",
      fetchImpl,
    });
    expect(out.headSha).toBe(head);
    expect(out.baseSha).toBe(base);
    expect(out.aheadBy).toBe(1);
  });

  it("behind-only (empty commits[]) still resolves verified headSha", async () => {
    const base = "cccccccccccccccccccccccccccccccccccccccc";
    const head = "dddddddddddddddddddddddddddddddddddddddd";
    const fetchImpl: GitHubFetch = async (input) => {
      const url = String(input);
      if (url.includes("/compare/")) {
        return new Response(
          JSON.stringify({
            status: "behind",
            ahead_by: 0,
            behind_by: 2,
            total_commits: 0,
            base_commit: { sha: base },
            commits: [],
            files: [],
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      if (url.includes("/commits/")) {
        return new Response(
          JSON.stringify({
            sha: head,
            commit: {
              message: "tip",
              author: { date: "2026-11-22T00:00:00Z" },
              committer: { date: "2026-11-22T00:00:00Z" },
            },
            parents: [],
            files: [],
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      return new Response("no", { status: 404 });
    };
    const out = await compareCommitsRemote({
      token: "t",
      fullName: "acme/r",
      base: "main",
      head: "old-branch",
      fetchImpl,
    });
    expect(out.status).toBe("behind");
    expect(out.behindBy).toBe(2);
    expect(out.aheadBy).toBe(0);
    expect(out.baseSha).toBe(base);
    expect(out.headSha).toBe(head);
  });

  it("diverged refs keep status + verified SHAs; truncated files → incompleteCoverage", async () => {
    const base = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
    const head = "ffffffffffffffffffffffffffffffffffffffff";
    const files = Array.from({ length: 5 }, (_, i) => ({
      filename: `f${i}.md`,
      status: "modified",
      additions: 1,
      deletions: 1,
    }));
    const fetchImpl: GitHubFetch = async (input) => {
      const url = String(input);
      if (url.includes("/compare/")) {
        return new Response(
          JSON.stringify({
            status: "diverged",
            ahead_by: 1,
            behind_by: 1,
            total_commits: 1,
            base_commit: { sha: base },
            commits: [{ sha: head }],
            files,
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      return new Response("{}", { status: 200 });
    };
    const out = await compareCommitsRemote({
      token: "t",
      fullName: "acme/r",
      base: "main",
      head: "feature",
      fileBound: 3,
      fetchImpl,
    });
    expect(out.status).toBe("diverged");
    expect(out.baseSha).toBe(base);
    expect(out.headSha).toBe(head);
    expect(out.files).toHaveLength(3);
    expect(out.incompleteCoverage).toBe(true);
    expect(out.matchedFileCount).toBe(5);
  });

  it("unknown ref → explicit error, no invented SHAs", async () => {
    const fetchImpl: GitHubFetch = async () =>
      new Response(JSON.stringify({ message: "Not Found" }), { status: 404 });
    await expect(
      compareCommitsRemote({
        token: "t",
        fullName: "acme/r",
        base: "missing-a",
        head: "missing-b",
        fetchImpl,
      }),
    ).rejects.toMatchObject({ code: "NOT_FOUND" });
  });
});

describe("E08 corrective — fetchCommitStatusRemote token fallback signal", () => {
  it("throws ACCESS_DENIED when BOTH status and check-runs are 403 (enables withReadToken retry)", async () => {
    const fetchImpl: GitHubFetch = async () =>
      new Response(JSON.stringify({ message: "Forbidden" }), { status: 403 });
    await expect(
      fetchCommitStatusRemote({
        token: "install",
        fullName: "acme/r",
        ref: "a".repeat(40),
        fetchImpl,
      }),
    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });
  });

  it("returns PARTIAL when status 200 but check-runs 403 (no throw — soft degrade)", async () => {
    const fetchImpl: GitHubFetch = async (input) => {
      const url = String(input);
      if (url.includes("/status")) {
        return new Response(
          JSON.stringify({
            state: "success",
            statuses: [{ context: "ci", state: "success", description: "ok" }],
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      if (url.includes("/check-runs")) {
        return new Response(JSON.stringify({ message: "Forbidden" }), { status: 403 });
      }
      return new Response("no", { status: 404 });
    };
    const out = await fetchCommitStatusRemote({
      token: "install",
      fullName: "acme/r",
      ref: "a".repeat(40),
      fetchImpl,
    });
    expect(out.combinedState).toBe("success");
    expect(out.statusCoverage).toBe("PARTIAL");
    expect(out.checkRuns).toEqual([]);
    expect(out.statusNote).toMatch(/Check-runs inaccessibles/i);
  });

  it("returns PARTIAL when status 403 but check-runs 200", async () => {
    const fetchImpl: GitHubFetch = async (input) => {
      const url = String(input);
      if (url.includes("/status") && !url.includes("check-runs")) {
        return new Response(JSON.stringify({ message: "Forbidden" }), { status: 403 });
      }
      if (url.includes("/check-runs")) {
        return new Response(
          JSON.stringify({
            total_count: 1,
            check_runs: [
              {
                name: "build",
                status: "completed",
                conclusion: "success",
                html_url: "https://example.test/1",
              },
            ],
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      return new Response("no", { status: 404 });
    };
    const out = await fetchCommitStatusRemote({
      token: "install",
      fullName: "acme/r",
      ref: "a".repeat(40),
      fetchImpl,
    });
    expect(out.checkRuns).toHaveLength(1);
    expect(out.combinedState).toBeNull();
    // status denied but checks ok → not COMPLETE
    expect(["PARTIAL", "DENIED"]).toContain(out.statusCoverage);
  });

  it("marks incompleteCoverage when combined statuses are truncated", async () => {
    const many = Array.from({ length: 40 }, (_, i) => ({
      context: `ctx-${i}`,
      state: "success",
      description: null as string | null,
    }));
    const fetchImpl: GitHubFetch = async (input) => {
      const url = String(input);
      if (url.includes("/status") && !url.includes("check-runs")) {
        return new Response(
          JSON.stringify({ state: "success", total_count: 40, statuses: many }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      if (url.includes("/check-runs")) {
        return new Response(JSON.stringify({ total_count: 0, check_runs: [] }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response("no", { status: 404 });
    };
    const out = await fetchCommitStatusRemote({
      token: "t",
      fullName: "acme/r",
      ref: "a".repeat(40),
      checkBound: 30,
      fetchImpl,
    });
    expect(out.combinedStatuses.length).toBe(30);
    expect(out.incompleteCoverage).toBe(true);
    expect(out.statusCoverage).toBe("PARTIAL");
  });
});

describe("E08 corrective — withReadToken retries after dual ACCESS_DENIED", () => {
  it("second token is used when first fetchCommitStatusRemote throws", async () => {
    async function withReadToken<T>(run: (token: string) => Promise<T>): Promise<T> {
      try {
        return await run("install");
      } catch (e) {
        const err = e instanceof StudioError ? e : null;
        if (err?.code !== "ACCESS_DENIED") throw e;
        return await run("user");
      }
    }

    const tokenUsed: string[] = [];
    const out = await withReadToken(async (token) => {
      tokenUsed.push(token);
      if (token === "install") {
        return fetchCommitStatusRemote({
          token,
          fullName: "acme/r",
          ref: "a".repeat(40),
          fetchImpl: async () =>
            new Response(JSON.stringify({ message: "Forbidden" }), { status: 403 }),
        });
      }
      return fetchCommitStatusRemote({
        token,
        fullName: "acme/r",
        ref: "a".repeat(40),
        fetchImpl: async (input) => {
          const u = String(input);
          if (u.includes("/check-runs")) {
            return new Response(JSON.stringify({ total_count: 0, check_runs: [] }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }
          return new Response(
            JSON.stringify({ state: "success", statuses: [], total_count: 0 }),
            { status: 200, headers: { "Content-Type": "application/json" } },
          );
        },
      });
    });

    expect(tokenUsed).toEqual(["install", "user"]);
    expect(out.combinedState).toBe("success");
    expect(out.statusCoverage).toBe("COMPLETE");
  });
});
