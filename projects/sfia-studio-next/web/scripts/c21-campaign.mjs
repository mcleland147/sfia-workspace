#!/usr/bin/env node
/**
 * C21 campaign — deterministic oracles for lot 2 (no private data, no GitHub mutation).
 * Runs vitest suites + records DEV smoke + WEB egress check.
 */
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.SFIA_C21_OUT || "/tmp/sfia-c21-campaign";
mkdirSync(outDir, { recursive: true });

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, {
    encoding: "utf8",
    cwd: opts.cwd || process.cwd(),
    env: { ...process.env, ...opts.env },
    timeout: opts.timeout ?? 180_000,
  });
  return {
    status: r.status,
    stdout: r.stdout || "",
    stderr: r.stderr || "",
  };
}

const results = [];

// 1) Unit oracles
const unit = run("npx", [
  "vitest",
  "run",
  "tests/unit/ml5-web-search-authorize.test.ts",
  "tests/unit/ml5-cursor-qualify.test.ts",
  "tests/unit/ml5-c21-consolidation.test.ts",
  "tests/unit/ml5-public-web-frontier.test.ts",
]);
results.push({
  step: "unit-web-d8-consol",
  ok: unit.status === 0,
  status: unit.status,
});
writeFileSync(join(outDir, "unit-web-d8.log"), unit.stdout + "\n" + unit.stderr);

// 2) PG autonomous restitution
const pg = run("npx", [
  "vitest",
  "run",
  "tests/integration/ml5-c21-autonomous-restitution.pg.test.ts",
  "tests/integration/ml5-cursor-dispatch.pg.test.ts",
]);
results.push({
  step: "pg-autonomous-restitution",
  ok: pg.status === 0,
  status: pg.status,
});
writeFileSync(join(outDir, "pg-restitution.log"), pg.stdout + "\n" + pg.stderr);

// 3) DEV smoke
const smoke = run("curl", [
  "-s",
  "-o",
  "/dev/null",
  "-w",
  "%{http_code}",
  "-X",
  "POST",
  "http://127.0.0.1:3100/api/dev/auto-session",
]);
results.push({
  step: "dev-auto-session",
  ok: smoke.stdout.trim() === "200",
  status: smoke.stdout.trim(),
});

const summary = {
  at: new Date().toISOString(),
  results,
  allOk: results.every((r) => r.ok),
  notes: [
    "WEB: free-form rawQuery denied; publicTopic authorized (PROVENANCE).",
    "D8: criterion-level; CONFORMING only with verified evidence.",
    "Restitution: terminal SCRIPTED → handoff+D8+synthèse without manual POST.",
    "No GitHub REAL mutation. No private data. NO RELEASE.",
  ],
};
writeFileSync(join(outDir, "summary.json"), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
process.exit(summary.allOk ? 0 : 1);
