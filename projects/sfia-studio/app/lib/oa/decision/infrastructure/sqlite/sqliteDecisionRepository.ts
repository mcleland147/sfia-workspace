import type { HumanDecision } from "../../domain/types";
import type { DecisionRepositoryPort } from "../../ports/decisionRepository";
import type { ProductSqliteHandle } from "@/lib/oa/project";

type DecisionRow = {
  decision_id: string;
  project_id: string;
  cycle_instance_id: string | null;
  subject: string;
  status: string;
  authority: string;
  version: number;
  effective_at: string;
  payload_json: string;
};

function cloneDecision(decision: HumanDecision): HumanDecision {
  return structuredClone(decision);
}

/**
 * Durable HumanDecision repository on Product SQLite (M3).
 * Depends on ProductSqliteHandle — not SqliteProductStore class.
 */
export class SqliteDecisionRepository implements DecisionRepositoryPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(decisionId: string): Promise<HumanDecision | null> {
    const row = this.store.db
      .prepare(
        `SELECT decision_id, project_id, cycle_instance_id, subject, status,
                authority, version, effective_at, payload_json
         FROM oa_human_decisions WHERE decision_id = ?`,
      )
      .get(decisionId) as DecisionRow | undefined;
    if (!row) return null;
    return cloneDecision(JSON.parse(row.payload_json) as HumanDecision);
  }

  async exists(decisionId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(`SELECT 1 AS ok FROM oa_human_decisions WHERE decision_id = ?`)
      .get(decisionId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async save(decision: HumanDecision): Promise<void> {
    if (this.store.failNextSave === "decision") {
      this.store.failNextSave = null;
      throw new Error("forced_decision_save_failure");
    }
    const now = decision.effectiveAt;
    const payload = JSON.stringify(cloneDecision(decision));
    this.store.db
      .prepare(
        `INSERT INTO oa_human_decisions(
           decision_id, project_id, cycle_instance_id, subject, status,
           authority, version, effective_at, payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(decision_id) DO UPDATE SET
           project_id = excluded.project_id,
           cycle_instance_id = excluded.cycle_instance_id,
           subject = excluded.subject,
           status = excluded.status,
           authority = excluded.authority,
           version = excluded.version,
           effective_at = excluded.effective_at,
           payload_json = excluded.payload_json,
           updated_at = excluded.updated_at`,
      )
      .run(
        decision.decisionId,
        decision.projectId,
        decision.cycleInstanceId ?? null,
        decision.subject,
        decision.status,
        decision.authority,
        decision.version ?? 1,
        decision.effectiveAt,
        payload,
        now,
        now,
      );
  }

  async listByProject(projectId: string): Promise<HumanDecision[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_human_decisions
         WHERE project_id = ?
         ORDER BY effective_at ASC, decision_id ASC`,
      )
      .all(projectId) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneDecision(JSON.parse(row.payload_json) as HumanDecision),
    );
  }

  async listBySubject(subject: string): Promise<HumanDecision[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_human_decisions
         WHERE subject = ?
         ORDER BY effective_at ASC, decision_id ASC`,
      )
      .all(subject) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneDecision(JSON.parse(row.payload_json) as HumanDecision),
    );
  }

  async listAcceptedBySubject(
    projectId: string,
    subject: string,
  ): Promise<HumanDecision[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_human_decisions
         WHERE project_id = ? AND subject = ? AND status = 'accepted'
         ORDER BY effective_at ASC, decision_id ASC`,
      )
      .all(projectId, subject) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneDecision(JSON.parse(row.payload_json) as HumanDecision),
    );
  }
}
