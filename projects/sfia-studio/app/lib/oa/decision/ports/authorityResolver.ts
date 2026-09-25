import type {
  AuthorityEvidence,
  VerifyAuthorityRequest,
  VerifyAuthorityResult,
} from "../domain/types";

/**
 * AuthorityResolverPort — sole authority of truth for N1/N2/N3 and Pilot/Morris gates.
 *
 * NEVER trust:
 * - request.authorityLevel / ActorReference.authorityLevel from client
 * - displayName === "Morris" | "Pilote"
 * - actorId containing "morris" | "pilot"
 *
 * N3 verified level does NOT imply canActAsPilot or canActAsMorris.
 * Pilot gate requires explicit `canActAsPilot: true`.
 * Morris gate requires explicit `canActAsMorris: true`.
 */
export interface AuthorityResolverPort {
  register(evidence: AuthorityEvidence): void;
  getEvidence(evidenceId: string): AuthorityEvidence | null;
  listByActor(actorId: string): AuthorityEvidence[];
  verify(request: VerifyAuthorityRequest): VerifyAuthorityResult;
}
