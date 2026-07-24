import type { ClockPort } from "@/lib/oa/doctrine";
import { createCycleError } from "../domain/errors";
import type { GetCycleResult } from "../domain/types";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type { CycleRepositoryPort } from "../ports/cycleRepository";

export class GetCycle {
  constructor(
    private readonly cycles: CycleRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: CycleAuditPort,
  ) {}

  async execute(input: {
    cycleInstanceId: string;
    correlationId?: string;
  }): Promise<GetCycleResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const cycle = await this.cycles.findById(input.cycleInstanceId);
    if (!cycle) {
      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.cycle.load_failed",
        ts: timestamp,
        correlationId: input.correlationId,
        result: "error",
        detailCode: "CYCLE_NOT_FOUND",
        durationMs,
      });
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_NOT_FOUND",
          timestamp,
          correlationId: input.correlationId,
          cycleInstanceId: input.cycleInstanceId,
        }),
      };
    }
    return { ok: true, cycle };
  }
}
