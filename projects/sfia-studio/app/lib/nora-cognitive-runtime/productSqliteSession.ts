/**
 * Product SQLite Session — Agents SDK Session contract.
 * Conversational continuity only. NEVER Truth C / LPS / HumanDecision / Evidence.
 *
 * Harvested/adapted from Option C A/B spike ProductSqliteSession shape.
 * Does NOT adopt Baseline A M9 Memory B schema.
 *
 * logical_product_turns (D-GF-ACW-02 Option A): Session-adjacent identity for
 * Product-turn replay / ACW idempotence coordination ONLY.
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
    `);
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
