import { describe, expect, it } from "vitest";
import {
  isFullNameAllowed,
  resolveAllowedFullNames,
} from "@/domains/integrations/github-app-config";

describe("multi-repo REAL allowlist", () => {
  it("always includes primary and accepts same-owner extras", () => {
    const names = resolveAllowedFullNames({
      allowedFullName: "mcleland147/chantiers360",
      expectedOwner: "mcleland147",
      envList: "mcleland147/chantiers360, mcleland147/second-sandbox",
    });
    expect(names).toEqual([
      "mcleland147/chantiers360",
      "mcleland147/second-sandbox",
    ]);
    expect(isFullNameAllowed(names, "mcleland147/second-sandbox")).toBe(true);
    expect(isFullNameAllowed(names, "other/repo")).toBe(false);
  });

  it("rejects cross-owner extras — no allow-all", () => {
    expect(() =>
      resolveAllowedFullNames({
        allowedFullName: "mcleland147/chantiers360",
        expectedOwner: "mcleland147",
        envList: "evil/other",
      }),
    ).toThrow(/hors owner/);
  });

  it("dedupes case-insensitively", () => {
    const names = resolveAllowedFullNames({
      allowedFullName: "mcleland147/chantiers360",
      expectedOwner: "mcleland147",
      envList: "Mcleland147/Chantiers360",
    });
    expect(names).toHaveLength(1);
  });
});
