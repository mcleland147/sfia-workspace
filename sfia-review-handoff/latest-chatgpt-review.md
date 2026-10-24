# SFIA Studio — AKG-M5 / L2-D1 — Git Integration / PR Readiness

**Date / heure:** 2026-10-24 11:25 Europe/Paris (CEST)
**Cycle:** 13 — PR Readiness
**Profil:** Critical
**Typologie:** EVOL
**GO Morris:** L2-D1 — GIT INTEGRATION — **CONSUMED**
**NON autorisé / NON effectué:** merge · L2-D2 · dual-write · D1 migrate/freeze/retire · Roadmap/Doctrine · v3/REAL · nouveau port/table · force push

**Instruction ChatGPT:** lire `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` et Draft PR #612 (https://github.com/mcleland147/sfia-workspace/pull/612) ; contrôler 9 fichiers, D5 Option A, Q5.3/Q5.4, CI @ Delivery SHA, PRR lifecycle, O-01 gap, NOT MERGED. Critical PR Review ≠ GO merge. Merge ≠ GO L2-D2.

---

## 1. Verdict

**L2-D1 GIT INTEGRATION COMPLETE**
**— DRAFT PR OPEN**
**— READY FOR CHATGPT CRITICAL PR REVIEW**
**— NOT MERGED**
**— O-01 E2E GAP GOVERNED**
**— L2-D2 NOT AUTHORIZED**

CI @ Delivery SHA: **PASS** (Detect + Build/validate + Required Gate).

---

## 2. GO Morris GI consommé

Autorise commit/push/Draft PR + validations + handoff L3. Merge et L2-D2 **hors** GO. CORR-01 Critical Re-review PASS (CR-D1-01/02 CLOSED) prérequis.

---

## 3. Git Truth

| Item | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d1` |
| Branche | `feat/akg-m5-l2-d1-product-o01-audit` |
| HEAD local | `d98b39302a484a21f42a25d8c7155bbbf6f6f746` |
| Remote branch | `d98b39302a484a21f42a25d8c7155bbbf6f6f746` |
| `origin/main` base | `d62301771957ecbc74aedf1b405e183f3db3956d` |
| Commit Delivery | `d98b39302a484a21f42a25d8c7155bbbf6f6f746` |
| P6 dirty | **non touché** |
| Merge | **NON** |
| Handoff CORR-01 parent | `b3a60ac7ed6e88a75e41d8877f676e77fa5d8138` |

---

## 4. Sources / Convergence

Build Doctrine / Roadmap / C1 consultés (non modifiés). M5 docs 01–04 · Doctrine 26/32/34/37 · PRR CURRENT · handoff CORR-01.

---

## 5–6. R23 / R24

R23: CreateProject success audit in-txn + Sqlite journal default — **CODE + DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE** (Q5).
R24: PRODUCT SEMANTIC IMPACT YES (L2-D1) · CORR-01 no additional · PRR 04/06/08/09 + digests · lifecycle editorial Draft PR / NOT ON MAIN.

---

## 7–8. Handoff source + fidélité

Source Critical Re-review: tip `b3a60ac7ed6e88a75e41d8877f676e77fa5d8138` / blob `b67c986578c7971beb182348cd4cbeaba7d51522`.
Fidélité: D5 Option A inchangée · Q5.3 isTransaction · Q5.4 fail→rollback→retry · composition Sqlite · pas de 10e fichier fonctionnel · O-01 comprendre KNOWN GAP.
Éditorial lifecycle PRR uniquement (NOT GIT INTEGRATED → Draft PR candidate / NOT MERGED / NOT ON MAIN).

---

## 9. Neuf fichiers du commit

```
projects/sfia-studio/app/__tests__/oa/project/l2d1D5CreateAuditAtomicity.test.ts
projects/sfia-studio/app/lib/oa/project/application/createProject.ts
projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```

Count: 9 (exact 9 required).

---

## 10. Diff Product substantiel

```diff
commit d98b39302a484a21f42a25d8c7155bbbf6f6f746
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sat Oct 24 11:14:07 2026 +0200

    feat(studio): complete L2-D1 Product create audit atomicity

    AKG-M5 / L2-D1
    - Product O-01 create audit durable
    - D5 contractual success in Product UoW
    - Q5.1-Q5.7 including CORR-01 negative proof
    - PRR R24 synchronized
    - O-01 comprehend E2E gap governed
    - No D1 cutover or migration

    Co-authored-by: Cursor <cursoragent@cursor.com>

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

## 11. Test NEW — CONTENU INTÉGRAL

```typescript
/**
 * L2-D1 / D5 — CreateProject success audit joins Product UnitOfWork.
 * Oracles Q5.1–Q5.7 (deterministic, temp SQLite only).
 * CORR-01: Q5.3 observes node:sqlite DatabaseSync.isTransaction during success
 * append; Q5.4 covers audit-failure → rollback → clean retry → single create.
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
  type SqliteProductStore,
} from "@/lib/oa/project";
import { createLocalVerticalSliceServices } from "@/lib/vertical-slice-core";

/** node:sqlite DatabaseSync exposes isTransaction (runtime); narrow for tests. */
function sqliteIsTransaction(store: SqliteProductStore): boolean {
  return (store.db as { isTransaction?: boolean }).isTransaction === true;
}

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

/**
 * Observes whether the Product SQLite connection is inside an open transaction
 * at the moment a contractual success create-audit is appended, then delegates
 * to the real SqliteProjectAuditJournal (no fake txn boolean).
 */
class TransactionObservingAuditJournal implements ProjectAuditJournalPort {
  readonly observations: Array<{
    event: ProjectAuditEvent;
    isTransaction: boolean;
  }> = [];

  constructor(
    private readonly inner: ProjectAuditJournalPort,
    private readonly store: SqliteProductStore,
  ) {}

  append(event: ProjectAuditEvent): void {
    const isTxn = sqliteIsTransaction(this.store);
    this.observations.push({ event, isTransaction: isTxn });
    this.inner.append(event);
  }

  successCreateObservations() {
    return this.observations.filter(
      (o) =>
        o.event.event === "oa.project.created" &&
        o.event.result === "ok" &&
        !("reusedFromIdempotencyKey" in o.event && o.event.reusedFromIdempotencyKey),
    );
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

  it("Q5.3 — success audit append observed inside Product SQLite transaction", async () => {
    // CR-D1-02: observe DatabaseSync.isTransaction at contractual success append
    // (node:sqlite equivalent of better-sqlite3 inTransaction). Not a fake flag.
    const dbPath = tempDbPath("q53.sqlite");
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
    const observing = new TransactionObservingAuditJournal(base.audit, base.store);
    const create = new CreateProject(
      base.projects,
      base.lps,
      resolver,
      new FixedClock("2026-10-24T08:00:00.000Z"),
      observing,
      base.store,
    );

    expect(sqliteIsTransaction(base.store)).toBe(false);

    const created = await create.execute({
      projectId: "prj:d5-q53",
      title: "D5 Q53",
      objective: "txn boundary proof",
      context: "ctx-q53",
      scope: "scope-q53",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:d5-q53",
      lpsVersionId: "lps:d5-q53",
      idempotencyKey: "idem:d5-q53",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    // Transaction must be closed after create returns.
    expect(sqliteIsTransaction(base.store)).toBe(false);

    const successObs = observing.successCreateObservations();
    expect(successObs.length).toBe(1);
    const firstSuccess = successObs[0];
    expect(firstSuccess?.isTransaction).toBe(true);
    expect(firstSuccess?.event.correlationId).toBe("cor:d5-q53");
    expect(
      firstSuccess &&
        "projectId" in firstSuccess.event &&
        firstSuccess.event.projectId,
    ).toBe("prj:d5-q53");

    const got = await base.getProject.execute({ projectId: "prj:d5-q53" });
    expect(got.ok).toBe(true);
    const lps = await base.getCurrentLivingProjectState.execute({
      projectId: "prj:d5-q53",
    });
    expect(lps.ok).toBe(true);
    if (lps.ok) {
      expect(lps.livingProjectState.version).toBe(1);
      expect(lps.livingProjectState.lpsVersionId).toBe("lps:d5-q53");
    }

    const durableOk = (base.audit as SqliteProjectAuditJournal)
      .listAll()
      .filter(
        (e) =>
          e.event === "oa.project.created" &&
          e.result === "ok" &&
          e.projectId === "prj:d5-q53",
      );
    expect(durableOk.length).toBe(1);
    expect(durableOk[0]?.correlationId).toBe("cor:d5-q53");

    base.dispose();
    const reopen = buildSqliteServices(dbPath);
    const got2 = await reopen.getProject.execute({ projectId: "prj:d5-q53" });
    expect(got2.ok).toBe(true);
    const events2 = (reopen.audit as SqliteProjectAuditJournal).listAll();
    expect(
      events2.some(
        (e) =>
          e.event === "oa.project.created" &&
          e.result === "ok" &&
          e.projectId === "prj:d5-q53" &&
          e.correlationId === "cor:d5-q53",
      ),
    ).toBe(true);
  });

  it("Q5.4 — audit failure rollback then clean retry → single durable create", async () => {
    // CR-D1-01: FAILED CONTRACTUAL AUDIT → ATOMIC ROLLBACK → CLEAN RETRY →
    // DURABLE SINGLE CREATE (not merely success→retry→reuse).
    const dbPath = tempDbPath("q54.sqlite");
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

    const req = {
      projectId: "prj:d5-q54",
      title: "D5 Q54",
      objective: "fail then retry",
      context: "ctx-q54",
      scope: "scope-q54",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:d5-q54-attempt1",
      lpsVersionId: "lps:d5-q54",
      idempotencyKey: "idem:d5-q54",
    };

    failAudit = true;
    const failed = await create.execute(req);
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.error.detailCode).toBe("PERSISTENCE_FAILURE");

    expect((await base.getProject.execute({ projectId: "prj:d5-q54" })).ok).toBe(
      false,
    );
    expect(
      (
        await base.getCurrentLivingProjectState.execute({
          projectId: "prj:d5-q54",
        })
      ).ok,
    ).toBe(false);
    expect(await base.projects.findIdempotency("idem:d5-q54")).toBeNull();

    const afterFail = (base.audit as SqliteProjectAuditJournal).listAll();
    const successAfterFail = afterFail.filter(
      (e) =>
        e.event === "oa.project.created" &&
        e.result === "ok" &&
        e.projectId === "prj:d5-q54",
    );
    expect(successAfterFail.length).toBe(0);
    // Best-effort failure audit may exist; do not treat as contractual success.

    failAudit = false;
    const recovered = await create.execute({
      ...req,
      correlationId: "cor:d5-q54-attempt2",
    });
    expect(recovered.ok).toBe(true);
    if (!recovered.ok) return;
    expect(recovered.reusedFromIdempotencyKey).toBeFalsy();
    expect(recovered.project.projectId).toBe("prj:d5-q54");
    expect(recovered.livingProjectState.version).toBe(1);
    expect(recovered.livingProjectState.lpsVersionId).toBe("lps:d5-q54");
    expect(await base.projects.findIdempotency("idem:d5-q54")).toBe(
      "prj:d5-q54",
    );

    const afterSuccess = (base.audit as SqliteProjectAuditJournal).listAll();
    const createOkEvents = afterSuccess.filter(
      (e) =>
        e.event === "oa.project.created" &&
        e.result === "ok" &&
        e.projectId === "prj:d5-q54" &&
        !("reusedFromIdempotencyKey" in e && e.reusedFromIdempotencyKey),
    );
    expect(createOkEvents.length).toBe(1);
    expect(createOkEvents[0]?.correlationId).toBe("cor:d5-q54-attempt2");

    const reused = await create.execute({
      ...req,
      correlationId: "cor:d5-q54-reuse",
    });
    expect(reused.ok).toBe(true);
    if (!reused.ok) return;
    expect(reused.reusedFromIdempotencyKey).toBe(true);

    const listed = await base.listProjects.execute({});
    expect(listed.ok).toBe(true);
    if (listed.ok) {
      const matches = listed.projects.filter((p) => p.projectId === "prj:d5-q54");
      expect(matches.length).toBe(1);
    }
    const lpsAgain = await base.getCurrentLivingProjectState.execute({
      projectId: "prj:d5-q54",
    });
    expect(lpsAgain.ok).toBe(true);
    if (lpsAgain.ok) {
      expect(lpsAgain.livingProjectState.version).toBe(1);
      expect(lpsAgain.livingProjectState.lpsVersionId).toBe("lps:d5-q54");
    }

    const finalEvents = (base.audit as SqliteProjectAuditJournal).listAll();
    const effectiveCreates = finalEvents.filter(
      (e) =>
        e.event === "oa.project.created" &&
        e.result === "ok" &&
        e.projectId === "prj:d5-q54" &&
        !("reusedFromIdempotencyKey" in e && e.reusedFromIdempotencyKey),
    );
    expect(effectiveCreates.length).toBe(1);

    base.dispose();
    const reopen = buildSqliteServices(dbPath);
    expect((await reopen.getProject.execute({ projectId: "prj:d5-q54" })).ok).toBe(
      true,
    );
    expect(await reopen.projects.findIdempotency("idem:d5-q54")).toBe(
      "prj:d5-q54",
    );
    const reopenOk = (reopen.audit as SqliteProjectAuditJournal)
      .listAll()
      .filter(
        (e) =>
          e.event === "oa.project.created" &&
          e.result === "ok" &&
          e.projectId === "prj:d5-q54" &&
          !("reusedFromIdempotencyKey" in e && e.reusedFromIdempotencyKey),
      );
    expect(reopenOk.length).toBe(1);
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

## 12–13. Diffs PRR + manifest digests

```diff
commit d98b39302a484a21f42a25d8c7155bbbf6f6f746
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sat Oct 24 11:14:07 2026 +0200

    feat(studio): complete L2-D1 Product create audit atomicity

    AKG-M5 / L2-D1
    - Product O-01 create audit durable
    - D5 contractual success in Product UoW
    - Q5.1-Q5.7 including CORR-01 negative proof
    - PRR R24 synchronized
    - O-01 comprehend E2E gap governed
    - No D1 cutover or migration

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index e026431a..f7ecaf1f 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -118,6 +118,15 @@ OA = authority of record. W2 = Product coordination. Nora = cognition/recommenda
 | DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs; Tool-First R1 pathless positive-claim gate | NO (narrative) |
 | DEP-VSR-D1-AUDIT-TYPE | vertical-slice-runtime | lib/d1 boundedAtomicAudit | **HISTORICAL** TYPE_ONLY import removed under AKG-M5 L1/A09 (local Delivery). VSR/core now type against `ProjectCycleAuditPort` (`lib/platform/t-a7`); D1 store remains transient adapter when `auditMode=sqlite` + store injected; default **noop** | NO (narrative) |

+### Overlay — AKG-M5 L2-D1 D5 CreateProject audit (Delivery 2026-10-24 — branch/Draft PR candidate · NOT ON MAIN)
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
index 4dd9bed1..eabf60aa 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -82,6 +82,20 @@ Four situations must stay distinct (S2 / M-HD-01 HD11):

 **Not claimed:** global RESTART SAFE; UI automatically rehydrated; unconditional PREPARE after restart; REAL/HQA restart proven. No invented recovery mechanism beyond candidate W2/OA paths.

+## Overlay — AKG-M5 L2-D1 D5 CreateProject audit atomicity (Delivery 2026-10-24)
+
+| Item | AS-IMPLEMENTED (branch candidate — **NOT MERGED** / **NOT ON MAIN**) |
+|---|---|
+| Lifecycle | Historical local Delivery + CORR-01 → **Git Integration candidate** on `feat/akg-m5-l2-d1-product-o01-audit` (Draft PR) — ≠ CURRENT ON MAIN until merge GO |
+| Contractual success event | `oa.project.created` result=`ok` |
+| Atomicity | Append runs **inside** `SqliteProductStore.runInTransaction` with Project/LPS/idempotence (same `oa_*` DB / `oa_audit_events`) |
+| Studio composition | `localProjectComposition` defaults to `SqliteProjectAuditJournal` (no Memory inject on create path) |
+| Failure audit | Observational / best-effort — must not mask create failure |
+| Idempotent reuse audit | Best-effort (Project already durable) |
+| New table / port | **NONE** |
+| Proof | `l2d1D5CreateAuditAtomicity.test.ts` Q5.1–Q5.7 — DETERMINISTIC AT TESTED SCOPE |
+| Not claimed | L2-D2 cutover · REAL · runtime v3 ADOPTED · D1 retire · CURRENT ON MAIN |
+
 ## Additional stores (harvest)

 | Store | Role | Notes |
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index bf5add8c..e6010120 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -13,6 +13,7 @@

 | Flow | Deterministic tests | Notes |
 |---|---|---|
+| O-01 / D5 CreateProject audit (AKG-M5 L2-D1 local + CORR-01) | `l2d1D5CreateAuditAtomicity.test.ts` (Q5.1–Q5.7) + M1 durability/restart suites | **DETERMINISTIC AT TESTED SCOPE** — success audit inside Product UnitOfWork; Studio composition Sqlite journal default; **CORR-01:** Q5.3 observes `DatabaseSync.isTransaction` during success append; Q5.4 covers audit-failure→rollback→clean retry→single create; **≠** L2-D2 · **≠** REAL |
 | F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, **productCycleE2eStabilization.frontDoor**, fakeProvider materialization | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — oracle traverses Product UI server actions (Send→Decide→PrepareResolvedM3→ConfirmAndExecuteResolvedM3→Rehydrate) |
 | F05 optional documentary → Generic PREPARE (PR #586) | `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` (+ G-D4, Product Continuity, HQA-F01) | DETERMINISTIC — `no_require_artifact` routes to Generic PREPARE; Artifact obligation path preserved; exact caps; non-authoritative path candidates; Fake cue `__P6_OPTIONAL_DOCUMENTARY_MD__` ≠ OpenAI LIVE |
 | F04 Nora Generic PREPARE tool (D-ER-16) | `p6.der16.genericNoraToolInvocation.d0.test.ts` | DETERMINISTIC — solicit PREPARE only; structural fail-closed; no Attempt; PENDING_GIT_INTEGRATION |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 536de8cf..d62916f3 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,18 +5,45 @@
 - Runtime v3 **NON ADOPTED**
 - This corpus does not change product behavior by itself (Living Reference is descriptive)

+## Overlay — AKG-M5 L2-D1 O-01 + D5 (Delivery 2026-10-24 → Git Integration candidate)
+
+| Item | Status |
+|---|---|
+| GO | **L2-D1 BOUNDED LOCAL PRODUCT DELIVERY** + **L2-D1 GIT INTEGRATION** (Draft PR) — **NOT MERGED** / **NOT ON MAIN** |
+| Branch | `feat/akg-m5-l2-d1-product-o01-audit` @ base `main` `d6230177…` |
+| Lifecycle note | Overlay title “local Delivery” remains a historical snapshot; branch/Draft PR ≠ CURRENT ON MAIN |
+| D5 | Success create audit **inside** Product UnitOfWork · Studio composition defaults `SqliteProjectAuditJournal` |
+| Q5.1–Q5.7 | DETERMINISTIC PROVEN AT TESTED SCOPE (`l2d1D5CreateAuditAtomicity.test.ts`) |
+| O-01 | Create/list/get/resume OA paths reused — no parallel engine · no D1 cutover · « comprendre » E2E Product→UI = **KNOWN GAP** |
+| L2-D2 | **NOT AUTHORIZED** |
+| H4 / R-CUT | **OPEN / NOT PROVEN** (unchanged) |
+| REAL / P6 / v3 | REAL **NOT PROVEN** · P6 GLOBAL **NOT PASSED** · runtime v3 **NON ADOPTED** |
+
+## Overlay — AKG-M5 L2-D1 / CORR-01 evidence correction (2026-10-24)
+
+| Item | Status |
+|---|---|
+| GO | **L2-D1 / CORR-01 — TARGETED EVIDENCE CORRECTION** — tests/preuves · **no Product redesign** · absorbed into Git Integration candidate |
+| CR-D1-02 / Q5.3 | Success `oa.project.created` append observed with `DatabaseSync.isTransaction === true` (node:sqlite) |
+| CR-D1-01 / Q5.4 | Contractual audit failure → rollback (no Project/LPS/idem/success) → clean retry → single durable create → idempotent reuse |
+| Product source | **UNCHANGED** vs L2-D1 Delivery (Option A conserved) |
+| O-01 « comprendre » | Surfaces Product COVERAGE VERIFIED; UI mocks presentation BEHAVIOR AT TESTED SCOPE; **integrated durable Product→UI comprehend** = **KNOWN GAP** (governed) |
+| Additional product semantic impact | **NONE** beyond L2-D1 initial R24 |
+| Lifecycle | **NOT MERGED** / **NOT ON MAIN** until distinct Morris merge GO |
+| L2-D2 | **NOT AUTHORIZED** |
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
index 7110a35d..b0deb3ef 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -23,7 +23,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "d72f09a904bc5b1c"
+      "sha256_16": "5721333d432b4374"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
@@ -31,7 +31,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "93e604fb84081c98"
+      "sha256_16": "19920b2897a11d22"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "6c1f4b5fe1cc50c5"
+      "sha256_16": "47e52b3f22ff93f4"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "0f6e34e353fea6fa"
+      "sha256_16": "b843a205573a6d29"
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

`check-production-runtime-reference.mjs --write-digests` → CONFORMANCE OK (pre-commit).

---

## 14–15. Q5 + régressions (pre-push local)

| Suite | Résultat |
|---|---|
| Q5.1–Q5.7 | **7/7 PASS** |
| Batch 10 fichiers (durability/restart/UI/composition/boundaries) | **82/82 PASS** |
| `tsc --noEmit` | PASS |
| PRR digests | OK |

REAL / DB user : non exécutés.

---

## 16–17. O-01 / H4 / R-CUT / REAL / v3

O-01 créer/trouver/reprendre : DETERMINISTIC AT TESTED SCOPE. Comprendre E2E Product→UI : **KNOWN GAP GOVERNED**. H4 OPEN · R-CUT NOT PROVEN · REAL NOT PROVEN · v3 NON ADOPTED.

---

## 18–22. Commit / Push / Draft PR

| Item | Valeur |
|---|---|
| Commit | `d98b39302a484a21f42a25d8c7155bbbf6f6f746` |
| Push remote | `d98b39302a484a21f42a25d8c7155bbbf6f6f746` (identity match) |
| Draft PR | **#612** — https://github.com/mcleland147/sfia-workspace/pull/612 |
| Base / Head | `main` ← `feat/akg-m5-l2-d1-product-o01-audit` |
| État | **DRAFT** OPEN · **NOT MERGED** |
| Fichiers PR | 9 exact |

---

## 23. CI @ Delivery SHA

Workflow run: [40081164062](https://github.com/mcleland147/sfia-workspace/actions/runs/40081164062)
Commit SHA: `d98b39302a484a21f42a25d8c7155bbbf6f6f746`

| Check | Conclusion | URL |
|---|---|---|
| Detect SFIA Studio changes | **SUCCESS** | https://github.com/mcleland147/sfia-workspace/actions/runs/40081164062/job/120834846981 |
| Build and validate SFIA Studio | **SUCCESS** (7m31s) | https://github.com/mcleland147/sfia-workspace/actions/runs/40081164062/job/120834872660 |
| SFIA Studio Required Gate | **SUCCESS** | https://github.com/mcleland147/sfia-workspace/actions/runs/40081164062/job/120836334480 |

**CI PASS at Delivery SHA** — MERGE NOT AUTHORIZED (GO merge distinct).

---

## 24–26. Dette / Non-claims / Gates

| Dette | Exit |
|---|---|
| O-01 comprendre E2E | GO UI intégration distinct |
| Dual UX D1 | L2-D2 sous GO |
| Draft → merge | Critical PR Review + GO Morris merge |

Non-claims: pas CURRENT ON MAIN · pas O-01 E2E COMPLETE · pas SAFE TO DELETE D1 · pas REAL · pas v3 ADOPTED · pas L2-D2.

Gates: Critical PR Review → GO merge → post-merge CI → GO L2-D2.

---

## 27. Verdict

**L2-D1 GIT INTEGRATION COMPLETE — DRAFT PR OPEN — READY FOR CHATGPT CRITICAL PR REVIEW — NOT MERGED — O-01 E2E GAP GOVERNED — L2-D2 NOT AUTHORIZED**

---

## 28. Review Handoff L3

| Item | Valeur |
|---|---|
| Verdict publish | **HANDOFF UPDATED — REMOTE VERIFIED** |
| Commit FULL | `b7705d48dfad6dd0b4f8867c60faa79b86656b05` |
| Blob FULL | `840e3d86906398d55bb0100b46b7cbd81f904563` |
| Parent | `b3a60ac7ed6e88a75e41d8877f676e77fa5d8138` |
| Projet commit | `d98b39302a484a21f42a25d8c7155bbbf6f6f746` · Draft PR #612 · **NOT MERGED** |

---

**Fin pack FULL L2-D1 Git Integration.**
