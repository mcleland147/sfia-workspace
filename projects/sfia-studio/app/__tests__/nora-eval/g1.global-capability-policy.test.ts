/** @vitest-environment node */
/**
 * G1 — Global Model × Reasoning campaign capability policy (ZERO REAL).
 * Preserves MW0 historical allowlist semantics.
 */
import { describe, expect, it } from "vitest";
import {
  buildGlobalModelReasoningCapabilityManifest,
  buildMw0CapabilityManifest,
  campaignEffectiveCapabilitySet,
  validateCellAgainstManifest,
} from "@/lib/nora-eval";
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";

const RETRIEVED = "2026-09-05T12:00:00.000Z";

describe("G1 — campaign capability policy (MW0 preserved + global distinct)", () => {
  it("MW0 historical: Luna+low and Terra+medium remain admissible", () => {
    const mw0 = buildMw0CapabilityManifest(RETRIEVED);
    expect(mw0.campaignAllowlist.modelIds).toEqual([
      "gpt-5.6-luna",
      "gpt-5.6-terra",
    ]);
    expect(mw0.campaignAllowlist.reasoningEfforts).toEqual([
      "none",
      "low",
      "medium",
    ]);
    expect(
      validateCellAgainstManifest({
        manifest: mw0,
        modelId: "gpt-5.6-luna",
        reasoningEffort: "low",
      }).ok,
    ).toBe(true);
    expect(
      validateCellAgainstManifest({
        manifest: mw0,
        modelId: "gpt-5.6-terra",
        reasoningEffort: "medium",
      }).ok,
    ).toBe(true);
  });

  it("MW0 historical: Sol remains outside campaign allowlist", () => {
    const mw0 = buildMw0CapabilityManifest(RETRIEVED);
    const sol = campaignEffectiveCapabilitySet(mw0, "gpt-5.6-sol");
    expect(sol.ok).toBe(false);
    expect(sol.reason).toMatch(/not in campaign allowlist/i);
    expect(
      validateCellAgainstManifest({
        manifest: mw0,
        modelId: "gpt-5.6-sol",
        reasoningEffort: "none",
      }).ok,
    ).toBe(false);
  });

  it("MW0 historical: high/xhigh/max remain outside effective set", () => {
    const mw0 = buildMw0CapabilityManifest(RETRIEVED);
    for (const effort of ["high", "xhigh", "max"] as OpenAiReasoningEffort[]) {
      const cell = validateCellAgainstManifest({
        manifest: mw0,
        modelId: "gpt-5.6-luna",
        reasoningEffort: effort,
      });
      expect(cell.ok).toBe(false);
      expect(cell.failureClass).toBe("PROVIDER_CAPABILITY");
    }
  });

  it("Global policy: Luna/Terra/Sol + none→max admissible; minimal FAIL", () => {
    const global = buildGlobalModelReasoningCapabilityManifest(RETRIEVED);
    expect(global.campaignAllowlist.modelIds).toEqual([
      "gpt-5.6-luna",
      "gpt-5.6-terra",
      "gpt-5.6-sol",
    ]);
    expect(global.campaignAllowlist.reasoningEfforts).toEqual([
      "none",
      "low",
      "medium",
      "high",
      "xhigh",
      "max",
    ]);
    for (const modelId of global.campaignAllowlist.modelIds) {
      for (const effort of global.campaignAllowlist.reasoningEfforts) {
        expect(
          validateCellAgainstManifest({
            manifest: global,
            modelId,
            reasoningEffort: effort,
          }).ok,
        ).toBe(true);
      }
    }
    const minimal = validateCellAgainstManifest({
      manifest: global,
      modelId: "gpt-5.6-luna",
      reasoningEffort: "minimal",
    });
    expect(minimal.ok).toBe(false);
    expect(minimal.failureClass).toBe("PROVIDER_CAPABILITY");
  });

  it("Global policy: unknown model FAIL; MW0 builder unchanged vs global", () => {
    const global = buildGlobalModelReasoningCapabilityManifest(RETRIEVED);
    const unknown = campaignEffectiveCapabilitySet(global, "gpt-99-unknown");
    expect(unknown.ok).toBe(false);
    expect(unknown.reason).toMatch(/Unknown model/i);

    const mw0 = buildMw0CapabilityManifest(RETRIEVED);
    expect(mw0.campaignAllowlist.modelIds).not.toContain("gpt-5.6-sol");
    expect(mw0.campaignAllowlist.reasoningEfforts).not.toContain("high");
  });
});
