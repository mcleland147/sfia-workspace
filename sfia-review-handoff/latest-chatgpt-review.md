# RECOVERY-OWNERSHIP-PRESTART-FAILURE-01 — CORR-01 FULL Review Pack
## Absolute fail-closed + restart continuity
## Cycle 8 — Delivery / implémentation · CRITICAL

Generated: 2026-09-26T11:27:15Z
Macro: RECOVERY-OWNERSHIP-PRESTART-FAILURE-01
Correction: CORR-01 — ABSOLUTE FAIL-CLOSED + RESTART CONTINUITY
Cycle: 8 — Delivery / implémentation
Profile: CRITICAL
Morris GO: construction GO remains consumed; CORR-01 in authorized scope.
Project commit/push/PR/merge: **NOT performed / NOT authorized**

---

## 1. GIT TRUTH

| Field | Value |
|-------|-------|
| Branch | `feat/sfia-studio-recovery-ownership-prestart-failure-01` |
| HEAD / origin/main | `7c184b9444d0b3f2dadc62e7ae9e9178e2c5c17d` |
| Main moved | NO |
| Unrelated Product dirt | NONE |
| Project commit | **NONE** — LOCAL / NOT COMMITTED / NOT PUSHED |

Prior handoff (pre-CORR): commit `e250fc37…` / blob `8c816980…`

---

## 2. C1 ROOT CAUSE

Post-macro routing blocked generic PREPARE only for:
- binding present, OR
- `recoveryContextPresent===true`, OR
- `ok===false` **and** code === `DURABLE_EXECUTION_BINDING_INSUFFICIENT`

All other `ok===false` codes (EPISTEMIC_READ_FAILED, OA_STACK_UNAVAILABLE, …) and malformed/undefined results **fell through to generic RC-06 PREPARE**.

Principle violated: **UNKNOWN ≠ ABSENT**.

---

## 3. C1 ABSOLUTE FAIL-CLOSED ROUTING

Generic `w2PrepareExecutionContractAction` is authorized **ONLY** when:

```
bindingResult is object
AND bindingResult.ok === true
AND bindingResult.binding === null
AND bindingResult.recoveryContextPresent === false
```

Ordered stops before PREPARE:

1. invalid / missing / non-object result → bounded error → return
2. `ok === false` (any code) → `result.message` → return
3. `binding.kind === post_evidence_recovery_execution` → setRecoveryBinding → return
4. `recoveryContextPresent === true && binding === null` → fail-closed → return
5. ONLY explicit no-recovery triple → RC-06 generic PREPARE

Removed code-specific exception for `DURABLE_EXECUTION_BINDING_INSUFFICIENT`.

Also hardened the restart `loadBinding` effect against malformed results (no unhandled rejection).

---

## 4. C1 TESTS PROVING READ-ERROR PATHS BLOCK PREPARE

| ID | Mock result | Assertion |
|----|-------------|-----------|
| C1-A | `ok:false` / `EPISTEMIC_READ_FAILED` / context=false | HD visible · error · **prepareContractMock NOT called** · no EC |
| C1-B | `ok:false` / `OA_STACK_UNAVAILABLE` / context=false | same |
| C1-C | `undefined` malformed | same · UNKNOWN≠absent copy |
| PRESTART-01 | `ok:true` / binding=null / context=true | fail-closed · no PREPARE |
| R8 | binding present | recovery path · no generic PREPARE |
| RC-06 | `ok:true` / binding=null / context=false | **generic PREPARE still works** |

---

## 5. C2 RESTART ANALYSIS

Gap: after recovery GOVERNED HumanDecision and **before** successor PREPARE, there is no pre-execution EC. `readCurrentGovernedExecutionContinuity` returns `kind=none` → `continuityDecisionRef=null` → remount lost the recovery HD and could not show recovery CTA.

### Durable source (no new store)

```
current ProjectTrajectory
  → decidedByDecisionRef
  → HumanDecision (accepted)
  → DecisionBasis sourceType=trajectory_option
  → selectedOptionId = GOVERNED_OPTION_REF
  → resolveRecoveryExecutionBinding(decisionId)
```

New helper: `readRecoveryOwnedDecisionContinuity.ts`
Action: `w2ReadRecoveryOwnedDecisionContinuityAction` (projectId only; client no authority)

| Outcome | Meaning |
|---------|---------|
| `kind=none` | tip absent / not GOVERNED / no recovery subject |
| `kind=owned` | decision + trajectory + binding restored |
| `ok=false` | tip claims recovery ownership but cannot reconstruct → **FAIL CLOSED** |

TrajectorySurface: after EC continuity, sequentially awaits recovery-owned continuity so `kind=none` cannot race-erase the tip HD.

Do **not** use historical source EC `decisionRefs` as the recovery HD authority.

---

## 6. C2 HARD-RELOAD PROOF

### Durable Product integration

`CORR-01 C2 — HD then hard reload recovers recovery tip + binding; no successor EC`

Sequence:
1. CLASS 2 confirmed EC + failed pre-start Attempt + Evidence/RB/W3C
2. recovery OptionSet → GOVERNED HD
3. EC count unchanged; no draft/proposed/confirmation_required successor
4. `readRecoveryOwnedDecisionContinuity` → `kind=owned`
5. decisionId = recovery tip · `sourceStatus=confirmed` · binding present

### UI remount

`CORR-01 C2 — hard remount recovers recovery HD + binding; no OptionSet / no auto-PREPARE`

- recovery CTA visible
- decision restored
- no OptionSet re-decide
- prepareContractMock / prepareRecoveryDocsWriteMock **NOT** called

---

## 7. NO SEMANTIC REGRESSION

| Class | Status |
|-------|--------|
| CLASS 1 EC failed | preserved |
| CLASS 2 EC confirmed + pre-start failed Attempt | preserved |
| `sourceStatus` honest confirmed/failed | preserved |
| StartExecution / StatusWriter | **untouched** |
| StudyFlow data / managed clone | **NOT MUTATED** |

Optional REAL_WORKSPACE_INVALID StartExecution via RealExecutionLaunchPort: **deferred** (existing TestExecutionAdapter reject + StudyFlow-equiv stopReason already cover semantics; M4 REAL harness not cheap without widening).

---

## 8. FILES MODIFIED (CORR-01 delta + retained macro)

### Runtime NEW
- `w2/isConfirmedPreStartRejectionRecoverySource.ts` (macro)
- `w2/readRecoveryOwnedDecisionContinuity.ts` (**CORR-01 C2**)

### Runtime ADAPT
- `w2/resolveRecoveryExecutionBinding.ts` (macro CLASS 2 + recoveryContextPresent)
- `w2/actions.ts` (binding action + recovery-owned continuity action)
- `TrajectorySurface.tsx` (absolute fail-closed + C2 rehydrate)

### Tests
- `recoveryOwnership.prestartFailure.d0.test.ts`
- `recoveryOwnership.prestartFailure.integration.d0.test.ts` (+ C2 durable)
- `trajectorySurface.ui.test.tsx` (PRESTART-01 + C1 A/B/C + C2 remount)
- UI mock seams for new action (postExecution / automaticResume / preCycle / productJourney)
- `importBoundaries.test.ts` allowlist entry

---

## 9. TARGETED VALIDATION

5 files · **77 passed** (unit 11 + integration 5 + R8 6 + UI incl. CORR-01)

Covers: CLASS 1 · CLASS 2 · StudyFlow-equiv · known recovery ± binding · read ERROR · OA unavailable · malformed · RC-06 no-recovery · HD hard reload · binding after reload · zero auto successor PREPARE.

---

## 10. FULL VALIDATION

| Gate | Result |
|------|--------|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| Vitest | **428 files passed \| 17 skipped · 4728 tests passed \| 137 skipped · 0 failed** |
| Modeled governance | **73 pass / 0 fail** |

Pre-CORR baseline: 428 / 4723. Delta ≈ +5 tests.

---

## 11. FAKE / REAL

| Boundary | Mode |
|----------|------|
| Launch adapter reject / seeded Attempt facts | DETERMINISTIC FAKE |
| StartExecution / Recovery binding / Continuity / UI routing | REAL Product logic |

NOT claimed: Cursor REAL · docs_write REAL · StudyFlow natural HD · E2E REAL · managed clone · runtime v3 ADOPTED · GO REAL.

---

## 12. RESERVES / DEBT / EXIT

1. Natural StudyFlow HD triangle — post ChatGPT + Morris commit/push/PR/merge only
2. Managed clone / `base_head_sha_missing` root cause — out of scope
3. Optional RealExecutionLaunchPort REAL_WORKSPACE_INVALID StartExecution proof — deferred
4. Successor recovery PREPARE remains explicit separate action

---

## 13. ANTI-CLAIMS

Do NOT claim: StudyFlow natural HD completed · StudyFlow E2E REAL · Cursor REAL proven · docs_write REAL proven · managed clone fixed · runtime v3 ADOPTED · Product globally READY · PR ready · merge ready.

---

## 14. FINAL VERDICT

**RECOVERY OWNERSHIP PRE-START FAILURE CORR-01 —
ABSOLUTE FAIL-CLOSED + RESTART CONTINUITY DETERMINISTICALLY PROVEN /
READY FOR CHATGPT RE-REVIEW**

Project Git: LOCAL / NOT COMMITTED / NOT PUSHED

---

## 15. EXPLOITABLE DIFFS

### 15.1 NEW — readRecoveryOwnedDecisionContinuity.ts

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts b/projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts
new file mode 100644
index 00000000..301b580e
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts
@@ -0,0 +1,193 @@
+/**
+ * CORR-01 / C2 — recover recovery-owned HumanDecision after hard UI restart.
+ *
+ * Durable source (no new store):
+ *   current ProjectTrajectory
+ *   → decidedByDecisionRef
+ *   → HumanDecision (accepted)
+ *   → DecisionBasis trajectory_option
+ *   → selectedOptionId = GOVERNED_OPTION_REF
+ *   → RecoveryExecutionBinding
+ *
+ * The recovery HD (trajectory tip) is the authority — never the historical
+ * source EC decisionRefs. Client must not invent decision authority.
+ *
+ * READ-ONLY. Never PREPARE / Inspect / Execute.
+ */
+
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import { GOVERNED_OPTION_REF } from "./trajectoryOptions";
+import {
+  resolveRecoveryExecutionBinding,
+  type RecoveryExecutionBinding,
+} from "./resolveRecoveryExecutionBinding";
+import type {
+  DecidedTrajectoryDto,
+  TrajectoryDecisionRecordDto,
+  W2Failure,
+} from "./types";
+
+export type RecoveryOwnedDecisionContinuityResult =
+  | {
+      readonly ok: true;
+      readonly kind: "none";
+    }
+  | {
+      readonly ok: true;
+      readonly kind: "owned";
+      readonly decision: TrajectoryDecisionRecordDto;
+      readonly trajectory: DecidedTrajectoryDto;
+      readonly binding: RecoveryExecutionBinding;
+    }
+  | W2Failure;
+
+function fail(code: string, message: string): W2Failure {
+  return { ok: false, code, message };
+}
+
+function toDecisionDto(input: {
+  readonly decisionId: string;
+  readonly selectedOptionRef: string;
+  readonly capturedAt: string;
+  readonly reservesText: string | null;
+}): TrajectoryDecisionRecordDto {
+  return {
+    decisionId: input.decisionId,
+    selectedOptionRef: input.selectedOptionRef,
+    actorRole: "Pilote",
+    authorityClass: "morris",
+    statusLabel: "DÉCISION HUMAINE PRISE",
+    capturedAt: input.capturedAt,
+    decisionBasisLinked: true,
+    reservesText: input.reservesText,
+    proposalId: null,
+  };
+}
+
+/**
+ * Resolve whether the current ProjectTrajectory tip is a recovery-owned
+ * GOVERNED HumanDecision with a coherent RecoveryExecutionBinding.
+ */
+export async function readRecoveryOwnedDecisionContinuity(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+}): Promise<RecoveryOwnedDecisionContinuityResult> {
+  const { oa, projectId } = input;
+  if (!projectId.startsWith("prj:")) {
+    return fail(
+      "CONTRACT_INVALID",
+      "Identifiant de projet invalide — continuité recovery refusée.",
+    );
+  }
+
+  const current = await oa.cycleServices.getCurrentTrajectory.execute({
+    projectId,
+  });
+  if (!current.ok) {
+    return fail(
+      current.error.detailCode,
+      current.error.message ??
+        "Lecture de la trajectoire courante impossible — continuité recovery refusée.",
+    );
+  }
+
+  const trajectory = current.trajectory;
+  const decisionRef = trajectory.decidedByDecisionRef?.trim() || null;
+  if (!decisionRef) {
+    return { ok: true, kind: "none" };
+  }
+
+  const loaded = await oa.decisionServices.getHumanDecision.execute({
+    decisionId: decisionRef,
+  });
+  if (!loaded.ok) {
+    return fail(
+      "RECOVERY_DECISION_CONTINUITY_FAILED",
+      "HumanDecision recovery tip introuvable — fail-closed (pas de PREPARE générique, pas de nouvelle décision).",
+    );
+  }
+  const decision = loaded.decision;
+  if (decision.projectId !== projectId) {
+    return fail(
+      "RECOVERY_DECISION_CONTINUITY_FAILED",
+      "HumanDecision tip hors projet — continuité recovery refusée.",
+    );
+  }
+  if (decision.status !== "accepted") {
+    return fail(
+      "RECOVERY_DECISION_CONTINUITY_FAILED",
+      "HumanDecision tip non effective — continuité recovery refusée.",
+    );
+  }
+  const basis = decision.decisionBasis;
+  if (!basis || basis.sourceType !== "trajectory_option") {
+    // Tip exists but is not a ProjectTrajectory option decision — not recovery-owned.
+    return { ok: true, kind: "none" };
+  }
+  if (decision.selectedOptionId !== GOVERNED_OPTION_REF) {
+    // Tip is a non-GOVERNED trajectory decision — not recovery-owned restart path.
+    return { ok: true, kind: "none" };
+  }
+
+  const bound = await resolveRecoveryExecutionBinding({
+    oa,
+    projectId,
+    decisionId: decision.decisionId,
+  });
+  if (!bound.ok) {
+    return fail(
+      bound.code,
+      bound.message ||
+        "Binding recovery illisible pour la HumanDecision tip — fail-closed.",
+    );
+  }
+  if (bound.recoveryContextPresent !== true) {
+    // GOVERNED tip without a coherent post-Evidence recovery subject —
+    // not the recovery-owned restart path (RC-06 / other GOVERNED contexts).
+    return { ok: true, kind: "none" };
+  }
+  if (
+    !bound.binding ||
+    bound.binding.kind !== "post_evidence_recovery_execution"
+  ) {
+    return fail(
+      "RECOVERY_DECISION_CONTINUITY_FAILED",
+      "Sujet recovery connu mais binding non résolu après restart — fail-closed (pas de PREPARE générique).",
+    );
+  }
+
+  const status =
+    trajectory.status === "active" || trajectory.status === "validated"
+      ? trajectory.status
+      : null;
+  if (!status) {
+    return fail(
+      "RECOVERY_DECISION_CONTINUITY_FAILED",
+      "Trajectoire tip recovery hors statut décidé/courant — continuité refusée.",
+    );
+  }
+
+  return {
+    ok: true,
+    kind: "owned",
+    decision: toDecisionDto({
+      decisionId: decision.decisionId,
+      selectedOptionRef: GOVERNED_OPTION_REF,
+      capturedAt: decision.effectiveAt,
+      reservesText:
+        decision.reservations && decision.reservations.length > 0
+          ? decision.reservations.map((r) => r.statement).join("; ")
+          : null,
+    }),
+    trajectory: {
+      trajectoryId: trajectory.trajectoryId,
+      version: trajectory.version,
+      status,
+      statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
+      isCurrent: true,
+      decidedByDecisionRef: decision.decisionId,
+      decidedOptionRef: GOVERNED_OPTION_REF,
+    },
+    binding: bound.binding,
+  };
+}

### 15.2 MODIFIED — TrajectorySurface + actions (absolute fail-closed + C2 wire + action)

diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index a6163704..3bcfa889 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -40,6 +40,7 @@ import {
   w2ReadActiveDecisionSubjectAction,
   w2ReadCurrentGovernedExecutionContinuityAction,
   w2ReadRecoveryExecutionBindingAction,
+  w2ReadRecoveryOwnedDecisionContinuityAction,
   w2RehydrateProductOutcomeAction,
   w2RematerializeDocsWriteEvidenceAction,
 } from "@/features/project-assistant/w2/actions";
@@ -704,6 +705,45 @@ export function TrajectorySurface({
     setExecutionContinuityReadStatus("ready");
   }, [projectId, pendingReinstruction, optionSet, decision]);

+  /**
+   * CORR-01 / C2 — after hard reload, recover recovery-owned GOVERNED HD +
+   * RecoveryExecutionBinding from durable ProjectTrajectory tip. No new store.
+   * Fail-closed when tip claims recovery ownership but cannot be reconstructed.
+   */
+  const rehydrateRecoveryOwnedDecisionContinuity = useCallback(async () => {
+    // In-session non-GOVERNED decision owns the surface — do not overwrite.
+    if (
+      decision != null &&
+      decision.selectedOptionRef !== GOVERNED_OPTION_REF
+    ) {
+      return;
+    }
+    const result = await w2ReadRecoveryOwnedDecisionContinuityAction({
+      projectId,
+    });
+    if (!result || typeof result !== "object") {
+      setError(
+        "Continuité recovery indisponible après restart — fail-closed (UNKNOWN ≠ absent).",
+      );
+      return;
+    }
+    if (!result.ok) {
+      setError(result.message);
+      return;
+    }
+    if (result.kind === "none") {
+      return;
+    }
+    // Recovery-owned: restore HD + binding; do not re-present OptionSet / auto-PREPARE.
+    setContinuityDecisionRef(result.decision.decisionId);
+    setDecision(result.decision);
+    setDecided(result.trajectory);
+    setRecoveryBinding(result.binding);
+    setOptionSet(null);
+    setPendingReinstruction(null);
+    setError(null);
+  }, [projectId, decision]);
+
   const refreshPreCycleCandidate = useCallback(async () => {
     const result = await projectAssistantReadPreCycleCandidateTrajectoryAction({
       projectId,
@@ -889,8 +929,17 @@ export function TrajectorySurface({
       setExecutionContinuityReadStatus("error");
       return;
     }
-    void rehydrateGovernedExecutionContinuity();
-  }, [subjectReadStatus, rehydrateGovernedExecutionContinuity]);
+    // CORR-01 / C2 — run recovery-owned continuity AFTER EC continuity so a
+    // kind=none clear of continuityDecisionRef cannot race-erase the tip HD.
+    void (async () => {
+      await rehydrateGovernedExecutionContinuity();
+      await rehydrateRecoveryOwnedDecisionContinuity();
+    })();
+  }, [
+    subjectReadStatus,
+    rehydrateGovernedExecutionContinuity,
+    rehydrateRecoveryOwnedDecisionContinuity,
+  ]);

   /** FR-04 — inspect a freshly prepared contract without waiting for another Pilot click. */
   const inspectPreparedContractId = useCallback(
@@ -1022,21 +1071,49 @@ export function TrajectorySurface({
       }

       if (shouldAutoPrepareGoverned) {
-        // Same-scope Relancer owns when RecoveryExecutionBinding is present —
-        // do not W2-PREPARE (R8). Structural recovery (no binding) → RC-06.
+        // CORR-01 — absolute fail-closed. Generic RC-06 PREPARE is authorized
+        // ONLY when: ok=true AND binding=null AND recoveryContextPresent=false.
+        // UNKNOWN ≠ ABSENT — every other read outcome STOPs before PREPARE.
         const bindingResult = await w2ReadRecoveryExecutionBindingAction({
           projectId,
           decisionId: next.decisionId,
         });
+        if (!bindingResult || typeof bindingResult !== "object") {
+          setBusy(null);
+          setError(
+            "Lecture binding recovery indisponible — préparation générique refusée (UNKNOWN ≠ absent).",
+          );
+          return;
+        }
+        if (bindingResult.ok === false) {
+          setBusy(null);
+          setError(bindingResult.message);
+          return;
+        }
         if (
-          bindingResult &&
-          typeof bindingResult === "object" &&
-          bindingResult.ok &&
           bindingResult.binding?.kind === "post_evidence_recovery_execution"
         ) {
           setRecoveryBinding(bindingResult.binding);
           return;
         }
+        if (bindingResult.recoveryContextPresent === true) {
+          setBusy(null);
+          setError(
+            "Binding recovery indisponible pour ce sujet post-Evidence — préparation générique refusée. Action Pilote requise (ne pas PREPARE générique).",
+          );
+          return;
+        }
+        const explicitNoRecovery =
+          bindingResult.ok === true &&
+          bindingResult.binding === null &&
+          bindingResult.recoveryContextPresent === false;
+        if (!explicitNoRecovery) {
+          setBusy(null);
+          setError(
+            "État binding recovery non autoritatif — préparation générique refusée (UNKNOWN ≠ absent).",
+          );
+          return;
+        }
         setBusy("contract");
         setError(null);
         const preparedResult = await w2PrepareExecutionContractAction({
@@ -1122,6 +1199,10 @@ export function TrajectorySurface({
         decisionId,
       });
       if (cancelled) return;
+      if (!result || typeof result !== "object") {
+        setRecoveryBinding(null);
+        return;
+      }
       if (result.ok) {
         setRecoveryBinding(result.binding);
       } else {
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index ff92d001..dcb6acc8 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -42,6 +42,10 @@ import { readCurrentGovernedExecutionContinuity } from "./readCurrentGovernedExe
 import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
 import { prepareDocsWriteRecoverySuccessorFromDecision } from "./prepareDocsWriteRecoverySuccessor";
 import { resolveRecoveryExecutionBinding } from "./resolveRecoveryExecutionBinding";
+import {
+  readRecoveryOwnedDecisionContinuity,
+  type RecoveryOwnedDecisionContinuityResult,
+} from "./readRecoveryOwnedDecisionContinuity";
 import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
 import { readW2ProjectHistory } from "./projectHistory";
 import { resolveW2QualificationInputs } from "./qualificationInputs";
@@ -172,6 +176,23 @@ export async function w2ReadCurrentGovernedExecutionContinuityAction(input: {
   });
 }

+/**
+ * CORR-01 / C2 — restart continuity for recovery-owned GOVERNED HumanDecision.
+ * Reconstructs decision + RecoveryExecutionBinding from durable trajectory tip.
+ * READ-ONLY. Client sends projectId only.
+ */
+export async function w2ReadRecoveryOwnedDecisionContinuityAction(input: {
+  projectId: string;
+}): Promise<RecoveryOwnedDecisionContinuityResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+
+  return readRecoveryOwnedDecisionContinuity({
+    oa: runtime.oa,
+    projectId: input.projectId,
+  });
+}
+
 export async function w2DecideTrajectoryAction(input: {
   projectId: string;
   optionSetRef: string;
@@ -406,16 +427,29 @@ export async function w2PrepareExecutionContractAction(input: {
 /**
  * R8 — read RecoveryExecutionBinding for UI (docs_write recovery CTA).
  * Client sends only projectId + optional decisionId. No path/op injection.
+ * Also reports recoveryContextPresent so UI can fail-closed when a known
+ * recovery subject exists but binding cannot be constructed (no generic PREPARE).
  */
 export async function w2ReadRecoveryExecutionBindingAction(input: {
   projectId: string;
   decisionId?: string | null;
 }): Promise<
-  | { readonly ok: true; readonly binding: RecoveryExecutionBinding | null }
-  | { readonly ok: false; readonly code: string; readonly message: string }
+  | {
+      readonly ok: true;
+      readonly binding: RecoveryExecutionBinding | null;
+      readonly recoveryContextPresent: boolean;
+    }
+  | {
+      readonly ok: false;
+      readonly code: string;
+      readonly message: string;
+      readonly recoveryContextPresent: boolean;
+    }
 > {
   const runtime = getRuntimeApplicationService();
-  if (!runtime.oa) return OA_UNAVAILABLE;
+  if (!runtime.oa) {
+    return { ...OA_UNAVAILABLE, recoveryContextPresent: false };
+  }
   return resolveRecoveryExecutionBinding({
     oa: runtime.oa,
     projectId: input.projectId,

### 15.3 NEW — isConfirmedPreStartRejectionRecoverySource.ts (macro retained)

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/isConfirmedPreStartRejectionRecoverySource.ts b/projects/sfia-studio/app/features/project-assistant/w2/isConfirmedPreStartRejectionRecoverySource.ts
new file mode 100644
index 00000000..95c0637f
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/isConfirmedPreStartRejectionRecoverySource.ts
@@ -0,0 +1,67 @@
+/**
+ * CLASS 2 recovery source — confirmed EC + deterministic pre-start Attempt failure.
+ *
+ * StartExecution intentionally keeps EC `confirmed` on deterministic launch
+ * rejection (retry-eligible) while marking Attempt `failed`. Recovery ownership
+ * must recognize this without rewriting EC → failed.
+ *
+ * Narrow: does NOT treat every confirmed EC as recoverable.
+ */
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
+
+/**
+ * StopReason families produced by StartExecution when a launch is refused
+ * before acknowledgement / running, while EC remains confirmed.
+ */
+export function isDeterministicPreStartLaunchRejectionStopReason(
+  stopReason: string | null | undefined,
+): boolean {
+  if (typeof stopReason !== "string") return false;
+  const s = stopReason.trim();
+  if (s.length === 0) return false;
+  // Non-REAL adapter reject path (failLaunch cause=reject).
+  if (/^EXECUTION_LAUNCH_FAILED:\s*reject:/i.test(s)) return true;
+  // REAL pre-start deterministic rejects (failRealLaunch with non-indeterminate
+  // detailCode → EC stays confirmed). stopReason is always prefixed
+  // REAL_LAUNCH_FAILED: even when detailCode is REAL_WORKSPACE_INVALID etc.
+  if (/^REAL_LAUNCH_FAILED:\s*REAL_WORKSPACE_INVALID\b/i.test(s)) return true;
+  if (/^REAL_LAUNCH_FAILED:\s*REAL_BOUNDARY_DISABLED\b/i.test(s)) return true;
+  if (/^REAL_LAUNCH_FAILED:\s*REAL_AGENT_PROFILE_INVALID\b/i.test(s)) return true;
+  return false;
+}
+
+/**
+ * Whether a confirmed EC + failed Attempt is an admissible CLASS 2 recovery source.
+ */
+export function isConfirmedPreStartRejectionRecoverySource(input: {
+  readonly contract: ExecutionContract;
+  readonly attempt: ExecutionAttempt;
+}): boolean {
+  const { contract, attempt } = input;
+  if (contract.status !== "confirmed") return false;
+  if (attempt.status !== "failed") return false;
+  if (attempt.executionContractId !== contract.executionContractId) return false;
+
+  // Attempt must cohere with a version of this contract (not a future OCC tip).
+  if (
+    typeof attempt.executionContractVersion !== "number" ||
+    attempt.executionContractVersion < 1 ||
+    attempt.executionContractVersion > contract.version
+  ) {
+    return false;
+  }
+
+  // Did not reach running / acknowledged business execution.
+  if (typeof attempt.startedAt === "string" && attempt.startedAt.trim()) {
+    return false;
+  }
+  if (typeof attempt.launchedAt === "string" && attempt.launchedAt.trim()) {
+    return false;
+  }
+
+  if (attempt.irreversibleEffectsPossible === true) return false;
+  if (attempt.processDiagnostic?.realProcessInvoked === true) return false;
+
+  return isDeterministicPreStartLaunchRejectionStopReason(attempt.stopReason);
+}
