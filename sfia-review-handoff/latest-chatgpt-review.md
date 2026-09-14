# CORR-PROOF-09 — FULL Review Pack
## Active-Cycle Materialization Intent Contract Alignment

**Campaign:** SFIA Studio Product Proof — Fresh Project Full Cycle
**Corrective unit:** CORR-PROOF-09 — Active-Cycle Materialization Intent Contract Alignment
**Type / Profile:** Delivery projet / EVOL / CRITICAL
**Runtime v3:** NON ADOPTED
**Product base / candidate base:** `84a36a8d32f7b2632180d789e41521d6e769c681`
**Candidate worktree:** `/Users/morris/Projects/sfia-studio-corr-proof-09-materialization-intent-contract`
**Candidate branch:** `fix/sfia-studio-corr-proof-09-materialization-intent-contract`
**Product Git integration:** NOT AUTHORIZED (local uncommitted only)

---

## A. Identity / Morris GO

Morris GO consumed: CORR-PROOF-09 — Active-Cycle Materialization Intent Contract Alignment.

Authorized: dedicated local candidate WT/branch; R22/OpenAI-native producer-contract alignment; Product code/tests in qualified scope; deterministic validation; candidate runtime reusing SAME Product+Session truth; ONE controlled LIVE Nora turn (Morris manual); stop before HD/PREPARE/execution; FULL Review Pack; L3 handoff on `sfia/review-handoff`.

NOT AUTHORIZED / not performed: Product commit/push/PR/merge; branch/worktree deletion; doctrine/Roadmap/C1; DB reset/seed/migrate; second classifier/planner; extra model call for op normalization; model switch; reasoning-effort experiment; arbitrary NL→canonical server rewrite; weakening CR-07-06; automatic HD/EC/REAL/docs_write; runtime v3 promotion.

---

## B. Git truths

| Item | Value |
|------|--------|
| origin/main | `84a36a8d32f7b2632180d789e41521d6e769c681` |
| Candidate HEAD/base | `84a36a8d32f7b2632180d789e41521d6e769c681` |
| Dogfood WT | `/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d` detached @ same anchor |
| Dogfood Product dirty | only `.tmp-sfia-review` (non-Product) after restore |
| Candidate Product | LOCAL MODIFIED / UNCOMMITTED (3 modified + 2 new) |
| move_agent_to_root | failed (unrelated branch already used by main WT); continued via absolute paths — no content impact |

---

## C. Convergence

| Axis | Content |
|------|---------|
| v3 capability | Pilot-Governed Cycle Lifecycle + Artifact Completeness + trustworthy cognitive→execution contract |
| Milestone | Active-cycle materialization producer contract alignment |
| Gap closed | Free-form provider `requestedOperation` incompatible with CR-07-06 technical ID (CORR-08 R2+R3) |
| Dependency | CORR-PROOF-07 (gate) + CORR-PROOF-08 (LIVE root cause captured) |
| Trajectory | Same-cycle target clarification reached → next is Pilote/clarification under new GO |
| Next capability | Natural Product Proof at targetPath clarification / Proposal / HumanDecision boundary |
| Debt/exit | Candidate remains local uncommitted; dogfood baseline restored |
| Gates | Deterministic green → ONE LIVE Outcome A → stop before HD |

---

## D. R22 OpenAI Capability Fit

- Existing `OpenAIConversationProvider.completeStructured` with Responses API `text.format.type=json_schema`, `strict=true`.
- Disposition: **ADAPT** existing OpenAI-native Structured Outputs contract.
- No second model / classifier / post-model LLM normalization / model switch.

Limitation: OpenAI-supported schema subset does not safely encode cross-field conditionals. Schema hard-constrains `executionIntent.requestedOperation` to technical enum|null; top-level remains free-form for unrelated F2; materialization cross-field relation covered by producer instruction + CR-07-06.

---

## E. Contract inventory

| Surface | Semantics |
|---------|-----------|
| Top-level `analysis.requestedOperation` | Free-form / legacy gate tokens + materialization technical ID when applicable |
| `executionIntent.requestedOperation` | Technical operation ID (schema enum after CORR-09) |
| `F2_ARTIFACT_MATERIALIZATION_OPERATION` | `cursor.docs_write.apply` |
| `F2_ARTIFACT_MATERIALIZATION_CAPABILITIES` | `["cap:cursor.docs_write"]` |

**Chosen design:** Option A bounded on `executionIntent.requestedOperation` only (+ prompt requiring both surfaces = canonical ID for Artifact materialization). Option B dedicated field rejected as unnecessary. Global top-level narrowing rejected (breaks unrelated F2). Shared `f2CanonicalOperations.ts` avoids duplication/circular imports.

Rejected: `docs_write` alias acceptance; NL→canonical rewrite; substring matching; weakening hostile merge rejection.

---

## F. Implementation

### Files

1. `f2/f2CanonicalOperations.ts` — NEW
2. `f2/executionIntentSchema.ts` — schema enum + validator
3. `f2/activeCycleGovernedContinuation.ts` — re-export; strip unsourced affirmative reversibility on enrich
4. `f2/intentAnalysis.ts` — producer instruction alignment
5. `__tests__/…/corrProof09.materializationIntentContract.d0.test.ts` — NEW

### Full new constants module

```ts
/**
 * CORR-PROOF-09 — single source for F2 technical operation / capability IDs
 * used by Artifact materialization + executionIntent producer contract.
 *
 * TECHNICAL CAPABILITY ≠ EXECUTION AUTHORITY.
 */

/** Server-owned action for Artifact materialization (TECHNICAL ≠ AUTHORITY). */
export const F2_ARTIFACT_MATERIALIZATION_OPERATION =
  "cursor.docs_write.apply" as const;

/** Server-owned capability set for Artifact materialization. */
export const F2_ARTIFACT_MATERIALIZATION_CAPABILITIES = [
  "cap:cursor.docs_write",
] as const;

/**
 * Allowed non-null values for executionIntent.requestedOperation in the
 * OpenAI Structured Outputs producer contract (strict enum).
 * Free-form / NL descriptions are rejected at schema + validator.
 * Hostile IDs remain enumerable so server CR-07-06 can still fail-closed
 * when injected via Fake / direct DTO (not silently rewritten).
 */
export const F2_EXECUTION_INTENT_REQUESTED_OPERATION_IDS = [
  F2_ARTIFACT_MATERIALIZATION_OPERATION,
  "github.pr.merge",
] as const;

export type F2ExecutionIntentRequestedOperationId =
  (typeof F2_EXECUTION_INTENT_REQUESTED_OPERATION_IDS)[number];

export function isF2ExecutionIntentRequestedOperationId(
  value: string,
): value is F2ExecutionIntentRequestedOperationId {
  return (F2_EXECUTION_INTENT_REQUESTED_OPERATION_IDS as readonly string[]).includes(
    value,
  );
}
```

### Full unified diff (modified F2 files)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
index 9dee186f..3b4461d7 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
@@ -27,16 +27,17 @@ import type { ProjectRepositoryBinding } from "@/lib/oa/project";
 import type { ProjectAssistantContextDto } from "../types";
 import { classifyHumanDecisionLifecycle } from "./studioCognitiveContext";
 import type { ExecutionIntentPayload } from "./executionIntentSchema";
+import {
+  F2_ARTIFACT_MATERIALIZATION_CAPABILITIES,
+  F2_ARTIFACT_MATERIALIZATION_OPERATION,
+} from "./f2CanonicalOperations";
 import type { F2ContinuationKind, IntentAnalysisDto } from "./types";

-/** Server-owned action for this Artifact materialization seam (TECHNICAL ≠ AUTHORITY). */
-export const F2_ARTIFACT_MATERIALIZATION_OPERATION =
-  "cursor.docs_write.apply" as const;
-
-/** Server-owned capability set for this Artifact materialization seam. */
-export const F2_ARTIFACT_MATERIALIZATION_CAPABILITIES = [
-  "cap:cursor.docs_write",
-] as const;
+/** Re-export canonical constants (single source: f2CanonicalOperations). */
+export {
+  F2_ARTIFACT_MATERIALIZATION_CAPABILITIES,
+  F2_ARTIFACT_MATERIALIZATION_OPERATION,
+};

 /** Minimal OA surface for continuation resolution — avoids V2 runtime barrel import. */
 export type ActiveCycleContinuationOa = {
@@ -419,24 +420,19 @@ export function enrichExecutionIntentFromBinding(input: {
     intentKind: input.analysisIntent?.intentKind ?? "docs_write",
   };

-  // CR-07-03 — preserve sourced reversibility only; never invent "reversible".
-  const reversibilityExpectation =
-    base.reversibilityExpectation === "reversible" ||
-    base.reversibilityExpectation === "irreversible" ||
-    base.reversibilityExpectation === "unknown"
-      ? base.reversibilityExpectation
-      : base.reversibilityExpectation === null
-        ? null
-        : undefined;
+  // CORR-PROOF-09 — unsourced affirmative reversibility is never trusted fact
+  // on the Artifact materialization enrich path. Preserve null/unknown only;
+  // never invent "reversible". Provider "reversible"|"irreversible" → null.
+  const rawRev = base.reversibilityExpectation;
+  const reversibilityExpectation: "unknown" | null =
+    rawRev === "unknown" ? "unknown" : null;

   if (!input.binding) {
     return {
       executionIntent: withCanonicalArtifactMaterializationAction({
         ...base,
         targetRepositoryRef: null,
-        ...(reversibilityExpectation !== undefined
-          ? { reversibilityExpectation }
-          : { reversibilityExpectation: null }),
+        reversibilityExpectation,
         scopeIn: [],
       }),
       needsTargetClarification: true,
@@ -454,9 +450,7 @@ export function enrichExecutionIntentFromBinding(input: {
         targetRepositoryRef: input.binding.identity,
         targetPath: null,
         scopeIn: [],
-        ...(reversibilityExpectation !== undefined
-          ? { reversibilityExpectation }
-          : { reversibilityExpectation: null }),
+        reversibilityExpectation,
       }),
       needsTargetClarification: true,
     };
@@ -492,14 +486,9 @@ export function enrichExecutionIntentFromBinding(input: {
     targetRepositoryRef: input.binding.identity,
     targetPath,
     scopeIn: effectiveScopeIn,
+    reversibilityExpectation,
   });

-  if (reversibilityExpectation !== undefined) {
-    out.reversibilityExpectation = reversibilityExpectation;
-  } else {
-    out.reversibilityExpectation = null;
-  }
-
   return {
     executionIntent: out,
     needsTargetClarification: needsClarification,
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts b/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
index d0d6ccd8..bfd09a5d 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
@@ -2,8 +2,16 @@
  * F2 — SFIA-specific execution-intent json_schema fragment (GCEC).
  * NON-AUTHORITATIVE structured intent for Nora — no REAL calls.
  * Fields align with DecisionBasis.executionBasis GCEC additives.
+ *
+ * CORR-PROOF-09 — executionIntent.requestedOperation is a technical operation ID
+ * (strict enum | null), never natural-language description.
  */

+import {
+  F2_EXECUTION_INTENT_REQUESTED_OPERATION_IDS,
+  isF2ExecutionIntentRequestedOperationId,
+} from "./f2CanonicalOperations";
+
 export const F2_EXECUTION_INTENT_SCHEMA_NAME =
   "f2_execution_intent_gcec" as const;

@@ -17,6 +25,17 @@ const STRING_ARRAY = {
   maxItems: 32,
 } as const;

+/** Technical operation ID for executionIntent.requestedOperation (OpenAI strict). */
+const NULLABLE_TECHNICAL_OPERATION = {
+  anyOf: [
+    {
+      type: "string",
+      enum: [...F2_EXECUTION_INTENT_REQUESTED_OPERATION_IDS],
+    },
+    { type: "null" },
+  ],
+} as const;
+
 /** OpenAI-style strict json_schema fragment for structured execution intent. */
 export const F2_EXECUTION_INTENT_JSON_SCHEMA: Record<string, unknown> = {
   type: "object",
@@ -37,7 +56,7 @@ export const F2_EXECUTION_INTENT_JSON_SCHEMA: Record<string, unknown> = {
     requiredCapabilities: STRING_ARRAY,
     validationExpectations: STRING_ARRAY,
     evidenceRequirements: STRING_ARRAY,
-    requestedOperation: NULLABLE_STRING,
+    requestedOperation: NULLABLE_TECHNICAL_OPERATION,
     reversibilityExpectation: {
       anyOf: [
         {
@@ -184,6 +203,22 @@ export function validateExecutionIntentPayload(
     return { ok: false, reason: "exit_requirement_kinds_invalid" };
   }

+  // CORR-PROOF-09 — technical operation ID only (no NL / alias free-text).
+  let requestedOperation: string | null = null;
+  if (r.requestedOperation !== undefined && r.requestedOperation !== null) {
+    if (typeof r.requestedOperation !== "string") {
+      return { ok: false, reason: "requested_operation_invalid" };
+    }
+    const op = r.requestedOperation.trim();
+    if (op.length === 0) {
+      requestedOperation = null;
+    } else if (!isF2ExecutionIntentRequestedOperationId(op)) {
+      return { ok: false, reason: "requested_operation_not_technical_id" };
+    } else {
+      requestedOperation = op;
+    }
+  }
+
   return {
     ok: true,
     payload: {
@@ -197,7 +232,7 @@ export function validateExecutionIntentPayload(
       requiredCapabilities: requiredCapabilities ?? [],
       validationExpectations: validationExpectations ?? [],
       evidenceRequirements: evidenceRequirements ?? [],
-      requestedOperation: asNullableString(r.requestedOperation) ?? null,
+      requestedOperation,
       reversibilityExpectation:
         (reversibility as ExecutionIntentPayload["reversibilityExpectation"]) ??
         null,
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index 798cfad3..b7141cf4 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -433,8 +433,8 @@ cognitiveWorkload ({ambiguity,reasoningDepth,sourceBreadth,toolDependency,contra
 contradictionCandidate (objet candidat cognitif OU null — PAS Evidence, PAS evidence_backed, PAS Cognitive STOP),
 challengeResponseAssessment (sufficient|insufficient|unknown|null — INTERNAL MW5 seulement ; PAS Truth C, PAS Evidence, PAS HumanDecision, PAS autorité ; missing/unknown/insufficient = fail-closed),
 objective, scope, rephrasedRequest, outOfScope[], risks[], reservations[], stopConditions[], activatedBlocks[],
-expectedOutcome, criticalJustification, requestedOperation (strings ou null pour les scalaires),
-executionIntent (objet structuré docs_write/read_only NON-AUTORITAIRE OU null — intention d'exécution proposée, JAMAIS une grant REAL / HumanDecision / autorité ; champs incluant artifactBrief, contentRequirements, targetPath, evidenceRequirements).
+expectedOutcome, criticalJustification, requestedOperation (ID technique d'opération OU null — JAMAIS une description en langage naturel ; pour matérialisation Artifact active-cycle utiliser EXACTEMENT « cursor.docs_write.apply »),
+executionIntent (objet structuré docs_write/read_only NON-AUTORITAIRE OU null — intention d'exécution proposée, JAMAIS une grant REAL / HumanDecision / autorité ; executionIntent.requestedOperation = ID technique enuméré OU null, JAMAIS du texte libre ; champs incluant artifactBrief, contentRequirements, targetPath, evidenceRequirements).
 continuationKind (active_cycle_artifact_materialization OU null — hint NON-AUTORITAIRE de continuation du cycle actif ; JAMAIS une permission createCycle/skip ; le serveur valide contre activeCycle + REQUIRE_ARTIFACT).

 === DISTINCTION FONDAMENTALE ===
@@ -573,15 +573,20 @@ Règles dures :
 - Ne pas reclasser en ambiguous uniquement parce que la phrase courante est incomplète si le contexte canonique la rend compréhensible.
 - Ne pas créer de CycleInstance / actionable par défaut pour une simple conversation informative progressive.

-=== CONTINUATION CYCLE ACTIF (CORR-PROOF-07) ===
+=== CONTINUATION CYCLE ACTIF (CORR-PROOF-07 / CORR-PROOF-09) ===
 NEW_CYCLE_FORMALIZATION ≠ ACTIVE_CYCLE_GOVERNED_CONTINUATION ≠ ACTIVE_CYCLE_CONTINUATION_BLOCKED.
 Si le Project a déjà un cycle actif et que la demande porte sur la matérialisation gouvernée du livrable requis (REQUIRE_ARTIFACT) de CE cycle :
 - continuationKind=active_cycle_artifact_materialization EST REQUIS (hint NON-AUTORITAIRE) ;
-- ET executionIntent.intentKind=docs_write (ou opération docs_write compatible) EST REQUIS ;
+- ET executionIntent.intentKind=docs_write EST REQUIS ;
 - docs_write SEUL ne suffit JAMAIS à détourner vers la continuation Artifact ;
 - continuationKind SEUL ne suffit JAMAIS à ouvrir une proposition exécutable ;
 - NE PAS traiter cela comme création d'un nouveau CycleInstance / nouveau Cadrage ;
-- ne jamais inventer targetPath / repository / réversibilité comme faits ;
+- CONTRAT TECHNIQUE (CORR-PROOF-09) — distinction sémantique vs ID technique :
+  * requestedOperation (top-level) ET executionIntent.requestedOperation DOIVENT tous deux être EXACTEMENT l'ID technique « cursor.docs_write.apply » (pas de paraphrase, pas de français, pas d'alias « docs_write ») ;
+  * si des requiredCapabilities sont fournies pour ce chemin → utiliser EXACTEMENT « cap:cursor.docs_write » (le serveur reste autoritaire après acceptation) ;
+  * la description naturelle du livrable va dans objective / rephrasedRequest / artifactBrief / contentRequirements — JAMAIS dans requestedOperation ;
+  * targetPath / targetRepositoryRef PEUVENT rester null (le serveur utilise Project.repositoryBinding) — ne PAS inventer de chemin ;
+  * reversibilityExpectation pour cette continuation : null ou unknown seulement — NE PAS affirmer reversible/irreversible sans provenance serveur ;
 - définition seule du livrable (sans effet de matérialisation) → informative, continuationKind=null.
 Aucune phrase magique exacte n'autorise seule cette continuation.`;
```

### Unchanged CR-07-06 invariants

continuationKind required; docs_write effect required; contradictory ops rejected; github.pr.merge rejected for materialization; provider capabilities overwritten after accept; repository binding server-owned; traversal rejected; missing target → clarification; no REQUIRE_ARTIFACT → block; assess failure → block; no createCycle on recognized continuation failure.

---

## G. Deterministic evidence

| Suite | Result |
|------|--------|
| CORR-09 focused | 13 passed |
| CORR-07 regression | 32 passed |
| `__tests__/project-assistant/` | 740 passed |
| typecheck / lint / build | PASS |
| Full Vitest | **3981 passed / 137 skipped** |

---

## H. LIVE setup

| Item | Value |
|------|--------|
| Candidate cwd | CORR-09 candidate app |
| Port | 3020 (exclusive writer) |
| Product DB | workspace via symlink + env |
| Session DB | symlink → dogfood nora-session.sqlite |
| Pre-LIVE max seq | 17 |
| Pre-LIVE cycle count | 2 |

---

## I. LIVE proof — OUTCOME A

| Item | Observation |
|------|-------------|
| Manual sends | **1** — `Matérialise ce livrable.` |
| User seq | **18** |
| Assistant seq | **19** |
| Exact Nora response | `[LIVE] Continuation cycle actif — matérialisation du livrable requis. Cycle actif conservé: cyc:trj-0a9c5104b7b6a3debe95eb8d (active). Aucun nouveau CycleInstance créé. Le chemin cible du livrable n'est pas encore déterminé dans les bornes du repository lié — précisez targetPath. Décision Pilote / PREPARE non ouverts tant que la cible n'est pas clarifiée. Recommendation ≠ HumanDecision ≠ Execution — AUCUNE EXÉCUTION.` |
| Active cycle before | `cyc:trj-0a9c5104b7b6a3debe95eb8d` |
| Active cycle after | `cyc:trj-0a9c5104b7b6a3debe95eb8d` (active) |
| CycleInstance count | **2** unchanged (parasite `cyc:f2-7e5684ad5ffa42db` still acknowledged, not new) |
| incompatible_execution_intent | **ABSENT** (gate passed) |
| Proposal | **NO** (target clarification first) |
| HD count | **3** unchanged |
| EC count | **0** unchanged |
| Clarification / Proposal accept / HD | **NOT performed** (Morris) |
| Provider/technical error | none observed in candidate log |
| Outcome class | **A — SAME-CYCLE TARGET CLARIFICATION** |

Verdict class: **CORR-PROOF-09 LIVE CONTRACT ALIGNMENT PROVEN — SAME-CYCLE TARGET CLARIFICATION REACHED**

---

## J. Baseline restore

| Step | Result |
|------|--------|
| Candidate runtime stopped | yes |
| Dogfood restarted @ `84a36a8d…` on 3020 | yes |
| Dogfood Product tracked tree | clean (no candidate source) |
| Product DB continuity | same workspace DB |
| Session DB continuity | max seq **19** preserved (LIVE turn kept) |
| Candidate WT retained | yes, uncommitted, not deleted |

---

## K. Anti-claims

Not claimed: general Nora reliability; multi-run reproducibility; docs_write execution; EC execution; end-to-end Artifact materialization; Proposal creation on this turn; runtime v3 ADOPTED; permanent production merge.

---

## L. Reserves

- Cross-field OpenAI schema conditionals unsupported → instruction + server gate.
- Top-level `requestedOperation` remains free-form by design.
- `github.pr.merge` remains in enum for fail-closed injection tests.
- TargetPath still unresolved — expected Outcome A.

---

## M. Recommended next Morris decision (recommendation only)

1. ChatGPT Critical Review of this candidate.
2. If accepted: Morris GO for Product commit/PR of CORR-09 candidate.
3. Continue Product Proof: Morris supplies targetPath clarification (or binding already sufficient path) → same-cycle Proposal → stop again before HD unless a later GO authorizes Pilote decision.
4. Do not auto-start cognitive follow-up or second LIVE.

---

## Safety ledger

- Product commit/push/PR/merge: **ZERO**
- LIVE calls: **exactly ONE**
- New HD / EC / docs_write / REAL: **ZERO**
- Doctrine/Roadmap/C1: **ZERO**
- Runtime v3: **NON ADOPTED**

## Unique verdict

**CORR-PROOF-09 LOCAL CANDIDATE LIVE-PROVEN — SAME-CYCLE TARGET CLARIFICATION REACHED — READY FOR CHATGPT CRITICAL REVIEW**
