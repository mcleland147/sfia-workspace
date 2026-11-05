import { describe, expect, it, afterEach } from "vitest";
import {
  buildCognitivePolicy,
  TEST_BOUNDARY_BUDGETS,
  OPERATIONAL_BUDGETS_PROVISIONAL,
  maxTurnsForPolicy,
  resolveProfileType,
} from "@/domains/conversation/cognitive-policy";
import { StudioError } from "@/lib/http-errors";

describe("cognitive policy — TEST vs OPERATIONAL separation", () => {
  const prev = process.env.SFIA_COG_PROFILE_TYPE;
  const prevLane = process.env.STUDIO_LANE;
  afterEach(() => {
    if (prev === undefined) delete process.env.SFIA_COG_PROFILE_TYPE;
    else process.env.SFIA_COG_PROFILE_TYPE = prev;
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
  });

  it("qualifies simple vs analyse vs investigation without nested LLM", () => {
    const s = buildCognitivePolicy("C'est quoi un sas ?", "TEST_BOUNDARY");
    expect(s.profile).toBe("simple");
    expect(s.effortRequested).toBe("low");
    expect(s.toolAllowlist).toEqual([]);

    const a = buildCognitivePolicy(
      "Compare les options A et B pour l'architecture distribuée",
      "TEST_BOUNDARY",
    );
    expect(a.profile).toBe("analyse");
    expect(a.effortRequested).toBe("medium");
    expect(a.toolAllowlist.length).toBeGreaterThan(0);

    const i = buildCognitivePolicy(
      "Investigue les contradictions entre les sources et vérifie les versions périmées",
      "TEST_BOUNDARY",
    );
    expect(i.profile).toBe("investigation");
    expect(i.effortRequested).toBe("high");
  });

  it("TEST_BOUNDARY budgets stay artificial and distinct from OPERATIONAL_PROVISIONAL", () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
    const t = buildCognitivePolicy("Compare options A et B");
    expect(t.profileType).toBe("TEST_BOUNDARY");
    expect(t.budgets.wallClockMs).toBe(TEST_BOUNDARY_BUDGETS.analyse.wallClockMs);
    expect(t.budgets.maxD4CharsReturned).toBe(32_000);

    const o = buildCognitivePolicy("Compare options A et B", "OPERATIONAL_PROVISIONAL");
    expect(o.profileType).toBe("OPERATIONAL_PROVISIONAL");
    expect(o.budgets.wallClockMs).toBe(OPERATIONAL_BUDGETS_PROVISIONAL.analyse.wallClockMs);
    expect(o.budgets.wallClockMs).toBeGreaterThan(TEST_BOUNDARY_BUDGETS.analyse.wallClockMs);
    expect(o.budgets.maxD4CharsReturned).toBeGreaterThan(32_000);
  });

  it("FIX-BUD-01: absent type defaults TEST_BOUNDARY in DEV; fails closed in protected lane", () => {
    process.env.STUDIO_LANE = "DEV";
    delete process.env.SFIA_COG_PROFILE_TYPE;
    expect(resolveProfileType()).toBe("TEST_BOUNDARY");

    process.env.STUDIO_LANE = "RECETTE";
    expect(() => resolveProfileType()).toThrow(StudioError);

    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_COG_PROFILE_TYPE = "OPERATIONAL_PROVISIONAL";
    expect(resolveProfileType()).toBe("OPERATIONAL_PROVISIONAL");

    process.env.STUDIO_LANE = "RECETTE";
    expect(() => resolveProfileType()).toThrow(StudioError);

    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_COG_PROFILE_TYPE = "OPERATIONAL_VALIDATED";
    expect(() => resolveProfileType()).toThrow(StudioError);
  });

  it("maxTurns follows policy budget without silent hard cap of 12", () => {
    const p = buildCognitivePolicy("Investigue le corpus projet", "OPERATIONAL_PROVISIONAL");
    expect(maxTurnsForPolicy(p)).toBe(p.budgets.maxProviderCalls);
    expect(maxTurnsForPolicy(p)).toBeGreaterThan(12);
    const s = buildCognitivePolicy("Merci", "TEST_BOUNDARY");
    expect(maxTurnsForPolicy(s)).toBe(1);
  });
});
