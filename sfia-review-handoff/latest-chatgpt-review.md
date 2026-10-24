# SFIA Studio — AKG-M5 / L2-D1 — Product O-01 Completeness + OA Audit D5

**Date / heure:** 2026-10-24 10:10 Europe/Paris (CEST)
**Cycle:** 8 — Delivery / implémentation
**Profil:** Critical
**Typologie:** EVOL
**GO Morris:** L2-D1 — BOUNDED LOCAL PRODUCT DELIVERY — **CONSUMED**
**NON autorisé / NON effectué:** commit/push/PR/merge projet · L2-D2 · dual-write · migration/freeze/retrait D1 · Roadmap/Doctrine · v3/REAL · nouveau port/table

**Instruction ChatGPT:** lire `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` ; vérifier D5 txn, O-01, Q5.1–Q5.7, boundaries, PRR/R24, absence cutover D1, diffs. Critical Review ≠ Git Integration GO. L2-D1 ≠ L2-D2 GO.

---

## 1. Verdict

**L2-D1 LOCAL DELIVERY COMPLETE — READY FOR CHATGPT CRITICAL REVIEW — NOT GIT INTEGRATED — L2-D2 NOT AUTHORIZED**

- Option A D5 implémentée : audit succès **dans** UnitOfWork Product.
- Composition Studio : `SqliteProjectAuditJournal` par défaut (plus Memory inject).
- Q5.1–Q5.7 **DETERMINISTIC PROVEN AT TESTED SCOPE** (7/7).
- Suites régression ciblées **82/82 PASS** (durability, restart, UI create, composition, boundaries).
- PRR 04/06/08/09 + digests synchronisés (R24).
- Aucun D1 cutover · pas de dual-write · pas de nouveau port/table.

---

## 2. GO et limites

GO L2-D1 local Delivery. N’adopte pas D1–D9 globalement. Merge/push projet **non** autorisés ce cycle.

---

## 3. Git Truth

| Item | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d1` |
| Branche | `feat/akg-m5-l2-d1-product-o01-audit` |
| HEAD (base, uncommitted) | `d62301771957ecbc74aedf1b405e183f3db3956d` |
| `origin/main` | `d62301771957ecbc74aedf1b405e183f3db3956d` — **ALIGNED** (`d6230177…` PR #611 merged) |
| P6 dirty | **non touché** |
| WT L2-D0 docs | **non modifié** |
| Commit/push/PR projet | **NON** |

---

## 4. Convergence Pre-check

C1 O-01 · Document 04 on main · PRR CURRENT · Doctrine 26/32/34/37 consultés · CKC Cycle 8 Delivery — **PASS** pour exécution bornée.

---

## 5. Architecture R23

| Claim | Niveau |
|---|---|
| AS-IS create: persist txn puis audit post-commit (pré-fix) | CODE VERIFIED @ main |
| Composition Memory inject (pré-fix) | CODE VERIFIED |
| Post-fix: audit succès in-txn + Sqlite default | CODE VERIFIED (local) |
| Q5.1–Q5.7 | **BEHAVIOR PROVEN AT TESTED SCOPE** |
| O-01 create/list/get/resume Product | COVERAGE VERIFIED + suites PASS (re-run) |
| Production / REAL | KNOWN GAP / NOT PROVEN |
| L2-D2 / H4 / R-CUT | NOT AUTHORIZED / OPEN / NOT PROVEN |

---

## 6. Call graph O-01 (CURRENT)

Studio UI → runtime `createProject` / facade `LocalProjectFacade` → `CreateProject.execute` → repos + `store.runInTransaction` → `SqliteProjectAuditJournal` → `oa_audit_events`.
List/get/resume : `ListProjects` / `GetProject` / LPS readers + UI Studio / automatic resume tests.

---

## 7. AS-IS (pré-fix) vs TO-BE (local)

| Dimension | Avant | Après (local) |
|---|---|---|
| Persist create | txn Project/LPS/idem | **inchangé** |
| Audit succès | **après** COMMIT | **dans** txn |
| Composition Studio | Memory journal inject | **SqliteProjectAuditJournal** default |
| Faux échec post-commit | possible | **éliminé** (success path) |
| Tables/ports | — | **aucun nouveau** |

---

## 8. Gap matrix

| Gap | Classification | Disposition L2-D1 |
|---|---|---|
| Memory audit Studio create | COMPLETE | Sqlite default |
| Audit hors txn | COMPLETE | in-txn append |
| O-01 create/list/resume | KEEP | Réutilisé ; preuves re-run |
| MethodMode OA | — | Absent (Q6) |
| D1 dual UX | FREEZE/REPLACE later | **hors scope** L2-D2 |

---

## 9–10. D5 options et choix

| Option | Description | Décision |
|---|---|---|
| **A** | Append succès dans `runInTransaction` ; réutiliser store/journal/`oa_audit_events` | **IMPLÉMENTÉE** |
| B | Outbox / réconciliation post-commit | Non retenue — A compatible sans nouveau port |

Arbitrage Morris structurant : **non requis** (contrats existants).

---

## 11. Fichiers modifiés / créés

**Product code**
- `app/lib/oa/project/application/createProject.ts`
- `app/lib/vertical-slice-core/localProjectComposition.ts`
- `app/lib/vertical-slice-runtime/service.ts` (commentaire)

**Tests**
- `app/__tests__/oa/project/l2d1D5CreateAuditAtomicity.test.ts` (**NEW**)

**PRR (R24)**
- `04` / `06` / `08` / `09` + `production-runtime-reference.manifest.json` digests

---

## 12. Diff Product (substantiel)

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/application/createProject.ts b/projects/sfia-studio/app/lib/oa/project/application/createProject.ts
index 24dd6807..40c727bc 100644
--- a/projects/sfia-studio/app/lib/oa/project/application/createProject.ts
+++ b/projects/sfia-studio/app/lib/oa/project/application/createProject.ts
@@ -87,15 +87,21 @@ export class CreateProject {
         internalCauseRef,
         ...extra,
       });
-      this.audit.append({
-        event: "oa.project.created",
-        ts: timestamp,
-        correlationId,
-        projectId: request.projectId,
-        result: "error",
-        detailCode,
-        durationMs,
-      });
+      // Failure/attempt audit is observational — must not mask the create failure
+      // (e.g. when success-audit throw already rolled back the UnitOfWork).
+      try {
+        this.audit.append({
+          event: "oa.project.created",
+          ts: timestamp,
+          correlationId,
+          projectId: request.projectId,
+          result: "error",
+          detailCode,
+          durationMs,
+        });
+      } catch {
+        /* best-effort error audit */
+      }
       return { ok: false, error, durationMs };
     };

@@ -111,16 +117,22 @@ export class CreateProject {
             : null;
           if (project && livingProjectState) {
             const durationMs = Date.now() - started;
-            this.audit.append({
-              event: "oa.project.created",
-              ts: timestamp,
-              correlationId,
-              projectId: project.projectId,
-              lpsVersion: livingProjectState.version,
-              result: "ok",
-              durationMs,
-              reusedFromIdempotencyKey: true,
-            });
+            // Idempotent reuse: Project already durable. Audit is observational —
+            // must not invent a false create-failure if append fails (no new write txn).
+            try {
+              this.audit.append({
+                event: "oa.project.created",
+                ts: timestamp,
+                correlationId,
+                projectId: project.projectId,
+                lpsVersion: livingProjectState.version,
+                result: "ok",
+                durationMs,
+                reusedFromIdempotencyKey: true,
+              });
+            } catch {
+              /* best-effort reuse audit */
+            }
             return {
               ok: true,
               project,
@@ -246,6 +258,12 @@ export class CreateProject {
         provenance,
       };

+      // D5 Option A (L2-D1): contractual success audit joins Project/LPS/idempotence
+      // in the same UnitOfWork. With SqliteProductStore, SqliteProjectAuditJournal
+      // INSERTs on the same connection participate in BEGIN IMMEDIATE…COMMIT —
+      // append failure rolls back; no durable Project without success audit, and
+      // no post-commit ok:false / false "project absent" contradiction.
+      let durationMs = 0;
       const persist = async () => {
         // Re-check under txn/mutex — concurrent creates of the same id must conflict.
         if (await this.projects.exists(request.projectId)) {
@@ -259,6 +277,16 @@ export class CreateProject {
             project.projectId,
           );
         }
+        durationMs = Date.now() - started;
+        this.audit.append({
+          event: "oa.project.created",
+          ts: timestamp,
+          correlationId,
+          projectId: project.projectId,
+          lpsVersion: 1,
+          result: "ok",
+          durationMs,
+        });
       };

       try {
@@ -274,17 +302,6 @@ export class CreateProject {
         return fail("PERSISTENCE_FAILURE", "atomic_create_failed");
       }

-      const durationMs = Date.now() - started;
-      this.audit.append({
-        event: "oa.project.created",
-        ts: timestamp,
-        correlationId,
-        projectId: project.projectId,
-        lpsVersion: 1,
-        result: "ok",
-        durationMs,
-      });
-
       // Return deep clones so callers cannot alias into the returned graph.
       return {
         ok: true,
diff --git a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
index 8e404b34..83572029 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
@@ -15,7 +15,6 @@ import {
 } from "@/lib/oa/doctrine";
 import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
 import {
-  MemoryProjectAuditJournal,
   createSqliteProductProjectServices,
   describeServerOwnedRepositoryConfigGap,
   resolveServerOwnedRepositoryConfig,
@@ -562,10 +561,11 @@ export function createLocalVerticalSliceServices(
           "oa-product.sqlite",
         )
       : undefined);
+  // L2-D1 / D5: default SqliteProjectAuditJournal on Product SQLite (same store).
+  // Do not inject Memory here — durable create audit is contractual on Studio path.
   const projectServices = createSqliteProductProjectServices({
     doctrineResolver,
     clock,
-    audit: new MemoryProjectAuditJournal(),
     dbPath: productDbPath,
   });
   const idSource = options.idSource ?? new RandomLocalProjectIdSource();
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index e6b593fc..f25f7588 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -533,8 +533,9 @@ function wireOaStack(

   // MW1-S03 / CORR-01 — compose materialization on normal RuntimeOaStack path.
   // Product SQLite: durable materialization audit via SqliteProjectAuditJournal
-  // on the same Product store / oa_audit_events (no new table). LPS create/append
-  // may still use MemoryProjectAuditJournal from local composition.
+  // on the same Product store / oa_audit_events (no new table).
+  // L2-D1: localProjectComposition also defaults to SqliteProjectAuditJournal
+  // (D5 create-path durable audit); do not reintroduce Memory on Studio create.
   const materializationAudit =
     productSqlite !== null
       ? new SqliteProjectAuditJournal(productSqlite)
```

---

## 13. Diff PRR / digests

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index e026431a..6c50b5bc 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -118,6 +118,15 @@ OA = authority of record. W2 = Product coordination. Nora = cognition/recommenda
 | DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs; Tool-First R1 pathless positive-claim gate | NO (narrative) |
 | DEP-VSR-D1-AUDIT-TYPE | vertical-slice-runtime | lib/d1 boundedAtomicAudit | **HISTORICAL** TYPE_ONLY import removed under AKG-M5 L1/A09 (local Delivery). VSR/core now type against `ProjectCycleAuditPort` (`lib/platform/t-a7`); D1 store remains transient adapter when `auditMode=sqlite` + store injected; default **noop** | NO (narrative) |

+### Overlay — AKG-M5 L2-D1 D5 CreateProject audit (local Delivery 2026-10-24)
+
+| Edge | From | To | Change |
+|---|---|---|---|
+| DEP-CREATE-AUDIT-TXN | `CreateProject` | `ProjectAuditJournalPort` + `SqliteProductStore` | Success `oa.project.created` append **inside** UnitOfWork (same SQLite txn when durable) |
+| DEP-COMPOSE-AUDIT-DEFAULT | `localProjectComposition` | `SqliteProjectAuditJournal` | Default Product create journal durable (replaces Memory inject) |
+| New Product table | — | — | **NONE** (`oa_audit_events` reused) |
+| D1 / dual-write | — | — | **NONE** — L2-D2 NOT AUTHORIZED |
+
 ### Overlay — AKG-M5 L1/A09 audit-port decoupling (local Delivery 2026-10-23)

 | Item | Status |
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index 4dd9bed1..c575a4fa 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -82,6 +82,19 @@ Four situations must stay distinct (S2 / M-HD-01 HD11):

 **Not claimed:** global RESTART SAFE; UI automatically rehydrated; unconditional PREPARE after restart; REAL/HQA restart proven. No invented recovery mechanism beyond candidate W2/OA paths.

+## Overlay — AKG-M5 L2-D1 D5 CreateProject audit atomicity (local Delivery 2026-10-24)
+
+| Item | AS-IMPLEMENTED (local candidate — NOT GIT INTEGRATED) |
+|---|---|
+| Contractual success event | `oa.project.created` result=`ok` |
+| Atomicity | Append runs **inside** `SqliteProductStore.runInTransaction` with Project/LPS/idempotence (same `oa_*` DB / `oa_audit_events`) |
+| Studio composition | `localProjectComposition` defaults to `SqliteProjectAuditJournal` (no Memory inject on create path) |
+| Failure audit | Observational / best-effort — must not mask create failure |
+| Idempotent reuse audit | Best-effort (Project already durable) |
+| New table / port | **NONE** |
+| Proof | `l2d1D5CreateAuditAtomicity.test.ts` Q5.1–Q5.7 — DETERMINISTIC AT TESTED SCOPE |
+| Not claimed | L2-D2 cutover · REAL · runtime v3 ADOPTED · D1 retire |
+
 ## Additional stores (harvest)

 | Store | Role | Notes |
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index bf5add8c..6fbafff0 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -13,6 +13,7 @@

 | Flow | Deterministic tests | Notes |
 |---|---|---|
+| O-01 / D5 CreateProject audit (AKG-M5 L2-D1 local) | `l2d1D5CreateAuditAtomicity.test.ts` (Q5.1–Q5.7) + M1 durability/restart suites | **DETERMINISTIC AT TESTED SCOPE** — success audit inside Product UnitOfWork; Studio composition Sqlite journal default; **≠** L2-D2 · **≠** REAL |
 | F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, **productCycleE2eStabilization.frontDoor**, fakeProvider materialization | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — oracle traverses Product UI server actions (Send→Decide→PrepareResolvedM3→ConfirmAndExecuteResolvedM3→Rehydrate) |
 | F05 optional documentary → Generic PREPARE (PR #586) | `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` (+ G-D4, Product Continuity, HQA-F01) | DETERMINISTIC — `no_require_artifact` routes to Generic PREPARE; Artifact obligation path preserved; exact caps; non-authoritative path candidates; Fake cue `__P6_OPTIONAL_DOCUMENTARY_MD__` ≠ OpenAI LIVE |
 | F04 Nora Generic PREPARE tool (D-ER-16) | `p6.der16.genericNoraToolInvocation.d0.test.ts` | DETERMINISTIC — solicit PREPARE only; structural fail-closed; no Attempt; PENDING_GIT_INTEGRATION |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 536de8cf..e81327eb 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,18 +5,31 @@
 - Runtime v3 **NON ADOPTED**
 - This corpus does not change product behavior by itself (Living Reference is descriptive)

+## Overlay — AKG-M5 L2-D1 O-01 + D5 (local Delivery 2026-10-24)
+
+| Item | Status |
+|---|---|
+| GO | **L2-D1 BOUNDED LOCAL PRODUCT DELIVERY** — local only · **NOT GIT INTEGRATED** |
+| Branch | `feat/akg-m5-l2-d1-product-o01-audit` @ `main` `d6230177…` |
+| D5 | Success create audit **inside** Product UnitOfWork · Studio composition defaults `SqliteProjectAuditJournal` |
+| Q5.1–Q5.7 | DETERMINISTIC PROVEN AT TESTED SCOPE (`l2d1D5CreateAuditAtomicity.test.ts`) |
+| O-01 | Create/list/get/resume OA paths reused — no parallel engine · no D1 cutover |
+| L2-D2 | **NOT AUTHORIZED** |
+| H4 / R-CUT | **OPEN / NOT PROVEN** (unchanged) |
+| REAL / P6 / v3 | REAL **NOT PROVEN** · P6 GLOBAL **NOT PASSED** · runtime v3 **NON ADOPTED** |
+
 ## Overlay — AKG-M5 L1/A09 audit-port decoupling (local Delivery 2026-10-23)

 | Item | Status |
 |---|---|
 | GO | **H0-L1 GRANTED BY MORRIS** (ChatGPT conversation 2026-10-23) — local Delivery only |
-| Branch | `feat/akg-m5-l1-a09-audit-port-decoupling` @ `main` `56447774…` — **NOT pushed / NOT PR / NOT merged** in this cycle |
+| Branch | `feat/akg-m5-l1-a09-audit-port-decoupling` — **HISTORICAL as tip** (merged via PR #609/#610; see Roadmap CURRENT TIP) |
 | Contract | `ProjectCycleAuditPort` (t-a7) = unique append port for atomic phase journal; `LocalProjectCreationAuditPort` remains distinct |
 | VSR / core | No `@/lib/d1` audit type imports; typed on `ProjectCycleAuditPort` |
 | D1 adapter | `BoundedAtomicAuditStore` remains transient persistence adapter (`d1_atomic_audit`); **NOT migrated / NOT retired** |
 | Default runtime | `auditMode` **noop** — no implicit sqlite activation |
-| R-A09-01 | **PASS TECHNIQUE local** (targeted tests + typecheck) under ChatGPT Critical Review reserve — **≠ GO L2** |
-| L2 exit condition | Durable Product audit SoT decision + D1 retire/migrate under distinct Morris GO |
+| R-A09-01 | **PASS TECHNIQUE** at merged scope — **≠ GO L2-D2** |
+| L2-D1 D5 | Addressed locally under L2-D1 overlay above (durable create journal + txn coherence) |
 | REAL / P6 / v3 | REAL **NOT PROVEN** · P6 GLOBAL **NOT PASSED** · runtime v3 **NON ADOPTED** |

 ## Overlay — P6-REAL-OBS-P0 Option B (local candidate — CRITICAL CORRECTION)
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 7110a35d..f64c8ee2 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -23,7 +23,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "d72f09a904bc5b1c"
+      "sha256_16": "5978d00f4c53a52e"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
@@ -31,7 +31,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "93e604fb84081c98"
+      "sha256_16": "17febea948bbfb0c"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "6c1f4b5fe1cc50c5"
+      "sha256_16": "2fcffbc442deecad"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "0f6e34e353fea6fa"
+      "sha256_16": "2608d9c0c0b4725c"
     }
   ],
   "components": [
@@ -693,7 +693,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts",
-      "sha256_16": "27e4142d3814f67a"
+      "sha256_16": "4fa008d63f6e6c27"
     },
     {
       "path": "projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts",
```

---

## 14. createProject.ts — CONTENU INTÉGRAL (post-fix)

```typescript
import { randomBytes } from "node:crypto";
import type {
  ActorReference,
  ClockPort,
  DoctrinePackageResolverPort,
  ProvenanceRecord,
} from "@/lib/oa/doctrine";
import { createProjectError } from "../domain/errors";
import {
  assertLpsSnapshotSize,
  validateCreateProjectFields,
} from "../domain/invariants";
import type {
  CreateProjectRequest,
  CreateProjectResult,
  LivingProjectState,
  Project,
} from "../domain/types";
import {
  composeProjectWorkspacePathRoot,
  deriveProjectWorkspaceKeyFromTitle,
} from "../domain/projectWorkspaceKey";
import { resolveServerOwnedRepositoryConfig } from "../domain/serverOwnedRepositoryConfig";
import type { LivingProjectStateRepositoryPort } from "../ports/livingProjectStateRepositoryPort";
import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
import type { ProjectRepositoryPort } from "../ports/projectRepositoryPort";
import type { ProjectPersistenceUnitOfWorkPort } from "../ports/projectPersistenceUnitOfWorkPort";

function newId(prefix: "lps" | "prv" | "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

function creationProvenance(input: {
  timestamp: string;
  correlationId: string;
  projectId: string;
  actor: ActorReference;
  doctrinePackageRef: string;
}): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: newId("prv"),
    actor: input.actor,
    source: "system",
    timestamp: input.timestamp,
    correlationId: input.correlationId,
    projectId: input.projectId,
    doctrinePackageRef: input.doctrinePackageRef,
  };
}

/**
 * Application use-case: create Project + LPS v1 atomically.
 * Resolves doctrine via T-A0 port only. Fail-closed. No v2.6 / method / OPS1.
 */
export class CreateProject {
  constructor(
    private readonly projects: ProjectRepositoryPort,
    private readonly lps: LivingProjectStateRepositoryPort,
    private readonly doctrine: DoctrinePackageResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: ProjectAuditJournalPort,
    private readonly store?: ProjectPersistenceUnitOfWorkPort,
  ) {}

  async execute(request: CreateProjectRequest): Promise<CreateProjectResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId =
      request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createProjectError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<
        Parameters<typeof createProjectError>[0]
      >,
    ): CreateProjectResult => {
      const durationMs = Date.now() - started;
      const error = createProjectError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        doctrinePackageId: request.doctrinePackagePin.doctrinePackageId,
        version: request.doctrinePackagePin.version,
        internalCauseRef,
        ...extra,
      });
      // Failure/attempt audit is observational — must not mask the create failure
      // (e.g. when success-audit throw already rolled back the UnitOfWork).
      try {
        this.audit.append({
          event: "oa.project.created",
          ts: timestamp,
          correlationId,
          projectId: request.projectId,
          result: "error",
          detailCode,
          durationMs,
        });
      } catch {
        /* best-effort error audit */
      }
      return { ok: false, error, durationMs };
    };

    try {
      if (request.idempotencyKey) {
        const existingId = await this.projects.findIdempotency(
          request.idempotencyKey,
        );
        if (existingId) {
          const project = await this.projects.findById(existingId);
          const livingProjectState = project?.currentLpsVersionId
            ? await this.lps.findById(project.currentLpsVersionId)
            : null;
          if (project && livingProjectState) {
            const durationMs = Date.now() - started;
            // Idempotent reuse: Project already durable. Audit is observational —
            // must not invent a false create-failure if append fails (no new write txn).
            try {
              this.audit.append({
                event: "oa.project.created",
                ts: timestamp,
                correlationId,
                projectId: project.projectId,
                lpsVersion: livingProjectState.version,
                result: "ok",
                durationMs,
                reusedFromIdempotencyKey: true,
              });
            } catch {
              /* best-effort reuse audit */
            }
            return {
              ok: true,
              project,
              livingProjectState,
              reusedFromIdempotencyKey: true,
              durationMs,
            };
          }
        }
      }

      const fieldViolation = validateCreateProjectFields({
        projectId: request.projectId,
        title: request.title,
        objective: request.objective,
        lpsVersionId: request.lpsVersionId,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason);
      }

      if (!request.createdBy?.actorId) {
        return fail("PROJECT_INVALID", "created_by_required");
      }

      const sizeViolation = assertLpsSnapshotSize({
        objective: request.objective,
        context: request.context,
        scope: request.scope,
        constraints: [],
        stakeholders: [],
        epistemicItemIds: [],
        decisionIds: [],
      });
      if (sizeViolation) {
        return fail(sizeViolation.detailCode, sizeViolation.reason);
      }

      if (await this.projects.exists(request.projectId)) {
        return fail("PROJECT_ALREADY_EXISTS", "project_id_taken");
      }

      const resolved = await this.doctrine.resolve({
        pin: request.doctrinePackagePin,
        correlationId,
        resolverActor: {
          actorId: "sys:project-create",
          role: "system",
        },
      });

      if (resolved.outcome !== "resolved") {
        return fail(
          "DOCTRINE_UNRESOLVED",
          resolved.error.detailCode ?? resolved.outcome,
          {
            doctrinePackageId: request.doctrinePackagePin.doctrinePackageId,
            version: request.doctrinePackagePin.version,
          },
        );
      }

      const doctrinePackageRef = resolved.ref;
      const lpsVersionId = request.lpsVersionId ?? newId("lps");
      const provenance = creationProvenance({
        timestamp,
        correlationId,
        projectId: request.projectId,
        actor: request.createdBy,
        doctrinePackageRef: `${doctrinePackageRef.doctrinePackageId}@${doctrinePackageRef.version}`,
      });

      const livingProjectState: LivingProjectState = {
        schemaVersion: "0.1.0-oa",
        lpsVersionId,
        projectId: request.projectId,
        version: 1,
        status: "active",
        objective: request.objective.trim(),
        context: request.context,
        scope: request.scope,
        constraints: [],
        stakeholders: [],
        doctrinePackageRef: structuredClone(doctrinePackageRef),
        epistemicItemIds: [],
        decisionIds: [],
        createdAt: timestamp,
        createdBy: structuredClone(request.createdBy),
        correlationId,
        provenance,
        uiOwnership: false,
      };

      // Durable workspace key — derived once; never recomputed on title rename.
      const projectWorkspaceKey = deriveProjectWorkspaceKeyFromTitle(
        request.title,
      );
      const projectPathRoot =
        composeProjectWorkspacePathRoot(projectWorkspaceKey);
      const serverRepo = resolveServerOwnedRepositoryConfig(process.env);
      const repositoryBinding = serverRepo
        ? {
            provider: serverRepo.provider,
            identity: serverRepo.identity,
            remoteUrl: serverRepo.remoteUrl,
            defaultBranch: serverRepo.defaultBranch,
            pathRoot: projectPathRoot,
          }
        : undefined;

      const project: Project = {
        schemaVersion: "0.1.0-oa",
        projectId: request.projectId,
        title: request.title.trim(),
        status: "active",
        currentLpsVersionId: lpsVersionId,
        doctrinePackageRef: structuredClone(doctrinePackageRef),
        projectWorkspaceKey,
        ...(repositoryBinding ? { repositoryBinding } : {}),
        createdAt: timestamp,
        updatedAt: timestamp,
        createdBy: structuredClone(request.createdBy),
        provenance,
      };

      // D5 Option A (L2-D1): contractual success audit joins Project/LPS/idempotence
      // in the same UnitOfWork. With SqliteProductStore, SqliteProjectAuditJournal
      // INSERTs on the same connection participate in BEGIN IMMEDIATE…COMMIT —
      // append failure rolls back; no durable Project without success audit, and
      // no post-commit ok:false / false "project absent" contradiction.
      let durationMs = 0;
      const persist = async () => {
        // Re-check under txn/mutex — concurrent creates of the same id must conflict.
        if (await this.projects.exists(request.projectId)) {
          throw new Error("project_id_taken");
        }
        await this.projects.save(project);
        await this.lps.save(livingProjectState);
        if (request.idempotencyKey) {
          await this.projects.putIdempotency(
            request.idempotencyKey,
            project.projectId,
          );
        }
        durationMs = Date.now() - started;
        this.audit.append({
          event: "oa.project.created",
          ts: timestamp,
          correlationId,
          projectId: project.projectId,
          lpsVersion: 1,
          result: "ok",
          durationMs,
        });
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (err instanceof Error && err.message === "project_id_taken") {
          return fail("PROJECT_ALREADY_EXISTS", "project_id_taken");
        }
        return fail("PERSISTENCE_FAILURE", "atomic_create_failed");
      }

      // Return deep clones so callers cannot alias into the returned graph.
      return {
        ok: true,
        project: structuredClone(project),
        livingProjectState: structuredClone(livingProjectState),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

---

## 15. Test file NEW — CONTENU INTÉGRAL

```typescript
/**
 * L2-D1 / D5 — CreateProject success audit joins Product UnitOfWork.
 * Oracles Q5.1–Q5.7 (deterministic, temp SQLite only).
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  FixedClock,
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  CreateProject,
  createTestSqliteProductProjectServices,
  SqliteProjectAuditJournal,
  type ActorReference,
  type ProjectAuditEvent,
  type ProjectAuditJournalPort,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import { createLocalVerticalSliceServices } from "@/lib/vertical-slice-core";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const tempDirs: string[] = [];
const openServices: SqliteProductProjectServices[] = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-l2d1-d5-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function buildSqliteServices(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-10-24T08:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

class ThrowingAuditJournal implements ProjectAuditJournalPort {
  constructor(
    private readonly inner: ProjectAuditJournalPort,
    private readonly shouldThrow: () => boolean,
  ) {}
  append(event: ProjectAuditEvent): void {
    if (this.shouldThrow()) {
      throw new Error("forced_audit_append_failure");
    }
    this.inner.append(event);
  }
}

afterEach(() => {
  while (openServices.length) {
    const svc = openServices.pop();
    try {
      svc?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("L2-D1 D5 CreateProject audit atomicity", () => {
  it("Q5.1 — create success + durable oa.project.created", async () => {
    const dbPath = tempDbPath("q51.sqlite");
    const svc = buildSqliteServices(dbPath);
    const created = await svc.createProject.execute({
      projectId: "prj:d5-q51",
      title: "D5 Q51",
      objective: "durable audit with create",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:d5-q51",
      lpsVersionId: "lps:d5-q51",
      idempotencyKey: "idem:d5-q51",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const events = (svc.audit as SqliteProjectAuditJournal).listAll();
    const okCreate = events.filter(
      (e) =>
        e.event === "oa.project.created" &&
        e.result === "ok" &&
        e.projectId === "prj:d5-q51",
    );
    expect(okCreate.length).toBe(1);

    svc.dispose();
    const svc2 = buildSqliteServices(dbPath);
    const got = await svc2.getProject.execute({ projectId: "prj:d5-q51" });
    expect(got.ok).toBe(true);
    const events2 = (svc2.audit as SqliteProjectAuditJournal).listAll();
    expect(
      events2.some(
        (e) =>
          e.event === "oa.project.created" && e.projectId === "prj:d5-q51",
      ),
    ).toBe(true);
  });

  it("Q5.2 — audit failure inside txn: no partial Project", async () => {
    const dbPath = tempDbPath("q52.sqlite");
    const { resolver } = createTestDoctrineResolver({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
    });
    const base = createTestSqliteProductProjectServices({
      doctrineResolver: resolver,
      fixedNowIso: "2026-10-24T08:00:00.000Z",
      dbPath,
    });
    openServices.push(base);
    let failAudit = false;
    const throwing = new ThrowingAuditJournal(base.audit, () => failAudit);
    const create = new CreateProject(
      base.projects,
      base.lps,
      resolver,
      new FixedClock("2026-10-24T08:00:00.000Z"),
      throwing,
      base.store,
    );

    failAudit = true;
    const result = await create.execute({
      projectId: "prj:d5-q52",
      title: "D5 Q52",
      objective: "audit fails in txn",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:d5-q52",
      lpsVersionId: "lps:d5-q52",
      idempotencyKey: "idem:d5-q52",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");

    const got = await base.getProject.execute({ projectId: "prj:d5-q52" });
    expect(got.ok).toBe(false);

    base.dispose();
    const reopen = buildSqliteServices(dbPath);
    const got2 = await reopen.getProject.execute({ projectId: "prj:d5-q52" });
    expect(got2.ok).toBe(false);
    const durable = (reopen.audit as SqliteProjectAuditJournal)
      .listAll()
      .filter(
        (e) =>
          e.event === "oa.project.created" &&
          e.result === "ok" &&
          "projectId" in e &&
          e.projectId === "prj:d5-q52",
      );
    expect(durable.length).toBe(0);
  });

  it("Q5.3 — success path never returns ok:false after durable create", async () => {
    // Design: success audit is inside txn; post-commit append removed.
    const dbPath = tempDbPath("q53.sqlite");
    const svc = buildSqliteServices(dbPath);
    const created = await svc.createProject.execute({
      projectId: "prj:d5-q53",
      title: "D5 Q53",
      objective: "no false failure",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:d5-q53",
      lpsVersionId: "lps:d5-q53",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const got = await svc.getProject.execute({ projectId: "prj:d5-q53" });
    expect(got.ok).toBe(true);
  });

  it("Q5.4 — idempotent retry after success", async () => {
    const dbPath = tempDbPath("q54.sqlite");
    const svc = buildSqliteServices(dbPath);
    const req = {
      projectId: "prj:d5-q54",
      title: "D5 Q54",
      objective: "idempotent",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:d5-q54",
      lpsVersionId: "lps:d5-q54",
      idempotencyKey: "idem:d5-q54",
    };
    const first = await svc.createProject.execute(req);
    expect(first.ok).toBe(true);
    const second = await svc.createProject.execute({
      ...req,
      correlationId: "cor:d5-q54-retry",
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.reusedFromIdempotencyKey).toBe(true);
  });

  it("Q5.5 — restart: Project/LPS/audit coherent", async () => {
    const dbPath = tempDbPath("q55.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    const created = await svc1.createProject.execute({
      projectId: "prj:d5-q55",
      title: "D5 Q55",
      objective: "restart",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:d5-q55",
      lpsVersionId: "lps:d5-q55",
      idempotencyKey: "idem:d5-q55",
    });
    expect(created.ok).toBe(true);
    svc1.dispose();

    const svc2 = buildSqliteServices(dbPath);
    const got = await svc2.getProject.execute({ projectId: "prj:d5-q55" });
    expect(got.ok).toBe(true);
    const lps = await svc2.getCurrentLivingProjectState.execute({
      projectId: "prj:d5-q55",
    });
    expect(lps.ok).toBe(true);
    const audits = (svc2.audit as SqliteProjectAuditJournal).listAll();
    expect(
      audits.some(
        (e) =>
          e.event === "oa.project.created" &&
          e.result === "ok" &&
          e.projectId === "prj:d5-q55",
      ),
    ).toBe(true);
  });

  it("Q5.6 — concurrent double create same id: one wins", async () => {
    const dbPath = tempDbPath("q56.sqlite");
    const svc = buildSqliteServices(dbPath);
    const mk = (suffix: string) =>
      svc.createProject.execute({
        projectId: "prj:d5-q56",
        title: "D5 Q56",
        objective: "race",
        context: "ctx",
        scope: "scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: ACTOR,
        correlationId: `cor:d5-q56-${suffix}`,
        lpsVersionId: `lps:d5-q56-${suffix}`,
        idempotencyKey: `idem:d5-q56-${suffix}`,
      });
    const [a, b] = await Promise.all([mk("a"), mk("b")]);
    const oks = [a, b].filter((r) => r.ok);
    const fails = [a, b].filter((r) => !r.ok);
    expect(oks.length).toBe(1);
    expect(fails.length).toBe(1);
    if (!fails[0] || fails[0].ok) return;
    expect(fails[0].error.detailCode).toBe("PROJECT_ALREADY_EXISTS");
  });

  it("Q5.7 — Studio composition defaults durable OA audit (not Memory)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-l2d1-compose-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "oa-product.sqlite");
    const services = createLocalVerticalSliceServices({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS,
      nowIso: "2026-10-24T08:00:00.000Z",
      productDbPath: dbPath,
    });
    expect(services.projectServices.audit).toBeInstanceOf(
      SqliteProjectAuditJournal,
    );
    const created = await services.facade.createProject({
      name: "Compose D5",
      objective: "studio path durable audit",
      context: "composition context for local project create",
      perceivedCriticality: "STANDARD",
      constraints: [],
      shortReference: "D5",
      idempotencyKey: "idem:compose-d5",
    });
    expect(created.ok).toBe(true);
    const journal = services.projectServices.audit as SqliteProjectAuditJournal;
    expect(
      journal.listAll().some((e) => e.event === "oa.project.created"),
    ).toBe(true);
    services.projectServices.dispose?.();
  });
});
```

---

## 16. Tests exécutés

| Suite | Résultat |
|---|---|
| `l2d1D5CreateAuditAtomicity.test.ts` Q5.1–Q5.7 | **7/7 PASS** |
| m1ProductSqliteDurability | PASS |
| m1RestartProcessProof | PASS |
| projectLpsFoundation | PASS |
| localProjectComposition | PASS |
| importBoundaries core + runtime | PASS |
| createProjectUi | PASS |
| studioProjectsHome | PASS |
| automaticProjectResume.ui | PASS |
| **Total batch** | **82/82 PASS** |
| `tsc --noEmit` | PASS |
| PRR conformance `--write-digests` | OK |

Tests Product REAL : **NON EXÉCUTÉS**. DB utilisateur : **non ouvertes**.

---

## 17. Restart / persistence proofs

Q5.1 reopen + Q5.5 + m1RestartProcessProof — Project/LPS/audit cohérents après close/reopen / process B.

---

## 18. R24

SEMANTIC IMPACT **YES** (create audit durability/atomicity + composition default). PRR 04/06/08/09 synchronisés + digests. Roadmap **non** modifiée.

---

## 19. Dette / exit

| Dette | Exit |
|---|---|
| Dual UX D1 | L2-D2 sous GO |
| H4 / R-CUT | Gates distincts |
| Local uncommitted | GO Git Integration distinct |
| Idempotent reuse audit best-effort | Documenté ; non bloquant create |

---

## 20. Réserves

L2-D2 NOT AUTHORIZED · H4 OPEN · R-CUT NOT PROVEN · NOT GIT INTEGRATED · REAL NOT PROVEN · v3 NON ADOPTED.

---

## 21. Non-claims

Pas de Product READY · pas SAFE TO DELETE D1 · pas dual-write · pas nouveau port/table · pas merge.

---

## 22. Gates Morris

1. ChatGPT Critical Review L2-D1
2. GO Git Integration (commit/push/PR) distinct
3. GO merge distinct
4. GO L2-D2 distinct (env-scoped)

---

## 23. Review Handoff L3

| Item | Valeur |
|---|---|
| Verdict publish | **HANDOFF UPDATED — REMOTE VERIFIED** |
| Commit FULL | `fd3e784f3fc12c44696b41f25f5cb7886c197191` |
| Blob FULL | `ec0b25eadc82be35bc048bb32f6da8d410958c11` |
| Parent | `67eb1d83b5893afd5e179cdef8ae01a28ec86e23` |
| Projet | local uncommitted ; **pas de push/PR** |

---

## 24. Verdict (rappel)

**L2-D1 LOCAL DELIVERY COMPLETE — READY FOR CHATGPT CRITICAL REVIEW — NOT GIT INTEGRATED — L2-D2 NOT AUTHORIZED**

---

**Fin pack FULL L2-D1 — diffs + contenus intégraux inclus.**
