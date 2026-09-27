# ChatGPT Review Pack — FULL

## Meta

- **Date / heure / fuseau :** 2026-09-28 00:33:49 CEST
- **Projet :** CRM Assurance Courtage
- **Cycle :** Cadrage — consolidation des décisions 1.2 user discovery
- **Profil :** Standard
- **Typologie :** DOC
- **Baseline :** SFIA v2.6
- **Workspace :** `/Users/l/Projects/sfia-worktree-crm-assurance`
- **Branche :** `docs/crm-assurance-courtage-1-2-user-discovery-01`
- **HEAD initial :** `bfd7fe5516971e6cd06bad549aeb5886e6b07557`
- **HEAD final :** `03c14eb8887807e7fd9428554ffc6a55c1b99612`
- **origin/main :** `b7fdf712073257f9fc64c294ac7e68af2cd64464`
- **Fake / Real :** N/A
- **Niveau :** FULL
- **Push projet :** NOT DONE
- **PR :** NOT CREATED

---

## Git Truth initial

- branche = `docs/crm-assurance-courtage-1-2-user-discovery-01` — PASS
- HEAD = `bfd7fe55…` — PASS
- origin/main = `b7fdf712…` — PASS
- dirt = review pack uniquement — PASS
- aucune concurrence CRM sur main — PASS

---

## Sources lues

1. template v2.6
2. routing guide
3. méthode cycles v2.5 candidate
4. CKC cadrage (candidate)
5. operating model
6. rules/guardrails
7. validation checklist
8. scripts/sfia/README.md
9. doctrine CRM
10. 1.1 validé
11. 1.2 (pré-alignement)

---

## Décisions Morris exactes

1. Proto-personas ADOPTED FOR 1.2 : Courtier ; Directeur ; Prospect → Client assuré
2. Prospect → Client = un seul persona longitudinal (deux états)
3. Experience Map ADOPTED FOR 1.2 — Courtier — NOT MATERIALIZED
4. Customer Journey Map ADOPTED FOR 1.2 — Prospect → Client — NOT MATERIALIZED
5. 1.2 reste OPENED / WORKING ANALYSIS — **pas** VALIDATED
6. Architecture / Stack = NOT DECIDED
7. 1.3 = NOT OPENED
8. Miro = NOT MODIFIED / NOT MATERIALIZED

---

## Doctrine §11 AVANT (complet)

```markdown
## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.1 Analyse des besoins métiers — VALIDATED (2026-09-27)** |
| Étape active | **1.2 Analyse des besoins utilisateurs — OPENED (GO Morris 2026-09-27)** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY** |
| Prochain objectif | Produire et faire valider l’analyse 1.2 et ses proto-personas avant toute matérialisation visuelle finale ou conception produit |

---
```

---

## Doctrine §11 APRÈS (complet)

```markdown
## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.1 Analyse des besoins métiers — VALIDATED (2026-09-27)** |
| Étape active | **1.2 Analyse des besoins utilisateurs — OPENED (GO Morris 2026-09-27)** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY** |
| Prochain objectif | Faire revoir l’alignement documentaire des proto-personas et maps adoptés, puis matérialiser le 1.2 dans Miro dans un cycle dédié après revue PASS |

---
```

---

## Sélection personas AVANT → APRÈS

| Avant | Après |
|-------|-------|
| Courtier CANDIDATE | Courtier ADOPTED PROTO-PERSONA |
| Client CANDIDATE (fiche séparée) | Fusionné dans Prospect → Client |
| Prospect CANDIDATE (fiche séparée) | Fusionné dans Prospect → Client |
| Directeur STAKEHOLDER — NOT PERSONA BY DEFAULT | Directeur ADOPTED PROTO-PERSONA (pilotage) |

### Justification fusion Prospect → Client

Décision Morris de modélisation : une même personne suivie avant/après souscription. Les états métier Prospect et Client restent distincts dans les sources ; la fiche persona est longitudinale. Ne prouve pas l’identité de tous les besoins Prospect/Client.

### Qualification Directeur

Usage dashboard = INFÉRENCE DE CADRAGE FORTE + DÉCISION MORRIS — **pas** fait explicite du brief.

---

## Contenu COMPLET du fichier 1.2 (après alignement)

````markdown
# CRM Assurance Courtage — 1.2 Analyse des besoins utilisateurs

| Champ | Valeur |
|-------|--------|
| **Statut** | WORKING ANALYSIS — **1.2 OPENED** par décision Morris du 2026-09-27 |
| **Étape** | 1.2 |
| **Source métier principale** | Brief pédagogique CRM + 1.1 validé |
| **Source méthodologique** | Guide Bloc 1 PBNC + exigences 1.2 du brief |
| **Doctrine projet** | [`../00-intake/crm-assurance-courtage-operating-doctrine.md`](../00-intake/crm-assurance-courtage-operating-doctrine.md) |
| **1.1** | VALIDATED (2026-09-27) — [`01-01-analyse-besoins-metiers.md`](01-01-analyse-besoins-metiers.md) |
| **Evidence user discovery** | BRIEF-DERIVED — NO FIELD INTERVIEWS — NO OBSERVED AS-IS |
| **Personas** | **ADOPTED PROTO-PERSONAS FOR 1.2** — BRIEF-DERIVED |
| **Experience Map** | **ADOPTED FOR 1.2** — COURTIER — **NOT MATERIALIZED** |
| **Customer Journey Map** | **ADOPTED FOR 1.2** — PROSPECT → CLIENT — **NOT MATERIALIZED** |
| **Architecture** | NOT DECIDED |
| **Stack** | NOT DECIDED |

### Décisions Morris tracées (alignement 1.2)

| Décision | Contenu | Portée |
|----------|---------|--------|
| Ouverture 1.2 | 1.2 = **OPENED** (2026-09-27) | Le 1.2 **n’est pas** VALIDATED |
| Proto-personas | **Courtier** ; **Directeur du cabinet** ; **Prospect → Client assuré** | ADOPTED PROTO-PERSONAS FOR 1.2 — pédagogique / brief-derived — **non** empiriquement validés |
| Experience Map | ADOPTED FOR 1.2 — cible **Courtier** | NOT MATERIALIZED |
| Customer Journey Map | ADOPTED FOR 1.2 — cible **Prospect → Client assuré** | NOT MATERIALIZED |

**ADOPTED** (personas / maps) signifie que Morris valide leur **utilisation pédagogique** dans le livrable 1.2.
**ADOPTED** ne signifie **pas** : user research empirique ; profil statistiquement démontré ; persona terrain validé ; 1.2 VALIDATED.

---

## 1. Objectif du 1.2

Identifier les profils utilisateurs pertinents pour le cas pédagogique CRM Assurance Courtage, comprendre leurs objectifs et attentes **à partir des informations disponibles**, et préparer des **proto-personas de cadrage** ainsi que le contrat des maps adoptées, avant matérialisation Miro dans un cycle dédié.

Ce cycle doit :

- rendre explicites les hypothèses faute d’entretiens réels ;
- distinguer faits sourcés, inférences et décisions Morris ;
- ne pas transformer l’analyse en spécification fonctionnelle, backlog, interfaces ou architecture.

**Ce cycle ne constitue PAS une user research empirique.**

---

## 2. Niveau de preuve et méthode

| Catégorie | Signification |
|-----------|---------------|
| **EXPLICITE DANS LE BRIEF** | Information affirmée directement par le brief (ou reprise telle quelle du 1.1 validé) |
| **INFÉRENCE DE CADRAGE** | Déduction raisonnable à partir du brief, clairement marquée |
| **DÉCISION MORRIS** | Arbitrage pédagogique / de modélisation du 1.2, distinct du fait source |
| **NON RENSEIGNÉ** | Information non fournie — **non inventée** |

Aucun entretien, questionnaire ou observation terrain n’est fourni.
Aucun verbatim réel n’est disponible.

Les profils sont des **PROTO-PERSONAS DE CADRAGE** (BRIEF-DERIVED / NO FIELD INTERVIEWS / NO OBSERVED AS-IS), adoptés pour le 1.2 pédagogique.

---

## 3. Utilisateurs et parties prenantes

| Profil | Qualification | Preuves / statut |
|--------|---------------|------------------|
| **Courtier** | Utilisateur métier interne principal | Suit le cycle de vie client ; devis ; relances ; rendez-vous ; souscription ; renouvellement / résiliation ; documents ; sinistres ; suivi relationnel — **EXPLICITE DANS LE BRIEF** |
| **Directeur du cabinet** | Partie prenante décisionnaire **et** proto-persona de pilotage **adopté par Morris** | Objectifs business, différenciation, KPIs du scénario — **EXPLICITE DANS LE BRIEF**. Usage personnel du dashboard = **INFÉRENCE DE CADRAGE FORTE + DÉCISION MORRIS** — **pas** un fait explicite du brief |
| **Prospect** | État métier initial (avant souscription) du persona externe longitudinal | Contact ; devis ; RDV ; besoin ; proposition ; souscription — **EXPLICITE DANS LE BRIEF**. Usage direct de toutes les interfaces du futur CRM — **NON RENSEIGNÉ** |
| **Client** | État métier ultérieur (après souscription) du **même** persona externe | Contrats ; échanges ; historique ; transparence ; documents ; sinistres ; renouvellement / résiliation — **EXPLICITE DANS LE BRIEF** |

**Sources vs modélisation :** le brief distingue les états métier Prospect et Client.
**Modélisation persona 1.2 (décision Morris) :** ces deux états sont réunis dans un **seul** proto-persona longitudinal **Prospect → Client assuré**.

---

## 4. Choix des proto-personas adoptés pour le 1.2

Ancienne sélection (brouillon initial) : Courtier / Client / Prospect (candidats) ; Directeur = stakeholder only.

**Sélection adoptée (décision Morris) :**

| Candidat | Profil | Statut |
|----------|--------|--------|
| **A** | Courtier | **ADOPTED PROTO-PERSONA** — PRIMARY / OPERATIONAL USER |
| **B** | Directeur du cabinet | **ADOPTED PROTO-PERSONA** — MANAGEMENT / PILOTING USER |
| **C** | Prospect → Client assuré | **ADOPTED PROTO-PERSONA** — EXTERNAL LIFECYCLE USER / BENEFICIARY |

La fusion Prospect → Client est une **DÉCISION MORRIS DE MODÉLISATION DU 1.2**. Elle ne prouve pas que tous les prospects et clients ont exactement les mêmes besoins.

---

## 5. Proto-persona A — Courtier

| Champ | Contenu | Niveau de preuve |
|-------|---------|------------------|
| **Rôle** | Courtier du cabinet | EXPLICITE DANS LE BRIEF |
| **Angle** | Métier / opérations / relation client | EXPLICITE DANS LE BRIEF |
| **Relation au projet** | Utilisateur métier interne principal | EXPLICITE DANS LE BRIEF |
| **Objectifs / capacités supportés** | Suivi du cycle client ; devis ; relances ; rendez-vous ; souscription ; renouvellement / résiliation ; collecte de pièces ; documents ; sinistres ; traçabilité ; réactivité ; personnalisation soutenue par l’historique | EXPLICITE DANS LE BRIEF |
| **Besoins déduits** | Retrouver l’information de suivi utile ; vision cohérente des étapes du dossier ; limiter les tâches administratives ; disposer de l’historique pour personnaliser la relation | **INFÉRENCE DE CADRAGE** |

**Non renseigné (non inventé) :** outil actuel ; temps perdu ; volumes ; âge ; séniorité ; aisance numérique ; organisation quotidienne ; canal favori ; rémunération ; localisation.

**Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
Le courtier a besoin d’un suivi centralisé du parcours commercial et administratif pour rester réactif et personnaliser la relation sans charge administrative excessive.

---

## 6. Proto-persona B — Directeur du cabinet

| Champ | Contenu | Niveau de preuve |
|-------|---------|------------------|
| **Rôle** | Directeur du cabinet | EXPLICITE DANS LE BRIEF |
| **Angle** | Pilotage / supervision / performance / vision business | EXPLICITE DANS LE BRIEF (objectifs) + **INFÉRENCE** (usage opérationnel de pilotage) |
| **Relation au projet** | Partie prenante décisionnaire et proto-persona de pilotage **adopté par Morris** | **DÉCISION MORRIS** |

### Faits explicites du brief

- directeur du cabinet ;
- souhaite se différencier face aux assureurs en ligne ;
- insiste sur proximité, personnalisation, transparence ;
- objectifs : réduction des tâches administratives ; amélioration de la traçabilité ; renforcement de la confiance ; augmentation de la rétention ;
- le scénario demande un tableau de bord de performance commerciale comprenant : taux de conversion ; panier moyen ; satisfaction client.

### Inférences de cadrage

- besoin de visibilité consolidée ;
- besoin de suivre les indicateurs ;
- besoin d’apprécier la performance commerciale ;
- besoin de supervision globale de l’activité ;
- **usage du dashboard par le directeur**.

Ces éléments sont des **INFÉRENCES DE CADRAGE**. Le brief **ne dit pas littéralement** que le directeur consulte personnellement le dashboard.

### Décision Morris

Le Directeur est retenu comme proto-persona de pilotage malgré l’absence de phrase explicite indiquant qu’il utilise personnellement le dashboard.
Fondement : **INFÉRENCE DE CADRAGE FORTE** (dashboard + KPIs + objectifs de différenciation / traçabilité / réactivité / confiance / rétention) + **DÉCISION MORRIS**.

### Non renseigné (non inventé)

Fréquence de consultation ; appareil ; niveau digital ; mode précis de management ; taille d’équipe ; objectifs chiffrés ; droits exacts dans l’application.

**Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
Le directeur a besoin d’une vision consolidée de la performance commerciale pour piloter différenciation, traçabilité, confiance et rétention.

---

## 7. Proto-persona C — Prospect → Client assuré

Un **seul** proto-persona externe longitudinal.
**DÉCISION MORRIS DE MODÉLISATION DU 1.2.**

Objectif : montrer l’évolution des besoins **avant** et **après** souscription — **sans** conclure à deux applications ou deux interfaces distinctes.

### État 1 — Prospect

| Élément | Contenu | Niveau de preuve |
|---------|---------|------------------|
| **Étapes / attentes soutenues** | Prise de contact ; devis ; rendez-vous ; expression / compréhension du besoin ; proposition personnalisée ; progression vers souscription | EXPLICITE DANS LE BRIEF |
| **Axes** | Proximité ; réactivité ; personnalisation ; transparence | EXPLICITE DANS LE BRIEF |

**Réserve :** l’usage direct du futur CRM par le prospect n’est **pas** démontré — **NON RENSEIGNÉ**.

### État 2 — Client assuré

| Élément | Contenu | Niveau de preuve |
|---------|---------|------------------|
| **Étapes / attentes soutenues** | Vie du contrat ; échanges ; documents ; transparence / historique ; sinistre éventuel ; renouvellement ; résiliation | EXPLICITE DANS LE BRIEF |

L’accès en temps réel à l’historique des échanges et contrats est un signal d’interaction externe important (**EXPLICITE DANS LE BRIEF**) ; il **ne définit pas** l’architecture ni l’interface exacte — **NOT DECIDED** / hors scope 1.2.

### Continuité Prospect → Client

Les besoins évoluent entre entrée en relation et vie du contrat.
On pourra **plus tard** comparer informations accessibles, besoins, actions, points de contact et permissions candidates — **ces choix ne sont PAS décidés dans le 1.2**.

**Non renseigné (non inventé) :** démographie ; budget ; comparateurs ; canaux non cités ; fréquence ; appareil ; forme exacte de l’accès client.

**Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
La même personne passe d’une entrée en relation (prospect) à une relation de suivi contractualisée (client), avec une continuité attendue de proximité, personnalisation et transparence.

---

## 8. Synthèse des besoins par profil

| Profil | Objectifs | Attentes | Besoins / enjeux | Niveau de preuve |
|--------|-----------|----------|------------------|------------------|
| Courtier | Suivi cycle client ; devis / RDV / souscription ; documents ; sinistres ; traçabilité / réactivité | Personnalisation soutenue par l’historique | Vision cohérente du dossier ; charge admin. réduite | EXPLICIT BRIEF + INFERENCE |
| Directeur | Différenciation ; objectifs business ; KPIs (conversion, panier moyen, satisfaction) | Pilotage / performance | Visibilité consolidée ; suivi des indicateurs | EXPLICIT BRIEF + INFERENCE + DÉCISION MORRIS (usage dashboard) |
| Prospect → Client — état Prospect | Contact → devis → RDV → proposition → souscription | Proximité ; réactivité ; personnalisation ; transparence | Entrée en relation simple ; progression claire | EXPLICIT BRIEF + INFERENCE |
| Prospect → Client — état Client | Suivi contrats ; échanges ; documents ; sinistre éventuel ; renouvellement / résiliation | Transparence ; confiance ; continuité | Comprendre l’état du suivi ; retrouver infos utiles | EXPLICIT BRIEF + INFERENCE |

Aucune user story. Aucun backlog fonctionnel.

---

## 9. Difficultés / pain points

Aucune observation AS-IS utilisateur n’est disponible.
Aucune affirmation du type « les utilisateurs disent… » n’est formulée.

### Enjeux utilisateurs déduits du brief

**Courtier :** charge administrative à réduire ; traçabilité ; réactivité ; continuité du suivi.
**Directeur :** besoin de visibilité et de pilotage déduit des objectifs et KPIs ; performance commerciale ; satisfaction ; rétention.
**Prospect → Client :** fluidité de l’entrée en relation ; personnalisation ; transparence ; confiance ; continuité de la relation.

**Qualification :** DÉDUITS DU BRIEF — NON OBSERVÉS SUR LE TERRAIN.

---

## 10. Inconnues et limites

- aucun entretien ou questionnaire réel ;
- aucune observation terrain ;
- aucune donnée démographique fiable ;
- aucun outil actuel connu ;
- usage personnel du dashboard par le Directeur = **inférence** (pas fait explicite) ;
- usage direct du CRM par le Prospect = **non démontré** ;
- forme exacte de l’accès Client = **non décidée** ;
- interfaces et permissions = **hors scope** ;
- pensées / émotions des futures maps = **hypothèses** si non sourcées.

---

## 11. Experience Map — Courtier

| Champ | Valeur |
|-------|--------|
| **Statut** | **ADOPTED FOR 1.2** — COURTIER — **NOT MATERIALIZED** |
| **Persona cible** | Courtier |
| **Objet futur** | Expérience métier globale du courtier au fil de la relation client — **sans** limitation à une interface logicielle précise |
| **Cadre futur** | Expérience opérationnelle ; étapes métier ; actions ; besoins ; enjeux ; points de continuité ; pensées / émotions **uniquement** si qualifiées comme hypothèses lorsque non sourcées |
| **Nature** | CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF — **NON AS-IS OBSERVÉ** |

Aucune Emotion Map / Experience Map n’est créée dans ce cycle.
Aucune émotion observée n’est inventée.

---

## 12. Customer Journey Map — Prospect → Client

| Champ | Valeur |
|-------|--------|
| **Statut** | **ADOPTED FOR 1.2** — PROSPECT → CLIENT — **NOT MATERIALIZED** |
| **Persona cible** | Prospect → Client assuré |
| **Objet** | Relation du persona avec le **service de courtage / cabinet** (service de référence du scénario) |
| **Transition structurante** | Prospect → souscription → Client |
| **Séquence cible (contrat futur)** | Entrée en relation → prospect → devis / rendez-vous → compréhension du besoin → proposition → souscription → client → vie du contrat → échanges / documents → sinistre éventuel → renouvellement / résiliation |
| **Nature** | CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF — **NON AS-IS OBSERVÉ** |

**Règles :**

- La Customer Journey Map **ne suppose PAS** que le futur CRM existe déjà ou est observé.
- Elle cartographie l’expérience avec le **service de courtage**, pas avec un produit CRM déjà déployé.
- **Ne PAS** décider ici : interface Prospect distincte ; interface Client distincte ; accès Prospect direct au CRM ; accès Client à toutes les fonctions ; écrans ; permissions ; composants UI.

Aucune Customer Journey Map n’est créée dans ce cycle.

---

## 13. Miro

| Champ | Valeur |
|-------|--------|
| **État de ce cycle** | **NOT MODIFIED** — **NOT MATERIALIZED** |

Trajectoire proposée :

1. alignement Git avec les décisions Morris (présent cycle) ;
2. revue ChatGPT du contenu ;
3. si revue PASS : cycle Miro dédié (GO Morris séparé) ;
4. matérialisation envisagée : Persona Courtier ; Persona Directeur ; Persona Prospect → Client ; Experience Map Courtier ; Customer Journey Map Prospect → Client ;
5. revue Miro / contenu ;
6. décision Morris ultérieure sur validation globale du 1.2.

Le présent alignement **ne constitue PAS** le GO du cycle Miro.

---

## 14. Synthèse 1.2

| Point | État |
|-------|------|
| **1.2** | OPENED — WORKING ANALYSIS |
| Courtier | ADOPTED PROTO-PERSONA |
| Directeur | ADOPTED PROTO-PERSONA |
| Prospect → Client | ADOPTED PROTO-PERSONA |
| Evidence | BRIEF-DERIVED / NO FIELD INTERVIEWS |
| Experience Map Courtier | ADOPTED / NOT MATERIALIZED |
| Customer Journey Map Prospect → Client | ADOPTED / NOT MATERIALIZED |
| Miro | NOT MATERIALIZED |
| Architecture | NOT DECIDED |
| Stack | NOT DECIDED |
| **1.3** | **NOT OPENED** |

````

---

## Experience Map / CJM / Miro

- Experience Map Courtier : ADOPTED / NOT MATERIALIZED — CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF — NON AS-IS OBSERVÉ
- CJM Prospect → Client : ADOPTED / NOT MATERIALIZED — relation avec service de courtage, pas CRM déjà existant
- Miro : NOT MODIFIED / NOT MATERIALIZED

---

## Niveau de preuve / anti-invention

- BRIEF-DERIVED / NO FIELD INTERVIEWS / NO OBSERVED AS-IS
- Aucun entretien, verbatim, démographie, émotion observée, interface Prospect/Client décidée
- Architecture / Stack NOT DECIDED
- 1.3 NOT OPENED

---

## Diff (commit)

````diff
commit 03c14eb8887807e7fd9428554ffc6a55c1b99612
Author: Ludo243 <ludo_zaya@hotmail.fr>
Date:   Mon Sep 28 00:33:35 2026 +0200

    docs(crm-assurance-courtage): align 1.2 personas and journey maps

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
index bba71f24..823735f3 100644
--- a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
+++ b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
@@ -170,7 +170,7 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 | Étape active | **1.2 Analyse des besoins utilisateurs — OPENED (GO Morris 2026-09-27)** |
 | Architecture | **NOT DECIDED** |
 | Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY** |
-| Prochain objectif | Produire et faire valider l’analyse 1.2 et ses proto-personas avant toute matérialisation visuelle finale ou conception produit |
+| Prochain objectif | Faire revoir l’alignement documentaire des proto-personas et maps adoptés, puis matérialiser le 1.2 dans Miro dans un cycle dédié après revue PASS |

 ---

diff --git a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
index 2b98a26b..8ae92100 100644
--- a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
+++ b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
@@ -8,29 +8,36 @@
 | **Source méthodologique** | Guide Bloc 1 PBNC + exigences 1.2 du brief |
 | **Doctrine projet** | [`../00-intake/crm-assurance-courtage-operating-doctrine.md`](../00-intake/crm-assurance-courtage-operating-doctrine.md) |
 | **1.1** | VALIDATED (2026-09-27) — [`01-01-analyse-besoins-metiers.md`](01-01-analyse-besoins-metiers.md) |
-| **Evidence user discovery** | BRIEF-DERIVED PROTO-PERSONAS — NO FIELD INTERVIEWS PROVIDED |
-| **Personas** | CANDIDATE — à valider Morris |
-| **Experience Map** | OPTIONAL / NOT ADOPTED |
-| **Customer Journey Map** | OPTIONAL / NOT ADOPTED |
+| **Evidence user discovery** | BRIEF-DERIVED — NO FIELD INTERVIEWS — NO OBSERVED AS-IS |
+| **Personas** | **ADOPTED PROTO-PERSONAS FOR 1.2** — BRIEF-DERIVED |
+| **Experience Map** | **ADOPTED FOR 1.2** — COURTIER — **NOT MATERIALIZED** |
+| **Customer Journey Map** | **ADOPTED FOR 1.2** — PROSPECT → CLIENT — **NOT MATERIALIZED** |
 | **Architecture** | NOT DECIDED |
 | **Stack** | NOT DECIDED |

-**Décision Morris :** 1.2 — Analyse des besoins utilisateurs = **OPENED**
-**Date :** 2026-09-27
+### Décisions Morris tracées (alignement 1.2)

-Cette ouverture autorise le travail de cadrage 1.2. Elle ne signifie **pas** que le 1.2, les personas, une Experience Map ou une Customer Journey Map sont VALIDATED / ADOPTED.
+| Décision | Contenu | Portée |
+|----------|---------|--------|
+| Ouverture 1.2 | 1.2 = **OPENED** (2026-09-27) | Le 1.2 **n’est pas** VALIDATED |
+| Proto-personas | **Courtier** ; **Directeur du cabinet** ; **Prospect → Client assuré** | ADOPTED PROTO-PERSONAS FOR 1.2 — pédagogique / brief-derived — **non** empiriquement validés |
+| Experience Map | ADOPTED FOR 1.2 — cible **Courtier** | NOT MATERIALIZED |
+| Customer Journey Map | ADOPTED FOR 1.2 — cible **Prospect → Client assuré** | NOT MATERIALIZED |
+
+**ADOPTED** (personas / maps) signifie que Morris valide leur **utilisation pédagogique** dans le livrable 1.2.
+**ADOPTED** ne signifie **pas** : user research empirique ; profil statistiquement démontré ; persona terrain validé ; 1.2 VALIDATED.

 ---

 ## 1. Objectif du 1.2

-Identifier les profils utilisateurs pertinents pour le cas pédagogique CRM Assurance Courtage, comprendre leurs objectifs et attentes **à partir des informations disponibles**, et préparer des **proto-personas de cadrage** exploitables pour une future matérialisation (PPTX / Miro) après revue Morris.
+Identifier les profils utilisateurs pertinents pour le cas pédagogique CRM Assurance Courtage, comprendre leurs objectifs et attentes **à partir des informations disponibles**, et préparer des **proto-personas de cadrage** ainsi que le contrat des maps adoptées, avant matérialisation Miro dans un cycle dédié.

 Ce cycle doit :

 - rendre explicites les hypothèses faute d’entretiens réels ;
-- distinguer faits sourcés, inférences et informations non disponibles ;
-- ne pas transformer l’analyse en spécification fonctionnelle, backlog ou architecture.
+- distinguer faits sourcés, inférences et décisions Morris ;
+- ne pas transformer l’analyse en spécification fonctionnelle, backlog, interfaces ou architecture.

 **Ce cycle ne constitue PAS une user research empirique.**

@@ -42,37 +49,43 @@ Ce cycle doit :
 |-----------|---------------|
 | **EXPLICITE DANS LE BRIEF** | Information affirmée directement par le brief (ou reprise telle quelle du 1.1 validé) |
 | **INFÉRENCE DE CADRAGE** | Déduction raisonnable à partir du brief, clairement marquée |
+| **DÉCISION MORRIS** | Arbitrage pédagogique / de modélisation du 1.2, distinct du fait source |
 | **NON RENSEIGNÉ** | Information non fournie — **non inventée** |

 Aucun entretien, questionnaire ou observation terrain n’est fourni.
 Aucun verbatim réel n’est disponible.

-Les profils produits sont donc des **PROTO-PERSONAS DE CADRAGE**. Ils devront rester présentés comme tels tant qu’aucune recherche utilisateur réelle ne les a enrichis.
+Les profils sont des **PROTO-PERSONAS DE CADRAGE** (BRIEF-DERIVED / NO FIELD INTERVIEWS / NO OBSERVED AS-IS), adoptés pour le 1.2 pédagogique.

 ---

 ## 3. Utilisateurs et parties prenantes

-| Profil | Qualification | Preuves (sources) |
-|--------|---------------|-------------------|
-| **Courtier** | Utilisateur métier interne principal clairement explicite | Suit le cycle de vie client ; devis ; relances ; rendez-vous ; souscription ; renouvellement / résiliation ; activités documentaires ; gestion de sinistres ; suivi relationnel — **EXPLICITE DANS LE BRIEF** |
-| **Prospect / futur client** | Population externe du parcours commercial. Le statut d’utilisateur direct de **toutes** les interfaces du futur CRM n’est **pas** démontré | Première prise de contact ; devis ; rendez-vous ; compréhension du besoin ; proposition ; souscription ; prise de rendez-vous directe — **EXPLICITE DANS LE BRIEF** |
-| **Client** | Population externe concernée par contrats, suivi et transparence | Contrats ; historique des échanges ; historique des contrats ; transparence ; sinistres ; renouvellement / résiliation — **EXPLICITE DANS LE BRIEF** |
-| **Directeur du cabinet** | Partie prenante décisionnaire / sponsor métier. **Ne pas** le transformer automatiquement en persona utilisateur final | Porte les objectifs business ; souhaite différenciation ; demande de performance commerciale / KPIs dans le scénario — **EXPLICITE DANS LE BRIEF**. L’usage personnel du dashboard par le directeur n’est **pas** explicitement démontré — **NON RENSEIGNÉ** |
+| Profil | Qualification | Preuves / statut |
+|--------|---------------|------------------|
+| **Courtier** | Utilisateur métier interne principal | Suit le cycle de vie client ; devis ; relances ; rendez-vous ; souscription ; renouvellement / résiliation ; documents ; sinistres ; suivi relationnel — **EXPLICITE DANS LE BRIEF** |
+| **Directeur du cabinet** | Partie prenante décisionnaire **et** proto-persona de pilotage **adopté par Morris** | Objectifs business, différenciation, KPIs du scénario — **EXPLICITE DANS LE BRIEF**. Usage personnel du dashboard = **INFÉRENCE DE CADRAGE FORTE + DÉCISION MORRIS** — **pas** un fait explicite du brief |
+| **Prospect** | État métier initial (avant souscription) du persona externe longitudinal | Contact ; devis ; RDV ; besoin ; proposition ; souscription — **EXPLICITE DANS LE BRIEF**. Usage direct de toutes les interfaces du futur CRM — **NON RENSEIGNÉ** |
+| **Client** | État métier ultérieur (après souscription) du **même** persona externe | Contrats ; échanges ; historique ; transparence ; documents ; sinistres ; renouvellement / résiliation — **EXPLICITE DANS LE BRIEF** |
+
+**Sources vs modélisation :** le brief distingue les états métier Prospect et Client.
+**Modélisation persona 1.2 (décision Morris) :** ces deux états sont réunis dans un **seul** proto-persona longitudinal **Prospect → Client assuré**.

 ---

-## 4. Choix des proto-personas candidats
+## 4. Choix des proto-personas adoptés pour le 1.2
+
+Ancienne sélection (brouillon initial) : Courtier / Client / Prospect (candidats) ; Directeur = stakeholder only.

-Trois profils candidats sont proposés pour satisfaire la plage pédagogique **2–3 profils** exigée par le brief (1.2.1). Ils ne deviennent **pas** « personas validés » dans ce cycle.
+**Sélection adoptée (décision Morris) :**

 | Candidat | Profil | Statut |
 |----------|--------|--------|
-| **A** | Courtier | PRIMARY USER CANDIDATE |
-| **B** | Client assuré | EXTERNAL USER / BENEFICIARY CANDIDATE |
-| **C** | Prospect / futur client | EXTERNAL USER / BENEFICIARY CANDIDATE |
+| **A** | Courtier | **ADOPTED PROTO-PERSONA** — PRIMARY / OPERATIONAL USER |
+| **B** | Directeur du cabinet | **ADOPTED PROTO-PERSONA** — MANAGEMENT / PILOTING USER |
+| **C** | Prospect → Client assuré | **ADOPTED PROTO-PERSONA** — EXTERNAL LIFECYCLE USER / BENEFICIARY |

-Aucun de ces profils n’est marqué ADOPTED, VALIDATED ou FINAL.
+La fusion Prospect → Client est une **DÉCISION MORRIS DE MODÉLISATION DU 1.2**. Elle ne prouve pas que tous les prospects et clients ont exactement les mêmes besoins.

 ---

@@ -81,46 +94,91 @@ Aucun de ces profils n’est marqué ADOPTED, VALIDATED ou FINAL.
 | Champ | Contenu | Niveau de preuve |
 |-------|---------|------------------|
 | **Rôle** | Courtier du cabinet | EXPLICITE DANS LE BRIEF |
+| **Angle** | Métier / opérations / relation client | EXPLICITE DANS LE BRIEF |
 | **Relation au projet** | Utilisateur métier interne principal | EXPLICITE DANS LE BRIEF |
-| **Objectifs supportés** | Suivre le cycle de vie client ; centraliser le suivi prospects / clients / contrats ; gérer devis, relances et rendez-vous ; accompagner la souscription ; suivre renouvellements / résiliations ; gérer pièces et documents ; suivre les sinistres ; améliorer traçabilité et réactivité | EXPLICITE DANS LE BRIEF (objectifs / capacités du scénario) |
-| **Besoins déduits** | Retrouver l’information de suivi utile ; conserver une vision cohérente des étapes du dossier ; limiter les tâches administratives ; disposer de l’historique nécessaire à la relation personnalisée | **INFÉRENCE DE CADRAGE À PARTIR DES OBJECTIFS DU BRIEF** |
+| **Objectifs / capacités supportés** | Suivi du cycle client ; devis ; relances ; rendez-vous ; souscription ; renouvellement / résiliation ; collecte de pièces ; documents ; sinistres ; traçabilité ; réactivité ; personnalisation soutenue par l’historique | EXPLICITE DANS LE BRIEF |
+| **Besoins déduits** | Retrouver l’information de suivi utile ; vision cohérente des étapes du dossier ; limiter les tâches administratives ; disposer de l’historique pour personnaliser la relation | **INFÉRENCE DE CADRAGE** |

-**Non renseigné (non inventé) :** outil actuellement utilisé ; temps perdu ; nombre de dossiers ; âge ; séniorité ; aisance numérique ; organisation quotidienne ; canal favori ; rémunération ; localisation.
+**Non renseigné (non inventé) :** outil actuel ; temps perdu ; volumes ; âge ; séniorité ; aisance numérique ; organisation quotidienne ; canal favori ; rémunération ; localisation.

 **Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
 Le courtier a besoin d’un suivi centralisé du parcours commercial et administratif pour rester réactif et personnaliser la relation sans charge administrative excessive.

 ---

-## 6. Proto-persona B — Client assuré
+## 6. Proto-persona B — Directeur du cabinet

 | Champ | Contenu | Niveau de preuve |
 |-------|---------|------------------|
-| **Rôle** | Client disposant d’un ou plusieurs contrats | EXPLICITE DANS LE BRIEF (population « clients » ; contrats) |
-| **Objectifs / attentes soutenus** | Bénéficier d’une relation de proximité ; recevoir une offre personnalisée selon profil / besoin discuté ; accéder avec transparence à l’historique des échanges et contrats ; disposer d’un suivi autour du contrat ; être concerné par renouvellement, résiliation ou sinistre selon le scénario | EXPLICITE DANS LE BRIEF |
-| **Besoins déduits** | Comprendre où en est son suivi ; retrouver les informations utiles liées à ses contrats et échanges ; bénéficier d’une continuité relationnelle | **INFÉRENCE DE CADRAGE** |
+| **Rôle** | Directeur du cabinet | EXPLICITE DANS LE BRIEF |
+| **Angle** | Pilotage / supervision / performance / vision business | EXPLICITE DANS LE BRIEF (objectifs) + **INFÉRENCE** (usage opérationnel de pilotage) |
+| **Relation au projet** | Partie prenante décisionnaire et proto-persona de pilotage **adopté par Morris** | **DÉCISION MORRIS** |
+
+### Faits explicites du brief
+
+- directeur du cabinet ;
+- souhaite se différencier face aux assureurs en ligne ;
+- insiste sur proximité, personnalisation, transparence ;
+- objectifs : réduction des tâches administratives ; amélioration de la traçabilité ; renforcement de la confiance ; augmentation de la rétention ;
+- le scénario demande un tableau de bord de performance commerciale comprenant : taux de conversion ; panier moyen ; satisfaction client.
+
+### Inférences de cadrage
+
+- besoin de visibilité consolidée ;
+- besoin de suivre les indicateurs ;
+- besoin d’apprécier la performance commerciale ;
+- besoin de supervision globale de l’activité ;
+- **usage du dashboard par le directeur**.
+
+Ces éléments sont des **INFÉRENCES DE CADRAGE**. Le brief **ne dit pas littéralement** que le directeur consulte personnellement le dashboard.
+
+### Décision Morris

-**Non renseigné (non inventé) :** fréquence de connexion ; appareil utilisé ; âge ; profession ; revenus ; niveau digital ; type exact de contrat détenu ; composition familiale.
+Le Directeur est retenu comme proto-persona de pilotage malgré l’absence de phrase explicite indiquant qu’il utilise personnellement le dashboard.
+Fondement : **INFÉRENCE DE CADRAGE FORTE** (dashboard + KPIs + objectifs de différenciation / traçabilité / réactivité / confiance / rétention) + **DÉCISION MORRIS**.
+
+### Non renseigné (non inventé)
+
+Fréquence de consultation ; appareil ; niveau digital ; mode précis de management ; taille d’équipe ; objectifs chiffrés ; droits exacts dans l’application.

 **Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
-Le client attend une relation de proximité et une transparence sur l’historique de ses échanges et contrats.
+Le directeur a besoin d’une vision consolidée de la performance commerciale pour piloter différenciation, traçabilité, confiance et rétention.

 ---

-## 7. Proto-persona C — Prospect / futur client
+## 7. Proto-persona C — Prospect → Client assuré

-| Champ | Contenu | Niveau de preuve |
-|-------|---------|------------------|
-| **Rôle** | Personne entrant dans le parcours avant souscription | EXPLICITE DANS LE BRIEF |
-| **Objectifs / attentes supportés** | Prendre contact ; obtenir un devis ; prendre / participer à un rendez-vous ; exprimer ses besoins ; recevoir une proposition personnalisée ; avancer vers une souscription | EXPLICITE DANS LE BRIEF |
-| **Attentes liées aux axes du brief** | Proximité ; réactivité ; personnalisation ; transparence | EXPLICITE DANS LE BRIEF (axes / intention) |
+Un **seul** proto-persona externe longitudinal.
+**DÉCISION MORRIS DE MODÉLISATION DU 1.2.**
+
+Objectif : montrer l’évolution des besoins **avant** et **après** souscription — **sans** conclure à deux applications ou deux interfaces distinctes.
+
+### État 1 — Prospect
+
+| Élément | Contenu | Niveau de preuve |
+|---------|---------|------------------|
+| **Étapes / attentes soutenues** | Prise de contact ; devis ; rendez-vous ; expression / compréhension du besoin ; proposition personnalisée ; progression vers souscription | EXPLICITE DANS LE BRIEF |
+| **Axes** | Proximité ; réactivité ; personnalisation ; transparence | EXPLICITE DANS LE BRIEF |
+
+**Réserve :** l’usage direct du futur CRM par le prospect n’est **pas** démontré — **NON RENSEIGNÉ**.

-**Réserve obligatoire :** le brief ne démontre **pas** que le prospect utilise directement toutes les interfaces du futur CRM. — **NON RENSEIGNÉ** pour l’usage interface complet.
+### État 2 — Client assuré

-**Non renseigné (non inventé) :** comportement d’achat ; comparateurs utilisés ; budget ; canal préféré hors prise de rendez-vous directe citée ; âge ; profession ; niveau d’urgence ; nombre d’assureurs comparés.
+| Élément | Contenu | Niveau de preuve |
+|---------|---------|------------------|
+| **Étapes / attentes soutenues** | Vie du contrat ; échanges ; documents ; transparence / historique ; sinistre éventuel ; renouvellement ; résiliation | EXPLICITE DANS LE BRIEF |
+
+L’accès en temps réel à l’historique des échanges et contrats est un signal d’interaction externe important (**EXPLICITE DANS LE BRIEF**) ; il **ne définit pas** l’architecture ni l’interface exacte — **NOT DECIDED** / hors scope 1.2.
+
+### Continuité Prospect → Client
+
+Les besoins évoluent entre entrée en relation et vie du contrat.
+On pourra **plus tard** comparer informations accessibles, besoins, actions, points de contact et permissions candidates — **ces choix ne sont PAS décidés dans le 1.2**.
+
+**Non renseigné (non inventé) :** démographie ; budget ; comparateurs ; canaux non cités ; fréquence ; appareil ; forme exacte de l’accès client.

 **Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
-Le prospect cherche une entrée en relation simple, une proposition personnalisée et une progression claire vers la souscription.
+La même personne passe d’une entrée en relation (prospect) à une relation de suivi contractualisée (client), avec une continuité attendue de proximité, personnalisation et transparence.

 ---

@@ -128,10 +186,10 @@ Le prospect cherche une entrée en relation simple, une proposition personnalis

 | Profil | Objectifs | Attentes | Besoins / enjeux | Niveau de preuve |
 |--------|-----------|----------|------------------|------------------|
-| Courtier | Suivi cycle client ; centralisation ; devis / RDV / souscription ; documents ; sinistres ; traçabilité / réactivité | Relation personnalisée soutenue par l’historique | Vision cohérente du dossier ; charge admin. réduite | EXPLICIT BRIEF + INFERENCE |
-| Client | Suivi contrats ; transparence ; continuité | Proximité ; personnalisation ; transparence | Comprendre l’état du suivi ; retrouver infos utiles | EXPLICIT BRIEF + INFERENCE |
-| Prospect | Contact → devis → RDV → proposition → souscription | Proximité ; réactivité ; personnalisation ; transparence | Entrée en relation simple ; progression claire | EXPLICIT BRIEF + INFERENCE |
-| Directeur | Objectifs business / différenciation / KPIs scénario | Performance commerciale | Non traité comme persona utilisateur final | EXPLICIT BRIEF ; usage dashboard = NOT PROVIDED |
+| Courtier | Suivi cycle client ; devis / RDV / souscription ; documents ; sinistres ; traçabilité / réactivité | Personnalisation soutenue par l’historique | Vision cohérente du dossier ; charge admin. réduite | EXPLICIT BRIEF + INFERENCE |
+| Directeur | Différenciation ; objectifs business ; KPIs (conversion, panier moyen, satisfaction) | Pilotage / performance | Visibilité consolidée ; suivi des indicateurs | EXPLICIT BRIEF + INFERENCE + DÉCISION MORRIS (usage dashboard) |
+| Prospect → Client — état Prospect | Contact → devis → RDV → proposition → souscription | Proximité ; réactivité ; personnalisation ; transparence | Entrée en relation simple ; progression claire | EXPLICIT BRIEF + INFERENCE |
+| Prospect → Client — état Client | Suivi contrats ; échanges ; documents ; sinistre éventuel ; renouvellement / résiliation | Transparence ; confiance ; continuité | Comprendre l’état du suivi ; retrouver infos utiles | EXPLICIT BRIEF + INFERENCE |

 Aucune user story. Aucun backlog fonctionnel.

@@ -140,13 +198,13 @@ Aucune user story. Aucun backlog fonctionnel.
 ## 9. Difficultés / pain points

 Aucune observation AS-IS utilisateur n’est disponible.
-Aucune affirmation du type « les courtiers se plaignent de… », « les clients rencontrent actuellement… » ou « les utilisateurs disent… » n’est formulée.
+Aucune affirmation du type « les utilisateurs disent… » n’est formulée.

 ### Enjeux utilisateurs déduits du brief

-**Courtier :** charge administrative à réduire ; traçabilité à améliorer ; besoin de réactivité ; continuité du suivi.
-**Client :** besoin de transparence ; besoin de confiance ; continuité relationnelle.
-**Prospect :** simplicité d’entrée en relation ; réactivité ; personnalisation du parcours.
+**Courtier :** charge administrative à réduire ; traçabilité ; réactivité ; continuité du suivi.
+**Directeur :** besoin de visibilité et de pilotage déduit des objectifs et KPIs ; performance commerciale ; satisfaction ; rétention.
+**Prospect → Client :** fluidité de l’entrée en relation ; personnalisation ; transparence ; confiance ; continuité de la relation.

 **Qualification :** DÉDUITS DU BRIEF — NON OBSERVÉS SUR LE TERRAIN.

@@ -154,59 +212,84 @@ Aucune affirmation du type « les courtiers se plaignent de… », « les client

 ## 10. Inconnues et limites

-Limites qui affectent réellement la lecture du 1.2 :
-
 - aucun entretien ou questionnaire réel ;
 - aucune observation terrain ;
-- aucune donnée démographique ;
-- aucune information fiable sur les outils actuels ;
-- usage direct du futur CRM par le prospect à confirmer au stade de conception ;
-- usage personnel du tableau de bord par le directeur non démontré ;
-- frustrations actuelles non observées.
+- aucune donnée démographique fiable ;
+- aucun outil actuel connu ;
+- usage personnel du dashboard par le Directeur = **inférence** (pas fait explicite) ;
+- usage direct du CRM par le Prospect = **non démontré** ;
+- forme exacte de l’accès Client = **non décidée** ;
+- interfaces et permissions = **hors scope** ;
+- pensées / émotions des futures maps = **hypothèses** si non sourcées.

 ---

-## 11. Parcours utilisateur optionnel
+## 11. Experience Map — Courtier

-| Livrable pédagogique | Exigence brief | Qualification dans ce cycle |
-|----------------------|----------------|-----------------------------|
-| Experience Map | Facultative (1.2.2 / 1.2.3) | **CANDIDATE RECOMMENDATION — NOT ADOPTED** |
-| Customer Journey Map | Facultative (1.2.2 / 1.2.3) | **OPTIONAL / NOT ADOPTED** |
+| Champ | Valeur |
+|-------|--------|
+| **Statut** | **ADOPTED FOR 1.2** — COURTIER — **NOT MATERIALIZED** |
+| **Persona cible** | Courtier |
+| **Objet futur** | Expérience métier globale du courtier au fil de la relation client — **sans** limitation à une interface logicielle précise |
+| **Cadre futur** | Expérience opérationnelle ; étapes métier ; actions ; besoins ; enjeux ; points de continuité ; pensées / émotions **uniquement** si qualifiées comme hypothèses lorsque non sourcées |
+| **Nature** | CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF — **NON AS-IS OBSERVÉ** |

-**Justification analytique (recommandation méthodologique — PAS une décision Morris) :**
-Le projet décrit un parcours **cible** sans produit existant observé. Une Experience Map centrée sur l’expérience du Courtier (ou sur deux profils complémentaires) paraît méthodologiquement plus cohérente qu’une Customer Journey Map centrée sur les interactions avec un produit ou service **existant**.
+Aucune Emotion Map / Experience Map n’est créée dans ce cycle.
+Aucune émotion observée n’est inventée.
+
+---

-Aucune map n’est créée dans ce cycle.
+## 12. Customer Journey Map — Prospect → Client
+
+| Champ | Valeur |
+|-------|--------|
+| **Statut** | **ADOPTED FOR 1.2** — PROSPECT → CLIENT — **NOT MATERIALIZED** |
+| **Persona cible** | Prospect → Client assuré |
+| **Objet** | Relation du persona avec le **service de courtage / cabinet** (service de référence du scénario) |
+| **Transition structurante** | Prospect → souscription → Client |
+| **Séquence cible (contrat futur)** | Entrée en relation → prospect → devis / rendez-vous → compréhension du besoin → proposition → souscription → client → vie du contrat → échanges / documents → sinistre éventuel → renouvellement / résiliation |
+| **Nature** | CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF — **NON AS-IS OBSERVÉ** |
+
+**Règles :**
+
+- La Customer Journey Map **ne suppose PAS** que le futur CRM existe déjà ou est observé.
+- Elle cartographie l’expérience avec le **service de courtage**, pas avec un produit CRM déjà déployé.
+- **Ne PAS** décider ici : interface Prospect distincte ; interface Client distincte ; accès Prospect direct au CRM ; accès Client à toutes les fonctions ; écrans ; permissions ; composants UI.
+
+Aucune Customer Journey Map n’est créée dans ce cycle.

 ---

-## 12. Miro
+## 13. Miro

-Aucune matérialisation Miro n’est réalisée dans ce premier cycle 1.2.
+| Champ | Valeur |
+|-------|--------|
+| **État de ce cycle** | **NOT MODIFIED** — **NOT MATERIALIZED** |

 Trajectoire proposée :

-1. validation Morris du contenu des proto-personas ;
-2. cycle Miro natif dédié ;
-3. création de fiches personas éditables ;
-4. éventuelle Experience Map seulement après décision Morris.
+1. alignement Git avec les décisions Morris (présent cycle) ;
+2. revue ChatGPT du contenu ;
+3. si revue PASS : cycle Miro dédié (GO Morris séparé) ;
+4. matérialisation envisagée : Persona Courtier ; Persona Directeur ; Persona Prospect → Client ; Experience Map Courtier ; Customer Journey Map Prospect → Client ;
+5. revue Miro / contenu ;
+6. décision Morris ultérieure sur validation globale du 1.2.

-Miro n’est donc **pas** modifié.
+Le présent alignement **ne constitue PAS** le GO du cycle Miro.

 ---

-## 13. Synthèse 1.2
+## 14. Synthèse 1.2

 | Point | État |
 |-------|------|
 | **1.2** | OPENED — WORKING ANALYSIS |
-| Courtier | PROTO-PERSONA CANDIDATE |
-| Client | PROTO-PERSONA CANDIDATE |
-| Prospect | PROTO-PERSONA CANDIDATE |
-| Directeur | STAKEHOLDER — NOT PERSONA BY DEFAULT |
+| Courtier | ADOPTED PROTO-PERSONA |
+| Directeur | ADOPTED PROTO-PERSONA |
+| Prospect → Client | ADOPTED PROTO-PERSONA |
 | Evidence | BRIEF-DERIVED / NO FIELD INTERVIEWS |
-| Experience Map | CANDIDATE / NOT ADOPTED |
-| Customer Journey Map | OPTIONAL / NOT ADOPTED |
+| Experience Map Courtier | ADOPTED / NOT MATERIALIZED |
+| Customer Journey Map Prospect → Client | ADOPTED / NOT MATERIALIZED |
 | Miro | NOT MATERIALIZED |
 | Architecture | NOT DECIDED |
 | Stack | NOT DECIDED |
````

---

## Validations

| Check | Résultat |
|-------|----------|
| 1.2 OPENED | PASS |
| 1.1 VALIDATED | PASS |
| Courtier ADOPTED | PASS |
| Directeur ADOPTED | PASS |
| Prospect → Client un seul persona | PASS |
| Anciennes fiches séparées fusionnées | PASS |
| Directeur plus « NOT PERSONA BY DEFAULT » | PASS |
| Experience Map ADOPTED Courtier / NOT MATERIALIZED | PASS |
| CJM ADOPTED Prospect→Client / NOT MATERIALIZED | PASS |
| Miro NOT MATERIALIZED | PASS |
| Usage Directeur = inférence | PASS |
| Usage Prospect CRM = non démontré | PASS |
| Aucune interface imposée | PASS |
| Architecture / Stack NOT DECIDED | PASS |
| 1.3 NOT OPENED | PASS |
| Exactement 2 fichiers projet | PASS |
| git diff --check | PASS |
| Commit nouveau (non amend) | PASS |
| Push projet | NOT DONE |
| PR | NOT CREATED |
| Review Handoff | PASS — HANDOFF UPDATED — REMOTE VERIFIED |

---

## Commit

- SHA : `03c14eb8887807e7fd9428554ffc6a55c1b99612`
- Message : `docs(crm-assurance-courtage): align 1.2 personas and journey maps`
- Parent : `bfd7fe55` (non amendé)

Status :

```
M .tmp-sfia-review/chatgpt-review.md
```

---

## Réserves

- Proto-personas pédagogiques, non empiriques
- Maps adoptées mais non matérialisées
- GO Miro séparé requis après REVIEW PASS

---


## Review Handoff

- Mode : publish-in-cycle
- Branche : `sfia/review-handoff`
- Path : `sfia-review-handoff/latest-chatgpt-review.md`
- Tip remote : `2b92b1199aa5a5849bf8cb8237f7306b4c2e6a87`
- Blob : `55f3f830f0c468fc49d1a2a2d84457f552008091`
- Verdict : HANDOFF UPDATED — REMOTE VERIFIED
- Push branche CRM : NOT DONE
- PR : NOT CREATED


## Verdict

**READY FOR CHATGPT REVIEW — CRM 1.2 PERSONAS AND JOURNEY DECISIONS ALIGNED**
