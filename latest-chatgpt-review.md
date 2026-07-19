# ChatGPT Review Pack — SFIA Studio POC Framing Post-merge Sync — PR Readiness

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-19 13:03:44 CEST |
| **Cycle** | 13 — PR readiness |
| **Profil SFIA** | Standard |
| **Typologie** | DOC / CAPA légère |
| **Projet** | SFIA Studio |
| **Branche** | `capitalization/sfia-studio-poc-framing-post-merge` |
| **HEAD avant commit** | `be713c45a63c243a4d75c51d27d215d05bb621f1` |
| **HEAD après commit** | `472d5fe5a2557a2ca008fc7a4b1e0ab1dab79578` |
| **Draft PR** | [#220](https://github.com/mcleland147/sfia-workspace/pull/220) — DRAFT |
| **origin/main** | `be713c45a63c243a4d75c51d27d215d05bb621f1` |
| **merge-base** | `be713c45a63c243a4d75c51d27d215d05bb621f1` |
| **Décision Morris consommée** | GO commit / push / draft PR — sync post-merge (5 docs) |
| **Handoff source** | `760005ecd64c612dbabf626e8ecdb2903dbaa79d` — cycle 14 Post-merge |
| **Niveau review pack** | **full** |
| **Review Handoff Git** | required |

---

## 1. Décision Morris consommée

GO versionnement de la synchronisation post-merge uniquement.

| Autorisé | Non autorisé |
|----------|--------------|
| commit / push / draft PR | merge |
| | ouverture POC-G7 |
| | lancement POC / architecture / backlog / delivery |
| | choix Runtime |
| | clôture formelle AF |

---

## 2. Local Git Truth Check

| Check | Résultat |
|-------|----------|
| Branche | `capitalization/sfia-studio-poc-framing-post-merge` — **PASS** |
| HEAD / origin/main / merge-base | `be713c45a63c243a4d75c51d27d215d05bb621f1` — **PASS** |
| 5 fichiers projet modifiés | **PASS** |
| Staged vide | **PASS** |
| Handoff `760005e…` | contenu normalisé **identique** (fence newline) — **PASS** |

**Verdict Local Git Truth Check :** PASS

---

## 3. Sources

- Template cycle / règles PR readiness v2.6
- Cinq fichiers projet locaux
- Handoff post-merge `sfia/review-handoff` @ `760005e…`

---

## 4. Fichiers

| Fichier | Action |
|---------|--------|
| `projects/sfia-studio/README.md` | M |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | M |
| `projects/sfia-studio/20-poc-orchestration-framing.md` | M |
| `projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md` | M |
| `projects/sfia-studio/22-poc-orchestration-decision-pack.md` | M |

---

## 5. Statuts (inchangés vs handoff post-merge)

| Élément | Valeur |
|---------|--------|
| Cadrage | VALIDÉ + INTÉGRÉ (PR #219 / `be713c45…`) |
| POC-CAND-01…06, 08, 10 | VALIDÉES |
| POC-CAND-07 | VALIDÉE AVEC RÉSERVE |
| POC-CAND-09 | VALIDÉE puis consommée |
| POC-G1…G6 | VALIDÉS |
| POC-G10 | CONSOMMÉ |
| POC-G7…G9 | FERMÉS |
| S1 | contrat de cadrage (**non exécuté**) |
| POC / archi / backlog / delivery | **non lancés** |
| Runtime / orchestrateur | **ouverts** |

---

## 6. Diff complet (avant staging)

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index abf5ac3..4ba4c12 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,15 +4,15 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 13 — PR readiness (cadrage POC validé) ; historique Delivery/capitalisation conservé |
-| **Profil** | Critical |
+| **Cycle** | 14 — Post-merge (sync cadrage POC) ; historique PR readiness / Delivery conservé |
+| **Profil** | Standard (post-merge) |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | `poc-orchestration-framing-validated-draft-pr` ; cadrage **VALIDÉ** 2026-07-19 ; POC **non lancé** ; POC-G7…G9 **fermés** |
-| **Décisions** | POC-CAND-01…10 selon Morris 2026-07-19 ; POC-G1…G6 + G10 **VALIDÉS** ; D-VAL/FD/AF/TA historiques inchangés |
+| **Statut** | `poc-orchestration-framing-post-merge-integrated` ; cadrage **VALIDÉ + INTÉGRÉ** (PR #219) ; POC **non lancé** ; POC-G7…G9 **fermés** |
+| **Décisions** | POC-CAND-01…10 selon Morris 2026-07-19 ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; D-VAL/FD/AF/TA historiques inchangés |
 | **Destinataire** | Morris |
-| **Source de vérité** | `origin/main` @ `aa8dbd4606c52df7662276a99c873b4d93e001ba` ; branche `project/sfia-studio-poc-orchestration-framing` |
+| **Source de vérité** | `origin/main` @ `be713c45a63c243a4d75c51d27d215d05bb621f1` ; branche locale `capitalization/sfia-studio-poc-framing-post-merge` |
 
-> Cadrage POC **VALIDÉ** le **2026-07-19**. Versionnement (draft PR) **autorisé**. **Merge non autorisé**. POC **non lancé**. Architecture POC (POC-G7) **non ouverte**.
+> Cadrage POC **VALIDÉ** (2026-07-19) et **INTÉGRÉ** (PR #219 / `be713c45…`). POC-G10 **consommé**. POC **non lancé**. Architecture POC (POC-G7) **fermée**. Versionnement de cette sync post-merge = GO Morris distinct.
 
 ---
 
@@ -34,14 +34,16 @@
 | Branche Delivery | **Supprimée** (local + remote) |
 | Gate Morris Delivery P0 | **Aucune restante** |
 | App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
-| Prochaine orientation | Cadrage POC **VALIDÉ** 2026-07-19 ; prochaine décision possible = **architecture POC (POC-G7)** — **non lancée** |
+| Prochaine orientation | Cadrage POC **VALIDÉ + INTÉGRÉ** (PR #219) ; prochaine décision **possible** = **POC-G7** — **fermée** |
 | Produit complet / MVP / industrialisation | **Non atteints / non engagés** |
-| Décision Morris cadrage | **2026-07-19** — POC-G1…G6 + G10 **VALIDÉS** ; S1 ; L3+L4*/L0 ; writes distantes simulées |
+| Décision Morris cadrage | **2026-07-19** — POC-G1…G6 **VALIDÉS** ; S1 ; L3+L4*/L0 ; writes distantes simulées |
+| Intégration cadrage | **Fait Git** — PR #219 MERGED ; `be713c45…` ; POC-G10 **CONSOMMÉ** |
 | POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** — outil orchestrateur ouvert |
-| Branche cadrage POC | `project/sfia-studio-poc-orchestration-framing` |
+| Branche cadrage POC | `project/sfia-studio-poc-orchestration-framing` (**conservée**) |
+| Branche post-merge | `capitalization/sfia-studio-poc-framing-post-merge` (**locale**) |
 | Branches historiques | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |
 
-> Cadrage **validé** ≠ POC lancé ≠ architecture validée ≠ merge autorisé.
+> Cadrage **validé + intégré** ≠ POC lancé ≠ architecture validée ≠ GO versionnement post-merge.
 
 ### Trace factuelle — Delivery P0 (historique compact)
 
@@ -117,8 +119,9 @@ Pré-cadrage
   → PR #217 / intégration main
   → post-merge / cleanup
   → capitalisation P0 (PR #218)
-  → cadrage POC orchestration          ← **VALIDÉ** Morris 2026-07-19 — POC non lancé
-  → architecture POC ciblée             ← prochaine décision possible (POC-G7) — **non lancée**
+  → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219) — POC non lancé
+  → post-merge sync documentaire       ← cycle 14 — local, non versionné
+  → architecture POC ciblée             ← prochaine décision **possible** (POC-G7) — **fermée**
   → backlog POC borné                   ← POC-G8 fermé
   → delivery POC                        ← POC-G9 fermé
   → décision Morris : abandon / itération / préparation MVP
@@ -126,15 +129,15 @@ Pré-cadrage
 
 ### Précisions
 
-- Cadrage POC : **validé** (POC-G1…G6, POC-G10).
-- Scénario **S1** sélectionné.
+- Cadrage POC : **validé et intégré** (POC-G1…G6 ; POC-G10 **consommé**).
+- Scénario **S1** sélectionné (contrat de cadrage, **non exécuté**).
 - Architecture / backlog / delivery POC : **non lancés**.
 - Clôture formelle architecture fonctionnelle : **décision séparée**, toujours ouverte.
 - POC ≠ MVP ≠ industrialisation.
 
 ### Orientation Option B — état
 
-> Cadrage validé 2026-07-19. Draft PR autorisée. Merge = GO distinct. Après post-merge : décision distincte POC-G7 uniquement.
+> Cadrage validé 2026-07-19 ; intégré via PR #219 (`be713c45…`). POC-G10 consommé. Prochaine décision **possible** (≠ ouverte) : POC-G7 uniquement.
 
 ---
 
@@ -208,9 +211,9 @@ Pré-cadrage
 
 | Champ | Contenu |
 |-------|---------|
-| Statut | **VALIDÉ PAR MORRIS** — 2026-07-19 — docs `20`/`21`/`22` |
-| Scénario | **S1** sélectionné (POC-G2) |
-| Gates | POC-G1…G6 + G10 **VALIDÉS** ; POC-G7…G9 **NON VALIDÉS** |
+| Statut | **VALIDÉ + INTÉGRÉ** — PR #219 / `be713c45…` — docs `20`/`21`/`22` |
+| Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7…G9 **FERMÉS** |
 | POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** — outil ouvert |
 | Ne lance pas | POC ; architecture ; backlog ; delivery ; MVP |
 
@@ -242,11 +245,11 @@ Pré-cadrage
 | D-NEXT-2g1 | Option B consolidation UX docs | Morris | **VALIDÉE** |
 | D-NEXT-2g2 | Lancement delivery P0 | Morris | **CLÔTURÉ** — PR #217 |
 | D-NEXT-2g3 | Commit/push/PR sync UX | Morris | **Historique** — intégré via trajectoire Delivery |
-| D-NEXT-2g4 | Orientation Option B — cadrage POC orchestration | Morris | **VALIDÉE** — sélectionnée, **non lancée** |
+| D-NEXT-2g4 | Orientation Option B — cadrage POC orchestration | Morris | **VALIDÉE + INTÉGRÉE** (PR #219) — POC **non lancé** |
 | D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
 | D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
-| D-NEXT-4 | Ordre conception / architecture / UX / Delivery | Morris | Jusqu’au Delivery P0 **terminé** ; prochain = cadrage POC |
-| D-NEXT-5 | Niveau de preuve préalable au POC | Morris | À traiter dans le cadrage POC |
+| D-NEXT-4 | Ordre conception / architecture / UX / Delivery | Morris | Jusqu’au cadrage POC **intégré** ; prochain = décision éventuelle POC-G7 |
+| D-NEXT-5 | Niveau de preuve préalable au POC | Morris | **Traité** dans le cadrage POC (G1–G6) — POC non lancé |
 | D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
 | D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
 | D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité | Non pris — à rouvrir au cadrage POC |
@@ -258,8 +261,10 @@ Pré-cadrage
 | D-NEXT-14 | GO commit / push / PR capitalisation | Morris | **FAIT** (PR #218) |
 | D-NEXT-15 | GO cadrage POC orchestration | Morris | **Consommée** — cadrage **VALIDÉ** 2026-07-19 |
 | D-NEXT-16 | Validation POC-CAND / POC-G1…G6 | Morris | **FAIT** — 2026-07-19 |
-| D-NEXT-17 | POC-G10 versionnement cadrage | Morris | **FAIT** — draft PR autorisée ; **merge non autorisé** |
+| D-NEXT-17 | POC-G10 versionnement cadrage | Morris | **CONSOMMÉ** — PR #219 **MERGED** (`be713c45…`) |
 | D-NEXT-18 | Architecture / delivery POC | Morris | **Fermée** — POC-G7…G9 non validés |
+| D-NEXT-19 | GO versionnement sync post-merge | Morris | **Requis** si modifications retenues — **non accordé** ici |
+| D-NEXT-20 | Ouverture éventuelle POC-G7 | Morris | **Possible** — **non ouverte** |
 
 ---
 
@@ -297,7 +302,7 @@ Pré-cadrage
 
 **AF-CAND-11B :** **VALIDÉE** — UX/UI clôturé. Delivery P0 **exécuté et clôturé** (PR #217).
 
-**Option B (Morris — capitalisation) :** prochaine orientation = **cadrage POC orchestration** — **non lancé**.
+**Option B (Morris — capitalisation) :** cadrage POC orchestration **VALIDÉ + INTÉGRÉ** (PR #219). POC **non lancé**.
 
 Clôture formelle architecture fonctionnelle **non prononcée**. MVP / industrialisation **non engagés**.
 
@@ -308,21 +313,21 @@ Clôture formelle architecture fonctionnelle **non prononcée**. MVP / industria
 | Gate proposé | Objet | Statut |
 |--------------|-------|--------|
 | **DF-G1** | Valider le cadrage détaillé documentaire | **VALIDÉ** (D-VAL-9) |
-| **DF-G2** | Sélectionner le prochain cycle | **FAIT** jusqu’à Delivery P0 ; prochain = cadrage POC (Option B) |
+| **DF-G2** | Sélectionner le prochain cycle | **FAIT** jusqu’à cadrage POC intégré |
 | **DF-G3** | Autoriser G7 (commit/push/draft PR) | **VALIDÉ** (D-VAL-10) — historique |
-| **DF-G4** | Autoriser définition détaillée du POC | **PROPOSÉ** — objet du prochain cadrage |
-| **DF-G5** | Autoriser démarrage du POC | **PROPOSÉ** |
+| **DF-G4** | Autoriser définition détaillée du POC | **Partiellement couvert** par cadrage POC (G1–G6) — architecture POC = POC-G7 |
+| **DF-G5** | Autoriser démarrage du POC | **PROPOSÉ** — non validé |
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G4+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage POC : **sélectionné**, non démarré.
+Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage POC : **validé + intégré**. POC-G7…G9 : **fermés**.
 
 ---
 
 ## 8. Questions Morris
 
-1. Autorisez-vous le **merge** de la draft PR de cadrage ? (distinct de POC-G10)
-2. Après post-merge : ouvrez-vous **POC-G7** (architecture POC) ?
+1. Autorisez-vous le **versionnement** de la synchronisation post-merge (commit / push / PR) ?
+2. Ouvrez-vous éventuellement **POC-G7** (architecture POC) — décision distincte ?
 3. Clôture formelle architecture fonctionnelle (toujours séparée) ?
 
 ---
@@ -331,7 +336,8 @@ Les gates DF-G4+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Critère | État |
 |---------|------|
-| Cadrage POC `20`–`22` | **VALIDÉ** 2026-07-19 |
+| Cadrage POC `20`–`22` | **VALIDÉ + INTÉGRÉ** (PR #219) |
+| POC-G10 | **CONSOMMÉ** |
 | POC lancé | **Non** |
 | POC-G7…G9 | **Fermés** |
 | MVP / industrialisation | **Non engagés** |
@@ -343,12 +349,13 @@ Les gates DF-G4+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Élément | Valeur |
 |---------|--------|
-| Cadrage | **VALIDÉ** |
-| Versionnement | Draft PR (POC-G10) |
-| Merge | **Non autorisé** |
+| Cadrage | **VALIDÉ + INTÉGRÉ** |
+| POC-G10 | **CONSOMMÉ** (PR #219) |
+| Merge #219 | **Fait Git** `be713c45…` |
 | POC | **Non lancé** |
+| POC-G7 | **Fermé** (décision possible future) |
 
-**Verdict :** `PR READINESS COMPLETE — DRAFT PR OPEN — MERGE NOT AUTHORIZED`
+**Verdict :** `POST-MERGE COMPLETE — POC FRAMING INTEGRATED — MORRIS DECISION REQUIRED`
 
 ---
 
@@ -356,10 +363,10 @@ Les gates DF-G4+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Document | Usage |
 |----------|-------|
-| [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Cadrage POC **VALIDÉ** |
-| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | S1 **SÉLECTIONNÉ** |
+| [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Cadrage POC **VALIDÉ + INTÉGRÉ** |
+| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | S1 contrat de cadrage |
 | [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates |
 | [11-functional-architecture.md](./11-functional-architecture.md) | AF-Option C / L0–L5 |
 | [app/README.md](./app/README.md) | Runtime P0 |
 
-*SFIA Studio — cadrage POC VALIDÉ 2026-07-19 — POC NON LANCÉ — merge non autorisé — Morris décide.*
+*SFIA Studio — cadrage POC VALIDÉ + INTÉGRÉ (PR #219) — POC NON LANCÉ — POC-G7 fermé — Morris décide.*
diff --git a/projects/sfia-studio/20-poc-orchestration-framing.md b/projects/sfia-studio/20-poc-orchestration-framing.md
index eddc56a..7429d49 100644
--- a/projects/sfia-studio/20-poc-orchestration-framing.md
+++ b/projects/sfia-studio/20-poc-orchestration-framing.md
@@ -8,15 +8,15 @@
 | **Profil** | Critical |
 | **Typologie** | DOC / EVOL (cadrage) |
 | **Baseline méthode** | SFIA v2.6 — Option C méthode (**inchangée**) |
-| **Branche** | `project/sfia-studio-poc-orchestration-framing` |
-| **Base** | `origin/main` @ `aa8dbd4606c52df7662276a99c873b4d93e001ba` |
-| **Statut document** | **VALIDÉ PAR MORRIS** — 2026-07-19 |
+| **Branche** | Historique : `project/sfia-studio-poc-orchestration-framing` ; sync : `capitalization/sfia-studio-poc-framing-post-merge` |
+| **Base / main** | `origin/main` @ `be713c45a63c243a4d75c51d27d215d05bb621f1` (PR #219) |
+| **Statut document** | **VALIDÉ PAR MORRIS** (2026-07-19) et **INTÉGRÉ** sur `main` — cycle de cadrage **terminé** |
 | **POC** | **Non lancé** |
 | **MVP / industrialisation** | **Non engagés** |
-| **Architecture Runtime** | **Non validée** — aucune technologie sélectionnée |
+| **Architecture Runtime** | **Non validée** — aucune technologie sélectionnée ; outil orchestrateur **ouvert** |
 | **Destinataire** | Morris |
 
-> Cadrage **validé** le **2026-07-19**. Cette validation **ne lance pas** le POC, **ne valide pas** l’architecture technique, **ne sélectionne pas** de Runtime et **ne définit pas** le MVP. POC-G7 / G8 / G9 restent **fermés**.
+> Cadrage **validé** le **2026-07-19** et **intégré** via PR [#219](https://github.com/mcleland147/sfia-workspace/pull/219) (`be713c45…`). Cette validation **ne lance pas** le POC, **ne valide pas** l’architecture technique, **ne sélectionne pas** de Runtime et **ne définit pas** le MVP. POC-G7 / G8 / G9 restent **fermés**. Critères = contrat de preuve, **pas** preuve réalisée.
 
 ### Décision Morris — validation du cadrage (2026-07-19)
 
@@ -24,12 +24,13 @@
 |---------|--------|
 | POC-CAND-01…06, 08, 10 | **VALIDÉES** |
 | POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** (orchestrateur local candidat ; outil ouvert) |
-| POC-CAND-09 / POC-G10 | **VALIDÉE** — commit / push / draft PR du cadrage |
+| POC-CAND-09 / POC-G10 | **VALIDÉE** puis **CONSOMMÉE** (PR #219 mergée) |
 | POC-G1…G6 | **VALIDÉS** |
-| POC-G7…G9 | **PROPOSÉS / NON VALIDÉS** |
+| POC-G7…G9 | **FERMÉS / NON VALIDÉS** |
 | Scénario | **S1** sélectionné |
 | Automatisation | L3 cible + L4* plafond chemin d’exécution ; L0 arbitrage ; L5 global interdit |
 | Git | Lecture réelle autorisée (futur POC) ; écritures distantes **simulées** |
+| Intégration | PR #219 **MERGED** — `be713c45a63c243a4d75c51d27d215d05bb621f1` |
 
 ---
 
@@ -41,7 +42,8 @@
 - Capitalisation post-P0 **INTÉGRÉE** (PR #218) — statut `p0-delivery-integrated-next-poc-orchestration-framing`.
 - Architecture fonctionnelle **VALIDÉE** / **INTÉGRÉE** — **AF-Option C** : Studio et orchestrateur déterministe **candidat séparés**.
 - Architecture technique P0 **VALIDÉE** — pas d’API, auth, BDD, Runtime contractuel en P0.
-- Décision Morris (2026-07-19) : **cadrage Option B VALIDÉ** (POC-G1…G6, POC-G10) — **POC non lancé**.
+- Décision Morris (2026-07-19) : **cadrage Option B VALIDÉ** (POC-G1…G6) — **POC non lancé**.
+- Intégration Git : PR #219 **MERGED** (`be713c45…`) — POC-G10 **consommé** ; cycle de cadrage **terminé**.
 
 ### 1.2 Formulation structurante (D-VAL-3 — inchangée)
 
@@ -293,18 +295,20 @@ Pas de plateforme de supervision industrialisée.
 
 ---
 
-## 14. Décisions Morris (état après 2026-07-19)
+## 14. Décisions Morris (état post-intégration PR #219)
 
 | Gate / CAND | Statut |
 |-------------|--------|
 | POC-G1…G6 | **VALIDÉS** |
-| POC-G10 | **VALIDÉ** (commit / push / draft PR cadrage) |
-| POC-G7…G9 | **NON VALIDÉS** |
+| POC-G10 | **VALIDÉ / CONSOMMÉ / INTÉGRÉ** (PR #219) |
+| POC-G7…G9 | **FERMÉS / NON VALIDÉS** |
 | POC-CAND-01…06, 08, 10 | **VALIDÉES** |
 | POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
-| POC-CAND-09 | **VALIDÉE** (via POC-G10) |
+| POC-CAND-09 | **VALIDÉE** puis **consommée** (via POC-G10 / #219) |
 
-**Prochaine étape après intégration du cadrage :** post-merge, puis décision **distincte** sur architecture POC ciblée (POC-G7) — **pas** de backlog/delivery direct.
+**Cycle de cadrage :** **terminé** (validé + intégré). Critères de succès/échec/abandon = contrat — **pas** preuve réalisée.
+
+**Prochaine décision Morris possible :** ouverture éventuelle de **POC-G7** (architecture POC ciblée) — **fermée** ici. Pas de backlog/delivery direct.
 
 **Toujours ouverts :** outil/techno orchestrateur ; harness vs UI ; clôture AF formelle ; MVP.
 
@@ -322,4 +326,4 @@ Pas de plateforme de supervision industrialisée.
 
 ---
 
-*Cadrage VALIDÉ PAR MORRIS 2026-07-19 — POC NON LANCÉ — POC-G7/G8/G9 fermés — Option C méthode préservée.*
+*Cadrage VALIDÉ + INTÉGRÉ (PR #219 / be713c45…) — cycle cadrage TERMINÉ — POC NON LANCÉ — POC-G7/G8/G9 fermés — outil orchestrateur ouvert.*
diff --git a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
index d640af0..f0871d4 100644
--- a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
+++ b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
@@ -6,7 +6,7 @@
 | **Document** | `21-poc-orchestration-scenario-and-boundaries.md` |
 | **Cycle** | 1 — Cadrage POC orchestration (Option B) |
 | **Profil** | Critical |
-| **Statut document** | **VALIDÉ PAR MORRIS** — 2026-07-19 — scénario **S1 SÉLECTIONNÉ** |
+| **Statut document** | **VALIDÉ PAR MORRIS** (2026-07-19) et **INTÉGRÉ** sur `main` (PR #219) — S1 = **contrat de cadrage** (**non exécuté**) |
 | **Complète** | [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) |
 | **POC** | **Non lancé** |
 
@@ -16,12 +16,12 @@
 
 | ID | Intitulé | Couverture preuve | Risque | Retenu ? |
 |----|----------|-------------------|--------|----------|
-| **S1** | Cycle DOC gouverné read-only (intention → gate → exécution Cursor lecture → pack → décision) | Git + GPT + Cursor + gates + stops | Faible | **SÉLECTIONNÉ / VALIDÉ PAR MORRIS** |
+| **S1** | Cycle DOC gouverné read-only (intention → gate → exécution Cursor lecture → pack → décision) | Git + GPT + Cursor + gates + stops | Faible | **SÉLECTIONNÉ / VALIDÉ / INTÉGRÉ** |
 | **S2** | Pre-check Git + détection divergence HEAD + stop + reprise lecture | Vérité Git / stops | Moyen | Non retenu |
-| **S3** | Allowlist orchestrateur + rejet d’écriture simulée hors contrat | Déterminisme négatif | Moyen | **Intégré à S1** (rejet obligatoire) |
+| **S3** | Allowlist orchestrateur + rejet d’écriture simulée hors contrat | Déterminisme négatif | Moyen | **Intégré à S1** (rejet obligatoire — exigence future du POC) |
 | **S4** | PR readiness locale sans push/PR/merge | Diff / review | Plus large | Reporté |
 
-**Décision Morris (POC-CAND-02 / POC-G2) — 2026-07-19 :** scénario **S1** sélectionné, avec **rejet obligatoire** d’une action hors allowlist (élément S3) dans le flux de preuve.
+**Décision Morris (POC-CAND-02 / POC-G2) — 2026-07-19 :** scénario **S1** sélectionné, avec **rejet obligatoire** d’une action hors allowlist (élément S3) dans le flux de preuve. Intégré sur `main` via PR #219. **S1 n’est pas exécuté.**
 
 ---
 
@@ -217,7 +217,9 @@ Le modèle d’état et le scénario restent un **contrat de cadrage**, pas une
 | Gate d’exécution | Avant Cursor | GO / CORRIGER / STOP |
 | Gate de clôture preuve | Après pack | CLOSING / ITERATE / ABANDON |
 
-Les gates produit POC-G1…G6 et POC-G10 sont **VALIDÉS** (2026-07-19). POC-G7…G9 restent **NON VALIDÉS**.
+Les gates produit POC-G1…G6 sont **VALIDÉS** (2026-07-19). POC-G10 est **CONSOMMÉ** (PR #219). POC-G7…G9 restent **FERMÉS / NON VALIDÉS**.
+
+UI Studio versus harness : **réserve d’architecture** (ouverte pour un futur cycle POC-G7 — **non ouvert** ici).
 
 ---
 
@@ -294,4 +296,4 @@ L’UI P0 **n’est pas** l’orchestrateur. Branchement réel UI↔orchestrateu
 
 ---
 
-*Scénario S1 SÉLECTIONNÉ / VALIDÉ PAR MORRIS 2026-07-19 — POC NON LANCÉ — techno Runtime ouverte — Morris décide (POC-G7+).*
+*Scénario S1 VALIDÉ + INTÉGRÉ (PR #219) comme contrat de cadrage — NON EXÉCUTÉ — POC NON LANCÉ — rejet allowlist = exigence future — techno Runtime ouverte — Morris décide (POC-G7 fermé).*
diff --git a/projects/sfia-studio/22-poc-orchestration-decision-pack.md b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
index 472194a..416f0b7 100644
--- a/projects/sfia-studio/22-poc-orchestration-decision-pack.md
+++ b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
@@ -4,25 +4,26 @@
 |------------|--------|
 | **Projet** | SFIA Studio |
 | **Document** | `22-poc-orchestration-decision-pack.md` |
-| **Cycle** | 1 — Cadrage POC orchestration (Option B) |
-| **Profil** | Critical |
-| **Statut document** | **VALIDÉ PAR MORRIS** — 2026-07-19 |
+| **Cycle** | 1 — Cadrage POC orchestration (Option B) ; sync post-merge cycle 14 |
+| **Profil** | Critical (cadrage) / Standard (post-merge sync) |
+| **Statut document** | **VALIDÉ PAR MORRIS** (2026-07-19) et **INTÉGRÉ** sur `main` (PR #219) |
 | **Préfixe décisions** | `POC-CAND-*` — identifiants locaux (même après validation) |
 | **D-VAL nouvelles** | **Aucune** |
 | **POC** | **Non lancé** |
 | **Destinataire** | Morris |
 
-> Décision Morris du **2026-07-19** : validation du cadrage Option B. POC-G7 / G8 / G9 **fermés**. Aucune architecture Runtime / techno sélectionnée. Aucun merge autorisé par ce pack seul (POC-G10 = draft PR).
+> Décision Morris du **2026-07-19** : validation du cadrage Option B. Intégration Git : PR [#219](https://github.com/mcleland147/sfia-workspace/pull/219) **MERGED** (`be713c45…`). POC-G7 / G8 / G9 **fermés**. Aucune architecture Runtime / techno sélectionnée. Aucune décision d’architecture POC prise. POC **non lancé**.
 
 ---
 
 ## 1. Observations factuelles
 
 1. Delivery P0 clôturé (PR #217) ; capitalisation intégrée (PR #218).
-2. Cadrage Option B produit puis **validé Morris 2026-07-19**.
+2. Cadrage Option B produit, **validé Morris 2026-07-19**, puis **intégré** (PR #219).
 3. AF-Option C **VALIDÉE** (fond) et **opérationnalisée** pour le POC (POC-CAND-03).
 4. Baseline SFIA v2.6 / Option C méthode **inchangée**.
 5. POC / MVP / industrialisation **non engagés**.
+6. POC-G10 **consommé** par le versionnement et le merge du cadrage.
 
 ---
 
@@ -38,7 +39,7 @@ Les options A/B/C de séquencement et S1–S4 / L-levels restent documentées co
 
 ---
 
-## 6. Décisions POC-CAND — état Morris 2026-07-19
+## 6. Décisions POC-CAND — état post-intégration PR #219
 
 > Identifiants locaux au cadrage. **Aucune D-VAL nouvelle.**
 
@@ -52,12 +53,12 @@ Les options A/B/C de séquencement et S1–S4 / L-levels restent documentées co
 | **POC-CAND-06** | Critères succès / échec / abandon acceptés | **VALIDÉE** |
 | **POC-CAND-07** | Orchestrateur local déterministe = hypothèse candidate ; outil/techno/forme **ouverts** ; aucune archi Runtime validée | **VALIDÉE AVEC RÉSERVE** |
 | **POC-CAND-08** | Après intégration cadrage → prochaine étape candidate = **architecture POC ciblée** ; pas de backlog/delivery direct | **VALIDÉE** |
-| **POC-CAND-09** | Commit / push / **draft PR** du cadrage (via POC-G10) | **VALIDÉE** |
+| **POC-CAND-09** | Commit / push / draft PR du cadrage (via POC-G10) | **VALIDÉE** puis **consommée** (PR #219) |
 | **POC-CAND-10** | Aucun lancement POC tant que gates nécessaires non ouverts explicitement | **VALIDÉE** |
 
 ---
 
-## 7. Gates Morris — état 2026-07-19
+## 7. Gates Morris — état post-intégration PR #219
 
 | Gate | Objet | Statut |
 |------|-------|--------|
@@ -67,43 +68,44 @@ Les options A/B/C de séquencement et S1–S4 / L-levels restent documentées co
 | **POC-G4** | Niveau maximal d’automatisation | **VALIDÉ** |
 | **POC-G5** | Lecture Git réelle ; écritures distantes simulées | **VALIDÉ** |
 | **POC-G6** | Critères succès / échec / abandon | **VALIDÉ** |
-| **POC-G7** | Architecture POC candidate | **PROPOSÉ / NON VALIDÉ** |
-| **POC-G8** | Backlog POC | **PROPOSÉ / NON VALIDÉ** |
-| **POC-G9** | Delivery POC | **PROPOSÉ / NON VALIDÉ** |
-| **POC-G10** | Commit / push / draft PR du cadrage | **VALIDÉ** |
+| **POC-G7** | Architecture POC candidate | **FERMÉ / NON VALIDÉ** |
+| **POC-G8** | Backlog POC | **FERMÉ / NON VALIDÉ** |
+| **POC-G9** | Delivery POC | **FERMÉ / NON VALIDÉ** |
+| **POC-G10** | Commit / push / draft PR du cadrage | **VALIDÉ / CONSOMMÉ / INTÉGRÉ** (PR #219) |
 
-**Cette décision n’autorise pas le merge** de la draft PR — merge = GO Morris distinct.
+**Merge #219 = fait Git.** N’ouvre **pas** POC-G7. N’autorise **pas** le lancement du POC.
 
 ---
 
 ## 8. Impacts
 
-Cadrage validé → versionnement autorisé (draft PR) → après merge/post-merge : décision distincte sur **POC-G7** uniquement. Pas de shortcut delivery.
+Cadrage validé + intégré → cycle de cadrage **clôturable** documentairement → prochaine décision Morris **possible** : ouverture éventuelle de **POC-G7** uniquement. Pas de shortcut backlog/delivery. Versionnement de la sync post-merge = GO distinct.
 
 ---
 
 ## 9. Dette / ouverts
 
 - Outil / forme orchestrateur (réserve POC-CAND-07)
-- Harness vs UI P0
+- Harness vs UI P0 (réserve d’architecture)
 - Allowlist chemins détaillée (architecture)
 - Clôture formelle AF
 - MVP / industrialisation / réserves P0
+- GO versionnement sync post-merge (si retenue)
 
 ---
 
 ## 10. Séquence après intégration du cadrage
 
 ```text
-Draft PR cadrage (POC-G10) — EN COURS
-  → GO merge (décision distincte)
-  → post-merge cadrage
-  → décision distincte architecture POC ciblée (POC-G7)
+Cadrage validé (2026-07-19)
+  → POC-G10 consommé — PR #219 MERGED (be713c45…)
+  → post-merge sync documentaire (cycle 14 — local)
+  → décision distincte éventuelle architecture POC (POC-G7) — FERMÉE
   → (plus tard) backlog POC (POC-G8) → delivery POC (POC-G9)
   → décision post-POC : abandon / itération / préparation MVP
 ```
 
-POC-G7 / G8 / G9 **non ouverts**.
+POC-G7 / G8 / G9 **non ouverts**. Aucune architecture POC prise. Aucun lancement POC.
 
 ---
 
@@ -111,15 +113,16 @@ POC-G7 / G8 / G9 **non ouverts**.
 
 | Élément | Valeur |
 |---------|--------|
-| Cadrage | **VALIDÉ PAR MORRIS** — 2026-07-19 |
+| Cadrage | **VALIDÉ + INTÉGRÉ** (PR #219) |
+| POC-G10 | **CONSOMMÉ** |
 | POC lancé | **Non** |
+| Architecture / backlog / delivery POC | **Non lancés** |
 | POC-G7…G9 | **Fermés** |
-| Runtime / techno | **Non sélectionnés** |
-| Versionnement | **Autorisé** (draft PR) |
-| Merge | **Non autorisé** |
+| Runtime / techno | **Non sélectionnés** (outil ouvert) |
+| Prochaine décision Morris possible | Ouverture éventuelle de **POC-G7** |
 
-**Verdict PR readiness :** `PR READINESS COMPLETE — DRAFT PR OPEN — MERGE NOT AUTHORIZED`
+**Verdict post-merge :** `POST-MERGE COMPLETE — POC FRAMING INTEGRATED — MORRIS DECISION REQUIRED`
 
 ---
 
-*Decision pack VALIDÉ 2026-07-19 — POC NON LANCÉ — merge non autorisé.*
+*Decision pack VALIDÉ + INTÉGRÉ (PR #219) — POC-G10 CONSOMMÉ — POC NON LANCÉ — POC-G7 fermé.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 68843ae..40bd185 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,20 +4,20 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-orchestration-framing-validated-draft-pr` — cadrage Option B **VALIDÉ PAR MORRIS** (2026-07-19) ; versionnement autorisé (POC-G10) ; POC **non lancé** ; POC-G7…G9 **fermés** |
+| **Statut** | `poc-orchestration-framing-post-merge-integrated` — cadrage Option B **VALIDÉ** et **INTÉGRÉ** (PR #219) ; POC **non lancé** ; POC-G7…G9 **fermés** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — PR readiness cadrage POC (DOC, Critical) |
-| **Typologie cycle** | DOC / EVOL — PR readiness Critical |
-| **Cycle projet** | 13 — PR readiness ; cadrage POC **validé** ; Delivery P0 **clôturé** |
-| **Profil SFIA** | Critical |
-| **Branche cadrage POC** | `project/sfia-studio-poc-orchestration-framing` |
-| **Base canonique** | `origin/main` @ `aa8dbd4606c52df7662276a99c873b4d93e001ba` |
+| **Exécuteur** | Cursor — Post-merge cadrage POC (DOC / CAPA légère, Standard) |
+| **Typologie cycle** | DOC / CAPA légère — Post-merge Standard |
+| **Cycle projet** | 14 — Post-merge ; cadrage POC **validé + intégré** ; Delivery P0 **clôturé** |
+| **Profil SFIA** | Standard (post-merge) ; historique cadrage Critical |
+| **Branche post-merge** | `capitalization/sfia-studio-poc-framing-post-merge` (**locale**, non poussée) |
+| **Base canonique** | `origin/main` @ `be713c45a63c243a4d75c51d27d215d05bb621f1` |
 | **Chemin** | `projects/sfia-studio/` |
 | **AF-Option C** | **VALIDÉE** + **opérationnalisée** pour le POC (POC-CAND-03) |
-| **Cadrage POC** | `20`–`22` — **VALIDÉS** ; POC-CAND-01…10 selon décision 2026-07-19 ; POC-G1…G6 + G10 **VALIDÉS** |
-| **POC** | **Non lancé** — POC-G7 / G8 / G9 **NON VALIDÉS** |
-| **Prochain cycle** | Après intégration : décision distincte **architecture POC** (POC-G7) — **non lancé** ; MVP / industrialisation **non engagés** |
+| **Cadrage POC** | `20`–`22` — **VALIDÉS et INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
+| **POC** | **Non lancé** — architecture / backlog / delivery POC **non lancés** |
+| **Prochaine décision possible** | Ouverture éventuelle de **POC-G7** (architecture POC) — **toujours fermé** ; MVP / industrialisation **non engagés** |
 
 ---
 
@@ -43,15 +43,15 @@
 | App sur `main` | Disponible — desktop 1440×1024 ; pas d’API / auth / BDD / orchestration réelle |
 | Git / Cursor / Runtime | **Simulés ou désactivés** en P0 |
 | Produit complet / MVP / industrialisation | **Non atteints** |
-| Cadrage POC orchestration (Option B) | **VALIDÉ PAR MORRIS** — 2026-07-19 — docs `20`–`22` ; POC **non lancé** |
-| Scénario | **S1** sélectionné (POC-G2) |
+| Cadrage POC orchestration (Option B) | **VALIDÉ** et **INTÉGRÉ** — PR [#219](https://github.com/mcleland147/sfia-workspace/pull/219) ; merge `be713c45…` |
+| Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
 | Automatisation | L3 + L4* / L0 — L5 global interdit (POC-G4) |
 | Git futur POC | Lecture réelle OK ; écritures distantes **simulées** (POC-G5) |
-| Gates | POC-G1…G6 + G10 **VALIDÉS** ; POC-G7…G9 **fermés** |
-| Branche cadrage | `project/sfia-studio-poc-orchestration-framing` |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7…G9 **fermés** |
+| Branche cadrage | `project/sfia-studio-poc-orchestration-framing` (**conservée**) |
 | Branches historiques | `functional-design`, `pre-framing`, `functional-architecture` **conservées** |
 
-> Cadrage **validé** ; versionnement (draft PR) **autorisé** ; **merge non autorisé** ; POC **non lancé**.
+> Cadrage **validé et intégré** sur `main`. POC **non lancé**. Architecture / backlog / delivery POC **non lancés**. POC-G7 = décision distincte future.
 
 ---
 
@@ -127,14 +127,15 @@ Pré-cadrage
   → PR #217 / intégration main
   → post-merge / cleanup
   → capitalisation P0 (PR #218)
-  → cadrage POC orchestration          ← **VALIDÉ** Morris 2026-07-19 (`20`–`22`) — POC non lancé
-  → architecture POC ciblée             ← prochaine décision possible (POC-G7) — **non lancée**
-  → backlog POC borné                   ← candidate (POC-G8 fermé)
-  → delivery POC                        ← candidate (POC-G9 fermé)
+  → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219 / `be713c45…`) — POC non lancé
+  → post-merge sync documentaire       ← cycle 14 — **en cours local** (non versionné)
+  → architecture POC ciblée             ← prochaine décision **possible** (POC-G7) — **fermée**
+  → backlog POC borné                   ← POC-G8 **fermé**
+  → delivery POC                        ← POC-G9 **fermé**
   → décision Morris : abandon / itération / préparation MVP
 ```
 
-Cadrage POC : **validé**. Architecture / backlog / delivery POC : **non lancés**. MVP / industrialisation : **non engagés**.
+Cadrage POC : **validé et intégré**. Architecture / backlog / delivery POC : **non lancés**. MVP / industrialisation : **non engagés**.
 
 ---
 
@@ -206,15 +207,22 @@ Cadrage POC : **validé**. Architecture / backlog / delivery POC : **non lancés
 
 > Delivery P0 **CLÔTURÉ**. Aucune API, auth, BDD ni orchestration réelle. Git / Cursor / Runtime **simulés**. Cadrage POC Option B : documents `20`–`22` **VALIDÉS** (2026-07-19) — POC **non lancé**.
 
-### Cadrage POC orchestration — VALIDÉ (Option B — 2026-07-19)
+### Cadrage POC orchestration — VALIDÉ et INTÉGRÉ (PR #219)
 
 | Document | Rôle |
 |----------|------|
-| [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Problème, objectif, contraintes, critères — **VALIDÉ** |
-| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario **S1** sélectionné, frontières — **VALIDÉ** |
-| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates — **VALIDÉ** (G7–G9 fermés) |
+| [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Problème, objectif, contraintes, critères — **VALIDÉ + INTÉGRÉ** |
+| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario **S1** contrat de cadrage — **VALIDÉ + INTÉGRÉ** (**non exécuté**) |
+| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates — **VALIDÉ + INTÉGRÉ** (G7–G9 fermés) |
 
-> POC **non lancé**. Runtime / techno **non sélectionnés**. Merge draft PR = GO distinct.
+| Fait Git | Valeur |
+|----------|--------|
+| PR | [#219](https://github.com/mcleland147/sfia-workspace/pull/219) — **MERGED** (squash) |
+| Merge | `be713c45a63c243a4d75c51d27d215d05bb621f1` |
+| Titre | `docs(sfia-studio): validate POC orchestration framing (#219)` |
+| POC-G10 | **CONSOMMÉ** |
+
+> POC **non lancé**. Runtime / techno **ouverts** (non sélectionnés). POC-G7 = décision distincte future (**fermée**).
 
 ---
 
@@ -314,7 +322,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Sync #212 + finalisation #213 | **INTÉGRÉES** |
 | Clôture formelle cycle architecture | **Non** — non automatique |
 | Sort des branches historiques | Conservées ; décisions distinctes |
-| Contenu / architecture du POC orchestration | Cadrage **VALIDÉ** 2026-07-19 ; architecture POC (POC-G7) **non ouverte** |
+| Contenu / architecture du POC orchestration | Cadrage **VALIDÉ + INTÉGRÉ** (PR #219) ; architecture POC (POC-G7) **fermée** |
 | Définition MVP | **Non pris** |
 | Industrialisation | **Non engagée** |
 | Responsive / a11y complète / CI GitHub | **Ouverts** (réserves P0) |
@@ -325,19 +333,18 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 ### Orientation Morris — Option B (POC orchestration)
 
-> Cadrage **VALIDÉ** le **2026-07-19**. Scénario **S1**. L3+L4*/L0. Écritures distantes simulées. Orchestrateur local **avec réserve** (outil ouvert).
-> **POC non lancé.** Prochaine décision possible après intégration : **POC-G7** architecture POC ciblée.
+> Cadrage **VALIDÉ** (2026-07-19) et **INTÉGRÉ** (PR #219 / `be713c45…`). Scénario **S1**. L3+L4*/L0. Écritures distantes simulées. Orchestrateur local **avec réserve** (outil ouvert).
+> **POC non lancé.** Prochaine décision **possible** (≠ autorisée) : **POC-G7** architecture POC ciblée — **fermée**.
 
 ---
 
 ## 8. Prochaine décision
 
-1. Revue / merge de la draft PR de cadrage (**GO merge distinct**).
-2. Post-merge du cadrage.
-3. Décision distincte **POC-G7** (architecture POC) — **non ouverte**.
-4. Clôture formelle architecture fonctionnelle (toujours séparée).
+1. GO versionnement de la sync post-merge (commit / push / PR) — **non accordé** par ce cycle.
+2. Décision distincte éventuelle **POC-G7** (architecture POC) — **fermée**.
+3. Clôture formelle architecture fonctionnelle (toujours séparée).
 
-**Verdict documentaire :** `PR READINESS COMPLETE — DRAFT PR OPEN — MERGE NOT AUTHORIZED`
+**Verdict documentaire :** `POST-MERGE COMPLETE — POC FRAMING INTEGRATED — MORRIS DECISION REQUIRED`
 
 ---
 
@@ -346,10 +353,10 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Élément | Source |
 |---------|--------|
 | Méthode | SFIA v2.6 — Option C méthode |
-| Socle intégré | `main` @ `aa8dbd4…` |
-| Cadrage POC validé | `20`–`22` sur `project/sfia-studio-poc-orchestration-framing` |
+| Socle intégré | `main` @ `be713c45…` (PR #219) |
+| Cadrage POC | `20`–`22` **validés et intégrés** sur `main` |
 | Handoff | `sfia/review-handoff` |
 
 ---
 
-*SFIA Studio — cadrage POC VALIDÉ 2026-07-19 — POC NON LANCÉ — POC-G7/G8/G9 fermés — merge non autorisé — Morris décide.*
+*SFIA Studio — cadrage POC VALIDÉ + INTÉGRÉ (PR #219) — POC NON LANCÉ — POC-G7/G8/G9 fermés — Morris décide.*
```

---

## 7. Validations avant staging

| Validation | Résultat |
|------------|----------|
| `git diff --check` | PASS |
| Exactement 5 fich## 8. Staged / commit / push / draft PR

### 8.1 Staged (vérifié)

```
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/20-poc-orchestration-framing.md
M	projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
M	projects/sfia-studio/22-poc-orchestration-decision-pack.md
M	projects/sfia-studio/README.md
```

`git diff --cached --check` : PASS  
Stat : 5 files changed, 142 insertions(+), 119 deletions(-)

### 8.2 Commit

| Champ | Valeur |
|-------|--------|
| SHA | `472d5fe5a2557a2ca008fc7a4b1e0ab1dab79578` |
| Message | `docs(sfia-studio): synchronize POC framing post-merge status` |
| HEAD avant | `be713c45a63c243a4d75c51d27d215d05bb621f1` |
| HEAD après | `472d5fe5a2557a2ca008fc7a4b1e0ab1dab79578` |

### 8.3 Push

| Champ | Valeur |
|-------|--------|
| Branche remote | `origin/capitalization/sfia-studio-poc-framing-post-merge` |
| SHA remote | `472d5fe5a2557a2ca008fc7a4b1e0ab1dab79578` (`git ls-remote` confirmé) |

### 8.4 Draft PR

| Champ | Valeur |
|-------|--------|
| Numéro | **#220** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/220 |
| Base | `main` |
| Head | `capitalization/sfia-studio-poc-framing-post-merge` |
| État | **DRAFT** (`isDraft: true`) |
| Merged | **false** |

Horodatage finalisation : 2026-07-19 13:04:15 CEST

---

## 9. Réserves

1. POC-CAND-07 — outil/techno/forme ouverts.
2. UI Studio vs harness — réserve d'architecture.
3. Merge de #220 = GO Morris distinct.
4. POC-G7 fermé — ouverture = décision distincte.
5. Clôture AF formelle toujours ouverte.

---

## 10. Actions interdites restantes

- merge #220
- ouverture POC-G7 / G8 / G9
- architecture / backlog / delivery POC
- lancement POC
- choix Runtime
- suppression branche
- clôture formelle AF

---

## 11. Verdict

**`PR READINESS COMPLETE WITH RESERVES — POST-MERGE SYNC DRAFT PR OPEN — MERGE NOT AUTHORIZED`**

Ce cycle versionne uniquement la sync post-merge. Il **n'ouvre pas** POC-G7, **ne lance pas** le POC, et **n'autorise pas** le merge.
