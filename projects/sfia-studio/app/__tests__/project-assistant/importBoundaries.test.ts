import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const FEATURE_DIR = path.resolve(
  __dirname,
  "../../features/project-assistant",
);

function listTsFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listTsFiles(full));
    else if (/\.(ts|tsx)$/.test(entry.name)) out.push(full);
  }
  return out;
}

describe("project-assistant import boundaries (F1+F2)", () => {
  it("does not import ops1, execution-run, or cursor execution paths", () => {
    const files = listTsFiles(FEATURE_DIR);
    expect(files.length).toBeGreaterThan(0);
    for (const file of files) {
      const source = readFileSync(file, "utf8");
      expect(source).not.toMatch(/@\/lib\/ops1/);
      expect(source).not.toMatch(/@\/features\/ops1/);
      expect(source).not.toMatch(/from ["'].*ops1/);
      expect(source).not.toMatch(/@\/lib\/oa\/execution-run/);
      expect(source).not.toMatch(/from ["'][^"']*execution-run/);
      expect(source).not.toMatch(/from ["']@\/lib\/.*cursor/i);
      expect(source).not.toMatch(
        /(?:import|export)[\s\S]{0,80}\b(?:StartExecution|ExecutionRun)\b/,
      );
      expect(source).not.toMatch(/selectedAgentRef\s*:\s*["'`]/);
    }
  });
});
