/**
 * MW6 — Source-neutral External Source Intelligence contract (V3-F07).
 *
 * OpenAI hosted web_search is a provider primitive only — it MUST NOT appear
 * in SourceStrategyDecision. Provider binding lives in the runtime adapter.
 *
 * This contract remains adapter-ready for future Git/file/MCP sources
 * without inventing ExternalSourceTruth, a second Evidence model, or a
 * second provenance ledger.
 */

import type { ReadCoverageKind } from "./readCoverage";

/** Why a source lookup is (or is not) required for the claim/question. */
export type SourceNeedKind =
  | "none"
  | "repository_internal"
  | "external_corroboration"
  /** Material current/external claim that cannot be confidently classified as none. */
  | "unresolved_external";

/**
 * Semantic source-quality class (NOT acquisition channel / provider product).
 * Domain must influence this classification.
 */
export type SemanticSourceClass =
  | "none"
  | "repository_project"
  | "official_primary_authority"
  | "first_party_authoritative"
  | "reputable_secondary_corroboration"
  | "general_external_discovery"
  | "unspecified";

/**
 * How Studio intends to acquire sources — provider-neutral.
 * Mapping to OpenAI hosted web_search happens only in runtime binding.
 */
export type SourceAcquisitionRequirement =
  | "none"
  | "repository_tools"
  | "external_discovery";

/** Observable operation semantics — search ≠ read. */
export type SourceOperationKind =
  | "none"
  | "search"
  | "open_page"
  | "find_in_page"
  | "read"
  | "unavailable"
  | "unknown";

/** Planned operation intent for provenance (provider-neutral). */
export type SourceOperationIntent =
  | "none"
  | "discovery"
  | "content_verification"
  | "discovery_then_verification";

export type SourceFreshnessRequirement =
  | "not_applicable"
  | "preferred"
  | "required"
  | "unknown_allowed";

/**
 * Provider-neutral provenance plan (CR-03).
 * Does not encode OpenAI / web_search / product names.
 */
export type SourceProvenancePlan = {
  expectedSemanticClass: SemanticSourceClass;
  primaryPreferred: boolean;
  primaryRequired: boolean;
  corroborationExpected: boolean;
  freshnessRequirement: SourceFreshnessRequirement;
  operationIntent: SourceOperationIntent;
  /** Fail closed when required provenance cannot be established. */
  failClosedIfUnavailable: boolean;
};

/**
 * Channel/kind observed after acquisition (may name concrete adapters).
 * Distinct from SemanticSourceClass.
 */
export type SourceKind =
  | "git_local"
  | "github"
  | "web"
  | "none"
  | "unspecified";

/** Authoritative/relevant acquisition channel class for observations. */
export type SourceClass =
  | "repository"
  | "web"
  | "none"
  | "unspecified";

/** Provider identity for audit of observations — never elevates authority. */
export type SourceProviderId =
  | "none"
  | "openai_hosted_web_search"
  | "sfia_function_tool"
  | "deterministic_fixture";

export type SourceFreshnessState =
  | "observed"
  | "stale"
  | "unknown"
  | "not_applicable";

export type SourceAccessState =
  | "succeeded"
  | "partial"
  | "failed"
  | "denied"
  | "unavailable"
  | "absent";

/**
 * External/search coverage honesty.
 * Reuses MW4 ReadCoverageKind vocabulary where applicable.
 * `search_discovery` is intentionally distinct from any read completeness claim.
 */
export type SourceCoverageKind = ReadCoverageKind | "search_discovery";

export type SourceProvenanceState =
  | "provider_observed"
  | "fixture_observed"
  | "unobserved"
  | "fabricated_blocked";

/**
 * MW6-S01 — domain-aware source strategy decision (vendor-neutral).
 * MUST NOT contain OpenAI / hosted_web_search / webSearchTool / provider budget claims.
 */
export type SourceStrategyDecision = {
  sourceNeed: SourceNeedKind;
  domain: string;
  semanticSourceClass: SemanticSourceClass;
  acquisitionRequirement: SourceAcquisitionRequirement;
  plannedOperations: SourceOperationKind[];
  provenancePlan: SourceProvenancePlan;
  reasonCodes: string[];
};

/**
 * Runtime-only provider binding (NOT part of SourceStrategyDecision).
 * Thin mapping from acquisitionRequirement → authorized provider capability.
 */
export type SourceProviderBinding = {
  acquisitionRequirement: SourceAcquisitionRequirement;
  /** Authorized OpenAI hosted web_search attach for this turn. */
  attachOpenAiHostedWebSearch: boolean;
  /** Explicit: NoraTurnBudget does NOT bound hosted provider tools. */
  hostedProviderBudgetClaim: "not_bounded_by_nora_turn_budget";
};

/**
 * Normalized source observation — cognitive input only.
 * Never Evidence / Truth C / HumanDecision / Confirmation / GO Morris.
 */
export type SourceObservationFact = {
  sourceClass: SourceClass;
  sourceKind: SourceKind;
  operationKind: SourceOperationKind;
  provider: SourceProviderId;
  /** Stable identity when actually observed (URL, path, call id). */
  sourceIdentity?: string;
  url?: string;
  title?: string;
  query?: string;
  provenanceState: SourceProvenanceState;
  freshnessState: SourceFreshnessState;
  /** Only when freshness is honestly supportable. */
  freshnessObservedAt?: string;
  coverage: SourceCoverageKind;
  accessState: SourceAccessState;
  nonAuthoritative: true;
  /** Hostile/governance claim strings detected in source text (data only). */
  authorityEscalationAttempts: string[];
  /** Provider/raw audit crumbs — never treated as SFIA Evidence. */
  providerMetadata?: Record<string, unknown>;
};

export type Mw6SourceIntelligenceSurface = {
  strategy: SourceStrategyDecision;
  /** Runtime binding telemetry — separate from strategy contract. */
  providerBinding: SourceProviderBinding;
  observations: SourceObservationFact[];
  disclosure: string;
  narrativeCompatibility: {
    compatible: boolean;
    violations: string[];
  };
  /** True when any observation attempted SFIA authority escalation. */
  authorityIsolationHeld: boolean;
  /** Hosted web_search attached on this Option C Agent turn (runtime). */
  hostedWebSearchAttached: boolean;
  /** Observations came from deterministic fixture substitute (not REAL). */
  deterministicBoundaryUsed: boolean;
  proofCeiling: "deterministic";
};

export const MW6_SOURCE_AUTHORITY_BOUNDARY = {
  externalNotSystemInstruction: true,
  externalNotBuildDoctrine: true,
  externalNotExecutionContract: true,
  externalNotToolAuthorization: true,
  externalNotHumanDecision: true,
  externalNotConfirmation: true,
  externalNotTruthC: true,
  externalNotEvidenceAuthority: true,
  externalNotGoMorris: true,
  externalNotRuntimeAdoption: true,
  externalNotCognitiveStopBypass: true,
} as const;

/** Forbidden substrings in the provider-neutral strategy contract surface. */
export const SOURCE_STRATEGY_PROVIDER_LEAK_PATTERNS = [
  /openai/i,
  /hosted_web_search/i,
  /hostedWebSearch/i,
  /webSearchTool/i,
  /web_search/i,
] as const;
