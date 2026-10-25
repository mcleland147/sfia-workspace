import { DatabaseSync } from "node:sqlite";
import { resolveD1SqlitePath } from "./paths";
import { D1Error } from "./errors";
import { assertD1AccessAllowedWhenLocalOaExclusive } from "./localOaExclusiveMode";
import { wrapD1DatabaseSyncForExclusiveGate } from "./wrapD1DatabaseSyncForExclusiveGate";

const SCHEMA_SQL = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS d1_projects (
  project_id TEXT PRIMARY KEY NOT NULL,
  workspace_id TEXT NOT NULL,
  name TEXT NOT NULL,
  objective TEXT NOT NULL,
  initial_context_summary TEXT,
  method_mode TEXT CHECK (
    method_mode IS NULL OR method_mode IN ('SFIA_V2_6', 'TRANSITION', 'V3_CANDIDATE')
  ),
  state TEXT NOT NULL CHECK (state IN ('DRAFT', 'ACTIVE')),
  owner_actor_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  version INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS d1_assignments (
  principal_id TEXT NOT NULL,
  project_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('project_owner', 'decision_maker')),
  created_at TEXT NOT NULL,
  PRIMARY KEY (principal_id, project_id, role),
  FOREIGN KEY (project_id) REFERENCES d1_projects(project_id)
);

CREATE TABLE IF NOT EXISTS d1_audit_events (
  event_id TEXT PRIMARY KEY NOT NULL,
  event_type TEXT NOT NULL CHECK (
    event_type IN ('PROJECT_CREATED', 'PROJECT_MODE_SELECTED', 'PROJECT_ACTIVATED')
  ),
  occurred_at TEXT NOT NULL,
  actor_id TEXT NOT NULL,
  correlation_id TEXT NOT NULL,
  project_id TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES d1_projects(project_id)
);

CREATE TABLE IF NOT EXISTS d1_idempotency_keys (
  idempotency_key TEXT PRIMARY KEY NOT NULL,
  command TEXT NOT NULL,
  response_json TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS d1_atomic_audit (
  row_id INTEGER PRIMARY KEY AUTOINCREMENT,
  op_id TEXT NOT NULL,
  idempotency_key TEXT NOT NULL,
  phase TEXT NOT NULL CHECK (
    phase IN (
      'prepare',
      'apply_project',
      'apply_cycle',
      'verify',
      'commit',
      'rollback'
    )
  ),
  outcome TEXT NOT NULL CHECK (
    outcome IN (
      'IN_PROGRESS',
      'COMMITTED',
      'ROLLED_BACK',
      'FAILED',
      'CONFLICT'
    )
  ),
  correlation_id TEXT NOT NULL,
  project_ref TEXT,
  cycle_ref TEXT,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  schema_version TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_d1_projects_workspace
  ON d1_projects(workspace_id, state);
CREATE INDEX IF NOT EXISTS idx_d1_audit_project
  ON d1_audit_events(project_id, occurred_at);
CREATE INDEX IF NOT EXISTS idx_d1_atomic_audit_op
  ON d1_atomic_audit(op_id, created_at);
CREATE INDEX IF NOT EXISTS idx_d1_atomic_audit_idem
  ON d1_atomic_audit(idempotency_key, created_at);
`;
let singleton: DatabaseSync | null = null;
let singletonPath: string | null = null;

function migrate(db: DatabaseSync): void {
  db.exec(SCHEMA_SQL);
  const integrity = db.prepare("PRAGMA integrity_check").get() as
    | Record<string, string>
    | undefined;
  const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
  if (raw !== "ok") {
    throw new D1Error("PERSISTENCE", "Intégrité SQLite D1 invalide.");
  }
}

/**
 * Open D1 SQLite. When local OA-exclusive mode is active, fails closed
 * BEFORE path resolve / file open / schema DDL (L2-D2 freeze).
 */
export function openD1Db(dbPath?: string): DatabaseSync {
  assertD1AccessAllowedWhenLocalOaExclusive();
  const resolved = dbPath ?? resolveD1SqlitePath();
  if (singleton && singletonPath === resolved) {
    return singleton;
  }
  if (singleton) {
    try {
      singleton.close();
    } catch {
      /* ignore */
    }
    singleton = null;
    singletonPath = null;
  }
  try {
    const db = wrapD1DatabaseSyncForExclusiveGate(new DatabaseSync(resolved));
    migrate(db);
    singleton = db;
    singletonPath = resolved;
    return db;
  } catch (error) {
    if (error instanceof D1Error) throw error;
    throw new D1Error("PERSISTENCE", "Impossible d’ouvrir SQLite D1.", error);
  }
}

/**
 * Close the process D1 singleton before / during local OA-exclusive cutover.
 * Prevents reuse of a pre-opened applicative handle after exclusive ON.
 * Does not track DatabaseSync instances constructed outside openD1Db.
 */
export function sealD1DbSingletonForLocalOaExclusiveCutover(): void {
  if (singleton) {
    try {
      singleton.close();
    } catch {
      /* ignore */
    }
  }
  singleton = null;
  singletonPath = null;
}

export function resetD1DbForTests(): void {
  sealD1DbSingletonForLocalOaExclusiveCutover();
}

export function nowIso(): string {
  return new Date().toISOString();
}
