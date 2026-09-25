# SFIA Studio — ChatGPT Review Pack (FULL) — SAME-MACRO RC-01→RC-04

- **timestamp (UTC):** 2026-09-25T16:30:18Z
- **macro:** PILOT-EXECUTION-EXPERIENCE-RECOVERY-SIMPLIFICATION-01
- **correction pass:** RC-01 → RC-04
- **branch:** `feat/sfia-studio-pilot-execution-experience-recovery-simplification-01`
- **HEAD / origin/main:** `e287f744479fc4b55c3e3082969deea7783996da` (uncommitted candidate)
- **project Git:** NONE
- **REAL Cursor:** NONE

---

## 1. Local Git Truth

```
branch: feat/sfia-studio-pilot-execution-experience-recovery-simplification-01
HEAD == origin/main == e287f744479fc4b55c3e3082969deea7783996da
dirty candidate preserved; .tmp-sfia-review/*-proof/ residual untracked preserved
git diff --check: clean
```

---

## 2. Same-macro status

Continues LOCAL candidate. No new macro. Engines kept. Baseline preserved:
Product N2, auto-instruct sole recoverable, Relancer, AMEND delta, rail 420/500, executeAsPilot N1/N2, auto materialize.

---

## 3. RC-01 — AUTO-PREPARE AFTER PURSUE

**Root cause:** PREPARE left as nominal Pilot click; continuity rehydrate `kind:none` wiped freshly prepared client EC.

**Implementation:**
- Direct chain inside `decide` after successful Proposal Pursue (not useEffect).
- Auto-inspect after prepare; never auto-Execute.
- Continuity rehydrate preserves fresh pursue-prepared contract when durable still `none`.
- Resume fallback CTA: « Reprendre la préparation ».

**Proof:** trajectorySurface `RC-01 — pursue auto-PREPARE + auto-inspect`.

**Nominal:** Pursue → HD → auto PREPARE → auto-inspect → Exécuter.

---

## 4. RC-02 — BUSINESS-FIRST PRIMARY

**Root cause:** Business headlines layered on top of still-primary technical codes.

**Implementation:** Primary = now title, effect summary, Pilote authority, état métier, prochaine action. Raw action/target/scope/repo/IDs only under « Détails techniques ». Tests adapted.

**Proof:** `pilotContractPresentation.d0` + trajectorySurface sealed contract assertions under details.

---

## 5. RC-03 — TRUSTED LAUNCH TRUTHFULNESS

**Root cause:** `trustedLaunchContextPinnedAtPrepare=true` written even for bare pinned SHA / legacy path.

**Implementation:**
- Marker ONLY when `resolveTrustedProductLaunchContext` SUCCESS and pack merged.
- Legacy/no-OA: may set baseHeadSha; **no** trusted marker.
- Recovery successor always goes through resolver with `pinnedBaseHeadSha` (no SHA-only bypass).

**Proof:** `pilotExecutionExperience.trustedLaunch.d0` + recovery successor N2 path.

---

## 6. RC-04 — STRUCTURAL RECOVERY OWNERSHIP

**Root cause:** post-terminal structural replan called `proposeOptions` with stale Proposal id → PROPOSAL_STALE.

**Implementation:**
- `PostEvidenceRecoveryContext.requiresHumanDecision` surfaced.
- `proposeTrajectoryOptions`: if structural recovery (replan OR requiresHumanDecision), ignore opaque Proposal id; recovery owns instruct.
- Pre-terminal Proposal (bound/pending) still wins (CORR-PROOF-10 — 45 PASS).
- UI structural CTA: `proposeOptions({ ignoreActiveProposalId: true })`.
- Same-scope recover stays Relancer.

**Proof:** `pilotExecutionExperience.recoveryOwnership.d0` + corrProof10 regression.

---

## 7. Authority behavioral proof

- Product `productRuntimeAuthority:"N2"` → `requiredAuthority === "N2"` (prepareM3 ternary + checkpointF successor assertion).
- Legacy omit → MORRIS.
- Recovery successor → N2.

---

## 8. Before / after user flow

**Before RC:** Pursue → click PREPARE → inspect → (tech codes primary) → Exécuter; structural FAIL → proposeOptions → PROPOSAL_STALE risk.

**After RC:** Pursue → auto PREPARE+inspect → business primary → Exécuter; structural FAIL → recovery options (no stale Proposal).

---

## 9. Validations

| Suite | Result |
|-------|--------|
| RC batch (14 files) | **179 PASS** |
| pre-m6-product-ui | **127 PASS** |
| typecheck / lint / build | PASS |
| REAL | NOT RUN |

---

## 10. Fake / Real

DETERMINISTIC PROVEN on RC-01…RC-04.
≠ READY FOR REAL / ≠ REAL BOUNDARY PROVEN / ≠ END-TO-END REAL PROVEN.

RUNTIME VISUAL PROOF: **PENDING**

---

## 11. Reserves / debt

1. Full end-to-end OA integration test for RC-04 proposeTrajectoryOptions with live W3C replan Epistemic (gate logic unit-tested + CORR-PROOF-10 inverse).
2. Runtime visual screenshots.
3. Natural StudyFlow REAL reproof — Morris gate.

---

## 12. Anti-claims

Do NOT claim: runtime v3 ADOPTED; READY FOR REAL; END-TO-END REAL; Cursor docs_write REAL proven; GAP-10/11/13 REAL CLOSED.

---

## 13. Verdict

**PILOT EXECUTION EXPERIENCE & RECOVERY SIMPLIFICATION — SAME-MACRO CORRECTION PASS**

PROJECT COMMIT / PUSH / PR / MERGE — NOT AUTHORIZED

NATURAL STUDYFLOW REAL REPROOF — PENDING MORRIS GATE

---

## 14. Changed files

Modified Product:
- TrajectorySurface.tsx, pilotContractPresentation.ts, product-tokens.css
- prepareAndResolveM3ProductPath.ts, prepareM3FromDecision.ts, resolveM3ExecutionContract.ts, actions.ts
- prepareDocsWriteRecoverySuccessor.ts, proposeTrajectoryOptions.ts, resolvePostEvidenceRecoveryContext.ts, proposalSubjectOptions.ts
- tests (trajectory, checkpointF fixtures, new RC d0 tests)

---

## 15. Exploitable content

### NEW — pilotContractPresentation.ts

```typescript
/**
 * PILOT-EXECUTION-EXPERIENCE-RECOVERY-SIMPLIFICATION-01
 * Business-first contract presentation helpers (Truth C stays in technical details).
 * ZERO REAL. Presentation only — no authority widening.
 */

export type PilotContractPresentationInput = {
  action: string;
  target: string;
  scope: string;
  requiredAuthority: string;
  reversibility: string;
  targetPath?: string | null;
  targetRepositoryRef?: string | null;
};

export type PilotContractPresentation = {
  /** Primary headline — what the Pilot is about to produce. */
  nowTitle: string;
  /** Short effect line (local write / reversible / etc.). */
  effectSummary: string;
  /** Artifact path when known, else business target paraphrase. */
  artifactLine: string;
  /** Human authority label — never leak MORRIS as Product runtime default. */
  authorityLabel: string;
  /** Whether this contract qualifies for one-CTA Exécuter orchestration. */
  simplifiedExecutePath: boolean;
  /** Reversibility in Pilot language. */
  reversibilityLabel: string;
};

function basenameFromPath(path: string): string {
  const parts = path.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? path;
}

export function isSimplifiedPilotExecutePath(
  requiredAuthority: string,
): boolean {
  return requiredAuthority === "N1" || requiredAuthority === "N2";
}

export function presentPilotContract(
  input: PilotContractPresentationInput,
): PilotContractPresentation {
  const path = input.targetPath?.trim() || null;
  const fileName = path ? basenameFromPath(path) : null;
  const isDocsWrite =
    input.action.includes("docs_write") ||
    input.target.includes("docs_write");

  const nowTitle = fileName
    ? `Créer / mettre à jour « ${fileName} »`
    : isDocsWrite
      ? "Écrire un livrable documentaire local"
      : "Exécuter le travail préparé";

  const effectParts: string[] = [];
  if (isDocsWrite) {
    effectParts.push("1 fichier");
    effectParts.push("Écriture locale");
  } else {
    effectParts.push("Effet borné");
  }
  if (input.reversibility === "reversible") {
    effectParts.push("Réversible");
  } else if (input.reversibility === "irreversible") {
    effectParts.push("Non réversible");
  }

  const authorityLabel =
    input.requiredAuthority === "N1" || input.requiredAuthority === "N2"
      ? "Pilote — écriture locale"
      : input.requiredAuthority === "MORRIS"
        ? "Morris (gate construction)"
        : input.requiredAuthority === "N3"
          ? "Autorité élevée (N3)"
          : `Autorité ${input.requiredAuthority}`;

  return {
    nowTitle,
    effectSummary: effectParts.join(" · "),
    artifactLine: path
      ? path
      : input.targetRepositoryRef
        ? `Cible projet (${input.targetRepositoryRef})`
        : "Cible dérivée du contrat scellé",
    authorityLabel,
    simplifiedExecutePath: isSimplifiedPilotExecutePath(
      input.requiredAuthority,
    ),
    reversibilityLabel:
      input.reversibility === "reversible"
        ? "Réversible"
        : input.reversibility === "irreversible"
          ? "Non réversible"
          : input.reversibility,
  };
}

```

### DIFF — core seams (trusted launch, recovery ownership, AMEND)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
index 3aa7d039..b3c5471d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
@@ -62,8 +62,8 @@
   --pm6-space-6: 32px;
   --pm6-space-7: 48px;

-  --pm6-lps-width: 380px;
-  --pm6-lps-width-wide: 400px;
+  --pm6-lps-width: 420px;
+  --pm6-lps-width-wide: 500px;
   --pm6-journal-width: 280px;
   --pm6-content-max: 1180px;
   --pm6-content-max-workspace: 1680px;
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
index dd121802..37b1fea9 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
@@ -26,6 +26,11 @@ import {
   resolveBoundedReadOnlyBaseHeadSha,
   validateBaseHeadSha,
 } from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import {
+  launchContextAsContractInputs,
+  resolveTrustedProductLaunchContext,
+} from "../w2/resolveTrustedProductLaunchContext";

 export type PrepareAndResolveM3Deps = PrepareM3Deps &
   ResolveM3Deps & {
@@ -59,6 +64,17 @@ export type PrepareAndResolveM3Deps = PrepareM3Deps &
     resolveBoundedReadOnlyHead?: () => Promise<string | null> | string | null;
     gitCommandRunner?: GitCommandRunner;
     gitStartDir?: string;
+    /**
+     * Product UI path — Pilot/N2 for local docs_write.
+     * Legacy callers omit this (defaults MORRIS in prepareM3FromDecision).
+     */
+    productRuntimeAuthority?: "N2" | "MORRIS";
+    /**
+     * When set, docs_write resolution pins trusted launch context
+     * (managed clone HEAD + repositoryBinding) via resolveTrustedProductLaunchContext.
+     * Never from the browser.
+     */
+    oa?: RuntimeOaStack;
   };

 export type F3M3ResolvedPayload = {
@@ -109,7 +125,10 @@ export async function prepareAndResolveM3ProductPath(input: {
     projectId: input.projectId,
     decisionId: input.decisionId,
     currentContext: input.currentContext,
-    deps: input.deps,
+    deps: {
+      ...input.deps,
+      productRuntimeAuthority: input.deps.productRuntimeAuthority,
+    },
   });
   if (!prepared.ok) {
     return prepared;
@@ -152,28 +171,53 @@ export async function prepareAndResolveM3ProductPath(input: {
     selected.kind === "bounded_docs_write"
   ) {
     let sha: string | null = null;
-    const pinned =
-      selected.kind === "bounded_docs_write"
-        ? (input.deps.boundedDocsWriteBaseHeadSha ??
-          input.deps.boundedReadOnlyBaseHeadSha)
-        : input.deps.boundedReadOnlyBaseHeadSha;
-    if (pinned !== undefined) {
-      sha = validateBaseHeadSha(pinned);
-    } else if (input.deps.resolveBoundedReadOnlyHead) {
-      sha = validateBaseHeadSha(await input.deps.resolveBoundedReadOnlyHead());
-    } else {
-      const resolved = await resolveBoundedReadOnlyBaseHeadSha({
-        gitRunner: input.deps.gitCommandRunner,
-        startDir: input.deps.gitStartDir,
+    let trustedInputs: Record<string, string> = {};
+    /** RC-03 — marker only when resolveTrustedProductLaunchContext succeeded. */
+    let trustedLaunchPinned = false;
+    if (selected.kind === "bounded_docs_write" && input.deps.oa) {
+      const launch = await resolveTrustedProductLaunchContext({
+        oa: input.deps.oa,
+        projectId: input.projectId,
+        pinnedBaseHeadSha:
+          input.deps.boundedDocsWriteBaseHeadSha ??
+          input.deps.boundedReadOnlyBaseHeadSha,
       });
-      if (!resolved.ok) {
+      if (!launch.ok) {
         return {
           ok: false,
-          code: resolved.code,
-          message: resolved.message,
+          code: launch.code,
+          message: launch.message,
         };
       }
-      sha = resolved.sha;
+      sha = launch.context.baseHeadSha;
+      trustedInputs = launchContextAsContractInputs(launch.context);
+      trustedLaunchPinned = true;
+    } else {
+      const pinned =
+        selected.kind === "bounded_docs_write"
+          ? (input.deps.boundedDocsWriteBaseHeadSha ??
+            input.deps.boundedReadOnlyBaseHeadSha)
+          : input.deps.boundedReadOnlyBaseHeadSha;
+      if (pinned !== undefined) {
+        sha = validateBaseHeadSha(pinned);
+      } else if (input.deps.resolveBoundedReadOnlyHead) {
+        sha = validateBaseHeadSha(await input.deps.resolveBoundedReadOnlyHead());
+      } else {
+        const resolved = await resolveBoundedReadOnlyBaseHeadSha({
+          gitRunner: input.deps.gitCommandRunner,
+          startDir: input.deps.gitStartDir,
+        });
+        if (!resolved.ok) {
+          return {
+            ok: false,
+            code: resolved.code,
+            message: resolved.message,
+          };
+        }
+        sha = resolved.sha;
+      }
+      // Legacy / no-OA: SHA may exist; never claim trusted launch pack.
+      trustedLaunchPinned = false;
     }
     if (!sha) {
       return {
@@ -187,7 +231,11 @@ export async function prepareAndResolveM3ProductPath(input: {
       ...selected.profile,
       inputs: {
         ...(selected.profile.inputs ?? {}),
+        ...trustedInputs,
         baseHeadSha: sha,
+        ...(trustedLaunchPinned
+          ? { trustedLaunchContextPinnedAtPrepare: "true" }
+          : {}),
       },
     };
   }
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
index 41da26d4..e3d7535b 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
@@ -10,7 +10,6 @@ import type { F2ContextSnapshot } from "@/features/project-assistant/f2/types";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalAuthorityForExecutionClass,
-  registerLocalMorrisGateAuthority,
 } from "@/lib/oa/decision";
 import {
   M4_BOUNDED_DOCS_WRITE_ACTION,
@@ -18,9 +17,9 @@ import {
   M4_BOUNDED_DOCS_WRITE_TARGET,
 } from "@/lib/oa/execution-attempt";
 import {
-  resolveBoundedReadOnlyBaseHeadSha,
-  validateBaseHeadSha,
-} from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
+  launchContextAsContractInputs,
+  resolveTrustedProductLaunchContext,
+} from "./resolveTrustedProductLaunchContext";
 import {
   boundedDocsWriteM3ResolutionProfile,
   BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS,
@@ -207,12 +206,14 @@ export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
   const binding = bound.binding;

   const issuedAt = oa.clock.nowIso();
-  // Recovery prepare builds a MORRIS-gated docs_write EC — explicit Morris grant.
-  const authority = registerLocalMorrisGateAuthority({
+  // Product recovery same-scope — Pilot/N2 (not Morris construction gate).
+  const requiredAuthority = "N2";
+  const authority = registerLocalAuthorityForExecutionClass({
     authorityResolver: oa.authorityResolver,
     scope: binding.scope || "studio.gcec.docs_write",
     issuedAt,
-    evidenceId: `evd:m3-rec-prep:${input.decisionId}`,
+    requiredAuthority,
+    evidenceId: `evd:m3-rec-prep-pilote:${input.decisionId}`,
     forceEnable: input.forceLocalAuthority === true,
   });
   if (!authority.ok) {
@@ -362,7 +363,7 @@ export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
             ? [...binding.expectedOutputs]
             : undefined,
         requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
-        requiredAuthority: "MORRIS",
+        requiredAuthority,
         constraints: prepareConstraints,
         stopConditions: prepareStops,
         evidenceRequirements: evidenceFromSource,
@@ -399,18 +400,27 @@ export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
   }

   let sha: string | null = null;
-  if (input.boundedDocsWriteBaseHeadSha !== undefined) {
-    sha = validateBaseHeadSha(input.boundedDocsWriteBaseHeadSha);
+  let trustedInputs: Record<string, string> = {};
+  /** RC-03 — marker only when trusted resolver succeeded with full pack. */
+  let trustedLaunchPinned = false;
+  // Always resolve via trusted launch when OA is present; pinned SHA is a
+  // harness hint, not a bypass of repositoryBinding / managed clone identity.
+  const launch = await resolveTrustedProductLaunchContext({
+    oa,
+    projectId: input.projectId,
+    pinnedBaseHeadSha: input.boundedDocsWriteBaseHeadSha,
+  });
+  if (launch.ok) {
+    sha = launch.context.baseHeadSha;
+    trustedInputs = launchContextAsContractInputs(launch.context);
+    trustedLaunchPinned = true;
   } else {
-    const resolvedSha = await resolveBoundedReadOnlyBaseHeadSha({});
-    if (!resolvedSha.ok) {
-      return {
-        ok: false,
-        code: resolvedSha.code,
-        message: resolvedSha.message,
-      };
-    }
-    sha = resolvedSha.sha;
+    // Fail closed — do not invent trusted marker from a bare pinned SHA.
+    return {
+      ok: false,
+      code: launch.code,
+      message: launch.message,
+    };
   }
   if (!sha) {
     return {
@@ -427,7 +437,11 @@ export async function prepareDocsWriteRecoverySuccessorFromDecision(input: {
     inputs: {
       ...(profile.inputs ?? {}),
       ...inputs,
+      ...trustedInputs,
       baseHeadSha: sha,
+      ...(trustedLaunchPinned
+        ? { trustedLaunchContextPinnedAtPrepare: "true" }
+        : {}),
     },
   };

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
index 7c060037..007f8d90 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
@@ -206,14 +206,33 @@ export function deriveProposalSubjectRecommendation(
         sealed.targetPath?.startsWith("projects/")) &&
       sealed.artifactWriteMode == null)
   ) {
+    // FR-03 — AMEND must cite a material delta, never a generic prudence loop.
+    const materialGaps: string[] = [];
+    if (sealed.artifactWriteMode === "ASK") {
+      materialGaps.push(
+        "mode d'écriture encore ASK (choisir CREATE ou UPDATE)",
+      );
+    } else if (sealed.artifactWriteMode == null) {
+      materialGaps.push(
+        "mode d'écriture non résolu (CREATE/UPDATE + Evidence si UPDATE)",
+      );
+    }
+    if (sealed.reservations.length > 0) {
+      materialGaps.push(
+        `réserves matérielles ouvertes: ${sealed.reservations.join(", ")}`,
+      );
+    }
+    if (!sealed.targetPath) {
+      materialGaps.push("chemin cible absent");
+    }
+    const delta =
+      materialGaps.length > 0
+        ? materialGaps.join(" ; ")
+        : "écart matériel non qualifié — ne pas recommander AMEND générique";
     return {
       label: "RECOMMANDATION — PAS UNE DÉCISION",
       recommendedOptionRef: PROPOSAL_SUBJECT_AMEND_REF,
-      rationale:
-        sealed.artifactWriteMode === "ASK" ||
-        sealed.artifactWriteMode == null
-          ? `Effet fichier ASK/non résolu sur la Proposal ${proposalId} — clarifier CREATE ou UPDATE (Evidence durable requise pour UPDATE) avant de poursuivre « ${summary} ».`
-          : `Réserves explicites sur la Proposal ${proposalId} (${sealed.reservations.length}) — amender ou clarifier avant de poursuivre « ${summary} ».`,
+      rationale: `Amender encore « ${summary} » (Proposal ${proposalId}) — delta matériel restant: ${delta}.`,
       isHumanDecision: false,
       promotesTrajectory: false,
       ckcAttribution: null,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
index 098ac449..cc53b277 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
@@ -268,14 +268,38 @@ export async function proposeTrajectoryOptions(
     }
     return { ok: true, ...activeSubject.optionSet };
   }
-  if (activeSubject.kind === "pursue_prepare_ready") {
+
+  // RC-04 — after terminal Attempt + structural post-Evidence recovery,
+  // RecoveryContext owns the next instruct. Pre-terminal Proposal subjects
+  // (bound / pending / pursue_prepare_ready) still win above/below.
+  const recoveredEarly = await resolvePostEvidenceRecoveryContext({
+    oa,
+    projectId: input.projectId,
+  });
+  if (!recoveredEarly.ok) {
     return {
       ok: false,
-      code: "PREPARE_CONTINUATION_OWNS_NEXT_ACTION",
-      message:
-        "Une décision pursue durable attend la préparation du contrat d'exécution — aucune nouvelle instruction d'options.",
+      code: recoveredEarly.code,
+      message: recoveredEarly.message,
     };
   }
+  const structuralRecoveryOwnsNext =
+    recoveredEarly.context != null &&
+    (recoveredEarly.context.recommendationKind === "replan" ||
+      recoveredEarly.context.requiresHumanDecision === true);
+
+  if (activeSubject.kind === "pursue_prepare_ready") {
+    // Same-scope Relancer / PREPARE continuation owns next UNLESS a structural
+    // post-Evidence recovery already exists for a terminal chain (RC-04).
+    if (!structuralRecoveryOwnsNext) {
+      return {
+        ok: false,
+        code: "PREPARE_CONTINUATION_OWNS_NEXT_ACTION",
+        message:
+          "Une décision pursue durable attend la préparation du contrat d'exécution — aucune nouvelle instruction d'options.",
+      };
+    }
+  }
   if (
     activeSubject.kind === "pending_reinstruction_required" &&
     !opaqueProposalIdEarly
@@ -287,21 +311,31 @@ export async function proposeTrajectoryOptions(
     };
   }

+  // When structural recovery owns next, ignore opaque/stale Proposal ids so
+  // PROPOSAL_STALE cannot hijack post-terminal replan options.
+  const effectiveOpaqueProposalId = structuralRecoveryOwnsNext
+    ? ""
+    : opaqueProposalIdEarly;
+
   const activeGate = await assertProposalSubjectGateOrFail({
     oa,
     projectId: input.projectId,
-    proposalId: input.proposalId,
+    proposalId: effectiveOpaqueProposalId || null,
   });
   if (!activeGate.ok) {
-    return {
-      ok: false,
-      code: activeGate.code,
-      message: activeGate.message,
-    };
+    // Structural recovery still proceeds even if a closed Proposal residual
+    // would otherwise gate generic trajectory — but only when recovery owns.
+    if (!structuralRecoveryOwnsNext) {
+      return {
+        ok: false,
+        code: activeGate.code,
+        message: activeGate.message,
+      };
+    }
   }

   let proposalSubject: ResolvedProposalDecisionSubject | null = null;
-  const opaqueProposalId = opaqueProposalIdEarly;
+  const opaqueProposalId = effectiveOpaqueProposalId;
   if (opaqueProposalId) {
     // Pre-binding only: process-local Proposal required to create OptionSet.
     // After binding, we already returned via rehydration above.
@@ -351,22 +385,12 @@ export async function proposeTrajectoryOptions(
     };
   }

-  // R7 — durable RecoveryContext for ProjectTrajectory path only.
-  // Proposal subject path keeps sealed Proposal as subject (no recovery inject).
+  // R7 — durable RecoveryContext for ProjectTrajectory / post-terminal structural.
+  // Proposal subject path keeps sealed Proposal as subject (no recovery inject)
+  // EXCEPT RC-04 structural terminal recovery ownership above.
   let recoveryContext: PostEvidenceRecoveryContext | null = null;
   if (!proposalSubject) {
-    const recovered = await resolvePostEvidenceRecoveryContext({
-      oa,
-      projectId: input.projectId,
-    });
-    if (!recovered.ok) {
-      return {
-        ok: false,
-        code: recovered.code,
-        message: recovered.message,
-      };
-    }
-    recoveryContext = recovered.context;
+    recoveryContext = recoveredEarly.context;
   }

   const ckcPromptSection = buildCkcCognitivePromptSection(ckcContent);
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts
index e2b95978..39451805 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts
@@ -32,6 +32,8 @@ export type PostEvidenceRecoveryContext = {
     W3cRecommendationKind,
     "recover" | "replan"
   >;
+  /** RC-04 — structural recovery requires Pilot options / HumanDecision. */
+  readonly requiresHumanDecision: boolean;
   readonly headline: string;
   readonly rationale: string;
   readonly nextStep: string;
@@ -289,6 +291,8 @@ export async function resolvePostEvidenceRecoveryContext(input: {
       reviewBundleId: payload.reviewBundleId,
       productOutcome: payload.productOutcome,
       recommendationKind: payload.kind,
+      requiresHumanDecision:
+        payload.kind === "replan" || payload.requiresHumanDecision === true,
       headline: payload.headline,
       rationale: payload.rationale,
       nextStep: payload.nextStep,

```

### DIFF — TrajectorySurface (RC-01/02 UI + continuity preserve)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 847c7a01..5de79998 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -89,6 +89,10 @@ import {
 } from "@/features/project-assistant/w2/proposalSubjectOptions";
 import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
 import type { ExecutionContractStatus } from "@/lib/oa/execution-contract/domain/types";
+import {
+  presentPilotContract,
+  type PilotContractPresentation,
+} from "./pilotContractPresentation";
 import styles from "./TrajectorySurface.module.css";

 /**
@@ -360,6 +364,8 @@ export function TrajectorySurface({
    */
   const continuityPassRef = useRef(0);
   const prevDurableRefreshSignalRef = useRef(durableRefreshSignal);
+  /** FR-01 — auto-materialize options once for a sole recoverable pending subject. */
+  const autoInstructedPendingRef = useRef<string | null>(null);

   /**
    * ONE fail-closed gate for the full W2 mutating seam (subject + execution).
@@ -437,6 +443,19 @@ export function TrajectorySurface({
       }),
   );

+  const pilotContractView: PilotContractPresentation | null = contract
+    ? presentPilotContract({
+        action: contract.action,
+        target: contract.target,
+        scope: contract.scope,
+        requiredAuthority: contract.requiredAuthority,
+        reversibility: contract.reversibility,
+        targetPath: contract.inspectionDisclosure?.targetPath ?? null,
+        targetRepositoryRef:
+          contract.inspectionDisclosure?.targetRepositoryRef ?? null,
+      })
+    : null;
+
   function paintAttemptPhase(
     phase: GovernedExecutePhaseSuccess["phase"],
     nextAttempt: GovernedExecuteAttemptProjection | null,
@@ -452,45 +471,78 @@ export function TrajectorySurface({
     });
   }

-  const proposeOptions = useCallback(async () => {
-    if (continuityMutationBlocked) return;
-    setBusy("options");
-    setError(null);
-    const recoverableSole =
-      pendingReinstruction?.proposalIds.length === 1 &&
-      pendingReinstruction.recoverableProposalIds.length === 1
-        ? pendingReinstruction.recoverableProposalIds[0]!
-        : null;
-    const proposalIdForPropose = activeProposalId ?? recoverableSole;
-    setPendingReinstruction(null);
-    const result = await w2ProposeTrajectoryOptionsAction({
+  const proposeOptions = useCallback(
+    async (opts?: { ignoreActiveProposalId?: boolean }) => {
+      if (continuityMutationBlocked) return;
+      setBusy("options");
+      setError(null);
+      const recoverableSole =
+        pendingReinstruction?.proposalIds.length === 1 &&
+        pendingReinstruction.recoverableProposalIds.length === 1
+          ? pendingReinstruction.recoverableProposalIds[0]!
+          : null;
+      // RC-04 — structural post-terminal recovery must not re-send a closed Proposal id.
+      const proposalIdForPropose = opts?.ignoreActiveProposalId
+        ? recoverableSole
+        : (activeProposalId ?? recoverableSole);
+      const result = await w2ProposeTrajectoryOptionsAction({
+        projectId,
+        proposalId: proposalIdForPropose,
+      });
+      setBusy(null);
+      if (!result || typeof result !== "object") {
+        setError("Instruction des options indisponible.");
+        return;
+      }
+      if (!result.ok) {
+        setError(result.message);
+        return;
+      }
+      setPendingReinstruction(null);
+      const { ok: _ok, ...set } = result;
+      setOptionSet(set);
+      setDecision(null);
+      setDecided(null);
+      setContract(null);
+      setInspection(null);
+      setAuthorization(null);
+      setAmendmentDraft("");
+      setAmendmentNotice(null);
+      // D-MORRIS-PCONT — recovery OptionSet is additive: keep durable Attempt /
+      // ProductOutcome / postEvidence projection (rehydrate, do not wipe).
+      // Only clear EC/authorization which belong to a fresh framing subject.
+      onDurableFactsChanged?.();
+    },
+    [
+      continuityMutationBlocked,
       projectId,
-      proposalId: proposalIdForPropose,
-    });
-    setBusy(null);
-    if (!result.ok) {
-      setError(result.message);
+      activeProposalId,
+      pendingReinstruction,
+      onDurableFactsChanged,
+    ],
+  );
+
+  // FR-01 — sole recoverable pending Proposal: materialize options without a free click.
+  useEffect(() => {
+    if (continuityMutationBlocked) return;
+    if (!pendingReinstruction) return;
+    if (optionSet != null || decision != null) return;
+    if (
+      pendingReinstruction.proposalIds.length !== 1 ||
+      pendingReinstruction.recoverableProposalIds.length !== 1
+    ) {
       return;
     }
-    const { ok: _ok, ...set } = result;
-    setOptionSet(set);
-    setDecision(null);
-    setDecided(null);
-    setContract(null);
-    setInspection(null);
-    setAuthorization(null);
-    setAmendmentDraft("");
-    setAmendmentNotice(null);
-    // D-MORRIS-PCONT — recovery OptionSet is additive: keep durable Attempt /
-    // ProductOutcome / postEvidence projection (rehydrate, do not wipe).
-    // Only clear EC/authorization which belong to a fresh framing subject.
-    onDurableFactsChanged?.();
+    const sole = pendingReinstruction.recoverableProposalIds[0]!;
+    if (autoInstructedPendingRef.current === sole) return;
+    autoInstructedPendingRef.current = sole;
+    void proposeOptions();
   }, [
     continuityMutationBlocked,
-    projectId,
-    activeProposalId,
     pendingReinstruction,
-    onDurableFactsChanged,
+    optionSet,
+    decision,
+    proposeOptions,
   ]);

   /** CORR-PROOF-10 — rehydrate bound Proposal OptionSet from durable Epistemic. */
@@ -574,12 +626,21 @@ export function TrajectorySurface({
       return;
     }
     if (result.kind === "none") {
-      // Server durable truth wins — clear any stale client EC projection.
-      setContract(null);
-      setInspection(null);
-      setAuthorization(null);
-      setAmendmentDraft("");
-      setAmendmentNotice(null);
+      // Server durable truth wins for stale client EC — BUT RC-01 auto-PREPARE
+      // may have just projected a contract before durable continuity catches up.
+      // Do not wipe a fresh Proposal-pursue prepared contract in that window.
+      const keepFreshPursuePrepare =
+        decision != null &&
+        Boolean(decision.proposalId) &&
+        decision.selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF &&
+        decision.decisionBasisLinked === true;
+      if (!keepFreshPursuePrepare) {
+        setContract(null);
+        setInspection(null);
+        setAuthorization(null);
+        setAmendmentDraft("");
+        setAmendmentNotice(null);
+      }
       setContinuityDecisionRef(null);
       setExecutionContinuityReadStatus("ready");
       return;
@@ -823,6 +884,28 @@ export function TrajectorySurface({
     void rehydrateGovernedExecutionContinuity();
   }, [subjectReadStatus, rehydrateGovernedExecutionContinuity]);

+  /** FR-04 — inspect a freshly prepared contract without waiting for another Pilot click. */
+  const inspectPreparedContractId = useCallback(
+    async (executionContractId: string) => {
+      const result = await w2InspectExecutionContractAction({
+        projectId,
+        executionContractId,
+      });
+      if (!result || typeof result !== "object") {
+        return false;
+      }
+      if (!result.ok) {
+        setError(result.message);
+        return false;
+      }
+      const { ok: _ok, ...state } = result;
+      setInspection(state);
+      setAuthorization(null);
+      return state.inspectionSufficient === true;
+    },
+    [projectId],
+  );
+
   const decide = useCallback(
     async (selectedOptionRef: string) => {
       if (continuityMutationBlocked) return;
@@ -865,12 +948,71 @@ export function TrajectorySurface({
       setDecision(result.decision);
       setDecided(result.trajectory ?? null);
       onDurableFactsChanged?.();
+
+      // RC-01 — after Pursue on an exploitable Proposal, auto PREPARE + inspect
+      // in the same user intention (selectedOptionRef from the click). Never auto-Execute.
+      const next = result.decision;
+      const shouldAutoPrepare =
+        isProposalSubject &&
+        selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF &&
+        Boolean(next.proposalId) &&
+        next.decisionBasisLinked === true;
+      if (!shouldAutoPrepare) {
+        return;
+      }
+      setBusy("contract");
+      setError(null);
+      const preparedResult = await projectAssistantPrepareResolvedM3Action({
+        projectId,
+        decisionId: next.decisionId,
+      });
+      setBusy(null);
+      if (!preparedResult || typeof preparedResult !== "object") {
+        // Harness / transient — keep secondary PREPARE fallback CTA.
+        return;
+      }
+      if (!preparedResult.ok) {
+        setError(preparedResult.message);
+        return;
+      }
+      const prepared = preparedResult.f3?.successor;
+      if (!prepared) {
+        setError("Contrat préparé indisponible.");
+        return;
+      }
+      setContract({
+        executionContractId: prepared.executionContractId,
+        version: prepared.version,
+        status: prepared.status,
+        action: prepared.action,
+        target: prepared.target,
+        scope: prepared.scope,
+        requiredAuthority: prepared.requiredAuthority,
+        constraints: [...prepared.constraints],
+        stopConditions: [...prepared.stopConditions],
+        requiredCapabilities: [...prepared.requiredCapabilities],
+        reversibility: prepared.reversibility,
+        semanticFingerprint: prepared.semanticFingerprint,
+        inspectionDisclosure: toInspectionDisclosureView(
+          prepared.inspectionDisclosure,
+        ),
+      });
+      setInspection(null);
+      setAuthorization(null);
+      setAmendmentDraft("");
+      setAmendmentNotice(null);
+      setAttempt(null);
+      setAttemptPhase(null);
+      setAttemptStatusLabel(null);
+      onDurableFactsChanged?.();
+      await inspectPreparedContractId(prepared.executionContractId);
     },
     [
       continuityMutationBlocked,
       optionSet,
       projectId,
       onDurableFactsChanged,
+      inspectPreparedContractId,
     ],
   );

@@ -965,11 +1107,14 @@ export function TrajectorySurface({
     setAttemptPhase(null);
     setAttemptStatusLabel(null);
     onDurableFactsChanged?.();
+    // FR-04 — auto-inspect after prepare; never auto-execute.
+    await inspectPreparedContractId(prepared.executionContractId);
   }, [
     continuityMutationBlocked,
     decision,
     projectId,
     onDurableFactsChanged,
+    inspectPreparedContractId,
   ]);

   /**
@@ -1016,12 +1161,14 @@ export function TrajectorySurface({
     setAttemptPhase(null);
     setAttemptStatusLabel(null);
     onDurableFactsChanged?.();
+    await inspectPreparedContractId(prepared.executionContractId);
   }, [
     continuityMutationBlocked,
     recoveryDecisionId,
     projectId,
     showRecoveryDocsWritePrepare,
     onDurableFactsChanged,
+    inspectPreparedContractId,
   ]);

   /**
@@ -1075,12 +1222,14 @@ export function TrajectorySurface({
     setAttemptPhase(null);
     setAttemptStatusLabel(null);
     onDurableFactsChanged?.();
+    await inspectPreparedContractId(prepared.executionContractId);
   }, [
     continuityMutationBlocked,
     decision,
     decisionDefersExecution,
     projectId,
     onDurableFactsChanged,
+    inspectPreparedContractId,
   ]);

   const rematerializeLegacyDocsWriteContract = useCallback(async () => {
@@ -1343,6 +1492,188 @@ export function TrajectorySurface({
     setInspection(outcome.inspection);
   }, [continuityMutationBlocked, contract, projectId]);

+  /**
+   * FR-09 / FR-10 — one Pilot CTA for N1/N2 local-write:
+   * orchestrate confirm (if required) + authorize + Attempt.
+   * Never auto for N3 / Morris gates. Never Recommendation→HD.
+   */
+  const executeAsPilot = useCallback(async () => {
+    if (continuityMutationBlocked) return;
+    if (!contract) return;
+    if (
+      contract.requiredAuthority !== "N1" &&
+      contract.requiredAuthority !== "N2"
+    ) {
+      return;
+    }
+    setBusy("execute");
+    setError(null);
+
+    if (!inspection?.inspectionSufficient) {
+      const ok = await inspectPreparedContractId(contract.executionContractId);
+      if (!ok) {
+        setBusy(null);
+        return;
+      }
+    }
+
+    let status = contract.status;
+    if (status === "confirmation_required") {
+      const confirmed = await w2ConfirmExecutionContractAction({
+        projectId,
+        executionContractId: contract.executionContractId,
+      });
+      if (!confirmed.ok) {
+        setBusy(null);
+        setError(confirmed.message);
+        return;
+      }
+      status = "confirmed";
+      setContract({ ...contract, status: "confirmed" });
+    }
+
+    const authResult = await w2AuthorizeExecutionContractAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+    });
+    if (!authResult.ok) {
+      setBusy(null);
+      setError(authResult.message);
+      return;
+    }
+    const { ok: _ok, ...outcome } = authResult;
+    setAuthorization(outcome);
+    setInspection(outcome.inspection);
+
+    if (outcome.outcome !== "AUTHORIZED" || outcome.executionEligible !== true) {
+      setBusy(null);
+      return;
+    }
+
+    flushSync(() => {
+      setAttempt(null);
+      setAttemptPhase(null);
+      setAttemptPhaseHistory([]);
+      setAttemptStatusLabel(null);
+      setProductOutcome(null);
+      setProductEvidencePending(false);
+    });
+
+    const selected = await w2GovernedExecuteSelectAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+    });
+    if (!selected.ok) {
+      setBusy(null);
+      setError(selected.message);
+      if (selected.attempt) {
+        paintAttemptPhase("accepted", selected.attempt, null);
+      }
+      return;
+    }
+    paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
+    await yieldBrowserPaint();
+
+    if (selected.phase === "terminal") {
+      setBusy(null);
+      paintAttemptPhase("terminal", selected.attempt, selected.statusLabel);
+      onDurableFactsChanged?.();
+      return;
+    }
+
+    const started = await w2GovernedExecuteStartAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+      attemptId: selected.attemptId,
+    });
+    if (!started.ok) {
+      setBusy(null);
+      setError(started.message);
+      if (started.attempt) {
+        flushSync(() => {
+          setAttempt(started.attempt!);
+        });
+      }
+      return;
+    }
+
+    if (started.phase === "terminal") {
+      paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
+      flushSync(() => {
+        setProductEvidencePending(true);
+      });
+      await yieldBrowserPaint();
+      const materializedEarly = await w2MaterializeProductOutcomeAction({
+        projectId,
+        attemptId: started.attemptId,
+      });
+      setBusy(null);
+      if (!materializedEarly.ok) {
+        setError(materializedEarly.message);
+        if (materializedEarly.product) setProductOutcome(materializedEarly.product);
+        if (materializedEarly.postEvidence)
+          setPostEvidence(materializedEarly.postEvidence);
+        return;
+      }
+      flushSync(() => {
+        setProductEvidencePending(false);
+        setProductOutcome(materializedEarly.product);
+        setPostEvidence(materializedEarly.postEvidence ?? null);
+      });
+      onDurableFactsChanged?.();
+      return;
+    }
+
+    paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
+    await yieldBrowserPaint();
+
+    const completed = await w2GovernedExecuteCompleteAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+      attemptId: started.attemptId,
+    });
+    if (!completed.ok) {
+      setBusy(null);
+      setError(completed.message);
+      if (completed.attempt) {
+        flushSync(() => {
+          setAttempt(completed.attempt!);
+        });
+      }
+      return;
+    }
+    paintAttemptPhase(completed.phase, completed.attempt, completed.statusLabel);
+    flushSync(() => {
+      setProductEvidencePending(true);
+    });
+    await yieldBrowserPaint();
+
+    const materialized = await w2MaterializeProductOutcomeAction({
+      projectId,
+      attemptId: completed.attemptId,
+    });
+    setBusy(null);
+    if (!materialized.ok) {
+      setError(materialized.message);
+      if (materialized.product) setProductOutcome(materialized.product);
+      if (materialized.postEvidence) setPostEvidence(materialized.postEvidence);
+      return;
+    }
+    flushSync(() => {
+      setProductEvidencePending(false);
+      setProductOutcome(materialized.product);
+      setPostEvidence(materialized.postEvidence ?? null);
+    });
+    onDurableFactsChanged?.();
+  }, [
+    continuityMutationBlocked,
+    contract,
+    inspection,
+    projectId,
+    inspectPreparedContractId,
+    onDurableFactsChanged,
+  ]);
+
   const governedExecute = useCallback(async () => {
     if (continuityMutationBlocked) return;
     if (
@@ -2198,9 +2529,9 @@ export function TrajectorySurface({
             data-testid="w2-proposal-backed-prepare"
           >
             <p className={styles.blockNote} data-testid="w2-proposal-backed-prepare-note">
-              La décision porte déjà l&apos;opération scellée. Préparez le
-              contrat d&apos;exécution à partir de cette décision — sans
-              resélection technique.
+              Reprise secondaire : la préparation automatique n&apos;a pas abouti
+              ou le contrat n&apos;est plus disponible. Vous pouvez reprendre la
+              préparation sans resélection technique.
             </p>
             <button
               type="button"
@@ -2209,7 +2540,7 @@ export function TrajectorySurface({
               onClick={() => void prepareProposalBackedContract()}
               disabled={busy !== null || continuityMutationBlocked}
             >
-              Préparer le contrat d&apos;exécution
+              Reprendre la préparation
             </button>
           </div>
           ) : null}
@@ -2315,67 +2646,103 @@ export function TrajectorySurface({
           data-testid="w2-contract"
         >
           <h3 id="w2-contract-title" className={styles.blockTitle}>
-            Contrat d&apos;exécution — résumé
+            À faire maintenant
           </h3>
+          {pilotContractView ? (
+            <>
+              <p
+                className={styles.blockBody}
+                data-testid="w2-contract-now-title"
+              >
+                {pilotContractView.nowTitle}
+              </p>
+              <p
+                className={styles.blockNote}
+                data-testid="w2-contract-effect-summary"
+              >
+                {pilotContractView.effectSummary}
+              </p>
+              <p
+                className={styles.blockNote}
+                data-testid="w2-contract-authority-label"
+              >
+                Autorité : {pilotContractView.authorityLabel}
+              </p>
+              <p
+                className={styles.blockNote}
+                data-testid="w2-contract-status"
+                data-status={contract.status}
+              >
+                État :{" "}
+                {inspection?.inspectionSufficient
+                  ? pilotContractView.simplifiedExecutePath
+                    ? "Prêt à exécuter"
+                    : executionContractStatusLabel(contract.status)
+                  : executionContractStatusLabel(contract.status)}
+              </p>
+              <p
+                className={styles.blockNote}
+                data-testid="w2-contract-next-action"
+              >
+                Prochaine action :{" "}
+                {wrongGenericReplaceableByRecoveryPrepare
+                  ? "Préparer le contrat recovery docs_write (explicite)"
+                  : pilotContractView.simplifiedExecutePath &&
+                      inspection?.inspectionSufficient
+                    ? "Exécuter"
+                    : inspection?.inspectionSufficient
+                      ? contract.status === "confirmation_required"
+                        ? "Confirmer si requis, puis statuer sur l'autorisation"
+                        : "Statuer sur l'autorisation"
+                      : "Inspecter le détail du contrat"}
+              </p>
+            </>
+          ) : null}
           <p className={styles.blockNote}>
             {wrongGenericReplaceableByRecoveryPrepare
               ? "Contrat générique pré-exécution visible pour cette décision. La prochaine action utile est de préparer le contrat recovery docs_write — pas d'inspection de ce dead-end."
-              : "Relisez d'abord ce qui sera tenté. Inspectez le détail avant toute confirmation. Confirmer n'exécute pas."}
+              : pilotContractView?.simplifiedExecutePath
+                ? "Le contrat est préparé et inspecté. Un clic Exécuter lance la gouvernance interne (confirmation si requise, autorisation, tentative) — sans micro-étapes visibles."
+                : "Relisez d'abord ce qui sera tenté. Inspectez le détail avant toute confirmation. Confirmer n'exécute pas."}
           </p>
-          <dl className={styles.facts} data-testid="w2-contract-facts">
-            <div>
-              <dt>Ce qui sera fait</dt>
-              <dd data-testid="w2-contract-action">{contract.action}</dd>
-            </div>
-            <div>
-              <dt>Cible technique</dt>
-              <dd data-testid="w2-contract-target">{contract.target}</dd>
-            </div>
-            {contract.inspectionDisclosure?.targetPath ? (
+          {/* RC-02 — primary surface is business-only; raw codes live under details. */}
+          <details className={styles.contractLevel2} data-testid="w2-contract-facts">
+            <summary>Détails techniques</summary>
+            <dl className={styles.facts}>
               <div>
-                <dt>Cible exacte</dt>
-                <dd data-testid="w2-contract-exact-target">
-                  {contract.inspectionDisclosure.targetPath}
-                </dd>
+                <dt>Action code</dt>
+                <dd data-testid="w2-contract-action">{contract.action}</dd>
               </div>
-            ) : null}
-            {contract.inspectionDisclosure?.targetRepositoryRef ? (
               <div>
-                <dt>Repository</dt>
-                <dd data-testid="w2-contract-repository">
-                  {contract.inspectionDisclosure.targetRepositoryRef}
+                <dt>Cible technique</dt>
+                <dd data-testid="w2-contract-target">{contract.target}</dd>
+              </div>
+              {contract.inspectionDisclosure?.targetPath ? (
+                <div>
+                  <dt>Cible exacte</dt>
+                  <dd data-testid="w2-contract-exact-target">
+                    {contract.inspectionDisclosure.targetPath}
+                  </dd>
+                </div>
+              ) : null}
+              {contract.inspectionDisclosure?.targetRepositoryRef ? (
+                <div>
+                  <dt>Repository</dt>
+                  <dd data-testid="w2-contract-repository">
+                    {contract.inspectionDisclosure.targetRepositoryRef}
+                  </dd>
+                </div>
+              ) : null}
+              <div>
+                <dt>Périmètre</dt>
+                <dd data-testid="w2-contract-scope">{contract.scope}</dd>
+              </div>
+              <div>
+                <dt>État technique</dt>
+                <dd data-testid="w2-contract-status-label">
+                  {executionContractStatusLabel(contract.status)}
                 </dd>
               </div>
-            ) : null}
-            <div>
-              <dt>Périmètre</dt>
-              <dd data-testid="w2-contract-scope">{contract.scope}</dd>
-            </div>
-            <div>
-              <dt>État du contrat</dt>
-              <dd
-                data-testid="w2-contract-status"
-                data-status={contract.status}
-              >
-                {executionContractStatusLabel(contract.status)}
-              </dd>
-            </div>
-            <div>
-              <dt>Prochaine action utile</dt>
-              <dd data-testid="w2-contract-next-action">
-                {wrongGenericReplaceableByRecoveryPrepare
-                  ? "Préparer le contrat recovery docs_write (explicite)"
-                  : inspection?.inspectionSufficient
-                    ? contract.status === "confirmation_required"
-                      ? "Confirmer si requis, puis statuer sur l'autorisation"
-                      : "Statuer sur l'autorisation"
-                    : "Inspecter le détail du contrat"}
-              </dd>
-            </div>
-          </dl>
-          <details className={styles.contractLevel2}>
-            <summary>Détails métier du contrat</summary>
-            <dl className={styles.facts}>
               <div>
                 <dt>Version</dt>
                 <dd data-testid="w2-contract-version">v{contract.version}</dd>
@@ -2397,7 +2764,8 @@ export function TrajectorySurface({
               <div>
                 <dt>Réversibilité</dt>
                 <dd data-testid="w2-contract-reversibility">
-                  {contract.reversibility}
+                  {pilotContractView?.reversibilityLabel ??
+                    contract.reversibility}
                 </dd>
               </div>
               {contract.inspectionDisclosure?.scopeIn ? (
@@ -2620,11 +2988,45 @@ export function TrajectorySurface({
             </div>
           ) : null}

-          <div className={styles.actions}>
+          {pilotContractView?.simplifiedExecutePath &&
+          !wrongGenericReplaceableByRecoveryPrepare &&
+          inspection?.inspectionSufficient &&
+          !attempt &&
+          authorization?.outcome !== "AUTHORIZED" ? (
+            <div className={styles.actions} data-testid="w2-pilot-execute-zone">
+              <button
+                type="button"
+                className={styles.primaryAction}
+                data-testid="w2-pilot-execute"
+                onClick={() => void executeAsPilot()}
+                disabled={busy !== null || governedContinuationBlocked}
+              >
+                Exécuter
+              </button>
+              <p className={styles.blockNote} data-testid="w2-pilot-execute-hint">
+                Confirmation et autorisation sont orchestrées dans ce clic —
+                aucune décision structurelle n&apos;est automatisée.
+              </p>
+            </div>
+          ) : null}
+
+          <div
+            className={styles.actions}
+            data-testid="w2-contract-governance-steps"
+            hidden={
+              Boolean(
+                pilotContractView?.simplifiedExecutePath &&
+                  inspection?.inspectionSufficient &&
+                  !attempt &&
+                  authorization?.outcome !== "AUTHORIZED",
+              )
+            }
+          >
             <button
               type="button"
               className={
-                wrongGenericReplaceableByRecoveryPrepare
+                wrongGenericReplaceableByRecoveryPrepare ||
+                pilotContractView?.simplifiedExecutePath
                   ? styles.secondaryAction
                   : styles.primaryAction
               }
@@ -3009,14 +3411,37 @@ export function TrajectorySurface({
                   </div>
                 </dl>
               </details>
-              {postEvidence.recommendation.kind === "recover" ||
-              postEvidence.recommendation.kind === "replan" ||
-              postEvidence.recommendation.requiresHumanDecision ? (
+              {postEvidence.recommendation.kind === "recover" &&
+              !postEvidence.recommendation.requiresHumanDecision ? (
+                showRecoveryDocsWritePrepare ? (
+                  <button
+                    type="button"
+                    className={styles.primaryAction}
+                    data-testid="w3c-relancer-same-scope"
+                    onClick={() => void prepareRecoveryDocsWriteContract()}
+                    disabled={busy !== null || continuityMutationBlocked}
+                  >
+                    Relancer
+                  </button>
+                ) : (
+                  <p
+                    className={styles.blockNote}
+                    data-testid="w3c-same-scope-recovery-note"
+                    role="status"
+                  >
+                    Reprise technique same-scope — aucune nouvelle trajectoire
+                    ni décision structurelle requise.
+                  </p>
+                )
+              ) : postEvidence.recommendation.kind === "replan" ||
+                postEvidence.recommendation.requiresHumanDecision ? (
                 <button
                   type="button"
                   className={styles.secondaryAction}
                   data-testid="w3c-propose-trajectory"
-                  onClick={() => void proposeOptions()}
+                  onClick={() =>
+                    void proposeOptions({ ignoreActiveProposalId: true })
+                  }
                   disabled={busy !== null || continuityMutationBlocked}
                 >
                   Proposer des options de trajectoire

```
