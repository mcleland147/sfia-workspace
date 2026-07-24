import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import { createDecisionError } from "../domain/errors";
import type {
  ListDecisionHistoryRequest,
  ListDecisionsResult,
} from "../domain/types";
import type { DecisionAuditPort } from "../ports/decisionAudit";
import type { DecisionRepositoryPort } from "../ports/decisionRepository";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

export class ListDecisionHistory {
  constructor(
    private readonly decisions: DecisionRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: DecisionAuditPort,
  ) {}

  async execute(
    request: ListDecisionHistoryRequest,
  ): Promise<ListDecisionsResult> {
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    if (!request.projectId && !request.subject) {
      return {
        ok: false,
        error: createDecisionError({
          detailCode: "DECISION_INVALID",
          timestamp,
          correlationId,
          internalCauseRef: "project_or_subject_required",
        }),
      };
    }

    let decisions;
    if (request.projectId && request.subject) {
      const byProject = await this.decisions.listByProject(request.projectId);
      decisions = byProject.filter((d) => d.subject === request.subject);
    } else if (request.projectId) {
      decisions = await this.decisions.listByProject(request.projectId);
    } else {
      decisions = await this.decisions.listBySubject(request.subject!);
    }

    void this.audit;
    return { ok: true, decisions: structuredClone(decisions) };
  }
}
