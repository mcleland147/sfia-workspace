# T-A7 — Arbitrage documentaire F03 / F11 / F13

| Champ | Valeur |
|-------|--------|
| **Gate consommé** | `GO FRAME DOCUMENTARY ARBITRATION FOR T-A7 F03 F11 AND F13 — PREPARE OPTIONS IMPACTS RISKS RECOMMENDATIONS AND MORRIS DECISION PACK — NO TECHNICAL PREPARATION — NO METHOD OR OPS1 MODIFICATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 19:09:51 CEST (+0200) |
| **Cycle / profil** | 2 — Cadrage (+3 · 6 · 9 · 10 · 15) · Critical |
| **Base** | `origin/main` @ `9011bb2c7e27a78979d310b628da48b9cfbd400f` |
| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration` |
| **Worktree local** | `sfia-workspace-t-a7-f03-f11-f13-arbitration` (hors path absolu) |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
| **F03 / F11 / F13** | `NOT DECIDED` |
| **W1-B / W1-D01…D05** | `DECIDED — ADOPTED BY MORRIS` (enregistrés PR #284) |
| **Push / PR** | **aucun** |

## Objectif

Préparer un arbitrage documentaire **complet** de D-T-A7-F03, D-T-A7-F11 et D-T-A7-F13 : options, impacts, risques, dettes, preuves, stops et recommandations — **sans** sélectionner à la place de Morris et **sans** autoriser une préparation technique.

## Périmètre

- options F03.1–.3 · F11.1–.4 · F13.1–.4 ;
- matrice croisée · recommandation `RECOMMENDED — NOT DECIDED` ;
- bulletin Morris D-T-A7-F03 / F11 / F13 (`MORRIS DECISION REQUIRED`).

## Hors périmètre

- décision automatique / présélection exécutoire ;
- modification `method/**` · OPS1 · MethodMode · runtime · modeled · workflow · tests · CI ;
- préparation technique · backlog delivery exécutable · implémentation ;
- ouverture T-A7 · delivery preparation / delivery / cutover ;
- fermeture B5 / R1 / R-M01 / HARD ;
- push projet · PR · merge.

## Sources

| Source | Rôle |
|--------|------|
| Template + trio `SFIA_CANONICAL_CORE_PATHS` | méthode d’exécution / loader |
| Pack `t-a7-legacy-cutover-framing` | P03–P11 · SC · bulletin F |
| Pack `t-a7-next-decision-step-framing` | Option C · calendrier F |
| Pack `t-a7-option-c-wave-1-legacy-scope-framing` | inventaires · W1-B · D01–D05 |
| PR #283 / #284 + handoffs | vérité Git intégrée |
| Code D1 / OPS1 / platform | MethodMode · path-policy · UI existantes |

## Décisions existantes (rappel)

| ID | Statut |
|----|--------|
| T-A7-D01…D05 · Option C | `DECIDED — ADOPTED BY MORRIS` |
| W1-B · W1-D01…D05 | `DECIDED — ADOPTED BY MORRIS` (D03 = futurs candidats) |
| W1-D05 | F03/F11/F13 = **gates** avant prep technique · **contenu** encore ouvert |

## Décisions ouvertes (ce pack)

| ID | Statut |
|----|--------|
| D-T-A7-F03 | `MORRIS DECISION REQUIRED` · contenu `NOT DECIDED` |
| D-T-A7-F11 | `MORRIS DECISION REQUIRED` · contenu `NOT DECIDED` |
| D-T-A7-F13 | `MORRIS DECISION REQUIRED` · contenu `NOT DECIDED` |

## Livrables

| Fichier | Rôle |
|---------|------|
| `01-source-truth-and-scope.md` | Base · preuves · in/out |
| `02-f03-entry-preconditions-options.md` | F03.1–.3 |
| `03-f11-api-ui-options.md` | F11.1–.4 |
| `04-f13-legacy-history-read-only-options.md` | F13.1–.4 |
| `05-cross-decision-consistency.md` | Matrice croisée |
| `06-recommendation-and-risks.md` | Recommandation non décisionnelle |
| `07-morris-decision-pack.md` | Bulletin D-T-A7-F03/F11/F13 |

## Recommandations (non décisionnelles)

| Domaine | Reco | Statut |
|---------|------|--------|
| F03 | **F03.3** (intermédiaire borné) | `RECOMMENDED — NOT DECIDED` |
| F11 | **F11.2** (API opérationnelle minimale, pas d’UI dédiée maintenant) | `RECOMMENDED — NOT DECIDED` |
| F13 | **F13.4** (hybrid archive Git + vue RO bornée) | `RECOMMENDED — NOT DECIDED` |
| Combinaison | F03.3 × F11.2 × F13.4 | `RECOMMENDED — NOT DECIDED` |

## Anti-claims

- arbitrage préparé ≠ décision prise
- recommandation ≠ validation Morris
- F03 décidée ultérieurement ≠ delivery autorisée
- F11 décidée ultérieurement ≠ API/UI implémentée
- F13 décidée ultérieurement ≠ isolation OPS1 implémentée
- read-only documenté ≠ ACL validée
- W1-B adopté ≠ préparation technique
- T-A7 framing ≠ T-A7 OPEN

## Gate candidat suivant

`GO DECIDE T-A7 F03 F11 AND F13 — SELECT OPTIONS FROM DOCUMENTARY ARBITRATION PACK — NO TECHNICAL PREPARATION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`

## Verdict

`T-A7 F03 F11 F13 DOCUMENTARY ARBITRATION FRAMED — ENTRY PRECONDITIONS API UI AND LEGACY HISTORY READ-ONLY OPTIONS DOCUMENTED — CROSS-DECISION CONSISTENCY ANALYZED — RECOMMENDATIONS PREPARED WITHOUT PRESELECTION — F03 F11 AND F13 REMAIN NOT DECIDED — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`
