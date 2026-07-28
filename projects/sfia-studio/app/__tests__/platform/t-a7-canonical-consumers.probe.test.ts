/** @vitest-environment node */
/**
 * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation (E-CP-02 / E-CP-03 / P03).
 * Maps consumers of SFIA_CANONICAL_CORE_PATHS / loadCanonicalSource.
 * Read-only scan — no product fallback authorization.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonicalPaths";

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

describe("T-A7 probe — canonical consumers and closed allowlist", () => {
  it("exposes a stable closed core path list", () => {
    expect(SFIA_CANONICAL_CORE_PATHS.length).toBeGreaterThanOrEqual(4);
    expect(SFIA_CANONICAL_CORE_PATHS).toContain(
      "prompts/templates/sfia-cycle-execution-template.md",
    );
    const methodCores = SFIA_CANONICAL_CORE_PATHS.filter((p) =>
      p.startsWith("method/"),
    );
    expect(methodCores).toEqual([
      "method/sfia-fast-track/core/sfia-cycle-routing-guide.md",
      "method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md",
      "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
    ]);
  });

  it("finds platform + OPS1 wrapper consumers of canonicalPaths/sourceLoader", () => {
    const files = [
      ...listTsFiles(path.join(APP_ROOT, "lib/platform")),
      ...listTsFiles(path.join(APP_ROOT, "lib/ops1")),
    ];
    const consumers = new Set<string>();
    const pattern =
      /SFIA_CANONICAL_CORE_PATHS|loadCanonicalSource|loadCanonicalCoreSources|from\s+["']@\/lib\/platform\/sfia-context/;
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      if (pattern.test(text)) {
        consumers.add(path.relative(APP_ROOT, file));
      }
    }
    expect(consumers.has("lib/platform/sfia-context/canonicalPaths.ts")).toBe(
      true,
    );
    expect(consumers.has("lib/platform/sfia-context/sourceLoader.ts")).toBe(
      true,
    );
    // OPS1 temporary wrappers remain consumers (documented coupling).
    const ops1Wrappers = [...consumers].filter((c) =>
      c.startsWith("lib/ops1/sfia/"),
    );
    expect(ops1Wrappers.length).toBeGreaterThan(0);
  });

  it("does not find OA product modules importing method/ as module path", () => {
    const oaFiles = listTsFiles(path.join(APP_ROOT, "lib/oa"));
    const hits: string[] = [];
    const forbidden =
      /from\s+["'][^"']*method\/|require\(["'][^"']*method\//;
    for (const file of oaFiles) {
      for (const line of fs.readFileSync(file, "utf8").split("\n")) {
        if (forbidden.test(line)) {
          hits.push(`${path.relative(APP_ROOT, file)}: ${line.trim()}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });
});
