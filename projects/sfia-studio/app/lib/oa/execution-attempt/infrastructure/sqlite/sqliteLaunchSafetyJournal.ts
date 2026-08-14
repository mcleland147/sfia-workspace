/**
 * SqliteLaunchSafetyJournal — technical SQLite safety DB (D-M4-02/04).
 *
 * Isolated file path · NOT Product Store · NOT D1 business DB · NOT Attempt store.
 * TEMPORARY WITH EXIT.
 */
import { randomBytes } from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import type {
  ContractSafetyIdentity,
  GateDGrant,
  RealLaunchFrontierKind,
  RealLaunchFrontierRecord,
  RealLaunchReconcileDisposition,
} from "../../domain/realLaunchSafety";
import type {
  AtomicConsumeGrantAndCreateFrontierInput,
  CreateGrantInput,
  GrantValidationResult,
  LaunchSafetyJournalPort,
  MarkLaunchedInput,
  ValidateGrantForStartInput,
} from "../../ports/launchSafetyJournalPort";

const SCHEMA_SQL = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS m4_gate_d_grants (
  grant_id TEXT PRIMARY KEY NOT NULL,
  execution_contract_id TEXT NOT NULL,
  execution_contract_version INTEGER NOT NULL,
  semantic_fingerprint TEXT NOT NULL,
  attempt_id TEXT NOT NULL UNIQUE,
  selected_agent_ref TEXT NOT NULL,
  actor_id TEXT NOT NULL,
  issued_at TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  status TEXT NOT NULL,
  consumed_at TEXT,
  correlation_id TEXT
);

CREATE TABLE IF NOT EXISTS m4_launch_frontier (
  record_id TEXT PRIMARY KEY NOT NULL,
  kind TEXT NOT NULL,
  occurred_at TEXT NOT NULL,
  execution_contract_id TEXT NOT NULL,
  execution_contract_version INTEGER NOT NULL,
  semantic_fingerprint TEXT NOT NULL,
  attempt_id TEXT NOT NULL,
  selected_agent_ref TEXT NOT NULL,
  actor_id TEXT NOT NULL,
  grant_id TEXT NOT NULL,
  correlation_id TEXT NOT NULL,
  process_ref TEXT,
  payload_json TEXT NOT NULL,
  UNIQUE (attempt_id, kind)
);

-- At most one CREATED per contract safety identity (blocks new attemptId bypass).
CREATE UNIQUE INDEX IF NOT EXISTS idx_m4_frontier_created_identity
  ON m4_launch_frontier(execution_contract_id, execution_contract_version, semantic_fingerprint)
  WHERE kind = 'CREATED';

CREATE INDEX IF NOT EXISTS idx_m4_frontier_identity
  ON m4_launch_frontier(execution_contract_id, execution_contract_version, semantic_fingerprint);
`;

function newId(prefix: string): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

function mapGrant(row: Record<string, unknown>): GateDGrant {
  return Object.freeze({
    grantId: String(row.grant_id),
    executionContractId: String(row.execution_contract_id),
    executionContractVersion: Number(row.execution_contract_version),
    semanticFingerprint: String(row.semantic_fingerprint),
    attemptId: String(row.attempt_id),
    selectedAgentRef: String(row.selected_agent_ref),
    actorId: String(row.actor_id),
    issuedAt: String(row.issued_at),
    expiresAt: String(row.expires_at),
    status: String(row.status) as GateDGrant["status"],
    consumedAt: row.consumed_at != null ? String(row.consumed_at) : undefined,
    correlationId:
      row.correlation_id != null ? String(row.correlation_id) : undefined,
  });
}

function mapFrontier(row: Record<string, unknown>): RealLaunchFrontierRecord {
  return Object.freeze({
    recordId: String(row.record_id),
    kind: String(row.kind) as RealLaunchFrontierKind,
    occurredAt: String(row.occurred_at),
    executionContractId: String(row.execution_contract_id),
    executionContractVersion: Number(row.execution_contract_version),
    semanticFingerprint: String(row.semantic_fingerprint),
    attemptId: String(row.attempt_id),
    selectedAgentRef: String(row.selected_agent_ref),
    actorId: String(row.actor_id),
    grantId: String(row.grant_id),
    correlationId: String(row.correlation_id),
    processRef: row.process_ref != null ? String(row.process_ref) : undefined,
    payloadJson: String(row.payload_json ?? "{}"),
  });
}

export type SqliteLaunchSafetyJournalOptions = {
  /** Explicit technical DB path — required for durability across processes. */
  readonly databasePath: string;
};

export class SqliteLaunchSafetyJournal implements LaunchSafetyJournalPort {
  private readonly db: DatabaseSync;
  readonly databasePath: string;

  constructor(options: SqliteLaunchSafetyJournalOptions) {
    if (!options.databasePath || options.databasePath.trim() === "") {
      throw new Error("m4_safety_journal_database_path_required");
    }
    this.databasePath = options.databasePath;
    this.db = new DatabaseSync(options.databasePath);
    this.db.exec(SCHEMA_SQL);
  }

  /** Test helper — close handle. */
  close(): void {
    this.db.close();
  }

  async createGrant(input: CreateGrantInput): Promise<GateDGrant> {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      this.db
        .prepare(
          `INSERT INTO m4_gate_d_grants (
            grant_id, execution_contract_id, execution_contract_version,
            semantic_fingerprint, attempt_id, selected_agent_ref, actor_id,
            issued_at, expires_at, status, correlation_id
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'granted', ?)`,
        )
        .run(
          input.grantId,
          input.executionContractId,
          input.executionContractVersion,
          input.semanticFingerprint,
          input.attemptId,
          input.selectedAgentRef,
          input.actorId,
          input.issuedAt,
          input.expiresAt,
          input.correlationId ?? null,
        );
      this.db.exec("COMMIT");
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      throw error;
    }
    const grant = await this.findGrant(input.grantId);
    if (!grant) throw new Error("m4_gate_d_persist_failed");
    return grant;
  }

  /** Transitional alias. */
  async persistGateDGrant(input: CreateGrantInput): Promise<GateDGrant> {
    return this.createGrant(input);
  }

  async findGrant(grantId: string): Promise<GateDGrant | null> {
    const row = this.db
      .prepare(`SELECT * FROM m4_gate_d_grants WHERE grant_id = ?`)
      .get(grantId) as Record<string, unknown> | undefined;
    return row ? mapGrant(row) : null;
  }

  async findGateDGrant(grantId: string): Promise<GateDGrant | null> {
    return this.findGrant(grantId);
  }

  async findActiveGateDGrantForAttempt(
    attemptId: string,
  ): Promise<GateDGrant | null> {
    const row = this.db
      .prepare(
        `SELECT * FROM m4_gate_d_grants
         WHERE attempt_id = ? AND status = 'granted'`,
      )
      .get(attemptId) as Record<string, unknown> | undefined;
    return row ? mapGrant(row) : null;
  }

  async validateGrantForStart(
    input: ValidateGrantForStartInput,
  ): Promise<GrantValidationResult> {
    const grant = await this.findGrant(input.grantId);
    if (!grant) return { ok: false, reason: "GATE_D_REQUIRED" };
    if (grant.status === "consumed") {
      return { ok: false, reason: "GATE_D_ALREADY_CONSUMED" };
    }
    if (grant.status !== "granted") {
      return { ok: false, reason: "GATE_D_INVALID" };
    }
    if (Date.parse(grant.expiresAt) <= Date.parse(input.nowIso)) {
      return { ok: false, reason: "GATE_D_EXPIRED" };
    }
    if (
      grant.attemptId !== input.attemptId ||
      grant.actorId !== input.actorId ||
      grant.selectedAgentRef !== input.selectedAgentRef ||
      grant.executionContractId !== input.identity.executionContractId ||
      grant.executionContractVersion !==
        input.identity.executionContractVersion ||
      grant.semanticFingerprint !== input.identity.semanticFingerprint
    ) {
      return { ok: false, reason: "GATE_D_BINDING_MISMATCH" };
    }
    return { ok: true, grant };
  }

  async atomicConsumeGrantAndCreateFrontier(
    input: AtomicConsumeGrantAndCreateFrontierInput,
  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }> {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      const grantRow = this.db
        .prepare(`SELECT * FROM m4_gate_d_grants WHERE grant_id = ?`)
        .get(input.grantId) as Record<string, unknown> | undefined;
      if (!grantRow) {
        throw new Error("m4_gate_d_not_found");
      }
      const grant = mapGrant(grantRow);
      if (grant.status === "consumed") {
        throw new Error("m4_gate_d_already_consumed");
      }
      if (grant.status !== "granted") {
        throw new Error("m4_gate_d_not_granted");
      }
      if (Date.parse(grant.expiresAt) <= Date.parse(input.occurredAt)) {
        this.db
          .prepare(
            `UPDATE m4_gate_d_grants SET status = 'expired' WHERE grant_id = ?`,
          )
          .run(input.grantId);
        throw new Error("m4_gate_d_expired");
      }
      if (grant.attemptId !== input.attemptId) {
        throw new Error("m4_gate_d_attempt_mismatch");
      }
      if (
        grant.executionContractId !== input.identity.executionContractId ||
        grant.executionContractVersion !==
          input.identity.executionContractVersion ||
        grant.semanticFingerprint !== input.identity.semanticFingerprint
      ) {
        throw new Error("m4_gate_d_identity_mismatch");
      }
      if (grant.selectedAgentRef !== input.selectedAgentRef) {
        throw new Error("m4_gate_d_agent_mismatch");
      }
      if (grant.actorId !== input.actorId) {
        throw new Error("m4_gate_d_actor_mismatch");
      }

      const ambiguous = this.db
        .prepare(
          `SELECT 1 AS ok FROM m4_launch_frontier
           WHERE execution_contract_id = ?
             AND execution_contract_version = ?
             AND semantic_fingerprint = ?
           LIMIT 1`,
        )
        .get(
          input.identity.executionContractId,
          input.identity.executionContractVersion,
          input.identity.semanticFingerprint,
        );
      if (ambiguous) {
        throw new Error("m4_launch_frontier_ambiguous");
      }

      this.db
        .prepare(
          `UPDATE m4_gate_d_grants
           SET status = 'consumed', consumed_at = ?
           WHERE grant_id = ? AND status = 'granted'`,
        )
        .run(input.occurredAt, input.grantId);

      const recordId = newId("m4fr");
      this.db
        .prepare(
          `INSERT INTO m4_launch_frontier (
            record_id, kind, occurred_at, execution_contract_id,
            execution_contract_version, semantic_fingerprint, attempt_id,
            selected_agent_ref, actor_id, grant_id, correlation_id,
            process_ref, payload_json
          ) VALUES (?, 'CREATED', ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL, '{}')`,
        )
        .run(
          recordId,
          input.occurredAt,
          input.identity.executionContractId,
          input.identity.executionContractVersion,
          input.identity.semanticFingerprint,
          input.attemptId,
          input.selectedAgentRef,
          input.actorId,
          input.grantId,
          input.correlationId,
        );

      this.db.exec("COMMIT");

      const createdRow = this.db
        .prepare(`SELECT * FROM m4_launch_frontier WHERE record_id = ?`)
        .get(recordId) as Record<string, unknown>;
      const updatedGrant = await this.findGrant(input.grantId);
      if (!updatedGrant) throw new Error("m4_gate_d_consume_lost");
      return { grant: updatedGrant, created: mapFrontier(createdRow) };
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      throw error;
    }
  }

  /** Transitional alias. */
  async consumeGateDAndAppendCreated(
    input: AtomicConsumeGrantAndCreateFrontierInput,
  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }> {
    return this.atomicConsumeGrantAndCreateFrontier(input);
  }

  async markLaunched(
    input: MarkLaunchedInput,
  ): Promise<RealLaunchFrontierRecord> {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      const created = this.db
        .prepare(
          `SELECT 1 AS ok FROM m4_launch_frontier
           WHERE attempt_id = ? AND kind = 'CREATED'`,
        )
        .get(input.attemptId);
      if (!created) {
        throw new Error("m4_launched_requires_created");
      }
      const recordId = newId("m4fr");
      const payloadJson = JSON.stringify(input.payload ?? {});
      this.db
        .prepare(
          `INSERT INTO m4_launch_frontier (
            record_id, kind, occurred_at, execution_contract_id,
            execution_contract_version, semantic_fingerprint, attempt_id,
            selected_agent_ref, actor_id, grant_id, correlation_id,
            process_ref, payload_json
          ) VALUES (?, 'LAUNCHED', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(
          recordId,
          input.occurredAt,
          input.identity.executionContractId,
          input.identity.executionContractVersion,
          input.identity.semanticFingerprint,
          input.attemptId,
          input.selectedAgentRef,
          input.actorId,
          input.grantId,
          input.correlationId,
          input.processRef,
          payloadJson,
        );
      this.db.exec("COMMIT");
      const row = this.db
        .prepare(`SELECT * FROM m4_launch_frontier WHERE record_id = ?`)
        .get(recordId) as Record<string, unknown>;
      return mapFrontier(row);
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      throw error;
    }
  }

  /** Transitional alias. */
  async appendLaunched(
    input: MarkLaunchedInput,
  ): Promise<RealLaunchFrontierRecord> {
    return this.markLaunched(input);
  }

  async findFrontierByAttemptId(
    attemptId: string,
  ): Promise<RealLaunchFrontierRecord[]> {
    const rows = this.db
      .prepare(
        `SELECT * FROM m4_launch_frontier WHERE attempt_id = ? ORDER BY occurred_at`,
      )
      .all(attemptId) as Record<string, unknown>[];
    return rows.map(mapFrontier);
  }

  async findFrontierByAttempt(
    attemptId: string,
  ): Promise<RealLaunchFrontierRecord[]> {
    return this.findFrontierByAttemptId(attemptId);
  }

  async findFrontierByContractFingerprint(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchFrontierRecord[]> {
    const rows = this.db
      .prepare(
        `SELECT * FROM m4_launch_frontier
         WHERE execution_contract_id = ?
           AND execution_contract_version = ?
           AND semantic_fingerprint = ?
         ORDER BY occurred_at`,
      )
      .all(
        identity.executionContractId,
        identity.executionContractVersion,
        identity.semanticFingerprint,
      ) as Record<string, unknown>[];
    return rows.map(mapFrontier);
  }

  async findFrontierByIdentity(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchFrontierRecord[]> {
    return this.findFrontierByContractFingerprint(identity);
  }

  async hasAmbiguousFrontier(
    identity: ContractSafetyIdentity,
  ): Promise<boolean> {
    const rows = await this.findFrontierByContractFingerprint(identity);
    return rows.length > 0;
  }

  async reconcileDispositionForIdentity(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchReconcileDisposition> {
    const rows = await this.findFrontierByContractFingerprint(identity);
    if (rows.length === 0) return "CLEAR";
    const hasCreated = rows.some((r) => r.kind === "CREATED");
    const hasLaunched = rows.some((r) => r.kind === "LAUNCHED");
    if (hasLaunched) return "REVIEW_REQUIRED";
    if (hasCreated) return "UNKNOWN";
    return "REVIEW_REQUIRED";
  }

  async hasKindForAttempt(
    attemptId: string,
    kind: RealLaunchFrontierKind,
  ): Promise<boolean> {
    const row = this.db
      .prepare(
        `SELECT 1 AS ok FROM m4_launch_frontier WHERE attempt_id = ? AND kind = ?`,
      )
      .get(attemptId, kind);
    return Boolean(row);
  }
}

/** Transitional export name. */
export { SqliteLaunchSafetyJournal as SqliteRealLaunchSafetyJournal };
