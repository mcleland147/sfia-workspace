import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type {
  VerifyAuthorityRequest,
  VerifyAuthorityUseCaseResult,
} from "../domain/types";
import type { AuthorityResolverPort } from "../ports/authorityResolver";
import type { DecisionAuditPort } from "../ports/decisionAudit";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

/**
 * VerifyAuthority — thin use-case over AuthorityResolverPort for audited checks.
 * Client-supplied authorityLevel / displayName are never trusted.
 */
export class VerifyAuthority {
  constructor(
    private readonly authority: AuthorityResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: DecisionAuditPort,
  ) {}

  async execute(
    request: VerifyAuthorityRequest & { correlationId?: string },
  ): Promise<VerifyAuthorityUseCaseResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const result = this.authority.verify(request);
    const durationMs = Date.now() - started;

    this.audit.append({
      event: "oa.authority.verified",
      ts: timestamp,
      correlationId,
      actorId: request.actorId,
      requiredLevel: request.requiredLevel,
      scope: request.scope,
      ok: result.ok,
      verifiedLevel: result.verifiedLevel,
      reason: result.reason,
      canActAsMorris: result.canActAsMorris,
      durationMs,
    });

    return { ok: true, result, durationMs };
  }
}
