# CORR-PROOF-09 — FULL Review Pack
## Critical Review Remediation (CR-09-01 + CR-09-02)

**Campaign:** SFIA Studio Product Proof — Fresh Project Full Cycle
**Corrective unit:** CORR-PROOF-09 — Active-Cycle Materialization Intent Contract Alignment
**This run:** CORR-PROOF-09 Critical Review Remediation
**Type / Profile:** Delivery / EVOL / CRITICAL
**Runtime v3:** NON ADOPTED
**Base / candidate HEAD:** `84a36a8d32f7b2632180d789e41521d6e769c681`
**Candidate:** `/Users/morris/Projects/sfia-studio-corr-proof-09-materialization-intent-contract` @ `fix/sfia-studio-corr-proof-09-materialization-intent-contract`
**Product Git integration:** NOT AUTHORIZED (LOCAL MODIFIED / UNCOMMITTED)

---

## A. Identity

Same CORR-PROOF-09 unit. Do not open CORR-PROOF-10.

## B. Morris remediation GO

GO pour correction des blockers CR-09-01 et CR-09-02 du candidat CORR-PROOF-09.

Authorized: continue existing candidate; CR-09-01; CR-09-02; deterministic tests; typecheck/lint/build/full Vitest; FULL Review Pack; L3 handoff.

NOT AUTHORIZED / not performed: OpenAI LIVE; Nora LIVE; dogfood mutation; DB/session mutation; Product commit/push/PR/merge; model switch; second classifier; NL server normalization; weakening CR-07-06; HD/PREPARE/execution; runtime v3 promotion.

## C. Git truth

| Item | Value |
|------|--------|
| origin/main | `84a36a8d…` |
| Candidate HEAD | `84a36a8d…` |
| Prior uncommitted CORR-09 | retained and remediating (no reset/stash) |
| LIVE in this run | **ZERO** |

## D. CR-09-01 original finding

Global rewrite of top-level `analysis.requestedOperation` as "technical operation ID only / never NL" contradicted F2 legacy free-form use (`architecture change`, `create pr`, `cursor create pr`) and risked regressing unrelated LIVE F2 cognition.

## E. CR-09-01 exact correction — CLOSED

- Restored GENERAL producer instruction: top-level `requestedOperation` = free-form/legacy string OR null.
- Artifact-only rule now requires dedicated `artifactMaterializationOperation=cursor.docs_write.apply` (preferred: generic surfaces null).
- No global technical-ID obligation on top-level.

## F. CR-09-02 original finding

Global enum on `executionIntent.requestedOperation` = {cursor.docs_write.apply, github.pr.merge} polluted the OpenAI producer contract with a hostile-only ID and was not a proven complete GCEC operation domain.

## G. CR-09-02 exact correction — CLOSED

- Restored `executionIntent.requestedOperation` to free-form NULLABLE_STRING (schema + validator).
- Removed `github.pr.merge` from any producer enum.
- Introduced Option B dedicated field `artifactMaterializationOperation`: enum `[cursor.docs_write.apply] | null` only.
- Hostile merge remains via direct DTO injection (Fake marker / test DTO), not producer schema pollution.

## H. Operation-contract inventory (reconfirmed)

| Surface | Semantics after remediation |
|---------|------------------------------|
| Top-level `requestedOperation` | Legacy/free-form (unrelated F2) |
| `executionIntent.requestedOperation` | Generic GCEC free-form/nullable |
| `artifactMaterializationOperation` | Artifact-only technical discriminator |
| Canonical action after accept | `cursor.docs_write.apply` (server-owned) |
| Canonical capability after accept | `cap:cursor.docs_write` |

No complete global operation enum exists in Product for safe OpenAI exposure → global narrowing rejected.

## I. Selected final design

**Option B** — dedicated nullable Artifact discriminator.

Why: Option A global enum unsafe; Option B is one tagged field in existing F2 structured contract; no new service/persistence/registry/classifier/extra model call.

## J. Complete useful modified content

### Files (8 material Product source/test — soft-cap note: 7 requested; remediation required types + fake + corr07 fixture + new field module)

1. `f2/f2CanonicalOperations.ts` (rewritten — Artifact-only constants/enum)
2. `f2/executionIntentSchema.ts` (restore free-form requestedOperation)
3. `f2/intentAnalysis.ts` (schema field + parse + prompt CR-09-01/02)
4. `f2/types.ts` (DTO field)
5. `f2/activeCycleGovernedContinuation.ts` (gate requires dedicated field + contradiction checks; reversibility strip preserved)
6. `lib/platform/ai/fakeProvider.ts` (fixtures)
7. `__tests__/…/corrProof09….test.ts` (rewritten)
8. `__tests__/…/corrProof07….test.ts` (fixture alignment)

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

### Unified diff (modified tracked Product paths)

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

## K. Hostile-test separation proof

- Producer schema for dedicated field: ONLY `cursor.docs_write.apply` | null (Ajv T04/T05).
- `github.pr.merge` NOT in dedicated enum.
- Direct DTO: continuationKind set + dedicated null + generic merge → `hasCompatible=false` (T06).
- Dedicated set + contradictory merge → blocked (T06b).
- CORR-07 CR06-A hostile regression remains green.

## L. Reversibility

Unchanged seam hardening: enrich strips unsourced `reversible`/`irreversible` → null; preserves `unknown`.

## M. Deterministic evidence

| Suite | Result |
|------|--------|
| CORR-09 focused | 15 passed |
| CORR-07 | 32 passed |
| project-assistant | 742 passed |
| typecheck / lint / build | PASS |
| Full Vitest | **3983 passed / 137 skipped** (361 files passed / 17 skipped) |

ZERO LIVE this run.

## N. Fake/Real qualification

| Level | Status |
|------|--------|
| Deterministic final remediated candidate | **DETERMINISTIC PROVEN** |
| Prior LIVE Outcome A (pre-remediation) | **HISTORICAL ONLY** — proves previous candidate, not this remediated content |
| Fresh LIVE for remediated candidate | **REQUIRED** under a distinct later Morris GO |
| Fresh LIVE performed this run | **NO** |

## O. Explicit claim downgrade

The final remediated candidate must **NOT** claim LIVE-PROVEN.

Prior Outcome A (same-cycle targetPath clarification) remains evidence for the **pre-remediation** candidate only.

Proof level now: **DETERMINISTIC PROVEN** · LIVE: **STALE FOR FINAL REMEDIATED CANDIDATE / NEW RETEST REQUIRED**.

## P. Anti-claims

Not claimed: LIVE proof of remediated contract; docs_write execution; HD/EC; multi-run reliability; runtime v3 ADOPTED; Product merge readiness without Critical Review + LIVE retest GO.

## Q. Remaining reserves

- Soft file count 8 vs soft cap 7 — all files are the minimum for Option B + fixture alignment; no redesign beyond GO.
- Cross-field OpenAI conditionals still unsupported → instruction + server gate.
- Dogfood baseline left untouched; no candidate LIVE runtime.

## R. Next Morris gate recommendation

1. ChatGPT Critical Review of this remediation pack.
2. If accepted: distinct Morris GO for ONE controlled LIVE retest of the remediated candidate (persistence continuity).
3. Only after LIVE + review: consider Product commit/PR GO.

---

## Safety ledger

- LIVE calls this run: **ZERO**
- Product commit/push/PR/merge: **ZERO**
- DB/Session writes this run: **ZERO**
- HD/EC/execution: **ZERO**
- Runtime v3: **NON ADOPTED**

## Unique verdict

**CORR-PROOF-09 REVIEW REMEDIATION DETERMINISTIC PASS — CR-09-01 CLOSED / CR-09-02 CLOSED — FRESH LIVE RETEST REQUIRES DISTINCT MORRIS GO — READY FOR CHATGPT CRITICAL REVIEW**
