# ChatGPT Review Pack — FULL
## PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 — Checkpoint E evidence contract semantic consistency

**Timestamp (UTC):** 2026-09-17T19:36:07Z
**Pack kind:** FULL (code modification present — modified content included below)
**Pack revision:** R4 — evidenceRequirements coherent with bounded NO_* docs_write (preserves R1/R2/R3)
**Automation:** L3 handoff publish only; **NO** project commit/push/PR/merge

---

## 1. Git Truth

| Field | Value |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| Branch | `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| HEAD | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| origin/main | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| Baseline match | YES |
| Macro | PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 |
| Cycle | 9 — QA / Validation |
| Typologie | EVOL |
| Profil | CRITICAL |

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/package-lock.json
?? .tmp-sfia-review/checkpoint-e-prepare-fix.diff
?? .tmp-sfia-review/checkpoint-e-r4-evidence-coherence.diff
?? .tmp-sfia-review/checkpoint-e-resume-full.diff
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceRematerialize.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointE.prepareResume.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/docsWriteEvidenceContradictionView.ts
?? projects/sfia-studio/app/features/project-assistant/f3/rematerializeDocsWriteEvidenceRequirements.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareReadyProposalPursueContinuation.ts
```

---

## 1bis. package-lock.json (hors scope — préexistant)

`projects/sfia-studio/app/package-lock.json` dirty préexistant — **LEFT UNTOUCHED**.

---

## 2. Contradiction exacte (EC inspecté campagne)

| Item | Value |
|---|---|
| EC | `xct:m3-res:dec:w2-prop:0e4b08bb-5b5c-4c99-b57f-d49234abb693` |
| Status | confirmation_required (inspected; NOT confirmed; NOT authorized; NOT executed) |
| Action | `cursor.docs_write.apply` |
| Target | `workspace.isolated.docs_write` |
| Path | `projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md` |
| Constraints | include **NO_COMMIT / NO_GIT_REMOTE / NO_PUSH / NO_PR / NO_MERGE** |
| evidenceRequirements (durable) | `["git:local_commit","git:remote_push","git:pull_request","git:ci_status","git:review_status","git:merge","git:post_merge_verification"]` |
| Target file on disk | **ABSENT** (OK) |
| attempts | **0** |
| REAL spawn | **0** |

Contradiction: EC forbids Git effects but demands full Git lifecycle proofs.

---

## 3. Provenance du set Git

`BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS` (CR-GCEC-05 first-vertical Git completion proof SET).

Historically intended as **downstream Git lifecycle** proofs for GCEC progressive vertical — **not** proofs of the local docs_write filesystem effect itself.

R1 closed syntax by coercing Nora free-text → this Git set, revealing the semantic contradiction under NO_*.

---

## 4. Matrice requirement → effect → allowed?

| Requirement | Producing effect | Allowed by EC NO_*? | Runtime materializes? |
|---|---|---|---|
| git:local_commit | git.commit | **NO** | Git commit agent — forbidden |
| git:remote_push | git.push | **NO** | forbidden |
| git:pull_request | github.pr.create | **NO** | forbidden |
| git:ci_status | Studio verification | N/A (needs merge lineage) | not for sandbox |
| git:review_status | Studio verification | N/A | not for sandbox |
| git:merge | github.pr.merge | **NO** | forbidden |
| git:post_merge_verification | Studio verification | N/A | not for sandbox |
| **evreq:docs_write_artifact** (retained) | filesystem create/modify | **YES** | `ingestDocsWriteArtifactEvidence` → type=artifact, source=`execution_attempt:docs_write` |

---

## 5. Classification A/B/C/D/E

**B + C (non-structurant)**

- **B:** PREPARE/resolve selected the wrong evidence set for the bounded NO_* profile.
- **C:** Compose minimal OA-valid set using keywords already recognized by `contractEffectClassification` / `qualifyExecutionContractCompletion` (`docs_write`+`artifact`); no new Evidence registry/schema.

**Not E:** no new Evidence architecture, no migration, no authority semantics change.

---

## 6. Root cause

R1 fallback mapped docs_write free-text → `BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS` unconditionally.
Bounded M3 profile always ships NO_COMMIT/NO_PUSH/NO_PR/NO_MERGE.
Successor inherited PREPARE evidenceRequirements via supersede without override.
Pipeline already proves local write via artifact Evidence — Git set was impossible to satisfy in-scope.

---

## 7. Correction

1. Add `BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS = ["evreq:docs_write_artifact"]`.
2. PREPARE free-text/missing fallback → **LOCAL** (not Git); valid applicable OA IDs still preserved (T7).
3. `resolveDocsWriteEvidenceRequirementsForBoundedProfile`: strip Git lifecycle when NO_* forbids; keep Git set only when Git effects allowed.
4. `boundedDocsWriteM3ResolutionProfile` ships LOCAL `evidenceRequirements`; resolve passes them onto successor supersede.
5. Rematerialize path for **already-durable** confirmation_required EC with contradiction: OA supersede → new fingerprint → prior inspection stale; UI CTA « Actualiser les exigences de preuve ».
6. Confirm disabled while contradiction visible.

### Profile module (complete)

```typescript
/**
 * Sibling M3 resolution profile for the governed REAL bounded docs-write path
 * (D-GCEC-03 / GAP-1 sibling).
 *
 * Values are harvested from `createM4BoundedDocsWriteCursorAgentDescriptor`
 * — not invented here.
 *
 * NOT a new engine. NOT client-injectable. NOT authorized live REAL in this cycle.
 */

import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";
import { DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS } from "@/lib/oa/execution-contract";
import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";

/**
 * Local filesystem evidence obligations for the bounded docs-write profile
 * (NO_COMMIT / NO_PUSH / NO_PR / NO_MERGE).
 *
 * Keywords `docs_write` + `artifact` are already recognized by
 * contractEffectClassification / qualifyExecutionContractCompletion;
 * ingestDocsWriteArtifactEvidence emits type=artifact +
 * source=execution_attempt:docs_write. OA `evreq:` prefix satisfies
 * isOaIdentifier — no new Evidence registry / schema.
 */
export const BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS = [
  "evreq:docs_write_artifact",
] as const;

/**
 * GCEC progressive Git lifecycle proof set (CR-GCEC-05).
 * Use ONLY when the contract authorizes the corresponding Git effects.
 * Must NOT be the default for the bounded NO_* docs-write profile.
 */
export const BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS = [
  "git:local_commit",
  "git:remote_push",
  "git:pull_request",
  "git:ci_status",
  "git:review_status",
  "git:merge",
  "git:post_merge_verification",
] as const;

const GIT_LIFECYCLE_EVIDENCE = new Set<string>([
  ...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
  "git:commit",
  "git:push",
]);

const GIT_FORBIDDING_CONSTRAINTS = new Set([
  "NO_COMMIT",
  "NO_GIT_REMOTE",
  "NO_PUSH",
  "NO_PR",
  "NO_MERGE",
]);

export function isGitLifecycleEvidenceRequirement(id: string): boolean {
  return GIT_LIFECYCLE_EVIDENCE.has(id);
}

export function docsWriteConstraintsForbidGitLifecycle(
  constraints: readonly string[],
): boolean {
  return constraints.some((c) => GIT_FORBIDDING_CONSTRAINTS.has(c));
}

/**
 * Select evidenceRequirements coherent with bounded docs-write constraints.
 * Strips Git lifecycle obligations when NO_* forbids those effects.
 * Preserves applicable non-Git OA identifiers from PREPARE when present.
 */
export function resolveDocsWriteEvidenceRequirementsForBoundedProfile(input: {
  fromPrepare: readonly string[];
  constraints: readonly string[];
}): string[] {
  const fromPrepare = [...input.fromPrepare];
  if (!docsWriteConstraintsForbidGitLifecycle(input.constraints)) {
    return fromPrepare.length > 0
      ? fromPrepare
      : [...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS];
  }
  const kept = fromPrepare.filter((r) => !isGitLifecycleEvidenceRequirement(r));
  if (kept.length > 0) return kept;
  return [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS];
}

export function docsWriteEvidenceContradictsConstraints(input: {
  evidenceRequirements: readonly string[];
  constraints: readonly string[];
}): boolean {
  if (!docsWriteConstraintsForbidGitLifecycle(input.constraints)) return false;
  return input.evidenceRequirements.some(isGitLifecycleEvidenceRequirement);
}

export function boundedDocsWriteM3ResolutionProfile(): M3ResolvedExecutionFields {
  return {
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: M4_BOUNDED_DOCS_WRITE_TARGET,
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    reversibility: "reversible",
    scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    constraints: [
      "BOUNDED DOCS-WRITE",
      "PATH_ALLOWLIST_ONLY",
      "TEXT_DOCS_ONLY",
      "NO_DELETE",
      "NO_COMMIT",
      "NO_GIT_REMOTE",
      "NO_PUSH",
      "NO_PR",
      "NO_MERGE",
      "GATE D REQUIRED",
      "NO WILDCARD",
    ],
    stopConditions: [
      "AUTHORITY_DENIED",
      "CONTEXT_STALE",
      "DECISION_NOT_CURRENT",
      "GATE_D_REQUIRED",
      "REAL_BOUNDARY_DISABLED",
      "BASE_SHA_DRIFT",
      "PATH_ESCAPE",
      "OUT_OF_SCOPE_WRITE",
    ],
    executionWindowClass: DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
    evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
  };
}

export const BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON =
  "PRE-M6 Option A — resolve durable M3 PREPARE via existing G-UX-15 supersession (bounded docs-write Cursor REAL profile; ZERO LIVE in this cycle)" as const;

export const DOCS_WRITE_EVIDENCE_REMATERIALIZE_REASON =
  "docs_write_evidence_requirements_coherence — strip Git lifecycle proofs forbidden by bounded NO_* constraints" as const;
```

---

## 8. Fichiers modifiés / ajoutés (R4)

**R4 core:**
- `f3/boundedDocsWriteM3ResolutionProfile.ts`
- `f3/prepareM3FromDecision.ts` (fallback LOCAL; R1 coerce preserved)
- `f3/resolveM3ExecutionContract.ts` (pass evidenceRequirements on docs_write supersede)
- `f3/docsWriteEvidenceContradictionView.ts` (**NEW**, client-safe)
- `f3/rematerializeDocsWriteEvidenceRequirements.ts` (**NEW**)
- `f3/index.ts`
- `w2/actions.ts` (`w2RematerializeDocsWriteEvidenceAction`)
- `pre-m6-product-ui/surfaces/TrajectorySurface.tsx` (CTA + Confirm gate)
- `__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts` (R1 expectations → LOCAL)
- `__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts` (**NEW**)
- `__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceRematerialize.d0.test.ts` (**NEW**)

**Preserved from R1/R3 (unchanged intent):**
- prepareReadyProposalPursueContinuation + resume wiring
- Nora free-text → inputs disclosure

**Hors scope:** `package-lock.json`

---

## 9. Diff exploitable (R4)

```diff
===== R4 TRACKED + PRIOR R1/R3 DIFF (relevant) =====
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
index 7406435e..90b51d7c 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
@@ -534,6 +534,116 @@ describe("M3 ExecutionContract UNRESOLVED semantics (R1)", () => {
     expect(prepared.code).toBe("DECISION_NOT_CURRENT");
   });

+  it("CHECKPOINT-E — docs_write Nora free-text evidenceRequirements coerce to OA identifiers (not CONTRACT_INVALID)", async () => {
+    const noraProse = [
+      "Résultat de l’écriture du fichier",
+      "Résultat de la vérification du contenu",
+    ];
+    const result = await recordAndPrepare(
+      "ckpt-e-nora-evidence.sqlite",
+      {
+        objective:
+          "Matérialiser la fiche Markdown requise par le cycle actif dans le dépôt lié.",
+        requestedOperation: "cursor.docs_write.apply",
+        intentKind: "docs_write",
+        targetRepositoryRef: "mcleland147/sfia-workspace",
+        targetPath:
+          "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md",
+        scopeIn: ["projects/sfia-studio/.sandbox"],
+        scopeOut: ["Tout autre fichier"],
+        requiredCapabilities: ["cap:cursor.docs_write"],
+        evidenceRequirements: noraProse,
+        expectedOutputs: [
+          "Le fichier Markdown matérialisé au chemin cible",
+          "Vérification de l’existence et de la conformité minimale du fichier",
+        ],
+        reversibilityExpectation: "unknown",
+      },
+      "dec:m3:ckpt-e-nora-evidence",
+    );
+    expect(result).not.toBeNull();
+    if (!result) return;
+    expect(result.prepared.mode).toBe("M3_PREPARE");
+    expect(result.prepared.executionPerformed).toBe(false);
+    expect(result.prepared.cursorReal).toBe(false);
+    expect(result.contract.action).toBe("cursor.docs_write.apply");
+    expect(result.contract.target).toBe("workspace.isolated.docs_write");
+    // Contract field must be OA identifiers — Nora prose must not leak here.
+    for (const id of result.contract.evidenceRequirements) {
+      expect(id).toMatch(/^[a-z][a-z0-9]*:/);
+    }
+    expect(result.contract.evidenceRequirements).toEqual([
+      "evreq:docs_write_artifact",
+    ]);
+    // Free-text preserved in inputs for disclosure (not EC identifier SoT).
+    expect(result.contract.inputs?.evidenceRequirements).toEqual(noraProse);
+  });
+
+  it("CHECKPOINT-E R4 — docs_write free-text fallback must NOT demand Git lifecycle under NO_* profile", async () => {
+    const result = await recordAndPrepare(
+      "ckpt-e-r4-local-evidence.sqlite",
+      {
+        objective: "Matérialiser un fichier sandbox local.",
+        requestedOperation: "cursor.docs_write.apply",
+        intentKind: "docs_write",
+        targetRepositoryRef: "mcleland147/sfia-workspace",
+        targetPath:
+          "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md",
+        scopeIn: ["projects/sfia-studio/.sandbox"],
+        requiredCapabilities: ["cap:cursor.docs_write"],
+        evidenceRequirements: [
+          "Résultat de l’écriture du fichier",
+          "Résultat de la vérification du contenu",
+        ],
+      },
+      "dec:m3:ckpt-e-r4-local-evidence",
+    );
+    expect(result).not.toBeNull();
+    if (!result) return;
+    const gitLifecycle = [
+      "git:local_commit",
+      "git:remote_push",
+      "git:pull_request",
+      "git:ci_status",
+      "git:review_status",
+      "git:merge",
+      "git:post_merge_verification",
+    ];
+    for (const id of result.contract.evidenceRequirements) {
+      expect(gitLifecycle).not.toContain(id);
+      expect(id).toMatch(/^[a-z][a-z0-9]*:/);
+    }
+    expect(result.contract.evidenceRequirements).toEqual([
+      "evreq:docs_write_artifact",
+    ]);
+  });
+
+  it("CHECKPOINT-E regression — docs_write with valid OA evidenceRequirements preserves them", async () => {
+    const result = await recordAndPrepare(
+      "ckpt-e-valid-evidence.sqlite",
+      {
+        requestedOperation: "cursor.docs_write.apply",
+        intentKind: "docs_write",
+        targetRepositoryRef: "mcleland147/sfia-workspace",
+        targetPath:
+          "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md",
+        scopeIn: ["projects/sfia-studio/.sandbox"],
+        requiredCapabilities: ["cap:cursor.docs_write"],
+        evidenceRequirements: [
+          "evreq:file-write-result",
+          "evreq:content-verification",
+        ],
+      },
+      "dec:m3:ckpt-e-valid-evidence",
+    );
+    expect(result).not.toBeNull();
+    if (!result) return;
+    expect(result.contract.evidenceRequirements).toEqual([
+      "evreq:file-write-result",
+      "evreq:content-verification",
+    ]);
+  });
+
   it("L — critical safety negatives", () => {
     const projection = projectCursorPrepareOnly({
       schemaVersion: "0.2.0-oa",
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 3ac63c8d..daa2e512 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -22,6 +22,7 @@ import {
   projectAssistantResolveLegacyM3DocsWriteAction,
 } from "@/features/project-assistant/actions";
 import { isLegacyDocsWritePrepareContractView } from "@/features/project-assistant/f3/legacyDocsWritePrepareContractView";
+import { isDocsWriteEvidenceContradictionView } from "@/features/project-assistant/f3/docsWriteEvidenceContradictionView";
 import {
   w2AmendExecutionContractAction,
   w2AuthorizeExecutionContractAction,
@@ -38,6 +39,7 @@ import {
   w2ReadActiveDecisionSubjectAction,
   w2ReadCurrentGovernedExecutionContinuityAction,
   w2RehydrateProductOutcomeAction,
+  w2RematerializeDocsWriteEvidenceAction,
 } from "@/features/project-assistant/w2/actions";
 import {
   projectAssistantApprovePreCycleCandidateTrajectoryAction,
@@ -390,6 +392,18 @@ export function TrajectorySurface({
         requiredCapabilities: contract.requiredCapabilities,
       }),
   );
+  const docsWriteEvidenceRematerializeReady = Boolean(
+    !decisionDefersExecution &&
+      !legacyDocsWriteRematerializeReady &&
+      contract &&
+      isDocsWriteEvidenceContradictionView({
+        action: contract.action,
+        target: contract.target,
+        constraints: contract.constraints,
+        evidenceRequirements:
+          contract.inspectionDisclosure?.evidenceRequirements ?? [],
+      }),
+  );

   function paintAttemptPhase(
     phase: GovernedExecutePhaseSuccess["phase"],
@@ -483,10 +497,21 @@ export function TrajectorySurface({
       setSubjectReadStatus("ready");
       return;
     }
+    if (result.kind === "pursue_prepare_ready") {
+      // Restart resume: durable pursue HD owns PREPARE — no OptionSet, no reinstruction.
+      setOptionSet(null);
+      setPendingReinstruction(null);
+      setDecision(result.decision);
+      setDecided(null);
+      setError(null);
+      setSubjectReadStatus("ready");
+      return;
+    }
     setPendingReinstruction(null);
     // kind === "none" — authoritative Proposal Decision Subject absence.
     // Clear stale Proposal-backed OptionSet; preserve generic ProjectTrajectory
-    // OptionSet. Do NOT clear HumanDecision / decided / EC state here.
+    // OptionSet. Do NOT clear HumanDecision / decided / EC state here —
+    // except when no prepare-ready continuation either (decision may be stale session).
     setOptionSet((current) => {
       if (!current) return null;
       const proposalBacked =
@@ -998,6 +1023,70 @@ export function TrajectorySurface({
     onDurableFactsChanged,
   ]);

+  const rematerializeDocsWriteEvidenceContract = useCallback(async () => {
+    if (continuityMutationBlocked) return;
+    if (!contract) return;
+    if (
+      !isDocsWriteEvidenceContradictionView({
+        action: contract.action,
+        target: contract.target,
+        constraints: contract.constraints,
+        evidenceRequirements:
+          contract.inspectionDisclosure?.evidenceRequirements ?? [],
+      })
+    ) {
+      return;
+    }
+    setBusy("contract");
+    setError(null);
+    const result = await w2RematerializeDocsWriteEvidenceAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+    });
+    setBusy(null);
+    if (!result.ok) {
+      setError(result.message);
+      return;
+    }
+    const prepared = result.successor;
+    setContract({
+      executionContractId: prepared.executionContractId,
+      version: prepared.version,
+      status: prepared.status,
+      action: prepared.action,
+      target: prepared.target,
+      scope: prepared.scope,
+      requiredAuthority: prepared.requiredAuthority,
+      constraints: [...prepared.constraints],
+      stopConditions: [...prepared.stopConditions],
+      requiredCapabilities: [...prepared.requiredCapabilities],
+      reversibility: prepared.reversibility,
+      semanticFingerprint: prepared.semanticFingerprint,
+      inspectionDisclosure: toInspectionDisclosureView(
+        prepared.inspectionDisclosure,
+      ),
+    });
+    setInspection(null);
+    setAuthorization(null);
+    setAmendmentDraft("");
+    setAmendmentNotice({
+      priorExecutionContractId: result.priorExecutionContractId,
+      additionalConstraint:
+        "evidenceRequirements cohérents avec NO_* (sans lifecycle Git)",
+      statusLabel: result.statusLabel,
+      priorInspectionDoesNotCoverSuccessor: true,
+    });
+    setAttempt(null);
+    setAttemptPhase(null);
+    setAttemptStatusLabel(null);
+    onDurableFactsChanged?.();
+  }, [
+    continuityMutationBlocked,
+    contract,
+    projectId,
+    onDurableFactsChanged,
+  ]);
+
   const inspect = useCallback(async () => {
     if (continuityMutationBlocked) return;
     if (!contract) return;
@@ -2290,6 +2379,33 @@ export function TrajectorySurface({
             </div>
           ) : null}

+          {docsWriteEvidenceRematerializeReady ? (
+            <div
+              className={styles.actions}
+              data-testid="w2-docs-write-evidence-rematerialize"
+            >
+              <p
+                className={styles.blockNote}
+                data-testid="w2-docs-write-evidence-rematerialize-note"
+              >
+                Les exigences de preuve Git de ce contrat contredisent ses
+                contraintes NO_COMMIT / NO_PUSH / NO_PR / NO_MERGE. Actualisez
+                le contrat pour des preuves locales satisfaisables. Aucune
+                exécution n&apos;est lancée — une nouvelle inspection sera
+                requise.
+              </p>
+              <button
+                type="button"
+                className={styles.primaryAction}
+                data-testid="w2-rematerialize-docs-write-evidence"
+                onClick={() => void rematerializeDocsWriteEvidenceContract()}
+                disabled={busy !== null || continuityMutationBlocked}
+              >
+                Actualiser les exigences de preuve
+              </button>
+            </div>
+          ) : null}
+
           <div className={styles.actions}>
             <button
               type="button"
@@ -2309,13 +2425,16 @@ export function TrajectorySurface({
                 disabled={
                   busy !== null ||
                   governedContinuationBlocked ||
+                  docsWriteEvidenceRematerializeReady ||
                   inspection === null ||
                   !inspection.inspectionSufficient
                 }
                 title={
-                  inspection === null || !inspection.inspectionSufficient
-                    ? "Inspection suffisante requise avant de confirmer"
-                    : undefined
+                  docsWriteEvidenceRematerializeReady
+                    ? "Actualisez les exigences de preuve avant de confirmer"
+                    : inspection === null || !inspection.inspectionSufficient
+                      ? "Inspection suffisante requise avant de confirmer"
+                      : undefined
                 }
               >
                 Confirmer mon consentement
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts b/projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
index b928e338..2e337fdc 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
@@ -17,6 +17,87 @@ import {
 import { DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS } from "@/lib/oa/execution-contract";
 import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";

+/**
+ * Local filesystem evidence obligations for the bounded docs-write profile
+ * (NO_COMMIT / NO_PUSH / NO_PR / NO_MERGE).
+ *
+ * Keywords `docs_write` + `artifact` are already recognized by
+ * contractEffectClassification / qualifyExecutionContractCompletion;
+ * ingestDocsWriteArtifactEvidence emits type=artifact +
+ * source=execution_attempt:docs_write. OA `evreq:` prefix satisfies
+ * isOaIdentifier — no new Evidence registry / schema.
+ */
+export const BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS = [
+  "evreq:docs_write_artifact",
+] as const;
+
+/**
+ * GCEC progressive Git lifecycle proof set (CR-GCEC-05).
+ * Use ONLY when the contract authorizes the corresponding Git effects.
+ * Must NOT be the default for the bounded NO_* docs-write profile.
+ */
+export const BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS = [
+  "git:local_commit",
+  "git:remote_push",
+  "git:pull_request",
+  "git:ci_status",
+  "git:review_status",
+  "git:merge",
+  "git:post_merge_verification",
+] as const;
+
+const GIT_LIFECYCLE_EVIDENCE = new Set<string>([
+  ...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
+  "git:commit",
+  "git:push",
+]);
+
+const GIT_FORBIDDING_CONSTRAINTS = new Set([
+  "NO_COMMIT",
+  "NO_GIT_REMOTE",
+  "NO_PUSH",
+  "NO_PR",
+  "NO_MERGE",
+]);
+
+export function isGitLifecycleEvidenceRequirement(id: string): boolean {
+  return GIT_LIFECYCLE_EVIDENCE.has(id);
+}
+
+export function docsWriteConstraintsForbidGitLifecycle(
+  constraints: readonly string[],
+): boolean {
+  return constraints.some((c) => GIT_FORBIDDING_CONSTRAINTS.has(c));
+}
+
+/**
+ * Select evidenceRequirements coherent with bounded docs-write constraints.
+ * Strips Git lifecycle obligations when NO_* forbids those effects.
+ * Preserves applicable non-Git OA identifiers from PREPARE when present.
+ */
+export function resolveDocsWriteEvidenceRequirementsForBoundedProfile(input: {
+  fromPrepare: readonly string[];
+  constraints: readonly string[];
+}): string[] {
+  const fromPrepare = [...input.fromPrepare];
+  if (!docsWriteConstraintsForbidGitLifecycle(input.constraints)) {
+    return fromPrepare.length > 0
+      ? fromPrepare
+      : [...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS];
+  }
+  const kept = fromPrepare.filter((r) => !isGitLifecycleEvidenceRequirement(r));
+  if (kept.length > 0) return kept;
+  return [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS];
+}
+
+export function docsWriteEvidenceContradictsConstraints(input: {
+  evidenceRequirements: readonly string[];
+  constraints: readonly string[];
+}): boolean {
+  if (!docsWriteConstraintsForbidGitLifecycle(input.constraints)) return false;
+  return input.evidenceRequirements.some(isGitLifecycleEvidenceRequirement);
+}
+
 export function boundedDocsWriteM3ResolutionProfile(): M3ResolvedExecutionFields {
   return {
     action: M4_BOUNDED_DOCS_WRITE_ACTION,
@@ -48,21 +129,12 @@ export function boundedDocsWriteM3ResolutionProfile(): M3ResolvedExecutionFields
       "OUT_OF_SCOPE_WRITE",
     ],
     executionWindowClass: DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
-    // CR-GCEC-05 — first vertical requires full git completion proof SET.
-    // Carried onto successor EC via resolve inputs/evidenceRequirements merge.
+    evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
   };
 }

-/** GCEC first-vertical git evidence requirements (Nora + EC). */
-export const BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS = [
-  "git:local_commit",
-  "git:remote_push",
-  "git:pull_request",
-  "git:ci_status",
-  "git:review_status",
-  "git:merge",
-  "git:post_merge_verification",
-] as const;
-
 export const BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON =
   "PRE-M6 Option A — resolve durable M3 PREPARE via existing G-UX-15 supersession (bounded docs-write Cursor REAL profile; ZERO LIVE in this cycle)" as const;
+
+export const DOCS_WRITE_EVIDENCE_REMATERIALIZE_REASON =
+  "docs_write_evidence_requirements_coherence — strip Git lifecycle proofs forbidden by bounded NO_* constraints" as const;
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/index.ts b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
index a02263cb..37ff5e6b 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
@@ -61,6 +61,12 @@ export type {
 } from "./prepareAndResolveM3ProductPath";
 export { resolveExistingLegacyM3DocsWriteProductPath } from "./resolveExistingLegacyM3DocsWriteProductPath";
 export { isLegacyDocsWritePrepareContractView } from "./legacyDocsWritePrepareContractView";
+export { isDocsWriteEvidenceContradictionView } from "./docsWriteEvidenceContradictionView";
+export { rematerializeDocsWriteEvidenceRequirements } from "./rematerializeDocsWriteEvidenceRequirements";
+export type {
+  RematerializeDocsWriteEvidenceResult,
+  RematerializeDocsWriteEvidenceSuccess,
+} from "./rematerializeDocsWriteEvidenceRequirements";
 export type {
   F3M3LegacyResolvedPayload,
   ResolveExistingLegacyM3DocsWriteDeps,
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
index f1b4a1dc..328be8b5 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
@@ -22,12 +22,38 @@ import {
   projectCursorPrepareOnly,
   projectExecutionContractInspectionDisclosure,
 } from "@/lib/oa/execution-contract";
+import { isOaIdentifier } from "@/lib/oa/execution-contract/domain/invariants";
 import type { F2ContextSnapshot } from "../f2/types";
 import {
   isProposalSubjectOptionRef,
   PROPOSAL_SUBJECT_PURSUE_REF,
 } from "../w2/proposalSubjectOptions";
-import { BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS } from "./boundedDocsWriteM3ResolutionProfile";
+import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "./boundedDocsWriteM3ResolutionProfile";
+
+/**
+ * EC.evidenceRequirements must be OA identifiers (`prefix:value`).
+ * Nora DecisionBasis often carries free-text validation expectations here —
+ * those belong in inputs, not as contract identifier SoT.
+ * For docs_write, fall back to the local filesystem evidence set coherent with
+ * the bounded NO_* profile (not the GCEC Git lifecycle set).
+ */
+function resolveEvidenceRequirementsForContract(input: {
+  docsWriteIntent: boolean;
+  raw: string[] | undefined;
+}): string[] | undefined {
+  const raw = input.raw;
+  if (raw && raw.length > 0 && raw.every(isOaIdentifier)) {
+    return [...raw];
+  }
+  if (input.docsWriteIntent) {
+    return [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS];
+  }
+  if (raw && raw.length > 0) {
+    const valid = raw.filter(isOaIdentifier);
+    return valid.length > 0 ? valid : undefined;
+  }
+  return undefined;
+}

 export type PrepareM3Deps = {
   decisionServices: DecisionServices;
@@ -209,12 +235,13 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
       : eb.expectedOutcome
         ? [eb.expectedOutcome]
         : undefined;
-  const evidenceRequirements =
-    eb.evidenceRequirements && eb.evidenceRequirements.length > 0
-      ? [...eb.evidenceRequirements]
-      : docsWriteIntent
-        ? [...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS]
-        : undefined;
+  const evidenceRequirements = resolveEvidenceRequirementsForContract({
+    docsWriteIntent,
+    raw:
+      eb.evidenceRequirements && eb.evidenceRequirements.length > 0
+        ? [...eb.evidenceRequirements]
+        : undefined,
+  });
   return {
     action,
     target,
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
index bb318d43..84ce0c16 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
@@ -35,6 +35,10 @@ import type {
 } from "@/lib/oa/execution-contract";
 import { projectExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract/projection/inspectionDisclosure";
 import type { ExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract/projection/inspectionDisclosure";
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+} from "@/lib/oa/execution-attempt";
+import { resolveDocsWriteEvidenceRequirementsForBoundedProfile } from "./boundedDocsWriteM3ResolutionProfile";

 const UNRESOLVED_ACTION = "UNRESOLVED_ACTION";
 const UNRESOLVED_TARGET = "UNRESOLVED_TARGET";
@@ -106,6 +110,12 @@ export type M3ResolvedExecutionFields = {
    */
   inputs?: Record<string, unknown>;
   executionWindowClass?: ExecutionWindowClass;
+  /**
+   * Optional evidenceRequirements override for the successor (server-side only).
+   * Bounded docs-write uses this to bind filesystem-satisfiable obligations
+   * coherent with NO_* constraints instead of inheriting a contradictory Git set.
+   */
+  evidenceRequirements?: string[];
 };

 export type ResolveM3ExecutionContractInput = {
@@ -353,6 +363,10 @@ function successorMatchesResolution(
 ): boolean {
   const caps = [...(contract.requiredCapabilities ?? [])].sort().join("\0");
   const wantCaps = [...resolution.requiredCapabilities].sort().join("\0");
+  const evidenceOk =
+    resolution.evidenceRequirements === undefined ||
+    [...contract.evidenceRequirements].join("\0") ===
+      [...resolution.evidenceRequirements].join("\0");
   return (
     contract.action === resolution.action.trim() &&
     contract.target === resolution.target.trim() &&
@@ -361,6 +375,7 @@ function successorMatchesResolution(
     caps === wantCaps &&
     [...contract.constraints].join("\0") === constraints.join("\0") &&
     [...contract.stopConditions].join("\0") === stopConditions.join("\0") &&
+    evidenceOk &&
     (resolution.executionWindowClass === undefined ||
       contract.executionWindowClass === resolution.executionWindowClass)
   );
@@ -628,6 +643,14 @@ export async function resolveM3ExecutionContract(
     original,
     input.resolution,
   );
+  const evidenceRequirements =
+    input.resolution.action.trim() === M4_BOUNDED_DOCS_WRITE_ACTION
+      ? (input.resolution.evidenceRequirements ??
+        resolveDocsWriteEvidenceRequirementsForBoundedProfile({
+          fromPrepare: original.evidenceRequirements ?? [],
+          constraints,
+        }))
+      : input.resolution.evidenceRequirements;

   // C2 — original already superseded: recover/validate existing successor.
   if (original.status === "superseded") {
@@ -783,6 +806,9 @@ export async function resolveM3ExecutionContract(
         reversibility: input.resolution.reversibility,
         constraints,
         stopConditions,
+        ...(evidenceRequirements !== undefined
+          ? { evidenceRequirements: [...evidenceRequirements] }
+          : {}),
         decisionRefs: [input.decisionId],
         requiredAuthority: original.requiredAuthority,
         status: "draft",
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index e1d65d24..da6296af 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -18,6 +18,8 @@ import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
 import { readLiveProjectContext } from "@/lib/vertical-slice-runtime/liveProjectContext";
 import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";
 import { amendExecutionContractWithConstraint } from "./amendExecutionContract";
+import { rematerializeDocsWriteEvidenceRequirements } from "../f3/rematerializeDocsWriteEvidenceRequirements";
+import type { RematerializeDocsWriteEvidenceResult } from "../f3/rematerializeDocsWriteEvidenceRequirements";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
 import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
 import { decideTrajectory } from "./decideTrajectory";
@@ -135,6 +137,13 @@ export async function w2ReadActiveDecisionSubjectAction(input: {
       recoverableProposalIds: read.recoverableProposalIds,
     };
   }
+  if (read.kind === "pursue_prepare_ready") {
+    return {
+      ok: true,
+      kind: "pursue_prepare_ready",
+      decision: read.decision,
+    };
+  }
   return {
     ok: true,
     kind: "bound_awaiting_decision",
@@ -283,6 +292,30 @@ export async function w2AmendExecutionContractAction(input: {
   });
 }

+/**
+ * Rematerialize docs_write evidenceRequirements when Git lifecycle proofs
+ * contradict NO_* constraints. Supersession only — no Confirm / Execute / REAL.
+ */
+export async function w2RematerializeDocsWriteEvidenceAction(input: {
+  projectId: string;
+  executionContractId: string;
+  /** Hostile — ignored. */
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+}): Promise<RematerializeDocsWriteEvidenceResult> {
+  void input.canActAsMorris;
+  void input.claimedAuthorityLevel;
+
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+
+  return rematerializeDocsWriteEvidenceRequirements({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+  });
+}
+
 async function loadF2ContextForProject(
   oa: NonNullable<ReturnType<typeof getRuntimeApplicationService>["oa"]>,
   projectId: string,

===== NEW FILE: docsWriteEvidenceContradictionView.ts =====
/**
 * Client-safe presentation heuristic for docs_write evidence-coherence rematerialize CTA.
 * Not the security boundary — server re-validates on rematerialization.
 *
 * Constants duplicated intentionally to keep this module free of Node/server barrels.
 */

const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply";
const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write";

const GIT_LIFECYCLE_EVIDENCE = new Set([
  "git:local_commit",
  "git:remote_push",
  "git:pull_request",
  "git:ci_status",
  "git:review_status",
  "git:merge",
  "git:post_merge_verification",
  "git:commit",
  "git:push",
]);

const GIT_FORBIDDING_CONSTRAINTS = new Set([
  "NO_COMMIT",
  "NO_GIT_REMOTE",
  "NO_PUSH",
  "NO_PR",
  "NO_MERGE",
]);

/**
 * True when a bounded docs_write EC forbids Git effects but still lists
 * Git lifecycle evidenceRequirements — Morris must rematerialize before Confirm.
 */
export function isDocsWriteEvidenceContradictionView(input: {
  action: string;
  target: string;
  constraints: readonly string[];
  evidenceRequirements: readonly string[];
}): boolean {
  if (input.action !== M4_BOUNDED_DOCS_WRITE_ACTION) return false;
  if (input.target !== M4_BOUNDED_DOCS_WRITE_TARGET) return false;
  const forbidsGit = input.constraints.some((c) =>
    GIT_FORBIDDING_CONSTRAINTS.has(c),
  );
  if (!forbidsGit) return false;
  return input.evidenceRequirements.some((r) => GIT_LIFECYCLE_EVIDENCE.has(r));
}

===== NEW FILE: rematerializeDocsWriteEvidenceRequirements.ts =====
/**
 * Rematerialize docs_write evidenceRequirements when a durable confirmation_required
 * EC lists Git lifecycle proofs that its own NO_* constraints forbid.
 *
 * Reuses: supersedeExecutionContract → validateExecutionContract.
 * Does NOT Confirm / Authorize / StartExecution / REAL spawn.
 * Does NOT mutate SQLite outside OA services.
 */

import { createHash } from "node:crypto";
import { canonicalizeJson } from "@/lib/oa/doctrine";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  projectExecutionContractInspectionDisclosure,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_TARGET,
} from "@/lib/oa/execution-attempt";
import { readContractInspectionState } from "../w2/inspectExecutionContract";
import type { ContractInspectionStateDto } from "../w2/types";
import {
  DOCS_WRITE_EVIDENCE_REMATERIALIZE_REASON,
  docsWriteEvidenceContradictsConstraints,
  resolveDocsWriteEvidenceRequirementsForBoundedProfile,
} from "./boundedDocsWriteM3ResolutionProfile";

export type RematerializeDocsWriteEvidenceInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
};

export type RematerializeDocsWriteEvidenceSuccess = {
  ok: true;
  priorExecutionContractId: string;
  priorContractVersion: number;
  successor: {
    executionContractId: string;
    version: number;
    status: string;
    action: string;
    target: string;
    scope: string;
    requiredAuthority: string;
    constraints: string[];
    stopConditions: string[];
    requiredCapabilities: string[];
    reversibility: string;
    semanticFingerprint: string;
    evidenceRequirements: string[];
    supersedesExecutionContractId: string | null;
    supersessionReason: string | null;
    inspectionDisclosure: ReturnType<
      typeof projectExecutionContractInspectionDisclosure
    >["disclosure"];
  };
  materialAmendment: true;
  priorInspectionDoesNotCoverSuccessor: true;
  reinspectionRequired: true;
  statusLabel: "CONTRAT ACTUALISÉ — RÉINSPECTION REQUISE AVANT CONFIRMATION";
  successorInspection: ContractInspectionStateDto;
  evidenceRequirements: string[];
  executionPerformed: false;
  attemptCreated: false;
  confirmationGranted: false;
  authorityGranted: false;
  humanDecisionCreated: false;
  replayed: boolean;
};

export type RematerializeDocsWriteEvidenceResult =
  | RematerializeDocsWriteEvidenceSuccess
  | { ok: false; code: string; message: string };

function fail(code: string, message: string): RematerializeDocsWriteEvidenceResult {
  return { ok: false, code, message };
}

function rematerializeDigest(
  priorId: string,
  evidenceRequirements: readonly string[],
): string {
  return createHash("sha256")
    .update(
      canonicalizeJson({
        kind: "docs_write_evidence_rematerialize",
        priorId,
        evidenceRequirements: [...evidenceRequirements],
      }),
    )
    .digest("hex")
    .slice(0, 16);
}

function successorIdFor(digest: string): string {
  return `xct:m3-ev:${digest}`;
}

function idempotencyKeyFor(digest: string): string {
  return `idem:m3-docs-write-ev-remat:${digest}`;
}

function toSuccessorView(contract: ExecutionContract) {
  const disclosure = projectExecutionContractInspectionDisclosure(contract);
  return {
    executionContractId: contract.executionContractId,
    version: contract.version,
    status: contract.status,
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    requiredAuthority: contract.requiredAuthority,
    constraints: [...(contract.constraints ?? [])],
    stopConditions: [...(contract.stopConditions ?? [])],
    requiredCapabilities: [...(contract.requiredCapabilities ?? [])],
    reversibility: contract.reversibility ?? "non précisée",
    semanticFingerprint: contract.semanticFingerprint ?? "",
    evidenceRequirements: [...contract.evidenceRequirements],
    supersedesExecutionContractId:
      contract.supersedesExecutionContractId ?? null,
    supersessionReason: contract.supersessionReason ?? null,
    inspectionDisclosure: disclosure.disclosure,
  };
}

async function successFromSuccessor(input: {
  prior: ExecutionContract;
  successor: ExecutionContract;
  corrected: string[];
  oa: RuntimeOaStack;
  replayed: boolean;
}): Promise<RematerializeDocsWriteEvidenceResult> {
  const inspection = await readContractInspectionState({
    oa: input.oa,
    executionContractId: input.successor.executionContractId,
  });
  if (!inspection.ok) return inspection;
  return {
    ok: true,
    priorExecutionContractId: input.prior.executionContractId,
    priorContractVersion: input.prior.version,
    successor: toSuccessorView(input.successor),
    materialAmendment: true,
    priorInspectionDoesNotCoverSuccessor: true,
    reinspectionRequired: true,
    statusLabel: "CONTRAT ACTUALISÉ — RÉINSPECTION REQUISE AVANT CONFIRMATION",
    successorInspection: inspection,
    evidenceRequirements: [...input.corrected],
    executionPerformed: false,
    attemptCreated: false,
    confirmationGranted: false,
    authorityGranted: false,
    humanDecisionCreated: false,
    replayed: input.replayed,
  };
}

export async function rematerializeDocsWriteEvidenceRequirements(
  input: RematerializeDocsWriteEvidenceInput,
): Promise<RematerializeDocsWriteEvidenceResult> {
  const loaded =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!loaded.ok) {
    return fail(loaded.error.detailCode, "Contrat d'exécution introuvable.");
  }

  const prior = loaded.contract;
  if (prior.projectId !== input.projectId) {
    return fail(
      "PROJECT_MISMATCH",
      "Le contrat n'appartient pas au projet demandé.",
    );
  }
  if (prior.action !== M4_BOUNDED_DOCS_WRITE_ACTION) {
    return fail(
      "NOT_DOCS_WRITE_CONTRACT",
      "Rematérialisation evidence réservée aux contrats docs_write.",
    );
  }
  if (prior.target !== M4_BOUNDED_DOCS_WRITE_TARGET) {
    return fail(
      "NOT_DOCS_WRITE_CONTRACT",
      "Cible technique docs_write attendue.",
    );
  }
  if (
    prior.status === "superseded" ||
    prior.status === "cancelled" ||
    prior.status === "executing" ||
    prior.status === "completed" ||
    prior.status === "failed"
  ) {
    return fail(
      "CONTRACT_STATE_CONFLICT",
      `Le contrat (statut ${prior.status}) ne peut pas être rematérialisé.`,
    );
  }

  const corrected = resolveDocsWriteEvidenceRequirementsForBoundedProfile({
    fromPrepare: prior.evidenceRequirements ?? [],
    constraints: prior.constraints ?? [],
  });

  if (
    !docsWriteEvidenceContradictsConstraints({
      evidenceRequirements: prior.evidenceRequirements ?? [],
      constraints: prior.constraints ?? [],
    })
  ) {
    return fail(
      "EVIDENCE_ALREADY_COHERENT",
      "Les evidenceRequirements sont déjà cohérents avec les contraintes — aucune rematérialisation.",
    );
  }

  const digest = rematerializeDigest(prior.executionContractId, corrected);
  const newExecutionContractId = successorIdFor(digest);
  const idempotencyKey = idempotencyKeyFor(digest);

  const existing =
    await input.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: newExecutionContractId,
    });
  if (existing.ok) {
    const successor = existing.contract;
    if (successor.supersedesExecutionContractId !== prior.executionContractId) {
      return fail(
        "SUCCESSOR_GOVERNANCE_MISMATCH",
        "Successeur déterministe déjà présent avec un lignage incorrect.",
      );
    }
    if (
      [...successor.evidenceRequirements].join("\0") !==
      [...corrected].join("\0")
    ) {
      return fail(
        "SUCCESSOR_GOVERNANCE_MISMATCH",
        "Successeur déterministe déjà présent avec des evidenceRequirements différents.",
      );
    }

    if (successor.status === "draft" || successor.status === "proposed") {
      const authority = registerLocalPiloteAuthority({
        authorityResolver: input.oa.authorityResolver,
        scope: prior.scope,
        issuedAt: input.oa.clock.nowIso(),
        evidenceId: `evd:m3-ev-remat:${digest}`,
        forceEnable: input.forceLocalAuthority === true,
      });
      if (!authority.ok) {
        return fail(authority.code, authority.message);
      }
      const validated =
        await input.oa.executionContractServices.validateExecutionContract.execute(
          {
            executionContractId: successor.executionContractId,
            actor: LOCAL_PILOTE_ACTOR,
            authorityEvidenceId: authority.evidenceId,
          },
        );
      if (!validated.ok) {
        return fail(validated.error.detailCode, validated.error.message);
      }
      return successFromSuccessor({
        prior,
        successor: validated.contract,
        corrected,
        oa: input.oa,
        replayed: true,
      });
    }

    return successFromSuccessor({
      prior,
      successor,
      corrected,
      oa: input.oa,
      replayed: true,
    });
  }

  const priorInspection = await readContractInspectionState({
    oa: input.oa,
    executionContractId: prior.executionContractId,
  });
  if (!priorInspection.ok) return priorInspection;
  if (!priorInspection.inspectionSufficient) {
    return fail(
      "INSPECTION_REQUIRED_BEFORE_REMATERIALIZE",
      "Le contrat doit être inspecté avant une rematérialisation matérielle des evidenceRequirements.",
    );
  }

  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.oa.authorityResolver,
    scope: prior.scope,
    issuedAt: input.oa.clock.nowIso(),
    evidenceId: `evd:m3-ev-remat:${digest}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return fail(authority.code, authority.message);
  }

  const superseded =
    await input.oa.executionContractServices.supersedeExecutionContract.execute({
      newExecutionContractId,
      supersedesExecutionContractId: prior.executionContractId,
      supersessionReason: DOCS_WRITE_EVIDENCE_REMATERIALIZE_REASON,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
      expectedVersion: prior.version,
      evidenceRequirements: [...corrected],
      idempotencyKey,
      correlationId: `cor:m3-ev-remat:${digest}`,
      status: "draft",
    });

  if (!superseded.ok) {
    if (superseded.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
      const raced =
        await input.oa.executionContractServices.getExecutionContract.execute({
          executionContractId: newExecutionContractId,
        });
      if (!raced.ok) {
        return fail(
          "REMATERIALIZE_RECOVERY_FAILED",
          "Course supersession: successeur déterministe introuvable.",
        );
      }
      const validatedRace =
        await input.oa.executionContractServices.validateExecutionContract.execute(
          {
            executionContractId: raced.contract.executionContractId,
            actor: LOCAL_PILOTE_ACTOR,
            authorityEvidenceId: authority.evidenceId,
          },
        );
      if (!validatedRace.ok) {
        return fail(validatedRace.error.detailCode, validatedRace.error.message);
      }
      return successFromSuccessor({
        prior,
        successor: validatedRace.contract,
        corrected,
        oa: input.oa,
        replayed: true,
      });
    }
    return fail(
      superseded.error.detailCode,
      `Rematérialisation refusée (${superseded.error.detailCode}).`,
    );
  }

  const validated =
    await input.oa.executionContractServices.validateExecutionContract.execute({
      executionContractId: superseded.contract.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
  if (!validated.ok) {
    return fail(validated.error.detailCode, validated.error.message);
  }

  const successorInspection = await readContractInspectionState({
    oa: input.oa,
    executionContractId: validated.contract.executionContractId,
  });
  if (!successorInspection.ok) return successorInspection;
  if (successorInspection.inspectionSufficient) {
    return fail(
      "INSPECTION_INVARIANT_VIOLATED",
      "Le successeur ne doit pas hériter d'une inspection suffisante — arrêt fail-closed.",
    );
  }

  return {
    ok: true,
    priorExecutionContractId: prior.executionContractId,
    priorContractVersion: prior.version,
    successor: toSuccessorView(validated.contract),
    materialAmendment: true,
    priorInspectionDoesNotCoverSuccessor: true,
    reinspectionRequired: true,
    statusLabel: "CONTRAT ACTUALISÉ — RÉINSPECTION REQUISE AVANT CONFIRMATION",
    successorInspection,
    evidenceRequirements: [...corrected],
    executionPerformed: false,
    attemptCreated: false,
    confirmationGranted: false,
    authorityGranted: false,
    humanDecisionCreated: false,
    replayed: false,
  };
}

===== NEW FILE: checkpointE.docsWriteEvidenceCoherence.d0.test.ts =====
/**
 * CHECKPOINT-E R4 — docs_write evidenceRequirements semantic coherence.
 * Bounded NO_* profile must not demand Git lifecycle proofs.
 */

import { describe, expect, it } from "vitest";
import {
  BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
  BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
  docsWriteConstraintsForbidGitLifecycle,
  docsWriteEvidenceContradictsConstraints,
  isGitLifecycleEvidenceRequirement,
  resolveDocsWriteEvidenceRequirementsForBoundedProfile,
  boundedDocsWriteM3ResolutionProfile,
} from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import { isDocsWriteEvidenceContradictionView } from "@/features/project-assistant/f3/docsWriteEvidenceContradictionView";
import { deriveExecutableEffectsFromContractRequirements } from "@/lib/oa/execution-attempt/domain/contractEffectClassification";
import { qualifyExecutionContractCompletion } from "@/lib/oa/execution-attempt/domain/qualifyExecutionContractCompletion";
import { isOaIdentifier } from "@/lib/oa/execution-contract/domain/invariants";

const NO_GIT_CONSTRAINTS = [
  "BOUNDED DOCS-WRITE",
  "NO_COMMIT",
  "NO_GIT_REMOTE",
  "NO_PUSH",
  "NO_PR",
  "NO_MERGE",
] as const;

describe("CHECKPOINT-E R4 — docs_write evidence contract coherence", () => {
  it("T1 — Git lifecycle set contradicts NO_* constraints (semantic invalid)", () => {
    expect(
      docsWriteEvidenceContradictsConstraints({
        evidenceRequirements: [
          ...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
        ],
        constraints: NO_GIT_CONSTRAINTS,
      }),
    ).toBe(true);
    expect(
      isDocsWriteEvidenceContradictionView({
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        constraints: NO_GIT_CONSTRAINTS,
        evidenceRequirements: [
          ...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
        ],
      }),
    ).toBe(true);
  });

  it("T2 — corrected local set is OA-valid and coherent with NO_*", () => {
    const local = resolveDocsWriteEvidenceRequirementsForBoundedProfile({
      fromPrepare: [...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS],
      constraints: NO_GIT_CONSTRAINTS,
    });
    expect(local).toEqual([
      ...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
    ]);
    for (const id of local) {
      expect(isOaIdentifier(id)).toBe(true);
      expect(isGitLifecycleEvidenceRequirement(id)).toBe(false);
    }
    expect(
      docsWriteEvidenceContradictsConstraints({
        evidenceRequirements: local,
        constraints: NO_GIT_CONSTRAINTS,
      }),
    ).toBe(false);
  });

  it("T3 — no retained requirement demands a forbidden Git effect", () => {
    const profile = boundedDocsWriteM3ResolutionProfile();
    expect(docsWriteConstraintsForbidGitLifecycle(profile.constraints!)).toBe(
      true,
    );
    const reqs = resolveDocsWriteEvidenceRequirementsForBoundedProfile({
      fromPrepare: [],
      constraints: profile.constraints!,
    });
    const classified = deriveExecutableEffectsFromContractRequirements({
      evidenceRequirements: reqs,
      requiredCapabilities: profile.requiredCapabilities,
    });
    expect(classified.executableEffects).not.toContain("git.commit");
    expect(classified.executableEffects).not.toContain("git.push");
    expect(classified.executableEffects).not.toContain("github.pr.create");
    expect(classified.executableEffects).not.toContain("github.pr.merge");
    expect(classified.verificationObligations).toEqual([]);
    expect(classified.executableEffects).toContain("filesystem.create");
  });

  it("T4 — local requirement is satisfiable by docs_write artifact Evidence", () => {
    const reqs = [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS];
    const qualification = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:m3-res:test-r4",
        projectId: "prj:r4",
        cycleInstanceId: "cyc:r4",
        evidenceRequirements: reqs,
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        {
          evidenceId: "ev:docs-write:test",
          type: "artifact",
          status: "verified",
          source: "execution_attempt:docs_write",
          bindings: {
            projectId: "prj:r4",
            cycleInstanceId: "cyc:r4",
            executionContractId: "xct:m3-res:test-r4",
            executionAttemptId: "att:test",
          },
        } as never,
      ],
    });
    expect(qualification.complete).toBe(true);
    expect(qualification.remainingRequiredEffects).toEqual([]);
  });

  it("T5/T6 — OA identifier validation holds for local set", () => {
    for (const id of BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS) {
      expect(isOaIdentifier(id)).toBe(true);
    }
  });

  it("T7 — applicable non-Git OA IDs from PREPARE are preserved under NO_*", () => {
    const kept = resolveDocsWriteEvidenceRequirementsForBoundedProfile({
      fromPrepare: ["evreq:file-write-result", "evreq:content-verification"],
      constraints: NO_GIT_CONSTRAINTS,
    });
    expect(kept).toEqual([
      "evreq:file-write-result",
      "evreq:content-verification",
    ]);
  });

  it("T8 — Git lifecycle set preserved when constraints do NOT forbid Git", () => {
    const kept = resolveDocsWriteEvidenceRequirementsForBoundedProfile({
      fromPrepare: [...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS],
      constraints: ["BOUNDED DOCS-WRITE", "PATH_ALLOWLIST_ONLY"],
    });
    expect(kept).toEqual([
      ...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
    ]);
    expect(
      docsWriteEvidenceContradictsConstraints({
        evidenceRequirements: kept,
        constraints: ["BOUNDED DOCS-WRITE"],
      }),
    ).toBe(false);
  });

  it("T8b — empty prepare + Git-allowed constraints falls back to Git set", () => {
    const kept = resolveDocsWriteEvidenceRequirementsForBoundedProfile({
      fromPrepare: [],
      constraints: ["BOUNDED DOCS-WRITE"],
    });
    expect(kept).toEqual([
      ...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
    ]);
  });

  it("profile ships local evidenceRequirements by default", () => {
    const profile = boundedDocsWriteM3ResolutionProfile();
    expect(profile.evidenceRequirements).toEqual([
      ...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
    ]);
  });
});

===== NEW FILE: checkpointE.docsWriteEvidenceRematerialize.d0.test.ts =====
/**
 * CHECKPOINT-E R4 T9 — rematerialize docs_write evidenceRequirements via OA supersession.
 * @vitest-environment node
 */
import path from "node:path";
import os from "node:os";
import { mkdtempSync } from "node:fs";
import { afterEach, describe, expect, it } from "vitest";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { rematerializeDocsWriteEvidenceRequirements } from "@/features/project-assistant/f3/rematerializeDocsWriteEvidenceRequirements";
import {
  BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
  BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
} from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";

const APP_ROOT = path.resolve(__dirname, "../../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:r4-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    this.n += 1;
    return `lps:r4-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    this.n += 1;
    return `cor:r4-${this.prefix}-${this.n}`;
  }
}

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
});

describe("CHECKPOINT-E R4 T9 — rematerialize evidenceRequirements", () => {
  it("material evidenceRequirements change invalidates prior inspection", async () => {
    resetRuntimeApplicationServiceForTests();
    const dir = mkdtempSync(path.join(os.tmpdir(), "sfia-r4-remat-"));
    const runtime = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-09-17T21:00:00.000Z",
      idSource: new FixedIdSource("ev"),
      auditMode: "noop",
      productDbPath: path.join(dir, "oa-product.sqlite"),
    });
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "R4 rematerialize",
      objective: "docs_write evidence coherence",
      context: "r4",
      criticality: "STANDARD",
      constraints: ["FIXTURE ONLY"],
      shortReference: "R4EV",
      idempotencyKey: `r4-ev-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;

    const authority = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: "studio.gcec.docs_write",
      issuedAt: oa.clock.nowIso(),
      evidenceId: "evd:r4-remat-build",
      forceEnable: true,
    });
    expect(authority.ok).toBe(true);
    if (!authority.ok) return;

    const built =
      await oa.executionContractServices.buildExecutionContract.execute({
        executionContractId: "xct:m3-res:r4-ev-contradiction",
        projectId,
        decisionRefs: [],
        action: "cursor.docs_write.apply",
        target: "workspace.isolated.docs_write",
        scope: "studio.gcec.docs_write",
        requiredCapabilities: ["cap:cursor.docs_write"],
        requiredAuthority: "MORRIS",
        constraints: [
          "BOUNDED DOCS-WRITE",
          "NO_COMMIT",
          "NO_GIT_REMOTE",
          "NO_PUSH",
          "NO_PR",
          "NO_MERGE",
        ],
        stopConditions: ["AUTHORITY_DENIED"],
        evidenceRequirements: [
          ...BOUNDED_DOCS_WRITE_GIT_EVIDENCE_REQUIREMENTS,
        ],
        reversibility: "reversible",
        idempotencyKey: "idem:r4-ev-contradiction",
        correlationId: "cor:r4-ev-contradiction",
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
        inputs: {
          targetPath:
            "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md",
          targetRepositoryRef: "mcleland147/sfia-workspace",
          scopeIn: ["projects/sfia-studio/.sandbox"],
        },
      });
    expect(built.ok).toBe(true);
    if (!built.ok) return;

    const validated =
      await oa.executionContractServices.validateExecutionContract.execute({
        executionContractId: built.contract.executionContractId,
        actor: LOCAL_PILOTE_ACTOR,
        authorityEvidenceId: authority.evidenceId,
      });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    expect(validated.contract.status).toBe("confirmation_required");

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: validated.contract.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.inspectionSufficient).toBe(true);
    const priorFp = validated.contract.semanticFingerprint;

    const rematerialized = await rematerializeDocsWriteEvidenceRequirements({
      oa,
      projectId,
      executionContractId: validated.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(rematerialized.ok).toBe(true);
    if (!rematerialized.ok) return;
    expect(rematerialized.evidenceRequirements).toEqual([
      ...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
    ]);
    expect(rematerialized.successor.evidenceRequirements).toEqual([
      ...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
    ]);
    expect(rematerialized.priorInspectionDoesNotCoverSuccessor).toBe(true);
    expect(rematerialized.reinspectionRequired).toBe(true);
    expect(rematerialized.successorInspection.inspectionSufficient).toBe(
      false,
    );
    expect(rematerialized.successor.semanticFingerprint).not.toBe(priorFp);
    expect(rematerialized.executionPerformed).toBe(false);
    expect(rematerialized.attemptCreated).toBe(false);
    expect(rematerialized.confirmationGranted).toBe(false);
    expect(rematerialized.authorityGranted).toBe(false);

    const priorAfter =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: validated.contract.executionContractId,
      });
    expect(priorAfter.ok).toBe(true);
    if (!priorAfter.ok) return;
    expect(priorAfter.contract.status).toBe("superseded");
  });
});
```

---

## 10. Tests

| ID | Suite | Result |
|---|---|---|
| T1–T8 | `checkpointE.docsWriteEvidenceCoherence.d0` | PASS |
| T9 | `checkpointE.docsWriteEvidenceRematerialize.d0` | PASS |
| T10 | CHECKPOINT-E R1 coerce (updated LOCAL) in `m3ExecutionContractPrepare` | PASS |
| T11 | CHECKPOINT-E Resume R3 `checkpointE.prepareResume.d0` | PASS |
| T12 | `trajectorySurface.ui` + `tsc --noEmit` | PASS |

No REAL. No Execute. No Confirm. No campaign rematerialize click (Morris gate).

---

## 11. Traitement du contrat durable déjà inspecté

| Rule | Application |
|---|---|
| Manual SQLite mutate | **FORBIDDEN / not done** |
| Silent in-place mutation | **FORBIDDEN / not done** |
| Product path | `w2RematerializeDocsWriteEvidenceAction` → supersede with LOCAL evidenceRequirements |
| Prior inspection | invalidated (`priorInspectionDoesNotCoverSuccessor`, new semanticFingerprint) |
| Confirmation / authority | none existed; none created |
| attempts / REAL | remain 0 |

Durable EC still has Git set until Morris rematerializes via UI.

---

## 12. Action UI exacte attendue de Morris

1. Reload Studio (code change) on same Project / same DB.
2. On Trajectory / EC panel, click **« Actualiser les exigences de preuve »** (`data-testid=w2-rematerialize-docs-write-evidence`).
3. Then **« Inspecter le contrat »** on the successor.
4. **STOP** — do **not** Confirmer / Autoriser / Exécuter / REAL.

Do **not** use Amend constraint form for this fix.
Do **not** click Confirmer while contradiction CTA is visible (disabled).

---

## 13. DB campagne (avant action Morris)

| Item | Value |
|---|---|
| Absolute DB | `…/pje2e-real-01/product/oa-product.sqlite` |
| mtime/size | Sep 17 21:17:46 2026 598016 |
| contracts | **2** (`xct:m3-res:dec:w2-prop:0e4b08bb-5b5c-4c99-b57f-d49234abb693 | confirmation_required | v2`) |
| attempts | **0** |
| evidenceRequirements (still Git until rematerialize) | see §2 |
| Manual mutation | NONE |
| Confirmation | none |
| Authority consumed | none |
| REAL spawn | 0 |
| Target file | ABSENT |

---

## 14. Réserves / dette

- Durable campaign EC still contradictory until Morris rematerialize+reinspect.
- Opaque id `evreq:docs_write_artifact` is convention-compatible (effect classifiers), not a new registry.
- GCEC progressive Git lifecycle scenarios preserved when NO_* absent / explicit Git IDs applicable.
- Nora free-text remains disclosure/input only (R1 preserved).
- package-lock dirty préexistant hors scope.

---

## 15. Verdict

**CHECKPOINT E EVIDENCE CONTRACT BLOCKER FIXED — MORRIS MAY REMATERIALIZE AND REINSPECT**
