import type { ClockPort } from "@/lib/oa/doctrine";
import { qualifyCycle } from "../domain/qualification";
import type {
  QualifyCycleRequest,
  QualifyCycleResult,
} from "../domain/types";
import type { CycleAuditPort } from "../ports/cycleAudit";

/**
 * Application use-case: QualifyCycle — recommendation only.
 * NEVER a Morris decision / gate consumption.
 */
export class QualifyCycle {
  constructor(
    private readonly clock: ClockPort,
    private readonly audit: CycleAuditPort,
  ) {}

  async execute(request: QualifyCycleRequest): Promise<QualifyCycleResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const result = qualifyCycle(request);
    this.audit.append({
      event: "oa.cycle.qualified",
      ts: timestamp,
      recommendedProfile: result.recommendation.recommendedProfile,
      result: "ok",
      durationMs: Date.now() - started,
    });
    return result;
  }
}
