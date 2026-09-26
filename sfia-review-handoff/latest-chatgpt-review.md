# NATIVE-EXECUTION-LOOP-AUTH-S1-CORR-01 — FULL Review Pack (Critical Review Closure)

## 1. Date / heure

- Local: 2026-09-26 21:44:31 UTC+02:00
- UTC: 2026-09-26T19:44:31Z
- Pack generated after closure of ChatGPT review gaps + full Studio validation.

## 2. Macro

NATIVE-EXECUTION-LOOP-AUTH-S1-CORR-01

Same cycle continuation — NOT a new cycle / micro-cycle / architecture / capacity.

## 3. Cycle / Profil

- Cycle: 8 — Delivery / implémentation
- Profil: CRITICAL
- Typologie: EVOL corrective

## 4. Morris GO continuation consumed

Previous Morris GO for AUTH-S1-CORR-01 already authorized this corrective scope.

Continuation authorized without new GO for closing three ChatGPT review gaps.

Still NOT authorized: project commit / push / PR / merge / Cursor REAL / StudyFlow mutation / Roadmap / Doctrine / C1 / framing / method / prompts / workflows / runtime v3.

## 5. Previous ChatGPT review

Previous handoff tip: `2aadb2075e4bf42bac664a0af026fa2064404acf`
Previous blob: `7d0d915576904fcc34cde3338c39926167f2d80a`
ChatGPT verdict on prior candidate: **NOT READY — AUTH-S1 CORRECTION INCOMPLETE**
Design principal: ACCEPTED.
Gaps remaining (now closed):
1. exact generic requiredCapabilities
2. sealed inputs.effectClass coherence
3. true post-Evidence governed retry authenticated PREPARE

## 6. Git Truth

```
branch: fix/sfia-studio-native-execution-loop-auth-s1-binding-01
HEAD: 7d62e09eaadba4919091f94d82b5e648c98826d1
origin/main: 7d62e09eaadba4919091f94d82b5e648c98826d1
staged: none
BASE unchanged
```

Candidate before continuation:
- M piloteS1AuthorityPolicy.ts (generic/legacy split with `.includes` capability check)
- ?? nativeExecutionLoopAuthS1BindingCorr01.d0.test.ts (clarify PREPARE only)

Candidate after continuation (same two project files):
- M piloteS1AuthorityPolicy.ts (exact capability + sealed effectClass)
- ?? nativeExecutionLoopAuthS1BindingCorr01.d0.test.ts (expanded: capability/effectClass negatives + post-Evidence recovery PREPARE)

## 7. Sources re-read (READ ONLY)

Build Doctrine / Roadmap / C1 framing 34–36 / NELC capitalisation / cycle template / CKC Delivery 08 / policy + prepare + semantics + derive + generalist surface / recovery harnesses (checkpointF, recoveryOwnership integration, prestartFailure).

## 8. Design principal preserved

- generic Product EC quartet unchanged
- internal effectClass / internalEffectAction enforcement-only
- authority from `projectRequiredAuthorityFromEffects(governedEffects…)`
- semantic fingerprint unchanged
- legacy effect-scoped path retained
- NO rollback to `contract.action = product:read` on Product generic path

## 9. Gap #1 — Generic capability exactness

### Implementation

`isCanonicalGenericProductSurface` now requires:

```
requiredCapabilities.length === 1
&& requiredCapabilities[0] === STUDIO_CURSOR_GENERALIST_CAPABILITY
```

(not `.includes`)

### Positives / negatives

- A exact generic capability only → PASS
- B generic + additional (`cap:product-merge`) → CONTRACT_BINDING_MISMATCH
- C missing / hostile → FAIL CLOSED
- D replaced → FAIL CLOSED

## 10. Gap #2 — Sealed effectClass

### Implementation

For exact generic surface:

1. sealed `inputs.effectClass` required
2. sealed `inputs.internalEffectAction` required
3. `sealedEffectClass === governedEffects.effectClass`
4. `sealedInternal === actionForEffectClass(governedEffects.effectClass)`

Authority source remains **governedEffects.effectClass** — sealed effectClass is binding control only, never authority selector.

### Negatives

1. effectClass=push + internalEffectAction=product:read + governed=read → FAIL
2. effectClass absent → FAIL
3. internalEffectAction absent → FAIL
4. effectClass=read + internalEffectAction=product:local-write → FAIL

## 11. Gap #3 — Post-Evidence governed retry

### Seed chain (deterministic local harness; ≠ Cursor REAL)

EC prepare (forceLocalAuthority seed) → inspect/confirm/authorize → select/start → settleDeterministicProductCursorFailure → materializeProductOutcomeFromAttempt (Evidence+RB+recover) → resolvePostEvidenceRecoveryContext

### Then Product path

Recovery OptionSet (nouvelle tentative) → GOVERNED HumanDecision (distinct, DecisionBasis trajectory_option) → prepareExecutionContractFromW2Decision with authenticatedPilote **without** forceLocalAuthority

### Proven

- prepared.ok = true
- generic quartet exact (capabilities `=== [cap:studio.cursor.generalist]`)
- inputs.effectClass=read / internalEffectAction=product:read
- recoveryAttemptId / Evidence / ReviewBundle / ExecutionContractId sealed
- S1 Evidence source = BETTER_AUTH_GITHUB_MULTI_USER_S1; actor = authenticated pilote
- `evd:w3a-prep:<decision>` absent
- source Attempt count unchanged; new EC Attempt count = 0
- attemptCreated=false; executionPerformed=false

Clarify authenticated PREPARE retained as complementary proof (not alone named StudyFlow-equivalent recovery).

## 12. Legacy compatibility

- product:read + effectClass=read → PASS
- product:read + effectClass=push → FAIL CLOSED
- non-exact generic does NOT become implicitly valid; falls to legacy exact match or fail-closed

## 13. Security / fail-closed

- exact action/target/scope/capability
- sealed effectClass + internalEffectAction mandatory on generic
- governed effectClass remains authority source
- no "if generic action then allow"
- no client selection of effectClass/action/authority
- MORRIS / login-only / adversarial suites still PASS
- semantic fingerprint not weakened

## 14. Files modified / created

Production:
- `projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts`

Tests:
- `projects/sfia-studio/app/__tests__/auth/nativeExecutionLoopAuthS1BindingCorr01.d0.test.ts` (new; all proofs in this file)

NOT modified: generalistExecutionSurface / w3aProductExecutionSemantics / prepareExecutionContractFromW2Decision / s1Authority / recovery production / Roadmap / Doctrine / C1 / framing / method / prompts / CI.

## 15. Diff utile complet — piloteS1AuthorityPolicy.ts

```diff
diff --git a/projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts b/projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts
index 7b12c609..7620393c 100644
--- a/projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts
+++ b/projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts
@@ -11,6 +11,12 @@

 import type { AuthorityLevel } from "@/lib/oa/decision";
 import type { AuthorityClass } from "@/lib/oa/execution-contract";
+import {
+  STUDIO_CURSOR_GENERALIST_ACTION,
+  STUDIO_CURSOR_GENERALIST_CAPABILITY,
+  STUDIO_CURSOR_GENERALIST_SCOPE,
+  STUDIO_CURSOR_GENERALIST_TARGET,
+} from "@/lib/oa/execution-contract/domain/generalistExecutionSurface";
 import { computeInspectionFingerprint } from "@/lib/oa/execution-contract/domain/inspectionAttestation";
 import {
   actionForEffectClass,
@@ -130,6 +136,40 @@ function isExecutionContractId(value: unknown): value is string {
   return typeof value === "string" && /^xct:[A-Za-z0-9][A-Za-z0-9:_\-.]*$/.test(value);
 }

+/**
+ * Canonical generic Product EC surface (NELC / PR #527).
+ * Distinct from internal effect-class ActionPolicy facts (product:read, …).
+ * requiredCapabilities must be EXACTLY the single generalist capability —
+ * `.includes` alone would accept hostile capability widening.
+ */
+function isCanonicalGenericProductSurface(contract: {
+  readonly action: string;
+  readonly target: string;
+  readonly scope: string;
+  readonly requiredCapabilities: readonly string[];
+}): boolean {
+  return (
+    contract.action === STUDIO_CURSOR_GENERALIST_ACTION &&
+    contract.target === STUDIO_CURSOR_GENERALIST_TARGET &&
+    contract.scope === STUDIO_CURSOR_GENERALIST_SCOPE &&
+    contract.requiredCapabilities.length === 1 &&
+    contract.requiredCapabilities[0] === STUDIO_CURSOR_GENERALIST_CAPABILITY
+  );
+}
+
+function sealedInputString(
+  inputs: AuthS1GovernedContractContext["inputs"],
+  key: "internalEffectAction" | "effectClass",
+): string | null {
+  if (inputs == null || typeof inputs !== "object" || Array.isArray(inputs)) {
+    return null;
+  }
+  const value = (inputs as Record<string, unknown>)[key];
+  if (typeof value !== "string") return null;
+  const trimmed = value.trim();
+  return trimmed.length > 0 ? trimmed : null;
+}
+
 /**
  * Login / session-only — ALWAYS fail-closed.
  */
@@ -282,13 +322,68 @@ export function resolvePiloteS1AuthorityFromGovernedContract(input: {
     };
   }

-  const expectedAction = actionForEffectClass(governedEffects.effectClass);
-  if (expectedAction !== action) {
+  // Product semantic WHAT vs internal enforcement HOW:
+  // - exact generic EC: validate sealed inputs.effectClass + internalEffectAction
+  //   against governedEffects.effectClass (authority source remains governed).
+  // - legacy effect-scoped EC: contract.action === actionForEffectClass(…).
+  // - anything else: fail-closed.
+  // Authority projection always uses governedEffects.effectClass — never inputs.
+  const expectedInternalAction = actionForEffectClass(
+    governedEffects.effectClass,
+  );
+  if (isCanonicalGenericProductSurface({
+    action,
+    target: contractTarget,
+    scope: contractScope,
+    requiredCapabilities: contract.requiredCapabilities,
+  })) {
+    const sealedEffectClass = sealedInputString(contract.inputs, "effectClass");
+    const sealedInternal = sealedInputString(
+      contract.inputs,
+      "internalEffectAction",
+    );
+    if (sealedEffectClass == null) {
+      return {
+        ok: false,
+        code: CONTRACT_BINDING_MISMATCH,
+        message:
+          "Generic ExecutionContract requires sealed inputs.effectClass " +
+          "coherent with governed effectClass for Auth S1 binding.",
+      };
+    }
+    if (sealedInternal == null) {
+      return {
+        ok: false,
+        code: CONTRACT_BINDING_MISMATCH,
+        message:
+          "Generic ExecutionContract requires sealed inputs.internalEffectAction " +
+          "coherent with governed effectClass for Auth S1 binding.",
+      };
+    }
+    if (sealedEffectClass !== governedEffects.effectClass) {
+      return {
+        ok: false,
+        code: CONTRACT_BINDING_MISMATCH,
+        message:
+          `Sealed inputs.effectClass (${sealedEffectClass}) does not match ` +
+          `governed effectClass (${governedEffects.effectClass}).`,
+      };
+    }
+    if (sealedInternal !== expectedInternalAction) {
+      return {
+        ok: false,
+        code: CONTRACT_BINDING_MISMATCH,
+        message:
+          `Internal effect action (${sealedInternal}) does not match ` +
+          `effect class action (${expectedInternalAction}).`,
+      };
+    }
+  } else if (expectedInternalAction !== action) {
     return {
       ok: false,
       code: CONTRACT_BINDING_MISMATCH,
       message:
-        `Effect class action (${expectedAction}) does not match contract.action (${action}).`,
+        `Effect class action (${expectedInternalAction}) does not match contract.action (${action}).`,
     };
   }
```

## 16. Contenu complet — nativeExecutionLoopAuthS1BindingCorr01.d0.test.ts

```ts
// @vitest-environment node
/**
 * NATIVE-EXECUTION-LOOP-AUTH-S1-CORR-01
 *
 * Authenticated Pilote S1 must bind the canonical generic Product EC
 * (studio.cursor.generalist.execute) while validating sealed internal
 * effect facts (effectClass + product:read, …) separately.
 *
 * Deterministic only — no Cursor REAL, no StudyFlow mutation.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryAuthorityResolver } from "@/lib/oa/decision";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import {
  CONTRACT_BINDING_MISMATCH,
  resolvePiloteS1AuthorityFromGovernedContract,
  type AuthS1GovernedContractContext,
} from "@/lib/auth/piloteS1AuthorityPolicy";
import { BETTER_AUTH_GITHUB_MULTI_USER_S1 } from "@/lib/auth/constants";
import {
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
  STUDIO_CURSOR_GENERALIST_SCOPE,
  STUDIO_CURSOR_GENERALIST_TARGET,
} from "@/lib/oa/execution-contract/domain/generalistExecutionSurface";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { materializeProductOutcomeFromAttempt } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import {
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import { assertStudioCursorRealOffForTests } from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { clearW3bBoundaryArm } from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  settleDeterministicProductCursorFailure,
  tempProductDbPath,
  W2_FIXED_NOW,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "../project-assistant/w2Harness";

const piloteA = {
  ok: true as const,
  githubUserId: "11111111",
  betterAuthUserId: "ba-user-a",
  actor: mapGithubIdentityToPiloteActor({ githubUserId: "11111111" }),
};

function futureWindow() {
  const issuedAt = new Date().toISOString();
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
  return { issuedAt, expiresAt };
}

function makeGenericContract(
  overrides: Partial<AuthS1GovernedContractContext> = {},
): AuthS1GovernedContractContext {
  return {
    executionContractId: overrides.executionContractId ?? "xct:nelc-s1-generic",
    projectId: overrides.projectId ?? "prj:demo",
    action: overrides.action ?? STUDIO_CURSOR_GENERALIST_ACTION,
    target: overrides.target ?? STUDIO_CURSOR_GENERALIST_TARGET,
    scope: overrides.scope ?? STUDIO_CURSOR_GENERALIST_SCOPE,
    requiredAuthority: overrides.requiredAuthority ?? "N1",
    requiredCapabilities:
      overrides.requiredCapabilities ?? [STUDIO_CURSOR_GENERALIST_CAPABILITY],
    constraints: overrides.constraints ?? ["c:demo"],
    stopConditions: overrides.stopConditions ?? ["stop:demo"],
    evidenceRequirements: overrides.evidenceRequirements ?? ["evreq:demo"],
    reversibility: overrides.reversibility ?? "partially_reversible",
    idempotencyKey: overrides.idempotencyKey ?? "idem:nelc-s1-generic",
    inputs:
      overrides.inputs ??
      ({
        internalEffectAction: "product:read",
        effectClass: "read",
      } as Record<string, unknown>),
    ...(overrides.decisionRefs !== undefined
      ? { decisionRefs: overrides.decisionRefs }
      : {}),
    ...(overrides.cycleInstanceId !== undefined
      ? { cycleInstanceId: overrides.cycleInstanceId }
      : {}),
    ...(overrides.expectedOutputs !== undefined
      ? { expectedOutputs: overrides.expectedOutputs }
      : {}),
  };
}

function resolveRead(contract: AuthS1GovernedContractContext) {
  return resolvePiloteS1AuthorityFromGovernedContract({
    contract,
    governedEffects: {
      effectClass: "read",
      rollbackAvailable: true,
      protectedBoundaries: [],
      scopeIn: contract.scope,
      target: contract.target,
    },
  });
}

describe("AUTH-S1-CORR-01 — generic EC + internal effect binding", () => {
  it("A — exact generic capability only → S1 PASS + Evidence", () => {
    const contract = makeGenericContract();
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.level).toBe("N1");
    expect(resolved.effectClass).toBe("read");

    const resolver = new MemoryAuthorityResolver();
    const { issuedAt, expiresAt } = futureWindow();
    const issued = issueS1AuthorityEvidence({
      pilote: piloteA,
      authorityResolver: resolver,
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        scopeIn: contract.scope,
        target: contract.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: "evd:nelc-s1-generic-ok",
    });
    expect(issued.ok).toBe(true);
    if (!issued.ok) return;
    expect(issued.evidence.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(issued.evidence.level).toBe("N1");
    expect(issued.evidence.canActAsMorris).toBe(false);
  });

  it("B — generic capability + additional capability → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      requiredCapabilities: [
        STUDIO_CURSOR_GENERALIST_CAPABILITY,
        "cap:product-merge",
      ],
    });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
      expect(resolved.message).toContain("does not match contract.action");
    }
  });

  it("C — generic capability missing → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      requiredCapabilities: ["cap:hostile"],
    });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("D — generic capability replaced → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      requiredCapabilities: ["cap:product-read"],
    });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("generic action + tampered target → FAIL CLOSED (not legacy-accepted)", () => {
    const contract = makeGenericContract({ target: "tgt:hostile" });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
      expect(resolved.message).toContain("does not match contract.action");
    }
  });

  it("sealed effectClass mismatch + coherent internalEffectAction → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      inputs: {
        internalEffectAction: "product:read",
        effectClass: "push",
      },
    });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
      expect(resolved.message).toContain("Sealed inputs.effectClass");
    }
  });

  it("sealed effectClass absent → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      inputs: { internalEffectAction: "product:read" },
    });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
      expect(resolved.message).toContain("inputs.effectClass");
    }
  });

  it("sealed internalEffectAction absent → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      inputs: { effectClass: "read" },
    });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
      expect(resolved.message).toContain("internalEffectAction");
    }
  });

  it("sealed effectClass=read + internalEffectAction=product:local-write → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      inputs: {
        internalEffectAction: "product:local-write",
        effectClass: "read",
      },
    });
    const resolved = resolveRead(contract);
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
      expect(resolved.message).toContain("Internal effect action");
    }
  });

  it("legacy product:read + effectClass=read still PASS", () => {
    const legacy: AuthS1GovernedContractContext = {
      executionContractId: "xct:legacy-ok",
      projectId: "prj:demo",
      action: "product:read",
      target: "tgt:legacy",
      scope: "biz:legacy",
      requiredAuthority: "N1",
      requiredCapabilities: ["cap:product-read"],
      constraints: ["c"],
      stopConditions: ["s"],
      evidenceRequirements: ["e"],
      reversibility: "partially_reversible",
      idempotencyKey: "idem:legacy-ok",
    };
    const resolved = resolvePiloteS1AuthorityFromGovernedContract({
      contract: legacy,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        scopeIn: "biz:legacy",
        target: "tgt:legacy",
      },
    });
    expect(resolved.ok).toBe(true);
  });

  it("legacy product:read + effectClass=push still FAIL CLOSED", () => {
    const legacy: AuthS1GovernedContractContext = {
      executionContractId: "xct:legacy-mismatch",
      projectId: "prj:demo",
      action: "product:read",
      target: "tgt:legacy",
      scope: "biz:legacy",
      requiredAuthority: "N1",
      requiredCapabilities: ["cap:product-read"],
      constraints: ["c"],
      stopConditions: ["s"],
      evidenceRequirements: ["e"],
      reversibility: "partially_reversible",
      idempotencyKey: "idem:legacy-mismatch",
    };
    const resolved = resolvePiloteS1AuthorityFromGovernedContract({
      contract: legacy,
      governedEffects: {
        effectClass: "push",
        rollbackAvailable: true,
        scopeIn: "biz:legacy",
        target: "tgt:legacy",
      },
    });
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
  });
});

describe("AUTH-S1-CORR-01 — authenticated Product PREPARE (clarify)", () => {
  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    assertStudioCursorRealOffForTests();
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date(W2_FIXED_NOW));
  });

  afterEach(() => {
    vi.useRealTimers();
    cleanupW2TempDirs();
    assertStudioCursorRealOffForTests();
  });

  it("clarify PREPARE via authenticatedPilote without forceLocalAuthority", async () => {
    const db = tempProductDbPath("nelc-auth-s1-prep.sqlite");
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: "nelc-auth-s1",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "nelc-auth-s1",
    });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    if (!qualification.ok) throw new Error("qualification");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: CLARIFY_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true, // decision seeding only
    });
    if (!decided.ok) throw new Error("decide");

    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      authenticatedPilote: piloteA,
      // intentionally NO forceLocalAuthority — StudyFlow blocker path
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });

    if (!prepared.ok) {
      throw new Error(`${prepared.code}: ${prepared.message}`);
    }
    expect(prepared.ok).toBe(true);
    expect(prepared.contract.action).toBe(STUDIO_CURSOR_GENERALIST_ACTION);
    expect(prepared.contract.target).toBe(STUDIO_CURSOR_GENERALIST_TARGET);
    expect(prepared.contract.scope).toBe(STUDIO_CURSOR_GENERALIST_SCOPE);
    expect(prepared.contract.requiredCapabilities).toEqual([
      STUDIO_CURSOR_GENERALIST_CAPABILITY,
    ]);
    expect(prepared.attemptCreated).toBe(false);
    expect(prepared.executionPerformed).toBe(false);

    const loaded = await oa.executionContractServices.getExecutionContract.execute(
      { executionContractId: prepared.contract.executionContractId },
    );
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.inputs?.internalEffectAction).toBe("product:read");
    expect(loaded.contract.inputs?.effectClass).toBe("read");

    const authEvidence = oa.authorityResolver.getEvidence(
      `evd:w3a-auth-s1:${decided.decision.decisionId}`,
    );
    expect(authEvidence).not.toBeNull();
    expect(authEvidence?.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(authEvidence?.level).toBe("N1");
    expect(authEvidence?.canActAsMorris).toBe(false);
    expect(authEvidence?.actorId).toBe(piloteA.actor.actorId);
    expect(
      oa.authorityResolver.getEvidence(
        `evd:w3a-prep:${decided.decision.decisionId}`,
      ),
    ).toBeNull();
  });
});

describe("AUTH-S1-CORR-01 — post-Evidence governed retry authenticated PREPARE", () => {
  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
    setConversationProviderForTests(null);
    clearW3bBoundaryArm();
    assertStudioCursorRealOffForTests();
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date(W2_FIXED_NOW));
  });

  afterEach(() => {
    vi.useRealTimers();
    clearW3bBoundaryArm();
    cleanupW2TempDirs();
    setConversationProviderForTests(null);
    assertStudioCursorRealOffForTests();
  });

  it("FAIL→Evidence→RB→Recovery→GOVERNED HD→authenticated PREPARE (ZERO NEW Attempt)", async () => {
    // ---- Seed: EC → Attempt FAIL → Evidence/RB (deterministic local; ≠ Cursor REAL)
    const db = tempProductDbPath("nelc-auth-s1-recovery.sqlite");
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: "nelcAuthS1Rec",
    });
    const seeded = await seedQualifiedProject(runtime, {
      suffix: "nelc-auth-s1-rec",
    });
    const oa = runtime.oa!;

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    if (!qualification.ok) throw new Error("qual");
    const proposedSeed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    if (!proposedSeed.ok) throw new Error("propose-seed");
    const decidedSeed = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposedSeed.optionSetRef,
      options: proposedSeed.options,
      recommendedOptionRef: proposedSeed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposedSeed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposedSeed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    if (!decidedSeed.ok) throw new Error("decide-seed");

    const preparedSeed = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decidedSeed.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
      qualifiedOperationKind: "generate-temporary-artifact",
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!preparedSeed.ok) throw new Error(preparedSeed.code);
    const sourceEcId = preparedSeed.contract.executionContractId;

    await inspectExecutionContract({
      oa,
      projectId: seeded.projectId,
      executionContractId: sourceEcId,
    });
    const confirmed = await confirmExecutionContractForAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId: sourceEcId,
      forceLocalAuthority: true,
    });
    if (!confirmed.ok) throw new Error(confirmed.code);
    const authorized = await evaluateExecutionAuthorization({
      oa,
      projectId: seeded.projectId,
      executionContractId: sourceEcId,
      forceLocalAuthority: true,
    });
    if (!(authorized.ok && authorized.outcome === "AUTHORIZED")) {
      throw new Error("authorize");
    }

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId: seeded.projectId,
      executionContractId: sourceEcId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error(selected.code);
    const started = await governedExecuteStart({
      oa,
      projectId: seeded.projectId,
      executionContractId: sourceEcId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    if (!started.ok) throw new Error(started.code);
    const failed = await settleDeterministicProductCursorFailure({
      oa,
      attemptId: started.attemptId,
    });
    if (!failed.ok) throw new Error(failed.code);
    expect(failed.attempt.status).toBe("failed");

    const materialized = await materializeProductOutcomeFromAttempt({
      oa,
      projectId: seeded.projectId,
      attemptId: started.attemptId,
    });
    if (!materialized.ok) throw new Error(materialized.code);
    expect(materialized.product.outcome).toBe("FAIL");
    expect(materialized.postEvidence?.ok).toBe(true);
    if (!materialized.postEvidence || !materialized.postEvidence.ok) {
      throw new Error("postEvidence");
    }
    expect(materialized.postEvidence.recommendation.kind).toBe("recover");

    const recovery = await resolvePostEvidenceRecoveryContext({
      oa,
      projectId: seeded.projectId,
    });
    if (!recovery.ok || recovery.context == null) {
      throw new Error("recovery-context");
    }
    expect(recovery.context.attemptId).toBe(started.attemptId);
    expect(recovery.context.evidenceId).toBe(materialized.product.evidenceId);
    expect(recovery.context.reviewBundleId).toBe(
      materialized.product.reviewBundleId,
    );
    expect(recovery.context.executionContractId).toBe(sourceEcId);

    // ---- Recovery OptionSet + GOVERNED HumanDecision (distinct from seed)
    const qualRecovery = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    if (!qualRecovery.ok) throw new Error("qual-recovery");
    const proposedRecovery = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualRecovery.qualification.inputs,
      packagePin: qualRecovery.qualification.packagePin,
      objective: qualRecovery.qualification.objective,
      projectTitle: qualRecovery.qualification.projectTitle,
    });
    if (!proposedRecovery.ok) throw new Error("propose-recovery");
    expect(proposedRecovery.options[0]!.label).toMatch(/nouvelle tentative/i);
    expect(proposedRecovery.options.map((o) => o.optionRef)).toContain(
      GOVERNED_OPTION_REF,
    );

    const decidedRecovery = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposedRecovery.optionSetRef,
      options: proposedRecovery.options,
      recommendedOptionRef: proposedRecovery.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposedRecovery.proposedTrajectory!.trajectoryId,
      candidateVersion: proposedRecovery.proposedTrajectory!.version,
      forceLocalAuthority: true, // decision seeding only
    });
    if (!decidedRecovery.ok) throw new Error("decide-recovery");
    expect(decidedRecovery.decision.decisionId).not.toBe(
      decidedSeed.decision.decisionId,
    );
    expect(decidedRecovery.decision.selectedOptionRef).toBe(GOVERNED_OPTION_REF);
    expect(decidedRecovery.decision.decisionBasisLinked).toBe(true);
    const durableHd = await oa.decisionServices.getHumanDecision.execute({
      decisionId: decidedRecovery.decision.decisionId,
    });
    if (!durableHd.ok) throw new Error("load-hd");
    expect(durableHd.decision.decisionBasis).toBeTruthy();
    expect(durableHd.decision.decisionBasis?.sourceType).toBe(
      "trajectory_option",
    );
    expect(
      durableHd.decision.decisionBasis?.trajectoryContext?.selectedOptionRef,
    ).toBe(GOVERNED_OPTION_REF);

    // ---- Attempt count BEFORE authenticated retry PREPARE
    const attemptsBefore =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: sourceEcId,
      });
    if (!attemptsBefore.ok) throw new Error("list-before");
    const countBefore = attemptsBefore.attempts.length;
    expect(countBefore).toBeGreaterThanOrEqual(1);

    // ---- Authenticated PREPARE (StudyFlow-equivalent blocker path)
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decidedRecovery.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      authenticatedPilote: piloteA,
      // intentionally NO forceLocalAuthority
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    if (!prepared.ok) {
      throw new Error(`${prepared.code}: ${prepared.message}`);
    }

    expect(prepared.ok).toBe(true);
    expect(prepared.contract.action).toBe(STUDIO_CURSOR_GENERALIST_ACTION);
    expect(prepared.contract.target).toBe(STUDIO_CURSOR_GENERALIST_TARGET);
    expect(prepared.contract.scope).toBe(STUDIO_CURSOR_GENERALIST_SCOPE);
    expect(prepared.contract.requiredCapabilities).toEqual([
      STUDIO_CURSOR_GENERALIST_CAPABILITY,
    ]);
    expect(prepared.attemptCreated).toBe(false);
    expect(prepared.executionPerformed).toBe(false);
    expect(prepared.contract.executionContractId).not.toBe(sourceEcId);

    const loaded = await oa.executionContractServices.getExecutionContract.execute(
      { executionContractId: prepared.contract.executionContractId },
    );
    if (!loaded.ok) throw new Error("load-retry");
    expect(loaded.contract.inputs?.effectClass).toBe("read");
    expect(loaded.contract.inputs?.internalEffectAction).toBe("product:read");
    expect(loaded.contract.inputs?.recoveryAttemptId).toBe(started.attemptId);
    expect(loaded.contract.inputs?.recoveryEvidenceId).toBe(
      materialized.product.evidenceId,
    );
    expect(loaded.contract.inputs?.recoveryReviewBundleId).toBe(
      materialized.product.reviewBundleId,
    );
    expect(loaded.contract.inputs?.recoveryExecutionContractId).toBe(sourceEcId);

    const authEvidence = oa.authorityResolver.getEvidence(
      `evd:w3a-auth-s1:${decidedRecovery.decision.decisionId}`,
    );
    expect(authEvidence).not.toBeNull();
    expect(authEvidence?.source).toBe(BETTER_AUTH_GITHUB_MULTI_USER_S1);
    expect(authEvidence?.actorId).toBe(piloteA.actor.actorId);
    expect(authEvidence?.canActAsMorris).toBe(false);
    expect(
      oa.authorityResolver.getEvidence(
        `evd:w3a-prep:${decidedRecovery.decision.decisionId}`,
      ),
    ).toBeNull();

    // ---- ZERO NEW Attempt from retry PREPARE
    const attemptsAfterSource =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: sourceEcId,
      });
    if (!attemptsAfterSource.ok) throw new Error("list-after-source");
    expect(attemptsAfterSource.attempts.length).toBe(countBefore);

    const attemptsAfterRetry =
      await oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: prepared.contract.executionContractId,
      });
    if (!attemptsAfterRetry.ok) throw new Error("list-after-retry");
    expect(attemptsAfterRetry.attempts.length).toBe(0);
  });
});
```

## 17. Tests ciblés

```
npm test -- \
  __tests__/auth/nativeExecutionLoopAuthS1BindingCorr01.d0.test.ts \
  __tests__/auth/policy-action-scoped-s1.test.ts \
  __tests__/auth/binding-s1-adversarial.test.ts \
  __tests__/project-assistant/nativeExecutionLoopConvergence01.prepareSourceGrounding.d0.test.ts
```

Result: **89 passed / 89** (4 files)

## 18. Recovery complementary (harness non modifié; non-régression)

```
checkpointF.recoveryOptionsContext.d0.test.ts
pilotExecutionExperience.recoveryOwnership.integration.d0.test.ts
recoveryOwnership.prestartFailure.integration.d0.test.ts
```

Result: **26 passed / 26** (3 files) — executed because the new regression reuses their patterns; files not modified.

## 19. Typecheck / Lint / Build

- typecheck: PASS (`tsc --noEmit`)
- lint: PASS (No ESLint warnings or errors)
- build: PASS (Next.js production build)

## 20. Full npm test

```
Test Files  439 passed | 17 skipped (456)
Tests       4872 passed | 137 skipped (5009)
```

FinOps/T7 test:db NOT run — not claimed as FinOps PASS.

## 21. Fake / Real qualification

- Entry: REAL StudyFlow authenticated PREPARE blocker observation
- Cycle proof: DETERMINISTIC ONLY
- Deterministic failed Attempt/Evidence/RB: TEST / LOCAL DETERMINISTIC SEED ≠ Cursor REAL ≠ StudyFlow mutation
- ZERO new Cursor REAL
- ZERO StudyFlow mutation
- ZERO NEW ATTEMPT from retry PREPARE
- ZERO auto Execute

Allowed claim:
AUTHENTICATED S1 GENERIC EC BINDING CORRECTION DETERMINISTICALLY PROVEN INCLUDING POST-EVIDENCE GOVERNED RETRY PREPARE.

Forbidden claims NOT made: generic loop REAL proven / READY FOR REAL / Product READY / runtime v3 ADOPTED / StudyFlow production-reproven.

## 22. Diff check / staging / commit

```
git diff --check → PASS
staged → none
project commit → NO
project push → NO
PR → NO
merge → NO
```

Project-scope status:
```
M  projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts (+98/−3)
?? projects/sfia-studio/app/__tests__/auth/nativeExecutionLoopAuthS1BindingCorr01.d0.test.ts
```

## 23. Réserves

### Blocking

None for READY FOR COMMIT — AUTH-S1 BINDING CORRECTION.

### Residual

1. Post-integration manual StudyFlow / clean-project PREPARE observation remains optional Product validation (not required for deterministic claim).
2. Roadmap documentary truth-sync deferred until after commit/integration.
3. Seed Attempt exists in harness as post-Evidence history — claim is ZERO NEW Attempt from retry PREPARE (proven), not "zero Attempt ever".

## 24. Morris Decisions Required

1. GO COMMIT on `fix/sfia-studio-native-execution-loop-auth-s1-binding-01`
2. later GO PUSH + PR
3. optional post-merge Product PREPARE observation
4. separate Roadmap documentary cycle after integration

## 25. Verdict

**READY FOR COMMIT — AUTH-S1 BINDING CORRECTION**
