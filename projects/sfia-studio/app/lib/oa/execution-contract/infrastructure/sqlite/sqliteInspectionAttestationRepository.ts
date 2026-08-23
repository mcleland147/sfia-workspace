import type { ProductSqliteHandle } from "@/lib/oa/project";
import type { InspectionAttestation } from "../../domain/inspectionAttestation";
import type { InspectionAttestationRepositoryPort } from "../../ports/inspectionAttestationRepository";

/**
 * Durable append-only InspectionAttestation store on Product SQLite (M7).
 * Insert-only: a replayed attestationId is ignored rather than overwritten so
 * the audit trail can never be rewritten.
 */
export class SqliteInspectionAttestationRepository
  implements InspectionAttestationRepositoryPort
{
  constructor(private readonly store: ProductSqliteHandle) {}

  async append(attestation: InspectionAttestation): Promise<void> {
    const now = new Date().toISOString();
    this.store.db
      .prepare(
        `INSERT INTO oa_ec_inspection_attestations(
           attestation_id, execution_contract_id, contract_version,
           semantic_fingerprint, project_id, actor_id, inspected_at,
           payload_json, created_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(attestation_id) DO NOTHING`,
      )
      .run(
        attestation.attestationId,
        attestation.executionContractId,
        attestation.contractVersion,
        attestation.semanticFingerprint,
        attestation.projectId ?? null,
        attestation.actor.actorId,
        attestation.inspectedAt,
        JSON.stringify(attestation),
        now,
      );
  }

  async listByContract(
    executionContractId: string,
  ): Promise<InspectionAttestation[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_ec_inspection_attestations
         WHERE execution_contract_id = ?
         ORDER BY inspected_at ASC`,
      )
      .all(executionContractId) as Array<{ payload_json: string }>;
    return rows.map(
      (row) => JSON.parse(row.payload_json) as InspectionAttestation,
    );
  }
}
