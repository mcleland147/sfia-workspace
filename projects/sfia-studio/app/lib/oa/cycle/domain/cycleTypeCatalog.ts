/**
 * V3.1-D1 — Cycle Type Catalog runtime contract (pure domain).
 *
 * Immutable projection of the current Morris-adopted cycle types and their
 * mandatory CKC mapping metadata. No I/O, no resolver orchestration, no UI.
 *
 * Content baseline (W3-D): fifteen entries remain the published product snapshot.
 * Cardinality 15 / detailed=4 / synthetic=11 are NOT structural runtime invariants —
 * catalog evolvability (US-P1-09) requires uniqueness + fail-closed rules only.
 *
 * Decisions: D-V3.1-CAT-01…08 (see framing doc 14) · W3-D ADAPT for US-P1-09.
 */

import { isOaIdentifier } from "./invariants";
import { CAPITALIZATION_CYCLE_TYPE_ID } from "./types";

/** Contract version of the static catalog snapshot. */
export const CYCLE_TYPE_CATALOG_VERSION = "0.1.0-v3.1-d1" as const;

/**
 * Canonical Git path of the historical synthetic CKC map (method provenance).
 * Product runtime SoT remains the Product DoctrinePackage / Product CKC index.
 */
export const CKC_SYNTHETIC_MAP_PATH =
  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md" as const;

/** Current published product catalog entry count (content baseline — not a validator invariant). */
export const CYCLE_TYPE_CATALOG_BASELINE_ENTRY_COUNT = 15 as const;

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
   * - synthetic_map: use historical synthetic map (method provenance)
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
 * Current content baseline uses displayOrder / methodCycleNumber 1…15.
 * Validator no longer treats that cardinality as a structural invariant (W3-D / US-P1-09).
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

/** Positive integer used for methodCycleNumber / displayOrder (no closed upper bound). */
function isPositiveInteger(value: number): boolean {
  return Number.isInteger(value) && value >= 1;
}

/**
 * Pure validation of a catalog snapshot (used by tests / future governance).
 * Does not mutate production data. Returns issues — never throws on invalid entries.
 *
 * W3-D / US-P1-09: structural cardinality (15 / 4 detailed / 11 synthetic / exact 1…15)
 * is intentionally NOT enforced. Uniqueness, lifecycle, and fail-closed CKC mapping rules remain.
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

  if (entries.length < 1) {
    issues.push({
      code: "COUNT",
      message: `expected at least 1 catalog entry, got ${entries.length}`,
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
    if (!isPositiveInteger(entry.methodCycleNumber)) {
      issues.push({
        code: "METHOD_NUMBER_RANGE",
        message: `methodCycleNumber must be a positive integer for ${entry.cycleTypeId}: ${String(entry.methodCycleNumber)}`,
      });
    }

    if (orders.has(entry.displayOrder)) {
      issues.push({
        code: "DISPLAY_ORDER_DUPLICATE",
        message: `duplicate displayOrder: ${entry.displayOrder}`,
      });
    }
    orders.add(entry.displayOrder);
    if (!isPositiveInteger(entry.displayOrder)) {
      issues.push({
        code: "DISPLAY_ORDER_RANGE",
        message: `displayOrder must be a positive integer for ${entry.cycleTypeId}: ${String(entry.displayOrder)}`,
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
