# RECOVERY-BINDING-WRITE-MODE-PRESTART-CONTINUITY-01 — FULL Review Pack
## Cycle 8 — Delivery / implémentation · CRITICAL

Generated: 2026-09-26T14:48:00Z
Macro: RECOVERY-BINDING-WRITE-MODE-PRESTART-CONTINUITY-01
Cycle: 8 — Delivery / implémentation
Profile: CRITICAL
Morris GO: CORRECTION AUTHORIZED — consumed for local Product source/test only
Project commit/push/PR: AUTHORIZED and performed — Merge: NOT AUTHORIZED
StudyFlow Product mutation: **NONE**
Managed clone mutation: **NONE**
Cursor REAL / PREPARE / Confirm / Execute: **NONE**
New HumanDecision / v6 promotion: **NONE**

---

## 1. GIT TRUTH

| Field | Value |
|-------|-------|
| Branch | `fix/sfia-studio-recovery-binding-write-mode-prestart-continuity-01` |
| HEAD / origin/main | `16af8fba308ecba24698a8dfe5521a7d2e7aa177` |
| Base | post-merge #525 |
| Unrelated Product dirt | NONE (only `.tmp-sfia-review/**`) |
| Project commit | **NONE** — LOCAL / NOT COMMITTED / NOT PUSHED |

Product paths touched:

- `M` `…/w2/isConfirmedPreStartRejectionRecoverySource.ts`
- `M` `…/w2/resolvePostEvidenceRecoveryContext.ts`
- `M` `…/recoveryOwnership.prestartFailure.d0.test.ts`
- `M` `…/checkpointF.recoveryOptionsContext.d0.test.ts`
- `A` `…/recoveryBindingWriteModePrestartContinuity.d0.test.ts`

---

## 2. CONVERGENCE / CAPABILITIES

Sources read (not modified): Build Doctrine, Roadmap, Product Completion cadrage, v3 framing 34/35/37.

Capabilities: V3-F05 / F11 / F12 / F14 — restore decided recovery route so #525 write-mode reseal can be reached naturally. No parallel recovery engine.

---

## 3. NATURAL STUDYFLOW STATE (READ-ONLY)

Product DB: `projects/sfia-studio/.sfia-exec/new-project-campaign-01/product/oa-product.sqlite`
`PRAGMA query_only = ON` — no writes.

| Field | Observed |
|-------|----------|
| Project | StudyFlow `prj:34e7351c-770c-474a-8edc-9c82a07be41d` |
| Trajectory tip | `trj:lr-bridge-039d11e6fe6b` |
| v5 | status=`validated`, decidedOptionRef=`opt:trajectory:governed-gated`, decidedByDecisionRef=`dec:w2-trj:408666c3-2c87-4967-a683-87bfe2b0d74e` |
| v6 | status=`candidate`, **NOT decided** |
| HD | status=`accepted` |
| EC tip | `xct:m3-res:dec:w2-trj:408666c3-…` status=`confirmed`, action/target docs_write, targetPath=`projects/studyflow/01-cadrage/note-de-cadrage.md`, artifactWriteMode **ABSENT** |
| Attempt | `xat:w3a:d6df3f9e31e8b84b` failed, stopReason=`REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED`, startedAt/launchedAt absent, irreversible=0, processDiagnostic **absent** |

UI symptom after #525:
**"Sujet recovery connu mais binding non résolu après restart — fail-closed (pas de PREPARE générique)."**

v6 recommendation ("Diagnostiquer / clarifier…") is evidence of the gap — **not** the desired trajectory.

---

## 4. ROOT CAUSE A — RECOVERY BINDING FAMILY GAP

`isDeterministicPreStartLaunchRejectionStopReason` recognized:

- `REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID`
- `REAL_LAUNCH_FAILED: REAL_BOUNDARY_DISABLED`
- `REAL_LAUNCH_FAILED: REAL_AGENT_PROFILE_INVALID`

but **not** the natural:

- `REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED`

→ CLASS 2 false → `resolveRecoveryExecutionBinding` returns recoveryContextPresent=true, binding=null → continuity fail-closed.

**Fix:** exact narrow regex for `ARTIFACT_WRITE_MODE_UNRESOLVED`. No `REAL_LAUNCH_FAILED:*` wildcard. No `includes("ARTIFACT_WRITE_MODE")`.

### Other write-mode codes (reserve)

| Code | Classification |
|------|----------------|
| ARTIFACT_WRITE_MODE_UNRESOLVED | deterministic pre-process reject — **ADDED** |
| ARTIFACT_WRITE_MODE_ASK | prepare-time fail-closed — not Attempt stopReason family here |
| ARTIFACT_WRITE_MODE_STALE_*_AT_EXECUTION | TOCTOU after seal — structurally different; **OUT / RESERVE** |
| ARTIFACT_WRITE_MODE_EXECUTION_REVALIDATION_UNAVAILABLE | fail-closed at execution probe — **OUT / RESERVE** |

---

## 5. ROOT CAUSE B — BOUNDARY ≠ PROCESS INVOKED

Previous `resolveRealProcessInvoked`:

```
true diagnostic → true
irreversible → true
stopReason startsWith REAL_ → true  // overwrote everything else
```

This conflated REAL gateway/boundary with Cursor process invocation.

**New authority order:**

A. `realProcessInvoked === true` → TRUE
B. `irreversibleEffectsPossible === true` → TRUE (incl. contradicting false)
C. `realProcessInvoked === false` → FALSE (explicit wins)
D'. known pre-start stopReason family + no startedAt/launchedAt → FALSE
D. else REAL_* prefix (no diagnostic) → TRUE (conservative)
E. `inferDurableRealProcessInvoked`: also `cursor_real && launchedAt` → TRUE

---

## 6. #525 INTEGRATION

Unchanged: `prepareDocsWriteRecoverySuccessor` / `repairIncompleteRecoveryDocsWriteSuccessor`.

Expected downstream after this fix:

owned continuity → binding → PREPARE can call #525 reseal → confirmation_required.

This cycle stops **BEFORE** natural PREPARE.

---

## 7. SAFETY INVARIANTS

- startedAt / launchedAt present → CLASS 2 false
- irreversible true → CLASS 2 false + process true
- realProcessInvoked true → CLASS 2 false + process true
- unknown REAL_LAUNCH_FAILED → CLASS 2 false; process conservative true
- #524 protections retained
- v6 candidate does not invalidate decided recovery tip

---

## 8. VALIDATION

### Targeted

113 / 113 pass across:

- RB-WM + CLASS 2 pure
- PI semantics
- StudyFlow-equivalent restart continuity
- #524 ownership integration / corr02 / corr03
- Checkpoint F recovery options
- Checkpoint F docs_write successor
- #525 recoveryDocsWriteModeSealing
- pjReproof05

### Full

| Gate | Result |
|------|--------|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| Vitest | **432 files passed** · **17 skipped** · **4794 tests passed** · **137 skipped** · **0 failed** |
| modeled | **73 / 0** |

---

## 9. FAKE / REAL

Input: REAL gateway/boundary reached · Cursor process = FALSE · business effect = FALSE

This correction: **DETERMINISTIC ONLY**

Proof: RECOVERY BINDING FOR WRITE-MODE PRESTART REJECTION + BOUNDARY VS PROCESS INVOCATION + RESTART CONTINUITY — DETERMINISTICALLY PROVEN

NOT claimed: StudyFlow REAL success · Cursor success · artifact written · Evidence REAL · E2E REAL · Product READY · runtime v3 ADOPTED

---

## 10. NORA RESERVE

`recommended_option_ref_only_on_recommendation` — OPEN / NON-BLOCKING / OUT OF SCOPE

---

## 11. ANTI-CLAIMS

- StudyFlow SQLite: NOT MUTATED
- Managed clone: NOT MUTATED
- No new HD / no v6 decision / no PREPARE / no Execute / no REAL
- No doctrine / architecture pivot
- Project git: LOCAL / NOT COMMITTED / NOT PUSHED

---

## 12. FINAL VERDICT

**RECOVERY BINDING WRITE-MODE PRESTART CONTINUITY — DETERMINISTICALLY PROVEN / EXISTING GOVERNED V5 RECOVERED / READY FOR CHATGPT REVIEW**

---

## 13. EXACT SOURCE DIFFS (FULL)

### 13.1 isConfirmedPreStartRejectionRecoverySource.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/isConfirmedPreStartRejectionRecoverySource.ts b/projects/sfia-studio/app/features/project-assistant/w2/isConfirmedPreStartRejectionRecoverySource.ts
index 95c0637f..74d457e9 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/isConfirmedPreStartRejectionRecoverySource.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/isConfirmedPreStartRejectionRecoverySource.ts
@@ -28,6 +28,13 @@ export function isDeterministicPreStartLaunchRejectionStopReason(
   if (/^REAL_LAUNCH_FAILED:\s*REAL_WORKSPACE_INVALID\b/i.test(s)) return true;
   if (/^REAL_LAUNCH_FAILED:\s*REAL_BOUNDARY_DISABLED\b/i.test(s)) return true;
   if (/^REAL_LAUNCH_FAILED:\s*REAL_AGENT_PROFILE_INVALID\b/i.test(s)) return true;
+  // Docs-write execution-time write-mode guard rejects BEFORE Cursor process
+  // invocation (REAL gateway boundary reached ≠ process invoked).
+  if (
+    /^REAL_LAUNCH_FAILED:\s*ARTIFACT_WRITE_MODE_UNRESOLVED\b/i.test(s)
+  ) {
+    return true;
+  }
   return false;
 }

```

### 13.2 resolvePostEvidenceRecoveryContext.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts
index 39451805..4b76c497 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts
@@ -18,6 +18,7 @@ import {
   type W3cRecommendationPayload,
 } from "./w3cPostEvidenceLoop";
 import { resolveDurableBoundaryProofMode } from "@/features/project-assistant/f3/resolveDurableBoundaryProofMode";
+import { isDeterministicPreStartLaunchRejectionStopReason } from "./isConfirmedPreStartRejectionRecoverySource";

 export type PostEvidenceRecoveryContext = {
   readonly kind: "post_evidence_recovery";
@@ -57,8 +58,31 @@ function statementToJsonString(statement: unknown): string | null {
 }

 function resolveRealProcessInvoked(attempt: ExecutionAttempt): boolean {
+  // A — explicit TRUE diagnostic is authoritative.
   if (attempt.processDiagnostic?.realProcessInvoked === true) return true;
+  // B — irreversible-effect flag is fail-safe TRUE (incl. contradicting false).
   if (attempt.irreversibleEffectsPossible === true) return true;
+  // C — explicit FALSE diagnostic wins over generic REAL_* stopReason naming.
+  // Boundary reached (REAL_LAUNCH_FAILED:…) ≠ Cursor process invoked.
+  if (attempt.processDiagnostic?.realProcessInvoked === false) return false;
+
+  const started =
+    typeof attempt.startedAt === "string" && attempt.startedAt.trim().length > 0;
+  const launched =
+    typeof attempt.launchedAt === "string" &&
+    attempt.launchedAt.trim().length > 0;
+
+  // D' — known deterministic pre-start rejection families with no launch/start:
+  // gateway refuse before Cursor process. Stronger than bare REAL_* prefix.
+  if (
+    !started &&
+    !launched &&
+    isDeterministicPreStartLaunchRejectionStopReason(attempt.stopReason)
+  ) {
+    return false;
+  }
+
+  // D — no explicit process diagnostic: conservative inference from REAL_* prefix.
   if (
     typeof attempt.stopReason === "string" &&
     attempt.stopReason.startsWith("REAL_")
```

### 13.3 recoveryOwnership.prestartFailure.d0.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.prestartFailure.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.prestartFailure.d0.test.ts
index 8047ad20..a25cbed7 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.prestartFailure.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.prestartFailure.d0.test.ts
@@ -182,3 +182,103 @@ describe("CLASS 2 — confirmed pre-start rejection qualification", () => {
     ).toBe(false);
   });
 });
+
+const WRITE_MODE_UNRESOLVED =
+  "REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED";
+
+describe("RB-WM — ARTIFACT_WRITE_MODE_UNRESOLVED pre-start recovery source", () => {
+  it("RB-WM-01 — strict UNRESOLVED pre-start → CLASS 2 true", () => {
+    expect(
+      isDeterministicPreStartLaunchRejectionStopReason(WRITE_MODE_UNRESOLVED),
+    ).toBe(true);
+    expect(
+      isConfirmedPreStartRejectionRecoverySource({
+        contract: baseContract(),
+        attempt: baseAttempt({
+          stopReason: WRITE_MODE_UNRESOLVED,
+          irreversibleEffectsPossible: false,
+          processDiagnostic: {
+            kind: "process_failure_diagnostic",
+            realProcessInvoked: false,
+            boundaryProofMode: "cursor_real",
+            exitCode: null,
+            stderrExcerpt: "ARTIFACT_WRITE_MODE_UNRESOLVED",
+            authoritativeBusinessEvidence: false,
+          } as never,
+        }),
+      }),
+    ).toBe(true);
+  });
+
+  it("RB-WM-02 — startedAt present → false", () => {
+    expect(
+      isConfirmedPreStartRejectionRecoverySource({
+        contract: baseContract(),
+        attempt: baseAttempt({
+          stopReason: WRITE_MODE_UNRESOLVED,
+          startedAt: "2026-09-25T00:00:00.500Z",
+        }),
+      }),
+    ).toBe(false);
+  });
+
+  it("RB-WM-03 — launchedAt present → false", () => {
+    expect(
+      isConfirmedPreStartRejectionRecoverySource({
+        contract: baseContract(),
+        attempt: baseAttempt({
+          stopReason: WRITE_MODE_UNRESOLVED,
+          launchedAt: "2026-09-25T00:00:00.400Z",
+          startedAt: "2026-09-25T00:00:00.500Z",
+        }),
+      }),
+    ).toBe(false);
+  });
+
+  it("RB-WM-04 — irreversibleEffectsPossible=true → false", () => {
+    expect(
+      isConfirmedPreStartRejectionRecoverySource({
+        contract: baseContract(),
+        attempt: baseAttempt({
+          stopReason: WRITE_MODE_UNRESOLVED,
+          irreversibleEffectsPossible: true,
+        }),
+      }),
+    ).toBe(false);
+  });
+
+  it("RB-WM-05 — realProcessInvoked=true → false", () => {
+    expect(
+      isConfirmedPreStartRejectionRecoverySource({
+        contract: baseContract(),
+        attempt: baseAttempt({
+          stopReason: WRITE_MODE_UNRESOLVED,
+          processDiagnostic: {
+            kind: "process_failure_diagnostic",
+            realProcessInvoked: true,
+            boundaryProofMode: "cursor_real",
+            exitCode: null,
+            stderrExcerpt: "invoked",
+            authoritativeBusinessEvidence: false,
+          } as never,
+        }),
+      }),
+    ).toBe(false);
+  });
+
+  it("RB-WM-06 — unknown REAL_LAUNCH_FAILED reason → false", () => {
+    expect(
+      isDeterministicPreStartLaunchRejectionStopReason(
+        "REAL_LAUNCH_FAILED: SOME_UNKNOWN_REASON",
+      ),
+    ).toBe(false);
+    expect(
+      isConfirmedPreStartRejectionRecoverySource({
+        contract: baseContract(),
+        attempt: baseAttempt({
+          stopReason: "REAL_LAUNCH_FAILED: SOME_UNKNOWN_REASON",
+        }),
+      }),
+    ).toBe(false);
+  });
+});
```

### 13.4 checkpointF.recoveryOptionsContext.d0.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
index 6132b06b..1c08a4f1 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
@@ -292,6 +292,111 @@ describe("R7 — pure derivation / cognition (T2–T5 unit)", () => {
       }),
     ).toBe(true);
   });
+
+  it("PI-01 — explicit false + UNRESOLVED + cursor_real + no launch → false", () => {
+    expect(
+      inferDurableRealProcessInvoked({
+        attempt: {
+          stopReason: "REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED",
+          irreversibleEffectsPossible: false,
+          processDiagnostic: {
+            kind: "process_failure_diagnostic",
+            realProcessInvoked: false,
+            boundaryProofMode: "cursor_real",
+            exitCode: null,
+            stderrExcerpt: "ARTIFACT_WRITE_MODE_UNRESOLVED",
+            authoritativeBusinessEvidence: false,
+          },
+        } as ExecutionAttempt,
+        boundaryProofMode: "cursor_real",
+      }),
+    ).toBe(false);
+  });
+
+  it("PI-02 — explicit realProcessInvoked=true → true", () => {
+    expect(
+      inferDurableRealProcessInvoked({
+        attempt: {
+          stopReason: "REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED",
+          irreversibleEffectsPossible: false,
+          processDiagnostic: {
+            realProcessInvoked: true,
+            boundaryProofMode: "cursor_real",
+          },
+        } as ExecutionAttempt,
+        boundaryProofMode: "cursor_real",
+      }),
+    ).toBe(true);
+  });
+
+  it("PI-03 — explicit false + irreversibleEffectsPossible=true → true", () => {
+    expect(
+      inferDurableRealProcessInvoked({
+        attempt: {
+          stopReason: "REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED",
+          irreversibleEffectsPossible: true,
+          processDiagnostic: {
+            realProcessInvoked: false,
+            boundaryProofMode: "cursor_real",
+          },
+        } as ExecutionAttempt,
+        boundaryProofMode: "cursor_real",
+      }),
+    ).toBe(true);
+  });
+
+  it("PI-04 — explicit false + launchedAt absent → false despite REAL_LAUNCH_FAILED", () => {
+    expect(
+      inferDurableRealProcessInvoked({
+        attempt: {
+          stopReason: "REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED",
+          irreversibleEffectsPossible: false,
+          processDiagnostic: { realProcessInvoked: false },
+        } as ExecutionAttempt,
+        boundaryProofMode: "cursor_real",
+      }),
+    ).toBe(false);
+  });
+
+  it("PI-05 — diagnostic absent + launchedAt + cursor_real → true", () => {
+    expect(
+      inferDurableRealProcessInvoked({
+        attempt: {
+          stopReason: "OTHER",
+          processDiagnostic: undefined,
+          irreversibleEffectsPossible: undefined,
+          launchedAt: "2026-09-17T20:00:00.000Z",
+        } as ExecutionAttempt,
+        boundaryProofMode: "cursor_real",
+      }),
+    ).toBe(true);
+  });
+
+  it("PI-06 — diagnostic absent + ambiguous REAL stopReason → conservative true", () => {
+    expect(
+      inferDurableRealProcessInvoked({
+        attempt: {
+          stopReason: "REAL_LAUNCH_FAILED: SOME_UNKNOWN_REASON",
+          processDiagnostic: undefined,
+          irreversibleEffectsPossible: false,
+        } as ExecutionAttempt,
+        boundaryProofMode: "cursor_real",
+      }),
+    ).toBe(true);
+  });
+
+  it("PI-natural — diagnostic absent + known UNRESOLVED pre-start → false", () => {
+    expect(
+      inferDurableRealProcessInvoked({
+        attempt: {
+          stopReason: "REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED",
+          irreversibleEffectsPossible: false,
+          processDiagnostic: undefined,
+        } as ExecutionAttempt,
+        boundaryProofMode: "cursor_real",
+      }),
+    ).toBe(false);
+  });
 });

 describe("R7 — durable RecoveryContext integration", () => {
```

### 13.5 recoveryBindingWriteModePrestartContinuity.d0.test.ts (NEW)
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/recoveryBindingWriteModePrestartContinuity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/recoveryBindingWriteModePrestartContinuity.d0.test.ts
new file mode 100644
index 00000000..fbe6f124
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/recoveryBindingWriteModePrestartContinuity.d0.test.ts
@@ -0,0 +1,380 @@
+/**
+ * RECOVERY-BINDING-WRITE-MODE-PRESTART-CONTINUITY-01
+ * StudyFlow-equivalent: UNRESOLVED pre-start + decided v5 + proposed v6
+ * → restart recovers owned continuity / binding. ZERO REAL / ZERO StudyFlow mutation.
+ * @vitest-environment node
+ */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+import {
+  LOCAL_PILOTE_ACTOR,
+  registerLocalMorrisGateAuthority,
+} from "@/lib/oa/decision";
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+  M4_BOUNDED_DOCS_WRITE_TARGET,
+} from "@/lib/oa/execution-attempt";
+import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
+import {
+  materializeProductOutcomeFromAttempt,
+  w3bEvidenceIdentity,
+} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
+import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
+import { readRecoveryOwnedDecisionContinuity } from "@/features/project-assistant/w2/readRecoveryOwnedDecisionContinuity";
+import {
+  inferDurableRealProcessInvoked,
+  resolvePostEvidenceRecoveryContext,
+} from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
+import { resolveRecoveryExecutionBinding } from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
+import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
+import {
+  serializeW3cRecommendationPayload,
+  w3cRecommendationEpistemicId,
+  type W3cRecommendationPayload,
+} from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
+import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
+import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "@/features/project-assistant/f3/systemFactualWriter";
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  seedQualifiedProject,
+  tempProductDbPath,
+} from "./w2Harness";
+
+const STUDYFLOW_TARGET =
+  "projects/studyflow/01-cadrage/note-de-cadrage.md";
+const WRITE_MODE_UNRESOLVED =
+  "REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED";
+
+beforeEach(() => {
+  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
+  setConversationProviderForTests(null);
+});
+
+afterEach(() => {
+  cleanupW2TempDirs();
+  setConversationProviderForTests(null);
+});
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
+  return {
+    proposed,
+    decisionId: decided.decision.decisionId,
+    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+    decidedVersion: proposed.proposedTrajectory!.version,
+  };
+}
+
+async function proposeOnly(oa: RuntimeOaStack, projectId: string) {
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
+  if (!proposed.ok) throw new Error(`propose-only: ${proposed.code}`);
+  return proposed;
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
+    headline: "Échec docs_write — recovery write-mode",
+    rationale: "Attempt failed pre-start UNRESOLVED; no business success.",
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
+describe("RECOVERY-BINDING-WRITE-MODE-PRESTART-CONTINUITY-01", () => {
+  it("StudyFlow-equivalent restart: UNRESOLVED + decided vN + proposed vN+1 → owned binding", async () => {
+    const db = tempProductDbPath("rbwm-continuity.sqlite");
+    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "rbwm" });
+    const seeded = await seedQualifiedProject(runtime, { suffix: "cont" });
+    const oa = runtime.oa!;
+
+    // Episode seed HD (not the recovery tip).
+    const seedDecide = await proposeAndDecideGoverned(oa, seeded.projectId);
+    const attemptId = `xat:w3a:rbwm-${Math.random().toString(16).slice(2, 10)}`;
+    const ecId = `xct:m3-res:rbwm-${Math.random().toString(16).slice(2, 10)}`;
+
+    const authority = registerLocalMorrisGateAuthority({
+      authorityResolver: oa.authorityResolver,
+      scope: "studio.gcec.docs_write",
+      issuedAt: oa.clock.nowIso(),
+      evidenceId: `evd:rbwm:${ecId}`,
+      forceEnable: true,
+    });
+    if (!authority.ok) throw new Error(authority.code);
+
+    const built =
+      await oa.executionContractServices!.buildExecutionContract.execute({
+        executionContractId: ecId,
+        projectId: seeded.projectId,
+        cycleInstanceId: seeded.cycleInstanceId ?? undefined,
+        decisionRefs: [seedDecide.decisionId],
+        action: M4_BOUNDED_DOCS_WRITE_ACTION,
+        target: M4_BOUNDED_DOCS_WRITE_TARGET,
+        scope: "studio.gcec.docs_write",
+        inputs: {
+          targetPath: STUDYFLOW_TARGET,
+          targetRepositoryRef: "mcleland147/sfia-workspace",
+          repositoryRef: "mcleland147/sfia-workspace",
+          pathAllowlist: ["projects/studyflow/"],
+          contentRequirements: ["markdown"],
+          // Mode intentionally absent — natural incomplete tip shape.
+        },
+        requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
+        requiredAuthority: "MORRIS",
+        constraints: ["BOUNDED DOCS-WRITE", "PATH_ALLOWLIST_ONLY", "PREPARE_ONLY"],
+        stopConditions: ["AUTHORITY_DENIED"],
+        evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
+        reversibility: "reversible",
+        idempotencyKey: `idem:rbwm-${ecId}`,
+        correlationId: `cor:rbwm-${ecId}`,
+        actor: LOCAL_PILOTE_ACTOR,
+        authorityEvidenceId: authority.evidenceId,
+      });
+    if (!built.ok) throw new Error(built.error.detailCode);
+
+    await oa.executionContractServices!.contracts.save({
+      ...built.contract,
+      status: "confirmed",
+      version: built.contract.version + 1,
+    });
+
+    const now = oa.clock.nowIso();
+    await oa.executionAttemptServices!.attempts.create({
+      schemaVersion: "0.2.0-oa" as const,
+      attemptId,
+      executionContractId: ecId,
+      executionContractVersion: built.contract.version + 1,
+      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
+      status: "failed" as const,
+      idempotencyKey: `idem:att:${attemptId}`,
+      correlationId: `cor:att:${attemptId}`,
+      version: 1,
+      createdAt: now,
+      failedAt: now,
+      stopReason: WRITE_MODE_UNRESOLVED,
+      irreversibleEffectsPossible: false,
+      processDiagnostic: {
+        kind: "process_failure_diagnostic" as const,
+        realProcessInvoked: false,
+        boundaryProofMode: "cursor_real" as const,
+        exitCode: null,
+        stderrExcerpt: "ARTIFACT_WRITE_MODE_UNRESOLVED",
+        authoritativeBusinessEvidence: false,
+      },
+      provenance: {
+        schemaVersion: "0.1.0-oa" as const,
+        provenanceRecordId: `prv:${attemptId}`,
+        actor: LOCAL_PILOTE_ACTOR,
+        source: "system" as const,
+        timestamp: now,
+        correlationId: `cor:att:${attemptId}`,
+      },
+    } as never);
+
+    const ids = w3bEvidenceIdentity(attemptId);
+    await materializeProductOutcomeFromAttempt({
+      oa,
+      projectId: seeded.projectId,
+      attemptId,
+    });
+    await sealW3cRecover({
+      oa,
+      projectId: seeded.projectId,
+      attemptId,
+      ecId,
+      evidenceId: ids.evidenceId,
+      reviewBundleId: ids.reviewBundleId,
+    });
+
+    const recoveryCtx = await resolvePostEvidenceRecoveryContext({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(recoveryCtx.ok).toBe(true);
+    if (!recoveryCtx.ok || !recoveryCtx.context) {
+      throw new Error("recovery context missing");
+    }
+    expect(recoveryCtx.context.realProcessInvoked).toBe(false);
+    expect(recoveryCtx.context.businessEffectProven).toBe(false);
+    expect(recoveryCtx.context.stopReason).toBe(WRITE_MODE_UNRESOLVED);
+
+    const attemptLoaded =
+      await oa.executionAttemptServices!.getExecutionAttempt.execute({
+        attemptId,
+      });
+    expect(attemptLoaded.ok).toBe(true);
+    if (attemptLoaded.ok) {
+      expect(
+        inferDurableRealProcessInvoked({
+          attempt: attemptLoaded.attempt,
+          boundaryProofMode: "cursor_real",
+        }),
+      ).toBe(false);
+    }
+
+    // Recovery governed decision (StudyFlow-equivalent "v5") — no PREPARE.
+    const recoveryDecide = await proposeAndDecideGoverned(
+      oa,
+      seeded.projectId,
+    );
+    const recoveryHd = recoveryDecide.decisionId;
+    expect(recoveryHd).not.toBe(seedDecide.decisionId);
+
+    const currentAfterDecide = await oa.cycleServices!.getCurrentTrajectory.execute({
+      projectId: seeded.projectId,
+    });
+    expect(currentAfterDecide.ok).toBe(true);
+    if (!currentAfterDecide.ok) return;
+    const decidedVersion = currentAfterDecide.trajectory.version;
+    expect(currentAfterDecide.trajectory.decidedByDecisionRef).toBe(recoveryHd);
+    expect(currentAfterDecide.trajectory.decidedOptionRef).toBe(
+      GOVERNED_OPTION_REF,
+    );
+
+    // Later "Instruire les options" creates proposed candidate (StudyFlow v6)
+    // but MUST remain undecided / not current tip authority.
+    const laterPropose = await proposeOnly(oa, seeded.projectId);
+    expect(laterPropose.proposedTrajectory).toBeTruthy();
+    expect(laterPropose.proposedTrajectory!.status).toBe("candidate");
+    expect(laterPropose.proposedTrajectory!.version).toBeGreaterThan(
+      decidedVersion,
+    );
+
+    const currentStill = await oa.cycleServices!.getCurrentTrajectory.execute({
+      projectId: seeded.projectId,
+    });
+    expect(currentStill.ok).toBe(true);
+    if (!currentStill.ok) return;
+    // Current tip for ownership remains the decided recovery trajectory.
+    expect(currentStill.trajectory.decidedByDecisionRef).toBe(recoveryHd);
+    expect(currentStill.trajectory.decidedOptionRef).toBe(GOVERNED_OPTION_REF);
+
+    // Hard-restart-style re-read.
+    const reloaded = await readRecoveryOwnedDecisionContinuity({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(reloaded.ok).toBe(true);
+    if (!reloaded.ok) return;
+    expect(reloaded.kind).toBe("owned");
+    if (reloaded.kind !== "owned") return;
+
+    expect(reloaded.decision.decisionId).toBe(recoveryHd);
+    expect(reloaded.decision.selectedOptionRef).toBe(GOVERNED_OPTION_REF);
+    expect(reloaded.trajectory.decidedByDecisionRef).toBe(recoveryHd);
+    expect(reloaded.binding.kind).toBe("post_evidence_recovery_execution");
+    expect(reloaded.binding.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
+    expect(reloaded.binding.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
+    expect(reloaded.binding.targetPath).toBe(STUDYFLOW_TARGET);
+    expect(reloaded.binding.sourceExecutionContractId).toBe(ecId);
+    expect(reloaded.binding.sourceAttemptId).toBe(attemptId);
+    expect(reloaded.binding.sourceStatus).toBe("confirmed");
+
+    const bound = await resolveRecoveryExecutionBinding({
+      oa,
+      projectId: seeded.projectId,
+    });
+    expect(bound.ok).toBe(true);
+    if (!bound.ok) return;
+    expect(bound.recoveryContextPresent).toBe(true);
+    expect(bound.binding).not.toBeNull();
+    expect(bound.binding?.sourceAttemptId).toBe(attemptId);
+
+    // No PREPARE / Execute / Attempt invented by continuity read.
+    const history =
+      await oa.executionContractServices!.listExecutionContractHistory.execute({
+        projectId: seeded.projectId,
+      });
+    expect(history.ok).toBe(true);
+    if (!history.ok) return;
+    expect(
+      history.contracts.some(
+        (c) =>
+          c.status === "confirmation_required" ||
+          c.status === "draft" ||
+          c.status === "proposed",
+      ),
+    ).toBe(false);
+  });
+});
```

---

## ADDENDUM — GIT PUBLICATION / PR READINESS

Generated: 2026-09-26T14:58:00Z

Morris GO consumed: **commit + push + PR creation** (merge NOT authorized)

| Field | Value |
|-------|-------|
| Branch | `fix/sfia-studio-recovery-binding-write-mode-prestart-continuity-01` |
| Base / parent SHA | `16af8fba308ecba24698a8dfe5521a7d2e7aa177` |
| Project commit SHA | `1c8bbe4d5281fff6f3be77caa365cb2c94c7ca14` |
| Commit parent SHA | `16af8fba308ecba24698a8dfe5521a7d2e7aa177` |
| Commit message | `fix(studio): restore recovery binding after write-mode prestart rejection` |
| Remote branch tip | `1c8bbe4d5281fff6f3be77caa365cb2c94c7ca14` |
| Push | PASS (new remote branch; no force) |

### Exact committed files (5)

1. `projects/sfia-studio/app/features/project-assistant/w2/isConfirmedPreStartRejectionRecoverySource.ts` (M)
2. `projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts` (M)
3. `projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.prestartFailure.d0.test.ts` (M)
4. `projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts` (M)
5. `projects/sfia-studio/app/__tests__/project-assistant/recoveryBindingWriteModePrestartContinuity.d0.test.ts` (A)

`.tmp-sfia-review/**` was **not** staged into the project commit.

### PR

| Field | Value |
|-------|-------|
| Number | **#526** |
| Title | `fix(studio): restore recovery binding after write-mode prestart rejection` |
| URL | https://github.com/mcleland147/sfia-workspace/pull/526 |
| State | OPEN |
| Draft | false |
| Head | `fix/sfia-studio-recovery-binding-write-mode-prestart-continuity-01` |
| Base | `main` |
| headRefOid | `1c8bbe4d5281fff6f3be77caa365cb2c94c7ca14` |

### Immediate CI / checks

Reported at publication (may still be starting): see live `gh pr checks 526`.

### Validation inherited

- targeted: **113 / 113 PASS**
- typecheck / lint / build: PASS
- Vitest: **432 files / 4794 tests / 0 failed**
- modeled: **73 / 0**

### Anti-claims / reserves

- StudyFlow: **NOT MUTATED**
- Trajectory v6: **UNDECIDED / NOT PROMOTED**
- Cursor REAL: **NOT RUN**
- Merge: **NOT AUTHORIZED / NOT PERFORMED**
- Nora `recommended_option_ref_only_on_recommendation`: OPEN / NON-BLOCKING / OUT OF SCOPE

### Next gate

**CI success → Morris merge decision.**
