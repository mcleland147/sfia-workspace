import { describe, expect, it } from "vitest";
import { NORA_STUDY_MODEL } from "@/domains/conversation/cognitive-policy";
import {
  COGNITIVE_GUIDANCE_ROWS,
  COGNITIVE_REFERENTIAL_COMPACT_SUMMARY,
  COGNITIVE_REFERENTIAL_ROW_COUNT,
  COGNITIVE_RESOURCE_CATALOG,
  LONG_CONTEXT_INPUT_THRESHOLD_TOKENS,
  LONG_CONTEXT_TARIFF_MULTIPLIERS,
  OPERATIONAL_DEFAULT_RESOURCE,
  TARIFF_CATALOG,
  TARIFF_PROVENANCE,
  admitModelEffort,
  applyLongContextMultipliers,
  effectiveTariffRates,
  getCognitiveGuidanceById,
  getTariffEntry,
  resolvesLongContextTier,
} from "@/domains/conversation/cognitive-resources";

describe("ML5 E02 — cognitive resource catalog", () => {
  it("lists Luna, Terra, Sol with expected admission posture pre-calibration", () => {
    expect(COGNITIVE_RESOURCE_CATALOG).toHaveLength(3);
    const sol = COGNITIVE_RESOURCE_CATALOG.find((e) => e.modelId === "gpt-6.2-sol");
    const luna = COGNITIVE_RESOURCE_CATALOG.find((e) => e.modelId === "gpt-6-luna");
    expect(sol?.admissionStatus).toBe("operational");
    expect(luna?.admissionStatus).toBe("documented_candidate");
    expect(sol?.documentedEfforts).not.toContain("none");
    expect(luna?.documentedEfforts).toContain("none");
  });

  it("keeps Sol medium as operational default aligned with study model", () => {
    expect(OPERATIONAL_DEFAULT_RESOURCE.modelId).toBe(NORA_STUDY_MODEL);
    expect(OPERATIONAL_DEFAULT_RESOURCE.effort).toBe("medium");
  });
});

describe("ML5 E02 — cognitive referential (51 guidance rows)", () => {
  it("exposes exactly 51 unique ids from CF allocation §4.1–4.5", () => {
    expect(COGNITIVE_GUIDANCE_ROWS.length).toBe(COGNITIVE_REFERENTIAL_ROW_COUNT);
    expect(COGNITIVE_REFERENTIAL_ROW_COUNT).toBe(51);
    const ids = new Set(COGNITIVE_GUIDANCE_ROWS.map((r) => r.id));
    expect(ids.size).toBe(51);
  });

  it("getCognitiveGuidanceById resolves known row", () => {
    const row = getCognitiveGuidanceById("cog-4.1-06");
    expect(row?.elementaire).toMatch(/critique/);
    expect(row?.preferenceFamily).toBe("sol");
    expect(row?.preferenceEffort).toBe("medium");
    expect(getCognitiveGuidanceById("missing")).toBeUndefined();
  });

  it("compact summary matches row count", () => {
    expect(COGNITIVE_REFERENTIAL_COMPACT_SUMMARY.length).toBe(51);
    expect(COGNITIVE_REFERENTIAL_COMPACT_SUMMARY[0]).toMatch(/^cog-4\.1-01\|/);
  });
});

describe("ML5 E02 — tariff catalog §3.2", () => {
  it("records provenance date 2026-11-26 and Sol short-context Standard rates", () => {
    expect(TARIFF_PROVENANCE.asOf).toBe("2026-11-26");
    const sol = getTariffEntry("gpt-6.2-sol")!;
    expect(sol.shortContextStandard.inputUncachedUsdPerMillion).toBe(2.0);
    expect(sol.shortContextStandard.outputUsdPerMillion).toBe(10.0);
    const luna = getTariffEntry("gpt-6-luna")!;
    expect(luna.shortContextStandard.inputUncachedUsdPerMillion).toBe(0.1);
    expect(TARIFF_CATALOG).toHaveLength(3);
  });

  it("applies >272k single-request multipliers", () => {
    expect(resolvesLongContextTier(LONG_CONTEXT_INPUT_THRESHOLD_TOKENS)).toBe(false);
    expect(resolvesLongContextTier(LONG_CONTEXT_INPUT_THRESHOLD_TOKENS + 1)).toBe(
      true,
    );
    const base = getTariffEntry("gpt-6.1-terra")!.shortContextStandard;
    const scaled = applyLongContextMultipliers(base);
    expect(scaled.inputUncachedUsdPerMillion).toBe(
      base.inputUncachedUsdPerMillion * LONG_CONTEXT_TARIFF_MULTIPLIERS.inputAndCache,
    );
    expect(scaled.outputUsdPerMillion).toBe(
      base.outputUsdPerMillion * LONG_CONTEXT_TARIFF_MULTIPLIERS.output,
    );
    const effective = effectiveTariffRates("gpt-6.2-sol", 300_000)!;
    expect(effective.outputUsdPerMillion).toBe(15.0);
  });
});

describe("ML5 E02 — resource admission", () => {
  it("operational admits Sol low|medium|high only", () => {
    for (const effort of ["low", "medium", "high"] as const) {
      const r = admitModelEffort("gpt-6.2-sol", effort, "operational");
      expect(r.admitted).toBe(true);
    }
    expect(admitModelEffort("gpt-6.2-sol", "xhigh", "operational").admitted).toBe(
      false,
    );
    expect(admitModelEffort("gpt-6.2-sol", "none", "operational").admitted).toBe(
      false,
    );
  });

  it("operational rejects uncalibrated Luna/Terra couples", () => {
    expect(admitModelEffort("gpt-6-luna", "medium", "operational").admitted).toBe(
      false,
    );
    expect(admitModelEffort("gpt-6.1-terra", "high", "operational").admitted).toBe(
      false,
    );
  });

  it("calibration allows documented Luna/Terra efforts", () => {
    expect(admitModelEffort("gpt-6-luna", "low", "calibration").admitted).toBe(true);
    expect(admitModelEffort("gpt-6.1-terra", "xhigh", "calibration").admitted).toBe(
      true,
    );
    expect(admitModelEffort("gpt-6.2-sol", "max", "calibration").admitted).toBe(true);
    expect(admitModelEffort("gpt-6.2-sol", "none", "calibration").admitted).toBe(
      false,
    );
  });
});