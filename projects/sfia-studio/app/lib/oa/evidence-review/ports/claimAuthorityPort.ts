/**
 * Read-only claim authority checks — compatible with T-A3 AuthorityResolver.
 * Never trusts client authorityLevel / displayName.
 */
export type ClaimAuthorityVerifyRequest = {
  actorId: string;
  requiredLevel: "N1" | "N2" | "N3";
  scope: string;
  evidenceId?: string;
  requireMorrisGate?: boolean;
};

export type ClaimAuthorityVerifyResult = {
  ok: boolean;
  verifiedLevel?: "N1" | "N2" | "N3";
  canActAsMorris?: boolean;
  reason: string;
  evidenceId?: string;
};

export interface ClaimAuthorityPort {
  verify(request: ClaimAuthorityVerifyRequest): ClaimAuthorityVerifyResult;
}
