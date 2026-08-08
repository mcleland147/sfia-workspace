/**
 * @vitest-environment node
 *
 * T7 SHADOW Option A — pure unit proofs (no DB).
 * FICTITIOUS fixtures only — NOT historical 15/20/25/30.
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { ensureShadowNeverBlocks } from "@/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps";
import { T7_SHADOW_PILOT_PROJECT_ID } from "@/lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
import { OPS1_PROJECT_KEY } from "@/lib/ops1/types";

describe("T7 SHADOW Option A — unit", () => {
  it("T7-SW06 ensureShadowNeverBlocks converts block → failed shadow_block_forbidden", () => {
    const out = ensureShadowNeverBlocks({
      decision: "block",
      reason: "threshold_crossed_enforce",
    });
    expect(out.decision).toBe("failed");
    expect(out.reason).toBe("shadow_block_forbidden");
    expect(out.finopsSideOnly).toBe(true);
  });

  it("T7-SW06b soft_signal / allow / failed pass through unchanged", () => {
    expect(
      ensureShadowNeverBlocks({
        decision: "soft_signal",
        reason: "threshold_crossed_signal_only",
      }).decision,
    ).toBe("soft_signal");
    expect(
      ensureShadowNeverBlocks({ decision: "allow", reason: "below_threshold" })
        .decision,
    ).toBe("allow");
    expect(
      ensureShadowNeverBlocks({
        decision: "failed",
        reason: "projection_missing",
        finopsSideOnly: true,
      }).decision,
    ).toBe("failed");
  });

  it("T7-SW15 pilot constant equals OPS1_PROJECT_KEY sfia-studio-ops1", () => {
    expect(T7_SHADOW_PILOT_PROJECT_ID).toBe("sfia-studio-ops1");
    expect(T7_SHADOW_PILOT_PROJECT_ID).toBe(OPS1_PROJECT_KEY);
  });

  it("T7-SW16 new composers expose no MONITOR/E1/enforce activation API", () => {
    const adapter = readFileSync(
      path.join(
        process.cwd(),
        "lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts",
      ),
      "utf8",
    );
    const pilot = readFileSync(
      path.join(
        process.cwd(),
        "lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot.ts",
      ),
      "utf8",
    );
    expect(adapter).toMatch(/effect:\s*"signal_only"/);
    expect(adapter).toMatch(/shadow_block_forbidden/);
    expect(adapter).toMatch(/rollout_not_shadow_inert/);
    expect(pilot).not.toMatch(/E1_ENFORCED/);
    expect(pilot).not.toMatch(/effect:\s*"enforce"/);
    expect(adapter).not.toMatch(/upsertProjectRollout/);
  });
});
