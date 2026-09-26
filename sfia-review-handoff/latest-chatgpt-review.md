# RECOVERY-DOCS-WRITE-MODE-SEALING-01 / CORR-01 — FULL Review Pack
## Cycle 8 — Delivery / implémentation · CRITICAL

Generated: 2026-09-26T13:55:00Z
Macro: RECOVERY-DOCS-WRITE-MODE-SEALING-01
Correction: CORR-01 — EXISTING SUCCESSOR RESEAL / IMMUTABLE SUPERSESSION
Cycle: 8 — Delivery / implémentation
Profile: CRITICAL
Morris GO: CORR-01 AUTHORIZED inside the existing macro — consumed for local Product source/test work only
Project commit/push/PR/merge: **NOT performed / NOT authorized**
StudyFlow Product mutation: **NONE**
Managed clone mutation: **NONE**
Cursor REAL / Execute / Confirm / Attempt: **NONE**

---

## 1. GIT TRUTH

| Field | Value |
|-------|-------|
| Branch | `fix/sfia-studio-recovery-docs-write-mode-sealing-01` |
| HEAD | `cf1fa4ca139fdbdbf825e134e732f4e25b4c0aa0` |
| origin/main | `cf1fa4ca139fdbdbf825e134e732f4e25b4c0aa0` |
| Main moved | NO |
| Prior CORR-00 macro changes | RETAINED |
| Unrelated Product dirt | NONE (only `.tmp-sfia-review/**` local artifacts) |
| Project commit | **NONE** — LOCAL / NOT COMMITTED / NOT PUSHED |

Product paths touched (CORR-00 + CORR-01):

- `M` `projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts`
- `A` `projects/sfia-studio/app/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor.ts`
- `A` `projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts`
- `M` `projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts` (bounded write-mode match)
- `M` `projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts`
- `M` `projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts`
- `M` `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`

---

## 2. REVIEW FINDING (CORR-01 ROOT CAUSE)

CORR-00 correctly seals CREATE|UPDATE for a **fresh** recovery successor.

It did **not** safely repair the natural StudyFlow class:

1. canonical M3 PREPARE already `superseded`
2. recovery successor already exists, durable, `confirmed`
3. `inputs.artifactWriteMode` **absent**
4. Attempt failed pre-start with `ARTIFACT_WRITE_MODE_UNRESOLVED`
5. replaying recovery PREPARE must **not** silently reuse that incomplete successor

CORR-00 fall-through called `resolveM3ExecutionContract()`. With prepare already superseded, resolve entered the idempotent existing-successor path. `successorMatchesResolution()` compared action/target/scope/… but **not** `resolution.inputs` — so absent mode matched a sealed CREATE|UPDATE resolution and the incomplete successor was reused → Execute could fail again with `ARTIFACT_WRITE_MODE_UNRESOLVED`.

---

## 3. CANONICAL LIFECYCLE (SOURCE-VERIFIED)

Preserved / used:

- `projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/application/cancelExecutionContract.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/domain/types.ts`

Invariant: **confirmed ExecutionContract is immutable except supersession (T-A4).**

`SupersedeExecutionContract`:

- creates a **NEW** EC
- keeps old EC immutable and marks it `superseded`
- accepts prior confirmed/pre-exec EC
- refuses T-A5 prior statuses: `executing` | `completed` | `failed`
- requires explicit authority
- supports fresh inputs
- creates successor draft/proposed; existing validate → `confirmation_required` governance remains

**No in-place mutation of confirmed EC inputs.**

---

## 4. REPAIR CLASSIFICATION (A–E)

| Class | Condition | Behavior |
|-------|-----------|----------|
| A | no current successor | fresh seal + normal resolveM3 (CORR-00) |
| B | successor already CREATE\|UPDATE | idempotent reuse |
| C | confirmed/pre-exec tip, mode absent, deterministic pre-start UNRESOLVED proof | **CORR-01 repair** — fresh seal then T-A4 supersede |
| D | tip T-A5 (`executing`\|`completed`\|`failed`) | fail closed — no T-A4 |
| E | lineage / Attempt / failure class ambiguous | fail closed (`RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS`) |

UNKNOWN ≠ REPAIRABLE.

Coherence gates for CLASS C: same project, same HD, docs_write action/target exact, recovery binding coherent, prior Attempt terminal failed pre-start with no irreversible REAL process, EC supersedable, mode absent, targetPath coherent, current repo truth sealable.

---

## 5. IMPLEMENTATION

### New module

`repairIncompleteRecoveryDocsWriteSuccessor.ts`

- `classifyCurrentRecoveryDocsWriteSuccessor()` — continuity path + tip-scan (natural StudyFlow: continuity `none` after terminal Attempt)
- `hasDeterministicPreStartWriteModeFailure()` — failed Attempt, stopReason includes `ARTIFACT_WRITE_MODE_UNRESOLVED`, no REAL process invoked when irreversible flagged
- `repairIncompleteRecoveryDocsWriteSuccessor()` — **after** fresh seal only
- Repair id: `xct:m3-rwm-reseal:{safeDecisionSegment(decisionId)}`
- Idempotency key: `idem:m3-rwm-reseal:{decisionId}`
- Supersession reason: `w2_recovery_docs_write_mode_reseal — incomplete successor lacked sealed artifactWriteMode; supersede with current managed-repo CREATE|UPDATE`
- Validate → `confirmation_required`
- `executionPerformed: false`, `attemptCreated: false` — **NO Confirm / Execute / Attempt**

### Wire in prepare

`prepareDocsWriteRecoverySuccessorFromDecision()`:

1. classify first
2. CLASS B → reuse
3. CLASS D/E → fail closed
4. resolve trusted launch + **seal** (existing `sealRecoveryDocsWriteArtifactWriteMode`)
5. CLASS C → repair via supersession (**never** call resolveM3 on incomplete tip)
6. else → resolveM3 fresh path (CORR-00)

Critical: **do not supersede before fresh mode is safely resolved.** ASK / UNAVAILABLE leave incomplete `confirmed`.

### Bounded M3 match strengthen (§10)

`successorMatchesResolution()` now requires: when resolution seals `CREATE|UPDATE`, successor must carry the **same** mode (absent ≠ sealed). No unstable JSON stringify. Broader input comparison left as **explicit reserve**.

---

## 6. LINEAGE BEFORE / AFTER

Natural / StudyFlow-equivalent:

```
canonical M3 PREPARE (superseded)
  → incomplete recovery successor (confirmed, artifactWriteMode ABSENT, Attempt failed UNRESOLVED)
```

After CORR-01 prepare:

```
canonical M3 PREPARE (superseded)
  → incomplete recovery successor (superseded, artifactWriteMode still ABSENT — immutable)
    → repaired resealed successor (confirmation_required, CREATE|UPDATE, supersedes incomplete)
```

Repeated CORR-01 PREPARE → **same** repair id reused; no successor-of-successor chain growth.

---

## 7. CREATE / UPDATE / ASK / UNKNOWN

| Case | Result |
|------|--------|
| CORR01-R1 absent target | repair CREATE; old superseded; mode absent on old |
| CORR01-R2 exists + same-artifact Evidence | repair UPDATE |
| CORR01-R3 exists without proof | ASK fail-closed; incomplete **NOT** superseded |
| CORR01-R4 existence UNAVAILABLE | fail-closed; incomplete **NOT** superseded |

---

## 8. T-A5 / LINEAGE NEGATIVES

| Case | Result |
|------|--------|
| R5 status=failed | `TA5_STATUS_REFUSED` — no supersession |
| R6 status=executing | fail-closed (`TA5_STATUS_REFUSED` or `EXECUTION_CONTINUITY_UNSUPPORTED`) — no supersession |
| R7 different decisionRef | no repair; incomplete unchanged |
| R8 different project | `RECOVERY_SUCCESSOR_PROJECT_MISMATCH` |
| R9 non docs_write action | no repair |
| R10 ambiguous non-prestart Attempt | `RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS` |

---

## 9. IDEMPOTENCY / RESTART

- R11: first repair creates exactly one `xct:m3-rwm-reseal:*`; second prepare reuses same id (`reusedFromIdempotency`); history length 1
- Restart: durable re-read preserves `artifactWriteMode=CREATE`, `confirmation_required`, supersedes incomplete; no Execute / no Attempt

---

## 10. EXECUTION GUARD

`assertArtifactWriteModeAtExecution()` **UNCHANGED**.

Repaired CREATE + target absent → `ok: true` (not UNRESOLVED).

Retained: UNRESOLVED / ASK / existence unavailable / STALE_CREATE / STALE_UPDATE fail closed.

---

## 11. FRESH-PATH REGRESSION

All RWM-01…RWM-11 + StudyFlow-equivalent fresh sealing retained (14 RWM tests + 12 CORR-01 = 26 in file).

Also green: Checkpoint F, #524 recovery ownership suites, pjReproof05, importBoundaries.

---

## 12. VALIDATION

### Targeted

| Suite | Result |
|-------|--------|
| `recoveryDocsWriteModeSealing.d0.test.ts` | 26 / 26 pass |
| Checkpoint F + #524 ownership + corr02/03 + pjReproof05 + importBoundaries | 82 / 82 pass |

### Full

| Gate | Result |
|------|--------|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| Vitest | **431 files passed** · **17 skipped** · **4770 tests passed** · **137 skipped** · **0 failed** |
| modeled governance (`node --test` sfia-v3-modeled) | **73 / 0** |

Baseline before CORR-01: 4758 tests → +12 CORR-01 cases (4770).

---

## 13. FAKE / REAL

Natural StudyFlow evidence (prior read-only):

**REAL BOUNDARY REACHED / BUSINESS EFFECT FAILED / ARTIFACT_WRITE_MODE_UNRESOLVED**

This correction:

**EXISTING RECOVERY SUCCESSOR RESEAL / IMMUTABLE SUPERSESSION / DETERMINISTICALLY PROVEN**

NOT claimed:

- StudyFlow REAL success
- Cursor REAL success
- artifact written
- artifact Evidence REAL
- ReviewBundle REAL success
- E2E REAL
- Product READY
- runtime v3 ADOPTED

---

## 14. NORA GAP

`recommended_option_ref_only_on_recommendation`

**OPEN / NON-BLOCKING RESERVE / OUT OF SCOPE** — no Nora changes in CORR-01.

---

## 15. ANTI-CLAIMS

- StudyFlow SQLite: **NOT MUTATED**
- Managed clone: **NOT MUTATED**
- Project git: **LOCAL / NOT COMMITTED / NOT PUSHED**
- No HumanDecision / PREPARE against natural StudyFlow / Confirm / Execute / Attempt
- No doctrine / roadmap / C1 / architecture pivot
- No weakening of execution-time write-mode guard

---

## 16. FINAL VERDICT

**RECOVERY DOCS_WRITE MODE SEALING CORR-01 — EXISTING SUCCESSOR RESEAL VIA IMMUTABLE SUPERSESSION / DETERMINISTICALLY PROVEN / READY FOR CHATGPT RE-REVIEW**

---

## 17. EXACT SOURCE DIFFS (FULL)

### 17.1 prepareDocsWriteRecoverySuccessor.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
index e3d7535b..7274ce40 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
@@ -2,9 +2,14 @@
  * Checkpoint F / R8 — prepare + resolve a bounded docs_write successor EC from
  * a coherent RecoveryExecutionBinding after recovery trajectory HD.
  *
+ * RECOVERY-DOCS-WRITE-MODE-SEALING-01 — seals artifactWriteMode from CURRENT
+ * trusted managed-repo existence + durable same-deliverable Evidence before
+ * the successor becomes executable. Does NOT weaken execution-time TOCTOU.
+ *
  * Does NOT mutate HumanDecision. Does NOT Execute. Does NOT create Attempts.
  * Clears wrong pre-exec generic EC via Cancel (existing pre-exec lifecycle).
  */
+import path from "node:path";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import type { F2ContextSnapshot } from "@/features/project-assistant/f2/types";
 import {
@@ -16,6 +21,12 @@ import {
   M4_BOUNDED_DOCS_WRITE_CAPABILITY,
   M4_BOUNDED_DOCS_WRITE_TARGET,
 } from "@/lib/oa/execution-attempt";
+import {
+  classifyArtifactWriteMode,
+  hasDurableSameArtifactEvidence,
+} from "@/lib/oa/project/domain/artifactTargetRouting";
+import { probeManagedRepoRelativePathExists } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import { projectExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
 import {
   launchContextAsContractInputs,
   resolveTrustedProductLaunchContext,
@@ -35,8 +46,128 @@ import {
   resolveRecoveryExecutionBinding,
   type RecoveryExecutionBinding,
 } from "./resolveRecoveryExecutionBinding";
+import {
+  classifyCurrentRecoveryDocsWriteSuccessor,
+  repairIncompleteRecoveryDocsWriteSuccessor,
+} from "./repairIncompleteRecoveryDocsWriteSuccessor";
 import type { AmendedExecutionContractDto } from "./types";

+export type SealRecoveryDocsWriteArtifactWriteModeResult =
+  | {
+      readonly ok: true;
+      readonly artifactWriteMode: "CREATE" | "UPDATE";
+      readonly targetExists: boolean;
+    }
+  | { readonly ok: false; readonly code: string; readonly message: string };
+
+/**
+ * Seal CREATE|UPDATE for a recovery docs_write successor from CURRENT
+ * managed-repo truth + durable Evidence. Historical source EC mode is ignored.
+ */
+export async function sealRecoveryDocsWriteArtifactWriteMode(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly targetPath: string;
+  readonly repositoryBindingIdentity: string;
+  readonly managedRepoRoot: string | null;
+}): Promise<SealRecoveryDocsWriteArtifactWriteModeResult> {
+  const targetPath = input.targetPath.trim();
+  if (!targetPath) {
+    return {
+      ok: false,
+      code: "TARGET_PATH_REQUIRED",
+      message:
+        "targetPath absent — mode écriture recovery impossible à sceller.",
+    };
+  }
+  const identity = input.repositoryBindingIdentity.trim();
+  if (!identity) {
+    return {
+      ok: false,
+      code: "REPOSITORY_BINDING_REQUIRED",
+      message:
+        "Identité dépôt projet absente — mode écriture recovery fail-closed.",
+    };
+  }
+  const managedRepoRoot = input.managedRepoRoot?.trim() || null;
+  if (!managedRepoRoot) {
+    return {
+      ok: false,
+      code: "ARTIFACT_WRITE_MODE_EXISTENCE_UNAVAILABLE",
+      message:
+        "Clone géré indisponible — fait d'existence UNKNOWN ≠ ABSENT; mode non scellable.",
+    };
+  }
+
+  const managedRepoRootBase = path.dirname(managedRepoRoot);
+  const targetExists = probeManagedRepoRelativePathExists({
+    identity,
+    repoRelativePath: targetPath,
+    managedRepoRootBase,
+  });
+  if (targetExists === null) {
+    return {
+      ok: false,
+      code: "ARTIFACT_WRITE_MODE_EXISTENCE_UNAVAILABLE",
+      message:
+        "Fait d'existence cible indisponible — mode écriture recovery fail-closed.",
+    };
+  }
+
+  let intentClearlySameDeliverable: boolean | undefined;
+  if (targetExists === true) {
+    if (!input.oa.evidenceReviewServices) {
+      return {
+        ok: false,
+        code: "EVIDENCE_SERVICES_UNAVAILABLE",
+        message:
+          "Services Evidence indisponibles — same-deliverable non prouvable; UPDATE refusé.",
+      };
+    }
+    let evidenceList: Awaited<
+      ReturnType<
+        typeof input.oa.evidenceReviewServices.repository.listByProject
+      >
+    >;
+    try {
+      evidenceList =
+        await input.oa.evidenceReviewServices.repository.listByProject(
+          input.projectId,
+        );
+    } catch {
+      return {
+        ok: false,
+        code: "EVIDENCE_READ_FAILED",
+        message:
+          "Lecture Evidence échouée — same-deliverable non prouvable; UPDATE refusé.",
+      };
+    }
+    intentClearlySameDeliverable = hasDurableSameArtifactEvidence({
+      projectId: input.projectId,
+      targetPath,
+      evidence: evidenceList,
+    });
+  }
+
+  const artifactWriteMode = classifyArtifactWriteMode({
+    targetExists,
+    intentClearlySameDeliverable,
+  });
+  if (artifactWriteMode !== "CREATE" && artifactWriteMode !== "UPDATE") {
+    return {
+      ok: false,
+      code: "ARTIFACT_WRITE_MODE_ASK",
+      message:
+        "Mode écriture ASK — successor recovery non exécutable (preuve same-deliverable insuffisante).",
+    };
+  }
+
+  return {
+    ok: true,
+    artifactWriteMode,
+    targetExists,
+  };
+}
 export const RECOVERY_WRONG_GENERIC_CANCEL_REASON =
   "w2_recovery_docs_write_reprepare — clear unconsumed generic fixture EC before docs_write successor" as const;

@@ -52,6 +183,8 @@ export type PrepareDocsWriteRecoverySuccessorResult =
       readonly executionPerformed: false;
       readonly attemptCreated: false;
       readonly confirmationRequired: true;
+      /** CORR-01 — set when an incomplete successor was superseded. */
+      readonly repairedFromExecutionContractId?: string;
     }
   | { readonly ok: false; readonly code: string; readonly message: string };

@@ -226,19 +359,36 @@ export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {

   const prepareId = canonicalM3PrepareContractId(input.decisionId);

-  // Idempotent reuse: current docs_write already linked to this recovery HD.
+  // Classify current recovery docs_write successor before any resolve/reuse.
   const continuityBefore = await readCurrentGovernedExecutionContinuity({
     oa,
     projectId: input.projectId,
   });
-  if (
-    continuityBefore.ok &&
-    continuityBefore.kind === "active" &&
-    continuityBefore.decisionRef === input.decisionId &&
-    continuityBefore.contract.action === M4_BOUNDED_DOCS_WRITE_ACTION &&
-    continuityBefore.contract.target === M4_BOUNDED_DOCS_WRITE_TARGET
-  ) {
-    const c = continuityBefore.contract;
+  if (!continuityBefore.ok) {
+    return {
+      ok: false,
+      code: continuityBefore.code,
+      message: continuityBefore.message,
+    };
+  }
+  const classified = await classifyCurrentRecoveryDocsWriteSuccessor({
+    oa,
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    continuityDecisionRef:
+      continuityBefore.kind === "active" ? continuityBefore.decisionRef : null,
+    continuityContract:
+      continuityBefore.kind === "active" ? continuityBefore.contract : null,
+  });
+  if (classified.kind === "ta5_refused" || classified.kind === "refused") {
+    return {
+      ok: false,
+      code: classified.code,
+      message: classified.message,
+    };
+  }
+  if (classified.kind === "sealed_reuse") {
+    const c = classified.contract;
     return {
       ok: true,
       decisionId: input.decisionId,
@@ -256,10 +406,11 @@ export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
         stopConditions: [...c.stopConditions],
         requiredCapabilities: [...c.requiredCapabilities],
         reversibility: c.reversibility,
-        semanticFingerprint: c.semanticFingerprint,
-        supersedesExecutionContractId: null,
-        supersessionReason: null,
-        inspectionDisclosure: c.inspectionDisclosure,
+        semanticFingerprint: c.semanticFingerprint ?? "",
+        supersedesExecutionContractId: c.supersedesExecutionContractId ?? null,
+        supersessionReason: c.supersessionReason ?? null,
+        inspectionDisclosure:
+          projectExecutionContractInspectionDisclosure(c).disclosure,
       },
       cancelledWrongGenericContractId: null,
       reusedFromIdempotency: true,
@@ -268,6 +419,8 @@ export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
       confirmationRequired: true,
     };
   }
+  const incompleteRepairable =
+    classified.kind === "incomplete_repairable" ? classified.contract : null;

   const cleared = await cancelWrongGenericCurrentIfNeeded({
     oa,
@@ -294,8 +447,12 @@ export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
     });

   const profile = boundedDocsWriteM3ResolutionProfile();
-  const inputs = {
-    ...binding.inputs,
+  // Historical source artifactWriteMode is never authoritative for a retry.
+  const { artifactWriteMode: _staleSourceMode, ...clonedBusinessInputs } =
+    binding.inputs;
+  void _staleSourceMode;
+  const inputs: Record<string, unknown> = {
+    ...clonedBusinessInputs,
     targetPath: binding.targetPath,
   };

@@ -431,18 +588,53 @@ export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
     };
   }

+  const sealedMode = await sealRecoveryDocsWriteArtifactWriteMode({
+    oa,
+    projectId: input.projectId,
+    targetPath: binding.targetPath,
+    repositoryBindingIdentity: launch.context.repositoryBindingIdentity,
+    managedRepoRoot: launch.context.managedRepoRoot,
+  });
+  if (!sealedMode.ok) {
+    return {
+      ok: false,
+      code: sealedMode.code,
+      message: sealedMode.message,
+    };
+  }
+
+  const sealedInputs: Record<string, unknown> = {
+    ...(profile.inputs ?? {}),
+    ...inputs,
+    ...trustedInputs,
+    baseHeadSha: sha,
+    artifactWriteMode: sealedMode.artifactWriteMode,
+    ...(trustedLaunchPinned
+      ? { trustedLaunchContextPinnedAtPrepare: "true" }
+      : {}),
+  };
+
+  // CORR-01 CLASS C — incomplete confirmed/pre-exec successor: reseal via
+  // immutable supersession. Do NOT call resolveM3 (would silently reuse).
+  if (incompleteRepairable) {
+    return repairIncompleteRecoveryDocsWriteSuccessor({
+      oa,
+      projectId: input.projectId,
+      decisionId: input.decisionId,
+      incomplete: incompleteRepairable,
+      binding,
+      sealedMode: sealedMode.artifactWriteMode,
+      sealedInputs,
+      evidenceRequirements: evidenceFromSource,
+      authorityEvidenceId: authority.evidenceId,
+      cancelledWrongGenericContractId: cleared.cancelledId,
+    });
+  }
+
   const resolution = {
     ...profile,
     evidenceRequirements: evidenceFromSource,
-    inputs: {
-      ...(profile.inputs ?? {}),
-      ...inputs,
-      ...trustedInputs,
-      baseHeadSha: sha,
-      ...(trustedLaunchPinned
-        ? { trustedLaunchContextPinnedAtPrepare: "true" }
-        : {}),
-    },
+    inputs: sealedInputs,
   };

   const resolved = await resolveM3ExecutionContract({
```

### 17.2 repairIncompleteRecoveryDocsWriteSuccessor.ts (NEW)
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor.ts b/projects/sfia-studio/app/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor.ts
new file mode 100644
index 00000000..6217c243
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor.ts
@@ -0,0 +1,601 @@
+/**
+ * CORR-01 — reseal an incomplete recovery docs_write successor via immutable
+ * ExecutionContract supersession (never mutate confirmed EC inputs in place).
+ */
+import {
+  LOCAL_PILOTE_ACTOR,
+} from "@/lib/oa/decision";
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+  M4_BOUNDED_DOCS_WRITE_TARGET,
+} from "@/lib/oa/execution-attempt";
+import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import { projectExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract";
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import {
+  canonicalM3PrepareContractId,
+  safeDecisionSegment,
+} from "@/features/project-assistant/f3/resolveM3ExecutionContract";
+import type { RecoveryExecutionBinding } from "./resolveRecoveryExecutionBinding";
+import type { AmendedExecutionContractDto } from "./types";
+
+export const RECOVERY_WRITE_MODE_RESEAL_SUPERSESSION_REASON =
+  "w2_recovery_docs_write_mode_reseal — incomplete successor lacked sealed artifactWriteMode; supersede with current managed-repo CREATE|UPDATE" as const;
+
+export function canonicalRecoveryWriteModeResealSuccessorId(
+  decisionId: string,
+): string {
+  return `xct:m3-rwm-reseal:${safeDecisionSegment(decisionId)}`;
+}
+
+export function canonicalRecoveryWriteModeResealIdempotencyKey(
+  decisionId: string,
+): string {
+  return `idem:m3-rwm-reseal:${decisionId}`;
+}
+
+const PRE_EXEC_SUPERSEDABLE = new Set([
+  "draft",
+  "proposed",
+  "validated",
+  "confirmation_required",
+  "confirmed",
+]);
+
+const TA5_STATUSES = new Set(["executing", "completed", "failed"]);
+
+export function isSealedArtifactWriteMode(
+  mode: unknown,
+): mode is "CREATE" | "UPDATE" {
+  return mode === "CREATE" || mode === "UPDATE";
+}
+
+export async function hasDeterministicPreStartWriteModeFailure(input: {
+  readonly oa: RuntimeOaStack;
+  readonly executionContractId: string;
+}): Promise<boolean> {
+  if (!input.oa.executionAttemptServices) return false;
+  const listed =
+    await input.oa.executionAttemptServices.listExecutionAttempts.execute({
+      executionContractId: input.executionContractId,
+    });
+  if (!listed.ok || listed.attempts.length === 0) return false;
+  return listed.attempts.some((attempt) => {
+    if (attempt.status !== "failed") return false;
+    const stop = String(
+      (attempt as { stopReason?: unknown }).stopReason ?? "",
+    );
+    if (!stop.includes("ARTIFACT_WRITE_MODE_UNRESOLVED")) return false;
+    const irreversible = (attempt as { irreversibleEffectsPossible?: unknown })
+      .irreversibleEffectsPossible;
+    if (irreversible === true) {
+      const diag = (
+        attempt as {
+          processDiagnostic?: { realProcessInvoked?: unknown };
+        }
+      ).processDiagnostic;
+      // Pre-start UNRESOLVED rejects before REAL process; allow when not invoked.
+      if (diag?.realProcessInvoked === true) return false;
+    }
+    return true;
+  });
+}
+
+export type CurrentRecoverySuccessorClass =
+  | { readonly kind: "none" }
+  | { readonly kind: "sealed_reuse"; readonly contract: ExecutionContract }
+  | {
+      readonly kind: "incomplete_repairable";
+      readonly contract: ExecutionContract;
+    }
+  | {
+      readonly kind: "ta5_refused";
+      readonly code: "TA5_STATUS_REFUSED";
+      readonly message: string;
+      readonly status: string;
+    }
+  | {
+      readonly kind: "refused";
+      readonly code: string;
+      readonly message: string;
+    };
+
+export async function classifyCurrentRecoveryDocsWriteSuccessor(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly decisionId: string;
+  readonly continuityDecisionRef: string | null;
+  readonly continuityContract: {
+    readonly executionContractId: string;
+    readonly action: string;
+    readonly target: string;
+    readonly status: string;
+  } | null;
+}): Promise<CurrentRecoverySuccessorClass> {
+  // Path 1 — continuity still sees a pre-execution current contract.
+  if (input.continuityContract) {
+    if (input.continuityDecisionRef !== input.decisionId) {
+      return {
+        kind: "refused",
+        code: "RECOVERY_SUCCESSOR_DECISION_MISMATCH",
+        message:
+          "Le contrat courant appartient à une autre HumanDecision — repair write-mode refusé.",
+      };
+    }
+    const summary = input.continuityContract;
+    if (
+      summary.action !== M4_BOUNDED_DOCS_WRITE_ACTION ||
+      summary.target !== M4_BOUNDED_DOCS_WRITE_TARGET
+    ) {
+      // Fall through to tip-scan — recovery incomplete may be post-Attempt.
+    } else if (TA5_STATUSES.has(summary.status)) {
+      return {
+        kind: "ta5_refused",
+        code: "TA5_STATUS_REFUSED",
+        status: summary.status,
+        message: `Successor recovery en statut T-A5 (${summary.status}) — supersession T-A4 refusée; nouvelle HumanDecision recovery requise.`,
+      };
+    } else {
+      const fromContinuity = await classifyDurableCandidate({
+        oa: input.oa,
+        projectId: input.projectId,
+        decisionId: input.decisionId,
+        executionContractId: summary.executionContractId,
+        requirePreStartFailure: false,
+      });
+      if (fromContinuity.kind !== "none") return fromContinuity;
+    }
+  }
+
+  // Path 2 — natural StudyFlow class: confirmed incomplete successor already has
+  // a terminal failed Attempt, so continuity kind=none. Scan tip lineage.
+  return findIncompleteRecoverySuccessorTip({
+    oa: input.oa,
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+  });
+}
+
+async function classifyDurableCandidate(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly decisionId: string;
+  readonly executionContractId: string;
+  readonly requirePreStartFailure: boolean;
+}): Promise<CurrentRecoverySuccessorClass> {
+  if (!input.oa.executionContractServices) {
+    return {
+      kind: "refused",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services EC indisponibles.",
+    };
+  }
+  const durable =
+    await input.oa.executionContractServices.getExecutionContract.execute({
+      executionContractId: input.executionContractId,
+    });
+  if (!durable.ok) {
+    return {
+      kind: "refused",
+      code: durable.error.detailCode,
+      message: durable.error.message,
+    };
+  }
+  const contract = durable.contract;
+  if (contract.projectId !== input.projectId) {
+    return {
+      kind: "refused",
+      code: "RECOVERY_SUCCESSOR_PROJECT_MISMATCH",
+      message: "Successor recovery hors projet courant — repair refusé.",
+    };
+  }
+  if (
+    contract.action !== M4_BOUNDED_DOCS_WRITE_ACTION ||
+    contract.target !== M4_BOUNDED_DOCS_WRITE_TARGET
+  ) {
+    return { kind: "none" };
+  }
+  if (TA5_STATUSES.has(contract.status)) {
+    return {
+      kind: "ta5_refused",
+      code: "TA5_STATUS_REFUSED",
+      status: contract.status,
+      message: `Successor recovery en statut T-A5 (${contract.status}) — supersession T-A4 refusée; nouvelle HumanDecision recovery requise.`,
+    };
+  }
+  if (!PRE_EXEC_SUPERSEDABLE.has(contract.status)) {
+    return {
+      kind: "refused",
+      code: "RECOVERY_SUCCESSOR_NOT_SUPERSEDABLE",
+      message: `Successor recovery statut ${contract.status} non supersedable pour reseal.`,
+    };
+  }
+  const refs = contract.decisionRefs ?? [];
+  if (!refs.includes(input.decisionId)) {
+    return {
+      kind: "refused",
+      code: "RECOVERY_SUCCESSOR_DECISION_MISMATCH",
+      message:
+        "Successor recovery non rattaché à la HumanDecision courante — repair refusé.",
+    };
+  }
+  const tip =
+    await input.oa.executionContractServices.contracts.listSuperseding(
+      contract.executionContractId,
+    );
+  if (tip.length > 0) {
+    return { kind: "none" };
+  }
+  if (isSealedArtifactWriteMode(contract.inputs?.artifactWriteMode)) {
+    return { kind: "sealed_reuse", contract };
+  }
+  const preStart = await hasDeterministicPreStartWriteModeFailure({
+    oa: input.oa,
+    executionContractId: contract.executionContractId,
+  });
+  if (!preStart) {
+    if (input.requirePreStartFailure) {
+      return {
+        kind: "refused",
+        code: "RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS",
+        message:
+          "Successor sans artifactWriteMode mais Attempt pre-start UNRESOLVED non prouvé — repair fail-closed.",
+      };
+    }
+    // Continuity path may see incomplete before Attempt exists (tests) —
+    // still refuse ambiguous repair without proof.
+    return {
+      kind: "refused",
+      code: "RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS",
+      message:
+        "Successor sans artifactWriteMode mais Attempt pre-start UNRESOLVED non prouvé — repair fail-closed.",
+    };
+  }
+  return { kind: "incomplete_repairable", contract };
+}
+
+async function findIncompleteRecoverySuccessorTip(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly decisionId: string;
+}): Promise<CurrentRecoverySuccessorClass> {
+  if (!input.oa.executionContractServices) {
+    return {
+      kind: "refused",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services EC indisponibles.",
+    };
+  }
+  const listed =
+    await input.oa.executionContractServices.listExecutionContractHistory.execute(
+      {
+        projectId: input.projectId,
+      },
+    );
+  if (!listed.ok) {
+    return {
+      kind: "refused",
+      code: listed.error.detailCode,
+      message: listed.error.message,
+    };
+  }
+
+  const candidates: ExecutionContract[] = [];
+  for (const contract of listed.contracts) {
+    if (contract.projectId !== input.projectId) continue;
+    if (
+      contract.action !== M4_BOUNDED_DOCS_WRITE_ACTION ||
+      contract.target !== M4_BOUNDED_DOCS_WRITE_TARGET
+    ) {
+      continue;
+    }
+    if (!(contract.decisionRefs ?? []).includes(input.decisionId)) continue;
+    const superseding =
+      await input.oa.executionContractServices.contracts.listSuperseding(
+        contract.executionContractId,
+      );
+    if (superseding.length > 0) continue;
+
+    // CLASS D — tip is T-A5: never T-A4 supersede for write-mode reseal.
+    if (TA5_STATUSES.has(contract.status)) {
+      return {
+        kind: "ta5_refused",
+        code: "TA5_STATUS_REFUSED",
+        status: contract.status,
+        message: `Successor recovery en statut T-A5 (${contract.status}) — supersession T-A4 refusée; nouvelle HumanDecision recovery requise.`,
+      };
+    }
+
+    if (!PRE_EXEC_SUPERSEDABLE.has(contract.status)) continue;
+    if (isSealedArtifactWriteMode(contract.inputs?.artifactWriteMode)) continue;
+    const preStart = await hasDeterministicPreStartWriteModeFailure({
+      oa: input.oa,
+      executionContractId: contract.executionContractId,
+    });
+    if (!preStart) {
+      // CLASS E — incomplete tip without deterministic pre-start proof.
+      return {
+        kind: "refused",
+        code: "RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS",
+        message:
+          "Successor sans artifactWriteMode mais Attempt pre-start UNRESOLVED non prouvé — repair fail-closed.",
+      };
+    }
+    candidates.push(contract);
+  }
+
+  if (candidates.length === 0) return { kind: "none" };
+  if (candidates.length > 1) {
+    return {
+      kind: "refused",
+      code: "RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS",
+      message:
+        "Plusieurs successors incomplets repairables — fail-closed.",
+    };
+  }
+  return { kind: "incomplete_repairable", contract: candidates[0]! };
+}
+
+function toAmendedDto(contract: ExecutionContract): AmendedExecutionContractDto {
+  const disclosure =
+    projectExecutionContractInspectionDisclosure(contract).disclosure;
+  return {
+    executionContractId: contract.executionContractId,
+    version: contract.version,
+    status: contract.status,
+    action: contract.action,
+    target: contract.target,
+    scope: contract.scope,
+    requiredAuthority: contract.requiredAuthority,
+    constraints: [...contract.constraints],
+    stopConditions: [...contract.stopConditions],
+    requiredCapabilities: [...contract.requiredCapabilities],
+    reversibility: contract.reversibility,
+    semanticFingerprint: contract.semanticFingerprint ?? "",
+    supersedesExecutionContractId:
+      contract.supersedesExecutionContractId ?? null,
+    supersessionReason: contract.supersessionReason ?? null,
+    inspectionDisclosure: disclosure,
+  };
+}
+
+async function loadValidatedRepairSuccessor(input: {
+  readonly oa: RuntimeOaStack;
+  readonly repairId: string;
+  readonly incompleteId: string;
+  readonly expectedMode: "CREATE" | "UPDATE";
+  readonly authorityEvidenceId: string;
+}): Promise<
+  | { readonly ok: true; readonly successor: ExecutionContract }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  const loaded =
+    await input.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: input.repairId,
+    });
+  if (!loaded.ok) {
+    return {
+      ok: false,
+      code: loaded.error.detailCode,
+      message: loaded.error.message,
+    };
+  }
+  let successor = loaded.contract;
+  if (successor.supersedesExecutionContractId !== input.incompleteId) {
+    return {
+      ok: false,
+      code: "RECOVERY_RESEAL_LINEAGE_MISMATCH",
+      message:
+        "Successeur reseal existant ne supersède pas le successor incomplet attendu.",
+    };
+  }
+  if (successor.inputs?.artifactWriteMode !== input.expectedMode) {
+    return {
+      ok: false,
+      code: "RECOVERY_RESEAL_MODE_DRIFT",
+      message:
+        "Successeur reseal mode ≠ current repository seal — fail-closed.",
+    };
+  }
+  if (successor.status === "draft" || successor.status === "proposed") {
+    const validated =
+      await input.oa.executionContractServices!.validateExecutionContract.execute(
+        {
+          executionContractId: successor.executionContractId,
+          actor: LOCAL_PILOTE_ACTOR,
+          authorityEvidenceId: input.authorityEvidenceId,
+        },
+      );
+    if (!validated.ok) {
+      return {
+        ok: false,
+        code: validated.error.detailCode,
+        message: validated.error.message,
+      };
+    }
+    successor = validated.contract;
+  }
+  return { ok: true, successor };
+}
+
+export type RepairIncompleteRecoverySuccessorResult =
+  | {
+      readonly ok: true;
+      readonly decisionId: string;
+      readonly binding: RecoveryExecutionBinding;
+      readonly prepareContractId: string;
+      readonly successor: AmendedExecutionContractDto;
+      readonly cancelledWrongGenericContractId: string | null;
+      readonly reusedFromIdempotency: boolean;
+      readonly executionPerformed: false;
+      readonly attemptCreated: false;
+      readonly confirmationRequired: true;
+      readonly repairedFromExecutionContractId: string;
+    }
+  | { readonly ok: false; readonly code: string; readonly message: string };
+
+/**
+ * Seal already resolved → supersede incomplete successor → validate to
+ * confirmation_required. Idempotent on the deterministic repair id.
+ */
+export async function repairIncompleteRecoveryDocsWriteSuccessor(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly decisionId: string;
+  readonly incomplete: ExecutionContract;
+  readonly binding: RecoveryExecutionBinding;
+  readonly sealedMode: "CREATE" | "UPDATE";
+  readonly sealedInputs: Record<string, unknown>;
+  readonly evidenceRequirements: readonly string[];
+  readonly authorityEvidenceId: string;
+  readonly cancelledWrongGenericContractId: string | null;
+}): Promise<RepairIncompleteRecoverySuccessorResult> {
+  const { oa, incomplete } = input;
+  if (!oa.executionContractServices) {
+    return {
+      ok: false,
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services EC indisponibles.",
+    };
+  }
+
+  const repairId = canonicalRecoveryWriteModeResealSuccessorId(input.decisionId);
+  const idempotencyKey = canonicalRecoveryWriteModeResealIdempotencyKey(
+    input.decisionId,
+  );
+  const prepareContractId = canonicalM3PrepareContractId(input.decisionId);
+
+  const existing = await oa.executionContractServices.getExecutionContract.execute({
+    executionContractId: repairId,
+  });
+  if (existing.ok) {
+    const loaded = await loadValidatedRepairSuccessor({
+      oa,
+      repairId,
+      incompleteId: incomplete.executionContractId,
+      expectedMode: input.sealedMode,
+      authorityEvidenceId: input.authorityEvidenceId,
+    });
+    if (!loaded.ok) return loaded;
+    return {
+      ok: true,
+      decisionId: input.decisionId,
+      binding: input.binding,
+      prepareContractId,
+      successor: toAmendedDto(loaded.successor),
+      cancelledWrongGenericContractId: input.cancelledWrongGenericContractId,
+      reusedFromIdempotency: true,
+      executionPerformed: false,
+      attemptCreated: false,
+      confirmationRequired: true,
+      repairedFromExecutionContractId: incomplete.executionContractId,
+    };
+  }
+
+  const successorConstraints = Array.from(
+    new Set(
+      [...incomplete.constraints].filter(
+        (c) =>
+          c !== "PREPARE_ONLY" &&
+          c !== "NO_CURSOR_REAL" &&
+          c !== "NO_ATTEMPT" &&
+          c !== "NO_GATE_D" &&
+          c !== "NO_ATTEMPT_AT_PREPARE",
+      ),
+    ),
+  );
+
+  const superseded =
+    await oa.executionContractServices.supersedeExecutionContract.execute({
+      newExecutionContractId: repairId,
+      supersedesExecutionContractId: incomplete.executionContractId,
+      supersessionReason: RECOVERY_WRITE_MODE_RESEAL_SUPERSESSION_REASON,
+      actor: LOCAL_PILOTE_ACTOR,
+      authorityEvidenceId: input.authorityEvidenceId,
+      expectedVersion: incomplete.version,
+      action: M4_BOUNDED_DOCS_WRITE_ACTION,
+      target: M4_BOUNDED_DOCS_WRITE_TARGET,
+      scope: incomplete.scope,
+      decisionRefs: [input.decisionId],
+      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
+      requiredAuthority: "N2",
+      constraints: successorConstraints,
+      stopConditions: [...incomplete.stopConditions],
+      evidenceRequirements: [...input.evidenceRequirements],
+      reversibility: incomplete.reversibility,
+      expectedOutputs:
+        incomplete.expectedOutputs && incomplete.expectedOutputs.length > 0
+          ? [...incomplete.expectedOutputs]
+          : input.binding.expectedOutputs.length > 0
+            ? [...input.binding.expectedOutputs]
+            : undefined,
+      inputs: {
+        ...(incomplete.inputs ?? {}),
+        ...input.sealedInputs,
+        artifactWriteMode: input.sealedMode,
+      },
+      idempotencyKey,
+      correlationId: `cor:m3-rwm-reseal:${input.decisionId}`,
+      status: "draft",
+    });
+
+  if (!superseded.ok) {
+    if (superseded.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
+      const raced = await loadValidatedRepairSuccessor({
+        oa,
+        repairId,
+        incompleteId: incomplete.executionContractId,
+        expectedMode: input.sealedMode,
+        authorityEvidenceId: input.authorityEvidenceId,
+      });
+      if (!raced.ok) return raced;
+      return {
+        ok: true,
+        decisionId: input.decisionId,
+        binding: input.binding,
+        prepareContractId,
+        successor: toAmendedDto(raced.successor),
+        cancelledWrongGenericContractId: input.cancelledWrongGenericContractId,
+        reusedFromIdempotency: true,
+        executionPerformed: false,
+        attemptCreated: false,
+        confirmationRequired: true,
+        repairedFromExecutionContractId: incomplete.executionContractId,
+      };
+    }
+    return {
+      ok: false,
+      code: superseded.error.detailCode,
+      message: superseded.error.message,
+    };
+  }
+
+  const validated =
+    await oa.executionContractServices.validateExecutionContract.execute({
+      executionContractId: repairId,
+      actor: LOCAL_PILOTE_ACTOR,
+      authorityEvidenceId: input.authorityEvidenceId,
+    });
+  if (!validated.ok) {
+    return {
+      ok: false,
+      code: validated.error.detailCode,
+      message: validated.error.message,
+    };
+  }
+
+  return {
+    ok: true,
+    decisionId: input.decisionId,
+    binding: input.binding,
+    prepareContractId,
+    successor: toAmendedDto(validated.contract),
+    cancelledWrongGenericContractId: input.cancelledWrongGenericContractId,
+    reusedFromIdempotency: false,
+    executionPerformed: false,
+    attemptCreated: false,
+    confirmationRequired: true,
+    repairedFromExecutionContractId: incomplete.executionContractId,
+  };
+}
```

### 17.3 resolveM3ExecutionContract.ts (bounded write-mode match)
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
index 3b2b5955..52165161 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
@@ -377,6 +377,14 @@ function successorMatchesResolution(
     resolution.evidenceRequirements === undefined ||
     [...contract.evidenceRequirements].join("\0") ===
       [...resolution.evidenceRequirements].join("\0");
+  // CORR-01 — execution-significant write mode must not drift silently.
+  // When resolution seals CREATE|UPDATE, an absent/ASK/other mode is NOT equivalent.
+  const wantMode = resolution.inputs?.artifactWriteMode;
+  const haveMode = contract.inputs?.artifactWriteMode;
+  const writeModeOk =
+    wantMode !== "CREATE" && wantMode !== "UPDATE"
+      ? true
+      : haveMode === wantMode;
   return (
     contract.action === resolution.action.trim() &&
     contract.target === resolution.target.trim() &&
@@ -386,6 +394,7 @@ function successorMatchesResolution(
     [...contract.constraints].join("\0") === constraints.join("\0") &&
     [...contract.stopConditions].join("\0") === stopConditions.join("\0") &&
     evidenceOk &&
+    writeModeOk &&
     (resolution.executionWindowClass === undefined ||
       contract.executionWindowClass === resolution.executionWindowClass)
   );
```

### 17.4 recoveryDocsWriteModeSealing.d0.test.ts (NEW — RWM + CORR-01)
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts
new file mode 100644
index 00000000..8c8e3431
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts
@@ -0,0 +1,1332 @@
+/**
+ * RECOVERY-DOCS-WRITE-MODE-SEALING-01 — RWM-01…11 + StudyFlow-equivalent.
+ * ZERO REAL / ZERO StudyFlow Product mutation.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+  M4_BOUNDED_DOCS_WRITE_TARGET,
+} from "@/lib/oa/execution-attempt";
+import {
+  LOCAL_PILOTE_ACTOR,
+  registerLocalMorrisGateAuthority,
+} from "@/lib/oa/decision";
+import type { Digest } from "@/lib/oa/doctrine";
+import { assertArtifactWriteModeAtExecution } from "@/lib/oa/project/domain/artifactTargetRouting";
+import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
+import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
+import {
+  prepareDocsWriteRecoverySuccessorFromDecision,
+  sealRecoveryDocsWriteArtifactWriteMode,
+} from "@/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor";
+import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
+import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
+import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
+import { materializeProductOutcomeFromAttempt } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
+import { w3bEvidenceIdentity } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
+import { w3cRecommendationEpistemicId } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
+import { serializeW3cRecommendationPayload } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
+import type { W3cRecommendationPayload } from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
+import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
+import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "@/features/project-assistant/f3/systemFactualWriter";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  currentF2Context,
+  seedQualifiedProject,
+  tempProductDbPath,
+  W2_TEST_PINNED_BASE_HEAD_SHA,
+} from "./w2Harness";
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+
+/** StudyFlow-shaped natural target (deterministic, not the live campaign DB). */
+const STUDYFLOW_TARGET =
+  "projects/studyflow/01-cadrage/note-de-cadrage.md";
+
+const DIGEST_SEED =
+  "sha256:dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" as Digest;
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
+  vi.restoreAllMocks();
+});
+
+function managedRepoRootForIdentity(identity: string): string {
+  const base = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!;
+  return path.join(base, identity.replace("/", "__"));
+}
+
+function writeManagedTarget(identity: string, rel: string, body: string) {
+  const abs = path.join(managedRepoRootForIdentity(identity), rel);
+  fs.mkdirSync(path.dirname(abs), { recursive: true });
+  fs.writeFileSync(abs, body, "utf8");
+  return abs;
+}
+
+function removeManagedTarget(identity: string, rel: string) {
+  const abs = path.join(managedRepoRootForIdentity(identity), rel);
+  fs.rmSync(abs, { force: true });
+}
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
+  return { proposed, decided, decisionId: decided.decision.decisionId };
+}
+
+async function seedFailedDocsWriteEpisode(input: {
+  oa: RuntimeOaStack;
+  projectId: string;
+  cycleInstanceId?: string | null;
+  decisionId: string;
+  targetPath?: string;
+  /** Intentionally stale / wrong historical mode on the failed source EC. */
+  sourceArtifactWriteMode?: "CREATE" | "UPDATE" | null;
+}) {
+  const { oa, projectId, decisionId } = input;
+  const targetPath = input.targetPath ?? STUDYFLOW_TARGET;
+  const attemptId = `xat:w3a:rwm-${Math.random().toString(16).slice(2, 10)}`;
+  const ecId = `xct:m3-ev:rwm-${Math.random().toString(16).slice(2, 10)}`;
+  const ids = w3bEvidenceIdentity(attemptId);
+
+  const authority = registerLocalMorrisGateAuthority({
+    authorityResolver: oa.authorityResolver,
+    scope: "studio.gcec.docs_write",
+    issuedAt: oa.clock.nowIso(),
+    evidenceId: `evd:rwm-seed:${ecId}`,
+    forceEnable: true,
+  });
+  if (!authority.ok) throw new Error(`authority: ${authority.code}`);
+
+  const sourceInputs: Record<string, unknown> = {
+    targetPath,
+    targetRepositoryRef: "acme/w2-harness",
+    repositoryRef: "acme/w2-harness",
+    pathAllowlist: ["projects/studyflow/"],
+    contentRequirements: ["markdown heading", "acceptance criteria"],
+  };
+  if (
+    input.sourceArtifactWriteMode === "CREATE" ||
+    input.sourceArtifactWriteMode === "UPDATE"
+  ) {
+    sourceInputs.artifactWriteMode = input.sourceArtifactWriteMode;
+  }
+
+  const built =
+    await oa.executionContractServices!.buildExecutionContract.execute({
+      executionContractId: ecId,
+      projectId,
+      cycleInstanceId: input.cycleInstanceId ?? undefined,
+      decisionRefs: [decisionId],
+      action: M4_BOUNDED_DOCS_WRITE_ACTION,
+      target: M4_BOUNDED_DOCS_WRITE_TARGET,
+      scope: "studio.gcec.docs_write",
+      inputs: sourceInputs,
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      requiredAuthority: "MORRIS",
+      constraints: [
+        "BOUNDED DOCS-WRITE",
+        "PATH_ALLOWLIST_ONLY",
+        "TEXT_DOCS_ONLY",
+        "NO_DELETE",
+        "PREPARE_ONLY",
+      ],
+      stopConditions: ["AUTHORITY_DENIED", "CONTEXT_STALE"],
+      evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
+      reversibility: "reversible",
+      idempotencyKey: `idem:rwm-failed-${ecId}`,
+      correlationId: `cor:rwm-failed-${ecId}`,
+      actor: LOCAL_PILOTE_ACTOR,
+      authorityEvidenceId: authority.evidenceId,
+    });
+  if (!built.ok) throw new Error(`build: ${built.error.detailCode}`);
+
+  const failedContract = {
+    ...built.contract,
+    status: "failed" as const,
+    version: built.contract.version + 1,
+  };
+  await oa.executionContractServices!.contracts.save(failedContract);
+
+  const now = oa.clock.nowIso();
+  await oa.executionAttemptServices!.attempts.create({
+    schemaVersion: "0.2.0-oa" as const,
+    attemptId,
+    executionContractId: ecId,
+    executionContractVersion: failedContract.version,
+    selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
+    status: "failed" as const,
+    idempotencyKey: `idem:att:${attemptId}`,
+    correlationId: `cor:att:${attemptId}`,
+    version: 1,
+    createdAt: now,
+    failedAt: now,
+    launchedAt: now,
+    startedAt: now,
+    stopReason: "REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED",
+    irreversibleEffectsPossible: true,
+    processDiagnostic: {
+      kind: "process_failure_diagnostic" as const,
+      realProcessInvoked: true,
+      boundaryProofMode: "cursor_real" as const,
+      exitCode: 1,
+      stderrExcerpt: "ARTIFACT_WRITE_MODE_UNRESOLVED",
+      authoritativeBusinessEvidence: false,
+    },
+    provenance: {
+      schemaVersion: "0.1.0-oa" as const,
+      provenanceRecordId: `prv:${attemptId}`,
+      actor: LOCAL_PILOTE_ACTOR,
+      source: "system" as const,
+      timestamp: now,
+      correlationId: `cor:att:${attemptId}`,
+    },
+  } as never);
+
+  const w3cPayload: W3cRecommendationPayload = {
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
+    evidenceId: ids.evidenceId,
+    attemptId,
+    reviewBundleId: ids.reviewBundleId,
+    claimEvaluationId: null,
+    productOutcome: "FAIL",
+    analysisText: null,
+    analysisUnavailableReason: "test_seed",
+    analysisProviderId: null,
+    noraInvoked: false,
+    lpsVersion: null,
+  };
+
+  const materialized = await materializeProductOutcomeFromAttempt({
+    oa,
+    projectId,
+    attemptId,
+  });
+  if (!materialized.ok) {
+    throw new Error(
+      `RWM seed materialize failed: ${materialized.code} ${materialized.message}`,
+    );
+  }
+
+  const recoveredAfterMat = await resolvePostEvidenceRecoveryContext({
+    oa,
+    projectId,
+  });
+  if (!recoveredAfterMat.ok || !recoveredAfterMat.context) {
+    const epistemicId = w3cRecommendationEpistemicId(ids.evidenceId);
+    await oa.cycleServices!.updateEpistemicState.execute({
+      projectId,
+      items: [
+        {
+          epistemicItemId: epistemicId,
+          type: "Recommendation",
+          statement: serializeW3cRecommendationPayload(w3cPayload),
+          status: "active",
+          source: `w3c-post-evidence:${ids.evidenceId}`,
+          relatedObjects: [
+            projectId,
+            attemptId,
+            ids.evidenceId,
+            ids.reviewBundleId,
+            ecId,
+          ],
+        },
+      ],
+      createdBy: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
+      correlationId: `cor:w3c-seed:${attemptId}`,
+    });
+  }
+
+  const recovered = await resolvePostEvidenceRecoveryContext({
+    oa,
+    projectId,
+  });
+  if (!recovered.ok || !recovered.context) {
+    throw new Error("RWM seed: RecoveryContext unavailable after W3C seal");
+  }
+
+  return { ecId, attemptId, targetPath };
+}
+
+async function bootRecoveryFixture(suffix: string) {
+  const db = tempProductDbPath(`rwm-${suffix}`);
+  const runtime = bootW2Runtime({
+    productDbPath: db,
+    idPrefix: `rwm${suffix}`,
+  });
+  const seeded = await seedQualifiedProject(runtime, { suffix });
+  const oa = runtime.oa!;
+  const project = await oa.projectServices.getProject.execute({
+    projectId: seeded.projectId,
+  });
+  if (!project.ok) throw new Error("getProject failed");
+  const identity =
+    project.project.repositoryBinding?.identity?.trim() ||
+    `acme/w2-harness-${suffix}`;
+
+  // Ensure managed clone skeleton exists for this project's binding identity
+  // (harness bootstraps only the ambient env identity).
+  const { ensureManagedRepoCloneSkeleton } = await import(
+    "@/lib/oa/project/infrastructure/managedRepoPathFacts"
+  );
+  ensureManagedRepoCloneSkeleton({
+    managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
+    identity,
+  });
+
+  const seedDecide = await proposeAndDecideGoverned(oa, seeded.projectId);
+  return {
+    oa,
+    seeded,
+    runtime,
+    db,
+    identity,
+    seedDecisionId: seedDecide.decisionId,
+  };
+}
+
+async function reachRecoveryPrepare(input: {
+  suffix: string;
+  sourceArtifactWriteMode?: "CREATE" | "UPDATE" | null;
+  targetPath?: string;
+  beforePrepare?: (ctx: {
+    oa: RuntimeOaStack;
+    projectId: string;
+    identity: string;
+    targetPath: string;
+  }) => Promise<void> | void;
+}) {
+  const boot = await bootRecoveryFixture(input.suffix);
+  const { oa, seeded, identity } = boot;
+  const targetPath = input.targetPath ?? STUDYFLOW_TARGET;
+
+  await seedFailedDocsWriteEpisode({
+    oa,
+    projectId: seeded.projectId,
+    cycleInstanceId: seeded.cycleInstanceId,
+    decisionId: boot.seedDecisionId,
+    targetPath,
+    sourceArtifactWriteMode: input.sourceArtifactWriteMode ?? null,
+  });
+
+  const recovered = await resolvePostEvidenceRecoveryContext({
+    oa,
+    projectId: seeded.projectId,
+  });
+  if (!recovered.ok || !recovered.context) {
+    throw new Error("RecoveryContext missing");
+  }
+
+  const recoveryDecide = await proposeAndDecideGoverned(oa, seeded.projectId);
+  if (input.beforePrepare) {
+    await input.beforePrepare({
+      oa,
+      projectId: seeded.projectId,
+      identity,
+      targetPath,
+    });
+  }
+
+  const context = await currentF2Context(boot.runtime, seeded.projectId);
+  const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
+    oa,
+    projectId: seeded.projectId,
+    decisionId: recoveryDecide.decisionId,
+    currentContext: context,
+    forceLocalAuthority: true,
+    boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+  });
+
+  return { ...boot, prepared, decisionId: recoveryDecide.decisionId, targetPath };
+}
+
+describe("RWM — execution-time guard retained (pure)", () => {
+  it("RWM-08 — sealed CREATE + absent target → guard PASS (not UNRESOLVED)", () => {
+    const r = assertArtifactWriteModeAtExecution({
+      artifactWriteMode: "CREATE",
+      targetExists: false,
+      requireResolvedWriteMode: true,
+    });
+    expect(r).toEqual({ ok: true });
+  });
+
+  it("RWM-09 — sealed UPDATE + present target → guard PASS (not UNRESOLVED)", () => {
+    const r = assertArtifactWriteModeAtExecution({
+      artifactWriteMode: "UPDATE",
+      targetExists: true,
+      requireResolvedWriteMode: true,
+    });
+    expect(r).toEqual({ ok: true });
+  });
+
+  it("RWM-10 — TOCTOU CREATE then target appears → STALE_CREATE_AT_EXECUTION", () => {
+    const r = assertArtifactWriteModeAtExecution({
+      artifactWriteMode: "CREATE",
+      targetExists: true,
+      requireResolvedWriteMode: true,
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) {
+      expect(r.code).toBe("ARTIFACT_WRITE_MODE_STALE_CREATE_AT_EXECUTION");
+    }
+  });
+
+  it("RWM-11 — TOCTOU UPDATE then target disappears → STALE_UPDATE_AT_EXECUTION", () => {
+    const r = assertArtifactWriteModeAtExecution({
+      artifactWriteMode: "UPDATE",
+      targetExists: false,
+      requireResolvedWriteMode: true,
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) {
+      expect(r.code).toBe("ARTIFACT_WRITE_MODE_STALE_UPDATE_AT_EXECUTION");
+    }
+  });
+
+  it("unresolved mode still fails closed (guard not weakened)", () => {
+    const r = assertArtifactWriteModeAtExecution({
+      artifactWriteMode: null,
+      targetExists: false,
+      requireResolvedWriteMode: true,
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.code).toBe("ARTIFACT_WRITE_MODE_UNRESOLVED");
+  });
+});
+
+describe("RWM — sealRecoveryDocsWriteArtifactWriteMode helper", () => {
+  it("RWM-04 — managedRepoRoot null → EXISTENCE_UNAVAILABLE", async () => {
+    const boot = await bootRecoveryFixture("r04");
+    const sealed = await sealRecoveryDocsWriteArtifactWriteMode({
+      oa: boot.oa,
+      projectId: boot.seeded.projectId,
+      targetPath: STUDYFLOW_TARGET,
+      repositoryBindingIdentity: boot.identity,
+      managedRepoRoot: null,
+    });
+    expect(sealed.ok).toBe(false);
+    if (!sealed.ok) {
+      expect(sealed.code).toBe("ARTIFACT_WRITE_MODE_EXISTENCE_UNAVAILABLE");
+    }
+  });
+
+  it("RWM-04b — unnormalizable target path → EXISTENCE_UNAVAILABLE", async () => {
+    const boot = await bootRecoveryFixture("r04b");
+    const sealed = await sealRecoveryDocsWriteArtifactWriteMode({
+      oa: boot.oa,
+      projectId: boot.seeded.projectId,
+      targetPath: "/absolute/not/repo/relative.md",
+      repositoryBindingIdentity: boot.identity,
+      managedRepoRoot: managedRepoRootForIdentity(boot.identity),
+    });
+    expect(sealed.ok).toBe(false);
+    if (!sealed.ok) {
+      expect(sealed.code).toBe("ARTIFACT_WRITE_MODE_EXISTENCE_UNAVAILABLE");
+    }
+  });
+});
+
+describe("RWM — recovery prepare seals CREATE/UPDATE from current truth", () => {
+  it("RWM-01 — source mode missing + target absent → CREATE", async () => {
+    const { prepared, oa, targetPath } = await reachRecoveryPrepare({
+      suffix: "r01",
+      sourceArtifactWriteMode: null,
+      beforePrepare: ({ identity, targetPath: tp }) => {
+        removeManagedTarget(identity, tp);
+      },
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) {
+      throw new Error(`RWM-01 prepare failed: ${prepared.code} ${prepared.message}`);
+    }
+    const loaded = await oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: prepared.successor.executionContractId,
+    });
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) return;
+    expect(loaded.contract.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
+    expect(loaded.contract.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
+    expect(loaded.contract.inputs?.targetPath).toBe(targetPath);
+    expect(loaded.contract.inputs?.artifactWriteMode).toBe("CREATE");
+    expect(loaded.contract.inputs?.baseHeadSha).toBe(W2_TEST_PINNED_BASE_HEAD_SHA);
+  });
+
+  it("RWM-02 — target exists + durable same-artifact Evidence → UPDATE", async () => {
+    const { prepared, oa, targetPath } = await reachRecoveryPrepare({
+      suffix: "r02",
+      sourceArtifactWriteMode: null,
+      beforePrepare: async ({ oa: o, projectId, identity: id, targetPath: tp }) => {
+        writeManagedTarget(id, tp, "# prior note\n");
+        const reg = await o.evidenceReviewServices!.registerEvidence.execute({
+          evidenceId: `ev:rwm-same-${projectId}`,
+          idempotencyKey: `idem:ev-rwm-same-${projectId}`,
+          actor: {
+            actorId: "actor:morris",
+            role: "decision_maker",
+            authorityLevel: "N3",
+          },
+          type: "artifact",
+          source: "execution_attempt:docs_write",
+          sourceKind: "external",
+          status: "available",
+          location: tp,
+          digest: DIGEST_SEED,
+          classification: "internal",
+          storageMode: "metadata_only",
+          bindings: { projectId },
+        });
+        if (!reg.ok) {
+          throw new Error(`RWM-02 registerEvidence: ${JSON.stringify(reg)}`);
+        }
+      },
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) {
+      throw new Error(`RWM-02 prepare failed: ${prepared.code} ${prepared.message}`);
+    }
+    const loaded = await oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: prepared.successor.executionContractId,
+    });
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) return;
+    expect(loaded.contract.inputs?.artifactWriteMode).toBe("UPDATE");
+    expect(loaded.contract.inputs?.targetPath).toBe(targetPath);
+  });
+
+  it("RWM-03 — target exists + no same-artifact proof → ASK fail-closed", async () => {
+    const { prepared } = await reachRecoveryPrepare({
+      suffix: "r03",
+      beforePrepare: ({ identity, targetPath }) => {
+        writeManagedTarget(identity, targetPath, "# orphan file\n");
+      },
+    });
+    expect(prepared.ok).toBe(false);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("ARTIFACT_WRITE_MODE_ASK");
+    }
+  });
+
+  it("RWM-05 — stale source CREATE but current exists+proof → fresh UPDATE", async () => {
+    const { prepared, oa } = await reachRecoveryPrepare({
+      suffix: "r05",
+      sourceArtifactWriteMode: "CREATE",
+      beforePrepare: async ({ oa: o, projectId, identity, targetPath }) => {
+        writeManagedTarget(identity, targetPath, "# now exists\n");
+        const reg = await o.evidenceReviewServices!.registerEvidence.execute({
+          evidenceId: `ev:rwm-r05-${projectId}`,
+          idempotencyKey: `idem:ev-rwm-r05-${projectId}`,
+          actor: {
+            actorId: "actor:morris",
+            role: "decision_maker",
+            authorityLevel: "N3",
+          },
+          type: "artifact",
+          source: "execution_attempt:docs_write",
+          sourceKind: "external",
+          status: "available",
+          location: targetPath,
+          digest: DIGEST_SEED,
+          classification: "internal",
+          storageMode: "metadata_only",
+          bindings: { projectId },
+        });
+        expect(reg.ok).toBe(true);
+        if (!reg.ok) {
+          throw new Error(`RWM-05 registerEvidence: ${JSON.stringify(reg)}`);
+        }
+      },
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) {
+      throw new Error(`RWM-05 prepare failed: ${prepared.code} ${prepared.message}`);
+    }
+    const loaded = await oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: prepared.successor.executionContractId,
+    });
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) return;
+    expect(loaded.contract.inputs?.artifactWriteMode).toBe("UPDATE");
+  });
+
+  it("RWM-06 — stale source UPDATE but target now absent → fresh CREATE", async () => {
+    const { prepared, oa } = await reachRecoveryPrepare({
+      suffix: "r06",
+      sourceArtifactWriteMode: "UPDATE",
+      beforePrepare: ({ identity, targetPath }) => {
+        removeManagedTarget(identity, targetPath);
+      },
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    const loaded = await oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: prepared.successor.executionContractId,
+    });
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) return;
+    expect(loaded.contract.inputs?.artifactWriteMode).toBe("CREATE");
+  });
+
+  it("RWM-07 — contradictory Evidence → no UPDATE / fail-closed", async () => {
+    const { prepared } = await reachRecoveryPrepare({
+      suffix: "r07",
+      beforePrepare: async ({ oa, projectId, identity, targetPath }) => {
+        writeManagedTarget(identity, targetPath, "# conflict\n");
+        const ok = await oa.evidenceReviewServices!.registerEvidence.execute({
+          evidenceId: `ev:rwm-r07-ok-${projectId}`,
+          idempotencyKey: `idem:ev-rwm-r07-ok-${projectId}`,
+          actor: {
+            actorId: "actor:morris",
+            role: "decision_maker",
+            authorityLevel: "N3",
+          },
+          type: "artifact",
+          source: "execution_attempt:docs_write",
+          sourceKind: "external",
+          status: "available",
+          location: targetPath,
+          digest: DIGEST_SEED,
+          classification: "internal",
+          storageMode: "metadata_only",
+          bindings: { projectId },
+        });
+        expect(ok.ok).toBe(true);
+        const bad = await oa.evidenceReviewServices!.registerEvidence.execute({
+          evidenceId: `ev:rwm-r07-bad-${projectId}`,
+          idempotencyKey: `idem:ev-rwm-r07-bad-${projectId}`,
+          actor: {
+            actorId: "actor:morris",
+            role: "decision_maker",
+            authorityLevel: "N3",
+          },
+          type: "artifact",
+          source: "execution_attempt:docs_write",
+          sourceKind: "external",
+          status: "rejected",
+          location: targetPath,
+          digest: DIGEST_SEED,
+          classification: "internal",
+          storageMode: "metadata_only",
+          bindings: { projectId },
+        });
+        expect(bad.ok).toBe(true);
+      },
+    });
+    expect(prepared.ok).toBe(false);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("ARTIFACT_WRITE_MODE_ASK");
+    }
+  });
+
+  it("StudyFlow-equivalent — sealed CREATE reaches guard without UNRESOLVED", async () => {
+    const { prepared, oa, targetPath } = await reachRecoveryPrepare({
+      suffix: "sf",
+      sourceArtifactWriteMode: null,
+      beforePrepare: ({ identity, targetPath: tp }) => {
+        removeManagedTarget(identity, tp);
+      },
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    const loaded = await oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: prepared.successor.executionContractId,
+    });
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) return;
+    expect(loaded.contract.action).toBe("cursor.docs_write.apply");
+    expect(loaded.contract.target).toBe("workspace.isolated.docs_write");
+    expect(loaded.contract.inputs?.targetPath).toBe(targetPath);
+    expect(loaded.contract.inputs?.artifactWriteMode).toBe("CREATE");
+    expect(loaded.contract.requiredAuthority).toBe("N2");
+
+    const guard = assertArtifactWriteModeAtExecution({
+      artifactWriteMode: loaded.contract.inputs?.artifactWriteMode as
+        | "CREATE"
+        | "UPDATE"
+        | undefined,
+      targetExists: false,
+      requireResolvedWriteMode: true,
+    });
+    expect(guard).toEqual({ ok: true });
+    expect(guard.ok === false ? guard.code : null).not.toBe(
+      "ARTIFACT_WRITE_MODE_UNRESOLVED",
+    );
+  });
+});
+
+describe("CORR-01 — existing incomplete successor reseal via immutable supersession", () => {
+  async function seedIncompleteConfirmedSuccessor(input: {
+    oa: RuntimeOaStack;
+    projectId: string;
+    cycleInstanceId?: string | null;
+    decisionId: string;
+    targetPath: string;
+    identity: string;
+  }) {
+    const { oa, projectId, decisionId, targetPath } = input;
+    const { canonicalM3PrepareContractId } = await import(
+      "@/features/project-assistant/f3/resolveM3ExecutionContract"
+    );
+    const {
+      canonicalRecoveryWriteModeResealSuccessorId,
+    } = await import(
+      "@/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor"
+    );
+    const prepareId = canonicalM3PrepareContractId(decisionId);
+    const incompleteId = `xct:m3-res:${decisionId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48)}`;
+    const repairId = canonicalRecoveryWriteModeResealSuccessorId(decisionId);
+
+    const authority = registerLocalMorrisGateAuthority({
+      authorityResolver: oa.authorityResolver,
+      scope: "studio.gcec.docs_write",
+      issuedAt: oa.clock.nowIso(),
+      evidenceId: `evd:corr01-seed:${incompleteId}`,
+      forceEnable: true,
+    });
+    if (!authority.ok) throw new Error(authority.code);
+
+    const pilote = registerLocalMorrisGateAuthority({
+      authorityResolver: oa.authorityResolver,
+      scope: "studio.gcec.docs_write",
+      issuedAt: oa.clock.nowIso(),
+      evidenceId: `evd:corr01-seed-n2:${incompleteId}`,
+      forceEnable: true,
+    });
+    // Use N2 via registerLocalAuthorityForExecutionClass path — force Morris then
+    // supersede with N2 requiredAuthority using LOCAL_PILOTE after registering.
+    const { registerLocalAuthorityForExecutionClass } = await import(
+      "@/lib/oa/decision"
+    );
+    const n2 = registerLocalAuthorityForExecutionClass({
+      authorityResolver: oa.authorityResolver,
+      scope: "studio.gcec.docs_write",
+      issuedAt: oa.clock.nowIso(),
+      requiredAuthority: "N2",
+      evidenceId: `evd:corr01-n2:${incompleteId}`,
+      forceEnable: true,
+    });
+    if (!n2.ok) throw new Error(n2.code);
+    void pilote;
+    void authority;
+
+    const built = await oa.executionContractServices!.buildExecutionContract.execute({
+      executionContractId: prepareId,
+      projectId,
+      cycleInstanceId: input.cycleInstanceId ?? undefined,
+      decisionRefs: [decisionId],
+      action: M4_BOUNDED_DOCS_WRITE_ACTION,
+      target: M4_BOUNDED_DOCS_WRITE_TARGET,
+      scope: "studio.gcec.docs_write",
+      inputs: {
+        targetPath,
+        targetRepositoryRef: input.identity,
+        repositoryRef: input.identity,
+        pathAllowlist: ["projects/studyflow/"],
+        contentRequirements: ["markdown"],
+      },
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      requiredAuthority: "N2",
+      constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL", "NO_ATTEMPT", "NO_GATE_D"],
+      stopConditions: ["AUTHORITY_DENIED"],
+      evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
+      reversibility: "reversible",
+      idempotencyKey: `idem:m3-prep:${decisionId}`,
+      correlationId: `cor:corr01-prep:${decisionId}`,
+      actor: LOCAL_PILOTE_ACTOR,
+      authorityEvidenceId: n2.evidenceId,
+    });
+    if (!built.ok) throw new Error(built.error.detailCode);
+
+    const validatedPrep =
+      await oa.executionContractServices!.validateExecutionContract.execute({
+        executionContractId: prepareId,
+        actor: LOCAL_PILOTE_ACTOR,
+        authorityEvidenceId: n2.evidenceId,
+      });
+    if (!validatedPrep.ok) throw new Error(validatedPrep.error.detailCode);
+
+    const superseded =
+      await oa.executionContractServices!.supersedeExecutionContract.execute({
+        newExecutionContractId: incompleteId,
+        supersedesExecutionContractId: prepareId,
+        supersessionReason: "corr01_test_incomplete_recovery_successor",
+        actor: LOCAL_PILOTE_ACTOR,
+        authorityEvidenceId: n2.evidenceId,
+        expectedVersion: validatedPrep.contract.version,
+        action: M4_BOUNDED_DOCS_WRITE_ACTION,
+        target: M4_BOUNDED_DOCS_WRITE_TARGET,
+        scope: "studio.gcec.docs_write",
+        decisionRefs: [decisionId],
+        requiredCapabilities: ["cap:cursor.docs_write"],
+        requiredAuthority: "N2",
+        constraints: ["BOUNDED DOCS-WRITE", "PATH_ALLOWLIST_ONLY"],
+        stopConditions: ["AUTHORITY_DENIED"],
+        evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
+        reversibility: "reversible",
+        // Intentionally omit artifactWriteMode — the natural hole.
+        inputs: {
+          targetPath,
+          targetRepositoryRef: input.identity,
+          repositoryRef: input.identity,
+          pathAllowlist: ["projects/studyflow/"],
+          contentRequirements: ["markdown"],
+          baseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+        },
+        idempotencyKey: `idem:m3-res:${decisionId}:${incompleteId}`,
+        correlationId: `cor:corr01-inc:${decisionId}`,
+        status: "draft",
+      });
+    if (!superseded.ok) throw new Error(superseded.error.detailCode);
+
+    const validatedInc =
+      await oa.executionContractServices!.validateExecutionContract.execute({
+        executionContractId: incompleteId,
+        actor: LOCAL_PILOTE_ACTOR,
+        authorityEvidenceId: n2.evidenceId,
+      });
+    if (!validatedInc.ok) throw new Error(validatedInc.error.detailCode);
+
+    await oa.executionContractServices!.contracts.save({
+      ...validatedInc.contract,
+      status: "confirmed",
+      version: validatedInc.contract.version + 1,
+    });
+
+    const now = oa.clock.nowIso();
+    const attemptId = `xat:w3a:corr01-${Math.random().toString(16).slice(2, 10)}`;
+    await oa.executionAttemptServices!.attempts.create({
+      schemaVersion: "0.2.0-oa" as const,
+      attemptId,
+      executionContractId: incompleteId,
+      executionContractVersion: validatedInc.contract.version + 1,
+      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
+      status: "failed" as const,
+      idempotencyKey: `idem:att:${attemptId}`,
+      correlationId: `cor:att:${attemptId}`,
+      version: 1,
+      createdAt: now,
+      failedAt: now,
+      stopReason: "REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED",
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
+    const incomplete =
+      await oa.executionContractServices!.getExecutionContract.execute({
+        executionContractId: incompleteId,
+      });
+    if (!incomplete.ok) throw new Error("reload incomplete");
+    expect(incomplete.contract.inputs?.artifactWriteMode).toBeUndefined();
+    expect(incomplete.contract.status).toBe("confirmed");
+
+    return { incompleteId, prepareId, repairId, attemptId, n2EvidenceId: n2.evidenceId };
+  }
+
+  async function bootCorr01(suffix: string) {
+    const boot = await bootRecoveryFixture(suffix);
+    const { oa, seeded, identity } = boot;
+    await seedFailedDocsWriteEpisode({
+      oa,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+      decisionId: boot.seedDecisionId,
+      targetPath: STUDYFLOW_TARGET,
+      sourceArtifactWriteMode: null,
+    });
+    const recoveryDecide = await proposeAndDecideGoverned(oa, seeded.projectId);
+    const seededInc = await seedIncompleteConfirmedSuccessor({
+      oa,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+      decisionId: recoveryDecide.decisionId,
+      targetPath: STUDYFLOW_TARGET,
+      identity,
+    });
+    return {
+      ...boot,
+      decisionId: recoveryDecide.decisionId,
+      ...seededInc,
+    };
+  }
+
+  it("CORR01-R1 — incomplete confirmed + target absent → repair CREATE", async () => {
+    const ctx = await bootCorr01("c01r1");
+    removeManagedTarget(ctx.identity, STUDYFLOW_TARGET);
+    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
+    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) {
+      throw new Error(`${prepared.code} ${prepared.message}`);
+    }
+    expect(prepared.successor.executionContractId).toBe(ctx.repairId);
+    expect(prepared.successor.executionContractId).not.toBe(ctx.incompleteId);
+    expect(prepared.repairedFromExecutionContractId).toBe(ctx.incompleteId);
+
+    const old = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: ctx.incompleteId,
+    });
+    expect(old.ok).toBe(true);
+    if (!old.ok) return;
+    expect(old.contract.status).toBe("superseded");
+    expect(old.contract.inputs?.artifactWriteMode).toBeUndefined();
+
+    const neu = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: prepared.successor.executionContractId,
+    });
+    expect(neu.ok).toBe(true);
+    if (!neu.ok) return;
+    expect(neu.contract.supersedesExecutionContractId).toBe(ctx.incompleteId);
+    expect(neu.contract.inputs?.artifactWriteMode).toBe("CREATE");
+    expect(neu.contract.inputs?.targetPath).toBe(STUDYFLOW_TARGET);
+    expect(neu.contract.inputs?.baseHeadSha).toBe(W2_TEST_PINNED_BASE_HEAD_SHA);
+    expect(neu.contract.requiredAuthority).toBe("N2");
+    expect(neu.contract.status).toBe("confirmation_required");
+    expect(prepared.executionPerformed).toBe(false);
+    expect(prepared.attemptCreated).toBe(false);
+
+    const guard = assertArtifactWriteModeAtExecution({
+      artifactWriteMode: "CREATE",
+      targetExists: false,
+      requireResolvedWriteMode: true,
+    });
+    expect(guard).toEqual({ ok: true });
+  });
+
+  it("CORR01-R2 — incomplete + exists + same-artifact Evidence → repair UPDATE", async () => {
+    const ctx = await bootCorr01("c01r2");
+    writeManagedTarget(ctx.identity, STUDYFLOW_TARGET, "# prior\n");
+    const reg = await ctx.oa.evidenceReviewServices!.registerEvidence.execute({
+      evidenceId: `ev:corr01-r2-${ctx.seeded.projectId}`,
+      idempotencyKey: `idem:ev-corr01-r2-${ctx.seeded.projectId}`,
+      actor: {
+        actorId: "actor:morris",
+        role: "decision_maker",
+        authorityLevel: "N3",
+      },
+      type: "artifact",
+      source: "execution_attempt:docs_write",
+      sourceKind: "external",
+      status: "available",
+      location: STUDYFLOW_TARGET,
+      digest: DIGEST_SEED,
+      classification: "internal",
+      storageMode: "metadata_only",
+      bindings: { projectId: ctx.seeded.projectId },
+    });
+    expect(reg.ok).toBe(true);
+
+    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
+    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) throw new Error(`${prepared.code} ${prepared.message}`);
+    const neu = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: prepared.successor.executionContractId,
+    });
+    expect(neu.ok).toBe(true);
+    if (!neu.ok) return;
+    expect(neu.contract.inputs?.artifactWriteMode).toBe("UPDATE");
+    expect(neu.contract.supersedesExecutionContractId).toBe(ctx.incompleteId);
+  });
+
+  it("CORR01-R3 — ASK → incomplete NOT superseded", async () => {
+    const ctx = await bootCorr01("c01r3");
+    writeManagedTarget(ctx.identity, STUDYFLOW_TARGET, "# orphan\n");
+    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
+    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prepared.ok).toBe(false);
+    if (!prepared.ok) expect(prepared.code).toBe("ARTIFACT_WRITE_MODE_ASK");
+    const old = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: ctx.incompleteId,
+    });
+    expect(old.ok && old.contract.status).toBe("confirmed");
+  });
+
+  it("CORR01-R4 — existence UNAVAILABLE → incomplete NOT superseded", async () => {
+    const ctx = await bootCorr01("c01r4");
+    const pathFacts = await import(
+      "@/lib/oa/project/infrastructure/managedRepoPathFacts"
+    );
+    vi.spyOn(pathFacts, "probeManagedRepoRelativePathExists").mockReturnValue(
+      null,
+    );
+    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
+    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prepared.ok).toBe(false);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("ARTIFACT_WRITE_MODE_EXISTENCE_UNAVAILABLE");
+    }
+    const old = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: ctx.incompleteId,
+    });
+    expect(old.ok && old.contract.status).toBe("confirmed");
+  });
+
+  it("CORR01-R5 — successor status=failed → TA5 no repair", async () => {
+    const ctx = await bootCorr01("c01r5");
+    const loaded = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: ctx.incompleteId,
+    });
+    if (!loaded.ok) throw new Error("load");
+    await ctx.oa.executionContractServices!.contracts.save({
+      ...loaded.contract,
+      status: "failed",
+      version: loaded.contract.version + 1,
+    });
+    removeManagedTarget(ctx.identity, STUDYFLOW_TARGET);
+    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
+    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prepared.ok).toBe(false);
+    if (!prepared.ok) expect(prepared.code).toBe("TA5_STATUS_REFUSED");
+    const old = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: ctx.incompleteId,
+    });
+    expect(old.ok && old.contract.status).toBe("failed");
+  });
+
+  it("CORR01-R6 — successor status=executing → TA5 no repair", async () => {
+    const ctx = await bootCorr01("c01r6");
+    const loaded = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: ctx.incompleteId,
+    });
+    if (!loaded.ok) throw new Error("load");
+    await ctx.oa.executionContractServices!.contracts.save({
+      ...loaded.contract,
+      status: "executing",
+      version: loaded.contract.version + 1,
+    });
+    removeManagedTarget(ctx.identity, STUDYFLOW_TARGET);
+    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
+    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prepared.ok).toBe(false);
+    if (!prepared.ok) {
+      // Continuity refuses executing-current before tip-scan classify.
+      expect([
+        "TA5_STATUS_REFUSED",
+        "EXECUTION_CONTINUITY_UNSUPPORTED",
+      ]).toContain(prepared.code);
+    }
+    const old = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: ctx.incompleteId,
+    });
+    expect(old.ok && old.contract.status).toBe("executing");
+  });
+
+  it("CORR01-R7 — different decisionRef → no repair", async () => {
+    const ctx = await bootCorr01("c01r7");
+    const loaded = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: ctx.incompleteId,
+    });
+    if (!loaded.ok) throw new Error("load");
+    await ctx.oa.executionContractServices!.contracts.save({
+      ...loaded.contract,
+      decisionRefs: ["hd:other-decision-not-this-recovery"],
+      version: loaded.contract.version + 1,
+    });
+    removeManagedTarget(ctx.identity, STUDYFLOW_TARGET);
+    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
+    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prepared.ok).toBe(false);
+    const old = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: ctx.incompleteId,
+    });
+    expect(old.ok && old.contract.status).toBe("confirmed");
+    expect(old.ok && old.contract.inputs?.artifactWriteMode).toBeUndefined();
+  });
+
+  it("CORR01-R8 — different project → no repair", async () => {
+    const ctx = await bootCorr01("c01r8");
+    // Direct classify — FK prevents mutating durable projectId in place.
+    const {
+      classifyCurrentRecoveryDocsWriteSuccessor,
+    } = await import(
+      "@/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor"
+    );
+    const classified = await classifyCurrentRecoveryDocsWriteSuccessor({
+      oa: ctx.oa,
+      projectId: "prj:other-project-not-owned",
+      decisionId: ctx.decisionId,
+      continuityDecisionRef: ctx.decisionId,
+      continuityContract: {
+        executionContractId: ctx.incompleteId,
+        action: M4_BOUNDED_DOCS_WRITE_ACTION,
+        target: M4_BOUNDED_DOCS_WRITE_TARGET,
+        status: "confirmed",
+      },
+    });
+    expect(classified.kind).toBe("refused");
+    if (classified.kind === "refused") {
+      expect(classified.code).toBe("RECOVERY_SUCCESSOR_PROJECT_MISMATCH");
+    }
+    const old = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: ctx.incompleteId,
+    });
+    expect(old.ok && old.contract.status).toBe("confirmed");
+    expect(old.ok && old.contract.inputs?.artifactWriteMode).toBeUndefined();
+  });
+
+  it("CORR01-R9 — non docs_write action → no repair", async () => {
+    const ctx = await bootCorr01("c01r9");
+    const loaded = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: ctx.incompleteId,
+    });
+    if (!loaded.ok) throw new Error("load");
+    await ctx.oa.executionContractServices!.contracts.save({
+      ...loaded.contract,
+      action: "cursor.generic.apply",
+      version: loaded.contract.version + 1,
+    });
+    removeManagedTarget(ctx.identity, STUDYFLOW_TARGET);
+    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
+    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prepared.ok).toBe(false);
+    const old = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: ctx.incompleteId,
+    });
+    expect(old.ok && old.contract.status).toBe("confirmed");
+  });
+
+  it("CORR01-R10 — ambiguous non-prestart Attempt → no repair", async () => {
+    const ctx = await bootCorr01("c01r10");
+    const attempts =
+      await ctx.oa.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId: ctx.incompleteId,
+      });
+    if (!attempts.ok || attempts.attempts.length === 0) {
+      throw new Error("attempt missing");
+    }
+    const att = attempts.attempts[0]!;
+    await ctx.oa.executionAttemptServices!.attempts.update(
+      {
+        ...att,
+        stopReason: "REAL_LAUNCH_FAILED: SOME_OTHER_FAILURE",
+        irreversibleEffectsPossible: true,
+        processDiagnostic: {
+          kind: "process_failure_diagnostic" as const,
+          realProcessInvoked: true,
+          boundaryProofMode: "cursor_real" as const,
+          exitCode: 1,
+          stderrExcerpt: "ambiguous mid-flight",
+          authoritativeBusinessEvidence: false,
+        },
+        version: att.version + 1,
+      } as never,
+      att.version,
+    );
+    removeManagedTarget(ctx.identity, STUDYFLOW_TARGET);
+    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
+    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prepared.ok).toBe(false);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS");
+    }
+    const old = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: ctx.incompleteId,
+    });
+    expect(old.ok && old.contract.status).toBe("confirmed");
+    expect(old.ok && old.contract.inputs?.artifactWriteMode).toBeUndefined();
+  });
+
+  it("CORR01-R11 — second prepare reuses exact repair successor", async () => {
+    const ctx = await bootCorr01("c01r11");
+    removeManagedTarget(ctx.identity, STUDYFLOW_TARGET);
+    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
+    const first = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) throw new Error(first.code);
+    const second = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(second.ok).toBe(true);
+    if (!second.ok) throw new Error(second.code);
+    expect(second.successor.executionContractId).toBe(
+      first.successor.executionContractId,
+    );
+    expect(second.reusedFromIdempotency).toBe(true);
+    expect(second.executionPerformed).toBe(false);
+    expect(second.attemptCreated).toBe(false);
+
+    // Restart continuity — re-read durable repaired successor.
+    const reloaded =
+      await ctx.oa.executionContractServices!.getExecutionContract.execute({
+        executionContractId: first.successor.executionContractId,
+      });
+    expect(reloaded.ok).toBe(true);
+    if (!reloaded.ok) return;
+    expect(reloaded.contract.inputs?.artifactWriteMode).toBe("CREATE");
+    expect(reloaded.contract.status).toBe("confirmation_required");
+    expect(reloaded.contract.supersedesExecutionContractId).toBe(
+      ctx.incompleteId,
+    );
+    const history =
+      await ctx.oa.executionContractServices!.listExecutionContractHistory.execute(
+        { projectId: ctx.seeded.projectId },
+      );
+    expect(history.ok).toBe(true);
+    if (!history.ok) return;
+    const resealed = history.contracts.filter((c) =>
+      c.executionContractId.startsWith("xct:m3-rwm-reseal:"),
+    );
+    expect(resealed).toHaveLength(1);
+  });
+
+  it("StudyFlow-equivalent existing incomplete state — reseal CREATE", async () => {
+    const ctx = await bootCorr01("c01sf");
+    removeManagedTarget(ctx.identity, STUDYFLOW_TARGET);
+    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
+    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa: ctx.oa,
+      projectId: ctx.seeded.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) throw new Error(`${prepared.code} ${prepared.message}`);
+    expect(prepared.successor.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
+    expect(prepared.successor.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
+    const neu = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: prepared.successor.executionContractId,
+    });
+    expect(neu.ok).toBe(true);
+    if (!neu.ok) return;
+    expect(neu.contract.inputs?.artifactWriteMode).toBe("CREATE");
+    expect(neu.contract.status).toBe("confirmation_required");
+    const prep = await ctx.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: ctx.prepareId,
+    });
+    expect(prep.ok && prep.contract.status).toBe("superseded");
+  });
+});
```

### 17.5 w2Harness.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
index 7645ee5e..f1e88ca3 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
@@ -257,6 +257,11 @@ export async function seedQualifiedProject(
     });
     expect(bound.ok).toBe(true);
     if (!bound.ok) throw new Error("seed: setProjectRepositoryBinding failed");
+    // Existence probes require the managed clone directory to exist (UNKNOWN ≠ ABSENT).
+    ensureManagedRepoCloneSkeleton({
+      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
+      identity: `acme/w2-harness-${suffix}`,
+    });
   }

   return {
```

### 17.6 pjReproof05.executionEligibility.d0.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
index 09096464..4f7bdd2f 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
@@ -288,7 +288,12 @@ describe("PJ-REPROOF-05 — VITEST env ≠ trusted launch authority", () => {
     });
     expect(unpinned.ok).toBe(false);
     if (unpinned.ok) throw new Error("expected fail-closed without pin");
-    expect(unpinned.code).toBe("MANAGED_REPO_UNAVAILABLE");
+    // Fail-closed without server pin: either managed clone absent, or clone
+    // skeleton present but HEAD unreadable. Both refuse auto-pin from VITEST.
+    expect([
+      "MANAGED_REPO_UNAVAILABLE",
+      "BASE_HEAD_SHA_UNRESOLVED",
+    ]).toContain(unpinned.code);

     const eligibilityWithoutPin = resolveProductExecutionEligibility({
       constraints: ["PRODUCT_GOVERNED"],
```

### 17.7 importBoundaries.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index d4a81c02..5a1ab2d7 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -124,6 +124,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/w2/qualificationInputs.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/readRecoveryOwnedDecisionContinuity.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveDocsWriteArtifactAbsolutePath.ts:@/lib/vertical-slice-runtime/managedRepoRootBaseConfig",
       "features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts:@/lib/vertical-slice-runtime",
```
