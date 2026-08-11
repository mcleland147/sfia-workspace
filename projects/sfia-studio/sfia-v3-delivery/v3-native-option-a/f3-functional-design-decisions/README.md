# F3 — Functional Design Decisions

| Champ | Valeur |
|-------|--------|
| **Gate Morris consommé** | `GO RECORD MORRIS F3 FUNCTIONAL DESIGN DECISIONS — F3-D01…D11 AS VALIDATED — NO DELIVERY` |
| **Demande Morris** | `ok go` — contextualisée : accepter les recommandations F3-D01…D11 **exactement** telles que validées au Cycle 9 |
| **Date/heure enregistrement (CEST)** | 2026-08-11 09:46:51 CEST (+0200) |
| **Date/heure enregistrement (UTC)** | 2026-08-11 07:46:51 UTC |
| **Cycle / profil** | 15 — Capitalisation / REX (enregistrement de décisions produit) · Capitalization · Standard · DOC |
| **Critical** | `NON` |
| **Base** | `origin/main` @ `09bfbb2db06b71cabf3369a5dccab0f7f1d7502a` |
| **Branche locale** | `framing/sfia-studio-f3-functional-design-decisions` |
| **Worktree décision** | `…/finops-t2-main/.tmp-sfia-review/worktrees/f3-functional-decisions` |
| **Source validation** | Cycle 9 Review Handoff tip `27da1baf4ea5a2591161ef6377d5a090c4afbed6` · blob `818eeea789b98bba061b0c8c70f8feda4a3fd7dd` · verdict **VALIDATED WITH RESERVES** |
| **Statut** | `MORRIS F3-D01…D11 DECISIONS RECORDED — NO DELIVERY AUTHORIZED` |
| **Push / PR / merge projet** | **aucun** |
| **Commit projet** | **aucun** (fichier créé, non commité) |

## 1. Objectif

Enregistrer documentairement, de façon unique et bornée, les décisions Morris **F3-D01…D11** issues de la conception fonctionnelle F3 (Cycle 2) et **validées** par le Cycle 9, en les transformant en :

`DECIDED — ADOPTED BY MORRIS`

sans autoriser Delivery, sans ouvrir F08, sans fermer de réserve, sans lancer Cursor REAL, sans modifier `app/**`, sans commit/push/PR/merge projet.

## 2. Source truth

| Source | Rôle |
|--------|------|
| Cycle 9 FULL Review Pack | formulations validées F3-D01…D11 (11/11 **SUPPORTED\*** · 0 adoptées avant ce GO) · trajectoire corrigée · anti-claims |
| Cycle 2 F3 design pack | questions / recommandations d’origine (devenues décisions ici) |
| `a5-2-reservations-authority-atomicity-framing/README.md` | **pattern** d’enregistrement seulement (gate · tableau · effets · non-effets · anti-claims · next gate) — pas de multi-fichiers |
| `t-a7-technical-readiness-framing/README.md` + `06-holds-and-stop-conditions.md` | statuts courants HARD / B5 / R1 / R-M01 · T-A7 |
| `t-a7-next-decision-step-framing/03-open-reserves-and-gates.md` | matrice réserves + F08 contenu **NOT DECIDED** (calendrier avant delivery) |
| Méthode §4.15 + carte synthétique cycle 15 | Capitalisation : faits ≠ recommandations ≠ décisions |

### Statuts courants retenus (au moment de l’enregistrement)

| Sujet | Status retenu | Notes |
|-------|---------------|-------|
| **HARD (R-T-A3-1 / R-T-A3-2)** | `OPEN HARD` · reduced ≠ closed | readiness README · Cycle 9 §24 |
| **B5** | `OPEN` · **STOP BEFORE DELIVERY** | A52-D01 · holds |
| **R1** | `OPEN` | atomicité |
| **R-M01** | `OPEN` | claims readiness |
| **IAM** | `NOT_SELECTED` | |
| **Product persistence** | `NOT_SELECTED` | local bounded ≠ product SELECTED |
| **Delivery / Delivery preparation** | `NOT AUTHORIZED` | |
| **F08 content** | `NOT DECIDED` | timing adopté avant delivery (T-A7-D05=.3) — **non consommé** |
| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` | source la plus récente : technical-readiness README (≠ fully open · ≠ delivery) ; headers historiques `NOT OPEN` non isolés |

## 3. Contexte F3

Chaîne produit cible (contrat fonctionnel) :

F2 approved proposal → préparation exécution native → confirmation exacte → ExecutionContract (T-A4) → sélection agent (T-A5) → ExecutionAttempt → Cursor borné → Evidence / ReviewBundle (T-A6) → réinjection Project Workspace / Assistant → recommandation du prochain gate humain.

Cycle 9 : **FUNCTIONAL CONTRACT VALIDATED** · **LIVE CURSOR DELIVERY BLOCKED** · trajectoire inbound Option A step « bounded native fixture integration » **sur-revendique** Delivery avant F08/B5 (**MAJOR** trajectory) — corrigée en gouvernance pré-delivery avant tout `app/**`.

Ce gate **enregistre** les décisions D01…D11 ; il **n’autorise pas** Delivery ni Cursor REAL.

## 4. Décisions Morris F3-D01…D11

| ID | Decision | Meaning | Status | Dependencies / reserves | Non-effects |
|----|----------|---------|--------|-------------------------|-------------|
| **F3-D01** | **YES** | Un GO F2 autorise uniquement **PREPARE** / préparation d’un ExecutionContract. Il n’autorise **JAMAIS** le lancement d’une ExecutionAttempt ou de Cursor. | `DECIDED — ADOPTED BY MORRIS` | F2 `executionPerformed:false` · AC-F3-01 | ≠ launch · ≠ Delivery |
| **F3-D02** | **YES** | Le premier pilote Cursor **REAL** F3 exige une confirmation Morris explicite liée à l’identité exacte du contrat d’exécution. | `DECIDED — ADOPTED BY MORRIS` | modeled requiredAuthority · Critical path · R-T-A3-1 | ne ferme pas R-T-A3-1 · ne rend pas l’autorité actuelle durable |
| **F3-D03** | **YES** | Chaîne d’autorité F3 = fondations natives **T-A4 ExecutionContract → T-A5 ExecutionAttempt → T-A6 Evidence / ReviewBundle**. Aucun second moteur. `oa/execution-run` reste **PARALLEL** / hors autorité F3. | `DECIDED — ADOPTED BY MORRIS` | audit execution-run PARALLEL (Cycle 9) | ≠ wiring Assistant déjà fait · ≠ merge execution-run dans F3 |
| **F3-D04** | **YES** | Mécanismes OPS1 utiles : **EXTRACT / ADAPT / REIMPLEMENT_BEHIND_NATIVE_PORT**. Aucune dépendance produit F3 vers `@/lib/ops1` ou `@/features/ops1`. | `DECIDED — ADOPTED BY MORRIS` | harvest OPS1 · anti-coupling | ≠ OPS1 retired · ≠ imports produit OPS1 |
| **F3-D05** | **YES** | Premier agent candidat F3 = Cursor. `selectedAgentRef` explicite. **REAL / FIXTURE** explicitement distingués. **Aucun fallback silencieux REAL → FIXTURE**. | `DECIDED — ADOPTED BY MORRIS` | adapters · AC-F3-08…10 | **Cursor REAL n’est PAS autorisé maintenant** |
| **F3-D06** | **YES** | F3 s’arrête avant toute action Git distante ou publication projet. Aucun automatisme **commit / push / PR / merge** dans le contrat d’exécution F3. Ces opérations restent des gates séparés. | `DECIDED — ADOPTED BY MORRIS` | AC-F3-14…17 | ≠ autorisation de ces gates |
| **F3-D07** | **NO / CONDITIONAL** | L’autorité **process-local** actuelle est **INSUFFISANTE** pour autoriser Cursor REAL. Un restart ne doit jamais reconstruire une autorité d’exécution à partir de la conversation. **Fail closed** obligatoire. | `DECIDED — ADOPTED BY MORRIS` | `proposalStore` · R-Process-Local · HARD · IAM | aucune persistence produit sélectionnée · aucun IAM sélectionné · aucune architecture durable décidée par ce gate |
| **F3-D08** | **YES** | Aucun auto-retry par défaut. Un retry crée un nouvel ExecutionAttempt traçable. | `DECIDED — ADOPTED BY MORRIS` | `retryExecutionAttempt` · AC-F3-18/19 | ≠ politique de retry automatique |
| **F3-D09** | **YES** | Technical success ≠ Evidence completeness ≠ Functional validation ≠ Morris READY. **T-A6** reste autorité de complétude / ReviewBundle / claims. | `DECIDED — ADOPTED BY MORRIS` | T-A6 · AC-F3-20/21 · R-M01 | ≠ T-A6 COMPLETE déclaré |
| **F3-D10** | **YES** | Après réinjection, Studio/Nora peut uniquement **RECOMMANDER** le prochain gate. La recommandation ne consomme pas de gate, ne crée pas de décision Morris, ne relance pas une exécution. | `DECIDED — ADOPTED BY MORRIS` | `RecommendNextGate` · AC-F3-26/27 | ≠ consommation du next gate candidat |
| **F3-D11** | **BLOCKED / NO-GO REAL NOW** | Delivery Cursor **REAL** ne peut **PAS** être ouvert maintenant. Prérequis HARD / B5 / autorité durable / wiring / gates applicables restent à traiter selon la trajectoire validée. | `DECIDED — ADOPTED BY MORRIS` | HARD · B5 · wiring · F08 timing | **F3-D11 ≠ autorisation Delivery fixture** |

**Synthèse :** 11/11 `DECIDED — ADOPTED BY MORRIS` · formulations = Cycle 9 validated · **aucune** réinterprétation.

## 5. Effets

- Contrat fonctionnel F3 désormais **décidé** (decision set F3-D01…D11 fermé).
- F2→F3 = **prepare-only** (D01).
- Confirmation Morris exacte requise pour pilote REAL (D02) — sans lever HARD.
- Chaîne native **T-A4 / T-A5 / T-A6** confirmée ; **execution-run exclu** de l’autorité F3 (D03).
- OPS1 = **harvest-only** derrière ports natifs ; zéro couplage produit (D04).
- Cursor explicite ; REAL/FIXTURE étiquetés ; **no silent fallback** (D05).
- **No auto Git writes** (commit/push/PR/merge) dans F3 (D06).
- Process-local déclaré **insuffisant** pour REAL ; fail closed post-restart (D07).
- **No auto-retry** ; retry = nouvel Attempt (D08).
- **Evidence separation** : Attempt ≠ Evidence ≠ validation ≠ Morris READY ; T-A6 owns completeness (D09).
- Next gate = **recommendation only** / non-executive (D10).
- **REAL currently blocked** / NO-GO REAL NOW (D11).

## 6. Non-effets

- F3 **non implémenté** · Assistant→T-A4/5/6 **NOT WIRED** par ce gate.
- **Delivery** `NOT AUTHORIZED`.
- **Fixture Delivery** `NOT AUTHORIZED` (toute mutation `app/**` = Delivery ; B5 STOP).
- **Cursor REAL** `NOT AUTHORIZED` · adapter real **MISSING**.
- **F08** contenu `NOT DECIDED` · **non consommé**.
- **B5** `OPEN` · STOP BEFORE DELIVERY.
- **R1** `OPEN`.
- **R-T-A3-1 / R-T-A3-2** restent `OPEN HARD`.
- **R-M01** `OPEN`.
- **T-A6 COMPLETE** `NOT DECLARED`.
- Product **persistence** `NOT_SELECTED` · **IAM** `NOT_SELECTED`.
- **OPS1** non supprimé.
- **F4** non ouvert.
- Aucune vague T-A7 / Option C ouverte par ce gate.
- Aucun commit / push / PR / merge projet.

## 7. Réserves transportées

| ID | Current status | Notes |
|----|----------------|-------|
| **R-T-A3-1** | `OPEN HARD` | Confirm fail-closed ; bloque REAL |
| **R-T-A3-2** | `OPEN HARD` | Option B residual ; bloque autorité durable |
| **B5** | `OPEN` · STOP BEFORE DELIVERY | bloque Delivery |
| **R1** | `OPEN` | Project↔Cycle atomicity |
| **R-M01** | `OPEN` | claims readiness |
| **R-Process-Local** | ACCEPTED LIMITATION | insuffisant REAL (D07) |
| **R-F2-SEMANTIC-CALIBRATION** | transported (amont) | n’empêche pas design/décision F3 |
| **IAM** | `NOT_SELECTED` | |
| **Product persistence** | `NOT_SELECTED` | |
| **F08 content** | `NOT DECIDED` | calendrier avant delivery — contenu ouvert |

**HARD not downgraded.** Aucune réserve fermée par cet enregistrement.

## 8. Trajectoire recommandée

**Classement :** `RECOMMENDED TRAJECTORY — NOT A NEW MORRIS DECISION`

Séquence Cycle 9 corrigée (non consommée ici, hors éléments déjà dans D01…D11) :

1. Décisions F3-D01…D11 (**fait par ce gate**).
2. Gouvernance pré-Delivery **F08 / B5** (documentaire).
3. Seulement ensuite éventuel **GO Delivery fixture** dédié (scope borné · toujours sans Cursor REAL).
4. QA fixture.
5. Prérequis REAL (HARD R-T-A3-1/2, autorité durable, B5 acceptation/bornage, wiring).
6. Pilote Cursor **REAL** sous GO Morris distinct.

## 9. Anti-claims

Cet enregistrement **ne signifie PAS** :

- F3 implemented · F3 delivery ready · fixture delivery authorized ;
- Cursor real authorized · Cursor REAL READY ;
- B5 closed · HARD closed · R1 closed · R-M01 closed ;
- F08 decided (contenu) ;
- IAM selected · product persistence selected ;
- T-A6 complete · Option A complete ;
- OPS1 retired · F4 open · production ready ;
- T-A7 fully open / vague ouverte ;
- next gate candidat consommé.

`DECIDED — ADOPTED BY MORRIS` ≠ `CLOSED` / `SATISFIED` / `DELIVERY AUTHORIZED`.

## 10. Gate candidat suivant

```
GO FRAME PRE-DELIVERY GOVERNANCE FOR F3 NATIVE FIXTURE PATH — INCLUDE F08 TIMING/CONTENT OPTIONS AND B5 STOP POLICY — NO APP/** DELIVERY — NO REAL CURSOR — NO HARD CLOSURE IMPLIED
```

**Statut :** `NOT CONSUMED`

## 11. Verdict

```
F3 FUNCTIONAL DESIGN DECISIONS RECORDED —
F3-D01 THROUGH F3-D11 ADOPTED BY MORRIS EXACTLY AS VALIDATED —
FUNCTIONAL CONTRACT DECISION SET CLOSED —
F2 GO REMAINS PREPARE-ONLY —
T-A4 / T-A5 / T-A6 CONFIRMED AS F3 AUTHORITY CHAIN —
OA/EXECUTION-RUN EXCLUDED FROM F3 AUTHORITY —
OPS1 REMAINS HARVEST-ONLY —
PROCESS-LOCAL AUTHORITY DECLARED INSUFFICIENT FOR REAL —
REAL CURSOR REMAINS BLOCKED —
F08 NOT DECIDED —
B5 / R1 / HARD RESERVES REMAIN OPEN —
NO DELIVERY AUTHORIZED —
ONE DOCUMENT CREATED —
NO PROJECT COMMIT / PUSH / PR / MERGE —
READY FOR CHATGPT REVIEW
```
