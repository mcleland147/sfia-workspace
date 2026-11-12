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

  it("SEM: length may raise ceilings; short messages keep tools (Lot D5)", () => {
    const s = buildCognitivePolicy("C'est quoi un sas ?", "TEST_BOUNDARY");
    expect(s.profile).toBe("analyse");
    expect(s.effortRequested).toBe("medium");
    expect(s.toolAllowlist.length).toBeGreaterThan(0);
    expect(s.budgets.maxD4ToolCalls).toBeGreaterThan(0);

    const mid =
      "Voici un énoncé volontairement plus long afin d'exercer le budget analyse sans aucun verbe métier déclencheur, uniquement par longueur de texte utilisateur. ";
    const a = buildCognitivePolicy(mid, "TEST_BOUNDARY");
    expect(a.profile).toBe("analyse");
    expect(a.effortRequested).toBe("medium");
    expect(a.toolAllowlist.length).toBeGreaterThan(0);

    const long = "x".repeat(601);
    const i = buildCognitivePolicy(long, "TEST_BOUNDARY");
    expect(i.profile).toBe("investigation");
    expect(i.effortRequested).toBe("high");
  });

  it("TEST_BOUNDARY budgets stay artificial and distinct from OPERATIONAL_PROVISIONAL", () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
    const mid =
      "Voici un énoncé volontairement plus long afin d'exercer le budget analyse sans aucun verbe métier déclencheur, uniquement par longueur de texte utilisateur. ";
    const t = buildCognitivePolicy(mid);
    expect(t.profileType).toBe("TEST_BOUNDARY");
    expect(t.budgets.wallClockMs).toBe(TEST_BOUNDARY_BUDGETS.analyse.wallClockMs);
    expect(t.budgets.maxD4CharsReturned).toBe(32_000);

    const o = buildCognitivePolicy(mid, "OPERATIONAL_PROVISIONAL");
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
    const p = buildCognitivePolicy("x".repeat(601), "OPERATIONAL_PROVISIONAL");
    expect(maxTurnsForPolicy(p)).toBe(p.budgets.maxProviderCalls);
    expect(maxTurnsForPolicy(p)).toBeGreaterThan(12);
    // Lot D5: short messages keep analyse tools — never tool-less maxTurns=1.
    const s = buildCognitivePolicy("Merci", "TEST_BOUNDARY");
    expect(s.profile).toBe("analyse");
    expect(s.toolAllowlist.length).toBeGreaterThan(0);
    expect(maxTurnsForPolicy(s)).toBeGreaterThanOrEqual(2);
  });
});
