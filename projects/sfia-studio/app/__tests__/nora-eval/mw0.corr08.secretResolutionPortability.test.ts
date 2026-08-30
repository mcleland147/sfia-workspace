/** @vitest-environment node */
/**
 * CORR-MW0-08 — deterministic portability contract for REAL secret resolution.
 * Source-level only: does NOT import the standalone runner (avoids main()).
 * Must NOT set MW0_RUN_REAL=1 or call OpenAI.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const DIR = path.resolve(__dirname);
const TARGETS = [
  path.join(DIR, "runMw0RealCampaign.ts"),
  path.join(DIR, "mw0.realCampaign.test.ts"),
] as const;

function read(file: string): string {
  return fs.readFileSync(file, "utf8");
}

describe("CORR-MW0-08 secret resolution portability", () => {
  it("target files exist", () => {
    for (const file of TARGETS) {
      expect(fs.existsSync(file), file).toBe(true);
    }
  });

  it("contains no user/machine-specific absolute home paths", () => {
    for (const file of TARGETS) {
      const src = read(file);
      expect(src, file).not.toMatch(/\/Users\//);
      expect(src, file).not.toMatch(/\/home\//);
      expect(src, file).not.toMatch(/:\\Users\\/i);
      expect(src, file).not.toMatch(/C:\\Users\\/i);
    }
  });

  it("does not persist physical secret file path as source", () => {
    for (const file of TARGETS) {
      const src = read(file);
      expect(src, file).not.toMatch(/source:\s*file\b/);
      expect(src, file).not.toMatch(/source:\s*[`'\"]?\$\{?file/);
      expect(src, file).not.toMatch(/return\s*\{\s*apiKey[^}]*source:\s*file\b/);
    }
  });

  it("retains OPENAI_API_KEY first + categorical env.local source", () => {
    for (const file of TARGETS) {
      const src = read(file);
      expect(src).toMatch(/OPENAI_API_KEY/);
      expect(src).toMatch(/source:\s*["']process\.env["']/);
      expect(src).toMatch(/source:\s*["']env\.local["']/);
      expect(src).toMatch(/\.env\.local/);
      expect(src).toMatch(/path\.resolve\(process\.cwd\(\),\s*["']\.env\.local["']\)/);
      expect(src).toMatch(
        /path\.resolve\(__dirname,\s*["']\.\.\/\.\.\/\.env\.local["']\)/,
      );
    }
  });

  it("Vitest REAL campaign remains opt-in via MW0_RUN_REAL === \"1\"", () => {
    const src = read(path.join(DIR, "mw0.realCampaign.test.ts"));
    expect(src).toMatch(/MW0_RUN_REAL\s*===\s*["']1["']/);
    expect(src).toMatch(/describe\.runIf\(runReal\)/);
  });

  it("standalone runner is not imported/executed by this suite", () => {
    // This file must never pull in runMw0RealCampaign (would risk main()).
    const self = read(path.join(DIR, "mw0.corr08.secretResolutionPortability.test.ts"));
    expect(self).not.toMatch(/from\s+["'].*runMw0RealCampaign/);
    expect(self).not.toMatch(/require\(["'].*runMw0RealCampaign/);
  });

  it("MW0_RUN_REAL is not enabled during CORR-08 deterministic suite", () => {
    expect(process.env.MW0_RUN_REAL).not.toBe("1");
  });
});
