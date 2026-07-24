import type { ClockPort } from "@/lib/oa/doctrine";
import { createCycleError } from "../domain/errors";
import type { GetEpistemicResult } from "../domain/types";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type { EpistemicRepositoryPort } from "../ports/epistemicRepository";

export class GetEpistemicState {
  constructor(
    private readonly epistemic: EpistemicRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: CycleAuditPort,
  ) {}

  async execute(input: {
    projectId: string;
    correlationId?: string;
  }): Promise<GetEpistemicResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    try {
      const items = await this.epistemic.listByProject(input.projectId);
      return {
        ok: true,
        state: {
          projectId: input.projectId,
          items,
        },
      };
    } catch {
      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.cycle.load_failed",
        ts: timestamp,
        correlationId: input.correlationId,
        projectId: input.projectId,
        result: "error",
        detailCode: "PERSISTENCE_FAILURE",
        durationMs,
      });
      return {
        ok: false,
        error: createCycleError({
          detailCode: "PERSISTENCE_FAILURE",
          timestamp,
          correlationId: input.correlationId,
          projectId: input.projectId,
        }),
      };
    }
  }
}
