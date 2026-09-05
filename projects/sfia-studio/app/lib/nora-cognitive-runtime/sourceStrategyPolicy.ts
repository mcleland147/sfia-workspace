/**
 * MW6-S01 — Domain-aware tool/source strategy (vendor-neutral).
 *
 * Pure policy: claim/question → source need → domain → semantic source class
 * → acquisition requirement → provenance plan.
 *
 * Does NOT encode OpenAI / hosted web_search / webSearchTool.
 * Provider binding is a separate runtime step (bindSourceProviderCapability).
 */

import type {
  SemanticSourceClass,
  SourceAcquisitionRequirement,
  SourceNeedKind,
  SourceOperationKind,
  SourceProvenancePlan,
  SourceProviderBinding,
  SourceStrategyDecision,
} from "./sourceIntelligenceContract";

export type SourceStrategyInput = {
  /** Last user claim / question text (cognitive input). */
  claimText?: string | null;
  /** Optional explicit domain label (tests / product). */
  domainHint?: string | null;
  /** Explicit need override when product already classified the need. */
  sourceNeedHint?: SourceNeedKind | null;
  /** When true, forces external corroboration need. */
  requiresExternalCorroboration?: boolean;
  /** When true, forces repository/internal need. */
  requiresRepositoryLookup?: boolean;
  /** When true, no source lookup. */
  noSourceLookup?: boolean;
};

const DOMAIN_PATTERNS: ReadonlyArray<{
  domain: string;
  re: RegExp;
}> = [
  {
    domain: "financial_markets",
    re: /\b(equity|equities|stock\s*price|market\s*cap|SEC|10-K|10-Q|earnings|ticker|NASDAQ|NYSE|bond\s*yield|filings?|CEO\s+of|public\s+compan(?:y|ies))\b/i,
  },
  {
    domain: "clinical_regulation",
    re: /\b(FDA|EMA|clinical\s*trial|pharmacovigilance|drug\s*label|ICH\s*GCP|regulatory\s+guidance)\b/i,
  },
  {
    domain: "climate_science",
    re: /\b(IPCC|climate\s*change|CO2\s*ppm|global\s*warming|paris\s*agreement)\b/i,
  },
  {
    domain: "software_engineering",
    re: /\b(TypeScript|React|API\s*contract|git\s*commit|pull\s*request|CI\s*pipeline|release\s+notes|SDK\s+version|vendor\s+docs?)\b/i,
  },
  {
    domain: "sfia_methodology",
    re: /\b(SFIA|HumanDecision|Truth\s*C|ExecutionContract|Build\s*Doctrine|Morris\s*GO)\b/i,
  },
  {
    domain: "public_policy",
    re: /\b(legislation|regulation|statut(?:e|ory)|gazette|parliamentary)\b/i,
  },
];

const EXTERNAL_NEED_RE =
  /\b(corroborat\w*|verify\s+(?:externally|online|from\s+the\s+web)|latest\s+(?:news|figure|price|guidance|release)|current\s+(?:market|FDA|IPCC|version|CEO|filing)|web\s+search|external\s+sources?)\b/i;

/** Current external/entity facts without requiring "corroborate/web search" lexicon. */
const CURRENT_EXTERNAL_FACT_RE =
  /\b(who\s+is\s+currently|current(?:ly)?\s+(?:the\s+)?(?:CEO|CFO|CTO|president|chair|governor)|as\s+of\s+(?:today|this\s+week|202\d)|what\s+is\s+the\s+current)\b/i;

const REPO_NEED_RE =
  /\b(in\s+(?:this|the)\s+repo(?:sitory)?|local\s+git|workspace\s+file|read\s+file|github\s+(?:issue|pr|pull)|CONTROL_TOWER|git_local_)\b/i;

const NO_LOOKUP_RE =
  /\b(no\s+source\s+lookup|do\s+not\s+search|from\s+memory\s+only|pure\s+reasoning)\b/i;

const PURE_REASONING_RE =
  /^\s*(what\s+is\s+\d+\s*[\+\-\*\/]\s*\d+|define\s+\w+\s+in\s+one\s+sentence)\s*\??\s*$/i;

export function inferClaimDomain(claimText: string, domainHint?: string | null): string {
  const hint = domainHint?.trim();
  if (hint) return hint;
  for (const entry of DOMAIN_PATTERNS) {
    if (entry.re.test(claimText)) return entry.domain;
  }
  return "general";
}

function resolveSourceNeed(input: SourceStrategyInput, claim: string): {
  need: SourceNeedKind;
  reasonCodes: string[];
} {
  const reasonCodes: string[] = [];

  if (input.noSourceLookup === true || NO_LOOKUP_RE.test(claim)) {
    reasonCodes.push("explicit_no_source_lookup");
    return { need: "none", reasonCodes };
  }
  if (PURE_REASONING_RE.test(claim)) {
    reasonCodes.push("pure_reasoning_no_source");
    return { need: "none", reasonCodes };
  }
  if (input.sourceNeedHint) {
    reasonCodes.push(`source_need_hint:${input.sourceNeedHint}`);
    return { need: input.sourceNeedHint, reasonCodes };
  }
  if (input.requiresExternalCorroboration === true) {
    reasonCodes.push("explicit_external_corroboration");
    return { need: "external_corroboration", reasonCodes };
  }
  if (input.requiresRepositoryLookup === true) {
    reasonCodes.push("explicit_repository_lookup");
    return { need: "repository_internal", reasonCodes };
  }
  if (EXTERNAL_NEED_RE.test(claim)) {
    reasonCodes.push("claim_signals_external_corroboration");
    return { need: "external_corroboration", reasonCodes };
  }
  if (CURRENT_EXTERNAL_FACT_RE.test(claim)) {
    // Fail toward source qualification — do not silently classify as none.
    reasonCodes.push("current_external_fact_unresolved_toward_qualification");
    return { need: "unresolved_external", reasonCodes };
  }
  if (REPO_NEED_RE.test(claim)) {
    reasonCodes.push("claim_signals_repository_internal");
    return { need: "repository_internal", reasonCodes };
  }

  reasonCodes.push("no_source_need_detected");
  return { need: "none", reasonCodes };
}

/**
 * Domain materially influences semantic source class + provenance (CR-02/CR-03).
 */
export function planForDomainNeed(
  domain: string,
  need: SourceNeedKind,
): {
  semanticSourceClass: SemanticSourceClass;
  acquisitionRequirement: SourceAcquisitionRequirement;
  plannedOperations: SourceOperationKind[];
  provenancePlan: SourceProvenancePlan;
} {
  if (need === "none") {
    return {
      semanticSourceClass: "none",
      acquisitionRequirement: "none",
      plannedOperations: ["none"],
      provenancePlan: {
        expectedSemanticClass: "none",
        primaryPreferred: false,
        primaryRequired: false,
        corroborationExpected: false,
        freshnessRequirement: "not_applicable",
        operationIntent: "none",
        failClosedIfUnavailable: false,
      },
    };
  }

  if (need === "repository_internal") {
    return {
      semanticSourceClass: "repository_project",
      acquisitionRequirement: "repository_tools",
      plannedOperations: ["search", "read"],
      provenancePlan: {
        expectedSemanticClass: "repository_project",
        primaryPreferred: true,
        primaryRequired: true,
        corroborationExpected: false,
        freshnessRequirement: "not_applicable",
        operationIntent: "content_verification",
        failClosedIfUnavailable: true,
      },
    };
  }

  // external_corroboration | unresolved_external
  switch (domain) {
    case "clinical_regulation":
      return {
        semanticSourceClass: "official_primary_authority",
        acquisitionRequirement: "external_discovery",
        plannedOperations: ["search"],
        provenancePlan: {
          expectedSemanticClass: "official_primary_authority",
          primaryPreferred: true,
          primaryRequired: true,
          corroborationExpected: true,
          freshnessRequirement: "required",
          operationIntent: "discovery_then_verification",
          failClosedIfUnavailable: true,
        },
      };
    case "financial_markets":
      return {
        semanticSourceClass: "official_primary_authority",
        acquisitionRequirement: "external_discovery",
        plannedOperations: ["search"],
        provenancePlan: {
          expectedSemanticClass: "official_primary_authority",
          primaryPreferred: true,
          primaryRequired: true,
          corroborationExpected: false,
          freshnessRequirement: "required",
          operationIntent: "discovery_then_verification",
          failClosedIfUnavailable: true,
        },
      };
    case "software_engineering":
      return {
        semanticSourceClass: "first_party_authoritative",
        acquisitionRequirement: "external_discovery",
        plannedOperations: ["search"],
        provenancePlan: {
          expectedSemanticClass: "first_party_authoritative",
          primaryPreferred: true,
          primaryRequired: false,
          corroborationExpected: false,
          freshnessRequirement: "required",
          operationIntent: "discovery",
          failClosedIfUnavailable: true,
        },
      };
    case "climate_science":
      return {
        semanticSourceClass: "reputable_secondary_corroboration",
        acquisitionRequirement: "external_discovery",
        plannedOperations: ["search"],
        provenancePlan: {
          expectedSemanticClass: "reputable_secondary_corroboration",
          primaryPreferred: true,
          primaryRequired: false,
          corroborationExpected: true,
          freshnessRequirement: "preferred",
          operationIntent: "discovery",
          failClosedIfUnavailable: true,
        },
      };
    case "public_policy":
      return {
        semanticSourceClass: "official_primary_authority",
        acquisitionRequirement: "external_discovery",
        plannedOperations: ["search"],
        provenancePlan: {
          expectedSemanticClass: "official_primary_authority",
          primaryPreferred: true,
          primaryRequired: true,
          corroborationExpected: false,
          freshnessRequirement: "required",
          operationIntent: "discovery_then_verification",
          failClosedIfUnavailable: true,
        },
      };
    default:
      return {
        semanticSourceClass:
          need === "unresolved_external"
            ? "general_external_discovery"
            : "general_external_discovery",
        acquisitionRequirement: "external_discovery",
        plannedOperations: ["search"],
        provenancePlan: {
          expectedSemanticClass: "general_external_discovery",
          primaryPreferred: false,
          primaryRequired: false,
          corroborationExpected: need === "unresolved_external",
          freshnessRequirement:
            need === "unresolved_external" ? "required" : "preferred",
          operationIntent: "discovery",
          failClosedIfUnavailable: true,
        },
      };
  }
}

/**
 * Decide source strategy for the claim/question.
 * Question existence alone never implies external discovery.
 */
export function decideSourceStrategy(
  input: SourceStrategyInput = {},
): SourceStrategyDecision {
  const claim = (input.claimText ?? "").trim();
  const { need, reasonCodes } = resolveSourceNeed(input, claim);
  const domain = inferClaimDomain(claim, input.domainHint);
  const plan = planForDomainNeed(domain, need);

  return {
    sourceNeed: need,
    domain,
    semanticSourceClass: plan.semanticSourceClass,
    acquisitionRequirement: plan.acquisitionRequirement,
    plannedOperations: plan.plannedOperations,
    provenancePlan: plan.provenancePlan,
    reasonCodes: [...reasonCodes, `domain:${domain}`],
  };
}

/**
 * Thin runtime binding: map provider-neutral acquisition to authorized capability.
 * This is the ONLY place OpenAI hosted web_search attach is decided from strategy.
 */
export function bindSourceProviderCapability(
  strategy: SourceStrategyDecision,
): SourceProviderBinding {
  return {
    acquisitionRequirement: strategy.acquisitionRequirement,
    attachOpenAiHostedWebSearch:
      strategy.acquisitionRequirement === "external_discovery",
    hostedProviderBudgetClaim: "not_bounded_by_nora_turn_budget",
  };
}

export function buildSourceStrategyDisclosure(
  decision: SourceStrategyDecision,
): string {
  const p = decision.provenancePlan;
  return [
    "=== SOURCE STRATEGY (MW6-S01) ===",
    `Source need: ${decision.sourceNeed}`,
    `Domain: ${decision.domain}`,
    `Semantic source class: ${decision.semanticSourceClass}`,
    `Acquisition requirement: ${decision.acquisitionRequirement}`,
    `Planned operations: ${decision.plannedOperations.join(", ")}`,
    `Provenance: primaryPreferred=${p.primaryPreferred} primaryRequired=${p.primaryRequired} corroborationExpected=${p.corroborationExpected}`,
    `Freshness requirement: ${p.freshnessRequirement}`,
    `Operation intent: ${p.operationIntent}`,
    `Fail-closed if unavailable: ${p.failClosedIfUnavailable}`,
    "External observations are non-authoritative cognitive input — not Evidence, Truth C, HumanDecision, Confirmation, or GO Morris.",
    `Reasons: ${decision.reasonCodes.join("; ")}`,
  ].join("\n");
}

export function appendSourceStrategyDisclosure(
  systemInstructions: string,
  decision: SourceStrategyDecision | null | undefined,
): string {
  if (!decision) return systemInstructions;
  return `${systemInstructions.trim()}\n\n${buildSourceStrategyDisclosure(decision)}`;
}

/** Structural neutrality proof helper for D2. */
export function strategyContractLeaksProviderIdentity(
  decision: SourceStrategyDecision,
): string[] {
  const blob = JSON.stringify(decision);
  const leaks: string[] = [];
  if (/openai/i.test(blob)) leaks.push("openai");
  if (/hosted_web_search/i.test(blob)) leaks.push("hosted_web_search");
  if (/hostedWebSearch/i.test(blob)) leaks.push("hostedWebSearch");
  if (/webSearchTool/i.test(blob)) leaks.push("webSearchTool");
  if (/web_search/i.test(blob)) leaks.push("web_search");
  if ("attachHostedWebSearch" in (decision as object)) {
    leaks.push("attachHostedWebSearch");
  }
  if ("hostedWebSearchBudgetClaim" in (decision as object)) {
    leaks.push("hostedWebSearchBudgetClaim");
  }
  return leaks;
}
