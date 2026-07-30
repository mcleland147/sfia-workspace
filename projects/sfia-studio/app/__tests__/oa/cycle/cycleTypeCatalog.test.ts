/**
 * V3.1-D1 — Cycle Type Catalog contract tests.
 * @vitest-environment node
 */
import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  ADOPTED_CYCLE_TYPE_IDS,
  CAPITALIZATION_CYCLE_TYPE_ID,
  CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH,
  CKC_PILOT_CADRAGE_PATH,
  CKC_PILOT_CONCEPTION_PATH,
  CKC_PILOT_QA_VALIDATION_PATH,
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_VERSION,
  getCycleTypeById,
  isKnownCycleTypeId,
  listCycleTypes,
  validateCycleTypeCatalog,
  type CycleTypeCatalog,
  type CycleTypeDefinition,
} from "@/lib/oa/cycle";

const EXPECTED_IDS = [
  "cyc:framing",
  "cyc:functional-design",
  "cyc:functional-architecture",
  "cyc:ux-ui",
  "cyc:backlog",
  "cyc:technical-architecture",
  "cyc:integration-devops",
  "cyc:delivery",
  "cyc:qa-validation",
  "cyc:security",
  "cyc:release",
  "cyc:observability",
  "cyc:pr-readiness",
  "cyc:post-merge",
  "cyc:capitalization",
] as const;

const DETAILED_IDS = new Set([
  "cyc:framing",
  "cyc:functional-design",
  "cyc:technical-architecture",
  "cyc:qa-validation",
]);

const WORKSPACE_ROOT = path.resolve(__dirname, "../../../../../../");

function cloneCatalog(
  mutate: (entries: CycleTypeDefinition[]) => CycleTypeDefinition[],
): CycleTypeCatalog {
  const entries = mutate(
    CYCLE_TYPE_CATALOG.entries.map((entry) => ({
      ...entry,
      ckc: { ...entry.ckc },
      aliases: [...entry.aliases],
    })),
  );
  return { version: CYCLE_TYPE_CATALOG_VERSION, entries };
}

describe("V3.1-D1 cycle type catalog", () => {
  it("exposes catalog version and exactly fifteen entries", () => {
    expect(CYCLE_TYPE_CATALOG.version).toBe("0.1.0-v3.1-d1");
    expect(CYCLE_TYPE_CATALOG.entries).toHaveLength(15);
    expect(ADOPTED_CYCLE_TYPE_IDS).toEqual([...EXPECTED_IDS]);
  });

  it("lists exact adopted cycleTypeId set in order", () => {
    expect(listCycleTypes().map((e) => e.cycleTypeId)).toEqual([
      ...EXPECTED_IDS,
    ]);
  });

  it("enforces uniqueness of ids, canonical keys, numbers and orders", () => {
    const ids = CYCLE_TYPE_CATALOG.entries.map((e) => e.cycleTypeId);
    const keys = CYCLE_TYPE_CATALOG.entries.map((e) => e.canonicalKey);
    const numbers = CYCLE_TYPE_CATALOG.entries.map((e) => e.methodCycleNumber);
    const orders = CYCLE_TYPE_CATALOG.entries.map((e) => e.displayOrder);
    expect(new Set(ids).size).toBe(15);
    expect(new Set(keys).size).toBe(15);
    expect(new Set(numbers).size).toBe(15);
    expect(new Set(orders).size).toBe(15);
    expect(numbers.sort((a, b) => a - b)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
    expect(orders.sort((a, b) => a - b)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
  });

  it("uses OA cyc: identifiers and preserves cyc:capitalization", () => {
    for (const id of EXPECTED_IDS) {
      expect(id.startsWith("cyc:")).toBe(true);
      expect(isKnownCycleTypeId(id)).toBe(true);
    }
    expect(CAPITALIZATION_CYCLE_TYPE_ID).toBe("cyc:capitalization");
    expect(getCycleTypeById("cyc:capitalization")?.cycleTypeId).toBe(
      "cyc:capitalization",
    );
  });

  it("requires non-empty french labels/descriptions and active lifecycle", () => {
    for (const entry of CYCLE_TYPE_CATALOG.entries) {
      expect(entry.label.trim().length).toBeGreaterThan(0);
      expect(entry.shortDescription.trim().length).toBeGreaterThan(0);
      expect(entry.methodReference.trim().length).toBeGreaterThan(0);
      expect(entry.lifecycleStatus).toBe("active");
    }
  });

  it("maps mandatory CKC for all fifteen with executionAuthority false", () => {
    for (const entry of CYCLE_TYPE_CATALOG.entries) {
      expect(entry.ckc.mandatory).toBe(true);
      expect(entry.ckc.executionAuthority).toBe(false);
      expect(entry.ckc.doctrineStatus).toBe("method-candidate");
      expect(entry.ckc.unavailableBehavior).toBe("fail-closed");
      expect(entry.ckc.primaryReference.length).toBeGreaterThan(0);
    }
  });

  it("has exactly four detailed and eleven synthetic CKC mappings", () => {
    const detailed = CYCLE_TYPE_CATALOG.entries.filter(
      (e) => e.ckc.primaryLevel === "detailed",
    );
    const synthetic = CYCLE_TYPE_CATALOG.entries.filter(
      (e) => e.ckc.primaryLevel === "synthetic",
    );
    expect(detailed).toHaveLength(4);
    expect(synthetic).toHaveLength(11);
    expect(detailed.map((e) => e.cycleTypeId).sort()).toEqual(
      [...DETAILED_IDS].sort(),
    );
  });

  it("requires synthetic fallback for detailed pilots", () => {
    for (const entry of CYCLE_TYPE_CATALOG.entries) {
      if (entry.ckc.primaryLevel === "detailed") {
        expect(entry.ckc.fallbackPolicy).toBe("synthetic_map");
        expect(entry.ckc.fallbackReference).toBe(CKC_SYNTHETIC_MAP_PATH);
      } else {
        expect(entry.ckc.primaryReference).toBe(CKC_SYNTHETIC_MAP_PATH);
      }
    }
  });

  it("uses canonical Git CKC paths for pilots and synthetic map", () => {
    expect(getCycleTypeById("cyc:framing")?.ckc.primaryReference).toBe(
      CKC_PILOT_CADRAGE_PATH,
    );
    expect(
      getCycleTypeById("cyc:functional-design")?.ckc.primaryReference,
    ).toBe(CKC_PILOT_CONCEPTION_PATH);
    expect(
      getCycleTypeById("cyc:technical-architecture")?.ckc.primaryReference,
    ).toBe(CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH);
    expect(getCycleTypeById("cyc:qa-validation")?.ckc.primaryReference).toBe(
      CKC_PILOT_QA_VALIDATION_PATH,
    );

    for (const rel of [
      CKC_SYNTHETIC_MAP_PATH,
      CKC_PILOT_CADRAGE_PATH,
      CKC_PILOT_CONCEPTION_PATH,
      CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH,
      CKC_PILOT_QA_VALIDATION_PATH,
    ]) {
      expect(existsSync(path.join(WORKSPACE_ROOT, rel))).toBe(true);
    }
  });

  it("looks up by cycleTypeId only — never label or canonicalKey", () => {
    expect(getCycleTypeById("cyc:delivery")?.label).toBe(
      "Delivery / implémentation",
    );
    expect(getCycleTypeById("delivery-implementation")).toBeUndefined();
    expect(getCycleTypeById("Delivery / implémentation")).toBeUndefined();
    expect(getCycleTypeById("cadrage")).toBeUndefined();
    expect(isKnownCycleTypeId("unknown")).toBe(false);
    expect(getCycleTypeById("cyc:unknown")).toBeUndefined();
  });

  it("returns a non-mutating list copy", () => {
    const listed = listCycleTypes();
    listed.pop();
    expect(listCycleTypes()).toHaveLength(15);
    expect(CYCLE_TYPE_CATALOG.entries).toHaveLength(15);
  });

  it("contains no profile, gate or morris decision fields", () => {
    for (const entry of CYCLE_TYPE_CATALOG.entries) {
      const keys = Object.keys(entry);
      expect(keys).not.toContain("profile");
      expect(keys).not.toContain("recommendedProfile");
      expect(keys).not.toContain("gate");
      expect(keys).not.toContain("isMorrisDecision");
      expect(keys).not.toContain("Light");
      expect(entry.ckc.executionAuthority).toBe(false);
    }
  });

  it("passes production catalog validation", () => {
    expect(validateCycleTypeCatalog(CYCLE_TYPE_CATALOG)).toEqual([]);
  });

  it("starts with empty aliases (controlled aliases supported, none required)", () => {
    for (const entry of CYCLE_TYPE_CATALOG.entries) {
      expect(entry.aliases).toEqual([]);
    }
  });
});

describe("V3.1-D1 cycle type catalog negatives", () => {
  it("rejects duplicate cycleTypeId", () => {
    const catalog = cloneCatalog((entries) => {
      entries[1] = { ...entries[1], cycleTypeId: entries[0].cycleTypeId };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some((i) => i.code === "ID_DUPLICATE"),
    ).toBe(true);
  });

  it("rejects duplicate displayOrder", () => {
    const catalog = cloneCatalog((entries) => {
      entries[1] = { ...entries[1], displayOrder: entries[0].displayOrder };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) => i.code === "DISPLAY_ORDER_DUPLICATE",
      ),
    ).toBe(true);
  });

  it("rejects duplicate methodCycleNumber", () => {
    const catalog = cloneCatalog((entries) => {
      entries[1] = {
        ...entries[1],
        methodCycleNumber: entries[0].methodCycleNumber,
      };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) => i.code === "METHOD_NUMBER_DUPLICATE",
      ),
    ).toBe(true);
  });

  it("rejects invalid OA pattern", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = { ...entries[0], cycleTypeId: "not-an-oa-id" };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) => i.code === "ID_PATTERN" || i.code === "ID_PREFIX",
      ),
    ).toBe(true);
  });

  it("rejects missing capitalization id", () => {
    const catalog = cloneCatalog((entries) =>
      entries.filter((e) => e.cycleTypeId !== "cyc:capitalization"),
    );
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) => i.code === "CAPITALIZATION_MISSING" || i.code === "COUNT",
      ),
    ).toBe(true);
  });

  it("rejects missing CKC mapping", () => {
    const catalog = cloneCatalog((entries) => {
      const { ckc: _ckc, ...rest } = entries[0];
      entries[0] = rest as CycleTypeDefinition;
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some((i) => i.code === "CKC_MISSING"),
    ).toBe(true);
  });

  it("rejects executionAuthority true", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: {
          ...entries[0].ckc,
          executionAuthority: true as unknown as false,
        },
      };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) => i.code === "CKC_EXECUTION_AUTHORITY",
      ),
    ).toBe(true);
  });

  it("rejects detailed without synthetic fallback", () => {
    const catalog = cloneCatalog((entries) => {
      const framing = entries.find((e) => e.cycleTypeId === "cyc:framing")!;
      const idx = entries.indexOf(framing);
      entries[idx] = {
        ...framing,
        ckc: {
          ...framing.ckc,
          fallbackPolicy: "none",
          fallbackReference: undefined,
        },
      };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) => i.code === "CKC_DETAILED_FALLBACK",
      ),
    ).toBe(true);
  });

  it("rejects synthetic without synthetic map reference", () => {
    const catalog = cloneCatalog((entries) => {
      const entry = entries.find(
        (e) => e.cycleTypeId === "cyc:delivery",
      )!;
      const idx = entries.indexOf(entry);
      entries[idx] = {
        ...entry,
        ckc: {
          ...entry.ckc,
          primaryReference: "method/invented.md",
        },
      };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) => i.code === "CKC_SYNTHETIC_REF",
      ),
    ).toBe(true);
  });

  it("rejects ambiguous aliases", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = { ...entries[0], aliases: ["alias:dup", "alias:dup"] };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) => i.code === "ALIAS_AMBIGUOUS",
      ),
    ).toBe(true);
  });
});

/**
 * QA Critical reinforcement (V3.1-D1 cycle 9).
 * Uses local clones only — never mutates production catalog.
 * Failures against validateCycleTypeCatalog indicate validator gaps (not silent PASS).
 */
describe("V3.1-D1 QA reinforcement — production data & immutability", () => {
  it("keeps all fifteen production entries lifecycleStatus active", () => {
    for (const entry of CYCLE_TYPE_CATALOG.entries) {
      expect(entry.lifecycleStatus).toBe("active");
    }
  });

  it("freezes catalog, entries, each entry, each ckc and each aliases", () => {
    expect(Object.isFrozen(CYCLE_TYPE_CATALOG)).toBe(true);
    expect(Object.isFrozen(CYCLE_TYPE_CATALOG.entries)).toBe(true);
    for (const entry of CYCLE_TYPE_CATALOG.entries) {
      expect(Object.isFrozen(entry)).toBe(true);
      expect(Object.isFrozen(entry.ckc)).toBe(true);
      expect(Object.isFrozen(entry.aliases)).toBe(true);
    }
  });

  it("rejects deep mutation attempts against the registry", () => {
    const first = CYCLE_TYPE_CATALOG.entries[0];
    const originalId = first.cycleTypeId;
    const originalLabel = first.label;
    const originalPrimary = first.ckc.primaryReference;
    expect(() => {
      (CYCLE_TYPE_CATALOG as { version: string }).version = "tampered";
    }).toThrow();
    expect(() => {
      (first as { label: string }).label = "TAMPERED";
    }).toThrow();
    expect(() => {
      (first.ckc as { primaryReference: string }).primaryReference =
        "method/tampered.md";
    }).toThrow();
    expect(() => {
      (first.aliases as string[]).push("alias:tampered");
    }).toThrow();
    expect(CYCLE_TYPE_CATALOG.version).toBe("0.1.0-v3.1-d1");
    expect(first.cycleTypeId).toBe(originalId);
    expect(first.label).toBe(originalLabel);
    expect(first.ckc.primaryReference).toBe(originalPrimary);
    expect(first.aliases).toEqual([]);
    expect(getCycleTypeById(originalId)?.label).toBe(originalLabel);
  });

  it("binds methodReference to §4.1 … §4.15 in method cycle order", () => {
    for (const entry of CYCLE_TYPE_CATALOG.entries) {
      expect(entry.methodReference).toContain(
        `§4.${entry.methodCycleNumber}`,
      );
      expect(entry.methodReference).toContain(
        "sfia-v2.5-project-cycles-method-candidate.md",
      );
    }
  });

  it("confirms Git paths exist for four detailed pilots and synthetic map", () => {
    for (const rel of [
      CKC_SYNTHETIC_MAP_PATH,
      CKC_PILOT_CADRAGE_PATH,
      CKC_PILOT_CONCEPTION_PATH,
      CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH,
      CKC_PILOT_QA_VALIDATION_PATH,
    ]) {
      expect(existsSync(path.join(WORKSPACE_ROOT, rel))).toBe(true);
    }
  });

  it("uses exact catalog version 0.1.0-v3.1-d1", () => {
    expect(CYCLE_TYPE_CATALOG_VERSION).toBe("0.1.0-v3.1-d1");
    expect(CYCLE_TYPE_CATALOG.version).toBe("0.1.0-v3.1-d1");
  });

  it("keeps synthetic fallbackPolicy none without fallbackReference", () => {
    for (const entry of CYCLE_TYPE_CATALOG.entries) {
      if (entry.ckc.primaryLevel === "synthetic") {
        expect(entry.ckc.fallbackPolicy).toBe("none");
        expect(entry.ckc.fallbackReference).toBeUndefined();
      }
    }
  });
});

describe("V3.1-D1 QA reinforcement — validator negatives & edges", () => {
  it("detects invalid lifecycleStatus", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        lifecycleStatus: "bogus" as CycleTypeDefinition["lifecycleStatus"],
      };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) =>
          i.code === "LIFECYCLE_STATUS_INVALID" ||
          i.message.toLowerCase().includes("lifecycle"),
      ),
    ).toBe(true);
  });

  it("detects doctrineStatus other than method-candidate", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: {
          ...entries[0].ckc,
          doctrineStatus: "baseline" as "method-candidate",
        },
      };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) =>
          i.code === "CKC_DOCTRINE_STATUS" ||
          i.message.toLowerCase().includes("doctrine"),
      ),
    ).toBe(true);
  });

  it("detects unavailableBehavior other than fail-closed", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: {
          ...entries[0].ckc,
          unavailableBehavior: "soft-fail" as "fail-closed",
        },
      };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) =>
          i.code === "CKC_UNAVAILABLE_BEHAVIOR" ||
          i.message.toLowerCase().includes("fail-closed") ||
          i.message.toLowerCase().includes("unavailable"),
      ),
    ).toBe(true);
  });

  it("detects synthetic mapping with incoherent fallbackPolicy", () => {
    const catalog = cloneCatalog((entries) => {
      const entry = entries.find((e) => e.cycleTypeId === "cyc:delivery")!;
      const idx = entries.indexOf(entry);
      entries[idx] = {
        ...entry,
        ckc: {
          ...entry.ckc,
          fallbackPolicy: "synthetic_map",
        },
      };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) =>
          i.code === "CKC_SYNTHETIC_FALLBACK_POLICY" ||
          i.message.toLowerCase().includes("synthetic") &&
            i.message.toLowerCase().includes("fallback"),
      ),
    ).toBe(true);
  });

  it("detects synthetic mapping with contradictory fallbackReference", () => {
    const catalog = cloneCatalog((entries) => {
      const entry = entries.find((e) => e.cycleTypeId === "cyc:delivery")!;
      const idx = entries.indexOf(entry);
      entries[idx] = {
        ...entry,
        ckc: {
          ...entry.ckc,
          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
        },
      };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) =>
          i.code === "CKC_SYNTHETIC_FALLBACK_REF" ||
          (i.message.toLowerCase().includes("fallback") &&
            i.message.toLowerCase().includes("synthetic")),
      ),
    ).toBe(true);
  });

  it("detects methodCycleNumber unique but outside 1…15", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = { ...entries[0], methodCycleNumber: 16 };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) =>
          i.code === "METHOD_NUMBER_RANGE" ||
          i.code === "METHOD_NUMBER_SET" ||
          i.message.toLowerCase().includes("methodcyclenumber"),
      ),
    ).toBe(true);
  });

  it("detects displayOrder unique but outside 1…15", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = { ...entries[0], displayOrder: 0 };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) =>
          i.code === "DISPLAY_ORDER_RANGE" ||
          i.code === "DISPLAY_ORDER_SET" ||
          i.message.toLowerCase().includes("displayorder"),
      ),
    ).toBe(true);
  });

  it("detects incomplete methodCycleNumber set (unique but not exact 1…15)", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = { ...entries[0], methodCycleNumber: 16 };
      return entries;
    });
    // Unique still holds for 2..15 + 16; exact set 1..15 must fail.
    const issues = validateCycleTypeCatalog(catalog);
    expect(
      issues.some(
        (i) =>
          i.code === "METHOD_NUMBER_SET" ||
          i.code === "METHOD_NUMBER_RANGE" ||
          i.message.includes("1") && i.message.includes("15"),
      ),
    ).toBe(true);
  });

  it("detects incomplete displayOrder set (unique but not exact 1…15)", () => {
    const catalog = cloneCatalog((entries) => {
      entries[14] = { ...entries[14], displayOrder: 99 };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) =>
          i.code === "DISPLAY_ORDER_SET" ||
          i.code === "DISPLAY_ORDER_RANGE" ||
          i.message.toLowerCase().includes("displayorder"),
      ),
    ).toBe(true);
  });

  it("detects alias collision between two entries", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = { ...entries[0], aliases: ["alias:shared"] };
      entries[1] = { ...entries[1], aliases: ["alias:shared"] };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) => i.code === "ALIAS_AMBIGUOUS",
      ),
    ).toBe(true);
  });

  it("detects alias equal to another entry cycleTypeId", () => {
    const catalog = cloneCatalog((entries) => {
      entries[1] = { ...entries[1], aliases: [entries[0].cycleTypeId] };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) =>
          i.code === "ALIAS_AMBIGUOUS" ||
          i.code === "ALIAS_COLLIDES_WITH_ID" ||
          i.message.toLowerCase().includes("alias"),
      ),
    ).toBe(true);
  });

  it("detects incorrect catalog version", () => {
    const catalog = {
      version: "9.9.9-wrong" as typeof CYCLE_TYPE_CATALOG_VERSION,
      entries: CYCLE_TYPE_CATALOG.entries.map((entry) => ({
        ...entry,
        ckc: { ...entry.ckc },
        aliases: [...entry.aliases],
      })),
    };
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) =>
          i.code === "CATALOG_VERSION" ||
          i.message.toLowerCase().includes("version"),
      ),
    ).toBe(true);
  });

  it("detects unknown primaryLevel", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: {
          ...entries[0].ckc,
          primaryLevel: "unknown" as "detailed",
        },
      };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) =>
          i.code === "CKC_PRIMARY_LEVEL" ||
          i.code === "DETAILED_COUNT" ||
          i.code === "SYNTHETIC_COUNT" ||
          i.message.toLowerCase().includes("primary"),
      ),
    ).toBe(true);
  });

  it("detects unauthorized fallbackReference on synthetic", () => {
    const catalog = cloneCatalog((entries) => {
      const entry = entries.find((e) => e.cycleTypeId === "cyc:delivery")!;
      const idx = entries.indexOf(entry);
      entries[idx] = {
        ...entry,
        ckc: {
          ...entry.ckc,
          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
        },
      };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) =>
          i.code === "CKC_SYNTHETIC_FALLBACK_REF" ||
          i.message.toLowerCase().includes("fallback"),
      ),
    ).toBe(true);
  });

  it("detects empty primaryReference", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: { ...entries[0].ckc, primaryReference: "   " },
      };
      return entries;
    });
    expect(
      validateCycleTypeCatalog(catalog).some(
        (i) => i.code === "CKC_PRIMARY_REF",
      ),
    ).toBe(true);
  });
});
