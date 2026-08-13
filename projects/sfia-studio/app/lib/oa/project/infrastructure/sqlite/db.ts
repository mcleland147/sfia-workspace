import { DatabaseSync } from "node:sqlite";

export const PRODUCT_SCHEMA_VERSION_M1 = "m1-0.1.0" as const;
export const PRODUCT_SCHEMA_VERSION = "m2-0.1.0" as const;

const BASE_SCHEMA_SQL = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS schema_meta (
  key TEXT PRIMARY KEY NOT NULL,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS oa_projects (
  project_id TEXT PRIMARY KEY NOT NULL,
  status TEXT NOT NULL,
  current_lps_version_id TEXT,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT
);

CREATE TABLE IF NOT EXISTS oa_lps (
  lps_version_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  version INTEGER NOT NULL,
  status TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
  UNIQUE (project_id, version)
);

CREATE TABLE IF NOT EXISTS oa_lps_current (
  project_id TEXT PRIMARY KEY NOT NULL,
  lps_version_id TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
  FOREIGN KEY (lps_version_id) REFERENCES oa_lps(lps_version_id)
);

CREATE TABLE IF NOT EXISTS oa_idempotency (
  idempotency_key TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
);

CREATE TABLE IF NOT EXISTS oa_audit_events (
  row_id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_type TEXT NOT NULL,
  occurred_at TEXT NOT NULL,
  project_id TEXT,
  correlation_id TEXT,
  payload_json TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_oa_lps_project_version
  ON oa_lps(project_id, version);
CREATE INDEX IF NOT EXISTS idx_oa_audit_project
  ON oa_audit_events(project_id, occurred_at);
`;

const M2_CYCLE_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS oa_cycle_instances (
  cycle_instance_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  cycle_type_id TEXT NOT NULL,
  profile TEXT NOT NULL,
  status TEXT NOT NULL,
  created_at TEXT NOT NULL,
  acknowledged_at TEXT,
  closed_at TEXT,
  payload_json TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
);

CREATE INDEX IF NOT EXISTS idx_oa_cycle_project
  ON oa_cycle_instances(project_id, created_at);
CREATE INDEX IF NOT EXISTS idx_oa_audit_cycle
  ON oa_audit_events(event_type, occurred_at);
`;

function readSchemaVersion(db: DatabaseSync): string | null {
  const row = db
    .prepare("SELECT value FROM schema_meta WHERE key = ?")
    .get("schema_version") as { value?: string } | undefined;
  return row?.value ?? null;
}

function setSchemaVersion(db: DatabaseSync, version: string): void {
  db.prepare(
    `INSERT INTO schema_meta(key, value) VALUES (?, ?)
     ON CONFLICT(key) DO UPDATE SET value = excluded.value`,
  ).run("schema_version", version);
}

function assertIntegrity(db: DatabaseSync): void {
  const integrity = db.prepare("PRAGMA integrity_check").get() as
    | Record<string, string>
    | undefined;
  const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
  if (raw !== "ok") {
    try {
      db.close();
    } catch {
      /* ignore */
    }
    throw new Error("product_sqlite_integrity_failed");
  }
}

/**
 * Open Product SQLite with additive M1→M2 migration.
 * Fail closed on unknown/future schema versions.
 */
export function openProductSqlite(dbPath: string): DatabaseSync {
  const db = new DatabaseSync(dbPath);
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec(BASE_SCHEMA_SQL);

  const version = readSchemaVersion(db);
  if (version === null) {
    db.exec(M2_CYCLE_SCHEMA_SQL);
    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
  } else if (version === PRODUCT_SCHEMA_VERSION_M1) {
    db.exec(M2_CYCLE_SCHEMA_SQL);
    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
  } else if (version === PRODUCT_SCHEMA_VERSION) {
    db.exec(M2_CYCLE_SCHEMA_SQL);
  } else {
    try {
      db.close();
    } catch {
      /* ignore */
    }
    throw new Error(`product_sqlite_unsupported_schema:${version}`);
  }

  assertIntegrity(db);
  return db;
}
