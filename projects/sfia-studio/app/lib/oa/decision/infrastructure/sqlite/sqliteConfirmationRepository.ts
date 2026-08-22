import type { Confirmation } from "../../domain/types";
import type { ConfirmationRepositoryPort } from "../../ports/confirmationRepository";
import type { ProductSqliteHandle } from "@/lib/oa/project";

function cloneConfirmation(confirmation: Confirmation): Confirmation {
  return structuredClone(confirmation);
}

const DURABLE_STATUSES = new Set<Confirmation["status"]>([
  "granted",
  "refused",
  "expired",
  "cancelled",
  "consumed",
  "superseded",
]);

/**
 * Durable Confirmation repository on Product SQLite (M6).
 * `requested` is process-local only (in-memory) and is lost on restart.
 * CAS consume via SQL WHERE status='granted'.
 */
export class SqliteConfirmationRepository implements ConfirmationRepositoryPort {
  /** Process-local requested confirmations — not persisted across restart. */
  private readonly ephemeral = new Map<string, Confirmation>();
  private readonly ephemeralIdempotency = new Map<string, string>();

  constructor(private readonly store: ProductSqliteHandle) {}

  private rowToConfirmation(payloadJson: string): Confirmation {
    return cloneConfirmation(JSON.parse(payloadJson) as Confirmation);
  }

  async findById(confirmationId: string): Promise<Confirmation | null> {
    const ephemeral = this.ephemeral.get(confirmationId);
    if (ephemeral) {
      return cloneConfirmation(ephemeral);
    }
    const row = this.store.db
      .prepare(`SELECT payload_json FROM oa_confirmations WHERE confirmation_id = ?`)
      .get(confirmationId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return this.rowToConfirmation(row.payload_json);
  }

  async findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<Confirmation | null> {
    const ephemeralId = this.ephemeralIdempotency.get(idempotencyKey);
    if (ephemeralId) {
      return this.findById(ephemeralId);
    }
    const row = this.store.db
      .prepare(`SELECT payload_json FROM oa_confirmations WHERE idempotency_key = ?`)
      .get(idempotencyKey) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return this.rowToConfirmation(row.payload_json);
  }

  async exists(confirmationId: string): Promise<boolean> {
    if (this.ephemeral.has(confirmationId)) return true;
    const row = this.store.db
      .prepare(`SELECT 1 AS ok FROM oa_confirmations WHERE confirmation_id = ?`)
      .get(confirmationId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async save(confirmation: Confirmation): Promise<void> {
    if (this.store.failNextSave === "confirmation") {
      this.store.failNextSave = null;
      throw new Error("forced_confirmation_save_failure");
    }

    const now = new Date().toISOString();
    const payload = JSON.stringify(cloneConfirmation(confirmation));

    if (confirmation.status === "consumed") {
      const result = this.store.db
        .prepare(
          `UPDATE oa_confirmations
           SET status = ?, payload_json = ?, updated_at = ?
           WHERE confirmation_id = ? AND status = 'granted'`,
        )
        .run(confirmation.status, payload, now, confirmation.confirmationId);
      if (result.changes !== 1) {
        const existing = await this.findById(confirmation.confirmationId);
        if (existing?.status === "consumed") {
          throw Object.assign(new Error("double_consume"), {
            detailCode: "CONFIRMATION_ALREADY_CONSUMED" as const,
          });
        }
        throw Object.assign(new Error("state_conflict"), {
          detailCode: "STATE_CONFLICT" as const,
        });
      }
      return;
    }

    if (confirmation.status === "requested") {
      this.ephemeral.set(confirmation.confirmationId, cloneConfirmation(confirmation));
      this.ephemeralIdempotency.set(
        confirmation.idempotencyKey,
        confirmation.confirmationId,
      );
      return;
    }

    this.ephemeral.delete(confirmation.confirmationId);
    this.ephemeralIdempotency.delete(confirmation.idempotencyKey);

    if (!DURABLE_STATUSES.has(confirmation.status)) {
      return;
    }

    this.store.db
      .prepare(
        `INSERT INTO oa_confirmations(
           confirmation_id, idempotency_key, project_id, status, payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(confirmation_id) DO UPDATE SET
           idempotency_key = excluded.idempotency_key,
           project_id = excluded.project_id,
           status = excluded.status,
           payload_json = excluded.payload_json,
           updated_at = excluded.updated_at`,
      )
      .run(
        confirmation.confirmationId,
        confirmation.idempotencyKey,
        confirmation.decisionRef?.startsWith("prj:")
          ? confirmation.decisionRef
          : null,
        confirmation.status,
        payload,
        now,
        now,
      );
  }
}
