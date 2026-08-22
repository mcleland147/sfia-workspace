import { DatabaseSync } from "node:sqlite";

export const PRODUCT_SCHEMA_VERSION_M1 = "m1-0.1.0" as const;
export const PRODUCT_SCHEMA_VERSION_M2 = "m2-0.1.0" as const;
export const PRODUCT_SCHEMA_VERSION_M3 = "m3-0.1.0" as const;
export const PRODUCT_SCHEMA_VERSION_M5 = "m5-0.1.0" as const;
export const PRODUCT_SCHEMA_VERSION_M6 = "m6-0.1.0" as const;
export const PRODUCT_SCHEMA_VERSION = PRODUCT_SCHEMA_VERSION_M6;

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

const M3_DECISION_CONTRACT_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS oa_human_decisions (
  decision_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  cycle_instance_id TEXT,
  subject TEXT NOT NULL,
  status TEXT NOT NULL,
  authority TEXT NOT NULL,
  version INTEGER NOT NULL,
  effective_at TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
);

CREATE INDEX IF NOT EXISTS idx_oa_human_decisions_project
  ON oa_human_decisions(project_id, effective_at);
CREATE INDEX IF NOT EXISTS idx_oa_human_decisions_subject
  ON oa_human_decisions(project_id, subject, status);

CREATE TABLE IF NOT EXISTS oa_execution_contracts (
  execution_contract_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  cycle_instance_id TEXT,
  status TEXT NOT NULL,
  idempotency_key TEXT NOT NULL UNIQUE,
  semantic_fingerprint TEXT NOT NULL,
  version INTEGER NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
);

CREATE INDEX IF NOT EXISTS idx_oa_execution_contracts_project
  ON oa_execution_contracts(project_id, created_at);
CREATE INDEX IF NOT EXISTS idx_oa_execution_contracts_idempotency
  ON oa_execution_contracts(idempotency_key);
`;

const M5_ATTEMPT_EVIDENCE_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS oa_execution_attempts (
  attempt_id TEXT PRIMARY KEY NOT NULL,
  execution_contract_id TEXT NOT NULL,
  status TEXT NOT NULL,
  idempotency_key TEXT NOT NULL UNIQUE,
  version INTEGER NOT NULL,
  result_recording_count INTEGER NOT NULL DEFAULT 0,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_oa_execution_attempts_contract
  ON oa_execution_attempts(execution_contract_id, attempt_id);

CREATE TABLE IF NOT EXISTS oa_execution_attempt_active (
  execution_contract_id TEXT PRIMARY KEY NOT NULL,
  attempt_id TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS oa_execution_attempt_result_budget (
  attempt_id TEXT PRIMARY KEY NOT NULL,
  count INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS oa_evidence (
  evidence_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT,
  status TEXT NOT NULL,
  idempotency_key TEXT UNIQUE,
  version INTEGER NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_oa_evidence_project
  ON oa_evidence(project_id, created_at);

CREATE TABLE IF NOT EXISTS oa_evidence_idempotency (
  idempotency_key TEXT PRIMARY KEY NOT NULL,
  evidence_id TEXT NOT NULL,
  fingerprint TEXT NOT NULL,
  operation TEXT NOT NULL,
  FOREIGN KEY (evidence_id) REFERENCES oa_evidence(evidence_id)
);

CREATE TABLE IF NOT EXISTS oa_review_bundles (
  review_bundle_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  status TEXT NOT NULL,
  idempotency_key TEXT UNIQUE,
  version INTEGER NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_oa_review_bundles_project
  ON oa_review_bundles(project_id, created_at);

CREATE TABLE IF NOT EXISTS oa_review_bundle_idempotency (
  idempotency_key TEXT PRIMARY KEY NOT NULL,
  review_bundle_id TEXT NOT NULL,
  fingerprint TEXT NOT NULL,
  operation TEXT NOT NULL,
  successor_id TEXT,
  FOREIGN KEY (review_bundle_id) REFERENCES oa_review_bundles(review_bundle_id)
);
`;

const M6_TRAJECTORY_CONFIRMATION_EPISTEMIC_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS oa_project_trajectories (
  trajectory_id TEXT NOT NULL,
  project_id TEXT NOT NULL,
  version INTEGER NOT NULL,
  status TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (trajectory_id, version),
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id),
  UNIQUE (project_id, version)
);

CREATE INDEX IF NOT EXISTS idx_oa_project_trajectories_project
  ON oa_project_trajectories(project_id, version);

CREATE TABLE IF NOT EXISTS oa_project_trajectory_current (
  project_id TEXT PRIMARY KEY NOT NULL,
  trajectory_id TEXT NOT NULL,
  version INTEGER NOT NULL,
  occ_token TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
);

CREATE TABLE IF NOT EXISTS oa_confirmations (
  confirmation_id TEXT PRIMARY KEY NOT NULL,
  idempotency_key TEXT NOT NULL UNIQUE,
  project_id TEXT,
  status TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_oa_confirmations_project
  ON oa_confirmations(project_id, status);

CREATE TABLE IF NOT EXISTS oa_epistemic_items (
  epistemic_item_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  type TEXT NOT NULL,
  status TEXT NOT NULL,
  materialized INTEGER NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES oa_projects(project_id)
);

CREATE INDEX IF NOT EXISTS idx_oa_epistemic_items_project
  ON oa_epistemic_items(project_id, type, status, materialized);
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

function applyM2(db: DatabaseSync): void {
  db.exec(M2_CYCLE_SCHEMA_SQL);
}

function applyM3(db: DatabaseSync): void {
  db.exec(M3_DECISION_CONTRACT_SCHEMA_SQL);
}

function applyM5(db: DatabaseSync): void {
  db.exec(M5_ATTEMPT_EVIDENCE_SCHEMA_SQL);
}

function applyM6(db: DatabaseSync): void {
  db.exec(M6_TRAJECTORY_CONFIRMATION_EPISTEMIC_SCHEMA_SQL);
}

/**
 * Open Product SQLite with additive M1→M2→M3→M5→M6 migration.
 * Fail closed on unknown/future schema versions.
 */
export function openProductSqlite(dbPath: string): DatabaseSync {
  const db = new DatabaseSync(dbPath);
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec(BASE_SCHEMA_SQL);

  const version = readSchemaVersion(db);
  if (version === null || version === PRODUCT_SCHEMA_VERSION_M1) {
    applyM2(db);
    applyM3(db);
    applyM5(db);
    applyM6(db);
    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
  } else if (version === PRODUCT_SCHEMA_VERSION_M2) {
    applyM3(db);
    applyM5(db);
    applyM6(db);
    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
  } else if (version === PRODUCT_SCHEMA_VERSION_M3) {
    applyM5(db);
    applyM6(db);
    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
  } else if (version === PRODUCT_SCHEMA_VERSION_M5) {
    applyM6(db);
    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
  } else if (version === PRODUCT_SCHEMA_VERSION) {
    applyM2(db);
    applyM3(db);
    applyM5(db);
    applyM6(db);
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
