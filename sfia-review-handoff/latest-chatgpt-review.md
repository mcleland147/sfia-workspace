# SFIA Review Pack — FULL

## 1. Identity

- **timestamp_utc:** 2026-09-09T13:45:11Z
- **cycle_id:** SFIA-STUDIO-PRODUCT-PROOF-CORR-QUAL-TO-GOVERNED-CYCLE-01
- **baseline:** a9f6c310a0826d0e5bd6f7264603382a86564db1
- **branch:** delivery/sfia-studio-product-proof-qual-to-governed-cycle
- **worktree:** /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- **type:** 8 — Delivery / implémentation
- **typology:** EVOL — Product Proof corrective
- **profile:** CRITICAL
- **ZERO NEW REAL:** YES

## 2. Morris GO consumed

- GO for bounded local Delivery corrective described in cycle prompt
- GO MORRIS — REUSE EXISTING CORRECTIVE WORKTREE — QUALIFICATION TO GOVERNED CYCLE
- Authorized: local commit of corrective if bars pass; handoff L3 only
- Forbidden: corrective branch push, PR, merge, OpenAI REAL, Cursor REAL, Task-App build, R2 write, doctrine/v3 adoption

## 3. Local Git Truth

| Check | Result |
| --- | --- |
| origin/main | a9f6c310a0826d0e5bd6f7264603382a86564db1 |
| corrective HEAD (pre-commit) | a9f6c310… |
| branch | delivery/sfia-studio-product-proof-qual-to-governed-cycle (no remote) |
| campaign worktree | PRESERVED READ-ONLY |
| source workspace dirty | PRESERVED (not modified by this cycle) |

## 4. Sources consumed

Process v2.6 templates/routing/checklist/guardrails; Convergence Build Doctrine + Roadmap; Product Completion 01+14; Doctrine v3 32–35 (NON ADOPTED); code seams listed in cycle prompt; prior greenfield observations OBS-01…07.

CKC Cycle 8: absent — fallback synthetic card + method v2.6 (no invented CKC).

## 5. Convergence qualification

- **capability:** Natural intention → proportionate qualification → governed next-cycle Recommendation
- **milestone:** PRODUCT PROOF — GREENFIELD FULL PRODUCT DOGFOOD — QUALIFICATION TO GOVERNED CYCLE TRANSITION CORRECTIVE
- **KEEP:** session, Nora Runner, structured Product turn + optional LR, materializer, LifecycleSurface, F2 candidate cycle path, Pilot START, global recommendProfile invariant
- **ADAPT:** F1 prompt boundary, intent formalization semantics, MW5 Pilote presentation, signal coherence for lifecycle formalization, conversation/Pourquoi presentation, Lifecycle refresh-on-answer
- **PROOF ONLY:** LPS/History — NO CHANGE REQUIRED
- **gap closed:** conversational qualification yields to structured NEXT_CYCLE Recommendation before silently doing the cycle; Pilote-safe presentation; false-Critical formalization dampened without weakening genuine Critical
- **next:** bounded REAL greenfield replay after ChatGPT Critical Review + distinct Morris REAL gate
- **exit proof:** DETERMINISTIC CORRECTIVE CANDIDATE
- **debt:** none intentional
- **runtime v3:** NON ADOPTED
- **R2:** still OPEN

## 6. Greenfield observations (campaign evidence ≠ Git)

OBS-01…OBS-07 as in cycle prompt (qualification depth; LR not materialized; Critical on formalize; MW5 leak; raw escapes; honest stop; LPS v1).

## 7. Root Cause Matrix

| ID | Seam | Cause | Patch | Test |
|---|---|---|---|---|
| OBS-01/06 | buildProjectSystemPrompt | Prompt denied cycle qualification while LR schema exists; no semantic boundary | LR contract + authority clarification | qualToGovernedCycle.presentation + prompt asserts |
| OBS-02 | F1 coerce null + Lifecycle mount-only | No emit guidance; no post-answer refresh | Prompt LR + ConversationSurface CustomEvent → LifecycleSurface refresh | BAR-08 existing LR tests + event wiring |
| OBS-03 | intent actionable + structuralChange | Formalize treated as F2/structural | intent informative examples + signal contract + lifecycle formalization dampener (not invariants.ts) | BAR-05/06 unit |
| OBS-04 | formatMw5AssistantText | Machine markers as user text | formatMw5PiloteText vs MachineText; session keeps machine | BAR-07 + MW5 product tests |
| OBS-05 | ConversationSurface / CKC derive | Raw content + engine codes in Pourquoi | formatNoraAssistantDisplayText + profileRationalePiloteLabel + CKC derive | BAR-11/12 |
| OBS-07 | LPS | Conversation ≠ Truth promotion | NO CHANGE | BAR-13 / existing #477 |

## 8. Architecture preservation

- Same Nora Runner / same structured output / same lifecycle store
- No second model / no prose parser / no migration / no new table
- #477 R8 NEXT_CYCLE ≠ Cycle creation — PRESERVED (lifecycleRecommendation.delivery R8 PASS)
- invariants.ts / recommendProfile — NOT MODIFIED

## 9. Qualification boundary correction

F1 prompt now: semantic boundary when continuing = doing next cycle → emit structured lifecycleRecommendation; no N-turn rule; no forced framing; may emit LR without Cycle/HD authority; must not claim “cannot record” when structured path available.

## 10. Profile / Critical correction

- Original cause: formalize → actionable F2 + structuralChange true → recommendProfile Critical
- Correction: formalize Recommendation = informative (F1); signals describe project work impact not bookkeeping; dampen lone structuralChange on lifecycle formalization envelope; genuine security/arch/data/irreversible preserved
- global recommendProfile unchanged

## 11. MW5 presentation correction

Pilote text business-first; machine markers retained for session/audit via formatMw5MachineText; default challenges no longer say “Truth C”.

## 12. Conversation / rationale presentation

UI boundary formatter unescapes `\\n` / softens `**`; Pourquoi maps critical_signal_present; technical rationale under Détails techniques; CKC derive no longer prepends engine codes when guidance exists.

## 13. Lifecycle Recommendation materialization

Existing #477 path reused. LifecycleSurface listens for `sfia:project-assistant-answered` to refresh CURRENT projection. NEXT_CYCLE still does not create CycleInstance.

## 14. LPS / History

**NO CHANGE REQUIRED** — conversation/Recommendation remain non-Truth; activeCycleInstanceId unchanged by LR alone.

## 15. Tests

```
npm run typecheck → PASS
npm run lint → PASS
npm run build → PASS
vitest project-assistant + oa/cycle + nora-cognitive-runtime → 105 files / 1441 tests PASS
vitest full suite → 318 passed | 17 skipped files; 3294 passed | 135 skipped tests
```

## 16. Runtime visual proof

- Mode: deterministic presentation fixture using production formatters (file:// HTML + Playwright Chromium)
- Disclosure: Full `/studio` interactive path requires Better Auth session; Playwright e2e historically has no auth bypass — honest limitation
- Viewport: 1440×1024 + 390×844 non-regression
- Paths: `.tmp-sfia-review/runtime-captures/qual-to-governed-cycle/01-presentation-desktop.png` (sha256 5e352e896d53cd8eaa7a827fc2612369e46e6df9d269322adc07c029334f42f7), `02-presentation-390.png`
- Observations: no literal `\\n`/`\\*\\*`; no MW5/Truth C/count= in primary MW5 card; business Pourquoi; Lifecycle Recommendation CURRENT ≠ décision

## 17. Modified files (roles)

M	projects/sfia-studio/app/__tests__/project-assistant/mw5.challenge.clarification.product.d0.test.ts
M	projects/sfia-studio/app/e2e/studio-option-a.spec.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
M	projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
M	projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts
M	projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/criticalChallengeClarification.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
?? projects/sfia-studio/app/e2e/studio-qual-to-governed-visual.spec.ts

### Diff excerpts (exploitable)
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 80e253d8..7dfcb6ab 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -1,22 +1,25 @@
 "use client";

-import { useId } from "react";
 import {
   BOUNDED_RUNNING_REFRESH_ACTION,
   BOUNDED_RUNNING_REFRESH_HELP,
   BOUNDED_RUNNING_REFRESH_TITLE,
   G_UX_08_AMEND_DEFERRED_MESSAGE,
+  SFIA_ASSISTANT_ANSWERED_EVENT,
   attemptStatusUserLabel,
   confirmationPathChip,
   contractUserFacingFacts,
   evidenceVerifiedUserLabel,
   executionSemanticKind,
   executionSemanticUserLabel,
+  formatNoraAssistantDisplayText,
   isBoundedRunningAttemptRefreshable,
   postExecutionUserSummary,
+  profileRationalePiloteLabel,
 } from "@/features/project-assistant/presentationLabels";
 import type { AssistantToolEventDto } from "@/features/project-assistant/types";
 import type { F2DecisionKind } from "@/features/project-assistant/f2/types";
+import { useEffect, useId } from "react";
 import type { ProductConversationController } from "../hooks/useProductConversation";
 import styles from "./ConversationSurface.module.css";

@@ -109,6 +112,13 @@ export function ConversationSurface({
     retryLastUserMessage,
   } = controller;

+  // Notify LifecycleSurface after Nora answers so CURRENT LR can reproject.
+  useEffect(() => {
+    if (uiState !== "ANSWERED") return;
+    if (typeof window === "undefined") return;
+    window.dispatchEvent(new CustomEvent(SFIA_ASSISTANT_ANSWERED_EVENT));
+  }, [uiState, messages.length]);
+
   const attemptLabel = f3Execute
     ? attemptStatusUserLabel(f3Execute.attempt.status)
     : null;
@@ -248,7 +258,11 @@ export function ConversationSurface({
                 <p className={styles.bubbleAuthor}>
                   {message.role === "user" ? "Pilote" : "Nora"}
                 </p>
-                <p className={styles.bubbleText}>{message.content}</p>
+                <p className={styles.bubbleText}>
+                  {message.role === "assistant"
+                    ? formatNoraAssistantDisplayText(message.content)
+                    : message.content}
+                </p>
               </div>
             </article>
           ))
@@ -309,12 +323,20 @@ export function ConversationSurface({
             </div>
             <div className={styles.factWide}>
               <dt>Pourquoi</dt>
-              <dd data-testid="f2-rationale">{f2.qualification.rationale}</dd>
+              <dd data-testid="f2-rationale">
+                {profileRationalePiloteLabel(f2.qualification.rationale)}
+              </dd>
             </div>
           </dl>
           <details className={styles.details}>
             <summary>Détails techniques</summary>
             <dl className={styles.facts}>
+              <div className={styles.factWide}>
+                <dt>Rationale technique</dt>
+                <dd data-testid="f2-rationale-technical">
+                  {f2.qualification.rationale}
+                </dd>
+              </div>
               <div className={styles.factWide}>
                 <dt>Identifiant de cycle</dt>
                 <dd>{f2.qualification.cycleTypeId}</dd>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
index fcf0fe75..3409d00f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
@@ -6,6 +6,7 @@ import {
   projectAssistantPilotLifecycleProjection,
 } from "@/features/project-assistant/actions";
 import type { PilotLifecycleProjection } from "@/lib/oa/cycle";
+import { SFIA_ASSISTANT_ANSWERED_EVENT } from "@/features/project-assistant/presentationLabels";
 import {
   lifecycleCtaPresentation,
   lifecycleStatusBadge,
@@ -48,6 +49,16 @@ export function LifecycleSurface({
     void refresh();
   }, [refresh]);

+  useEffect(() => {
+    const onAnswered = () => {
+      void refresh();
+    };
+    window.addEventListener(SFIA_ASSISTANT_ANSWERED_EVENT, onAnswered);
+    return () => {
+      window.removeEventListener(SFIA_ASSISTANT_ANSWERED_EVENT, onAnswered);
+    };
+  }, [refresh]);
+
   async function runAction(
     action: "START" | "PAUSE" | "RESUME" | "FINALIZE" | "CANCEL" | "REEVALUATE",
     opts?: { requiresReplanHumanDecision?: boolean },
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index feba58f9..512c2f4e 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -7,9 +7,11 @@ import {

 /**
  * Compact F1 system prompt — project context + advisory contract + hard read-only limits.
- * No F2 qualification, no Cursor, no write, no durable persistence claims.
+ * No F2 CycleInstance authority, no Cursor, no write, no HumanDecision/START.
+ * Structured lifecycle Recommendation emission is allowed (authority none) via Product turn output.
  * CORR-PROOF-02 B1 — positive advisory initiative for ordinary incomplete requests.
  * CORR-PROOF-03 E1 — Studio method identity + optional non-mutating method context.
+ * QUAL-TO-GOVERNED-CYCLE — semantic boundary before silent pre-cycle deepening.
  */
 export function buildProjectSystemPrompt(
   project: ProjectAssistantContextDto,
@@ -54,7 +56,11 @@ export function buildProjectSystemPrompt(
   return [
     "Tu es Nora, partenaire de réflexion projet/produit du Project Workspace.",
     "Périmètre : ANALYSE / CONVERSATION / CONSEIL / LECTURE SEULE.",
-    "Tu n'as aucune autorité de décision, d'exécution Cursor, d'écriture Git/GitHub, ni de qualification de cycle SFIA.",
+    "Tu n'as aucune autorité de décision Pilote, d'exécution Cursor, d'écriture Git/GitHub,",
+    "ni de création / START / HumanDecision / CycleInstance actif.",
+    "Tu PEUX émettre une Recommendation lifecycle structurée SANS autorité (champ lifecycleRecommendation)",
+    "lorsque la frontière sémantique ci-dessous est atteinte — le serveur valide et matérialise ;",
+    "émettre ≠ qualifier formellement un CycleInstance ≠ décider.",
     "Une intention utilisateur n'est jamais une autorisation d'exécution.",
     "",
     "=== IDENTITÉ SFIA STUDIO (priorité source) ===",
@@ -89,6 +95,22 @@ export function buildProjectSystemPrompt(
     "Vérité Project courante + doctrine Studio outrankent les prémisses conversationnelles obsolètes (sans réécrire l'historique).",
     "Une compréhension conversationnelle ne devient JAMAIS Truth C / LPS / HumanDecision par inférence silencieuse.",
     "",
+    "=== FRONTIÈRE QUALIFICATION → RECOMMANDATION DE CYCLE (sémantique) ===",
+    "Pas de règle « après N messages ». Pas de « toujours Cadrage en premier ».",
+    "Intention naturelle incomplète : reste advisory ; au plus UNE clarification ciblée pertinente.",
+    "Lorsque (1) le besoin est assez compris pour identifier avec confiance le prochain type de cycle,",
+    "(2) continuer approfondir reviendrait à effectuer substantiellement ce cycle,",
+    "(3) aucun cycle actif ne couvre déjà ce travail :",
+    "→ cesse l'approfondissement pré-cycle ; produis narrative + lifecycleRecommendation structurée.",
+    "lifecycleRecommendation (si émise) : intent NEXT_CYCLE ou FINALIZE_CURRENT_CYCLE ;",
+    "authority conceptuelle aucune ; isHumanDecision false ; statement et rationale lisibles Pilote ;",
+    "targetCycleTypeId seulement s'il est supportable (jamais inventé ; jamais forcé cyc:framing).",
+    "Si plusieurs cycles sont vraiment plausibles ou le contexte est insuffisant :",
+    "clarification ciblée OU lifecycleRecommendation = null — pas de choix arbitraire.",
+    "Ne dis PAS « je ne peux pas l'enregistrer dans Studio » si le chemin structured Recommendation est disponible.",
+    "Si tu émets lifecycleRecommendation : le serveur peut la matérialiser ; ne prétends jamais qu'elle est",
+    "enregistrée si tu n'as pas de confirmation produit ; ne crée pas de CycleInstance / HD / START.",
+    "",
     "=== LIMITES D'AUTORITÉ (strict) ===",
     "Distingue vérité courante / historique / superseded / réserve ouverte.",
     "Tu peux utiliser uniquement les outils de lecture (Git/GitHub read) exposés.",
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index daaf87d3..fb8c859c 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -409,6 +409,9 @@ Exemples informative:
 - « Donne-moi les risques avant que je décide. »
 - « Peux-tu m'aider à créer cette application ? » (avec ou sans détails MVP complets)
 - « J'aimerais créer un outil pour suivre mes contrats » / « tu ferais quoi comme MVP ? »
+- « Quelle est la meilleure prochaine étape méthodologique ? » / « Que me recommandes-tu comme prochain cycle ? »
+- « Formalise maintenant dans Studio la prochaine étape que tu me recommandes, afin que je puisse la décider. »
+  (effet = Recommendation lifecycle advisory pour décision Pilote — PAS création de CycleInstance)
 - Repository READ / résumé / recherche / vérité Git SANS mutation ni qualification de cycle.

 actionable — l'effet demandé est une opération SFIA gouvernée (qualifier/créer/changer un CycleInstance ; créer une proposition F2 parce que l'utilisateur demande une transition de processus ; préparer un changement structurel Project nécessitant une transition d'état ; capturer/préparer un workflow de décision où une qualification de cycle est réellement requise) ET candidateCycleTypeId + signals sont supportables.
@@ -416,6 +419,7 @@ Exemples actionable:
 - « Qualifie ce chantier en cycle Delivery et prépare la proposition. »
 - « Crée le cycle correspondant et prépare le passage au prochain gate. »
 - « Prépare l'ExecutionContract pour cette décision déjà enregistrée. »
+Ne PAS classer actionable uniquement parce que le Pilote demande d'enregistrer / formaliser une Recommendation lifecycle advisory.

 execution_request — uniquement si l'utilisateur demande explicitement une exécution / mutation / action externe franchissant la frontière d'exécution.
 Exemple: « Exécute ce contrat. »
@@ -479,12 +483,19 @@ JAMAIS Truth C, Evidence, HumanDecision, GO, Confirmation ou autorité.
 missing/unknown/insufficient ⇒ le challenge n'est PAS satisfait (fail-closed).
 Ne PAS inventer un challenge absent du message.

-=== Qualification signals (effet réel, pas le label utilisateur) ===
+=== Qualification signals (effet réel du chantier projet, pas le label utilisateur) ===
+Les signals décrivent l'impact matériel réel du travail projet sous-jacent — PAS le simple fait qu'une
+mutation de bookkeeping lifecycle / formalisation de Recommendation / candidate formalization soit durable.
+Formaliser / matérialiser une Recommendation NEXT_CYCLE ou un enregistrement de processus advisory
+sans impact sécurité / architecture / données / irréversibilité / changement structurel produit établi
+⇒ structuralChange, securityImpact, architectureImpact, dataImpact, irreversible = false.
+Ne PAS assimiler « formaliser une Recommendation dans Studio » à « changement structurant du Project ».
 Si la demande est uniquement un wording / libellé d'interface, explicitement sans impact sur le comportement, les données, l'architecture, la sécurité, l'autorité, l'exécution et sans irréversibilité : structuralChange, securityImpact, architectureImpact, dataImpact, irreversible = false ; lowRiskBounded = true lorsqu'établi.
 Un utilisateur qui QUALIFIE verbalement une opération de « cosmétique » ou « wording » ne rend PAS une mutation structurante, de données, d'architecture, de sécurité ou irréversible cosmétique.
 Classifie d'après l'effet réel demandé, pas le label donné par l'utilisateur.
 Le seul mot « cosmétique » ou « wording » ne force aucun signal safe.
 Silence sur sécurité ou irréversibilité n'est PAS une preuve d'absence d'impact.
+Sécurité réelle / architecture structurante / impact données / action irréversible → conserver les signals critiques correspondants.

 === ORIENTATION MÉTHODE (CORR-PROOF-03 E1 — cognitive only) ===
 Pour une demande informative de conseil / méthode projet, lorsque le type de travail courant est raisonnablement
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts b/projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts
index 17619441..ce6b0a26 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/qualificationSignalCoherence.ts
@@ -34,7 +34,10 @@ export type QualificationSignalCoherenceReason =
   | "unknown_substantive_residual"
   | "signals_already_safe"
   | "false_critical_neutralized"
-  | "safe_cosmetic_envelope_confirmed";
+  | "safe_cosmetic_envelope_confirmed"
+  | "not_lifecycle_formalization_envelope"
+  | "genuine_critical_preserved"
+  | "false_structural_lifecycle_formalization_neutralized";

 export type CosmeticSafeClauseRole =
   | "cycle_meta"
@@ -42,12 +45,34 @@ export type CosmeticSafeClauseRole =
   | "no_impact"
   | "governance";

+export type LifecycleFormalizationClauseRole =
+  | "lifecycle_rec_formalize"
+  | "decision_handoff"
+  | "no_product_critical_impact"
+  | "governance";
+
+/** Neutralize structuralChange only — do not invent lowRiskBounded/Light. */
+export const LIFECYCLE_FORMALIZATION_DAMPENED_SIGNALS: Pick<
+  F2QualificationSignals,
+  | "structuralChange"
+  | "securityImpact"
+  | "architectureImpact"
+  | "dataImpact"
+  | "irreversible"
+> = {
+  structuralChange: false,
+  securityImpact: false,
+  architectureImpact: false,
+  dataImpact: false,
+  irreversible: false,
+};
+
 export type QualificationSignalCoherenceResult = {
   signals: F2QualificationSignals;
   cosmeticSafeToSuppress: boolean;
   reason: QualificationSignalCoherenceReason;
   residual: string;
-  recognizedRoles: CosmeticSafeClauseRole[];
+  recognizedRoles: Array<CosmeticSafeClauseRole | LifecycleFormalizationClauseRole>;
 };

 const ARTICLE = "(?:le |la |les |l['’]|the )?";
@@ -76,6 +101,23 @@ const GOVERNANCE_RES: readonly RegExp[] = [
   /\baucune\s+ex[eé]cution\b/i,
 ];

+/** Effect = record/formalize advisory lifecycle recommendation for Pilote decision. */
+const LIFECYCLE_REC_FORMALIZE_RES: readonly RegExp[] = [
+  /\b(?:formalise|formaliser|enregistre|enregistrer|mat[eé]rialise|mat[eé]rialiser)\b[\s\S]{0,80}\b(?:recommandation|prochaine\s+[eé]tape)\b/i,
+  /\b(?:recommandation|prochaine\s+[eé]tape)\b[\s\S]{0,80}\b(?:formalise|formaliser|enregistre|enregistrer|mat[eé]rialise|mat[eé]rialiser)\b/i,
+];
+
+const DECISION_HANDOFF_RES: readonly RegExp[] = [
+  /\b(?:afin|pour)\s+que\s+je\s+(?:puisse\s+)?(?:la\s+)?d[eé]cider\b/i,
+  /\bsans\s+(?:cr[eé]er|d[eé]marrer|activer)\s+(?:de\s+|un\s+)?cycle\b/i,
+  /\brecommandation\s*(?:n['’]est\s+pas|≠|!=)\s*(?:une\s+)?d[eé]cision\b/i,
+];
+
+const NO_PRODUCT_CRITICAL_IMPACT_RES: readonly RegExp[] = [
+  /\bsans\s+(?:impact\s+)?(?:s[eé]curit[eé]|security|architecture|donn[eé]es|data|irr[eé]versib)/i,
+  /\bwithout\s+(?:security|architecture|data|irreversib)/i,
+];
+
 const CONNECTOR_OR_PUNCT_RE =
   /[.,;:!?()[\]«»""''’]+|\b(?:et|and|puis|then|ou|or|ni)\b/gi;

@@ -215,36 +257,133 @@ function signalsAlreadySafe(signals: F2QualificationSignals): boolean {
 /**
  * Neutralize false Critical provider signals only when the request is a
  * positively proven closed-world pure-cosmetic envelope. Otherwise return
- * the exact original provider signals.
+ * the exact original provider signals — except a bounded lifecycle-formalization
+ * dampener that clears structuralChange alone when other critical impacts are absent.
  */
 export function reconcileQualificationSignals(input: {
   userContent: string;
   signals: F2QualificationSignals;
 }): QualificationSignalCoherenceResult {
   const classification = classifyClosedWorldCosmeticRequest(input.userContent);
-  if (!classification.cosmeticSafeToSuppress) {
+  if (classification.cosmeticSafeToSuppress) {
+    if (signalsAlreadySafe(input.signals)) {
+      return {
+        signals: input.signals,
+        cosmeticSafeToSuppress: true,
+        reason: "signals_already_safe",
+        residual: classification.residual,
+        recognizedRoles: classification.recognizedRoles,
+      };
+    }
     return {
-      signals: input.signals,
-      cosmeticSafeToSuppress: false,
-      reason: classification.reason,
+      signals: { ...COSMETIC_SAFE_SIGNALS },
+      cosmeticSafeToSuppress: true,
+      reason: "false_critical_neutralized",
       residual: classification.residual,
       recognizedRoles: classification.recognizedRoles,
     };
   }
-  if (signalsAlreadySafe(input.signals)) {
+
+  const lifecycle = classifyLifecycleFormalizationRequest(input.userContent);
+  if (lifecycle.lifecycleFormalizationEnvelope) {
+    const s = input.signals;
+    if (
+      s.securityImpact === true ||
+      s.architectureImpact === true ||
+      s.dataImpact === true ||
+      s.irreversible === true
+    ) {
+      return {
+        signals: s,
+        cosmeticSafeToSuppress: false,
+        reason: "genuine_critical_preserved",
+        residual: lifecycle.residual,
+        recognizedRoles: lifecycle.recognizedRoles,
+      };
+    }
+    if (s.structuralChange !== true) {
+      return {
+        signals: s,
+        cosmeticSafeToSuppress: false,
+        reason: "signals_already_safe",
+        residual: lifecycle.residual,
+        recognizedRoles: lifecycle.recognizedRoles,
+      };
+    }
     return {
-      signals: input.signals,
-      cosmeticSafeToSuppress: true,
-      reason: "signals_already_safe",
-      residual: classification.residual,
-      recognizedRoles: classification.recognizedRoles,
+      signals: {
+        ...s,
+        ...LIFECYCLE_FORMALIZATION_DAMPENED_SIGNALS,
+        lowRiskBounded: s.lowRiskBounded,
+      },
+      cosmeticSafeToSuppress: false,
+      reason: "false_structural_lifecycle_formalization_neutralized",
+      residual: lifecycle.residual,
+      recognizedRoles: lifecycle.recognizedRoles,
     };
   }
+
   return {
-    signals: { ...COSMETIC_SAFE_SIGNALS },
-    cosmeticSafeToSuppress: true,
-    reason: "false_critical_neutralized",
+    signals: input.signals,
+    cosmeticSafeToSuppress: false,
+    reason: classification.reason,
     residual: classification.residual,
     recognizedRoles: classification.recognizedRoles,
   };
 }
+
+/**
+ * Bounded closed-world classifier: advisory lifecycle recommendation formalization
+ * for Pilote decision — not a Task-App-specific phrase, not product Critical work.
+ */
+export function classifyLifecycleFormalizationRequest(userContent: string): {
+  lifecycleFormalizationEnvelope: boolean;
+  residual: string;
+  recognizedRoles: LifecycleFormalizationClauseRole[];
+} {
+  let cursor = normalizeRequest(userContent);
+  const recognizedRoles: LifecycleFormalizationClauseRole[] = [];
+  const specs: Array<{
+    role: LifecycleFormalizationClauseRole;
+    res: readonly RegExp[];
+  }> = [
+    { role: "lifecycle_rec_formalize", res: LIFECYCLE_REC_FORMALIZE_RES },
+    { role: "decision_handoff", res: DECISION_HANDOFF_RES },
+    { role: "no_product_critical_impact", res: NO_PRODUCT_CRITICAL_IMPACT_RES },
+    { role: "governance", res: GOVERNANCE_RES },
+  ];
+  for (let i = 0; i < 32; i += 1) {
+    let best: {
+      start: number;
+      end: number;
+      role: LifecycleFormalizationClauseRole;
+    } | null = null;
```

### Untracked test file summary
- `qualToGovernedCycle.presentation.d0.test.ts` — BAR-05/06/07/11/12 + prompt contracts
- `studio-qual-to-governed-visual.spec.ts` — optional Studio e2e (requires auth session)

## 18. Git diff / commit

- local commit: `88e4921bd5041efaf0bf66edc2a455613e1ddb37`
- message: `fix(sfia-studio): govern qualification-to-cycle transition`
- ahead of origin/main: 1 commit
- corrective branch push: NOT DONE (forbidden)
- diff: 14 files, +626 / −33

## 19. Fake / Real qualification

- ZERO NEW REAL
- Deterministic/fake tests + presentation fixture
- OpenAI/Cursor REAL not consumed
- DETERMINISTIC CORRECTIVE CANDIDATE PROVEN
- LIVE GREENFIELD REPLAY NOT YET PROVEN

## 20. Reserves / anti-claims

- Does NOT claim Product Proof COMPLETE / REAL corrective proven / R2 closed / runtime v3 ADOPTED / all Nora qualification solved / full /studio auth’d visual dogfood
- RESERVE: full authenticated Studio browser exercise deferred to Morris session / future live gate
- RESERVE-UX-01 / RESERVE-PROOF-01 remain OPEN (untouched)

## 21. Next gate

GO MORRIS — GREENFIELD CORRECTIVE BOUNDED LIVE REPLAY — only if ChatGPT Critical Review accepts this deterministic candidate. First OpenAI live turn = distinct REAL gate. Do not auto-authorize.

## 22. Final verdict

**QUALIFICATION → GOVERNED CYCLE TRANSITION CORRECTIVE — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW**

- ZERO NEW REAL
- LIVE GREENFIELD REPLAY NOT YET PROVEN
- R2 EXECUTOR GAP STILL OPEN
- RUNTIME V3 NON ADOPTED

---

## ChatGPT Critical Review instruction

Lire `sfia-review-handoff/latest-chatgpt-review.md` depuis `origin/sfia/review-handoff` et effectuer une Critical Review de **SFIA-STUDIO-PRODUCT-PROOF-CORR-QUAL-TO-GOVERNED-CYCLE-01**.

Vérifier particulièrement les 25 points du prompt cycle (baseline a9f6c310, scope global, semantic boundary sans N-turn, pas toujours Cadrage, F1 structured LR, no second model, no prose parser, NEXT_CYCLE ≠ CycleInstance, no HD/START auto, false Critical fixed without weakening genuine Critical, invariants untouched, MW5 not in primary UX, formatting sans HTML unsafe, F2 Pourquoi business-first, LPS unchanged, reload/currentness, #476/#477 non-régressés, runtime capture, ZERO NEW REAL, no Task-App built, R2 OPEN, runtime v3 NON ADOPTED, exploitable diff, no parallel architecture).

Ne pas autoriser le bounded live replay automatiquement.
