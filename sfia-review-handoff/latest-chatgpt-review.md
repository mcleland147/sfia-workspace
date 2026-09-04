# SFIA STUDIO — MW6 ↔ AUTH BINDING RETRY — Review Pack FULL

**Timestamp:** 2026-09-05 00:15:42 CEST / 2026-09-04T22:15:42Z
**Status:** FULL · CRITICAL · CONTENT-COMPLETE
**Unique verdict:** READY FOR CHATGPT MW6↔AUTH BINDING REVIEW — N2 POLICY CONSUMED / DETERMINISTIC AUTHORITY BINDING PROVEN / MW6 REAL NOT STARTED

---

## A. Timestamp
- 2026-09-05 00:15:42 CEST / 2026-09-04T22:15:42Z

## B. Decisions Morris consumed
1. **GO MORRIS — MW6 ↔ AUTH BINDING** (prior; binding retry)
2. **GO MORRIS — MW6 HOSTED EXTERNAL DISCOVERY AUTHORITY POLICY — N2** (closes STOP — MW6 ACTION AUTHORITY LEVEL NOT GOVERNED)

Normative: `external_discovery` / hosted external discovery → `requiredAuthority = N2` (fixed; not N1/N3; not contextual).

## C. Git Truth

| Surface | Path | Branch | HEAD | staged |
|---|---|---|---|---|
| main | remote | — | `ebdae92a96ea1c49444dfb668342c1453f57a540` | — |
| Auth source | `…-auth-better-auth-github-multi-user-foundation` | `delivery/sfia-studio-auth-better-auth-github-multi-user-foundation` | `ebdae92a…` | 0 |
| MW6 source | `…-nora-mw6-external-source-intelligence` | `delivery/sfia-studio-nora-mw6-external-source-intelligence` | `ebdae92a…` | 0 |
| Integration | `…-mw6-auth-binding` | `delivery/sfia-studio-mw6-auth-binding` | `ebdae92a…` | 0 |

## D. Source fingerprints before/after
- MW6 BEFORE/AFTER = `20828a426746d9cf8ff7213de13a3d4a7091a407c8bd9cc168f2e0c0b3b983f9` · MATCH · WRITES=0
- Auth projects FP BEFORE/AFTER = `a312681853164ffb078383c377a2d4281e185849589097294591f7e6e8f155ae` · MATCH · WRITES=0

## E. Cycle / profile / typology
- Cycle 8 Delivery / MW6↔Auth binding retry
- Profile: RUN / validation-correction
- Typology: CRITICAL (authority + external boundary)

## F. Convergence Pre-check
- Capability: Nora Cognitive Completion / MW6 External Source Intelligence + V3-F11/F12
- Milestone: MW6 ↔ AUTH BINDING
- Entry: Auth PASS/PROVEN · MW6 PRE-REAL EXISTING · binding NOT PROVEN · MW6 REAL NOT AUTHORIZED · STOP authority level closed by Morris N2 decision
- Exit: deterministic authority binding PROVEN · REAL gate CLOSED
- Next gate after ChatGPT PASS: GO MORRIS — MW6 REAL BOUNDED PROOF (NOT STARTED)
- Runtime v3: NON ADOPTED

## G. Input STOP handoff
- tip `5c7cd338b950bd2581f809581112b809e6a20a59`
- verdict: STOP — MW6 ACTION AUTHORITY LEVEL NOT GOVERNED

## H. Policy decision
`external_discovery` → **N2** (Morris). Implemented as fixed mapping in existing effects projection + explicit `projectRequiredAuthorityForExternalDiscovery()`.

## I. Exact module where policy is implemented
1. `features/project-assistant/w2/w3aQualifiedExecutionEffects.ts` — effect class `external-discovery` → N2 (before rollback/N3 defaults)
2. `lib/auth/piloteS1AuthorityPolicy.ts` — `projectRequiredAuthorityForExternalDiscovery()` + constants (same Auth policy family)
Justification: reuses `projectRequiredAuthorityFromEffects` / S1 contract path; no MW6AuthorityPolicyEngine; N2 not hardcoded in OpenAI adapter.

## J. Binding Map final

```
authenticated Pilote (authorityLevel none)
  → buildMw6ExternalDiscoveryContractSemantic (action=product:external-discovery, requiredAuthority=N2)
  → issueMw6ExternalDiscoveryS1 → issueS1AuthorityEvidence
  → AuthorityEvidence.scope = computeInspectionFingerprint(contract)
  → evaluateRealSourceExecutionPreflight({ governedAuthority })
       → AuthorityResolver.verify(actor, evidenceId, scope, requiredLevel=N2)
       → authorityBound=true | realAuthorized=false
       → code=AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED
  → LIVE hosted attach DENY (eligible=false)
  → deterministic fixture adapter path unchanged (PRE-REAL parity)
```

## K. Exact ExecutionContract / governed semantic binding
EC-compatible semantic material via existing `AuthS1GovernedContractContext` / `computeInspectionFingerprint`.
Fields: executionContractId, projectId, action=`product:external-discovery`, target, scope, inputs (acquisitionRequirement/providerCapability), expectedOutputs, requiredCapabilities=`cap:product-external-discovery`, requiredAuthority=N2, constraints (external_boundary…), stopConditions, evidenceRequirements, reversibility=`partially_reversible`, idempotencyKey.
No parallel MW6 contract model.

## L. N2 HumanDecision / Confirmation behavior
S1 issuance for external_discovery mirrors existing product prepare pattern: Confirmation is not required at S1 issue/preflight verify time.
Existing EC Confirm/Authorize Confirmation path remains the later product mechanism (unchanged; not duplicated for MW6).
Morris construction gate ≠ Pilote runtime HumanDecision — preserved.

## M. Files modified (binding delta)
- `w3aQualifiedExecutionEffects.ts` (external-discovery taxonomy + N2 projection + reversibility)
- `lib/auth/piloteS1AuthorityPolicy.ts` (Morris N2 policy helper/constants)
- `lib/auth/mw6ExternalDiscoveryBinding.ts` (**new** — S1 composition helper)
- `lib/auth/index.ts` (exports)
- `lib/nora-cognitive-runtime/campaignBudget.ts` (orthogonal authority/REAL preflight)
- `lib/nora-cognitive-runtime/runNoraAgentsTurn.ts` (pass governedAuthority; observe axes)
- `lib/nora-cognitive-runtime/index.ts` (export Mw6GovernedAuthorityContext)
- `__tests__/nora-cognitive-runtime/mw6.auth-binding.d0.test.ts` (**new** B01–B12)

## N. Modified content COMPLETE

### Diff — w3aQualifiedExecutionEffects.ts
```diff
--- /Users/morris/Projects/sfia-workspace-auth-better-auth-github-multi-user-foundation/projects/sfia-studio/app/features/project-assistant/w2/w3aQualifiedExecutionEffects.ts	2026-09-04 18:33:49
+++ projects/sfia-studio/app/features/project-assistant/w2/w3aQualifiedExecutionEffects.ts	2026-09-05 00:04:47
@@ -15,6 +15,7 @@
   | "read"
   | "simulate"
   | "generate-temporary-artifact"
+  | "external-discovery"
   | "local-write"
   | "commit"
   | "push"
@@ -30,6 +31,7 @@
   | "product:read"
   | "product:simulate"
   | "product:generate-temporary-artifact"
+  | "product:external-discovery"
   | "product:local-write"
   | "product:commit"
   | "product:push"
@@ -43,6 +45,7 @@
   | "cap:product-read"
   | "cap:product-simulate"
   | "cap:product-temp-artifact"
+  | "cap:product-external-discovery"
   | "cap:product-local-write"
   | "cap:product-commit"
   | "cap:product-git-push"
@@ -91,6 +94,7 @@
   read: "product:read",
   simulate: "product:simulate",
   "generate-temporary-artifact": "product:generate-temporary-artifact",
+  "external-discovery": "product:external-discovery",
   "local-write": "product:local-write",
   commit: "product:commit",
   push: "product:push",
@@ -108,6 +112,7 @@
   read: "cap:product-read",
   simulate: "cap:product-simulate",
   "generate-temporary-artifact": "cap:product-temp-artifact",
+  "external-discovery": "cap:product-external-discovery",
   "local-write": "cap:product-local-write",
   commit: "cap:product-commit",
   push: "cap:product-git-push",
@@ -141,6 +146,18 @@
       code: "AUTHORITY_UNRESOLVED",
       message:
         "Effets d'exécution non qualifiés — requiredAuthority fail-closed.",
+    };
+  }
+
+  /**
+   * Morris GO — MW6 HOSTED EXTERNAL DISCOVERY AUTHORITY POLICY — N2.
+   * Fixed N2 (not N1/N3, not contextual). Must run before rollback/N3 defaults.
+   */
+  if (effectClass === "external-discovery") {
+    return {
+      ok: true,
+      requiredAuthority: "N2",
+      morrisConstructionGateRequired: false,
     };
   }

@@ -240,6 +257,11 @@
     return { ok: true, reversibility: "reversible" };
   }

+  if (effectClass === "external-discovery") {
+    // Provider network/cost side-effect; no durable Studio mutation.
+    return { ok: true, reversibility: "partially_reversible" };
+  }
+
   if (effectClass === "generate-temporary-artifact") {
     if (!rollbackAvailable) {
       return {
```

### Diff — piloteS1AuthorityPolicy.ts
```diff
--- /Users/morris/Projects/sfia-workspace-auth-better-auth-github-multi-user-foundation/projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts	2026-09-04 21:14:13
+++ projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts	2026-09-05 00:04:56
@@ -34,6 +34,40 @@

 export const PILOTE_S1_POLICY_ID =
   "AUTH_PILOTE_S1_BASE_NONE_ACTION_SCOPED_EFFECTS_PROJECTION" as const;
+
+/**
+ * Morris GO — MW6 HOSTED EXTERNAL DISCOVERY AUTHORITY POLICY — N2.
+ * Server-owned constant mapping (not provider-string derived, not client-claimed).
+ */
+export const MW6_EXTERNAL_DISCOVERY_POLICY_ID =
+  "MORRIS_MW6_HOSTED_EXTERNAL_DISCOVERY_AUTHORITY_N2" as const;
+export const MW6_EXTERNAL_DISCOVERY_EFFECT_CLASS =
+  "external-discovery" as const;
+export const MW6_EXTERNAL_DISCOVERY_ACTION =
+  "product:external-discovery" as const;
+export const MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY = "N2" as const;
+
+/**
+ * Exact server-owned authority for MW6 hosted external discovery.
+ * Fixed N2 — never N1/N3 and never contextual.
+ */
+export function projectRequiredAuthorityForExternalDiscovery(): {
+  ok: true;
+  requiredAuthority: typeof MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY;
+  effectClass: typeof MW6_EXTERNAL_DISCOVERY_EFFECT_CLASS;
+  action: typeof MW6_EXTERNAL_DISCOVERY_ACTION;
+  policyId: typeof MW6_EXTERNAL_DISCOVERY_POLICY_ID;
+  morrisConstructionGateRequired: false;
+} {
+  return {
+    ok: true,
+    requiredAuthority: MW6_EXTERNAL_DISCOVERY_REQUIRED_AUTHORITY,
+    effectClass: MW6_EXTERNAL_DISCOVERY_EFFECT_CLASS,
+    action: MW6_EXTERNAL_DISCOVERY_ACTION,
+    policyId: MW6_EXTERNAL_DISCOVERY_POLICY_ID,
+    morrisConstructionGateRequired: false,
+  };
+}

 /**
  * Server-owned governed effects facts used for re-projection + coherence.
```

### Diff — campaignBudget.ts (vs MW6 source)
```diff
--- /Users/morris/Projects/sfia-workspace-nora-mw6-external-source-intelligence/projects/sfia-studio/app/lib/nora-cognitive-runtime/campaignBudget.ts	2026-09-04 16:37:07
+++ projects/sfia-studio/app/lib/nora-cognitive-runtime/campaignBudget.ts	2026-09-05 00:05:23
@@ -46,6 +46,8 @@
   | "AGGREGATE_REAL_CALL_CAP_REACHED"
   | "REAL_PREFLIGHT_BLOCKED"
   | "REAL_AUTHORITY_NOT_BOUND"
+  | "AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED"
+  | "AUTHORITY_DENIED"
   | "HOSTED_HARD_CAP_UNENFORCEABLE"
   | "CAMPAIGN_LEASE_INVALID"
   | "NORA_CAMPAIGN_BUDGET_SPEC_MISMATCH"
@@ -668,36 +670,158 @@
 export type RealSourceExecutionPreflightInput = {
   campaign: NoraCampaignBudget;
   wantHostedWebSearch: boolean;
+  /**
+   * Optional governed Auth S1 context for MW6 external_discovery.
+   * Absent → authorityBound=false (REAL_AUTHORITY_NOT_BOUND).
+   * Present + verified → authorityBound=true; REAL remains orthogonal / closed.
+   */
+  governedAuthority?: Mw6GovernedAuthorityContext;
 };

+/**
+ * Server-owned authority verification context for MW6 hosted external discovery.
+ * Uses existing AuthorityResolverPort — no MW6-specific resolver.
+ */
+export type Mw6GovernedAuthorityContext = {
+  actorId: string;
+  authorityEvidenceId: string;
+  /** Exact AuthorityEvidence.scope (= inspection fingerprint). */
+  scope: string;
+  /** Must equal Morris policy N2 for external_discovery. */
+  requiredLevel: "N2";
+  authorityResolver: {
+    verify(request: {
+      actorId: string;
+      requiredLevel: "N1" | "N2" | "N3";
+      scope: string;
+      evidenceId?: string;
+      requireMorrisGate?: boolean;
+    }): {
+      ok: boolean;
+      reason: string;
+      verifiedLevel?: "N1" | "N2" | "N3";
+      canActAsMorris?: boolean;
+      evidenceId?: string;
+    };
+  };
+};
+
 export type RealSourceExecutionPreflightResult = {
+  /** LIVE hosted dispatch eligibility — requires authorityBound AND realAuthorized. */
   eligible: boolean;
+  /** LIVE blocked (true unless both axes allow). */
   blocked: boolean;
   code: CampaignBudgetDenialCode | "OK";
   reasons: string[];
   /** Budget/capability may be OK while REAL remains blocked. */
   capabilitySatisfied: boolean;
+  /** Auth S1 verified for external_discovery N2. */
+  authorityBound: boolean;
+  /** Separate Morris GO REAL — always false in this binding cycle. */
+  realAuthorized: boolean;
 };

 /**
  * LIVE REAL hosted/source execution preflight.
  *
+ * Orthogonal axes:
+ * - AUTHORITY: governed Auth S1 N2 for external_discovery (AuthorityResolver)
+ * - REAL: separate Morris GO REAL (NOT authorized in MW6↔Auth binding cycle)
+ *
  * PRE-REAL-01: No test boolean / fake marker can authorize LIVE.
- * This cycle has NO genuine Morris GO REAL binding → ALWAYS blocked for LIVE.
  * Budget capability alone never equals human/REAL authority.
+ * Authority bound alone never equals REAL authorized.
  */
 export function evaluateRealSourceExecutionPreflight(
   input: RealSourceExecutionPreflightInput,
 ): RealSourceExecutionPreflightResult {
   resolveLease(input.campaign);
   const capability = evaluateCampaignBudgetCapabilityOnly(input);
-  const reasons = ["REAL_AUTHORITY_NOT_BOUND", ...capability.reasons];
+  const realAuthorized = false; // MW6 REAL GO not consumed in this cycle
+
+  if (!input.governedAuthority) {
+    const reasons = ["REAL_AUTHORITY_NOT_BOUND", ...capability.reasons];
+    return {
+      eligible: false,
+      blocked: true,
+      code: "REAL_AUTHORITY_NOT_BOUND",
+      reasons,
+      capabilitySatisfied: capability.capabilitySatisfied,
+      authorityBound: false,
+      realAuthorized,
+    };
+  }
+
+  const gov = input.governedAuthority;
+  if (gov.requiredLevel !== "N2") {
+    return {
+      eligible: false,
+      blocked: true,
+      code: "AUTHORITY_DENIED",
+      reasons: [
+        "AUTHORITY_DENIED",
+        "external_discovery_requires_N2",
+        ...capability.reasons,
+      ],
+      capabilitySatisfied: capability.capabilitySatisfied,
+      authorityBound: false,
+      realAuthorized,
+    };
+  }
+
+  const verified = gov.authorityResolver.verify({
+    actorId: gov.actorId,
+    evidenceId: gov.authorityEvidenceId,
+    scope: gov.scope,
+    requiredLevel: "N2",
+    requireMorrisGate: false,
+  });
+
+  if (!verified.ok) {
+    return {
+      eligible: false,
+      blocked: true,
+      code: "AUTHORITY_DENIED",
+      reasons: [
+        "AUTHORITY_DENIED",
+        `verify:${verified.reason}`,
+        ...capability.reasons,
+      ],
+      capabilitySatisfied: capability.capabilitySatisfied,
+      authorityBound: false,
+      realAuthorized,
+    };
+  }
+
+  if (verified.canActAsMorris === true) {
+    return {
+      eligible: false,
+      blocked: true,
+      code: "AUTHORITY_DENIED",
+      reasons: [
+        "AUTHORITY_DENIED",
+        "canActAsMorris_not_permitted_for_mw6_binding",
+        ...capability.reasons,
+      ],
+      capabilitySatisfied: capability.capabilitySatisfied,
+      authorityBound: false,
+      realAuthorized,
+    };
+  }
+
+  // Authority bound — REAL still closed (orthogonal).
   return {
     eligible: false,
     blocked: true,
-    code: "REAL_AUTHORITY_NOT_BOUND",
-    reasons,
+    code: "AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED",
+    reasons: [
+      "AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED",
+      "MW6_REAL_NOT_AUTHORIZED",
+      ...capability.reasons,
+    ],
     capabilitySatisfied: capability.capabilitySatisfied,
+    authorityBound: true,
+    realAuthorized,
   };
 }
```

### Diff — runNoraAgentsTurn.ts (vs MW6 source)
```diff
--- /Users/morris/Projects/sfia-workspace-nora-mw6-external-source-intelligence/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts	2026-09-04 16:37:20
+++ projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts	2026-09-05 00:06:48
@@ -45,7 +45,7 @@
   type NoraHostedWebSearchToolOptions,
 } from "./openaiHostedWebSearchAdapter";
 import type { SourceObservationFact } from "./sourceIntelligenceContract";
-import type { NoraCampaignBudget } from "./campaignBudget";
+import type { NoraCampaignBudget, Mw6GovernedAuthorityContext } from "./campaignBudget";
 import {
   CampaignLeaseError,
   campaignBudgetSnapshot,
@@ -109,6 +109,12 @@
    * Not REAL authority.
    */
   testOnlyMaxToolCallsOverride?: number | null;
+  /**
+   * MW6↔Auth binding — optional governed Auth S1 context for external_discovery.
+   * When absent on LIVE path → REAL_AUTHORITY_NOT_BOUND.
+   * When present + verified → authorityBound; REAL remains orthogonal/closed.
+   */
+  governedAuthority?: Mw6GovernedAuthorityContext;
 };

 export type RunNoraAgentsTurnHostedSearchObserve = {
@@ -124,6 +130,9 @@
   configuredMaxToolCalls: number | null;
   realPreflightBlocked: boolean;
   realPreflightReasons: string[];
+  authorityBound: boolean;
+  realAuthorized: boolean;
+  realPreflightCode: string;
 };

 export function createNoraAgentsRunner(
@@ -236,6 +245,9 @@
             configuredMaxToolCalls: null,
             realPreflightBlocked: true,
             realPreflightReasons: [error.code],
+            authorityBound: false,
+            realAuthorized: false,
+            realPreflightCode: error.code,
           },
         };
       }
@@ -263,6 +275,9 @@

   let realPreflightBlocked = false;
   let realPreflightReasons: string[] = [];
+  let authorityBound = false;
+  let realAuthorized = false;
+  let realPreflightCode = "OK";
   if (wantRealHostedDispatch) {
     // PRE-REAL-01: LIVE path always requires genuine authority binding.
     // No test/fake boolean is accepted on runtime inputs.
@@ -272,13 +287,20 @@
         "REAL_AUTHORITY_NOT_BOUND",
         "campaign_budget_required_for_real_hosted",
       ];
+      realPreflightCode = "REAL_AUTHORITY_NOT_BOUND";
+      authorityBound = false;
+      realAuthorized = false;
     } else {
       const pre = evaluateRealSourceExecutionPreflight({
         campaign,
         wantHostedWebSearch: true,
+        governedAuthority: input.governedAuthority,
       });
       realPreflightBlocked = pre.blocked;
       realPreflightReasons = pre.reasons;
+      realPreflightCode = pre.code;
+      authorityBound = pre.authorityBound;
+      realAuthorized = pre.realAuthorized;
     }
   }

@@ -378,6 +400,9 @@
               configuredMaxToolCalls: null,
               realPreflightBlocked: true,
               realPreflightReasons: [error.code],
+              authorityBound: false,
+              realAuthorized: false,
+              realPreflightCode: error.code,
             }
           : undefined,
       };
@@ -563,6 +588,9 @@
         configuredMaxToolCalls: resolvedCap.max_tool_calls ?? null,
         realPreflightBlocked,
         realPreflightReasons,
+        authorityBound,
+        realAuthorized,
+        realPreflightCode,
       }
     : undefined;
```

### Full — mw6ExternalDiscoveryBinding.ts
```typescript
/**
 * MW6 hosted external discovery — Auth S1 binding helpers.
 *
 * Reuses existing:
 * - projectRequiredAuthorityForExternalDiscovery / effects projection (N2)
 * - issueS1AuthorityEvidence
 * - computeInspectionFingerprint (via S1 policy)
 * - AuthorityResolverPort
 *
 * No MW6AuthorityResolver / parallel S1 schema / second fingerprint.
 */

import type { AuthorityResolverPort } from "@/lib/oa/decision";
import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";
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

export type IssueMw6ExternalDiscoveryS1Input = {
  pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  authorityResolver: AuthorityResolverPort;
  contract: Mw6ExternalDiscoveryContractInput;
  issuedAt?: string;
  expiresAt?: string;
  evidenceId?: string;
};

/**
 * Issue Auth S1 N2 for MW6 external_discovery via the sole public S1 path.
 * Confirmation for later EC Confirm/Authorize remains the existing EC path —
 * S1 issuance mirrors the product prepare pattern (no second MW6 confirmation).
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

### Full — mw6.auth-binding.d0.test.ts
```typescript
/**
 * MW6 ↔ Auth binding — B01–B12 deterministic matrix.
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
  issueMw6ExternalDiscoveryS1,
  buildMw6ExternalDiscoveryContractSemantic,
} from "@/lib/auth/mw6ExternalDiscoveryBinding";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";
import { BETTER_AUTH_GITHUB_MULTI_USER_S1 } from "@/lib/auth/constants";
import {
  acquireNoraCampaignBudget,
  evaluateRealSourceExecutionPreflight,
} from "@/lib/nora-cognitive-runtime/campaignBudget";
import { runNoraAgentsTurn } from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";

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

function baseContract(overrides?: {
  scope?: string;
  target?: string;
  executionContractId?: string;
  idempotencyKey?: string;
}) {
  return {
    executionContractId:
      overrides?.executionContractId ?? "xct:mw6-ext-discovery-001",
    projectId: "prj:mw6-auth-binding",
    scope: overrides?.scope ?? "biz:mw6-external-discovery:campaign-a",
    target: overrides?.target ?? "tgt:openai-hosted-web-search",
    idempotencyKey: overrides?.idempotencyKey ?? "idem:mw6-ext-discovery-001",
  };
}

describe("MW6 ↔ Auth binding — B01–B12 (external_discovery → N2)", () => {
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
    expect(projected.morrisConstructionGateRequired).toBe(false);

    // Read stays N1 — external_discovery is not silently equated to read.
    const read = projectRequiredAuthorityFromEffects({
      effectClass: "read",
      rollbackAvailable: true,
      protectedBoundaries: [],
    });
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.requiredAuthority).toBe("N1");
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
    expect(pre.blocked).toBe(true);
    expect(pre.eligible).toBe(false);
    expect(pre.code).toBe("REAL_AUTHORITY_NOT_BOUND");
  });

  it("B03 / B09 / B10 / fingerprint — valid N2 S1 PASS authority; REAL still closed", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const contract = baseContract();
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract,
      evidenceId: "evd:mw6-ext-n2-b03",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    expect(issued.evidence.level).toBe("N2");
    expect(issued.evidence.level).not.toBe("N3");
    expect(issued.evidence.canActAsMorris).toBe(false);
    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(issued.evidence.actorId).toBe(pilote.actor.actorId);
    expect(issued.fingerprint).toBe(
      computeInspectionFingerprint(issued.contractSemantic!),
    );
    expect(issued.evidence.scope).toBe(issued.fingerprint);

    const campaign = acquireNoraCampaignBudget({
      campaignId: "b03-valid-n2",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      governedAuthority: {
        actorId: pilote.actor.actorId,
        authorityEvidenceId: issued.evidence.evidenceId,
        scope: issued.evidence.scope,
        requiredLevel: "N2",
        authorityResolver: resolver,
      },
    });
    expect(pre.authorityBound).toBe(true);
    expect(pre.realAuthorized).toBe(false);
    expect(pre.blocked).toBe(true);
    expect(pre.eligible).toBe(false);
    expect(pre.code).toBe("AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED");
    expect(pre.reasons).toContain("MW6_REAL_NOT_AUTHORIZED");
  });

  it("B04 — actor mismatch DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const other = makePilote("22222222");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: baseContract({ idempotencyKey: "idem:b04" }),
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
      governedAuthority: {
        actorId: other.actor.actorId,
        authorityEvidenceId: issued.evidence.evidenceId,
        scope: issued.evidence.scope,
        requiredLevel: "N2",
        authorityResolver: resolver,
      },
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.code).toBe("AUTHORITY_DENIED");
    expect(pre.reasons.some((r) => r.includes("actor_mismatch"))).toBe(true);
  });

  it("B05 — semantic fingerprint mismatch DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: baseContract({ idempotencyKey: "idem:b05" }),
      evidenceId: "evd:mw6-ext-n2-b05",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;

    const campaign = acquireNoraCampaignBudget({
      campaignId: "b05-scope-mismatch",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      governedAuthority: {
        actorId: pilote.actor.actorId,
        authorityEvidenceId: issued.evidence.evidenceId,
        scope: `${issued.evidence.scope}::MUTATED`,
        requiredLevel: "N2",
        authorityResolver: resolver,
      },
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.code).toBe("AUTHORITY_DENIED");
    expect(pre.reasons.some((r) => r.includes("scope_mismatch"))).toBe(true);
  });

  it("B06 — action/target mismatch DENY (re-issue path fails policy coherence)", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const semantic = buildMw6ExternalDiscoveryContractSemantic(
      baseContract({ idempotencyKey: "idem:b06" }),
    );
    // Hostile: mutate action after policy-built semantic
    const hostile = {
      ...semantic,
      action: "product:read",
      target: "tgt:other",
    };
    // Issuance must fail — effect class expects product:external-discovery
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

    // Also: same evidence with different target scope via verify
    const okIssued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: baseContract({
        idempotencyKey: "idem:b06-ok",
        executionContractId: "xct:mw6-ext-discovery-b06",
      }),
      evidenceId: "evd:mw6-ext-n2-b06-ok",
    });
    expect(okIssued.ok).toBe(true);
    if (!okIssued.ok) return;
    const mutatedSemantic = buildMw6ExternalDiscoveryContractSemantic(
      baseContract({
        idempotencyKey: "idem:b06-ok",
        executionContractId: "xct:mw6-ext-discovery-b06",
        target: "tgt:HOSTILE-TARGET",
      }),
    );
    expect(computeInspectionFingerprint(mutatedSemantic)).not.toBe(
      okIssued.evidence.scope,
    );
  });

  it("B07 — expired S1 DENY", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: baseContract({
        idempotencyKey: "idem:b07",
        executionContractId: "xct:mw6-ext-discovery-b07",
      }),
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
      governedAuthority: {
        actorId: pilote.actor.actorId,
        authorityEvidenceId: issued.evidence.evidenceId,
        scope: issued.evidence.scope,
        requiredLevel: "N2",
        authorityResolver: resolver,
      },
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.code).toBe("AUTHORITY_DENIED");
    expect(pre.reasons.some((r) => r.includes("expired"))).toBe(true);
  });

  it("B08 — N1 insufficient DENY for external_discovery", () => {
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    // Register a forged N1 evidence with matching scope string manually
    const semantic = buildMw6ExternalDiscoveryContractSemantic(
      baseContract({
        idempotencyKey: "idem:b08",
        executionContractId: "xct:mw6-ext-discovery-b08",
      }),
    );
    const scope = computeInspectionFingerprint(semantic);
    resolver.register({
      evidenceId: "evd:mw6-ext-n1-hostile",
      actorId: pilote.actor.actorId,
      level: "N1",
      scope,
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
      governedAuthority: {
        actorId: pilote.actor.actorId,
        authorityEvidenceId: "evd:mw6-ext-n1-hostile",
        scope,
        requiredLevel: "N2",
        authorityResolver: resolver,
      },
    });
    expect(pre.authorityBound).toBe(false);
    expect(pre.code).toBe("AUTHORITY_DENIED");
    expect(pre.reasons.some((r) => r.includes("level_insufficient"))).toBe(
      true,
    );
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

    // Same product preflight composition: with valid N2, authorityBound but REAL closed
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: baseContract({
        idempotencyKey: "idem:b12",
        executionContractId: "xct:mw6-ext-discovery-b12",
      }),
      evidenceId: "evd:mw6-ext-n2-b12",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      governedAuthority: {
        actorId: pilote.actor.actorId,
        authorityEvidenceId: issued.evidence.evidenceId,
        scope: issued.evidence.scope,
        requiredLevel: "N2",
        authorityResolver: resolver,
      },
    });
    expect(pre.authorityBound).toBe(true);
    expect(pre.realAuthorized).toBe(false);
    expect(pre.code).toBe("AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED");
  });

  it("B10 — LIVE path with valid N2 still does not attach hosted tool (REAL closed)", async () => {
    // Without deterministic fixtures + without live OpenAI provider, wantRealHostedDispatch is false.
    // Prove preflight axis explicitly (network = 0).
    const resolver = new MemoryAuthorityResolver();
    const pilote = makePilote("11111111");
    const issued = issueMw6ExternalDiscoveryS1({
      pilote,
      authorityResolver: resolver,
      contract: baseContract({
        idempotencyKey: "idem:b10",
        executionContractId: "xct:mw6-ext-discovery-b10",
      }),
      evidenceId: "evd:mw6-ext-n2-b10",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    const campaign = acquireNoraCampaignBudget({
      campaignId: "b10-real-closed",
      maxModelInvocations: 3,
      maxHostedWebOperations: 2,
    });
    const pre = evaluateRealSourceExecutionPreflight({
      campaign,
      wantHostedWebSearch: true,
      governedAuthority: {
        actorId: pilote.actor.actorId,
        authorityEvidenceId: issued.evidence.evidenceId,
        scope: issued.evidence.scope,
        requiredLevel: "N2",
        authorityResolver: resolver,
      },
    });
    expect(pre.eligible).toBe(false);
    expect(pre.blocked).toBe(true);
    expect(pre.authorityBound).toBe(true);
    expect(pre.realAuthorized).toBe(false);
  });
});
```

## O. B01–B12 matrix

| ID | Result |
|----|--------|
| B01 login-only DENY | **PASS** |
| B02 policy exact N2 | **PASS** |
| B03 valid N2 S1 PASS | **PASS** |
| B04 actor mismatch DENY | **PASS** |
| B05 fingerprint mismatch DENY | **PASS** |
| B06 action/target mismatch DENY | **PASS** |
| B07 expired DENY | **PASS** |
| B08 N1 insufficient DENY | **PASS** |
| B09 N3/Morris non-equivalence | **PASS** |
| B10 REAL still CLOSED | **PASS** |
| B11 PRE-REAL parity | **PASS** |
| B12 single product path | **PASS** |

## P. S1 evidence sanitized
- source: `BETTER_AUTH_GITHUB_MULTI_USER_S1`
- actor: `actor:github:<REDACTED_NUMERIC_ID>`
- level: **N2**
- canActAsMorris: false
- TTL: issuedAt/expiresAt via S1_MAX_TTL_SECONDS
- fingerprint: evidence.scope == computeInspectionFingerprint(contractSemantic)

## Q. AuthorityResolver verification
MemoryAuthorityResolver.verify(actorId, evidenceId, scope, requiredLevel=N2) — PASS on B03; DENY on B04/B05/B07/B08.

## R. REAL_AUTHORITY_NOT_BOUND disposition
**CLOSED AT DETERMINISTIC AUTHORITY-BINDING SCOPE** when governedAuthority verifies.
Absent governedAuthority → still `REAL_AUTHORITY_NOT_BOUND` (PRE-REAL tests preserved).
When bound: `AUTHORITY_BOUND_BUT_REAL_NOT_AUTHORIZED` (REAL orthogonal).

## S. REAL gate remains CLOSED
YES — `realAuthorized=false` · `eligible=false` · `blocked=true` even with valid N2 S1.

## T. External REAL calls
**0**

## U. Regressions / counts
- Binding B01–B12: **10/10 PASS**
- MW6 PRE-REAL + binding suite: **132/132 PASS**
- Auth targeted: **103 passed / 1 skipped**
- Decision+EC: **143/143 PASS**
- Full Vitest: **2873 passed / 135 skipped** (includes Auth+MW6 materialization + binding; +10 binding tests vs prior Auth-only baseline 2741)
- Note: one intermittent ops1 I6 timeout observed once under load — **PRE-EXISTING flake**; isolated re-run **10/10 PASS**; full suite re-run green
- tsc --noEmit: **PASS**
- lint: **PASS**
- build: **PASS**
- git diff --check: **PASS**

## V. Source worktrees preservation
Auth WRITES=0 · MW6 WRITES=0 · fingerprints MATCH

## W. Product Git actions
commit/push/PR/merge = **0** · staged=0 (Auth/MW6/integration)

## X. Debt / reserves
- W2 confirm/authorize/execute multi-user migration still residual
- MW6 REAL NOT STARTED
- Confirmation at later EC Confirm remains existing path (not MW6-specific)
- Process-local campaign lease realism gap (pre-existing MW6)

## Y. Claims allowed / forbidden
**Allowed:** N2 POLICY CONSUMED · MW6↔AUTH BINDING DETERMINISTIC PROVEN · REAL_AUTHORITY_NOT_BOUND CLOSED AT DETERMINISTIC AUTHORITY-BINDING SCOPE · Auth proofs carried · MW6 PRE-REAL preserved
**Forbidden:** MW6 REAL proven · hosted web_search REAL · E2E REAL · MW6 COMPLETE · Cognitive Completion · production-ready · runtime v3 ADOPTED · N3 proven · Morris automated

## Z. Unique verdict
# READY FOR CHATGPT MW6↔AUTH BINDING REVIEW — N2 POLICY CONSUMED / DETERMINISTIC AUTHORITY BINDING PROVEN / MW6 REAL NOT STARTED
