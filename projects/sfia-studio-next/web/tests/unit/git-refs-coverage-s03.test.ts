/**
 * E08-S03 — honest incompleteness for Git refs listing.
 * REAL-shaped via fetch mock; SCRIPTED parity for bound/coverage semantics.
 * Does NOT prove GitHub REAL BOUNDARY.
 */
import { describe, expect, it, vi } from "vitest";
import {
  FETCH_MATCHING_REFS_UI_BOUND,
  fetchMatchingRefs,
} from "@/domains/integrations/github-app-auth";
import { GIT_REFS_UI_BOUND } from "@/domains/integrations/github-provider";
import {
  getScriptedGitHubProvider,
  ScriptedFaultRegistry,
} from "@/domains/integrations/scripted-github-provider";
import { StudioError } from "@/lib/http-errors";

const SHA = (n: number) => n.toString(16).padStart(40, "0");

function matchingRefsBody(names: string[]) {
  return names.map((name) => ({
    ref: `refs/heads/${name}`,
    object: { sha: SHA(name.length + name.charCodeAt(0)) },
  }));
}

function mockFetch(body: unknown, status = 200) {
  return vi.fn(async () =>
    new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    }),
  );
}

describe("E08-S03 fetchMatchingRefs REAL-shaped", () => {
  it("0 matching refs → empty, complete", async () => {
    const fetchImpl = mockFetch([]);
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs).toEqual([]);
    expect(r.matchedCount).toBe(0);
    expect(r.incompleteCoverage).toBe(false);
  });

  it("1 matching ref → complete", async () => {
    const fetchImpl = mockFetch(matchingRefsBody(["main"]));
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs).toHaveLength(1);
    expect(r.refs[0]!.name).toBe("main");
    expect(r.matchedCount).toBe(1);
    expect(r.incompleteCoverage).toBe(false);
  });

  it("39 refs → complete, all returned", async () => {
    const names = Array.from({ length: 39 }, (_, i) => `b${i}`);
    const fetchImpl = mockFetch(matchingRefsBody(names));
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs).toHaveLength(39);
    expect(r.matchedCount).toBe(39);
    expect(r.incompleteCoverage).toBe(false);
  });

  it("40 refs → complete at bound", async () => {
    const names = Array.from({ length: 40 }, (_, i) => `b${i}`);
    const fetchImpl = mockFetch(matchingRefsBody(names));
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs).toHaveLength(FETCH_MATCHING_REFS_UI_BOUND);
    expect(r.matchedCount).toBe(40);
    expect(r.incompleteCoverage).toBe(false);
  });

  it("41 refs → truncated with incompleteCoverage=true", async () => {
    const names = Array.from({ length: 41 }, (_, i) => `b${i}`);
    const fetchImpl = mockFetch(matchingRefsBody(names));
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs).toHaveLength(40);
    expect(r.matchedCount).toBe(41);
    expect(r.incompleteCoverage).toBe(true);
    // Must not claim completeness from truncated list length alone
    expect(r.refs.length === 40 && !r.incompleteCoverage).toBe(false);
  });

  it(">100 refs → incomplete, matchedCount preserved, UI bound applied", async () => {
    const names = Array.from({ length: 120 }, (_, i) => `branch-${i}`);
    const fetchImpl = mockFetch(matchingRefsBody(names));
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs).toHaveLength(40);
    expect(r.matchedCount).toBe(120);
    expect(r.incompleteCoverage).toBe(true);
  });

  it(">40 results sharing a prefix → incompleteCoverage", async () => {
    const names = Array.from({ length: 55 }, (_, i) => `feat/doc-${i}`);
    const fetchImpl = mockFetch(matchingRefsBody(names));
    const r = await fetchMatchingRefs("tok", "acme/docs", "feat/", fetchImpl);
    expect(r.refs).toHaveLength(40);
    expect(r.matchedCount).toBe(55);
    expect(r.incompleteCoverage).toBe(true);
    const firstUrl = String((fetchImpl.mock.calls as unknown as unknown[][])[0]?.[0] ?? "");
    expect(firstUrl).toContain("/repos/acme/docs/git/matching-refs/heads/feat/");
  });

  it("branch beyond first 40 still counted in matchedCount", async () => {
    const names = [
      ...Array.from({ length: 40 }, (_, i) => `aaa-${i}`),
      "zzz/exact-target",
    ];
    const fetchImpl = mockFetch(matchingRefsBody(names));
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs.map((x) => x.name)).not.toContain("zzz/exact-target");
    expect(r.matchedCount).toBe(41);
    expect(r.incompleteCoverage).toBe(true);
  });

  it("exact prefix path embeds owner/repo — no repo swap", async () => {
    const fetchImpl = mockFetch(matchingRefsBody(["main"]));
    await fetchMatchingRefs("tok", "owner-a/repo-a", "heads/main", fetchImpl);
    const url = String((fetchImpl.mock.calls as unknown as unknown[][])[0]?.[0] ?? "");
    expect(url).toContain("/repos/owner-a/repo-a/git/matching-refs/heads/main");
    expect(url).not.toContain("owner-b");
  });

  it("malformed/ambiguous prefix still scoped to heads/ under same repo", async () => {
    const fetchImpl = mockFetch([]);
    await fetchMatchingRefs("tok", "acme/docs", "../evil", fetchImpl);
    const url = String((fetchImpl.mock.calls as unknown as unknown[][])[0]?.[0] ?? "");
    expect(url).toContain("/repos/acme/docs/git/matching-refs/heads/");
    expect(url).toContain("../evil");
  });

  it("provider fault 403 → throws StudioError", async () => {
    const fetchImpl = mockFetch({ message: "Forbidden" }, 403);
    await expect(
      fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl),
    ).rejects.toSatisfy((e: unknown) => e instanceof StudioError);
  });

  it("non-array provider body → AMBIGUOUS", async () => {
    const fetchImpl = mockFetch({ unexpected: true });
    await expect(
      fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl),
    ).rejects.toMatchObject({ code: "AMBIGUOUS" });
  });

  it("invalid sha entries filtered — never invents refs", async () => {
    const fetchImpl = mockFetch([
      { ref: "refs/heads/good", object: { sha: SHA(1) } },
      { ref: "refs/heads/bad", object: { sha: "not-a-sha" } },
      { ref: "", object: { sha: SHA(2) } },
    ]);
    const r = await fetchMatchingRefs("tok", "acme/docs", undefined, fetchImpl);
    expect(r.refs).toHaveLength(1);
    expect(r.refs[0]!.name).toBe("good");
    expect(r.matchedCount).toBe(1);
    expect(r.incompleteCoverage).toBe(false);
  });
});

describe("E08-S03 SCRIPTED listRefs parity", () => {
  const pilotId = "pilot-s03-refs";
  const fullName = "acme/docs-s03";

  async function seedBranches(count: number, prefix = "b") {
    const provider = getScriptedGitHubProvider();
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    for (let i = 0; i < count; i += 1) {
      await provider.createBranch(pilotId, fullName, `${prefix}${i}`, mainSha);
    }
    return provider;
  }

  it("0 extra branches → main only, complete", async () => {
    const provider = getScriptedGitHubProvider();
    const listed = await provider.listRefs(pilotId, `${fullName}-empty`);
    // default scripted repo has main
    expect(listed.refs.length).toBeGreaterThanOrEqual(1);
    expect(listed.incompleteCoverage).toBe(false);
    expect(listed.matchedCount).toBe(listed.refs.length);
  });

  it("39 extra + main may stay ≤40 complete; 41 total → incomplete", async () => {
    const provider = await seedBranches(40, "x"); // + main ≈ 41
    const listed = await provider.listRefs(pilotId, fullName);
    expect(listed.matchedCount).toBeGreaterThan(GIT_REFS_UI_BOUND);
    expect(listed.refs).toHaveLength(GIT_REFS_UI_BOUND);
    expect(listed.incompleteCoverage).toBe(true);
  });

  it("prefix with >40 matches → incompleteCoverage", async () => {
    const provider = getScriptedGitHubProvider();
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    for (let i = 0; i < 50; i += 1) {
      await provider.createBranch(pilotId, fullName, `feat/shared-${i}`, mainSha);
    }
    const listed = await provider.listRefs(pilotId, fullName, "feat/shared");
    expect(listed.matchedCount).toBe(50);
    expect(listed.refs).toHaveLength(40);
    expect(listed.incompleteCoverage).toBe(true);
  });

  it("exact getRefSha still resolves branch outside first page", async () => {
    const provider = getScriptedGitHubProvider();
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    for (let i = 0; i < 45; i += 1) {
      await provider.createBranch(pilotId, fullName, `aaa-${i}`, mainSha);
    }
    await provider.createBranch(pilotId, fullName, "zzz/late", mainSha);
    const listed = await provider.listRefs(pilotId, fullName);
    expect(listed.incompleteCoverage).toBe(true);
    expect(listed.refs.map((r) => r.name)).not.toContain("zzz/late");
    const sha = await provider.getRefSha(pilotId, fullName, "zzz/late");
    expect(sha).toMatch(/^[0-9a-f]{40}$/i);
  });

  it("inexistent branch → getRefSha fails; list empty for unique prefix", async () => {
    const provider = getScriptedGitHubProvider();
    await expect(
      provider.getRefSha(pilotId, fullName, "does-not-exist-ever"),
    ).rejects.toThrow(/REF_NOT_FOUND|NOT_FOUND/i);
    const listed = await provider.listRefs(pilotId, fullName, "does-not-exist-ever");
    expect(listed.refs).toHaveLength(0);
    expect(listed.incompleteCoverage).toBe(false);
  });

  it("provider fault 403 on listRefs", async () => {
    ScriptedFaultRegistry.setFault("403");
    try {
      const provider = getScriptedGitHubProvider();
      await expect(provider.listRefs(pilotId, fullName)).rejects.toThrow(/403|FORBIDDEN/i);
    } finally {
      ScriptedFaultRegistry.setFault("none");
    }
  });
});
