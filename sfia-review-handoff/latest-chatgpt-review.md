# Review Pack Full — SFIA Studio V3.1-D2-B — QA Validation

- Date/heure/fuseau: 2026-08-02 22:50:00 CEST (+0200)
- Rôle: Cursor QA
- Cycle: 9 — QA / validation
- Profil: Critical
- Typologie: INC
- CKC: pilots/04-qa-validation.md candidate v0.1.0 — aucune autorité d'exécution
- Template: prompts/templates/sfia-cycle-execution-template.md

## Gate Morris

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

## Justification Critical

Composant contrôlant l'admissibilité CKC, fail-closed, executionAuthority=false, consumed=true, distinction primary/fallback, adaptation T-A2 et frontières publiques anti-D2-C.

## Git Truth initial

- branche `delivery/sfia-studio-v3-1-d2-b-ckc-resolver`
- HEAD=main=origin/main=`bb685f1205b33f887ee27b42ac918c96386a6e33`
- upstream absent ; remote D2-B absente ; staged vide ; 13 fichiers
- handoff source tip `24d42a5017a445f741b9490de601896378899ba8` blob `e09bdbd7d140b64afadcc92ce21b5de029ebaf4b`
- archive corrective préservée blob = `e09bdbd7d140b64afadcc92ce21b5de029ebaf4b`

## Empreintes (méthodes corrective documentées)

| Empreinte | Valeur | Avant QA | Après QA |
|---|---|---|---|
| D2B_ORIGINAL_12_FILES_CONTENT_SHA256 | `e904b0d8ee0ed714f95043a4ffcf72e401a6400187f32969b7b9a76777dca3a3` | OK | OK |
| FULL_13_FILES_DIFF_SHA256 | `3379ac64a4d093577de7de2c562338c9d140fea958030396bb7f980e6683070b` | OK | OK |
| GIT_DIFF_SHA256 | `c6bd46e6c0cc38de1aaa61c048269f064832c0e4c768bcdda2f0a9724caf21f5` | OK | OK |

Méthode 12: `shasum -a 256` de chaque path trié, puis `shasum -a 256` du flux.
Méthode 13: `git diff` des 4 fichiers modifiés + `BEGIN/cat/END` des 9 non suivis, puis `shasum -a 256`.
Méthode tracked: `git diff | shasum -a 256`.

## Inventaire treize fichiers

1. `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts`
2. `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts`
3. `projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts`
4. `projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts`
5. `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts`
6. `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts`
7. `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts`
8. `projects/sfia-studio/app/lib/oa/cycle/index.ts`
9. `projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts`
10. `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts`
11. `projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts`
12. `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts`
13. `projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts`

## Gel du package

Confirmé avant, pendant et après validations: 13 fichiers, hashes identiques, staged vide, aucune mutation versionnée.

## Résultats techniques

| Contrôle | Résultat |
|---|---|
| catalogProjection.qa | 37/37 PASS |
| D2-B ciblés | 26/26 PASS |
| D2-A | 86/86 PASS |
| oa/cycle | 206/206 PASS |
| typecheck | PASS |
| lint (sans --fix) | PASS |
| suite complète | 939/939 PASS |
| build | PASS |
| git diff --check | PASS |

## Audit failure policy

Les documents 16–19 exigent des événements minimaux mais **ne définissent pas** fail-closed vs best-effort si `CycleAuditPort.append` lève.
Comportement observé: throw non contrôlé au `resolution_started` (hors try) avec message non sanitizé.
→ **MORRIS ARBITRATION REQUIRED** + finding F-QA-04 MAJOR.

## Probes QA

Exécutées via `vite-node` (Vitest include limité à `__tests__/**` — limite de campagne, contournée sans modifier la config projet).

```
[PROBE] P1_foreign_entry: RESOLVER_ACCEPTS | validatorUnknown=true
[PROBE] P2_missing_nonselected: RESOLVER_ACCEPTS | validatorMissing=true
[PROBE] P3_duplicate_find: RESOLVER_ACCEPTS_FIRST | validatorDuplicate=true; status=resolved_detailed
[PROBE] P4_non_iso_resolvedAt: ACCEPTS
[PROBE] P5_fallback_no_disclosure: PROOF_ACCEPTS_CONSUMED_TRUE
[PROBE] P6_nonfallback_with_disclosure: PROOF_ACCEPTS
[PROBE] P7_incoherent_fallbackPolicy: PROOF_ACCEPTS
[PROBE] P8_audit_throw_started: UNCONTROLLED_THROW | /Users/secret/path.md should not leak
[PROBE] P9_invalid_metadata_nonselected: RESOLVER_ACCEPTS | validatorInvalid=true
[PROBE] P10_reorder_determinism: EQUAL

PROBE_SUMMARY_JSON=[
  {
    "id": "P1_foreign_entry",
    "observed": "RESOLVER_ACCEPTS",
    "detail": "validatorUnknown=true"
  },
  {
    "id": "P2_missing_nonselected",
    "observed": "RESOLVER_ACCEPTS",
    "detail": "validatorMissing=true"
  },
  {
    "id": "P3_duplicate_find",
    "observed": "RESOLVER_ACCEPTS_FIRST",
    "detail": "validatorDuplicate=true; status=resolved_detailed"
  },
  {
    "id": "P4_non_iso_resolvedAt",
    "observed": "ACCEPTS"
  },
  {
    "id": "P5_fallback_no_disclosure",
    "observed": "PROOF_ACCEPTS_CONSUMED_TRUE"
  },
  {
    "id": "P6_nonfallback_with_disclosure",
    "observed": "PROOF_ACCEPTS"
  },
  {
    "id": "P7_incoherent_fallbackPolicy",
    "observed": "PROOF_ACCEPTS"
  },
  {
    "id": "P8_audit_throw_started",
    "observed": "UNCONTROLLED_THROW",
    "detail": "/Users/secret/path.md should not leak"
  },
  {
    "id": "P9_invalid_metadata_nonselected",
    "observed": "RESOLVER_ACCEPTS",
    "detail": "validatorInvalid=true"
  },
  {
    "id": "P10_reorder_determinism",
    "observed": "EQUAL"
  }
]

```

## Findings

# Findings QA — V3.1-D2-B

## F-QA-01 — MAJOR — Disclosure fallback absente mais consumed=true
- Preuve: probe P5 `PROOF_ACCEPTS_CONSUMED_TRUE`
- Code: `ckcConsumptionProof.ts` `isProjectionConsistent` n'exige pas `CKC_FALLBACK_USED` pour `resolved_fallback_synthetic`
- Contrat: doc 16 AC-D2-FD-03 / matrice QA BL-D2-B-05

## F-QA-02 — MAJOR — Disclosure fallback acceptée hors fallback
- Preuve: probe P6 `PROOF_ACCEPTS`
- Code: disclosures copiées sans contrôle de cohérence statut/disclosure

## F-QA-03 — MAJOR — fallbackPolicy incohérente acceptée par la preuve
- Preuve: probe P7 `PROOF_ACCEPTS`
- Code: aucune comparaison `resolution.fallbackPolicy` ↔ mapping projeté

## F-QA-04 — MAJOR — Exception audit non contrôlée + fuite possible de message
- Preuve: probe P8 `UNCONTROLLED_THROW` avec message contenant `/Users/secret/path.md`
- Code: `resolution_started` émis hors `try` (`ckcQualificationResolver.ts` L136 avant L138)
- Politique audit: **non définie** dans docs 16–19 → MORRIS ARBITRATION REQUIRED sur fail-closed vs best-effort ; comportement actuel = throw non encapsulé

## F-QA-05 — MAJOR — Manifest globalement incohérent accepté par le resolver
- Preuves: P1 foreign ACCEPTS, P2 missing ACCEPTS, P3 duplicate ACCEPTS_FIRST, P9 invalid metadata non-selected ACCEPTS
- Code: `validateCkcReferenceManifest` n'est jamais appelé par `CkcQualificationResolver.resolve` ; lookup via `Array.find`
- Le validateur détecte correctement ; le resolver ne le consomme pas
- Note: allowlist des références sélectionnées utilise le manifest canonique, donc une référence primaire arbitraire reste bloquée ; le trou concerne les manifests injectés globalement incohérents

## F-QA-06 — MAJOR — resolvedAt déclaré ISO non validé
- Preuve: P4 `ACCEPTS` pour `not-an-iso-timestamp`
- Code: seul `resolvedAt.trim()` est vérifié
- Contrat port Delivery: `resolvedAt : string ISO`

## Mineurs / réserves
- M-QA-01 MINOR: déterminisme OK sous réordonnancement (P10 EQUAL)
- M-QA-02 MINOR: Vitest include limité à `__tests__/**` — probes exécutées via vite-node temporaire
- Les parcours nominaux Delivery + tests versionnés restent verts ; les gaps portent sur invariants de pureté/proof et composition injectée


## Story matrix

# Matrice story BL-D2-B-01…06

## BL-D2-B-01 Manifest
- Canonical 5 refs / 4 detailed / 1 synthetic: OUI (code+tests)
- Validator pure: OUI (`validateCkcReferenceManifest`)
- Consommation runtime par resolver: NON → F-QA-05
- Gel Object.freeze: OUI
- I/O/Markdown: absents

## BL-D2-B-02 Port
- Port distinct synchrone: OUI
- Outcome discriminé sans proof en échec: OUI (tests)
- Pas de QualifyCycle/CreateCycle: OUI

## BL-D2-B-03 Resolver
- Detailed/synthetic/fallback nominaux: OUI (tests 26/26)
- Fail-closed mapping/authority/unavailable: OUI (tests)
- Manifest injecté global: NON fail-closed → F-QA-05
- Audit throw: NON contrôlé au start → F-QA-04
- Déterminisme ordre: OUI (P10)

## BL-D2-B-04 Erreurs/T-A2
- Codes doc 16: OUI
- Messages sûrs factory: OUI
- Enums T-A2 non modifiés: OUI
- Mapping états: OUI sur chemins resolver

## BL-D2-B-05 Proof
- Succès nominaux: OUI
- Mismatches identité: OUI (tests)
- Disclosure/fallbackPolicy: NON → F-QA-01/02/03
- consumed=true seulement via builder succès: OUI pour outcome port ; MAIS builder peut accepter résolution artisanale incohérente → F-QA-01

## BL-D2-B-06 Events
- 6 events additifs + historique: OUI
- Emission adapter: OUI
- Audit failure policy: indéfinie → F-QA-04 / arbitrage


## Negative matrix

# Matrice négative

| Scénario | Attendu QA | Observé | Sévérité |
|---|---|---|---|
| Manifest foreign extra | refuse ou validator consommé | resolver ACCEPTS | MAJOR |
| Manifest missing non-selected | refuse ou validator consommé | ACCEPTS | MAJOR |
| Duplicate find | refuse | ACCEPTS first | MAJOR |
| Non-ISO resolvedAt | refuse si ISO contractuel | ACCEPTS | MAJOR |
| Fallback proof sans disclosure | refuse | consumed=true | MAJOR |
| Non-fallback + disclosure | refuse | ACCEPTS | MAJOR |
| fallbackPolicy incoherent | refuse | ACCEPTS | MAJOR |
| Audit throw started | fail-closed ou best-effort documenté | UNCONTROLLED_THROW | MAJOR + arbitrage |
| Invalid metadata non-selected | refuse global | ACCEPTS | MAJOR |
| Reorder determinism | equal | EQUAL | OK |
| executionAuthority=true | refuse | refuse (tests) | OK |
| primary+fallback unavailable | CKC_UNAVAILABLE | OK (tests) | OK |
| synthetic unavailable | CKC_SYNTHETIC_INVALID | OK (tests) | OK |


## Import boundaries

```
Import boundary scan (production D2-B files):
QualifyCycle / CreateCycle / MemoryCkcResolver / ResolveCycleKnowledgeContract /
node:fs / node:crypto / randomBytes / next/ / React / requestedProfile /
recommendedProfile / qualifyCycleWithCkc / ckcQualificationResult /
createCkcQualificationServices / createD2 / D2Factory / QualifyCycleBridge /
readFile / fetch : NO MATCHES in production package files.

Public boundary phase-aware test present and green (37/37).
D2-A production isolation test unchanged and green.

```

## Claims interdits

- tests verts ≠ absence de bug
- QA FAIL ≠ correction effectuée
- package local ≠ PR ready
- D2-B ≠ D2-C ouvert

## Rollback

Aucun commit. Package inchangé. Aucune mutation à annuler.

## Gate suivant candidat

```
GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D2-B CKC RESOLVER —
ADDRESS ONLY THE CLASSIFIED QA FINDINGS —
PRESERVE THE VALIDATED D2-B SCOPE UNLESS A DISTINCT MORRIS ARBITRATION IS REQUIRED —
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
V3.1-D2-B CKC RESOLVER QA FAIL —
BLOCKING OR MAJOR QA FINDINGS DETECTED —
PACKAGE NOT ELIGIBLE FOR PR READINESS —
RETURN TO DISTINCT DELIVERY CORRECTIVE GATE —
NO PROJECT CORRECTION EXECUTED —
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

# Contenu complet des neuf fichiers créés

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

# Contenu complet des quatre fichiers modifiés

## `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts`

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

## `projects/sfia-studio/app/lib/oa/cycle/index.ts`

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

## `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts`

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

## `projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts`

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

# Logs validations (extrait)

```
=== 1 catalogProjection.qa ===

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 7ms

 Test Files  1 passed (1)
      Tests  37 passed (37)
   Start at  22:48:32
   Duration  363ms (transform 94ms, setup 50ms, collect 126ms, tests 7ms, environment 0ms, prepare 39ms)

=== 2 D2-B ===
> vitest run __tests__/oa/cycle/ckcReferenceManifest.test.ts __tests__/oa/cycle/ckcQualificationResolver.test.ts __tests__/oa/cycle/ckcConsumptionProof.test.ts __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/ckcReferenceManifest.test.ts (5 tests) 2ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (6 tests) 3ms
 ✓ __tests__/oa/cycle/ckcConsumptionProof.test.ts (5 tests) 3ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.test.ts (10 tests) 3ms

 Test Files  4 passed (4)
      Tests  26 passed (26)
   Start at  22:48:33
   Duration  301ms (transform 123ms, setup 107ms, collect 512ms, tests 10ms, environment 0ms, prepare 109ms)

=== 3 D2-A ===
> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts __tests__/oa/cycle/catalogFingerprint.qa.test.ts __tests__/oa/cycle/catalogProjection.test.ts __tests__/oa/cycle/catalogProjection.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 4ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 3ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 5ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 10ms

 Test Files  4 passed (4)
      Tests  86 passed (86)
   Start at  22:48:33
   Duration  327ms (transform 151ms, setup 110ms, collect 578ms, tests 22ms, environment 0ms, prepare 122ms)

=== 4 oa/cycle ===
 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 7ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 5ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 4ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.test.ts (10 tests) 4ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 12ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 16ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 16ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (6 tests) 7ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 111ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 165ms
 ✓ __tests__/oa/cycle/ckcReferenceManifest.test.ts (5 tests) 2ms
 ✓ __tests__/oa/cycle/ckcConsumptionProof.test.ts (5 tests) 2ms

 Test Files  12 passed (12)
      Tests  206 passed (206)
   Start at  22:48:34
   Duration  639ms (transform 415ms, setup 521ms, collect 1.80s, tests 349ms, environment 1ms, prepare 482ms)

=== 5 typecheck ===

> sfia-studio@0.1.0 typecheck
> tsc --noEmit

=== 6 lint ===

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
=== 7 full suite ===
 ✓ __tests__/d1/project-foundation.test.ts (7 tests) 23ms
stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T20:48:52.920Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T20:48:52.920Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":1,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}

 ✓ __tests__/d1/intake-c4.test.ts (10 tests) 41ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 17ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 2ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 2ms
 ✓ __tests__/fixtures.test.ts (2 tests) 3ms
 ✓ __tests__/status-pill.test.tsx (1 test) 16ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 2960ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  624ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  631ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  461ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  309ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  308ms
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 3088ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1870ms

 Test Files  98 passed (98)
      Tests  939 passed (939)
   Start at  22:48:46
   Duration  7.14s (transform 2.81s, setup 3.45s, collect 12.29s, tests 19.06s, environment 6.16s, prepare 3.87s)

=== 8 build ===

> sfia-studio@0.1.0 build
> next build

   ▲ Next.js 15.5.20

   Creating an optimized production build ...
 ✓ Compiled successfully in 948ms
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


```

---

# État Git final

```
BRANCH=delivery/sfia-studio-v3-1-d2-b-ckc-resolver
HEAD=bb685f1205b33f887ee27b42ac918c96386a6e33
MAIN=bb685f1205b33f887ee27b42ac918c96386a6e33
ORIGIN_MAIN=bb685f1205b33f887ee27b42ac918c96386a6e33
DIV=0/0
UPSTREAM=<none>
REMOTE_D2B=absent
STAGED=empty
FILE_COUNT=13
D2B_ORIGINAL_12_FILES_CONTENT_SHA256=e904b0d8ee0ed714f95043a4ffcf72e401a6400187f32969b7b9a76777dca3a3
FULL_13_FILES_DIFF_SHA256=3379ac64a4d093577de7de2c562338c9d140fea958030396bb7f980e6683070b
GIT_DIFF_SHA256=c6bd46e6c0cc38de1aaa61c048269f064832c0e4c768bcdda2f0a9724caf21f5
HASH_METHODS=documented corrective inventory (sorted content sha for 12; git diff of 4 modified + BEGIN/END cat of 9 untracked for 13; git diff for tracked)
PACKAGE_FROZEN_THROUGH_QA=yes
HANDOFF_PRE_TIP=24d42a5017a445f741b9490de601896378899ba8
HANDOFF_PRE_BLOB=e09bdbd7d140b64afadcc92ce21b5de029ebaf4b
PACKAGE_MUTATION=no
PROJECT_COMMIT=no
PROJECT_PUSH=no
PROJECT_PR=no
```
