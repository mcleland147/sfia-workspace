# NATIVE-EXECUTION-LOOP-AUTH-S1-CORR-01 — FULL Review Pack

## 1. Date / heure

- Local: 2026-09-26 21:32:29 CEST
- UTC: 2026-09-26T19:32:29Z
- Pack generated after full Studio validation.

## 2. Macro

NATIVE-EXECUTION-LOOP-AUTH-S1-CORR-01

Authenticated Pilote S1 AuthorityEvidence binding correction for the canonical generic Product ExecutionContract (`studio.cursor.generalist.execute`) introduced by PR #527.

## 3. Cycle

8 — Delivery / implémentation

## 4. Profil

CRITICAL

Justification: touches Authenticated Pilote S1, AuthorityEvidence, ExecutionContract semantic binding, Product WHAT vs internal enforcement effects separation. Incorrect relaxation could widen authority or reintroduce effect-class Product contracts.

## 5. Morris GO consommé

Morris authorized:

- local analysis of the affected path
- local corrective branch creation
- bounded application modifications
- deterministic unit / integration tests
- full Studio test suite if needed
- FULL review pack
- canonical L3 Review Handoff publication

Morris did NOT authorize in this cycle:

- project commit
- project branch push
- PR create
- merge
- branch delete
- force push
- Cursor REAL
- real Cursor subprocess
- new StudyFlow execution
- Roadmap / Build Doctrine / C1 / framing v3 / method / prompts / CI workflow changes
- runtime v3 promotion
- parallel architecture
- replacement of generic ExecutionContract by specialized read/write contracts

Max authorized verdict: READY FOR COMMIT — AUTH-S1 BINDING CORRECTION

## 6. Git Truth initial

```
pwd: /Users/morris/Projects/sfia-workspace
branch (initial): (was main / then created fix branch)
origin/main: 7d62e09eaadba4919091f94d82b5e648c98826d1
HEAD after branch create: 7d62e09eaadba4919091f94d82b5e648c98826d1
staged: none (project)
working tree: clean for project paths; `.tmp-sfia-review/**` local artifacts present (never staged)
```

Target branch created from EXACT origin/main:

`fix/sfia-studio-native-execution-loop-auth-s1-binding-01`

Current (post-implementation, no project commit):

```
branch: fix/sfia-studio-native-execution-loop-auth-s1-binding-01
HEAD:   7d62e09eaadba4919091f94d82b5e648c98826d1
origin/main: 7d62e09eaadba4919091f94d82b5e648c98826d1
```

BASE unchanged — no STOP — BASE CHANGED.

## 7. Sources lues (READ ONLY)

1. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
2. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
3. `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
4. `projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md`
5. `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md`
6. `projects/sfia-studio/sfia-v3-framing/36-sfia-v2.6-inheritance-and-adaptation-matrix.md`
7. `projects/sfia-studio/convergence/sfia-studio-native-execution-loop-convergence-01-capitalisation.md`
8. `prompts/templates/sfia-cycle-execution-template.md`
9. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
10. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
11. `method/sfia-fast-track/core/sfia-rules-update.md`
12. `projects/sfia-studio/app/lib/oa/doctrine/product/packages/pkg-sfia-studio-doctrine-v3-1.0.0/ckc/08-delivery-implementation.md`

Diagnostic sources (code):

- `projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts`
- `projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts`
- `projects/sfia-studio/app/lib/auth/s1Authority.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/domain/generalistExecutionSurface.ts`

Build Doctrine / Roadmap / C1 / framing / method / prompts: **unchanged** (READ ONLY).

## 8. Root cause — CONFIRMÉE

StudyFlow authenticated path:

HumanDecision → PREPARE ExecutionContract → Authenticated Pilote S1 AuthorityEvidence

Runtime error:

```
Effect class action (product:read) does not match contract.action (studio.cursor.generalist.execute).
```

Confirmed in code:

1. **Generic Product EC (PR #527)** — `PRODUCT_CANONICAL_EXECUTION_ACTION` = `studio.cursor.generalist.execute`. Envelope also seals `inputs.internalEffectAction` / `inputs.effectClass` from governed effects.

2. **Non-mutating recovery/clarify missions** derive internal `operationKind = read` → `effectClass = read` → `internalEffectAction = product:read`.

3. **Old S1 policy** in `resolvePiloteS1AuthorityFromGovernedContract`:

```ts
const expectedAction = actionForEffectClass(governedEffects.effectClass);
if (expectedAction !== action) { FAIL CONTRACT_BINDING_MISMATCH }
```

This was coherent with legacy effect-scoped contracts (`product:read` === `product:read`) but **false** for the generic Product EC (`product:read` ≠ `studio.cursor.generalist.execute`).

4. Historical tests missed it because `nativeExecutionLoopConvergence01.prepareSourceGrounding.d0.test.ts` uses `forceLocalAuthority: true` and never exercises authenticated Pilote S1 against the generic EC.

Classification: APPLICATION DEFECT / CONVERGENCE GAP — not StudyFlow migration debt, not historical-data-only, not Cursor executor failure.

**No root-cause divergence.** Proceeded.

## 9. Architecture invariants (preserved)

| Invariant | Status |
|-----------|--------|
| A — generic Product EC quartet unchanged | KEPT |
| B — internal effectClass / internalEffectAction enforcement-only | KEPT |
| C — requiredAuthority from server-owned effects projection | KEPT |
| D — S1 distinguishes Product surface vs internal effect facts | FIXED |
| E — legacy `product:<effect>` surface still supported | KEPT |
| Fail-closed default | KEPT |
| No parallel architecture / no Product read-write EC catalogue | KEPT |
| No forceLocalAuthority production fallback | KEPT |
| Cursor REAL / Attempt at PREPARE | ZERO |

Canonical quartet (unchanged, imported from domain):

- action = `studio.cursor.generalist.execute`
- target = `studio.cursor.generalist.workspace`
- scope = `studio.cursor.generalist.authorized_contract`
- capability = `cap:studio.cursor.generalist`

## 10. Fichiers modifiés / créés

### Modified (production)

- `projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts`

### Created (tests)

- `projects/sfia-studio/app/__tests__/auth/nativeExecutionLoopAuthS1BindingCorr01.d0.test.ts`

### Explicitly NOT modified

- `w3aProductExecutionSemantics.ts` (already correct)
- `generalistExecutionSurface.ts` (already correct)
- `prepareExecutionContractFromW2Decision.ts` (data-flow already seals internal effects; no caller change required)
- `s1Authority.ts` (issuance path already calls resolve; no change required)
- Roadmap / Build Doctrine / C1 / framing / method / prompts / CI / UI / DB

Design selected: **Form A** — policy reads sealed `contract.inputs.internalEffectAction` and validates coherence with `governedEffects.effectClass`, while validating the generic quartet separately. No client-trusted selection. No new ActionPolicy engine.

## 11. Diff utile complet — `piloteS1AuthorityPolicy.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts b/projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts
index 7b12c609..3060c3ce 100644
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
@@ -130,6 +136,36 @@ function isExecutionContractId(value: unknown): value is string {
   return typeof value === "string" && /^xct:[A-Za-z0-9][A-Za-z0-9:_\-.]*$/.test(value);
 }

+/**
+ * Canonical generic Product EC surface (NELC / PR #527).
+ * Distinct from internal effect-class ActionPolicy facts (product:read, …).
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
+    contract.requiredCapabilities.includes(STUDIO_CURSOR_GENERALIST_CAPABILITY)
+  );
+}
+
+function sealedInternalEffectAction(
+  inputs: AuthS1GovernedContractContext["inputs"],
+): string | null {
+  if (inputs == null || typeof inputs !== "object" || Array.isArray(inputs)) {
+    return null;
+  }
+  const value = (inputs as Record<string, unknown>).internalEffectAction;
+  if (typeof value !== "string") return null;
+  const trimmed = value.trim();
+  return trimmed.length > 0 ? trimmed : null;
+}
+
 /**
  * Login / session-only — ALWAYS fail-closed.
  */
@@ -282,13 +318,44 @@ export function resolvePiloteS1AuthorityFromGovernedContract(input: {
     };
   }

-  const expectedAction = actionForEffectClass(governedEffects.effectClass);
-  if (expectedAction !== action) {
+  // Product semantic WHAT vs internal enforcement HOW:
+  // - canonical generic EC: contract.action is the generalist quartet;
+  //   sealed inputs.internalEffectAction must match effectClass.
+  // - legacy effect-scoped EC: contract.action === actionForEffectClass(…).
+  const expectedInternalAction = actionForEffectClass(
+    governedEffects.effectClass,
+  );
+  if (isCanonicalGenericProductSurface({
+    action,
+    target: contractTarget,
+    scope: contractScope,
+    requiredCapabilities: contract.requiredCapabilities,
+  })) {
+    const sealedInternal = sealedInternalEffectAction(contract.inputs);
+    if (sealedInternal == null) {
+      return {
+        ok: false,
+        code: CONTRACT_BINDING_MISMATCH,
+        message:
+          "Generic ExecutionContract requires sealed inputs.internalEffectAction " +
+          "coherent with governed effectClass for Auth S1 binding.",
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

## 12. Contenu complet — nouveau fichier de test

Path: `projects/sfia-studio/app/__tests__/auth/nativeExecutionLoopAuthS1BindingCorr01.d0.test.ts`

```ts
// @vitest-environment node
/**
 * NATIVE-EXECUTION-LOOP-AUTH-S1-CORR-01
 *
 * Authenticated Pilote S1 must bind the canonical generic Product EC
 * (studio.cursor.generalist.execute) while validating sealed internal
 * effect facts (product:read, …) separately.
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
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { CLARIFY_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import { assertStudioCursorRealOffForTests } from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
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
    idempotencyKey:
      overrides.idempotencyKey ?? "idem:nelc-s1-generic",
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

describe("AUTH-S1-CORR-01 — generic EC + internal effect binding", () => {
  it("generic quartet + sealed product:read / effectClass=read → S1 PASS", () => {
    const contract = makeGenericContract();
    const resolved = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
        scopeIn: contract.scope,
        target: contract.target,
      },
    });
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

  it("generic quartet + sealed internalEffectAction mismatch → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      inputs: {
        internalEffectAction: "product:local-write",
        effectClass: "read",
      },
    });
    const resolved = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        scopeIn: contract.scope,
        target: contract.target,
      },
    });
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
      expect(resolved.message).toContain("Internal effect action");
    }
  });

  it("generic action without sealed internalEffectAction → FAIL CLOSED", () => {
    const contract = makeGenericContract({ inputs: {} });
    const resolved = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        scopeIn: contract.scope,
        target: contract.target,
      },
    });
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("generic action + tampered target → FAIL CLOSED (not legacy-accepted)", () => {
    const contract = makeGenericContract({
      target: "tgt:hostile",
    });
    const resolved = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        scopeIn: contract.scope,
        target: "tgt:hostile",
      },
    });
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
      expect(resolved.message).toContain("does not match contract.action");
    }
  });

  it("generic action + missing generalist capability → FAIL CLOSED", () => {
    const contract = makeGenericContract({
      requiredCapabilities: ["cap:hostile"],
    });
    const resolved = resolvePiloteS1AuthorityFromGovernedContract({
      contract,
      governedEffects: {
        effectClass: "read",
        rollbackAvailable: true,
        scopeIn: contract.scope,
        target: contract.target,
      },
    });
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) expect(resolved.code).toBe(CONTRACT_BINDING_MISMATCH);
  });

  it("legacy product:read + effectClass=read still PASS", () => {
    const contract = makeGenericContract({
      action: "product:read",
      target: "tgt:legacy",
      scope: "biz:legacy",
      requiredCapabilities: ["cap:product-read"],
      inputs: undefined,
    });
    // strip inputs for pure legacy surface
    const legacy: AuthS1GovernedContractContext = {
      ...contract,
      inputs: undefined,
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

describe("AUTH-S1-CORR-01 — authenticated Product PREPARE (StudyFlow-equivalent)", () => {
  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    assertStudioCursorRealOffForTests();
    // Auth S1 evidence TTL is absolute; harness clock is fixed — align wall clock
    // so MemoryAuthorityResolver.verify does not treat S1 as expired.
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date(W2_FIXED_NOW));
  });

  afterEach(() => {
    vi.useRealTimers();
    cleanupW2TempDirs();
    assertStudioCursorRealOffForTests();
  });

  it("clarify/recovery-style PREPARE via authenticatedPilote without forceLocalAuthority", async () => {
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
      // intentionally NO forceLocalAuthority — this is the StudyFlow blocker path
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });

    if (!prepared.ok) {
      throw new Error(`${prepared.code}: ${prepared.message}`);
    }
    expect(prepared.ok).toBe(true);
    expect(prepared.contract.action).toBe(STUDIO_CURSOR_GENERALIST_ACTION);
    expect(prepared.contract.target).toBe(STUDIO_CURSOR_GENERALIST_TARGET);
    expect(prepared.contract.scope).toBe(STUDIO_CURSOR_GENERALIST_SCOPE);
    expect(prepared.contract.requiredCapabilities).toContain(
      STUDIO_CURSOR_GENERALIST_CAPABILITY,
    );
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
```

## 13. Nouveau comportement S1 binding (exact)

`resolvePiloteS1AuthorityFromGovernedContract`:

1. Existing fail-closed gates unchanged (contract id/project/idempotency/semantic arrays, scope/target coherence between contract and governedEffects, requiredAuthority trust, MORRIS refusal, unknown effectClass).

2. **NEW split:**
   - If contract matches the **exact** canonical generic quartet (action + target + scope + capability):
     - require sealed `inputs.internalEffectAction` (server-owned / contract-sealed)
     - require `sealedInternal === actionForEffectClass(effectClass)`
     - do **NOT** require `contract.action === actionForEffectClass(...)`
   - Else (legacy effect-scoped surface):
     - retain historical `actionForEffectClass(effectClass) === contract.action`
   - Else / mismatch → `CONTRACT_BINDING_MISMATCH` fail-closed

3. Authority projection from effects continues unchanged (`projectRequiredAuthorityFromEffects`).
4. Semantic fingerprint binding continues unchanged (covers concrete contract, not weakened).
5. No "if generic then allow" shortcut — quartet must be exact; sealed internal must match.

## 14. Legacy compatibility

- `contract.action = product:read` + `effectClass = read` → still PASS (legacy path).
- `contract.action = product:read` + `effectClass = push` → still FAIL CLOSED.
- Partial/tampered generic (wrong target or missing capability) falls through to legacy check and fails (not silently accepted as generic).

## 15. Security / fail-closed analysis

| Control | Result |
|---------|--------|
| No client-trusted authority selection | OK |
| No implicit N2/N3 downgrade | OK |
| No session/login alone issues S1 | OK (existing `resolvePiloteS1AuthorityLevel` + adversarial suite) |
| No arbitrary contract.action accepted | OK (exact quartet OR legacy effect-scoped match) |
| No "if generic then allow" | OK |
| Generic quartet exact | OK |
| Internal effect mismatch fail-closed | OK (`product:local-write` vs `read`) |
| Missing sealed internal on generic → fail-closed | OK |
| Morris gate distinct (MORRIS not satisfiable via Auth S1) | OK |
| Semantic fingerprint not weakened | OK |
| forceLocalAuthority not used as production fallback | OK (only decision seeding in test harness) |
| Authority still projected from effects | OK |

No security control was relaxed; layers were separated.

## 16. Tests ciblés

```
npm test -- \
  __tests__/auth/nativeExecutionLoopAuthS1BindingCorr01.d0.test.ts \
  __tests__/auth/policy-action-scoped-s1.test.ts \
  __tests__/auth/binding-s1-adversarial.test.ts \
  __tests__/project-assistant/nativeExecutionLoopConvergence01.prepareSourceGrounding.d0.test.ts
```

Result:

```
Test Files  4 passed (4)
Tests       84 passed (84)
```

Coverage closed:

- A generic S1 happy path
- B internal effect mismatch
- C generic surface tampering (target / capability)
- D legacy non-regression (pass + mismatch)
- E authenticated Product PREPARE without forceLocalAuthority
- F StudyFlow-equivalent clarify/recovery PREPARE regression
- G negatives retained via policy-action-scoped-s1 + binding-s1-adversarial (login-only, MORRIS, unknown effect, authority mismatch, adversarial binding)

`prepareSourceGrounding` (forceLocalAuthority path) retained and still PASS — not deleted.

## 17. Typecheck

```
npm run typecheck
> tsc --noEmit
PASS (exit 0)
```

## 18. Lint

```
npm run lint
✔ No ESLint warnings or errors
PASS (exit 0)
```

## 19. Build

```
npm run build
PASS (exit 0) — Next.js production build completed
```

## 20. Full tests

```
npm test
Test Files  439 passed | 17 skipped (456)
Tests       4867 passed | 137 skipped (5004)
Duration    50.28s
PASS (exit 0)
```

FinOps/T7 PostgreSQL `test:db` NOT run (frozen / hors required core validation) — not claimed as PASS FinOps.

## 21. Fake / Real qualification

- Entry evidence: REAL user-observed StudyFlow authenticated PREPARE blocker.
- Correction proof level: **DETERMINISTIC CORRECTION PROVEN**
- No Cursor REAL in this cycle.
- No StudyFlow mutation.
- No new Attempt / Execute.
- Bounded REAL proof: out of scope.
- Morris REAL gate: NOT consumed.

Allowed claims:

- authenticated S1 generic EC binding deterministic correction proven
- PREPARE path deterministic regression covered

Forbidden claims (not made):

- generic loop REAL proven
- READY FOR REAL global
- Product READY
- runtime v3 ADOPTED

## 22. Zéro Cursor REAL

Confirmed: `assertStudioCursorRealOffForTests()` in PREPARE regression; no REAL launch; `attemptCreated = false`; `executionPerformed = false`.

## 23. Zéro StudyFlow mutation

Confirmed: deterministic harness only (`seedQualifiedProject` + clarify option). No StudyFlow project data touched.

## 24. Réserves

### Blocking

None for the authorized verdict ceiling of this cycle.

### Minor / residual

1. Manual StudyFlow / clean-project Product reproof remains a **post-integration** validation before any Execute — not required to claim deterministic correction.
2. Documentary trajectory (Roadmap) requalification deferred until after commit/integration — explicitly out of this cycle.
3. Existing `forceLocalAuthority` prepareSourceGrounding coverage remains useful but is not the authenticated path; authenticated path is now covered separately.

### Residual risk

None identified that would reopen authority surface under this design.

## 25. Décisions Morris nécessaires

1. **GO COMMIT** projet sur `fix/sfia-studio-native-execution-loop-auth-s1-binding-01` (authorized next step; not consumed this cycle).
2. After commit: **GO PUSH + PR** (separate Morris GO).
3. After merge: optional manual StudyFlow / clean-project PREPARE verification (Product observation; not REAL Execute).
4. Documentary Roadmap truth-sync / capitalisation: separate cycle after integration.
5. No REAL Cursor / no runtime v3 adoption from this correction alone.

## 26. git diff --check

```
git diff --check
exit=0 (PASS)
```

## 27. Absence de commit projet

Confirmed:

- project branch HEAD still = `7d62e09eaadba4919091f94d82b5e648c98826d1` (= origin/main)
- no project commit created
- no project push
- no PR
- no merge
- no branch delete
- no force push

Uncommitted project changes (candidate only):

```
M  projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts
?? projects/sfia-studio/app/__tests__/auth/nativeExecutionLoopAuthS1BindingCorr01.d0.test.ts
```

Plus local `.tmp-sfia-review/**` (never staged / never committed to project).

## 28. Verdict

**READY FOR COMMIT — AUTH-S1 BINDING CORRECTION**

---

## Diff inventory (post-validation)

```
git diff --name-status
M  .tmp-sfia-review/chatgpt-review.md
M  projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts

git status --short (project-relevant)
M  projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts
?? projects/sfia-studio/app/__tests__/auth/nativeExecutionLoopAuthS1BindingCorr01.d0.test.ts

git diff --stat (project file)
 projects/sfia-studio/app/lib/auth/piloteS1AuthorityPolicy.ts | 73 ++++++++++-
```

Anti-stub: FULL pack includes complete modified sections + complete new test file contents.
)
