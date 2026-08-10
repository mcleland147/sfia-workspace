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

describe("F1 project-assistant import boundaries", () => {
  it("does not import lib/ops1 or features/ops1", () => {
    const files = listTsFiles(FEATURE_DIR);
    expect(files.length).toBeGreaterThan(0);
    for (const file of files) {
      const source = readFileSync(file, "utf8");
      expect(source).not.toMatch(/@\/lib\/ops1/);
      expect(source).not.toMatch(/@\/features\/ops1/);
      expect(source).not.toMatch(/from ["'].*ops1/);
    }
  });
});
