# Review Pack Full — SFIA Studio V3.1-D2-B CKC Resolver — Delivery corrective

- Date/heure/fuseau: 2026-08-02 22:22:00 CEST (+0200)
- Rôle: Cursor (implémentation locale corrective)
- Cycle: 8 — Delivery / implémentation corrective
- Profil SFIA: Critical
- Typologie: INC
- Template canonique: prompts/templates/sfia-cycle-execution-template.md
- CKC fallback: method/.../02-fifteen-cycles-synthetic-map.md + méthode cycles candidate §4.8
- Statut CKC: candidate — aucune autorité d'exécution

## Gate Morris consommé

```
GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D2-B CKC RESOLVER —
ADDRESS ONLY THE STALE D2-A PUBLIC-BOUNDARY REGRESSION GUARD IN catalogProjection.qa.test.ts —
AUTHORIZE THIS TEST AS THE THIRTEENTH FILE ONLY —
PRESERVE ALL D2-A PRODUCTION ISOLATION ASSERTIONS —
ALLOW ONLY THE ADOPTED D2-B PUBLIC EXPORTS —
CONTINUE TO FORBID QUALIFYCYCLEBRIDGE, CREATED2, D2FACTORY AND ALL D2-C COMPOSITION —
PRESERVE THE EXISTING D2-B IMPLEMENTATION DIFF —
RERUN D2-B TARGETED TESTS, D2-A REGRESSIONS, OA/CYCLE, TYPECHECK, LINT, FULL TEST SUITE AND BUILD —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-C —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

## Justification Critical

Le package porte sur le resolver CKC fail-closed, `executionAuthority=false`, la preuve `consumed=true`,
l'adaptation T-A2, les frontières publiques du package cycle et les contrôles empêchant l'ouverture
prématurée de D2-C. La correction distingue précisément les exports D2-B autorisés des compositions D2-C interdites.

## Git Truth initial

- workspace: `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge`
- branche active: `delivery/sfia-studio-v3-1-d2-b-ckc-resolver`
- HEAD = main = origin/main = `bb685f1205b33f887ee27b42ac918c96386a6e33`
- divergence main/origin-main: 0/0
- upstream: aucun
- branche distante D2-B: absente
- staged: vide
- 12 fichiers D2-B présents avant correction
- `git diff | shasum -a 256` initial = `61384b040499d937f04cab94c385d2668ee4e7b00f3f3401dd8302d243b44be9`
- `git diff --check` PASS
- handoff source tip `605cacb5c0eaa53bbe2038b981934b2b63f8a457`
- handoff source blob `4683014a05343b1b671422ef3fc92b7d98c8cf09`

## Handoff source préservé

Archive locale: `.tmp-sfia-review/v3-1-d2-b-delivery-blocked-chatgpt-review-preserved.md`
Blob vérifié = `4683014a05343b1b671422ef3fc92b7d98c8cf09`

## Finding initial

Le test historique mélangeait dans une seule regex négative:
- exports D2-B adoptés: `ckcQualificationResolver`, `ConsumptionProof`
- compositions D2-C interdites: `QualifyCycleBridge`, `createD2`, `D2Factory`

## Empreintes

| Empreinte | Valeur | Statut |
|---|---|---|
| FULL_DIFF initial (tracked) | `61384b040499d937f04cab94c385d2668ee4e7b00f3f3401dd8302d243b44be9` | pré-correction |
| D2B_ORIGINAL_12_FILES_CONTENT_SHA256 | `e904b0d8ee0ed714f95043a4ffcf72e401a6400187f32969b7b9a76777dca3a3` | **inchangée** après correction |
| FULL_13_FILES_DIFF_SHA256 | `3379ac64a4d093577de7de2c562338c9d140fea958030396bb7f980e6683070b` | post-correction |
| GIT_DIFF_SHA256 (tracked post) | `c6bd46e6c0cc38de1aaa61c048269f064832c0e4c768bcdda2f0a9724caf21f5` | post-correction |

## Inventaire initial des douze fichiers

1. `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts`
2. `projects/sfia-studio/app/lib/oa/cycle/index.ts`
3. `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts`
4. `projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts`
5. `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts`
6. `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts`
7. `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts`
8. `projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts`
9. `projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts`
10. `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts`
11. `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts`
12. `projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts`

Preuve de non-modification: comparaison baseline hash-object des 9 non suivis + sha du diff des 3 suivis → identité stricte avant/après.

## Fichier correctif autorisé (13e)

`projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts`

## Correction appliquée

- Titre: `keeps the public boundary limited to adopted D2-A and D2-B exports`
- Assertions D2-A conservées (3 exports)
- Assertions D2-B positives ajoutées (5 exports exacts)
- Assertion négative limitée aux identifiants D2-C: `QualifyCycleBridge|qualifyCycleWithCkc|ckcQualificationResult|createD2|D2Factory|createCkcQualificationServices`
- Test d'isolation production D2-A inchangé

### Bloc describe corrigé

```typescript
describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
  it("keeps the public boundary limited to adopted D2-A and D2-B exports", () => {
    const source = readFileSync(
      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
      "utf8",
    );
    expect(source).toContain(
      'export * from "./domain/ckcQualificationContracts";',
    );
    expect(source).toContain('export * from "./domain/catalogFingerprint";');
    expect(source).toContain('export * from "./domain/catalogProjection";');
    expect(source).toContain(
      'export * from "./domain/ckcQualificationErrors";',
    );
    expect(source).toContain(
      'export * from "./domain/ckcConsumptionProof";',
    );
    expect(source).toContain(
      'export * from "./ports/ckcQualificationResolver";',
    );
    expect(source).toContain(
      'export * from "./infrastructure/ckcReferenceManifest";',
    );
    expect(source).toContain(
      'export * from "./infrastructure/ckcQualificationResolver";',
    );
    expect(source).not.toMatch(
      /QualifyCycleBridge|qualifyCycleWithCkc|ckcQualificationResult|createD2|D2Factory|createCkcQualificationServices/,
    );
  });

  it("keeps production projection free of D2-B/C and runtime I/O imports", () => {
    for (const relative of [
      "ckcQualificationContracts.ts",
      "catalogFingerprint.ts",
      "catalogProjection.ts",
    ]) {
      const source = readFileSync(
        path.resolve(__dirname, `../../../lib/oa/cycle/domain/${relative}`),
        "utf8",
      );
      expect(source).not.toMatch(/node:crypto|node:fs|from ["']next/);
      expect(source).not.toMatch(/infrastructure\//);
      expect(source).not.toMatch(
        /QualifyCycle|ResolveCycleKnowledgeContract|CkcResolverPort|CycleAuditEvent|CreateCycle|consumed|recommendedProfile|isMorrisDecision/,
      );
    }
  });
```

### Diff correctif complet

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
index 1ba9408..9400a69 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
@@ -613,7 +613,7 @@ describe("V3.1-D2-A QA — public fingerprint/catalog binding (critical)", () =>
 });

 describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
-  it("keeps index.ts limited to the three additive D2-A exports", () => {
+  it("keeps the public boundary limited to adopted D2-A and D2-B exports", () => {
     const source = readFileSync(
       path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
       "utf8",
@@ -623,8 +623,23 @@ describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
     );
     expect(source).toContain('export * from "./domain/catalogFingerprint";');
     expect(source).toContain('export * from "./domain/catalogProjection";');
+    expect(source).toContain(
+      'export * from "./domain/ckcQualificationErrors";',
+    );
+    expect(source).toContain(
+      'export * from "./domain/ckcConsumptionProof";',
+    );
+    expect(source).toContain(
+      'export * from "./ports/ckcQualificationResolver";',
+    );
+    expect(source).toContain(
+      'export * from "./infrastructure/ckcReferenceManifest";',
+    );
+    expect(source).toContain(
+      'export * from "./infrastructure/ckcQualificationResolver";',
+    );
     expect(source).not.toMatch(
-      /ckcQualificationResolver|ConsumptionProof|QualifyCycleBridge|createD2|D2Factory/,
+      /QualifyCycleBridge|qualifyCycleWithCkc|ckcQualificationResult|createD2|D2Factory|createCkcQualificationServices/,
     );
   });

```

## Inventaire final des treize fichiers

1. `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts`
2. `projects/sfia-studio/app/lib/oa/cycle/index.ts`
3. `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts`
4. `projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts`
5. `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts`
6. `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts`
7. `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts`
8. `projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts`
9. `projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts`
10. `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts`
11. `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts`
12. `projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts`
13. `projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts`

## Résultats validations

| Contrôle | Résultat |
|---|---|
| Test correctif seul | **37/37 PASS** |
| D2-B ciblés | **26/26 PASS** |
| D2-A regressions | **86/86 PASS** |
| Suite oa/cycle | **206/206 PASS** |
| Typecheck | **PASS** |
| Lint | **PASS** |
| Suite complète | **939/939 PASS** (98 fichiers) |
| Build | **PASS** |
| git diff --check | **PASS** |
| Fichiers hors scope | **0** |
| Fichiers protégés | **0 bytes de diff** |

## Findings

Aucun finding bloquant résiduel. Le finding initial (garde-fou D2-A stale) est corrigé de façon phase-aware.

## Réserves

- Delivery complète localement ≠ QA indépendante
- Tests verts ≠ PR ready
- Autoriser les exports D2-B ≠ ouvrir D2-C
- Aucun commit/push/PR projet dans ce cycle

## Rollback

Aucun commit créé. Abandon possible par restauration explicite des 13 paths sous GO Morris distinct. main inchangée.

## Absence commit / push / PR projet

Confirmée. Seule publication autorisée: handoff review L3 borné.

## Gate suivant candidat

```
GO QA VALIDATION SFIA STUDIO V3.1-D2-B CKC RESOLVER —
REVIEW LOCAL THIRTEEN-FILE D2-B PACKAGE AGAINST BL-D2-B-01…06, ADOPTED FA/TA, D2-A CONTRACTS AND CORRECTED PUBLIC-BOUNDARY GUARD —
VERIFY MANIFEST ALLOWLIST, DETAILED/SYNTHETIC/FALLBACK RESOLUTION, FAIL-CLOSED NEGATIVES, T-A2 COMPATIBILITY, CONSUMPTION PROOF, ERRORS, EVENTS, IMPORT BOUNDARIES, D2-A ISOLATION, D2-C EXCLUSION, REGRESSIONS, LINT, FULL TEST SUITE AND BUILD —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-C —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

## Verdict

```
V3.1-D2-B CKC RESOLVER CORRECTIVE DELIVERY COMPLETE —
STALE D2-A PUBLIC-BOUNDARY REGRESSION GUARD UPDATED —
D2-A PRODUCTION ISOLATION ASSERTIONS PRESERVED —
ADOPTED D2-B PUBLIC EXPORTS EXPLICITLY ALLOWED —
D2-C COMPOSITION REMAINS FORBIDDEN —
ORIGINAL D2-B IMPLEMENTATION DIFF PRESERVED —
THIRTEEN-FILE PACKAGE VERIFIED —
D2-B TARGETED TESTS PASS —
D2-A REGRESSIONS PASS —
OA/CYCLE TESTS PASS —
TYPECHECK PASS —
LINT PASS —
FULL TEST SUITE PASS —
BUILD PASS —
READY FOR DISTINCT QA VALIDATION GATE —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-C —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

---

# Contenu complet des neuf fichiers D2-B créés

## `projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts`

```typescript
import type {
  CkcQualificationResolution,
  ValidatedCycleTypeProjection,
} from "./ckcQualificationContracts";
import {
  createCkcQualificationError,
  type CkcQualificationError,
} from "./ckcQualificationErrors";
import type { CkcLevel, CkcSource, CkcStatus } from "./types";

export type CkcConsumptionProof = {
  readonly cycleTypeId: string;
  readonly detailedStatus:
    | "resolved_detailed"
    | "resolved_synthetic"
    | "resolved_fallback_synthetic";
  readonly level: CkcLevel;
  readonly status: CkcStatus;
  readonly source: CkcSource;
  readonly expectedPrimaryReference: string;
  readonly usedReference: string;
  readonly fallbackUsed: boolean;
  readonly fallbackReference?: string;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
  readonly resolvedAt: string;
  readonly doctrineStatus: "method-candidate";
  readonly executionAuthority: false;
  readonly consumed: true;
  readonly disclosures: readonly string[];
};

export type CkcConsumptionProofResult =
  | { readonly ok: true; readonly proof: CkcConsumptionProof }
  | { readonly ok: false; readonly error: CkcQualificationError };

const RESOLVED_STATES = new Set([
  "resolved_detailed",
  "resolved_synthetic",
  "resolved_fallback_synthetic",
]);

function isProjectionConsistent(
  projection: ValidatedCycleTypeProjection,
  resolution: CkcQualificationResolution,
): boolean {
  if (
    projection.cycleTypeId !== resolution.cycleTypeId ||
    projection.catalogVersion !== resolution.catalogVersion ||
    projection.catalogHash !== resolution.catalogHash ||
    projection.correlationId !== resolution.correlationId ||
    projection.ckc.primaryReference !== resolution.expectedPrimaryReference ||
    projection.ckc.fallbackReference !== resolution.fallbackReference ||
    resolution.doctrineStatus !== "method-candidate" ||
    resolution.executionAuthority !== false ||
    !resolution.resolvedAt.trim() ||
    !resolution.usedReference ||
    !resolution.exploitable ||
    !RESOLVED_STATES.has(resolution.detailedStatus)
  ) {
    return false;
  }

  if (resolution.detailedStatus === "resolved_detailed") {
    return (
      resolution.level === "detailed" &&
      resolution.status === "resolved" &&
      resolution.source === "repository_candidate" &&
      resolution.fallbackUsed === false &&
      resolution.usedReference === projection.ckc.primaryReference
    );
  }

  if (resolution.detailedStatus === "resolved_synthetic") {
    return (
      projection.ckc.primaryLevel === "synthetic" &&
      resolution.level === "synthetic" &&
      resolution.status === "synthetic" &&
      resolution.source === "intra_v3_synthetic" &&
      resolution.fallbackUsed === false &&
      resolution.usedReference === projection.ckc.primaryReference
    );
  }

  return (
    projection.ckc.primaryLevel === "detailed" &&
    projection.ckc.fallbackPolicy === "synthetic_map" &&
    Boolean(projection.ckc.fallbackReference) &&
    resolution.level === "synthetic" &&
    resolution.status === "synthetic" &&
    resolution.source === "intra_v3_synthetic" &&
    resolution.fallbackUsed === true &&
    resolution.usedReference === projection.ckc.fallbackReference
  );
}

/** Pure fail-closed proof builder. Functional failures are values, not throws. */
export function buildCkcConsumptionProof(
  projection: ValidatedCycleTypeProjection,
  resolution: CkcQualificationResolution,
): CkcConsumptionProofResult {
  if (!isProjectionConsistent(projection, resolution)) {
    return {
      ok: false,
      error: createCkcQualificationError({
        code: "CKC_RESOLUTION_INCOHERENT",
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        detailedStatus: resolution.detailedStatus,
      }),
    };
  }

  const proof = {
    cycleTypeId: resolution.cycleTypeId,
    detailedStatus: resolution.detailedStatus as
      | "resolved_detailed"
      | "resolved_synthetic"
      | "resolved_fallback_synthetic",
    level: resolution.level,
    status: resolution.status,
    source: resolution.source,
    expectedPrimaryReference: resolution.expectedPrimaryReference,
    usedReference: resolution.usedReference as string,
    fallbackUsed: resolution.fallbackUsed,
    ...(resolution.fallbackReference
      ? { fallbackReference: resolution.fallbackReference }
      : {}),
    catalogVersion: resolution.catalogVersion,
    catalogHash: resolution.catalogHash,
    correlationId: resolution.correlationId,
    resolvedAt: resolution.resolvedAt,
    doctrineStatus: "method-candidate" as const,
    executionAuthority: false as const,
    consumed: true as const,
    disclosures: Object.freeze([...resolution.disclosures]),
  };

  return { ok: true, proof: Object.freeze(proof) };
}
```

## `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts`

```typescript
import type { CkcQualificationDetailedStatus } from "./ckcQualificationContracts";

export type CkcQualificationErrorCode =
  | "CKC_MAPPING_INVALID"
  | "CKC_UNAVAILABLE"
  | "CKC_SYNTHETIC_INVALID"
  | "CKC_RESOLUTION_INCOHERENT"
  | "CKC_EXECUTION_AUTHORITY_FORBIDDEN"
  | "D2_INTERNAL_ERROR";

export type CkcQualificationError = {
  readonly code: CkcQualificationErrorCode;
  readonly message: string;
  readonly blocking: true;
  readonly retryable: boolean;
  readonly recoverable: boolean;
  readonly correlationId: string;
  readonly cycleTypeId: string;
  readonly detailedStatus?: CkcQualificationDetailedStatus;
};

const SAFE_MESSAGES: Readonly<Record<CkcQualificationErrorCode, string>> =
  Object.freeze({
    CKC_MAPPING_INVALID: "The CKC mapping is invalid.",
    CKC_UNAVAILABLE: "No authorized CKC source is available.",
    CKC_SYNTHETIC_INVALID: "The authorized synthetic CKC source is unavailable.",
    CKC_RESOLUTION_INCOHERENT: "The CKC resolution is incoherent.",
    CKC_EXECUTION_AUTHORITY_FORBIDDEN:
      "A CKC cannot hold execution authority.",
    D2_INTERNAL_ERROR: "The CKC resolution could not be completed.",
  });

export function createCkcQualificationError(input: {
  readonly code: CkcQualificationErrorCode;
  readonly correlationId: string;
  readonly cycleTypeId: string;
  readonly detailedStatus?: CkcQualificationDetailedStatus;
}): CkcQualificationError {
  const retryable = input.code === "D2_INTERNAL_ERROR";
  return Object.freeze({
    code: input.code,
    message: SAFE_MESSAGES[input.code],
    blocking: true as const,
    retryable,
    recoverable: retryable,
    correlationId: input.correlationId,
    cycleTypeId: input.cycleTypeId,
    ...(input.detailedStatus
      ? { detailedStatus: input.detailedStatus }
      : {}),
  });
}
```

## `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts`

```typescript
import {
  buildCkcConsumptionProof,
  type CkcConsumptionProofResult,
} from "../domain/ckcConsumptionProof";
import type {
  CkcQualificationDetailedStatus,
  CkcQualificationResolution,
  ValidatedCycleTypeProjection,
} from "../domain/ckcQualificationContracts";
import {
  createCkcQualificationError,
  type CkcQualificationErrorCode,
} from "../domain/ckcQualificationErrors";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type {
  CkcQualificationResolutionOutcome,
  CkcQualificationResolveInput,
  CkcQualificationResolverPort,
} from "../ports/ckcQualificationResolver";
import {
  CKC_REFERENCE_MANIFEST,
  getCkcManifestEntry,
  type CkcReferenceManifest,
  type CkcReferenceManifestEntry,
} from "./ckcReferenceManifest";

const MAPPING_KEYS = new Set([
  "mandatory",
  "primaryLevel",
  "primaryReference",
  "fallbackPolicy",
  "fallbackReference",
  "executionAuthority",
  "doctrineStatus",
  "unavailableBehavior",
]);

function isMappingShapeValid(
  projection: ValidatedCycleTypeProjection,
): boolean {
  const mapping = projection.ckc;
  if (
    !mapping ||
    Object.keys(mapping).some((key) => !MAPPING_KEYS.has(key)) ||
    mapping.mandatory !== true ||
    mapping.doctrineStatus !== "method-candidate" ||
    mapping.unavailableBehavior !== "fail-closed"
  ) {
    return false;
  }

  if (mapping.primaryLevel === "detailed") {
    return (
      mapping.fallbackPolicy === "synthetic_map" &&
      typeof mapping.fallbackReference === "string" &&
      Boolean(mapping.fallbackReference.trim())
    );
  }

  return (
    mapping.primaryLevel === "synthetic" &&
    mapping.fallbackPolicy === "none" &&
    mapping.fallbackReference === undefined
  );
}

function isUsable(
  entry: CkcReferenceManifestEntry | undefined,
  level: "detailed" | "synthetic",
): entry is CkcReferenceManifestEntry {
  return Boolean(
    entry &&
      entry.level === level &&
      entry.availability === "available" &&
      entry.doctrineStatus === "method-candidate" &&
      entry.executionAuthority === false &&
      ((level === "detailed" && entry.source === "repository_candidate") ||
        (level === "synthetic" &&
          entry.source === "intra_v3_synthetic")),
  );
}

function resolution(
  projection: ValidatedCycleTypeProjection,
  resolvedAt: string,
  input: {
    readonly detailedStatus: CkcQualificationDetailedStatus;
    readonly level: CkcQualificationResolution["level"];
    readonly status: CkcQualificationResolution["status"];
    readonly source: CkcQualificationResolution["source"];
    readonly usedReference?: string;
    readonly fallbackUsed: boolean;
    readonly exploitable: boolean;
    readonly disclosures?: readonly string[];
  },
): CkcQualificationResolution {
  return Object.freeze({
    cycleTypeId: projection.cycleTypeId,
    detailedStatus: input.detailedStatus,
    level: input.level,
    status: input.status,
    source: input.source,
    fallbackPolicy:
      projection.ckc.fallbackPolicy === "synthetic_map"
        ? ("intra_v3_only" as const)
        : ("none" as const),
    expectedPrimaryReference: projection.ckc.primaryReference,
    ...(input.usedReference ? { usedReference: input.usedReference } : {}),
    fallbackUsed: input.fallbackUsed,
    ...(projection.ckc.fallbackReference
      ? { fallbackReference: projection.ckc.fallbackReference }
      : {}),
    doctrineStatus: "method-candidate" as const,
    executionAuthority: false as const,
    catalogVersion: projection.catalogVersion,
    catalogHash: projection.catalogHash,
    correlationId: projection.correlationId,
    resolvedAt,
    exploitable: input.exploitable,
    disclosures: Object.freeze([...(input.disclosures ?? [])]),
  });
}

export class CkcQualificationResolver
  implements CkcQualificationResolverPort
{
  constructor(
    private readonly manifest: CkcReferenceManifest = CKC_REFERENCE_MANIFEST,
    private readonly audit?: CycleAuditPort,
  ) {}

  resolve(
    input: CkcQualificationResolveInput,
  ): CkcQualificationResolutionOutcome {
    const { projection, resolvedAt } = input;
    this.emit("oa.ckc.resolution_started", projection, resolvedAt, "started");

    try {
      if (projection.ckc.executionAuthority !== false) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
        );
      }
      if (!resolvedAt.trim() || !isMappingShapeValid(projection)) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_MAPPING_INVALID",
        );
      }
      const allowlistedPrimary = getCkcManifestEntry(
        projection.ckc.primaryReference,
        CKC_REFERENCE_MANIFEST,
      );
      const allowlistedFallback = projection.ckc.fallbackReference
        ? getCkcManifestEntry(
            projection.ckc.fallbackReference,
            CKC_REFERENCE_MANIFEST,
          )
        : undefined;
      if (
        !allowlistedPrimary ||
        allowlistedPrimary.level !== projection.ckc.primaryLevel ||
        (projection.ckc.primaryLevel === "detailed" &&
          (!allowlistedFallback ||
            allowlistedFallback.level !== "synthetic")) ||
        (projection.ckc.primaryLevel === "synthetic" && allowlistedFallback)
      ) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_MAPPING_INVALID",
        );
      }

      const primary = getCkcManifestEntry(
        projection.ckc.primaryReference,
        this.manifest,
      );
      if (primary && primary.executionAuthority !== false) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
        );
      }

      if (projection.ckc.primaryLevel === "synthetic") {
        if (!isUsable(primary, "synthetic")) {
          return this.failure(
            projection,
            resolvedAt,
            "unresolved_unavailable",
            "CKC_SYNTHETIC_INVALID",
          );
        }
        return this.success(
          projection,
          resolution(projection, resolvedAt, {
            detailedStatus: "resolved_synthetic",
            level: "synthetic",
            status: "synthetic",
            source: "intra_v3_synthetic",
            usedReference: projection.ckc.primaryReference,
            fallbackUsed: false,
            exploitable: true,
          }),
        );
      }

      if (isUsable(primary, "detailed")) {
        return this.success(
          projection,
          resolution(projection, resolvedAt, {
            detailedStatus: "resolved_detailed",
            level: "detailed",
            status: "resolved",
            source: "repository_candidate",
            usedReference: projection.ckc.primaryReference,
            fallbackUsed: false,
            exploitable: true,
          }),
        );
      }

      const fallbackReference = projection.ckc.fallbackReference as string;
      const fallback = getCkcManifestEntry(
        fallbackReference,
        this.manifest,
      );
      if (fallback && fallback.executionAuthority !== false) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
        );
      }
      if (!isUsable(fallback, "synthetic")) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_unavailable",
          "CKC_UNAVAILABLE",
        );
      }

      const resolved = resolution(projection, resolvedAt, {
        detailedStatus: "resolved_fallback_synthetic",
        level: "synthetic",
        status: "synthetic",
        source: "intra_v3_synthetic",
        usedReference: fallbackReference,
        fallbackUsed: true,
        exploitable: true,
        disclosures: ["CKC_FALLBACK_USED"],
      });
      this.emit(
        "oa.ckc.fallback_used",
        projection,
        resolvedAt,
        "fallback",
        resolved.detailedStatus,
        "CKC_FALLBACK_USED",
      );
      return this.success(projection, resolved);
    } catch {
      return this.failure(
        projection,
        resolvedAt,
        "unresolved_unavailable",
        "D2_INTERNAL_ERROR",
      );
    }
  }

  private success(
    projection: ValidatedCycleTypeProjection,
    resolved: CkcQualificationResolution,
  ): CkcQualificationResolutionOutcome {
    this.emit(
      "oa.ckc.resolution_succeeded",
      projection,
      resolved.resolvedAt,
      "ok",
      resolved.detailedStatus,
    );
    const proofResult: CkcConsumptionProofResult =
      buildCkcConsumptionProof(projection, resolved);
    if (!proofResult.ok) {
      this.emit(
        "oa.ckc.consumption_rejected",
        projection,
        resolved.resolvedAt,
        "error",
        resolved.detailedStatus,
        proofResult.error.code,
      );
      return Object.freeze({
        ok: false as const,
        resolution: resolved,
        error: proofResult.error,
      });
    }
    this.emit(
      "oa.ckc.consumption_validated",
      projection,
      resolved.resolvedAt,
      "ok",
      resolved.detailedStatus,
    );
    return Object.freeze({
      ok: true as const,
      resolution: resolved,
      proof: proofResult.proof,
    });
  }

  private failure(
    projection: ValidatedCycleTypeProjection,
    resolvedAt: string,
    detailedStatus: Extract<
      CkcQualificationDetailedStatus,
      "unresolved_invalid_mapping" | "unresolved_unavailable"
    >,
    code: CkcQualificationErrorCode,
  ): CkcQualificationResolutionOutcome {
    const failed = resolution(projection, resolvedAt, {
      detailedStatus,
      level: "absent",
      status:
        detailedStatus === "unresolved_invalid_mapping"
          ? "invalid"
          : "unavailable",
      source: "unavailable",
      fallbackUsed: false,
      exploitable: false,
    });
    const error = createCkcQualificationError({
      code,
      correlationId: projection.correlationId,
      cycleTypeId: projection.cycleTypeId,
      detailedStatus,
    });
    this.emit(
      "oa.ckc.resolution_failed",
      projection,
      resolvedAt,
      "error",
      detailedStatus,
      code,
    );
    this.emit(
      "oa.ckc.consumption_rejected",
      projection,
      resolvedAt,
      "error",
      detailedStatus,
      code,
    );
    return Object.freeze({
      ok: false as const,
      resolution: failed,
      error,
    });
  }

  private emit(
    event:
      | "oa.ckc.resolution_started"
      | "oa.ckc.resolution_succeeded"
      | "oa.ckc.resolution_failed"
      | "oa.ckc.fallback_used"
      | "oa.ckc.consumption_validated"
      | "oa.ckc.consumption_rejected",
    projection: ValidatedCycleTypeProjection,
    ts: string,
    result: "started" | "ok" | "error" | "fallback",
    detailedStatus?: CkcQualificationDetailedStatus,
    detailCode?: string,
  ): void {
    this.audit?.append({
      event,
      ts,
      correlationId: projection.correlationId,
      cycleTypeId: projection.cycleTypeId,
      result,
      ...(detailedStatus ? { detailedStatus } : {}),
      ...(detailCode ? { detailCode } : {}),
    });
  }
}
```

## `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts`

```typescript
import {
  CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH,
  CKC_PILOT_CADRAGE_PATH,
  CKC_PILOT_CONCEPTION_PATH,
  CKC_PILOT_QA_VALIDATION_PATH,
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  type CycleTypeCatalog,
} from "../domain/cycleTypeCatalog";
import type { CkcSource } from "../domain/types";

export type CkcReferenceManifestEntry = {
  readonly reference: string;
  readonly level: "detailed" | "synthetic";
  readonly version: string | null;
  readonly doctrineStatus: "method-candidate";
  readonly source: Extract<
    CkcSource,
    "repository_candidate" | "intra_v3_synthetic"
  >;
  readonly availability: "available" | "unavailable";
  readonly executionAuthority: false;
};

export type CkcReferenceManifest = {
  readonly entries: readonly CkcReferenceManifestEntry[];
};

export type CkcReferenceManifestIssue = {
  readonly code:
    | "MANIFEST_DUPLICATE"
    | "MANIFEST_UNKNOWN_REFERENCE"
    | "MANIFEST_REFERENCE_MISSING"
    | "MANIFEST_LEVEL_INCOHERENT"
    | "MANIFEST_METADATA_INVALID";
  readonly message: string;
};

function entry(
  value: CkcReferenceManifestEntry,
): CkcReferenceManifestEntry {
  return Object.freeze(value);
}

export const CKC_REFERENCE_MANIFEST: CkcReferenceManifest = Object.freeze({
  entries: Object.freeze([
    entry({
      reference: CKC_PILOT_CADRAGE_PATH,
      level: "detailed",
      version: "0.1.0",
      doctrineStatus: "method-candidate",
      source: "repository_candidate",
      availability: "available",
      executionAuthority: false,
    }),
    entry({
      reference: CKC_PILOT_CONCEPTION_PATH,
      level: "detailed",
      version: "0.1.0",
      doctrineStatus: "method-candidate",
      source: "repository_candidate",
      availability: "available",
      executionAuthority: false,
    }),
    entry({
      reference: CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH,
      level: "detailed",
      version: "0.1.0",
      doctrineStatus: "method-candidate",
      source: "repository_candidate",
      availability: "available",
      executionAuthority: false,
    }),
    entry({
      reference: CKC_PILOT_QA_VALIDATION_PATH,
      level: "detailed",
      version: "0.1.0",
      doctrineStatus: "method-candidate",
      source: "repository_candidate",
      availability: "available",
      executionAuthority: false,
    }),
    entry({
      reference: CKC_SYNTHETIC_MAP_PATH,
      level: "synthetic",
      version: null,
      doctrineStatus: "method-candidate",
      source: "intra_v3_synthetic",
      availability: "available",
      executionAuthority: false,
    }),
  ]),
});

export function getCkcManifestEntry(
  reference: string,
  manifest: CkcReferenceManifest = CKC_REFERENCE_MANIFEST,
): CkcReferenceManifestEntry | undefined {
  return manifest.entries.find((candidate) => candidate.reference === reference);
}

/** Pure catalogue-to-manifest allowlist validation. */
export function validateCkcReferenceManifest(
  manifest: CkcReferenceManifest = CKC_REFERENCE_MANIFEST,
  catalog: CycleTypeCatalog = CYCLE_TYPE_CATALOG,
): CkcReferenceManifestIssue[] {
  const issues: CkcReferenceManifestIssue[] = [];
  const expected = new Map<string, "detailed" | "synthetic">();

  for (const catalogEntry of catalog.entries) {
    expected.set(
      catalogEntry.ckc.primaryReference,
      catalogEntry.ckc.primaryLevel,
    );
    if (catalogEntry.ckc.fallbackReference) {
      expected.set(catalogEntry.ckc.fallbackReference, "synthetic");
    }
  }

  const seen = new Set<string>();
  for (const manifestEntry of manifest.entries) {
    if (seen.has(manifestEntry.reference)) {
      issues.push({
        code: "MANIFEST_DUPLICATE",
        message: "The CKC manifest contains a duplicate reference.",
      });
      continue;
    }
    seen.add(manifestEntry.reference);

    const expectedLevel = expected.get(manifestEntry.reference);
    if (!expectedLevel) {
      issues.push({
        code: "MANIFEST_UNKNOWN_REFERENCE",
        message: "The CKC manifest contains an unauthorized reference.",
      });
    } else if (
      manifestEntry.level !== expectedLevel ||
      (manifestEntry.level === "detailed" &&
        manifestEntry.source !== "repository_candidate") ||
      (manifestEntry.level === "synthetic" &&
        manifestEntry.source !== "intra_v3_synthetic")
    ) {
      issues.push({
        code: "MANIFEST_LEVEL_INCOHERENT",
        message: "The CKC manifest level or source is incoherent.",
      });
    }

    if (
      manifestEntry.doctrineStatus !== "method-candidate" ||
      manifestEntry.executionAuthority !== false ||
      !["available", "unavailable"].includes(manifestEntry.availability)
    ) {
      issues.push({
        code: "MANIFEST_METADATA_INVALID",
        message: "The CKC manifest metadata is invalid.",
      });
    }
  }

  for (const reference of expected.keys()) {
    if (!seen.has(reference)) {
      issues.push({
        code: "MANIFEST_REFERENCE_MISSING",
        message: "An authorized catalogue CKC reference is missing.",
      });
    }
  }

  return issues;
}
```

## `projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts`

```typescript
import type {
  CkcQualificationResolution,
  ValidatedCycleTypeProjection,
} from "../domain/ckcQualificationContracts";
import type { CkcConsumptionProof } from "../domain/ckcConsumptionProof";
import type { CkcQualificationError } from "../domain/ckcQualificationErrors";

export type CkcQualificationResolveInput = {
  readonly projection: ValidatedCycleTypeProjection;
  readonly resolvedAt: string;
};

export type CkcQualificationResolutionOutcome =
  | {
      readonly ok: true;
      readonly resolution: CkcQualificationResolution;
      readonly proof: CkcConsumptionProof;
    }
  | {
      readonly ok: false;
      readonly resolution: CkcQualificationResolution;
      readonly error: CkcQualificationError;
    };

/** Synchronous D2-B boundary: manifest-backed, deterministic and I/O-free. */
export interface CkcQualificationResolverPort {
  resolve(
    input: CkcQualificationResolveInput,
  ): CkcQualificationResolutionOutcome;
}
```

## `projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts`

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  buildCkcConsumptionProof,
  projectSelectableCycleType,
  type CkcQualificationResolution,
  type CkcReferenceManifest,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";

const RESOLVED_AT = "2026-08-02T19:47:00.000Z";

function projection(cycleTypeId: string): ValidatedCycleTypeProjection {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:proof:${cycleTypeId}`,
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

function resolved(
  selected: ValidatedCycleTypeProjection,
  manifest?: CkcReferenceManifest,
): CkcQualificationResolution {
  const outcome = new CkcQualificationResolver(manifest).resolve({
    projection: selected,
    resolvedAt: RESOLVED_AT,
  });
  if (!outcome.ok) throw new Error(outcome.error.message);
  return outcome.resolution;
}

describe("V3.1-D2-B CKC consumption proof", () => {
  it.each([
    ["cyc:framing", "resolved_detailed"],
    ["cyc:delivery", "resolved_synthetic"],
  ] as const)("builds immutable proof for %s", (cycleTypeId, status) => {
    const selected = projection(cycleTypeId);
    const result = buildCkcConsumptionProof(selected, resolved(selected));
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.proof).toMatchObject({
      detailedStatus: status,
      consumed: true,
      executionAuthority: false,
      doctrineStatus: "method-candidate",
      catalogVersion: selected.catalogVersion,
      catalogHash: selected.catalogHash,
      correlationId: selected.correlationId,
    });
    expect(Object.isFrozen(result.proof)).toBe(true);
    expect(Object.isFrozen(result.proof.disclosures)).toBe(true);
  });

  it("builds a fallback proof with disclosure", () => {
    const selected = projection("cyc:framing");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const result = buildCkcConsumptionProof(
      selected,
      resolved(selected, manifest),
    );
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.proof).toMatchObject({
      detailedStatus: "resolved_fallback_synthetic",
      fallbackUsed: true,
      usedReference: selected.ckc.fallbackReference,
      disclosures: ["CKC_FALLBACK_USED"],
      consumed: true,
    });
  });

  it("rejects identity, catalogue and reference mismatches", () => {
    const selected = projection("cyc:framing");
    const valid = resolved(selected);
    const mutations: Partial<CkcQualificationResolution>[] = [
      { cycleTypeId: "cyc:other" },
      { catalogVersion: "stale" },
      { catalogHash: "stale" },
      { correlationId: "cor:lost" },
      { expectedPrimaryReference: "other" },
      { usedReference: "other" },
      { fallbackReference: "other" },
    ];
    for (const mutation of mutations) {
      const result = buildCkcConsumptionProof(selected, {
        ...valid,
        ...mutation,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
      }
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("rejects status, T-A2 projection, doctrine and authority mismatches", () => {
    const selected = projection("cyc:delivery");
    const valid = resolved(selected);
    const mutations: Partial<CkcQualificationResolution>[] = [
      { fallbackUsed: true },
      { level: "detailed" },
      { status: "resolved" },
      { source: "repository_candidate" },
      { detailedStatus: "unresolved_unavailable", exploitable: false },
      { doctrineStatus: "baseline" as "method-candidate" },
      { executionAuthority: true as false },
      { resolvedAt: "" },
      { usedReference: undefined },
    ];
    for (const mutation of mutations) {
      const result = buildCkcConsumptionProof(selected, {
        ...valid,
        ...mutation,
      });
      expect(result.ok).toBe(false);
      expect(result).not.toHaveProperty("proof");
    }
  });
});
```

## `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts`

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  projectSelectableCycleType,
  type CkcReferenceManifest,
  type CycleAuditEvent,
  type CycleAuditPort,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";

const RESOLVED_AT = "2026-08-02T19:47:00.000Z";

class AuditJournal implements CycleAuditPort {
  readonly events: CycleAuditEvent[] = [];
  append(event: CycleAuditEvent): void {
    this.events.push(event);
  }
}

function projection(cycleTypeId: string): ValidatedCycleTypeProjection {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:qa:${cycleTypeId}`,
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

describe("V3.1-D2-B resolver QA", () => {
  it("emits minimal success, fallback and consumption events", () => {
    const selected = projection("cyc:framing");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const audit = new AuditJournal();
    const result = new CkcQualificationResolver(manifest, audit).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    expect(audit.events.map((event) => event.event)).toEqual([
      "oa.ckc.resolution_started",
      "oa.ckc.fallback_used",
      "oa.ckc.resolution_succeeded",
      "oa.ckc.consumption_validated",
    ]);
    for (const event of audit.events) {
      expect(event).toMatchObject({
        ts: RESOLVED_AT,
        correlationId: selected.correlationId,
        cycleTypeId: selected.cycleTypeId,
      });
      expect(event).not.toHaveProperty("objective");
      expect(event).not.toHaveProperty("scope");
      expect(event).not.toHaveProperty("profile");
      expect(event).not.toHaveProperty("reference");
    }
  });

  it("emits fail-closed failure and consumption rejection", () => {
    const selected = projection("cyc:delivery");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const audit = new AuditJournal();
    const result = new CkcQualificationResolver(manifest, audit).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(false);
    expect(audit.events.map((event) => event.event)).toEqual([
      "oa.ckc.resolution_started",
      "oa.ckc.resolution_failed",
      "oa.ckc.consumption_rejected",
    ]);
    expect(audit.events[1]).toMatchObject({
      detailCode: "CKC_SYNTHETIC_INVALID",
      result: "error",
    });
  });

  it("fails closed for incoherent synthetic manifest metadata", () => {
    const selected = projection("cyc:delivery");
    for (const replacement of [
      { level: "detailed" },
      { doctrineStatus: "baseline" },
      { source: "repository_candidate" },
    ]) {
      const manifest: CkcReferenceManifest = {
        entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
          entry.reference === selected.ckc.primaryReference
            ? ({ ...entry, ...replacement } as typeof entry)
            : entry,
        ),
      };
      const result = new CkcQualificationResolver(manifest).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_SYNTHETIC_INVALID");
        expect(result).not.toHaveProperty("proof");
      }
    }
  });

  it("maps unexpected failures to a safe D2 error", () => {
    const selected = projection("cyc:delivery");
    const throwingEntries = new Proxy(CKC_REFERENCE_MANIFEST.entries, {
      get() {
        throw new Error(
          "/Users/private/secret.md should never cross the boundary",
        );
      },
    });
    const result = new CkcQualificationResolver({
      entries: throwingEntries,
    }).resolve({ projection: selected, resolvedAt: RESOLVED_AT });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.code).toBe("D2_INTERNAL_ERROR");
      expect(result.error.message).not.toContain("/Users/");
      expect(result.error.message).not.toContain("secret");
    }
  });

  it("is deeply deterministic for identical explicit inputs", () => {
    const selected = projection("cyc:delivery");
    const resolver = new CkcQualificationResolver();
    const first = resolver.resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    const second = resolver.resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(second).toEqual(first);
  });

  it("keeps the historical audit event contract accepted", () => {
    const audit = new AuditJournal();
    audit.append({
      event: "oa.ckc.resolved",
      ts: RESOLVED_AT,
      correlationId: "cor:historical",
      cycleTypeId: "cyc:delivery",
      level: "synthetic",
      status: "synthetic",
      result: "ok",
      durationMs: 0,
    });
    expect(audit.events[0].event).toBe("oa.ckc.resolved");
  });
});
```

## `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts`

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  projectSelectableCycleType,
  type CkcReferenceManifest,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";

const RESOLVED_AT = "2026-08-02T19:47:00.000Z";

function projection(cycleTypeId: string): ValidatedCycleTypeProjection {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:${cycleTypeId}`,
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

function withAvailability(
  references: readonly string[],
  availability: "available" | "unavailable",
): CkcReferenceManifest {
  return {
    entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
      references.includes(entry.reference)
        ? { ...entry, availability }
        : entry,
    ),
  };
}

describe("V3.1-D2-B CKC qualification resolver", () => {
  it.each([
    "cyc:framing",
    "cyc:functional-design",
    "cyc:technical-architecture",
    "cyc:qa-validation",
  ])("resolves detailed pilot %s", (cycleTypeId) => {
    const selected = projection(cycleTypeId);
    const result = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.resolution).toMatchObject({
      detailedStatus: "resolved_detailed",
      level: "detailed",
      status: "resolved",
      source: "repository_candidate",
      usedReference: selected.ckc.primaryReference,
      fallbackUsed: false,
      executionAuthority: false,
    });
    expect(result.proof.consumed).toBe(true);
    expect(result.proof.disclosures).toEqual([]);
  });

  it("resolves a synthetic primary without a second fallback", () => {
    const selected = projection("cyc:delivery");
    const result = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.resolution).toMatchObject({
      detailedStatus: "resolved_synthetic",
      level: "synthetic",
      status: "synthetic",
      source: "intra_v3_synthetic",
      usedReference: selected.ckc.primaryReference,
      fallbackUsed: false,
    });
    expect(result.proof.consumed).toBe(true);
  });

  it("substitutes only the declared synthetic fallback", () => {
    const selected = projection("cyc:framing");
    const resolver = new CkcQualificationResolver(
      withAvailability([selected.ckc.primaryReference], "unavailable"),
    );
    const result = resolver.resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.resolution).toMatchObject({
      detailedStatus: "resolved_fallback_synthetic",
      usedReference: selected.ckc.fallbackReference,
      fallbackUsed: true,
      disclosures: ["CKC_FALLBACK_USED"],
    });
    expect(result.proof.consumed).toBe(true);
  });

  it("fails closed when detailed primary and fallback are unavailable", () => {
    const selected = projection("cyc:framing");
    const result = new CkcQualificationResolver(
      withAvailability(
        [
          selected.ckc.primaryReference,
          selected.ckc.fallbackReference as string,
        ],
        "unavailable",
      ),
    ).resolve({ projection: selected, resolvedAt: RESOLVED_AT });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("Expected fail-closed result");
    expect(result.error.code).toBe("CKC_UNAVAILABLE");
    expect(result.resolution).toMatchObject({
      detailedStatus: "unresolved_unavailable",
      level: "absent",
      status: "unavailable",
      source: "unavailable",
      exploitable: false,
    });
    expect(result).not.toHaveProperty("proof");
  });

  it("fails closed when the synthetic primary is unavailable", () => {
    const selected = projection("cyc:delivery");
    const result = new CkcQualificationResolver(
      withAvailability([selected.ckc.primaryReference], "unavailable"),
    ).resolve({ projection: selected, resolvedAt: RESOLVED_AT });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("Expected fail-closed result");
    expect(result.error.code).toBe("CKC_SYNTHETIC_INVALID");
    expect(result).not.toHaveProperty("proof");
  });

  it("rejects non-allowlisted and extended mappings without reflecting input", () => {
    const selected = projection("cyc:framing");
    for (const ckc of [
      { ...selected.ckc, primaryReference: "caller/private/path.md" },
      { ...selected.ckc, dynamicSource: true },
      { ...selected.ckc, mandatory: false },
      { ...selected.ckc, unavailableBehavior: "fail-open" },
    ]) {
      const result = new CkcQualificationResolver().resolve({
        projection: {
          ...selected,
          ckc,
        } as unknown as ValidatedCycleTypeProjection,
        resolvedAt: RESOLVED_AT,
      });
      expect(result.ok).toBe(false);
      if (result.ok) throw new Error("Expected invalid mapping");
      expect(result.error.code).toBe("CKC_MAPPING_INVALID");
      expect(result.error.message).not.toContain("caller/private");
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("forbids execution authority in mapping and manifest", () => {
    const selected = projection("cyc:framing");
    const mappingResult = new CkcQualificationResolver().resolve({
      projection: {
        ...selected,
        ckc: { ...selected.ckc, executionAuthority: true },
      } as unknown as ValidatedCycleTypeProjection,
      resolvedAt: RESOLVED_AT,
    });
    expect(mappingResult.ok).toBe(false);
    if (!mappingResult.ok) {
      expect(mappingResult.error.code).toBe(
        "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
      );
    }

    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? ({
              ...entry,
              executionAuthority: true,
            } as unknown as typeof entry)
          : entry,
      ),
    };
    const manifestResult = new CkcQualificationResolver(manifest).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(manifestResult.ok).toBe(false);
    if (!manifestResult.ok) {
      expect(manifestResult.error.code).toBe(
        "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
      );
    }
  });
});
```

## `projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts`

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  validateCkcReferenceManifest,
  type CkcReferenceManifest,
  type CkcReferenceManifestEntry,
} from "@/lib/oa/cycle";

function manifest(
  entries: readonly CkcReferenceManifestEntry[],
): CkcReferenceManifest {
  return { entries };
}

describe("V3.1-D2-B CKC reference manifest", () => {
  it("contains exactly the five allowlisted catalogue references", () => {
    expect(CKC_REFERENCE_MANIFEST.entries).toHaveLength(5);
    expect(
      new Set(CKC_REFERENCE_MANIFEST.entries.map((entry) => entry.reference))
        .size,
    ).toBe(5);
    expect(validateCkcReferenceManifest()).toEqual([]);

    const expected = new Set(
      CYCLE_TYPE_CATALOG.entries.flatMap((entry) => [
        entry.ckc.primaryReference,
        ...(entry.ckc.fallbackReference
          ? [entry.ckc.fallbackReference]
          : []),
      ]),
    );
    expect(
      new Set(CKC_REFERENCE_MANIFEST.entries.map((entry) => entry.reference)),
    ).toEqual(expected);
  });

  it("declares four versioned detailed pilots and one unversioned synthetic map", () => {
    const detailed = CKC_REFERENCE_MANIFEST.entries.filter(
      (entry) => entry.level === "detailed",
    );
    expect(detailed).toHaveLength(4);
    expect(detailed.every((entry) => entry.version === "0.1.0")).toBe(true);
    expect(
      CKC_REFERENCE_MANIFEST.entries.find(
        (entry) => entry.reference === CKC_SYNTHETIC_MAP_PATH,
      ),
    ).toMatchObject({
      level: "synthetic",
      version: null,
      source: "intra_v3_synthetic",
    });
  });

  it("is deeply frozen at collection and entry boundaries", () => {
    expect(Object.isFrozen(CKC_REFERENCE_MANIFEST)).toBe(true);
    expect(Object.isFrozen(CKC_REFERENCE_MANIFEST.entries)).toBe(true);
    expect(
      CKC_REFERENCE_MANIFEST.entries.every((entry) =>
        Object.isFrozen(entry),
      ),
    ).toBe(true);
  });

  it("rejects duplicates, unknowns, missing entries and incoherent levels", () => {
    const entries = CKC_REFERENCE_MANIFEST.entries;
    expect(
      validateCkcReferenceManifest(manifest([...entries, entries[0]])).map(
        (issue) => issue.code,
      ),
    ).toContain("MANIFEST_DUPLICATE");
    expect(
      validateCkcReferenceManifest(
        manifest([
          ...entries,
          { ...entries[0], reference: "caller/arbitrary.md" },
        ]),
      ).map((issue) => issue.code),
    ).toContain("MANIFEST_UNKNOWN_REFERENCE");
    expect(
      validateCkcReferenceManifest(manifest(entries.slice(1))).map(
        (issue) => issue.code,
      ),
    ).toContain("MANIFEST_REFERENCE_MISSING");
    expect(
      validateCkcReferenceManifest(
        manifest([
          { ...entries[0], level: "synthetic" },
          ...entries.slice(1),
        ]),
      ).map((issue) => issue.code),
    ).toContain("MANIFEST_LEVEL_INCOHERENT");
  });

  it("rejects invalid doctrine and execution authority without I/O", () => {
    for (const replacement of [
      {
        ...CKC_REFERENCE_MANIFEST.entries[0],
        doctrineStatus: "baseline",
      },
      {
        ...CKC_REFERENCE_MANIFEST.entries[0],
        executionAuthority: true,
      },
    ]) {
      const invalid = replacement as unknown as CkcReferenceManifestEntry;
      expect(
        validateCkcReferenceManifest(
          manifest([invalid, ...CKC_REFERENCE_MANIFEST.entries.slice(1)]),
        ).map((issue) => issue.code),
      ).toContain("MANIFEST_METADATA_INVALID");
    }
  });
});
```

---

# Diff complet des quatre fichiers modifiés

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
index 1ba9408..9400a69 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
@@ -613,7 +613,7 @@ describe("V3.1-D2-A QA — public fingerprint/catalog binding (critical)", () =>
 });

 describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
-  it("keeps index.ts limited to the three additive D2-A exports", () => {
+  it("keeps the public boundary limited to adopted D2-A and D2-B exports", () => {
     const source = readFileSync(
       path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
       "utf8",
@@ -623,8 +623,23 @@ describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
     );
     expect(source).toContain('export * from "./domain/catalogFingerprint";');
     expect(source).toContain('export * from "./domain/catalogProjection";');
+    expect(source).toContain(
+      'export * from "./domain/ckcQualificationErrors";',
+    );
+    expect(source).toContain(
+      'export * from "./domain/ckcConsumptionProof";',
+    );
+    expect(source).toContain(
+      'export * from "./ports/ckcQualificationResolver";',
+    );
+    expect(source).toContain(
+      'export * from "./infrastructure/ckcReferenceManifest";',
+    );
+    expect(source).toContain(
+      'export * from "./infrastructure/ckcQualificationResolver";',
+    );
     expect(source).not.toMatch(
-      /ckcQualificationResolver|ConsumptionProof|QualifyCycleBridge|createD2|D2Factory/,
+      /QualifyCycleBridge|qualifyCycleWithCkc|ckcQualificationResult|createD2|D2Factory|createCkcQualificationServices/,
     );
   });

diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
index d611410..b7b4256 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
@@ -2,6 +2,12 @@ import type {
   CycleTypeCkcMapping,
   CycleTypeLifecycleStatus,
 } from "./cycleTypeCatalog";
+import type {
+  CkcFallbackPolicy,
+  CkcLevel,
+  CkcSource,
+  CkcStatus,
+} from "./types";

 /** Read-only context required to select a cycle type from the D1 catalog. */
 export type CatalogSelectionContext = {
@@ -73,3 +79,35 @@ export type CatalogProjectionFailure = {
 export type CatalogProjectionResult =
   | CatalogProjectionSuccess
   | CatalogProjectionFailure;
+
+/** Detailed D2-B state retained alongside the deliberately coarser T-A2 types. */
+export type CkcQualificationDetailedStatus =
+  | "resolved_detailed"
+  | "resolved_synthetic"
+  | "resolved_fallback_synthetic"
+  | "unresolved_invalid_mapping"
+  | "unresolved_unavailable"
+  | "unresolved_catalog_incompatible"
+  | "unresolved_cycle_not_selectable";
+
+/** Immutable output of the D2-B resolver before consumption proof validation. */
+export type CkcQualificationResolution = {
+  readonly cycleTypeId: string;
+  readonly detailedStatus: CkcQualificationDetailedStatus;
+  readonly level: CkcLevel;
+  readonly status: CkcStatus;
+  readonly source: CkcSource;
+  readonly fallbackPolicy: CkcFallbackPolicy;
+  readonly expectedPrimaryReference: string;
+  readonly usedReference?: string;
+  readonly fallbackUsed: boolean;
+  readonly fallbackReference?: string;
+  readonly doctrineStatus: "method-candidate";
+  readonly executionAuthority: false;
+  readonly catalogVersion: string;
+  readonly catalogHash: string;
+  readonly correlationId: string;
+  readonly resolvedAt: string;
+  readonly exploitable: boolean;
+  readonly disclosures: readonly string[];
+};
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 9ad18b7..499b0cb 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -11,6 +11,8 @@ export * from "./domain/invariants";
 export * from "./domain/qualification";
 export * from "./domain/cycleTypeCatalog";
 export * from "./domain/ckcQualificationContracts";
+export * from "./domain/ckcQualificationErrors";
+export * from "./domain/ckcConsumptionProof";
 export * from "./domain/catalogFingerprint";
 export * from "./domain/catalogProjection";

@@ -18,6 +20,7 @@ export * from "./ports/cycleRepository";
 export * from "./ports/trajectoryRepository";
 export * from "./ports/epistemicRepository";
 export * from "./ports/ckcResolver";
+export * from "./ports/ckcQualificationResolver";
 export * from "./ports/cycleAudit";

 export { QualifyCycle } from "./application/qualifyCycle";
@@ -46,6 +49,8 @@ export {
   ConsoleCycleAuditJournal,
   MemoryCycleAuditJournal,
 } from "./infrastructure/observability";
+export * from "./infrastructure/ckcReferenceManifest";
+export * from "./infrastructure/ckcQualificationResolver";

 import type { ClockPort } from "@/lib/oa/doctrine";
 import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
diff --git a/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts b/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
index 06c1b12..fa3875b 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
@@ -78,6 +78,22 @@ export type CycleAuditEvent =
       detailCode?: string;
       durationMs: number;
     }
+  | {
+      event:
+        | "oa.ckc.resolution_started"
+        | "oa.ckc.resolution_succeeded"
+        | "oa.ckc.resolution_failed"
+        | "oa.ckc.fallback_used"
+        | "oa.ckc.consumption_validated"
+        | "oa.ckc.consumption_rejected";
+      ts: string;
+      correlationId: string;
+      cycleTypeId: string;
+      result: "started" | "ok" | "error" | "fallback";
+      detailedStatus?: string;
+      detailCode?: string;
+      durationMs?: number;
+    }
   | {
       event: "oa.cycle.load_failed";
       ts: string;
```

---

# Contenu complet post-correction des fichiers modifiés (sections utiles)

## `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts` (fichier complet)

```typescript
import type {
  CycleTypeCkcMapping,
  CycleTypeLifecycleStatus,
} from "./cycleTypeCatalog";
import type {
  CkcFallbackPolicy,
  CkcLevel,
  CkcSource,
  CkcStatus,
} from "./types";

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

/** Detailed D2-B state retained alongside the deliberately coarser T-A2 types. */
export type CkcQualificationDetailedStatus =
  | "resolved_detailed"
  | "resolved_synthetic"
  | "resolved_fallback_synthetic"
  | "unresolved_invalid_mapping"
  | "unresolved_unavailable"
  | "unresolved_catalog_incompatible"
  | "unresolved_cycle_not_selectable";

/** Immutable output of the D2-B resolver before consumption proof validation. */
export type CkcQualificationResolution = {
  readonly cycleTypeId: string;
  readonly detailedStatus: CkcQualificationDetailedStatus;
  readonly level: CkcLevel;
  readonly status: CkcStatus;
  readonly source: CkcSource;
  readonly fallbackPolicy: CkcFallbackPolicy;
  readonly expectedPrimaryReference: string;
  readonly usedReference?: string;
  readonly fallbackUsed: boolean;
  readonly fallbackReference?: string;
  readonly doctrineStatus: "method-candidate";
  readonly executionAuthority: false;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
  readonly resolvedAt: string;
  readonly exploitable: boolean;
  readonly disclosures: readonly string[];
};
```

## `projects/sfia-studio/app/lib/oa/cycle/index.ts` (fichier complet)

```typescript
/**
 * T-A2 Cycle / Trajectory / Epistemic / CKC Foundation — public barrel.
 *
 * Isolated Option A v3-native module. Consumes T-A1 project + T-A0 doctrine
 * public APIs only. Does not replace d1 / OPS1 / MethodMode. In-memory only.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";
export * from "./domain/qualification";
export * from "./domain/cycleTypeCatalog";
export * from "./domain/ckcQualificationContracts";
export * from "./domain/ckcQualificationErrors";
export * from "./domain/ckcConsumptionProof";
export * from "./domain/catalogFingerprint";
export * from "./domain/catalogProjection";

export * from "./ports/cycleRepository";
export * from "./ports/trajectoryRepository";
export * from "./ports/epistemicRepository";
export * from "./ports/ckcResolver";
export * from "./ports/ckcQualificationResolver";
export * from "./ports/cycleAudit";

export { QualifyCycle } from "./application/qualifyCycle";
export { CreateCycle } from "./application/createCycle";
export { GetCycle } from "./application/getCycle";
export { CreateInitialTrajectory } from "./application/createInitialTrajectory";
export { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
export { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
export {
  ProposeTrajectoryVersion,
  TrajectoryVersionConflictSignal,
} from "./application/proposeTrajectoryVersion";
export { GetEpistemicState } from "./application/getEpistemicState";
export { UpdateEpistemicState } from "./application/updateEpistemicState";
export { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";

export { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
export { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
export { MemoryTrajectoryRepository } from "./infrastructure/memoryTrajectoryRepository";
export { MemoryEpistemicRepository } from "./infrastructure/memoryEpistemicRepository";
export {
  MemoryCkcResolver,
  type CkcRegistryEntry,
} from "./infrastructure/memoryCkcResolver";
export {
  ConsoleCycleAuditJournal,
  MemoryCycleAuditJournal,
} from "./infrastructure/observability";
export * from "./infrastructure/ckcReferenceManifest";
export * from "./infrastructure/ckcQualificationResolver";

import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { ProjectServices } from "@/lib/oa/project";
import { CreateCycle } from "./application/createCycle";
import { CreateInitialTrajectory } from "./application/createInitialTrajectory";
import { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
import { GetCycle } from "./application/getCycle";
import { GetEpistemicState } from "./application/getEpistemicState";
import { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
import { ProposeTrajectoryVersion } from "./application/proposeTrajectoryVersion";
import { QualifyCycle } from "./application/qualifyCycle";
import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
import { UpdateEpistemicState } from "./application/updateEpistemicState";
import { MemoryCkcResolver } from "./infrastructure/memoryCkcResolver";
import { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
import { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
import { MemoryEpistemicRepository } from "./infrastructure/memoryEpistemicRepository";
import { MemoryTrajectoryRepository } from "./infrastructure/memoryTrajectoryRepository";
import {
  ConsoleCycleAuditJournal,
  MemoryCycleAuditJournal,
} from "./infrastructure/observability";
import type { CycleAuditPort } from "./ports/cycleAudit";
import type { CkcResolverPort } from "./ports/ckcResolver";

export type CycleServices = {
  store: MemoryCycleStore;
  cycles: MemoryCycleRepository;
  trajectories: MemoryTrajectoryRepository;
  epistemic: MemoryEpistemicRepository;
  ckc: CkcResolverPort;
  audit: CycleAuditPort;
  qualifyCycle: QualifyCycle;
  createCycle: CreateCycle;
  getCycle: GetCycle;
  createInitialTrajectory: CreateInitialTrajectory;
  getCurrentTrajectory: GetCurrentTrajectory;
  getTrajectoryVersion: GetTrajectoryVersion;
  proposeTrajectoryVersion: ProposeTrajectoryVersion;
  getEpistemicState: GetEpistemicState;
  updateEpistemicState: UpdateEpistemicState;
  resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
};

export type CreateInMemoryCycleServicesOptions = {
  projectServices: ProjectServices;
  clock?: ClockPort;
  audit?: CycleAuditPort;
  ckcResolver?: CkcResolverPort;
};

/** Factory for in-memory Cycle/Trajectory/Epistemic/CKC services. */
export function createInMemoryCycleServices(
  options: CreateInMemoryCycleServicesOptions,
): CycleServices {
  const store = new MemoryCycleStore();
  const cycles = new MemoryCycleRepository(store);
  const trajectories = new MemoryTrajectoryRepository(store);
  const epistemic = new MemoryEpistemicRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleCycleAuditJournal();
  const ckc = options.ckcResolver ?? new MemoryCkcResolver();

  return {
    store,
    cycles,
    trajectories,
    epistemic,
    ckc,
    audit,
    qualifyCycle: new QualifyCycle(clock, audit),
    createCycle: new CreateCycle(
      cycles,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getCycle: new GetCycle(cycles, clock, audit),
    createInitialTrajectory: new CreateInitialTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getCurrentTrajectory: new GetCurrentTrajectory(trajectories, clock, audit),
    getTrajectoryVersion: new GetTrajectoryVersion(trajectories, clock, audit),
    proposeTrajectoryVersion: new ProposeTrajectoryVersion(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getEpistemicState: new GetEpistemicState(epistemic, clock, audit),
    updateEpistemicState: new UpdateEpistemicState(
      epistemic,
      clock,
      audit,
      store,
    ),
    resolveCycleKnowledgeContract: new ResolveCycleKnowledgeContract(
      ckc,
      clock,
      audit,
    ),
  };
}

export function createTestCycleServices(
  options: CreateInMemoryCycleServicesOptions & {
    audit?: MemoryCycleAuditJournal;
    fixedNowIso?: string;
    ckcResolver?: MemoryCkcResolver;
  },
): CycleServices & { audit: MemoryCycleAuditJournal } {
  const audit = options.audit ?? new MemoryCycleAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T06:00:00.000Z"));
  return createInMemoryCycleServices({
    ...options,
    clock,
    audit,
  }) as CycleServices & { audit: MemoryCycleAuditJournal };
}
```

## `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts` (fichier complet)

```typescript
/**
 * Minimal audit/observability sink for T-A2.
 */
export type CycleAuditEvent =
  | {
      event: "oa.cycle.qualified";
      ts: string;
      correlationId?: string;
      recommendedProfile: string;
      result: "ok";
      durationMs?: number;
    }
  | {
      event: "oa.cycle.created";
      ts: string;
      correlationId?: string;
      projectId: string;
      cycleInstanceId: string;
      profile: string;
      status: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.trajectory.created";
      ts: string;
      correlationId?: string;
      projectId: string;
      trajectoryId: string;
      version: number;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.trajectory.version_proposed";
      ts: string;
      correlationId?: string;
      projectId: string;
      trajectoryId: string;
      version: number;
      previousVersion?: number;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.trajectory.version_conflict";
      ts: string;
      correlationId?: string;
      projectId: string;
      trajectoryId: string;
      expectedVersion?: number;
      currentVersion?: number;
      result: "conflict";
      detailCode: "TRAJECTORY_VERSION_CONFLICT";
      durationMs: number;
    }
  | {
      event: "oa.epistemic.updated";
      ts: string;
      correlationId?: string;
      projectId: string;
      itemCount: number;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.ckc.resolved";
      ts: string;
      correlationId?: string;
      cycleTypeId: string;
      level: string;
      status: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event:
        | "oa.ckc.resolution_started"
        | "oa.ckc.resolution_succeeded"
        | "oa.ckc.resolution_failed"
        | "oa.ckc.fallback_used"
        | "oa.ckc.consumption_validated"
        | "oa.ckc.consumption_rejected";
      ts: string;
      correlationId: string;
      cycleTypeId: string;
      result: "started" | "ok" | "error" | "fallback";
      detailedStatus?: string;
      detailCode?: string;
      durationMs?: number;
    }
  | {
      event: "oa.cycle.load_failed";
      ts: string;
      correlationId?: string;
      projectId?: string;
      result: "error";
      detailCode?: string;
      durationMs: number;
    };

export interface CycleAuditPort {
  append(event: CycleAuditEvent): void;
}
```

## `projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts` (fichier complet)

```typescript
/**
 * V3.1-D2-A — Independent QA reinforcement for Catalog Projection.
 * Production and Delivery tests must remain untouched.
 * Evidence of public seam / fingerprint binding defects must stay failing.
 * @vitest-environment node
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  ADOPTED_CYCLE_TYPE_IDS,
  CKC_PILOT_CADRAGE_PATH,
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
    correlationId: "cor:d2-a-qa",
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
  if (result.ok) {
    throw new Error(`Expected failure ${code}, got success`);
  }
  expect(result.error.code).toBe(code);
  expect(result.error.blocking).toBe(true);
  expect(typeof result.error.message).toBe("string");
  expect(result.error.message.length).toBeGreaterThan(0);
  expect(result).not.toHaveProperty("projection");
  expect(result.error).not.toHaveProperty("projection");
  expect(result.error).not.toHaveProperty("ckc");
}

function expectPublicRejectsDivergentCatalog(
  catalog: CycleTypeCatalog,
  cycleTypeId = "cyc:delivery",
): void {
  const result = projectSelectableCycleType(context({ cycleTypeId }), catalog);
  // INV-D2A-11/12: public API must not accept a contractually divergent catalog
  // while still validating the static canonical fingerprint.
  expect(result.ok).toBe(false);
  if (result.ok) {
    throw new Error(
      "Public Catalog Projection accepted a divergent catalog with canonical fingerprint",
    );
  }
}

describe("V3.1-D2-A QA — Catalog Projection nominals", () => {
  it("projects every active adopted cycle type with frozen read-only success", () => {
    for (const cycleTypeId of ADOPTED_CYCLE_TYPE_IDS) {
      const result = projectSelectableCycleType(context({ cycleTypeId }));
      expect(result.ok).toBe(true);
      if (!result.ok) throw new Error(result.error.message);
      const production = CYCLE_TYPE_CATALOG.entries.find(
        (entry) => entry.cycleTypeId === cycleTypeId,
      )!;
      expect(result.projection).toMatchObject({
        cycleTypeId,
        label: production.label,
        shortDescription: production.shortDescription,
        lifecycleStatus: "active",
        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
        catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
        correlationId: "cor:d2-a-qa",
      });
      expect(result.projection.ckc).toEqual(production.ckc);
      expect(Object.isFrozen(result)).toBe(true);
      expect(Object.isFrozen(result.projection)).toBe(true);
      expect(Object.isFrozen(result.projection.ckc)).toBe(true);
      expect(result.projection).not.toHaveProperty("profile");
      expect(result.projection).not.toHaveProperty("recommendedProfile");
      expect(result.projection).not.toHaveProperty("gate");
      expect(result.projection).not.toHaveProperty("consumed");
      expect(result.projection).not.toHaveProperty("isMorrisDecision");
    }
  });
});

describe("V3.1-D2-A QA — fail-closed priority and exact variants", () => {
  it("rejects empty/whitespace correlationId before other checks", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          correlationId: "   ",
          catalogVersion: "wrong",
          catalogHash: "wrong",
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_CORRELATION_ID_REQUIRED",
    );
  });

  it("rejects incompatible version before fingerprint", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          catalogVersion: "stale",
          catalogHash: "wrong",
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_VERSION_INCOMPATIBLE",
    );
  });

  it("rejects stale fingerprint before type lookup", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          catalogHash: `sha256:${"0".repeat(64)}`,
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_FINGERPRINT_STALE",
    );
  });

  it("rejects unknown type before lifecycle/mapping", () => {
    expectFailure(
      projectSelectableCycleType(context({ cycleTypeId: "cyc:unknown" })),
      "CYCLE_TYPE_UNKNOWN",
    );
  });

  it.each([
    ["version whitespace", { catalogVersion: ` ${CYCLE_TYPE_CATALOG_VERSION}` }],
    ["version case", { catalogVersion: CYCLE_TYPE_CATALOG_VERSION.toUpperCase() }],
    [
      "version suffix",
      { catalogVersion: `${CYCLE_TYPE_CATALOG_VERSION}-extra` },
    ],
  ] as const)("rejects version variant: %s", (_label, overrides) => {
    expectFailure(
      projectSelectableCycleType(context(overrides)),
      "CATALOG_VERSION_INCOMPATIBLE",
    );
  });

  it.each([
    [
      "hash whitespace",
      { catalogHash: ` ${CYCLE_TYPE_CATALOG_FINGERPRINT}` },
    ],
    [
      "hash uppercase",
      { catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT.toUpperCase() },
    ],
    ["hash wrong prefix", { catalogHash: `md5:${"a".repeat(64)}` }],
    ["hash short", { catalogHash: `sha256:${"a".repeat(63)}` }],
  ] as const)("rejects fingerprint variant: %s", (_label, overrides) => {
    expectFailure(
      projectSelectableCycleType(context(overrides)),
      "CATALOG_FINGERPRINT_STALE",
    );
  });

  it("rejects empty cycleTypeId and propagates valid correlationId on failure", () => {
    const result = projectSelectableCycleType(context({ cycleTypeId: "" }));
    expectFailure(result, "CYCLE_TYPE_UNKNOWN");
    if (!result.ok) {
      expect(result.error.correlationId).toBe("cor:d2-a-qa");
    }
  });
});

describe("V3.1-D2-A QA — lifecycle and mapping negatives", () => {
  it.each(["deprecated", "unavailable", "future-status"] as const)(
    "rejects lifecycle %s",
    (lifecycleStatus) => {
      const catalog = cloneCatalog((entries) => {
        entries[7] = {
          ...entries[7],
          lifecycleStatus:
            lifecycleStatus as CycleTypeDefinition["lifecycleStatus"],
        };
      });
      const result = projectSelectableCycleType(context(), catalog);
      expectFailure(result, "CYCLE_TYPE_NOT_SELECTABLE");
    },
  );

  it("rejects mandatory=false", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: { ...entries[7].ckc, mandatory: false as unknown as true },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects unknown primaryLevel", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          primaryLevel: "unknown" as "synthetic",
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects empty/whitespace primaryReference", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: { ...entries[7].ckc, primaryReference: "  " },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects executionAuthority=true", () => {
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

  it("rejects detailed mappings without canonical fallback", () => {
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

  it("rejects detailed with wrong fallbackPolicy or fallbackReference", () => {
    const wrongPolicy = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: { ...entries[0].ckc, fallbackPolicy: "none" },
      };
    });
    expectFailure(
      projectSelectableCycleType(
        context({ cycleTypeId: "cyc:framing" }),
        wrongPolicy,
      ),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const wrongRef = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: {
          ...entries[0].ckc,
          fallbackReference:
            "method/wrong.md" as typeof CKC_SYNTHETIC_MAP_PATH,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(
        context({ cycleTypeId: "cyc:framing" }),
        wrongRef,
      ),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference", () => {
    const badPrimary = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          primaryReference: "method/non-canonical.md",
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), badPrimary),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const badPolicy = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: { ...entries[7].ckc, fallbackPolicy: "synthetic_map" },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), badPolicy),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const badFallback = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), badFallback),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const emptyFallback = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          fallbackReference: "" as unknown as typeof CKC_SYNTHETIC_MAP_PATH,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), emptyFallback),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects extended mapping properties", () => {
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
});

describe("V3.1-D2-A QA — error contract", () => {
  it("covers the six documented error codes with blocking safe failures", () => {
    const cases: Array<[CatalogProjectionErrorCode, () => ReturnType<typeof projectSelectableCycleType>]> =
      [
        [
          "CATALOG_CORRELATION_ID_REQUIRED",
          () => projectSelectableCycleType(context({ correlationId: "" })),
        ],
        [
          "CATALOG_VERSION_INCOMPATIBLE",
          () => projectSelectableCycleType(context({ catalogVersion: "x" })),
        ],
        [
          "CATALOG_FINGERPRINT_STALE",
          () =>
            projectSelectableCycleType(
              context({ catalogHash: `sha256:${"1".repeat(64)}` }),
            ),
        ],
        [
          "CYCLE_TYPE_UNKNOWN",
          () =>
            projectSelectableCycleType(context({ cycleTypeId: "cyc:missing" })),
        ],
        [
          "CYCLE_TYPE_NOT_SELECTABLE",
          () =>
            projectSelectableCycleType(
              context(),
              cloneCatalog((entries) => {
                entries[7] = { ...entries[7], lifecycleStatus: "deprecated" };
              }),
            ),
        ],
        [
          "CYCLE_TYPE_MAPPING_INVALID",
          () =>
            projectSelectableCycleType(
              context(),
              cloneCatalog((entries) => {
                entries[7] = {
                  ...entries[7],
                  ckc: {
                    ...entries[7].ckc,
                    executionAuthority: true as unknown as false,
                  },
                };
              }),
            ),
        ],
      ];

    for (const [code, run] of cases) {
      const result = run();
      expectFailure(result, code);
      if (!result.ok) {
        expect(Object.isFrozen(result)).toBe(true);
        expect(Object.isFrozen(result.error)).toBe(true);
      }
    }
  });

  it("documents retryable/recoverable classification for catalog stale errors", () => {
    const version = projectSelectableCycleType(
      context({ catalogVersion: "wrong" }),
    );
    const hash = projectSelectableCycleType(
      context({ catalogHash: `sha256:${"2".repeat(64)}` }),
    );
    expect(version.ok).toBe(false);
    expect(hash.ok).toBe(false);
    if (!version.ok && !hash.ok) {
      expect(version.error.retryable).toBe(true);
      expect(hash.error.retryable).toBe(true);
      expect(version.error.recoverable).toBe(true);
      expect(hash.error.recoverable).toBe(true);
    }
  });
});

describe("V3.1-D2-A QA — public fingerprint/catalog binding (critical)", () => {
  it("exposes the catalog seam on the public API signature", () => {
    // JS Function.length ignores parameters with defaults; inspect source instead.
    const source = readFileSync(
      path.resolve(
        __dirname,
        "../../../lib/oa/cycle/domain/catalogProjection.ts",
      ),
      "utf8",
    );
    expect(source).toMatch(
      /export function projectSelectableCycleType\(\s*context: CatalogSelectionContext,\s*catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,/,
    );
    const indexSource = readFileSync(
      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
      "utf8",
    );
    expect(indexSource).toContain(
      'export * from "./domain/catalogProjection";',
    );
  });

  it("rejects a catalog with modified canonicalKey under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        canonicalKey: `${entries[7].canonicalKey}-divergent`,
      };
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });

  it("rejects a catalog with modified methodCycleNumber under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = { ...entries[7], methodCycleNumber: 99 };
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });

  it("rejects a catalog with swapped still-valid contractual CKC mapping", () => {
    const catalog = cloneCatalog((entries) => {
      // Convert synthetic delivery into a still-valid detailed mapping that
      // differs from the authoritative D1 contract for cyc:delivery.
      entries[7] = {
        ...entries[7],
        ckc: {
          mandatory: true,
          primaryLevel: "detailed",
          primaryReference: CKC_PILOT_CADRAGE_PATH,
          fallbackPolicy: "synthetic_map",
          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
          executionAuthority: false,
          doctrineStatus: "method-candidate",
          unavailableBehavior: "fail-closed",
        },
      };
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    const result = projectSelectableCycleType(context(), catalog);
    expect(result.ok).toBe(false);
    if (result.ok) {
      // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.
      expect(result.projection.ckc.primaryLevel).not.toBe("detailed");
    }
  });

  it("rejects a reordered catalog under canonical fingerprint", () => {
    const catalog: CycleTypeCatalog = {
      version: CYCLE_TYPE_CATALOG_VERSION,
      entries: [
        ...CYCLE_TYPE_CATALOG.entries.slice(1, 2),
        ...CYCLE_TYPE_CATALOG.entries.slice(0, 1),
        ...CYCLE_TYPE_CATALOG.entries.slice(2),
      ].map((entry) => ({
        ...entry,
        ckc: { ...entry.ckc },
        aliases: [...entry.aliases],
      })),
    };
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog, "cyc:framing");
  });

  it("rejects a catalog with an extra entry under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries.push({
        ...entries[0],
        cycleTypeId: "cyc:extra-qa",
        canonicalKey: "extra-qa",
        methodCycleNumber: 16,
        displayOrder: 16,
      });
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });

  it("rejects a catalog missing an entry under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries.splice(14, 1);
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });
});

describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
  it("keeps the public boundary limited to adopted D2-A and D2-B exports", () => {
    const source = readFileSync(
      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
      "utf8",
    );
    expect(source).toContain(
      'export * from "./domain/ckcQualificationContracts";',
    );
    expect(source).toContain('export * from "./domain/catalogFingerprint";');
    expect(source).toContain('export * from "./domain/catalogProjection";');
    expect(source).toContain(
      'export * from "./domain/ckcQualificationErrors";',
    );
    expect(source).toContain(
      'export * from "./domain/ckcConsumptionProof";',
    );
    expect(source).toContain(
      'export * from "./ports/ckcQualificationResolver";',
    );
    expect(source).toContain(
      'export * from "./infrastructure/ckcReferenceManifest";',
    );
    expect(source).toContain(
      'export * from "./infrastructure/ckcQualificationResolver";',
    );
    expect(source).not.toMatch(
      /QualifyCycleBridge|qualifyCycleWithCkc|ckcQualificationResult|createD2|D2Factory|createCkcQualificationServices/,
    );
  });

  it("keeps production projection free of D2-B/C and runtime I/O imports", () => {
    for (const relative of [
      "ckcQualificationContracts.ts",
      "catalogFingerprint.ts",
      "catalogProjection.ts",
    ]) {
      const source = readFileSync(
        path.resolve(__dirname, `../../../lib/oa/cycle/domain/${relative}`),
        "utf8",
      );
      expect(source).not.toMatch(/node:crypto|node:fs|from ["']next/);
      expect(source).not.toMatch(/infrastructure\//);
      expect(source).not.toMatch(
        /QualifyCycle|ResolveCycleKnowledgeContract|CkcResolverPort|CycleAuditEvent|CreateCycle|consumed|recommendedProfile|isMorrisDecision/,
      );
    }
  });

  it("does not mutate production catalog entries across calls", () => {
    const before = serializeCatalogFingerprint();
    const first = CYCLE_TYPE_CATALOG.entries[0];
    const firstCkc = first.ckc;
    projectSelectableCycleType(context());
    projectSelectableCycleType(context({ cycleTypeId: "cyc:framing" }));
    expect(serializeCatalogFingerprint()).toBe(before);
    expect(CYCLE_TYPE_CATALOG.entries[0]).toBe(first);
    expect(CYCLE_TYPE_CATALOG.entries[0].ckc).toBe(firstCkc);
    expect(Object.isFrozen(CYCLE_TYPE_CATALOG)).toBe(true);
    expect(Object.isFrozen(first)).toBe(true);
    expect(Object.isFrozen(firstCkc)).toBe(true);
  });
});
```

---

# Extraits de logs de validation

## Corrective QA

```

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 7ms

 Test Files  1 passed (1)
      Tests  37 passed (37)
   Start at  22:21:13
   Duration  354ms (transform 93ms, setup 49ms, collect 130ms, tests 7ms, environment 0ms, prepare 34ms)

```

## D2-B

```

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/ckcReferenceManifest.test.ts __tests__/oa/cycle/ckcQualificationResolver.test.ts __tests__/oa/cycle/ckcConsumptionProof.test.ts __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/ckcReferenceManifest.test.ts (5 tests) 2ms
 ✓ __tests__/oa/cycle/ckcConsumptionProof.test.ts (5 tests) 3ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (6 tests) 3ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.test.ts (10 tests) 3ms

 Test Files  4 passed (4)
      Tests  26 passed (26)
   Start at  22:21:16
   Duration  300ms (transform 129ms, setup 105ms, collect 512ms, tests 10ms, environment 0ms, prepare 115ms)

```

## D2-A

```

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts __tests__/oa/cycle/catalogFingerprint.qa.test.ts __tests__/oa/cycle/catalogProjection.test.ts __tests__/oa/cycle/catalogProjection.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 3ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 4ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 4ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 10ms

 Test Files  4 passed (4)
      Tests  86 passed (86)
   Start at  22:21:17
   Duration  480ms (transform 248ms, setup 108ms, collect 1.16s, tests 22ms, environment 0ms, prepare 145ms)

```

## oa/cycle

```

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 8ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.test.ts (10 tests) 4ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 4ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 5ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 6ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 12ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 20ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (6 tests) 5ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 164ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 161ms
 ✓ __tests__/oa/cycle/ckcConsumptionProof.test.ts (5 tests) 3ms
 ✓ __tests__/oa/cycle/ckcReferenceManifest.test.ts (5 tests) 3ms

 Test Files  12 passed (12)
      Tests  206 passed (206)
   Start at  22:21:21
   Duration  635ms (transform 356ms, setup 384ms, collect 2.05s, tests 394ms, environment 1ms, prepare 459ms)

```

## suite complète

```
stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > analyze-only and cancel produce no mutation
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T20:21:31.578Z","status":"ANALYZE_ONLY","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_analyze_only_completed","ts":"2026-08-02T20:21:31.578Z","status":"NO_MUTATION","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T20:21:31.578Z","status":"CANCEL","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_cancelled","ts":"2026-08-02T20:21:31.578Z","status":"CANCELLED","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T20:21:31.582Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T20:21:31.582Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":0,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}

 ✓ __tests__/d1/intake-c4.test.ts (10 tests) 34ms
 ✓ __tests__/status-pill.test.tsx (1 test) 13ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 14ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 3ms
 ✓ __tests__/fixtures.test.ts (2 tests) 3ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 1ms
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 2878ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1670ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 2831ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  573ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  625ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  384ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  301ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  301ms

 Test Files  98 passed (98)
      Tests  939 passed (939)
   Start at  22:21:25
   Duration  7.03s (transform 2.75s, setup 3.41s, collect 12.16s, tests 18.59s, environment 5.74s, prepare 4.02s)

```

## typecheck

```

> sfia-studio@0.1.0 typecheck
> tsc --noEmit

```

## lint

```

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
```

## build

```
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

```

---

# État Git final

```
BRANCH=delivery/sfia-studio-v3-1-d2-b-ckc-resolver
HEAD=bb685f1205b33f887ee27b42ac918c96386a6e33
MAIN=bb685f1205b33f887ee27b42ac918c96386a6e33
ORIGIN_MAIN=bb685f1205b33f887ee27b42ac918c96386a6e33
MAIN_DIV=0/0
UPSTREAM=<none>
REMOTE_D2B=absent
STAGED=empty
INITIAL_FULL_DIFF_SHA256=61384b040499d937f04cab94c385d2668ee4e7b00f3f3401dd8302d243b44be9
D2B_ORIGINAL_12_FILES_CONTENT_SHA256=e904b0d8ee0ed714f95043a4ffcf72e401a6400187f32969b7b9a76777dca3a3
FULL_13_FILES_DIFF_SHA256=3379ac64a4d093577de7de2c562338c9d140fea958030396bb7f980e6683070b
GIT_DIFF_SHA256_POST=c6bd46e6c0cc38de1aaa61c048269f064832c0e4c768bcdda2f0a9724caf21f5
HANDOFF_PRE_TIP=605cacb5c0eaa53bbe2038b981934b2b63f8a457
HANDOFF_PRE_BLOB=4683014a05343b1b671422ef3fc92b7d98c8cf09
FILE_COUNT_INITIAL=12
FILE_COUNT_FINAL=13
DIFF_CHECK=PASS
PROTECTED_DIFF_BYTES=0
```
