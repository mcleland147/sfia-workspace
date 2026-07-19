# ChatGPT Review Pack — SFIA Studio PR #220 Status Correction — QA Cycle 9

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-19 13:15:19 CEST |
| **Cycle** | 9 — QA / validation corrective documentaire |
| **Profil** | Standard |
| **Typologie** | DOC / INC légère |
| **Branche** | `capitalization/sfia-studio-poc-framing-post-merge` |
| **HEAD avant** | `472d5fe5a2557a2ca008fc7a4b1e0ab1dab79578` |
| **HEAD après** | `18d21511efaaf62b8a332b9e289f2355830b9617` |
| **origin/main** | `be713c45a63c243a4d75c51d27d215d05bb621f1` |
| **PR** | [#220](https://github.com/mcleland147/sfia-workspace/pull/220) — draft |
| **Décision Morris** | GO correction documentaire + commit/push sur branche existante |
| **Niveau** | full |

---

## 1. Local Git Truth Check

PASS — branche correcte ; HEAD=`472d5fe…`=remote ; PR #220 open/draft ; working tree propre hors `.tmp-sfia-review/`.

---

## 2. Occurrences recherchées (qualification)

### Obsolètes (statut courant) — CORRIGÉES

| Fichier | Occurrence | Action |
|---------|------------|--------|
| README | branche (**locale**, non poussée) | → poussée ; PR #220 |
| README | cycle 14 — en cours local (non versionné) | → versionnée ; draft PR #220 |
| README | GO versionnement … non accordé | → GO merge #220 ; versionnement consommé |
| README | prochaine décision POC-G7 seule | → merge #220 puis éventuel POC-G7 |
| 07 | branche locale | → poussée ; PR #220 |
| 07 | (**locale**) | → (**poussée**) ; PR #220 |
| 07 | ≠ GO versionnement post-merge | → ≠ merge #220 ; GO versionnement consommé |
| 07 | local, non versionné | → versionnée ; draft PR #220 |
| 07 | D-NEXT-19 non accordé | → CONSOMMÉ / FAIT + D-NEXT-20 GO merge |
| 07 | questions versionnement | → questions merge #220 |
| 20 | sync sans PR | → poussée + PR #220 |
| 20 | prochaine = POC-G7 seule | → merge #220 puis POC-G7 |
| 22 | GO versionnement (si retenue) | → GO merge #220 |
| 22 | cycle 14 — local | → versionnée ; PR #220 |
| 22 | verdict post-merge ancien | → CORRECTION COMPLETE… |

### Historiques / techniques — CONSERVÉES

- orchestrateur local / macOS local / preuve locale (contrat POC)
- Branche Delivery locale + distante (historique)
- D-VAL-2 socle documentaire local (historique)
- S4 PR readiness locale (scénario reporté)
- `git diff` local / HTTP local / isolation locale

### Fichier 21

Aucune correction — aucune formulation de statut courant obsolète.

---

## 3. État décisionnel vérifié (préservé)

| Élément | Statut |
|---------|--------|
| Cadrage | VALIDÉ + INTÉGRÉ (#219) |
| POC-CAND-01…06, 08, 10 | VALIDÉES |
| POC-CAND-07 | VALIDÉE AVEC RÉSERVE |
| POC-CAND-09 | VALIDÉE puis consommée |
| POC-G1…G6 | VALIDÉS |
| POC-G10 | CONSOMMÉ |
| POC-G7…G9 | FERMÉS |
| S1 | contrat non exécuté |
| POC / archi / backlog / delivery | non lancés |
| Runtime | ouvert |
| GO commit/push/draft PR sync | **CONSOMMÉ** |
| Merge #220 | **non autorisé** |

---

## 4. Diff complet

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 4ba4c12..506595e 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,15 +4,15 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 14 — Post-merge (sync cadrage POC) ; historique PR readiness / Delivery conservé |
-| **Profil** | Standard (post-merge) |
+| **Cycle** | 9 — QA corrective (sync post-merge versionnée) ; historique post-merge / PR readiness conservé |
+| **Profil** | Standard |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | `poc-orchestration-framing-post-merge-integrated` ; cadrage **VALIDÉ + INTÉGRÉ** (PR #219) ; POC **non lancé** ; POC-G7…G9 **fermés** |
+| **Statut** | `poc-orchestration-framing-post-merge-integrated` ; sync **versionnée** ; draft PR #220 **ouverte** ; merge **non effectué** ; POC **non lancé** ; POC-G7…G9 **fermés** |
 | **Décisions** | POC-CAND-01…10 selon Morris 2026-07-19 ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; D-VAL/FD/AF/TA historiques inchangés |
 | **Destinataire** | Morris |
-| **Source de vérité** | `origin/main` @ `be713c45a63c243a4d75c51d27d215d05bb621f1` ; branche locale `capitalization/sfia-studio-poc-framing-post-merge` |
+| **Source de vérité** | `origin/main` @ `be713c45a63c243a4d75c51d27d215d05bb621f1` ; branche **poussée** `capitalization/sfia-studio-poc-framing-post-merge` ; draft PR #220 |
 
-> Cadrage POC **VALIDÉ** (2026-07-19) et **INTÉGRÉ** (PR #219 / `be713c45…`). POC-G10 **consommé**. POC **non lancé**. Architecture POC (POC-G7) **fermée**. Versionnement de cette sync post-merge = GO Morris distinct.
+> Cadrage POC **VALIDÉ** (2026-07-19) et **INTÉGRÉ** (PR #219 / `be713c45…`). POC-G10 **consommé**. Sync post-merge **versionnée** (commit + push + draft PR #220). **Merge #220 non autorisé**. POC **non lancé**. Architecture POC (POC-G7) **fermée**.
 
 ---
 
@@ -34,16 +34,17 @@
 | Branche Delivery | **Supprimée** (local + remote) |
 | Gate Morris Delivery P0 | **Aucune restante** |
 | App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
-| Prochaine orientation | Cadrage POC **VALIDÉ + INTÉGRÉ** (PR #219) ; prochaine décision **possible** = **POC-G7** — **fermée** |
+| Prochaine orientation | Sync post-merge **versionnée** (PR #220 draft) ; prochaine décision = **GO merge #220** ou, après intégration, éventuel **POC-G7** — **fermé** |
 | Produit complet / MVP / industrialisation | **Non atteints / non engagés** |
 | Décision Morris cadrage | **2026-07-19** — POC-G1…G6 **VALIDÉS** ; S1 ; L3+L4*/L0 ; writes distantes simulées |
 | Intégration cadrage | **Fait Git** — PR #219 MERGED ; `be713c45…` ; POC-G10 **CONSOMMÉ** |
+| Sync post-merge | **Versionnée** — commit + push + draft PR #220 ; merge **non effectué** |
 | POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** — outil orchestrateur ouvert |
 | Branche cadrage POC | `project/sfia-studio-poc-orchestration-framing` (**conservée**) |
-| Branche post-merge | `capitalization/sfia-studio-poc-framing-post-merge` (**locale**) |
+| Branche post-merge | `capitalization/sfia-studio-poc-framing-post-merge` (**poussée**) ; PR #220 |
 | Branches historiques | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |
 
-> Cadrage **validé + intégré** ≠ POC lancé ≠ architecture validée ≠ GO versionnement post-merge.
+> Cadrage **validé + intégré** ≠ POC lancé ≠ architecture validée ≠ merge #220 autorisé. GO commit / push / draft PR **consommé**.
 
 ### Trace factuelle — Delivery P0 (historique compact)
 
@@ -120,7 +121,7 @@ Pré-cadrage
   → post-merge / cleanup
   → capitalisation P0 (PR #218)
   → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219) — POC non lancé
-  → post-merge sync documentaire       ← cycle 14 — local, non versionné
+  → post-merge sync documentaire       ← **versionnée** ; draft PR #220 ouverte ; merge = GO Morris distinct
   → architecture POC ciblée             ← prochaine décision **possible** (POC-G7) — **fermée**
   → backlog POC borné                   ← POC-G8 fermé
   → delivery POC                        ← POC-G9 fermé
@@ -130,6 +131,7 @@ Pré-cadrage
 ### Précisions
 
 - Cadrage POC : **validé et intégré** (POC-G1…G6 ; POC-G10 **consommé**).
+- Sync post-merge : **versionnée** (GO commit / push / draft PR **consommé**) ; merge #220 **en attente**.
 - Scénario **S1** sélectionné (contrat de cadrage, **non exécuté**).
 - Architecture / backlog / delivery POC : **non lancés**.
 - Clôture formelle architecture fonctionnelle : **décision séparée**, toujours ouverte.
@@ -137,7 +139,7 @@ Pré-cadrage
 
 ### Orientation Option B — état
 
-> Cadrage validé 2026-07-19 ; intégré via PR #219 (`be713c45…`). POC-G10 consommé. Prochaine décision **possible** (≠ ouverte) : POC-G7 uniquement.
+> Cadrage validé 2026-07-19 ; intégré via PR #219 (`be713c45…`). POC-G10 consommé. Sync post-merge versionnée (PR #220 draft). Prochaines décisions : **GO merge #220** ; éventuellement **POC-G7** après intégration — **fermée**.
 
 ---
 
@@ -263,8 +265,9 @@ Pré-cadrage
 | D-NEXT-16 | Validation POC-CAND / POC-G1…G6 | Morris | **FAIT** — 2026-07-19 |
 | D-NEXT-17 | POC-G10 versionnement cadrage | Morris | **CONSOMMÉ** — PR #219 **MERGED** (`be713c45…`) |
 | D-NEXT-18 | Architecture / delivery POC | Morris | **Fermée** — POC-G7…G9 non validés |
-| D-NEXT-19 | GO versionnement sync post-merge | Morris | **Requis** si modifications retenues — **non accordé** ici |
-| D-NEXT-20 | Ouverture éventuelle POC-G7 | Morris | **Possible** — **non ouverte** |
+| D-NEXT-19 | GO versionnement sync post-merge | Morris | **CONSOMMÉ / FAIT** — commit + push + draft PR #220 |
+| D-NEXT-20 | GO merge PR #220 | Morris | **Requis** — **non autorisé** ici |
+| D-NEXT-21 | Ouverture éventuelle POC-G7 | Morris | **Possible** après intégration — **non ouverte** |
 
 ---
 
@@ -326,8 +329,8 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 ## 8. Questions Morris
 
-1. Autorisez-vous le **versionnement** de la synchronisation post-merge (commit / push / PR) ?
-2. Ouvrez-vous éventuellement **POC-G7** (architecture POC) — décision distincte ?
+1. Autorisez-vous le **merge** de la draft PR #220 ?
+2. Après intégration : ouvrez-vous éventuellement **POC-G7** (architecture POC) — décision distincte ?
 3. Clôture formelle architecture fonctionnelle (toujours séparée) ?
 
 ---
@@ -337,6 +340,7 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 | Critère | État |
 |---------|------|
 | Cadrage POC `20`–`22` | **VALIDÉ + INTÉGRÉ** (PR #219) |
+| Sync post-merge | **Versionnée** — draft PR #220 |
 | POC-G10 | **CONSOMMÉ** |
 | POC lancé | **Non** |
 | POC-G7…G9 | **Fermés** |
@@ -351,11 +355,13 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 |---------|--------|
 | Cadrage | **VALIDÉ + INTÉGRÉ** |
 | POC-G10 | **CONSOMMÉ** (PR #219) |
-| Merge #219 | **Fait Git** `be713c45…` |
+| Sync post-merge | **Versionnée** (PR #220 draft) |
+| GO commit / push / draft PR | **Consommé** |
+| Merge #220 | **Non autorisé** |
 | POC | **Non lancé** |
-| POC-G7 | **Fermé** (décision possible future) |
+| POC-G7 | **Fermé** |
 
-**Verdict :** `POST-MERGE COMPLETE — POC FRAMING INTEGRATED — MORRIS DECISION REQUIRED`
+**Verdict :** `CORRECTION COMPLETE — PR #220 UPDATED — READY FOR MORRIS MERGE DECISION`
 
 ---
 
@@ -369,4 +375,4 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 | [11-functional-architecture.md](./11-functional-architecture.md) | AF-Option C / L0–L5 |
 | [app/README.md](./app/README.md) | Runtime P0 |
 
-*SFIA Studio — cadrage POC VALIDÉ + INTÉGRÉ (PR #219) — POC NON LANCÉ — POC-G7 fermé — Morris décide.*
+*SFIA Studio — cadrage POC VALIDÉ + INTÉGRÉ (PR #219) — sync post-merge versionnée (PR #220 draft) — merge non autorisé — POC NON LANCÉ — POC-G7 fermé — Morris décide.*
diff --git a/projects/sfia-studio/20-poc-orchestration-framing.md b/projects/sfia-studio/20-poc-orchestration-framing.md
index 7429d49..15365a5 100644
--- a/projects/sfia-studio/20-poc-orchestration-framing.md
+++ b/projects/sfia-studio/20-poc-orchestration-framing.md
@@ -8,7 +8,7 @@
 | **Profil** | Critical |
 | **Typologie** | DOC / EVOL (cadrage) |
 | **Baseline méthode** | SFIA v2.6 — Option C méthode (**inchangée**) |
-| **Branche** | Historique : `project/sfia-studio-poc-orchestration-framing` ; sync : `capitalization/sfia-studio-poc-framing-post-merge` |
+| **Branche** | Historique : `project/sfia-studio-poc-orchestration-framing` ; sync : `capitalization/sfia-studio-poc-framing-post-merge` (**poussée**) ; draft PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) |
 | **Base / main** | `origin/main` @ `be713c45a63c243a4d75c51d27d215d05bb621f1` (PR #219) |
 | **Statut document** | **VALIDÉ PAR MORRIS** (2026-07-19) et **INTÉGRÉ** sur `main` — cycle de cadrage **terminé** |
 | **POC** | **Non lancé** |
@@ -308,7 +308,9 @@ Pas de plateforme de supervision industrialisée.
 
 **Cycle de cadrage :** **terminé** (validé + intégré). Critères de succès/échec/abandon = contrat — **pas** preuve réalisée.
 
-**Prochaine décision Morris possible :** ouverture éventuelle de **POC-G7** (architecture POC ciblée) — **fermée** ici. Pas de backlog/delivery direct.
+**Sync post-merge :** **versionnée** (commit + push + draft PR #220). **Merge #220** = GO Morris distinct — **non autorisé** ici.
+
+**Prochaine décision Morris possible après merge #220 :** ouverture éventuelle de **POC-G7** (architecture POC ciblée) — **fermée** ici. Pas de backlog/delivery direct.
 
 **Toujours ouverts :** outil/techno orchestrateur ; harness vs UI ; clôture AF formelle ; MVP.
 
@@ -326,4 +328,4 @@ Pas de plateforme de supervision industrialisée.
 
 ---
 
-*Cadrage VALIDÉ + INTÉGRÉ (PR #219 / be713c45…) — cycle cadrage TERMINÉ — POC NON LANCÉ — POC-G7/G8/G9 fermés — outil orchestrateur ouvert.*
+*Cadrage VALIDÉ + INTÉGRÉ (PR #219 / be713c45…) — sync post-merge versionnée (PR #220 draft) — merge non autorisé — cycle cadrage TERMINÉ — POC NON LANCÉ — POC-G7/G8/G9 fermés — outil orchestrateur ouvert.*
diff --git a/projects/sfia-studio/22-poc-orchestration-decision-pack.md b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
index 416f0b7..35c9873 100644
--- a/projects/sfia-studio/22-poc-orchestration-decision-pack.md
+++ b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
@@ -79,7 +79,7 @@ Les options A/B/C de séquencement et S1–S4 / L-levels restent documentées co
 
 ## 8. Impacts
 
-Cadrage validé + intégré → cycle de cadrage **clôturable** documentairement → prochaine décision Morris **possible** : ouverture éventuelle de **POC-G7** uniquement. Pas de shortcut backlog/delivery. Versionnement de la sync post-merge = GO distinct.
+Cadrage validé + intégré → cycle de cadrage **clôturable** documentairement → sync post-merge **versionnée** (draft PR #220) → prochaine décision : **GO merge #220** ; après intégration, éventuel **POC-G7**. Pas de shortcut backlog/delivery.
 
 ---
 
@@ -90,7 +90,7 @@ Cadrage validé + intégré → cycle de cadrage **clôturable** documentairemen
 - Allowlist chemins détaillée (architecture)
 - Clôture formelle AF
 - MVP / industrialisation / réserves P0
-- GO versionnement sync post-merge (si retenue)
+- GO merge draft PR #220 (requis ; non accordé ici)
 
 ---
 
@@ -99,7 +99,7 @@ Cadrage validé + intégré → cycle de cadrage **clôturable** documentairemen
 ```text
 Cadrage validé (2026-07-19)
   → POC-G10 consommé — PR #219 MERGED (be713c45…)
-  → post-merge sync documentaire (cycle 14 — local)
+  → post-merge sync documentaire — versionnée ; draft PR #220 ouverte ; merge = GO Morris distinct
   → décision distincte éventuelle architecture POC (POC-G7) — FERMÉE
   → (plus tard) backlog POC (POC-G8) → delivery POC (POC-G9)
   → décision post-POC : abandon / itération / préparation MVP
@@ -115,14 +115,17 @@ POC-G7 / G8 / G9 **non ouverts**. Aucune architecture POC prise. Aucun lancement
 |---------|--------|
 | Cadrage | **VALIDÉ + INTÉGRÉ** (PR #219) |
 | POC-G10 | **CONSOMMÉ** |
+| Sync post-merge | **Versionnée** — draft PR #220 |
+| GO commit / push / draft PR | **Consommé** |
+| Merge #220 | **Non autorisé** |
 | POC lancé | **Non** |
 | Architecture / backlog / delivery POC | **Non lancés** |
 | POC-G7…G9 | **Fermés** |
 | Runtime / techno | **Non sélectionnés** (outil ouvert) |
-| Prochaine décision Morris possible | Ouverture éventuelle de **POC-G7** |
+| Prochaine décision Morris | **GO merge #220** ; éventuellement POC-G7 après intégration |
 
-**Verdict post-merge :** `POST-MERGE COMPLETE — POC FRAMING INTEGRATED — MORRIS DECISION REQUIRED`
+**Verdict :** `CORRECTION COMPLETE — PR #220 UPDATED — READY FOR MORRIS MERGE DECISION`
 
 ---
 
-*Decision pack VALIDÉ + INTÉGRÉ (PR #219) — POC-G10 CONSOMMÉ — POC NON LANCÉ — POC-G7 fermé.*
+*Decision pack VALIDÉ + INTÉGRÉ (PR #219) — sync post-merge versionnée (PR #220 draft) — merge non autorisé — POC-G10 CONSOMMÉ — POC NON LANCÉ — POC-G7 fermé.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 40bd185..1ef9944 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -7,17 +7,17 @@
 | **Statut** | `poc-orchestration-framing-post-merge-integrated` — cadrage Option B **VALIDÉ** et **INTÉGRÉ** (PR #219) ; POC **non lancé** ; POC-G7…G9 **fermés** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — Post-merge cadrage POC (DOC / CAPA légère, Standard) |
-| **Typologie cycle** | DOC / CAPA légère — Post-merge Standard |
-| **Cycle projet** | 14 — Post-merge ; cadrage POC **validé + intégré** ; Delivery P0 **clôturé** |
-| **Profil SFIA** | Standard (post-merge) ; historique cadrage Critical |
-| **Branche post-merge** | `capitalization/sfia-studio-poc-framing-post-merge` (**locale**, non poussée) |
+| **Exécuteur** | Cursor — QA corrective documentaire PR #220 (DOC / INC légère, Standard) |
+| **Typologie cycle** | DOC / INC légère — QA corrective Standard |
+| **Cycle projet** | 9 — QA / validation corrective ; sync post-merge **versionnée** ; draft PR #220 **ouverte** |
+| **Profil SFIA** | Standard |
+| **Branche post-merge** | `capitalization/sfia-studio-poc-framing-post-merge` (**poussée**) ; draft PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) |
 | **Base canonique** | `origin/main` @ `be713c45a63c243a4d75c51d27d215d05bb621f1` |
 | **Chemin** | `projects/sfia-studio/` |
 | **AF-Option C** | **VALIDÉE** + **opérationnalisée** pour le POC (POC-CAND-03) |
 | **Cadrage POC** | `20`–`22` — **VALIDÉS et INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
 | **POC** | **Non lancé** — architecture / backlog / delivery POC **non lancés** |
-| **Prochaine décision possible** | Ouverture éventuelle de **POC-G7** (architecture POC) — **toujours fermé** ; MVP / industrialisation **non engagés** |
+| **Prochaine décision** | **GO merge** de la PR #220 (distinct) ; ouverture éventuelle **POC-G7** après intégration — **fermée** |
 
 ---
 
@@ -128,14 +128,14 @@ Pré-cadrage
   → post-merge / cleanup
   → capitalisation P0 (PR #218)
   → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219 / `be713c45…`) — POC non lancé
-  → post-merge sync documentaire       ← cycle 14 — **en cours local** (non versionné)
+  → post-merge sync documentaire       ← **versionnée** ; draft PR #220 ouverte ; merge = GO Morris distinct
   → architecture POC ciblée             ← prochaine décision **possible** (POC-G7) — **fermée**
   → backlog POC borné                   ← POC-G8 **fermé**
   → delivery POC                        ← POC-G9 **fermé**
   → décision Morris : abandon / itération / préparation MVP
 ```
 
-Cadrage POC : **validé et intégré**. Architecture / backlog / delivery POC : **non lancés**. MVP / industrialisation : **non engagés**.
+Cadrage POC : **validé et intégré**. Sync post-merge : **versionnée** (draft PR #220). Architecture / backlog / delivery POC : **non lancés**. MVP / industrialisation : **non engagés**.
 
 ---
 
@@ -333,18 +333,18 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 ### Orientation Morris — Option B (POC orchestration)
 
-> Cadrage **VALIDÉ** (2026-07-19) et **INTÉGRÉ** (PR #219 / `be713c45…`). Scénario **S1**. L3+L4*/L0. Écritures distantes simulées. Orchestrateur local **avec réserve** (outil ouvert).
-> **POC non lancé.** Prochaine décision **possible** (≠ autorisée) : **POC-G7** architecture POC ciblée — **fermée**.
+> Cadrage **VALIDÉ** (2026-07-19) et **INTÉGRÉ** (PR #219 / `be713c45…`). Sync post-merge **versionnée** (draft PR #220). Scénario **S1**. L3+L4*/L0. Écritures distantes simulées. Orchestrateur local **avec réserve** (outil ouvert).
+> **POC non lancé.** Prochaines décisions : **GO merge #220** ; éventuellement **POC-G7** après intégration — **fermée**.
 
 ---
 
 ## 8. Prochaine décision
 
-1. GO versionnement de la sync post-merge (commit / push / PR) — **non accordé** par ce cycle.
-2. Décision distincte éventuelle **POC-G7** (architecture POC) — **fermée**.
+1. **GO merge** de la draft PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) — **non autorisé** ici (GO commit / push / draft PR **consommé**).
+2. Décision distincte éventuelle **POC-G7** (architecture POC) après intégration — **fermée**.
 3. Clôture formelle architecture fonctionnelle (toujours séparée).
 
-**Verdict documentaire :** `POST-MERGE COMPLETE — POC FRAMING INTEGRATED — MORRIS DECISION REQUIRED`
+**Verdict documentaire :** `CORRECTION COMPLETE — PR #220 UPDATED — READY FOR MORRIS MERGE DECISION`
 
 ---
 
@@ -355,8 +355,9 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Méthode | SFIA v2.6 — Option C méthode |
 | Socle intégré | `main` @ `be713c45…` (PR #219) |
 | Cadrage POC | `20`–`22` **validés et intégrés** sur `main` |
+| Sync post-merge | branche poussée + draft PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) — **merge non effectué** |
 | Handoff | `sfia/review-handoff` |
 
 ---
 
-*SFIA Studio — cadrage POC VALIDÉ + INTÉGRÉ (PR #219) — POC NON LANCÉ — POC-G7/G8/G9 fermés — Morris décide.*
+*SFIA Studio — cadrage POC VALIDÉ + INTÉGRÉ (PR #219) — sync post-merge versionnée (PR #220 draft) — merge non autorisé — POC NON LANCÉ — POC-G7/G8/G9 fermés — Morris décide.*
```

---

## 5. Validations avant staging

| Check | Résultat |
|-------|----------|
| `git diff --check` | PASS |
| 4 fichiers (21 inchangé) | PASS |
| Aucun app/** / méthode | PASS |
| POC-G7…G9 fermés | PASS |
| POC non lancé | PASS |
| Runtime ouvert | PASS |

---

## 6. Staged / commit / push / PR

### Staged
```
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/20-poc-orchestration-framing.md
M	projects/sfia-studio/22-poc-orchestration-decision-pack.md
M	projects/sfia-studio/README.md
```
`git diff --cached --check` PASS — 4 files, +53/−41

### Commit
| Champ | Valeur |
|-------|--------|
| SHA | `18d21511efaaf62b8a332b9e289f2355830b9617` |
| Message | `docs(sfia-studio): correct post-merge versioning status` |
| HEAD avant | `472d5fe5a2557a2ca008fc7a4b1e0ab1dab79578` |
| HEAD après | `18d21511efaaf62b8a332b9e289f2355830b9617` |

### Push
Remote SHA confirmé `18d21511efaaf62b8a332b9e289f2355830b9617`

### PR #220 après
| Champ | Valeur |
|-------|--------|
| URL | https://github.com/mcleland147/sfia-workspace/pull/220 |
| headRefOid | `18d21511efaaf62b8a332b9e289f2355830b9617` |
| isDraft | **true** |
| merged | **false** |
| Corps | mis à jour (sync versionnée ; GO consommé ; merge non autorisé) |

Horodatage : 2026-07-19 13:15:33 CEST

---

## 7. Réserves

1. POC-CAND-07 — outil ouvert
2. Harness vs UI
3. Merge #220 = GO distinct
4. POC-G7 fermé

---

## 8. Actions interdites restantes

- merge #220
- ouverture POC-G7 / G8 / G9
- lancement POC
- choix Runtime
- suppression branche
- clôture AF formelle
- ready-for-review sans instruction

---

## 9. Verdict

**`CORRECTION COMPLETE WITH RESERVES — PR #220 UPDATED — READY FOR MORRIS MERGE DECISION`**

Merge **non** effectué. POC-G7 **non** ouvert. POC **non** lancé.
