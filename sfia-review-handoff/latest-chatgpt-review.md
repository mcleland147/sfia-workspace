# PJ-REPROOF-05 Delivery — FULL Review Pack

- **Timestamp:** 2026-09-22T19:06:35Z / 2026-09-22 21:06:35 CEST
- **Repo:** mcleland147/sfia-workspace
- **Branch:** fix/sfia-studio-pj-reproof-05-execution-eligibility
- **Base / origin/main:** 31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0
- **HEAD (project branch tip, uncommitted):** 31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0 (working tree dirty with Delivery changes)
- **Campaign:** PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01 — **PAUSED**
- **Finding:** PJ-REPROOF-05 — Product Execution Eligibility + Generic Cursor Launch Context Coherence
- **Fake/Real:** DETERMINISTIC PROVEN — no REAL Cursor launch in this Delivery

## Sources read

- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md (referenced)
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md (referenced)
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md (referenced)
- projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md (referenced)
- projects/sfia-studio/sfia-v3-framing/31,34,35,36 (referenced)
- prompts/templates/sfia-cycle-execution-template.md (process external)
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md (process external)
- Code: w3aProductExecutionSemantics, authorizeExecutionContract, governedExecute, TrajectorySurface, selectExecutionAgent, startExecution, resolveAttemptExecutionProfile, projectExecutionContractToCursorPrompt, PJ-REPROOF-04 tests

## Root cause

1. `productConstraints` stamped **every** Product EC with `FIXTURE_EXECUTOR_BOUNDARY_ONLY` / `NO_REAL` / `NO_CURSOR_REAL` while runtime bound `contract_legacy` → `agt:studio.cursor.generalist` (REAL).
2. `scopeOutForCanonicalKind` also SCOPE_OUT'd `REAL`/`CURSOR_REAL` for read missions.
3. Authorize returned AUTHORIZED with label STOP AVANT EXECUTE; UI treated AUTHORIZED alone as Execute CTA.
4. Select/Start did not enforce EC forbid stamps → Attempt could be created; Start failed later on missing `baseHeadSha`.
5. Trusted launch context was not pinned on Product EC before inspection.

## Architecture retained

- ExecutionContract = truth; Cursor prompt = projection (PJ-REPROOF-04).
- ONE eligibility helper shared by Authorize / UI / Select / Start — no parallel policy engine.
- AUTHORIZED (authority verified) ≠ execution eligible.
- Legacy fingerprinted EC never rewritten; fail-closed if incompatible.
- No Pilot HOW selector; no v2.6 as Studio runtime doctrine.
- GCEC specialized paths remain exact/fail-closed; Product generalist isolation intact.

## Implementation summary

### LOT A — Truthful semantics
- Removed automatic FIXTURE/NO_REAL/NO_CURSOR_REAL stamps from `productConstraints`.
- Removed REAL/CURSOR_REAL from canonical `scopeOut` (keep write/Git forbids).
- Filter trajectory `AUCUNE EXÉCUTION` / `STOP AVANT EXECUTE` from new EC stopConditions.

### LOT B — Execution eligibility
- New `resolveProductExecutionEligibility` (lib/oa/execution-contract).
- Authorize DTO: `executionEligible` + reason code; outcome labels distinguish eligible vs not.

### LOT C — Legacy EC safety
- Historical stamps / STOP stops → ineligible; Select returns ATTEMPT_INVALID before Attempt; UI hides Execute.

### LOT D — Trusted launch context
- `resolveTrustedProductLaunchContext` pins baseHeadSha + repository binding at prepare (never Studio cwd fallback).
- Missing binding / clone → prepare fail-closed.

### LOT F/G — UI + runtime
- Execute CTA requires AUTHORIZED ∧ executionEligible.
- governedExecute / Select / Start revalidate eligibility.

## Files changed

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
?? projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionEligibility.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts
?? projects/sfia-studio/app/lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts
```

## Diffstat

```
 .tmp-sfia-review/chatgpt-review.md                 | 187 ++++++++-------------
 .../oa/execution-attempt/support/m4Fixtures.ts     |  14 +-
 .../postExecutionTrajectorySurface.ui.test.tsx     |   4 +-
 .../app/__tests__/project-assistant/w2Harness.ts   |  21 +++
 .../project-assistant/w3aGovernedExecute.test.ts   |   5 +-
 .../surfaces/TrajectorySurface.tsx                 |  38 ++++-
 .../w2/authorizeExecutionContract.ts               |  40 ++++-
 .../w2/governedExecuteAuthorizedContract.ts        |  17 ++
 .../w2/prepareExecutionContractFromW2Decision.ts   |  40 ++++-
 .../app/features/project-assistant/w2/types.ts     |   8 +
 .../project-assistant/w2/w3aActualExecutionWork.ts |   9 +-
 .../w2/w3aProductExecutionSemantics.ts             |  21 ++-
 .../application/selectExecutionAgent.ts            |  19 +++
 .../application/startExecution.ts                  |  18 ++
 .../app/lib/oa/execution-contract/index.ts         |   7 +
 15 files changed, 310 insertions(+), 138 deletions(-)
```

## Exploitable diffs (core)

### resolveProductExecutionEligibility.ts (new)

```ts
/**
 * PJ-REPROOF-05 — single Product truth: is this ExecutionContract executable NOW?
 *
 * Consumed by:
 * - Authorize / authorization projection
 * - Product Execute UI
 * - SelectExecutionAgent (before Attempt persistence)
 * - StartExecution / boundary revalidation
 *
 * UI is never the security boundary. Hostile Select must fail here too.
 *
 * AUTHORIZED (authority verified) ≠ execution eligible.
 */

export type ProductExecutionEligibilityReasonCode =
  | "eligible"
  | "stop_before_execute"
  | "aucune_execution"
  | "no_attempt"
  | "prepare_only"
  | "fixture_boundary_only"
  | "no_real"
  | "no_cursor_real"
  | "scope_out_real"
  | "scope_out_cursor_real"
  | "missing_trusted_launch_context"
  | "stale_or_invalid_launch_context";

export type ProductExecutionEligibility = {
  readonly eligible: boolean;
  readonly reasonCode: ProductExecutionEligibilityReasonCode;
  /** Pilot-facing functional explanation — no HOW / agentType / fixture jargon. */
  readonly reasonText: string;
  readonly nextAction: string;
  readonly allowsCursorReal: boolean;
  readonly allowsMutatingEffects: boolean;
  readonly requiresTrustedLaunchContext: boolean;
};

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

/** Trajectory / authorize-flow markers — not Product EC forever-forbid when absent as stamps. */
export const TRAJECTORY_NON_EXECUTE_STOPS = [
  "AUCUNE EXÉCUTION",
  "STOP AVANT EXECUTE",
] as const;

function hasExact(list: readonly string[], token: string): boolean {
  return list.some((c) => c === token);
}

function hasScopeOut(constraints: readonly string[], token: string): boolean {
  return constraints.includes(`SCOPE_OUT:${token}`);
}

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const t = value.trim();
  return t.length > 0 ? t : null;
}

function mutatingEffectsAllowed(constraints: readonly string[]): boolean {
  if (hasScopeOut(constraints, "DURABLE_PROJECT_WRITE")) return false;
  if (hasScopeOut(constraints, "LOCAL_WRITE")) return false;
  if (hasScopeOut(constraints, "COMMIT")) return false;
  if (hasScopeOut(constraints, "GIT_PUSH")) return false;
  if (hasScopeOut(constraints, "GIT_PR")) return false;
  if (hasScopeOut(constraints, "GIT_MERGE")) return false;
  return true;
}

function ineligible(
  reasonCode: Exclude<ProductExecutionEligibilityReasonCode, "eligible">,
  reasonText: string,
  nextAction: string,
  extras?: Partial<
    Pick<
      ProductExecutionEligibility,
      "allowsCursorReal" | "allowsMutatingEffects" | "requiresTrustedLaunchContext"
    >
  >,
): ProductExecutionEligibility {
  return {
    eligible: false,
    reasonCode,
    reasonText,
    nextAction,
    allowsCursorReal: false,
    allowsMutatingEffects: extras?.allowsMutatingEffects ?? false,
    requiresTrustedLaunchContext:
      extras?.requiresTrustedLaunchContext ?? true,
  };
}

/**
 * Resolve whether an ExecutionContract may proceed to Select / Execute / Start.
 *
 * Legacy Product ECs stamped NO_REAL / NO_CURSOR_REAL / FIXTURE_EXECUTOR_BOUNDARY_ONLY
 * / STOP AVANT EXECUTE remain fail-closed (historical, never silently rewritten).
 */
export function resolveProductExecutionEligibility(input: {
  readonly constraints?: readonly string[] | null;
  readonly stopConditions?: readonly string[] | null;
  readonly inputs?: Record<string, unknown> | null;
  /**
   * Product Cursor REAL path requires pinned launch context on the EC.
   * Default true for Product generalist Start. Tests may set false only when
   * proving stamp-level ineligibility without launch-context concerns.
   */
  readonly requireTrustedLaunchContext?: boolean;
}): ProductExecutionEligibility {
  const constraints = [...(input.constraints ?? [])];
  const stops = [...(input.stopConditions ?? [])];
  const inputs = (input.inputs ?? {}) as Record<string, unknown>;
  const allowMutations = mutatingEffectsAllowed(constraints);
  const requireCtx = input.requireTrustedLaunchContext !== false;

  if (hasExact(stops, "AUCUNE EXÉCUTION")) {
    return ineligible(
      "aucune_execution",
```

### productConstraints / scopeOut (truthful)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
index 71d214c6..19fc642a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
@@ -292,15 +292,18 @@ export function projectConfirmationRequirementFromEffects(input: {
 /**
  * Coherent scope OUT for a canonical operation — never forbids the current
  * scope IN / action effect (R13).
+ *
+ * PJ-REPROOF-05: do NOT put REAL / CURSOR_REAL in SCOPE_OUT for Product
+ * read/simulate/temp missions. Those missions may use the generic Cursor
+ * REAL executor under read-only / non-mutating forbids. Writes and Git
+ * remain SCOPE_OUT.
  */
 function scopeOutForCanonicalKind(
   kind: W3ACanonicalActualOperationKind,
 ): readonly string[] {
-  const common = ["REAL", "CURSOR_REAL"] as const;
   switch (kind) {
     case "read":
       return [
-        ...common,
         "DURABLE_PROJECT_WRITE",
         "LOCAL_WRITE",
         "TEMPORARY_ARTIFACT_WRITE",
@@ -313,7 +316,6 @@ function scopeOutForCanonicalKind(
       ];
     case "simulate":
       return [
-        ...common,
         "DURABLE_PROJECT_WRITE",
         "COMMIT",
         "GIT_PUSH",
@@ -324,7 +326,6 @@ function scopeOutForCanonicalKind(
       ];
     case "generate-temporary-artifact":
       return [
-        ...common,
         "DURABLE_PROJECT_WRITE",
         "COMMIT",
         "GIT_PUSH",
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
index 601c2b69..44165f44 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
@@ -35,6 +35,7 @@ import {
   projectRequiredAuthorityFromEffects,
   deriveReversibilityFromEffects,
 } from "./w3aQualifiedExecutionEffects";
+import { filterTrajectoryNonExecuteStopsFromEc } from "./resolveProductExecutionEligibility";

 /** Implementation / provenance marker — NOT authority-bearing scope. */
 export const W3A_IMPLEMENTATION_MARKER =
@@ -66,6 +67,16 @@ export type EnvelopePrepareFailure =
       readonly message: string;
     };

+/**
+ * PJ-REPROOF-05 — truthful Product constraints.
+ *
+ * Do NOT stamp FIXTURE_EXECUTOR_BOUNDARY_ONLY / NO_REAL / NO_CURSOR_REAL on every
+ * Product EC. Those forever-forbid Cursor REAL even when the mission is a
+ * read-only diagnostic intended for the generic Cursor executor.
+ *
+ * Mutation / Git forbids remain expressed via SCOPE_OUT from qualified effects.
+ * NO_ATTEMPT_AT_PREPARE only asserts prepare itself creates no Attempt.
+ */
 function productConstraints(
   basis: DecisionBasis,
   effects: QualifiedExecutionEffects,
@@ -74,9 +85,6 @@ function productConstraints(
   const eb = basis.executionBasis;
   return [
     "PRODUCT_GOVERNED",
-    "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
-    "NO_REAL",
-    "NO_CURSOR_REAL",
     "NO_ATTEMPT_AT_PREPARE",
     `IMPLEMENTATION_MARKER:${W3A_IMPLEMENTATION_MARKER}`,
     `EFFECT_CLASS:${effects.effectClass}`,
@@ -96,8 +104,13 @@ function productConstraints(

 function productStopConditions(basis: DecisionBasis): string[] {
   const eb = basis.executionBasis;
+  // Strip trajectory authorize-flow markers (AUCUNE EXÉCUTION / STOP AVANT EXECUTE)
+  // so a newly prepared executable EC is not fail-closed forever by provenance.
+  const fromBasis = filterTrajectoryNonExecuteStopsFromEc(
+    eb.stopConditions ?? [],
+  );
   const stops = new Set<string>([
-    ...(eb.stopConditions ?? []),
+    ...fromBasis,
     "AUTHORITY_DENIED",
     "CONTEXT_STALE",
     "DECISION_NOT_CURRENT",
```

### Authorize eligibility projection

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
index 74d0db97..4afffeda 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
@@ -35,6 +35,7 @@ import {
 } from "@/lib/oa/execution-attempt";
 import type { AgentRegistryPort } from "@/lib/oa/execution-attempt";
 import { readContractInspectionState } from "./inspectExecutionContract";
+import { resolveProductExecutionEligibility } from "./resolveProductExecutionEligibility";
 import type {
   AgentCapabilityOutcomeDto,
   ConfirmationRequirementDto,
@@ -379,26 +380,55 @@ export async function evaluateExecutionAuthorization(
         blockedDetail,
       });

+    const eligibility = resolveProductExecutionEligibility({
+      constraints: contract.constraints,
+      stopConditions: contract.stopConditions,
+      inputs:
+        contract.inputs && typeof contract.inputs === "object"
+          ? (contract.inputs as Record<string, unknown>)
+          : null,
+    });
+
     const text = blockedReason ? BLOCKED_TEXT[blockedReason] : null;
+    const authorizedEligible =
+      outcome === "AUTHORIZED" && eligibility.eligible;
+    const authorizedIneligible =
+      outcome === "AUTHORIZED" && !eligibility.eligible;
+
     return {
       ok: true,
       executionContractId: contract.executionContractId,
       contractVersion: contract.version,
       outcome,
       outcomeLabel:
-        outcome === "AUTHORIZED"
-          ? "AUTORISÉ — STOP AVANT EXECUTE"
-          : "BLOQUÉ — ACTION REQUISE",
+        outcome === "BLOCKED"
+          ? "BLOQUÉ — ACTION REQUISE"
+          : authorizedEligible
+            ? "AUTORISÉ — EXÉCUTION ÉLIGIBLE"
+            : authorizedIneligible
+              ? "AUTORISÉ — EXÉCUTION NON ÉLIGIBLE"
+              : "AUTORISÉ — STOP AVANT EXECUTE",
       reasonCode: blockedReason ?? "effective_authority_established",
       reasonText:
         text?.reasonText ??
-        "Autorité effective établie : décision, périmètre du contrat, inspection, confirmation requise et exécuteur suffisant.",
+        (authorizedIneligible
+          ? eligibility.reasonText
+          : authorizedEligible
+            ? eligibility.reasonText
+            : "Autorité effective établie : décision, périmètre du contrat, inspection, confirmation requise et exécuteur suffisant."),
       nextAction:
         text?.nextAction ??
-        "Aucune exécution n'est autorisée par ce cycle — arrêt avant Execute.",
+        (authorizedIneligible
+          ? eligibility.nextAction
+          : authorizedEligible
+            ? eligibility.nextAction
+            : "Aucune exécution n'est autorisée par ce cycle — arrêt avant Execute."),
       inspection,
       confirmation,
       agentCapability: capabilityDto(capability),
+      executionEligible: outcome === "AUTHORIZED" ? eligibility.eligible : false,
+      executionEligibilityReasonCode:
+        outcome === "AUTHORIZED" ? eligibility.reasonCode : "blocked",
       authorityReceiptRef: receipt.receiptId,
       decisionRefs: [...(contract.decisionRefs ?? [])],
       requiredAuthority: contract.requiredAuthority,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index b3f7d826..fc079208 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -201,6 +201,8 @@ export type ExecutionAuthorizationOutcomeDto = {
   readonly outcome: "AUTHORIZED" | "BLOCKED";
   readonly outcomeLabel:
     | "AUTORISÉ — STOP AVANT EXECUTE"
+    | "AUTORISÉ — EXÉCUTION ÉLIGIBLE"
+    | "AUTORISÉ — EXÉCUTION NON ÉLIGIBLE"
     | "BLOQUÉ — ACTION REQUISE";
   readonly reasonCode: string;
   readonly reasonText: string;
@@ -208,6 +210,12 @@ export type ExecutionAuthorizationOutcomeDto = {
   readonly inspection: ContractInspectionStateDto;
   readonly confirmation: ConfirmationRequirementDto;
   readonly agentCapability: AgentCapabilityOutcomeDto;
+  /**
+   * PJ-REPROOF-05 — authority verified ≠ execution eligible.
+   * Execute CTA / Select / Start must consult this, not AUTHORIZED alone.
+   */
+  readonly executionEligible: boolean;
+  readonly executionEligibilityReasonCode: string;
   readonly authorityReceiptRef: string;
   readonly decisionRefs: readonly string[];
   readonly requiredAuthority: string;
```

### Select / Start enforcement

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
index e971da91..aa812403 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
@@ -11,6 +11,7 @@ import type {
   CheckExecutionAuthorization,
   ExecutionContractRepositoryPort,
 } from "@/lib/oa/execution-contract";
+import { resolveProductExecutionEligibility } from "@/lib/oa/execution-contract";
 import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
 import { captureBoundExecutionContractSnapshot } from "../domain/boundExecutionContract";
 import {
@@ -190,6 +191,24 @@ export class SelectExecutionAgent {
         );
       }

+      // PJ-REPROOF-05 — execution eligibility BEFORE Attempt persistence.
+      // AUTHORIZED authority check above ≠ REAL executable. Hostile Select
+      // must fail closed here for legacy NO_REAL / STOP AVANT EXECUTE ECs.
+      const eligibility = resolveProductExecutionEligibility({
+        constraints: contract.constraints,
+        stopConditions: contract.stopConditions,
+        inputs:
+          contract.inputs && typeof contract.inputs === "object"
+            ? (contract.inputs as Record<string, unknown>)
+            : null,
+      });
+      if (!eligibility.eligible) {
+        return fail(
+          "ATTEMPT_INVALID",
+          `execution_ineligible_${eligibility.reasonCode}`,
+        );
+      }
+
       const evidenceRead = this.listProjectEvidence
         ? await this.listProjectEvidence(contract.projectId)
         : { ok: false as const, reason: "evidence_reader_unavailable" as const };
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index e60e8899..0d348012 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -38,6 +38,7 @@ import {
   DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
   projectExecutionContractToCursorPrompt,
   resolveExecutionWindowForStart,
+  resolveProductExecutionEligibility,
   type ResolvedExecutionWindow,
 } from "@/lib/oa/execution-contract";
 import type { AuthorityResolverPort } from "@/lib/oa/decision";
@@ -486,6 +487,23 @@ export class StartExecution {
         );
       }

+      // PJ-REPROOF-05 — revalidate execution eligibility at Start (defense in depth).
+      const eligibility = resolveProductExecutionEligibility({
+        constraints: contract.constraints,
+        stopConditions: contract.stopConditions,
+        inputs:
+          contract.inputs && typeof contract.inputs === "object"
+            ? (contract.inputs as Record<string, unknown>)
+            : null,
+      });
+      if (!eligibility.eligible) {
+        return fail(
+          "ATTEMPT_INVALID",
+          `execution_ineligible_${eligibility.reasonCode}`,
+          { executionContractId: contract.executionContractId },
+        );
+      }
+
       const agent = this.registry.getAgent(attempt.selectedAgentRef);
       if (!agent) {
         return fail("AGENT_NOT_FOUND", "selected_agent_not_registered", {
```

### UI Execute CTA

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 31c8ca8e..66f58bff 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -1345,7 +1345,13 @@ export function TrajectorySurface({

   const governedExecute = useCallback(async () => {
     if (continuityMutationBlocked) return;
-    if (!contract || authorization?.outcome !== "AUTHORIZED") return;
+    if (
+      !contract ||
+      authorization?.outcome !== "AUTHORIZED" ||
+      authorization.executionEligible !== true
+    ) {
+      return;
+    }
     setBusy("execute");
     setError(null);
     flushSync(() => {
@@ -2704,9 +2710,14 @@ export function TrajectorySurface({
             <span
               data-testid="w2-authorization-outcome"
               data-outcome={authorization.outcome}
+              data-execution-eligible={
+                authorization.executionEligible ? "true" : "false"
+              }
             >
               {authorization.outcome === "AUTHORIZED"
-                ? "Autorisation vérifiée — l'exécution peut être lancée"
+                ? authorization.executionEligible
+                  ? "Autorisation vérifiée — l'exécution peut être lancée"
+                  : "Autorisation vérifiée — exécution non proposée"
                 : "Exécution bloquée"}
             </span>
           </h3>
@@ -2743,6 +2754,14 @@ export function TrajectorySurface({
                   {authorization.outcomeLabel}
                 </dd>
               </div>
+              <div>
+                <dt>Éligibilité d&apos;exécution</dt>
+                <dd data-testid="w2-execution-eligibility">
+                  {authorization.executionEligible
+                    ? "éligible"
+                    : authorization.executionEligibilityReasonCode}
+                </dd>
+              </div>
               <div>
                 <dt>Trace d&apos;autorité</dt>
                 <dd className={styles.code} data-testid="w2-authority-receipt">
@@ -2751,7 +2770,9 @@ export function TrajectorySurface({
               </div>
             </dl>
           </details>
-          {authorization.outcome === "AUTHORIZED" && !attempt ? (
+          {authorization.outcome === "AUTHORIZED" &&
+          authorization.executionEligible &&
+          !attempt ? (
             <>
               <p
                 className={styles.stopNotice}
@@ -2773,6 +2794,17 @@ export function TrajectorySurface({
               </div>
             </>
           ) : null}
+          {authorization.outcome === "AUTHORIZED" &&
+          !authorization.executionEligible &&
+          !attempt ? (
+            <p
+              className={styles.stopNotice}
+              data-testid="w2-execution-ineligible"
+            >
+              Aucune exécution n&apos;est proposée pour ce contrat.{" "}
+              {authorization.nextAction}
+            </p>
+          ) : null}
           {authorization.outcome === "BLOCKED" ? (
             <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
               Aucune exécution n&apos;a été lancée : arrêt avant exécution.
```

### Prepare + trusted launch context

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
index 9005e978..6159d36a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
@@ -30,6 +30,10 @@ import { deriveActualExecutionWorkFromProductContext } from "./deriveActualExecu
 import { resolvePostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
 import type { ActualExecutionWork } from "./w3aActualExecutionWork";
 import type { QualifiedExecutionEffects } from "./w3aQualifiedExecutionEffects";
+import {
+  launchContextAsContractInputs,
+  resolveTrustedProductLaunchContext,
+} from "./resolveTrustedProductLaunchContext";

 export type PreparedExecutionContractDto = {
   readonly executionContractId: string;
@@ -155,6 +159,12 @@ export async function prepareExecutionContractFromW2Decision(input: {
   /** Same product path — optional Nora/test-injected qualified effects. */
   readonly explicitEffects?: QualifiedExecutionEffects;
   readonly forceEffectsUnresolved?: boolean;
+  /**
+   * PJ-REPROOF-05 — deterministic test pin for trusted launch context.
+   * Never accepted from browser Execute payloads.
+   */
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
 }): Promise<PrepareExecutionContractFromW2DecisionResult> {
   const { oa } = input;

@@ -413,6 +423,32 @@ export async function prepareExecutionContractFromW2Decision(input: {
     return f3Guard;
   }

+  // PJ-REPROOF-05 — pin trusted launch context BEFORE Build/Validate fingerprint.
+  // Vitest: when repository binding exists, allow a deterministic pin without a
+  // managed clone (production never auto-pins — managed HEAD or explicit pin).
+  const vitestPin =
+    process.env.VITEST === "true" || process.env.VITEST === "1"
+      ? "a".repeat(40)
+      : null;
+  const launch = await resolveTrustedProductLaunchContext({
+    oa,
+    projectId: input.projectId,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha ?? vitestPin,
+    managedRepoRootBase: input.managedRepoRootBase,
+  });
+  if (!launch.ok) {
+    return {
+      ok: false,
+      code: launch.code,
+      message: launch.message,
+    };
+  }
+  const envelopeInputs: Record<string, unknown> = {
+    ...envelope.inputs,
+    ...launchContextAsContractInputs(launch.context),
+    trustedLaunchContextPinnedAtPrepare: true,
+  };
+
   const safeId = safeIdSegment(decision.decisionId);
   const executionContractId = `xct:w3a:${safeId}`;
   const idempotencyKey = `idem:w3a-prep:${decision.decisionId}`;
@@ -439,7 +475,7 @@ export async function prepareExecutionContractFromW2Decision(input: {
       action: envelope.action,
       target: envelope.target,
       scope: envelope.scope,
-      inputs: envelope.inputs,
+      inputs: envelopeInputs,
       expectedOutputs: [...envelope.expectedOutputs],
       requiredCapabilities: [...envelope.requiredCapabilities],
       requiredAuthority: envelope.requiredAuthority,
@@ -499,7 +535,7 @@ export async function prepareExecutionContractFromW2Decision(input: {
       action: envelope.action,
       target: envelope.target,
       scope: envelope.scope,
-      inputs: envelope.inputs,
+      inputs: envelopeInputs,
       expectedOutputs: [...envelope.expectedOutputs],
       requiredCapabilities: [...envelope.requiredCapabilities],
       requiredAuthority: envelope.requiredAuthority,
```

### New files (paths)

- lib/oa/execution-contract/domain/resolveProductExecutionEligibility.ts
- features/project-assistant/w2/resolveProductExecutionEligibility.ts (re-export)
- features/project-assistant/w2/resolveTrustedProductLaunchContext.ts
- __tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts

## Tests & results

| Suite | Result |
|---|---|
| pjReproof05.executionEligibility.d0 | 8/8 PASS |
| pjReproof04.executionContractSemanticBridge.d0 | 12/12 PASS |
| w3aGovernedExecute | 24/24 PASS |
| postExecutionTrajectorySurface.ui | 2/2 PASS |
| trajectorySurface.ui | 46/46 PASS |
| tsc --noEmit | PASS |
| git diff --check | PASS |

DETERMINISTIC PROVEN for eligibility / contract parity / launch-context enforcement.
Explicitly **not** END-TO-END REAL PROVEN. DETERMINISTIC ≠ READY FOR REAL.

## Doctrine / CKC / source parity

- Prompt projection still harvests EC objective/context/sources/scope/gates/stops/validation/Evidence (PJ-REPROOF-04 bridge retained).
- No v2.6 loaded as Studio doctrine; Cursor HOW remains Cursor-owned inside EC perimeter.
- DoctrinePackage identity/version/digest continue via existing DecisionBasis / inspection disclosure paths — no second resolver invented.
- Remaining realism gap: live managed-clone HEAD pin in non-test Product envs still depends on `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` + Project.repositoryBinding (fail-closed when absent).

## Legacy EC compatibility

- Durable Batch Cookinb EC v2 (`xct:w3a:dec:w2-trj:62b92385-...`) **not mutated**.
- With NO_REAL / NO_CURSOR_REAL / STOP AVANT EXECUTE → execution ineligible → no Execute CTA → Select rejected → Attempt count remains 0.
- Reproof after integration may prepare a **new** successor EC with truthful semantics + launch context.

## Morris decisions consumed

1–10 from Delivery prompt (EC non-executable no Execute / no Attempt; honest effects; read-only Cursor OK; Studio launch context; no silent post-inspect widen; no silent rewrite; legacy fail-closed; new successor later; no isolated UI patch).

## Forbidden actions respected

- No project push / PR / merge
- No REAL Cursor launch
- No Product DB migration / Batch Cookinb Execute
- No method/** / v3 framing / Build Doctrine / Roadmap edits
- Attempt count on current EC (read-only check): 0

## Remaining reservations / debt

- W2 harness may still AUTHORIZE with insufficient generalist registration in some compositions (eligibility fields always present; Execute requires both).
- Vitest may auto-pin baseHeadSha when binding exists (production never auto-pins).
- Full suite not run end-to-end; attributable suites above are green.
- Product Journey REAL reproof still required after Morris integration GO.

## Final verdict

**PASS — PJ-REPROOF-05 DELIVERY IMPLEMENTED AND DETERMINISTICALLY PROVEN — READY FOR CHATGPT REVIEW / MORRIS PROJECT INTEGRATION DECISION — PRODUCT JOURNEY REMAINS PAUSED BEFORE REAL REPROOF**
