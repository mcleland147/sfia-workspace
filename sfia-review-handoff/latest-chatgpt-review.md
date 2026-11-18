# SFIA Review Pack Full — mono-cycle
## SFIA Studio Next — R5 / ML4D / Ensemble 05
### Qualification intégrée Nora → Composition → Persistance → Relecture

**Date :** 2026-11-18
**Cycle :** 8 — Delivery (intégrés 6 archi ciblée, 9 QA, 4 UX corrective)
**Profil :** Critical
**Environnement :** DEV isolé · **NO RELEASE** · **NO PRODUCT PUSH** · **LIVE NOT RUN**
**Review Handoff :** required / publish-in-cycle
**Mandat :** GO Morris — qualification chaîne bout en bout (niveau B) + corrections 02/04/C2

---

## 1. Git Truth Check

| Item | Value |
|---|---|
| Branch | `sfia/next-ml4d-composition-adaptative` |
| HEAD parent | `a783f014935de0dec5ff8e79a2b18eea0e629756` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Worktree | Dirty (préexistant ELK/01–06 + ce cycle) |
| Handoff précédent | `d32e6b84` / blob `b1c20332` |

---

## 2. Mandat consommé

Auditer D3 réel ; prouver niveau B (simulation fournisseur à la frontière LIVE) ; persistance/relecture ; corriger Figma 02/04 + C2 ; préparer protocole LIVE sans l'exécuter ; Review Pack Full + L3.

---

## 3. Chaîne D3 avant / après

**Avant :** preuves graphiques surtout via `STUDIO_FORCE_NORA_FIXTURE` + clés `E05_R*`. Timeline gated par `fixtureDemo`. C2 : tone filter + `cons[0]`.

**Après :**
1. `STUDIO_NORA_SIMULATED_PROVIDER=1` (DEV) → `resolveProviderSimulatedQualification` → `validateNoraTurnQualification` → même `postUserMessageAndNora` / projection / persist.
2. Timeline peinte si `timeline` admis (fixtureDemo = badge seulement).
3. Grille timeline S1–S8 alignée ; matrice Effort/Risque/Délai lisible.
4. C2 : residual exact-identity ; tous les `cons` distincts.

```
Pilote → POST messages → postUserMessageAndNora → generateNoraReply
  ├ fixture (FORCE/E2E) — niveau A UI keys
  ├ SIM provider (DEV) — niveau B ← NOUVEAU
  └ LIVE Agents SDK — niveau C (non exécuté)
→ stash → buildTurnProjection → commitTurnTerminal
→ reload listTurnProjections → admit → NoraComposition
```

---

## 4. Cartographie champs présentation

| Champ | Schema | Persist turnProjection | Relecture | Admit | Render |
|---|---|---|---|---|---|
| lead/headlineAccent/indicators/strategyCards/checklist/orientation/editorialNote | Y | Y | Y | Y | Y |
| timeline | Y | Y | Y | Y | Y (plus gated fixtureDemo) |
| fixtureDemo | Y | Y | Y | n/a | badge only |

---

## 5. Différences fixture / vraie chaîne

| Niveau | Mécanisme | Preuve |
|---|---|---|
| A | UI-key fixtures R01–R06 | Playwright R01–R06 PASS |
| B | SIM natural prompts S1–S11 | Playwright `ensemble05-level-b-sim` PASS · Vitest Level-B PASS |
| C | LIVE | **NOT RUN** — protocole prêt |

---

## 6. Corrections Figma 02 / 04 / C2

- Timeline : wrapper `.fig-nc-timeline-weeks` ; 4 tracks ; `--tl-weeks` string ; show sans fixtureDemo.
- Matrice : colonnes Effort/Risque/Délai ; `table-layout:fixed` ; wrap ; overflow-x.
- C2 synthèse : exact-identity only ; safe optional detail.
- C2 comparaison : tous les cons distincts.

---

## 7. Persistance / relecture

BROWSER FAKE Level-B S11 : ask → reload → même count assistants, 2 options relues, composition visible. Aucun nouveau tour fournisseur (SIM, provider_contacted=NO).

HISTORICAL PG REPLAY — **NOT RUN**.

---

## 8. Tests

| Suite | Résultat |
|---|---|
| Vitest provider-simulated-level-b | PASS |
| Vitest c2-editorial-integrity-corrective | PASS |
| Vitest c2-substance-exhaustiveness | PASS |
| Playwright Level-B sim (`playwright.sim.config.ts`) | PASS |
| Playwright R01–R06 | PASS (cycle NR) |
| Playwright C2-08 | PASS (cycle NR) |
| Playwright T02 | rejoué après fix crash detail undefined |

---

## 9. Captures & SHA

### Level-B

```
28fde0faa8641c33f3ab48d0d40052a5351a0814f562a7bb35622d4042ed175d  ./live-protocol-bounded.md
9f84aed39387e8d28aed1aaf88a0c94bd8adcb4a03c5a4753f9ec69604188e8e  ./runtime-s11-reload-travail-1440.png
3c407a4a6896c2ba6e03a9e7a3addcd48029a276dae5bf85c2a4d93a7d761a01  ./runtime-s3-three-strategies-sim-1440.png
3ed0442d02d2e8861e227418c61ef28462c9e5628d2ea6278032296fb8e1747f  ./runtime-s4-five-matrix-sim-1440.png
e86a7de79ac81566af5811d283a023c46a63bd19cdf907e5a159475fcf9db3a0  ./runtime-s6-timeline-sim-1440.png
e1ad6e014050d728d92c7bb008be73841c15c1b36591d426ed0fa445f2854e98  ./runtime-s7-dependencies-elk-sim-1440.png

```

Chemins : `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/level-b-e2e-chain-20261118/`

### Figma 01–06 (corr. runtime)

```
395bc5322b206c0194946cde141d57545444b118626bb4bd3e7d96cc63baa250  ./figma/figma-01-synthesis-742-36.png
13a77a1d8ff8bd0baa75967399893b99f66feed588bd4bbaafb49d47d372f1ab  ./figma/figma-02-parcours-743-2.png
01fb842db2f8317cbdde3e467a75bf92afc71866a96dc5ef3a250b71147e7a64  ./figma/figma-03-options-745-2.png
cb9cbf4196e0eac62d3ae5c7c4b05baab36f76b60d7dee0e53a9c17b6da7ed21  ./figma/figma-04-matrix-745-27.png
32930d0927e6535e016e1cf0fc8591c51af13332bb8ece251ecdf183dee74580  ./figma/figma-05-stacked-746-2.png
ff76ed1c670e933ec882bf8aaf5373896aec3cfe109d7e07c279e95d01ffe69c  ./figma/figma-06-steps-746-22.png
d74c0c39e4e851cb7ae94f452985a904cf203ed38f80ec4a12e30ecf526309f4  ./runtime/runtime-r01-synthesis-1440.png
d4be6271b4e1f2fce89b147dcdecda044263dbaa401c559f7cb2afc29edb43b2  ./runtime/runtime-r01-synthesis-travail-1440.png
159505eb21e0c7c0fbd3f84fb67dd0a1e8e935b1df16790d96d129b30a42774a  ./runtime/runtime-r02-journey-timeline-1440.png
4754beaeb29bca4ff15f73c1d160f5c4f0a21b55f85618569edf7c38aecf4e1a  ./runtime/runtime-r02-journey-travail-1440.png
03b9f364ef2f5849e879174d9348336ac38913cd8852eec89c4b45b63f15cecb  ./runtime/runtime-r03-three-cards-1440.png
e84e0372c0d1b9a1b3f8a2800d2eede0cf32a4736f1a43f59ce8931f6aeb823a  ./runtime/runtime-r04-five-matrix-1440.png
fc15dcc289f75404e4dc51417fed4b8f04c7fa827c56e593648931fd41fd5ff5  ./runtime/runtime-r05-stacked-430.png
a204f293442257304f4eff14a55d9fda7f6e1885555dfa83359ece6cb84cd29b  ./runtime/runtime-r05-stacked-travail-430.png
90194f1b361c15200edbbbe859abcc1be6023b8d7331784e05af9ae8599fb44b  ./runtime/runtime-r06-six-steps-1440.png
bd92907929aee2e3ae2211455b4f5207e80733fb1552efc0f994e49f1fcb924b  ./runtime/runtime-r06-six-steps-travail-1440.png

```

**Limite L3 :** Markdown only — binaires locaux à remettre à Morris/ChatGPT.

---

## 10. Protocole LIVE proposé

# Protocole LIVE borné — Nora composition (préparation, NON EXÉCUTÉ)

**Statut :** DRAFT FOR MORRIS ARBITRATION — **LIVE NOT AUTHORIZED** by this cycle.
**Date :** 2026-11-18
**Prérequis DEV :** Level-B provider-simulated chain **PASS** (`ADAPTER_FAKE` + `API/BROWSER FAKE`).

## 1. Objectif

Démontrer si Nora (fournisseur réel) mobilise spontanément `visualComposition` canonical-v1 utile, sans fixture ni simulation, tout en préservant prose-only, refus d'invention, persistance et invariants D3–D9.

## 2. Environnement proposé

| Champ | Valeur proposée |
|---|---|
| Lane | DEV isolé uniquement (ports / DB dédiés) |
| Build | worktree `sfia/next-ml4d-composition-adaptative` (SHA à figer au GO) |
| Identité | Pilote A DEV de test |
| Fournisseur | OpenAI Agents SDK (modèle/effort = policy OPERATIONAL) |
| `STUDIO_FORCE_NORA_FIXTURE` | **unset** |
| `STUDIO_NORA_SIMULATED_PROVIDER` | **unset** |
| Effets Git/DB externes | **Interdits** (NO_EFFECT corpus) |
| Coût / appels | Plafond à fixer par Morris (ex. ≤12 tours, abort budget) |

## 3. Demandes naturelles représentatives

Réutiliser `SIM_PROMPTS` S1–S11 comme oracles d'intention (texte libre, pas de clés E05_*).

Oracles structurels :

| Cas | Attendu LIVE |
|---|---|
| S1 | Prose ; pas de graphique forcé |
| S2/S3/S4/S5 | Sections si fondées ; pas de chiffres inventés |
| S6 | Timeline seulement si temporalité admise / hypothèse explicite |
| S7–S9 | Relations si fondées ; ELK si admis |
| S10 | Refus quantitatif sans données |
| S11 | Persist/reload sans nouveau tour fournisseur |

## 4. Critères d'arrêt

- Schéma invalide répété (≥2) → stop campagne
- Invention chiffrée détectée → FAIL + stop
- Effet métier non demandé → FAIL critique
- Budget appels atteint → stop propre

## 5. Diagnostics DEV

Journaliser uniquement : schemaVersion, kinds, admission variant, fallback reason, turnId, persist/reload OK.
**Interdit :** prompts privés, chaîne de pensée, secrets, documents bruts.

## 6. Retour état initial

Purger projets de campagne DEV ; aucune mutation RECETTE/STABLE.

## 7. Gate Morris

Aucun LIVE tant que Morris n'a pas autorisé explicitement ce protocole (coût, modèle, plafonds).


---

## 11. Fichiers créés (contenu exploitable)

### `provider-simulated-qualification.ts`

```ts
/**
 * Level-B provider-simulated qualifications — DEV only.
 *
 * These envelopes mimic a structured LIVE finalOutput. They MUST go through
 * `validateNoraTurnQualification` and the real D3 service path
 * (`postUserMessageAndNora` → stash → turnProjection → commit → reload).
 *
 * Distinct from UI-key fixtures (`fixtureSemanticQualify` / STUDIO_FORCE_NORA_FIXTURE).
 * Activated only via `STUDIO_NORA_SIMULATED_PROVIDER=1` + `STUDIO_LANE=DEV`.
 */

import type { NoraTurnQualification } from "./semantic-qualification";

export const NORA_SIM_PROVIDER_MODE = "provider-simulated" as const;

function base(partial: Partial<NoraTurnQualification> & Pick<NoraTurnQualification, "replyDraft">): NoraTurnQualification {
  const goal = partial.goal ?? "Demande Pilote (simulation fournisseur)";
  const defaultIntent = {
    id: "sim-i1",
    capabilityId: "d3.converse" as const,
    mode: "EXPLAIN" as const,
    summary: goal,
    parameters: {},
    constraints: ["NO_EFFECT", "PROVIDER_SIMULATED", "ADAPTER_FAKE"],
    dependsOn: [] as string[],
    sourceEvidence: [] as string[],
  };
  return {
    schemaVersion: "ml4c-sem-qual-v1",
    status: "QUALIFIED",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    clarifications: [],
    ...partial,
    goal,
    replyDraft: partial.replyDraft,
    intents: partial.intents?.length ? partial.intents : [defaultIntent],
  };
}

/** Natural-language prompts used by Level-B corpus (exact match). */
export const SIM_PROMPTS = {
  S1: "Peux-tu m'expliquer brièvement ce qu'est un déploiement progressif ?",
  S2: "Fais une synthèse stratégique de notre contexte de déploiement multi-sites.",
  S3: "Compare trois stratégies de déploiement et explique leurs risques.",
  S4: "Compare cinq options de déploiement sur charge, vigilance et délai.",
  S5: "Propose un parcours en six étapes pour préparer le déploiement.",
  S6: "Avec une fenêtre de huit semaines déjà actée, propose une répartition temporelle hypothétique.",
  S7: "Représente trois chaînes de dépendances qui convergent vers une mise en service.",
  S8: "Présente un arbre de décision avec plusieurs hypothèses et branches.",
  S9: "Explique trois chantiers parallèles avec un contrôle commun avant convergence.",
  S10: "Montre-moi un graphique des coûts et gains attendus pour ce projet.",
  S11: "Compare deux options simples pour un pilote, avec avantages et limites.",
  S12: "SIM_INVALID_SCHEMA_PROBE",
} as const;

const SCENARIOS: Record<string, NoraTurnQualification> = {
  [SIM_PROMPTS.S1]: base({
    goal: "Expliquer le déploiement progressif",
    replyDraft:
      "Un déploiement progressif consiste à étendre un changement par vagues successives, en vérifiant les enseignements entre chaque vague. Aucune chronologie ni chiffre n'est affirmé ici.",
    // No visualComposition — prose only.
  }),

  [SIM_PROMPTS.S2]: base({
    goal: "Synthèse stratégique multi-sites",
    replyDraft: "Synthèse stratégique (dérivée des sections canoniques).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "synthesis",
          id: "sim-s2",
          title: "Plusieurs sites. Une même exigence de maîtrise.",
          headlineAccent: "Deux lectures du risque.",
          lead: "Les constats ci-dessous s'appuient sur le contexte fourni. Aucun effectif ni durée n'est inventé.",
          items: [
            {
              id: "i1",
              label: "Constat",
              detail: "Les sites ne partagent pas encore le même niveau de préparation.",
              tone: "observation",
            },
            {
              id: "i2",
              label: "Risque",
              detail: "Une bascule unique concentrerait les sollicitations support.",
              tone: "risk",
            },
            {
              id: "i3",
              label: "Piste",
              detail: "Comparer un rythme progressif et un pilote avant extension.",
              tone: "priority",
            },
          ],
          strategiesSectionTitle: "Deux pistes à examiner",
          strategyCards: [
            {
              id: "b",
              eyebrow: "PISTE B",
              title: "Progression site par site",
              summary: "Vagues courtes avec contrôle entre chaque extension.",
              positive: "Charge support étalée",
              counterpart: "Contrepartie : coexistence prolongée",
              accent: "blue",
            },
            {
              id: "c",
              eyebrow: "PISTE C",
              title: "Pilote puis extension",
              summary: "Un site d'apprentissage avant une bascule plus large.",
              positive: "Apprentissage initial",
              counterpart: "Contrepartie : pic ultérieur possible",
              accent: "gold",
            },
          ],
          orientation:
            "Recommandation conditionnelle : privilégier la progression si le support ne peut pas absorber un pic.",
          textAlternative:
            "Synthèse : deux pistes B/C, constats et risques, sans chiffres inventés.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S3]: base({
    goal: "Comparer trois stratégies",
    replyDraft: "Comparaison de trois stratégies (dérivée).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "comparison",
          id: "sim-s3",
          title: "Trois stratégies. Trois lectures du risque.",
          lead: "Chaque option conserve ses avantages et ses limites. Aucune n'est retenue.",
          alternatives: [
            {
              id: "a",
              title: "Séquences courtes",
              summary: "Vagues successives avec contrôle entre sites.",
              pros: ["Réversible"],
              cons: ["Coexistence plus longue", "Coordination continue"],
            },
            {
              id: "b",
              title: "Pilote unique",
              summary: "Un site d'apprentissage avant extension.",
              pros: ["Apprentissage ciblé"],
              cons: ["Transfert d'apprentissage à sécuriser"],
            },
            {
              id: "c",
              title: "Bascule concentrée",
              summary: "Fenêtre unique après préparation homogène.",
              pros: ["Durée de coexistence réduite"],
              cons: ["Pic support", "Préparation complète exigée", "Retour arrière plus tendu"],
            },
          ],
          recommendation:
            "Recommandation conditionnelle : si le support est saturé, éviter la bascule concentrée.",
          editorialNote: "Comparaison sémantique — Studio choisit la variante cartes.",
          textAlternative: "Trois stratégies A/B/C avec avantages et limites distincts.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S4]: base({
    goal: "Comparer cinq options",
    replyDraft: "Matrice de cinq options (dérivée).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "comparison",
          id: "sim-s4",
          title: "Cinq options. Une matrice éditoriale.",
          lead: "Options en lignes, critères en colonnes. Contenu intégral conservé.",
          alternatives: [
            { id: "a", title: "Séquences courtes", summary: "Vagues successives contrôlées." },
            { id: "b", title: "Pilote unique", summary: "Apprentissage avant extension." },
            { id: "c", title: "Deux vagues", summary: "Regroupement partiel." },
            { id: "d", title: "Accompagnement renforcé", summary: "Présence support locale." },
            { id: "e", title: "Bascule concentrée", summary: "Fenêtre unique préparée." },
          ],
          criteria: [
            {
              id: "effort",
              label: "Effort",
              values: {
                a: "Étalé",
                b: "Modéré puis pic",
                c: "Deux pics",
                d: "Élevé local",
                e: "Pic unique",
              },
            },
            {
              id: "risque",
              label: "Risque",
              values: {
                a: "Coexistence",
                b: "Transfert",
                c: "Coordination",
                d: "Disponibilité",
                e: "Préparation",
              },
            },
            {
              id: "delai",
              label: "Délai",
              values: {
                a: "Long",
                b: "Moyen",
                c: "Moyen+",
                d: "Variable",
                e: "Court si prêt",
              },
            },
          ],
          editorialNote: "Matrice réelle simulée — cinq options, trois critères.",
          textAlternative: "Cinq options A–E : effort, risque, délai.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S5]: base({
    goal: "Parcours en six étapes",
    replyDraft: "Parcours en six étapes (dérivé).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "sequence",
          id: "sim-s5",
          title: "Un parcours en six temps.",
          headlineAccent: "Ordre connu, sans dates inventées.",
          lead: "Les étapes sont ordonnées. Aucune durée calendaire n'est affirmée.",
          steps: [
            { id: "s1", title: "Cadrer l'intention", detail: "Formuler le besoin et les contraintes connues." },
            { id: "s2", title: "Cartographier les sites", detail: "Repérer les différences de maturité." },
            { id: "s3", title: "Qualifier le support", detail: "Mesurer la capacité d'accompagnement." },
            { id: "s4", title: "Préparer le retour arrière", detail: "Documenter la marche de reprise." },
            { id: "s5", title: "Conduire un pilote", detail: "Observer les frictions sur un périmètre limité." },
            { id: "s6", title: "Étendre sous contrôle", detail: "N'ouvrir la suite qu'après vérification." },
          ],
          closingNote: "Aucune chronologie chiffrée — temporalité non fournie.",
          textAlternative: "Six étapes ordonnées sans dates.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S6]: base({
    goal: "Répartition temporelle hypothétique sur 8 semaines",
    replyDraft: "Chronologie hypothétique (dérivée).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "sequence",
          id: "sim-s6",
          title: "Une lecture possible des huit semaines.",
          headlineAccent: "Hypothèse temporelle explicite.",
          lead: "La fenêtre de huit semaines est fournie par le Pilote. La répartition reste hypothétique.",
          steps: [
            { id: "s1", title: "Qualifier", detail: "Accès et dépendances." },
            { id: "s2", title: "Préparer", detail: "Support et communication." },
            { id: "s3", title: "Tester", detail: "Site pilote." },
            { id: "s4", title: "Étendre", detail: "Vagues autorisées." },
          ],
          timeline: {
            weeks: 8,
            caption:
              "Répartition hypothétique — aucune charge réelle n'est affirmée comme fait projet.",
            tracks: [
              { id: "t1", label: "Préparation", startWeek: 1, endWeek: 3, barLabel: "Préparation", tone: "blue" },
              { id: "t2", label: "Pilote", startWeek: 3, endWeek: 4, barLabel: "Pilote", tone: "violet" },
              {
                id: "t3",
                label: "Sites restants",
                startWeek: 5,
                endWeek: 7,
                barLabel: "Extension",
                tone: "gold",
              },
              { id: "t4", label: "Stabilisation", startWeek: 8, endWeek: 8, barLabel: "Clôture", tone: "teal" },
            ],
          },
          closingNote: "Ne pas traiter cette grille comme un planning engagé.",
          textAlternative: "Quatre étapes + chronologie hypothétique 8 semaines.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S7]: base({
    goal: "Trois chaînes de dépendances",
    replyDraft: "Dépendances convergentes (dérivées).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "relations",
          id: "sim-s7",
          title: "Trois chaînes convergentes",
          layoutHint: "dependencies",
          nodes: [
            { id: "a1", label: "Accès réseau", kind: "observation" },
            { id: "a2", label: "Comptes services", kind: "finding" },
            { id: "b1", label: "Données métier", kind: "observation" },
            { id: "b2", label: "Contrôles qualité", kind: "finding" },
            { id: "c1", label: "Support local", kind: "observation" },
            { id: "c2", label: "Communication", kind: "finding" },
            { id: "gate", label: "Prérequis prêts", kind: "finding" },
            { id: "go", label: "Mise en service", kind: "hypothesis" },
          ],
          edges: [
            { from: "a1", to: "a2", relation: "depends_on" },
            { from: "a2", to: "gate", relation: "depends_on" },
            { from: "b1", to: "b2", relation: "depends_on" },
            { from: "b2", to: "gate", relation: "depends_on" },
            { from: "c1", to: "c2", relation: "depends_on" },
            { from: "c2", to: "gate", relation: "depends_on" },
            { from: "gate", to: "go", relation: "depends_on" },
          ],
          textAlternative: "Trois chaînes A/B/C convergent vers la mise en service.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S8]: base({
    goal: "Arbre de décision",
    replyDraft: "Arbre conditionnel (dérivé).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "relations",
          id: "sim-s8",
          title: "Hypothèses de décision",
          layoutHint: "decisionTree",
          nodes: [
            { id: "root", label: "Support saturé ?", kind: "unknown" },
            { id: "y", label: "Oui — rythme progressif", kind: "hypothesis" },
            { id: "n", label: "Non — pilote possible", kind: "hypothesis" },
            { id: "y2", label: "Contrôle entre vagues", kind: "finding" },
            { id: "n2", label: "Apprentissage puis extension", kind: "finding" },
            { id: "leaf", label: "Réévaluer avant engagement", kind: "hypothesis" },
          ],
          edges: [
            { from: "root", to: "y", relation: "condition_true" },
            { from: "root", to: "n", relation: "condition_false" },
            { from: "y", to: "y2", relation: "flow" },
            { from: "n", to: "n2", relation: "flow" },
            { from: "y2", to: "leaf", relation: "flow" },
            { from: "n2", to: "leaf", relation: "flow" },
          ],
          textAlternative: "Arbre : support saturé ? branches progressif / pilote, puis réévaluation.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S9]: base({
    goal: "Trois chantiers parallèles",
    replyDraft: "Processus parallèle (dérivé).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "relations",
          id: "sim-s9",
          title: "Trois voies parallèles",
          layoutHint: "parallelProcess",
          nodes: [
            { id: "t1a", label: "Infra — inventaire", kind: "observation", laneId: "infra" },
            { id: "t1b", label: "Infra — préparation", kind: "finding", laneId: "infra" },
            { id: "t1c", label: "Infra — validation", kind: "finding", laneId: "infra" },
            { id: "t2a", label: "Données — extraction", kind: "observation", laneId: "data" },
            { id: "t2b", label: "Données — contrôle", kind: "finding", laneId: "data" },
            { id: "t2c", label: "Données — bascule", kind: "hypothesis", laneId: "data" },
            { id: "t3a", label: "Humain — relais", kind: "observation", laneId: "people" },
            { id: "t3b", label: "Humain — formation", kind: "finding", laneId: "people" },
            { id: "t3c", label: "Humain — support", kind: "finding", laneId: "people" },
            { id: "sync", label: "Contrôle commun", kind: "finding" },
            { id: "next", label: "Suite autorisée", kind: "hypothesis" },
          ],
          edges: [
            { from: "t1a", to: "t1b", relation: "flow" },
            { from: "t1b", to: "t1c", relation: "flow" },
            { from: "t2a", to: "t2b", relation: "flow" },
            { from: "t2b", to: "t2c", relation: "flow" },
            { from: "t3a", to: "t3b", relation: "flow" },
            { from: "t3b", to: "t3c", relation: "flow" },
            { from: "t1c", to: "sync", relation: "sync" },
            { from: "t2c", to: "sync", relation: "sync" },
            { from: "t3c", to: "sync", relation: "sync" },
            { from: "sync", to: "next", relation: "depends_on" },
          ],
          textAlternative: "Trois voies Infra/Données/Humain, sync commun, puis suite.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S10]: base({
    goal: "Demande de graphique quantitatif sans données",
    replyDraft:
      "Je ne peux pas produire un graphique de coûts ou de gains : ces valeurs ne figurent pas dans le contexte disponible. Les inventer serait trompeur. Si vous disposez de sources D4 chiffrées, indiquez-les ; sinon, listons d'abord les données à collecter.",
    // Explicitly no visualComposition / no fake chart.
  }),

  [SIM_PROMPTS.S11]: base({
    goal: "Deux options pour un pilote",
    replyDraft: "Deux options (dérivées).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "comparison",
          id: "sim-s11",
          title: "Deux options pour un pilote.",
          lead: "Comparaison simple destinée à la preuve de persistance/relecture.",
          alternatives: [
            {
              id: "a",
              title: "Pilote unique",
              summary: "Un site concentre l'apprentissage.",
              pros: ["Focus"],
              cons: ["Représentativité limitée", "Transfert à prévoir"],
            },
            {
              id: "b",
              title: "Deux sites contrastés",
              summary: "Deux contextes pour élargir l'observation.",
              pros: ["Couverture"],
              cons: ["Charge support doublée"],
            },
          ],
          recommendation: "Recommandation conditionnelle : un site si le support est saturé.",
          textAlternative: "Deux options pilote : unique vs deux sites contrastés.",
        },
      ],
    },
  }),
};

/**
 * Resolve a provider-simulated qualification by exact natural prompt.
 * Returns null when the utterance is not part of the Level-B corpus.
 */
export function resolveProviderSimulatedQualification(
  userText: string,
): NoraTurnQualification | null {
  const key = userText.trim();
  return SCENARIOS[key] ?? null;
}

export function listProviderSimulatedPrompts(): string[] {
  return Object.keys(SCENARIOS);
}

```

### Extrait seam `nora-adapter.ts` (Level-B)

```ts
  profile_type_detail: policy.profileType,
    },
  });

  if (mustUseNoraFixture()) {
    return stampCkiDelivery(await fixtureReply(input, generationId, policy), input.ckiDelivery, true);
  }

  // Level-B: simulated provider finalOutput at the LIVE boundary — still validates via
  // validateNoraTurnQualification and travels the real D3 service path. Never uses
  // fixtureSemanticQualify / UI keys. DEV-only; does not contact the provider.
  // SIM takes precedence over LIVE even when STUDIO_E2E=1 (mustUseNoraFixture already false).
  if (isDevLane() && process.env.STUDIO_NORA_SIMULATED_PROVIDER === "1") {
    const sim = resolveProviderSimulatedQualification(input.userText);
    if (sim) {
      const validated = validateNoraTurnQualification(sim);
      const attemptId = newAttemptId();
      if (!validated.ok) {
        const failed = unavailableQualification(validated.reason);
        emitObs({
          event_name: "d3.nora.provider_simulated",
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
            qualification_status: failed.status,
            validation_reason: validated.reason,
            provider_contacted: "NO",
            proof_level: "ADAPTER_FAKE",
          },
        });
        return stampCkiDelivery(
          {
            generationId,
            mode: "provider-simulated",
            status: "UNKNOWN",
            streamingProvisional: false,
            streamingAttempted: false,
            streamingDelivered: false,
            streamingNotes: `SIM_QUALIFICATION_${validated.reason}`,
            content: failed.replyDraft,
            policy,
            modelRequested: policy.modelRequested,
            modelApplied: "provider-simulated",
            effortRequested: policy.effortRequested,
            effortApplied: policy.effortRequested,
            attempts: [
              {
                attemptId,
                kind: "non_stream",
                outcome: "UNKNOWN",
                notes: `SIM_QUALIFICATION_${validated.reason}`,
                providerCo
```

### `EditorialSynthesis.tsx` (C2)

```tsx
"use client";

/**
 * Figma 01 — editorial synthesis composition (dark Studio).
 * Structure: headline + accent, lead, indicators, numbered sections,
 * strategy cards, checklist, conditional orientation.
 */

import React from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
import type { SynthesisBlock } from "@/domains/conversation/visual-composition";

void React;

function exactShownElsewhere(it: SynthesisBlock["items"][number], block: SynthesisBlock): boolean {
  const label = (it.label ?? "").trim();
  const detail = (it.detail ?? "").trim();
  if (!label && !detail) return false;
  const strategyHit = (block.strategyCards ?? []).some((c) => {
    const bag = [c.title, c.summary, c.positive, c.counterpart].filter(Boolean).join("\n");
    if (detail && bag.includes(detail)) return true;
    return Boolean(label && detail && bag.includes(label) && bag.includes(detail));
  });
  if (strategyHit) return true;
  if (!detail && !label) return false;
  return (block.checklist ?? []).some((row) => {
    const rl = (row.label ?? "").trim();
    const rd = (row.detail ?? "").trim();
    if (label && detail && rl === label && rd === detail) return true;
    if (detail && rd === detail) return true;
    return false;
  });
}

export function EditorialSynthesis({ block }: { block: SynthesisBlock }) {
  // C2 — drop residual items only on demonstrated exact-identity duplication with
  // strategy/checklist surfaces. Tone alone never suppresses a distinct nuance.
  const residual = block.items.filter((it) => !exactShownElsewhere(it, block));

  return (
    <div
      className="fig-nc-editorial fig-comp-synth-flow"
      data-testid="nora-composition-editorial-synthesis"
      data-renderer="editorial-v3"
      data-fixture-demo={block.fixtureDemo ? "1" : "0"}
    >
      {block.fixtureDemo ? (
        <p className="fig-nc-fixture-badge" data-testid="nora-composition-fixture-badge">
          EXEMPLE · DONNÉES FICTIVES
        </p>
      ) : null}

      <header className="fig-nc-editorial-hero">
        <h3 className="fig-nc-editorial-headline" data-testid="nora-composition-editorial-headline">
          <span className="fig-nc-editorial-headline-primary">{block.title}</span>
          {block.headlineAccent ? (
            <span className="fig-nc-editorial-headline-accent">{block.headlineAccent}</span>
          ) : null}
        </h3>
        {block.lead ? (
          <p className="fig-nc-editorial-lead" data-testid="nora-composition-editorial-lead">
            {block.lead}
          </p>
        ) : null}
      </header>

      {block.indicators?.length ? (
        <div
          className="fig-nc-indicators"
          data-testid="nora-composition-indicators"
          data-count={block.indicators.length}
        >
          {block.indicators.map((ind, i) => (
            <React.Fragment key={ind.id}>
              {i > 0 ? <div className="fig-nc-indicators-divider" aria-hidden /> : null}
              <div className="fig-nc-indicator" data-indicator-id={ind.id}>
                <p className="fig-nc-indicator-value">{ind.value}</p>
                <p className="fig-nc-indicator-label">{ind.label}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      ) : null}

      {block.strategyCards?.length ? (
        <section
          className="fig-nc-editorial-section"
          data-testid="nora-composition-strategies"
          aria-label={block.strategiesSectionTitle ?? "Stratégies"}
        >
          <div className="fig-nc-section-head">
            <span className="fig-nc-section-num" aria-hidden>
              01
            </span>
            <div>
              <h4 className="fig-nc-section-title">
                {block.strategiesSectionTitle ?? "Deux stratégies, deux répartitions du risque"}
              </h4>
            </div>
          </div>
          <div
            className="fig-nc-strategy-grid"
            data-count={block.strategyCards.length}
          >
            {block.strategyCards.map((card) => (
              <article
                key={card.id}
                className={`fig-nc-strategy-card fig-nc-strategy-${card.accent ?? "blue"}`}
                data-testid="nora-composition-strategy-card"
                data-accent={card.accent ?? "blue"}
              >
                <div className="fig-nc-strategy-accent" aria-hidden />
                <div className="fig-nc-strategy-top">
                  <p className="fig-nc-strategy-eyebrow">{card.eyebrow}</p>
                  <span className="fig-nc-strategy-mono" aria-hidden>
                    {(card.eyebrow.match(/[A-Z]$/)?.[0] ?? card.eyebrow.slice(-1)).toUpperCase()}
                  </span>
                </div>
                <h5 className="fig-nc-strategy-title">{card.title}</h5>
                <p className="fig-nc-strategy-summary">{card.summary}</p>
                {card.positive || card.counterpart ? (
                  <div className="fig-nc-strategy-footer">
                    {card.positive ? (
                      <p className="fig-nc-strategy-positive">{card.positive}</p>
                    ) : null}
                    {card.counterpart ? (
                      <p className="fig-nc-strategy-counterpart">{card.counterpart}</p>
                    ) : null}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {block.checklist?.length ? (
        <section
          className="fig-nc-editorial-section"
          data-testid="nora-composition-checklist"
          aria-label={block.checklistSectionTitle ?? "Points à vérifier"}
        >
          <div className="fig-nc-section-head">
            <span className="fig-nc-section-num" aria-hidden>
              02
            </span>
            <h4 className="fig-nc-section-title">
              {block.checklistSectionTitle ?? "Ce qui doit être vérifié avant tout choix"}
            </h4>
          </div>
          <ul className="fig-nc-checklist">
            {block.checklist.map((row) => (
              <li key={row.id} className="fig-nc-checklist-row" data-checklist-id={row.id}>
                <span className="fig-nc-checklist-dot" aria-hidden />
                <strong className="fig-nc-checklist-label">{row.label}</strong>
                <span className="fig-nc-checklist-detail">{row.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {residual.length ? (
        <ul className="fig-visual-synthesis-list fig-nc-residual-items">
          {residual.map((it) => {
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
                className={`fig-visual-synth-item fig-visual-tone-${it.tone ?? "information"} fig-comp-synth-row`}
              >
                <NoraSemanticIcon role={role} icon={it.icon} />
                <div className="fig-comp-synth-copy">
                  <strong className="fig-comp-synth-label">{it.label}</strong>
                  {it.detail ? (
                    <SafeMarkdown
                      content={it.detail}
                      className="fig-visual-inline-md fig-comp-synth-detail"
                    />
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}

      {block.orientation ? (
        <aside
          className="fig-nc-orientation"
          data-testid="nora-composition-orientation"
        >
          <p className="fig-nc-orientation-label">Orientation conditionnelle</p>
          <p className="fig-nc-orientation-body">{block.orientation}</p>
        </aside>
      ) : null}
    </div>
  );
}

```

### `EditorialSequence.tsx` (timeline)

```tsx
"use client";

/**
 * Figma 02 / 06 — editorial sequence: horizontal numbered cards + optional
 * fixture timeline, or vertical editorial steps 01–06.
 */

import React from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import type { SequenceBlock } from "@/domains/conversation/visual-composition";
import type { SequenceVariant } from "@/domains/conversation/conversational-composition";

void React;

export function EditorialSequence({
  block,
  variant,
}: {
  block: SequenceBlock;
  variant: SequenceVariant;
}) {
  const horizontal = variant === "horizontal";
  // Timeline renders whenever temporal data is present — fixtureDemo only qualifies
  // the badge/footnote, never the authorization to paint an admitted timeline.
  const showTimeline = Boolean(block.timeline?.weeks && block.timeline.tracks?.length);

  return (
    <div
      className={`fig-nc-sequence fig-nc-sequence-${variant}`}
      data-testid="nora-composition-editorial-sequence"
      data-variant={variant}
      data-fixture-demo={block.fixtureDemo ? "1" : "0"}
      data-timeline={showTimeline ? "1" : "0"}
      data-step-count={block.steps.length}
    >
      {block.fixtureDemo ? (
        <p className="fig-nc-fixture-badge">EXEMPLE · SÉQUENCE FICTIVE</p>
      ) : null}

      <header className="fig-nc-editorial-hero">
        <h3 className="fig-nc-editorial-headline">
          <span className="fig-nc-editorial-headline-primary">{block.title}</span>
          {block.headlineAccent ? (
            <span className="fig-nc-editorial-headline-accent">{block.headlineAccent}</span>
          ) : null}
        </h3>
        {block.lead ? <p className="fig-nc-editorial-lead">{block.lead}</p> : null}
      </header>

      {horizontal ? (
        <section className="fig-nc-editorial-section" data-testid="nora-composition-steps-horizontal">
          <div className="fig-nc-section-head">
            <span className="fig-nc-section-num" aria-hidden>
              01
            </span>
            <h4 className="fig-nc-section-title">
              {block.steps.length === 4
                ? "Quatre étapes à maîtriser"
                : `${block.steps.length} étapes à maîtriser`}
            </h4>
          </div>
          <ol className="fig-nc-h-steps">
            {block.steps.map((step, idx) => (
              <li key={step.id} className="fig-nc-h-step" data-step-id={step.id}>
                {idx > 0 ? <div className="fig-nc-h-step-link" aria-hidden /> : null}
                <article className="fig-nc-h-step-card">
                  <div className="fig-nc-h-step-medallion" aria-hidden>
                    {idx + 1}
                  </div>
                  <h5>{step.title}</h5>
                  {step.detail ? (
                    <SafeMarkdown content={step.detail} className="fig-visual-inline-md" />
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        </section>
      ) : (
        <section
          className="fig-nc-editorial-section fig-nc-v-steps-section"
          data-testid="nora-composition-steps-vertical"
        >
          <div className="fig-nc-section-head">
            <span className="fig-nc-section-num" aria-hidden>
              01
            </span>
            <h4 className="fig-nc-section-title">
              {block.steps.length === 6
                ? "Parcours en six temps"
                : `Parcours en ${block.steps.length} temps`}
            </h4>
          </div>
          <ol className="fig-nc-v-steps">
            {block.steps.map((step, idx) => (
              <li key={step.id} className="fig-nc-v-step" data-step-id={step.id}>
                <span className="fig-nc-v-step-num" aria-hidden>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="fig-nc-v-step-body">
                  <h5>{step.title}</h5>
                  {step.detail ? (
                    <SafeMarkdown content={step.detail} className="fig-visual-inline-md" />
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {showTimeline && block.timeline ? (
        <section
          className="fig-nc-editorial-section"
          data-testid="nora-composition-timeline"
          aria-label={
            block.fixtureDemo ? "Chronologie de démonstration" : "Chronologie"
          }
        >
          <div className="fig-nc-section-head">
            <span className="fig-nc-section-num" aria-hidden>
              02
            </span>
            <h4 className="fig-nc-section-title">
              Une lecture possible des {block.timeline.weeks} semaines
            </h4>
          </div>
          {block.timeline.caption ? (
            <p className="fig-nc-timeline-caption">{block.timeline.caption}</p>
          ) : null}
          <div
            className="fig-nc-timeline"
            style={{ ["--tl-weeks" as string]: String(block.timeline.weeks) }}
          >
            <div className="fig-nc-timeline-head" aria-hidden>
              <span className="fig-nc-timeline-label-col" />
              <div className="fig-nc-timeline-weeks">
                {Array.from({ length: block.timeline.weeks }, (_, i) => (
                  <span key={i} className="fig-nc-timeline-week">
                    S{i + 1}
                  </span>
                ))}
              </div>
            </div>
            {block.timeline.tracks.map((track) => {
              const start = Math.max(1, Math.min(track.startWeek, block.timeline!.weeks));
              const end = Math.max(start, Math.min(track.endWeek, block.timeline!.weeks));
              const span = end - start + 1;
              return (
                <div key={track.id} className="fig-nc-timeline-row" data-track-id={track.id}>
                  <span className="fig-nc-timeline-label-col">{track.label}</span>
                  <div className="fig-nc-timeline-track">
                    <div
                      className={`fig-nc-timeline-bar fig-nc-timeline-${track.tone ?? "blue"}`}
                      style={{
                        gridColumn: `${start} / span ${span}`,
                      }}
                      data-start-week={start}
                      data-end-week={end}
                    >
                      {track.barLabel ?? track.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="fig-nc-timeline-footnote">
            {block.fixtureDemo
              ? "Lecture indicative (FIXTURE / DEMONSTRATION) — aucune date projet n'est affirmée."
              : "Lecture temporelle issue des données admises — ne pas confondre avec un engagement."}
          </p>
        </section>
      ) : null}

      {block.closingNote ? (
        <aside className="fig-nc-orientation" data-testid="nora-composition-sequence-closing">
          <p className="fig-nc-orientation-label">Garde-fou</p>
          <p className="fig-nc-orientation-body">{block.closingNote}</p>
        </aside>
      ) : null}
    </div>
  );
}

```

---

## 12. Fake / Real

- ADAPTER FAKE / API/BROWSER FAKE Level-B : **PROVEN**
- UI-key fixture visual : **PROVEN** (R01–R06)
- LIVE : **NOT RUN**
- HISTORICAL PG : **NOT RUN**

---

## 13. Préservation autorité

Strategy A, M1–M5, C2/C2-08, ELK 07–09, SubstanceComplement, D3–D9, HumanDecision, brouillon — préservés. Aucun nouvel effet métier.

---

## 14. Risques / dettes / exit

- LIVE spontané non prouvé.
- T02 long flaky risk après volumes de messages — surveillé.
- Exit : arbitrage Morris sur protocole LIVE ; pas de Gate C/ADOPTED/RECETTE auto.

---

## 15. Verdict unique

**`DEV END-TO-END CHAIN VERIFIED — READY FOR BOUNDED LIVE DECISION`**

Implémenté : seam SIM, corpus S1–S11, corrections 02/04/C2, persist/reload BROWSER.
Prouvé : Level-B ADAPTER+BROWSER FAKE ; fixtures R01–R06 ; C2 unit.
Hypothétique : production spontanée LIVE.
Non testé : LIVE, PG historique.
Prochain gate Morris : autoriser ou non le protocole LIVE borné.
