# SFIA Studio — W3-D CORRECTION PASS Review Pack FULL

**Date/heure:** 2026-08-26 05:56:35 CEST
**Cycle:** SFIA Studio Product Completion W3-D — CORRECTION PASS
**Profil:** CRITICAL · Typologie: EVOL · Type: 8 Delivery
**Branche:** `delivery/sfia-studio-product-completion-w3-d-full-ckc-catalog`
**Review ChatGPT entrante:** réserves bloquantes R-W3D-01 (X-W3D-03) + R-W3D-02 (X-W3D-13)
**Handoff précédent:** `83b1bc2fde1832e36e39ecf95fce09accc5458cc`

---

## 1. Local Git Truth Check

| Champ | Valeur |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-workspace-w3d-full-ckc-catalog` |
| Branche | `delivery/sfia-studio-product-completion-w3-d-full-ckc-catalog` |
| HEAD | `8e1d548f1adabc173f08bb5a70ae8ed751350a26` |
| origin/main | `8e1d548f1adabc173f08bb5a70ae8ed751350a26` ✓ |
| Scope | modifications W3-D uniquement (pass + correction) |
| Project commit/push/PR/merge | **NON** |

---

## 2. R-W3D-01 — Actual qualification proof

### Problème
Le pass initial prouvait validator/fingerprint/cognitive loader, pas `projectSelectableCycleType` → `QualifyCycleWithCkc` → Product CKC resolver.

### ADAPT minimal (pas de nouvelle SoT / pas d'affaiblissement HASH-A)
1. `CycleTypeCatalogAuthority` = catalog + fingerprint + fingerprintSerialization
2. `bindCycleTypeCatalogAuthority()` (application seam, crypto hors domaine pur) calcule HASH-A
3. `projectSelectableCycleType` accepte authority HASH-A-bound ; legacy plain catalog reste lié au singleton publié
4. `QualifyCycleWithCkc` + `createCkcQualificationServices` injectent `catalogAuthority` (DI test-only ; production = singleton)
5. Fail-closed si fingerprint publié sur contenu étendu, serialization divergente, ou Product CKC uncovered

### Preuves exécutables
- covered extension → projection OK → QualifyCycleWithCkc **SUCCESS** product-studio-native `ckc:studio:w3d-extension-probe`
- uncovered extension → QualifyCycleWithCkc **failure** `CKC_UNAVAILABLE`
- forged fingerprint → `CATALOG_FINGERPRINT_STALE`
- aucun moteur/resolver/orchestrator/store dédié

---

## 3. R-W3D-02 — /studio product-native proof

### Commande réelle
```bash
cd projects/sfia-studio/app
OPS1_CONVERSATION_PROVIDER=fake npm run test:e2e -- e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
```

### Résultat exact
```
Running 5 tests using 1 worker
✓ A SUCCESS → continue recommendation
✓ B STOP → recover + propose available
✓ C FAIL → recover distinct
✓ D propose without decide then decide
✓ E reload restart postEvidence rehydrate
5 passed (16.2s)
```

Assertions CKC W3-D actives dans `assertW3cPostEvidence` :
- `w3c-nora-analysis` contient `/anti scope creep/i`
- pas de `ckc:studio:`
- Recommendation authority none
- replan auto: non

---

## 4. Fichiers correction (+ pass W3-D)

### git diff --stat
```
 .../oa/cycle/catalogProjection.qa.test.ts          |   2 +-
 .../__tests__/oa/cycle/cycleTypeCatalog.test.ts    |  86 ++++++++---------
 .../__tests__/oa/doctrine/productCkcIndex.test.ts  |   2 +-
 .../project-assistant/w3cPostEvidenceLoop.test.ts  |  17 ++++
 ...studio-w3c-post-evidence-replan-runtime.spec.ts |   7 ++
 .../f3/postEvidenceNoraAnalysis.ts                 |  40 +++++++-
 .../project-assistant/w2/w3cPostEvidenceLoop.ts    |  66 +++++++++----
 .../oa/cycle/application/qualifyCycleWithCkc.ts    |  25 +++--
 .../app/lib/oa/cycle/domain/catalogFingerprint.ts  |  42 ++++++++-
 .../app/lib/oa/cycle/domain/catalogProjection.ts   | 102 +++++++++++++++------
 .../app/lib/oa/cycle/domain/cycleTypeCatalog.ts    |  88 ++++++------------
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   8 ++
 .../app/lib/platform/ai/fakeProvider.ts            |  67 ++++++++++++++
 13 files changed, 396 insertions(+), 156 deletions(-)

```

### git diff --name-status
```
M	projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
M	projects/sfia-studio/app/__tests__/oa/doctrine/productCkcIndex.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
M	projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
M	projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycleWithCkc.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts

A       projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts
A       projects/sfia-studio/app/lib/oa/cycle/application/bindCatalogAuthority.ts
```

### Contenu exploitable — corrections R-W3D-01

### DIFF projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
index b436ee32..877a155e 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
@@ -8,7 +8,9 @@ import {
 } from "./cycleTypeCatalog";
 import {
   CYCLE_TYPE_CATALOG_FINGERPRINT,
+  isCycleTypeCatalogAuthority,
   serializeCatalogFingerprint,
+  type CycleTypeCatalogAuthority,
 } from "./catalogFingerprint";
 import type {
   CatalogProjectionError,
@@ -27,30 +29,10 @@ const SAFE_MESSAGES: Readonly<Record<CatalogProjectionErrorCode, string>> =
     CYCLE_TYPE_MAPPING_INVALID: "The cycle type mapping is invalid.",
   });

-/** Canonical HASH-A serialization of the authoritative D1 catalog. */
+/** Canonical HASH-A serialization of the authoritative published D1 catalog. */
 const CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION =
   serializeCatalogFingerprint(CYCLE_TYPE_CATALOG);

-/**
- * Fail-closed binding: the catalog actually used must match HASH-A.
- * Identity with the singleton is sufficient; clones are compared by serialization.
- */
-function catalogMatchesCanonicalFingerprint(
-  catalog: Pick<CycleTypeCatalog, "entries">,
-): boolean {
-  if (catalog === CYCLE_TYPE_CATALOG) {
-    return true;
-  }
-  try {
-    return (
-      serializeCatalogFingerprint(catalog) ===
-      CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION
-    );
-  } catch {
-    return false;
-  }
-}
-
 const ALLOWED_MAPPING_KEYS = new Set([
   "mandatory",
   "primaryLevel",
@@ -135,13 +117,35 @@ function freezeMapping(
   });
 }

+function catalogMatchesPublishedSerialization(
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
 /**
- * Pure, fail-closed D2-A selection from the authoritative D1 catalog.
- * The optional catalog is a pure test seam; production callers use the singleton.
+ * Pure, fail-closed D2-A selection from an authoritative catalog snapshot.
+ *
+ * Production callers use the published singleton (default).
+ * A {@link CycleTypeCatalogAuthority} may bind a future/test snapshot whose
+ * fingerprintSerialization + fingerprint were produced by
+ * bindCycleTypeCatalogAuthority — never an unbound caller catalog.
  */
 export function projectSelectableCycleType(
   context: CatalogSelectionContext,
-  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
+  catalogOrAuthority:
+    | Pick<CycleTypeCatalog, "entries">
+    | CycleTypeCatalogAuthority = CYCLE_TYPE_CATALOG,
 ): CatalogProjectionResult {
   if (!context.correlationId.trim()) {
     return failure("CATALOG_CORRELATION_ID_REQUIRED", context);
@@ -151,7 +155,47 @@ export function projectSelectableCycleType(
       retryable: true,
     });
   }
-  if (context.catalogHash !== CYCLE_TYPE_CATALOG_FINGERPRINT) {
+
+  let catalog: Pick<CycleTypeCatalog, "entries">;
+  let boundFingerprint: string;
+  let requirePublishedContentBinding: boolean;
+
+  if (isCycleTypeCatalogAuthority(catalogOrAuthority)) {
+    let liveSerialization: string;
+    try {
+      liveSerialization = serializeCatalogFingerprint(
+        catalogOrAuthority.catalog,
+      );
+    } catch {
+      return failure("CATALOG_FINGERPRINT_STALE", context, {
+        retryable: true,
+      });
+    }
+    // Integrity without domain crypto: bound serialization must equal live
+    // catalog serialization; published HASH-A may only bind published content.
+    if (
+      catalogOrAuthority.fingerprintSerialization !== liveSerialization ||
+      (liveSerialization === CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION &&
+        catalogOrAuthority.fingerprint !== CYCLE_TYPE_CATALOG_FINGERPRINT) ||
+      (liveSerialization !== CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION &&
+        catalogOrAuthority.fingerprint === CYCLE_TYPE_CATALOG_FINGERPRINT)
+    ) {
+      return failure("CATALOG_FINGERPRINT_STALE", context, {
+        retryable: true,
+      });
+    }
+    catalog = catalogOrAuthority.catalog;
+    boundFingerprint = catalogOrAuthority.fingerprint;
+    requirePublishedContentBinding = false;
+  } else {
+    // Legacy seam: published HASH-A only; content must match published snapshot
+    // (checked after entry-level codes so precise failures keep precedence).
+    catalog = catalogOrAuthority;
+    boundFingerprint = CYCLE_TYPE_CATALOG_FINGERPRINT;
+    requirePublishedContentBinding = true;
+  }
+
+  if (context.catalogHash !== boundFingerprint) {
     return failure("CATALOG_FINGERPRINT_STALE", context, {
       retryable: true,
     });
@@ -175,8 +219,10 @@ export function projectSelectableCycleType(
     });
   }

-  // Binding after local entry checks so precise codes keep precedence.
-  if (!catalogMatchesCanonicalFingerprint(catalog)) {
+  if (
+    requirePublishedContentBinding &&
+    !catalogMatchesPublishedSerialization(catalog)
+  ) {
     return failure("CATALOG_FINGERPRINT_STALE", context, {
       retryable: true,
     });
@@ -191,7 +237,7 @@ export function projectSelectableCycleType(
       lifecycleStatus: entry.lifecycleStatus,
       ckc: freezeMapping(entry.ckc),
       catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
-      catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+      catalogHash: boundFingerprint,
       correlationId: context.correlationId,
     }),
   });

```
### DIFF projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
index 3c51ccc7..af9f2c81 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
@@ -10,7 +10,9 @@ export const CYCLE_TYPE_CATALOG_FINGERPRINT_FORMAT =

 /**
  * Static, versioned HASH-A fingerprint of the canonical D1 contract projection.
- * It is guarded by a Node-only SHA-256 test; no runtime hashing is required.
+ * Current published product snapshot (fifteen entries). Future snapshots bind a
+ * HASH-A via {@link bindCycleTypeCatalogAuthority} (application seam) — never by
+ * disabling integrity checks in projection.
  */
 export const CYCLE_TYPE_CATALOG_FINGERPRINT =
   "sha256:27316864454634a45342baaa1782898bea12914a4ec9cd9b051622eef9efd2cc" as const;
@@ -47,3 +49,41 @@ export function serializeCatalogFingerprint(
 ): string {
   return JSON.stringify(projectCatalogFingerprint(catalog));
 }
+
+/**
+ * Atomic catalog authority: content + its HASH-A fingerprint.
+ * Production uses {@link DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY}.
+ * Future/test snapshots must be bound via {@link bindCycleTypeCatalogAuthority}.
+ */
+export type CycleTypeCatalogAuthority = {
+  readonly catalog: Pick<CycleTypeCatalog, "entries">;
+  readonly fingerprint: string;
+  /**
+   * Exact fingerprint serialization bound at authority construction.
+   * Projection fail-closes when it diverges from live serialize(catalog).
+   */
+  readonly fingerprintSerialization: string;
+};
+
+export const DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY: CycleTypeCatalogAuthority =
+  Object.freeze({
+    catalog: CYCLE_TYPE_CATALOG,
+    fingerprint: CYCLE_TYPE_CATALOG_FINGERPRINT,
+    fingerprintSerialization: serializeCatalogFingerprint(CYCLE_TYPE_CATALOG),
+  });
+
+export function isCycleTypeCatalogAuthority(
+  value: unknown,
+): value is CycleTypeCatalogAuthority {
+  if (!value || typeof value !== "object") return false;
+  const record = value as Record<string, unknown>;
+  return (
+    Object.prototype.hasOwnProperty.call(record, "catalog") &&
+    Object.prototype.hasOwnProperty.call(record, "fingerprint") &&
+    Object.prototype.hasOwnProperty.call(record, "fingerprintSerialization") &&
+    typeof record.fingerprint === "string" &&
+    typeof record.fingerprintSerialization === "string" &&
+    record.catalog !== null &&
+    typeof record.catalog === "object"
+  );
+}

```
### DIFF projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycleWithCkc.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycleWithCkc.ts b/projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycleWithCkc.ts
index 0b481fde..b0f43406 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycleWithCkc.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycleWithCkc.ts
@@ -1,4 +1,8 @@
 import type { ClockPort } from "@/lib/oa/doctrine";
+import {
+  DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY,
+  type CycleTypeCatalogAuthority,
+} from "../domain/catalogFingerprint";
 import { projectSelectableCycleType } from "../domain/catalogProjection";
 import {
   createCkcQualificationFailure,
@@ -74,6 +78,12 @@ export class QualifyCycleWithCkc {
     private readonly qualifyCycle: QualifyCycleExecutor,
     private readonly clock: ClockPort,
     private readonly audit?: CycleAuditPort,
+    /**
+     * Bound catalog authority. Production uses the published singleton.
+     * Test-only future snapshots inject a HASH-A-bound authority — never an
+     * unbound caller catalog (W3-D / US-P1-09 evolvability proof).
+     */
+    private readonly catalogAuthority: CycleTypeCatalogAuthority = DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY,
   ) {}

   async execute(
@@ -93,12 +103,15 @@ export class QualifyCycleWithCkc {
   private async executeInternal(
     request: QualifyCycleWithCkcRequest,
   ): Promise<CkcQualificationResult> {
-    const projectionResult = projectSelectableCycleType({
-      cycleTypeId: request.cycleTypeId,
-      catalogVersion: request.catalogVersion,
-      catalogHash: request.catalogHash,
-      correlationId: request.correlationId,
-    });
+    const projectionResult = projectSelectableCycleType(
+      {
+        cycleTypeId: request.cycleTypeId,
+        catalogVersion: request.catalogVersion,
+        catalogHash: request.catalogHash,
+        correlationId: request.correlationId,
+      },
+      this.catalogAuthority,
+    );
     if (!projectionResult.ok) {
       return this.fail(request, projectionResult.error);
     }

```
### CREATE projects/sfia-studio/app/lib/oa/cycle/application/bindCatalogAuthority.ts
```typescript
/**
 * Application seam — bind a catalog snapshot to its HASH-A fingerprint.
 * Keeps node:crypto out of pure domain modules (D2-A purity contract).
 */
import { createHash } from "node:crypto";
import {
  CYCLE_TYPE_CATALOG,
  type CycleTypeCatalog,
} from "../domain/cycleTypeCatalog";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  serializeCatalogFingerprint,
  type CycleTypeCatalogAuthority,
} from "../domain/catalogFingerprint";

/** Same algorithm as published {@link CYCLE_TYPE_CATALOG_FINGERPRINT}. */
export function computeCatalogFingerprintHash(
  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
): `sha256:${string}` {
  const hex = createHash("sha256")
    .update(serializeCatalogFingerprint(catalog), "utf8")
    .digest("hex");
  return `sha256:${hex}`;
}

/**
 * Bind catalog content to HASH-A. Required for any non-published snapshot used
 * with QualifyCycleWithCkc / projectSelectableCycleType authority injection.
 */
export function bindCycleTypeCatalogAuthority(
  catalog: Pick<CycleTypeCatalog, "entries">,
): CycleTypeCatalogAuthority {
  const fingerprintSerialization = serializeCatalogFingerprint(catalog);
  const fingerprint = computeCatalogFingerprintHash(catalog);
  return Object.freeze({
    catalog,
    fingerprint,
    fingerprintSerialization,
  });
}

/** Sanity: published constant remains the HASH-A of the singleton. */
export function assertPublishedCatalogFingerprintMatchesSingleton(): boolean {
  return (
    computeCatalogFingerprintHash(CYCLE_TYPE_CATALOG) ===
    CYCLE_TYPE_CATALOG_FINGERPRINT
  );
}

```
### DIFF projects/sfia-studio/app/lib/oa/cycle/index.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 320d26f6..091dc4a8 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -27,6 +27,7 @@ export * from "./ports/cycleAudit";

 export { QualifyCycle } from "./application/qualifyCycle";
 export * from "./application/qualifyCycleWithCkc";
+export * from "./application/bindCatalogAuthority";
 export { CreateCycle } from "./application/createCycle";
 export { GetCycle } from "./application/getCycle";
 export { CreateInitialTrajectory } from "./application/createInitialTrajectory";
@@ -87,6 +88,7 @@ import {
 } from "./application/qualifyCycleWithCkc";
 import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
 import { UpdateEpistemicState } from "./application/updateEpistemicState";
+import type { CycleTypeCatalogAuthority } from "./domain/catalogFingerprint";
 import { CkcQualificationResolver } from "./infrastructure/ckcQualificationResolver";
 import { MemoryCkcResolver } from "./infrastructure/memoryCkcResolver";
 import { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
@@ -150,6 +152,11 @@ export type CreateCkcQualificationServicesOptions = {
     registryRoot: string,
   ) => CkcQualificationResolverPort;
   readonly qualifyCycle?: QualifyCycleExecutor;
+  /**
+   * Optional HASH-A-bound catalog authority (test-only future snapshots).
+   * Production omits this → published singleton authority.
+   */
+  readonly catalogAuthority?: CycleTypeCatalogAuthority;
 };

 function usesProductDoctrinePin(pin?: DoctrinePackagePin): boolean {
@@ -223,6 +230,7 @@ export function createCkcQualificationServices(
       qualifyCycle,
       clock,
       failureAwareAudit,
+      options.catalogAuthority,
     ),
   });
 }

```


### Nouveau test W3-D (fichier complet path)
`projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts` (699 lines) — contient preuves QualifyCycleWithCkc N+1 covered/uncovered + coverage/causality/post-Evidence.

---

## 5. Validations

| Check | Résultat |
|---|---|
| Vitest ciblé (406) | **PASS** |
| typecheck | **PASS** |
| lint | **PASS** |
| build | **PASS** |
| git diff --check | **PASS** |
| Playwright /studio W3-C/W3-D (5) | **PASS** |

---

## 6. Matrice X-W3D-01…16 (recalculée)

| ID | Statut | Note |
|---|---|---|
| X-W3D-01 | **PASS** | baseline 15 |
| X-W3D-02 | **PASS** | 15 non structural |
| X-W3D-03 | **PASS** | QualifyCycleWithCkc réel N+1 covered + uncover fail-closed |
| X-W3D-04 | **PASS** | package/catalog |
| X-W3D-05 | **PASS** | full active coverage |
| X-W3D-06 | **PASS** | semantic consumption |
| X-W3D-07 | **PASS** | causality |
| X-W3D-08 | **PASS** | authority separation |
| X-W3D-09 | **PASS** | fail-closed |
| X-W3D-10 | **PASS** | no method fallback |
| X-W3D-11 | **PASS** | provenance |
| X-W3D-12 | **PASS** | no parallel architecture |
| X-W3D-13 | **PASS** | Playwright /studio 5/5 exécuté avec asserts CKC |
| X-W3D-14 | **PASS** | W1/W2/W3A-B-C non-régression |
| X-W3D-15 | **PASS** | DETERMINISTIC PRODUCT-NATIVE PROVEN |
| X-W3D-16 | **PASS** | next = W3 FINAL CLOSURE QUALIFICATION |

---

## 7. Fake/Real Qualification

FakeConversationProvider · DETERMINISTIC PRODUCT-NATIVE PROVEN · GO REAL **NON**

---

## 8. Réserves

- Marker CKC literal dupliqué post-Evidence (évite import Node client) — inchangé
- Package produit publié non modifié (pas de cycle 16 réel)
- W3 reste ouverte

---

## 9. Verdict

**PASS — W3-D CORRECTION COMPLETE — X-W3D-03 ACTUAL QUALIFICATION PROVEN — X-W3D-13 /studio PRODUCT-NATIVE PROVEN — W3-D EXIT PROOF CANDIDATE COMPLETE — DETERMINISTIC PRODUCT-NATIVE PROVEN — READY FOR CHATGPT RE-REVIEW — W3 REMAINS OPEN.**

NEXT CANDIDATE (après re-review + gate Morris Git): **W3 FINAL CLOSURE QUALIFICATION**.

Project Git: commit=NON · push=NON · PR=NON · merge=NON.

### FULL FILE — w3dFullCkcCatalog.test.ts

```typescript
// @vitest-environment node
/**
 * W3-D — FULL CKC TRACK + CATALOG EVOLVABILITY (US-P1-09 + US-P1-14).
 * Deterministic product-native proof · FakeConversationProvider only · no REAL.
 * Proof ceiling: DETERMINISTIC PRODUCT-NATIVE PROVEN ≠ READY FOR REAL.
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  buildCkcCognitivePromptSection,
  computeCkcSemanticFingerprint,
  loadProductCkcCognitiveContent,
  reasonWithResolvedCkcContext,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import { analyzePostEvidenceWithProvider } from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
import {
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_BASELINE_ENTRY_COUNT,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CKC_SYNTHETIC_MAP_PATH,
  METHOD_CYCLES_DOC_PATH,
  bindCycleTypeCatalogAuthority,
  computeCatalogFingerprintHash,
  createCkcQualificationServices,
  listCycleTypes,
  projectCatalogFingerprint,
  projectSelectableCycleType,
  serializeCatalogFingerprint,
  validateCycleTypeCatalog,
  type CycleTypeCatalog,
  type CycleTypeDefinition,
} from "@/lib/oa/cycle";
import { FixedClock } from "@/lib/oa/doctrine";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import {
  computeProductCkcIndexDigest,
  findProductCkcIndexEntry,
  loadProductCkcIndexSync,
  validateProductCkcIndex,
  type ProductCkcIndex,
} from "@/lib/oa/doctrine/product/productCkcIndex";
import { computeManifestDigest } from "@/lib/oa/doctrine/domain/digest";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  proposeW2OptionsForProject,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

const PRODUCT_REGISTRY = resolveProductDoctrineRegistryRoot();

const REPRESENTATIVE_CAUSAL_TYPES = [
  {
    cycleTypeId: "cyc:framing",
    expectReco: /intention|périmètre|besoin réel/i,
    label: "framing",
  },
  {
    cycleTypeId: "cyc:delivery",
    expectReco: /anti scope creep/i,
    label: "delivery",
  },
  {
    cycleTypeId: "cyc:security",
    expectReco: /adversarial|risque résiduel|secret/i,
    label: "security",
  },
  {
    cycleTypeId: "cyc:qa-validation",
    expectReco: /verdict evidence-based|claims interdits|confirmation bias/i,
    label: "qa-validation",
  },
] as const;

function sha256File(content: string): `sha256:${string}` {
  return `sha256:${createHash("sha256").update(content, "utf8").digest("hex")}`;
}

function cloneCatalog(
  mutate: (entries: CycleTypeDefinition[]) => CycleTypeDefinition[],
): CycleTypeCatalog {
  return {
    version: CYCLE_TYPE_CATALOG_VERSION,
    entries: mutate(
      CYCLE_TYPE_CATALOG.entries.map((entry) => ({
        ...entry,
        ckc: { ...entry.ckc },
        aliases: [...entry.aliases],
      })),
    ),
  };
}

function extensionCatalogEntry(): CycleTypeDefinition {
  return {
    cycleTypeId: "cyc:w3d-extension-probe",
    canonicalKey: "w3d-extension-probe",
    label: "Extension probe",
    shortDescription: "Test-only catalog evolvability probe",
    displayOrder: 16,
    lifecycleStatus: "active",
    methodCycleNumber: 16,
    methodReference: `${METHOD_CYCLES_DOC_PATH} §w3d-probe`,
    ckc: {
      mandatory: true,
      primaryLevel: "synthetic",
      primaryReference: CKC_SYNTHETIC_MAP_PATH,
      fallbackPolicy: "none",
      executionAuthority: false,
      doctrineStatus: "method-candidate",
      unavailableBehavior: "fail-closed",
    },
    aliases: [],
  };
}

/**
 * Test-only extended product registry — same FilesystemDoctrinePackageRepository
 * + loadProductCkcCognitiveContent production path. Never a product cycle 16.
 */
function materializeExtendedProductRegistry(): {
  registryRoot: string;
  packagePin: typeof DEFAULT_PRODUCT_DOCTRINE_PIN;
  cleanup: () => void;
} {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-w3d-ext-"));
  const srcRoot = PRODUCT_REGISTRY;
  const relDir = "packages/pkg-sfia-studio-doctrine-v3-1.0.0";
  fs.cpSync(srcRoot, tmp, { recursive: true });

  const pkgDir = path.join(tmp, relDir);
  const artifactRel = "ckc/16-w3d-extension-probe.md";
  const markdown = `# Studio CKC — W3-D extension probe (TEST ONLY)

## Finalité

Exerciser l'évolutivité catalogue via W3D_EXTENSION_PROBE_MARKER sans moteur dédié.

## Nora posture & guidance

### Guidance (condensé)

- W3D_EXTENSION_PROBE_MARKER
- Recommendation seulement — jamais HumanDecision
`;
  fs.writeFileSync(path.join(pkgDir, artifactRel), markdown, "utf8");

  const indexPath = path.join(pkgDir, "ckc-index.json");
  const rawIndex = JSON.parse(fs.readFileSync(indexPath, "utf8")) as ProductCkcIndex & {
    digest?: string;
  };
  const entries = [
    ...rawIndex.entries,
    {
      cycleTypeId: "cyc:w3d-extension-probe",
      ckcId: "ckc:studio:w3d-extension-probe",
      contractVersion: "0.1.0",
      artifactFile: artifactRel,
      sourceDigest: sha256File(markdown),
    },
  ];
  const withoutDigest = {
    schemaVersion: rawIndex.schemaVersion,
    contractVersion: rawIndex.contractVersion,
    entries,
  };
  const indexDigest = computeProductCkcIndexDigest(withoutDigest);
  const nextIndex = { ...withoutDigest, digest: indexDigest };
  expect(validateProductCkcIndex(nextIndex)).toBeNull();
  fs.writeFileSync(indexPath, `${JSON.stringify(nextIndex, null, 2)}\n`, "utf8");

  const manifestPath = path.join(pkgDir, "manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as Record<
    string,
    unknown
  >;
  const sources = (manifest.sources as Array<Record<string, unknown>>).map(
    (source) =>
      source.doctrineSourceRef === "src:product-ckc-index"
        ? { ...source, digest: indexDigest }
        : source,
  );
  const { digest: _old, ...manifestBody } = manifest;
  void _old;
  const nextManifestBody = { ...manifestBody, sources };
  const packageDigest = computeManifestDigest(
    nextManifestBody as Parameters<typeof computeManifestDigest>[0],
  );
  const nextManifest = { ...nextManifestBody, digest: packageDigest };
  fs.writeFileSync(
    manifestPath,
    `${JSON.stringify(nextManifest, null, 2)}\n`,
    "utf8",
  );

  const registryPath = path.join(tmp, "registry.json");
  const registry = JSON.parse(fs.readFileSync(registryPath, "utf8")) as {
    schemaVersion: string;
    entries: Array<Record<string, unknown>>;
  };
  registry.entries = registry.entries.map((entry) =>
    entry.doctrinePackageId === DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId
      ? { ...entry, digest: packageDigest }
      : entry,
  );
  fs.writeFileSync(registryPath, `${JSON.stringify(registry, null, 2)}\n`, "utf8");

  return {
    registryRoot: tmp,
    packagePin: {
      ...DEFAULT_PRODUCT_DOCTRINE_PIN,
      digest: packageDigest,
    },
    cleanup: () => fs.rmSync(tmp, { recursive: true, force: true }),
  };
}

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
});

afterEach(() => {
  setConversationProviderForTests(null);
  cleanupW2TempDirs();
});

describe("W3-D US-P1-09 — catalog evolvability", () => {
  it("X-W3D-01/02: baseline fifteen still valid; 15 is not structural", () => {
    expect(CYCLE_TYPE_CATALOG.entries).toHaveLength(
      CYCLE_TYPE_CATALOG_BASELINE_ENTRY_COUNT,
    );
    expect(validateCycleTypeCatalog(CYCLE_TYPE_CATALOG)).toEqual([]);
    const source = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../lib/oa/cycle/domain/cycleTypeCatalog.ts",
      ),
      "utf8",
    );
    expect(source).not.toMatch(/entries\.length\s*===\s*15/);
    expect(source).not.toMatch(/detailedCount\s*!==\s*4/);
    expect(source).not.toMatch(/syntheticCount\s*!==\s*11/);
    expect(source).not.toMatch(/METHOD_NUMBER_SET/);
    expect(source).not.toMatch(/isExactOneToFifteen/);
  });

  it("X-W3D-03: extended catalog validates + fingerprints via same production helpers", () => {
    const extended = cloneCatalog((entries) => {
      entries.push(extensionCatalogEntry());
      return entries;
    });
    expect(extended.entries).toHaveLength(16);
    expect(validateCycleTypeCatalog(extended)).toEqual([]);
    const fp = projectCatalogFingerprint(extended);
    expect(fp).toHaveLength(16);
    expect(serializeCatalogFingerprint(extended)).toContain(
      "cyc:w3d-extension-probe",
    );
    expect(computeCatalogFingerprintHash(CYCLE_TYPE_CATALOG)).toBe(
      CYCLE_TYPE_CATALOG_FINGERPRINT,
    );
    expect(computeCatalogFingerprintHash(extended)).not.toBe(
      CYCLE_TYPE_CATALOG_FINGERPRINT,
    );
  });

  it("X-W3D-03: covered extension traverses projectSelectable → QualifyCycleWithCkc → Product CKC SUCCESS", async () => {
    const extended = cloneCatalog((entries) => {
      entries.push(extensionCatalogEntry());
      return entries;
    });
    const authority = bindCycleTypeCatalogAuthority(extended);
    const fixture = materializeExtendedProductRegistry();
    try {
      const projection = projectSelectableCycleType(
        {
          cycleTypeId: "cyc:w3d-extension-probe",
          catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
          catalogHash: authority.fingerprint,
          correlationId: "cor:w3d-ext-qualify",
        },
        authority,
      );
      expect(projection.ok).toBe(true);
      if (!projection.ok) return;
      expect(projection.projection.cycleTypeId).toBe("cyc:w3d-extension-probe");
      expect(projection.projection.catalogHash).toBe(authority.fingerprint);
      expect(projection.projection.ckc.executionAuthority).toBe(false);

      const services = createCkcQualificationServices({
        clock: new FixedClock("2026-08-26T04:00:00.000Z"),
        doctrinePackagePin: fixture.packagePin,
        registryRoot: fixture.registryRoot,
        catalogAuthority: authority,
      });
      const qualified = await services.qualifyCycleWithCkc.execute({
        cycleTypeId: "cyc:w3d-extension-probe",
        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
        catalogHash: authority.fingerprint,
        correlationId: "cor:w3d-ext-qualify",
        signals: {
          structuralChange: false,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      });
      expect(qualified.state).toBe("success");
      if (qualified.state !== "success") return;
      expect(qualified.proof.consumed).toBe(true);
      expect(qualified.proof.doctrineStatus).toBe("product-studio-native");
      expect(qualified.proof.source).toBe("product_package");
      expect(qualified.proof.ckcId).toBe("ckc:studio:w3d-extension-probe");
      expect(qualified.proof.executionAuthority).toBe(false);
      expect(qualified.isMorrisDecision).toBe(false);
      expect(qualified.proof.doctrinePackageId).toBe(
        fixture.packagePin.doctrinePackageId,
      );

      const content = loadProductCkcCognitiveContent({
        registryRoot: fixture.registryRoot,
        cycleTypeId: "cyc:w3d-extension-probe",
        packagePin: fixture.packagePin,
      });
      expect(content).toBeTruthy();
      if (!content) return;
      const treatment = await reasonWithResolvedCkcContext({
        userContent: "Instruire Options",
        projectSummary: "name=W3D-ext",
        intentSummary: "cyc:w3d-extension-probe",
        ckcPromptSection: buildCkcCognitivePromptSection(content),
      });
      expect(treatment.recommendation).toMatch(/W3D_EXTENSION_PROBE_MARKER/);
      expect(treatment.recommendation).toContain("PAS UNE DÉCISION HUMAINE");
    } finally {
      fixture.cleanup();
    }
  });

  it("X-W3D-03 negative: uncovered extension fails closed on QualifyCycleWithCkc (no silent)", async () => {
    const extended = cloneCatalog((entries) => {
      entries.push(extensionCatalogEntry());
      return entries;
    });
    const authority = bindCycleTypeCatalogAuthority(extended);
    // Published product package has no binding for the extension type.
    const services = createCkcQualificationServices({
      clock: new FixedClock("2026-08-26T04:00:00.000Z"),
      doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      registryRoot: PRODUCT_REGISTRY,
      catalogAuthority: authority,
    });
    const qualified = await services.qualifyCycleWithCkc.execute({
      cycleTypeId: "cyc:w3d-extension-probe",
      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
      catalogHash: authority.fingerprint,
      correlationId: "cor:w3d-ext-uncovered",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
    });
    expect(qualified.state).toBe("failure");
    if (qualified.state !== "failure") return;
    expect(
      "isMorrisDecision" in qualified
        ? qualified.isMorrisDecision
        : false,
    ).toBe(false);
    expect(qualified.code.length).toBeGreaterThan(0);
  });

  it("X-W3D-03 negative: mismatched authority fingerprint is fail-closed (HASH-A not decorative)", () => {
    const extended = cloneCatalog((entries) => {
      entries.push(extensionCatalogEntry());
      return entries;
    });
    const honest = bindCycleTypeCatalogAuthority(extended);
    const forged = {
      ...honest,
      fingerprint: CYCLE_TYPE_CATALOG_FINGERPRINT, // published hash ≠ extended content
    };
    const projection = projectSelectableCycleType(
      {
        cycleTypeId: "cyc:w3d-extension-probe",
        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
        catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
        correlationId: "cor:w3d-forged",
      },
      forged,
    );
    expect(projection.ok).toBe(false);
    if (projection.ok) return;
    expect(projection.error.code).toBe("CATALOG_FINGERPRINT_STALE");
  });
});

describe("W3-D US-P1-09/14 — full applicable coverage + package consistency", () => {
  it("X-W3D-04/05: every active catalog entry has resolvable Product CKC binding", () => {
    const loaded = loadProductCkcIndexSync({
      registryRoot: PRODUCT_REGISTRY,
      doctrinePackageId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
      packageVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
      packageDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;

    const active = listCycleTypes();
    expect(active.length).toBeGreaterThanOrEqual(1);
    for (const entry of active) {
      const binding = findProductCkcIndexEntry(loaded.index, entry.cycleTypeId);
      expect(binding, `silent uncovered: ${entry.cycleTypeId}`).toBeTruthy();
      const content = loadProductCkcCognitiveContent({
        registryRoot: PRODUCT_REGISTRY,
        cycleTypeId: entry.cycleTypeId,
        packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      });
      expect(content, `unresolvable CKC content: ${entry.cycleTypeId}`).toBeTruthy();
      expect(content?.ckcId).toBe(binding?.ckcId);
      expect(content?.provenance.contentDigest).toBe(binding?.sourceDigest);
      expect(content?.provenance.packageDigest).toBe(
        DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
      );
    }
  });

  it("X-W3D-05 negative: unknown / uncovered cycleType fails closed (no silent)", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:does-not-exist",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(content).toBeNull();
  });
});

describe("W3-D US-P1-14 — semantic consumption + causality", () => {
  it("X-W3D-06: consumed=true alone is insufficient — content must reach Nora", async () => {
    const control = await reasonWithResolvedCkcContext({
      userContent: "Instruire Options",
      projectSummary: "name=Test",
      intentSummary: "cyc:delivery",
      ckcPromptSection: null,
    });
    expect(control.recommendation.toLowerCase()).toContain("générique");

    const delivery = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(delivery).toBeTruthy();
    if (!delivery) return;
    const treatment = await reasonWithResolvedCkcContext({
      userContent: "Instruire Options",
      projectSummary: "name=Test",
      intentSummary: "cyc:delivery",
      ckcPromptSection: buildCkcCognitivePromptSection(delivery),
    });
    expect(treatment.recommendation.toLowerCase()).toMatch(/anti scope creep/);
    expect(treatment.recommendation).not.toBe(control.recommendation);
  });

  it("X-W3D-07: representative materially different CKCs differentiate Nora outputs", async () => {
    const outputs: string[] = [];
    for (const sample of REPRESENTATIVE_CAUSAL_TYPES) {
      const content = loadProductCkcCognitiveContent({
        registryRoot: PRODUCT_REGISTRY,
        cycleTypeId: sample.cycleTypeId,
        packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      });
      expect(content, sample.label).toBeTruthy();
      if (!content) return;
      const reasoned = await reasonWithResolvedCkcContext({
        userContent: "Instruire Options",
        projectSummary: `name=${sample.label}`,
        intentSummary: sample.cycleTypeId,
        ckcPromptSection: buildCkcCognitivePromptSection(content),
      });
      expect(reasoned.recommendation).toMatch(sample.expectReco);
      expect(reasoned.recommendation).toContain("PAS UNE DÉCISION HUMAINE");
      outputs.push(reasoned.recommendation);
    }
    const unique = new Set(outputs);
    expect(unique.size).toBe(REPRESENTATIVE_CAUSAL_TYPES.length);
  });

  it("X-W3D-06/08/11: W2 product path proposes with CKC attribution, no HD/authority", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("w3d-p1.sqlite"),
      idPrefix: "w3dp1",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "w3d",
      cycleTypeId: "cyc:delivery",
    });
    const proposed = await proposeW2OptionsForProject(
      runtime,
      seeded.projectId,
    );
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.ckcCognitionCompletedBeforeMutation).toBe(true);
    expect(proposed.recommendation.rationale.toLowerCase()).toMatch(
      /anti scope creep/,
    );
    expect(proposed.recommendation.isHumanDecision).toBe(false);
    expect(proposed.recommendation.promotesTrajectory).toBe(false);
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);
    expect(proposed.recommendation.ckcProvenance?.ckcId).toBe(
      "ckc:studio:delivery",
    );
    expect(proposed.recommendation.ckcProvenance?.contentDigest).toMatch(
      /^sha256:/,
    );
    expect(proposed.recommendation.ckcProvenance?.semanticFingerprint).toMatch(
      /^sha256:/,
    );
    expect(proposed.recommendation.rationale).not.toMatch(/\[CKC:/);
    expect(proposed.recommendation.rationale).not.toMatch(/ckc:studio:/);
  });

  it("X-W3D-06: post-Evidence Nora consumes same CKC cognitive seam", async () => {
    const delivery = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:delivery",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(delivery).toBeTruthy();
    if (!delivery) return;
    const analysis = await analyzePostEvidenceWithProvider(
      {
        projectId: "prj:w3d",
        executionContractId: "ec:w3d",
        executionContractStatus: "executed",
        executionContractAction: "noop",
        attemptId: "att:w3d",
        attemptStatus: "succeeded",
        selectedAgentRef: "agent:test",
        adapterRef: "adp:test",
        executionMode: "fixture",
        realProcessInvoked: false,
        evidenceId: "ev:w3d",
        reviewBundleId: "rb:w3d",
        technicalResultRef: null,
        reservations: [],
      },
      { ckcPromptSection: buildCkcCognitivePromptSection(delivery) },
    );
    expect(analysis.ok).toBe(true);
    if (!analysis.ok) return;
    expect(analysis.text.toLowerCase()).toMatch(/anti scope creep/);
    expect(analysis.text).toContain("PAS UNE DÉCISION HUMAINE");
  });
});

describe("W3-D fail-closed / negative / no method fallback", () => {
  it("X-W3D-09: provider cognition failure blocks W2 mutation", async () => {
    setConversationProviderForTests(
      new FakeConversationProvider({ failOnCall: 1 }),
    );
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("w3d-fail.sqlite"),
      idPrefix: "w3dfail",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "fail",
      cycleTypeId: "cyc:delivery",
    });
    const proposed = await proposeW2OptionsForProject(
      runtime,
      seeded.projectId,
    );
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PROVIDER_COGNITION_FAILED");
    const current = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(current.ok).toBe(false);
  });

  it("X-W3D-09: CKC unavailable blocks W2 mutation", async () => {
    const runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("w3d-uncov.sqlite"),
      idPrefix: "w3dunc",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "uncov",
      cycleTypeId: "cyc:delivery",
    });
    // Corrupt pin digest → load fails closed
    const oa = runtime.oa!;
    const { resolveW2QualificationInputs } = await import(
      "@/features/project-assistant/w2/qualificationInputs"
    );
    const { proposeTrajectoryOptions } = await import(
      "@/features/project-assistant/w2/proposeTrajectoryOptions"
    );
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: {
        ...qualification.qualification.packagePin,
        digest: ("sha256:" + "0".repeat(64)) as `sha256:${string}`,
      },
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("CKC_UNAVAILABLE");
  });

  it("X-W3D-10: no method/v2.6 fallback strings on cognitive path", () => {
    const ckcCtx = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/f2/ckcCognitiveContext.ts",
      ),
      "utf8",
    );
    const propose = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/w2/proposeTrajectoryOptions.ts",
      ),
      "utf8",
    );
    const post = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../features/project-assistant/w2/w3cPostEvidenceLoop.ts",
      ),
      "utf8",
    );
    for (const src of [ckcCtx, propose, post]) {
      expect(src).not.toMatch(/sfia-fast-track/);
      expect(src).not.toMatch(/method\/sfia/);
      expect(src).not.toMatch(/v2\.6.*fallback/i);
    }
  });

  it("X-W3D-11: provenance chain reconstructible for representative type", () => {
    const loaded = loadProductCkcIndexSync({
      registryRoot: PRODUCT_REGISTRY,
      packageDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    const content = loadProductCkcCognitiveContent({
      registryRoot: PRODUCT_REGISTRY,
      cycleTypeId: "cyc:security",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    })!;
    const binding = findProductCkcIndexEntry(loaded.index, "cyc:security")!;
    expect(content.provenance.doctrinePackageId).toBe(
      DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
    );
    expect(content.provenance.packageVersion).toBe(
      DEFAULT_PRODUCT_DOCTRINE_PIN.version,
    );
    expect(content.provenance.packageDigest).toBe(
      DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    );
    expect(loaded.indexDigest).toBe(loaded.index.digest);
    expect(content.ckcId).toBe(binding.ckcId);
    expect(content.provenance.contentDigest).toBe(binding.sourceDigest);
    expect(computeCkcSemanticFingerprint(content.provenance)).toMatch(
      /^sha256:/,
    );
  });
});
```
