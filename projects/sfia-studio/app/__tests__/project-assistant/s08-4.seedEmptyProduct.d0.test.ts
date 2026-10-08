/**
 * @vitest-environment node
 *
 * S08-4 — empty Product sqlite for projects-empty visual pairing.
 * Run: S08_4_EMPTY_SEED=1 npx vitest run __tests__/project-assistant/s08-4.seedEmptyProduct.d0.test.ts
 */
import fs from "node:fs";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { bootW2Runtime, cleanupW2TempDirs } from "./w2Harness";
import { resetRuntimeApplicationServiceForTests } from "@/lib/vertical-slice-runtime";

const EMPTY_DB = path.resolve(
  __dirname,
  "../../../../../.tmp-sfia-review/visual/s08-4/qa-dbs/oa-product-empty.sqlite",
);

const run = process.env.S08_4_EMPTY_SEED === "1";

describe.runIf(run)("S08-4 seed empty Product DB", () => {
  beforeAll(() => {
    fs.mkdirSync(path.dirname(EMPTY_DB), { recursive: true });
    if (fs.existsSync(EMPTY_DB)) fs.unlinkSync(EMPTY_DB);
    resetRuntimeApplicationServiceForTests();
  });

  afterAll(() => {
    cleanupW2TempDirs();
    resetRuntimeApplicationServiceForTests();
  });

  it("writes empty product sqlite with zero projects", async () => {
    const runtime = bootW2Runtime({
      productDbPath: EMPTY_DB,
      withDeterministicProductCursorBoundary: false,
    });
    const listed = await runtime.oa!.projectServices.listProjects.execute();
    expect(listed.ok).toBe(true);
    if (!listed.ok) throw new Error("list");
    expect(listed.projects.length).toBe(0);
    expect(fs.existsSync(EMPTY_DB)).toBe(true);
    expect(fs.statSync(EMPTY_DB).size).toBeGreaterThan(0);
  });
});
