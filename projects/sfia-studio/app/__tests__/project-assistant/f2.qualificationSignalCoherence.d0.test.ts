/** @vitest-environment node */
/**
 * CORR-MW5-DLV-05 — closed-world cosmetic qualification coherence. ZERO REAL.
 */
import { describe, expect, it } from "vitest";
import {
  CRITICAL_QUALIFICATION_SIGNAL_KEYS,
  COSMETIC_SAFE_SIGNALS,
  classifyClosedWorldCosmeticRequest,
  reconcileQualificationSignals,
  type CriticalQualificationSignalKey,
} from "@/features/project-assistant/f2/qualificationSignalCoherence";
import type { F2QualificationSignals } from "@/features/project-assistant/f2/types";
import { ANALYSIS_SYSTEM } from "@/features/project-assistant/f2/intentAnalysis";
import {
  CLOSED_WORLD_SAFE_COSMETIC_FR1,
  CLOSED_WORLD_SAFE_COSMETIC_FR2,
  CLOSED_WORLD_SAFE_COSMETIC_FR3,
  CLOSED_WORLD_UNKNOWN_RESIDUALS,
  DISGUISED_ARCHITECTURE,
  REAL_02_INCOMPLETE_NO_IMPACT_PROMPT,
  WORD_ONLY_COSMETIC,
  falseCriticalSignal,
} from "@/lib/nora-eval/mw5CosmeticQualificationFixtures";

function falseCritical(
  key: CriticalQualificationSignalKey,
): F2QualificationSignals {
  return falseCriticalSignal(key);
}

describe("F2 qualification signal coherence — closed-world cosmetic envelope", () => {
  it("prompt hardening is present but is not the sole control", () => {
    expect(ANALYSIS_SYSTEM).toMatch(/effet réel demandé/);
    expect(ANALYSIS_SYSTEM).toMatch(/Le seul mot/);
    expect(ANALYSIS_SYSTEM).toMatch(/Silence sur s[ée]curit[ée]/);
  });

  it("product runtime helper does not embed REAL-02 or eval corpus", async () => {
    const src = await import(
      "@/features/project-assistant/f2/qualificationSignalCoherence"
    );
    expect(src).not.toHaveProperty("MW5_R2_REAL_02_PURE_COSMETIC_PROMPT");
    expect(src).not.toHaveProperty("evaluateCosmeticQualificationRobustnessContract");
    expect(src).not.toHaveProperty("DISGUISED_ARCHITECTURE");
  });

  it.each([
    ["FR-1", CLOSED_WORLD_SAFE_COSMETIC_FR1],
    ["FR-2", CLOSED_WORLD_SAFE_COSMETIC_FR2],
    ["FR-3", CLOSED_WORLD_SAFE_COSMETIC_FR3],
  ] as const)("%s proven-safe form is closed-world safe", (_name, prompt) => {
    const c = classifyClosedWorldCosmeticRequest(prompt);
    expect(c.cosmeticSafeToSuppress).toBe(true);
    expect(c.residual).toBe("");
  });

  it("table-driven false Critical signals on proven-safe FR-1 are neutralized", () => {
    for (const key of CRITICAL_QUALIFICATION_SIGNAL_KEYS) {
      const r = reconcileQualificationSignals({
        userContent: CLOSED_WORLD_SAFE_COSMETIC_FR1,
        signals: falseCritical(key),
      });
      expect(r.cosmeticSafeToSuppress, key).toBe(true);
      expect(r.reason, key).toBe("false_critical_neutralized");
      expect(r.signals[key], key).toBe(false);
      expect(r.signals.lowRiskBounded, key).toBe(true);
    }
  });

  it("normal safe signals stay Light-eligible on proven-safe FR-1", () => {
    const r = reconcileQualificationSignals({
      userContent: CLOSED_WORLD_SAFE_COSMETIC_FR1,
      signals: { ...COSMETIC_SAFE_SIGNALS },
    });
    expect(r.reason).toBe("signals_already_safe");
    expect(r.signals).toEqual(COSMETIC_SAFE_SIGNALS);
  });

  it("REAL-02 incomplete no-impact (no security/irreversible) never neutralizes", () => {
    const c = classifyClosedWorldCosmeticRequest(REAL_02_INCOMPLETE_NO_IMPACT_PROMPT);
    expect(c.cosmeticSafeToSuppress).toBe(false);
    const sec = reconcileQualificationSignals({
      userContent: REAL_02_INCOMPLETE_NO_IMPACT_PROMPT,
      signals: falseCritical("securityImpact"),
    });
    expect(sec.signals.securityImpact).toBe(true);
    const irr = reconcileQualificationSignals({
      userContent: REAL_02_INCOMPLETE_NO_IMPACT_PROMPT,
      signals: falseCritical("irreversible"),
    });
    expect(irr.signals.irreversible).toBe(true);
  });

  it.each([
    ["mfa", CLOSED_WORLD_UNKNOWN_RESIDUALS.mfa],
    ["multi-region", CLOSED_WORLD_UNKNOWN_RESIDUALS.multiRegion],
    ["DynamoDB", CLOSED_WORLD_UNKNOWN_RESIDUALS.dynamodb],
    ["Kafka", CLOSED_WORLD_UNKNOWN_RESIDUALS.kafka],
    ["cache", CLOSED_WORLD_UNKNOWN_RESIDUALS.cache],
    ["webhook", CLOSED_WORLD_UNKNOWN_RESIDUALS.webhook],
    ["Zorblax", CLOSED_WORLD_UNKNOWN_RESIDUALS.zorblax],
  ] as const)(
    "unknown substantive residual %s fails closed without denylist terms",
    (_name, prompt) => {
      const r = reconcileQualificationSignals({
        userContent: prompt,
        signals: falseCritical("structuralChange"),
      });
      expect(r.cosmeticSafeToSuppress).toBe(false);
      expect(r.reason).toBe("unknown_substantive_residual");
      expect(r.signals.structuralChange).toBe(true);
      expect(r.residual.length).toBeGreaterThan(0);
    },
  );

  it("disguised architecture/data mutation preserves Critical signals", () => {
    const r = reconcileQualificationSignals({
      userContent: DISGUISED_ARCHITECTURE,
      signals: {
        structuralChange: true,
        securityImpact: false,
        architectureImpact: true,
        dataImpact: true,
        irreversible: false,
        lowRiskBounded: false,
      },
    });
    expect(r.cosmeticSafeToSuppress).toBe(false);
    expect(r.signals.structuralChange).toBe(true);
    expect(r.signals.architectureImpact).toBe(true);
    expect(r.signals.dataImpact).toBe(true);
  });

  it("the word cosmétique alone never downgrades Critical signals", () => {
    const r = reconcileQualificationSignals({
      userContent: WORD_ONLY_COSMETIC,
      signals: falseCritical("structuralChange"),
    });
    expect(r.cosmeticSafeToSuppress).toBe(false);
    expect(r.signals.structuralChange).toBe(true);
  });
});
