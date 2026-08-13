# SFIA Studio M2 — Transaction Concurrency Correction — FULL Review Pack

## Horodatage
2026-08-13 12:37:44 CEST (Europe/Paris)

## Cycle / profil / typologie
- Cycle: **9 — QA / validation**
- Profil SFIA: **Critical**
- Typologie: **RUN**
- GO Morris: **GO MORRIS — MICRO-CYCLE CORRECTION M2**
- Autorisé: correction transactionnelle + preuve concurrence + validation + régularisation R2 documentaire
- Non autorisé: commit/push/PR/merge projet · M3 · HD durable · Cursor REAL · Gate D · Auth/Ack · runtime v3 ADOPTED

## Baseline / branche / HEAD
- Branche: `delivery/sfia-studio-m2-cognitive-piloting`
- HEAD: `5e71c7c3212e93029127cfe7aeb22752be582cec`
- origin/main: `5e71c7c3212e93029127cfe7aeb22752be582cec`
- Branche distante M2: **absente**
- Staged: **vide**

## Handoff source
- Branche: `sfia/review-handoff`
- Fichier: `sfia-review-handoff/latest-chatgpt-review.md`
- Commit: `6e02c7fba01af9376084bacb029bfa077467d819`

## Local Git Truth
- fetch OK
- branche/HEAD/origin.main = `5e71c7c…` PASS
- staged vide PASS
- M2 remote absente PASS

## Convergence Pre-check
- triggered: oui
- capacité: M2 IMPLEMENTED CANDIDATE local
- réserve: transaction ownership concurrency defect (R1)
- R2: scope test vertical-slice-core régularisé Morris
- M1: MERGED ON MAIN
- next: M3 NOT AUTHORIZED
- runtime v3: NON ADOPTED

## Réserve R1 — transaction
**Cause:** `SqliteProductStore.runInTransaction` traitait tout `depth > 0` comme nested, y compris un appel concurrent indépendant pendant qu’une transaction A était suspendue (`await`). B pouvait ainsi s’exécuter dans le BEGIN/COMMIT/ROLLBACK de A.

**Solution:** `AsyncLocalStorage` (`node:async_hooks`) par instance de store :
- contexte `{ active, depth }` posé uniquement pour la chaîne async propriétaire ;
- nested réel (`existing?.active`) → exécution directe sans queue / sans nouveau BEGIN ;
- appel hors contexte → queue → propre BEGIN/COMMIT ;
- `active=false` avant COMMIT/ROLLBACK pour empêcher une autorité résiduelle.

## Réserve R2 — scope test
- Fichier: `projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts`
- SHA-256 before: `5813606495fe05df80ba725bbae27a4258dd8bcb4cbdf274e496fe9cb221e600`
- SHA-256 after: `5813606495fe05df80ba725bbae27a4258dd8bcb4cbdf274e496fe9cb221e600`
- Identiques: **YES**
- R2 = **CLOSED — Morris scope regularization consumed — file frozen byte-for-byte**

## Snapshot M2 avant correction
- diff hash before: `fc9b9535dd3187a875749b7ba2e3670a98ccb32166b916beb7bb0ef90bba0939`
- untracked M2 list + SHA capturés sous `/tmp/m2-before-*`
- Non-drift après correction (hors 2 fichiers autorisés): **PASS**

## Fichiers modifiés (seuls autorisés)

### 1) `sqliteProductStore.ts` — contenu complet

```typescript
import { AsyncLocalStorage } from "node:async_hooks";
import type { DatabaseSync } from "node:sqlite";
import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";
import type { CyclePersistenceUnitOfWorkPort } from "@/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort";
import { openProductSqlite } from "./db";
import type { ProductSqliteHandle } from "./productSqliteHandle";
import { resolveProductSqlitePath } from "./paths";

type TransactionContext = {
  /** True only while this async chain owns an open Product transaction. */
  active: boolean;
  depth: number;
};

/**
 * SQLite product UnitOfWork for Project/LPS (M1) + CycleInstance (M2).
 * Isolated file — not D1 / OPS1 / FinOps. Single Product DB authority.
 *
 * Nested reentrance: same async chain (AsyncLocalStorage) reuses the open
 * transaction without re-queueing (CreateCycle → Append LPS).
 * Independent concurrent callers never join an open transaction — they wait
 * on the store queue and open their own BEGIN/COMMIT.
 */
export class SqliteProductStore
  implements
    ProjectPersistenceUnitOfWorkPort,
    CyclePersistenceUnitOfWorkPort,
    ProductSqliteHandle
{
  readonly db: DatabaseSync;
  readonly dbPath: string;

  /** Test hook — force next save to throw (atomicity tests). */
  failNextSave: "project" | "lps" | "cycle" | null = null;

  private queue: Promise<void> = Promise.resolve();
  private readonly txLocal = new AsyncLocalStorage<TransactionContext>();

  constructor(dbPath?: string) {
    this.dbPath = resolveProductSqlitePath(dbPath);
    this.db = openProductSqlite(this.dbPath);
  }

  async runInTransaction<T>(fn: () => Promise<T>): Promise<T> {
    const existing = this.txLocal.getStore();
    // Real nest: same async ownership chain only.
    if (existing?.active) {
      existing.depth += 1;
      try {
        return await fn();
      } finally {
        existing.depth -= 1;
      }
    }

    const run = async (): Promise<T> => {
      const ctx: TransactionContext = { active: true, depth: 1 };
      return this.txLocal.run(ctx, async () => {
        this.db.exec("BEGIN IMMEDIATE");
        try {
          const result = await fn();
          ctx.active = false;
          this.db.exec("COMMIT");
          return result;
        } catch (err) {
          ctx.active = false;
          try {
            this.db.exec("ROLLBACK");
          } catch {
            /* ignore rollback errors after failed begin */
          }
          throw err;
        }
      });
    };

    const next = this.queue.then(run, run);
    this.queue = next.then(
      () => undefined,
      () => undefined,
    );
    return next;
  }

  close(): void {
    try {
      this.db.close();
    } catch {
      /* ignore */
    }
  }
}

```

### Diff utile `sqliteProductStore.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
index 026f3ae..5d98644 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
@@ -1,21 +1,40 @@
+import { AsyncLocalStorage } from "node:async_hooks";
 import type { DatabaseSync } from "node:sqlite";
 import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";
+import type { CyclePersistenceUnitOfWorkPort } from "@/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort";
 import { openProductSqlite } from "./db";
+import type { ProductSqliteHandle } from "./productSqliteHandle";
 import { resolveProductSqlitePath } from "./paths";

+type TransactionContext = {
+  /** True only while this async chain owns an open Product transaction. */
+  active: boolean;
+  depth: number;
+};
+
 /**
- * SQLite product UnitOfWork for atomic Project + LPS mutations (M1).
- * Isolated file — not D1 / OPS1 / FinOps.
+ * SQLite product UnitOfWork for Project/LPS (M1) + CycleInstance (M2).
+ * Isolated file — not D1 / OPS1 / FinOps. Single Product DB authority.
+ *
+ * Nested reentrance: same async chain (AsyncLocalStorage) reuses the open
+ * transaction without re-queueing (CreateCycle → Append LPS).
+ * Independent concurrent callers never join an open transaction — they wait
+ * on the store queue and open their own BEGIN/COMMIT.
  */
-export class SqliteProductStore implements ProjectPersistenceUnitOfWorkPort {
+export class SqliteProductStore
+  implements
+    ProjectPersistenceUnitOfWorkPort,
+    CyclePersistenceUnitOfWorkPort,
+    ProductSqliteHandle
+{
   readonly db: DatabaseSync;
   readonly dbPath: string;

   /** Test hook — force next save to throw (atomicity tests). */
-  failNextSave: "project" | "lps" | null = null;
+  failNextSave: "project" | "lps" | "cycle" | null = null;

-  private depth = 0;
   private queue: Promise<void> = Promise.resolve();
+  private readonly txLocal = new AsyncLocalStorage<TransactionContext>();

   constructor(dbPath?: string) {
     this.dbPath = resolveProductSqlitePath(dbPath);
@@ -23,29 +42,36 @@ export class SqliteProductStore implements ProjectPersistenceUnitOfWorkPort {
   }

   async runInTransaction<T>(fn: () => Promise<T>): Promise<T> {
+    const existing = this.txLocal.getStore();
+    // Real nest: same async ownership chain only.
+    if (existing?.active) {
+      existing.depth += 1;
+      try {
+        return await fn();
+      } finally {
+        existing.depth -= 1;
+      }
+    }
+
     const run = async (): Promise<T> => {
-      if (this.depth === 0) {
+      const ctx: TransactionContext = { active: true, depth: 1 };
+      return this.txLocal.run(ctx, async () => {
         this.db.exec("BEGIN IMMEDIATE");
-      }
-      this.depth += 1;
-      try {
-        const result = await fn();
-        this.depth -= 1;
-        if (this.depth === 0) {
+        try {
+          const result = await fn();
+          ctx.active = false;
           this.db.exec("COMMIT");
-        }
-        return result;
-      } catch (err) {
-        this.depth -= 1;
-        if (this.depth === 0) {
+          return result;
+        } catch (err) {
+          ctx.active = false;
           try {
             this.db.exec("ROLLBACK");
           } catch {
             /* ignore rollback errors after failed begin */
           }
+          throw err;
         }
-        throw err;
-      }
+      });
     };

     const next = this.queue.then(run, run);

```

### 2) `m2ProductCycleDurability.test.ts` — fichier complet

```typescript
/**
 * M2 — Product SQLite migration M1→M2 + Cycle/LPS atomicity proofs.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  PRODUCT_SCHEMA_VERSION,
  PRODUCT_SCHEMA_VERSION_M1,
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

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
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m2-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function seedM1Database(dbPath: string): void {
  const db = new DatabaseSync(dbPath);
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec(`
CREATE TABLE schema_meta (
  key TEXT PRIMARY KEY NOT NULL,
  value TEXT NOT NULL
);
CREATE TABLE oa_projects (
  project_id TEXT PRIMARY KEY NOT NULL,
  status TEXT NOT NULL,
  current_lps_version_id TEXT,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT
);
CREATE TABLE oa_lps (
  lps_version_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  version INTEGER NOT NULL,
  status TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
  UNIQUE (project_id, version)
);
CREATE TABLE oa_lps_current (
  project_id TEXT PRIMARY KEY NOT NULL,
  lps_version_id TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
  FOREIGN KEY (lps_version_id) REFERENCES oa_lps(lps_version_id)
);
CREATE TABLE oa_idempotency (
  idempotency_key TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
);
CREATE TABLE oa_audit_events (
  row_id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_type TEXT NOT NULL,
  occurred_at TEXT NOT NULL,
  project_id TEXT,
  correlation_id TEXT,
  payload_json TEXT NOT NULL
);
`);
  db.prepare(
    `INSERT INTO schema_meta(key, value) VALUES ('schema_version', ?)`,
  ).run(PRODUCT_SCHEMA_VERSION_M1);
  db.close();
}

function buildProjectServices(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T10:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("M2 Product SQLite migration + Cycle durability", () => {
  it("A — migrates M1 DB additively, preserves Project/LPS, idempotent reopen", async () => {
    const dbPath = tempDbPath("m1-legacy.sqlite");
    // Bootstrap as M2, then downgrade schema to simulate pre-M2 Product DB with data.
    {
      const bootstrap = buildProjectServices(dbPath);
      const created = await bootstrap.createProject.execute({
        projectId: "prj:m2-mig",
        title: "M1 legacy project",
        objective: "preserve-me",
        context: "m1-context",
        scope: "m1-scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: ACTOR,
        lpsVersionId: "lps:m2-mig-v1",
        idempotencyKey: "idem:m2-mig",
      });
      expect(created.ok).toBe(true);
      bootstrap.dispose();
      openServices.pop();
    }

    {
      const db = new DatabaseSync(dbPath);
      db.exec("DROP TABLE IF EXISTS oa_cycle_instances");
      db.prepare(
        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
      ).run(PRODUCT_SCHEMA_VERSION_M1);
      db.close();
    }

    const svc = buildProjectServices(dbPath);
    const version = svc.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);

    const tables = svc.store.db
      .prepare(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='oa_cycle_instances'`,
      )
      .get() as { name?: string } | undefined;
    expect(tables?.name).toBe("oa_cycle_instances");

    const project = await svc.getProject.execute({ projectId: "prj:m2-mig" });
    const lps = await svc.getCurrentLivingProjectState.execute({
      projectId: "prj:m2-mig",
    });
    expect(project.ok).toBe(true);
    expect(lps.ok).toBe(true);
    if (!project.ok || !lps.ok) return;
    expect(lps.livingProjectState.objective).toBe("preserve-me");
    expect(lps.livingProjectState.version).toBe(1);

    svc.dispose();
    openServices.pop();

    const svc2 = buildProjectServices(dbPath);
    const version2 = svc2.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version2.value).toBe(PRODUCT_SCHEMA_VERSION);
    const again = await svc2.getProject.execute({ projectId: "prj:m2-mig" });
    expect(again.ok).toBe(true);
  });

  it("A — unknown schema version fails closed", () => {
    const dbPath = tempDbPath("future.sqlite");
    seedM1Database(dbPath);
    const db = new DatabaseSync(dbPath);
    db.prepare(
      `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
    ).run("m99-9.9.9");
    db.close();

    expect(() => buildProjectServices(dbPath)).toThrow(
      /product_sqlite_unsupported_schema/,
    );
  });

  it("B/G — Standard cycle + LPS append atomic; stale LPS rolls back (no orphan)", async () => {
    const dbPath = tempDbPath("atomic.sqlite");
    const projects = buildProjectServices(dbPath);
    const created = await projects.createProject.execute({
      projectId: "prj:m2-atomic",
      title: "Atomic",
      objective: "obj",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m2-atomic-v1",
      idempotencyKey: "idem:m2-atomic",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const cycleSvc = createSqliteCycleServices({
      projectServices: projects,
      productStore: projects.store,
    });

    const ok = await cycleSvc.createCycle.execute({
      cycleInstanceId: "cyc:m2-std-1",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:m2-atomic",
      signals: {},
      createdBy: ACTOR,
      linkAsActiveCycle: true,
      expectedLpsVersion: 1,
      ckcResolutionRef: "ckc:m2-testhash-abc",
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    expect(ok.cycle.profile).toBe("Standard");
    expect(ok.cycle.status).toBe("acknowledged");

    const lps = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m2-atomic",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.version).toBe(2);
    expect(lps.livingProjectState.activeCycleInstanceId).toBe("cyc:m2-std-1");
    expect(lps.livingProjectState.ckcResolutionRef).toBe("ckc:m2-testhash-abc");

    const stale = await cycleSvc.createCycle.execute({
      cycleInstanceId: "cyc:m2-stale-1",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:m2-atomic",
      signals: {},
      createdBy: ACTOR,
      linkAsActiveCycle: true,
      expectedLpsVersion: 1,
      ckcResolutionRef: "ckc:m2-stale",
    });
    expect(stale.ok).toBe(false);
    if (stale.ok) return;
    expect(stale.error.detailCode).toBe("LPS_VERSION_CONFLICT");

    const orphan = await cycleSvc.cycles.findById("cyc:m2-stale-1");
    expect(orphan).toBeNull();

    const still = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m2-atomic",
    });
    expect(still.ok).toBe(true);
    if (!still.ok) return;
    expect(still.livingProjectState.version).toBe(2);
    expect(still.livingProjectState.activeCycleInstanceId).toBe("cyc:m2-std-1");
  });

  it("F — Critical with justification stays proposed; no HD/execution", async () => {
    const dbPath = tempDbPath("crit.sqlite");
    const projects = buildProjectServices(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m2-crit",
      title: "Crit",
      objective: "obj",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m2-crit-v1",
      idempotencyKey: "idem:m2-crit",
    });
    const cycleSvc = createSqliteCycleServices({
      projectServices: projects,
      productStore: projects.store,
    });
    const result = await cycleSvc.createCycle.execute({
      cycleInstanceId: "cyc:m2-crit-1",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:m2-crit",
      signals: { structuralChange: true },
      justification: "Structural LPS linkage requires Critical gate",
      createdBy: ACTOR,
      linkAsActiveCycle: true,
      expectedLpsVersion: 1,
      ckcResolutionRef: "ckc:m2-crit-ref",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.cycle.status).toBe("proposed");
    expect(result.cycle.profile).toBe("Critical");
    expect(result.qualification.isMorrisDecision).toBe(false);
  });

  it("G — forced cycle save failure leaves no LPS advance", async () => {
    const dbPath = tempDbPath("fail-cycle.sqlite");
    const projects = buildProjectServices(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m2-fail",
      title: "Fail",
      objective: "obj",
      context: "ctx",
      scope: "scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m2-fail-v1",
      idempotencyKey: "idem:m2-fail",
    });
    const cycleSvc = createSqliteCycleServices({
      projectServices: projects,
      productStore: projects.store,
    });
    projects.store.failNextSave = "cycle";
    const result = await cycleSvc.createCycle.execute({
      cycleInstanceId: "cyc:m2-fail-1",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:m2-fail",
      signals: {},
      createdBy: ACTOR,
      linkAsActiveCycle: true,
      expectedLpsVersion: 1,
      ckcResolutionRef: "ckc:m2-fail",
    });
    expect(result.ok).toBe(false);
    const found = await cycleSvc.cycles.findById("cyc:m2-fail-1");
    expect(found).toBeNull();
    const lps = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m2-fail",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.version).toBe(1);
  });

  it("R1 — nested reentrance shares transaction; concurrent independent waits and survives rollback", async () => {
    const dbPath = tempDbPath("tx-ownership.sqlite");
    const projects = buildProjectServices(dbPath);
    const store = projects.store;

    // Nested reentrance (same async chain) must not deadlock / double-BEGIN.
    await store.runInTransaction(async () => {
      await store.runInTransaction(async () => {
        store.db
          .prepare(
            `INSERT INTO oa_audit_events(event_type, occurred_at, project_id, correlation_id, payload_json)
             VALUES (?, ?, ?, ?, ?)`,
          )
          .run(
            "m2.tx.nested",
            "2026-08-13T12:00:00.000Z",
            "prj:m2-tx",
            "cor:nested",
            JSON.stringify({ kind: "nested" }),
          );
      });
    });
    const nestedRow = store.db
      .prepare(
        `SELECT COUNT(*) AS n FROM oa_audit_events WHERE correlation_id = ?`,
      )
      .get("cor:nested") as { n: number };
    expect(nestedRow.n).toBe(1);

    let releaseA!: () => void;
    const aGate = new Promise<void>((resolve) => {
      releaseA = resolve;
    });
    let aEntered = false;
    let bEntered = false;
    let bStartedAfterARelease = false;
    let aReleased = false;

    const aPromise = store.runInTransaction(async () => {
      aEntered = true;
      store.db
        .prepare(
          `INSERT INTO oa_audit_events(event_type, occurred_at, project_id, correlation_id, payload_json)
           VALUES (?, ?, ?, ?, ?)`,
        )
        .run(
          "m2.tx.a",
          "2026-08-13T12:00:01.000Z",
          "prj:m2-tx",
          "cor:tx-a",
          JSON.stringify({ kind: "A-should-rollback" }),
        );
      await aGate;
      throw new Error("forced_a_rollback");
    });

    // Deterministic wait until A is inside its transaction (not a timer).
    while (!aEntered) {
      await Promise.resolve();
    }

    const bPromise = store.runInTransaction(async () => {
      bEntered = true;
      bStartedAfterARelease = aReleased;
      store.db
        .prepare(
          `INSERT INTO oa_audit_events(event_type, occurred_at, project_id, correlation_id, payload_json)
           VALUES (?, ?, ?, ?, ?)`,
        )
        .run(
          "m2.tx.b",
          "2026-08-13T12:00:02.000Z",
          "prj:m2-tx",
          "cor:tx-b",
          JSON.stringify({ kind: "B-should-commit" }),
        );
    });

    // Flush microtasks so a wrongly nested B would already have set bEntered.
    await Promise.resolve();
    await Promise.resolve();
    expect(bEntered).toBe(false);

    aReleased = true;
    releaseA();

    await expect(aPromise).rejects.toThrow("forced_a_rollback");
    await bPromise;

    expect(bEntered).toBe(true);
    expect(bStartedAfterARelease).toBe(true);

    const aCount = store.db
      .prepare(
        `SELECT COUNT(*) AS n FROM oa_audit_events WHERE correlation_id = ?`,
      )
      .get("cor:tx-a") as { n: number };
    const bCount = store.db
      .prepare(
        `SELECT COUNT(*) AS n FROM oa_audit_events WHERE correlation_id = ?`,
      )
      .get("cor:tx-b") as { n: number };
    expect(aCount.n).toBe(0);
    expect(bCount.n).toBe(1);
  });
});

```

## Preuves
- Nested reentrance CreateCycle→Append LPS: tests B/G/F/G + assertion nested audit insert PASS
- Concurrent: B n’entre pas pendant A suspendue ; après rollback A, B commit ; A absente / B présente dans `oa_audit_events` PASS
- Targeted: m2ProductCycleDurability (6) · m2RestartProcessProof · m2CognitivePiloting.e2e PASS
- Full: typecheck PASS · lint PASS · test **1636 passed / 131 skipped / 0 failed** · build PASS
- (+1 test concurrent vs 1635 précédent)

## Non-drift
- tracked non-allowed: inchangés
- untracked non-allowed: SHA inchangés
- Roadmap frozen (non touchée)
- created files: none (dans ce micro-cycle)

## Git final
```
 M projects/sfia-studio/app/__tests__/oa/cycle/adversarialValidation.test.ts
 M projects/sfia-studio/app/__tests__/oa/project/m1RestartProcessProof.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/orchestrateTurn.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/runtimeApplicationService.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
 M projects/sfia-studio/app/features/project-assistant/f2/qualify.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
 M projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/types.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
?? .tmp-sfia-review-pre.txt
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/m2RestartProcessProof.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/m2RestartProcessWorker.ts
?? projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/
?? projects/sfia-studio/app/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort.ts
?? projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/liveProjectContext.ts

```
- staged: vide
- project commit/push/PR: none
- M2 remote: absente

## Architecture M2
inchangée (1 Product SQLite · Cycle/LPS/F2/CKC inchangés hors ownership UoW)

## Dettes M2
inchangées (conversation/proposal process-local · Trajectory/Epistemic Memory · DOC-DEBT-M1-01)

## Anti-claims
≠ M2 VALIDATED/ADOPTED/COMPLETE ON MAIN
≠ commit/push/PR
≠ M3
≠ HD durable
≠ Cursor REAL / Gate D
≠ runtime v3 ADOPTED

## Verdict
**M2 TRANSACTION CONCURRENCY CORRECTED — INDEPENDENT TRANSACTION SERIALIZATION PASS — NESTED REENTRANCE PASS — ROLLBACK ISOLATION PASS — MORRIS TEST-SCOPE REGULARIZATION RECORDED — M2 E2E / RESTART / FULL VALIDATION PASS — M2 IMPLEMENTED CANDIDATE — READY FOR MORRIS VALIDATION / COMMIT GATE**

## Instruction ChatGPT
Lire d’abord `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (nouveau tip), vérifier R1/R2, SHA R2, AsyncLocalStorage ownership, test concurrent, non-drift, validations, verdict, handoff remote.
