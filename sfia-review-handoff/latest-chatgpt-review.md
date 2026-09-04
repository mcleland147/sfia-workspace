# SFIA Studio — MW6 ↔ AUTH BINDING CORRECTION Review Pack FULL

**Timestamp:** 2026-09-05 00:47:27 CEST
**Profile:** CRITICAL · CONTENT-COMPLETE
**Unique verdict:** READY FOR CHATGPT MW6↔AUTH FINAL BINDING RE-REVIEW — N2 HUMAN AUTHORIZATION PROVEN / CURRENT-INTENT SEMANTIC BINDING PROVEN / MW6 REAL NOT STARTED

## A. Timestamp
- 2026-09-05 00:47:27 CEST

## B. GO consumed
`GO MORRIS — MW6 N2 HUMAN-AUTHORIZATION + CURRENT-INTENT SEMANTIC-BINDING CORRECTION`

## C. Git Truth (all worktrees)
### INTEGRATION
- pwd: `/Users/morris/Projects/sfia-workspace-mw6-auth-binding`
- branch: `delivery/sfia-studio-mw6-auth-binding`
- HEAD: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- merge-base: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged: **0** · conflicts: **0**

### AUTH
- pwd: `/Users/morris/Projects/sfia-workspace-auth-better-auth-github-multi-user-foundation`
- branch: `delivery/sfia-studio-auth-better-auth-github-multi-user-foundation`
- HEAD: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- merge-base: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged: **0** · conflicts: **0**

### MW6
- pwd: `/Users/morris/Projects/sfia-workspace-nora-mw6-external-source-intelligence`
- branch: `delivery/sfia-studio-nora-mw6-external-source-intelligence`
- HEAD: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- origin/main: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- merge-base: `ebdae92a96ea1c49444dfb668342c1453f57a540`
- staged: **0** · conflicts: **0**

## D. Source fingerprints before/after
- MW6 BEFORE/AFTER = `20828a426746d9cf8ff7213de13a3d4a7091a407c8bd9cc168f2e0c0b3b983f9` · MATCH · WRITES=0
- Auth projects FP BEFORE/AFTER = `a312681853164ffb078383c377a2d4281e185849589097294591f7e6e8f155ae` · MATCH · WRITES=0
- Method: MW6 = `git status --porcelain -uall -- projects/` path+bytes; Auth = `projects/**` rglob excl node_modules/.next

## E. Cycle / profile / typology
- Cycle: MW6 ↔ AUTH BINDING CORRECTION (GAP-01 Human Authorization + GAP-02 Current-Intent Semantic Binding)
- Profile: CRITICAL · DETERMINISTIC ONLY
- Typology: CORRECTION / BINDING (no MW6 REAL)

## F. Convergence
- Capability: Nora Cognitive Completion / MW6 External Source Intelligence
- Governance foundations: V3-F11 / V3-F12
- Milestone: MW6 ↔ AUTH BINDING CORRECTION
- Policy: external_discovery → N2 (Morris DECIDED — unchanged)
- Runtime v3: NON ADOPTED

## G. Input handoff
- tip: `1951080efbca2a534911b6f5ac831e4e8610e31a`
- parent: `5c7cd338b950bd2581f809581112b809e6a20a59`
- blob: `3f26562084dcca835fdeaec799d44fc0dfdb7bcd`

## H. Two ChatGPT gaps
1. **GAP-01 HUMAN AUTHORIZATION** — prior path could treat S1 N2 from authenticatedPilote + semantic as effective authority without runtime human authorization.
2. **GAP-02 CURRENT-INTENT SEMANTIC BINDING** — prior preflight verified caller-supplied `scope` fingerprint; did not recompute from CURRENT MW6 intent.

## I. Discovery — canonical runtime human authorization path
Product order (existing, unchanged):
```
HumanDecision (accepted + decisionRefs)
→ BuildExecutionContract
→ ValidateExecutionContract
   · N2|N3|MORRIS → status confirmation_required  (validateExecutionContract.ts)
→ ConfirmExecutionContract / confirmExecutionContractForAuthorization
   · granted Confirmation level ≥ requiredAuthority, scope-bound
→ status confirmed + confirmationRef
→ CheckExecutionAuthorization / evaluateExecutionAuthorization
```
W2 `resolveConfirmationRequirement`: status is primary owner; `requiredAuthority` alone does NOT invent Confirmation.
`isExecutionReadyStatus`: N2 ready ONLY when `status === "confirmed"` (validated+N1 NOT_REQUIRED path does not apply).

## J. Exact HumanDecision / Confirmation rule found
- **N2 external_discovery → Confirmation REQUIRED** under current T-A4 Validate rule (N2 → `confirmation_required`).
- Enforced at: `validateExecutionContract.ts` (status), `isExecutionReadyStatus` (ready gate), `ConfirmExecutionContract` + `assertConfirmationBinding`, W2 `confirmExecutionContractForAuthorization`.
- No new MW6 Confirmation UI/state created.

## K. Exact artifact/state required before effective N2 authority
`Mw6GovernedAuthorityContext.authorizedContract` must satisfy `assertMw6ExternalDiscoveryEffectiveHumanAuthorization`:
- `requiredAuthority === N2`
- `action === product:external-discovery`
- `decisionRefs.length > 0` (HumanDecision bound)
- `isExecutionReadyStatus` true → for N2 means **`status === confirmed`**
- `confirmationRef` present
PLUS Auth S1 N2 evidence verified against **server-recomputed current-intent fingerprint**.
S1 issuance alone remains a candidate (prepare-before-confirm semantic) — not effective.

## L. Current-intent semantic source
- Authoritative builder: `buildMw6ExternalDiscoveryContractSemantic` / `buildMw6CurrentExternalDiscoveryIntent`
- Current intent derived from `SourceStrategyDecision` + `SourceProviderBinding` + campaign/project/EC identity
- Passed as `currentExternalDiscoveryIntent` into preflight (NOT from evidence.scope / NOT competing copy inside authority context as truth)

## M. Proof fingerprint recomputed server-side
`evaluateRealSourceExecutionPreflight`:
1. requires `currentExternalDiscoveryIntent`
2. `computeMw6CurrentIntentFingerprint(intent)` → `computeInspectionFingerprint(buildMw6ExternalDiscoveryContractSemantic(intent))`
3. `AuthorityResolver.verify({ scope: currentIntentFingerprint, ... })`
4. `callerAssertedScope` is `void` — never passed to verify

## N. Proof caller fingerprint cannot override
Test **S06**: evidence valid for A; current intent B; `callerAssertedScope = A.fingerprint` → **DENY** (`scope_mismatch`).

## O. Final Binding Map
```
authenticated Pilote (authority none)
→ HumanDecision accepted
→ ExecutionContract Build/Validate (N2 → confirmation_required)
→ Confirmation granted (level ≥ N2) → Confirm → confirmed + confirmationRef
→ current SourceStrategyDecision / external_discovery intent (server)
→ policy projects requiredAuthority = N2 (unchanged)
→ buildMw6ExternalDiscoveryContractSemantic(currentIntent)
→ computeInspectionFingerprint → currentIntentFingerprint
→ issueMw6ExternalDiscoveryS1 (candidate evidence bound to that semantic)
→ MW6 preflight:
     assert human auth on authorizedContract
     recompute currentIntentFingerprint
     AuthorityResolver.verify(actor, evidence, currentIntentFingerprint, N2)
→ authorityBound=true
→ realAuthorized=false
→ LIVE DENY / eligible=false
```

## P. Files modified (integration only)
- `lib/auth/mw6ExternalDiscoveryBinding.ts` — human-auth assert + current-intent builder + fingerprint helper
- `lib/auth/index.ts` — exports
- `lib/nora-cognitive-runtime/campaignBudget.ts` — preflight GAP-01/02
- `lib/nora-cognitive-runtime/runNoraAgentsTurn.ts` — pass currentExternalDiscoveryIntent
- `lib/nora-cognitive-runtime/index.ts` — type exports
- `__tests__/nora-cognitive-runtime/mw6.auth-binding.d0.test.ts` — H01–H07 / S01–S06 / updated B01–B12

## Q. FULL usable content

### Q1 — mw6ExternalDiscoveryBinding.ts (COMPLETE)
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

### Q2 — campaignBudget preflight section (COMPLETE)
```typescript
export type RealSourceExecutionPreflightInput = {
  campaign: NoraCampaignBudget;
  wantHostedWebSearch: boolean;
  /**
   * Optional governed Auth S1 context for MW6 external_discovery.
   * Absent → authorityBound=false (REAL_AUTHORITY_NOT_BOUND).
   * Present + human-authorized + current-intent verified → authorityBound=true;
   * REAL remains orthogonal / closed.
   */
  governedAuthority?: Mw6GovernedAuthorityContext;
  /**
   * Server-derived CURRENT MW6 external_discovery intent.
   * Owns the inspection fingerprint — never taken from caller evidence.scope.
   * Required whenever governedAuthority is present.
   */
  currentExternalDiscoveryIntent?: Mw6ExternalDiscoveryContractInput;
};

/**
 * Server-owned authority verification context for MW6 hosted external discovery.
 * Uses existing AuthorityResolverPort — no MW6-specific resolver.
 *
 * Effective authority requires BOTH:
 * 1. authorizedContract from HumanDecision → Confirm path (confirmed + confirmationRef)
 * 2. evidence matching server-recomputed current-intent fingerprint
 */
export type Mw6GovernedAuthorityContext = {
  actorId: string;
  authorityEvidenceId: string;
  /** Must equal Morris policy N2 for external_discovery. */
  requiredLevel: "N2";
  /**
   * Confirmed ExecutionContract snapshot from the product authorization path.
   * Not a client `humanAuthorized` boolean.
   */
  authorizedContract: Mw6AuthorizedExternalDiscoveryContract;
  /**
   * Optional diagnostic only. NEVER used for AuthorityResolver.verify.
   * Caller cannot override the server-recomputed current-intent fingerprint.
   */
  callerAssertedScope?: string;
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
  /** Auth S1 verified for external_discovery N2. */
  authorityBound: boolean;
  /** Separate Morris GO REAL — always false in this binding cycle. */
  realAuthorized: boolean;
};

/**
 * LIVE REAL hosted/source execution preflight.
 *
 * Orthogonal axes:
 * - AUTHORITY: human-authorized confirmed EC ∩ Auth S1 N2 ∩ current-intent fingerprint
 * - REAL: separate Morris GO REAL (NOT authorized in MW6↔Auth binding cycle)
 *
 * PRE-REAL-01: No test boolean / fake marker can authorize LIVE.
 * Budget capability alone never equals human/REAL authority.
 * Authority bound alone never equals REAL authorized.
 * Login / policy / S1 candidate alone never equals authorityBound.
 */
export function evaluateRealSourceExecutionPreflight(
  input: RealSourceExecutionPreflightInput,
): RealSourceExecutionPreflightResult {
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
  if (gov.requiredLevel !== "N2") {
    return deny(["external_discovery_requires_N2"]);
  }

  // GAP-01 — existing T-A4 Confirmation rule: N2 ready only when confirmed.
  const humanAuth = assertMw6ExternalDiscoveryEffectiveHumanAuthorization(
    gov.authorizedContract,
  );
  if (!humanAuth.ok) {
    return deny([`human_authorization:${humanAuth.reason}`]);
  }

  // GAP-02 — current MW6 intent owns the fingerprint (not callerAssertedScope).
  const currentIntent = input.currentExternalDiscoveryIntent;
  if (!currentIntent) {
    return deny(["current_intent_absent"]);
  }

  if (
    currentIntent.executionContractId !==
      gov.authorizedContract.executionContractId ||
    currentIntent.projectId !== gov.authorizedContract.projectId
  ) {
    return deny(["current_intent_contract_identity_mismatch"]);
  }
  if (
    currentIntent.target !== gov.authorizedContract.target ||
    currentIntent.scope !== gov.authorizedContract.scope
  ) {
    return deny(["current_intent_action_scope_mismatch"]);
  }
  if (gov.authorizedContract.action !== MW6_EXTERNAL_DISCOVERY_ACTION) {
    return deny(["authorized_contract_action_not_external_discovery"]);
  }

  const { fingerprint: currentIntentFingerprint } =
    computeMw6CurrentIntentFingerprint(currentIntent);

  // callerAssertedScope is diagnostic only — deliberately unused for verify.
  void gov.callerAssertedScope;

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

  // Authority bound — REAL still closed (orthogonal).
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

### Q3 — runNoraAgentsTurn wiring snips
```typescript
rnal_discovery.
   * When absent on LIVE path → REAL_AUTHORITY_NOT_BOUND.
   * When present + human-authorized + current-intent verified → authorityBound;
   * REAL remains orthogonal/closed.
   */
  governedAuthority?: Mw6GovernedAuthorityContext;
  /**
   * Server-derived CURRENT MW6 external_discovery intent (owns fingerprint).
   * Required with governedAuthority — never taken from evidence.scope.
   */
  currentExternalDiscoveryIntent?: Mw6ExternalDiscoveryContractInput;
};

export type RunNoraAgentsTurnHostedSearchObserve = {
  hostedWebSearchAttached: boolean;
  deterministicBoundaryUse
// ---
OUND";
      authorityBound = false;
      realAuthorized = false;
    } else {
      const pre = evaluateRealSourceExecutionPreflight({
        campaign,
        wantHostedWebSearch: true,
        governedAuthority: input.governedAuthority,
        currentExternalDiscoveryIntent: input.currentExternalDiscoveryIntent,
      });
      realPreflightBlocked = pre.blocked
```

### Q4 — auth index exports
```typescript
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

```

### Q5 — mw6.auth-binding.d0.test.ts (COMPLETE)
```typescript
/**
 * MW6 ↔ Auth binding correction — H01–H07 / S01–S06 / B01–B12.
 *
 * GAP-01: effective authority requires confirmed EC (HumanDecision + Confirmation).
 * GAP-02: preflight recomputes fingerprint from CURRENT MW6 intent (caller scope ignored).
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
} from "@/__tests__/oa/execution-contract/helpers";
import { decideSourceStrategy } from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";
import { bindSourceProviderCapability } from "@/lib/nora-cognitive-runtime/sourceStrategyPolicy";

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

function baseIntent(overrides?: Partial<Mw6ExternalDiscoveryContractInput>) {
  return {
    executionContractId:
      overrides?.executionContractId ?? "xct:mw6-ext-discovery-001",
    projectId: overrides?.projectId ?? "prj:mw6-auth-binding",
    scope: overrides?.scope ?? "biz:mw6-external-discovery:campaign-a",
    target: overrides?.target ?? "tgt:openai-hosted-web-search",
    decisionRefs: overrides?.decisionRefs ?? ["dec:mw6-ext-001"],
    idempotencyKey: overrides?.idempotencyKey ?? "idem:mw6-ext-discovery-001",
    inputs: overrides?.inputs,
    cycleInstanceId: overrides?.cycleInstanceId,
    adapterExportRef: overrides?.adapterExportRef,
    expectedOutputs: overrides?.expectedOutputs,
    constraints: overrides?.constraints,
    stopConditions: overrides?.stopConditions,
    evidenceRequirements: overrides?.evidenceRequirements,
  } satisfies Mw6ExternalDiscoveryContractInput;
}

/** Server-owned confirmed EC snapshot (mirrors load-from-store trust boundary). */
function confirmedAuthorizedContract(
  intent: Mw6ExternalDiscoveryContractInput,
  overrides?: Partial<Mw6AuthorizedExternalDiscoveryContract>,
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
    confirmationRef: "cfm:mw6-ext-n2-001",
    decisionRefs: semantic.decisionRefs ?? intent.decisionRefs,
    cycleInstanceId: semantic.cycleInstanceId,
    inputs: semantic.inputs as Record<string, unknown> | undefined,
    expectedOutputs: semantic.expectedOutputs,
    requiredCapabilities: [...semantic.requiredCapabilities],
    constraints: [...semantic.constraints],
    stopConditions: [...semantic.stopConditions],
    evidenceRequirements: [...semantic.evidenceRequirements],
    reversibility: semantic.reversibility,
    idempotencyKey: semantic.idempotencyKey,
    adapterExportRef: semantic.adapterExportRef,
    ...overrides,
  };
}

function govContext(input: {
  pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  evidenceId: string;
  resolver: MemoryAuthorityResolver;
  authorizedContract: Mw6AuthorizedExternalDiscoveryContract;
  callerAssertedScope?: string;
}): Mw6GovernedAuthorityContext {
  return {
    actorId: input.pilote.actor.actorId,
    authorityEvidenceId: input.evidenceId,
    requiredLevel: "N2",
    authorizedContract: input.authorizedContract,
    callerAssertedScope: input.callerAssertedScope,
    authorityResolver: input.resolver,
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

describe("MW6 ↔ Auth binding — B01–B12 (updated claims)", () => {
  it("B02 — policy exact N2 (not N1, not N3)", () => {
    const policy = projectRequiredAuthorityForExternalDiscovery();
    expect(policy.requiredAuthority).toBe("N2");
    expect(policy.requiredAuthority).not.toBe("N1");
    expect(policy.requiredAuthority).not.toBe("N3");
    expect(policy.effectClass).toBe(MW6_EXTERNAL_DISCOVERY_EFFECT_CLASS);
    expect(policy.action).toBe(MW6_EXTERNAL_DISCOVERY_ACTION);

    const projected = projectRequiredAuthorityFromEffects({
      effectClass: "external-discovery",
      rollbackAvailable: false,
      protectedBoundaries: ["protected:path"],
    });
    expect(projected.ok).toBe(true);
    if (!projected.ok) return;
    expect(projected.requiredAuthority).toBe("N2");
    expect(MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY).toBe("N2");
  });

  it("B01 — login only / no S1 → authority preflight DENY", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "b01-login-only",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.realAuthorized).toBe(false);
    expect(pre.code).toBe("REAL_AUTHORITY_NOT_BOUND");
  });

  it("B03 — valid N2 S1 mechanics PASS; S1 alone NOT effective authority", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intent = baseIntent();
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intent,
      evidenceId: "evd:mw6-ext-n2-b03",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).toBe("N2");
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(issued.fingerprint).toBe(
      computeInspectionFingerprint(issued.contractSemantic!),
    );

    const campaign = acquireNoraCampaignBudget({
      campaignId: "b03-s1-alone",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    // S1 + current intent but NO confirmed human authorization → DENY
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intent,
      governedAuthority: {
        actorId: pilote.actor.actorId,
        authorityEvidenceId: issued.evidence.evidenceId,
        requiredLevel: "N2",
        authorizedContract: confirmedAuthorizedContract(intent, {
          status: "confirmation_required",
          confirmationRef: null,
        }),
        authorityResolver: resolver,
      },
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.code).toBe("AUTHORITY_DENIED");
    expect(
      pre.reasons.some((r) => r.includes("confirmation_required_absent")),
    ).toBe(true);
  });

  it("B04 — actor mismatch DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const other = makePilote("22222222");
    const intent = baseIntent({ idempotencyKey: "idem:b04" });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intent,
      evidenceId: "evd:mw6-ext-n2-b04",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId: "b04-actor-mismatch",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intent,
      governedAuthority: {
        ...govContext({
          pilote: other,
          evidenceId: issued.evidence.evidenceId,
          resolver,
          authorizedContract: confirmedAuthorizedContract(intent),
        }),
      },
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("actor_mismatch"))).toBe(true);
  });

  it("B05 — current-intent fingerprint mismatch DENY (not caller scope)", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intentA = baseIntent({ idempotencyKey: "idem:b05" });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intentA,
      evidenceId: "evd:mw6-ext-n2-b05",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const intentB = baseIntent({
      idempotencyKey: "idem:b05",
      scope: "biz:mw6-external-discovery:MUTATED-SCOPE",
    });
    const campaign = acquireNoraCampaignBudget({
      campaignId: "b05-intent-mismatch",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intentB,
      governedAuthority: govContext({
        pilote,
        evidenceId: issued.evidence.evidenceId,
        resolver,
        // Contract still matches B so human-auth + identity align; evidence is A.
        authorizedContract: confirmedAuthorizedContract(intentB),
        callerAssertedScope: issued.evidence.scope,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("scope_mismatch"))).toBe(true);
  });

  it("B06 — action/target mismatch DENY (re-issue path fails policy coherence)", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const semantic = buildMw6ExternalDiscoveryContractSemantic(
      baseIntent({ idempotencyKey: "idem:b06" }),
    );
    const hostile = {
      ...semantic,
      action: "product:read",
      target: "tgt:other",
    };
    const issued = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: resolver,
      contract: hostile,
      governedEffects: {
        effectClass: "external-discovery",
        rollbackAvailable: true,
        scopeIn: hostile.scope,
        target: hostile.target,
      },
      issuedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 3600_000).toISOString(),
      evidenceId: "evd:mw6-ext-n2-b06",
    });
    expect(issued.ok).toBe(false);
  });

  it("B07 — expired S1 DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intent = baseIntent({
      idempotencyKey: "idem:b07",
      executionContractId: "xct:mw6-ext-discovery-b07",
    });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intent,
      evidenceId: "evd:mw6-ext-n2-b07",
      issuedAt: new Date(Date.now() - 7200_000).toISOString(),
      expiresAt: new Date(Date.now() - 3600_000).toISOString(),
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId: "b07-expired",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intent,
      governedAuthority: govContext({
        pilote,
        evidenceId: issued.evidence.evidenceId,
        resolver,
        authorizedContract: confirmedAuthorizedContract(intent),
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("expired"))).toBe(true);
  });

  it("B08 — N1 insufficient DENY for external_discovery", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intent = baseIntent({
      idempotencyKey: "idem:b08",
      executionContractId: "xct:mw6-ext-discovery-b08",
    });
    const { fingerprint } = computeMw6CurrentIntentFingerprint(intent);
    resolver.register({
      evidenceId: "evd:mw6-ext-n1-hostile",
      actorId: pilote.actor.actorId,
      level: "N1",
      scope: fingerprint,
      issuedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 3600_000).toISOString(),
      source: BETTER_AUTH_GITHUB_MULTI_USER_S1,
      canActAsMorris: false,
    });

    const campaign = acquireNoraCampaignBudget({
      campaignId: "b08-n1-insufficient",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intent,
      governedAuthority: govContext({
        pilote,
        evidenceId: "evd:mw6-ext-n1-hostile",
        resolver,
        authorizedContract: confirmedAuthorizedContract(intent),
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("level_insufficient"))).toBe(
      true,
    );
  });

  it("B09 / B10 — no Morris/N3 equivalence; REAL stays closed on PASS path", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intent = baseIntent({
      idempotencyKey: "idem:b09",
      executionContractId: "xct:mw6-ext-discovery-b09",
    });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intent,
      evidenceId: "evd:mw6-ext-n2-b09",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.level).not.toBe("N3");
    expect(issued.evidence.canActAsMorris).toBe(false);

    const campaign = acquireNoraCampaignBudget({
      campaignId: "b09-real-closed",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intent,
      governedAuthority: govContext({
        pilote,
        evidenceId: issued.evidence.evidenceId,
        resolver,
        authorizedContract: confirmedAuthorizedContract(intent),
      }),
    });
    preflightPassAxes(pre);
    expect(pre.reasons).toContain("MW6_REAL_NOT_AUTHORIZED");
  });

  it("B11 / B12 — PRE-REAL fake parity; deterministic adapter path remains usable", async () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "b11-pre-real-parity",
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

    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intent = baseIntent({
      idempotencyKey: "idem:b12",
      executionContractId: "xct:mw6-ext-discovery-b12",
    });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intent,
      evidenceId: "evd:mw6-ext-n2-b12",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intent,
      governedAuthority: govContext({
        pilote,
        evidenceId: issued.evidence.evidenceId,
        resolver,
        authorizedContract: confirmedAuthorizedContract(intent),
      }),
    });
    preflightPassAxes(pre);
  });
});

describe("MW6 ↔ Auth binding — H01–H07 human authorization", () => {
  it("H01 — LOGIN ONLY DENY", () => {
    const campaign = acquireNoraCampaignBudget({
      campaignId: "h01",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.code).toBe("REAL_AUTHORITY_NOT_BOUND");
  });

  it("H02 — POLICY ONLY DENY (authenticated + N2 policy, no HumanDecision/Confirm)", () => {
    const policy = projectRequiredAuthorityForExternalDiscovery();
    expect(policy.requiredAuthority).toBe("N2");
    const campaign = acquireNoraCampaignBudget({
      campaignId: "h02",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    // Policy known; no governedAuthority human auth artifact → DENY
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.code).toBe("REAL_AUTHORITY_NOT_BOUND");
  });

  it("H03 — HUMAN AUTHORIZATION VALID PASS via canonical Confirm path", async () => {
    const stack = buildStack();
    await seedProject(stack.projects);
    // Delegate N2 evidence scoped to decision subject (canonical HD path).
    registerDelegate(stack.decisions.authority, "subj:exec-gate");
    stack.decisions.authority.register({
      evidenceId: "evd:delegate-n2-h03-scope",
      actorId: DELEGATE_ACTOR.actorId,
      level: "N2",
      scope: "biz:mw6-external-discovery:h03",
      issuedAt: "2026-07-01T00:00:00.000Z",
      source: "registry",
    });
    const decisionId = await seedAcceptedDecision(stack, {
      decisionId: "dec:mw6-h03",
      authority: "delegated",
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2",
    });
    await seedStandardCycle(stack, "cyc:mw6-h03");

    const intent = baseIntent({
      executionContractId: "xct:mw6-h03",
      projectId: "prj:campus360-oa",
      scope: "biz:mw6-external-discovery:h03",
      target: "tgt:openai-hosted-web-search",
      decisionRefs: [decisionId],
      idempotencyKey: "idem:mw6-h03",
      cycleInstanceId: "cyc:mw6-h03",
    });
    const semantic = buildMw6ExternalDiscoveryContractSemantic(intent);

    const { contractId, version } = await buildValidatedContract(stack, {
      executionContractId: intent.executionContractId,
      projectId: intent.projectId,
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
      idempotencyKey: intent.idempotencyKey,
      cycleInstanceId: intent.cycleInstanceId,
      actor: DELEGATE_ACTOR,
      authorityEvidenceId: "evd:delegate-n2-h03-scope",
    });

    const loaded = await stack.execution.getExecutionContract.execute({
      executionContractId: contractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.contract.status).toBe("confirmation_required");

    const cfmId = await grantConfirmation(stack, {
      confirmationId: "cfm:mw6-h03",
      level: "N2",
      scope: semantic.scope,
      decisionRef: decisionId,
      actor: DELEGATE_ACTOR,
      evidenceId: "evd:delegate-n2-h03-scope",
    });

    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: contractId,
      confirmationId: cfmId,
      actor: DELEGATE_ACTOR,
      authorityEvidenceId: "evd:delegate-n2-h03-scope",
      expectedVersion: version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(confirmed.contract.status).toBe("confirmed");
    expect(confirmed.contract.confirmationRef).toBe(cfmId);

    const human = assertMw6ExternalDiscoveryEffectiveHumanAuthorization(
      confirmed.contract,
    );
    expect(human.ok).toBe(true);

    const mw6Resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("33333333");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: mw6Resolver,
      contract: intent,
      evidenceId: "evd:mw6-h03-s1",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId: "h03",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intent,
      governedAuthority: {
        actorId: issued.evidence.actorId,
        authorityEvidenceId: issued.evidence.evidenceId,
        requiredLevel: "N2",
        authorizedContract: confirmed.contract,
        authorityResolver: mw6Resolver,
      },
    });
    preflightPassAxes(pre);
  });

  it("H04 — WRONG ACTOR HUMAN AUTH DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const piloteA = makePilote("11111111");
    const piloteB = makePilote("22222222");
    const intent = baseIntent({ idempotencyKey: "idem:h04" });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote: piloteA,
      authorityResolver: resolver,
      contract: intent,
      evidenceId: "evd:mw6-h04",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId: "h04",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intent,
      governedAuthority: {
        actorId: piloteB.actor.actorId,
        authorityEvidenceId: issued.evidence.evidenceId,
        requiredLevel: "N2",
        authorizedContract: confirmedAuthorizedContract(intent),
        authorityResolver: resolver,
      },
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("actor_mismatch"))).toBe(true);
  });

  it("H05 — WRONG DECISION / CONTRACT DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intentA = baseIntent({
      idempotencyKey: "idem:h05a",
      executionContractId: "xct:mw6-h05-a",
      scope: "biz:mw6-external-discovery:A",
    });
    const intentB = baseIntent({
      idempotencyKey: "idem:h05b",
      executionContractId: "xct:mw6-h05-b",
      scope: "biz:mw6-external-discovery:B",
    });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intentA,
      evidenceId: "evd:mw6-h05",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId: "h05",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intentB,
      governedAuthority: govContext({
        pilote,
        evidenceId: issued.evidence.evidenceId,
        resolver,
        authorizedContract: confirmedAuthorizedContract(intentA),
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(
      pre.reasons.some(
        (r) =>
          r.includes("current_intent_contract_identity_mismatch") ||
          r.includes("current_intent_action_scope_mismatch"),
      ),
    ).toBe(true);
  });

  it("H06 — REQUIRED CONFIRMATION ABSENT DENY (N2 → confirmation_required)", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intent = baseIntent({ idempotencyKey: "idem:h06" });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intent,
      evidenceId: "evd:mw6-h06",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId: "h06",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intent,
      governedAuthority: govContext({
        pilote,
        evidenceId: issued.evidence.evidenceId,
        resolver,
        authorizedContract: confirmedAuthorizedContract(intent, {
          status: "confirmation_required",
          confirmationRef: null,
        }),
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(
      pre.reasons.some((r) => r.includes("confirmation_required_absent")),
    ).toBe(true);
  });

  it("H07 — REVOKED / SUPERSEDED authorization DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intent = baseIntent({ idempotencyKey: "idem:h07" });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intent,
      evidenceId: "evd:mw6-h07",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId: "h07",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intent,
      governedAuthority: govContext({
        pilote,
        evidenceId: issued.evidence.evidenceId,
        resolver,
        authorizedContract: confirmedAuthorizedContract(intent, {
          status: "superseded",
          confirmationRef: "cfm:old",
        }),
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(
      pre.reasons.some((r) =>
        r.includes("authorization_invalid_status_superseded"),
      ),
    ).toBe(true);
  });
});

describe("MW6 ↔ Auth binding — S01–S06 current-intent semantic", () => {
  it("S01 — EXACT INTENT PASS", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intent = baseIntent({ idempotencyKey: "idem:s01" });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intent,
      evidenceId: "evd:mw6-s01",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const { fingerprint } = computeMw6CurrentIntentFingerprint(intent);
    expect(fingerprint).toBe(issued.evidence.scope);

    const campaign = acquireNoraCampaignBudget({
      campaignId: "s01",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intent,
      governedAuthority: govContext({
        pilote,
        evidenceId: issued.evidence.evidenceId,
        resolver,
        authorizedContract: confirmedAuthorizedContract(intent),
      }),
    });
    preflightPassAxes(pre);
  });

  it("S02 — CURRENT SCOPE MUTATION DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intentA = baseIntent({
      idempotencyKey: "idem:s02",
      scope: "biz:mw6-external-discovery:scope-A",
    });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intentA,
      evidenceId: "evd:mw6-s02",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const intentB = { ...intentA, scope: "biz:mw6-external-discovery:scope-B" };
    const campaign = acquireNoraCampaignBudget({
      campaignId: "s02",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intentB,
      governedAuthority: govContext({
        pilote,
        evidenceId: issued.evidence.evidenceId,
        resolver,
        authorizedContract: confirmedAuthorizedContract(intentB),
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("scope_mismatch"))).toBe(true);
  });

  it("S03 — CURRENT TARGET MUTATION DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intentA = baseIntent({
      idempotencyKey: "idem:s03",
      target: "tgt:openai-hosted-web-search",
    });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intentA,
      evidenceId: "evd:mw6-s03",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const intentB = { ...intentA, target: "tgt:OTHER-PROVIDER" };
    const campaign = acquireNoraCampaignBudget({
      campaignId: "s03",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intentB,
      governedAuthority: govContext({
        pilote,
        evidenceId: issued.evidence.evidenceId,
        resolver,
        authorizedContract: confirmedAuthorizedContract(intentB),
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("scope_mismatch"))).toBe(true);
  });

  it("S04 — CURRENT ACTION/ACQUISITION MUTATION DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intentA = baseIntent({
      idempotencyKey: "idem:s04",
      inputs: {
        acquisitionRequirement: "external_discovery",
        providerCapability: "openai_hosted_web_search",
      },
    });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intentA,
      evidenceId: "evd:mw6-s04",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const intentB = {
      ...intentA,
      inputs: {
        acquisitionRequirement: "repository_tools",
        providerCapability: "sfia_function_tool",
      },
    };
    const campaign = acquireNoraCampaignBudget({
      campaignId: "s04",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intentB,
      governedAuthority: govContext({
        pilote,
        evidenceId: issued.evidence.evidenceId,
        resolver,
        authorizedContract: confirmedAuthorizedContract(intentB),
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("scope_mismatch"))).toBe(true);
  });

  it("S05 — CURRENT INPUT MUTATION DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intentA = baseIntent({
      idempotencyKey: "idem:s05",
      inputs: {
        acquisitionRequirement: "external_discovery",
        providerCapability: "openai_hosted_web_search",
        domain: "financial_markets",
      },
    });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intentA,
      evidenceId: "evd:mw6-s05",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const intentB = {
      ...intentA,
      inputs: {
        acquisitionRequirement: "external_discovery",
        providerCapability: "openai_hosted_web_search",
        domain: "climate_science",
      },
    };
    const campaign = acquireNoraCampaignBudget({
      campaignId: "s05",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intentB,
      governedAuthority: govContext({
        pilote,
        evidenceId: issued.evidence.evidenceId,
        resolver,
        authorizedContract: confirmedAuthorizedContract(intentB),
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("scope_mismatch"))).toBe(true);
  });

  it("S06 — CALLER-PROVIDED FINGERPRINT CANNOT OVERRIDE", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const intentA = baseIntent({
      idempotencyKey: "idem:s06",
      scope: "biz:mw6-external-discovery:scope-A",
    });
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: intentA,
      evidenceId: "evd:mw6-s06",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const intentB = {
      ...intentA,
      scope: "biz:mw6-external-discovery:scope-B",
    };
    const campaign = acquireNoraCampaignBudget({
      campaignId: "s06",
      maxModelInvocations: 2,
      maxHostedWebOperations: 1,
    });
    // Supply OLD valid A fingerprint while current request is B → must DENY
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      currentExternalDiscoveryIntent: intentB,
      governedAuthority: govContext({
        pilote,
        evidenceId: issued.evidence.evidenceId,
        resolver,
        authorizedContract: confirmedAuthorizedContract(intentB),
        callerAssertedScope: issued.evidence.scope,
      }),
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.reasons.some((r) => r.includes("scope_mismatch"))).toBe(true);
  });

  it("current-intent builder derives from SourceStrategyDecision (authoritative)", () => {
    const strategy = decideSourceStrategy({
      claimText: "corroborate externally the current CEO of Acme",
      requiresExternalCorroboration: true,
    });
    expect(strategy.acquisitionRequirement).toBe("external_discovery");
    const binding = bindSourceProviderCapability(strategy);
    expect(binding.attachOpenAiHostedWebSearch).toBe(true);

    const built = buildMw6CurrentExternalDiscoveryIntent({
      executionContractId: "xct:mw6-strategy",
      projectId: "prj:mw6",
      campaignId: "camp-strategy",
      strategy,
      binding,
      decisionRefs: ["dec:1"],
      idempotencyKey: "idem:strategy",
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    expect(built.intent.target).toBe("tgt:openai-hosted-web-search");
    expect(built.intent.inputs?.acquisitionRequirement).toBe(
      "external_discovery",
    );
  });
});

```

## R. H01–H07 matrix
| ID | Case | Result |
| --- | --- | --- |
| H01 | Login only DENY | **PASS** |
| H02 | Policy only DENY | **PASS** |
| H03 | Canonical HD→Confirm→authorizedContract + S1 → authorityBound | **PASS** |
| H04 | Wrong actor DENY | **PASS** |
| H05 | Wrong decision/contract DENY | **PASS** |
| H06 | Confirmation absent (confirmation_required) DENY | **PASS** (required by architecture) |
| H07 | Superseded authorization DENY | **PASS** |

## S. S01–S06 matrix
| ID | Case | Result |
| --- | --- | --- |
| S01 | Exact intent PASS | **PASS** |
| S02 | Scope mutation DENY | **PASS** |
| S03 | Target mutation DENY | **PASS** |
| S04 | Acquisition mutation DENY | **PASS** |
| S05 | Input mutation DENY | **PASS** |
| S06 | Caller fingerprint cannot override | **PASS** |

## T. Updated B01–B12 matrix
| ID | Case | Result | Claim note |
| --- | --- | --- | --- |
| B01 | Login only DENY | **PASS** | |
| B02 | Policy exact N2 | **PASS** | |
| B03 | S1 mechanics PASS; S1 alone NOT effective | **PASS** | B03 alone ≠ effective authority |
| B04 | Actor mismatch | **PASS** | |
| B05 | Current-intent FP mismatch | **PASS** | |
| B06 | Action/target hostile issue DENY | **PASS** | |
| B07 | Expired | **PASS** | |
| B08 | N1 insufficient | **PASS** | |
| B09 | No Morris/N3 equivalence | **PASS** | |
| B10 | REAL closed on PASS | **PASS** | |
| B11 | PRE-REAL parity | **PASS** | |
| B12 | No second product path / deterministic usable | **PASS** | |

## U. REAL gate CLOSED proof
- `realAuthorized = false` hard-coded in preflight
- Successful authorityBound cases return `AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED`
- `eligible=false`, `blocked=true`
- No `realAuthorized=true` input parameter

## V. External REAL calls = 0
- DETERMINISTIC ONLY · no OpenAI LIVE · no hosted web_search REAL dispatch

## W. Regressions / counts
- Binding H/S/B: **24/24 PASS**
- Targeted (Auth+MW6+HD+EC): **297 passed / 1 skipped**
- Full Vitest: **2887 passed / 135 skipped** (291 files passed / 17 skipped)
- tsc --noEmit: **PASS**
- lint: **PASS**
- build: **PASS**
- git diff --check: **PASS**

## X. Source worktree preservation
- Auth WRITES=0 · MW6 WRITES=0 · fingerprints MATCH

## Y. Git product actions
- staged=0 · commit=0 · push=0 · PR=0 · merge=0 (all product branches)
- Only allowed remote publish: `sfia/review-handoff`

## Z. Debt / reserves
- MW6 REAL still not authorized (next Morris GO only after ChatGPT PASS)
- Process-local campaign lease (PRE-REAL residual)
- W2 confirm/authorize beyond prepare still has LOCAL_PILOTE residual on some paths (Auth product residual — unchanged)
- authorizedContract trust boundary = same as injected AuthorityResolver (server must load from store)

## AA. Claims allowed / forbidden
### Allowed (after ChatGPT PASS)
- MW6 external_discovery policy N2 = CONSUMED
- N2 HUMAN AUTHORIZATION BINDING = DETERMINISTIC PROVEN
- CURRENT-INTENT SEMANTIC BINDING = DETERMINISTIC PROVEN
- MW6 ↔ AUTH BINDING = DETERMINISTIC PROVEN
- REAL_AUTHORITY_NOT_BOUND = CLOSED AT DETERMINISTIC PRODUCT-BINDING SCOPE
### Forbidden
- MW6 REAL PROVEN · hosted web_search REAL · E2E REAL · MW6 COMPLETE · Cognitive Completion PROVEN · production-ready · runtime v3 ADOPTED · N3 proven · Morris authority automated

## AB. Unique verdict

**READY FOR CHATGPT MW6↔AUTH FINAL BINDING RE-REVIEW — N2 HUMAN AUTHORIZATION PROVEN / CURRENT-INTENT SEMANTIC BINDING PROVEN / MW6 REAL NOT STARTED**
