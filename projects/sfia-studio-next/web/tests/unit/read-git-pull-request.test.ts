import { describe, expect, it, afterEach } from "vitest";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
import { buildNoraGitReadTools } from "@/domains/conversation/git-read-tools";
import {
  getScriptedGitHubProvider,
  resetScriptedMutationCounts,
} from "@/domains/integrations/scripted-github-provider";

describe("read_git_pull_request exposure", () => {
  const prevLane = process.env.STUDIO_LANE;
  const prevProfile = process.env.SFIA_COG_PROFILE_TYPE;

  afterEach(() => {
    resetScriptedMutationCounts();
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    if (prevProfile === undefined) delete process.env.SFIA_COG_PROFILE_TYPE;
    else process.env.SFIA_COG_PROFILE_TYPE = prevProfile;
  });

  it("cognitive policy allowlists read_git_pull_request", () => {
    const p = buildCognitivePolicy("Consulte la PR #19 en lecture seule", "TEST_BOUNDARY");
    expect(p.toolAllowlist).toContain("read_git_pull_request");
    expect(p.toolAllowlist).toContain("list_project_git_sources");
  });

  it("buildNoraGitReadTools exposes read_git_pull_request tool name", async () => {
    const tools = await buildNoraGitReadTools({
      pilotId: "pilot_test",
      projectId: "proj_test",
      operationId: "op_test",
      generationId: "gen_test",
      budget: { remainingCalls: 10, remainingChars: 50_000 },
    });
    const names = tools.map((t) => (t as { name?: string }).name);
    expect(names).toContain("read_git_pull_request");
    expect(names).toContain("list_git_refs");
    expect(names).not.toContain("merge_pull_request");
  });

  it("scripted getPullRequest is read-only (no merge counter bump)", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = `pilot_pr_read_${Date.now()}`;
    const fullName = "acme/docs-projet";
    resetScriptedMutationCounts(pilotId, fullName);
    await provider.createBranch(pilotId, fullName, "sfia/pub-pr-read", "a".repeat(40)).catch(() => {
      /* branch may already exist in shared scripted store */
    });
    const created = await provider.createPullRequest({
      pilotId,
      fullName,
      title: "UAT PR read",
      head: "sfia/pub-pr-read",
      base: "main",
      body: "read-only test",
    });
    const before = provider.getMutationCounts?.(pilotId, fullName);
    const pr = await provider.getPullRequest(pilotId, fullName, created.number);
    const after = provider.getMutationCounts?.(pilotId, fullName);
    expect(pr.number).toBe(created.number);
    expect(pr.htmlUrl).toBeTruthy();
    expect(after?.mergePR ?? 0).toBe(before?.mergePR ?? 0);
  });
});
