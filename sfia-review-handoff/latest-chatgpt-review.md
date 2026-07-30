# SFIA Studio V3.1-D1 — Corrective Delivery Review Pack (FULL)

## Meta
- **Date/heure/fuseau :** 2026-07-30 21:22:41 CEST (+0200)
- **Cycle :** 8 — Delivery / implémentation (correctif post-QA)
- **Profil :** Critical
- **Typologie :** EVOL
- **Gate :** GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG — ADDRESS QA FINDINGS — PRODUCTION CONTRACT ONLY — NO D2 — NO UI — NO CREATECYCLE (2026-07-30 21:14 CEST)
- **CKC Delivery :** synthetic map + §4.8 · method-candidate · obligatoire · executionAuthority=false

## Local Git Truth Check
- branche delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime
- HEAD = origin/main = 3e8a4374405dce98866e35fb60c5c7329701f191 · 0/0
- remote Delivery absente · staged aucun
- handoff QA : a2e2e1a165fa0bb4d175b1cf7ee38c53791ff9ee · blob 9de8a7f960cbf2984e58b52aa0f0b924a8ba5eb3
- catalog initial hash 1674243863d015411c602848404e2e41c046afa7
- index 3daf57578e528878ef8a9298813019bb3b86af3c · docs 12/13 protégés

## Baseline avant correction
- catalog 34 PASS / 12 FAIL (46)
- suite oa/cycle 82 PASS / 12 FAIL (94)

## Findings R-QA-01…09 adressés
CATALOG_VERSION · LIFECYCLE_STATUS_INVALID · CKC_DOCTRINE_STATUS · CKC_UNAVAILABLE_BEHAVIOR · CKC_PRIMARY_LEVEL · CKC_SYNTHETIC_FALLBACK_POLICY · CKC_SYNTHETIC_FALLBACK_REF · METHOD_NUMBER_RANGE · METHOD_NUMBER_SET · DISPLAY_ORDER_RANGE · DISPLAY_ORDER_SET · ALIAS_COLLIDES_WITH_ID

## Mini-plan
validator-only · helpers privés · tests oracle inchangés · données/API/version inchangées

## Preuves après
- catalog 46/46 · suite 94/94 · npm test 827/827 · typecheck/lint/build PASS
- test QA hash 0102fc02edb6e6f16420ea0de31a0d6361b221ba UNCHANGED
- index / QA01 / 12 / 13 UNCHANGED

## Content coverage
- initial/final production full : yes
- production diff complete : yes
- QA test unchanged proof : yes
- index/QA01/12/13 unchanged : yes
- corrective report full : yes
- modified docs full : yes
- findings/command/test evidence : yes
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
 .../08-implementation-backlog-and-slicing.md       |  82 ++++++-----
 .../README.md                                      | 152 +++++----------------
 3 files changed, 82 insertions(+), 153 deletions(-)
```
## git diff --name-status
```
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
```

## Verdict
V3.1-D1 CORRECTIVE DELIVERY IMPLEMENTED —
QA FINDINGS R-QA-01 TO R-QA-09 ADDRESSED —
READY FOR QA REVALIDATION DECISION —
PR READINESS AND D2/D3 NOT AUTHORIZED

## Prochain gate
GO QA REVALIDATION SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG — VALIDATOR CORRECTED — R-QA-01 TO R-QA-09 — FULL NEGATIVE SUITE — NO D2 — NO UI — NO CREATECYCLE

---
# INITIAL production cycleTypeCatalog.ts FULL
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
# FINAL production cycleTypeCatalog.ts FULL
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

const ALLOWED_LIFECYCLE_STATUSES: ReadonlySet<string> = new Set([
  "active",
  "deprecated",
  "unavailable",
]);

const ALLOWED_PRIMARY_LEVELS: ReadonlySet<string> = new Set([
  "detailed",
  "synthetic",
]);

const CANONICAL_ONE_TO_FIFTEEN: readonly number[] = Object.freeze([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
]);

/** Exact membership of the closed set {1…15}. */
function isExactOneToFifteen(values: ReadonlySet<number>): boolean {
  if (values.size !== 15) {
    return false;
  }
  for (const n of CANONICAL_ONE_TO_FIFTEEN) {
    if (!values.has(n)) {
      return false;
    }
  }
  return true;
}

function isIntegerInOneToFifteen(value: number): boolean {
  return Number.isInteger(value) && value >= 1 && value <= 15;
}

/**
 * Pure validation of a catalog snapshot (used by tests / future governance).
 * Does not mutate production data. Returns issues — never throws on invalid entries.
 */
export function validateCycleTypeCatalog(
  catalog: CycleTypeCatalog,
): CycleTypeCatalogValidationIssue[] {
  const issues: CycleTypeCatalogValidationIssue[] = [];
  const entries = catalog.entries;

  if (catalog.version !== CYCLE_TYPE_CATALOG_VERSION) {
    issues.push({
      code: "CATALOG_VERSION",
      message: `catalog version mismatch: expected ${CYCLE_TYPE_CATALOG_VERSION}, got ${String(catalog.version)}`,
    });
  }

  if (entries.length !== 15) {
    issues.push({
      code: "COUNT",
      message: `expected 15 entries, got ${entries.length}`,
    });
  }

  // Collect all cycleTypeIds first for alias↔id collision checks.
  const allCycleTypeIds = new Set<string>();
  for (const entry of entries) {
    allCycleTypeIds.add(entry.cycleTypeId);
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
    if (!isIntegerInOneToFifteen(entry.methodCycleNumber)) {
      issues.push({
        code: "METHOD_NUMBER_RANGE",
        message: `methodCycleNumber out of range 1…15 for ${entry.cycleTypeId}: ${String(entry.methodCycleNumber)}`,
      });
    }

    if (orders.has(entry.displayOrder)) {
      issues.push({
        code: "DISPLAY_ORDER_DUPLICATE",
        message: `duplicate displayOrder: ${entry.displayOrder}`,
      });
    }
    orders.add(entry.displayOrder);
    if (!isIntegerInOneToFifteen(entry.displayOrder)) {
      issues.push({
        code: "DISPLAY_ORDER_RANGE",
        message: `displayOrder out of range 1…15 for ${entry.cycleTypeId}: ${String(entry.displayOrder)}`,
      });
    }

    if (!ALLOWED_LIFECYCLE_STATUSES.has(entry.lifecycleStatus as string)) {
      issues.push({
        code: "LIFECYCLE_STATUS_INVALID",
        message: `invalid lifecycleStatus for ${entry.cycleTypeId}: ${String(entry.lifecycleStatus)}`,
      });
    }

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
    if (entry.ckc.doctrineStatus !== "method-candidate") {
      issues.push({
        code: "CKC_DOCTRINE_STATUS",
        message: `doctrineStatus must be method-candidate for ${entry.cycleTypeId}`,
      });
    }
    if (entry.ckc.unavailableBehavior !== "fail-closed") {
      issues.push({
        code: "CKC_UNAVAILABLE_BEHAVIOR",
        message: `unavailableBehavior must be fail-closed for ${entry.cycleTypeId}`,
      });
    }
    if (!entry.ckc.primaryReference?.trim()) {
      issues.push({
        code: "CKC_PRIMARY_REF",
        message: `missing primaryReference for ${entry.cycleTypeId}`,
      });
    }

    const primaryLevel = entry.ckc.primaryLevel as string;
    if (!ALLOWED_PRIMARY_LEVELS.has(primaryLevel)) {
      issues.push({
        code: "CKC_PRIMARY_LEVEL",
        message: `unknown primaryLevel for ${entry.cycleTypeId}: ${String(entry.ckc.primaryLevel)}`,
      });
    } else if (entry.ckc.primaryLevel === "detailed") {
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
      if (entry.ckc.fallbackPolicy !== "none") {
        issues.push({
          code: "CKC_SYNTHETIC_FALLBACK_POLICY",
          message: `synthetic entry requires fallbackPolicy none: ${entry.cycleTypeId}`,
        });
      }
      if (entry.ckc.fallbackReference !== undefined) {
        issues.push({
          code: "CKC_SYNTHETIC_FALLBACK_REF",
          message: `synthetic entry must not carry fallbackReference: ${entry.cycleTypeId}`,
        });
      }
    }

    const aliasSet = new Set<string>();
    for (const alias of entry.aliases) {
      if (aliasSet.has(alias)) {
        issues.push({
          code: "ALIAS_AMBIGUOUS",
          message: `duplicate alias on ${entry.cycleTypeId}: ${alias}`,
        });
      }
      aliasSet.add(alias);
      if (allCycleTypeIds.has(alias)) {
        issues.push({
          code: "ALIAS_COLLIDES_WITH_ID",
          message: `alias collides with cycleTypeId (${alias}) on ${entry.cycleTypeId}`,
        });
      }
    }
  }

  if (!isExactOneToFifteen(numbers)) {
    issues.push({
      code: "METHOD_NUMBER_SET",
      message: "methodCycleNumber set must be exactly 1…15",
    });
  }
  if (!isExactOneToFifteen(orders)) {
    issues.push({
      code: "DISPLAY_ORDER_SET",
      message: "displayOrder set must be exactly 1…15",
    });
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

  // Cross-entry alias collisions (shared alias between two entries).
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
# PRODUCTION DIFF (before → after)
--- .tmp-sfia-review/before-corrective/cycleTypeCatalog.ts	2026-07-30 21:20:09
+++ projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts	2026-07-30 21:22:41
@@ -343,11 +343,43 @@
 /** Pure membership check for catalog IDs. */
 export function isKnownCycleTypeId(cycleTypeId: string): boolean {
   return BY_ID.has(cycleTypeId);
+}
+
+const ALLOWED_LIFECYCLE_STATUSES: ReadonlySet<string> = new Set([
+  "active",
+  "deprecated",
+  "unavailable",
+]);
+
+const ALLOWED_PRIMARY_LEVELS: ReadonlySet<string> = new Set([
+  "detailed",
+  "synthetic",
+]);
+
+const CANONICAL_ONE_TO_FIFTEEN: readonly number[] = Object.freeze([
+  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
+]);
+
+/** Exact membership of the closed set {1…15}. */
+function isExactOneToFifteen(values: ReadonlySet<number>): boolean {
+  if (values.size !== 15) {
+    return false;
+  }
+  for (const n of CANONICAL_ONE_TO_FIFTEEN) {
+    if (!values.has(n)) {
+      return false;
+    }
+  }
+  return true;
+}
+
+function isIntegerInOneToFifteen(value: number): boolean {
+  return Number.isInteger(value) && value >= 1 && value <= 15;
 }

 /**
  * Pure validation of a catalog snapshot (used by tests / future governance).
- * Does not mutate production data.
+ * Does not mutate production data. Returns issues — never throws on invalid entries.
  */
 export function validateCycleTypeCatalog(
   catalog: CycleTypeCatalog,
@@ -355,6 +387,13 @@
   const issues: CycleTypeCatalogValidationIssue[] = [];
   const entries = catalog.entries;

+  if (catalog.version !== CYCLE_TYPE_CATALOG_VERSION) {
+    issues.push({
+      code: "CATALOG_VERSION",
+      message: `catalog version mismatch: expected ${CYCLE_TYPE_CATALOG_VERSION}, got ${String(catalog.version)}`,
+    });
+  }
+
   if (entries.length !== 15) {
     issues.push({
       code: "COUNT",
@@ -362,6 +401,12 @@
     });
   }

+  // Collect all cycleTypeIds first for alias↔id collision checks.
+  const allCycleTypeIds = new Set<string>();
+  for (const entry of entries) {
+    allCycleTypeIds.add(entry.cycleTypeId);
+  }
+
   const ids = new Set<string>();
   const keys = new Set<string>();
   const numbers = new Set<number>();
@@ -405,6 +450,12 @@
       });
     }
     numbers.add(entry.methodCycleNumber);
+    if (!isIntegerInOneToFifteen(entry.methodCycleNumber)) {
+      issues.push({
+        code: "METHOD_NUMBER_RANGE",
+        message: `methodCycleNumber out of range 1…15 for ${entry.cycleTypeId}: ${String(entry.methodCycleNumber)}`,
+      });
+    }

     if (orders.has(entry.displayOrder)) {
       issues.push({
@@ -413,6 +464,19 @@
       });
     }
     orders.add(entry.displayOrder);
+    if (!isIntegerInOneToFifteen(entry.displayOrder)) {
+      issues.push({
+        code: "DISPLAY_ORDER_RANGE",
+        message: `displayOrder out of range 1…15 for ${entry.cycleTypeId}: ${String(entry.displayOrder)}`,
+      });
+    }
+
+    if (!ALLOWED_LIFECYCLE_STATUSES.has(entry.lifecycleStatus as string)) {
+      issues.push({
+        code: "LIFECYCLE_STATUS_INVALID",
+        message: `invalid lifecycleStatus for ${entry.cycleTypeId}: ${String(entry.lifecycleStatus)}`,
+      });
+    }

     if (!entry.label.trim()) {
       issues.push({
@@ -446,13 +510,32 @@
         message: `executionAuthority must be false for ${entry.cycleTypeId}`,
       });
     }
+    if (entry.ckc.doctrineStatus !== "method-candidate") {
+      issues.push({
+        code: "CKC_DOCTRINE_STATUS",
+        message: `doctrineStatus must be method-candidate for ${entry.cycleTypeId}`,
+      });
+    }
+    if (entry.ckc.unavailableBehavior !== "fail-closed") {
+      issues.push({
+        code: "CKC_UNAVAILABLE_BEHAVIOR",
+        message: `unavailableBehavior must be fail-closed for ${entry.cycleTypeId}`,
+      });
+    }
     if (!entry.ckc.primaryReference?.trim()) {
       issues.push({
         code: "CKC_PRIMARY_REF",
         message: `missing primaryReference for ${entry.cycleTypeId}`,
       });
     }
-    if (entry.ckc.primaryLevel === "detailed") {
+
+    const primaryLevel = entry.ckc.primaryLevel as string;
+    if (!ALLOWED_PRIMARY_LEVELS.has(primaryLevel)) {
+      issues.push({
+        code: "CKC_PRIMARY_LEVEL",
+        message: `unknown primaryLevel for ${entry.cycleTypeId}: ${String(entry.ckc.primaryLevel)}`,
+      });
+    } else if (entry.ckc.primaryLevel === "detailed") {
       detailedCount += 1;
       if (
         entry.ckc.fallbackPolicy !== "synthetic_map" ||
@@ -471,10 +554,20 @@
           message: `synthetic entry must reference synthetic map: ${entry.cycleTypeId}`,
         });
       }
+      if (entry.ckc.fallbackPolicy !== "none") {
+        issues.push({
+          code: "CKC_SYNTHETIC_FALLBACK_POLICY",
+          message: `synthetic entry requires fallbackPolicy none: ${entry.cycleTypeId}`,
+        });
+      }
+      if (entry.ckc.fallbackReference !== undefined) {
+        issues.push({
+          code: "CKC_SYNTHETIC_FALLBACK_REF",
+          message: `synthetic entry must not carry fallbackReference: ${entry.cycleTypeId}`,
+        });
+      }
     }

-    // Alias ambiguity: more than one alias pointing to same string across entries
-    // is checked globally below; per-entry duplicates:
     const aliasSet = new Set<string>();
     for (const alias of entry.aliases) {
       if (aliasSet.has(alias)) {
@@ -484,15 +577,28 @@
         });
       }
       aliasSet.add(alias);
-      if (alias === entry.cycleTypeId) {
+      if (allCycleTypeIds.has(alias)) {
         issues.push({
-          code: "ALIAS_AMBIGUOUS",
-          message: `alias equals cycleTypeId on ${entry.cycleTypeId}`,
+          code: "ALIAS_COLLIDES_WITH_ID",
+          message: `alias collides with cycleTypeId (${alias}) on ${entry.cycleTypeId}`,
         });
       }
     }
   }

+  if (!isExactOneToFifteen(numbers)) {
+    issues.push({
+      code: "METHOD_NUMBER_SET",
+      message: "methodCycleNumber set must be exactly 1…15",
+    });
+  }
+  if (!isExactOneToFifteen(orders)) {
+    issues.push({
+      code: "DISPLAY_ORDER_SET",
+      message: "displayOrder set must be exactly 1…15",
+    });
+  }
+
   if (!ids.has(CAPITALIZATION_CYCLE_TYPE_ID)) {
     issues.push({
       code: "CAPITALIZATION_MISSING",
@@ -518,7 +624,7 @@
     });
   }

-  // Cross-entry alias collisions
+  // Cross-entry alias collisions (shared alias between two entries).
   const aliasOwners = new Map<string, string>();
   for (const entry of entries) {
     for (const alias of entry.aliases) {

---
# QA TEST DIFF (must be empty)
(empty — test unchanged)

---
# QA TEST FULL (oracle preserved)
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
# CORRECTIVE REPORT 02 FULL
# V3.1-D1 — Corrective Delivery Report

## A. Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-30 21:22:00 CEST (+0200) |
| **Cycle** | 8 — Delivery / implémentation (correctif post-QA) |
| **Profil** | **Critical** |
| **Typologie** | EVOL |
| **GO Morris consommé** | `GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG — ADDRESS QA FINDINGS — PRODUCTION CONTRACT ONLY — NO D2 — NO UI — NO CREATECYCLE` (2026-07-30 21:14 CEST) |
| **Branche** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
| **Base / HEAD** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` · 0/0 |
| **CKC Delivery** | carte synthétique + méthode §4.8 · method-candidate · obligatoire · `executionAuthority=false` |
| **Handoff QA source** | tip `a2e2e1a…` · blob `9de8a7f…` |
| **Statut** | `V3.1-D1 CORRECTIVE DELIVERY IMPLEMENTED — QA FINDINGS R-QA-01 TO R-QA-09 ADDRESSED — READY FOR QA REVALIDATION DECISION — PR READINESS AND D2/D3 NOT AUTHORIZED` |

## B. Contexte

QA Critical (cycle 9) a produit **FAIL** : données de production nominales conformes, mais `validateCycleTypeCatalog` incomplet → **12 tests** QA en échec / **9 réserves majeures** R-QA-01…09. Rapport historique inchangé : [`01-qa-validation-report.md`](./01-qa-validation-report.md).

## C. Périmètre

| Autorisé | Réalisé |
|----------|---------|
| `cycleTypeCatalog.ts` — `validateCycleTypeCatalog` + helpers privés | **oui** |
| Tests QA | **inchangés** (oracle) |
| `index.ts` / données / version / API / mapping | **inchangés** |
| D2 / D3 / UI / CreateCycle | **absents** |

## D. Findings

| Finding | Invariant | Sévérité QA | Contrôle ajouté | Code | Test oracle | Résultat |
|---------|-----------|-------------|-----------------|------|-------------|----------|
| R-QA-01 | lifecycleStatus fermé | majeure | enum `active\|deprecated\|unavailable` | `LIFECYCLE_STATUS_INVALID` | detects invalid lifecycleStatus | **PASS** |
| R-QA-02 | doctrineStatus | majeure | `=== method-candidate` | `CKC_DOCTRINE_STATUS` | detects doctrineStatus… | **PASS** |
| R-QA-03 | unavailableBehavior | majeure | `=== fail-closed` | `CKC_UNAVAILABLE_BEHAVIOR` | detects unavailableBehavior… | **PASS** |
| R-QA-04 | synthetic fallbackPolicy | majeure | `=== none` | `CKC_SYNTHETIC_FALLBACK_POLICY` | incoherent fallbackPolicy | **PASS** |
| R-QA-05 | synthetic fallbackReference | majeure | must be `undefined` | `CKC_SYNTHETIC_FALLBACK_REF` | contradictory / unauthorized fallbackReference | **PASS** |
| R-QA-06 | methodCycleNumber 1…15 | majeure | range + exact set | `METHOD_NUMBER_RANGE` / `METHOD_NUMBER_SET` | hors plage + set inexact | **PASS** |
| R-QA-07 | displayOrder 1…15 | majeure | range + exact set | `DISPLAY_ORDER_RANGE` / `DISPLAY_ORDER_SET` | hors plage + set inexact | **PASS** |
| R-QA-08 | alias ↔ cycleTypeId | majeure | collect IDs puis collision | `ALIAS_COLLIDES_WITH_ID` | alias = autre cycleTypeId | **PASS** |
| R-QA-09 | catalog.version | majeure | `=== CYCLE_TYPE_CATALOG_VERSION` | `CATALOG_VERSION` | incorrect catalog version | **PASS** |

Également : `CKC_PRIMARY_LEVEL` pour primaryLevel inconnu (déjà couvert via counts + code dédié).

## E. Implémentation

Helpers privés purs :
- `isExactOneToFifteen`
- `isIntegerInOneToFifteen`
- sets fermés `ALLOWED_LIFECYCLE_STATUSES` / `ALLOWED_PRIMARY_LEVELS`

Ordre déterministe : version → COUNT → collecte IDs → boucle entrées → ensembles 1…15 → capitalization → cardinalité CKC → alias globaux.

Pas d’I/O · pas de throw sur entrée invalide · liste d’issues · multi-issues.

## F. Non-modifications

- Quinze entrées statiques · IDs · labels · mapping 4/11 · aliases vides · `CYCLE_TYPE_CATALOG_VERSION=0.1.0-v3.1-d1`
- Types / opérations / exports publics
- `cycleTypeCatalog.test.ts` (hash inchangé)
- `index.ts` · `01-qa-validation-report.md` · docs 12/13

## G. Preuves avant

| Commande | Résultat |
|----------|----------|
| catalog test | 34 PASS / **12 FAIL** (46) |
| suite oa/cycle | 82 PASS / 12 FAIL (94) |

## H. Preuves après

| Commande | Répertoire | Code | Résultat | Durée |
|----------|------------|------|----------|-------|
| `npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts` | `app/` | 0 | **46/46 PASS** | ~0.57s |
| `npm test -- __tests__/oa/cycle/` | `app/` | 0 | **94/94 PASS** | ~0.71s |
| `npm test` | `app/` | 0 | **827/827 PASS** (90 files) | ~7.23s |
| `npm run typecheck` | `app/` | 0 | PASS | ~1.47s |
| `npm run lint` | `app/` | 0 | PASS | ~1.66s |
| `npm run build` | `app/` | 0 | PASS | ~7.44s |
| `git diff --check` | repo | 0 | PASS | — |

## I. Compatibilité

15 IDs CAT-I1 · `cyc:capitalization` · 4 detailed / 11 synthetic · `executionAuthority=false` · fail-closed · Object.freeze inchangé · signature `validateCycleTypeCatalog` préservée.

## J. Réserves

- R-QA-01…09 **corrigés** dans le validateur.
- QA-G3 **non** accepté — **revalidation QA** obligatoire.
- Orchestration CKC / resolver / QualifyCycle bridge = **D2** (non autorisé).
- PR readiness **fermée**.

## K. Anti-claims

Correctif vert ≠ QA-G3 · delivery correctif ≠ PR ready · D1 ≠ resolver D2 · mapping ≠ orchestration · pas PRODUCT/RUN/IAM/AGENT READY · pas DELIVERY/CUTOVER AUTHORIZED · pas HARD CLOSED / T-A6 COMPLETE · D2/D3 non autorisés.

## L. Verdict

```
V3.1-D1 CORRECTIVE DELIVERY IMPLEMENTED —
QA FINDINGS R-QA-01 TO R-QA-09 ADDRESSED —
READY FOR QA REVALIDATION DECISION —
PR READINESS AND D2/D3 NOT AUTHORIZED
```

**Gate suivant candidat (non ouvert) :**

`GO QA REVALIDATION SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG — VALIDATOR CORRECTED — R-QA-01 TO R-QA-09 — FULL NEGATIVE SUITE — NO D2 — NO UI — NO CREATECYCLE`

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
| **Statut QA (historique)** | `QA EVIDENCE COMPLETE — FAIL — MAJOR VALIDATOR GAPS` — voir [`01-qa-validation-report.md`](./01-qa-validation-report.md) |
| **Statut correctif** | `CORRECTIVE DELIVERY IMPLEMENTED — R-QA-01…09 ADDRESSED — READY FOR QA REVALIDATION — QA-G3 NO-GO UNTIL REVALIDATION — PR READINESS AND D2/D3 NOT AUTHORIZED` |
| **Rapport correctif** | [`02-corrective-delivery-report.md`](./02-corrective-delivery-report.md) |
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
- Après renforcement (avant correctif) : **34 PASS / 12 FAIL**.
- Rapport historique : [`01-qa-validation-report.md`](./01-qa-validation-report.md) (**inchangé**).

### Delivery correctif (cycle 8 — 2026-07-30)

- `validateCycleTypeCatalog` renforcé (R-QA-01…09) — données/API/tests **inchangés**.
- Après correctif : catalog **46/46 PASS** · suite oa/cycle **94/94** · `npm test` **827/827** · typecheck/lint/build **PASS**.
- Rapport : [`02-corrective-delivery-report.md`](./02-corrective-delivery-report.md).
- QA-G3 **toujours NO-GO** jusqu’à revalidation QA séparée. D2/D3 **interdits**.

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

**QA (historique) :** FAIL — gaps validator (rapport 01).

**Correctif (Cursor) :**

```
V3.1-D1 CORRECTIVE DELIVERY IMPLEMENTED —
QA FINDINGS R-QA-01 TO R-QA-09 ADDRESSED —
READY FOR QA REVALIDATION DECISION —
PR READINESS AND D2/D3 NOT AUTHORIZED
```

QA-G3 **non** accepté. Revalidation QA requise. D2/D3 **non autorisés**.

---
# framing README FULL
# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — V3.1-D1 DELIVERY COMPLETE — QA FAIL HISTORIQUE — CORRECTIVE DELIVERY IMPLEMENTED — READY FOR QA REVALIDATION — PR READINESS NOT AUTHORIZED — D2/D3 NOT AUTHORIZED` |
| **Date** | 2026-07-30 21:22:00 CEST (+0200) |
| **Cycle courant** | 8 — Delivery correctif V3.1-D1 |
| **Profil** | **Critical** |
| **Typologie** | EVOL |
| **Gate courant** | `GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D1 …` **consommé** (2026-07-30 21:14 CEST) |
| **Branche Delivery** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **Code D1** | `validateCycleTypeCatalog` corrigé · données/API/tests inchangés |
| **Rapports** | QA [`01`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) · correctif [`02`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md) |
| **Docs protégées** | `12` / `13` / QA `01` **inchangés** |

## Synthèse

| Lot | État |
|-----|------|
| V1 / V2 | intégrés `main` |
| V3 arbitrage D-V3 | terminé (`12`) |
| V3.1 conception | terminée (`13`) |
| V3.1 catalogue décisions | adoptées (`14`) |
| **V3.1-D1 Delivery** | **terminé** — contrat runtime + mapping CKC |
| **V3.1-D1 QA** | **FAIL historique** (validator gaps) — rapport 01 |
| **V3.1-D1 Correctif** | **exécuté** — R-QA-01…09 adressés · 46/46 verts |
| **QA revalidation** | **prochaine** — QA-G3 non accepté |
| V3.1-D2 | **non autorisé** |
| V3.1-D3 UI | **non autorisé** · D-VS-05 / Figma |
| PR readiness | **fermée** |
| V3.2 / V4–V6 | non autorisés |

**R-V3.1-CATALOG-01 :** contrat + arbitrage résolus · runtime D1 · validateur corrigé · orchestration **pending D2**.

## Index

| Doc | Sujet |
|-----|-------|
| `12` / `13` | cadrage / conception (protégés) |
| `14` | catalogue + évidence |
| D1 README / 01 / 02 | contrat · QA · correctif |

## Gate candidat suivant

`GO QA REVALIDATION SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG — VALIDATOR CORRECTED — R-QA-01 TO R-QA-09 — FULL NEGATIVE SUITE — NO D2 — NO UI — NO CREATECYCLE`

## Verdict

`V3.1-D1 CORRECTIVE DELIVERY IMPLEMENTED — QA FINDINGS R-QA-01 TO R-QA-09 ADDRESSED — READY FOR QA REVALIDATION DECISION — PR READINESS AND D2/D3 NOT AUTHORIZED`

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

**Statut Delivery initial :** `IMPLEMENTATION COMPLETE`.

**Statut QA :** `FAIL historique` — [`01-qa-validation-report.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) (inchangé).

**Statut correctif :** `CORRECTIVE DELIVERY IMPLEMENTED — R-QA-01…09 ADDRESSED — READY FOR QA REVALIDATION`.

Docs :
- [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md)
- [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md)
- [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md)

| Preuve | Résultat |
|--------|----------|
| 15 IDs CAT-I1 | inchangés |
| Mapping CKC | 4 detailed + 11 synthetic inchangé |
| Tests QA renforcés (après correctif) | **46/46 PASS** (tests non modifiés) |
| Suite oa/cycle | **94/94 PASS** |
| `npm test` complet | **827/827 PASS** |
| typecheck / lint / build | PASS |
| QA-G3 | **NO-GO** jusqu’à revalidation |
| PR readiness | **fermée** |
| D2 / D3 | **non ouverts** |

### Slicing CAT-08

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue · mapping · validateur | Delivery + correctif · **QA revalidation requise** |
| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **non autorisé** |
| **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |

### Réserves QA (historique → correctif)

Gaps validator R-QA-01…09 **adressés** dans `validateCycleTypeCatalog`. Données catalogue inchangées. Revalidation QA obligatoire avant tout QA-G3.

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
| **Statut documentaire** | `V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — V3.1-D1 RUNTIME + VALIDATOR CORRECTED — READY FOR QA REVALIDATION — D2/D3 NOT AUTHORIZED` |
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
| **V3.1-D1** | Catalogue runtime · 15 IDs · mapping CKC · validateur | **Implémenté + correctif** · QA revalidation requise |
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

- Rapport : `first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md` (**historique FAIL — inchangé**)
- Données prod + freezes + 15 IDs + mapping CKC : **conformes**
- Gaps `validateCycleTypeCatalog` R-QA-01…09 documentés

### Evidence corrective V3.1-D1

- Rapport : `first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md`
- Validateur renforcé : version · lifecycle · doctrine · fail-closed · primaryLevel · synthetic fallback · ensembles 1…15 · alias↔IDs
- Données catalogue / version / API / tests QA : **inchangés**
- Suite QA renforcée : **46/46 PASS** sans adaptation des tests
- Distinction : **données catalogue** · **validateur** · **resolver D2** (pending)
- R-V3.1-CATALOG-01 : contrat résolu · runtime D1 · **validateur corrigé** · orchestration CKC **pending D2** · QA-G3 **non accepté**

## Y. Risques et réserves

Runtime D1 · validateur corrigé · QA revalidation pending · orchestration D2 absente · divergence méthode/catalogue · dette migration · alias · localisation · process-local · Figma (D3) · confusion candidate doctrine vs baseline méthode · harness ≠ autorité · QualifyCycle domaine vs exploitabilité produit.

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

**V3.1 CYCLE TYPE CATALOG DECISIONS ADOPTED — R-V3.1-CATALOG-01 RESOLVED AT CONTRACT LEVEL — V3.1-D1 RUNTIME + VALIDATOR CORRECTED — READY FOR QA REVALIDATION — D2/D3 NOT AUTHORIZED**

Prochain gate candidat (non ouvert) :

`GO QA REVALIDATION SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG — VALIDATOR CORRECTED — R-QA-01 TO R-QA-09 — FULL NEGATIVE SUITE — NO D2 — NO UI — NO CREATECYCLE`

Statut : **READY FOR QA REVALIDATION DECISION** (QA-G3 non accepté)

---
# PROOFS hashes
catalog: 9968f040283d8f626c65db48bbec7abd69c56e2d
index: 3daf57578e528878ef8a9298813019bb3b86af3c
test: 0102fc02edb6e6f16420ea0de31a0d6361b221ba
qa01: 2c74966f37644c682b841371de0925f14332932e
12: 82be657cb3b88be0ac72d41e172106a557be101b
13: 3ecb0256e14662a0e8244029a1329a6afb525444

---
# COMMAND EVIDENCE

### corr-baseline-catalog.txt

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/cycleTypeCatalog.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests | 12 failed) 10ms
   ✓ V3.1-D1 cycle type catalog > exposes catalog version and exactly fifteen entries 1ms
   ✓ V3.1-D1 cycle type catalog > lists exact adopted cycleTypeId set in order 0ms
   ✓ V3.1-D1 cycle type catalog > enforces uniqueness of ids, canonical keys, numbers and orders 0ms
   ✓ V3.1-D1 cycle type catalog > uses OA cyc: identifiers and preserves cyc:capitalization 0ms
   ✓ V3.1-D1 cycle type catalog > requires non-empty french labels/descriptions and active lifecycle 0ms
   ✓ V3.1-D1 cycle type catalog > maps mandatory CKC for all fifteen with executionAuthority false 0ms
   ✓ V3.1-D1 cycle type catalog > has exactly four detailed and eleven synthetic CKC mappings 0ms
   ✓ V3.1-D1 cycle type catalog > requires synthetic fallback for detailed pilots 0ms
   ✓ V3.1-D1 cycle type catalog > uses canonical Git CKC paths for pilots and synthetic map 0ms
   ✓ V3.1-D1 cycle type catalog > looks up by cycleTypeId only — never label or canonicalKey 0ms
   ✓ V3.1-D1 cycle type catalog > returns a non-mutating list copy 0ms
   ✓ V3.1-D1 cycle type catalog > contains no profile, gate or morris decision fields 1ms
   ✓ V3.1-D1 cycle type catalog > passes production catalog validation 0ms
   ✓ V3.1-D1 cycle type catalog > starts with empty aliases (controlled aliases supported, none required) 0ms
   ✓ V3.1-D1 cycle type catalog negatives > rejects duplicate cycleTypeId 0ms
   ✓ V3.1-D1 cycle type catalog negatives > rejects duplicate displayOrder 0ms
   ✓ V3.1-D1 cycle type catalog negatives > rejects duplicate methodCycleNumber 0ms
   ✓ V3.1-D1 cycle type catalog negatives > rejects invalid OA pattern 0ms
   ✓ V3.1-D1 cycle type catalog negatives > rejects missing capitalization id 0ms
   ✓ V3.1-D1 cycle type catalog negatives > rejects missing CKC mapping 0ms
   ✓ V3.1-D1 cycle type catalog negatives > rejects executionAuthority true 0ms
   ✓ V3.1-D1 cycle type catalog negatives > rejects detailed without synthetic fallback 0ms
   ✓ V3.1-D1 cycle type catalog negatives > rejects synthetic without synthetic map reference 0ms
   ✓ V3.1-D1 cycle type catalog negatives > rejects ambiguous aliases 0ms
   ✓ V3.1-D1 QA reinforcement — production data & immutability > keeps all fifteen production entries lifecycleStatus active 0ms
   ✓ V3.1-D1 QA reinforcement — production data & immutability > freezes catalog, entries, each entry, each ckc and each aliases 0ms
   ✓ V3.1-D1 QA reinforcement — production data & immutability > rejects deep mutation attempts against the registry 0ms
   ✓ V3.1-D1 QA reinforcement — production data & immutability > binds methodReference to §4.1 … §4.15 in method cycle order 0ms
   ✓ V3.1-D1 QA reinforcement — production data & immutability > confirms Git paths exist for four detailed pilots and synthetic map 0ms
   ✓ V3.1-D1 QA reinforcement — production data & immutability > uses exact catalog version 0.1.0-v3.1-d1 0ms
   ✓ V3.1-D1 QA reinforcement — production data & immutability > keeps synthetic fallbackPolicy none without fallbackReference 0ms
   × V3.1-D1 QA reinforcement — validator negatives & edges > detects invalid lifecycleStatus 2ms
     → expected false to be true // Object.is equality
   × V3.1-D1 QA reinforcement — validator negatives & edges > detects doctrineStatus other than method-candidate 0ms
     → expected false to be true // Object.is equality
   × V3.1-D1 QA reinforcement — validator negatives & edges > detects unavailableBehavior other than fail-closed 0ms
     → expected false to be true // Object.is equality
   × V3.1-D1 QA reinforcement — validator negatives & edges > detects synthetic mapping with incoherent fallbackPolicy 0ms
     → expected false to be true // Object.is equality
   × V3.1-D1 QA reinforcement — validator negatives & edges > detects synthetic mapping with contradictory fallbackReference 0ms
     → expected false to be true // Object.is equality
   × V3.1-D1 QA reinforcement — validator negatives & edges > detects methodCycleNumber unique but outside 1…15 0ms
     → expected false to be true // Object.is equality
   × V3.1-D1 QA reinforcement — validator negatives & edges > detects displayOrder unique but outside 1…15 0ms
     → expected false to be true // Object.is equality
   × V3.1-D1 QA reinforcement — validator negatives & edges > detects incomplete methodCycleNumber set (unique but not exact 1…15) 0ms
     → expected false to be true // Object.is equality
   × V3.1-D1 QA reinforcement — validator negatives & edges > detects incomplete displayOrder set (unique but not exact 1…15) 0ms
     → expected false to be true // Object.is equality
   ✓ V3.1-D1 QA reinforcement — validator negatives & edges > detects alias collision between two entries 0ms
   × V3.1-D1 QA reinforcement — validator negatives & edges > detects alias equal to another entry cycleTypeId 0ms
     → expected false to be true // Object.is equality
   × V3.1-D1 QA reinforcement — validator negatives & edges > detects incorrect catalog version 0ms
     → expected false to be true // Object.is equality
   ✓ V3.1-D1 QA reinforcement — validator negatives & edges > detects unknown primaryLevel 0ms
   × V3.1-D1 QA reinforcement — validator negatives & edges > detects unauthorized fallbackReference on synthetic 0ms
     → expected false to be true // Object.is equality
   ✓ V3.1-D1 QA reinforcement — validator negatives & edges > detects empty primaryReference 0ms

⎯⎯⎯⎯⎯⎯ Failed Tests 12 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  __tests__/oa/cycle/cycleTypeCatalog.test.ts > V3.1-D1 QA reinforcement — validator negatives & edges > detects invalid lifecycleStatus
AssertionError: expected false to be true // Object.is equality

- Expected
+ Received

- true
+ false

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts:464:7
    462|           i.message.toLowerCase().includes("lifecycle"),
    463|       ),
    464|     ).toBe(true);
       |       ^
    465|   });
    466|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/12]⎯

 FAIL  __tests__/oa/cycle/cycleTypeCatalog.test.ts > V3.1-D1 QA reinforcement — validator negatives & edges > detects doctrineStatus other than method-candidate
AssertionError: expected false to be true // Object.is equality

- Expected
+ Received

- true
+ false

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts:484:7
    482|           i.message.toLowerCase().includes("doctrine"),
    483|       ),
    484|     ).toBe(true);
       |       ^
    485|   });
    486|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/12]⎯

 FAIL  __tests__/oa/cycle/cycleTypeCatalog.test.ts > V3.1-D1 QA reinforcement — validator negatives & edges > detects unavailableBehavior other than fail-closed
AssertionError: expected false to be true // Object.is equality

- Expected
+ Received

- true
+ false

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts:505:7
    503|           i.message.toLowerCase().includes("unavailable"),
    504|       ),
    505|     ).toBe(true);
       |       ^
    506|   });
    507|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/12]⎯

 FAIL  __tests__/oa/cycle/cycleTypeCatalog.test.ts > V3.1-D1 QA reinforcement — validator negatives & edges > detects synthetic mapping with incoherent fallbackPolicy
AssertionError: expected false to be true // Object.is equality

- Expected
+ Received

- true
+ false

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts:528:7
    526|             i.message.toLowerCase().includes("fallback"),
    527|       ),
    528|     ).toBe(true);
       |       ^
    529|   });
    530|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/12]⎯

 FAIL  __tests__/oa/cycle/cycleTypeCatalog.test.ts > V3.1-D1 QA reinforcement — validator negatives & edges > detects synthetic mapping with contradictory fallbackReference
AssertionError: expected false to be true // Object.is equality

- Expected
+ Received

- true
+ false

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts:551:7
    549|             i.message.toLowerCase().includes("synthetic")),
    550|       ),
    551|     ).toBe(true);
       |       ^
    552|   });
    553|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/12]⎯

 FAIL  __tests__/oa/cycle/cycleTypeCatalog.test.ts > V3.1-D1 QA reinforcement — validator negatives & edges > detects methodCycleNumber unique but outside 1…15
AssertionError: expected false to be true // Object.is equality

- Expected
+ Received

- true
+ false

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts:566:7
    564|           i.message.toLowerCase().includes("methodcyclenumber"),
    565|       ),
    566|     ).toBe(true);
       |       ^
    567|   });
    568|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/12]⎯

 FAIL  __tests__/oa/cycle/cycleTypeCatalog.test.ts > V3.1-D1 QA reinforcement — validator negatives & edges > detects displayOrder unique but outside 1…15
AssertionError: expected false to be true // Object.is equality

- Expected
+ Received

- true
+ false

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts:581:7
    579|           i.message.toLowerCase().includes("displayorder"),
    580|       ),
    581|     ).toBe(true);
       |       ^
    582|   });
    583|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[7/12]⎯

 FAIL  __tests__/oa/cycle/cycleTypeCatalog.test.ts > V3.1-D1 QA reinforcement — validator negatives & edges > detects incomplete methodCycleNumber set (unique but not exact 1…15)
AssertionError: expected false to be true // Object.is equality

- Expected
+ Received

- true
+ false

 ❯ __tests__/oa/cycle/cycleTypeCatalog.test.ts:598:7
    596|           i.message.includes("1") && i.message.includes("15"),
    597|       ),
    598|     ).toBe(true);
       |       ^
    599|   });
    600|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[8/12]⎯

 FAIL  __tests__/oa/cycle/cycleTypeCatalog.test.ts > V3.1-D1 QA reinforcement — validator negatives & edges > detects incomplete displayOrder set (unique but not exact 1…15)
AssertionError: expected false to be true // Object.is equality

- Expected
+ Received

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
   Start at  21:20:09
   Duration  343ms (transform 84ms, setup 52ms, collect 118ms, tests 10ms, environment 0ms, prepare 35ms)

real 0.79
user 1.13
sys 0.33

### corr-after-catalog.txt

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/cycleTypeCatalog.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 7ms

 Test Files  1 passed (1)
      Tests  46 passed (46)
   Start at  21:20:49
   Duration  298ms (transform 80ms, setup 37ms, collect 112ms, tests 7ms, environment 0ms, prepare 27ms)

real 0.57
user 1.09
sys 0.25

### corr-suite.txt

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 7ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 8ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 58ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 61ms

 Test Files  4 passed (4)
      Tests  94 passed (94)
   Start at  21:20:56
   Duration  445ms (transform 187ms, setup 157ms, collect 464ms, tests 135ms, environment 0ms, prepare 132ms)

real 0.71
user 1.78
sys 0.40

### corr-full.txt

> sfia-studio@0.1.0 test
> vitest run


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_analysis_started","ts":"2026-07-30T19:20:57.916Z","status":"started","intentLength":53,"sessionLocalId":"plat-1"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-07-30T19:20:57.984Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-1","durationMs":69,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_analysis_started","ts":"2026-07-30T19:20:57.985Z","status":"started","intentLength":76,"sessionLocalId":"plat-2"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-07-30T19:20:58.111Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":76,"sessionLocalId":"plat-2","durationMs":126,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
...
...
{"event":"d1.method_mode_selected","ts":"2026-07-30T19:21:02.866Z","status":"ok","projectId":"proj-0b9639bc-12a5-4fb6-9196-bcedaf592a50","durationMs":0}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-07-30T19:21:02.866Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s5","proposalId":"rrp-5"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-07-30T19:21:02.867Z","status":"STALE","projectId":"proj-0b9639bc-12a5-4fb6-9196-bcedaf592a50","sessionLocalId":"s5","durationMs":1,"errorCode":"CONFLICT","proposalId":"rrp-5"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > analyze-only and cancel produce no mutation
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-07-30T19:21:02.870Z","status":"ANALYZE_ONLY","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_analyze_only_completed","ts":"2026-07-30T19:21:02.870Z","status":"NO_MUTATION","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-07-30T19:21:02.870Z","status":"CANCEL","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_cancelled","ts":"2026-07-30T19:21:02.870Z","status":"CANCELLED","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-07-30T19:21:02.874Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-07-30T19:21:02.874Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":0,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}

 ✓ __tests__/d1/intake-c4.test.ts (10 tests) 37ms
 ✓ __tests__/increment-c.test.tsx (8 tests) 1262ms
   ✓ Increment C — editable demand + confirmation > accepts editable Campus360 demand and shows exact text in confirmation  316ms
   ✓ Increment C — editable demand + confirmation > transmits exact demandText to qualifyAction (anti-substitution)  302ms
 ✓ __tests__/gates.test.tsx (1 test) 97ms
 ✓ __tests__/ops1/executionI5.test.ts (5 tests) 1846ms
   ✓ ops1 I5 execution contract + fixture run > creates contract, records GO linked to hash, runs fixture, blocks double exec  799ms
   ✓ ops1 I5 execution contract + fixture run > refuses HEAD drift and remote flags stay true  330ms
   ✓ ops1 I5 execution contract + fixture run > rejects run adapterMode mismatch (no silent real→fixture swap)  303ms
 ✓ __tests__/increment-b.test.tsx (6 tests) 26ms
stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > creates project with audit and mono-operator assignments
{"event":"d1.project_create","ts":"2026-07-30T19:21:03.266Z","status":"ok","projectId":"proj-cb11b026-6e9d-467a-b283-7a745049bedf","durationMs":2}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > is idempotent on duplicate key
{"event":"d1.project_create","ts":"2026-07-30T19:21:03.273Z","status":"ok","projectId":"proj-c0e2e8c0-bf6f-410b-a00c-034a90bf3c03","durationMs":1}
{"event":"d1.project_create","ts":"2026-07-30T19:21:03.273Z","status":"idempotent","projectId":"proj-c0e2e8c0-bf6f-410b-a00c-034a90bf3c03","durationMs":0}

 ✓ __tests__/status-pill.test.tsx (1 test) 16ms
stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
{"event":"d1.project_create","ts":"2026-07-30T19:21:03.278Z","status":"ok","projectId":"proj-855c699a-d354-47bf-90db-0053d14ec874","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-07-30T19:21:03.278Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-07-30T19:21:03.279Z","status":"ok","projectId":"proj-855c699a-d354-47bf-90db-0053d14ec874","durationMs":1}
{"event":"d1.method_mode_hold_allowed","ts":"2026-07-30T19:21:03.279Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-07-30T19:21:03.279Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}

 ✓ __tests__/d1/project-foundation.test.ts (7 tests) 20ms
 ✓ __tests__/fixtures.test.ts (2 tests) 2ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 4ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 16ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 1ms
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 3012ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1718ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 2998ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  721ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  639ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  339ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  359ms

 Test Files  90 passed (90)
      Tests  827 passed (827)
   Start at  21:20:57
   Duration  6.95s (transform 2.79s, setup 3.02s, collect 12.20s, tests 19.29s, environment 5.96s, prepare 3.40s)

real 7.23
user 33.03
sys 9.87

### corr-typecheck.txt

> sfia-studio@0.1.0 typecheck
> tsc --noEmit

real 1.47
user 2.51
sys 0.24

### corr-lint.txt

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
real 1.66
user 0.98
sys 0.19

### corr-build.txt

> sfia-studio@0.1.0 build
> next build

   ▲ Next.js 15.5.20

   Creating an optimized production build ...
 ✓ Compiled successfully in 934ms
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/10) ...
   Generating static pages (2/10)
   Generating static pages (4/10)
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

real 7.44
user 13.57
sys 1.60
