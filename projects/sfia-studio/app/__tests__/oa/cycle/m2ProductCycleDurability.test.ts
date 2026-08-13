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
