/**
 * SFIA Studio authentication / identity foundation (Better Auth + GitHub).
 *
 * Public S1 issuance surface: issueS1AuthorityEvidence ONLY.
 * buildValidatedS1Evidence / registerS1EvidenceImmutable are NOT exported (B1).
 */

export * from "./constants";
export * from "./allowlist";
export * from "./actorMapping";
export {
  createSfiaAuth,
  getSfiaAuth,
  resetSfiaAuthSingletonForTests,
  assertStatelessAuthConfig,
  type CreateSfiaAuthOptions,
  type SfiaAuth,
} from "./auth";
export {
  resolveCurrentAuthenticatedPilote,
  requireCurrentPilote,
  type ResolveCurrentPiloteInput,
  type ResolveCurrentPiloteResult,
} from "./resolveCurrentPilote";
export {
  readSessionBoundGithubProviderAccount,
  type BoundGithubProviderAccount,
  type ReadBoundGithubAccountResult,
} from "./providerAccountBinding";
export {
  resolvePiloteS1AuthorityLevel,
  resolvePiloteS1AuthorityFromGovernedContract,
  resolvePiloteS1AuthorityFromGovernedEffects,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  MORRIS_GATE_REQUIRED,
  MORRIS_AUTHORITY_NOT_AVAILABLE,
  AUTHORITY_REQUIREMENT_UNTRUSTED,
  AUTHORITY_REQUIREMENT_MISMATCH,
  AUTHORITY_UNRESOLVED,
  CONTRACT_BINDING_MISMATCH,
  CONTRACT_CONTEXT_REQUIRED,
  PILOTE_S1_POLICY_ID,
  MW6_EXTERNAL_DISCOVERY_POLICY_ID,
  MW6_EXTERNAL_DISCOVERY_EFFECT_CLASS,
  MW6_EXTERNAL_DISCOVERY_ACTION,
  MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY,
  projectRequiredAuthorityForExternalDiscovery,
  type PiloteS1AuthorityPolicyResult,
  type GovernedEffectsAuthorityInput,
  type AuthS1GovernedContractContext,
} from "./piloteS1AuthorityPolicy";
export {
  issueS1AuthorityEvidence,
  validateS1EvidenceLifetime,
  type IssueS1AuthorityEvidenceInput,
  type IssueS1AuthorityEvidenceResult,
} from "./s1Authority";
export {
  buildMw6ExternalDiscoveryContractSemantic,
  buildMw6ExternalDiscoveryGovernedEffects,
  buildMw6CurrentExternalDiscoveryIntent,
  assertMw6ExternalDiscoveryEffectiveHumanAuthorization,
  computeMw6CurrentIntentFingerprint,
  issueMw6ExternalDiscoveryS1,
  type Mw6ExternalDiscoveryContractInput,
  type Mw6AuthorizedExternalDiscoveryContract,
  type IssueMw6ExternalDiscoveryS1Input,
} from "./mw6ExternalDiscoveryBinding";
