# ChatGPT Review Pack — CRM 1.2 Group Persona Consolidation

## 0. Identité

| Champ | Valeur |
|-------|--------|
| **Date / heure / timezone** | 2026-09-29 11:11:46 CEST |
| **Cycle** | 1.2 Group Persona Consolidation |
| **Typologie** | DOC / group-truth consolidation |
| **Profil** | **Standard** |
| **Critical** | **NON** |
| **CKC** | Cadrage pilot candidate |

## 1. Git Truth

| Check | Résultat |
|-------|----------|
| Workspace | /Users/l/Projects/sfia-worktree-crm-assurance |
| Branche | docs/crm-assurance-courtage-1-3-watch-01 |
| HEAD initial | 91659feeface45fb45bbd78fec0556c76fec877a |
| HEAD final | eed1a7ff6236bf7bd524a3a6b5c9a9e85f658ad1 |
| origin/main | 6f47f74dc9b515c4c79624b21772223ba02c76cd |
| Dirt | .tmp-sfia-review/** only |
| Drift CRM | NONE |
| Git Truth | **PASS** |

## 2. Sources SFIA / projet

Template ; routing ; CKC 01-cadrage ; OM ; guardrails ; checklist ; scripts README ; doctrine ; 01-01 (contrôle) ; 01-02 ; 01-03 (contrôle).

## 3. Décision groupe 2026-09-29

| Avant (préparatoire) | Après (canonique) |
|----------------------|-------------------|
| Courtier | Courtier |
| Directeur | Directeur |
| Prospect → Client (persona) | **Client particulier** (persona) |
| — | Prospect → client = **lifecycle CJM** |

**Statut attributs :** GROUP-VALIDATED PEDAGOGICAL SCENARIO ASSUMPTIONS — **pas** FIELD RESEARCH FACTS.
**Détail cartes atelier :** non inventé ; **à synchroniser** depuis source atelier lisible.


## Audit occurrences Prospect → Client / personas

| Fichier | Classification | Action |
|---------|----------------|--------|
| 01-02 (ancien set Prospect → Client comme persona) | ADAPT | Remplacé par Client particulier ; note historique |
| 01-02 Experience Map Courtier | KEEP / ADAPT MINOR | Conservée ; Courtier toujours canonique |
| 01-02 Customer Journey | ADAPT | Renommée Client particulier — Du prospect à la vie client |
| 01-01 (Prospect/Client comme états BMC/BPMN) | NO CHANGE / KEEP | États relationnels valides ; pas de contradiction |
| 01-03 | NO CHANGE | Pas de dépendance à l’ancien persona |
| Doctrine §11 | ADAPT | Statuts personas / maps / Miro SYNC REQUIRED |
| Miro | OUT OF SCOPE | SYNC REQUIRED — NOT MODIFIED |
| Notion | OUT OF SCOPE | NOT MODIFIED |


## 4. Contrôles protégés

| Fichier | Résultat |
|---------|----------|
| 01-01 | **NO CHANGE** — particuliers déjà dans BMC ; Prospect/Client = états BPMN valides |
| 01-03 | **NO CHANGE** — pas de dépendance structurante à l’ancien persona |
| Miro | **NOT MODIFIED** — **MIRO PERSONA SYNC REQUIRED** |
| Notion | **NOT MODIFIED** |
| 1.3 status | conservé OPENED — AWAITING FINAL REVIEW |
| 1.4 | **NOT OPENED** |
| Architecture / Stack | **NOT DECIDED** |

## 5. Doctrine §11 complète

```markdown
## 11. État actuel

| Élément | État |
|---------|------|
| Phase actuelle | Bloc / Phase 1 — cadrage |
| Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
| 1.1 | **VALIDATED** |
| 1.2 | **VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
| Personas canoniques | **Client particulier** · **Courtier** · **Directeur** |
| Ancien persona préparatoire Prospect → Client | **SUPERSEDED AS PERSONA** |
| Continuité prospect → client | **RETAINED IN CUSTOMER JOURNEY** |
| Experience Map Courtier | **RETAINED / ALIGNED** |
| Customer Journey | **Client particulier — Du prospect à la vie client** |
| Miro personas / maps | **SYNC REQUIRED** (Cursor n’a pas modifié Miro) |
| 1.3 | **OPENED — AWAITING FINAL REVIEW** |
| 1.3.1 | **REVIEW PASS** |
| Base détaillée 1.3.2 A→E | **REVIEW PASS** (historique Git) |
| Étape actuelle | **1.3.2 simplification pédagogique — AWAITING REVIEW** |
| 1.4 | **NOT OPENED** |
| Architecture | **NOT DECIDED** |
| Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
| Prochain objectif | Revue ChatGPT de la consolidation personas 1.2 ; 1.3 reste ouvert séparément (pas validé par ce cycle) |

---
```

## 6. Persona Courtier (section complète)

```markdown
## 5. Persona — Courtier

| Champ | Contenu | Niveau de preuve |
|-------|---------|------------------|
| **Rôle** | Courtier du cabinet | EXPLICITE + SET GROUPE |
| **Angle** | Métier / opérations / relation client | EXPLICITE |
| **Relation au projet** | Utilisateur métier interne principal | EXPLICITE |
| **Objectifs / capacités supportés** | Prospection ; devis ; relances ; rendez-vous ; conseil personnalisé ; souscription ; renouvellement / résiliation ; documents ; sinistres ; traçabilité ; réactivité ; personnalisation soutenue par l’historique | EXPLICITE BRIEF + BMC |
| **Besoins déduits** | Retrouver l’information utile ; vision cohérente du dossier ; limiter l’admin ; historique pour personnaliser | INFÉRENCE DE CADRAGE |

**Non inventé :** démographie atelier, outils nominatifs, frustrations verbatim, scores — **à synchroniser** depuis la carte atelier.

**Phrase de synthèse (analytique — non issue d’un entretien) :**
Le courtier a besoin d’un suivi centralisé du parcours commercial et administratif pour rester réactif et personnaliser la relation sans charge administrative excessive.

---
```

## 7. Persona Directeur (section complète)

```markdown
## 6. Persona — Directeur

| Champ | Contenu | Niveau de preuve |
|-------|---------|------------------|
| **Rôle** | Directeur du cabinet | EXPLICITE + SET GROUPE |
| **Angle** | Pilotage / performance / vision business | EXPLICITE (objectifs) |
| **Relation au projet** | Persona de pilotage | SET GROUPE |

### Faits explicites du brief (conservés)

- souhaite se différencier face aux assureurs en ligne ;
- insiste sur proximité, personnalisation, transparence ;
- objectifs : réduction des tâches administratives ; traçabilité ; confiance ; rétention ;
- tableau de bord : taux de conversion ; panier moyen ; satisfaction client.

### Inférences de cadrage (conservées)

Visibilité consolidée ; suivi des indicateurs ; supervision de l’activité ; **usage du dashboard** = inférence forte (le brief ne dit pas littéralement que le directeur consulte personnellement le dashboard).

**Non inventé :** démographie atelier, outils nominatifs, frustrations verbatim — **à synchroniser**.

**Phrase de synthèse (analytique) :**
Le directeur a besoin d’une vision consolidée de la performance commerciale pour piloter différenciation, traçabilité, confiance et rétention.

---
```

## 8. Persona Client particulier (section complète)

```markdown
## 7. Persona — Client particulier

| Champ | Contenu | Niveau de preuve |
|-------|---------|------------------|
| **Rôle** | Client particulier (persona externe) | SET GROUPE 2026-09-29 |
| **Segments BMC associés** | Client particulier (famille/étudiant) ; TPE/PME reste un segment BMC distinct (pas un 4ᵉ persona 1.2) | BMC GROUPE |
| **États de parcours** | Prospect → souscription → Client (vie du contrat) | EXPLICITE BRIEF — lifecycle CJM |
| **Attentes supportées (brief)** | Proximité ; réactivité ; personnalisation ; transparence ; confiance ; continuité | EXPLICITE |
| **Canaux (BMC groupe)** | RDV physique ; Visio ; téléphone ; email ; espace client | BMC GROUPE — conception UI **NON DÉCIDÉE** |

### Lifecycle (pas un second persona)

| État | Attentes / étapes supportées | Niveau |
|------|------------------------------|--------|
| **Prospect** | Contact ; devis ; RDV ; besoin ; proposition ; progression vers souscription | EXPLICITE BRIEF |
| **Client** | Vie du contrat ; échanges ; documents ; historique ; sinistre éventuel ; renouvellement / résiliation | EXPLICITE BRIEF |

**Réserve :** usage direct du futur CRM par le prospect = **NON RENSEIGNÉ**. Forme exacte de l’accès client = **NOT DECIDED**.

**Non inventé :** nom, âge, revenus, situation familiale, localisation, outils, frustrations détaillées — **à synchroniser** depuis la carte atelier « Client particulier ».

**Phrase de synthèse (analytique) :**
Le Client particulier est suivi depuis l’entrée en relation (état prospect) jusqu’à la vie du contrat (état client), avec une continuité attendue de proximité, personnalisation et transparence.

---
```

## 9. Experience Map Courtier (après alignement)

```markdown
## 11. Experience Map — Courtier

| Champ | Valeur |
|-------|--------|
| **Statut** | **RETAINED / ALIGNED** — Courtier reste persona canonique |
| **Persona cible** | Courtier |
| **Décision d’alignement 2026-09-29** | **KEEP / ADAPT MINOR** — pas de reconstruction ; le parcours métier reste cohérent avec le Courtier |
| **Objet** | Expérience métier du courtier au fil de la relation (prospects → clients) — sans interface logicielle décidée |
| **Nature** | CIBLE PÉDAGOGIQUE — **NON AS-IS OBSERVÉ** |

### Phases (conservées)

| Phase | Actions / enjeux (cadrage) | Niveau de preuve |
|-------|----------------------------|------------------|
| Prospection / contact / qualification | Prospecter ; prendre contact ; qualifier — Réactivité · Continuité du suivi | EXPLICITE + INFÉRENCE |
| Devis | Réactivité · Charge administrative | EXPLICITE + INFÉRENCE |
| Relance / RDV | Réactivité · Continuité du suivi | EXPLICITE + INFÉRENCE |
| Besoin → proposition | Personnalisation · Continuité du suivi | EXPLICITE + INFÉRENCE |
| Souscription → vie contrat | Traçabilité · Continuité du suivi | EXPLICITE + INFÉRENCE |
| Docs / sinistre / renouvellement | Traçabilité · Continuité · Charge administrative | EXPLICITE + INFÉRENCE |

**Traçabilité** = retrouver ce qui s’est passé (historique, étapes, documents).
**Continuité du suivi** = poursuivre correctement la relation à partir du contexte — liée mais non synonyme.

**Pensées / émotions :** dimension méthodologique conservée ; **NON RENSEIGNÉES** — pas d’inférence émotionnelle ; pas d’injection artificielle des frustrations atelier phase par phase.

---
```

## 10. Customer Journey Client particulier (après alignement)

```markdown
## 12. Customer Journey Map — Client particulier

| Champ | Valeur |
|-------|--------|
| **Statut** | **ADAPTED** — réalignement conceptuel 2026-09-29 |
| **Titre** | Customer Journey — **Client particulier** |
| **Sous-titre** | Du prospect à la vie client |
| **Persona cible** | **Client particulier** (pas « Prospect → Client » comme persona) |
| **Lifecycle** | Prospect → souscription → Client |
| **Objet** | Relation avec le **service de courtage / cabinet** |
| **Nature** | CIBLE PÉDAGOGIQUE — **NON AS-IS OBSERVÉ** |

### Séquence (étapes déjà validées — conservées)

1. Première prise de contact
2. Devis
3. Relance / rendez-vous
4. Compréhension / qualification du besoin
5. Proposition personnalisée
6. Souscription
7. Vie du contrat / suivi (échanges, documents, sinistre éventuel, renouvellement / résiliation)

**Règles :**

- Le début « prospect » du journey **n’en fait pas** un persona différent.
- La map **ne suppose pas** que le futur CRM existe déjà.
- **Ne pas décider ici :** interfaces distinctes prospect/client ; permissions ; écrans ; UI.
- **Émotion :** NON RENSEIGNÉE — pas d’invention.
- Canaux groupe (physique, Visio, téléphone, email, espace client) : transversaux — pas d’affectation canal × phase inventée.

---
```

## 11. Miro status

```markdown
## Miro — état

| Champ | Valeur |
|-------|--------|
| **Board** | https://miro.com/app/board/uXjVHiWX64c=/ |
| **État Cursor** | **NOT MODIFIED** |
| **Sync** | **MIRO PERSONA SYNC REQUIRED** |

| Livrable Miro historique | Impact |
|--------------------------|--------|
| Persona Courtier | À auditer / aligner sur set groupe |
| Persona Directeur | À auditer / aligner |
| Persona Prospect → Client | **À remplacer** par **Client particulier** |
| Experience Map Courtier | À auditer / aligner si besoin |
| Customer Journey Prospect → Client | **À renommer / réaligner** → Client particulier — du prospect à la vie client |

Git est canonique après transcription. Miro n’est **pas** synchronisé dans ce cycle.

Frames 1.1 (BMC / BPMN) : **protégées — inchangées**.

---
```

## 12. Synthèse 1.2

```markdown
## 13. Synthèse 1.2

| Point | État |
|-------|------|
| **1.2** | **VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
| Personas canoniques | Client particulier · Courtier · Directeur |
| Ancien persona Prospect → Client | **SUPERSEDED AS PERSONA** |
| Continuity prospect → client | **RETAINED IN CUSTOMER JOURNEY** |
| Experience Map Courtier | **RETAINED / ALIGNED** |
| Customer Journey | **Client particulier — Du prospect à la vie client** |
| Détail cartes atelier | **À SYNCHRONISER** (non inventé) |
| Evidence | GROUP-VALIDATED PEDAGOGICAL SCENARIO — NO FIELD INTERVIEWS |
| Miro | **SYNC REQUIRED** / NOT MODIFIED by Cursor |
| Architecture / Stack | NOT DECIDED |
| **1.3** | OPENED — AWAITING FINAL REVIEW (fond inchangé ce cycle) |
| **1.4** | NOT OPENED |
```

## 13. CONTENU COMPLET FINAL 01-02

```markdown
# CRM Assurance Courtage — 1.2 Analyse des besoins utilisateurs

| Champ | Valeur |
|-------|--------|
| **Statut** | **VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
| **Étape** | 1.2 |
| **Source métier principale** | Brief pédagogique CRM + 1.1 validé + BMC groupe + **personas atelier groupe 2026-09-29** |
| **Source méthodologique** | Guide Bloc 1 PBNC + exigences 1.2 du brief |
| **Doctrine projet** | [`../00-intake/crm-assurance-courtage-operating-doctrine.md`](../00-intake/crm-assurance-courtage-operating-doctrine.md) |
| **1.1** | VALIDATED — [`01-01-analyse-besoins-metiers.md`](01-01-analyse-besoins-metiers.md) |
| **Evidence user discovery** | GROUP-VALIDATED PEDAGOGICAL SCENARIO — **NO FIELD INTERVIEWS** — **NO OBSERVED AS-IS** |
| **Personas canoniques** | **Client particulier** · **Courtier** · **Directeur** |
| **Experience Map** | **RETAINED / ALIGNED** — Courtier |
| **Customer Journey Map** | **Client particulier — Du prospect à la vie client** |
| **Miro** | **SYNC REQUIRED** — board historique encore sur l’ancienne version (Cursor **n’a pas** modifié Miro) |
| **Architecture** | NOT DECIDED |
| **Stack** | NOT DECIDED |
| **1.3** | OPENED — AWAITING FINAL REVIEW (hors modification de fond dans ce cycle) |
| **1.4** | NOT OPENED |

### Décisions Morris / groupe tracées

| Décision | Contenu | Portée |
|----------|---------|--------|
| Ouverture 1.2 | 1.2 = OPENED (2026-09-27) | Historique |
| Validation 1.2 initiale | 1.2 = VALIDATED (2026-09-28) | Livrable initial |
| **Consolidation personas atelier** | Set canonique = **Client particulier** · **Courtier** · **Directeur** (2026-09-29) | **Supersède** le persona préparatoire « Prospect → Client » |
| Experience Map | Cible **Courtier** — conservée / alignée | Contenu parcours métier inchangé sur le fond |
| Customer Journey Map | Persona **Client particulier** ; lifecycle prospect → client | Réalignement conceptuel |

**VALIDATED** (1.2) signifie que Morris / le groupe valide le livrable de cadrage utilisateur pour la suite.
Cela ne signifie **pas** : user research empirique ; profil statistiquement démontré ; données terrain d’un cabinet réel.

---

## 1. Objectif du 1.2

Identifier les profils utilisateurs pertinents pour le cas pédagogique CRM Assurance Courtage, comprendre leurs objectifs et attentes **à partir des informations disponibles**, et fonder les maps (Experience Map / Customer Journey) sur les **personas validés par le groupe**.

Ce livrable doit :

- distinguer hypothèses de scénario pédagogique et faits terrain ;
- ne pas transformer l’analyse en spécification fonctionnelle, backlog, interfaces ou architecture.

**Ce livrable ne constitue PAS une user research empirique.**

---

## 2. Niveau de preuve et méthode

| Catégorie | Signification |
|-----------|---------------|
| **EXPLICITE DANS LE BRIEF / BMC** | Information affirmée par le brief ou le BMC groupe |
| **GROUP-VALIDATED PEDAGOGICAL SCENARIO** | Attributs / set de personas consolidés en atelier et validés par le groupe — **pas** des faits terrain |
| **INFÉRENCE DE CADRAGE** | Déduction raisonnable, clairement marquée |
| **NON RENSEIGNÉ / À SYNCHRONISER** | Détail non disponible de façon lisible dans le dépôt — **non inventé** |

Aucun entretien, questionnaire ou observation terrain n’est fourni.
Aucun verbatim réel n’est disponible.

### Provenance personas (obligatoire)

Les attributs des personas sont des **hypothèses de scénario pédagogique consolidées et validées par le groupe**.
Ils servent à concevoir et tester la cohérence du CRM ; **ils ne résultent pas d’entretiens ou d’une étude terrain réelle**.

Les cartes atelier (Profil · Démographie · Objectifs · Frustrations · Tâches · Outils) constituent la **référence de contenu détaillé**.
Dans le présent dépôt, aucune source locale lisible et explicitement identifiable comme transcription complète de ces cartes n’a été trouvée pour ce cycle : **les petits textes (âge, revenus, localisation, outils nominatifs, scores, etc.) ne sont pas inventés ici**.
**Transcription détaillée à synchroniser** depuis la source atelier lisible — **sans** remettre en cause la validation du **set** de personas.

---

## 3. Utilisateurs et parties prenantes

| Profil | Qualification | Preuves / statut |
|--------|---------------|------------------|
| **Courtier** | Utilisateur métier interne principal — **persona canonique** | Prospection ; devis ; relances ; RDV ; conseil ; souscription ; renouvellement / résiliation ; documents ; sinistres ; suivi — EXPLICITE BRIEF + BMC + SET GROUPE |
| **Directeur** | Persona de pilotage — **persona canonique** | Objectifs business, différenciation, KPIs — EXPLICITE BRIEF + SET GROUPE |
| **Client particulier** | Persona externe — **persona canonique** | Segment BMC + SET GROUPE 2026-09-29 |
| **Prospect** | **État** commercial (avant souscription) du Client particulier | Contact ; devis ; RDV ; besoin ; proposition ; souscription — EXPLICITE BRIEF — **≠ persona distinct** |
| **Client (état)** | **État** commercial (après souscription) du Client particulier | Contrats ; documents ; historique ; sinistres ; renouvellement / résiliation — EXPLICITE BRIEF — **≠ persona distinct** |

**Persona ≠ état commercial.**
Persona = **Client particulier**.
États possibles du parcours = prospect → futur client → client.

---

## 4. Personas canoniques (set groupe 2026-09-29)

| # | Persona | Statut |
|---|---------|--------|
| 1 | **Client particulier** | **CANONICAL** — GROUP-VALIDATED PEDAGOGICAL SCENARIO |
| 2 | **Courtier** | **CANONICAL** — GROUP-VALIDATED PEDAGOGICAL SCENARIO |
| 3 | **Directeur** | **CANONICAL** — GROUP-VALIDATED PEDAGOGICAL SCENARIO |

**Note historique :** la version préparatoire utilisait un persona longitudinal **Prospect → Client**. La consolidation atelier du **2026-09-29** retient désormais le persona **Client particulier** ; la continuité prospect → client est conservée dans le **Customer Journey**.

Structure attendue des cartes atelier (référence) : Profil · Démographie · Objectifs · Frustrations · Tâches · Outils — **détail à synchroniser** (voir §2).

---

## 5. Persona — Courtier

| Champ | Contenu | Niveau de preuve |
|-------|---------|------------------|
| **Rôle** | Courtier du cabinet | EXPLICITE + SET GROUPE |
| **Angle** | Métier / opérations / relation client | EXPLICITE |
| **Relation au projet** | Utilisateur métier interne principal | EXPLICITE |
| **Objectifs / capacités supportés** | Prospection ; devis ; relances ; rendez-vous ; conseil personnalisé ; souscription ; renouvellement / résiliation ; documents ; sinistres ; traçabilité ; réactivité ; personnalisation soutenue par l’historique | EXPLICITE BRIEF + BMC |
| **Besoins déduits** | Retrouver l’information utile ; vision cohérente du dossier ; limiter l’admin ; historique pour personnaliser | INFÉRENCE DE CADRAGE |

**Non inventé :** démographie atelier, outils nominatifs, frustrations verbatim, scores — **à synchroniser** depuis la carte atelier.

**Phrase de synthèse (analytique — non issue d’un entretien) :**
Le courtier a besoin d’un suivi centralisé du parcours commercial et administratif pour rester réactif et personnaliser la relation sans charge administrative excessive.

---

## 6. Persona — Directeur

| Champ | Contenu | Niveau de preuve |
|-------|---------|------------------|
| **Rôle** | Directeur du cabinet | EXPLICITE + SET GROUPE |
| **Angle** | Pilotage / performance / vision business | EXPLICITE (objectifs) |
| **Relation au projet** | Persona de pilotage | SET GROUPE |

### Faits explicites du brief (conservés)

- souhaite se différencier face aux assureurs en ligne ;
- insiste sur proximité, personnalisation, transparence ;
- objectifs : réduction des tâches administratives ; traçabilité ; confiance ; rétention ;
- tableau de bord : taux de conversion ; panier moyen ; satisfaction client.

### Inférences de cadrage (conservées)

Visibilité consolidée ; suivi des indicateurs ; supervision de l’activité ; **usage du dashboard** = inférence forte (le brief ne dit pas littéralement que le directeur consulte personnellement le dashboard).

**Non inventé :** démographie atelier, outils nominatifs, frustrations verbatim — **à synchroniser**.

**Phrase de synthèse (analytique) :**
Le directeur a besoin d’une vision consolidée de la performance commerciale pour piloter différenciation, traçabilité, confiance et rétention.

---

## 7. Persona — Client particulier

| Champ | Contenu | Niveau de preuve |
|-------|---------|------------------|
| **Rôle** | Client particulier (persona externe) | SET GROUPE 2026-09-29 |
| **Segments BMC associés** | Client particulier (famille/étudiant) ; TPE/PME reste un segment BMC distinct (pas un 4ᵉ persona 1.2) | BMC GROUPE |
| **États de parcours** | Prospect → souscription → Client (vie du contrat) | EXPLICITE BRIEF — lifecycle CJM |
| **Attentes supportées (brief)** | Proximité ; réactivité ; personnalisation ; transparence ; confiance ; continuité | EXPLICITE |
| **Canaux (BMC groupe)** | RDV physique ; Visio ; téléphone ; email ; espace client | BMC GROUPE — conception UI **NON DÉCIDÉE** |

### Lifecycle (pas un second persona)

| État | Attentes / étapes supportées | Niveau |
|------|------------------------------|--------|
| **Prospect** | Contact ; devis ; RDV ; besoin ; proposition ; progression vers souscription | EXPLICITE BRIEF |
| **Client** | Vie du contrat ; échanges ; documents ; historique ; sinistre éventuel ; renouvellement / résiliation | EXPLICITE BRIEF |

**Réserve :** usage direct du futur CRM par le prospect = **NON RENSEIGNÉ**. Forme exacte de l’accès client = **NOT DECIDED**.

**Non inventé :** nom, âge, revenus, situation familiale, localisation, outils, frustrations détaillées — **à synchroniser** depuis la carte atelier « Client particulier ».

**Phrase de synthèse (analytique) :**
Le Client particulier est suivi depuis l’entrée en relation (état prospect) jusqu’à la vie du contrat (état client), avec une continuité attendue de proximité, personnalisation et transparence.

---

## 8. Synthèse des besoins par profil

| Profil | Objectifs | Attentes | Besoins / enjeux | Niveau |
|--------|-----------|----------|------------------|--------|
| Courtier | Suivi cycle ; devis / RDV / souscription ; docs ; sinistres | Réactivité ; personnalisation | Vision du dossier ; admin. réduite | BRIEF + INFÉRENCE |
| Directeur | Différenciation ; KPIs | Pilotage | Visibilité consolidée | BRIEF + INFÉRENCE |
| Client particulier — état prospect | Contact → devis → RDV → proposition → souscription | Proximité ; réactivité ; personnalisation ; transparence | Entrée en relation claire | BRIEF + INFÉRENCE |
| Client particulier — état client | Suivi contrats ; docs ; sinistre ; renouvellement / résiliation | Transparence ; confiance ; continuité | Comprendre le suivi ; retrouver l’info | BRIEF + INFÉRENCE |

Aucune user story. Aucun backlog.

---

## 9. Difficultés / pain points

Aucune observation AS-IS. Aucune affirmation du type « les utilisateurs disent… ».

**Courtier :** charge administrative ; traçabilité ; réactivité ; continuité du suivi.
**Directeur :** visibilité / pilotage déduits des objectifs et KPIs.
**Client particulier :** fluidité d’entrée en relation ; personnalisation ; transparence ; confiance ; continuité.

**Qualification :** DÉDUITS DU BRIEF / SCÉNARIO — **NON OBSERVÉS SUR LE TERRAIN**.
Frustrations détaillées des cartes atelier : **à synchroniser** (non inventées).

---

## 10. Inconnues et limites

- aucun entretien réel ;
- détails démographiques / outils / frustrations des cartes atelier : **à synchroniser** ;
- usage personnel du dashboard par le Directeur = inférence ;
- usage direct du CRM par le Prospect = non démontré ;
- interfaces / permissions = hors scope ;
- pensées / émotions des maps = **NON RENSEIGNÉES**.

---

## 11. Experience Map — Courtier

| Champ | Valeur |
|-------|--------|
| **Statut** | **RETAINED / ALIGNED** — Courtier reste persona canonique |
| **Persona cible** | Courtier |
| **Décision d’alignement 2026-09-29** | **KEEP / ADAPT MINOR** — pas de reconstruction ; le parcours métier reste cohérent avec le Courtier |
| **Objet** | Expérience métier du courtier au fil de la relation (prospects → clients) — sans interface logicielle décidée |
| **Nature** | CIBLE PÉDAGOGIQUE — **NON AS-IS OBSERVÉ** |

### Phases (conservées)

| Phase | Actions / enjeux (cadrage) | Niveau de preuve |
|-------|----------------------------|------------------|
| Prospection / contact / qualification | Prospecter ; prendre contact ; qualifier — Réactivité · Continuité du suivi | EXPLICITE + INFÉRENCE |
| Devis | Réactivité · Charge administrative | EXPLICITE + INFÉRENCE |
| Relance / RDV | Réactivité · Continuité du suivi | EXPLICITE + INFÉRENCE |
| Besoin → proposition | Personnalisation · Continuité du suivi | EXPLICITE + INFÉRENCE |
| Souscription → vie contrat | Traçabilité · Continuité du suivi | EXPLICITE + INFÉRENCE |
| Docs / sinistre / renouvellement | Traçabilité · Continuité · Charge administrative | EXPLICITE + INFÉRENCE |

**Traçabilité** = retrouver ce qui s’est passé (historique, étapes, documents).
**Continuité du suivi** = poursuivre correctement la relation à partir du contexte — liée mais non synonyme.

**Pensées / émotions :** dimension méthodologique conservée ; **NON RENSEIGNÉES** — pas d’inférence émotionnelle ; pas d’injection artificielle des frustrations atelier phase par phase.

---

## 12. Customer Journey Map — Client particulier

| Champ | Valeur |
|-------|--------|
| **Statut** | **ADAPTED** — réalignement conceptuel 2026-09-29 |
| **Titre** | Customer Journey — **Client particulier** |
| **Sous-titre** | Du prospect à la vie client |
| **Persona cible** | **Client particulier** (pas « Prospect → Client » comme persona) |
| **Lifecycle** | Prospect → souscription → Client |
| **Objet** | Relation avec le **service de courtage / cabinet** |
| **Nature** | CIBLE PÉDAGOGIQUE — **NON AS-IS OBSERVÉ** |

### Séquence (étapes déjà validées — conservées)

1. Première prise de contact
2. Devis
3. Relance / rendez-vous
4. Compréhension / qualification du besoin
5. Proposition personnalisée
6. Souscription
7. Vie du contrat / suivi (échanges, documents, sinistre éventuel, renouvellement / résiliation)

**Règles :**

- Le début « prospect » du journey **n’en fait pas** un persona différent.
- La map **ne suppose pas** que le futur CRM existe déjà.
- **Ne pas décider ici :** interfaces distinctes prospect/client ; permissions ; écrans ; UI.
- **Émotion :** NON RENSEIGNÉE — pas d’invention.
- Canaux groupe (physique, Visio, téléphone, email, espace client) : transversaux — pas d’affectation canal × phase inventée.

---

## Alignement BMC groupe (rappel)

- Segments : **TPE/PME** ; **Client particulier (famille/étudiant)** — le persona 1.2 externe retenu par l’atelier est **Client particulier**.
- Courtier : prospection + conseil personnalisé confirmés.
- Directeur : inchangé sur le fond brief.
- Maps : sémantique Traçabilité / Continuité conservée.

---

## Miro — état

| Champ | Valeur |
|-------|--------|
| **Board** | https://miro.com/app/board/uXjVHiWX64c=/ |
| **État Cursor** | **NOT MODIFIED** |
| **Sync** | **MIRO PERSONA SYNC REQUIRED** |

| Livrable Miro historique | Impact |
|--------------------------|--------|
| Persona Courtier | À auditer / aligner sur set groupe |
| Persona Directeur | À auditer / aligner |
| Persona Prospect → Client | **À remplacer** par **Client particulier** |
| Experience Map Courtier | À auditer / aligner si besoin |
| Customer Journey Prospect → Client | **À renommer / réaligner** → Client particulier — du prospect à la vie client |

Git est canonique après transcription. Miro n’est **pas** synchronisé dans ce cycle.

Frames 1.1 (BMC / BPMN) : **protégées — inchangées**.

---

## 13. Synthèse 1.2

| Point | État |
|-------|------|
| **1.2** | **VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
| Personas canoniques | Client particulier · Courtier · Directeur |
| Ancien persona Prospect → Client | **SUPERSEDED AS PERSONA** |
| Continuity prospect → client | **RETAINED IN CUSTOMER JOURNEY** |
| Experience Map Courtier | **RETAINED / ALIGNED** |
| Customer Journey | **Client particulier — Du prospect à la vie client** |
| Détail cartes atelier | **À SYNCHRONISER** (non inventé) |
| Evidence | GROUP-VALIDATED PEDAGOGICAL SCENARIO — NO FIELD INTERVIEWS |
| Miro | **SYNC REQUIRED** / NOT MODIFIED by Cursor |
| Architecture / Stack | NOT DECIDED |
| **1.3** | OPENED — AWAITING FINAL REVIEW (fond inchangé ce cycle) |
| **1.4** | NOT OPENED |
```

## 14. Diff Git

```
 .../crm-assurance-courtage-operating-doctrine.md   |  12 +-
 .../01-02-analyse-besoins-utilisateurs.md          | 443 +++++++++------------
 2 files changed, 187 insertions(+), 268 deletions(-)

```

```diff
diff --git a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
index 127134fb..aace4df7 100644
--- a/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
+++ b/projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md
@@ -168,9 +168,15 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 | Élément | État |
 |---------|------|
 | Phase actuelle | Bloc / Phase 1 — cadrage |
-| Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED (2026-09-28)** |
+| Dernière étape validée | **1.2 Analyse des besoins utilisateurs — VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
 | 1.1 | **VALIDATED** |
-| 1.2 | **VALIDATED** |
+| 1.2 | **VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
+| Personas canoniques | **Client particulier** · **Courtier** · **Directeur** |
+| Ancien persona préparatoire Prospect → Client | **SUPERSEDED AS PERSONA** |
+| Continuité prospect → client | **RETAINED IN CUSTOMER JOURNEY** |
+| Experience Map Courtier | **RETAINED / ALIGNED** |
+| Customer Journey | **Client particulier — Du prospect à la vie client** |
+| Miro personas / maps | **SYNC REQUIRED** (Cursor n’a pas modifié Miro) |
 | 1.3 | **OPENED — AWAITING FINAL REVIEW** |
 | 1.3.1 | **REVIEW PASS** |
 | Base détaillée 1.3.2 A→E | **REVIEW PASS** (historique Git) |
@@ -178,7 +184,7 @@ Décisions futures **séparées** — le GO du présent cycle documentaire **ne
 | 1.4 | **NOT OPENED** |
 | Architecture | **NOT DECIDED** |
 | Stack runtime | **CANDIDATE TOOL ECOSYSTEM ONLY / NOT DECIDED** |
-| Prochain objectif | Revue ChatGPT de la version pédagogique, puis décision Morris séparée sur validation globale du 1.3 |
+| Prochain objectif | Revue ChatGPT de la consolidation personas 1.2 ; 1.3 reste ouvert séparément (pas validé par ce cycle) |

 ---

diff --git a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
index 485d31af..94c16517 100644
--- a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
+++ b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
@@ -2,46 +2,47 @@

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | **VALIDATED** — décision Morris du **2026-09-28** |
+| **Statut** | **VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
 | **Étape** | 1.2 |
-| **Source métier principale** | Brief pédagogique CRM + 1.1 validé + BMC groupe validé 2026-09-28 |
+| **Source métier principale** | Brief pédagogique CRM + 1.1 validé + BMC groupe + **personas atelier groupe 2026-09-29** |
 | **Source méthodologique** | Guide Bloc 1 PBNC + exigences 1.2 du brief |
 | **Doctrine projet** | [`../00-intake/crm-assurance-courtage-operating-doctrine.md`](../00-intake/crm-assurance-courtage-operating-doctrine.md) |
-| **1.1** | VALIDATED (2026-09-27) — BMC réaligné groupe 2026-09-28 — [`01-01-analyse-besoins-metiers.md`](01-01-analyse-besoins-metiers.md) |
-| **Evidence user discovery** | BRIEF-DERIVED — NO FIELD INTERVIEWS — NO OBSERVED AS-IS |
-| **Personas** | **VALIDATED / MATERIALIZED IN MIRO** — BRIEF-DERIVED (+ alignement BMC groupe) |
-| **Experience Map** | **VALIDATED / MATERIALIZED IN MIRO** — Courtier — alignée BMC groupe |
-| **Customer Journey Map** | **VALIDATED / MATERIALIZED IN MIRO** — Prospect → Client — alignée BMC groupe |
+| **1.1** | VALIDATED — [`01-01-analyse-besoins-metiers.md`](01-01-analyse-besoins-metiers.md) |
+| **Evidence user discovery** | GROUP-VALIDATED PEDAGOGICAL SCENARIO — **NO FIELD INTERVIEWS** — **NO OBSERVED AS-IS** |
+| **Personas canoniques** | **Client particulier** · **Courtier** · **Directeur** |
+| **Experience Map** | **RETAINED / ALIGNED** — Courtier |
+| **Customer Journey Map** | **Client particulier — Du prospect à la vie client** |
+| **Miro** | **SYNC REQUIRED** — board historique encore sur l’ancienne version (Cursor **n’a pas** modifié Miro) |
 | **Architecture** | NOT DECIDED |
 | **Stack** | NOT DECIDED |
-| **1.3** | NOT OPENED |
+| **1.3** | OPENED — AWAITING FINAL REVIEW (hors modification de fond dans ce cycle) |
+| **1.4** | NOT OPENED |

-### Décisions Morris tracées (alignement 1.2)
+### Décisions Morris / groupe tracées

 | Décision | Contenu | Portée |
 |----------|---------|--------|
 | Ouverture 1.2 | 1.2 = OPENED (2026-09-27) | Historique |
-| Validation 1.2 | 1.2 = **VALIDATED** (2026-09-28) | Clôture du livrable 1.2 |
-| Proto-personas | **Courtier** ; **Directeur du cabinet** ; **Prospect → Client assuré** | VALIDATED — pédagogique / brief-derived — **non** empiriquement validés par recherche terrain |
-| Experience Map | VALIDATED — cible **Courtier** | MATERIALIZED IN MIRO — phase 1 alignée prospection |
-| Customer Journey Map | VALIDATED — cible **Prospect → Client assuré** | MATERIALIZED IN MIRO — canaux groupe transversaux |
+| Validation 1.2 initiale | 1.2 = VALIDATED (2026-09-28) | Livrable initial |
+| **Consolidation personas atelier** | Set canonique = **Client particulier** · **Courtier** · **Directeur** (2026-09-29) | **Supersède** le persona préparatoire « Prospect → Client » |
+| Experience Map | Cible **Courtier** — conservée / alignée | Contenu parcours métier inchangé sur le fond |
+| Customer Journey Map | Persona **Client particulier** ; lifecycle prospect → client | Réalignement conceptuel |

-**VALIDATED** (1.2) signifie que Morris valide le livrable de cadrage utilisateur pour la suite du projet.
-Cela ne signifie **pas** : user research empirique ; profil statistiquement démontré ; persona terrain validé.
+**VALIDATED** (1.2) signifie que Morris / le groupe valide le livrable de cadrage utilisateur pour la suite.
+Cela ne signifie **pas** : user research empirique ; profil statistiquement démontré ; données terrain d’un cabinet réel.

 ---

 ## 1. Objectif du 1.2

-Identifier les profils utilisateurs pertinents pour le cas pédagogique CRM Assurance Courtage, comprendre leurs objectifs et attentes **à partir des informations disponibles**, et préparer des **proto-personas de cadrage** ainsi que le contrat des maps adoptées, avant matérialisation Miro dans un cycle dédié.
+Identifier les profils utilisateurs pertinents pour le cas pédagogique CRM Assurance Courtage, comprendre leurs objectifs et attentes **à partir des informations disponibles**, et fonder les maps (Experience Map / Customer Journey) sur les **personas validés par le groupe**.

-Ce cycle doit :
+Ce livrable doit :

-- rendre explicites les hypothèses faute d’entretiens réels ;
-- distinguer faits sourcés, inférences et décisions Morris ;
+- distinguer hypothèses de scénario pédagogique et faits terrain ;
 - ne pas transformer l’analyse en spécification fonctionnelle, backlog, interfaces ou architecture.

-**Ce cycle ne constitue PAS une user research empirique.**
+**Ce livrable ne constitue PAS une user research empirique.**

 ---

@@ -49,15 +50,22 @@ Ce cycle doit :

 | Catégorie | Signification |
 |-----------|---------------|
-| **EXPLICITE DANS LE BRIEF** | Information affirmée directement par le brief (ou reprise telle quelle du 1.1 validé) |
-| **INFÉRENCE DE CADRAGE** | Déduction raisonnable à partir du brief, clairement marquée |
-| **DÉCISION MORRIS** | Arbitrage pédagogique / de modélisation du 1.2, distinct du fait source |
-| **NON RENSEIGNÉ** | Information non fournie — **non inventée** |
+| **EXPLICITE DANS LE BRIEF / BMC** | Information affirmée par le brief ou le BMC groupe |
+| **GROUP-VALIDATED PEDAGOGICAL SCENARIO** | Attributs / set de personas consolidés en atelier et validés par le groupe — **pas** des faits terrain |
+| **INFÉRENCE DE CADRAGE** | Déduction raisonnable, clairement marquée |
+| **NON RENSEIGNÉ / À SYNCHRONISER** | Détail non disponible de façon lisible dans le dépôt — **non inventé** |

 Aucun entretien, questionnaire ou observation terrain n’est fourni.
 Aucun verbatim réel n’est disponible.

-Les profils sont des **PROTO-PERSONAS DE CADRAGE** (BRIEF-DERIVED / NO FIELD INTERVIEWS / NO OBSERVED AS-IS), adoptés pour le 1.2 pédagogique.
+### Provenance personas (obligatoire)
+
+Les attributs des personas sont des **hypothèses de scénario pédagogique consolidées et validées par le groupe**.
+Ils servent à concevoir et tester la cohérence du CRM ; **ils ne résultent pas d’entretiens ou d’une étude terrain réelle**.
+
+Les cartes atelier (Profil · Démographie · Objectifs · Frustrations · Tâches · Outils) constituent la **référence de contenu détaillé**.
+Dans le présent dépôt, aucune source locale lisible et explicitement identifiable comme transcription complète de ces cartes n’a été trouvée pour ce cycle : **les petits textes (âge, revenus, localisation, outils nominatifs, scores, etc.) ne sont pas inventés ici**.
+**Transcription détaillée à synchroniser** depuis la source atelier lisible — **sans** remettre en cause la validation du **set** de personas.

 ---

@@ -65,168 +73,135 @@ Les profils sont des **PROTO-PERSONAS DE CADRAGE** (BRIEF-DERIVED / NO FIELD INT

 | Profil | Qualification | Preuves / statut |
 |--------|---------------|------------------|
-| **Courtier** | Utilisateur métier interne principal | Prospection ; devis ; relances ; rendez-vous ; conseil personnalisé ; souscription ; renouvellement / résiliation ; documents ; sinistres ; suivi relationnel — **EXPLICITE DANS LE BRIEF + BMC GROUPE** |
-| **Directeur du cabinet** | Partie prenante décisionnaire **et** proto-persona de pilotage **adopté par Morris** | Objectifs business, différenciation, KPIs du scénario — **EXPLICITE DANS LE BRIEF**. Usage personnel du dashboard = **INFÉRENCE DE CADRAGE FORTE + DÉCISION MORRIS** — **pas** un fait explicite du brief |
-| **Prospect** | État métier initial (avant souscription) du persona externe longitudinal | Contact ; devis ; RDV ; besoin ; proposition ; souscription — **EXPLICITE DANS LE BRIEF**. Usage direct de toutes les interfaces du futur CRM — **NON RENSEIGNÉ** |
-| **Client** | État métier ultérieur (après souscription) du **même** persona externe | Contrats ; échanges ; historique ; transparence ; documents ; sinistres ; renouvellement / résiliation — **EXPLICITE DANS LE BRIEF** |
+| **Courtier** | Utilisateur métier interne principal — **persona canonique** | Prospection ; devis ; relances ; RDV ; conseil ; souscription ; renouvellement / résiliation ; documents ; sinistres ; suivi — EXPLICITE BRIEF + BMC + SET GROUPE |
+| **Directeur** | Persona de pilotage — **persona canonique** | Objectifs business, différenciation, KPIs — EXPLICITE BRIEF + SET GROUPE |
+| **Client particulier** | Persona externe — **persona canonique** | Segment BMC + SET GROUPE 2026-09-29 |
+| **Prospect** | **État** commercial (avant souscription) du Client particulier | Contact ; devis ; RDV ; besoin ; proposition ; souscription — EXPLICITE BRIEF — **≠ persona distinct** |
+| **Client (état)** | **État** commercial (après souscription) du Client particulier | Contrats ; documents ; historique ; sinistres ; renouvellement / résiliation — EXPLICITE BRIEF — **≠ persona distinct** |

-**Sources vs modélisation :** le brief distingue les états métier Prospect et Client.
-**Modélisation persona 1.2 (décision Morris) :** ces deux états sont réunis dans un **seul** proto-persona longitudinal **Prospect → Client assuré**.
+**Persona ≠ état commercial.**
+Persona = **Client particulier**.
+États possibles du parcours = prospect → futur client → client.

 ---

-## 4. Choix des proto-personas adoptés pour le 1.2
+## 4. Personas canoniques (set groupe 2026-09-29)

-Ancienne sélection (brouillon initial) : Courtier / Client / Prospect (candidats) ; Directeur = stakeholder only.
+| # | Persona | Statut |
+|---|---------|--------|
+| 1 | **Client particulier** | **CANONICAL** — GROUP-VALIDATED PEDAGOGICAL SCENARIO |
+| 2 | **Courtier** | **CANONICAL** — GROUP-VALIDATED PEDAGOGICAL SCENARIO |
+| 3 | **Directeur** | **CANONICAL** — GROUP-VALIDATED PEDAGOGICAL SCENARIO |

-**Sélection adoptée (décision Morris) :**
+**Note historique :** la version préparatoire utilisait un persona longitudinal **Prospect → Client**. La consolidation atelier du **2026-09-29** retient désormais le persona **Client particulier** ; la continuité prospect → client est conservée dans le **Customer Journey**.

-| Candidat | Profil | Statut |
-|----------|--------|--------|
-| **A** | Courtier | **ADOPTED PROTO-PERSONA** — PRIMARY / OPERATIONAL USER |
-| **B** | Directeur du cabinet | **ADOPTED PROTO-PERSONA** — MANAGEMENT / PILOTING USER |
-| **C** | Prospect → Client assuré | **ADOPTED PROTO-PERSONA** — EXTERNAL LIFECYCLE USER / BENEFICIARY |
-
-La fusion Prospect → Client est une **DÉCISION MORRIS DE MODÉLISATION DU 1.2**. Elle ne prouve pas que tous les prospects et clients ont exactement les mêmes besoins.
+Structure attendue des cartes atelier (référence) : Profil · Démographie · Objectifs · Frustrations · Tâches · Outils — **détail à synchroniser** (voir §2).

 ---

-## 5. Proto-persona A — Courtier
+## 5. Persona — Courtier

 | Champ | Contenu | Niveau de preuve |
 |-------|---------|------------------|
-| **Rôle** | Courtier du cabinet | EXPLICITE DANS LE BRIEF |
-| **Angle** | Métier / opérations / relation client | EXPLICITE DANS LE BRIEF |
-| **Relation au projet** | Utilisateur métier interne principal | EXPLICITE DANS LE BRIEF |
-| **Objectifs / capacités supportés** | Prospection ; devis ; relances ; rendez-vous ; conseil personnalisé ; souscription ; renouvellement / résiliation ; collecte de pièces ; documents ; sinistres ; traçabilité ; réactivité ; personnalisation soutenue par l’historique | EXPLICITE DANS LE BRIEF + BMC GROUPE |
-| **Besoins déduits** | Retrouver l’information de suivi utile ; vision cohérente des étapes du dossier ; limiter les tâches administratives ; disposer de l’historique pour personnaliser la relation | **INFÉRENCE DE CADRAGE** |
+| **Rôle** | Courtier du cabinet | EXPLICITE + SET GROUPE |
+| **Angle** | Métier / opérations / relation client | EXPLICITE |
+| **Relation au projet** | Utilisateur métier interne principal | EXPLICITE |
+| **Objectifs / capacités supportés** | Prospection ; devis ; relances ; rendez-vous ; conseil personnalisé ; souscription ; renouvellement / résiliation ; documents ; sinistres ; traçabilité ; réactivité ; personnalisation soutenue par l’historique | EXPLICITE BRIEF + BMC |
+| **Besoins déduits** | Retrouver l’information utile ; vision cohérente du dossier ; limiter l’admin ; historique pour personnaliser | INFÉRENCE DE CADRAGE |

-**Non renseigné (non inventé) :** outil actuel ; temps perdu ; volumes ; âge ; séniorité ; aisance numérique ; organisation quotidienne ; canal favori ; rémunération ; localisation.
+**Non inventé :** démographie atelier, outils nominatifs, frustrations verbatim, scores — **à synchroniser** depuis la carte atelier.

-**Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
+**Phrase de synthèse (analytique — non issue d’un entretien) :**
 Le courtier a besoin d’un suivi centralisé du parcours commercial et administratif pour rester réactif et personnaliser la relation sans charge administrative excessive.

 ---

-## 6. Proto-persona B — Directeur du cabinet
+## 6. Persona — Directeur

 | Champ | Contenu | Niveau de preuve |
 |-------|---------|------------------|
-| **Rôle** | Directeur du cabinet | EXPLICITE DANS LE BRIEF |
-| **Angle** | Pilotage / supervision / performance / vision business | EXPLICITE DANS LE BRIEF (objectifs) + **INFÉRENCE** (usage opérationnel de pilotage) |
-| **Relation au projet** | Partie prenante décisionnaire et proto-persona de pilotage **adopté par Morris** | **DÉCISION MORRIS** |
+| **Rôle** | Directeur du cabinet | EXPLICITE + SET GROUPE |
+| **Angle** | Pilotage / performance / vision business | EXPLICITE (objectifs) |
+| **Relation au projet** | Persona de pilotage | SET GROUPE |

-### Faits explicites du brief
+### Faits explicites du brief (conservés)

-- directeur du cabinet ;
 - souhaite se différencier face aux assureurs en ligne ;
 - insiste sur proximité, personnalisation, transparence ;
-- objectifs : réduction des tâches administratives ; amélioration de la traçabilité ; renforcement de la confiance ; augmentation de la rétention ;
-- le scénario demande un tableau de bord de performance commerciale comprenant : taux de conversion ; panier moyen ; satisfaction client.
-
-### Inférences de cadrage
-
-- besoin de visibilité consolidée ;
-- besoin de suivre les indicateurs ;
-- besoin d’apprécier la performance commerciale ;
-- besoin de supervision globale de l’activité ;
-- **usage du dashboard par le directeur**.
-
-Ces éléments sont des **INFÉRENCES DE CADRAGE**. Le brief **ne dit pas littéralement** que le directeur consulte personnellement le dashboard.
-
-### Décision Morris
+- objectifs : réduction des tâches administratives ; traçabilité ; confiance ; rétention ;
+- tableau de bord : taux de conversion ; panier moyen ; satisfaction client.

-Le Directeur est retenu comme proto-persona de pilotage malgré l’absence de phrase explicite indiquant qu’il utilise personnellement le dashboard.
-Fondement : **INFÉRENCE DE CADRAGE FORTE** (dashboard + KPIs + objectifs de différenciation / traçabilité / réactivité / confiance / rétention) + **DÉCISION MORRIS**.
+### Inférences de cadrage (conservées)

-### Non renseigné (non inventé)
+Visibilité consolidée ; suivi des indicateurs ; supervision de l’activité ; **usage du dashboard** = inférence forte (le brief ne dit pas littéralement que le directeur consulte personnellement le dashboard).

-Fréquence de consultation ; appareil ; niveau digital ; mode précis de management ; taille d’équipe ; objectifs chiffrés ; droits exacts dans l’application.
+**Non inventé :** démographie atelier, outils nominatifs, frustrations verbatim — **à synchroniser**.

-**Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
+**Phrase de synthèse (analytique) :**
 Le directeur a besoin d’une vision consolidée de la performance commerciale pour piloter différenciation, traçabilité, confiance et rétention.

 ---

-## 7. Proto-persona C — Prospect → Client assuré
-
-Un **seul** proto-persona externe longitudinal.
-**DÉCISION MORRIS DE MODÉLISATION DU 1.2.**
-
-Objectif : montrer l’évolution des besoins **avant** et **après** souscription — **sans** conclure à deux applications ou deux interfaces distinctes.
-
-### État 1 — Prospect
-
-| Élément | Contenu | Niveau de preuve |
-|---------|---------|------------------|
-| **Étapes / attentes soutenues** | Prise de contact ; devis ; rendez-vous ; expression / compréhension du besoin ; proposition personnalisée ; progression vers souscription | EXPLICITE DANS LE BRIEF |
-| **Axes** | Proximité ; réactivité ; personnalisation ; transparence | EXPLICITE DANS LE BRIEF |
-
-**Réserve :** l’usage direct du futur CRM par le prospect n’est **pas** démontré — **NON RENSEIGNÉ**.
-
-### État 2 — Client assuré
+## 7. Persona — Client particulier

-| Élément | Contenu | Niveau de preuve |
-|---------|---------|------------------|
-| **Étapes / attentes soutenues** | Vie du contrat ; échanges ; documents ; transparence / historique ; sinistre éventuel ; renouvellement ; résiliation | EXPLICITE DANS LE BRIEF |
-
-L’accès en temps réel à l’historique des échanges et contrats est un signal d’interaction externe important (**EXPLICITE DANS LE BRIEF**) ; il **ne définit pas** l’architecture ni l’interface exacte — **NOT DECIDED** / hors scope 1.2.
-
-### Continuité Prospect → Client
+| Champ | Contenu | Niveau de preuve |
+|-------|---------|------------------|
+| **Rôle** | Client particulier (persona externe) | SET GROUPE 2026-09-29 |
+| **Segments BMC associés** | Client particulier (famille/étudiant) ; TPE/PME reste un segment BMC distinct (pas un 4ᵉ persona 1.2) | BMC GROUPE |
+| **États de parcours** | Prospect → souscription → Client (vie du contrat) | EXPLICITE BRIEF — lifecycle CJM |
+| **Attentes supportées (brief)** | Proximité ; réactivité ; personnalisation ; transparence ; confiance ; continuité | EXPLICITE |
+| **Canaux (BMC groupe)** | RDV physique ; Visio ; téléphone ; email ; espace client | BMC GROUPE — conception UI **NON DÉCIDÉE** |

-Les besoins évoluent entre entrée en relation et vie du contrat.
-On pourra **plus tard** comparer informations accessibles, besoins, actions, points de contact et permissions candidates — **ces choix ne sont PAS décidés dans le 1.2**.
+### Lifecycle (pas un second persona)

-**Non renseigné (non inventé) :** démographie ; budget ; comparateurs ; fréquence ; appareil ; forme exacte / UI de l’accès client.
+| État | Attentes / étapes supportées | Niveau |
+|------|------------------------------|--------|
+| **Prospect** | Contact ; devis ; RDV ; besoin ; proposition ; progression vers souscription | EXPLICITE BRIEF |
+| **Client** | Vie du contrat ; échanges ; documents ; historique ; sinistre éventuel ; renouvellement / résiliation | EXPLICITE BRIEF |

-**Segments clients (BMC groupe) :** TPE/PME ; Client particulier (famille/étudiant) — associés au persona longitudinal **sans** multiplier les personas.
+**Réserve :** usage direct du futur CRM par le prospect = **NON RENSEIGNÉ**. Forme exacte de l’accès client = **NOT DECIDED**.

-**Canaux validés (BMC groupe) :** RDV physique ; RDV Visio ; téléphone ; email ; espace client. Existence du canal retenue ; conception / écrans / permissions **NON DÉCIDÉES**.
+**Non inventé :** nom, âge, revenus, situation familiale, localisation, outils, frustrations détaillées — **à synchroniser** depuis la carte atelier « Client particulier ».

-**Phrase de synthèse (reformulation analytique — non issue d’un entretien utilisateur) :**
-La même personne passe d’une entrée en relation (prospect) à une relation de suivi contractualisée (client), avec une continuité attendue de proximité, personnalisation et transparence.
+**Phrase de synthèse (analytique) :**
+Le Client particulier est suivi depuis l’entrée en relation (état prospect) jusqu’à la vie du contrat (état client), avec une continuité attendue de proximité, personnalisation et transparence.

 ---

 ## 8. Synthèse des besoins par profil

-| Profil | Objectifs | Attentes | Besoins / enjeux | Niveau de preuve |
-|--------|-----------|----------|------------------|------------------|
-| Courtier | Suivi cycle client ; devis / RDV / souscription ; documents ; sinistres ; traçabilité / réactivité | Personnalisation soutenue par l’historique | Vision cohérente du dossier ; charge admin. réduite | EXPLICIT BRIEF + INFERENCE |
-| Directeur | Différenciation ; objectifs business ; KPIs (conversion, panier moyen, satisfaction) | Pilotage / performance | Visibilité consolidée ; suivi des indicateurs | EXPLICIT BRIEF + INFERENCE + DÉCISION MORRIS (usage dashboard) |
-| Prospect → Client — état Prospect | Contact → devis → RDV → proposition → souscription | Proximité ; réactivité ; personnalisation ; transparence | Entrée en relation simple ; progression claire | EXPLICIT BRIEF + INFERENCE |
-| Prospect → Client — état Client | Suivi contrats ; échanges ; documents ; sinistre éventuel ; renouvellement / résiliation | Transparence ; confiance ; continuité | Comprendre l’état du suivi ; retrouver infos utiles | EXPLICIT BRIEF + INFERENCE |
+| Profil | Objectifs | Attentes | Besoins / enjeux | Niveau |
+|--------|-----------|----------|------------------|--------|
+| Courtier | Suivi cycle ; devis / RDV / souscription ; docs ; sinistres | Réactivité ; personnalisation | Vision du dossier ; admin. réduite | BRIEF + INFÉRENCE |
+| Directeur | Différenciation ; KPIs | Pilotage | Visibilité consolidée | BRIEF + INFÉRENCE |
+| Client particulier — état prospect | Contact → devis → RDV → proposition → souscription | Proximité ; réactivité ; personnalisation ; transparence | Entrée en relation claire | BRIEF + INFÉRENCE |
+| Client particulier — état client | Suivi contrats ; docs ; sinistre ; renouvellement / résiliation | Transparence ; confiance ; continuité | Comprendre le suivi ; retrouver l’info | BRIEF + INFÉRENCE |

-Aucune user story. Aucun backlog fonctionnel.
+Aucune user story. Aucun backlog.

 ---

 ## 9. Difficultés / pain points

-Aucune observation AS-IS utilisateur n’est disponible.
-Aucune affirmation du type « les utilisateurs disent… » n’est formulée.
+Aucune observation AS-IS. Aucune affirmation du type « les utilisateurs disent… ».

-### Enjeux utilisateurs déduits du brief
+**Courtier :** charge administrative ; traçabilité ; réactivité ; continuité du suivi.
+**Directeur :** visibilité / pilotage déduits des objectifs et KPIs.
+**Client particulier :** fluidité d’entrée en relation ; personnalisation ; transparence ; confiance ; continuité.

-**Courtier :** charge administrative à réduire ; traçabilité ; réactivité ; continuité du suivi.
-**Directeur :** besoin de visibilité et de pilotage déduit des objectifs et KPIs ; performance commerciale ; satisfaction ; rétention.
-**Prospect → Client :** fluidité de l’entrée en relation ; personnalisation ; transparence ; confiance ; continuité de la relation.
-
-**Qualification :** DÉDUITS DU BRIEF — NON OBSERVÉS SUR LE TERRAIN.
+**Qualification :** DÉDUITS DU BRIEF / SCÉNARIO — **NON OBSERVÉS SUR LE TERRAIN**.
+Frustrations détaillées des cartes atelier : **à synchroniser** (non inventées).

 ---

 ## 10. Inconnues et limites

-- aucun entretien ou questionnaire réel ;
-- aucune observation terrain ;
-- aucune donnée démographique fiable ;
-- aucun outil actuel connu ;
-- usage personnel du dashboard par le Directeur = **inférence** (pas fait explicite) ;
-- usage direct du CRM par le Prospect = **non démontré** ;
-- forme exacte de l’accès Client = **non décidée** ;
-- interfaces et permissions = **hors scope** ;
-- pensées / émotions des futures maps = **hypothèses** si non sourcées.
+- aucun entretien réel ;
+- détails démographiques / outils / frustrations des cartes atelier : **à synchroniser** ;
+- usage personnel du dashboard par le Directeur = inférence ;
+- usage direct du CRM par le Prospect = non démontré ;
+- interfaces / permissions = hors scope ;
+- pensées / émotions des maps = **NON RENSEIGNÉES**.

 ---

@@ -234,153 +209,90 @@ Aucune affirmation du type « les utilisateurs disent… » n’est formulée.

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | **ADOPTED FOR 1.2 — COURTIER — MATERIALIZED IN MIRO** |
+| **Statut** | **RETAINED / ALIGNED** — Courtier reste persona canonique |
 | **Persona cible** | Courtier |
-| **Objet** | Expérience métier globale du courtier au fil de la relation client — **sans** limitation à une interface logicielle précise |
-| **Cadre** | Expérience opérationnelle ; étapes métier ; actions ; besoins ; enjeux ; points de continuité ; pensées / émotions **uniquement** si qualifiées comme hypothèses lorsque non sourcées |
-| **Nature** | CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF — **NON AS-IS OBSERVÉ** |
+| **Décision d’alignement 2026-09-29** | **KEEP / ADAPT MINOR** — pas de reconstruction ; le parcours métier reste cohérent avec le Courtier |
+| **Objet** | Expérience métier du courtier au fil de la relation (prospects → clients) — sans interface logicielle décidée |
+| **Nature** | CIBLE PÉDAGOGIQUE — **NON AS-IS OBSERVÉ** |

-Aucune émotion observée n’est inventée. La dimension méthodologique **PENSÉES / ÉMOTIONS — NON RENSEIGNÉES** est conservée ; l’information est transversale (aucune recherche terrain ; aucune inférence émotionnelle) — **pas** de répétition phase par phase ni de courbe émotionnelle.
+### Phases (conservées)

----
+| Phase | Actions / enjeux (cadrage) | Niveau de preuve |
+|-------|----------------------------|------------------|
+| Prospection / contact / qualification | Prospecter ; prendre contact ; qualifier — Réactivité · Continuité du suivi | EXPLICITE + INFÉRENCE |
+| Devis | Réactivité · Charge administrative | EXPLICITE + INFÉRENCE |
+| Relance / RDV | Réactivité · Continuité du suivi | EXPLICITE + INFÉRENCE |
+| Besoin → proposition | Personnalisation · Continuité du suivi | EXPLICITE + INFÉRENCE |
+| Souscription → vie contrat | Traçabilité · Continuité du suivi | EXPLICITE + INFÉRENCE |
+| Docs / sinistre / renouvellement | Traçabilité · Continuité · Charge administrative | EXPLICITE + INFÉRENCE |

-## 12. Customer Journey Map — Prospect → Client
+**Traçabilité** = retrouver ce qui s’est passé (historique, étapes, documents).
+**Continuité du suivi** = poursuivre correctement la relation à partir du contexte — liée mais non synonyme.

-| Champ | Valeur |
-|-------|--------|
-| **Statut** | **ADOPTED FOR 1.2 — PROSPECT → CLIENT — MATERIALIZED IN MIRO** |
-| **Persona cible** | Prospect → Client assuré |
-| **Objet** | Relation du persona avec le **service de courtage / cabinet** (service de référence du scénario) |
-| **Transition structurante** | Prospect → souscription → Client |
-| **Séquence** | Entrée en relation → prospect → devis / rendez-vous → compréhension du besoin → proposition → souscription → client → vie du contrat → échanges / documents → sinistre éventuel → renouvellement / résiliation |
-| **Nature** | CIBLE PÉDAGOGIQUE DÉRIVÉE DU BRIEF — **NON AS-IS OBSERVÉ** |
-
-**Règles :**
-
-- La Customer Journey Map **ne suppose PAS** que le futur CRM existe déjà ou est observé.
-- Elle cartographie l’expérience avec le **service de courtage**, pas avec un produit CRM déjà déployé.
-- **Ne PAS** décider ici : interface Prospect distincte ; interface Client distincte ; accès Prospect direct au CRM ; accès Client à toutes les fonctions ; écrans ; permissions ; composants UI.
-
-La dimension méthodologique **ÉMOTION — NON RENSEIGNÉE** est conservée ; réserve transversale unique (aucune observation / recherche terrain ; aucune émotion inférée) — **pas** de répétition phase par phase ni de courbe émotionnelle.
+**Pensées / émotions :** dimension méthodologique conservée ; **NON RENSEIGNÉES** — pas d’inférence émotionnelle ; pas d’injection artificielle des frustrations atelier phase par phase.

 ---

-### Clarifications Morris — maps 1.2
-
-**Statut :** raffinement sémantique validé par Morris (cycle dédié) — **CLARIFICATION DE CADRAGE**, non citation littérale du brief.
+## 12. Customer Journey Map — Client particulier

-1. **Réactivité** ajoutée comme enjeu de la phase **Prospection / contact / qualification** de l’Experience Map (enjeu global explicite dans le brief ; rattachement précis à cette phase = **inférence de cadrage**).
-
-2. **Distinction adoptée Traçabilité / Continuité du suivi :**
-
-| Notion | Définition de cadrage |
-|--------|------------------------|
-| **Traçabilité** | Capacité à **retrouver et comprendre ce qui s’est passé** : historique, étapes réalisées, échanges, documents, actions ou événements du dossier (mémoire factuelle). |
-| **Continuité du suivi** | Capacité à **poursuivre correctement** la relation ou le traitement à partir de l’historique et du contexte disponibles, **sans rupture de suivi**. |
-
-Relation : la traçabilité **peut soutenir** la continuité du suivi ; elles sont **liées mais non synonymes**.
-
-3. **Répartition des enjeux — Experience Map Courtier :**
-
-| Phase | Enjeux |
+| Champ | Valeur |
 |-------|--------|
-| Prospection / contact / qualification | Réactivité · Continuité du suivi |
-| Devis | Réactivité · Charge administrative |
-| Relance / RDV | Réactivité · Continuité du suivi |
-| Besoin → proposition | Personnalisation · Continuité du suivi |
-| Souscription → vie contrat | Traçabilité · Continuité du suivi |
-| Docs / sinistre / renouvellement | Traçabilité · Continuité du suivi · Charge administrative |
-
-4. **Pensées / émotions — Experience Map :** dimension méthodologique conservée ; information **NON RENSEIGNÉE** ; aucune recherche terrain ; **pas** d’inférence émotionnelle.
+| **Statut** | **ADAPTED** — réalignement conceptuel 2026-09-29 |
+| **Titre** | Customer Journey — **Client particulier** |
+| **Sous-titre** | Du prospect à la vie client |
+| **Persona cible** | **Client particulier** (pas « Prospect → Client » comme persona) |
+| **Lifecycle** | Prospect → souscription → Client |
+| **Objet** | Relation avec le **service de courtage / cabinet** |
+| **Nature** | CIBLE PÉDAGOGIQUE — **NON AS-IS OBSERVÉ** |
+
+### Séquence (étapes déjà validées — conservées)
+
+1. Première prise de contact
+2. Devis
+3. Relance / rendez-vous
+4. Compréhension / qualification du besoin
+5. Proposition personnalisée
+6. Souscription
+7. Vie du contrat / suivi (échanges, documents, sinistre éventuel, renouvellement / résiliation)

-5. **Émotion — Customer Journey Map :** dimension méthodologique conservée ; information **NON RENSEIGNÉE** ; aucune observation terrain ; **pas** d’inférence émotionnelle.
-
-6. **Niveau de preuve de l’Experience Map :**
-
-Les six phases sont qualifiées **EXPLICITE + INFÉRENCE**.
-
-Cette qualification combinée signifie que les étapes métier et certains enjeux sont soutenus explicitement par le brief, tandis que leur rattachement précis à une phase donnée et certaines notions de cadrage — notamment la **continuité du suivi** — relèvent d’une **inférence de cadrage**.
-
-Elle ne signifie **pas** que chaque élément est littéralement écrit dans le brief, ni que chaque élément est une pure inférence, ni que les maps sont empiriquement validées.
+**Règles :**

-| Phase | Niveau de preuve |
-|-------|------------------|
-| Prospection / contact / qualification | EXPLICITE + INFÉRENCE |
-| Devis | EXPLICITE + INFÉRENCE |
-| Relance / RDV | EXPLICITE + INFÉRENCE |
-| Besoin → proposition | EXPLICITE + INFÉRENCE |
-| Souscription → vie contrat | EXPLICITE + INFÉRENCE |
-| Docs / sinistre / renouvellement | EXPLICITE + INFÉRENCE |
+- Le début « prospect » du journey **n’en fait pas** un persona différent.
+- La map **ne suppose pas** que le futur CRM existe déjà.
+- **Ne pas décider ici :** interfaces distinctes prospect/client ; permissions ; écrans ; UI.
+- **Émotion :** NON RENSEIGNÉE — pas d’invention.
+- Canaux groupe (physique, Visio, téléphone, email, espace client) : transversaux — pas d’affectation canal × phase inventée.

 ---

+## Alignement BMC groupe (rappel)

-## Alignement groupe — BMC validé 2026-09-28
-
-Traçabilité des impacts du BMC groupe sur les artefacts 1.2 (sans nouvelle couche méthodologique) :
+- Segments : **TPE/PME** ; **Client particulier (famille/étudiant)** — le persona 1.2 externe retenu par l’atelier est **Client particulier**.
+- Courtier : prospection + conseil personnalisé confirmés.
+- Directeur : inchangé sur le fond brief.
+- Maps : sémantique Traçabilité / Continuité conservée.

-### Courtier
-
-- **prospection** ajoutée aux capacités ;
-- **conseil personnalisé** confirmé comme activité ;
-- reste du persona inchangé (pas de démographie, verbatim ni usage technique inventé).
-
-### Prospect → Client assuré
-
-- persona longitudinal **conservé** (une seule personne, deux états) ;
-- segments clients associés : **TPE/PME** ; **Client particulier (famille/étudiant)** ;
-- canaux validés : RDV physique ; RDV Visio ; téléphone ; email ; **espace client** ;
-- **aucune** multiplication automatique des personas ;
-- nombre d’applications / portails / écrans / permissions / UI / modalités exactes d’accès : **NON DÉCIDÉS**.
-
-### Experience Map — Courtier
-
-- première phase devient : **Prospection / contact / qualification** (actions : Prospecter ; prendre contact ; qualifier le besoin initial) ;
-- reste des phases inchangé ;
-- Traçabilité / Continuité / niveaux de preuve / émotions : inchangés.
-
-### Customer Journey Map — Prospect → Client
+---

-- canaux groupe intégrés **transversalement** (pas d’affectation canal × phase inventée) ;
-- espace sécurisé documentaire intégré au suivi documentaire (phase échanges / docs) ;
-- pas de conception détaillée des écrans / permissions / UI.
+## Miro — état

-### Directeur
+| Champ | Valeur |
+|-------|--------|
+| **Board** | https://miro.com/app/board/uXjVHiWX64c=/ |
+| **État Cursor** | **NOT MODIFIED** |
+| **Sync** | **MIRO PERSONA SYNC REQUIRED** |

-- **inchangé**.
+| Livrable Miro historique | Impact |
+|--------------------------|--------|
+| Persona Courtier | À auditer / aligner sur set groupe |
+| Persona Directeur | À auditer / aligner |
+| Persona Prospect → Client | **À remplacer** par **Client particulier** |
+| Experience Map Courtier | À auditer / aligner si besoin |
+| Customer Journey Prospect → Client | **À renommer / réaligner** → Client particulier — du prospect à la vie client |

----
-## Miro — matérialisation 1.2
+Git est canonique après transcription. Miro n’est **pas** synchronisé dans ce cycle.

-| Champ | Valeur |
-|-------|--------|
-| **Board** | CRM Assurance Courtage — 1.1 Analyse des besoins métiers |
-| **Board URL** | https://miro.com/app/board/uXjVHiWX64c=/ |
-| **Board ID** | `uXjVHiWX64c=` |
-| **État** | **MATERIALIZED** — **1.2 VALIDATED** (2026-09-28) — aligné BMC groupe |
-| **Méthode** | Miro MCP Canvas Composer (`canvas_create_from_svg`) — objets natifs éditables |
-
-| Livrable | Statut | Frame ID | URL |
-|----------|--------|----------|-----|
-| 1.2 — Persona — Courtier | MATERIALIZED | `3458764685164456040` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164456040 |
-| 1.2 — Persona — Directeur du cabinet | MATERIALIZED | `3458764685164456041` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164456041 |
-| 1.2 — Persona — Prospect → Client assuré | MATERIALIZED | `3458764685164456042` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164456042 |
-| 1.2 — Experience Map — Courtier | MATERIALIZED | `3458764685164458754` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164458754 |
-| 1.2 — Customer Journey Map — Prospect → Client | MATERIALIZED | `3458764685164510320` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685164510320 |
-
-**Frames 1.1 (protégées — inchangées) :**
-
-| Frame | Frame ID | URL |
-|-------|----------|-----|
-| 1.1 — Business Model Canvas | `3458764685039847893` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685039847893 |
-| 1.1 — BPMN — Prise de contact → souscription | `3458764685039847894` | https://miro.com/app/board/uXjVHiWX64c=/?moveToWidget=3458764685039847894 |
-
-**Règles de vérité :**
-
-- Git reste la source canonique du fond validé / adopté.
-- Miro est la représentation visuelle éditable correspondante.
-- Aucune interface produit n’est décidée par ces artefacts.
-- Le 1.2 est **VALIDATED** (2026-09-28). Architecture / stack / 1.3 restent **NOT DECIDED / NOT OPENED**.
+Frames 1.1 (BMC / BPMN) : **protégées — inchangées**.

 ---

@@ -388,14 +300,15 @@ Traçabilité des impacts du BMC groupe sur les artefacts 1.2 (sans nouvelle cou

 | Point | État |
 |-------|------|
-| **1.2** | **VALIDATED** — décision Morris 2026-09-28 |
-| Courtier | VALIDATED / ALIGNED — MATERIALIZED |
-| Directeur | VALIDATED / UNCHANGED — MATERIALIZED |
-| Prospect → Client | VALIDATED / ALIGNED — MATERIALIZED |
-| Evidence | BRIEF-DERIVED / NO FIELD INTERVIEWS + BMC groupe |
-| Experience Map Courtier | VALIDATED / ALIGNED — MATERIALIZED |
-| Customer Journey Map Prospect → Client | VALIDATED / ALIGNED — MATERIALIZED |
-| Miro | MATERIALIZED — aligné BMC groupe |
-| Architecture | NOT DECIDED |
-| Stack | NOT DECIDED |
-| **1.3** | **NOT OPENED** |
+| **1.2** | **VALIDATED — GROUP PERSONA CONSOLIDATION 2026-09-29** |
+| Personas canoniques | Client particulier · Courtier · Directeur |
+| Ancien persona Prospect → Client | **SUPERSEDED AS PERSONA** |
+| Continuity prospect → client | **RETAINED IN CUSTOMER JOURNEY** |
+| Experience Map Courtier | **RETAINED / ALIGNED** |
+| Customer Journey | **Client particulier — Du prospect à la vie client** |
+| Détail cartes atelier | **À SYNCHRONISER** (non inventé) |
+| Evidence | GROUP-VALIDATED PEDAGOGICAL SCENARIO — NO FIELD INTERVIEWS |
+| Miro | **SYNC REQUIRED** / NOT MODIFIED by Cursor |
+| Architecture / Stack | NOT DECIDED |
+| **1.3** | OPENED — AWAITING FINAL REVIEW (fond inchangé ce cycle) |
+| **1.4** | NOT OPENED |

```

## 15. Validations

| Check | Résultat |
|-------|----------|
| 3 personas canoniques seulement | PASS |
| Client particulier / Courtier / Directeur | PASS |
| Prospect → Client plus persona canonique | PASS |
| Lifecycle prospect → client dans CJM | PASS |
| Experience Map Courtier conservée | PASS |
| Pas d’invention démographie / émotions terrain | PASS |
| Provenance groupe explicite | PASS |
| 01-01 / 01-03 inchangés | PASS |
| 1.4 NOT OPENED | PASS |
| Archi / stack NOT DECIDED | PASS |
| Miro SYNC REQUIRED | PASS |
| Commit | PASS (eed1a7ff) |
| Push projet | NOT DONE |
| PR | NOT CREATED |
| Review Handoff | TO VERIFY AFTER PUBLISH |

## 16. Réserves

Détail cartes atelier (Profil/Démographie/…) non transcrit faute de source locale lisible — sync ultérieure. Miro non synchronisé. 1.3 non validé par ce cycle.

## 17. Verdict

**READY FOR CHATGPT REVIEW — CRM 1.2 GROUP PERSONA CONSOLIDATION COMPLETE**
