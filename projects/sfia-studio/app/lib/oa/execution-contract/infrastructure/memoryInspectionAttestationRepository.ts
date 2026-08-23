import type { InspectionAttestation } from "../domain/inspectionAttestation";
import type { InspectionAttestationRepositoryPort } from "../ports/inspectionAttestationRepository";

/** Process-local append-only attestation store (tests / non-durable stacks). */
export class MemoryInspectionAttestationRepository
  implements InspectionAttestationRepositoryPort
{
  private readonly byContract = new Map<string, InspectionAttestation[]>();

  async append(attestation: InspectionAttestation): Promise<void> {
    const list = this.byContract.get(attestation.executionContractId) ?? [];
    list.push(structuredClone(attestation));
    this.byContract.set(attestation.executionContractId, list);
  }

  async listByContract(
    executionContractId: string,
  ): Promise<InspectionAttestation[]> {
    return structuredClone(this.byContract.get(executionContractId) ?? []);
  }
}
