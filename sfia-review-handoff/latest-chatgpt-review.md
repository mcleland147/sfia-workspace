# ChatGPT Review Pack — CRM 1.2 Miro Materialization

**Niveau :** FULL
**Date / heure :** 2026-09-28 00:45:57 CEST (+0200)
**Cycle :** Cadrage projet — matérialisation visuelle 1.2 dans Miro
**Profil SFIA :** Standard
**Typologie :** DOC / visual knowledge artifact
**CKC :** method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md — candidate · experimental · aucune autorité d'exécution
**Studio Convergence :** N/A
**Fake/Real :** N/A
**Mono-cycle :** oui (écrasement total)

---

## 1. Objectif

Matérialiser sur le board Miro existant les cinq livrables 1.2 (3 personas + Experience Map Courtier + CJM Prospect→Client), tracer IDs/URLs MATERIALIZED dans Git, mettre à jour doctrine §11 sans VALIDATED, commit local, review pack FULL + Review Handoff.

---

## 2. Git Truth initial

| Contrôle | Résultat |
|----------|----------|
| Workspace | `/Users/l/Projects/sfia-worktree-crm-assurance` |
| Branche | `docs/crm-assurance-courtage-1-2-user-discovery-01` |
| HEAD initial | `03c14eb8887807e7fd9428554ffc6a55c1b99612` |
| HEAD final | `fe129bd0f7bdf20d2240dc857ef389f28f57760f` |
| origin/main | `b7fdf712073257f9fc64c294ac7e68af2cd64464` |
| Dirt tolérée initiale | `.tmp-sfia-review/chatgpt-review.md` |
| Git Truth | **PASS** |

---

## 3. Décisions Morris applicables

- 1.2 = OPENED — WORKING ANALYSIS
- Proto-personas ADOPTED: Courtier ; Directeur ; Prospect → Client assuré
- Experience Map ADOPTED FOR 1.2 — Courtier
- Customer Journey Map ADOPTED FOR 1.2 — Prospect → Client
- Evidence = BRIEF-DERIVED / NO FIELD INTERVIEWS / NO OBSERVED AS-IS
- Architecture / Stack = NOT DECIDED
- 1.3 = NOT OPENED
- GO Miro autorise création des 5 frames 1.2 uniquement ; frames 1.1 PROTÉGÉES

---

## 4. Sources lues

1. prompts/templates/sfia-cycle-execution-template.md
2. method/sfia-fast-track/core/sfia-cycle-routing-guide.md
3. method/.../sfia-v2.5-project-cycles-method-candidate.md
4. method/.../pilots/01-cadrage.md
5. method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
6. method/sfia-fast-track/core/sfia-rules-and-guardrails.md
7. method/sfia-fast-track/checklists/sfia-validation-checklist.md
8. scripts/sfia/README.md
9. projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
10. projects/crm-assurance-courtage/01-cadrage/01-01-analyse-besoins-metiers.md
11. projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md (source canonique contenu)

---

## 5. Miro board — avant

| Champ | Valeur |
|-------|--------|
| Board | CRM Assurance Courtage — 1.1 Analyse des besoins métiers |
| URL | https://miro.com/app/board/uXjVHiWX64c=/ |
| Board ID | `uXjVHiWX64c=` |
| Inventaire avant | 60 objets ; 2 frames ; 32 shapes ; 19 text areas ; 7 connectors ; 0 loose ; 0 frame 1.2 |
| Frames 1.1 protégées | BMC `3458764685039847893` ; BPMN `3458764685039847894` |
| Board correct | **PASS** |
| 1.2 déjà existant | non — **PASS** (création autorisée) |

---

## 6. Méthode Miro

Miro MCP Canvas Composer — `canvas_create_from_svg` (is_repository=true), 3 créations séquentielles :
1. 3 personas (59 items)
2. Experience Map Courtier (89 items)
3. Customer Journey Map (113 items)

Objets natifs éditables (frames, shapes, textAreas). Aucune image opaque. Aucune suppression. Aucun nouveau board.

---

## 7. Contenu structuré des 5 nouvelles frames

### 1.2 — Persona — Courtier

| Champ | Valeur |
|-------|--------|
| Frame ID | `3458764685164456040` |
| URL | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164456040 |
| Dimensions / position | 920×1280 @ (0,2500) |

```
Sous-titre: ADOPTED PROTO-PERSONA · BRIEF-DERIVED · NO FIELD INTERVIEWS
Légende: EXPLICITE DANS LE BRIEF · INFÉRENCE DE CADRAGE · DÉCISION MORRIS · NON RENSEIGNÉ
RÔLE / ANGLE / RELATION:
- Rôle: Courtier du cabinet
- Angle: Métier / opérations / relation client
- Relation: Utilisateur métier interne principal
OBJECTIFS / CAPACITÉS — EXPLICITE DANS LE BRIEF:
Suivi du cycle de vie client · devis · relances · rendez-vous · souscription · renouvellement / résiliation · collecte de pièces · documents · sinistres · traçabilité · réactivité · personnalisation soutenue par l'historique
BESOINS DÉDUITS — INFÉRENCE DE CADRAGE:
Retrouver l'information utile au suivi · vision cohérente des étapes du dossier · réduire la charge administrative · disposer de l'historique nécessaire à la relation personnalisée
NON RENSEIGNÉ:
outil actuel · volumes · âge · séniorité · aisance numérique · organisation quotidienne · canal favori · rémunération · localisation
SYNTHÈSE ANALYTIQUE — NON VERBATIM:
Le courtier a besoin d'un suivi centralisé du parcours commercial et administratif pour rester réactif et personnaliser la relation sans charge administrative excessive.
```
### 1.2 — Persona — Directeur du cabinet

| Champ | Valeur |
|-------|--------|
| Frame ID | `3458764685164456041` |
| URL | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164456041 |
| Dimensions / position | 920×1280 @ (1000,2500) |

```
Sous-titre: ADOPTED PROTO-PERSONA · PILOTAGE · BRIEF-DERIVED
RÔLE / ANGLE / RELATION:
- Rôle: Directeur du cabinet
- Angle: Pilotage / supervision / performance / vision business
- Relation: Proto-persona de pilotage adopté par décision Morris
FAITS EXPLICITES DU BRIEF:
Directeur du cabinet · différenciation face aux assureurs en ligne · proximité · personnalisation · transparence · réduction tâches admin. · traçabilité · confiance · rétention · tableau de bord : taux de conversion · panier moyen · satisfaction client
INFÉRENCES DE CADRAGE:
Visibilité consolidée · suivi des indicateurs · appréciation performance · supervision globale · usage du dashboard par le Directeur
MENTION OBLIGATOIRE: L'usage personnel du dashboard est une INFÉRENCE DE CADRAGE FORTE + DÉCISION MORRIS. Le brief ne l'affirme pas littéralement.
NON RENSEIGNÉ:
fréquence · appareil · niveau digital · mode de management · taille d'équipe · objectifs chiffrés · droits applicatifs exacts
SYNTHÈSE ANALYTIQUE — NON VERBATIM:
Le directeur a besoin d'une vision consolidée de la performance commerciale pour piloter différenciation, traçabilité, confiance et rétention.
```
### 1.2 — Persona — Prospect → Client assuré

| Champ | Valeur |
|-------|--------|
| Frame ID | `3458764685164456042` |
| URL | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164456042 |
| Dimensions / position | 1100×1280 @ (2000,2500) |

```
Sous-titre: ADOPTED PROTO-PERSONA LONGITUDINAL · 2 ÉTATS · BRIEF-DERIVED
UNE même personne modélisée sur deux états successifs — DÉCISION MORRIS DE MODÉLISATION
ÉTAT 1 — PROSPECT:
Sourcé: prise de contact · devis · rendez-vous · expression / compréhension du besoin · proposition personnalisée · progression vers souscription
Axes: proximité · réactivité · personnalisation · transparence
Réserve: usage direct du futur CRM par le Prospect non démontré — NON RENSEIGNÉ
→ SOUSCRIPTION →
ÉTAT 2 — CLIENT ASSURÉ:
Sourcé: vie du contrat · échanges · documents · historique / transparence · sinistre éventuel · renouvellement · résiliation
Historique temps réel explicite — ne définit ni architecture ni interface exacte
CONTINUITÉ — sans décider d'interfaces:
Évolution des besoins avant / après souscription. Ne décide PAS: deux applications · deux portails · deux interfaces · permissions · écrans · canaux non sourcés
NON RENSEIGNÉ:
démographie · budget · comparateurs · device · fréquence · forme exacte de l'accès client
SYNTHÈSE ANALYTIQUE — NON VERBATIM:
La même personne passe d'une entrée en relation comme prospect à une relation contractualisée comme client, avec une continuité attendue de proximité, personnalisation et transparence.
```
### 1.2 — Experience Map — Courtier

| Champ | Valeur |
|-------|--------|
| Frame ID | `3458764685164458754` |
| URL | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164458754 |
| Dimensions / position | 3100×1180 @ (0,4000) |

```
Sous-titre: ADOPTED · CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF · NON AS-IS OBSERVÉ · Expérience métier globale — non limitée à une interface
Lignes: PHASE · ACTIONS / RESPONSABILITÉS · OBJECTIFS / BESOINS · ENJEUX · NIVEAU DE PREUVE · PENSÉES / ÉMOTIONS
Phases (regroupées):
1. Contact / qualification | Prendre contact ; qualifier le besoin initial | Suivi cohérent dès l'entrée | Continuité du suivi | EXPLICITE + INFÉRENCE | Non renseigné — aucune observation terrain. Toute émotion future serait une hypothèse à valider.
2. Devis | Préparer / transmettre un devis | Information utile pour le devis | Charge admin. ; réactivité | EXPLICITE | Non renseigné — …
3. Relance / RDV | Effectuer relance ; réaliser le rendez-vous | Relation de proximité | Réactivité | EXPLICITE | Non renseigné — …
4. Besoin → proposition | Comprendre le besoin ; préparer proposition | Personnalisation via historique | Personnalisation | EXPLICITE + INFÉRENCE | Non renseigné — …
5. Souscription → vie contrat | Souscrire ; suivre le contrat | Vision des étapes du dossier | Traçabilité | EXPLICITE + INFÉRENCE | Non renseigné — …
6. Docs / sinistre / renouvel. | Documents ; sinistre éventuel ; renouvellement / résiliation | Historique accessible | Charge admin. ; continuité | EXPLICITE | Non renseigné — …
Note: Enjeux (qualifiés): réduction charge administrative · traçabilité · réactivité · continuité du suivi · personnalisation · accès à l'historique. Map NON AS-IS OBSERVÉ — pas un workflow applicatif.
Émotions: NON INVENTÉES.
```
### 1.2 — Customer Journey Map — Prospect → Client

| Champ | Valeur |
|-------|--------|
| Frame ID | `3458764685164510320` |
| URL | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164510320 |
| Dimensions / position | 3400×1180 @ (0,5400) |

```
Sous-titre: ADOPTED · SERVICE DE COURTAGE · CIBLE PÉDAGOGIQUE · NON AS-IS OBSERVÉ · Ne décrit PAS un CRM déjà existant
Bandeau: PROSPECT → SOUSCRIPTION → CLIENT | Relation avec le cabinet / service de courtage
Lignes: PHASE · STATUT DU PERSONA · ACTIONS / INTERACTIONS AVEC LE SERVICE · ATTENTES / ENJEUX · POINTS DE CONTACT SOURCÉS · ÉMOTION
1. Entrée en relation | PROSPECT | Prise de contact ; prise de RDV directe | Proximité ; réactivité | RDV directe (explicite) ; autres canaux NON RENSEIGNÉS | Non renseigné — aucune observation terrain.
2. Devis | PROSPECT | Recevoir / discuter un devis | Réactivité ; clarté | NON RENSEIGNÉ hors étapes brief | Non renseigné — …
3. RDV / besoin | PROSPECT | Participer au RDV ; exprimer besoins | Personnalisation | RDV (explicite) | Non renseigné — …
4. Proposition | PROSPECT | Recevoir proposition personnalisée | Personnalisation ; transparence | NON RENSEIGNÉ (canal exact) | Non renseigné — …
5. Souscription | TRANSITION | Participer à la souscription | Confiance ; continuité | Étape brief — CRM futur NON OBSERVÉ | Non renseigné — …
6. Vie du contrat | CLIENT | Suivre le contrat | Continuité relationnelle | NON RENSEIGNÉ (forme d'accès) | Non renseigné — …
7. Échanges / docs | CLIENT | Échanges ; documents ; historique temps réel | Transparence ; confiance | Historique temps réel EXPLICITE — interface NON DÉCIDÉE | Non renseigné — …
8–9. Sinistre / renouv. | CLIENT | Sinistre éventuel ; renouvellement / résiliation | Confiance ; continuité | Étapes brief — pas d'AS-IS observé | Non renseigné — …
Note: Ne décide PAS: interface Prospect · interface Client · accès CRM direct · permissions · écrans · UI.
Attentes (qualifiées): proximité · réactivité · personnalisation · transparence · confiance · continuité.
Émotions: NON INVENTÉES.
```


---

## 8. Inventaire Miro après

| Métrique | Valeur |
|----------|--------|
| total_items | 321 |
| frames | **7** |
| shapes | 160 |
| textArea | 147 |
| connectors | 7 |
| loose_content | 0 |

Frames finales :
1. 1.1 — Business Model Canvas — `3458764685039847893` (31 items) — **INTACT**
2. 1.1 — BPMN — Prise de contact → souscription — `3458764685039847894` (22 items) — **INTACT**
3. 1.2 — Persona — Courtier — `3458764685164456040`
4. 1.2 — Persona — Directeur du cabinet — `3458764685164456041`
5. 1.2 — Persona — Prospect → Client assuré — `3458764685164456042`
6. 1.2 — Experience Map — Courtier — `3458764685164458754`
7. 1.2 — Customer Journey Map — Prospect → Client — `3458764685164510320`

---

## 9. QA structurelle

| Contrôle | Résultat |
|----------|----------|
| 5 nouvelles frames | PASS |
| Total frames = 7 | PASS |
| Titres exacts | PASS |
| 1.1 BMC intact (même ID) | PASS |
| 1.1 BPMN intact (même ID) | PASS |
| Contenus éditables natifs | PASS |
| Pas de doublon 1.2 | PASS |
| Pas de loose content | PASS |
| Anti-invention | PASS |
| Usage Directeur qualifié inférence | PASS |
| Usage CRM Prospect non affirmé | PASS |
| CJM centrée service de courtage | PASS |
| Émotions non inventées | PASS |

---

## 10. QA visuelle

| Élément | Valeur |
|---------|--------|
| board_show preview | disponible (miro-preview resource créé) |
| Verdict pixel | **NON déclaré PIXEL PERFECT / VISUAL FINAL** |
| QA structurelle / contenu | **STRUCTURAL / CONTENT QA PASS** |
| Réserve visuelle | Alignements / densités à confirmer par inspection live ChatGPT ; measured bounds warnings mineurs (titres) non bloquants |

---

## 11. Doctrine §11 — AVANT (complète)

```markdown
## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.1 Analyse des besoins métiers — VALIDATED (2026-09-27)** |
| Étape active | **1.2 Analyse des besoins utilisateurs — OPENED (GO Morris 2026-09-27)** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY** |
| Prochain objectif | Faire revoir l'alignement documentaire des proto-personas et maps adoptés, puis matérialiser le 1.2 dans Miro dans un cycle dédié après revue PASS |

```

## 12. Doctrine §11 — APRÈS (complète)

```markdown
## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.1 Analyse des besoins métiers — VALIDATED (2026-09-27)** |
| Étape active | **1.2 Analyse des besoins utilisateurs — OPENED (GO Morris 2026-09-27)** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY** |
| Prochain objectif | Faire revoir les artefacts 1.2 matérialisés dans Miro et obtenir la décision Morris de validation du 1.2 avant toute ouverture du 1.3 |

---

```

---

## 13. Document 1.2 — contenu COMPLET après commit

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

Aucune émotion observée n’est inventée. La ligne PENSÉES / ÉMOTIONS reste **NON RENSEIGNÉ — aucune observation terrain**.

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

## 14. Diff Git complet utile

```diff
diff --git a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
index 823735f3..5cb61d1e 100644
--- a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
+++ b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
@@ -170,7 +170,7 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 | Étape active | **1.2 Analyse des besoins utilisateurs — OPENED (GO Morris 2026-09-27)** |
 | Architecture | **NOT DECIDED** |
 | Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY** |
-| Prochain objectif | Faire revoir l’alignement documentaire des proto-personas et maps adoptés, puis matérialiser le 1.2 dans Miro dans un cycle dédié après revue PASS |
+| Prochain objectif | Faire revoir les artefacts 1.2 matérialisés dans Miro et obtenir la décision Morris de validation du 1.2 avant toute ouverture du 1.3 |

 ---

diff --git a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
index 8ae92100..4898e5dc 100644
--- a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
+++ b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
@@ -9,9 +9,9 @@
 | **Doctrine projet** | [`../00-intake/crm-assurance-courtage-operating-doctrine.md`](../00-intake/crm-assurance-courtage-operating-doctrine.md) |
 | **1.1** | VALIDATED (2026-09-27) — [`01-01-analyse-besoins-metiers.md`](01-01-analyse-besoins-metiers.md) |
 | **Evidence user discovery** | BRIEF-DERIVED — NO FIELD INTERVIEWS — NO OBSERVED AS-IS |
-| **Personas** | **ADOPTED PROTO-PERSONAS FOR 1.2** — BRIEF-DERIVED |
-| **Experience Map** | **ADOPTED FOR 1.2** — COURTIER — **NOT MATERIALIZED** |
-| **Customer Journey Map** | **ADOPTED FOR 1.2** — PROSPECT → CLIENT — **NOT MATERIALIZED** |
+| **Personas** | **ADOPTED — MATERIALIZED IN MIRO** — BRIEF-DERIVED |
+| **Experience Map** | **ADOPTED FOR 1.2 — COURTIER — MATERIALIZED IN MIRO** |
+| **Customer Journey Map** | **ADOPTED FOR 1.2 — PROSPECT → CLIENT — MATERIALIZED IN MIRO** |
 | **Architecture** | NOT DECIDED |
 | **Stack** | NOT DECIDED |

@@ -21,8 +21,8 @@
 |----------|---------|--------|
 | Ouverture 1.2 | 1.2 = **OPENED** (2026-09-27) | Le 1.2 **n’est pas** VALIDATED |
 | Proto-personas | **Courtier** ; **Directeur du cabinet** ; **Prospect → Client assuré** | ADOPTED PROTO-PERSONAS FOR 1.2 — pédagogique / brief-derived — **non** empiriquement validés |
-| Experience Map | ADOPTED FOR 1.2 — cible **Courtier** | NOT MATERIALIZED |
-| Customer Journey Map | ADOPTED FOR 1.2 — cible **Prospect → Client assuré** | NOT MATERIALIZED |
+| Experience Map | ADOPTED FOR 1.2 — cible **Courtier** | MATERIALIZED IN MIRO |
+| Customer Journey Map | ADOPTED FOR 1.2 — cible **Prospect → Client assuré** | MATERIALIZED IN MIRO |

 **ADOPTED** (personas / maps) signifie que Morris valide leur **utilisation pédagogique** dans le livrable 1.2.
 **ADOPTED** ne signifie **pas** : user research empirique ; profil statistiquement démontré ; persona terrain validé ; 1.2 VALIDATED.
@@ -228,14 +228,13 @@ Aucune affirmation du type « les utilisateurs disent… » n’est formulée.

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | **ADOPTED FOR 1.2** — COURTIER — **NOT MATERIALIZED** |
+| **Statut** | **ADOPTED FOR 1.2 — COURTIER — MATERIALIZED IN MIRO** |
 | **Persona cible** | Courtier |
-| **Objet futur** | Expérience métier globale du courtier au fil de la relation client — **sans** limitation à une interface logicielle précise |
-| **Cadre futur** | Expérience opérationnelle ; étapes métier ; actions ; besoins ; enjeux ; points de continuité ; pensées / émotions **uniquement** si qualifiées comme hypothèses lorsque non sourcées |
+| **Objet** | Expérience métier globale du courtier au fil de la relation client — **sans** limitation à une interface logicielle précise |
+| **Cadre** | Expérience opérationnelle ; étapes métier ; actions ; besoins ; enjeux ; points de continuité ; pensées / émotions **uniquement** si qualifiées comme hypothèses lorsque non sourcées |
 | **Nature** | CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF — **NON AS-IS OBSERVÉ** |

-Aucune Emotion Map / Experience Map n’est créée dans ce cycle.
-Aucune émotion observée n’est inventée.
+Aucune émotion observée n’est inventée. La ligne PENSÉES / ÉMOTIONS reste **NON RENSEIGNÉ — aucune observation terrain**.

 ---

@@ -243,11 +242,11 @@ Aucune émotion observée n’est inventée.

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | **ADOPTED FOR 1.2** — PROSPECT → CLIENT — **NOT MATERIALIZED** |
+| **Statut** | **ADOPTED FOR 1.2 — PROSPECT → CLIENT — MATERIALIZED IN MIRO** |
 | **Persona cible** | Prospect → Client assuré |
 | **Objet** | Relation du persona avec le **service de courtage / cabinet** (service de référence du scénario) |
 | **Transition structurante** | Prospect → souscription → Client |
-| **Séquence cible (contrat futur)** | Entrée en relation → prospect → devis / rendez-vous → compréhension du besoin → proposition → souscription → client → vie du contrat → échanges / documents → sinistre éventuel → renouvellement / résiliation |
+| **Séquence** | Entrée en relation → prospect → devis / rendez-vous → compréhension du besoin → proposition → souscription → client → vie du contrat → échanges / documents → sinistre éventuel → renouvellement / résiliation |
 | **Nature** | CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF — **NON AS-IS OBSERVÉ** |

 **Règles :**
@@ -256,41 +255,54 @@ Aucune émotion observée n’est inventée.
 - Elle cartographie l’expérience avec le **service de courtage**, pas avec un produit CRM déjà déployé.
 - **Ne PAS** décider ici : interface Prospect distincte ; interface Client distincte ; accès Prospect direct au CRM ; accès Client à toutes les fonctions ; écrans ; permissions ; composants UI.

-Aucune Customer Journey Map n’est créée dans ce cycle.
-
 ---

-## 13. Miro
+## Miro — matérialisation 1.2

 | Champ | Valeur |
 |-------|--------|
-| **État de ce cycle** | **NOT MODIFIED** — **NOT MATERIALIZED** |
-
-Trajectoire proposée :
-
-1. alignement Git avec les décisions Morris (présent cycle) ;
-2. revue ChatGPT du contenu ;
-3. si revue PASS : cycle Miro dédié (GO Morris séparé) ;
-4. matérialisation envisagée : Persona Courtier ; Persona Directeur ; Persona Prospect → Client ; Experience Map Courtier ; Customer Journey Map Prospect → Client ;
-5. revue Miro / contenu ;
-6. décision Morris ultérieure sur validation globale du 1.2.
-
-Le présent alignement **ne constitue PAS** le GO du cycle Miro.
+| **Board** | CRM Assurance Courtage — 1.1 Analyse des besoins métiers |
+| **Board URL** | https://miro.com/app/board/uXjVHiWX64c=/ |
+| **Board ID** | `uXjVHiWX64c=` |
+| **État** | **MATERIALIZED** — AWAITING REVIEW / VALIDATION |
+| **Méthode** | Miro MCP Canvas Composer (`canvas_create_from_svg`) — objets natifs éditables |
+
+| Livrable | Statut | Frame ID | URL |
+|----------|--------|----------|-----|
+| 1.2 — Persona — Courtier | MATERIALIZED | `3458764685164456040` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164456040 |
+| 1.2 — Persona — Directeur du cabinet | MATERIALIZED | `3458764685164456041` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164456041 |
+| 1.2 — Persona — Prospect → Client assuré | MATERIALIZED | `3458764685164456042` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164456042 |
+| 1.2 — Experience Map — Courtier | MATERIALIZED | `3458764685164458754` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164458754 |
+| 1.2 — Customer Journey Map — Prospect → Client | MATERIALIZED | `3458764685164510320` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164510320 |
+
+**Frames 1.1 (protégées — inchangées) :**
+
+| Frame | Frame ID | URL |
+|-------|----------|-----|
+| 1.1 — Business Model Canvas | `3458764685039847893` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685039847893 |
+| 1.1 — BPMN — Prise de contact → souscription | `3458764685039847894` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685039847894 |
+
+**Règles de vérité :**
+
+- Git reste la source canonique du fond validé / adopté.
+- Miro est la représentation visuelle éditable correspondante.
+- Aucune interface produit n’est décidée par ces artefacts.
+- Le 1.2 reste **OPENED — WORKING ANALYSIS** (non VALIDATED).

 ---

-## 14. Synthèse 1.2
+## 13. Synthèse 1.2

 | Point | État |
 |-------|------|
 | **1.2** | OPENED — WORKING ANALYSIS |
-| Courtier | ADOPTED PROTO-PERSONA |
-| Directeur | ADOPTED PROTO-PERSONA |
-| Prospect → Client | ADOPTED PROTO-PERSONA |
+| Courtier | ADOPTED PROTO-PERSONA — MATERIALIZED |
+| Directeur | ADOPTED PROTO-PERSONA — MATERIALIZED |
+| Prospect → Client | ADOPTED PROTO-PERSONA — MATERIALIZED |
 | Evidence | BRIEF-DERIVED / NO FIELD INTERVIEWS |
-| Experience Map Courtier | ADOPTED / NOT MATERIALIZED |
-| Customer Journey Map Prospect → Client | ADOPTED / NOT MATERIALIZED |
-| Miro | NOT MATERIALIZED |
+| Experience Map Courtier | ADOPTED — MATERIALIZED |
+| Customer Journey Map Prospect → Client | ADOPTED — MATERIALIZED |
+| Miro | MATERIALIZED — AWAITING REVIEW / VALIDATION |
 | Architecture | NOT DECIDED |
 | Stack | NOT DECIDED |
 | **1.3** | **NOT OPENED** |

```

---

## 15. Validations Git

| Contrôle | Résultat |
|----------|----------|
| Exactement 2 fichiers projet modifiés | PASS |
| git diff --check | PASS |
| Commit local | PASS — `fe129bd0f7bdf20d2240dc857ef389f28f57760f` |
| Message | `docs(crm-assurance-courtage): materialize 1.2 personas and journey maps` |
| Amend de 03c14eb8 | NON |
| Push projet | **NOT DONE** |
| PR | **NOT CREATED** |

---

## 16. États projet

| Point | État |
|-------|------|
| 1.2 | **OPENED** — WORKING ANALYSIS |
| Miro | **MATERIALIZED** — AWAITING REVIEW / VALIDATION |
| Architecture | NOT DECIDED |
| Stack | NOT DECIDED |
| 1.3 | **NOT OPENED** |

---

## 17. Validations attendues (checklist)

| Contrôle | Résultat |
|----------|----------|
| Git Truth | PASS |
| Board correct | PASS |
| 1.1 BMC intact | PASS |
| 1.1 BPMN intact | PASS |
| Persona Courtier créé | PASS |
| Persona Directeur créé | PASS |
| Persona Prospect → Client créé | PASS |
| Experience Map Courtier créée | PASS |
| Customer Journey Map Prospect → Client créée | PASS |
| 5 nouvelles frames | PASS |
| Total frames final = 7 | PASS |
| Contenus éditables | PASS |
| Anti-invention | PASS |
| Usage Directeur qualifié comme inférence | PASS |
| Usage CRM Prospect non affirmé | PASS |
| CJM centrée service de courtage | PASS |
| Émotions non inventées | PASS |
| 1.2 OPENED | PASS |
| Miro MATERIALIZED | PASS |
| Architecture NOT DECIDED | PASS |
| Stack NOT DECIDED | PASS |
| 1.3 NOT OPENED | PASS |
| Exactement 2 fichiers Git modifiés | PASS |
| git diff --check | PASS |
| Commit local | PASS |
| Push projet | NOT DONE |
| PR | NOT CREATED |
| Review Handoff | _post-publish_ |

---

## 18. Réserves

- QA visuelle : preuve preview board_show disponible mais pas de captures frame-par-frame exhaustives ; ChatGPT doit inspecter le board live.
- Artefacts locaux non commités sous `.tmp-sfia-review/miro-*.svg` (staging Canvas Composer) — hors périmètre commit.
- 1.2 NON VALIDATED ; 1.3 NON OUVERT.

---

## 19. Verdict review pack

**complete** — FULL · mono-cycle · contenu frames + sections Git modifiées = yes · synthesis-only = no
