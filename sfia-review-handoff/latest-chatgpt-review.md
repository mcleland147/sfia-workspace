# ChatGPT Review Pack — FULL
## PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 — R10 restart recovery CTA precedence and next-action ownership

**Timestamp (UTC):** 2026-09-17T21:54:21Z
**Pack kind:** FULL (code modification present)
**Pack revision:** R10 — restart recovery CTA precedence and next-action ownership
**Automation:** L3 handoff only; **NO** project commit/push/PR/merge; **ZERO REAL**; **NO Execute**; **NO Attempt**; **NO HD**; **NO campaign SQLite PREPARE**

---

## 1. Git Truth

| Field | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| Branch | `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| HEAD | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| origin/main | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| Baseline | YES |
| Cycle | 9 QA / EVOL / CRITICAL |

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
 M projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/package-lock.json
?? .tmp-sfia-review/checkpoint-e-prepare-fix.diff
?? .tmp-sfia-review/checkpoint-e-r4-evidence-coherence.diff
?? .tmp-sfia-review/checkpoint-e-resume-full.diff
?? .tmp-sfia-review/checkpoint-f-r10-cta-precedence.diff
?? .tmp-sfia-review/checkpoint-f-r6-observability.diff
?? .tmp-sfia-review/checkpoint-f-r7-recovery-options.diff
?? .tmp-sfia-review/checkpoint-f-r8-recovery-successor.diff
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceRematerialize.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointE.prepareResume.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/docsWriteEvidenceContradictionView.ts
?? projects/sfia-studio/app/features/project-assistant/f3/processFailureDiagnostic.ts
?? projects/sfia-studio/app/features/project-assistant/f3/rematerializeDocsWriteEvidenceRequirements.ts
?? projects/sfia-studio/app/features/project-assistant/f3/resolveDurableBoundaryProofMode.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareReadyProposalPursueContinuation.ts
?? projects/sfia-studio/app/features/project-assistant/w2/recoveryReplaceableCurrentContract.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts
```

### Preservation

- R1–R8 preserved; R10 adapts TrajectorySurface + tiny pure helper only
- package-lock hors scope
- Campaign: Attempt=1 · wrong EC still confirmation_required · target ABSENT · REAL budget=1
- No campaign PREPARE applied by this lot

---

## 2. Qualification

Cycle 9 QA · EVOL · CRITICAL — next-action ownership after restart for recovery → REAL frontier.

---

## 3. Diagnostic R9 / Root cause A+B

Confirmed and closed:

1. restart → `decision === null` for trajectory HD
2. `continuityDecisionRef` holds recovery HD
3. R8 binding load short-circuited on `!decision`
4. continuity active(wrong generic) → `setContract`
5. CTA behind `!contract` + inside decision-only section → invisible
6. Inspect monopolized next action

---

## 4. Restart decision wiring

```ts
recoveryDecisionId = decision?.decisionId ?? continuityDecisionRef
```

Binding load:
- not blocked when `decision === null`
- uses `recoveryDecisionId`
- still skips proposal subjects / non-GOVERNED client decision
- server `resolveRecoveryExecutionBinding` validates HD accepted + trajectory_option + governed-gated + coherent failed docs_write

CTA section moved **outside** decision client gate so restart without client HD still renders.

---

## 5. Recovery-preempts-wrong-preexec UI rule

Pure helper `isWrongGenericPreExecReplaceableByRecoveryPrepare`:

- RecoveryExecutionBinding present
- continuityDecisionRef === recoveryDecisionId
- current contract pre-exec in draft|proposed|validated|confirmation_required
- current ≠ docs_write action/target
- no Attempt present
→ replaceable **for next-action only** (no durable status change, no Cancel on render)

When true:
- show recovery PREPARE CTA as primary
- keep wrong EC visible (history/current fact)
- demote Inspect to secondary; hide Confirm; disable Authorize
- next-action label = prepare recovery

---

## 6. No mutation on reload

Proven by UI test: remount with continuity active wrong EC → prepare mock **not** called; wrong EC remains confirmation_required in campaign read.

---

## 7. PREPARE R8 réutilisé

`w2PrepareRecoveryDocsWriteAction(decisionId: recoveryDecisionId)` unchanged R8 path:
Cancel wrong → M3 PREPARE_ONLY → resolveM3 successor docs_write.

---

## 8. Files

**NEW**
- `w2/recoveryReplaceableCurrentContract.ts`
- `__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts`

**MOD**
- `TrajectorySurface.tsx` (restart decisionRef + precedence + CTA placement)
- `trajectorySurface.ui.test.tsx` (R10 restart scenario)

---

## 9. Diff exploitable

### recoveryReplaceableCurrentContract.ts

```ts
/**
 * R10 — UI/read-model only: qualify wrong pre-exec generic current as
 * replaceable by recovery PREPARE for next-action ownership.
 * Pure — no OA I/O, no Cancel, no persistence. Client-safe.
 *
 * Action/target literals match M4_BOUNDED_DOCS_WRITE_* (avoid server-only imports).
 */
const DOCS_WRITE_ACTION = "cursor.docs_write.apply";
const DOCS_WRITE_TARGET = "workspace.isolated.docs_write";

const PRE_EXEC_REPLACEABLE_BY_RECOVERY_PREPARE = new Set([
  "draft",
  "proposed",
  "validated",
  "confirmation_required",
]);

export function isWrongGenericPreExecReplaceableByRecoveryPrepare(input: {
  readonly recoveryBinding:
    | { readonly kind: string }
    | null
    | undefined;
  readonly currentContract: {
    readonly action: string;
    readonly target: string;
    readonly status: string;
  } | null | undefined;
  readonly continuityDecisionRef: string | null | undefined;
  readonly recoveryDecisionId: string | null | undefined;
  readonly attemptPresent: boolean;
}): boolean {
  if (!input.recoveryBinding) return false;
  if (input.recoveryBinding.kind !== "post_evidence_recovery_execution") {
    return false;
  }
  if (!input.currentContract) return false;
  if (!input.recoveryDecisionId || !input.continuityDecisionRef) return false;
  if (input.continuityDecisionRef !== input.recoveryDecisionId) return false;
  if (input.attemptPresent) return false;
  if (!PRE_EXEC_REPLACEABLE_BY_RECOVERY_PREPARE.has(input.currentContract.status)) {
    return false;
  }
  const isDocsWrite =
    input.currentContract.action === DOCS_WRITE_ACTION &&
    input.currentContract.target === DOCS_WRITE_TARGET;
  if (isDocsWrite) return false;
  return true;
}

```

### Artifact

```diff
=== NEW: recoveryReplaceableCurrentContract.ts ===
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/recoveryReplaceableCurrentContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/recoveryReplaceableCurrentContract.ts
new file mode 100644
index 00000000..02206e73
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/recoveryReplaceableCurrentContract.ts
@@ -0,0 +1,48 @@
+/**
+ * R10 — UI/read-model only: qualify wrong pre-exec generic current as
+ * replaceable by recovery PREPARE for next-action ownership.
+ * Pure — no OA I/O, no Cancel, no persistence. Client-safe.
+ *
+ * Action/target literals match M4_BOUNDED_DOCS_WRITE_* (avoid server-only imports).
+ */
+const DOCS_WRITE_ACTION = "cursor.docs_write.apply";
+const DOCS_WRITE_TARGET = "workspace.isolated.docs_write";
+
+const PRE_EXEC_REPLACEABLE_BY_RECOVERY_PREPARE = new Set([
+  "draft",
+  "proposed",
+  "validated",
+  "confirmation_required",
+]);
+
+export function isWrongGenericPreExecReplaceableByRecoveryPrepare(input: {
+  readonly recoveryBinding:
+    | { readonly kind: string }
+    | null
+    | undefined;
+  readonly currentContract: {
+    readonly action: string;
+    readonly target: string;
+    readonly status: string;
+  } | null | undefined;
+  readonly continuityDecisionRef: string | null | undefined;
+  readonly recoveryDecisionId: string | null | undefined;
+  readonly attemptPresent: boolean;
+}): boolean {
+  if (!input.recoveryBinding) return false;
+  if (input.recoveryBinding.kind !== "post_evidence_recovery_execution") {
+    return false;
+  }
+  if (!input.currentContract) return false;
+  if (!input.recoveryDecisionId || !input.continuityDecisionRef) return false;
+  if (input.continuityDecisionRef !== input.recoveryDecisionId) return false;
+  if (input.attemptPresent) return false;
+  if (!PRE_EXEC_REPLACEABLE_BY_RECOVERY_PREPARE.has(input.currentContract.status)) {
+    return false;
+  }
+  const isDocsWrite =
+    input.currentContract.action === DOCS_WRITE_ACTION &&
+    input.currentContract.target === DOCS_WRITE_TARGET;
+  if (isDocsWrite) return false;
+  return true;
+}
=== NEW: checkpointF.recoveryCtaRestartPrecedence.d0.test.ts ===
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts
new file mode 100644
index 00000000..40846cfb
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts
@@ -0,0 +1,150 @@
+/**
+ * Checkpoint F / R10 — restart recovery CTA precedence (wrong generic current).
+ * ZERO REAL / ZERO Execute / ZERO campaign mutation.
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  isWrongGenericPreExecReplaceableByRecoveryPrepare,
+} from "@/features/project-assistant/w2/recoveryReplaceableCurrentContract";
+import type { RecoveryExecutionBinding } from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+  M4_BOUNDED_DOCS_WRITE_TARGET,
+} from "@/lib/oa/execution-attempt";
+
+const TARGET =
+  "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md";
+const RECOVERY_HD = "dec:w2-trj:7e6ca68a-a31b-448c-9ae8-648de8772988";
+
+const SAMPLE_BINDING: RecoveryExecutionBinding = {
+  kind: "post_evidence_recovery_execution",
+  recovery: {
+    kind: "post_evidence_recovery",
+    attemptId: "xat:w3a:1f49d8e25e20837a",
+    attemptStatus: "failed",
+    stopReason: "REAL_PROCESS_NONZERO_EXIT",
+    executionContractId: "xct:m3-ev:8aaa188b3a3bd7a7",
+    evidenceId: "ev:w3b:seed",
+    reviewBundleId: "rb:w3b:seed",
+    productOutcome: "FAIL",
+    recommendationKind: "recover",
+    headline: "Échec",
+    rationale: "r",
+    nextStep: "recovery_diagnose_or_replan",
+    realProcessInvoked: true,
+    businessEffectProven: false,
+    w3cEpistemicItemId: "epi:w3c-rec:seed",
+  },
+  sourceExecutionContractId: "xct:m3-ev:8aaa188b3a3bd7a7",
+  sourceAttemptId: "xat:w3a:1f49d8e25e20837a",
+  action: M4_BOUNDED_DOCS_WRITE_ACTION,
+  target: M4_BOUNDED_DOCS_WRITE_TARGET,
+  targetPath: TARGET,
+  scope: "studio.gcec.docs_write",
+  requiredCapabilities: ["cap:cursor.docs_write"],
+  evidenceRequirements: ["evreq:docs_write_artifact"],
+  constraints: ["NO_COMMIT", "NO_PUSH", "NO_PR", "NO_MERGE"],
+  stopConditions: [],
+  expectedOutputs: [],
+  inputs: { targetPath: TARGET },
+  projectId: "prj:test",
+  cycleInstanceId: null,
+  sourceSemanticFingerprint: null,
+  sourceStatus: "failed",
+};
+
+describe("R10 — wrong generic replaceable by recovery PREPARE (pure)", () => {
+  it("T2 — coherent binding + wrong generic confirmation_required → replaceable", () => {
+    expect(
+      isWrongGenericPreExecReplaceableByRecoveryPrepare({
+        recoveryBinding: SAMPLE_BINDING,
+        currentContract: {
+          action: "product:generate-temporary-artifact",
+          target: "product:project-workspace",
+          status: "confirmation_required",
+        },
+        continuityDecisionRef: RECOVERY_HD,
+        recoveryDecisionId: RECOVERY_HD,
+        attemptPresent: false,
+      }),
+    ).toBe(true);
+  });
+
+  it("T9 — current already docs_write → not replaceable", () => {
+    expect(
+      isWrongGenericPreExecReplaceableByRecoveryPrepare({
+        recoveryBinding: SAMPLE_BINDING,
+        currentContract: {
+          action: M4_BOUNDED_DOCS_WRITE_ACTION,
+          target: M4_BOUNDED_DOCS_WRITE_TARGET,
+          status: "confirmation_required",
+        },
+        continuityDecisionRef: RECOVERY_HD,
+        recoveryDecisionId: RECOVERY_HD,
+        attemptPresent: false,
+      }),
+    ).toBe(false);
+  });
+
+  it("T10 — different decisionRef → not replaceable", () => {
+    expect(
+      isWrongGenericPreExecReplaceableByRecoveryPrepare({
+        recoveryBinding: SAMPLE_BINDING,
+        currentContract: {
+          action: "product:generate-temporary-artifact",
+          target: "product:project-workspace",
+          status: "confirmation_required",
+        },
+        continuityDecisionRef: "dec:other",
+        recoveryDecisionId: RECOVERY_HD,
+        attemptPresent: false,
+      }),
+    ).toBe(false);
+  });
+
+  it("T11 — attempt present / confirmed → not replaceable", () => {
+    expect(
+      isWrongGenericPreExecReplaceableByRecoveryPrepare({
+        recoveryBinding: SAMPLE_BINDING,
+        currentContract: {
+          action: "product:generate-temporary-artifact",
+          target: "product:project-workspace",
+          status: "confirmation_required",
+        },
+        continuityDecisionRef: RECOVERY_HD,
+        recoveryDecisionId: RECOVERY_HD,
+        attemptPresent: true,
+      }),
+    ).toBe(false);
+    expect(
+      isWrongGenericPreExecReplaceableByRecoveryPrepare({
+        recoveryBinding: SAMPLE_BINDING,
+        currentContract: {
+          action: "product:generate-temporary-artifact",
+          target: "product:project-workspace",
+          status: "confirmed",
+        },
+        continuityDecisionRef: RECOVERY_HD,
+        recoveryDecisionId: RECOVERY_HD,
+        attemptPresent: false,
+      }),
+    ).toBe(false);
+  });
+
+  it("T12 — no binding → not replaceable", () => {
+    expect(
+      isWrongGenericPreExecReplaceableByRecoveryPrepare({
+        recoveryBinding: null,
+        currentContract: {
+          action: "product:generate-temporary-artifact",
+          target: "product:project-workspace",
+          status: "confirmation_required",
+        },
+        continuityDecisionRef: RECOVERY_HD,
+        recoveryDecisionId: RECOVERY_HD,
+        attemptPresent: false,
+      }),
+    ).toBe(false);
+  });
+});
=== MOD: TrajectorySurface (R10 hunks) ===
41-     proposalPursue && decision?.decisionBasisLinked === true;
42-   const proposalBackedPrepareBlocked =
43-     proposalPursue && decision?.decisionBasisLinked !== true;
44:+  /** R10 — client decision id OR durable continuity decisionRef after restart. */
45:+  const recoveryDecisionId =
46:+    decision?.decisionId ?? continuityDecisionRef ?? null;
47-+  const recoveryDocsWritePrepareReady = Boolean(
48-+    !decisionDefersExecution &&
49-+      !hasProposalDecisionSubject &&
--
52-+      recoveryBinding &&
53-+      recoveryBinding.kind === "post_evidence_recovery_execution",
54-+  );
55:+  const wrongGenericReplaceableByRecoveryPrepare =
56-+    isWrongGenericPreExecReplaceableByRecoveryPrepare({
57-+      recoveryBinding,
58-+      currentContract: contract,
59:+      continuityDecisionRef,
60:+      recoveryDecisionId,
61-+      attemptPresent: Boolean(attempt?.attemptId),
62-+    });
63:+  const showRecoveryDocsWritePrepare = Boolean(
64-+    recoveryDocsWritePrepareReady &&
65-+      recoveryBinding &&
66:+      (!contract || wrongGenericReplaceableByRecoveryPrepare),
67-+  );
68-   const rematerializeDecisionId =
69:     decision?.decisionId ?? continuityDecisionRef ?? null;
70-   const legacyDocsWriteRematerializeReady = Boolean(
71-@@ -390,6 +423,18 @@ export function TrajectorySurface({
72-         requiredCapabilities: contract.requiredCapabilities,
--
114-     ],
115-   );
116-
117:+  // R8/R10 — RecoveryExecutionBinding: decision client OR continuityDecisionRef
118-+  // after restart (server still validates HD / recovery coherence).
119-+  useEffect(() => {
120-+    let cancelled = false;
--
130-+        setRecoveryBinding(null);
131-+        return;
132-+      }
133:+      const decisionId = decision?.decisionId ?? continuityDecisionRef;
134-+      if (!decisionId) {
135-+        setRecoveryBinding(null);
136-+        return;
--
152-+    };
153-+  }, [
154-+    decision,
155:+    continuityDecisionRef,
156-+    hasProposalDecisionSubject,
157-+    projectId,
158-+  ]);
--
165-   ]);
166-
167-+  /**
168:+   * R8/R10 — recovery docs_write PREPARE from failed EC binding (no sandbox ops).
169:+   * Uses recoveryDecisionId (client decision or continuityDecisionRef).
170-+   */
171-+  const prepareRecoveryDocsWriteContract = useCallback(async () => {
172-+    if (continuityMutationBlocked) return;
173:+    if (!recoveryDecisionId || !showRecoveryDocsWritePrepare) return;
174-+    setBusy("contract");
175-+    setError(null);
176-+    const result = await w2PrepareRecoveryDocsWriteAction({
177-+      projectId,
178:+      decisionId: recoveryDecisionId,
179-+    });
180-+    setBusy(null);
181-+    if (!result.ok) {
--
210-+    onDurableFactsChanged?.();
211-+  }, [
212-+    continuityMutationBlocked,
213:+    recoveryDecisionId,
214-+    projectId,
215:+    showRecoveryDocsWritePrepare,
216-+    onDurableFactsChanged,
217-+  ]);
218-+
--
304-         </section>
305-       ) : null}
306-
307:+      {/* R10 — recovery CTA outside decision client state (restart: decision=null). */}
308-+      {!decisionDefersExecution &&
309:+      showRecoveryDocsWritePrepare &&
310-+      recoveryBinding ? (
311-+        <section
312-+          className={styles.actions}
313:+          data-testid="w2-recovery-docs-write-prepare"
314-+        >
315-+          <p
316-+            className={styles.blockNote}
317:+            data-testid="w2-recovery-docs-write-note"
318-+          >
319-+            Reprendre l&apos;écriture Markdown gouvernée après échec — cible
320-+            déjà qualifiée. Préparez le contrat successor explicitement ; aucun
321-+            Execute automatique.
322-+          </p>
323:+          {wrongGenericReplaceableByRecoveryPrepare && contract ? (
324-+            <p
325-+              className={styles.blockBody}
326:+              data-testid="w2-recovery-replaceable-generic-note"
327-+            >
328-+              Un contrat générique pré-exécution existe pour cette décision (
329-+              {contract.executionContractId}). La reprise recovery le remplacera
--
333-+          ) : null}
334-+          <p
335-+            className={styles.blockBody}
336:+            data-testid="w2-recovery-docs-write-path"
337-+          >
338-+            Cible : {recoveryBinding.targetPath}
339-+          </p>
340-+          <p
341-+            className={styles.blockBody}
342:+            data-testid="w2-recovery-docs-write-source"
343-+          >
344-+            Source : Attempt {recoveryBinding.sourceAttemptId} (
345-+            {recoveryBinding.recovery.productOutcome}) — EC{" "}
--
366-           <p className={styles.blockNote}>
367--            Relisez d&apos;abord ce qui sera tenté. Inspectez le détail avant
368--            toute confirmation. Confirmer n&apos;exécute pas.
369:+            {wrongGenericReplaceableByRecoveryPrepare
370-+              ? "Contrat générique pré-exécution visible pour cette décision. La prochaine action utile est de préparer le contrat recovery docs_write — pas d'inspection de ce dead-end."
371-+              : "Relisez d'abord ce qui sera tenté. Inspectez le détail avant toute confirmation. Confirmer n'exécute pas."}
372-           </p>
--
383--                    : "Statuer sur l'autorisation"
384--                  : "Inspecter le détail du contrat"}
385-+              <dd data-testid="w2-contract-next-action">
386:+                {wrongGenericReplaceableByRecoveryPrepare
387-+                  ? "Préparer le contrat recovery docs_write (explicite)"
388-+                  : inspection?.inspectionSufficient
389-+                    ? contract.status === "confirmation_required"
--
429-               type="button"
430--              className={styles.primaryAction}
431-+              className={
432:+                wrongGenericReplaceableByRecoveryPrepare
433-+                  ? styles.secondaryAction
434-+                  : styles.primaryAction
435-+              }
--
441-             </button>
442--            {contract.status === "confirmation_required" ? (
443-+            {contract.status === "confirmation_required" &&
444:+            !wrongGenericReplaceableByRecoveryPrepare ? (
445-               <button
446-                 type="button"
447-                 className={styles.secondaryAction}
--
473-+              disabled={
474-+                busy !== null ||
475-+                governedContinuationBlocked ||
476:+                wrongGenericReplaceableByRecoveryPrepare
477-+              }
478-+              title={
479:+                wrongGenericReplaceableByRecoveryPrepare
480-+                  ? "Préparez d'abord le contrat recovery docs_write"
481-+                  : undefined
482-+              }

```

---

## 10. Tests

| ID | Result |
|---|---|
| T1 restart decisionId → binding call | PASS (UI) |
| T2 wrong EC + binding → CTA | PASS |
| T3 no mutation on reload | PASS |
| T4 next-action ownership | PASS |
| T5 explicit PREPARE → R8 action | PASS |
| T6–T8 covered by R8 suite | PASS |
| T9–T12 pure replaceable rules | PASS |
| T13–T17 R3/R4/R6/R7/R8 | PASS |
| T18 tsc | PASS |

---

## 11. Restart A/B/C

- A: wrong generic durable confirmation_required
- B: remount → CTA visible, no Cancel
- C: after PREPARE (R8) successor current / idempotent (R8 T10)

---

## 12. ZERO REAL / Attempt / target

Attempt=1 · target ABSENT · REAL=0 · budget remaining=1 · wrong EC still confirmation_required until Pilot PREPARE

---

## 13. Réserves

- Campaign successor not created by this lot (Pilot must reload + click)
- Inspect still available as secondary (non-primary) for transparency

---

## 14. Gate suivant

Pilot reload → CTA recovery → clic PREPARE → inspect successor → Confirmation/authority → ONE FRESH CURSOR REAL (Morris GO, unconsumed)

---

## 15. Claims

**Autorisés:** restart recovery CTA deterministically proven · wrong generic preserved until explicit PREPARE · R8 PREPARE reachable after restart · ZERO REAL

**Interdits:** campaign successor already created · retry executed · REAL PASS · READY · runtime v3 ADOPTED

---

## 16. Verdict unique

**RECOVERY CTA RUNTIME PRECEDENCE FIXED — READY FOR PILOT PREPARE**
