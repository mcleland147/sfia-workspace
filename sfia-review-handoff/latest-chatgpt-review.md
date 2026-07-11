# SFIA Review Pack — ChatGPT

**Date/heure :** 2026-07-11 14:22 Europe/Paris
**Repository :** mcleland147/sfia-workspace
**Cycle :** Validation décisionnelle finale — clôture D1–D12
**Profil :** Critical
**Branche :** method/sfia-v2.6-repository-standard-decisions
**HEAD initial :** 5d4aa0a555bd8bf3a649b4113e80ff5d5c14bcf5
**HEAD final :** 56ce850cdee5fb219e48bc39af01a33a949cc765
**Base main :** 688832d90e613959fbfdf53530f86aea36e23538
**PR :** #164

## Matrice avant

D4/D10/D11 = DEFERRED ; D12 legacy toléré

## Matrice après (Morris 2026-07-11 14:19)

| ID | Décision |
|----|----------|
| D1 | GO |
| D2 | GO WITH RESERVE |
| D3 | ADJUSTMENT REQUIRED — ALIGNED |
| D4 | GO WITH RESERVE |
| D5 | GO WITH RESERVE |
| D6 | GO WITH RESERVE |
| D7 | GO |
| D8 | GO WITH RESERVE |
| D9 | GO |
| D10 | GO |
| D11 | GO |
| D12 | GO WITH RESERVE |

## Diff stat

 ...7-11-sfia-v2.6-repository-standard-decisions.md | 258 ++++++++++++---------
 ...-11-sfia-v2.6-repository-standard-principles.md | 192 +++++++++------
 2 files changed, 267 insertions(+), 183 deletions(-)

---

diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md
index f1353bd..b8bcc88 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md
@@ -3,9 +3,9 @@
 *Dossier de décision — arbitrages Morris D1–D12 du cadre candidat des principes repository*
 
 **Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md`
-**Date et heure :** 2026-07-11 13:46 Europe/Paris
-**Statut :** **Candidate** — décisions Morris inscrites ; principes alignés D3,D2,D5,D6,D8,D12 — dossier prêt pour merge
-**Cycle projet :** Correctif de conception et validation documentaire — alignement principes sur décisions Morris
+**Date et heure :** 2026-07-11 14:19 Europe/Paris
+**Statut :** **Candidate** — **D1–D12 entièrement arbitrées** — dossier prêt pour merge
+**Cycle projet :** Validation décisionnelle finale — clôture des arbitrages D1–D12
 **Profil SFIA :** **Critical**
 **Typologie v2.4 :** DOC
 **Repository :** mcleland147/sfia-workspace
@@ -13,21 +13,22 @@
 **Base Git :** `main` @ `688832d90e613959fbfdf53530f86aea36e23538`
 **Autorité de décision :** Morris (L0)
 **Date/heure décision Morris :** 2026-07-11 12:45 Europe/Paris
-**Date/heure alignement Morris :** 2026-07-11 13:46 Europe/Paris
+**Date/heure décision Morris finale :** 2026-07-11 14:19 Europe/Paris
 **Baseline opérationnelle :** SFIA v2.4
 **Trajectoires :** v2.5 candidate capitalisée ; v2.6 candidate
 **Inputs structurants :** principes repository v2.6 (PR #163) ; dossier arbitrage initial (PR #164)
 
 ### Justification Critical
 
-- Décisions repository-wide **validées par Morris** et inscrites dans ce dossier
-- **Alignement document de principes** sur D3, D2, D5, D6, D8, D12 — cohérence avant merge
-- Impact futur sur cartographie, G3, migrations et automatisations
+- Décisions repository-wide **finalisées par Morris** — D1–D12 entièrement arbitrées
+- Modification cadre autorité (D4), emplacements (D10), archivage v3 (D11), conformité repository (D12)
+- Impact futur sur cartographie, archivage, renommage et migration
 - Traçabilité complète obligatoire
 
 ### Limites du cycle
 
-- **Décisions inscrites** — alignement principes réalisé (D3,D2,D5,D6,D8,D12) — pas encore appliquées aux fichiers du repository
+- **Décisions D1–D12 finalisées** — règles gouvernant futures cartographie, revue documentaire et migration
+- **Aucune exécution physique** : pas de déplacement, renommage, archivage v3, suppression ni migration
 - Aucune cartographie, classification G3 ou migration ouverte
 - **POC non retenu par Morris** — trajectoire = cartographie progressive par lots (futur GO distinct)
 - SFIA v2.6 reste **candidate**
@@ -36,35 +37,36 @@
 
 ## 1. Executive summary
 
-Morris a arbitré explicitement les **12 décisions D1–D12** du cadre candidat intégré par PR #163. Ce dossier enregistre la matrice validée, les réserves, les différés et la trajectoire aval.
+Morris a arbitré explicitement les **12 décisions D1–D12**. Ce dossier enregistre la **matrice finale**, les réserves, la trajectoire aval et les règles gouvernant la future mise en conformité du repository — **sans exécution physique** dans ce cycle.
 
-**Matrice Morris validée :**
+**Matrice Morris finale :**
 
 | ID | Décision Morris |
 |----|-----------------|
 | D1 | **GO** |
 | D2 | **GO WITH RESERVE** |
-| D3 | **ADJUSTMENT REQUIRED** |
-| D4 | **DEFERRED** |
+| D3 | **ADJUSTMENT REQUIRED — ALIGNED** |
+| D4 | **GO WITH RESERVE** |
 | D5 | **GO WITH RESERVE** |
 | D6 | **GO WITH RESERVE** |
 | D7 | **GO** |
 | D8 | **GO WITH RESERVE** |
 | D9 | **GO** |
-| D10 | **DEFERRED** |
-| D11 | **DEFERRED** |
+| D10 | **GO** |
+| D11 | **GO** |
 | D12 | **GO WITH RESERVE** |
 
 **Points structurants :**
 
-- **D1 + D7 + D9** : fondations adoptées — modèle multidimensionnel, trajectoires, principes avant G3
-- **D3** : retrait de `active` du cycle de vie — usage `operational` séparé — **aligné dans document de principes §8**
-- **D2, D5, D6, D8, D12** : réserves **intégrées** dans document de principes
-- **D4, D10, D11** : différés avec conditions de réouverture
+- **D1–D12 entièrement arbitrées** — **aucune décision active en DEFERRED**
+- **D4** : modèle autorité à quatre niveaux validé avec réserve cartographie
+- **D10** : frontière `docs/` vs `method/.../documentation/` **validée**
+- **D11** : SFIA v3.0 **destinée à l'archive** — archivage physique = cycle futur
+- **D12** : **conformité du repository actuel** comme cible — **aucune tolérance finale** du legacy naming
 - **POC read-only : NON RETENU PAR MORRIS**
-- **Trajectoire candidate :** VALIDATION DES DÉCISIONS → INTÉGRATION DU DOSSIER → CARTOGRAPHIE PROGRESSIVE PAR LOTS (nouveau GO Morris requis — **non ouverte**)
+- **Trajectoire :** décisions → merge → cartographie / revue documentaire / migration par lots
 
-**Gate actuel :** D1–D12 arbitrées ; principes alignés — dossier **cohérent avant merge** (GO merge distinct).
+**Gate actuel :** D1–D12 arbitrées ; principes alignés — **prêt pour merge** (GO merge distinct).
 **Gate suivant :** GO Morris pour ouvrir un **premier lot de cartographie read-only borné**.
 
 ---
@@ -105,7 +107,7 @@ Morris a arbitré explicitement les **12 décisions D1–D12** du cadre candidat
 
 | Exclu | Confirmation |
 |-------|--------------|
-| Modification document principes | **Oui** — alignement D3,D2,D5,D6,D8,D12 uniquement |
+| Modification document principes | **Oui** — finalisation D4, D10, D11, D12 |
 | Application modèle aux fichiers | **Non** |
 | Cartographie / lots cartographie | **Non ouverte** |
 | POC | **Non retenu** |
@@ -129,15 +131,15 @@ Morris a arbitré explicitement les **12 décisions D1–D12** du cadre candidat
 |----|----------|-----------------|---------------------|-----------|------------|
 | D1 | Modèle multidimensionnel | **GO** | Non (prérequis validé) | Oui si absent | Non |
 | D2 | Familles F01–F17 | **GO WITH RESERVE** | Non | Partiel | Partiel |
-| D3 | Cycle de vie | **ADJUSTMENT REQUIRED** — **aligné principes** | Non | Oui si non aligné | Non |
-| D4 | Autorité | **DEFERRED** | Non | Partiel | Oui |
+| D3 | Cycle de vie | **ADJUSTMENT REQUIRED — ALIGNED** | Non | Non | Non |
+| D4 | Autorité | **GO WITH RESERVE** | Non | Partiel | Partiel |
 | D5 | Usage | **GO WITH RESERVE** | Non | Partiel | Partiel |
 | D6 | Périmètres | **GO WITH RESERVE** | Non | Partiel | Partiel |
 | D7 | Trajectoire / baseline | **GO** | Non | Oui si absent | Non |
 | D8 | Profils métadonnées | **GO WITH RESERVE** | Non | Oui (détails) | Partiel |
 | D9 | Principes avant cartographie | **GO** | — | Oui | Non |
-| D10 | docs/ vs method/documentation | **DEFERRED** | Non | Partiel | Oui |
-| D11 | v3 tracked | **DEFERRED** | Non | Non | Oui |
+| D10 | docs/ vs method/documentation | **GO** | Non | Non | Non |
+| D11 | SFIA v3.0 archive | **GO** | Non | Non | Non |
 | D12 | Nommage | **GO WITH RESERVE** | Non | Non | Oui |
 
 ---
@@ -196,12 +198,15 @@ Morris a arbitré explicitement les **12 décisions D1–D12** du cadre candidat
 
 | Champ | Contenu |
 |-------|---------|
-| **Décision Morris** | **DEFERRED** |
-| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
-| **Position temporaire** | Modèle canonical / reference / supporting / informational = **hypothèse candidate en lecture** — **non validée définitivement** |
-| **Conditions réouverture** | Premiers résultats cartographie ; ambiguïté autorité réelle ; préparation G3 ; unicité canonical par sujet |
-| **Effet** | Cartographie lot 1 **autorisée** sans validation D4 |
-| **Gate suivant** | Gate C — après cartographie |
+| **Décision Morris** | **GO WITH RESERVE** |
+| **Date / autorité** | 2026-07-11 14:19 Europe/Paris — Morris |
+| **Décision validée** | Modèle à **quatre niveaux** : canonical, reference, supporting, informational |
+| **Définitions** | **canonical** = source normative/référence principale sur sujet et périmètre précis ; **reference** = source fiable pour comprendre/appliquer/compléter le canonical ; **supporting** = appui, preuve, analyse ; **informational** = informatif sans autorité normative |
+| **Règles** | Un seul canonical actif par sujet et périmètre ; plusieurs canonical si périmètres distincts explicites ; aucune promotion auto ; promotion canonical = Morris ; superseded/archived ≠ canonical actif |
+| **Réserve** | Conflits réels d'autorité ou granularité remontés en cartographie — arbitrage Morris sans remettre en cause le modèle |
+| **Alignement principes** | **Réalisé** — §9 document principes |
+| **Effet** | Modèle autorité opérationnel pour cartographie et revue documentaire |
+| **Gate suivant** | Cartographie ; conflits = Morris |
 
 ---
 
@@ -238,8 +243,8 @@ Morris a arbitré explicitement les **12 décisions D1–D12** du cadre candidat
 | **Décision Morris** | **GO** |
 | **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
 | **Décision validée** | Modèle trajectory / trajectory_role adopté comme cadre candidate |
-| **Trajectoires confirmées** | v1.1 = historique stable ; **v2.4 = baseline opérationnelle** ; **v2.5 = candidate capitalisée** ; **v2.6 = candidate** ; **v3.0 = hors trajectoire courante** |
-| **Règles** | baseline = propriété trajectoire ; lifecycle candidate ≠ trajectory candidate ; aucune promotion automatique ; v3.0 non réactivée |
+| **Trajectoires confirmées** | v1.1 = historique ; **v2.4 = baseline** ; **v2.5 = candidate capitalisée** ; **v2.6 = candidate** ; **v3.0 = archived** (D11) |
+| **Règles** | baseline = propriété trajectoire ; lifecycle candidate ≠ trajectory candidate ; aucune promotion auto ; v3.0 non réactivée |
 | **Effet** | Référence trajectoire pour cartographie et G3 futur |
 
 ---
@@ -276,35 +281,48 @@ Morris a arbitré explicitement les **12 décisions D1–D12** du cadre candidat
 
 | Champ | Contenu |
 |-------|---------|
-| **Décision Morris** | **DEFERRED** |
-| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
-| **Hypothèse logique conservée** | method/.../documentation/ = méthode SFIA, gouvernance, trajectoires, capitalisation ; docs/ = transverse, plateforme, produit, pratiques |
-| **Condition réouverture** | Analyse cas réels lors du **lot documentaire** concerné |
-| **Effet** | Aucun déplacement ; aucun arbre cible |
+| **Décision Morris** | **GO** |
+| **Date / autorité** | 2026-07-11 14:19 Europe/Paris — Morris |
+| **Décision validée** | Frontière **docs/** vs **method/sfia-fast-track/documentation/** validée |
+| **Règle method/documentation** | Documents décrivant, gouvernant, auditant, faisant évoluer ou capitalisant **SFIA lui-même** |
+| **Règle docs/** | Documents décrivant système, produit, projet, plateforme ou pratique transverse **hors méthode SFIA** |
+| **Arbitrage** | SFIA lui-même → method/documentation ; système/produit/projet/plateforme/pratique → docs/ ou projet ; emplacement historique **ne prime pas** |
+| **Cas non conformes** | Identifiés et traités en revue documentaire et migration — **aucun cas litigieux connu conservé** à clôture mise en conformité |
+| **Alignement principes** | **Réalisé** — §15 document principes |
+| **Effet** | Règle décidée ; **application physique** = cycles futurs |
+| **Gate suivant** | Revue documentaire ; migration par lots |
 
 ---
 
-### D11 — Traitement SFIA v3.0 tracked
+### D11 — SFIA v3.0 — archivage cible
 
 | Champ | Contenu |
 |-------|---------|
-| **Décision Morris** | **DEFERRED** |
-| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
-| **Position** | v3.0 **hors trajectoire courante** maintenu |
-| **Conditions** | Pas réactivation ; pas déplacement/archivage/suppression ; pas MCP/Bridge/Runner/`.sfia` ; réouverture = décision Morris explicite |
-| **Condition réouverture** | Cycle Morris dédié v3 |
+| **Décision Morris** | **GO** |
+| **Date / autorité** | 2026-07-11 14:19 Europe/Paris — Morris |
+| **Décision validée** | SFIA v3.0 **hors trajectoire** et **destinée à l'archive** |
+| **Règles** | v3.0 ≠ trajectoire candidate ≠ sujet actif ; documents/artefacts v3.0 = **archived** ; MCP/Bridge/Runner/`.sfia` v3 = **non réactivés** ; aucune évolution v3.0 |
+| **Traitement futur** | Éléments utiles → zone archive gouvernée ; sans valeur historique → suppression proposée après dépendances + GO Morris |
+| **Archivage physique** | Cycle futur distinct — **non exécuté** dans cette PR |
+| **Réouverture** | Nouvelle décision Morris explicite + nouveau cadrage trajectoire |
+| **Alignement principes** | **Réalisé** — §12 document principes |
+| **Effet** | v3.0 qualifiée archived ; trajectoires actives = v2.4 baseline, v2.5/v2.6 candidate |
 
 ---
 
-### D12 — Politique dates et langue de nommage
+### D12 — Nommage, emplacement et conformité repository
 
 | Champ | Contenu |
 |-------|---------|
 | **Décision Morris** | **GO WITH RESERVE** |
-| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
-| **Règles validées (nouveaux docs structurants)** | kebab-case ; noms fichiers **EN** par défaut ; titres **FR** autorisés ; dates `YYYY-MM-DD` pour événementiels, audits, décisions, capitalisations ; pas de date sur core stables sauf nécessité ; préfixe `sfia-` si valeur contexte ; **pas** renommage rétroactif obligatoire |
-| **Réserve** | Conventions legacy tolérées jusqu'à migration gouvernée |
+| **Date / autorité** | 2026-07-11 14:19 Europe/Paris — Morris |
+| **Cible validée** | **Conformité du repository actuel** — pas uniquement futurs documents |
+| **Règles nommage** | kebab-case ; EN fichiers ; FR titres ; dates événementielles ; préfixe `sfia-` si contexte ; pas date sur core stables |
+| **Règles conformité repository** | Tous fichiers actuels en périmètre revue ; utiles = conformes nommage **et** emplacement ; historiques utiles = archivés ; remplacés = superseded ; inutiles = suppression proposée (GO Morris) ; **aucune tolérance finale** incohérences connues |
+| **Exécution** | Par lots ; mise à jour liens/README/index/dépendances ; **aucune migration massive** ; **aucune exécution** dans cette PR |
+| **Réserve** | Mode d'exécution (lots, ordre) — **pas** cible de conformité |
 | **Alignement principes** | **Réalisé** — §14 document principes |
+| **Contexte historique (superseded)** | Ancienne réserve « legacy toléré » — **non retenue** comme état final |
 
 ---
 
@@ -312,13 +330,14 @@ Morris a arbitré explicitement les **12 décisions D1–D12** du cadre candidat
 
 ```text
 D1 (GO) ──┬── D2 (GO WR) ──┬── D8 (GO WR)
-          ├── D3 (ADJ) ────┼── D5 (GO WR)
-          ├── D4 (DEFER)   │
-          ├── D6 (GO WR) ──┘
-          └── D7 (GO) ── D9 (GO) ──► cartographie par lots (GO futur)
-
-D10, D11 (DEFER) ──► lots cartographie documentaires
-D12 (GO WR) ──► nouveaux docs ; migration future
+          ├── D3 (ADJ ALIGNED) ── D5 (GO WR)
+          ├── D4 (GO WR) ──────┤
+          ├── D6 (GO WR) ──────┘
+          ├── D7 (GO) ── D9 (GO) ──► revue documentaire / cartographie (GO futur)
+          ├── D10 (GO) ──► migration emplacements (cycle futur)
+          └── D11 (GO) ──► archivage v3 (cycle futur)
+
+D12 (GO WR) ──► conformité repository actuel (migration par lots)
 ```
 
 ---
@@ -330,12 +349,12 @@ D12 (GO WR) ──► nouveaux docs ; migration future
 **Trajectoire retenue :**
 
 ```text
-VALIDATION DES DÉCISIONS (ce dossier)
-  → ALIGNEMENT PRINCIPES (D3,D2,D5,D6,D8,D12 — réalisé)
+VALIDATION DES DÉCISIONS (ce dossier — D1–D12 finalisées)
   → INTÉGRATION DU DOSSIER (merge PR #164 — GO merge distinct)
-  → CARTOGRAPHIE PROGRESSIVE PAR LOTS (GO Morris distinct par lot)
+  → REVUE DOCUMENTAIRE / CARTOGRAPHIE PAR LOTS (GO Morris distinct)
+  → MISE EN CONFORMITÉ (nommage, emplacement, archivage v3)
   → ANALYSE DES RÉSULTATS
-  → DÉCISION TRANSFORMATIONS
+  → DÉCISION TRANSFORMATIONS / SUPPRESSIONS
   → MIGRATION PAR LOTS VALIDÉS UNIQUEMENT
 ```
 
@@ -354,7 +373,7 @@ VALIDATION DES DÉCISIONS (ce dossier)
 
 | Gate | Statut | Contenu |
 |------|--------|---------|
-| **Gate actuel** | **Atteint** | D1–D12 arbitrées ; principes alignés — cohérence avant merge |
+| **Gate actuel** | **Atteint** | D1–D12 entièrement arbitrées — prêt pour merge |
 | **Gate merge PR #164** | En attente | GO Morris merge distinct |
 | **Gate cartographie lot 1** | **Fermé** | GO Morris futur requis |
 | **Gate G3** | **Fermé** | Classification interdite |
@@ -362,10 +381,10 @@ VALIDATION DES DÉCISIONS (ce dossier)
 
 **Séquence Morris retenue (remplace Option 2 + POC) :**
 
-1. Gate A fondations : D1 GO, D3 ADJ, D7 GO, D9 GO — **validé**
-2. Gate B schéma : D2, D5, D6, D8 principe — **validé avec réserves**
-3. Gate C : D4 différé — **reporté**
-4. Gate D : D10, D11 différés ; D12 GO WR — **validé/partiel**
+1. Gate A fondations : D1, D3, D7, D9 — **validé**
+2. Gate B schéma : D2, D4, D5, D6, D8 — **validé avec réserves**
+3. Gate C emplacements et trajectoire : D10, D11 — **validé**
+4. Gate D conformité : D12 — **validé avec réserve exécution**
 
 ---
 
@@ -373,9 +392,12 @@ VALIDATION DES DÉCISIONS (ce dossier)
 
 | Élément | Conséquence |
 |---------|-------------|
-| D1, D7, D9 GO | Cadre prêt pour cartographie **après merge + GO lot** |
-| D3 ADJ | Cycle sans `active` — **aligné principes** |
-| D4, D10, D11 DEFER | Cartographie possible avec hypothèses et réserves |
+| D1–D12 GO | Cadre complet pour revue documentaire **après merge + GO lot** |
+| D3 ALIGNED | Cycle sans `active` — aligné principes |
+| D4 GO WR | Autorité quatre niveaux — conflits = Morris en cartographie |
+| D10 GO | Règle emplacement — application = migration future |
+| D11 GO | v3.0 archived cible — archivage physique = cycle futur |
+| D12 GO WR | Conformité repository actuel — migration par lots |
 | POC | **Non retenu** — cartographie par lots joue le rôle d'apprentissage |
 | Ce cycle | **Aucune cartographie ouverte** |
 
@@ -383,17 +405,18 @@ VALIDATION DES DÉCISIONS (ce dossier)
 
 ## 13. Conséquences sur G3 et la classification
 
-- **G3 fermé** — D9 GO : aucune classification consolidée avant cadre intégré et décisions appliquées en cartographie
+- **G3 fermé** — D9 GO : classification après cadre intégré et revue documentaire
 - Merge PR #164 **n'ouvre pas** G3
-- D4 différé : autorité en hypothèse jusqu'à réouverture
+- D4 : conflits autorité = arbitrage Morris en cartographie
 
 ---
 
 ## 14. Conséquences sur les migrations futures
 
-- Migration **interdite** tant que cartographie et G3 non validés
-- D12 : conventions **nouveaux** docs ; legacy toléré
-- D10 différé : pas de déplacement docs/ ↔ method/ sans arbitrage lot
+- Migration **interdite** dans cette PR — autorisée uniquement par lots validés post-revue
+- D12 : **conformité repository actuel** — exécution par lots avec liens/dépendances
+- D10 : déplacements docs/ ↔ method/ selon règle validée — cycle futur
+- D11 : archivage v3.0 — cycle futur
 
 ---
 
@@ -401,10 +424,12 @@ VALIDATION DES DÉCISIONS (ce dossier)
 
 | Risque / dette | Mitigation |
 |----------------|------------|
-| D4/D10/D11 différés | Réserves explicites en cartographie |
-| F02/F11, F06/F15 frontières | Clarifiées en principes §5 ; affinage cartographie si cas ambigus |
-| Confusion merge = cartographie ouverte | Gates explicites §11 |
-| Champs profils D8 non figés | Consolidation lors cartographie par lots |
+| Conflits autorité D4 | Arbitrage Morris en cartographie |
+| F02/F11, F06/F15, profils D8 | Affinage gouverné — décision dédiée si changement |
+| Cas emplacement D10 non conformes | Revue documentaire + migration par lots |
+| v3.0 dispersed | Archivage gouverné cycle futur (D11) |
+| Volume migration D12 | Lots contrôlés ; liens vérifiés |
+| Confusion merge = migration ouverte | Gates explicites §11 |
 
 ---
 
@@ -412,14 +437,14 @@ VALIDATION DES DÉCISIONS (ce dossier)
 
 | Option | Statut |
 |--------|--------|
-| 1 — Validation complète D1–D12 | Non retenue intégralement (D4, D10, D11 différés) |
-| 2 — Fondation + POC | **NON RETENU PAR MORRIS** (POC supprimé) |
-| 3 — Approfondissement | Partiellement couvert par réserves et différés |
+| 1 — Validation complète D1–D12 | **Retenue** (avec réserves D2,D4,D5,D6,D8,D12) |
+| 2 — Fondation + POC | **NON RETENU PAR MORRIS** |
+| 3 — Approfondissement partiel | Couvert par réserves finales légitimes |
 | 4 — NO-GO | Non retenu |
 
-**Choix Morris :** avancement sur matrice proposée avec **trajectoire cartographie progressive par lots** — **aucune option globale reste à arbitrer pour D1–D12**.
+**Choix Morris :** matrice D1–D12 **entièrement arbitrée** — trajectoire revue documentaire / cartographie / migration par lots.
 
-**Prochaine décision distincte :** GO merge PR #164 ; puis GO ouverture **premier lot cartographie read-only**.
+**Prochaine décision distincte :** GO merge PR #164 ; puis GO **premier lot revue documentaire ou cartographie**.
 
 ---
 
@@ -429,16 +454,16 @@ VALIDATION DES DÉCISIONS (ce dossier)
 |----|-----------------|----------------------|------------|----------|-------|----------------------|--------------|
 | D1 | **GO** | — | 2026-07-11 12:45 | Morris | Cadre 7 dimensions candidate | — | Merge dossier ; carto |
 | D2 | **GO WITH RESERVE** | F02/F11 ; F06/F15 ; F16/F17 ; pas +familles | 2026-07-11 12:45 | Morris | Taxonomie F01–F17 candidate | Cartographie réelle | Carto lot |
-| D3 | **ADJUSTMENT REQUIRED** | Retrait `active` ; **aligné principes** | 2026-07-11 12:45 | Morris | Lifecycle 6 états + usage séparé | — | Carto lot |
-| D4 | **DEFERRED** | Hypothèse lecture seule | 2026-07-11 12:45 | Morris | Non bloquant carto | Carto ; G3 prep | Gate C |
+| D3 | **ADJUSTMENT REQUIRED — ALIGNED** | Retrait `active` ; aligné principes | 2026-07-11 12:45 | Morris | Lifecycle 6 états + usage séparé | — | Carto lot |
+| D4 | **GO WITH RESERVE** | Conflits autorité en cartographie | 2026-07-11 14:19 | Morris | Modèle 4 niveaux | Cas complexe carto | Carto lot |
 | D5 | **GO WITH RESERVE** | Cartographie d'abord ; pas obligatoire partout | 2026-07-11 12:45 | Morris | Usage en carto | — | Carto lot |
 | D6 | **GO WITH RESERVE** | product différé ; project requis | 2026-07-11 12:45 | Morris | 5 périmètres | Cas réel product | Carto lot |
 | D7 | **GO** | v3 hors trajectoire | 2026-07-11 12:45 | Morris | Trajectory/baseline candidate | — | Carto ; G3 |
 | D8 | **GO WITH RESERVE** | Principe seul ; champs après carto | 2026-07-11 12:45 | Morris | Profils A–F principe | Cartographie lots | Gate C |
 | D9 | **GO** | Pas POC ; carto par lots ; G3 fermé | 2026-07-11 12:45 | Morris | Gates carto/G3 | — | GO carto lot |
-| D10 | **DEFERRED** | Hypothèse logique conservée | 2026-07-11 12:45 | Morris | Pas d'arbre cible | Lot documentaire | Gate D |
-| D11 | **DEFERRED** | Hors trajectoire ; pas toucher v3 | 2026-07-11 12:45 | Morris | Statu quo v3 | Décision Morris v3 | Gate D |
-| D12 | **GO WITH RESERVE** | Nouveaux docs ; legacy toléré | 2026-07-11 12:45 | Morris | Conventions création | Migration gouvernée | Migration future |
+| D10 | **GO** | Règle docs/method validée | 2026-07-11 14:19 | Morris | Emplacement fonctionnel | — | Migration lot |
+| D11 | **GO** | v3.0 archived cible | 2026-07-11 14:19 | Morris | Hors trajectoire active | Réouverture Morris | Archivage v3 |
+| D12 | **GO WITH RESERVE** | Conformité repo actuel ; exécution par lots | 2026-07-11 14:19 | Morris | Nommage + emplacement | — | Migration future |
 
 > **Aucune ligne NON DÉCIDÉ.**
 
@@ -447,9 +472,10 @@ VALIDATION DES DÉCISIONS (ce dossier)
 ## 18. Points non couverts
 
 - Matrice fichier × dimensions réelle
+- Revue documentaire et migration par lots
+- Archivage physique v3.0
 - Correction liens cassés ; Notion vs Git
 - Automatisation / linter
-- D4, D10, D11 — décisions différées
 
 ---
 
@@ -457,15 +483,18 @@ VALIDATION DES DÉCISIONS (ce dossier)
 
 | Élément | Statut |
 |---------|--------|
-| D1–D12 arbitrées par Morris | **Oui** |
+| D1–D12 arbitrées par Morris | **Oui — entièrement** |
+| Aucune décision active DEFERRED | **Oui** |
+| D4 autorité quatre niveaux | **Oui** |
+| D10 frontière docs/method | **Oui** |
+| D11 v3.0 archived cible | **Oui** — archivage physique futur |
+| D12 conformité repository actuel | **Oui** — exécution par lots |
+| Legacy naming toléré comme état final | **Non** |
 | Réserves tracées | **Oui** |
-| D3 retrait `active` décidé et aligné | **Oui** — principes §8 alignés |
-| D4, D10, D11 différés | **Oui** — conditions documentées |
 | POC | **Non retenu** |
-| Cartographie | **Non ouverte** |
-| G3 / classification / migration | **Non** |
-| Document principes aligné | **Oui** — D3,D2,D5,D6,D8,D12 |
-| Réserve bloquante alignement | **Aucune** |
+| Cartographie / migration exécutées | **Non** |
+| G3 / classification | **Non** |
+| Document principes aligné | **Oui** |
 | SFIA v2.6 | **Candidate** |
 
 ---
@@ -474,7 +503,7 @@ VALIDATION DES DÉCISIONS (ce dossier)
 
 | Gate | Description |
 |------|-------------|
-| **Actuel** | Décisions inscrites ; principes alignés — **merge PR #164** soumis à GO Morris distinct |
+| **Actuel** | D1–D12 finalisées — **merge PR #164** soumis à GO Morris distinct |
 | **Suivant** | GO Morris **premier lot cartographie read-only borné** |
 | **G3** | Fermé |
 | **Migration** | Fermée |
@@ -489,15 +518,15 @@ VALIDATION DES DÉCISIONS (ce dossier)
 |----|-----------------|---------------------|-----------|------------------|------------|
 | D1 | GO | Non | Oui* | Oui* | Non |
 | D2 | GO WITH RESERVE | Non | Partiel | Partiel | Partiel |
-| D3 | ADJUSTMENT REQUIRED | Non | Oui* | Oui* | Non |
-| D4 | DEFERRED | Non | Partiel | Non | Oui |
+| D3 | ADJUSTMENT REQUIRED — ALIGNED | Non | Non | Non | Non |
+| D4 | GO WITH RESERVE | Non | Partiel | Non | Partiel |
 | D5 | GO WITH RESERVE | Non | Partiel | Non | Partiel |
 | D6 | GO WITH RESERVE | Non | Partiel | Partiel | Partiel |
 | D7 | GO | Non | Oui* | Oui* | Non |
 | D8 | GO WITH RESERVE | Non | Oui | Oui | Partiel |
 | D9 | GO | — | Oui | Oui | Non |
-| D10 | DEFERRED | Non | Partiel | Partiel | Oui |
-| D11 | DEFERRED | Non | Non | Non | Oui |
+| D10 | GO | Non | Non | Partiel | Non |
+| D11 | GO | Non | Non | Partiel | Non |
 | D12 | GO WITH RESERVE | Non | Non | Partiel | Oui |
 
 *Prérequis satisfaits par décisions Morris — G3/migration restent fermés par D9.
@@ -510,9 +539,11 @@ VALIDATION DES DÉCISIONS (ce dossier)
 
 | Décision | Amont | Aval |
 |----------|-------|------|
-| D3 ADJ | D1 | Cartographie ; D5 |
-| D9 GO | D1–D8 | Cartographie lots ; blocage G3 |
-| D10 DEFER | D2, D9 | Lot cartographie documentaire |
+| D3 ADJ ALIGNED | D1 | Cartographie ; D5 |
+| D4 GO WR | D1 | Cartographie ; conflits Morris |
+| D9 GO | D1–D12 | Revue documentaire ; blocage G3 |
+| D10 GO | D2, D9 | Migration emplacements |
+| D11 GO | D7 | Archivage v3 cycle futur |
 
 ---
 
@@ -520,10 +551,11 @@ VALIDATION DES DÉCISIONS (ce dossier)
 
 | Gate futur | Condition post-décision Morris |
 |------------|-------------------------------|
-| Merge PR #164 | D1–D12 inscrites — GO merge Morris |
-| Cartographie lot 1 read-only | Merge dossier + **GO Morris lot** ; D1,D7,D9 satisfaits |
-| Alignement principes D3,D2,D5,D6,D8,D12 | **Réalisé** — cohérence avant merge |
-| Classification G3 | Fermé — réouverture Morris explicite après cartographie |
+| Merge PR #164 | D1–D12 finalisées — GO merge Morris |
+| Revue documentaire lot 1 | Merge dossier + GO Morris lot |
+| Archivage v3.0 | D11 GO — cycle futur distinct |
+| Conformité nommage/emplacement | D12 GO WR — migration par lots |
+| Classification G3 | Fermé — réouverture Morris explicite |
 | Migration lot 1 | G3 + D8 détails + D12 — fermé |
 | POC | **NON RETENU — gate supprimée** |
 
@@ -533,10 +565,10 @@ VALIDATION DES DÉCISIONS (ce dossier)
 
 | Option | Statut Morris |
 |--------|-------------|
-| 1 — Complète | Non (différés D4,D10,D11) |
+| 1 — Complète D1–D12 | **Retenue** (réserves D2,D4,D5,D6,D8,D12) |
 | 2 — Fondation + POC | **NON RETENU** |
 | 3 — Approfondissement | Partiel via réserves |
-| Trajectoire retenue | **Décisions → merge → cartographie par lots** |
+| Trajectoire retenue | **Décisions finalisées → merge → revue/migration par lots** |
 
 ---
 
@@ -547,12 +579,10 @@ VALIDATION DES DÉCISIONS (ce dossier)
 | Repository | mcleland147/sfia-workspace |
 | Branche projet | method/sfia-v2.6-repository-standard-decisions |
 | Base `main` | `688832d90e613959fbfdf53530f86aea36e23538` |
-| HEAD initial (correctif) | `7e16fe66a458f3f28d4d0792c0eacf67190ac114` |
-| Cycle | Alignement principes sur décisions Morris D3,D2,D5,D6,D8,D12 |
-| Profil | Critical |
-| Fichiers modifiés | `2026-07-11-sfia-v2.6-repository-standard-principles.md` ; `2026-07-11-sfia-v2.6-repository-standard-decisions.md` |
-| Commit attendu | `docs: align repository principles with Morris decisions` |
+| HEAD initial (correctif) | `5d4aa0a555bd8bf3a649b4113e80ff5d5c14bcf5` |
+| Cycle | Validation décisionnelle finale — clôture D1–D12 |
+| Commit attendu | `docs: finalize Morris repository standard decisions` |
 
 ---
 
-*Dossier candidate SFIA v2.6 — décisions Morris D1–D12 inscrites — principes alignés — POC non retenu — cartographie par lots non ouverte — SFIA v2.6 reste candidate.*
+*Dossier candidate SFIA v2.6 — D1–D12 entièrement arbitrées — conformité repository actuel cible — aucune exécution physique — SFIA v2.6 reste candidate.*
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md
index 79ad65b..e922de1 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md
@@ -3,16 +3,16 @@
 *Cadre candidat de principes pour standardiser et homogénéiser progressivement le repository SFIA*
 
 **Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md`
-**Date et heure :** 2026-07-11 13:46 Europe/Paris
-**Statut :** **Candidate** — principes du standard repository v2.6 — alignés Morris D3, D2, D5, D6, D8, D12
-**Cycle projet :** Correctif de conception et validation documentaire — alignement principes sur décisions Morris
+**Date et heure :** 2026-07-11 14:19 Europe/Paris
+**Statut :** **Candidate** — principes du standard repository v2.6 — **D1–D12 entièrement arbitrées par Morris**
+**Cycle projet :** Validation décisionnelle finale — clôture des arbitrages D1–D12
 **Profil SFIA :** Critical
 **Typologie v2.4 :** DOC
 **Repository :** mcleland147/sfia-workspace
 **Branche :** method/sfia-v2.6-repository-standard-decisions
 **Base Git :** `main` @ `688832d90e613959fbfdf53530f86aea36e23538`
 **Autorité de décision :** Morris (L0)
-**Date/heure alignement Morris :** 2026-07-11 13:46 Europe/Paris
+**Date/heure décision Morris finale :** 2026-07-11 14:19 Europe/Paris
 **Baseline opérationnelle :** SFIA v2.4
 **Trajectoires :** v2.5 candidate capitalisée ; v2.6 candidate
 **Inputs structurants :** cadrage v2.6 (PR #159) ; audit read-only v2.6 (PR #162) ; principes PR #163 ; décisions Morris D1–D12 (PR #164)
@@ -24,10 +24,10 @@
 - Aucune classification individuelle de fichiers
 - Aucune matrice garder / mettre à jour / fusionner / archiver / supprimer
 - Aucune arborescence physique finale validée
-- Aucun déplacement, renommage, migration, archivage ou suppression
-- Ce correctif **aligne** le document sur les décisions Morris D3, D2, D5, D6, D8 et D12 — sans rouvrir D1, D4, D7, D9, D10, D11
+- Ce correctif **finalise** les décisions Morris D1–D12 dans le cadre de principes — sans exécuter cartographie, migration, archivage physique ni suppression
+- Aucun déplacement, renommage, migration, archivage ou suppression **exécutés** dans ce cycle
 - Aucune automatisation implémentée
-- SFIA v3.0, MCP, Bridge, Runner et `.sfia` restent hors trajectoire courante
+- SFIA v3.0 **destinée à l'archive** (D11) — archivage physique dans cycle futur ; MCP, Bridge, Runner et `.sfia` non réactivés
 
 ---
 
@@ -45,7 +45,7 @@ Ce document propose un **cadre candidat de principes** pour standardiser et homo
 
 **Recommandation candidate :** valider le modèle multidimensionnel avant cartographie (G3) et toute migration.
 
-**Alignement Morris (2026-07-11) :** D3 (cycle de vie à six états), D2 (familles avec réserves), D5 (usage), D6 (périmètres), D8 (profils proportionnés), D12 (nommage nouveaux documents) — intégrés dans ce document. D4, D10, D11 restent différées.
+**Décisions Morris finales (2026-07-11) :** les **12 décisions D1–D12** sont arbitrées. Ce document traduit le cadre candidate en règles gouvernées — cible de conformité du **repository actuel** incluse (D12) — exécution physique réservée aux cycles futurs de cartographie, revue documentaire et migration par lots.
 
 ---
 
@@ -223,12 +223,12 @@ Voir **§8** pour table complète et transitions.
 |---------|-------------------|
 | **Objectif** | Décrire le **niveau de référence** normative |
 | **Valeurs** | canonical, reference, supporting, informational |
-| **Règles** | Indépendante du cycle de vie ; `canonical` = gate Morris |
+| **Règles** | Indépendante du cycle de vie ; un seul canonical actif par sujet et périmètre ; promotion canonical = GO Morris |
 | **Exemple** | Operating model → `authority: canonical` ; rapport audit → `supporting` |
 | **Automatisable** | Cohérence canonical + lifecycle — partiel |
-| **Risque** | Confondre canonical (autorité) avec baseline (trajectoire) |
+| **Risque** | Confondre canonical (autorité) avec baseline (trajectoire) ; conflits de granularité en cartographie |
 
-Voir **§9**.
+Voir **§9**. **Décision Morris (D4) :** **GO WITH RESERVE**.
 
 ### 6.5 D4 — Usage
 
@@ -265,9 +265,9 @@ Voir **§11**.
 |---------|-------------------|
 | **Objectif** | Rattachement **méthodologique ou versionnel** |
 | **Valeurs trajectory** | SFIA v1.1, v2.4, v2.5, v2.6, v3.0, N/A |
-| **Valeurs trajectory_role** | baseline, candidate, historical, suspended, hors-trajectoire |
+| **Valeurs trajectory_role** | baseline, candidate, historical, archived, hors-trajectoire |
 | **Règles** | **Baseline = propriété trajectoire**, pas cycle de vie ; promotion = GO Morris |
-| **Confirmé** | v2.4 baseline ; v2.5 candidate capitalisée ; v2.6 candidate ; v3.0 hors trajectoire courante |
+| **Confirmé** | v2.4 baseline ; v2.5 candidate capitalisée ; v2.6 candidate ; **v3.0 archived — hors trajectoire courante** (D11) |
 | **Automatisable** | trajectory_role=baseline sans GO — signal L2 |
 | **Risque** | Mélanger « document Candidate » et « trajectoire v2.6 candidate » |
 
@@ -345,22 +345,30 @@ draft → candidate → validated → deprecated | superseded → archived
 
 ## 9. Autorité documentaire
 
-> Dimension **D3** — indépendante du cycle de vie.
+> Dimension **D3 autorité** — indépendante du cycle de vie.
+>
+> **Décision Morris (D4) :** **GO WITH RESERVE** — modèle à **quatre niveaux** validé.
 
 | Niveau candidate | Définition | Usage typique | Compatible lifecycle | Gate Morris |
 |------------------|------------|---------------|----------------------|-------------|
-| **canonical** | Source normative **unique** sur un sujet | Rules, operating model | validated | **Oui — obligatoire** |
-| **reference** | Référence utile, non norme unique | Architecture docs, guides | validated, candidate | Recommandé |
-| **supporting** | Support d'un cycle ou d'une décision | Audits, rapports, REX | candidate, validated | Non |
-| **informational** | Explicatif sans autorité structurante | Notes, brouillons, exports | draft, archived | Non |
-
-**Règles candidates :**
-
+| **canonical** | Source normative ou de référence **principale** sur un sujet et un périmètre précis | Rules, operating model | validated | **Oui — promotion obligatoire** |
+| **reference** | Source fiable pour comprendre, appliquer ou compléter le canonical | Architecture docs, guides | validated, candidate | Recommandé |
+| **supporting** | Document d'appui, preuve, analyse ou support de travail | Audits, rapports, REX | candidate, validated | Non |
+| **informational** | Contenu informatif sans autorité normative ou décisionnelle | Notes, brouillons, exports | draft, archived | Non |
+
+**Règles candidates (D4) :**
+
+- **Un seul document canonical actif** par sujet **et** périmètre
+- Plusieurs canonical **autorisés** uniquement si périmètres **distincts** et explicitement identifiés
+- **Aucune promotion automatique** vers canonical
+- Toute promotion vers canonical = **décision Morris**
+- Document `superseded` ou `archived` **ne peut pas** rester canonical actif
 - Document `candidate` + `canonical` = **anomalie** sans décision Morris explicite
 - Document `validated + canonical + usage: operational` = configuration normale core baseline
 - Autorité **≠** trajectoire baseline
+- Conflits réels d'autorité ou de granularité rencontrés en cartographie = **arbitrage Morris** sans remettre en cause le modèle à quatre niveaux
 
-**Décision Morris requise (D4).**
+**Décision Morris (D4) :** **GO WITH RESERVE** — réserve : conflits complexes soumis à Morris en cartographie.
 
 ---
 
@@ -432,7 +440,7 @@ draft → candidate → validated → deprecated | superseded → archived
 
 ## 12. Trajectoire, version et baseline
 
-> Dimension **D6** — distincte du cycle de vie et de l'autorité.
+> Dimension **D6 trajectoire** — distincte du cycle de vie et de l'autorité.
 
 | Trajectory candidate | trajectory_role candidate | Statut chantier |
 |---------------------|---------------------------|-----------------|
@@ -440,7 +448,7 @@ draft → candidate → validated → deprecated | superseded → archived
 | SFIA v2.4 | **baseline** | **Baseline opérationnelle** |
 | SFIA v2.5 | **candidate** (capitalisée) | Trajectoire candidate capitalisée |
 | SFIA v2.6 | **candidate** | Trajectoire candidate — chantier en cours |
-| SFIA v3.0 | **suspended** / hors-trajectoire | **Hors trajectoire courante** — non réactivée |
+| SFIA v3.0 | **archived** | **Hors trajectoire — destinée à l'archive** (D11) |
 | N/A | — | Docs sans rattachement trajectoire |
 
 **Règles candidates :**
@@ -448,9 +456,20 @@ draft → candidate → validated → deprecated | superseded → archived
 - **baseline** = propriété `trajectory_role` de la trajectoire v2.4 — **pas** un `lifecycle_status`
 - Promotion v2.6 → baseline trajectoire = **GO Morris** + capitalisation — pas automatique à la merge PR
 - Document sur trajectoire v2.6 peut avoir `lifecycle_status: candidate` **et** `trajectory: SFIA v2.6` **et** `trajectory_role: candidate` — dimensions distinctes
-- v3.0 : visible, signalé, non réactivé
 
-**Décision Morris requise (D7).**
+**Décision Morris (D11) — SFIA v3.0 :**
+
+- v3.0 **n'est plus** une trajectoire candidate ni un sujet actif
+- Documents et artefacts v3.0 = qualifiés **archived** ; `trajectory_role: archived`
+- **Aucune évolution** fonctionnelle ou méthodologique v3.0
+- **Aucune conservation ambiguë** parmi les trajectoires actives
+- MCP, Bridge, Runner et `.sfia` associés à v3.0 = **non réactivés**
+- Éléments utiles = regroupés en **zone d'archive gouvernée** (cycle futur)
+- Éléments sans valeur historique = proposés à **suppression** après vérification dépendances et GO Morris
+- **Archivage physique** = cycle futur distinct — **non exécuté** dans ce document
+- Réouverture v3.0 = **nouvelle décision Morris** explicite + nouveau cadrage trajectoire
+
+**Décision Morris (D7) :** **GO** — trajectoires v2.4 baseline, v2.5/v2.6 candidate ; v3.0 archived (D11).
 
 ---
 
@@ -538,24 +557,37 @@ draft → candidate → validated → deprecated | superseded → archived
 
 **Principe candidat :** absence de profil complet ≠ non-conformité si famille Léger et dimensions déductibles sans contradiction. Les champs précis seront **consolidés lors de la cartographie progressive par lots**.
 
-**Décision Morris (D8) :** **GO WITH RESERVE** — principe A–F validé ; détails des champs = cartographie.
+**Affinage gouverné (D2/D8) :** F01–F17 et profils A–F = cadre candidate applicable ; cartographie peut révéler ambiguïtés ; **aucune modification automatique** du standard ; toute proposition d'ajustement tracée ; tout changement de famille, frontière ou profil = **décision dédiée Morris** — ne bloque ni merge PR #164 ni cartographie future.
+
+**Décision Morris (D8) :** **GO WITH RESERVE** — principe A–F validé ; détails des champs = cartographie gouvernée.
 
 ---
 
-## 14. Conventions de nommage
+## 14. Conventions de nommage et mise en conformité
 
-> **Décision Morris (D12) :** conventions applicables aux **nouveaux documents structurants** — **aucun renommage rétroactif automatique** ; conventions legacy tolérées.
+> **Décision Morris (D12) :** **GO WITH RESERVE** — le standard vise la **cohérence du repository actuel**, pas uniquement celle des futurs documents. **Aucune tolérance finale** du legacy naming comme état cible.
 
-| Sujet | Principe candidate | Variante légitime |
-|-------|-------------------|-------------------|
-| Casse | **kebab-case** pour fichiers MD et dossiers | Legacy existant toléré |
-| Langue | **EN** nom de fichier par défaut ; titre interne **FR** autorisé | Legacy FR |
-| Explicite | Suffixes `-audit`, `-framing`, `-rex`, `-report` | Basename par increment |
-| Dates | Préfixe `YYYY-MM-DD` pour audits, décisions, cadrages événementiels, capitalisations, REX, rapports de validation historisés | **Pas de date obligatoire** sur documents core stables |
+| Sujet | Principe candidate | Exécution |
+|-------|-------------------|-----------|
+| Casse | **kebab-case** pour fichiers MD et dossiers | Tous fichiers — cycles futurs |
+| Langue | **EN** nom de fichier par défaut ; titre interne **FR** autorisé | Tous fichiers utiles |
+| Explicite | Suffixes `-audit`, `-framing`, `-rex`, `-report` | Selon famille |
+| Dates | Préfixe `YYYY-MM-DD` pour audits, décisions, cadrages événementiels, capitalisations, REX, rapports de validation historisés | Pas de date obligatoire sur core stables |
 | Préfixe `sfia-` | Uniquement lorsqu'il apporte une **information de contexte utile** | Pas de préfixe systématique |
 | Versions | Trajectoire dans **chemin** (`sfia-v2.6/`) | v2.4 implicite core |
 | README | `README.md` exact | — |
-| Migration nommage | Gouvernée, par lots — **cycle futur distinct** | Legacy toléré jusqu'alors |
+
+**Cible de conformité — repository actuel (D12) :**
+
+- **Tous les fichiers actuels** entrent dans le périmètre de la future revue documentaire
+- Tout fichier **utile** doit être conforme aux conventions de nommage **et** d'emplacement validées
+- Tout fichier historique utile = **archivé** dans une zone cohérente
+- Tout fichier remplacé = marqué **superseded** puis traité selon trajectoire de migration
+- Tout fichier **inutile** = proposé à **suppression** avec vérification dépendances et GO Morris
+- **Aucun fichier non conforme** ne doit être conservé uniquement parce qu'il est ancien
+- Tout renommage ou déplacement = mise à jour des **liens, README, index, références, prompts et dépendances**
+- Toute migration = **par lots contrôlés** — **aucune migration massive non gouvernée**
+- **Aucune exécution physique** dans ce document ou cette PR
 
 **Exemples corrects :**
 
@@ -563,24 +595,47 @@ draft → candidate → validated → deprecated | superseded → archived
 - `sfia-cycle-execution-template.md`
 - `architecture-principles.md`
 
-**À ne pas imposer :** date sur tous les fichiers core ; préfixe `sfia-` sur chaque fichier ; renommage immédiat des fichiers legacy.
-
-**Décision Morris (D12) :** **GO WITH RESERVE** — règles ci-dessus pour nouveaux documents ; legacy toléré.
+**Réserve D12 :** mode d'exécution (lots, ordre, dépendances) — **pas** la cible de conformité ni une tolérance durable des incohérences connues.
 
 ---
 
 ## 15. Responsabilités logiques des grandes zones
 
 > **Emplacement logique (D7)** — une zone **n'est pas une famille**.
+>
+> **Décision Morris (D10) :** **GO** — frontière `docs/` vs `method/sfia-fast-track/documentation/` **validée**.
+
+### Règle D10 — frontière fonctionnelle
+
+**`method/sfia-fast-track/documentation/`** contient les documents qui décrivent, gouvernent, auditent, font évoluer ou capitalisent **SFIA lui-même** :
+
+- méthode SFIA ; gouvernance SFIA ; trajectoires SFIA ; décisions méthode
+- audits du repository ou de la méthode ; capitalisations SFIA
+- standards et règles documentaires SFIA ; rapports de cycles méthode
+
+**`docs/`** contient les documents qui décrivent un **système, produit, projet, outil, plateforme ou pratique transverse** qui n'est **pas** la méthode SFIA elle-même :
+
+- documentation technique, produit, plateforme, architecture transverse
+- documentation utilisateur ; pratiques non spécifiques à la gouvernance SFIA
+
+**Règle d'arbitrage (D10) :**
+
+| Critère | Emplacement cible |
+|---------|-------------------|
+| Document explique ou gouverne **SFIA lui-même** | `method/sfia-fast-track/documentation/` |
+| Document décrit système, produit, projet, plateforme ou pratique | `docs/` ou périmètre projet approprié |
+| Emplacement historique | **Ne prime jamais** sur la fonction réelle |
+| Cas actuels non conformes | Identifiés et traités en **revue documentaire** et migration — **aucun cas litigieux connu conservé** à la clôture mise en conformité |
 
 | Zone | Responsabilité logique | Familles possibles | Précision |
 |------|------------------------|-------------------|-----------|
 | `method/sfia-fast-track/` | Méthode et gouvernance SFIA | F01–F03, F11, F13 | — |
+| `method/.../documentation/` | **Documentation SFIA** (D10) | F01–F12 selon fonction | Règle D10 |
 | `method/.../capitalization/` | Capitalisation trajectoire | F09–F12 | **Plusieurs familles** |
-| `method/.../workspace-audit/` | Audits/plans **historiques** | F09, F11 | lifecycle souvent archived/historical trajectory |
+| `method/.../workspace-audit/` | Audits/plans **historiques** | F09, F11 | lifecycle souvent archived |
 | `prompts/` | Contrats exécution | F05, F04 | — |
-| `docs/` | Transverse plateforme | F06, F07 | Arbitrage vs method/documentation |
-| `projects/{projet}/` | Périmètre projet | F08, F09, F10, F17 | scope project ; code ≠ famille F08 auto |
+| `docs/` | **Transverse hors méthode SFIA** (D10) | F06, F07 | Règle D10 |
+| `projects/{projet}/` | Périmètre projet | F08, F09, F10, F17 | scope project |
 | `*/archive/` | Emplacement archived | Toute famille | lifecycle `archived` typique |
 | `tools/` | Outillage | F15, F16 | — |
 
@@ -589,8 +644,9 @@ draft → candidate → validated → deprecated | superseded → archived
 - `/archive/` → emplacement associé à `lifecycle_status: archived` — pas une famille
 - `projects/` → scope project fréquent ; code = F17
 - `capitalization/` → Audit + Capitalisation + Décision coexistent
+- **Application physique** des règles D10 = cycles futurs — **aucun déplacement** dans ce cycle
 
-**Décision Morris requise (D10) :** docs/ vs method/.../documentation/.
+**Décision Morris (D10) :** **GO** — règle décidée ; exécution = cartographie et migration par lots.
 
 ---
 
@@ -637,7 +693,7 @@ Une exception peut cibler **une dimension spécifique** :
 
 | Dimension | Exemple exception |
 |-----------|-------------------|
-| Nommage | Legacy kebab-case non conforme |
+| Nommage | Non-conformité identifiée en revue | Exception temporaire en cartographie uniquement |
 | Métadonnées | Profil Léger accepté |
 | Emplacement | F08 temporairement hors projects/ |
 | lifecycle_status | validated avec usage operational ou non-operational |
@@ -679,24 +735,24 @@ Une exception peut cibler **une dimension spécifique** :
 
 ---
 
-## 22. Points nécessitant décision Morris
+## 22. Statut des décisions Morris D1–D12
 
-| # | Sujet | Statut Morris |
-|---|-------|---------------|
-| D1 | Adoption modèle multidimensionnel | **GO** — inscrit dossier décisions |
-| D2 | Validation familles primaires F01–F17 | **GO WITH RESERVE** — aligné §5 |
-| D3 | Cycle de vie (six états) | **ADJUSTMENT REQUIRED** — **aligné §8** |
-| D4 | Validation niveaux autorité | **DEFERRED** |
-| D5 | Validation modèle usage | **GO WITH RESERVE** — aligné §10 |
-| D6 | Validation périmètres | **GO WITH RESERVE** — aligné §11 |
-| D7 | Validation trajectoire / baseline | **GO** — inscrit dossier décisions |
-| D8 | Validation profils métadonnées | **GO WITH RESERVE** — aligné §13 |
-| D9 | Principes avant cartographie G3 | **GO** — inscrit dossier décisions |
-| D10 | Arbitrage docs/ vs method/documentation | **DEFERRED** |
-| D11 | Traitement v3 tracked | **DEFERRED** |
-| D12 | Politique dates et langue nommage | **GO WITH RESERVE** — aligné §14 |
+| # | Sujet | Décision Morris |
+|---|-------|-----------------|
+| D1 | Adoption modèle multidimensionnel | **GO** |
+| D2 | Validation familles primaires F01–F17 | **GO WITH RESERVE** |
+| D3 | Cycle de vie (six états) | **ADJUSTMENT REQUIRED — ALIGNED** |
+| D4 | Validation niveaux autorité | **GO WITH RESERVE** |
+| D5 | Validation modèle usage | **GO WITH RESERVE** |
+| D6 | Validation périmètres | **GO WITH RESERVE** |
+| D7 | Validation trajectoire / baseline | **GO** |
+| D8 | Validation profils métadonnées | **GO WITH RESERVE** |
+| D9 | Principes avant cartographie G3 | **GO** |
+| D10 | Arbitrage docs/ vs method/documentation | **GO** |
+| D11 | Traitement SFIA v3.0 | **GO** — archived cible |
+| D12 | Politique nommage et conformité repository | **GO WITH RESERVE** |
 
-> D4, D10, D11 restent **différées** — aucune promotion en décision validée sans GO Morris explicite.
+> **Aucune décision D1–D12 active en DEFERRED.** Réserves finales légitimes : affinage gouverné familles/profils ; conflits autorité en cartographie ; mise en conformité physique par lots ; suppressions sous GO Morris.
 
 ---
 
@@ -749,7 +805,7 @@ Une exception peut cibler **une dimension spécifique** :
 | Autorité, usage, périmètre, trajectoire séparés | **Oui** — §9–12 |
 | Profils alignés | **Oui** — §13 |
 | Classification fichiers | **Non** |
-| Standard validé Morris | **Partiel** — D3,D2,D5,D6,D8,D12 alignés ; D4,D10,D11 différées |
+| Standard validé Morris | **Oui — D1–D12 entièrement arbitrées** ; exécution physique = cycles futurs |
 
 ---
 
@@ -759,7 +815,7 @@ Une exception peut cibler **une dimension spécifique** :
 |--------|-------------|
 | **A** | Corrections du modèle candidate |
 | **B** | Validation partielle ou complète (sans application) |
-| **C** | Approfondissement ciblé (ex. D4 autorité, D10 zones) — **après cartographie si GO** |
+| **C** | Mise en conformité repository — cartographie et migration par lots (**après merge si GO**) |
 | **D** | Cartographie étape 2 — **après validation si GO** |
 | **E** | NO-GO temporaire |
 
@@ -822,7 +878,7 @@ Une exception peut cibler **une dimension spécifique** :
 | D6 Trajectoire | trajectory_role cohérent | Partiel | L2 | baseline promotion |
 | D7 Emplacement | logical_location vs scope | Partiel | L2 | déplacement futur |
 | Transversal | Liens internes valides | Oui | L1 | Lot migration |
-| Transversal | Profil cohérent famille | Partiel | L2 | Legacy exempt |
+| Transversal | Profil cohérent famille | Partiel | L2 | Affinage gouverné D8 |
 | Transversal | Classification G3 | Non | L3 | **Morris G3** |
 | Transversal | Fusion sémantique | Non | L3 | **Morris** |
 
@@ -923,12 +979,10 @@ Une exception peut cibler **une dimension spécifique** :
 | Repository | mcleland147/sfia-workspace |
 | Branche projet | method/sfia-v2.6-repository-standard-decisions |
 | Base `main` | `688832d90e613959fbfdf53530f86aea36e23538` |
-| HEAD initial (avant correctif) | `7e16fe66a458f3f28d4d0792c0eacf67190ac114` |
-| Cycle | Alignement principes sur décisions Morris D3,D2,D5,D6,D8,D12 |
-| Profil | Critical |
-| Fichiers modifiés | `2026-07-11-sfia-v2.6-repository-standard-principles.md` ; `2026-07-11-sfia-v2.6-repository-standard-decisions.md` |
-| Commit attendu | `docs: align repository principles with Morris decisions` |
+| HEAD initial (avant correctif) | `5d4aa0a555bd8bf3a649b4113e80ff5d5c14bcf5` |
+| Cycle | Validation décisionnelle finale — clôture D1–D12 |
+| Commit attendu | `docs: finalize Morris repository standard decisions` |
 
 ---
 
-*Document candidate SFIA v2.6 — modèle multidimensionnel — aligné Morris D3,D2,D5,D6,D8,D12 — aucune application au repository sans GO explicite.*
+*Document candidate SFIA v2.6 — D1–D12 entièrement arbitrées — cible conformité repository actuel — aucune exécution physique sans GO explicite.*

## Contenu complet — principes
```markdown
# SFIA v2.6 — Repository Standard Principles

*Cadre candidat de principes pour standardiser et homogénéiser progressivement le repository SFIA*

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md`
**Date et heure :** 2026-07-11 14:19 Europe/Paris
**Statut :** **Candidate** — principes du standard repository v2.6 — **D1–D12 entièrement arbitrées par Morris**
**Cycle projet :** Validation décisionnelle finale — clôture des arbitrages D1–D12
**Profil SFIA :** Critical
**Typologie v2.4 :** DOC
**Repository :** mcleland147/sfia-workspace
**Branche :** method/sfia-v2.6-repository-standard-decisions
**Base Git :** `main` @ `688832d90e613959fbfdf53530f86aea36e23538`
**Autorité de décision :** Morris (L0)
**Date/heure décision Morris finale :** 2026-07-11 14:19 Europe/Paris
**Baseline opérationnelle :** SFIA v2.4
**Trajectoires :** v2.5 candidate capitalisée ; v2.6 candidate
**Inputs structurants :** cadrage v2.6 (PR #159) ; audit read-only v2.6 (PR #162) ; principes PR #163 ; décisions Morris D1–D12 (PR #164)

### Limites du cycle

- **Principes candidats uniquement** — aucun principe présenté comme décision validée
- **Modèle multidimensionnel candidate** — non appliqué aux fichiers existants
- Aucune classification individuelle de fichiers
- Aucune matrice garder / mettre à jour / fusionner / archiver / supprimer
- Aucune arborescence physique finale validée
- Ce correctif **finalise** les décisions Morris D1–D12 dans le cadre de principes — sans exécuter cartographie, migration, archivage physique ni suppression
- Aucun déplacement, renommage, migration, archivage ou suppression **exécutés** dans ce cycle
- Aucune automatisation implémentée
- SFIA v3.0 **destinée à l'archive** (D11) — archivage physique dans cycle futur ; MCP, Bridge, Runner et `.sfia` non réactivés

---

## 1. Executive summary

Ce document propose un **cadre candidat de principes** pour standardiser et homogénéiser progressivement le repository SFIA. Il repose sur un **modèle multidimensionnel candidate** : chaque document est décrit par des **axes indépendants** — famille documentaire, cycle de vie, autorité, usage, périmètre, trajectoire/version et emplacement logique — et non par une taxonomie plate ou un statut unique mélangeant des concepts de nature différente.

**Observation (audit PR #162) :** homogénéité globale **moyenne à faible** ; vocabulaire actuel du repository mélange fréquemment famille, statut, trajectoire, usage et emplacement.

**Écart ChatGPT traité (PR #163) :** la version antérieure confondait audit, capitalisation, trajectoire, historique, archive, projet, canonique, opérationnel et baseline dans une même table de « statuts ». Le correctif sépare explicitement ces dimensions.

**Principe candidat central :** homogénéiser **sans uniformiser** — règles communes + profils proportionnés + **dimensions indépendantes** + variantes légitimes explicites.

**Principe candidat structurant (PD15) :** séparer **fonction** (famille), **maturité** (cycle de vie), **référence** (autorité), **utilisation effective** (usage), **domaine** (périmètre), **rattachement versionnel** (trajectoire) et **zone Git** (emplacement logique).

**Recommandation candidate :** valider le modèle multidimensionnel avant cartographie (G3) et toute migration.

**Décisions Morris finales (2026-07-11) :** les **12 décisions D1–D12** sont arbitrées. Ce document traduit le cadre candidate en règles gouvernées — cible de conformité du **repository actuel** incluse (D12) — exécution physique réservée aux cycles futurs de cartographie, revue documentaire et migration par lots.

---

## 2. Finalité

Le chantier SFIA v2.6 vise un repository :

| Qualité | Description candidate |
|---------|----------------------|
| Cohérent | Dimensions documentaires identifiables sans contradiction |
| Standardisé | Conventions partagées là où elles réduisent l'ambiguïté |
| Homogène sans uniformisation aveugle | Profils proportionnés ; pas de bloc métadonnées complet partout |
| Lisible par Morris | Famille, cycle de vie, autorité et trajectoire explicites |
| Exploitable par ChatGPT | Schéma multidimensionnel parsable |
| Exécutable par Cursor | Règles déterministes par dimension |
| Maintenable | Cycle de vie et remplacement tracés |
| Compatible contrôles automatisés futurs | Contrôles par dimension indépendante |
| Gouverné par Git | `main` = source de vérité |

---

## 3. Portée et hors périmètre

### 3.1 Portée

| Élément | Couverture |
|---------|------------|
| Modèle multidimensionnel candidate (7 dimensions) | Oui |
| Taxonomie familles documentaires **primaires** | Oui — candidate, non appliquée |
| Cycle de vie documentaire (états distincts) | Oui — candidate |
| Autorité, usage, périmètre, trajectoire | Oui — tables séparées |
| Emplacement logique | Oui — distinct de famille et statut |
| Profils métadonnées alignés | Oui — candidats |
| Conventions nommage, zones, structures, README, liens | Oui — principes |
| Exceptions, automatisation future, critères acceptation | Oui — candidats |

### 3.2 Hors périmètre explicite

| Hors périmètre | Confirmation |
|----------------|--------------|
| Classification individuelle des 1042 fichiers | **Non** |
| Matrice fichier × dimensions | **Non** |
| Application du modèle aux fichiers existants | **Non** |
| Arborescence physique finale validée | **Non** |
| Migration, archivage effectif, suppression | **Non** |
| G3 / cartographie détaillée | **Non ouverte** |
| Promotion SFIA v2.6 en baseline | **Non** |
| Réactivation v3 / MCP / Bridge / Runner / `.sfia` | **Non** |

---

## 4. Principes directeurs

| # | Principe candidat | Justification | Type |
|---|-------------------|---------------|------|
| PD1 | **Git `main` prime** | Source de vérité | Principe candidat |
| PD2 | **Homogénéiser sans uniformiser** | Profils proportionnés | Principe candidat |
| PD3 | **Profils proportionnés par famille** | Audit §8 | Principe candidat |
| PD4 | **Conservation par défaut** | Cadrage v2.6 P2 | Principe candidat |
| PD5 | **Aucune archive sans reprise** | Cadrage v2.6 P3 | Principe candidat |
| PD6 | **Aucune suppression pendant audit et cartographie** | Cadrage v2.6 P7 | Principe candidat |
| PD7 | **Baseline = propriété trajectoire, pas cycle de vie générique** | Écart PR #163 | Principe candidat |
| PD8 | **Décision structurante = Morris** | Classification, migration, promotion | Principe candidat |
| PD9 | **Application future par lots** | Pas de mega-migration | Principe candidat |
| PD10 | **Règle contrôlable ou justifiée** | Automatisation future | Principe candidat |
| PD11 | **Variante légitime explicite** | Projet vs méthode | Principe candidat |
| PD12 | **Observation ≠ décision** | Distinction stricte | Principe candidat |
| PD13 | **Standard minimal avant exhaustif** | Itération Morris | Recommandation candidate |
| PD14 | **Principes avant classification G3** | Audit Q22.1 | Recommandation candidate |
| PD15 | **Séparer fonction, cycle de vie, autorité, usage, périmètre, trajectoire et emplacement** | Écart ChatGPT PR #163 | **Principe candidat structurant** |

> **Aucune dimension ne remplace une autre.** Un document possède **un état principal de cycle de vie** à un instant donné, mais peut simultanément porter une famille, une autorité, un usage, un périmètre, une trajectoire et un emplacement logique **indépendants**.

---

## 5. Taxonomie candidate — familles documentaires primaires

> **Nature :** familles **primaires** décrivant la **fonction** du document — ne classe aucun fichier existant.

> **Exclus des familles primaires :** trajectoire candidate, historique, archive, statut opérationnel, baseline, périmètre projet, emplacement physique.

| Code | Famille primaire candidate | Fonction principale | Emplacement(s) typique(s) — indicatif |
|------|----------------------------|---------------------|---------------------------------------|
| F01 | Méthode | Doctrine et contenu méthodologique SFIA | `method/sfia-fast-track/core/`, `cycles/` |
| F02 | Gouvernance et règles | Documents normatifs, règles permanentes, operating model, garde-fous, contrats de fonctionnement — portée transverse et durable | `core/`, `prompts/templates/` (contrat) |
| F03 | Cycle et checklist | Exécution et contrôles opérationnels | `checklists/`, `cycles/` |
| F04 | Template | Modèle reproductible | `templates/`, `docs/templates/` |
| F05 | Prompt | Contrat d'interaction ChatGPT/Cursor | `prompts/` |
| F06 | Documentation transverse | Vision, architecture, pratiques ou documentation transverse d'un domaine, produit ou plateforme — contenu explicatif ou de référence, non centré sur le fonctionnement d'un outil SFIA | `docs/` |
| F07 | Pratique spécialisée | Méthode parallèle ou complémentaire | `method/complementary/`, `methods/` |
| F08 | Document projet | Documentation propre à un projet | `projects/{projet}/` |
| F09 | Audit | Inventaire, écarts, read-only | `capitalization/`, `workspace-audit/`, `projects/*/06-audit-rex/` |
| F10 | Capitalisation / REX | Retour d'expérience, synthèse cycle | `capitalization/`, `projects/*/09-capitalization/` |
| F11 | Décision / cadrage | Document qui prépare, trace ou formalise une décision, un gate, une orientation ou un cadrage borné — lié à un chantier, une trajectoire ou un cycle précis | `capitalization/sfia-v2.x/` |
| F12 | Rapport de validation | Post-merge, QA cycle, clôture | `capitalization/` |
| F13 | README / index | Navigation et orientation | README à tous niveaux |
| F14 | Publication / export | Artefact externe ou export | `exports/`, docs Notion |
| F15 | Tooling documentation | Documentation d'installation, configuration, usage, exploitation ou maintenance d'un outil — directement liée à l'outillage SFIA ou technique | `tools/`, `method/.../automation/` |
| F16 | Configuration / artefact technique | CI, Docker, config repo | `.github/`, `docker/` |
| F17 | Code / artefact non documentaire | TS/TSX, binaires — hors standard MD | `projects/*/app/` |

**Règles candidates :**

- **Une seule famille primaire** par document ; sous-famille optionnelle si utile
- **Audit**, **capitalisation** et **décision** sont des familles — pas des statuts de cycle de vie
- **Archive** = état de cycle de vie + emplacement — pas une famille
- **Projet actif vs clôturé** = distinction par **cycle de vie** et **usage**, pas deux familles

**Frontières Morris validées (D2) :**

| Paire | Règle |
|-------|-------|
| **F02 vs F11** | F02 = règle ou gouvernance **durable** ; F11 = arbitrage, cadrage ou décision **contextualisée** ; un document de décision ne devient F02 que s'il est capitalisé comme règle durable dans un cycle distinct |
| **F06 vs F15** | F06 = documentation transverse d'un **sujet ou domaine** ; F15 = documentation orientée **outil et son fonctionnement** |
| **F16 / F17** | Restent dans la taxonomie pour couvrir l'intégralité du repository ; **hors profil Markdown complet** A–F ; contrôles futurs = règles techniques distinctes |

**Garde-fous D2 :** aucune nouvelle famille ; aucune fusion ; aucune suppression ; ambiguïtés futures remontées en cartographie.

**Décision Morris (D2) :** **GO WITH RESERVE** — taxonomie F01–F17 candidate validée avec réserves ci-dessus.

---

## 6. Modèle multidimensionnel candidate

### 6.1 Schéma minimal de description documentaire

Schéma **candidate** — non appliqué aux fichiers dans ce cycle :

| Attribut candidate | Dimension | Obligatoire selon profil |
|--------------------|-----------|--------------------------|
| `primary_family` | D1 — Famille | Oui (sauf F17) |
| `subfamily` | D1 — Famille | Optionnel |
| `lifecycle_status` | D2 — Cycle de vie | Oui si non évident |
| `authority` | D3 — Autorité | Oui profils A, B, D |
| `usage` | D4 — Usage | Prioritaire en cartographie ; optionnel ailleurs |
| `scope` | D5 — Périmètre | Oui |
| `project` | D5 — Périmètre | Si scope = project |
| `phase` | D5 — Périmètre | Si applicable |
| `trajectory` | D6 — Trajectoire | Si applicable |
| `trajectory_role` | D6 — Trajectoire | Si trajectory renseignée |
| `logical_location` | D7 — Emplacement | Recommandé |
| `canonical_replacement` | D2/D3 | Si superseded ou deprecated |
| `decision_authority` | Gouvernance | Morris si structurant |
| `exception` | Exceptions | Si dérogation explicite |

### 6.2 D1 — Famille documentaire primaire

| Élément | Contenu candidate |
|---------|-------------------|
| **Objectif** | Décrire la **fonction principale** du document |
| **Valeurs** | F01–F17 (§5) |
| **Règles** | Une famille primaire ; sous-famille optionnelle |
| **Exemple** | Rapport d'audit v2.6 → famille **Audit** (F09), pas « candidate » |
| **Autorité** | Cycle + Morris pour arbitrages limites familles |
| **Automatisable** | Présence `primary_family` ; cohérence nom suffixe — partiel |
| **Risque ambiguïté** | Confondre famille avec emplacement (`capitalization/` contient Audit, Capitalisation, Décision) |

### 6.3 D2 — Cycle de vie documentaire

| Élément | Contenu candidate |
|---------|-------------------|
| **Objectif** | Décrire **maturité et état** du document |
| **Valeurs** | draft, candidate, validated, deprecated, superseded, archived |
| **Règles** | **Un seul état principal** à un instant ; indépendant autorité et usage ; **`active` retiré** (Morris D3) — l'utilisation effective relève de la dimension **usage** |
| **Exemple** | Rapport audit v2.6 → `lifecycle_status: candidate` |
| **Autorité** | Auteur (draft) ; cycle + Morris (validated+) |
| **Automatisable** | Valeur dans vocabulaire fermé — oui |
| **Risque** | Confondre `candidate` (cycle) avec trajectoire candidate v2.6 |

Voir **§8** pour table complète et transitions.

### 6.4 D3 — Autorité documentaire

| Élément | Contenu candidate |
|---------|-------------------|
| **Objectif** | Décrire le **niveau de référence** normative |
| **Valeurs** | canonical, reference, supporting, informational |
| **Règles** | Indépendante du cycle de vie ; un seul canonical actif par sujet et périmètre ; promotion canonical = GO Morris |
| **Exemple** | Operating model → `authority: canonical` ; rapport audit → `supporting` |
| **Automatisable** | Cohérence canonical + lifecycle — partiel |
| **Risque** | Confondre canonical (autorité) avec baseline (trajectoire) ; conflits de granularité en cartographie |

Voir **§9**. **Décision Morris (D4) :** **GO WITH RESERVE**.

### 6.5 D4 — Usage

| Élément | Contenu candidate |
|---------|-------------------|
| **Objectif** | Décrire si le document est **effectivement utilisé** |
| **Valeurs** | operational, non-operational, unknown |
| **Règles** | **Pas un statut de cycle de vie** ; **pas obligatoire** dans tous les documents ; attribut **prioritaire** des livrables de cartographie ; autorisable lorsque cela apporte une valeur claire |
| **Critères d'évaluation** | Contenu ; références entrantes et sortantes ; utilisation réelle ; trajectoire — **pas le seul emplacement Git** |
| **Exemple** | Plan migration antérieur → `usage: non-operational` ; `lifecycle: archived` possible |
| **Automatisable** | Faible — observationnel ; ne pas conclure operational/non-operational sans preuve suffisante |
| **Risque** | Inférer usage uniquement depuis chemin ; `unknown` persistant non signalé |

Voir **§10**.

### 6.6 D5 — Périmètre

| Élément | Contenu candidate |
|---------|-------------------|
| **Objectif** | Décrire le **domaine d'application** |
| **Valeurs** | repository, method, project, tooling, external-publication |
| **Valeur différée** | `product` — **non utilisable** sans nouvelle décision Morris |
| **Attributs** | project (obligatoire si scope=project), phase (optionnel), domaine (optionnel) |
| **Règles** | **`project` n'est plus un statut documentaire** ; ne pas fusionner repository et method |
| **Exemple** | Doc Chantiers360 → `scope: project`, `project: chantiers360-v2` |
| **Automatisable** | scope=project implique project renseigné — oui |
| **Risque** | Confondre périmètre project avec famille Document projet |

Voir **§11**.

### 6.7 D6 — Trajectoire / version

| Élément | Contenu candidate |
|---------|-------------------|
| **Objectif** | Rattachement **méthodologique ou versionnel** |
| **Valeurs trajectory** | SFIA v1.1, v2.4, v2.5, v2.6, v3.0, N/A |
| **Valeurs trajectory_role** | baseline, candidate, historical, archived, hors-trajectoire |
| **Règles** | **Baseline = propriété trajectoire**, pas cycle de vie ; promotion = GO Morris |
| **Confirmé** | v2.4 baseline ; v2.5 candidate capitalisée ; v2.6 candidate ; **v3.0 archived — hors trajectoire courante** (D11) |
| **Automatisable** | trajectory_role=baseline sans GO — signal L2 |
| **Risque** | Mélanger « document Candidate » et « trajectoire v2.6 candidate » |

Voir **§12**.

### 6.8 D7 — Emplacement logique

| Élément | Contenu candidate |
|---------|-------------------|
| **Objectif** | Zone Git **actuelle ou cible** |
| **Valeurs** | method, prompts, docs, projects, tools, exports, archive |
| **Règles** | Ni famille ni statut ; une zone contient plusieurs familles |
| **Exemple** | `method/.../capitalization/sfia-v2.6/` → logical_location: method ; familles possibles: Audit, Capitalisation, Décision |
| **Automatisable** | Cohérence scope ↔ emplacement — partiel |
| **Risque** | `/archive/` impliquant automatiquement famille Archive |

---

## 7. Gouvernance et source de vérité

| Principe candidat | Définition | Autorité |
|-------------------|------------|----------|
| Git `main` = source de vérité | Faits durables versionnés | Fondamental |
| Description multidimensionnelle | Famille + cycle + autorité + usage + scope + trajectoire + emplacement | Cycles + Morris |
| Autorité canonical | Norme sur un sujet — gate Morris | Morris |
| Trajectoire candidate ≠ baseline | v2.5/v2.6 jusqu'à GO promotion | Morris |
| ChatGPT / Cursor | Structuration / exécution — non canon sans merge | N/A |
| Notion / exports | Couche knowledge — non miroir Git | Morris |
| `.sfia/`, `.tmp-sfia-review/` | Local non canon | Confirmé audit |
| Plans antérieurs | Inputs historiques — pas standard actuel | Observation audit |

---

## 8. Cycle de vie documentaire

> **Uniquement les états de cycle de vie** — pas baseline, canonical, operational, project, historical (déplacés vers autres dimensions).
>
> **Décision Morris (D3) :** cycle de vie à **six états** — `active` retiré pour éviter le doublon avec `usage = operational`.

| État candidate | Définition | Entrée | Sortie | Autorité | Remplaçant requis | Transitions | Réversibilité | Garde-fous |
|----------------|------------|--------|--------|----------|-------------------|-------------|---------------|------------|
| **draft** | Travail non validé | création | candidate, deprecated | Auteur | Non | → candidate | Oui | Pas merge main sans review |
| **candidate** | Proposé, non validé périmètre | draft, cycle | validated, deprecated | Cycle + Morris | Non | → validated | Oui | Distinct trajectoire candidate |
| **validated** | Validé pour son périmètre | candidate, review | deprecated, superseded | Morris | Non | → deprecated, superseded | Oui | **≠ baseline trajectoire** ; peut être operational ou non-operational (usage) |
| **deprecated** | Déconseillé ; remplaçant attendu | validated | superseded, archived | Morris | Oui (annoncé) | → superseded, archived | Oui | Lien remplaçant |
| **superseded** | Remplacé ; successeur nommé | deprecated, validated | archived | Morris | **Oui** | → archived | Oui | `canonical_replacement` |
| **archived** | Conservé, non actif | superseded, deprecated, validated | — | Morris + reprise | Reprise ou justification | — | Oui | Aucune archive sans reprise ; état terminal sauf réouverture Morris |

**Chaîne candidate principale :**

```text
draft → candidate → validated → deprecated | superseded → archived
```

**Précisions candidates :**

- Un doc `validated` peut être `usage: operational` **ou** `usage: non-operational` — dimensions **indépendantes**
- `operational` **n'est pas** un `lifecycle_status` ; `baseline` **n'est pas** un `lifecycle_status`
- Promotion **baseline trajectoire** (v2.6 → baseline) = dimension D6 + GO Morris — **pas** transition automatique de chaque document
- **Suppression** = gate distincte, hors cycle courant, GO Morris explicite
- **`active` (obsolète)** : ancien état retiré par Morris D3 — ne plus utiliser comme lifecycle_status

**Processus opérationnel (review / merge) :**

| Phase | Trace Git | Gate |
|-------|-----------|------|
| Création | Branche + commit | Cycle |
| Review | Handoff si requis | ChatGPT + Morris |
| Validation merge | Merge commit | Morris GO merge |
| Mise à jour | PR | Selon impact |
| Remplacement | PR + superseded | Morris si structurant |
| Archivage lot | `git mv` + archived | Morris + reprise |

---

## 9. Autorité documentaire

> Dimension **D3 autorité** — indépendante du cycle de vie.
>
> **Décision Morris (D4) :** **GO WITH RESERVE** — modèle à **quatre niveaux** validé.

| Niveau candidate | Définition | Usage typique | Compatible lifecycle | Gate Morris |
|------------------|------------|---------------|----------------------|-------------|
| **canonical** | Source normative ou de référence **principale** sur un sujet et un périmètre précis | Rules, operating model | validated | **Oui — promotion obligatoire** |
| **reference** | Source fiable pour comprendre, appliquer ou compléter le canonical | Architecture docs, guides | validated, candidate | Recommandé |
| **supporting** | Document d'appui, preuve, analyse ou support de travail | Audits, rapports, REX | candidate, validated | Non |
| **informational** | Contenu informatif sans autorité normative ou décisionnelle | Notes, brouillons, exports | draft, archived | Non |

**Règles candidates (D4) :**

- **Un seul document canonical actif** par sujet **et** périmètre
- Plusieurs canonical **autorisés** uniquement si périmètres **distincts** et explicitement identifiés
- **Aucune promotion automatique** vers canonical
- Toute promotion vers canonical = **décision Morris**
- Document `superseded` ou `archived` **ne peut pas** rester canonical actif
- Document `candidate` + `canonical` = **anomalie** sans décision Morris explicite
- Document `validated + canonical + usage: operational` = configuration normale core baseline
- Autorité **≠** trajectoire baseline
- Conflits réels d'autorité ou de granularité rencontrés en cartographie = **arbitrage Morris** sans remettre en cause le modèle à quatre niveaux

**Décision Morris (D4) :** **GO WITH RESERVE** — réserve : conflits complexes soumis à Morris en cartographie.

---

## 10. Usage documentaire

> Dimension **D4** — observationnelle, évolutive sans changement de contenu.
>
> **Décision Morris (D5) :** usage conservé comme dimension — **prioritaire en cartographie**, **non obligatoire** dans tous les documents.

| Valeur candidate | Définition | Critère indicatif |
|------------------|------------|-------------------|
| **operational** | Utilisé activement | Références entrantes, cycles actifs, prompts actifs |
| **non-operational** | Conservé, non utilisé | Plans remplacés, archives, trajectoires suspendues |
| **unknown** | Usage non établi — **temporaire** | Legacy, single-file, absence analyse |

**Règles candidates :**

- `operational` **≠** cycle de vie — un doc `candidate` peut être `usage: operational` (ex. prompt en test)
- Un doc `validated` peut être `usage: operational` **ou** `usage: non-operational` (ex. plan historique validé mais remplacé)
- Un doc `validated + usage: operational` et un doc `validated + usage: non-operational` sont tous deux valides
- Vérification par **contenu, références entrantes/sortantes, utilisation réelle et trajectoire** — pas chemin seul
- Tout `unknown` **persistant** doit être signalé comme **réserve** en cartographie
- Ne pas automatiser la conclusion operational / non-operational sans preuve suffisante

**Exemples cohérents :**

| lifecycle_status | usage |
|------------------|-------|
| validated | operational |
| validated | non-operational |
| candidate | unknown |

**Décision Morris (D5) :** **GO WITH RESERVE** — règles ci-dessus intégrées.

---

## 11. Périmètre documentaire

> Dimension **D5** — **`project` n'est plus un statut documentaire**.
>
> **Décision Morris (D6) :** vocabulaire initial minimal — cinq périmètres actifs.

| Périmètre candidate | Définition | Attributs complémentaires |
|-----------------------|------------|---------------------------|
| **repository** | Portée globale du dépôt | — |
| **method** | Contenu propre à la méthode SFIA | trajectoire, domaine (optionnel) |
| **project** | Projet identifié | `project` **obligatoire** ; `phase` optionnel |
| **tooling** | Outillage et infrastructure associée | outil cible |
| **external-publication** | Livrable destiné à une diffusion externe | Notion, export |

**Valeur différée (extension future possible) :**

| Valeur | Statut |
|--------|--------|
| **product** | **Différée** — non utilisable sans nouvelle décision Morris |

**Règles candidates :**

- `scope: project` → attribut `project` **obligatoire**
- `phase` et `domaine` restent **optionnels** selon le besoin — ne pas les rendre obligatoires
- Ne pas fusionner `repository` et `method`
- Famille F08 Document projet ↔ scope project **souvent** corrélés, pas automatiquement
- Code F17 : scope project typique ; famille F17, pas F08
- Ne pas élargir le vocabulaire sans cas réel démontré

**Décision Morris (D6) :** **GO WITH RESERVE** — cinq périmètres actifs ; `product` différé.

---

## 12. Trajectoire, version et baseline

> Dimension **D6 trajectoire** — distincte du cycle de vie et de l'autorité.

| Trajectory candidate | trajectory_role candidate | Statut chantier |
|---------------------|---------------------------|-----------------|
| SFIA v1.1 | historical | Héritage foundation |
| SFIA v2.4 | **baseline** | **Baseline opérationnelle** |
| SFIA v2.5 | **candidate** (capitalisée) | Trajectoire candidate capitalisée |
| SFIA v2.6 | **candidate** | Trajectoire candidate — chantier en cours |
| SFIA v3.0 | **archived** | **Hors trajectoire — destinée à l'archive** (D11) |
| N/A | — | Docs sans rattachement trajectoire |

**Règles candidates :**

- **baseline** = propriété `trajectory_role` de la trajectoire v2.4 — **pas** un `lifecycle_status`
- Promotion v2.6 → baseline trajectoire = **GO Morris** + capitalisation — pas automatique à la merge PR
- Document sur trajectoire v2.6 peut avoir `lifecycle_status: candidate` **et** `trajectory: SFIA v2.6` **et** `trajectory_role: candidate` — dimensions distinctes

**Décision Morris (D11) — SFIA v3.0 :**

- v3.0 **n'est plus** une trajectoire candidate ni un sujet actif
- Documents et artefacts v3.0 = qualifiés **archived** ; `trajectory_role: archived`
- **Aucune évolution** fonctionnelle ou méthodologique v3.0
- **Aucune conservation ambiguë** parmi les trajectoires actives
- MCP, Bridge, Runner et `.sfia` associés à v3.0 = **non réactivés**
- Éléments utiles = regroupés en **zone d'archive gouvernée** (cycle futur)
- Éléments sans valeur historique = proposés à **suppression** après vérification dépendances et GO Morris
- **Archivage physique** = cycle futur distinct — **non exécuté** dans ce document
- Réouverture v3.0 = **nouvelle décision Morris** explicite + nouveau cadrage trajectoire

**Décision Morris (D7) :** **GO** — trajectoires v2.4 baseline, v2.5/v2.6 candidate ; v3.0 archived (D11).

---

## 13. Profils de métadonnées par famille

> **Décision Morris (D8) :** principe des profils proportionnés A–F **validé comme cadre candidate** — listes détaillées de champs **candidates et ajustables** lors de la cartographie progressive.
>
> **Garde-fous :** interdire l'application d'un profil complet à tous les documents ; profil F = mode allégé légitime ; profil alternatif autorisé si justifié ; **usage non obligatoire** dans tous les profils ; **F16/F17 hors profils Markdown complets**.

### A. Profil Core / Gouvernance (F01, F02)

| Champ candidate | Dimension | Obligatoire — candidate |
|-----------------|-----------|-------------------------|
| family | D1 | Oui |
| lifecycle_status | D2 | Oui |
| authority | D3 | Oui |
| usage | D4 | Non |
| scope | D5 | Oui |
| trajectory | D6 | Si applicable |
| trajectory_role | D6 | Si applicable |
| version | D6 (doc) | Si applicable |
| decision_authority | Gouvernance | Si applicable |
| source_of_truth | Gouvernance | Si applicable |
| updated_at | — | Optionnel |

### B. Profil Capitalisation / Audit / Décision / Validation (F09–F12)

| Champ candidate | Dimension | Obligatoire — candidate |
|-----------------|-----------|-------------------------|
| family | D1 | Oui |
| lifecycle_status | D2 | Oui |
| authority | D3 | Oui |
| scope | D5 | Oui |
| trajectory | D6 | Si applicable |
| trajectory_role | D6 | Si applicable |
| cycle, profil SFIA, repository | Contexte | Si applicable |
| base Git (si pertinent) | Trace | Si applicable |
| decision_authority | Morris | Si applicable |
| réserves, verdict | Si applicable | Si applicable |

### C. Profil Projet (F08)

| Champ candidate | Dimension | Obligatoire — candidate |
|-----------------|-----------|-------------------------|
| family | D1 | Oui |
| lifecycle_status | D2 | Oui |
| usage | D4 | Non |
| scope = project | D5 | Oui |
| project, phase | D5 | project obligatoire |
| trajectory | D6 | Si applicable |
| décision de référence | Optionnel | Optionnel |

### D. Profil Prompt / Template (F04, F05)

| Champ candidate | Dimension | Obligatoire — candidate |
|-----------------|-----------|-------------------------|
| family | D1 | Oui |
| lifecycle_status | D2 | Oui |
| authority | D3 | Oui |
| usage | D4 | Non |
| scope | D5 | Oui |
| audience, objective | Contexte | Optionnel |
| source / template parent | Lien | Optionnel |
| trajectory | D6 | Si applicable |

### E. Profil README / Index (F13)

| Champ candidate | Dimension | Obligatoire — candidate |
|-----------------|-----------|-------------------------|
| family = README / index | D1 | Oui |
| lifecycle_status | D2 | Oui |
| authority | D3 | Oui |
| scope | D5 | Oui |
| logical_location | D7 | Recommandé |
| sources canoniques, contenu attendu | Navigation | Optionnel |

### F. Profil Léger — mode allégé légitime

| Champ candidate | Dimension | Obligatoire — candidate |
|-----------------|-----------|-------------------------|
| title | — | Oui |
| family ou rôle identifiable | D1 | Oui |
| lifecycle_status | D2 | Si non évident |
| scope identifiable | D5 | Si identifiable |

**Principe candidat :** absence de profil complet ≠ non-conformité si famille Léger et dimensions déductibles sans contradiction. Les champs précis seront **consolidés lors de la cartographie progressive par lots**.

**Affinage gouverné (D2/D8) :** F01–F17 et profils A–F = cadre candidate applicable ; cartographie peut révéler ambiguïtés ; **aucune modification automatique** du standard ; toute proposition d'ajustement tracée ; tout changement de famille, frontière ou profil = **décision dédiée Morris** — ne bloque ni merge PR #164 ni cartographie future.

**Décision Morris (D8) :** **GO WITH RESERVE** — principe A–F validé ; détails des champs = cartographie gouvernée.

---

## 14. Conventions de nommage et mise en conformité

> **Décision Morris (D12) :** **GO WITH RESERVE** — le standard vise la **cohérence du repository actuel**, pas uniquement celle des futurs documents. **Aucune tolérance finale** du legacy naming comme état cible.

| Sujet | Principe candidate | Exécution |
|-------|-------------------|-----------|
| Casse | **kebab-case** pour fichiers MD et dossiers | Tous fichiers — cycles futurs |
| Langue | **EN** nom de fichier par défaut ; titre interne **FR** autorisé | Tous fichiers utiles |
| Explicite | Suffixes `-audit`, `-framing`, `-rex`, `-report` | Selon famille |
| Dates | Préfixe `YYYY-MM-DD` pour audits, décisions, cadrages événementiels, capitalisations, REX, rapports de validation historisés | Pas de date obligatoire sur core stables |
| Préfixe `sfia-` | Uniquement lorsqu'il apporte une **information de contexte utile** | Pas de préfixe systématique |
| Versions | Trajectoire dans **chemin** (`sfia-v2.6/`) | v2.4 implicite core |
| README | `README.md` exact | — |

**Cible de conformité — repository actuel (D12) :**

- **Tous les fichiers actuels** entrent dans le périmètre de la future revue documentaire
- Tout fichier **utile** doit être conforme aux conventions de nommage **et** d'emplacement validées
- Tout fichier historique utile = **archivé** dans une zone cohérente
- Tout fichier remplacé = marqué **superseded** puis traité selon trajectoire de migration
- Tout fichier **inutile** = proposé à **suppression** avec vérification dépendances et GO Morris
- **Aucun fichier non conforme** ne doit être conservé uniquement parce qu'il est ancien
- Tout renommage ou déplacement = mise à jour des **liens, README, index, références, prompts et dépendances**
- Toute migration = **par lots contrôlés** — **aucune migration massive non gouvernée**
- **Aucune exécution physique** dans ce document ou cette PR

**Exemples corrects :**

- `2026-07-11-sfia-v2.6-repository-standard-decisions.md`
- `sfia-cycle-execution-template.md`
- `architecture-principles.md`

**Réserve D12 :** mode d'exécution (lots, ordre, dépendances) — **pas** la cible de conformité ni une tolérance durable des incohérences connues.

---

## 15. Responsabilités logiques des grandes zones

> **Emplacement logique (D7)** — une zone **n'est pas une famille**.
>
> **Décision Morris (D10) :** **GO** — frontière `docs/` vs `method/sfia-fast-track/documentation/` **validée**.

### Règle D10 — frontière fonctionnelle

**`method/sfia-fast-track/documentation/`** contient les documents qui décrivent, gouvernent, auditent, font évoluer ou capitalisent **SFIA lui-même** :

- méthode SFIA ; gouvernance SFIA ; trajectoires SFIA ; décisions méthode
- audits du repository ou de la méthode ; capitalisations SFIA
- standards et règles documentaires SFIA ; rapports de cycles méthode

**`docs/`** contient les documents qui décrivent un **système, produit, projet, outil, plateforme ou pratique transverse** qui n'est **pas** la méthode SFIA elle-même :

- documentation technique, produit, plateforme, architecture transverse
- documentation utilisateur ; pratiques non spécifiques à la gouvernance SFIA

**Règle d'arbitrage (D10) :**

| Critère | Emplacement cible |
|---------|-------------------|
| Document explique ou gouverne **SFIA lui-même** | `method/sfia-fast-track/documentation/` |
| Document décrit système, produit, projet, plateforme ou pratique | `docs/` ou périmètre projet approprié |
| Emplacement historique | **Ne prime jamais** sur la fonction réelle |
| Cas actuels non conformes | Identifiés et traités en **revue documentaire** et migration — **aucun cas litigieux connu conservé** à la clôture mise en conformité |

| Zone | Responsabilité logique | Familles possibles | Précision |
|------|------------------------|-------------------|-----------|
| `method/sfia-fast-track/` | Méthode et gouvernance SFIA | F01–F03, F11, F13 | — |
| `method/.../documentation/` | **Documentation SFIA** (D10) | F01–F12 selon fonction | Règle D10 |
| `method/.../capitalization/` | Capitalisation trajectoire | F09–F12 | **Plusieurs familles** |
| `method/.../workspace-audit/` | Audits/plans **historiques** | F09, F11 | lifecycle souvent archived |
| `prompts/` | Contrats exécution | F05, F04 | — |
| `docs/` | **Transverse hors méthode SFIA** (D10) | F06, F07 | Règle D10 |
| `projects/{projet}/` | Périmètre projet | F08, F09, F10, F17 | scope project |
| `*/archive/` | Emplacement archived | Toute famille | lifecycle `archived` typique |
| `tools/` | Outillage | F15, F16 | — |

**Règles candidates :**

- `/archive/` → emplacement associé à `lifecycle_status: archived` — pas une famille
- `projects/` → scope project fréquent ; code = F17
- `capitalization/` → Audit + Capitalisation + Décision coexistent
- **Application physique** des règles D10 = cycles futurs — **aucun déplacement** dans ce cycle

**Décision Morris (D10) :** **GO** — règle décidée ; exécution = cartographie et migration par lots.

---

## 16. Structures documentaires candidates

| Famille | Sections obligatoires candidates | Verdict | Décisions |
|---------|----------------------------------|---------|-----------|
| Gouvernance (F02) | Objectif, principes, garde-fous | Non | Non |
| Méthode (F01) | Objectif, sections numérotées | Non | Morris implicite |
| Audit (F09) | Executive summary, méthode, limites, gate | Oui | Morris listées |
| Décision (F11) | Contexte, non-objectifs, gates | Oui | Morris |
| README (F13) | Rôle, index, canoniques | Non | Non |

**Principe candidat :** colonne « Type » (observation / principe / recommandation / décision requise) dans capitalisation et audits.

---

## 17. README, index et navigation

| Sujet | Principe candidat |
|-------|-------------------|
| README requis | Zone ≥ 3 fichiers ou rôle non évident ; racines method, prompts, docs, chaque projet |
| Rôle | Orientation ; dimensions clés si zone mixte (familles multiples) |
| Index concurrents | Un index canonique ; plans antérieurs = historique |
| Sources canoniques | Core docs — pas handoff ni `.tmp-*` |
| Zone fichier unique | README parent suffit |

---

## 18. Références et liens

| Sujet | Principe candidat |
|-------|-------------------|
| Liens relatifs | Préférés ; vérification existence — L1 |
| Document superseded | Lien `canonical_replacement` |
| Archive | Lien explicite ; pas canon |
| Liens cassés (~23 audit) | Correction en **lot** — non ce cycle |

---

## 19. Gouvernance des exceptions

Une exception peut cibler **une dimension spécifique** :

| Dimension | Exemple exception |
|-----------|-------------------|
| Nommage | Non-conformité identifiée en revue | Exception temporaire en cartographie uniquement |
| Métadonnées | Profil Léger accepté |
| Emplacement | F08 temporairement hors projects/ |
| lifecycle_status | validated avec usage operational ou non-operational |
| authority | reference traité comme canonical localement |
| usage | unknown prolongé |
| trajectory | v3 visible sans réactivation |

**Règles :** justification, portée, durée, Morris, trace Git, réévaluation — **pas de contournement gates Morris**.

---

## 20. Contrôles automatisables futurs

> **Aucune implémentation** — alignés sur dimensions. Voir **Annexe C**.

| Niveau | Contrôles candidates |
|--------|---------------------|
| L1 | primary_family présente ; lifecycle valide ; liens ; kebab-case |
| L2 | authority compatible lifecycle ; trajectory_role cohérent ; scope project + project ; profil cohérent famille |
| L3 | classification ; fusion ; promotion baseline ; canonical sans Morris |
| Jamais auto | déplacement, archivage, statut structurant, suppression |

**Principe candidat :** aucune correction automatique structurante.

---

## 21. Critères d'acceptation du futur standard

| Critère candidate | Mesure |
|-------------------|--------|
| Dimensions indépendantes | Aucune dimension ne remplace une autre |
| Description sans contradiction | Schéma §6.1 applicable |
| Cartographie sans classement artificiel | Famille ≠ emplacement ≠ lifecycle |
| Contrôles déterministes | Règles par dimension — Annexe C |
| Décisions Morris identifiées | D1–D12 |
| Profils proportionnés | A–F + Léger |
| Migration par lots | Réversible |
| Variantes légitimes | Annexe E |

---

## 22. Statut des décisions Morris D1–D12

| # | Sujet | Décision Morris |
|---|-------|-----------------|
| D1 | Adoption modèle multidimensionnel | **GO** |
| D2 | Validation familles primaires F01–F17 | **GO WITH RESERVE** |
| D3 | Cycle de vie (six états) | **ADJUSTMENT REQUIRED — ALIGNED** |
| D4 | Validation niveaux autorité | **GO WITH RESERVE** |
| D5 | Validation modèle usage | **GO WITH RESERVE** |
| D6 | Validation périmètres | **GO WITH RESERVE** |
| D7 | Validation trajectoire / baseline | **GO** |
| D8 | Validation profils métadonnées | **GO WITH RESERVE** |
| D9 | Principes avant cartographie G3 | **GO** |
| D10 | Arbitrage docs/ vs method/documentation | **GO** |
| D11 | Traitement SFIA v3.0 | **GO** — archived cible |
| D12 | Politique nommage et conformité repository | **GO WITH RESERVE** |

> **Aucune décision D1–D12 active en DEFERRED.** Réserves finales légitimes : affinage gouverné familles/profils ; conflits autorité en cartographie ; mise en conformité physique par lots ; suppressions sous GO Morris.

---

## 23. Impacts sur les étapes futures

| Étape | Impact |
|-------|--------|
| Cartographie | Matrice descriptive fichier × dimensions — **sans G3** |
| Classification G3 | Après validation modèle Morris |
| Arborescence cible | Compare logical_location vs rôle réel |
| Migration par lots | Mise à jour métadonnées par dimension |
| Automatisation | Contrôles Annexe C |

---

## 24. Challenge obligatoire

| Question | Réponse |
|----------|---------|
| Modèle multidimensionnel utile ? | **Oui** — corrige mélange PR #163 ; prépare cartographie |
| Plus complexe ? | **Légèrement** — mais moins ambigu qu'un statut unique |
| Métadonnées proportionnées ? | **Oui** — profils par famille |
| Dimensions distinguées ? | **Oui** — PD15, §6 |
| Contrôles déterministes ? | **Oui** — par dimension |
| Application progressive ? | **Oui** — lots |
| Principes avant cartographie ? | **Recommandation — oui (D9)** |

---

## 25. Risques et réserves

| Risque | Mitigation |
|--------|------------|
| Complexité perçue | Schéma §6.1 ; exemples Annexe D |
| Sur-interprétation validé | Candidate ; gates |
| Confusion candidate lifecycle / trajectory | Libellés explicites §6.3, §12 |
| Exemples pris pour classification | Marqués illustratifs |

**Réserves :** modèle candidate ; aucun fichier classé ; audit @ 30fb8e7.

---

## 26. Conclusion

| Élément | Statut |
|---------|--------|
| Modèle multidimensionnel candidate | **Oui** — §6 |
| Familles primaires | **Oui** — §5, F01–F17 |
| Cycle de vie séparé (6 états) | **Oui** — §8 ; `active` retiré (D3) |
| Autorité, usage, périmètre, trajectoire séparés | **Oui** — §9–12 |
| Profils alignés | **Oui** — §13 |
| Classification fichiers | **Non** |
| Standard validé Morris | **Oui — D1–D12 entièrement arbitrées** ; exécution physique = cycles futurs |

---

## 27. Gate Morris suivant

| Option | Description |
|--------|-------------|
| **A** | Corrections du modèle candidate |
| **B** | Validation partielle ou complète (sans application) |
| **C** | Mise en conformité repository — cartographie et migration par lots (**après merge si GO**) |
| **D** | Cartographie étape 2 — **après validation si GO** |
| **E** | NO-GO temporaire |

**Non automatique :** merge PR #163, G3, migration, promotion v2.6.

---

## Annexe A — Famille primaire × profil documentaire recommandé

| Famille | Profil principal | Profil alternatif |
|---------|------------------|-------------------|
| F01 Méthode | A — Core/Gouvernance | |
| F02 Gouvernance | A | |
| F03 Cycle / checklist | F — Léger | A si structurant |
| F04 Template | D | |
| F05 Prompt | D | F — Léger |
| F06 Doc transverse | A ou F | E |
| F07 Pratique spécialisée | F | A si normatif |
| F08 Document projet | C — Projet | |
| F09 Audit | B — Capitalisation | |
| F10 Capitalisation / REX | B | |
| F11 Décision / cadrage | B | |
| F12 Rapport validation | B | |
| F13 README / index | E | |
| F14 Publication / export | F | |
| F15 Tooling doc | F | E |
| F16 Config technique | (hors profil MD complet) | — |
| F17 Code / artefact | (hors profil MD complet) | — |

> F16 et F17 : familles techniques — **ne pas** leur appliquer artificiellement les profils Markdown A–F complets.

---

## Annexe B — Cycle de vie × transition × autorité × garde-fou

> **Six états** — Morris D3 : `active` retiré.

| lifecycle_status | Entrée | Sortie | Autorité transition | Gate | Garde-fou |
|------------------|--------|--------|---------------------|------|-----------|
| draft | création | candidate | Auteur | Review | — |
| candidate | draft | validated, deprecated | Cycle + Morris | Review + merge | ≠ trajectory_role seul |
| validated | candidate | deprecated, superseded | Morris | Validation | ≠ baseline auto ; usage indépendant |
| deprecated | validated | superseded, archived | Morris | Remplaçant | Lien requis |
| superseded | deprecated, validated | archived | Morris | Successeur nommé | canonical_replacement |
| archived | superseded, deprecated, validated | — | Morris + reprise | Archivage lot | Reprise obligatoire ; terminal |

> **Autorité documentaire (D3)** et **trajectory_role (D6)** ne figurent pas dans cette matrice — dimensions parallèles.

---

## Annexe C — Dimension × valeurs × automatisabilité × arbitrage humain

| Dimension | Contrôle candidate | Automatisable | Niveau | Humain requis |
|-----------|-------------------|---------------|--------|---------------|
| D1 Famille | primary_family présente | Partiel | L1–L2 | Arbitrage limites familles |
| D2 Cycle | lifecycle dans vocabulaire fermé | Oui | L1 | validated, archived |
| D3 Autorité | canonical + gate Morris | Partiel | L2 | canonical, promotion |
| D4 Usage | Cohérence refs vs usage | Faible | L3 | unknown → operational |
| D5 Périmètre | scope=project → project | Oui | L2 | scope arbitrage |
| D6 Trajectoire | trajectory_role cohérent | Partiel | L2 | baseline promotion |
| D7 Emplacement | logical_location vs scope | Partiel | L2 | déplacement futur |
| Transversal | Liens internes valides | Oui | L1 | Lot migration |
| Transversal | Profil cohérent famille | Partiel | L2 | Affinage gouverné D8 |
| Transversal | Classification G3 | Non | L3 | **Morris G3** |
| Transversal | Fusion sémantique | Non | L3 | **Morris** |

---

## Annexe D — Exemples multidimensionnels fictifs

> **Exemples illustratifs — non constitutifs d'une classification validée.**

### Exemple 1 — Operating model (fictif)

| Attribut | Valeur illustrative |
|----------|---------------------|
| primary_family | Gouvernance et règles (F02) |
| lifecycle_status | validated |
| authority | canonical |
| usage | operational |
| scope | method |
| trajectory | SFIA v2.4 |
| trajectory_role | baseline |
| logical_location | method/sfia-fast-track/core/ |

### Exemple 2 — Rapport audit v2.6 (fictif)

| Attribut | Valeur illustrative |
|----------|---------------------|
| primary_family | Audit (F09) |
| lifecycle_status | candidate |
| authority | supporting |
| usage | operational |
| scope | method |
| trajectory | SFIA v2.6 |
| trajectory_role | candidate |
| logical_location | method/.../capitalization/sfia-v2.6/ |
| decision_authority | Morris |

### Exemple 3 — Prompt template cycle (fictif)

| Attribut | Valeur illustrative |
|----------|---------------------|
| primary_family | Prompt (F05) |
| lifecycle_status | validated |
| authority | reference |
| usage | operational |
| scope | repository |
| trajectory | SFIA v2.4 |
| trajectory_role | baseline |
| logical_location | prompts/templates/ |

### Exemple 4 — Document projet phase delivery (fictif)

| Attribut | Valeur illustrative |
|----------|---------------------|
| primary_family | Document projet (F08) |
| lifecycle_status | validated |
| authority | supporting |
| usage | operational |
| scope | project |
| project | chantiers360-v2 |
| phase | 07-delivery |
| trajectory | N/A |
| logical_location | projects/chantiers360-v2/07-delivery/ |

### Exemple 5 — Plan migration antérieur (fictif)

| Attribut | Valeur illustrative |
|----------|---------------------|
| primary_family | Audit (F09) ou Décision (F11) |
| lifecycle_status | archived |
| authority | informational |
| usage | non-operational |
| scope | repository |
| trajectory | N/A |
| trajectory_role | historical |
| logical_location | method/.../workspace-audit/ |

---

## Annexe E — Principes communs vs variantes légitimes

| Principe commun | Variante légitime | Écart injustifié |
|-----------------|-------------------|-----------------|
| 7 dimensions indépendantes | Profil Léger réduit | Statut unique fourre-tout |
| primary_family obligatoire | F17 hors MD | Absence famille capitalisation récente |
| lifecycle un état principal | validated + usage operational ou non-operational | Mélange baseline dans lifecycle |
| authority séparée | reference locale | canonical implicite |
| scope project + project | Code F17 scope project | project comme statut |
| trajectory_role baseline v2.4 | v2.6 candidate | Promotion silencieuse |
| logical_location ≠ famille | capitalization multi-familles | Archive comme famille |
| Conservation par défaut | archived avec reprise | Suppression sans GO |

---

## Annexe F — Git Review Index

| Élément | Valeur |
|---------|--------|
| Repository | mcleland147/sfia-workspace |
| Branche projet | method/sfia-v2.6-repository-standard-decisions |
| Base `main` | `688832d90e613959fbfdf53530f86aea36e23538` |
| HEAD initial (avant correctif) | `5d4aa0a555bd8bf3a649b4113e80ff5d5c14bcf5` |
| Cycle | Validation décisionnelle finale — clôture D1–D12 |
| Commit attendu | `docs: finalize Morris repository standard decisions` |

---

*Document candidate SFIA v2.6 — D1–D12 entièrement arbitrées — cible conformité repository actuel — aucune exécution physique sans GO explicite.*
```

## Contenu complet — décisions
```markdown
# SFIA v2.6 — Repository Standard Decisions

*Dossier de décision — arbitrages Morris D1–D12 du cadre candidat des principes repository*

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md`
**Date et heure :** 2026-07-11 14:19 Europe/Paris
**Statut :** **Candidate** — **D1–D12 entièrement arbitrées** — dossier prêt pour merge
**Cycle projet :** Validation décisionnelle finale — clôture des arbitrages D1–D12
**Profil SFIA :** **Critical**
**Typologie v2.4 :** DOC
**Repository :** mcleland147/sfia-workspace
**Branche :** method/sfia-v2.6-repository-standard-decisions
**Base Git :** `main` @ `688832d90e613959fbfdf53530f86aea36e23538`
**Autorité de décision :** Morris (L0)
**Date/heure décision Morris :** 2026-07-11 12:45 Europe/Paris
**Date/heure décision Morris finale :** 2026-07-11 14:19 Europe/Paris
**Baseline opérationnelle :** SFIA v2.4
**Trajectoires :** v2.5 candidate capitalisée ; v2.6 candidate
**Inputs structurants :** principes repository v2.6 (PR #163) ; dossier arbitrage initial (PR #164)

### Justification Critical

- Décisions repository-wide **finalisées par Morris** — D1–D12 entièrement arbitrées
- Modification cadre autorité (D4), emplacements (D10), archivage v3 (D11), conformité repository (D12)
- Impact futur sur cartographie, archivage, renommage et migration
- Traçabilité complète obligatoire

### Limites du cycle

- **Décisions D1–D12 finalisées** — règles gouvernant futures cartographie, revue documentaire et migration
- **Aucune exécution physique** : pas de déplacement, renommage, archivage v3, suppression ni migration
- Aucune cartographie, classification G3 ou migration ouverte
- **POC non retenu par Morris** — trajectoire = cartographie progressive par lots (futur GO distinct)
- SFIA v2.6 reste **candidate**

---

## 1. Executive summary

Morris a arbitré explicitement les **12 décisions D1–D12**. Ce dossier enregistre la **matrice finale**, les réserves, la trajectoire aval et les règles gouvernant la future mise en conformité du repository — **sans exécution physique** dans ce cycle.

**Matrice Morris finale :**

| ID | Décision Morris |
|----|-----------------|
| D1 | **GO** |
| D2 | **GO WITH RESERVE** |
| D3 | **ADJUSTMENT REQUIRED — ALIGNED** |
| D4 | **GO WITH RESERVE** |
| D5 | **GO WITH RESERVE** |
| D6 | **GO WITH RESERVE** |
| D7 | **GO** |
| D8 | **GO WITH RESERVE** |
| D9 | **GO** |
| D10 | **GO** |
| D11 | **GO** |
| D12 | **GO WITH RESERVE** |

**Points structurants :**

- **D1–D12 entièrement arbitrées** — **aucune décision active en DEFERRED**
- **D4** : modèle autorité à quatre niveaux validé avec réserve cartographie
- **D10** : frontière `docs/` vs `method/.../documentation/` **validée**
- **D11** : SFIA v3.0 **destinée à l'archive** — archivage physique = cycle futur
- **D12** : **conformité du repository actuel** comme cible — **aucune tolérance finale** du legacy naming
- **POC read-only : NON RETENU PAR MORRIS**
- **Trajectoire :** décisions → merge → cartographie / revue documentaire / migration par lots

**Gate actuel :** D1–D12 arbitrées ; principes alignés — **prêt pour merge** (GO merge distinct).
**Gate suivant :** GO Morris pour ouvrir un **premier lot de cartographie read-only borné**.

---

## 2. Objet du cycle

| Objectif | Description |
|----------|-------------|
| Inscrire | Décisions Morris D1–D12 avec réserves et effets |
| Tracer | Registre complet §17 ; alignement principes confirmé |
| Orienter | Trajectoire cartographie par lots sans POC |
| Borner | Aucune application, cartographie ou G3 dans ce cycle |

---

## 3. Contexte et sources

| Source | Rôle |
|--------|------|
| PR #163 — principes | Modèle multidimensionnel candidate |
| PR #164 — dossier initial | Analyse et recommandations (registre était NON DÉCIDÉ) |
| Handoff @ `21a2364` | Revue dossier arbitrage |
| Audit PR #162 | Contexte homogénéité |

**État :** principes candidate alignés Morris D3,D2,D5,D6,D8,D12 ; **D1–D12 arbitrées par Morris**.

---

## 4. Portée et hors périmètre

### 4.1 Portée

- Inscription décisions Morris D1–D12
- Registre, matrices, gates, trajectoire cartographie par lots
- **Alignement document de principes** sur D3, D2, D5, D6, D8, D12

### 4.2 Hors périmètre

| Exclu | Confirmation |
|-------|--------------|
| Modification document principes | **Oui** — finalisation D4, D10, D11, D12 |
| Application modèle aux fichiers | **Non** |
| Cartographie / lots cartographie | **Non ouverte** |
| POC | **Non retenu** |
| G3 / classification / migration | **Non** |
| Promotion v2.6 baseline | **Non** |

---

## 5. Méthode d'analyse décisionnelle

1. Phase initiale (commit `8bf811a`) : Cursor analyse et recommande — registre NON DÉCIDÉ
2. Phase présente : Morris arbitre — décisions inscrites avec date, autorité, réserves
3. Recommandations historiques conservées en contexte — **supplantées** par décisions Morris
4. Merge PR #164 **intègre le dossier** — n'ouvre pas cartographie ni G3 automatiquement

---

## 6. Vue d'ensemble D1–D12 — décisions Morris

| ID | Intitulé | Décision Morris | Bloque carto. lot 1 | Bloque G3 | Différable |
|----|----------|-----------------|---------------------|-----------|------------|
| D1 | Modèle multidimensionnel | **GO** | Non (prérequis validé) | Oui si absent | Non |
| D2 | Familles F01–F17 | **GO WITH RESERVE** | Non | Partiel | Partiel |
| D3 | Cycle de vie | **ADJUSTMENT REQUIRED — ALIGNED** | Non | Non | Non |
| D4 | Autorité | **GO WITH RESERVE** | Non | Partiel | Partiel |
| D5 | Usage | **GO WITH RESERVE** | Non | Partiel | Partiel |
| D6 | Périmètres | **GO WITH RESERVE** | Non | Partiel | Partiel |
| D7 | Trajectoire / baseline | **GO** | Non | Oui si absent | Non |
| D8 | Profils métadonnées | **GO WITH RESERVE** | Non | Oui (détails) | Partiel |
| D9 | Principes avant cartographie | **GO** | — | Oui | Non |
| D10 | docs/ vs method/documentation | **GO** | Non | Non | Non |
| D11 | SFIA v3.0 archive | **GO** | Non | Non | Non |
| D12 | Nommage | **GO WITH RESERVE** | Non | Non | Oui |

---

## 7. Lot A — Décisions fondation (Morris)

### D1 — Adoption du modèle multidimensionnel

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Décision validée** | Modèle multidimensionnel adopté comme **cadre candidate SFIA v2.6** |
| **Dimensions validées** | Famille ; cycle de vie ; autorité ; usage ; périmètre ; trajectoire/version ; emplacement logique |
| **Effet immédiat** | Référence pour préparer la future cartographie — **non appliqué** aux fichiers |
| **Effet futur** | Base descriptive cartographie par lots |
| **Réserves** | Aucune |
| **Gate suivant** | Intégration dossier ; cartographie (GO distinct) |
| **Contexte historique** | Recommandation candidate : ADOPT AS CANDIDATE FRAMEWORK — **confirmée par Morris** |

---

### D2 — Familles primaires F01–F17

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO WITH RESERVE** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Décision validée** | F01–F17 adoptées comme **taxonomie candidate** |
| **Réserves obligatoires** | Clarifier frontière **F02 vs F11** ; **F06 vs F15** ; F16/F17 = familles techniques hors profil MD complet ; pas de familles supplémentaires sans besoin démontré ; ajustement ultérieur autorisé depuis cartographie réelle |
| **Alignement principes** | **Réalisé** — §5 document principes : frontières F02/F11, F06/F15, F16/F17 |
| **Effet** | Taxonomie exploitable cartographie — **aucune classification actuelle validée** |
| **Gate suivant** | Cartographie lot documentaire |

---

### D3 — Cycle de vie documentaire

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **ADJUSTMENT REQUIRED** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Ajustement cible décidé** | **Retirer `active` du cycle de vie** — éviter doublon avec `usage = operational` |
| **Cycle de vie candidat ajusté (Morris)** | draft ; candidate ; validated ; deprecated ; superseded ; archived |
| **Usage séparé** | operational ; non-operational ; unknown |
| **Règles validées** | `validated + operational` possible ; `validated + non-operational` possible ; usage indépendant du cycle de vie ; **`active` ne doit plus figurer comme lifecycle_status** |
| **Alignement principes** | **Réalisé** — §8 document principes : six états, transitions, `active` retiré, usage séparé |
| **Effet immédiat** | Cadre décisionnel cohérent pour cartographie |
| **Gate suivant** | Cartographie (GO distinct) |

**Contexte historique :** Options A/B/C analysées — Morris choisit **équivalent Option B** (retrait `active`).

---

### D4 — Niveaux d'autorité documentaire

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO WITH RESERVE** |
| **Date / autorité** | 2026-07-11 14:19 Europe/Paris — Morris |
| **Décision validée** | Modèle à **quatre niveaux** : canonical, reference, supporting, informational |
| **Définitions** | **canonical** = source normative/référence principale sur sujet et périmètre précis ; **reference** = source fiable pour comprendre/appliquer/compléter le canonical ; **supporting** = appui, preuve, analyse ; **informational** = informatif sans autorité normative |
| **Règles** | Un seul canonical actif par sujet et périmètre ; plusieurs canonical si périmètres distincts explicites ; aucune promotion auto ; promotion canonical = Morris ; superseded/archived ≠ canonical actif |
| **Réserve** | Conflits réels d'autorité ou granularité remontés en cartographie — arbitrage Morris sans remettre en cause le modèle |
| **Alignement principes** | **Réalisé** — §9 document principes |
| **Effet** | Modèle autorité opérationnel pour cartographie et revue documentaire |
| **Gate suivant** | Cartographie ; conflits = Morris |

---

### D5 — Modèle d'usage

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO WITH RESERVE** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Décision validée** | Usage conservé comme **dimension de cartographie** |
| **Réserves** | Pas métadonnée obligatoire partout ; usage d'abord dans livrables cartographie ; valeurs limitées operational / non-operational / unknown ; unknown durable = réserve signalée ; vérification par références et contenu, pas emplacement seul |
| **Alignement principes** | **Réalisé** — §10 document principes |
| **Effet** | Dimension D4 usage active en cartographie |

---

### D6 — Périmètres documentaires

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO WITH RESERVE** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Vocabulaire validé** | repository ; method ; project ; tooling ; external-publication |
| **Réserves** | `product` **différé** ; scope=project exige attribut project ; phase/domaine optionnels ; pas d'élargissement sans cas réel |
| **Alignement principes** | **Réalisé** — §11 document principes : cinq périmètres actifs, `product` différé |
| **Effet** | Périmètre minimal pour cartographie |

---

### D7 — Trajectoire et baseline

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Décision validée** | Modèle trajectory / trajectory_role adopté comme cadre candidate |
| **Trajectoires confirmées** | v1.1 = historique ; **v2.4 = baseline** ; **v2.5 = candidate capitalisée** ; **v2.6 = candidate** ; **v3.0 = archived** (D11) |
| **Règles** | baseline = propriété trajectoire ; lifecycle candidate ≠ trajectory candidate ; aucune promotion auto ; v3.0 non réactivée |
| **Effet** | Référence trajectoire pour cartographie et G3 futur |

---

### D8 — Profils de métadonnées

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO WITH RESERVE** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Décision validée** | **Principe** des profils proportionnés A–F validé |
| **Profils** | A Core ; B Capitalisation/Audit/Décision ; C Projet ; D Prompt/Template ; E README ; F Léger (mode allégé) |
| **Réserves** | Champs obligatoires **non** validés définitivement ; champs précis ajustés lors cartographie par lots ; pas de généralisation profil complet partout |
| **Alignement principes** | **Réalisé** — §13 document principes : principe A–F, champs candidates, F16/F17 hors profil MD |
| **Effet** | Principe opérationnel ; détails lors lots cartographie |

---

### D9 — Principes avant cartographie et G3

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO** |
| **Date / autorité** | 2026-07-11 12:45 Europe/Paris — Morris |
| **Décision validée** | Principes **doivent précéder** toute classification G3 |
| **Clarifications Morris** | Aucune G3 avant validation et intégration du cadre ; cartographie descriptive read-only **par lots** ouvrable après merge dossier + **nouveau GO Morris** ; **aucun POC séparé** ; cartographie progressive = apprentissage ; **aucune cartographie ouverte dans ce cycle** |
| **Effet** | Gate G3 fermée ; cartographie = gate distincte post-merge |

---

## 8. Lot B — Arbitrages complémentaires (Morris)

### D10 — `docs/` versus `method/.../documentation/`

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO** |
| **Date / autorité** | 2026-07-11 14:19 Europe/Paris — Morris |
| **Décision validée** | Frontière **docs/** vs **method/sfia-fast-track/documentation/** validée |
| **Règle method/documentation** | Documents décrivant, gouvernant, auditant, faisant évoluer ou capitalisant **SFIA lui-même** |
| **Règle docs/** | Documents décrivant système, produit, projet, plateforme ou pratique transverse **hors méthode SFIA** |
| **Arbitrage** | SFIA lui-même → method/documentation ; système/produit/projet/plateforme/pratique → docs/ ou projet ; emplacement historique **ne prime pas** |
| **Cas non conformes** | Identifiés et traités en revue documentaire et migration — **aucun cas litigieux connu conservé** à clôture mise en conformité |
| **Alignement principes** | **Réalisé** — §15 document principes |
| **Effet** | Règle décidée ; **application physique** = cycles futurs |
| **Gate suivant** | Revue documentaire ; migration par lots |

---

### D11 — SFIA v3.0 — archivage cible

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO** |
| **Date / autorité** | 2026-07-11 14:19 Europe/Paris — Morris |
| **Décision validée** | SFIA v3.0 **hors trajectoire** et **destinée à l'archive** |
| **Règles** | v3.0 ≠ trajectoire candidate ≠ sujet actif ; documents/artefacts v3.0 = **archived** ; MCP/Bridge/Runner/`.sfia` v3 = **non réactivés** ; aucune évolution v3.0 |
| **Traitement futur** | Éléments utiles → zone archive gouvernée ; sans valeur historique → suppression proposée après dépendances + GO Morris |
| **Archivage physique** | Cycle futur distinct — **non exécuté** dans cette PR |
| **Réouverture** | Nouvelle décision Morris explicite + nouveau cadrage trajectoire |
| **Alignement principes** | **Réalisé** — §12 document principes |
| **Effet** | v3.0 qualifiée archived ; trajectoires actives = v2.4 baseline, v2.5/v2.6 candidate |

---

### D12 — Nommage, emplacement et conformité repository

| Champ | Contenu |
|-------|---------|
| **Décision Morris** | **GO WITH RESERVE** |
| **Date / autorité** | 2026-07-11 14:19 Europe/Paris — Morris |
| **Cible validée** | **Conformité du repository actuel** — pas uniquement futurs documents |
| **Règles nommage** | kebab-case ; EN fichiers ; FR titres ; dates événementielles ; préfixe `sfia-` si contexte ; pas date sur core stables |
| **Règles conformité repository** | Tous fichiers actuels en périmètre revue ; utiles = conformes nommage **et** emplacement ; historiques utiles = archivés ; remplacés = superseded ; inutiles = suppression proposée (GO Morris) ; **aucune tolérance finale** incohérences connues |
| **Exécution** | Par lots ; mise à jour liens/README/index/dépendances ; **aucune migration massive** ; **aucune exécution** dans cette PR |
| **Réserve** | Mode d'exécution (lots, ordre) — **pas** cible de conformité |
| **Alignement principes** | **Réalisé** — §14 document principes |
| **Contexte historique (superseded)** | Ancienne réserve « legacy toléré » — **non retenue** comme état final |

---

## 9. Dépendances entre décisions

```text
D1 (GO) ──┬── D2 (GO WR) ──┬── D8 (GO WR)
          ├── D3 (ADJ ALIGNED) ── D5 (GO WR)
          ├── D4 (GO WR) ──────┤
          ├── D6 (GO WR) ──────┘
          ├── D7 (GO) ── D9 (GO) ──► revue documentaire / cartographie (GO futur)
          ├── D10 (GO) ──► migration emplacements (cycle futur)
          └── D11 (GO) ──► archivage v3 (cycle futur)

D12 (GO WR) ──► conformité repository actuel (migration par lots)
```

---

## 10. Trajectoire candidate après décisions Morris

**POC read-only : NON RETENU PAR MORRIS**

**Trajectoire retenue :**

```text
VALIDATION DES DÉCISIONS (ce dossier — D1–D12 finalisées)
  → INTÉGRATION DU DOSSIER (merge PR #164 — GO merge distinct)
  → REVUE DOCUMENTAIRE / CARTOGRAPHIE PAR LOTS (GO Morris distinct)
  → MISE EN CONFORMITÉ (nommage, emplacement, archivage v3)
  → ANALYSE DES RÉSULTATS
  → DÉCISION TRANSFORMATIONS / SUPPRESSIONS
  → MIGRATION PAR LOTS VALIDÉS UNIQUEMENT
```

**Règles cartographie (non ouverte) :**

- Chaque lot = read-only ; cartographie descriptive + réserves
- Aucun lot ne déplace, renomme, fusionne, archive ou supprime
- Pas de mega-cartographie ; pas de mega-migration
- Premier lot = **GO Morris distinct** après merge dossier

**Alignement principes :** **réalisé** dans ce correctif — aucune réserve bloquante d'alignement documentaire avant merge.

---

## 11. Séquence et gates

| Gate | Statut | Contenu |
|------|--------|---------|
| **Gate actuel** | **Atteint** | D1–D12 entièrement arbitrées — prêt pour merge |
| **Gate merge PR #164** | En attente | GO Morris merge distinct |
| **Gate cartographie lot 1** | **Fermé** | GO Morris futur requis |
| **Gate G3** | **Fermé** | Classification interdite |
| **Gate migration** | **Fermé** | Interdite |

**Séquence Morris retenue (remplace Option 2 + POC) :**

1. Gate A fondations : D1, D3, D7, D9 — **validé**
2. Gate B schéma : D2, D4, D5, D6, D8 — **validé avec réserves**
3. Gate C emplacements et trajectoire : D10, D11 — **validé**
4. Gate D conformité : D12 — **validé avec réserve exécution**

---

## 12. Conséquences sur la cartographie

| Élément | Conséquence |
|---------|-------------|
| D1–D12 GO | Cadre complet pour revue documentaire **après merge + GO lot** |
| D3 ALIGNED | Cycle sans `active` — aligné principes |
| D4 GO WR | Autorité quatre niveaux — conflits = Morris en cartographie |
| D10 GO | Règle emplacement — application = migration future |
| D11 GO | v3.0 archived cible — archivage physique = cycle futur |
| D12 GO WR | Conformité repository actuel — migration par lots |
| POC | **Non retenu** — cartographie par lots joue le rôle d'apprentissage |
| Ce cycle | **Aucune cartographie ouverte** |

---

## 13. Conséquences sur G3 et la classification

- **G3 fermé** — D9 GO : classification après cadre intégré et revue documentaire
- Merge PR #164 **n'ouvre pas** G3
- D4 : conflits autorité = arbitrage Morris en cartographie

---

## 14. Conséquences sur les migrations futures

- Migration **interdite** dans cette PR — autorisée uniquement par lots validés post-revue
- D12 : **conformité repository actuel** — exécution par lots avec liens/dépendances
- D10 : déplacements docs/ ↔ method/ selon règle validée — cycle futur
- D11 : archivage v3.0 — cycle futur

---

## 15. Risques et dette

| Risque / dette | Mitigation |
|----------------|------------|
| Conflits autorité D4 | Arbitrage Morris en cartographie |
| F02/F11, F06/F15, profils D8 | Affinage gouverné — décision dédiée si changement |
| Cas emplacement D10 non conformes | Revue documentaire + migration par lots |
| v3.0 dispersed | Archivage gouverné cycle futur (D11) |
| Volume migration D12 | Lots contrôlés ; liens vérifiés |
| Confusion merge = migration ouverte | Gates explicites §11 |

---

## 16. Options globales — historique et choix Morris

| Option | Statut |
|--------|--------|
| 1 — Validation complète D1–D12 | **Retenue** (avec réserves D2,D4,D5,D6,D8,D12) |
| 2 — Fondation + POC | **NON RETENU PAR MORRIS** |
| 3 — Approfondissement partiel | Couvert par réserves finales légitimes |
| 4 — NO-GO | Non retenu |

**Choix Morris :** matrice D1–D12 **entièrement arbitrée** — trajectoire revue documentaire / cartographie / migration par lots.

**Prochaine décision distincte :** GO merge PR #164 ; puis GO **premier lot revue documentaire ou cartographie**.

---

## 17. Registre des décisions Morris

| ID | Décision Morris | Réserves synthétiques | Date/heure | Autorité | Effet | Condition réouverture | Gate suivant |
|----|-----------------|----------------------|------------|----------|-------|----------------------|--------------|
| D1 | **GO** | — | 2026-07-11 12:45 | Morris | Cadre 7 dimensions candidate | — | Merge dossier ; carto |
| D2 | **GO WITH RESERVE** | F02/F11 ; F06/F15 ; F16/F17 ; pas +familles | 2026-07-11 12:45 | Morris | Taxonomie F01–F17 candidate | Cartographie réelle | Carto lot |
| D3 | **ADJUSTMENT REQUIRED — ALIGNED** | Retrait `active` ; aligné principes | 2026-07-11 12:45 | Morris | Lifecycle 6 états + usage séparé | — | Carto lot |
| D4 | **GO WITH RESERVE** | Conflits autorité en cartographie | 2026-07-11 14:19 | Morris | Modèle 4 niveaux | Cas complexe carto | Carto lot |
| D5 | **GO WITH RESERVE** | Cartographie d'abord ; pas obligatoire partout | 2026-07-11 12:45 | Morris | Usage en carto | — | Carto lot |
| D6 | **GO WITH RESERVE** | product différé ; project requis | 2026-07-11 12:45 | Morris | 5 périmètres | Cas réel product | Carto lot |
| D7 | **GO** | v3 hors trajectoire | 2026-07-11 12:45 | Morris | Trajectory/baseline candidate | — | Carto ; G3 |
| D8 | **GO WITH RESERVE** | Principe seul ; champs après carto | 2026-07-11 12:45 | Morris | Profils A–F principe | Cartographie lots | Gate C |
| D9 | **GO** | Pas POC ; carto par lots ; G3 fermé | 2026-07-11 12:45 | Morris | Gates carto/G3 | — | GO carto lot |
| D10 | **GO** | Règle docs/method validée | 2026-07-11 14:19 | Morris | Emplacement fonctionnel | — | Migration lot |
| D11 | **GO** | v3.0 archived cible | 2026-07-11 14:19 | Morris | Hors trajectoire active | Réouverture Morris | Archivage v3 |
| D12 | **GO WITH RESERVE** | Conformité repo actuel ; exécution par lots | 2026-07-11 14:19 | Morris | Nommage + emplacement | — | Migration future |

> **Aucune ligne NON DÉCIDÉ.**

---

## 18. Points non couverts

- Matrice fichier × dimensions réelle
- Revue documentaire et migration par lots
- Archivage physique v3.0
- Correction liens cassés ; Notion vs Git
- Automatisation / linter

---

## 19. Conclusion

| Élément | Statut |
|---------|--------|
| D1–D12 arbitrées par Morris | **Oui — entièrement** |
| Aucune décision active DEFERRED | **Oui** |
| D4 autorité quatre niveaux | **Oui** |
| D10 frontière docs/method | **Oui** |
| D11 v3.0 archived cible | **Oui** — archivage physique futur |
| D12 conformité repository actuel | **Oui** — exécution par lots |
| Legacy naming toléré comme état final | **Non** |
| Réserves tracées | **Oui** |
| POC | **Non retenu** |
| Cartographie / migration exécutées | **Non** |
| G3 / classification | **Non** |
| Document principes aligné | **Oui** |
| SFIA v2.6 | **Candidate** |

---

## 20. Gate Morris

| Gate | Description |
|------|-------------|
| **Actuel** | D1–D12 finalisées — **merge PR #164** soumis à GO Morris distinct |
| **Suivant** | GO Morris **premier lot cartographie read-only borné** |
| **G3** | Fermé |
| **Migration** | Fermée |

**Non automatique :** merge PR ; cartographie ; G3 ; migration.

---

## Annexe A — Matrice D1–D12 (post-décision Morris)

| ID | Décision Morris | Bloque carto. lot 1 | Bloque G3 | Bloque migration | Différable |
|----|-----------------|---------------------|-----------|------------------|------------|
| D1 | GO | Non | Oui* | Oui* | Non |
| D2 | GO WITH RESERVE | Non | Partiel | Partiel | Partiel |
| D3 | ADJUSTMENT REQUIRED — ALIGNED | Non | Non | Non | Non |
| D4 | GO WITH RESERVE | Non | Partiel | Non | Partiel |
| D5 | GO WITH RESERVE | Non | Partiel | Non | Partiel |
| D6 | GO WITH RESERVE | Non | Partiel | Partiel | Partiel |
| D7 | GO | Non | Oui* | Oui* | Non |
| D8 | GO WITH RESERVE | Non | Oui | Oui | Partiel |
| D9 | GO | — | Oui | Oui | Non |
| D10 | GO | Non | Non | Partiel | Non |
| D11 | GO | Non | Non | Partiel | Non |
| D12 | GO WITH RESERVE | Non | Non | Partiel | Oui |

*Prérequis satisfaits par décisions Morris — G3/migration restent fermés par D9.

---

## Annexe B — Dépendances décisionnelles

(Inchangée structurellement — D3 ADJ impacte alignement principes et cartographie lifecycle.)

| Décision | Amont | Aval |
|----------|-------|------|
| D3 ADJ ALIGNED | D1 | Cartographie ; D5 |
| D4 GO WR | D1 | Cartographie ; conflits Morris |
| D9 GO | D1–D12 | Revue documentaire ; blocage G3 |
| D10 GO | D2, D9 | Migration emplacements |
| D11 GO | D7 | Archivage v3 cycle futur |

---

## Annexe C — Décision × gate futur

| Gate futur | Condition post-décision Morris |
|------------|-------------------------------|
| Merge PR #164 | D1–D12 finalisées — GO merge Morris |
| Revue documentaire lot 1 | Merge dossier + GO Morris lot |
| Archivage v3.0 | D11 GO — cycle futur distinct |
| Conformité nommage/emplacement | D12 GO WR — migration par lots |
| Classification G3 | Fermé — réouverture Morris explicite |
| Migration lot 1 | G3 + D8 détails + D12 — fermé |
| POC | **NON RETENU — gate supprimée** |

---

## Annexe D — Options globales

| Option | Statut Morris |
|--------|-------------|
| 1 — Complète D1–D12 | **Retenue** (réserves D2,D4,D5,D6,D8,D12) |
| 2 — Fondation + POC | **NON RETENU** |
| 3 — Approfondissement | Partiel via réserves |
| Trajectoire retenue | **Décisions finalisées → merge → revue/migration par lots** |

---

## Annexe E — Git Review Index

| Élément | Valeur |
|---------|--------|
| Repository | mcleland147/sfia-workspace |
| Branche projet | method/sfia-v2.6-repository-standard-decisions |
| Base `main` | `688832d90e613959fbfdf53530f86aea36e23538` |
| HEAD initial (correctif) | `5d4aa0a555bd8bf3a649b4113e80ff5d5c14bcf5` |
| Cycle | Validation décisionnelle finale — clôture D1–D12 |
| Commit attendu | `docs: finalize Morris repository standard decisions` |

---

*Dossier candidate SFIA v2.6 — D1–D12 entièrement arbitrées — conformité repository actuel cible — aucune exécution physique — SFIA v2.6 reste candidate.*
```


## Validations

- D1-D12 fully arbitrated: yes
- no active DEFERRED: yes
- D4 authority 4 levels: yes
- D10 docs/method rule: yes
- D11 v3 archived target: yes
- D12 current repo compliance: yes
- no final legacy tolerance: yes
- modified sections complete: yes
- useful diff included: yes
- synthesis only: no

## Verdict: complete

