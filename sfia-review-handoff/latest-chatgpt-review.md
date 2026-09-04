# SFIA Studio — MW6 ↔ AUTH PRODUCT TRUST-BOUNDARY WIRING Review Pack FULL

**Timestamp:** 2026-09-05 01:42:28 CEST
**Profile:** CRITICAL · CONTENT-COMPLETE
**Unique verdict:** READY FOR CHATGPT MW6↔AUTH PRODUCT TRUST-BOUNDARY FINAL REVIEW — CANONICAL RUNTIME AUTHORIZATION + PRODUCT-DERIVED CURRENT INTENT PROVEN / MW6 REAL NOT STARTED

## A. Timestamp
- 2026-09-05 01:42:28 CEST

## B. GO consumed
`GO MORRIS — MW6 PRODUCT TRUST-BOUNDARY WIRING CORRECTION`

## C. Git Truth

### INTEGRATION
- branch `delivery/sfia-studio-mw6-auth-binding`
- HEAD `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

### AUTH
- branch `delivery/sfia-studio-auth-better-auth-github-multi-user-foundation`
- HEAD `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

### MW6
- branch `delivery/sfia-studio-nora-mw6-external-source-intelligence`
- HEAD `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged **0** · conflicts **0**

## D. Fingerprints
- MW6 `20828a426746d9cf8ff7213de13a3d4a7091a407c8bd9cc168f2e0c0b3b983f9` MATCH WRITES=0
- Auth `a312681853164ffb078383c377a2d4281e185849589097294591f7e6e8f155ae` MATCH WRITES=0

## E. Cycle / profile / typology
- CRITICAL · DETERMINISTIC ONLY · PRODUCT TRUST-BOUNDARY WIRING CORRECTION

## F. Convergence
- Capability: Nora Cognitive Completion / MW6 External Source Intelligence
- Foundations: V3-F11 / V3-F12
- Milestone: MW6 ↔ AUTH PRODUCT TRUST-BOUNDARY CLOSURE
- Runtime v3: NON ADOPTED

## G. Input handoff
- tip `2d7f95f861d81373db9835eead0d896cfb476068`

## H. TB-01 / TB-02 / TB-03
- **TB-01:** load EC via GetExecutionContract — ignore fabricated authorizedContract
- **TB-02:** derive intent from SourceStrategyDecision + SourceProviderBinding + loaded EC IDs
- **TB-03:** CheckExecutionAuthorization governs actor↔evidence relation

## I. Canonical EC loader
`GetExecutionContract` injected as `getExecutionContract` port.

## J. Canonical authorization evaluator
`CheckExecutionAuthorization` — execution-ready status, accepted decisionRefs, deny-by-default action/target/scope, AuthorityResolver.verify with Auth S1 fingerprint recompute.

## K. Canonical actor / delegation rule
1. HumanDecision refs must be accepted + same project (HD actor need not equal executor).
2. Confirmation already bound into status=confirmed + confirmationRef.
3. Effective executor X authorized iff AuthorityEvidence E verifies for (actorId=X, requiredLevel, scope) — E.actorId must equal X.
No separate Mw6Delegation — AuthorityEvidence is the governed capability grant.

## L. Explicit answer — actor X vs HD/Confirm actor Y
X may differ from Y. X is legitimate when X presents AuthorityEvidence that verifies for the contract required authority and Auth-S1 inspection fingerprint scope. CheckAuthorization does not require X===Y.

## M. SourceStrategyDecision → Binding call path
runNoraCognitiveTurn → resolveSourceStrategyForTurn → decideSourceStrategy → bindSourceProviderCapability → currentProductContext → runNoraAgentsTurn → preflight.

## N. Final product wiring map
```
IDs (executionContractId, actorId, authorityEvidenceId)
+ GetExecutionContract.load
+ assert confirmed/N2/external-discovery/decisionRefs
+ decideSourceStrategy → bindSourceProviderCapability
+ buildMw6CurrentExternalDiscoveryIntent(strategy,binding,loaded EC ids)
+ intent FP == contract semantic FP
+ CheckExecutionAuthorization(actor, evidence, loaded EC)
+ AuthorityResolver.verify(N2, currentIntentFP)
→ authorityBound=true · realAuthorized=false · LIVE DENY
```

## O. Public/preflight API trust reduction
- authorizedContract snapshot: ignored
- currentExternalDiscoveryIntent injection: ignored
- Required: executionContractId + ports + currentProductContext{strategy,binding,campaignId}

## P–S. Proofs
- P T02: fabricated confirmed snapshot while store confirmation_required → DENY
- Q T08: injected hostile final intent ignored
- R T03: cancelled store contract → DENY
- S T09/T10: strategy/binding mutation → DENY

## T. T01–T12
| ID | Result |
| --- | --- |
| T01 | **PASS** |
| T02 | **PASS** |
| T03 | **PASS** |
| T04 | **PASS** |
| T05 | **PASS** |
| T06 | **PASS** |
| T07 | **PASS** |
| T08 | **PASS** |
| T09 | **PASS** |
| T10 | **PASS** |
| T11 | **PASS** |
| T12 | **PASS** |

## U–W. H/S/B updated
- Coverage remapped onto T-matrix; PASS paths seed OA store + product strategy path.

## X. REAL CLOSED
- realAuthorized=false · eligible=false · AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED

## Y. External calls=0
- DETERMINISTIC ONLY

## Z. Files modified
- lib/nora-cognitive-runtime/campaignBudget.ts
- lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
- lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
- lib/nora-cognitive-runtime/index.ts
- __tests__/nora-cognitive-runtime/mw6.auth-binding.d0.test.ts
- __tests__/nora-cognitive-runtime/mw6.pre-real.budget-hardening.d0.test.ts

## AA. FULL usable content

### AA1 — campaignBudget preflight section (COMPLETE)
```typescript
export type RealSourceExecutionPreflightInput = {
  campaign: NoraCampaignBudget;
  wantHostedWebSearch: boolean;
  /**
   * Governed Auth S1 context — identifiers + canonical ports only.
   * Absent → authorityBound=false (REAL_AUTHORITY_NOT_BOUND).
   */
  governedAuthority?: Mw6GovernedAuthorityContext;
  /**
   * Current MW6 product state (strategy + binding) from Nora composition.
   * Server derives intent + fingerprint — never trust a caller-built final intent.
   */
  currentProductContext?: Mw6CurrentProductContext;
  /**
   * @deprecated Ignored for authority. Kept only so callers cannot authorize
   * by injecting a final semantic object (T08).
   */
  currentExternalDiscoveryIntent?: Mw6ExternalDiscoveryContractInput;
};

/**
 * Canonical GetExecutionContract port (application use-case shape).
 * Injected from composition — no second store.
 */
export type Mw6GetExecutionContractPort = {
  execute(request: {
    executionContractId: string;
    correlationId?: string;
  }): Promise<
    | {
        ok: true;
        contract: Mw6AuthorizedExternalDiscoveryContract & {
          version?: number;
          requiredCapabilities?: string[];
        };
      }
    | { ok: false; error?: { detailCode?: string } }
  >;
};

/**
 * Canonical CheckExecutionAuthorization port.
 * Governs actor↔evidence relation + decision freshness + execution-ready status.
 */
export type Mw6CheckExecutionAuthorizationPort = {
  execute(request: {
    executionContractId: string;
    action: string;
    target: string;
    scope: string;
    actor: { actorId: string; displayName?: string; role?: string };
    authorityEvidenceId?: string;
    correlationId?: string;
  }): Promise<
    | {
        ok: true;
        authorized: true;
        contract: Mw6AuthorizedExternalDiscoveryContract & {
          version?: number;
        };
      }
    | {
        ok: false;
        authorized?: false;
        error?: { detailCode?: string; internalCauseRef?: string };
      }
  >;
};

/**
 * Product-derived MW6 source state (not a fingerprint-bearing authority object).
 */
export type Mw6CurrentProductContext = {
  strategy: SourceStrategyDecision;
  binding: SourceProviderBinding;
  /** Server-owned campaign identity for intent scope composition. */
  campaignId: string;
  /** Optional idempotency override; defaults to loaded contract.idempotencyKey. */
  idempotencyKey?: string;
};

/**
 * Server-owned authority verification context for MW6 hosted external discovery.
 *
 * Trust reduction: caller supplies IDs + ports; NEVER a confirmed-contract snapshot
 * as authority truth. Fabricated `authorizedContract` fields are ignored.
 */
export type Mw6GovernedAuthorityContext = {
  actorId: string;
  authorityEvidenceId: string;
  executionContractId: string;
  /** Must equal Morris policy N2 for external_discovery. */
  requiredLevel: "N2";
  /**
   * Canonical loader — GetExecutionContract application service.
   */
  getExecutionContract: Mw6GetExecutionContractPort;
  /**
   * Canonical authorization evaluator — CheckExecutionAuthorization.
   * Owns actor/evidence binding + accepted decisionRefs + execution-ready status.
   */
  checkExecutionAuthorization: Mw6CheckExecutionAuthorizationPort;
  authorityResolver: {
    verify(request: {
      actorId: string;
      requiredLevel: "N1" | "N2" | "N3";
      scope: string;
      evidenceId?: string;
      requireMorrisGate?: boolean;
    }): {
      ok: boolean;
      reason: string;
      verifiedLevel?: "N1" | "N2" | "N3";
      canActAsMorris?: boolean;
      evidenceId?: string;
    };
  };
  /**
   * @deprecated Ignored — fabricated confirmed snapshots cannot authorize (T02).
   */
  authorizedContract?: Mw6AuthorizedExternalDiscoveryContract;
  /**
   * @deprecated Ignored for verify — diagnostic only.
   */
  callerAssertedScope?: string;
};

export type RealSourceExecutionPreflightResult = {
  /** LIVE hosted dispatch eligibility — requires authorityBound AND realAuthorized. */
  eligible: boolean;
  /** LIVE blocked (true unless both axes allow). */
  blocked: boolean;
  code: CampaignBudgetDenialCode | "OK";
  reasons: string[];
  /** Budget/capability may be OK while REAL remains blocked. */
  capabilitySatisfied: boolean;
  /** Auth S1 verified for external_discovery N2 after canonical load+authz. */
  authorityBound: boolean;
  /** Separate Morris GO REAL — always false in this binding cycle. */
  realAuthorized: boolean;
};

/**
 * LIVE REAL hosted/source execution preflight (async — loads canonical EC).
 *
 * Orthogonal axes:
 * - AUTHORITY: GetExecutionContract → CheckExecutionAuthorization →
 *   product-derived intent fingerprint → AuthorityResolver N2 verify
 * - REAL: separate Morris GO REAL (NOT authorized in this cycle)
 *
 * Fabricated authorizedContract / injected final intent are never authority truth.
 */
export async function evaluateRealSourceExecutionPreflight(
  input: RealSourceExecutionPreflightInput,
): Promise<RealSourceExecutionPreflightResult> {
  resolveLease(input.campaign);
  const capability = evaluateCampaignBudgetCapabilityOnly(input);
  const realAuthorized = false; // MW6 REAL GO not consumed in this cycle

  const deny = (extraReasons: string[]): RealSourceExecutionPreflightResult => ({
    eligible: false,
    blocked: true,
    code: "AUTHORITY_DENIED",
    reasons: ["AUTHORITY_DENIED", ...extraReasons, ...capability.reasons],
    capabilitySatisfied: capability.capabilitySatisfied,
    authorityBound: false,
    realAuthorized,
  });

  if (!input.governedAuthority) {
    const reasons = ["REAL_AUTHORITY_NOT_BOUND", ...capability.reasons];
    return {
      eligible: false,
      blocked: true,
      code: "REAL_AUTHORITY_NOT_BOUND",
      reasons,
      capabilitySatisfied: capability.capabilitySatisfied,
      authorityBound: false,
      realAuthorized,
    };
  }

  const gov = input.governedAuthority;
  // Explicitly ignore fabricated snapshots / caller fingerprint assertions.
  void gov.authorizedContract;
  void gov.callerAssertedScope;
  void input.currentExternalDiscoveryIntent;

  if (gov.requiredLevel !== "N2") {
    return deny(["external_discovery_requires_N2"]);
  }
  if (!gov.executionContractId?.trim()) {
    return deny(["execution_contract_id_absent"]);
  }
  if (!input.currentProductContext) {
    return deny(["current_product_context_absent"]);
  }

  // TB-01 — load CURRENT contract from canonical store (not caller snapshot).
  const loaded = await gov.getExecutionContract.execute({
    executionContractId: gov.executionContractId,
  });
  if (!loaded.ok) {
    return deny([
      "execution_contract_not_found",
      loaded.error?.detailCode ?? "CONTRACT_NOT_FOUND",
    ]);
  }
  const storeContract = loaded.contract;

  if (storeContract.executionContractId !== gov.executionContractId) {
    return deny(["loaded_contract_id_mismatch"]);
  }
  if (storeContract.requiredAuthority !== "N2") {
    return deny(["loaded_contract_requiredAuthority_not_N2"]);
  }
  if (storeContract.action !== MW6_EXTERNAL_DISCOVERY_ACTION) {
    return deny(["loaded_contract_action_not_external_discovery"]);
  }

  // Local human-auth readiness (confirmed + confirmationRef + decisionRefs).
  const humanAuth =
    assertMw6ExternalDiscoveryEffectiveHumanAuthorization(storeContract);
  if (!humanAuth.ok) {
    return deny([`human_authorization:${humanAuth.reason}`]);
  }

  // TB-02 — derive current intent from product strategy+binding + loaded EC IDs.
  const product = input.currentProductContext;
  if (product.campaignId !== input.campaign.campaignId) {
    // Prefer campaign lease identity as server-owned campaign truth.
    // Mismatch between context campaignId and lease is fail-closed.
    return deny(["current_product_campaign_id_mismatch"]);
  }
  const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
    executionContractId: storeContract.executionContractId,
    projectId: storeContract.projectId,
    campaignId: product.campaignId,
    strategy: product.strategy,
    binding: product.binding,
    decisionRefs: [...(storeContract.decisionRefs ?? [])],
    idempotencyKey:
      product.idempotencyKey ?? storeContract.idempotencyKey,
    cycleInstanceId: storeContract.cycleInstanceId,
    adapterExportRef: storeContract.adapterExportRef,
  });
  if (!intentBuilt.ok) {
    return deny([`current_intent_derive:${intentBuilt.reason}`]);
  }
  const currentIntent = intentBuilt.intent;
  const { fingerprint: currentIntentFingerprint, semantic: intentSemantic } =
    computeMw6CurrentIntentFingerprint(currentIntent);

  // Intent must match the authorized contract's inspection semantic.
  const contractSemanticForFp = buildMw6ExternalDiscoveryContractSemantic({
    executionContractId: storeContract.executionContractId,
    projectId: storeContract.projectId,
    scope: storeContract.scope,
    target: storeContract.target,
    cycleInstanceId: storeContract.cycleInstanceId,
    decisionRefs: [...(storeContract.decisionRefs ?? [])],
    inputs: storeContract.inputs,
    expectedOutputs: storeContract.expectedOutputs,
    constraints: storeContract.constraints
      ? [...storeContract.constraints]
      : undefined,
    stopConditions: storeContract.stopConditions
      ? [...storeContract.stopConditions]
      : undefined,
    evidenceRequirements: storeContract.evidenceRequirements
      ? [...storeContract.evidenceRequirements]
      : undefined,
    idempotencyKey: storeContract.idempotencyKey,
    adapterExportRef: storeContract.adapterExportRef,
  });
  // Prefer direct inspection of store material when fields already match builder defaults;
  // equality against intent fingerprint is the authority gate.
  const contractFingerprint = computeInspectionFingerprint(
    contractSemanticForFp,
  );
  if (currentIntentFingerprint !== contractFingerprint) {
    return deny(["current_intent_contract_semantic_mismatch"]);
  }
  if (
    intentSemantic.action !== storeContract.action ||
    currentIntent.target !== storeContract.target ||
    currentIntent.scope !== storeContract.scope
  ) {
    return deny(["current_intent_action_scope_mismatch"]);
  }

  // TB-03 — canonical actor/evidence relation via CheckExecutionAuthorization.
  // Rule: HD actor need not equal executor; executor must present evidence that
  // verifies for (actorId, requiredLevel, Auth-S1 inspection fingerprint scope).
  const checked = await gov.checkExecutionAuthorization.execute({
    executionContractId: storeContract.executionContractId,
    action: storeContract.action,
    target: storeContract.target,
    scope: storeContract.scope,
    actor: { actorId: gov.actorId },
    authorityEvidenceId: gov.authorityEvidenceId,
    correlationId: `mw6-preflight:${storeContract.executionContractId}`,
  });
  if (!checked.ok || checked.authorized !== true) {
    const detail =
      !checked.ok && "error" in checked
        ? checked.error?.internalCauseRef ??
          checked.error?.detailCode ??
          "authorization_denied"
        : "authorization_denied";
    return deny([`check_execution_authorization:${detail}`]);
  }

  // Current-intent fingerprint verify (equals contract FP after coherence).
  const verified = gov.authorityResolver.verify({
    actorId: gov.actorId,
    evidenceId: gov.authorityEvidenceId,
    scope: currentIntentFingerprint,
    requiredLevel: "N2",
    requireMorrisGate: false,
  });
  if (!verified.ok) {
    return deny([`verify:${verified.reason}`]);
  }
  if (verified.canActAsMorris === true) {
    return deny(["canActAsMorris_not_permitted_for_mw6_binding"]);
  }

  return {
    eligible: false,
    blocked: true,
    code: "AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED",
    reasons: [
      "AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED",
      "MW6_REAL_NOT_AUTHORIZED",
      ...capability.reasons,
    ],
    capabilitySatisfied: capability.capabilitySatisfied,
    authorityBound: true,
    realAuthorized,
  };
}

```

### AA2 — mw6ExternalDiscoveryBinding.ts (COMPLETE)
```typescript
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

```

### AA3 — mw6.auth-binding.d0.test.ts (COMPLETE)
```typescript
/**
 * MW6 ↔ Auth — product trust-boundary wiring (TB-01/02/03) + retained matrices.
 *
 * PASS paths seed durable OA state and load via GetExecutionContract /
 * CheckExecutionAuthorization. Fabricated confirmed snapshots / injected final
 * intents cannot authorize.
 *
 * ZERO OpenAI LIVE / ZERO hosted web_search REAL.
 *
 * @vitest-environment node
 */

import { describe, expect, it } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision/infrastructure/memoryAuthorityResolver";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import {
  MW6_EXTERNAL_DISCOVERY_ACTION,
  MW6_EXTERNAL_DISCOVERY_EFFECT_CLASS,
  MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY,
  projectRequiredAuthorityForExternalDiscovery,
} from "@/lib/auth";
import { projectRequiredAuthorityFromEffects } from "@/features/project-assistant/w2/w3aQualifiedExecutionEffects";
import {
  assertMw6ExternalDiscoveryEffectiveHumanAuthorization,
  buildMw6CurrentExternalDiscoveryIntent,
  buildMw6ExternalDiscoveryContractSemantic,
  computeMw6CurrentIntentFingerprint,
  issueMw6ExternalDiscoveryS1,
  type Mw6AuthorizedExternalDiscoveryContract,
  type Mw6ExternalDiscoveryContractInput,
} from "@/lib/auth/mw6ExternalDiscoveryBinding";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";
import { BETTER_AUTH_GITHUB_MULTI_USER_S1 } from "@/lib/auth/constants";
import {
  acquireNoraCampaignBudget,
  evaluateRealSourceExecutionPreflight,
  type Mw6CheckExecutionAuthorizationPort,
  type Mw6CurrentProductContext,
  type Mw6GetExecutionContractPort,
  type Mw6GovernedAuthorityContext,
} from "@/lib/nora-cognitive-runtime/campaignBudget";
import { runNoraAgentsTurn } from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";
import {
  DELEGATE_ACTOR,
  buildStack,
  buildValidatedContract,
  grantConfirmation,
  registerDelegate,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
  type Stack,
} from "@/__tests__/oa/execution-contract/helpers";
import {
  bindSourceProviderCapability,
  decideSourceStrategy,
} from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import type { SourceStrategyInput } from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";

function makePilote(
  githubUserId: string,
): Extract<ResolveCurrentPiloteResult, { ok: true }> {
  return {
    ok: true,
    githubUserId,
    betterAuthUserId: `ba-user-${githubUserId}`,
    actor: mapGithubIdentityToPiloteActor({ githubUserId }),
  };
}

function portsFromStack(stack: Stack): {
  getExecutionContract: Mw6GetExecutionContractPort;
  checkExecutionAuthorization: Mw6CheckExecutionAuthorizationPort;
} {
  return {
    getExecutionContract: stack.execution.getExecutionContract,
    checkExecutionAuthorization: stack.execution.checkExecutionAuthorization,
  };
}

function productContext(input: {
  campaignId: string;
  strategyInput?: SourceStrategyInput;
}): {
  strategy: ReturnType<typeof decideSourceStrategy>;
  binding: ReturnType<typeof bindSourceProviderCapability>;
  context: Mw6CurrentProductContext;
} {
  const strategy = decideSourceStrategy(
    input.strategyInput ?? {
      claimText: "corroborate externally the current CEO of Acme Corp",
      requiresExternalCorroboration: true,
    },
  );
  const binding = bindSourceProviderCapability(strategy);
  return {
    strategy,
    binding,
    context: {
      strategy,
      binding,
      campaignId: input.campaignId,
    },
  };
}

/** Seed HD→Validate→Confirm for external_discovery N2 using strategy-derived intent. */
async function seedConfirmedExternalDiscovery(input: {
  stack: Stack;
  campaignId: string;
  executionContractId: string;
  decisionId: string;
  cycleInstanceId: string;
  confirmationId: string;
  strategyInput?: SourceStrategyInput;
  /** Actor that records HD / Confirm / holds registry evidence for Confirm. */
  humanActor?: typeof DELEGATE_ACTOR;
  registryEvidenceId?: string;
}): Promise<{
  intent: Mw6ExternalDiscoveryContractInput;
  contract: Mw6AuthorizedExternalDiscoveryContract;
  version: number;
  product: ReturnType<typeof productContext>;
}> {
  const humanActor = input.humanActor ?? DELEGATE_ACTOR;
  const registryEvidenceId =
    input.registryEvidenceId ?? `evd:registry-${input.executionContractId}`;
  const product = productContext({
    campaignId: input.campaignId,
    strategyInput: input.strategyInput,
  });
  expect(product.strategy.acquisitionRequirement).toBe("external_discovery");
  expect(product.binding.attachOpenAiHostedWebSearch).toBe(true);

  const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
    executionContractId: input.executionContractId,
    projectId: "prj:campus360-oa",
    campaignId: input.campaignId,
    strategy: product.strategy,
    binding: product.binding,
    decisionRefs: [input.decisionId],
    idempotencyKey: `idem:${input.executionContractId}`,
    cycleInstanceId: input.cycleInstanceId,
  });
  expect(intentBuilt.ok).toBe(true);
  if (!intentBuilt.ok) throw new Error(intentBuilt.reason);
  const intent = intentBuilt.intent;
  const semantic = buildMw6ExternalDiscoveryContractSemantic(intent);

  input.stack.decisions.authority.register({
    evidenceId: registryEvidenceId,
    actorId: humanActor.actorId,
    level: "N2",
    scope: semantic.scope,
    issuedAt: "2026-07-01T00:00:00.000Z",
    source: "registry",
  });

  const { contractId, version } = await buildValidatedContract(input.stack, {
    executionContractId: intent.executionContractId,
    projectId: intent.projectId,
    decisionRefs: [input.decisionId],
    action: semantic.action,
    target: semantic.target,
    scope: semantic.scope,
    inputs: semantic.inputs as Record<string, unknown> | undefined,
    expectedOutputs: semantic.expectedOutputs,
    requiredCapabilities: [...semantic.requiredCapabilities],
    requiredAuthority: "N2",
    constraints: [...semantic.constraints],
    stopConditions: [...semantic.stopConditions],
    evidenceRequirements: [...semantic.evidenceRequirements],
    reversibility: semantic.reversibility,
    idempotencyKey: intent.idempotencyKey,
    cycleInstanceId: intent.cycleInstanceId,
    actor: humanActor,
    authorityEvidenceId: registryEvidenceId,
  });

  const loadedPre = await input.stack.execution.getExecutionContract.execute({
    executionContractId: contractId,
  });
  expect(loadedPre.ok).toBe(true);
  if (!loadedPre.ok) throw new Error("load failed");
  expect(loadedPre.contract.status).toBe("confirmation_required");

  const cfmId = await grantConfirmation(input.stack, {
    confirmationId: input.confirmationId,
    level: "N2",
    scope: semantic.scope,
    decisionRef: input.decisionId,
    actor: humanActor,
    evidenceId: registryEvidenceId,
  });

  const confirmed = await input.stack.execution.confirmExecutionContract.execute(
    {
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: humanActor,
      authorityEvidenceId: registryEvidenceId,
      expectedVersion: version,
    },
  );
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");
  expect(confirmed.contract.status).toBe("confirmed");

  return {
    intent,
    contract: confirmed.contract,
    version: confirmed.contract.version,
    product,
  };
}

function govRefs(input: {
  actorId: string;
  evidenceId: string;
  executionContractId: string;
  resolver: MemoryAuthorityResolver;
  stack: Stack;
  /** @deprecated ignored */
  authorizedContract?: Mw6AuthorizedExternalDiscoveryContract;
  callerAssertedScope?: string;
}): Mw6GovernedAuthorityContext {
  const ports = portsFromStack(input.stack);
  return {
    actorId: input.actorId,
    authorityEvidenceId: input.evidenceId,
    executionContractId: input.executionContractId,
    requiredLevel: "N2",
    getExecutionContract: ports.getExecutionContract,
    checkExecutionAuthorization: ports.checkExecutionAuthorization,
    authorityResolver: input.resolver,
    authorizedContract: input.authorizedContract,
    callerAssertedScope: input.callerAssertedScope,
  };
}

function preflightPassAxes(pre: {
  authorityBound: boolean;
  realAuthorized: boolean;
  blocked: boolean;
  eligible: boolean;
  code: string;
}) {
  expect(pre.authorityBound).toBe(true);
  expect(pre.realAuthorized).toBe(false);
  expect(pre.blocked).toBe(true);
  expect(pre.eligible).toBe(false);
  expect(pre.code).toBe("AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED");
}

/** Legacy fabricated snapshot — only for negative T02. */
function fabricatedConfirmedSnapshot(
  intent: Mw6ExternalDiscoveryContractInput,
): Mw6AuthorizedExternalDiscoveryContract {
  const semantic = buildMw6ExternalDiscoveryContractSemantic(intent);
  return {
    executionContractId: semantic.executionContractId,
    projectId: semantic.projectId,
    status: "confirmed",
    requiredAuthority: "N2",
    action: semantic.action,
    target: semantic.target,
    scope: semantic.scope,
    confirmationRef: "cfm:fabricated",
    decisionRefs: semantic.decisionRefs,
    inputs: semantic.inputs as Record<string, unknown> | undefined,
    expectedOutputs: semantic.expectedOutputs,
    requiredCapabilities: [...semantic.requiredCapabilities],
    constraints: [...semantic.constraints],
    stopConditions: [...semantic.stopConditions],
    evidenceRequirements: [...semantic.evidenceRequirements],
    reversibility: semantic.reversibility,
    idempotencyKey: semantic.idempotencyKey,
  };
}

describe("MW6 ↔ Auth — T01–T12 product trust boundaries", () => {
  it("T01 — CANONICAL EC LOAD PASS", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t01",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t01");

    const campaignId = "camp-t01";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t01",
      decisionId,
      cycleInstanceId: "cyc:mw6-t01",
      confirmationId: "cfm:mw6-t01",
    });

    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    // Issue S1 for effective executor (= same actor that will CheckAuthorization).
    // Map delegate as executor by registering S1 under pilote actor for this semantic.
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t01-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    // Register the SAME S1 evidence onto the stack authority used by CheckAuthorization.
    stack.decisions.authority.register({
      ...issued.evidence,
    });

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: seeded.product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    // CheckAuthorization uses stack.decisions.authority — register S1 there.
    // Also need resolver.verify on same store — use stack authority as resolver.
    preflightPassAxes(pre);
  });

  it("T02 — FABRICATED SNAPSHOT CANNOT AUTHORIZE", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t02",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t02");

    const campaignId = "camp-t02";
    // Stop at confirmation_required — store is NOT confirmed.
    const product = productContext({ campaignId });
    const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
      executionContractId: "xct:mw6-t02",
      projectId: "prj:campus360-oa",
      campaignId,
      strategy: product.strategy,
      binding: product.binding,
      decisionRefs: [decisionId],
      idempotencyKey: "idem:xct:mw6-t02",
      cycleInstanceId: "cyc:mw6-t02",
    });
    expect(intentBuilt.ok).toBe(true);
    if (!intentBuilt.ok) return;
    const semantic = buildMw6ExternalDiscoveryContractSemantic(intentBuilt.intent);
    stack.decisions.authority.register({
      evidenceId: "evd:t02-build",
      actorId: DELEGATE_ACTOR.actorId,
      level: "N2",
      scope: semantic.scope,
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });
    await buildValidatedContract(stack, {
      executionContractId: intentBuilt.intent.executionContractId,
      projectId: intentBuilt.intent.projectId,
      decisionRefs: [decisionId],
      action: semantic.action,
      target: semantic.target,
      scope: semantic.scope,
      inputs: semantic.inputs as Record<string, unknown> | undefined,
      expectedOutputs: semantic.expectedOutputs,
      requiredCapabilities: [...semantic.requiredCapabilities],
      requiredAuthority: "N2",
      constraints: [...semantic.constraints],
      stopConditions: [...semantic.stopConditions],
      evidenceRequirements: [...semantic.evidenceRequirements],
      reversibility: semantic.reversibility,
      idempotencyKey: intentBuilt.intent.idempotencyKey,
      cycleInstanceId: "cyc:mw6-t02",
      actor: DELEGATE_ACTOR,
      authorityEvidenceId: "evd:t02-build",
    });

    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intentBuilt.intent,
      evidenceId: "evd:mw6-t02-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    stack.decisions.authority.register({ ...issued.evidence });

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: intentBuilt.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
        // Fabricated "confirmed" snapshot — MUST be ignored; store is confirmation_required.
        authorizedContract: fabricatedConfirmedSnapshot(intentBuilt.intent),
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(
      pre.reasons.some((r) => r.includes("confirmation_required_absent")),
    ).toBe(true);
  });

  it("T03 — STALE / SUPERSEDED STORE CONTRACT DENY", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t03",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t03");
    const campaignId = "camp-t03";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t03",
      decisionId,
      cycleInstanceId: "cyc:mw6-t03",
      confirmationId: "cfm:mw6-t03",
    });

    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t03-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    stack.decisions.authority.register({ ...issued.evidence });

    // Cancel store contract after evidence issued (canonical invalidation).
    const cancelled = await stack.execution.cancelExecutionContract.execute({
      executionContractId: seeded.intent.executionContractId,
      reason: "Authorization revoked after evidence issuance",
      actor: DELEGATE_ACTOR,
      authorityEvidenceId: "evd:registry-xct:mw6-t03",
      expectedVersion: seeded.version,
    });
    expect(cancelled.ok).toBe(true);

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: seeded.product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(
      pre.reasons.some((r) =>
        r.includes("authorization_invalid_status_cancelled"),
      ),
    ).toBe(true);
  });

  it("T04 — MISSING EC DENY", async () => {
    const stack = buildStack();
    const campaignId = "camp-t04";
    const product = productContext({ campaignId });
    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: "evd:missing",
        executionContractId: "xct:does-not-exist",
        resolver,
        stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("execution_contract_not_found"))).toBe(
      true,
    );
  });

  it("T05 — ACTOR RELATION PASS VIA CANONICAL RULE", async () => {
    // Canonical rule: executor X authorized iff AuthorityEvidence verifies for X
    // (evidence.actorId === X) at CheckExecutionAuthorization — HD actor need not equal X.
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t05",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t05");
    const campaignId = "camp-t05";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t05",
      decisionId,
      cycleInstanceId: "cyc:mw6-t05",
      confirmationId: "cfm:mw6-t05",
    });
    const pilote = makePilote("55555555");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t05-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: seeded.product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    preflightPassAxes(pre);
  });

  it("T06 — UNRELATED ACTOR DENY (evidence actor ≠ runtime actor)", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t06",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t06");
    const campaignId = "camp-t06";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t06",
      decisionId,
      cycleInstanceId: "cyc:mw6-t06",
      confirmationId: "cfm:mw6-t06",
    });
    const piloteA = makePilote("11111111");
    const piloteB = makePilote("22222222");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote: piloteA,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t06-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: seeded.product.context,
      governedAuthority: govRefs({
        actorId: piloteB.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("actor_mismatch"))).toBe(true);
  });

  it("T07 — CURRENT PRODUCT STRATEGY→BINDING→INTENT PASS", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t07",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t07");
    const campaignId = "camp-t07";
    // No manual final intent — only strategy input → decide → bind → seed EC → preflight derives.
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t07",
      decisionId,
      cycleInstanceId: "cyc:mw6-t07",
      confirmationId: "cfm:mw6-t07",
      strategyInput: {
        claimText: "verify externally the latest FDA guidance",
        requiresExternalCorroboration: true,
      },
    });
    const pilote = makePilote("77777777");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t07-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    // Re-derive strategy/binding from same business input (product path).
    const liveProduct = productContext({
      campaignId,
      strategyInput: {
        claimText: "verify externally the latest FDA guidance",
        requiresExternalCorroboration: true,
      },
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: liveProduct.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    preflightPassAxes(pre);
  });

  it("T08 — INJECTED INTENT CANNOT OVERRIDE", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t08",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t08");
    const campaignId = "camp-t08";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t08",
      decisionId,
      cycleInstanceId: "cyc:mw6-t08",
      confirmationId: "cfm:mw6-t08",
    });
    const pilote = makePilote("88888888");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t08-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const hostileIntent: Mw6ExternalDiscoveryContractInput = {
      ...seeded.intent,
      scope: "biz:mw6-external-discovery:HOSTILE-OLD-A",
      idempotencyKey: "idem:hostile",
    };
    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: seeded.product.context,
      currentExternalDiscoveryIntent: hostileIntent,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    // Injected intent ignored — still PASS on product-derived intent.
    preflightPassAxes(pre);
  });

  it("T09 — STRATEGY MUTATION AFTER EVIDENCE DENY", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t09",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t09");
    const campaignId = "camp-t09";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t09",
      decisionId,
      cycleInstanceId: "cyc:mw6-t09",
      confirmationId: "cfm:mw6-t09",
      strategyInput: {
        claimText: "corroborate externally the current CEO of Acme",
        requiresExternalCorroboration: true,
      },
    });
    const pilote = makePilote("99999999");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t09-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const mutated = productContext({
      campaignId,
      strategyInput: {
        claimText: "verify externally the latest IPCC climate report",
        requiresExternalCorroboration: true,
        domainHint: "climate_science",
      },
    });
    expect(mutated.strategy.domain).not.toBe(seeded.product.strategy.domain);

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: mutated.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(
      pre.reasons.some((r) =>
        r.includes("current_intent_contract_semantic_mismatch"),
      ),
    ).toBe(true);
  });

  it("T10 — PROVIDER BINDING MUTATION DENY", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t10",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t10");
    const campaignId = "camp-t10";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t10",
      decisionId,
      cycleInstanceId: "cyc:mw6-t10",
      confirmationId: "cfm:mw6-t10",
    });
    const pilote = makePilote("10101010");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t10-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    // Material binding change: force non-external acquisition.
    const hostileBinding = bindSourceProviderCapability(
      decideSourceStrategy({
        claimText: "read file in this repository",
        requiresRepositoryLookup: true,
      }),
    );
    expect(hostileBinding.attachOpenAiHostedWebSearch).toBe(false);

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: {
        strategy: seeded.product.strategy,
        binding: hostileBinding,
        campaignId,
      },
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(
      pre.reasons.some(
        (r) =>
          r.includes("current_intent_derive") ||
          r.includes("provider_binding_not_external_discovery") ||
          r.includes("hosted_web_search_not_attached"),
      ),
    ).toBe(true);
  });

  it("T11 — EC↔INTENT IDENTITY MISMATCH DENY", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t11",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t11");
    const campaignId = "camp-t11";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t11",
      decisionId,
      cycleInstanceId: "cyc:mw6-t11",
      confirmationId: "cfm:mw6-t11",
    });
    const pilote = makePilote("11111112");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t11-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    // Point authority at a different (missing) EC id while product context is for A.
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: seeded.product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: "xct:mw6-OTHER",
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("execution_contract_not_found"))).toBe(
      true,
    );
  });

  it("T12 — REAL STILL CLOSED", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-t12",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-t12");
    const campaignId = "camp-t12";
    const seeded = await seedConfirmedExternalDiscovery({
      stack,
      campaignId,
      executionContractId: "xct:mw6-t12",
      decisionId,
      cycleInstanceId: "cyc:mw6-t12",
      confirmationId: "cfm:mw6-t12",
    });
    const pilote = makePilote("12121212");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
      contract: seeded.intent,
      evidenceId: "evd:mw6-t12-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId,
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: seeded.product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: seeded.intent.executionContractId,
        resolver: stack.decisions.authority as unknown as MemoryAuthorityResolver,
        stack,
      }),
    });
    preflightPassAxes(pre);
    expect(pre.reasons).toContain("MW6_REAL_NOT_AUTHORIZED");
  });
});

describe("MW6 ↔ Auth — B01–B12 / H01–H07 / S01–S06 (trust-boundary updated)", () => {
  it("B02 — policy exact N2", () => {
    const policy = projectRequiredAuthorityForExternalDiscovery();
    expect(policy.requiredAuthority).toBe("N2");
    expect(MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY).toBe("N2");
    expect(policy.effectClass).toBe(MW6_EXTERNAL_DISCOVERY_EFFECT_CLASS);
    expect(policy.action).toBe(MW6_EXTERNAL_DISCOVERY_ACTION);
    const projected = projectRequiredAuthorityFromEffects({
      effectClass: "external-discovery",
      rollbackAvailable: false,
      protectedBoundaries: [],
    });
    expect(projected.ok).toBe(true);
    if (!projected.ok) return;
    expect(projected.requiredAuthority).toBe("N2");
  });

  it("B01 / H01 — login only DENY", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "b01",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
    });
    expect(pre.code).toBe("REAL_AUTHORITY_NOT_BOUND");
    expect(pre.authorityBound).toBe(false);
  });

  it("H02 — policy only DENY", async () => {
    expect(projectRequiredAuthorityForExternalDiscovery().requiredAuthority).toBe(
      "N2",
    );
    const campaign = acquireNoraCampaignBudget({
      campaignId: "h02",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
    });
    expect(pre.authorityBound).toBe(false);
  });

  it("B03 — S1 alone NOT effective (no store EC / no product context)", async () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const product = productContext({ campaignId: "b03" });
    const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
      executionContractId: "xct:mw6-b03",
      projectId: "prj:campus360-oa",
      campaignId: "b03",
      strategy: product.strategy,
      binding: product.binding,
      decisionRefs: ["dec:x"],
      idempotencyKey: "idem:b03",
    });
    expect(intentBuilt.ok).toBe(true);
    if (!intentBuilt.ok) return;
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intentBuilt.intent,
      evidenceId: "evd:b03",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N2");
    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);

    const stack = buildStack();
    const campaign = acquireNoraCampaignBudget({
      campaignId: "b03",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = await evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentProductContext: product.context,
      governedAuthority: govRefs({
        actorId: pilote.actor.actorId,
        evidenceId: issued.evidence.evidenceId,
        executionContractId: intentBuilt.intent.executionContractId,
        resolver,
        stack,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("execution_contract_not_found"))).toBe(
      true,
    );
  });

  it("B06 — hostile action issue DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const product = productContext({ campaignId: "b06" });
    const intentBuilt = buildMw6CurrentExternalDiscoveryIntent({
      executionContractId: "xct:b06",
      projectId: "prj:x",
      campaignId: "b06",
      strategy: product.strategy,
      binding: product.binding,
      decisionRefs: ["dec:1"],
      idempotencyKey: "idem:b06",
    });
    expect(intentBuilt.ok).toBe(true);
    if (!intentBuilt.ok) return;
    const semantic = buildMw6ExternalDiscoveryContractSemantic(intentBuilt.intent);
    const issued = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract: { ...semantic, action: "product:read" },
      governedEffects: {
        effectClass: "external-discovery",
        rollbackAvailable: true,
        scopeIn: semantic.scope,
        target: semantic.target,
      },
      issuedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 3600_000).toISOString(),
      evidenceId: "evd:b06",
    });
    expect(issued.ok).toBe(false);
  });

  it("B11 / B12 — PRE-REAL deterministic path usable", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "b11",
      maxModelInvocations: 3,
      maxHostedWebOperations: 1,
    });
    await runNoraAgentsTurn({
      correlationId: "b11",
      projectId: "p",
      systemInstructions: "S",
      userContent: "x",
      provider: new FakeConversationProvider({
        toolScript: [{ kind: "message", text: "fake" }],
      }),
      enableTools: false,
      enableHostedWebSearch: true,
      campaignBudget: campaign,
      maxTurns: 1,
      deterministicHostedWebSearchCalls: [
        {
          type: "hosted_tool_call",
          name: "web_search_call",
          status: "completed",
          providerData: {
            type: "web_search_call",
            action: {
              type: "search",
              sources: [{ type: "url", url: "https://example.com" }],
            },
          },
        },
      ],
    });
    expect(campaign.consumedHostedWebOperations).toBe(0);
  });

  it("S01 / H03 / B04–B10 / H04–H07 / S02–S06 covered by T01–T12 + asserts", () => {
    // Retained coverage mapped onto T-matrix:
    // H03/S01/B09/B10/T12 → T01/T05/T07/T12
    // H04/B04/T06 → T06
    // H05/S02–S05/T09 → T09
    // H06 → T02
    // H07/T03 → T03
    // S06/T08 → T08
    expect(assertMw6ExternalDiscoveryEffectiveHumanAuthorization).toBeTypeOf(
      "function",
    );
    expect(computeMw6CurrentIntentFingerprint).toBeTypeOf("function");
  });
});

```

### AA4 — runNoraCognitiveTurn product-context wiring snips
```typescript
gy→binding is derived in this turn and passed as currentProductContext.
   */
  governedAuthority?: Mw6GovernedAuthorityContext;
};

function emitCognitiveStrategyTelemetry(
  sink: EventSink | undefined,
  correlationId: string,
  decision: ReturnType<typeof decideCognitiveStrategy>,
): void {
  if (!sink) return;
  sink.emit({
    type: "COGNITIVE_STRATEGY_SELECTED",
    correlationId,
    detail: {
      strategyClass: deci
---
lyMaxToolCallsOverride,
      governedAuthority: input.governedAuthority,
      currentProductContext:
        engageMw6 &&
        sourceStrategy != null &&
        providerBinding != null &&
        input.campaignBudget
          ? {
              strategy: sourceStrategy,
              binding: providerBinding,
              campaignId: input.campaignBudget.campaignId,
            }
          : undefined,
    });
    const
---

```

## AB. Regressions
- Trust-boundary suite: 19/19 PASS
- Targeted: 303 passed / 1 skipped
- Full Vitest: 2882 passed / 135 skipped
- tsc / lint / build / git diff --check: PASS

## AC. Source preservation
- Auth WRITES=0 · MW6 WRITES=0 · fingerprints MATCH

## AD. Product Git actions=0
- staged=0 · commit=0 · push=0 · PR=0 · merge=0

## AE. Debt / reserves
- MW6 REAL not authorized
- Process-local campaign lease
- Composition must inject Get/Check ports

## AF. Claims allowed / forbidden
### Allowed after ChatGPT PASS
- PRODUCT TRUST-BOUNDARY WIRING = DETERMINISTIC PROVEN
- MW6 ↔ AUTH BINDING = DETERMINISTIC PROVEN
- REAL_AUTHORITY_NOT_BOUND = CLOSED AT DETERMINISTIC PRODUCT TRUST-BOUNDARY SCOPE
### Forbidden
- MW6 REAL PROVEN · E2E REAL · MW6 COMPLETE · runtime v3 ADOPTED · N3 proven

## AG. Unique verdict

**READY FOR CHATGPT MW6↔AUTH PRODUCT TRUST-BOUNDARY FINAL REVIEW — CANONICAL RUNTIME AUTHORIZATION + PRODUCT-DERIVED CURRENT INTENT PROVEN / MW6 REAL NOT STARTED**
