/**
 * MW6 hosted external discovery — Auth S1 binding helpers.
 *
 * Reuses existing:
 * - projectRequiredAuthorityForExternalDiscovery / effects projection (N2)
 * - issueS1AuthorityEvidence
 * - computeInspectionFingerprint (via S1 policy)
 * - AuthorityResolverPort
 * - isExecutionReadyStatus / Confirmation lifecycle (T-A4)
 *
 * No MW6AuthorityResolver / parallel S1 schema / second fingerprint /
 * Mw6HumanAuthorization / Mw6Confirmation.
 *
 * Distinction:
 * - PROJECTED requiredAuthority = N2 (policy)
 * - EFFECTIVE authorityBound = valid runtime human authorization (confirmed EC)
 *   ∩ evidence matching server-recomputed current-intent fingerprint ∩ N2 verify
 */

import type { AuthorityResolverPort } from "@/lib/oa/decision";
import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";
import { isExecutionReadyStatus } from "@/lib/oa/execution-contract/domain/invariants";
import type {
  SourceProviderBinding,
  SourceStrategyDecision,
} from "@/lib/nora-cognitive-runtime/sourceIntelligenceContract";
import {
  AUTHORITY_UNRESOLVED,
  MW6_EXTERNAL_DISCOVERY_ACTION,
  MW6_EXTERNAL_DISCOVERY_EFFECT_CLASS,
  MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY,
  projectRequiredAuthorityForExternalDiscovery,
  type AuthS1GovernedContractContext,
  type GovernedEffectsAuthorityInput,
} from "./piloteS1AuthorityPolicy";
import {
  issueS1AuthorityEvidence,
  type IssueS1AuthorityEvidenceResult,
} from "./s1Authority";
import type { ResolveCurrentPiloteResult } from "./resolveCurrentPilote";
import { S1_MAX_TTL_SECONDS } from "./constants";

export type Mw6ExternalDiscoveryContractInput = {
  executionContractId: string;
  projectId: string;
  /** Discovery scope (must be stable for fingerprint binding). */
  scope: string;
  /** Target / provider capability surface (e.g. hosted web_search capability). */
  target: string;
  cycleInstanceId?: string;
  decisionRefs?: string[];
  inputs?: Record<string, unknown>;
  expectedOutputs?: string[];
  constraints?: string[];
  stopConditions?: string[];
  evidenceRequirements?: string[];
  idempotencyKey: string;
  adapterExportRef?: string;
};

/**
 * Server-owned confirmed ExecutionContract snapshot for N2 external_discovery.
 * Must come from the product HumanDecision → Validate → Confirm path
 * (status `confirmed` + confirmationRef). Not a client boolean.
 */
export type Mw6AuthorizedExternalDiscoveryContract = {
  executionContractId: string;
  projectId: string;
  status: string;
  requiredAuthority: string;
  action: string;
  target: string;
  scope: string;
  confirmationRef?: string | null;
  decisionRefs?: readonly string[] | null;
  cycleInstanceId?: string;
  inputs?: Record<string, unknown>;
  expectedOutputs?: string[];
  requiredCapabilities?: string[];
  constraints?: string[];
  stopConditions?: string[];
  evidenceRequirements?: string[];
  reversibility?: AuthS1GovernedContractContext["reversibility"];
  idempotencyKey: string;
  adapterExportRef?: string;
};

/** Build EC-compatible semantic material for external_discovery (requiredAuthority N2). */
export function buildMw6ExternalDiscoveryContractSemantic(
  input: Mw6ExternalDiscoveryContractInput,
): AuthS1GovernedContractContext {
  const policy = projectRequiredAuthorityForExternalDiscovery();
  return {
    executionContractId: input.executionContractId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    decisionRefs: input.decisionRefs ?? [],
    action: MW6_EXTERNAL_DISCOVERY_ACTION,
    target: input.target,
    scope: input.scope,
    inputs: input.inputs ?? {
      acquisitionRequirement: "external_discovery",
      providerCapability: "openai_hosted_web_search",
    },
    expectedOutputs: input.expectedOutputs ?? [
      "source_observation_facts",
      "non_authoritative_cognitive_input",
    ],
    requiredCapabilities: ["cap:product-external-discovery"],
    requiredAuthority: policy.requiredAuthority,
    constraints: input.constraints ?? [
      "external_boundary",
      "non_authoritative_observations",
      "mw6_real_gate_orthogonal",
    ],
    stopConditions: input.stopConditions ?? [
      "authority_denied",
      "real_not_authorized",
    ],
    evidenceRequirements: input.evidenceRequirements ?? [
      "evreq:external-discovery",
    ],
    reversibility: "partially_reversible",
    idempotencyKey: input.idempotencyKey,
    adapterExportRef: input.adapterExportRef,
  };
}

/**
 * Sole authoritative current-intent builder for MW6 external_discovery.
 * Derives semantic inputs from the CURRENT SourceStrategyDecision + binding
 * (never from caller-supplied fingerprint / competing authority context copy).
 */
export function buildMw6CurrentExternalDiscoveryIntent(input: {
  executionContractId: string;
  projectId: string;
  campaignId: string;
  strategy: SourceStrategyDecision;
  binding: SourceProviderBinding;
  decisionRefs?: string[];
  idempotencyKey: string;
  cycleInstanceId?: string;
  adapterExportRef?: string;
}):
  | { ok: true; intent: Mw6ExternalDiscoveryContractInput }
  | { ok: false; reason: string } {
  if (input.strategy.acquisitionRequirement !== "external_discovery") {
    return {
      ok: false,
      reason: "current_intent_not_external_discovery",
    };
  }
  if (input.binding.acquisitionRequirement !== "external_discovery") {
    return {
      ok: false,
      reason: "provider_binding_not_external_discovery",
    };
  }
  if (!input.binding.attachOpenAiHostedWebSearch) {
    return {
      ok: false,
      reason: "hosted_web_search_not_attached_for_current_intent",
    };
  }

  const scope = `biz:mw6-external-discovery:${input.campaignId}:${input.strategy.domain}:${input.strategy.semanticSourceClass}`;
  const target = "tgt:openai-hosted-web-search";

  return {
    ok: true,
    intent: {
      executionContractId: input.executionContractId,
      projectId: input.projectId,
      scope,
      target,
      cycleInstanceId: input.cycleInstanceId,
      decisionRefs: input.decisionRefs,
      inputs: {
        acquisitionRequirement: input.strategy.acquisitionRequirement,
        providerCapability: "openai_hosted_web_search",
        sourceNeed: input.strategy.sourceNeed,
        domain: input.strategy.domain,
        semanticSourceClass: input.strategy.semanticSourceClass,
        plannedOperations: [...input.strategy.plannedOperations],
        reasonCodes: [...input.strategy.reasonCodes],
        hostedProviderBudgetClaim: input.binding.hostedProviderBudgetClaim,
      },
      idempotencyKey: input.idempotencyKey,
      adapterExportRef: input.adapterExportRef,
    },
  };
}

export function buildMw6ExternalDiscoveryGovernedEffects(input: {
  scope: string;
  target: string;
  protectedBoundaries?: readonly string[];
}): GovernedEffectsAuthorityInput {
  return {
    effectClass: MW6_EXTERNAL_DISCOVERY_EFFECT_CLASS,
    rollbackAvailable: true,
    protectedBoundaries: [...(input.protectedBoundaries ?? [])],
    scopeIn: input.scope,
    target: input.target,
  };
}

/**
 * Canonical N2 Confirmation rule (existing T-A4 / W2):
 * ValidateExecutionContract maps N2 → status `confirmation_required`.
 * isExecutionReadyStatus: N2 is ready ONLY when status === `confirmed`.
 * confirmExecutionContractForAuthorization / ConfirmExecutionContract consume
 * a granted Confirmation (level ≥ N2, scope-bound).
 *
 * Therefore Confirmation IS REQUIRED for effective N2 external_discovery
 * authority — enforced via confirmed EC + confirmationRef, not a new MW6 UI.
 */
export function assertMw6ExternalDiscoveryEffectiveHumanAuthorization(
  contract: Mw6AuthorizedExternalDiscoveryContract,
): { ok: true } | { ok: false; reason: string } {
  if (contract.requiredAuthority !== MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY) {
    return { ok: false, reason: "authorized_contract_requiredAuthority_not_N2" };
  }
  if (contract.action !== MW6_EXTERNAL_DISCOVERY_ACTION) {
    return { ok: false, reason: "authorized_contract_action_mismatch" };
  }
  const decisionRefs = contract.decisionRefs ?? [];
  if (decisionRefs.length === 0) {
    return { ok: false, reason: "human_decision_refs_absent" };
  }
  if (
    !isExecutionReadyStatus({
      status: contract.status,
      requiredAuthority: contract.requiredAuthority,
      constraints: contract.constraints ?? [],
    })
  ) {
    if (
      contract.status === "confirmation_required" ||
      (contract.status === "validated" &&
        contract.requiredAuthority === "N2")
    ) {
      return { ok: false, reason: "confirmation_required_absent" };
    }
    if (contract.status === "superseded" || contract.status === "cancelled") {
      return { ok: false, reason: `authorization_invalid_status_${contract.status}` };
    }
    return {
      ok: false,
      reason: `human_authorization_not_execution_ready_${contract.status}`,
    };
  }
  if (!contract.confirmationRef) {
    return { ok: false, reason: "confirmation_ref_absent_on_confirmed_contract" };
  }
  return { ok: true };
}

/** Recompute inspection fingerprint from CURRENT MW6 intent (server-owned). */
export function computeMw6CurrentIntentFingerprint(
  intent: Mw6ExternalDiscoveryContractInput,
): { semantic: AuthS1GovernedContractContext; fingerprint: string } {
  const semantic = buildMw6ExternalDiscoveryContractSemantic(intent);
  return {
    semantic,
    fingerprint: computeInspectionFingerprint(semantic),
  };
}

export type IssueMw6ExternalDiscoveryS1Input = {
  pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  authorityResolver: AuthorityResolverPort;
  contract: Mw6ExternalDiscoveryContractInput;
  issuedAt?: string;
  expiresAt?: string;
  evidenceId?: string;
};

/**
 * Issue Auth S1 N2 candidate evidence for MW6 external_discovery.
 *
 * S1 issuance alone is NOT effective authority (mirrors prepare-before-confirm).
 * Effective MW6 authorityBound requires:
 *   confirmed EC (HumanDecision + Confirmation) ∩ current-intent fingerprint verify.
 */
export function issueMw6ExternalDiscoveryS1(
  input: IssueMw6ExternalDiscoveryS1Input,
): IssueS1AuthorityEvidenceResult & {
  contractSemantic?: AuthS1GovernedContractContext;
  fingerprint?: string;
} {
  const policy = projectRequiredAuthorityForExternalDiscovery();
  if (policy.requiredAuthority !== MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY) {
    return {
      ok: false,
      code: AUTHORITY_UNRESOLVED,
      message: "External discovery policy must resolve exact N2.",
    };
  }

  const contractSemantic = buildMw6ExternalDiscoveryContractSemantic(
    input.contract,
  );
  const governedEffects = buildMw6ExternalDiscoveryGovernedEffects({
    scope: input.contract.scope,
    target: input.contract.target,
  });
  const issuedAt = input.issuedAt ?? new Date().toISOString();
  const issuedAtMs = Date.parse(issuedAt);
  const expiresAt =
    input.expiresAt ??
    new Date(issuedAtMs + S1_MAX_TTL_SECONDS * 1000).toISOString();

  const issued = issueS1AuthorityEvidence({
    pilote: input.pilote,
    authorityResolver: input.authorityResolver,
    contract: contractSemantic,
    governedEffects,
    issuedAt,
    expiresAt,
    evidenceId: input.evidenceId,
  });

  if (!issued.ok) return issued;

  return {
    ...issued,
    contractSemantic,
    fingerprint: computeInspectionFingerprint(contractSemantic),
  };
}
