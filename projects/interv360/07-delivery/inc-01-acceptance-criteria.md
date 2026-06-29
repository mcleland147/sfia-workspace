# Interv360 — INC-01 acceptance criteria

**Type** : Critères d'acceptation métier  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Delivery detailing  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-detailing`  
**Documents associés** : [`delivery-detailing-plan.md`](delivery-detailing-plan.md), [`inc-01-detailed-backlog.md`](inc-01-detailed-backlog.md), [`inc-01-user-stories.md`](inc-01-user-stories.md), [`realization-criteria.md`](realization-criteria.md)

---

## 1. Objectif

Ce document définit les **critères d'acceptation métier** des user stories de **INC-01 — Flux SAV minimal démontrable**.

Il permet de vérifier que chaque story contribue correctement au flux minimal :

**demande créée → demande qualifiée → intervention planifiée → intervention réalisée → compte rendu saisi → clôture locale STAT-06 visible.**

Ce document **ne constitue pas** un plan de test détaillé et **ne décrit pas** de tests automatisés.

---

## 2. Principes des critères d'acceptation

Les critères doivent rester :

- **métier** ;
- **observables** ;
- **compréhensibles** par un responsable SAV ;
- alignés avec **STAT-01 à STAT-06** ;
- limités au périmètre **INC-01** ;
- **non techniques**.

Ils **ne doivent pas** introduire : CRM réel, API, SQL, code, dashboard, STAT-07, STAT-08, tests automatisés.

---

## 3. Format retenu

Chaque story suit le format :

- métadonnées (MB, statut, écran) ;
- **Critères d'acceptation métier** (checklist) ;
- **Non accepté si** (garde-fous négatifs).

---

## 4. Vue synthétique

| Story ID | MB source | Statut concerné | Nombre de critères |
|----------|-----------|-----------------|:------------------:|
| US-INC01-001 | MB-001 | STAT-01 | 5 |
| US-INC01-002 | MB-003 | STAT-01 | 4 |
| US-INC01-003 | MB-005 | STAT-01 | 4 |
| US-INC01-004 | MB-007 | STAT-01 | 4 |
| US-INC01-005 | MB-009 | STAT-01 | 4 |
| US-INC01-006 | MB-010 | STAT-01 → STAT-02 | 5 |
| US-INC01-007 | MB-013 | STAT-02 | 4 |
| US-INC01-008 | MB-014 | Préparation STAT-03 | 4 |
| US-INC01-009 | MB-015 | Préparation STAT-03 | 4 |
| US-INC01-010 | MB-017 | STAT-03 | 5 |
| US-INC01-011 | MB-019 | STAT-03 | 4 |
| US-INC01-012 | MB-021 | STAT-03 → STAT-04 | 4 |
| US-INC01-013 | MB-022 | STAT-04 | 4 |
| US-INC01-014 | MB-024 | Pré-STAT-06 | 4 |
| US-INC01-015 | MB-026 | STAT-06 | 5 |
| US-INC01-016 | MB-027 | STAT-06 | 4 |

**Total :** 16 stories — **68 critères métier**.

---

## 5. Critères d'acceptation par user story

### US-INC01-001 — Créer une demande SAV manuelle

| Élément | Détail |
|---------|--------|
| MB source | MB-001 |
| Statut concerné | STAT-01 |
| Écran principal | Liste demandes / Fiche demande SAV |

**Critères d'acceptation métier**

- [ ] Une demande SAV peut être créée manuellement depuis Interv360.
- [ ] La demande créée possède un identifiant ou une référence visible.
- [ ] La demande est initialisée en **STAT-01 — À qualifier**.
- [ ] Les informations minimales nécessaires à la qualification sont présentes ou à compléter.
- [ ] La création ne dépend pas d'un CRM réel.

**Non accepté si**

- La demande ne peut pas être créée sans CRM réel.
- La demande est créée directement dans un statut autre que STAT-01.
- Un statut non prévu est introduit.

---

### US-INC01-002 — Consulter la liste des demandes

| Élément | Détail |
|---------|--------|
| MB source | MB-003 |
| Statut concerné | STAT-01 visible |
| Écran principal | Liste demandes |

**Critères d'acceptation métier**

- [ ] La demande créée apparaît dans la liste des demandes.
- [ ] La liste permet d'identifier au minimum la demande, son statut et son libellé principal.
- [ ] Le statut STAT-01 est visible pour une demande à qualifier.
- [ ] La liste sert de point d'accès, sans remplacer la fiche demande.

**Non accepté si**

- La demande créée n'apparaît pas dans la liste.
- La liste est traitée comme source détaillée à la place de la fiche.
- Un dashboard est nécessaire pour consulter la demande.

---

### US-INC01-003 — Ouvrir une fiche demande

| Élément | Détail |
|---------|--------|
| MB source | MB-005 |
| Statut concerné | STAT-01 |
| Écran principal | Liste demandes / Fiche demande SAV |

**Critères d'acceptation métier**

- [ ] Une fiche demande peut être ouverte depuis la liste.
- [ ] La fiche ouverte correspond à la demande sélectionnée.
- [ ] La navigation liste → fiche est compréhensible.
- [ ] Le statut courant de la demande reste visible ou identifiable.

**Non accepté si**

- L'utilisateur ne peut pas accéder à la fiche depuis la liste.
- La fiche affichée ne correspond pas à la demande sélectionnée.
- Une navigation avancée hors MVP est nécessaire.

---

### US-INC01-004 — Consulter le détail d'une demande

| Élément | Détail |
|---------|--------|
| MB source | MB-007 |
| Statut concerné | STAT-01 |
| Écran principal | Fiche demande SAV |

**Critères d'acceptation métier**

- [ ] Les informations principales de la demande sont visibles sur la fiche.
- [ ] La fiche permet de comprendre le besoin client à traiter.
- [ ] La fiche est la référence détaillée pour la demande.
- [ ] Les informations affichées suffisent à engager la qualification minimale.

**Non accepté si**

- Les informations principales sont absentes.
- La liste remplace la fiche comme source détaillée.
- Un historique complet est requis pour comprendre la demande.

---

### US-INC01-005 — Réaliser la qualification minimale

| Élément | Détail |
|---------|--------|
| MB source | MB-009 |
| Statut concerné | STAT-01 |
| Écran principal | Fiche demande SAV |

**Critères d'acceptation métier**

- [ ] Une checklist minimale de qualification est disponible.
- [ ] Le responsable SAV peut compléter les éléments nécessaires à la qualification.
- [ ] La demande reste en STAT-01 — À qualifier tant que la qualification n'est pas terminée.
- [ ] La qualification reste simple et ne nécessite pas de workflow multi-acteurs.

**Non accepté si**

- La demande peut être qualifiée sans information minimale.
- Un workflow complexe est imposé.
- Un nouveau statut intermédiaire est créé.

---

### US-INC01-006 — Passer une demande en qualifiée

| Élément | Détail |
|---------|--------|
| MB source | MB-010 |
| Statut concerné | STAT-01 → STAT-02 |
| Écran principal | Fiche demande SAV / Liste demandes |

**Critères d'acceptation métier**

- [ ] Une demande qualifiée peut passer de STAT-01 — À qualifier à STAT-02 — Qualifiée.
- [ ] La transition n'est possible qu'après qualification minimale.
- [ ] Le nouveau statut est visible sur la fiche demande.
- [ ] Le nouveau statut est visible dans la liste des demandes.
- [ ] La demande qualifiée est exploitable pour créer une intervention.

**Non accepté si**

- La demande passe en STAT-02 sans qualification minimale.
- Un statut non prévu est utilisé.
- La demande qualifiée ne peut pas servir à créer une intervention.

---

### US-INC01-007 — Créer une intervention depuis une demande qualifiée

| Élément | Détail |
|---------|--------|
| MB source | MB-013 |
| Statut concerné | STAT-02 |
| Écran principal | Fiche demande SAV / Planning |

**Critères d'acceptation métier**

- [ ] Une intervention peut être créée depuis une demande en STAT-02 — Qualifiée.
- [ ] L'intervention créée reste rattachée à la demande d'origine.
- [ ] La création d'intervention ne modifie pas la demande vers un statut non prévu.
- [ ] L'intervention peut ensuite être planifiée.

**Non accepté si**

- Une intervention est créée depuis une demande non qualifiée.
- Le lien entre demande et intervention est perdu.
- L'optimisation planning devient obligatoire.

---

### US-INC01-008 — Sélectionner un créneau d'intervention

| Élément | Détail |
|---------|--------|
| MB source | MB-014 |
| Statut concerné | Préparation STAT-03 |
| Écran principal | Planning |

**Critères d'acceptation métier**

- [ ] Un créneau peut être sélectionné pour une intervention existante.
- [ ] Le créneau sélectionné est visible ou identifiable.
- [ ] La sélection du créneau prépare la planification sans imposer de planning avancé.
- [ ] Le créneau contribue au passage futur vers STAT-03 — Planifiée.

**Non accepté si**

- Aucun créneau ne peut être sélectionné.
- La planification nécessite une optimisation automatique.
- Un statut non prévu est créé.

---

### US-INC01-009 — Affecter un technicien

| Élément | Détail |
|---------|--------|
| MB source | MB-015 |
| Statut concerné | Préparation STAT-03 |
| Écran principal | Planning / Fiche demande SAV |

**Critères d'acceptation métier**

- [ ] Un technicien peut être affecté à l'intervention.
- [ ] Le technicien affecté est visible ou identifiable.
- [ ] L'affectation est réalisée sur une intervention existante.
- [ ] L'affectation contribue au passage futur vers STAT-03 — Planifiée.

**Non accepté si**

- Une intervention peut être planifiée sans technicien affecté.
- L'affectation impose une gestion avancée des compétences.
- Le technicien affecté n'est pas identifiable.

---

### US-INC01-010 — Confirmer l'intervention planifiée

| Élément | Détail |
|---------|--------|
| MB source | MB-017 |
| Statut concerné | STAT-03 |
| Écran principal | Planning / Liste demandes / Fiche demande SAV |

**Critères d'acceptation métier**

- [ ] Une intervention avec créneau et technicien peut être confirmée comme planifiée.
- [ ] Le statut **STAT-03 — Planifiée** est appliqué.
- [ ] Le statut planifié est visible sur la fiche demande ou l'intervention.
- [ ] Le statut planifié est visible dans la liste ou le planning.
- [ ] L'intervention devient consultable côté technicien.

**Non accepté si**

- STAT-03 est appliqué sans créneau ou technicien.
- Une notification avancée est requise pour considérer l'intervention planifiée.
- Un statut intermédiaire non prévu est créé.

---

### US-INC01-011 — Consulter une intervention côté technicien

| Élément | Détail |
|---------|--------|
| MB source | MB-019 |
| Statut concerné | STAT-03 |
| Écran principal | Fiche intervention mobile |

**Critères d'acceptation métier**

- [ ] Le technicien peut consulter une intervention planifiée.
- [ ] Les informations nécessaires à la réalisation sont visibles.
- [ ] La consultation ne nécessite pas d'application mobile native complète.
- [ ] L'intervention consultée correspond bien à l'intervention planifiée.

**Non accepté si**

- Le technicien ne peut pas accéder à l'intervention.
- Les informations terrain essentielles sont absentes.
- Un mode offline avancé est obligatoire.

---

### US-INC01-012 — Saisir un compte rendu simple

| Élément | Détail |
|---------|--------|
| MB source | MB-021 |
| Statut concerné | STAT-03 → STAT-04 |
| Écran principal | Compte rendu mobile |

**Critères d'acceptation métier**

- [ ] Le technicien peut saisir un compte rendu simple.
- [ ] Le compte rendu est rattaché à l'intervention concernée.
- [ ] La saisie du compte rendu permet d'engager la réalisation de l'intervention.
- [ ] Le flux peut passer vers STAT-04 — En cours si nécessaire au parcours INC-01.

**Non accepté si**

- Le compte rendu n'est pas rattaché à l'intervention.
- Un CR PDF est obligatoire.
- Des pièces jointes avancées sont obligatoires.

---

### US-INC01-013 — Indiquer le résultat d'intervention

| Élément | Détail |
|---------|--------|
| MB source | MB-022 |
| Statut concerné | STAT-04 |
| Écran principal | Compte rendu mobile |

**Critères d'acceptation métier**

- [ ] Le technicien peut indiquer le résultat de l'intervention.
- [ ] Le résultat est visible ou exploitable pour la clôture.
- [ ] Le résultat complète le compte rendu.
- [ ] Le résultat ne crée pas de statut non prévu.

**Non accepté si**

- La clôture est possible sans résultat d'intervention.
- Le résultat impose des règles complexes hors MVP.
- Un statut non prévu est introduit.

---

### US-INC01-014 — Préparer la clôture locale

| Élément | Détail |
|---------|--------|
| MB source | MB-024 |
| Statut concerné | Pré-STAT-06 |
| Écran principal | Compte rendu mobile / Fiche demande SAV |

**Critères d'acceptation métier**

- [ ] Une intervention avec compte rendu et résultat peut être considérée prête à clôturer.
- [ ] Le responsable SAV peut identifier que les informations minimales de clôture sont présentes.
- [ ] La préparation de clôture reste locale à Interv360.
- [ ] Aucune validation complexe multi-acteurs n'est nécessaire.

**Non accepté si**

- La clôture est préparée sans compte rendu ni résultat.
- Une validation multi-acteurs est obligatoire.
- Une synchronisation CRM est nécessaire pour préparer la clôture.

---

### US-INC01-015 — Clôturer localement une intervention

| Élément | Détail |
|---------|--------|
| MB source | MB-026 |
| Statut concerné | STAT-06 |
| Écran principal | Fiche demande SAV / Compte rendu mobile |

**Critères d'acceptation métier**

- [ ] Le responsable SAV peut clôturer localement une intervention prête à clôturer.
- [ ] La clôture applique **STAT-06 — Clôturée localement**.
- [ ] La clôture ne dépend pas d'un CRM réel.
- [ ] La clôture ne dépend pas d'une synchronisation externe réussie.
- [ ] Aucun autre statut non prévu n'est créé.

**Non accepté si**

- La clôture est bloquée par un retour CRM.
- STAT-06 ne peut pas être atteint localement.
- Un statut supplémentaire est ajouté.

---

### US-INC01-016 — Visualiser le statut clôturé

| Élément | Détail |
|---------|--------|
| MB source | MB-027 |
| Statut concerné | STAT-06 |
| Écran principal | Liste demandes / Fiche demande SAV |

**Critères d'acceptation métier**

- [ ] Le statut STAT-06 — Clôturée localement est visible sur la fiche demande.
- [ ] Le statut STAT-06 — Clôturée localement est visible dans la liste des demandes.
- [ ] L'utilisateur peut confirmer que le traitement SAV est finalisé.
- [ ] La visualisation ne dépend pas d'un dashboard.

**Non accepté si**

- Le statut clôturé n'est pas visible.
- Le dashboard est nécessaire pour constater la clôture.
- Le statut dépend d'un retour CRM réel.

---

## 6. Couverture du flux INC-01

| Étape | Story | Critère clé |
|-------|-------|-------------|
| 1. Créer une demande SAV | US-INC01-001 | Demande en STAT-01 |
| 2. Afficher la liste | US-INC01-002 | Demande visible dans la liste |
| 3. Accéder à la fiche | US-INC01-003 | Navigation liste → fiche |
| 4. Consulter le détail | US-INC01-004 | Fiche = source détaillée |
| 5. Qualification minimale | US-INC01-005 | Checklist complétée |
| 6. Passer en qualifiée | US-INC01-006 | STAT-01 → STAT-02 |
| 7. Créer une intervention | US-INC01-007 | Intervention liée à demande STAT-02 |
| 8. Sélectionner un créneau | US-INC01-008 | Créneau identifié |
| 9. Affecter un technicien | US-INC01-009 | Technicien affecté |
| 10. Confirmer planifiée | US-INC01-010 | STAT-03 appliqué |
| 11. Consulter côté technicien | US-INC01-011 | Intervention accessible terrain |
| 12. Saisir le compte rendu | US-INC01-012 | CR rattaché à l'intervention |
| 13. Indiquer le résultat | US-INC01-013 | Résultat exploitable pour clôture |
| 14. Préparer la clôture | US-INC01-014 | Prêt à clôturer localement |
| 15. Clôturer localement | US-INC01-015 | STAT-06 atteint |
| 16. Visualiser statut clôturé | US-INC01-016 | STAT-06 visible liste et fiche |

---

## 7. Garde-fous d'acceptation

- Aucun critère ne doit exiger un **CRM réel**.
- Aucun critère ne doit exiger **API, SQL ou code**.
- Aucun critère ne doit **créer de nouveau statut**.
- **STAT-07 / STAT-08** restent hors INC-01.
- La clôture locale doit pouvoir atteindre **STAT-06** sans synchronisation externe.
- Le **dashboard** ne doit pas être requis.
- **Figma** ne doit pas être bloquant.

---

## 8. Hors périmètre des critères INC-01

| Élément hors périmètre | Raison |
|------------------------|--------|
| Tests détaillés | Futur cycle QA |
| Tests automatisés | Hors cycle detailing |
| Code | Hors cycle detailing |
| API / SQL | Hors cycle detailing |
| CRM réel | Hors MVP |
| Dashboard | INC-05 |
| STAT-07 / STAT-08 | Hors INC-01 |
| Anomalies d'intégration | INC-04 |
| Recherche / filtres avancés | INC-02 |
| Multi-canal complet | INC-02 |

---

## 9. Critères de sortie

| # | Critère | Validé |
|---|---------|:------:|
| 1 | Critères d'acceptation définis pour les 16 stories | ✅ |
| 2 | Critères alignés avec STAT-01 à STAT-06 | ✅ |
| 3 | Clôture locale STAT-06 couverte | ✅ |
| 4 | Aucun CRM réel requis | ✅ |
| 5 | Aucun dashboard requis | ✅ |
| 6 | Aucun test détaillé créé | ✅ |
| 7 | Aucun choix technique ajouté | ✅ |
| 8 | Base prête pour `inc-01-readiness-checklist.md` | ✅ |

---

## 10. Prochaine action

Le prochain livrable est :

**[`inc-01-readiness-checklist.md`](inc-01-readiness-checklist.md)**

**Objectif :** vérifier que INC-01 est suffisamment cadré pour être préparé en **réalisation future**.

---

*Critères d'acceptation INC-01 — Flux SAV minimal démontrable — Draft.*
