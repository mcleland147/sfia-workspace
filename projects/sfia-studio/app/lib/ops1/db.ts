import { DatabaseSync } from "node:sqlite";
import { resolveOps1SqlitePath } from "./paths";
import { Ops1Error } from "./errors";
import { LEGACY_SESSION_MODE_AMBIGUOUS } from "./types";

const SCHEMA_SQL = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS cycle_sessions (
  session_id TEXT PRIMARY KEY NOT NULL,
  project_key TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('OPEN', 'CLOSED')),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  parent_session_id TEXT,
  fixture_mode INTEGER NOT NULL CHECK (fixture_mode IN (0, 1)),
  conversation_mode TEXT NOT NULL DEFAULT 'fixture'
    CHECK (conversation_mode IN ('fixture', 'live'))
);

CREATE TABLE IF NOT EXISTS journal_turns (
  turn_id TEXT PRIMARY KEY NOT NULL,
  session_id TEXT NOT NULL,
  sequence INTEGER NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture', 'assistant_live')),
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

CREATE TABLE IF NOT EXISTS conversation_attempts (
  attempt_id TEXT PRIMARY KEY NOT NULL,
  session_id TEXT NOT NULL,
  user_turn_id TEXT,
  assistant_turn_id TEXT,
  provider TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('started', 'succeeded', 'failed')),
  provider_response_id TEXT,
  model TEXT,
  input_tokens INTEGER,
  output_tokens INTEGER,
  total_tokens INTEGER,
  request_started_at TEXT NOT NULL,
  request_completed_at TEXT,
  error_code TEXT,
  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
);

CREATE INDEX IF NOT EXISTS idx_turns_session_seq
  ON journal_turns(session_id, sequence);

CREATE INDEX IF NOT EXISTS idx_attempts_session
  ON conversation_attempts(session_id, request_started_at);

CREATE TABLE IF NOT EXISTS session_qualifications (
  session_id TEXT PRIMARY KEY NOT NULL,
  qualification TEXT NOT NULL
    CHECK (qualification IN ('ACTION_REQUIRED', 'ACTION_NOT_REQUIRED')),
  updated_at TEXT NOT NULL,
  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
);

CREATE TABLE IF NOT EXISTS action_candidates (
  action_candidate_id TEXT PRIMARY KEY NOT NULL,
  session_id TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN (
    'PROPOSED', 'UNDER_REVIEW', 'APPROVED', 'REJECTED',
    'CHANGES_REQUESTED', 'ABANDONED', 'NOT_REQUIRED'
  )),
  title TEXT NOT NULL,
  objective TEXT NOT NULL,
  scope_summary TEXT NOT NULL,
  risk_summary TEXT NOT NULL,
  version INTEGER NOT NULL CHECK (version >= 1),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
);

CREATE TABLE IF NOT EXISTS gate_decisions (
  gate_decision_id TEXT PRIMARY KEY NOT NULL,
  session_id TEXT NOT NULL,
  action_candidate_id TEXT NOT NULL,
  action_version INTEGER NOT NULL CHECK (action_version >= 1),
  kind TEXT NOT NULL CHECK (kind IN ('GO', 'NO_GO', 'CORRIGER', 'ABANDONNER')),
  motif TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id),
  FOREIGN KEY (action_candidate_id) REFERENCES action_candidates(action_candidate_id)
);

CREATE INDEX IF NOT EXISTS idx_actions_session
  ON action_candidates(session_id, updated_at);

CREATE INDEX IF NOT EXISTS idx_gates_action
  ON gate_decisions(action_candidate_id, created_at);

CREATE TABLE IF NOT EXISTS allowlist_evaluations (
  evaluation_id TEXT PRIMARY KEY NOT NULL,
  session_id TEXT NOT NULL,
  action_candidate_id TEXT NOT NULL,
  action_version INTEGER NOT NULL CHECK (action_version >= 1),
  status TEXT NOT NULL CHECK (status IN (
    'VALID', 'INVALID', 'REQUIRES_CORRECTION'
  )),
  ui_status_label TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  evaluated_at TEXT NOT NULL,
  superseded_at TEXT,
  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id),
  FOREIGN KEY (action_candidate_id) REFERENCES action_candidates(action_candidate_id)
);

CREATE INDEX IF NOT EXISTS idx_allowlist_action_version
  ON allowlist_evaluations(action_candidate_id, action_version, evaluated_at);

CREATE TABLE IF NOT EXISTS execution_contracts (
  contract_id TEXT PRIMARY KEY NOT NULL,
  session_id TEXT NOT NULL,
  action_candidate_id TEXT NOT NULL,
  action_version INTEGER NOT NULL CHECK (action_version >= 1),
  allowlist_evaluation_id TEXT NOT NULL,
  contract_hash TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN (
    'DRAFT', 'READY_FOR_GATE', 'APPROVED', 'SUPERSEDED', 'INVALID'
  )),
  adapter_mode TEXT NOT NULL CHECK (adapter_mode IN ('fixture', 'real')),
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  superseded_at TEXT,
  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id),
  FOREIGN KEY (action_candidate_id) REFERENCES action_candidates(action_candidate_id)
);

CREATE INDEX IF NOT EXISTS idx_exec_contracts_action
  ON execution_contracts(action_candidate_id, action_version, created_at);

CREATE TABLE IF NOT EXISTS execution_gates (
  execution_gate_id TEXT PRIMARY KEY NOT NULL,
  contract_id TEXT NOT NULL,
  contract_hash TEXT NOT NULL,
  session_id TEXT NOT NULL,
  action_candidate_id TEXT NOT NULL,
  action_version INTEGER NOT NULL CHECK (action_version >= 1),
  base_head_sha TEXT NOT NULL,
  decided_by TEXT NOT NULL CHECK (decided_by = 'Morris'),
  decided_at TEXT NOT NULL,
  superseded_at TEXT,
  FOREIGN KEY (contract_id) REFERENCES execution_contracts(contract_id),
  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
);

CREATE INDEX IF NOT EXISTS idx_exec_gates_contract
  ON execution_gates(contract_id, decided_at);

CREATE TABLE IF NOT EXISTS execution_attempts (
  execution_attempt_id TEXT PRIMARY KEY NOT NULL,
  contract_id TEXT NOT NULL,
  contract_hash TEXT NOT NULL,
  session_id TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN (
    'PREPARING', 'REVALIDATING', 'RUNNING', 'SUCCEEDED',
    'FAILED', 'REFUSED', 'STOPPED', 'TIMED_OUT'
  )),
  worktree_path TEXT,
  local_branch_name TEXT,
  adapter_mode TEXT NOT NULL CHECK (adapter_mode IN ('fixture', 'real')),
  started_at TEXT NOT NULL,
  completed_at TEXT,
  FOREIGN KEY (contract_id) REFERENCES execution_contracts(contract_id),
  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
);

CREATE INDEX IF NOT EXISTS idx_exec_attempts_hash
  ON execution_attempts(contract_hash, status, started_at);

CREATE TABLE IF NOT EXISTS execution_results (
  result_id TEXT PRIMARY KEY NOT NULL,
  execution_attempt_id TEXT NOT NULL UNIQUE,
  contract_hash TEXT NOT NULL,
  status TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  completed_at TEXT NOT NULL,
  FOREIGN KEY (execution_attempt_id) REFERENCES execution_attempts(execution_attempt_id)
);

CREATE TABLE IF NOT EXISTS execution_reports (
  report_id TEXT PRIMARY KEY NOT NULL,
  session_id TEXT NOT NULL,
  contract_id TEXT NOT NULL,
  contract_hash TEXT NOT NULL,
  execution_attempt_id TEXT NOT NULL UNIQUE,
  adapter_mode TEXT NOT NULL,
  execution_status TEXT NOT NULL,
  report_status TEXT NOT NULL CHECK (report_status IN (
    'PENDING', 'GENERATING', 'COMPLETED', 'REPORT_INCOMPLETE', 'FAILED'
  )),
  base_head_sha TEXT NOT NULL,
  started_at TEXT NOT NULL,
  finished_at TEXT,
  duration_ms INTEGER,
  payload_json TEXT NOT NULL,
  sealed INTEGER NOT NULL CHECK (sealed IN (0, 1)),
  created_at TEXT NOT NULL,
  sealed_at TEXT,
  FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id),
  FOREIGN KEY (contract_id) REFERENCES execution_contracts(contract_id),
  FOREIGN KEY (execution_attempt_id) REFERENCES execution_attempts(execution_attempt_id)
);

CREATE TABLE IF NOT EXISTS report_file_coverage (
  coverage_id TEXT PRIMARY KEY NOT NULL,
  report_id TEXT NOT NULL,
  path TEXT NOT NULL,
  expected_mode TEXT NOT NULL CHECK (expected_mode IN ('READ', 'CREATE', 'MODIFY')),
  observed INTEGER NOT NULL CHECK (observed IN (0, 1)),
  coverage_status TEXT NOT NULL CHECK (coverage_status IN (
    'COVERED', 'MISSING', 'UNEXPECTED', 'NOT_APPLICABLE'
  )),
  evidence_available INTEGER NOT NULL CHECK (evidence_available IN (0, 1)),
  gap_reason TEXT,
  UNIQUE (report_id, path, expected_mode),
  FOREIGN KEY (report_id) REFERENCES execution_reports(report_id)
);
`;

let singleton: DatabaseSync | null = null;
let singletonPath: string | null = null;

function tableHasColumn(
  db: DatabaseSync,
  table: string,
  column: string,
): boolean {
  const rows = db.prepare(`PRAGMA table_info(${table})`).all() as Array<{
    name: string;
  }>;
  return rows.some((r) => r.name === column);
}

function isRealProvider(provider: string): boolean {
  return provider !== "fake-test";
}

/**
 * Infer immutable conversation mode for a legacy session.
 * Throws LEGACY_SESSION_MODE_AMBIGUOUS when journal/attempts conflict.
 */
export function inferLegacyConversationMode(
  roles: string[],
  providers: string[],
): "fixture" | "live" {
  const hasFixtureAssistant = roles.includes("assistant_fixture");
  const hasLiveAssistant = roles.includes("assistant_live");
  const hasRealAttempt = providers.some(isRealProvider);
  const hasFakeAttempt = providers.some((p) => p === "fake-test");

  if (hasFixtureAssistant && hasLiveAssistant) {
    throw new Ops1Error("CONFLICT", LEGACY_SESSION_MODE_AMBIGUOUS);
  }
  if (hasRealAttempt && hasFixtureAssistant && !hasLiveAssistant) {
    throw new Ops1Error("CONFLICT", LEGACY_SESSION_MODE_AMBIGUOUS);
  }
  // Real OpenAI attempt + only fixture assistants already caught above.
  // Fake attempts with live assistant roles → live technical mode.
  if (hasLiveAssistant || hasRealAttempt) {
    return "live";
  }
  if (hasFakeAttempt && !hasLiveAssistant && !hasFixtureAssistant) {
    // attempts without assistant turns (all failed) → still live path intent
    return "live";
  }
  return "fixture";
}

function validateNoAmbiguousLegacySessions(db: DatabaseSync): void {
  const sessions = db
    .prepare(`SELECT session_id FROM cycle_sessions`)
    .all() as Array<{ session_id: string }>;

  for (const { session_id } of sessions) {
    const roles = (
      db
        .prepare(
          `SELECT DISTINCT role FROM journal_turns WHERE session_id = ?`,
        )
        .all(session_id) as Array<{ role: string }>
    ).map((r) => r.role);
    const providers = (
      db
        .prepare(
          `SELECT DISTINCT provider FROM conversation_attempts WHERE session_id = ?`,
        )
        .all(session_id) as Array<{ provider: string }>
    ).map((r) => r.provider);
    // Throws on ambiguity; return value unused — persisted mode already set.
    inferLegacyConversationMode(roles, providers);
  }
}

function backfillConversationModes(db: DatabaseSync): void {
  const sessions = db
    .prepare(`SELECT session_id FROM cycle_sessions`)
    .all() as Array<{ session_id: string }>;

  for (const { session_id } of sessions) {
    const roles = (
      db
        .prepare(
          `SELECT DISTINCT role FROM journal_turns WHERE session_id = ?`,
        )
        .all(session_id) as Array<{ role: string }>
    ).map((r) => r.role);
    const providers = (
      db
        .prepare(
          `SELECT DISTINCT provider FROM conversation_attempts WHERE session_id = ?`,
        )
        .all(session_id) as Array<{ provider: string }>
    ).map((r) => r.provider);

    const mode = inferLegacyConversationMode(roles, providers);
    db.prepare(
      `UPDATE cycle_sessions
       SET conversation_mode = ?, fixture_mode = ?
       WHERE session_id = ?`,
    ).run(mode, mode === "fixture" ? 1 : 0, session_id);
  }
}

/** Idempotent additive migration I1 → I2 (+ conversation_mode immutability). */
export function migrateOps1Schema(db: DatabaseSync): void {
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec(SCHEMA_SQL);

  const turnSqlRow = db
    .prepare(
      `SELECT sql FROM sqlite_master WHERE type = 'table' AND name = 'journal_turns'`,
    )
    .get() as { sql: string } | undefined;
  const turnSql = turnSqlRow?.sql ?? "";

  if (turnSql && !turnSql.includes("assistant_live")) {
    db.exec("BEGIN IMMEDIATE");
    try {
      db.exec(`
        CREATE TABLE journal_turns_i2 (
          turn_id TEXT PRIMARY KEY NOT NULL,
          session_id TEXT NOT NULL,
          sequence INTEGER NOT NULL,
          role TEXT NOT NULL CHECK (role IN ('user', 'assistant_fixture', 'assistant_live')),
          content TEXT NOT NULL,
          fixture INTEGER NOT NULL CHECK (fixture IN (0, 1)),
          created_at TEXT NOT NULL,
          UNIQUE (session_id, sequence),
          FOREIGN KEY (session_id) REFERENCES cycle_sessions(session_id)
        );
        INSERT INTO journal_turns_i2 (
          turn_id, session_id, sequence, role, content, fixture, created_at
        )
        SELECT turn_id, session_id, sequence, role, content, fixture, created_at
        FROM journal_turns;
        DROP TABLE journal_turns;
        ALTER TABLE journal_turns_i2 RENAME TO journal_turns;
        CREATE INDEX IF NOT EXISTS idx_turns_session_seq
          ON journal_turns(session_id, sequence);
      `);
      db.exec("COMMIT");
    } catch (error) {
      try {
        db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      throw new Ops1Error(
        "PERSISTENCE",
        "Échec de migration schéma journal I2.",
        error,
      );
    }
  }

  if (!tableHasColumn(db, "cycle_sessions", "conversation_mode")) {
    db.exec("BEGIN IMMEDIATE");
    try {
      db.exec(
        `ALTER TABLE cycle_sessions ADD COLUMN conversation_mode TEXT NOT NULL DEFAULT 'fixture'`,
      );
      backfillConversationModes(db);
      db.exec("COMMIT");
    } catch (error) {
      try {
        db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      if (error instanceof Ops1Error) throw error;
      throw new Ops1Error(
        "PERSISTENCE",
        "Échec de migration conversation_mode.",
        error,
      );
    }
  } else {
    validateNoAmbiguousLegacySessions(db);
  }

  if (!tableHasColumn(db, "cycle_sessions", "source_report_id")) {
    db.exec(
      `ALTER TABLE cycle_sessions ADD COLUMN source_report_id TEXT`,
    );
  }

  const integrity = db.prepare("PRAGMA integrity_check").get() as
    | Record<string, string>
    | undefined;
  const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
  if (raw !== "ok") {
    throw new Ops1Error("PERSISTENCE", "Intégrité SQLite invalide.");
  }
}

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
    migrateOps1Schema(db);
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
