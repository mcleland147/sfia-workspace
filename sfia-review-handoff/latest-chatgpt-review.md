# SFIA Studio V3.1-D1 Cycle Type Catalog — Delivery Review Pack (FULL)

## Meta
- **Date/heure/fuseau :** 2026-07-30 20:49:15 CEST (+0200)
- **Cycle :** 8 — Delivery / implémentation
- **Profil :** Critical
- **Typologie :** EVOL
- **Gate :** GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE (2026-07-30 20:35 CEST)
- **CKC Delivery :** synthetic map + méthode §4.8 · method-candidate · obligatoire · executionAuthority=false

## Local Git Truth Check (phase 1 — framing)
- branche initiale : framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage
- HEAD = origin/main = 3e8a4374405dce98866e35fb60c5c7329701f191 · 0/0
- remote framing absente · remote delivery absente · staged aucun
- handoff tip pré-cycle : becff779c08aeb9e0a8b009eec0045192fe1f5ed · blob e73e1fe65bdf9bd41c24b3a1bae54bb9510e0c25

## Branche Delivery
- créée : delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime depuis HEAD
- HEAD inchangé · working tree documentaire préservé · hashes 12/13 inchangés

## Design d'implémentation
- Fichier unique domaine : cycleTypeCatalog.ts (types + données + ops + validate)
- Export via index.ts
- Tests : __tests__/oa/cycle/cycleTypeCatalog.test.ts
- Pas de modification application/* · pas de vertical-slice · pas UI
- CKC paths = string constants Git (pas d'import/fs runtime)
- 4 detailed + synthetic fallback · 11 synthetic primary

## Conventions
- Tests sous app/__tests__/oa/cycle/ (vitest)
- package manager : npm
- scripts : test / typecheck / lint / build

## Hashes documents hérités
| Doc | Hash (inchangé pour 12/13) |
|-----|----------------------------|
| 12 | 82be657cb3b88be0ac72d41e172106a557be101b UNCHANGED |
| 13 | 3ecb0256e14662a0e8244029a1329a6afb525444 UNCHANGED |

## Preuves tests
- npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts → 24/24 PASS
- npm test -- __tests__/oa/cycle/ → 72/72 PASS
- npm run typecheck → PASS
- npm run lint → PASS
- npm run build → PASS

## Diff controls
### status
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
### git diff --stat
```
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   1 +
 .../08-implementation-backlog-and-slicing.md       |  68 +++++-----
 .../README.md                                      | 144 +++++----------------
 3 files changed, 65 insertions(+), 148 deletions(-)
```
### git diff --name-status
```
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
```
### git diff --check
```
EXIT:0
```

## R-V3.1-CATALOG-01
contract/arbitration resolved · runtime catalog implemented by D1 · mandatory resolution orchestration pending D2

## Content coverage
- created catalog file full content : yes
- created test file full content : yes
- created D1 README full content : yes
- modified code useful full diff : yes
- modified project docs complete : yes
- inherited file 12 unchanged proof : yes
- inherited file 13 unchanged proof : yes
- fifteen IDs complete : yes
- CKC mapping complete : yes
- test evidence complete : yes
- synthesis only : no
- review pack verdict : complete

## Prochain gate
GO QA VALIDATION SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — FIFTEEN IDS — CONTRACT INVARIANTS AND NEGATIVE TESTS — NO D2 — NO UI — NO CREATECYCLE

## Verdict
V3.1-D1 CYCLE TYPE CATALOG RUNTIME CONTRACT IMPLEMENTED — MANDATORY CKC MAPPING IMPLEMENTED — READY FOR QA/VALIDATION DECISION — D2/D3 NOT AUTHORIZED

---

# FULL FILE: cycleTypeCatalog.ts

/**
 * V3.1-D1 — Cycle Type Catalog runtime contract (pure domain).
 *
 * Immutable projection of the fifteen Morris-adopted cycle types and their
 * mandatory CKC mapping metadata. No I/O, no resolver orchestration, no UI.
 *
 * Decisions: D-V3.1-CAT-01…08 (see framing doc 14).
 */

import { isOaIdentifier } from "./invariants";
import { CAPITALIZATION_CYCLE_TYPE_ID } from "./types";

/** Contract version of the static catalog snapshot. */
export const CYCLE_TYPE_CATALOG_VERSION = "0.1.0-v3.1-d1" as const;

/** Canonical Git path of the fifteen-cycles synthetic CKC map. */
export const CKC_SYNTHETIC_MAP_PATH =
  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md" as const;

/** Method candidate document used for doctrinal provenance. */
export const METHOD_CYCLES_DOC_PATH =
  "method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md" as const;

export const CKC_PILOT_CADRAGE_PATH =
  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md" as const;

export const CKC_PILOT_CONCEPTION_PATH =
  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md" as const;

export const CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH =
  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md" as const;

export const CKC_PILOT_QA_VALIDATION_PATH =
  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md" as const;

export type CycleTypeLifecycleStatus =
  | "active"
  | "deprecated"
  | "unavailable";

/** Primary CKC resolution level for catalog mapping (D1 static contract). */
export type CycleTypeCkcPrimaryLevel = "detailed" | "synthetic";

/**
 * Mandatory CKC mapping carried by each catalog entry.
 * Orchestrated resolution remains D2 — this is static contract metadata only.
 */
export type CycleTypeCkcMapping = {
  /** Always true for V3.1 catalog entries. */
  mandatory: true;
  primaryLevel: CycleTypeCkcPrimaryLevel;
  /** Git-relative path of the primary CKC source. */
  primaryReference: string;
  /**
   * Fallback policy:
   * - synthetic_map: use fifteen-cycles synthetic map
   * - none: synthetic primary with no further fallback (fail-closed if invalid)
   */
  fallbackPolicy: "synthetic_map" | "none";
  /** Present when primaryLevel is detailed (mandatory synthetic fallback). */
  fallbackReference?: typeof CKC_SYNTHETIC_MAP_PATH;
  /** CKC never holds execution authority. */
  executionAuthority: false;
  /** Candidate doctrine maturity — not optional, not global baseline. */
  doctrineStatus: "method-candidate";
  /** Expected product behaviour when no valid source can be resolved. */
  unavailableBehavior: "fail-closed";
};

export type CycleTypeDefinition = {
  cycleTypeId: string;
  /** Harness/method slug for traceability — never used as cycleTypeId. */
  canonicalKey: string;
  label: string;
  shortDescription: string;
  displayOrder: number;
  lifecycleStatus: CycleTypeLifecycleStatus;
  methodCycleNumber: number;
  methodReference: string;
  ckc: CycleTypeCkcMapping;
  /** Controlled aliases (1→1). Empty in D1 — no initial aliases. */
  aliases: readonly string[];
};

export type CycleTypeCatalog = {
  version: typeof CYCLE_TYPE_CATALOG_VERSION;
  entries: readonly CycleTypeDefinition[];
};

export type CycleTypeCatalogValidationIssue = {
  code: string;
  message: string;
};

function detailedCkc(primaryReference: string): CycleTypeCkcMapping {
  return {
    mandatory: true,
    primaryLevel: "detailed",
    primaryReference,
    fallbackPolicy: "synthetic_map",
    fallbackReference: CKC_SYNTHETIC_MAP_PATH,
    executionAuthority: false,
    doctrineStatus: "method-candidate",
    unavailableBehavior: "fail-closed",
  };
}

function syntheticCkc(): CycleTypeCkcMapping {
  return {
    mandatory: true,
    primaryLevel: "synthetic",
    primaryReference: CKC_SYNTHETIC_MAP_PATH,
    fallbackPolicy: "none",
    executionAuthority: false,
    doctrineStatus: "method-candidate",
    unavailableBehavior: "fail-closed",
  };
}

function methodRef(section: string): string {
  return `${METHOD_CYCLES_DOC_PATH} ${section}`;
}

/**
 * Immutable catalog entries — Morris-adopted CAT-I1 IDs.
 * Order is displayOrder / methodCycleNumber 1…15.
 */
const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
  Object.freeze({
    cycleTypeId: "cyc:framing",
    canonicalKey: "cadrage",
    label: "Cadrage",
    shortDescription: "Clarifier intention, périmètre, contraintes",
    displayOrder: 1,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 1,
    methodReference: methodRef("§4.1"),
    ckc: Object.freeze(detailedCkc(CKC_PILOT_CADRAGE_PATH)),
    aliases: Object.freeze([] as string[]),
  }),
  Object.freeze({
    cycleTypeId: "cyc:functional-design",
    canonicalKey: "conception-fonctionnelle",
    label: "Conception fonctionnelle",
    shortDescription: "Usages, règles, objets métier",
    displayOrder: 2,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 2,
    methodReference: methodRef("§4.2"),
    ckc: Object.freeze(detailedCkc(CKC_PILOT_CONCEPTION_PATH)),
    aliases: Object.freeze([] as string[]),
  }),
  Object.freeze({
    cycleTypeId: "cyc:functional-architecture",
    canonicalKey: "architecture-fonctionnelle",
    label: "Architecture fonctionnelle",
    shortDescription: "Structure, flux, découpage",
    displayOrder: 3,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 3,
    methodReference: methodRef("§4.3"),
    ckc: Object.freeze(syntheticCkc()),
    aliases: Object.freeze([] as string[]),
  }),
  Object.freeze({
    cycleTypeId: "cyc:ux-ui",
    canonicalKey: "ux-ui",
    label: "UX/UI",
    shortDescription: "Expérience et interface",
    displayOrder: 4,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 4,
    methodReference: methodRef("§4.4"),
    ckc: Object.freeze(syntheticCkc()),
    aliases: Object.freeze([] as string[]),
  }),
  Object.freeze({
    cycleTypeId: "cyc:backlog",
    canonicalKey: "backlog-user-stories",
    label: "Backlog / user stories",
    shortDescription: "Stories testables",
    displayOrder: 5,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 5,
    methodReference: methodRef("§4.5"),
    ckc: Object.freeze(syntheticCkc()),
    aliases: Object.freeze([] as string[]),
  }),
  Object.freeze({
    cycleTypeId: "cyc:technical-architecture",
    canonicalKey: "architecture-technique",
    label: "Architecture technique",
    shortDescription: "Stack, patterns, ADR",
    displayOrder: 6,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 6,
    methodReference: methodRef("§4.6"),
    ckc: Object.freeze(detailedCkc(CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH)),
    aliases: Object.freeze([] as string[]),
  }),
  Object.freeze({
    cycleTypeId: "cyc:integration-devops",
    canonicalKey: "integration-devops",
    label: "Intégration / DevOps",
    shortDescription: "CI/CD, environnements",
    displayOrder: 7,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 7,
    methodReference: methodRef("§4.7"),
    ckc: Object.freeze(syntheticCkc()),
    aliases: Object.freeze([] as string[]),
  }),
  Object.freeze({
    cycleTypeId: "cyc:delivery",
    canonicalKey: "delivery-implementation",
    label: "Delivery / implémentation",
    shortDescription: "Implémentation bornée",
    displayOrder: 8,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 8,
    methodReference: methodRef("§4.8"),
    ckc: Object.freeze(syntheticCkc()),
    aliases: Object.freeze([] as string[]),
  }),
  Object.freeze({
    cycleTypeId: "cyc:qa-validation",
    canonicalKey: "qa-validation",
    label: "QA / validation",
    shortDescription: "Preuves et réserves",
    displayOrder: 9,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 9,
    methodReference: methodRef("§4.9"),
    ckc: Object.freeze(detailedCkc(CKC_PILOT_QA_VALIDATION_PATH)),
    aliases: Object.freeze([] as string[]),
  }),
  Object.freeze({
    cycleTypeId: "cyc:security",
    canonicalKey: "securite-rssi",
    label: "Sécurité / RSSI",
    shortDescription: "Menaces et contrôles",
    displayOrder: 10,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 10,
    methodReference: methodRef("§4.10"),
    ckc: Object.freeze(syntheticCkc()),
    aliases: Object.freeze([] as string[]),
  }),
  Object.freeze({
    cycleTypeId: "cyc:release",
    canonicalKey: "deploiement-release",
    label: "Déploiement / release",
    shortDescription: "Release contrôlée",
    displayOrder: 11,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 11,
    methodReference: methodRef("§4.11"),
    ckc: Object.freeze(syntheticCkc()),
    aliases: Object.freeze([] as string[]),
  }),
  Object.freeze({
    cycleTypeId: "cyc:observability",
    canonicalKey: "observabilite-run-readiness",
    label: "Observabilité / RUN readiness",
    shortDescription: "Exploitabilité mesurable",
    displayOrder: 12,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 12,
    methodReference: methodRef("§4.12"),
    ckc: Object.freeze(syntheticCkc()),
    aliases: Object.freeze([] as string[]),
  }),
  Object.freeze({
    cycleTypeId: "cyc:pr-readiness",
    canonicalKey: "pr-readiness",
    label: "PR readiness",
    shortDescription: "Branche prête à PR",
    displayOrder: 13,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 13,
    methodReference: methodRef("§4.13"),
    ckc: Object.freeze(syntheticCkc()),
    aliases: Object.freeze([] as string[]),
  }),
  Object.freeze({
    cycleTypeId: "cyc:post-merge",
    canonicalKey: "post-merge",
    label: "Post-merge",
    shortDescription: "Clôture après merge",
    displayOrder: 14,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 14,
    methodReference: methodRef("§4.14"),
    ckc: Object.freeze(syntheticCkc()),
    aliases: Object.freeze([] as string[]),
  }),
  Object.freeze({
    cycleTypeId: CAPITALIZATION_CYCLE_TYPE_ID,
    canonicalKey: "capitalisation-rex",
    label: "Capitalisation / REX",
    shortDescription: "Apprentissage réutilisable",
    displayOrder: 15,
    lifecycleStatus: "active" as const,
    methodCycleNumber: 15,
    methodReference: methodRef("§4.15"),
    ckc: Object.freeze(syntheticCkc()),
    aliases: Object.freeze([] as string[]),
  }),
]) as readonly CycleTypeDefinition[];

/** Immutable catalog singleton (read-only contract). */
export const CYCLE_TYPE_CATALOG: CycleTypeCatalog = Object.freeze({
  version: CYCLE_TYPE_CATALOG_VERSION,
  entries: CYCLE_TYPE_ENTRIES,
});

const BY_ID: ReadonlyMap<string, CycleTypeDefinition> = new Map(
  CYCLE_TYPE_ENTRIES.map((entry) => [entry.cycleTypeId, entry]),
);

/** Adopted contractual IDs in method order. */
export const ADOPTED_CYCLE_TYPE_IDS: readonly string[] = Object.freeze(
  CYCLE_TYPE_ENTRIES.map((entry) => entry.cycleTypeId),
);

/**
 * List active catalog entries in display order.
 * Returns a shallow copy so callers cannot mutate the registry.
 */
export function listCycleTypes(): CycleTypeDefinition[] {
  return CYCLE_TYPE_ENTRIES.filter(
    (entry) => entry.lifecycleStatus === "active",
  ).map((entry) => entry);
}

/** Exact lookup by cycleTypeId — no label/canonicalKey fallback. */
export function getCycleTypeById(
  cycleTypeId: string,
): CycleTypeDefinition | undefined {
  return BY_ID.get(cycleTypeId);
}

/** Pure membership check for catalog IDs. */
export function isKnownCycleTypeId(cycleTypeId: string): boolean {
  return BY_ID.has(cycleTypeId);
}

/**
 * Pure validation of a catalog snapshot (used by tests / future governance).
 * Does not mutate production data.
 */
export function validateCycleTypeCatalog(
  catalog: CycleTypeCatalog,
): CycleTypeCatalogValidationIssue[] {
  const issues: CycleTypeCatalogValidationIssue[] = [];
  const entries = catalog.entries;

  if (entries.length !== 15) {
    issues.push({
      code: "COUNT",
      message: `expected 15 entries, got ${entries.length}`,
    });
  }

  const ids = new Set<string>();
  const keys = new Set<string>();
  const numbers = new Set<number>();
  const orders = new Set<number>();
  let detailedCount = 0;
  let syntheticCount = 0;

  for (const entry of entries) {
    if (!isOaIdentifier(entry.cycleTypeId)) {
      issues.push({
        code: "ID_PATTERN",
        message: `invalid OA identifier: ${entry.cycleTypeId}`,
      });
    }
    if (!entry.cycleTypeId.startsWith("cyc:")) {
      issues.push({
        code: "ID_PREFIX",
        message: `missing cyc: prefix: ${entry.cycleTypeId}`,
      });
    }
    if (ids.has(entry.cycleTypeId)) {
      issues.push({
        code: "ID_DUPLICATE",
        message: `duplicate cycleTypeId: ${entry.cycleTypeId}`,
      });
    }
    ids.add(entry.cycleTypeId);

    if (keys.has(entry.canonicalKey)) {
      issues.push({
        code: "CANONICAL_KEY_DUPLICATE",
        message: `duplicate canonicalKey: ${entry.canonicalKey}`,
      });
    }
    keys.add(entry.canonicalKey);

    if (numbers.has(entry.methodCycleNumber)) {
      issues.push({
        code: "METHOD_NUMBER_DUPLICATE",
        message: `duplicate methodCycleNumber: ${entry.methodCycleNumber}`,
      });
    }
    numbers.add(entry.methodCycleNumber);

    if (orders.has(entry.displayOrder)) {
      issues.push({
        code: "DISPLAY_ORDER_DUPLICATE",
        message: `duplicate displayOrder: ${entry.displayOrder}`,
      });
    }
    orders.add(entry.displayOrder);

    if (!entry.label.trim()) {
      issues.push({
        code: "LABEL_EMPTY",
        message: `empty label for ${entry.cycleTypeId}`,
      });
    }
    if (!entry.shortDescription.trim()) {
      issues.push({
        code: "DESCRIPTION_EMPTY",
        message: `empty description for ${entry.cycleTypeId}`,
      });
    }
    if (!entry.methodReference.trim()) {
      issues.push({
        code: "METHOD_REF_EMPTY",
        message: `empty methodReference for ${entry.cycleTypeId}`,
      });
    }

    if (!entry.ckc || entry.ckc.mandatory !== true) {
      issues.push({
        code: "CKC_MISSING",
        message: `CKC mapping missing/non-mandatory for ${entry.cycleTypeId}`,
      });
      continue;
    }
    if (entry.ckc.executionAuthority !== false) {
      issues.push({
        code: "CKC_EXECUTION_AUTHORITY",
        message: `executionAuthority must be false for ${entry.cycleTypeId}`,
      });
    }
    if (!entry.ckc.primaryReference?.trim()) {
      issues.push({
        code: "CKC_PRIMARY_REF",
        message: `missing primaryReference for ${entry.cycleTypeId}`,
      });
    }
    if (entry.ckc.primaryLevel === "detailed") {
      detailedCount += 1;
      if (
        entry.ckc.fallbackPolicy !== "synthetic_map" ||
        entry.ckc.fallbackReference !== CKC_SYNTHETIC_MAP_PATH
      ) {
        issues.push({
          code: "CKC_DETAILED_FALLBACK",
          message: `detailed entry requires synthetic_map fallback: ${entry.cycleTypeId}`,
        });
      }
    } else if (entry.ckc.primaryLevel === "synthetic") {
      syntheticCount += 1;
      if (entry.ckc.primaryReference !== CKC_SYNTHETIC_MAP_PATH) {
        issues.push({
          code: "CKC_SYNTHETIC_REF",
          message: `synthetic entry must reference synthetic map: ${entry.cycleTypeId}`,
        });
      }
    }

    // Alias ambiguity: more than one alias pointing to same string across entries
    // is checked globally below; per-entry duplicates:
    const aliasSet = new Set<string>();
    for (const alias of entry.aliases) {
      if (aliasSet.has(alias)) {
        issues.push({
          code: "ALIAS_AMBIGUOUS",
          message: `duplicate alias on ${entry.cycleTypeId}: ${alias}`,
        });
      }
      aliasSet.add(alias);
      if (alias === entry.cycleTypeId) {
        issues.push({
          code: "ALIAS_AMBIGUOUS",
          message: `alias equals cycleTypeId on ${entry.cycleTypeId}`,
        });
      }
    }
  }

  if (!ids.has(CAPITALIZATION_CYCLE_TYPE_ID)) {
    issues.push({
      code: "CAPITALIZATION_MISSING",
      message: `missing ${CAPITALIZATION_CYCLE_TYPE_ID}`,
    });
  } else if (CAPITALIZATION_CYCLE_TYPE_ID !== "cyc:capitalization") {
    issues.push({
      code: "CAPITALIZATION_MODIFIED",
      message: "cyc:capitalization value changed",
    });
  }

  if (detailedCount !== 4) {
    issues.push({
      code: "DETAILED_COUNT",
      message: `expected 4 detailed CKC mappings, got ${detailedCount}`,
    });
  }
  if (syntheticCount !== 11) {
    issues.push({
      code: "SYNTHETIC_COUNT",
      message: `expected 11 synthetic CKC mappings, got ${syntheticCount}`,
    });
  }

  // Cross-entry alias collisions
  const aliasOwners = new Map<string, string>();
  for (const entry of entries) {
    for (const alias of entry.aliases) {
      const owner = aliasOwners.get(alias);
      if (owner && owner !== entry.cycleTypeId) {
        issues.push({
          code: "ALIAS_AMBIGUOUS",
          message: `alias ${alias} owned by both ${owner} and ${entry.cycleTypeId}`,
        });
      }
      aliasOwners.set(alias, entry.cycleTypeId);
    }
  }

  return issues;
}

---

# FULL FILE: cycleTypeCatalog.test.ts

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

# FULL DIFF: index.ts

diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 78aea88..3daf575 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -9,6 +9,7 @@ export * from "./domain/types";
 export * from "./domain/errors";
 export * from "./domain/invariants";
 export * from "./domain/qualification";
+export * from "./domain/cycleTypeCatalog";

 export * from "./ports/cycleRepository";
 export * from "./ports/trajectoryRepository";

---

# FULL FILE: D1 README

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
| **Statut** | `V3.1-D1 CYCLE TYPE CATALOG RUNTIME CONTRACT IMPLEMENTED — MANDATORY CKC MAPPING IMPLEMENTED — READY FOR QA/VALIDATION DECISION — D2/D3 NOT AUTHORIZED` |
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

Résultats (2026-07-30) : catalog 24/24 PASS · suite oa/cycle 72/72 PASS · typecheck PASS · lint PASS · build PASS.

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

**V3.1-D1 CYCLE TYPE CATALOG RUNTIME CONTRACT IMPLEMENTED — MANDATORY CKC MAPPING IMPLEMENTED — READY FOR QA/VALIDATION DECISION — D2/D3 NOT AUTHORIZED**

---

# FULL FILE: framing README

# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — CATALOG DECISIONS ADOPTED — V3.1-D1 RUNTIME CONTRACT IMPLEMENTED — READY FOR QA/VALIDATION DECISION — D2/D3 NOT AUTHORIZED` |
| **Date** | 2026-07-30 20:48:00 CEST (+0200) |
| **Cycle courant** | 8 — Delivery V3.1-D1 Cycle Type Catalog Runtime |
| **Profil** | **Critical** |
| **Typologie** | EVOL |
| **Gate courant** | `GO DELIVERY SFIA STUDIO V3.1-D1 …` **consommé** (2026-07-30 20:35 CEST) |
| **Branche Delivery** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **Code D1** | `lib/oa/cycle/domain/cycleTypeCatalog.ts` · tests · exports |
| **Docs protégées** | `12` / `13` **inchangés** |

## Synthèse

| Lot | État |
|-----|------|
| V1 / V2 | intégrés `main` |
| V3 arbitrage D-V3 | terminé (`12`) |
| V3.1 conception | terminée (`13`) |
| V3.1 catalogue décisions | adoptées (`14`) |
| **V3.1-D1** catalogue runtime + mapping CKC | **implémenté** — [README D1](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md) |
| V3.1-D2 resolver + QualifyCycle bridge | **non autorisé** |
| V3.1-D3 UI | **non autorisé** · D-VS-05 / Figma |
| V3.2 / V4–V6 | non autorisés |

**R-V3.1-CATALOG-01 :** contrat + arbitrage résolus · **runtime catalog D1 implémenté** · résolution orchestrée **pending D2**.

**CKC :** obligatoire dans le mécanisme produit · mapping statique D1 · consommation orchestrée = D2 · `executionAuthority=false` · candidate ≠ optionnel ≠ baseline méthode globale.

## Décisions (synthèse)

D-VS-01…04 adoptées · D-VS-05 NOT CONSUMED · D-V3-01…08 adoptées · D-V3.1-CAT-01…08 adoptées · quinze IDs CAT-I1 implémentés dans le contrat runtime.

## Index

| Doc | Sujet |
|-----|-------|
| `12` | V3 cadrage + arbitrage |
| `13` | V3.1 conception fonctionnelle |
| `14` | V3.1 catalogue architecture + adoption |
| V3.1-D1 README | Contrat runtime catalogue |

## Gate candidat suivant

`GO QA VALIDATION SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — FIFTEEN IDS — CONTRACT INVARIANTS AND NEGATIVE TESTS — NO D2 — NO UI — NO CREATECYCLE`

## Verdict

`V3.1-D1 CYCLE TYPE CATALOG RUNTIME CONTRACT IMPLEMENTED — MANDATORY CKC MAPPING IMPLEMENTED — READY FOR QA/VALIDATION DECISION — D2/D3 NOT AUTHORIZED`

---

# FULL FILE: backlog 08

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

**Statut :** `IMPLEMENTATION COMPLETE — READY FOR QA/VALIDATION DECISION`.

Doc : [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md)

| Preuve | Résultat |
|--------|----------|
| 15 IDs CAT-I1 | implémentés |
| Mapping CKC obligatoire | 4 detailed + 11 synthetic |
| Tests catalog | 24 PASS |
| Suite oa/cycle | 72 PASS |
| typecheck / lint / build | PASS |
| Resolver / bridge / UI | **hors lot** |

### Slicing CAT-08

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue runtime · mapping CKC | **implémenté** · QA pending |
| **V3.1-D2** | Projection · validate · resolver obligatoire · QualifyCycle bridge | **non autorisé** |
| **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |

### Réserves D2

Orchestration CKC · consommation fail-closed runtime · bridge QualifyCycle · exposition vertical-slice · exploitabilité produit du résultat.

## Lot V3.2 / V4 / V5 / V6

**NOT AUTHORIZED.**

---

# FULL FILE: 14 (updated)

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
| **Statut documentaire** | `V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — V3.1-D1 RUNTIME CONTRACT IMPLEMENTED — READY FOR QA/VALIDATION DECISION — D2/D3 NOT AUTHORIZED` |
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
| **V3.1-D1** | Catalogue runtime · 15 IDs · mapping CKC obligatoire | **Implémenté** · QA pending |
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

## Y. Risques et réserves

Runtime D1 livré · orchestration D2 absente · divergence méthode/catalogue · dette migration · alias · localisation · process-local · Figma (D3) · confusion candidate doctrine vs baseline méthode · harness ≠ autorité · QualifyCycle domaine vs exploitabilité produit.

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

**V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — V3.1-D1 RUNTIME CONTRACT IMPLEMENTED — READY FOR QA/VALIDATION DECISION — D2/D3 NOT AUTHORIZED**

Prochain gate candidat (non ouvert) :

`GO QA VALIDATION SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — FIFTEEN IDS — CONTRACT INVARIANTS AND NEGATIVE TESTS — NO D2 — NO UI — NO CREATECYCLE`

Statut : **READY FOR QA/VALIDATION DECISION**

---

# PROOF 12 unchanged (hash)

82be657cb3b88be0ac72d41e172106a557be101b

# PROOF 13 unchanged (hash)

3ecb0256e14662a0e8244029a1329a6afb525444

---

# CURRENT-CYCLE DIFF framing README

--- .tmp-sfia-review/before-d1/README.md	2026-07-30 20:45:48
+++ projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md	2026-07-30 20:48:57
@@ -2,74 +2,51 @@

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | `FRAMING LIVING — V3 ARBITRATION COMPLETE — V3.1 DESIGN COMPLETE — CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED` |
-| **Date** | 2026-07-30 20:29:00 CEST (+0200) |
-| **Cycle courant** | 3 — Architecture fonctionnelle (adoption catalogue + correction CKC) |
+| **Statut** | `FRAMING LIVING — CATALOG DECISIONS ADOPTED — V3.1-D1 RUNTIME CONTRACT IMPLEMENTED — READY FOR QA/VALIDATION DECISION — D2/D3 NOT AUTHORIZED` |
+| **Date** | 2026-07-30 20:48:00 CEST (+0200) |
+| **Cycle courant** | 8 — Delivery V3.1-D1 Cycle Type Catalog Runtime |
 | **Profil** | **Critical** |
-| **Typologie** | DOC |
-| **Gate courant** | `GO ADOPT SFIA STUDIO V3.1 CYCLE TYPE CATALOG …` **consommé** (2026-07-30 20:23 CEST) |
-| **Branche** | `framing/sfia-studio-visible-slice-v3-cycle-recommendation-cadrage` |
+| **Typologie** | EVOL |
+| **Gate courant** | `GO DELIVERY SFIA STUDIO V3.1-D1 …` **consommé** (2026-07-30 20:35 CEST) |
+| **Branche Delivery** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
 | **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
-| **Code applicatif** | **aucune modification** |
-| **Docs** | `12` inchangé · `13` scoped · `14` adoption enregistrée |
+| **Code D1** | `lib/oa/cycle/domain/cycleTypeCatalog.ts` · tests · exports |
+| **Docs protégées** | `12` / `13` **inchangés** |

-## Objectif
+## Synthèse

-Parcours cible : **Project Creation → Cycle Recommendation → Morris Decision → Readiness Dashboard** — cœur T-A0→T-A7, sans IAM, sans persistance produit, sans agent, sans delivery/cutover autorisés.
-
-## Synthèse d’état
-
 | Lot | État |
 |-----|------|
 | V1 / V2 | intégrés `main` |
 | V3 arbitrage D-V3 | terminé (`12`) |
 | V3.1 conception | terminée (`13`) |
-| V3.1 catalogue | **D-V3.1-CAT-01…08 adoptées** (`14`) |
-| R-V3.1-CATALOG-01 | **résolue au niveau contrat/arbitrage** · runtime pending |
-| CKC | **obligatoire** dans le mécanisme produit · candidate ≠ optionnel · `executionAuthority=false` · ≠ baseline méthode globale |
-| V3.1-D1 / D2 / D3 | slicing adopté · **non commencés** |
+| V3.1 catalogue décisions | adoptées (`14`) |
+| **V3.1-D1** catalogue runtime + mapping CKC | **implémenté** — [README D1](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md) |
+| V3.1-D2 resolver + QualifyCycle bridge | **non autorisé** |
+| V3.1-D3 UI | **non autorisé** · D-VS-05 / Figma |
 | V3.2 / V4–V6 | non autorisés |

-**Runtime catalogue / resolver : absents.** IDs contractuels adoptés · **pas implémentés**.
+**R-V3.1-CATALOG-01 :** contrat + arbitrage résolus · **runtime catalog D1 implémenté** · résolution orchestrée **pending D2**.

-## Décisions Morris (synthèse)
+**CKC :** obligatoire dans le mécanisme produit · mapping statique D1 · consommation orchestrée = D2 · `executionAuthority=false` · candidate ≠ optionnel ≠ baseline méthode globale.

-### D-VS / D-V3
+## Décisions (synthèse)

-D-VS-01…04 adoptées · D-VS-05 NOT CONSUMED · D-V3-01…08 adoptées (`12`).
+D-VS-01…04 adoptées · D-VS-05 NOT CONSUMED · D-V3-01…08 adoptées · D-V3.1-CAT-01…08 adoptées · quinze IDs CAT-I1 implémentés dans le contrat runtime.

-### D-V3.1-CAT — adoptées 2026-07-30 20:23 CEST
-
-| ID | Décision |
-|----|----------|
-| CAT-01 | CAT-S1 — contrat Git catalogue |
-| CAT-02 | CAT-I1 — quinze IDs `cyc:<english-slug>` · `cyc:capitalization` inchangé |
-| CAT-03 | MINIMAL_WITH_MANDATORY_CKC_CORE |
-| CAT-04 | CONTROLLED_ALIASES |
-| CAT-05 | MORRIS_FOR_STRUCTURAL_CHANGES |
-| CAT-06 | NEUTRAL_ID_LOCALIZED_LABELS |
-| CAT-07 | INTEGRATED_MANDATORY_CKC_MECHANISM |
-| CAT-08 | D1_THEN_D2_THEN_D3 |
-
-Détail : `14`.
-
-## Figma / process-local
-
-Contrat Git temporaire · D-VS-05 non consommée · réévaluation avant D3 · process-local maintenu.
-
 ## Index

 | Doc | Sujet |
 |-----|-------|
-| `01`–`11` | Framing historique + V1 |
 | `12` | V3 cadrage + arbitrage |
 | `13` | V3.1 conception fonctionnelle |
-| `14` | V3.1 catalogue — architecture + **adoption** |
+| `14` | V3.1 catalogue architecture + adoption |
+| V3.1-D1 README | Contrat runtime catalogue |

 ## Gate candidat suivant

-`GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE`
+`GO QA VALIDATION SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — FIFTEEN IDS — CONTRACT INVARIANTS AND NEGATIVE TESTS — NO D2 — NO UI — NO CREATECYCLE`

 ## Verdict

-`V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED`
+`V3.1-D1 CYCLE TYPE CATALOG RUNTIME CONTRACT IMPLEMENTED — MANDATORY CKC MAPPING IMPLEMENTED — READY FOR QA/VALIDATION DECISION — D2/D3 NOT AUTHORIZED`

---

# CURRENT-CYCLE DIFF 08

--- .tmp-sfia-review/before-d1/08-implementation-backlog-and-slicing.md	2026-07-30 20:45:48
+++ projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md	2026-07-30 20:48:57
@@ -10,7 +10,7 @@

 ## Lot V3 — Cycle Recommendation

-**CADRAGE + ARBITRATION COMPLETE** — [`12`](./12-v3-cycle-recommendation-cadrage.md). D-V3 adoptées.
+**CADRAGE + ARBITRATION COMPLETE** — [`12`](./12-v3-cycle-recommendation-cadrage.md).

 ## Lot V3.1 — Profile Qualification (conception)

@@ -18,47 +18,35 @@

 ## Lot V3.1 — Cycle Type Catalog (architecture + adoption)

-**DECISIONS ADOPTED — CONTRACT LEVEL** — [`14`](./14-v3-1-cycle-type-catalog-functional-architecture.md).
+**DECISIONS ADOPTED** — [`14`](./14-v3-1-cycle-type-catalog-functional-architecture.md).

-| Item | État |
-|------|------|
-| D-V3.1-CAT-01…08 | `DECIDED — ADOPTED BY MORRIS` |
-| Quinze IDs CAT-I1 | Adoptés contractuellement · **non implémentés** |
-| CKC | Obligatoire intégré · candidate ≠ optionnel · `executionAuthority=false` |
-| R-V3.1-CATALOG-01 | **RESOLVED AT CONTRACT/ARBITRATION LEVEL** · runtime pending |
-| Registry / resolver runtime | **Absent** |
+## Lot V3.1-D1 — Catalogue runtime + mapping CKC

-### Slicing adopté (CAT-08) — non commencé
+**Statut :** `IMPLEMENTATION COMPLETE — READY FOR QA/VALIDATION DECISION`.

-| Lot | Contenu | Statut |
-|-----|---------|--------|
-| **V3.1-D1** | Catalogue runtime · 15 IDs · mapping CKC obligatoire | Candidat · **non ouvert** |
-| **V3.1-D2** | Projection · validate · resolver obligatoire · QualifyCycle bridge | Après D1 |
-| **V3.1-D3** | UI Profile Qualification · état CKC | Après D2 · réserve Figma |
+Doc : [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md)

-### Critères d’entrée V3.1-D1
+| Preuve | Résultat |
+|--------|----------|
+| 15 IDs CAT-I1 | implémentés |
+| Mapping CKC obligatoire | 4 detailed + 11 synthetic |
+| Tests catalog | 24 PASS |
+| Suite oa/cycle | 72 PASS |
+| typecheck / lint / build | PASS |
+| Resolver / bridge / UI | **hors lot** |

-1. GO delivery D1 distinct.
-2. Respect contrat `14` (IDs + CKC metadata).
-3. Aucun QualifyCycle bridge / UI / CreateCycle dans D1.
-4. Pas de promotion CKC baseline méthode globale.
-5. Tests bornés au catalogue + mapping CKC (au delivery).
-6. `.tmp-sfia-review/**` hors commit.
+### Slicing CAT-08

-### Gates
+| Lot | Contenu | Statut |
+|-----|---------|--------|
+| **V3.1-D1** | Catalogue runtime · mapping CKC | **implémenté** · QA pending |
+| **V3.1-D2** | Projection · validate · resolver obligatoire · QualifyCycle bridge | **non autorisé** |
+| **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |

-- Structurants catalogue : Morris (CAT-05).
-- Delivery D1/D2/D3 : GO distincts.
-- Fusion d’incréments : nouvel arbitrage.
+### Réserves D2

-## Lot V3.2 — CreateCycle
+Orchestration CKC · consommation fail-closed runtime · bridge QualifyCycle · exposition vertical-slice · exploitabilité produit du résultat.

-**NOT AUTHORIZED.**
+## Lot V3.2 / V4 / V5 / V6

-## Lots V4 / V5 / V6
-
 **NOT AUTHORIZED.**
-
-## Note
-
-D1 **non commencé**. Catalogue **non implémenté**. Resolver **non implémenté**.

---

# CURRENT-CYCLE DIFF 14

--- .tmp-sfia-review/before-d1/14-v3-1-cycle-type-catalog-functional-architecture.md	2026-07-30 20:45:48
+++ projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/14-v3-1-cycle-type-catalog-functional-architecture.md	2026-07-30 20:48:57
@@ -14,7 +14,7 @@
 | **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
 | **CKC (ce cycle)** | Pilote détaillé **absent** · fallback carte synthétique + méthode §4.3 · `method-candidate` · **consommation obligatoire** · **executionAuthority=false** |
 | **Entrées héritées** | `12` (lecture seule) · `13` (conception V3.1) |
-| **Statut documentaire** | `V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED` |
+| **Statut documentaire** | `V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — V3.1-D1 RUNTIME CONTRACT IMPLEMENTED — READY FOR QA/VALIDATION DECISION — D2/D3 NOT AUTHORIZED` |
 | **Commit / push / PR projet** | **non** |
 | **Code / registry / resolver / Figma** | **non** |

@@ -181,7 +181,7 @@
 ## M. Mapping des quinze IDs — **ADOPTÉ**

 **Stratégie :** CAT-I1. Exactement quinze entrées.
-Chaque ID : **`ADOPTED BY MORRIS — CONTRACTUAL ID — NOT YET IMPLEMENTED`**.
+Chaque ID : **`ADOPTED BY MORRIS — CONTRACTUAL ID — IMPLEMENTED BY V3.1-D1`**.
 `cyc:capitalization` : valeur et sens **inchangés**.

 | # | Nom canonique | cycleTypeId | Label FR | Description courte | Ordre | CKC path | Source |
@@ -272,7 +272,7 @@

 | Lot | Contenu | Statut |
 |-----|---------|--------|
-| **V3.1-D1** | Catalogue runtime · 15 IDs · mapping CKC obligatoire | **Adopté comme slicing** · delivery **non commencé** |
+| **V3.1-D1** | Catalogue runtime · 15 IDs · mapping CKC obligatoire | **Implémenté** · QA pending |
 | **V3.1-D2** | Projection · validate ID · résolution CKC obligatoire · QualifyCycle bridge read-only | Adopté · non commencé |
 | **V3.1-D3** | UI Profile Qualification · type/profil/justification/disclosures/état CKC | Adopté · non commencé · réserve Figma |

@@ -333,30 +333,41 @@
 |--------|------|
 | Source / IDs / métadonnées / CKC / gouvernance / slicing | **Décidés** |
 | R-V3.1-CATALOG-01 | **RESOLVED AT FUNCTIONAL CONTRACT AND MORRIS ARBITRATION LEVEL** |
-| Runtime catalogue / resolver | **Pending** |
-| Delivery D1 | **Requires separate GO** · **not authorized** |
+| Runtime catalogue / mapping CKC | **IMPLEMENTED BY V3.1-D1** |
+| Résolution orchestrée / resolver consommation | **Pending D2** |
+| Delivery D2/D3 | **Not authorized** |

+### Évidence V3.1-D1
+
+- Contrat runtime : `app/lib/oa/cycle/domain/cycleTypeCatalog.ts`
+- Quinze IDs CAT-I1 : **ADOPTED BY MORRIS — CONTRACTUAL ID — IMPLEMENTED BY V3.1-D1**
+- Mapping CKC statique obligatoire : 4 detailed + 11 synthetic · `executionAuthority=false`
+- Distinction : **mapping statique (D1)** ≠ **résolution orchestrée (D2)**
+- Doc lot : `first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`
+- Historique des décisions Morris (Decision record) : **conservé** ci-dessus
+
 ## Y. Risques et réserves

-Runtime absent · divergence méthode/catalogue · dette migration · alias · localisation · sur-architecture delivery · process-local · Figma (D3) · confusion candidate doctrine vs baseline méthode · harness ≠ autorité · QualifyCycle domaine vs exploitabilité produit.
+Runtime D1 livré · orchestration D2 absente · divergence méthode/catalogue · dette migration · alias · localisation · process-local · Figma (D3) · confusion candidate doctrine vs baseline méthode · harness ≠ autorité · QualifyCycle domaine vs exploitabilité produit.

 ## Z. Anti-claims

-- Adoption contractuelle ≠ implémentation runtime.
-- IDs adoptés ≠ registry disponible.
+- Adoption contractuelle ≠ implémentation runtime (historique) · **D1 a implémenté le contrat runtime**.
+- Mapping CKC D1 ≠ résolution orchestrée D2.
+- IDs implémentés dans le catalogue ≠ CycleInstance créés.
 - CKC obligatoire ≠ baseline méthode globale.
 - CKC obligatoire ≠ autorité d’exécution.
 - Candidate ≠ optionnel (dans le produit candidate).
 - Type ≠ profil · catalogue ≠ moteur · recommandation ≠ décision.
-- Delivery **non** autorisé.
+- D2/D3 **non** autorisés.
 - Pas PRODUCT / RUN / IAM / AGENT READY · DELIVERY / CUTOVER AUTHORIZED · HARD CLOSED · T-A6 COMPLETE.

 ## AA. Verdict

-**V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — READY FOR DELIVERY D1 DECISION — IMPLEMENTATION NOT AUTHORIZED**
+**V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — V3.1-D1 RUNTIME CONTRACT IMPLEMENTED — READY FOR QA/VALIDATION DECISION — D2/D3 NOT AUTHORIZED**

 Prochain gate candidat (non ouvert) :

-`GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE`
+`GO QA VALIDATION SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — FIFTEEN IDS — CONTRACT INVARIANTS AND NEGATIVE TESTS — NO D2 — NO UI — NO CREATECYCLE`

-Statut : **READY FOR DELIVERY D1 DECISION**
+Statut : **READY FOR QA/VALIDATION DECISION**
