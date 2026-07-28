/** @vitest-environment node */
/**
 * T-A7 Lot 1 — MethodMode hold test-override must stay test-only.
 * Comments alone are not a control; this static boundary is.
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
      if (
        entry.name === "node_modules" ||
        entry.name === ".next" ||
        entry.name === "__tests__"
      ) {
        continue;
      }
      out.push(...listTsFiles(full));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function rel(file: string): string {
  return path.relative(APP_ROOT, file);
}

describe("T-A7 MethodMode hold test-override boundaries", () => {
  it("does not re-export test helpers or store from lib/d1 barrel", () => {
    const barrel = fs.readFileSync(path.join(APP_ROOT, "lib/d1/index.ts"), "utf8");
    expect(barrel).not.toMatch(/methodModeHold\.test-only/);
    expect(barrel).not.toMatch(/methodModeHold\.store/);
    expect(barrel).not.toMatch(/setMethodModeHoldForTests/);
    expect(barrel).not.toMatch(/resetMethodModeHoldForTests/);
    expect(barrel).not.toMatch(/export \* from ["']\.\/methodModeHold["']/);
  });

  it("forbids runtime product code from importing test-only helpers", () => {
    const productRoots = [
      path.join(APP_ROOT, "lib"),
      path.join(APP_ROOT, "features"),
      path.join(APP_ROOT, "app"),
      path.join(APP_ROOT, "components"),
    ];
    const files = productRoots.flatMap(listTsFiles).filter((f) => {
      const r = rel(f);
      return !r.includes("methodModeHold.test-only.ts");
    });
    const hits: string[] = [];
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      for (const line of text.split("\n")) {
        const trimmed = line.trim();
        if (trimmed.startsWith("//") || trimmed.startsWith("*") || trimmed.startsWith("/*")) {
          continue;
        }
        if (
          /from\s+["'][^"']*methodModeHold\.test-only["']/.test(trimmed) ||
          /import\s*{[^}]*(setMethodModeHoldForTests|resetMethodModeHoldForTests)/.test(
            trimmed,
          )
        ) {
          hits.push(`${rel(file)}: ${trimmed}`);
        }
      }
    }
    expect(hits, hits.join("\n") || "ok").toEqual([]);
  });

  it("confines override store imports to hold module and test-only module", () => {
    const files = [
      ...listTsFiles(path.join(APP_ROOT, "lib")),
      ...listTsFiles(path.join(APP_ROOT, "features")),
      ...listTsFiles(path.join(APP_ROOT, "app")),
      ...listTsFiles(path.join(APP_ROOT, "components")),
    ];
    const allowed = new Set([
      "lib/d1/methodModeHold.ts",
      "lib/d1/methodModeHold.test-only.ts",
      "lib/d1/methodModeHold.store.ts",
    ]);
    const hits: string[] = [];
    for (const file of files) {
      const r = rel(file);
      if (allowed.has(r)) continue;
      const text = fs.readFileSync(file, "utf8");
      for (const line of text.split("\n")) {
        const trimmed = line.trim();
        if (trimmed.startsWith("//") || trimmed.startsWith("*") || trimmed.startsWith("/*")) {
          continue;
        }
        if (/from\s+["'][^"']*methodModeHold\.store["']/.test(trimmed)) {
          hits.push(r);
        }
      }
    }
    expect(hits, hits.join("\n") || "ok").toEqual([]);
  });

  it("forbids test helpers from being imported via public product hold module in tests", () => {
    const testsRoot = path.join(APP_ROOT, "__tests__");
    function listAll(dir: string): string[] {
      if (!fs.existsSync(dir)) return [];
      const out: string[] = [];
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          if (entry.name === "node_modules") continue;
          out.push(...listAll(full));
        } else if (/\.(ts|tsx)$/.test(entry.name)) out.push(full);
      }
      return out;
    }
    const hits: string[] = [];
    for (const file of listAll(testsRoot)) {
      const text = fs.readFileSync(file, "utf8");
      for (const line of text.split("\n")) {
        if (
          /from\s+["']@\/lib\/d1["']/.test(line) &&
          /setMethodModeHoldForTests|resetMethodModeHoldForTests/.test(line)
        ) {
          hits.push(`${rel(file)}: ${line.trim()}`);
        }
        if (
          /from\s+["']@\/lib\/d1\/methodModeHold["']/.test(line) &&
          /setMethodModeHoldForTests|resetMethodModeHoldForTests/.test(line)
        ) {
          hits.push(`${rel(file)}: ${line.trim()}`);
        }
      }
    }
    expect(hits, hits.join("\n") || "ok").toEqual([]);
  });
});
