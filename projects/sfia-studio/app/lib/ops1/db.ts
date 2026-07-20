import { DatabaseSync } from "node:sqlite";
import { resolveOps1SqlitePath } from "./paths";
import { Ops1Error } from "./errors";

const SCHEMA_SQL = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS cycle_sessions (
  session_id TEXT PRIMARY KEY NOT NULL,
  project_key TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('OPEN', 'CLOSED')),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  parent_session_id TEXT,
  fixture_mode INTEGER NOT NULL CHECK (fixture_mode IN (0, 1))
);

CREATE TABLE IF NOT EXISTS journal_turns (
  turn_id TEXT PRIMARY KEY NOT NULL,
  session_id TEXT NOT NULL,
  sequence INTEGER NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture')),
  content TEXT NOT NULL,
  fixture INTEGER NOT NULL CHECK (fixture IN (0, 1)),
  created_at TEXT NOT NULL,
  UNIQUE (session_id, sequence),
  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
);

CREATE TABLE IF NOT EXISTS session_events (
  event_id TEXT PRIMARY KEY NOT NULL,
  session_id TEXT,
  type TEXT NOT NULL,
  created_at TEXT NOT NULL,
  detail TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_turns_session_seq
  ON journal_turns(session_id, sequence);
`;

let singleton: DatabaseSync | null = null;
let singletonPath: string | null = null;

export function openOps1Db(dbPath = resolveOps1SqlitePath()): DatabaseSync {
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
    db.exec("PRAGMA foreign_keys = ON;");
    db.exec(SCHEMA_SQL);
    const integrity = db.prepare("PRAGMA integrity_check").get() as
      | Record<string, string>
      | undefined;
    const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
    if (raw !== "ok") {
      throw new Ops1Error("PERSISTENCE", "Intégrité SQLite invalide.");
    }
    singleton = db;
    singletonPath = dbPath;
    return db;
  } catch (error) {
    if (error instanceof Ops1Error) throw error;
    throw new Ops1Error(
      "PERSISTENCE",
      "Impossible d’initialiser la base locale OPS1.",
      error,
    );
  }
}

/** Test helper — force close and clear singleton. */
export function resetOps1DbForTests(): void {
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

export function nowIsoWithOffset(): string {
  const d = new Date();
  const pad = (n: number, w = 2) => String(n).padStart(w, "0");
  const offsetMin = -d.getTimezoneOffset();
  const sign = offsetMin >= 0 ? "+" : "-";
  const abs = Math.abs(offsetMin);
  const oh = pad(Math.floor(abs / 60));
  const om = pad(abs % 60);
  return (
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}` +
    `T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}` +
    `.${pad(d.getMilliseconds(), 3)}${sign}${oh}:${om}`
  );
}
