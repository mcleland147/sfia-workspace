/**
 * Minimal audit/observability sink for T-A4 ExecutionContract.
 * Events emitted AFTER successful persist (or on explicit denial for audit trail).
 */
export type ExecutionAuditEvent =
  | {
      event: "oa.execution_contract.built";
      ts: string;
      correlationId?: string;
      projectId: string;
      executionContractId: string;
      status: string;
      requiredAuthority: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
      reusedFromIdempotencyKey?: boolean;
    }
  | {
      event: "oa.execution_contract.validated";
      ts: string;
      correlationId?: string;
      projectId: string;
      executionContractId: string;
      status: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.execution_contract.confirmation_required";
      ts: string;
      correlationId?: string;
      projectId: string;
      executionContractId: string;
      status: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.execution_contract.confirmed";
      ts: string;
      correlationId?: string;
      projectId: string;
      executionContractId: string;
      confirmationId: string;
      status: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.execution_contract.superseded";
      ts: string;
      correlationId?: string;
      projectId: string;
      executionContractId: string;
      supersedesExecutionContractId: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.execution_contract.cancelled";
      ts: string;
      correlationId?: string;
      projectId: string;
      executionContractId: string;
      status: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.execution_contract.authorization_checked";
      ts: string;
      correlationId?: string;
      projectId: string;
      executionContractId: string;
      authorized: boolean;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.execution_contract.load_failed";
      ts: string;
      correlationId?: string;
      projectId?: string;
      executionContractId?: string;
      result: "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.authority.verified";
      ts: string;
      correlationId?: string;
      actorId: string;
      requiredLevel: string;
      scope: string;
      ok: boolean;
      verifiedLevel?: string;
      reason: string;
      canActAsMorris?: boolean;
      durationMs: number;
    };

export interface ExecutionAuditPort {
  append(event: ExecutionAuditEvent): void;
}
