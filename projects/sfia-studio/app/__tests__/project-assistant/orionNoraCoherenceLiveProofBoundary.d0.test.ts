/**
 * FINAL-REVIEW-CORR-635 — Blocker B: LIVE proof boundary safety (DET).
 * ZERO OpenAI calls. ZERO DB writes.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  LIVE_PROVIDER_OPT_IN_ENV,
  ORION_COHERENCE_LIVE_LEGACY_ENV,
  applyLiveProofSafeRuntimeEnv,
  isLiveProviderOptIn,
  resolveOrionCoherenceLiveProofBoundary,
  type LiveProofEnv,
} from "@/lib/project-assistant-qa/orionCoherenceLiveProofBoundary";

const SOURCE_PATH = path.resolve(
  __dirname,
  "../../lib/project-assistant-qa/orionCoherenceLiveProofBoundary.ts",
);
const LIVE_TEST_PATH = path.resolve(
  __dirname,
  "orionNoraCoherenceCorr01.live.test.ts",
);
const REMOVED_SCRIPT = path.resolve(
  __dirname,
  "../../scripts/orion-coherence-corr-01-live-proof.ts",
);

const tmpDirs: string[] = [];

afterEach(() => {
  while (tmpDirs.length > 0) {
    const d = tmpDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function makeExistingDbPair(): { product: string; nora: string; dir: string } {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "orion-live-boundary-"));
  tmpDirs.push(dir);
  const product = path.join(dir, "product.sqlite");
  const nora = path.join(dir, "nora.sqlite");
  fs.writeFileSync(product, "");
  fs.writeFileSync(nora, "");
  return { product, nora, dir };
}

describe("FINAL-REVIEW-CORR-635 — LIVE proof boundary B01–B10", () => {
  it("B01/B02 — default CI: opt-in false; no OpenAI required", () => {
    const env: LiveProofEnv = { ...process.env };
    delete (env as Record<string, string | undefined>)[LIVE_PROVIDER_OPT_IN_ENV];
    delete (env as Record<string, string | undefined>)[
      ORION_COHERENCE_LIVE_LEGACY_ENV
    ];
    delete (env as Record<string, string | undefined>).OPENAI_API_KEY;
    expect(isLiveProviderOptIn(env)).toBe(false);
    const r = resolveOrionCoherenceLiveProofBoundary(env);
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe("opt_in_missing");
  });

  it("B03 — missing required parameters fail closed before side effects", () => {
    const env: LiveProofEnv = {
      [LIVE_PROVIDER_OPT_IN_ENV]: "1",
      OPENAI_API_KEY: "sk-test-not-used",
    };
    const r = resolveOrionCoherenceLiveProofBoundary(env);
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe("project_id_missing");
  });

  it("B04 — invalid DB path: no file created or overwritten", () => {
    const ghostDir = path.join(os.tmpdir(), `orion-live-ghost-${Date.now()}`);
    const ghostProduct = path.join(ghostDir, "missing-product.sqlite");
    const ghostNora = path.join(ghostDir, "missing-nora.sqlite");
    expect(fs.existsSync(ghostDir)).toBe(false);

    const env: LiveProofEnv = {
      [LIVE_PROVIDER_OPT_IN_ENV]: "1",
      TEST_PROJECT_ID: "prj:test-only",
      TEST_PRODUCT_DB_PATH: ghostProduct,
      TEST_NORA_DB_PATH: ghostNora,
      OPENAI_API_KEY: "sk-test-not-used",
    };
    const r = resolveOrionCoherenceLiveProofBoundary(env);
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe("product_db_not_file");
    expect(fs.existsSync(ghostDir)).toBe(false);
    expect(fs.existsSync(ghostProduct)).toBe(false);
  });

  it("B05 — no authority overrides accepted on opt-in", () => {
    const { product, nora } = makeExistingDbPair();
    for (const flag of [
      "SFIA_STUDIO_LOCAL_PILOT_AUTHORITY",
      "SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY",
      "SFIA_V2_RUNTIME_ALLOW_RESET",
    ] as const) {
      const env: LiveProofEnv = {
        [LIVE_PROVIDER_OPT_IN_ENV]: "1",
        TEST_PROJECT_ID: "prj:test-only",
        TEST_PRODUCT_DB_PATH: product,
        TEST_NORA_DB_PATH: nora,
        OPENAI_API_KEY: "sk-test-not-used",
        [flag]: "1",
      };
      const r = resolveOrionCoherenceLiveProofBoundary(env);
      expect(r.ok).toBe(false);
      if (r.ok) return;
      expect(r.code).toBe("authority_escalation_present");
      expect(r.reason).toContain(flag);
    }
  });

  it("B06 — safe runtime apply never enables reset or authority", () => {
    const { product, nora } = makeExistingDbPair();
    const env: LiveProofEnv = {
      [LIVE_PROVIDER_OPT_IN_ENV]: "1",
      TEST_PROJECT_ID: "prj:test-only",
      TEST_PRODUCT_DB_PATH: product,
      TEST_NORA_DB_PATH: nora,
      OPENAI_API_KEY: "sk-test-not-used",
      SFIA_V2_RUNTIME_ALLOW_RESET: "1",
    };
    // Boundary refuses while escalation present.
    expect(resolveOrionCoherenceLiveProofBoundary(env).ok).toBe(false);

    const envClean: LiveProofEnv = {
      [LIVE_PROVIDER_OPT_IN_ENV]: "1",
      TEST_PROJECT_ID: "prj:test-only",
      TEST_PRODUCT_DB_PATH: product,
      TEST_NORA_DB_PATH: nora,
      OPENAI_API_KEY: "sk-test-not-used",
    };
    const ok = resolveOrionCoherenceLiveProofBoundary(envClean);
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;

    const mutable: Record<string, string | undefined> = {
      SFIA_V2_RUNTIME_ALLOW_RESET: "1",
      SFIA_STUDIO_LOCAL_PILOT_AUTHORITY: "1",
      SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY: "1",
      SFIA_STUDIO_CURSOR_REAL: "1",
    };
    applyLiveProofSafeRuntimeEnv(ok, mutable);
    expect(mutable.SFIA_V2_RUNTIME_ALLOW_RESET).toBeUndefined();
    expect(mutable.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY).toBeUndefined();
    expect(mutable.SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY).toBeUndefined();
    expect(mutable.SFIA_STUDIO_CURSOR_REAL).toBe("0");
    expect(mutable.SFIA_STUDIO_PRODUCT_DB_PATH).toBe(ok.productDbPath);
  });

  it("B07 — no personal absolute path or fixed ORION identifier in harness sources", () => {
    const boundarySrc = fs.readFileSync(SOURCE_PATH, "utf8");
    const liveSrc = fs.readFileSync(LIVE_TEST_PATH, "utf8");
    for (const src of [boundarySrc, liveSrc]) {
      expect(src).not.toMatch(/\/Users\/morris\//);
      expect(src).not.toMatch(/prj:b0883ca8-2411-493d-94ff-e386d176956a/);
      expect(src).not.toMatch(/loadDotEnvLocal/);
      expect(src).not.toMatch(/SFIA_V2_RUNTIME_ALLOW_RESET\s*=\s*["']1["']/);
      expect(src).not.toMatch(/SFIA_STUDIO_LOCAL_PILOT_AUTHORITY\s*=\s*["']1["']/);
      expect(src).not.toMatch(
        /SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY\s*=\s*["']1["']/,
      );
    }
    expect(fs.existsSync(REMOVED_SCRIPT)).toBe(false);
  });

  it("B08 — secrets are not embedded in harness sources", () => {
    const boundarySrc = fs.readFileSync(SOURCE_PATH, "utf8");
    const liveSrc = fs.readFileSync(LIVE_TEST_PATH, "utf8");
    for (const src of [boundarySrc, liveSrc]) {
      expect(src).not.toMatch(/sk-[a-zA-Z0-9]{10,}/);
      expect(src).not.toMatch(/OPENAI_API_KEY\s*=\s*["']sk-/);
    }
  });

  it("B09 — Cursor REAL remains OFF in safe apply / forbidden when already 1", () => {
    const { product, nora } = makeExistingDbPair();
    const envReal: LiveProofEnv = {
      [LIVE_PROVIDER_OPT_IN_ENV]: "1",
      TEST_PROJECT_ID: "prj:test-only",
      TEST_PRODUCT_DB_PATH: product,
      TEST_NORA_DB_PATH: nora,
      OPENAI_API_KEY: "sk-test-not-used",
      SFIA_STUDIO_CURSOR_REAL: "1",
    };
    const denied = resolveOrionCoherenceLiveProofBoundary(envReal);
    expect(denied.ok).toBe(false);
    if (denied.ok) return;
    expect(denied.code).toBe("cursor_real_forbidden");
  });

  it("B10 — successful resolve requires explicit targets; legacy opt-in alias works", () => {
    const { product, nora } = makeExistingDbPair();
    const proofDir = path.join(os.tmpdir(), "proof-out-not-created-by-resolve");
    const env: LiveProofEnv = {
      [ORION_COHERENCE_LIVE_LEGACY_ENV]: "1",
      TEST_PROJECT_ID: "prj:explicit-test",
      TEST_PRODUCT_DB_PATH: product,
      TEST_NORA_DB_PATH: nora,
      OPENAI_API_KEY: "sk-test-not-used",
      TEST_PROOF_DIR: proofDir,
    };
    const r = resolveOrionCoherenceLiveProofBoundary(env);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.projectId).toBe("prj:explicit-test");
    expect(r.cursorReal).toBe("0");
    expect(r.productDbPath).toBe(path.resolve(product));
    // resolve must not mkdir proof dir
    expect(fs.existsSync(proofDir)).toBe(false);
  });
});
