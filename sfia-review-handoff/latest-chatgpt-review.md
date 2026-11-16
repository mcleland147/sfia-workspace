# SFIA Review Pack FULL — ML4D Sas Nora post-recette C1–C4
Date: 2026-11-16
GO: Morris CRITICAL — correctif intégré post-recette (DEV only)
Verdict: READY WITH RESERVES — SAS NORA POST-RECETTE CORRECTIONS IMPLEMENTED

## 1. GO / périmètre
- C1 intention durable vs goal de tour / renommage
- C2 questions ouvertes résolues retirées du courant
- C3 présentation + hauteur workspace
- C4 suppression parcours manuel Ajuster l’aperçu
- Pas de RECETTE, migration, D4 global, Figma write, PR/merge/STABLE/Gate C/ML5

## 2. Git Truth Check
| Item | Valeur |
| --- | --- |
| Branche | feat/next-ml4d-sas-nora-convergence-20261116 |
| HEAD départ | ec7405f323f86a0533dc507a1bfffc60ca1e5d0e |
| HEAD candidat | 6798219fdb37af1b463326dc7015901b43b04acd |
| Parent | ec7405f323f86a0533dc507a1bfffc60ca1e5d0e |
| Tree web | b3d001f212387349fc1af135046ee4dad2321aea |
| main | 997d4c4e8204993de7107552898c8cc08cd3b0ed |
| Handoff précédent | 89fc035c / blob 117be364 |
| RECETTE | ec7405f323f86a0533dc507a1bfffc60ca1e5d0e / 67akzrr6bFEp4YOh7aHD7 — INCHANGÉE |
| Ascendance | PASS |

## 3. Scénario Morris T1→T7 (recette utilisateur)
Accepté avec réserves. Anomalies C1–C4. Capacité conversation→création→continuité à préserver.

## 4. Causes vérifiées / corrections
| Id | Cause | Fix |
| --- | --- | --- |
| C1 | draftProjectionFromQualification mappait goal → intention | projectIntention structuré ; goal local ; merge si vide |
| C2 | merge sticky openQuestions + dump D4 OPEN UI | replace courant ; aperçu = projection.openQuestions |
| C3 | EXPLORING→first_intention ; max-height 655 | clarification après 1er msg ; flex fill shell |
| C4 | bouton/formulaire Ajuster | UI retirée ; PATCH API conservé (dette) |

## 5. Diffs
```
commit 6798219fdb37af1b463326dc7015901b43b04acd
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Nov 16 17:01:55 2026 +0100

    fix(next): post-recette Sas Nora C1–C4 cognitive and UX corrections

    Preserve durable projectIntention across renames, replace resolved open
    questions, fill workspace height, and remove the manual aperçu path.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../as-built-ml4d-sas-nora-convergence-20261116.md |  96 ++++------
 .../construction/delivery-history.md               |  15 ++
 .../web/src/app/dev/sas-visual/[state]/page.tsx    |  14 --
 .../src/app/preparations/[preparationId]/page.tsx  | 101 ----------
 .../src/components/figma/PreparationProposal.tsx   | 205 ++++++---------------
 .../web/src/components/figma/sas-presentation.ts   |  12 +-
 .../web/src/components/figma/tokens.css            |   7 +-
 .../conversation/fixture-semantic-qualify.ts       |  32 +++-
 .../web/src/domains/conversation/nora-adapter.ts   |  27 +--
 .../domains/conversation/semantic-qualification.ts |  15 ++
 .../web/src/domains/conversation/service.ts        |   1 +
 .../web/src/domains/preparation/projection.ts      |  23 ++-
 .../web/tests/e2e/d2-ack-loss-reconcile.spec.ts    |   9 +-
 .../web/tests/e2e/g4-b1-b4-correctifs.spec.ts      |  16 +-
 .../web/tests/e2e/g4-chat-first-sas.spec.ts        |  20 +-
 .../web/tests/e2e/helpers/g4-chat-first.ts         |  41 ++++-
 .../web/tests/e2e/intent-continuity-atlas.spec.ts  |  21 +--
 .../tests/e2e/ml4c-s05-independent-pending.spec.ts |   6 +-
 .../web/tests/e2e/ml4c-s05-real-api.spec.ts        |   6 +-
 .../web/tests/e2e/ml4d-sas-nora-projection.spec.ts |  46 +++--
 .../tests/e2e/project-surface-nav-intent.spec.ts   |  17 +-
 .../web/tests/e2e/ux004-portfolio-shell.spec.ts    |   6 +-
 .../tests/helpers/semantic-fixture-envelopes.ts    |   2 +-
 .../unit/nora-sas-maturation-instructions.test.ts  |   6 +-
 .../web/tests/unit/preparation-projection.test.ts  | 121 ++++++++++++
 .../web/tests/unit/sas-presentation.test.ts        |   8 +
 26 files changed, 433 insertions(+), 440 deletions(-)
```

### Diffs cœur (projection / qualification / présentation / proposal)
```
commit 6798219fdb37af1b463326dc7015901b43b04acd
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Nov 16 17:01:55 2026 +0100

    fix(next): post-recette Sas Nora C1–C4 cognitive and UX corrections

    Preserve durable projectIntention across renames, replace resolved open
    questions, fill workspace height, and remove the manual aperçu path.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx b/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
index 0855ba63..4fc7bb71 100644
--- a/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
@@ -2,7 +2,7 @@

 /**
  * Living D2 aperçu — single vertical panel aligned to Sas Nora Figma composition.
- * Create CTA lives inside this panel (frame 04). No separate authority card.
+ * Create CTA lives inside this panel (frame 04). Corrections flow via conversation only.
  */

 import type { PreparationProjection } from "@/domains/preparation/projection";
@@ -10,8 +10,6 @@ import { canCreateFromProjection } from "@/domains/preparation/projection";
 import type { SasPresentationCopy } from "./sas-presentation";
 import { shouldShowCreateProjectCta } from "./sas-presentation";

-export type ProposalOpenPoint = { id: string; statement: string };
-
 function statusLabel(status: string | undefined, sourceKind?: string): string {
   if (status === "PILOT_EXPRESSED") {
     return sourceKind === "PILOT_UI_EDIT" ? "Corrigé (inspection)" : "Exprimé";
@@ -43,21 +41,10 @@ export function PreparationProposal(props: {
   previewSummary: string;
   creationRevision: number;
   messageCount: number;
-  openPoints: ProposalOpenPoint[];
   projection: PreparationProjection | null;
   projectionFreshness?: "current" | "stale" | "unavailable" | "legacy";
   presentation: SasPresentationCopy;
   busy: boolean;
-  editing: boolean;
-  draftName: string;
-  draftSummary: string;
-  onDraftName: (v: string) => void;
-  onDraftSummary: (v: string) => void;
-  onStartConstitute: () => void;
-  onAdoptLastNoraSummary: () => void;
-  canAdoptLastNora: boolean;
-  onSaveProposal: () => void;
-  onCancelEdit: () => void;
   onCreateProject: () => void;
   status?: string;
 }) {
@@ -70,12 +57,10 @@ export function PreparationProposal(props: {
   const scope = projection?.initialScope?.value?.trim() || "";
   const assessment = projection?.suggestion?.assessment;
   const explanation = projection?.suggestion?.explanation?.trim() || "";
-  const openFromProjection = (projection?.openQuestions ?? []).filter((q) => q.value.trim());
-  const openFromKnowledge = props.openPoints;
-  const openCombined = [
-    ...openFromProjection.map((q) => q.value),
-    ...openFromKnowledge.map((o) => o.statement),
-  ].filter(Boolean);
+  // Current open set = D2 projection only (not the historical D4 OPEN catalogue).
+  const openCombined = (projection?.openQuestions ?? [])
+    .map((q) => q.value.trim())
+    .filter(Boolean);
   const hasLiving =
     Boolean(name) ||
     Boolean(intention) ||
@@ -86,8 +71,6 @@ export function PreparationProposal(props: {
     Boolean(props.previewSummary.trim());
   const canCreate = !created && canCreateFromProjection(projection, props.previewName);
   const stage = props.presentation.stage;
-  // CTA lives in the aperçu panel (Figma frame 04 composition). Eligibility is D2 only —
-  // Nora assessment must not gate the Pilote's right to create (SAS-F-07 / AF-06).
   const showCreateCta = shouldShowCreateProjectCta({ created, canCreate });

   const sections: Section[] = [];
@@ -116,26 +99,20 @@ export function PreparationProposal(props: {
     sections.push({
       key: "intention",
       label: "INTENTION CONSERVÉE",
-      value: name || intention || props.previewSummary.trim() || "Intention reprise",
-      testId: "prep-field-name",
-      provenance: projection?.name
-        ? statusLabel(projection.name.status, projection.name.source.kind)
-        : undefined,
+      value: intention || name || props.previewSummary.trim() || "Intention reprise",
+      testId: "prep-field-intention",
+      provenance: projection?.intention ? statusLabel(projection.intention.status) : undefined,
     });
-    if (outcome || intention || props.previewSummary.trim()) {
-      sections.push({
-        key: "acquis",
-        label: "ACQUIS",
-        value:
-          [intention || props.previewSummary.trim(), outcome, scope].filter(Boolean).join(" · ") ||
-          "Éléments déjà clarifiés",
-        testId: "prep-field-intention",
-      });
+    if (outcome) {
+      sections.push({ key: "outcome", label: "RÉSULTAT CONSERVÉ", value: outcome });
+    }
+    if (scope) {
+      sections.push({ key: "scope", label: "PÉRIMÈTRE CONSERVÉ", value: scope });
     }
     sections.push({
       key: "open",
-      label: "POINT EN SUSPENS",
-      value: openCombined[0] || "À préciser dans la conversation",
+      label: "POINTS TOUJOURS OUVERTS",
+      value: openCombined[0] || "Aucun point ouvert listé",
       tone: openCombined.length ? "amber" : "quiet",
     });
   } else {
@@ -224,109 +201,50 @@ export function PreparationProposal(props: {
         </h2>
         <p className="sas-preview-sub">Proposition évolutive de Nora · non autorisante</p>

-        {props.editing ? (
-          <div className="sas-preview-edit space-y-2" data-testid="prep-proposal-edit">
-            <p className="text-xs muted">
-              Ajustement explicite pour inspection — n&apos;est pas le parcours principal.
-            </p>
-            <label className="block text-xs muted" htmlFor="prep-prop-name">
-              Nom envisagé
-            </label>
-            <input
-              id="prep-prop-name"
-              className="input"
-              value={props.draftName}
-              onChange={(e) => props.onDraftName(e.target.value)}
-              placeholder="Nom du projet envisagé"
-              data-testid="prep-proposal-name"
-            />
-            <label className="block text-xs muted" htmlFor="prep-prop-summary">
-              Résumé inspecté
-            </label>
-            <textarea
-              id="prep-prop-summary"
-              className="textarea"
-              value={props.draftSummary}
-              onChange={(e) => props.onDraftSummary(e.target.value)}
-              placeholder="Intention, résultat visé, points ouverts…"
-              data-testid="prep-proposal-summary"
-            />
-            {props.canAdoptLastNora ? (
-              <button
-                type="button"
-                className="btn secondary"
-                onClick={props.onAdoptLastNoraSummary}
-                data-testid="prep-adopt-nora"
-              >
-                Reprendre le dernier message Nora comme résumé
-              </button>
-            ) : null}
-            <div className="flex flex-wrap gap-2">
-              <button
-                type="button"
-                className="btn"
-                disabled={props.busy}
-                onClick={props.onSaveProposal}
-                data-testid="prep-proposal-save"
-              >
-                Enregistrer pour inspection
-              </button>
-              <button
-                type="button"
-                className="btn secondary"
-                disabled={props.busy}
-                onClick={props.onCancelEdit}
+        <div
+          className="sas-preview-sections"
+          data-testid={hasLiving ? "prep-proposal-ready" : "prep-proposal-empty"}
+        >
+          {sections.map((section) => (
+            <div key={section.key} className="sas-preview-section">
+              <p className="sas-preview-label">{section.label}</p>
+              <p
+                className={`sas-preview-value${
+                  section.tone === "amber"
+                    ? " is-amber"
+                    : section.tone === "quiet"
+                      ? " is-quiet"
+                      : ""
+                }`}
+                data-testid={section.testId}
               >
-                Annuler
-              </button>
+                {section.value}
+              </p>
+              {section.provenance ? (
+                <span className="sas-preview-provenance" data-testid={`${section.testId}-provenance`}>
+                  · {section.provenance}
+                </span>
+              ) : null}
             </div>
-          </div>
-        ) : (
-          <div className="sas-preview-sections" data-testid={hasLiving ? "prep-proposal-ready" : "prep-proposal-empty"}>
-            {sections.map((section) => (
-              <div key={section.key} className="sas-preview-section">
-                <p className="sas-preview-label">{section.label}</p>
-                <p
-                  className={`sas-preview-value${
-                    section.tone === "amber"
-                      ? " is-amber"
-                      : section.tone === "quiet"
-                        ? " is-quiet"
-                        : ""
-                  }`}
-                  data-testid={section.testId}
-                >
-                  {section.value}
+          ))}
+          {openCombined.length > 1
+            ? openCombined.slice(1, 4).map((q, i) => (
+                <p key={`oq-${i}`} className="sas-preview-open-extra">
+                  · {q}
                 </p>
-                {section.provenance ? (
-                  <span className="sas-preview-provenance" data-testid={`${section.testId}-provenance`}>
-                    · {section.provenance}
-                  </span>
-                ) : null}
-              </div>
-            ))}
-            {openCombined.length > 1
-              ? openCombined.slice(1, 4).map((q, i) => (
-                  <p key={`oq-${i}`} className="sas-preview-open-extra">
-                    · {q}
-                  </p>
-                ))
-              : null}
-          </div>
-        )}
+              ))
+            : null}
+        </div>

-        {!props.editing ? (
-          <div
-            className={`sas-maturity ${stage === "base_sufficient" ? "sas-maturity-ok" : ""}`}
-            data-testid="prep-nora-assessment"
-          >
-            <p className="sas-maturity-title">{props.presentation.maturityTitle}</p>
-            <p className="sas-maturity-body">
-              {/* Nora qualitative advice stays visible at any stage; it never gates create. */}
-              {explanation || props.presentation.maturityBody}
-            </p>
-          </div>
-        ) : null}
+        <div
+          className={`sas-maturity ${stage === "base_sufficient" ? "sas-maturity-ok" : ""}`}
+          data-testid="prep-nora-assessment"
+        >
+          <p className="sas-maturity-title">{props.presentation.maturityTitle}</p>
+          <p className="sas-maturity-body">
+            {explanation || props.presentation.maturityBody}
+          </p>
+        </div>

         {showCreateCta ? (
           <div
@@ -352,21 +270,10 @@ export function PreparationProposal(props: {
           <p className="sas-preview-foot" data-testid="prep-create-unavailable">
             {created
               ? "Projet créé — continuité disponible dans l’espace projet."
-              : "Indiquez un nom de projet dans l’aperçu pour pouvoir créer."}
+              : "Indiquez un nom de projet dans la conversation pour pouvoir créer."}
           </p>
         )}

-        {!props.editing && !created ? (
-          <button
-            type="button"
-            className="btn secondary sas-preview-adjust"
-            onClick={props.onStartConstitute}
-            data-testid="prep-constitute"
-          >
-            Ajuster l&apos;aperçu
-          </button>
-        ) : null}
-
         <p className="sas-preview-meta muted text-xs sr-only" data-testid="prep-creation-revision">
           Révision création : {props.creationRevision}
           {props.projectionFreshness === "legacy"
diff --git a/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts b/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts
index b314201b..2c7246d4 100644
--- a/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts
+++ b/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts
@@ -31,14 +31,22 @@ const ASSESSMENT_TO_STAGE: Record<string, SasPresentationStage> = {
   BASE_SUFFICIENTE: "base_sufficient",
 };

+/**
+ * Presentation stage ≠ Nora cognitive assessment ≠ D2 create eligibility.
+ * EXPLORING after the first exchange still advances presentation to clarification
+ * so the chrome does not stay on « Première intention » during substantive dialogue.
+ */
 export function resolveSasPresentationStage(input: {
   isResumed: boolean;
   assessment: ProjectionAssessment | null | undefined;
   messageCount: number;
 }): SasPresentationStage {
   if (input.isResumed) return "resume";
-  if (input.assessment && ASSESSMENT_TO_STAGE[input.assessment]) {
-    return ASSESSMENT_TO_STAGE[input.assessment];
+  if (input.assessment === "BASE_SUFFICIENTE") return "base_sufficient";
+  if (input.assessment === "PROPOSAL") return "proposal";
+  if (input.assessment === "CLARIFYING") return "clarification";
+  if (input.assessment === "EXPLORING") {
+    return input.messageCount === 0 ? "first_intention" : "clarification";
   }
   if (input.messageCount === 0) return "first_intention";
   return "clarification";
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 48e32290..b99bbedf 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -123,7 +123,17 @@ export type PreparationAssessment = z.infer<typeof PreparationAssessmentSchema>;
 export const NoraTurnQualificationSchema = z.object({
   schemaVersion: z.literal(SEMANTIC_QUALIFICATION_SCHEMA_VERSION),
   status: QualificationStatusSchema,
+  /**
+   * Compréhension du tour courant (demande immédiate, reformulation locale).
+   * Ne pas confondre avec l'intention métier durable du projet.
+   */
   goal: z.string().max(800).default(""),
+  /**
+   * Intention métier durable du projet — distincte de goal / proposedProjectName.
+   * Chaîne vide = inchangée ce tour (D2 conserve la valeur antérieure).
+   * Renseigner uniquement pour établir ou corriger explicitement l'objectif fondateur.
+   */
+  projectIntention: z.string().max(800).default(""),
   /** Résultat envisagé lorsque réellement exprimé — ne pas inventer. */
   desiredOutcome: z.string().max(800).default(""),
   /** Périmètre initial lorsque réellement exprimé — ne pas inventer. */
@@ -134,6 +144,10 @@ export const NoraTurnQualificationSchema = z.object({
    */
   proposedProjectName: z.string().max(120).default(""),
   intents: z.array(QualifiedIntentItemSchema).max(12).default([]),
+  /**
+   * Questions encore ouvertes APRÈS ce tour.
+   * Liste vide intentionnelle = plus aucune question courante (ne pas réinjecter l'historique).
+   */
   clarifications: z.array(z.string().max(400)).max(8).default([]),
   replyDraft: z.string().max(12000).default(""),
   /** Appréciation qualitative de préparation (suggestion, jamais une autorité). */
@@ -223,6 +237,7 @@ export function unavailableQualification(reason: string, replyDraft = ""): NoraT
     schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
     status: "UNAVAILABLE",
     goal: "",
+    projectIntention: "",
     desiredOutcome: "",
     initialScope: "",
     proposedProjectName: "",
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/projection.ts b/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
index 0f3431a1..a6404436 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
@@ -185,8 +185,9 @@ export function mergeNoraDraftWithPrior(
     intention: mergeField(prior?.intention, draft.intention),
     desiredOutcome: mergeField(prior?.desiredOutcome, draft.desiredOutcome),
     initialScope: mergeField(prior?.initialScope, draft.initialScope),
-    openQuestions:
-      draft.openQuestions.length > 0 ? draft.openQuestions : (prior?.openQuestions ?? []),
+    // Successful qualification owns the CURRENT open list (empty = all resolved this turn).
+    // Do not sticky-reattach prior questions when Nora intentionally returns [].
+    openQuestions: draft.openQuestions,
     suggestion: draft.suggestion ?? prior?.suggestion ?? null,
   };
 }
@@ -200,10 +201,16 @@ export function draftProjectionFromQualification(input: {
   turnKey: string;
   qualificationStatus: string;
   goal: string;
+  /** Durable project intention — empty means unchanged this turn (preserve prior via merge). */
+  projectIntention?: string;
   desiredOutcome?: string;
   initialScope?: string;
   clarifications: string[];
   proposedProjectName: string | null;
+  /**
+   * Turn-local OPEN_POINT statements newly proposed in this qualification only.
+   * Do not pass the full historical D4 open-point catalogue here.
+   */
   openPointStatements?: string[];
   preparationAssessment?: ProjectionAssessment | null;
   preparationAssessmentExplanation?: string | null;
@@ -212,9 +219,19 @@ export function draftProjectionFromQualification(input: {

   const turnKey = input.turnKey;
   const nameRaw = input.proposedProjectName?.trim() || "";
-  const intentionRaw = input.goal.trim();
+  /**
+   * Intention slot = durable projectIntention when provided.
+   * Never map turn-local `goal` into intention when a name correction is present —
+   * that was the C1 failure mode (rename request overwrote métier intention).
+   * Bootstrap without projectIntention: use goal only when no proposedProjectName this turn.
+   */
+  const durableIntention = (input.projectIntention ?? "").trim();
+  const intentionRaw =
+    durableIntention ||
+    (!nameRaw ? input.goal.trim() : "");
   const outcomeRaw = (input.desiredOutcome ?? "").trim();
   const scopeRaw = (input.initialScope ?? "").trim();
+  // Current open set = this turn's clarifications (+ turn-local open-point proposals only).
   const openFromClarifications = input.clarifications
     .map((c) => c.trim())
     .filter(Boolean)
```

## 6. Tests
| Suite | Résultat |
| --- | --- |
| UNIT all | PASS 405 |
| PG create-project + preparation-patch | PASS 30 |
| BROWSER FAKE ml4d T1→T7 + g4-chat-first | PASS 6 |
| next build DEV | PASS jw9G3w66bIZxtpzFshlr6 |
| lint | PASS (warnings préexistants) |
| Nora LIVE nouveau candidat | NOT RUN / NOT PROVEN |
| Campagne pixel Figma | NOT RUN (Morris UX) |

## 7. Assertions discriminantes clés
- Rename: intention conserve chefs de projet ; name mis à jour ; pas de Retenir…
- Open questions: liste vide après résolution T3/T4
- EXPLORING + messages → présentation clarification
- prep-constitute / prep-proposal-edit count 0
- Create D2 only ; idempotence / conflict non régressés

## 8. ENV-01
DEV only. RECETTE figée. Aucune migration. Aucun LaunchAgent. Isolation 3102/5433 vs 3200/5434.

## 9. Manifeste candidat RECETTE (non déployé)
source_sha=6798219fdb37af1b463326dc7015901b43b04acd
tree_web=b3d001f212387349fc1af135046ee4dad2321aea
build_dev=jw9G3w66bIZxtpzFshlr6
schema=013_present
previous_recette_build=67akzrr6bFEp4YOh7aHD7
go_recette=REQUIRED_DISTINCT
package=0.0.0-dev

## 10. Dette D4 hors Sas
Compteurs Acquis/Ouverts, vues Sujets/Connaissance, capitalisation globale → revue espace projet (mandat séparé).

## 11. Réserves / gates
1. Morris UX candidat PENDING (GO RECETTE distinct).
2. Nora LIVE NOT PROVEN sur ce SHA.
3. PATCH API encore présent hors UI (compat tests/anciennes données).
4. Gate C OPEN ; STABLE NOT AVAILABLE ; NO RELEASE ; ML5 non autorisé.

## Verdict
READY WITH RESERVES — SAS NORA POST-RECETTE CORRECTIONS IMPLEMENTED
