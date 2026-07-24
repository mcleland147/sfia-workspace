/**
 * Anti-regression: T-A2 cycle module must not use legacy authorities.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const OA_CYCLE = path.join(APP_ROOT, "lib/oa/cycle");

function listTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      out.push(...listTsFiles(full));
    } else if (/\.tsx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

describe("T-A2 cycle anti-legacy boundaries", () => {
  it("does not import ops1, sfia-context, method, or d1", () => {
    const files = listTsFiles(OA_CYCLE);
    expect(files.length).toBeGreaterThan(0);
    const forbidden =
      /from\s+["']@\/lib\/(?:platform\/)?sfia-context|from\s+["'][^"']*canonicalPaths|from\s+["'][^"']*sourceLoader|from\s+["'][^"']*contextResolver|from\s+["']@\/lib\/ops1|from\s+["']@\/lib\/d1|from\s+["'][^"']*method\//;
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

  it("consumes project and doctrine via public barrels only", () => {
    const files = listTsFiles(OA_CYCLE);
    const hits: string[] = [];
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      for (const line of text.split("\n")) {
        if (
          /from\s+["']@\/lib\/oa\/project\//.test(line) ||
          /from\s+["']@\/lib\/oa\/doctrine\//.test(line)
        ) {
          hits.push(`${path.relative(APP_ROOT, file)}: ${line.trim()}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("does not reference MethodMode / v2.6 fallback / OPS1 cutover as authority", () => {
    const files = listTsFiles(OA_CYCLE);
    const hits: string[] = [];
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      for (const line of text.split("\n")) {
        const trimmed = line.trim();
        if (
          trimmed.startsWith("//") ||
          trimmed.startsWith("*") ||
          trimmed.startsWith("/*")
        ) {
          continue;
        }
        if (
          /MethodMode|SFIA_V2_6|legacyV26Fallback\s*:\s*true|loadCanonicalSource|resolveSfiaCanonicalContext/.test(
            trimmed,
          )
        ) {
          hits.push(`${path.relative(APP_ROOT, file)}: ${trimmed}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("never sets executionAuthority true in CKC infrastructure", () => {
    const files = listTsFiles(path.join(OA_CYCLE, "infrastructure"));
    const hits: string[] = [];
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      if (/executionAuthority\s*:\s*true/.test(text)) {
        hits.push(path.relative(APP_ROOT, file));
      }
    }
    expect(hits).toEqual([]);
  });
});
