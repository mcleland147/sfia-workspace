import { afterEach, describe, expect, it } from "vitest";
import {
  NORA_STUDY_MODEL,
  buildCognitivePolicy,
  resolveAdmittedResource,
  resolveContinuityCognitivePolicy,
} from "@/domains/conversation/cognitive-policy";
import {
  COGNITIVE_GUIDANCE_ROWS,
  COGNITIVE_GUIDANCE_CATALOG_BLURB_MAX_CHARS,
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
  buildCognitiveGuidanceCatalogBlurb,
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

  it("uses Terra medium as provisional operational default; Sol remains study/rollback", () => {
    expect(OPERATIONAL_DEFAULT_RESOURCE.modelId).toBe("gpt-6.1-terra");
    expect(OPERATIONAL_DEFAULT_RESOURCE.effort).toBe("medium");
    expect(NORA_STUDY_MODEL).toBe("gpt-6.2-sol");
  });

  it("legacy_sol restores Sol medium default without structural rewrite", async () => {
    const prev = process.env.SFIA_COG_PROVISIONAL_POLICY;
    try {
      process.env.SFIA_COG_PROVISIONAL_POLICY = "legacy_sol";
      const { resolveOperationalDefaultResource, activeProvisionalPolicyId } =
        await import("@/domains/conversation/cognitive-resources");
      expect(activeProvisionalPolicyId()).toBe("legacy_sol");
      expect(resolveOperationalDefaultResource()).toEqual({
        modelId: "gpt-6.2-sol",
        effort: "medium",
      });
      const p = buildCognitivePolicy("Bonjour", "TEST_BOUNDARY");
      expect(p.modelRequested).toBe("gpt-6.2-sol");
      expect(p.effortRequested).toBe("medium");
      expect(p.reasonCodes).toContain("COG_POLICY_LEGACY_SOL");
    } finally {
      if (prev === undefined) delete process.env.SFIA_COG_PROVISIONAL_POLICY;
      else process.env.SFIA_COG_PROVISIONAL_POLICY = prev;
    }
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

  it("CF §4.1–4.5 section counts sum to 51", () => {
    const counts = { "4.1": 0, "4.2": 0, "4.3": 0, "4.4": 0, "4.5": 0 };
    for (const row of COGNITIVE_GUIDANCE_ROWS) {
      counts[row.section] += 1;
    }
    expect(counts).toEqual({ "4.1": 9, "4.2": 10, "4.3": 9, "4.4": 11, "4.5": 12 });
  });

  it("catalog blurb stays bounded and does not embed 51 matrix lines", () => {
    const blurb = buildCognitiveGuidanceCatalogBlurb();
    expect(blurb.length).toBeLessThanOrEqual(COGNITIVE_GUIDANCE_CATALOG_BLURB_MAX_CHARS);
    expect(blurb).toMatch(/consult_cognitive_guidance/);
    expect(blurb.split("\n").length).toBeLessThan(20);
    for (const line of COGNITIVE_REFERENTIAL_COMPACT_SUMMARY) {
      expect(blurb).not.toContain(line);
    }
  });

  it("consult_cognitive_guidance tool resolves a row and compact index", async () => {
    const {
      buildCognitiveGuidanceTools,
      consultCognitiveGuidance,
    } = await import("@/domains/conversation/cognitive-guidance-tools");
    const tools = await buildCognitiveGuidanceTools();
    expect(tools).toHaveLength(1);
    expect((tools[0] as { name: string }).name).toBe("consult_cognitive_guidance");
    const row = consultCognitiveGuidance({ guidanceId: "cog-4.1-06" });
    expect(row.status).toBe("OK");
    if (row.status === "OK" && row.kind === "ROW") {
      expect(row.row.id).toBe("cog-4.1-06");
    }
    const idx = consultCognitiveGuidance({ compactIndex: true });
    expect(idx.status).toBe("OK");
    if (idx.status === "OK" && idx.kind === "COMPACT_INDEX") {
      expect(idx.rowCount).toBe(51);
      expect(idx.lines.length).toBe(51);
    }
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

  it("provisional v0.1 admits Terra medium and Luna medium; candidates stay refused", () => {
    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.1";
    expect(admitModelEffort("gpt-6.1-terra", "medium", "operational").admitted).toBe(
      true,
    );
    expect(admitModelEffort("gpt-6-luna", "medium", "operational").admitted).toBe(
      true,
    );
    expect(admitModelEffort("gpt-6.1-terra", "high", "operational").admitted).toBe(
      false,
    );
    expect(admitModelEffort("gpt-6-luna", "low", "operational").admitted).toBe(false);
    expect(admitModelEffort("gpt-6-luna", "high", "operational").admitted).toBe(false);
  });

  it("legacy_sol policy refuses Luna/Terra operational couples", () => {
    process.env.SFIA_COG_PROVISIONAL_POLICY = "legacy_sol";
    expect(admitModelEffort("gpt-6-luna", "medium", "operational").admitted).toBe(
      false,
    );
    expect(admitModelEffort("gpt-6.1-terra", "medium", "operational").admitted).toBe(
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

describe("ML5 E02 — resolveAdmittedResource", () => {
  const prevMode = process.env.SFIA_COGNITIVE_ADMISSION_MODE;

  afterEach(() => {
    if (prevMode === undefined) delete process.env.SFIA_COGNITIVE_ADMISSION_MODE;
    else process.env.SFIA_COGNITIVE_ADMISSION_MODE = prevMode;
  });

  it("provisional v0.1 admits Luna medium without Sol fallback", () => {
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "operational";
    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.1";
    const r = resolveAdmittedResource({ modelId: "gpt-6-luna", effort: "medium" });
    expect(r.modelId).toBe("gpt-6-luna");
    expect(r.effort).toBe("medium");
    expect(r.reasonCodes).toContain("RESOURCE_ADMITTED_OPERATIONAL");
  });

  it("provisional candidate Luna low preserves effort via Sol historical path", () => {
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "operational";
    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.1";
    const r = resolveAdmittedResource({ modelId: "gpt-6-luna", effort: "low" });
    // Luna low candidate → same-model downgrade none admitted at low → Sol@low.
    expect(r.modelId).toBe("gpt-6.2-sol");
    expect(r.effort).toBe("low");
    expect(r.reasonCodes).toContain("RESOURCE_REFUSED_PROVISIONAL_CANDIDATE_NOT_ADMITTED");
    expect(r.reasonCodes).toContain("RESOURCE_FALLBACK_SOL_SAME_EFFORT");
  });

  it("calibration admits Luna operational couple", () => {
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "calibration";
    const r = resolveAdmittedResource({ modelId: "gpt-6-luna", effort: "low" });
    expect(r.modelId).toBe("gpt-6-luna");
    expect(r.effort).toBe("low");
    expect(r.reasonCodes).toContain("RESOURCE_ADMITTED_CALIBRATION");
  });

  it("downgrades Sol xhigh to high before Sol medium default", () => {
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "operational";
    const r = resolveAdmittedResource({ modelId: "gpt-6.2-sol", effort: "xhigh" });
    expect(r.modelId).toBe("gpt-6.2-sol");
    expect(r.effort).toBe("high");
    expect(r.reasonCodes).toContain("RESOURCE_REFUSED_SOL_EFFORT_NOT_OPERATIONAL_BAND");
    expect(r.reasonCodes).toContain("RESOURCE_FALLBACK_EFFORT_DOWNGRADE");
    expect(r.reasonCodes).toContain("REQUESTED_EFFORT_xhigh");
    expect(r.reasonCodes).not.toContain("RESOURCE_FALLBACK_OPERATIONAL_DEFAULT");
  });

  it("buildCognitivePolicy propagates admission reason codes", () => {
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "operational";
    const p = buildCognitivePolicy("test", "TEST_BOUNDARY", {
      modelHint: "gpt-6.2-sol",
      effortHint: "max",
    });
    expect(p.modelRequested).toBe("gpt-6.2-sol");
    expect(p.effortRequested).toBe("high");
    expect(p.effortBudgetBand).toBe("high");
    expect(p.reasonCodes.some((c) => c.startsWith("RESOURCE_REFUSED_"))).toBe(true);
    expect(p.reasonCodes).toContain("RESOURCE_FALLBACK_EFFORT_DOWNGRADE");
  });

  it("preserves admitted provider effort (xhigh) distinct from budget band", () => {
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "calibration";
    const p = buildCognitivePolicy("calibrate", "TEST_BOUNDARY", {
      modelHint: "gpt-6-luna",
      effortHint: "xhigh",
    });
    expect(p.modelRequested).toBe("gpt-6-luna");
    expect(p.effortRequested).toBe("xhigh");
    expect(p.effortBudgetBand).toBe("high");
    expect(p.reasonCodes).toContain("EFFORT_BUDGET_BAND_high");
  });

  it("preserves admitted none effort without collapsing to low for the API", () => {
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "calibration";
    const p = buildCognitivePolicy("calibrate", "TEST_BOUNDARY", {
      modelHint: "gpt-6-luna",
      effortHint: "none",
    });
    expect(p.effortRequested).toBe("none");
    expect(p.effortBudgetBand).toBe("low");
  });
});

describe("ML5 S3 — resolveContinuityCognitivePolicy", () => {
  const prevMode = process.env.SFIA_COGNITIVE_ADMISSION_MODE;

  afterEach(() => {
    if (prevMode === undefined) delete process.env.SFIA_COGNITIVE_ADMISSION_MODE;
    else process.env.SFIA_COGNITIVE_ADMISSION_MODE = prevMode;
  });

  it("admits Luna → Terra model change under calibration", () => {
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "calibration";
    const p = resolveContinuityCognitivePolicy({
      seed: "continue",
      overrideType: "TEST_BOUNDARY",
      proposal: { modelId: "gpt-6.1-terra", effort: "medium" },
      held: { modelId: "gpt-6-luna", effort: "medium" },
    });
    expect(p.modelRequested).toBe("gpt-6.1-terra");
    expect(p.effortRequested).toBe("medium");
    expect(p.reasonCodes).toContain("RESOURCE_CONTINUITY_MODEL_CHANGE");
  });

  it("admits Terra → Sol model change under calibration", () => {
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "calibration";
    const p = resolveContinuityCognitivePolicy({
      seed: "continue",
      overrideType: "TEST_BOUNDARY",
      proposal: { modelId: "gpt-6.2-sol", effort: "high" },
      held: { modelId: "gpt-6.1-terra", effort: "medium" },
    });
    expect(p.modelRequested).toBe("gpt-6.2-sol");
    expect(p.effortRequested).toBe("high");
    expect(p.reasonCodes).toContain("RESOURCE_CONTINUITY_MODEL_CHANGE");
  });

  it("descalades Sol high → Luna medium under calibration", () => {
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "calibration";
    const p = resolveContinuityCognitivePolicy({
      seed: "restitution",
      overrideType: "TEST_BOUNDARY",
      proposal: { modelId: "gpt-6-luna", effort: "medium" },
      held: { modelId: "gpt-6.2-sol", effort: "high" },
    });
    expect(p.modelRequested).toBe("gpt-6-luna");
    expect(p.effortRequested).toBe("medium");
  });

  it("holds model when proposal is absent", () => {
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "calibration";
    const p = resolveContinuityCognitivePolicy({
      seed: "hold",
      overrideType: "TEST_BOUNDARY",
      proposal: null,
      held: { modelId: "gpt-6.1-terra", effort: "high" },
    });
    expect(p.modelRequested).toBe("gpt-6.1-terra");
    expect(p.effortRequested).toBe("high");
    expect(p.reasonCodes).toContain("RESOURCE_CONTINUITY_HOLD");
  });

  it("changes effort independently while holding model", () => {
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "calibration";
    const p = resolveContinuityCognitivePolicy({
      seed: "effort",
      overrideType: "TEST_BOUNDARY",
      proposal: { effort: "xhigh" },
      held: { modelId: "gpt-6.1-terra", effort: "medium" },
    });
    expect(p.modelRequested).toBe("gpt-6.1-terra");
    expect(p.effortRequested).toBe("xhigh");
    expect(p.effortBudgetBand).toBe("high");
    expect(p.reasonCodes).toContain("RESOURCE_CONTINUITY_EFFORT_CHANGE");
  });

  it("refuses provisional candidate Luna high and holds Sol", () => {
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "operational";
    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.1";
    const p = resolveContinuityCognitivePolicy({
      seed: "refuse",
      overrideType: "TEST_BOUNDARY",
      proposal: { modelId: "gpt-6-luna", effort: "high" },
      held: { modelId: "gpt-6.2-sol", effort: "medium" },
    });
    expect(p.modelRequested).toBe("gpt-6.2-sol");
    expect(p.effortRequested).toBe("medium");
    expect(p.reasonCodes).toContain("RESOURCE_CONTINUITY_HOLD_AFTER_REFUSAL");
    expect(p.reasonCodes).toContain(
      "RESOURCE_REFUSED_PROVISIONAL_CANDIDATE_NOT_ADMITTED",
    );
  });
});