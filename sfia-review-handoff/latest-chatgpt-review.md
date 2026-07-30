# SFIA Studio V3.1-D1 — QA Validation Review Pack (FULL)

## Meta
- **Date/heure/fuseau :** 2026-07-30 21:10:36 CEST (+0200)
- **Cycle :** 9 — QA / validation
- **Profil :** Critical
- **Typologie :** EVOL
- **Gate :** GO QA VALIDATION SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — FIFTEEN IDS — CONTRACT INVARIANTS AND NEGATIVE TESTS — NO D2 — NO UI — NO CREATECYCLE (2026-07-30 20:52 CEST)
- **CKC QA :** pilots/04-qa-validation.md · candidate · v0.1.0 · obligatoire · executionAuthority=false

## Local Git Truth Check
- workspace / repo OK
- branche : delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime
- HEAD = origin/main = 3e8a4374405dce98866e35fb60c5c7329701f191 · 0/0
- remote Delivery absente · staged aucun
- handoff pré-cycle : a47487dcfadabfdd5df35cfc1eefb34374001016 · blob c521ba647bd8d8dd9483370d30696495d0822902

## Snapshots / hashes before-qa
| Artefact | Hash |
|----------|------|
| cycleTypeCatalog.ts | 1674243863d015411c602848404e2e41c046afa7 UNCHANGED |
| index.ts | 3daf57578e528878ef8a9298813019bb3b86af3c UNCHANGED |
| test Delivery initial | 77be87c793ebb278e63ee22f6427bdf33aa8ce89 |
| 12 | 82be657cb3b88be0ac72d41e172106a557be101b UNCHANGED |
| 13 | 3ecb0256e14662a0e8244029a1329a6afb525444 UNCHANGED |

## Stratégie
statique → baseline Delivery → renforcement QA → non-régression → classification

## Tests avant renforcement
- catalog 24/24 PASS (~0.88s)
- suite oa/cycle 72/72 PASS (~0.62s)

## Tests après renforcement
- catalog 34 PASS / 12 FAIL (46) (~0.78s)
- suite 82 PASS / 12 FAIL (94) (~0.63s)
- typecheck PASS · lint PASS · build PASS · diff --check PASS

## Réserves majeures
R-QA-01…09 — validateCycleTypeCatalog incomplet (lifecycle, doctrine, unavailableBehavior, synthetic fallback, bornes/set 1…15, alias↔id, version). Données prod conformes · freezes OK.

## QA-G2
tests automatisés présents ; suite renforcée non verte (preuves d'écart).

## QA-G3 proposé
FAIL — décision Morris attendue — PR readiness non autorisée — D2/D3 non autorisés

## Content coverage
- initial test full content : yes
- final test full content : yes
- QA test diff complete : yes
- QA report full content : yes
- modified docs complete : yes
- production catalog unchanged proof : yes
- index unchanged proof : yes
- docs 12/13 unchanged proof : yes
- coverage matrix complete : yes
- negative test evidence complete : yes
- command evidence complete : yes
- reserves classified : yes
- synthesis only : no
- review pack verdict : complete

## Git status
```
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/12-v3-cycle-recommendation-cadrage.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/13-v3-1-profile-qualification-functional-design.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/14-v3-1-cycle-type-catalog-functional-architecture.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/
```
## git diff --stat
```
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   1 +
 .../08-implementation-backlog-and-slicing.md       |  80 ++++++-----
 .../README.md                                      | 148 +++++----------------
 3 files changed, 82 insertions(+), 147 deletions(-)
```
## git diff --name-status
```
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
```

## Verdict
V3.1-D1 QA FAIL —
BLOCKING OR MAJOR CONTRACT FINDINGS —
CORRECTIVE DELIVERY REQUIRED —
PR READINESS NOT AUTHORIZED —
D2/D3 NOT AUTHORIZED

## Prochain gate
GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG — ADDRESS QA FINDINGS — PRODUCTION CONTRACT ONLY — NO D2 — NO UI — NO CREATECYCLE

---

# INITIAL TEST (before-qa) FULL
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

---

# FINAL TEST FULL

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

---

# QA TEST DIFF (before → after)

--- .tmp-sfia-review/before-qa/cycleTypeCatalog.test.ts	2026-07-30 21:07:47
+++ projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts	2026-07-30 21:10:35
@@ -359,3 +359,362 @@
     ).toBe(true);
   });
 });
+
+/**
+ * QA Critical reinforcement (V3.1-D1 cycle 9).
+ * Uses local clones only — never mutates production catalog.
+ * Failures against validateCycleTypeCatalog indicate validator gaps (not silent PASS).
+ */
+describe("V3.1-D1 QA reinforcement — production data & immutability", () => {
+  it("keeps all fifteen production entries lifecycleStatus active", () => {
+    for (const entry of CYCLE_TYPE_CATALOG.entries) {
+      expect(entry.lifecycleStatus).toBe("active");
+    }
+  });
+
+  it("freezes catalog, entries, each entry, each ckc and each aliases", () => {
+    expect(Object.isFrozen(CYCLE_TYPE_CATALOG)).toBe(true);
+    expect(Object.isFrozen(CYCLE_TYPE_CATALOG.entries)).toBe(true);
+    for (const entry of CYCLE_TYPE_CATALOG.entries) {
+      expect(Object.isFrozen(entry)).toBe(true);
+      expect(Object.isFrozen(entry.ckc)).toBe(true);
+      expect(Object.isFrozen(entry.aliases)).toBe(true);
+    }
+  });
+
+  it("rejects deep mutation attempts against the registry", () => {
+    const first = CYCLE_TYPE_CATALOG.entries[0];
+    const originalId = first.cycleTypeId;
+    const originalLabel = first.label;
+    const originalPrimary = first.ckc.primaryReference;
+    expect(() => {
+      (CYCLE_TYPE_CATALOG as { version: string }).version = "tampered";
+    }).toThrow();
+    expect(() => {
+      (first as { label: string }).label = "TAMPERED";
+    }).toThrow();
+    expect(() => {
+      (first.ckc as { primaryReference: string }).primaryReference =
+        "method/tampered.md";
+    }).toThrow();
+    expect(() => {
+      (first.aliases as string[]).push("alias:tampered");
+    }).toThrow();
+    expect(CYCLE_TYPE_CATALOG.version).toBe("0.1.0-v3.1-d1");
+    expect(first.cycleTypeId).toBe(originalId);
+    expect(first.label).toBe(originalLabel);
+    expect(first.ckc.primaryReference).toBe(originalPrimary);
+    expect(first.aliases).toEqual([]);
+    expect(getCycleTypeById(originalId)?.label).toBe(originalLabel);
+  });
+
+  it("binds methodReference to §4.1 … §4.15 in method cycle order", () => {
+    for (const entry of CYCLE_TYPE_CATALOG.entries) {
+      expect(entry.methodReference).toContain(
+        `§4.${entry.methodCycleNumber}`,
+      );
+      expect(entry.methodReference).toContain(
+        "sfia-v2.5-project-cycles-method-candidate.md",
+      );
+    }
+  });
+
+  it("confirms Git paths exist for four detailed pilots and synthetic map", () => {
+    for (const rel of [
+      CKC_SYNTHETIC_MAP_PATH,
+      CKC_PILOT_CADRAGE_PATH,
+      CKC_PILOT_CONCEPTION_PATH,
+      CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH,
+      CKC_PILOT_QA_VALIDATION_PATH,
+    ]) {
+      expect(existsSync(path.join(WORKSPACE_ROOT, rel))).toBe(true);
+    }
+  });
+
+  it("uses exact catalog version 0.1.0-v3.1-d1", () => {
+    expect(CYCLE_TYPE_CATALOG_VERSION).toBe("0.1.0-v3.1-d1");
+    expect(CYCLE_TYPE_CATALOG.version).toBe("0.1.0-v3.1-d1");
+  });
+
+  it("keeps synthetic fallbackPolicy none without fallbackReference", () => {
+    for (const entry of CYCLE_TYPE_CATALOG.entries) {
+      if (entry.ckc.primaryLevel === "synthetic") {
+        expect(entry.ckc.fallbackPolicy).toBe("none");
+        expect(entry.ckc.fallbackReference).toBeUndefined();
+      }
+    }
+  });
+});
+
+describe("V3.1-D1 QA reinforcement — validator negatives & edges", () => {
+  it("detects invalid lifecycleStatus", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        lifecycleStatus: "bogus" as CycleTypeDefinition["lifecycleStatus"],
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "LIFECYCLE_STATUS_INVALID" ||
+          i.message.toLowerCase().includes("lifecycle"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects doctrineStatus other than method-candidate", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: {
+          ...entries[0].ckc,
+          doctrineStatus: "baseline" as "method-candidate",
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "CKC_DOCTRINE_STATUS" ||
+          i.message.toLowerCase().includes("doctrine"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects unavailableBehavior other than fail-closed", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: {
+          ...entries[0].ckc,
+          unavailableBehavior: "soft-fail" as "fail-closed",
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "CKC_UNAVAILABLE_BEHAVIOR" ||
+          i.message.toLowerCase().includes("fail-closed") ||
+          i.message.toLowerCase().includes("unavailable"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects synthetic mapping with incoherent fallbackPolicy", () => {
+    const catalog = cloneCatalog((entries) => {
+      const entry = entries.find((e) => e.cycleTypeId === "cyc:delivery")!;
+      const idx = entries.indexOf(entry);
+      entries[idx] = {
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          fallbackPolicy: "synthetic_map",
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "CKC_SYNTHETIC_FALLBACK_POLICY" ||
+          i.message.toLowerCase().includes("synthetic") &&
+            i.message.toLowerCase().includes("fallback"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects synthetic mapping with contradictory fallbackReference", () => {
+    const catalog = cloneCatalog((entries) => {
+      const entry = entries.find((e) => e.cycleTypeId === "cyc:delivery")!;
+      const idx = entries.indexOf(entry);
+      entries[idx] = {
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "CKC_SYNTHETIC_FALLBACK_REF" ||
+          (i.message.toLowerCase().includes("fallback") &&
+            i.message.toLowerCase().includes("synthetic")),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects methodCycleNumber unique but outside 1…15", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = { ...entries[0], methodCycleNumber: 16 };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "METHOD_NUMBER_RANGE" ||
+          i.code === "METHOD_NUMBER_SET" ||
+          i.message.toLowerCase().includes("methodcyclenumber"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects displayOrder unique but outside 1…15", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = { ...entries[0], displayOrder: 0 };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "DISPLAY_ORDER_RANGE" ||
+          i.code === "DISPLAY_ORDER_SET" ||
+          i.message.toLowerCase().includes("displayorder"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects incomplete methodCycleNumber set (unique but not exact 1…15)", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = { ...entries[0], methodCycleNumber: 16 };
+      return entries;
+    });
+    // Unique still holds for 2..15 + 16; exact set 1..15 must fail.
+    const issues = validateCycleTypeCatalog(catalog);
+    expect(
+      issues.some(
+        (i) =>
+          i.code === "METHOD_NUMBER_SET" ||
+          i.code === "METHOD_NUMBER_RANGE" ||
+          i.message.includes("1") && i.message.includes("15"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects incomplete displayOrder set (unique but not exact 1…15)", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[14] = { ...entries[14], displayOrder: 99 };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "DISPLAY_ORDER_SET" ||
+          i.code === "DISPLAY_ORDER_RANGE" ||
+          i.message.toLowerCase().includes("displayorder"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects alias collision between two entries", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = { ...entries[0], aliases: ["alias:shared"] };
+      entries[1] = { ...entries[1], aliases: ["alias:shared"] };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) => i.code === "ALIAS_AMBIGUOUS",
+      ),
+    ).toBe(true);
+  });
+
+  it("detects alias equal to another entry cycleTypeId", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[1] = { ...entries[1], aliases: [entries[0].cycleTypeId] };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "ALIAS_AMBIGUOUS" ||
+          i.code === "ALIAS_COLLIDES_WITH_ID" ||
+          i.message.toLowerCase().includes("alias"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects incorrect catalog version", () => {
+    const catalog = {
+      version: "9.9.9-wrong" as typeof CYCLE_TYPE_CATALOG_VERSION,
+      entries: CYCLE_TYPE_CATALOG.entries.map((entry) => ({
+        ...entry,
+        ckc: { ...entry.ckc },
+        aliases: [...entry.aliases],
+      })),
+    };
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "CATALOG_VERSION" ||
+          i.message.toLowerCase().includes("version"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects unknown primaryLevel", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: {
+          ...entries[0].ckc,
+          primaryLevel: "unknown" as "detailed",
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "CKC_PRIMARY_LEVEL" ||
+          i.code === "DETAILED_COUNT" ||
+          i.code === "SYNTHETIC_COUNT" ||
+          i.message.toLowerCase().includes("primary"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects unauthorized fallbackReference on synthetic", () => {
+    const catalog = cloneCatalog((entries) => {
+      const entry = entries.find((e) => e.cycleTypeId === "cyc:delivery")!;
+      const idx = entries.indexOf(entry);
+      entries[idx] = {
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
+        },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) =>
+          i.code === "CKC_SYNTHETIC_FALLBACK_REF" ||
+          i.message.toLowerCase().includes("fallback"),
+      ),
+    ).toBe(true);
+  });
+
+  it("detects empty primaryReference", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: { ...entries[0].ckc, primaryReference: "   " },
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(catalog).some(
+        (i) => i.code === "CKC_PRIMARY_REF",
+      ),
+    ).toBe(true);
+  });
+});

---

# QA REPORT FULL

# V3.1-D1 — QA / Validation Report (Critical)

## A. Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-30 21:10:00 CEST (+0200) |
| **Cycle** | 9 — QA / validation |
| **Profil** | **Critical** |
| **Typologie** | EVOL |
| **GO Morris consommé** | `GO QA VALIDATION SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — FIFTEEN IDS — CONTRACT INVARIANTS AND NEGATIVE TESTS — NO D2 — NO UI — NO CREATECYCLE` (2026-07-30 20:52 CEST) |
| **Branche** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
| **Base / HEAD** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` · ahead/behind `0/0` |
| **CKC QA** | `method/.../pilots/04-qa-validation.md` · candidate · v0.1.0 · consommation obligatoire · `executionAuthority=false` |
| **Handoff pré-cycle** | tip `a47487d…` · blob `c521ba64…` |
| **Statut** | `V3.1-D1 QA FAIL — BLOCKING OR MAJOR CONTRACT FINDINGS — CORRECTIVE DELIVERY REQUIRED — PR READINESS NOT AUTHORIZED — D2/D3 NOT AUTHORIZED` |
| **Décision Morris QA-G3** | **non consommée** — proposition Cursor uniquement |

## B. Objet à valider

- Contrat runtime D1 (`cycleTypeCatalog.ts`) : quinze IDs, métadonnées, opérations pures, immuabilité.
- Mapping CKC obligatoire (4 detailed / 11 synthetic, fallback, fail-closed metadata).
- Frontières D1/D2 : aucun resolver orchestré, aucun bridge QualifyCycle, aucune UI, aucun CreateCycle.
- Capacité de `validateCycleTypeCatalog` à détecter les violations contractuelles (gouvernance / clones).

## C. Référentiel

- Décisions D-V3.1-CAT-01…08 + document `14`.
- README D1 Delivery.
- Quinze IDs CAT-I1 exacts.
- Invariants identité / CKC / immuabilité / alias du GO QA.
- CKC pilot QA + checklist validation + standard QA v2 + méthode §4.9.
- Principe : **tests verts Delivery ≠ validation Morris**.

## D. Stratégie

1. Conformité statique (lecture contrat, exports, chemins, absence D2/I/O).
2. Baseline tests Delivery (avant renforcement).
3. Renforcement QA négatif / bords / immuabilité (clones locaux uniquement).
4. Non-régression suite `oa/cycle` + typecheck + lint + build.
5. Classification stricte des écarts (bloquante / majeure / mineure / environnementale).
6. Aucune correction production dans ce cycle.

## E. État initial

### Hashes before-qa

| Artefact | Hash |
|----------|------|
| `cycleTypeCatalog.ts` | `1674243863d015411c602848404e2e41c046afa7` |
| `cycleTypeCatalog.test.ts` (Delivery) | `77be87c793ebb278e63ee22f6427bdf33aa8ce89` |
| `index.ts` | `3daf57578e528878ef8a9298813019bb3b86af3c` |
| docs 12 / 13 | `82be657c…` / `3ecb0256…` |

### Tests Delivery existants (avant renforcement)

| Commande | Résultat | Durée |
|----------|----------|-------|
| `npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts` | **24/24 PASS** | ~0.88s |
| `npm test -- __tests__/oa/cycle/` | **72/72 PASS** | ~0.62s |

## F. Matrice de couverture

| ID | Invariant | Source | Preuve | Résultat | Réserve |
|----|-----------|--------|--------|----------|---------|
| INV-01 | Exactement 15 IDs adoptés | CAT-I1 | tests Delivery + QA | **PASS** | — |
| INV-02 | Unicité id/key/number/order | GO QA | tests Delivery | **PASS** | — |
| INV-03 | Pattern OA + `cyc:` + capitalization | CAT-I1 | tests Delivery | **PASS** | — |
| INV-04 | Labels/descriptions/methodRef non vides | GO QA | tests Delivery | **PASS** | — |
| INV-05 | lifecycleStatus production = active | GO QA | QA reinforcement | **PASS** (données) | — |
| INV-06 | CKC mandatory + execAuth false + doctrine + fail-closed (données) | CAT-07 | tests Delivery | **PASS** | — |
| INV-07 | 4 detailed / 11 synthetic + fallback | CAT-07 | tests Delivery | **PASS** | — |
| INV-08 | Chemins Git CKC existent | GO QA | existsSync suite | **PASS** | — |
| INV-09 | Lookup id-only · pas label/key | CAT-02 | tests Delivery | **PASS** | — |
| INV-10 | listCycleTypes non mutante | GO QA | tests Delivery | **PASS** | — |
| INV-11 | Object.isFrozen catalogue/entries/ckc/aliases | GO QA | QA reinforcement | **PASS** | — |
| INV-12 | Mutation profonde rejetée | GO QA | QA reinforcement | **PASS** | — |
| INV-13 | methodReference §4.1…§4.15 | méthode | QA reinforcement | **PASS** | — |
| INV-14 | Pas profil/gate/Morris dans entrées | GO QA | tests Delivery | **PASS** | — |
| INV-15 | Pas fs / import method runtime | GO QA | static search | **PASS** | — |
| INV-16 | Validator détecte lifecycle invalide | GO QA | QA négatif | **FAIL** | R-QA-01 majeure |
| INV-17 | Validator détecte doctrineStatus invalide | GO QA | QA négatif | **FAIL** | R-QA-02 majeure |
| INV-18 | Validator détecte unavailableBehavior invalide | GO QA | QA négatif | **FAIL** | R-QA-03 majeure |
| INV-19 | Validator détecte fallbackPolicy synthetic incohérente | GO QA | QA négatif | **FAIL** | R-QA-04 majeure |
| INV-20 | Validator détecte fallbackReference synthetic contradictoire | GO QA | QA négatif | **FAIL** | R-QA-05 majeure |
| INV-21 | Validator détecte methodCycleNumber hors 1…15 / set inexact | GO QA | QA négatif | **FAIL** | R-QA-06 majeure |
| INV-22 | Validator détecte displayOrder hors 1…15 / set inexact | GO QA | QA négatif | **FAIL** | R-QA-07 majeure |
| INV-23 | Validator détecte alias = autre cycleTypeId | GO QA | QA négatif | **FAIL** | R-QA-08 majeure |
| INV-24 | Validator détecte version catalogue incorrecte | GO QA | QA négatif | **FAIL** | R-QA-09 majeure |
| INV-25 | Collision alias inter-entrées | GO QA | QA négatif | **PASS** | — |
| INV-26 | primaryLevel inconnu | GO QA | via DETAILED/SYNTHETIC_COUNT | **PASS** | — |
| INV-27 | primaryReference vide | GO QA | QA négatif | **PASS** | — |

## G. Tests existants (avant renforcement)

- Catalog Delivery : **24 PASS** (2026-07-30 21:07:47 CEST).
- Suite `oa/cycle` : **72 PASS**.
- Couverture Delivery : nominale + négatifs de base (doublons, pattern, CKC missing, execAuth, detailed sans fallback, synthetic sans map, alias dupliqués locaux).

## H. Tests QA ajoutés

| # | Scénario | Justification | Résultat |
|---|----------|---------------|----------|
| 1 | lifecycleStatus production active | INV-05 | **PASS** |
| 2 | Object.isFrozen (catalogue/entries/ckc/aliases) | INV-11 | **PASS** |
| 3 | Mutation profonde | INV-12 | **PASS** |
| 4 | methodReference §4.n | INV-13 | **PASS** |
| 5 | Chemins Git existent | INV-08 | **PASS** |
| 6 | Version exacte | INV-24 données | **PASS** |
| 7 | Synthetic sans fallbackReference | INV-07 données | **PASS** |
| 8 | lifecycleStatus invalide → validator | INV-16 | **FAIL** |
| 9 | doctrineStatus ≠ method-candidate | INV-17 | **FAIL** |
| 10 | unavailableBehavior ≠ fail-closed | INV-18 | **FAIL** |
| 11 | synthetic fallbackPolicy incohérente | INV-19 | **FAIL** |
| 12 | synthetic fallbackReference contradictoire | INV-20 | **FAIL** |
| 13 | methodCycleNumber hors plage | INV-21 | **FAIL** |
| 14 | displayOrder hors plage | INV-22 | **FAIL** |
| 15 | set methodCycleNumber inexact | INV-21 | **FAIL** |
| 16 | set displayOrder inexact | INV-22 | **FAIL** |
| 17 | collision alias inter-entrées | INV-25 | **PASS** |
| 18 | alias = autre cycleTypeId | INV-23 | **FAIL** |
| 19 | version incorrecte | INV-24 | **FAIL** |
| 20 | primaryLevel inconnu | INV-26 | **PASS** |
| 21 | fallbackReference unauthorized (synthetic) | INV-20 | **FAIL** |
| 22 | primaryReference vide | INV-27 | **PASS** |

**Total renforcé :** 46 tests · **34 PASS** · **12 FAIL**.

## I. Résultats techniques

| Commande | Répertoire | Code | Résultat | Durée approx. |
|----------|------------|------|----------|---------------|
| `npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts` (avant) | `app/` | 0 | 24/24 PASS | 0.88s |
| `npm test -- __tests__/oa/cycle/` (avant) | `app/` | 0 | 72/72 PASS | 0.62s |
| `npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts` (après) | `app/` | 1 | 34 PASS / 12 FAIL | 0.78s |
| `npm test -- __tests__/oa/cycle/` (après) | `app/` | 1 | 82 PASS / 12 FAIL (94) | 0.63s |
| `npm run typecheck` | `app/` | 0 | PASS | 1.07s |
| `npm run lint` | `app/` | 0 | PASS | 1.62s |
| `npm run build` | `app/` | 0 | PASS | 7.23s |
| `git diff --check` | repo | 0 | PASS | — |

## J. Analyse des écarts

### R-QA-01 — Validator n’émet pas sur lifecycleStatus invalide

- **Attendu :** issue dédiée.
- **Observé :** `validateCycleTypeCatalog` silencieux (`[]` pour ce champ).
- **Reproductibilité :** clone local `lifecycleStatus: "bogus"`.
- **Sévérité :** **majeure** (données prod actives, contrôle gouvernance absent).
- **Impact :** snapshot invalide pourrait passer validation pure.
- **Recommandation :** Delivery correctif — valider enum `active|deprecated|unavailable`.
- **Gate :** GO DELIVERY CORRECTIVE.

### R-QA-02 — doctrineStatus non contrôlé

- **Attendu :** rejet si ≠ `method-candidate`.
- **Observé :** silencieux.
- **Sévérité :** **majeure**.
- **Gate :** Delivery correctif.

### R-QA-03 — unavailableBehavior non contrôlé

- **Attendu :** rejet si ≠ `fail-closed`.
- **Observé :** silencieux.
- **Sévérité :** **majeure**.
- **Gate :** Delivery correctif.

### R-QA-04 — fallbackPolicy synthetic incohérente non détectée

- **Attendu :** synthetic ⇒ `fallbackPolicy=none` (ou équivalent explicite).
- **Observé :** `synthetic_map` accepté sur entrée synthetic.
- **Sévérité :** **majeure**.
- **Gate :** Delivery correctif.

### R-QA-05 — fallbackReference unauthorized / contradictoire sur synthetic

- **Attendu :** absence de `fallbackReference` (ou rejet).
- **Observé :** `fallbackReference` accepté.
- **Sévérité :** **majeure**.
- **Gate :** Delivery correctif.

### R-QA-06 — methodCycleNumber hors 1…15 / set inexact non détecté

- **Attendu :** ensemble exact `{1…15}`.
- **Observé :** unicité seule ; `16` unique accepté.
- **Sévérité :** **majeure**.
- **Gate :** Delivery correctif.

### R-QA-07 — displayOrder hors 1…15 / set inexact non détecté

- **Attendu :** ensemble exact `{1…15}`.
- **Observé :** unicité seule ; `0` / `99` acceptés.
- **Sévérité :** **majeure**.
- **Gate :** Delivery correctif.

### R-QA-08 — alias égal au cycleTypeId d’une autre entrée non détecté

- **Attendu :** `ALIAS_AMBIGUOUS` / collision id.
- **Observé :** silencieux (collision alias↔alias OK ; alias↔id d’une autre entrée non).
- **Sévérité :** **majeure**.
- **Gate :** Delivery correctif.

### R-QA-09 — version catalogue incorrecte non contrôlée

- **Attendu :** rejet si ≠ `0.1.0-v3.1-d1`.
- **Observé :** silencieux.
- **Sévérité :** **majeure**.
- **Gate :** Delivery correctif.

**Note :** les données de production actuelles restent conformes aux invariants nominaux (15 IDs, freezes, CKC mapping, chemins Git). Les écarts portent sur la **complétude du validateur pur** utilisé comme garde-fou contractuel.

## K. Frontières

| Contrôle | Preuve |
|----------|--------|
| `cycleTypeCatalog.ts` inchangé | hash `16742438…` avant = après |
| `index.ts` inchangé | hash `3daf5757…` avant = après |
| docs 12 / 13 inchangés | hashes + `cmp` |
| D2 / resolver / QualifyCycle bridge | absents du diff QA |
| UI / CreateCycle / React dans test QA | absents |
| package/lockfile | inchangés |
| method/** import runtime | uniquement string paths |

## L. Réserves

### Bloquantes

Aucune (aucune corruption des données de production, aucun `executionAuthority=true`, aucun ID incorrect, aucune mutation du registre).

### Majeures

R-QA-01 … R-QA-09 (validator incomplet sur invariants contractuels — données prod conformes).

### Mineures

Aucune.

### Environnementales

Aucune.

### Aucune réserve cachée

Tous les échecs QA renforcés sont listés ci-dessus.

## M. Anti-claims

- Tests Delivery verts ≠ catalogue sans défaut de gouvernance.
- QA Cursor ≠ décision Morris QA-G3.
- Catalogue D1 ≠ résolution CKC orchestrée.
- Mapping ≠ production / PR ready.
- typecheck/lint/build PASS ≠ QA-G3 PASS.
- Aucune validation D2/D3.
- Aucun GO implicite · pas PRODUCT/RUN/IAM/AGENT READY · pas DELIVERY/CUTOVER AUTHORIZED · pas HARD CLOSED / T-A6 COMPLETE.

## N. QA-Gates

| Gate | État |
|------|------|
| **QA-G2** | Tests automatisés implémentés — **OUI** (Delivery + renforcement QA) ; suite renforcée **non verte** (12 FAIL intentionnels / preuves d’écart). |
| **QA-G3** | Preuves complètes + réserves classées — **proposition Cursor : FAIL** ; **décision Morris attendue**. |

## O. Verdict

```
V3.1-D1 QA FAIL —
BLOCKING OR MAJOR CONTRACT FINDINGS —
CORRECTIVE DELIVERY REQUIRED —
PR READINESS NOT AUTHORIZED —
D2/D3 NOT AUTHORIZED
```

**Gate suivant candidat (non ouvert) :**

`GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG — ADDRESS QA FINDINGS — PRODUCTION CONTRACT ONLY — NO D2 — NO UI — NO CREATECYCLE`

**Statut attendu Morris :** décision QA-G3 (NO-GO QA / accept FAIL → corrective) — **pas** PR readiness.

---

# D1 README FULL

# V3.1-D1 — Cycle Type Catalog Runtime Contract

## A. Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-30 20:48:00 CEST (+0200) |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | **Critical** |
| **Typologie** | EVOL |
| **GO Morris consommé** | `GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE` (2026-07-30 20:35 CEST) |
| **Branche** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **CKC Delivery** | fallback carte synthétique + méthode §4.8 · method-candidate · consommation obligatoire · `executionAuthority=false` |
| **Statut Delivery** | `V3.1-D1 CYCLE TYPE CATALOG RUNTIME CONTRACT IMPLEMENTED — MANDATORY CKC MAPPING IMPLEMENTED` |
| **Statut QA** | `QA EVIDENCE COMPLETE — FAIL — MAJOR VALIDATOR GAPS — READY FOR MORRIS QA-G3 DECISION — PR READINESS NOT AUTHORIZED — D2/D3 NOT AUTHORIZED` |
| **Rapport QA** | [`01-qa-validation-report.md`](./01-qa-validation-report.md) |
| **Commit / push / PR projet** | **non** |

## B. Objectif

Produire le **contrat runtime pur** des quinze types de cycle adoptés et leur **mapping CKC obligatoire**, sans orchestration resolver, sans bridge QualifyCycle, sans UI, sans CreateCycle.

## C. Décisions Morris consommées

D-V3.1-CAT-01…08 adoptées — voir [`14`](../first-user-visible-vertical-slice-framing/14-v3-1-cycle-type-catalog-functional-architecture.md).

Quinze IDs CAT-I1 : `cyc:framing` … `cyc:capitalization` (inchangé).

## D. Implémentation

| Fichier | Rôle |
|---------|------|
| `app/lib/oa/cycle/domain/cycleTypeCatalog.ts` | Types + données immuables + opérations pures + validation |
| `app/lib/oa/cycle/index.ts` | Export public du contrat |
| `app/__tests__/oa/cycle/cycleTypeCatalog.test.ts` | Preuves positives / négatives |

**Version catalogue :** `0.1.0-v3.1-d1`

**Opérations publiques :** `listCycleTypes` · `getCycleTypeById` · `isKnownCycleTypeId` · `validateCycleTypeCatalog` · constantes/paths CKC · `CYCLE_TYPE_CATALOG` · `ADOPTED_CYCLE_TYPE_IDS`

**CycleTypeDefinition :** id · canonicalKey · label · shortDescription · displayOrder · lifecycleStatus · methodCycleNumber · methodReference · ckc · aliases

**CycleTypeCkcMapping :** mandatory · primaryLevel · primaryReference · fallbackPolicy · fallbackReference? · executionAuthority=false · doctrineStatus · unavailableBehavior

Aucun I/O · aucun fs runtime · aucun React · aucun singleton mutable.

## E. Mapping complet

| # | cycleTypeId | Label | CKC |
|---|-------------|-------|-----|
| 1 | `cyc:framing` | Cadrage | detailed → pilots/01 + synthetic fallback |
| 2 | `cyc:functional-design` | Conception fonctionnelle | detailed → pilots/02 + synthetic fallback |
| 3 | `cyc:functional-architecture` | Architecture fonctionnelle | synthetic map |
| 4 | `cyc:ux-ui` | UX/UI | synthetic map |
| 5 | `cyc:backlog` | Backlog / user stories | synthetic map |
| 6 | `cyc:technical-architecture` | Architecture technique | detailed → pilots/03 + synthetic fallback |
| 7 | `cyc:integration-devops` | Intégration / DevOps | synthetic map |
| 8 | `cyc:delivery` | Delivery / implémentation | synthetic map |
| 9 | `cyc:qa-validation` | QA / validation | detailed → pilots/04 + synthetic fallback |
| 10 | `cyc:security` | Sécurité / RSSI | synthetic map |
| 11 | `cyc:release` | Déploiement / release | synthetic map |
| 12 | `cyc:observability` | Observabilité / RUN readiness | synthetic map |
| 13 | `cyc:pr-readiness` | PR readiness | synthetic map |
| 14 | `cyc:post-merge` | Post-merge | synthetic map |
| 15 | `cyc:capitalization` | Capitalisation / REX | synthetic map |

Synthetic map path : `method/.../02-fifteen-cycles-synthetic-map.md`

## F. Invariants

Exactement 15 · IDs/keys/numbers/orders uniques · pattern OA `cyc:` · `cyc:capitalization` exact · labels/descriptions non vides · CKC mandatory · `executionAuthority=false` · 4 detailed + 11 synthetic · detailed ⇒ fallback synthétique · type ≠ profil · immuabilité · fail-closed metadata · pas de parsing Markdown runtime.

## G. Tests

```bash
cd projects/sfia-studio/app
npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts
npm test -- __tests__/oa/cycle/
npm run typecheck
npm run lint
npm run build
```

Résultats Delivery (2026-07-30) : catalog 24/24 PASS · suite oa/cycle 72/72 PASS · typecheck PASS · lint PASS · build PASS.

### QA Critical (cycle 9 — 2026-07-30)

- Tests renforcés ajoutés dans `cycleTypeCatalog.test.ts` (immutabilité, bornes, doctrine, alias, version).
- Après renforcement : **34 PASS / 12 FAIL** (échecs = gaps `validateCycleTypeCatalog` — production data inchangée et conforme).
- typecheck / lint / build : **PASS**.
- Production `cycleTypeCatalog.ts` / `index.ts` : **non modifiés** pendant la QA.
- Verdict proposé : **FAIL** — voir [`01-qa-validation-report.md`](./01-qa-validation-report.md).
- QA exécutée ≠ décision Morris QA-G3.

## H. Frontières

- Resolver opérationnel : **NON** (D2)
- Bridge QualifyCycle : **NON** (D2)
- Vertical-slice runtime : **NON**
- UI / CreateCycle / LPS / epistemic : **NON**
- method/** import runtime : **NON**

## I. Risques et réserves

D2 requis pour résolution orchestrée · D3 réserve Figma · process-local hors D1 · aucune CycleInstance · pas de preuve produit end-to-end.

## J. Anti-claims

Registry D1 ≠ mécanisme CKC complet · mapping ≠ résolution · export domaine ≠ exposition vertical-slice · tests unitaires ≠ validation produit · implementation ≠ PR readiness · D2/D3 non ouverts · pas PRODUCT/RUN/IAM/AGENT READY · pas DELIVERY/CUTOVER AUTHORIZED · pas HARD CLOSED / T-A6 COMPLETE.

## K. Verdict

**Delivery (historique) :** contrat runtime + mapping CKC implémentés.

**QA proposée (Cursor) :**

```
V3.1-D1 QA FAIL —
BLOCKING OR MAJOR CONTRACT FINDINGS —
CORRECTIVE DELIVERY REQUIRED —
PR READINESS NOT AUTHORIZED —
D2/D3 NOT AUTHORIZED
```

Décision Morris QA-G3 **requise**. D2/D3 **non autorisés**.

---

# framing README FULL

# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — V3.1-D1 DELIVERY COMPLETE — QA FAIL (MAJOR VALIDATOR GAPS) — READY FOR MORRIS QA-G3 DECISION — PR READINESS NOT AUTHORIZED — D2/D3 NOT AUTHORIZED` |
| **Date** | 2026-07-30 21:10:00 CEST (+0200) |
| **Cycle courant** | 9 — QA / validation V3.1-D1 |
| **Profil** | **Critical** |
| **Typologie** | EVOL |
| **Gate courant** | `GO QA VALIDATION SFIA STUDIO V3.1-D1 …` **consommé** (2026-07-30 20:52 CEST) |
| **Branche Delivery** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **Code D1** | `lib/oa/cycle/domain/cycleTypeCatalog.ts` · tests · exports — **production inchangée en QA** |
| **Rapport QA** | [`01-qa-validation-report.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) |
| **Docs protégées** | `12` / `13` **inchangés** |

## Synthèse

| Lot | État |
|-----|------|
| V1 / V2 | intégrés `main` |
| V3 arbitrage D-V3 | terminé (`12`) |
| V3.1 conception | terminée (`13`) |
| V3.1 catalogue décisions | adoptées (`14`) |
| **V3.1-D1 Delivery** | **terminé** — contrat runtime + mapping CKC |
| **V3.1-D1 QA** | **exécutée** — verdict proposé **FAIL** (9 réserves majeures validator) — QA-G3 Morris **non décidé** |
| V3.1-D2 resolver + QualifyCycle bridge | **non autorisé** |
| V3.1-D3 UI | **non autorisé** · D-VS-05 / Figma |
| PR readiness | **non ouverte** |
| V3.2 / V4–V6 | non autorisés |

**R-V3.1-CATALOG-01 :** contrat + arbitrage résolus · runtime catalog D1 implémenté · QA révèle gaps `validateCycleTypeCatalog` · résolution orchestrée **pending D2**.

**CKC :** obligatoire · mapping statique D1 · consommation orchestrée = D2 · `executionAuthority=false`.

## Décisions (synthèse)

D-VS-01…04 adoptées · D-VS-05 NOT CONSUMED · D-V3-01…08 adoptées · D-V3.1-CAT-01…08 adoptées · quinze IDs CAT-I1 implémentés dans le contrat runtime.

## Index

| Doc | Sujet |
|-----|-------|
| `12` | V3 cadrage + arbitrage |
| `13` | V3.1 conception fonctionnelle |
| `14` | V3.1 catalogue architecture + adoption + évidence QA |
| V3.1-D1 README | Contrat runtime catalogue |
| V3.1-D1 `01-qa-validation-report.md` | Preuves QA Critical |

## Gate candidat suivant

`GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG — ADDRESS QA FINDINGS — PRODUCTION CONTRACT ONLY — NO D2 — NO UI — NO CREATECYCLE`

(Conditionné à décision Morris sur QA-G3 / NO-GO.)

## Verdict

`V3.1-D1 QA FAIL — BLOCKING OR MAJOR CONTRACT FINDINGS — CORRECTIVE DELIVERY REQUIRED — PR READINESS NOT AUTHORIZED — D2/D3 NOT AUTHORIZED`

---

# backlog 08 FULL

# 08 — Implementation backlog and slicing

## Stratégie

Plusieurs PR (lots), commits atomiques. Framing docs séparés. Pas de big-bang.

## Lot V1 / V2

**INTEGRATED ON MAIN** (V2-A3 PR #295 @ `3e8a437…`).

## Lot V3 — Cycle Recommendation

**CADRAGE + ARBITRATION COMPLETE** — [`12`](./12-v3-cycle-recommendation-cadrage.md).

## Lot V3.1 — Profile Qualification (conception)

**FUNCTIONAL DESIGN COMPLETE** — [`13`](./13-v3-1-profile-qualification-functional-design.md).

## Lot V3.1 — Cycle Type Catalog (architecture + adoption)

**DECISIONS ADOPTED** — [`14`](./14-v3-1-cycle-type-catalog-functional-architecture.md).

## Lot V3.1-D1 — Catalogue runtime + mapping CKC

**Statut Delivery :** `IMPLEMENTATION COMPLETE`.

**Statut QA :** `QA EVIDENCE COMPLETE — FAIL — MAJOR VALIDATOR GAPS — QA-G3 PENDING MORRIS — PR READINESS NOT AUTHORIZED`.

Docs :
- [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md)
- [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md)

| Preuve | Résultat |
|--------|----------|
| 15 IDs CAT-I1 | implémentés (données prod conformes) |
| Mapping CKC obligatoire | 4 detailed + 11 synthetic |
| Tests catalog Delivery | 24 PASS |
| Tests catalog QA renforcés | 34 PASS / **12 FAIL** (validator gaps) |
| Suite oa/cycle (après QA) | 82 PASS / 12 FAIL |
| typecheck / lint / build | PASS |
| QA-G2 | tests automatisés présents (suite renforcée non verte) |
| QA-G3 | **proposé FAIL** — **non décidé par Morris** |
| Resolver / bridge / UI | **hors lot** |
| PR readiness | **non ouverte** |

### Slicing CAT-08

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue runtime · mapping CKC | **Delivery terminé** · **QA FAIL** → Delivery correctif candidat |
| **V3.1-D2** | Projection · validate · resolver obligatoire · QualifyCycle bridge | **non autorisé** |
| **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |

### Réserves QA majeures (retour Delivery)

`validateCycleTypeCatalog` incomplet : lifecycle / doctrineStatus / unavailableBehavior / fallback synthetic / bornes 1…15 / set exact / alias↔id / version catalogue. Données prod actuelles conformes ; freezes OK.

### Réserves D2

Orchestration CKC · consommation fail-closed runtime · bridge QualifyCycle · exposition vertical-slice · exploitabilité produit du résultat.

## Lot V3.2 / V4 / V5 / V6

**NOT AUTHORIZED.**

---

# document 14 FULL

# 14 — V3.1 Cycle Type Catalog — Architecture fonctionnelle

## A. Meta et cycle record

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-30 20:29:00 CEST (+0200) |
| **Cycle** | 3 — Architecture fonctionnelle (phase arbitrage / adoption / correction) |
| **Profil** | **Critical** |
| **Typologie** | DOC |
| **GO architecture (historique)** | `GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1 CYCLE TYPE CATALOG — RESOLVE R-V3.1-CATALOG-01 — CONTRACT ONLY — NO IMPLEMENTATION` (consommé) |
| **GO adoption (consommé)** | voir Decision record Morris |
| **Branche** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **CKC (ce cycle)** | Pilote détaillé **absent** · fallback carte synthétique + méthode §4.3 · `method-candidate` · **consommation obligatoire** · **executionAuthority=false** |
| **Entrées héritées** | `12` (lecture seule) · `13` (conception V3.1) |
| **Statut documentaire** | `V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — V3.1-D1 RUNTIME IMPLEMENTED — QA FAIL (VALIDATOR GAPS) — READY FOR MORRIS QA-G3 DECISION — D2/D3 NOT AUTHORIZED` |
| **Commit / push / PR projet** | **non** |
| **Code / registry / resolver / Figma** | **non** |

## Decision record Morris

| Champ | Valeur |
|-------|--------|
| **Clarification Morris** | « par contre le CKC doit faire partie intégrante du mécanisme, c'est candidate parce que le projet lui meme est candidate mais c'est la base de la doctrine de ce produit, donc toute la doctrine meme si elle est candidate doit faire partie intégrante de la solution, de sa conception a sa réalisation, jusqu'a que la solution soit en production » |
| **Confirmation Morris** | « pour le reste des décisions c'est ok » |
| **GO formel** | `GO ADOPT SFIA STUDIO V3.1 CYCLE TYPE CATALOG — D-V3.1-CAT-01=CAT-S1 — D-V3.1-CAT-02=CAT-I1 — D-V3.1-CAT-03=MINIMAL_WITH_MANDATORY_CKC_CORE — D-V3.1-CAT-04=CONTROLLED_ALIASES — D-V3.1-CAT-05=MORRIS_FOR_STRUCTURAL_CHANGES — D-V3.1-CAT-06=NEUTRAL_ID_LOCALIZED_LABELS — D-V3.1-CAT-07=INTEGRATED_MANDATORY_CKC_MECHANISM — D-V3.1-CAT-08=D1_THEN_D2_THEN_D3` |
| **Date/heure/fuseau GO** | 2026-07-30 20:23 CEST (+0200) |

| ID | Décision adoptée | Conséquence | Réserve | Statut |
|----|------------------|-------------|---------|--------|
| D-V3.1-CAT-01 | **CAT-S1** | Contrat Git catalogue = projection opérationnelle des 15 cycles méthode | Runtime non implémenté | `DECIDED — ADOPTED BY MORRIS` |
| D-V3.1-CAT-02 | **CAT-I1** | Quinze IDs `cyc:<english-slug>` adoptés · `cyc:capitalization` inchangé | Runtime pending | `DECIDED — ADOPTED BY MORRIS` |
| D-V3.1-CAT-03 | **MINIMAL_WITH_MANDATORY_CKC_CORE** | Noyau minimal **+** socle CKC obligatoire | Pas de sur-modélisation TS | `DECIDED — ADOPTED BY MORRIS` |
| D-V3.1-CAT-04 | **CONTROLLED_ALIASES** | Alias 1→1 gouvernés · pas de recyclage | Alias initiaux absents OK | `DECIDED — ADOPTED BY MORRIS` |
| D-V3.1-CAT-05 | **MORRIS_FOR_STRUCTURAL_CHANGES** | Gate Morris sur changements structurants | Labels non structurants : revue proportionnée | `DECIDED — ADOPTED BY MORRIS` |
| D-V3.1-CAT-06 | **NEUTRAL_ID_LOCALIZED_LABELS** | ID neutre · labels FR · futur multi | Fallback label explicite | `DECIDED — ADOPTED BY MORRIS` |
| D-V3.1-CAT-07 | **INTEGRATED_MANDATORY_CKC_MECHANISM** | CKC obligatoire dans le mécanisme produit · candidate ≠ optionnel | Candidate ≠ baseline méthode globale · `executionAuthority=false` | `DECIDED — ADOPTED BY MORRIS` |
| D-V3.1-CAT-08 | **D1_THEN_D2_THEN_D3** | Trois incréments séparés adoptés | Delivery non ouvert | `DECIDED — ADOPTED BY MORRIS` |

**Décision produit SFIA Studio :** le CKC est obligatoire de la conception à la production dans le produit candidate. Cela **ne** promeut **pas** les documents CKC en baseline officielle de la méthode SFIA globale.

## B. Problème et objectif

### R-V3.1-CATALOG-01 (historique → requalifiée)

Historique : aucune source runtime canonique des quinze types.

**État actuel :** résolue au **niveau contrat fonctionnel et arbitrage Morris**. Runtime / delivery D1 **pending** (GO distinct).

### Contrat ≠ implémentation

Ce document enregistre l’adoption. Il ne crée aucun registre, constante, enum, resolver, bridge ni UI.

## C. Décisions d’entrée (D-V3 — inchangées)

D-V3-01…08 restent adoptées (`12`). `cyc:capitalization` immuable. Type sélectionné · profil T-A2 · V3.1 read-only · pas CreateCycle / LPS / epistemic.

## D. Inventaire repo-informed

*(inchangé dans le constat)* — registry runtime 15 **toujours absente** · harness non autorité · méthode = autorité conceptuelle · `cyc:capitalization` seul ID OA domaine explicite préexistant · fixtures test ≠ catalogue.

**Post-adoption :** les quinze IDs CAT-I1 sont **contractuels** (adoptés) mais **pas encore implémentés**.

## E. Principes d’architecture fonctionnelle

1. Méthode = autorité conceptuelle des 15 cycles.
2. Contrat catalogue = projection opérationnelle traçable (**CAT-S1**).
3. Projection runtime = consommation du contrat.
4. UI = sélection contrôlée · aucune liste d’autorité hardcodée.
5. T-A2 = reçoit un `cycleTypeId` validé · ne recommande pas le type.
6. Identité ≠ label.
7. Type ≠ profil.
8. Catalogue ≠ moteur de recommandation.
9. Recommandation ≠ décision Morris.
10. Git = source de vérité contractuelle.
11. Fail-closed unknown / unavailable / CKC invalid sans fallback.
12. Pas de parsing runtime Markdown méthode.
13. **CKC obligatoire** dans l’orchestration produit (candidate ≠ optionnel).
14. **CKC `executionAuthority=false`** · ne décide pas · ne consomme pas de gate.
15. Candidate doctrine ≠ baseline méthode globale.

## F. Vue fonctionnelle des composants

| Composant | Responsabilité |
|-----------|----------------|
| **SFIA Method Cycle Reference** | 15 cycles conceptuels (méthode Git) |
| **Cycle Type Catalog Contract** | IDs adoptés · labels · lifecycle · **métadonnées CKC obligatoires** |
| **Cycle Type Catalog Projection** | Exposition read-only post-D1 |
| **CKC Resolver** | Résout doctrine (detailed → synthetic → fail-closed) · `executionAuthority=false` · **consommation obligatoire** dans l’orchestration |
| **Orchestration produit** | Exige résolution CKC valide avant résultat contractuellement exploitable / executable / ready |
| **Profile Qualification UI** | Sélection type · signaux · profil · disclosures · **état CKC** (sans contrat brut) |
| **T-A2 QualifyCycle** | Profil depuis signaux · indépendant du type · domaine |
| **Futur CreateCycle** | Hors V3.1 · ID catalogue validé |
| **Gouvernance Morris** | Changements structurants |

## G. Flux fonctionnel (corrigé)

```text
Méthode (15 cycles)
  → Cycle Type Catalog Contract (CAT-S1)
    → Cycle Type Catalog Projection
      → sélection cycleTypeId (validé)
        → résolution CKC obligatoire (detailed → synthetic fallback → fail-closed)
          → validation résolution CKC
            → signaux explicites
              → QualifyCycle (domaine)
                → résultat read-only (exploitable seulement si CKC valide)
                  → futurs delivery / QA / readiness avec preuve CKC tracée
```

Aucun flux inverse ne crée une décision Morris, un gate, ni un CycleInstance en V3.1.

## H. Contrat conceptuel CycleTypeDefinition

### H.1 Noyau minimal **avec socle CKC obligatoire** (CAT-03 adopté)

| Champ | Rôle | Obl. | Mutable | Consommateur |
|-------|------|------|---------|--------------|
| `cycleTypeId` | Identité stable | oui | **non** | UI · T-A2 · CKC · instances |
| `canonicalKey` | Clé stable non localisée (traçabilité harness/méthode) | oui | non* | Sync · gouvernance |
| `label` | Libellé FR initial | oui | oui | UI |
| `shortDescription` | Aide courte | oui | oui | UI |
| `displayOrder` | Ordre affichage | oui | oui | UI |
| `lifecycleStatus` | active \| deprecated \| unavailable | oui | gouverné | UI · validate |
| `methodCycleNumber` | 1…15 | oui | non* | Traçabilité |
| `methodReference` / provenance | Pointeur doctrinal | oui | oui | Audit |
| `ckcLevel` | detailed \| synthetic \| … | oui | gouverné | Resolver · orchestration |
| `ckcReference` / clé résolution | Cible pilote ou clé stable | oui | gouverné | Resolver |
| `ckcFallbackPolicy` | Politique fallback (ex. synthetic map) | oui | gouverné | Resolver |
| Exigences statut résolution | Règles valid / invalid / unavailable | oui | gouverné | Orchestration |

\* = gate Morris + migration.

**Historique :** la recommandation initiale « CKC en extension » est **corrigée** par Morris → CKC dans le noyau obligatoire.

### H.2 Extension optionnelle (hors noyau)

`category` · `aliases` · `deprecatedAt` / `replacedBy` · `availability` — selon CAT-04/lifecycle. Pas de profil/gate/décision/autorité.

**Contrat fonctionnel ≠ structure TypeScript** : choix de fichiers/classes/stockage = delivery futur.

## I. Contrat conceptuel CycleTypeCatalog

Opérations inchangées conceptuellement + exigences :

- `validateCycleTypeId` fail-closed unknown/deprecated.
- Métadonnées CKC présentes pour chaque entrée active.
- Fingerprint / version catalogue.
- Unavailable → bloque sélection · pas de texte libre.

## J. Invariants

1–16 (précédents) conservés, **plus** :

17. Métadonnées CKC **obligatoires** par type actif.
18. Pilote détaillé **prioritaire** s’il existe.
19. Fallback synthétique **obligatoire** sinon.
20. Invalid/unavailable **sans** fallback valide → **stop** fail-closed.
21. Aucun cycle déclaré executable / ready for delivery / QA / production **sans** CKC résolu et consommé.
22. `executionAuthority=false` toujours.
23. Identité du type **indépendante** du statut CKC (l’identité reste ; l’exploitabilité produit est bloquée).
24. Quinze `cycleTypeId` CAT-I1 **adoptés contractuellement**.

## K. Options de source de vérité

Options historiques CAT-S1…S4 conservées.

Recommandation historique : CAT-S1.

**Décision : CAT-S1 — DECIDED — ADOPTED BY MORRIS.** (aligne la recommandation)

## L. Options de stratégie d’identifiants

Options historiques CAT-I1…I4 conservées.

Recommandation historique : CAT-I1.

**Décision : CAT-I1 — DECIDED — ADOPTED BY MORRIS.**

## M. Mapping des quinze IDs — **ADOPTÉ**

**Stratégie :** CAT-I1. Exactement quinze entrées.
Chaque ID : **`ADOPTED BY MORRIS — CONTRACTUAL ID — IMPLEMENTED BY V3.1-D1`**.
`cyc:capitalization` : valeur et sens **inchangés**.

| # | Nom canonique | cycleTypeId | Label FR | Description courte | Ordre | CKC path | Source |
|---|---------------|-------------|---------|--------------------|-------|----------|--------|
| 1 | Cadrage | `cyc:framing` | Cadrage | Clarifier intention, périmètre, contraintes | 1 | pilot detailed | §4.1 |
| 2 | Conception fonctionnelle | `cyc:functional-design` | Conception fonctionnelle | Usages, règles, objets métier | 2 | pilot detailed | §4.2 |
| 3 | Architecture fonctionnelle | `cyc:functional-architecture` | Architecture fonctionnelle | Structure, flux, découpage | 3 | synthetic fallback | §4.3 |
| 4 | UX/UI | `cyc:ux-ui` | UX/UI | Expérience et interface | 4 | synthetic | §4.4 |
| 5 | Backlog / user stories | `cyc:backlog` | Backlog / user stories | Stories testables | 5 | synthetic | §4.5 |
| 6 | Architecture technique | `cyc:technical-architecture` | Architecture technique | Stack, patterns, ADR | 6 | pilot detailed | §4.6 |
| 7 | Intégration / DevOps | `cyc:integration-devops` | Intégration / DevOps | CI/CD, environnements | 7 | synthetic | §4.7 |
| 8 | Delivery / implémentation | `cyc:delivery` | Delivery / implémentation | Implémentation bornée | 8 | synthetic | §4.8 |
| 9 | QA / validation | `cyc:qa-validation` | QA / validation | Preuves et réserves | 9 | pilot detailed | §4.9 |
| 10 | Sécurité / RSSI | `cyc:security` | Sécurité / RSSI | Menaces et contrôles | 10 | synthetic | §4.10 |
| 11 | Déploiement / release | `cyc:release` | Déploiement / release | Release contrôlée | 11 | synthetic | §4.11 |
| 12 | Observabilité / RUN readiness | `cyc:observability` | Observabilité / RUN readiness | Exploitabilité mesurable | 12 | synthetic | §4.12 |
| 13 | PR readiness | `cyc:pr-readiness` | PR readiness | Branche prête à PR | 13 | synthetic | §4.13 |
| 14 | Post-merge | `cyc:post-merge` | Post-merge | Clôture après merge | 14 | synthetic | §4.14 |
| 15 | Capitalisation / REX | `cyc:capitalization` | Capitalisation / REX | Apprentissage réutilisable | 15 | synthetic | §4.15 · **préexistant OA** |

`canonicalKey` harness (`cadrage` … `capitalisation-rex`) = **traçabilité uniquement**, jamais `cycleTypeId`.

## N. Gouvernance et cycle de vie (CAT-04 / CAT-05)

| Événement | Règle |
|-----------|-------|
| Ajout type / ID / dépréciation / remplacement / alias structurant / mapping doctrinal / impact instances | **Gate Morris** |
| Label / description non structurants | Revue documentaire proportionnée |
| Alias | 1→1 · pas d’ambiguïté · pas de recyclage · `replacedBy` valide |
| Alias initiaux | Absents OK tant qu’aucune migration |
| Suppression | Interdite si référencé |
| Rewrite silencieux instances | **Interdit** |

## O. Localisation (CAT-06)

ID neutre · labels FR · futur multi · jamais de traduction dans l’ID · fallback label explicite · changement de label sans changement d’identité.

## P. Relation avec T-A2

- QualifyCycle reste une fonction de domaine (profil depuis signaux).
- Le **parcours produit** ne présente pas le résultat comme contractuellement exploitable / executable tant que la résolution CKC obligatoire n’est pas valide.
- `capitalizationViaCycleTypeId` inchangé pour `cyc:capitalization`.
- CreateCycle hors V3.1.
- **Aucun changement code T-A2 dans ce cycle.**

## Q. Relation avec CKC (CAT-07 corrigé)

**Historique :** recommandation « résolution séparée / métadonnée informative » — **corrigée** par Morris.

| Règle | Position |
|-------|----------|
| CKC dans le mécanisme produit | **Obligatoire** |
| Candidate | Maturité projet/doctrine · **≠ optionnel** · **≠ baseline méthode globale** |
| Chemin de résolution | Obligatoire pour tout type |
| Priorité | Pilote détaillé si existant |
| Fallback | Synthétique obligatoire sinon |
| Fail-closed | Invalid/unavailable sans fallback valide |
| Ready / executable / delivery / QA / production | Exige CKC résolu et consommé |
| Traçabilité | Conception → prompt → delivery → QA → readiness → production |
| `executionAuthority` | **false** |
| Décision / gate Morris | **Non** |
| Remplace routing/template/guardrails | **Non** |
| Resolver | Responsabilité distincte possible · **consommation obligatoire** |
| UI | État de résolution pertinent · **pas** questionnaire CKC brut |
| Identité type | Indépendante du statut CKC |

## R. Relation avec l’UI

Liste contrôlée · pas de hardcode · labels du catalogue · états loading/unavailable/unknown · état CKC · pas de moteur de type · ID masquable.

## S. Erreurs et recovery

Ajouts CKC :

| Situation | Comportement |
|-----------|--------------|
| CKC invalid / unavailable sans fallback | Stop fail-closed · pas d’exploitabilité produit |
| Fallback synthétique manquant | Stop · corriger contrat catalogue |
| CKC non consommé / non tracé | Cycle non ready |

Autres erreurs catalogue (unavailable, unknown, duplicate, alias, drift, capitalization mismatch) inchangées · pas de fallback silencieux.

## T. Compatibilité et migration

Fenêtre pré-persistance · IDs adoptés contractuellement · runtime pending · alias/`replacedBy` post-persistance · fixtures ≠ catalogue.

## U. Slicing delivery (CAT-08 adopté — non ouvert)

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue runtime · 15 IDs · mapping CKC obligatoire | **Implémenté** · **QA FAIL** (validator) · correctif candidat |
| **V3.1-D2** | Projection · validate ID · résolution CKC obligatoire · QualifyCycle bridge read-only | Adopté · non commencé |
| **V3.1-D3** | UI Profile Qualification · type/profil/justification/disclosures/état CKC | Adopté · non commencé · réserve Figma |

Pas de CreateCycle en V3.1 · V3.2 = create explicite futur.
Fusion D1/D2/D3 = nouvel arbitrage Morris.

## V. Decision pack Morris — détail

### D-V3.1-CAT-01 — Source de vérité

Options : CAT-S1…S4. Recommandation historique : CAT-S1.
**Décision : CAT-S1 — DECIDED — ADOPTED BY MORRIS.**

### D-V3.1-CAT-02 — Identifiants

Options : CAT-I1…I4. Recommandation historique : CAT-I1.
**Décision : CAT-I1 — DECIDED — ADOPTED BY MORRIS.** Mapping §M adopté.

### D-V3.1-CAT-03 — Noyau métadonnées

Options historiques : minimal / étendu. Recommandation historique : minimal sans CKC obligatoire.
**Décision : MINIMAL_WITH_MANDATORY_CKC_CORE — DECIDED — ADOPTED BY MORRIS.**
**Enrichit** la recommandation initiale (CKC dans le noyau).

### D-V3.1-CAT-04 — Alias

Options : sans / contrôlés / migration forcée. Recommandation : contrôlés.
**Décision : CONTROLLED_ALIASES — DECIDED — ADOPTED BY MORRIS.**

### D-V3.1-CAT-05 — Gouvernance

Recommandation : Morris structural.
**Décision : MORRIS_FOR_STRUCTURAL_CHANGES — DECIDED — ADOPTED BY MORRIS.**

### D-V3.1-CAT-06 — Localisation

Recommandation : ID neutre + labels.
**Décision : NEUTRAL_ID_LOCALIZED_LABELS — DECIDED — ADOPTED BY MORRIS.**

### D-V3.1-CAT-07 — CKC

Recommandation historique : résolution séparée / référence optionnelle.
**Décision : INTEGRATED_MANDATORY_CKC_MECHANISM — DECIDED — ADOPTED BY MORRIS.**
**Corrige** la recommandation initiale.

### D-V3.1-CAT-08 — Slicing

Recommandation : D1→D2→D3.
**Décision : D1_THEN_D2_THEN_D3 — DECIDED — ADOPTED BY MORRIS.**

## W. Recommandation historique — **ARBITRÉE / CONSOMMÉE**

La recommandation §W initiale a été acceptée pour CAT-01/02/04/05/06/08, **enrichie** pour CAT-03, **corrigée** pour CAT-07. Source de décision = Morris.

## X. Résolution de la réserve

| Aspect | État |
|--------|------|
| Source / IDs / métadonnées / CKC / gouvernance / slicing | **Décidés** |
| R-V3.1-CATALOG-01 | **RESOLVED AT FUNCTIONAL CONTRACT AND MORRIS ARBITRATION LEVEL** |
| Runtime catalogue / mapping CKC | **IMPLEMENTED BY V3.1-D1** |
| Résolution orchestrée / resolver consommation | **Pending D2** |
| Delivery D2/D3 | **Not authorized** |

### Évidence V3.1-D1

- Contrat runtime : `app/lib/oa/cycle/domain/cycleTypeCatalog.ts`
- Quinze IDs CAT-I1 : **ADOPTED BY MORRIS — CONTRACTUAL ID — IMPLEMENTED BY V3.1-D1**
- Mapping CKC statique obligatoire : 4 detailed + 11 synthetic · `executionAuthority=false`
- Distinction : **mapping statique (D1)** ≠ **résolution orchestrée (D2)**
- Doc lot : `first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`
- Historique des décisions Morris (Decision record) : **conservé** ci-dessus

### Evidence QA V3.1-D1

- Rapport : `first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md`
- Données prod + freezes + 15 IDs + mapping CKC : **conformes**
- `validateCycleTypeCatalog` : **incomplet** sur lifecycle / doctrine / unavailableBehavior / fallback synthetic / bornes 1…15 / alias↔id / version (R-QA-01…09 majeures)
- Production **non corrigée** en cycle QA (règle GO)
- Distinction : **contrat adopté** · **runtime D1** · **QA evidence** · **orchestration D2 pending**
- R-V3.1-CATALOG-01 : contrat résolu · runtime D1 implémenté · **gouvernance validator à renforcer** · résolution orchestrée **toujours pending D2** (non déclarée)

## Y. Risques et réserves

Runtime D1 livré · gaps validator (QA) · orchestration D2 absente · divergence méthode/catalogue · dette migration · alias · localisation · process-local · Figma (D3) · confusion candidate doctrine vs baseline méthode · harness ≠ autorité · QualifyCycle domaine vs exploitabilité produit.

## Z. Anti-claims

- Adoption contractuelle ≠ implémentation runtime (historique) · **D1 a implémenté le contrat runtime**.
- Mapping CKC D1 ≠ résolution orchestrée D2.
- IDs implémentés dans le catalogue ≠ CycleInstance créés.
- CKC obligatoire ≠ baseline méthode globale.
- CKC obligatoire ≠ autorité d’exécution.
- Candidate ≠ optionnel (dans le produit candidate).
- Type ≠ profil · catalogue ≠ moteur · recommandation ≠ décision.
- D2/D3 **non** autorisés.
- Pas PRODUCT / RUN / IAM / AGENT READY · DELIVERY / CUTOVER AUTHORIZED · HARD CLOSED · T-A6 COMPLETE.

## AA. Verdict

**V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — V3.1-D1 RUNTIME IMPLEMENTED — QA FAIL (VALIDATOR GAPS) — READY FOR MORRIS QA-G3 DECISION — D2/D3 NOT AUTHORIZED**

Prochain gate candidat (non ouvert) :

`GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG — ADDRESS QA FINDINGS — PRODUCTION CONTRACT ONLY — NO D2 — NO UI — NO CREATECYCLE`

Statut : **READY FOR MORRIS QA-G3 DECISION** (verdict Cursor : FAIL)

---

# PROOF production catalog hash

1674243863d015411c602848404e2e41c046afa7

# PROOF index hash

3daf57578e528878ef8a9298813019bb3b86af3c

# PROOF 12/13

82be657cb3b88be0ac72d41e172106a557be101b
3ecb0256e14662a0e8244029a1329a6afb525444

---

# COMMAND EVIDENCE excerpts

### reinforced catalog


- true
+ false

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts:613:7
    611|           i.message.toLowerCase().includes("displayorder"),
    612|       ),
    613|     ).toBe(true);
       |       ^
    614|   });
    615|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[9/12]⎯

 FAIL  __tests__/oa/cycle/cycleTypeCatalog.test.ts > V3.1-D1 QA reinforcement — validator negatives & edges > detects alias equal to another entry cycleTypeId
AssertionError: expected false to be true // Object.is equality

- Expected
+ Received

- true
+ false

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts:641:7
    639|           i.message.toLowerCase().includes("alias"),
    640|       ),
    641|     ).toBe(true);
       |       ^
    642|   });
    643|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[10/12]⎯

 FAIL  __tests__/oa/cycle/cycleTypeCatalog.test.ts > V3.1-D1 QA reinforcement — validator negatives & edges > detects incorrect catalog version
AssertionError: expected false to be true // Object.is equality

- Expected
+ Received

- true
+ false

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts:659:7
    657|           i.message.toLowerCase().includes("version"),
    658|       ),
    659|     ).toBe(true);
       |       ^
    660|   });
    661|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[11/12]⎯

 FAIL  __tests__/oa/cycle/cycleTypeCatalog.test.ts > V3.1-D1 QA reinforcement — validator negatives & edges > detects unauthorized fallbackReference on synthetic
AssertionError: expected false to be true // Object.is equality

- Expected
+ Received

- true
+ false

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts:703:7
    701|           i.message.toLowerCase().includes("fallback"),
    702|       ),
    703|     ).toBe(true);
       |       ^
    704|   });
    705|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[12/12]⎯


 Test Files  1 failed (1)
      Tests  12 failed | 34 passed (46)
   Start at  21:08:29
   Duration  316ms (transform 84ms, setup 39ms, collect 114ms, tests 11ms, environment 0ms, prepare 31ms)

real 0.78
user 1.12
sys 0.34

### suite

+ false

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts:659:7
    657|           i.message.toLowerCase().includes("version"),
    658|       ),
    659|     ).toBe(true);
       |       ^
    660|   });
    661|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[11/12]⎯

 FAIL  __tests__/oa/cycle/cycleTypeCatalog.test.ts > V3.1-D1 QA reinforcement — validator negatives & edges > detects unauthorized fallbackReference on synthetic
AssertionError: expected false to be true // Object.is equality

- Expected
+ Received

- true
+ false

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts:703:7
    701|           i.message.toLowerCase().includes("fallback"),
    702|       ),
    703|     ).toBe(true);
       |       ^
    704|   });
    705|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[12/12]⎯


 Test Files  1 failed | 3 passed (4)
      Tests  12 failed | 82 passed (94)
   Start at  21:08:40
   Duration  378ms (transform 182ms, setup 167ms, collect 453ms, tests 136ms, environment 0ms, prepare 130ms)

real 0.63
user 1.75
sys 0.38

### typecheck


> sfia-studio@0.1.0 typecheck
> tsc --noEmit

real 1.07
user 1.61
sys 0.17

### lint


> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
real 1.62
user 0.86
sys 0.19

### build

   Generating static pages (7/10)
 ✓ Generating static pages (10/10)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      127 B         103 kB
├ ○ /_not-found                            127 B         103 kB
├ ○ /cycle-actif                         3.82 kB         119 kB
├ ○ /decision                            5.53 kB         120 kB
├ ƒ /nouvelle-demande                    10.1 kB         116 kB
├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
├ ƒ /projects/[id]                       2.66 kB         108 kB
├ ○ /projects/new                        2.62 kB         108 kB
├ ƒ /studio/projects/[id]                2.15 kB         112 kB
├ ○ /studio/projects/new                 4.07 kB         114 kB
├ ○ /synthese                            4.83 kB         120 kB
└ ƒ /workspace                             571 B         106 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.96 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

real 7.23
user 13.16
sys 1.63
