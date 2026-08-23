import type { AuthorityVerificationReceipt } from "../domain/authorityVerificationReceipt";
import type { AuthorityVerificationReceiptRepositoryPort } from "../ports/authorityVerificationReceiptRepository";

/** Process-local append-only receipt store (tests / non-durable stacks). */
export class MemoryAuthorityVerificationReceiptRepository
  implements AuthorityVerificationReceiptRepositoryPort
{
  private readonly receipts: AuthorityVerificationReceipt[] = [];

  async append(receipt: AuthorityVerificationReceipt): Promise<void> {
    this.receipts.push(structuredClone(receipt));
  }

  async listByContract(
    executionContractId: string,
  ): Promise<AuthorityVerificationReceipt[]> {
    return structuredClone(
      this.receipts.filter(
        (r) => r.executionContractId === executionContractId,
      ),
    );
  }

  async listByProject(
    projectId: string,
  ): Promise<AuthorityVerificationReceipt[]> {
    return structuredClone(
      this.receipts.filter((r) => r.projectId === projectId),
    );
  }
}
