# RECOVERY-DOCS-WRITE-MODE-SEALING-01 / CORR-01 — PRE-START SAFETY QUALIFICATION HARDENING
## Cycle 8 — Delivery / implémentation · CRITICAL · FULL Review Pack

Generated: 2026-09-26T14:05:00Z
Macro: RECOVERY-DOCS-WRITE-MODE-SEALING-01
Correction: CORR-01 — PRE-START SAFETY QUALIFICATION HARDENING
Cycle: 8 — Delivery / implémentation
Profile: CRITICAL
Morris GO: CORR-01 SAFETY HARDENING AUTHORIZED — consumed for local Product source/test only
Project commit/push/PR: AUTHORIZED and performed — Merge: NOT AUTHORIZED
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
| Prior CORR-00 / CORR-01 macro changes | RETAINED |
| Unrelated Product dirt | NONE |
| Project commit | **NONE** — LOCAL / NOT COMMITTED / NOT PUSHED |

Touched for this hardening:

- `M` `projects/sfia-studio/app/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor.ts`
- `M` `projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts`

Lifecycle / sealing / resolveM3 write-mode match / prepare orchestration: **UNCHANGED** in this hardening.

---

## 2. CHATGPT SAFETY FINDING

`hasDeterministicPreStartWriteModeFailure()` was too permissive for authorizing T-A4 supersession of a confirmed incomplete recovery successor.

Previous predicate (approx):

```
attempts.some(
  status=failed
  AND stopReason includes ARTIFACT_WRITE_MODE_UNRESOLVED
  AND (irreversibleEffectsPossible !== true
       OR realProcessInvoked !== true)
)
```

Gaps:

1. Did **not** require `startedAt` ABSENT
2. Did **not** require `launchedAt` ABSENT
3. Did **not** require `irreversibleEffectsPossible !== true` unconditionally
4. Did **not** require `realProcessInvoked !== true` unconditionally
5. Used `some()` — one historical "safe" Attempt could qualify even if another Attempt on the same EC showed launch / start / irreversible / REAL process

UNKNOWN ≠ SAFE for immutable supersession of a confirmed EC.

---

## 3. NEW STRICT RULE

AUTO-REPAIR via T-A4 allowed ONLY when the **complete** Attempt set for the EC proves:

1. at least one Attempt is terminal `failed` with stopReason containing `ARTIFACT_WRITE_MODE_UNRESOLVED`
2. that Attempt has `startedAt` ABSENT (null/undefined/blank)
3. that Attempt has `launchedAt` ABSENT
4. that Attempt has `irreversibleEffectsPossible !== true`
5. that Attempt has `processDiagnostic.realProcessInvoked !== true`
6. **AND** no Attempt on the same EC has contradictory evidence:
   - `startedAt` present OR
   - `launchedAt` present OR
   - `irreversibleEffectsPossible === true` OR
   - `realProcessInvoked === true`

No Attempts → false
Wrong stopReason → false
Non-failed only → false
Safe + contradictory → false

Natural StudyFlow-equivalent class (preserved):

```
failed
+ ARTIFACT_WRITE_MODE_UNRESOLVED
+ startedAt absent
+ launchedAt absent
+ irreversibleEffectsPossible=false
+ realProcessInvoked=false
→ repairable
```

---

## 4. BEFORE / AFTER PREDICATE

### BEFORE

```typescript
return listed.attempts.some((attempt) => {
  if (attempt.status !== "failed") return false;
  if (!stop.includes("ARTIFACT_WRITE_MODE_UNRESOLVED")) return false;
  if (irreversible === true) {
    if (diag?.realProcessInvoked === true) return false;
  }
  return true; // startedAt / launchedAt / irreversible alone not checked
});
```

### AFTER

```typescript
const hasSafeUnresolved = attempts.some(isStrictPreStartUnresolvedFailure);
if (!hasSafeUnresolved) return false;
if (attempts.some(hasContradictoryLaunchOrEffectEvidence)) return false;
return true;
```

Where strict safe requires failed + UNRESOLVED + startedAt/launchedAt absent + irreversible≠true + realProcessInvoked≠true.

---

## 5. COMPLETE ATTEMPT SAFETY MATRIX

| Case | Result |
|------|--------|
| S1 strict pre-start UNRESOLVED | repair ALLOWED |
| S2 startedAt present | REFUSED |
| S3 launchedAt present (domain also requires startedAt) | REFUSED |
| S4 irreversibleEffectsPossible=true | REFUSED |
| S5 realProcessInvoked=true | REFUSED |
| S6 safe + contradictory started/launched Attempt | REFUSED |
| S7 safe + contradictory realProcessInvoked Attempt | REFUSED |
| S8 other stopReason | REFUSED |
| S9 no Attempt | REFUSED |
| S10 non-failed Attempt (cancelled) | REFUSED |

Contradictory-history rule: **complete set**; one safe Attempt never overrides a contradictory peer.

---

## 6. LIFECYCLE / SEALING / GUARD

| Surface | Status |
|---------|--------|
| Immutable T-A4 supersession repair | UNCHANGED |
| Repair ID `xct:m3-rwm-reseal:*` | UNCHANGED |
| CREATE/UPDATE sealing | UNCHANGED |
| ASK / UNAVAILABLE no-supersede | UNCHANGED |
| `successorMatchesResolution` write-mode | UNCHANGED |
| `assertArtifactWriteModeAtExecution` | UNCHANGED |
| Restart / idempotency | UNCHANGED |

---

## 7. STUDYFLOW-EQUIVALENT PROOF

Retained: confirmed incomplete + mode absent + strict pre-start UNRESOLVED Attempt → reseal CREATE → confirmation_required → no Execute → no new Attempt.

---

## 8. VALIDATION

### Targeted

| Suite | Result |
|-------|--------|
| `recoveryDocsWriteModeSealing.d0.test.ts` | **36 / 36** pass (RWM + CORR01-R* + CORR01-S* + SF-eq) |
| Checkpoint F + #524 ownership + corr02/03 + pjReproof05 + importBoundaries | **92 / 92** pass |

### Full

| Gate | Result |
|------|--------|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| Vitest | **431 files passed** · **17 skipped** · **4780 tests passed** · **137 skipped** · **0 failed** |
| modeled governance | **73 / 0** |

Baseline before this hardening: 4770 tests → +10 CORR01-S* (4780).

---

## 9. FAKE / REAL

Natural input: REAL BOUNDARY REACHED / BUSINESS EFFECT FAILED / ARTIFACT_WRITE_MODE_UNRESOLVED

This correction: **DETERMINISTIC ONLY**

Proof level: **STRICT PRE-START REPAIR QUALIFICATION / DETERMINISTICALLY PROVEN**

NOT claimed: StudyFlow REAL success · Cursor REAL · artifact written · Evidence REAL · ReviewBundle REAL · E2E REAL · Product READY · runtime v3 ADOPTED

---

## 10. NORA RESERVE

`recommended_option_ref_only_on_recommendation` — OPEN / NON-BLOCKING / OUT OF SCOPE

---

## 11. ANTI-CLAIMS

- StudyFlow SQLite: NOT MUTATED
- Managed clone: NOT MUTATED
- Project git: LOCAL / NOT COMMITTED / NOT PUSHED
- No HD / PREPARE / Confirm / Execute / REAL against natural StudyFlow
- No doctrine / architecture pivot
- No execution-guard weakening

---

## 12. FINAL VERDICT

**RECOVERY DOCS_WRITE MODE SEALING CORR-01 — STRICT PRE-START SAFETY QUALIFICATION PROVEN / READY FOR CHATGPT FINAL REVIEW**

---

## 13. EXACT SOURCE DIFFS (FULL)

### 13.1 repairIncompleteRecoveryDocsWriteSuccessor.ts (full file as delivered)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor.ts b/projects/sfia-studio/app/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor.ts
new file mode 100644
index 00000000..d3a72fd7
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor.ts
@@ -0,0 +1,638 @@
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
+type AttemptSafetyFields = {
+  readonly status?: unknown;
+  readonly stopReason?: unknown;
+  readonly startedAt?: unknown;
+  readonly launchedAt?: unknown;
+  readonly irreversibleEffectsPossible?: unknown;
+  readonly processDiagnostic?: { readonly realProcessInvoked?: unknown };
+};
+
+/**
+ * CORR-01 safety hardening — auto-repair via T-A4 is allowed ONLY when the
+ * complete Attempt set for the EC proves a strict pre-start UNRESOLVED failure
+ * with no launch, no start, no irreversible-effect flag, and no REAL process.
+ *
+ * UNKNOWN ≠ SAFE. One "safe" Attempt never overrides a contradictory Attempt.
+ */
+function isStrictPreStartUnresolvedFailure(
+  attempt: AttemptSafetyFields,
+): boolean {
+  if (attempt.status !== "failed") return false;
+  const stop = String(attempt.stopReason ?? "");
+  if (!stop.includes("ARTIFACT_WRITE_MODE_UNRESOLVED")) return false;
+  if (attempt.startedAt != null && String(attempt.startedAt).trim() !== "") {
+    return false;
+  }
+  if (attempt.launchedAt != null && String(attempt.launchedAt).trim() !== "") {
+    return false;
+  }
+  if (attempt.irreversibleEffectsPossible === true) return false;
+  if (attempt.processDiagnostic?.realProcessInvoked === true) return false;
+  return true;
+}
+
+function hasContradictoryLaunchOrEffectEvidence(
+  attempt: AttemptSafetyFields,
+): boolean {
+  if (attempt.startedAt != null && String(attempt.startedAt).trim() !== "") {
+    return true;
+  }
+  if (attempt.launchedAt != null && String(attempt.launchedAt).trim() !== "") {
+    return true;
+  }
+  if (attempt.irreversibleEffectsPossible === true) return true;
+  if (attempt.processDiagnostic?.realProcessInvoked === true) return true;
+  return false;
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
+
+  const attempts = listed.attempts as readonly AttemptSafetyFields[];
+  const hasSafeUnresolved = attempts.some(isStrictPreStartUnresolvedFailure);
+  if (!hasSafeUnresolved) return false;
+
+  // Complete history: any contradictory launch/effect evidence fails closed.
+  if (attempts.some(hasContradictoryLaunchOrEffectEvidence)) return false;
+
+  return true;
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

### 13.2 recoveryDocsWriteModeSealing.d0.test.ts (full file as delivered)
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts
new file mode 100644
index 00000000..4b736d8a
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts
@@ -0,0 +1,1709 @@
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
+    /** When true, leave the confirmed incomplete tip without any Attempt. */
+    omitAttempt?: boolean;
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
+    if (!input.omitAttempt) {
+      await oa.executionAttemptServices!.attempts.create({
+        schemaVersion: "0.2.0-oa" as const,
+        attemptId,
+        executionContractId: incompleteId,
+        executionContractVersion: validatedInc.contract.version + 1,
+        selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
+        status: "failed" as const,
+        idempotencyKey: `idem:att:${attemptId}`,
+        correlationId: `cor:att:${attemptId}`,
+        version: 1,
+        createdAt: now,
+        failedAt: now,
+        stopReason: "REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED",
+        irreversibleEffectsPossible: false,
+        processDiagnostic: {
+          kind: "process_failure_diagnostic" as const,
+          realProcessInvoked: false,
+          boundaryProofMode: "cursor_real" as const,
+          exitCode: null,
+          stderrExcerpt: "ARTIFACT_WRITE_MODE_UNRESOLVED",
+          authoritativeBusinessEvidence: false,
+        },
+        provenance: {
+          schemaVersion: "0.1.0-oa" as const,
+          provenanceRecordId: `prv:${attemptId}`,
+          actor: LOCAL_PILOTE_ACTOR,
+          source: "system" as const,
+          timestamp: now,
+          correlationId: `cor:att:${attemptId}`,
+        },
+      } as never);
+    }
+
+    const incomplete =
+      await oa.executionContractServices!.getExecutionContract.execute({
+        executionContractId: incompleteId,
+      });
+    if (!incomplete.ok) throw new Error("reload incomplete");
+    expect(incomplete.contract.inputs?.artifactWriteMode).toBeUndefined();
+    expect(incomplete.contract.status).toBe("confirmed");
+
+    return {
+      incompleteId,
+      prepareId,
+      repairId,
+      attemptId: input.omitAttempt ? null : attemptId,
+      n2EvidenceId: n2.evidenceId,
+    };
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
+  async function loadPrimaryAttempt(ctx: {
+    oa: RuntimeOaStack;
+    incompleteId: string;
+  }) {
+    const listed =
+      await ctx.oa.executionAttemptServices!.listExecutionAttempts.execute({
+        executionContractId: ctx.incompleteId,
+      });
+    if (!listed.ok || listed.attempts.length === 0) {
+      throw new Error("primary attempt missing");
+    }
+    return listed.attempts[0]!;
+  }
+
+  async function expectRepairRefused(ctx: {
+    oa: RuntimeOaStack;
+    runtime: Awaited<ReturnType<typeof bootCorr01>>["runtime"];
+    seeded: { projectId: string };
+    decisionId: string;
+    incompleteId: string;
+    identity: string;
+  }) {
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
+    return prepared;
+  }
+
+  it("CORR01-S1 — strict pre-start UNRESOLVED → repair allowed", async () => {
+    const ctx = await bootCorr01("c01s1");
+    const att = await loadPrimaryAttempt(ctx);
+    expect(att.status).toBe("failed");
+    expect(String((att as { stopReason?: string }).stopReason ?? "")).toContain(
+      "ARTIFACT_WRITE_MODE_UNRESOLVED",
+    );
+    expect((att as { startedAt?: string }).startedAt).toBeUndefined();
+    expect((att as { launchedAt?: string }).launchedAt).toBeUndefined();
+    expect((att as { irreversibleEffectsPossible?: boolean }).irreversibleEffectsPossible).toBe(
+      false,
+    );
+    expect(
+      (att as { processDiagnostic?: { realProcessInvoked?: boolean } })
+        .processDiagnostic?.realProcessInvoked,
+    ).toBe(false);
+
+    const {
+      hasDeterministicPreStartWriteModeFailure,
+    } = await import(
+      "@/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor"
+    );
+    expect(
+      await hasDeterministicPreStartWriteModeFailure({
+        oa: ctx.oa,
+        executionContractId: ctx.incompleteId,
+      }),
+    ).toBe(true);
+
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
+    if (!prepared.ok) throw new Error(prepared.code);
+    expect(prepared.successor.status).toBe("confirmation_required");
+  });
+
+  it("CORR01-S2 — startedAt present → repair REFUSED", async () => {
+    const ctx = await bootCorr01("c01s2");
+    const att = await loadPrimaryAttempt(ctx);
+    const now = ctx.oa.clock.nowIso();
+    await ctx.oa.executionAttemptServices!.attempts.update(
+      { ...att, startedAt: now, version: att.version + 1 } as never,
+      att.version,
+    );
+    const prepared = await expectRepairRefused(ctx);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS");
+    }
+  });
+
+  it("CORR01-S3 — launchedAt present → repair REFUSED", async () => {
+    const ctx = await bootCorr01("c01s3");
+    const att = await loadPrimaryAttempt(ctx);
+    const now = ctx.oa.clock.nowIso();
+    // Domain: post-launch failed requires startedAt when launchedAt is set.
+    await ctx.oa.executionAttemptServices!.attempts.update(
+      {
+        ...att,
+        launchedAt: now,
+        startedAt: now,
+        version: att.version + 1,
+      } as never,
+      att.version,
+    );
+    const prepared = await expectRepairRefused(ctx);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS");
+    }
+  });
+
+  it("CORR01-S4 — irreversibleEffectsPossible=true → repair REFUSED", async () => {
+    const ctx = await bootCorr01("c01s4");
+    const att = await loadPrimaryAttempt(ctx);
+    await ctx.oa.executionAttemptServices!.attempts.update(
+      {
+        ...att,
+        irreversibleEffectsPossible: true,
+        version: att.version + 1,
+      } as never,
+      att.version,
+    );
+    const prepared = await expectRepairRefused(ctx);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS");
+    }
+  });
+
+  it("CORR01-S5 — realProcessInvoked=true → repair REFUSED", async () => {
+    const ctx = await bootCorr01("c01s5");
+    const att = await loadPrimaryAttempt(ctx);
+    await ctx.oa.executionAttemptServices!.attempts.update(
+      {
+        ...att,
+        processDiagnostic: {
+          kind: "process_failure_diagnostic" as const,
+          realProcessInvoked: true,
+          boundaryProofMode: "cursor_real" as const,
+          exitCode: null,
+          stderrExcerpt: "ARTIFACT_WRITE_MODE_UNRESOLVED",
+          authoritativeBusinessEvidence: false,
+        },
+        version: att.version + 1,
+      } as never,
+      att.version,
+    );
+    const prepared = await expectRepairRefused(ctx);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS");
+    }
+  });
+
+  it("CORR01-S6 — safe Attempt + contradictory started/launched Attempt → REFUSED", async () => {
+    const ctx = await bootCorr01("c01s6");
+    const now = ctx.oa.clock.nowIso();
+    const extraId = `xat:w3a:corr01-s6-${Math.random().toString(16).slice(2, 8)}`;
+    await ctx.oa.executionAttemptServices!.attempts.create({
+      schemaVersion: "0.2.0-oa" as const,
+      attemptId: extraId,
+      executionContractId: ctx.incompleteId,
+      executionContractVersion: 2,
+      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
+      status: "failed" as const,
+      idempotencyKey: `idem:att:${extraId}`,
+      correlationId: `cor:att:${extraId}`,
+      version: 1,
+      createdAt: now,
+      failedAt: now,
+      startedAt: now,
+      launchedAt: now,
+      stopReason: "REAL_LAUNCH_FAILED: OTHER",
+      irreversibleEffectsPossible: false,
+      processDiagnostic: {
+        kind: "process_failure_diagnostic" as const,
+        realProcessInvoked: false,
+        boundaryProofMode: "cursor_real" as const,
+        exitCode: 1,
+        stderrExcerpt: "contradictory launch",
+        authoritativeBusinessEvidence: false,
+      },
+      provenance: {
+        schemaVersion: "0.1.0-oa" as const,
+        provenanceRecordId: `prv:${extraId}`,
+        actor: LOCAL_PILOTE_ACTOR,
+        source: "system" as const,
+        timestamp: now,
+        correlationId: `cor:att:${extraId}`,
+      },
+    } as never);
+    const {
+      hasDeterministicPreStartWriteModeFailure,
+    } = await import(
+      "@/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor"
+    );
+    expect(
+      await hasDeterministicPreStartWriteModeFailure({
+        oa: ctx.oa,
+        executionContractId: ctx.incompleteId,
+      }),
+    ).toBe(false);
+    const prepared = await expectRepairRefused(ctx);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS");
+    }
+  });
+
+  it("CORR01-S7 — safe Attempt + contradictory realProcessInvoked Attempt → REFUSED", async () => {
+    const ctx = await bootCorr01("c01s7");
+    const now = ctx.oa.clock.nowIso();
+    const extraId = `xat:w3a:corr01-s7-${Math.random().toString(16).slice(2, 8)}`;
+    await ctx.oa.executionAttemptServices!.attempts.create({
+      schemaVersion: "0.2.0-oa" as const,
+      attemptId: extraId,
+      executionContractId: ctx.incompleteId,
+      executionContractVersion: 2,
+      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
+      status: "failed" as const,
+      idempotencyKey: `idem:att:${extraId}`,
+      correlationId: `cor:att:${extraId}`,
+      version: 1,
+      createdAt: now,
+      failedAt: now,
+      stopReason: "REAL_LAUNCH_FAILED: OTHER",
+      irreversibleEffectsPossible: false,
+      processDiagnostic: {
+        kind: "process_failure_diagnostic" as const,
+        realProcessInvoked: true,
+        boundaryProofMode: "cursor_real" as const,
+        exitCode: 1,
+        stderrExcerpt: "REAL invoked",
+        authoritativeBusinessEvidence: false,
+      },
+      provenance: {
+        schemaVersion: "0.1.0-oa" as const,
+        provenanceRecordId: `prv:${extraId}`,
+        actor: LOCAL_PILOTE_ACTOR,
+        source: "system" as const,
+        timestamp: now,
+        correlationId: `cor:att:${extraId}`,
+      },
+    } as never);
+    const prepared = await expectRepairRefused(ctx);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS");
+    }
+  });
+
+  it("CORR01-S8 — failed Attempt with other stopReason → repair REFUSED", async () => {
+    const ctx = await bootCorr01("c01s8");
+    const att = await loadPrimaryAttempt(ctx);
+    await ctx.oa.executionAttemptServices!.attempts.update(
+      {
+        ...att,
+        stopReason: "REAL_LAUNCH_FAILED: NETWORK_TIMEOUT",
+        version: att.version + 1,
+      } as never,
+      att.version,
+    );
+    const prepared = await expectRepairRefused(ctx);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS");
+    }
+  });
+
+  it("CORR01-S9 — no Attempt → repair REFUSED", async () => {
+    const boot = await bootRecoveryFixture("c01s9");
+    await seedFailedDocsWriteEpisode({
+      oa: boot.oa,
+      projectId: boot.seeded.projectId,
+      cycleInstanceId: boot.seeded.cycleInstanceId,
+      decisionId: boot.seedDecisionId,
+      targetPath: STUDYFLOW_TARGET,
+      sourceArtifactWriteMode: null,
+    });
+    const recoveryDecide = await proposeAndDecideGoverned(
+      boot.oa,
+      boot.seeded.projectId,
+    );
+    const seededInc = await seedIncompleteConfirmedSuccessor({
+      oa: boot.oa,
+      projectId: boot.seeded.projectId,
+      cycleInstanceId: boot.seeded.cycleInstanceId,
+      decisionId: recoveryDecide.decisionId,
+      targetPath: STUDYFLOW_TARGET,
+      identity: boot.identity,
+      omitAttempt: true,
+    });
+    const {
+      hasDeterministicPreStartWriteModeFailure,
+    } = await import(
+      "@/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor"
+    );
+    expect(
+      await hasDeterministicPreStartWriteModeFailure({
+        oa: boot.oa,
+        executionContractId: seededInc.incompleteId,
+      }),
+    ).toBe(false);
+    removeManagedTarget(boot.identity, STUDYFLOW_TARGET);
+    const context = await currentF2Context(boot.runtime, boot.seeded.projectId);
+    const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
+      oa: boot.oa,
+      projectId: boot.seeded.projectId,
+      decisionId: recoveryDecide.decisionId,
+      currentContext: context,
+      forceLocalAuthority: true,
+      boundedDocsWriteBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
+    });
+    expect(prepared.ok).toBe(false);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS");
+    }
+    const old = await boot.oa.executionContractServices!.getExecutionContract.execute({
+      executionContractId: seededInc.incompleteId,
+    });
+    expect(old.ok && old.contract.status).toBe("confirmed");
+  });
+
+  it("CORR01-S10 — non-failed Attempt → repair REFUSED", async () => {
+    const ctx = await bootCorr01("c01s10");
+    const att = await loadPrimaryAttempt(ctx);
+    const now = ctx.oa.clock.nowIso();
+    await ctx.oa.executionAttemptServices!.attempts.update(
+      {
+        ...att,
+        status: "cancelled",
+        cancelledAt: now,
+        stopReason: undefined,
+        failedAt: undefined,
+        irreversibleEffectsPossible: false,
+        processDiagnostic: {
+          kind: "process_failure_diagnostic" as const,
+          realProcessInvoked: false,
+          boundaryProofMode: "cursor_real" as const,
+          exitCode: null,
+          stderrExcerpt: "cancelled pre-start",
+          authoritativeBusinessEvidence: false,
+        },
+        version: att.version + 1,
+      } as never,
+      att.version,
+    );
+    const {
+      hasDeterministicPreStartWriteModeFailure,
+    } = await import(
+      "@/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor"
+    );
+    expect(
+      await hasDeterministicPreStartWriteModeFailure({
+        oa: ctx.oa,
+        executionContractId: ctx.incompleteId,
+      }),
+    ).toBe(false);
+    const prepared = await expectRepairRefused(ctx);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("RECOVERY_WRITE_MODE_REPAIR_AMBIGUOUS");
+    }
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

---

## ADDENDUM — GIT PUBLICATION / PR READINESS

Generated: 2026-09-26T14:16:00Z

Morris GO consumed: **commit + push + PR creation** (merge NOT authorized)

| Field | Value |
|-------|-------|
| Branch | `fix/sfia-studio-recovery-docs-write-mode-sealing-01` |
| Base / parent SHA | `cf1fa4ca139fdbdbf825e134e732f4e25b4c0aa0` (= origin/main at publish) |
| Project commit SHA | `280bb041b53a8dd1836f991b4d6cbf4e9191c077` |
| Commit parent SHA | `cf1fa4ca139fdbdbf825e134e732f4e25b4c0aa0` |
| Commit message | `fix(studio): seal recovery docs-write mode before retry` |
| Remote branch tip | `280bb041b53a8dd1836f991b4d6cbf4e9191c077` (matches local HEAD) |
| Push | PASS (new remote branch; no force) |

### Exact committed files (7)

1. `projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts` (M)
2. `projects/sfia-studio/app/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor.ts` (A)
3. `projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts` (M)
4. `projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts` (A)
5. `projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts` (M)
6. `projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts` (M)
7. `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts` (M)

`.tmp-sfia-review/**` was **not** staged into the project commit.

### PR

| Field | Value |
|-------|-------|
| Number | **#525** |
| Title | `fix(studio): seal recovery docs-write mode before retry` |
| URL | https://github.com/mcleland147/sfia-workspace/pull/525 |
| State | OPEN |
| Draft | false |
| Head | `fix/sfia-studio-recovery-docs-write-mode-sealing-01` |
| Base | `main` |
| headRefOid | `280bb041b53a8dd1836f991b4d6cbf4e9191c077` |
| mergeable | MERGEABLE (GitHub report at creation) |

### Immediate CI / checks

At publication inspect:

- `Detect SFIA Studio changes` — **PENDING**

Full CI not yet complete. No merge performed.

### Validation inherited (unchanged Product source since final reviewed handoff)

- typecheck: PASS
- lint: PASS
- build: PASS
- Vitest: 431 files / 4780 tests passed / 0 failed / 17 files skipped / 137 tests skipped
- modeled governance: 73 / 0

### Anti-claims / reserves

- StudyFlow: **NOT MUTATED**
- Cursor REAL: **NOT RUN**
- Merge: **NOT AUTHORIZED / NOT PERFORMED**
- Nora `recommended_option_ref_only_on_recommendation`: OPEN / NON-BLOCKING / OUT OF SCOPE

### Next gate

**Morris merge decision after CI + review.**
