# SFIA STUDIO — AKG-M5 / L3-S2
# LUMEN COGNITIVE QUALITY + PREPARE CONSENT
# CONTINUATION A+B — DIAGNOSTIC A1/B REGRESSION
# REVIEW PACK FULL (mono-chantier)

**Horodatage (Europe/Paris):** 2026-10-31 20:27:46 +0200
**Horodatage UTC:** 2026-10-31T18:27:46Z
**GO Morris:** Investigation A1/B intégrée — 2026-10-31 — **investigation only** (pas de nouvelle correction Product sans arbitrage)
**Milestone:** AKG-M5 / L3-S2 — OPEN
**Cycle:** 8 Delivery + 9 QA (continuité) — CRITICAL
**Review Pack:** FULL — continuité du même chantier A+B
**Review Handoff:** REQUIRED — publish-in-cycle (L3)

---

## 0. Note opérationnelle Cursor

`move_agent_to_root` **non utilisé** pour ce cycle (échec récurrent : tentative de `git checkout feat/akg-m5-nora-adaptive-presentation` déjà lié à un autre worktree). Travail en chemins absolus sur le delivery WT.

---

## 1. Git Truth

| Item | Value |
|------|-------|
| Delivery WT | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-lumen-cog-prepare-corr-01` |
| Branch | `feat/akg-m5-lumen-cog-prepare-corr-01` |
| HEAD | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` |
| origin/main | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` |
| Run WT | `/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-campaign-3020` @ `7dd49ecd` — **non modifié** |
| Studio :3020 | UP (307) — **non redémarré** |
| Campaign DBs (RO) | `…/new-project-campaign-01/product/{oa-product,nora-session}.sqlite` |
| Dirty delivery | corrections A+B locales **conservées** (5 M code + 1 test ?? + pack) |
| Handoff tip pré-investigation | `079a999218247d043ae0cf10dac9735d5f453dfe` |
| Handoff blob pré | `e0d0aea3094dfe35d39810343b7ab0fd8f2c9a75` |

Aucun reset/clean/stash. Aucun push projet.

---

## 2. Convergence Pre-check

Relus / applicables : template cycle, routing, operating model, Build Doctrine, Roadmap, C1, M5 journey, v3 framing 30–35, PRR README+03/05–09, handoff `079a9992` contenu A+B antérieur **conservé et étendu**.

---

## 3. État des corrections locales A+B (préexistantes — NON RÉINITIALISÉES)

| Fichier | Rôle |
|---------|------|
| `w2/prepareGenericExecutionContractDraft.ts` | `hasExplicitPrepareContractRefusal` + gates |
| `orchestrateTurn.ts` | refuse tool enqueue + `pilotUtterance` |
| `productExecutionAgentsTools.ts` | description anti-refus |
| `buildProjectSystemPrompt.ts` | ANSWER primacy (local dirty) |
| tests G-D4 + `lumenCogPrepareCorr01.d0.test.ts` | DET 16/16 PASS (scope précédent) |

**DET A+B précédent :** 16/16 PASS — **conservé**. TEST-15 **non clôturé** (réserves négation non lexicales etc.).

**Ce GO :** aucune nouvelle correction Product appliquée.

---

## 4. Chronologie LUMEN (rappel)

| | |
|--|--|
| project | `prj:6d0696db-eff0-41c7-a081-3bc71611cc6c` |
| cycle | `cyc:trj-4139782c77c92e3813a72084` |
| EC litigieux | `xct:gen-prep:e45f631d000ff3986360e68d` confirmation_required — **préservé** |
| SQLite | lecture seule `mode=ro` — zéro checkpoint/migration |

---

## 5. Matrice des tours (association MÊME turnId)

### T-A1 — Demande cadrage + formats (première)

| Champ | Valeur |
|-------|--------|
| user turn_id / seq | `pt:b205e2a4c5ad4899` / 0 |
| assistant turn_id / seq | `pt:06a8beb5a7fc577a` / 1 |
| created_at (asst) | `2026-10-31T15:20:58.493Z` |
| logical_turn_id | `ltu:42608e846fc6f0e7b164f8cab285844f` |
| cycle | `None` |
| content_len | 197 |
| presentation_json | présent (5 blocks) |
| title | 'Comparer les formats sans figer le choix' |
| composed_len | 2986 |
| structurallyAdmissibleForA1 | True |
| content ≡ composed | False |
| buildDurable usedA1 | False |
| resolveAdaptive mode | **plain** |
| render presentation null | True |
| contentFullyCovered | False |

**Pilote (extrait):** Maintenant que le projet LUMEN est créé, j'aimerais qu'on avance ensemble sur son cadrage.  Concernant ta question, je n'ai pas encore de durée ni de nombre de séances définitiveme…

**Memory B content (intégral — court):**
```
Je te propose de poursuivre le cadrage en confrontant ces formats aux disponibilités du centre et aux besoins concrets des participants, puis de valider les grandes orientations au fur et à mesure.
```

**composed preview (depuis presentation_json du MÊME tour):**
```
LUMEN · premières pistes de cadrage

Comparer les formats sans figer le choix

Ces comparaisons sont des repères de travail, pas encore des choix arrêtés. Les apprentissages dépendront aussi du niveau
```
### T-A2 — Comparer explicitement 3 formats

| Champ | Valeur |
|-------|--------|
| user turn_id / seq | `pt:37229bf92ce8b4a0` / 2 |
| assistant turn_id / seq | `pt:b796154ad8685d64` / 3 |
| created_at (asst) | `2026-10-31T15:28:56.176Z` |
| logical_turn_id | `ltu:cde6c6caaeae38fe294ee3e1caab2c17` |
| cycle | `cyc:trj-4139782c77c92e3813a72084` |
| content_len | 186 |
| presentation_json | présent (5 blocks) |
| title | 'Comparer les formats et leurs effets possibles' |
| composed_len | 4292 |
| structurallyAdmissibleForA1 | True |
| content ≡ composed | False |
| buildDurable usedA1 | False |
| resolveAdaptive mode | **plain** |
| render presentation null | True |
| contentFullyCovered | False |

**Pilote (extrait):** Nora, maintenant que le cadrage du projet LUMEN est démarré, j'aimerais qu'on commence à construire concrètement notre projet.  Reprenons notre objectif : concevoir un atelier d'in…

**Memory B content (intégral — court):**
```
Pour préciser le périmètre pédagogique, quels usages du quotidien voudrais-tu traiter en priorité — par exemple communiquer, chercher une information ou effectuer une démarche en ligne ?
```

**composed preview (depuis presentation_json du MÊME tour):**
```
LUMEN · cadrage

Comparer les formats et leurs effets possibles

Les éléments confirmés dans notre échange sont l’objectif d’initiation, le public adulte débutant, le contexte du centre social, quelqu
```
### T-A3 — Priorités usages + recommandation

| Champ | Valeur |
|-------|--------|
| user turn_id / seq | `pt:55314451ea752dff` / 4 |
| assistant turn_id / seq | `pt:73bcbfb54b43dac7` / 5 |
| created_at (asst) | `2026-10-31T15:34:30.896Z` |
| logical_turn_id | `ltu:6260690db1153ab9040a15a8d80d0c6c` |
| cycle | `cyc:trj-4139782c77c92e3813a72084` |
| content_len | 264 |
| presentation_json | présent (5 blocks) |
| title | 'Une progression par étapes paraît la plus adaptée' |
| composed_len | 4074 |
| structurallyAdmissibleForA1 | True |
| content ≡ composed | False |
| buildDurable usedA1 | False |
| resolveAdaptive mode | **plain** |
| render presentation null | True |
| contentFullyCovered | False |

**Pilote (extrait):** Pour LUMEN, je souhaiterais privilégier les usages qui permettent aux participants de gagner rapidement en autonomie dans leur quotidien.  Je vois trois grandes priorités :  1. **R…

**Memory B content (intégral — court):**
```
Je te propose de vérifier ensuite si le centre peut garantir des créneaux récurrents, l’accès aux ordinateurs et un accompagnement entre les séances : ces éléments permettront de confirmer le parcours de plusieurs séances ou de préférer un format court plus ciblé.
```

**composed preview (depuis presentation_json du MÊME tour):**
```
LUMEN · comparaison des formats

Une progression par étapes paraît la plus adaptée

Les trois priorités — chercher de l’information, communiquer et effectuer des démarches — couvrent des gestes différ
```
### T-A4 — Cadrage structuré (objectifs/séances/…)

| Champ | Valeur |
|-------|--------|
| user turn_id / seq | `pt:6f856bbcc17193ec` / 6 |
| assistant turn_id / seq | `pt:01f15609efea28fe` / 7 |
| created_at (asst) | `2026-10-31T15:41:17.744Z` |
| logical_turn_id | `ltu:90edd79af52fbe05a1321207bec2ba15` |
| cycle | `cyc:trj-4139782c77c92e3813a72084` |
| content_len | 248 |
| presentation_json | présent (6 blocks) |
| title | 'Comparer les formats et choisir une progression réaliste' |
| composed_len | 5367 |
| structurallyAdmissibleForA1 | True |
| content ≡ composed | False |
| buildDurable usedA1 | False |
| resolveAdaptive mode | **plain** |
| render presentation null | True |
| contentFullyCovered | False |

**Pilote (extrait):** Je suis d'accord avec toi, Nora. Les créneaux disponibles, le matériel et l'accompagnement entre les séances seront des contraintes importantes à confirmer auprès du centre social.…

**Memory B content (intégral — court):**
```
Je te propose de garder le parcours de plusieurs séances comme format privilégié à l’étude, puis de vérifier avec le centre les créneaux, le nombre de postes et l’encadrement avant d’arrêter le nombre de séances et les objectifs de chaque activité.
```

**composed preview (depuis presentation_json du MÊME tour):**
```
LUMEN · proposition de cadrage

Comparer les formats et choisir une progression réaliste

Je prends la séance hebdomadaire, le petit groupe et les quelques ordinateurs comme des hypothèses de travail,
```
### T-B — Orientation retenue + refus PREPARE

| Champ | Valeur |
|-------|--------|
| user turn_id / seq | `pt:b165458a67bc5561` / 8 |
| assistant turn_id / seq | `pt:6c1b7e274db42cab` / 9 |
| created_at (asst) | `2026-10-31T15:49:44.350Z` |
| logical_turn_id | `None` |
| cycle | `cyc:trj-4139782c77c92e3813a72084` |
| content_len | 501 |
| presentation_json | NULL (0 blocks) |
| title | None |
| composed_len | 0 |
| structurallyAdmissibleForA1 | False |
| content ≡ composed | False |
| buildDurable usedA1 | False |
| resolveAdaptive mode | **plain** |
| render presentation null | True |
| contentFullyCovered | False |

**Pilote (extrait):** D'accord Nora. Je retiens comme orientation de travail un parcours pédagogique structuré sur plusieurs séances, sous réserve de confirmer les moyens et disponibilités du centre soc…

**Memory B content (intégral — court):**
```
[Mode réel] J'ai préparé le contrat d'exécution correspondant à : Préparer une première proposition de cadrage pédagogique pour LUMEN, en distinguant les éléments confirmés, les recommandations et les décisions restant à arbitrer.. Contrat inspectable : xct:gen-prep:e45f631d000ff3986360e68d (statut confirmation_required — non lancé). Tu peux le consulter dans la trajectoire et me demander de l'ajuster avant d'autoriser l'exécution. Préparer ≠ autoriser ≠ exécuter. Aucune exécution n'a été lancée.
```

**composed preview (depuis presentation_json du MÊME tour):**
```

```


### Replay déterministe (hors LIVE)

Source : modules Product CURRENT importés depuis delivery WT ; entrées = rangées Memory B.

Fichier preuve : `/tmp/lumen-a1b/a1b-replay.json` (copie pack diffs).

---

## 6. Diagnostic causal A1/B

### Mécanisme PROVEN (même tour)

Sur **T-A1, T-A2, T-A3, T-A4** (assistant `pt:06a8beb5…`, `pt:b796154a…`, `pt:73bcbfb5…`, `pt:01f15609…`) :

1. Le modèle a produit une **presentation** valide avec `comparison_table` (3 formats) ± recommendation/sections — `structurallyAdmissibleForA1 = true`, composed ≈ 3–5k chars.
2. Memory B `content` du **même** `turn_id` est une **narrative courte** (186–264 chars), style ORIENT (« Je te propose… » / question de suite).
3. `canonicalTextsEquivalent(content, composed) = false`.
4. `buildDurableAssistantContentForTurn` → `usedA1=false`, conserve le core court.
5. `resolveAdaptiveAssistantRender` → **`mode=plain`**, **`presentation=null`**, `contentFullyCovered=false`.
6. `ConversationSurface` rend `NoraCanonicalFallbackView` avec ce plain court → **la comparison_table du même tour n'est pas affichée**.

**Donc :** ce n'est pas une absence de génération analytique sur ces tours ; c'est une **perte Pilot-facing A1/B** : présentation riche persistée + narrative courte non équivalente → fallback B qui **masque** la présentation.

`RAW MODEL OUTPUT` hors schéma Product : **NOT OBSERVABLE** (pas de journal brut séparé). La preuve primaire est Memory B `content` + `presentation_json` du même turn — suffisante pour H2.

### T-B

Tour `pt:6c1b7e274db42cab` : annonce EC, `presentation_json=NULL`. Cause B (lexical PREPARE) **distincte** — déjà qualifiée. Lien avec A1/B : le skipF1 / mission path peut priver ce tour d'une presentation analytique, mais la perte A1/B sur T-A* est **indépendante** de TEST-15.

---

## 7. Comparaison historique PR #628 / #630

| État | SHA | Faits |
|------|-----|-------|
| **E0** avant NAP | base `2cc63686…` | Pas de `noraAdaptivePresentation.ts` / View ; narrative seule |
| **E1** après #628 | merge `c848b98c…` | presentation introduite ; A1 si body ≡ **lead** seulement (`contentFullyCoveredByPresentation`) ; sinon plain + presentation null ; prompt : « narrative reste canonique ; presentation organise le rendu » |
| **E2** après #630 | merge `14fb0c33…` → main `7dd49ecd` | NAP-SINGLE-RESPONSE-D1 : A1 si body ≡ **composeCanonical(blocks…)** ; sinon B plain **presentation not shown** ; dual `adaptive_with_canonical` retiré ; `buildDurableAssistantContentForTurn` ; prompt : substance dans blocks, narrative vide ou exact compose |

**Attribution :**

- **#628** introduit le split narrative/presentation et le fail-closed plain quand non couvert.
- **#630** renforce single-response : masquage explicite de la presentation si non-équivalence avec compose (plus strict que lead-only), et instructions « toute la réponse dans blocks ».
- Sur LUMEN CURRENT, le modèle remplit les blocks (conforme #630 intent) mais laisse une narrative ORIENT courte (non conforme au contrat « vide ou exact compose ») → **B masque les blocks**.

Ne pas attribuer à #630 seul un défaut génération ; ne pas attribuer au renderer une pauvreté qui n'existe pas dans presentation_json.

---

## 8. Matrice des hypothèses

| ID | Statut | Certitude | Preuve |
|----|--------|-----------|--------|
| **H1 MODEL GENERATION DEFICIT** | **DISPROVEN** sur T-A1…T-A4 | haute | Même turn : comparison_table + recommendation substantiels |
| **H2 A1/B PRESENTATION LOSS** | **PROVEN** | haute | Replay resolve → plain + presentation null ; content≪composed |
| **H3 OUTPUT NORMALIZATION LOSS** | NOT PROVEN comme cause primaire | basse | Pas de raw pré-normalize ; content Memory B déjà court |
| **H4 INSTRUCTION CONFLICT** | **LIKELY** contributeur | moyenne | Content = ORIENT ; prompt ORIENT + presentation ; guidance compose |
| **H5 PREPARE BYPASS** | **PROVEN** sur T-B seulement | haute | Lexical false-positive (chantier B) |
| **H6 COMBINED** | **LIKELY** global chantier | moyenne | H2 (A) + H5 (B) + H4 ; pas une seule cause unique A+B |

---

## 9. Architecture R23 (chemin restitution)

```
Pilot → IntentAnalysis → F1 Runner → structured output
  → narrative + presentation.blocks + conversationGuidance
  → composePilotFacingAssistantText
  → buildDurableAssistantContentForTurn
  → Memory B (content + presentation_json)
  → ConversationSurface → resolveAdaptiveAssistantRender
  → A1 NoraAdaptivePresentationView | B NoraCanonicalFallbackView
```

| Composant | Niveau |
|-----------|--------|
| `noraAdaptivePresentation.resolveAdaptiveAssistantRender` | BEHAVIOR PROVEN (replay LUMEN) |
| `buildDurableAssistantContentForTurn` | BEHAVIOR PROVEN |
| `ConversationSurface` A1/B branch | COVERAGE VERIFIED + BEHAVIOR PROVEN |
| Memory B `pilot_transcript_turns` | BEHAVIOR PROVEN (RO SQLite) |
| Raw model pre-schema | KNOWN GAP / NOT OBSERVABLE |
| Corrections B PREPARE | BEHAVIOR PROVEN DET (précédent) |

---

## 10. Impact axes

### AXE A
- Cause restitution principale sur LUMEN T-A* : **H2 PROVEN**.
- Correction locale ANSWER primacy : **utile mais insuffisante** seule (présentation déjà riche).
- Qualité LIVE affichée : **PARTIAL** jusqu'à correctif A1/B + revalidation.

### AXE B
- Correctif local DET conservé ; TEST-15 **non clôturé**.
- T-B distinct ; réserves négation non lexicales inchangées.

### INTÉGRATION A+B
- **OPEN** avant revue consolidée / arbitrage correctif A1/B.
- Pas READY FOR GIT INTEGRATION sur ce diagnostic seul.

---

## 11. Correction recommandée (NON APPLIQUÉE)

**Cause :** single-response fail-closed B lorsque `presentation` admissible ≠ `content` court → masquage des blocks.

**Correction minimale recommandée (arbitrage Morris) — CORR-A1B-01 :**

Aligner l'écriture durable sur le contrat prompt #630 déjà documenté (« narrative vide **ou** exact compose ») :

Dans `buildDurableAssistantContentForTurn` (et/ou point d'écriture `orchestrateTurn`) :

- Si `isPresentationStructurallyAdmissibleForA1(presentation)` :
  - **persister `contentCore = composeCanonicalFromPresentation(presentation)`** et `usedA1=true`,
  - même si `pilotFacingCore` non vide et non équivalent (traiter la narrative divergente comme incohérence modèle / ORIENT parasite, non comme restitution canonique).
- Conserver `presentation_json`.
- Effet : Memory B content ≡ compose → `resolveAdaptiveAssistantRender` → **A1** → blocks visibles.
- Ne pas réintroduire `adaptive_with_canonical`.
- Ne pas choisir la projection « parce que plus longue » sans gate structurelle A1 déjà existante.
- Ne pas toucher PREPARE / SHE / B gates.

**Alternatives rejetées :**
- Dual layer canonical+projection — contredit single-response #630 / GO.
- Prompt-only sans gate Product — insuffisant (LUMEN montre non-conformité modèle).
- Toujours plain en concaténant compose+narrative — risque double rendu / divergence.
- Afficher presentation en B sans équivalence sans réécrire durable — UI/Memory divergents.

**Fichiers impactés (si GO Delivery) :**
- `noraAdaptivePresentation.ts` (`buildDurableAssistantContentForTurn`, éventuellement commentaires contrat)
- `orchestrateTurn.ts` (si garde supplémentaire)
- tests DET : fixtures LUMEN-shaped (short narrative + rich presentation → A1 durable)
- non-régression : cas narrative longue sans presentation ; cas équivalents déjà A1 ; TEST-15

**Compatibilité A+B :** orthogonale au refus PREPARE ; conserve corrections B.

**Risque UX :** si presentation erronée et narrative longue correcte, on privilégierait presentation — mitigé par prompt « toute la réponse utile dans blocks » + admissibility ; documenter réserve.

**R24 :** volumes 03/06/07/08/09 — sync gate OPEN (ci-dessous).

**Preuve de sortie attendue :** rejouer T-A2 fixture → mode adaptive, comparison_table visible, zéro dual.

---

## 12. R24

| Volume | Impact |
|--------|--------|
| 03 E2E | Single-response : durable content doit suivre compose quand presentation A1-admissible |
| 06 Persistence | content + presentation_json ; cas non-équivalence |
| 07 Authority | inchangé (presentation ≠ Truth C) ; consentement PREPARE inchangé |
| 08 Test map | ajouter replay A1/B LUMEN-shaped + CORR-A1B-01 |
| 09 Gaps | H2 PROVEN LOCAL DET/RO ; LIVE revalidation OPEN ; TEST-15 réserves |

**R24 status :** `IMPACT QUALIFIED / SYNC GATE OPEN` — PRR **non modifié**. Contenu A+B précédent + A1/B à synchroniser sous GO Morris.

---

## 13. Tests exécutés (ce segment)

| Test | Résultat |
|------|----------|
| SQLite RO export LUMEN turns | OK |
| Replay `resolveAdaptiveAssistantRender` ×5 assistant turns | OK — 4× plain loss, 1× T-B null presentation |
| Vitest A+B précédent 16/16 | **non re-run requis** ; artifacts conservés |
| LIVE Nora / REAL / mutation | **NON** |

---

## 14. Fichiers créés/modifiés

**Product (préexistants dirty — inchangés ce GO investigation) :** voir §3 + diffs §16.

**Nouveaux Product :** aucun.

**Preuves hors repo :** `/tmp/lumen-a1b/*`, `/tmp/lumen-inv/*`.

---

## 15. Contenu nouveau fichier test (préexistant A+B)
```typescript
/**
 * LUMEN integrated A+B — cognitive ANSWER primacy + PREPARE consent (TEST-15).
 * Deterministic only — ZERO OpenAI LIVE — ZERO Cursor REAL — ZERO campaign DB writes.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import {
  hasExplicitPrepareContractIntent,
  hasExplicitPrepareContractRefusal,
  resolveChatFirstGenericPrepareGo,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";

const baseProject = (): ProjectAssistantContextDto =>
  ({
    projectId: "prj:lumen-test",
    displayName: "LUMEN test",
    shortReference: "LUMEN",
    contextSummary: "Atelier initiation numérique",
    constraints: [],
    activeCycleInstanceId: "cyc:test",
  }) as ProjectAssistantContextDto;

describe("LUMEN cog+prepare corr-01 — Axis A prompt primacy", () => {
  it("system prompt requires ANSWER before ORIENT for analytical asks", () => {
    const prompt = buildProjectSystemPrompt(baseProject());
    expect(prompt).toMatch(/RÉPONSE MÉTIER SUBSTANTIELLE/);
    expect(prompt).toMatch(/UNDERSTAND → REASON → ANSWER → puis ORIENT/);
    expect(prompt).toMatch(/conversationGuidance\.statement N'EST PAS un substitut/);
    expect(prompt).toMatch(/Comparaison demandée → comparaison exploitable/);
    expect(prompt).toMatch(/request_generic_execution_prepare/);
    expect(prompt).toMatch(/n'annonce jamais qu'un contrat a été préparé/);
  });
});

describe("LUMEN cog+prepare corr-01 — Axis B PREPARE consent", () => {
  const negatives = [
    "Ne prépare pas de contrat d'exécution.",
    "Je ne veux pas de contrat pour le moment.",
    "Analyse seulement, sans préparer de mission.",
    "Nous verrons l'exécution plus tard. Pas de contrat d'exécution.",
    "Prépare une analyse, pas un contrat.",
    "Je souhaite examiner cette proposition. Ne prépare pas de contrat d'exécution et ne lance aucune action technique pour le moment.",
  ];
  const positives = [
    "Prépare le contrat d'exécution pour la fiche d'animation.",
    "OK, prépare le contrat pour cette mission.",
  ];

  it("negations are refusal and not lexical prepare GO", () => {
    for (const text of negatives) {
      expect(hasExplicitPrepareContractRefusal(text), text).toBe(true);
      expect(hasExplicitPrepareContractIntent(text), text).toBe(false);
      expect(
        resolveChatFirstGenericPrepareGo({
          projectId: "prj:x",
          cycleInstanceId: "cyc:x",
          text,
        }).kind,
        text,
      ).toBe("no_go");
    }
  });

  it("positive explicit prepare remains lexical GO", () => {
    for (const text of positives) {
      expect(hasExplicitPrepareContractRefusal(text), text).toBe(false);
      expect(hasExplicitPrepareContractIntent(text), text).toBe(true);
      expect(
        resolveChatFirstGenericPrepareGo({
          projectId: "prj:x",
          cycleInstanceId: "cyc:x",
          text,
        }).kind,
        text,
      ).toBe("explicit_lexical_prepare");
    }
  });

  it("A+B integrated utterance: framing ask + refusal → no_go", () => {
    const text =
      "Prépare une analyse comparative et une proposition de cadrage détaillée pour LUMEN. " +
      "Ne prépare pas de contrat d'exécution.";
    expect(hasExplicitPrepareContractRefusal(text)).toBe(true);
    expect(hasExplicitPrepareContractIntent(text)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }),
    ).toEqual({ kind: "no_go", reason: "explicit_prepare_refusal" });
  });

  it("solicitGenericExecutionPrepare fail-closes on pilotUtterance refusal without OA", async () => {
    const result = await solicitGenericExecutionPrepare({
      // Minimal stub — refusal must short-circuit before OA/draft use.
      oa: null as never,
      projectId: "prj:lumen",
      cycleInstanceId: null,
      pilotUtterance:
        "Prépare une analyse. Ne prépare pas de contrat d'exécution.",
      mission: {
        objective: "should not matter",
        expectedOutcome: "should not matter",
      },
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("EXPLICIT_PREPARE_REFUSAL");
    expect(result.humanDecisionCreated).toBe(false);
    expect(result.executionAttemptCreated).toBe(false);
  });
});

```

## 16. Diffs corrections A+B préexistantes

### prepareGenericExecutionContractDraft.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 4b370302..f1b28249 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -87,13 +87,72 @@ export type GenericMissionPrepareReadiness = {
   readonly missingFields: readonly string[];
 };

+/**
+ * Explicit Pilote refusal of ExecutionContract PREPARE (TEST-15 / LUMEN).
+ * Fail-closed at Product admission — cognition may solicit, but refusal
+ * is never an authorization to PREPARE.
+ */
+export function hasExplicitPrepareContractRefusal(text: string): boolean {
+  const t = text.trim().toLowerCase();
+  if (!t) return false;
+  // "Ne prépare pas de contrat d'exécution…"
+  if (
+    /\b(ne|n[''])\s*(me\s+)?(prépare|prepare|préparer|preparer)\s+pas\b[\s\S]{0,80}\b(contrat|executioncontract|execution contract|mission)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // "pas de contrat d'exécution" / "pas de contrat" / "sans contrat"
+  if (
+    /\b(pas|sans|aucune?|aucun)\s+(de\s+|d[''])?(contrat(\s+d['']exéc?cution)?|execution\s*contract)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  if (
+    /\bsans\s+(préparer|preparer|prepare)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // "analyse seulement, sans préparer de mission" / "pas de mission pour le moment"
+  if (
+    /\b(ne\s+)?(veux|veut|souhait\w*|lance)\s+pas\b[\s\S]{0,60}\b(contrat|mission\s+(technique|d['']exécution|cursor))\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  if (
+    /\b(analyse|cadrage|proposition)\s+seulement\b[\s\S]{0,60}\bsans\b[\s\S]{0,40}\b(contrat|mission|exécution|execution)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // "prépare une analyse, pas un contrat"
+  if (
+    /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,80}\bpas\s+(de\s+|un\s+|une\s+)?(contrat|executioncontract|execution contract)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  return false;
+}
+
 /**
  * Explicit Pilote prepare-contract lexical intent (FR natural language).
  * Actionable work alone MUST NOT systematically PREPARE an EC (Q16 / Q20).
+ * Explicit refusal outranks any positive substring match (TEST-15).
  */
 export function hasExplicitPrepareContractIntent(text: string): boolean {
   const t = text.trim().toLowerCase();
   if (!t) return false;
+  if (hasExplicitPrepareContractRefusal(t)) return false;
   if (
     /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
       t,
@@ -126,6 +185,7 @@ export function isChatFirstPrepareAcceptGo(input: {
   readonly text: string;
   readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
 }): boolean {
+  if (hasExplicitPrepareContractRefusal(input.text)) return false;
   const candidate = input.pilotDecisionCandidate ?? null;
   if (
     candidate?.disposition === "accept" &&
@@ -171,6 +231,10 @@ export function resolveChatFirstGenericPrepareGo(input: {
   | { readonly kind: "prepare"; readonly offerFingerprint: string }
   | { readonly kind: "explicit_lexical_prepare" }
   | { readonly kind: "no_go"; readonly reason: string } {
+  // TEST-15 / LUMEN — explicit refusal is Product-side absence of consent.
+  if (hasExplicitPrepareContractRefusal(input.text)) {
+    return { kind: "no_go", reason: "explicit_prepare_refusal" };
+  }
   if (hasExplicitPrepareContractIntent(input.text)) {
     return { kind: "explicit_lexical_prepare" };
   }
@@ -1410,6 +1474,11 @@ export type SolicitGenericExecutionPrepareInput = {
   /** Full analysis (F2) OR mission fields (Nora tool) — exactly one source. */
   readonly analysis?: IntentAnalysisDto;
   readonly mission?: SolicitGenericPrepareMissionFields;
+  /**
+   * Current Pilote utterance (TEST-15). When set, explicit PREPARE refusal
+   * fail-closes before any EC mutation — tool solicitation cannot bypass.
+   */
+  readonly pilotUtterance?: string | null;
   /** M-HD-01 — verified OA HumanDecision for structural resume. */
   readonly decisionId?: string | null;
   readonly sessionKey?: string | null;
@@ -1493,6 +1562,15 @@ export async function solicitGenericExecutionPrepare(
   if (!projectId) {
     return fail("PRODUCT_PROJECT_REQUIRED", "Project requis pour préparer.");
   }
+  if (
+    typeof input.pilotUtterance === "string" &&
+    hasExplicitPrepareContractRefusal(input.pilotUtterance)
+  ) {
+    return fail(
+      "EXPLICIT_PREPARE_REFUSAL",
+      "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé.",
+    );
+  }
   const analysis =
     input.analysis ??
     buildIntentAnalysisFromSolicitedMission(input.mission ?? {});

```

### orchestrateTurn.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 8c9f335c..996d6a25 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -569,6 +569,17 @@ export async function orchestrateProjectAssistantTurn(input: {
               import("@/lib/vertical-slice-runtime"),
               import("./w2/prepareGenericExecutionContractDraft"),
             ]);
+          // TEST-15 — refuse queue when Pilote utterance forbids PREPARE.
+          if (prepareMod.hasExplicitPrepareContractRefusal(content)) {
+            return {
+              ok: false as const,
+              code: "EXPLICIT_PREPARE_REFUSAL",
+              message:
+                "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé.",
+              humanDecisionCreated: false as const,
+              executionAttemptCreated: false as const,
+            };
+          }
           const oa = getRuntimeApplicationService().oa;
           if (!oa) {
             return {
@@ -1370,6 +1381,8 @@ export async function orchestrateProjectAssistantTurn(input: {
             projectId: project.projectId,
             cycleInstanceId: project.activeCycleInstanceId?.trim() || null,
             mission: pendingGenericPrepareMission,
+            // TEST-15 — tool solicitation cannot bypass explicit Pilote refusal.
+            pilotUtterance: content,
             sessionDbPath: input.sessionDbPath,
             forceLocalAuthority:
               process.env.VITEST === "true" ||

```

### buildProjectSystemPrompt.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index e833de14..3d962eb3 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -187,10 +187,28 @@ export function buildProjectSystemPrompt(
     "Une Recommendation CURRENT réutilisée reste une Recommendation — jamais une HumanDecision ni un cycle lancé.",
     "Recommendation ≠ HumanDecision ≠ préparation de trajectoire ≠ START ≠ exécution.",
     "",
+    "=== RÉPONSE MÉTIER SUBSTANTIELLE (ANSWER — priorité) ===",
+    "Ordre obligatoire du tour : UNDERSTAND → REASON → ANSWER → puis ORIENT.",
+    "ANSWER est la charge utile Pilote. ORIENT (conversationGuidance) ne la remplace JAMAIS.",
+    "Quand le Pilote demande explicitement de comparer, analyser, recommander, structurer un cadrage,",
+    "lister avantages/limites/moyens/risques/hypothèses/étapes : PRODUIS ce contenu DANS CE TOUR",
+    "(presentation.blocks[] et/ou narrative complète). Ne te limite PAS à une courte invitation",
+    "du type « Je te propose de… » / « Pour préciser… » sans avoir livré l'analyse demandée.",
+    "Comparaison demandée → comparaison exploitable (formats/options, avantages, limites, moyens,",
+    "conséquences, recommandation argumentée, hypothèses non confirmées).",
+    "Cadrage structuré demandé → sections exploitables (objectifs, périmètre, séances, moyens,",
+    "hypothèses, risques, étapes) — pas une promesse de produire le cadrage plus tard.",
+    "Les réponses simples restent concises. Les demandes analytiques restent substantielles.",
+    "Faits ≠ hypothèses ≠ options ≠ recommandations ≠ décisions Pilote. N'invente pas de décision.",
+    "Si le Pilote interdit un contrat d'exécution : réponds sur le fond demandé et n'appelle PAS",
+    "request_generic_execution_prepare ; n'annonce jamais qu'un contrat a été préparé.",
+    "",
     "=== CONTINUATION CONVERSATIONNELLE (conversationGuidance — même tour) ===",
-    "Après avoir répondu : UNDERSTAND → REASON → ANSWER → ORIENT.",
+    "Après ANSWER seulement : ORIENT via conversationGuidance (même tour, pas de second appel).",
+    "conversationGuidance.statement N'EST PAS un substitut de la réponse métier.",
     "Identifie le prochain mouvement utile pour faire progresser le projet.",
-    "Ne termine pas sur un simple constat lorsqu'une suite honnête est identifiable.",
+    "Ne termine pas sur un simple constat lorsqu'une suite honnête est identifiable,",
+    "MAIS seulement après avoir livré ANSWER si une analyse/comparaison/cadrage a été demandé.",
     "Produit conversationGuidance dans le MÊME tour (pas de second appel).",
     "Champs : kind, scope, statement, rationale (rationale null si non matériel).",
     "Kinds autorisés uniquement :",

```

### productExecutionAgentsTools.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
index e867cdfb..faf7a02c 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
@@ -193,6 +193,9 @@ export function createProductExecutionAgentsTools(
       "Use when the Pilote wants Cursor to do real work and the mission is clear enough " +
       "(objective + expected outcome or scope). Product qualifies the mission server-side " +
       "(materiality, capabilities, protected paths); structural missions stay blocked until a HumanDecision. " +
+      "Do NOT call this tool when the Pilote explicitly refuses PREPARE " +
+      "(e.g. « ne prépare pas de contrat », « sans contrat d'exécution », « analyse seulement »). " +
+      "Product fail-closes refusals even if this tool is called. " +
       "This tool does NOT authorize and does NOT execute: PREPARE ≠ AUTHORIZE ≠ EXECUTE; " +
       "it never creates an ExecutionAttempt. Report the returned contract/status honestly " +
       "and never claim anything was executed.",

```

### p6.gD4….d0.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
index c0352f84..47cd3c0b 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
@@ -17,6 +17,7 @@ import {
   assessGenericMissionPrepareReadiness,
   assessMaterialityForGenericPrepare,
   hasExplicitPrepareContractIntent,
+  hasExplicitPrepareContractRefusal,
   isChatFirstPrepareAcceptGo,
   prepareGenericExecutionContractDraft,
   rememberGenericPrepareRecommendation,
@@ -262,6 +263,49 @@ describe("P6 G-D4/T-A4 generic PREPARE → authorize", () => {
     ).toBe("no_go");
   });

+  it("TEST-15 / LUMEN — explicit PREPARE refusal is never a prepare GO", () => {
+    const lumenRefusal =
+      "À partir de ce que nous avons défini ensemble, prépare une première proposition structurée comprenant :\n" +
+      "- Les objectifs pédagogiques.\n\n" +
+      "Je souhaite examiner cette proposition avant de valider définitivement le cadrage. " +
+      "Ne prépare pas de contrat d'exécution et ne lance aucune action technique pour le moment.";
+    expect(hasExplicitPrepareContractRefusal(lumenRefusal)).toBe(true);
+    expect(hasExplicitPrepareContractIntent(lumenRefusal)).toBe(false);
+    expect(
+      resolveChatFirstGenericPrepareGo({
+        projectId: "prj:lumen",
+        cycleInstanceId: "cyc:lumen",
+        text: lumenRefusal,
+      }),
+    ).toEqual({ kind: "no_go", reason: "explicit_prepare_refusal" });
+    expect(
+      hasExplicitPrepareContractRefusal(
+        "Ne prépare pas de contrat d'exécution.",
+      ),
+    ).toBe(true);
+    expect(
+      hasExplicitPrepareContractIntent(
+        "Ne prépare pas de contrat d'exécution.",
+      ),
+    ).toBe(false);
+    expect(
+      hasExplicitPrepareContractRefusal(
+        "Prépare une analyse, pas un contrat.",
+      ),
+    ).toBe(true);
+    expect(
+      hasExplicitPrepareContractIntent(
+        "Prépare une analyse, pas un contrat.",
+      ),
+    ).toBe(false);
+    expect(
+      hasExplicitPrepareContractIntent(
+        "Prépare le contrat d'exécution pour la mission LUMEN",
+      ),
+    ).toBe(true);
+    expect(isChatFirstPrepareAcceptGo({ text: lumenRefusal })).toBe(false);
+  });
+
   it("Q02 — sync assess without Product context is UNKNOWN (never false-implicit)", () => {
     const mat = assessMaterialityForGenericPrepare(baseAnalysis("demo"));
     expect(mat.materiality).toBe("unknown");

```

### a1b-replay.json (preuve)
```json
[
  {
    "turn_id": "pt:06a8beb5a7fc577a",
    "seq": 1,
    "content_len": 197,
    "presentation_present": true,
    "presentation_blocks": 5,
    "presentation_title": "Comparer les formats sans figer le choix",
    "composed_len": 2986,
    "structurallyAdmissibleForA1": true,
    "content_eq_composed": false,
    "durable_usedA1": false,
    "durable_content_len": 197,
    "render_mode": "plain",
    "render_usedA1": false,
    "render_contentFullyCovered": false,
    "render_presentation_null": true,
    "plain_preview": "Je te propose de poursuivre le cadrage en confrontant ces formats aux disponibilités du centre et aux besoins concrets des participants, puis de valider les gra",
    "composed_preview": "LUMEN · premières pistes de cadrage\n\nComparer les formats sans figer le choix\n\nCes comparaisons sont des repères de travail, pas encore des choix arrêtés. Les apprentissages dépendront aussi du niveau"
  },
  {
    "turn_id": "pt:b796154ad8685d64",
    "seq": 3,
    "content_len": 186,
    "presentation_present": true,
    "presentation_blocks": 5,
    "presentation_title": "Comparer les formats et leurs effets possibles",
    "composed_len": 4292,
    "structurallyAdmissibleForA1": true,
    "content_eq_composed": false,
    "durable_usedA1": false,
    "durable_content_len": 186,
    "render_mode": "plain",
    "render_usedA1": false,
    "render_contentFullyCovered": false,
    "render_presentation_null": true,
    "plain_preview": "Pour préciser le périmètre pédagogique, quels usages du quotidien voudrais-tu traiter en priorité — par exemple communiquer, chercher une information ou effectu",
    "composed_preview": "LUMEN · cadrage\n\nComparer les formats et leurs effets possibles\n\nLes éléments confirmés dans notre échange sont l’objectif d’initiation, le public adulte débutant, le contexte du centre social, quelqu"
  },
  {
    "turn_id": "pt:73bcbfb54b43dac7",
    "seq": 5,
    "content_len": 264,
    "presentation_present": true,
    "presentation_blocks": 5,
    "presentation_title": "Une progression par étapes paraît la plus adaptée",
    "composed_len": 4074,
    "structurallyAdmissibleForA1": true,
    "content_eq_composed": false,
    "durable_usedA1": false,
    "durable_content_len": 264,
    "render_mode": "plain",
    "render_usedA1": false,
    "render_contentFullyCovered": false,
    "render_presentation_null": true,
    "plain_preview": "Je te propose de vérifier ensuite si le centre peut garantir des créneaux récurrents, l’accès aux ordinateurs et un accompagnement entre les séances : ces éléme",
    "composed_preview": "LUMEN · comparaison des formats\n\nUne progression par étapes paraît la plus adaptée\n\nLes trois priorités — chercher de l’information, communiquer et effectuer des démarches — couvrent des gestes différ"
  },
  {
    "turn_id": "pt:01f15609efea28fe",
    "seq": 7,
    "content_len": 248,
    "presentation_present": true,
    "presentation_blocks": 6,
    "presentation_title": "Comparer les formats et choisir une progression réaliste",
    "composed_len": 5367,
    "structurallyAdmissibleForA1": true,
    "content_eq_composed": false,
    "durable_usedA1": false,
    "durable_content_len": 248,
    "render_mode": "plain",
    "render_usedA1": false,
    "render_contentFullyCovered": false,
    "render_presentation_null": true,
    "plain_preview": "Je te propose de garder le parcours de plusieurs séances comme format privilégié à l’étude, puis de vérifier avec le centre les créneaux, le nombre de postes et",
    "composed_preview": "LUMEN · proposition de cadrage\n\nComparer les formats et choisir une progression réaliste\n\nJe prends la séance hebdomadaire, le petit groupe et les quelques ordinateurs comme des hypothèses de travail,"
  },
  {
    "turn_id": "pt:6c1b7e274db42cab",
    "seq": 9,
    "content_len": 501,
    "presentation_present": false,
    "presentation_blocks": 0,
    "presentation_title": null,
    "composed_len": 0,
    "structurallyAdmissibleForA1": false,
    "content_eq_composed": false,
    "durable_usedA1": false,
    "durable_content_len": 501,
    "render_mode": "plain",
    "render_usedA1": false,
    "render_contentFullyCovered": false,
    "render_presentation_null": true,
    "plain_preview": "[Mode réel] J'ai préparé le contrat d'exécution correspondant à : Préparer une première proposition de cadrage pédagogique pour LUMEN, en distinguant les élémen",
    "composed_preview": ""
  }
]
```

## 17. Gates restants

1. Arbitrage Morris **CORR-A1B-01** (appliquer ou variante).
2. GO Delivery correctif A1/B + DET.
3. GO LIVE revalidation LUMEN A+B (protocole handoff précédent §21).
4. GO R24 PRR sync.
5. GO Git Integration — **pas** sur diagnostic seul.
6. TEST-15 couverture élargie.
7. Ne pas muter EC LUMEN / DBs campagne / :3020.

---

## 18. Git Review Index

| Path | Status |
|------|--------|
| prepareGenericExecutionContractDraft.ts | M (local A+B) |
| orchestrateTurn.ts | M |
| buildProjectSystemPrompt.ts | M |
| productExecutionAgentsTools.ts | M |
| p6.gD4….d0.test.ts | M |
| lumenCogPrepareCorr01.d0.test.ts | A |
| noraAdaptivePresentation.ts | **non modifié** (reco seulement) |
| ConversationSurface.tsx | **non modifié** |

---

## 19. Verdict consolidé

### Diagnostic ciblé
# A1/B REGRESSION CAUSE PROVEN

Mécanisme H2 démontré sur **quatre tours LUMEN** avec association **même turnId** : presentation admissible riche + narrative courte → fallback B → presentation masquée.

### Axes (chantier intégré)
- **AXE A :** PARTIAL (cause restitution PROVEN ; correctif non appliqué ; LIVE non revalidé)
- **AXE B :** correctif local DET ciblé conservé ; couverture à renforcer ; non clos
- **INTÉGRATION A+B :** OPEN
- **G-REAL :** NOT GRANTED
- **L3-S2 :** OPEN
- **Runtime v3 :** NON ADOPTED

**Anti-claims :** diagnostic ≠ READY FOR GIT INTEGRATION · DET ≠ LIVE · presentation persistée ≠ visible Pilote · H2 ≠ H1 · PREPARE corrigé DET ≠ REAL.

**STOP après Review Handoff.** Pas de second chantier. Pas de correction Product sans GO Morris.
