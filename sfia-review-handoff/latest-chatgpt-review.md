# RECOVERY-DOCS-WRITE-MODE-SEALING-01 — FULL Review Pack
## Cycle 8 — Delivery / implémentation · CRITICAL

Generated: 2026-09-26T13:18:00Z
Macro: RECOVERY-DOCS-WRITE-MODE-SEALING-01
Cycle: 8 — Delivery / implémentation
Profile: CRITICAL
Morris GO: CORRECTION AUTHORIZED — consumed for local Product source/test work only
Project commit/push/PR/merge: **NOT performed / NOT authorized**

---

## 1. GIT TRUTH

| Field | Value |
|-------|-------|
| Branch | `fix/sfia-studio-recovery-docs-write-mode-sealing-01` |
| HEAD / origin/main | `cf1fa4ca139fdbdbf825e134e732f4e25b4c0aa0` |
| Main moved | NO |
| Unrelated Product dirt | NONE (only `.tmp-sfia-review/**` local artifacts) |
| Project commit | **NONE** — LOCAL / NOT COMMITTED / NOT PUSHED |

---

## 2. NATURAL STUDYFLOW REAL FAILURE (READ-ONLY)

Campaign Product DB (read-only / query_only):

`projects/sfia-studio/.sfia-exec/new-project-campaign-01/product/oa-product.sqlite`

| Field | Observed |
|-------|----------|
| Attempt | `xat:w3a:d6df3f9e31e8b84b` |
| Status | `failed` |
| stopReason | `REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED` |
| Successor EC | `xct:m3-res:dec:w2-trj:408666c3-2c87-4967-a683-87bfe2b0d74e` |
| EC status | `confirmed` |
| action | `cursor.docs_write.apply` |
| target | `workspace.isolated.docs_write` |
| inputs.targetPath | `projects/studyflow/01-cadrage/note-de-cadrage.md` |
| inputs.artifactWriteMode | **ABSENT** |
| Evidence for Attempt | diagnostic `log_ref` only — **no artifact success** |

StudyFlow Product: **NOT MUTATED** in this cycle.
Managed clone: **NOT MUTATED**.

Proof level of natural evidence:

**REAL BOUNDARY REACHED / BUSINESS EFFECT FAILED**

---

## 3. ROOT CAUSE (VERIFIED AGAINST SOURCE)

Recovery path:

`resolveRecoveryExecutionBinding()`
→ `cloneDocsWriteInputsForRecoverySuccessor()` (keepKeys **omit** `artifactWriteMode`)
→ `prepareDocsWriteRecoverySuccessorFromDecision()` spread binding inputs into resolve
→ Execute / Cursor REAL
→ `assertArtifactWriteModeAtExecution({ requireResolvedWriteMode: true })`
→ **`ARTIFACT_WRITE_MODE_UNRESOLVED`**

Normal docs_write PREPARE already seals CREATE/UPDATE via
`classifyArtifactWriteMode` + `hasDurableSameArtifactEvidence` (activeCycleGovernedContinuation).
Recovery prepare did **not** reseal from current managed-repo truth.

Root cause matches current `origin/main`.

---

## 4. HARD DESIGN RULES APPLIED

- Do **not** add `artifactWriteMode` to clone keepKeys as authority
- Do **not** copy historical CREATE/UPDATE from failed source EC
- Do **not** default CREATE or UPDATE
- Do **not** weaken `assertArtifactWriteModeAtExecution` / `requireResolvedWriteMode`
- Historical mode is ignored; current trusted facts win
- ASK / UNKNOWN → fail closed (no executable successor)

---

## 5. IMPLEMENTATION

Primary file:

`projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts`

### New helper — `sealRecoveryDocsWriteArtifactWriteMode`

A. Trusted launch context already resolved (reused — no second launch resolve for SHA).
B. Require `managedRepoRoot` non-null (UNKNOWN ≠ ABSENT).
C. `probeManagedRepoRelativePathExists` on binding.targetPath under managed clone.
D. If exists: `evidenceReviewServices.repository.listByProject` + `hasDurableSameArtifactEvidence`.
E. `classifyArtifactWriteMode({ targetExists, intentClearlySameDeliverable })`.
F. Require CREATE|UPDATE; ASK → `ARTIFACT_WRITE_MODE_ASK`.
G. Seal into resolveM3 `inputs.artifactWriteMode`.
H. Explicitly drop any residual source `artifactWriteMode` from cloned inputs before seal.

### Idempotent reuse

Reuse current recovery docs_write successor only when durable EC inputs already carry
CREATE|UPDATE; otherwise fall through and re-seal.

### Execution safety retained

`assertArtifactWriteModeAtExecution` unchanged. Still fails:

- ARTIFACT_WRITE_MODE_UNRESOLVED
- ARTIFACT_WRITE_MODE_ASK
- ARTIFACT_WRITE_MODE_EXECUTION_REVALIDATION_UNAVAILABLE
- ARTIFACT_WRITE_MODE_STALE_CREATE_AT_EXECUTION
- ARTIFACT_WRITE_MODE_STALE_UPDATE_AT_EXECUTION

### Test harness adaptations (non-Product runtime)

- `w2Harness.seedQualifiedProject`: ensure managed clone skeleton for per-suffix
  repository binding identity so existence probes are EMPTY≠UNKNOWN.
- `pjReproof05`: unpinned prepare still fail-closed; accept
  `MANAGED_REPO_UNAVAILABLE` **or** `BASE_HEAD_SHA_UNRESOLVED` when skeleton exists
  but HEAD is unreadable (VITEST still does not auto-pin).

---

## 6. SEMANTICS PROVEN

| Case | Result |
|------|--------|
| A — target absent | CREATE sealed |
| B — exists + same-artifact Evidence | UPDATE sealed |
| C — exists without proof | ASK fail-closed |
| D — existence unavailable | EXISTENCE_UNAVAILABLE fail-closed |
| E — stale source CREATE, current UPDATE truth | fresh UPDATE wins |
| F — stale source UPDATE, target absent | fresh CREATE wins |
| Contradictory Evidence | ASK fail-closed |
| Sealed CREATE/UPDATE at guard | no UNRESOLVED |
| TOCTOU CREATE→appears / UPDATE→disappears | STALE_* retained |

---

## 7. FILES CHANGED

```
M  projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
A  projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts
M  projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
M  projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
```

Forbidden paths: NONE.

### Meaningful prepare sealing excerpt

After trusted launch succeeds:

1. strip residual `artifactWriteMode` from cloned business inputs
2. `sealRecoveryDocsWriteArtifactWriteMode({ identity, managedRepoRoot, targetPath })`
3. inject `artifactWriteMode: CREATE|UPDATE` into `resolveM3ExecutionContract` inputs
4. preserve `assertArtifactWriteModeAtExecution` at Fake/REAL launch boundaries unchanged

---

## 8. TARGETED VALIDATION

Files / suites:

- `recoveryDocsWriteModeSealing.d0.test.ts` (RWM-01…11 + StudyFlow-equivalent)
- `checkpointF.recoveryDocsWriteSuccessor.d0.test.ts`
- `recoveryOwnership.*` (no regression)
- `pjReproof05.executionEligibility.d0.test.ts`
- `projectWorkspaceArtifactRouting.d0.test.ts`

Result: **PASS** (34/34 on last focused batch including RWM+checkpointF+pjReproof05).

---

## 9. FULL VALIDATION

| Gate | Result |
|------|--------|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| Vitest | **431 files passed** / 17 skipped · **4758 tests passed** / 137 skipped · **0 failed** |
| modeled governance | **73 pass / 0 fail** |

Delta vs prior integrated macro (~430 files / 4744 tests): +1 file / +14 tests (RWM suite).

---

## 10. FAKE / REAL QUALIFICATION

| Claim | Status |
|-------|--------|
| Deterministic recovery write-mode sealing | **PROVEN** |
| Natural StudyFlow docs_write REAL success | **NOT claimed** |
| Artifact written / artifact Evidence REAL | **NOT claimed** |
| Cursor REAL launched from this cycle | **NO** |
| Fake boundary used only as external substitute in tests | YES (where applicable) |

Proof level this cycle:

**DETERMINISTIC RECOVERY WRITE-MODE SEALING PROVEN**

---

## 11. RESERVES / ANTI-CLAIMS / OUT OF SCOPE

- Nora `recommended_option_ref_only_on_recommendation`: OPEN / NON-BLOCKING / OUT OF SCOPE
- StudyFlow natural Pilot→Studio→Nora REAL reproof: **NEXT AFTER integration**
- no Product-global READY
- runtime v3 NON ADOPTED
- no PR / merge readiness claim
- StudyFlow NOT resumed / NOT mutated
- managed clone NOT mutated
- #524 recovery ownership behavior retained (CLASS 1 / CLASS 2)

---

## 12. DEBT / EXIT

Exit proof of this Cursor cycle: deterministic sealing + guard acceptance.

Next after ChatGPT review + repository delivery + merge:

same StudyFlow project → recovery PREPARE → Inspect/Confirm/Authorize/Execute →
expect no `ARTIFACT_WRITE_MODE_UNRESOLVED` when current repo truth supports CREATE/UPDATE.

---

## 13. FINAL VERDICT

**RECOVERY DOCS_WRITE MODE SEALING — DETERMINISTICALLY PROVEN / READY FOR CHATGPT REVIEW**

---

## 14. FULL SOURCE DIFFS (REPUBLISH ADDENDUM)

Republished: 2026-09-26T13:25:59Z

Git truth at republish:

- branch: `fix/sfia-studio-recovery-docs-write-mode-sealing-01`
- HEAD / origin/main: `cf1fa4ca139fdbdbf825e134e732f4e25b4c0aa0`
- Product sources unchanged since full validation (4758/0) — no re-run
- Project commit: still NONE / LOCAL / NOT COMMITTED / NOT PUSHED

Complete `git diff` for the four delivery files follows.

### `projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
index e3d7535b..7fc235bb 100644
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
@@ -16,6 +21,11 @@ import {
   M4_BOUNDED_DOCS_WRITE_CAPABILITY,
   M4_BOUNDED_DOCS_WRITE_TARGET,
 } from "@/lib/oa/execution-attempt";
+import {
+  classifyArtifactWriteMode,
+  hasDurableSameArtifactEvidence,
+} from "@/lib/oa/project/domain/artifactTargetRouting";
+import { probeManagedRepoRelativePathExists } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import {
   launchContextAsContractInputs,
   resolveTrustedProductLaunchContext,
@@ -37,6 +47,122 @@ import {
 } from "./resolveRecoveryExecutionBinding";
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

@@ -239,34 +365,44 @@ export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
     continuityBefore.contract.target === M4_BOUNDED_DOCS_WRITE_TARGET
   ) {
     const c = continuityBefore.contract;
-    return {
-      ok: true,
-      decisionId: input.decisionId,
-      binding,
-      prepareContractId: prepareId,
-      successor: {
+    const durable =
+      await oa.executionContractServices.getExecutionContract.execute({
         executionContractId: c.executionContractId,
-        version: c.version,
-        status: c.status,
-        action: c.action,
-        target: c.target,
-        scope: c.scope,
-        requiredAuthority: c.requiredAuthority,
-        constraints: [...c.constraints],
-        stopConditions: [...c.stopConditions],
-        requiredCapabilities: [...c.requiredCapabilities],
-        reversibility: c.reversibility,
-        semanticFingerprint: c.semanticFingerprint,
-        supersedesExecutionContractId: null,
-        supersessionReason: null,
-        inspectionDisclosure: c.inspectionDisclosure,
-      },
-      cancelledWrongGenericContractId: null,
-      reusedFromIdempotency: true,
-      executionPerformed: false,
-      attemptCreated: false,
-      confirmationRequired: true,
-    };
+      });
+    const sealedMode = durable.ok
+      ? durable.contract.inputs?.artifactWriteMode
+      : undefined;
+    // Incomplete prior successor (mode missing) — do not reuse; re-seal below.
+    if (sealedMode === "CREATE" || sealedMode === "UPDATE") {
+      return {
+        ok: true,
+        decisionId: input.decisionId,
+        binding,
+        prepareContractId: prepareId,
+        successor: {
+          executionContractId: c.executionContractId,
+          version: c.version,
+          status: c.status,
+          action: c.action,
+          target: c.target,
+          scope: c.scope,
+          requiredAuthority: c.requiredAuthority,
+          constraints: [...c.constraints],
+          stopConditions: [...c.stopConditions],
+          requiredCapabilities: [...c.requiredCapabilities],
+          reversibility: c.reversibility,
+          semanticFingerprint: c.semanticFingerprint,
+          supersedesExecutionContractId: null,
+          supersessionReason: null,
+          inspectionDisclosure: c.inspectionDisclosure,
+        },
+        cancelledWrongGenericContractId: null,
+        reusedFromIdempotency: true,
+        executionPerformed: false,
+        attemptCreated: false,
+        confirmationRequired: true,
+      };
+    }
   }

   const cleared = await cancelWrongGenericCurrentIfNeeded({
@@ -294,8 +430,12 @@ export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
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

@@ -431,6 +571,21 @@ export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
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
   const resolution = {
     ...profile,
     evidenceRequirements: evidenceFromSource,
@@ -439,6 +594,7 @@ export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
       ...inputs,
       ...trustedInputs,
       baseHeadSha: sha,
+      artifactWriteMode: sealedMode.artifactWriteMode,
       ...(trustedLaunchPinned
         ? { trustedLaunchContextPinnedAtPrepare: "true" }
         : {}),
```

### `projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts
new file mode 100644
index 00000000..ccd807a4
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts
@@ -0,0 +1,697 @@
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
```

### `projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts`

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

### `projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts`

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

## 15. FINAL VERDICT (UNCHANGED)

**RECOVERY DOCS_WRITE MODE SEALING — DETERMINISTICALLY PROVEN / READY FOR CHATGPT REVIEW**

Addendum only: full source diffs attached for ChatGPT review completeness.
