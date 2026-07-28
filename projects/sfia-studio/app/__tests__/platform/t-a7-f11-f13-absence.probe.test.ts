/** @vitest-environment node */
/**
 * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation.
 * Proves F11.2 read/readiness API and F13.4 RO runtime view are ABSENT.
 * Does not invent architecture or implement product surfaces.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../..");

function listFiles(dir: string, predicate: (name: string) => boolean): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      out.push(...listFiles(full, predicate));
    } else if (predicate(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

describe("T-A7 probe — F11.2 / F13.4 absence (no product implementation)", () => {
  it("finds no dedicated F11.2 readiness/cutover API route under app/", () => {
    const appRouter = path.join(APP_ROOT, "app");
    const routeFiles = listFiles(
      appRouter,
      (n) => n === "route.ts" || n === "route.js",
    );
    const readinessHits = routeFiles.filter((f) => {
      const rel = path.relative(APP_ROOT, f).toLowerCase();
      return (
        rel.includes("readiness") ||
        rel.includes("cutover") ||
        rel.includes("method-mode") ||
        rel.includes("methodmode")
      );
    });
    expect(readinessHits).toEqual([]);
  });

  it("finds no F13.4 legacy history read-only runtime module", () => {
    const lib = path.join(APP_ROOT, "lib");
    const tsFiles = listFiles(lib, (n) => /\.(ts|tsx)$/.test(n));
    const hits = tsFiles.filter((f) => {
      const rel = path.relative(APP_ROOT, f).toLowerCase();
      return (
        rel.includes("legacy-history") ||
        rel.includes("legacy_history") ||
        rel.includes("history-readonly") ||
        rel.includes("f13")
      );
    });
    expect(hits).toEqual([]);
  });

  it("documents MethodMode hold flag absence (E-MM-03 contract gap)", () => {
    const d1Files = listFiles(path.join(APP_ROOT, "lib/d1"), (n) =>
      /\.(ts|tsx)$/.test(n),
    );
    const holdMentions: string[] = [];
    for (const file of d1Files) {
      const text = fs.readFileSync(file, "utf8");
      if (
        /CUTOVER_HOLD|METHODMODE_HOLD|holdFlag.*MethodMode|MethodMode.*hold/i.test(
          text,
        )
      ) {
        holdMentions.push(path.relative(APP_ROOT, file));
      }
    }
    // Absence is evidence of MISSING hold capability — not a product defect to fix here.
    expect(holdMentions).toEqual([]);
  });
});
