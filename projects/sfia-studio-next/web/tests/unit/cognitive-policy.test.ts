import { describe, expect, it, afterEach } from "vitest";
import {
  buildCognitivePolicy,
  TEST_BOUNDARY_BUDGETS,
  OPERATIONAL_BUDGETS_PROVISIONAL,
  maxTurnsForPolicy,
} from "@/domains/conversation/cognitive-policy";

describe("cognitive policy — TEST vs OPERATIONAL separation", () => {
  const prev = process.env.SFIA_COG_PROFILE_TYPE;
  afterEach(() => {
    if (prev === undefined) delete process.env.SFIA_COG_PROFILE_TYPE;
    else process.env.SFIA_COG_PROFILE_TYPE = prev;
  });

  it("qualifies simple vs analyse vs investigation without nested LLM", () => {
    const s = buildCognitivePolicy("C'est quoi un sas ?", "OPERATIONAL");
    expect(s.profile).toBe("simple");
    expect(s.effortRequested).toBe("low");
    expect(s.toolAllowlist).toEqual([]);

    const a = buildCognitivePolicy(
      "Compare les options A et B pour l'architecture distribuée",
      "OPERATIONAL",
    );
    expect(a.profile).toBe("analyse");
    expect(a.effortRequested).toBe("medium");
    expect(a.toolAllowlist.length).toBeGreaterThan(0);

    const i = buildCognitivePolicy(
      "Investigue les contradictions entre les sources et vérifie les versions périmées",
      "OPERATIONAL",
    );
    expect(i.profile).toBe("investigation");
    expect(i.effortRequested).toBe("high");
  });

  it("TEST_BOUNDARY budgets stay artificial and distinct from OPERATIONAL", () => {
    process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
    const t = buildCognitivePolicy("Compare options A et B");
    expect(t.profileType).toBe("TEST_BOUNDARY");
    expect(t.budgets.wallClockMs).toBe(TEST_BOUNDARY_BUDGETS.analyse.wallClockMs);
    expect(t.budgets.maxD4CharsReturned).toBe(32_000);

    const o = buildCognitivePolicy("Compare options A et B", "OPERATIONAL");
    expect(o.profileType).toBe("OPERATIONAL");
    expect(o.budgets.wallClockMs).toBe(OPERATIONAL_BUDGETS_PROVISIONAL.analyse.wallClockMs);
    expect(o.budgets.wallClockMs).toBeGreaterThan(TEST_BOUNDARY_BUDGETS.analyse.wallClockMs);
    expect(o.budgets.maxD4CharsReturned).toBeGreaterThan(32_000);
  });

  it("maxTurns remains finite and >1 for tool-capable profiles", () => {
    const p = buildCognitivePolicy("Investigue le corpus projet", "OPERATIONAL");
    expect(maxTurnsForPolicy(p)).toBeGreaterThan(1);
    const s = buildCognitivePolicy("Merci", "OPERATIONAL");
    expect(maxTurnsForPolicy(s)).toBe(1);
  });
});
