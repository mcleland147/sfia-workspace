import { describe, expect, it, beforeEach } from "vitest";
import {
  getScriptedGitHubProvider,
  getScriptedMutationCounts,
  resetScriptedStore,
  scriptedPutFile,
} from "@/domains/integrations/scripted-github-provider";

describe("SCRIPTED provider isolation C3 (PilotId + fullName)", () => {
  const pilot = "pilot_iso_c3";
  const repoA = "acme/docs-projet";
  const repoB = "acme/shared-docs";

  beforeEach(() => {
    resetScriptedStore(pilot);
  });

  it("keeps distinct file contents and SHA across repos for the same pilot", async () => {
    const p = getScriptedGitHubProvider();
    const shaA = scriptedPutFile(pilot, repoA, "docs/spec.md", "main", "# A only\n");
    const shaB = scriptedPutFile(pilot, repoB, "docs/spec.md", "main", "# B only\n");
    expect(shaA).not.toBe(shaB);
    const fileA = await p.getFileContent(pilot, repoA, "docs/spec.md", "main");
    const fileB = await p.getFileContent(pilot, repoB, "docs/spec.md", "main");
    expect(fileA.content).toContain("A only");
    expect(fileB.content).toContain("B only");
  });

  it("isolates PR numbers and findPullRequest by repository", async () => {
    const p = getScriptedGitHubProvider();
    await p.createBranch(pilot, repoA, "sfia/a", await p.getRefSha(pilot, repoA, "main"));
    await p.createBranch(pilot, repoB, "sfia/b", await p.getRefSha(pilot, repoB, "main"));
    const prA = await p.createPullRequest({
      pilotId: pilot,
      fullName: repoA,
      title: "A",
      head: "sfia/a",
      base: "main",
      publicationMarker: "corr-a",
    });
    const prB = await p.createPullRequest({
      pilotId: pilot,
      fullName: repoB,
      title: "B",
      head: "sfia/b",
      base: "main",
      publicationMarker: "corr-b",
    });
    expect(prA.number).toBe(1);
    expect(prB.number).toBe(1); // independent numbering per repo
    const foundA = await p.findPullRequest({
      pilotId: pilot,
      fullName: repoA,
      head: "sfia/a",
      base: "main",
      publicationMarker: "corr-a",
    });
    expect(foundA.matches).toHaveLength(1);
    const leak = await p.findPullRequest({
      pilotId: pilot,
      fullName: repoA,
      head: "sfia/b",
      base: "main",
      publicationMarker: "corr-b",
    });
    expect(leak.matches).toHaveLength(0);
  });

  it("mutating main of A does not change main of B", async () => {
    const p = getScriptedGitHubProvider();
    const mainBBefore = await p.getRefSha(pilot, repoB, "main");
    await p.createBranch(pilot, repoA, "feat", await p.getRefSha(pilot, repoA, "main"));
    await p.putFileContents({
      pilotId: pilot,
      fullName: repoA,
      path: "docs/x.md",
      branch: "feat",
      message: "x",
      content: "x",
    });
    const pr = await p.createPullRequest({
      pilotId: pilot,
      fullName: repoA,
      title: "m",
      head: "feat",
      base: "main",
      publicationMarker: "m",
    });
    await p.mergePullRequest({
      pilotId: pilot,
      fullName: repoA,
      prNumber: pr.number,
      expectedHeadSha: pr.headSha,
    });
    const mainBAfter = await p.getRefSha(pilot, repoB, "main");
    expect(mainBAfter).toBe(mainBBefore);
    const countsA = getScriptedMutationCounts(pilot, repoA);
    const countsB = getScriptedMutationCounts(pilot, repoB);
    expect(countsA.mergePR).toBe(1);
    expect(countsB.mergePR).toBe(0);
  });
});
