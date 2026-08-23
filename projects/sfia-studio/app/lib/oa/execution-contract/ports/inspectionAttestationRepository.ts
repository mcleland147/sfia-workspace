import type { InspectionAttestation } from "../domain/inspectionAttestation";

/**
 * Append-only audit store for ExecutionContract inspection attestations.
 * No update and no delete: an attestation is a historical fact.
 */
export interface InspectionAttestationRepositoryPort {
  append(attestation: InspectionAttestation): Promise<void>;
  listByContract(
    executionContractId: string,
  ): Promise<InspectionAttestation[]>;
}
