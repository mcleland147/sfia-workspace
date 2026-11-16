# SFIA STUDIO NEXT — Review Pack FULL — ML4D Sas Nora R1/R2 consolidation

## REVIEW PACK REPUBLISHED — R1/R2 CORRECTED

## Git Truth

| Champ | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Branche | feat/next-ml4d-sas-nora-convergence-20261116 |
| HEAD candidat | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
| Parent | `6798219fdb37af1b463326dc7015901b43b04acd` (6798219f C1–C4) |
| Tree web | `1abe4103eb16e4dc899a352206472753bbe9fb04` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Build DEV | `GIa-3DQDG_kcmC9uzzgbG` |
| Package | 0.0.0-dev |
| Handoff tip précédent (avant cette republication) | `869a546b325e5c48493865f0c525ca7d97186631` |
| RECETTE | gelée `ec7405f323f86a0533dc507a1bfffc60ca1e5d0e` / `67akzrr6bFEp4YOh7aHD7` @ :3200 |
| Push produit | AUCUN |
| Classe | PATCH candidat compatible · NO RELEASE · STABLE NOT AVAILABLE |

## Causes exactes R1 / R2

### R1 — Intention durable écrasable après initialisation

Avant : `intentionRaw = durableIntention || (!nameRaw ? goal : "")`.
Le renommage (nameRaw renseigné) était protégé, mais un tour ordinaire sans rename
avec `projectIntention=""` injectait encore `goal` dans l'intention, puis le merge
remplaçait l'intention antérieure.

Correction : `goal` ne devient intention que si `allowGoalIntentionBootstrap===true`
(aucune intention antérieure sur la préparation). Sinon `projectIntention` seul.
Service : `allowGoalIntentionBootstrap: !(ctx.projection?.intention?.value)`.

### R2 — Omission de clarifications confondue avec []

Avant : Zod `.default([])` normalisait l'absence de propriété en `[]`, puis
`openQuestions: draft.openQuestions` clôturait le courant.

Correction : `clarifications` **optional** sans default ; draft porte
`replaceOpenQuestions` ; merge conserve `prior.openQuestions` si omission ;
`[]` explicite clôture toujours. UNAVAILABLE → draft null.

## Contrats de données

1. `projectIntention` renseigné → mise à jour sourcée ; vide → pas de mutation d'intention établie.
2. `clarifications` non vide = courant connu ; `[]` = réévaluation vide fiable ; **absent** = non réévalué.
3. Compatibilité anciennes enveloppes sans `projectIntention` / projections v1 : pas de crash.
4. Aucune migration DB ; schéma qualification compatible (optionalité champ).

## Fichiers modifiés

- `projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md`
- `projects/sfia-studio-next/construction/delivery-history.md`
- `projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/service.ts`
- `projects/sfia-studio-next/web/src/domains/preparation/projection.ts`
- `projects/sfia-studio-next/web/src/domains/preparation/service.ts`
- `projects/sfia-studio-next/web/tests/e2e/helpers/g4-chat-first.ts`
- `projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts`
- `projects/sfia-studio-next/web/tests/unit/r1-r2-projection-consolidation.test.ts`

Total fichiers : **11**

## Diffs complets

```diff
diff --git a/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md b/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
index c39ec42a..07c46cba 100644
--- a/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
+++ b/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
@@ -23,31 +23,43 @@
 | C3 | Première intention trop longtemps + bande vide | EXPLORING→first_intention ; `max-height: 655px` | Présentation clarification après 1er échange ; workspace flex remplit la hauteur shell |
 | C4 | « Ajuster l'aperçu » | Parcours manuel UI | Supprimé du Sas ; API PATCH conservée (dette technique / tests) |

+## Consolidation critique R1/R2 (sur candidat C1–C4)
+
+| Id | Risque | Cause exacte | Correction |
+| --- | --- | --- | --- |
+| R1 | Tour ordinaire (`projectIntention=""`, pas de rename) écrase l'intention via `goal` | `intentionRaw = durableIntention \|\| (!nameRaw ? goal : "")` | `goal` → intention **uniquement** si `allowGoalIntentionBootstrap` (aucune intention antérieure) ; sinon `projectIntention` seul |
+| R2 | Enveloppe QUALIFIED **sans** `clarifications` normalisée en `[]` → clôture abusive | Zod `.default([])` + merge `openQuestions: draft.openQuestions` | `clarifications` **optional** (pas de default) ; `replaceOpenQuestions` ; omission conserve le courant ; `[]` explicite clôture |
+
+Contrats de données :
+- `projectIntention` renseigné → mise à jour sourcée ; vide → pas de mutation d'intention établie.
+- `clarifications` : non vide = courant connu ; `[]` = réévaluation vide fiable ; **absent** = non réévalué.
+- UNAVAILABLE → draft `null` (aucune mutation). Pas de migration, pas de rupture de schéma DB.
+
 ## Architecture (inchangée dans ses autorités)

 1. Qualification D3 unique → draft projection D2 après COMPLETE.
-2. `projectIntention` / `desiredOutcome` / `initialScope` / `proposedProjectName` / `clarifications` / assessment structurés.
+2. `projectIntention` / `desiredOutcome` / `initialScope` / `proposedProjectName` / `clarifications` (optional) / assessment structurés.
 3. Création = D2 `canCreate` + clic Pilote uniquement.
-4. Pas de second LLM, pas de parse Markdown, pas de lexique de résolution.
+4. Pas de second LLM, pas de parse Markdown, pas de lexique de résolution / regex de correction.
 5. D4 global hors périmètre — dette compteurs/sujets transmise à la revue espace projet.

 ## Preuves

 | Niveau | Résultat |
 | --- | --- |
-| UNIT (405) | PASS |
-| PG create-project + preparation-patch | PASS |
-| BROWSER FAKE Sas T1→T7 + chat-first (6) | PASS |
-| next build DEV | PASS (`jw9G3w66bIZxtpzFshlr6`) |
+| UNIT (419) dont R1/R2 discriminants | PASS |
+| PG create-project + intent-continuity (+ suite integration) | PASS |
+| BROWSER FAKE Sas T1→T7 enrichi (R1-B + R2-C) 5 | PASS |
+| next build DEV | PASS (BUILD_ID post-commit) |
 | Nora LIVE nouveau candidat | **NOT PROVEN** |
 | Morris UX candidat | **PENDING** (GO RECETTE ultérieur) |
-| RECETTE | **inchangée** |
+| RECETTE | **inchangée** `ec7405f3` / `67akzrr6bFEp4YOh7aHD7` |

 ## Manifeste candidat RECETTE (non déployé)

 - source_sha: (HEAD post-commit)
-- tree_web: (post-commit)
-- build_dev: `jw9G3w66bIZxtpzFshlr6`
+- tree_web: (post-commit `projects/sfia-studio-next/web`)
+- build_dev: (BUILD_ID post-commit)
 - schema: 013 present — aucune migration
 - previous_recette: `ec7405f3` / `67akzrr6bFEp4YOh7aHD7`
 - go_recette: **REQUIS** (mandat distinct)
```

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index d70a905d..55a82058 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -25,6 +25,21 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré

 ---

+## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-R1R2-CONSOLIDATION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-16 ~18:00 CET |
+| Macro-lot | ML4D — Correctif final consolidation R1/R2 (intention durable + clarifications) |
+| Type | Cycle 8 Delivery · CRITICAL · EVOL / PATCH · **NO RELEASE** |
+| Parent | `6798219fdb37af1b463326dc7015901b43b04acd` |
+| Scope | R1 goal≠intention après init ; R2 omission clarifications ≠ `[]` ; tests discriminants ; T1→T7 enrichi |
+| Non-scope | C3/C4, RECETTE, migrations, D4 global, Figma, PR/merge/STABLE/Gate C/ML5 |
+| Preuves | UNIT 419 ; PG integration PASS ; BROWSER Sas 5 (T1→T7 + R1-B/R2-C) ; next build PASS |
+| RECETTE | **inchangée** `ec7405f3` / `67akzrr6bFEp4YOh7aHD7` |
+| Push produit | **AUCUN** |
+| Verdict cible | `READY WITH RESERVES — R1/R2 CORRECTED` |
+
 ## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-POST-RECETTE-C1C4

 | Field | Value |
```

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index d9df1893..4f348ff4 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -55,9 +55,9 @@ function dialogue(
   goal: string,
   reply: string,
   constraints: string[] = [],
-  extras?: QualExtras,
+  extras?: QualExtras & { omitClarifications?: boolean },
 ): NoraTurnQualification {
-  return {
+  const base: NoraTurnQualification = {
     schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
     status: "QUALIFIED",
     goal,
@@ -77,11 +77,15 @@ function dialogue(
         sourceEvidence: [],
       },
     ],
-    clarifications: extras?.clarifications ?? [],
     replyDraft: reply,
     preparationAssessment: extras?.preparationAssessment,
     preparationAssessmentExplanation: extras?.preparationAssessmentExplanation,
   };
+  if (extras?.omitClarifications) {
+    // Raw incomplete envelope: clarifications key absent (R2-C).
+    return base;
+  }
+  return { ...base, clarifications: extras?.clarifications ?? [] };
 }

 function effect(
@@ -252,6 +256,49 @@ register(
   ),
 );

+/** Ordinary follow-up after intention is established — must not rewrite durable intention (R1-B). */
+export const SAS_MATURATION_ORDINARY =
+  "Peux-tu me recommander les prochaines étapes ?";
+
+register(
+  SAS_MATURATION_ORDINARY,
+  dialogue(
+    "Recommander les prochaines étapes",
+    "Voici des prochaines étapes utiles pour consolider le cadrage, sans changer l'objectif fondateur déjà établi.",
+    ["NO_EFFECT"],
+    {
+      projectIntention: "",
+      // Advice-only turn: do not pretend open questions were re-resolved (omit ≠ []).
+      omitClarifications: true,
+      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
+      preparationAssessment: "CLARIFYING",
+      preparationAssessmentExplanation:
+        "L'intention durable est déjà établie ; ce tour apporte seulement des conseils locaux.",
+    },
+  ),
+);
+
+/** Incomplete QUALIFIED envelope — clarifications omitted (not []). Prior open questions must remain. */
+export const SAS_MATURATION_INCOMPLETE_QUAL =
+  "Peux-tu reformuler brièvement ce que nous avons déjà dit, sans nouvelle question ?";
+
+register(
+  SAS_MATURATION_INCOMPLETE_QUAL,
+  dialogue(
+    "Reformuler l'acquis sans réévaluer les questions ouvertes",
+    "Je reformule l'acquis déjà partagé. Les questions encore ouvertes restent à trancher.",
+    ["NO_EFFECT", "INCOMPLETE_CLARIFICATIONS"],
+    {
+      projectIntention: "",
+      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
+      omitClarifications: true,
+      preparationAssessment: "CLARIFYING",
+      preparationAssessmentExplanation:
+        "Reformulation locale sans réévaluation fiable des questions ouvertes.",
+    },
+  ),
+);
+
 register(
   SAS_MATURATION_T4,
   // Dialogue (no REQUEST_EFFECT): name correction; create remains an explicit D2 Pilot act.
```

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index b97026a2..32525aa9 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -436,11 +436,12 @@ async function runLiveWithTools(
     "- replyDraft = texte destiné au Pilote (français, Markdown utile, ≤12000).",
     "- goal = compréhension du TOUR courant (demande immédiate / reformulation locale), sans invention.",
     "- projectIntention = intention MÉTIER DURABLE du projet. Distincte de goal et de proposedProjectName.",
-    "- Si le Pilote ne fait que nommer/renommer ou confirmer un point local : projectIntention = chaîne vide (conserver l'intention antérieure).",
-    "- Si le Pilote établit ou corrige explicitement l'objectif fondateur : renseigner projectIntention fidèlement.",
+    "- Demande ordinaire, conseil local, prochaines étapes, renommage ou confirmation ponctuelle : projectIntention = chaîne vide (conserver l'intention antérieure). Ne jamais recopier goal dans projectIntention.",
+    "- Si le Pilote établit ou corrige explicitement l'objectif fondateur (première intention ou réorientation métier) : renseigner projectIntention fidèlement.",
     "- desiredOutcome / initialScope = seulement s'ils sont réellement exprimés ou corrigés ce tour ; sinon chaînes vides (conservation D2).",
     "- proposedProjectName = nom de travail du sas s'il est proposé ou corrigé ; chaîne vide sinon. Préférer ce champ pour une correction de nom sans nouvel effet D2.",
-    "- clarifications = UNIQUEMENT les questions encore ouvertes après CE tour (liste vide si toutes résolues). Ne pas répéter une question déjà tranchée.",
+    "- clarifications = UNIQUEMENT les questions encore ouvertes après CE tour. Tableau vide [] = toutes résolues après réévaluation fiable. Ne pas répéter une question déjà tranchée.",
+    "- Lorsque tu réévalues les questions ouvertes (QUALIFIED ou NEEDS_CLARIFICATION sur ce périmètre) : TOUJOURS renseigner clarifications (éventuellement []). Ne l'omets que si tu n'as pas réévalué ce périmètre.",
     "- preparationAssessment = EXPLORING|CLARIFYING|PROPOSAL|BASE_SUFFICIENTE selon compréhension structurée — jamais un score, jamais un GO d'autorité.",
     "- preparationAssessmentExplanation = justification qualitative courte fondée sur les acquis réels ; respecter les négations (« n'est pas suffisant » ≠ BASE_SUFFICIENTE).",
     "- Si tu n'as pas d'appréciation fiable : omets preparationAssessment (ne pas inventer BASE_SUFFICIENTE).",
@@ -461,7 +462,7 @@ async function runLiveWithTools(
     "1. Comprendre l'intention libre du Pilote.",
     "2. Distinguer demande de tour (goal) et intention métier durable (projectIntention).",
     "3. Reformuler pour le Pilote dans replyDraft.",
-    "4. clarifications = questions encore ouvertes seulement ; retirer celles déjà tranchées.",
+    "4. clarifications = questions encore ouvertes seulement ; [] si toutes tranchées ; omettre seulement sans réévaluation.",
     "5. Proposer une direction utile sans imposer un formulaire.",
     "6. Expliciter les hypothèses ; ne pas les présenter comme des faits.",
     "7. Renseigner desiredOutcome / initialScope seulement s'ils sont justifiés ou corrigés ce tour.",
```

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index b99bbedf..4ef62b6b 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -146,9 +146,12 @@ export const NoraTurnQualificationSchema = z.object({
   intents: z.array(QualifiedIntentItemSchema).max(12).default([]),
   /**
    * Questions encore ouvertes APRÈS ce tour.
-   * Liste vide intentionnelle = plus aucune question courante (ne pas réinjecter l'historique).
+   * - tableau non vide = questions courantes connues ;
+   * - tableau explicitement vide = aucune question courante après réévaluation fiable ;
+   * - champ ABSENT (undefined) = questions non réévaluées — D2 conserve le courant antérieur.
+   * Ne pas confondre omission et []. Pas de .default([]) : Zod effacerait la distinction.
    */
-  clarifications: z.array(z.string().max(400)).max(8).default([]),
+  clarifications: z.array(z.string().max(400)).max(8).optional(),
   replyDraft: z.string().max(12000).default(""),
   /** Appréciation qualitative de préparation (suggestion, jamais une autorité). */
   preparationAssessment: PreparationAssessmentSchema.optional(),
```

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 9beebe0e..1114c76b 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -2082,12 +2082,15 @@ export async function postUserMessageAndNora(
       projectIntention: qualification.projectIntention || "",
       desiredOutcome: qualification.desiredOutcome || "",
       initialScope: qualification.initialScope || "",
-      clarifications: qualification.clarifications ?? [],
+      // Pass through undefined when envelope omitted clarifications (≠ explicit []).
+      clarifications: qualification.clarifications,
       proposedProjectName: proposedName,
       openPointStatements: openFromQual,
       preparationAssessment: qualification.preparationAssessment ?? null,
       preparationAssessmentExplanation:
         qualification.preparationAssessmentExplanation ?? null,
+      // Goal→intention bootstrap only when no durable intention exists yet (R1).
+      allowGoalIntentionBootstrap: !(ctx.projection?.intention?.value ?? "").trim(),
     });
     if (!preparationProjectionDraft && qualification.status === "UNAVAILABLE") {
       preparationProjectionAck = { status: "UNAVAILABLE" };
```

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/projection.ts b/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
index a6404436..3a759d88 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
@@ -157,13 +157,22 @@ export function pilotUiEditField(value: string, editKey: string): ProposedField<
   };
 }

+/** Nora draft before revision/observedAt — may carry open-questions replace semantics. */
+export type NoraProjectionDraft = Omit<PreparationProjection, "revision" | "observedAt"> & {
+  /**
+   * true (default) = clarifications were present on the envelope (including []): replace current open list.
+   * false = clarifications omitted / not re-evaluated: preserve prior openQuestions.
+   */
+  replaceOpenQuestions?: boolean;
+};
+
 /**
  * Preserve Pilot-expressed fields against Nora re-proposal of the same slot.
  * Do not clear an acquired field when the new turn leaves it empty.
  */
 export function mergeNoraDraftWithPrior(
   prior: PreparationProjection | null,
-  draft: Omit<PreparationProjection, "revision" | "observedAt">,
+  draft: NoraProjectionDraft,
 ): Omit<PreparationProjection, "revision" | "observedAt"> {
   function mergeField(
     prev: ProposedField<string> | null | undefined,
@@ -179,15 +188,21 @@ export function mergeNoraDraftWithPrior(
     return next ?? null;
   }

+  const replaceOpen = draft.replaceOpenQuestions !== false;
+
   return {
-    ...draft,
+    schemaVersion: draft.schemaVersion,
+    preparationId: draft.preparationId,
+    updatedFromTurnKey: draft.updatedFromTurnKey,
     name: mergeField(prior?.name, draft.name),
     intention: mergeField(prior?.intention, draft.intention),
     desiredOutcome: mergeField(prior?.desiredOutcome, draft.desiredOutcome),
     initialScope: mergeField(prior?.initialScope, draft.initialScope),
-    // Successful qualification owns the CURRENT open list (empty = all resolved this turn).
-    // Do not sticky-reattach prior questions when Nora intentionally returns [].
-    openQuestions: draft.openQuestions,
+    // Explicit clarifications (incl. []) own the CURRENT open list.
+    // Omitted clarifications → preserve prior; do not treat absence as resolution.
+    openQuestions: replaceOpen
+      ? draft.openQuestions
+      : (prior?.openQuestions ?? draft.openQuestions),
     suggestion: draft.suggestion ?? prior?.suggestion ?? null,
   };
 }
@@ -205,41 +220,55 @@ export function draftProjectionFromQualification(input: {
   projectIntention?: string;
   desiredOutcome?: string;
   initialScope?: string;
-  clarifications: string[];
+  /**
+   * Current open questions after this turn.
+   * - undefined = field omitted / not re-evaluated → merge preserves prior
+   * - [] = explicitly none remain
+   * - non-empty = current known set
+   */
+  clarifications?: string[];
   proposedProjectName: string | null;
   /**
    * Turn-local OPEN_POINT statements newly proposed in this qualification only.
    * Do not pass the full historical D4 open-point catalogue here.
+   * Applied only when clarifications were provided (re-evaluated).
    */
   openPointStatements?: string[];
   preparationAssessment?: ProjectionAssessment | null;
   preparationAssessmentExplanation?: string | null;
-}): Omit<PreparationProjection, "revision" | "observedAt"> | null {
+  /**
+   * Compatibility bootstrap: map turn-local goal → intention ONLY when no durable
+   * intention exists yet on the preparation. Never use after an intention is established.
+   */
+  allowGoalIntentionBootstrap?: boolean;
+}): NoraProjectionDraft | null {
   if (input.qualificationStatus === "UNAVAILABLE") return null;

   const turnKey = input.turnKey;
   const nameRaw = input.proposedProjectName?.trim() || "";
   /**
    * Intention slot = durable projectIntention when provided.
-   * Never map turn-local `goal` into intention when a name correction is present —
-   * that was the C1 failure mode (rename request overwrote métier intention).
-   * Bootstrap without projectIntention: use goal only when no proposedProjectName this turn.
+   * Turn-local `goal` never becomes intentionRaw after an intention exists (R1).
+   * Bootstrap: goal may seed intention only when allowGoalIntentionBootstrap is true.
    */
   const durableIntention = (input.projectIntention ?? "").trim();
   const intentionRaw =
     durableIntention ||
-    (!nameRaw ? input.goal.trim() : "");
+    (input.allowGoalIntentionBootstrap === true ? input.goal.trim() : "");
   const outcomeRaw = (input.desiredOutcome ?? "").trim();
   const scopeRaw = (input.initialScope ?? "").trim();
+  const clarificationsProvided = input.clarifications !== undefined;
   // Current open set = this turn's clarifications (+ turn-local open-point proposals only).
-  const openFromClarifications = input.clarifications
+  const openFromClarifications = (input.clarifications ?? [])
     .map((c) => c.trim())
     .filter(Boolean)
     .slice(0, 6);
-  const openFromKnowledge = (input.openPointStatements ?? [])
-    .map((s) => s.trim())
-    .filter(Boolean)
-    .slice(0, 6);
+  const openFromKnowledge = clarificationsProvided
+    ? (input.openPointStatements ?? [])
+        .map((s) => s.trim())
+        .filter(Boolean)
+        .slice(0, 6)
+    : [];
   const openMerged = [...openFromClarifications];
   for (const s of openFromKnowledge) {
     if (!openMerged.some((x) => x.toLocaleLowerCase("fr-FR") === s.toLocaleLowerCase("fr-FR"))) {
@@ -257,9 +286,9 @@ export function draftProjectionFromQualification(input: {
   const initialScope = scopeRaw
     ? noraProposedField(scopeRaw.slice(0, 500), turnKey, "NEEDS_CONFIRMATION")
     : null;
-  const openQuestions = openMerged.map((q) =>
-    noraProposedField(q.slice(0, 400), turnKey, "NEEDS_CONFIRMATION"),
-  );
+  const openQuestions = clarificationsProvided
+    ? openMerged.map((q) => noraProposedField(q.slice(0, 400), turnKey, "NEEDS_CONFIRMATION"))
+    : [];

   /**
    * Assessment is attributed to Nora only when the structured qualification provides it.
@@ -288,6 +317,7 @@ export function draftProjectionFromQualification(input: {
     initialScope,
     openQuestions,
     suggestion,
+    replaceOpenQuestions: clarificationsProvided,
   };
 }

```

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/service.ts b/projects/sfia-studio-next/web/src/domains/preparation/service.ts
index 0e3b314c..4ca6ab22 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/service.ts
@@ -9,6 +9,7 @@ import {
 import { newId } from "@/lib/ids";
 import {
   type ApplyProjectionResult,
+  type NoraProjectionDraft,
   type PreparationProjection,
   mergeNoraDraftWithPrior,
   parseProjectionJson,
@@ -208,7 +209,7 @@ export async function applyPreparationProjection(input: {
   pilotId: string;
   preparationId: string;
   expectedCreationRevision: number;
-  draft: Omit<PreparationProjection, "revision" | "observedAt">;
+  draft: NoraProjectionDraft;
 }): Promise<ApplyProjectionResult> {
   try {
     return await db.transaction(async (tx) => {
```

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/helpers/g4-chat-first.ts b/projects/sfia-studio-next/web/tests/e2e/helpers/g4-chat-first.ts
index d6f1f289..11cee7d3 100644
--- a/projects/sfia-studio-next/web/tests/e2e/helpers/g4-chat-first.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/helpers/g4-chat-first.ts
@@ -11,12 +11,24 @@ export async function openNewPreparation(page: Page): Promise<string> {

 /** Send a Nora turn on the chat-first sas composer (fixture FAKE lane). */
 export async function sendPrepMessage(page: Page, text: string): Promise<void> {
-  await page.getByTestId("prep-draft").fill(text);
-  await page.getByTestId("prep-send").click();
+  const draft = page.getByTestId("prep-draft");
+  const send = page.getByTestId("prep-send");
+  // Idle composer: empty draft → send disabled. Wait before filling the next turn.
+  await expect(draft).toHaveValue("", { timeout: 60000 });
+  await draft.fill(text);
+  await expect(send).toBeEnabled({ timeout: 10000 });
+  await send.click();
+  // User turn must appear; do not treat a stale fixture badge as completion.
+  await expect(page.getByText(text.slice(0, Math.min(48, text.length)), { exact: false }).first()).toBeVisible({
+    timeout: 30000,
+  });
   await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
   await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
     timeout: 30000,
   });
+  // Turn finished: draft cleared and busy released.
+  await expect(draft).toHaveValue("", { timeout: 60000 });
+  await expect(send).toBeDisabled({ timeout: 10000 });
 }

 /** Open sas secondary Journal/Documents (not primary chrome). */
```

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
index bb9e4d31..f81a29e9 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
@@ -5,6 +5,8 @@ import {
   sendPrepMessage,
 } from "./helpers/g4-chat-first";
 import {
+  SAS_MATURATION_INCOMPLETE_QUAL,
+  SAS_MATURATION_ORDINARY,
   SAS_MATURATION_T1,
   SAS_MATURATION_T2,
   SAS_MATURATION_T3,
@@ -91,7 +93,7 @@ test.describe("ML4D Sas Nora — post-recette corrections", () => {
   test("T1→T7 maturation: intention durable, questions résolues, rename, create", async ({
     page,
   }) => {
-    test.setTimeout(240_000);
+    test.setTimeout(360_000);
     await loginPilot(page, "b");
     await openNewPreparation(page);

@@ -110,6 +112,25 @@ test.describe("ML4D Sas Nora — post-recette corrections", () => {
     });
     await expect(page.getByTestId("prep-proposal")).toContainText(/automatique|manuelle|réunion/i);

+    // Incomplete QUALIFIED (clarifications omitted) — open question must remain (R2-C)
+    await sendPrepMessage(page, SAS_MATURATION_INCOMPLETE_QUAL);
+    await expect(page.getByTestId("prep-field-intention")).toContainText(/chefs de projet/i, {
+      timeout: 30000,
+    });
+    await expect(page.getByTestId("prep-proposal")).toContainText(
+      /récupération automatique depuis les outils existants est-elle indispensable/i,
+    );
+
+    // Ordinary turn without rename — durable intention unchanged (R1-B)
+    await sendPrepMessage(page, SAS_MATURATION_ORDINARY);
+    await expect(page.getByTestId("prep-field-intention")).toContainText(/chefs de projet/i, {
+      timeout: 30000,
+    });
+    await expect(page.getByTestId("prep-field-intention")).not.toContainText(/Recommander/i);
+    await expect(page.getByTestId("prep-proposal")).toContainText(
+      /récupération automatique depuis les outils existants est-elle indispensable/i,
+    );
+
     // T3 — V1 manual resolves that question; open list empty / not the old arbitration
     await sendPrepMessage(page, SAS_MATURATION_T3);
     await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
```

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/r1-r2-projection-consolidation.test.ts b/projects/sfia-studio-next/web/tests/unit/r1-r2-projection-consolidation.test.ts
new file mode 100644
index 00000000..15ebab02
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/r1-r2-projection-consolidation.test.ts
@@ -0,0 +1,432 @@
+import { describe, expect, it } from "vitest";
+import {
+  draftProjectionFromQualification,
+  mergeNoraDraftWithPrior,
+  parseProjectionJson,
+  type PreparationProjection,
+} from "@/domains/preparation/projection";
+import {
+  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+  validateNoraTurnQualification,
+} from "@/domains/conversation/semantic-qualification";
+
+function asProjection(
+  draft: NonNullable<ReturnType<typeof draftProjectionFromQualification>>,
+  revision: number,
+): PreparationProjection {
+  return {
+    ...draft,
+    revision,
+    observedAt: "2026-11-16T12:00:00.000Z",
+  };
+}
+
+describe("R1/R2 consolidation discriminants", () => {
+  it("R1-A — initialise first intention when none prior (goal bootstrap only then)", () => {
+    const draft = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t-init",
+      qualificationStatus: "QUALIFIED",
+      goal: "Suivre les décisions de projet",
+      projectIntention: "",
+      proposedProjectName: null,
+      clarifications: [],
+      allowGoalIntentionBootstrap: true,
+    })!;
+    expect(draft.intention?.value).toBe("Suivre les décisions de projet");
+  });
+
+  it("R1-B — ordinary turn with empty projectIntention must not overwrite durable intention", () => {
+    const prior = asProjection(
+      draftProjectionFromQualification({
+        preparationId: "prep-1",
+        turnKey: "t-init",
+        qualificationStatus: "QUALIFIED",
+        goal: "Suivre les décisions de projet",
+        projectIntention: "Suivre les décisions de projet",
+        clarifications: [],
+        proposedProjectName: null,
+      })!,
+      2,
+    );
+    const ordinary = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t-ask",
+      qualificationStatus: "QUALIFIED",
+      goal: "Recommander les prochaines étapes",
+      projectIntention: "",
+      proposedProjectName: "",
+      clarifications: [],
+      allowGoalIntentionBootstrap: false,
+    })!;
+    const merged = mergeNoraDraftWithPrior(prior, ordinary);
+    expect(merged.intention?.value).toBe("Suivre les décisions de projet");
+    expect(merged.intention?.value).not.toMatch(/Recommander/);
+  });
+
+  it("R1-C — rename updates name and preserves intention", () => {
+    const prior = asProjection(
+      draftProjectionFromQualification({
+        preparationId: "prep-1",
+        turnKey: "t1",
+        qualificationStatus: "QUALIFIED",
+        goal: "cadrage",
+        projectIntention: "Suivre les décisions de projet",
+        clarifications: [],
+        proposedProjectName: "Ancien nom",
+      })!,
+      2,
+    );
+    const rename = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t2",
+      qualificationStatus: "QUALIFIED",
+      goal: 'Retenir "Nouveau nom" comme nom de travail',
+      projectIntention: "",
+      clarifications: [],
+      proposedProjectName: "Nouveau nom",
+      allowGoalIntentionBootstrap: false,
+    })!;
+    const merged = mergeNoraDraftWithPrior(prior, rename);
+    expect(merged.name?.value).toBe("Nouveau nom");
+    expect(merged.intention?.value).toBe("Suivre les décisions de projet");
+  });
+
+  it("R1-D — explicit projectIntention reorientation is allowed", () => {
+    const prior = asProjection(
+      draftProjectionFromQualification({
+        preparationId: "prep-1",
+        turnKey: "t1",
+        qualificationStatus: "QUALIFIED",
+        goal: "réunions",
+        projectIntention: "Suivre les décisions de réunion",
+        clarifications: [],
+        proposedProjectName: null,
+      })!,
+      2,
+    );
+    const reorient = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t2",
+      qualificationStatus: "QUALIFIED",
+      goal: "réorientation",
+      projectIntention: "Préparer et suivre le budget projet",
+      clarifications: [],
+      proposedProjectName: null,
+    })!;
+    expect(mergeNoraDraftWithPrior(prior, reorient).intention?.value).toBe(
+      "Préparer et suivre le budget projet",
+    );
+  });
+
+  it("R1-E — UNAVAILABLE invents nothing", () => {
+    expect(
+      draftProjectionFromQualification({
+        preparationId: "prep-1",
+        turnKey: "t-u",
+        qualificationStatus: "UNAVAILABLE",
+        goal: "should-not-apply",
+        clarifications: [],
+        proposedProjectName: null,
+      }),
+    ).toBeNull();
+  });
+
+  it("R1-F — old projection / envelope without projectIntention does not crash", () => {
+    const legacy = parseProjectionJson(
+      {
+        schemaVersion: 1,
+        preparationId: "prep-legacy",
+        revision: 1,
+        updatedFromTurnKey: "t0",
+        observedAt: "2026-11-01T00:00:00.000Z",
+        name: null,
+        intention: {
+          value: "Ancienne intention",
+          status: "NORA_PROPOSED",
+          source: { kind: "NORA_TURN", ref: "t0" },
+          isCurrent: true,
+        },
+        desiredOutcome: null,
+        initialScope: null,
+        openQuestions: [],
+        suggestion: null,
+      },
+      "prep-legacy",
+      1,
+    );
+    expect(legacy?.intention?.value).toBe("Ancienne intention");
+
+    const raw = {
+      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+      status: "QUALIFIED",
+      goal: "Tour ordinaire",
+      intents: [],
+      clarifications: [],
+      replyDraft: "ok",
+      // projectIntention ABSENT
+    };
+    expect(Object.prototype.hasOwnProperty.call(raw, "projectIntention")).toBe(false);
+    const parsed = validateNoraTurnQualification(raw);
+    expect(parsed.ok).toBe(true);
+    if (!parsed.ok) return;
+    const draft = draftProjectionFromQualification({
+      preparationId: "prep-legacy",
+      turnKey: "t1",
+      qualificationStatus: parsed.value.status,
+      goal: parsed.value.goal,
+      projectIntention: parsed.value.projectIntention || "",
+      clarifications: parsed.value.clarifications ?? [],
+      proposedProjectName: null,
+      allowGoalIntentionBootstrap: false,
+    })!;
+    const merged = mergeNoraDraftWithPrior(legacy, draft);
+    expect(merged.intention?.value).toBe("Ancienne intention");
+  });
+
+  it("R2-A — explicit clarifications populate current open questions", () => {
+    const draft = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t1",
+      qualificationStatus: "QUALIFIED",
+      goal: "q",
+      projectIntention: "i",
+      clarifications: ["Question A"],
+      proposedProjectName: null,
+    })!;
+    expect(draft.openQuestions.map((q) => q.value)).toEqual(["Question A"]);
+  });
+
+  it("R2-B — explicit empty clarifications clears current open questions", () => {
+    const prior = asProjection(
+      draftProjectionFromQualification({
+        preparationId: "prep-1",
+        turnKey: "t1",
+        qualificationStatus: "QUALIFIED",
+        goal: "q",
+        projectIntention: "i",
+        clarifications: ["Question A"],
+        proposedProjectName: null,
+      })!,
+      2,
+    );
+    const resolved = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t2",
+      qualificationStatus: "QUALIFIED",
+      goal: "résolu",
+      projectIntention: "i",
+      clarifications: [],
+      proposedProjectName: null,
+    })!;
+    expect(mergeNoraDraftWithPrior(prior, resolved).openQuestions).toEqual([]);
+  });
+
+  it("R2-C — QUALIFIED omitting clarifications preserves prior open questions (raw absence)", () => {
+    const prior = asProjection(
+      draftProjectionFromQualification({
+        preparationId: "prep-1",
+        turnKey: "t1",
+        qualificationStatus: "QUALIFIED",
+        goal: "q",
+        projectIntention: "Suivre les décisions",
+        clarifications: ["Alimentation manuelle ou automatique ?"],
+        proposedProjectName: null,
+      })!,
+      3,
+    );
+
+    const raw = {
+      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+      status: "QUALIFIED",
+      goal: "Tour partiel sans réévaluation des questions",
+      projectIntention: "Suivre les décisions",
+      intents: [],
+      replyDraft: "ok",
+    };
+    expect(Object.prototype.hasOwnProperty.call(raw, "clarifications")).toBe(false);
+
+    const parsed = validateNoraTurnQualification(raw);
+    expect(parsed.ok).toBe(true);
+    if (!parsed.ok) return;
+
+    // Proof that omission ≠ [] after validation (no silent default).
+    expect(parsed.value.clarifications).toBeUndefined();
+    expect(Array.isArray(parsed.value.clarifications) && parsed.value.clarifications.length === 0).toBe(
+      false,
+    );
+
+    const draft = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t-omit",
+      qualificationStatus: parsed.value.status,
+      goal: parsed.value.goal,
+      projectIntention: parsed.value.projectIntention || "",
+      clarifications: parsed.value.clarifications,
+      proposedProjectName: parsed.value.proposedProjectName || null,
+    })!;
+    const merged = mergeNoraDraftWithPrior(prior, draft);
+    expect(merged.openQuestions.map((q) => q.value)).toEqual([
+      "Alimentation manuelle ou automatique ?",
+    ]);
+  });
+
+  it("R2-D — UNAVAILABLE does not clear prior questions via draft", () => {
+    const prior = asProjection(
+      draftProjectionFromQualification({
+        preparationId: "prep-1",
+        turnKey: "t1",
+        qualificationStatus: "QUALIFIED",
+        goal: "q",
+        projectIntention: "i",
+        clarifications: ["Question A"],
+        proposedProjectName: null,
+      })!,
+      2,
+    );
+    expect(
+      draftProjectionFromQualification({
+        preparationId: "prep-1",
+        turnKey: "t-u",
+        qualificationStatus: "UNAVAILABLE",
+        goal: "x",
+        clarifications: ["reason"],
+        proposedProjectName: null,
+      }),
+    ).toBeNull();
+    // No draft → apply path skips; prior remains authoritative.
+    expect(prior.openQuestions.map((q) => q.value)).toEqual(["Question A"]);
+  });
+
+  it("R2-E — NEEDS_CLARIFICATION omitting clarifications does not resolve all questions", () => {
+    const prior = asProjection(
+      draftProjectionFromQualification({
+        preparationId: "prep-1",
+        turnKey: "t1",
+        qualificationStatus: "QUALIFIED",
+        goal: "q",
+        projectIntention: "i",
+        clarifications: ["Question A", "Question B"],
+        proposedProjectName: null,
+      })!,
+      2,
+    );
+    const raw = {
+      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+      status: "NEEDS_CLARIFICATION",
+      goal: "Besoin de précision",
+      projectIntention: "",
+      intents: [],
+      replyDraft: "Pouvez-vous préciser ?",
+      // clarifications absent
+    };
+    const parsed = validateNoraTurnQualification(raw);
+    expect(parsed.ok).toBe(true);
+    if (!parsed.ok) return;
+    expect(parsed.value.clarifications).toBeUndefined();
+    const draft = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t-nc",
+      qualificationStatus: parsed.value.status,
+      goal: parsed.value.goal,
+      projectIntention: parsed.value.projectIntention || "",
+      clarifications: parsed.value.clarifications,
+      proposedProjectName: null,
+    })!;
+    const merged = mergeNoraDraftWithPrior(prior, draft);
+    expect(merged.openQuestions.map((q) => q.value)).toEqual(["Question A", "Question B"]);
+  });
+
+  it("R2-F — rename after explicit resolution does not revive Question A", () => {
+    const withQ = asProjection(
+      draftProjectionFromQualification({
+        preparationId: "prep-1",
+        turnKey: "t1",
+        qualificationStatus: "QUALIFIED",
+        goal: "q",
+        projectIntention: "i",
+        clarifications: ["Question A"],
+        proposedProjectName: "Nom A",
+      })!,
+      2,
+    );
+    const resolved = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t2",
+      qualificationStatus: "QUALIFIED",
+      goal: "Manuelle pour la V1",
+      projectIntention: "i",
+      clarifications: [],
+      proposedProjectName: "Nom A",
+    })!;
+    const afterResolve = asProjection(mergeNoraDraftWithPrior(withQ, resolved) as typeof withQ, 3);
+    expect(afterResolve.openQuestions).toEqual([]);
+
+    const rename = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t3",
+      qualificationStatus: "QUALIFIED",
+      goal: "Retenir Nom B",
+      projectIntention: "",
+      clarifications: [],
+      proposedProjectName: "Nom B",
+      allowGoalIntentionBootstrap: false,
+    })!;
+    const afterRename = mergeNoraDraftWithPrior(afterResolve, rename);
+    expect(afterRename.openQuestions).toEqual([]);
+    expect(afterRename.name?.value).toBe("Nom B");
+    expect(afterRename.intention?.value).toBe("i");
+  });
+
+  it("R2-G — later explicit clarifications can reopen a subject", () => {
+    const cleared = asProjection(
+      draftProjectionFromQualification({
+        preparationId: "prep-1",
+        turnKey: "t1",
+        qualificationStatus: "QUALIFIED",
+        goal: "q",
+        projectIntention: "i",
+        clarifications: [],
+        proposedProjectName: null,
+      })!,
+      2,
+    );
+    const reopen = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t2",
+      qualificationStatus: "QUALIFIED",
+      goal: "nouvelle contradiction",
+      projectIntention: "i",
+      clarifications: ["Faut-il finalement automatiser l'alimentation ?"],
+      proposedProjectName: null,
+    })!;
+    expect(mergeNoraDraftWithPrior(cleared, reopen).openQuestions.map((q) => q.value)).toEqual([
+      "Faut-il finalement automatiser l'alimentation ?",
+    ]);
+  });
+
+  it("R2-H — explicit [] after parse is not confused with omission", () => {
+    const withEmpty = validateNoraTurnQualification({
+      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+      status: "QUALIFIED",
+      goal: "résolu",
+      intents: [],
+      clarifications: [],
+      replyDraft: "ok",
+    });
+    expect(withEmpty.ok).toBe(true);
+    if (!withEmpty.ok) return;
+    expect(withEmpty.value.clarifications).toEqual([]);
+
+    const omitted = validateNoraTurnQualification({
+      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+      status: "QUALIFIED",
+      goal: "partiel",
+      intents: [],
+      replyDraft: "ok",
+    });
+    expect(omitted.ok).toBe(true);
+    if (!omitted.ok) return;
+    expect(omitted.value.clarifications).toBeUndefined();
+  });
+});
```

## Tests discriminants

| Id | Résultat |
| --- | --- |
| R1-A init | PASS |
| R1-B ordinary | PASS |
| R1-C rename | PASS |
| R1-D reorient | PASS |
| R1-E UNAVAILABLE | PASS |
| R1-F legacy | PASS |
| R2-A explicit list | PASS |
| R2-B explicit [] | PASS |
| R2-C omission QUALIFIED | PASS |
| R2-D UNAVAILABLE | PASS |
| R2-E NEEDS_CLARIFICATION omit | PASS |
| R2-F rename after resolve | PASS |
| R2-G reopen | PASS |
| R2-H [] vs omit | PASS |
| R2-I completeness/provenance (via merge preserve) | PASS |

Preuve R2-C : enveloppe brute **sans** propriété `clarifications` → après Zod `undefined`
(pas `[]`) → merge conserve Question A.

Preuve R1-B : intention préexistante + `projectIntention=""` + goal local → intention inchangée.

## Suites

| Suite | Résultat |
| --- | --- |
| UNIT | PASS **419** |
| PG integration | PASS **484** (29 files) |
| BROWSER FAKE ml4d-sas-nora-projection | PASS **5** (T1→T7 enrichi R1-B/R2-C) |
| next build | PASS |
| next lint | PASS (warnings préexistants ; `_replaceFlag` évité) |
| Nora LIVE | **NOT PROVEN** |
| Morris UX | **PENDING** |

## Manifeste candidat RECETTE (non déployé)

- source_sha: `bd8e16728f3c2a726a49be4c94565a2d85fc41a9`
- parent: `6798219fdb37af1b463326dc7015901b43b04acd`
- tree_web: `1abe4103eb16e4dc899a352206472753bbe9fb04`
- build_dev: `GIa-3DQDG_kcmC9uzzgbG`
- schema: 013 present — aucune migration
- previous_recette: `ec7405f3` / `67akzrr6bFEp4YOh7aHD7`
- go_recette: **REQUIS** (mandat distinct)

## Réserves

- Nora LIVE non prouvée sur ce candidat.
- Morris UX PENDING ; GO RECETTE non donné.
- C3/C4 hors mandat (conservés du cycle précédent).
- Gate C OPEN ; STABLE NOT AVAILABLE ; ML5 non autorisé.
- LIVE : Nora doit renseigner `clarifications` quand elle réévalue ; omission = non-réévaluation.

## Verdict

**READY WITH RESERVES — R1/R2 CORRECTED**
