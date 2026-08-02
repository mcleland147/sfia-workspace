# V3.1-D2-A — QA Revalidation Report (Critical)

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-08-02 13:57:07 CEST (+0200) |
| Cycle | 9 — QA / validation |
| Sous-type | QA revalidation corrective |
| Profil | **Critical** |
| Typologie | EVOL |
| Branche | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
| HEAD / main / origin/main | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| Handoff pré-cycle | tip `d6bdcd6…` · blob `abe83802…` |
| Verdict | **PASS** |
| R-QA-D2A-01 | `CLOSED — INDEPENDENT QA REVALIDATION PASS` |
| QA-G3 Morris | **NOT DECIDED — MORRIS DECISION REQUIRED** |

## B. Gate Morris

```text
GO QA REVALIDATION SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
VERIFY R-QA-D2A-01 CLOSURE, PUBLIC CATALOG FINGERPRINT BINDING, ERROR PRECEDENCE AND FULL NON-REGRESSION —
NO CORRECTIVE IMPLEMENTATION UNLESS DISTINCT MORRIS GO —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

GO consommé 2026-08-02 05:31 CEST (+0200).

## C. Objet de revalidation

Vérifier, sans correction, la clôture technique de R-QA-D2A-01 après Delivery
corrective : binding public fingerprint/catalogue, six scénarios historiques,
priorité des erreurs, HASH-A, non-régression.

## D. Référentiel

RV-01…RV-13 · INV-D2A-11/12 · BL-D2-A-01…04 · HASH-A · rapport QA 01 ·
rapport correctif 02 · handoff Corrective Delivery.

## E. CKC QA

`pilots/04-qa-validation.md` candidate v0.1.0 · `executionAuthority=false`.
Verdicts autorisés : PASS / PASS WITH RESERVES / FAIL. Aucun GO implicite.

## F. Git Truth

```text
2026-08-02 13:54:16 CEST (+0200)
BRANCH=delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
ORIGIN_MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
DIVERGENCE=0	0
HANDOFF_TIP=d6bdcd688a137ad20b03685bebff0e4b79111bcd
HANDOFF_BLOB=abe83802e88c0b352e5eb6b1b580784406953ab8
WORKTREES=77
DELIVERY_REMOTE_COUNT=0
FINDING_STATUS=PENDING INDEPENDENT QA REVALIDATION
```

## G. Handoff correctif source

Tip `d6bdcd688a137ad20b03685bebff0e4b79111bcd` · blob
`abe83802e88c0b352e5eb6b1b580784406953ab8`.
Archive locale : `.tmp-sfia-review/v3-1-d2-a-corrective-chatgpt-review-preserved.md`.
Statut pré-cycle : PENDING INDEPENDENT QA REVALIDATION (pas CLOSED).

## H. Empreintes de préservation

### Avant

```text
2026-08-02 13:54:16 CEST (+0200)
projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts  sha256=f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682  blob=9968f040283d8f626c65db48bbec7abd69c56e2d
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=235cc0030c5e42340086ef9e4452d668edaa440d6aabf11c27af1be18ca60a5d  blob=b436ee328fa9dfdb1d6eb3bc165dad285723113d
projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740
projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts  sha256=719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1  blob=0102fc02edb6e6f16420ea0de31a0d6361b221ba
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts  sha256=4386bfec4ee2ca59b725703a000738c6e27d32c276c228c10ff96a4f0ab242f6  blob=aa91cc5c36ea2dc27f36e5e8db89cd066fb5166b
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts  sha256=af7c6418dcac125ecad43464c5a7bb7079e60097139ef6f5be662e9d2795864e  blob=1ba9408249d7489bf1d30687129bc04f73e1214c
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md  sha256=4013fe2163e7faed9d88b8b8f6d280fa15b51d18aaf2cdcd770e332e14d6a82c  blob=8fbbd38d379fa406790c96d9a1df2bcbb47a641d
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md  sha256=fcc238a5f7d2b67af79af17d1e981c7d85ebb9be4ae4a14127a9ecd231b2a30c  blob=caaddbaa8a0de6596e5382f3f02d83643a896e2b
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md  sha256=5ffa22142b4ee7c9422f72d411d0fe6196cedd950d6a102771054b8195180788  blob=8c8d0970238e00a095c523f4e16ec3bd8008fd63
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md  sha256=b39b10def35df8cca3398fca5935e55e5f7c184ed4605d97a991ed211f08e47d  blob=adef939f784b253cf69c111f836d954f50228c3e
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md  sha256=54027d0c3bf21657e53253da7354478fb80a33645824338bdec04d6e35cfa8bd  blob=9327aca5218ce9c6c96412d7467607efbcd587e3
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md  sha256=a64cdda88170750007591fb92bdb212f786556650fa116bbf3c7a82ba282a515  blob=020f6fc4f60ad8aa515ec2b03a2fa0dbb595275b
.tmp-sfia-review/chatgpt-review.md  sha256=50c23f77d18f76e6b603f9c6a930070bdc5458e97791f219238c3145e41edd17  blob=abe83802e88c0b352e5eb6b1b580784406953ab8
```

### Après (code/tests protégés)

```text
2026-08-02 13:54:56 CEST (+0200)
projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts  sha256=f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682  match_pre=True
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  match_pre=True
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  match_pre=True
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=235cc0030c5e42340086ef9e4452d668edaa440d6aabf11c27af1be18ca60a5d  match_pre=True
projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  match_pre=True
projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts  sha256=719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1  match_pre=True
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  match_pre=True
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  match_pre=True
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts  sha256=4386bfec4ee2ca59b725703a000738c6e27d32c276c228c10ff96a4f0ab242f6  match_pre=True
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts  sha256=af7c6418dcac125ecad43464c5a7bb7079e60097139ef6f5be662e9d2795864e  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md  sha256=4013fe2163e7faed9d88b8b8f6d280fa15b51d18aaf2cdcd770e332e14d6a82c  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md  sha256=fcc238a5f7d2b67af79af17d1e981c7d85ebb9be4ae4a14127a9ecd231b2a30c  match_pre=True
PROTECTED_HASHES_UNCHANGED
```

`catalogProjection.ts` = empreinte corrective
`sha256=235cc0030c5e42340086ef9e4452d668edaa440d6aabf11c27af1be18ca60a5d`.

## I. Finding initial

R-QA-D2A-01 BLOQUANTE — seam public + fingerprint canonique + catalogue
divergent → `ok=true`. Invariants INV-D2A-11 / INV-D2A-12.

## J. Correctif déclaré

Binding via `serializeCatalogFingerprint` après contrôles locaux ; divergence →
`CATALOG_FINGERPRINT_STALE` ; pas de crypto runtime ; HASH-A inchangé.

## K. Inspection du diff correctif

```diff
--- .tmp-sfia-review/v3-1-d2-a-corrective-catalogProjection-before.ts	2026-08-02 04:44:22
+++ projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts	2026-08-02 04:45:14
@@ -6,7 +6,10 @@
   type CycleTypeCkcMapping,
   type CycleTypeDefinition,
 } from "./cycleTypeCatalog";
-import { CYCLE_TYPE_CATALOG_FINGERPRINT } from "./catalogFingerprint";
+import {
+  CYCLE_TYPE_CATALOG_FINGERPRINT,
+  serializeCatalogFingerprint,
+} from "./catalogFingerprint";
 import type {
   CatalogProjectionError,
   CatalogProjectionErrorCode,
@@ -24,6 +27,30 @@
     CYCLE_TYPE_MAPPING_INVALID: "The cycle type mapping is invalid.",
   });

+/** Canonical HASH-A serialization of the authoritative D1 catalog. */
+const CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION =
+  serializeCatalogFingerprint(CYCLE_TYPE_CATALOG);
+
+/**
+ * Fail-closed binding: the catalog actually used must match HASH-A.
+ * Identity with the singleton is sufficient; clones are compared by serialization.
+ */
+function catalogMatchesCanonicalFingerprint(
+  catalog: Pick<CycleTypeCatalog, "entries">,
+): boolean {
+  if (catalog === CYCLE_TYPE_CATALOG) {
+    return true;
+  }
+  try {
+    return (
+      serializeCatalogFingerprint(catalog) ===
+      CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION
+    );
+  } catch {
+    return false;
+  }
+}
+
 const ALLOWED_MAPPING_KEYS = new Set([
   "mandatory",
   "primaryLevel",
@@ -148,6 +175,13 @@
     });
   }

+  // Binding after local entry checks so precise codes keep precedence.
+  if (!catalogMatchesCanonicalFingerprint(catalog)) {
+    return failure("CATALOG_FINGERPRINT_STALE", context, {
+      retryable: true,
+    });
+  }
+
   return Object.freeze({
     ok: true,
     projection: Object.freeze({
```

Diff limité à : import `serializeCatalogFingerprint` · sérialisation canonique ·
helper `catalogMatchesCanonicalFingerprint` · contrôle avant succès. Aucun
refactoring opportuniste observé.

## L. Plan de revalidation

Étapes 1–8 exécutées : inspection diff · tests QA projection · filtre binding ·
fingerprint · Delivery · D1 · OA cycle · suite complète · typecheck/lint/build ·
statiques · Git.

## M. Matrice RV-01…RV-13

| ID | Exigence | Preuve | Résultat |
|----|----------|--------|----------|
| RV-01 | Six binding historiques PASS | `catalogProjection.qa.test.ts` binding · 37/37 · filtre 7/7 | **PASS** |
| RV-02 | Succès catalogue canonique | QA nominals + Delivery | **PASS** |
| RV-03 | Clone contractuellement identique | binding = égalité sérialisation HASH-A ; clone deep sans divergence contractuelle ⇒ serialize identique (fingerprint.qa déterminisme) + helper identité/`serialize` | **PASS** |
| RV-04 | Champs exclus ne déclenchent pas STALE | fingerprint.qa `ignores excluded field change` (label, shortDescription, displayOrder, methodReference, aliases) + binding sur serialize | **PASS** |
| RV-05 | Champ inclus ⇒ STALE | six scénarios binding (canonicalKey, methodCycleNumber, mapping, ordre, +/− entrée) | **PASS** |
| RV-06 | Ordre erreurs 1→8 | source + tests priorité QA/Delivery | **PASS** |
| RV-07 | Codes précis préservés | Delivery + QA mapping/lifecycle/unknown/version/hash | **PASS** |
| RV-08 | Exception sérialisation fail-closed | `try/catch` dans helper → `false` → STALE sans projection ; aucune exception exposée | **PASS** |
| RV-09 | HASH-A exact | constante `sha256:27316864…efd2cc` | **PASS** |
| RV-10 | catalogFingerprint.ts inchangé | empreinte pré=post | **PASS** |
| RV-11 | Quatre tests D2-A inchangés | empreintes pré=post | **PASS** |
| RV-12 | Pas crypto/I/O/D2-B/C | `rg` vide | **PASS** |
| RV-13 | Non-régression complète | 913/913 · typecheck/lint/build | **PASS** |

## N. Binding public catalogue/fingerprint

### Source actuelle

```typescript
import {
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_VERSION,
  type CycleTypeCatalog,
  type CycleTypeCkcMapping,
  type CycleTypeDefinition,
} from "./cycleTypeCatalog";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  serializeCatalogFingerprint,
} from "./catalogFingerprint";
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

/** Canonical HASH-A serialization of the authoritative D1 catalog. */
const CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION =
  serializeCatalogFingerprint(CYCLE_TYPE_CATALOG);

/**
 * Fail-closed binding: the catalog actually used must match HASH-A.
 * Identity with the singleton is sufficient; clones are compared by serialization.
 */
function catalogMatchesCanonicalFingerprint(
  catalog: Pick<CycleTypeCatalog, "entries">,
): boolean {
  if (catalog === CYCLE_TYPE_CATALOG) {
    return true;
  }
  try {
    return (
      serializeCatalogFingerprint(catalog) ===
      CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION
    );
  } catch {
    return false;
  }
}

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

  // Binding after local entry checks so precise codes keep precedence.
  if (!catalogMatchesCanonicalFingerprint(catalog)) {
    return failure("CATALOG_FINGERPRINT_STALE", context, {
      retryable: true,
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

Le seam public est conservé ; le succès exige l’équivalence HASH-A du catalogue
effectivement utilisé.

## O. Six scénarios historiques

Tous dans describe `public fingerprint/catalog binding (critical)` — désormais
verts (filtre `-t "public fingerprint/catalog binding"` : **7 passed | 30 skipped**,
dont les 6 rejects + expose seam) :

1. canonicalKey modifiée
2. methodCycleNumber modifié
3. mapping CKC contractuel divergent encore valide
4. ordre modifié
5. entrée supplémentaire
6. entrée manquante

## P. Champs inclus et exclus HASH-A

Inclus : cycleTypeId, canonicalKey, lifecycleStatus, methodCycleNumber, mapping
CKC contractuel (mandatory, primaryLevel, primaryReference, fallbackPolicy,
fallbackReference, executionAuthority, doctrineStatus, unavailableBehavior).

Exclus (fingerprint.qa) : label, shortDescription, displayOrder, methodReference,
aliases — ne modifient pas la sérialisation ni le binding.

## Q. Priorité des erreurs

Ordre source confirmé : correlationId → version → hash fourni → type →
lifecycle → mapping → **binding** → succès. Tests Delivery/QA conservent les
codes précis (pas de transformation mapping→STALE).

## R. Gestion des exceptions

`catalogMatchesCanonicalFingerprint` capture les erreurs de
`serializeCatalogFingerprint` et retourne `false` → Failure
`CATALOG_FINGERPRINT_STALE` sans projection.

## S. Tests ciblés

`npm test -- __tests__/oa/cycle/catalogProjection.qa.test.ts` → **37/37 PASS**, exit 0.

Filtre binding → **7/7 PASS**, exit 0.

## T. Tests fingerprint

Delivery **8/8** · QA **25/25** · HASH-A inchangé.

## U. Tests Delivery

Projection **16/16 PASS**.

## V. D1 et OA cycle

D1 **46/46** · oa/cycle **180/180**.

## W. Suite complète

`npm test` → **913/913 PASS**, exit 0.

## X. Typecheck/lint/build

typecheck 0 · lint PASS sans warning · build PASS.

## Y. Contrôles statiques

Aucune occurrence I/O/Next/infrastructure/D2-B/C/`consumed` dans
`catalogProjection.ts`.

## Z. Non-régression

Delivery, QA, D1, OA cycle, suite globale : verts. Aucune régression de priorité.

## AA. Fichiers protégés

**PROTECTED_HASHES_UNCHANGED** pour code/tests et rapports 01/02. Aucune
correction pendant la revalidation.

## AB. Réserves

Aucune réserve bloquante, majeure, mineure ou environnementale.

## AC. Limites

Pas de fuzzing multi-processus. Pas de preuve UI. Clôture technique du finding ≠
décision Morris QA-G3 ≠ PR readiness.

## AD. Anti-claims

QA revalidation PASS ≠ QA-G3 accepté · ≠ PR ready · ≠ D2-B/C autorisé ·
≠ production ready · ≠ « sans bug ».

## AE. Statut R-QA-D2A-01

`CLOSED — INDEPENDENT QA REVALIDATION PASS`

Clôture **technique** uniquement.

## AF. QA-G3 Morris

**NOT DECIDED — MORRIS DECISION REQUIRED.**

## AG. Gate suivant candidat

```text
GO ACCEPT QA-G3 SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
ACCEPT QA REVALIDATION VERDICT AND R-QA-D2A-01 CLOSURE —
PR READINESS NEXT —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

Ne pas exécuter automatiquement.

## AH. Verdict

```text
V3.1-D2-A INDEPENDENT QA REVALIDATION PASS —
R-QA-D2A-01 CLOSED BY REPRODUCIBLE QA EVIDENCE —
PUBLIC CATALOG FINGERPRINT BINDING VERIFIED —
SIX HISTORICAL BINDING FAILURES NOW PASS —
ERROR PRECEDENCE VERIFIED —
HASH-A UNCHANGED —
QA TESTS UNCHANGED —
D1 AND D2-A FULL NON-REGRESSION PASS —
NO CORRECTIVE IMPLEMENTATION DURING QA —
QA-G3 MORRIS DECISION REQUIRED —
NOT PR READY —
NO D2-B —
NO D2-C —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR
```

## Annexes — résultats complets

```text
===== PROJ QA FULL =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 6ms

 Test Files  1 passed (1)
      Tests  37 passed (37)
   Start at  13:54:26
   Duration  361ms (transform 86ms, setup 50ms, collect 122ms, tests 6ms, environment 0ms, prepare 38ms)

EXIT_PROJQA=0
===== PROJ QA BINDING FILTER =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts -t public fingerprint/catalog binding


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests | 30 skipped) 2ms

 Test Files  1 passed (1)
      Tests  7 passed | 30 skipped (37)
   Start at  13:54:26
   Duration  254ms (transform 74ms, setup 20ms, collect 103ms, tests 2ms, environment 0ms, prepare 35ms)

EXIT_BINDING=0
===== FP DELIVERY =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 3ms

 Test Files  1 passed (1)
      Tests  8 passed (8)
   Start at  13:54:27
   Duration  247ms (transform 70ms, setup 20ms, collect 98ms, tests 3ms, environment 0ms, prepare 25ms)

EXIT_FP=0
===== FP QA =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 4ms

 Test Files  1 passed (1)
      Tests  25 passed (25)
   Start at  13:54:27
   Duration  250ms (transform 71ms, setup 20ms, collect 100ms, tests 4ms, environment 0ms, prepare 25ms)

EXIT_FPQA=0
===== PROJ DELIVERY =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 3ms

 Test Files  1 passed (1)
      Tests  16 passed (16)
   Start at  13:54:28
   Duration  260ms (transform 76ms, setup 22ms, collect 108ms, tests 3ms, environment 0ms, prepare 22ms)

EXIT_PROJ=0
===== D1 =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/cycleTypeCatalog.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 7ms

 Test Files  1 passed (1)
      Tests  46 passed (46)
   Start at  13:54:28
   Duration  258ms (transform 76ms, setup 21ms, collect 105ms, tests 7ms, environment 0ms, prepare 22ms)

EXIT_D1=0
===== OA CYCLE =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 7ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 3ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 4ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 7ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 11ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 14ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 83ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 90ms

 Test Files  8 passed (8)
      Tests  180 passed (180)
   Start at  13:54:29
   Duration  427ms (transform 293ms, setup 277ms, collect 1.12s, tests 220ms, environment 1ms, prepare 292ms)

EXIT_OA=0
===== FULL TEST =====

> sfia-studio@0.1.0 test
> vitest run


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:30.330Z","status":"started","intentLength":53,"sessionLocalId":"plat-1"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T11:54:30.399Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-1","durationMs":69,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:30.399Z","status":"started","intentLength":76,"sessionLocalId":"plat-2"}

 ✓ __tests__/oa/project/projectLpsFoundation.test.ts (26 tests) 117ms
stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T11:54:30.517Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":76,"sessionLocalId":"plat-2","durationMs":118,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:30.517Z","status":"started","intentLength":77,"sessionLocalId":"plat-3"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T11:54:30.603Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":77,"sessionLocalId":"plat-3","durationMs":86,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:30.603Z","status":"started","intentLength":53,"sessionLocalId":"plat-4"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T11:54:30.604Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-4","durationMs":1,"providerMode":"fake"}

 ✓ __tests__/d1/intake-platform-integration.test.ts (5 tests) 275ms
stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-f92b1ae6-cbe6-4c93-abdb-10e6f4082c57 ops1-att-9e782db4-4d9d-4d2d-8488-b495bac2c00c fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-f92b1ae6-cbe6-4c93-abdb-10e6f4082c57 ops1-att-9e782db4-4d9d-4d2d-8488-b495bac2c00c 15 tools=0

 ✓ __tests__/oa/decision/decisionConfirmationAuthority.test.ts (26 tests) 84ms
stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-f92b1ae6-cbe6-4c93-abdb-10e6f4082c57 ops1-att-150a1196-2dd2-4dc4-9e0a-f39be8a901df fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-f92b1ae6-cbe6-4c93-abdb-10e6f4082c57 ops1-att-150a1196-2dd2-4dc4-9e0a-f39be8a901df 30 tools=0

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-f92b1ae6-cbe6-4c93-abdb-10e6f4082c57 ops1-att-c3e9d0d5-35f5-411a-8db4-ede26cb4676c fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-f92b1ae6-cbe6-4c93-abdb-10e6f4082c57 ops1-att-c3e9d0d5-35f5-411a-8db4-ede26cb4676c 45 tools=0

 ✓ __tests__/ops1/actionGate.test.ts (10 tests) 132ms
 ✓ __tests__/oa/execution-contract/runtimeValidationHardening.test.ts (16 tests) 164ms
 ✓ __tests__/oa/execution-contract/executionContractGovernance.test.ts (18 tests) 192ms
 ✓ __tests__/oa/execution-attempt/lifecycleFoundation.test.ts (24 tests) 252ms
stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-4c4e9830-6d7d-41ea-8ea1-4df291e1d3f9 ops1-att-2626bccd-af95-4ac7-bbb5-3b87ba0cea56 fake-test

stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-4c4e9830-6d7d-41ea-8ea1-4df291e1d3f9 ops1-att-2626bccd-af95-4ac7-bbb5-3b87ba0cea56 45 tools=1

 ✓ __tests__/ops1/controlTowerTools.test.ts (7 tests) 585ms
   ✓ GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker  375ms
stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-79bec5b8-135e-4ebf-b3e1-52d8f7acfd64 ops1-att-9b1ea496-5fc7-40a5-803c-1f4c4e3c707d fake-test

stderr | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
[ops1] CONVERSATION_ATTEMPT_FAILED ops1-sess-79bec5b8-135e-4ebf-b3e1-52d8f7acfd64 ops1-att-9b1ea496-5fc7-40a5-803c-1f4c4e3c707d INTERNAL

 ✓ __tests__/ops1/conversation-repository.test.ts (9 tests) 688ms
   ✓ ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error  324ms
 ✓ __tests__/oa/execution-attempt/qaAdversarialValidation.test.ts (12 tests) 102ms
 ✓ __tests__/oa/execution-contract/supersedeCancelAuthz.test.ts (11 tests) 94ms
 ✓ __tests__/oa/doctrine/resolveDoctrinePackage.test.ts (22 tests) 89ms
 ✓ __tests__/oa/decision/validationAdversarial.test.ts (12 tests) 97ms
 ✓ __tests__/oa/execution-contract/adversarialCriticalAntiTa5.test.ts (12 tests) 110ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 109ms
 ✓ __tests__/ops1/repository.test.ts (6 tests) 57ms
 ✓ __tests__/vertical-slice-core/localProjectComposition.test.ts (13 tests) 92ms
 ✓ __tests__/vertical-slice-runtime/runtimeApplicationService.test.ts (8 tests) 74ms
 ✓ __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts (4 tests) 72ms
 ✓ __tests__/vertical-slice-runtime/importBoundaries.test.ts (5 tests) 41ms
 ✓ __tests__/oa/decision/adversarialAuthority.test.ts (8 tests) 92ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 170ms
 ✓ __tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts (15 tests) 50ms
 ✓ __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts (5 tests) 52ms
 ✓ __tests__/oa/doctrine/schemaValidation.test.ts (3 tests) 151ms
 ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 15ms
 ✓ __tests__/vertical-slice-core/importBoundaries.test.ts (3 tests) 33ms
 ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 18ms
 ✓ __tests__/ops1/controlTowerReinjection.test.ts (2 tests) 23ms
 ✓ __tests__/platform/t-a7-canonical-consumers.probe.test.ts (3 tests) 14ms
stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks transitions while hold is active
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T11:54:32.060Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.project_create","ts":"2026-08-02T11:54:32.065Z","status":"ok","projectId":"proj-21249fd6-e8ff-4bb3-8f6f-cc54d85c8a2b","durationMs":1}
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T11:54:32.065Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T11:54:32.065Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > allows transitions when hold is inactive (test override)
{"event":"d1.project_create","ts":"2026-08-02T11:54:32.069Z","status":"ok","projectId":"proj-e5d29426-60d0-46aa-92f2-bb055148b423","durationMs":1}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T11:54:32.069Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T11:54:32.069Z","status":"ok","projectId":"proj-e5d29426-60d0-46aa-92f2-bb055148b423","durationMs":0}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks when hold is active even with empty reasons
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T11:54:32.070Z","status":"blocked","reasonCount":0,"codes":"ACTIVE_NO_REASONS"}

 ✓ __tests__/d1/t-a7-method-mode-hold.test.ts (6 tests) 13ms
 ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 7ms
 ✓ __tests__/oa/evidence-review/adversarialMaturityValidation.test.ts (3 tests) 11ms
 ✓ __tests__/oa/evidence-review/claimEvaluationLifecycle.test.ts (14 tests) 12ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts (10 tests) 16ms
 ✓ __tests__/oa/evidence-review/recommendNextGate.test.ts (11 tests) 18ms
 ✓ __tests__/oa/evidence-review/adversarialCoordinationValidation.test.ts (7 tests) 18ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 13ms
 ✓ __tests__/platform/import-boundaries.test.ts (3 tests) 11ms
 ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 3ms
 ✓ __tests__/platform/t-a7-consolidated-blocker-reduction.test.ts (19 tests) 9ms
 ✓ __tests__/oa/evidence-review/adversarialClaimEvaluationValidation.test.ts (4 tests) 10ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 16ms
 ✓ __tests__/oa/decision/antiLegacy.test.ts (4 tests) 9ms
 ✓ __tests__/oa/evidence-review/adversarialValidation.test.ts (9 tests) 7ms
 ✓ __tests__/oa/evidence-review/reviewBundleLifecycle.test.ts (14 tests) 9ms
 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 12ms
 ✓ __tests__/oa/execution-contract/antiLegacy.test.ts (4 tests) 15ms
 ✓ __tests__/ops1/openai-provider.test.ts (2 tests) 7ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 9ms
 ✓ __tests__/oa/project/antiLegacy.test.ts (4 tests) 10ms
 ✓ __tests__/oa/evidence-review/verifyAndUnavailable.test.ts (13 tests) 8ms
 ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 8ms
 ✓ __tests__/oa/execution-attempt/attemptRepository.test.ts (33 tests) 7ms
 ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 5ms
 ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 7ms
 ✓ __tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts (4 tests) 5ms
 ✓ __tests__/oa/evidence-review/reviewBundleDomain.test.ts (12 tests) 8ms
 ✓ __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts (3 tests) 4ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 7ms
 ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 4ms
 ✓ __tests__/platform/platform-ai.test.ts (5 tests) 2ms
 ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 3ms
 ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 8ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 8ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 3ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 1ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 3ms
 ✓ __tests__/ops1/sfia/canonicalEngine.test.ts (17 tests) 3043ms
   ✓ SFIA context resolver > detects context stale on head mismatch  364ms
   ✓ SFIA action compiler > denies protected path  303ms
   ✓ SFIA action compiler > preserves exact content  328ms
   ✓ SFIA action compiler > instantiates cursor prompt from real template  317ms
   ✓ SFIA conversation integration (fixture markers) > CREATE marker → ActionCandidate live  362ms
   ✓ SFIA conversation integration (fixture markers) > commit marker → POLICY_DENIED  316ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:33.644Z","status":"started","intentLength":53,"sessionLocalId":"s1"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T11:54:33.718Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"s1","durationMs":74,"providerMode":"fake"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:33.719Z","status":"started","intentLength":22,"sessionLocalId":"s2"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_clarification_requested","ts":"2026-08-02T11:54:33.815Z","status":"NEED_CLARIFICATION","intentLength":22,"sessionLocalId":"s2","durationMs":96,"providerMode":"fake"}

 ✓ __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx (4 tests) 186ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:33.815Z","status":"started","intentLength":22,"sessionLocalId":"s2"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T11:54:33.918Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":22,"sessionLocalId":"s2","durationMs":103,"providerMode":"fake"}

 ✓ __tests__/ops1/globalModeBadge.ui.test.tsx (5 tests) 215ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:33.919Z","status":"started","intentLength":39,"sessionLocalId":"s4"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T11:54:34.022Z","status":"PROVIDER","intentLength":39,"sessionLocalId":"s4","durationMs":103,"providerMode":"fake","errorCode":"PROVIDER"}

 ✓ __tests__/d1/intake-c2.test.ts (13 tests) 382ms
 ✓ __tests__/increment-a.test.tsx (8 tests) 101ms
stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:34.307Z","status":"started","intentLength":53,"sessionLocalId":"harden-1"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T11:54:34.393Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"harden-1","durationMs":86,"providerMode":"fake"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T11:54:34.394Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T11:54:34.394Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}

stderr | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T11:54:34.394Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T11:54:34.394Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > exact name ranks first with strong evidence
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.395Z","status":"started","sessionLocalId":"m1","proposalId":"rrp-campus"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.395Z","status":"AVAILABLE","sessionLocalId":"m1","durationMs":0,"proposalId":"rrp-campus","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T11:54:34.396Z","status":"STRONG_MATCH","sessionLocalId":"m1","durationMs":1,"proposalId":"rrp-campus","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > detects semantic proximity for contrats
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.396Z","status":"started","sessionLocalId":"m2","proposalId":"rrp-c"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.396Z","status":"AVAILABLE","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T11:54:34.397Z","status":"STRONG_MATCH","sessionLocalId":"m2","durationMs":1,"proposalId":"rrp-c","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > flags multiple close matches as ambiguity
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.397Z","status":"started","sessionLocalId":"m3","proposalId":"rrp-multi"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.397Z","status":"AVAILABLE","sessionLocalId":"m3","durationMs":0,"proposalId":"rrp-multi","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T11:54:34.404Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m3","durationMs":7,"proposalId":"rrp-multi","candidateCount":2,"topScoreBand":"WEAK_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > returns no-match without inventing ids
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.404Z","status":"started","sessionLocalId":"m4","proposalId":"rrp-none"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.404Z","status":"AVAILABLE","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T11:54:34.405Z","status":"NO_MATCH","sessionLocalId":"m4","durationMs":1,"proposalId":"rrp-none","sourceProjectCount":1}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > warns on inactive project without auto-resume
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.405Z","status":"started","sessionLocalId":"m5","proposalId":"rrp-draft"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.405Z","status":"AVAILABLE","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T11:54:34.405Z","status":"STRONG_MATCH","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > analyze-only does not force attachment
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.405Z","status":"started","sessionLocalId":"m6","proposalId":"rrp-ao"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.405Z","status":"AVAILABLE","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T11:54:34.405Z","status":"STRONG_MATCH","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > distinguishes context unavailable from empty
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.405Z","status":"started","sessionLocalId":"m7","proposalId":"rrp-u"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.405Z","status":"UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"proposalId":"rrp-u","sourceProjectCount":0,"truncationApplied":false}
[d1.intake] {"event":"intake_context_unavailable","ts":"2026-08-02T11:54:34.405Z","status":"CONTEXT_UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"errorCode":"UNAVAILABLE","proposalId":"rrp-u"}
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.405Z","status":"started","sessionLocalId":"m8","proposalId":"rrp-e"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.405Z","status":"EMPTY","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0,"truncationApplied":false}
[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T11:54:34.405Z","status":"NO_MATCH","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > caps candidates at 5 and keeps scores bounded
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.406Z","status":"started","sessionLocalId":"m9","proposalId":"rrp-cap"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.406Z","status":"AVAILABLE","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","sourceProjectCount":8,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T11:54:34.406Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","candidateCount":5,"topScoreBand":"WEAK_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 snapshot from real repository (read-only) > matches against created projects without mutation
{"event":"d1.project_create","ts":"2026-08-02T11:54:34.412Z","status":"ok","projectId":"proj-da400e64-8372-49e1-ba46-9a62862be30e","durationMs":1}
{"event":"d1.project_create","ts":"2026-08-02T11:54:34.412Z","status":"ok","projectId":"proj-72d8f769-02e6-4777-8312-353712d8bc0c","durationMs":0}
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.412Z","status":"started","sessionLocalId":"repo-1","proposalId":"rrp-repo"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.412Z","status":"AVAILABLE","sessionLocalId":"repo-1","durationMs":0,"proposalId":"rrp-repo","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T11:54:34.413Z","status":"STRONG_MATCH","sessionLocalId":"repo-1","durationMs":1,"proposalId":"rrp-repo","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

 ✓ __tests__/d1/intake-c3.test.ts (16 tests) 107ms
 ✓ __tests__/ops1/Ops1SessionScreen.test.tsx (4 tests) 111ms
 ✓ __tests__/d1/intake-c1.test.tsx (6 tests) 637ms
 ✓ __tests__/increment-e.test.tsx (4 tests) 73ms
 ✓ __tests__/gates.test.tsx (1 test) 41ms
 ✓ __tests__/ops1/allowlistEvaluation.test.ts (9 tests) 42ms
 ✓ __tests__/increment-d.test.tsx (5 tests) 64ms
 ✓ __tests__/navigation.test.tsx (2 tests) 62ms
 ✓ __tests__/shell.test.tsx (1 test) 71ms
 ✓ __tests__/increment-b.test.tsx (6 tests) 42ms
 ✓ __tests__/increment-c.test.tsx (8 tests) 1152ms
   ✓ Increment C — editable demand + confirmation > back from confirmation allows editing again  328ms
 ✓ __tests__/ops1/executionI5.test.ts (5 tests) 1561ms
   ✓ ops1 I5 execution contract + fixture run > creates contract, records GO linked to hash, runs fixture, blocks double exec  642ms
stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > creates project only with explicit confirmation and audits
[d1.intake] {"event":"intake_mutation_failed","ts":"2026-08-02T11:54:35.296Z","status":"FAILED","sessionLocalId":"s1","durationMs":0,"errorCode":"VALIDATION","proposalId":"rrp-1"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.297Z","status":"CREATE_PROJECT","sessionLocalId":"s1","proposalId":"rrp-1"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T11:54:35.297Z","status":"confirmed","sessionLocalId":"s1","proposalId":"rrp-1"}
{"event":"d1.project_create","ts":"2026-08-02T11:54:35.298Z","status":"ok","projectId":"proj-73bab015-f2df-4251-ac5d-99825f3d3f6a","durationMs":1}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T11:54:35.298Z","status":"SUCCEEDED","projectId":"proj-73bab015-f2df-4251-ac5d-99825f3d3f6a","sessionLocalId":"s1","durationMs":1,"proposalId":"rrp-1"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > replays same key same payload without duplicate
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.302Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T11:54:35.302Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
{"event":"d1.project_create","ts":"2026-08-02T11:54:35.303Z","status":"ok","projectId":"proj-51651c81-2efe-4986-aa80-87451185e244","durationMs":1}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T11:54:35.303Z","status":"SUCCEEDED","projectId":"proj-51651c81-2efe-4986-aa80-87451185e244","sessionLocalId":"s2","durationMs":1,"proposalId":"rrp-2"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.303Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T11:54:35.303Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_replayed","ts":"2026-08-02T11:54:35.303Z","status":"ALREADY_APPLIED","projectId":"proj-51651c81-2efe-4986-aa80-87451185e244","sessionLocalId":"s2","durationMs":0,"proposalId":"rrp-2"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > conflicts when same key different payload
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.306Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T11:54:35.306Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
{"event":"d1.project_create","ts":"2026-08-02T11:54:35.307Z","status":"ok","projectId":"proj-4ecd3c0b-bdde-47d1-8166-ab7491368c2b","durationMs":1}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T11:54:35.307Z","status":"SUCCEEDED","projectId":"proj-4ecd3c0b-bdde-47d1-8166-ab7491368c2b","sessionLocalId":"s3","durationMs":1,"proposalId":"rrp-3"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.307Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T11:54:35.307Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_mutation_rejected","ts":"2026-08-02T11:54:35.307Z","status":"CONFLICT","sessionLocalId":"s3","durationMs":0,"errorCode":"IDEMPOTENCY","proposalId":"rrp-3"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > existing project confirm is NO_MUTATION without invented link
{"event":"d1.project_create","ts":"2026-08-02T11:54:35.310Z","status":"ok","projectId":"proj-35e0d22d-f219-4244-87dd-5692e906c127","durationMs":0}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.310Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s4","proposalId":"rrp-4"}
[d1.intake] {"event":"intake_existing_project_confirmed","ts":"2026-08-02T11:54:35.311Z","status":"NO_MUTATION","projectId":"proj-35e0d22d-f219-4244-87dd-5692e906c127","sessionLocalId":"s4","durationMs":1,"proposalId":"rrp-4"}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > creates project with audit and mono-operator assignments
{"event":"d1.project_create","ts":"2026-08-02T11:54:35.321Z","status":"ok","projectId":"proj-35141983-aa34-412f-8b36-ad993fa98ad5","durationMs":1}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > detects stale existing project conflict
{"event":"d1.project_create","ts":"2026-08-02T11:54:35.322Z","status":"ok","projectId":"proj-11cc0293-2fa9-411e-8fd3-548a684c44b6","durationMs":3}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T11:54:35.322Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T11:54:35.323Z","status":"ok","projectId":"proj-11cc0293-2fa9-411e-8fd3-548a684c44b6","durationMs":1}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.323Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s5","proposalId":"rrp-5"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T11:54:35.323Z","status":"STALE","projectId":"proj-11cc0293-2fa9-411e-8fd3-548a684c44b6","sessionLocalId":"s5","durationMs":0,"errorCode":"CONFLICT","proposalId":"rrp-5"}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > is idempotent on duplicate key
{"event":"d1.project_create","ts":"2026-08-02T11:54:35.327Z","status":"ok","projectId":"proj-b81eaf3f-df1b-48b6-92e6-c1775632ecb4","durationMs":1}
{"event":"d1.project_create","ts":"2026-08-02T11:54:35.327Z","status":"idempotent","projectId":"proj-b81eaf3f-df1b-48b6-92e6-c1775632ecb4","durationMs":0}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > analyze-only and cancel produce no mutation
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.327Z","status":"ANALYZE_ONLY","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_analyze_only_completed","ts":"2026-08-02T11:54:35.327Z","status":"NO_MUTATION","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.328Z","status":"CANCEL","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_cancelled","ts":"2026-08-02T11:54:35.328Z","status":"CANCELLED","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
{"event":"d1.project_create","ts":"2026-08-02T11:54:35.331Z","status":"ok","projectId":"proj-a7a33b6e-d8cc-48ce-a6d4-530264217e0c","durationMs":1}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T11:54:35.331Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T11:54:35.332Z","status":"ok","projectId":"proj-a7a33b6e-d8cc-48ce-a6d4-530264217e0c","durationMs":1}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T11:54:35.332Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T11:54:35.332Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.332Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T11:54:35.332Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":0,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}

 ✓ __tests__/d1/intake-c4.test.ts (10 tests) 45ms
 ✓ __tests__/d1/project-foundation.test.ts (7 tests) 22ms
 ✓ __tests__/status-pill.test.tsx (1 test) 17ms
 ✓ __tests__/fixtures.test.ts (2 tests) 2ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 19ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 2ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 1ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 2663ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  547ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  573ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  377ms
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 2792ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1551ms

 Test Files  94 passed (94)
      Tests  913 passed (913)
   Start at  13:54:30
   Duration  6.51s (transform 2.53s, setup 2.97s, collect 10.87s, tests 17.82s, environment 5.32s, prepare 3.26s)

EXIT_ALL=0
===== TYPECHECK =====

> sfia-studio@0.1.0 typecheck
> tsc --noEmit

EXIT_TC=0
===== LINT =====

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
EXIT_LINT=0
===== BUILD =====

> sfia-studio@0.1.0 build
> next build

   ▲ Next.js 15.5.20

   Creating an optimized production build ...
 ✓ Compiled successfully in 939ms
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

EXIT_BUILD=0
```
