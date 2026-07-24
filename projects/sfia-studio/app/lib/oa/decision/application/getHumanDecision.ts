import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import { createDecisionError } from "../domain/errors";
import type {
  GetDecisionResult,
  GetHumanDecisionRequest,
} from "../domain/types";
import type { DecisionAuditPort } from "../ports/decisionAudit";
import type { DecisionRepositoryPort } from "../ports/decisionRepository";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

export class GetHumanDecision {
  constructor(
    private readonly decisions: DecisionRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: DecisionAuditPort,
  ) {}

  async execute(request: GetHumanDecisionRequest): Promise<GetDecisionResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const found = await this.decisions.findById(request.decisionId);
    if (!found) {
      const durationMs = Date.now() - started;
      const error = createDecisionError({
        detailCode: "DECISION_NOT_FOUND",
        timestamp,
        correlationId,
        decisionId: request.decisionId,
      });
      this.audit.append({
        event: "oa.decision.load_failed",
        ts: timestamp,
        correlationId,
        decisionId: request.decisionId,
        result: "error",
        detailCode: "DECISION_NOT_FOUND",
        durationMs,
      });
      return { ok: false, error };
    }

    return { ok: true, decision: structuredClone(found) };
  }
}
