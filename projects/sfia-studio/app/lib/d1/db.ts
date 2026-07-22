import { DatabaseSync } from "node:sqlite";
import { resolveD1SqlitePath } from "./paths";
import { D1Error } from "./errors";

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

CREATE INDEX IF NOT EXISTS idx_d1_projects_workspace
  ON d1_projects(workspace_id, state);
CREATE INDEX IF NOT EXISTS idx_d1_audit_project
  ON d1_audit_events(project_id, occurred_at);
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

export function openD1Db(dbPath = resolveD1SqlitePath()): DatabaseSync {
  if (singleton && singletonPath === dbPath) {
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
    const db = new DatabaseSync(dbPath);
    migrate(db);
    singleton = db;
    singletonPath = dbPath;
    return db;
  } catch (error) {
    if (error instanceof D1Error) throw error;
    throw new D1Error("PERSISTENCE", "Impossible d’ouvrir SQLite D1.", error);
  }
}

export function resetD1DbForTests(): void {
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

export function nowIso(): string {
  return new Date().toISOString();
}
