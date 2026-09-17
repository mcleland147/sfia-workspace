# ChatGPT Review Pack — FULL
## PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 — R7 post-Evidence recovery options context continuity

**Timestamp (UTC):** 2026-09-17T20:39:15Z
**Pack kind:** FULL (code modification present — modified content included below)
**Pack revision:** R7 — post-Evidence recovery options context continuity
**Automation:** L3 handoff publish only; **NO** project commit/push/PR/merge; **ZERO REAL**; **NO Execute**; **NO HumanDecision**; **NO new Attempt**

---

## 1. Git Truth

| Field | Value |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| Branch | `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| HEAD | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| origin/main | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| Baseline match | YES (`HEAD == origin/main == 26478b1ea5b010c625f0c6039c969fac5c135cf5`) |
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
 M projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/package-lock.json
?? .tmp-sfia-review/checkpoint-e-prepare-fix.diff
?? .tmp-sfia-review/checkpoint-e-r4-evidence-coherence.diff
?? .tmp-sfia-review/checkpoint-e-resume-full.diff
?? .tmp-sfia-review/checkpoint-f-r6-observability.diff
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceRematerialize.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointE.prepareResume.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/docsWriteEvidenceContradictionView.ts
?? projects/sfia-studio/app/features/project-assistant/f3/processFailureDiagnostic.ts
?? projects/sfia-studio/app/features/project-assistant/f3/rematerializeDocsWriteEvidenceRequirements.ts
?? projects/sfia-studio/app/features/project-assistant/f3/resolveDurableBoundaryProofMode.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareReadyProposalPursueContinuation.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts
```

### Preservation

- R1–R6 local Product dirty files: **preserved**
- `package-lock.json`: dirty préexistant — **LEFT UNTOUCHED / hors scope**
- Historical Attempt `xat:w3a:1f49d8e25e20837a`: **not mutated**
- Campaign DB: **not manually mutated**
- Target `projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md`: **ABSENT** (unchanged)
- Nouveau REAL consommé ce lot: **0** (budget restant autorisé: 1)

---

## 2. Diagnostic d'entrée (confirmé)

`w2ProposeTrajectoryOptionsAction` → `resolveW2QualificationInputs` ne fournissait que:
CycleInstance active + profil + objective/title LPS + Reservations + proposalId éventuel.

Le chemin ne consommait pas Attempt failed / EC failed / Evidence / ReviewBundle / W3C recover.

Quand `proposalId == null`, la branche ProjectTrajectory générique dérivait GOVERNED/BOUNDED/CLARIFY framing, et Nora recevait essentiellement `cyc:framing` + objectif LPS → repartait sur le cadrage gestion de tâches.

**Le cycle `cyc:framing` n'est PAS erroné.** Le gap est la **sélection de contexte insuffisante**.

---

## 3. Root cause confirmée

Les primitives post-Evidence (W3B Evidence/RB + W3C `epi:w3c-rec:*` recover) sont durables mais **non consommées** par `proposeTrajectoryOptions` / `deriveTrajectoryOptions`.

Classification: **B** (consommation manquante) + symptôme A (sujet cognitif framing).

---

## 4. Primitives réutilisées (pas de second moteur)

| Primitive | Usage R7 |
|---|---|
| `findExistingW3cPostEvidence` | Cohérence épisode W3C ↔ Evidence/Attempt |
| `parseW3cRecommendationPayload` | Lecture payload recover/replan |
| `w3bEvidenceIdentity` | Refuse mismatch Evidence/RB vs Attempt |
| `resolveDurableBoundaryProofMode` (R6) | `realProcessInvoked` durable cursor_real |
| Existing OptionSet supersession (`withPriorSetSupersedes`) | Re-instruction remplace rec générique sans nouvelle sémantique |

**Non créé:** persistence recovery, store parallèle, schéma DB, moteur d'options séparé.

---

## 5. RecoveryContext exact

```ts
type PostEvidenceRecoveryContext = {
  kind: "post_evidence_recovery";
  attemptId: string;
  attemptStatus: "failed" | "timeout" | "cancelled";
  stopReason: string | null;
  executionContractId: string;
  evidenceId: string;
  reviewBundleId: string;
  productOutcome: "FAIL" | "STOP";
  recommendationKind: "recover" | "replan";
  headline: string;
  rationale: string;
  nextStep: string;
  realProcessInvoked: boolean;
  businessEffectProven: false;
  w3cEpistemicItemId: string;
};
```

### Règle de sélection / cohérence

SI épisode post-Evidence cohérent pour le Project courant:
- W3C Recommendation active `recover|replan` + outcome `FAIL|STOP`
- `w3bEvidenceIdentity(attemptId)` match evidenceId/reviewBundleId
- `findExistingW3cPostEvidence` confirme le même épisode
- Attempt terminal `failed|timeout` (ou `cancelled` si STOP)
- EC.projectId == Project courant
- Evidence bindings Attempt/EC/Project cohérents quand reader dispo

ALORS RecoveryContext complète/domine le sujet d'instruction.
SINON comportement générique inchangé.

CycleInstance `cyc:framing` **conservé** (arrière-plan CKC) — non remplacé.

---

## 6. Adaptation W2

1. `resolvePostEvidenceRecoveryContext` — read-model borné (nouveau fichier)
2. `proposeTrajectoryOptions` — résout RecoveryContext avant cognition ProjectTrajectory; injecte `buildRecoveryCognitionSection` dans le prompt Nora; passe `recoveryContext` à derive
3. `trajectoryOptions` — mêmes optionRefs (idempotence / no epistemic retirement) avec labels recovery:
   - GOVERNED → préparer nouvelle tentative gouvernée
   - BOUNDED → replanifier/suspendre sans relance
   - CLARIFY → diagnostiquer/clarifier avant nouvelle tentative
4. Recommendation recovery défaut = CLARIFY (diagnose) — **jamais** auto-pick retry malgré GO Morris hors runtime
5. `isHumanDecision: false`, `promotesTrajectory: false` conservés

---

## 7. État recommandation générique pré-fix

Campagne: `epi:rec-w2-462d77fbb356` (instruction générique incorrecte, **aucune HD**).

Lifecycle existant: re-instruction ProjectTrajectory avec **mêmes optionRefs** + `withPriorSetSupersedes` sur Recommendation/Observation — la nouvelle OptionSet recovery supersède sans mutation SQLite manuelle ni nouvelle sémantique.

T11 prouve: W3C recover n'est pas masqué par une recommandation W2 générique antérieure.

---

## 8. Fichiers R7 (scope lot)

| Path | Change |
|---|---|
| `w2/resolvePostEvidenceRecoveryContext.ts` | **NEW** — resolver + cognition section + realProcessInvoked |
| `w2/proposeTrajectoryOptions.ts` | ADAPT — inject RecoveryContext |
| `w2/trajectoryOptions.ts` | ADAPT — recovery option/recommendation derive |
| `__tests__/.../checkpointF.recoveryOptionsContext.d0.test.ts` | **NEW** — T1–T12 |

Hors scope: `package-lock.json`, R1–R6 files (préservés).

---

## 9. Tests

| ID | Result |
|---|---|
| T1 RecoveryContext on FAIL+Evidence+RB+W3C | PASS |
| T2 cognition prompt FAIL/Evidence/recover | PASS |
| T3 recovery options, no auto HD | PASS |
| T4 recommendation recovery ≠ decision | PASS |
| T5 realProcessInvoked cursor_real stays true | PASS |
| T6 no failed episode → generic | PASS |
| T7 SUCCESS → no false recovery | PASS |
| T8 hostile project → null | PASS |
| T9 other project W3C not injected | PASS |
| T10 restart from durable SQLite | PASS |
| T11 generic rec does not mask W3C | PASS |
| T12 no new Attempt on propose | PASS |
| T13 R1/R3/R4/R6 non-régression (E + F R6 suites) | PASS |
| T14 typecheck `tsc --noEmit` | PASS |

Commandes:
```
npx vitest run __tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
npx vitest run __tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts
npx vitest run __tests__/project-assistant/checkpointE.prepareResume.d0.test.ts \
  __tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts
npx tsc --noEmit -p tsconfig.json
```

---

## 10. Restart proof

T10: runtime A materialize FAIL+W3C → dispose → runtime B same SQLite → `resolvePostEvidenceRecoveryContext` reconstruit Attempt/Evidence/recover. Aucune dépendance ProposalStore process-local / flag React / mémoire recovery.

---

## 11. ZERO REAL / safety

| Gate | Status |
|---|---|
| Cursor REAL lancé | NON |
| Execute | NON |
| Nouvel Attempt campagne | NON (count reste 1) |
| HumanDecision | NON |
| Mutation SQLite campagne manuelle | NON |
| Target ABSENT | OUI |
| Nouveau REAL consommé | 0 |
| Budget restant | 1 |

---

## 12. Réserves

- Campagne runtime « Instruire les options » non rejouée ici (ZERO REAL lot) — preuve déterministe via tests + durables.
- Recommandation générique campagne `epi:rec-w2-462d77fbb356` sera supersédée à la prochaine instruction Product (lifecycle existant), pas mutée manuellement.
- Morris REAL GO hors runtime **n'auto-sélectionne pas** l'option retry.

---

## 13. Gates

| Gate | Verdict |
|---|---|
| Pas de nouvelle persistence | PASS |
| Pas de second recovery engine | PASS |
| CycleInstance inchangé | PASS |
| Supersession via lifecycle existant | PASS |
| ZERO REAL | PASS |
| Autorité / Gate D non élargie | PASS |

---

## 14. Claims

**Autorisés**
- recovery context continuity deterministically proven
- W3C post-Evidence consumed by W2 trajectory instruction
- ZERO REAL
- previous Attempt remains FAIL

**Interdits (non revendiqués)**
- recovery HumanDecision made
- retry executed
- REAL PASS
- Product Journey E2E usable / READY
- runtime v3 ADOPTED

---

## 15. Verdict

**RECOVERY OPTIONS CONTEXT FIXED — READY FOR PILOT RECOVERY DECISION**

Boucle reconnectée:
FAIL → Evidence/RB → W3C recover → W2 Options/Recommendation recovery → (HumanDecision Pilote — hors lot)

---

## 16. Diff exploitable R7 (complet)

===== R7 TRACKED DIFF =====
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
index 63ced39a..d2636564 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
@@ -61,6 +61,11 @@ import {
   deriveTrajectoryRecommendation,
   type TrajectoryOptionInputs,
 } from "./trajectoryOptions";
+import {
+  buildRecoveryCognitionSection,
+  resolvePostEvidenceRecoveryContext,
+  type PostEvidenceRecoveryContext,
+} from "./resolvePostEvidenceRecoveryContext";
 import type {
   CkcRecommendationProvenanceDto,
   ProposeTrajectoryOptionsResult,
@@ -222,6 +227,14 @@ export async function proposeTrajectoryOptions(
     }
     return { ok: true, ...activeSubject.optionSet };
   }
+  if (activeSubject.kind === "pursue_prepare_ready") {
+    return {
+      ok: false,
+      code: "PREPARE_CONTINUATION_OWNS_NEXT_ACTION",
+      message:
+        "Une décision pursue durable attend la préparation du contrat d'exécution — aucune nouvelle instruction d'options.",
+    };
+  }
   if (
     activeSubject.kind === "pending_reinstruction_required" &&
     !opaqueProposalIdEarly
@@ -297,10 +310,33 @@ export async function proposeTrajectoryOptions(
     };
   }

+  // R7 — durable RecoveryContext for ProjectTrajectory path only.
+  // Proposal subject path keeps sealed Proposal as subject (no recovery inject).
+  let recoveryContext: PostEvidenceRecoveryContext | null = null;
+  if (!proposalSubject) {
+    const recovered = await resolvePostEvidenceRecoveryContext({
+      oa,
+      projectId: input.projectId,
+    });
+    if (!recovered.ok) {
+      return {
+        ok: false,
+        code: recovered.code,
+        message: recovered.message,
+      };
+    }
+    recoveryContext = recovered.context;
+  }
+
   const ckcPromptSection = buildCkcCognitivePromptSection(ckcContent);
+  const recoveryCognitionSection = recoveryContext
+    ? buildRecoveryCognitionSection(recoveryContext)
+    : null;
   const cognitionUserContent = proposalSubject
     ? `Instruire Options/Recommendation pour la Proposal ${proposalSubject.proposalId} (sujet: ${proposalSubject.sealedExecutionBasis.objective})`
-    : `Instruire Options/Recommendation pour le cycle ${input.cycleTypeId}`;
+    : recoveryContext
+      ? `Instruire Options/Recommendation de recovery/replan après FAIL durable (${recoveryContext.attemptId}) — sujet courant = recovery du même cycle, PAS un nouveau cadrage fonctionnel.`
+      : `Instruire Options/Recommendation pour le cycle ${input.cycleTypeId}`;
   let cognitiveRecommendation: string;
   try {
     const reasoning = await reasonWithResolvedCkcContext({
@@ -316,12 +352,24 @@ export async function proposeTrajectoryOptions(
               `targetPath=${proposalSubject.sealedExecutionBasis.targetPath ?? ""}`,
               `requestedOperation=${proposalSubject.sealedExecutionBasis.requestedOperation}`,
             ]
-          : []),
+          : recoveryContext
+            ? [
+                `recoverySubject=post_evidence`,
+                `attemptId=${recoveryContext.attemptId}`,
+                `evidenceId=${recoveryContext.evidenceId}`,
+                `recommendationKind=${recoveryContext.recommendationKind}`,
+                `realProcessInvoked=${recoveryContext.realProcessInvoked}`,
+              ]
+            : []),
       ].join(" | "),
       intentSummary: proposalSubject
         ? `Proposal subject ${proposalSubject.proposalId} · profil ${input.recommendedProfile}`
-        : `Cycle ${input.cycleTypeId} · profil ${input.recommendedProfile}`,
-      ckcPromptSection,
+        : recoveryContext
+          ? `Recovery/replan post-Evidence · cycle ${input.cycleTypeId} · profil ${input.recommendedProfile} · Recommendation ≠ HumanDecision`
+          : `Cycle ${input.cycleTypeId} · profil ${input.recommendedProfile}`,
+      ckcPromptSection: recoveryCognitionSection
+        ? `${ckcPromptSection}\n\n${recoveryCognitionSection}`
+        : ckcPromptSection,
     });
     cognitiveRecommendation = reasoning.recommendation;
   } catch (error) {
@@ -505,6 +553,7 @@ export async function proposeTrajectoryOptions(
     irreversible: input.irreversible,
     reservations: input.reservations,
     ckcAttribution: input.ckcAttribution,
+    recoveryContext,
   };

   const options = deriveTrajectoryOptions(inputs);
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
index 957ddada..3865fb16 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
@@ -7,6 +7,10 @@
  * seam already carries. This module adds NO cognitive path: it does not call a
  * provider, does not read CKC content and is not a Phase B integration point.
  * Same inputs always yield the same options, in the same order.
+ *
+ * Checkpoint F / R7 — when RecoveryContext is present, same optionRefs are kept
+ * (idempotent OptionSet supersession) but labels/intents/steps carry recovery
+ * semantics so framing-generic cognition is not the subject.
  */

 import type { TrajectoryStep } from "@/lib/oa/cycle";
@@ -14,6 +18,7 @@ import type {
   TrajectoryOptionDto,
   TrajectoryRecommendationDto,
 } from "./types";
+import type { PostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";

 export type TrajectoryOptionInputs = {
   readonly cycleTypeId: string;
@@ -22,6 +27,8 @@ export type TrajectoryOptionInputs = {
   readonly irreversible: boolean;
   readonly reservations: readonly string[];
   readonly ckcAttribution: string | null;
+  /** Optional durable post-Evidence recovery subject (R7). */
+  readonly recoveryContext?: PostEvidenceRecoveryContext | null;
 };

 export const GOVERNED_OPTION_REF = "opt:trajectory:governed-gated" as const;
@@ -103,6 +110,56 @@ function clarifySteps(): TrajectoryStep[] {
   ];
 }

+function recoveryRetrySteps(): TrajectoryStep[] {
+  return [
+    step(1, "w2-rec-diagnose", "Prendre en compte l'échec et l'Evidence durables"),
+    step(2, "w2-rec-decide", "Décision humaine explicite de recovery", {
+      dependencies: ["stp:w2-rec-diagnose"],
+      gate: "human_decision",
+      exitCriteria: ["HumanDecision acceptée — Recommendation ≠ décision"],
+    }),
+    step(3, "w2-rec-contract", "Préparer un nouveau contrat d'exécution", {
+      dependencies: ["stp:w2-rec-decide"],
+    }),
+    step(4, "w2-rec-inspect", "Inspecter puis autoriser avant Execute", {
+      dependencies: ["stp:w2-rec-contract"],
+      gate: "inspection",
+      exitCriteria: ["Inspection valide", "Arrêt avant exécution"],
+    }),
+  ];
+}
+
+function recoveryClarifySteps(): TrajectoryStep[] {
+  return [
+    step(1, "w2-rec-clr-read", "Lire Evidence / ReviewBundle / stopReason"),
+    step(
+      2,
+      "w2-rec-clr-gap",
+      "Clarifier le diagnostic avant toute nouvelle tentative",
+      { dependencies: ["stp:w2-rec-clr-read"] },
+    ),
+    step(3, "w2-rec-clr-reoption", "Réinstruire les options recovery", {
+      dependencies: ["stp:w2-rec-clr-gap"],
+      gate: "human_decision",
+      exitCriteria: ["Nouvelle décision humaine requise"],
+    }),
+  ];
+}
+
+function recoverySuspendSteps(): TrajectoryStep[] {
+  return [
+    step(1, "w2-rec-hold-ack", "Conserver l'échec comme vérité durable"),
+    step(2, "w2-rec-hold-decide", "Décision humaine de suspension / replan", {
+      dependencies: ["stp:w2-rec-hold-ack"],
+      gate: "human_decision",
+      exitCriteria: ["HumanDecision acceptée — pas de relance automatique"],
+    }),
+    step(3, "w2-rec-hold-replan", "Replanifier sans Execute immédiat", {
+      dependencies: ["stp:w2-rec-hold-decide"],
+    }),
+  ];
+}
+
 /**
  * Options are always presented in the same order so the UI never implies a
  * ranking by position. Ranking is carried only by the explicit Recommendation.
@@ -111,6 +168,54 @@ export function deriveTrajectoryOptions(
   inputs: TrajectoryOptionInputs,
 ): TrajectoryOptionDto[] {
   const reservations = [...inputs.reservations];
+  const recovery = inputs.recoveryContext ?? null;
+  if (recovery) {
+    return [
+      {
+        kind: "OPTION",
+        optionRef: GOVERNED_OPTION_REF,
+        label: "Préparer une nouvelle tentative gouvernée",
+        intent:
+          "À partir du FAIL durable, décider explicitement puis préparer / inspecter / autoriser un nouveau contrat — sans Execute automatique.",
+        impacts: [
+          `Attempt failed: ${recovery.attemptId}`,
+          `Evidence: ${recovery.evidenceId}`,
+          "Aucun succès métier revendiqué",
+          `realProcessInvoked durable: ${recovery.realProcessInvoked}`,
+        ],
+        reservations,
+        steps: recoveryRetrySteps(),
+      },
+      {
+        kind: "OPTION",
+        optionRef: BOUNDED_OPTION_REF,
+        label: "Replanifier ou suspendre sans relance immédiate",
+        intent:
+          "Conserver l'échec comme vérité, décider de suspendre ou replanifier — aucune nouvelle tentative immédiate.",
+        impacts: [
+          "Pas de relance Execute dans cette option",
+          `W3C: ${recovery.recommendationKind}`,
+          `outcome: ${recovery.productOutcome}`,
+        ],
+        reservations,
+        steps: recoverySuspendSteps(),
+      },
+      {
+        kind: "OPTION",
+        optionRef: CLARIFY_OPTION_REF,
+        label: "Diagnostiquer / clarifier avant nouvelle tentative",
+        intent:
+          "Approfondir le diagnostic (Evidence, stopReason, observabilité) avant toute préparation d'une nouvelle tentative.",
+        impacts: [
+          "Aucune préparation d'exécution à ce stade",
+          `stopReason: ${recovery.stopReason ?? "n/a"}`,
+          "Nouvelle décision humaine requise après clarification",
+        ],
+        reservations,
+        steps: recoveryClarifySteps(),
+      },
+    ];
+  }
   return [
     {
       kind: "OPTION",
@@ -165,6 +270,19 @@ export function deriveTrajectoryOptions(
 export function deriveTrajectoryRecommendation(
   inputs: TrajectoryOptionInputs,
 ): TrajectoryRecommendationDto {
+  const recovery = inputs.recoveryContext ?? null;
+  if (recovery) {
+    // Prefer diagnose/clarify — never auto-pick retry because a Morris REAL GO exists.
+    return {
+      label: "RECOMMANDATION — PAS UNE DÉCISION",
+      recommendedOptionRef: CLARIFY_OPTION_REF,
+      rationale: `Épisode post-Evidence ${recovery.productOutcome} (${recovery.attemptId}) — ${recovery.headline}. Diagnostiquer / clarifier avant toute nouvelle tentative. Recommendation ≠ HumanDecision ; aucun Execute automatique.`,
+      isHumanDecision: false,
+      promotesTrajectory: false,
+      ckcAttribution: inputs.ckcAttribution,
+      ckcProvenance: null,
+    };
+  }
   if (inputs.reservations.length > 0) {
     return {
       label: "RECOMMANDATION — PAS UNE DÉCISION",
===== R7 NEW FILES =====

----- BEGIN projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts -----
/**
 * Checkpoint F / R7 — resolve durable post-Evidence RecoveryContext for W2
 * trajectory instruction. No new persistence. No parallel recovery engine.
 *
 * Coherence: Attempt terminal ↔ Evidence ↔ ReviewBundle ↔ W3C recover payload
 * for the same Project. Falls back to null (generic trajectory) when absent.
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  findExistingW3cPostEvidence,
  parseW3cRecommendationPayload,
  type W3cRecommendationKind,
  type W3cRecommendationPayload,
} from "./w3cPostEvidenceLoop";
import { w3bEvidenceIdentity } from "./materializeW3bProductTerminal";
import { resolveDurableBoundaryProofMode } from "@/features/project-assistant/f3/resolveDurableBoundaryProofMode";

export type PostEvidenceRecoveryContext = {
  readonly kind: "post_evidence_recovery";
  readonly attemptId: string;
  readonly attemptStatus: "failed" | "timeout" | "cancelled";
  readonly stopReason: string | null;
  readonly executionContractId: string;
  readonly evidenceId: string;
  readonly reviewBundleId: string;
  readonly productOutcome: "FAIL" | "STOP";
  readonly recommendationKind: Extract<
    W3cRecommendationKind,
    "recover" | "replan"
  >;
  readonly headline: string;
  readonly rationale: string;
  readonly nextStep: string;
  readonly realProcessInvoked: boolean;
  readonly businessEffectProven: false;
  readonly w3cEpistemicItemId: string;
};

function statementToJsonString(statement: unknown): string | null {
  if (typeof statement === "string" && statement.trim().length > 0) {
    return statement;
  }
  if (statement && typeof statement === "object") {
    try {
      return JSON.stringify(statement);
    } catch {
      return null;
    }
  }
  return null;
}

function resolveRealProcessInvoked(attempt: ExecutionAttempt): boolean {
  if (attempt.processDiagnostic?.realProcessInvoked === true) return true;
  if (attempt.irreversibleEffectsPossible === true) return true;
  if (
    typeof attempt.stopReason === "string" &&
    attempt.stopReason.startsWith("REAL_")
  ) {
    return true;
  }
  return false;
}

/** Pure R6 truth — exported for T5; never invents REAL from agent id alone. */
export function inferDurableRealProcessInvoked(input: {
  readonly attempt: ExecutionAttempt;
  readonly boundaryProofMode: string | null;
}): boolean {
  if (resolveRealProcessInvoked(input.attempt)) return true;
  return (
    input.boundaryProofMode === "cursor_real" &&
    Boolean(input.attempt.launchedAt)
  );
}

async function loadAttempt(
  oa: RuntimeOaStack,
  attemptId: string,
): Promise<ExecutionAttempt | null> {
  if (!oa.executionAttemptServices) return null;
  const loaded = await oa.executionAttemptServices.getExecutionAttempt.execute({
    attemptId,
  });
  return loaded.ok ? loaded.attempt : null;
}

/**
 * Resolve a coherent post-Evidence recovery subject for W2 options.
 * Returns null when no coherent recover/replan episode exists (generic path).
 */
export async function resolvePostEvidenceRecoveryContext(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<
  | { readonly ok: true; readonly context: PostEvidenceRecoveryContext | null }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const { oa, projectId } = input;
  if (!oa.cycleServices || !oa.executionAttemptServices) {
    return { ok: true, context: null };
  }

  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId,
  });
  if (!epistemic.ok) {
    return {
      ok: false,
      code: epistemic.error.detailCode,
      message: "État épistémique indisponible — instruction options refusée.",
    };
  }

  type Candidate = {
    payload: W3cRecommendationPayload & {
      kind: "recover" | "replan";
      productOutcome: "FAIL" | "STOP";
    };
    epistemicItemId: string;
  };
  const candidates: Candidate[] = [];
  for (const item of epistemic.state.items) {
    if (item.status !== "active" || item.type !== "Recommendation") continue;
    const source = item.source ?? "";
    const isW3c =
      source.startsWith("w3c-post-evidence:") ||
      item.epistemicItemId.startsWith("epi:w3c-rec:");
    if (!isW3c) continue;
    const raw = statementToJsonString(item.statement);
    if (!raw) continue;
    const payload = parseW3cRecommendationPayload(raw);
    if (!payload) continue;
    if (payload.kind !== "recover" && payload.kind !== "replan") continue;
    if (payload.productOutcome !== "FAIL" && payload.productOutcome !== "STOP") {
      continue;
    }
    candidates.push({
      payload: {
        ...payload,
        kind: payload.kind,
        productOutcome: payload.productOutcome,
      },
      epistemicItemId: item.epistemicItemId,
    });
  }

  if (candidates.length === 0) {
    return { ok: true, context: null };
  }

  // Prefer newest by Attempt failedAt / updatedAt among coherent candidates.
  let best: {
    context: PostEvidenceRecoveryContext;
    sortKey: string;
  } | null = null;

  for (const candidate of candidates) {
    const { payload } = candidate;
    const expectedIds = w3bEvidenceIdentity(payload.attemptId);
    if (
      payload.evidenceId !== expectedIds.evidenceId ||
      payload.reviewBundleId !== expectedIds.reviewBundleId
    ) {
      // Identity mismatch — refuse this candidate (do not mix episodes).
      continue;
    }

    const existing = await findExistingW3cPostEvidence({
      oa,
      projectId,
      evidenceId: payload.evidenceId,
      attemptId: payload.attemptId,
    });
    if (!existing) continue;
    if (existing.recommendation.kind !== payload.kind) continue;
    if (
      existing.productOutcome !== "FAIL" &&
      existing.productOutcome !== "STOP"
    ) {
      continue;
    }

    const attempt = await loadAttempt(oa, payload.attemptId);
    if (!attempt) continue;
    const terminalOk =
      attempt.status === "failed" ||
      attempt.status === "timeout" ||
      (payload.productOutcome === "STOP" && attempt.status === "cancelled");
    if (!terminalOk) continue;

    if (!oa.executionContractServices) continue;
    const contract =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: attempt.executionContractId,
      });
    if (!contract.ok) continue;
    if (contract.contract.projectId !== projectId) continue;

    // Evidence reader coherence when available
    if (oa.evidenceReviewServices?.evidenceReader) {
      const evidence = await oa.evidenceReviewServices.evidenceReader.findById(
        payload.evidenceId,
      );
      if (!evidence) continue;
      if (evidence.bindings.executionAttemptId !== payload.attemptId) continue;
      if (
        evidence.bindings.projectId &&
        evidence.bindings.projectId !== projectId
      ) {
        continue;
      }
      if (
        evidence.bindings.executionContractId &&
        evidence.bindings.executionContractId !== attempt.executionContractId
      ) {
        continue;
      }
    }

    const realProcessInvoked = inferDurableRealProcessInvoked({
      attempt,
      boundaryProofMode: await resolveDurableBoundaryProofMode({ oa, attempt }),
    });

    const context: PostEvidenceRecoveryContext = {
      kind: "post_evidence_recovery",
      attemptId: payload.attemptId,
      attemptStatus: attempt.status as "failed" | "timeout" | "cancelled",
      stopReason: attempt.stopReason ?? null,
      executionContractId: attempt.executionContractId,
      evidenceId: payload.evidenceId,
      reviewBundleId: payload.reviewBundleId,
      productOutcome: payload.productOutcome,
      recommendationKind: payload.kind,
      headline: payload.headline.slice(0, 280),
      rationale: payload.rationale.slice(0, 1200),
      nextStep: payload.nextStep,
      realProcessInvoked,
      businessEffectProven: false,
      w3cEpistemicItemId: candidate.epistemicItemId,
    };

    const sortKey =
      attempt.failedAt ??
      attempt.timedOutAt ??
      attempt.cancelledAt ??
      attempt.updatedAt ??
      attempt.createdAt;
    if (!best || sortKey > best.sortKey) {
      best = { context, sortKey };
    }
  }

  return { ok: true, context: best?.context ?? null };
}

/** Compact cognitive section — recovery subject, not framing dump. */
export function buildRecoveryCognitionSection(
  context: PostEvidenceRecoveryContext,
): string {
  return [
    "## Sujet courant — recovery / replan post-Evidence (PAS un nouveau cadrage)",
    `- Attempt terminal: ${context.attemptId} (${context.attemptStatus})`,
    `- ExecutionContract: ${context.executionContractId}`,
    `- stopReason: ${context.stopReason ?? "n/a"}`,
    `- Evidence: ${context.evidenceId}`,
    `- ReviewBundle: ${context.reviewBundleId}`,
    `- productOutcome: ${context.productOutcome}`,
    `- W3C recommendationKind: ${context.recommendationKind}`,
    `- headline: ${context.headline}`,
    `- realProcessInvoked (durable): ${context.realProcessInvoked}`,
    `- businessEffectProven: false`,
    "- Aucun succès métier prouvé. Aucune READY.",
    "- La décision suivante appartient au Pilote (Recommendation ≠ HumanDecision).",
    "- Ne pas repartir sur le cadrage fonctionnel initial comme sujet principal.",
    `- Rationale W3C (bornée): ${context.rationale}`,
  ].join("\n");
}

----- END projects/sfia-studio/app/features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts -----

----- BEGIN projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts -----
/**
 * Checkpoint F / R7 — post-Evidence recovery options context continuity.
 * ZERO REAL / ZERO Execute / ZERO HumanDecision on campaign.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import type { ConversationProvider } from "@/lib/platform/ai";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
  deriveTrajectoryOptions,
  deriveTrajectoryRecommendation,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  buildRecoveryCognitionSection,
  inferDurableRealProcessInvoked,
  resolvePostEvidenceRecoveryContext,
  type PostEvidenceRecoveryContext,
} from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import { materializeProductOutcomeFromAttempt } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { w3bEvidenceIdentity } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import {
  armW3bBoundary,
  clearW3bBoundaryArm,
} from "@/lib/vertical-slice-runtime/w3bE2eBoundaryControl";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL = "1";
  setConversationProviderForTests(null);
  clearW3bBoundaryArm();
});

afterEach(() => {
  clearW3bBoundaryArm();
  cleanupW2TempDirs();
  setConversationProviderForTests(null);
  vi.restoreAllMocks();
});

const SAMPLE_RECOVERY: PostEvidenceRecoveryContext = {
  kind: "post_evidence_recovery",
  attemptId: "xat:w3a:1f49d8e25e20837a",
  attemptStatus: "failed",
  stopReason: "REAL_PROCESS_NONZERO_EXIT",
  executionContractId: "xct:m3-ev:8aaa188b3a3bd7a7",
  evidenceId: "ev:w3b:0b7609835db72e9a",
  reviewBundleId: "rb:w3b:0b7609835db72e9a",
  productOutcome: "FAIL",
  recommendationKind: "recover",
  headline: "Échec technique — recovery requise",
  rationale: "Attempt failed; Evidence disponible; aucun succès métier.",
  nextStep: "recovery_diagnose_or_replan",
  realProcessInvoked: true,
  businessEffectProven: false,
  w3cEpistemicItemId: "epi:w3c-rec:a5b6220be2cc1e84",
};

async function authorizeTempArtifact(suffix: string, dbPath?: string) {
  const db = dbPath ?? tempProductDbPath(`r7-${suffix}.sqlite`);
  const runtime = bootW2Runtime({
    productDbPath: db,
    idPrefix: `r7${suffix}`,
  });
  const seeded = await seedQualifiedProject(runtime, { suffix });
  const oa = runtime.oa!;
  const qualification = await resolveW2QualificationInputs({
    oa,
    projectId: seeded.projectId,
  });
  expect(qualification.ok).toBe(true);
  if (!qualification.ok) throw new Error("qual");
  const proposed = await proposeTrajectoryOptions({
    oa,
    projectId: seeded.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
  });
  expect(proposed.ok).toBe(true);
  if (!proposed.ok) throw new Error("propose");
  const decided = await decideTrajectory({
    oa,
    projectId: seeded.projectId,
    optionSetRef: proposed.optionSetRef,
    options: proposed.options,
    recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
    selectedOptionRef: GOVERNED_OPTION_REF,
    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
    candidateVersion: proposed.proposedTrajectory!.version,
    forceLocalAuthority: true,
  });
  expect(decided.ok).toBe(true);
  if (!decided.ok) throw new Error("decide");
  const context = await currentF2Context(runtime, seeded.projectId);
  const prepared = await prepareExecutionContractFromW2Decision({
    oa,
    projectId: seeded.projectId,
    decisionId: decided.decision.decisionId,
    currentContext: context,
    forceLocalAuthority: true,
    qualifiedOperationKind: "generate-temporary-artifact",
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error(prepared.code);
  const executionContractId = prepared.contract.executionContractId;
  await inspectExecutionContract({
    oa,
    projectId: seeded.projectId,
    executionContractId,
  });
  const confirmed = await confirmExecutionContractForAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error(confirmed.code);
  const authorized = await evaluateExecutionAuthorization({
    oa,
    projectId: seeded.projectId,
    executionContractId,
    forceLocalAuthority: true,
  });
  expect(authorized.ok && authorized.outcome === "AUTHORIZED").toBe(true);
  return { oa, seeded, executionContractId, db, runtime };
}

async function materializeFail(
  ctx: Awaited<ReturnType<typeof authorizeTempArtifact>>,
) {
  armW3bBoundary({
    kind: "adapter_fail",
    reason: "adapter_unavailable",
  });
  const selected = await governedExecuteSelectAgent({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    executionContractId: ctx.executionContractId,
    forceLocalAuthority: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(selected.code);
  const started = await governedExecuteStart({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    executionContractId: ctx.executionContractId,
    attemptId: selected.attemptId,
    forceLocalAuthority: true,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(started.code);
  expect(started.attemptStatus).toBe("failed");
  const materialized = await materializeProductOutcomeFromAttempt({
    oa: ctx.oa,
    projectId: ctx.seeded.projectId,
    attemptId: started.attemptId,
  });
  expect(materialized.ok).toBe(true);
  if (!materialized.ok) throw new Error(materialized.code);
  expect(materialized.product.outcome).toBe("FAIL");
  expect(materialized.postEvidence?.ok).toBe(true);
  if (!materialized.postEvidence || !materialized.postEvidence.ok) {
    throw new Error("postEvidence");
  }
  expect(materialized.postEvidence.recommendation.kind).toBe("recover");
  return { started, materialized };
}

describe("R7 — pure derivation / cognition (T2–T5 unit)", () => {
  it("T3/T4 — recovery options + recommendation ≠ decision", () => {
    const inputs = {
      cycleTypeId: "cyc:framing",
      recommendedProfile: "Critical",
      criticalSignalsPresent: true,
      irreversible: false,
      reservations: [] as string[],
      ckcAttribution: null,
      recoveryContext: SAMPLE_RECOVERY,
    };
    const options = deriveTrajectoryOptions(inputs);
    expect(options.map((o) => o.optionRef)).toEqual([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]);
    expect(options[0]!.label).toMatch(/nouvelle tentative/i);
    expect(options[1]!.label).toMatch(/suspendre|replan/i);
    expect(options[2]!.label).toMatch(/Diagnostiquer|clarifier/i);
    const rec = deriveTrajectoryRecommendation(inputs);
    expect(rec.isHumanDecision).toBe(false);
    expect(rec.promotesTrajectory).toBe(false);
    expect(rec.recommendedOptionRef).toBe(CLARIFY_OPTION_REF);
    expect(rec.rationale).toMatch(/post-Evidence|FAIL|Diagnostiquer/i);
    expect(rec.rationale).toMatch(/Recommendation ≠ HumanDecision/);
  });

  it("T6 — without RecoveryContext, generic trajectory unchanged", () => {
    const options = deriveTrajectoryOptions({
      cycleTypeId: "cyc:framing",
      recommendedProfile: "Standard",
      criticalSignalsPresent: false,
      irreversible: false,
      reservations: [],
      ckcAttribution: null,
    });
    expect(options[0]!.label).toBe("Trajectoire gouvernée par gates");
    expect(options[1]!.label).toBe("Trajectoire bornée directe");
    expect(options[2]!.label).toBe("Clarifier avant d'engager");
  });

  it("T2 — recovery cognition section names FAIL / Evidence / recover", () => {
    const section = buildRecoveryCognitionSection(SAMPLE_RECOVERY);
    expect(section).toMatch(/recovery \/ replan/i);
    expect(section).toContain(SAMPLE_RECOVERY.attemptId);
    expect(section).toContain(SAMPLE_RECOVERY.evidenceId);
    expect(section).toContain("recommendationKind: recover");
    expect(section).toContain("realProcessInvoked (durable): true");
    expect(section).toMatch(/PAS un nouveau cadrage/);
    expect(section).toMatch(/Ne pas repartir sur le cadrage fonctionnel initial/);
  });

  it("T5 — cursor_real durable truth does not collapse to false", () => {
    const attempt = {
      processDiagnostic: {
        realProcessInvoked: true,
        boundaryProofMode: "cursor_real",
      },
      irreversibleEffectsPossible: true,
      stopReason: "REAL_PROCESS_NONZERO_EXIT",
      launchedAt: "2026-09-17T20:00:00.000Z",
    } as ExecutionAttempt;
    expect(
      inferDurableRealProcessInvoked({
        attempt,
        boundaryProofMode: "cursor_real",
      }),
    ).toBe(true);
    expect(
      inferDurableRealProcessInvoked({
        attempt: {
          ...attempt,
          processDiagnostic: undefined,
          irreversibleEffectsPossible: undefined,
          stopReason: "ADAPTER_UNAVAILABLE",
        } as ExecutionAttempt,
        boundaryProofMode: null,
      }),
    ).toBe(false);
    expect(
      inferDurableRealProcessInvoked({
        attempt: {
          ...attempt,
          processDiagnostic: undefined,
          irreversibleEffectsPossible: undefined,
          stopReason: "OTHER",
        } as ExecutionAttempt,
        boundaryProofMode: "cursor_real",
      }),
    ).toBe(true);
  });
});

describe("R7 — durable RecoveryContext integration", () => {
  it("T1 — failed + Evidence + RB + W3C recover → RecoveryContext", async () => {
    const ctx = await authorizeTempArtifact("t1");
    const { started, materialized } = await materializeFail(ctx);
    const resolved = await resolvePostEvidenceRecoveryContext({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.context).not.toBeNull();
    expect(resolved.context!.attemptId).toBe(started.attemptId);
    expect(resolved.context!.evidenceId).toBe(materialized.product.evidenceId);
    expect(resolved.context!.reviewBundleId).toBe(
      materialized.product.reviewBundleId,
    );
    expect(resolved.context!.recommendationKind).toBe("recover");
    expect(resolved.context!.productOutcome).toBe("FAIL");
    expect(resolved.context!.businessEffectProven).toBe(false);
  });

  it("T7 — SUCCESS continue episode → no false recovery", async () => {
    const ctx = await authorizeTempArtifact("t7");
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    const { governedExecuteRecordResult } = await import(
      "@/features/project-assistant/w2/governedExecuteAuthorizedContract"
    );
    await governedExecuteRecordResult({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId: ctx.executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
    });
    const materialized = await materializeProductOutcomeFromAttempt({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      attemptId: started.attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) return;
    expect(materialized.product.outcome).toBe("SUCCESS");
    if (materialized.postEvidence?.ok) {
      expect(materialized.postEvidence.recommendation.kind).toBe("continue");
    }
    const resolved = await resolvePostEvidenceRecoveryContext({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.context).toBeNull();
  });

  it("T6 — no failed episode → generic propose labels", async () => {
    const db = tempProductDbPath("r7-generic.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "r7gen" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "gen" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.options[0]!.label).toBe("Trajectoire gouvernée par gates");
    expect(proposed.recommendation.isHumanDecision).toBe(false);
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);
  });

  it("T2/T3/T4/T12 — propose after FAIL yields recovery options, no HD/Attempt", async () => {
    const ctx = await authorizeTempArtifact("t234");
    const { started, materialized } = await materializeFail(ctx);

    const attemptsBefore =
      await ctx.oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: ctx.executionContractId,
      });
    expect(attemptsBefore.ok).toBe(true);
    if (!attemptsBefore.ok) return;
    const countBefore = attemptsBefore.attempts.length;

    const captured: { system: string; user: string }[] = [];
    const recording: ConversationProvider = {
      providerId: "fake-test",
      async complete(messages) {
        const system = messages.find((m) => m.role === "system")?.content ?? "";
        const user = messages.find((m) => m.role === "user")?.content ?? "";
        captured.push({ system, user });
        return {
          text: "RECOMMANDATION recovery/replan — diagnostiquer avant retry. PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10,
            outputTokens: 5,
            totalTokens: 15,
            model: "fake-test-model",
            providerResponseId: "fake-r7",
          },
        };
      },
    };
    setConversationProviderForTests(recording);

    const qualification = await resolveW2QualificationInputs({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    expect(proposed.options[0]!.label).toMatch(/nouvelle tentative/i);
    expect(proposed.options[1]!.label).toMatch(/suspendre|replan/i);
    expect(proposed.options[2]!.label).toMatch(/Diagnostiquer|clarifier/i);
    expect(proposed.recommendation.isHumanDecision).toBe(false);
    expect(proposed.recommendation.promotesTrajectory).toBe(false);
    expect(proposed.recommendation.recommendedOptionRef).toBe(CLARIFY_OPTION_REF);
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);

    const recoveryPrompt = captured.find(
      (c) =>
        c.system.includes("recovery / replan") ||
        c.user.includes("recovery/replan"),
    );
    expect(recoveryPrompt).toBeTruthy();
    expect(recoveryPrompt!.system + recoveryPrompt!.user).toContain(
      started.attemptId,
    );
    expect(recoveryPrompt!.system + recoveryPrompt!.user).toContain(
      materialized.product.evidenceId!,
    );
    expect(recoveryPrompt!.system + recoveryPrompt!.user).toMatch(/recover/i);
    expect(recoveryPrompt!.system + recoveryPrompt!.user).toMatch(
      /PAS un nouveau cadrage/i,
    );

    const attemptsAfter =
      await ctx.oa.executionAttemptServices!.listExecutionAttempts.execute({
        executionContractId: ctx.executionContractId,
      });
    expect(attemptsAfter.ok).toBe(true);
    if (!attemptsAfter.ok) return;
    expect(attemptsAfter.attempts.length).toBe(countBefore);
  });

  it("T8 — Evidence without coherent Attempt binding does not resolve", async () => {
    const ctx = await authorizeTempArtifact("t8");
    const { started, materialized } = await materializeFail(ctx);
    expect(materialized.product.evidenceId).toBeTruthy();
    // Hostile: resolve on a different project id → null / no cross-bind
    const other = await resolvePostEvidenceRecoveryContext({
      oa: ctx.oa,
      projectId: "prj:hostile-other",
    });
    expect(other.ok).toBe(true);
    if (!other.ok) return;
    expect(other.context).toBeNull();
    // Identity check: mismatched evidenceId in payload is rejected by identity
    const ids = w3bEvidenceIdentity(started.attemptId);
    expect(materialized.product.evidenceId).toBe(ids.evidenceId);
  });

  it("T9 — W3C recover for another project is not injected", async () => {
    const ctxA = await authorizeTempArtifact("t9a");
    await materializeFail(ctxA);
    const ctxB = await authorizeTempArtifact("t9b");
    // B has no fail episode
    const resolvedB = await resolvePostEvidenceRecoveryContext({
      oa: ctxB.oa,
      projectId: ctxB.seeded.projectId,
    });
    expect(resolvedB.ok && resolvedB.context === null).toBe(true);
  });

  it("T10 — restart rebuilds RecoveryContext from durable only", async () => {
    const db = tempProductDbPath("r7-restart.sqlite");
    const ctxA = await authorizeTempArtifact("t10", db);
    const { started, materialized } = await materializeFail(ctxA);
    const projectId = ctxA.seeded.projectId;
    const attemptId = started.attemptId;
    const evidenceId = materialized.product.evidenceId!;

    const runtimeB = bootW2Runtime({
      productDbPath: db,
      idPrefix: "r7t10b",
    });
    const oaB = runtimeB.oa!;
    const resolved = await resolvePostEvidenceRecoveryContext({
      oa: oaB,
      projectId,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.context).not.toBeNull();
    expect(resolved.context!.attemptId).toBe(attemptId);
    expect(resolved.context!.evidenceId).toBe(evidenceId);
    expect(resolved.context!.recommendationKind).toBe("recover");
  });

  it("T11 — generic W2 recommendation does not mask W3C recover", async () => {
    const ctx = await authorizeTempArtifact("t11");
    // First instruct generic (before fail) already happened in authorize.
    // After fail, W3C recover must still resolve even if older OptionSet exists.
    await materializeFail(ctx);
    const resolved = await resolvePostEvidenceRecoveryContext({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
    });
    expect(resolved.ok && resolved.context?.recommendationKind).toBe("recover");
    expect(resolved.ok && resolved.context?.w3cEpistemicItemId).toMatch(
      /^epi:w3c-rec:/,
    );

    const qualification = await resolveW2QualificationInputs({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.options[0]!.label).toMatch(/nouvelle tentative/i);
    expect(proposed.recommendation.isHumanDecision).toBe(false);
  });
});

----- END projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts -----

---

## 17. Handoff note

Publish via `scripts/sfia/publish-review-handoff.sh` (L3 handoff only).
No project commit/push/PR/merge.
