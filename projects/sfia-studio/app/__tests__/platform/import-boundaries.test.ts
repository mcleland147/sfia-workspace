/** @vitest-environment node */
/**
 * Import boundary guards for Shared Technical Platform.
 * Fails closed with an explicit message when forbidden edges appear.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../..");

function listTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      out.push(...listTsFiles(full));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function collectForbiddenImports(
  files: string[],
  forbiddenPattern: RegExp,
): Array<{ file: string; line: string }> {
  const hits: Array<{ file: string; line: string }> = [];
  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    for (const line of text.split("\n")) {
      if (forbiddenPattern.test(line)) {
        hits.push({
          file: path.relative(APP_ROOT, file),
          line: line.trim(),
        });
      }
    }
  }
  return hits;
}

describe("shared platform import boundaries", () => {
  it("forbids lib/d1 from importing lib/ops1", () => {
    const files = [
      ...listTsFiles(path.join(APP_ROOT, "lib/d1")),
      ...listTsFiles(path.join(APP_ROOT, "features/d1")),
    ];
    const hits = collectForbiddenImports(
      files,
      /from\s+["']@\/lib\/ops1(?:\/|["'])|require\(["']@\/lib\/ops1/,
    );
    expect(
      hits,
      hits
        .map((h) => `${h.file}: ${h.line}`)
        .join("\n") || "D1 must not import OPS1",
    ).toEqual([]);
  });

  it("forbids lib/platform from importing lib/ops1 or lib/d1", () => {
    const files = listTsFiles(path.join(APP_ROOT, "lib/platform"));
    const hits = collectForbiddenImports(
      files,
      /from\s+["']@\/lib\/(?:ops1|d1)(?:\/|["'])|require\(["']@\/lib\/(?:ops1|d1)/,
    );
    expect(
      hits,
      hits
        .map((h) => `${h.file}: ${h.line}`)
        .join("\n") || "platform must not import domain modules",
    ).toEqual([]);
  });

  it("marks OPS1 platform wrappers as temporary", () => {
    const wrappers = [
      "lib/ops1/conversation/config.ts",
      "lib/ops1/conversation/openaiProvider.ts",
      "lib/ops1/conversation/fakeProvider.ts",
      "lib/ops1/conversation/provider.ts",
      "lib/ops1/conversation/toolLoop.ts",
      "lib/ops1/tools/types.ts",
      "lib/ops1/tools/redaction.ts",
      "lib/ops1/tools/pathPolicy.ts",
      "lib/ops1/tools/gitLocalReadAdapter.ts",
      "lib/ops1/tools/githubReadAdapter.ts",
      "lib/ops1/tools/toolRouter.ts",
      "lib/ops1/sfia/canonicalPaths.ts",
      "lib/ops1/sfia/sourceLoader.ts",
      "lib/ops1/sfia/contextResolver.ts",
      "lib/ops1/ops1EventSink.ts",
    ];
    for (const rel of wrappers) {
      const text = fs.readFileSync(path.join(APP_ROOT, rel), "utf8");
      expect(
        text.includes("TEMP_OPS1_PLATFORM_WRAPPER"),
        `${rel} missing TEMP_OPS1_PLATFORM_WRAPPER marker`,
      ).toBe(true);
    }
  });
});
