# Full Review Pack — SFIA Studio V3.1-D2-A Corrective Delivery

## Métadonnées et rôle

Date/heure/fuseau : 2026-08-02 04:46:44 CEST (+0200).
Rôle Cursor : exécution bornée du cycle 8 Delivery / implémentation corrective.
Profil **Critical** justifié : le défaut ouvre un contournement fail-closed
amont de la chaîne D2. Typologie EVOL / corrective.

## Gate Morris complet

```text
GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
ADDRESS ONLY R-QA-D2A-01 —
PRESERVE QA TESTS —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

## CKC fallback et template

Contrat détaillé Delivery corrective absent. Fallback :
`02-fifteen-cycles-synthetic-map.md` + méthode §4.8 (method-candidate,
`executionAuthority=false`). Template canonique consulté.
Limite pre-check ChatGPT : état local non inspecté par ChatGPT ; Cursor a
réalisé le Local Git Truth Check complet.

## Git Truth et handoff QA source

```text
2026-08-02 04:44:22 CEST (+0200)
BRANCH=delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
ORIGIN_MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
DIVERGENCE=0 0
HANDOFF_TIP=5274d88eedd62345dcb662fdba8bcf92540b34c8
HANDOFF_BLOB=a2d0742b9a2e62ec7dfe6832e98360fbae01dcb2
WORKTREES=77
DELIVERY_REMOTE_COUNT=0
```

Handoff QA tip `5274d88…`, blob `a2d0742b…`. Archive QA :
`.tmp-sfia-review/v3-1-d2-a-qa-chatgpt-review-preserved.md`.

## Finding R-QA-D2A-01 et invariants

INV-D2A-11 / INV-D2A-12. Contournement public : fingerprint canonique +
catalogue injecté divergent → `ok=true`. Six variantes documentées.

## Empreintes et baseline rouge

```text
2026-08-02 04:44:21 CEST (+0200)
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=9e348d9c00946f60188120a4e369bace9cb4cad3eb02f3e08d893a23f71233a1  blob=d1bb3b9cb144b35104341b2f75b679b2ffb20892
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26
projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740
projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts  sha256=f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682  blob=9968f040283d8f626c65db48bbec7abd69c56e2d
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts  sha256=4386bfec4ee2ca59b725703a000738c6e27d32c276c228c10ff96a4f0ab242f6  blob=aa91cc5c36ea2dc27f36e5e8db89cd066fb5166b
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts  sha256=af7c6418dcac125ecad43464c5a7bb7079e60097139ef6f5be662e9d2795864e  blob=1ba9408249d7489bf1d30687129bc04f73e1214c
projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts  sha256=719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1  blob=0102fc02edb6e6f16420ea0de31a0d6361b221ba
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md  sha256=4013fe2163e7faed9d88b8b8f6d280fa15b51d18aaf2cdcd770e332e14d6a82c  blob=8fbbd38d379fa406790c96d9a1df2bcbb47a641d
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md  sha256=14aa3da501cbd7fe69c9bfb08560842565cbd5a6cd401bd4e0635024533c5a71  blob=e92e12822036c087659983aa831a514c07d72b02
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md  sha256=74335bede5d9b006e1d03bd1329a007879bcac73e43a2d4f1a124989d86eee0a  blob=cc7ef6ce9e5f35ed90ebf8861e574be579f9b5e5
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md  sha256=b505cc43d4046021231db9a8e8a6fd15e425afc104a47b62c8252c2ea5977cff  blob=56b328920985acda076d0fe876d9b05900f28358
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md  sha256=07aee6399672b1fa383bfe33b53efafcdc6b1aa9669276d0b9d9429953ec15b1  blob=35bc85b12294e87524b87cfa968571c7a27a51ca
.tmp-sfia-review/chatgpt-review.md  sha256=6930a683d377d854c17d0311010c8e4677cbc427b02e4ebdcaf97733c144d177  blob=a2d0742b9a2e62ec7dfe6832e98360fbae01dcb2
```

```text
===== FP DELIVERY =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 3ms

 Test Files  1 passed (1)
      Tests  8 passed (8)
   Start at  04:44:27
   Duration  345ms (transform 85ms, setup 55ms, collect 116ms, tests 3ms, environment 0ms, prepare 35ms)

EXIT_FP=0
===== PROJ DELIVERY =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 3ms

 Test Files  1 passed (1)
      Tests  16 passed (16)
   Start at  04:44:28
   Duration  252ms (transform 72ms, setup 21ms, collect 102ms, tests 3ms, environment 0ms, prepare 25ms)

EXIT_PROJ=0
===== FP QA =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 4ms

 Test Files  1 passed (1)
      Tests  25 passed (25)
   Start at  04:44:28
   Duration  269ms (transform 74ms, setup 24ms, collect 104ms, tests 4ms, environment 0ms, prepare 27ms)

EXIT_FPQA=0
===== PROJ QA =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests | 6 failed) 10ms
   ✓ V3.1-D2-A QA — Catalog Projection nominals > projects every active adopted cycle type with frozen read-only success 2ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty/whitespace correlationId before other checks 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects incompatible version before fingerprint 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects stale fingerprint before type lookup 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects unknown type before lifecycle/mapping 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version whitespace 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version case 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version suffix 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash whitespace 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash uppercase 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash wrong prefix 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash short 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty cycleTypeId and propagates valid correlationId on failure 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle deprecated 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle unavailable 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle future-status 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects mandatory=false 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects unknown primaryLevel 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects empty/whitespace primaryReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects executionAuthority=true 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects invalid doctrineStatus and unavailableBehavior 1ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed mappings without canonical fallback 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed with wrong fallbackPolicy or fallbackReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects extended mapping properties 0ms
   ✓ V3.1-D2-A QA — error contract > covers the six documented error codes with blocking safe failures 0ms
   ✓ V3.1-D2-A QA — error contract > documents retryable/recoverable classification for catalog stale errors 0ms
   ✓ V3.1-D2-A QA — public fingerprint/catalog binding (critical) > exposes the catalog seam on the public API signature 0ms
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint 3ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps index.ts limited to the three additive D2-A exports 0ms
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps production projection free of D2-B/C and runtime I/O imports 0ms
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > does not mutate production catalog entries across calls 0ms

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 6 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:527:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:537:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:562:23
    560|     );
    561|     const result = projectSelectableCycleType(context(), catalog);
    562|     expect(result.ok).toBe(false);
       |                       ^
    563|     if (result.ok) {
    564|       // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:585:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:601:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:611:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/6]⎯


 Test Files  1 failed (1)
      Tests  6 failed | 31 passed (37)
   Start at  04:44:29
   Duration  269ms (transform 75ms, setup 21ms, collect 106ms, tests 10ms, environment 0ms, prepare 28ms)

EXIT_PROJQA=1
===== D1 =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/cycleTypeCatalog.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 7ms

 Test Files  1 passed (1)
      Tests  46 passed (46)
   Start at  04:44:29
   Duration  271ms (transform 76ms, setup 20ms, collect 106ms, tests 7ms, environment 0ms, prepare 29ms)

EXIT_D1=0
```

## Source catalogProjection.ts avant / après / diff

### Avant

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

### Après

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

### Diff

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

## Binding, ordre des erreurs, HASH-A, QA tests

Binding par sérialisation HASH-A après contrôles locaux. Ordre 1→8 préservé.
HASH-A inchangé. Tests QA empreintes inchangées. Six tests rouges désormais verts.

## Résultats et non-régression

```text
===== FP DELIVERY =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 3ms

 Test Files  1 passed (1)
      Tests  8 passed (8)
   Start at  04:45:21
   Duration  314ms (transform 78ms, setup 39ms, collect 109ms, tests 3ms, environment 0ms, prepare 35ms)

EXIT_FP=0
===== PROJ DELIVERY =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 3ms

 Test Files  1 passed (1)
      Tests  16 passed (16)
   Start at  04:45:22
   Duration  273ms (transform 73ms, setup 21ms, collect 103ms, tests 3ms, environment 0ms, prepare 36ms)

EXIT_PROJ=0
===== FP QA =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 4ms

 Test Files  1 passed (1)
      Tests  25 passed (25)
   Start at  04:45:22
   Duration  259ms (transform 72ms, setup 20ms, collect 102ms, tests 4ms, environment 0ms, prepare 23ms)

EXIT_FPQA=0
===== PROJ QA =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 6ms

 Test Files  1 passed (1)
      Tests  37 passed (37)
   Start at  04:45:23
   Duration  276ms (transform 75ms, setup 22ms, collect 105ms, tests 6ms, environment 0ms, prepare 29ms)

EXIT_PROJQA=0
===== D1 =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/cycleTypeCatalog.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 7ms

 Test Files  1 passed (1)
      Tests  46 passed (46)
   Start at  04:45:23
   Duration  267ms (transform 79ms, setup 20ms, collect 111ms, tests 7ms, environment 0ms, prepare 22ms)

EXIT_D1=0
===== OA CYCLE =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 5ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 5ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 6ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 7ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 9ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 17ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 81ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 98ms

 Test Files  8 passed (8)
      Tests  180 passed (180)
   Start at  04:45:24
   Duration  466ms (transform 353ms, setup 306ms, collect 1.29s, tests 229ms, environment 1ms, prepare 322ms)

EXIT_OA=0
===== FULL TEST =====

> sfia-studio@0.1.0 test
> vitest run


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/ops1/actionGate.test.ts (10 tests) 118ms
stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:25.396Z","status":"started","intentLength":53,"sessionLocalId":"plat-1"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:25.498Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-1","durationMs":102,"providerMode":"fake"}

 ✓ __tests__/oa/doctrine/resolveDoctrinePackage.test.ts (22 tests) 94ms
stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:25.499Z","status":"started","intentLength":76,"sessionLocalId":"plat-2"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:25.642Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":76,"sessionLocalId":"plat-2","durationMs":143,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:25.643Z","status":"started","intentLength":77,"sessionLocalId":"plat-3"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:25.737Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":77,"sessionLocalId":"plat-3","durationMs":94,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:25.738Z","status":"started","intentLength":53,"sessionLocalId":"plat-4"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:25.738Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-4","durationMs":0,"providerMode":"fake"}

 ✓ __tests__/d1/intake-platform-integration.test.ts (5 tests) 344ms
stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-b6b4e9ff-7752-4a9a-b948-00452ef5ef44 fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-b6b4e9ff-7752-4a9a-b948-00452ef5ef44 15 tools=0

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-5044f642-f98d-411d-a493-ef1e2f9d98ce fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-5044f642-f98d-411d-a493-ef1e2f9d98ce 30 tools=0

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-a392a8ef-d782-452d-bee1-adeaabaa4cfd fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-a392a8ef-d782-452d-bee1-adeaabaa4cfd 45 tools=0

 ✓ __tests__/oa/project/projectLpsFoundation.test.ts (26 tests) 120ms
 ✓ __tests__/oa/execution-attempt/qaAdversarialValidation.test.ts (12 tests) 113ms
 ✓ __tests__/oa/execution-contract/executionContractGovernance.test.ts (18 tests) 124ms
 ✓ __tests__/oa/execution-contract/runtimeValidationHardening.test.ts (16 tests) 130ms
 ✓ __tests__/oa/execution-attempt/lifecycleFoundation.test.ts (24 tests) 185ms
stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-74a4afce-6d73-4f92-927c-94a4671e3752 ops1-att-0e12f573-2c6a-4278-bbdb-0a4fc690bee9 fake-test

stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-74a4afce-6d73-4f92-927c-94a4671e3752 ops1-att-0e12f573-2c6a-4278-bbdb-0a4fc690bee9 45 tools=1

 ✓ __tests__/ops1/controlTowerTools.test.ts (7 tests) 618ms
   ✓ GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker  388ms
stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-5fc99972-12ec-414b-868b-18dc1f092134 ops1-att-a17f9a5a-c450-411f-a1c8-66ffab1c4aff fake-test

stderr | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
[ops1] CONVERSATION_ATTEMPT_FAILED ops1-sess-5fc99972-12ec-414b-868b-18dc1f092134 ops1-att-a17f9a5a-c450-411f-a1c8-66ffab1c4aff INTERNAL

 ✓ __tests__/ops1/conversation-repository.test.ts (9 tests) 707ms
   ✓ ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error  339ms
 ✓ __tests__/oa/execution-contract/supersedeCancelAuthz.test.ts (11 tests) 109ms
 ✓ __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts (4 tests) 65ms
 ✓ __tests__/oa/execution-contract/adversarialCriticalAntiTa5.test.ts (12 tests) 93ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 105ms
 ✓ __tests__/oa/decision/validationAdversarial.test.ts (12 tests) 107ms
 ✓ __tests__/oa/decision/decisionConfirmationAuthority.test.ts (26 tests) 124ms
 ✓ __tests__/vertical-slice-core/localProjectComposition.test.ts (13 tests) 83ms
 ✓ __tests__/oa/decision/adversarialAuthority.test.ts (8 tests) 76ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 122ms
 ✓ __tests__/ops1/repository.test.ts (6 tests) 82ms
 ✓ __tests__/vertical-slice-runtime/runtimeApplicationService.test.ts (8 tests) 71ms
 ✓ __tests__/oa/doctrine/schemaValidation.test.ts (3 tests) 51ms
 ✓ __tests__/vertical-slice-core/importBoundaries.test.ts (3 tests) 41ms
 ✓ __tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts (15 tests) 54ms
 ✓ __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts (5 tests) 45ms
 ✓ __tests__/vertical-slice-runtime/importBoundaries.test.ts (5 tests) 56ms
 ✓ __tests__/platform/t-a7-canonical-consumers.probe.test.ts (3 tests) 14ms
 ✓ __tests__/oa/decision/antiLegacy.test.ts (4 tests) 8ms
 ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 19ms
 ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 19ms
 ✓ __tests__/ops1/controlTowerReinjection.test.ts (2 tests) 21ms
 ✓ __tests__/oa/evidence-review/reviewBundleDomain.test.ts (12 tests) 6ms
 ✓ __tests__/oa/evidence-review/adversarialCoordinationValidation.test.ts (7 tests) 15ms
 ✓ __tests__/oa/evidence-review/recommendNextGate.test.ts (11 tests) 24ms
 ✓ __tests__/oa/evidence-review/adversarialValidation.test.ts (9 tests) 9ms
stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks transitions while hold is active
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:45:27.264Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.project_create","ts":"2026-08-02T02:45:27.269Z","status":"ok","projectId":"proj-e6cfc8bf-d0e7-4cb9-be4b-81fd2fdf07eb","durationMs":1}
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:45:27.270Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:27.270Z","status":"failed","durationMs":1,"errorCode":"CONFLICT"}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > allows transitions when hold is inactive (test override)
{"event":"d1.project_create","ts":"2026-08-02T02:45:27.273Z","status":"ok","projectId":"proj-b54d0d9a-de42-4564-98f3-ae41cd65840e","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:45:27.273Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:27.274Z","status":"ok","projectId":"proj-b54d0d9a-de42-4564-98f3-ae41cd65840e","durationMs":1}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks when hold is active even with empty reasons
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:45:27.274Z","status":"blocked","reasonCount":0,"codes":"ACTIVE_NO_REASONS"}

 ✓ __tests__/d1/t-a7-method-mode-hold.test.ts (6 tests) 14ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 21ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts (10 tests) 17ms
 ✓ __tests__/oa/evidence-review/claimEvaluationLifecycle.test.ts (14 tests) 17ms
 ✓ __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts (3 tests) 4ms
 ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 5ms
 ✓ __tests__/oa/execution-contract/antiLegacy.test.ts (4 tests) 7ms
 ✓ __tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts (4 tests) 6ms
 ✓ __tests__/oa/evidence-review/reviewBundleLifecycle.test.ts (14 tests) 9ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 14ms
 ✓ __tests__/oa/evidence-review/adversarialClaimEvaluationValidation.test.ts (4 tests) 12ms
 ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 7ms
 ✓ __tests__/ops1/openai-provider.test.ts (2 tests) 6ms
 ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 4ms
 ✓ __tests__/oa/evidence-review/verifyAndUnavailable.test.ts (13 tests) 6ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 10ms
 ✓ __tests__/oa/evidence-review/adversarialMaturityValidation.test.ts (3 tests) 18ms
 ✓ __tests__/platform/import-boundaries.test.ts (3 tests) 11ms
 ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 16ms
 ✓ __tests__/platform/platform-ai.test.ts (5 tests) 3ms
 ✓ __tests__/oa/execution-attempt/attemptRepository.test.ts (33 tests) 7ms
 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 8ms
 ✓ __tests__/platform/t-a7-consolidated-blocker-reduction.test.ts (19 tests) 10ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 7ms
 ✓ __tests__/oa/project/antiLegacy.test.ts (4 tests) 6ms
 ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 8ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 6ms
 ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 5ms
 ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 3ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 2ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 3ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 4ms
 ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 5ms
 ✓ __tests__/ops1/sfia/canonicalEngine.test.ts (17 tests) 3361ms
   ✓ SFIA context resolver > detects context stale on head mismatch  352ms
   ✓ SFIA action compiler > compiles valid CREATE and persists ActionCandidate  305ms
   ✓ SFIA action compiler > denies commit/push operations  352ms
   ✓ SFIA action compiler > denies context stale  326ms
   ✓ SFIA action compiler > preserves exact content  342ms
   ✓ SFIA action compiler > instantiates cursor prompt from real template  341ms
   ✓ SFIA conversation integration (fixture markers) > CREATE marker → ActionCandidate live  415ms
   ✓ SFIA conversation integration (fixture markers) > commit marker → POLICY_DENIED  350ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:28.965Z","status":"started","intentLength":53,"sessionLocalId":"s1"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:29.102Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"s1","durationMs":137,"providerMode":"fake"}

 ✓ __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx (4 tests) 197ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:29.102Z","status":"started","intentLength":22,"sessionLocalId":"s2"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_clarification_requested","ts":"2026-08-02T02:45:29.200Z","status":"NEED_CLARIFICATION","intentLength":22,"sessionLocalId":"s2","durationMs":98,"providerMode":"fake"}

 ✓ __tests__/ops1/globalModeBadge.ui.test.tsx (5 tests) 218ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:29.200Z","status":"started","intentLength":22,"sessionLocalId":"s2"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:29.307Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":22,"sessionLocalId":"s2","durationMs":107,"providerMode":"fake"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:29.308Z","status":"started","intentLength":39,"sessionLocalId":"s4"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:45:29.416Z","status":"PROVIDER","intentLength":39,"sessionLocalId":"s4","durationMs":108,"providerMode":"fake","errorCode":"PROVIDER"}

 ✓ __tests__/d1/intake-c2.test.ts (13 tests) 456ms
stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:29.355Z","status":"started","intentLength":53,"sessionLocalId":"harden-1"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:29.458Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"harden-1","durationMs":103,"providerMode":"fake"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:45:29.460Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:45:29.460Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}

stderr | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T02:45:29.460Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T02:45:29.460Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > exact name ranks first with strong evidence
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.462Z","status":"started","sessionLocalId":"m1","proposalId":"rrp-campus"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.462Z","status":"AVAILABLE","sessionLocalId":"m1","durationMs":0,"proposalId":"rrp-campus","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.463Z","status":"STRONG_MATCH","sessionLocalId":"m1","durationMs":1,"proposalId":"rrp-campus","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > detects semantic proximity for contrats
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.463Z","status":"started","sessionLocalId":"m2","proposalId":"rrp-c"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.463Z","status":"AVAILABLE","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.463Z","status":"STRONG_MATCH","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > flags multiple close matches as ambiguity
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.463Z","status":"started","sessionLocalId":"m3","proposalId":"rrp-multi"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.463Z","status":"AVAILABLE","sessionLocalId":"m3","durationMs":0,"proposalId":"rrp-multi","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T02:45:29.471Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m3","durationMs":8,"proposalId":"rrp-multi","candidateCount":2,"topScoreBand":"WEAK_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > returns no-match without inventing ids
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.471Z","status":"started","sessionLocalId":"m4","proposalId":"rrp-none"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.471Z","status":"AVAILABLE","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T02:45:29.471Z","status":"NO_MATCH","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > warns on inactive project without auto-resume
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.471Z","status":"started","sessionLocalId":"m5","proposalId":"rrp-draft"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.471Z","status":"AVAILABLE","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.472Z","status":"STRONG_MATCH","sessionLocalId":"m5","durationMs":1,"proposalId":"rrp-draft","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > analyze-only does not force attachment
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.472Z","status":"started","sessionLocalId":"m6","proposalId":"rrp-ao"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.472Z","status":"AVAILABLE","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.472Z","status":"STRONG_MATCH","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > distinguishes context unavailable from empty
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.472Z","status":"started","sessionLocalId":"m7","proposalId":"rrp-u"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.472Z","status":"UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"proposalId":"rrp-u","sourceProjectCount":0,"truncationApplied":false}
[d1.intake] {"event":"intake_context_unavailable","ts":"2026-08-02T02:45:29.472Z","status":"CONTEXT_UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"errorCode":"UNAVAILABLE","proposalId":"rrp-u"}
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.472Z","status":"started","sessionLocalId":"m8","proposalId":"rrp-e"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.472Z","status":"EMPTY","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0,"truncationApplied":false}
[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T02:45:29.472Z","status":"NO_MATCH","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > caps candidates at 5 and keeps scores bounded
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.472Z","status":"started","sessionLocalId":"m9","proposalId":"rrp-cap"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.472Z","status":"AVAILABLE","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","sourceProjectCount":8,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T02:45:29.472Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","candidateCount":5,"topScoreBand":"WEAK_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 snapshot from real repository (read-only) > matches against created projects without mutation
{"event":"d1.project_create","ts":"2026-08-02T02:45:29.477Z","status":"ok","projectId":"proj-635ace86-de7d-4154-8ca4-88b503c2e7aa","durationMs":1}
{"event":"d1.project_create","ts":"2026-08-02T02:45:29.477Z","status":"ok","projectId":"proj-00af8979-45c5-472a-924e-79260310e9e6","durationMs":0}
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.477Z","status":"started","sessionLocalId":"repo-1","proposalId":"rrp-repo"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.478Z","status":"AVAILABLE","sessionLocalId":"repo-1","durationMs":1,"proposalId":"rrp-repo","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.478Z","status":"STRONG_MATCH","sessionLocalId":"repo-1","durationMs":1,"proposalId":"rrp-repo","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

 ✓ __tests__/d1/intake-c3.test.ts (16 tests) 124ms
 ✓ __tests__/d1/intake-c1.test.tsx (6 tests) 612ms
 ✓ __tests__/ops1/Ops1SessionScreen.test.tsx (4 tests) 125ms
 ✓ __tests__/increment-a.test.tsx (8 tests) 148ms
 ✓ __tests__/increment-e.test.tsx (4 tests) 94ms
 ✓ __tests__/increment-d.test.tsx (5 tests) 69ms
 ✓ __tests__/navigation.test.tsx (2 tests) 55ms
 ✓ __tests__/shell.test.tsx (1 test) 64ms
stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > creates project only with explicit confirmation and audits
[d1.intake] {"event":"intake_mutation_failed","ts":"2026-08-02T02:45:30.414Z","status":"FAILED","sessionLocalId":"s1","durationMs":0,"errorCode":"VALIDATION","proposalId":"rrp-1"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.415Z","status":"CREATE_PROJECT","sessionLocalId":"s1","proposalId":"rrp-1"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.415Z","status":"confirmed","sessionLocalId":"s1","proposalId":"rrp-1"}
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.417Z","status":"ok","projectId":"proj-0d740cfc-1950-467b-b6c0-90d4e0bc20a9","durationMs":1}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:45:30.417Z","status":"SUCCEEDED","projectId":"proj-0d740cfc-1950-467b-b6c0-90d4e0bc20a9","sessionLocalId":"s1","durationMs":2,"proposalId":"rrp-1"}

 ✓ __tests__/increment-c.test.tsx (8 tests) 1208ms
   ✓ Increment C — editable demand + confirmation > back from confirmation allows editing again  307ms
 ✓ __tests__/ops1/allowlistEvaluation.test.ts (9 tests) 49ms
stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > replays same key same payload without duplicate
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.421Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.421Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.422Z","status":"ok","projectId":"proj-42d3db9d-65f1-427b-bb50-e32cd3534178","durationMs":1}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:45:30.422Z","status":"SUCCEEDED","projectId":"proj-42d3db9d-65f1-427b-bb50-e32cd3534178","sessionLocalId":"s2","durationMs":1,"proposalId":"rrp-2"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.422Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.422Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_replayed","ts":"2026-08-02T02:45:30.422Z","status":"ALREADY_APPLIED","projectId":"proj-42d3db9d-65f1-427b-bb50-e32cd3534178","sessionLocalId":"s2","durationMs":0,"proposalId":"rrp-2"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > conflicts when same key different payload
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.425Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.425Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.426Z","status":"ok","projectId":"proj-522910ad-5c81-42aa-95d4-92e52dfa67aa","durationMs":1}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:45:30.426Z","status":"SUCCEEDED","projectId":"proj-522910ad-5c81-42aa-95d4-92e52dfa67aa","sessionLocalId":"s3","durationMs":1,"proposalId":"rrp-3"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.426Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.426Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_mutation_rejected","ts":"2026-08-02T02:45:30.426Z","status":"CONFLICT","sessionLocalId":"s3","durationMs":0,"errorCode":"IDEMPOTENCY","proposalId":"rrp-3"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > existing project confirm is NO_MUTATION without invented link
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.430Z","status":"ok","projectId":"proj-00c6d8ff-3f8f-49f1-a7df-990c2d6e9845","durationMs":1}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.430Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s4","proposalId":"rrp-4"}
[d1.intake] {"event":"intake_existing_project_confirmed","ts":"2026-08-02T02:45:30.430Z","status":"NO_MUTATION","projectId":"proj-00c6d8ff-3f8f-49f1-a7df-990c2d6e9845","sessionLocalId":"s4","durationMs":0,"proposalId":"rrp-4"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > detects stale existing project conflict
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.434Z","status":"ok","projectId":"proj-ea24be6d-06a3-47b1-bced-e93ee84f5d17","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:45:30.435Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:30.435Z","status":"ok","projectId":"proj-ea24be6d-06a3-47b1-bced-e93ee84f5d17","durationMs":1}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.435Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s5","proposalId":"rrp-5"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T02:45:30.435Z","status":"STALE","projectId":"proj-ea24be6d-06a3-47b1-bced-e93ee84f5d17","sessionLocalId":"s5","durationMs":0,"errorCode":"CONFLICT","proposalId":"rrp-5"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > analyze-only and cancel produce no mutation
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.438Z","status":"ANALYZE_ONLY","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_analyze_only_completed","ts":"2026-08-02T02:45:30.438Z","status":"NO_MUTATION","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.439Z","status":"CANCEL","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_cancelled","ts":"2026-08-02T02:45:30.439Z","status":"CANCELLED","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.442Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T02:45:30.442Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":0,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}

 ✓ __tests__/d1/intake-c4.test.ts (10 tests) 36ms
 ✓ __tests__/ops1/executionI5.test.ts (5 tests) 1704ms
   ✓ ops1 I5 execution contract + fixture run > creates contract, records GO linked to hash, runs fixture, blocks double exec  725ms
   ✓ ops1 I5 execution contract + fixture run > refuses HEAD drift and remote flags stay true  321ms
 ✓ __tests__/gates.test.tsx (1 test) 76ms
stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > creates project with audit and mono-operator assignments
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.849Z","status":"ok","projectId":"proj-c5f1fbea-d4b2-41aa-bea3-34d3059ae260","durationMs":1}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > is idempotent on duplicate key
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.854Z","status":"ok","projectId":"proj-bccbb46b-0371-44dc-a22f-ed4e76614af3","durationMs":0}
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.854Z","status":"idempotent","projectId":"proj-bccbb46b-0371-44dc-a22f-ed4e76614af3","durationMs":0}

 ✓ __tests__/ops1/domain.test.ts (6 tests) 3ms
stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.858Z","status":"ok","projectId":"proj-9aa09b0a-c669-4c9f-9b9b-40f4b4e26069","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:45:30.859Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:30.859Z","status":"ok","projectId":"proj-9aa09b0a-c669-4c9f-9b9b-40f4b4e26069","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:45:30.859Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:30.860Z","status":"failed","durationMs":1,"errorCode":"CONFLICT"}

 ✓ __tests__/d1/project-foundation.test.ts (7 tests) 18ms
 ✓ __tests__/fixtures.test.ts (2 tests) 3ms
 ✓ __tests__/increment-b.test.tsx (6 tests) 46ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 2ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 17ms
 ✓ __tests__/status-pill.test.tsx (1 test) 23ms
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 3031ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1773ms
   ✓ V2-A2 Create Project UI > calls only the runtime action with the exact DTO and parsed constraints  304ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 2964ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  625ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  619ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  452ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  311ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  308ms

 Test Files  94 passed (94)
      Tests  913 passed (913)
   Start at  04:45:25
   Duration  6.97s (transform 2.99s, setup 3.27s, collect 11.76s, tests 18.96s, environment 6.08s, prepare 3.54s)

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
 ✓ Compiled successfully in 949ms
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

913/913 · typecheck/lint/build PASS. Aucune crypto runtime. Aucune dépendance.
Aucun D2-B/C.

## Documentation corrective et sections modifiées

### Rapport correctif complet

# V3.1-D2-A — Corrective Delivery Report (Critical)

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-08-02 04:46:44 CEST (+0200) |
| Cycle | 8 — Delivery / implémentation corrective |
| Profil | **Critical** |
| Typologie | EVOL / corrective |
| Branche | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
| HEAD / main / origin/main | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| Handoff pré-cycle | tip `5274d88…` · blob `a2d0742b…` |
| Statut | `V3.1-D2-A CORRECTIVE DELIVERY READY FOR INDEPENDENT QA REVALIDATION — R-QA-D2A-01 PENDING REVALIDATION — QA-G3 NOT DECIDED — NOT PR READY — D2-B AND D2-C REMAIN CLOSED — D3 NOT OPENED` |

## B. Gate Morris

```text
GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
ADDRESS ONLY R-QA-D2A-01 —
PRESERVE QA TESTS —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```

Interprétation : GO consommé 2026-08-02 04:39 CEST (+0200).

## C. Finding consommé

| Champ | Valeur |
|-------|--------|
| ID | R-QA-D2A-01 |
| Sévérité | BLOQUANTE |
| Invariants | INV-D2A-11 · INV-D2A-12 |
| Statut initial | OPEN |
| Statut après correctif | CORRECTIVE IMPLEMENTATION COMPLETE — PENDING INDEPENDENT QA REVALIDATION |

Attendu : aucun `ok=true` si le catalogue réellement utilisé est contractuellement
divergent du fingerprint canonique.

Observé (pré-correctif) : succès public avec fingerprint canonique + catalogue
divergent (six variantes).

## D. Référentiel

Stories BL-D2-A-01…04 · FA-C / FA-06 · TA-P-A / TA-02 / HASH-A / TYPE-B /
ERR-B / TA-12 · rapport QA 01 · CKC fallback Delivery §4.8 · standard QA v2.

## E. Git Truth

```text
2026-08-02 04:44:22 CEST (+0200)
BRANCH=delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
ORIGIN_MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
DIVERGENCE=0 0
HANDOFF_TIP=5274d88eedd62345dcb662fdba8bcf92540b34c8
HANDOFF_BLOB=a2d0742b9a2e62ec7dfe6832e98360fbae01dcb2
WORKTREES=77
DELIVERY_REMOTE_COUNT=0
```

## F. Empreintes avant correction

```text
2026-08-02 04:44:21 CEST (+0200)
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=9e348d9c00946f60188120a4e369bace9cb4cad3eb02f3e08d893a23f71233a1  blob=d1bb3b9cb144b35104341b2f75b679b2ffb20892
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26
projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740
projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts  sha256=f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682  blob=9968f040283d8f626c65db48bbec7abd69c56e2d
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts  sha256=4386bfec4ee2ca59b725703a000738c6e27d32c276c228c10ff96a4f0ab242f6  blob=aa91cc5c36ea2dc27f36e5e8db89cd066fb5166b
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts  sha256=af7c6418dcac125ecad43464c5a7bb7079e60097139ef6f5be662e9d2795864e  blob=1ba9408249d7489bf1d30687129bc04f73e1214c
projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts  sha256=719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1  blob=0102fc02edb6e6f16420ea0de31a0d6361b221ba
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md  sha256=4013fe2163e7faed9d88b8b8f6d280fa15b51d18aaf2cdcd770e332e14d6a82c  blob=8fbbd38d379fa406790c96d9a1df2bcbb47a641d
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md  sha256=14aa3da501cbd7fe69c9bfb08560842565cbd5a6cd401bd4e0635024533c5a71  blob=e92e12822036c087659983aa831a514c07d72b02
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md  sha256=74335bede5d9b006e1d03bd1329a007879bcac73e43a2d4f1a124989d86eee0a  blob=cc7ef6ce9e5f35ed90ebf8861e574be579f9b5e5
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md  sha256=b505cc43d4046021231db9a8e8a6fd15e425afc104a47b62c8252c2ea5977cff  blob=56b328920985acda076d0fe876d9b05900f28358
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md  sha256=07aee6399672b1fa383bfe33b53efafcdc6b1aa9669276d0b9d9429953ec15b1  blob=35bc85b12294e87524b87cfa968571c7a27a51ca
.tmp-sfia-review/chatgpt-review.md  sha256=6930a683d377d854c17d0311010c8e4677cbc427b02e4ebdcaf97733c144d177  blob=a2d0742b9a2e62ec7dfe6832e98360fbae01dcb2
```

`catalogProjection.ts` pré-correctif :
`sha256=9e348d9c00946f60188120a4e369bace9cb4cad3eb02f3e08d893a23f71233a1`
`blob=d1bb3b9cb144b35104341b2f75b679b2ffb20892` — **MATCH**.

## G. Baseline rouge reproduite

```text
===== FP DELIVERY =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 3ms

 Test Files  1 passed (1)
      Tests  8 passed (8)
   Start at  04:44:27
   Duration  345ms (transform 85ms, setup 55ms, collect 116ms, tests 3ms, environment 0ms, prepare 35ms)

EXIT_FP=0
===== PROJ DELIVERY =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 3ms

 Test Files  1 passed (1)
      Tests  16 passed (16)
   Start at  04:44:28
   Duration  252ms (transform 72ms, setup 21ms, collect 102ms, tests 3ms, environment 0ms, prepare 25ms)

EXIT_PROJ=0
===== FP QA =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 4ms

 Test Files  1 passed (1)
      Tests  25 passed (25)
   Start at  04:44:28
   Duration  269ms (transform 74ms, setup 24ms, collect 104ms, tests 4ms, environment 0ms, prepare 27ms)

EXIT_FPQA=0
===== PROJ QA =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests | 6 failed) 10ms
   ✓ V3.1-D2-A QA — Catalog Projection nominals > projects every active adopted cycle type with frozen read-only success 2ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty/whitespace correlationId before other checks 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects incompatible version before fingerprint 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects stale fingerprint before type lookup 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects unknown type before lifecycle/mapping 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version whitespace 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version case 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version suffix 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash whitespace 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash uppercase 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash wrong prefix 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash short 0ms
   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty cycleTypeId and propagates valid correlationId on failure 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle deprecated 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle unavailable 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle future-status 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects mandatory=false 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects unknown primaryLevel 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects empty/whitespace primaryReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects executionAuthority=true 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects invalid doctrineStatus and unavailableBehavior 1ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed mappings without canonical fallback 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed with wrong fallbackPolicy or fallbackReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference 0ms
   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects extended mapping properties 0ms
   ✓ V3.1-D2-A QA — error contract > covers the six documented error codes with blocking safe failures 0ms
   ✓ V3.1-D2-A QA — error contract > documents retryable/recoverable classification for catalog stale errors 0ms
   ✓ V3.1-D2-A QA — public fingerprint/catalog binding (critical) > exposes the catalog seam on the public API signature 0ms
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint 3ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint 0ms
     → expected true to be false // Object.is equality
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps index.ts limited to the three additive D2-A exports 0ms
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps production projection free of D2-B/C and runtime I/O imports 0ms
   ✓ V3.1-D2-A QA — public boundary, immutability and imports > does not mutate production catalog entries across calls 0ms

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 6 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:527:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:537:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:562:23
    560|     );
    561|     const result = projectSelectableCycleType(context(), catalog);
    562|     expect(result.ok).toBe(false);
       |                       ^
    563|     if (result.ok) {
    564|       // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:585:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:601:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/6]⎯

 FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
     72|   // while still validating the static canonical fingerprint.
     73|   expect(result.ok).toBe(false);
       |                     ^
     74|   if (result.ok) {
     75|     throw new Error(
 ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:611:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/6]⎯


 Test Files  1 failed (1)
      Tests  6 failed | 31 passed (37)
   Start at  04:44:29
   Duration  269ms (transform 75ms, setup 21ms, collect 106ms, tests 10ms, environment 0ms, prepare 28ms)

EXIT_PROJQA=1
===== D1 =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/cycleTypeCatalog.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 7ms

 Test Files  1 passed (1)
      Tests  46 passed (46)
   Start at  04:44:29
   Duration  271ms (transform 76ms, setup 20ms, collect 106ms, tests 7ms, environment 0ms, prepare 29ms)

EXIT_D1=0
```

Synthèse attendue et observée :

| Suite | Résultat |
|-------|----------|
| fingerprint Delivery | 8/8 PASS |
| projection Delivery | 16/16 PASS |
| fingerprint QA | 25/25 PASS |
| projection QA | 31 PASS / **6 FAIL binding** |
| D1 | 46/46 PASS |

Six FAIL exacts : canonicalKey · methodCycleNumber · mapping CKC · ordre ·
+entrée · −entrée.

## H. Cause racine

`projectSelectableCycleType` validait `context.catalogHash` contre la constante
`CYCLE_TYPE_CATALOG_FINGERPRINT`, puis consommait le catalogue injecté sans
vérifier l’équivalence contractuelle HASH-A du catalogue réellement utilisé.

## I. Option corrective retenue

Comparer la sérialisation HASH-A (`serializeCatalogFingerprint`) du catalogue
utilisé à celle du singleton D1, **après** les contrôles locaux (type /
lifecycle / mapping), **avant** le succès. Divergence → `CATALOG_FINGERPRINT_STALE`
(`blocking=true`, `retryable=true`). Fast-path identité `catalog === CYCLE_TYPE_CATALOG`.
Exception de sérialisation → fail-closed (divergence). Aucune crypto runtime.

## J. Diff complet de catalogProjection.ts

### Avant

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

### Après

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

### Diff unifié

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

## K. Ordre des validations

1. correlationId
2. catalogVersion
3. catalogHash fourni
4. cycleTypeId connu
5. lifecycle sélectionnable
6. mapping CKC cible valide
7. **binding catalogue utilisé ↔ HASH-A canonique**
8. succès

## L. Binding catalogue/fingerprint

Mécanisme : `serializeCatalogFingerprint(catalog) === serializeCatalogFingerprint(CYCLE_TYPE_CATALOG)`.
Rejette les six variantes contractuelles. Accepte les écarts hors HASH-A
(label, shortDescription, displayOrder, methodReference, aliases) si les autres
invariants restent valides.

## M. Préservation HASH-A

Constante inchangée :
`sha256:27316864454634a45342baaa1782898bea12914a4ec9cd9b051622eef9efd2cc`.
`catalogFingerprint.ts` empreinte inchangée.

## N. Préservation des tests QA

`catalogFingerprint.qa.test.ts` et `catalogProjection.qa.test.ts` : empreintes
identiques avant/après. Aucun skip/todo/only. Aucun oracle modifié.

## O. Résultats après correction

```text
===== FP DELIVERY =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 3ms

 Test Files  1 passed (1)
      Tests  8 passed (8)
   Start at  04:45:21
   Duration  314ms (transform 78ms, setup 39ms, collect 109ms, tests 3ms, environment 0ms, prepare 35ms)

EXIT_FP=0
===== PROJ DELIVERY =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 3ms

 Test Files  1 passed (1)
      Tests  16 passed (16)
   Start at  04:45:22
   Duration  273ms (transform 73ms, setup 21ms, collect 103ms, tests 3ms, environment 0ms, prepare 36ms)

EXIT_PROJ=0
===== FP QA =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 4ms

 Test Files  1 passed (1)
      Tests  25 passed (25)
   Start at  04:45:22
   Duration  259ms (transform 72ms, setup 20ms, collect 102ms, tests 4ms, environment 0ms, prepare 23ms)

EXIT_FPQA=0
===== PROJ QA =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 6ms

 Test Files  1 passed (1)
      Tests  37 passed (37)
   Start at  04:45:23
   Duration  276ms (transform 75ms, setup 22ms, collect 105ms, tests 6ms, environment 0ms, prepare 29ms)

EXIT_PROJQA=0
===== D1 =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/cycleTypeCatalog.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 7ms

 Test Files  1 passed (1)
      Tests  46 passed (46)
   Start at  04:45:23
   Duration  267ms (transform 79ms, setup 20ms, collect 111ms, tests 7ms, environment 0ms, prepare 22ms)

EXIT_D1=0
===== OA CYCLE =====

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 5ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 5ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 6ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 7ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 9ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 17ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 81ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 98ms

 Test Files  8 passed (8)
      Tests  180 passed (180)
   Start at  04:45:24
   Duration  466ms (transform 353ms, setup 306ms, collect 1.29s, tests 229ms, environment 1ms, prepare 322ms)

EXIT_OA=0
===== FULL TEST =====

> sfia-studio@0.1.0 test
> vitest run


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/ops1/actionGate.test.ts (10 tests) 118ms
stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:25.396Z","status":"started","intentLength":53,"sessionLocalId":"plat-1"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:25.498Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-1","durationMs":102,"providerMode":"fake"}

 ✓ __tests__/oa/doctrine/resolveDoctrinePackage.test.ts (22 tests) 94ms
stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:25.499Z","status":"started","intentLength":76,"sessionLocalId":"plat-2"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:25.642Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":76,"sessionLocalId":"plat-2","durationMs":143,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:25.643Z","status":"started","intentLength":77,"sessionLocalId":"plat-3"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:25.737Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":77,"sessionLocalId":"plat-3","durationMs":94,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:25.738Z","status":"started","intentLength":53,"sessionLocalId":"plat-4"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:25.738Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-4","durationMs":0,"providerMode":"fake"}

 ✓ __tests__/d1/intake-platform-integration.test.ts (5 tests) 344ms
stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-b6b4e9ff-7752-4a9a-b948-00452ef5ef44 fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-b6b4e9ff-7752-4a9a-b948-00452ef5ef44 15 tools=0

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-5044f642-f98d-411d-a493-ef1e2f9d98ce fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-5044f642-f98d-411d-a493-ef1e2f9d98ce 30 tools=0

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-a392a8ef-d782-452d-bee1-adeaabaa4cfd fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-a392a8ef-d782-452d-bee1-adeaabaa4cfd 45 tools=0

 ✓ __tests__/oa/project/projectLpsFoundation.test.ts (26 tests) 120ms
 ✓ __tests__/oa/execution-attempt/qaAdversarialValidation.test.ts (12 tests) 113ms
 ✓ __tests__/oa/execution-contract/executionContractGovernance.test.ts (18 tests) 124ms
 ✓ __tests__/oa/execution-contract/runtimeValidationHardening.test.ts (16 tests) 130ms
 ✓ __tests__/oa/execution-attempt/lifecycleFoundation.test.ts (24 tests) 185ms
stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-74a4afce-6d73-4f92-927c-94a4671e3752 ops1-att-0e12f573-2c6a-4278-bbdb-0a4fc690bee9 fake-test

stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-74a4afce-6d73-4f92-927c-94a4671e3752 ops1-att-0e12f573-2c6a-4278-bbdb-0a4fc690bee9 45 tools=1

 ✓ __tests__/ops1/controlTowerTools.test.ts (7 tests) 618ms
   ✓ GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker  388ms
stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-5fc99972-12ec-414b-868b-18dc1f092134 ops1-att-a17f9a5a-c450-411f-a1c8-66ffab1c4aff fake-test

stderr | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
[ops1] CONVERSATION_ATTEMPT_FAILED ops1-sess-5fc99972-12ec-414b-868b-18dc1f092134 ops1-att-a17f9a5a-c450-411f-a1c8-66ffab1c4aff INTERNAL

 ✓ __tests__/ops1/conversation-repository.test.ts (9 tests) 707ms
   ✓ ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error  339ms
 ✓ __tests__/oa/execution-contract/supersedeCancelAuthz.test.ts (11 tests) 109ms
 ✓ __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts (4 tests) 65ms
 ✓ __tests__/oa/execution-contract/adversarialCriticalAntiTa5.test.ts (12 tests) 93ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 105ms
 ✓ __tests__/oa/decision/validationAdversarial.test.ts (12 tests) 107ms
 ✓ __tests__/oa/decision/decisionConfirmationAuthority.test.ts (26 tests) 124ms
 ✓ __tests__/vertical-slice-core/localProjectComposition.test.ts (13 tests) 83ms
 ✓ __tests__/oa/decision/adversarialAuthority.test.ts (8 tests) 76ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 122ms
 ✓ __tests__/ops1/repository.test.ts (6 tests) 82ms
 ✓ __tests__/vertical-slice-runtime/runtimeApplicationService.test.ts (8 tests) 71ms
 ✓ __tests__/oa/doctrine/schemaValidation.test.ts (3 tests) 51ms
 ✓ __tests__/vertical-slice-core/importBoundaries.test.ts (3 tests) 41ms
 ✓ __tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts (15 tests) 54ms
 ✓ __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts (5 tests) 45ms
 ✓ __tests__/vertical-slice-runtime/importBoundaries.test.ts (5 tests) 56ms
 ✓ __tests__/platform/t-a7-canonical-consumers.probe.test.ts (3 tests) 14ms
 ✓ __tests__/oa/decision/antiLegacy.test.ts (4 tests) 8ms
 ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 19ms
 ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 19ms
 ✓ __tests__/ops1/controlTowerReinjection.test.ts (2 tests) 21ms
 ✓ __tests__/oa/evidence-review/reviewBundleDomain.test.ts (12 tests) 6ms
 ✓ __tests__/oa/evidence-review/adversarialCoordinationValidation.test.ts (7 tests) 15ms
 ✓ __tests__/oa/evidence-review/recommendNextGate.test.ts (11 tests) 24ms
 ✓ __tests__/oa/evidence-review/adversarialValidation.test.ts (9 tests) 9ms
stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks transitions while hold is active
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:45:27.264Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.project_create","ts":"2026-08-02T02:45:27.269Z","status":"ok","projectId":"proj-e6cfc8bf-d0e7-4cb9-be4b-81fd2fdf07eb","durationMs":1}
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:45:27.270Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:27.270Z","status":"failed","durationMs":1,"errorCode":"CONFLICT"}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > allows transitions when hold is inactive (test override)
{"event":"d1.project_create","ts":"2026-08-02T02:45:27.273Z","status":"ok","projectId":"proj-b54d0d9a-de42-4564-98f3-ae41cd65840e","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:45:27.273Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:27.274Z","status":"ok","projectId":"proj-b54d0d9a-de42-4564-98f3-ae41cd65840e","durationMs":1}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks when hold is active even with empty reasons
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:45:27.274Z","status":"blocked","reasonCount":0,"codes":"ACTIVE_NO_REASONS"}

 ✓ __tests__/d1/t-a7-method-mode-hold.test.ts (6 tests) 14ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 21ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts (10 tests) 17ms
 ✓ __tests__/oa/evidence-review/claimEvaluationLifecycle.test.ts (14 tests) 17ms
 ✓ __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts (3 tests) 4ms
 ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 5ms
 ✓ __tests__/oa/execution-contract/antiLegacy.test.ts (4 tests) 7ms
 ✓ __tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts (4 tests) 6ms
 ✓ __tests__/oa/evidence-review/reviewBundleLifecycle.test.ts (14 tests) 9ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 14ms
 ✓ __tests__/oa/evidence-review/adversarialClaimEvaluationValidation.test.ts (4 tests) 12ms
 ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 7ms
 ✓ __tests__/ops1/openai-provider.test.ts (2 tests) 6ms
 ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 4ms
 ✓ __tests__/oa/evidence-review/verifyAndUnavailable.test.ts (13 tests) 6ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 10ms
 ✓ __tests__/oa/evidence-review/adversarialMaturityValidation.test.ts (3 tests) 18ms
 ✓ __tests__/platform/import-boundaries.test.ts (3 tests) 11ms
 ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 16ms
 ✓ __tests__/platform/platform-ai.test.ts (5 tests) 3ms
 ✓ __tests__/oa/execution-attempt/attemptRepository.test.ts (33 tests) 7ms
 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 8ms
 ✓ __tests__/platform/t-a7-consolidated-blocker-reduction.test.ts (19 tests) 10ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 7ms
 ✓ __tests__/oa/project/antiLegacy.test.ts (4 tests) 6ms
 ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 8ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 6ms
 ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 5ms
 ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 3ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 2ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 3ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 4ms
 ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 5ms
 ✓ __tests__/ops1/sfia/canonicalEngine.test.ts (17 tests) 3361ms
   ✓ SFIA context resolver > detects context stale on head mismatch  352ms
   ✓ SFIA action compiler > compiles valid CREATE and persists ActionCandidate  305ms
   ✓ SFIA action compiler > denies commit/push operations  352ms
   ✓ SFIA action compiler > denies context stale  326ms
   ✓ SFIA action compiler > preserves exact content  342ms
   ✓ SFIA action compiler > instantiates cursor prompt from real template  341ms
   ✓ SFIA conversation integration (fixture markers) > CREATE marker → ActionCandidate live  415ms
   ✓ SFIA conversation integration (fixture markers) > commit marker → POLICY_DENIED  350ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:28.965Z","status":"started","intentLength":53,"sessionLocalId":"s1"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:29.102Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"s1","durationMs":137,"providerMode":"fake"}

 ✓ __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx (4 tests) 197ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:29.102Z","status":"started","intentLength":22,"sessionLocalId":"s2"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_clarification_requested","ts":"2026-08-02T02:45:29.200Z","status":"NEED_CLARIFICATION","intentLength":22,"sessionLocalId":"s2","durationMs":98,"providerMode":"fake"}

 ✓ __tests__/ops1/globalModeBadge.ui.test.tsx (5 tests) 218ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:29.200Z","status":"started","intentLength":22,"sessionLocalId":"s2"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:29.307Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":22,"sessionLocalId":"s2","durationMs":107,"providerMode":"fake"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:29.308Z","status":"started","intentLength":39,"sessionLocalId":"s4"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:45:29.416Z","status":"PROVIDER","intentLength":39,"sessionLocalId":"s4","durationMs":108,"providerMode":"fake","errorCode":"PROVIDER"}

 ✓ __tests__/d1/intake-c2.test.ts (13 tests) 456ms
stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:29.355Z","status":"started","intentLength":53,"sessionLocalId":"harden-1"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:29.458Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"harden-1","durationMs":103,"providerMode":"fake"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:45:29.460Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:45:29.460Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}

stderr | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T02:45:29.460Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T02:45:29.460Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > exact name ranks first with strong evidence
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.462Z","status":"started","sessionLocalId":"m1","proposalId":"rrp-campus"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.462Z","status":"AVAILABLE","sessionLocalId":"m1","durationMs":0,"proposalId":"rrp-campus","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.463Z","status":"STRONG_MATCH","sessionLocalId":"m1","durationMs":1,"proposalId":"rrp-campus","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > detects semantic proximity for contrats
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.463Z","status":"started","sessionLocalId":"m2","proposalId":"rrp-c"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.463Z","status":"AVAILABLE","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.463Z","status":"STRONG_MATCH","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > flags multiple close matches as ambiguity
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.463Z","status":"started","sessionLocalId":"m3","proposalId":"rrp-multi"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.463Z","status":"AVAILABLE","sessionLocalId":"m3","durationMs":0,"proposalId":"rrp-multi","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T02:45:29.471Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m3","durationMs":8,"proposalId":"rrp-multi","candidateCount":2,"topScoreBand":"WEAK_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > returns no-match without inventing ids
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.471Z","status":"started","sessionLocalId":"m4","proposalId":"rrp-none"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.471Z","status":"AVAILABLE","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T02:45:29.471Z","status":"NO_MATCH","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > warns on inactive project without auto-resume
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.471Z","status":"started","sessionLocalId":"m5","proposalId":"rrp-draft"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.471Z","status":"AVAILABLE","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.472Z","status":"STRONG_MATCH","sessionLocalId":"m5","durationMs":1,"proposalId":"rrp-draft","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > analyze-only does not force attachment
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.472Z","status":"started","sessionLocalId":"m6","proposalId":"rrp-ao"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.472Z","status":"AVAILABLE","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.472Z","status":"STRONG_MATCH","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > distinguishes context unavailable from empty
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.472Z","status":"started","sessionLocalId":"m7","proposalId":"rrp-u"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.472Z","status":"UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"proposalId":"rrp-u","sourceProjectCount":0,"truncationApplied":false}
[d1.intake] {"event":"intake_context_unavailable","ts":"2026-08-02T02:45:29.472Z","status":"CONTEXT_UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"errorCode":"UNAVAILABLE","proposalId":"rrp-u"}
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.472Z","status":"started","sessionLocalId":"m8","proposalId":"rrp-e"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.472Z","status":"EMPTY","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0,"truncationApplied":false}
[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T02:45:29.472Z","status":"NO_MATCH","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > caps candidates at 5 and keeps scores bounded
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.472Z","status":"started","sessionLocalId":"m9","proposalId":"rrp-cap"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.472Z","status":"AVAILABLE","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","sourceProjectCount":8,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T02:45:29.472Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","candidateCount":5,"topScoreBand":"WEAK_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 snapshot from real repository (read-only) > matches against created projects without mutation
{"event":"d1.project_create","ts":"2026-08-02T02:45:29.477Z","status":"ok","projectId":"proj-635ace86-de7d-4154-8ca4-88b503c2e7aa","durationMs":1}
{"event":"d1.project_create","ts":"2026-08-02T02:45:29.477Z","status":"ok","projectId":"proj-00af8979-45c5-472a-924e-79260310e9e6","durationMs":0}
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.477Z","status":"started","sessionLocalId":"repo-1","proposalId":"rrp-repo"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.478Z","status":"AVAILABLE","sessionLocalId":"repo-1","durationMs":1,"proposalId":"rrp-repo","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.478Z","status":"STRONG_MATCH","sessionLocalId":"repo-1","durationMs":1,"proposalId":"rrp-repo","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

 ✓ __tests__/d1/intake-c3.test.ts (16 tests) 124ms
 ✓ __tests__/d1/intake-c1.test.tsx (6 tests) 612ms
 ✓ __tests__/ops1/Ops1SessionScreen.test.tsx (4 tests) 125ms
 ✓ __tests__/increment-a.test.tsx (8 tests) 148ms
 ✓ __tests__/increment-e.test.tsx (4 tests) 94ms
 ✓ __tests__/increment-d.test.tsx (5 tests) 69ms
 ✓ __tests__/navigation.test.tsx (2 tests) 55ms
 ✓ __tests__/shell.test.tsx (1 test) 64ms
stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > creates project only with explicit confirmation and audits
[d1.intake] {"event":"intake_mutation_failed","ts":"2026-08-02T02:45:30.414Z","status":"FAILED","sessionLocalId":"s1","durationMs":0,"errorCode":"VALIDATION","proposalId":"rrp-1"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.415Z","status":"CREATE_PROJECT","sessionLocalId":"s1","proposalId":"rrp-1"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.415Z","status":"confirmed","sessionLocalId":"s1","proposalId":"rrp-1"}
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.417Z","status":"ok","projectId":"proj-0d740cfc-1950-467b-b6c0-90d4e0bc20a9","durationMs":1}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:45:30.417Z","status":"SUCCEEDED","projectId":"proj-0d740cfc-1950-467b-b6c0-90d4e0bc20a9","sessionLocalId":"s1","durationMs":2,"proposalId":"rrp-1"}

 ✓ __tests__/increment-c.test.tsx (8 tests) 1208ms
   ✓ Increment C — editable demand + confirmation > back from confirmation allows editing again  307ms
 ✓ __tests__/ops1/allowlistEvaluation.test.ts (9 tests) 49ms
stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > replays same key same payload without duplicate
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.421Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.421Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.422Z","status":"ok","projectId":"proj-42d3db9d-65f1-427b-bb50-e32cd3534178","durationMs":1}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:45:30.422Z","status":"SUCCEEDED","projectId":"proj-42d3db9d-65f1-427b-bb50-e32cd3534178","sessionLocalId":"s2","durationMs":1,"proposalId":"rrp-2"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.422Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.422Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_replayed","ts":"2026-08-02T02:45:30.422Z","status":"ALREADY_APPLIED","projectId":"proj-42d3db9d-65f1-427b-bb50-e32cd3534178","sessionLocalId":"s2","durationMs":0,"proposalId":"rrp-2"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > conflicts when same key different payload
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.425Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.425Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.426Z","status":"ok","projectId":"proj-522910ad-5c81-42aa-95d4-92e52dfa67aa","durationMs":1}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:45:30.426Z","status":"SUCCEEDED","projectId":"proj-522910ad-5c81-42aa-95d4-92e52dfa67aa","sessionLocalId":"s3","durationMs":1,"proposalId":"rrp-3"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.426Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.426Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_mutation_rejected","ts":"2026-08-02T02:45:30.426Z","status":"CONFLICT","sessionLocalId":"s3","durationMs":0,"errorCode":"IDEMPOTENCY","proposalId":"rrp-3"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > existing project confirm is NO_MUTATION without invented link
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.430Z","status":"ok","projectId":"proj-00c6d8ff-3f8f-49f1-a7df-990c2d6e9845","durationMs":1}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.430Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s4","proposalId":"rrp-4"}
[d1.intake] {"event":"intake_existing_project_confirmed","ts":"2026-08-02T02:45:30.430Z","status":"NO_MUTATION","projectId":"proj-00c6d8ff-3f8f-49f1-a7df-990c2d6e9845","sessionLocalId":"s4","durationMs":0,"proposalId":"rrp-4"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > detects stale existing project conflict
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.434Z","status":"ok","projectId":"proj-ea24be6d-06a3-47b1-bced-e93ee84f5d17","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:45:30.435Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:30.435Z","status":"ok","projectId":"proj-ea24be6d-06a3-47b1-bced-e93ee84f5d17","durationMs":1}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.435Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s5","proposalId":"rrp-5"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T02:45:30.435Z","status":"STALE","projectId":"proj-ea24be6d-06a3-47b1-bced-e93ee84f5d17","sessionLocalId":"s5","durationMs":0,"errorCode":"CONFLICT","proposalId":"rrp-5"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > analyze-only and cancel produce no mutation
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.438Z","status":"ANALYZE_ONLY","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_analyze_only_completed","ts":"2026-08-02T02:45:30.438Z","status":"NO_MUTATION","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.439Z","status":"CANCEL","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_cancelled","ts":"2026-08-02T02:45:30.439Z","status":"CANCELLED","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.442Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T02:45:30.442Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":0,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}

 ✓ __tests__/d1/intake-c4.test.ts (10 tests) 36ms
 ✓ __tests__/ops1/executionI5.test.ts (5 tests) 1704ms
   ✓ ops1 I5 execution contract + fixture run > creates contract, records GO linked to hash, runs fixture, blocks double exec  725ms
   ✓ ops1 I5 execution contract + fixture run > refuses HEAD drift and remote flags stay true  321ms
 ✓ __tests__/gates.test.tsx (1 test) 76ms
stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > creates project with audit and mono-operator assignments
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.849Z","status":"ok","projectId":"proj-c5f1fbea-d4b2-41aa-bea3-34d3059ae260","durationMs":1}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > is idempotent on duplicate key
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.854Z","status":"ok","projectId":"proj-bccbb46b-0371-44dc-a22f-ed4e76614af3","durationMs":0}
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.854Z","status":"idempotent","projectId":"proj-bccbb46b-0371-44dc-a22f-ed4e76614af3","durationMs":0}

 ✓ __tests__/ops1/domain.test.ts (6 tests) 3ms
stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
{"event":"d1.project_create","ts":"2026-08-02T02:45:30.858Z","status":"ok","projectId":"proj-9aa09b0a-c669-4c9f-9b9b-40f4b4e26069","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:45:30.859Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:30.859Z","status":"ok","projectId":"proj-9aa09b0a-c669-4c9f-9b9b-40f4b4e26069","durationMs":0}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:45:30.859Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:30.860Z","status":"failed","durationMs":1,"errorCode":"CONFLICT"}

 ✓ __tests__/d1/project-foundation.test.ts (7 tests) 18ms
 ✓ __tests__/fixtures.test.ts (2 tests) 3ms
 ✓ __tests__/increment-b.test.tsx (6 tests) 46ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 2ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 17ms
 ✓ __tests__/status-pill.test.tsx (1 test) 23ms
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 3031ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1773ms
   ✓ V2-A2 Create Project UI > calls only the runtime action with the exact DTO and parsed constraints  304ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 2964ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  625ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  619ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  452ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  311ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  308ms

 Test Files  94 passed (94)
      Tests  913 passed (913)
   Start at  04:45:25
   Duration  6.97s (transform 2.99s, setup 3.27s, collect 11.76s, tests 18.96s, environment 6.08s, prepare 3.54s)

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
 ✓ Compiled successfully in 949ms
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

| Commande | Exit | Résultat |
|----------|------|----------|
| fingerprint Delivery | 0 | 8/8 |
| projection Delivery | 0 | 16/16 |
| fingerprint QA | 0 | 25/25 |
| projection QA | 0 | **37/37** |
| D1 | 0 | 46/46 |
| oa/cycle | 0 | 180/180 |
| npm test | 0 | 913/913 |
| typecheck | 0 | PASS |
| lint | 0 | PASS sans warning |
| build | 0 | PASS |

## P. Non-régression

Delivery, D1, OA cycle et suite complète verts. Priorité des codes d’erreur
préservée (tests Delivery mapping/lifecycle/unknown verts).

## Q. Contrôles statiques

`rg` imports I/O / Next / infrastructure / D2-B/C dans `catalogProjection.ts` :
aucune occurrence.

## R. Fichiers protégés

Tous les fichiers protégés listés (hors `catalogProjection.ts`) :
**PROTECTED_HASHES_UNCHANGED**.

## S. Diff et volumétrie

Production corrective : **un seul fichier** — `catalogProjection.ts`
(+ ~35 lignes utiles : import, helper binding, contrôle avant succès).
Documents autorisés mis à jour : README Delivery, 19, 08, framing README.
Nouveau : `02-corrective-delivery-report.md`.

## T. Anti-claims

Corrective Delivery ≠ QA revalidée · R-QA-D2A-01 ≠ CLOSED · ≠ QA PASS ·
≠ QA-G3 · ≠ PR ready · ≠ D2-B/C autorisé · ≠ production ready.

## U. Risques et réserves

Risque résiduel : la revalidation QA indépendante doit confirmer la fermeture
de R-QA-D2A-01 et l’absence de régression de priorité d’erreurs. Aucune réserve
mineure additionnelle introduite par ce correctif.

## V. Statut R-QA-D2A-01

`CORRECTIVE IMPLEMENTATION COMPLETE — PENDING INDEPENDENT QA REVALIDATION`

## W. QA revalidation requise

Oui — gate distinct Morris. Ne pas déclarer QA PASS dans ce cycle.

## X. Gate suivant candidat

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

Ne pas exécuter automatiquement.

## Y. Verdict

```text
V3.1-D2-A CORRECTIVE DELIVERY COMPLETE —
R-QA-D2A-01 ADDRESSED IN PRODUCTION —
PUBLIC CATALOG FINGERPRINT BINDING IMPLEMENTED —
SIX QA REGRESSION TESTS PRESERVED AND PASSING —
HASH-A UNCHANGED —
ERROR PRECEDENCE PRESERVED —
D1 AND D2-A NON-REGRESSION PASS —
NO RUNTIME CRYPTO —
NO NEW DEPENDENCY —
NO D2-B —
NO D2-C —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR
```

Statut :

```text
V3.1-D2-A CORRECTIVE DELIVERY READY FOR INDEPENDENT QA REVALIDATION —
R-QA-D2A-01 PENDING REVALIDATION —
QA-G3 NOT DECIDED —
NOT PR READY —
D2-B AND D2-C REMAIN CLOSED —
D3 NOT OPENED
```


### README Delivery (après)

```markdown
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
| Statut | `CORRECTIVE DELIVERY COMPLETE LOCALLY — QA REVALIDATION REQUIRED — NOT PR READY` |

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

## V. QA indépendante — 2026-08-02

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-08-02 04:30:25 CEST (+0200) |
| GO QA | consommé 2026-08-02 04:10 CEST |
| Profil | Critical |
| Tests QA ajoutés | 62 (fingerprint 25 · projection 37) |
| Résultats QA | fingerprint 25/25 PASS · projection 31 PASS / 6 FAIL |
| Réserve | R-QA-D2A-01 bloquante — binding fingerprint/catalogue |
| Verdict Cursor | **FAIL** |
| QA-G3 Morris | non décidé |
| PR readiness | fermée |
| D2-B / D2-C | fermés |
| Correction production | aucune |

Rapport : [`01-qa-validation-report.md`](./01-qa-validation-report.md).

## W. Delivery corrective — R-QA-D2A-01 — 2026-08-02 04:46:44 CEST (+0200)

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-08-02 04:46:44 CEST (+0200) |
| GO correctif | consommé 2026-08-02 04:39 CEST (+0200) |
| Finding | R-QA-D2A-01 — contournement public binding fingerprint/catalogue |
| Cause | hash contextuel lié à la constante, pas au catalogue effectivement utilisé |
| Fichier production modifié | `catalogProjection.ts` uniquement |
| Tests QA | **préservés** (empreintes inchangées) |
| Baseline rouge | 6 FAIL binding reproduits |
| Après correction | projection QA **37/37 PASS** · fingerprint QA 25/25 · Delivery 8+16 · D1 46 · oa/cycle 180 · suite 913 |
| HASH-A | inchangé |
| Crypto runtime / dépendance | aucune |
| Statut | `CORRECTIVE DELIVERY COMPLETE LOCALLY — QA REVALIDATION REQUIRED` |
| R-QA-D2A-01 | CORRECTIVE IMPLEMENTATION COMPLETE — PENDING INDEPENDENT QA REVALIDATION |
| QA-G3 Morris | non décidé |
| PR readiness | fermée |
| D2-B / D2-C / D3 | fermés |

Rapport : [`02-corrective-delivery-report.md`](./02-corrective-delivery-report.md).
```

### Document 19 (extrait registre AJ + statut)

```markdown
## AI. Registre QA D2-A — 2026-08-02

| Élément | État |
|---------|------|
| GO QA | **consommé** — 2026-08-02 04:10 CEST (+0200) |
| Profil | **Critical** |
| Tests QA ajoutés | `catalogFingerprint.qa.test.ts` (25) · `catalogProjection.qa.test.ts` (37) |
| Résultats | fingerprint QA 25/25 PASS · projection QA 31/37 · 6 FAIL binding |
| Verdict Cursor | **FAIL** |
| Réserve | R-QA-D2A-01 **bloquante** — seam public accepte catalogue divergent avec fingerprint canonique |
| Correction production | **aucune** |
| Fichiers protégés | **inchangés** |
| QA-G3 Morris | **en attente** |
| PR readiness | **fermée** |
| D2-B / D2-C | **fermés** |
| D3 | **fermé** |

**Statut QA :** `D2-A INDEPENDENT QA FAIL — CORRECTIVE DELIVERY REQUIRES DISTINCT MORRIS GO`.

## AJ. Registre Delivery corrective D2-A — 2026-08-02

| Élément | État |
|---------|------|
| GO correctif | **consommé** — 2026-08-02 04:39 CEST (+0200) |
| Finding | R-QA-D2A-01 traité en production |
| Correction | limitée à `catalogProjection.ts` — binding HASH-A avant succès |
| Tests QA | **préservés** — aucun oracle modifié |
| Résultats | fingerprint QA 25/25 · projection QA 37/37 · Delivery 24/24 · D1 46/46 · oa/cycle 180/180 · suite 913/913 |
| typecheck / lint / build | PASS |
| Statut finding | CORRECTIVE IMPLEMENTATION COMPLETE — PENDING INDEPENDENT QA REVALIDATION |
| QA-G3 Morris | **non décidé** |
| PR readiness | **fermée** |
| D2-B / D2-C | **fermés** |
| D3 | **fermé** |

**Statut :** `CORRECTIVE DELIVERY COMPLETE LOCALLY — QA REVALIDATION REQUIRED — NOT PR READY`.
```

### Document 08 (extrait statut D2)

```markdown
| QA-G2 | vert |
| QA-G3 | **PASS Morris** |
| PR / merge / capitalisation | PR #296 + #297 mergées · D1 techniquement clos sur `main` @ `e1befcb8…` |
| D2 cadrage | **terminé et arbitré** — [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) · D-V3.1-D2-01…12 **ADOPTED BY MORRIS** |
| D2 conception fonctionnelle | **validée** — [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) |
| Architecture fonctionnelle D2 | **adoptée (FA-C)** — [`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) · D-V3.1-D2-FA-01…12 **ADOPTED BY MORRIS** |
| Architecture technique D2 | **adoptée** — [`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) · D-V3.1-D2-TA-01…12 **ADOPTED BY MORRIS** |
| Backlog D2-A/B/C | **validé** — [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) · 17 stories préservées |
| Delivery D2-A | **complète localement** — contrats, HASH-A, projection pure · [rapport](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md) |
| QA D2-A | **exécutée — FAIL Cursor** · R-QA-D2A-01 bloquante · [01](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md) |
| Delivery corrective D2-A | **complète localement** · binding public HASH-A · [02](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md) · QA revalidation requise · QA-G3 non décidé |
| PR readiness D2-A | **non ouverte** |
| Delivery D2-B | **fermée** — gate distinct requis après validation/intégration D2-A |
| Delivery D2-C | **fermée** |
| D2-D (extensions) | **gated** · non ouvert |
| D3 | **non ouvert** |

### Slicing CAT-08

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **cadrage arbitré** · **conception validée** · **FA-C adoptée** · **TA adoptée** · **backlog validé** · D2-A Delivery complète · D2-A QA **FAIL** · Delivery corrective **complète localement** · QA revalidation requise · D2-B/C **fermées** · slicing **A→B→C** · D2-D gated |
| **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |

### Réserves QA

R-QA-01…09 **CLOSED**. QA-G3 PASS. Historique PR readiness conservé.

### Réserves D2

Catalog Projection D2-A Delivery complète ; QA indépendante **FAIL** (R-QA-D2A-01) ; Delivery corrective **complète localement** — QA revalidation requise.
Orchestration CKC, resolver et bridge QualifyCycle restent fermés en D2-B/C —
voir [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) /
[`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) /
[`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) /
```

### Framing README (après)

```markdown
# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — V3.1-D2-A CORRECTIVE DELIVERY COMPLETE — QA REVALIDATION REQUIRED — NOT PR READY` |
| **Date** | 2026-08-02 04:46:44 CEST (+0200) |
| **Cycle courant** | 8 — Delivery / implémentation corrective V3.1-D2-A |
| **Profil** | **Critical** |
| **Typologie** | EVOL / corrective |
| **Gate courant** | GO DELIVERY CORRECTIVE D2-A **consommé** (2026-08-02 04:39 CEST) |
| **Branche Delivery** | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
| **Décisions D2 produit** | D-V3.1-D2-01…12 **ADOPTED BY MORRIS** |
| **Décisions D2-FA** | D-V3.1-D2-FA-01…12 **ADOPTED BY MORRIS** (FA-C) |
| **Décisions D2-TA** | D-V3.1-D2-TA-01…12 **ADOPTED BY MORRIS** |
| **Backlog** | [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) **validé** — 17 stories |
| **Delivery D2-A** | complète localement — [rapport](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md) |
| **QA D2-A** | **FAIL Cursor** — [01](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md) |
| **Delivery corrective** | **complète localement** — [02](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md) · QA revalidation requise |
| **Base `main`** | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
| **Docs D2** | [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) · [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) · [`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) · [`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) · [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) |
| **Docs protégées** | `12`–`18`, fingerprint/contrats/tests QA Delivery **inchangés** (hors `catalogProjection.ts`) |
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
| **Delivery D2-A** | **complète localement** |
| **QA D2-A** | **FAIL** · R-QA-D2A-01 |
| **Delivery corrective D2-A** | **complète localement** · pending QA revalidation |
| Delivery D2-B/C | **fermées** |
| D2-D extensions | **gated** |
| V3.1-D3 | **fermé** · réserve Figma |
| V3.2 / V4–V6 | non autorisés |

**INHERITED-R-01 (README) :** condensation framing — **ACCEPTED — STILL TRACEABLE — NOT LIFTED**.

## Gate candidat suivant

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

## Verdict

`V3.1-D2-A CORRECTIVE DELIVERY READY FOR INDEPENDENT QA REVALIDATION — R-QA-D2A-01 PENDING REVALIDATION — QA-G3 NOT DECIDED — NOT PR READY — D2-B AND D2-C REMAIN CLOSED — D3 NOT OPENED`
```

## État Git final

```text
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? .tmp-sfia-review/MERGE_SHA.txt
?? .tmp-sfia-review/_gen_d2a_corrective_reports.py
?? .tmp-sfia-review/_gen_d2a_qa_reports.py
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
?? .tmp-sfia-review/v3-1-d2-a-corrective-catalogProjection-before.ts
?? .tmp-sfia-review/v3-1-d2-a-corrective-catalogProjection.diff
?? .tmp-sfia-review/v3-1-d2-a-corrective-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-a-corrective-post-results.txt
?? .tmp-sfia-review/v3-1-d2-a-corrective-pre-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-corrective-red-baseline.txt
?? .tmp-sfia-review/v3-1-d2-a-delivery-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-a-delivery-report.md
?? .tmp-sfia-review/v3-1-d2-a-post-branch-doc-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-post-branch-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-pre-branch-doc-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-pre-branch-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-a-qa-command-results.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-final-state.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-post-protected-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-pre-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-report.md
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
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
```

```text
2026-08-02 04:46:44 CEST (+0200)
delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
divergence=0	0
staged=
(empty)
diff=
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
others_project=
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
```

`REVIEW PACK FULL — COMPLETE`.

```text
V3.1-D2-A CORRECTIVE DELIVERY COMPLETE —
R-QA-D2A-01 ADDRESSED IN PRODUCTION —
PUBLIC CATALOG FINGERPRINT BINDING IMPLEMENTED —
SIX QA REGRESSION TESTS PRESERVED AND PASSING —
HASH-A UNCHANGED —
ERROR PRECEDENCE PRESERVED —
D1 AND D2-A NON-REGRESSION PASS —
NO RUNTIME CRYPTO —
NO NEW DEPENDENCY —
NO D2-B —
NO D2-C —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR
```

```text
V3.1-D2-A CORRECTIVE DELIVERY READY FOR INDEPENDENT QA REVALIDATION —
R-QA-D2A-01 PENDING REVALIDATION —
QA-G3 NOT DECIDED —
NOT PR READY —
D2-B AND D2-C REMAIN CLOSED —
D3 NOT OPENED
```
