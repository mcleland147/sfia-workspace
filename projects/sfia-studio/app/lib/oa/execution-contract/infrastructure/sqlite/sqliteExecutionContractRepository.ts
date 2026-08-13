import type { ExecutionContract } from "../../domain/types";
import type { ExecutionContractRepositoryPort } from "../../ports/executionContractRepository";
import type { ProductSqliteHandle } from "@/lib/oa/project";

type ContractRow = {
  execution_contract_id: string;
  project_id: string;
  cycle_instance_id: string | null;
  status: string;
  idempotency_key: string;
  semantic_fingerprint: string;
  version: number;
  payload_json: string;
};

function cloneContract(contract: ExecutionContract): ExecutionContract {
  return structuredClone(contract);
}

/**
 * Durable ExecutionContract repository on Product SQLite (M3).
 */
export class SqliteExecutionContractRepository
  implements ExecutionContractRepositoryPort
{
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(
    executionContractId: string,
  ): Promise<ExecutionContract | null> {
    const row = this.store.db
      .prepare(
        `SELECT execution_contract_id, project_id, cycle_instance_id, status,
                idempotency_key, semantic_fingerprint, version, payload_json
         FROM oa_execution_contracts WHERE execution_contract_id = ?`,
      )
      .get(executionContractId) as ContractRow | undefined;
    if (!row) return null;
    return cloneContract(JSON.parse(row.payload_json) as ExecutionContract);
  }

  async findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<ExecutionContract | null> {
    const row = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_execution_contracts WHERE idempotency_key = ?`,
      )
      .get(idempotencyKey) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return cloneContract(JSON.parse(row.payload_json) as ExecutionContract);
  }

  async exists(executionContractId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(
        `SELECT 1 AS ok FROM oa_execution_contracts WHERE execution_contract_id = ?`,
      )
      .get(executionContractId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async save(contract: ExecutionContract): Promise<void> {
    if (this.store.failNextSave === "contract") {
      this.store.failNextSave = null;
      throw new Error("forced_execution_contract_save_failure");
    }
    const fingerprint = contract.semanticFingerprint ?? "";
    const now =
      contract.provenance?.timestamp ?? new Date().toISOString();
    const payload = JSON.stringify(cloneContract(contract));
    this.store.db
      .prepare(
        `INSERT INTO oa_execution_contracts(
           execution_contract_id, project_id, cycle_instance_id, status,
           idempotency_key, semantic_fingerprint, version, payload_json,
           created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(execution_contract_id) DO UPDATE SET
           project_id = excluded.project_id,
           cycle_instance_id = excluded.cycle_instance_id,
           status = excluded.status,
           idempotency_key = excluded.idempotency_key,
           semantic_fingerprint = excluded.semantic_fingerprint,
           version = excluded.version,
           payload_json = excluded.payload_json,
           updated_at = excluded.updated_at`,
      )
      .run(
        contract.executionContractId,
        contract.projectId,
        contract.cycleInstanceId ?? null,
        contract.status,
        contract.idempotencyKey,
        fingerprint,
        contract.version,
        payload,
        now,
        now,
      );
  }

  async listByProject(projectId: string): Promise<ExecutionContract[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_execution_contracts
         WHERE project_id = ?
         ORDER BY created_at ASC, execution_contract_id ASC`,
      )
      .all(projectId) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneContract(JSON.parse(row.payload_json) as ExecutionContract),
    );
  }

  async listSuperseding(
    executionContractId: string,
  ): Promise<ExecutionContract[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_execution_contracts`,
      )
      .all() as Array<{ payload_json: string }>;
    const out: ExecutionContract[] = [];
    for (const row of rows) {
      const c = cloneContract(JSON.parse(row.payload_json) as ExecutionContract);
      if (c.supersedesExecutionContractId === executionContractId) {
        out.push(c);
      }
    }
    return out;
  }
}
