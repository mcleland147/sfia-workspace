/**
 * @vitest-environment node
 *
 * T7 SHADOW Policy Source Option A — unit proofs (no DB / no env).
 * Source is EMPTY / INERT — no operational policy values.
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { T7_SHADOW_PILOT_PROJECT_ID } from "@/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
import { resolveVersionedFinOpsT7ShadowPolicy } from "@/lib/oa/finops/server/versionedFinOpsT7ShadowPolicySource";

const SOURCE_PATH = path.join(
  process.cwd(),
  "lib/oa/finops/server/versionedFinOpsT7ShadowPolicySource.ts",
);

function evalInput(projectId: string) {
  return {
    projectId,
    executionRunId: "run:ps-unit",
    correlationId: "corr:ps-unit",
    occurredAt: "2026-08-09T02:00:00.000Z",
  };
}

describe("T7 SHADOW Policy Source Option A — unit", () => {
  it("PS-U01 versioned resolver returns null for sfia-studio-ops1", () => {
    expect(T7_SHADOW_PILOT_PROJECT_ID).toBe("sfia-studio-ops1");
    expect(
      resolveVersionedFinOpsT7ShadowPolicy(evalInput(T7_SHADOW_PILOT_PROJECT_ID)),
    ).toBeNull();
  });

  it("PS-U02 versioned resolver returns null for unknown projectId", () => {
    expect(
      resolveVersionedFinOpsT7ShadowPolicy(evalInput("project:unknown-pilot")),
    ).toBeNull();
  });

  it("PS-U03 versioned resolver returns null for empty / whitespace projectId", () => {
    expect(resolveVersionedFinOpsT7ShadowPolicy(evalInput(""))).toBeNull();
    expect(resolveVersionedFinOpsT7ShadowPolicy(evalInput("   "))).toBeNull();
  });

  it("PS-U04 resolver requires no I/O / env / DB", () => {
    const beforeEnv = process.env.DATABASE_URL;
    // Pure call — no pool, no migrate, no env dependency.
    const out = resolveVersionedFinOpsT7ShadowPolicy(
      evalInput(T7_SHADOW_PILOT_PROJECT_ID),
    );
    expect(out).toBeNull();
    expect(process.env.DATABASE_URL).toBe(beforeEnv);
  });

  it("PS-U05 source infrastructure has zero active policy entries", () => {
    const source = readFileSync(SOURCE_PATH, "utf8");
    const codeOnly = source
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/^\s*\/\/.*$/gm, "");
    expect(source).toMatch(/Object\.freeze\(\{\s*\}\)/);
    expect(source).toMatch(/ACTIVE POLICY ENTRIES = 0/);
    expect(codeOnly).not.toMatch(/thresholdCode\s*:/);
    expect(codeOnly).not.toMatch(/thresholdAmount\s*:/);
    expect(codeOnly).not.toMatch(/currency\s*:\s*["']/);
    expect(codeOnly).not.toMatch(/process\.env/);
    expect(codeOnly).not.toMatch(/pool\.query|CREATE TABLE|INSERT INTO/i);
    expect(codeOnly).not.toMatch(
      /new Map\s*\(|new Set\s*\(|WeakMap|WeakSet|AsyncLocalStorage/,
    );
    expect(codeOnly).not.toMatch(/lib\/ops1/);
    expect(codeOnly).not.toMatch(/"15"|"20"|"25"|"30"/);
    // Behavioral: pilot resolves null ⇒ inert / not_configured at T4 boundary.
    expect(
      resolveVersionedFinOpsT7ShadowPolicy(evalInput(T7_SHADOW_PILOT_PROJECT_ID)),
    ).toBeNull();
  });
});
