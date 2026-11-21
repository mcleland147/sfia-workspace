import { describe, expect, it } from "vitest";
import { CYCLE_TYPES } from "@/domains/pilotage/cki-resolve";
import {
  CYCLE_TYPE_LABELS,
  formatRecognizedCycleCatalogueSnippet,
  normalizeCycleType,
  tryCanonicalCycleType,
} from "@/domains/pilotage/cycle-type-normalize";

describe("E07 cycle-type normalize (LIVE → D5)", () => {
  it("maps LIVE lowercase cadrage → CADRAGE (EquipCampus root cause)", () => {
    expect(normalizeCycleType("cadrage")).toEqual({
      ok: true,
      cycleType: "CADRAGE",
      raw: "cadrage",
      via: "case",
    });
    expect(tryCanonicalCycleType("cadrage")).toBe("CADRAGE");
  });

  it("accepts Cadrage / CADRAGE / underscored case variants", () => {
    expect(tryCanonicalCycleType("Cadrage")).toBe("CADRAGE");
    expect(tryCanonicalCycleType("CADRAGE")).toBe("CADRAGE");
    expect(tryCanonicalCycleType("conception_fonctionnelle")).toBe("CONCEPTION_FONCTIONNELLE");
    expect(tryCanonicalCycleType("CONCEPTION_FONCTIONNELLE")).toBe("CONCEPTION_FONCTIONNELLE");
  });

  it("maps official labels and safe aliases without inventing types", () => {
    expect(tryCanonicalCycleType("conception fonctionnelle")).toBe("CONCEPTION_FONCTIONNELLE");
    expect(tryCanonicalCycleType("ux/ui")).toBe("UX_UI");
    expect(tryCanonicalCycleType("premier cycle de cadrage")).toBe("CADRAGE");
  });

  it("refuses unknown / empty without silent remap", () => {
    expect(normalizeCycleType("comparaison_de_solutions")).toMatchObject({
      ok: false,
      reason: "UNKNOWN",
    });
    expect(normalizeCycleType("")).toMatchObject({ ok: false, reason: "EMPTY" });
    expect(normalizeCycleType(null)).toMatchObject({ ok: false, reason: "EMPTY" });
    expect(tryCanonicalCycleType("phase métier inventée")).toBeUndefined();
  });

  it("covers every CYCLE_TYPES enum + label round-trip", () => {
    for (const t of CYCLE_TYPES) {
      expect(tryCanonicalCycleType(t)).toBe(t);
      expect(tryCanonicalCycleType(t.toLowerCase())).toBe(t);
      expect(tryCanonicalCycleType(CYCLE_TYPE_LABELS[t])).toBe(t);
    }
  });

  it("catalogue snippet lists recognized identifiers and warns against métier-as-type", () => {
    const snip = formatRecognizedCycleCatalogueSnippet().join("\n");
    expect(snip).toContain("CADRAGE");
    expect(snip).toContain("CONCEPTION_FONCTIONNELLE");
    expect(snip).toContain("identifiants canoniques");
    expect(snip).toMatch(/ne sont PAS des types de cycles/i);
    expect(CYCLE_TYPES).toHaveLength(15);
  });
});
