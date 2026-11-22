import { beforeEach, describe, expect, it } from "vitest";
import {
  getScriptedGitHubProvider,
  resetScriptedStore,
  seedScriptedFlatDirectoryForTest,
} from "@/domains/integrations/scripted-github-provider";
import { isStudioError } from "@/lib/http-errors";

describe("SCRIPTED listDirectory", () => {
  beforeEach(() => {
    resetScriptedStore();
  });

  it("lists root children on main (happy path)", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-tree";
    const fullName = "acme/docs-projet";
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    const entries = await provider.listDirectory(pilotId, fullName, "", mainSha);
    const names = entries.map((e) => e.name);
    expect(names).toContain("README.md");
    expect(names).toContain("docs");
    const readme = entries.find((e) => e.name === "README.md");
    expect(readme?.type).toBe("file");
    expect(readme?.size).toBeGreaterThan(0);
    const docsDir = entries.find((e) => e.name === "docs");
    expect(docsDir?.type).toBe("dir");
  });

  it("lists docs/ immediate children", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-tree-docs";
    const fullName = "acme/docs-projet";
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    const entries = await provider.listDirectory(pilotId, fullName, "docs", mainSha);
    expect(entries).toHaveLength(1);
    expect(entries[0]!.name).toBe("spec.md");
    expect(entries[0]!.type).toBe("file");
  });

  it("returns empty array for directory prefix with no files at commit", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-tree-empty";
    const fullName = "acme/docs-projet";
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    const entries = await provider.listDirectory(pilotId, fullName, "empty", mainSha);
    expect(entries).toEqual([]);
  });

  it("refuses file path as directory", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-tree-file";
    const fullName = "acme/docs-projet";
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    try {
      await provider.listDirectory(pilotId, fullName, "README.md", mainSha);
      expect.fail("expected NOT_A_DIRECTORY");
    } catch (e) {
      expect(isStudioError(e)).toBe(true);
      expect((e as { code: string }).code).toBe("INVALID_REQUEST");
      expect((e as Error).message).toMatch(/NOT_A_DIRECTORY/);
    }
  });

  it("P1-03 refuses silent truncation above 200 entries", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-tree-overflow";
    const fullName = "acme/overflow-repo";
    const commit = seedScriptedFlatDirectoryForTest({
      pilotId,
      fullName,
      dir: "bulk",
      count: 201,
    });
    await expect(provider.listDirectory(pilotId, fullName, "bulk", commit)).rejects.toSatisfy(
      (e: unknown) => isStudioError(e) && e.code === "AMBIGUOUS" && /200/.test(e.message),
    );
  });
});