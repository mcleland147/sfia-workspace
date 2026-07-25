/**
 * Shared authority helpers for T-A4 — consume T-A3 AuthorityResolverPort only.
 * MORRIS = N3 verified ∧ canActAsMorris=true. N3 ≠ Morris.
 */
import type {
  AuthorityLevel,
  AuthorityResolverPort,
  VerifyAuthorityResult,
} from "@/lib/oa/decision";
import type { AuthorityClass } from "../domain/types";

export function authorityClassToVerify(input: {
  requiredAuthority: AuthorityClass;
  actorId: string;
  scope: string;
  evidenceId?: string;
  claimedAuthorityLevel?: string;
  displayName?: string;
}): {
  actorId: string;
  requiredLevel: AuthorityLevel;
  scope: string;
  evidenceId?: string;
  requireMorrisGate?: boolean;
  authorityLevel?: AuthorityLevel | "none";
  displayName?: string;
} {
  const requireMorrisGate = input.requiredAuthority === "MORRIS";
  const requiredLevel: AuthorityLevel =
    input.requiredAuthority === "MORRIS"
      ? "N3"
      : (input.requiredAuthority as AuthorityLevel);

  return {
    actorId: input.actorId,
    requiredLevel,
    scope: input.scope,
    evidenceId: input.evidenceId,
    requireMorrisGate,
    // Hostile injection deliberately passed through so resolver can ignore it.
    authorityLevel: input.claimedAuthorityLevel as
      | AuthorityLevel
      | "none"
      | undefined,
    displayName: input.displayName,
  };
}

export function verifyRequiredAuthority(
  authority: AuthorityResolverPort,
  input: {
    requiredAuthority: AuthorityClass;
    actorId: string;
    scope: string;
    evidenceId?: string;
    claimedAuthorityLevel?: string;
    displayName?: string;
  },
): VerifyAuthorityResult {
  return authority.verify(authorityClassToVerify(input));
}
