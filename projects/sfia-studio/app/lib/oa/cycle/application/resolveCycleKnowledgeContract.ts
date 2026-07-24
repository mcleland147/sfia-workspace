import type { ClockPort } from "@/lib/oa/doctrine";
import { createCycleError } from "../domain/errors";
import { isOaIdentifier } from "../domain/invariants";
import type {
  ResolveCycleKnowledgeContractRequest,
  ResolveCkcResult,
} from "../domain/types";
import type { CkcResolverPort } from "../ports/ckcResolver";
import type { CycleAuditPort } from "../ports/cycleAudit";

/**
 * ResolveCycleKnowledgeContract — guidance only.
 * Absent CKC returns unavailable/absent; never invents detailed content;
 * never blocks cycle creation solely for absent CKC; executionAuthority=false.
 */
export class ResolveCycleKnowledgeContract {
  constructor(
    private readonly resolver: CkcResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: CycleAuditPort,
  ) {}

  async execute(
    request: ResolveCycleKnowledgeContractRequest,
  ): Promise<ResolveCkcResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
    ): ResolveCkcResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId: request.correlationId,
        cycleTypeId: request.cycleTypeId,
        internalCauseRef,
      });
      this.audit.append({
        event: "oa.ckc.resolved",
        ts: timestamp,
        correlationId: request.correlationId,
        cycleTypeId: request.cycleTypeId,
        level: "absent",
        status: "unavailable",
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!isOaIdentifier(request.cycleTypeId)) {
        return fail("CYCLE_INVALID", "cycle_type_id_invalid");
      }

      const resolution = await this.resolver.resolve({
        cycleTypeId: request.cycleTypeId,
        resolvedAt: timestamp,
        correlationId: request.correlationId,
      });

      // Hard invariants — never execution authority; never v2.6 fallback.
      if (resolution.executionAuthority !== false && resolution.executionAuthority !== undefined) {
        return fail("CKC_UNAVAILABLE", "execution_authority_forbidden");
      }
      resolution.executionAuthority = false;
      if (
        resolution.fallbackPolicy !== "intra_v3_only" &&
        resolution.fallbackPolicy !== "none"
      ) {
        return fail("CKC_UNAVAILABLE", "fallback_policy_invalid");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.ckc.resolved",
        ts: timestamp,
        correlationId: request.correlationId,
        cycleTypeId: request.cycleTypeId,
        level: resolution.level,
        status: resolution.status,
        result: "ok",
        durationMs,
      });

      // Absent/unavailable is still a successful resolution result (guidance).
      return {
        ok: true,
        resolution: structuredClone(resolution),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
