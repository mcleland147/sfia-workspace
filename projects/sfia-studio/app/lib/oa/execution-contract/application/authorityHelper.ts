/**
 * Shared authority helpers for T-A4 — consume T-A3 AuthorityResolverPort only.
 * MORRIS = N3 verified ∧ canActAsMorris=true. N3 ≠ Morris.
 *
 * Auth S1 binding adaptation (reuse, not new engine):
 * BETTER_AUTH_GITHUB_MULTI_USER_S1 evidence uses AuthorityEvidence.scope =
 * computeInspectionFingerprint(contract) — existing EC inspection primitive
 * (excludes confirmationRef / immutableAfterConfirm for lifecycle stability).
 */
import type {
  AuthorityEvidence,
  AuthorityLevel,
  AuthorityResolverPort,
  VerifyAuthorityResult,
} from "@/lib/oa/decision";
import { computeInspectionFingerprint } from "../domain/inspectionAttestation";
import type { AuthorityClass } from "../domain/types";

/** Must match lib/auth/constants BETTER_AUTH_GITHUB_MULTI_USER_S1 (no auth import). */
export const AUTH_S1_EVIDENCE_SOURCE = "BETTER_AUTH_GITHUB_MULTI_USER_S1" as const;

export type AuthS1BindingContractSemantic = Parameters<
  typeof computeInspectionFingerprint
>[0];

/**
 * Resolve the scope string passed to AuthorityResolver.verify for a contract.
 * Auth-origin S1 evidence is bound to the inspection semantic fingerprint.
 */
export function resolveExecutionAuthorityVerifyScope(input: {
  contractScope: string;
  evidence: AuthorityEvidence | null | undefined;
  /**
   * Server-owned contract semantic material for Auth S1 binding recomputation.
   * Required whenever evidence.source is Auth S1; never trusted from client alone.
   */
  contractSemantic?: AuthS1BindingContractSemantic | null;
}): string {
  if (input.evidence?.source === AUTH_S1_EVIDENCE_SOURCE) {
    if (!input.contractSemantic) {
      // Fail-closed: never match a legitimate evidence.scope.
      return "auth-s1-binding:unavailable";
    }
    return computeInspectionFingerprint(input.contractSemantic);
  }
  return input.contractScope;
}

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
