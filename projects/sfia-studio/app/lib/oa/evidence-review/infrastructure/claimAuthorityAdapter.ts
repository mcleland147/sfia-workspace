/**
 * Adapts T-A3 AuthorityResolverPort for ClaimEvaluation (read-only verify).
 * Does not mutate T-A3 contracts.
 */
import type { AuthorityResolverPort } from "@/lib/oa/decision/ports/authorityResolver";
import type {
  ClaimAuthorityPort,
  ClaimAuthorityVerifyRequest,
  ClaimAuthorityVerifyResult,
} from "../ports/claimAuthorityPort";

export class ClaimAuthorityAdapter implements ClaimAuthorityPort {
  constructor(private readonly resolver: AuthorityResolverPort) {}

  verify(request: ClaimAuthorityVerifyRequest): ClaimAuthorityVerifyResult {
    const result = this.resolver.verify({
      actorId: request.actorId,
      requiredLevel: request.requiredLevel,
      scope: request.scope,
      evidenceId: request.evidenceId,
      requireMorrisGate: request.requireMorrisGate,
    });
    return {
      ok: result.ok,
      verifiedLevel: result.verifiedLevel,
      canActAsMorris: result.canActAsMorris,
      reason: result.reason,
      evidenceId: result.evidenceId,
    };
  }
}

/**
 * Test-only fake — never trusts client authorityLevel; uses explicit grants.
 */
export class FakeClaimAuthority implements ClaimAuthorityPort {
  private grants = new Map<
    string,
    {
      level: "N1" | "N2" | "N3";
      scope: string;
      canActAsMorris?: boolean;
    }
  >();

  grant(input: {
    actorId: string;
    level: "N1" | "N2" | "N3";
    scope: string;
    canActAsMorris?: boolean;
  }): void {
    this.grants.set(`${input.actorId}::${input.scope}`, {
      level: input.level,
      scope: input.scope,
      canActAsMorris: input.canActAsMorris,
    });
  }

  verify(request: ClaimAuthorityVerifyRequest): ClaimAuthorityVerifyResult {
    const key = `${request.actorId}::${request.scope}`;
    const grant = this.grants.get(key);
    if (!grant) {
      return { ok: false, reason: "no_evidence" };
    }
    const rank = { N1: 1, N2: 2, N3: 3 } as const;
    if (rank[grant.level] < rank[request.requiredLevel]) {
      return {
        ok: false,
        reason: "level_insufficient",
        verifiedLevel: grant.level,
      };
    }
    if (request.requireMorrisGate && grant.canActAsMorris !== true) {
      return {
        ok: false,
        reason: "morris_gate_denied",
        verifiedLevel: grant.level,
      };
    }
    return {
      ok: true,
      verifiedLevel: grant.level,
      canActAsMorris: grant.canActAsMorris === true,
      reason: "verified",
    };
  }
}
