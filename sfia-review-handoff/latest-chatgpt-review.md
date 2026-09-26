# RECOVERY-OWNERSHIP-PRESTART-FAILURE-01 — FULL Review Pack
## Cycle 8 — Delivery / implémentation
## CRITICAL — Cursor → ChatGPT

Generated: 2026-09-26T11:11:44Z
Macro: RECOVERY-OWNERSHIP-PRESTART-FAILURE-01
Cycle: 8 — Delivery / implémentation
Profile: CRITICAL
Morris GO consumed: **GO — RECOVERY-OWNERSHIP-PRESTART-FAILURE-01 LOCAL CONSTRUCTION + DETERMINISTIC PROOF**

Authorized: local feature branch · bounded Product fix · deterministic tests · full gate · Review Pack FULL · L3 handoff publish-in-cycle
NOT authorized / NOT performed: StudyFlow mutation · HumanDecision click · PREPARE · Inspect/Authorize/Execute · managed clone · Cursor REAL · OpenAI LIVE · docs_write REAL · project commit/push/PR/merge · doctrine/roadmap · runtime v3 promotion

---

## 1. GIT TRUTH

| Field | Value |
|-------|-------|
| Repository | mcleland147/sfia-workspace |
| Branch | `feat/sfia-studio-recovery-ownership-prestart-failure-01` |
| HEAD | `7c184b9444d0b3f2dadc62e7ae9e9178e2c5c17d` |
| origin/main | `7c184b9444d0b3f2dadc62e7ae9e9178e2c5c17d` |
| Main moved | NO |
| Project commit | **NONE** (LOCAL / NOT COMMITTED / NOT PUSHED) |
| Staged | empty |
| Product dirty (uncommitted) | runtime + tests listed in §Files Modified |
| Unrelated Product changes | NONE (only this macro + prior `.tmp-sfia-review/**`) |

Read-only preflight handoff tip (prior cycle, unchanged StudyFlow facts):
- commit `19ee15853d6426d16e839b8c043a7a3812b32df7`
- blob `b6b93e787c2f9f7a46a343f145fdab9929cd9fda`

---

## 2. CONVERGENCE / SOURCES CONSULTED (read-only)

Process: `prompts/templates/sfia-cycle-execution-template.md`, routing/operating-model/rules/validation checklist.
Convergence: `sfia-studio-convergence-build-doctrine.md`, roadmap, `01-product-completion-cadrage.md`.
v3 framing: 32 / 34 / 35 (Living Project State · execution governance · evidence).
Runtime: TrajectorySurface, w2 actions/resolvers, StartExecution + ExecutionContractStatusWriter (read-only).
Natural evidence: StudyFlow `prj:34e7351c-770c-474a-8edc-9c82a07be41d` (read-only preflight only).

---

## 3. NATURAL STUDYFLOW OBSERVATION (unchanged — no mutation)

| Fact | Value |
|------|-------|
| Project | `prj:34e7351c-770c-474a-8edc-9c82a07be41d` |
| LPS | v36 · active Cadrage |
| EC | `xct:m3-res:dec:w2-prop:0d65e1cd-b259-4222-860b-a783a01bf4c0` · **status=confirmed** · v3 |
| Attempt | `xat:w3a:0a9d88215cf8f884` · **status=failed** |
| stopReason | `REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:base_head_sha_missing` |
| PostEvidenceRecoveryContext | **PRESENT** |
| RecoveryExecutionBinding (pre-fix) | **NULL** solely because `EC.status !== failed` |
| HumanDecision (new) | none yet |
| Recommendation | governed retry (Nora + Studio aligned) |

**StudyFlow Mutation this cycle: NONE**
**Managed Clone: NOT MUTATED**

---

## 4. CURRENT STATE-MACHINE EXPLANATION

`StartExecution` distinguishes:

| Class | Launch outcome | Attempt | EC |
|-------|----------------|---------|-----|
| A — indeterminate | launch failure after boundary ambiguity | failed | **failed** |
| B — deterministic pre-start reject | reject before ack/running (`REAL_WORKSPACE_INVALID`, adapter `reject`, …) | failed | **remains confirmed** (retry-eligible) |

StudyFlow ∈ **B**.

`resolveRecoveryExecutionBinding` previously accepted only Class A (`contract.status === "failed"`), so Class B produced RecoveryContext PRESENT + binding NULL → UI fell through to generic `w2PrepareExecutionContractAction` after HumanDecision.

---

## 5. EXACT ROOT CAUSE

**NEW SEMANTIC GAP — RECOVERY OWNERSHIP DOES NOT COVER DETERMINISTIC PRE-START FAILURE**

Narrow condition `EC.status !== "failed" → binding null` was too strict relative to StartExecution's intentional confirmed-on-deterministic-reject semantics.

Associated proof gap: prior recovery ownership integration forced source EC → failed rather than reproducing Class B.

---

## 6. CONFIRMED-PRESTART QUALIFICATION RULE (CLASS 2)

New pure helper:
`projects/sfia-studio/app/features/project-assistant/w2/isConfirmedPreStartRejectionRecoverySource.ts`

Eligible iff ALL:

1. `contract.status === "confirmed"`
2. `attempt.status === "failed"`
3. `attempt.executionContractId === contract.executionContractId`
4. `1 ≤ attempt.executionContractVersion ≤ contract.version`
5. no `startedAt` / no `launchedAt`
6. `irreversibleEffectsPossible !== true`
7. `processDiagnostic.realProcessInvoked !== true`
8. stopReason matches deterministic pre-start launch rejection families:
   - `EXECUTION_LAUNCH_FAILED: reject:…`
   - `REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID…` (StudyFlow)
   - `REAL_LAUNCH_FAILED: REAL_BOUNDARY_DISABLED…`
   - `REAL_LAUNCH_FAILED: REAL_AGENT_PROFILE_INVALID…`

**Explicit non-assumption:** a stopReason prefix `REAL_` ≠ real process invoked ≠ business effect.
Classifier prefers Attempt durable facts over coarse RecoveryContext inference.
`resolvePostEvidenceRecoveryContext` left unchanged (no scope widen).

---

## 7. RECOVERY SOURCE CLASSIFICATION

| Class | Source EC | Attempt | Binding |
|-------|-----------|---------|---------|
| CLASS 1 (legacy) | failed | coherent failed post-Evidence | eligible (preserved) |
| CLASS 2 (new) | confirmed | failed pre-start per helper | eligible; `sourceStatus` stays **confirmed** |
| other | completed/cancelled/superseded/executing or ambiguous confirmed | — | binding null / fail-closed |

Do **not** mutate confirmed → failed to enter recovery.

---

## 8. RecoveryExecutionBinding

`resolveRecoveryExecutionBinding`:

- CLASS 1 path preserved
- CLASS 2 gated by `isConfirmedPreStartRejectionRecoverySource`
- returns `recoveryContextPresent: boolean` on every outcome
- binding still `kind=post_evidence_recovery_execution` with honest `sourceStatus`

StudyFlow-equivalent deterministic proof: binding PRESENT with `sourceStatus=confirmed`.

---

## 9. UI RECOVERY ROUTING / GENERIC FALLBACK GUARD

`TrajectorySurface` governed HumanDecision (`shouldAutoPrepareGoverned`):

| Case | Behavior |
|------|----------|
| A — no recovery subject (`recoveryContextPresent=false`, binding null) | RC-06 generic auto-PREPARE preserved |
| B — binding present (`post_evidence_recovery_execution`) | recovery-owned path · STOP · no generic PREPARE |
| C — recovery subject present + binding unresolved | **fail-closed** error · **NO** generic auto-PREPARE |

`w2ReadRecoveryExecutionBindingAction` exposes `recoveryContextPresent`.

HumanDecision semantics preserved: Recommendation ≠ Decision; HD records + trajectory promote + binding resolve; **no** successor auto-PREPARE / Inspect / Authorize / Execute.

---

## 10. LEGACY FAILED-EC COMPATIBILITY

CLASS 1 retained. Integration proof `G — CLASS 1 failed-EC recovery path still works`. CheckpointF R8 suite still green (6/6).

---

## 11. TEST REALISM GAP CLOSED

| Before | After |
|--------|-------|
| Success path forced EC → failed | CLASS 2 keeps EC confirmed; StartExecution real reject path proven |
| No fail-closed UI for known recovery | PRESTART-01 UI proof |

New suites:
- `recoveryOwnership.prestartFailure.d0.test.ts` — pure CLASS 2 + negatives A–G (11)
- `recoveryOwnership.prestartFailure.integration.d0.test.ts` — StartExecution reject · StudyFlow-equiv · CLASS 1 · negative startedAt (4)
- UI: PRESTART-01 fail-closed; R8 Case 1 still covers binding-present no-prepare; RC-06 Case 3 preserved

---

## 12. CANONICAL StartExecution PROOF

Deterministic fake boundary only at `TestExecutionAdapter` launch fixture `{ outcome: "reject" }`.
Real application: Select → StartExecution → Attempt persistence + EC status writer.

Expected / proven:
- Attempt.status = failed
- stopReason `EXECUTION_LAUNCH_FAILED: reject:…`
- startedAt undefined
- EC.status remains **confirmed**

---

## 13. FILES MODIFIED

### Runtime (product)

| Path | Change |
|------|--------|
| `…/w2/isConfirmedPreStartRejectionRecoverySource.ts` | **NEW** CLASS 2 helper |
| `…/w2/resolveRecoveryExecutionBinding.ts` | CLASS 1+2 + `recoveryContextPresent` |
| `…/w2/actions.ts` | action result carries `recoveryContextPresent` |
| `…/surfaces/TrajectorySurface.tsx` | known-recovery fail-closed |

### Tests

| Path | Change |
|------|--------|
| `…/recoveryOwnership.prestartFailure.d0.test.ts` | **NEW** |
| `…/recoveryOwnership.prestartFailure.integration.d0.test.ts` | **NEW** |
| `…/trajectorySurface.ui.test.tsx` | PRESTART-01 + mock field |
| `…/postExecutionTrajectorySurface.ui.test.tsx` | mock field |

### Read-only (untouched)

- `startExecution.ts`, `executionContractStatusWriter.ts`
- `resolvePostEvidenceRecoveryContext.ts`
- convergence / product-completion / v3-framing / method / prompts / StudyFlow / campaign DBs

### Architecture KEEP / ADAPT / REJECT

KEEP: StartExecution SM · EC status writer · PostEvidenceRecoveryContext · RecoveryExecutionBinding · HD · ProjectTrajectory · successor prepare · TrajectorySurface · persistence.
ADAPT: confirmed pre-start qualification · binding acceptance · action/result · UI fail-closed · tests.
REJECT: new recovery store · second SM · EC→failed repair · client authority · StudyFlow branching · auto successor PREPARE · new dependency.

---

## 14. TARGETED VALIDATION

| Suite | Result |
|-------|--------|
| `recoveryOwnership.prestartFailure.d0.test.ts` | 11 passed |
| `recoveryOwnership.prestartFailure.integration.d0.test.ts` | 4 passed |
| `checkpointF.recoveryDocsWriteSuccessor.d0.test.ts` | 6 passed |
| `pilotExecutionExperience.recoveryOwnership.integration.d0.test.ts` | included in targeted (legacy) |
| trajectorySurface UI (incl. PRESTART-01, R8, RC-06) | green in 72-test targeted batch |

Required assertions (1–8): all covered.

Targeted batch (5 files / recovery+UI): **72 passed**.

---

## 15. FULL VALIDATION (Required Gate equivalent)

| Gate | Result |
|------|--------|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS (0 warnings/errors) |
| `npm run build` | PASS |
| `npm test` (Vitest) | **428 files passed \| 17 skipped · 4723 tests passed \| 137 skipped · 0 failed** |
| Modeled governance (`node --test` ×3) | **73 pass / 0 fail** |

Baseline before macro: 426 files / 4707 tests.
Delta: +2 files · +16 tests (expected).

---

## 16. FAKE / REAL QUALIFICATION

| Boundary | Mode |
|----------|------|
| RealExecutionLaunchPort / TestExecutionAdapter reject | **DETERMINISTIC FAKE** |
| StartExecution · Attempt · EC status · RecoveryContext · Binding · UI routing | **REAL Product logic** |

Proof level: **DETERMINISTIC RECOVERY OWNERSHIP FOR PRE-START FAILURE PROVEN**

NOT claimed: Cursor REAL · docs_write REAL · StudyFlow natural HD · StudyFlow E2E REAL · runtime v3 ADOPTED · GO REAL.

---

## 17. RESERVES

1. Natural StudyFlow HumanDecision triangle (Nora→Studio→Pilote→Studio/Nora) — **post-merge only**, after ChatGPT review + Morris commit/push/PR/merge gates; expected then: binding PRESENT with `sourceStatus=confirmed` before HD.
2. Managed clone freshness / `base_head_sha_missing` root cause — **separate reserve**; this macro ends before successor PREPARE.
3. Successor recovery PREPARE remains explicit separate action.
4. Broader `REAL_*` stopReason taxonomy beyond listed deterministic families — fail-closed until classified.
5. `resolvePostEvidenceRecoveryContext.realProcessInvoked` coarseness — not silently reused as sole CLASS 2 classifier; left unchanged (no separate structural change this cycle).

---

## 18. DEBT / EXIT

| Item | Status |
|------|--------|
| CLASS 2 recovery ownership | CLOSED (deterministic) |
| UI known-recovery → generic PREPARE | CLOSED (fail-closed) |
| StudyFlow natural HD proof | OPEN — exit after future integration |
| Managed clone / workspace SHA | OPEN — out of scope |
| Runtime v3 promotion | NOT in scope |

---

## 19. FORBIDDEN FILES UNTOUCHED

Confirmed not modified: `convergence/**`, `product-completion/**`, `sfia-v3-framing/**`, `nora-cognitive-completion/**`, `method/**`, `prompts/**`, `.github/**`, `scripts/sfia/**` (except handoff publisher invoked), `.env*`, Product/Nora campaign DBs, StudyFlow managed clone, `projects/studyflow/**`, StartExecution/statusWriter.

No new npm dependency.

---

## 20. ANTI-CLAIMS

Do NOT claim: StudyFlow HD natural proof complete · StudyFlow E2E REAL · Cursor REAL fixed · docs_write REAL proven · managed clone fixed · GO REAL · runtime v3 ADOPTED · Product globally READY · Product Completion complete · Nora Cognitive Completion complete · GAP-15 closed · Roadmap synced · PR ready · merge ready.

---

## 21. FINAL VERDICT

**RECOVERY OWNERSHIP PRE-START FAILURE — DETERMINISTICALLY PROVEN / READY FOR CHATGPT REVIEW**

Meaning:
- real StartExecution reject state machine reproduced;
- EC confirmed retained honestly;
- failed Attempt retained honestly;
- RecoveryExecutionBinding resolves with `sourceStatus=confirmed`;
- known recovery never falls through to generic auto-PREPARE;
- legacy failed-EC path preserved;
- zero StudyFlow mutation;
- full validation green.

Project Git: **LOCAL / NOT COMMITTED / NOT PUSHED**

---

## 22. EXPLOITABLE DIFFS

### 22.1 NEW — isConfirmedPreStartRejectionRecoverySource.ts

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

### 22.2 MODIFIED — resolveRecoveryExecutionBinding / actions / TrajectorySurface / UI mocks+PRESTART-01

diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
index b5d0ffb9..44c3ade4 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
@@ -200,6 +200,7 @@ beforeEach(() => {
   readRecoveryExecutionBindingMock.mockResolvedValue({
     ok: true,
     binding: null,
+    recoveryContextPresent: false,
   });
   readPreCycleMock.mockResolvedValue({
     ok: true,
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 9e433b26..23a81af8 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -151,6 +151,7 @@ beforeEach(() => {
   readRecoveryExecutionBindingMock.mockResolvedValue({
     ok: true,
     binding: null,
+    recoveryContextPresent: false,
   });
   prepareRecoveryDocsWriteMock.mockResolvedValue({
     ok: false,
@@ -482,6 +483,7 @@ describe("W2 TrajectorySurface", () => {
         sourceSemanticFingerprint: null,
         sourceStatus: "failed",
       },
+      recoveryContextPresent: true,
     });

     render(<TrajectorySurface projectId="prj:w2-ui" />);
@@ -504,6 +506,84 @@ describe("W2 TrajectorySurface", () => {
     expect(prepareContractMock).not.toHaveBeenCalled();
   });

+  it("PRESTART-01 — known recovery + binding unresolved → fail-closed (no generic PREPARE)", async () => {
+    proposeMock.mockResolvedValue({
+      ok: true,
+      optionSetRef: "optset:w2-prestart-unresolved",
+      cycleTypeId: "cyc:delivery",
+      recommendedProfile: "Standard",
+      decisionSubjectMode: "project_trajectory",
+      proposalId: null,
+      promotesProjectTrajectory: true,
+      options: [
+        {
+          kind: "OPTION",
+          optionRef: "opt:trajectory:governed-gated",
+          label: "Préparer une nouvelle tentative gouvernée",
+          intent: "Recovery",
+          impacts: [],
+          reservations: [],
+          steps: [],
+        },
+      ],
+      recommendation: {
+        label: "RECOMMANDATION — PAS UNE DÉCISION",
+        recommendedOptionRef: "opt:trajectory:governed-gated",
+        rationale: "Retry gouverné.",
+        isHumanDecision: false,
+        ckcAttribution: false,
+      },
+      epistemicRefs: [],
+      proposedTrajectory: {
+        trajectoryId: "trj:w2-prestart",
+        version: 1,
+        status: "proposed",
+      },
+      phase: "OPTIONS_PROPOSED",
+      autoDecisionPerformed: false,
+      executionPerformed: false,
+      ckcCognitionCompletedBeforeMutation: true,
+    });
+    decideMock.mockResolvedValue({
+      ok: true,
+      decision: {
+        decisionId: "dec:w2-trj:prestart-unresolved",
+        selectedOptionRef: "opt:trajectory:governed-gated",
+        actorRole: "Pilote",
+        authorityClass: "morris",
+        statusLabel: "DÉCISION HUMAINE PRISE",
+        capturedAt: "2026-09-26T12:00:00.000Z",
+        decisionBasisLinked: true,
+        reservesText: null,
+        proposalId: null,
+      },
+      trajectory: { trajectoryId: "trj:w2-prestart", version: 2 },
+      livingProjectStateVersion: 5,
+      executionPerformed: false,
+      promotesProjectTrajectory: true,
+      decisionSubjectMode: "project_trajectory",
+    });
+    readRecoveryExecutionBindingMock.mockResolvedValue({
+      ok: true,
+      binding: null,
+      recoveryContextPresent: true,
+    });
+
+    render(<TrajectorySurface projectId="prj:w2-ui" />);
+    fireEvent.click(await screen.findByTestId("w2-propose-options"));
+    await screen.findByTestId("w2-options");
+    fireEvent.click(
+      screen.getByTestId("w2-decide-opt:trajectory:governed-gated"),
+    );
+    expect(await screen.findByTestId("w2-decision")).toBeVisible();
+    expect(
+      await screen.findByText(/Binding recovery indisponible|préparation générique refusée/i),
+    ).toBeVisible();
+    expect(prepareContractMock).not.toHaveBeenCalled();
+    expect(prepareRecoveryDocsWriteMock).not.toHaveBeenCalled();
+    expect(screen.queryByTestId("w2-recovery-docs-write-prepare")).toBeNull();
+  });
+
   it("RC-05 — before decision options+recommendation primary; after decision history collapsed", async () => {
     proposeMock.mockResolvedValue({
       ok: true,
@@ -822,6 +902,7 @@ describe("W2 TrajectorySurface", () => {
         sourceSemanticFingerprint: null,
         sourceStatus: "failed",
       },
+      recoveryContextPresent: true,
     });

     render(<TrajectorySurface projectId="prj:w2-ui" />);
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index a6163704..f943cdd4 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -1023,7 +1023,8 @@ export function TrajectorySurface({

       if (shouldAutoPrepareGoverned) {
         // Same-scope Relancer owns when RecoveryExecutionBinding is present —
-        // do not W2-PREPARE (R8). Structural recovery (no binding) → RC-06.
+        // do not W2-PREPARE (R8). Known recovery without binding → fail-closed
+        // (never silent generic PREPARE). No recovery subject → RC-06 generic.
         const bindingResult = await w2ReadRecoveryExecutionBindingAction({
           projectId,
           decisionId: next.decisionId,
@@ -1037,6 +1038,22 @@ export function TrajectorySurface({
           setRecoveryBinding(bindingResult.binding);
           return;
         }
+        const knownRecoveryUnresolved =
+          bindingResult &&
+          typeof bindingResult === "object" &&
+          (("recoveryContextPresent" in bindingResult &&
+            bindingResult.recoveryContextPresent === true) ||
+            (bindingResult.ok === false &&
+              bindingResult.code === "DURABLE_EXECUTION_BINDING_INSUFFICIENT"));
+        if (knownRecoveryUnresolved) {
+          setBusy(null);
+          setError(
+            !bindingResult.ok
+              ? bindingResult.message
+              : "Binding recovery indisponible pour ce sujet post-Evidence — préparation générique refusée. Action Pilote requise (ne pas PREPARE générique).",
+          );
+          return;
+        }
         setBusy("contract");
         setError(null);
         const preparedResult = await w2PrepareExecutionContractAction({
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index ff92d001..0f3522d1 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -406,16 +406,29 @@ export async function w2PrepareExecutionContractAction(input: {
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
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts
index 1b89b189..47a6ada4 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts
@@ -14,8 +14,23 @@ import {
   resolvePostEvidenceRecoveryContext,
   type PostEvidenceRecoveryContext,
 } from "./resolvePostEvidenceRecoveryContext";
+import { isConfirmedPreStartRejectionRecoverySource } from "./isConfirmedPreStartRejectionRecoverySource";
 import { GOVERNED_OPTION_REF } from "./trajectoryOptions";

+export type RecoveryExecutionBindingResolution =
+  | {
+      readonly ok: true;
+      readonly binding: RecoveryExecutionBinding | null;
+      /** True when a coherent post-Evidence recovery subject exists. */
+      readonly recoveryContextPresent: boolean;
+    }
+  | {
+      readonly ok: false;
+      readonly code: string;
+      readonly message: string;
+      readonly recoveryContextPresent: boolean;
+    };
+
 export type RecoveryExecutionBinding = {
   readonly kind: "post_evidence_recovery_execution";
   readonly recovery: PostEvidenceRecoveryContext;
@@ -103,19 +118,24 @@ export async function resolveRecoveryExecutionBinding(input: {
    * option (governed-gated). Omit for pure read of recoverable binding.
    */
   readonly decisionId?: string | null;
-}): Promise<
-  | { readonly ok: true; readonly binding: RecoveryExecutionBinding | null }
-  | { readonly ok: false; readonly code: string; readonly message: string }
-> {
+}): Promise<RecoveryExecutionBindingResolution> {
   const recovered = await resolvePostEvidenceRecoveryContext({
     oa: input.oa,
     projectId: input.projectId,
   });
-  if (!recovered.ok) return recovered;
+  if (!recovered.ok) {
+    return {
+      ok: false,
+      code: recovered.code,
+      message: recovered.message,
+      recoveryContextPresent: false,
+    };
+  }
   if (!recovered.context) {
-    return { ok: true, binding: null };
+    return { ok: true, binding: null, recoveryContextPresent: false };
   }
   const recovery = recovered.context;
+  const present = true as const;

   if (input.decisionId) {
     const loaded = await input.oa.decisionServices.getHumanDecision.execute({
@@ -126,6 +146,7 @@ export async function resolveRecoveryExecutionBinding(input: {
         ok: false,
         code: loaded.error.detailCode,
         message: loaded.error.message,
+        recoveryContextPresent: present,
       };
     }
     const decision = loaded.decision;
@@ -134,23 +155,24 @@ export async function resolveRecoveryExecutionBinding(input: {
         ok: false,
         code: "PROJECT_MISMATCH",
         message: "Décision hors projet — binding recovery refusé.",
+        recoveryContextPresent: present,
       };
     }
     if (decision.status !== "accepted") {
-      return { ok: true, binding: null };
+      return { ok: true, binding: null, recoveryContextPresent: present };
     }
     const basis = decision.decisionBasis;
     if (!basis || basis.sourceType !== "trajectory_option") {
-      return { ok: true, binding: null };
+      return { ok: true, binding: null, recoveryContextPresent: present };
     }
     if (decision.selectedOptionId !== GOVERNED_OPTION_REF) {
       // Only "nouvelle tentative gouvernée" activates docs_write successor.
-      return { ok: true, binding: null };
+      return { ok: true, binding: null, recoveryContextPresent: present };
     }
   }

   if (!input.oa.executionContractServices) {
-    return { ok: true, binding: null };
+    return { ok: true, binding: null, recoveryContextPresent: present };
   }

   const loaded =
@@ -158,21 +180,45 @@ export async function resolveRecoveryExecutionBinding(input: {
       executionContractId: recovery.executionContractId,
     });
   if (!loaded.ok) {
-    return { ok: true, binding: null };
+    return { ok: true, binding: null, recoveryContextPresent: present };
   }
   const contract = loaded.contract;
   if (contract.projectId !== input.projectId) {
-    return { ok: true, binding: null };
+    return { ok: true, binding: null, recoveryContextPresent: present };
   }
   if (contract.executionContractId !== recovery.executionContractId) {
-    return { ok: true, binding: null };
+    return { ok: true, binding: null, recoveryContextPresent: present };
   }
-  if (contract.status !== "failed") {
-    // Recovery successor clones a failed EC — other statuses are not this path.
-    return { ok: true, binding: null };
+
+  // CLASS 1: failed EC (legacy). CLASS 2: confirmed EC + pre-start rejection.
+  if (contract.status === "failed") {
+    // existing path
+  } else if (contract.status === "confirmed") {
+    if (!input.oa.executionAttemptServices) {
+      return { ok: true, binding: null, recoveryContextPresent: present };
+    }
+    const attemptLoaded =
+      await input.oa.executionAttemptServices.getExecutionAttempt.execute({
+        attemptId: recovery.attemptId,
+      });
+    if (!attemptLoaded.ok) {
+      return { ok: true, binding: null, recoveryContextPresent: present };
+    }
+    if (
+      !isConfirmedPreStartRejectionRecoverySource({
+        contract,
+        attempt: attemptLoaded.attempt,
+      })
+    ) {
+      return { ok: true, binding: null, recoveryContextPresent: present };
+    }
+  } else {
+    // completed / cancelled / superseded / executing — not a recovery source.
+    return { ok: true, binding: null, recoveryContextPresent: present };
   }
+
   if (!isBoundedDocsWriteContract(contract)) {
-    return { ok: true, binding: null };
+    return { ok: true, binding: null, recoveryContextPresent: present };
   }

   const targetPath = asNonEmptyString(contract.inputs?.targetPath);
@@ -181,11 +227,12 @@ export async function resolveRecoveryExecutionBinding(input: {
       ok: false,
       code: "DURABLE_EXECUTION_BINDING_INSUFFICIENT",
       message:
-        "Failed docs_write EC sans inputs.targetPath durable — binding recovery impossible.",
+        "docs_write EC recovery sans inputs.targetPath durable — binding recovery impossible.",
+      recoveryContextPresent: present,
     };
   }

-  // Attempt ↔ EC coherence already enforced in RecoveryContext.
+  // Attempt ↔ EC coherence already enforced in RecoveryContext (+ CLASS 2 helper).
   const evidenceRequirements = [...(contract.evidenceRequirements ?? [])];
   const constraints = [...(contract.constraints ?? [])];

@@ -211,5 +258,6 @@ export async function resolveRecoveryExecutionBinding(input: {
       sourceSemanticFingerprint: contract.semanticFingerprint ?? null,
       sourceStatus: contract.status,
     },
+    recoveryContextPresent: present,
   };
 }

### 22.3 NEW — recoveryOwnership.prestartFailure.d0.test.ts (complete)

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.prestartFailure.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.prestartFailure.d0.test.ts
new file mode 100644
index 00000000..8047ad20
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.prestartFailure.d0.test.ts
@@ -0,0 +1,184 @@
+/**
+ * RECOVERY-OWNERSHIP-PRESTART-FAILURE-01 — pure CLASS 2 qualification.
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
+import {
+  isConfirmedPreStartRejectionRecoverySource,
+  isDeterministicPreStartLaunchRejectionStopReason,
+} from "@/features/project-assistant/w2/isConfirmedPreStartRejectionRecoverySource";
+
+function baseContract(
+  overrides: Partial<ExecutionContract> = {},
+): ExecutionContract {
+  return {
+    schemaVersion: "0.1.0-oa",
+    executionContractId: "xct:prestart:1",
+    projectId: "prj:prestart",
+    status: "confirmed",
+    version: 3,
+    action: "cursor.docs_write.apply",
+    target: "workspace.isolated.docs_write",
+    scope: "studio.gcec.docs_write",
+    requiredCapabilities: ["cap:cursor.docs_write"],
+    requiredAuthority: "N2",
+    constraints: [],
+    stopConditions: [],
+    evidenceRequirements: [],
+    expectedOutputs: [],
+    reversibility: "reversible",
+    semanticFingerprint: "fp",
+    idempotencyKey: "idem:1",
+    correlationId: "cor:1",
+    createdAt: "2026-09-25T00:00:00.000Z",
+    inputs: { targetPath: "projects/studyflow/01-cadrage/note-de-cadrage.md" },
+    ...overrides,
+  } as ExecutionContract;
+}
+
+function baseAttempt(
+  overrides: Partial<ExecutionAttempt> = {},
+): ExecutionAttempt {
+  return {
+    schemaVersion: "0.2.0-oa",
+    attemptId: "xat:prestart:1",
+    executionContractId: "xct:prestart:1",
+    executionContractVersion: 3,
+    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
+    status: "failed",
+    idempotencyKey: "idem:att:1",
+    correlationId: "cor:att:1",
+    version: 2,
+    createdAt: "2026-09-25T00:00:00.000Z",
+    failedAt: "2026-09-25T00:00:01.000Z",
+    stopReason:
+      "REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:base_head_sha_missing",
+    irreversibleEffectsPossible: false,
+    provenance: {
+      schemaVersion: "0.1.0-oa",
+      provenanceRecordId: "prv:1",
+      actor: {
+        actorId: "act:test",
+        displayName: "t",
+        roles: [],
+      },
+      source: "system",
+      timestamp: "2026-09-25T00:00:01.000Z",
+      correlationId: "cor:att:1",
+    },
+    ...overrides,
+  } as ExecutionAttempt;
+}
+
+describe("CLASS 2 — confirmed pre-start rejection qualification", () => {
+  it("accepts StudyFlow-equivalent stopReason", () => {
+    expect(
+      isDeterministicPreStartLaunchRejectionStopReason(
+        "REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:base_head_sha_missing",
+      ),
+    ).toBe(true);
+  });
+
+  it("accepts adapter reject stopReason", () => {
+    expect(
+      isDeterministicPreStartLaunchRejectionStopReason(
+        "EXECUTION_LAUNCH_FAILED: reject:need_retry",
+      ),
+    ).toBe(true);
+  });
+
+  it("rejects empty / unrelated stopReason", () => {
+    expect(isDeterministicPreStartLaunchRejectionStopReason(null)).toBe(false);
+    expect(
+      isDeterministicPreStartLaunchRejectionStopReason("REAL_PROCESS_NONZERO_EXIT"),
+    ).toBe(false);
+  });
+
+  it("CLASS 2 PASS — confirmed + failed pre-start", () => {
+    expect(
+      isConfirmedPreStartRejectionRecoverySource({
+        contract: baseContract(),
+        attempt: baseAttempt(),
+      }),
+    ).toBe(true);
+  });
+
+  it("A — confirmed + reached running (startedAt) → NOT eligible", () => {
+    expect(
+      isConfirmedPreStartRejectionRecoverySource({
+        contract: baseContract(),
+        attempt: baseAttempt({ startedAt: "2026-09-25T00:00:00.500Z" }),
+      }),
+    ).toBe(false);
+  });
+
+  it("B — confirmed + realProcessInvoked=true → NOT eligible", () => {
+    expect(
+      isConfirmedPreStartRejectionRecoverySource({
+        contract: baseContract(),
+        attempt: baseAttempt({
+          processDiagnostic: {
+            kind: "process_failure_diagnostic",
+            schemaVersion: "0.1.0-oa",
+            processRef: "proc:test",
+            exitCode: 1,
+            timedOut: false,
+            durationMs: 1,
+            stdoutExcerpt: null,
+            stderrExcerpt: "invoked",
+            realProcessInvoked: true,
+            boundaryProofMode: "cursor_real",
+            authoritativeBusinessEvidence: false,
+          } as never,
+        }),
+      }),
+    ).toBe(false);
+  });
+
+  it("C — confirmed + irreversibleEffectsPossible → NOT eligible", () => {
+    expect(
+      isConfirmedPreStartRejectionRecoverySource({
+        contract: baseContract(),
+        attempt: baseAttempt({ irreversibleEffectsPossible: true }),
+      }),
+    ).toBe(false);
+  });
+
+  it("D — confirmed + Attempt for another EC → NOT eligible", () => {
+    expect(
+      isConfirmedPreStartRejectionRecoverySource({
+        contract: baseContract(),
+        attempt: baseAttempt({ executionContractId: "xct:other" }),
+      }),
+    ).toBe(false);
+  });
+
+  it("E — confirmed + non-failed Attempt → NOT eligible", () => {
+    expect(
+      isConfirmedPreStartRejectionRecoverySource({
+        contract: baseContract(),
+        attempt: baseAttempt({ status: "accepted" }),
+      }),
+    ).toBe(false);
+  });
+
+  it("F — completed EC → NOT eligible", () => {
+    expect(
+      isConfirmedPreStartRejectionRecoverySource({
+        contract: baseContract({ status: "completed" }),
+        attempt: baseAttempt(),
+      }),
+    ).toBe(false);
+  });
+
+  it("G — failed EC is not CLASS 2 (handled as CLASS 1 elsewhere)", () => {
+    expect(
+      isConfirmedPreStartRejectionRecoverySource({
+        contract: baseContract({ status: "failed" }),
+        attempt: baseAttempt(),
+      }),
+    ).toBe(false);
+  });
+});

### 22.4 NEW — recoveryOwnership.prestartFailure.integration.d0.test.ts (complete)

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.prestartFailure.integration.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.prestartFailure.integration.d0.test.ts
new file mode 100644
index 00000000..0a8ba411
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.prestartFailure.integration.d0.test.ts
@@ -0,0 +1,540 @@
+/**
+ * RECOVERY-OWNERSHIP-PRESTART-FAILURE-01 — integration.
+ * CLASS 2 StartExecution pre-start reject + binding; CLASS 1 legacy; negatives.
+ * ZERO REAL. ZERO StudyFlow mutation.
+ * @vitest-environment node
+ */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
+import {
+  LOCAL_PILOTE_ACTOR,
+  registerLocalMorrisGateAuthority,
+} from "@/lib/oa/decision";
+import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
+import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
+import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
+import {
+  materializeProductOutcomeFromAttempt,
+  w3bEvidenceIdentity,
+} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
+import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
+import { resolveRecoveryExecutionBinding } from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
+import {
+  serializeW3cRecommendationPayload,
+  w3cRecommendationEpistemicId,
+  type W3cRecommendationPayload,
+} from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
+import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "@/features/project-assistant/f3/systemFactualWriter";
+import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
+import { clearW3bBoundaryArm } from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+  M4_BOUNDED_DOCS_WRITE_TARGET,
+} from "@/lib/oa/execution-attempt";
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  seedQualifiedProject,
+  tempProductDbPath,
+} from "./w2Harness";
+
+const TARGET_PATH =
+  "projects/sfia-studio/.sandbox/prestart-recovery-ownership.md";
+
+async function proposeAndDecideGoverned(oa: RuntimeOaStack, projectId: string) {
+  const qualification = await resolveW2QualificationInputs({ oa, projectId });
+  if (!qualification.ok) throw new Error("qual");
+  const proposed = await proposeTrajectoryOptions({
+    oa,
+    projectId,
+    ...qualification.qualification.inputs,
+    packagePin: qualification.qualification.packagePin,
+    objective: qualification.qualification.objective,
+    projectTitle: qualification.qualification.projectTitle,
+  });
+  if (!proposed.ok) throw new Error(`propose: ${proposed.code}`);
+  const decided = await decideTrajectory({
+    oa,
+    projectId,
+    optionSetRef: proposed.optionSetRef,
+    options: proposed.options,
+    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
+    selectedOptionRef: GOVERNED_OPTION_REF,
+    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+    candidateVersion: proposed.proposedTrajectory!.version,
+    forceLocalAuthority: true,
+  });
+  if (!decided.ok) throw new Error(`decide: ${decided.code}`);
+  return { proposed, decisionId: decided.decision.decisionId };
+}
+
+async function sealW3cRecover(input: {
+  oa: RuntimeOaStack;
+  projectId: string;
+  attemptId: string;
+  ecId: string;
+  evidenceId: string;
+  reviewBundleId: string;
+}) {
+  const epistemicId = w3cRecommendationEpistemicId(input.evidenceId);
+  const payload: W3cRecommendationPayload = {
+    kind: "recover",
+    headline: "Échec docs_write — recovery",
+    rationale: "Attempt failed; Evidence available; no business success.",
+    nextStep: "recovery_diagnose_or_replan",
+    requiresHumanDecision: true,
+    authority: "none",
+    gateConsumed: false,
+    decisionCreated: false,
+    attemptAutoLaunchNextCycle: false,
+    recommendNextGateStatus: null,
+    nextActionCode: null,
+    evidenceId: input.evidenceId,
+    attemptId: input.attemptId,
+    reviewBundleId: input.reviewBundleId,
+    claimEvaluationId: null,
+    productOutcome: "FAIL",
+    analysisText: null,
+    analysisUnavailableReason: "test_seed",
+    analysisProviderId: null,
+    noraInvoked: false,
+    lpsVersion: null,
+  };
+  await input.oa.cycleServices!.updateEpistemicState.execute({
+    projectId: input.projectId,
+    items: [
+      {
+        epistemicItemId: epistemicId,
+        type: "Recommendation",
+        statement: serializeW3cRecommendationPayload(payload),
+        status: "active",
+        source: `w3c-post-evidence:${input.evidenceId}`,
+        relatedObjects: [
+          input.projectId,
+          input.attemptId,
+          input.evidenceId,
+          input.reviewBundleId,
+          input.ecId,
+        ],
+      },
+    ],
+    createdBy: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
+    correlationId: `cor:w3c-seed:${input.attemptId}`,
+  });
+}
+
+async function buildDocsWriteContract(input: {
+  oa: RuntimeOaStack;
+  projectId: string;
+  cycleInstanceId?: string | null;
+  decisionId: string;
+  ecId: string;
+  targetPath?: string;
+}) {
+  const authority = registerLocalMorrisGateAuthority({
+    authorityResolver: input.oa.authorityResolver,
+    scope: "studio.gcec.docs_write",
+    issuedAt: input.oa.clock.nowIso(),
+    evidenceId: `evd:prestart:${input.ecId}`,
+    forceEnable: true,
+  });
+  if (!authority.ok) throw new Error(`authority: ${authority.code}`);
+  const built =
+    await input.oa.executionContractServices!.buildExecutionContract.execute({
+      executionContractId: input.ecId,
+      projectId: input.projectId,
+      cycleInstanceId: input.cycleInstanceId ?? undefined,
+      decisionRefs: [input.decisionId],
+      action: M4_BOUNDED_DOCS_WRITE_ACTION,
+      target: M4_BOUNDED_DOCS_WRITE_TARGET,
+      scope: "studio.gcec.docs_write",
+      inputs: {
+        targetPath: input.targetPath ?? TARGET_PATH,
+        targetRepositoryRef: "mcleland147/sfia-workspace",
+        repositoryRef: "mcleland147/sfia-workspace",
+        pathAllowlist: ["projects/sfia-studio/.sandbox/", "projects/studyflow/"],
+        contentRequirements: ["markdown heading", "acceptance criteria"],
+        baseHeadSha: "a".repeat(40),
+        artifactBrief: "Note de cadrage StudyFlow — recovery prestart proof",
+        artifactType: "functional_design",
+        artifactWriteMode: "CREATE",
+      },
+      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
+      requiredAuthority: "MORRIS",
+      constraints: [
+        "BOUNDED DOCS-WRITE",
+        "PATH_ALLOWLIST_ONLY",
+        "TEXT_DOCS_ONLY",
+        "NO_DELETE",
+        "NO_COMMIT",
+        "NO_GIT_REMOTE",
+        "NO_PUSH",
+        "NO_PR",
+        "NO_MERGE",
+        "GATE D REQUIRED",
+        "NO WILDCARD",
+        "PREPARE_ONLY",
+      ],
+      stopConditions: [
+        "AUTHORITY_DENIED",
+        "CONTEXT_STALE",
+        "DECISION_NOT_CURRENT",
+      ],
+      evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
+      reversibility: "reversible",
+      idempotencyKey: `idem:prestart-${input.ecId}`,
+      correlationId: `cor:prestart-${input.ecId}`,
+      actor: LOCAL_PILOTE_ACTOR,
+      authorityEvidenceId: authority.evidenceId,
+    });
+  if (!built.ok) {
+    throw new Error(
+      `build failed: ${built.error.detailCode} ${built.error.message ?? ""}`,
+    );
+  }
+  return built.contract;
+}
+
+async function materializeAndEnsureRecovery(input: {
+  oa: RuntimeOaStack;
+  projectId: string;
+  attemptId: string;
+  ecId: string;
+}) {
+  const ids = w3bEvidenceIdentity(input.attemptId);
+  const materialized = await materializeProductOutcomeFromAttempt({
+    oa: input.oa,
+    projectId: input.projectId,
+    attemptId: input.attemptId,
+  });
+  let recovered = await resolvePostEvidenceRecoveryContext({
+    oa: input.oa,
+    projectId: input.projectId,
+  });
+  if (!recovered.ok || !recovered.context) {
+    await sealW3cRecover({
+      oa: input.oa,
+      projectId: input.projectId,
+      attemptId: input.attemptId,
+      ecId: input.ecId,
+      evidenceId: ids.evidenceId,
+      reviewBundleId: ids.reviewBundleId,
+    });
+    // If materialize failed, Evidence may be missing — force materialize retry
+    if (!materialized.ok) {
+      await materializeProductOutcomeFromAttempt({
+        oa: input.oa,
+        projectId: input.projectId,
+        attemptId: input.attemptId,
+      });
+    }
+    recovered = await resolvePostEvidenceRecoveryContext({
+      oa: input.oa,
+      projectId: input.projectId,
+    });
+  }
+  if (!recovered.ok || !recovered.context) {
+    // Last resort: materialize then seal with actual evidence ids from materialize
+    if (
+      materialized.ok &&
+      typeof materialized.product.evidenceId === "string" &&
+      typeof materialized.product.reviewBundleId === "string"
+    ) {
+      await sealW3cRecover({
+        oa: input.oa,
+        projectId: input.projectId,
+        attemptId: input.attemptId,
+        ecId: input.ecId,
+        evidenceId: materialized.product.evidenceId,
+        reviewBundleId: materialized.product.reviewBundleId,
+      });
+      recovered = await resolvePostEvidenceRecoveryContext({
+        oa: input.oa,
+        projectId: input.projectId,
+      });
+    }
+  }
+  if (!recovered.ok || !recovered.context) {
+    throw new Error("RecoveryContext unavailable after seal");
+  }
+  return recovered.context;
+}
+
+describe("RECOVERY-OWNERSHIP-PRESTART-FAILURE-01", () => {
+  beforeEach(() => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
+    delete process.env.SFIA_STUDIO_CURSOR_REAL_AUTHORIZED;
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    clearW3bBoundaryArm();
+  });
+
+  afterEach(() => {
+    clearW3bBoundaryArm();
+    resetF2ProposalStoreForTests();
+    setConversationProviderForTests(null);
+    cleanupW2TempDirs();
+  });
+
+  it("StartExecution deterministic launch reject → Attempt failed + EC confirmed", async () => {
+    const { TestExecutionAdapter } = await import("@/lib/oa/execution-attempt");
+    const {
+      buildStack,
+      seedConfirmedContract,
+      selectStandardAgent,
+      MORRIS_ACTOR,
+    } = await import("../oa/execution-attempt/helpers");
+    const rejectAdapter = new TestExecutionAdapter({
+      launchFixtures: {
+        "xat:prestart-0": { outcome: "reject", reason: "need_retry" },
+      },
+    });
+    const stack = buildStack({ adapter: rejectAdapter });
+    const { contractId } = await seedConfirmedContract(stack);
+    await selectStandardAgent(stack, {
+      attemptId: "xat:prestart-0",
+      executionContractId: contractId,
+      idempotencyKey: "idem-prestart-0",
+    });
+    const started = await stack.attempts.startExecution.execute({
+      attemptId: "xat:prestart-0",
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: "evd:morris-n3",
+    });
+    expect(started.ok).toBe(false);
+    const prior = await stack.attempts.attempts.findById("xat:prestart-0");
+    expect(prior?.status).toBe("failed");
+    expect(prior?.stopReason).toMatch(/^EXECUTION_LAUNCH_FAILED:\s*reject:/);
+    expect(prior?.startedAt).toBeUndefined();
+    const contract = await stack.execution.contracts.findById(contractId);
+    expect(contract?.status).toBe("confirmed");
+  });
+
+  it("StudyFlow-equivalent durable facts → binding PRESENT (EC stays confirmed)", async () => {
+    const db = tempProductDbPath("prestart-sf-equiv.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pssf" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "sf" });
+    const oa = runtime.oa!;
+    const { decisionId } = await proposeAndDecideGoverned(oa, seeded.projectId);
+    const attemptId = `xat:w3a:sf-${Math.random().toString(16).slice(2, 10)}`;
+    const ecId = `xct:m3-res:sf-${Math.random().toString(16).slice(2, 10)}`;
+    const built = await buildDocsWriteContract({
+      oa,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+      decisionId,
+      ecId,
+      targetPath: "projects/studyflow/01-cadrage/note-de-cadrage.md",
+    });
+    const confirmed = {
+      ...built,
+      status: "confirmed" as const,
+      version: built.version + (built.status === "confirmed" ? 0 : 1),
+    };
+    if (
+      confirmed.version !== built.version ||
+      confirmed.status !== built.status
+    ) {
+      await oa.executionContractServices!.contracts.save(confirmed);
+    }
+    const live =
+      (await oa.executionContractServices!.contracts.findById(ecId)) ??
+      confirmed;
+    expect(live.status).toBe("confirmed");
+
+    const now = oa.clock.nowIso();
+    await oa.executionAttemptServices!.attempts.create({
+      schemaVersion: "0.2.0-oa",
+      attemptId,
+      executionContractId: ecId,
+      executionContractVersion: live.version,
+      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
+      status: "failed",
+      idempotencyKey: `idem:att:${attemptId}`,
+      correlationId: `cor:att:${attemptId}`,
+      version: 1,
+      createdAt: now,
+      failedAt: now,
+      stopReason:
+        "REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:base_head_sha_missing",
+      irreversibleEffectsPossible: false,
+      provenance: {
+        schemaVersion: "0.1.0-oa",
+        provenanceRecordId: `prv:${attemptId}`,
+        actor: LOCAL_PILOTE_ACTOR,
+        source: "system",
+        timestamp: now,
+        correlationId: `cor:att:${attemptId}`,
+      },
+    } as never);
+
+    await materializeAndEnsureRecovery({
+      oa,
+      projectId: seeded.projectId,
+      attemptId,
+      ecId,
+    });
+
+    const before = await oa.executionContractServices!.contracts.findById(ecId);
+    const bound = await resolveRecoveryExecutionBinding({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(bound.ok).toBe(true);
+    if (!bound.ok) return;
+    expect(bound.recoveryContextPresent).toBe(true);
+    expect(bound.binding?.sourceStatus).toBe("confirmed");
+    expect(bound.binding?.sourceExecutionContractId).toBe(ecId);
+    expect(bound.binding?.sourceAttemptId).toBe(attemptId);
+    expect(bound.binding?.targetPath).toBe(
+      "projects/studyflow/01-cadrage/note-de-cadrage.md",
+    );
+    const after = await oa.executionContractServices!.contracts.findById(ecId);
+    expect(after?.status).toBe("confirmed");
+    expect(after?.version).toBe(before?.version);
+  });
+
+  it("G — CLASS 1 failed-EC recovery path still works", async () => {
+    const db = tempProductDbPath("prestart-c1-legacy.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "psc1" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "c1" });
+    const oa = runtime.oa!;
+    const { decisionId } = await proposeAndDecideGoverned(oa, seeded.projectId);
+    const attemptId = `xat:w3a:c1-${Math.random().toString(16).slice(2, 10)}`;
+    const ecId = `xct:m3-ev:c1-${Math.random().toString(16).slice(2, 10)}`;
+    const built = await buildDocsWriteContract({
+      oa,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+      decisionId,
+      ecId,
+    });
+    const failedContract = {
+      ...built,
+      status: "failed" as const,
+      version: built.version + 1,
+    };
+    await oa.executionContractServices!.contracts.save(failedContract);
+    const now = oa.clock.nowIso();
+    await oa.executionAttemptServices!.attempts.create({
+      schemaVersion: "0.2.0-oa",
+      attemptId,
+      executionContractId: ecId,
+      executionContractVersion: failedContract.version,
+      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
+      status: "failed",
+      idempotencyKey: `idem:att:${attemptId}`,
+      correlationId: `cor:att:${attemptId}`,
+      version: 1,
+      createdAt: now,
+      failedAt: now,
+      launchedAt: now,
+      startedAt: now,
+      stopReason: "REAL_PROCESS_NONZERO_EXIT",
+      irreversibleEffectsPossible: true,
+      processDiagnostic: {
+        kind: "process_failure_diagnostic",
+        realProcessInvoked: true,
+        boundaryProofMode: "cursor_real",
+        exitCode: 1,
+        stderrExcerpt: "class1",
+        authoritativeBusinessEvidence: false,
+      },
+      provenance: {
+        schemaVersion: "0.1.0-oa",
+        provenanceRecordId: `prv:${attemptId}`,
+        actor: LOCAL_PILOTE_ACTOR,
+        source: "system",
+        timestamp: now,
+        correlationId: `cor:att:${attemptId}`,
+      },
+    } as never);
+
+    await materializeAndEnsureRecovery({
+      oa,
+      projectId: seeded.projectId,
+      attemptId,
+      ecId,
+    });
+
+    const bound = await resolveRecoveryExecutionBinding({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(bound.ok).toBe(true);
+    if (!bound.ok) return;
+    expect(bound.binding?.sourceStatus).toBe("failed");
+    expect(bound.binding?.sourceExecutionContractId).toBe(ecId);
+  });
+
+  it("negative — confirmed EC + startedAt → binding null while recovery present", async () => {
+    const db = tempProductDbPath("prestart-neg-run.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "psnr" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "nr" });
+    const oa = runtime.oa!;
+    const { decisionId } = await proposeAndDecideGoverned(oa, seeded.projectId);
+    const attemptId = `xat:w3a:nr-${Math.random().toString(16).slice(2, 10)}`;
+    const ecId = `xct:m3-ev:nr-${Math.random().toString(16).slice(2, 10)}`;
+    const built = await buildDocsWriteContract({
+      oa,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+      decisionId,
+      ecId,
+    });
+    const confirmed = {
+      ...built,
+      status: "confirmed" as const,
+      version: built.version + 1,
+    };
+    await oa.executionContractServices!.contracts.save(confirmed);
+    const now = oa.clock.nowIso();
+    await oa.executionAttemptServices!.attempts.create({
+      schemaVersion: "0.2.0-oa",
+      attemptId,
+      executionContractId: ecId,
+      executionContractVersion: confirmed.version,
+      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
+      status: "failed",
+      idempotencyKey: `idem:att:${attemptId}`,
+      correlationId: `cor:att:${attemptId}`,
+      version: 1,
+      createdAt: now,
+      failedAt: now,
+      startedAt: now,
+      launchedAt: now,
+      stopReason:
+        "REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:base_head_sha_missing",
+      irreversibleEffectsPossible: false,
+      provenance: {
+        schemaVersion: "0.1.0-oa",
+        provenanceRecordId: `prv:${attemptId}`,
+        actor: LOCAL_PILOTE_ACTOR,
+        source: "system",
+        timestamp: now,
+        correlationId: `cor:att:${attemptId}`,
+      },
+    } as never);
+
+    await materializeAndEnsureRecovery({
+      oa,
+      projectId: seeded.projectId,
+      attemptId,
+      ecId,
+    });
+
+    const bound = await resolveRecoveryExecutionBinding({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(bound.ok).toBe(true);
+    if (!bound.ok) return;
+    expect(bound.recoveryContextPresent).toBe(true);
+    expect(bound.binding).toBeNull();
+  });
+});

---

## 23. REVIEW HANDOFF INTENT

Mode: publish-in-cycle L3
Branch: sfia/review-handoff
Canonical: sfia-review-handoff/latest-chatgpt-review.md
Suggested message: docs(review-handoff): publish pre-start recovery ownership review
Project push: NOT authorized / NOT performed
