/**
 * Minimal audit/observability sink for T-A3.
 * Events emitted AFTER successful persist (or on explicit denial for audit trail).
 */
export type DecisionAuditEvent =
  | {
      event: "oa.decision.recorded";
      ts: string;
      correlationId?: string;
      projectId: string;
      decisionId: string;
      subject: string;
      authority: string;
      status: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.decision.superseded";
      ts: string;
      correlationId?: string;
      projectId: string;
      decisionId: string;
      supersedesDecisionId: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.decision.load_failed";
      ts: string;
      correlationId?: string;
      projectId?: string;
      decisionId?: string;
      result: "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.confirmation.requested";
      ts: string;
      correlationId?: string;
      confirmationId: string;
      level: string;
      scope: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
      reusedFromIdempotencyKey?: boolean;
    }
  | {
      event: "oa.confirmation.granted";
      ts: string;
      correlationId?: string;
      confirmationId: string;
      level: string;
      verifiedLevel?: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.confirmation.refused";
      ts: string;
      correlationId?: string;
      confirmationId: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.confirmation.consumed";
      ts: string;
      correlationId?: string;
      confirmationId: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.confirmation.cancelled";
      ts: string;
      correlationId?: string;
      confirmationId: string;
      result: "ok" | "error";
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

export interface DecisionAuditPort {
  append(event: DecisionAuditEvent): void;
}
