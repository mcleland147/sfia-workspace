import type { AuthorityVerificationReceipt } from "../domain/authorityVerificationReceipt";

/**
 * Append-only audit store for AuthorityVerificationReceipts (TD-C6-03).
 * No update and no delete: a receipt is a historical evaluation snapshot.
 */
export interface AuthorityVerificationReceiptRepositoryPort {
  append(receipt: AuthorityVerificationReceipt): Promise<void>;
  listByContract(
    executionContractId: string,
  ): Promise<AuthorityVerificationReceipt[]>;
  listByProject(projectId: string): Promise<AuthorityVerificationReceipt[]>;
}
