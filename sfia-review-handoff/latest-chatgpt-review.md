# ChatGPT Review Pack — SFIA Studio POC Option B — Cycle 13 PR Readiness Critical

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-19 14:27:44 CEST |
| **Cycle** | 13 — PR readiness |
| **Profil** | Critical — architecture structurante Option B / POC-G7 / gates / fail-closed |
| **Décision Morris** | GO commit + push + draft PR — architecture POC Option B minimale |
| **Branche** | `architecture/sfia-studio-poc-orchestration` |
| **HEAD avant** | `b882892d79709acd0637d0df872c16bbe16d7ed1` |
| **HEAD après** | `7736fac4e274afae21565af9dd2b625b316b72d8` |
| **origin/main** | `b882892d79709acd0637d0df872c16bbe16d7ed1` |
| **merge-base** | `b882892d79709acd0637d0df872c16bbe16d7ed1` |
| **Draft PR** | [#221](https://github.com/mcleland147/sfia-workspace/pull/221) |
| **Niveau** | **full** |
| **Merge** | **NON AUTORISÉ** |

---

## 1. Local Git Truth Check

| Check | Résultat |
|-------|----------|
| Branche | `architecture/sfia-studio-poc-orchestration` PASS |
| HEAD initial = origin/main | `b882892d79709acd0637d0df872c16bbe16d7ed1` PASS |
| merge-base | `b882892d79709acd0637d0df872c16bbe16d7ed1` PASS |
| Staged initial | vide PASS |
| Branche distante initiale | absente PASS |
| Après fetch origin/main | inchangé PASS |
| Hors périmètre / app/** | aucun PASS |

**Verdict Truth Check :** PASS

---

## 2. Review Handoff initial consulté

| Champ | Valeur |
|-------|--------|
| Branche | `sfia/review-handoff` |
| SHA | `d13be420e8894ccb80276eb03916a7a370930c05` |
| Cycle | 9 QA corrective Critical |
| Contenu | Option B minimale ; POC-G7 VALIDÉ AVEC RÉSERVES ; 23/24/25 complets ; ARCH-POC-CAND-01…12 ; G8/G9 fermés ; POC non lancé ; versionnement attendu ; pas de merge |

**Handoff initial :** COMPLET

---

## 3. Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md` (méthode)
- Handoff Cycle 9 (`d13be42`)
- Huit documents projet `projects/sfia-studio/` (README, 07, 20–25)

---

## 4. Fichiers

### Modifiés (5)

- `projects/sfia-studio/README.md`
- `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`
- `projects/sfia-studio/20-poc-orchestration-framing.md`
- `projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md`
- `projects/sfia-studio/22-poc-orchestration-decision-pack.md`

### Créés (3)

- `projects/sfia-studio/23-poc-orchestration-technical-architecture.md`
- `projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md`
- `projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md`

**Total :** 8 fichiers projet — 655 insertions / 222 deletions

---

## 5. État Option A / B / C

| Option | Statut |
|--------|--------|
| **B minimale** | **RETENUE / VALIDÉE** — Studio cockpit + adaptateur fin + harness autonome |
| **A** | Mode test / diagnostic / dégradé — **conservée** (non rejetée) |
| **C** | **Écartée** pour le premier POC |

B = extension de A (cœur harness) — **pas** Option C.

---

## 6. Architecture Option B

```
Morris → Studio (cockpit) → adaptateur fin → harness autonome
  → GateValidator → PolicyEngine → GitReaderPort → CursorExecutorPort
  → EventJournal / ProofStore → vues Studio
```

### Frontières

| Composant | Rôle | Interdit |
|-----------|------|----------|
| Studio | Intention, GO/STOP explicites, suivi, preuves | Orch., Git/Cursor directs, vérité exclusive |
| Adaptateur | Transmission, corrélation, enveloppes | Autorité, policy, exécution, vérité durable |
| Harness | Gates, policies, état, Git, Cursor, journal, preuves | Contournable par UI |

---

## 7. Contrats / sécurité

Contrats `24` : StudioIntent · StudioGateSubmission · StudioStopRequest · AdapterEnvelope · StudioExecutionView

Invariants : harness revalide tout ; contractHash obligatoire pour GO ; timeout ≠ GO ; STOP prioritaire ; UI ≠ vérité ; harness testable sans Studio.

Menaces : falsification GO UI · replay · désync · élévation scope · injection · hash · contournement harness · exposition preuves.

---

## 8. ARCH-POC-CAND-01…12

| ID | Statut |
|----|--------|
| 01 Option B minimale | VALIDÉE |
| 02 Écarter Option C (1er POC) | VALIDÉE |
| 03 Option A = test/dégradé | VALIDÉE |
| 04 Processus local ; techno ouverte | VALIDÉE AVEC RÉSERVE |
| 05 CursorExecutorPort | VALIDÉE AVEC RÉSERVE |
| 06 Git read ; none-remote | VALIDÉE |
| 07 Contrats 24 | VALIDÉE AVEC RÉSERVE |
| 08 Journal/preuves | VALIDÉE |
| 09 app/** delivery borné | VALIDÉE AVEC RÉSERVE |
| 10 Prochaine porte = POC-G8 (après intégration) | VALIDÉE |
| 11 Archi POC ≠ Runtime ; L4* | VALIDÉE |
| 12 Versionnement = GO distinct | VALIDÉE |

---

## 9. Gates / POC

| Gate | Statut |
|------|--------|
| POC-G1…G6 | VALIDÉS |
| **POC-G7** | **VALIDÉ AVEC RÉSERVES** |
| POC-G8 | **FERMÉ** |
| POC-G9 | **FERMÉ** |
| POC-G10 | CONSOMMÉ |
| POC | **NON LANCÉ** |
| Merge | **NON AUTORISÉ** |
| Backlog / Delivery | **NON AUTORISÉS** |

---

## 10. Réserves

1. Cursor réel non prouvé
2. Technologie harness ouverte
3. Protocole adaptateur ouvert
4. Allowlist détaillée reportée
5. `app/**` uniquement delivery futur borné
6. QA absence seconde vérité Studio
7. Clôture AF séparée
8. POC-G8/G9 fermés

---

## 11. Recherche textuelle qualifiée

Commande : `rg` Option A/B/C, POC-G7/8/9, READY FOR BACKLOG/DELIVERY, POC LAUNCHED, Runtime/protocole valid, app/**, architecture candidate/valid, versionnement

| Qualification | Résultat |
|---------------|----------|
| Historique conservé | AF-Option C ; Option C méthode ; Option A mode test |
| État actuel correct | Option B minimale RETENUE ; G7 VALIDÉ AVEC RÉSERVES ; G8/G9 FERMÉS |
| Formulation interdite | **Aucune** (seule mention « ≠ READY FOR BACKLOG » = négation correcte) |
| Réserve | Cursor / techno / protocole / allowlist / app/** |

Anti-dérive : PASS — pas de dérive Option C ; pas de G8/G9 ouverts ; pas de POC lancé.

---

## 12. Validations avant staging

| Check | Résultat |
|-------|----------|
| `git diff --check` | PASS |
| 5M + 3A | PASS |
| Aucune suppression | PASS |
| Aucun app/** / code | PASS |
| Aucun staged initial | PASS |
| Docs 23/24/25 présents et complets | PASS (203/168/144 lignes) |

---

## 13. Staged diff (stat + name-status)

```
7736fac docs(sfia-studio): document POC Option B architecture
 .../07-product-trajectory-and-decision-pack.md     | 101 +++++-----
 .../sfia-studio/20-poc-orchestration-framing.md    |  50 +++--
 ...21-poc-orchestration-scenario-and-boundaries.md |  10 +-
 .../22-poc-orchestration-decision-pack.md          | 125 +++----------
 .../23-poc-orchestration-technical-architecture.md | 203 +++++++++++++++++++++
 ...tration-contracts-security-and-observability.md | 168 +++++++++++++++++
 ...poc-orchestration-architecture-decision-pack.md | 144 +++++++++++++++
 projects/sfia-studio/README.md                     |  76 ++++----
 8 files changed, 655 insertions(+), 222 deletions(-)

7736fac docs(sfia-studio): document POC Option B architecture
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/20-poc-orchestration-framing.md
M	projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
M	projects/sfia-studio/22-poc-orchestration-decision-pack.md
A	projects/sfia-studio/23-poc-orchestration-technical-architecture.md
A	projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
A	projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
M	projects/sfia-studio/README.md
```

### Diff complet du commit

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 506595e..8f02a8d 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,15 +4,15 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 9 — QA corrective (sync post-merge versionnée) ; historique post-merge / PR readiness conservé |
-| **Profil** | Standard |
+| **Cycle** | 9 — QA corrective Option B ; historique archi POC-G7 conservé |
+| **Profil** | Critical |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | `poc-orchestration-framing-post-merge-integrated` ; sync **versionnée** ; draft PR #220 **ouverte** ; merge **non effectué** ; POC **non lancé** ; POC-G7…G9 **fermés** |
-| **Décisions** | POC-CAND-01…10 selon Morris 2026-07-19 ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; D-VAL/FD/AF/TA historiques inchangés |
+| **Statut** | POC-G7 **VALIDÉ AVEC RÉSERVES** ; Option B minimale ; docs **non versionnés** ; POC **non lancé** ; G8/G9 **fermés** |
+| **Décisions** | ARCH-POC-CAND-01…12 selon Morris ; POC-CAND cadrage inchangés |
 | **Destinataire** | Morris |
-| **Source de vérité** | `origin/main` @ `be713c45a63c243a4d75c51d27d215d05bb621f1` ; branche **poussée** `capitalization/sfia-studio-poc-framing-post-merge` ; draft PR #220 |
+| **Source de vérité** | `origin/main` @ `b882892…` ; branche locale `architecture/sfia-studio-poc-orchestration` |
 
-> Cadrage POC **VALIDÉ** (2026-07-19) et **INTÉGRÉ** (PR #219 / `be713c45…`). POC-G10 **consommé**. Sync post-merge **versionnée** (commit + push + draft PR #220). **Merge #220 non autorisé**. POC **non lancé**. Architecture POC (POC-G7) **fermée**.
+> Architecture **Option B minimale** validée avec réserves. Harness autonome + Studio cockpit + adaptateur fin. Versionnement = GO distinct. POC-G8 **fermé**. POC **non lancé**.
 
 ---
 
@@ -34,17 +34,13 @@
 | Branche Delivery | **Supprimée** (local + remote) |
 | Gate Morris Delivery P0 | **Aucune restante** |
 | App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
-| Prochaine orientation | Sync post-merge **versionnée** (PR #220 draft) ; prochaine décision = **GO merge #220** ou, après intégration, éventuel **POC-G7** — **fermé** |
-| Produit complet / MVP / industrialisation | **Non atteints / non engagés** |
-| Décision Morris cadrage | **2026-07-19** — POC-G1…G6 **VALIDÉS** ; S1 ; L3+L4*/L0 ; writes distantes simulées |
-| Intégration cadrage | **Fait Git** — PR #219 MERGED ; `be713c45…` ; POC-G10 **CONSOMMÉ** |
-| Sync post-merge | **Versionnée** — commit + push + draft PR #220 ; merge **non effectué** |
-| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** — outil orchestrateur ouvert |
-| Branche cadrage POC | `project/sfia-studio-poc-orchestration-framing` (**conservée**) |
-| Branche post-merge | `capitalization/sfia-studio-poc-framing-post-merge` (**poussée**) ; PR #220 |
-| Branches historiques | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |
-
-> Cadrage **validé + intégré** ≠ POC lancé ≠ architecture validée ≠ merge #220 autorisé. GO commit / push / draft PR **consommé**.
+| Prochaine orientation | GO **versionnement** archi Option B — **non accordé** ; POC-G8 après intégration — **fermé** |
+| Architecture POC | **Option B minimale** — POC-G7 **VALIDÉ AVEC RÉSERVES** ; non versionnée |
+| Sync post-merge | **MERGED** — PR #220 / `b882892…` |
+| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
+| Branche architecture | `architecture/sfia-studio-poc-orchestration` (**locale**) |
+
+> Option B ≠ Option C. Harness autonome. Studio cockpit. Adaptateur sans autorité. POC non lancé.
 
 ### Trace factuelle — Delivery P0 (historique compact)
 
@@ -121,8 +117,8 @@ Pré-cadrage
   → post-merge / cleanup
   → capitalisation P0 (PR #218)
   → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219) — POC non lancé
-  → post-merge sync documentaire       ← **versionnée** ; draft PR #220 ouverte ; merge = GO Morris distinct
-  → architecture POC ciblée             ← prochaine décision **possible** (POC-G7) — **fermée**
+  → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
+  → architecture POC ciblée             ← POC-G7 **VALIDÉ AVEC RÉSERVES** — Option B minimale — **non versionnée**
   → backlog POC borné                   ← POC-G8 fermé
   → delivery POC                        ← POC-G9 fermé
   → décision Morris : abandon / itération / préparation MVP
@@ -130,16 +126,14 @@ Pré-cadrage
 
 ### Précisions
 
-- Cadrage POC : **validé et intégré** (POC-G1…G6 ; POC-G10 **consommé**).
-- Sync post-merge : **versionnée** (GO commit / push / draft PR **consommé**) ; merge #220 **en attente**.
-- Scénario **S1** sélectionné (contrat de cadrage, **non exécuté**).
-- Architecture / backlog / delivery POC : **non lancés**.
-- Clôture formelle architecture fonctionnelle : **décision séparée**, toujours ouverte.
-- POC ≠ MVP ≠ industrialisation.
+- Architecture : **Option B minimale** (validée avec réserves).
+- Option A : mode test / dégradé harness.
+- Option C : écartée 1er POC.
+- POC-G8/G9 : **fermés**. POC : **non lancé**.
 
-### Orientation Option B — état
+### Orientation
 
-> Cadrage validé 2026-07-19 ; intégré via PR #219 (`be713c45…`). POC-G10 consommé. Sync post-merge versionnée (PR #220 draft). Prochaines décisions : **GO merge #220** ; éventuellement **POC-G7** après intégration — **fermée**.
+> POC-G7 validé avec réserves. Versionnement requis. Backlog non ouvert.
 
 ---
 
@@ -215,9 +209,9 @@ Pré-cadrage
 |-------|---------|
 | Statut | **VALIDÉ + INTÉGRÉ** — PR #219 / `be713c45…` — docs `20`/`21`/`22` |
 | Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
-| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7…G9 **FERMÉS** |
-| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** — outil ouvert |
-| Ne lance pas | POC ; architecture ; backlog ; delivery ; MVP |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES** ; POC-G8/G9 **FERMÉS** |
+| Architecture | Option B minimale (`23`–`25`) — non versionnée |
+| Ne lance pas | POC ; backlog ; delivery ; MVP |
 
 ### 4.7 Sécurité (bornée)
 
@@ -265,9 +259,12 @@ Pré-cadrage
 | D-NEXT-16 | Validation POC-CAND / POC-G1…G6 | Morris | **FAIT** — 2026-07-19 |
 | D-NEXT-17 | POC-G10 versionnement cadrage | Morris | **CONSOMMÉ** — PR #219 **MERGED** (`be713c45…`) |
 | D-NEXT-18 | Architecture / delivery POC | Morris | **Fermée** — POC-G7…G9 non validés |
-| D-NEXT-19 | GO versionnement sync post-merge | Morris | **CONSOMMÉ / FAIT** — commit + push + draft PR #220 |
-| D-NEXT-20 | GO merge PR #220 | Morris | **Requis** — **non autorisé** ici |
-| D-NEXT-21 | Ouverture éventuelle POC-G7 | Morris | **Possible** après intégration — **non ouverte** |
+| D-NEXT-19 | GO versionnement sync post-merge | Morris | **CONSOMMÉ** — PR #220 **MERGED** (`b882892…`) |
+| D-NEXT-20 | GO merge PR #220 | Morris | **CONSOMMÉ** — **MERGED** |
+| D-NEXT-21 | Ouverture POC-G7 (instruction) | Morris | **Consommée** → validation avec réserves |
+| D-NEXT-22 | Validation architecture / ARCH-POC-CAND / Option B | Morris | **FAIT** — POC-G7 **VALIDÉ AVEC RÉSERVES** |
+| D-NEXT-23 | GO versionnement docs `23`–`25` | Morris | **Requis** — **non accordé** |
+| D-NEXT-24 | Ouverture POC-G8 | Morris | **Fermée** |
 
 ---
 
@@ -329,9 +326,9 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 ## 8. Questions Morris
 
-1. Autorisez-vous le **merge** de la draft PR #220 ?
-2. Après intégration : ouvrez-vous éventuellement **POC-G7** (architecture POC) — décision distincte ?
-3. Clôture formelle architecture fonctionnelle (toujours séparée) ?
+1. Autorisez-vous le **versionnement** (commit / push / draft PR) de l’architecture Option B ?
+2. Après intégration : ouvrez-vous **POC-G8** ?
+3. Clôture formelle AF (séparée) ?
 
 ---
 
@@ -339,29 +336,17 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Critère | État |
 |---------|------|
-| Cadrage POC `20`–`22` | **VALIDÉ + INTÉGRÉ** (PR #219) |
-| Sync post-merge | **Versionnée** — draft PR #220 |
-| POC-G10 | **CONSOMMÉ** |
+| Architecture Option B | **VALIDÉE AVEC RÉSERVES** |
+| POC-G7 | **VALIDÉ AVEC RÉSERVES** |
+| Versionnement | **Non autorisé** |
+| POC-G8…G9 | **Fermés** |
 | POC lancé | **Non** |
-| POC-G7…G9 | **Fermés** |
-| MVP / industrialisation | **Non engagés** |
-| Clôture AF formelle | **Ouverte** (séparée) |
 
 ---
 
 ## 10. Verdict documentaire
 
-| Élément | Valeur |
-|---------|--------|
-| Cadrage | **VALIDÉ + INTÉGRÉ** |
-| POC-G10 | **CONSOMMÉ** (PR #219) |
-| Sync post-merge | **Versionnée** (PR #220 draft) |
-| GO commit / push / draft PR | **Consommé** |
-| Merge #220 | **Non autorisé** |
-| POC | **Non lancé** |
-| POC-G7 | **Fermé** |
-
-**Verdict :** `CORRECTION COMPLETE — PR #220 UPDATED — READY FOR MORRIS MERGE DECISION`
+**Verdict :** `ARCHITECTURE POC OPTION B DOCUMENTED WITH RESERVES — POC-G7 VALIDATED WITH RESERVES — VERSIONING DECISION REQUIRED`
 
 ---
 
@@ -369,10 +354,8 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Document | Usage |
 |----------|-------|
-| [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Cadrage POC **VALIDÉ + INTÉGRÉ** |
-| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | S1 contrat de cadrage |
-| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates |
-| [11-functional-architecture.md](./11-functional-architecture.md) | AF-Option C / L0–L5 |
-| [app/README.md](./app/README.md) | Runtime P0 |
+| [23](./23-poc-orchestration-technical-architecture.md) · [24](./24-poc-orchestration-contracts-security-and-observability.md) · [25](./25-poc-orchestration-architecture-decision-pack.md) | Archi Option B |
+| [20](./20-poc-orchestration-framing.md) · [21](./21-poc-orchestration-scenario-and-boundaries.md) · [22](./22-poc-orchestration-decision-pack.md) | Cadrage |
+| [11](./11-functional-architecture.md) | AF-Option C |
 
-*SFIA Studio — cadrage POC VALIDÉ + INTÉGRÉ (PR #219) — sync post-merge versionnée (PR #220 draft) — merge non autorisé — POC NON LANCÉ — POC-G7 fermé — Morris décide.*
+*Option B minimale — POC-G7 VALIDÉ AVEC RÉSERVES — non versionné — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/20-poc-orchestration-framing.md b/projects/sfia-studio/20-poc-orchestration-framing.md
index 15365a5..35f09db 100644
--- a/projects/sfia-studio/20-poc-orchestration-framing.md
+++ b/projects/sfia-studio/20-poc-orchestration-framing.md
@@ -8,29 +8,27 @@
 | **Profil** | Critical |
 | **Typologie** | DOC / EVOL (cadrage) |
 | **Baseline méthode** | SFIA v2.6 — Option C méthode (**inchangée**) |
-| **Branche** | Historique : `project/sfia-studio-poc-orchestration-framing` ; sync : `capitalization/sfia-studio-poc-framing-post-merge` (**poussée**) ; draft PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) |
-| **Base / main** | `origin/main` @ `be713c45a63c243a4d75c51d27d215d05bb621f1` (PR #219) |
-| **Statut document** | **VALIDÉ PAR MORRIS** (2026-07-19) et **INTÉGRÉ** sur `main` — cycle de cadrage **terminé** |
+| **Branche** | Historique cadrage/sync ; architecture : `architecture/sfia-studio-poc-orchestration` (**locale**) |
+| **Base / main** | `origin/main` @ `b882892d79709acd0637d0df872c16bbe16d7ed1` (PR #220 MERGED) |
+| **Statut document** | **VALIDÉ + INTÉGRÉ** — cycle cadrage **terminé** ; sync #220 **MERGED** |
 | **POC** | **Non lancé** |
 | **MVP / industrialisation** | **Non engagés** |
-| **Architecture Runtime** | **Non validée** — aucune technologie sélectionnée ; outil orchestrateur **ouvert** |
+| **Architecture Runtime** | **Non validée** — voir candidats `23`–`25` |
 | **Destinataire** | Morris |
 
-> Cadrage **validé** le **2026-07-19** et **intégré** via PR [#219](https://github.com/mcleland147/sfia-workspace/pull/219) (`be713c45…`). Cette validation **ne lance pas** le POC, **ne valide pas** l’architecture technique, **ne sélectionne pas** de Runtime et **ne définit pas** le MVP. POC-G7 / G8 / G9 restent **fermés**. Critères = contrat de preuve, **pas** preuve réalisée.
+> Cadrage **validé** (#219). Sync #220 **MERGED**. POC-G7 **VALIDÉ AVEC RÉSERVES** — **Option B minimale** (`23`–`25`, non versionnés). POC-G8 / G9 **fermés**. POC **non lancé**.
 
 ### Décision Morris — validation du cadrage (2026-07-19)
 
 | Élément | Statut |
 |---------|--------|
 | POC-CAND-01…06, 08, 10 | **VALIDÉES** |
-| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** (orchestrateur local candidat ; outil ouvert) |
-| POC-CAND-09 / POC-G10 | **VALIDÉE** puis **CONSOMMÉE** (PR #219 mergée) |
+| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
+| POC-CAND-09 / POC-G10 | **CONSOMMÉE** |
 | POC-G1…G6 | **VALIDÉS** |
-| POC-G7…G9 | **FERMÉS / NON VALIDÉS** |
-| Scénario | **S1** sélectionné |
-| Automatisation | L3 cible + L4* plafond chemin d’exécution ; L0 arbitrage ; L5 global interdit |
-| Git | Lecture réelle autorisée (futur POC) ; écritures distantes **simulées** |
-| Intégration | PR #219 **MERGED** — `be713c45a63c243a4d75c51d27d215d05bb621f1` |
+| POC-G7 | **VALIDÉ AVEC RÉSERVES** — Option B minimale |
+| POC-G8…G9 | **FERMÉS** |
+| Intégration | #219 + #220 @ `b882892…` |
 
 ---
 
@@ -301,18 +299,13 @@ Pas de plateforme de supervision industrialisée.
 |-------------|--------|
 | POC-G1…G6 | **VALIDÉS** |
 | POC-G10 | **VALIDÉ / CONSOMMÉ / INTÉGRÉ** (PR #219) |
-| POC-G7…G9 | **FERMÉS / NON VALIDÉS** |
-| POC-CAND-01…06, 08, 10 | **VALIDÉES** |
-| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
-| POC-CAND-09 | **VALIDÉE** puis **consommée** (via POC-G10 / #219) |
-
-**Cycle de cadrage :** **terminé** (validé + intégré). Critères de succès/échec/abandon = contrat — **pas** preuve réalisée.
-
-**Sync post-merge :** **versionnée** (commit + push + draft PR #220). **Merge #220** = GO Morris distinct — **non autorisé** ici.
+| POC-G7 | **VALIDÉ AVEC RÉSERVES** — Option B minimale (`23`–`25`) — **non versionnée** |
+| POC-G8…G9 | **FERMÉS** |
+| Sync #220 | **MERGED** |
 
-**Prochaine décision Morris possible après merge #220 :** ouverture éventuelle de **POC-G7** (architecture POC ciblée) — **fermée** ici. Pas de backlog/delivery direct.
+**Architecture :** Option B minimale (Studio cockpit + adaptateur + harness autonome). Option A = test/dégradé. Option C écartée (1er POC).
 
-**Toujours ouverts :** outil/techno orchestrateur ; harness vs UI ; clôture AF formelle ; MVP.
+**Prochaine décision :** GO versionnement — **non accordé**.
 
 ---
 
@@ -320,12 +313,13 @@ Pas de plateforme de supervision industrialisée.
 
 | Document | Rôle |
 |----------|------|
-| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario + frontières + flux |
-| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | Options, reco, POC-CAND, gates |
-| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire produit |
-| [11-functional-architecture.md](./11-functional-architecture.md) | AF-Option C, niveaux L0–L5 |
-| [18-technical-architecture.md](./18-technical-architecture.md) | Contraintes techniques P0 |
+| [21](./21-poc-orchestration-scenario-and-boundaries.md) | S1 |
+| [22](./22-poc-orchestration-decision-pack.md) | POC-CAND |
+| [23](./23-poc-orchestration-technical-architecture.md) | Archi Option B |
+| [24](./24-poc-orchestration-contracts-security-and-observability.md) | Contrats |
+| [25](./25-poc-orchestration-architecture-decision-pack.md) | ARCH-POC-CAND |
+| [11](./11-functional-architecture.md) | AF-Option C |
 
 ---
 
-*Cadrage VALIDÉ + INTÉGRÉ (PR #219 / be713c45…) — sync post-merge versionnée (PR #220 draft) — merge non autorisé — cycle cadrage TERMINÉ — POC NON LANCÉ — POC-G7/G8/G9 fermés — outil orchestrateur ouvert.*
+*Cadrage INTÉGRÉ — POC-G7 VALIDÉ AVEC RÉSERVES (Option B) — non versionné — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
index f0871d4..7952d1f 100644
--- a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
+++ b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
@@ -6,8 +6,8 @@
 | **Document** | `21-poc-orchestration-scenario-and-boundaries.md` |
 | **Cycle** | 1 — Cadrage POC orchestration (Option B) |
 | **Profil** | Critical |
-| **Statut document** | **VALIDÉ PAR MORRIS** (2026-07-19) et **INTÉGRÉ** sur `main` (PR #219) — S1 = **contrat de cadrage** (**non exécuté**) |
-| **Complète** | [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) |
+| **Statut document** | **VALIDÉ + INTÉGRÉ** (#219) ; sync #220 **MERGED** ; S1 = contrat (**non exécuté**) ; UI vs harness → voir archi candidate `23` |
+| **Complète** | [20](./20-poc-orchestration-framing.md) · archi [23](./23-poc-orchestration-technical-architecture.md) |
 | **POC** | **Non lancé** |
 
 ---
@@ -217,9 +217,9 @@ Le modèle d’état et le scénario restent un **contrat de cadrage**, pas une
 | Gate d’exécution | Avant Cursor | GO / CORRIGER / STOP |
 | Gate de clôture preuve | Après pack | CLOSING / ITERATE / ABANDON |
 
-Les gates produit POC-G1…G6 sont **VALIDÉS** (2026-07-19). POC-G10 est **CONSOMMÉ** (PR #219). POC-G7…G9 restent **FERMÉS / NON VALIDÉS**.
+Les gates POC-G1…G6 **VALIDÉS**. POC-G10 **CONSOMMÉ**. POC-G7 **VALIDÉ AVEC RÉSERVES** (Option B minimale). POC-G8…G9 **FERMÉS**.
 
-UI Studio versus harness : **réserve d’architecture** (ouverte pour un futur cycle POC-G7 — **non ouvert** ici).
+UI Studio versus harness : **Option B minimale** — Studio cockpit + adaptateur fin ; harness autonome (cœur). Option A conservée pour tests hors UI.
 
 ---
 
@@ -296,4 +296,4 @@ L’UI P0 **n’est pas** l’orchestrateur. Branchement réel UI↔orchestrateu
 
 ---
 
-*Scénario S1 VALIDÉ + INTÉGRÉ (PR #219) comme contrat de cadrage — NON EXÉCUTÉ — POC NON LANCÉ — rejet allowlist = exigence future — techno Runtime ouverte — Morris décide (POC-G7 fermé).*
+*Scénario S1 VALIDÉ — NON EXÉCUTÉ — Option B minimale (POC-G7 VALIDÉ AVEC RÉSERVES) — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/22-poc-orchestration-decision-pack.md b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
index 35c9873..3117010 100644
--- a/projects/sfia-studio/22-poc-orchestration-decision-pack.md
+++ b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
@@ -2,130 +2,59 @@
 
 | Métadonnée | Valeur |
 |------------|--------|
-| **Projet** | SFIA Studio |
 | **Document** | `22-poc-orchestration-decision-pack.md` |
-| **Cycle** | 1 — Cadrage POC orchestration (Option B) ; sync post-merge cycle 14 |
-| **Profil** | Critical (cadrage) / Standard (post-merge sync) |
-| **Statut document** | **VALIDÉ PAR MORRIS** (2026-07-19) et **INTÉGRÉ** sur `main` (PR #219) |
-| **Préfixe décisions** | `POC-CAND-*` — identifiants locaux (même après validation) |
-| **D-VAL nouvelles** | **Aucune** |
+| **Statut** | Cadrage **INTÉGRÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES** (Option B minimale) |
 | **POC** | **Non lancé** |
-| **Destinataire** | Morris |
+| **POC-G8 / G9** | **FERMÉS** |
 
-> Décision Morris du **2026-07-19** : validation du cadrage Option B. Intégration Git : PR [#219](https://github.com/mcleland147/sfia-workspace/pull/219) **MERGED** (`be713c45…`). POC-G7 / G8 / G9 **fermés**. Aucune architecture Runtime / techno sélectionnée. Aucune décision d’architecture POC prise. POC **non lancé**.
+> Cadrage #219 + sync #220 **MERGED**. Architecture **Option B minimale** validée avec réserves (`23`–`25`, non versionnés). Harness autonome. Studio cockpit. Adaptateur sans autorité. Option C écartée (1er POC).
 
 ---
 
-## 1. Observations factuelles
+## 1. Observations
 
-1. Delivery P0 clôturé (PR #217) ; capitalisation intégrée (PR #218).
-2. Cadrage Option B produit, **validé Morris 2026-07-19**, puis **intégré** (PR #219).
-3. AF-Option C **VALIDÉE** (fond) et **opérationnalisée** pour le POC (POC-CAND-03).
-4. Baseline SFIA v2.6 / Option C méthode **inchangée**.
-5. POC / MVP / industrialisation **non engagés**.
-6. POC-G10 **consommé** par le versionnement et le merge du cadrage.
+1. Cadrage / sync intégrés.
+2. POC-G7 **VALIDÉ AVEC RÉSERVES** — Option B minimale.
+3. Option A = test/dégradé.
+4. POC-G8/G9 fermés ; POC non lancé.
+5. Versionnement archi = GO distinct.
 
 ---
 
-## 2. Hypothèses
+## 6. POC-CAND — inchangées
 
-H1–H8 du document `20` — dont H6 (orchestrateur local) **retenue avec réserve** (POC-CAND-07) : outil/forme **ouverts**.
+01…06, 08, 10 **VALIDÉES** · 07 **AVEC RÉSERVE** · 09 **CONSOMMÉE**.
 
 ---
 
-## 3–5. Options (historique de cadrage)
+## 7. Gates
 
-Les options A/B/C de séquencement et S1–S4 / L-levels restent documentées comme **historique de qualification**. Les choix Morris sont dans §6–7.
-
----
-
-## 6. Décisions POC-CAND — état post-intégration PR #219
-
-> Identifiants locaux au cadrage. **Aucune D-VAL nouvelle.**
-
-| ID | Décision | Statut Morris |
-|----|----------|---------------|
-| **POC-CAND-01** | Problème + objectif de preuve acceptés | **VALIDÉE** |
-| **POC-CAND-02** | Scénario **S1** sélectionné (DOC read-only + rejet hors allowlist obligatoire) | **VALIDÉE** |
-| **POC-CAND-03** | Frontières Studio / orch. / Git / Cursor ; AF-Option C opérationnalisée ; Git = vérité | **VALIDÉE** |
-| **POC-CAND-04** | L3 cible après GO ; L4* plafond chemin d’orchestration (**≠** niveau produit/Runtime) ; arbitrage L0 ; L5 global interdit | **VALIDÉE** |
-| **POC-CAND-05** | Lecture Git réelle autorisée (futur POC) ; écritures distantes **simulées** ; aucun commit/push/PR/merge réel sans décision distincte | **VALIDÉE** |
-| **POC-CAND-06** | Critères succès / échec / abandon acceptés | **VALIDÉE** |
-| **POC-CAND-07** | Orchestrateur local déterministe = hypothèse candidate ; outil/techno/forme **ouverts** ; aucune archi Runtime validée | **VALIDÉE AVEC RÉSERVE** |
-| **POC-CAND-08** | Après intégration cadrage → prochaine étape candidate = **architecture POC ciblée** ; pas de backlog/delivery direct | **VALIDÉE** |
-| **POC-CAND-09** | Commit / push / draft PR du cadrage (via POC-G10) | **VALIDÉE** puis **consommée** (PR #219) |
-| **POC-CAND-10** | Aucun lancement POC tant que gates nécessaires non ouverts explicitement | **VALIDÉE** |
-
----
-
-## 7. Gates Morris — état post-intégration PR #219
-
-| Gate | Objet | Statut |
-|------|-------|--------|
-| **POC-G1** | Problème + objectif de preuve | **VALIDÉ** |
-| **POC-G2** | Scénario métier unique S1 | **VALIDÉ** |
-| **POC-G3** | Frontières d’autorité et de vérité | **VALIDÉ** |
-| **POC-G4** | Niveau maximal d’automatisation | **VALIDÉ** |
-| **POC-G5** | Lecture Git réelle ; écritures distantes simulées | **VALIDÉ** |
-| **POC-G6** | Critères succès / échec / abandon | **VALIDÉ** |
-| **POC-G7** | Architecture POC candidate | **FERMÉ / NON VALIDÉ** |
-| **POC-G8** | Backlog POC | **FERMÉ / NON VALIDÉ** |
-| **POC-G9** | Delivery POC | **FERMÉ / NON VALIDÉ** |
-| **POC-G10** | Commit / push / draft PR du cadrage | **VALIDÉ / CONSOMMÉ / INTÉGRÉ** (PR #219) |
-
-**Merge #219 = fait Git.** N’ouvre **pas** POC-G7. N’autorise **pas** le lancement du POC.
-
----
-
-## 8. Impacts
-
-Cadrage validé + intégré → cycle de cadrage **clôturable** documentairement → sync post-merge **versionnée** (draft PR #220) → prochaine décision : **GO merge #220** ; après intégration, éventuel **POC-G7**. Pas de shortcut backlog/delivery.
-
----
-
-## 9. Dette / ouverts
+| Gate | Statut |
+|------|--------|
+| POC-G1…G6 | **VALIDÉS** |
+| POC-G10 | **CONSOMMÉ** |
+| **POC-G7** | **VALIDÉ AVEC RÉSERVES** |
+| POC-G8 | **FERMÉ** |
+| POC-G9 | **FERMÉ** |
 
-- Outil / forme orchestrateur (réserve POC-CAND-07)
-- Harness vs UI P0 (réserve d’architecture)
-- Allowlist chemins détaillée (architecture)
-- Clôture formelle AF
-- MVP / industrialisation / réserves P0
-- GO merge draft PR #220 (requis ; non accordé ici)
+ARCH-POC-CAND-* : voir `25`.
 
 ---
 
-## 10. Séquence après intégration du cadrage
+## 10. Séquence
 
 ```text
-Cadrage validé (2026-07-19)
-  → POC-G10 consommé — PR #219 MERGED (be713c45…)
-  → post-merge sync documentaire — versionnée ; draft PR #220 ouverte ; merge = GO Morris distinct
-  → décision distincte éventuelle architecture POC (POC-G7) — FERMÉE
-  → (plus tard) backlog POC (POC-G8) → delivery POC (POC-G9)
-  → décision post-POC : abandon / itération / préparation MVP
+POC-G7 VALIDÉ AVEC RÉSERVES (Option B)
+  → GO versionnement (requis — non accordé)
+  → POC-G8 (FERMÉ) → POC-G9 (FERMÉ) → POC (NON LANCÉ)
 ```
 
-POC-G7 / G8 / G9 **non ouverts**. Aucune architecture POC prise. Aucun lancement POC.
-
 ---
 
-## 11. Verdict documentaire
-
-| Élément | Valeur |
-|---------|--------|
-| Cadrage | **VALIDÉ + INTÉGRÉ** (PR #219) |
-| POC-G10 | **CONSOMMÉ** |
-| Sync post-merge | **Versionnée** — draft PR #220 |
-| GO commit / push / draft PR | **Consommé** |
-| Merge #220 | **Non autorisé** |
-| POC lancé | **Non** |
-| Architecture / backlog / delivery POC | **Non lancés** |
-| POC-G7…G9 | **Fermés** |
-| Runtime / techno | **Non sélectionnés** (outil ouvert) |
-| Prochaine décision Morris | **GO merge #220** ; éventuellement POC-G7 après intégration |
+## 11. Verdict
 
-**Verdict :** `CORRECTION COMPLETE — PR #220 UPDATED — READY FOR MORRIS MERGE DECISION`
+**`ARCHITECTURE POC OPTION B DOCUMENTED WITH RESERVES — POC-G7 VALIDATED WITH RESERVES — VERSIONING DECISION REQUIRED`**
 
 ---
 
-*Decision pack VALIDÉ + INTÉGRÉ (PR #219) — sync post-merge versionnée (PR #220 draft) — merge non autorisé — POC-G10 CONSOMMÉ — POC NON LANCÉ — POC-G7 fermé.*
+*Option B minimale — G7 validé avec réserves — non versionné — POC NON LANCÉ.*
diff --git a/projects/sfia-studio/23-poc-orchestration-technical-architecture.md b/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
new file mode 100644
index 0000000..d15e1b7
--- /dev/null
+++ b/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
@@ -0,0 +1,203 @@
+# SFIA Studio — Architecture technique POC orchestration
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Projet** | SFIA Studio |
+| **Document** | `23-poc-orchestration-technical-architecture.md` |
+| **Cycle** | 6 — Architecture technique (+ correction QA Option B) |
+| **Profil** | Critical |
+| **Branche** | `architecture/sfia-studio-poc-orchestration` (**locale**, non poussée) |
+| **Base** | `origin/main` @ `b882892d79709acd0637d0df872c16bbe16d7ed1` |
+| **Statut** | **VALIDÉE AVEC RÉSERVES** (POC-G7) — documentée, **non versionnée** |
+| **Décision architecture** | **Option B minimale** — Studio cockpit + adaptateur fin + harness autonome |
+| **POC-G8 / G9** | **FERMÉS** |
+| **POC** | **Non lancé** |
+| **Runtime / techno / protocole** | **Ouverts** (non figés) |
+
+> Architecture **validée avec réserves** par Morris. Versionnement = GO distinct. POC-G8 **non ouvert**. Aucun code.
+
+---
+
+## 1. Contexte
+
+| Fait | Référence |
+|------|-----------|
+| Cadrage POC | PR #219 / `be713c45…` |
+| Sync post-merge | PR #220 / `b882892…` **MERGED** |
+| AF-Option C | Studio ≠ orchestrateur — **VALIDÉE** |
+| App P0 | Next fixtures ; Git/Cursor simulés ; pas d’orch. |
+| Décision Morris | **Option B minimale** retenue ; POC-G7 **VALIDÉ AVEC RÉSERVES** |
+
+Objectif S1 inchangé : boucle DOC read-only gouvernée, rejet hors allowlist, writes distantes absentes, L0 Morris, Git = vérité.
+
+---
+
+## 2. Exigences (inchangées + E14)
+
+| ID | Exigence |
+|----|----------|
+| E1–E12 | Séparation AF-C ; Git vérité ; L0 ; read Git ; deny writes ; rejet allowlist ; Cursor borné ; journal ; stop ; réversible ; secrets ; L3/L4*/L5 |
+| E13 | Logique d’orchestration **hors** `app/**` |
+| E14 | Studio = cockpit ; adaptateur **sans autorité** ; harness **autonome** et testable sans UI |
+
+---
+
+## 3. Principes
+
+P1 Repo-first · P2 Décision ≠ exécution · P3 Fail closed · P4 Least privilege · P5 Simplicité locale · P6 Harness autonome · P7 Adaptateur fin · P8 Studio ≠ vérité · P9 Pas d’API Cursor inventée · P10 Option B = extension d’Option A (cœur harness préservé)
+
+---
+
+## 4. Options A / B / C — statut Morris
+
+### 4.1 Option A — Harness autonome (historique / mode test)
+
+**Statut :** **conservée** comme socle technique et mode de test / diagnostic / dégradé. **Non rejetée.** **Non retenue** comme architecture utilisateur du premier POC.
+
+### 4.2 Option B minimale — **RETENUE**
+
+Studio (cockpit) → adaptateur fin → harness autonome (gates, policies, Git, Cursor, journal, preuves).
+
+| Critère | Évaluation |
+|---------|------------|
+| Preuve S1 | ★★★ (même cœur A) |
+| AF-Option C | ★★★ |
+| Démo cockpit | ★★★ |
+| Risque Option C | Faible si adaptateur borné |
+| Dette UI | Minimale, reportée au delivery |
+
+### 4.3 Option C — Orch. dans l’app
+
+**Écartée** pour le premier POC (couplage / seconde vérité). Conservée comme historique ; non interdite pour toute trajectoire future hors premier POC.
+
+### 4.4 Challenge
+
+| Question | Réponse |
+|----------|---------|
+| Utile maintenant ? | Oui — B prouve S1 + cockpit sans fondre Runtime |
+| Drift vers C ? | **Non** si frontières §5–7 respectées |
+| Harness autonome ? | **Oui** — cœur inchangé vs A |
+| Plus simple possible ? | A plus simple hors UI ; B minimale = plus simple *avec* cockpit |
+
+---
+
+## 5. Architecture logique — Option B minimale
+
+```text
+[Morris] --GO/STOP explicites--> [SFIA Studio cockpit]
+[SFIA Studio] --intention / gate / stop / query--> [StudioAdapter] (fin, sans autorité)
+[StudioAdapter] --AdapterEnvelope--> [Harness CLI autonome]
+[Harness Orchestrator]
+   ├─ GateValidator (revalide GO + contractHash)
+   ├─ PolicyEngine (allow/deny fail-closed)
+   ├─ StateMachine
+   ├─ GitReaderPort (read-only réel)
+   ├─ CursorExecutorPort (fixture|manual|adapter-future)
+   ├─ EventJournal + ProofStore
+   └─ Status/Proof responses --> Adapter --> Studio (vue dérivée)
+[Mode dégradé / test] Harness utilisable **sans** Studio (= Option A)
+```
+
+---
+
+## 6. Responsabilités
+
+| Composant | Fait | Interdit |
+|-----------|------|----------|
+| **Studio** | Intention, présentation gate, STOP, suivi, consultation preuves | Auto-GO ; exec Git/Cursor ; évaluer allowlist ; vérité exclusive ; contourner harness |
+| **Adaptateur** | Transformer / transmettre messages ; corrélation ; renvoyer vues | Décider ; policy ; modifier contrat ; créer GO ; masquer rejet/stop ; vérité durable |
+| **Harness** | Revalider GO/contrat/allowlist ; Git ; CursorPort ; journal ; preuves ; états | Arbitrer L0 ; write remote |
+| **GPT** | Qualification hors bande | Commander orch. |
+| **Morris** | GO / STOP / CLOSE | — |
+
+---
+
+## 7. Flux
+
+### 7.1 Nominal
+
+```text
+Studio Intent → Adapter → Harness QUALIFIED/GATE_OPEN
+  → Studio présente dossier → Morris GO explicite
+  → Adapter StudioGateSubmission → Harness revalide → AUTHORIZED
+  → PRECHECK → ORCHESTRATING → EXECUTING → PROOF_READY
+  → Statuts/preuves → Adapter → StudioExecutionView
+  → Morris CLOSE → CLOSED
+```
+
+### 7.2 Rejet hors allowlist
+
+```text
+AUTHORIZED → policy deny → REJECTED + event
+  → Studio affiche rejet (pas de retry auto)
+  → correction contrat + **nouveau GO** requis
+```
+
+### 7.3 STOP
+
+```text
+StudioStopRequest → Adapter → Harness STOP prioritaire → STOPPED
+  → flush journal → vue Studio mise à jour
+```
+
+### 7.4 Dégradé
+
+Harness CLI sans Studio (fixtures + fichier GO) — tests / diagnostic.
+
+---
+
+## 8. Adaptateur — portée
+
+**Autorisé :** intention→demande ; transmission GO/STOP ; query statut ; affichage état/erreurs/preuves ; IDs corrélation.
+
+**Exclu :** orch. métier ; Git/Cursor ; élévation ; modif contrat ; retry auto ; auto-GO ; auto-clôture.
+
+**Protocoles candidats (ouverts) :** fichier/répertoire · processus enfant · HTTP local · IPC · CLI encapsulé.
+Choix = backlog/delivery sauf cohérence bloquante. Critères : simplicité, sécurité, testabilité, pas de daemon inutile, harness sans Studio.
+
+---
+
+## 9. État / Git / Cursor
+
+Modèle d’états `21` + transitions `24` — harness = autorité d’application ; UI = vue dérivée du journal.
+
+Git read réel ; denylist writes ; `gitEffect=none-remote`.
+
+Cursor via port ; modes fixture/manual/adapter-future ; **pas d’API inventée**.
+
+---
+
+## 10. `app/**`
+
+Au **delivery uniquement** (POC-G9, fermé) : modifications **minimales** cockpit / adaptateur / affichage.
+Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans ce cycle.
+
+---
+
+## 11. Recommandation → décision
+
+| Élément | Statut |
+|---------|--------|
+| Option B minimale | **RETENUE / VALIDÉE** (Morris) |
+| Harness autonome | **Conservé** (cœur) |
+| Option A | Mode test / dégradé **VALIDÉ** |
+| Option C | **Écartée** premier POC |
+| POC-G7 | **VALIDÉ AVEC RÉSERVES** |
+| Versionnement docs | **NON AUTORISÉ** ici |
+
+---
+
+## 12. Réserves
+
+1. Cursor réel non prouvé
+2. Techno harness ouverte (Node/TS candidat)
+3. Protocole adaptateur ouvert
+4. Allowlist détaillée → backlog
+5. Modif `app/**` seulement au delivery, bornée
+6. Preuve QA : Studio ≠ seconde vérité
+7. Clôture AF séparée
+8. POC-G8/G9 fermés ; POC non lancé
+
+---
+
+*Architecture POC Option B minimale — POC-G7 VALIDÉ AVEC RÉSERVES — non versionnée — POC NON LANCÉ — Morris décide (versionnement).*
diff --git a/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md b/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
new file mode 100644
index 0000000..f5a7640
--- /dev/null
+++ b/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
@@ -0,0 +1,168 @@
+# SFIA Studio — Contrats, sécurité et observabilité POC orchestration
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `24-poc-orchestration-contracts-security-and-observability.md` |
+| **Statut** | **VALIDÉ AVEC RÉSERVE** (mise à jour Option B) — POC-G7 |
+| **Architecture** | Option B minimale (Studio + adaptateur + harness) |
+| **POC** | **Non lancé** |
+| **Base** | `main` @ `b882892…` |
+
+> Contrats conceptuels. Harness revalide tout. Adaptateur sans autorité.
+
+---
+
+## 1. Corrélation
+
+`requestId`, `cycleId`, `gateId`, `executionId`, `contractHash`, `correlationId` — timestamps Europe/Paris.
+
+---
+
+## 2. Contrats cœur harness (inchangés dans l’esprit)
+
+OrchestrationRequest · GateDecision · Allowlist/Denylist · ExecutionContract · OrchestrationResult · Event — voir cadrage `21` et sections historiques.
+**Invariant :** absence de GO valide ⇒ rejet ; fail closed.
+
+### Allowlist / Denylist (rappel)
+
+Allow : lecture paths projet/méthode ; `git.read.*` ; `cursor.analyze` ; `proof.write.local`.
+Deny : commit/push/merge/PR/API write ; shell libre ; secrets ; fs hors `proofDir` ; toute action non listée.
+
+---
+
+## 3. Contrats Studio / Adaptateur (Option B)
+
+### 3.1 StudioIntent
+
+| Champ | Obligatoire |
+|-------|-------------|
+| `requestId` | Oui |
+| `title` | Oui |
+| `requestedCycle` | Oui |
+| `requestedScope` | Oui |
+| `operator` | Oui |
+| `createdAt` | Oui |
+
+### 3.2 StudioGateSubmission
+
+| Champ | Obligatoire | Règle |
+|-------|-------------|-------|
+| `gateId` | Oui | |
+| `requestId` | Oui | |
+| `decision` | Oui | GO / CORRIGER / STOP / CLOSE — **explicite** |
+| `scope` | Oui | |
+| `issuedBy` | Oui | Morris |
+| `issuedAt` / `expiresAt` | Oui | |
+| `contractHash` | Oui | Match contrat courant |
+
+### 3.3 StudioStopRequest
+
+| Champ | Obligatoire |
+|-------|-------------|
+| `requestId` | Oui |
+| `executionId` | Oui si exec active |
+| `issuedBy` | Oui |
+| `issuedAt` | Oui |
+| `reason` | Oui |
+
+### 3.4 AdapterEnvelope
+
+| Champ | Obligatoire |
+|-------|-------------|
+| `schemaVersion` | Oui |
+| `correlationId` | Oui |
+| `messageType` | Oui (`intent`\|`gate`\|`stop`\|`statusQuery`\|`status`\|`proof`) |
+| `payload` | Oui |
+| `emittedAt` | Oui |
+
+### 3.5 StudioExecutionView
+
+| Champ | Obligatoire |
+|-------|-------------|
+| `requestId` / `executionId` | Oui |
+| `status` | Oui (dérivé journal) |
+| `lastEvent` | Oui |
+| `proofRefs` | Oui |
+| `errors` | Oui |
+| `updatedAt` | Oui |
+
+---
+
+## 4. Invariants Option B
+
+1. L’adaptateur **ne crée aucune décision**.
+2. Le harness **revalide** tout message (GO, hash, allowlist, Git).
+3. `contractHash` obligatoire pour GO ; modif contrat ⇒ GO invalide.
+4. Statut UI **dérivé** du journal harness — pas de vérité UI exclusive.
+5. Absence de message / timeout **≠** GO.
+6. Retry après rejet ⇒ correction + **nouveau GO**.
+7. STOP **prioritaire**.
+8. UI indisponible **ne corrompt pas** le harness.
+9. Harness **testable sans Studio**.
+10. Studio / adaptateur **n’exécutent pas** Git ni Cursor.
+
+---
+
+## 5. Transitions d’état
+
+Auteur L0 = Morris (via StudioGateSubmission / Stop, **revalidés** harness).
+Harness applique ; Studio affiche. Transitions interdites inchangées (`GATE_OPEN`→`EXECUTING` sans GO, etc.).
+
+---
+
+## 6. Sécurité
+
+### 6.1 Menaces cœur + Option B
+
+| Menace | Contrôle |
+|--------|----------|
+| Auto-GO / timeout=GO | GateValidator ; décision explicite |
+| Write remote | Denylist + `none-remote` |
+| Path traversal / symlinks | Canonicalisation |
+| Command injection | Pas de shell libre |
+| Prompt injection | CursorPort borné |
+| Secrets | Interdits ; redaction |
+| **Falsification GO UI** | Revalidation harness + hash + issuedBy |
+| **Replay message adaptateur** | `correlationId` / idempotence / issuedAt |
+| **Désync Studio / journal** | Vue dérivée ; refresh depuis harness |
+| **Élévation de scope** | Scope + contractHash revalidés |
+| **Injection champs UI** | Validation schéma envelope |
+| **Altération contractHash** | Recompute côté harness |
+| **Contournement harness** | UI n’a pas d’accès Cursor/Git direct |
+| **Preuve sensible dans Studio** | Refs + redaction ; pas de secrets |
+
+### 6.2 Least privilege
+
+Adaptateur : transmission seule. Harness : user local ; env filtré ; pas de tokens write.
+
+---
+
+## 7. Observabilité
+
+Journal JSONL harness = source. Studio affiche `StudioExecutionView`.
+Preuves S1 : GO, rejet allowlist, HEAD avant/après, `none-remote`, artefacts Cursor/manual.
+
+Dégradé : CLI harness sans UI.
+
+---
+
+## 8. Stop / reprise / réversibilité
+
+STOP prioritaire via `StudioStopRequest` ou harness direct.
+Reprise = nouveau GO + nouvel `executionId`.
+Effets locaux `proofDir` seulement ; remote inchangé.
+
+---
+
+## 9. Critères d’acceptation (Option B)
+
+1. Option B minimale documentée ; A = test/dégradé ; C écartée 1er POC.
+2. Harness autonome ; Studio cockpit ; adaptateur sans autorité.
+3. Contrats §3 présents.
+4. Invariants §4.
+5. Menaces §6 couvertes.
+6. POC-G8/G9 fermés ; POC non lancé ; pas de protocole définitif non décidé.
+
+---
+
+*Contrats Option B — POC-G7 VALIDÉ AVEC RÉSERVES — Morris décide (versionnement).*
diff --git a/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md b/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
new file mode 100644
index 0000000..964182f
--- /dev/null
+++ b/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
@@ -0,0 +1,144 @@
+# SFIA Studio — Decision pack architecture POC orchestration
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `25-poc-orchestration-architecture-decision-pack.md` |
+| **Cycle** | 6 Architecture + QA corrective Option B |
+| **Profil** | Critical |
+| **Statut** | POC-G7 **VALIDÉ AVEC RÉSERVES** — docs **non versionnés** |
+| **Préfixe** | `ARCH-POC-CAND-*` (locaux ; ≠ D-VAL) |
+| **Architecture retenue** | **Option B minimale** |
+| **POC-G8 / G9** | **FERMÉS** |
+| **POC** | **Non lancé** |
+| **Base** | `main` @ `b882892…` |
+
+---
+
+## 1. Observations
+
+1. #219/#220 MERGED.
+2. Instruction POC-G7 produite puis **validée avec réserves** (Option B minimale).
+3. App P0 sans orch. ; pas d’API Cursor repo.
+4. AF-Option C : Studio / orch. séparés.
+5. Versionnement architecture **non autorisé** ici.
+6. POC-G8 **non ouvert** tant que docs non intégrés.
+
+---
+
+## 2. Options — statut
+
+| Option | Statut Morris |
+|--------|---------------|
+| **A** Harness autonome | Conservée — test / diagnostic / dégradé |
+| **B minimale** Studio + adaptateur + harness | **RETENUE / VALIDÉE** |
+| **C** Orch. dans app | **Écartée** premier POC |
+
+B = **extension** de A (cœur harness) — **pas** Option C.
+
+---
+
+## 3. Comparaison
+
+| Critère | A | B min | C |
+|---------|---|-------|---|
+| Preuve S1 | ★★★ | ★★★ | ★★ |
+| Cockpit | — | ★★★ | ★★★ |
+| AF-Option C | ★★★ | ★★★ | ★ |
+| Risque couplage | Faible | Faible si borné | Fort |
+| Autonomie harness | ★★★ | ★★★ | ★ |
+
+---
+
+## 4. ARCH-POC-CAND-* — statuts Morris
+
+| ID | Décision | Statut |
+|----|----------|--------|
+| **01** | Adopter **Option B minimale** (Studio cockpit + adaptateur fin + harness autonome) | **VALIDÉE** |
+| **02** | Écarter Option C pour le premier POC | **VALIDÉE** |
+| **03** | Conserver Option A comme mode autonome test / diagnostic / dégradé | **VALIDÉE** |
+| **04** | Orch. = processus local autonome déterministe ; techno ouverte (Node/TS candidat) | **VALIDÉE AVEC RÉSERVE** |
+| **05** | Cursor via `CursorExecutorPort` ; pas d’API inventée | **VALIDÉE AVEC RÉSERVE** |
+| **06** | Git read réel ; writes distantes interdites ; `gitEffect=none-remote` | **VALIDÉE** |
+| **07** | Contrats / états / transitions `24` (màj Option B) | **VALIDÉE AVEC RÉSERVE** |
+| **08** | Journal JSONL + preuves locales | **VALIDÉE** |
+| **09** | Modif `app/**` possible **au delivery uniquement**, minimale (cockpit/adaptateur/vues) ; orch. hors `app/**` | **VALIDÉE AVEC RÉSERVE** |
+| **10** | Après validation+intégration archi → prochaine porte = **POC-G8** | **VALIDÉE** |
+| **11** | Archi POC ≠ Runtime produit ; L4* plafond chemin | **VALIDÉE** |
+| **12** | Versionnement docs `23`–`25` = GO Morris distinct | **VALIDÉE** |
+
+Aucun nouveau D-VAL.
+
+---
+
+## 5. Gates
+
+| Gate | Statut |
+|------|--------|
+| POC-G1…G6 | **VALIDÉS** |
+| POC-G10 | **CONSOMMÉ** |
+| **POC-G7** | **VALIDÉ AVEC RÉSERVES** |
+| POC-G8 | **FERMÉ** |
+| POC-G9 | **FERMÉ** |
+| Versionnement archi | **NON AUTORISÉ** |
+| Delivery / lancement POC | **NON AUTORISÉ** |
+
+**≠ READY FOR BACKLOG** tant que docs non intégrés.
+
+---
+
+## 6. Ouverts / réserves
+
+1. Cursor réel
+2. Techno harness
+3. Protocole adaptateur
+4. Allowlist détaillée (backlog)
+5. Portée exacte modifs `app/**` au delivery
+6. Preuve QA non-seconde-vérité
+7. Clôture AF
+8. POC-G8/G9
+
+---
+
+## 7. Décisions Morris restantes
+
+1. GO **versionnement** (commit / push / draft PR) des docs `23`–`25` (+ sync README/`07`/`20`–`22`).
+2. Après intégration uniquement : ouverture éventuelle **POC-G8**.
+3. Clôture AF (séparée).
+
+### Conséquences
+
+- GO versionnement ≠ GO backlog ≠ GO delivery ≠ lancement POC.
+- NO-GO versionnement : docs restent locaux.
+
+---
+
+## 8. Séquence
+
+```text
+POC-G7 VALIDÉ AVEC RÉSERVES (Option B minimale)
+  → GO versionnement docs (requis — non accordé ici)
+  → post-merge archi
+  → décision POC-G8 (FERMÉE aujourd’hui)
+  → POC-G9 / POC (NON LANCÉS)
+```
+
+---
+
+## 9. Verdict
+
+| Élément | Valeur |
+|---------|--------|
+| Option B minimale | **RETENUE** |
+| Harness autonome | **Oui** |
+| Studio | Cockpit |
+| Adaptateur | Sans autorité |
+| POC-G7 | **VALIDÉ AVEC RÉSERVES** |
+| POC-G8/G9 | **FERMÉS** |
+| POC | **Non lancé** |
+| Versionnement | **Décision requise** |
+
+**Verdict :** `ARCHITECTURE POC OPTION B DOCUMENTED WITH RESERVES — POC-G7 VALIDATED WITH RESERVES — VERSIONING DECISION REQUIRED`
+
+---
+
+*Decision pack — Option B minimale — G7 validé avec réserves — non versionné — Morris décide.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 1ef9944..6165a91 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,20 +4,21 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-orchestration-framing-post-merge-integrated` — cadrage Option B **VALIDÉ** et **INTÉGRÉ** (PR #219) ; POC **non lancé** ; POC-G7…G9 **fermés** |
+| **Statut** | `poc-architecture-option-b-validated-with-reserves` — POC-G7 **VALIDÉ AVEC RÉSERVES** ; Option B minimale ; docs **non versionnés** ; POC **non lancé** ; POC-G8/G9 **fermés** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — QA corrective documentaire PR #220 (DOC / INC légère, Standard) |
-| **Typologie cycle** | DOC / INC légère — QA corrective Standard |
-| **Cycle projet** | 9 — QA / validation corrective ; sync post-merge **versionnée** ; draft PR #220 **ouverte** |
-| **Profil SFIA** | Standard |
-| **Branche post-merge** | `capitalization/sfia-studio-poc-framing-post-merge` (**poussée**) ; draft PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) |
-| **Base canonique** | `origin/main` @ `be713c45a63c243a4d75c51d27d215d05bb621f1` |
+| **Exécuteur** | Cursor — QA corrective architecture Option B (DOC/ARCH/INC, Critical) |
+| **Typologie cycle** | DOC / ARCH / INC corrective — Critical |
+| **Cycle projet** | 9 — QA corrective ; architecture Option B documentée |
+| **Profil SFIA** | Critical |
+| **Branche architecture** | `architecture/sfia-studio-poc-orchestration` (**locale**, non poussée) |
+| **Base canonique** | `origin/main` @ `b882892d79709acd0637d0df872c16bbe16d7ed1` |
 | **Chemin** | `projects/sfia-studio/` |
-| **AF-Option C** | **VALIDÉE** + **opérationnalisée** pour le POC (POC-CAND-03) |
-| **Cadrage POC** | `20`–`22` — **VALIDÉS et INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
-| **POC** | **Non lancé** — architecture / backlog / delivery POC **non lancés** |
-| **Prochaine décision** | **GO merge** de la PR #220 (distinct) ; ouverture éventuelle **POC-G7** après intégration — **fermée** |
+| **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur |
+| **Cadrage POC** | `20`–`22` — **INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
+| **Architecture POC** | `23`–`25` — **Option B minimale** ; POC-G7 **VALIDÉ AVEC RÉSERVES** ; **non versionnée** |
+| **POC** | **Non lancé** — backlog / delivery **fermés** |
+| **Prochaine décision** | GO **versionnement** docs architecture — **non accordé** ; POC-G8 après intégration seulement |
 
 ---
 
@@ -47,11 +48,13 @@
 | Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
 | Automatisation | L3 + L4* / L0 — L5 global interdit (POC-G4) |
 | Git futur POC | Lecture réelle OK ; écritures distantes **simulées** (POC-G5) |
-| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7…G9 **fermés** |
-| Branche cadrage | `project/sfia-studio-poc-orchestration-framing` (**conservée**) |
-| Branches historiques | `functional-design`, `pre-framing`, `functional-architecture` **conservées** |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES** ; POC-G8/G9 **fermés** |
+| Sync post-merge | PR #220 — **MERGED** (`b882892…`) |
+| Architecture POC | **Option B minimale** (`23`–`25`) — validée avec réserves ; **non versionnée** |
+| Branche cadrage | conservée |
+| Branches historiques | conservées |
 
-> Cadrage **validé et intégré** sur `main`. POC **non lancé**. Architecture / backlog / delivery POC **non lancés**. POC-G7 = décision distincte future.
+> Cadrage intégré. Sync #220 mergée. Architecture **Option B minimale** (Studio cockpit + adaptateur + harness autonome). POC-G7 **validé avec réserves**. POC **non lancé**. Versionnement = GO distinct.
 
 ---
 
@@ -128,14 +131,14 @@ Pré-cadrage
   → post-merge / cleanup
   → capitalisation P0 (PR #218)
   → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219 / `be713c45…`) — POC non lancé
-  → post-merge sync documentaire       ← **versionnée** ; draft PR #220 ouverte ; merge = GO Morris distinct
-  → architecture POC ciblée             ← prochaine décision **possible** (POC-G7) — **fermée**
+  → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
+  → architecture POC ciblée             ← POC-G7 **VALIDÉ AVEC RÉSERVES** — Option B minimale (`23`–`25`) — **non versionnée**
   → backlog POC borné                   ← POC-G8 **fermé**
   → delivery POC                        ← POC-G9 **fermé**
   → décision Morris : abandon / itération / préparation MVP
 ```
 
-Cadrage POC : **validé et intégré**. Sync post-merge : **versionnée** (draft PR #220). Architecture / backlog / delivery POC : **non lancés**. MVP / industrialisation : **non engagés**.
+Cadrage intégré. Architecture Option B **validée avec réserves** (non versionnée). Harness autonome + Studio cockpit + adaptateur fin. POC **non lancé**.
 
 ---
 
@@ -219,10 +222,20 @@ Cadrage POC : **validé et intégré**. Sync post-merge : **versionnée** (draft
 |----------|--------|
 | PR | [#219](https://github.com/mcleland147/sfia-workspace/pull/219) — **MERGED** (squash) |
 | Merge | `be713c45a63c243a4d75c51d27d215d05bb621f1` |
-| Titre | `docs(sfia-studio): validate POC orchestration framing (#219)` |
+| Sync post-merge | PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) — **MERGED** (`b882892…`) |
 | POC-G10 | **CONSOMMÉ** |
 
-> POC **non lancé**. Runtime / techno **ouverts** (non sélectionnés). POC-G7 = décision distincte future (**fermée**).
+### Architecture POC orchestration — Option B minimale (POC-G7 VALIDÉ AVEC RÉSERVES)
+
+| Document | Rôle |
+|----------|------|
+| [23-poc-orchestration-technical-architecture.md](./23-poc-orchestration-technical-architecture.md) | Option B minimale ; harness autonome ; adaptateur ; Option A = test |
+| [24-poc-orchestration-contracts-security-and-observability.md](./24-poc-orchestration-contracts-security-and-observability.md) | Contrats Studio/adaptateur/harness ; sécurité |
+| [25-poc-orchestration-architecture-decision-pack.md](./25-poc-orchestration-architecture-decision-pack.md) | ARCH-POC-CAND-* validées (avec réserves) |
+
+> POC-G7 **VALIDÉ AVEC RÉSERVES**. Docs **non versionnés**. POC-G8/G9 **fermés**. Runtime/protocole **ouverts**. POC **non lancé**.
+
+> Studio = cockpit. Adaptateur = sans autorité. Harness = cœur d’exécution autonome. Option C écartée (1er POC).
 
 ---
 
@@ -322,7 +335,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Sync #212 + finalisation #213 | **INTÉGRÉES** |
 | Clôture formelle cycle architecture | **Non** — non automatique |
 | Sort des branches historiques | Conservées ; décisions distinctes |
-| Contenu / architecture du POC orchestration | Cadrage **VALIDÉ + INTÉGRÉ** (PR #219) ; architecture POC (POC-G7) **fermée** |
+| Contenu / architecture du POC orchestration | Option B minimale — POC-G7 **VALIDÉ AVEC RÉSERVES** ; non versionnée ; G8/G9 fermés |
 | Définition MVP | **Non pris** |
 | Industrialisation | **Non engagée** |
 | Responsive / a11y complète / CI GitHub | **Ouverts** (réserves P0) |
@@ -331,20 +344,20 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 > Conception : intégrée (PR #209 / #210). Architecture fonctionnelle : intégrée (#211–#213). Architecture technique P0 + Delivery P0 : **intégrés** (PR #217 / `759ab0b…`). Aucune D-VAL-12.
 
-### Orientation Morris — Option B (POC orchestration)
+### Orientation Morris — architecture POC
 
-> Cadrage **VALIDÉ** (2026-07-19) et **INTÉGRÉ** (PR #219 / `be713c45…`). Sync post-merge **versionnée** (draft PR #220). Scénario **S1**. L3+L4*/L0. Écritures distantes simulées. Orchestrateur local **avec réserve** (outil ouvert).
-> **POC non lancé.** Prochaines décisions : **GO merge #220** ; éventuellement **POC-G7** après intégration — **fermée**.
+> POC-G7 **VALIDÉ AVEC RÉSERVES**. **Option B minimale** : Studio cockpit + adaptateur fin + harness autonome. Option A = test/dégradé. Option C écartée (1er POC).
+> **POC non lancé.** Versionnement docs = GO distinct. POC-G8 **fermé**.
 
 ---
 
 ## 8. Prochaine décision
 
-1. **GO merge** de la draft PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) — **non autorisé** ici (GO commit / push / draft PR **consommé**).
-2. Décision distincte éventuelle **POC-G7** (architecture POC) après intégration — **fermée**.
-3. Clôture formelle architecture fonctionnelle (toujours séparée).
+1. GO **versionnement** (commit / push / draft PR) des docs `23`–`25` et sync README/`07`/`20`–`22` — **non accordé**.
+2. Après intégration : éventuel **POC-G8** — **fermé**.
+3. Clôture formelle AF (séparée).
 
-**Verdict documentaire :** `CORRECTION COMPLETE — PR #220 UPDATED — READY FOR MORRIS MERGE DECISION`
+**Verdict documentaire :** `ARCHITECTURE POC OPTION B DOCUMENTED WITH RESERVES — POC-G7 VALIDATED WITH RESERVES — VERSIONING DECISION REQUIRED`
 
 ---
 
@@ -353,11 +366,10 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Élément | Source |
 |---------|--------|
 | Méthode | SFIA v2.6 — Option C méthode |
-| Socle intégré | `main` @ `be713c45…` (PR #219) |
-| Cadrage POC | `20`–`22` **validés et intégrés** sur `main` |
-| Sync post-merge | branche poussée + draft PR [#220](https://github.com/mcleland147/sfia-workspace/pull/220) — **merge non effectué** |
+| Socle | `main` @ `b882892…` |
+| Architecture POC | `23`–`25` locaux (non versionnés) |
 | Handoff | `sfia/review-handoff` |
 
 ---
 
-*SFIA Studio — cadrage POC VALIDÉ + INTÉGRÉ (PR #219) — sync post-merge versionnée (PR #220 draft) — merge non autorisé — POC NON LANCÉ — POC-G7/G8/G9 fermés — Morris décide.*
+*SFIA Studio — Option B minimale — POC-G7 VALIDÉ AVEC RÉSERVES — non versionné — POC NON LANCÉ — Morris décide (versionnement).*
```

---

## 14. Contenu complet — document 23

```markdown
# SFIA Studio — Architecture technique POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `23-poc-orchestration-technical-architecture.md` |
| **Cycle** | 6 — Architecture technique (+ correction QA Option B) |
| **Profil** | Critical |
| **Branche** | `architecture/sfia-studio-poc-orchestration` (**locale**, non poussée) |
| **Base** | `origin/main` @ `b882892d79709acd0637d0df872c16bbe16d7ed1` |
| **Statut** | **VALIDÉE AVEC RÉSERVES** (POC-G7) — documentée, **non versionnée** |
| **Décision architecture** | **Option B minimale** — Studio cockpit + adaptateur fin + harness autonome |
| **POC-G8 / G9** | **FERMÉS** |
| **POC** | **Non lancé** |
| **Runtime / techno / protocole** | **Ouverts** (non figés) |

> Architecture **validée avec réserves** par Morris. Versionnement = GO distinct. POC-G8 **non ouvert**. Aucun code.

---

## 1. Contexte

| Fait | Référence |
|------|-----------|
| Cadrage POC | PR #219 / `be713c45…` |
| Sync post-merge | PR #220 / `b882892…` **MERGED** |
| AF-Option C | Studio ≠ orchestrateur — **VALIDÉE** |
| App P0 | Next fixtures ; Git/Cursor simulés ; pas d’orch. |
| Décision Morris | **Option B minimale** retenue ; POC-G7 **VALIDÉ AVEC RÉSERVES** |

Objectif S1 inchangé : boucle DOC read-only gouvernée, rejet hors allowlist, writes distantes absentes, L0 Morris, Git = vérité.

---

## 2. Exigences (inchangées + E14)

| ID | Exigence |
|----|----------|
| E1–E12 | Séparation AF-C ; Git vérité ; L0 ; read Git ; deny writes ; rejet allowlist ; Cursor borné ; journal ; stop ; réversible ; secrets ; L3/L4*/L5 |
| E13 | Logique d’orchestration **hors** `app/**` |
| E14 | Studio = cockpit ; adaptateur **sans autorité** ; harness **autonome** et testable sans UI |

---

## 3. Principes

P1 Repo-first · P2 Décision ≠ exécution · P3 Fail closed · P4 Least privilege · P5 Simplicité locale · P6 Harness autonome · P7 Adaptateur fin · P8 Studio ≠ vérité · P9 Pas d’API Cursor inventée · P10 Option B = extension d’Option A (cœur harness préservé)

---

## 4. Options A / B / C — statut Morris

### 4.1 Option A — Harness autonome (historique / mode test)

**Statut :** **conservée** comme socle technique et mode de test / diagnostic / dégradé. **Non rejetée.** **Non retenue** comme architecture utilisateur du premier POC.

### 4.2 Option B minimale — **RETENUE**

Studio (cockpit) → adaptateur fin → harness autonome (gates, policies, Git, Cursor, journal, preuves).

| Critère | Évaluation |
|---------|------------|
| Preuve S1 | ★★★ (même cœur A) |
| AF-Option C | ★★★ |
| Démo cockpit | ★★★ |
| Risque Option C | Faible si adaptateur borné |
| Dette UI | Minimale, reportée au delivery |

### 4.3 Option C — Orch. dans l’app

**Écartée** pour le premier POC (couplage / seconde vérité). Conservée comme historique ; non interdite pour toute trajectoire future hors premier POC.

### 4.4 Challenge

| Question | Réponse |
|----------|---------|
| Utile maintenant ? | Oui — B prouve S1 + cockpit sans fondre Runtime |
| Drift vers C ? | **Non** si frontières §5–7 respectées |
| Harness autonome ? | **Oui** — cœur inchangé vs A |
| Plus simple possible ? | A plus simple hors UI ; B minimale = plus simple *avec* cockpit |

---

## 5. Architecture logique — Option B minimale

```text
[Morris] --GO/STOP explicites--> [SFIA Studio cockpit]
[SFIA Studio] --intention / gate / stop / query--> [StudioAdapter] (fin, sans autorité)
[StudioAdapter] --AdapterEnvelope--> [Harness CLI autonome]
[Harness Orchestrator]
   ├─ GateValidator (revalide GO + contractHash)
   ├─ PolicyEngine (allow/deny fail-closed)
   ├─ StateMachine
   ├─ GitReaderPort (read-only réel)
   ├─ CursorExecutorPort (fixture|manual|adapter-future)
   ├─ EventJournal + ProofStore
   └─ Status/Proof responses --> Adapter --> Studio (vue dérivée)
[Mode dégradé / test] Harness utilisable **sans** Studio (= Option A)
```

---

## 6. Responsabilités

| Composant | Fait | Interdit |
|-----------|------|----------|
| **Studio** | Intention, présentation gate, STOP, suivi, consultation preuves | Auto-GO ; exec Git/Cursor ; évaluer allowlist ; vérité exclusive ; contourner harness |
| **Adaptateur** | Transformer / transmettre messages ; corrélation ; renvoyer vues | Décider ; policy ; modifier contrat ; créer GO ; masquer rejet/stop ; vérité durable |
| **Harness** | Revalider GO/contrat/allowlist ; Git ; CursorPort ; journal ; preuves ; états | Arbitrer L0 ; write remote |
| **GPT** | Qualification hors bande | Commander orch. |
| **Morris** | GO / STOP / CLOSE | — |

---

## 7. Flux

### 7.1 Nominal

```text
Studio Intent → Adapter → Harness QUALIFIED/GATE_OPEN
  → Studio présente dossier → Morris GO explicite
  → Adapter StudioGateSubmission → Harness revalide → AUTHORIZED
  → PRECHECK → ORCHESTRATING → EXECUTING → PROOF_READY
  → Statuts/preuves → Adapter → StudioExecutionView
  → Morris CLOSE → CLOSED
```

### 7.2 Rejet hors allowlist

```text
AUTHORIZED → policy deny → REJECTED + event
  → Studio affiche rejet (pas de retry auto)
  → correction contrat + **nouveau GO** requis
```

### 7.3 STOP

```text
StudioStopRequest → Adapter → Harness STOP prioritaire → STOPPED
  → flush journal → vue Studio mise à jour
```

### 7.4 Dégradé

Harness CLI sans Studio (fixtures + fichier GO) — tests / diagnostic.

---

## 8. Adaptateur — portée

**Autorisé :** intention→demande ; transmission GO/STOP ; query statut ; affichage état/erreurs/preuves ; IDs corrélation.

**Exclu :** orch. métier ; Git/Cursor ; élévation ; modif contrat ; retry auto ; auto-GO ; auto-clôture.

**Protocoles candidats (ouverts) :** fichier/répertoire · processus enfant · HTTP local · IPC · CLI encapsulé.
Choix = backlog/delivery sauf cohérence bloquante. Critères : simplicité, sécurité, testabilité, pas de daemon inutile, harness sans Studio.

---

## 9. État / Git / Cursor

Modèle d’états `21` + transitions `24` — harness = autorité d’application ; UI = vue dérivée du journal.

Git read réel ; denylist writes ; `gitEffect=none-remote`.

Cursor via port ; modes fixture/manual/adapter-future ; **pas d’API inventée**.

---

## 10. `app/**`

Au **delivery uniquement** (POC-G9, fermé) : modifications **minimales** cockpit / adaptateur / affichage.
Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans ce cycle.

---

## 11. Recommandation → décision

| Élément | Statut |
|---------|--------|
| Option B minimale | **RETENUE / VALIDÉE** (Morris) |
| Harness autonome | **Conservé** (cœur) |
| Option A | Mode test / dégradé **VALIDÉ** |
| Option C | **Écartée** premier POC |
| POC-G7 | **VALIDÉ AVEC RÉSERVES** |
| Versionnement docs | **NON AUTORISÉ** ici |

---

## 12. Réserves

1. Cursor réel non prouvé
2. Techno harness ouverte (Node/TS candidat)
3. Protocole adaptateur ouvert
4. Allowlist détaillée → backlog
5. Modif `app/**` seulement au delivery, bornée
6. Preuve QA : Studio ≠ seconde vérité
7. Clôture AF séparée
8. POC-G8/G9 fermés ; POC non lancé

---

*Architecture POC Option B minimale — POC-G7 VALIDÉ AVEC RÉSERVES — non versionnée — POC NON LANCÉ — Morris décide (versionnement).*
```

---

## 15. Contenu complet — document 24

```markdown
# SFIA Studio — Contrats, sécurité et observabilité POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `24-poc-orchestration-contracts-security-and-observability.md` |
| **Statut** | **VALIDÉ AVEC RÉSERVE** (mise à jour Option B) — POC-G7 |
| **Architecture** | Option B minimale (Studio + adaptateur + harness) |
| **POC** | **Non lancé** |
| **Base** | `main` @ `b882892…` |

> Contrats conceptuels. Harness revalide tout. Adaptateur sans autorité.

---

## 1. Corrélation

`requestId`, `cycleId`, `gateId`, `executionId`, `contractHash`, `correlationId` — timestamps Europe/Paris.

---

## 2. Contrats cœur harness (inchangés dans l’esprit)

OrchestrationRequest · GateDecision · Allowlist/Denylist · ExecutionContract · OrchestrationResult · Event — voir cadrage `21` et sections historiques.
**Invariant :** absence de GO valide ⇒ rejet ; fail closed.

### Allowlist / Denylist (rappel)

Allow : lecture paths projet/méthode ; `git.read.*` ; `cursor.analyze` ; `proof.write.local`.
Deny : commit/push/merge/PR/API write ; shell libre ; secrets ; fs hors `proofDir` ; toute action non listée.

---

## 3. Contrats Studio / Adaptateur (Option B)

### 3.1 StudioIntent

| Champ | Obligatoire |
|-------|-------------|
| `requestId` | Oui |
| `title` | Oui |
| `requestedCycle` | Oui |
| `requestedScope` | Oui |
| `operator` | Oui |
| `createdAt` | Oui |

### 3.2 StudioGateSubmission

| Champ | Obligatoire | Règle |
|-------|-------------|-------|
| `gateId` | Oui | |
| `requestId` | Oui | |
| `decision` | Oui | GO / CORRIGER / STOP / CLOSE — **explicite** |
| `scope` | Oui | |
| `issuedBy` | Oui | Morris |
| `issuedAt` / `expiresAt` | Oui | |
| `contractHash` | Oui | Match contrat courant |

### 3.3 StudioStopRequest

| Champ | Obligatoire |
|-------|-------------|
| `requestId` | Oui |
| `executionId` | Oui si exec active |
| `issuedBy` | Oui |
| `issuedAt` | Oui |
| `reason` | Oui |

### 3.4 AdapterEnvelope

| Champ | Obligatoire |
|-------|-------------|
| `schemaVersion` | Oui |
| `correlationId` | Oui |
| `messageType` | Oui (`intent`\|`gate`\|`stop`\|`statusQuery`\|`status`\|`proof`) |
| `payload` | Oui |
| `emittedAt` | Oui |

### 3.5 StudioExecutionView

| Champ | Obligatoire |
|-------|-------------|
| `requestId` / `executionId` | Oui |
| `status` | Oui (dérivé journal) |
| `lastEvent` | Oui |
| `proofRefs` | Oui |
| `errors` | Oui |
| `updatedAt` | Oui |

---

## 4. Invariants Option B

1. L’adaptateur **ne crée aucune décision**.
2. Le harness **revalide** tout message (GO, hash, allowlist, Git).
3. `contractHash` obligatoire pour GO ; modif contrat ⇒ GO invalide.
4. Statut UI **dérivé** du journal harness — pas de vérité UI exclusive.
5. Absence de message / timeout **≠** GO.
6. Retry après rejet ⇒ correction + **nouveau GO**.
7. STOP **prioritaire**.
8. UI indisponible **ne corrompt pas** le harness.
9. Harness **testable sans Studio**.
10. Studio / adaptateur **n’exécutent pas** Git ni Cursor.

---

## 5. Transitions d’état

Auteur L0 = Morris (via StudioGateSubmission / Stop, **revalidés** harness).
Harness applique ; Studio affiche. Transitions interdites inchangées (`GATE_OPEN`→`EXECUTING` sans GO, etc.).

---

## 6. Sécurité

### 6.1 Menaces cœur + Option B

| Menace | Contrôle |
|--------|----------|
| Auto-GO / timeout=GO | GateValidator ; décision explicite |
| Write remote | Denylist + `none-remote` |
| Path traversal / symlinks | Canonicalisation |
| Command injection | Pas de shell libre |
| Prompt injection | CursorPort borné |
| Secrets | Interdits ; redaction |
| **Falsification GO UI** | Revalidation harness + hash + issuedBy |
| **Replay message adaptateur** | `correlationId` / idempotence / issuedAt |
| **Désync Studio / journal** | Vue dérivée ; refresh depuis harness |
| **Élévation de scope** | Scope + contractHash revalidés |
| **Injection champs UI** | Validation schéma envelope |
| **Altération contractHash** | Recompute côté harness |
| **Contournement harness** | UI n’a pas d’accès Cursor/Git direct |
| **Preuve sensible dans Studio** | Refs + redaction ; pas de secrets |

### 6.2 Least privilege

Adaptateur : transmission seule. Harness : user local ; env filtré ; pas de tokens write.

---

## 7. Observabilité

Journal JSONL harness = source. Studio affiche `StudioExecutionView`.
Preuves S1 : GO, rejet allowlist, HEAD avant/après, `none-remote`, artefacts Cursor/manual.

Dégradé : CLI harness sans UI.

---

## 8. Stop / reprise / réversibilité

STOP prioritaire via `StudioStopRequest` ou harness direct.
Reprise = nouveau GO + nouvel `executionId`.
Effets locaux `proofDir` seulement ; remote inchangé.

---

## 9. Critères d’acceptation (Option B)

1. Option B minimale documentée ; A = test/dégradé ; C écartée 1er POC.
2. Harness autonome ; Studio cockpit ; adaptateur sans autorité.
3. Contrats §3 présents.
4. Invariants §4.
5. Menaces §6 couvertes.
6. POC-G8/G9 fermés ; POC non lancé ; pas de protocole définitif non décidé.

---

*Contrats Option B — POC-G7 VALIDÉ AVEC RÉSERVES — Morris décide (versionnement).*
```

---

## 16. Contenu complet — document 25

```markdown
# SFIA Studio — Decision pack architecture POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `25-poc-orchestration-architecture-decision-pack.md` |
| **Cycle** | 6 Architecture + QA corrective Option B |
| **Profil** | Critical |
| **Statut** | POC-G7 **VALIDÉ AVEC RÉSERVES** — docs **non versionnés** |
| **Préfixe** | `ARCH-POC-CAND-*` (locaux ; ≠ D-VAL) |
| **Architecture retenue** | **Option B minimale** |
| **POC-G8 / G9** | **FERMÉS** |
| **POC** | **Non lancé** |
| **Base** | `main` @ `b882892…` |

---

## 1. Observations

1. #219/#220 MERGED.
2. Instruction POC-G7 produite puis **validée avec réserves** (Option B minimale).
3. App P0 sans orch. ; pas d’API Cursor repo.
4. AF-Option C : Studio / orch. séparés.
5. Versionnement architecture **non autorisé** ici.
6. POC-G8 **non ouvert** tant que docs non intégrés.

---

## 2. Options — statut

| Option | Statut Morris |
|--------|---------------|
| **A** Harness autonome | Conservée — test / diagnostic / dégradé |
| **B minimale** Studio + adaptateur + harness | **RETENUE / VALIDÉE** |
| **C** Orch. dans app | **Écartée** premier POC |

B = **extension** de A (cœur harness) — **pas** Option C.

---

## 3. Comparaison

| Critère | A | B min | C |
|---------|---|-------|---|
| Preuve S1 | ★★★ | ★★★ | ★★ |
| Cockpit | — | ★★★ | ★★★ |
| AF-Option C | ★★★ | ★★★ | ★ |
| Risque couplage | Faible | Faible si borné | Fort |
| Autonomie harness | ★★★ | ★★★ | ★ |

---

## 4. ARCH-POC-CAND-* — statuts Morris

| ID | Décision | Statut |
|----|----------|--------|
| **01** | Adopter **Option B minimale** (Studio cockpit + adaptateur fin + harness autonome) | **VALIDÉE** |
| **02** | Écarter Option C pour le premier POC | **VALIDÉE** |
| **03** | Conserver Option A comme mode autonome test / diagnostic / dégradé | **VALIDÉE** |
| **04** | Orch. = processus local autonome déterministe ; techno ouverte (Node/TS candidat) | **VALIDÉE AVEC RÉSERVE** |
| **05** | Cursor via `CursorExecutorPort` ; pas d’API inventée | **VALIDÉE AVEC RÉSERVE** |
| **06** | Git read réel ; writes distantes interdites ; `gitEffect=none-remote` | **VALIDÉE** |
| **07** | Contrats / états / transitions `24` (màj Option B) | **VALIDÉE AVEC RÉSERVE** |
| **08** | Journal JSONL + preuves locales | **VALIDÉE** |
| **09** | Modif `app/**` possible **au delivery uniquement**, minimale (cockpit/adaptateur/vues) ; orch. hors `app/**` | **VALIDÉE AVEC RÉSERVE** |
| **10** | Après validation+intégration archi → prochaine porte = **POC-G8** | **VALIDÉE** |
| **11** | Archi POC ≠ Runtime produit ; L4* plafond chemin | **VALIDÉE** |
| **12** | Versionnement docs `23`–`25` = GO Morris distinct | **VALIDÉE** |

Aucun nouveau D-VAL.

---

## 5. Gates

| Gate | Statut |
|------|--------|
| POC-G1…G6 | **VALIDÉS** |
| POC-G10 | **CONSOMMÉ** |
| **POC-G7** | **VALIDÉ AVEC RÉSERVES** |
| POC-G8 | **FERMÉ** |
| POC-G9 | **FERMÉ** |
| Versionnement archi | **NON AUTORISÉ** |
| Delivery / lancement POC | **NON AUTORISÉ** |

**≠ READY FOR BACKLOG** tant que docs non intégrés.

---

## 6. Ouverts / réserves

1. Cursor réel
2. Techno harness
3. Protocole adaptateur
4. Allowlist détaillée (backlog)
5. Portée exacte modifs `app/**` au delivery
6. Preuve QA non-seconde-vérité
7. Clôture AF
8. POC-G8/G9

---

## 7. Décisions Morris restantes

1. GO **versionnement** (commit / push / draft PR) des docs `23`–`25` (+ sync README/`07`/`20`–`22`).
2. Après intégration uniquement : ouverture éventuelle **POC-G8**.
3. Clôture AF (séparée).

### Conséquences

- GO versionnement ≠ GO backlog ≠ GO delivery ≠ lancement POC.
- NO-GO versionnement : docs restent locaux.

---

## 8. Séquence

```text
POC-G7 VALIDÉ AVEC RÉSERVES (Option B minimale)
  → GO versionnement docs (requis — non accordé ici)
  → post-merge archi
  → décision POC-G8 (FERMÉE aujourd’hui)
  → POC-G9 / POC (NON LANCÉS)
```

---

## 9. Verdict

| Élément | Valeur |
|---------|--------|
| Option B minimale | **RETENUE** |
| Harness autonome | **Oui** |
| Studio | Cockpit |
| Adaptateur | Sans autorité |
| POC-G7 | **VALIDÉ AVEC RÉSERVES** |
| POC-G8/G9 | **FERMÉS** |
| POC | **Non lancé** |
| Versionnement | **Décision requise** |

**Verdict :** `ARCHITECTURE POC OPTION B DOCUMENTED WITH RESERVES — POC-G7 VALIDATED WITH RESERVES — VERSIONING DECISION REQUIRED`

---

*Decision pack — Option B minimale — G7 validé avec réserves — non versionné — Morris décide.*
```

---

## 17. Commit

| Champ | Valeur |
|-------|--------|
| SHA | `7736fac4e274afae21565af9dd2b625b316b72d8` |
| Message | `docs(sfia-studio): document POC Option B architecture` |
| Fichiers | 8 (5M + 3A) |
| Stats | +655 / −222 |

---

## 18. Push

| Champ | Valeur |
|-------|--------|
| Remote branch | `origin/architecture/sfia-studio-poc-orchestration` |
| SHA distant | `7736fac4e274afae21565af9dd2b625b316b72d8` |
| Match local | **OUI** |
| Autres refs poussées | **NON** |

---

## 19. Draft PR

| Champ | Valeur |
|-------|--------|
| Numéro | **#221** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/221 |
| state | **OPEN** |
| isDraft | **true** |
| merged | **false** (`mergedAt=null`) |
| base | `main` |
| head | `architecture/sfia-studio-poc-orchestration` |
| head SHA | `7736fac4e274afae21565af9dd2b625b316b72d8` |
| Titre | docs(sfia-studio): document POC Option B architecture |

Corps conforme : Summary Option B ; G7 avec réserves ; G8/G9 fermés ; POC non lancé ; hors périmètre code/backlog/delivery/merge ; aucune autorisation de merge.

---

## 20. Actions interdites restantes

- merge
- ready for review
- suppression de branche
- ouverture POC-G8 / POC-G9
- backlog
- delivery
- modification code / `app/**`
- lancement POC
- choix Runtime / protocole définitif

---

## 21. Verdict

**`PR READINESS COMPLETE WITH RESERVES — OPTION B ARCHITECTURE DRAFT PR OPEN — MERGE NOT AUTHORIZED`**
