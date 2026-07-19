# ChatGPT Review Pack — SFIA Studio POC Orchestration Framing — PR Readiness

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-19 12:47:46 CEST |
| **Cycle** | 13 — PR readiness |
| **Profil SFIA** | Critical |
| **Typologie** | DOC / EVOL |
| **Projet** | SFIA Studio |
| **Branche** | `project/sfia-studio-poc-orchestration-framing` |
| **HEAD avant commit** | `aa8dbd4606c52df7662276a99c873b4d93e001ba` |
| **HEAD après commit** | `3b162ecb5212e9f62ac20f0066df9fbc545be4cc` |
| **Draft PR** | [#219](https://github.com/mcleland147/sfia-workspace/pull/219) — DRAFT |
| **origin/main** | `aa8dbd4606c52df7662276a99c873b4d93e001ba` |
| **merge-base** | `aa8dbd4606c52df7662276a99c873b4d93e001ba` |
| **Décision Morris consommée** | Validation cadrage POC orchestration Option B — **2026-07-19** |
| **Niveau review pack** | **full** |
| **Review Handoff Git** | required |

---

## 1. Décision Morris consommée (2026-07-19)

### 1.1 POC-CAND

| ID | Statut |
|----|--------|
| POC-CAND-01 | **VALIDÉE** — problème + objectif de preuve |
| POC-CAND-02 | **VALIDÉE** — scénario **S1** (DOC read-only + rejet hors allowlist) |
| POC-CAND-03 | **VALIDÉE** — frontières Studio / orch. / Git / Cursor ; AF-Option C opérationnalisée |
| POC-CAND-04 | **VALIDÉE** — L3 cible + L4* plafond chemin ; L0 arbitrage ; L5 global interdit |
| POC-CAND-05 | **VALIDÉE** — lecture Git réelle OK ; écritures distantes **simulées** |
| POC-CAND-06 | **VALIDÉE** — critères succès / échec / abandon |
| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** — orch. local candidat ; outil/techno/forme **ouverts** |
| POC-CAND-08 | **VALIDÉE** — prochaine étape candidate = architecture POC (pas backlog/delivery) |
| POC-CAND-09 | **VALIDÉE** au titre de POC-G10 — commit / push / draft PR cadrage |
| POC-CAND-10 | **VALIDÉE** — aucun lancement POC sans gates ouverts |

### 1.2 Gates

| Gate | Statut |
|------|--------|
| POC-G1…G6 | **VALIDÉS** |
| POC-G10 | **VALIDÉ** |
| POC-G7 / G8 / G9 | **PROPOSÉS / NON VALIDÉS** |

### 1.3 Garde-fous confirmés

- POC **non lancé**
- Aucune architecture Runtime / techno sélectionnée
- L4* ≠ niveau produit validé
- Merge **non autorisé**
- Aucun nouveau D-VAL

---

## 2. Local Git Truth Check

| Check | Résultat |
|-------|----------|
| Workspace | sfia-workspace |
| Branche active | `project/sfia-studio-poc-orchestration-framing` — **PASS** |
| HEAD | `aa8dbd4606c52df7662276a99c873b4d93e001ba` (= base cadrage) — **PASS** |
| origin/main | `aa8dbd4606c52df7662276a99c873b4d93e001ba` — **égal HEAD** — **PASS** (pas d’avance) |
| merge-base | `aa8dbd4606c52df7662276a99c873b4d93e001ba` — **PASS** |
| Staged | vide — **PASS** |
| Fichiers projet | README + 07 modifiés ; 20/21/22 untracked — **PASS** |
| app/** / méthode | non touchés — **PASS** |

**Verdict Local Git Truth Check :** PASS

---

## 3. Sources lues

- `prompts/templates/sfia-cycle-execution-template.md`
- `projects/sfia-studio/README.md`
- `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`
- `projects/sfia-studio/20-poc-orchestration-framing.md`
- `projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md`
- `projects/sfia-studio/22-poc-orchestration-decision-pack.md`
- Handoff antérieur : commit `bf17960f87711247a9a8cc298d35aeeba4c0d125` (cadrage prêt revue)

---

## 4. Fichiers modifiés / créés (périmètre exact)

| Fichier | Action |
|---------|--------|
| `projects/sfia-studio/README.md` | modifié |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | modifié |
| `projects/sfia-studio/20-poc-orchestration-framing.md` | créé |
| `projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md` | créé |
| `projects/sfia-studio/22-poc-orchestration-decision-pack.md` | créé |

Exactement **cinq** fichiers projet. Aucun `app/**`. Aucune suppression.

---

## 5. Scénario / automatisation / écritures / statut POC

| Élément | Valeur |
|---------|--------|
| Scénario | **S1** SÉLECTIONNÉ / VALIDÉ |
| Variante | rejet allowlist **obligatoire** |
| Automatisation | L3 cible + L4* plafond chemin ; arbitrage **L0** ; L5 global **interdit** |
| Écritures distantes (futur POC) | **Simulées** |
| Lecture Git | réelle autorisée (futur POC) |
| Statut POC | **Non lancé** |
| MVP / industrialisation | **Non engagés** |
| Architecture POC | **Non lancée** (POC-G7 fermé) |
| Outil orchestrateur | **Ouvert** (réserve POC-CAND-07) |

---

## 6. Validations avant commit

| Validation | Résultat |
|------------|----------|
| `git diff --check` | PASS |
| Exactement 5 fichiers projet | PASS |
| Aucun app/** | PASS |
| Aucun fichier méthode | PASS |
| Aucune suppression | PASS |
| POC-G7…G9 non validés | PASS |
| POC non lancé | PASS |
| Runtime non sélectionné | PASS |
| Horodatage Europe/Paris | 2026-07-19 12:47:46 CEST |

---

## 7. Diff complet — README.md + 07 (vs HEAD)

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 08babef..abf5ac3 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,15 +4,15 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 15 — Capitalisation / REX (post-Delivery P0) ; historique cadrage / conception conservé |
-| **Profil** | Capitalization — Standard |
+| **Cycle** | 13 — PR readiness (cadrage POC validé) ; historique Delivery/capitalisation conservé |
+| **Profil** | Critical |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | `p0-delivery-integrated-next-poc-orchestration-framing` ; Delivery P0 **clôturé** ; UX/UI **clôturé** ; architecture fonctionnelle intégrée (clôture formelle **ouverte**) |
-| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND / AF-CAND / TA-DEC historiques inchangés ; **Option B — POC orchestration** = prochaine orientation Morris (**cadrage**, non lancé) |
+| **Statut** | `poc-orchestration-framing-validated-draft-pr` ; cadrage **VALIDÉ** 2026-07-19 ; POC **non lancé** ; POC-G7…G9 **fermés** |
+| **Décisions** | POC-CAND-01…10 selon Morris 2026-07-19 ; POC-G1…G6 + G10 **VALIDÉS** ; D-VAL/FD/AF/TA historiques inchangés |
 | **Destinataire** | Morris |
-| **Source de vérité** | Git `main` @ `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` — cadrage → Delivery P0 intégrés |
+| **Source de vérité** | `origin/main` @ `aa8dbd4606c52df7662276a99c873b4d93e001ba` ; branche `project/sfia-studio-poc-orchestration-framing` |
 
-> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Delivery P0 **CLÔTURÉ** (PR #217). Prochaine orientation : **cadrage POC orchestration** (Option B) — **non démarré**. Clôture formelle architecture fonctionnelle **non prononcée**. **Pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
+> Cadrage POC **VALIDÉ** le **2026-07-19**. Versionnement (draft PR) **autorisé**. **Merge non autorisé**. POC **non lancé**. Architecture POC (POC-G7) **non ouverte**.
 
 ---
 
@@ -34,11 +34,14 @@
 | Branche Delivery | **Supprimée** (local + remote) |
 | Gate Morris Delivery P0 | **Aucune restante** |
 | App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
-| Prochaine orientation | **Option B — cadrage POC orchestration** — sélectionnée, **non démarrée** |
+| Prochaine orientation | Cadrage POC **VALIDÉ** 2026-07-19 ; prochaine décision possible = **architecture POC (POC-G7)** — **non lancée** |
 | Produit complet / MVP / industrialisation | **Non atteints / non engagés** |
+| Décision Morris cadrage | **2026-07-19** — POC-G1…G6 + G10 **VALIDÉS** ; S1 ; L3+L4*/L0 ; writes distantes simulées |
+| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** — outil orchestrateur ouvert |
+| Branche cadrage POC | `project/sfia-studio-poc-orchestration-framing` |
 | Branches historiques | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |
 
-> Les lignes « Delivery autorisé — non exécuté » des versions antérieures de ce document étaient **exactes à leur date**. Elles sont **obsolètes** après PR #217 et remplacées ici par l’état factuel ci-dessus.
+> Cadrage **validé** ≠ POC lancé ≠ architecture validée ≠ merge autorisé.
 
 ### Trace factuelle — Delivery P0 (historique compact)
 
@@ -113,44 +116,25 @@ Pré-cadrage
   → Delivery P0
   → PR #217 / intégration main
   → post-merge / cleanup
-  → cadrage POC orchestration          ← prochaine étape validée (Option B) — non démarrée
-  → architecture POC ciblée             ← candidate
-  → backlog POC borné                   ← candidate
-  → delivery POC                        ← candidate
+  → capitalisation P0 (PR #218)
+  → cadrage POC orchestration          ← **VALIDÉ** Morris 2026-07-19 — POC non lancé
+  → architecture POC ciblée             ← prochaine décision possible (POC-G7) — **non lancée**
+  → backlog POC borné                   ← POC-G8 fermé
+  → delivery POC                        ← POC-G9 fermé
   → décision Morris : abandon / itération / préparation MVP
 ```
 
 ### Précisions
 
-- Étapes jusqu’au cleanup P0 : **terminées**.
-- Cadrage POC orchestration : **sélectionné** (Option B Morris), **non démarré**.
-- Étapes post-cadrage POC : **candidates**, soumises aux résultats du cadrage.
-- POC ≠ MVP ≠ industrialisation — **aucun** de ces jalons n’est engagé.
-- Architecture **fonctionnelle** : VALIDÉE / INTÉGRÉE ; clôture formelle **non prononcée**.
-- Architecture **technique P0** : VALIDÉE / INTÉGRÉE ; Delivery P0 **exécuté**.
-- Desktop P0 uniquement (1440×1024) ; responsive / a11y complète / CI / Runtime réel **ouverts**.
+- Cadrage POC : **validé** (POC-G1…G6, POC-G10).
+- Scénario **S1** sélectionné.
+- Architecture / backlog / delivery POC : **non lancés**.
+- Clôture formelle architecture fonctionnelle : **décision séparée**, toujours ouverte.
+- POC ≠ MVP ≠ industrialisation.
 
-### Orientation Option B — cadrage POC orchestration
+### Orientation Option B — état
 
-> Le prochain cycle SFIA Studio sera un cycle de cadrage visant à définir un POC d’orchestration borné entre SFIA Studio et un mécanisme d’orchestration déterministe candidat. Ce cycle devra valider la faisabilité technique sans préjuger de l’architecture produit finale, du MVP ni de l’industrialisation.
-
-**Sujets du futur cadrage (préparation — non exécution) :**
-
-1. Objectif de preuve
-2. Scénario métier unique
-3. Frontières Studio / orchestrateur
-4. Niveau d’automatisation maximal
-5. Actions read-only ou simulées
-6. Gates Morris
-7. Stop conditions
-8. Données de test
-9. Preuves attendues
-10. Critères de succès et d’abandon
-11. Sécurité et réversibilité
-12. Périmètre Git
-13. Stratégie de démonstration
-
-**Hors ce cycle de capitalisation :** architecture détaillée ; schéma API ; contrat JSON ; backlog complet ; choix d’outil Runtime ; code ; planning détaillé.
+> Cadrage validé 2026-07-19. Draft PR autorisée. Merge = GO distinct. Après post-merge : décision distincte POC-G7 uniquement.
 
 ---
 
@@ -220,20 +204,21 @@ Pré-cadrage
 | Livrable | `projects/sfia-studio/app/` sur `main` @ `759ab0b…` |
 | Ne lance pas | POC orchestration ; Git/Cursor réels ; CI Studio |
 
-### 4.6 Cadrage POC orchestration (prochain)
+### 4.6 Cadrage POC orchestration (Option B)
 
 | Champ | Contenu |
 |-------|---------|
-| Statut | **Sélectionné** (Option B Morris) — **non démarré** |
-| Objectif | Définir un POC d’orchestration borné (faisabilité) |
-| Ne lance pas | Architecture POC détaillée ; code ; outil Runtime ; MVP |
+| Statut | **VALIDÉ PAR MORRIS** — 2026-07-19 — docs `20`/`21`/`22` |
+| Scénario | **S1** sélectionné (POC-G2) |
+| Gates | POC-G1…G6 + G10 **VALIDÉS** ; POC-G7…G9 **NON VALIDÉS** |
+| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** — outil ouvert |
+| Ne lance pas | POC ; architecture ; backlog ; delivery ; MVP |
 
 ### 4.7 Sécurité (bornée)
 
 | Champ | Contenu |
 |-------|---------|
-| Déclencheur | Avant POC à permissions élevées |
-| Pourquoi pas maintenant | Identification déjà faite au cadrage ; sujets à rouvrir dans le cadrage POC |
+| Validé | Lecture Git réelle OK ; writes distantes simulées ; L5 global interdit ; secrets exclus |
 
 ---
 
@@ -269,9 +254,12 @@ Pré-cadrage
 | D-NEXT-10 | **D-VAL-11** — clôture cadrage documentaire | Morris | **VALIDÉE** — 2026-07-18 |
 | D-NEXT-11 | Sort de la branche projet historique | Morris | Conservée ; décision distincte |
 | D-NEXT-12 | Sort de `project/sfia-studio-functional-design` | Morris | Conservée ; décision distincte |
-| D-NEXT-13 | GO capitalisation documentaire post-P0 | Morris | **Consommée** (ce cycle) |
-| D-NEXT-14 | GO commit / push / PR capitalisation | Morris | **Attendue** |
-| D-NEXT-15 | GO cadrage POC orchestration | Morris | **Attendue** après intégration capitalisation |
+| D-NEXT-13 | GO capitalisation documentaire post-P0 | Morris | **Consommée** + **intégrée** (PR #218) |
+| D-NEXT-14 | GO commit / push / PR capitalisation | Morris | **FAIT** (PR #218) |
+| D-NEXT-15 | GO cadrage POC orchestration | Morris | **Consommée** — cadrage **VALIDÉ** 2026-07-19 |
+| D-NEXT-16 | Validation POC-CAND / POC-G1…G6 | Morris | **FAIT** — 2026-07-19 |
+| D-NEXT-17 | POC-G10 versionnement cadrage | Morris | **FAIT** — draft PR autorisée ; **merge non autorisé** |
+| D-NEXT-18 | Architecture / delivery POC | Morris | **Fermée** — POC-G7…G9 non validés |
 
 ---
 
@@ -333,29 +321,21 @@ Les gates DF-G4+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 ## 8. Questions Morris
 
-1. Autorisez-vous **commit / push / PR** de la capitalisation documentaire (README + `07`) ?
-2. Après intégration : autorisez-vous le **GO cadrage POC orchestration** ?
-3. Clôturez-vous formellement le cycle architecture fonctionnelle (décision **distincte**) ?
-4. Quel sort pour les branches historiques restantes ?
-5. Quelles réserves P0 (responsive / a11y / CI / postcss) prioriser avant ou pendant le POC ?
+1. Autorisez-vous le **merge** de la draft PR de cadrage ? (distinct de POC-G10)
+2. Après post-merge : ouvrez-vous **POC-G7** (architecture POC) ?
+3. Clôture formelle architecture fonctionnelle (toujours séparée) ?
 
 ---
 
-## 9. Critères de clôture du cadrage détaillé
+## 9. Critères
 
 | Critère | État |
 |---------|------|
-| 04–07 complets et cohérents | **Oui** (07 synchronisé post-P0) |
-| Alignement D-VAL-1…11 / G1–G7 / DF-G1 | **Oui** |
-| DF-G1 validé | **Oui** (D-VAL-9) |
-| Clôture formelle cadrage | **FAIT** (D-VAL-11) |
-| Cycle conception | **CLÔTURÉ** |
-| Architecture fonctionnelle | **VALIDÉE** / **INTÉGRÉE** — clôture formelle ouverte |
-| UX/UI | **CLÔTURÉ** |
-| Architecture technique P0 | **VALIDÉE** / **INTÉGRÉE** |
-| Delivery P0 | **CLÔTURÉ** (PR #217) |
-| Prochain cycle | **Cadrage POC orchestration** — sélectionné, non lancé |
-| MVP / industrialisation / Runtime réel | **Non engagés** |
+| Cadrage POC `20`–`22` | **VALIDÉ** 2026-07-19 |
+| POC lancé | **Non** |
+| POC-G7…G9 | **Fermés** |
+| MVP / industrialisation | **Non engagés** |
+| Clôture AF formelle | **Ouverte** (séparée) |
 
 ---
 
@@ -363,13 +343,12 @@ Les gates DF-G4+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Élément | Valeur |
 |---------|--------|
-| Delivery P0 | **CLÔTURÉ** — `759ab0b…` / PR #217 |
-| Statut produit | `p0-delivery-integrated-next-poc-orchestration-framing` |
-| Option B POC | **Sélectionnée** — cadrage **non démarré** |
-| Ready for POC code / Runtime | **Non** |
-| Ready for Morris capitalisation review | **Oui** |
+| Cadrage | **VALIDÉ** |
+| Versionnement | Draft PR (POC-G10) |
+| Merge | **Non autorisé** |
+| POC | **Non lancé** |
 
-**Verdict :** `CAPITALIZATION COMPLETE — P0 STATUS SYNCHRONIZED — POC ORCHESTRATION FRAMING READY`
+**Verdict :** `PR READINESS COMPLETE — DRAFT PR OPEN — MERGE NOT AUTHORIZED`
 
 ---
 
@@ -377,20 +356,10 @@ Les gates DF-G4+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 | Document | Usage |
 |----------|-------|
-| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
-| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
-| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
-| [08-functional-design.md](./08-functional-design.md) | Conception — contrat **validé / intégré** |
-| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Conception — parcours **validés** |
-| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Conception — pack de **validation / clôture** |
-| [11-functional-architecture.md](./11-functional-architecture.md) | Architecture — **VALIDÉE** et **INTÉGRÉE** |
-| [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux / frontières — D10 → AF-01 / AF-15 |
-| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option / AF-CAND |
-| [14-ux-ui-contract.md](./14-ux-ui-contract.md) | UX/UI — contrat |
-| [15-ux-ui-flows-and-screens.md](./15-ux-ui-flows-and-screens.md) | UX/UI — écrans P0 |
-| [16-ux-ui-decision-pack.md](./16-ux-ui-decision-pack.md) | UX/UI — décisions |
-| [18-technical-architecture.md](./18-technical-architecture.md) | Architecture technique P0 |
-| [19-technical-architecture-decision-pack.md](./19-technical-architecture-decision-pack.md) | TA-DEC (historique « delivery autorisé ») |
-| [app/README.md](./app/README.md) | Runtime P0 intégré |
-
-*SFIA Studio — Delivery P0 CLÔTURÉ (PR #217) — prochaine orientation = cadrage POC orchestration (Option B, non lancé) — clôture architecture fonctionnelle NON PRONONCÉE — Morris décide.*
+| [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Cadrage POC **VALIDÉ** |
+| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | S1 **SÉLECTIONNÉ** |
+| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates |
+| [11-functional-architecture.md](./11-functional-architecture.md) | AF-Option C / L0–L5 |
+| [app/README.md](./app/README.md) | Runtime P0 |
+
+*SFIA Studio — cadrage POC VALIDÉ 2026-07-19 — POC NON LANCÉ — merge non autorisé — Morris décide.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index bbc2c1d..68843ae 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,40 +4,20 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `p0-delivery-integrated-next-poc-orchestration-framing` — Delivery P0 **CLÔTURÉ** et intégré sur `main` ; prochaine orientation = **cadrage POC orchestration** (Option B) — **non lancé** |
-| **Baseline méthode** | **SFIA v2.6** (consommée — **Option C méthode** validée ; baseline inchangée) |
+| **Statut** | `poc-orchestration-framing-validated-draft-pr` — cadrage Option B **VALIDÉ PAR MORRIS** (2026-07-19) ; versionnement autorisé (POC-G10) ; POC **non lancé** ; POC-G7…G9 **fermés** |
+| **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — capitalisation post-Delivery P0 (DOC / CAPA légère, Standard) |
-| **Typologie cycle** | DOC / CAPA légère — synchronisation statut produit + trajectoire |
-| **Cycle projet** | 15 — Capitalisation / REX ; Delivery P0 **clôturé** ; UX/UI **clôturé** ; architecture fonctionnelle **intégrée** (clôture formelle **ouverte**) |
-| **Profil SFIA** | Standard (capitalisation) |
-| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée**) |
-| **Branche Delivery P0** | `project/sfia-studio-delivery-p0-implementation` — **supprimée** (local + remote) après cleanup post-merge |
-| **Figma UX** | [lrjA1WEyRpL05vKR8k29LO](https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO) — P0-00C…P0-03C @ 1440×1024 (référence initiale) |
-| **App P0** | `projects/sfia-studio/app/` — Next.js 15 / React 19 / TypeScript ; 4 routes ; fixtures locales |
-| **PR Delivery P0** | [#217](https://github.com/mcleland147/sfia-workspace/pull/217) — **MERGED** (squash) |
-| **Commit projet Delivery** | `c37b065fc59b60d01f5896aa7ebd3c130a636457` |
-| **Merge Delivery** | `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
-| **Périmètre Delivery** | 77 fichiers ; +12830 / −0 |
-| **PR architecture** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
-| **Merge architecture** | `84e48636bb78808774b51f67329167f8e9749a6b` |
-| **Acceptation Morris #211** | **OUI** — 2026-07-18 (régularisation documentaire ; sans D-VAL-12) |
-| **PR sync / finalisation archi** | [#212](https://github.com/mcleland147/sfia-workspace/pull/212) / [#213](https://github.com/mcleland147/sfia-workspace/pull/213) — **MERGED** |
-| **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; intégrée à `main`) |
-| **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
+| **Exécuteur** | Cursor — PR readiness cadrage POC (DOC, Critical) |
+| **Typologie cycle** | DOC / EVOL — PR readiness Critical |
+| **Cycle projet** | 13 — PR readiness ; cadrage POC **validé** ; Delivery P0 **clôturé** |
+| **Profil SFIA** | Critical |
+| **Branche cadrage POC** | `project/sfia-studio-poc-orchestration-framing` |
+| **Base canonique** | `origin/main` @ `aa8dbd4606c52df7662276a99c873b4d93e001ba` |
 | **Chemin** | `projects/sfia-studio/` |
-| **Base canonique** | `origin/main` @ `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
-| **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
-| **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
-| **AF-Option C** | **VALIDÉE** — Studio / orchestrateur candidat séparés — **≠** Option C méthode |
-| **AF-CAND-01…10, 11A, 12** | **VALIDÉES** — ≠ D-VAL |
-| **AF-CAND-11B** | **VALIDÉE** — UX/UI sélectionné, exécuté et **clôturé** |
-| **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
-| **Architecture fonctionnelle** | **VALIDÉE** et **INTÉGRÉE** sur `main` — clôture formelle **NON PRONONCÉE** |
-| **Architecture technique P0** | **VALIDÉE** et **INTÉGRÉE** (`18`/`19` ; TA-DEC-01…18) — Delivery P0 **exécuté** depuis |
-| **UX/UI** | **CLÔTURÉ** — Option B ; 4 frames Figma ; docs `14`–`16` |
-| **Delivery P0** | **CLÔTURÉ** — implémenté, validé visuellement, mergé (#217), post-mergé, cleanup branche effectué ; **aucune gate Morris restante** |
-| **Prochain cycle** | **Cadrage POC orchestration** (Option B Morris) — **sélectionné**, **non démarré** ; POC / MVP / industrialisation **non lancés** |
+| **AF-Option C** | **VALIDÉE** + **opérationnalisée** pour le POC (POC-CAND-03) |
+| **Cadrage POC** | `20`–`22` — **VALIDÉS** ; POC-CAND-01…10 selon décision 2026-07-19 ; POC-G1…G6 + G10 **VALIDÉS** |
+| **POC** | **Non lancé** — POC-G7 / G8 / G9 **NON VALIDÉS** |
+| **Prochain cycle** | Après intégration : décision distincte **architecture POC** (POC-G7) — **non lancé** ; MVP / industrialisation **non engagés** |
 
 ---
 
@@ -63,10 +43,15 @@
 | App sur `main` | Disponible — desktop 1440×1024 ; pas d’API / auth / BDD / orchestration réelle |
 | Git / Cursor / Runtime | **Simulés ou désactivés** en P0 |
 | Produit complet / MVP / industrialisation | **Non atteints** |
-| Prochaine orientation | **Option B — cadrage POC orchestration** — sélectionnée, **non lancée** |
+| Cadrage POC orchestration (Option B) | **VALIDÉ PAR MORRIS** — 2026-07-19 — docs `20`–`22` ; POC **non lancé** |
+| Scénario | **S1** sélectionné (POC-G2) |
+| Automatisation | L3 + L4* / L0 — L5 global interdit (POC-G4) |
+| Git futur POC | Lecture réelle OK ; écritures distantes **simulées** (POC-G5) |
+| Gates | POC-G1…G6 + G10 **VALIDÉS** ; POC-G7…G9 **fermés** |
+| Branche cadrage | `project/sfia-studio-poc-orchestration-framing` |
 | Branches historiques | `functional-design`, `pre-framing`, `functional-architecture` **conservées** |
 
-> Historique antérieur (PR #207–#216) : inchangé dans son rôle. La capitalisation synchronise le statut **après** clôture Delivery P0 ; elle ne réécrit pas les décisions D-VAL / AF-CAND / TA-DEC.
+> Cadrage **validé** ; versionnement (draft PR) **autorisé** ; **merge non autorisé** ; POC **non lancé**.
 
 ---
 
@@ -141,14 +126,15 @@ Pré-cadrage
   → Delivery P0
   → PR #217 / intégration main
   → post-merge / cleanup
-  → cadrage POC orchestration          ← prochaine étape validée (Option B) — non démarrée
-  → architecture POC ciblée             ← candidate (après cadrage)
-  → backlog POC borné                   ← candidate
-  → delivery POC                        ← candidate
+  → capitalisation P0 (PR #218)
+  → cadrage POC orchestration          ← **VALIDÉ** Morris 2026-07-19 (`20`–`22`) — POC non lancé
+  → architecture POC ciblée             ← prochaine décision possible (POC-G7) — **non lancée**
+  → backlog POC borné                   ← candidate (POC-G8 fermé)
+  → delivery POC                        ← candidate (POC-G9 fermé)
   → décision Morris : abandon / itération / préparation MVP
 ```
 
-Étapes jusqu’au cleanup P0 : **terminées**. Cadrage POC orchestration : **sélectionné**, **non démarré**. Étapes suivantes : **candidates**, soumises aux résultats du cadrage. POC / MVP / industrialisation : **non engagés**. Clôture formelle architecture fonctionnelle : **non automatique**.
+Cadrage POC : **validé**. Architecture / backlog / delivery POC : **non lancés**. MVP / industrialisation : **non engagés**.
 
 ---
 
@@ -218,7 +204,17 @@ Pré-cadrage
 | [app/README.md](./app/README.md) | Runtime P0 — stack, routes, contraintes |
 | `projects/sfia-studio/app/**` | 77 fichiers intégrés sur `main` @ `759ab0b…` |
 
-> Delivery P0 **CLÔTURÉ**. Aucune API, auth, BDD ni orchestration réelle. Git / Cursor / Runtime **simulés**. Prochaine orientation : **cadrage POC orchestration** (non lancé).
+> Delivery P0 **CLÔTURÉ**. Aucune API, auth, BDD ni orchestration réelle. Git / Cursor / Runtime **simulés**. Cadrage POC Option B : documents `20`–`22` **VALIDÉS** (2026-07-19) — POC **non lancé**.
+
+### Cadrage POC orchestration — VALIDÉ (Option B — 2026-07-19)
+
+| Document | Rôle |
+|----------|------|
+| [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Problème, objectif, contraintes, critères — **VALIDÉ** |
+| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario **S1** sélectionné, frontières — **VALIDÉ** |
+| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates — **VALIDÉ** (G7–G9 fermés) |
+
+> POC **non lancé**. Runtime / techno **non sélectionnés**. Merge draft PR = GO distinct.
 
 ---
 
@@ -318,33 +314,30 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Sync #212 + finalisation #213 | **INTÉGRÉES** |
 | Clôture formelle cycle architecture | **Non** — non automatique |
 | Sort des branches historiques | Conservées ; décisions distinctes |
-| Contenu / architecture du POC orchestration | **Non pris** — cadrage à venir |
+| Contenu / architecture du POC orchestration | Cadrage **VALIDÉ** 2026-07-19 ; architecture POC (POC-G7) **non ouverte** |
 | Définition MVP | **Non pris** |
 | Industrialisation | **Non engagée** |
 | Responsive / a11y complète / CI GitHub | **Ouverts** (réserves P0) |
 | Vulnérabilités moderate postcss (via Next) | **Ouvertes** — pas de fix forcé |
-| Runtime / Git / Cursor réels | **Hors périmètre P0** — sujets du futur cadrage POC |
+| Runtime / Git / Cursor réels | P0 = simulés ; futur POC = lecture Git réelle + writes distantes simulées ; Runtime **non sélectionné** |
 
 > Conception : intégrée (PR #209 / #210). Architecture fonctionnelle : intégrée (#211–#213). Architecture technique P0 + Delivery P0 : **intégrés** (PR #217 / `759ab0b…`). Aucune D-VAL-12.
 
 ### Orientation Morris — Option B (POC orchestration)
 
-> Le prochain cycle SFIA Studio sera un cycle de **cadrage** visant à définir un POC d’orchestration borné entre SFIA Studio et un mécanisme d’orchestration déterministe candidat. Ce cycle devra valider la faisabilité technique **sans** préjuger de l’architecture produit finale, du MVP ni de l’industrialisation.
-
-**Décision consommée :** Option B sélectionnée comme prochaine orientation — **cadrage uniquement** ; POC **non lancé** ; aucune techno Runtime sélectionnée ; aucune intégration Studio ↔ Git ↔ Cursor ↔ orchestrateur autorisée dans ce cycle de capitalisation.
-
-**Sujets préparés pour le futur cadrage POC :** objectif de preuve ; scénario métier unique ; frontières Studio / orchestrateur ; niveau d’automatisation maximal ; actions read-only ou simulées ; gates Morris ; stop conditions ; données de test ; preuves attendues ; critères de succès et d’abandon ; sécurité et réversibilité ; périmètre Git ; stratégie de démonstration.
+> Cadrage **VALIDÉ** le **2026-07-19**. Scénario **S1**. L3+L4*/L0. Écritures distantes simulées. Orchestrateur local **avec réserve** (outil ouvert).
+> **POC non lancé.** Prochaine décision possible après intégration : **POC-G7** architecture POC ciblée.
 
 ---
 
 ## 8. Prochaine décision
 
-1. **GO commit / push / PR** de la présente capitalisation documentaire.
-2. Après intégration : **GO cadrage POC orchestration**.
-3. Clôture formelle du cycle architecture fonctionnelle (décision **distincte**, toujours ouverte).
-4. Sort des branches historiques (`pre-framing` / `functional-design` / `functional-architecture`).
+1. Revue / merge de la draft PR de cadrage (**GO merge distinct**).
+2. Post-merge du cadrage.
+3. Décision distincte **POC-G7** (architecture POC) — **non ouverte**.
+4. Clôture formelle architecture fonctionnelle (toujours séparée).
 
-**Verdict documentaire :** `CAPITALIZATION COMPLETE — P0 STATUS SYNCHRONIZED — POC ORCHESTRATION FRAMING READY`
+**Verdict documentaire :** `PR READINESS COMPLETE — DRAFT PR OPEN — MERGE NOT AUTHORIZED`
 
 ---
 
@@ -352,19 +345,11 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 | Élément | Source |
 |---------|--------|
-| Méthode | SFIA v2.6 sur `main` — **Option C méthode** |
-| Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
-| Cadrage validé | `projects/sfia-studio/` **`01`–`07`** sur **`main`** |
-| Conception fonctionnelle | **`08`–`10`** sur **`main`** |
-| Architecture fonctionnelle | **`11`–`13`** sur **`main`** |
-| UX/UI | **`14`–`16`** sur **`main`** |
-| Architecture technique P0 | **`18`–`19`** sur **`main`** |
-| Delivery P0 / app | `projects/sfia-studio/app/` — PR #217 / merge `759ab0b…` |
-| Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
-| Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
-
-> `main` @ `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` est la source de vérité du **cadrage**, de la **conception**, de l’**architecture**, de l’**UX/UI**, de l’**architecture technique P0** et du **Delivery P0** intégrés.
+| Méthode | SFIA v2.6 — Option C méthode |
+| Socle intégré | `main` @ `aa8dbd4…` |
+| Cadrage POC validé | `20`–`22` sur `project/sfia-studio-poc-orchestration-framing` |
+| Handoff | `sfia/review-handoff` |
 
 ---
 
-*SFIA Studio — Delivery P0 CLÔTURÉ (PR #217) — prochaine orientation = cadrage POC orchestration (Option B, non lancé) — clôture architecture fonctionnelle NON PRONONCÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — cadrage POC VALIDÉ 2026-07-19 — POC NON LANCÉ — POC-G7/G8/G9 fermés — merge non autorisé — Morris décide.*
```

---

## 8. Contenu complet — 20-poc-orchestration-framing.md

```markdown
# SFIA Studio — Cadrage POC orchestration (Option B)

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `20-poc-orchestration-framing.md` |
| **Cycle** | 1 — Cadrage POC orchestration (Option B) |
| **Profil** | Critical |
| **Typologie** | DOC / EVOL (cadrage) |
| **Baseline méthode** | SFIA v2.6 — Option C méthode (**inchangée**) |
| **Branche** | `project/sfia-studio-poc-orchestration-framing` |
| **Base** | `origin/main` @ `aa8dbd4606c52df7662276a99c873b4d93e001ba` |
| **Statut document** | **VALIDÉ PAR MORRIS** — 2026-07-19 |
| **POC** | **Non lancé** |
| **MVP / industrialisation** | **Non engagés** |
| **Architecture Runtime** | **Non validée** — aucune technologie sélectionnée |
| **Destinataire** | Morris |

> Cadrage **validé** le **2026-07-19**. Cette validation **ne lance pas** le POC, **ne valide pas** l’architecture technique, **ne sélectionne pas** de Runtime et **ne définit pas** le MVP. POC-G7 / G8 / G9 restent **fermés**.

### Décision Morris — validation du cadrage (2026-07-19)

| Élément | Statut |
|---------|--------|
| POC-CAND-01…06, 08, 10 | **VALIDÉES** |
| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** (orchestrateur local candidat ; outil ouvert) |
| POC-CAND-09 / POC-G10 | **VALIDÉE** — commit / push / draft PR du cadrage |
| POC-G1…G6 | **VALIDÉS** |
| POC-G7…G9 | **PROPOSÉS / NON VALIDÉS** |
| Scénario | **S1** sélectionné |
| Automatisation | L3 cible + L4* plafond chemin d’exécution ; L0 arbitrage ; L5 global interdit |
| Git | Lecture réelle autorisée (futur POC) ; écritures distantes **simulées** |

---

## 1. Contexte

### 1.1 Acquis factuels

- Delivery P0 **CLÔTURÉ** (PR #217) — app Next.js 15 sous `projects/sfia-studio/app/` ; 4 écrans ; fixtures ; Git/Cursor/Runtime **simulés**.
- Capitalisation post-P0 **INTÉGRÉE** (PR #218) — statut `p0-delivery-integrated-next-poc-orchestration-framing`.
- Architecture fonctionnelle **VALIDÉE** / **INTÉGRÉE** — **AF-Option C** : Studio et orchestrateur déterministe **candidat séparés**.
- Architecture technique P0 **VALIDÉE** — pas d’API, auth, BDD, Runtime contractuel en P0.
- Décision Morris (2026-07-19) : **cadrage Option B VALIDÉ** (POC-G1…G6, POC-G10) — **POC non lancé**.

### 1.2 Formulation structurante (D-VAL-3 — inchangée)

> Le POC est une étape technique de validation de faisabilité.  
> Il ne constitue ni le produit cible, ni le MVP, ni la limite de la trajectoire.

### 1.3 Runtime candidat

Un mécanisme d’orchestration déterministe, **éventuellement** nommé « SFIA Runtime », doit **appliquer** contrats, permissions, gates et stop conditions.  
Nom **non contractuel**. Architecture Runtime **non validée**. Aucune technologie sélectionnée dans ce cadrage.

---

## 2. Problème technique à prouver

**Problème :** aujourd’hui, SFIA Studio P0 **représente** un cockpit gouverné, mais **ne démontre pas** qu’un orchestrateur déterministe séparé peut :

1. recevoir un contrat d’exécution borné ;
2. vérifier les préconditions (Git, gates, allowlist) ;
3. **refuser** toute action hors contrat sans arbitrage automatique ;
4. déclencher une exécution Cursor **uniquement après GO Morris** ;
5. collecter un résultat / preuve reconstructible ;
6. s’arrêter proprement (stop) et permettre une reprise contrôlée ;

…sans créer de seconde source de vérité face à Git, et sans automatiser l’arbitrage Morris.

---

## 3. Objectif de preuve

Démontrer, sur **un scénario métier unique**, que la boucle suivante est **faisable techniquement** en local (macOS) de façon **reproductible, bornée et réversible** :

```text
Intention Studio
  → qualification / contrat candidat (GPT)
  → gate Morris (GO explicite)
  → orchestrateur candidat (applique, ne décide pas)
  → exécution Cursor bornée (read-only / sandbox)
  → collecte preuve / pack
  → verdict candidat (GPT)
  → décision Morris tracée
```

**Résultat observable attendu :** un journal corrélé (demande → cycle → GO → actions → résultat → stop éventuel) + un review pack / preuve locale, sans push/PR/merge réels, sans secret réel, sans L5 global.

**Verdicts de preuve futurs (post-delivery POC — non applicables ici) :**

| Verdict | Signification |
|---------|---------------|
| `FEASIBILITY CONFIRMED` | Boucle démontrée sans écart structurant |
| `FEASIBILITY CONFIRMED WITH RESERVES` | Démontrée avec réserves non bloquantes |
| `FEASIBILITY NOT DEMONSTRATED` | Échec de preuve — abandon ou re-cadrage |

---

## 4. Périmètre du cadrage (ce cycle)

| Inclus | Exclu |
|--------|-------|
| Problème, objectif, scénario candidat | Développement / code POC |
| Frontières Studio / orch. / Git / Cursor | Branchement GitHub / Cursor réel |
| Niveaux d’automatisation candidats | Choix d’outil Runtime |
| Actions read-only / simulées / interdites | API, BDD, auth, CI/CD |
| Gates, stops, preuves, critères | Backlog / delivery POC |
| Sécurité, réversibilité, démo macOS | MVP / industrialisation |
| Décisions **candidates** POC-CAND-* | Validation de POC-CAND / D-VAL nouvelles |

---

## 5. Hors périmètre (rappel strict)

- Modification de `projects/sfia-studio/app/**`
- Push / PR / merge du présent cadrage sans GO distinct (POC-G10)
- Lancement du POC (POC-G9)
- Architecture technique détaillée du POC
- Définition du MVP
- Industrialisation
- Correction responsive / a11y / postcss P0
- Clôture formelle architecture fonctionnelle
- Évolution méthode SFIA (v2.7 / v3.0)

---

## 6. Hypothèses de cadrage

| ID | Hypothèse | Statut |
|----|-----------|--------|
| H1 | AF-Option C reste le cadre d’autorité (Studio ≠ orchestrateur) | Reprise d’acquis validé |
| H2 | Git reste la seule vérité durable | Reprise d’acquis validé |
| H3 | Un seul scénario métier suffit pour la première preuve | **Hypothèse de cadrage** |
| H4 | La première preuve peut s’appuyer sur lecture Git réelle + exécution Cursor **read-only** | **Hypothèse** |
| H5 | Toute écriture Git distante (commit/push/PR/merge) reste **simulée** dans le premier POC | **Hypothèse / garde-fou** |
| H6 | L’orchestrateur peut être un module local déterministe (script/service local) — technologie **non choisie** | **Hypothèse ouverte** |
| H7 | La surface UI P0 peut servir de cockpit humain sans être le moteur d’orchestration | **Hypothèse** |
| H8 | macOS local de Morris suffit comme environnement de preuve | Reprise D-VAL / cadrage |

---

## 7. Contraintes

### 7.1 Autorité et vérité

- Morris = seule autorité structurante (L0).
- ChatGPT qualifie / structure — ne décide pas.
- Cursor exécute un contrat borné — n’arbitre pas.
- Orchestrateur **applique** — n’autorise pas, ne crée pas de GO.
- Git prime ; Studio et orchestrateur ≠ seconde vérité.

### 7.2 Automatisation

- L5 **global** interdit.
- Arbitrage reste L0.
- Exécution après GO : L3 cible ; L4* orchestration contrôlée = **plafond candidat** (non validé).

### 7.3 Sécurité

- Aucun secret / token / identifiant réel dans fixtures ou journaux.
- Permissions minimales (least privilege).
- Séparation lecture / simulation / écriture.
- Isolation locale ; arrêt sécurisé (stop) obligatoire.
- Pas d’exécution de commandes système hors allowlist explicite (à détailler en architecture POC).

### 7.4 Réversibilité

- Toute action du POC initial doit être **réversible** ou **sans effet durable hors workspace local de preuve**.
- Actions destructives exclues.
- Force push, rewrite history, delete branch : **interdits**.

### 7.5 FinOps (qualification qualitative)

| Option | Nature | Coût potentiel |
|--------|--------|----------------|
| Orchestrateur 100 % local | Local | Faible / nul variable |
| Appels GPT | Service | Variable selon volume |
| Agent Cursor | Local / licence existante | Selon usage Morris |
| Service managé Runtime | Managé | **Non retenu pour le 1er POC** — engagement financier à arbitrer plus tard |

Aucun budget ni fournisseur validé.

---

## 8. Niveaux d’automatisation (candidats)

| Niveau | Rôle | Position cadrage POC |
|--------|------|----------------------|
| **L0** | Arbitrage Morris | **Obligatoire** |
| **L1–L2** | Qualification, drafting, verdict candidat | Autorisé |
| **L3** | Exécution bornée **après GO** | **Cible VALIDÉE** (POC-CAND-04) |
| **L4\*** | Orchestration contrôlée candidate | **Plafond VALIDÉ** sur chemin d’exécution — **≠** Runtime produit |
| **L5 global** | Auto-arbitrage | **Interdit** |
| **L5 ciblé read-only** | Consultation bornée (AF-15) | **Non autorisé automatiquement** |

\*L4 = orchestration contrôlée **candidate**, non validée techniquement (aligné `11` §17).

**Recommandation validée Morris (POC-CAND-04) :** plafond **L3 + L4* sur le chemin d’exécution uniquement** ; arbitrage **strictement L0**.  
L4* = orchestration contrôlée **candidate** — **ne constitue pas** un niveau produit ni un Runtime validé.  
L5 ciblé read-only **n’est pas** automatiquement autorisé par cette décision.

---

## 9. Critères de succès, d’échec et d’abandon

### 9.1 Succès (preuves futures — POC delivery)

- Boucle complète exécutée au moins une fois en local.
- GO Morris explicite avant toute exécution Cursor non triviale.
- Orchestrateur refuse une action hors allowlist (preuve de déterminisme négatif).
- Journal corrélé disponible et reconstructible.
- Aucune écriture Git distante réelle.
- Aucun secret réel exposé.
- Stop déclenchable et effectif.

### 9.2 Échec

- Impossible de séparer décision et exécution.
- Orchestrateur peut contourner un gate.
- Seconde vérité d’état durable hors Git.
- Dépendance à une techno non arbitré pour « réussir ».
- Preuve non reproductible.

### 9.3 Abandon

- Preuve nécessite écriture distante non réversible.
- Coût / complexité disproportionnés vs objectif de faisabilité.
- Contradiction avec AF-Option C non résoluble sans changer le produit.
- Morris décide `STOP` / abandon explicite.

---

## 10. Risques et réserves

| Risque | Impact | Mitigation cadrage |
|--------|--------|-------------------|
| Confusion POC / MVP | Haute | Formulations D-VAL-3 répétées ; critères faisabilité seulement |
| Seconde vérité UI/orch. | Haute | Git prime ; états dérivés = observation |
| Auto-arbitrage implicite | Haute | L5 interdit ; timeout ≠ GO |
| Fuite de secrets | Haute | Fixtures synthétiques ; pas de `.env` réel |
| Surarchitecture Runtime | Moyenne | Techno = hypothèse ; architecture POC cycle séparé |
| Élargissement scénario | Moyenne | Un seul scénario sélectionné S1 (doc `21`) |
| Coût GPT variable | Faible–moyen | Volume borné ; FinOps qualitatif |

**Réserves maintenues hors POC :** responsive P0, a11y complète, CI Studio, postcss, clôture formelle AF, branches historiques.

---

## 11. Stratégie de démonstration (macOS local)

1. Préparer un workspace de preuve isolé (clone ou worktree dédié — **à arbitrer en architecture POC**).
2. Charger fixtures / données de test synthétiques (doc `21`).
3. Déclencher le scénario depuis Studio (UI ou harness — **non choisi ici**).
4. Obtenir un GO Morris simulé puis réel (selon maturité) sur gate unique.
5. Montrer refus orchestrateur sur action hors contrat.
6. Montrer exécution read-only autorisée après GO.
7. Produire journal + pack de preuve.
8. Arrêter (stop) et montrer absence d’effet distant.

**Environnement :** macOS local Morris = contrainte de preuve (pas plateforme produit).

---

## 12. Observabilité minimale (preuve)

Événements minimaux à journaliser :

- `intent.received`
- `qualification.produced`
- `gate.requested` / `gate.decided` (GO / CORRIGER / STOP)
- `orchestrator.accepted` / `orchestrator.rejected`
- `execution.started` / `execution.finished` / `execution.stopped`
- `proof.collected`
- `verdict.candidate.produced`

Corrélation : `requestId` · `cycleId` · `gateId` · `executionId`.

Pas de plateforme de supervision industrialisée.

---

## 13. Éléments reportés après ce cadrage

| Élément | Cycle ultérieur candidat |
|---------|--------------------------|
| Architecture POC ciblée | Après POC-G7 |
| Choix techno orchestrateur | Architecture POC |
| Backlog POC borné | Après POC-G8 |
| Delivery POC | Après POC-G9 |
| Intégration réelle Git/Cursor | GO distincts (POC-G5+) |
| Décision post-POC (abandon / itération / MVP) | DF-G6 / DF-G7 (proposés) |

---

## 14. Décisions Morris (état après 2026-07-19)

| Gate / CAND | Statut |
|-------------|--------|
| POC-G1…G6 | **VALIDÉS** |
| POC-G10 | **VALIDÉ** (commit / push / draft PR cadrage) |
| POC-G7…G9 | **NON VALIDÉS** |
| POC-CAND-01…06, 08, 10 | **VALIDÉES** |
| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
| POC-CAND-09 | **VALIDÉE** (via POC-G10) |

**Prochaine étape après intégration du cadrage :** post-merge, puis décision **distincte** sur architecture POC ciblée (POC-G7) — **pas** de backlog/delivery direct.

**Toujours ouverts :** outil/techno orchestrateur ; harness vs UI ; clôture AF formelle ; MVP.

---

## 15. Documents liés

| Document | Rôle |
|----------|------|
| [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario + frontières + flux |
| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | Options, reco, POC-CAND, gates |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire produit |
| [11-functional-architecture.md](./11-functional-architecture.md) | AF-Option C, niveaux L0–L5 |
| [18-technical-architecture.md](./18-technical-architecture.md) | Contraintes techniques P0 |

---

*Cadrage VALIDÉ PAR MORRIS 2026-07-19 — POC NON LANCÉ — POC-G7/G8/G9 fermés — Option C méthode préservée.*
```

---

## 9. Contenu complet — 21-poc-orchestration-scenario-and-boundaries.md

```markdown
# SFIA Studio — Scénario et frontières POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `21-poc-orchestration-scenario-and-boundaries.md` |
| **Cycle** | 1 — Cadrage POC orchestration (Option B) |
| **Profil** | Critical |
| **Statut document** | **VALIDÉ PAR MORRIS** — 2026-07-19 — scénario **S1 SÉLECTIONNÉ** |
| **Complète** | [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) |
| **POC** | **Non lancé** |

---

## 1. Scénarios étudiés (limité)

| ID | Intitulé | Couverture preuve | Risque | Retenu ? |
|----|----------|-------------------|--------|----------|
| **S1** | Cycle DOC gouverné read-only (intention → gate → exécution Cursor lecture → pack → décision) | Git + GPT + Cursor + gates + stops | Faible | **SÉLECTIONNÉ / VALIDÉ PAR MORRIS** |
| **S2** | Pre-check Git + détection divergence HEAD + stop + reprise lecture | Vérité Git / stops | Moyen | Non retenu |
| **S3** | Allowlist orchestrateur + rejet d’écriture simulée hors contrat | Déterminisme négatif | Moyen | **Intégré à S1** (rejet obligatoire) |
| **S4** | PR readiness locale sans push/PR/merge | Diff / review | Plus large | Reporté |

**Décision Morris (POC-CAND-02 / POC-G2) — 2026-07-19 :** scénario **S1** sélectionné, avec **rejet obligatoire** d’une action hors allowlist (élément S3) dans le flux de preuve.

---

## 2. Scénario S1 — « DOC read-only gouverné » (SÉLECTIONNÉ)

### 2.1 Objectif métier du scénario (preuve)

Prouver qu’une demande documentaire SFIA peut être **qualifiée**, **autorisée par Morris**, **exécutée de façon bornée** (lecture / analyse), **stoppable**, et **tracée**, via un orchestrateur déterministe séparé de Studio.

### 2.2 Acteurs

| Acteur | Rôle |
|--------|------|
| **Morris** | Décideur L0 — GO / CORRIGER / STOP |
| **ChatGPT** | Qualification, contrat candidat, verdict candidat |
| **Cursor** | Exécuteur du contrat borné (read-only) |
| **Git** | Source de vérité (lecture) |
| **SFIA Studio** | Surface de pilotage / représentation (cockpit) |
| **Orchestrateur candidat** | Applique contrats, allowlist, gates, stops — **ne décide pas** |

### 2.3 Déclencheur

Morris (ou opérateur sous son autorité) ouvre une **nouvelle demande** de type DOC dans Studio (surface P0 `/nouvelle-demande` **ou** harness équivalent — **choix ouvert** pour le cycle architecture POC ; non tranché ici).

### 2.4 Préconditions

- Workspace de preuve local disponible.
- Branche / HEAD de preuve connus (lecture Git possible).
- Aucun secret réel chargé.
- Contrat d’allowlist initial défini (lecture fichiers projet / méthode ; pas d’écriture distante).
- Orchestrateur candidat démarrable localement (techno **non choisie**).

### 2.5 Entrée

| Champ | Exemple (fixture) |
|-------|-------------------|
| Titre | « Capitaliser une règle de gate SFIA » |
| Type | DOC / CAPA légère |
| Profil proposé | Standard |
| Repo | `sfia-workspace` (preuve) |
| Branche observée | `main` (lecture) |
| Contraintes | Read-only ; pas de push |

### 2.6 Déroulement nominal

```text
1. Studio enregistre l’intention (état dérivé local / fixture)
2. GPT produit qualification + contrat Cursor candidat
3. Studio présente le dossier de gate à Morris
4. Morris décide GO (portée, durée, révocabilité explicites)
5. Orchestrateur vérifie : GO valide + allowlist + préconditions Git
6. Orchestrateur accepte l’exécution
7. Cursor exécute read-only (lecture sources, analyse, rédaction pack local)
8. Orchestrateur collecte résultat + preuves
9. GPT produit verdict candidat (faisabilité / conformité contrat)
10. Morris décide suite (CLOTURER / CORRIGER / STOP) — tracée
11. Journal corrélé finalisé
```

### 2.7 Variante obligatoire (déterminisme négatif)

Après l’étape 5, injecter une demande d’action **hors allowlist** (ex. `git push` simulé demandé par contrat altéré) :

- Orchestrateur **rejette** ;
- Aucune exécution Cursor write ;
- Événement `orchestrator.rejected` journalisé ;
- Flux peut reprendre après correction du contrat + nouveau GO si nécessaire.

### 2.8 Sortie et preuve produite

| Artefact | Description |
|----------|-------------|
| Journal d’événements | Corrélé `requestId` / `cycleId` / `gateId` / `executionId` |
| Review pack / preuve locale | Contenu produit en local (chemin de preuve à fixer en archi POC) |
| Trace de GO | Décision Morris horodatée |
| Trace de rejet | Au moins un rejet hors allowlist |
| Diff Git distant | **Aucun** (attendu vide côté remote) |

### 2.9 Postconditions

- Repo distant inchangé.
- Aucun secret dans les artefacts.
- État Studio reconstructible depuis Git + journal (pas de vérité exclusive UI).

---

## 3. Modèle d’état minimal (candidat)

| État | Signification |
|------|---------------|
| `DRAFT` | Intention saisie |
| `QUALIFIED` | Contrat candidat disponible |
| `GATE_OPEN` | Attente décision Morris |
| `AUTHORIZED` | GO reçu, non révoqué |
| `ORCHESTRATING` | Orchestrateur actif |
| `EXECUTING` | Cursor en cours |
| `PROOF_READY` | Preuves collectées |
| `STOPPED` | Stop appliqué |
| `REJECTED` | Rejet orchestrateur |
| `CLOSED` | Décision Morris de clôture |

Les états Studio/orchestrateur sont **dérivés / observationnels** — Git reste la vérité durable.

---

## 4. Contrat d’entrée / sortie (candidat — non API)

### 4.1 Entrée orchestrateur (conceptuelle)

```text
OrchestrationRequest {
  requestId, cycleId,
  gateDecision { decision, scope, expiresAt, revocable },
  allowlist { paths[], actions[] },
  denylist { actions[] },
  executionContract { tool: "cursor", mode: "read-only", ... },
  gitContext { repo, branch, headSha }  // observation
}
```

### 4.2 Sortie orchestrateur (conceptuelle)

```text
OrchestrationResult {
  requestId, executionId,
  status: accepted|rejected|stopped|completed|failed,
  events[],
  proofs[],
  gitEffect: "none-remote",
  error?
}
```

Aucun schéma JSON/OpenAPI validé ici — **contrat candidat** pour architecture POC.

---

## 5. Frontières d’autorité

| Frontière | Règle candidate |
|-----------|-----------------|
| **Studio → Orchestrateur** | Studio soumet une requête après GO ; n’exécute pas lui-même les actions outils |
| **Orchestrateur → Cursor** | Passe uniquement un contrat allowlisté ; pas d’élévation de privilèges |
| **Orchestrateur → Git** | Lecture autorisée ; écriture distante **interdite** au POC initial |
| **GPT → Orchestrateur** | Aucun canal d’autorité ; GPT ne commande pas l’orchestrateur |
| **Morris → tous** | Seul émetteur de GO / STOP structurants |
| **Studio / Git** | Studio représente ; Git prime |
| **Orchestrateur / vérité** | Journal = preuve d’exécution ; ≠ vérité produit |

Aligné **AF-Option C** — **VALIDÉ PAR MORRIS** (POC-CAND-03 / POC-G3, 2026-07-19) : Studio et orchestrateur séparés ; Git = source de vérité ; orchestrateur n’arbitre pas.  
Le modèle d’état et le scénario restent un **contrat de cadrage**, pas une architecture technique finale. Aucune technologie sélectionnée.

---

## 6. Actions : read-only, simulées, interdites

### 6.1 Read-only / autorisées (POC initial recommandé)

- `git status`, `git rev-parse`, `git log` (lecture)
- `git diff` local
- Lecture fichiers allowlistés
- Génération d’artefacts **locaux** de preuve
- Journalisation
- Stop / reject

### 6.2 Simulées (obligatoires au POC initial)

- `git commit`
- `git push`
- Création PR / ready-for-review / merge
- Delete branch
- Invocation Cursor en mode écriture hors sandbox
- Appels GitHub API
- « Runtime cloud »

### 6.3 Interdites

- Auto-GO, auto-merge, auto-push
- Force push / rewrite history
- L5 global / timeout = GO
- Secrets réels
- Exécution shell non allowlistée
- Toute action non réversible
- Création d’une vérité durable hors Git

---

## 7. Gates Morris dans le scénario

| Gate | Moment | Décision typique |
|------|--------|------------------|
| Gate scénario (POC-G2) | Avant delivery | Sélection S1 |
| Gate d’exécution | Avant Cursor | GO / CORRIGER / STOP |
| Gate de clôture preuve | Après pack | CLOSING / ITERATE / ABANDON |

Les gates produit POC-G1…G6 et POC-G10 sont **VALIDÉS** (2026-07-19). POC-G7…G9 restent **NON VALIDÉS**.

---

## 8. Stop conditions (scénario)

Stop immédiat si :

- GO absent, expiré ou révoqué ;
- action hors allowlist demandée ;
- divergence Git inattendue sur le workspace de preuve ;
- tentative d’écriture distante ;
- secret détecté dans le contexte ;
- orchestrateur indisponible / non déterministe ;
- Cursor sort du contrat ;
- opérateur Morris émet STOP.

---

## 9. Reprise et idempotence minimale

| Situation | Reprise |
|-----------|---------|
| STOP pendant exécution | Pas de retry auto ; nouveau GO requis |
| REJECT hors allowlist | Corriger contrat → nouveau GO |
| Échec Cursor read-only | Relancer avec même `requestId` / nouvel `executionId` si aucune écriture |
| Preuve partielle | Marquer `failed` ; ne pas inventer d’état Git |

**Idempotence :** relancer une exécution read-only ne doit pas muter le remote ; les artefacts locaux doivent être versionnés par `executionId`.

---

## 10. Données et fixtures de test

| Donnée | Nature |
|--------|--------|
| Demande DOC exemple | Fixture synthétique FR |
| Allowlist chemins | `projects/sfia-studio/**` lecture + méthode lecture |
| GO Morris de démo | Structure de décision mock puis réel |
| Branche de preuve | Locale, jetable |
| Secrets | **Aucun** — placeholders uniquement |

---

## 11. Observabilité et journalisation

Voir `20` §12. Compléments scénario :

- Preuve de **rejet** obligatoire dans la démo.
- Preuve de **stop** (au moins en dry-run documenté si non exécuté en live).
- Corrélation affichable dans un extrait de journal (fichier local).

---

## 12. Surface Studio P0 (hypothèse d’usage)

| Route P0 | Usage candidat dans S1 |
|----------|------------------------|
| `/nouvelle-demande` | Saisie intention |
| `/cycle-actif` | Suivi étapes / stops |
| `/decision` | Gate Morris |
| `/synthese` | Observation portefeuille (hors chemin critique) |

L’UI P0 **n’est pas** l’orchestrateur. Branchement réel UI↔orchestrateur = architecture / delivery futurs.

---

## 13. Ce que ce document ne tranche pas

- Implémentation de l’orchestrateur
- Protocole (files, HTTP local, CLI…)
- Emplacement exact des preuves
- Harness vs UI pour le déclenchement
- Périmètre exact des chemins allowlist (détail archi POC)

---

*Scénario S1 SÉLECTIONNÉ / VALIDÉ PAR MORRIS 2026-07-19 — POC NON LANCÉ — techno Runtime ouverte — Morris décide (POC-G7+).*
```

---

## 10. Contenu complet — 22-poc-orchestration-decision-pack.md

```markdown
# SFIA Studio — Decision pack POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `22-poc-orchestration-decision-pack.md` |
| **Cycle** | 1 — Cadrage POC orchestration (Option B) |
| **Profil** | Critical |
| **Statut document** | **VALIDÉ PAR MORRIS** — 2026-07-19 |
| **Préfixe décisions** | `POC-CAND-*` — identifiants locaux (même après validation) |
| **D-VAL nouvelles** | **Aucune** |
| **POC** | **Non lancé** |
| **Destinataire** | Morris |

> Décision Morris du **2026-07-19** : validation du cadrage Option B. POC-G7 / G8 / G9 **fermés**. Aucune architecture Runtime / techno sélectionnée. Aucun merge autorisé par ce pack seul (POC-G10 = draft PR).

---

## 1. Observations factuelles

1. Delivery P0 clôturé (PR #217) ; capitalisation intégrée (PR #218).
2. Cadrage Option B produit puis **validé Morris 2026-07-19**.
3. AF-Option C **VALIDÉE** (fond) et **opérationnalisée** pour le POC (POC-CAND-03).
4. Baseline SFIA v2.6 / Option C méthode **inchangée**.
5. POC / MVP / industrialisation **non engagés**.

---

## 2. Hypothèses

H1–H8 du document `20` — dont H6 (orchestrateur local) **retenue avec réserve** (POC-CAND-07) : outil/forme **ouverts**.

---

## 3–5. Options (historique de cadrage)

Les options A/B/C de séquencement et S1–S4 / L-levels restent documentées comme **historique de qualification**. Les choix Morris sont dans §6–7.

---

## 6. Décisions POC-CAND — état Morris 2026-07-19

> Identifiants locaux au cadrage. **Aucune D-VAL nouvelle.**

| ID | Décision | Statut Morris |
|----|----------|---------------|
| **POC-CAND-01** | Problème + objectif de preuve acceptés | **VALIDÉE** |
| **POC-CAND-02** | Scénario **S1** sélectionné (DOC read-only + rejet hors allowlist obligatoire) | **VALIDÉE** |
| **POC-CAND-03** | Frontières Studio / orch. / Git / Cursor ; AF-Option C opérationnalisée ; Git = vérité | **VALIDÉE** |
| **POC-CAND-04** | L3 cible après GO ; L4* plafond chemin d’orchestration (**≠** niveau produit/Runtime) ; arbitrage L0 ; L5 global interdit | **VALIDÉE** |
| **POC-CAND-05** | Lecture Git réelle autorisée (futur POC) ; écritures distantes **simulées** ; aucun commit/push/PR/merge réel sans décision distincte | **VALIDÉE** |
| **POC-CAND-06** | Critères succès / échec / abandon acceptés | **VALIDÉE** |
| **POC-CAND-07** | Orchestrateur local déterministe = hypothèse candidate ; outil/techno/forme **ouverts** ; aucune archi Runtime validée | **VALIDÉE AVEC RÉSERVE** |
| **POC-CAND-08** | Après intégration cadrage → prochaine étape candidate = **architecture POC ciblée** ; pas de backlog/delivery direct | **VALIDÉE** |
| **POC-CAND-09** | Commit / push / **draft PR** du cadrage (via POC-G10) | **VALIDÉE** |
| **POC-CAND-10** | Aucun lancement POC tant que gates nécessaires non ouverts explicitement | **VALIDÉE** |

---

## 7. Gates Morris — état 2026-07-19

| Gate | Objet | Statut |
|------|-------|--------|
| **POC-G1** | Problème + objectif de preuve | **VALIDÉ** |
| **POC-G2** | Scénario métier unique S1 | **VALIDÉ** |
| **POC-G3** | Frontières d’autorité et de vérité | **VALIDÉ** |
| **POC-G4** | Niveau maximal d’automatisation | **VALIDÉ** |
| **POC-G5** | Lecture Git réelle ; écritures distantes simulées | **VALIDÉ** |
| **POC-G6** | Critères succès / échec / abandon | **VALIDÉ** |
| **POC-G7** | Architecture POC candidate | **PROPOSÉ / NON VALIDÉ** |
| **POC-G8** | Backlog POC | **PROPOSÉ / NON VALIDÉ** |
| **POC-G9** | Delivery POC | **PROPOSÉ / NON VALIDÉ** |
| **POC-G10** | Commit / push / draft PR du cadrage | **VALIDÉ** |

**Cette décision n’autorise pas le merge** de la draft PR — merge = GO Morris distinct.

---

## 8. Impacts

Cadrage validé → versionnement autorisé (draft PR) → après merge/post-merge : décision distincte sur **POC-G7** uniquement. Pas de shortcut delivery.

---

## 9. Dette / ouverts

- Outil / forme orchestrateur (réserve POC-CAND-07)
- Harness vs UI P0
- Allowlist chemins détaillée (architecture)
- Clôture formelle AF
- MVP / industrialisation / réserves P0

---

## 10. Séquence après intégration du cadrage

```text
Draft PR cadrage (POC-G10) — EN COURS
  → GO merge (décision distincte)
  → post-merge cadrage
  → décision distincte architecture POC ciblée (POC-G7)
  → (plus tard) backlog POC (POC-G8) → delivery POC (POC-G9)
  → décision post-POC : abandon / itération / préparation MVP
```

POC-G7 / G8 / G9 **non ouverts**.

---

## 11. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Cadrage | **VALIDÉ PAR MORRIS** — 2026-07-19 |
| POC lancé | **Non** |
| POC-G7…G9 | **Fermés** |
| Runtime / techno | **Non sélectionnés** |
| Versionnement | **Autorisé** (draft PR) |
| Merge | **Non autorisé** |

**Verdict PR readiness :** `PR READINESS COMPLETE — DRAFT PR OPEN — MERGE NOT AUTHORIZED`

---

*Decision pack VALIDÉ 2026-07-19 — POC NON LANCÉ — merge non autorisé.*
```

---

## 11. Staged / commit / push / draft PR

### 11.1 Staged (vérifié avant commit)

```
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
A	projects/sfia-studio/20-poc-orchestration-framing.md
A	projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
A	projects/sfia-studio/22-poc-orchestration-decision-pack.md
M	projects/sfia-studio/README.md
```

`git diff --cached --check` : PASS  
Stat : 5 files changed, 854 insertions(+), 153 deletions(-)

### 11.2 Commit

| Champ | Valeur |
|-------|--------|
| SHA | `3b162ecb5212e9f62ac20f0066df9fbc545be4cc` |
| Message | `docs(sfia-studio): validate POC orchestration framing` |
| HEAD avant | `aa8dbd4606c52df7662276a99c873b4d93e001ba` |
| HEAD après | `3b162ecb5212e9f62ac20f0066df9fbc545be4cc` |

### 11.3 Push

| Champ | Valeur |
|-------|--------|
| Branche remote | `origin/project/sfia-studio-poc-orchestration-framing` |
| SHA remote | `3b162ecb5212e9f62ac20f0066df9fbc545be4cc` (confirmé `git ls-remote`) |
| Tracking | upstream configuré |

### 11.4 Draft PR

| Champ | Valeur |
|-------|--------|
| Numéro | **#219** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/219 |
| Base | `main` |
| Head | `project/sfia-studio-poc-orchestration-framing` |
| État | **DRAFT** (`isDraft: true`) |
| Merge | **NON AUTORISÉ / NON EFFECTUÉ** |

Horodatage finalisation : 2026-07-19 12:48:57 CEST

---

## 12. Réserves

1. **POC-CAND-07** — VALIDÉE AVEC RÉSERVE : outil / technologie / forme d'implémentation ouverts.
2. Merge de la draft PR = GO Morris **distinct** (non autorisé ici).
3. POC-G7 / G8 / G9 restent fermés.
4. UI Studio vs harness = ouvert pour cycle architecture.
5. Clôture formelle architecture fonctionnelle = décision séparée.

---

## 13. Actions interdites restantes

- merge
- lancement POC
- POC-G7 / G8 / G9
- architecture / backlog / delivery POC
- choix Runtime
- suppression branche
- clôture architecture fonctionnelle

---

## 14. Verdict

**`PR READINESS COMPLETE WITH RESERVES — DRAFT PR OPEN — MERGE NOT AUTHORIZED`**

Réserve non bloquante : POC-CAND-07 (outil orchestrateur ouvert).

Ce cycle **ne** lance **pas** le POC, **ne** valide **pas** l'architecture POC, **ne** sélectionne **pas** de Runtime, et **n'autorise pas** le merge.
