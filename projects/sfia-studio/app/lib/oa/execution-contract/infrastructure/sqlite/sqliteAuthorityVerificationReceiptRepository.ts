import type { ProductSqliteHandle } from "@/lib/oa/project";
import type { AuthorityVerificationReceipt } from "../../domain/authorityVerificationReceipt";
import type { AuthorityVerificationReceiptRepositoryPort } from "../../ports/authorityVerificationReceiptRepository";

/**
 * Durable append-only AuthorityVerificationReceipt store on Product SQLite
 * (M7). Insert-only so a replayed receiptId cannot rewrite audit history.
 */
export class SqliteAuthorityVerificationReceiptRepository
  implements AuthorityVerificationReceiptRepositoryPort
{
  constructor(private readonly store: ProductSqliteHandle) {}

  async append(receipt: AuthorityVerificationReceipt): Promise<void> {
    const now = new Date().toISOString();
    this.store.db
      .prepare(
        `INSERT INTO oa_authority_verification_receipts(
           receipt_id, execution_contract_id, contract_version,
           semantic_fingerprint, project_id, actor_id, outcome, verified_at,
           payload_json, created_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(receipt_id) DO NOTHING`,
      )
      .run(
        receipt.receiptId,
        receipt.executionContractId,
        receipt.contractVersion,
        receipt.semanticFingerprint ?? "",
        receipt.projectId,
        receipt.actor.actorId,
        receipt.outcome,
        receipt.verifiedAt,
        JSON.stringify(receipt),
        now,
      );
  }

  async listByContract(
    executionContractId: string,
  ): Promise<AuthorityVerificationReceipt[]> {
    return this.read(
      `SELECT payload_json FROM oa_authority_verification_receipts
       WHERE execution_contract_id = ? ORDER BY verified_at ASC`,
      executionContractId,
    );
  }

  async listByProject(
    projectId: string,
  ): Promise<AuthorityVerificationReceipt[]> {
    return this.read(
      `SELECT payload_json FROM oa_authority_verification_receipts
       WHERE project_id = ? ORDER BY verified_at ASC`,
      projectId,
    );
  }

  private read(
    sql: string,
    param: string,
  ): AuthorityVerificationReceipt[] {
    const rows = this.store.db.prepare(sql).all(param) as Array<{
      payload_json: string;
    }>;
    return rows.map(
      (row) => JSON.parse(row.payload_json) as AuthorityVerificationReceipt,
    );
  }
}
