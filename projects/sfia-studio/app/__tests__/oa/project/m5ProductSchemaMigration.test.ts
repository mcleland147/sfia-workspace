/**
 * M5 — Product SQLite migration M3→M5 (and M2→M5 ladder).
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
  PRODUCT_SCHEMA_VERSION_M2,
  PRODUCT_SCHEMA_VERSION_M3,
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
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-mig-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function buildProjectServices(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-15T08:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

function tableExists(
  db: DatabaseSync,
  name: string,
): boolean {
  const row = db
    .prepare(
      `SELECT name FROM sqlite_master WHERE type='table' AND name=?`,
    )
    .get(name) as { name?: string } | undefined;
  return row?.name === name;
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

describe("M5 Product SQLite schema migration", () => {
  it("migrates M3 DB additively to m5, preserves Project/LPS/Cycle/Decision tables", async () => {
    const dbPath = tempDbPath("m3-legacy.sqlite");
    {
      const bootstrap = buildProjectServices(dbPath);
      const created = await bootstrap.createProject.execute({
        projectId: "prj:m5-mig",
        title: "M3 legacy project",
        objective: "preserve-m3",
        context: "m3-context",
        scope: "m3-scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: ACTOR,
        lpsVersionId: "lps:m5-mig-v1",
        idempotencyKey: "idem:m5-mig",
      });
      expect(created.ok).toBe(true);
      const cycles = createSqliteCycleServices({
        projectServices: bootstrap,
        productStore: bootstrap.store,
      });
      const cycle = await cycles.createCycle.execute({
        cycleInstanceId: "cyc:m5-mig-1",
        cycleTypeId: "cyc:delivery",
        projectId: "prj:m5-mig",
        signals: {},
        createdBy: ACTOR,
      });
      expect(cycle.ok).toBe(true);
      bootstrap.dispose();
      openServices.pop();
    }

    {
      const db = new DatabaseSync(dbPath);
      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_result_budget");
      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_active");
      db.exec("DROP TABLE IF EXISTS oa_execution_attempts");
      db.exec("DROP TABLE IF EXISTS oa_evidence_idempotency");
      db.exec("DROP TABLE IF EXISTS oa_evidence");
      db.exec("DROP TABLE IF EXISTS oa_review_bundle_idempotency");
      db.exec("DROP TABLE IF EXISTS oa_review_bundles");
      db.prepare(
        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
      ).run(PRODUCT_SCHEMA_VERSION_M3);
      db.close();
    }

    const svc = buildProjectServices(dbPath);
    const version = svc.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
    expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");

    expect(tableExists(svc.store.db, "oa_human_decisions")).toBe(true);
    expect(tableExists(svc.store.db, "oa_execution_contracts")).toBe(true);
    expect(tableExists(svc.store.db, "oa_execution_attempts")).toBe(true);
    expect(tableExists(svc.store.db, "oa_evidence")).toBe(true);
    expect(tableExists(svc.store.db, "oa_review_bundles")).toBe(true);
    expect(
      tableExists(svc.store.db, "oa_execution_attempt_result_budget"),
    ).toBe(true);

    const project = await svc.getProject.execute({ projectId: "prj:m5-mig" });
    expect(project.ok).toBe(true);
    const cycles = createSqliteCycleServices({
      projectServices: svc,
      productStore: svc.store,
    });
    const cycle = await cycles.cycles.findById("cyc:m5-mig-1");
    expect(cycle?.cycleInstanceId).toBe("cyc:m5-mig-1");
  });

  it("migrates M2 DB through M3+M5 ladder", async () => {
    const dbPath = tempDbPath("m2-legacy.sqlite");
    {
      const bootstrap = buildProjectServices(dbPath);
      bootstrap.dispose();
      openServices.pop();
    }
    {
      const db = new DatabaseSync(dbPath);
      db.exec("DROP TABLE IF EXISTS oa_human_decisions");
      db.exec("DROP TABLE IF EXISTS oa_execution_contracts");
      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_result_budget");
      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_active");
      db.exec("DROP TABLE IF EXISTS oa_execution_attempts");
      db.exec("DROP TABLE IF EXISTS oa_evidence_idempotency");
      db.exec("DROP TABLE IF EXISTS oa_evidence");
      db.exec("DROP TABLE IF EXISTS oa_review_bundle_idempotency");
      db.exec("DROP TABLE IF EXISTS oa_review_bundles");
      db.prepare(
        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
      ).run(PRODUCT_SCHEMA_VERSION_M2);
      db.close();
    }
    const svc = buildProjectServices(dbPath);
    const version = svc.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
    expect(PRODUCT_SCHEMA_VERSION).toBe("m8-0.1.0");
    expect(tableExists(svc.store.db, "oa_execution_attempts")).toBe(true);
  });

  it("m5 reopen is idempotent", () => {
    const dbPath = tempDbPath("m5-reopen.sqlite");
    const a = buildProjectServices(dbPath);
    a.dispose();
    openServices.pop();
    const b = buildProjectServices(dbPath);
    const version = b.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
  });

  it("fails closed on unknown schema version", () => {
    const dbPath = tempDbPath("unknown.sqlite");
    const db = new DatabaseSync(dbPath);
    db.exec(`
CREATE TABLE schema_meta (key TEXT PRIMARY KEY NOT NULL, value TEXT NOT NULL);
INSERT INTO schema_meta(key, value) VALUES ('schema_version', 'm99-future');
`);
    db.close();
    expect(() => buildProjectServices(dbPath)).toThrow(
      /product_sqlite_unsupported_schema/,
    );
  });
});
