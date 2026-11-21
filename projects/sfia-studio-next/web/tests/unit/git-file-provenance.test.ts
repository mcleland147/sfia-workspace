import { beforeEach, describe, expect, it } from "vitest";
import {
  getScriptedGitHubProvider,
  resetScriptedStore,
} from "@/domains/integrations/scripted-github-provider";

describe("SCRIPTED Git provenance blob vs commit (ML4-REC-07)", () => {
  beforeEach(() => {
    resetScriptedStore();
  });

  it("getFileContent returns blob sha distinct from commit/ref sha", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-prov";
    const fullName = "acme/docs-projet";
    const commitSha = await provider.getRefSha(pilotId, fullName, "main");
    const file = await provider.getFileContent(pilotId, fullName, "README.md", commitSha);
    expect(file.sha).toMatch(/^[0-9a-f]{40}$/i);
    expect(file.sha.toLowerCase()).not.toBe(commitSha.toLowerCase());
  });

  it("listRefs includes main and candidate branches", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-refs";
    const fullName = "acme/docs-projet";
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    await provider.createBranch(pilotId, fullName, "feat/candidate-ml4", mainSha);
    const listed = await provider.listRefs(pilotId, fullName);
    const names = listed.refs.map((r) => r.name);
    expect(names).toContain("main");
    expect(names).toContain("feat/candidate-ml4");
    expect(listed.incompleteCoverage).toBe(false);
    const filtered = await provider.listRefs(pilotId, fullName, "feat/");
    expect(filtered.refs.every((r) => r.name.includes("feat"))).toBe(true);
    expect(filtered.incompleteCoverage).toBe(false);
  });
});
