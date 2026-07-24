/**
 * Anti-regression: T-A0 doctrine module must not use legacy doctrine authorities.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const OA_DOCTRINE = path.join(APP_ROOT, "lib/oa/doctrine");

function listTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "fixtures" || entry.name === "node_modules") continue;
      out.push(...listTsFiles(full));
    } else if (/\.tsx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

describe("T-A0 doctrine anti-legacy boundaries", () => {
  it("does not import sfia-context / canonicalPaths / sourceLoader / contextResolver", () => {
    const files = listTsFiles(OA_DOCTRINE);
    expect(files.length).toBeGreaterThan(0);
    const forbidden =
      /from\s+["']@\/lib\/(?:platform\/)?sfia-context|from\s+["'][^"']*canonicalPaths|from\s+["'][^"']*sourceLoader|from\s+["'][^"']*contextResolver|from\s+["']@\/lib\/ops1/;
    const hits: string[] = [];
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      for (const line of text.split("\n")) {
        if (forbidden.test(line)) {
          hits.push(`${path.relative(APP_ROOT, file)}: ${line.trim()}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("does not reference method/** or v2.6 fallback as doctrine source", () => {
    const files = listTsFiles(OA_DOCTRINE);
    const hits: string[] = [];
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      // Allow mentions in comments/docs about forbidding these paths
      for (const line of text.split("\n")) {
        const trimmed = line.trim();
        if (trimmed.startsWith("*") || trimmed.startsWith("//") || trimmed.startsWith("*")) {
          continue;
        }
        if (
          /fallback.*v2\.6|loadCanonicalSource|resolveSfiaCanonicalContext|SFIA_CANONICAL_CORE_PATHS/.test(
            trimmed,
          )
        ) {
          hits.push(`${path.relative(APP_ROOT, file)}: ${trimmed}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("forbids lib/oa from importing lib/ops1", () => {
    const files = listTsFiles(path.join(APP_ROOT, "lib/oa"));
    const hits: string[] = [];
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      for (const line of text.split("\n")) {
        if (/from\s+["']@\/lib\/ops1/.test(line)) {
          hits.push(`${path.relative(APP_ROOT, file)}: ${line.trim()}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });
});
