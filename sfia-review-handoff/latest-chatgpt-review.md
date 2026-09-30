# ChatGPT Review Pack — CRM 1.4.3 Retroplanning PPTX Materialization 01

## 0. Identité

| Champ | Valeur |
|-------|--------|
| **Date / heure / timezone** | 2026-09-30 02:46:55 CEST |
| **Cycle** | 1.4.3 Retroplanning PPTX Materialization 01 |
| **Typologie** | **DOC** |
| **Profil** | **Standard** |
| **Niveau pack** | **FULL** |
| **Décision Morris consommée** | **GO — 2026-09-30** (fond VALIDATED ; qualité visuelle en revue) |

## 1. Git Truth

| Check | Résultat |
|-------|----------|
| Workspace | /Users/l/Projects/sfia-worktree-crm-assurance |
| Branche | docs/crm-assurance-courtage-1-3-watch-01 |
| HEAD initial | 27ed45deae2d284815991d53a9c5ea102e07300a |
| HEAD final | e9bcd8a86f19b8e05ca161230923c855d8503cfe |
| origin/main | d4d986af5884b31b416374da3cb5e60757501f87 |
| Dirt | .tmp-sfia-review/** only |
| Merge/rebase main | **NOT DONE** |
| Git Truth | **PASS** |

## 2. Sources lues

SFIA : template, routing, CKC 01-cadrage, v2.5 method candidate, operating model, guardrails, checklist, scripts/sfia/README.md
Projet : `01-04-03-retroplanning.md` (canonique) · doctrine
READ-ONLY : 01-01 / 01-02 / 01-03 / RACI / budget

## 3. Outil de génération PPTX

| Champ | Valeur |
|-------|--------|
| Outil | **Python 3 stdlib** (`zipfile` + OOXML DrawingML) — pas de python-pptx / pas de Node / pas d’install |
| Script temporaire | `.tmp-sfia-review/gen_1_4_03_pptx.py` (**non committé**) |
| Logique | Construction PPTX 16:9 1 slide ; barres Gantt proportionnelles calendrier 25/09→09/12 ; 3 bandes macro ; 7 séquences ; 8 jalons diamond ; légende |
| Preview | `qlmanage -t -s 1920` → `.tmp-sfia-review/01-04-03-retroplanning-preview.png` |

## 4. Métadonnées PPTX

| Champ | Valeur |
|-------|--------|
| Fichier | `projects/crm-assurance-courtage/01-cadrage/01-04-03-retroplanning.pptx` |
| Taille | 6985 octets |
| SHA-256 | `16a7c2ab7b19f098d266a30d9e66355ccf3f757892f41a500bb157b87b34758c` |
| Slide count | **1** |
| Format | **16:9** (`sldSz` 12192000 × 6858000 EMUs, `screen16x9`) |

## 5. Contenu textuel COMPLET de la slide

```
Du cadrage au go-live : 53 jours pour livrer le CRM
CRM Assurance Courtage · Rétroplanning macro · 25/09/2026 → 09/12/2026
1.4.3
Rétroplanning
SEPT.
OCT.
NOV.
DÉC.
CONCEPTION / CADRAGE
DÉVELOPPEMENT ITÉRATIF
DÉPLOIEMENT / ACCOMPAGNEMENT
S0  Cadrage & organisation
25/09→02/10 · 6 j
S1  Conception fonctionnelle & solution
05/10→16/10 · 10 j
S2  Sprint Build 1
19/10→30/10 · 10 j
S3  Sprint Build 2 (11/11 exclu)
02/11→13/11 · 9 j
S4  Sprint Build 3 & stabilisation
16/11→27/11 · 10 j
S5  Recette, docs & accompagnement
30/11→04/12 · 5 j
S6  Mise en production & livraison
07/12→09/12 · 3 j
Jalons
25/09 Kick-off
02/10 fin cadrage
16/10 fin conception
30/10 SR1
13/11 SR2
27/11 SR3 / fin BUILD
04/12 fin recette
09/12
LIVRAISON FINALE
53 jours ouvrés · 11/11 exclu · Vue macro · Aucune stack / architecture adoptée
```

## 6. Composition visuelle

| Zone | Contenu |
|------|---------|
| Haute | Titre éditorial + sous-titre période + badge 1.4.3 |
| Axe | SEPT. / OCT. / NOV. / DÉC. |
| Macro | 3 bandes couleur : Conception (bleu) · Développement (vert) · Déploiement (sable/ambre) |
| Centre | 7 barres S0→S6 alignées dates, labels gauche, durée dans/à côté des barres |
| Jalons | Diamonds sur piste ; Kick-off démarqué ; **09/12 LIVRAISON FINALE** en accent rouge |
| Basse | Légende 53 JO · 11/11 exclu · vue macro · stack/archi non adoptées |

**Palette (neutre pédagogique, ≠ charte validée) :** fond `#F7F8FA` · encre `#1F2933` · bleu `#3182CE` · vert `#38A169` · ambre `#D69E2E` · accent livraison `#C53030`
**Police :** Calibri (standard locale)

## 7. Preview

| Champ | Valeur |
|-------|--------|
| Path | `.tmp-sfia-review/01-04-03-retroplanning-preview.png` |
| Dimensions | **1920 × 1083** |
| Contrôle Cursor | PASS — 1 slide lisible ; S0–S6 présents ; 3 macro-phases ; 8 jalons ; 09/12 identifiable ; pas de RACI/budget/stack ; pas de placeholder visible ; pas de zone hors slide manifeste |

## 8. Markdown 1.4.3 — avant / après

| Avant | Après |
|-------|-------|
| CANDIDATE — AWAITING CHATGPT / MORRIS REVIEW | Fond **VALIDATED BY MORRIS — 2026-09-30 — CONTENT** · PPTX **CANDIDATE — AWAITING VISUAL REVIEW** |

### Contenu COMPLET du Markdown après cycle

```markdown
# 1.4.3 — Rétroplanning

| Champ | Valeur |
|-------|--------|
| **Livrable** | 1.4.3 — Rétroplanning |
| **Statut contenu / fond** | **VALIDATED BY MORRIS — 2026-09-30 — CONTENT** |
| **Statut matérialisation PPTX** | **CANDIDATE — AWAITING VISUAL REVIEW** |
| **Date de préparation** | 2026-09-30 |
| **Livraison finale produit** | **09/12/2026** |
| **Format cible final** | Slide PPTX unique 16:9 — fichier `01-04-03-retroplanning.pptx` **produit** ; revue visuelle en cours |
| **1.3** | Non promu par ce document |
| **1.4 global** | Non validé — seul 1.4.3 est ouvert (fond validé ; PPTX en revue) |
| **Architecture / stack** | **NOT DECIDED** |

---

## A. Objectif

Formaliser le **rétroplanning macro** du projet CRM Assurance Courtage, du kick-off au **09/12/2026**, en phases et séquences datées (jours ouvrés).

Ce fond sert de source canonique pour la matérialisation pédagogique en **une slide PPTX 1 page** (Gantt / chronologie). Il ne remplace pas le backlog, le RACI, le budget, ni une décision d’architecture / stack.

---

## B. Hypothèses de calendrier

| Hypothèse | Valeur |
|-----------|--------|
| Début projet | **25/09/2026** |
| Livraison finale | **09/12/2026** |
| Calendrier de travail | Lundi → vendredi |
| Jour non travaillé | **11/11/2026** |
| Total jours ouvrés de référence | **53** |
| Mobilisation équipe cœur | **53 jours travaillés = 53 jours mobilisés** par membre (aucune décote / pas d’hypothèse 75,5 %) |
| Granularité | **Vue macro par phases / séquences** — pas de micro-planning quotidien |
| Agilité | Conduite itérative (sprints BUILD) — Scrum Master / Coach Agile = capacités optionnelles, non dépendances de ce planning |
| Stack / architecture | Non adoptées dans ce livrable |
| RUN / MCO | Géré côté prestataire post-livraison — **hors détail des 53 jours BUILD** (marqueur optionnel d’entrée en MCO après le 09/12) |

**Organisation (contexte, non re-spécifiée ici) :** côté client Directeur + Courtier référent métier ; côté prestataire 1 Lead Product Builder + 3 Product Builders. UX/UI et accessibilité dans le périmètre Lead / Product Builders. Expertises conformité/RGPD et formation/conduite du changement = interventions ponctuelles possibles. RACI et budget = inputs séparés — **non modifiés** par 1.4.3.

---

## C. Vue macro

| Macro-phase | Période | Séquences |
|-------------|---------|-----------|
| **Conception / cadrage** | **25/09/2026 → 16/10/2026** | S0 + S1 |
| **Développement itératif** | **19/10/2026 → 27/11/2026** | S2 + S3 + S4 |
| **Déploiement / accompagnement** | **30/11/2026 → 09/12/2026** | S5 + S6 |

---

## D. Tableau détaillé — séquences 0 à 6

| # | Phase / séquence | Début | Fin | Jours ouvrés | Objectif / sortie | Jalon |
|---|------------------|-------|-----|--------------|-------------------|-------|
| **0** | Cadrage & organisation | 25/09/2026 | 02/10/2026 | **6** | Kick-off ; cadrage ; organisation ; fermeture des principaux inputs de préparation | **25/09** Kick-off · **02/10** fin cadrage / organisation initiale |
| **1** | Conception fonctionnelle & conception de la solution | 05/10/2026 | 16/10/2026 | **10** | Conception fonctionnelle ; préparation backlog ; cadrage solution ; revue conformité / RGPD si nécessaire. **Aucun choix de stack présenté comme adopté.** | **16/10** fin conception / préparation BUILD |
| **2** | Sprint Build 1 | 19/10/2026 | 30/10/2026 | **10** | Développement / configuration itérative | **30/10** Sprint Review 1 |
| **3** | Sprint Build 2 | 02/11/2026 | 13/11/2026 | **9** | Développement / configuration itérative (**11/11 exclu**) | **13/11** Sprint Review 2 |
| **4** | Sprint Build 3 & stabilisation | 16/11/2026 | 27/11/2026 | **10** | Développement final ; intégration ; tests techniques ; stabilisation — solution suffisamment stable pour recette finale | **27/11** Sprint Review 3 / fin BUILD principal |
| **5** | Recette, documentation & accompagnement | 30/11/2026 | 04/12/2026 | **5** | Recette métier ; corrections finales bornées ; documentation utilisateur ; formation ; conduite du changement / communication selon périmètre validé | **04/12** fin recette / readiness mise en production **candidate** (≠ GO automatique) |
| **6** | Mise en production & livraison | 07/12/2026 | 09/12/2026 | **3** | Mise en production ; vérifications de mise en service ; accompagnement de démarrage ; **livraison finale** | **09/12** livraison finale produit |

| Contrôle | Résultat |
|----------|----------|
| Somme séquences | 6 + 10 + 10 + 9 + 10 + 5 + 3 = **53** |
| Span 25/09 → 09/12 (lun–ven, 11/11 exclu) | **53** jours ouvrés |
| Allocation fonctionnelle Sprints 1/2/3 | **Non inventée** — labels génériques « Sprint Build 1 / 2 / 3 » |

---

## E. Jalons clés

| Date | Jalon |
|------|-------|
| **25/09/2026** | Kick-off projet |
| **02/10/2026** | Fin cadrage / organisation initiale |
| **16/10/2026** | Fin conception / préparation BUILD |
| **30/10/2026** | Sprint Review 1 |
| **13/11/2026** | Sprint Review 2 |
| **27/11/2026** | Sprint Review 3 / fin BUILD principal |
| **04/12/2026** | Fin recette métier / readiness mise en production **candidate** |
| **09/12/2026** | **Livraison finale produit** |

> « Readiness mise en production » ≠ GO automatique : tout blocage ou décision structurante reste soumis à validation humaine (Morris / client).

---

## F. Contrat de matérialisation PPTX (cycle suivant)

| Règle | Exigence |
|-------|----------|
| Format | **16:9** |
| Volume | **Une seule slide** |
| Type visuel | Gantt horizontal **ou** chronologie équivalente |
| Macro-phases | **Trois** bandes / zones visuellement distinctes (Conception / Développement / Déploiement) |
| Séquences | **0 → 6** lisibles sur la timeline |
| Jalons | Jalons clés visibles ; **09/12** mise en évidence |
| Contenu textuel | Aucun paragraphe long |
| Hors slide | Pas de surcharge RACI / budget / TJM |
| Légende | Calendrier en **jours ouvrés** ; **11/11 exclu** |
| Ce cycle | Fond documentaire **VALIDATED** · PPTX matérialisé — **AWAITING VISUAL REVIEW** |

---

## G. Réserves / prochaines étapes

1. Allocation fonctionnelle détaillée aux sprints à fermer plus tard via backlog / conception (sources validées).
2. Rétroplanning détaillé par ressources à affiner ultérieurement si nécessaire.
3. Matérialisation PPTX 1 page = **produite** (`01-04-03-retroplanning.pptx`) — **revue visuelle ChatGPT / Morris** requise avant adoption pédagogique finale.
4. Ce livrable **ne valide pas** 1.3, **ne valide pas** 1.4 global, **n’adopte pas** d’architecture ni de stack.
5. RACI et budget : **non modifiés** ; non recopiés ici.
6. RUN / MCO post-livraison : hors détail BUILD ; éventuel marqueur d’entrée en MCO après le 09/12 uniquement.

---

## H. Preuve de calcul (jours ouvrés)

Méthode : lundi–vendredi ; exclusion du **11/11/2026** ; pas d’autres jours fériés appliqués dans ce contrat.

| Séquence | Dates ouvrées (ISO) | Compte |
|----------|---------------------|--------|
| 0 | 2026-09-25, 28, 29, 30 ; 2026-10-01, 02 | 6 |
| 1 | 2026-10-05 → 09 ; 12 → 16 | 10 |
| 2 | 2026-10-19 → 23 ; 26 → 30 | 10 |
| 3 | 2026-11-02 → 06 ; 09, 10, **12**, 13 *(11 exclu)* | 9 |
| 4 | 2026-11-16 → 20 ; 23 → 27 | 10 |
| 5 | 2026-11-30 ; 2026-12-01 → 04 | 5 |
| 6 | 2026-12-07, 08, 09 | 3 |
| **Total** | | **53** |

---

*Document pédagogique de cadrage. Fond : **VALIDATED BY MORRIS — 2026-09-30 — CONTENT**. PPTX : **CANDIDATE — AWAITING VISUAL REVIEW**.*
```

## 9. Doctrine §11 COMPLÈTE après

```markdown
## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
| 1.1 | **VALIDATED** |
| 1.2 | **VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
| Personas canoniques | **Client particulier** · **Courtier** · **Directeur** |
| Persona detail source | **GROUP-VALIDATED WORKSHOP CARDS — TRANSCRIBED IN GIT** |
| Ancien persona préparatoire Prospect → Client | **SUPERSEDED AS PERSONA** |
| Continuité prospect → client | **RETAINED IN CUSTOMER JOURNEY** |
| Experience Map Courtier | **RETAINED / ALIGNED — KEEP** |
| Customer Journey | **Client particulier — Du prospect à la vie client** |
| Miro personas / maps | **SYNC COMPLETE — 2026-09-29 — POST-CLEANUP VERIFIED** |
| 1.3 | **OPENED — AWAITING FINAL REVIEW** |
| 1.3.1 | **REVIEW PASS** |
| Base détaillée 1.3.2 A→E | **REVIEW PASS** (historique Git) |
| Étape actuelle | **1.4.3 PPTX materialization — AWAITING VISUAL REVIEW** |
| 1.4 | **NOT OPENED AS WHOLE** (1.4.1 / 1.4.2 / 1.4.4 / 1.4.5 absents) |
| 1.4.3 | **CONTENT VALIDATED — PPTX MATERIALIZATION AWAITING REVIEW** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
| Prochain objectif | Revue visuelle ChatGPT / Morris du PPTX 1.4.3 |

---
```

## 10. Diff utile (texte)

```
 .../crm-assurance-courtage-operating-doctrine.md         |   6 +++---
 .../01-cadrage/01-04-03-retroplanning.md                 |  15 ++++++++-------
 .../01-cadrage/01-04-03-retroplanning.pptx               | Bin 0 -> 6985 bytes
 3 files changed, 11 insertions(+), 10 deletions(-)

```

```diff
diff --git a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
index 100fe7fd..717f4f6c 100644
--- a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
+++ b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
@@ -181,12 +181,12 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 | 1.3 | **OPENED — AWAITING FINAL REVIEW** |
 | 1.3.1 | **REVIEW PASS** |
 | Base détaillée 1.3.2 A→E | **REVIEW PASS** (historique Git) |
-| Étape actuelle | **1.4.3 rétroplanning — CANDIDATE — AWAITING REVIEW** |
+| Étape actuelle | **1.4.3 PPTX materialization — AWAITING VISUAL REVIEW** |
 | 1.4 | **NOT OPENED AS WHOLE** (1.4.1 / 1.4.2 / 1.4.4 / 1.4.5 absents) |
-| 1.4.3 | **OPENED — RETROPLANNING CANDIDATE — AWAITING REVIEW** |
+| 1.4.3 | **CONTENT VALIDATED — PPTX MATERIALIZATION AWAITING REVIEW** |
 | Architecture | **NOT DECIDED** |
 | Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
-| Prochain objectif | Revue ChatGPT / Morris du rétroplanning 1.4.3 |
+| Prochain objectif | Revue visuelle ChatGPT / Morris du PPTX 1.4.3 |

 ---

diff --git a/projects/crm-assurance-courtage/01-cadrage/01-04-03-retroplanning.md b/projects/crm-assurance-courtage/01-cadrage/01-04-03-retroplanning.md
index fd6ae629..ad16e544 100644
--- a/projects/crm-assurance-courtage/01-cadrage/01-04-03-retroplanning.md
+++ b/projects/crm-assurance-courtage/01-cadrage/01-04-03-retroplanning.md
@@ -3,12 +3,13 @@
 | Champ | Valeur |
 |-------|--------|
 | **Livrable** | 1.4.3 — Rétroplanning |
-| **Statut** | **CANDIDATE — AWAITING CHATGPT / MORRIS REVIEW** |
+| **Statut contenu / fond** | **VALIDATED BY MORRIS — 2026-09-30 — CONTENT** |
+| **Statut matérialisation PPTX** | **CANDIDATE — AWAITING VISUAL REVIEW** |
 | **Date de préparation** | 2026-09-30 |
 | **Livraison finale produit** | **09/12/2026** |
-| **Format cible final** | Slide PPTX unique (Gantt / chronologie) — **cycle suivant** |
+| **Format cible final** | Slide PPTX unique 16:9 — fichier `01-04-03-retroplanning.pptx` **produit** ; revue visuelle en cours |
 | **1.3** | Non promu par ce document |
-| **1.4 global** | Non validé — seul 1.4.3 est ouvert |
+| **1.4 global** | Non validé — seul 1.4.3 est ouvert (fond validé ; PPTX en revue) |
 | **Architecture / stack** | **NOT DECIDED** |

 ---
@@ -17,7 +18,7 @@

 Formaliser le **rétroplanning macro** du projet CRM Assurance Courtage, du kick-off au **09/12/2026**, en phases et séquences datées (jours ouvrés).

-Ce fond sert de source canonique pour la matérialisation ultérieure d’**une slide PPTX 1 page** (Gantt / chronologie). Il ne remplace pas le backlog, le RACI, le budget, ni une décision d’architecture / stack.
+Ce fond sert de source canonique pour la matérialisation pédagogique en **une slide PPTX 1 page** (Gantt / chronologie). Il ne remplace pas le backlog, le RACI, le budget, ni une décision d’architecture / stack.

 ---

@@ -100,7 +101,7 @@ Ce fond sert de source canonique pour la matérialisation ultérieure d’**une
 | Contenu textuel | Aucun paragraphe long |
 | Hors slide | Pas de surcharge RACI / budget / TJM |
 | Légende | Calendrier en **jours ouvrés** ; **11/11 exclu** |
-| Ce cycle | Fond documentaire uniquement — **PPTX NON matérialisé** |
+| Ce cycle | Fond documentaire **VALIDATED** · PPTX matérialisé — **AWAITING VISUAL REVIEW** |

 ---

@@ -108,7 +109,7 @@ Ce fond sert de source canonique pour la matérialisation ultérieure d’**une

 1. Allocation fonctionnelle détaillée aux sprints à fermer plus tard via backlog / conception (sources validées).
 2. Rétroplanning détaillé par ressources à affiner ultérieurement si nécessaire.
-3. Matérialisation PPTX 1 page = **cycle suivant**, après **REVIEW PASS** ChatGPT / Morris.
+3. Matérialisation PPTX 1 page = **produite** (`01-04-03-retroplanning.pptx`) — **revue visuelle ChatGPT / Morris** requise avant adoption pédagogique finale.
 4. Ce livrable **ne valide pas** 1.3, **ne valide pas** 1.4 global, **n’adopte pas** d’architecture ni de stack.
 5. RACI et budget : **non modifiés** ; non recopiés ici.
 6. RUN / MCO post-livraison : hors détail BUILD ; éventuel marqueur d’entrée en MCO après le 09/12 uniquement.
@@ -132,4 +133,4 @@ Méthode : lundi–vendredi ; exclusion du **11/11/2026** ; pas d’autres jours

 ---

-*Document pédagogique de cadrage. CANDIDATE — AWAITING CHATGPT / MORRIS REVIEW.*
+*Document pédagogique de cadrage. Fond : **VALIDATED BY MORRIS — 2026-09-30 — CONTENT**. PPTX : **CANDIDATE — AWAITING VISUAL REVIEW**.*

```

## 11. Validations

| Check | Résultat |
|-------|----------|
| PPTX existe / 1 slide / 16:9 | PASS |
| S0→S6 + 3 macros + jalons | PASS |
| 53 JO + 11/11 + 09/12 | PASS |
| Pas RACI/budget/TJM/stack | PASS |
| Dates canoniques inchangées | PASS |
| 1.3 non promu | PASS |
| 1.4 global non VALIDATED | PASS |
| Preview rendu | PASS |
| Commit | PASS (e9bcd8a8) |
| Push projet | NOT DONE |
| PR | NOT CREATED |

## 12. Réserves

Qualité visuelle soumise à revue ChatGPT/Morris. Jalons intermédiaires en libellés compacts. Script générateur temporaire non versionné. Palette = neutre pédagogique, pas une charte CRM validée.

## 13. Verdict

**READY FOR CHATGPT VISUAL REVIEW — CRM 1.4.3 RETROPLANNING PPTX**
