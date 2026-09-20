# ChatGPT Review Pack — FULL (MODIFIED CONTENT COMPLETE)

- **Timestamp UTC:** 2026-09-20T03:44:27Z
- **Timestamp Europe/Paris:** 2026-09-20T05:44:27+0200
- **Macro:** PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01
- **Sous-portée:** POST-EXECUTION PRODUCT CONTINUITY & RECOVERY
- **Mode:** SAME MACRO / NO MICRO-CYCLE
- **Cycle:** 8 — Delivery / implémentation
- **Typologie:** EVOL
- **Profil:** Critical
- **Pack revision:** COMPLETE DIFF REPUBLISH (addresses REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING)
- **Worktree:** `/tmp/sfia-pwr-01-dev`
- **Branche projet (non intégrée):** `delivery/sfia-studio-project-workspace-artifact-routing-01`
- **HEAD base (non amendé):** `ed3cc66b25d260a67437fc07e163ef5fcc2244a9`
- **Parent:** `a6dba9776bfb1b4cb1570a87b20b0c71e546e441`
- **origin/main:** `a6dba9776bfb1b4cb1570a87b20b0c71e546e441`
- **Diagnostic handoff d'entrée:** `5b1935273dfa0d04c2770a93b07010bf1f50aad6` (OBS-PJ-CONT-01)
- **Claim maximal autorisé:** POST-EXECUTION PRODUCT CONTINUITY & RECOVERY — DETERMINISTIC PRODUCT-NATIVE E2E PROVEN — IMPLEMENTATION CANDIDATE — NOT REAL REPROVEN — NOT GIT INTEGRATED

---

## 1. Local Git Truth

```
toplevel: /tmp/sfia-pwr-01-dev
branch:   delivery/sfia-studio-project-workspace-artifact-routing-01
HEAD:     ed3cc66b25d260a67437fc07e163ef5fcc2244a9
HEAD^:    a6dba9776bfb1b4cb1570a87b20b0c71e546e441
origin/main: a6dba9776bfb1b4cb1570a87b20b0c71e546e441
```

**Before mutation (cycle start):** `M .tmp-sfia-review/chatgpt-review.md` only.

**After implementation (working tree only — ZERO project commit):**
13 source paths mutated (10 MOD + 3 NEW) under `projects/sfia-studio/app/**`, plus this Review Pack overwrite.
HEAD remains `ed3cc66b…` (not amended, not reset, not pushed).

**Verdict Local Git Truth:** MATCH — no STOP.

---

## 2. Sources

Processus externe v2.6 + convergence Product Completion + doctrine v3 (32–35, 37) + CKC 08-delivery + handoff distant OBS-PJ-CONT-01 `5b193527…`.

---

## 3. Décisions Morris consommées

| ID | Retenue | Application |
|----|---------|-------------|
| **D-MORRIS-PCONT-01** | Option A | `advanceProductExecutionContractAfterEvidence` → `advanceExecutionContractCompletion` / `qualifyExecutionContractCompletion` after Evidence ingest on Product docs_write path |
| **D-MORRIS-PCONT-02** | DecisionRef convergence | `closeProposalDecisionSubject.writeProposalDecisionRef` shared by `decideTrajectory` (proposal) and `recordF2Decision` |
| **D-MORRIS-PCONT-03** | LPS current vs candidate | `proposeTrajectoryVersion` keeps LPS on decided current when proposing candidate |
| **D-MORRIS-PCONT-04** | Single macro-lot | Axes A–G together; no micro-cycle |

---

## 4. Architecture locale (KEEP/ADAPT/COMPLETE)

No new table/store/engine/schema/migration.

- **A:** Product wiring of Option A + continuity excludes EC with terminal Attempt from pre-execution current.
- **B:** `subjectCompetes` narrowed to Proposal `decisionSubjectMode`.
- **C:** Recovery wording from `productOutcome`+`attemptStatus`.
- **D:** `proposeOptions` no longer wipes Attempt/ProductOutcome/postEvidence.
- **E:** Canonical DecisionRef closure; F2 path UoW with HD+DecisionRef.
- **F:** LPS candidate≠current on propose; promote still writes promoted version.
- **G:** No ACW file mutation. No new Epistemic lifecycle. LPS skew fix is the mechanism that stops false active trajectory/LPS contradictions. Fresh E2E asserts no parasite cycle. Historical Batch Cooking DB untouched.

---

## 5. Fichier inventory (13)

| # | Kind | Path |
|---|------|------|
| 1 | NEW | `…/w2/advanceProductExecutionContractAfterEvidence.ts` |
| 2 | NEW | `…/w2/closeProposalDecisionSubject.ts` |
| 3 | MOD | `…/w2/governedExecuteAuthorizedContract.ts` |
| 4 | MOD | `…/w2/readCurrentGovernedExecutionContinuity.ts` |
| 5 | MOD | `…/w2/trajectoryOptions.ts` |
| 6 | MOD | `…/w2/proposeTrajectoryOptions.ts` |
| 7 | MOD | `…/w2/decideTrajectory.ts` |
| 8 | MOD | `…/f2/recordDecision.ts` |
| 9 | MOD | `…/actions.ts` |
| 10 | MOD | `…/TrajectorySurface.tsx` |
| 11 | MOD | `…/proposeTrajectoryVersion.ts` |
| 12 | NEW | `…/postExecutionProductContinuity.d0.test.ts` |
| 13 | MOD | `…/productWorkspaceArtifactRouting.applicationPath.d0.test.ts` |

---

## 6. DIFF EXPLOITABLE COMPLET (vs HEAD ed3cc66b)

Chaque fichier suit en unified diff. Les fichiers NEW sont présentés comme `diff --git a/... b/...` depuis `/dev/null`.
Ceci est le contenu modifié réel — pas une synthèse.


### [NEW] `projects/sfia-studio/app/features/project-assistant/w2/advanceProductExecutionContractAfterEvidence.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/advanceProductExecutionContractAfterEvidence.ts b/projects/sfia-studio/app/features/project-assistant/w2/advanceProductExecutionContractAfterEvidence.ts
new file mode 100644
index 00000000..5e9bc318
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/advanceProductExecutionContractAfterEvidence.ts
@@ -0,0 +1,131 @@
+/**
+ * D-MORRIS-PCONT-01 Option A — Product-path wiring for EC completion.
+ *
+ * After Artifact Evidence is registered/updated for a governed Attempt,
+ * qualify via advanceExecutionContractCompletion(). Never invents completed:
+ * available ≠ verified; Attempt succeeded ≠ EC completed.
+ */
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
+import { advanceExecutionContractCompletion } from "@/lib/oa/execution-attempt";
+import type { Digest } from "@/lib/oa/doctrine";
+import {
+  FakeEvidencePayloadAdapter,
+  type Evidence,
+} from "@/lib/oa/evidence-review";
+
+export type AdvanceProductExecutionContractAfterEvidenceInput = {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly executionContractId: string;
+  readonly cycleInstanceId?: string | null;
+  /** When ingest just produced available Evidence with a known digest. */
+  readonly freshlyIngested?: {
+    readonly evidenceId: string;
+    readonly digest: string;
+  };
+};
+
+export type AdvanceProductExecutionContractAfterEvidenceResult =
+  | {
+      readonly ok: true;
+      readonly status: string;
+      readonly complete: boolean;
+      readonly advanced: boolean;
+      readonly verifiedEvidenceIds: readonly string[];
+    }
+  | { readonly ok: false; readonly reason: string };
+
+function evidenceBoundToContract(
+  evidence: Evidence,
+  executionContractId: string,
+): boolean {
+  return evidence.bindings?.executionContractId === executionContractId;
+}
+
+/**
+ * Best-effort: when Fake payload adapter is present, register digest script
+ * so integrity verify can observe the Attempt-produced digest (metadata-only).
+ * Real/non-fake payloads are left untouched — verify uses their probe.
+ */
+function registerFreshDigestForFakePayload(
+  oa: RuntimeOaStack,
+  freshlyIngested: { evidenceId: string; digest: string },
+): void {
+  const payload = oa.evidenceReviewServices.payload;
+  if (payload instanceof FakeEvidencePayloadAdapter) {
+    payload.setScript(freshlyIngested.evidenceId, {
+      availability: "available",
+      digest: freshlyIngested.digest as Digest,
+    });
+  }
+}
+
+export async function advanceProductExecutionContractAfterEvidence(
+  input: AdvanceProductExecutionContractAfterEvidenceInput,
+): Promise<AdvanceProductExecutionContractAfterEvidenceResult> {
+  const { oa, projectId, executionContractId } = input;
+  const attemptServices = oa.executionAttemptServices;
+  if (!attemptServices) {
+    return { ok: false, reason: "execution_attempt_services_unavailable" };
+  }
+
+  if (input.freshlyIngested) {
+    registerFreshDigestForFakePayload(oa, input.freshlyIngested);
+  }
+
+  const listed =
+    await oa.evidenceReviewServices.repository.listByProject(projectId);
+  const bound = listed.filter((e) =>
+    evidenceBoundToContract(e, executionContractId),
+  );
+
+  const verifiedEvidenceIds: string[] = [];
+  const evidenceForQualify: Evidence[] = [];
+
+  for (const item of bound) {
+    if (item.status === "verified") {
+      evidenceForQualify.push(item);
+      verifiedEvidenceIds.push(item.evidenceId);
+      continue;
+    }
+    if (item.status !== "available" || !item.digest) {
+      evidenceForQualify.push(item);
+      continue;
+    }
+    const verified =
+      await oa.evidenceReviewServices.verifyEvidenceIntegrity.execute({
+        evidenceId: item.evidenceId,
+        expectedVersion: item.version,
+        actor: LOCAL_PILOTE_ACTOR,
+      });
+    if (verified.ok && verified.evidence) {
+      evidenceForQualify.push(verified.evidence);
+      verifiedEvidenceIds.push(verified.evidence.evidenceId);
+    } else {
+      // Keep available Evidence in the qualify set — waiting_verification, not complete.
+      evidenceForQualify.push(item);
+    }
+  }
+
+  const advanced = await advanceExecutionContractCompletion({
+    executionContractId,
+    contracts: oa.executionContractServices.contracts,
+    contractStatusWriter: attemptServices.contractStatusWriter,
+    evidence: evidenceForQualify,
+    cycleInstanceId: input.cycleInstanceId ?? undefined,
+    clock: oa.clock,
+  });
+
+  if (!advanced.ok) {
+    return { ok: false, reason: advanced.reason };
+  }
+
+  return {
+    ok: true,
+    status: advanced.status,
+    complete: advanced.complete,
+    advanced: advanced.advanced,
+    verifiedEvidenceIds,
+  };
+}
```


### [NEW] `projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts
new file mode 100644
index 00000000..45a1c9b7
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/closeProposalDecisionSubject.ts
@@ -0,0 +1,114 @@
+/**
+ * Canonical Proposal decision-subject epistemic closure.
+ * Shared by decideTrajectory (proposal mode) and recordF2Decision so both
+ * Product entry points produce the same durable DecisionRef + pending resolution.
+ *
+ * DecisionRef relatedObjects MUST include optionSetRef (optset:) AND proposalId
+ * (prop:) for readActiveProposalDecisionSubject / closedProposalIds matching.
+ */
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
+import {
+  resolvePendingDecisionSubjectMarker,
+  type ResolvePendingDecisionSubjectMarkerResult,
+} from "./pendingDecisionSubjectMarker";
+import { updateProposalStatus } from "../f2/proposalStore";
+import type { F2ProposalStatus } from "../f2/types";
+
+export type ProposalClosureMarkerReason = "decided" | "amended" | "refused";
+
+export type CloseProposalDecisionSubjectInput = {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly decisionId: string;
+  readonly proposalId: string;
+  readonly selectedOptionRef: string;
+  /** Required for closedProposalIdsFromProposalDecisionRefs matching. */
+  readonly optionSetRef: string;
+  readonly epistemicRefs?: readonly string[];
+  readonly markerReason: ProposalClosureMarkerReason;
+  readonly nextProposalStatus: F2ProposalStatus;
+  readonly statement?: string;
+  readonly correlationId?: string;
+};
+
+export type CloseProposalDecisionSubjectResult =
+  | { readonly ok: true; readonly epistemicItemId: string }
+  | { readonly ok: false; readonly code: string; readonly message: string };
+
+export function f2DirectOptionSetRef(proposalId: string): string {
+  return `optset:f2-direct:${proposalId}`;
+}
+
+export function decisionRefEpistemicItemId(optionSetRef: string): string {
+  return `epi:w2-decref-prop:${optionSetRef.replace(/[^a-zA-Z0-9:_-]/g, "-")}`.slice(
+    0,
+    180,
+  );
+}
+
+/**
+ * Durable Epistemic DecisionRef write only (caller owns UoW / ordering).
+ */
+export async function writeProposalDecisionRef(
+  input: CloseProposalDecisionSubjectInput,
+): Promise<CloseProposalDecisionSubjectResult> {
+  const epistemicItemId = decisionRefEpistemicItemId(input.optionSetRef);
+  const statement =
+    input.statement ??
+    `Décision humaine ${input.decisionId} — option retenue ${input.selectedOptionRef} — sujet Proposal ${input.proposalId} (ProjectTrajectory non promue).`;
+  const closure = await input.oa.cycleServices.updateEpistemicState.execute({
+    projectId: input.projectId,
+    items: [
+      {
+        epistemicItemId,
+        type: "DecisionRef",
+        statement,
+        status: "active",
+        source: input.decisionId,
+        relatedObjects: [
+          input.projectId,
+          input.decisionId,
+          input.selectedOptionRef,
+          input.optionSetRef,
+          input.proposalId,
+          ...(input.epistemicRefs ?? []),
+        ],
+      },
+    ],
+    createdBy: LOCAL_PILOTE_ACTOR,
+    correlationId:
+      input.correlationId ?? `w2-decref-prop:${input.optionSetRef}`,
+  });
+  if (!closure.ok) {
+    return {
+      ok: false,
+      code: closure.error.detailCode,
+      message: `Closure DecisionRef Proposal échouée (${closure.error.detailCode}) — HumanDecision non autoritaire.`,
+    };
+  }
+  return { ok: true, epistemicItemId };
+}
+
+/**
+ * Process-local ProposalStore status + pending marker resolve.
+ * Call ONLY after durable DecisionRef (and HD) succeeded.
+ */
+export async function finalizeProposalSubjectAfterDurableClosure(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly proposalId: string;
+  readonly markerReason: ProposalClosureMarkerReason;
+  readonly nextProposalStatus: F2ProposalStatus;
+  readonly correlationId?: string;
+}): Promise<ResolvePendingDecisionSubjectMarkerResult> {
+  updateProposalStatus(input.proposalId, input.nextProposalStatus);
+  return resolvePendingDecisionSubjectMarker({
+    oa: input.oa,
+    projectId: input.projectId,
+    proposalId: input.proposalId,
+    reason: input.markerReason,
+    correlationId:
+      input.correlationId ?? `cor:pending-decide:${input.proposalId}`,
+  });
+}
```


### [MOD] `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index 92c76cf4..089438a7 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -38,6 +38,7 @@ import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/
 import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
 import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
 import { authorizedM3ResolutionKind } from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
+import { advanceProductExecutionContractAfterEvidence } from "./advanceProductExecutionContractAfterEvidence";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
 import type {
   GovernedExecuteAuthorizedContractResult,
@@ -787,7 +788,7 @@ export async function governedExecuteRecordResult(
         completed.facts &&
         contract.cycleInstanceId
       ) {
-        await ingestDocsWriteArtifactEvidence({
+        const ingested = await ingestDocsWriteArtifactEvidence({
           evidenceReviewServices: input.oa.evidenceReviewServices,
           projectId: input.projectId,
           cycleInstanceId: contract.cycleInstanceId,
@@ -797,6 +798,20 @@ export async function governedExecuteRecordResult(
           digest: completed.facts.digest,
           nowIso: input.oa.clock.nowIso(),
         });
+        // D-MORRIS-PCONT-01 Option A — qualify completion after Evidence update.
+        // available ≠ verified; advance only completes when requirements are satisfied.
+        if (ingested.ok) {
+          await advanceProductExecutionContractAfterEvidence({
+            oa: input.oa,
+            projectId: input.projectId,
+            executionContractId: contract.executionContractId,
+            cycleInstanceId: contract.cycleInstanceId,
+            freshlyIngested: {
+              evidenceId: ingested.evidenceId,
+              digest: completed.facts.digest,
+            },
+          });
+        }
       }
     }
     return buildTechnicalTerminal({
```


### [MOD] `projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts b/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
index 86517af6..62c8a777 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts
@@ -35,6 +35,30 @@ const TERMINAL_STATUSES = new Set<ExecutionContract["status"]>([
   "superseded",
 ]);

+const TERMINAL_ATTEMPT_STATUSES = new Set<string>([
+  "succeeded",
+  "failed",
+  "timeout",
+  "cancelled",
+]);
+
+/**
+ * D-MORRIS-PCONT-01 — confirmed/validated EC with a terminal Attempt is in
+ * post-execution / Evidence phase, not a pre-execution continuable current.
+ */
+async function hasTerminalAttempt(
+  oa: RuntimeOaStack,
+  executionContractId: string,
+): Promise<boolean> {
+  const attempts = oa.executionAttemptServices;
+  if (!attempts) return false;
+  const listed = await attempts.listExecutionAttempts.execute({
+    executionContractId,
+  });
+  if (!listed.ok) return false;
+  return listed.attempts.some((a) => TERMINAL_ATTEMPT_STATUSES.has(a.status));
+}
+
 function fail(
   code: string,
   message: string,
@@ -213,6 +237,8 @@ export async function readCurrentGovernedExecutionContinuity(input: {
     if (TERMINAL_STATUSES.has(contract.status)) continue;
     if (!PRE_EXECUTION_STATUSES.has(contract.status)) continue;
     if (!(await isCurrentInSupersessionLineage(oa, contract))) continue;
+    // Post-execution Evidence phase: terminal Attempt ⇒ not pre-execution current.
+    if (await hasTerminalAttempt(oa, contract.executionContractId)) continue;
     preExecution.push(contract);
   }

```


### [MOD] `projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
index 3865fb16..71350754 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
@@ -110,9 +110,13 @@ function clarifySteps(): TrajectoryStep[] {
   ];
 }

-function recoveryRetrySteps(): TrajectoryStep[] {
+function recoveryRetrySteps(outcome: "FAIL" | "STOP" | "UNCLAIMED"): TrajectoryStep[] {
+  const diagnoseLabel =
+    outcome === "UNCLAIMED"
+      ? "Prendre en compte le succès technique et le résultat produit non prouvé"
+      : "Prendre en compte l'échec et l'Evidence durables";
   return [
-    step(1, "w2-rec-diagnose", "Prendre en compte l'échec et l'Evidence durables"),
+    step(1, "w2-rec-diagnose", diagnoseLabel),
     step(2, "w2-rec-decide", "Décision humaine explicite de recovery", {
       dependencies: ["stp:w2-rec-diagnose"],
       gate: "human_decision",
@@ -146,9 +150,13 @@ function recoveryClarifySteps(): TrajectoryStep[] {
   ];
 }

-function recoverySuspendSteps(): TrajectoryStep[] {
+function recoverySuspendSteps(outcome: "FAIL" | "STOP" | "UNCLAIMED"): TrajectoryStep[] {
+  const ackLabel =
+    outcome === "UNCLAIMED"
+      ? "Conserver le succès technique et le résultat produit non prouvé comme vérité durable"
+      : "Conserver l'échec comme vérité durable";
   return [
-    step(1, "w2-rec-hold-ack", "Conserver l'échec comme vérité durable"),
+    step(1, "w2-rec-hold-ack", ackLabel),
     step(2, "w2-rec-hold-decide", "Décision humaine de suspension / replan", {
       dependencies: ["stp:w2-rec-hold-ack"],
       gate: "human_decision",
@@ -170,35 +178,50 @@ export function deriveTrajectoryOptions(
   const reservations = [...inputs.reservations];
   const recovery = inputs.recoveryContext ?? null;
   if (recovery) {
+    const unclaimedSucceeded =
+      recovery.productOutcome === "UNCLAIMED" &&
+      recovery.attemptStatus === "succeeded";
+    const outcomePhrase = unclaimedSucceeded
+      ? "exécution technique réussie, résultat produit non encore prouvé"
+      : recovery.productOutcome === "STOP"
+        ? "STOP durable"
+        : "FAIL durable";
+    const attemptImpact = unclaimedSucceeded
+      ? `Attempt succeeded (technique): ${recovery.attemptId}`
+      : recovery.attemptStatus === "succeeded"
+        ? `Attempt succeeded: ${recovery.attemptId}`
+        : `Attempt ${recovery.attemptStatus}: ${recovery.attemptId}`;
+    const holdIntent = unclaimedSucceeded
+      ? "Conserver le succès technique et le résultat produit non prouvé comme vérité, décider de suspendre ou replanifier — aucune nouvelle tentative immédiate."
+      : "Conserver l'échec comme vérité, décider de suspendre ou replanifier — aucune nouvelle tentative immédiate.";
     return [
       {
         kind: "OPTION",
         optionRef: GOVERNED_OPTION_REF,
         label: "Préparer une nouvelle tentative gouvernée",
-        intent:
-          "À partir du FAIL durable, décider explicitement puis préparer / inspecter / autoriser un nouveau contrat — sans Execute automatique.",
+        intent: `À partir du ${outcomePhrase}, décider explicitement puis préparer / inspecter / autoriser un nouveau contrat — sans Execute automatique.`,
         impacts: [
-          `Attempt failed: ${recovery.attemptId}`,
+          attemptImpact,
           `Evidence: ${recovery.evidenceId}`,
           "Aucun succès métier revendiqué",
+          `productOutcome: ${recovery.productOutcome}`,
           `realProcessInvoked durable: ${recovery.realProcessInvoked}`,
         ],
         reservations,
-        steps: recoveryRetrySteps(),
+        steps: recoveryRetrySteps(recovery.productOutcome),
       },
       {
         kind: "OPTION",
         optionRef: BOUNDED_OPTION_REF,
         label: "Replanifier ou suspendre sans relance immédiate",
-        intent:
-          "Conserver l'échec comme vérité, décider de suspendre ou replanifier — aucune nouvelle tentative immédiate.",
+        intent: holdIntent,
         impacts: [
           "Pas de relance Execute dans cette option",
           `W3C: ${recovery.recommendationKind}`,
           `outcome: ${recovery.productOutcome}`,
         ],
         reservations,
-        steps: recoverySuspendSteps(),
+        steps: recoverySuspendSteps(recovery.productOutcome),
       },
       {
         kind: "OPTION",
```


### [MOD] `projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
index d2636564..0c8ee704 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
@@ -335,7 +335,12 @@ export async function proposeTrajectoryOptions(
   const cognitionUserContent = proposalSubject
     ? `Instruire Options/Recommendation pour la Proposal ${proposalSubject.proposalId} (sujet: ${proposalSubject.sealedExecutionBasis.objective})`
     : recoveryContext
-      ? `Instruire Options/Recommendation de recovery/replan après FAIL durable (${recoveryContext.attemptId}) — sujet courant = recovery du même cycle, PAS un nouveau cadrage fonctionnel.`
+      ? `Instruire Options/Recommendation de recovery/replan après ${
+          recoveryContext.productOutcome === "UNCLAIMED" &&
+          recoveryContext.attemptStatus === "succeeded"
+            ? "succès technique / résultat produit non prouvé"
+            : `${recoveryContext.productOutcome} durable`
+        } (${recoveryContext.attemptId}, attempt=${recoveryContext.attemptStatus}) — sujet courant = recovery du même cycle, PAS un nouveau cadrage fonctionnel.`
       : `Instruire Options/Recommendation pour le cycle ${input.cycleTypeId}`;
   let cognitiveRecommendation: string;
   try {
```


### [MOD] `projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
index 9bb2c46d..b5d420d6 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
@@ -39,7 +39,6 @@ import {
   isProposalSubjectPresentedSet,
   loadPresentedOptionSet,
 } from "./presentedOptionSet";
-import { resolvePendingDecisionSubjectMarker } from "./pendingDecisionSubjectMarker";
 import {
   PROPOSAL_SUBJECT_AMEND_REF,
   PROPOSAL_SUBJECT_PURSUE_REF,
@@ -47,8 +46,11 @@ import {
 } from "./proposalSubjectOptions";
 import { resolveW2QualificationInputs } from "./qualificationInputs";
 import type { DecideTrajectoryResult, TrajectoryOptionDto } from "./types";
-import { updateProposalStatus } from "../f2/proposalStore";
 import type { F2ProposalStatus } from "../f2/types";
+import {
+  finalizeProposalSubjectAfterDurableClosure,
+  writeProposalDecisionRef,
+} from "./closeProposalDecisionSubject";

 function shortId(): string {
   return randomBytes(6).toString("hex");
@@ -608,35 +610,21 @@ export async function decideTrajectory(
           markerReason = "decided";
         }

-        const closure = await oa.cycleServices.updateEpistemicState.execute({
+        const closure = await writeProposalDecisionRef({
+          oa,
           projectId: input.projectId,
-          items: [
-            {
-              epistemicItemId: `epi:w2-decref-prop:${input.optionSetRef.replace(/[^a-zA-Z0-9:_-]/g, "-")}`.slice(
-                0,
-                180,
-              ),
-              type: "DecisionRef",
-              statement: `Décision humaine ${decisionId} — option retenue ${input.selectedOptionRef} — sujet Proposal ${presented.proposalId} (ProjectTrajectory non promue).`,
-              status: "active",
-              source: decisionId,
-              relatedObjects: [
-                input.projectId,
-                decisionId,
-                input.selectedOptionRef,
-                input.optionSetRef,
-                presented.proposalId!,
-                ...epistemicRefs,
-              ],
-            },
-          ],
-          createdBy: LOCAL_PILOTE_ACTOR,
-          correlationId: `w2-decref-prop:${input.optionSetRef}`,
+          decisionId,
+          proposalId: presented.proposalId!,
+          selectedOptionRef: input.selectedOptionRef,
+          optionSetRef: input.optionSetRef,
+          epistemicRefs,
+          markerReason,
+          nextProposalStatus,
         });
         if (!closure.ok) {
           throw new DecideAtomicFailure(
-            closure.error.detailCode,
-            `Closure DecisionRef Proposal échouée (${closure.error.detailCode}) — HumanDecision non autoritaire; rollback UoW.`,
+            closure.code,
+            closure.message,
           );
         }

@@ -716,13 +704,12 @@ export async function decideTrajectory(

   if (atomic.mode === "proposal") {
     // Process-local ProposalStore is NOT transactional — update only after durable success.
-    updateProposalStatus(atomic.proposalId, atomic.nextProposalStatus);
-    await resolvePendingDecisionSubjectMarker({
+    await finalizeProposalSubjectAfterDurableClosure({
       oa,
       projectId: input.projectId,
       proposalId: atomic.proposalId,
-      reason: atomic.markerReason,
-      correlationId: `cor:pending-decide:${atomic.proposalId}`,
+      markerReason: atomic.markerReason,
+      nextProposalStatus: atomic.nextProposalStatus,
     });

     return {
```


### [MOD] `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts b/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
index 15bf14e5..437ade92 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
@@ -17,6 +17,7 @@ import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import type {
   DecisionDto,
   F2ContextSnapshot,
@@ -29,6 +30,12 @@ import {
   markProposalStale,
   updateProposalStatus,
 } from "./proposalStore";
+import {
+  f2DirectOptionSetRef,
+  finalizeProposalSubjectAfterDurableClosure,
+  writeProposalDecisionRef,
+  type ProposalClosureMarkerReason,
+} from "../w2/closeProposalDecisionSubject";

 /** @deprecated M2 demo actor — prefer LOCAL_MORRIS_M3_ACTOR when M3 authority enabled. */
 export const LOCAL_MORRIS_ACTOR = Object.freeze({
@@ -216,6 +223,11 @@ export async function recordF2Decision(input: {
   nowIso: () => string;
   /** Test inject for M3 authority. */
   forceM3Authority?: boolean;
+  /**
+   * D-MORRIS-PCONT-02 — Product runtime stack for DecisionRef epistemic closure.
+   * Required for durable Proposal subject closure (same semantics as decideTrajectory).
+   */
+  oa?: RuntimeOaStack;
 }): Promise<
   | {
       ok: true;
@@ -347,39 +359,118 @@ export async function recordF2Decision(input: {
       })
     : undefined;

-  const result = await input.decisionServices.recordHumanDecision.execute({
-    decisionId,
-    projectId: input.projectId,
-    cycleInstanceId: decisionBasis?.cycleInstanceId,
-    subject: `F2 gate for ${proposal.proposalId}`,
-    options,
-    selectedOptionId: mapped.selectedOptionId,
-    actor: LOCAL_PILOTE_ACTOR,
-    authority: "morris",
-    status: mapped.humanStatus,
-    reversible: true,
-    scope,
-    reservations,
-    rationale: `F2 ${input.decisionKind} on ${proposal.proposalId}`,
-    authorityEvidenceId: authority.evidenceId,
-    decisionBasis,
-    linkToLivingProjectState: isGoAccepted,
-    expectedLpsVersion: isGoAccepted
-      ? input.currentContext.lpsVersion
-      : undefined,
-    correlationId: `f2-dec:${proposal.proposalId}`,
-  });
+  const markerReason: ProposalClosureMarkerReason =
+    mapped.humanStatus === "refused"
+      ? "refused"
+      : mapped.humanStatus === "amended"
+        ? "amended"
+        : "decided";
+  const optionSetRef = f2DirectOptionSetRef(proposal.proposalId);
+
+  const persistDurable = async (): Promise<
+    | { ok: true }
+    | { ok: false; code: string; message: string }
+  > => {
+    const result = await input.decisionServices.recordHumanDecision.execute({
+      decisionId,
+      projectId: input.projectId,
+      cycleInstanceId: decisionBasis?.cycleInstanceId,
+      subject: `F2 gate for ${proposal.proposalId}`,
+      options,
+      selectedOptionId: mapped.selectedOptionId,
+      actor: LOCAL_PILOTE_ACTOR,
+      authority: "morris",
+      status: mapped.humanStatus,
+      reversible: true,
+      scope,
+      reservations,
+      rationale: `F2 ${input.decisionKind} on ${proposal.proposalId}`,
+      authorityEvidenceId: authority.evidenceId,
+      decisionBasis,
+      linkToLivingProjectState: isGoAccepted,
+      expectedLpsVersion: isGoAccepted
+        ? input.currentContext.lpsVersion
+        : undefined,
+      correlationId: `f2-dec:${proposal.proposalId}`,
+    });
+
+    if (!result.ok) {
+      return {
+        ok: false,
+        code: result.error.detailCode,
+        message: result.error.message,
+      };
+    }
+
+    // D-MORRIS-PCONT-02 — same DecisionRef closure as decideTrajectory proposal mode.
+    if (input.oa) {
+      const closure = await writeProposalDecisionRef({
+        oa: input.oa,
+        projectId: input.projectId,
+        decisionId,
+        proposalId: proposal.proposalId,
+        selectedOptionRef: mapped.selectedOptionId,
+        optionSetRef,
+        markerReason,
+        nextProposalStatus: mapped.proposalStatus,
+      });
+      if (!closure.ok) {
+        return {
+          ok: false,
+          code: closure.code,
+          message: closure.message,
+        };
+      }
+    }
+
+    return { ok: true };
+  };

-  if (!result.ok) {
+  let durable: { ok: true } | { ok: false; code: string; message: string };
+  if (input.oa) {
+    try {
+      durable = await input.oa.projectServices.store.runInTransaction(
+        persistDurable,
+      );
+    } catch (err) {
+      return {
+        ok: false,
+        code: "PERSISTENCE_FAILURE",
+        message:
+          err instanceof Error
+            ? err.message
+            : "Échec atomique HumanDecision+DecisionRef Proposal.",
+        proposal,
+      };
+    }
+  } else {
+    durable = await persistDurable();
+  }
+
+  if (!durable.ok) {
     return {
       ok: false,
-      code: result.error.detailCode,
-      message: result.error.message,
+      code: durable.code,
+      message: durable.message,
       proposal,
     };
   }

-  const updated = updateProposalStatus(proposal.proposalId, mapped.proposalStatus);
+  // Process-local ProposalStore only after durable HD (+ DecisionRef when oa present).
+  let updated: ProposalDto | null;
+  if (input.oa) {
+    await finalizeProposalSubjectAfterDurableClosure({
+      oa: input.oa,
+      projectId: input.projectId,
+      proposalId: proposal.proposalId,
+      markerReason,
+      nextProposalStatus: mapped.proposalStatus,
+    });
+    updated = getProposal(proposal.proposalId);
+  } else {
+    updated = updateProposalStatus(proposal.proposalId, mapped.proposalStatus);
+  }
+
   const decision: DecisionDto = {
     decisionId,
     proposalId: proposal.proposalId,
```


### [MOD] `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 022fc92e..bb6a7321 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -227,6 +227,7 @@ export async function projectAssistantDecideAction(input: {
     decisionServices: runtime.oa.decisionServices,
     authorityResolver: runtime.oa.authorityResolver,
     nowIso: () => runtime.oa!.clock.nowIso(),
+    oa: runtime.oa,
   });

   if (!recorded.ok) {
```


### [MOD] `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 3cda6518..d98f0636 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -480,11 +480,9 @@ export function TrajectorySurface({
     setAuthorization(null);
     setAmendmentDraft("");
     setAmendmentNotice(null);
-    setAttempt(null);
-    setAttemptPhase(null);
-    setAttemptStatusLabel(null);
-    setProductOutcome(null);
-    setPostEvidence(null);
+    // D-MORRIS-PCONT — recovery OptionSet is additive: keep durable Attempt /
+    // ProductOutcome / postEvidence projection (rehydrate, do not wipe).
+    // Only clear EC/authorization which belong to a fresh framing subject.
     onDurableFactsChanged?.();
   }, [
     continuityMutationBlocked,
@@ -586,10 +584,15 @@ export function TrajectorySurface({
       return;
     }

-    // Fail-closed contradiction: unresolved Proposal Decision Subject + current EC.
-    const subjectCompetes =
+    // Fail-closed: unresolved Proposal Decision Subject + current pre-execution EC.
+    // Recovery / ProjectTrajectory OptionSet awaiting HD is NOT a Proposal subject.
+    // pursue_prepare_ready and closed Proposal subjects never compete.
+    const unresolvedProposalSubject =
       pendingReinstruction != null ||
-      (optionSet != null && decision == null);
+      (optionSet != null &&
+        decision == null &&
+        optionSet.decisionSubjectMode === "proposal");
+    const subjectCompetes = unresolvedProposalSubject;
     if (subjectCompetes) {
       setExecutionContinuityConflict(true);
       setError(
```


### [MOD] `projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts b/projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts
index c138369a..24a8aad3 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts
@@ -255,6 +255,19 @@ export class ProposeTrajectoryVersion {
           throw new Error("missing_current_lps");
         }

+        // D-MORRIS-PCONT-03 — candidate ≠ current.
+        // When a decided current trajectory exists, proposing vN+1 candidate
+        // must NOT replace LPS current trajectory refs with the candidate.
+        // Keep LPS pointing at the decided current (head); candidate remains
+        // presentable via OptionSet / trajectory repository only.
+        // Initial / candidate→candidate flows still link LPS to nextVersion.
+        const decidedCurrentExists =
+          head.status === "validated" || head.status === "active";
+        const lpsTrajectoryVersion =
+          status === "candidate" && decidedCurrentExists
+            ? head.version
+            : nextVersion;
+
         const appended =
           await this.projectServices.appendLivingProjectStateVersion.execute({
             projectId: request.projectId,
@@ -265,7 +278,7 @@ export class ProposeTrajectoryVersion {
             context: currentLps.livingProjectState.context,
             scope: currentLps.livingProjectState.scope,
             trajectoryId: request.trajectoryId,
-            trajectoryVersion: nextVersion,
+            trajectoryVersion: lpsTrajectoryVersion,
           });

         if (!appended.ok) {
```


### [NEW] `projects/sfia-studio/app/__tests__/project-assistant/postExecutionProductContinuity.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/postExecutionProductContinuity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/postExecutionProductContinuity.d0.test.ts
new file mode 100644
index 00000000..0c63c31d
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/postExecutionProductContinuity.d0.test.ts
@@ -0,0 +1,474 @@
+/**
+ * POST-EXECUTION PRODUCT CONTINUITY & RECOVERY — D-MORRIS-PCONT-01..04
+ * Deterministic unit/integration. ZERO REAL. ZERO OpenAI LIVE.
+ * @vitest-environment node
+ */
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import { FixedClock, type Digest } from "@/lib/oa/doctrine";
+import { createTestDoctrineResolver } from "@/lib/oa/doctrine";
+import {
+  createInMemoryDecisionServices,
+  LOCAL_PILOTE_ACTOR,
+} from "@/lib/oa/decision";
+import {
+  advanceExecutionContractCompletion,
+  createInMemoryExecutionAttemptServices,
+  qualifyExecutionContractCompletion,
+} from "@/lib/oa/execution-attempt";
+import {
+  createInMemoryExecutionContractServices,
+  type ExecutionContract,
+} from "@/lib/oa/execution-contract";
+import type { Evidence } from "@/lib/oa/evidence-review";
+import {
+  createTestProjectServices,
+  type ActorReference,
+  type ProjectServices,
+} from "@/lib/oa/project";
+import {
+  createTestCycleServices,
+  type CycleServices,
+  type TrajectoryStep,
+} from "@/lib/oa/cycle";
+import {
+  deriveTrajectoryOptions,
+  deriveTrajectoryRecommendation,
+  GOVERNED_OPTION_REF,
+  BOUNDED_OPTION_REF,
+  CLARIFY_OPTION_REF,
+} from "@/features/project-assistant/w2/trajectoryOptions";
+import type { PostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
+import {
+  createProposalId,
+  F2_PROCESS_LOCAL_NOTICE,
+  resetF2ProposalStoreForTests,
+  saveProposal,
+  getProposal,
+} from "@/features/project-assistant/f2/proposalStore";
+import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
+import { f2DirectOptionSetRef } from "@/features/project-assistant/w2/closeProposalDecisionSubject";
+import { closedProposalIdsFromProposalDecisionRefs } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  currentF2Context,
+  seedQualifiedProject,
+  tempProductDbPath,
+} from "./w2Harness";
+
+const APP_ROOT = path.resolve(__dirname, "../..");
+const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
+const SCHEMAS = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const VALID_DIGEST =
+  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
+
+const ACTOR: ActorReference = {
+  actorId: "actor:pcont",
+  role: "project_owner",
+  displayName: "PCont",
+  authorityLevel: "N3",
+};
+
+const UNCLAIMED_RECOVERY: PostEvidenceRecoveryContext = {
+  kind: "post_evidence_recovery",
+  attemptId: "xat:pcont:unclaimed",
+  attemptStatus: "succeeded",
+  stopReason: null,
+  executionContractId: "xct:pcont:1",
+  evidenceId: "ev:docs-write:xatpcont",
+  reviewBundleId: "rb:docs-write:xatpcont",
+  productOutcome: "UNCLAIMED",
+  recommendationKind: "recover",
+  headline: "Exécution technique réussie — résultat produit non prouvé",
+  rationale: "Attempt succeeded; ClaimEvaluation not_proven; Product UNCLAIMED.",
+  nextStep: "recovery_diagnose_or_replan",
+  realProcessInvoked: false,
+  businessEffectProven: false,
+  w3cEpistemicItemId: "epi:w3c-rec:pcont",
+};
+
+beforeEach(() => {
+  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
+  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
+  setConversationProviderForTests(null);
+  resetF2ProposalStoreForTests();
+});
+
+afterEach(() => {
+  cleanupW2TempDirs();
+  resetF2ProposalStoreForTests();
+  setConversationProviderForTests(null);
+});
+
+describe("Axe C — UNCLAIMED + succeeded semantics", () => {
+  it("never presents UNCLAIMED+succeeded as technical FAIL", () => {
+    const inputs = {
+      cycleTypeId: "cyc:framing",
+      recommendedProfile: "Critical" as const,
+      criticalSignalsPresent: true,
+      irreversible: false,
+      reservations: [] as string[],
+      ckcAttribution: null,
+      recoveryContext: UNCLAIMED_RECOVERY,
+    };
+    const options = deriveTrajectoryOptions(inputs);
+    const blob = JSON.stringify(options);
+    expect(blob).not.toMatch(/FAIL durable/i);
+    expect(blob).not.toMatch(/Attempt failed/i);
+    expect(blob).not.toMatch(/Conserver l'échec/i);
+    expect(blob).toMatch(/technique réussie|non encore prouvé|non prouvé/i);
+    expect(options[0]!.impacts.some((i) => /Attempt succeeded/i.test(i))).toBe(
+      true,
+    );
+    const rec = deriveTrajectoryRecommendation(inputs);
+    expect(rec.isHumanDecision).toBe(false);
+    expect(rec.rationale).toMatch(/UNCLAIMED/);
+    expect(rec.rationale).not.toMatch(/FAIL durable/);
+  });
+
+  it("keeps FAIL wording when productOutcome is FAIL", () => {
+    const options = deriveTrajectoryOptions({
+      cycleTypeId: "cyc:framing",
+      recommendedProfile: "Critical",
+      criticalSignalsPresent: true,
+      irreversible: false,
+      reservations: [],
+      ckcAttribution: null,
+      recoveryContext: {
+        ...UNCLAIMED_RECOVERY,
+        attemptStatus: "failed",
+        productOutcome: "FAIL",
+        headline: "Échec technique — recovery requise",
+      },
+    });
+    expect(JSON.stringify(options)).toMatch(/FAIL durable/);
+    expect(options.map((o) => o.optionRef)).toEqual([
+      GOVERNED_OPTION_REF,
+      BOUNDED_OPTION_REF,
+      CLARIFY_OPTION_REF,
+    ]);
+  });
+});
+
+describe("Axe A — EC completion qualification", () => {
+  function docsWriteContract(
+    status: ExecutionContract["status"],
+  ): ExecutionContract {
+    return {
+      schemaVersion: "0.2.0-oa",
+      executionContractId: "xct:pcont:docs",
+      projectId: "prj:pcont",
+      cycleInstanceId: "cyc:pcont",
+      version: 2,
+      status,
+      semanticFingerprint: "fp:pcont",
+      action: "bounded_docs_write",
+      target: "docs/x.md",
+      scope: "docs/",
+      requiredAuthority: "N3",
+      constraints: ["NO_COMMIT", "NO_PUSH", "NO_PR", "NO_MERGE"],
+      stopConditions: [],
+      evidenceRequirements: ["evreq:docs_write_artifact"],
+      expectedOutputs: [],
+      requiredCapabilities: ["cap:docs_write"],
+      reversibility: "reversible",
+      idempotencyKey: "idem:pcont",
+      correlationId: "cor:pcont",
+    };
+  }
+
+  function artifactEvidence(status: Evidence["status"]): Evidence {
+    return {
+      evidenceId: "ev:docs-write:pcont",
+      type: "artifact",
+      status,
+      availability: "available",
+      digest: "sha256:abc",
+      location: "docs/x.md",
+      source: "execution_attempt:docs_write",
+      sourceKind: "external",
+      classification: "internal",
+      storageMode: "metadata_only",
+      containsSecrets: false,
+      version: 1,
+      createdAt: "2026-09-20T00:00:00.000Z",
+      updatedAt: "2026-09-20T00:00:00.000Z",
+      bindings: {
+        projectId: "prj:pcont",
+        cycleInstanceId: "cyc:pcont",
+        executionContractId: "xct:pcont:docs",
+        executionAttemptId: "xat:pcont",
+      },
+    };
+  }
+
+  it("available Evidence alone does not complete", () => {
+    const q = qualifyExecutionContractCompletion({
+      contract: docsWriteContract("confirmed"),
+      evidence: [artifactEvidence("available")],
+      cycleInstanceId: "cyc:pcont",
+    });
+    expect(q.complete).toBe(false);
+    expect(q.nextStatusAfterSuccessfulAttempt).toBe("confirmed");
+  });
+
+  it("verified Evidence completes docs_write filesystem requirement", () => {
+    const q = qualifyExecutionContractCompletion({
+      contract: docsWriteContract("confirmed"),
+      evidence: [artifactEvidence("verified")],
+      cycleInstanceId: "cyc:pcont",
+    });
+    expect(q.complete).toBe(true);
+    expect(q.nextStatusAfterSuccessfulAttempt).toBe("completed");
+  });
+
+  it("advanceExecutionContractCompletion is idempotent when already completed", async () => {
+    const clock = new FixedClock("2026-09-20T00:00:00.000Z");
+    const decisions = createInMemoryDecisionServices({ clock });
+    const contracts = createInMemoryExecutionContractServices({
+      clock,
+      decisionServices: decisions,
+    });
+    const attempts = createInMemoryExecutionAttemptServices({
+      clock,
+      decisionServices: decisions,
+      executionContractServices: contracts,
+    });
+    const contract = docsWriteContract("completed");
+    await contracts.contracts.save(contract);
+    const r1 = await advanceExecutionContractCompletion({
+      executionContractId: contract.executionContractId,
+      contracts: contracts.contracts,
+      contractStatusWriter: attempts.contractStatusWriter,
+      evidence: [artifactEvidence("verified")],
+      cycleInstanceId: "cyc:pcont",
+      clock,
+    });
+    expect(r1.ok).toBe(true);
+    if (!r1.ok) return;
+    expect(r1.complete).toBe(true);
+    expect(r1.advanced).toBe(false);
+    expect(r1.status).toBe("completed");
+  });
+});
+
+describe("Axe F — ProjectTrajectory current vs candidate LPS", () => {
+  const STEPS_V1: TrajectoryStep[] = [
+    { stepId: "stp:a", order: 1, label: "A", state: "done" },
+    { stepId: "stp:b", order: 2, label: "B", state: "pending" },
+  ];
+
+  function buildProjectServices(): ProjectServices {
+    const { resolver } = createTestDoctrineResolver({
+      registryRoot: FIXTURES,
+      schemasRoot: SCHEMAS,
+    });
+    return createTestProjectServices({
+      doctrineResolver: resolver,
+      fixedNowIso: "2026-09-20T01:00:00.000Z",
+    });
+  }
+
+  function buildCycle(projects: ProjectServices): CycleServices {
+    return createTestCycleServices({
+      projectServices: projects,
+      fixedNowIso: "2026-09-20T01:00:00.000Z",
+    });
+  }
+
+  it("propose v2 candidate keeps repo current + LPS at v1; promote syncs both", async () => {
+    const projects = buildProjectServices();
+    const created = await projects.createProject.execute({
+      projectId: "prj:trj-pcont",
+      title: "PCont traj",
+      objective: "LPS current vs candidate",
+      doctrinePackagePin: {
+        doctrinePackageId: "pkg:studio-v3-oa",
+        version: "1.0.0",
+        digest: VALID_DIGEST,
+      },
+      createdBy: ACTOR,
+      lpsVersionId: "lps:trj-pcont-v1",
+    });
+    expect(created.ok).toBe(true);
+
+    const cycle = buildCycle(projects);
+    const v1 = await cycle.createInitialTrajectory.execute({
+      trajectoryId: "trj:pcont",
+      projectId: "prj:trj-pcont",
+      steps: STEPS_V1,
+      status: "validated",
+      expectedLpsVersion: 1,
+      createdBy: ACTOR,
+    });
+    expect(v1.ok).toBe(true);
+    if (!v1.ok) return;
+
+    const lpsAfterV1 = await projects.getCurrentLivingProjectState.execute({
+      projectId: "prj:trj-pcont",
+    });
+    expect(lpsAfterV1.ok).toBe(true);
+    if (!lpsAfterV1.ok) return;
+    expect(lpsAfterV1.livingProjectState.trajectoryVersion).toBe(1);
+
+    const proposed = await cycle.proposeTrajectoryVersion.execute({
+      trajectoryId: "trj:pcont",
+      projectId: "prj:trj-pcont",
+      expectedVersion: 1,
+      expectedLpsVersion: lpsAfterV1.livingProjectState.version,
+      steps: [
+        ...STEPS_V1,
+        { stepId: "stp:c", order: 3, label: "C", state: "pending" },
+      ],
+      status: "candidate",
+      createdBy: ACTOR,
+    });
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    expect(proposed.trajectory.version).toBe(2);
+    expect(proposed.trajectory.status).toBe("candidate");
+
+    const current =
+      await cycle.trajectories.findCurrentByProjectId("prj:trj-pcont");
+    expect(current?.version).toBe(1);
+    expect(current?.status).toBe("validated");
+
+    const lpsAfterCandidate =
+      await projects.getCurrentLivingProjectState.execute({
+        projectId: "prj:trj-pcont",
+      });
+    expect(lpsAfterCandidate.ok).toBe(true);
+    if (!lpsAfterCandidate.ok) return;
+    expect(lpsAfterCandidate.livingProjectState.trajectoryVersion).toBe(1);
+    expect(lpsAfterCandidate.livingProjectState.trajectoryId).toBe("trj:pcont");
+
+    const candidate = await cycle.getTrajectoryVersion.execute({
+      projectId: "prj:trj-pcont",
+      version: 2,
+    });
+    expect(candidate.ok).toBe(true);
+    if (!candidate.ok) return;
+    expect(candidate.trajectory.status).toBe("candidate");
+
+    const promoted = await cycle.promoteDecidedTrajectory.execute({
+      projectId: "prj:trj-pcont",
+      trajectoryId: "trj:pcont",
+      expectedVersion: 2,
+      decisionRef: "dec:pcont:promote",
+      decidedOptionRef: "opt:governed",
+      expectedLpsVersion: lpsAfterCandidate.livingProjectState.version,
+      createdBy: ACTOR,
+    });
+    expect(promoted.ok).toBe(true);
+    if (!promoted.ok) return;
+    expect(promoted.trajectory.version).toBe(2);
+
+    const currentAfter =
+      await cycle.trajectories.findCurrentByProjectId("prj:trj-pcont");
+    expect(currentAfter?.version).toBe(2);
+
+    const lpsAfterPromote = await projects.getCurrentLivingProjectState.execute(
+      { projectId: "prj:trj-pcont" },
+    );
+    expect(lpsAfterPromote.ok).toBe(true);
+    if (!lpsAfterPromote.ok) return;
+    expect(lpsAfterPromote.livingProjectState.trajectoryVersion).toBe(2);
+  });
+});
+
+describe("Axe E — recordF2Decision DecisionRef closure convergence", () => {
+  it("writes DecisionRef + closes subject; restart does not resurrect awaiting", async () => {
+    const db = tempProductDbPath("pcont-f2-closure.sqlite");
+    const runtime = bootW2Runtime({
+      productDbPath: db,
+      idPrefix: "pcontf2",
+    });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "f2c" });
+    const oa = runtime.oa!;
+    const ctx = await currentF2Context(runtime, seeded.projectId);
+    const proposalId = createProposalId();
+    saveProposal({
+      proposalId,
+      status: "DECISION_REQUIRED",
+      rephrasedRequest: "PCont F2",
+      objective: "Close via recordF2Decision",
+      cycleTypeId: "cyc:delivery",
+      recommendedProfile: "Standard",
+      rationale: "PCont",
+      scope: "docs/",
+      outOfScope: [],
+      activatedBlocks: [],
+      expectedOutcome: "artifact",
+      sources: [],
+      risks: [],
+      reservations: [],
+      stopConditions: [],
+      morrisGateRequired: true,
+      nextPossibleStep: "F3 PREPARE",
+      contextSnapshot: {
+        projectId: ctx.projectId,
+        lpsId: ctx.lpsId,
+        lpsVersion: ctx.lpsVersion,
+        doctrineDigest: ctx.doctrineDigest,
+        activeCycleInstanceId: ctx.activeCycleInstanceId ?? undefined,
+      },
+      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+      executionForbidden: true,
+      noExecutingStatus: true,
+      agentBinding: "NOT_AVAILABLE",
+    });
+
+    const recorded = await recordF2Decision({
+      proposalId,
+      projectId: seeded.projectId,
+      decisionKind: "GO",
+      currentContext: {
+        projectId: ctx.projectId,
+        lpsId: ctx.lpsId,
+        lpsVersion: ctx.lpsVersion,
+        doctrineDigest: ctx.doctrineDigest,
+        activeCycleInstanceId: ctx.activeCycleInstanceId ?? undefined,
+      },
+      decisionServices: oa.decisionServices,
+      authorityResolver: oa.authorityResolver,
+      nowIso: () => oa.clock.nowIso(),
+      forceM3Authority: true,
+      oa,
+    });
+    expect(recorded.ok).toBe(true);
+    if (!recorded.ok) throw new Error(recorded.message);
+    expect(recorded.proposal.status).toBe("APPROVED");
+
+    const items = await oa.cycleServices.epistemic.listByProject(
+      seeded.projectId,
+    );
+    const closed = closedProposalIdsFromProposalDecisionRefs(items);
+    expect(closed.has(proposalId)).toBe(true);
+    const optionSetRef = f2DirectOptionSetRef(proposalId);
+    const decref = items.find(
+      (i) =>
+        i.type === "DecisionRef" &&
+        i.status === "active" &&
+        (i.relatedObjects ?? []).includes(optionSetRef) &&
+        (i.relatedObjects ?? []).includes(proposalId),
+    );
+    expect(decref).toBeTruthy();
+
+    resetF2ProposalStoreForTests();
+    expect(getProposal(proposalId)).toBeNull();
+    const itemsAfter = await oa.cycleServices.epistemic.listByProject(
+      seeded.projectId,
+    );
+    expect(
+      closedProposalIdsFromProposalDecisionRefs(itemsAfter).has(proposalId),
+    ).toBe(true);
+  });
+});
```


### [MOD] `projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
index 9f104194..b41ebaef 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
@@ -29,6 +29,16 @@ import { inspectExecutionContract } from "@/features/project-assistant/w2/inspec
 import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
 import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
 import { governedExecuteAuthorizedContract } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
+import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
+import { materializeProductOutcomeFromAttempt } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
+import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
+import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
+import { deriveTrajectoryOptions } from "@/features/project-assistant/w2/trajectoryOptions";
+import {
+  closedProposalIdsFromProposalDecisionRefs,
+  readActiveProposalDecisionSubject,
+} from "@/features/project-assistant/w2/activeProposalDecisionSubject";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
@@ -1044,6 +1054,7 @@ describe("CR-PWR-01…04 + DETERMINISTIC E2E Proposal→Evidence", () => {
       authorityResolver: oa.authorityResolver,
       nowIso: () => oa.clock.nowIso(),
       forceM3Authority: true,
+      oa,
     });
     expect(decided.ok).toBe(true);
     if (!decided.ok) throw new Error(`decide: ${decided.message}`);
@@ -1203,6 +1214,126 @@ describe("CR-PWR-01…04 + DETERMINISTIC E2E Proposal→Evidence", () => {
     const cycles = await oa.cycleServices.cycles.listByProject(projectId);
     const active = cycles.filter((c) => c.status === "active");
     expect(active.map((c) => c.cycleInstanceId)).toEqual([cycleInstanceId]);
+
+    // ——— POST-EXECUTION CONTINUITY (D-MORRIS-PCONT) ———
+    const ecAfter =
+      await oa.executionContractServices.getExecutionContract.execute({
+        executionContractId,
+      });
+    expect(ecAfter.ok).toBe(true);
+    if (!ecAfter.ok) throw new Error("ecAfter");
+    // Option A: verified docs_write artifact ⇒ completed (or honest non-completed).
+    expect(["completed", "confirmed"]).toContain(ecAfter.contract.status);
+    if (artifact!.status === "verified") {
+      expect(ecAfter.contract.status).toBe("completed");
+    }
+
+    const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
+    expect(
+      closedProposalIdsFromProposalDecisionRefs(epistemic).has(proposalId),
+    ).toBe(true);
+    const subject = await readActiveProposalDecisionSubject(oa, projectId);
+    expect(subject.ok).toBe(true);
+    if (subject.ok) {
+      expect(subject.kind).not.toBe("bound_awaiting_decision");
+      expect(subject.kind).not.toBe("pending_reinstruction_required");
+    }
+
+    const continuity = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId,
+    });
+    expect(continuity.ok).toBe(true);
+    if (continuity.ok) {
+      // Terminal Attempt ⇒ not pre-execution current (no false EC conflict).
+      expect(continuity.kind).toBe("none");
+    }
+
+    const materialized = await materializeProductOutcomeFromAttempt({
+      oa,
+      projectId,
+      attemptId,
+    });
+    expect(materialized.ok).toBe(true);
+    if (!materialized.ok) throw new Error(materialized.message);
+    expect(materialized.product.outcome).toBe("UNCLAIMED");
+    expect(materialized.attempt?.status ?? "succeeded").toBe("succeeded");
+
+    const recovery = await resolvePostEvidenceRecoveryContext({
+      oa,
+      projectId,
+    });
+    expect(recovery.ok).toBe(true);
+    expect(recovery.context).not.toBeNull();
+    if (!recovery.context) throw new Error("recovery");
+    expect(recovery.context.productOutcome).toBe("UNCLAIMED");
+    expect(recovery.context.attemptStatus).toBe("succeeded");
+
+    const recoveryOptions = deriveTrajectoryOptions({
+      cycleTypeId: "cyc:framing",
+      recommendedProfile: "Critical",
+      criticalSignalsPresent: true,
+      irreversible: false,
+      reservations: [],
+      ckcAttribution: null,
+      recoveryContext: recovery.context,
+    });
+    const recoveryBlob = JSON.stringify(recoveryOptions);
+    expect(recoveryBlob).not.toMatch(/FAIL durable/i);
+    expect(recoveryBlob).not.toMatch(/Attempt failed/i);
+    expect(recoveryBlob).toMatch(
+      /technique réussie|non encore prouvé|non prouvé|Attempt succeeded/i,
+    );
+
+    const qualification = await resolveW2QualificationInputs({
+      oa,
+      projectId,
+    });
+    expect(qualification.ok).toBe(true);
+    if (!qualification.ok) throw new Error("qual");
+    const proposed = await proposeTrajectoryOptions({
+      oa,
+      projectId,
+      ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
+    });
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) throw new Error(proposed.message);
+    expect(proposed.decisionSubjectMode).toBe("project_trajectory");
+
+    const subjectAfterPropose = await readActiveProposalDecisionSubject(
+      oa,
+      projectId,
+    );
+    expect(subjectAfterPropose.ok).toBe(true);
+    if (subjectAfterPropose.ok) {
+      expect(subjectAfterPropose.kind).not.toBe("bound_awaiting_decision");
+    }
+    const continuityAfterPropose = await readCurrentGovernedExecutionContinuity({
+      oa,
+      projectId,
+    });
+    expect(continuityAfterPropose.ok).toBe(true);
+    if (continuityAfterPropose.ok) {
+      expect(continuityAfterPropose.kind).toBe("none");
+    }
+
+    const rehydrated = await materializeProductOutcomeFromAttempt({
+      oa,
+      projectId,
+      attemptId,
+    });
+    expect(rehydrated.ok).toBe(true);
+    if (!rehydrated.ok) throw new Error(rehydrated.message);
+    expect(rehydrated.product.outcome).toBe("UNCLAIMED");
+
+    const cyclesAfter = await oa.cycleServices.cycles.listByProject(projectId);
+    expect(cyclesAfter.filter((c) => c.status === "active")).toHaveLength(1);
+    expect(cyclesAfter.map((c) => c.cycleInstanceId)).toEqual(
+      expect.arrayContaining([cycleInstanceId]),
+    );
   });

   async function reachAuthorizedDocsWrite(input: {
@@ -1229,6 +1360,7 @@ describe("CR-PWR-01…04 + DETERMINISTIC E2E Proposal→Evidence", () => {
       authorityResolver: oa.authorityResolver,
       nowIso: () => oa.clock.nowIso(),
       forceM3Authority: true,
+      oa,
     });
     expect(decided.ok).toBe(true);
     if (!decided.ok) throw new Error(decided.message);
```


---

## 7. Points de revue Critical — index dans le diff ci-dessus

### 7.1 Option A wiring order (Evidence → verify → advance)
Voir NEW `advanceProductExecutionContractAfterEvidence.ts` + MOD `governedExecuteAuthorizedContract.ts`:
1. `ingestDocsWriteArtifactEvidence` (available)
2. if ingest ok → `advanceProductExecutionContractAfterEvidence` with `freshlyIngested`
3. helper may `FakeEvidencePayloadAdapter.setScript` then `verifyEvidenceIntegrity`
4. then `advanceExecutionContractCompletion` with qualify set (complete only if verified requirements satisfied)

### 7.2 Continuity terminal Attempt gate
MOD `readCurrentGovernedExecutionContinuity.ts`: `hasTerminalAttempt` + skip from `preExecution` when Attempt terminal exists.

### 7.3 recordF2Decision atomicity
MOD `recordDecision.ts`: `persistDurable` = HD then `writeProposalDecisionRef`; when `oa` present wrapped in `oa.projectServices.store.runInTransaction`; ProposalStore/`finalizeProposalSubjectAfterDurableClosure` only after durable ok.
MOD `actions.ts`: passes `oa: runtime.oa`.
MOD `decideTrajectory.ts`: proposal mode uses `writeProposalDecisionRef` inside existing UoW; finalize after commit.

### 7.4 LPS candidate/current
MOD `proposeTrajectoryVersion.ts`: if `status==="candidate"` && head decided (`validated`|`active`) → LPS `trajectoryVersion=head.version`; else `nextVersion`. Promote path unchanged (still writes promoted version).

### 7.5 ACW
No ACW source file in the 13. Treatment = natural consequence of §7.4 + E2E asserts single active cycle / no parasite. No destructive delete; no new supersede engine.

### 7.6 Tests assertions
NEW `postExecutionProductContinuity.d0.test.ts` + MOD E2E assertions at end of DETERMINISTIC E2E in `productWorkspaceArtifactRouting…` — full text in diffs above.

---

## 8. Tests matrix

| Suite | Result |
|-------|--------|
| `postExecutionProductContinuity.d0.test.ts` | 7/7 PASS |
| `productWorkspaceArtifactRouting` DETERMINISTIC E2E extended | PASS |
| Batch PJR + checkpointF + w3c* + PWR file | 82/82 PASS |
| `activeCycleCognitiveWork.d0.test.ts` | PASS |
| `cycleTrajectoryEpistemicCkc.test.ts` | PASS |
| `productJourneyGovernedDocsWriteWiring` | PASS (isolated @30s for 2 slow cases) |
| `w2EabcDelivery` | 39 PASS |
| `gcecCont01SameEcAbContinuation` | 3 PASS |
| OpenAI LIVE / Cursor REAL | 0 / 0 |

---

## 9. Fake / Real

- D-PC-09 `ed3cc66…` REAL PROVEN applies to that tree only.
- This mutated tree: **DETERMINISTIC PRODUCT-NATIVE E2E PROVEN**.
- REAL HORS SCOPE. DETERMINISTIC PASS ≠ REAL PASS.

---

## 10. Réserves

1. Batch Cooking DB immutable.
2. ACW: no direct ACW mutation file; LPS fix + fresh invariants only.
3. Playwright W4C not re-run (vitest Product E2E covers diagnostic hole).
4. Product Completion COMPLETE non claimable; runtime v3 non adopted.
5. Project commit/push/PR/merge NOT AUTHORIZED this pass.

---

## 11. Review Handoff

- Mode: publish-in-cycle
- Source: `.tmp-sfia-review/chatgpt-review.md`
- Branch: `sfia/review-handoff`
- File: `sfia-review-handoff/latest-chatgpt-review.md`
- Commit message: `docs(review-handoff): publish post-execution continuity implementation`
- Push: `origin/sfia/review-handoff` fast-forward only
- Publisher verdict filled after publish
- Verify: `git fetch origin sfia/review-handoff` then rev-parse commit+blob and re-read — pack MUST contain unified diffs for all 13 files
- Return to delivery branch; no project push

---

## 12. Verdict

**POST-EXECUTION PRODUCT CONTINUITY & RECOVERY**
**— IMPLEMENTATION PASS**
**— DETERMINISTIC PRODUCT-NATIVE E2E PROVEN**
**— SAME MACRO / NO MICRO-CYCLE**
**— REAL NOT REPROVEN**
**— PROJECT COMMIT NOT AUTHORIZED**
**— MODIFIED CONTENT COMPLETE (FULL DIFFS)**
**— MORRIS CRITICAL REVIEW GATE PENDING**

---

## Instruction ChatGPT

Avant de répondre à Morris, lire depuis Git branche `sfia/review-handoff` fichier `sfia-review-handoff/latest-chatgpt-review.md`.

Vérifier Local Git Truth, décisions Morris, **diff unifié complet des 13 fichiers**, Option A order, EC completion, Proposal DecisionRef UoW, Recovery OptionSet, Attempt projection, trajectory/LPS, ACW honesty, tests/E2E, Fake/Real, réserves, handoff distant, verdict.

Si handoff absent/incomplet/synthesis-only: **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING**

Aucun GO commit/push/PR/merge ne doit être déduit du PASS d'implémentation.
