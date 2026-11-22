import { describe, expect, it, afterEach } from "vitest";
import {
  buildCognitivePolicy,
  TEST_BOUNDARY_BUDGETS,
} from "@/domains/conversation/cognitive-policy";
import { buildNoraGitReadTools } from "@/domains/conversation/git-read-tools";
import {
  getScriptedGitHubProvider,
  resetScriptedMutationCounts,
} from "@/domains/integrations/scripted-github-provider";

describe("E08 Git READ hardening — budget split + commit/compare/status", () => {
  const prevLane = process.env.STUDIO_LANE;
  const prevProfile = process.env.SFIA_COG_PROFILE_TYPE;

  afterEach(() => {
    resetScriptedMutationCounts();
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    if (prevProfile === undefined) delete process.env.SFIA_COG_PROFILE_TYPE;
    else process.env.SFIA_COG_PROFILE_TYPE = prevProfile;
  });

  it("TEST_BOUNDARY analyse keeps tight D4 calls but separate Git call budget ≥12", () => {
    const p = buildCognitivePolicy(
      "Compare le commit publié à main et donne la date",
      "TEST_BOUNDARY",
    );
    expect(p.profile).toBe("analyse");
    expect(p.budgets.maxD4ToolCalls).toBe(TEST_BOUNDARY_BUDGETS.analyse.maxD4ToolCalls);
    expect(p.budgets.maxD4ToolCalls).toBe(4);
    expect(p.budgets.maxGitToolCalls).toBe(12);
    expect(p.budgets.maxGitToolCalls).toBeGreaterThan(p.budgets.maxD4ToolCalls);
  });

  it("allowlist exposes commit / compare / status tools", () => {
    const p = buildCognitivePolicy("Vérifie les checks de la PR #19", "TEST_BOUNDARY");
    expect(p.toolAllowlist).toContain("read_git_commit");
    expect(p.toolAllowlist).toContain("compare_git_refs");
    expect(p.toolAllowlist).toContain("read_git_commit_status");
  });

  it("buildNoraGitReadTools exposes the new READ tools and not merge", async () => {
    const tools = await buildNoraGitReadTools({
      pilotId: "pilot_test",
      projectId: "proj_test",
      operationId: "op_test",
      generationId: "gen_test",
      budget: { remainingChars: 50_000, remainingGitCalls: 12 },
    });
    const names = tools.map((t) => (t as { name?: string }).name);
    expect(names).toContain("read_git_commit");
    expect(names).toContain("compare_git_refs");
    expect(names).toContain("read_git_commit_status");
    expect(names).not.toContain("merge_pull_request");
  });

  it("scripted getCommit / compareRefs / getCommitStatus are read-only", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = `pilot_harden_${Date.now()}`;
    const fullName = "acme/docs-projet";
    resetScriptedMutationCounts(pilotId, fullName);
    const before = provider.getMutationCounts?.(pilotId, fullName);
    const commit = await provider.getCommit(pilotId, fullName, "main");
    expect(commit.authorDate).toMatch(/2026-11-22/);
    expect(commit.sha).toBeTruthy();
    const cmp = await provider.compareRefs(pilotId, fullName, "main", "main");
    expect(cmp.aheadBy).toBe(0);
    const st = await provider.getCommitStatus(pilotId, fullName, commit.sha);
    expect(st.statusCoverage).toBe("COMPLETE");
    expect(st.statusNote).toMatch(/SCRIPTED|mergeability/i);
    const after = provider.getMutationCounts?.(pilotId, fullName);
    expect(after?.mergePR ?? 0).toBe(before?.mergePR ?? 0);
    expect(after?.createPR ?? 0).toBe(before?.createPR ?? 0);
  });
});
