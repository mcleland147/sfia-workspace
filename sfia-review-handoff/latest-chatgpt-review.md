# ChatGPT Review Pack — SFIA Studio Option B Post-Merge Sync — Cycle 13 PR Readiness Standard

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-19 15:13:40 CEST |
| **Cycle** | 13 — PR readiness (post-merge sync Cycle 14) |
| **Profil** | Standard — sync documentaire factuelle uniquement |
| **Décision Morris** | GO commit + push + draft PR — sync post-merge Cycle 14 |
| **Branche** | `capitalization/sfia-studio-poc-option-b-post-merge` |
| **HEAD avant** | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
| **HEAD après** | `a28245aa10a2e45e2eff9864d06bd566a262d478` |
| **origin/main** | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
| **merge-base** | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
| **Draft PR** | [#222](https://github.com/mcleland147/sfia-workspace/pull/222) |
| **PR architecture #221** | **MERGED** @ `40f8ebe…` |
| **Niveau** | **full** |
| **Merge** | **NON AUTORISÉ** |

---

## 1. Local Git Truth Check

| Check | Résultat |
|-------|----------|
| Branche | `capitalization/sfia-studio-poc-option-b-post-merge` PASS |
| HEAD initial = origin/main | `40f8ebecf41608756e4e8184c860b3b966b786b3` PASS |
| PR #221 MERGED | PASS |
| Staged initial | vide PASS |
| 8M exactes ; 0A ; 0D | PASS |
| Remote post-merge initiale | absente PASS |
| Hors `app/**` | PASS |

**Verdict Truth Check :** PASS

---

## 2. Handoff Cycle 14 consulté

| Champ | Valeur |
|-------|--------|
| SHA | `ac5912f3d2dec83e53ccedcd58cd227bd1e78cf3` |
| Cycle | 14 Post-merge Standard |
| Contenu | Option B intégrée ; G7 INTÉGRÉ ; G8/G9 FERMÉS ; POC non lancé ; 8 docs ; diff complet ; commit/push/PR **non** autorisés alors |
| Verdict | POST-MERGE COMPLETE WITH RESERVES |

**Handoff Cycle 14 :** COMPLET

---

## 3. Sources

- Template SFIA cycle execution
- Huit docs `projects/sfia-studio/`
- Handoff Cycle 14 (`ac5912f…`)
- PR #221 (MERGED)

---

## 4. Fichiers (8 modifications)

README · 07 · 20 · 21 · 22 · 23 · 24 · 25

+146 / −117 — aucune création — aucune suppression

---

## 5. Architecture / décisions (inchangées)

| Élément | Statut |
|---------|--------|
| Option B minimale | RETENUE / INTÉGRÉE |
| Studio | Cockpit |
| Adaptateur | Fin, sans autorité |
| Harness | Autonome |
| Option A | Test / diagnostic / dégradé |
| Option C | Écartée 1er POC |
| ARCH-POC-CAND-01…12 | Inchangées (12 : GO versionnement CONSOMMÉ) |
| Réserves | Conservées |
| POC-G7 | VALIDÉ AVEC RÉSERVES — INTÉGRÉ |
| POC-G8 / G9 | **FERMÉS** |
| POC | **NON LANCÉ** |
| Versionnement archi #221 | CONSOMMÉ / INTÉGRÉ |

---

## 6. Recherche textuelle qualifiée

Anti-dérive PASS — aucune formulation interdite de statut courant ; historiques `b882892` (#220) / D-VAL-10 conservés.

---

## 7. Validations avant staging

| Check | Résultat |
|-------|----------|
| `git diff --check` | PASS |
| 8M | PASS |
| Aucun staged initial | PASS |
| Aligné handoff Cycle 14 | PASS |

---

## 8. Staged / commit diff

```
a28245a docs(sfia-studio): sync Option B architecture post-merge
 .../07-product-trajectory-and-decision-pack.md     | 55 ++++++++++---------
 .../sfia-studio/20-poc-orchestration-framing.md    | 21 ++++----
 ...21-poc-orchestration-scenario-and-boundaries.md |  4 +-
 .../22-poc-orchestration-decision-pack.md          | 24 +++++----
 .../23-poc-orchestration-technical-architecture.md | 24 +++++----
 ...tration-contracts-security-and-observability.md |  9 ++--
 ...poc-orchestration-architecture-decision-pack.md | 63 ++++++++++++----------
 projects/sfia-studio/README.md                     | 63 ++++++++++++----------
 8 files changed, 146 insertions(+), 117 deletions(-)

a28245a docs(sfia-studio): sync Option B architecture post-merge
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/20-poc-orchestration-framing.md
M	projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
M	projects/sfia-studio/22-poc-orchestration-decision-pack.md
M	projects/sfia-studio/23-poc-orchestration-technical-architecture.md
M	projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
M	projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
M	projects/sfia-studio/README.md
```

### Diff complet du commit

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 8f02a8d..a28d0fc 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,15 +4,15 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 9 — QA corrective Option B ; historique archi POC-G7 conservé |
-| **Profil** | Critical |
+| **Cycle** | 14 — Post-merge après PR #221 ; historique Option B conservé |
+| **Profil** | Standard |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | POC-G7 **VALIDÉ AVEC RÉSERVES** ; Option B minimale ; docs **non versionnés** ; POC **non lancé** ; G8/G9 **fermés** |
+| **Statut** | POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** ; Option B minimale **INTÉGRÉE** ; POC **non lancé** ; G8/G9 **fermés** |
 | **Décisions** | ARCH-POC-CAND-01…12 selon Morris ; POC-CAND cadrage inchangés |
 | **Destinataire** | Morris |
-| **Source de vérité** | `origin/main` @ `b882892…` ; branche locale `architecture/sfia-studio-poc-orchestration` |
+| **Source de vérité** | `origin/main` @ `40f8ebe…` ; branche locale `capitalization/sfia-studio-poc-option-b-post-merge` |
 
-> Architecture **Option B minimale** validée avec réserves. Harness autonome + Studio cockpit + adaptateur fin. Versionnement = GO distinct. POC-G8 **fermé**. POC **non lancé**.
+> Architecture **Option B minimale** validée avec réserves et **intégrée** (PR #221 / `40f8ebe…`). Harness autonome + Studio cockpit + adaptateur fin. Versionnement **consommé**. POC-G8 **fermé**. POC **non lancé**.
 
 ---
 
@@ -34,11 +34,13 @@
 | Branche Delivery | **Supprimée** (local + remote) |
 | Gate Morris Delivery P0 | **Aucune restante** |
 | App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
-| Prochaine orientation | GO **versionnement** archi Option B — **non accordé** ; POC-G8 après intégration — **fermé** |
-| Architecture POC | **Option B minimale** — POC-G7 **VALIDÉ AVEC RÉSERVES** ; non versionnée |
-| Sync post-merge | **MERGED** — PR #220 / `b882892…` |
+| Prochaine orientation | Ouverture éventuelle **POC-G8** — **FERMÉE** ; sync post-merge locale non versionnée ici |
+| Architecture POC | **Option B minimale** — POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** (PR #221 / `40f8ebe…`) |
+| Sync post-merge cadrage | **MERGED** — PR #220 / `b882892…` |
+| Architecture merge | **MERGED** — PR #221 / `40f8ebe…` |
 | POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
-| Branche architecture | `architecture/sfia-studio-poc-orchestration` (**locale**) |
+| Branche architecture | historique — remote **supprimée** après #221 |
+| Branche post-merge | `capitalization/sfia-studio-poc-option-b-post-merge` (**locale**) |
 
 > Option B ≠ Option C. Harness autonome. Studio cockpit. Adaptateur sans autorité. POC non lancé.
 
@@ -118,7 +120,8 @@ Pré-cadrage
   → capitalisation P0 (PR #218)
   → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219) — POC non lancé
   → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
-  → architecture POC ciblée             ← POC-G7 **VALIDÉ AVEC RÉSERVES** — Option B minimale — **non versionnée**
+  → architecture POC ciblée             ← POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B — PR #221 / `40f8ebe…`
+  → post-merge sync architecture        ← cycle 14 locale — non versionnée ici
   → backlog POC borné                   ← POC-G8 fermé
   → delivery POC                        ← POC-G9 fermé
   → décision Morris : abandon / itération / préparation MVP
@@ -126,14 +129,14 @@ Pré-cadrage
 
 ### Précisions
 
-- Architecture : **Option B minimale** (validée avec réserves).
+- Architecture : **Option B minimale** (validée avec réserves — **intégrée**).
 - Option A : mode test / dégradé harness.
 - Option C : écartée 1er POC.
 - POC-G8/G9 : **fermés**. POC : **non lancé**.
 
 ### Orientation
 
-> POC-G7 validé avec réserves. Versionnement requis. Backlog non ouvert.
+> POC-G7 validé avec réserves — **intégré** (PR #221). Versionnement **consommé**. Backlog non ouvert. POC-G8 **fermé**.
 
 ---
 
@@ -209,8 +212,8 @@ Pré-cadrage
 |-------|---------|
 | Statut | **VALIDÉ + INTÉGRÉ** — PR #219 / `be713c45…` — docs `20`/`21`/`22` |
 | Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
-| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES** ; POC-G8/G9 **FERMÉS** |
-| Architecture | Option B minimale (`23`–`25`) — non versionnée |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** ; POC-G8/G9 **FERMÉS** |
+| Architecture | Option B minimale (`23`–`25`) — **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
 | Ne lance pas | POC ; backlog ; delivery ; MVP |
 
 ### 4.7 Sécurité (bornée)
@@ -258,13 +261,15 @@ Pré-cadrage
 | D-NEXT-15 | GO cadrage POC orchestration | Morris | **Consommée** — cadrage **VALIDÉ** 2026-07-19 |
 | D-NEXT-16 | Validation POC-CAND / POC-G1…G6 | Morris | **FAIT** — 2026-07-19 |
 | D-NEXT-17 | POC-G10 versionnement cadrage | Morris | **CONSOMMÉ** — PR #219 **MERGED** (`be713c45…`) |
-| D-NEXT-18 | Architecture / delivery POC | Morris | **Fermée** — POC-G7…G9 non validés |
-| D-NEXT-19 | GO versionnement sync post-merge | Morris | **CONSOMMÉ** — PR #220 **MERGED** (`b882892…`) |
+| D-NEXT-18 | Architecture / delivery POC | Morris | Architecture **intégrée** (#221) ; delivery POC **fermé** (POC-G9) |
+| D-NEXT-19 | GO versionnement sync post-merge cadrage | Morris | **CONSOMMÉ** — PR #220 **MERGED** (`b882892…`) |
 | D-NEXT-20 | GO merge PR #220 | Morris | **CONSOMMÉ** — **MERGED** |
 | D-NEXT-21 | Ouverture POC-G7 (instruction) | Morris | **Consommée** → validation avec réserves |
 | D-NEXT-22 | Validation architecture / ARCH-POC-CAND / Option B | Morris | **FAIT** — POC-G7 **VALIDÉ AVEC RÉSERVES** |
-| D-NEXT-23 | GO versionnement docs `23`–`25` | Morris | **Requis** — **non accordé** |
+| D-NEXT-23 | GO versionnement docs `23`–`25` | Morris | **CONSOMMÉ** — PR #221 **MERGED** (`40f8ebe…`) |
 | D-NEXT-24 | Ouverture POC-G8 | Morris | **Fermée** |
+| D-NEXT-25 | GO merge PR #221 | Morris | **CONSOMMÉ** — **MERGED** |
+| D-NEXT-26 | Versionnement sync post-merge archi (cycle 14) | Morris | **Non autorisé** ici |
 
 ---
 
@@ -320,14 +325,14 @@ Clôture formelle architecture fonctionnelle **non prononcée**. MVP / industria
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage POC : **validé + intégré**. POC-G7…G9 : **fermés**.
+Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage POC : **validé + intégré**. Architecture Option B : **intégrée** (#221). POC-G8/G9 : **fermés**.
 
 ---
 
 ## 8. Questions Morris
 
-1. Autorisez-vous le **versionnement** (commit / push / draft PR) de l’architecture Option B ?
-2. Après intégration : ouvrez-vous **POC-G8** ?
+1. Ouvrez-vous **POC-G8** (backlog borné) ?
+2. Autorisez-vous le versionnement de la **sync post-merge** (cycle 14) ?
 3. Clôture formelle AF (séparée) ?
 
 ---
@@ -336,9 +341,9 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Critère | État |
 |---------|------|
-| Architecture Option B | **VALIDÉE AVEC RÉSERVES** |
-| POC-G7 | **VALIDÉ AVEC RÉSERVES** |
-| Versionnement | **Non autorisé** |
+| Architecture Option B | **VALIDÉE AVEC RÉSERVES — INTÉGRÉE** |
+| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
+| Versionnement archi | **CONSOMMÉ** (PR #221) |
 | POC-G8…G9 | **Fermés** |
 | POC lancé | **Non** |
 
@@ -346,7 +351,7 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 ## 10. Verdict documentaire
 
-**Verdict :** `ARCHITECTURE POC OPTION B DOCUMENTED WITH RESERVES — POC-G7 VALIDATED WITH RESERVES — VERSIONING DECISION REQUIRED`
+**Verdict :** `POST-MERGE COMPLETE WITH RESERVES — OPTION B ARCHITECTURE INTEGRATED — POC-G8 DECISION REQUIRED`
 
 ---
 
@@ -358,4 +363,4 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 | [20](./20-poc-orchestration-framing.md) · [21](./21-poc-orchestration-scenario-and-boundaries.md) · [22](./22-poc-orchestration-decision-pack.md) | Cadrage |
 | [11](./11-functional-architecture.md) | AF-Option C |
 
-*Option B minimale — POC-G7 VALIDÉ AVEC RÉSERVES — non versionné — POC NON LANCÉ.*
+*Option B minimale — POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ (PR #221) — POC-G8 FERMÉ — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/20-poc-orchestration-framing.md b/projects/sfia-studio/20-poc-orchestration-framing.md
index 35f09db..5069af6 100644
--- a/projects/sfia-studio/20-poc-orchestration-framing.md
+++ b/projects/sfia-studio/20-poc-orchestration-framing.md
@@ -8,15 +8,15 @@
 | **Profil** | Critical |
 | **Typologie** | DOC / EVOL (cadrage) |
 | **Baseline méthode** | SFIA v2.6 — Option C méthode (**inchangée**) |
-| **Branche** | Historique cadrage/sync ; architecture : `architecture/sfia-studio-poc-orchestration` (**locale**) |
-| **Base / main** | `origin/main` @ `b882892d79709acd0637d0df872c16bbe16d7ed1` (PR #220 MERGED) |
-| **Statut document** | **VALIDÉ + INTÉGRÉ** — cycle cadrage **terminé** ; sync #220 **MERGED** |
+| **Branche** | Historique cadrage/sync ; archi MERGED #221 (remote **supprimée**) ; post-merge `capitalization/sfia-studio-poc-option-b-post-merge` (**locale**) |
+| **Base / main** | `origin/main` @ `40f8ebecf41608756e4e8184c860b3b966b786b3` (PR #221 MERGED) |
+| **Statut document** | **VALIDÉ + INTÉGRÉ** — cycle cadrage **terminé** ; sync #220 **MERGED** ; archi #221 **MERGED** |
 | **POC** | **Non lancé** |
 | **MVP / industrialisation** | **Non engagés** |
-| **Architecture Runtime** | **Non validée** — voir candidats `23`–`25` |
+| **Architecture Runtime** | **Non validée** — voir candidats `23`–`25` (ouverts) |
 | **Destinataire** | Morris |
 
-> Cadrage **validé** (#219). Sync #220 **MERGED**. POC-G7 **VALIDÉ AVEC RÉSERVES** — **Option B minimale** (`23`–`25`, non versionnés). POC-G8 / G9 **fermés**. POC **non lancé**.
+> Cadrage **validé** (#219). Sync #220 **MERGED**. Architecture **Option B minimale** **INTÉGRÉE** (PR #221 / `40f8ebe…`). POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**. POC-G8 / G9 **fermés**. POC **non lancé**.
 
 ### Décision Morris — validation du cadrage (2026-07-19)
 
@@ -26,9 +26,9 @@
 | POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
 | POC-CAND-09 / POC-G10 | **CONSOMMÉE** |
 | POC-G1…G6 | **VALIDÉS** |
-| POC-G7 | **VALIDÉ AVEC RÉSERVES** — Option B minimale |
+| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B minimale (PR #221) |
 | POC-G8…G9 | **FERMÉS** |
-| Intégration | #219 + #220 @ `b882892…` |
+| Intégration | #219 + #220 @ `b882892…` ; #221 @ `40f8ebe…` |
 
 ---
 
@@ -299,13 +299,14 @@ Pas de plateforme de supervision industrialisée.
 |-------------|--------|
 | POC-G1…G6 | **VALIDÉS** |
 | POC-G10 | **VALIDÉ / CONSOMMÉ / INTÉGRÉ** (PR #219) |
-| POC-G7 | **VALIDÉ AVEC RÉSERVES** — Option B minimale (`23`–`25`) — **non versionnée** |
+| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B minimale (`23`–`25`) — PR #221 / `40f8ebe…` |
 | POC-G8…G9 | **FERMÉS** |
 | Sync #220 | **MERGED** |
+| Archi #221 | **MERGED** |
 
 **Architecture :** Option B minimale (Studio cockpit + adaptateur + harness autonome). Option A = test/dégradé. Option C écartée (1er POC).
 
-**Prochaine décision :** GO versionnement — **non accordé**.
+**Prochaine décision :** ouverture éventuelle **POC-G8** — **FERMÉE** (GO Morris distinct).
 
 ---
 
@@ -322,4 +323,4 @@ Pas de plateforme de supervision industrialisée.
 
 ---
 
-*Cadrage INTÉGRÉ — POC-G7 VALIDÉ AVEC RÉSERVES (Option B) — non versionné — POC NON LANCÉ.*
+*Cadrage INTÉGRÉ — POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ (Option B, PR #221) — POC-G8 FERMÉ — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
index 7952d1f..24b0d76 100644
--- a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
+++ b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
@@ -217,7 +217,7 @@ Le modèle d’état et le scénario restent un **contrat de cadrage**, pas une
 | Gate d’exécution | Avant Cursor | GO / CORRIGER / STOP |
 | Gate de clôture preuve | Après pack | CLOSING / ITERATE / ABANDON |
 
-Les gates POC-G1…G6 **VALIDÉS**. POC-G10 **CONSOMMÉ**. POC-G7 **VALIDÉ AVEC RÉSERVES** (Option B minimale). POC-G8…G9 **FERMÉS**.
+Les gates POC-G1…G6 **VALIDÉS**. POC-G10 **CONSOMMÉ**. POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** (Option B minimale, PR #221). POC-G8…G9 **FERMÉS**.
 
 UI Studio versus harness : **Option B minimale** — Studio cockpit + adaptateur fin ; harness autonome (cœur). Option A conservée pour tests hors UI.
 
@@ -296,4 +296,4 @@ L’UI P0 **n’est pas** l’orchestrateur. Branchement réel UI↔orchestrateu
 
 ---
 
-*Scénario S1 VALIDÉ — NON EXÉCUTÉ — Option B minimale (POC-G7 VALIDÉ AVEC RÉSERVES) — POC NON LANCÉ.*
+*Scénario S1 VALIDÉ — NON EXÉCUTÉ — Option B minimale (POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ, PR #221) — POC-G8 FERMÉ — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/22-poc-orchestration-decision-pack.md b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
index 3117010..53ec7a5 100644
--- a/projects/sfia-studio/22-poc-orchestration-decision-pack.md
+++ b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
@@ -3,21 +3,23 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `22-poc-orchestration-decision-pack.md` |
-| **Statut** | Cadrage **INTÉGRÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES** (Option B minimale) |
+| **Statut** | Cadrage **INTÉGRÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** (Option B minimale) |
 | **POC** | **Non lancé** |
 | **POC-G8 / G9** | **FERMÉS** |
+| **PR architecture** | [#221](https://github.com/mcleland147/sfia-workspace/pull/221) **MERGED** |
+| **Merge commit** | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
 
-> Cadrage #219 + sync #220 **MERGED**. Architecture **Option B minimale** validée avec réserves (`23`–`25`, non versionnés). Harness autonome. Studio cockpit. Adaptateur sans autorité. Option C écartée (1er POC).
+> Cadrage #219 + sync #220 **MERGED**. Architecture **Option B minimale** validée avec réserves et **intégrée** (`23`–`25` via PR #221 / `40f8ebe…`). Harness autonome. Studio cockpit. Adaptateur sans autorité. Option C écartée (1er POC).
 
 ---
 
 ## 1. Observations
 
 1. Cadrage / sync intégrés.
-2. POC-G7 **VALIDÉ AVEC RÉSERVES** — Option B minimale.
+2. POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B minimale.
 3. Option A = test/dégradé.
 4. POC-G8/G9 fermés ; POC non lancé.
-5. Versionnement archi = GO distinct.
+5. Versionnement archi **CONSOMMÉ / INTÉGRÉ** (PR #221).
 
 ---
 
@@ -33,9 +35,10 @@
 |------|--------|
 | POC-G1…G6 | **VALIDÉS** |
 | POC-G10 | **CONSOMMÉ** |
-| **POC-G7** | **VALIDÉ AVEC RÉSERVES** |
+| **POC-G7** | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | POC-G8 | **FERMÉ** |
 | POC-G9 | **FERMÉ** |
+| Versionnement archi | **CONSOMMÉ / INTÉGRÉ** (`40f8ebe…`) |
 
 ARCH-POC-CAND-* : voir `25`.
 
@@ -44,17 +47,18 @@ ARCH-POC-CAND-* : voir `25`.
 ## 10. Séquence
 
 ```text
-POC-G7 VALIDÉ AVEC RÉSERVES (Option B)
-  → GO versionnement (requis — non accordé)
-  → POC-G8 (FERMÉ) → POC-G9 (FERMÉ) → POC (NON LANCÉ)
+POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ (Option B, PR #221 / 40f8ebe…)
+  → versionnement CONSOMMÉ
+  → éventuelle ouverture POC-G8 (FERMÉE — GO Morris requis)
+  → POC-G9 (FERMÉ) → POC (NON LANCÉ)
 ```
 
 ---
 
 ## 11. Verdict
 
-**`ARCHITECTURE POC OPTION B DOCUMENTED WITH RESERVES — POC-G7 VALIDATED WITH RESERVES — VERSIONING DECISION REQUIRED`**
+**`POST-MERGE COMPLETE WITH RESERVES — OPTION B ARCHITECTURE INTEGRATED — POC-G8 DECISION REQUIRED`**
 
 ---
 
-*Option B minimale — G7 validé avec réserves — non versionné — POC NON LANCÉ.*
+*Option B minimale — G7 validé avec réserves — INTÉGRÉ (PR #221) — POC-G8 FERMÉ — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/23-poc-orchestration-technical-architecture.md b/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
index d15e1b7..fe3b8cd 100644
--- a/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
+++ b/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
@@ -4,17 +4,17 @@
 |------------|--------|
 | **Projet** | SFIA Studio |
 | **Document** | `23-poc-orchestration-technical-architecture.md` |
-| **Cycle** | 6 — Architecture technique (+ correction QA Option B) |
-| **Profil** | Critical |
-| **Branche** | `architecture/sfia-studio-poc-orchestration` (**locale**, non poussée) |
-| **Base** | `origin/main` @ `b882892d79709acd0637d0df872c16bbe16d7ed1` |
-| **Statut** | **VALIDÉE AVEC RÉSERVES** (POC-G7) — documentée, **non versionnée** |
+| **Cycle** | 6 — Architecture technique (+ correction QA Option B + post-merge #221) |
+| **Profil** | Critical (architecture) / Standard (post-merge sync) |
+| **Branche historique** | `architecture/sfia-studio-poc-orchestration` — **MERGED** puis **supprimée** (remote) |
+| **Base / main** | `origin/main` @ `40f8ebecf41608756e4e8184c860b3b966b786b3` |
+| **Statut** | **VALIDÉE AVEC RÉSERVES — INTÉGRÉE** (POC-G7) — PR [#221](https://github.com/mcleland147/sfia-workspace/pull/221) **MERGED** |
 | **Décision architecture** | **Option B minimale** — Studio cockpit + adaptateur fin + harness autonome |
 | **POC-G8 / G9** | **FERMÉS** |
 | **POC** | **Non lancé** |
 | **Runtime / techno / protocole** | **Ouverts** (non figés) |
 
-> Architecture **validée avec réserves** par Morris. Versionnement = GO distinct. POC-G8 **non ouvert**. Aucun code.
+> Architecture **validée avec réserves** et **intégrée** sur `main` (PR #221 / `40f8ebe…`). Versionnement **consommé**. POC-G8 **non ouvert**. Aucun code.
 
 ---
 
@@ -23,10 +23,11 @@
 | Fait | Référence |
 |------|-----------|
 | Cadrage POC | PR #219 / `be713c45…` |
-| Sync post-merge | PR #220 / `b882892…` **MERGED** |
+| Sync post-merge cadrage | PR #220 / `b882892…` **MERGED** |
+| Architecture Option B | PR #221 / `40f8ebe…` **MERGED** |
 | AF-Option C | Studio ≠ orchestrateur — **VALIDÉE** |
 | App P0 | Next fixtures ; Git/Cursor simulés ; pas d’orch. |
-| Décision Morris | **Option B minimale** retenue ; POC-G7 **VALIDÉ AVEC RÉSERVES** |
+| Décision Morris | **Option B minimale** retenue ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 
 Objectif S1 inchangé : boucle DOC read-only gouvernée, rejet hors allowlist, writes distantes absentes, L0 Morris, Git = vérité.
 
@@ -182,8 +183,9 @@ Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans c
 | Harness autonome | **Conservé** (cœur) |
 | Option A | Mode test / dégradé **VALIDÉ** |
 | Option C | **Écartée** premier POC |
-| POC-G7 | **VALIDÉ AVEC RÉSERVES** |
-| Versionnement docs | **NON AUTORISÉ** ici |
+| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
+| Versionnement docs | **CONSOMMÉ / INTÉGRÉ** (PR #221 / `40f8ebe…`) |
+| Prochaine décision | Ouverture éventuelle **POC-G8** — **FERMÉE** |
 
 ---
 
@@ -200,4 +202,4 @@ Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans c
 
 ---
 
-*Architecture POC Option B minimale — POC-G7 VALIDÉ AVEC RÉSERVES — non versionnée — POC NON LANCÉ — Morris décide (versionnement).*
+*Architecture POC Option B minimale — POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉE (PR #221 / 40f8ebe…) — POC-G8 FERMÉ — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md b/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
index f5a7640..213870e 100644
--- a/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
+++ b/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
@@ -3,12 +3,13 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `24-poc-orchestration-contracts-security-and-observability.md` |
-| **Statut** | **VALIDÉ AVEC RÉSERVE** (mise à jour Option B) — POC-G7 |
+| **Statut** | **VALIDÉ AVEC RÉSERVE — INTÉGRÉ** (Option B) — POC-G7 ; PR #221 **MERGED** |
 | **Architecture** | Option B minimale (Studio + adaptateur + harness) |
 | **POC** | **Non lancé** |
-| **Base** | `main` @ `b882892…` |
+| **Base** | `main` @ `40f8ebe…` |
+| **Merge commit** | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
 
-> Contrats conceptuels. Harness revalide tout. Adaptateur sans autorité.
+> Contrats conceptuels. Harness revalide tout. Adaptateur sans autorité. Document **intégré** sur `main` via PR #221.
 
 ---
 
@@ -165,4 +166,4 @@ Effets locaux `proofDir` seulement ; remote inchangé.
 
 ---
 
-*Contrats Option B — POC-G7 VALIDÉ AVEC RÉSERVES — Morris décide (versionnement).*
+*Contrats Option B — POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ (PR #221 / 40f8ebe…) — POC-G8 FERMÉ — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md b/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
index 964182f..638b003 100644
--- a/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
+++ b/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
@@ -3,25 +3,28 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `25-poc-orchestration-architecture-decision-pack.md` |
-| **Cycle** | 6 Architecture + QA corrective Option B |
-| **Profil** | Critical |
-| **Statut** | POC-G7 **VALIDÉ AVEC RÉSERVES** — docs **non versionnés** |
+| **Cycle** | 6 Architecture + QA Option B + post-merge #221 |
+| **Profil** | Critical (architecture) / Standard (post-merge sync) |
+| **Statut** | POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | **Préfixe** | `ARCH-POC-CAND-*` (locaux ; ≠ D-VAL) |
-| **Architecture retenue** | **Option B minimale** |
+| **Architecture retenue** | **Option B minimale** — **INTÉGRÉE** |
 | **POC-G8 / G9** | **FERMÉS** |
 | **POC** | **Non lancé** |
-| **Base** | `main` @ `b882892…` |
+| **PR** | [#221](https://github.com/mcleland147/sfia-workspace/pull/221) **MERGED** |
+| **Merge commit** | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
+| **Base** | `main` @ `40f8ebe…` |
 
 ---
 
 ## 1. Observations
 
-1. #219/#220 MERGED.
+1. #219/#220 MERGED (cadrage + sync).
 2. Instruction POC-G7 produite puis **validée avec réserves** (Option B minimale).
 3. App P0 sans orch. ; pas d’API Cursor repo.
 4. AF-Option C : Studio / orch. séparés.
-5. Versionnement architecture **non autorisé** ici.
-6. POC-G8 **non ouvert** tant que docs non intégrés.
+5. Versionnement architecture **CONSOMMÉ / INTÉGRÉ** via PR #221 / `40f8ebe…`.
+6. Branche distante `architecture/sfia-studio-poc-orchestration` **supprimée** après merge.
+7. POC-G8 **non ouvert** — GO Morris distinct requis.
 
 ---
 
@@ -30,7 +33,7 @@
 | Option | Statut Morris |
 |--------|---------------|
 | **A** Harness autonome | Conservée — test / diagnostic / dégradé |
-| **B minimale** Studio + adaptateur + harness | **RETENUE / VALIDÉE** |
+| **B minimale** Studio + adaptateur + harness | **RETENUE / VALIDÉE / INTÉGRÉE** |
 | **C** Orch. dans app | **Écartée** premier POC |
 
 B = **extension** de A (cœur harness) — **pas** Option C.
@@ -64,9 +67,9 @@ B = **extension** de A (cœur harness) — **pas** Option C.
 | **09** | Modif `app/**` possible **au delivery uniquement**, minimale (cockpit/adaptateur/vues) ; orch. hors `app/**` | **VALIDÉE AVEC RÉSERVE** |
 | **10** | Après validation+intégration archi → prochaine porte = **POC-G8** | **VALIDÉE** |
 | **11** | Archi POC ≠ Runtime produit ; L4* plafond chemin | **VALIDÉE** |
-| **12** | Versionnement docs `23`–`25` = GO Morris distinct | **VALIDÉE** |
+| **12** | Versionnement docs `23`–`25` = GO Morris distinct | **VALIDÉE** — GO **CONSOMMÉ** (#221) |
 
-Aucun nouveau D-VAL.
+Aucun nouveau D-VAL. Aucune modification de fond des décisions ARCH-POC-CAND.
 
 ---
 
@@ -76,13 +79,13 @@ Aucun nouveau D-VAL.
 |------|--------|
 | POC-G1…G6 | **VALIDÉS** |
 | POC-G10 | **CONSOMMÉ** |
-| **POC-G7** | **VALIDÉ AVEC RÉSERVES** |
+| **POC-G7** | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | POC-G8 | **FERMÉ** |
 | POC-G9 | **FERMÉ** |
-| Versionnement archi | **NON AUTORISÉ** |
+| Versionnement archi | **CONSOMMÉ / INTÉGRÉ** (`40f8ebe…`) |
 | Delivery / lancement POC | **NON AUTORISÉ** |
 
-**≠ READY FOR BACKLOG** tant que docs non intégrés.
+**≠ READY FOR BACKLOG.** Intégration architecture ≠ ouverture backlog.
 
 ---
 
@@ -101,24 +104,27 @@ Aucun nouveau D-VAL.
 
 ## 7. Décisions Morris restantes
 
-1. GO **versionnement** (commit / push / draft PR) des docs `23`–`25` (+ sync README/`07`/`20`–`22`).
-2. Après intégration uniquement : ouverture éventuelle **POC-G8**.
-3. Clôture AF (séparée).
+1. Ouverture éventuelle **POC-G8** (après sync post-merge si versionnée — GO distinct).
+2. Clôture AF (séparée).
+
+### Historique consommé
+
+- GO versionnement docs `23`–`25` : **CONSOMMÉ** (commit / push / draft PR #221 puis merge Morris).
+- Merge #221 : **CONSOMMÉ**.
 
 ### Conséquences
 
-- GO versionnement ≠ GO backlog ≠ GO delivery ≠ lancement POC.
-- NO-GO versionnement : docs restent locaux.
+- Intégration #221 ≠ GO backlog ≠ GO delivery ≠ lancement POC ≠ ouverture POC-G8.
 
 ---
 
 ## 8. Séquence
 
 ```text
-POC-G7 VALIDÉ AVEC RÉSERVES (Option B minimale)
-  → GO versionnement docs (requis — non accordé ici)
-  → post-merge archi
-  → décision POC-G8 (FERMÉE aujourd’hui)
+POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ (Option B, PR #221 / 40f8ebe…)
+  → versionnement CONSOMMÉ
+  → sync post-merge documentaire (locale — non versionnée ici)
+  → décision POC-G8 (FERMÉE — GO Morris requis)
   → POC-G9 / POC (NON LANCÉS)
 ```
 
@@ -128,17 +134,18 @@ POC-G7 VALIDÉ AVEC RÉSERVES (Option B minimale)
 
 | Élément | Valeur |
 |---------|--------|
-| Option B minimale | **RETENUE** |
+| Option B minimale | **RETENUE / INTÉGRÉE** |
 | Harness autonome | **Oui** |
 | Studio | Cockpit |
 | Adaptateur | Sans autorité |
-| POC-G7 | **VALIDÉ AVEC RÉSERVES** |
+| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | POC-G8/G9 | **FERMÉS** |
 | POC | **Non lancé** |
-| Versionnement | **Décision requise** |
+| Versionnement | **CONSOMMÉ / INTÉGRÉ** |
+| Prochaine décision | Ouverture éventuelle **POC-G8** |
 
-**Verdict :** `ARCHITECTURE POC OPTION B DOCUMENTED WITH RESERVES — POC-G7 VALIDATED WITH RESERVES — VERSIONING DECISION REQUIRED`
+**Verdict :** `POST-MERGE COMPLETE WITH RESERVES — OPTION B ARCHITECTURE INTEGRATED — POC-G8 DECISION REQUIRED`
 
 ---
 
-*Decision pack — Option B minimale — G7 validé avec réserves — non versionné — Morris décide.*
+*Decision pack — Option B minimale — G7 validé avec réserves — INTÉGRÉ (PR #221 / 40f8ebe…) — POC-G8 FERMÉ — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 6165a91..dbf221e 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,21 +4,22 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-architecture-option-b-validated-with-reserves` — POC-G7 **VALIDÉ AVEC RÉSERVES** ; Option B minimale ; docs **non versionnés** ; POC **non lancé** ; POC-G8/G9 **fermés** |
+| **Statut** | `poc-architecture-option-b-integrated` — POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** ; Option B minimale **INTÉGRÉE** (PR #221) ; POC **non lancé** ; POC-G8/G9 **fermés** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — QA corrective architecture Option B (DOC/ARCH/INC, Critical) |
-| **Typologie cycle** | DOC / ARCH / INC corrective — Critical |
-| **Cycle projet** | 9 — QA corrective ; architecture Option B documentée |
-| **Profil SFIA** | Critical |
-| **Branche architecture** | `architecture/sfia-studio-poc-orchestration` (**locale**, non poussée) |
-| **Base canonique** | `origin/main` @ `b882892d79709acd0637d0df872c16bbe16d7ed1` |
+| **Exécuteur** | Cursor — post-merge sync Option B (DOC/ARCH/POST-MERGE, Standard) |
+| **Typologie cycle** | DOC / ARCH / POST-MERGE — Standard |
+| **Cycle projet** | 14 — Post-merge après PR #221 |
+| **Profil SFIA** | Standard |
+| **Branche post-merge** | `capitalization/sfia-studio-poc-option-b-post-merge` (**locale**) |
+| **Branche architecture** | `architecture/sfia-studio-poc-orchestration` — **historique** (MERGED #221, remote **supprimée**) |
+| **Base canonique** | `origin/main` @ `40f8ebecf41608756e4e8184c860b3b966b786b3` |
 | **Chemin** | `projects/sfia-studio/` |
 | **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur |
 | **Cadrage POC** | `20`–`22` — **INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
-| **Architecture POC** | `23`–`25` — **Option B minimale** ; POC-G7 **VALIDÉ AVEC RÉSERVES** ; **non versionnée** |
+| **Architecture POC** | `23`–`25` — **Option B minimale** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** (PR #221 / `40f8ebe…`) |
 | **POC** | **Non lancé** — backlog / delivery **fermés** |
-| **Prochaine décision** | GO **versionnement** docs architecture — **non accordé** ; POC-G8 après intégration seulement |
+| **Prochaine décision** | Ouverture éventuelle **POC-G8** — **FERMÉE** (GO Morris distinct) |
 
 ---
 
@@ -48,13 +49,14 @@
 | Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
 | Automatisation | L3 + L4* / L0 — L5 global interdit (POC-G4) |
 | Git futur POC | Lecture réelle OK ; écritures distantes **simulées** (POC-G5) |
-| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES** ; POC-G8/G9 **fermés** |
-| Sync post-merge | PR #220 — **MERGED** (`b882892…`) |
-| Architecture POC | **Option B minimale** (`23`–`25`) — validée avec réserves ; **non versionnée** |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** ; POC-G8/G9 **fermés** |
+| Sync post-merge cadrage | PR #220 — **MERGED** (`b882892…`) |
+| Architecture POC | **Option B minimale** (`23`–`25`) — validée avec réserves ; **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
+| Branche architecture | historique — remote **supprimée** après #221 |
 | Branche cadrage | conservée |
 | Branches historiques | conservées |
 
-> Cadrage intégré. Sync #220 mergée. Architecture **Option B minimale** (Studio cockpit + adaptateur + harness autonome). POC-G7 **validé avec réserves**. POC **non lancé**. Versionnement = GO distinct.
+> Cadrage intégré. Sync #220 mergée. Architecture **Option B minimale** **INTÉGRÉE** (PR #221). Studio cockpit + adaptateur + harness autonome. POC-G7 **validé avec réserves — intégré**. POC **non lancé**. Versionnement **consommé**. POC-G8 **fermé**.
 
 ---
 
@@ -132,13 +134,14 @@ Pré-cadrage
   → capitalisation P0 (PR #218)
   → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219 / `be713c45…`) — POC non lancé
   → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
-  → architecture POC ciblée             ← POC-G7 **VALIDÉ AVEC RÉSERVES** — Option B minimale (`23`–`25`) — **non versionnée**
+  → architecture POC ciblée             ← POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B (`23`–`25`) — PR #221 / `40f8ebe…`
+  → post-merge sync architecture        ← cycle 14 (locale) — versionnement sync **non autorisé** ici
   → backlog POC borné                   ← POC-G8 **fermé**
   → delivery POC                        ← POC-G9 **fermé**
   → décision Morris : abandon / itération / préparation MVP
 ```
 
-Cadrage intégré. Architecture Option B **validée avec réserves** (non versionnée). Harness autonome + Studio cockpit + adaptateur fin. POC **non lancé**.
+Cadrage intégré. Architecture Option B **validée avec réserves** et **intégrée** (PR #221). Harness autonome + Studio cockpit + adaptateur fin. POC **non lancé**. POC-G8 **fermé**.
 
 ---
 
@@ -225,7 +228,7 @@ Cadrage intégré. Architecture Option B **validée avec réserves** (non versio
 | Sync post-merge | PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) — **MERGED** (`b882892…`) |
 | POC-G10 | **CONSOMMÉ** |
 
-### Architecture POC orchestration — Option B minimale (POC-G7 VALIDÉ AVEC RÉSERVES)
+### Architecture POC orchestration — Option B minimale (POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ)
 
 | Document | Rôle |
 |----------|------|
@@ -233,7 +236,13 @@ Cadrage intégré. Architecture Option B **validée avec réserves** (non versio
 | [24-poc-orchestration-contracts-security-and-observability.md](./24-poc-orchestration-contracts-security-and-observability.md) | Contrats Studio/adaptateur/harness ; sécurité |
 | [25-poc-orchestration-architecture-decision-pack.md](./25-poc-orchestration-architecture-decision-pack.md) | ARCH-POC-CAND-* validées (avec réserves) |
 
-> POC-G7 **VALIDÉ AVEC RÉSERVES**. Docs **non versionnés**. POC-G8/G9 **fermés**. Runtime/protocole **ouverts**. POC **non lancé**.
+| Fait Git | Valeur |
+|----------|--------|
+| PR | [#221](https://github.com/mcleland147/sfia-workspace/pull/221) — **MERGED** (squash) |
+| Merge | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
+| Branche remote archi | **supprimée** après merge |
+
+> POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**. Versionnement **consommé**. POC-G8/G9 **fermés**. Runtime/protocole **ouverts**. POC **non lancé**.
 
 > Studio = cockpit. Adaptateur = sans autorité. Harness = cœur d’exécution autonome. Option C écartée (1er POC).
 
@@ -335,7 +344,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Sync #212 + finalisation #213 | **INTÉGRÉES** |
 | Clôture formelle cycle architecture | **Non** — non automatique |
 | Sort des branches historiques | Conservées ; décisions distinctes |
-| Contenu / architecture du POC orchestration | Option B minimale — POC-G7 **VALIDÉ AVEC RÉSERVES** ; non versionnée ; G8/G9 fermés |
+| Contenu / architecture du POC orchestration | Option B minimale — POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** (PR #221) ; G8/G9 fermés |
 | Définition MVP | **Non pris** |
 | Industrialisation | **Non engagée** |
 | Responsive / a11y complète / CI GitHub | **Ouverts** (réserves P0) |
@@ -346,18 +355,18 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 ### Orientation Morris — architecture POC
 
-> POC-G7 **VALIDÉ AVEC RÉSERVES**. **Option B minimale** : Studio cockpit + adaptateur fin + harness autonome. Option A = test/dégradé. Option C écartée (1er POC).
-> **POC non lancé.** Versionnement docs = GO distinct. POC-G8 **fermé**.
+> POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** (PR #221 / `40f8ebe…`). **Option B minimale** : Studio cockpit + adaptateur fin + harness autonome. Option A = test/dégradé. Option C écartée (1er POC).
+> **POC non lancé.** Versionnement **consommé**. POC-G8 **fermé**.
 
 ---
 
 ## 8. Prochaine décision
 
-1. GO **versionnement** (commit / push / draft PR) des docs `23`–`25` et sync README/`07`/`20`–`22` — **non accordé**.
-2. Après intégration : éventuel **POC-G8** — **fermé**.
-3. Clôture formelle AF (séparée).
+1. Ouverture éventuelle **POC-G8** — **FERMÉE** (GO Morris distinct).
+2. Clôture formelle AF (séparée).
+3. Versionnement de la sync post-merge (cycle 14) — **non autorisé** ici (décision distincte).
 
-**Verdict documentaire :** `ARCHITECTURE POC OPTION B DOCUMENTED WITH RESERVES — POC-G7 VALIDATED WITH RESERVES — VERSIONING DECISION REQUIRED`
+**Verdict documentaire :** `POST-MERGE COMPLETE WITH RESERVES — OPTION B ARCHITECTURE INTEGRATED — POC-G8 DECISION REQUIRED`
 
 ---
 
@@ -366,10 +375,10 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Élément | Source |
 |---------|--------|
 | Méthode | SFIA v2.6 — Option C méthode |
-| Socle | `main` @ `b882892…` |
-| Architecture POC | `23`–`25` locaux (non versionnés) |
+| Socle | `main` @ `40f8ebe…` (PR #221 MERGED) |
+| Architecture POC | `23`–`25` **intégrés** sur `main` |
 | Handoff | `sfia/review-handoff` |
 
 ---
 
-*SFIA Studio — Option B minimale — POC-G7 VALIDÉ AVEC RÉSERVES — non versionné — POC NON LANCÉ — Morris décide (versionnement).*
+*SFIA Studio — Option B minimale — POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ (PR #221) — POC-G8 FERMÉ — POC NON LANCÉ.*
```

---

## 9. Commit

| Champ | Valeur |
|-------|--------|
| SHA | `a28245aa10a2e45e2eff9864d06bd566a262d478` |
| Message | `docs(sfia-studio): sync Option B architecture post-merge` |
| Fichiers | 8M |
| Stats | +146 / −117 |

---

## 10. Push

| Champ | Valeur |
|-------|--------|
| Remote | `origin/capitalization/sfia-studio-poc-option-b-post-merge` |
| SHA distant | `a28245aa10a2e45e2eff9864d06bd566a262d478` |
| Match local | **OUI** |

---

## 11. Draft PR

| Champ | Valeur |
|-------|--------|
| Numéro | **#222** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/222 |
| state | **OPEN** |
| isDraft | **true** |
| merged | **false** |
| base | `main` |
| head | `capitalization/sfia-studio-poc-option-b-post-merge` |
| head SHA | `a28245aa10a2e45e2eff9864d06bd566a262d478` |
| Fichiers PR | 8 MODIFIED |

Corps conforme : sync #221 ; Option B inchangée ; G8/G9 fermés ; POC non lancé ; merge non autorisé.

---

## 12. Actions interdites restantes

- merge
- ready for review
- suppression de branche
- ouverture POC-G8 / POC-G9
- backlog / delivery
- code / `app/**`
- lancement POC

---

## 13. Verdict

**`PR READINESS COMPLETE — OPTION B POST-MERGE SYNC DRAFT PR OPEN — POC-G8 CLOSED`**
