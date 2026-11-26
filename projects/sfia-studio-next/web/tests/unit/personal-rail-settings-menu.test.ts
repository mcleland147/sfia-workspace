import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("Personal rail settings menu (Figma 13.02)", () => {
  it("exposes gear popover with integrations and consumption destinations", () => {
    const css = readFileSync(
      resolve(process.cwd(), "src/components/shell/studio-shell.css"),
      "utf8",
    );
    expect(css).toContain("studio-rail-settings-popover");
    expect(css).toContain("studio-rail-settings-trigger");
  });

  it("shell no longer lists redundant nav-integrations in personal Accès rail", () => {
    const shell = readFileSync(
      resolve(process.cwd(), "src/components/shell/StudioShell.tsx"),
      "utf8",
    );
    expect(shell).toContain("PersonalRailSettingsMenu");
    expect(shell).not.toContain('data-testid="nav-integrations"');
    expect(shell).not.toMatch(/personalSpace \? \([\s\S]*studio-rail-section mb-1">Accès/);
  });
});