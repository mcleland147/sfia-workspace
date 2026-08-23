/**
 * M6 — Product SQLite migration M5→M6.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  DEFAULT_PRODUCT_DOCTRINE_PIN,
} from "@/lib/oa/doctrine";
import {
  PRODUCT_SCHEMA_VERSION,
  PRODUCT_SCHEMA_VERSION_M5,
  PRODUCT_SCHEMA_VERSION_M6,
  createTestSqliteProductProjectServices,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";

const APP_ROOT = path.resolve(__dirname, "../../..");
const PRODUCT_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m6-mig-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function buildProjectServices(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: PRODUCT_ROOT,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-22T12:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

function tableExists(db: DatabaseSync, name: string): boolean {
  const row = db
    .prepare(`SELECT name FROM sqlite_master WHERE type='table' AND name=?`)
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

describe("M6 Product SQLite schema migration", () => {
  it("migrates M5 DB additively through M6 to current m7", async () => {
    const dbPath = tempDbPath("m5-legacy.sqlite");
    {
      const bootstrap = buildProjectServices(dbPath);
      await bootstrap.createProject.execute({
        projectId: "prj:m6-mig",
        title: "M5 legacy",
        objective: "preserve",
        context: "ctx",
        scope: "scope",
        doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
        createdBy: {
          actorId: "actor:morris",
          role: "project_owner",
          displayName: "Morris",
          authorityLevel: "N3",
        },
        lpsVersionId: "lps:m6-mig-v1",
        idempotencyKey: "idem:m6-mig",
      });
      bootstrap.dispose();
      openServices.pop();
    }

    {
      const db = new DatabaseSync(dbPath);
      db.exec("DROP TABLE IF EXISTS oa_epistemic_items");
      db.exec("DROP TABLE IF EXISTS oa_confirmations");
      db.exec("DROP TABLE IF EXISTS oa_project_trajectory_current");
      db.exec("DROP TABLE IF EXISTS oa_project_trajectories");
      db.prepare(
        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
      ).run(PRODUCT_SCHEMA_VERSION_M5);
      db.close();
    }

    const svc = buildProjectServices(dbPath);
    const version = svc.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
    expect(PRODUCT_SCHEMA_VERSION_M6).toBe("m6-0.1.0");
    expect(PRODUCT_SCHEMA_VERSION).toBe("m7-0.1.0");
    expect(tableExists(svc.store.db, "oa_project_trajectories")).toBe(true);
    expect(tableExists(svc.store.db, "oa_project_trajectory_current")).toBe(
      true,
    );
    expect(tableExists(svc.store.db, "oa_confirmations")).toBe(true);
    expect(tableExists(svc.store.db, "oa_epistemic_items")).toBe(true);

    const project = await svc.getProject.execute({ projectId: "prj:m6-mig" });
    expect(project.ok).toBe(true);
  });

  it("migrates M6 DB additively to m7 and remains idempotent on reopen", async () => {
    const dbPath = tempDbPath("m6-legacy.sqlite");
    {
      const bootstrap = buildProjectServices(dbPath);
      await bootstrap.createProject.execute({
        projectId: "prj:m6-to-m7",
        title: "M6 legacy",
        objective: "preserve-m6",
        context: "ctx-m6",
        scope: "scope-m6",
        doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
        createdBy: {
          actorId: "actor:morris",
          role: "project_owner",
          displayName: "Morris",
          authorityLevel: "N3",
        },
        lpsVersionId: "lps:m6-to-m7-v1",
        idempotencyKey: "idem:m6-to-m7",
      });
      bootstrap.dispose();
      openServices.pop();
    }

    {
      const db = new DatabaseSync(dbPath);
      db.exec("DROP TABLE IF EXISTS oa_ec_inspection_attestations");
      db.exec("DROP TABLE IF EXISTS oa_authority_verification_receipts");
      db.prepare(
        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
      ).run(PRODUCT_SCHEMA_VERSION_M6);
      db.close();
    }

    const svc = buildProjectServices(dbPath);
    const version = svc.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
    expect(PRODUCT_SCHEMA_VERSION).toBe("m7-0.1.0");
    expect(tableExists(svc.store.db, "oa_ec_inspection_attestations")).toBe(
      true,
    );
    expect(
      tableExists(svc.store.db, "oa_authority_verification_receipts"),
    ).toBe(true);
    expect(tableExists(svc.store.db, "oa_project_trajectories")).toBe(true);

    const project = await svc.getProject.execute({ projectId: "prj:m6-to-m7" });
    expect(project.ok).toBe(true);
    if (project.ok) {
      expect(project.project.title).toBe("M6 legacy");
    }

    svc.dispose();
    openServices.pop();

    const reopened = buildProjectServices(dbPath);
    const reopenedVersion = reopened.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(reopenedVersion.value).toBe("m7-0.1.0");
    expect(
      tableExists(reopened.store.db, "oa_ec_inspection_attestations"),
    ).toBe(true);
    expect(
      tableExists(reopened.store.db, "oa_authority_verification_receipts"),
    ).toBe(true);
    const preserved = await reopened.getProject.execute({
      projectId: "prj:m6-to-m7",
    });
    expect(preserved.ok).toBe(true);
    if (preserved.ok) {
      expect(preserved.project.title).toBe("M6 legacy");
    }
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
