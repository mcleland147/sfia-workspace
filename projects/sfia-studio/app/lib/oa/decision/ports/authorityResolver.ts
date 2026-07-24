import type {
  AuthorityEvidence,
  VerifyAuthorityRequest,
  VerifyAuthorityResult,
} from "../domain/types";

/**
 * AuthorityResolverPort — sole authority of truth for N1/N2/N3 and Morris gate.
 *
 * NEVER trust:
 * - request.authorityLevel / ActorReference.authorityLevel from client
 * - displayName === "Morris"
 * - actorId containing "morris"
 *
 * N3 verified level does NOT imply canActAsMorris. Morris gate requires
 * explicit `canActAsMorris: true` on AuthorityEvidence (or dedicated grant).
 */
export interface AuthorityResolverPort {
  register(evidence: AuthorityEvidence): void;
  getEvidence(evidenceId: string): AuthorityEvidence | null;
  listByActor(actorId: string): AuthorityEvidence[];
  verify(request: VerifyAuthorityRequest): VerifyAuthorityResult;
}
