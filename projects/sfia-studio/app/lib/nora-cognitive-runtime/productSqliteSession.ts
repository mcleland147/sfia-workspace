/**
 * Product SQLite Session — Agents SDK Session contract.
 * Conversational continuity only. NEVER Truth C / LPS / HumanDecision / Evidence.
 *
 * Harvested/adapted from Option C A/B spike ProductSqliteSession shape.
 * Does NOT adopt Baseline A M9 Memory B schema.
 *
 * logical_product_turns (D-GF-ACW-02 Option A): Session-adjacent identity for
 * Product-turn replay / ACW idempotence coordination ONLY.
 * logical_product_turn_retry_bindings: opaque client retry-key → server ltu
 * lookup (untrusted correlation; never Product authority / Truth C).
 * Never Epistemic / LPS / HD / Evidence SoT.
 */
import { randomBytes } from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import type { AgentInputItem, Session } from "@openai/agents";

export type ProductSqliteSessionOptions = {
  projectId: string;
  dbPath: string;
  sessionKey?: string;
};

export type LogicalProductTurnStatus =
  | "accepted"
  | "completed"
  | "failed"
  | string;

export type LogicalProductTurnRow = {
  readonly projectId: string;
  readonly sessionKey: string;
  readonly logicalTurnId: string;
  readonly status: string;
  readonly createdAt: string;
  readonly cycleInstanceId: string | null;
};

/** Session-adjacent retry correlation binding (untrusted key → server ltu). */
export type LogicalProductTurnRetryBinding = {
  readonly projectId: string;
  readonly sessionKey: string;
  readonly retryKey: string;
  readonly logicalTurnId: string;
  readonly payloadDigest: string;
  readonly createdAt: string;
};

/** Tables permitted in Product Session SQLite (Session ≠ Truth C). */
export const PRODUCT_SESSION_ALLOWED_TABLES = [
  "session_items",
  "logical_product_turns",
  "logical_product_turn_retry_bindings",
  /** Pilote-facing transcript — survives Memory B compaction. */
  "pilot_transcript_turns",
  /** Cycle Journal projection — NEVER Truth C / HD / Evidence. */
  "cycle_journal_entries",
  /** Idempotence ledger for journal mutations per logical turn. */
  "cycle_journal_mutation_ledger",
] as const;

/**
 * Project-scoped Session. Cross-project keys never share rows.
 * Persistence is product-owned Session SQLite — no oa_* Truth C writes.
 */
export class ProductSqliteSession implements Session {
  readonly projectId: string;
  readonly sessionKey: string;
  private readonly dbPath: string;
  private db: DatabaseSync;
  private forceNextGetFail = false;
  private forceNextReplaceFail = false;

  constructor(options: ProductSqliteSessionOptions) {
    this.projectId = options.projectId;
    this.sessionKey = options.sessionKey ?? "default";
    this.dbPath = options.dbPath;
    this.db = new DatabaseSync(this.dbPath);
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS session_items (
        project_id TEXT NOT NULL,
        session_key TEXT NOT NULL,
        seq INTEGER NOT NULL,
        item_json TEXT NOT NULL,
        PRIMARY KEY (project_id, session_key, seq)
      );
    `);
    this.ensureLogicalTurnSchema();
    this.ensurePilotTranscriptAndJournalSchema();
  }

  /**
   * Session-adjacent logical Product turn identity (D-GF-ACW-02 Option A).
   * Continuity / replay coordination ONLY — never Epistemic/LPS/HD/Evidence SoT.
   */
  ensureLogicalTurnSchema(): void {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS logical_product_turns (
        project_id TEXT NOT NULL,
        session_key TEXT NOT NULL,
        logical_turn_id TEXT NOT NULL,
        status TEXT NOT NULL,
        created_at TEXT NOT NULL,
        cycle_instance_id TEXT,
        PRIMARY KEY (project_id, session_key, logical_turn_id)
      );
      CREATE TABLE IF NOT EXISTS logical_product_turn_retry_bindings (
        project_id TEXT NOT NULL,
        session_key TEXT NOT NULL,
        retry_key TEXT NOT NULL,
        logical_turn_id TEXT NOT NULL,
        payload_digest TEXT NOT NULL,
        created_at TEXT NOT NULL,
        PRIMARY KEY (project_id, session_key, retry_key)
      );
    `);
  }

  /**
   * Pilot transcript + Cycle Journal — Session-adjacent, never Truth C.
   * Compaction of session_items MUST NOT touch these tables.
   */
  ensurePilotTranscriptAndJournalSchema(): void {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS pilot_transcript_turns (
        project_id TEXT NOT NULL,
        session_key TEXT NOT NULL,
        turn_id TEXT NOT NULL,
        seq INTEGER NOT NULL,
        role TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TEXT NOT NULL,
        logical_turn_id TEXT,
        cycle_instance_id TEXT,
        PRIMARY KEY (project_id, session_key, turn_id)
      );
      CREATE UNIQUE INDEX IF NOT EXISTS pilot_transcript_seq_uq
        ON pilot_transcript_turns(project_id, session_key, seq);
      CREATE TABLE IF NOT EXISTS cycle_journal_entries (
        project_id TEXT NOT NULL,
        session_key TEXT NOT NULL,
        journal_entry_id TEXT NOT NULL,
        cycle_instance_id TEXT NOT NULL,
        title TEXT NOT NULL,
        current_summary TEXT NOT NULL,
        status TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        source_turn_refs_json TEXT NOT NULL,
        lineage_parent_ids_json TEXT NOT NULL,
        superseded_by_id TEXT,
        last_logical_turn_id TEXT,
        topic_ordinal INTEGER,
        stabilized_points_json TEXT NOT NULL DEFAULT '[]',
        open_points_json TEXT NOT NULL DEFAULT '[]',
        PRIMARY KEY (project_id, session_key, journal_entry_id)
      );
      CREATE INDEX IF NOT EXISTS cycle_journal_cycle_idx
        ON cycle_journal_entries(project_id, session_key, cycle_instance_id);
      CREATE TABLE IF NOT EXISTS cycle_journal_mutation_ledger (
        project_id TEXT NOT NULL,
        session_key TEXT NOT NULL,
        logical_turn_id TEXT NOT NULL,
        op_index INTEGER NOT NULL,
        op TEXT NOT NULL,
        journal_entry_id TEXT NOT NULL,
        created_at TEXT NOT NULL,
        PRIMARY KEY (project_id, session_key, logical_turn_id, op_index)
      );
    `);
    this.ensureCycleJournalRichColumns();
  }

  /**
   * Backwards-compatible ALTER for #516 DBs opened after pilotability lot.
   * Idempotent: ignore duplicate-column errors; deterministic ordinal backfill.
   */
  private ensureCycleJournalRichColumns(): void {
    const addColumn = (sql: string) => {
      try {
        this.db.exec(sql);
      } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        if (!/duplicate column/i.test(msg)) throw error;
      }
    };
    addColumn(
      `ALTER TABLE cycle_journal_entries ADD COLUMN topic_ordinal INTEGER`,
    );
    addColumn(
      `ALTER TABLE cycle_journal_entries ADD COLUMN stabilized_points_json TEXT NOT NULL DEFAULT '[]'`,
    );
    addColumn(
      `ALTER TABLE cycle_journal_entries ADD COLUMN open_points_json TEXT NOT NULL DEFAULT '[]'`,
    );
    // Deterministic backfill: creation order + stable id tie-break; never renumber later.
    const missing = this.db
      .prepare(
        `SELECT project_id, session_key, cycle_instance_id, journal_entry_id, created_at
         FROM cycle_journal_entries
         WHERE topic_ordinal IS NULL
         ORDER BY project_id ASC, session_key ASC, cycle_instance_id ASC,
                  created_at ASC, journal_entry_id ASC`,
      )
      .all() as Array<{
      project_id: string;
      session_key: string;
      cycle_instance_id: string;
      journal_entry_id: string;
      created_at: string;
    }>;
    if (missing.length === 0) return;
    const counters = new Map<string, number>();
    const maxStmt = this.db.prepare(
      `SELECT COALESCE(MAX(topic_ordinal), 0) AS m
       FROM cycle_journal_entries
       WHERE project_id = ? AND session_key = ? AND cycle_instance_id = ?`,
    );
    const update = this.db.prepare(
      `UPDATE cycle_journal_entries
       SET topic_ordinal = ?
       WHERE project_id = ? AND session_key = ? AND journal_entry_id = ?`,
    );
    for (const row of missing) {
      const key = `${row.project_id}\0${row.session_key}\0${row.cycle_instance_id}`;
      if (!counters.has(key)) {
        const maxRow = maxStmt.get(
          row.project_id,
          row.session_key,
          row.cycle_instance_id,
        ) as { m: number };
        counters.set(key, Number(maxRow.m) || 0);
      }
      const next = (counters.get(key) ?? 0) + 1;
      counters.set(key, next);
      update.run(
        next,
        row.project_id,
        row.session_key,
        row.journal_entry_id,
      );
    }
  }

  getLogicalProductTurnRetryBinding(
    retryKey: string,
  ): LogicalProductTurnRetryBinding | null {
    this.ensureLogicalTurnSchema();
    const key = retryKey.trim();
    if (!key) return null;
    const row = this.db
      .prepare(
        `SELECT project_id, session_key, retry_key, logical_turn_id,
                payload_digest, created_at
         FROM logical_product_turn_retry_bindings
         WHERE project_id = ? AND session_key = ? AND retry_key = ?`,
      )
      .get(this.projectId, this.sessionKey, key) as
      | {
          project_id: string;
          session_key: string;
          retry_key: string;
          logical_turn_id: string;
          payload_digest: string;
          created_at: string;
        }
      | undefined;
    if (!row) return null;
    return {
      projectId: row.project_id,
      sessionKey: row.session_key,
      retryKey: row.retry_key,
      logicalTurnId: row.logical_turn_id,
      payloadDigest: row.payload_digest,
      createdAt: row.created_at,
    };
  }

  /**
   * Bind opaque transport retry key → server-owned logical turn.
   * Caller must hold a transaction when used with mint for atomic accept.
   */
  bindLogicalProductTurnRetry(input: {
    retryKey: string;
    logicalTurnId: string;
    payloadDigest: string;
    nowIso?: string;
  }): LogicalProductTurnRetryBinding {
    this.ensureLogicalTurnSchema();
    const retryKey = input.retryKey.trim();
    const logicalTurnId = input.logicalTurnId.trim();
    const payloadDigest = input.payloadDigest.trim();
    if (!retryKey || !logicalTurnId || !payloadDigest) {
      throw new Error("LOGICAL_TURN_RETRY_BIND_INVALID");
    }
    const createdAt = input.nowIso ?? new Date().toISOString();
    this.db
      .prepare(
        `INSERT INTO logical_product_turn_retry_bindings(
           project_id, session_key, retry_key, logical_turn_id,
           payload_digest, created_at
         ) VALUES (?, ?, ?, ?, ?, ?)`,
      )
      .run(
        this.projectId,
        this.sessionKey,
        retryKey,
        logicalTurnId,
        payloadDigest,
        createdAt,
      );
    return {
      projectId: this.projectId,
      sessionKey: this.sessionKey,
      retryKey,
      logicalTurnId,
      payloadDigest,
      createdAt,
    };
  }

  /**
   * Mint a server-owned logical Product turn id (`ltu:` + randomBytes hex).
   * Session continuity / ACW rematerialize coordination ONLY.
   */
  mintLogicalProductTurn(input?: {
    cycleInstanceId?: string | null;
    status?: LogicalProductTurnStatus;
    nowIso?: string;
  }): LogicalProductTurnRow {
    this.ensureLogicalTurnSchema();
    const logicalTurnId = `ltu:${randomBytes(16).toString("hex")}`;
    const createdAt = input?.nowIso ?? new Date().toISOString();
    const status = input?.status ?? "accepted";
    const cycleInstanceId = input?.cycleInstanceId?.trim() || null;
    this.db
      .prepare(
        `INSERT INTO logical_product_turns(
           project_id, session_key, logical_turn_id, status, created_at, cycle_instance_id
         ) VALUES (?, ?, ?, ?, ?, ?)`,
      )
      .run(
        this.projectId,
        this.sessionKey,
        logicalTurnId,
        status,
        createdAt,
        cycleInstanceId,
      );
    return {
      projectId: this.projectId,
      sessionKey: this.sessionKey,
      logicalTurnId,
      status,
      createdAt,
      cycleInstanceId,
    };
  }

  getLogicalProductTurn(
    logicalTurnId: string,
  ): LogicalProductTurnRow | null {
    this.ensureLogicalTurnSchema();
    const id = logicalTurnId.trim();
    if (!id) return null;
    const row = this.db
      .prepare(
        `SELECT project_id, session_key, logical_turn_id, status, created_at, cycle_instance_id
         FROM logical_product_turns
         WHERE project_id = ? AND session_key = ? AND logical_turn_id = ?`,
      )
      .get(this.projectId, this.sessionKey, id) as
      | {
          project_id: string;
          session_key: string;
          logical_turn_id: string;
          status: string;
          created_at: string;
          cycle_instance_id: string | null;
        }
      | undefined;
    if (!row) return null;
    return {
      projectId: row.project_id,
      sessionKey: row.session_key,
      logicalTurnId: row.logical_turn_id,
      status: row.status,
      createdAt: row.created_at,
      cycleInstanceId: row.cycle_instance_id,
    };
  }

  markLogicalProductTurnStatus(
    logicalTurnId: string,
    status: LogicalProductTurnStatus,
  ): boolean {
    this.ensureLogicalTurnSchema();
    const id = logicalTurnId.trim();
    if (!id) return false;
    const result = this.db
      .prepare(
        `UPDATE logical_product_turns SET status = ?
         WHERE project_id = ? AND session_key = ? AND logical_turn_id = ?`,
      )
      .run(status, this.projectId, this.sessionKey, id);
    return Number(result.changes) > 0;
  }

  /** Test hook — next getItems throws (retrieval failure ≠ empty). */
  simulateNextRetrievalFailure(): void {
    this.forceNextGetFail = true;
  }

  /** Test hook — next replaceItemsAtomically fails after DELETE (rollback). */
  simulateNextReplaceFailure(): void {
    this.forceNextReplaceFail = true;
  }

  /** Test/inspection access for atomicity proofs (triggers, etc.). */
  getSqlite(): DatabaseSync {
    return this.db;
  }

  async getSessionId(): Promise<string> {
    return `sess:${this.projectId}:${this.sessionKey}`;
  }

  async getItems(limit?: number): Promise<AgentInputItem[]> {
    if (this.forceNextGetFail) {
      this.forceNextGetFail = false;
      throw new Error("SESSION_RETRIEVAL_ERROR: sqlite read failure");
    }
    const rows = this.db
      .prepare(
        `SELECT item_json FROM session_items
         WHERE project_id = ? AND session_key = ?
         ORDER BY seq ASC`,
      )
      .all(this.projectId, this.sessionKey) as Array<{ item_json: string }>;
    let items = rows.map((r) => JSON.parse(r.item_json) as AgentInputItem);
    if (limit !== undefined) {
      if (limit <= 0) return [];
      items = items.slice(-limit);
    }
    return items.map((i) => structuredClone(i));
  }

  /**
   * Batch append is atomic (BEGIN IMMEDIATE → inserts → COMMIT).
   * Any failure ROLLBACKs so no partial batch remains.
   */
  async addItems(items: AgentInputItem[]): Promise<void> {
    if (items.length === 0) return;
    this.db.exec("BEGIN IMMEDIATE");
    try {
      const maxRow = this.db
        .prepare(
          `SELECT COALESCE(MAX(seq), -1) AS m FROM session_items
           WHERE project_id = ? AND session_key = ?`,
        )
        .get(this.projectId, this.sessionKey) as { m: number };
      let seq = Number(maxRow.m) + 1;
      const insert = this.db.prepare(
        `INSERT INTO session_items(project_id, session_key, seq, item_json)
         VALUES (?, ?, ?, ?)`,
      );
      for (const item of items) {
        insert.run(
          this.projectId,
          this.sessionKey,
          seq,
          JSON.stringify(item),
        );
        seq += 1;
      }
      this.db.exec("COMMIT");
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore nested rollback errors */
      }
      throw error;
    }
  }

  async popItem(): Promise<AgentInputItem | undefined> {
    const row = this.db
      .prepare(
        `SELECT seq, item_json FROM session_items
         WHERE project_id = ? AND session_key = ?
         ORDER BY seq DESC LIMIT 1`,
      )
      .get(this.projectId, this.sessionKey) as
      | { seq: number; item_json: string }
      | undefined;
    if (!row) return undefined;
    this.db
      .prepare(
        `DELETE FROM session_items
         WHERE project_id = ? AND session_key = ? AND seq = ?`,
      )
      .run(this.projectId, this.sessionKey, row.seq);
    return JSON.parse(row.item_json) as AgentInputItem;
  }

  async clearSession(): Promise<void> {
    this.db
      .prepare(
        `DELETE FROM session_items WHERE project_id = ? AND session_key = ?`,
      )
      .run(this.projectId, this.sessionKey);
  }

  /** Inspection — ordered raw rows for compaction (MW1-S02). */
  listItemRows(): Array<{ seq: number; item_json: string }> {
    return this.db
      .prepare(
        `SELECT seq, item_json FROM session_items
         WHERE project_id = ? AND session_key = ?
         ORDER BY seq ASC`,
      )
      .all(this.projectId, this.sessionKey) as Array<{
      seq: number;
      item_json: string;
    }>;
  }

  /**
   * Atomic replace of all session items (MW1-S02 compaction).
   * BEGIN IMMEDIATE → DELETE → INSERT → COMMIT; ROLLBACK on failure.
   */
  async replaceItemsAtomically(items: AgentInputItem[]): Promise<void> {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      this.db
        .prepare(
          `DELETE FROM session_items WHERE project_id = ? AND session_key = ?`,
        )
        .run(this.projectId, this.sessionKey);
      const insert = this.db.prepare(
        `INSERT INTO session_items(project_id, session_key, seq, item_json)
         VALUES (?, ?, ?, ?)`,
      );
      let seq = 0;
      for (const item of items) {
        if (this.forceNextReplaceFail) {
          this.forceNextReplaceFail = false;
          throw new Error("SESSION_REPLACE_SIMULATED_FAILURE");
        }
        insert.run(
          this.projectId,
          this.sessionKey,
          seq,
          JSON.stringify(item),
        );
        seq += 1;
      }
      this.db.exec("COMMIT");
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      throw error;
    }
  }

  /** Inspection — tables must not be Truth C / oa_*. */
  listTables(): string[] {
    const rows = this.db
      .prepare(
        `SELECT name FROM sqlite_master WHERE type='table' ORDER BY name`,
      )
      .all() as Array<{ name: string }>;
    return rows.map((r) => r.name);
  }

  close(): void {
    this.db.close();
  }
}

export function userTextItem(text: string): AgentInputItem {
  return {
    type: "message",
    role: "user",
    content: [{ type: "input_text", text }],
  };
}

export function assistantTextItem(text: string): AgentInputItem {
  return {
    type: "message",
    role: "assistant",
    status: "completed",
    content: [{ type: "output_text", text }],
  };
}
