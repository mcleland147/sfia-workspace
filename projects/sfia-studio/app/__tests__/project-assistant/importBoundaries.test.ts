import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const FEATURE_DIR = path.resolve(
  __dirname,
  "../../features/project-assistant",
);
const F3_DIR = path.join(FEATURE_DIR, "f3");

function listTsFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listTsFiles(full));
    else if (/\.(ts|tsx)$/.test(entry.name)) out.push(full);
  }
  return out;
}

describe("project-assistant import boundaries (F1+F2+F3)", () => {
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
    }
  });

  it("F3 module forbids shell/child_process/ops1/execution-run/REAL adapters", () => {
    const files = listTsFiles(F3_DIR);
    expect(files.length).toBeGreaterThan(0);
    for (const file of files) {
      const source = readFileSync(file, "utf8");
      expect(source).not.toMatch(/child_process/);
      expect(source).not.toMatch(/node:child_process/);
      expect(source).not.toMatch(/from ["']shelljs["']/);
      expect(source).not.toMatch(/@\/lib\/ops1/);
      expect(source).not.toMatch(/@\/lib\/oa\/execution-run/);
      expect(source).not.toMatch(/NoOpExecutionAdapter/);
      expect(source).not.toMatch(/mode:\s*["']REAL["']/);
      expect(source).not.toMatch(/executionMode:\s*["']adapter_async["']/);
    }
  });

  it("F2 decision DTO keeps executionPerformed false literal", () => {
    const types = readFileSync(path.join(FEATURE_DIR, "f2/types.ts"), "utf8");
    expect(types).toMatch(/executionPerformed:\s*false/);
  });
});
