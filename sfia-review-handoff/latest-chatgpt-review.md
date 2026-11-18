# SFIA Review Pack FULL — Strategy A V0.5 sécurisation (A4 P0 + A1–A6)

**Date/heure :** 2026-11-18T09:05:00+0100
**Cycle :** Critical CORRECTIVE/EVOL/QA — Strategy A matrice 06 V0.5
**GO Morris :** contrat Cursor sécurisation finale Strategy A (GO local borné)
**Branche :** `sfia/next-ml4d-composition-adaptative`
**HEAD tip :** `a783f014935de0dec5ff8e79a2b18eea0e629756` (+ WT dirty maîtrisé)
**origin/main :** `997d4c4e8204993de7107552898c8cc08cd3b0ed`
**merge-base HEAD/main :** `997d4c4e8204993de7107552898c8cc08cd3b0ed`
**Docs tip :** `aa12d385dba8e2e5983477f8020658dea1004a2a` (`docs/next-ml4d-registre-revues-20261116`)
**Handoff précédent :** `28c73f19da2d550444abdf0fa0e83933d0067dfa` / blob `1900608f2d60dbb8b43467a9ba6c743f89a8201e`
**Review Pack :** Full — réinitialisé (mono-cycle)
**ENV :** DEV · NO RELEASE · STABLE NOT AVAILABLE · pas push produit / PR / merge / LIVE
**Fake/Real :** FAKE fixture A4 **PROVEN** · DETERMINISTIC A1–A3 **PROVEN** · BROWSER T02 **PASS** · LIVE/REAL **NOT RUN**

---

## 1. Git Truth Check

| Check | Résultat |
| --- | --- |
| `pwd -P` | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| remote | `origin https://github.com/mcleland147/sfia-workspace.git` |
| Branche | `sfia/next-ml4d-composition-adaptative` |
| HEAD | `a783f014935de0dec5ff8e79a2b18eea0e629756` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Handoff WT | `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023` @ `28c73f19` |
| STOP candidat | **NON** — WT = Strategy A + correctifs V0.5 ; pas de changements étrangers non maîtrisés |
| Destructif | aucun reset/clean/stash/rebase |

Candidat local = tip `a783f014` + WT Strategy A (handoff `28c73f19`) + correctif A4 fail-path + oracles A1 exacts + tests adaptateur.

---

## 2. Défaut A4 reproduit (avant)

Dans le code antérieur à ce cycle, `fixtureReply()` appelait `validateNoraTurnQualification` mais **ne traitait pas** `ok === false` : la qualification initiale (y compris `replyDraft` divergent / composition overflow) subsistait et le chemin pouvait retourner `COMPLETE`.

Le chemin LIVE traitait déjà le refus comme UNAVAILABLE → UNKNOWN. **Même validateur ≠ parité.**

---

## 3. Correction A4 (après) — fail path

Politique unique : si validation échoue → `unavailableQualification(reason)` ; `status:"UNKNOWN"` ; `qualification.status:"UNAVAILABLE"` ; `providerContacted:"NO"` ; pas de second appel ; mode fixture effect-free conservé.

### Diff exploitable `nora-adapter.ts` (fixtureReply)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 1d7949f2..be83778a 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -19,6 +19,7 @@ import { emitObs, newAttemptId } from "@/lib/observability";
 import { isStudioError } from "@/lib/http-errors";
 import { fixtureSemanticQualify } from "./fixture-semantic-qualify";
 import {
+  NoraTurnQualificationAgentSchema,
   NoraTurnQualificationSchema,
   unavailableQualification,
   validateNoraTurnQualification,
@@ -391,7 +392,7 @@ async function fixtureReply(
       "Décisions/restrictions/CKI fournis comme sources. Nora n'en tire aucune autorité.\n";
   }

-  const qualification = fixtureSemanticQualify(input.userText);
+  let qualification = fixtureSemanticQualify(input.userText);
   // Exact scenario replyDraft wins; default/unknown keeps the rich fixture body
   // (Level A / document fence / comparative) while envelope stays effect-free.
   const defaultNoEffect = qualification.intents.some((i) =>
@@ -400,6 +401,60 @@ async function fixtureReply(
   if (!qualification.replyDraft.trim() || defaultNoEffect) {
     qualification.replyDraft = body;
   }
+  // Same D3 gate as LIVE (A4): validation failure → UNKNOWN/UNAVAILABLE, never COMPLETE
+  // with an unvalidated qualification. No provider contact invented.
+  const validatedFixture = validateNoraTurnQualification(qualification);
+  if (!validatedFixture.ok) {
+    const failed = unavailableQualification(validatedFixture.reason);
+    emitObs({
+      event_name: "d3.nora.fixture_complete",
+      component: "d3.nora_adapter",
+      operation_id: input.toolScope?.operationId,
+      generation_id: generationId,
+      attempt_id: attemptId,
+      outcome: "UNKNOWN",
+      policy_version: policy.policyVersion,
+      profile_type:
+        policy.profileType === "TEST_BOUNDARY" ? "TEST_BOUNDARY" : "OPERATIONAL",
+      meta: {
+        profile: policy.profile,
+        tool_calls: toolCallsObserved,
+        profile_type_detail: policy.profileType,
+        qualification_status: failed.status,
+        validation_reason: validatedFixture.reason,
+        provider_contacted: "NO",
+      },
+    });
+    return {
+      generationId,
+      mode: "deterministic-fixture",
+      status: "UNKNOWN",
+      streamingProvisional: false,
+      streamingAttempted: false,
+      streamingDelivered: false,
+      streamingNotes: `QUALIFICATION_${validatedFixture.reason}`,
+      content: failed.replyDraft,
+      policy,
+      modelRequested: policy.modelRequested,
+      modelApplied: "deterministic-fixture",
+      effortRequested: policy.effortRequested,
+      effortApplied: policy.effortRequested,
+      attempts: [
+        {
+          attemptId,
+          kind: toolCallsObserved ? "fixture_tools" : "fixture",
+          outcome: "UNKNOWN",
+          notes: `QUALIFICATION_${validatedFixture.reason}`,
+          providerContacted: "NO",
+        },
+      ],
+      toolCallsObserved,
+      d4CharsReturned,
+      coverageNotes: toolNotes || undefined,
+      qualification: failed,
+    };
+  }
+  qualification = validatedFixture.value;

   emitObs({
     event_name: "d3.nora.fixture_complete",
@@ -536,7 +591,7 @@ async function runLiveWithTools(
     "",
     "SORTIE STRUCTURÉE OBLIGATOIRE (qualification sémantique) :",
     "- Remplis l'enveloppe typée (schemaVersion ml4c-sem-qual-v1).",
-    "- replyDraft = texte destiné au Pilote (français, Markdown utile, ≤12000).",
+    "- replyDraft = texte destiné au Pilote (français, Markdown utile, ≤12000). Si visualComposition (sections canoniques) est fournie, Studio DERIVE replyDraft depuis ces sections — ne produis pas une seconde histoire divergente ; place la prose naturelle dans des blocs text et la substance structurée dans comparison|sequence|relations|synthesis.",
     "- goal = compréhension du TOUR courant (demande immédiate / reformulation locale), sans invention.",
     "- projectIntention = intention MÉTIER DURABLE du projet. Distincte de goal et de proposedProjectName.",
     "- Demande ordinaire, conseil local, prochaines étapes, renommage ou confirmation ponctuelle : projectIntention = chaîne vide (conserver l'intention antérieure). Ne jamais recopier goal dans projectIntention.",
@@ -547,7 +602,7 @@ async function runLiveWithTools(
     "- Lorsque tu réévalues les questions ouvertes (QUALIFIED ou NEEDS_CLARIFICATION sur ce périmètre) : TOUJOURS renseigner clarifications (éventuellement []). Ne l'omets que si tu n'as pas réévalué ce périmètre.",
     "- continueChoices (optionnel) = propositions de POURSUITE conversationnelle (ex. « Approfondir B ») avec id, label et transmitText. NE PAS y recopier clarifications. Omettre ou [] si aucune poursuite utile.",
     "- resourceReferences (optionnel) = références consultables document/git/external — ce ne sont PAS des choix de poursuite.",
-    "- visualComposition (optionnel, schema e05-visual-composition-v1) = composition ordonnée de blocs text|comparison|sequence|relations|synthesis. Omettre pour une réponse purement textuelle. N'invente jamais de données manquantes ; chaque bloc graphique DOIT fournir textAlternative. Jamais de HTML/CSS/JS. Ne crée aucun effet métier par la seule présence d'un bloc.",
+    "- visualComposition (optionnel, WRITE schema conversational-composition-canonical-v1 = sections sémantiques CANONIQUES ; lecture historique : conversational-composition-projection-v1 Strategy B et e05-visual-composition-v1) = source unique de sens pour ce tour : blocs text|comparison|sequence|relations|synthesis. Studio dérive le texte de lecture et la vue graphique depuis la même structure. Relations : layoutHint optionnel dependencies|decisionTree|parallelProcess ; edges.relation optionnel depends_on|condition_true|condition_false|sync|flow ; nodes.laneId pour voies parallèles. Omettre pour une réponse purement narrative (replyDraft seul). N'invente jamais de données manquantes ; chaque bloc graphique DOIT fournir textAlternative. Jamais de HTML/CSS/JS. Ne crée aucun effet métier par la seule présence d'un bloc.",
     "- preparationAssessment = EXPLORING|CLARIFYING|PROPOSAL|BASE_SUFFICIENTE selon compréhension structurée — jamais un score, jamais un GO d'autorité.",
     "- preparationAssessmentExplanation = justification qualitative courte fondée sur les acquis réels ; respecter les négations (« n'est pas suffisant » ≠ BASE_SUFFICIENTE).",
     "- Si tu n'as pas d'appréciation fiable : omets preparationAssessment (ne pas inventer BASE_SUFFICIENTE).",
@@ -586,7 +641,7 @@ async function runLiveWithTools(
     },
     // Heterogeneous D4 + history + git tool schemas; SDK Tool typing is per-schema.
     tools: tools as ConstructorParameters<typeof Agent>[0]["tools"],
-    outputType: NoraTurnQualificationSchema,
+    outputType: NoraTurnQualificationAgentSchema,
   });

   const prompt = buildPrompt(input, policy);

```

### Fixtures A4 (`fixture-semantic-qualify.ts`)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 05ae9e30..3ca3bb8b 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -643,7 +643,14 @@ register(
   E05_S2_DIAGNOSTIC,
   dialogue(
     "Diagnostic coordination multi-sites — établi vs hypothétique",
-    "Diagnostic du besoin de coordination (fallback textuel).",
+    [
+      "Diagnostic du besoin de coordination.",
+      "Éléments liés — sans causalité inventée :",
+      "Pratiques locales divergentes (peut contribuer) et Rôles d'arbitrage flous (peut contribuer)",
+      "vers Friction de coordination ; Impact réel non mesuré.",
+      "À vérifier ensuite : Cartographier les pratiques par site ; Identifier le porteur d'arbitrage ;",
+      "Ne pas conclure à un dysfonctionnement chiffré.",
+    ].join(" "),
     ["NO_EFFECT", "VISUAL_RELATIONS", "S2"],
     {
       clarifications: [
@@ -687,6 +694,7 @@ register(
             id: "s2-rel",
             title: "Éléments liés — sans causalité inventée",
             role: "information",
+            layoutHint: "dependencies",
             nodes: [
               { id: "o1", label: "Pratiques locales divergentes", kind: "observation" },
               { id: "o2", label: "Rôles d'arbitrage flous", kind: "observation" },
@@ -694,8 +702,18 @@ register(
               { id: "u1", label: "Impact réel non mesuré", kind: "unknown" },
             ],
             edges: [
-              { from: "o1", to: "h1", label: "peut contribuer" },
-              { from: "o2", to: "h1", label: "peut contribuer" },
+              {
+                from: "o1",
+                to: "h1",
+                label: "peut contribuer",
+                relation: "depends_on",
+              },
+              {
+                from: "o2",
+                to: "h1",
+                label: "peut contribuer",
+                relation: "depends_on",
+              },
             ],
             textAlternative:
               "Observations : pratiques divergentes et rôles flous. Hypothèse : friction de coordination. Inconnue : impact réel non mesuré.",
@@ -738,7 +756,16 @@ register(
   E05_S3_COMPARISON,
   dialogue(
     "Comparaison déploiement progressif vs simultané",
-    "Comparaison des approches (fallback).",
+    [
+      "Comparaison Progressive vs simultanée.",
+      "Déploiement progressif : Étendre site par site après apprentissage local.",
+      "Avantages : Apprentissage contrôlé ; Réversibilité locale. Limite : Cohérence temporaire inégale.",
+      "Déploiement simultané : Aligner tous les sites dans la même fenêtre.",
+      "Avantages : Cohérence immédiate. Limites : Charge de conduite élevée ; Peu de marge d'apprentissage.",
+      "Critères : Risque de conduite (Modéré / Élevé), Apprentissage (Fort / Faible),",
+      "Dépendance aux rôles clarifiés (Utile avant chaque vague / Critique dès le départ).",
+      "Si les responsabilités d'arbitrage ne sont pas encore claires, préférer une approche progressive — avis conditionnel, pas une décision enregistrée.",
+    ].join(" "),
     ["NO_EFFECT", "VISUAL_COMPARISON", "S3"],
     {
       continueChoices: [
@@ -845,7 +872,13 @@ register(
   E05_S4_TRAJECTORY,
   dialogue(
     "Parcours de clarification avant travaux",
-    "Parcours proposé (fallback).",
+    [
+      "Parcours Clarifier avant de lancer :",
+      "Partager le constat de coordination ;",
+      "Clarifier les responsabilités d'arbitrage ;",
+      "Choisir progressive ou simultanée ;",
+      "Préparer la première vague / fenêtre.",
+    ].join(" "),
     ["NO_EFFECT", "VISUAL_SEQUENCE", "S4"],
     {
       visualComposition: {
@@ -897,7 +930,15 @@ register(
   E05_S5_COMPOSITE,
   dialogue(
     "Recommandation composite conditionnelle",
-    "Recommandation composite (fallback textuel).",
+    [
+      "Recommandation composite. Points saillants :",
+      "Clarifier l'arbitrage entre sites — Préalable utile avant tout déploiement large ;",
+      "Pratiques locales divergentes ;",
+      "Déploiement simultané trop tôt — Risque de conduite si les rôles sont encore flous.",
+      "Rappel des options : Progressive — Vagues successives, apprentissage local. ;",
+      "Simultanée — Alignement immédiat, charge élevée.",
+      "Je recommande d'avancer en mode progressif **si** l'arbitrage inter-sites est clarifié d'abord. Ce n'est pas une HumanDecision.",
+    ].join(" "),
     ["NO_EFFECT", "VISUAL_COMPOSITE", "S5"],
     {
       clarifications: [
@@ -1018,6 +1059,153 @@ register(
   ),
 );

+const E05_F5_DECISION_TREE =
+  "E05_F5_DECISION_TREE Clarifier avant deploiement progressif ou report";
+const E05_F5_PARALLEL =
+  "E05_F5_PARALLEL Inventaire parallele sites A et B puis revue commune";
+
+register(
+  E05_F5_DECISION_TREE,
+  dialogue(
+    "Arbre de decision roles",
+    [
+      "Arbre de lecture — Condition roles clarifies.",
+      "Si oui : Approche progressive.",
+      "Si non : Reporter le deploiement.",
+      "Aucune HumanDecision n'est creee.",
+    ].join(" "),
+    ["NO_EFFECT", "VISUAL_DECISION_TREE", "F5"],
+    {
+      visualComposition: {
+        schemaVersion: "conversational-composition-canonical-v1",
+        blocks: [
+          {
+            kind: "relations",
+            id: "f5-tree",
+            title: "Arbre de lecture",
+            layoutHint: "decisionTree",
+            nodes: [
+              { id: "c", label: "Condition roles clarifies", kind: "unknown" },
+              { id: "y", label: "Approche progressive", kind: "hypothesis" },
+              { id: "n", label: "Reporter le deploiement", kind: "hypothesis" },
+            ],
+            edges: [
+              {
+                from: "c",
+                to: "y",
+                relation: "condition_true",
+                label: "oui",
+              },
+              {
+                from: "c",
+                to: "n",
+                relation: "condition_false",
+                label: "non",
+              },
+            ],
+            textAlternative:
+              "Si roles clarifies → Approche progressive, sinon Reporter le deploiement.",
+          },
+        ],
+      },
+    },
+  ),
+);
+
+register(
+  E05_F5_PARALLEL,
+  dialogue(
+    "Processus parallele inventaires",
+    [
+      "Processus parallele : Inventaire site A et Inventaire site B,",
+      "puis Revue commune (sync pret).",
+    ].join(" "),
+    ["NO_EFFECT", "VISUAL_PARALLEL", "F5"],
+    {
+      visualComposition: {
+        schemaVersion: "conversational-composition-canonical-v1",
+        blocks: [
+          {
+            kind: "relations",
+            id: "f5-par",
+            title: "Processus parallele",
+            layoutHint: "parallelProcess",
+            nodes: [
+              {
+                id: "a1",
+                label: "Inventaire site A",
+                kind: "observation",
+                laneId: "Voie A",
+              },
+              {
+                id: "b1",
+                label: "Inventaire site B",
+                kind: "observation",
+                laneId: "Voie B",
+              },
+              {
+                id: "g",
+                label: "Revue commune",
+                kind: "finding",
+                laneId: "Gate",
+              },
+            ],
+            edges: [
+              { from: "a1", to: "g", relation: "sync", label: "pret" },
+              { from: "b1", to: "g", relation: "sync", label: "pret" },
+            ],
+            textAlternative: "Voies A/B puis Revue commune",
+          },
+        ],
+      },
+    },
+  ),
+);
+
+/** A4 — canonical overflow (>12k joined) must fail validation, never COMPLETE raw. */
+const E05_A4_OVERFLOW = "E05_A4_OVERFLOW";
+register(
+  E05_A4_OVERFLOW,
+  dialogue(
+    "Overflow canonique A4",
+    "TEXTE_INITIAL_DIVERGENT_NE_DOIT_PAS_SURVIVRE_EN_COMPLETE",
+    ["NO_EFFECT", "A4_OVERFLOW"],
+    {
+      visualComposition: {
+        schemaVersion: "conversational-composition-canonical-v1",
+        blocks: [0, 1, 2, 3].map((i) => ({
+          kind: "text" as const,
+          id: `ov${i}`,

```

---

## 4. Matrice A1–A6 (06 V0.5)

| ID | Exit | Preuve |
| --- | --- | --- |
| A4 P0 | **CLOSED** — fail path SAFE via `generateNoraReply` | `fixture-reply-a4-adapter-boundary.test.ts` |
| A1 | **CLOSED** — exact 11999/12000/12001 ; overflow explicite | `strategy-a-corrective-a1-a4.test.ts` |
| A2 | **CLOSED** substantiel — familles text/comparison/sequence/relations/synthesis + ownership choices/refs | idem |
| A3 | **CLOSED** fixtures — e05/projection-v1/canonical-v1 ; WRITE AgentSchema canonical only | A3 unit + A4-05 adapter |
| A5 | **PARTIAL** — topologies/sync/T02 OK ; **VISUAL REVIEW NOT COMPLETED** (PNG non transportables via handoff MD) | T02 + PNG locaux evidence/ |
| A6 | **PASS** avec réserves tsc préexistants hors fichiers touchés | 94 Vitest + T02 |

### Fake/Real Qualification

| Niveau | Statut |
| --- | --- |
| FAKE/DEV A4 end-to-end | **PROVEN** |
| DETERMINISTIC A1–A3 | **PROVEN** |
| BROWSER T02 | **PASS** (22.7s) |
| LIVE provider proven | **NOT RUN** |
| REAL boundary proven | **NOT RUN** |
| DETERMINISTIC PROVEN ≠ READY FOR REAL | **affirmé** |

---

## 5. Tests exécutés

| Suite | Commande | Résultat |
| --- | --- | --- |
| Vitest A1–A6 ciblés | `npx vitest run tests/unit/strategy-a-corrective-a1-a4.test.ts tests/unit/fixture-reply-a4-adapter-boundary.test.ts tests/unit/canonical-sections-strategy-a.test.ts tests/unit/conversational-composition-fidelity.test.ts tests/unit/conversational-composition-admission.test.ts tests/unit/nora-live-output-schema.test.ts tests/unit/ensemble05-visual-composition.test.ts tests/unit/nora-e2e-fixture.test.ts` | **94 PASS** |
| Vitest élargi A4+adapter | + `nora-adapter-corrective` (précédent run 87) | PASS |
| Playwright T02 | `npx playwright test tests/e2e/ensemble05-travail-nora.spec.ts -g "T02 visual composition"` | **1 PASS** |
| tsc fichiers touchés | `tsc --noEmit` filtré composition/A4 | **CLEAN** |
| tsc global | intégration PG fixtures champs manquants | **préexistant** — hors périmètre ; non masqué |
| LIVE OpenAI | — | **NOT RUN** |
| PG historique réel refresh | — | **NOT RUN** — réserve A3 ; fixtures de compat utilisées |

ENV-01 : Vitest local DEV ; Playwright via `scripts/e2e-web-server.sh` isolé `:3101` / DB `sfia_next_e2e` — ne réutilise pas operator DEV `:3100`.

---

## 6. C-01–C-22 avant/après (V0.5)

| C | Après |
| --- | --- |
| C-01 | structure canonique unique préservée |
| C-02 | derive écrase divergent ; fail path ne COMPLETE plus |
| C-04/17 | overflow explicite + oracles exacts |
| C-05/06/19 | 3 versions ; pas de requal rétroactive |
| C-10–12 | cycles/shared-child/parallel préservés |
| C-16 | pas de second AI |
| C-20 | **fixture fail = LIVE fail** |
| C-22 | pas de migration physique |

Détail : `docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-v05.md`

---

## 7. A5 Figma / runtime

- Contrat Figma Page 06 extrait (MCP) : `figma-page06-visual-contract.md`
- Captures runtime locales : `f5-runtime-*.png`, `corrective-runtime-*.png`, `runtime-*.png`
- Handoff markdown mono-fichier : **ne peut pas transmettre PNG** → **VISUAL REVIEW NOT COMPLETED**
- Pas d'ajout ELK/React Flow

---

## 8. Risques / dette / gates Morris

| Item | Note |
| --- | --- |
| VISUAL | canal handoff PNG manquant |
| A3 historique PG | fixtures seulement |
| tsc global | erreurs préexistantes tests intégration hors touch |
| LIVE | GO Morris distinct requis |
| Push produit | **interdit** ce cycle |

Gates : A4 SAFE · pas COMPLETE sur qualif rejetée · pas troncature silencieuse · versions préservées · T02 PASS · pack Full · handoff L3 à publier.

---

## 9. Verdict

**READY WITH RESERVES**

Réserves : VISUAL REVIEW NOT COMPLETED (handoff) ; A3 sans audit PG historique complet ; LIVE/REAL NOT RUN.

Ne pas annoncer ADOPTED / Gate C PASS / RECETTE ACCEPTED / LIVE PROVEN.

---

## 10. Contenu intégral — fichiers critiques de ce cycle

### blob hashes (git hash-object)

| Blob | Fichier |
| --- | --- |
| `be83778a2da0ccb89348fb33181a19cc87b388c1` | nora-adapter.ts (WT) |
| `3ca3bb8b31407a35189f376ebfd15871f086f498` | fixture-semantic-qualify.ts (WT) |
| `1e305f704fd78b5b16e9fdde23f5521a49c6ec4e` | derive-text.ts |
| `643e34fcbeae0235858e17c27a7a9b369c603463` | admission.ts |
| `7c1c7561062cf104d74d416812c41ee4fd6a06ac` | fidelity.ts |
| `7d6998e40e748a6f1ac79377acc9cdabc56731a5` | topology.ts |
| `66bb285a87e3c024d2fc19092530c08af5eb1d9f` | index.ts |
| `23cdf16a1717aaad4f0c639ae56d6b8f3c8311fa` | NoraComposition.tsx |
| `22e1eddd719d8c84f3ed167d981ecba17f240801` | fixture-reply-a4-adapter-boundary.test.ts |
| `4df773077472cd97c176507cbc197cfff546c410` | strategy-a-corrective-a1-a4.test.ts |

### `projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/derive-text.ts`
```ts
/**
 * Deterministic text derivation from canonical semantic sections (Strategy A / C-01–C-04).
 * Preserves narrative prose from text blocks; appends exhaustive structured fallbacks
 * for graphic sections so no substance is dropped.
 * Never invents facts. Never calls an LLM.
 * Never silently truncates (A1) — overflow is an explicit fail.
 */

import { buildExhaustiveBlockFallback } from "./admission";
import type { VisualComposition } from "@/domains/conversation/visual-composition";
import { compositionOwnsBody } from "@/domains/conversation/visual-composition";

/** Envelope limit aligned with replyDraft Zod max — not raised arbitrarily. */
export const REPLY_DRAFT_MAX_CHARS = 12000;

export type DeriveReplyDraftResult =
  | { ok: true; text: string; length: number }
  | { ok: false; reason: "CV_DERIVE_EMPTY" }
  | { ok: false; reason: "CV_DERIVE_OVERFLOW"; length: number; max: number };

/**
 * Derive Pilote-facing Markdown from a composition that owns message substance.
 * Overflow → explicit failure (no slice). Caller must not present FINAL incomplete.
 */
export function deriveReplyDraftFromCanonicalSections(
  composition: VisualComposition,
): DeriveReplyDraftResult {
  if (!compositionOwnsBody(composition)) {
    return { ok: false, reason: "CV_DERIVE_EMPTY" };
  }
  const parts: string[] = [];
  for (const block of composition.blocks) {
    if (block.kind === "choices" || block.kind === "references") continue;
    if (block.kind === "text") {
      const md = block.markdown.trim();
      if (md) parts.push(md);
      continue;
    }
    const fb = buildExhaustiveBlockFallback(block).trim();
    if (fb) parts.push(fb);
  }
  const joined = parts.join("\n\n").trim();
  if (!joined) {
    return { ok: false, reason: "CV_DERIVE_EMPTY" };
  }
  if (joined.length > REPLY_DRAFT_MAX_CHARS) {
    return {
      ok: false,
      reason: "CV_DERIVE_OVERFLOW",
      length: joined.length,
      max: REPLY_DRAFT_MAX_CHARS,
    };
  }
  return { ok: true, text: joined, length: joined.length };
}
```

### `projects/sfia-studio-next/web/tests/unit/fixture-reply-a4-adapter-boundary.test.ts`
```ts
/**
 * A4 — adapter-boundary tests for fixtureReply failure parity with LIVE.
 * Must call generateNoraReply (not validateNoraTurnQualification alone).
 */
import { afterEach, describe, expect, it } from "vitest";
import { generateNoraReply } from "@/domains/conversation/nora-adapter";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
import { registerFixtureScenario } from "@/domains/conversation/fixture-semantic-qualify";
import { REPLY_DRAFT_MAX_CHARS } from "@/domains/conversation/conversational-composition";
import {
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_PROJECTION,
  type VisualComposition,
} from "@/domains/conversation/visual-composition";

describe("A4 fixtureReply adapter boundary", () => {
  const prevLane = process.env.STUDIO_LANE;
  const prevForce = process.env.STUDIO_FORCE_NORA_FIXTURE;
  const prevKey = process.env.OPENAI_API_KEY;

  afterEach(() => {
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    if (prevForce === undefined) delete process.env.STUDIO_FORCE_NORA_FIXTURE;
    else process.env.STUDIO_FORCE_NORA_FIXTURE = prevForce;
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
  });

  function forceFixture() {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
    delete process.env.OPENAI_API_KEY;
  }

  it("A4-01 valid canonical: COMPLETE with derived replyDraft", async () => {
    forceFixture();
    const policy = buildCognitivePolicy("E05_A4_DIVERGENT_OK", "TEST_BOUNDARY");
    const result = await generateNoraReply({
      userText: "E05_A4_DIVERGENT_OK",
      contextSnippets: [],
      policyOverride: policy,
    });
    expect(result.mode).toBe("deterministic-fixture");
    expect(result.status).toBe("COMPLETE");
    expect(result.qualification.status).not.toBe("UNAVAILABLE");
    expect(result.content).toContain("Prose canonique unique pour A4-01/A4-04");
    expect(result.content).not.toContain("TEXTE_DIVERGENT_INDEPENDANT");
    expect(result.attempts.every((a) => a.providerContacted === "NO")).toBe(true);
  });

  it("A4-03/A4-02 overflow: UNKNOWN — never COMPLETE with raw divergent draft", async () => {
    forceFixture();
    const policy = buildCognitivePolicy("E05_A4_OVERFLOW", "TEST_BOUNDARY");
    const result = await generateNoraReply({
      userText: "E05_A4_OVERFLOW",
      contextSnippets: [],
      policyOverride: policy,
    });
    expect(result.mode).toBe("deterministic-fixture");
    expect(result.status).toBe("UNKNOWN");
    expect(result.qualification.status).toBe("UNAVAILABLE");
    expect(result.streamingNotes ?? "").toMatch(/CANONICAL_REPLY_OVERFLOW/);
    expect(result.content).not.toContain("TEXTE_INITIAL_DIVERGENT");
    expect(result.content).not.toMatch(/^Z{100,}/);
    expect(result.attempts[0]?.outcome).toBe("UNKNOWN");
    expect(result.attempts[0]?.providerContacted).toBe("NO");
  });

  it("A4-04 register + divergent overwritten on adapter path", async () => {
    forceFixture();
    const key = `E05_A4_DYN_${Date.now()}`;
    registerFixtureScenario(key, {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "dyn",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "i1",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "dyn",
          parameters: {},
          constraints: ["NO_EFFECT"],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "BRUT_NON_VALIDE_NE_DOIT_PAS_PASSER",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "text", id: "t", markdown: "Derive adapter A4-04." }],
      },
    });
    const policy = buildCognitivePolicy(key, "TEST_BOUNDARY");
    const result = await generateNoraReply({
      userText: key,
      contextSnippets: [],
      policyOverride: policy,
    });
    expect(result.status).toBe("COMPLETE");
    expect(result.content).toBe("Derive adapter A4-04.");
    expect(result.content).not.toContain("BRUT_NON_VALIDE");
  });

  it("A4-05 projection-v1 Strategy B keeps replyDraft authority via adapter", async () => {
    forceFixture();
    const key = `E05_A4_PROJ_${Date.now()}`;
    registerFixtureScenario(key, {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "proj",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "i1",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "proj",
          parameters: {},
          constraints: ["NO_EFFECT"],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "Autorite replyDraft Strategy B historique",
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA_PROJECTION,
        blocks: [{ kind: "text", id: "t", markdown: "Projection secondaire non autorite" }],
      },
    });
    const policy = buildCognitivePolicy(key, "TEST_BOUNDARY");
    const result = await generateNoraReply({
      userText: key,
      contextSnippets: [],
      policyOverride: policy,
    });
    expect(result.status).toBe("COMPLETE");
    expect(result.content).toBe("Autorite replyDraft Strategy B historique");
    const vc = result.qualification.visualComposition as VisualComposition | undefined;
    expect(vc?.contentAuthority).toBe("legacy_projection");
  });

  it("A4-07 duplicate intents → UNKNOWN UNAVAILABLE, no provider contact", async () => {
    forceFixture();
    const key = `E05_A4_DUP_${Date.now()}`;
    const intent = {
      id: "i1",
      capabilityId: "d3.converse" as const,
      mode: "EXPLORE" as const,
      summary: "dup",
      parameters: {},
      constraints: ["NO_EFFECT"],
      dependsOn: [] as string[],
      sourceEvidence: [] as string[],
    };
    registerFixtureScenario(key, {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "dup",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [intent, { ...intent }],
      clarifications: [],
      replyDraft: "ne doit pas completer",
    });
    const policy = buildCognitivePolicy(key, "TEST_BOUNDARY");
    const result = await generateNoraReply({
      userText: key,
      contextSnippets: [],
      policyOverride: policy,
    });
    expect(result.status).toBe("UNKNOWN");
    expect(result.qualification.status).toBe("UNAVAILABLE");
    expect(result.attempts[0]?.providerContacted).toBe("NO");
    expect(result.content).not.toBe("ne doit pas completer");
  });
});

describe("A1 exact derive boundaries", () => {
  function textComp(len: number): VisualComposition {
    return {
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      contentAuthority: "canonical_sections",
      blocks: [{ kind: "text", id: "t1", markdown: "x".repeat(len) }],
    };
  }

  it("A1 exact 11999 / 12000 / 12001", async () => {
    const { deriveReplyDraftFromCanonicalSections } = await import(
      "@/domains/conversation/conversational-composition"
    );
    const a = deriveReplyDraftFromCanonicalSections(textComp(11999));
    const b = deriveReplyDraftFromCanonicalSections(textComp(12000));
    const c = deriveReplyDraftFromCanonicalSections(textComp(12001));
    expect(a.ok).toBe(true);
    if (a.ok) expect(a.length).toBe(11999);
    expect(b.ok).toBe(true);
    if (b.ok) expect(b.length).toBe(REPLY_DRAFT_MAX_CHARS);
    expect(c.ok).toBe(false);
    if (!c.ok && c.reason === "CV_DERIVE_OVERFLOW") {
      expect(c.length).toBe(12001);
    }
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/strategy-a-corrective-a1-a4.test.ts`
```ts
import { describe, expect, it } from "vitest";
import {
  buildExhaustiveBlockFallback,
  deriveReplyDraftFromCanonicalSections,
  REPLY_DRAFT_MAX_CHARS,
} from "@/domains/conversation/conversational-composition";
import { validateNoraTurnQualification } from "@/domains/conversation/semantic-qualification";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
  VISUAL_COMPOSITION_SCHEMA_PROJECTION,
  VisualCompositionAgentOutputSchema,
} from "@/domains/conversation/visual-composition";

function canonicalTextBlock(markdown: string) {
  return {
    schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    blocks: [{ kind: "text" as const, id: "t1", markdown }],
  };
}

/** Build composition whose derived join exceeds MAX without per-field parse truncation. */
function multiTextOverLimit(total: number) {
  const chunk = 3500;
  const blocks = [];
  let left = total;
  let i = 0;
  while (left > 0) {
    const n = Math.min(chunk, left);
    blocks.push({ kind: "text" as const, id: `t${i}`, markdown: "y".repeat(n) });
    left -= n;
    i += 1;
  }
  return { schemaVersion: VISUAL_COMPOSITION_SCHEMA, blocks };
}

describe("A1 — no silent truncation (exact oracles)", () => {
  /** Bypass per-field Zod caps; measure post-assembly length only. */
  function assembledAuthority(len: number) {
    return {
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      contentAuthority: "canonical_sections" as const,
      blocks: [{ kind: "text" as const, id: "t1", markdown: "x".repeat(len) }],
    };
  }

  it("A1 exact: 11999 and 12000 succeed; 12001 overflows", () => {
    const a = deriveReplyDraftFromCanonicalSections(assembledAuthority(11999));
    const b = deriveReplyDraftFromCanonicalSections(assembledAuthority(12000));
    const c = deriveReplyDraftFromCanonicalSections(assembledAuthority(12001));
    expect(a.ok).toBe(true);
    if (a.ok) expect(a.length).toBe(11999);
    expect(b.ok).toBe(true);
    if (b.ok) expect(b.length).toBe(REPLY_DRAFT_MAX_CHARS);
    expect(c.ok).toBe(false);
    if (!c.ok && c.reason === "CV_DERIVE_OVERFLOW") {
      expect(c.length).toBe(12001);
      expect(c.max).toBe(REPLY_DRAFT_MAX_CHARS);
    }
  });

  it("A1 multi-block: separators included; over limit refuses (no slice)", () => {
    // 4×3500 = 14000 + 3×"\n\n" > 12000
    const over = multiTextOverLimit(14000);
    const comp = parseVisualComposition(over)!;
    expect(comp).toBeTruthy();
    const d = deriveReplyDraftFromCanonicalSections(comp);
    expect(d.ok).toBe(false);
    if (!d.ok && d.reason === "CV_DERIVE_OVERFLOW") {
      expect(d.length).toBeGreaterThan(REPLY_DRAFT_MAX_CHARS);
    }
    // under with separators still exact
    const under = parseVisualComposition(canonicalTextBlock("x".repeat(3000)))!;
    const du = deriveReplyDraftFromCanonicalSections(under);
    expect(du.ok).toBe(true);
    if (du.ok) expect(du.length).toBe(3000);
  });

  it("A1 reserve/important after limit + qualification refuse (not FINAL truncated)", () => {
    const v = validateNoraTurnQualification({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      replyDraft: "ignored",
      intents: [],
      visualComposition: multiTextOverLimit(14000),
    });
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.reason).toMatch(/^CANONICAL_REPLY_OVERFLOW:/);
  });
});

describe("A2 — exhaustive section fields by family", () => {
  it("A2-text: markdown preserved as-is", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t", markdown: "Prose essentielle A2." }],
    })!;
    const d = deriveReplyDraftFromCanonicalSections(comp);
    expect(d.ok).toBe(true);
    if (d.ok) expect(d.text).toBe("Prose essentielle A2.");
  });

  it("A2-comparison: title/pros/cons/criteria/recommendation/provenance", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "c",
          title: "Options",
          alternatives: [
            {
              id: "a1",
              title: "Option A",
              summary: "Résumé A",
              pros: ["rapide"],
              cons: ["coût"],
            },
            {
              id: "a2",
              title: "Option B",
              summary: "Résumé B",
              pros: ["robuste"],
              cons: ["lent"],
            },
          ],
          criteria: [
            {
              id: "cr1",
              label: "Délai (j)",
              unit: "j",
              values: { a1: "3", a2: "10" },
            },
          ],
          recommendation: "Préférer A si urgence",
          provenance: [{ label: "Note N1", kind: "document" }],
          textAlternative: "alt comparaison",
        },
      ],
    })!;
    const fb = buildExhaustiveBlockFallback(comp.blocks[0]!);
    expect(fb).toContain("Options");
    expect(fb).toContain("Avantages — rapide");
    expect(fb).toContain("Limites — coût");
    expect(fb).toContain("Délai (j)");
    expect(fb).toContain("Option A: 3");
    expect(fb).toContain("Recommandation: Préférer A si urgence");
    expect(fb).toContain("Sources: Note N1");
  });

  it("A2-sequence: role/detail/dependsOn/dateLabel", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "sequence",
          id: "s",
          title: "Trajectoire",
          steps: [
            {
              id: "s1",
              title: "Cadrage",
              role: "hypothesis",
              detail: "périmètre initial",
              dateLabel: "S1",
            },
            {
              id: "s2",
              title: "Validation",
              role: "decision",
              detail: "go/no-go",
              dependsOn: ["s1"],
              dateLabel: "S2",
            },
          ],
          textAlternative: "alt seq",
        },
      ],
    })!;
    const fb = buildExhaustiveBlockFallback(comp.blocks[0]!);
    expect(fb).toContain("1. Cadrage {hypothesis} — périmètre initial [S1]");
    expect(fb).toContain("dépend de: Cadrage");
    expect(fb).toContain("{decision}");
    expect(fb).toContain("[S2]");
  });

  it("A2-relations: detail/kind/lane/relation/conditions", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r",
          title: "Graphe",
          layoutHint: "decisionTree",
          nodes: [
            { id: "c", label: "Condition", kind: "unknown", detail: "détail condition" },
            {
              id: "y",
              label: "Branche oui",
              kind: "hypothesis",
              laneId: "voie-oui",
              detail: "détail oui",
            },
            { id: "n", label: "Branche non", kind: "finding", detail: "détail non" },
          ],
          edges: [
            { from: "c", to: "y", relation: "condition_true", label: "oui" },
            { from: "c", to: "n", relation: "condition_false", label: "non" },
          ],
          textAlternative: "alt arbre",
        },
      ],
    })!;
    const fb = buildExhaustiveBlockFallback(comp.blocks[0]!);
    expect(fb).toContain("détail condition");
    expect(fb).toContain("[unknown]");
    expect(fb).toContain("[hypothesis]");
    expect(fb).toContain("(voie: voie-oui)");
    expect(fb).toContain("Si oui");
    expect(fb).toContain("Si non");
    expect(fb).toContain("relation=condition_true");
    expect(fb).toContain("relation=condition_false");
  });

  it("A2-sync: sync expressed as directed sync vers (not reciprocal)", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "p",
          title: "Par",
          layoutHint: "parallelProcess",
          nodes: [
            { id: "a", label: "A", kind: "observation", laneId: "Voie A" },
            { id: "g", label: "Gate", kind: "finding", laneId: "Gate" },
          ],
          edges: [{ from: "a", to: "g", relation: "sync", label: "prêt" }],
          textAlternative: "sync",
        },
      ],
    })!;
    const fb = buildExhaustiveBlockFallback(comp.blocks[0]!);
    expect(fb).toContain("synchronise vers");
    expect(fb).not.toContain("↔");
  });

  it("A2-synthesis: tone/role/detail preserved", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "synthesis",
          id: "sy",
          title: "Synthèse",
          items: [
            {
              id: "i1",
              label: "Risque",
              detail: "dépendance externe",
              tone: "risk",
              role: "hypothesis",
            },
          ],
          textAlternative: "alt synth",
        },
      ],
    })!;
    expect(comp).toBeTruthy();
    const fb = buildExhaustiveBlockFallback(comp!.blocks[0]!);
    expect(fb).toContain("Risque: dépendance externe");
    expect(fb).toContain("[risk]");
    expect(fb).toContain("{hypothesis}");
  });

  it("A2-choices/references: owned by owners — not in derived draft body", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        { kind: "text", id: "t", markdown: "Corps principal." },
        { kind: "choices", id: "ch", choiceIds: ["c1"] },
        { kind: "references", id: "rf", referenceIds: ["r1"] },
      ],
    })!;
    const d = deriveReplyDraftFromCanonicalSections(comp);
    expect(d.ok).toBe(true);
    if (d.ok) {
      expect(d.text).toBe("Corps principal.");
      expect(d.text).not.toContain("c1");
      expect(d.text).not.toContain("r1");
    }
  });
});

describe("A3 — authority versioning", () => {
  it("A3-01 e05 → legacy_projection", () => {
    const c = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
      blocks: [{ kind: "text", id: "t", markdown: "hi" }],
    })!;
    expect(c!.contentAuthority).toBe("legacy_projection");
  });

  it("A3-02 projection-v1 Strategy B → legacy_projection (not retrofitted)", () => {
    const c = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_PROJECTION,
      blocks: [{ kind: "text", id: "t", markdown: "hi" }],
    })!;
    expect(c!.schemaVersion).toBe(VISUAL_COMPOSITION_SCHEMA_PROJECTION);
    expect(c!.contentAuthority).toBe("legacy_projection");
  });

  it("A3-03/07 canonical-v1 WRITE only", () => {
    const c = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t", markdown: "canon" }],
    })!;
    expect(c!.contentAuthority).toBe("canonical_sections");
    expect(VisualCompositionAgentOutputSchema.safeParse({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_PROJECTION,
      blocks: [{ kind: "text", id: "t", markdown: "x" }],
    }).success).toBe(false);
    expect(VisualCompositionAgentOutputSchema.safeParse({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t", markdown: "x" }],
    }).success).toBe(true);
  });

  it("A3-06 unknown schema rejected", () => {
    expect(
      parseVisualComposition({
        schemaVersion: "unknown-composition-v9",
        blocks: [{ kind: "text", id: "t", markdown: "x" }],
      }),
    ).toBeNull();
  });
});

describe("A4 — fixture/LIVE same gate (divergent replyDraft)", () => {
  it("A4-01: divergent replyDraft overwritten by canonical derive", () => {
    const v = validateNoraTurnQualification({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      replyDraft: "TEXTE DIVERGENT QUI NE DOIT PAS SURVIVRE",
      intents: [],
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [
          {
            kind: "text",
            id: "t1",
            markdown: "Prose canonique unique issue des sections.",
          },
        ],
      },
    });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.replyDraft).toBe("Prose canonique unique issue des sections.");
    expect(v.value.replyDraft).not.toContain("DIVERGENT");
    const auth = (v.value.visualComposition as { contentAuthority?: string } | undefined)
      ?.contentAuthority;
    expect(auth).toBe("canonical_sections");
  });

  it("A4-02: projection-v1 does not derive (Strategy B path)", () => {
    const v = validateNoraTurnQualification({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      replyDraft: "Autorité replyDraft Strategy B",
      intents: [],
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA_PROJECTION,
        blocks: [{ kind: "text", id: "t1", markdown: "Projection secondaire" }],
      },
    });
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.replyDraft).toBe("Autorité replyDraft Strategy B");
    const auth = (v.value.visualComposition as { contentAuthority?: string } | undefined)
      ?.contentAuthority;
    expect(auth).toBe("legacy_projection");
  });
});
```

### Fail-path extrait `fixtureReply` (nora-adapter.ts L404–456)
```ts
  // Same D3 gate as LIVE (A4): validation failure → UNKNOWN/UNAVAILABLE, never COMPLETE
  // with an unvalidated qualification. No provider contact invented.
  const validatedFixture = validateNoraTurnQualification(qualification);
  if (!validatedFixture.ok) {
    const failed = unavailableQualification(validatedFixture.reason);
    emitObs({
      event_name: "d3.nora.fixture_complete",
      component: "d3.nora_adapter",
      operation_id: input.toolScope?.operationId,
      generation_id: generationId,
      attempt_id: attemptId,
      outcome: "UNKNOWN",
      policy_version: policy.policyVersion,
      profile_type:
        policy.profileType === "TEST_BOUNDARY" ? "TEST_BOUNDARY" : "OPERATIONAL",
      meta: {
        profile: policy.profile,
        tool_calls: toolCallsObserved,
        profile_type_detail: policy.profileType,
        qualification_status: failed.status,
        validation_reason: validatedFixture.reason,
        provider_contacted: "NO",
      },
    });
    return {
      generationId,
      mode: "deterministic-fixture",
      status: "UNKNOWN",
      streamingProvisional: false,
      streamingAttempted: false,
      streamingDelivered: false,
      streamingNotes: `QUALIFICATION_${validatedFixture.reason}`,
      content: failed.replyDraft,
      policy,
      modelRequested: policy.modelRequested,
      modelApplied: "deterministic-fixture",
      effortRequested: policy.effortRequested,
      effortApplied: policy.effortRequested,
      attempts: [
        {
          attemptId,
          kind: toolCallsObserved ? "fixture_tools" : "fixture",
          outcome: "UNKNOWN",
          notes: `QUALIFICATION_${validatedFixture.reason}`,
          providerContacted: "NO",
        },
      ],
      toolCallsObserved,
      d4CharsReturned,
      coverageNotes: toolNotes || undefined,
      qualification: failed,
    };
  }
```

### `projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/index.ts`
```ts
/**
 * Conversational composition — Studio presentation subsystem.
 * Product responsibility: adaptive restitution of Nora replies.
 * Wire format today: validated `e05-visual-composition-v1` (COMPATIBILITÉ BORNÉE).
 * Presentation contract: `conversational-composition-v1` admission (CV-*).
 */

export {
  CONVERSATIONAL_COMPOSITION_CONTRACT,
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
  projectionSubstanceRenderComplete,
  selectComparisonVariant,
  selectSequenceVariant,
  selectRelationsVariant,
  type AdmissionContext,
  type AdmissionResult,
  type AdmittedBlock,
  type BodyPresentationPolicy,
  type ComparisonVariant,
  type CompositionFamily,
  type RelationsVariant,
  type SequenceVariant,
} from "./admission";

export {
  extractProjectionAnchors,
  extractProjectionClaims,
  mayPresentGraphicComposition,
  maySubstituteNarrative,
  projectionAnchorsAlignWithCanonical,
  detectCrudeContradictions,
  detectPreferenceContradiction,
  claimsSupportedByCanonical,
} from "./fidelity";

export {
  validateRelationsTopology,
  validateDecisionTree,
  validateDependencies,
  validateParallelProcess,
  topologicalLayers,
  type TopologyVerdict,
} from "./topology";

export {
  deriveReplyDraftFromCanonicalSections,
  REPLY_DRAFT_MAX_CHARS,
  type DeriveReplyDraftResult,
} from "./derive-text";
```

### `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-v05.md`
```md
# Matrice A1–A6 / C — Strategy A sécurisation (06 V0.5)

**Candidat :** `sfia/next-ml4d-composition-adaptative` @ `a783f014` (+ WT)
**Date :** 2026-11-18 · Lane DEV · NO RELEASE

| ID | Avant (V0.5 défaut) | Après | Preuve | Exit |
| --- | --- | --- | --- | --- |
| **A4 / P0** | `fixtureReply` garde qualif brute si `!validated.ok` | UNKNOWN + UNAVAILABLE + `providerContacted:NO` ; content = reply UNAVAILABLE | `fixture-reply-a4-adapter-boundary` A4-02/03/07 via `generateNoraReply` | **CLOSED** |
| **A1 / P1** | oracle « at limit » approximatif | exact 11999 / 12000 / 12001 ; multi-block + separators ; no silent slice | `strategy-a-corrective-a1-a4` A1 exact | **CLOSED** |
| **A2 / P1** | relations OK ; autres familles partielles | text/comparison/sequence/relations/sync/synthesis/choices+refs ownership | A2 family tests | **CLOSED** (substantiel) |
| **A3 / P1** | e05 / projection-v1 / canonical-v1 | autorités préservées ; WRITE AgentSchema = canonical-v1 only ; unknown refused | A3 unit + adapter A4-05 | **CLOSED** (fixtures ; pas audit PG historique complet) |
| **A5 / P1** | topologies + sync UI ; Figma contract extracted | T02 PASS ; captures locales présentes ; handoff MD ne transporte pas PNG | T02 + evidence PNG locaux | **VISUAL REVIEW NOT COMPLETED** (canal handoff) |
| **A6 / P1** | 75 Vitest + T02 entrée | 87 Vitest ciblés PASS + T02 PASS ; tsc touched CLEAN ; tsc global préexistant hors scope | commandes Review Pack | **PASS avec réserves TS préexistantes** |

## Fake / Real

| Niveau | Statut |
| --- | --- |
| FAKE/DEV fixture end-to-end A4 | **PROVEN** |
| DETERMINISTIC A1–A3 | **PROVEN** |
| BROWSER T02 | **PASS** |
| LIVE provider / REAL boundary | **NOT RUN** |

## C-01–C-22 (synthèse avant/après V0.5)

| C | Avant | Après |
| --- | --- | --- |
| C-01 source unique | Strategy A | inchangé |
| C-02 derive vs divergent | derive OK ; fixture fail path unsafe | derive + fail path SAFE |
| C-04 overflow | refus explicite | + oracles exacts |
| C-05/06 versions | 3 schémas | préservés |
| C-10–12 graphes | cycles/shared-child/parallel | préservés + T02 |
| C-16 no 2nd AI | OK | OK |
| C-17 no silent truncate | OK | + exact lengths |
| C-19 no retro-requal | OK | OK |
| C-20 fixture/LIVE parity | validator called but fail ignored | **parity on fail** |
| C-22 no migration | OK | OK |
```

### `admission.ts` (intégral)
```ts
/**
 * Conversational composition — Studio admission & variant selection (CV-*).
 * Deterministic presentation policy only — never invents facts or authority.
 * Consumes validated visual compositions (legacy wire) after fail-closed parse.
 *
 * Body substitution (Strategy B): structural render-completeness only.
 * Never claims replyDraft semantic equivalence from Zod success.
 */

import type { VisualBlock, VisualComposition } from "@/domains/conversation/visual-composition";
import {
  compositionOwnsBody,
  hasGraphicBlocks,
} from "@/domains/conversation/visual-composition";
import { mayPresentGraphicComposition, maySubstituteNarrative } from "./fidelity";
import { validateRelationsTopology } from "./topology";

export const CONVERSATIONAL_COMPOSITION_CONTRACT = "conversational-composition-v1" as const;

/** Families delivered when wire+layout support them. */
export type CompositionFamily =
  | "narrative"
  | "comparison"
  | "sequence"
  | "dependencies"
  | "decisionPaths"
  | "parallelProcess"
  | "references"
  | "choices";

export type ComparisonVariant = "cards" | "matrix" | "stacked" | "text";
export type SequenceVariant = "horizontal" | "vertical" | "text";
/** Directed layouts + exhaustive list fallback (no fixed-coordinate SVG). */
export type RelationsVariant = "directed" | "list" | "text";

/**
 * substitute — composition may replace replyDraft body (structural completeness only).
 * complement — keep replyDraft visible; composition is additive.
 * markdown_only — do not render composition as body owner.
 */
export type BodyPresentationPolicy = "substitute" | "complement" | "markdown_only";

export type AdmittedBlock = {
  block: VisualBlock;
  family: CompositionFamily;
  variant: string;
  reasonCodes: string[];
};

export type AdmissionResult = {
  contract: typeof CONVERSATIONAL_COMPOSITION_CONTRACT;
  ownsBody: boolean;
  /** Deterministic body policy — not a semantic equality proof vs replyDraft. */
  bodyPolicy: BodyPresentationPolicy;
  admitted: AdmittedBlock[];
  fallbackReasons: string[];
  capacityNotes: string[];
  containerWidthPx: number | null;
};

export type AdmissionContext = {
  /** Effective Travail conversation column width when known. */
  containerWidthPx?: number | null;
  /** Canonical replyDraft / message content — required for graphic presentation (C-04). */
  canonicalText?: string | null;
};

function labelLen(s: string | undefined): number {
  return (s ?? "").trim().length;
}

function maxOptionTextLen(block: Extract<VisualBlock, { kind: "comparison" }>): number {
  let max = 0;
  for (const o of block.alternatives) {
    max = Math.max(max, labelLen(o.title) + labelLen(o.summary));
    for (const a of o.pros ?? []) max = Math.max(max, labelLen(a));
    for (const c of o.cons ?? []) max = Math.max(max, labelLen(c));
  }
  return max;
}

/**
 * CV-04/05 — comparison variant from cardinality, label density, and width.
 * No dogmatic "N cards" threshold alone.
 */
export function selectComparisonVariant(
  block: Extract<VisualBlock, { kind: "comparison" }>,
  widthPx: number | null,
): { variant: ComparisonVariant; reasonCodes: string[] } {
  const n = block.alternatives.length;
  const density = maxOptionTextLen(block);
  const criteria = block.criteria?.length ?? 0;
  const reasons: string[] = [];

  if (n < 2) {
    reasons.push("CV_COMPARISON_UNDER_CARDINALITY");
    return { variant: "text", reasonCodes: reasons };
  }
  if (n > 18) {
    reasons.push("CV_COMPARISON_OVER_CAPACITY");
    return { variant: "text", reasonCodes: reasons };
  }

  const narrow = widthPx != null && widthPx < 560;
  const medium = widthPx != null && widthPx < 900;

  if (n >= 5 || criteria >= 3 || (n >= 4 && density > 220)) {
    reasons.push("CV_COMPARISON_MATRIX_DENSITY");
    // Narrow: stacked keeps all substance without horizontal table pressure.
    return { variant: narrow ? "stacked" : "matrix", reasonCodes: reasons };
  }
  if (narrow || (n >= 3 && density > 280)) {
    reasons.push(narrow ? "CV_COMPARISON_NARROW_STACK" : "CV_COMPARISON_LONG_COPY_STACK");
    return { variant: "stacked", reasonCodes: reasons };
  }
  if (medium && n >= 3) {
    reasons.push("CV_COMPARISON_MEDIUM_CARDS");
    return { variant: "cards", reasonCodes: reasons };
  }
  reasons.push("CV_COMPARISON_CARDS");
  return { variant: "cards", reasonCodes: reasons };
}

export function selectSequenceVariant(
  block: Extract<VisualBlock, { kind: "sequence" }>,
  widthPx: number | null,
): { variant: SequenceVariant; reasonCodes: string[] } {
  const n = block.steps.length;
  const long = block.steps.some((s) => labelLen(s.title) + labelLen(s.detail) > 160);
  const reasons: string[] = [];
  if (n === 0) {
    reasons.push("CV_SEQUENCE_EMPTY");
    return { variant: "text", reasonCodes: reasons };
  }
  if (n > 12) {
    reasons.push("CV_SEQUENCE_OVER_CAPACITY");
    return { variant: "text", reasonCodes: reasons };
  }
  const narrow = widthPx != null && widthPx < 720;
  if (narrow || n >= 5 || long) {
    reasons.push(narrow ? "CV_SEQUENCE_NARROW_VERTICAL" : "CV_SEQUENCE_VERTICAL_DENSITY");
    return { variant: "vertical", reasonCodes: reasons };
  }
  reasons.push("CV_SEQUENCE_HORIZONTAL");
  return { variant: "horizontal", reasonCodes: reasons };
}

/**
 * Relations: directed CSS layout when layoutHint + envelope allow; else exhaustive list.
 * Fixed-coordinate SVG remains forbidden.
 */
export function selectRelationsVariant(
  block: Extract<VisualBlock, { kind: "relations" }>,
  widthPx: number | null,
): { variant: RelationsVariant; reasonCodes: string[] } {
  const nodes = block.nodes.length;
  const edges = block.edges.length;
  const reasons: string[] = [];
  if (nodes === 0) {
    reasons.push("CV_RELATIONS_EMPTY");
    return { variant: "text", reasonCodes: reasons };
  }
  const ids = new Set(block.nodes.map((n) => n.id));
  const orphan = block.edges.some((e) => !ids.has(e.from) || !ids.has(e.to));
  if (orphan) {
    reasons.push("CV_RELATIONS_ORPHAN_EDGE");
    return { variant: "list", reasonCodes: reasons };
  }
  if (block.preferListFallback) {
    reasons.push("CV_RELATIONS_PREFER_LIST");
    return { variant: "list", reasonCodes: reasons };
  }
  // F2 — structural topology before claiming directed layout.
  if (block.layoutHint || edges > 0) {
    const topo = validateRelationsTopology(
      block.layoutHint
        ? block
        : { ...block, layoutHint: "dependencies" },
    );
    reasons.push(...topo.reasonCodes);
    if (!topo.ok || topo.mode === "list") {
      reasons.push("CV_RELATIONS_TOPOLOGY_LIST_FALLBACK");
      return { variant: "list", reasonCodes: reasons };
    }
  }
  const dense = nodes > 10 || edges > 14;
  const narrow = widthPx != null && widthPx < 520;
  const longLabels = block.nodes.some((n) => (n.label?.length ?? 0) > 80);
  if (dense || narrow || longLabels) {
    reasons.push(
      dense
        ? "CV_RELATIONS_DENSE_LIST"
        : narrow
          ? "CV_RELATIONS_NARROW_LIST"
          : "CV_RELATIONS_LONG_LABEL_LIST",
    );
    return { variant: "list", reasonCodes: reasons };
  }
  if (block.layoutHint || edges > 0) {
    reasons.push("CV_RELATIONS_DIRECTED_LAYOUT");
    return { variant: "directed", reasonCodes: reasons };
  }
  reasons.push("CV_RELATIONS_STRUCTURED_LIST");
  return { variant: "list", reasonCodes: reasons };
}

function familyFor(block: VisualBlock): CompositionFamily {
  switch (block.kind) {
    case "comparison":
      return "comparison";
    case "sequence":
      return "sequence";
    case "relations":
      if (block.layoutHint === "decisionTree") return "decisionPaths";
      if (block.layoutHint === "parallelProcess") return "parallelProcess";
      return "dependencies";
    case "synthesis":
    case "text":
      return "narrative";
    case "choices":
      return "choices";
    case "references":
      return "references";
    default:
      return "narrative";
  }
}

/**
 * Exhaustive human-readable fallback from validated block fields.
 * Never truncates. Prefer this over abbreviated textAlternative alone.
 */
export function buildExhaustiveBlockFallback(block: VisualBlock): string {
  if (block.kind === "text") {
    return block.markdown;
  }
  if (block.kind === "comparison") {
    const parts: string[] = [block.title];
    for (const a of block.alternatives) {
      parts.push(`${a.title}: ${a.summary}`);
      if (a.pros?.length) parts.push(`Avantages — ${a.pros.join("; ")}`);
      if (a.cons?.length) parts.push(`Limites — ${a.cons.join("; ")}`);
    }
    if (block.criteria?.length) {
      for (const c of block.criteria) {
        const vals = block.alternatives
          .map((a) => `${a.title}: ${c.values[a.id] ?? "—"}`)
          .join(" ; ");
        parts.push(`${c.label} — ${vals}`);
      }
    }
    if (block.recommendation) parts.push(`Recommandation: ${block.recommendation}`);
    if (block.provenance?.length) {
      parts.push(`Sources: ${block.provenance.map((p) => p.label).join("; ")}`);
    }
    // Prefer exhaustive reconstruction; append textAlternative only if it adds content.
    const body = parts.join("\n");
    if (block.textAlternative && !body.includes(block.textAlternative.slice(0, 80))) {
      return `${body}\n${block.textAlternative}`;
    }
    return body || block.textAlternative;
  }
  if (block.kind === "sequence") {
    const parts: string[] = [block.title];
    const titleById = new Map(block.steps.map((s) => [s.id, s.title] as const));
    block.steps.forEach((s, i) => {
      let line = `${i + 1}. ${s.title}`;
      if (s.role) line += ` {${s.role}}`;
      if (s.detail) line += ` — ${s.detail}`;
      if (s.dependsOn?.length) {
        line += ` (dépend de: ${s.dependsOn.map((id) => titleById.get(id) ?? id).join(", ")})`;
      }
      if (s.dateLabel) line += ` [${s.dateLabel}]`;
      parts.push(line);
    });
    return parts.join("\n") || block.textAlternative;
  }
  if (block.kind === "relations") {
    const parts: string[] = [block.title];
    if (block.layoutHint) parts.push(`Disposition: ${block.layoutHint}`);
    const titleById = new Map(block.nodes.map((n) => [n.id, n.label] as const));
    for (const n of block.nodes) {
      let line = `Élément: ${n.label}`;
      if (n.kind) line += ` [${n.kind}]`;
      if (n.laneId) line += ` (voie: ${n.laneId})`;
      if (n.detail) line += ` — ${n.detail}`;
      parts.push(line);
    }
    for (const e of block.edges) {
      const from = titleById.get(e.from) ?? e.from;
      const to = titleById.get(e.to) ?? e.to;
      const rel = e.relation ?? "flow";
      // Keep wire direction from→to; annotate relation without inventing inverse sense.
      const sense =
        rel === "condition_true"
          ? `Si oui (${from}) → ${to}`
          : rel === "condition_false"
            ? `Si non (${from}) → ${to}`
            : rel === "sync"
              ? `${from} synchronise vers ${to}`
              : rel === "depends_on"
                ? `${from} → ${to} (depends_on)`
                : `${from} → ${to}`;
      const withLabel = e.label ? `${sense} (${e.label})` : sense;
      parts.push(`${withLabel} · relation=${rel}`);
    }
    if (block.provenance?.length) {
      parts.push(`Sources: ${block.provenance.map((p) => p.label).join("; ")}`);
    }
    const body = parts.join("\n");
    if (block.textAlternative && !body.includes(block.textAlternative.slice(0, 80))) {
      return `${body}\n${block.textAlternative}`;
    }
    return body || block.textAlternative;
  }
  if (block.kind === "synthesis") {
    const parts: string[] = [block.title];
    for (const it of block.items) {
      let line = it.detail ? `${it.label}: ${it.detail}` : it.label;
      if (it.tone) line += ` [${it.tone}]`;
      if (it.role) line += ` {${it.role}}`;
      parts.push(line);
    }
    return parts.join("\n") || block.textAlternative;
  }
  return "";
}

/**
 * Structural completeness of projection fields that the renderer will expose visibly.
 * Does NOT prove equivalence with replyDraft.
 */
export function projectionSubstanceRenderComplete(composition: VisualComposition): boolean {
  for (const block of composition.blocks) {
    if (block.kind === "choices" || block.kind === "references") continue;
    if (block.kind === "text") {
      if (!block.markdown.trim()) return false;
      continue;
    }
    if (block.kind === "comparison") {
      if (block.alternatives.length < 2) return false;
      for (const a of block.alternatives) {
        if (!a.title.trim() || !a.summary.trim()) return false;
      }
      if (!block.textAlternative.trim() && !buildExhaustiveBlockFallback(block).trim()) {
        return false;
      }
      continue;
    }
    if (block.kind === "sequence") {
      if (block.steps.length < 1) return false;
      for (const s of block.steps) {
        if (!s.title.trim()) return false;
      }
      continue;
    }
    if (block.kind === "relations") {
      if (block.nodes.length < 1) return false;
      for (const n of block.nodes) {
        if (!n.label.trim()) return false;
      }
      continue;
    }
    if (block.kind === "synthesis") {
      if (block.items.length < 1) return false;
      for (const it of block.items) {
        if (!it.label.trim()) return false;
      }
    }
  }
  return composition.blocks.some(
    (b) => b.kind !== "choices" && b.kind !== "references",
  );
}

/**
 * C-04 — graphic compositions never substitute the canonical body.
 * They may complement only when deterministic anchor alignment passes.
 * Otherwise markdown_only (visual refused — no misleading dual presentation).
 */
function decideBodyPolicy(
  composition: VisualComposition,
  ownsBody: boolean,
  _admitted: AdmittedBlock[],
  fallbackReasons: string[],
  canonicalText: string | null | undefined,
): BodyPresentationPolicy {
  if (!ownsBody) return "markdown_only";

  // Strategy A — single semantic authority: sections own substance; body policy is identity-based.
  if (composition.contentAuthority === "canonical_sections") {
    if (!projectionSubstanceRenderComplete(composition)) {
      fallbackReasons.push("CV_BODY_SUBSTANCE_INCOMPLETE");
      return "markdown_only";
    }
    if (!hasGraphicBlocks(composition)) {
      fallbackReasons.push("CV_BODY_CANONICAL_NARRATIVE_SUBSTITUTE");
      return "substitute";
    }
    fallbackReasons.push("CV_BODY_CANONICAL_GRAPHIC_COMPLEMENT");
    return "complement";
  }

  const narrativeOnly = fallbackReasons.includes("CV_NARRATIVE_ONLY");
  if (narrativeOnly && !hasGraphicBlocks(composition)) {
    const narr = maySubstituteNarrative(composition, canonicalText);
    fallbackReasons.push(...narr.reasonCodes);
    return narr.ok ? "substitute" : "markdown_only";
  }

  if (!projectionSubstanceRenderComplete(composition)) {
    fallbackReasons.push("CV_BODY_SUBSTANCE_INCOMPLETE");
    return "markdown_only";
  }

  if (!hasGraphicBlocks(composition)) {
    const narr = maySubstituteNarrative(composition, canonicalText);
    fallbackReasons.push(...narr.reasonCodes);
    return narr.ok ? "substitute" : "markdown_only";
  }

  const fidelity = mayPresentGraphicComposition(composition, canonicalText);
  fallbackReasons.push(...fidelity.reasonCodes);
  if (!fidelity.ok) {
    return "markdown_only";
  }
  // Legacy dual-author: aligned graphics complement replyDraft (never mask).
  fallbackReasons.push("CV_BODY_GRAPHIC_COMPLEMENT_ONLY");
  return "complement";
}

/**
 * Admit a fail-closed-parsed composition into presentable blocks with variants.
 * CV-10: callers must isolate render errors per block.
 */
export function admitConversationalComposition(
  composition: VisualComposition | null | undefined,
  ctx: AdmissionContext = {},
): AdmissionResult {
  const width = ctx.containerWidthPx ?? null;
  const fallbackReasons: string[] = [];
  const capacityNotes: string[] = [];

  if (!composition) {
    return {
      contract: CONVERSATIONAL_COMPOSITION_CONTRACT,
      ownsBody: false,
      bodyPolicy: "markdown_only",
      admitted: [],
      fallbackReasons: ["CV_NO_COMPOSITION"],
      capacityNotes,
      containerWidthPx: width,
    };
  }

  const ownsBody = compositionOwnsBody(composition);
  if (!ownsBody) {
    fallbackReasons.push("CV_COMPOSITION_DOES_NOT_OWN_BODY");
  }
  if (!hasGraphicBlocks(composition) && composition.blocks.every((b) => b.kind === "text")) {
    fallbackReasons.push("CV_NARRATIVE_ONLY");
  }

  capacityNotes.push("CV_WIRE_MAX_ALTS_12");
  capacityNotes.push("CV_SCHEMA_READ_E05_PROJECTION_V1_CANONICAL_V1");
  capacityNotes.push("CV_SCHEMA_WRITE_CANONICAL_V1_ONLY");

  const admitted: AdmittedBlock[] = [];
  for (const block of composition.blocks) {
    const family = familyFor(block);
    if (block.kind === "comparison") {
      const sel = selectComparisonVariant(block, width);
      admitted.push({ block, family, variant: sel.variant, reasonCodes: sel.reasonCodes });
      continue;
    }
    if (block.kind === "sequence") {
      const sel = selectSequenceVariant(block, width);
      admitted.push({ block, family, variant: sel.variant, reasonCodes: sel.reasonCodes });
      continue;
    }
    if (block.kind === "relations") {
      const sel = selectRelationsVariant(block, width);
      admitted.push({ block, family, variant: sel.variant, reasonCodes: sel.reasonCodes });
      continue;
    }
    admitted.push({
      block,
      family,
      variant: block.kind === "synthesis" ? "callout" : "default",
      reasonCodes: ["CV_DEFAULT_VARIANT"],
    });
  }

  const bodyPolicy = decideBodyPolicy(
    composition,
    ownsBody,
    admitted,
    fallbackReasons,
    ctx.canonicalText,
  );

  return {
    contract: CONVERSATIONAL_COMPOSITION_CONTRACT,
    ownsBody,
    bodyPolicy,
    admitted,
    fallbackReasons,
    capacityNotes,
    containerWidthPx: width,
  };
}
```

### `topology.ts` (intégral)
```ts
/**
 * Structural topology validation for relations blocks (F2).
 * Independent of fidelity (content) and of CSS presentation.
 */

import type { RelationsBlock } from "@/domains/conversation/visual-composition";

export type TopologyVerdict =
  | { ok: true; reasonCodes: string[]; mode: "directed" | "list" }
  | { ok: false; reasonCodes: string[]; mode: "list" };

function edgeEndsValid(block: RelationsBlock): string[] {
  const ids = new Set(block.nodes.map((n) => n.id));
  const reasons: string[] = [];
  for (const e of block.edges) {
    if (!ids.has(e.from) || !ids.has(e.to)) {
      reasons.push("CV_TOPOLOGY_EDGE_ENDPOINT_UNKNOWN");
    }
    if (e.from === e.to) {
      reasons.push("CV_TOPOLOGY_SELF_LOOP");
    }
  }
  return reasons;
}

function hasCycle(block: RelationsBlock): boolean {
  const adj = new Map<string, string[]>();
  for (const n of block.nodes) adj.set(n.id, []);
  for (const e of block.edges) {
    adj.get(e.from)?.push(e.to);
  }
  const visiting = new Set<string>();
  const done = new Set<string>();
  const dfs = (id: string): boolean => {
    if (visiting.has(id)) return true;
    if (done.has(id)) return false;
    visiting.add(id);
    for (const nxt of adj.get(id) ?? []) {
      if (dfs(nxt)) return true;
    }
    visiting.delete(id);
    done.add(id);
    return false;
  };
  for (const n of block.nodes) {
    if (dfs(n.id)) return true;
  }
  return false;
}

/** Incoming degree map. */
function inDegree(block: RelationsBlock): Map<string, number> {
  const deg = new Map<string, number>();
  for (const n of block.nodes) deg.set(n.id, 0);
  for (const e of block.edges) {
    deg.set(e.to, (deg.get(e.to) ?? 0) + 1);
  }
  return deg;
}

/**
 * decisionTree: a true arborescence — not merely a DAG with one root.
 * - exactly one root (in-degree 0)
 * - every other node has exactly one parent (in-degree 1)
 * - no cycles, no orphans, all nodes reachable from root
 * Shared child (in-degree > 1) → list / directed-deps family, never a fake tree.
 */
export function validateDecisionTree(block: RelationsBlock): TopologyVerdict {
  const ends = edgeEndsValid(block);
  if (ends.length) {
    return { ok: false, reasonCodes: ends, mode: "list" };
  }
  if (!block.edges.length || block.nodes.length < 2) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_TREE_TOO_SPARSE"], mode: "list" };
  }
  if (hasCycle(block)) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_TREE_CYCLE"], mode: "list" };
  }
  const deg = inDegree(block);
  const roots = [...deg.entries()].filter(([, d]) => d === 0).map(([id]) => id);
  if (roots.length !== 1) {
    return {
      ok: false,
      reasonCodes: ["CV_TOPOLOGY_TREE_NOT_SINGLE_ROOT"],
      mode: "list",
    };
  }
  for (const [id, d] of deg) {
    if (id === roots[0]) continue;
    if (d !== 1) {
      return {
        ok: false,
        reasonCodes: ["CV_TOPOLOGY_TREE_SHARED_CHILD"],
        mode: "list",
      };
    }
  }
  // Every non-root must be reachable from root
  const adj = new Map<string, string[]>();
  for (const n of block.nodes) adj.set(n.id, []);
  for (const e of block.edges) adj.get(e.from)?.push(e.to);
  const seen = new Set<string>();
  const stack = [roots[0]!];
  while (stack.length) {
    const id = stack.pop()!;
    if (seen.has(id)) continue;
    seen.add(id);
    for (const nxt of adj.get(id) ?? []) stack.push(nxt);
  }
  if (seen.size !== block.nodes.length) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_TREE_DISCONNECTED"], mode: "list" };
  }
  return { ok: true, reasonCodes: ["CV_TOPOLOGY_TREE_OK"], mode: "directed" };
}

/**
 * dependencies: directed DAG preferred; cycles → list fallback (F2-03).
 */
export function validateDependencies(block: RelationsBlock): TopologyVerdict {
  const ends = edgeEndsValid(block);
  if (ends.length) {
    return { ok: false, reasonCodes: ends, mode: "list" };
  }
  if (!block.edges.length) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_DEPS_NO_EDGES"], mode: "list" };
  }
  if (hasCycle(block)) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_DEPS_CYCLE"], mode: "list" };
  }
  return { ok: true, reasonCodes: ["CV_TOPOLOGY_DEPS_OK"], mode: "directed" };
}

/**
 * parallelProcess: at least 2 nodes; edges optional (lanes).
 * If edges present, must not cycle.
 */
export function validateParallelProcess(block: RelationsBlock): TopologyVerdict {
  const ends = edgeEndsValid(block);
  if (ends.length) {
    return { ok: false, reasonCodes: ends, mode: "list" };
  }
  if (block.nodes.length < 2) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_PARALLEL_TOO_FEW"], mode: "list" };
  }
  if (block.edges.length && hasCycle(block)) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_PARALLEL_CYCLE"], mode: "list" };
  }
  return { ok: true, reasonCodes: ["CV_TOPOLOGY_PARALLEL_OK"], mode: "directed" };
}

export function validateRelationsTopology(block: RelationsBlock): TopologyVerdict {
  const hint = block.layoutHint;
  if (hint === "decisionTree") return validateDecisionTree(block);
  if (hint === "dependencies") return validateDependencies(block);
  if (hint === "parallelProcess") return validateParallelProcess(block);
  // No specialized hint → list is correct (not a failure of directed family)
  return { ok: true, reasonCodes: ["CV_TOPOLOGY_LIST_DEFAULT"], mode: "list" };
}

/** Topological layers for DAG rendering (F3). Empty if cycle. */
export function topologicalLayers(block: RelationsBlock): string[][] {
  if (hasCycle(block)) return [];
  const deg = inDegree(block);
  const adj = new Map<string, string[]>();
  for (const n of block.nodes) adj.set(n.id, []);
  for (const e of block.edges) adj.get(e.from)?.push(e.to);

  const layers: string[][] = [];
  let frontier = [...deg.entries()].filter(([, d]) => d === 0).map(([id]) => id);
  const placed = new Set<string>();
  while (frontier.length) {
    layers.push(frontier);
    for (const id of frontier) placed.add(id);
    const next: string[] = [];
    for (const id of frontier) {
      for (const nxt of adj.get(id) ?? []) {
        const d = (deg.get(nxt) ?? 1) - 1;
        deg.set(nxt, d);
        if (d === 0 && !placed.has(nxt)) next.push(nxt);
      }
    }
    frontier = next;
  }
  // orphans not reached
  for (const n of block.nodes) {
    if (!placed.has(n.id)) {
      layers.push([n.id]);
      placed.add(n.id);
    }
  }
  return layers;
}
```

### `fidelity.ts` (intégral)
```ts
/**
 * Deterministic canonical-fidelity gates (F1 / C-04).
 * Distinguishes: anchor presence ≠ structural validity ≠ content equivalence.
 * Never claims full semantic equality; refuses presentation when substance
 * claims are not literally supported by the canonical replyDraft.
 */

import type { VisualBlock, VisualComposition } from "@/domains/conversation/visual-composition";
import { hasGraphicBlocks } from "@/domains/conversation/visual-composition";

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function pushClaim(claims: string[], raw: string | undefined | null, minLen = 3): void {
  const t = (raw ?? "").trim();
  if (t.length >= minLen) claims.push(t);
}

/**
 * Substance claims that must appear in canonical text for a graphic block
 * to be presentable. Titles alone are insufficient (F1 adversarial).
 */
export function extractProjectionClaims(composition: VisualComposition): string[] {
  const claims: string[] = [];
  for (const block of composition.blocks) {
    if (block.kind === "comparison") {
      for (const a of block.alternatives) {
        pushClaim(claims, a.title);
        pushClaim(claims, a.summary);
        for (const p of a.pros ?? []) pushClaim(claims, p);
        for (const c of a.cons ?? []) pushClaim(claims, c);
      }
      if (block.criteria) {
        for (const c of block.criteria) {
          pushClaim(claims, c.label);
          for (const v of Object.values(c.values)) pushClaim(claims, v);
        }
      }
      pushClaim(claims, block.recommendation ?? undefined, 8);
    } else if (block.kind === "sequence") {
      for (const s of block.steps) {
        pushClaim(claims, s.title);
        pushClaim(claims, s.detail);
        pushClaim(claims, s.dateLabel ?? undefined);
      }
    } else if (block.kind === "relations") {
      for (const n of block.nodes) {
        pushClaim(claims, n.label);
        pushClaim(claims, n.detail);
      }
      for (const e of block.edges) {
        pushClaim(claims, e.label);
      }
    } else if (block.kind === "synthesis") {
      for (const it of block.items) {
        pushClaim(claims, it.label);
        pushClaim(claims, it.detail);
      }
    }
    // text blocks are gated separately via maySubstituteNarrative (F1-06).
  }
  return claims;
}

/** @deprecated use extractProjectionClaims — kept for callers expecting titles only. */
export function extractProjectionAnchors(composition: VisualComposition): string[] {
  return extractProjectionClaims(composition);
}

export function claimsSupportedByCanonical(
  claims: string[],
  canonicalText: string | null | undefined,
): { ok: boolean; missing: string[]; reasonCodes: string[] } {
  const reasons: string[] = [];
  const canon = typeof canonicalText === "string" ? normalize(canonicalText) : "";
  if (!canon) {
    reasons.push("CV_FIDELITY_NO_CANONICAL_TEXT");
    return { ok: false, missing: claims, reasonCodes: reasons };
  }
  const missing: string[] = [];
  for (const raw of claims) {
    const a = normalize(raw);
    if (a.length < 2) continue;
    if (!canon.includes(a)) missing.push(raw);
  }
  if (missing.length) {
    reasons.push("CV_FIDELITY_CLAIM_MISSING_IN_CANONICAL");
    return { ok: false, missing, reasonCodes: reasons };
  }
  reasons.push("CV_FIDELITY_CLAIMS_SUPPORTED_BY_CANONICAL");
  return { ok: true, missing: [], reasonCodes: reasons };
}

export function projectionAnchorsAlignWithCanonical(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): { aligned: boolean; missing: string[]; reasonCodes: string[] } {
  const r = claimsSupportedByCanonical(extractProjectionClaims(composition), canonicalText);
  return { aligned: r.ok, missing: r.missing, reasonCodes: r.reasonCodes };
}

/**
 * Preferential recommendation vs opposite preference in canonical (F1-01).
 * Deterministic: if recommendation names option X and canonical contains
 * an explicit preference for a different option Y among the same set → refuse.
 */
export function detectPreferenceContradiction(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): string[] {
  const reasons: string[] = [];
  const canon = typeof canonicalText === "string" ? normalize(canonicalText) : "";
  if (!canon) return reasons;

  const preferRe =
    /(?:prefer(?:er|e)?|recommande|reten(?:ir|ons)|choisir|retenir)\s+(?:l['’]approche\s+|l['’]option\s+|le\s+)?(.{3,80}?)(?:\.|,|;|$)/gi;

  for (const block of composition.blocks) {
    if (block.kind !== "comparison" || !block.recommendation) continue;
    const rec = normalize(block.recommendation);
    const titles = block.alternatives.map((a) => ({
      title: a.title,
      n: normalize(a.title),
    }));
    const recHits = titles.filter((t) => t.n.length >= 2 && rec.includes(t.n));
    if (recHits.length !== 1) continue;
    const preferred = recHits[0]!;

    // Canonical preference mentions
    const canonPrefs: string[] = [];
    let m: RegExpExecArray | null;
    const re = new RegExp(preferRe.source, preferRe.flags);
    while ((m = re.exec(canon)) !== null) {
      canonPrefs.push(normalize(m[1] ?? ""));
    }
    for (const pref of canonPrefs) {
      for (const t of titles) {
        if (t.n.length >= 2 && pref.includes(t.n) && t.n !== preferred.n) {
          reasons.push("CV_FIDELITY_RECOMMENDATION_OPPOSES_CANONICAL_PREFERENCE");
          return reasons;
        }
      }
    }
  }
  return reasons;
}

export function detectCrudeContradictions(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): string[] {
  return detectPreferenceContradiction(composition, canonicalText);
}

/** Narrative-only: text blocks must be supported by canonical before substitute. */
export function maySubstituteNarrative(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): { ok: boolean; reasonCodes: string[] } {
  const texts = composition.blocks.filter((b): b is Extract<VisualBlock, { kind: "text" }> => b.kind === "text");
  if (!texts.length) {
    return { ok: false, reasonCodes: ["CV_FIDELITY_NARRATIVE_EMPTY"] };
  }
  const claims = texts.map((t) => t.markdown);
  const support = claimsSupportedByCanonical(claims, canonicalText);
  if (!support.ok) {
    return {
      ok: false,
      reasonCodes: [...support.reasonCodes, "CV_FIDELITY_NARRATIVE_SUBSTITUTE_REFUSED"],
    };
  }
  return { ok: true, reasonCodes: ["CV_FIDELITY_NARRATIVE_SUBSTITUTE_OK"] };
}

export function mayPresentGraphicComposition(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): { ok: boolean; reasonCodes: string[]; missing: string[] } {
  if (!hasGraphicBlocks(composition)) {
    return { ok: true, reasonCodes: ["CV_FIDELITY_NARRATIVE_ONLY"], missing: [] };
  }
  // Strategy A — identity path: sections are the sole authority; text was derived from them.
  // No lexical claim matching (that was Strategy B dual-author reconciliation).
  if (composition.contentAuthority === "canonical_sections") {
    return {
      ok: true,
      reasonCodes: ["CV_FIDELITY_IDENTITY_CANONICAL_SECTIONS"],
      missing: [],
    };
  }
  const support = claimsSupportedByCanonical(extractProjectionClaims(composition), canonicalText);
  const pref = detectPreferenceContradiction(composition, canonicalText);
  if (!support.ok || pref.length) {
    return {
      ok: false,
      reasonCodes: [
        ...support.reasonCodes,
        ...pref,
        "CV_FIDELITY_REFUSE_GRAPHIC_PRESENTATION",
      ],
      missing: support.missing,
    };
  }
  return { ok: true, reasonCodes: support.reasonCodes, missing: [] };
}
```

### `NoraComposition.tsx` (intégral)
```tsx
"use client";

/**
 * Nora conversational composition renderer.
 * Product responsibility: adaptive restitution of validated D3 compositions.
 * Presentation contract: conversational-composition-v1 (admission).
 * Wire compatibility: e05-visual-composition-v1 (bounded).
 */

import {
  Component,
  type ErrorInfo,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
import {
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
  topologicalLayers,
  type AdmittedBlock,
  type ComparisonVariant,
  type RelationsVariant,
  type SequenceVariant,
} from "@/domains/conversation/conversational-composition";
import type {
  ComparisonBlock,
  RelationsBlock,
  SequenceBlock,
  SynthesisBlock,
  TextBlock,
  VisualBlock,
  VisualComposition,
  VisualProvenance,
} from "@/domains/conversation/visual-composition";
import {
  canonicalReferenceKey,
  compositionAnchorsChoices,
  compositionAnchorsReferences,
  partitionChoicesForAnchors,
  partitionReferencesForAnchors,
  provenanceConsultableKeys,
  resolveProvenanceReference,
} from "@/domains/conversation/visual-composition";
import type { TurnChoice, TurnReference } from "@/domains/conversation/turn-projection";

function Provenance(props: {
  items?: VisualProvenance[];
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  if (!props.items?.length) return null;
  const canonical = props.canonicalReferences ?? [];
  return (
    <ul
      className="fig-visual-provenance fig-comp-provenance"
      data-testid="nora-visual-provenance"
    >
      {props.items.map((p, i) => {
        const resolved = resolveProvenanceReference(p, canonical);
        return (
          <li key={`${p.label}-${i}`} data-consultable={resolved ? "1" : "0"}>
            {resolved && props.onReference ? (
              <button
                type="button"
                className="fig-nora-ref-link"
                data-testid="nora-visual-prov-link"
                data-ref-kind={resolved.kind}
                onClick={() => props.onReference?.(resolved)}
              >
                Consulter · {resolved.label}
                {resolved.available === false ? " (à vérifier)" : ""}
              </button>
            ) : (
              <span>
                {p.label}
                <span className="fig-visual-provenance-note"> — mention descriptive</span>
              </span>
            )}
            {p.note ? <span className="fig-visual-provenance-note"> — {p.note}</span> : null}
          </li>
        );
      })}
    </ul>
  );
}

function Heading(props: {
  title: string;
  role?: TextBlock["role"];
  icon?: TextBlock["icon"];
}) {
  return (
    <h3 className="fig-visual-title fig-comp-title">
      <NoraSemanticIcon role={props.role} icon={props.icon} />
      <span>{props.title}</span>
    </h3>
  );
}

type BlockShellProps = {
  children: ReactNode;
  textAlternative: string;
  blockId: string;
};

/** CV-10 — isolate render failure to one block; keep readable textAlternative. */
class BlockErrorBoundary extends Component<
  BlockShellProps,
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo): void {
    // Presentation-only; never escalate to D3 FAILED.
  }

  render() {
    if (this.state.failed) {
      return (
        <section
          className="fig-visual-block fig-comp-block fig-comp-block-fallback"
          data-testid="nora-composition-block-fallback"
          data-block-id={this.props.blockId}
          data-fallback="1"
        >
          <p className="fig-comp-fallback-text">{this.props.textAlternative}</p>
        </section>
      );
    }
    return this.props.children;
  }
}

function AlternativeDetails({
  alt,
}: {
  alt: ComparisonBlock["alternatives"][number];
}) {
  return (
    <article className="fig-visual-alt fig-comp-alt" data-alt-id={alt.id} data-testid="nora-composition-alt-detail">
      <h4>{alt.title}</h4>
      <p>{alt.summary}</p>
      {alt.pros?.length ? (
        <ul className="fig-visual-pros">
          {alt.pros.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      ) : null}
      {alt.cons?.length ? (
        <ul className="fig-visual-cons">
          {alt.cons.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function ComparisonView({
  block,
  variant,
  canonicalReferences,
  onReference,
}: {
  block: ComparisonBlock;
  variant: ComparisonVariant;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const hasCriteria = Boolean(block.criteria?.length);
  // CV-T04 / Defect A: matrix never hides summary/pros/cons — show complementary details.
  const showMatrix = variant === "matrix" && hasCriteria;
  const showCards =
    variant === "cards" ||
    variant === "stacked" ||
    (variant === "matrix" && !hasCriteria);
  const showMatrixDetails = showMatrix;
  const forceText = variant === "text";

  return (
    <section
      className={`fig-visual-block fig-visual-comparison fig-comp-block fig-comp-comparison fig-comp-variant-${variant}`}
      data-testid="nora-visual-comparison"
      data-comp-testid="nora-composition-comparison"
      data-block-kind="comparison"
      data-block-id={block.id}
      data-variant={variant}
      data-substance-complete="1"
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      {forceText ? (
        <div className="fig-comp-fallback-text" data-testid="nora-composition-comparison-text">
          {buildExhaustiveBlockFallback(block)}
        </div>
      ) : null}
      {!forceText && showCards ? (
        <div
          className={
            variant === "stacked"
              ? "fig-visual-comparison-grid fig-comp-comparison-stack"
              : "fig-visual-comparison-grid fig-comp-comparison-cards"
          }
        >
          {block.alternatives.map((alt) => (
            <AlternativeDetails key={alt.id} alt={alt} />
          ))}
        </div>
      ) : null}
      {!forceText && showMatrix ? (
        <>
          <div className="fig-visual-matrix-wrap fig-comp-matrix-wrap">
            <table className="fig-visual-matrix fig-comp-matrix">
              <caption>Critères de comparaison</caption>
              <thead>
                <tr>
                  <th scope="col">Critère</th>
                  {block.alternatives.map((a) => (
                    <th key={a.id} scope="col">
                      {a.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.criteria!.map((c) => (
                  <tr key={c.id}>
                    <th scope="row">{c.label}</th>
                    {block.alternatives.map((a) => (
                      <td key={a.id}>{c.values[a.id] ?? "—"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showMatrixDetails ? (
            <div
              className="fig-comp-comparison-stack fig-comp-matrix-details"
              data-testid="nora-composition-matrix-details"
            >
              <h4 className="fig-comp-matrix-details-title">Détail des options</h4>
              {block.alternatives.map((alt) => (
                <AlternativeDetails key={`detail-${alt.id}`} alt={alt} />
              ))}
            </div>
          ) : null}
        </>
      ) : null}
      {block.recommendation ? (
        <div className="fig-visual-recommendation" data-testid="nora-visual-recommendation">
          <NoraSemanticIcon role="recommendation" />
          <div className="fig-visual-recommendation-body">
            <span className="fig-visual-recommendation-label">Recommandation (avis Nora)</span>
            <SafeMarkdown content={block.recommendation} className="fig-visual-inline-md" />
          </div>
        </div>
      ) : null}
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function SequenceView({
  block,
  variant,
  canonicalReferences,
  onReference,
}: {
  block: SequenceBlock;
  variant: SequenceVariant;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const titleById = new Map(block.steps.map((s) => [s.id, s.title] as const));
  const forceText = variant === "text";
  return (
    <section
      className={`fig-visual-block fig-visual-sequence fig-comp-block fig-comp-sequence fig-comp-variant-${variant}`}
      data-testid="nora-visual-sequence"
      data-comp-testid="nora-composition-sequence"
      data-block-kind="sequence"
      data-block-id={block.id}
      data-variant={variant}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role ?? "step"} icon={block.icon} />
      {forceText ? (
        <div className="fig-comp-fallback-text" data-testid="nora-composition-sequence-text">
          {buildExhaustiveBlockFallback(block)}
        </div>
      ) : (
        <ol
          className={
            variant === "horizontal"
              ? "fig-visual-steps fig-comp-steps-horizontal"
              : "fig-visual-steps fig-comp-steps-vertical"
          }
        >
          {block.steps.map((step, idx) => (
            <li key={step.id} className="fig-visual-step fig-comp-step" data-step-id={step.id}>
              <div className="fig-visual-step-marker" aria-hidden>
                {idx + 1}
              </div>
              <div className="fig-visual-step-body">
                <h4>
                  <NoraSemanticIcon role={step.role ?? "step"} />
                  {step.title}
                </h4>
                {step.detail ? (
                  <SafeMarkdown content={step.detail} className="fig-visual-inline-md" />
                ) : null}
                {step.dependsOn?.length ? (
                  <p className="fig-visual-step-deps" data-testid="nora-visual-step-deps">
                    <NoraSemanticIcon role="dependency" />
                    Dépend de :{" "}
                    {step.dependsOn.map((id) => titleById.get(id) ?? id).join(", ")}
                  </p>
                ) : null}
                {step.dateLabel ? (
                  <p className="fig-visual-step-date">{step.dateLabel}</p>
                ) : null}
              </div>
              {idx < block.steps.length - 1 ? (
                <div className="fig-visual-step-connector" aria-hidden />
              ) : null}
            </li>
          ))}
        </ol>
      )}
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function relationRole(
  kind: RelationsBlock["nodes"][number]["kind"],
): TextBlock["role"] {
  if (kind === "hypothesis") return "hypothesis";
  if (kind === "observation") return "observation";
  if (kind === "fact" || kind === "finding") return "fact";
  return "information";
}

function RelationsListFallback({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  return (
    <>
      <ul className="fig-visual-relations-list fig-comp-relations-list">
        {block.nodes.map((n) => (
          <li key={n.id} data-node-id={n.id}>
            <NoraSemanticIcon role={relationRole(n.kind)} />
            <span className="fig-comp-relations-label">{n.label}</span>
            {n.detail ? <span className="fig-comp-relations-detail"> — {n.detail}</span> : null}
          </li>
        ))}
      </ul>
      {block.edges.length ? (
        <ul
          className="fig-visual-relations-edges fig-comp-relations-edges"
          data-testid="nora-composition-relations-edges"
        >
          {block.edges.map((e, i) => (
            <li key={`${e.from}-${e.to}-${i}`}>
              {titleById.get(e.from) ?? e.from} → {titleById.get(e.to) ?? e.to}
              {e.relation ? ` [${e.relation}]` : ""}
              {e.label ? ` (${e.label})` : ""}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

/** C-10/11/12 — CSS directed layout (no fixed SVG coordinates, no ELK dependency). */
function RelationsDirectedView({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  const hint = block.layoutHint ?? "dependencies";

  if (hint === "parallelProcess") {
    const lanes = new Map<string, typeof block.nodes>();
    for (const n of block.nodes) {
      const lane = n.laneId?.trim() || "voie";
      const list = lanes.get(lane) ?? [];
      list.push(n);
      lanes.set(lane, list);
    }
    // A5 — sync is directed toward the target step, not a claim of reciprocity.
    return (
      <div
        className="fig-comp-parallel"
        data-testid="nora-composition-parallel"
        data-layout-hint="parallelProcess"
      >
        <div className="fig-comp-parallel-lanes">
          {[...lanes.entries()].map(([lane, nodes]) => (
            <section key={lane} className="fig-comp-parallel-lane" data-lane={lane}>
              <h4 className="fig-comp-parallel-lane-title">{lane}</h4>
              <ol className="fig-comp-parallel-tasks">
                {nodes.map((n) => (
                  <li key={n.id} data-node-id={n.id}>
                    <NoraSemanticIcon role={relationRole(n.kind)} />
                    <span className="fig-comp-relations-label">{n.label}</span>
                    {n.detail ? (
                      <span className="fig-comp-relations-detail"> — {n.detail}</span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
        {block.edges.length ? (
          <ul
            className="fig-comp-parallel-edges"
            data-testid="nora-composition-parallel-edges"
            data-directed="1"
          >
            {block.edges.map((e, i) => (
              <li key={`${e.from}-${e.to}-${i}`} data-relation={e.relation ?? "flow"}>
                <span className="fig-comp-deps-from">{titleById.get(e.from) ?? e.from}</span>
                <span className="fig-comp-deps-arrow" aria-hidden>
                  →
                </span>
                <span className="fig-comp-deps-to">{titleById.get(e.to) ?? e.to}</span>
                {e.label ? <span className="fig-comp-deps-label"> ({e.label})</span> : null}
                {e.relation ? (
                  <span className="fig-comp-deps-rel">
                    {" "}
                    · {e.relation === "sync" ? "sync vers" : e.relation}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
        <p className="fig-comp-authority-note">
          La convergence graphique n&apos;enregistre aucune décision humaine ni validation.
        </p>
      </div>
    );
  }

  if (hint === "decisionTree") {
    const children = new Map<string, typeof block.edges>();
    const targets = new Set(block.edges.map((e) => e.to));
    for (const e of block.edges) {
      const list = children.get(e.from) ?? [];
      list.push(e);
      children.set(e.from, list);
    }
    const roots = block.nodes.filter((n) => !targets.has(n.id));
    const renderBranch = (nodeId: string, depth: number): ReactNode => {
      const node = block.nodes.find((n) => n.id === nodeId);
      if (!node) return null;
      const outs = children.get(nodeId) ?? [];
      return (
        <li key={nodeId} data-node-id={nodeId} data-depth={depth}>
          <div className="fig-comp-tree-node">
            <NoraSemanticIcon role={relationRole(node.kind)} />
            <span className="fig-comp-relations-label">{node.label}</span>
            {node.detail ? (
              <span className="fig-comp-relations-detail"> — {node.detail}</span>
            ) : null}
          </div>
          {outs.length ? (
            <ul className="fig-comp-tree-branches">
              {outs.map((e) => (
                <li key={`${e.from}-${e.to}`} data-relation={e.relation ?? "flow"}>
                  <span className="fig-comp-tree-condition">
                    {e.relation === "condition_true"
                      ? "Si oui"
                      : e.relation === "condition_false"
                        ? "Si non"
                        : e.label || "puis"}
                    {e.label && e.relation?.startsWith("condition") ? ` — ${e.label}` : null}
                  </span>
                  <ul>{renderBranch(e.to, depth + 1)}</ul>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      );
    };
    return (
      <div
        className="fig-comp-tree"
        data-testid="nora-composition-decision-tree"
        data-layout-hint="decisionTree"
      >
        <ul className="fig-comp-tree-root">
          {(roots.length ? roots : block.nodes.slice(0, 1)).map((n) => renderBranch(n.id, 0))}
        </ul>
        <p className="fig-comp-authority-note">
          Les branches conditionnelles sont des propositions de lecture — aucune HumanDecision
          n&apos;est créée.
        </p>
      </div>
    );
  }

  // dependencies (default directed) — F3 layered DAG; arrows are explicit edge rows.
  const layers = topologicalLayers(block);
  const nodeById = new Map(block.nodes.map((n) => [n.id, n] as const));
  return (
    <div
      className="fig-comp-deps"
      data-testid="nora-composition-dependencies"
      data-layout-hint="dependencies"
      data-dep-layers={layers.length || 0}
    >
      {layers.length ? (
        <div className="fig-comp-deps-layers" data-testid="nora-composition-deps-layers">
          {layers.map((layer, li) => (
            <div key={`layer-${li}`} className="fig-comp-deps-layer" data-layer={li}>
              {layer.map((id) => {
                const n = nodeById.get(id);
                if (!n) return null;
                return (
                  <div key={id} className="fig-comp-deps-node" data-node-id={n.id}>
                    <NoraSemanticIcon role={relationRole(n.kind)} />
                    <div>
                      <div className="fig-comp-relations-label">{n.label}</div>
                      {n.detail ? (
                        <div className="fig-comp-relations-detail">{n.detail}</div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ) : (
        <ol className="fig-comp-deps-nodes">
          {block.nodes.map((n) => (
            <li key={n.id} className="fig-comp-deps-node" data-node-id={n.id}>
              <NoraSemanticIcon role={relationRole(n.kind)} />
              <div>
                <div className="fig-comp-relations-label">{n.label}</div>
                {n.detail ? <div className="fig-comp-relations-detail">{n.detail}</div> : null}
              </div>
            </li>
          ))}
        </ol>
      )}
      {block.edges.length ? (
        <ul
          className="fig-comp-deps-edges"
          data-testid="nora-composition-relations-edges"
          data-directed="1"
        >
          {block.edges.map((e, i) => (
            <li key={`${e.from}-${e.to}-${i}`} data-edge-from={e.from} data-edge-to={e.to}>
              <span className="fig-comp-deps-from">{titleById.get(e.from) ?? e.from}</span>
              <span className="fig-comp-deps-arrow" aria-hidden>
                →
              </span>
              <span className="fig-comp-deps-to">{titleById.get(e.to) ?? e.to}</span>
              {e.label ? <span className="fig-comp-deps-label"> ({e.label})</span> : null}
              {e.relation ? (
                <span className="fig-comp-deps-rel"> · {e.relation}</span>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function RelationsView({
  block,
  variant,
  canonicalReferences,
  onReference,
}: {
  block: RelationsBlock;
  variant: RelationsVariant;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const forceText = variant === "text";
  const useDirected = variant === "directed";
  const titleById = new Map(block.nodes.map((n) => [n.id, n.label] as const));

  return (
    <section
      className={`fig-visual-block fig-visual-relations fig-comp-block fig-comp-relations fig-comp-variant-${variant}`}
      data-testid="nora-visual-relations"
      data-comp-testid="nora-composition-relations"
      data-block-kind="relations"
      data-block-id={block.id}
      data-variant={variant}
      data-fallback={useDirected ? "0" : "1"}
      data-layout={useDirected ? "directed" : "structured-list"}
      data-layout-hint={block.layoutHint ?? ""}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      {forceText ? (
        <div className="fig-comp-fallback-text" data-testid="nora-composition-relations-text">
          {buildExhaustiveBlockFallback(block)}
        </div>
      ) : useDirected ? (
        <RelationsDirectedView block={block} titleById={titleById} />
      ) : (
        <RelationsListFallback block={block} titleById={titleById} />
      )}
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function SynthesisView({
  block,
  canonicalReferences,
  onReference,
}: {
  block: SynthesisBlock;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  return (
    <section
      className="fig-visual-block fig-visual-synthesis fig-comp-block fig-comp-synthesis"
      data-testid="nora-visual-synthesis"
      data-comp-testid="nora-composition-synthesis"
      data-block-kind="synthesis"
      data-block-id={block.id}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      <ul className="fig-visual-synthesis-list">
        {block.items.map((it) => {
          const role =
            it.role ??
            (it.tone === "risk"
              ? "risk"
              : it.tone === "hypothesis"
                ? "hypothesis"
                : it.tone === "observation"
                  ? "observation"
                  : it.tone === "priority"
                    ? "recommendation"
                    : "information");
          return (
            <li
              key={it.id}
              data-tone={it.tone}
              className={`fig-visual-synth-item fig-visual-tone-${it.tone}`}
            >
              <NoraSemanticIcon role={role} icon={it.icon} />
              <div>
                <strong>{it.label}</strong>
                {it.detail ? (
                  <SafeMarkdown content={it.detail} className="fig-visual-inline-md" />
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
      <p className="sr-only">{block.textAlternative}</p>
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function TextView({ block }: { block: TextBlock }) {
  return (
    <div
      className={`fig-visual-block fig-visual-text fig-comp-block fig-comp-text${
        block.role ? ` fig-visual-text-${block.role}` : ""
      }`}
      data-testid="nora-visual-text"
      data-comp-testid="nora-composition-text"
      data-block-kind="text"
      data-role={block.role ?? ""}
    >
      {block.role || block.icon ? (
        <div className="fig-visual-text-head">
          <NoraSemanticIcon role={block.role} icon={block.icon} />
        </div>
      ) : null}
      <SafeMarkdown content={block.markdown} />
    </div>
  );
}

function ChoicesCluster(props: {
  choices: TurnChoice[];
  actionable?: boolean;
  busy?: boolean;
  choiceFrozen?: boolean;
  messageId?: string;
  residual?: boolean;
  onChoice?: (choice: TurnChoice, messageId: string) => void;
  anchorId?: string;
}) {
  if (!props.choices.length) return null;
  return (
    <div
      className="fig-nora-choices fig-visual-choices-anchor fig-comp-choices"
      data-testid="nora-choices"
      data-block-kind="choices"
      data-residual={props.residual ? "1" : "0"}
      data-actionable={props.actionable ? "1" : "0"}
      data-message-id={props.messageId}
      data-anchor-id={props.anchorId ?? ""}
    >
      {props.choices.map((c) => (
        <button
          key={c.id}
          type="button"
          className="fig-nora-choice"
          data-testid="nora-choice"
          data-choice-id={c.id}
          disabled={!props.actionable || props.busy || props.choiceFrozen}
          onClick={() => props.messageId && props.onChoice?.(c, props.messageId)}
        >
          {c.label}
        </button>
      ))}
      {!props.actionable ? (
        <p className="fig-nora-choices-expired" data-testid="nora-choices-expired">
          Propositions expirées — consultation seule.
        </p>
      ) : null}
    </div>
  );
}

function RefsCluster(props: {
  references: TurnReference[];
  residual?: boolean;
  anchorId?: string;
  onReference?: (ref: TurnReference) => void;
}) {
  if (!props.references.length) return null;
  return (
    <ul
      className="fig-nora-refs fig-visual-refs-anchor fig-comp-refs"
      data-testid="nora-refs"
      data-block-kind="references"
      data-residual={props.residual ? "1" : "0"}
      data-anchor-id={props.anchorId ?? ""}
    >
      {props.references.map((r, i) => (
        <li key={`${r.kind}-${r.resourceId ?? r.path ?? r.href ?? i}`}>
          <button
            type="button"
            className="fig-nora-ref-link"
            data-testid="nora-ref-link"
            data-ref-kind={r.kind}
            onClick={() => props.onReference?.(r)}
          >
            Consulter · {r.label}
            {r.available === false ? " (à vérifier)" : ""}
          </button>
        </li>
      ))}
    </ul>
  );
}

/** Defect C — never truncate; exhaustive structured fallback. */
function textAltFor(block: VisualBlock): string {
  return buildExhaustiveBlockFallback(block);
}

function AdmittedBlockView({
  admitted,
  canonicalReferences,
  onReference,
}: {
  admitted: AdmittedBlock;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const { block, variant } = admitted;
  if (block.kind === "comparison") {
    return (
      <ComparisonView
        block={block}
        variant={variant as ComparisonVariant}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "sequence") {
    return (
      <SequenceView
        block={block}
        variant={variant as SequenceVariant}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "relations") {
    return (
      <RelationsView
        block={block}
        variant={variant as RelationsVariant}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "synthesis") {
    return (
      <SynthesisView
        block={block}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "text") {
    return <TextView block={block} />;
  }
  return null;
}

export type NoraCompositionProps = {
  composition: VisualComposition;
  /** Canonical replyDraft / message body for width-local re-admission consistency. */
  canonicalText?: string | null;
  choices?: TurnChoice[];
  references?: TurnReference[];
  actionable?: boolean;
  busy?: boolean;
  choiceFrozen?: boolean;
  messageId?: string;
  onChoice?: (choice: TurnChoice, messageId: string) => void;
  onReference?: (ref: TurnReference) => void;
};

export function NoraComposition(props: NoraCompositionProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [widthPx, setWidthPx] = useState<number | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof ResizeObserver === "undefined") {
      setWidthPx(el?.clientWidth ?? null);
      return;
    }
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (typeof w === "number" && Number.isFinite(w)) {
        setWidthPx(Math.round(w));
      }
    });
    ro.observe(el);
    setWidthPx(Math.round(el.clientWidth));
    return () => ro.disconnect();
  }, []);

  const admission = admitConversationalComposition(props.composition, {
    containerWidthPx: widthPx,
    canonicalText: props.canonicalText,
  });
  const choices = props.choices ?? [];
  const references = props.references ?? [];
  const choiceParts = partitionChoicesForAnchors(props.composition.blocks, choices);
  const refParts = partitionReferencesForAnchors(props.composition.blocks, references);
  const alreadyConsultable = provenanceConsultableKeys(
    props.composition.blocks,
    references,
  );
  const dedupeRefs = (list: TurnReference[]) =>
    list.filter((r) => !alreadyConsultable.has(canonicalReferenceKey(r)));

  return (
    <div
      ref={rootRef}
      className="fig-visual-composition fig-comp-composition"
      data-testid="nora-visual-composition"
      data-comp-testid="nora-composition"
      data-schema={props.composition.schemaVersion}
      data-contract={admission.contract}
      data-owns-body={admission.ownsBody ? "1" : "0"}
      data-body-policy={admission.bodyPolicy}
      data-container-width={widthPx ?? ""}
    >
      {admission.admitted.map((admitted) => {
        if (admitted.block.kind === "choices") {
          return (
            <ChoicesCluster
              key={admitted.block.id}
              choices={choiceParts.byAnchorId.get(admitted.block.id) ?? []}
              actionable={props.actionable}
              busy={props.busy}
              choiceFrozen={props.choiceFrozen}
              messageId={props.messageId}
              onChoice={props.onChoice}
              anchorId={admitted.block.id}
            />
          );
        }
        if (admitted.block.kind === "references") {
          return (
            <RefsCluster
              key={admitted.block.id}
              references={dedupeRefs(refParts.byAnchorId.get(admitted.block.id) ?? [])}
              onReference={props.onReference}
              anchorId={admitted.block.id}
            />
          );
        }
        return (
          <BlockErrorBoundary
            key={admitted.block.id}
            blockId={admitted.block.id}
            textAlternative={textAltFor(admitted.block)}
          >
            <AdmittedBlockView
              admitted={admitted}
              canonicalReferences={references}
              onReference={props.onReference}
            />
          </BlockErrorBoundary>
        );
      })}
      {compositionAnchorsChoices(props.composition) ? (
        <ChoicesCluster
          choices={choiceParts.residual}
          actionable={props.actionable}
          busy={props.busy}
          choiceFrozen={props.choiceFrozen}
          messageId={props.messageId}
          onChoice={props.onChoice}
          residual
          anchorId="residual-choices"
        />
      ) : null}
      {compositionAnchorsReferences(props.composition) ? (
        <RefsCluster
          references={dedupeRefs(refParts.residual)}
          onReference={props.onReference}
          residual
          anchorId="residual-references"
        />
      ) : null}
    </div>
  );
}
```

### Diffs WT complémentaires (semantic-qualification / visual-composition — excerpts)
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 3a2a2875..67b08fa4 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -11,6 +11,25 @@ import type { ThreadTurnKind } from "@/domains/pilotage/thread-recovery";
 import {
   parseVisualComposition,
+  VISUAL_COMPOSITION_SCHEMA,
+  VISUAL_COMPOSITION_SCHEMA_LEGACY,
+  VISUAL_COMPOSITION_SCHEMA_PROJECTION,
   VisualCompositionAgentOutputSchema,
 } from "./visual-composition";
+import { deriveReplyDraftFromCanonicalSections } from "./conversational-composition/derive-text";
+
+/**
+ * READ/validate envelope — accepts historical e05 + projection-v1 + canonical-v1.
+ * Reuses concrete block union (no empty `{}` JSON Schema). Runtime authority remains
+ * parseVisualComposition. LIVE Agent outputType = NoraTurnQualificationAgentSchema.
+ */
+const VisualCompositionPersistedSchema = z.object({
+  schemaVersion: z.enum([
+    VISUAL_COMPOSITION_SCHEMA,
+    VISUAL_COMPOSITION_SCHEMA_PROJECTION,
+    VISUAL_COMPOSITION_SCHEMA_LEGACY,
+  ]),
+  blocks: VisualCompositionAgentOutputSchema.shape.blocks,
+});
+

 export const SEMANTIC_QUALIFICATION_SCHEMA_VERSION = "ml4c-sem-qual-v1" as const;
@@ -199,13 +218,17 @@ export const NoraTurnQualificationSchema = z.object({
   documentSource: DocumentSourceSchema.optional(),
   /**
-   * Ensemble 05 / T02 — optional visual composition (structured blocks).
-   * Omission = text-only reply. Never HTML/JS. Studio re-validates before persist/render.
-   * Must be a concrete Zod object (not z.unknown): empty `{}` JSON Schema breaks
-   * OpenAI strict structured outputs and surfaces as PROVIDER_ERROR / UNKNOWN.
+   * Optional visual / canonical composition.
+   * READ path accepts e05 + projection-v1 + canonical-v1; Studio re-validates via parseVisualComposition.
+   * LIVE WRITE uses NoraTurnQualificationAgentSchema (canonical-v1 only — no empty `{}` schema).
    */
-  visualComposition: VisualCompositionAgentOutputSchema.optional(),
+  visualComposition: VisualCompositionPersistedSchema.optional(),
 });
 export type NoraTurnQualification = z.infer<typeof NoraTurnQualificationSchema>;

+/** Agents SDK outputType — WRITE canonical-v1 only (A3). */
+export const NoraTurnQualificationAgentSchema = NoraTurnQualificationSchema.extend({
+  visualComposition: VisualCompositionAgentOutputSchema.optional(),
+});
+
 export type QualificationValidation =
   | { ok: true; value: NoraTurnQualification }
@@ -279,9 +302,24 @@ export function validateNoraTurnQualification(raw: unknown): QualificationValida
     if (dfs(id)) return { ok: false, reason: "DEPENDENCY_CYCLE" };
   }
-  // T02 — soft-sanitize visual composition; never fail the whole qualification on bad visuals.
+  // Soft-sanitize visual composition. Strategy A derive may fail the whole qualification
+  // on overflow (A1) — never present FINAL with silently truncated canonical text.
   if (q.visualComposition !== undefined) {
     const cleaned = parseVisualComposition(q.visualComposition);
     if (cleaned) {
       (q as { visualComposition?: unknown }).visualComposition = cleaned;
+      if (cleaned.contentAuthority === "canonical_sections") {
+        const derived = deriveReplyDraftFromCanonicalSections(cleaned);
+        if (!derived.ok) {
+          if (derived.reason === "CV_DERIVE_OVERFLOW") {
+            return {
+              ok: false,
+              reason: `CANONICAL_REPLY_OVERFLOW:${derived.length}>${derived.max}`,
+            };
+          }
+          delete (q as { visualComposition?: unknown }).visualComposition;
+        } else {
+          (q as { replyDraft: string }).replyDraft = derived.text;
+        }
+      }
     } else {
       delete (q as { visualComposition?: unknown }).visualComposition;
```
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts b/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
index 7a6c2abf..46985d7b 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
@@ -14,5 +14,28 @@
 import { z } from "zod";

-export const VISUAL_COMPOSITION_SCHEMA = "e05-visual-composition-v1" as const;
+/** Historical E05 wire — read/compat only. */
+export const VISUAL_COMPOSITION_SCHEMA_LEGACY = "e05-visual-composition-v1" as const;
+/**
+ * Strategy B historical wire (replyDraft authority + optional projection).
+ * READ only for stored turns — never re-interpreted as canonical_sections (A3).
+ */
+export const VISUAL_COMPOSITION_SCHEMA_PROJECTION =
+  "conversational-composition-projection-v1" as const;
+/** Strategy A active WRITE — canonical semantic sections (single authority). */
+export const VISUAL_COMPOSITION_SCHEMA = "conversational-composition-canonical-v1" as const;
+export type VisualCompositionSchemaVersion =
+  | typeof VISUAL_COMPOSITION_SCHEMA
+  | typeof VISUAL_COMPOSITION_SCHEMA_PROJECTION
+  | typeof VISUAL_COMPOSITION_SCHEMA_LEGACY;
+
+export function isKnownVisualCompositionSchema(
+  v: unknown,
+): v is VisualCompositionSchemaVersion {
+  return (
+    v === VISUAL_COMPOSITION_SCHEMA ||
+    v === VISUAL_COMPOSITION_SCHEMA_PROJECTION ||
+    v === VISUAL_COMPOSITION_SCHEMA_LEGACY
+  );
+}

 export type VisualBlockKind =
@@ -167,12 +190,25 @@ export type RelationNode = {
   label: string;
   kind: RelationNodeKind;
+  /** Parallel lane / swimlane id when layoutHint=parallelProcess. */
+  laneId?: string;
+  detail?: string;
 };

+export type RelationEdgeKind =
+  | "depends_on"
+  | "condition_true"
+  | "condition_false"
+  | "sync"
+  | "flow";
+
 export type RelationEdge = {
   from: string;
   to: string;
   label?: string;
+  relation?: RelationEdgeKind;
 };

+export type RelationsLayoutHint = "dependencies" | "decisionTree" | "parallelProcess";
+
 export type RelationsBlock = {
   kind: "relations";
@@ -184,4 +220,6 @@ export type RelationsBlock = {
   provenance?: VisualProvenance[];
   preferListFallback?: boolean;
+  /** Directed family hint — C-10/11/12. */
+  layoutHint?: RelationsLayoutHint;
   role?: VisualSemanticRole;
   icon?: VisualIconId;
@@ -249,7 +287,16 @@ export type VisualBlock =
   | ReferencesAnchorBlock;

+/**
+ * Strategy A (canonical sections): composition is the single semantic authority;
+ * replyDraft is derived. Legacy Strategy B projections keep independent replyDraft
+ * and require claim-subset fidelity before graphic presentation.
+ */
+export type CompositionContentAuthority = "canonical_sections" | "legacy_projection";
+
 export type VisualComposition = {
-  schemaVersion: typeof VISUAL_COMPOSITION_SCHEMA;
+  schemaVersion: VisualCompositionSchemaVersion;
   blocks: VisualBlock[];
+  /** Set by parse/validate — not agent-authored independently of schemaVersion. */
+  contentAuthority?: CompositionContentAuthority;
 };

@@ -299,4 +346,5 @@ const VisualIconAgentSchema = z.enum([
 ]);

+/** Agent WRITE path — active projection schema only (F4). Legacy accepted on READ/parse. */
 export const VisualCompositionAgentOutputSchema = z.object({
   schemaVersion: z.literal(VISUAL_COMPOSITION_SCHEMA),
@@ -326,5 +374,5 @@ export const VisualCompositionAgentOutputSchema = z.object({
               }),
             )
-            .max(5),
+            .max(12),
           criteria: z
             .array(
@@ -368,4 +416,7 @@ export const VisualCompositionAgentOutputSchema = z.object({
           title: z.string().max(160),
           textAlternative: z.string().max(2000),
+          layoutHint: z
+            .enum(["dependencies", "decisionTree", "parallelProcess"])
+            .optional(),
           nodes: z
             .array(
@@ -381,7 +432,9 @@ export const VisualCompositionAgentOutputSchema = z.object({
                   "observation",
                 ]),
+                laneId: z.string().max(64).optional(),
+                detail: z.string().max(400).optional(),
               }),
             )
-            .max(10),
+            .max(12),
           edges: z
             .array(
@@ -390,7 +443,16 @@ export const VisualCompositionAgentOutputSchema = z.object({
                 to: z.string().max(64),
                 label: z.string().max(200).optional(),
+                relation: z
+                  .enum([
+                    "depends_on",
+                    "condition_true",
+                    "condition_false",
+                    "sync",
+                    "flow",
+                  ])
+                  .optional(),
               }),
             )
-            .max(16),
+            .max(20),
           preferListFallback: z.boolean().optional(),
           provenance: z.array(VisualProvenanceAgentSchema).max(4).optional(),
@@ -446,8 +508,8 @@ export type ParseVisualCompositionResult =

 const MAX_BLOCKS = 10;
-const MAX_ALTS = 5;
+const MAX_ALTS = 12;
 const MAX_STEPS = 8;
-const MAX_NODES = 10;
-const MAX_EDGES = 16;
+const MAX_NODES = 12;
+const MAX_EDGES = 20;
 const MAX_ITEMS = 8;
 const MAX_PROS_CONS = 4;
@@ -869,8 +931,28 @@ function parseRelations(
     if (!nidF || !label) return null;
     ids.add(nidF);
-    nodes.push({ id: nidF, label, kind });
+    let laneId: string | undefined;
+    const laneRaw = asString(n.laneId);
+    if (laneRaw) {
+      laneId = fit(laneRaw, MAX_ID, ctx) ?? undefined;
+      if (!laneId) return null;
+    }
+    let detail: string | undefined;
+    const detailRaw = asString(n.detail);
+    if (detailRaw) {
+      detail = fit(detailRaw, MAX_STR, ctx) ?? undefined;
+      if (!detail) return null;
+    }
+    nodes.push({ id: nidF, label, kind, laneId, detail });
   }
   if (nodes.length < 2) return null;

+  const EDGE_RELATIONS = new Set<RelationEdgeKind>([
+    "depends_on",
+    "condition_true",
+    "condition_false",
+    "sync",
+    "flow",
+  ]);
+
   const edges: RelationEdge[] = [];
   if (o.edges !== undefined && o.edges !== null) {
@@ -896,5 +978,11 @@ function parseRelations(
         if (!label) return null;
       }
-      edges.push({ from: fromF, to: toF, label });
+      let relation: RelationEdgeKind | undefined;
+      const relRaw = asString(e.relation) as RelationEdgeKind | null;
+      if (relRaw) {
+        if (!EDGE_RELATIONS.has(relRaw)) return null;
+        relation = relRaw;
+      }
+      edges.push({ from: fromF, to: toF, label, relation });
     }
   }
@@ -903,6 +991,19 @@ function parseRelations(
   if (provenance === "FAIL") return null;

+  let layoutHint: RelationsLayoutHint | undefined;
+  const hintRaw = asString(o.layoutHint);
+  if (hintRaw) {
+    if (
+      hintRaw !== "dependencies" &&
+      hintRaw !== "decisionTree" &&
+      hintRaw !== "parallelProcess"
```

---

## 11. Instruction ChatGPT

Avant réponse à Morris : relire depuis Git branche `sfia/review-handoff` le fichier `sfia-review-handoff/latest-chatgpt-review.md` (commit/blob/intégralité), confronter à matrice 06 V0.5, et ne pas inférer LIVE/REAL depuis les preuves FAKE.

**Fin Review Pack Full — Strategy A V0.5.**
