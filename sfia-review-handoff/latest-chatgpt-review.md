# SFIA STUDIO — P6-MIN-09 — REAL DOCUMENTARY ANALYSIS FAILURE — ROOT CAUSE DIAGNOSTIC 01

**Review Pack level:** FULL
**Cycle type:** 9 — QA / validation
**SFIA profile:** CRITICAL
**Mode:** READ-ONLY / FORENSIC — zero product mutation, zero runtime change, zero REAL replay
**Campaign:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Scenario:** P6-MIN-09 — Guided Document Review
**Test:** T1 — Analyse du document P1
**Typologie v2.4:** N/A — QA / ROOT CAUSE DIAGNOSTIC

---

## A. Identification / horodatage Europe/Paris

| Champ | Valeur |
| --- | --- |
| Pack id | P6-MIN-09-REAL-DOC-FAILURE-RCD-01 |
| Horodatage pack | 2026-10-12 22:30:32 CEST (Europe/Paris) |
| Auteur diagnostic | Cursor Agent (forensic RO) |
| Workspace exécution diagnostic | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa` |
| Workspace code baseline | `/Users/morris/Projects/sfia-workspace-p6-campaign-continuation-qa` |
| Evidence Product/Session | `projects/sfia-studio/.sfia-exec/hqa01-rec01-requal/product/` (RO) |
| Artefacts bruts | `.tmp-sfia-review/p6-global-integrated-qa/p6-min09-real-documentary-failure-diag/raw/` |

---

## B. GO Morris

GO explicite pour diagnostic ROOT CAUSE STRICTEMENT DIAGNOSTIQUE :

- aucune modification runtime / budget / config / DB / Session ;
- aucun replay REAL ;
- aucun commit/push/PR/merge projet ;
- Review Pack FULL + Review Handoff L3 borné autorisés ;
- décisions correctives = Morris seulement après revue ChatGPT.

---

## C. Git Truth Check

### C.1 Workspace QA historique (code baseline)

**Path:** `/Users/morris/Projects/sfia-workspace-p6-campaign-continuation-qa`

| Check | Observé |
| --- | --- |
| `git remote -v` | `origin https://github.com/mcleland147/sfia-workspace.git` |
| `git rev-parse HEAD` | `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` |
| `git rev-parse origin/main` | `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` |
| `git branch --show-current` | *(vide — detached HEAD sur main tip)* |
| `git status --short` | *(vide)* |
| `git diff --name-status` | *(vide)* |
| `git diff --cached --name-status` | *(vide)* |

**Baseline attendue:** `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` — **MATCH**.

### C.2 Workspace documentaire / evidence (rec01)

**Path:** `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa`

| Check | Observé |
| --- | --- |
| `git remote -v` | `origin https://github.com/mcleland147/sfia-workspace.git` |
| `git rev-parse HEAD` | `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` |
| `git rev-parse origin/main` | `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` |
| `git branch --show-current` | `docs/pr577-post-merge-documentary-closure` |
| Modifications locales | 7 fichiers `production-runtime-reference/**` (DOC-PR577-POSTMERGE-SYNC — **préservés, non touchés**) + `.tmp-sfia-review/chatgpt-review.md` (pack temporaire autorisé) |

**Anomalie matérielle Git:** aucune. STOP non déclenché.

---

## D. Sources

### D.1 Doctrine / roadmap / Product / P6 / CKC / process (lus ou résolus depuis Git)

| Domaine | Chemins résolus |
| --- | --- |
| Build Doctrine | `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` |
| Roadmap | `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` |
| Product Completion C1 | `projects/sfia-studio/product-completion/01-product-completion-cadrage.md` |
| Doctrine v3 | `sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md` ; `31-doctrine-package-and-source-resolution.md` ; `32-living-project-state-and-dynamic-trajectory.md` ; `33-epistemology-provenance-and-contradiction-model.md` ; `34-agent-capabilities-reversibility-and-execution-governance.md` ; `35-artifact-evidence-debt-and-controlled-learning.md` ; `37-studio-v3-foundations-and-consolidation-decision-pack.md` |
| P6 | `projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md` |
| GDR | Product Simplification P1 §12.6 ; P2 §17 (document P1 path ci-dessous) |
| CKC | `projects/sfia-studio/sfia-v3-framing/ckc/09-qa-validation.md` |
| Processus | `prompts/templates/sfia-cycle-execution-template.md` ; `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` |

### D.2 Implémentation (baseline `d8ceb8ad`, workspace campaign)

- `app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts`
- `app/lib/nora-cognitive-runtime/controlledContinuation.ts`
- `app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts` (`softMaxTurnsHandler`, boucle P2)
- `app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts`
- `app/lib/nora-cognitive-runtime/readCoverage.ts`
- `app/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts` (CORR-D0-01 bootstrap Focused)
- `app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts` (texte P0 « La suite n'a pas pu… »)
- `app/lib/platform/repository/gitLocalReadAdapter.ts`
- `app/lib/platform/tools/types.ts` (`CT_MAX_TOOL_RESULT_CHARS = 12_000`)
- `app/lib/platform/tools/toolRouter.ts`
- `app/features/project-assistant/orchestrateTurn.ts` (status `incomplete` / `limitReached`)

### D.3 Preuves runtime T1 (RO)

- `nora-session.sqlite` — `session_items`, `pilot_transcript_turns`, `logical_product_turns`
- `oa-product.sqlite` — projet / cycle (audit cognitif **absent**)
- raw: `t1-session-forensics.json`, `pilot-transcript-index.tsv`, `grounding-refs.json`

---

## E. Convergence

Aligné Build Doctrine / P6 :

- P0 honesty : `limitReached` → Product `incomplete` (pas `ok`) — **observé** (message stock + surface « Analyse inachevée »).
- P1 adaptive maxTurns : Routine 5 / Focused 8 / Deep·HA 10 ; ceiling **10** (pas 12 experimental).
- P2 controlled continuation : segments de 5, multi-segment si mission > 5 ; soft handler **uniquement** au plafond mission.
- R22 OpenAI-native-first : continuation via `MaxTurnsExceededError.state` — pas de moteur documentaire parallèle.
- Non-claims conservés : Runtime v3 non adopté ; GDR END-TO-END non prouvé ; P6 GLOBAL non PASS.

---

## F. Baseline

| Item | Valeur |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` |
| Code SHA | `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` |
| Document P1 | `projects/sfia-studio/product-simplification/01-chat-first-product-simplification-cadrage.md` |
| Taille P1 (fs) | **1664 lignes**, **128 902 caractères** |
| Limite outil | `CT_MAX_TOOL_RESULT_CHARS = 12_000` |

---

## G. Run REAL identifié

| Identifiant | Valeur | Confiance |
| --- | --- | --- |
| projectId | `prj:e66fd58c-03f6-41df-90c8-4ae267926212` | CONFIRMED (DB) |
| title | Simplification des interactions avec l’IA | CONFIRMED |
| cycleInstanceId | `cyc:trj-255a8418ee8a735f23738c46` | CONFIRMED |
| cycle type / profile | `cyc:framing` / `Standard` | CONFIRMED |
| logicalTurnId | `ltu:fe4526f3e425b133a8187433f2b23d6f` | CONFIRMED |
| LTU status / created | `accepted` / `2026-10-12T19:32:25.736Z` | CONFIRMED |
| transcript user/assistant | `2026-10-12T19:32:53.693Z` / `.694Z` | CONFIRMED |
| session_key | `f1-default` | CONFIRMED |
| correlationId (cognitif) | — | **OBSERVABILITY GAP** (absent des `oa_audit_events` pour ce turn) |
| runId / providerResponseId | — | **OBSERVABILITY GAP** |
| model / reasoning effort | — | **OBSERVABILITY GAP** (non persisté Product/Session pour T1) |
| adaptive strategyClass persisted | — | **OBSERVABILITY GAP** |
| P2 segmentsExecuted persisted | — | **OBSERVABILITY GAP** |

**Demande utilisateur (transcript, confirmée):**

> Nora, j'ai un document dans notre dépôt Git qui pourrait nous être utile pour ce projet :
> `projects/sfia-studio/product-simplification/01-chat-first-product-simplification-cadrage.md`
> Tu peux le consulter et m'en faire une synthèse de ce que tu en retiens ?

**Réponse Product visible:**

```
Model-turn budget reached (maxTurns).

La suite n'a pas pu être déterminée de manière fiable à partir de cette sortie.
```

**Qualification FAKE/REAL:** REAL observé (Studio → Nora → Git → OpenAI). Nouveaux appels REAL ce diagnostic : **ZERO**.

---

## H. Chronologie observée

Session items pour le projet (T1 commence après seq 5 ; lectures à partir de seq 6/7).

| Ordre | Kind | Détail |
| --- | --- | --- |
| — | CONTEXT | seq 0–5 : grounding + 2 tours conversationnels antérieurs (non GDR) |
| 1 | REASONING | seq 6 |
| 2 | TOOL CALL | seq 7 `git_local_read_file` path seul (impl. L1–fin) |
| 3 | TOOL RESULT | seq 8 — summary `L1-1664/1664 (12013 chars) hasMore` |
| 4 | REASONING | seq 9 |
| 5 | TOOL CALL | seq 10 — L1–250 maxBytes 65536 |
| 6 | TOOL RESULT | seq 11 — `L1-250/1664 (12013 chars) hasMore` |
| 7 | REASONING | seq 12 |
| 8 | TOOL CALL | seq 13 — L250–500 |
| 9 | TOOL RESULT | seq 14 — hasMore |
| 10 | REASONING | seq 15 |
| 11 | TOOL CALL | seq 16 — L500–750 |
| 12 | TOOL RESULT | seq 17 — hasMore |
| 13 | REASONING | seq 18 |
| 14 | TOOL CALL | seq 19 — L750–950 |
| 15 | TOOL RESULT | seq 20 — hasMore |
| 16 | REASONING | seq 21 |
| 17 | TOOL CALL | seq 22 — L1000–1200 *(gap 951–999)* |
| 18 | TOOL RESULT | seq 23 — `(9881 chars) hasMore` |
| 19 | REASONING | seq 24 |
| 20 | TOOL CALL | seq 25 — L100–250 *(chevauchement)* |
| 21 | TOOL RESULT | seq 26 — hasMore |
| 22 | REASONING | seq 27 |
| 23 | TOOL CALL | seq 28 — L1400–1664 *(gap 1201–1399)* |
| 24 | TOOL RESULT | seq 29 — hasMore |
| 25 | PRODUCT OUT | stock maxTurns + phrase P0 — **aucune** `message` assistant de synthèse dans Session pour ce turn |

**Comptages Session T1 (forensics):**

| Compteur | Valeur |
| --- | --- |
| git_calls | 8 |
| git_results | 8 |
| reasoning_items (seq≥6) | 8 (+ contexte) |
| assistant synthesis messages (ce turn) | **0** |
| function_calls_total | 8 |

**Distinction critique:** 8 tool calls ≠ preuve automatique de 8 model turns. Pattern Session = **reasoning → call → result** répété 8×, compatible avec ~8 tours modèle outil-centrés, mais le compteur SDK `maxTurns` n’est **pas** persisté → ne pas affirmer le chiffre exact hors reconstruction.

---

## I. Modèle / effort / stratégie

| Élément | Statut |
| --- | --- |
| Model id | NOT OBSERVABLE (DB) |
| Reasoning effort | NOT OBSERVABLE (DB) |
| CognitiveStrategyClass **persistée** | NOT OBSERVABLE |
| Reconstruction déterministe du prompt T1 | `inferWorkloadHintsFromUserContent` → `{}` ; `decideCognitiveStrategy` → **Focused** (`bootstrap_focused_no_trusted_profile`, `demand:none`, `effort:low`) |

Simulation (baseline code, prompt exact T1, aucun appel provider) :

```json
{
  "hints": {},
  "strategyClass": "Focused",
  "reasonCodes": [
    "bootstrap_focused_no_trusted_profile",
    "demand:none",
    "effort:low"
  ],
  "budget": {
    "requestedMaxTurns": 8,
    "reasonCodes": ["strategy_base:Focused:8", "unknown_signals_no_inflate"],
    "ceiling": 10
  },
  "continuation": {
    "enable": true,
    "segmentMaxTurns": 5,
    "reasonCodes": ["multi_segment_mission"]
  }
}
```

**Fait code:** le mot « document » / une synthèse mono-fichier **n’élève pas** les hints (`adaptiveTurnBudget.ts` — commentaire explicite). La stratégie **ne connaît pas** le volume 1664 lignes / 129k chars avant de fixer le budget.

---

## J. Budget P1

| Question | Réponse forensic |
| --- | --- |
| requestedMaxTurns effectif persisté ? | **NON** — gap |
| Reconstruction la plus cohérente | Focused → **8** |
| Clamp campagne observé ? | Non prouvé pour T1 (pas de denial campaign dans transcript) |
| Budget adapté à la taille réelle du doc ? | **NON** (par design actuel) — budget = classe stratégique, pas taille fichier |
| Routine vs Focused | **Pas Routine** sous reconstruction CORR-D0-01 (all-unknown → Focused bootstrap) |

---

## K. Continuation P2

| Question | Verdict |
| --- | --- |
| P2 applicable si mission=8 ? | OUI (code : mission > segment 5 → `enable: true`) |
| Segments réellement exécutés | **NOT OBSERVABLE** (pas de télémétrie persistée) |
| Reconstruction plausible | Segment 1 `absoluteCap=5` → `MaxTurnsExceededError` + state → resume `absoluteCap=min(8,5+5)=8` → soft handler au plafond → stop |
| Soft handler | Uniquement quand `atMissionCeiling` (`runNoraAgentsTurn.ts` ~795–801) |
| `includeInHistory` soft stop | `false` — le stock message n’entre pas en historique Agent |
| Pourquoi mission inachevée si P2 actif ? | P2 ne **augmente pas** le plafond mission ; il découpe seulement l’atteinte de ce plafond. Avec mission=8 et 8 lectures sans texte final → épuisement. |

**Distinction:** continuation absente **REJECTED** comme seule explication (code l’active pour mission>5). Continuation défaillante **NOT OBSERVABLE**. Continuation nominale + budget insuffisant pour la stratégie de lecture **STRONGLY SUPPORTED**.

---

## L. Tool calls Git

Huit lectures sur **le même** fichier P1 :

| # | Args demandés | Summary retourné | hasMore |
| --- | --- | --- | --- |
| 1 | path only | L1-1664/1664 (12013 chars) | true |
| 2 | L1-250, maxBytes 65536 | L1-250/1664 (12013 chars) | true |
| 3 | L250-500 | L250-500/1664 (12013 chars) | true |
| 4 | L500-750 | L500-750/1664 (12013 chars) | true |
| 5 | L750-950 | L750-950/1664 (12013 chars) | true |
| 6 | L1000-1200 | L1000-1200/1664 (9881 chars) | true |
| 7 | L100-250 | L100-250/1664 (12013 chars) | true |
| 8 | L1400-1664 | L1400-1664/1664 (12013 chars) | true |

CallIds (non secrets): `call_1AnIqWlC1CnXmWhI6bdh3bO9` … `call_w3ZUS3NGeSsjb5eNHepU6275` (voir forensics JSON).

---

## M. Troncature et plages réellement reçues

### M.1 Contrat adaptateur

`GitLocalReadAdapter.readFile()` : `startLine`/`endLine` décrivent la plage **demandée** ; `content` peut être tronqué (`CT_MAX_TOOL_RESULT_CHARS` / bytes). **L1-1664 + hasMore ≠ lecture complète.**

### M.2 Écart demandé vs reçu

- Lecture #1 : demande implicite document entier → summary annonce L1-1664 mais **hasMore** + ~12k chars → portion initiale seulement.
- Lectures #2–#5, #7–#8 : plages 200–250 lignes demandées ; plusieurs summary encore `(12013 chars) hasMore` → même sous-plage peut dépasser 12k chars.
- Contenu Session stocké observé (parse `data.content`) : souvent ~5913 chars + marqueur `…[truncated]` ; une plage à 9881 chars / 201 lignes.
  **Réserve:** taille Session ≠ preuve exacte du payload modèle (possible compaction Memory B). Le summary outil reste la preuve structurelle de troncature.

### M.3 Couverture approximative (sans invention de lignes exactes finales)

- Gaps de plages demandées : **951–999**, **1201–1399**.
- Chevauchements : L1–250 vs L100–250 ; L1–1664 redondant avec le début.
- Somme des contenus Session observés ≈ **51 272** chars (avec redondances) vs document **128 902** chars.
- **Aucune preuve** de couverture intégrale des 1664 lignes côté modèle.

---

## N. Couverture documentaire (`readCoverage.ts`)

| Capacité | Observation code |
| --- | --- |
| Parse summary `Lstart-end/total … hasMore` | OUI |
| FULL seulement si L1–total **et** pas hasMore/truncation | OUI (CORR-01A) |
| Agrégation cumulative d’unions de plages | **NON** — `aggregateReadCoverage` agrège des **statuts** (`partial` / `mixed_partial`), pas une carte de lignes couvertes |
| Grounding T1 | `coverage: "partial"` @ `2026-10-12T19:32:53.689Z` — **honête** |

**Risques:**

- Fausse complétude : **mitigée** si hasMore respecté (ici partiel déclaré).
- Fausse partialité « trop faible » : possible si unions réelles couvrent presque tout mais overall reste `partial`/`mixed_partial` sans carte — **écart de représentation**, pas cause du stop maxTurns.
- Fausse partialité « trop forte » : L1-1664 hasMore correctement partial — OK.

---

## O. Transformation de la sortie

### O.1 Mécanisme du message stock

```653:663:projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
  const softMaxTurnsHandler = ({
    runData,
  }: {
    runData: { newItems: unknown[] };
  }) => {
    budget.limitReached = true;
    const lastText = extractTextFromRunItems(runData.newItems);
    return {
      finalOutput: lastText.trim() || "Model-turn budget reached (maxTurns).",
      includeInHistory: false,
    };
  };
```

`extractTextFromRunItems` ne lit que `message_output_item`. Or Session T1 ne contient **aucun** message assistant de synthèse après les lectures — uniquement reasoning + tools.

### O.2 Phrase Product P0

Ajoutée via `noraProductTurnOutputType.ts` :

> La suite n'a pas pu être déterminée de manière fiable à partir de cette sortie.

### O.3 Pourquoi aucune synthèse partielle ?

| Hypothèse locale | Verdict |
| --- | --- |
| Synthèse produite puis perdue au changement de segment | **NOT OBSERVABLE / improbable** — aucun `message` assistant dans Session pour T1 |
| Synthèse non finalisée (brouillon reasoning only) | POSSIBLE (reasoning items présents, non extraits comme texte Product) |
| Aucune synthèse produite par le modèle avant stop | **STRONGLY SUPPORTED** |
| Transformation Product a écrasé un texte utile | **REJECTED** pour écrasement — le stock remplace un vide ; P0 append est honnête |
| Matérialisation décision illégitime | **REJECTED** — status incomplete / limitReached (P0) |

---

## P. Comparaison historique

### P.1 Projet antérieur (même DB evidence)

`prj:9ef1be1a-67bf-423c-b46b-ab3f33db3666` (2026-10-11) :

| Tour | Résultat |
| --- | --- |
| Première analyse | Synthèse **partielle** produite (« Consultation réelle, mais partielle ») — lectures **étroites** (ex. L514–545), pas balayage L1–1664 |
| Analyse croisée ultérieure | Synthèse partielle produite |
| Tours suivants | **Même** échec `Model-turn budget reached (maxTurns).` (14:55Z, 15:02Z) |

### P.2 Qualification régression

| Classe | Verdict |
| --- | --- |
| 1. Régression fonctionnelle démontrée (même prompt / même config / avant-après) | **NON** — prompts, stratégies de lecture et projets différents |
| 2. Différence configuration / routing | POSSIBLE (non instrumenté) |
| 3. Variance fournisseur/modèle | POSSIBLE (model NOT OBSERVABLE) |
| 4. Différence de contexte | **STRONGLY SUPPORTED** — historique = lectures ciblées + synthèse partielle ; T1 = balayage large tronqué |
| 5. Comparaison insuffisamment documentée | OUI pour claim « régression racine » |

**REGRESSION SUSPECTED** conserve son statut Pilote ; **pas** transformée en régression technique démontrée. Le mode d’échec maxTurns **existait déjà** le 2026-10-11 sur des lectures documentaires lourdes.

---

## Q. Matrice des hypothèses

| ID | Hypothèse | Preuve favorable | Preuve contradictoire | Manquant | Verdict |
| --- | --- | --- | --- | --- | --- |
| H1 | Mauvaise qualification cognitive initiale | Prompt → hints `{}` ; CORR-D0-01 → Focused ; pas de signal taille doc | Focused ≠ Routine « sous-classé » au sens Strict Routine | strategyClass persistée | **STRONGLY SUPPORTED** (reconstruction) |
| H2 | Budget P1 insuffisant pour le workload | 8 lectures sans synthèse ; doc ~129k / tool 12k ; ceiling 10 | Budget 8 > Routine 5 ; échec aussi possible à 10 | maxTurns réel persisté | **STRONGLY SUPPORTED** comme facteur, **pas** cause isolée |
| H3 | Stratégie de lecture inefficace | Chevauchements, gaps, 1ère lecture « full » tronquée, relecture L100–250 | — | intention modèle | **CONFIRMED** (comportement observé) |
| H4 | Troncature outil mal exploitée | Toutes hasMore ; maxBytes 65536 ignoré face à cap chars ; pas de downshift de fenêtre | Adapter signale hasMore honnêtement | payload exact modèle | **STRONGLY SUPPORTED** |
| H5 | Couverture mal représentée | Agrégat statuts sans union de plages | Grounding partial correct ; pas de FULL frauduleux | — | **POSSIBLE** (aggravant représentation), **REJECTED** comme cause du stop |
| H6 | Continuation P2 absente ou inefficace | Si absente, stop à 5 ; on voit 8 lectures | Code active P2 pour mission>5 | segmentsExecuted | Absente: **REJECTED** (si recon. budget=8). Inefficace vs mission: **STRONGLY SUPPORTED** (P2 ≠ plus de budget) |
| H7 | Sortie partielle perdue / non produite | 0 message assistant synthèse ; soft handler → stock | — | contenu reasoning non Product | **CONFIRMED** (non produite comme texte Product) |
| H8 | Différence modèle / environnement | Gap model id | Même baseline SHA ; même limite 12k | model/effort | **NOT OBSERVABLE** |
| H9 | Régression vs version précédente | Pilote + échec T1 | Succès historique partiel sous autre stratégie de lecture ; échecs maxTurns déjà le 11/10 | run pair comparable | **POSSIBLE** / **non démontrée** |

---

## R. Cause racine / facteurs aggravants

### Cause racine (mécanisme proximal) — CONFIRMED

Le tour Product s’arrête sur **épuisement du budget model-turn** alors que le modèle n’a émis **aucun** `message_output_item` extractible ; `softMaxTurnsHandler` / fallback MaxTurns produisent le texte stock ; P0 annonce l’inachèvement. **Aucune synthèse n’est restituée parce qu’aucune synthèse textuelle Product n’a été produite avant le stop.**

### Cause systémique (chaîne) — STRONGLY SUPPORTED

Conjonction :

1. **H1** — qualification Focused/bootstrap sans connaissance du volume documentaire ;
2. **H2** — mission maxTurns (reconstruit 8, ceiling 10) insuffisant face à une lecture tronquée multi-passes d’un doc ~129k ;
3. **H3+H4** — stratégie de lecture large + plafond 12k → nombreuses passes redondantes / incomplètes ;
4. **H6** — P2 ne fait qu’atteindre le même plafond mission ;
5. **H7** — absence de consolidation textuelle intermédiaire avant le dernier turn.

**H2 n’est pas déclarée cause racine isolée.**

### Symptômes

- Huit lectures Git visibles UI/Session
- Message maxTurns
- Surface « Analyse inachevée »

### Défauts d’observabilité

Voir §S.

---

## S. Défauts d’observabilité

| Gap | Impact |
| --- | --- |
| Pas d’audit Product pour strategyClass / requestedMaxTurns / segmentsExecuted / stopReason / model / effort / usage T1 | Empêche CONFIRMED sur H1/H2/H6/H8 |
| correlationId cognitif absent de `oa_audit_events` pour T1 | Traçabilité run incomplète |
| Compteur SDK maxTurns non persisté | 8 tool calls ≠ preuve chiffrée de 8 model turns |
| EventSink tool payload brut non archivé hors Session | Écart summary 12013 vs content Session ~5.9k |
| Reasoning non exposé Product | Impossible de prouver une « synthèse latente » |

**Qualification:** preuves T1 suffisantes pour le mécanisme proximal ; chaîne budgétaire = reconstruction code + indices Session.

---

## T. Qualification de sévérité

| Dimension | Niveau |
| --- | --- |
| Sévérité Product | **CRITICAL** — capacité GDR P1 REAL échoue sans sortie utile |
| Impact P6-MIN-09 | GDR **NOT PROVEN** ; blocage scénario humain T1 |
| Impact campagne P6 | Pas de P6 GLOBAL PASS ; dette cognitive documentaire |
| Données / autorité | Pas de décision Product illégitime observée (P0 OK) |
| FinOps | Coût REAL consommé (8 lectures + reasoning) pour sortie nulle — gaspillage |

---

## U. Options correctives (SANS IMPLÉMENTATION)

### Option A — Lot correctif unique borné (recommandé pour revue)

Fermer ensemble les gaps cohérents **sans** nouveau moteur documentaire :

1. **Observabilité minimale** : persister (EventSink/Session meta) `strategyClass`, `requestedMaxTurns`, `segmentsExecuted`, `stopReason`, `model`, `effort`, `limitReached` — pour fermer H1/H2/H6.
2. **Hints / stratégie documentaire mono-fichier** : reconnaître synthèse documentaire Git mono-path + taille connue post-`stat`/`read` initiale comme signal `toolDependency`/`sourceBreadth` **ou** Deep — **sans** prompt utilisateur artificiel.
3. **Exploitation native de hasMore** : guidance / policy pour fenêtres plus petites que 12k ; interdire de re-demander L1–total après hasMore ; privilégier TOC/sections si déjà dans portion lue.
4. **Restitution partielle honnête** : si budget proche de l’épuisement et portions lues, forcer un tour de consolidation textuelle (ou extraire un résumé partiel déclaré) — **réutiliser** P0 partial disclosure / readCoverage, pas un moteur parallèle.
5. **P2** : ne pas augmenter aveuglément maxTurns ; évaluer seulement si mission Deep/HA (10) + consolidation suffit ; tout ceiling >10 = **MORRIS DECISION** (FinOps / doctrine ceiling).

### Option B — STOP architecture

Si la correction exige persistence durable de RunState cross-process ou un vrai planificateur documentaire structurant → **STOP — MORRIS DECISION REQUIRED**.

### Interdits rappelés

- augmentation aveugle de maxTurns ;
- prompt utilisateur artificiellement détaillé comme « fix » ;
- nouveau moteur documentaire parallèle ;
- POC gratuit ;
- promotion REAL sans preuve.

### Preuve de fermeture

Replay **humain** borné post-fix sur le **même** prompt T1 + asserts : synthèse partielle déclarée OU incomplete avec coverage honnête **et** télémétrie budget/segments ; tests D0 non-régression (Focused bootstrap, softMaxTurns sans texte, hasMore≠full).

---

## V. Impacts / risques / FinOps

| Impact | Détail |
| --- | --- |
| Product | Pilote voit échec GDR ; confiance cognitive |
| Campagne | P6-MIN-09 bloqué ; HQA GDR NOT PROVEN |
| FinOps | Turns/outils brûlés sans valeur ; risque si on monte ceiling sans stratégie |
| Régression | Risque de « fix » budget-only qui masque H3/H4 |
| Sécurité / secrets | Aucun secret exposé dans ce pack |

---

## W. Réserves / dettes / exit

- DOC-PR577 7 fichiers locaux préservés — hors scope.
- Model/effort/segments T1 non confirmés DB.
- Pas de claim GDR PASS / END-TO-END / Runtime v3 / P6 GLOBAL PASS.
- Pas de claim régression racine démontrée.
- Exit diagnostic : pack + handoff ; **aucune** correction exécutée.

---

## X. Décisions Morris requises

1. **GO / NO-GO** lot correctif Option A (observabilité + hints doc + politique hasMore + consolidation partielle) — mono-lot.
2. Si ceiling maxTurns ou architecture RunState durable envisagée → décision FinOps / architecture explicite.
3. Autoriser ou non un **seul** retest REAL T1 après correctif (hors ce cycle).
4. Statut campagne : maintenir GDR NOT PROVEN jusqu’à preuve.

---

## Y. Verdict

### ROOT CAUSE PARTIALLY QUALIFIED — ADDITIONAL EVIDENCE REQUIRED

**Confiance haute** sur le mécanisme proximal (budget épuisé + aucune synthèse textuelle → message stock + incomplete).
**Confiance forte** sur la chaîne H1+H2+H3+H4+H6+H7 sous reconstruction code + Session.
**Evidence manquante** pour figer strategyClass/segments/model comme faits runtime persistés.

Sous-verdict opérationnel pour la suite : **TARGETED CORRECTION RECOMMENDED (Option A)** — après GO Morris, sans implémentation dans ce cycle.

---

## Z. Instruction ChatGPT

Lire indépendamment le Review Handoff distant sur `sfia/review-handoff` (`sfia-review-handoff/latest-chatgpt-review.md`).

Contrôler : Git Truth, identification run REAL T1, chronologie, P1 adaptive (Focused/8 reconstruit vs gap), P2 (enable vs segments non observés), troncature 12k / hasMore, couverture (partial, pas d’union), absence de synthèse, comparaison historique 2026-10-11, matrice H1–H9, réserves, verdict.

Qualifier ensuite un éventuel **lot correctif unique et borné** (Option A).
**Aucune implémentation avant nouvelle décision Morris.**

---

## Annexes techniques (extraits)

### A1 — Soft maxTurns + extract

Voir `runNoraAgentsTurn.ts` softMaxTurnsHandler et `extractTextFromRunItems` (message_output_item only).

### A2 — Hints documentaires

```74:81:projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
  // Require multi-doc / documentary-analysis cues — bare "document" alone must NOT elevate.
  if (
    /documentary|multi[- ]?source|plusieurs\s+sources|guided\s+document|analys(?:e|er)\s+(?:plusieurs|les)\s+documents|cross[- ]?read|lire\s+(?:plusieurs|les)\s+fichiers|plusieurs\s+documents|documents\s+du\s+projet|compar(?:e|er)\s+(?:les\s+)?sources/i.test(
      c,
    )
  ) {
    hints.sourceBreadth = "high";
    hints.toolDependency = "high";
  }
```

### A3 — CT_MAX

`export const CT_MAX_TOOL_RESULT_CHARS = 12_000;` — `app/lib/platform/tools/types.ts`

### A4 — Preuves brutes locales

- `.tmp-sfia-review/p6-global-integrated-qa/p6-min09-real-documentary-failure-diag/raw/t1-session-forensics.json`
- `.tmp-sfia-review/p6-global-integrated-qa/p6-min09-real-documentary-failure-diag/raw/pilot-transcript-index.tsv`

### A5 — Git final attendu (post-diagnostic, avant handoff publish)

- Projet : **aucune** mutation source `app/**` / convergence / product-* / framing / prompts / scripts.
- DOC-PR577 7 fichiers **inchangés** par ce diagnostic.
- Seul pack temporaire + handoff distant autorisés.

---

FIN DU REVIEW PACK FULL — P6-MIN-09-REAL-DOC-FAILURE-RCD-01
