# SFIA Studio V3.1-D2-B F-QA-01…06 — Delivery corrective Full Review Pack

- **Date/heure/fuseau:** 2026-08-02 23:17:36 CEST (+0200)
- **Rôle:** Cursor Delivery corrective
- **Cycle:** 8 — Delivery / implémentation
- **Profil:** Critical
- **Typologie:** INC
- **Template:** prompts/templates/sfia-cycle-execution-template.md
- **CKC fallback:** method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md — method-candidate — experimental cognitive guidance — no execution authority
- **Anti-claims:** correction locale ≠ QA validée ; tests verts ≠ PR ready ; fail-closed ≠ observabilité prod ; package corrigé ≠ D2-C ouvert ; aucune promotion méthode

## Gate Morris consommé

```
GO MORRIS DECISION SFIA STUDIO V3.1-D2-B AUDIT FAILURE POLICY —
ADOPT FAIL-CLOSED —
ANY CYCLEAUDITPORT.APPEND FAILURE MUST RETURN A SAFE STRUCTURED D2-B FAILURE —
NO RAW AUDIT EXCEPTION MAY CROSS THE PORT —
NO CONSUMED TRUE PROOF MAY BE EXPOSED AFTER AUDIT FAILURE —
NO RECURSIVE AUDIT ATTEMPT ON THE FAILING SINK —
AUTHORIZE A DISTINCT DELIVERY CORRECTIVE CYCLE FOR F-QA-01…06 —
NO COMMIT — NO PUSH — NO PR — NO D2-C — NO D2-D — NO D3 — NO METHOD PROMOTION
```

**Date/heure GO:** 2026-08-02 23:06 CEST (+0200)

## Décision FAIL-CLOSED adoptée (Morris)

- audit undefined → aucun événement ; résolution pure autorisée
- audit présent + append throw (tout événement) → intercept unknown → ok=false → D2_INTERNAL_ERROR → blocking=true → retryable=true → recoverable=true → message public générique stable sanitizé → correlationId/cycleTypeId conservés → aucune proof → aucun consumed=true → abandon preuve mémoire → aucune réémission sur sink défaillant → aucune exposition Error.message/stack/chemin/payload/secret/CKC

Message public utilisé: `The CKC resolution could not be completed.` (style D2_INTERNAL_ERROR existant — aucun nouveau code)

## Handoff source pré-cycle

- branche: sfia/review-handoff
- tip: a76985e26c8abf6c3c19e72adb5ef21421e0c34e
- blob: e1b7c6d10e90ecdd7a7a1cf39158a04bdd40e934
- archive locale: `.tmp-sfia-review/v3-1-d2-b-audit-arbitration-chatgpt-review-preserved.md` (git hash-object = e1b7c6d1…)

## Git Truth

```
pwd=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
branch=delivery/sfia-studio-v3-1-d2-b-ckc-resolver
HEAD=bb685f1205b33f887ee27b42ac918c96386a6e33
main=bb685f1205b33f887ee27b42ac918c96386a6e33
origin_main=bb685f1205b33f887ee27b42ac918c96386a6e33
divergence=0	0
remote_d2b=0
staged=0
diff_check=PASS

```

Attendus confirmés: branche `delivery/sfia-studio-v3-1-d2-b-ckc-resolver` ; HEAD=main=origin/main=`bb685f1205b33f887ee27b42ac918c96386a6e33` ; divergence 0/0 ; staged vide ; remote D2-B absente ; upstream aucun.

## Package initial / empreintes

# File inventory — V3.1-D2-B F-QA-01…06 corrective

Date: 2026-08-02 23:17:05 CEST (+0200)

## Package (13)
1. projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts — PROTÉGÉ / inchangé
2. projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts — PROTÉGÉ / inchangé
3. projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts — CORRIGÉ
4. projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts — PROTÉGÉ / inchangé
5. projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts — PROTÉGÉ / inchangé
6. projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts — CORRIGÉ
7. projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts — PROTÉGÉ / inchangé
8. projects/sfia-studio/app/lib/oa/cycle/index.ts — PROTÉGÉ / inchangé
9. projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts — PROTÉGÉ / inchangé
10. projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts — CORRIGÉ
11. projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts — CORRIGÉ
12. projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts — CORRIGÉ
13. projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts — PROTÉGÉ / inchangé

## Empreintes
PRE_QA_FAIL_D2B_ORIGINAL_12=e904b0d8ee0ed714f95043a4ffcf72e401a6400187f32969b7b9a76777dca3a3
PRE_QA_FAIL_FULL_13=3379ac64a4d093577de7de2c562338c9d140fea958030396bb7f980e6683070b
PRE_QA_FAIL_GIT_DIFF=c6bd46e6c0cc38de1aaa61c048269f064832c0e4c768bcdda2f0a9724caf21f5
POST_D2B_ORIGINAL_12=b9a4e5099ef7f27346f74686eb7f2a80a25222a2399728dd0bf62d41cc98f815
POST_FULL_13=290dcb04ef4662096ab515db1eef19372ad03cb2351e4ee27d64ca113e7a632e
POST_GIT_DIFF=c6bd46e6c0cc38de1aaa61c048269f064832c0e4c768bcdda2f0a9724caf21f5
PROTECTED8=UNCHANGED


## Findings autorisés traités

F-QA-01…06 uniquement.

## Fichiers autorisés (5) / protégés (8)

Voir inventaire. Les huit fichiers protégés du package sont strictement inchangés (sha256 baseline = after).

## Rapport correctif

# V3.1-D2-B F-QA-01…06 — Delivery corrective report

**Date:** 2026-08-02 23:17:19 CEST (+0200)
**Rôle:** Cursor Delivery corrective Critical
**Cycle:** 8 — Delivery / implémentation
**Profil:** Critical
**Typologie:** INC
**Gate Morris:** GO MORRIS DECISION … ADOPT FAIL-CLOSED … AUTHORIZE DISTINCT DELIVERY CORRECTIVE … (2026-08-02 23:06 CEST)

## Décision FAIL-CLOSED adoptée

Toute défaillance `CycleAuditPort.append` (audit injecté) → outcome `ok=false`, `D2_INTERNAL_ERROR`, blocking/retryable/recoverable=true, message public stable, aucune proof, aucun consumed=true, aucune récursion, aucune exception brute.

Si audit undefined → résolution pure autorisée.

## Corrections

| Finding | Fichier | Correction |
|---|---|---|
| F-QA-01 | ckcConsumptionProof.ts | fallback exige CKC_FALLBACK_USED exactement 1× ; pas d’auto-réparation |
| F-QA-02 | ckcConsumptionProof.ts | CKC_FALLBACK_USED interdit hors resolved_fallback_synthetic |
| F-QA-03 | ckcConsumptionProof.ts | fallbackPolicy comparée à projection D2-A (intra_v3_only / none) |
| F-QA-04 | ckcQualificationResolver.ts | tryEmit + auditFailure FAIL-CLOSED sur 6 events |
| F-QA-05 | ckcQualificationResolver.ts | validateCkcReferenceManifest avant tout lookup |
| F-QA-06 | ckcConsumptionProof.ts + resolver | isIso8601DateTime (Z/offset, parsable, calendrier) |

## Validations

- Proof: 8/8
- Resolver + QA: 23/23
- D2-B: 36/36
- D2-A: 86/86
- oa/cycle: 216/216
- typecheck: PASS
- lint (sans --fix): PASS
- suite complète: 949/949
- build: PASS
- diff --check: PASS

## Empreintes

Voir `v3-1-d2-b-fqa01-06-file-inventory.md`.

## Verdict

V3.1-D2-B F-QA-01…06 CORRECTIVE DELIVERY COMPLETE — READY FOR DISTINCT QA REVALIDATION GATE — NO COMMIT — NO PUSH — NO PR — NO D2-C — NO D2-D — NO D3 — NO METHOD PROMOTION


## Matrice F-QA → correction → tests

| Finding | Correction | Tests |
|---|---|---|
| F-QA-01 | disclosure fallback exacte 1× | ckcConsumptionProof.test.ts |
| F-QA-02 | interdiction disclosure hors fallback | ckcConsumptionProof.test.ts |
| F-QA-03 | fallbackPolicy vs projection D2-A | ckcConsumptionProof.test.ts |
| F-QA-04 | tryEmit/auditFailure FAIL-CLOSED | ckcQualificationResolver.qa.test.ts |
| F-QA-05 | validateCkcReferenceManifest avant lookup | ckcQualificationResolver.test.ts |
| F-QA-06 | isIso8601DateTime | proof + resolver tests |

# Matrice négative F-QA-01…06

| Finding | Cas | Outcome | Code | proof | consumed |
|---|---|---|---|---|---|
| F-QA-01 | fallback sans CKC_FALLBACK_USED | ok=false | CKC_RESOLUTION_INCOHERENT | absent | non |
| F-QA-01 | disclosure dupliquée | ok=false | CKC_RESOLUTION_INCOHERENT | absent | non |
| F-QA-02 | resolved_detailed + CKC_FALLBACK_USED | ok=false | CKC_RESOLUTION_INCOHERENT | absent | non |
| F-QA-02 | resolved_synthetic + CKC_FALLBACK_USED | ok=false | CKC_RESOLUTION_INCOHERENT | absent | non |
| F-QA-03 | detailed + fallbackPolicy=none | ok=false | CKC_RESOLUTION_INCOHERENT | absent | non |
| F-QA-03 | synthetic + fallbackPolicy=intra_v3_only | ok=false | CKC_RESOLUTION_INCOHERENT | absent | non |
| F-QA-03 | fallback + fallbackPolicy=none | ok=false | CKC_RESOLUTION_INCOHERENT | absent | non |
| F-QA-05 | entrée étrangère | ok=false | CKC_RESOLUTION_INCOHERENT | absent | non |
| F-QA-05 | canonique manquante non sélectionnée | ok=false | CKC_RESOLUTION_INCOHERENT | absent | non |
| F-QA-05 | doublon | ok=false | CKC_RESOLUTION_INCOHERENT | absent | non |
| F-QA-05 | metadata invalide non sélectionnée | ok=false | CKC_RESOLUTION_INCOHERENT | absent | non |
| F-QA-05 | doctrine invalide non sélectionnée | ok=false | CKC_RESOLUTION_INCOHERENT | absent | non |
| F-QA-05 | executionAuthority=true non sélectionnée | ok=false | CKC_RESOLUTION_INCOHERENT | absent | non |
| F-QA-06 | not-an-iso / date seule / sans TZ / impossible / vide / whitespace | ok=false | CKC_RESOLUTION_INCOHERENT | absent | non |

Positifs préservés: Z, +02:00, milliseconds, manifest réordonné, cas cohérents proof.

# Matrice audit FAIL-CLOSED (F-QA-04)

Politique Morris: si `audit` injecté et `append` throw → D2_INTERNAL_ERROR sanitizé, aucune proof, aucun consumed=true, aucune récursion.

| Événement | Append calls | ok | code | proof | recursion |
|---|---|---|---|---|---|
| oa.ckc.resolution_started | 1 | false | D2_INTERNAL_ERROR | absent | non |
| oa.ckc.resolution_succeeded | 2 | false | D2_INTERNAL_ERROR | absent | non |
| oa.ckc.fallback_used | 2 | false | D2_INTERNAL_ERROR | absent | non |
| oa.ckc.consumption_validated | 4 | false | D2_INTERNAL_ERROR | absent | non |
| oa.ckc.resolution_failed | 2 | false | D2_INTERNAL_ERROR | absent | non |
| oa.ckc.consumption_rejected | 3 | false | D2_INTERNAL_ERROR | absent | non |

Contrôles sanitisation: message public = `The CKC resolution could not be completed.` — aucun fragment `/Users/`, `secret`, `sk-hostile`, `payload`.

| audit | comportement |
|---|---|
| undefined | résolution pure nominale OK |
| présent fonctionnel | events nominaux inchangés |


## Invariants Proof / disclosure / fallbackPolicy

- resolved_fallback_synthetic ⇒ fallbackUsed=true, usedReference=fallbackReference, disclosures contient CKC_FALLBACK_USED exactement une fois, fallbackPolicy=intra_v3_only (si projection.ckc.fallbackPolicy=synthetic_map)
- resolved_detailed / resolved_synthetic ⇒ disclosureCount(CKC_FALLBACK_USED)=0 ; fallbackPolicy projetée (intra_v3_only / none)
- Builder ne répare jamais une résolution incohérente

## Validation manifest globale

`validateCkcReferenceManifest(this.manifest)` avant tout `getCkcManifestEntry` / décision. Issues > 0 → CKC_RESOLUTION_INCOHERENT, message générique.

## Validation resolvedAt

Prédicat pur `isIso8601DateTime`: string non vide trim exacte, regex RFC3339 avec Z ou ±HH:mm, Date.parse fini, composants calendaires cohérents (rejette 2026-02-31).

## Contenu complet des cinq fichiers corrigés


### `projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts`

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

const FALLBACK_DISCLOSURE = "CKC_FALLBACK_USED";

const ISO_DATE_TIME =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/;

/** Pure ISO-8601 / RFC3339 date-time check with explicit timezone. */
export function isIso8601DateTime(value: string): boolean {
  if (typeof value !== "string" || value.length === 0 || value !== value.trim()) {
    return false;
  }
  const match = ISO_DATE_TIME.exec(value);
  if (!match) {
    return false;
  }
  const ms = Date.parse(value);
  if (!Number.isFinite(ms)) {
    return false;
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  const second = Number(match[6]);
  if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31 ||
    hour > 23 ||
    minute > 59 ||
    second > 59
  ) {
    return false;
  }
  const probe = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  return (
    probe.getUTCFullYear() === year &&
    probe.getUTCMonth() === month - 1 &&
    probe.getUTCDate() === day &&
    probe.getUTCHours() === hour &&
    probe.getUTCMinutes() === minute &&
    probe.getUTCSeconds() === second
  );
}

function expectedFallbackPolicy(
  projection: ValidatedCycleTypeProjection,
): "intra_v3_only" | "none" {
  return projection.ckc.fallbackPolicy === "synthetic_map"
    ? "intra_v3_only"
    : "none";
}

function fallbackDisclosureCount(
  disclosures: readonly string[],
): number {
  return disclosures.filter((item) => item === FALLBACK_DISCLOSURE).length;
}

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
    !isIso8601DateTime(resolution.resolvedAt) ||
    !resolution.usedReference ||
    !resolution.exploitable ||
    !RESOLVED_STATES.has(resolution.detailedStatus) ||
    resolution.fallbackPolicy !== expectedFallbackPolicy(projection)
  ) {
    return false;
  }

  const disclosureCount = fallbackDisclosureCount(resolution.disclosures);

  if (resolution.detailedStatus === "resolved_detailed") {
    return (
      resolution.level === "detailed" &&
      resolution.status === "resolved" &&
      resolution.source === "repository_candidate" &&
      resolution.fallbackUsed === false &&
      resolution.usedReference === projection.ckc.primaryReference &&
      disclosureCount === 0
    );
  }

  if (resolution.detailedStatus === "resolved_synthetic") {
    return (
      projection.ckc.primaryLevel === "synthetic" &&
      resolution.level === "synthetic" &&
      resolution.status === "synthetic" &&
      resolution.source === "intra_v3_synthetic" &&
      resolution.fallbackUsed === false &&
      resolution.usedReference === projection.ckc.primaryReference &&
      disclosureCount === 0
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
    resolution.usedReference === projection.ckc.fallbackReference &&
    disclosureCount === 1
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

### `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts`

```typescript
import {
  buildCkcConsumptionProof,
  isIso8601DateTime,
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
  validateCkcReferenceManifest,
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

    if (!this.tryEmit("oa.ckc.resolution_started", projection, resolvedAt, "started")) {
      return this.auditFailure(projection, resolvedAt);
    }

    try {
      if (!isIso8601DateTime(resolvedAt)) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_RESOLUTION_INCOHERENT",
        );
      }
      if (projection.ckc.executionAuthority !== false) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
        );
      }
      if (!isMappingShapeValid(projection)) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_MAPPING_INVALID",
        );
      }

      const manifestIssues = validateCkcReferenceManifest(this.manifest);
      if (manifestIssues.length > 0) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_RESOLUTION_INCOHERENT",
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
      if (
        !this.tryEmit(
          "oa.ckc.fallback_used",
          projection,
          resolvedAt,
          "fallback",
          resolved.detailedStatus,
          "CKC_FALLBACK_USED",
        )
      ) {
        return this.auditFailure(projection, resolvedAt);
      }
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
    if (
      !this.tryEmit(
        "oa.ckc.resolution_succeeded",
        projection,
        resolved.resolvedAt,
        "ok",
        resolved.detailedStatus,
      )
    ) {
      return this.auditFailure(projection, resolved.resolvedAt);
    }
    const proofResult: CkcConsumptionProofResult =
      buildCkcConsumptionProof(projection, resolved);
    if (!proofResult.ok) {
      if (
        !this.tryEmit(
          "oa.ckc.consumption_rejected",
          projection,
          resolved.resolvedAt,
          "error",
          resolved.detailedStatus,
          proofResult.error.code,
        )
      ) {
        return this.auditFailure(projection, resolved.resolvedAt);
      }
      return Object.freeze({
        ok: false as const,
        resolution: resolved,
        error: proofResult.error,
      });
    }
    if (
      !this.tryEmit(
        "oa.ckc.consumption_validated",
        projection,
        resolved.resolvedAt,
        "ok",
        resolved.detailedStatus,
      )
    ) {
      return this.auditFailure(projection, resolved.resolvedAt);
    }
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
    if (
      !this.tryEmit(
        "oa.ckc.resolution_failed",
        projection,
        resolvedAt,
        "error",
        detailedStatus,
        code,
      )
    ) {
      return this.auditFailure(projection, resolvedAt);
    }
    if (
      !this.tryEmit(
        "oa.ckc.consumption_rejected",
        projection,
        resolvedAt,
        "error",
        detailedStatus,
        code,
      )
    ) {
      return this.auditFailure(projection, resolvedAt);
    }
    return Object.freeze({
      ok: false as const,
      resolution: failed,
      error,
    });
  }

  /**
   * Morris FAIL-CLOSED: audit sink failure returns a safe structured outcome.
   * Never re-emits on the failing sink. Never exposes a proof or consumed=true.
   */
  private auditFailure(
    projection: ValidatedCycleTypeProjection,
    resolvedAt: string,
  ): CkcQualificationResolutionOutcome {
    const failed = resolution(projection, resolvedAt, {
      detailedStatus: "unresolved_unavailable",
      level: "absent",
      status: "unavailable",
      source: "unavailable",
      fallbackUsed: false,
      exploitable: false,
    });
    return Object.freeze({
      ok: false as const,
      resolution: failed,
      error: createCkcQualificationError({
        code: "D2_INTERNAL_ERROR",
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        detailedStatus: "unresolved_unavailable",
      }),
    });
  }

  private tryEmit(
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
  ): boolean {
    if (!this.audit) {
      return true;
    }
    try {
      this.audit.append({
        event,
        ts,
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        result,
        ...(detailedStatus ? { detailedStatus } : {}),
        ...(detailCode ? { detailCode } : {}),
      });
      return true;
    } catch {
      return false;
    }
  }
}

```

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts`

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

  it("rejects fallback without CKC_FALLBACK_USED and duplicate disclosure (F-QA-01)", () => {
    const selected = projection("cyc:framing");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const valid = resolved(selected, manifest);

    const missing = buildCkcConsumptionProof(selected, {
      ...valid,
      disclosures: [],
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) {
      expect(missing.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
    expect(missing).not.toHaveProperty("proof");

    const duplicated = buildCkcConsumptionProof(selected, {
      ...valid,
      disclosures: ["CKC_FALLBACK_USED", "CKC_FALLBACK_USED"],
    });
    expect(duplicated.ok).toBe(false);
    if (!duplicated.ok) {
      expect(duplicated.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
    expect(duplicated).not.toHaveProperty("proof");
  });

  it("rejects CKC_FALLBACK_USED outside fallback statuses (F-QA-02)", () => {
    for (const cycleTypeId of ["cyc:framing", "cyc:delivery"] as const) {
      const selected = projection(cycleTypeId);
      const valid = resolved(selected);
      const result = buildCkcConsumptionProof(selected, {
        ...valid,
        disclosures: ["CKC_FALLBACK_USED"],
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
      }
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("rejects incoherent fallbackPolicy against D2-A projection (F-QA-03)", () => {
    const detailed = projection("cyc:framing");
    const detailedValid = resolved(detailed);
    const detailedBad = buildCkcConsumptionProof(detailed, {
      ...detailedValid,
      fallbackPolicy: "none",
    });
    expect(detailedBad.ok).toBe(false);
    if (!detailedBad.ok) {
      expect(detailedBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    const synthetic = projection("cyc:delivery");
    const syntheticValid = resolved(synthetic);
    const syntheticBad = buildCkcConsumptionProof(synthetic, {
      ...syntheticValid,
      fallbackPolicy: "intra_v3_only",
    });
    expect(syntheticBad.ok).toBe(false);
    if (!syntheticBad.ok) {
      expect(syntheticBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    const fallbackManifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === detailed.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const fallbackValid = resolved(detailed, fallbackManifest);
    const fallbackBad = buildCkcConsumptionProof(detailed, {
      ...fallbackValid,
      fallbackPolicy: "none",
    });
    expect(fallbackBad.ok).toBe(false);
    if (!fallbackBad.ok) {
      expect(fallbackBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    expect(buildCkcConsumptionProof(detailed, detailedValid).ok).toBe(true);
    expect(buildCkcConsumptionProof(synthetic, syntheticValid).ok).toBe(true);
    expect(buildCkcConsumptionProof(detailed, fallbackValid).ok).toBe(true);
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts`

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
      // Global manifest validation (F-QA-05) rejects before per-entry lookup.
      expect(manifestResult.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
  });

  it("rejects invalid resolvedAt before resolution (F-QA-06)", () => {
    const selected = projection("cyc:framing");
    for (const resolvedAt of [
      "not-an-iso-timestamp",
      "2026-08-02",
      "2026-08-02T21:00:00",
      "2026-02-31T00:00:00.000Z",
      "",
      "   ",
      " 2026-08-02T19:47:00.000Z",
    ]) {
      const result = new CkcQualificationResolver().resolve({
        projection: selected,
        resolvedAt,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
        expect(result).not.toHaveProperty("proof");
        expect(result.resolution.exploitable).toBe(false);
      }
    }
  });

  it("accepts ISO-8601 resolvedAt with Z, offset and milliseconds (F-QA-06)", () => {
    const selected = projection("cyc:framing");
    for (const resolvedAt of [
      "2026-08-02T19:47:00.000Z",
      "2026-08-02T21:47:00+02:00",
      "2026-08-02T19:47:00.123Z",
    ]) {
      const result = new CkcQualificationResolver().resolve({
        projection: selected,
        resolvedAt,
      });
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.proof.consumed).toBe(true);
        expect(result.proof.resolvedAt).toBe(resolvedAt);
      }
    }
  });

  it("rejects globally incoherent injected manifests before lookup (F-QA-05)", () => {
    const selected = projection("cyc:framing");
    const base = CKC_REFERENCE_MANIFEST.entries;

    const foreign: CkcReferenceManifest = {
      entries: [
        ...base,
        {
          ...base[0],
          reference: "caller/private/foreign.md",
        },
      ],
    };
    const missingCanonical: CkcReferenceManifest = {
      entries: base.filter(
        (entry) => entry.reference !== selected.ckc.fallbackReference,
      ),
    };
    const duplicate: CkcReferenceManifest = {
      entries: [...base, base[0]],
    };
    const invalidMetaUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference === selected.ckc.fallbackReference
          ? ({ ...entry, availability: "maybe" } as unknown as typeof entry)
          : entry,
      ),
    };
    const invalidDoctrineUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference !== selected.ckc.primaryReference
          ? ({
              ...entry,
              doctrineStatus: "baseline",
            } as unknown as typeof entry)
          : entry,
      ),
    };
    const authorityUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference === selected.ckc.fallbackReference
          ? ({
              ...entry,
              executionAuthority: true,
            } as unknown as typeof entry)
          : entry,
      ),
    };

    for (const manifest of [
      foreign,
      missingCanonical,
      duplicate,
      invalidMetaUnselected,
      invalidDoctrineUnselected,
      authorityUnselected,
    ]) {
      const result = new CkcQualificationResolver(manifest).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
        expect(result.error.message).not.toContain("foreign");
        expect(result.error.message).not.toContain("caller/private");
        expect(result).not.toHaveProperty("proof");
      }
    }
  });

  it("accepts a valid reordered canonical manifest deterministically (F-QA-05)", () => {
    const selected = projection("cyc:delivery");
    const reordered: CkcReferenceManifest = {
      entries: [...CKC_REFERENCE_MANIFEST.entries].reverse(),
    };
    const canonical = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    const reorderedResult = new CkcQualificationResolver(reordered).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(canonical.ok).toBe(true);
    expect(reorderedResult.ok).toBe(true);
    expect(reorderedResult).toEqual(canonical);
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts`

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
        // F-QA-05: global manifest validation rejects before synthetic lookup.
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
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

  it("keeps pure resolve when audit is undefined (F-QA-04)", () => {
    const selected = projection("cyc:framing");
    const result = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.proof.consumed).toBe(true);
    }
  });

  it("keeps nominal behavior when audit append succeeds (F-QA-04)", () => {
    const selected = projection("cyc:delivery");
    const audit = new AuditJournal();
    const result = new CkcQualificationResolver(
      CKC_REFERENCE_MANIFEST,
      audit,
    ).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    expect(audit.events.map((event) => event.event)).toEqual([
      "oa.ckc.resolution_started",
      "oa.ckc.resolution_succeeded",
      "oa.ckc.consumption_validated",
    ]);
  });

  it("returns sanitized D2_INTERNAL_ERROR for every audit append throw (F-QA-04)", () => {
    const selected = projection("cyc:framing");
    const hostile =
      "/Users/private/secret.md payload=ckc-body token=sk-hostile-f4ke";
    const scenarios: Array<{
      readonly failingEvent:
        | "oa.ckc.resolution_started"
        | "oa.ckc.resolution_succeeded"
        | "oa.ckc.resolution_failed"
        | "oa.ckc.fallback_used"
        | "oa.ckc.consumption_validated"
        | "oa.ckc.consumption_rejected";
      readonly expectedAppendCalls: number;
      readonly manifest: CkcReferenceManifest;
    }> = [
      {
        failingEvent: "oa.ckc.resolution_started",
        expectedAppendCalls: 1,
        manifest: CKC_REFERENCE_MANIFEST,
      },
      {
        failingEvent: "oa.ckc.resolution_succeeded",
        expectedAppendCalls: 2,
        manifest: CKC_REFERENCE_MANIFEST,
      },
      {
        failingEvent: "oa.ckc.fallback_used",
        expectedAppendCalls: 2,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.consumption_validated",
        expectedAppendCalls: 4,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.resolution_failed",
        expectedAppendCalls: 2,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference ||
            entry.reference === selected.ckc.fallbackReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.consumption_rejected",
        expectedAppendCalls: 3,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference ||
            entry.reference === selected.ckc.fallbackReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
    ];

    for (const scenario of scenarios) {
      let appendCalls = 0;
      const seenAfterThrow: string[] = [];
      let thrown = false;
      const audit: CycleAuditPort = {
        append(event) {
          appendCalls += 1;
          if (thrown) {
            seenAfterThrow.push(event.event);
          }
          if (event.event === scenario.failingEvent) {
            thrown = true;
            throw new Error(hostile);
          }
        },
      };

      const result = new CkcQualificationResolver(
        scenario.manifest,
        audit,
      ).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("D2_INTERNAL_ERROR");
        expect(result.error.blocking).toBe(true);
        expect(result.error.retryable).toBe(true);
        expect(result.error.recoverable).toBe(true);
        expect(result.error.correlationId).toBe(selected.correlationId);
        expect(result.error.cycleTypeId).toBe(selected.cycleTypeId);
        expect(result.error.message).toBe(
          "The CKC resolution could not be completed.",
        );
        expect(result.error.message).not.toContain("/Users/");
        expect(result.error.message).not.toContain("secret");
        expect(result.error.message).not.toContain("sk-hostile");
        expect(result.error.message).not.toContain("payload");
        expect(result).not.toHaveProperty("proof");
        expect(result.resolution.exploitable).toBe(false);
      }

      expect(appendCalls).toBe(scenario.expectedAppendCalls);
      expect(seenAfterThrow).toEqual([]);
    }
  });
});

```


## Diff patch (contenu complet / dump correctif)

```diff
# V3.1-D2-B F-QA-01…06 corrective diff
# Generated 2026-08-02T23:17:05+02:00
==== FULL FILE (no QA baseline found): projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts ====
----- BEGIN projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts -----
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

const FALLBACK_DISCLOSURE = "CKC_FALLBACK_USED";

const ISO_DATE_TIME =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/;

/** Pure ISO-8601 / RFC3339 date-time check with explicit timezone. */
export function isIso8601DateTime(value: string): boolean {
  if (typeof value !== "string" || value.length === 0 || value !== value.trim()) {
    return false;
  }
  const match = ISO_DATE_TIME.exec(value);
  if (!match) {
    return false;
  }
  const ms = Date.parse(value);
  if (!Number.isFinite(ms)) {
    return false;
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  const second = Number(match[6]);
  if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31 ||
    hour > 23 ||
    minute > 59 ||
    second > 59
  ) {
    return false;
  }
  const probe = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  return (
    probe.getUTCFullYear() === year &&
    probe.getUTCMonth() === month - 1 &&
    probe.getUTCDate() === day &&
    probe.getUTCHours() === hour &&
    probe.getUTCMinutes() === minute &&
    probe.getUTCSeconds() === second
  );
}

function expectedFallbackPolicy(
  projection: ValidatedCycleTypeProjection,
): "intra_v3_only" | "none" {
  return projection.ckc.fallbackPolicy === "synthetic_map"
    ? "intra_v3_only"
    : "none";
}

function fallbackDisclosureCount(
  disclosures: readonly string[],
): number {
  return disclosures.filter((item) => item === FALLBACK_DISCLOSURE).length;
}

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
    !isIso8601DateTime(resolution.resolvedAt) ||
    !resolution.usedReference ||
    !resolution.exploitable ||
    !RESOLVED_STATES.has(resolution.detailedStatus) ||
    resolution.fallbackPolicy !== expectedFallbackPolicy(projection)
  ) {
    return false;
  }

  const disclosureCount = fallbackDisclosureCount(resolution.disclosures);

  if (resolution.detailedStatus === "resolved_detailed") {
    return (
      resolution.level === "detailed" &&
      resolution.status === "resolved" &&
      resolution.source === "repository_candidate" &&
      resolution.fallbackUsed === false &&
      resolution.usedReference === projection.ckc.primaryReference &&
      disclosureCount === 0
    );
  }

  if (resolution.detailedStatus === "resolved_synthetic") {
    return (
      projection.ckc.primaryLevel === "synthetic" &&
      resolution.level === "synthetic" &&
      resolution.status === "synthetic" &&
      resolution.source === "intra_v3_synthetic" &&
      resolution.fallbackUsed === false &&
      resolution.usedReference === projection.ckc.primaryReference &&
      disclosureCount === 0
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
    resolution.usedReference === projection.ckc.fallbackReference &&
    disclosureCount === 1
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
----- END projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts -----
==== FULL FILE (no QA baseline found): projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts ====
----- BEGIN projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts -----
import {
  buildCkcConsumptionProof,
  isIso8601DateTime,
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
  validateCkcReferenceManifest,
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

    if (!this.tryEmit("oa.ckc.resolution_started", projection, resolvedAt, "started")) {
      return this.auditFailure(projection, resolvedAt);
    }

    try {
      if (!isIso8601DateTime(resolvedAt)) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_RESOLUTION_INCOHERENT",
        );
      }
      if (projection.ckc.executionAuthority !== false) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
        );
      }
      if (!isMappingShapeValid(projection)) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_MAPPING_INVALID",
        );
      }

      const manifestIssues = validateCkcReferenceManifest(this.manifest);
      if (manifestIssues.length > 0) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_RESOLUTION_INCOHERENT",
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
      if (
        !this.tryEmit(
          "oa.ckc.fallback_used",
          projection,
          resolvedAt,
          "fallback",
          resolved.detailedStatus,
          "CKC_FALLBACK_USED",
        )
      ) {
        return this.auditFailure(projection, resolvedAt);
      }
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
    if (
      !this.tryEmit(
        "oa.ckc.resolution_succeeded",
        projection,
        resolved.resolvedAt,
        "ok",
        resolved.detailedStatus,
      )
    ) {
      return this.auditFailure(projection, resolved.resolvedAt);
    }
    const proofResult: CkcConsumptionProofResult =
      buildCkcConsumptionProof(projection, resolved);
    if (!proofResult.ok) {
      if (
        !this.tryEmit(
          "oa.ckc.consumption_rejected",
          projection,
          resolved.resolvedAt,
          "error",
          resolved.detailedStatus,
          proofResult.error.code,
        )
      ) {
        return this.auditFailure(projection, resolved.resolvedAt);
      }
      return Object.freeze({
        ok: false as const,
        resolution: resolved,
        error: proofResult.error,
      });
    }
    if (
      !this.tryEmit(
        "oa.ckc.consumption_validated",
        projection,
        resolved.resolvedAt,
        "ok",
        resolved.detailedStatus,
      )
    ) {
      return this.auditFailure(projection, resolved.resolvedAt);
    }
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
    if (
      !this.tryEmit(
        "oa.ckc.resolution_failed",
        projection,
        resolvedAt,
        "error",
        detailedStatus,
        code,
      )
    ) {
      return this.auditFailure(projection, resolvedAt);
    }
    if (
      !this.tryEmit(
        "oa.ckc.consumption_rejected",
        projection,
        resolvedAt,
        "error",
        detailedStatus,
        code,
      )
    ) {
      return this.auditFailure(projection, resolvedAt);
    }
    return Object.freeze({
      ok: false as const,
      resolution: failed,
      error,
    });
  }

  /**
   * Morris FAIL-CLOSED: audit sink failure returns a safe structured outcome.
   * Never re-emits on the failing sink. Never exposes a proof or consumed=true.
   */
  private auditFailure(
    projection: ValidatedCycleTypeProjection,
    resolvedAt: string,
  ): CkcQualificationResolutionOutcome {
    const failed = resolution(projection, resolvedAt, {
      detailedStatus: "unresolved_unavailable",
      level: "absent",
      status: "unavailable",
      source: "unavailable",
      fallbackUsed: false,
      exploitable: false,
    });
    return Object.freeze({
      ok: false as const,
      resolution: failed,
      error: createCkcQualificationError({
        code: "D2_INTERNAL_ERROR",
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        detailedStatus: "unresolved_unavailable",
      }),
    });
  }

  private tryEmit(
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
  ): boolean {
    if (!this.audit) {
      return true;
    }
    try {
      this.audit.append({
        event,
        ts,
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        result,
        ...(detailedStatus ? { detailedStatus } : {}),
        ...(detailCode ? { detailCode } : {}),
      });
      return true;
    } catch {
      return false;
    }
  }
}
----- END projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts -----
==== FULL FILE (no QA baseline found): projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts ====
----- BEGIN projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts -----
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

  it("rejects fallback without CKC_FALLBACK_USED and duplicate disclosure (F-QA-01)", () => {
    const selected = projection("cyc:framing");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const valid = resolved(selected, manifest);

    const missing = buildCkcConsumptionProof(selected, {
      ...valid,
      disclosures: [],
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) {
      expect(missing.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
    expect(missing).not.toHaveProperty("proof");

    const duplicated = buildCkcConsumptionProof(selected, {
      ...valid,
      disclosures: ["CKC_FALLBACK_USED", "CKC_FALLBACK_USED"],
    });
    expect(duplicated.ok).toBe(false);
    if (!duplicated.ok) {
      expect(duplicated.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
    expect(duplicated).not.toHaveProperty("proof");
  });

  it("rejects CKC_FALLBACK_USED outside fallback statuses (F-QA-02)", () => {
    for (const cycleTypeId of ["cyc:framing", "cyc:delivery"] as const) {
      const selected = projection(cycleTypeId);
      const valid = resolved(selected);
      const result = buildCkcConsumptionProof(selected, {
        ...valid,
        disclosures: ["CKC_FALLBACK_USED"],
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
      }
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("rejects incoherent fallbackPolicy against D2-A projection (F-QA-03)", () => {
    const detailed = projection("cyc:framing");
    const detailedValid = resolved(detailed);
    const detailedBad = buildCkcConsumptionProof(detailed, {
      ...detailedValid,
      fallbackPolicy: "none",
    });
    expect(detailedBad.ok).toBe(false);
    if (!detailedBad.ok) {
      expect(detailedBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    const synthetic = projection("cyc:delivery");
    const syntheticValid = resolved(synthetic);
    const syntheticBad = buildCkcConsumptionProof(synthetic, {
      ...syntheticValid,
      fallbackPolicy: "intra_v3_only",
    });
    expect(syntheticBad.ok).toBe(false);
    if (!syntheticBad.ok) {
      expect(syntheticBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    const fallbackManifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === detailed.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const fallbackValid = resolved(detailed, fallbackManifest);
    const fallbackBad = buildCkcConsumptionProof(detailed, {
      ...fallbackValid,
      fallbackPolicy: "none",
    });
    expect(fallbackBad.ok).toBe(false);
    if (!fallbackBad.ok) {
      expect(fallbackBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    expect(buildCkcConsumptionProof(detailed, detailedValid).ok).toBe(true);
    expect(buildCkcConsumptionProof(synthetic, syntheticValid).ok).toBe(true);
    expect(buildCkcConsumptionProof(detailed, fallbackValid).ok).toBe(true);
  });
});
----- END projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts -----
==== FULL FILE (no QA baseline found): projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts ====
----- BEGIN projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts -----
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
      // Global manifest validation (F-QA-05) rejects before per-entry lookup.
      expect(manifestResult.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
  });

  it("rejects invalid resolvedAt before resolution (F-QA-06)", () => {
    const selected = projection("cyc:framing");
    for (const resolvedAt of [
      "not-an-iso-timestamp",
      "2026-08-02",
      "2026-08-02T21:00:00",
      "2026-02-31T00:00:00.000Z",
      "",
      "   ",
      " 2026-08-02T19:47:00.000Z",
    ]) {
      const result = new CkcQualificationResolver().resolve({
        projection: selected,
        resolvedAt,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
        expect(result).not.toHaveProperty("proof");
        expect(result.resolution.exploitable).toBe(false);
      }
    }
  });

  it("accepts ISO-8601 resolvedAt with Z, offset and milliseconds (F-QA-06)", () => {
    const selected = projection("cyc:framing");
    for (const resolvedAt of [
      "2026-08-02T19:47:00.000Z",
      "2026-08-02T21:47:00+02:00",
      "2026-08-02T19:47:00.123Z",
    ]) {
      const result = new CkcQualificationResolver().resolve({
        projection: selected,
        resolvedAt,
      });
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.proof.consumed).toBe(true);
        expect(result.proof.resolvedAt).toBe(resolvedAt);
      }
    }
  });

  it("rejects globally incoherent injected manifests before lookup (F-QA-05)", () => {
    const selected = projection("cyc:framing");
    const base = CKC_REFERENCE_MANIFEST.entries;

    const foreign: CkcReferenceManifest = {
      entries: [
        ...base,
        {
          ...base[0],
          reference: "caller/private/foreign.md",
        },
      ],
    };
    const missingCanonical: CkcReferenceManifest = {
      entries: base.filter(
        (entry) => entry.reference !== selected.ckc.fallbackReference,
      ),
    };
    const duplicate: CkcReferenceManifest = {
      entries: [...base, base[0]],
    };
    const invalidMetaUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference === selected.ckc.fallbackReference
          ? ({ ...entry, availability: "maybe" } as unknown as typeof entry)
          : entry,
      ),
    };
    const invalidDoctrineUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference !== selected.ckc.primaryReference
          ? ({
              ...entry,
              doctrineStatus: "baseline",
            } as unknown as typeof entry)
          : entry,
      ),
    };
    const authorityUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference === selected.ckc.fallbackReference
          ? ({
              ...entry,
              executionAuthority: true,
            } as unknown as typeof entry)
          : entry,
      ),
    };

    for (const manifest of [
      foreign,
      missingCanonical,
      duplicate,
      invalidMetaUnselected,
      invalidDoctrineUnselected,
      authorityUnselected,
    ]) {
      const result = new CkcQualificationResolver(manifest).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
        expect(result.error.message).not.toContain("foreign");
        expect(result.error.message).not.toContain("caller/private");
        expect(result).not.toHaveProperty("proof");
      }
    }
  });

  it("accepts a valid reordered canonical manifest deterministically (F-QA-05)", () => {
    const selected = projection("cyc:delivery");
    const reordered: CkcReferenceManifest = {
      entries: [...CKC_REFERENCE_MANIFEST.entries].reverse(),
    };
    const canonical = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    const reorderedResult = new CkcQualificationResolver(reordered).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(canonical.ok).toBe(true);
    expect(reorderedResult.ok).toBe(true);
    expect(reorderedResult).toEqual(canonical);
  });
});
----- END projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts -----
==== FULL FILE (no QA baseline found): projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts ====
----- BEGIN projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts -----
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
        // F-QA-05: global manifest validation rejects before synthetic lookup.
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
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

  it("keeps pure resolve when audit is undefined (F-QA-04)", () => {
    const selected = projection("cyc:framing");
    const result = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.proof.consumed).toBe(true);
    }
  });

  it("keeps nominal behavior when audit append succeeds (F-QA-04)", () => {
    const selected = projection("cyc:delivery");
    const audit = new AuditJournal();
    const result = new CkcQualificationResolver(
      CKC_REFERENCE_MANIFEST,
      audit,
    ).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    expect(audit.events.map((event) => event.event)).toEqual([
      "oa.ckc.resolution_started",
      "oa.ckc.resolution_succeeded",
      "oa.ckc.consumption_validated",
    ]);
  });

  it("returns sanitized D2_INTERNAL_ERROR for every audit append throw (F-QA-04)", () => {
    const selected = projection("cyc:framing");
    const hostile =
      "/Users/private/secret.md payload=ckc-body token=sk-hostile-f4ke";
    const scenarios: Array<{
      readonly failingEvent:
        | "oa.ckc.resolution_started"
        | "oa.ckc.resolution_succeeded"
        | "oa.ckc.resolution_failed"
        | "oa.ckc.fallback_used"
        | "oa.ckc.consumption_validated"
        | "oa.ckc.consumption_rejected";
      readonly expectedAppendCalls: number;
      readonly manifest: CkcReferenceManifest;
    }> = [
      {
        failingEvent: "oa.ckc.resolution_started",
        expectedAppendCalls: 1,
        manifest: CKC_REFERENCE_MANIFEST,
      },
      {
        failingEvent: "oa.ckc.resolution_succeeded",
        expectedAppendCalls: 2,
        manifest: CKC_REFERENCE_MANIFEST,
      },
      {
        failingEvent: "oa.ckc.fallback_used",
        expectedAppendCalls: 2,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.consumption_validated",
        expectedAppendCalls: 4,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.resolution_failed",
        expectedAppendCalls: 2,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference ||
            entry.reference === selected.ckc.fallbackReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.consumption_rejected",
        expectedAppendCalls: 3,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference ||
            entry.reference === selected.ckc.fallbackReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
    ];

    for (const scenario of scenarios) {
      let appendCalls = 0;
      const seenAfterThrow: string[] = [];
      let thrown = false;
      const audit: CycleAuditPort = {
        append(event) {
          appendCalls += 1;
          if (thrown) {
            seenAfterThrow.push(event.event);
          }
          if (event.event === scenario.failingEvent) {
            thrown = true;
            throw new Error(hostile);
          }
        },
      };

      const result = new CkcQualificationResolver(
        scenario.manifest,
        audit,
      ).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("D2_INTERNAL_ERROR");
        expect(result.error.blocking).toBe(true);
        expect(result.error.retryable).toBe(true);
        expect(result.error.recoverable).toBe(true);
        expect(result.error.correlationId).toBe(selected.correlationId);
        expect(result.error.cycleTypeId).toBe(selected.cycleTypeId);
        expect(result.error.message).toBe(
          "The CKC resolution could not be completed.",
        );
        expect(result.error.message).not.toContain("/Users/");
        expect(result.error.message).not.toContain("secret");
        expect(result.error.message).not.toContain("sk-hostile");
        expect(result.error.message).not.toContain("payload");
        expect(result).not.toHaveProperty("proof");
        expect(result.resolution.exploitable).toBe(false);
      }

      expect(appendCalls).toBe(scenario.expectedAppendCalls);
      expect(seenAfterThrow).toEqual([]);
    }
  });
});
----- END projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts -----

```

## Résultats tests (extrait terminal)

```
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  839ms
stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks transitions while hold is active
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T21:16:09.759Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.project_create","ts":"2026-08-02T21:16:09.766Z","status":"ok","projectId":"proj-f7032a96-23ab-43e8-b411-ec93bb31e9c9","durationMs":2}
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T21:16:09.767Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T21:16:09.767Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > allows transitions when hold is inactive (test override)
{"event":"d1.project_create","ts":"2026-08-02T21:16:09.774Z","status":"ok","projectId":"proj-d1921d80-6794-41fb-85c1-0729d1db4832","durationMs":1}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T21:16:09.774Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T21:16:09.774Z","status":"ok","projectId":"proj-d1921d80-6794-41fb-85c1-0729d1db4832","durationMs":0}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks when hold is active even with empty reasons
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T21:16:09.775Z","status":"blocked","reasonCount":0,"codes":"ACTIVE_NO_REASONS"}

 ✓ __tests__/d1/t-a7-method-mode-hold.test.ts (6 tests) 21ms
 ✓ __tests__/ops1/controlTowerReinjection.test.ts (2 tests) 31ms
 ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 20ms
 ✓ __tests__/platform/t-a7-canonical-consumers.probe.test.ts (3 tests) 20ms
 ✓ __tests__/oa/evidence-review/recommendNextGate.test.ts (11 tests) 34ms
 ✓ __tests__/oa/evidence-review/adversarialCoordinationValidation.test.ts (7 tests) 26ms
 ✓ __tests__/oa/evidence-review/claimEvaluationLifecycle.test.ts (14 tests) 36ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts (10 tests) 43ms
 ✓ __tests__/platform/import-boundaries.test.ts (3 tests) 12ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 18ms
 ✓ __tests__/oa/evidence-review/reviewBundleLifecycle.test.ts (14 tests) 64ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 21ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 7ms
 ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 8ms
 ✓ __tests__/oa/evidence-review/verifyAndUnavailable.test.ts (13 tests) 10ms
 ✓ __tests__/oa/evidence-review/adversarialMaturityValidation.test.ts (3 tests) 15ms
 ✓ __tests__/oa/evidence-review/reviewBundleDomain.test.ts (12 tests) 18ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.test.ts (14 tests) 9ms
 ✓ __tests__/oa/execution-contract/antiLegacy.test.ts (4 tests) 14ms
 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 18ms
 ✓ __tests__/oa/evidence-review/adversarialClaimEvaluationValidation.test.ts (4 tests) 13ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 8ms
 ✓ __tests__/oa/decision/antiLegacy.test.ts (4 tests) 13ms
 ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 7ms
 ✓ __tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts (4 tests) 11ms
 ✓ __tests__/oa/execution-attempt/attemptRepository.test.ts (33 tests) 15ms
 ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 11ms
 ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 9ms
 ✓ __tests__/oa/project/antiLegacy.test.ts (4 tests) 9ms
 ✓ __tests__/ops1/openai-provider.test.ts (2 tests) 10ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 9ms
 ✓ __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts (3 tests) 6ms
 ✓ __tests__/platform/t-a7-consolidated-blocker-reduction.test.ts (19 tests) 9ms
 ✓ __tests__/ops1/sfia/canonicalEngine.test.ts (17 tests) 3891ms
   ✓ SFIA context resolver > builds context with hierarchy and does not promote candidate decisions  309ms
   ✓ SFIA context resolver > detects context stale on head mismatch  345ms
   ✓ SFIA action compiler > compiles valid CREATE and persists ActionCandidate  356ms
   ✓ SFIA action compiler > denies commit/push operations  423ms
   ✓ SFIA action compiler > denies protected path  415ms
   ✓ SFIA action compiler > denies context stale  383ms
   ✓ SFIA action compiler > preserves exact content  309ms
   ✓ SFIA action compiler > instantiates cursor prompt from real template  399ms
   ✓ SFIA conversation integration (fixture markers) > CREATE marker → ActionCandidate live  435ms
   ✓ SFIA conversation integration (fixture markers) > commit marker → POLICY_DENIED  448ms
 ✓ __tests__/oa/cycle/ckcConsumptionProof.test.ts (8 tests) 7ms
 ✓ __tests__/oa/evidence-review/adversarialValidation.test.ts (9 tests) 9ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (9 tests) 47ms
 ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 30ms
 ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 5ms
 ✓ __tests__/platform/platform-ai.test.ts (5 tests) 4ms
 ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 8ms
 ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 3ms
 ✓ __tests__/oa/cycle/ckcReferenceManifest.test.ts (5 tests) 6ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 5ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 3ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 2ms

 Test Files  98 passed (98)
      Tests  949 passed (949)
   Start at  23:16:03
   Duration  8.30s (transform 3.79s, setup 4.76s, collect 15.38s, tests 26.21s, environment 7.93s, prepare 4.95s)

TEST_EXIT:0
=== build ===

> sfia-studio@0.1.0 build
> next build

   ▲ Next.js 15.5.20

   Creating an optimized production build ...
 ✓ Compiled successfully in 940ms
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

BUILD_EXIT:0
```

## Contrôles finaux

```
=== FINAL GIT STATE ===
Sun Aug  2 23:16:32 CEST 2026
delivery/sfia-studio-v3-1-d2-b-ckc-resolver
bb685f1205b33f887ee27b42ac918c96386a6e33
bb685f1205b33f887ee27b42ac918c96386a6e33
bb685f1205b33f887ee27b42ac918c96386a6e33
 M projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
?? .tmp-sfia-review/MERGE_SHA.txt
?? .tmp-sfia-review/_gen_d2a_corrective_reports.py
?? .tmp-sfia-review/_gen_d2a_pr_readiness_reports.py
?? .tmp-sfia-review/_gen_d2a_qa_reports.py
?? .tmp-sfia-review/_gen_d2a_qa_revalidation_reports.py
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
--- name-status ---
M	projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
--- cached ---
--- check ---
DIFF_CHECK_PASS
--- others ---
.tmp-sfia-review/MERGE_SHA.txt
.tmp-sfia-review/_gen_d2a_corrective_reports.py
.tmp-sfia-review/_gen_d2a_pr_readiness_reports.py
.tmp-sfia-review/_gen_d2a_qa_reports.py
.tmp-sfia-review/_gen_d2a_qa_revalidation_reports.py
.tmp-sfia-review/_gen_d2a_reports.py
.tmp-sfia-review/_gen_doc19.py
.tmp-sfia-review/archive-comparison.txt
.tmp-sfia-review/archive-source-sha256.txt
.tmp-sfia-review/archive-target-sha256.txt
.tmp-sfia-review/before-corrective/01-qa-validation-report.md
.tmp-sfia-review/before-corrective/08-implementation-backlog-and-slicing.md
.tmp-sfia-review/before-corrective/12-v3-cycle-recommendation-cadrage.md
.tmp-sfia-review/before-corrective/13-v3-1-profile-qualification-functional-design.md
.tmp-sfia-review/before-corrective/14-v3-1-cycle-type-catalog-functional-architecture.md
.tmp-sfia-review/before-corrective/cycleTypeCatalog.test.ts
.tmp-sfia-review/before-corrective/cycleTypeCatalog.ts
.tmp-sfia-review/before-corrective/d1-README.md
.tmp-sfia-review/before-corrective/framing-README.md
.tmp-sfia-review/before-corrective/index.ts
.tmp-sfia-review/before-d1/08-implementation-backlog-and-slicing.md
.tmp-sfia-review/before-d1/12-v3-cycle-recommendation-cadrage.md
.tmp-sfia-review/before-d1/13-v3-1-profile-qualification-functional-design.md
.tmp-sfia-review/before-d1/14-v3-1-cycle-type-catalog-functional-architecture.md
.tmp-sfia-review/before-d1/README.md
.tmp-sfia-review/before-pr-readiness/01-qa-validation-report.md
.tmp-sfia-review/before-pr-readiness/02-corrective-delivery-report.md
.tmp-sfia-review/before-pr-readiness/03-qa-revalidation-report.md
.tmp-sfia-review/before-pr-readiness/08-implementation-backlog-and-slicing.md
.tmp-sfia-review/before-pr-readiness/12-v3-cycle-recommendation-cadrage.md
.tmp-sfia-review/before-pr-readiness/13-v3-1-profile-qualification-functional-design.md
.tmp-sfia-review/before-pr-readiness/14-v3-1-cycle-type-catalog-functional-architecture.md
.tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.test.ts
.tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.ts
.tmp-sfia-review/before-pr-readiness/d1-README.md
.tmp-sfia-review/before-pr-readiness/framing-README.md
.tmp-sfia-review/before-pr-readiness/index.ts
.tmp-sfia-review/before-publication/01.md
.tmp-sfia-review/before-publication/02.md
.tmp-sfia-review/before-publication/03.md
--- branch -vv ---
  architecture/interv360-backend-api-contract-framing                           7f24665 docs: frame Interv360 backend API contract
  architecture/interv360-backend-data-model-decision                            0f2f6c4 docs: decide Interv360 backend data model
  architecture/interv360-backend-persistence-decision                           4ee36ee [origin/architecture/interv360-backend-persistence-decision] docs: record backend persistence decision PR status
  architecture/interv360-backend-target-framing                                 4b59b51 docs: frame Interv360 backend target
  architecture/interv360-backend-technical-stack-decision                       9856770 docs: decide Interv360 backend technical stack
  architecture/interv360-product-industrialization-framing                      bf01af0 [origin/architecture/interv360-product-industrialization-framing] docs: record product industrialization PR status
  architecture/interv360-product-roadmap-after-persistence                      572d061 docs: define Interv360 roadmap after persistence
  architecture/interv360-product-roadmap-after-role-simulation                  70a1110 [origin/architecture/interv360-product-roadmap-after-role-simulation] docs: record roadmap after role simulation PR status
  architecture/interv360-product-roadmap-next                                   69b8246 [origin/architecture/interv360-product-roadmap-next] docs: record product roadmap next PR status
  architecture/interv360-role-simulation-review                                 733cbff [origin/architecture/interv360-role-simulation-review] docs: record role simulation review PR status
  architecture/sfia-studio-v3-native-option-a-technical                         e8166ad docs(sfia-studio): record Option A technical architecture validation
  archive/sfia-v2.6-lot-0-completion                                            2830efd [origin/archive/sfia-v2.6-lot-0-completion] docs: complete lot 0 archive execution tracking
  archive/sfia-v2.6-lot-0-inventories                                           6cf7d36 [origin/archive/sfia-v2.6-lot-0-inventories] fix: correct archived inventory relative links
  archive/sfia-v2.6-lot-c-v3-mcp                                                d4401c3 [origin/archive/sfia-v2.6-lot-c-v3-mcp] docs: record sfia v2.6 lot c execution
+ audit/sfia-studio-v3-native-dependencies                                      56ddf32 (/Users/morris/Projects/sfia-workspace-v3-native-audit) [origin/main: behind 227] docs(sfia-studio): validate v3 knowledge-driven doctrine (#259)
  audit/sfia-v2.6-lot-0-qualification                                           e200689 [origin/audit/sfia-v2.6-lot-0-qualification] docs: record morris lot 0 decisions
  audit/sfia-v2.6-repository-cartography                                        4ae75a9 [origin/audit/sfia-v2.6-repository-cartography] docs: restore section headers in pass authority traceability
  backlog/sfia-studio-ops1                                                      4032c25 [origin/backlog/sfia-studio-ops1: gone] docs: validate OPS1 backlog
  backlog/sfia-studio-poc-vertical-slice                                        b4b26b2 [origin/backlog/sfia-studio-poc-vertical-slice] docs(sfia-studio): define validated vertical slice backlog
  cadrage/sfia-v2.6-lot-h                                                       d54c952 [origin/cadrage/sfia-v2.6-lot-h] docs: align Lot H single-cycle execution strategy
--- remote D2-B ---
--- numstat package ---

```


## Findings résiduels

Aucun finding F-QA-01…06 résiduel démontré. Hors scope non traités.

## Réserves

- Correction locale ≠ QA revalidation
- Tests verts ≠ PR ready
- FAIL-CLOSED audit ≠ observabilité production
- Package corrigé ≠ D2-C ouvert

## Rollback

Restaurer les cinq fichiers à l’état QA FAIL (empreinte FULL_13=`3379ac64…`) depuis l’archive handoff / copies locales ; les huit protégés n’ont pas changé.

## Absence commit / push / PR projet

Confirmée. Push handoff L3 borné uniquement via `scripts/sfia/publish-review-handoff.sh`.

## Gate suivant candidat

```
GO QA REVALIDATION SFIA STUDIO V3.1-D2-B CKC RESOLVER —
REVIEW THE CORRECTED THIRTEEN-FILE PACKAGE AGAINST F-QA-01…06 AND BL-D2-B-01…06 —
VERIFY PROOF DISCLOSURE AND FALLBACKPOLICY INVARIANTS, GLOBAL MANIFEST VALIDATION, RESOLVEDAT ISO VALIDATION, MORRIS-ADOPTED FAIL-CLOSED AUDIT POLICY, SANITIZATION, NO RECURSIVE AUDIT, FAIL-CLOSED NEGATIVES, T-A2 COMPATIBILITY, D2-A ISOLATION, D2-C EXCLUSION, REGRESSIONS, TYPECHECK, LINT, FULL TEST SUITE AND BUILD —
NO COMMIT — NO PUSH — NO PR — NO D2-C — NO D2-D — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION
```

Ne pas exécuter automatiquement.

## Verdict

V3.1-D2-B F-QA-01…06 CORRECTIVE DELIVERY COMPLETE —
MORRIS FAIL-CLOSED AUDIT POLICY IMPLEMENTED —
PROOF FALLBACK DISCLOSURE AND FALLBACKPOLICY INVARIANTS VERIFIED —
COMPLETE INJECTED CKC MANIFEST VALIDATED BEFORE RESOLUTION —
RESOLVEDAT ISO VALIDATION VERIFIED —
ALL AUDIT APPEND FAILURES RETURN SAFE STRUCTURED D2-B FAILURE —
NO RAW AUDIT EXCEPTION EXPOSED —
NO CONSUMED TRUE PROOF AFTER AUDIT FAILURE —
NO RECURSIVE AUDIT ATTEMPT —
ADVERSARIAL REGRESSION TESTS PASS —
D2-B D2-A AND T-A2 REGRESSIONS PASS —
TYPECHECK LINT FULL TEST SUITE AND BUILD PASS —
THIRTEEN-FILE PACKAGE PRESERVED —
READY FOR DISTINCT QA REVALIDATION GATE —
NO COMMIT — NO PUSH — NO PR — NO D2-C — NO D2-D — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION
