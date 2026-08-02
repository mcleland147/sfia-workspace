# Full Review Pack — SFIA Studio V3.1-D2-A

## Métadonnées et rôle

Date/heure/fuseau : 2026-08-02 03:28:43 CEST (+0200). Rôle Cursor : exécution bornée du cycle 8
Delivery / implémentation. Profil Standard justifié par le caractère pur,
local, read-only et sans dépendance du diff. Typologie EVOL.

## Gate Morris complet

```text
GO DELIVERY SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
USE VALIDATED BACKLOG AND ADOPTED TA-01…12 —
IMPLEMENT CONTRACTS, CATALOG FINGERPRINT AND PURE CATALOG PROJECTION —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

## CKC et template

CKC Delivery détaillé absent ; fallback carte synthétique + méthode §4.8,
`method-candidate`, guidance expérimentale sans autorité. Template canonique
`prompts/templates/sfia-cycle-execution-template.md` consulté.

## Git Truth, transition et handoff source

Base initiale `e1befcb8…`, branche framing attendue, main/origin alignées,
staged vide, 77 worktrees, cible locale/distante absente. Transition vers la
branche Delivery autorisée avec empreintes documentaires identiques.
Handoff source tip `dbb4e80…`, blob `85596ce…`.

## Backlog, architecture et stories

Backlog `19` validé ; TA-01…12 `DECIDED — ADOPTED BY MORRIS`.
BL-D2-A-01…04 exécutées. D2-B, D2-C, D2-D et D3 fermés.

## Fichiers, contrats, fingerprint, projection et erreurs

Trois modules de production et deux tests créés ; `index.ts` modifié par trois
exports additifs uniquement. Fingerprint contractuel exclut labels/descriptions,
normalise fallback absent à null et conserve l'ordre des quinze entrées.
HASH-A statique :
`sha256:27316864454634a45342baaa1782898bea12914a4ec9cd9b051622eef9efd2cc`.
SHA-256 uniquement dans le test Node. Projection pure et fail-closed :
correlationId/version/hash/type/lifecycle/mapping. Six erreurs structurées.

## Validations

Baseline 46/46 et 94/94. Final : fingerprint 8/8, projection 16/16,
D1 46/46, OA cycle 118/118, suite 851/851, typecheck PASS, lint PASS,
build PASS, diff check PASS, imports boundaries PASS.

## Anti-claims et réserve

Aucune crypto runtime, mutation, dépendance, package, resolver, preuve,
QualifyCycle, audit, factory, CreateCycle, UI, commit/push/PR projet ou
promotion méthode. Delivery locale ≠ QA validée ≠ PR ready.
INHERITED-R-01 non levée.

## Rapport temporaire complet

# Rapport Delivery SFIA Studio V3.1-D2-A

## 1. Date/heure/fuseau

2026-08-02 03:28:43 CEST (+0200)

## 2. Git Truth initial

Branche initiale `framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage`.
`HEAD = main = origin/main = e1befcb80ed5e3c789a7de9036a8207d6b3e6771`,
divergence `0/0`, staged vide, 77 worktrees, prune dry-run vide.
Branche Delivery locale/distante absente. Handoff source tip
`dbb4e800ec76ea0aa30f44c048b9f79fd9b8d071`, blob
`85596ce446e31818eaddaf60ed6b5cbfcef05761`.

## 3. Transition de branche

Création locale de
`delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` depuis
`e1befcb8…`. Empreintes de `15` à `19`, `08` et README strictement identiques
avant/après transition. Aucun fichier staged.

## 4. Gate Morris

```text
GO DELIVERY SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
USE VALIDATED BACKLOG AND ADOPTED TA-01…12 —
IMPLEMENT CONTRACTS, CATALOG FINGERPRINT AND PURE CATALOG PROJECTION —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

## 5. Cycle / profil / typologie

Cycle 8 — Delivery / implémentation ; profil Standard ; typologie EVOL.
Standard est justifié par un diff de types et fonctions pures, sans
infrastructure, mutation, UI, nouvelle dépendance ni changement architectural.

## 6. CKC

Recherché : oui. Contrat détaillé Delivery absent. Fallback :
`02-fifteen-cycles-synthetic-map.md` + méthode cycle §4.8. Statut
`method-candidate`, guidance cognitive expérimentale, aucune autorité
d'exécution, `executionAuthority=false`.

## 7. Sources

Template d'exécution, routing guide, operating model, guardrails, validation
checklist, engineering principles, delivery pipeline, carte/matrice CKC,
méthode §4.8, documents D2 `15`–`19`, `08`, README framing, D1
`cycleTypeCatalog.ts`, types/errors/invariants/index T-A2, tests OA cycle,
README D1, package/TypeScript/Vitest/Next.

## 8. Stories consommées

BL-D2-A-01, BL-D2-A-02, BL-D2-A-03 et BL-D2-A-04 exécutées.

## 9. Décisions TA

TA-01…12 adoptées. D2-A applique TA-01/02/03/06, erreurs locales TA-09 et
ordre TA-12. TA-04/05/07/08/10/11 restent hors périmètre D2-A.

## 10. Baseline tests

Avant modification : catalogue D1 **46/46 PASS** ; suite OA cycle
**94/94 PASS**.

## 11. Fichiers créés/modifiés

Créés :
```text
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
```

Tracked modifiés :
```text
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
```

## 12. Contenu complet des trois fichiers de production créés

### `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts`

```typescript
import type {
  CycleTypeCkcMapping,
  CycleTypeLifecycleStatus,
} from "./cycleTypeCatalog";

/** Read-only context required to select a cycle type from the D1 catalog. */
export type CatalogSelectionContext = {
  readonly cycleTypeId: string;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
};

/** Closed projection of contractually relevant catalog fields for HASH-A. */
export type CatalogFingerprintEntry = {
  readonly cycleTypeId: string;
  readonly canonicalKey: string;
  readonly lifecycleStatus: CycleTypeLifecycleStatus;
  readonly methodCycleNumber: number;
  readonly ckc: {
    readonly mandatory: true;
    readonly primaryLevel: "detailed" | "synthetic";
    readonly primaryReference: string;
    readonly fallbackPolicy: "synthetic_map" | "none";
    readonly fallbackReference: string | null;
    readonly executionAuthority: false;
    readonly doctrineStatus: "method-candidate";
    readonly unavailableBehavior: "fail-closed";
  };
};

/** Validated read-only D1 projection passed to the later D2-B boundary. */
export type ValidatedCycleTypeProjection = {
  readonly cycleTypeId: string;
  readonly label: string;
  readonly shortDescription: string;
  readonly lifecycleStatus: CycleTypeLifecycleStatus;
  readonly ckc: Readonly<CycleTypeCkcMapping>;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
};

export type CatalogProjectionErrorCode =
  | "CATALOG_CORRELATION_ID_REQUIRED"
  | "CATALOG_VERSION_INCOMPATIBLE"
  | "CATALOG_FINGERPRINT_STALE"
  | "CYCLE_TYPE_UNKNOWN"
  | "CYCLE_TYPE_NOT_SELECTABLE"
  | "CYCLE_TYPE_MAPPING_INVALID";

export type CatalogProjectionError = {
  readonly code: CatalogProjectionErrorCode;
  readonly message: string;
  readonly blocking: true;
  readonly retryable: boolean;
  readonly recoverable: boolean;
  readonly correlationId?: string;
  readonly cycleTypeId?: string;
  readonly lifecycleStatus?: CycleTypeLifecycleStatus;
};

export type CatalogProjectionSuccess = {
  readonly ok: true;
  readonly projection: ValidatedCycleTypeProjection;
};

export type CatalogProjectionFailure = {
  readonly ok: false;
  readonly error: CatalogProjectionError;
};

export type CatalogProjectionResult =
  | CatalogProjectionSuccess
  | CatalogProjectionFailure;
```

### `projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts`

```typescript
import {
  CYCLE_TYPE_CATALOG,
  type CycleTypeCatalog,
} from "./cycleTypeCatalog";
import type { CatalogFingerprintEntry } from "./ckcQualificationContracts";

/** HASH-A representation format. Cryptographic verification is test-only. */
export const CYCLE_TYPE_CATALOG_FINGERPRINT_FORMAT =
  "sha256-canonical-json-v1" as const;

/**
 * Static, versioned HASH-A fingerprint of the canonical D1 contract projection.
 * It is guarded by a Node-only SHA-256 test; no runtime hashing is required.
 */
export const CYCLE_TYPE_CATALOG_FINGERPRINT =
  "sha256:27316864454634a45342baaa1782898bea12914a4ec9cd9b051622eef9efd2cc" as const;

/** Build the closed, ordered projection used by the catalog fingerprint. */
export function projectCatalogFingerprint(
  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
): readonly CatalogFingerprintEntry[] {
  return Object.freeze(
    catalog.entries.map((entry) =>
      Object.freeze({
        cycleTypeId: entry.cycleTypeId,
        canonicalKey: entry.canonicalKey,
        lifecycleStatus: entry.lifecycleStatus,
        methodCycleNumber: entry.methodCycleNumber,
        ckc: Object.freeze({
          mandatory: entry.ckc.mandatory,
          primaryLevel: entry.ckc.primaryLevel,
          primaryReference: entry.ckc.primaryReference,
          fallbackPolicy: entry.ckc.fallbackPolicy,
          fallbackReference: entry.ckc.fallbackReference ?? null,
          executionAuthority: entry.ckc.executionAuthority,
          doctrineStatus: entry.ckc.doctrineStatus,
          unavailableBehavior: entry.ckc.unavailableBehavior,
        }),
      }),
    ),
  );
}

/** Deterministic serialization of the canonical, fixed-property projection. */
export function serializeCatalogFingerprint(
  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
): string {
  return JSON.stringify(projectCatalogFingerprint(catalog));
}
```

### `projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts`

```typescript
import {
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_VERSION,
  type CycleTypeCatalog,
  type CycleTypeCkcMapping,
  type CycleTypeDefinition,
} from "./cycleTypeCatalog";
import { CYCLE_TYPE_CATALOG_FINGERPRINT } from "./catalogFingerprint";
import type {
  CatalogProjectionError,
  CatalogProjectionErrorCode,
  CatalogProjectionResult,
  CatalogSelectionContext,
} from "./ckcQualificationContracts";

const SAFE_MESSAGES: Readonly<Record<CatalogProjectionErrorCode, string>> =
  Object.freeze({
    CATALOG_CORRELATION_ID_REQUIRED: "A correlation identifier is required.",
    CATALOG_VERSION_INCOMPATIBLE: "The catalog version is incompatible.",
    CATALOG_FINGERPRINT_STALE: "The catalog fingerprint is stale.",
    CYCLE_TYPE_UNKNOWN: "The cycle type is unknown.",
    CYCLE_TYPE_NOT_SELECTABLE: "The cycle type is not selectable.",
    CYCLE_TYPE_MAPPING_INVALID: "The cycle type mapping is invalid.",
  });

const ALLOWED_MAPPING_KEYS = new Set([
  "mandatory",
  "primaryLevel",
  "primaryReference",
  "fallbackPolicy",
  "fallbackReference",
  "executionAuthority",
  "doctrineStatus",
  "unavailableBehavior",
]);

function failure(
  code: CatalogProjectionErrorCode,
  context: CatalogSelectionContext,
  options: {
    readonly lifecycleStatus?: CycleTypeDefinition["lifecycleStatus"];
    readonly retryable?: boolean;
    readonly recoverable?: boolean;
  } = {},
): CatalogProjectionResult {
  const error: CatalogProjectionError = Object.freeze({
    code,
    message: SAFE_MESSAGES[code],
    blocking: true,
    retryable: options.retryable ?? false,
    recoverable: options.recoverable ?? true,
    ...(context.correlationId.trim()
      ? { correlationId: context.correlationId }
      : {}),
    ...(context.cycleTypeId ? { cycleTypeId: context.cycleTypeId } : {}),
    ...(options.lifecycleStatus
      ? { lifecycleStatus: options.lifecycleStatus }
      : {}),
  });
  return Object.freeze({ ok: false, error });
}

function hasValidMapping(mapping: CycleTypeCkcMapping): boolean {
  if (
    Object.keys(mapping).some((key) => !ALLOWED_MAPPING_KEYS.has(key)) ||
    mapping.mandatory !== true ||
    !mapping.primaryReference.trim() ||
    mapping.executionAuthority !== false ||
    mapping.doctrineStatus !== "method-candidate" ||
    mapping.unavailableBehavior !== "fail-closed"
  ) {
    return false;
  }

  if (mapping.primaryLevel === "detailed") {
    return (
      mapping.fallbackPolicy === "synthetic_map" &&
      mapping.fallbackReference === CKC_SYNTHETIC_MAP_PATH
    );
  }

  if (mapping.primaryLevel === "synthetic") {
    return (
      mapping.primaryReference === CKC_SYNTHETIC_MAP_PATH &&
      mapping.fallbackPolicy === "none" &&
      mapping.fallbackReference === undefined
    );
  }

  return false;
}

function freezeMapping(
  mapping: CycleTypeCkcMapping,
): Readonly<CycleTypeCkcMapping> {
  return Object.freeze({
    mandatory: mapping.mandatory,
    primaryLevel: mapping.primaryLevel,
    primaryReference: mapping.primaryReference,
    fallbackPolicy: mapping.fallbackPolicy,
    ...(mapping.fallbackReference
      ? { fallbackReference: mapping.fallbackReference }
      : {}),
    executionAuthority: mapping.executionAuthority,
    doctrineStatus: mapping.doctrineStatus,
    unavailableBehavior: mapping.unavailableBehavior,
  });
}

/**
 * Pure, fail-closed D2-A selection from the authoritative D1 catalog.
 * The optional catalog is a pure test seam; production callers use the singleton.
 */
export function projectSelectableCycleType(
  context: CatalogSelectionContext,
  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
): CatalogProjectionResult {
  if (!context.correlationId.trim()) {
    return failure("CATALOG_CORRELATION_ID_REQUIRED", context);
  }
  if (context.catalogVersion !== CYCLE_TYPE_CATALOG_VERSION) {
    return failure("CATALOG_VERSION_INCOMPATIBLE", context, {
      retryable: true,
    });
  }
  if (context.catalogHash !== CYCLE_TYPE_CATALOG_FINGERPRINT) {
    return failure("CATALOG_FINGERPRINT_STALE", context, {
      retryable: true,
    });
  }

  const entry = catalog.entries.find(
    (candidate) => candidate.cycleTypeId === context.cycleTypeId,
  );
  if (!entry) {
    return failure("CYCLE_TYPE_UNKNOWN", context);
  }
  if (entry.lifecycleStatus !== "active") {
    return failure("CYCLE_TYPE_NOT_SELECTABLE", context, {
      lifecycleStatus: entry.lifecycleStatus,
    });
  }
  if (!entry.ckc || !hasValidMapping(entry.ckc)) {
    return failure("CYCLE_TYPE_MAPPING_INVALID", context, {
      lifecycleStatus: entry.lifecycleStatus,
      recoverable: false,
    });
  }

  return Object.freeze({
    ok: true,
    projection: Object.freeze({
      cycleTypeId: entry.cycleTypeId,
      label: entry.label,
      shortDescription: entry.shortDescription,
      lifecycleStatus: entry.lifecycleStatus,
      ckc: freezeMapping(entry.ckc),
      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
      catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
      correlationId: context.correlationId,
    }),
  });
}
```

## 13. Contenu complet des deux fichiers de test créés

### `projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts`

```typescript
/**
 * V3.1-D2-A — canonical catalog fingerprint tests.
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  projectCatalogFingerprint,
  serializeCatalogFingerprint,
  type CycleTypeCatalog,
  type CycleTypeDefinition,
} from "@/lib/oa/cycle";

function cloneCatalog(
  mutate?: (entries: CycleTypeDefinition[]) => void,
): CycleTypeCatalog {
  const entries = CYCLE_TYPE_CATALOG.entries.map((entry) => ({
    ...entry,
    ckc: { ...entry.ckc },
    aliases: [...entry.aliases],
  }));
  mutate?.(entries);
  return { version: CYCLE_TYPE_CATALOG.version, entries };
}

function sha256(serialized: string): string {
  return `sha256:${createHash("sha256").update(serialized).digest("hex")}`;
}

describe("V3.1-D2-A catalog fingerprint", () => {
  it("projects exactly fifteen entries in contractual order", () => {
    const projection = projectCatalogFingerprint();
    expect(projection).toHaveLength(15);
    expect(projection.map((entry) => entry.cycleTypeId)).toEqual(
      CYCLE_TYPE_CATALOG.entries.map((entry) => entry.cycleTypeId),
    );
  });

  it("includes only the closed contractual field set", () => {
    for (const entry of projectCatalogFingerprint()) {
      expect(Object.keys(entry)).toEqual([
        "cycleTypeId",
        "canonicalKey",
        "lifecycleStatus",
        "methodCycleNumber",
        "ckc",
      ]);
      expect(Object.keys(entry.ckc)).toEqual([
        "mandatory",
        "primaryLevel",
        "primaryReference",
        "fallbackPolicy",
        "fallbackReference",
        "executionAuthority",
        "doctrineStatus",
        "unavailableBehavior",
      ]);
      expect(entry).not.toHaveProperty("label");
      expect(entry).not.toHaveProperty("shortDescription");
      expect(entry).not.toHaveProperty("displayOrder");
      expect(entry).not.toHaveProperty("methodReference");
      expect(entry).not.toHaveProperty("aliases");
    }
  });

  it("serializes deterministically and matches the static SHA-256", () => {
    const first = serializeCatalogFingerprint();
    const second = serializeCatalogFingerprint();
    expect(second).toBe(first);
    expect(sha256(first)).toBe(CYCLE_TYPE_CATALOG_FINGERPRINT);
    expect(CYCLE_TYPE_CATALOG_FINGERPRINT).toMatch(/^sha256:[0-9a-f]{64}$/);
  });

  it("detects a contractual field change", () => {
    const changed = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        canonicalKey: `${entries[0].canonicalKey}-changed`,
      };
    });
    expect(sha256(serializeCatalogFingerprint(changed))).not.toBe(
      CYCLE_TYPE_CATALOG_FINGERPRINT,
    );
  });

  it("ignores label and shortDescription changes", () => {
    const changed = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        label: "Changed presentation",
        shortDescription: "Changed description",
      };
    });
    expect(serializeCatalogFingerprint(changed)).toBe(
      serializeCatalogFingerprint(),
    );
  });

  it("normalizes absent fallbackReference to explicit null", () => {
    const synthetic = projectCatalogFingerprint().find(
      (entry) => entry.ckc.primaryLevel === "synthetic",
    );
    expect(synthetic?.ckc.fallbackReference).toBeNull();
    expect(serializeCatalogFingerprint()).toContain(
      '"fallbackReference":null',
    );
  });

  it("returns frozen projections without mutating the D1 catalog", () => {
    const before = serializeCatalogFingerprint();
    const projection = projectCatalogFingerprint();
    expect(Object.isFrozen(projection)).toBe(true);
    expect(projection.every(Object.isFrozen)).toBe(true);
    expect(projection.every((entry) => Object.isFrozen(entry.ckc))).toBe(true);
    expect(serializeCatalogFingerprint()).toBe(before);
  });

  it("keeps production fingerprint code client-safe and dependency-free", () => {
    const source = readFileSync(
      path.resolve(
        __dirname,
        "../../../lib/oa/cycle/domain/catalogFingerprint.ts",
      ),
      "utf8",
    );
    expect(source).not.toMatch(/node:crypto|node:fs|from ["']next/);
    expect(source).not.toMatch(/infrastructure\//);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts`

```typescript
/**
 * V3.1-D2-A — pure fail-closed catalog projection tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  projectSelectableCycleType,
  serializeCatalogFingerprint,
  type CatalogProjectionErrorCode,
  type CatalogSelectionContext,
  type CycleTypeCatalog,
  type CycleTypeDefinition,
} from "@/lib/oa/cycle";

function context(
  overrides: Partial<CatalogSelectionContext> = {},
): CatalogSelectionContext {
  return {
    cycleTypeId: "cyc:delivery",
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: "cor:d2-a-test",
    ...overrides,
  };
}

function cloneCatalog(
  mutate: (entries: CycleTypeDefinition[]) => void,
): CycleTypeCatalog {
  const entries = CYCLE_TYPE_CATALOG.entries.map((entry) => ({
    ...entry,
    ckc: { ...entry.ckc },
    aliases: [...entry.aliases],
  }));
  mutate(entries);
  return { version: CYCLE_TYPE_CATALOG_VERSION, entries };
}

function expectFailure(
  result: ReturnType<typeof projectSelectableCycleType>,
  code: CatalogProjectionErrorCode,
): void {
  expect(result.ok).toBe(false);
  if (result.ok) throw new Error("Expected catalog projection failure");
  expect(result.error.code).toBe(code);
  expect(result.error.blocking).toBe(true);
  expect(result).not.toHaveProperty("projection");
  expect(result.error).not.toHaveProperty("projection");
  expect(result.error).not.toHaveProperty("ckc");
}

describe("V3.1-D2-A catalog projection", () => {
  it("projects an active type and preserves canonical context", () => {
    const result = projectSelectableCycleType(context());
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.projection).toMatchObject({
      cycleTypeId: "cyc:delivery",
      label: "Delivery / implémentation",
      lifecycleStatus: "active",
      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
      catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
      correlationId: "cor:d2-a-test",
    });
    expect(result.projection.ckc).toMatchObject({
      mandatory: true,
      primaryLevel: "synthetic",
      primaryReference: CKC_SYNTHETIC_MAP_PATH,
      fallbackPolicy: "none",
      executionAuthority: false,
      doctrineStatus: "method-candidate",
      unavailableBehavior: "fail-closed",
    });
    expect(Object.isFrozen(result.projection)).toBe(true);
    expect(Object.isFrozen(result.projection.ckc)).toBe(true);
  });

  it("rejects an absent correlationId first", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          correlationId: "  ",
          catalogVersion: "wrong",
          catalogHash: "wrong",
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_CORRELATION_ID_REQUIRED",
    );
  });

  it("rejects an incompatible catalog version", () => {
    expectFailure(
      projectSelectableCycleType(context({ catalogVersion: "stale" })),
      "CATALOG_VERSION_INCOMPATIBLE",
    );
  });

  it("rejects a stale catalog fingerprint", () => {
    expectFailure(
      projectSelectableCycleType(
        context({ catalogHash: `sha256:${"0".repeat(64)}` }),
      ),
      "CATALOG_FINGERPRINT_STALE",
    );
  });

  it("rejects an unknown cycle type", () => {
    expectFailure(
      projectSelectableCycleType(context({ cycleTypeId: "cyc:unknown" })),
      "CYCLE_TYPE_UNKNOWN",
    );
  });

  it.each(["deprecated", "unavailable"] as const)(
    "rejects lifecycle %s",
    (lifecycleStatus) => {
      const catalog = cloneCatalog((entries) => {
        entries[7] = { ...entries[7], lifecycleStatus };
      });
      const result = projectSelectableCycleType(context(), catalog);
      expectFailure(result, "CYCLE_TYPE_NOT_SELECTABLE");
      if (!result.ok) {
        expect(result.error.lifecycleStatus).toBe(lifecycleStatus);
      }
    },
  );

  it("fails closed for an unknown runtime lifecycle status", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        lifecycleStatus:
          "future-status" as CycleTypeDefinition["lifecycleStatus"],
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_NOT_SELECTABLE",
    );
  });

  it("rejects mandatory false", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          mandatory: false as unknown as true,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects executionAuthority true", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          executionAuthority: true as unknown as false,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects invalid doctrineStatus and unavailableBehavior", () => {
    for (const field of ["doctrineStatus", "unavailableBehavior"] as const) {
      const catalog = cloneCatalog((entries) => {
        entries[7] = {
          ...entries[7],
          ckc: { ...entries[7].ckc, [field]: "invalid" },
        } as CycleTypeDefinition;
      });
      expectFailure(
        projectSelectableCycleType(context(), catalog),
        "CYCLE_TYPE_MAPPING_INVALID",
      );
    }
  });

  it("rejects a detailed mapping without canonical fallback", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: {
          ...entries[0].ckc,
          fallbackPolicy: "none",
          fallbackReference: undefined,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(
        context({ cycleTypeId: "cyc:framing" }),
        catalog,
      ),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects a synthetic mapping with a non-canonical reference", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          primaryReference: "method/non-canonical.md",
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects an extended mapping", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          dynamicResolution: true,
        } as CycleTypeDefinition["ckc"],
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("does not expose profile, Morris decision, or partial failure data", () => {
    const success = projectSelectableCycleType(context());
    expect(success.ok).toBe(true);
    if (!success.ok) throw new Error(success.error.message);
    expect(success.projection).not.toHaveProperty("profile");
    expect(success.projection).not.toHaveProperty("recommendedProfile");
    expect(success.projection).not.toHaveProperty("isMorrisDecision");
    expect(success.projection).not.toHaveProperty("consumed");

    const failure = projectSelectableCycleType(
      context({ cycleTypeId: "cyc:unknown" }),
    );
    expectFailure(failure, "CYCLE_TYPE_UNKNOWN");
  });

  it("does not mutate the production catalog", () => {
    const before = serializeCatalogFingerprint();
    const firstEntry = CYCLE_TYPE_CATALOG.entries[0];
    projectSelectableCycleType(context());
    expect(serializeCatalogFingerprint()).toBe(before);
    expect(CYCLE_TYPE_CATALOG.entries[0]).toBe(firstEntry);
    expect(Object.isFrozen(CYCLE_TYPE_CATALOG.entries[0])).toBe(true);
  });
});
```

## 14. Diff utile complet de index.ts

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 3daf575..9ad18b7 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -10,6 +10,9 @@ export * from "./domain/errors";
 export * from "./domain/invariants";
 export * from "./domain/qualification";
 export * from "./domain/cycleTypeCatalog";
+export * from "./domain/ckcQualificationContracts";
+export * from "./domain/catalogFingerprint";
+export * from "./domain/catalogProjection";

 export * from "./ports/cycleRepository";
 export * from "./ports/trajectoryRepository";
```

## 15. Section modifiée complète de 19

## AH. Registre d'exécution D2-A — 2026-08-02

Ce registre complète l'historique du backlog sans réécrire le statut initial
des dix-sept stories.

| Élément | État d'exécution |
|---------|------------------|
| GO Delivery D2-A | **consommé** — 2026-08-02 03:16 CEST (+0200) |
| Branche locale | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` créée depuis `e1befcb8…` |
| BL-D2-A-01 | **exécutée** — contrats D2-A et projection fingerprint fermée |
| BL-D2-A-02 | **exécutée** — HASH-A statique + garde SHA-256 test-only |
| BL-D2-A-03 | **exécutée** — Catalog Projection pure et fail-closed |
| BL-D2-A-04 | **exécutée** — 24 tests D2-A + non-régression D1 |
| Tests ciblés | fingerprint **8/8** · projection **16/16** |
| Baseline pré-mutation | catalogue D1 **46/46** · cycle OA **94/94** |
| Delivery D2-A | **complète localement** |
| QA D2-A indépendante | **non exécutée** |
| PR readiness D2-A | **non ouverte** |
| D2-B / D2-C | **fermés** — aucun élément implémenté |
| D2-D / D3 | **fermés** |
| Git projet | aucun commit · aucun push · aucune PR |

**Statut d'exécution :**
`D2-A DELIVERY COMPLETE LOCALLY — READY FOR QA — NOT PR READY`.


## 16. Sections modifiées complètes de 08

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

**Statut QA initiale :** `FAIL historique` — [`01`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) (inchangé).

**Statut correctif :** `CORRECTIVE DELIVERY IMPLEMENTED` — [`02`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md) (inchangé).

**Statut revalidation :** `QA REVALIDATION PASS — R-QA-01…09 CLOSED` — [`03`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md) (inchangé).

**QA-G3 Morris :** **PASS** (2026-07-30 21:36 CEST).

**Statut PR / merge / capitalisation (historique) :** PR #296 + capitalisation #297 **mergées** · D1 **techniquement clos** sur `main`.

Docs :
- [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md)
- rapports `01` / `02` / `03` / `04`

| Preuve | Résultat |
|--------|----------|
| 15 IDs / mapping CKC | conformes |
| Revalidation / readiness tests | 46/46 · 94/94 · 827/827 · typecheck/lint/build PASS |
| QA-G2 | vert |
| QA-G3 | **PASS Morris** |
| PR / merge / capitalisation | PR #296 + #297 mergées · D1 techniquement clos sur `main` @ `e1befcb8…` |
| D2 cadrage | **terminé et arbitré** — [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) · D-V3.1-D2-01…12 **ADOPTED BY MORRIS** |
| D2 conception fonctionnelle | **validée** — [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) |
| Architecture fonctionnelle D2 | **adoptée (FA-C)** — [`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) · D-V3.1-D2-FA-01…12 **ADOPTED BY MORRIS** |
| Architecture technique D2 | **adoptée** — [`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) · D-V3.1-D2-TA-01…12 **ADOPTED BY MORRIS** |
| Backlog D2-A/B/C | **validé** — [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) · 17 stories préservées |
| Delivery D2-A | **complète localement** — contrats, HASH-A, projection pure · [rapport](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md) |
| QA D2-A | **non exécutée** — gate distinct requis |
| PR readiness D2-A | **non ouverte** |
| Delivery D2-B | **fermée** — gate distinct requis après validation/intégration D2-A |
| Delivery D2-C | **fermée** |
| D2-D (extensions) | **gated** · non ouvert |
| D3 | **non ouvert** |

### Slicing CAT-08

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **cadrage arbitré** · **conception validée** · **FA-C adoptée** · **TA adoptée** · **backlog validé** · D2-A Delivery **complète localement / prête QA** · D2-B/C **fermées** · slicing **A→B→C** · D2-D gated |
| **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |

### Réserves QA

R-QA-01…09 **CLOSED**. QA-G3 PASS. Historique PR readiness conservé.

### Réserves D2

Catalog Projection D2-A complète localement ; QA indépendante requise.
Orchestration CKC, resolver et bridge QualifyCycle restent fermés en D2-B/C —
voir [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) /
[`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) /
[`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) /
[`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) /
[`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md).

## Lot V3.2 / V4 / V5 / V6

**NOT AUTHORIZED.**


## 17. Sections modifiées complètes du README framing

# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — V3.1-D2-A DELIVERY COMPLETE LOCALLY — READY FOR QA — NOT PR READY` |
| **Date** | 2026-08-02 03:26 CEST (+0200) |
| **Cycle courant** | 8 — Delivery / implémentation V3.1-D2-A |
| **Profil** | **Standard** |
| **Typologie** | EVOL |
| **Gate courant** | GO Delivery D2-A **consommé** (2026-08-02 03:16 CEST) |
| **Branche Delivery** | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
| **Décisions D2 produit** | D-V3.1-D2-01…12 **ADOPTED BY MORRIS** |
| **Décisions D2-FA** | D-V3.1-D2-FA-01…12 **ADOPTED BY MORRIS** (FA-C) |
| **Décisions D2-TA** | D-V3.1-D2-TA-01…12 **ADOPTED BY MORRIS** |
| **Backlog** | [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) **validé** — 17 stories (A×4 · B×6 · C×7) · ordre A→B→C |
| **Delivery D2-A** | [rapport](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md) — quatre stories exécutées · 24 tests D2-A |
| **Base `main`** | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| **Docs D2** | [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) · [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) · [`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) · [`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) (**TA adoptée**) · [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) |
| **Docs protégées** | `12`–`18` et documents D1 **inchangés** (ce cycle) |
| **Git projet** | aucun commit · aucun push · aucune PR |
| **Réserve README** | `ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED` |

## Synthèse

| Lot | État |
|-----|------|
| V1 / V2 | intégrés `main` |
| V3 / V3.1 cadrage–conception–adoption | terminés (`12`/`13`/`14`) |
| **V3.1-D1** | **techniquement clos** sur `main` |
| **V3.1-D2 FA/TA** | **adoptées** |
| **V3.1-D2 backlog** | **validé** |
| **Delivery D2-A** | **complète localement** · QA indépendante requise · pas PR ready |
| Delivery D2-B/C | **fermées** |
| D2-D extensions | **gated** |
| V3.1-D3 | **fermé** · réserve Figma |
| V3.2 / V4–V6 | non autorisés |

**INHERITED-R-01 (README) :** condensation framing — **ACCEPTED — STILL TRACEABLE — NOT LIFTED**.

## Gate candidat suivant

```text
GO QA VALIDATION SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
VERIFY CONTRACTS, FINGERPRINT DETERMINISM, FAIL-CLOSED CATALOG PROJECTION, IMPORT BOUNDARIES AND NON-REGRESSION —
NO CORRECTIVE IMPLEMENTATION UNLESS DISTINCT MORRIS GO —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

## Verdict

`V3.1-D2-A DELIVERY COMPLETE LOCALLY — READY FOR INDEPENDENT QA — NOT PR READY — D2-B/C CLOSED — D3 NOT OPENED`


## 18. Contenu complet du README Delivery

# V3.1-D2-A — Catalog Projection

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-08-02 03:26 CEST (+0200) |
| Cycle | 8 — Delivery / implémentation |
| Profil | Standard |
| Typologie | EVOL |
| Branche locale | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
| Base / HEAD | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| Statut | `D2-A DELIVERY COMPLETE LOCALLY — READY FOR QA — NOT PR READY` |

Le profil Standard est proportionné à un diff de fonctions de domaine pures,
types readonly, constante statique et tests, sans resolver, infrastructure,
mutation, UI, dépendance ni changement d'architecture.

## B. Gate Morris

Gate consommé le 2026-08-02 à 03:16 CEST :

```text
GO DELIVERY SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
USE VALIDATED BACKLOG AND ADOPTED TA-01…12 —
IMPLEMENT CONTRACTS, CATALOG FINGERPRINT AND PURE CATALOG PROJECTION —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

## C. Sources

Template d'exécution SFIA, routing guide, operating model, guardrails,
validation checklist, engineering principles, delivery pipeline, carte CKC,
matrice CKC, méthode cycle §4.8, documents D2 `15` à `19`, backlog `08`,
README framing, contrat catalogue D1, types/erreurs/invariants/index T-A2,
tests cycle OA, README D1 et configurations TypeScript/Vitest/Next.

CKC : contrat détaillé absent ; fallback carte synthétique + méthode §4.8,
statut `method-candidate`, guidance cognitive expérimentale,
`executionAuthority=false`.

## D. Git Truth et transition de branche

- branche initiale : `framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage` ;
- `HEAD = main = origin/main = e1befcb8…` ; divergence `0/0` ;
- staged vide ; état documentaire attendu uniquement ;
- 77 worktrees ; prune dry-run vide ;
- branche Delivery locale et distante absentes ;
- handoff source : tip `dbb4e80…`, blob `85596ce…` ;
- branche créée localement, sans commit ni push ;
- empreintes SHA-256 de `15` à `19`, `08` et README identiques avant/après.

## E. Stories consommées

- BL-D2-A-01 — contrats dédiés et projection contractuelle ;
- BL-D2-A-02 — fingerprint statique et garde SHA-256 ;
- BL-D2-A-03 — projection pure et fail-closed ;
- BL-D2-A-04 — tests et non-régression.

## F. Décisions TA consommées

TA-01, TA-02, TA-03, TA-06 et la partie locale de TA-09 sont implémentées.
TA-04/05/07 appartiennent à D2-B ; TA-08/11 à D2-C ; TA-10 à D2-B/C.
TA-12 est respectée : D2-B et D2-C restent fermés.

## G. Périmètre

Contrats D2-A, projection fermée du catalogue, sérialisation canonique,
HASH-A statique, contrôle SHA-256 test-only, projection de sélection pure,
erreurs locales, exports additifs, tests et documentation.

## H. Hors périmètre

Resolver, manifest CKC, preuve de consommation, bridge QualifyCycle,
résultat global D2, audit, factory, infrastructure, CreateCycle, mutation,
UI, API, D2-B, D2-C, D2-D et D3.

## I. Contrats D2-A

`CatalogSelectionContext` conserve `cycleTypeId`, `catalogVersion`,
`catalogHash`, `correlationId`. `CatalogFingerprintEntry` ferme exactement
les champs identitaires, lifecycle, numéro de méthode et mapping CKC.
`ValidatedCycleTypeProjection` expose présentation D1, lifecycle, mapping CKC,
version, hash et corrélation, sans profil, décision ni consommation.

## J. Projection contractuelle du fingerprint

La projection conserve l'ordre contractuel des quinze entrées et un ordre fixe
des propriétés. `fallbackReference` absent est normalisé en `null`.
Labels, descriptions, displayOrder, methodReference et aliases sont exclus.

## K. HASH-A et mécanisme de garde

- format : `sha256-canonical-json-v1` ;
- valeur : `sha256:27316864454634a45342baaa1782898bea12914a4ec9cd9b051622eef9efd2cc` ;
- production : sérialisation JSON déterministe uniquement ;
- test : `createHash("sha256")` depuis `node:crypto`, jamais importé en production ;
- aucun artefact généré, script permanent, package ou changement CI.

## L. Catalog Projection

`projectSelectableCycleType` applique dans l'ordre : corrélation, version,
fingerprint, existence, lifecycle active, puis cohérence du mapping CKC.
Elle accepte un seam de catalogue pur pour les tests négatifs et utilise le
singleton D1 par défaut. Le résultat de succès et le mapping sont gelés.

## M. Erreurs locales

Erreurs structurées, bloquantes et sans projection partielle :
`CATALOG_CORRELATION_ID_REQUIRED`, `CATALOG_VERSION_INCOMPATIBLE`,
`CATALOG_FINGERPRINT_STALE`, `CYCLE_TYPE_UNKNOWN`,
`CYCLE_TYPE_NOT_SELECTABLE`, `CYCLE_TYPE_MAPPING_INVALID`.
`CycleDetailCode` et `CycleStructuredError` restent inchangés.

## N. Fichiers

Créés : trois modules de domaine, deux suites de tests et ce rapport.
Modifiés : barrel `index.ts` par trois exports uniquement, documents framing
`19`, `08` et `README`. Aucun autre fichier projet.

## O. Tests

Baseline avant modification : catalogue D1 **46/46 PASS** ; cycle OA
**94/94 PASS**. D2-A ciblé : fingerprint **8/8 PASS** ; projection
**16/16 PASS**.

## P. Résultats complets

- fingerprint D2-A : **8/8 PASS** ;
- Catalog Projection D2-A : **16/16 PASS** ;
- catalogue D1 historique : **46/46 PASS** ;
- suite `oa/cycle` : **118/118 PASS** ;
- suite complète : **851/851 PASS** ;
- typecheck : **PASS** ;
- lint : **PASS**, aucun warning ni erreur ;
- build Next : **PASS**, compilation et 10 pages statiques ;
- frontières d'import : **PASS**.

Le détail reproductible est conservé dans le review pack et le rapport
temporaire du cycle.

## Q. Diff et volumétrie

Diff borné aux fichiers autorisés. Les documents `12` à `18`, les documents
D1, les dépendances, configurations et modules T-A2 protégés sont inchangés.

## R. Anti-claims

Delivery locale ≠ QA indépendante ; tests verts ≠ PR ready ; mapping CKC ≠
résolution ; fingerprint ≠ preuve de consommation ; projection ≠ bridge
QualifyCycle. Aucun commit/push/PR projet, aucune promotion méthode.

## S. Risques et réserves

Le fingerprint doit être mis à jour explicitement si un champ contractuel D1
change ; le test empêche une dérive silencieuse. `INHERITED-R-01` reste
acceptée, traçable et non levée. D2-B dépend d'une intégration/validation
ultérieure de D2-A et d'un gate Morris distinct.

## T. Readiness QA

La Delivery D2-A est complète localement et prête pour une QA indépendante.
La QA n'est pas exécutée par ce cycle et la PR readiness n'est pas ouverte.

## U. Verdict

```text
V3.1-D2-A CATALOG PROJECTION DELIVERY COMPLETE —
BL-D2-A-01…04 IMPLEMENTED —
STATIC HASH-A AND TEST-ONLY SHA-256 GUARD IMPLEMENTED —
PURE FAIL-CLOSED CATALOG PROJECTION IMPLEMENTED —
D1 PRESERVED —
READY FOR INDEPENDENT QA —
NOT PR READY —
NO D2-B — NO D2-C — NO D2-D — NO D3 —
NO PROJECT COMMIT — NO PROJECT PUSH — NO PR
```


## 19. Contrats

Contrats readonly dédiés : Selection Context, projection fingerprint fermée,
projection validée, erreurs locales et résultat discriminé. Aucun changement
de `domain/types.ts` ou des erreurs T-A2.

## 20. Fingerprint

`sha256:27316864454634a45342baaa1782898bea12914a4ec9cd9b051622eef9efd2cc`
au format `sha256-canonical-json-v1`.

## 21. Sérialisation

Projection ordonnée de quinze entrées, propriétés fixes,
`fallbackReference` absent normalisé en `null`, labels/descriptions exclus,
`JSON.stringify` déterministe.

## 22. Catalog Projection

Validation ordonnée : correlationId, version, hash, existence, lifecycle,
mapping. Active uniquement ; tout autre statut fail-closed. Mapping détaillé
ou synthétique canonique uniquement. Résultat et mapping gelés.

## 23. Erreurs

Six erreurs locales structurées : correlation requise, version incompatible,
fingerprint stale, type inconnu, type non sélectionnable, mapping invalide.
Toutes sont bloquantes et n'exposent aucune projection partielle.

## 24. Tests et résultats complets

```text
---
pid: 70737
cwd: "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app"
command: "set -e\nnpm test -- __tests__/oa/cycle/catalogFingerprint.test.ts\nnpm test -- __tests__/oa/cycle/catalogProjection.test.ts\nnpm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts\nnpm test -- __tests__/oa/cycle/\nnpm test\nnpm run typecheck\nnpm run lint\nnpm run build"
title: "Exécuter toute la matrice de validation D2-A"
status: succeeded
started_at: 2026-08-02T01:25:45.182Z
running_for_ms: 19472
---

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 3ms

 Test Files  1 passed (1)
      Tests  8 passed (8)
   Start at  03:25:45
   Duration  295ms (transform 72ms, setup 41ms, collect 106ms, tests 3ms, environment 0ms, prepare 27ms)


> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 3ms

 Test Files  1 passed (1)
      Tests  16 passed (16)
   Start at  03:25:45
   Duration  281ms (transform 84ms, setup 21ms, collect 119ms, tests 3ms, environment 0ms, prepare 22ms)


> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/cycleTypeCatalog.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 7ms

 Test Files  1 passed (1)
      Tests  46 passed (46)
   Start at  03:25:46
   Duration  265ms (transform 77ms, setup 20ms, collect 108ms, tests 7ms, environment 0ms, prepare 23ms)


> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 7ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 4ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 4ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 12ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 73ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 74ms

 Test Files  6 passed (6)
      Tests  118 passed (118)
   Start at  03:25:47
   Duration  411ms (transform 207ms, setup 202ms, collect 822ms, tests 172ms, environment 0ms, prepare 202ms)


> sfia-studio@0.1.0 test
> vitest run


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts (4 tests) 60ms
 ✓ __tests__/ops1/actionGate.test.ts (10 tests) 116ms
stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T01:25:48.118Z","status":"started","intentLength":53,"sessionLocalId":"plat-1"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T01:25:48.215Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-1","durationMs":97,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T01:25:48.216Z","status":"started","intentLength":76,"sessionLocalId":"plat-2"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T01:25:48.353Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":76,"sessionLocalId":"plat-2","durationMs":137,"providerMode":"fake"}

 ✓ __tests__/oa/project/projectLpsFoundation.test.ts (26 tests) 105ms
stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T01:25:48.353Z","status":"started","intentLength":77,"sessionLocalId":"plat-3"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T01:25:48.432Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":77,"sessionLocalId":"plat-3","durationMs":79,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T01:25:48.432Z","status":"started","intentLength":53,"sessionLocalId":"plat-4"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T01:25:48.432Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-4","durationMs":0,"providerMode":"fake"}

 ✓ __tests__/d1/intake-platform-integration.test.ts (5 tests) 317ms
stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-5bf85351-7963-4d37-b69c-c9a30c4c25e4 ops1-att-1b069140-5333-43f8-af21-ea9183e8c5f0 fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-5bf85351-7963-4d37-b69c-c9a30c4c25e4 ops1-att-1b069140-5333-43f8-af21-ea9183e8c5f0 15 tools=0

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-5bf85351-7963-4d37-b69c-c9a30c4c25e4 ops1-att-f6e797b9-65df-4d63-9e01-ca2c3521833b fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-5bf85351-7963-4d37-b69c-c9a30c4c25e4 ops1-att-f6e797b9-65df-4d63-9e01-ca2c3521833b 30 tools=0

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-5bf85351-7963-4d37-b69c-c9a30c4c25e4 ops1-att-2f784076-4928-4a3b-a6e6-620242c5ee8d fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-5bf85351-7963-4d37-b69c-c9a30c4c25e4 ops1-att-2f784076-4928-4a3b-a6e6-620242c5ee8d 45 tools=0

 ✓ __tests__/oa/decision/decisionConfirmationAuthority.test.ts (26 tests) 103ms
 ✓ __tests__/oa/execution-contract/supersedeCancelAuthz.test.ts (11 tests) 92ms
 ✓ __tests__/oa/execution-contract/runtimeValidationHardening.test.ts (16 tests) 120ms
stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-5b2c9be0-d002-4f2b-a1a0-64ef18570cb6 ops1-att-d6a61ce0-8cf2-4aed-82e9-b1f22b58b0e0 fake-test

 ✓ __tests__/oa/execution-attempt/lifecycleFoundation.test.ts (24 tests) 276ms
stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-0f3692c1-e211-440c-9eff-77550d30145a ops1-att-b45ef9e4-9fbc-491f-8275-ef6a93f72252 fake-test

stderr | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
[ops1] CONVERSATION_ATTEMPT_FAILED ops1-sess-0f3692c1-e211-440c-9eff-77550d30145a ops1-att-b45ef9e4-9fbc-491f-8275-ef6a93f72252 INTERNAL

stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-5b2c9be0-d002-4f2b-a1a0-64ef18570cb6 ops1-att-d6a61ce0-8cf2-4aed-82e9-b1f22b58b0e0 45 tools=1

 ✓ __tests__/ops1/controlTowerTools.test.ts (7 tests) 566ms
   ✓ GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker  343ms
 ✓ __tests__/ops1/conversation-repository.test.ts (9 tests) 643ms
 ✓ __tests__/oa/execution-contract/executionContractGovernance.test.ts (18 tests) 190ms
 ✓ __tests__/oa/execution-attempt/qaAdversarialValidation.test.ts (12 tests) 142ms
 ✓ __tests__/vertical-slice-core/localProjectComposition.test.ts (13 tests) 91ms
 ✓ __tests__/oa/doctrine/resolveDoctrinePackage.test.ts (22 tests) 113ms
 ✓ __tests__/oa/execution-contract/adversarialCriticalAntiTa5.test.ts (12 tests) 131ms
 ✓ __tests__/vertical-slice-runtime/runtimeApplicationService.test.ts (8 tests) 60ms
 ✓ __tests__/oa/decision/validationAdversarial.test.ts (12 tests) 77ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 103ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 97ms
 ✓ __tests__/vertical-slice-core/importBoundaries.test.ts (3 tests) 40ms
 ✓ __tests__/ops1/repository.test.ts (6 tests) 66ms
 ✓ __tests__/oa/decision/adversarialAuthority.test.ts (8 tests) 124ms
 ✓ __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts (5 tests) 40ms
 ✓ __tests__/vertical-slice-runtime/importBoundaries.test.ts (5 tests) 56ms
 ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 31ms
 ✓ __tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts (15 tests) 49ms
 ✓ __tests__/oa/doctrine/schemaValidation.test.ts (3 tests) 72ms
 ✓ __tests__/platform/t-a7-canonical-consumers.probe.test.ts (3 tests) 20ms
 ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 18ms
stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks transitions while hold is active
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T01:25:49.667Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.project_create","ts":"2026-08-02T01:25:49.671Z","status":"ok","projectId":"proj-3c6ed89d-504d-46c1-983e-13543e69d2a3","durationMs":0}
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T01:25:49.672Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T01:25:49.672Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > allows transitions when hold is inactive (test override)
{"event":"d1.project_create","ts":"2026-08-02T01:25:49.676Z","status":"ok","projectId":"proj-fb9e3704-d54a-4426-b853-b44147abcfb9","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T01:25:49.677Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T01:25:49.677Z","status":"ok","projectId":"proj-fb9e3704-d54a-4426-b853-b44147abcfb9","durationMs":0}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks when hold is active even with empty reasons
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T01:25:49.678Z","status":"blocked","reasonCount":0,"codes":"ACTIVE_NO_REASONS"}

 ✓ __tests__/d1/t-a7-method-mode-hold.test.ts (6 tests) 13ms
 ✓ __tests__/ops1/controlTowerReinjection.test.ts (2 tests) 23ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 10ms
 ✓ __tests__/oa/evidence-review/adversarialMaturityValidation.test.ts (3 tests) 5ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts (10 tests) 11ms
 ✓ __tests__/oa/evidence-review/adversarialCoordinationValidation.test.ts (7 tests) 16ms
 ✓ __tests__/oa/evidence-review/recommendNextGate.test.ts (11 tests) 27ms
 ✓ __tests__/oa/execution-contract/antiLegacy.test.ts (4 tests) 11ms
 ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 7ms
 ✓ __tests__/oa/evidence-review/claimEvaluationLifecycle.test.ts (14 tests) 18ms
 ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 6ms
 ✓ __tests__/oa/decision/antiLegacy.test.ts (4 tests) 11ms
 ✓ __tests__/oa/evidence-review/adversarialClaimEvaluationValidation.test.ts (4 tests) 6ms
 ✓ __tests__/oa/project/antiLegacy.test.ts (4 tests) 4ms
 ✓ __tests__/oa/evidence-review/reviewBundleLifecycle.test.ts (14 tests) 17ms
 ✓ __tests__/platform/import-boundaries.test.ts (3 tests) 7ms
 ✓ __tests__/oa/execution-attempt/attemptRepository.test.ts (33 tests) 15ms
 ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 4ms
 ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 7ms
 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 10ms
 ✓ __tests__/ops1/openai-provider.test.ts (2 tests) 16ms
 ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 4ms
 ✓ __tests__/oa/evidence-review/adversarialValidation.test.ts (9 tests) 8ms
 ✓ __tests__/oa/evidence-review/reviewBundleDomain.test.ts (12 tests) 9ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 2ms
 ✓ __tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts (4 tests) 11ms
 ✓ __tests__/oa/evidence-review/verifyAndUnavailable.test.ts (13 tests) 9ms
 ✓ __tests__/platform/t-a7-consolidated-blocker-reduction.test.ts (19 tests) 9ms
 ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 5ms
 ✓ __tests__/platform/platform-ai.test.ts (5 tests) 3ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 6ms
 ✓ __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts (3 tests) 6ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 6ms
 ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 2ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 14ms
 ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 2ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 3ms
 ✓ __tests__/ops1/sfia/canonicalEngine.test.ts (17 tests) 3066ms
   ✓ SFIA context resolver > detects context stale on head mismatch  334ms
   ✓ SFIA action compiler > denies commit/push operations  306ms
   ✓ SFIA action compiler > preserves exact content  306ms
   ✓ SFIA action compiler > instantiates cursor prompt from real template  340ms
   ✓ SFIA conversation integration (fixture markers) > CREATE marker → ActionCandidate live  384ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T01:25:51.369Z","status":"started","intentLength":53,"sessionLocalId":"s1"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T01:25:51.445Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"s1","durationMs":76,"providerMode":"fake"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T01:25:51.446Z","status":"started","intentLength":22,"sessionLocalId":"s2"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_clarification_requested","ts":"2026-08-02T01:25:51.556Z","status":"NEED_CLARIFICATION","intentLength":22,"sessionLocalId":"s2","durationMs":110,"providerMode":"fake"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T01:25:51.556Z","status":"started","intentLength":22,"sessionLocalId":"s2"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T01:25:51.666Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":22,"sessionLocalId":"s2","durationMs":110,"providerMode":"fake"}

 ✓ __tests__/ops1/globalModeBadge.ui.test.tsx (5 tests) 268ms
 ✓ __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx (4 tests) 302ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T01:25:51.667Z","status":"started","intentLength":39,"sessionLocalId":"s4"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T01:25:51.760Z","status":"PROVIDER","intentLength":39,"sessionLocalId":"s4","durationMs":93,"providerMode":"fake","errorCode":"PROVIDER"}

 ✓ __tests__/d1/intake-c2.test.ts (13 tests) 396ms
 ✓ __tests__/ops1/Ops1SessionScreen.test.tsx (4 tests) 178ms
stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T01:25:52.173Z","status":"started","intentLength":53,"sessionLocalId":"harden-1"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T01:25:52.269Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"harden-1","durationMs":96,"providerMode":"fake"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T01:25:52.271Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T01:25:52.272Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > exact name ranks first with strong evidence
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T01:25:52.274Z","status":"started","sessionLocalId":"m1","proposalId":"rrp-campus"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T01:25:52.275Z","status":"AVAILABLE","sessionLocalId":"m1","durationMs":1,"proposalId":"rrp-campus","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T01:25:52.276Z","status":"STRONG_MATCH","sessionLocalId":"m1","durationMs":2,"proposalId":"rrp-campus","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > detects semantic proximity for contrats
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T01:25:52.276Z","status":"started","sessionLocalId":"m2","proposalId":"rrp-c"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T01:25:52.277Z","status":"AVAILABLE","sessionLocalId":"m2","durationMs":1,"proposalId":"rrp-c","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T01:25:52.277Z","status":"STRONG_MATCH","sessionLocalId":"m2","durationMs":1,"proposalId":"rrp-c","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stderr | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T01:25:52.271Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T01:25:52.272Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > flags multiple close matches as ambiguity
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T01:25:52.277Z","status":"started","sessionLocalId":"m3","proposalId":"rrp-multi"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T01:25:52.277Z","status":"AVAILABLE","sessionLocalId":"m3","durationMs":0,"proposalId":"rrp-multi","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T01:25:52.285Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m3","durationMs":8,"proposalId":"rrp-multi","candidateCount":2,"topScoreBand":"WEAK_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > returns no-match without inventing ids
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T01:25:52.286Z","status":"started","sessionLocalId":"m4","proposalId":"rrp-none"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T01:25:52.286Z","status":"AVAILABLE","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T01:25:52.286Z","status":"NO_MATCH","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > warns on inactive project without auto-resume
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T01:25:52.286Z","status":"started","sessionLocalId":"m5","proposalId":"rrp-draft"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T01:25:52.286Z","status":"AVAILABLE","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T01:25:52.286Z","status":"STRONG_MATCH","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > analyze-only does not force attachment
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T01:25:52.286Z","status":"started","sessionLocalId":"m6","proposalId":"rrp-ao"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T01:25:52.286Z","status":"AVAILABLE","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T01:25:52.286Z","status":"STRONG_MATCH","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > distinguishes context unavailable from empty
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T01:25:52.287Z","status":"started","sessionLocalId":"m7","proposalId":"rrp-u"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T01:25:52.287Z","status":"UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"proposalId":"rrp-u","sourceProjectCount":0,"truncationApplied":false}
[d1.intake] {"event":"intake_context_unavailable","ts":"2026-08-02T01:25:52.287Z","status":"CONTEXT_UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"errorCode":"UNAVAILABLE","proposalId":"rrp-u"}
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T01:25:52.287Z","status":"started","sessionLocalId":"m8","proposalId":"rrp-e"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T01:25:52.287Z","status":"EMPTY","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0,"truncationApplied":false}
[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T01:25:52.287Z","status":"NO_MATCH","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > caps candidates at 5 and keeps scores bounded
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T01:25:52.287Z","status":"started","sessionLocalId":"m9","proposalId":"rrp-cap"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T01:25:52.287Z","status":"AVAILABLE","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","sourceProjectCount":8,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T01:25:52.287Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","candidateCount":5,"topScoreBand":"WEAK_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 snapshot from real repository (read-only) > matches against created projects without mutation
{"event":"d1.project_create","ts":"2026-08-02T01:25:52.311Z","status":"ok","projectId":"proj-e21a22c4-359a-44fa-8d77-4124b72e5f20","durationMs":2}
{"event":"d1.project_create","ts":"2026-08-02T01:25:52.311Z","status":"ok","projectId":"proj-2db15d2f-18e2-487e-b29b-63b4c0629c50","durationMs":0}
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T01:25:52.311Z","status":"started","sessionLocalId":"repo-1","proposalId":"rrp-repo"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T01:25:52.311Z","status":"AVAILABLE","sessionLocalId":"repo-1","durationMs":0,"proposalId":"rrp-repo","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T01:25:52.311Z","status":"STRONG_MATCH","sessionLocalId":"repo-1","durationMs":0,"proposalId":"rrp-repo","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

 ✓ __tests__/d1/intake-c3.test.ts (16 tests) 140ms
 ✓ __tests__/d1/intake-c1.test.tsx (6 tests) 667ms
   ✓ D1-C2 IntakeView > shows structured proposal without executable confirm  303ms
 ✓ __tests__/increment-e.test.tsx (4 tests) 131ms
 ✓ __tests__/shell.test.tsx (1 test) 100ms
 ✓ __tests__/increment-a.test.tsx (8 tests) 165ms
 ✓ __tests__/gates.test.tsx (1 test) 38ms
 ✓ __tests__/increment-d.test.tsx (5 tests) 51ms
 ✓ __tests__/navigation.test.tsx (2 tests) 53ms
 ✓ __tests__/increment-c.test.tsx (8 tests) 1271ms
   ✓ Increment C — editable demand + confirmation > accepts editable Campus360 demand and shows exact text in confirmation  336ms
   ✓ Increment C — editable demand + confirmation > back from confirmation allows editing again  342ms
 ✓ __tests__/ops1/executionI5.test.ts (5 tests) 1646ms
   ✓ ops1 I5 execution contract + fixture run > creates contract, records GO linked to hash, runs fixture, blocks double exec  683ms
   ✓ ops1 I5 execution contract + fixture run > refuses HEAD drift and remote flags stay true  305ms
 ✓ __tests__/increment-b.test.tsx (6 tests) 35ms
 ✓ __tests__/ops1/allowlistEvaluation.test.ts (9 tests) 43ms
stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > creates project only with explicit confirmation and audits
[d1.intake] {"event":"intake_mutation_failed","ts":"2026-08-02T01:25:53.220Z","status":"FAILED","sessionLocalId":"s1","durationMs":0,"errorCode":"VALIDATION","proposalId":"rrp-1"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T01:25:53.221Z","status":"CREATE_PROJECT","sessionLocalId":"s1","proposalId":"rrp-1"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T01:25:53.221Z","status":"confirmed","sessionLocalId":"s1","proposalId":"rrp-1"}
{"event":"d1.project_create","ts":"2026-08-02T01:25:53.221Z","status":"ok","projectId":"proj-0931f1b4-3df6-4ffa-ba67-9eaf294d7710","durationMs":0}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T01:25:53.222Z","status":"SUCCEEDED","projectId":"proj-0931f1b4-3df6-4ffa-ba67-9eaf294d7710","sessionLocalId":"s1","durationMs":1,"proposalId":"rrp-1"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > replays same key same payload without duplicate
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T01:25:53.225Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T01:25:53.226Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
{"event":"d1.project_create","ts":"2026-08-02T01:25:53.226Z","status":"ok","projectId":"proj-806618d5-66d8-4a9c-8113-d38cb844a85f","durationMs":0}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T01:25:53.227Z","status":"SUCCEEDED","projectId":"proj-806618d5-66d8-4a9c-8113-d38cb844a85f","sessionLocalId":"s2","durationMs":2,"proposalId":"rrp-2"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T01:25:53.227Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T01:25:53.227Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_replayed","ts":"2026-08-02T01:25:53.227Z","status":"ALREADY_APPLIED","projectId":"proj-806618d5-66d8-4a9c-8113-d38cb844a85f","sessionLocalId":"s2","durationMs":0,"proposalId":"rrp-2"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > conflicts when same key different payload
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T01:25:53.230Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T01:25:53.230Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
{"event":"d1.project_create","ts":"2026-08-02T01:25:53.230Z","status":"ok","projectId":"proj-c4d305e1-eb6f-4063-966c-089c1271be68","durationMs":0}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T01:25:53.230Z","status":"SUCCEEDED","projectId":"proj-c4d305e1-eb6f-4063-966c-089c1271be68","sessionLocalId":"s3","durationMs":0,"proposalId":"rrp-3"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T01:25:53.231Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T01:25:53.231Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_mutation_rejected","ts":"2026-08-02T01:25:53.231Z","status":"CONFLICT","sessionLocalId":"s3","durationMs":1,"errorCode":"IDEMPOTENCY","proposalId":"rrp-3"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > existing project confirm is NO_MUTATION without invented link
{"event":"d1.project_create","ts":"2026-08-02T01:25:53.234Z","status":"ok","projectId":"proj-578af4ff-6b0c-4b20-afaa-740e7833b7e0","durationMs":1}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T01:25:53.234Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s4","proposalId":"rrp-4"}
[d1.intake] {"event":"intake_existing_project_confirmed","ts":"2026-08-02T01:25:53.234Z","status":"NO_MUTATION","projectId":"proj-578af4ff-6b0c-4b20-afaa-740e7833b7e0","sessionLocalId":"s4","durationMs":0,"proposalId":"rrp-4"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > detects stale existing project conflict
{"event":"d1.project_create","ts":"2026-08-02T01:25:53.238Z","status":"ok","projectId":"proj-2f7cf6df-99cc-491e-8d66-0d26b22e5b44","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T01:25:53.238Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T01:25:53.239Z","status":"ok","projectId":"proj-2f7cf6df-99cc-491e-8d66-0d26b22e5b44","durationMs":1}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T01:25:53.239Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s5","proposalId":"rrp-5"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T01:25:53.239Z","status":"STALE","projectId":"proj-2f7cf6df-99cc-491e-8d66-0d26b22e5b44","sessionLocalId":"s5","durationMs":0,"errorCode":"CONFLICT","proposalId":"rrp-5"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > analyze-only and cancel produce no mutation
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T01:25:53.244Z","status":"ANALYZE_ONLY","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_analyze_only_completed","ts":"2026-08-02T01:25:53.244Z","status":"NO_MUTATION","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T01:25:53.245Z","status":"CANCEL","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_cancelled","ts":"2026-08-02T01:25:53.245Z","status":"CANCELLED","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T01:25:53.248Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T01:25:53.248Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":0,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > creates project with audit and mono-operator assignments
{"event":"d1.project_create","ts":"2026-08-02T01:25:53.249Z","status":"ok","projectId":"proj-e450bfaa-b623-4851-a093-e41acc17cc01","durationMs":2}

 ✓ __tests__/d1/intake-c4.test.ts (10 tests) 36ms
stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > is idempotent on duplicate key
{"event":"d1.project_create","ts":"2026-08-02T01:25:53.253Z","status":"ok","projectId":"proj-1de6f5bc-7fe7-4299-840d-9656e447d3d2","durationMs":0}
{"event":"d1.project_create","ts":"2026-08-02T01:25:53.253Z","status":"idempotent","projectId":"proj-1de6f5bc-7fe7-4299-840d-9656e447d3d2","durationMs":0}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
{"event":"d1.project_create","ts":"2026-08-02T01:25:53.258Z","status":"ok","projectId":"proj-064acafa-343e-404b-849e-0785996b4a04","durationMs":1}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T01:25:53.258Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T01:25:53.259Z","status":"ok","projectId":"proj-064acafa-343e-404b-849e-0785996b4a04","durationMs":1}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T01:25:53.260Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T01:25:53.260Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}

 ✓ __tests__/d1/project-foundation.test.ts (7 tests) 24ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 13ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 4ms
 ✓ __tests__/fixtures.test.ts (2 tests) 2ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 1ms
 ✓ __tests__/status-pill.test.tsx (1 test) 13ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 2928ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  613ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  649ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  423ms
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 3023ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1715ms

 Test Files  92 passed (92)
      Tests  851 passed (851)
   Start at  03:25:47
   Duration  6.77s (transform 3.26s, setup 3.02s, collect 11.36s, tests 18.86s, environment 6.04s, prepare 3.37s)


> sfia-studio@0.1.0 typecheck
> tsc --noEmit


> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors

> sfia-studio@0.1.0 build
> next build

   ▲ Next.js 15.5.20

   Creating an optimized production build ...
 ✓ Compiled successfully in 929ms
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


---
exit_code: 0
elapsed_ms: 19472
ended_at: 2026-08-02T01:26:04.654Z
---
```

## 25. Non-régression

Fingerprint 8/8 ; projection 16/16 ; D1 46/46 ; OA cycle 118/118 ;
suite complète 851/851 ; typecheck, lint et build PASS.
`cycleTypeCatalog.test.ts` et le catalogue D1 sont inchangés.

## 26. Contrôles import boundary

Aucune occurrence de `node:crypto`, `node:fs`, Next ou infrastructure dans
les trois modules de production. Aucune occurrence D2-B/C (`QualifyCycle`,
resolver, audit, CreateCycle, consumed, profil ou décision Morris).

## 27. Diff et volumétrie

```text
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |  3 ++
 .../08-implementation-backlog-and-slicing.md       | 31 ++++++++++---
 .../README.md                                      | 53 +++++++++++++++-------
 3 files changed, 63 insertions(+), 24 deletions(-)
```

Numstat tracked + fichiers créés :

```text
3	0	projects/sfia-studio/app/lib/oa/cycle/index.ts
24	7	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
36	17	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
75	0	projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
49	0	projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
164	0	projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
133	0	projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts
269	0	projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts
182	0	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
```

## 28. Anti-claims

Delivery complète localement ≠ QA validée ≠ PR ready. Fingerprint ≠ preuve.
Mapping ≠ résolution. Aucun resolver, bridge, audit, factory, mutation,
package, artefact build, UI, D2-B/C/D, D3 ou promotion méthode.

## 29. Risques / réserves

Le test SHA-256 doit accompagner toute évolution contractuelle D1.
INHERITED-R-01 reste acceptée, traçable et non levée. D2-B nécessite
validation/intégration de D2-A et un gate distinct.

## 30. État Git final

```text
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? .tmp-sfia-review/MERGE_SHA.txt
?? .tmp-sfia-review/_gen_d2a_reports.py
?? .tmp-sfia-review/_gen_doc19.py
?? .tmp-sfia-review/archive-comparison.txt
?? .tmp-sfia-review/archive-source-sha256.txt
?? .tmp-sfia-review/archive-target-sha256.txt
?? .tmp-sfia-review/before-corrective/01-qa-validation-report.md
?? .tmp-sfia-review/before-corrective/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-corrective/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-corrective/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-corrective/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-corrective/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-corrective/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-corrective/d1-README.md
?? .tmp-sfia-review/before-corrective/framing-README.md
?? .tmp-sfia-review/before-corrective/index.ts
?? .tmp-sfia-review/before-d1/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-d1/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-d1/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-d1/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-d1/README.md
?? .tmp-sfia-review/before-pr-readiness/01-qa-validation-report.md
?? .tmp-sfia-review/before-pr-readiness/02-corrective-delivery-report.md
?? .tmp-sfia-review/before-pr-readiness/03-qa-revalidation-report.md
?? .tmp-sfia-review/before-pr-readiness/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-pr-readiness/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-pr-readiness/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-pr-readiness/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-pr-readiness/d1-README.md
?? .tmp-sfia-review/before-pr-readiness/framing-README.md
?? .tmp-sfia-review/before-pr-readiness/index.ts
?? .tmp-sfia-review/before-publication/01.md
?? .tmp-sfia-review/before-publication/02.md
?? .tmp-sfia-review/before-publication/03.md
?? .tmp-sfia-review/before-publication/04.md
?? .tmp-sfia-review/before-publication/08.md
?? .tmp-sfia-review/before-publication/12.md
?? .tmp-sfia-review/before-publication/13.md
?? .tmp-sfia-review/before-publication/14.md
?? .tmp-sfia-review/before-publication/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-publication/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-publication/d1-README.md
?? .tmp-sfia-review/before-publication/framing-README.md
?? .tmp-sfia-review/before-publication/index.ts
?? .tmp-sfia-review/before-qa/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-qa/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-qa/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-qa/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-qa/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-qa/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-qa/d1-README.md
?? .tmp-sfia-review/before-qa/framing-README.md
?? .tmp-sfia-review/before-qa/index.ts
?? .tmp-sfia-review/before-revalidation/01-qa-validation-report.md
?? .tmp-sfia-review/before-revalidation/02-corrective-delivery-report.md
?? .tmp-sfia-review/before-revalidation/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-revalidation/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-revalidation/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-revalidation/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-revalidation/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-revalidation/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-revalidation/d1-README.md
?? .tmp-sfia-review/before-revalidation/framing-README.md
?? .tmp-sfia-review/before-revalidation/index.ts
?? .tmp-sfia-review/before/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before/README.md
?? .tmp-sfia-review/cap-truth.txt
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/ci-jobs.json
?? .tmp-sfia-review/ci-run.json
?? .tmp-sfia-review/evidence/v2-a2/01-initial.png
?? .tmp-sfia-review/evidence/v2-a2/02-validation-errors.png
?? .tmp-sfia-review/evidence/v2-a2/03-success-real-runtime.png
?? .tmp-sfia-review/evidence/v2-a3/01-workspace-missing.png
?? .tmp-sfia-review/evidence/v2-a3/02-workspace-after-create-not-found.png
?? .tmp-sfia-review/evidence/v2-a3/03-create-form-filled.png
?? .tmp-sfia-review/evidence/v2-a3/04-create-success.png
?? .tmp-sfia-review/evidence/v2-a3/05-workspace-loaded.png
?? .tmp-sfia-review/final-git-state.txt
?? .tmp-sfia-review/framing-README-main.md
?? .tmp-sfia-review/framing-README-pr.md
?? .tmp-sfia-review/local-numstat.txt
?? .tmp-sfia-review/main-worktree-inspection.txt
?? .tmp-sfia-review/main-worktree-status.txt
?? .tmp-sfia-review/main-worktree-untracked-evidence.txt
?? .tmp-sfia-review/merge-commit-source.txt
?? .tmp-sfia-review/merge-readiness-truth.txt
?? .tmp-sfia-review/merge-revalidation.txt
?? .tmp-sfia-review/merge-truth.txt
?? .tmp-sfia-review/pr-296-after-api.json
?? .tmp-sfia-review/pr-296-after-body-metadata.json
?? .tmp-sfia-review/pr-296-after-merge.json
?? .tmp-sfia-review/pr-296-archive-and-cleanup-report.md
?? .tmp-sfia-review/pr-296-before-metadata.json
?? .tmp-sfia-review/pr-296-before-view.json
?? .tmp-sfia-review/pr-296-before.json
?? .tmp-sfia-review/pr-296-body-after.md
?? .tmp-sfia-review/pr-296-body-api-json.md
?? .tmp-sfia-review/pr-296-body-api-raw.md
?? .tmp-sfia-review/pr-296-body-authorized.diff
?? .tmp-sfia-review/pr-296-body-before-vs-remote-after.diff
?? .tmp-sfia-review/pr-296-body-before.md
?? .tmp-sfia-review/pr-296-body-concurrent-check.md
?? .tmp-sfia-review/pr-296-body-final.md
?? .tmp-sfia-review/pr-296-body-hashes.txt
?? .tmp-sfia-review/pr-296-body-remote-after.md
?? .tmp-sfia-review/pr-296-body-update-response.json
?? .tmp-sfia-review/pr-296-body-update.json
?? .tmp-sfia-review/pr-296-body.md
?? .tmp-sfia-review/pr-296-checks.json
?? .tmp-sfia-review/pr-296-checks.txt
?? .tmp-sfia-review/pr-296-comments.json
?? .tmp-sfia-review/pr-296-commits.txt
?? .tmp-sfia-review/pr-296-concurrent-meta.json
?? .tmp-sfia-review/pr-296-concurrent.json
?? .tmp-sfia-review/pr-296-diff-correspondence.txt
?? .tmp-sfia-review/pr-296-fetch-main-attempt.txt
?? .tmp-sfia-review/pr-296-files.txt
?? .tmp-sfia-review/pr-296-final-metadata.json
?? .tmp-sfia-review/pr-296-inline-comments-after.json
?? .tmp-sfia-review/pr-296-inline-comments-before.json
?? .tmp-sfia-review/pr-296-inline-comments-concurrent.json
?? .tmp-sfia-review/pr-296-issue-comments-after.json
?? .tmp-sfia-review/pr-296-issue-comments-before.json
?? .tmp-sfia-review/pr-296-issue-comments-concurrent.json
?? .tmp-sfia-review/pr-296-issue-comments.json
?? .tmp-sfia-review/pr-296-jobs.json
?? .tmp-sfia-review/pr-296-merge-body-after.md
?? .tmp-sfia-review/pr-296-merge-body-authorized.diff
?? .tmp-sfia-review/pr-296-merge-body-before.md
?? .tmp-sfia-review/pr-296-merge-body-concurrent.md
?? .tmp-sfia-review/pr-296-merge-body-final.md
?? .tmp-sfia-review/pr-296-merge-body-remote-after.md
?? .tmp-sfia-review/pr-296-merge-report.md
?? .tmp-sfia-review/pr-296-merge-response.json
?? .tmp-sfia-review/pr-296-metadata.json
?? .tmp-sfia-review/pr-296-pm-inline-comments.json
?? .tmp-sfia-review/pr-296-pm-issue-comments.json
?? .tmp-sfia-review/pr-296-pm-reviews.json
?? .tmp-sfia-review/pr-296-post-merge-cleanup-report.md
?? .tmp-sfia-review/pr-296-post-merge-runs.json
?? .tmp-sfia-review/pr-296-postmerge-body.md
?? .tmp-sfia-review/pr-296-postmerge-jobs.json
?? .tmp-sfia-review/pr-296-postmerge-pr.json
?? .tmp-sfia-review/pr-296-postmerge-run.json
?? .tmp-sfia-review/pr-296-pre-merge.json
?? .tmp-sfia-review/pr-296-pre-ready.json
?? .tmp-sfia-review/pr-296-ready-transition-report.md
?? .tmp-sfia-review/pr-296-remote-review-report.md
?? .tmp-sfia-review/pr-296-remote.diff
?? .tmp-sfia-review/pr-296-resume-inline-comments.json
?? .tmp-sfia-review/pr-296-resume-issue-comments.json
?? .tmp-sfia-review/pr-296-resume-pr.json
?? .tmp-sfia-review/pr-296-resume-reviews.json
?? .tmp-sfia-review/pr-296-resumed-post-merge-cleanup-report.md
?? .tmp-sfia-review/pr-296-reviews-after.json
?? .tmp-sfia-review/pr-296-reviews-before.json
?? .tmp-sfia-review/pr-296-reviews-concurrent.json
?? .tmp-sfia-review/pr-296-reviews.json
?? .tmp-sfia-review/pr-296-run.json
?? .tmp-sfia-review/pr-296-runs-after.json
?? .tmp-sfia-review/pr-296-switch-main-attempt.txt
?? .tmp-sfia-review/pr-296-view.json
?? .tmp-sfia-review/pr-297-after-ready.json
?? .tmp-sfia-review/pr-297-before-ready.json
?? .tmp-sfia-review/pr-297-body-after-ci-checkbox.md
?? .tmp-sfia-review/pr-297-body-after-merge-go.md
?? .tmp-sfia-review/pr-297-body-after-publish.md
?? .tmp-sfia-review/pr-297-body-before-merge.md
?? .tmp-sfia-review/pr-297-body-before-ready.md
?? .tmp-sfia-review/pr-297-body-checkbox-diff.patch
?? .tmp-sfia-review/pr-297-body-current.md
?? .tmp-sfia-review/pr-297-body-final-merged.md
?? .tmp-sfia-review/pr-297-body-merge-diff.patch
?? .tmp-sfia-review/pr-297-body-only-correction-pack.md
?? .tmp-sfia-review/pr-297-body-ready-f02-correction.md
?? .tmp-sfia-review/pr-297-branch-inventory.txt
?? .tmp-sfia-review/pr-297-ci-premerge.json
?? .tmp-sfia-review/pr-297-cleanup-before-after-comparison.json
?? .tmp-sfia-review/pr-297-cleanup-chatgpt-review-preserved.md
?? .tmp-sfia-review/pr-297-cleanup-ci.json
?? .tmp-sfia-review/pr-297-cleanup-command-log.txt
?? .tmp-sfia-review/pr-297-cleanup-final-state.txt
?? .tmp-sfia-review/pr-297-cleanup-findings.md
?? .tmp-sfia-review/pr-297-cleanup-git-truth-initial.txt
?? .tmp-sfia-review/pr-297-cleanup-handoff-ahead-note.txt
?? .tmp-sfia-review/pr-297-cleanup-local-branches-after-source-cleanup.txt
?? .tmp-sfia-review/pr-297-cleanup-local-branches-before.txt
?? .tmp-sfia-review/pr-297-cleanup-local-branches-final.txt
?? .tmp-sfia-review/pr-297-cleanup-pr.json
?? .tmp-sfia-review/pr-297-cleanup-readiness.md
?? .tmp-sfia-review/pr-297-cleanup-remote-heads-after-source-cleanup.txt
?? .tmp-sfia-review/pr-297-cleanup-remote-heads-before.txt
?? .tmp-sfia-review/pr-297-cleanup-remote-heads-final.txt
?? .tmp-sfia-review/pr-297-cleanup-state-before-handoff.txt
?? .tmp-sfia-review/pr-297-cleanup-tmp-evidence-before.json
?? .tmp-sfia-review/pr-297-cleanup-tmp-evidence-verification.md
?? .tmp-sfia-review/pr-297-cleanup-worktrees-after-source-cleanup.txt
?? .tmp-sfia-review/pr-297-cleanup-worktrees-before.txt
?? .tmp-sfia-review/pr-297-cleanup-worktrees-final.txt
?? .tmp-sfia-review/pr-297-document-05.md
?? .tmp-sfia-review/pr-297-final-findings.md
?? .tmp-sfia-review/pr-297-main-proof.txt
?? .tmp-sfia-review/pr-297-merge-commit-proof.txt
?? .tmp-sfia-review/pr-297-merge-decision-pack.md
?? .tmp-sfia-review/pr-297-merge-readiness-body.md
?? .tmp-sfia-review/pr-297-merge-readiness-findings.md
?? .tmp-sfia-review/pr-297-merge-readiness.diff
?? .tmp-sfia-review/pr-297-merge-readiness.json
?? .tmp-sfia-review/pr-297-pm-inline-comments.json
?? .tmp-sfia-review/pr-297-pm-issue-comments.json
?? .tmp-sfia-review/pr-297-pm-reviews.json
?? .tmp-sfia-review/pr-297-post-merge-body.md
?? .tmp-sfia-review/pr-297-post-merge-ci-initial.json
?? .tmp-sfia-review/pr-297-post-merge-ci-list.json
?? .tmp-sfia-review/pr-297-post-merge-ci-status.txt
?? .tmp-sfia-review/pr-297-post-merge-ci-view.txt
?? .tmp-sfia-review/pr-297-post-merge-ci.json
?? .tmp-sfia-review/pr-297-post-merge-commit-proof.txt
?? .tmp-sfia-review/pr-297-post-merge-doc-proof.txt
?? .tmp-sfia-review/pr-297-post-merge-findings.md
?? .tmp-sfia-review/pr-297-post-merge-pr.json
?? .tmp-sfia-review/pr-297-post-merge-validation-chatgpt-review-preserved.md
?? .tmp-sfia-review/pr-297-post-merge.json
?? .tmp-sfia-review/pr-297-postmerge-final-git.txt
?? .tmp-sfia-review/pr-297-postmerge-git-truth.txt
?? .tmp-sfia-review/pr-297-pre-merge-final.json
?? .tmp-sfia-review/pr-297-pre-merge.json
?? .tmp-sfia-review/pr-297-pre-ready.json
?? .tmp-sfia-review/pr-297-premerge-ci-ref.json
?? .tmp-sfia-review/pr-297-ready-f02-body-diff.patch
?? .tmp-sfia-review/pr-297-ready-findings.md
?? .tmp-sfia-review/pr-297-source-one-file.diff
?? .tmp-sfia-review/pr-297-worktree-inventory.txt
?? .tmp-sfia-review/pr-297-worktree-paths.txt
?? .tmp-sfia-review/pr-297-worktree-statuses.txt
?? .tmp-sfia-review/pr-297-worktree-summary.json
?? .tmp-sfia-review/pr-body-v2-a3.md
?? .tmp-sfia-review/pr-body.md
?? .tmp-sfia-review/pr-checks.txt
?? .tmp-sfia-review/pr-readiness-truth.txt
?? .tmp-sfia-review/primary-truth.txt
?? .tmp-sfia-review/pub-truth.txt
?? .tmp-sfia-review/ready-final-git.txt
?? .tmp-sfia-review/ready-truth.txt
?? .tmp-sfia-review/remote-review-commit.txt
?? .tmp-sfia-review/remote-review-truth.txt
?? .tmp-sfia-review/review-timestamp-cleanup.txt
?? .tmp-sfia-review/review-timestamp-d2-fa.txt
?? .tmp-sfia-review/review-timestamp-d2-fd.txt
?? .tmp-sfia-review/review-timestamp-d2.txt
?? .tmp-sfia-review/review-timestamp.txt
?? .tmp-sfia-review/source-inspection.txt
?? .tmp-sfia-review/v3-1-d1-cap-source-commit.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-body-delta.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-ci-initial.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-cleanup-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-commit-proof.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-merge-readiness-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-merge-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-package-manifest.md
?? .tmp-sfia-review/v3-1-d1-capitalization-package.diff
?? .tmp-sfia-review/v3-1-d1-capitalization-post-merge-validation-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-proof.json
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-readiness-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-publication-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-publication-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-ready-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-ci-checks.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-ci.json
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-diff.patch
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-findings.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-pr.json
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-proof.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-review-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-rex-report.md
?? .tmp-sfia-review/v3-1-d1-pr-body.md
?? .tmp-sfia-review/v3-1-d2-08-after.md
?? .tmp-sfia-review/v3-1-d2-08.diff
?? .tmp-sfia-review/v3-1-d2-a-delivery-report.md
?? .tmp-sfia-review/v3-1-d2-a-post-branch-doc-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-post-branch-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-pre-branch-doc-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-pre-branch-hashes.txt
?? .tmp-sfia-review/v3-1-d2-backlog-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-backlog-final-state.txt
?? .tmp-sfia-review/v3-1-d2-backlog-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-backlog-pre-mutation-hashes.txt
?? .tmp-sfia-review/v3-1-d2-backlog-report.md
?? .tmp-sfia-review/v3-1-d2-backlog-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-bl-doc18-modified-sections.md
?? .tmp-sfia-review/v3-1-d2-decision-pack.md
?? .tmp-sfia-review/v3-1-d2-doc15-frozen-bl.md
?? .tmp-sfia-review/v3-1-d2-doc15-frozen-ta.md
?? .tmp-sfia-review/v3-1-d2-doc15-frozen.md
?? .tmp-sfia-review/v3-1-d2-doc16-frozen-bl.md
?? .tmp-sfia-review/v3-1-d2-doc16-frozen-ta.md
?? .tmp-sfia-review/v3-1-d2-doc17-frozen-bl.md
?? .tmp-sfia-review/v3-1-d2-document-15-after.md
?? .tmp-sfia-review/v3-1-d2-document-15.md
?? .tmp-sfia-review/v3-1-d2-document-16.md
?? .tmp-sfia-review/v3-1-d2-fa-doc16-modified-sections.md
?? .tmp-sfia-review/v3-1-d2-fa-pre-mutation-hashes.txt
?? .tmp-sfia-review/v3-1-d2-final-state.txt
?? .tmp-sfia-review/v3-1-d2-framing-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-framing-report.md
?? .tmp-sfia-review/v3-1-d2-functional-architecture-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-functional-architecture-final-state.txt
?? .tmp-sfia-review/v3-1-d2-functional-architecture-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-functional-architecture-phrase-scan.txt
?? .tmp-sfia-review/v3-1-d2-functional-architecture-report.md
?? .tmp-sfia-review/v3-1-d2-functional-architecture-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-functional-design-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-functional-design-final-state.txt
?? .tmp-sfia-review/v3-1-d2-functional-design-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-functional-design-report.md
?? .tmp-sfia-review/v3-1-d2-functional-design-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-readme-after.md
?? .tmp-sfia-review/v3-1-d2-readme.diff
?? .tmp-sfia-review/v3-1-d2-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-ta-doc17-modified-sections.md
?? .tmp-sfia-review/v3-1-d2-ta-phrase-scan.txt
?? .tmp-sfia-review/v3-1-d2-ta-pre-mutation-hashes.txt
?? .tmp-sfia-review/v3-1-d2-technical-architecture-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-technical-architecture-final-state.txt
?? .tmp-sfia-review/v3-1-d2-technical-architecture-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-technical-architecture-report.md
?? .tmp-sfia-review/v3-1-d2-technical-architecture-source-inventory.md
?? .tmp-sfia-review/worktree-after.txt
?? .tmp-sfia-review/worktree-before.txt
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
```

Branche et HEAD :

```text
delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
e1befcb80ed5e3c789a7de9036a8207d6b3e6771
```

Staged vide ; branche distante Delivery absente ; aucun commit/push/PR projet.

## 31. Gate suivant candidat

```text
GO QA VALIDATION SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
VERIFY CONTRACTS, FINGERPRINT DETERMINISM, FAIL-CLOSED CATALOG PROJECTION, IMPORT BOUNDARIES AND NON-REGRESSION —
NO CORRECTIVE IMPLEMENTATION UNLESS DISTINCT MORRIS GO —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

Non exécuté automatiquement.

## 32. Verdict

`V3.1-D2-A CATALOG PROJECTION DELIVERY COMPLETE — BL-D2-A-01…04 IMPLEMENTED —
READY FOR INDEPENDENT QA — NOT PR READY — D2-B/C CLOSED — D3 NOT OPENED`.


## Contenu complet des fichiers créés

### Production

### `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts`

```typescript
import type {
  CycleTypeCkcMapping,
  CycleTypeLifecycleStatus,
} from "./cycleTypeCatalog";

/** Read-only context required to select a cycle type from the D1 catalog. */
export type CatalogSelectionContext = {
  readonly cycleTypeId: string;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
};

/** Closed projection of contractually relevant catalog fields for HASH-A. */
export type CatalogFingerprintEntry = {
  readonly cycleTypeId: string;
  readonly canonicalKey: string;
  readonly lifecycleStatus: CycleTypeLifecycleStatus;
  readonly methodCycleNumber: number;
  readonly ckc: {
    readonly mandatory: true;
    readonly primaryLevel: "detailed" | "synthetic";
    readonly primaryReference: string;
    readonly fallbackPolicy: "synthetic_map" | "none";
    readonly fallbackReference: string | null;
    readonly executionAuthority: false;
    readonly doctrineStatus: "method-candidate";
    readonly unavailableBehavior: "fail-closed";
  };
};

/** Validated read-only D1 projection passed to the later D2-B boundary. */
export type ValidatedCycleTypeProjection = {
  readonly cycleTypeId: string;
  readonly label: string;
  readonly shortDescription: string;
  readonly lifecycleStatus: CycleTypeLifecycleStatus;
  readonly ckc: Readonly<CycleTypeCkcMapping>;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
};

export type CatalogProjectionErrorCode =
  | "CATALOG_CORRELATION_ID_REQUIRED"
  | "CATALOG_VERSION_INCOMPATIBLE"
  | "CATALOG_FINGERPRINT_STALE"
  | "CYCLE_TYPE_UNKNOWN"
  | "CYCLE_TYPE_NOT_SELECTABLE"
  | "CYCLE_TYPE_MAPPING_INVALID";

export type CatalogProjectionError = {
  readonly code: CatalogProjectionErrorCode;
  readonly message: string;
  readonly blocking: true;
  readonly retryable: boolean;
  readonly recoverable: boolean;
  readonly correlationId?: string;
  readonly cycleTypeId?: string;
  readonly lifecycleStatus?: CycleTypeLifecycleStatus;
};

export type CatalogProjectionSuccess = {
  readonly ok: true;
  readonly projection: ValidatedCycleTypeProjection;
};

export type CatalogProjectionFailure = {
  readonly ok: false;
  readonly error: CatalogProjectionError;
};

export type CatalogProjectionResult =
  | CatalogProjectionSuccess
  | CatalogProjectionFailure;
```

### `projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts`

```typescript
import {
  CYCLE_TYPE_CATALOG,
  type CycleTypeCatalog,
} from "./cycleTypeCatalog";
import type { CatalogFingerprintEntry } from "./ckcQualificationContracts";

/** HASH-A representation format. Cryptographic verification is test-only. */
export const CYCLE_TYPE_CATALOG_FINGERPRINT_FORMAT =
  "sha256-canonical-json-v1" as const;

/**
 * Static, versioned HASH-A fingerprint of the canonical D1 contract projection.
 * It is guarded by a Node-only SHA-256 test; no runtime hashing is required.
 */
export const CYCLE_TYPE_CATALOG_FINGERPRINT =
  "sha256:27316864454634a45342baaa1782898bea12914a4ec9cd9b051622eef9efd2cc" as const;

/** Build the closed, ordered projection used by the catalog fingerprint. */
export function projectCatalogFingerprint(
  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
): readonly CatalogFingerprintEntry[] {
  return Object.freeze(
    catalog.entries.map((entry) =>
      Object.freeze({
        cycleTypeId: entry.cycleTypeId,
        canonicalKey: entry.canonicalKey,
        lifecycleStatus: entry.lifecycleStatus,
        methodCycleNumber: entry.methodCycleNumber,
        ckc: Object.freeze({
          mandatory: entry.ckc.mandatory,
          primaryLevel: entry.ckc.primaryLevel,
          primaryReference: entry.ckc.primaryReference,
          fallbackPolicy: entry.ckc.fallbackPolicy,
          fallbackReference: entry.ckc.fallbackReference ?? null,
          executionAuthority: entry.ckc.executionAuthority,
          doctrineStatus: entry.ckc.doctrineStatus,
          unavailableBehavior: entry.ckc.unavailableBehavior,
        }),
      }),
    ),
  );
}

/** Deterministic serialization of the canonical, fixed-property projection. */
export function serializeCatalogFingerprint(
  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
): string {
  return JSON.stringify(projectCatalogFingerprint(catalog));
}
```

### `projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts`

```typescript
import {
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_VERSION,
  type CycleTypeCatalog,
  type CycleTypeCkcMapping,
  type CycleTypeDefinition,
} from "./cycleTypeCatalog";
import { CYCLE_TYPE_CATALOG_FINGERPRINT } from "./catalogFingerprint";
import type {
  CatalogProjectionError,
  CatalogProjectionErrorCode,
  CatalogProjectionResult,
  CatalogSelectionContext,
} from "./ckcQualificationContracts";

const SAFE_MESSAGES: Readonly<Record<CatalogProjectionErrorCode, string>> =
  Object.freeze({
    CATALOG_CORRELATION_ID_REQUIRED: "A correlation identifier is required.",
    CATALOG_VERSION_INCOMPATIBLE: "The catalog version is incompatible.",
    CATALOG_FINGERPRINT_STALE: "The catalog fingerprint is stale.",
    CYCLE_TYPE_UNKNOWN: "The cycle type is unknown.",
    CYCLE_TYPE_NOT_SELECTABLE: "The cycle type is not selectable.",
    CYCLE_TYPE_MAPPING_INVALID: "The cycle type mapping is invalid.",
  });

const ALLOWED_MAPPING_KEYS = new Set([
  "mandatory",
  "primaryLevel",
  "primaryReference",
  "fallbackPolicy",
  "fallbackReference",
  "executionAuthority",
  "doctrineStatus",
  "unavailableBehavior",
]);

function failure(
  code: CatalogProjectionErrorCode,
  context: CatalogSelectionContext,
  options: {
    readonly lifecycleStatus?: CycleTypeDefinition["lifecycleStatus"];
    readonly retryable?: boolean;
    readonly recoverable?: boolean;
  } = {},
): CatalogProjectionResult {
  const error: CatalogProjectionError = Object.freeze({
    code,
    message: SAFE_MESSAGES[code],
    blocking: true,
    retryable: options.retryable ?? false,
    recoverable: options.recoverable ?? true,
    ...(context.correlationId.trim()
      ? { correlationId: context.correlationId }
      : {}),
    ...(context.cycleTypeId ? { cycleTypeId: context.cycleTypeId } : {}),
    ...(options.lifecycleStatus
      ? { lifecycleStatus: options.lifecycleStatus }
      : {}),
  });
  return Object.freeze({ ok: false, error });
}

function hasValidMapping(mapping: CycleTypeCkcMapping): boolean {
  if (
    Object.keys(mapping).some((key) => !ALLOWED_MAPPING_KEYS.has(key)) ||
    mapping.mandatory !== true ||
    !mapping.primaryReference.trim() ||
    mapping.executionAuthority !== false ||
    mapping.doctrineStatus !== "method-candidate" ||
    mapping.unavailableBehavior !== "fail-closed"
  ) {
    return false;
  }

  if (mapping.primaryLevel === "detailed") {
    return (
      mapping.fallbackPolicy === "synthetic_map" &&
      mapping.fallbackReference === CKC_SYNTHETIC_MAP_PATH
    );
  }

  if (mapping.primaryLevel === "synthetic") {
    return (
      mapping.primaryReference === CKC_SYNTHETIC_MAP_PATH &&
      mapping.fallbackPolicy === "none" &&
      mapping.fallbackReference === undefined
    );
  }

  return false;
}

function freezeMapping(
  mapping: CycleTypeCkcMapping,
): Readonly<CycleTypeCkcMapping> {
  return Object.freeze({
    mandatory: mapping.mandatory,
    primaryLevel: mapping.primaryLevel,
    primaryReference: mapping.primaryReference,
    fallbackPolicy: mapping.fallbackPolicy,
    ...(mapping.fallbackReference
      ? { fallbackReference: mapping.fallbackReference }
      : {}),
    executionAuthority: mapping.executionAuthority,
    doctrineStatus: mapping.doctrineStatus,
    unavailableBehavior: mapping.unavailableBehavior,
  });
}

/**
 * Pure, fail-closed D2-A selection from the authoritative D1 catalog.
 * The optional catalog is a pure test seam; production callers use the singleton.
 */
export function projectSelectableCycleType(
  context: CatalogSelectionContext,
  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
): CatalogProjectionResult {
  if (!context.correlationId.trim()) {
    return failure("CATALOG_CORRELATION_ID_REQUIRED", context);
  }
  if (context.catalogVersion !== CYCLE_TYPE_CATALOG_VERSION) {
    return failure("CATALOG_VERSION_INCOMPATIBLE", context, {
      retryable: true,
    });
  }
  if (context.catalogHash !== CYCLE_TYPE_CATALOG_FINGERPRINT) {
    return failure("CATALOG_FINGERPRINT_STALE", context, {
      retryable: true,
    });
  }

  const entry = catalog.entries.find(
    (candidate) => candidate.cycleTypeId === context.cycleTypeId,
  );
  if (!entry) {
    return failure("CYCLE_TYPE_UNKNOWN", context);
  }
  if (entry.lifecycleStatus !== "active") {
    return failure("CYCLE_TYPE_NOT_SELECTABLE", context, {
      lifecycleStatus: entry.lifecycleStatus,
    });
  }
  if (!entry.ckc || !hasValidMapping(entry.ckc)) {
    return failure("CYCLE_TYPE_MAPPING_INVALID", context, {
      lifecycleStatus: entry.lifecycleStatus,
      recoverable: false,
    });
  }

  return Object.freeze({
    ok: true,
    projection: Object.freeze({
      cycleTypeId: entry.cycleTypeId,
      label: entry.label,
      shortDescription: entry.shortDescription,
      lifecycleStatus: entry.lifecycleStatus,
      ckc: freezeMapping(entry.ckc),
      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
      catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
      correlationId: context.correlationId,
    }),
  });
}
```

### Tests

### `projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts`

```typescript
/**
 * V3.1-D2-A — canonical catalog fingerprint tests.
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  projectCatalogFingerprint,
  serializeCatalogFingerprint,
  type CycleTypeCatalog,
  type CycleTypeDefinition,
} from "@/lib/oa/cycle";

function cloneCatalog(
  mutate?: (entries: CycleTypeDefinition[]) => void,
): CycleTypeCatalog {
  const entries = CYCLE_TYPE_CATALOG.entries.map((entry) => ({
    ...entry,
    ckc: { ...entry.ckc },
    aliases: [...entry.aliases],
  }));
  mutate?.(entries);
  return { version: CYCLE_TYPE_CATALOG.version, entries };
}

function sha256(serialized: string): string {
  return `sha256:${createHash("sha256").update(serialized).digest("hex")}`;
}

describe("V3.1-D2-A catalog fingerprint", () => {
  it("projects exactly fifteen entries in contractual order", () => {
    const projection = projectCatalogFingerprint();
    expect(projection).toHaveLength(15);
    expect(projection.map((entry) => entry.cycleTypeId)).toEqual(
      CYCLE_TYPE_CATALOG.entries.map((entry) => entry.cycleTypeId),
    );
  });

  it("includes only the closed contractual field set", () => {
    for (const entry of projectCatalogFingerprint()) {
      expect(Object.keys(entry)).toEqual([
        "cycleTypeId",
        "canonicalKey",
        "lifecycleStatus",
        "methodCycleNumber",
        "ckc",
      ]);
      expect(Object.keys(entry.ckc)).toEqual([
        "mandatory",
        "primaryLevel",
        "primaryReference",
        "fallbackPolicy",
        "fallbackReference",
        "executionAuthority",
        "doctrineStatus",
        "unavailableBehavior",
      ]);
      expect(entry).not.toHaveProperty("label");
      expect(entry).not.toHaveProperty("shortDescription");
      expect(entry).not.toHaveProperty("displayOrder");
      expect(entry).not.toHaveProperty("methodReference");
      expect(entry).not.toHaveProperty("aliases");
    }
  });

  it("serializes deterministically and matches the static SHA-256", () => {
    const first = serializeCatalogFingerprint();
    const second = serializeCatalogFingerprint();
    expect(second).toBe(first);
    expect(sha256(first)).toBe(CYCLE_TYPE_CATALOG_FINGERPRINT);
    expect(CYCLE_TYPE_CATALOG_FINGERPRINT).toMatch(/^sha256:[0-9a-f]{64}$/);
  });

  it("detects a contractual field change", () => {
    const changed = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        canonicalKey: `${entries[0].canonicalKey}-changed`,
      };
    });
    expect(sha256(serializeCatalogFingerprint(changed))).not.toBe(
      CYCLE_TYPE_CATALOG_FINGERPRINT,
    );
  });

  it("ignores label and shortDescription changes", () => {
    const changed = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        label: "Changed presentation",
        shortDescription: "Changed description",
      };
    });
    expect(serializeCatalogFingerprint(changed)).toBe(
      serializeCatalogFingerprint(),
    );
  });

  it("normalizes absent fallbackReference to explicit null", () => {
    const synthetic = projectCatalogFingerprint().find(
      (entry) => entry.ckc.primaryLevel === "synthetic",
    );
    expect(synthetic?.ckc.fallbackReference).toBeNull();
    expect(serializeCatalogFingerprint()).toContain(
      '"fallbackReference":null',
    );
  });

  it("returns frozen projections without mutating the D1 catalog", () => {
    const before = serializeCatalogFingerprint();
    const projection = projectCatalogFingerprint();
    expect(Object.isFrozen(projection)).toBe(true);
    expect(projection.every(Object.isFrozen)).toBe(true);
    expect(projection.every((entry) => Object.isFrozen(entry.ckc))).toBe(true);
    expect(serializeCatalogFingerprint()).toBe(before);
  });

  it("keeps production fingerprint code client-safe and dependency-free", () => {
    const source = readFileSync(
      path.resolve(
        __dirname,
        "../../../lib/oa/cycle/domain/catalogFingerprint.ts",
      ),
      "utf8",
    );
    expect(source).not.toMatch(/node:crypto|node:fs|from ["']next/);
    expect(source).not.toMatch(/infrastructure\//);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts`

```typescript
/**
 * V3.1-D2-A — pure fail-closed catalog projection tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  projectSelectableCycleType,
  serializeCatalogFingerprint,
  type CatalogProjectionErrorCode,
  type CatalogSelectionContext,
  type CycleTypeCatalog,
  type CycleTypeDefinition,
} from "@/lib/oa/cycle";

function context(
  overrides: Partial<CatalogSelectionContext> = {},
): CatalogSelectionContext {
  return {
    cycleTypeId: "cyc:delivery",
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: "cor:d2-a-test",
    ...overrides,
  };
}

function cloneCatalog(
  mutate: (entries: CycleTypeDefinition[]) => void,
): CycleTypeCatalog {
  const entries = CYCLE_TYPE_CATALOG.entries.map((entry) => ({
    ...entry,
    ckc: { ...entry.ckc },
    aliases: [...entry.aliases],
  }));
  mutate(entries);
  return { version: CYCLE_TYPE_CATALOG_VERSION, entries };
}

function expectFailure(
  result: ReturnType<typeof projectSelectableCycleType>,
  code: CatalogProjectionErrorCode,
): void {
  expect(result.ok).toBe(false);
  if (result.ok) throw new Error("Expected catalog projection failure");
  expect(result.error.code).toBe(code);
  expect(result.error.blocking).toBe(true);
  expect(result).not.toHaveProperty("projection");
  expect(result.error).not.toHaveProperty("projection");
  expect(result.error).not.toHaveProperty("ckc");
}

describe("V3.1-D2-A catalog projection", () => {
  it("projects an active type and preserves canonical context", () => {
    const result = projectSelectableCycleType(context());
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.projection).toMatchObject({
      cycleTypeId: "cyc:delivery",
      label: "Delivery / implémentation",
      lifecycleStatus: "active",
      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
      catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
      correlationId: "cor:d2-a-test",
    });
    expect(result.projection.ckc).toMatchObject({
      mandatory: true,
      primaryLevel: "synthetic",
      primaryReference: CKC_SYNTHETIC_MAP_PATH,
      fallbackPolicy: "none",
      executionAuthority: false,
      doctrineStatus: "method-candidate",
      unavailableBehavior: "fail-closed",
    });
    expect(Object.isFrozen(result.projection)).toBe(true);
    expect(Object.isFrozen(result.projection.ckc)).toBe(true);
  });

  it("rejects an absent correlationId first", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          correlationId: "  ",
          catalogVersion: "wrong",
          catalogHash: "wrong",
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_CORRELATION_ID_REQUIRED",
    );
  });

  it("rejects an incompatible catalog version", () => {
    expectFailure(
      projectSelectableCycleType(context({ catalogVersion: "stale" })),
      "CATALOG_VERSION_INCOMPATIBLE",
    );
  });

  it("rejects a stale catalog fingerprint", () => {
    expectFailure(
      projectSelectableCycleType(
        context({ catalogHash: `sha256:${"0".repeat(64)}` }),
      ),
      "CATALOG_FINGERPRINT_STALE",
    );
  });

  it("rejects an unknown cycle type", () => {
    expectFailure(
      projectSelectableCycleType(context({ cycleTypeId: "cyc:unknown" })),
      "CYCLE_TYPE_UNKNOWN",
    );
  });

  it.each(["deprecated", "unavailable"] as const)(
    "rejects lifecycle %s",
    (lifecycleStatus) => {
      const catalog = cloneCatalog((entries) => {
        entries[7] = { ...entries[7], lifecycleStatus };
      });
      const result = projectSelectableCycleType(context(), catalog);
      expectFailure(result, "CYCLE_TYPE_NOT_SELECTABLE");
      if (!result.ok) {
        expect(result.error.lifecycleStatus).toBe(lifecycleStatus);
      }
    },
  );

  it("fails closed for an unknown runtime lifecycle status", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        lifecycleStatus:
          "future-status" as CycleTypeDefinition["lifecycleStatus"],
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_NOT_SELECTABLE",
    );
  });

  it("rejects mandatory false", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          mandatory: false as unknown as true,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects executionAuthority true", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          executionAuthority: true as unknown as false,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects invalid doctrineStatus and unavailableBehavior", () => {
    for (const field of ["doctrineStatus", "unavailableBehavior"] as const) {
      const catalog = cloneCatalog((entries) => {
        entries[7] = {
          ...entries[7],
          ckc: { ...entries[7].ckc, [field]: "invalid" },
        } as CycleTypeDefinition;
      });
      expectFailure(
        projectSelectableCycleType(context(), catalog),
        "CYCLE_TYPE_MAPPING_INVALID",
      );
    }
  });

  it("rejects a detailed mapping without canonical fallback", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: {
          ...entries[0].ckc,
          fallbackPolicy: "none",
          fallbackReference: undefined,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(
        context({ cycleTypeId: "cyc:framing" }),
        catalog,
      ),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects a synthetic mapping with a non-canonical reference", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          primaryReference: "method/non-canonical.md",
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects an extended mapping", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          dynamicResolution: true,
        } as CycleTypeDefinition["ckc"],
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("does not expose profile, Morris decision, or partial failure data", () => {
    const success = projectSelectableCycleType(context());
    expect(success.ok).toBe(true);
    if (!success.ok) throw new Error(success.error.message);
    expect(success.projection).not.toHaveProperty("profile");
    expect(success.projection).not.toHaveProperty("recommendedProfile");
    expect(success.projection).not.toHaveProperty("isMorrisDecision");
    expect(success.projection).not.toHaveProperty("consumed");

    const failure = projectSelectableCycleType(
      context({ cycleTypeId: "cyc:unknown" }),
    );
    expectFailure(failure, "CYCLE_TYPE_UNKNOWN");
  });

  it("does not mutate the production catalog", () => {
    const before = serializeCatalogFingerprint();
    const firstEntry = CYCLE_TYPE_CATALOG.entries[0];
    projectSelectableCycleType(context());
    expect(serializeCatalogFingerprint()).toBe(before);
    expect(CYCLE_TYPE_CATALOG.entries[0]).toBe(firstEntry);
    expect(Object.isFrozen(CYCLE_TYPE_CATALOG.entries[0])).toBe(true);
  });
});
```

### README Delivery

# V3.1-D2-A — Catalog Projection

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-08-02 03:26 CEST (+0200) |
| Cycle | 8 — Delivery / implémentation |
| Profil | Standard |
| Typologie | EVOL |
| Branche locale | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
| Base / HEAD | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| Statut | `D2-A DELIVERY COMPLETE LOCALLY — READY FOR QA — NOT PR READY` |

Le profil Standard est proportionné à un diff de fonctions de domaine pures,
types readonly, constante statique et tests, sans resolver, infrastructure,
mutation, UI, dépendance ni changement d'architecture.

## B. Gate Morris

Gate consommé le 2026-08-02 à 03:16 CEST :

```text
GO DELIVERY SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
USE VALIDATED BACKLOG AND ADOPTED TA-01…12 —
IMPLEMENT CONTRACTS, CATALOG FINGERPRINT AND PURE CATALOG PROJECTION —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

## C. Sources

Template d'exécution SFIA, routing guide, operating model, guardrails,
validation checklist, engineering principles, delivery pipeline, carte CKC,
matrice CKC, méthode cycle §4.8, documents D2 `15` à `19`, backlog `08`,
README framing, contrat catalogue D1, types/erreurs/invariants/index T-A2,
tests cycle OA, README D1 et configurations TypeScript/Vitest/Next.

CKC : contrat détaillé absent ; fallback carte synthétique + méthode §4.8,
statut `method-candidate`, guidance cognitive expérimentale,
`executionAuthority=false`.

## D. Git Truth et transition de branche

- branche initiale : `framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage` ;
- `HEAD = main = origin/main = e1befcb8…` ; divergence `0/0` ;
- staged vide ; état documentaire attendu uniquement ;
- 77 worktrees ; prune dry-run vide ;
- branche Delivery locale et distante absentes ;
- handoff source : tip `dbb4e80…`, blob `85596ce…` ;
- branche créée localement, sans commit ni push ;
- empreintes SHA-256 de `15` à `19`, `08` et README identiques avant/après.

## E. Stories consommées

- BL-D2-A-01 — contrats dédiés et projection contractuelle ;
- BL-D2-A-02 — fingerprint statique et garde SHA-256 ;
- BL-D2-A-03 — projection pure et fail-closed ;
- BL-D2-A-04 — tests et non-régression.

## F. Décisions TA consommées

TA-01, TA-02, TA-03, TA-06 et la partie locale de TA-09 sont implémentées.
TA-04/05/07 appartiennent à D2-B ; TA-08/11 à D2-C ; TA-10 à D2-B/C.
TA-12 est respectée : D2-B et D2-C restent fermés.

## G. Périmètre

Contrats D2-A, projection fermée du catalogue, sérialisation canonique,
HASH-A statique, contrôle SHA-256 test-only, projection de sélection pure,
erreurs locales, exports additifs, tests et documentation.

## H. Hors périmètre

Resolver, manifest CKC, preuve de consommation, bridge QualifyCycle,
résultat global D2, audit, factory, infrastructure, CreateCycle, mutation,
UI, API, D2-B, D2-C, D2-D et D3.

## I. Contrats D2-A

`CatalogSelectionContext` conserve `cycleTypeId`, `catalogVersion`,
`catalogHash`, `correlationId`. `CatalogFingerprintEntry` ferme exactement
les champs identitaires, lifecycle, numéro de méthode et mapping CKC.
`ValidatedCycleTypeProjection` expose présentation D1, lifecycle, mapping CKC,
version, hash et corrélation, sans profil, décision ni consommation.

## J. Projection contractuelle du fingerprint

La projection conserve l'ordre contractuel des quinze entrées et un ordre fixe
des propriétés. `fallbackReference` absent est normalisé en `null`.
Labels, descriptions, displayOrder, methodReference et aliases sont exclus.

## K. HASH-A et mécanisme de garde

- format : `sha256-canonical-json-v1` ;
- valeur : `sha256:27316864454634a45342baaa1782898bea12914a4ec9cd9b051622eef9efd2cc` ;
- production : sérialisation JSON déterministe uniquement ;
- test : `createHash("sha256")` depuis `node:crypto`, jamais importé en production ;
- aucun artefact généré, script permanent, package ou changement CI.

## L. Catalog Projection

`projectSelectableCycleType` applique dans l'ordre : corrélation, version,
fingerprint, existence, lifecycle active, puis cohérence du mapping CKC.
Elle accepte un seam de catalogue pur pour les tests négatifs et utilise le
singleton D1 par défaut. Le résultat de succès et le mapping sont gelés.

## M. Erreurs locales

Erreurs structurées, bloquantes et sans projection partielle :
`CATALOG_CORRELATION_ID_REQUIRED`, `CATALOG_VERSION_INCOMPATIBLE`,
`CATALOG_FINGERPRINT_STALE`, `CYCLE_TYPE_UNKNOWN`,
`CYCLE_TYPE_NOT_SELECTABLE`, `CYCLE_TYPE_MAPPING_INVALID`.
`CycleDetailCode` et `CycleStructuredError` restent inchangés.

## N. Fichiers

Créés : trois modules de domaine, deux suites de tests et ce rapport.
Modifiés : barrel `index.ts` par trois exports uniquement, documents framing
`19`, `08` et `README`. Aucun autre fichier projet.

## O. Tests

Baseline avant modification : catalogue D1 **46/46 PASS** ; cycle OA
**94/94 PASS**. D2-A ciblé : fingerprint **8/8 PASS** ; projection
**16/16 PASS**.

## P. Résultats complets

- fingerprint D2-A : **8/8 PASS** ;
- Catalog Projection D2-A : **16/16 PASS** ;
- catalogue D1 historique : **46/46 PASS** ;
- suite `oa/cycle` : **118/118 PASS** ;
- suite complète : **851/851 PASS** ;
- typecheck : **PASS** ;
- lint : **PASS**, aucun warning ni erreur ;
- build Next : **PASS**, compilation et 10 pages statiques ;
- frontières d'import : **PASS**.

Le détail reproductible est conservé dans le review pack et le rapport
temporaire du cycle.

## Q. Diff et volumétrie

Diff borné aux fichiers autorisés. Les documents `12` à `18`, les documents
D1, les dépendances, configurations et modules T-A2 protégés sont inchangés.

## R. Anti-claims

Delivery locale ≠ QA indépendante ; tests verts ≠ PR ready ; mapping CKC ≠
résolution ; fingerprint ≠ preuve de consommation ; projection ≠ bridge
QualifyCycle. Aucun commit/push/PR projet, aucune promotion méthode.

## S. Risques et réserves

Le fingerprint doit être mis à jour explicitement si un champ contractuel D1
change ; le test empêche une dérive silencieuse. `INHERITED-R-01` reste
acceptée, traçable et non levée. D2-B dépend d'une intégration/validation
ultérieure de D2-A et d'un gate Morris distinct.

## T. Readiness QA

La Delivery D2-A est complète localement et prête pour une QA indépendante.
La QA n'est pas exécutée par ce cycle et la PR readiness n'est pas ouverte.

## U. Verdict

```text
V3.1-D2-A CATALOG PROJECTION DELIVERY COMPLETE —
BL-D2-A-01…04 IMPLEMENTED —
STATIC HASH-A AND TEST-ONLY SHA-256 GUARD IMPLEMENTED —
PURE FAIL-CLOSED CATALOG PROJECTION IMPLEMENTED —
D1 PRESERVED —
READY FOR INDEPENDENT QA —
NOT PR READY —
NO D2-B — NO D2-C — NO D2-D — NO D3 —
NO PROJECT COMMIT — NO PROJECT PUSH — NO PR
```


## État Git final et verdict

```text
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? .tmp-sfia-review/MERGE_SHA.txt
?? .tmp-sfia-review/_gen_d2a_reports.py
?? .tmp-sfia-review/_gen_doc19.py
?? .tmp-sfia-review/archive-comparison.txt
?? .tmp-sfia-review/archive-source-sha256.txt
?? .tmp-sfia-review/archive-target-sha256.txt
?? .tmp-sfia-review/before-corrective/01-qa-validation-report.md
?? .tmp-sfia-review/before-corrective/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-corrective/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-corrective/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-corrective/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-corrective/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-corrective/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-corrective/d1-README.md
?? .tmp-sfia-review/before-corrective/framing-README.md
?? .tmp-sfia-review/before-corrective/index.ts
?? .tmp-sfia-review/before-d1/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-d1/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-d1/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-d1/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-d1/README.md
?? .tmp-sfia-review/before-pr-readiness/01-qa-validation-report.md
?? .tmp-sfia-review/before-pr-readiness/02-corrective-delivery-report.md
?? .tmp-sfia-review/before-pr-readiness/03-qa-revalidation-report.md
?? .tmp-sfia-review/before-pr-readiness/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-pr-readiness/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-pr-readiness/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-pr-readiness/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-pr-readiness/d1-README.md
?? .tmp-sfia-review/before-pr-readiness/framing-README.md
?? .tmp-sfia-review/before-pr-readiness/index.ts
?? .tmp-sfia-review/before-publication/01.md
?? .tmp-sfia-review/before-publication/02.md
?? .tmp-sfia-review/before-publication/03.md
?? .tmp-sfia-review/before-publication/04.md
?? .tmp-sfia-review/before-publication/08.md
?? .tmp-sfia-review/before-publication/12.md
?? .tmp-sfia-review/before-publication/13.md
?? .tmp-sfia-review/before-publication/14.md
?? .tmp-sfia-review/before-publication/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-publication/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-publication/d1-README.md
?? .tmp-sfia-review/before-publication/framing-README.md
?? .tmp-sfia-review/before-publication/index.ts
?? .tmp-sfia-review/before-qa/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-qa/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-qa/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-qa/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-qa/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-qa/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-qa/d1-README.md
?? .tmp-sfia-review/before-qa/framing-README.md
?? .tmp-sfia-review/before-qa/index.ts
?? .tmp-sfia-review/before-revalidation/01-qa-validation-report.md
?? .tmp-sfia-review/before-revalidation/02-corrective-delivery-report.md
?? .tmp-sfia-review/before-revalidation/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-revalidation/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-revalidation/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-revalidation/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-revalidation/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-revalidation/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-revalidation/d1-README.md
?? .tmp-sfia-review/before-revalidation/framing-README.md
?? .tmp-sfia-review/before-revalidation/index.ts
?? .tmp-sfia-review/before/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before/README.md
?? .tmp-sfia-review/cap-truth.txt
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/ci-jobs.json
?? .tmp-sfia-review/ci-run.json
?? .tmp-sfia-review/evidence/v2-a2/01-initial.png
?? .tmp-sfia-review/evidence/v2-a2/02-validation-errors.png
?? .tmp-sfia-review/evidence/v2-a2/03-success-real-runtime.png
?? .tmp-sfia-review/evidence/v2-a3/01-workspace-missing.png
?? .tmp-sfia-review/evidence/v2-a3/02-workspace-after-create-not-found.png
?? .tmp-sfia-review/evidence/v2-a3/03-create-form-filled.png
?? .tmp-sfia-review/evidence/v2-a3/04-create-success.png
?? .tmp-sfia-review/evidence/v2-a3/05-workspace-loaded.png
?? .tmp-sfia-review/final-git-state.txt
?? .tmp-sfia-review/framing-README-main.md
?? .tmp-sfia-review/framing-README-pr.md
?? .tmp-sfia-review/local-numstat.txt
?? .tmp-sfia-review/main-worktree-inspection.txt
?? .tmp-sfia-review/main-worktree-status.txt
?? .tmp-sfia-review/main-worktree-untracked-evidence.txt
?? .tmp-sfia-review/merge-commit-source.txt
?? .tmp-sfia-review/merge-readiness-truth.txt
?? .tmp-sfia-review/merge-revalidation.txt
?? .tmp-sfia-review/merge-truth.txt
?? .tmp-sfia-review/pr-296-after-api.json
?? .tmp-sfia-review/pr-296-after-body-metadata.json
?? .tmp-sfia-review/pr-296-after-merge.json
?? .tmp-sfia-review/pr-296-archive-and-cleanup-report.md
?? .tmp-sfia-review/pr-296-before-metadata.json
?? .tmp-sfia-review/pr-296-before-view.json
?? .tmp-sfia-review/pr-296-before.json
?? .tmp-sfia-review/pr-296-body-after.md
?? .tmp-sfia-review/pr-296-body-api-json.md
?? .tmp-sfia-review/pr-296-body-api-raw.md
?? .tmp-sfia-review/pr-296-body-authorized.diff
?? .tmp-sfia-review/pr-296-body-before-vs-remote-after.diff
?? .tmp-sfia-review/pr-296-body-before.md
?? .tmp-sfia-review/pr-296-body-concurrent-check.md
?? .tmp-sfia-review/pr-296-body-final.md
?? .tmp-sfia-review/pr-296-body-hashes.txt
?? .tmp-sfia-review/pr-296-body-remote-after.md
?? .tmp-sfia-review/pr-296-body-update-response.json
?? .tmp-sfia-review/pr-296-body-update.json
?? .tmp-sfia-review/pr-296-body.md
?? .tmp-sfia-review/pr-296-checks.json
?? .tmp-sfia-review/pr-296-checks.txt
?? .tmp-sfia-review/pr-296-comments.json
?? .tmp-sfia-review/pr-296-commits.txt
?? .tmp-sfia-review/pr-296-concurrent-meta.json
?? .tmp-sfia-review/pr-296-concurrent.json
?? .tmp-sfia-review/pr-296-diff-correspondence.txt
?? .tmp-sfia-review/pr-296-fetch-main-attempt.txt
?? .tmp-sfia-review/pr-296-files.txt
?? .tmp-sfia-review/pr-296-final-metadata.json
?? .tmp-sfia-review/pr-296-inline-comments-after.json
?? .tmp-sfia-review/pr-296-inline-comments-before.json
?? .tmp-sfia-review/pr-296-inline-comments-concurrent.json
?? .tmp-sfia-review/pr-296-issue-comments-after.json
?? .tmp-sfia-review/pr-296-issue-comments-before.json
?? .tmp-sfia-review/pr-296-issue-comments-concurrent.json
?? .tmp-sfia-review/pr-296-issue-comments.json
?? .tmp-sfia-review/pr-296-jobs.json
?? .tmp-sfia-review/pr-296-merge-body-after.md
?? .tmp-sfia-review/pr-296-merge-body-authorized.diff
?? .tmp-sfia-review/pr-296-merge-body-before.md
?? .tmp-sfia-review/pr-296-merge-body-concurrent.md
?? .tmp-sfia-review/pr-296-merge-body-final.md
?? .tmp-sfia-review/pr-296-merge-body-remote-after.md
?? .tmp-sfia-review/pr-296-merge-report.md
?? .tmp-sfia-review/pr-296-merge-response.json
?? .tmp-sfia-review/pr-296-metadata.json
?? .tmp-sfia-review/pr-296-pm-inline-comments.json
?? .tmp-sfia-review/pr-296-pm-issue-comments.json
?? .tmp-sfia-review/pr-296-pm-reviews.json
?? .tmp-sfia-review/pr-296-post-merge-cleanup-report.md
?? .tmp-sfia-review/pr-296-post-merge-runs.json
?? .tmp-sfia-review/pr-296-postmerge-body.md
?? .tmp-sfia-review/pr-296-postmerge-jobs.json
?? .tmp-sfia-review/pr-296-postmerge-pr.json
?? .tmp-sfia-review/pr-296-postmerge-run.json
?? .tmp-sfia-review/pr-296-pre-merge.json
?? .tmp-sfia-review/pr-296-pre-ready.json
?? .tmp-sfia-review/pr-296-ready-transition-report.md
?? .tmp-sfia-review/pr-296-remote-review-report.md
?? .tmp-sfia-review/pr-296-remote.diff
?? .tmp-sfia-review/pr-296-resume-inline-comments.json
?? .tmp-sfia-review/pr-296-resume-issue-comments.json
?? .tmp-sfia-review/pr-296-resume-pr.json
?? .tmp-sfia-review/pr-296-resume-reviews.json
?? .tmp-sfia-review/pr-296-resumed-post-merge-cleanup-report.md
?? .tmp-sfia-review/pr-296-reviews-after.json
?? .tmp-sfia-review/pr-296-reviews-before.json
?? .tmp-sfia-review/pr-296-reviews-concurrent.json
?? .tmp-sfia-review/pr-296-reviews.json
?? .tmp-sfia-review/pr-296-run.json
?? .tmp-sfia-review/pr-296-runs-after.json
?? .tmp-sfia-review/pr-296-switch-main-attempt.txt
?? .tmp-sfia-review/pr-296-view.json
?? .tmp-sfia-review/pr-297-after-ready.json
?? .tmp-sfia-review/pr-297-before-ready.json
?? .tmp-sfia-review/pr-297-body-after-ci-checkbox.md
?? .tmp-sfia-review/pr-297-body-after-merge-go.md
?? .tmp-sfia-review/pr-297-body-after-publish.md
?? .tmp-sfia-review/pr-297-body-before-merge.md
?? .tmp-sfia-review/pr-297-body-before-ready.md
?? .tmp-sfia-review/pr-297-body-checkbox-diff.patch
?? .tmp-sfia-review/pr-297-body-current.md
?? .tmp-sfia-review/pr-297-body-final-merged.md
?? .tmp-sfia-review/pr-297-body-merge-diff.patch
?? .tmp-sfia-review/pr-297-body-only-correction-pack.md
?? .tmp-sfia-review/pr-297-body-ready-f02-correction.md
?? .tmp-sfia-review/pr-297-branch-inventory.txt
?? .tmp-sfia-review/pr-297-ci-premerge.json
?? .tmp-sfia-review/pr-297-cleanup-before-after-comparison.json
?? .tmp-sfia-review/pr-297-cleanup-chatgpt-review-preserved.md
?? .tmp-sfia-review/pr-297-cleanup-ci.json
?? .tmp-sfia-review/pr-297-cleanup-command-log.txt
?? .tmp-sfia-review/pr-297-cleanup-final-state.txt
?? .tmp-sfia-review/pr-297-cleanup-findings.md
?? .tmp-sfia-review/pr-297-cleanup-git-truth-initial.txt
?? .tmp-sfia-review/pr-297-cleanup-handoff-ahead-note.txt
?? .tmp-sfia-review/pr-297-cleanup-local-branches-after-source-cleanup.txt
?? .tmp-sfia-review/pr-297-cleanup-local-branches-before.txt
?? .tmp-sfia-review/pr-297-cleanup-local-branches-final.txt
?? .tmp-sfia-review/pr-297-cleanup-pr.json
?? .tmp-sfia-review/pr-297-cleanup-readiness.md
?? .tmp-sfia-review/pr-297-cleanup-remote-heads-after-source-cleanup.txt
?? .tmp-sfia-review/pr-297-cleanup-remote-heads-before.txt
?? .tmp-sfia-review/pr-297-cleanup-remote-heads-final.txt
?? .tmp-sfia-review/pr-297-cleanup-state-before-handoff.txt
?? .tmp-sfia-review/pr-297-cleanup-tmp-evidence-before.json
?? .tmp-sfia-review/pr-297-cleanup-tmp-evidence-verification.md
?? .tmp-sfia-review/pr-297-cleanup-worktrees-after-source-cleanup.txt
?? .tmp-sfia-review/pr-297-cleanup-worktrees-before.txt
?? .tmp-sfia-review/pr-297-cleanup-worktrees-final.txt
?? .tmp-sfia-review/pr-297-document-05.md
?? .tmp-sfia-review/pr-297-final-findings.md
?? .tmp-sfia-review/pr-297-main-proof.txt
?? .tmp-sfia-review/pr-297-merge-commit-proof.txt
?? .tmp-sfia-review/pr-297-merge-decision-pack.md
?? .tmp-sfia-review/pr-297-merge-readiness-body.md
?? .tmp-sfia-review/pr-297-merge-readiness-findings.md
?? .tmp-sfia-review/pr-297-merge-readiness.diff
?? .tmp-sfia-review/pr-297-merge-readiness.json
?? .tmp-sfia-review/pr-297-pm-inline-comments.json
?? .tmp-sfia-review/pr-297-pm-issue-comments.json
?? .tmp-sfia-review/pr-297-pm-reviews.json
?? .tmp-sfia-review/pr-297-post-merge-body.md
?? .tmp-sfia-review/pr-297-post-merge-ci-initial.json
?? .tmp-sfia-review/pr-297-post-merge-ci-list.json
?? .tmp-sfia-review/pr-297-post-merge-ci-status.txt
?? .tmp-sfia-review/pr-297-post-merge-ci-view.txt
?? .tmp-sfia-review/pr-297-post-merge-ci.json
?? .tmp-sfia-review/pr-297-post-merge-commit-proof.txt
?? .tmp-sfia-review/pr-297-post-merge-doc-proof.txt
?? .tmp-sfia-review/pr-297-post-merge-findings.md
?? .tmp-sfia-review/pr-297-post-merge-pr.json
?? .tmp-sfia-review/pr-297-post-merge-validation-chatgpt-review-preserved.md
?? .tmp-sfia-review/pr-297-post-merge.json
?? .tmp-sfia-review/pr-297-postmerge-final-git.txt
?? .tmp-sfia-review/pr-297-postmerge-git-truth.txt
?? .tmp-sfia-review/pr-297-pre-merge-final.json
?? .tmp-sfia-review/pr-297-pre-merge.json
?? .tmp-sfia-review/pr-297-pre-ready.json
?? .tmp-sfia-review/pr-297-premerge-ci-ref.json
?? .tmp-sfia-review/pr-297-ready-f02-body-diff.patch
?? .tmp-sfia-review/pr-297-ready-findings.md
?? .tmp-sfia-review/pr-297-source-one-file.diff
?? .tmp-sfia-review/pr-297-worktree-inventory.txt
?? .tmp-sfia-review/pr-297-worktree-paths.txt
?? .tmp-sfia-review/pr-297-worktree-statuses.txt
?? .tmp-sfia-review/pr-297-worktree-summary.json
?? .tmp-sfia-review/pr-body-v2-a3.md
?? .tmp-sfia-review/pr-body.md
?? .tmp-sfia-review/pr-checks.txt
?? .tmp-sfia-review/pr-readiness-truth.txt
?? .tmp-sfia-review/primary-truth.txt
?? .tmp-sfia-review/pub-truth.txt
?? .tmp-sfia-review/ready-final-git.txt
?? .tmp-sfia-review/ready-truth.txt
?? .tmp-sfia-review/remote-review-commit.txt
?? .tmp-sfia-review/remote-review-truth.txt
?? .tmp-sfia-review/review-timestamp-cleanup.txt
?? .tmp-sfia-review/review-timestamp-d2-fa.txt
?? .tmp-sfia-review/review-timestamp-d2-fd.txt
?? .tmp-sfia-review/review-timestamp-d2.txt
?? .tmp-sfia-review/review-timestamp.txt
?? .tmp-sfia-review/source-inspection.txt
?? .tmp-sfia-review/v3-1-d1-cap-source-commit.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-body-delta.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-ci-initial.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-cleanup-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-commit-proof.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-merge-readiness-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-merge-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-package-manifest.md
?? .tmp-sfia-review/v3-1-d1-capitalization-package.diff
?? .tmp-sfia-review/v3-1-d1-capitalization-post-merge-validation-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-proof.json
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-readiness-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-publication-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-publication-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-ready-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-ci-checks.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-ci.json
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-diff.patch
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-findings.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-pr.json
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-proof.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-review-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-rex-report.md
?? .tmp-sfia-review/v3-1-d1-pr-body.md
?? .tmp-sfia-review/v3-1-d2-08-after.md
?? .tmp-sfia-review/v3-1-d2-08.diff
?? .tmp-sfia-review/v3-1-d2-a-delivery-report.md
?? .tmp-sfia-review/v3-1-d2-a-post-branch-doc-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-post-branch-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-pre-branch-doc-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-pre-branch-hashes.txt
?? .tmp-sfia-review/v3-1-d2-backlog-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-backlog-final-state.txt
?? .tmp-sfia-review/v3-1-d2-backlog-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-backlog-pre-mutation-hashes.txt
?? .tmp-sfia-review/v3-1-d2-backlog-report.md
?? .tmp-sfia-review/v3-1-d2-backlog-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-bl-doc18-modified-sections.md
?? .tmp-sfia-review/v3-1-d2-decision-pack.md
?? .tmp-sfia-review/v3-1-d2-doc15-frozen-bl.md
?? .tmp-sfia-review/v3-1-d2-doc15-frozen-ta.md
?? .tmp-sfia-review/v3-1-d2-doc15-frozen.md
?? .tmp-sfia-review/v3-1-d2-doc16-frozen-bl.md
?? .tmp-sfia-review/v3-1-d2-doc16-frozen-ta.md
?? .tmp-sfia-review/v3-1-d2-doc17-frozen-bl.md
?? .tmp-sfia-review/v3-1-d2-document-15-after.md
?? .tmp-sfia-review/v3-1-d2-document-15.md
?? .tmp-sfia-review/v3-1-d2-document-16.md
?? .tmp-sfia-review/v3-1-d2-fa-doc16-modified-sections.md
?? .tmp-sfia-review/v3-1-d2-fa-pre-mutation-hashes.txt
?? .tmp-sfia-review/v3-1-d2-final-state.txt
?? .tmp-sfia-review/v3-1-d2-framing-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-framing-report.md
?? .tmp-sfia-review/v3-1-d2-functional-architecture-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-functional-architecture-final-state.txt
?? .tmp-sfia-review/v3-1-d2-functional-architecture-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-functional-architecture-phrase-scan.txt
?? .tmp-sfia-review/v3-1-d2-functional-architecture-report.md
?? .tmp-sfia-review/v3-1-d2-functional-architecture-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-functional-design-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-functional-design-final-state.txt
?? .tmp-sfia-review/v3-1-d2-functional-design-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-functional-design-report.md
?? .tmp-sfia-review/v3-1-d2-functional-design-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-readme-after.md
?? .tmp-sfia-review/v3-1-d2-readme.diff
?? .tmp-sfia-review/v3-1-d2-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-ta-doc17-modified-sections.md
?? .tmp-sfia-review/v3-1-d2-ta-phrase-scan.txt
?? .tmp-sfia-review/v3-1-d2-ta-pre-mutation-hashes.txt
?? .tmp-sfia-review/v3-1-d2-technical-architecture-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-technical-architecture-final-state.txt
?? .tmp-sfia-review/v3-1-d2-technical-architecture-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-technical-architecture-report.md
?? .tmp-sfia-review/v3-1-d2-technical-architecture-source-inventory.md
?? .tmp-sfia-review/worktree-after.txt
?? .tmp-sfia-review/worktree-before.txt
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
```

`REVIEW PACK FULL — COMPLETE`.

`V3.1-D2-A DELIVERY READY FOR INDEPENDENT QA — NOT PR READY —
D2-B AND D2-C REMAIN CLOSED — D3 NOT OPENED`.
