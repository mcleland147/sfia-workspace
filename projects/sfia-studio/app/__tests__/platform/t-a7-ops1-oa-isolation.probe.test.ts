/** @vitest-environment node */
/**
 * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation (E-OPS-03 / P10).
 * Static import-graph probe for OPS1 ↔ OA / D1 / platform.
 * Read-only filesystem scan — no mutations, no network, no DB writes.
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

function collectHits(
  files: string[],
  pattern: RegExp,
): Array<{ file: string; line: string }> {
  const hits: Array<{ file: string; line: string }> = [];
  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    for (const line of text.split("\n")) {
      if (pattern.test(line)) {
        hits.push({
          file: path.relative(APP_ROOT, file),
          line: line.trim(),
        });
      }
    }
  }
  return hits;
}

describe("T-A7 probe — OPS1/OA/D1 import isolation (E-OPS-03 static)", () => {
  it("finds zero static OPS1 → OA imports", () => {
    const hits = collectHits(
      listTsFiles(path.join(APP_ROOT, "lib/ops1")),
      /from\s+["']@\/lib\/oa(?:\/|["'])|require\(["']@\/lib\/oa/,
    );
    expect(hits, hits.map((h) => `${h.file}: ${h.line}`).join("\n")).toEqual(
      [],
    );
  });

  it("finds zero static OA → OPS1 imports", () => {
    const hits = collectHits(
      listTsFiles(path.join(APP_ROOT, "lib/oa")),
      /from\s+["']@\/lib\/ops1(?:\/|["'])|require\(["']@\/lib\/ops1/,
    );
    expect(hits, hits.map((h) => `${h.file}: ${h.line}`).join("\n")).toEqual(
      [],
    );
  });

  it("finds zero static OPS1 → D1 imports", () => {
    const hits = collectHits(
      listTsFiles(path.join(APP_ROOT, "lib/ops1")),
      /from\s+["']@\/lib\/d1(?:\/|["'])|require\(["']@\/lib\/d1/,
    );
    expect(hits, hits.map((h) => `${h.file}: ${h.line}`).join("\n")).toEqual(
      [],
    );
  });

  it("finds zero static D1 → OPS1 imports", () => {
    const hits = collectHits(
      [
        ...listTsFiles(path.join(APP_ROOT, "lib/d1")),
        ...listTsFiles(path.join(APP_ROOT, "features/d1")),
      ],
      /from\s+["']@\/lib\/ops1(?:\/|["'])|require\(["']@\/lib\/ops1/,
    );
    expect(hits, hits.map((h) => `${h.file}: ${h.line}`).join("\n")).toEqual(
      [],
    );
  });

  it("records shared-surface coupling without identity fusion (D1 intake)", () => {
    const resolveProvider = path.join(
      APP_ROOT,
      "lib/d1/intake/resolveProvider.ts",
    );
    expect(fs.existsSync(resolveProvider)).toBe(true);
    const text = fs.readFileSync(resolveProvider, "utf8");
    expect(text).toMatch(/platform/i);
    expect(text).not.toMatch(/from\s+["']@\/lib\/ops1/);
  });
});
