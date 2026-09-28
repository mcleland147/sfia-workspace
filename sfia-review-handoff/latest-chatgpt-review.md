# ChatGPT Review Pack — FULL

## Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure / timezone** | 2026-09-29 00:06:20 CEST |
| **Cycle** | Cadrage projet — alignement 1.1 / 1.2 sur BMC validé groupe |
| **Profil** | Standard |
| **Typologie** | DOC / visual knowledge artifact |
| **Projet** | CRM Assurance Courtage |
| **Baseline** | SFIA v2.6 |
| **SFIA Studio Convergence** | N/A |
| **Fake / Real** | N/A |

---

## Git Truth initial

| Check | Valeur |
|-------|--------|
| **Workspace** | `/Users/l/Projects/sfia-worktree-crm-assurance` |
| **Branche** | `docs/crm-assurance-courtage-1-2-user-discovery-01` |
| **HEAD initial** | `4136e38f48bbbfebe40e1836a40ed1726b7fb067` |
| **origin/main** | `6f47f74dc9b515c4c79624b21772223ba02c76cd` |
| **Base CRM historique** | `b7fdf712073257f9fc64c294ac7e68af2cd64464` |
| **Dirt tolérée** | `.tmp-sfia-review/**` uniquement |
| **Git Truth** | **PASS** |

### Drift main / CRM

```text
git diff --name-status b7fdf712..origin/main -- projects/crm-assurance-courtage/
(aucune sortie)
```

**Main CRM drift : NONE** — les commits main depuis la base CRM touchent `projects/sfia-studio/**` uniquement. Pas de rebase / merge effectués.

---

## Sources SFIA lues

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
4. `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md`
5. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
6. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
7. `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
8. `scripts/sfia/README.md`
9. `projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md`
10. `projects/crm-assurance-courtage/01-cadrage/01-01-analyse-besoins-metiers.md`
11. `projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md`

---

## Source métier groupe utilisée

**Business Model Canvas - CRM2 - Validé** — Groupe de travail — **2026-09-28**

Transcription autoritaire fournie dans le GO (pas de reconstruction mémoire).

### Transcription BMC cible

**PARTENAIRES CLÉS**
- Les compagnies d'assurance partenaires
- L'équipe de dev no code

**ACTIVITÉS CLÉS**
- Prospection : Devis
- Relances / rendez-vous
- Gestion de contrat : Souscription / Renouvellement / Résiliation
- Gestion documentaire
- Suivi des sinistres
- Pilotage commercial
- Conseil personnalisé

**RESSOURCES CLÉS**
- Courtiers
- Informations prospects / clients / contrats (base de données)
- Effectifs / systèmes : Non renseignés dans les sources fournies

**PROPOSITION DE VALEUR**
- Proximité : prise de rendez-vous directe
- Personnalisation : offres adaptées au profil et aux besoins discutés en rendez-vous
- Transparence et confiance : historique des échanges et des contrats accessible en temps réel
- Centralisation du suivi prospects / clients / contrats
- Espace sécurisé (pour les documents)

**RELATIONS CLIENTS**
- Accompagnement personnalisé du client sur le cycle de vie du contrat (depuis souscription jusqu'à résiliation)

**CANAUX**
- Rendez-vous physique ; Rendez-vous Visio ; Téléphone ; Espace client ; Email

**SEGMENTS CLIENTS**
- TPE/PME ; Client particulier (famille/étudiant)

**STRUCTURE DE COÛTS / SOURCES DE REVENUS**
- aucun contenu validé — mentions éditoriales « Non renseigné » conservées

---

## Miro état avant

| Check | Valeur |
|-------|--------|
| Board | https://miro.com/app/board/uXjVHiWX64c=/ |
| Objets | 321 |
| Frames | 7 |
| Loose | 0 |
| BMC ID | `3458764685039847893` (31) |
| BPMN ID | `3458764685039847894` (22) |
| Courtier | `3458764685164456040` (19) |
| Directeur | `3458764685164456041` (18) |
| Prospect | `3458764685164456042` (22) |
| Experience Map | `3458764685164458754` (89) |
| CJM | `3458764685164510320` (113) |

Pré-état BMC partiellement modifié (accepté) : partenaires / activités déjà proches ; proposition / relations / canaux / segments encore anciens.

---

## BMC Miro — avant (synthèse des blocs texte)

| Bloc | Avant (extrait) |
|------|-----------------|
| Source | Source : brief pédagogique CRM |
| Partenaires | Les compagnies d'assurrance partenaire ; L'équipe de dev no code |
| Activités | … Pilotage commercial ; Conseille personnalisé ? |
| Ressources | Courtiers ; Infos … ; Effectifs non renseignés |
| Proposition | Proximité / Personnalisation / Transparence (ancienne formulation) + centralisation |
| Relations | Rendez-vous ; Personnalisation de l'accompagnement ; Historique |
| Canaux | Prise de RDV directe ; Autres canaux non renseignés |
| Segments | Prospects / Clients (+ note catégories contrats) |

## BMC Miro — après (complet — textes)

| Bloc | Après |
|------|-------|
| Source | Source : brief pédagogique CRM · BMC consolidé et validé par le groupe de travail — 2026-09-28 |
| Partenaires | Les compagnies d'assurance partenaires / L'équipe de dev no code |
| Activités | Prospection : Devis ; Relances / rendez-vous ; Gestion de contrat : Souscription / Renouvellement / Résiliation ; Gestion documentaire ; Suivi des sinistres ; Pilotage commercial ; Conseil personnalisé |
| Ressources | inchangé (déjà conforme) |
| Proposition | Proximité ; Personnalisation ; Transparence et confiance ; Centralisation du suivi ; Espace sécurisé (pour les documents) |
| Relations | Accompagnement personnalisé du client sur le cycle de vie du contrat (depuis souscription jusqu'à résiliation) |
| Canaux | Rendez-vous physique ; Rendez-vous Visio ; Téléphone ; Espace client ; Email |
| Segments | TPE/PME ; Client particulier (famille/étudiant) |
| Coûts / Revenus | Non renseigné(e) — conservé |

### Widgets BMC modifiés (data-miro-id)

`7897` source · `7900` partenaires · `7903` activités · `7909` proposition · `7912` relations · `7915` canaux · `7918` segments

(Ressources `7906` déjà alignées — pas de delta utile.)

---

## Persona Courtier — avant / après

| Champ | Avant | Après |
|-------|-------|-------|
| Capacités (`6054`) | Suivi du cycle de vie client · devis · relances · rendez-vous · souscription · … | **Prospection · devis · relances · rendez-vous · conseil personnalisé · souscription · …** |

Reste inchangé (rôle, besoins, non renseigné, synthèse).

## Persona Directeur

**INCHANGÉ** — frame `3458764685164456041` non mutée.

## Persona Prospect → Client — avant / après

| Widget | Avant | Après |
|--------|-------|-------|
| `6085` | UNE même personne… DÉCISION MORRIS DE MODÉLISATION | + Segments clients BMC groupe : TPE/PME · Client particulier (famille/étudiant) |
| `6097` | … Ne décide PAS : … canaux non sourcés | Canaux validés groupe listés ; apps/portails/écrans/permissions/UI/modalités NON DÉCIDÉS |

## Experience Map phase 1 — avant / après

| Widget | Avant | Après |
|--------|-------|-------|
| `8776` | 1. Contact / qualification | 1. Prospection / contact / qualification |
| `8778` | Prendre contact ; qualifier le besoin initial | Prospecter ; prendre contact ; qualifier le besoin initial |
| `8780` | Suivi cohérent dès l'entrée | Suivi cohérent dès la prospection / entrée en relation |

Phases 2–6, enjeux, preuve, émotions : **inchangés**.

## CJM — sections modifiées avant / après

| Widget | Avant | Après |
|--------|-------|-------|
| `0335` label | POINTS DE CONTACT SOURCÉS | POINTS DE CONTACT / CANAUX VALIDÉS |
| `0347` col1 | RDV directe ; autres canaux NON RENSEIGNÉS | Canaux validés groupe : RDV physique · RDV Visio · Téléphone · Email · Espace client |
| `0360`–`0435` (autres cols contact) | formulations « non renseigné » / canal exact | Canaux groupe — affectation par phase non précisée |
| `0406` Vie contrat action | Suivre le contrat | Accompagnement personnalisé sur le cycle de vie du contrat |
| `0418` Échanges/docs action | Échanges ; documents ; historique temps réel | Échanges · documents · espace sécurisé documentaire · historique temps réel |
| `0438` footer | Ne décide PAS : interface Prospect · … | Canaux validés groupe… Espace sécurisé… Écrans/permissions/UI NON DÉCIDÉS. Émotion NON RENSEIGNÉE. |

## BPMN

**INCHANGÉ** — frame `3458764685039847894` non mutée. Prospection = activité amont hors périmètre BPMN (tracé dans Git 1.1 uniquement).

---

## Inventaire Miro après

| Check | Valeur |
|-------|--------|
| total_items | **321** |
| frames | **7** |
| loose | **0** |
| item counts | BMC 31 · BPMN 22 · Courtier 19 · Directeur 18 · Prospect 22 · EM 89 · CJM 113 |
| Create | **0** |
| Delete | **0** |
| IDs frames | inchangés |

Mutations = updates texte uniquement (BMC 8 dont 1 fix segments ; Courtier 1 ; Prospect 2 ; EM 3 ; CJM 12).

---

## Doctrine projet — sections modifiées (complètes)

### §2 — règle ajoutée

```markdown
**Règle de supersession groupe :** lorsqu'un livrable préparatoire est repris et validé par le groupe de travail, cette version **supersède** le contenu préparatoire correspondant et doit être retranscrite dans Git. Cela ne crée **pas** une nouvelle classification méthodologique à plusieurs couches.
```

### §11 — État actuel (complet)

```markdown
## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED (2026-09-28)** |
| 1.1 | **VALIDATED** — BMC réaligné sur version groupe validée 2026-09-28 |
| Étape suivante | **1.3 Veille technologique et réglementaire — NOT OPENED** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
| Prochain objectif | Attendre le GO Morris pour ouvrir le 1.3 après revue de l'alignement 1.1 / 1.2 sur le BMC groupe |
```

---

## Document 1.1 — sections modifiées (points clés complets)

- Métadonnées : source consolidation BMC groupe ; **1.2 = VALIDATED** ; BMC réaligné.
- Source de vérité : supersession BMC groupe 2026-09-28.
- Portrait : segments TPE/PME · Client particulier.
- §4 processus : Prospection → … → renouvellement / résiliation ; conseil personnalisé ; espace sécurisé.
- §6.2 : Transparence et confiance ; Centralisation et espace sécurisé.
- §8 acteurs : partenaires clés BMC groupe.
- §9 BMC tableau entier remplacé par version groupe.
- §10 BPMN : note prospection amont hors BPMN.
- §11 synthèse : 1.2 VALIDATED ; 1.3 NOT OPENED ; BMC VALIDATED GROUP VERSION.

---

## Document 1.2 — sections modifiées (complètes pour alignement)

### Statut

**1.2 — VALIDATED** — décision Morris **2026-09-28**

### Section Alignement groupe (complète)

```markdown
## Alignement groupe — BMC validé 2026-09-28

Traçabilité des impacts du BMC groupe sur les artefacts 1.2 (sans nouvelle couche méthodologique) :

### Courtier
- **prospection** ajoutée aux capacités ;
- **conseil personnalisé** confirmé comme activité ;
- reste du persona inchangé (pas de démographie, verbatim ni usage technique inventé).

### Prospect → Client assuré
- persona longitudinal **conservé** (une seule personne, deux états) ;
- segments clients associés : **TPE/PME** ; **Client particulier (famille/étudiant)** ;
- canaux validés : RDV physique ; RDV Visio ; téléphone ; email ; **espace client** ;
- **aucune** multiplication automatique des personas ;
- nombre d'applications / portails / écrans / permissions / UI / modalités exactes d'accès : **NON DÉCIDÉS**.

### Experience Map — Courtier
- première phase devient : **Prospection / contact / qualification** ;
- reste des phases inchangé ;
- Traçabilité / Continuité / niveaux de preuve / émotions : inchangés.

### Customer Journey Map — Prospect → Client
- canaux groupe intégrés **transversalement** ;
- espace sécurisé documentaire intégré au suivi documentaire ;
- pas de conception détaillée des écrans / permissions / UI.

### Directeur
- **inchangé**.
```

Émotions NON RENSEIGNÉES ; Traçabilité / Continuité conservées ; Architecture / Stack NOT DECIDED ; 1.3 NOT OPENED.

---

## Diff Git utile complet

```diff
commit f035ae6e32b701cff29738ec6e391d597bb83439
Author: Ludo243 <ludo_zaya@hotmail.fr>
Date:   Tue Sep 29 00:06:11 2026 +0200

    docs(crm-assurance-courtage): align 1.1 and 1.2 with group-validated BMC

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
index 5cb61d1e..dfc4a6e0 100644
--- a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
+++ b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
@@ -29,6 +29,8 @@ Ordre de priorité pour toute exécution ou arbitrage :
 5. **Recherche / preuves projet** — éléments vérifiables produits dans le repo ou validés
 6. **Hypothèses** — explicitement marquées comme telles ; jamais traitées comme décisions

+**Règle de supersession groupe :** lorsqu’un livrable préparatoire est repris et validé par le groupe de travail, cette version **supersède** le contenu préparatoire correspondant et doit être retranscrite dans Git. Cela ne crée **pas** une nouvelle classification méthodologique à plusieurs couches.
+
 En cas de tension : remonter à Morris. Ne pas résoudre par implication.

 ---
@@ -166,11 +168,12 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 | Élément | État |
 |---------|------|
 | Phase actuelle | Bloc / Phase 1 — cadrage |
-| Dernière étape validée | **1.1 Analyse des besoins métiers — VALIDATED (2026-09-27)** |
-| Étape active | **1.2 Analyse des besoins utilisateurs — OPENED (GO Morris 2026-09-27)** |
+| Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED (2026-09-28)** |
+| 1.1 | **VALIDATED** — BMC réaligné sur version groupe validée 2026-09-28 |
+| Étape suivante | **1.3 Veille technologique et réglementaire — NOT OPENED** |
 | Architecture | **NOT DECIDED** |
-| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY** |
-| Prochain objectif | Faire revoir les artefacts 1.2 matérialisés dans Miro et obtenir la décision Morris de validation du 1.2 avant toute ouverture du 1.3 |
+| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
+| Prochain objectif | Attendre le GO Morris pour ouvrir le 1.3 après revue de l’alignement 1.1 / 1.2 sur le BMC groupe |

 ---

diff --git a/projects/crm-assurance-courtage/01-cadrage/01-01-analyse-besoins-metiers.md b/projects/crm-assurance-courtage/01-cadrage/01-01-analyse-besoins-metiers.md
index 8658240e..be24b2b0 100644
--- a/projects/crm-assurance-courtage/01-cadrage/01-01-analyse-besoins-metiers.md
+++ b/projects/crm-assurance-courtage/01-cadrage/01-01-analyse-besoins-metiers.md
@@ -5,13 +5,14 @@
 | **Statut** | **VALIDATED** — décision Morris du 2026-09-27 |
 | **Étape** | 1.1 |
 | **Source principale** | Brief pédagogique CRM (`PBNC_Fiche_projet_CRM_courtage_assurance`) — hors Git |
+| **Source de consolidation** | Business Model Canvas - CRM2 - Validé — Groupe de travail — **2026-09-28** |
 | **Sources méthodologiques** | Guide Bloc 1 PBNC + maquette `PBNC_100_Maquette_presentation_bloc_1` — hors Git |
 | **Doctrine projet** | [`../00-intake/crm-assurance-courtage-operating-doctrine.md`](../00-intake/crm-assurance-courtage-operating-doctrine.md) |
-| **Cadre 1.1 retenu** | Business Model Canvas + portrait synthétique du cabinet (**ADOPTED** — matérialisé dans Miro) |
-| **BPMN 1.1** | Processus cible pédagogique « prise de contact → souscription » (**ADOPTED** — matérialisé dans Miro) |
+| **Cadre 1.1 retenu** | Business Model Canvas + portrait synthétique du cabinet (**ADOPTED** — matérialisé dans Miro ; BMC réaligné sur version groupe 2026-09-28) |
+| **BPMN 1.1** | Processus cible pédagogique « prise de contact → souscription » (**ADOPTED** — matérialisé dans Miro ; inchangé) |
 | **Architecture** | NOT DECIDED |
 | **Stack** | NOT DECIDED |
-| **1.2** | NOT OPENED |
+| **1.2** | **VALIDATED** (2026-09-28) |

 **Décision Morris :** 1.1 — Analyse des besoins métiers = **VALIDATED**
 **Date :** 2026-09-27
@@ -20,11 +21,12 @@
 ### Source de vérité

 - Ce document Git constitue la **source canonique** du contenu métier validé du 1.1.
+- La version BMC validée par le groupe de travail le **2026-09-28** **supersède** la version préparatoire initiale du BMC ; Git devient la trace canonique après retranscription.
 - Les frames Miro BMC et BPMN sont les **représentations visuelles éditables** correspondantes.
 - Les URLs Miro présentes dans ce document restent les références vers ces représentations.
 - Une évolution future du fond nécessite une mise à jour contrôlée de Git et, si nécessaire, de Miro.

-**Sourcing :** le document utilise les informations effectivement disponibles dans le brief (et la doctrine pour la conduite). Les éléments non fournis ne sont pas inventés.
+**Sourcing :** le document utilise le brief pédagogique et, pour le BMC, la version consolidée validée par le groupe. Les éléments non fournis ne sont pas inventés.

 ---

@@ -61,7 +63,7 @@ Ce portrait reprend exclusivement les éléments fournis par le brief pédagogiq
 | Dimension | Contenu |
 |-----------|---------|
 | Activité | Courtage d’assurance (multi-branches citées : automobile, habitation, santé, prévoyance, etc.) |
-| Populations concernées | Prospects et clients |
+| Populations concernées | Segments BMC groupe : **TPE/PME** ; **Client particulier (famille/étudiant)**. Prospect / Client restent utilisables comme **états** du cycle relationnel |
 | Transformation recherchée | Digitaliser la relation client ; réactivité ; fidélisation |
 | Processus concernés | Cycle cible pédagogique (§4) |
 | Valeur recherchée | Proximité, personnalisation, transparence ; objectifs métier (§6) |
@@ -74,25 +76,26 @@ Ce portrait reprend exclusivement les éléments fournis par le brief pédagogiq
 **Qualification :** processus **cible dérivé du scénario pédagogique** — **pas** un AS-IS observé.

 ```text
-Prospect
+Prospection
   → prise de contact
   → devis
   → relance / rendez-vous
   → compréhension du besoin / proposition
   → souscription
   → gestion du contrat
-  → renouvellement ou résiliation
+  → renouvellement / résiliation
 ```

-**Capacités / processus transverses (brief) :**
+**Capacités / processus transverses (brief + BMC groupe) :**

 | Transverse | Éléments cités |
 |------------|----------------|
+| Prospection / conseil | Prospection ; devis ; **conseil personnalisé** (BMC groupe) |
 | Administratif | Collecte de pièces administratives prévue par le brief |
-| Documents | Édition / envoi automatiques ; attestations ; avenants ; conditions générales |
+| Documents | Édition / envoi automatiques ; attestations ; avenants ; conditions générales ; espace sécurisé documentaire (proposition de valeur groupe) |
 | Sinistres | Déclaration ; suivi ; indemnisation |
-| Relation | Historique des échanges |
-| Pilotage | Tableau de bord commercial |
+| Relation | Historique des échanges ; accompagnement personnalisé sur le cycle de vie du contrat |
+| Pilotage | Tableau de bord commercial / pilotage commercial |

 ---

@@ -188,9 +191,13 @@ Prise de rendez-vous directe ; comparaison illustrative avec Doctolib dans le br

 Offres selon le profil et les besoins discutés en rendez-vous. Traduit l’adaptation de la relation commerciale au besoin du client. Le CRM doit permettre de rattacher propositions et contrats au contexte de l’échange.

-#### Transparence
+#### Transparence et confiance

-Accès en temps réel à l’historique des échanges et des contrats. Soutient la lisibilité du suivi pour le client. Le CRM doit rendre cet historique consultable de façon continue.
+Accès en temps réel à l’historique des échanges et des contrats. Soutient la lisibilité du suivi et la confiance pour le client. Le CRM doit rendre cet historique consultable de façon continue.
+
+#### Centralisation et espace sécurisé (BMC groupe)
+
+Centralisation du suivi prospects / clients / contrats. Espace sécurisé pour les documents — **retenu comme proposition de valeur** ; conception technique / UI **NON DÉCIDÉE**.

 ### 6.3 Indicateurs disponibles

@@ -234,7 +241,7 @@ Ces caractéristiques rendent une approche **no-code plausible** dans le cadre d
 | Prospects | Entrée du cycle |
 | Clients | Contrats ; transparence / historique |

-Assureurs en ligne : contexte concurrentiel cité — pas des partenaires détaillés.
+Partenaires clés BMC groupe : compagnies d’assurance partenaires ; équipe de dev no code. Assureurs en ligne : contexte concurrentiel cité — distinct des partenaires.

 ### Objets utiles à la compréhension (pas un modèle de données)

@@ -244,19 +251,19 @@ Prospect · client · devis · rendez-vous · contrat · document / pièce · si

 ## 9. Business Model Canvas — éléments à intégrer

-Le Business Model Canvas est le cadre méthodologique retenu pour synthétiser le modèle d’activité du cabinet à partir des informations disponibles dans le scénario pédagogique.
+Le Business Model Canvas synthétise le modèle d’activité du cabinet. La version **validée par le groupe de travail le 2026-09-28** supersède la version préparatoire initiale.

-| Bloc BMC | Éléments à intégrer |
-|----------|---------------------|
-| **1. Segments clients** | Populations identifiées : prospects et clients. Automobile, habitation, santé, prévoyance = **catégories de contrats**, non une segmentation client démontrée |
-| **2. Proposition de valeur** | Proximité ; personnalisation ; transparence ; centralisation du suivi relationnel / contrats |
-| **3. Canaux** | Prise de rendez-vous directe explicitement citée. Autres canaux : non renseigné dans les sources fournies |
-| **4. Relations clients** | Rendez-vous ; personnalisation ; historique des échanges / contrats |
-| **5. Sources de revenus** | Non renseigné dans les sources fournies |
-| **6. Ressources clés** | Courtiers ; informations prospects / clients / contrats nécessaires au scénario. Effectifs / systèmes : non renseigné dans les sources fournies |
-| **7. Activités clés** | Devis ; rendez-vous ; souscription ; gestion des contrats ; documents ; sinistres ; suivi / pilotage |
-| **8. Partenaires clés** | Non renseigné dans les sources fournies. Les assureurs en ligne cités comme **concurrence** ne sont pas traités comme partenaires |
-| **9. Structure de coûts** | Non renseignée dans les sources fournies |
+| Bloc BMC | Éléments (BMC groupe validé 2026-09-28) |
+|----------|------------------------------------------|
+| **1. Segments clients** | **TPE/PME** ; **Client particulier (famille/étudiant)**. Prospect / Client restent des **états** du parcours relationnel, pas la segmentation BMC |
+| **2. Proposition de valeur** | Proximité (prise de RDV directe) ; personnalisation (offres adaptées au profil / besoins en RDV) ; transparence et confiance (historique échanges / contrats en temps réel) ; centralisation du suivi prospects / clients / contrats ; espace sécurisé (pour les documents) |
+| **3. Canaux** | Rendez-vous physique ; rendez-vous Visio ; téléphone ; espace client ; email |
+| **4. Relations clients** | Accompagnement personnalisé du client sur le cycle de vie du contrat (depuis souscription jusqu’à résiliation) |
+| **5. Sources de revenus** | Non renseigné (aucun contenu validé par le groupe) |
+| **6. Ressources clés** | Courtiers ; informations prospects / clients / contrats (base de données). Effectifs / systèmes : non renseignés dans les sources fournies |
+| **7. Activités clés** | Prospection : Devis ; Relances / rendez-vous ; Gestion de contrat (Souscription / Renouvellement / Résiliation) ; Gestion documentaire ; Suivi des sinistres ; Pilotage commercial ; Conseil personnalisé |
+| **8. Partenaires clés** | Les compagnies d’assurance partenaires ; L’équipe de dev no code |
+| **9. Structure de coûts** | Non renseignée (aucun contenu validé par le groupe) |

 **Support visuel Miro :** [https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685039847893](https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685039847893)

@@ -287,6 +294,8 @@ Le processus illustre le **parcours commercial principal** qui transforme une pr

 Ces éléments hors focus restent dans le **périmètre global** du CRM (§4) ; ils ne sont pas intégrés ici pour conserver un schéma lisible.

+**Note alignement BMC groupe (2026-09-28) :** la **prospection** est désormais identifiée comme activité métier **amont** dans le BMC validé par le groupe. Le BPMN 1.1 conserve volontairement son périmètre de **première prise de contact → souscription** — la prospection n’élargit pas ce BPMN.
+
 ### 10.3 Participants

 Acteurs strictement supportés par le brief pour ce processus opérationnel :
@@ -357,17 +366,16 @@ Le diagramme Miro est éditable (formes et connecteurs natifs). Il reprend exact
 | Point | État |
 |-------|------|
 | **1.1** | **VALIDATED** — décision Morris du 2026-09-27 |
-| Contexte | Compris à partir du brief |
-| Portrait synthétique | Établi (§3) |
-| Processus globaux | Vue métier cible (§4) |
+| Contexte | Compris à partir du brief + BMC groupe 2026-09-28 |
+| Portrait synthétique | Établi (§3) — segments TPE/PME · Client particulier |
+| Processus globaux | Vue métier cible (§4) — prospection amont incluse |
 | Enjeux | Identifiés (déduits du brief) |
 | Objectifs métier | Explicités et justifiés à partir du brief |
-| Valeurs / différenciation | Proximité, personnalisation, transparence explicitées |
+| Valeurs / différenciation | Proximité, personnalisation, transparence et confiance, centralisation, espace sécurisé |
 | No-code | Pertinence préliminaire — **pas** un choix d’architecture |
-| BMC | **ADOPTED** — matérialisé dans Miro |
-| BPMN | **ADOPTED** — matérialisé dans Miro (processus cible pédagogique « prise de contact → souscription ») |
+| BMC | **VALIDATED GROUP VERSION** — aligné Git + Miro (2026-09-28) |
+| BPMN | **ADOPTED / UNCHANGED** — prise de contact → souscription ; prospection hors périmètre BPMN |
 | Architecture | NOT DECIDED |
 | Stack | NOT DECIDED |
-| **1.2** | **NOT OPENED** |
-
-Le 1.2 n’est **pas** ouvert par cette clôture.
+| **1.2** | **VALIDATED** (2026-09-28) |
+| **1.3** | **NOT OPENED** |
diff --git a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
index c83e745b..485d31af 100644
--- a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
+++ b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
@@ -2,30 +2,32 @@

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | WORKING ANALYSIS — **1.2 OPENED** par décision Morris du 2026-09-27 |
+| **Statut** | **VALIDATED** — décision Morris du **2026-09-28** |
 | **Étape** | 1.2 |
-| **Source métier principale** | Brief pédagogique CRM + 1.1 validé |
+| **Source métier principale** | Brief pédagogique CRM + 1.1 validé + BMC groupe validé 2026-09-28 |
 | **Source méthodologique** | Guide Bloc 1 PBNC + exigences 1.2 du brief |
 | **Doctrine projet** | [`../00-intake/crm-assurance-courtage-operating-doctrine.md`](../00-intake/crm-assurance-courtage-operating-doctrine.md) |
-| **1.1** | VALIDATED (2026-09-27) — [`01-01-analyse-besoins-metiers.md`](01-01-analyse-besoins-metiers.md) |
+| **1.1** | VALIDATED (2026-09-27) — BMC réaligné groupe 2026-09-28 — [`01-01-analyse-besoins-metiers.md`](01-01-analyse-besoins-metiers.md) |
 | **Evidence user discovery** | BRIEF-DERIVED — NO FIELD INTERVIEWS — NO OBSERVED AS-IS |
-| **Personas** | **ADOPTED — MATERIALIZED IN MIRO** — BRIEF-DERIVED |
-| **Experience Map** | **ADOPTED FOR 1.2 — COURTIER — MATERIALIZED IN MIRO** |
-| **Customer Journey Map** | **ADOPTED FOR 1.2 — PROSPECT → CLIENT — MATERIALIZED IN MIRO** |
+| **Personas** | **VALIDATED / MATERIALIZED IN MIRO** — BRIEF-DERIVED (+ alignement BMC groupe) |
+| **Experience Map** | **VALIDATED / MATERIALIZED IN MIRO** — Courtier — alignée BMC groupe |
+| **Customer Journey Map** | **VALIDATED / MATERIALIZED IN MIRO** — Prospect → Client — alignée BMC groupe |
 | **Architecture** | NOT DECIDED |
 | **Stack** | NOT DECIDED |
+| **1.3** | NOT OPENED |

 ### Décisions Morris tracées (alignement 1.2)

 | Décision | Contenu | Portée |
 |----------|---------|--------|
-| Ouverture 1.2 | 1.2 = **OPENED** (2026-09-27) | Le 1.2 **n’est pas** VALIDATED |
-| Proto-personas | **Courtier** ; **Directeur du cabinet** ; **Prospect → Client assuré** | ADOPTED PROTO-PERSONAS FOR 1.2 — pédagogique / brief-derived — **non** empiriquement validés |
-| Experience Map | ADOPTED FOR 1.2 — cible **Courtier** | MATERIALIZED IN MIRO |
-| Customer Journey Map | ADOPTED FOR 1.2 — cible **Prospect → Client assuré** | MATERIALIZED IN MIRO |
+| Ouverture 1.2 | 1.2 = OPENED (2026-09-27) | Historique |
+| Validation 1.2 | 1.2 = **VALIDATED** (2026-09-28) | Clôture du livrable 1.2 |
+| Proto-personas | **Courtier** ; **Directeur du cabinet** ; **Prospect → Client assuré** | VALIDATED — pédagogique / brief-derived — **non** empiriquement validés par recherche terrain |
+| Experience Map | VALIDATED — cible **Courtier** | MATERIALIZED IN MIRO — phase 1 alignée prospection |
+| Customer Journey Map | VALIDATED — cible **Prospect → Client assuré** | MATERIALIZED IN MIRO — canaux groupe transversaux |

-**ADOPTED** (personas / maps) signifie que Morris valide leur **utilisation pédagogique** dans le livrable 1.2.
-**ADOPTED** ne signifie **pas** : user research empirique ; profil statistiquement démontré ; persona terrain validé ; 1.2 VALIDATED.
+**VALIDATED** (1.2) signifie que Morris valide le livrable de cadrage utilisateur pour la suite du projet.
+Cela ne signifie **pas** : user research empirique ; profil statistiquement démontré ; persona terrain validé.

 ---

@@ -63,7 +65,7 @@ Les profils sont des **PROTO-PERSONAS DE CADRAGE** (BRIEF-DERIVED / NO FIELD INT

 | Profil | Qualification | Preuves / statut |
 |--------|---------------|------------------|
-| **Courtier** | Utilisateur métier interne principal | Suit le cycle de vie client ; devis ; relances ; rendez-vous ; souscription ; renouvellement / résiliation ; documents ; sinistres ; suivi relationnel — **EXPLICITE DANS LE BRIEF** |
+| **Courtier** | Utilisateur métier interne principal | Prospection ; devis ; relances ; rendez-vous ; conseil personnalisé ; souscription ; renouvellement / résiliation ; documents ; sinistres ; suivi relationnel — **EXPLICITE DANS LE BRIEF + BMC GROUPE** |
 | **Directeur du cabinet** | Partie prenante décisionnaire **et** proto-persona de pilotage **adopté par Morris** | Objectifs business, différenciation, KPIs du scénario — **EXPLICITE DANS LE BRIEF**. Usage personnel du dashboard = **INFÉRENCE DE CADRAGE FORTE + DÉCISION MORRIS** — **pas** un fait explicite du brief |
 | **Prospect** | État métier initial (avant souscription) du persona externe longitudinal | Contact ; devis ; RDV ; besoin ; proposition ; souscription — **EXPLICITE DANS LE BRIEF**. Usage direct de toutes les interfaces du futur CRM — **NON RENSEIGNÉ** |
 | **Client** | État métier ultérieur (après souscription) du **même** persona externe | Contrats ; échanges ; historique ; transparence ; documents ; sinistres ; renouvellement / résiliation — **EXPLICITE DANS LE BRIEF** |
@@ -96,7 +98,7 @@ La fusion Prospect → Client est une **DÉCISION MORRIS DE MODÉLISATION DU 1.2
 | **Rôle** | Courtier du cabinet | EXPLICITE DANS LE BRIEF |
 | **Angle** | Métier / opérations / relation client | EXPLICITE DANS LE BRIEF |
 | **Relation au projet** | Utilisateur métier interne principal | EXPLICITE DANS LE BRIEF |
-| **Objectifs / capacités supportés** | Suivi du cycle client ; devis ; relances ; rendez-vous ; souscription ; renouvellement / résiliation ; collecte de pièces ; documents ; sinistres ; traçabilité ; réactivité ; personnalisation soutenue par l’historique | EXPLICITE DANS LE BRIEF |
+| **Objectifs / capacités supportés** | Prospection ; devis ; relances ; rendez-vous ; conseil personnalisé ; souscription ; renouvellement / résiliation ; collecte de pièces ; documents ; sinistres ; traçabilité ; réactivité ; personnalisation soutenue par l’historique | EXPLICITE DANS LE BRIEF + BMC GROUPE |
 | **Besoins déduits** | Retrouver l’information de suivi utile ; vision cohérente des étapes du dossier ; limiter les tâches administratives ; disposer de l’historique pour personnaliser la relation | **INFÉRENCE DE CADRAGE** |

 **Non renseigné (non inventé) :** outil actuel ; temps perdu ; volumes ; âge ; séniorité ; aisance numérique ; organisation quotidienne ; canal favori ; rémunération ; localisation.
@@ -175,7 +177,11 @@ L’accès en temps réel à l’historique des échanges et contrats est un sig
 Les besoins évoluent entre entrée en relation et vie du contrat.
 On pourra **plus tard** comparer informations accessibles, besoins, actions, points de contact et permissions candidates — **ces choix ne sont PAS décidés dans le 1.2**.

-**Non renseigné (non inventé) :** démographie ; budget ; comparateurs ; canaux non cités ; fréquence ; appareil ; forme exacte de l’accès client.
+**Non renseigné (non inventé) :** démographie ; budget ; comparateurs ; fréquence ; appareil ; forme exacte / UI de l’accès client.
+
+**Segments clients (BMC groupe) :** TPE/PME ; Client particulier (famille/étudiant) — associés au persona longitudinal **sans** multiplier les personas.
+
+**Canaux validés (BMC groupe) :** RDV physique ; RDV Visio ; téléphone ; email ; espace client. Existence du canal retenue ; conception / écrans / permissions **NON DÉCIDÉES**.

 **Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
 La même personne passe d’une entrée en relation (prospect) à une relation de suivi contractualisée (client), avec une continuité attendue de proximité, personnalisation et transparence.
@@ -263,7 +269,7 @@ La dimension méthodologique **ÉMOTION — NON RENSEIGNÉE** est conservée ; r

 **Statut :** raffinement sémantique validé par Morris (cycle dédié) — **CLARIFICATION DE CADRAGE**, non citation littérale du brief.

-1. **Réactivité** ajoutée comme enjeu de la phase **Contact / qualification** de l’Experience Map (enjeu global explicite dans le brief ; rattachement précis à cette phase = **inférence de cadrage**).
+1. **Réactivité** ajoutée comme enjeu de la phase **Prospection / contact / qualification** de l’Experience Map (enjeu global explicite dans le brief ; rattachement précis à cette phase = **inférence de cadrage**).

 2. **Distinction adoptée Traçabilité / Continuité du suivi :**

@@ -278,7 +284,7 @@ Relation : la traçabilité **peut soutenir** la continuité du suivi ; elles so

 | Phase | Enjeux |
 |-------|--------|
-| Contact / qualification | Réactivité · Continuité du suivi |
+| Prospection / contact / qualification | Réactivité · Continuité du suivi |
 | Devis | Réactivité · Charge administrative |
 | Relance / RDV | Réactivité · Continuité du suivi |
 | Besoin → proposition | Personnalisation · Continuité du suivi |
@@ -299,7 +305,7 @@ Elle ne signifie **pas** que chaque élément est littéralement écrit dans le

 | Phase | Niveau de preuve |
 |-------|------------------|
-| Contact / qualification | EXPLICITE + INFÉRENCE |
+| Prospection / contact / qualification | EXPLICITE + INFÉRENCE |
 | Devis | EXPLICITE + INFÉRENCE |
 | Relance / RDV | EXPLICITE + INFÉRENCE |
 | Besoin → proposition | EXPLICITE + INFÉRENCE |
@@ -308,6 +314,42 @@ Elle ne signifie **pas** que chaque élément est littéralement écrit dans le

 ---

+
+## Alignement groupe — BMC validé 2026-09-28
+
+Traçabilité des impacts du BMC groupe sur les artefacts 1.2 (sans nouvelle couche méthodologique) :
+
+### Courtier
+
+- **prospection** ajoutée aux capacités ;
+- **conseil personnalisé** confirmé comme activité ;
+- reste du persona inchangé (pas de démographie, verbatim ni usage technique inventé).
+
+### Prospect → Client assuré
+
+- persona longitudinal **conservé** (une seule personne, deux états) ;
+- segments clients associés : **TPE/PME** ; **Client particulier (famille/étudiant)** ;
+- canaux validés : RDV physique ; RDV Visio ; téléphone ; email ; **espace client** ;
+- **aucune** multiplication automatique des personas ;
+- nombre d’applications / portails / écrans / permissions / UI / modalités exactes d’accès : **NON DÉCIDÉS**.
+
+### Experience Map — Courtier
+
+- première phase devient : **Prospection / contact / qualification** (actions : Prospecter ; prendre contact ; qualifier le besoin initial) ;
+- reste des phases inchangé ;
+- Traçabilité / Continuité / niveaux de preuve / émotions : inchangés.
+
+### Customer Journey Map — Prospect → Client
+
+- canaux groupe intégrés **transversalement** (pas d’affectation canal × phase inventée) ;
+- espace sécurisé documentaire intégré au suivi documentaire (phase échanges / docs) ;
+- pas de conception détaillée des écrans / permissions / UI.
+
+### Directeur
+
+- **inchangé**.
+
+---
 ## Miro — matérialisation 1.2

 | Champ | Valeur |
@@ -315,7 +357,7 @@ Elle ne signifie **pas** que chaque élément est littéralement écrit dans le
 | **Board** | CRM Assurance Courtage — 1.1 Analyse des besoins métiers |
 | **Board URL** | https://miro.com/app/board/uXjVHiWX64c=/ |
 | **Board ID** | `uXjVHiWX64c=` |
-| **État** | **MATERIALIZED** — AWAITING REVIEW / VALIDATION |
+| **État** | **MATERIALIZED** — **1.2 VALIDATED** (2026-09-28) — aligné BMC groupe |
 | **Méthode** | Miro MCP Canvas Composer (`canvas_create_from_svg`) — objets natifs éditables |

 | Livrable | Statut | Frame ID | URL |
@@ -338,7 +380,7 @@ Elle ne signifie **pas** que chaque élément est littéralement écrit dans le
 - Git reste la source canonique du fond validé / adopté.
 - Miro est la représentation visuelle éditable correspondante.
 - Aucune interface produit n’est décidée par ces artefacts.
-- Le 1.2 reste **OPENED — WORKING ANALYSIS** (non VALIDATED).
+- Le 1.2 est **VALIDATED** (2026-09-28). Architecture / stack / 1.3 restent **NOT DECIDED / NOT OPENED**.

 ---

@@ -346,14 +388,14 @@ Elle ne signifie **pas** que chaque élément est littéralement écrit dans le

 | Point | État |
 |-------|------|
-| **1.2** | OPENED — WORKING ANALYSIS |
-| Courtier | ADOPTED PROTO-PERSONA — MATERIALIZED |
-| Directeur | ADOPTED PROTO-PERSONA — MATERIALIZED |
-| Prospect → Client | ADOPTED PROTO-PERSONA — MATERIALIZED |
-| Evidence | BRIEF-DERIVED / NO FIELD INTERVIEWS |
-| Experience Map Courtier | ADOPTED — MATERIALIZED |
-| Customer Journey Map Prospect → Client | ADOPTED — MATERIALIZED |
-| Miro | MATERIALIZED — AWAITING REVIEW / VALIDATION |
+| **1.2** | **VALIDATED** — décision Morris 2026-09-28 |
+| Courtier | VALIDATED / ALIGNED — MATERIALIZED |
+| Directeur | VALIDATED / UNCHANGED — MATERIALIZED |
+| Prospect → Client | VALIDATED / ALIGNED — MATERIALIZED |
+| Evidence | BRIEF-DERIVED / NO FIELD INTERVIEWS + BMC groupe |
+| Experience Map Courtier | VALIDATED / ALIGNED — MATERIALIZED |
+| Customer Journey Map Prospect → Client | VALIDATED / ALIGNED — MATERIALIZED |
+| Miro | MATERIALIZED — aligné BMC groupe |
 | Architecture | NOT DECIDED |
 | Stack | NOT DECIDED |
 | **1.3** | **NOT OPENED** |

```

---

## Validations

| Validation | Résultat |
|------------|----------|
| Git Truth | **PASS** |
| Main CRM drift | **NONE** |
| Source BMC groupe comprise | **PASS** |
| BMC Miro aligné | **PASS** |
| BPMN inchangé | **PASS** |
| Courtier aligné | **PASS** |
| Directeur inchangé | **PASS** |
| Prospect → Client aligné | **PASS** |
| Experience Map alignée | **PASS** |
| Customer Journey Map alignée | **PASS** |
| Canaux groupe intégrés | **PASS** |
| Segments groupe intégrés | **PASS** |
| Espace sécurisé sans architecture | **PASS** |
| Aucune nouvelle architecture | **PASS** |
| Aucune stack | **PASS** |
| Miro create | **0** |
| Miro delete | **0** |
| Total frames | **7** |
| 1.1 VALIDATED | **PASS** |
| 1.2 VALIDATED | **PASS** |
| 1.3 NOT OPENED | **PASS** |
| Exactement 3 fichiers projet | **PASS** |
| git diff --check | **PASS** |
| Commit local | **PASS** |
| Push projet | **NOT DONE** |
| PR | **NOT CREATED** |

---

## Commit

| Champ | Valeur |
|-------|--------|
| Message | `docs(crm-assurance-courtage): align 1.1 and 1.2 with group-validated BMC` |
| SHA | `f035ae6e32b701cff29738ec6e391d597bb83439` |
| Parent (non amendé) | `4136e38f48bbbfebe40e1836a40ed1726b7fb067` |

---

## HEAD final / push / PR

| Champ | Valeur |
|-------|--------|
| **HEAD final** | `f035ae6e32b701cff29738ec6e391d597bb83439` |
| **Push projet** | NOT DONE |
| **PR** | NOT CREATED |
| **1.1** | VALIDATED |
| **1.2** | VALIDATED |
| **1.3** | NOT OPENED |
| **Architecture / Stack** | NOT DECIDED |

---

## Réserves

1. QA visuelle Miro limitée (pas de PIXEL PERFECT) — contenu textuel / structure conformes.
2. Ouverture du **1.3** reste une décision Morris séparée.
3. « Espace client » / « Espace sécurisé » / « compagnies partenaires » / « équipe no code » = éléments BMC validés — **aucune** conception technique dérivée.
4. Dirt locale restante uniquement `.tmp-sfia-review/**`.

---

## Verdict

**READY FOR CHATGPT REVIEW WITH VISUAL RESERVE — CRM 1.1 / 1.2 ALIGNED WITH GROUP-VALIDATED BMC**
