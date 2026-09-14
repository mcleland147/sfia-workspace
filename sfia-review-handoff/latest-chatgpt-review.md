# CORR-PROOF-09 — FULL Review Pack
## Product Integration — PR Readiness (Cycle 13)

**Campaign:** SFIA Studio Product Proof — Fresh Project Full Cycle
**Corrective unit:** CORR-PROOF-09 — Active-Cycle Materialization Intent Contract Alignment
**This run:** Post-merge verification / capitalization / closure (supersedes PR readiness as terminal verdict)
**Type / Profile:** EVOL / CRITICAL
**Cycle Knowledge:** PR readiness — detailed CKC absent — fallback routing + method v2.6
**Runtime v3:** NON ADOPTED
**Timestamp (UTC):** 2026-09-14T19:12:14Z

---

## A. Identity / Morris GO

Morris GO: CORR-PROOF-09 Product integration — commit + push + PR + CI + Review Handoff — **NO MERGE** until ChatGPT PR Critical Review.

Authorized: Git truth; smoke; Product commit; source push; PR create; CI observe; FULL Review Pack; L3 handoff.

NOT AUTHORIZED / not performed: merge; auto-merge; rebase; force-push; branch/worktree deletion; candidate source edit; CI repair commits; LIVE Nora; dogfood; targetPath/HD/PREPARE/docs_write; DB mutation; doctrine/Roadmap/C1; runtime v3 promotion.

---

## B. Root cause / accepted contract

CORR-PROOF-08 LIVE root cause: R2+R3 — free-form `requestedOperation` incompatible with CR-07-06 (`incompatible_execution_intent`).

Final accepted design (Critical-reviewed + FINAL LIVE Outcome A):

- **CR-09-01 CLOSED** — top-level `requestedOperation` remains generic/free-form outside Artifact continuation.
- **CR-09-02 CLOSED** — `executionIntent.requestedOperation` remains generic/free-form.
- **Option B** — dedicated `artifactMaterializationOperation` = `cursor.docs_write.apply` | null.
- Producer enum for dedicated field: **only** `cursor.docs_write.apply` (no `github.pr.merge`).
- Hostile contradictions via direct DTO/server tests.
- Unsourced affirmative reversibility stripped on Artifact enrich seam.
- CR-07-06 fail-closed preserved.
- `targetPath` null → clarification, never invented.

Artifact gate requires: `continuationKind=active_cycle_artifact_materialization` + `executionIntent.intentKind=docs_write` + `artifactMaterializationOperation=cursor.docs_write.apply` + non-contradictory generic surfaces.

---

## C. Git truth (pre-commit)

| Item | Value |
|------|--------|
| Worktree | `/Users/morris/Projects/sfia-studio-corr-proof-09-materialization-intent-contract` |
| Branch | `fix/sfia-studio-corr-proof-09-materialization-intent-contract` |
| Pre-commit HEAD / origin/main | `84a36a8d32f7b2632180d789e41521d6e769c681` |
| Prior FINAL LIVE handoff tip | `9a390a9bdbff146178af9ae65eb4038a8abb1a95` |
| Prior FINAL LIVE canonical blob | `0bdeca9d3a30e6b76bcc56a9362b4e501150abee` |

---

## D. Exact Product paths (8)

1. `projects/sfia-studio/app/features/project-assistant/f2/f2CanonicalOperations.ts` (new)
2. `projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts`
3. `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`
4. `projects/sfia-studio/app/features/project-assistant/f2/types.ts`
5. `projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts`
6. `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`
7. `projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts` (new)
8. `projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts`

Reserve: 8 files vs soft cap 7 — justified by dedicated field module + fixture/test alignment.

---

## E. Useful Product content

### `f2CanonicalOperations.ts` (full)

```ts
/**
 * CORR-PROOF-09 — single source for Artifact materialization technical IDs.
 * TECHNICAL CAPABILITY ≠ EXECUTION AUTHORITY.
 *
 * CR-09-02 remediation: do NOT expose a global executionIntent.requestedOperation
 * enum (especially hostile-only IDs) to the OpenAI producer contract.
 * The dedicated IntentAnalysis field carries the Artifact-only discriminator.
 */

/** Server-owned action for Artifact materialization (TECHNICAL ≠ AUTHORITY). */
export const F2_ARTIFACT_MATERIALIZATION_OPERATION =
  "cursor.docs_write.apply" as const;

/** Server-owned capability set for Artifact materialization. */
export const F2_ARTIFACT_MATERIALIZATION_CAPABILITIES = [
  "cap:cursor.docs_write",
] as const;

/**
 * OpenAI Structured Outputs allowlist for the dedicated Artifact field only.
 * Hostile ops (e.g. github.pr.merge) are NOT producer choices — inject via DTO.
 */
export const F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM = [
  F2_ARTIFACT_MATERIALIZATION_OPERATION,
] as const;

export type F2ArtifactMaterializationOperation =
  (typeof F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM)[number];

export function isF2ArtifactMaterializationOperation(
  value: string,
): value is F2ArtifactMaterializationOperation {
  return (
    F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM as readonly string[]
  ).includes(value);
}
```

### Unified diff (modified tracked files)

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
index ebf1879f..38538870 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
@@ -70,6 +70,7 @@ function materializationAnalysis(overrides?: {
   reversibilityExpectation?: "reversible" | "irreversible" | "unknown" | null;
   requestedOperation?: string | null;
   analysisRequestedOperation?: string | null;
+  artifactMaterializationOperation?: "cursor.docs_write.apply" | null;
 }) {
   const continuationKind =
     overrides && "continuationKind" in overrides
@@ -82,11 +83,17 @@ function materializationAnalysis(overrides?: {
   const defaultOp =
     overrides && "requestedOperation" in overrides
       ? overrides.requestedOperation
-      : "cursor.docs_write.apply";
+      : null;
   const analysisRequestedOperation =
     overrides && "analysisRequestedOperation" in overrides
       ? overrides.analysisRequestedOperation
       : defaultOp;
+  const artifactMaterializationOperation =
+    overrides && "artifactMaterializationOperation" in overrides
+      ? overrides.artifactMaterializationOperation
+      : continuationKind === "active_cycle_artifact_materialization"
+        ? "cursor.docs_write.apply"
+        : null;
   const executionIntent =
     overrides && "executionIntent" in overrides
       ? overrides.executionIntent
@@ -122,6 +129,7 @@ function materializationAnalysis(overrides?: {
     contradictionCandidate: null,
     challengeResponseAssessment: "sufficient",
     continuationKind,
+    artifactMaterializationOperation,
     objective: "matérialiser",
     scope: "docs",
     rephrasedRequest: "matérialiser",
@@ -858,6 +866,7 @@ describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation",
       contradictionCandidate: null,
       challengeResponseAssessment: null,
       continuationKind: null,
+      artifactMaterializationOperation: "cursor.docs_write.apply",
       objective: "écrire le livrable",
       scope: null,
       rephrasedRequest: "produire le document",
@@ -880,7 +889,7 @@ describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation",
         requiredCapabilities: [],
         validationExpectations: [],
         evidenceRequirements: [],
-        requestedOperation: "cursor.docs_write.apply",
+        requestedOperation: null,
         reversibilityExpectation: null,
         artifactBrief: null,
         contentRequirements: [],
@@ -902,6 +911,7 @@ describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation",
       contradictionCandidate: null,
       challengeResponseAssessment: null,
       continuationKind: "active_cycle_artifact_materialization",
+      artifactMaterializationOperation: null,
       objective: "matérialiser",
       scope: null,
       rephrasedRequest: "générer le livrable attendu",
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
index 9dee186f..cc09bca1 100644
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
@@ -172,6 +173,9 @@ export function isBlankOrCanonicalDocsWriteOperation(raw: unknown): boolean {

 /**
  * Compatible materialization effect (non-authoritative alone).
+ * CORR-PROOF-09 CR-09-02 — requires dedicated artifactMaterializationOperation
+ * === cursor.docs_write.apply. Generic requestedOperation surfaces stay free-form
+ * elsewhere but must be blank or exact-canonical here (contradiction → fail-closed).
  * CR-07-06 — intentKind=docs_write never overrides a contradictory requestedOperation.
  */
 export function hasCompatibleDocsWriteMaterializationEffect(
@@ -186,8 +190,17 @@ export function hasCompatibleDocsWriteMaterializationEffect(
   }
   const ei = analysis.executionIntent;
   if (!ei) return false;
+  if (ei.intentKind !== "docs_write") return false;
+
+  // Dedicated Artifact discriminator (producer-schema enum|null only).
+  if (
+    analysis.artifactMaterializationOperation !==
+    F2_ARTIFACT_MATERIALIZATION_OPERATION
+  ) {
+    return false;
+  }

-  // Fail-closed on contradictory ops at executionIntent OR analysis surface.
+  // Generic surfaces: blank/null OR exact canonical — never contradict.
   if (!isBlankOrCanonicalDocsWriteOperation(ei.requestedOperation)) {
     return false;
   }
@@ -195,9 +208,7 @@ export function hasCompatibleDocsWriteMaterializationEffect(
     return false;
   }

-  if (ei.intentKind === "docs_write") return true;
-  const op = (ei.requestedOperation ?? analysis.requestedOperation ?? "").trim();
-  return op === F2_ARTIFACT_MATERIALIZATION_OPERATION;
+  return true;
 }

 /**
@@ -419,24 +430,19 @@ export function enrichExecutionIntentFromBinding(input: {
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
@@ -454,9 +460,7 @@ export function enrichExecutionIntentFromBinding(input: {
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
@@ -492,14 +496,9 @@ export function enrichExecutionIntentFromBinding(input: {
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
index d0d6ccd8..dab3a06c 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
@@ -2,6 +2,11 @@
  * F2 — SFIA-specific execution-intent json_schema fragment (GCEC).
  * NON-AUTHORITATIVE structured intent for Nora — no REAL calls.
  * Fields align with DecisionBasis.executionBasis GCEC additives.
+ *
+ * CORR-PROOF-09 CR-09-02 remediation:
+ * executionIntent.requestedOperation remains a generic free-form/nullable string
+ * (GCEC fragment used beyond Artifact continuation). Canonical Artifact
+ * discrimination lives on IntentAnalysis.artifactMaterializationOperation.
  */

 export const F2_EXECUTION_INTENT_SCHEMA_NAME =
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index 798cfad3..075ee19b 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -33,6 +33,11 @@ import {
   type ExecutionIntentPayload,
 } from "./executionIntentSchema";
 import { parseContinuationKind } from "./activeCycleGovernedContinuation";
+import {
+  F2_ARTIFACT_MATERIALIZATION_OPERATION,
+  F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM,
+  isF2ArtifactMaterializationOperation,
+} from "./f2CanonicalOperations";

 const INTENT_CLASSES: readonly IntentClass[] = [
   "informative",
@@ -196,6 +201,15 @@ export const F2_INTENT_JSON_SCHEMA: Record<string, unknown> = {
         { type: "null" },
       ],
     },
+    artifactMaterializationOperation: {
+      anyOf: [
+        {
+          type: "string",
+          enum: [...F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM],
+        },
+        { type: "null" },
+      ],
+    },
   },
   required: [
     "intentClass",
@@ -217,6 +231,7 @@ export const F2_INTENT_JSON_SCHEMA: Record<string, unknown> = {
     "requestedOperation",
     "executionIntent",
     "continuationKind",
+    "artifactMaterializationOperation",
   ],
 };

@@ -258,6 +273,8 @@ function ambiguousFallback(partial?: Partial<IntentAnalysisDto>): IntentAnalysis
     requestedOperation: partial?.requestedOperation ?? null,
     executionIntent: partial?.executionIntent ?? null,
     continuationKind: partial?.continuationKind ?? null,
+    artifactMaterializationOperation:
+      partial?.artifactMaterializationOperation ?? null,
     contradictionCandidate: null,
     challengeResponseAssessment:
       partial?.challengeResponseAssessment ?? null,
@@ -392,6 +409,34 @@ export function validateIntentAnalysisPayload(raw: unknown): IntentAnalysisDto {
     } as Partial<IntentAnalysisDto>);
   }

+  // CORR-PROOF-09 — dedicated Artifact operation discriminator (enum|null).
+  // Absent → null. Invalid non-null → fail closed.
+  let artifactMaterializationOperation:
+    | typeof F2_ARTIFACT_MATERIALIZATION_OPERATION
+    | null = null;
+  if (
+    "artifactMaterializationOperation" in obj &&
+    obj.artifactMaterializationOperation != null
+  ) {
+    if (typeof obj.artifactMaterializationOperation !== "string") {
+      return ambiguousFallback({
+        intentClass: intentClass as IntentClass,
+        parseOk: false,
+      } as Partial<IntentAnalysisDto>);
+    }
+    const rawOp = obj.artifactMaterializationOperation.trim();
+    if (rawOp.length === 0) {
+      artifactMaterializationOperation = null;
+    } else if (!isF2ArtifactMaterializationOperation(rawOp)) {
+      return ambiguousFallback({
+        intentClass: intentClass as IntentClass,
+        parseOk: false,
+      } as Partial<IntentAnalysisDto>);
+    } else {
+      artifactMaterializationOperation = rawOp;
+    }
+  }
+
   return {
     intentClass: intentClass as IntentClass,
     candidateCycleTypeId,
@@ -412,6 +457,7 @@ export function validateIntentAnalysisPayload(raw: unknown): IntentAnalysisDto {
     requestedOperation: clip(obj.requestedOperation, 240),
     executionIntent,
     continuationKind: continuationParsed.value,
+    artifactMaterializationOperation,
     parseOk: true,
   };
 }
@@ -433,9 +479,10 @@ cognitiveWorkload ({ambiguity,reasoningDepth,sourceBreadth,toolDependency,contra
 contradictionCandidate (objet candidat cognitif OU null — PAS Evidence, PAS evidence_backed, PAS Cognitive STOP),
 challengeResponseAssessment (sufficient|insufficient|unknown|null — INTERNAL MW5 seulement ; PAS Truth C, PAS Evidence, PAS HumanDecision, PAS autorité ; missing/unknown/insufficient = fail-closed),
 objective, scope, rephrasedRequest, outOfScope[], risks[], reservations[], stopConditions[], activatedBlocks[],
-expectedOutcome, criticalJustification, requestedOperation (strings ou null pour les scalaires),
-executionIntent (objet structuré docs_write/read_only NON-AUTORITAIRE OU null — intention d'exécution proposée, JAMAIS une grant REAL / HumanDecision / autorité ; champs incluant artifactBrief, contentRequirements, targetPath, evidenceRequirements).
+expectedOutcome, criticalJustification, requestedOperation (string libre / legacy OU null — PAS un ID technique obligatoire hors matérialisation Artifact),
+executionIntent (objet structuré docs_write/read_only/other NON-AUTORITAIRE OU null — intention d'exécution proposée, JAMAIS une grant REAL / HumanDecision / autorité ; executionIntent.requestedOperation reste générique/nullable ; champs incluant artifactBrief, contentRequirements, targetPath, evidenceRequirements).
 continuationKind (active_cycle_artifact_materialization OU null — hint NON-AUTORITAIRE de continuation du cycle actif ; JAMAIS une permission createCycle/skip ; le serveur valide contre activeCycle + REQUIRE_ARTIFACT).
+artifactMaterializationOperation (cursor.docs_write.apply OU null — discriminateur TECHNIQUE dédié à la matérialisation Artifact active-cycle ; JAMAIS du texte libre ; JAMAIS une autorité d'exécution).

 === DISTINCTION FONDAMENTALE ===
 intentClass = EFFET demandé à Studio (quoi faire sur le produit).
@@ -573,16 +620,24 @@ Règles dures :
 - Ne pas reclasser en ambiguous uniquement parce que la phrase courante est incomplète si le contexte canonique la rend compréhensible.
 - Ne pas créer de CycleInstance / actionable par défaut pour une simple conversation informative progressive.

-=== CONTINUATION CYCLE ACTIF (CORR-PROOF-07) ===
+=== CONTINUATION CYCLE ACTIF (CORR-PROOF-07 / CORR-PROOF-09) ===
 NEW_CYCLE_FORMALIZATION ≠ ACTIVE_CYCLE_GOVERNED_CONTINUATION ≠ ACTIVE_CYCLE_CONTINUATION_BLOCKED.
 Si le Project a déjà un cycle actif et que la demande porte sur la matérialisation gouvernée du livrable requis (REQUIRE_ARTIFACT) de CE cycle :
 - continuationKind=active_cycle_artifact_materialization EST REQUIS (hint NON-AUTORITAIRE) ;
-- ET executionIntent.intentKind=docs_write (ou opération docs_write compatible) EST REQUIS ;
+- ET executionIntent.intentKind=docs_write EST REQUIS ;
+- ET artifactMaterializationOperation=cursor.docs_write.apply EST REQUIS (discriminateur technique dédié) ;
 - docs_write SEUL ne suffit JAMAIS à détourner vers la continuation Artifact ;
 - continuationKind SEUL ne suffit JAMAIS à ouvrir une proposition exécutable ;
 - NE PAS traiter cela comme création d'un nouveau CycleInstance / nouveau Cadrage ;
-- ne jamais inventer targetPath / repository / réversibilité comme faits ;
-- définition seule du livrable (sans effet de matérialisation) → informative, continuationKind=null.
+- CONTRAT TECHNIQUE (CORR-PROOF-09 CR-09-01/02) :
+  * artifactMaterializationOperation DOIT être EXACTEMENT « cursor.docs_write.apply » (pas d'alias « docs_write », pas de français, pas d'autre opération) ;
+  * hors de ce chemin Artifact, artifactMaterializationOperation=null ;
+  * requestedOperation (top-level) ET executionIntent.requestedOperation restent génériques ailleurs ; pour CETTE continuation Artifact, les laisser null (préféré) ou exactement cursor.docs_write.apply — JAMAIS une valeur contradictoire (ex. github.pr.merge) ;
+  * si des requiredCapabilities sont fournies pour ce chemin → « cap:cursor.docs_write » (le serveur reste autoritaire après acceptation) ;
+  * la description naturelle du livrable va dans objective / rephrasedRequest / artifactBrief / contentRequirements — JAMAIS dans artifactMaterializationOperation ;
+  * targetPath / targetRepositoryRef PEUVENT rester null (le serveur utilise Project.repositoryBinding) — ne PAS inventer de chemin ;
+  * reversibilityExpectation pour cette continuation : null ou unknown seulement — NE PAS affirmer reversible/irreversible sans provenance serveur ;
+- définition seule du livrable (sans effet de matérialisation) → informative, continuationKind=null, artifactMaterializationOperation=null.
 Aucune phrase magique exacte n'autorise seule cette continuation.`;

 export const ANALYSIS_SYSTEM = ANALYSIS_SYSTEM_BASE;
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/types.ts b/projects/sfia-studio/app/features/project-assistant/f2/types.ts
index ca178450..1801284e 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/types.ts
@@ -206,6 +206,14 @@ export type IntentAnalysisDto = {
    * Absent/undefined treated as null by routing (fail-closed).
    */
   continuationKind?: F2ContinuationKind;
+  /**
+   * CORR-PROOF-09 — dedicated NON-AUTHORITATIVE Artifact materialization
+   * technical operation discriminator. Schema: cursor.docs_write.apply | null.
+   * Never free-form; never execution authority.
+   */
+  artifactMaterializationOperation?:
+    | "cursor.docs_write.apply"
+    | null;
   parseOk: boolean;
 };

diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 39418d26..88462d68 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -723,6 +723,7 @@ export class FakeConversationProvider implements ConversationProvider {
           contradictionCandidate: null,
           challengeResponseAssessment: "sufficient",
           continuationKind: "active_cycle_artifact_materialization",
+          artifactMaterializationOperation: null,
           objective: "Matérialiser le livrable requis du cycle actif",
           scope: "docs_write borné — cycle actif — aucune exécution automatique",
           rephrasedRequest: "Matérialisation gouvernée du livrable requis",
@@ -787,6 +788,7 @@ export class FakeConversationProvider implements ConversationProvider {
           contradictionCandidate: null,
           challengeResponseAssessment,
           continuationKind: "active_cycle_artifact_materialization",
+          artifactMaterializationOperation: "cursor.docs_write.apply",
           objective: "Matérialiser le livrable requis du cycle actif",
           scope: "docs_write borné — cycle actif — aucune exécution automatique",
           rephrasedRequest: "Matérialisation gouvernée du livrable requis",
@@ -797,7 +799,7 @@ export class FakeConversationProvider implements ConversationProvider {
           activatedBlocks: ["proposition", "gate"],
           expectedOutcome: "Proposition de matérialisation liée au cycle actif",
           criticalJustification: null,
-          requestedOperation: "cursor.docs_write.apply",
+          requestedOperation: null,
           executionIntent: {
             intentKind: "docs_write",
             artifactType: "deliverable_document",
@@ -809,7 +811,7 @@ export class FakeConversationProvider implements ConversationProvider {
             requiredCapabilities: ["cap:cursor.docs_write"],
             validationExpectations: [],
             evidenceRequirements: [],
-            requestedOperation: "cursor.docs_write.apply",
+            requestedOperation: null,
             reversibilityExpectation: null,
             artifactBrief: "Livrable requis du cycle actif",
             contentRequirements: ["Contenu défini avec Nora"],
```

### New test file

`corrProof09.materializationIntentContract.d0.test.ts` — CR-09-01/02 coverage (generic free-form, dedicated enum, hostile DTO fail-closed, enrich/reversibility, Ajv schema). Present in Product commit as new file (407 lines).

---

## F. Deterministic evidence (final candidate)

| Suite | Result |
|------|--------|
| CORR-09 | 15 PASS |
| CORR-07 | 32 PASS |
| project-assistant | 742 PASS |
| Full Vitest | 3983 PASS / 137 skipped |
| typecheck / lint / build | PASS |
| Pre-integration smoke | CORR-09 15 + CORR-07 32 + typecheck PASS + `git diff --check` PASS |

ZERO additional LIVE during integration.

---

## G. FINAL LIVE evidence (preserved)

| Item | Value |
|------|--------|
| Manual sends | exactly 1 |
| User text | `Matérialise ce livrable.` |
| User/assistant seq | 20 / 21 |
| Nora | same-cycle continuation; précisez targetPath; no incompatible_execution_intent |
| Active cycle | `cyc:trj-0a9c5104b7b6a3debe95eb8d` unchanged |
| CycleInstance | 2 → 2 |
| Proposal / HD / EC | none new / 3→3 / 0→0 |
| Outcome | **A — SAME-CYCLE TARGET CLARIFICATION** |

Proof classification:
**DETERMINISTIC PROVEN + REAL BOUNDARY PROVEN AT TESTED SINGLE-TURN SCOPE**

---

## H. Anti-claims

Not claimed: end-to-end Artifact; docs_write REAL; HD/EC proof; general Nora reliability; runtime v3 ADOPTED; CI green ≠ functional expansion; PR open ≠ merge authorization.

---

## I. INTEGRATION (filled during this run)

### Pre-commit

| Item | Value |
|------|--------|
| Morris GO | commit + push + PR + CI + handoff — NO MERGE |
| origin/main before commit | `84a36a8d32f7b2632180d789e41521d6e769c681` |
| Staged paths | exactly the 8 Product paths above |
| Product commit subject | `fix(sfia-studio): align artifact materialization intent contract` |

### Commit / push / PR / CI

*(Updated immediately after each step — placeholders replaced by Cursor during integration.)*

### Commit / push / PR / CI

| Item | Value |
|------|--------|
| Timestamp (UTC) | 2026-09-14T19:18:50Z |
| Morris GO | GO CORR-PROOF-09 Product integration — commit + push + PR + CI + Review Handoff — NO MERGE until ChatGPT PR Critical Review |
| current main/base | `84a36a8d32f7b2632180d789e41521d6e769c681` |
| candidate branch | `fix/sfia-studio-corr-proof-09-materialization-intent-contract` |
| pre-commit HEAD | `84a36a8d32f7b2632180d789e41521d6e769c681` |
| exact staged paths | 8 Product paths listed in section D |
| Product commit SHA | `85b1443ecbd7d1998795d18749267106e33c901d` |
| Product commit parent | `84a36a8d32f7b2632180d789e41521d6e769c681` |
| Product commit subject | `fix(sfia-studio): align artifact materialization intent contract` |
| exact commit files | 8 Product paths (A×2 + M×6) |
| remote source branch SHA | `85b1443ecbd7d1998795d18749267106e33c901d` |
| PR number | 485 |
| PR URL | https://github.com/mcleland147/sfia-workspace/pull/485 |
| PR title | fix(sfia-studio): align artifact materialization intent contract |
| PR base ref/SHA | `main` / `84a36a8d32f7b2632180d789e41521d6e769c681` |
| PR head ref/SHA | `fix/sfia-studio-corr-proof-09-materialization-intent-contract` / `85b1443ecbd7d1998795d18749267106e33c901d` |
| exact changed files | same 8 Product paths |
| CI workflow run | `34885511776` (SFIA Studio CI) — conclusion **success** |
| CI jobs | Detect `104115072068` PASS; Build/validate `104115114233` PASS (typecheck/lint/build/vitest); Required Gate `104116900313` PASS |
| Required Gate | **PASS** |
| origin/main after CI | `84a36a8d32f7b2632180d789e41521d6e769c681` (no base drift) |
| proof classification preserved | DETERMINISTIC PROVEN + REAL BOUNDARY PROVEN AT TESTED SINGLE-TURN SCOPE |
| FINAL LIVE evidence preserved | Outcome A — single-turn targetPath clarification |
| ZERO additional LIVE during integration | confirmed |
| ZERO dogfood interaction | confirmed |
| ZERO DB/session mutation | confirmed |
| merge NOT AUTHORIZED | confirmed |
| merge NOT performed | confirmed |
| source branch preserved | confirmed |
| runtime v3 | NON ADOPTED |
| reserves remaining | 8-file soft-cap reserve; cross-field relation = instruction + server fail-closed; not E2E/docs_write/HD/EC |
| phase verdict | **CORR-PROOF-09 PR READY — CI GREEN — READY FOR CHATGPT PR CRITICAL REVIEW — NO MERGE** |

---

## J. Safety ledger

- Additional source edits during integration: ZERO
- Product commit: EXACTLY ONE
- Source push: authorized branch only
- PR: EXACTLY ONE
- Merge / auto-merge: ZERO
- LIVE / dogfood / DB: ZERO
- Runtime v3: NON ADOPTED


---

## K. POST-MERGE VERIFICATION / CLOSURE

| Item | Value |
|------|--------|
| Timestamp (UTC) | 2026-09-14T19:43:10Z |
| Morris GO | CORR-PROOF-09 post-merge capitalization / Review Handoff closure — Review Pack + Handoff only; ZERO Product mutation; ZERO dogfood/Nora |
| Typology / Profile | RUN / DOC — STANDARD |
| PR #485 | **MERGED** |
| mergedAt | 2026-09-14T19:27:34Z |
| merge SHA | `93ac1aea1af6b2094c158c5068bec1602d863ca7` |
| P1 old main | `84a36a8d32f7b2632180d789e41521d6e769c681` |
| P2 Product commit | `85b1443ecbd7d1998795d18749267106e33c901d` |
| current origin/main | `93ac1aea1af6b2094c158c5068bec1602d863ca7` |
| source branch | `fix/sfia-studio-corr-proof-09-materialization-intent-contract` @ `85b1443e…` — **preserved** |
| Product commit ancestor of merge | YES (exit 0) |
| accepted Product tree SHA | `a4238963b2ac0c240e25b833aa8ac2c4395b9255` |
| merge tree SHA | `a4238963b2ac0c240e25b833aa8ac2c4395b9255` |
| tree equality | **exact match** |
| 8-path head→merge delta | **ZERO** |
| post-merge CI run | `34887015384` — event `push` — head `93ac1aea…` — branch `main` — status completed — conclusion **success** |
| Detect job | `104120054087` — success |
| Build/validate job | `104120094498` — success (Typecheck / Lint / Build / Unit tests Vitest) |
| Required Gate | `104121816520` — **PASS** |
| ZERO additional Product source change | confirmed |
| ZERO additional LIVE | confirmed |
| ZERO dogfood interaction | confirmed |
| ZERO Product/Session DB mutation | confirmed |
| ZERO HD/EC/docs_write | confirmed |
| proof classification | **unchanged** — DETERMINISTIC PROVEN + REAL BOUNDARY PROVEN AT TESTED SINGLE-TURN SCOPE |
| anti-claims | unchanged — not E2E Artifact; not docs_write REAL; not HD/EC; not Nora reliability; not runtime v3 ADOPTED; not global L5; not autonomous merge authority |
| reserves preserved | (1) irreversible→null deterministic coverage useful later; (2) 8 files vs soft cap 7 accepted; (3) cross-field = OpenAI contract + instruction + server fail-closed |
| runtime v3 | NON ADOPTED |
| next Product Proof continuation | requires a **distinct Morris gate** — do not refresh dogfood / resume targetPath under this closure |
| final closure verdict | **CORR-PROOF-09 CLOSED — MERGED / POST-MERGE VERIFIED** |

Note: prior PR Readiness verdict (`CORR-PROOF-09 PR READY — CI GREEN — READY FOR CHATGPT PR CRITICAL REVIEW — NO MERGE`) is historical integration evidence only and is **superseded** by this post-merge closure verdict.

## Unique verdict

CORR-PROOF-09 CLOSED — MERGED / POST-MERGE VERIFIED
