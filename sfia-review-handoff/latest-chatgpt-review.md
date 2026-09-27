# ChatGPT Review Pack — CRM 1.2 Map Semantics Refinement

**Niveau :** FULL
**Date / heure :** 2026-09-28 01:23:57 CEST (+0200)
**Cycle :** Cadrage projet — raffinement sémantique des maps 1.2
**Profil SFIA :** Standard
**Typologie :** DOC / visual knowledge artifact
**CKC :** pilots/01-cadrage.md — candidate · experimental · aucune autorité d'exécution
**Studio Convergence :** N/A
**Fake/Real :** N/A
**Mono-cycle :** oui (écrasement total)

---

## 1. Objectif

Raffiner sans reconstruire les frames Miro Experience Map Courtier et Customer Journey Map Prospect → Client : Réactivité en qualification ; distinction Traçabilité / Continuité ; émotions transversales NON RENSEIGNÉES ; tracer dans Git 1.2 ; commit local ; review pack FULL ; Review Handoff.

---

## 2. Git Truth initial

| Contrôle | Résultat |
|----------|----------|
| Workspace | `/Users/l/Projects/sfia-worktree-crm-assurance` |
| Branche | `docs/crm-assurance-courtage-1-2-user-discovery-01` |
| HEAD initial | `fe129bd0f7bdf20d2240dc857ef389f28f57760f` |
| HEAD final | `f56fadc216af784c73e77be83831becb86591f35` |
| origin/main | `b7fdf712073257f9fc64c294ac7e68af2cd64464` |
| Dirt tolérée | `.tmp-sfia-review/**` |
| Git Truth | **PASS** |

Note : tip handoff global avait divergé (cycle Studio). Dernier handoff CRM historique = `59f2ceea`. Ce cycle republie un handoff CRM comme latest.

---

## 3. Décisions Morris de raffinement

1. Contact / qualification → **Réactivité · Continuité du suivi**.
2. Traçabilité ≠ Continuité du suivi (clarification de cadrage, non citation brief).
3. Répartition enjeux phase par phase (matrice).
4. Pensées / émotions / Émotion : dimension méthodologique ; réserve transversale ; pas d'invention ; pas de répétition cellule par cellule.

Non réouverts : personas ; ADOPTED maps ; evidence BRIEF-DERIVED ; Architecture/Stack NOT DECIDED ; 1.3 NOT OPENED ; 1.2 OPENED.

---

## 4. Sources lues

Template ; routing ; cycles method ; CKC cadrage ; operating model ; guardrails ; validation checklist ; scripts/sfia/README.md ; doctrine ; 1.1 ; 1.2 ; Miro live MCP.

---

## 5. État Miro avant

321 objets · 7 frames · 160 shapes · 147 textArea · 7 connectors · 0 loose.
IDs protégés inchangés. Frames autorisées : EM `3458764685164458754` · CJM `3458764685164510320`.

---

## 6. Experience Map — AVANT

Enjeux : (1) Continuité du suivi · (2) Charge admin. ; réactivité · (3) Réactivité · (4) Personnalisation · (5) Traçabilité · (6) Charge admin. ; continuité.
Pensées/émotions ×6 : « Non renseigné — aucune observation terrain. Toute émotion future serait une hypothèse à valider. »
Label : PENSÉES / ÉMOTIONS. Footer sans distinction Traçabilité/Continuité.

---

## 7. Experience Map — APRÈS

Frame `3458764685164458754` · 3100×1280 @ (0,4000)
URL : https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164458754

| Phase | Enjeux |
|-------|--------|
| 1. Contact / qualification | Réactivité · Continuité du suivi |
| 2. Devis | Réactivité · Charge administrative |
| 3. Relance / RDV | Réactivité · Continuité du suivi |
| 4. Besoin → proposition | Personnalisation · Continuité du suivi |
| 5. Souscription → vie contrat | Traçabilité · Continuité du suivi |
| 6. Docs / sinistre / renouvel. | Traçabilité · Continuité du suivi · Charge administrative |

Label : PENSÉES / ÉMOTIONS — NON RENSEIGNÉES
Phase 1 : réserve transversale (aucune recherche terrain ; pas d'inférence)
Phases 2–6 : —
Footer : CLARIFICATION DE CADRAGE — DÉCISION MORRIS + définitions Traçabilité / Continuité + NON RENSEIGNÉES

---

## 8. CJM — AVANT

ÉMOTION ×8 : « Non renseigné — aucune observation terrain. » Label : ÉMOTION.

---

## 9. CJM — APRÈS

Frame `3458764685164510320`
URL : https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164510320
Label : ÉMOTION — NON RENSEIGNÉE
Phase 1 : réserve transversale
Autres : —
Fond (phases, actions, attentes, contacts) inchangé.

---

## 10. Widgets modifiés · suppressions

EM : 16 updates (frame + textes), 0 create, **0 delete**.
CJM : 9 updates, 0 create, **0 delete**.
Méthode : `canvas_update_from_svg`.

EM IDs : 8754, 8761, 8774, 8782, 8794, 8809, 8821, 8835, 8847, 8786, 8798, 8813, 8827, 8839, 8851, 8852.
CJM IDs : 0337, 0350, 0362, 0375, 0387, 0399, 0412, 0424, 0437.

---

## 11. Inventaire après

321 items · 7 frames (mêmes IDs) · 0 loose · personas/1.1 inchangés.

---

## 12. QA

Réactivité qualification PASS · Traçabilité/Continuité PASS · répartition PASS · émotions non inventées PASS · répétitions réduites PASS · zéro suppression PASS · personas/1.1 PASS · frames=7 PASS.
Visuel : board_show EM — pas PIXEL PERFECT.

---

## 13. Sections Git 1.2 modifiées (11–12 + Clarifications Morris)

```markdown
## 11. Experience Map — Courtier

| Champ | Valeur |
|-------|--------|
| **Statut** | **ADOPTED FOR 1.2 — COURTIER — MATERIALIZED IN MIRO** |
| **Persona cible** | Courtier |
| **Objet** | Expérience métier globale du courtier au fil de la relation client — **sans** limitation à une interface logicielle précise |
| **Cadre** | Expérience opérationnelle ; étapes métier ; actions ; besoins ; enjeux ; points de continuité ; pensées / émotions **uniquement** si qualifiées comme hypothèses lorsque non sourcées |
| **Nature** | CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF — **NON AS-IS OBSERVÉ** |

Aucune émotion observée n’est inventée. La dimension méthodologique **PENSÉES / ÉMOTIONS — NON RENSEIGNÉES** est conservée ; l’information est transversale (aucune recherche terrain ; aucune inférence émotionnelle) — **pas** de répétition phase par phase ni de courbe émotionnelle.

---

## 12. Customer Journey Map — Prospect → Client

| Champ | Valeur |
|-------|--------|
| **Statut** | **ADOPTED FOR 1.2 — PROSPECT → CLIENT — MATERIALIZED IN MIRO** |
| **Persona cible** | Prospect → Client assuré |
| **Objet** | Relation du persona avec le **service de courtage / cabinet** (service de référence du scénario) |
| **Transition structurante** | Prospect → souscription → Client |
| **Séquence** | Entrée en relation → prospect → devis / rendez-vous → compréhension du besoin → proposition → souscription → client → vie du contrat → échanges / documents → sinistre éventuel → renouvellement / résiliation |
| **Nature** | CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF — **NON AS-IS OBSERVÉ** |

**Règles :**

- La Customer Journey Map **ne suppose PAS** que le futur CRM existe déjà ou est observé.
- Elle cartographie l’expérience avec le **service de courtage**, pas avec un produit CRM déjà déployé.
- **Ne PAS** décider ici : interface Prospect distincte ; interface Client distincte ; accès Prospect direct au CRM ; accès Client à toutes les fonctions ; écrans ; permissions ; composants UI.

La dimension méthodologique **ÉMOTION — NON RENSEIGNÉE** est conservée ; réserve transversale unique (aucune observation / recherche terrain ; aucune émotion inférée) — **pas** de répétition phase par phase ni de courbe émotionnelle.

---

### Clarifications Morris — maps 1.2

**Statut :** raffinement sémantique validé par Morris (cycle dédié) — **CLARIFICATION DE CADRAGE**, non citation littérale du brief.

1. **Réactivité** ajoutée comme enjeu de la phase **Contact / qualification** de l’Experience Map (enjeu global explicite dans le brief ; rattachement précis à cette phase = **inférence de cadrage**).

2. **Distinction adoptée Traçabilité / Continuité du suivi :**

| Notion | Définition de cadrage |
|--------|------------------------|
| **Traçabilité** | Capacité à **retrouver et comprendre ce qui s’est passé** : historique, étapes réalisées, échanges, documents, actions ou événements du dossier (mémoire factuelle). |
| **Continuité du suivi** | Capacité à **poursuivre correctement** la relation ou le traitement à partir de l’historique et du contexte disponibles, **sans rupture de suivi**. |

Relation : la traçabilité **peut soutenir** la continuité du suivi ; elles sont **liées mais non synonymes**.

3. **Répartition des enjeux — Experience Map Courtier :**

| Phase | Enjeux |
|-------|--------|
| Contact / qualification | Réactivité · Continuité du suivi |
| Devis | Réactivité · Charge administrative |
| Relance / RDV | Réactivité · Continuité du suivi |
| Besoin → proposition | Personnalisation · Continuité du suivi |
| Souscription → vie contrat | Traçabilité · Continuité du suivi |
| Docs / sinistre / renouvellement | Traçabilité · Continuité du suivi · Charge administrative |

4. **Pensées / émotions — Experience Map :** dimension méthodologique conservée ; information **NON RENSEIGNÉE** ; aucune recherche terrain ; **pas** d’inférence émotionnelle.

5. **Émotion — Customer Journey Map :** dimension méthodologique conservée ; information **NON RENSEIGNÉE** ; aucune observation terrain ; **pas** d’inférence émotionnelle.

---
```

---

## 14. Diff Git complet utile

```diff
diff --git a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
index 4898e5dc..a6172162 100644
--- a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
+++ b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
@@ -234,7 +234,7 @@ Aucune affirmation du type « les utilisateurs disent… » n’est formulée.
 | **Cadre** | Expérience opérationnelle ; étapes métier ; actions ; besoins ; enjeux ; points de continuité ; pensées / émotions **uniquement** si qualifiées comme hypothèses lorsque non sourcées |
 | **Nature** | CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF — **NON AS-IS OBSERVÉ** |

-Aucune émotion observée n’est inventée. La ligne PENSÉES / ÉMOTIONS reste **NON RENSEIGNÉ — aucune observation terrain**.
+Aucune émotion observée n’est inventée. La dimension méthodologique **PENSÉES / ÉMOTIONS — NON RENSEIGNÉES** est conservée ; l’information est transversale (aucune recherche terrain ; aucune inférence émotionnelle) — **pas** de répétition phase par phase ni de courbe émotionnelle.

 ---

@@ -255,6 +255,40 @@ Aucune émotion observée n’est inventée. La ligne PENSÉES / ÉMOTIONS reste
 - Elle cartographie l’expérience avec le **service de courtage**, pas avec un produit CRM déjà déployé.
 - **Ne PAS** décider ici : interface Prospect distincte ; interface Client distincte ; accès Prospect direct au CRM ; accès Client à toutes les fonctions ; écrans ; permissions ; composants UI.

+La dimension méthodologique **ÉMOTION — NON RENSEIGNÉE** est conservée ; réserve transversale unique (aucune observation / recherche terrain ; aucune émotion inférée) — **pas** de répétition phase par phase ni de courbe émotionnelle.
+
+---
+
+### Clarifications Morris — maps 1.2
+
+**Statut :** raffinement sémantique validé par Morris (cycle dédié) — **CLARIFICATION DE CADRAGE**, non citation littérale du brief.
+
+1. **Réactivité** ajoutée comme enjeu de la phase **Contact / qualification** de l’Experience Map (enjeu global explicite dans le brief ; rattachement précis à cette phase = **inférence de cadrage**).
+
+2. **Distinction adoptée Traçabilité / Continuité du suivi :**
+
+| Notion | Définition de cadrage |
+|--------|------------------------|
+| **Traçabilité** | Capacité à **retrouver et comprendre ce qui s’est passé** : historique, étapes réalisées, échanges, documents, actions ou événements du dossier (mémoire factuelle). |
+| **Continuité du suivi** | Capacité à **poursuivre correctement** la relation ou le traitement à partir de l’historique et du contexte disponibles, **sans rupture de suivi**. |
+
+Relation : la traçabilité **peut soutenir** la continuité du suivi ; elles sont **liées mais non synonymes**.
+
+3. **Répartition des enjeux — Experience Map Courtier :**
+
+| Phase | Enjeux |
+|-------|--------|
+| Contact / qualification | Réactivité · Continuité du suivi |
+| Devis | Réactivité · Charge administrative |
+| Relance / RDV | Réactivité · Continuité du suivi |
+| Besoin → proposition | Personnalisation · Continuité du suivi |
+| Souscription → vie contrat | Traçabilité · Continuité du suivi |
+| Docs / sinistre / renouvellement | Traçabilité · Continuité du suivi · Charge administrative |
+
+4. **Pensées / émotions — Experience Map :** dimension méthodologique conservée ; information **NON RENSEIGNÉE** ; aucune recherche terrain ; **pas** d’inférence émotionnelle.
+
+5. **Émotion — Customer Journey Map :** dimension méthodologique conservée ; information **NON RENSEIGNÉE** ; aucune observation terrain ; **pas** d’inférence émotionnelle.
+
 ---

 ## Miro — matérialisation 1.2
```

---

## 15. Document 1.2 COMPLET (après commit)

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
| **Personas** | **ADOPTED — MATERIALIZED IN MIRO** — BRIEF-DERIVED |
| **Experience Map** | **ADOPTED FOR 1.2 — COURTIER — MATERIALIZED IN MIRO** |
| **Customer Journey Map** | **ADOPTED FOR 1.2 — PROSPECT → CLIENT — MATERIALIZED IN MIRO** |
| **Architecture** | NOT DECIDED |
| **Stack** | NOT DECIDED |

### Décisions Morris tracées (alignement 1.2)

| Décision | Contenu | Portée |
|----------|---------|--------|
| Ouverture 1.2 | 1.2 = **OPENED** (2026-09-27) | Le 1.2 **n’est pas** VALIDATED |
| Proto-personas | **Courtier** ; **Directeur du cabinet** ; **Prospect → Client assuré** | ADOPTED PROTO-PERSONAS FOR 1.2 — pédagogique / brief-derived — **non** empiriquement validés |
| Experience Map | ADOPTED FOR 1.2 — cible **Courtier** | MATERIALIZED IN MIRO |
| Customer Journey Map | ADOPTED FOR 1.2 — cible **Prospect → Client assuré** | MATERIALIZED IN MIRO |

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
| **Statut** | **ADOPTED FOR 1.2 — COURTIER — MATERIALIZED IN MIRO** |
| **Persona cible** | Courtier |
| **Objet** | Expérience métier globale du courtier au fil de la relation client — **sans** limitation à une interface logicielle précise |
| **Cadre** | Expérience opérationnelle ; étapes métier ; actions ; besoins ; enjeux ; points de continuité ; pensées / émotions **uniquement** si qualifiées comme hypothèses lorsque non sourcées |
| **Nature** | CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF — **NON AS-IS OBSERVÉ** |

Aucune émotion observée n’est inventée. La dimension méthodologique **PENSÉES / ÉMOTIONS — NON RENSEIGNÉES** est conservée ; l’information est transversale (aucune recherche terrain ; aucune inférence émotionnelle) — **pas** de répétition phase par phase ni de courbe émotionnelle.

---

## 12. Customer Journey Map — Prospect → Client

| Champ | Valeur |
|-------|--------|
| **Statut** | **ADOPTED FOR 1.2 — PROSPECT → CLIENT — MATERIALIZED IN MIRO** |
| **Persona cible** | Prospect → Client assuré |
| **Objet** | Relation du persona avec le **service de courtage / cabinet** (service de référence du scénario) |
| **Transition structurante** | Prospect → souscription → Client |
| **Séquence** | Entrée en relation → prospect → devis / rendez-vous → compréhension du besoin → proposition → souscription → client → vie du contrat → échanges / documents → sinistre éventuel → renouvellement / résiliation |
| **Nature** | CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF — **NON AS-IS OBSERVÉ** |

**Règles :**

- La Customer Journey Map **ne suppose PAS** que le futur CRM existe déjà ou est observé.
- Elle cartographie l’expérience avec le **service de courtage**, pas avec un produit CRM déjà déployé.
- **Ne PAS** décider ici : interface Prospect distincte ; interface Client distincte ; accès Prospect direct au CRM ; accès Client à toutes les fonctions ; écrans ; permissions ; composants UI.

La dimension méthodologique **ÉMOTION — NON RENSEIGNÉE** est conservée ; réserve transversale unique (aucune observation / recherche terrain ; aucune émotion inférée) — **pas** de répétition phase par phase ni de courbe émotionnelle.

---

### Clarifications Morris — maps 1.2

**Statut :** raffinement sémantique validé par Morris (cycle dédié) — **CLARIFICATION DE CADRAGE**, non citation littérale du brief.

1. **Réactivité** ajoutée comme enjeu de la phase **Contact / qualification** de l’Experience Map (enjeu global explicite dans le brief ; rattachement précis à cette phase = **inférence de cadrage**).

2. **Distinction adoptée Traçabilité / Continuité du suivi :**

| Notion | Définition de cadrage |
|--------|------------------------|
| **Traçabilité** | Capacité à **retrouver et comprendre ce qui s’est passé** : historique, étapes réalisées, échanges, documents, actions ou événements du dossier (mémoire factuelle). |
| **Continuité du suivi** | Capacité à **poursuivre correctement** la relation ou le traitement à partir de l’historique et du contexte disponibles, **sans rupture de suivi**. |

Relation : la traçabilité **peut soutenir** la continuité du suivi ; elles sont **liées mais non synonymes**.

3. **Répartition des enjeux — Experience Map Courtier :**

| Phase | Enjeux |
|-------|--------|
| Contact / qualification | Réactivité · Continuité du suivi |
| Devis | Réactivité · Charge administrative |
| Relance / RDV | Réactivité · Continuité du suivi |
| Besoin → proposition | Personnalisation · Continuité du suivi |
| Souscription → vie contrat | Traçabilité · Continuité du suivi |
| Docs / sinistre / renouvellement | Traçabilité · Continuité du suivi · Charge administrative |

4. **Pensées / émotions — Experience Map :** dimension méthodologique conservée ; information **NON RENSEIGNÉE** ; aucune recherche terrain ; **pas** d’inférence émotionnelle.

5. **Émotion — Customer Journey Map :** dimension méthodologique conservée ; information **NON RENSEIGNÉE** ; aucune observation terrain ; **pas** d’inférence émotionnelle.

---

## Miro — matérialisation 1.2

| Champ | Valeur |
|-------|--------|
| **Board** | CRM Assurance Courtage — 1.1 Analyse des besoins métiers |
| **Board URL** | https://miro.com/app/board/uXjVHiWX64c=/ |
| **Board ID** | `uXjVHiWX64c=` |
| **État** | **MATERIALIZED** — AWAITING REVIEW / VALIDATION |
| **Méthode** | Miro MCP Canvas Composer (`canvas_create_from_svg`) — objets natifs éditables |

| Livrable | Statut | Frame ID | URL |
|----------|--------|----------|-----|
| 1.2 — Persona — Courtier | MATERIALIZED | `3458764685164456040` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164456040 |
| 1.2 — Persona — Directeur du cabinet | MATERIALIZED | `3458764685164456041` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164456041 |
| 1.2 — Persona — Prospect → Client assuré | MATERIALIZED | `3458764685164456042` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164456042 |
| 1.2 — Experience Map — Courtier | MATERIALIZED | `3458764685164458754` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164458754 |
| 1.2 — Customer Journey Map — Prospect → Client | MATERIALIZED | `3458764685164510320` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164510320 |

**Frames 1.1 (protégées — inchangées) :**

| Frame | Frame ID | URL |
|-------|----------|-----|
| 1.1 — Business Model Canvas | `3458764685039847893` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685039847893 |
| 1.1 — BPMN — Prise de contact → souscription | `3458764685039847894` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685039847894 |

**Règles de vérité :**

- Git reste la source canonique du fond validé / adopté.
- Miro est la représentation visuelle éditable correspondante.
- Aucune interface produit n’est décidée par ces artefacts.
- Le 1.2 reste **OPENED — WORKING ANALYSIS** (non VALIDATED).

---

## 13. Synthèse 1.2

| Point | État |
|-------|------|
| **1.2** | OPENED — WORKING ANALYSIS |
| Courtier | ADOPTED PROTO-PERSONA — MATERIALIZED |
| Directeur | ADOPTED PROTO-PERSONA — MATERIALIZED |
| Prospect → Client | ADOPTED PROTO-PERSONA — MATERIALIZED |
| Evidence | BRIEF-DERIVED / NO FIELD INTERVIEWS |
| Experience Map Courtier | ADOPTED — MATERIALIZED |
| Customer Journey Map Prospect → Client | ADOPTED — MATERIALIZED |
| Miro | MATERIALIZED — AWAITING REVIEW / VALIDATION |
| Architecture | NOT DECIDED |
| Stack | NOT DECIDED |
| **1.3** | **NOT OPENED** |
````

---

## 16. Validations

| Contrôle | Résultat |
|----------|----------|
| Git Truth | PASS |
| EM / CJM lues | PASS |
| Réactivité / Traçabilité / Continuité / répartition | PASS |
| Émotions / répétitions | PASS |
| Zéro suppression · personas · 1.1 · 7 frames | PASS |
| Document 1.2 · 1.2 OPENED · Archi/Stack NOT DECIDED · 1.3 NOT OPENED | PASS |
| Exactement 1 fichier projet · git diff --check · commit local | PASS |
| Push projet | NOT DONE |
| PR | NOT CREATED |
| Review Handoff | _post-publish_ |

---

## 17. Réserves

Preview visuelle limitée ; inspection live ChatGPT requise. Doctrine §11 non modifiée (GO).

---

## 18. Verdict review pack

**complete** — FULL · mono-cycle · contenu maps avant/après + sections Git + diff = yes · synthesis-only = no
