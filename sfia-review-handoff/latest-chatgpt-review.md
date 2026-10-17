# SFIA STUDIO — Review Pack
## STUDIO-P6-GENERIC-EXECUTION-TOOL-FIRST-SIMPLIFICATION-01

**Horodatage (UTC):** 2026-10-17T18:22:32Z
**Cycle:** 8 — Delivery / Critical
**Typologie:** EVOL / UX / ARCHITECTURE IMPACT / QA
**GO Morris consommé:** GO — simplification coordonnée Nora → Cursor (PREPARE sans HD systématique / sans CycleInstance obligatoire / sans Artifact obligatoire ; Inspect → Exécuter = autorisation de lancement ; gates structurels conservés). **Inspect≠Execute** non fusionnés (STOP évité).

---

## 1. Git Truth

### Initial (baseline ChatGPT)
- Repository: `mcleland147/sfia-workspace`
- `origin/main` @ `e03c7b9fd3665b89a4083a937b82424c5e7f6406` (PR #587 MERGED)
- Worktree isolé créé depuis `origin/main`

### Final (Product worktree canonique de ce cycle)
- Path: `/tmp/sfia-tf-simp-clean`
- Branch: `fix/sfia-studio-p6-tool-first-simp-01` (tracks `origin/main`)
- HEAD: `e03c7b9fd3665b89a4083a937b82424c5e7f6406`
- `origin/main`: `e03c7b9fd3665b89a4083a937b82424c5e7f6406`
- Porcelain: **uniquement** les fichiers listés §6 (pas de dirty historique)
- **Aucun commit Product / push Product / PR Product**

### Incident Git (documenté — régularisé)
Des worktrees antérieurs (`…-simplication-01`, `…-execution-contract-clean`) ont été basculés vers `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862` (checkout externe) + **disk full** temporaire. Les worktrees dirty existants ont été **préservés** (pas de reset/stash/clean). Les deltas intentionnels ont été rejoués sur un worktree neuf `/tmp/sfia-tf-simp-clean` @ `e03c7b9`.

---

## 2. Sources canoniques lues / utilisées

- Convergence build doctrine / roadmap / product-completion / product-simplification P6 (contexte)
- D-ER-16…19, G-D4, M-HD, Living Production Runtime Reference (via code Product post-PR#587)
- SFIA v2.6 = processus Cursor uniquement (≠ doctrine runtime Studio)
- Git courant (e03c7b9) prime

---

## 3. Convergence Pre-check

| Item | État |
|---|---|
| Capacité | V3-F05 Conversation → décision → exécution |
| Milestone | P6 — Global Integrated Product QA |
| PR #587 | MERGED @ e03c7b9 |
| CI post-merge | SUCCESS (baseline ChatGPT) |
| HQA | Blocage PREPARE pathless confirmé (MATERIALITY_UNKNOWN) |
| P6 PASS | **NON revendiqué** |
| Runtime v3 | **NON ADOPTED** |
| READY FOR REAL | **NON** |

---

## 4. Matrice dépendances (audit §4) — KEEP / ADAPT / RETIRE LATER

| COMPOSANT | DÉPENDANCE | IMPACT | KEEP/ADAPT/RETIRE | RISQUE | PREUVE |
|---|---|---|---|---|---|
| `productExecutionAgentsTools.ts` | solicitPrepare → Product | +`repositoryMutation` optionnel | ADAPT | Faible | DER16 param keys + tool-first A |
| `orchestrateTurn.ts` | solicitGenericExecutionPrepare | Passe `repositoryMutation` | ADAPT | Faible | DER16 R2b |
| `orchestrateF2.ts` | chatFirst / NEW_CYCLE | Aucune diversion NEW_CYCLE pour PREPARE explicite (déjà) | KEEP | — | DER16 E10 |
| `prepareGenericExecutionContractDraft.ts` | materiality + launch | Pathless analysis + launch pin | ADAPT | Moyen | tool-first A–J |
| `resolveAuthoritativeProductMateriality.ts` | LPS/pathRoot/caps | `qualifyBoundedNonMutatingAnalysisMission` | ADAPT | Moyen | unit + A |
| `resolveGenericPrepareDocumentaryTarget.ts` | artifact routing | Non modifié ; doc write reste bind | KEEP | — | MB01 |
| `pendingGenericPrepareOfferStore.ts` | session offer | Non modifié | KEEP | — | DER16 |
| `authorizeGenericPreparedContract.ts` | inspect+confirm+auth | Scope vide autorisé si bounded stamp | KEEP (+ via revalidate) | Moyen | A authorize |
| `confirmForAuthorization.ts` | G-D4 | Conservé ; fold UI | KEEP | — | G-D4 |
| `governedExecuteAuthorizedContract.ts` | Select/Start | Non modifié Cursor REAL | KEEP | — | A/J Select |
| `ExecutionSurface.tsx` | W2 actions | Confirm foldé dans Exécuter après Attest | ADAPT | Moyen | UI E1 |
| `pilotExecutionPresentation.ts` | CTA | confirm→execute label | ADAPT | Faible | UI E1/E3 |
| `TrajectorySurface.tsx` | CR-P6-02 déjà | Non modifié | KEEP | — | — |
| `HumanDecision` services | M-HD | Conservés pour structurel | KEEP | — | CAS F / MHD |
| OA ExecutionContract | statuses/N2 | Non modifié invariants | KEEP | — | G-D4 |
| Cursor Generalist | REAL boundary | Non modifié | KEEP | — | Fake DET |

### Chemin HQA reconstitué
1. **Source:** `resolveAuthoritativeProductMateriality` — `no_concrete_mission_paths_fail_closed` → `productContextSufficient=false` → `MATERIALITY_UNKNOWN`
2. **Symptômes UI:** PREPARE refusé / détours cadrage / HD demandé pour analyse pathless
3. **Correction:** qualification bounded non-mutating + launch pin + Exécuter fold Confirm

### Règles modifiées (pas de contournement silencie)
- Pathless ≠ UNKNOWN automatique si Product vérifie non-mutation contrôlable
- Empty scopeIn admissible à authorize **si** stamp `boundedNonMutatingAnalysis`
- CTA Exécuter après attest porte Confirm (serveur) — **pas** d’auto-attest

### STOP Morris évité
Fusion Inspect+Exécuter en un clic **non faite**. Inspect reste geste distinct.

---

## 5. Simplification effectuée

**Parcours cible ordinaire:**
Nora tool `request_generic_execution_prepare` → Product PREPARE (EC durable, empty decisionRefs si NON_STRUCTURAL) → UI inspectable → Attest → **Exécuter** (Confirm si N2 + Authorize + Launch) → Fake Cursor DET → Evidence.

**Sans:** HD systématique, CycleInstance obligatoire, Artifact obligatoire, faux chemin documentaire, second clic Confirmer pour mission ordinaire.

**Conservé:** HD structurel, protected paths, capability envelope, version/fingerprint binding, no Attempt at PREPARE, Inspect≠Execute.

---

## 6. Fichiers modifiés (justification)

| Fichier | Justification |
|---|---|
| `w2/resolveAuthoritativeProductMateriality.ts` | Admission pathless bounded analysis |
| `w2/prepareGenericExecutionContractDraft.ts` | Stamp effects + launch pin pathless |
| `lib/nora-cognitive-runtime/productExecutionAgentsTools.ts` | Param `repositoryMutation` |
| `orchestrateTurn.ts` | Wiring mission.repositoryMutation |
| `ExecutionSurface.tsx` | Fold Confirm→Exécuter après attest |
| `pilotExecutionPresentation.ts` | CTA Exécuter (plus Confirmer séparé) |
| `p6.der16…d0.test.ts` | Oracle params outil |
| `p5.s03.durable…ui.test.tsx` | Oracles UI Exécuter fold |
| `p5.s03.executionReconcile…ui.test.tsx` | Inspect sans exécution silencieuse |
| `p6.toolFirst…d0.test.ts` (**NEW**) | Scénarios A–J E2E Product |

---

## 7. Contenu exploitable — diffs complets


### Diff — resolveAuthoritativeProductMateriality.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
index 985ae3dd..221aba73 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
@@ -45,6 +45,8 @@ export type AuthoritativeMaterialityResolution = {
     readonly authorityEnvelopeBasis: string;
     readonly concreteMissionPaths: readonly string[];
     readonly pathsOutsidePathRoot: readonly string[];
+    readonly boundedNonMutatingAnalysis: boolean;
+    readonly boundedNonMutatingAnalysisBasis: string | null;
   };
   readonly productContextSufficient: boolean;
   readonly liveReadOk: boolean;
@@ -109,16 +111,132 @@ export function pathsOutsideAuthorizedPathRoot(input: {
   });
 }

+/**
+ * Product-owned bounded non-mutating analysis (tool-first ordinary mission).
+ *
+ * Positive Product facts only — never keyword absence alone, never “pathless ⇒ safe”.
+ * Requires: live context, empty concrete WHERE, no structural signals, generalist
+ * envelope, no documentary/write/materialization structure, and a controllable
+ * no-mutation claim (read_only intent OR explicit repositoryMutation none/read
+ * OR mission fields with no write/repo structures after Product verification).
+ */
+export function qualifyBoundedNonMutatingAnalysisMission(input: {
+  readonly analysis: IntentAnalysisDto;
+  readonly liveOk: boolean;
+  readonly concretePaths: readonly string[];
+  readonly protectedPathHits: readonly string[];
+  readonly positiveStructuralSignal: boolean;
+  readonly requestedCapabilities: readonly string[];
+  readonly isDocumentaryWriteMission: boolean;
+}): { readonly ok: boolean; readonly basis: string } {
+  if (!input.liveOk) {
+    return { ok: false, basis: "live_lps_unavailable" };
+  }
+  if (input.concretePaths.length > 0) {
+    return { ok: false, basis: "concrete_paths_present_use_path_materiality" };
+  }
+  if (input.protectedPathHits.length > 0) {
+    return { ok: false, basis: "protected_path_hits" };
+  }
+  if (input.positiveStructuralSignal) {
+    return { ok: false, basis: "positive_structural_signal" };
+  }
+  if (input.isDocumentaryWriteMission) {
+    return { ok: false, basis: "documentary_write_mission" };
+  }
+  const ei = input.analysis.executionIntent;
+  const intentKind = ei?.intentKind?.trim() || null;
+  if (intentKind === "docs_write") {
+    return { ok: false, basis: "intent_kind_docs_write" };
+  }
+  const elevated = input.requestedCapabilities.filter(
+    (c) => c.trim().length > 0 && !isCapabilityWithinGenericPrepareEnvelope(c),
+  );
+  if (elevated.length > 0) {
+    return { ok: false, basis: "elevated_capabilities" };
+  }
+  if (
+    input.requestedCapabilities.some(
+      (c) => c.trim() === "cap:cursor.docs_write",
+    )
+  ) {
+    return { ok: false, basis: "docs_write_capability_proposed" };
+  }
+  const materialization = (
+    input.analysis as { artifactMaterializationOperation?: string | null }
+  ).artifactMaterializationOperation;
+  if (
+    typeof materialization === "string" &&
+    materialization.trim().length > 0
+  ) {
+    return { ok: false, basis: "artifact_materialization_operation" };
+  }
+  if (ei?.targetPath?.trim() || ei?.artifactFileName?.trim()) {
+    return { ok: false, basis: "write_target_candidate_present" };
+  }
+  if (ei?.artifactWriteMode === "CREATE" || ei?.artifactWriteMode === "UPDATE") {
+    return { ok: false, basis: "artifact_write_mode" };
+  }
+  const objective = (
+    input.analysis.objective ??
+    input.analysis.rephrasedRequest ??
+    ""
+  ).trim();
+  const expectedOutcome = (input.analysis.expectedOutcome ?? "").trim();
+  const scopeNarrative = (input.analysis.scope ?? "").trim();
+  if (!objective || (!expectedOutcome && !scopeNarrative)) {
+    return { ok: false, basis: "mission_data_insufficient" };
+  }
+
+  // Controllable no-mutation claim (Product-structured — not lexical).
+  const declaredMutation = (
+    input.analysis as {
+      repositoryMutationDeclared?: "none" | "read" | "write" | "unknown" | null;
+    }
+  ).repositoryMutationDeclared;
+  const readOnlyIntent = intentKind === "read_only";
+  const explicitNone =
+    declaredMutation === "none" || declaredMutation === "read";
+  const explicitWrite = declaredMutation === "write";
+  if (explicitWrite) {
+    return { ok: false, basis: "repository_mutation_declared_write" };
+  }
+  // Pathless tool-solicited missions (executionIntent null) with verified absence
+  // of write/repo structures + live Product + mission data → bounded analysis.
+  // Explicit read_only / repositoryMutation none|read strengthens the claim.
+  if (
+    !readOnlyIntent &&
+    !explicitNone &&
+    declaredMutation === "unknown"
+  ) {
+    return { ok: false, basis: "repository_mutation_unknown" };
+  }
+  if (readOnlyIntent || explicitNone || declaredMutation == null) {
+    return {
+      ok: true,
+      basis: readOnlyIntent
+        ? "read_only_intent_pathless_verified"
+        : explicitNone
+          ? "declared_non_mutating_pathless_verified"
+          : "pathless_no_write_structure_mission_data_verified",
+    };
+  }
+  return { ok: false, basis: "non_mutating_claim_absent" };
+}
+
 /**
  * Structural mutation: Product-path evidence only.
  * Protected path in scope → structural (distinct from Morris gate at launch).
- * Without concrete non-protected paths → cannot claim non-structural (UNKNOWN upstream).
+ * Pathless missions may qualify as bounded non-mutating analysis (tool-first).
+ * Otherwise without concrete non-protected paths → cannot claim non-structural.
  */
 function deriveStructuralProjectMutation(input: {
   readonly protectedPathHits: readonly string[];
   readonly concretePaths: readonly string[];
   readonly liveOk: boolean;
   readonly positiveStructuralSignal: boolean;
+  readonly boundedNonMutatingAnalysis: boolean;
+  readonly boundedNonMutatingBasis: string;
 }): { readonly value: boolean; readonly basis: string } {
   if (!input.liveOk) {
     return { value: true, basis: "live_lps_unavailable_fail_closed" };
@@ -130,6 +248,12 @@ function deriveStructuralProjectMutation(input: {
     return { value: true, basis: "positive_structural_model_signal" };
   }
   if (input.concretePaths.length === 0) {
+    if (input.boundedNonMutatingAnalysis) {
+      return {
+        value: false,
+        basis: `bounded_non_mutating_analysis:${input.boundedNonMutatingBasis}`,
+      };
+    }
     // Cannot prove non-mutation without concrete WHERE — escalate via insufficient context.
     return { value: true, basis: "no_concrete_mission_paths_fail_closed" };
   }
@@ -219,6 +343,11 @@ export async function resolveAuthoritativeProductMateriality(input: {
   readonly projectId: string;
   readonly analysis: IntentAnalysisDto;
   readonly cycleInstanceId?: string | null;
+  /**
+   * When true, documentary write bind already claimed this mission —
+   * never qualify as pathless analysis (avoids circular import).
+   */
+  readonly isDocumentaryWriteMission?: boolean;
 }): Promise<AuthoritativeMaterialityResolution> {
   const live = await readLiveProjectContext(input.oa, input.projectId);
   const liveOk = live.ok;
@@ -257,11 +386,23 @@ export async function resolveAuthoritativeProductMateriality(input: {
       input.analysis.signals?.irreversible,
   );

+  const bounded = qualifyBoundedNonMutatingAnalysisMission({
+    analysis: input.analysis,
+    liveOk,
+    concretePaths,
+    protectedPathHits,
+    positiveStructuralSignal,
+    requestedCapabilities,
+    isDocumentaryWriteMission: input.isDocumentaryWriteMission === true,
+  });
+
   const structural = deriveStructuralProjectMutation({
     protectedPathHits,
     concretePaths,
     liveOk,
     positiveStructuralSignal,
+    boundedNonMutatingAnalysis: bounded.ok,
+    boundedNonMutatingBasis: bounded.basis,
   });
   const cycle = deriveCycleOrTrajectoryMutation({
     liveActiveCycleId: liveOk ? live.context.activeCycleInstanceId : null,
@@ -289,15 +430,22 @@ export async function resolveAuthoritativeProductMateriality(input: {
       }
     : null;

-  // Sufficient for NON_STRUCTURAL only when live Product + concrete WHERE
-  // + non-mutation bases are derived from Product facts (not keyword absence).
+  const cycleAnchored =
+    cycle.basis === "active_cycle_anchored_matches_requested" ||
+    cycle.basis === "project_context_no_active_cycle_none_mutated";
+  const authorityOk =
+    authority.basis === "paths_within_path_root_and_generalist_capability_only";
+
+  // Sufficient for NON_STRUCTURAL when live Product + (concrete WHERE OR
+  // bounded pathless non-mutating analysis) + non-mutation bases from Product facts.
   const productContextSufficient =
     liveOk &&
-    concretePaths.length > 0 &&
-    structural.basis === "live_lps_ok_concrete_non_protected_paths_only" &&
-    (cycle.basis === "active_cycle_anchored_matches_requested" ||
-      cycle.basis === "project_context_no_active_cycle_none_mutated") &&
-    authority.basis === "paths_within_path_root_and_generalist_capability_only";
+    cycleAnchored &&
+    authorityOk &&
+    ((concretePaths.length > 0 &&
+      structural.basis === "live_lps_ok_concrete_non_protected_paths_only") ||
+      (bounded.ok &&
+        structural.basis.startsWith("bounded_non_mutating_analysis:")));

   const facts: AuthoritativeMaterialityResolution["facts"] = {
     modelSignals: input.analysis.signals
@@ -326,6 +474,8 @@ export async function resolveAuthoritativeProductMateriality(input: {
     authorityEnvelopeBasis: authority.basis,
     concreteMissionPaths: concretePaths,
     pathsOutsidePathRoot: outsideRoot,
+    boundedNonMutatingAnalysis: bounded.ok,
+    boundedNonMutatingAnalysisBasis: bounded.ok ? bounded.basis : null,
   };

   const assessment = assessExecutionMaterialityOrUnknown({
@@ -350,6 +500,11 @@ export function assertAuthorizedMissionScopeEnforceable(input: {
   readonly scopeIn: readonly string[];
   readonly pathRoot: string | null;
   readonly allowProtectedWithExplicitGate?: boolean;
+  /**
+   * Tool-first pathless analysis — empty WHERE is admissible only when Product
+   * stamped bounded non-mutating analysis (no invented documentary/Git target).
+   */
+  readonly allowEmptyScopeForBoundedNonMutatingAnalysis?: boolean;
 }):
   | { readonly ok: true }
   | { readonly ok: false; readonly code: string; readonly message: string } {
@@ -357,6 +512,9 @@ export function assertAuthorizedMissionScopeEnforceable(input: {
     .map((p) => p.trim())
     .filter((p) => p.length > 0 && !p.includes(" "));
   if (paths.length === 0) {
+    if (input.allowEmptyScopeForBoundedNonMutatingAnalysis === true) {
+      return { ok: true };
+    }
     return {
       ok: false,
       code: "MISSION_SCOPE_EMPTY",
@@ -529,9 +687,16 @@ export async function revalidateMaterialityAgainstCurrentProduct(input: {
   }

   // WHERE enforcement at authorize time (CR-P6-03).
+  // Pathless bounded non-mutating analysis may have empty concreteMissionPaths.
+  const allowEmptyScope =
+    current.facts.boundedNonMutatingAnalysis === true &&
+    current.facts.structuralTruthBasis.startsWith(
+      "bounded_non_mutating_analysis:",
+    );
   const scopeCheck = assertAuthorizedMissionScopeEnforceable({
     scopeIn: current.facts.concreteMissionPaths,
     pathRoot: current.facts.productCurrentness?.pathRoot ?? null,
+    allowEmptyScopeForBoundedNonMutatingAnalysis: allowEmptyScope,
   });
   if (!scopeCheck.ok) {
     return {
@@ -568,9 +733,19 @@ export function analysisStubFromMaterialityFacts(
   const protectedHits = Array.isArray(facts?.protectedPathHits)
     ? (facts!.protectedPathHits as string[])
     : [];
-  return {
+  const bounded =
+    facts?.boundedNonMutatingAnalysis === true ||
+    (typeof facts?.structuralTruthBasis === "string" &&
+      facts.structuralTruthBasis.startsWith("bounded_non_mutating_analysis:"));
+  const intentKind =
+    bounded && scopeIn.length === 0
+      ? "read_only"
+      : scopeIn.length > 0
+        ? "other"
+        : "other";
+  const stub = {
     parseOk: true,
-    intentClass: "actionable",
+    intentClass: "actionable" as const,
     candidateCycleTypeId: null,
     signals: {
       structuralChange: modelSignals?.structuralChange === true,
@@ -588,7 +763,7 @@ export function analysisStubFromMaterialityFacts(
             claimedEvidenceIds: [],
           }
         : null,
-    challengeResponseAssessment: "sufficient",
+    challengeResponseAssessment: "sufficient" as const,
     objective:
       typeof contractInputs?.objective === "string"
         ? contractInputs.objective
@@ -615,11 +790,18 @@ export function analysisStubFromMaterialityFacts(
     criticalJustification: null,
     requestedOperation: null,
     executionIntent: {
-      intentKind: "other",
+      intentKind,
       scopeIn: scopeIn.length > 0 ? scopeIn : protectedHits,
       scopeOut: [],
     } as IntentAnalysisDto["executionIntent"],
   };
+  if (bounded && scopeIn.length === 0) {
+    return {
+      ...stub,
+      repositoryMutationDeclared: "none" as const,
+    } as IntentAnalysisDto;
+  }
+  return stub;
 }

 export function parseStampedProductCurrentness(

```

### Diff — prepareGenericExecutionContractDraft.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 995d5120..7c157e92 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -647,6 +647,9 @@ export async function prepareGenericExecutionContractDraft(
     projectId: input.projectId,
     analysis,
     cycleInstanceId: input.cycleInstanceId,
+    isDocumentaryWriteMission:
+      documentaryBind.kind === "resolved" ||
+      productDocumentaryTargetResolution === "resolved_product",
   });
   const materiality = materialityResolution.assessment;
   const hdRequired =
@@ -766,13 +769,17 @@ export async function prepareGenericExecutionContractDraft(
       ? [resolvedAuthoritativeTargetPath]
       : [expectedOutcome];

-  // D — source grounding / trusted launch when mission implies repository work.
+  // D — source grounding / trusted launch when mission implies repository work
+  // OR bounded pathless analysis (Cursor still needs Project binding — ≠ inventing
+  // a documentary/Git mission target; scopeIn stays empty).
   const impliesGit = missionImpliesRepositoryWork(analysis);
+  const needsLaunchContext =
+    impliesGit || materialityResolution.facts.boundedNonMutatingAnalysis === true;
   let launchInputs: Record<string, unknown> = {};
   let sourcesToRead: string[] = [];
   let sourceGroundingPayload: unknown = null;

-  if (impliesGit) {
+  if (needsLaunchContext) {
     const launch = await resolveTrustedProductLaunchContext({
       oa: input.oa,
       projectId: input.projectId,
@@ -789,6 +796,12 @@ export async function prepareGenericExecutionContractDraft(
     launchInputs = {
       ...launchContextAsContractInputs(launch.context),
       trustedLaunchContextPinnedAtPrepare: true,
+      ...(materialityResolution.facts.boundedNonMutatingAnalysis
+        ? {
+            launchContextForBoundedAnalysisOnly: true,
+            missionScopeInEmptyByDesign: true,
+          }
+        : {}),
     };
     // Declared READ sources only — mutation scopeIn is NOT a read claim
     // (search ≠ read). Empty declared → honesty NOT_APPLICABLE when no reader.
@@ -863,6 +876,9 @@ export async function prepareGenericExecutionContractDraft(
     "CONTEXT_STALE",
     "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
     "PROTECTED_PATH_GATES_REMAIN_APPLICABLE",
+    ...(materialityResolution.facts.boundedNonMutatingAnalysis
+      ? ["NO_REPOSITORY_MUTATION_FOR_BOUNDED_ANALYSIS"]
+      : []),
   ];
   const stopSeen = new Set<string>();
   const mergedStops = stopConditions.filter((s) => {
@@ -878,6 +894,8 @@ export async function prepareGenericExecutionContractDraft(
     ? [...sealedHdEffects.reservations]
     : [...(analysis.reservations ?? [])];

+  const boundedNonMutating =
+    materialityResolution.facts.boundedNonMutatingAnalysis === true;
   const constraints = [
     "PRODUCT_GOVERNED",
     "NO_ATTEMPT_AT_PREPARE",
@@ -887,6 +905,12 @@ export async function prepareGenericExecutionContractDraft(
     "CURSOR_DETERMINES_HOW",
     "GENERIC_MISSION_NO_TASK_CATALOG",
     materiality.constraintToken,
+    ...(boundedNonMutating
+      ? [
+          "MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED",
+          "NO_INVENTED_DOCUMENTARY_OR_GIT_TARGET",
+        ]
+      : []),
     ...outOfScope.map((s) => `OUT_OF_SCOPE:${s}`),
     ...sealedOrAnalysisRisks.map((s) => `RISK:${s}`),
     ...sealedOrAnalysisReservations.map((s) => `RESERVATION:${s}`),
@@ -959,8 +983,12 @@ export async function prepareGenericExecutionContractDraft(
       executionAttemptCreated: false,
       prepareStatus: "draft_inspectable",
       materialityFacts,
+      boundedNonMutatingAnalysis: boundedNonMutating,
+      repositoryMutationDeclared: boundedNonMutating ? "none" : null,
       // Intent fidelity — inspectable mission effects (Pass 02 / EC↔HD).
-      intentKind: stampedIntentKind,
+      intentKind: boundedNonMutating
+        ? stampedIntentKind ?? "read_only"
+        : stampedIntentKind,
       artifactType: stampedArtifactType,
       requestedOperation: stampedRequestedOperation,
       reversibilityExpectation: stampedRevExpectation,
@@ -1229,6 +1257,11 @@ export type SolicitGenericPrepareMissionFields = {
   readonly expectedOutcome?: string | null;
   readonly scope?: string | null;
   readonly contextNotes?: string | null;
+  /**
+   * Optional repository-mutation claim. Product verifies; "write" without paths
+   * stays fail-closed. "none"|"read" strengthens pathless non-mutating admission.
+   */
+  readonly repositoryMutation?: "none" | "read" | "write" | "unknown" | null;
   /** Conservative-only: a true flag can only make Product MORE cautious. */
   readonly impactSignals?: {
     readonly structuralChange?: boolean;
@@ -1258,7 +1291,8 @@ export function buildIntentAnalysisFromSolicitedMission(
     sig?.dataImpact === true ||
     sig?.irreversible === true;
   const notes = fields.contextNotes?.trim() || null;
-  return {
+  const mutation = fields.repositoryMutation ?? null;
+  const base: IntentAnalysisDto = {
     parseOk: true,
     intentClass: "execution_request",
     candidateCycleTypeId: null,
@@ -1284,8 +1318,29 @@ export function buildIntentAnalysisFromSolicitedMission(
     expectedOutcome,
     criticalJustification: null,
     requestedOperation: null,
-    executionIntent: null,
+    executionIntent:
+      mutation === "none" || mutation === "read"
+        ? ({
+            intentKind: "read_only",
+            scopeIn: [],
+            scopeOut: [],
+            expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
+            requiredCapabilities: [],
+          } as IntentAnalysisDto["executionIntent"])
+        : null,
   };
+  if (
+    mutation === "none" ||
+    mutation === "read" ||
+    mutation === "write" ||
+    mutation === "unknown"
+  ) {
+    return {
+      ...base,
+      repositoryMutationDeclared: mutation,
+    } as IntentAnalysisDto;
+  }
+  return base;
 }

 export type SolicitGenericExecutionPrepareInput = {

```

### Diff — productExecutionAgentsTools.ts

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
index 945607b6..e867cdfb 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
@@ -40,6 +40,8 @@ export type SolicitGenericPrepareToolArgs = {
   readonly expectedOutcome?: string;
   readonly scope?: string;
   readonly contextNotes?: string;
+  /** Optional mutation claim — Product verifies (none|read strengthens pathless). */
+  readonly repositoryMutation?: "none" | "read" | "write" | "unknown";
   /** Conservative-only impact flags — can only make Product more cautious. */
   readonly impactSignals?: {
     readonly structuralChange?: boolean;
@@ -216,6 +218,13 @@ export function createProductExecutionAgentsTools(
           type: "string",
           description: "Optional short notes (constraints, risks, reservations).",
         },
+        repositoryMutation: {
+          type: "string",
+          enum: ["none", "read", "write", "unknown"],
+          description:
+            "Optional: declare whether the mission mutates the repository. " +
+            "Use none/read for analysis/compute without file writes. Product verifies; write without paths stays blocked.",
+        },
         impactSignals: {
           type: "object",
           additionalProperties: false,
@@ -250,11 +259,20 @@ export function createProductExecutionAgentsTools(
           ? (args as Record<string, unknown>)
           : {};
       try {
+        const mutationRaw = str(o.repositoryMutation);
+        const repositoryMutation =
+          mutationRaw === "none" ||
+          mutationRaw === "read" ||
+          mutationRaw === "write" ||
+          mutationRaw === "unknown"
+            ? mutationRaw
+            : undefined;
         const result = await solicit({
           objective: str(o.objective),
           expectedOutcome: str(o.expectedOutcome),
           scope: str(o.scope),
           contextNotes: str(o.contextNotes),
+          repositoryMutation,
           impactSignals: parseImpactSignals(o.impactSignals),
         });
         const base =

```

### Diff — orchestrateTurn.ts

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index a36e9bb0..68703ff4 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -551,6 +551,7 @@ export async function orchestrateProjectAssistantTurn(input: {
               expectedOutcome: args.expectedOutcome,
               scope: args.scope,
               contextNotes: args.contextNotes,
+              repositoryMutation: args.repositoryMutation,
               impactSignals: args.impactSignals,
             },
             sessionDbPath: input.sessionDbPath,

```

### Diff — ExecutionSurface.tsx

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
index 63695e06..34ef0684 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
@@ -521,13 +521,6 @@ export function ExecutionSurface({
         );
         return;
       }
-      if (active.contract.status === "confirmation_required") {
-        setError(
-          "Confirmation encore requise — Exécuter refuse d’agir.",
-        );
-        return;
-      }
-
       // Execute never records inspection as a side effect.
       if (!active.inspection.inspectionSufficient) {
         setError(
@@ -536,12 +529,43 @@ export function ExecutionSurface({
         return;
       }

+      // Tool-first / CR-P6-02 — one Pilot "Exécuter" gesture: Confirm (when
+      // required) then Authorize with exact binding to the inspected attestation.
+      // Inspect ≠ Confirm ≠ Authorize ≠ Execute remain distinct server acts.
+      let expectedVersion =
+        active.inspection.attestedVersion ?? active.contract.version;
+      let expectedSemanticFingerprint =
+        active.inspection.attestedSemanticFingerprint ||
+        active.inspection.semanticFingerprint ||
+        active.contract.semanticFingerprint ||
+        undefined;
+
+      if (active.contract.status === "confirmation_required") {
+        const confirmed = await w2ConfirmExecutionContractAction({
+          projectId,
+          executionContractId: active.contract.executionContractId,
+        });
+        if (!confirmed.ok) {
+          setError(confirmed.message);
+          await refreshExecutionContinuity();
+          return;
+        }
+        // Prefer attested binding; fall back to Confirm version bump when present.
+        expectedVersion =
+          active.inspection.attestedVersion ??
+          confirmed.contractVersion ??
+          expectedVersion;
+        expectedSemanticFingerprint =
+          active.inspection.attestedSemanticFingerprint ||
+          active.inspection.semanticFingerprint ||
+          expectedSemanticFingerprint;
+      }
+
       const auth = await w2AuthorizeExecutionContractAction({
         projectId,
         executionContractId: active.contract.executionContractId,
-        expectedVersion: active.contract.version,
-        expectedSemanticFingerprint:
-          active.contract.semanticFingerprint || undefined,
+        expectedVersion,
+        expectedSemanticFingerprint,
       });
       if (!auth.ok) {
         setError(auth.message);

```

### Diff — pilotExecutionPresentation.ts

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
index 2723e203..efc39460 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
@@ -652,13 +652,15 @@ export function presentPilotExecution(
       attentionNote =
         "Version ou empreinte modifiée — réexamen requis avant confirmation.";
     } else if (needsConfirm) {
+      // Tool-first ordinary path — one Pilot "Exécuter" gesture folds Confirm
+      // after inspection attestation (Trajectory CR-P6-02 pattern). Inspect ≠ Execute.
       cta = {
-        kind: "confirm",
-        label: "Confirmer",
+        kind: "execute",
+        label: "Exécuter",
         enabled: durableActionable && !busy,
       };
       attentionNote =
-        "Aucun effet ne sera produit tant que la confirmation n’est pas donnée.";
+        "Après inspection, Exécuter porte la confirmation de la version affichée puis l’autorisation — aucun effet avant ce clic.";
     } else if (!inspectionSufficient || !inspectionAlignedWithContract) {
       cta = {
         kind: "inspect",

```

### Diff — tests (der16 + UI)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
index f411edfe..c9f0aeb9 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
@@ -194,7 +194,7 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     });
   });

-  it("E1 — fresh mount confirmation_required → Confirmer invokes confirm only", async () => {
+  it("E1 — fresh mount confirmation_required → Exécuter folds Confirm then Authorize+Execute", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection(),
@@ -202,6 +202,15 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     readCurrentContinuityMock.mockResolvedValue(
       activeCurrent({ status: "confirmation_required" }),
     );
+    confirmMock.mockResolvedValue({
+      ok: true,
+      executionContractId: "xct:cp01",
+      contractVersion: 1,
+      confirmationRef: "cfm:1",
+      statusLabel: "CONFIRMATION REQUISE — OBTENUE",
+      alreadyConfirmed: false,
+      executionPerformed: false,
+    });

     render(
       <ExecutionSurface
@@ -215,27 +224,28 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
         "À confirmer",
       );
     });
-    const confirmBtn = screen.getByTestId("project-execution-confirm");
-    expect(confirmBtn).toBeTruthy();
-    expect((confirmBtn as HTMLButtonElement).disabled).toBe(false);
-    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
+    // Tool-first: no separate Confirmer CTA — Exécuter folds Confirm after inspect.
+    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
+    const executeBtn = screen.getByTestId("project-execution-execute");
+    expect((executeBtn as HTMLButtonElement).disabled).toBe(false);

-    fireEvent.click(confirmBtn);
+    fireEvent.click(executeBtn);

     await waitFor(() => {
       expect(confirmMock).toHaveBeenCalledTimes(1);
+      expect(authorizeMock).toHaveBeenCalledTimes(1);
+      expect(
+        reconcileMock.mock.calls.some(
+          (call) => (call[0] as { intent?: string }).intent === "execute",
+        ),
+      ).toBe(true);
     });
     expect(confirmMock).toHaveBeenCalledWith({
       projectId: "prj:cp01",
       executionContractId: "xct:cp01",
     });
-    // R1 — Confirm must not record inspection as a side effect.
+    // R1 — Exécuter never records inspection as a side effect.
     expect(inspectMock).not.toHaveBeenCalled();
-    expect(reconcileMock).not.toHaveBeenCalled();
-    expect(authorizeMock).not.toHaveBeenCalled();
-    // Canonical reread after confirm (≥ initial load + post-confirm).
-    expect(deriveContinuityMock.mock.calls.length).toBeGreaterThanOrEqual(2);
-    expect(readCurrentContinuityMock.mock.calls.length).toBeGreaterThanOrEqual(2);
   });

   it("E2 — fresh mount confirmed → Exécuter authorizes then reconciles execute", async () => {
@@ -287,13 +297,16 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
     );
   });

-  it("E3 — Confirmer never creates Attempt via reconcile execute", async () => {
+  it("E3 — without inspection sufficient, confirmation_required shows Inspect not Exécuter", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection(),
     });
     readCurrentContinuityMock.mockResolvedValue(
-      activeCurrent({ status: "confirmation_required" }),
+      activeCurrent({
+        status: "confirmation_required",
+        inspectionSufficient: false,
+      }),
     );

     render(
@@ -303,15 +316,11 @@ describe("P5-S03 CP01 durable execution action continuity", () => {
       />,
     );
     await waitFor(() => {
-      expect(screen.getByTestId("project-execution-confirm")).toBeTruthy();
-    });
-    fireEvent.click(screen.getByTestId("project-execution-confirm"));
-    await waitFor(() => {
-      expect(confirmMock).toHaveBeenCalled();
+      expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
     });
-    expect(reconcileMock).not.toHaveBeenCalledWith(
-      expect.objectContaining({ intent: "execute" }),
-    );
+    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
+    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
+    expect(confirmMock).not.toHaveBeenCalled();
     expect(reconcileMock).not.toHaveBeenCalled();
   });

diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
index 9a645178..600c8414 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
@@ -561,7 +561,7 @@ describe("P5-S03 CP02 execution reconcile continuity", () => {
     expect(staleContinues).toHaveLength(0);
   });

-  it("CP01 regression — Confirmer never reconcile execute/continue", async () => {
+  it("CP01 regression — without inspection, confirmation_required shows Inspect (no silent execute)", async () => {
     deriveContinuityMock.mockResolvedValue({
       ok: true,
       projection: projection({
@@ -576,6 +576,12 @@ describe("P5-S03 CP02 execution reconcile continuity", () => {
         status: "confirmation_required",
         effectConfirmationRequired: true,
       },
+      inspection: {
+        ...current.inspection,
+        inspectionSufficient: false,
+        attestationRef: null,
+        attestedVersion: null,
+      },
     });

     render(
@@ -583,13 +589,10 @@ describe("P5-S03 CP02 execution reconcile continuity", () => {
     );
     await flush(0);
     await flush(0);
-    expect(screen.getByTestId("project-execution-confirm")).toBeTruthy();
-
-    await act(async () => {
-      fireEvent.click(screen.getByTestId("project-execution-confirm"));
-      await vi.advanceTimersByTimeAsync(0);
-    });
-    expect(confirmMock).toHaveBeenCalled();
+    expect(screen.getByTestId("project-execution-inspect")).toBeTruthy();
+    expect(screen.queryByTestId("project-execution-confirm")).toBeNull();
+    expect(screen.queryByTestId("project-execution-execute")).toBeNull();
+    expect(confirmMock).not.toHaveBeenCalled();
     expect(authorizeMock).not.toHaveBeenCalled();
     expect(reconcileMock).not.toHaveBeenCalled();
   });
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
index a26c6b72..d5e6b3f9 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
@@ -1697,7 +1697,14 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
         .parameters.properties,
     );
     expect(propKeys.sort()).toEqual(
-      ["contextNotes", "expectedOutcome", "impactSignals", "objective", "scope"].sort(),
+      [
+        "contextNotes",
+        "expectedOutcome",
+        "impactSignals",
+        "objective",
+        "repositoryMutation",
+        "scope",
+      ].sort(),
     );
     expect(propKeys.join(",")).not.toMatch(/decision|authority|hd/i);


```

### Nouveau fichier complet — `p6.toolFirst.executionContractSimplification.d0.test.ts`

```typescript
/**
 * STUDIO-P6-GENERIC-EXECUTION-TOOL-FIRST-SIMPLIFICATION-01
 *
 * Deterministic Product end-to-end (Fake Cursor / Fake provider boundaries):
 * Nora tool / solicit → Product PREPARE → OA EC → inspect → authorize →
 * Select/Start → Evidence continuity.
 *
 * Scenarios A–J. ZERO Cursor REAL. PREPARE ≠ AUTHORIZE ≠ EXECUTE.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { qualifyBoundedNonMutatingAnalysisMission } from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { settleDeterministicProductCursorSuccess } from "./w2Harness";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

/** Oracle — CPM earliest-finish critical path for planning A–H (CAS A). */
function criticalPathOracleAtoH(): {
  durationDays: number;
  path: readonly string[];
} {
  const tasks: Record<string, { d: number; preds: string[] }> = {
    A: { d: 2, preds: [] },
    B: { d: 4, preds: ["A"] },
    C: { d: 3, preds: ["A"] },
    D: { d: 5, preds: ["C"] },
    E: { d: 4, preds: ["B", "D"] },
    F: { d: 2, preds: ["C"] },
    G: { d: 3, preds: ["E", "F"] },
    H: { d: 1, preds: ["G"] },
  };
  const es: Record<string, number> = {};
  const ef: Record<string, number> = {};
  const order = ["A", "B", "C", "D", "E", "F", "G", "H"];
  for (const id of order) {
    const t = tasks[id]!;
    const start = t.preds.reduce((m, p) => Math.max(m, ef[p] ?? 0), 0);
    es[id] = start;
    ef[id] = start + t.d;
  }
  const durationDays = ef.H!;
  // Backward pass for critical path (float = 0).
  const lf: Record<string, number> = { H: durationDays };
  const ls: Record<string, number> = { H: durationDays - tasks.H!.d };
  for (const id of [...order].reverse()) {
    for (const p of tasks[id]!.preds) {
      const cand = ls[id]!;
      lf[p] = lf[p] == null ? cand : Math.min(lf[p]!, cand);
      ls[p] = lf[p]! - tasks[p]!.d;
    }
  }
  const critical = order.filter((id) => ls[id] === es[id]);
  return { durationDays, path: critical };
}

const PLANNING_SCOPE = [
  "A 2j sans dépendance",
  "B 4j après A",
  "C 3j après A",
  "D 5j après C",
  "E 4j après B et D",
  "F 2j après C",
  "G 3j après E et F",
  "H 1j après G",
].join("; ");

describe("P6 tool-first Generic Execution contract simplification A–J", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    resetPendingGenericPrepareOfferStoreForTests();
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-tool-first.sqlite"),
      idPrefix: "tf01",
    });
  });

  afterEach(() => {
    resetPendingGenericPrepareOfferStoreForTests();
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
  });

  async function seedProject(input: {
    suffix: string;
    withCycle: boolean;
    framingCycle?: boolean;
  }) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `TF ${input.suffix}`,
      objective: "Tool-first simplification",
      context: "det tool-first",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `TF${input.suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:tf-${input.suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });

    let cycleInstanceId: string | null = null;
    if (input.withCycle) {
      cycleInstanceId = `cyc:tf-${input.suffix}`;
      await oa.cycleServices.createCycle.execute({
        cycleInstanceId,
        cycleTypeId: input.framingCycle ? "cyc:framing" : "cyc:delivery",
        projectId,
        signals: { lowRiskBounded: true },
        createdBy: {
          actorId: "actor:nora-f2",
          role: "agent",
          displayName: "Nora F2",
          authorityLevel: "N1",
        },
        linkAsActiveCycle: false,
      });
      const auth = registerLocalPiloteAuthority({
        authorityResolver: oa.authorityResolver,
        scope: `pilot-lifecycle:${cycleInstanceId}`,
        issuedAt: "2026-10-17T10:00:00.000Z",
        forceEnable: true,
      });
      if (!auth.ok) throw new Error("auth");
      const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps1.ok) throw new Error("lps1");
      const started = await oa.cycleServices.pilotLifecycle.start({
        cycleInstanceId,
        projectId,
        createdBy: {
          actorId: LOCAL_PILOTE_ACTOR.actorId,
          role: LOCAL_PILOTE_ACTOR.role,
          displayName: LOCAL_PILOTE_ACTOR.displayName,
          authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
        },
        authorityEvidenceId: auth.evidenceId,
        expectedLpsVersion: lps1.livingProjectState.version,
      });
      if (!started.ok) throw new Error("start");
    }

    const identity = `acme/tf-${input.suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, cycleInstanceId, oa };
  }

  async function countAttempts(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    const contracts =
      await oa.executionContractServices.contracts.listByProject(projectId);
    let total = 0;
    for (const c of contracts) {
      total += (
        await oa.executionAttemptServices!.attempts.listByContract(
          c.executionContractId,
        )
      ).length;
    }
    return total;
  }

  it("unit — pathless analysis qualifies; pathless write/docs does not", () => {
    const analysis = buildIntentAnalysisFromSolicitedMission({
      objective: "Calculer le chemin critique du planning A–H",
      expectedOutcome: "Durée minimale et chemin critique",
      scope: PLANNING_SCOPE,
      repositoryMutation: "none",
    });
    const ok = qualifyBoundedNonMutatingAnalysisMission({
      analysis,
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: false,
    });
    expect(ok.ok).toBe(true);

    const write = qualifyBoundedNonMutatingAnalysisMission({
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Écrire une note",
        expectedOutcome: "note.md",
        scope: "livrable documentaire",
        repositoryMutation: "write",
      }),
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: true,
    });
    expect(write.ok).toBe(false);
  });

  it("CAS A — pathless analysis PREPARE → inspect → authorize → Select/Start; oracle 18j", async () => {
    const oracle = criticalPathOracleAtoH();
    expect(oracle.durationDays).toBe(18);
    expect(oracle.path).toEqual(["A", "C", "D", "E", "G", "H"]);

    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "a",
      withCycle: false,
    });
    const decisionsBefore =
      await oa.decisionServices.decisions.listByProject(projectId);

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective:
          "Calculer le chemin critique de ce planning A–H (analyse sans écriture fichier)",
        expectedOutcome: `Durée minimale ${oracle.durationDays} jours ; chemin critique ${oracle.path.join(" → ")}`,
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
        contextNotes: "Mission d'analyse conversationnelle — aucune mutation repo.",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.materiality).toBe("non_structural");
    expect(await countAttempts(oa, projectId)).toBe(0);

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");
    expect(loaded.contract.constraints).toContain(
      "MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED",
    );
    expect(loaded.contract.constraints).toContain(
      "NO_INVENTED_DOCUMENTARY_OR_GIT_TARGET",
    );
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.boundedNonMutatingAnalysis).toBe(true);
    expect(inputs.resolvedAuthoritativeTargetPath ?? null).toBeNull();
    expect(inputs.targetPath ?? null).toBeNull();
    const scopeIn = Array.isArray(inputs.scopeIn) ? inputs.scopeIn : [];
    expect(scopeIn).toEqual([]);
    expect(await countAttempts(oa, projectId)).toBe(0);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: loaded.contract.version,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);

    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) throw new Error(authorized.message);
    expect(authorized.executionAttemptCreated).toBe(false);
    expect(authorized.humanDecisionCreated).toBe(false);

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);

    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.message);

    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId: started.attemptId,
    });
    expect(settled.ok).toBe(true);
    if (!settled.ok) throw new Error(settled.message);
    expect(settled.attempt.status).toBe("succeeded");

    const decisionsAfter =
      await oa.decisionServices.decisions.listByProject(projectId);
    expect(decisionsAfter.length).toBe(decisionsBefore.length);
    void cycleInstanceId;
  });

  it("CAS B — same pathless mission without CycleInstance; no artificial cycle", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "b",
      withCycle: false,
    });
    const cyclesBefore = (await oa.cycleServices.cycles.listByProject(projectId))
      .length;
    expect(cyclesBefore).toBe(0);

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique A–H",
        expectedOutcome: "18 jours ; A→C→D→E→G→H",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.projectContextOnly).toBe(true);
    expect(prep.cycleInstanceId).toBeNull();
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
  });

  it("CAS C — active framing cycle retained; no parasitic NEW_CYCLE prepare diversion", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "c",
      withCycle: true,
      framingCycle: true,
    });
    expect(cycleInstanceId).toBeTruthy();
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId,
      mission: {
        objective: "Calculer le chemin critique A–H dans le cycle de cadrage",
        expectedOutcome: "18 jours ; A→C→D→E→G→H",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.cycleInstanceId).toBe(cycleInstanceId);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.cycleInstanceId).toBe(cycleInstanceId);
    // Cycle still active — not replaced.
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    expect(lps.livingProjectState.activeCycleInstanceId).toBe(cycleInstanceId);
  });

  it("CAS D — git read of existing path keeps repositoryBinding / pathRoot", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "d",
      withCycle: false,
    });
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Analyser projects/demo/src/schedule.ts",
        expectedOutcome: "Résumé des dépendances du fichier",
        scope: "projects/demo/src/schedule.ts",
        repositoryMutation: "read",
      }),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // With concrete path, path-bound materiality applies (may need scopeIn on analysis).
    const analysisWithPath = {
      ...buildIntentAnalysisFromSolicitedMission({
        objective: "Analyser projects/demo/src/schedule.ts",
        expectedOutcome: "Résumé des dépendances du fichier",
        scope: "projects/demo/src/schedule.ts",
        repositoryMutation: "read",
      }),
      executionIntent: {
        intentKind: "read_only" as const,
        scopeIn: ["projects/demo/src/schedule.ts"],
        scopeOut: [],
        expectedOutputs: ["Résumé des dépendances du fichier"],
        requiredCapabilities: [],
      },
    };
    const prep2 = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: analysisWithPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep2.ok).toBe(true);
    if (!prep2.ok) throw new Error(prep2.message);
    expect(prep2.materiality.materiality).toBe("non_structural");
    const inputs = prep2.contract.inputs as Record<string, unknown>;
    expect(inputs.pathRoot).toBe("projects/demo");
    expect(inputs.scopeIn).toEqual(["projects/demo/src/schedule.ts"]);
    void prep;
  });

  it("CAS E — ordinary write prepare names files/effects; no Attempt before authorize", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "e",
      withCycle: false,
    });
    const analysis = {
      ...buildIntentAnalysisFromSolicitedMission({
        objective: "Corriger le tri dans projects/demo/src/sort.ts",
        expectedOutcome: "Tests verts sur le tri",
        scope: "projects/demo/src/sort.ts",
        repositoryMutation: "write",
      }),
      executionIntent: {
        intentKind: "other" as const,
        scopeIn: ["projects/demo/src/sort.ts"],
        scopeOut: [],
        expectedOutputs: ["projects/demo/src/sort.ts"],
        requiredCapabilities: [],
      },
    };
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(await countAttempts(oa, projectId)).toBe(0);
    const inputs = prep.contract.inputs as Record<string, unknown>;
    expect(inputs.scopeIn).toEqual(["projects/demo/src/sort.ts"]);
  });

  it("CAS F — protected / structural remains blocking via Nora tool path", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "f",
      withCycle: false,
    });
    // Prefer a known Product-protected path; fall back to structural signals alone.
    const candidates = [
      ".env",
      "secrets/token",
      "projects/sfia-studio/sfia-v3-framing/30-overview.md",
      "projects/demo/.git/config",
    ];
    const protectedPath =
      candidates.find((p) => Boolean(classifyStudioProductProtectedPath(p))) ??
      null;

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: {
        ...buildIntentAnalysisFromSolicitedMission({
          objective: "Modifier une zone structurelle / protégée",
          expectedOutcome: "Changement structurel appliqué",
          scope: protectedPath ?? "architecture runtime v3",
        }),
        signals: {
          structuralChange: true,
          securityImpact: true,
          architectureImpact: true,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
        executionIntent: {
          intentKind: "other",
          scopeIn: protectedPath ? [protectedPath] : [],
          scopeOut: [],
          expectedOutputs: [],
          requiredCapabilities: ["cap:elevated.admin"],
        },
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected block");
    expect(
      prep.code === "STRUCTURAL_HUMAN_DECISION_REQUIRED" ||
        prep.code === "MATERIALITY_UNKNOWN" ||
        prep.code === "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE",
    ).toBe(true);
  });

  it("CAS G — stale version after inspect refuses authorize", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "g",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);

    const stale = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion + 1,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(stale.ok).toBe(false);
    if (stale.ok) throw new Error("expected stale");
    expect(stale.code).toBe("VERSION_MISMATCH");
  });

  it("CAS H — concurrent second Select does not duplicate Attempt when first accepted", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "h",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(authorized.message);

    const s1 = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(s1.ok).toBe(true);
    if (!s1.ok) throw new Error(s1.message);
    const s2 = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    // Second select must not invent a second concurrent Attempt identity —
    // either reuse / terminal / fail-closed; never silent duplicate launch.
    expect(s2.ok).toBe(true);
    if (!s2.ok) throw new Error(s2.message);
    expect(s2.attemptId).toBe(s1.attemptId);
    expect(await countAttempts(oa, projectId)).toBe(1);
  });

  it("CAS I — reload durable contract; no invented authorization; reinspect required after clear attestation path", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "i",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    // Reload without inspect → authorize refused.
    const blocked = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: 1,
      expectedSemanticFingerprint: "not-inspected",
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) throw new Error("expected block");
    expect(
      blocked.code === "INSPECTION_REQUIRED" ||
        blocked.code === "VERSION_MISMATCH" ||
        blocked.code === "FINGERPRINT_MISMATCH" ||
        blocked.code === "INSPECTION_INSUFFICIENT",
    ).toBe(true);
  });

  it("CAS J — after deterministic succeed, Attempt succeeded and EC reloadable", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "j",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(authorized.message);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error(selected.message);
    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    if (!started.ok) throw new Error(started.message);
    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId: started.attemptId,
    });
    expect(settled.ok).toBe(true);
    if (!settled.ok) throw new Error(settled.message);
    expect(settled.attempt.status).toBe("succeeded");

    const reloaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(reloaded.ok).toBe(true);
    if (!reloaded.ok) throw new Error("reload");
    expect(reloaded.contract.executionContractId).toBe(prep.executionContractId);
  });
});

```

---

## 8. Tests et résultats exacts

**Worktree:** `/tmp/sfia-tf-simp-clean` @ `e03c7b9fd3665b89a4083a937b82424c5e7f6406`

```
npm test -- p6.toolFirst… p6.gD4… p6.der16… p5.s03.durable…
→ Test Files 4 passed · Tests 56 passed

npm run typecheck → PASS (tsc --noEmit)
npm run lint → PASS (No ESLint warnings or errors)
npm run build → PASS (Next.js build exit 0)
```

### Scénarios A–J (suite tool-first — 11 tests PASS)

| Cas | Résultat |
|---|---|
| A pathless analyse + oracle 18j A→C→D→E→G→H | PASS — PREPARE NON_STRUCTURAL, no HD, no fake path, Select/Start Fake succeed |
| B sans cycle | PASS |
| C cycle cadrage conservé | PASS |
| D lecture git path | PASS |
| E écriture ordinaire named paths, no Attempt | PASS |
| F structurel/protégé/elevated blocked | PASS |
| G version stale refuse | PASS |
| H double Select même AttemptId | PASS |
| I reload sans inventer auth | PASS |
| J succeed + reload EC | PASS |
| unit qualifyBounded | PASS |

---

## 9. Contrôles conservés

- Inspect attestation préalable obligatoire (pas d’auto-attest sur Exécuter)
- Confirm serveur si `confirmation_required` (plié dans Exécuter, pas contourné)
- Authorize: project / version / fingerprint / materiality CURRENT / scope
- Structural HD / elevated caps / protected paths fail-closed
- NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE
- Cursor REAL architecture inchangée

---

## 10. Limites Fake / Real

| | |
|---|---|
| Fake | Provider déterministe + exécuteur Fake Cursor (TestOnlyReal) |
| Product | VRAIS services PREPARE / OA EC / inspect / authorize / Select |
| REAL | Cursor réel **NON** exercé (GO REAL = NON) |
| Limitation documentée | REAL Cursor generalist **ne sandbox-pas** encore un no-write filesystem strict pour pathless ; stamp Product `MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED` + Fake DET. Gate Morris éventuel pour enforcement REAL. |

Niveau: **DETERMINISTIC PRODUCT END-TO-END PROVEN AT TESTED SCOPE**

Hors périmètre: HQA REAL, P6 GLOBAL PASS, Runtime v3 ADOPTED, READY FOR REAL.

---

## 11. Dette / sortie / gates Morris

1. Enforcement REAL no-write pathless (si requis) — **Morris decision** pour sandbox/capability read_only
2. Contaminated worktrees optionnels à nettoyer manuellement (pas touchés ici)
3. Disk space surveillance (incident no space)
4. HQA contrôlée après revue ChatGPT + Git Morris

---

## 12. Git Review Index

| Path | Role |
|---|---|
| `/tmp/sfia-tf-simp-clean` | Product WT canonique (local only) |
| `fix/sfia-studio-p6-tool-first-simp-01` | Branche locale @ e03c7b9 + deltas |
| `.tmp-sfia-review/chatgpt-review.md` | Ce pack |
| Handoff | `sfia/review-handoff` via publisher |

---

## 13. Verdict

**TOOL-FIRST GENERIC EXECUTION SIMPLIFICATION**
— **IMPLEMENTED LOCALLY**
— **DETERMINISTIC END-TO-END PASS**
— **READY FOR CHATGPT REVIEW**

Non revendiqué: READY FOR REAL · HQA PASS · P6 PASS · Runtime v3 ADOPTED · Product Git Integrated.
