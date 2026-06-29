# Interv360 — INC-01 QA scenarios

**Type** : Scénarios QA métier détaillés  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Implementation planning  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-implementation-planning`  
**Documents associés** : [`implementation-planning-plan.md`](implementation-planning-plan.md), [`inc-01-demo-data.md`](inc-01-demo-data.md), [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md), [`inc-01-status-rules.md`](inc-01-status-rules.md), [`inc-01-data-model.md`](inc-01-data-model.md)

---

## 1. Objectif

Ce document décrit les scénarios QA métier détaillés pour vérifier le flux :

**INC-01 — Flux SAV minimal démontrable**

Les scénarios s'appuient sur le jeu de démonstration principal :

- demande : `SAV-DEMO-001` ;
- intervention : `INT-DEMO-001` ;
- client fictif : `Client Démo Industrie` ;
- technicien fictif : `Technicien Démo 01`.

Le chemin nominal à vérifier est :

**STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06**

Ce document **ne crée pas** :

- de test automatisé ;
- de script ;
- de cas de test exécutable ;
- de code ;
- de SQL ;
- d'API ;
- de CSV / JSON ;
- de BPMN.

---

## 2. Principes QA

Les scénarios QA doivent respecter les principes suivants :

- vérifier le flux métier de bout en bout ;
- vérifier chaque séquence RS-01 à RS-05 ;
- vérifier la cohérence front / back / data ;
- vérifier la visibilité des statuts ;
- vérifier le journal fonctionnel minimal ;
- ne pas dépendre d'un CRM réel ;
- ne pas dépendre d'une synchronisation externe ;
- ne pas nécessiter de dashboard ;
- ne pas activer STAT-07 / STAT-08 ;
- rester documentaires et non automatisés.

---

## 3. Données de référence

| Donnée | Valeur |
|--------|--------|
| **Demande SAV** | `SAV-DEMO-001` |
| **Intervention** | `INT-DEMO-001` |
| **Client** | `Client Démo Industrie` |
| **Site** | `Lyon Démo` |
| **Canal** | `Saisie manuelle Interv360` |
| **Priorité** | `Normale` |
| **Technicien** | `Technicien Démo 01` |
| **Créneau** | `J+1 matin` |
| **Motif** | `Machine client en panne intermittente` |
| **Résultat intervention** | `Remise en service effectuée` |

Ces données sont **fictives** et servent uniquement à la démonstration QA.

---

## 4. Scénarios QA nominaux

| ID | Scénario | Séquence | Résultat attendu |
|----|----------|----------|------------------|
| **QA-NOM-001** | Créer la demande SAV `SAV-DEMO-001` | RS-01 | Demande créée en STAT-01 |
| **QA-NOM-002** | Afficher la demande dans la liste | RS-01 | Demande visible avec STAT-01 |
| **QA-NOM-003** | Ouvrir la fiche demande | RS-01 | Fiche accessible avec les informations minimales |
| **QA-NOM-004** | Qualifier la demande | RS-02 | STAT-02 appliqué |
| **QA-NOM-005** | Vérifier la qualification en fiche | RS-02 | Checklist et statut visibles |
| **QA-NOM-006** | Créer l'intervention `INT-DEMO-001` | RS-03 | Intervention liée à la demande |
| **QA-NOM-007** | Sélectionner le créneau `J+1 matin` | RS-03 | Créneau associé |
| **QA-NOM-008** | Affecter `Technicien Démo 01` | RS-03 | Technicien associé |
| **QA-NOM-009** | Confirmer la planification | RS-03 | STAT-03 appliqué |
| **QA-NOM-010** | Consulter l'intervention côté technicien | RS-04 | Intervention accessible |
| **QA-NOM-011** | Saisir le compte rendu | RS-04 | CR lié à l'intervention |
| **QA-NOM-012** | Renseigner le résultat intervention | RS-04 | Résultat exploitable |
| **QA-NOM-013** | Passer en STAT-04 | RS-04 | Réalisation / CR tracé |
| **QA-NOM-014** | Préparer la clôture locale | RS-05 | CR + résultat disponibles |
| **QA-NOM-015** | Clôturer localement | RS-05 | STAT-06 appliqué sans CRM |
| **QA-NOM-016** | Vérifier STAT-06 liste + fiche | RS-05 | Statut visible liste et fiche |

---

## 5. Détail QA par séquence

### RS-01 — Socle demande SAV

| Point QA | Attendu |
|----------|---------|
| Création de la demande `SAV-DEMO-001` | Demande enregistrée localement |
| Présence du motif | `Machine client en panne intermittente` visible |
| Présence du client fictif | `Client Démo Industrie` visible |
| Présence du site fictif | `Lyon Démo` visible |
| Priorité `Normale` | Priorité affichée |
| Statut initial STAT-01 | STAT-01 appliqué à la création |
| Visibilité liste | Demande présente dans la liste |
| Ouverture fiche | Fiche accessible avec informations minimales |

**Attendu global RS-01 :** la demande est visible en liste et en fiche avec STAT-01.

### RS-02 — Qualification minimale

| Point QA | Attendu |
|----------|---------|
| Checklist présente | Checklist qualification disponible |
| Contexte confirmé | Élément checklist validé |
| Impact identifié | Élément checklist validé |
| Intervention nécessaire | Élément checklist validé |
| Responsable qualification fictif | `Responsable SAV Démo` tracé |
| Passage STAT-02 | Transition STAT-01 → STAT-02 appliquée |
| Visibilité statut en liste | STAT-02 visible en liste |
| Visibilité statut en fiche | STAT-02 visible en fiche |

**Attendu global RS-02 :** STAT-02 est appliqué uniquement après qualification minimale.

### RS-03 — Planification intervention

| Point QA | Attendu |
|----------|---------|
| Création intervention `INT-DEMO-001` | Intervention créée |
| Lien avec `SAV-DEMO-001` | Demande et intervention liées |
| Créneau `J+1 matin` | Créneau sélectionné et associé |
| Technicien `Technicien Démo 01` | Technicien affecté |
| Type intervention | `Diagnostic et remise en service` visible |
| Passage STAT-03 | Transition STAT-02 → STAT-03 appliquée |
| Visibilité planning | Intervention visible dans le planning |
| Visibilité liste / fiche | STAT-03 visible liste et fiche |

**Attendu global RS-03 :** STAT-03 est appliqué uniquement après intervention + créneau + technicien.

### RS-04 — Réalisation terrain et CR

| Point QA | Attendu |
|----------|---------|
| Consultation intervention côté technicien | Parcours technicien accessible |
| Saisie commentaire CR | CR saisi et lié à l'intervention |
| Action réalisée | `Réglage et contrôle de fonctionnement` tracé |
| Résultat intervention | `Remise en service effectuée` renseigné |
| Lien CR / intervention | CR associé à `INT-DEMO-001` |
| Passage STAT-04 | Transition STAT-03 → STAT-04 appliquée |
| Journal de transition | Entrée journal CR saisi enregistrée |

**Attendu global RS-04 :** le CR et le résultat sont exploitables pour la clôture.

### RS-05 — Clôture locale STAT-06

| Point QA | Attendu |
|----------|---------|
| CR disponible | Compte rendu accessible |
| Résultat exploitable | Résultat intervention exploitable |
| Décision de clôture locale | Clôture locale validée |
| Passage STAT-06 | Transition STAT-04 → STAT-06 appliquée |
| Visibilité liste | STAT-06 visible en liste |
| Visibilité fiche | STAT-06 visible en fiche |
| Absence dépendance CRM | Clôture sans CRM réel |
| Absence dépendance sync externe | Aucune sync bloquante requise |

**Attendu global RS-05 :** STAT-06 est atteint localement et visible sans CRM ni synchronisation bloquante.

---

## 6. Vérification front / back / data

| Couche | Vérification QA |
|--------|-----------------|
| **Front** | Écrans accessibles, actions visibles, statuts visibles, cohérence liste / fiche / planning / technicien / CR |
| **Back** | Préconditions respectées, transitions contrôlées, pas de saut de statut, clôture locale sans CRM |
| **Data** | Demande, qualification, intervention, CR, résultat, statut courant et journal minimal conservés |
| **QA** | Chemin nominal vérifiable de bout en bout |

---

## 7. Vérification des statuts

| Étape | Statut attendu | Point de contrôle |
|-------|----------------|-------------------|
| Création demande | STAT-01 | Liste + fiche |
| Qualification | STAT-02 | Checklist validée |
| Planification | STAT-03 | Intervention + créneau + technicien |
| Réalisation / CR | STAT-04 | CR + résultat |
| Clôture locale | STAT-06 | Liste + fiche |

**STAT-05** n'est pas requis. **STAT-07** et **STAT-08** ne sont pas activés.

---

## 8. Vérification du journal fonctionnel minimal

| Action | Ancien statut | Nouveau statut | Acteur |
|--------|---------------|----------------|--------|
| Création demande | — | STAT-01 | Responsable SAV Démo |
| Qualification validée | STAT-01 | STAT-02 | Responsable SAV Démo |
| Intervention planifiée | STAT-02 | STAT-03 | Responsable SAV Démo |
| CR saisi | STAT-03 | STAT-04 | Technicien Démo 01 |
| Clôture locale | STAT-04 | STAT-06 | Responsable SAV Démo |

Le journal attendu est **minimal** et non assimilé à un audit complet.

---

## 9. Critères d'acceptation QA globaux

- [ ] La demande `SAV-DEMO-001` est créée
- [ ] La demande est visible en liste
- [ ] La fiche demande est accessible
- [ ] STAT-01 est visible
- [ ] La qualification permet STAT-02
- [ ] L'intervention `INT-DEMO-001` est créée
- [ ] Le créneau est associé
- [ ] Le technicien est affecté
- [ ] STAT-03 est visible
- [ ] L'intervention est consultable côté technicien
- [ ] Le CR est saisi
- [ ] Le résultat est exploitable
- [ ] STAT-04 est appliqué
- [ ] La clôture locale applique STAT-06
- [ ] STAT-06 est visible liste + fiche
- [ ] Aucune dépendance CRM n'est requise
- [ ] Aucune synchronisation externe n'est bloquante
- [ ] STAT-07 et STAT-08 ne sont pas activés
- [ ] Le journal fonctionnel minimal est cohérent

---

## 10. Hors périmètre QA INC-01

| Élément hors QA INC-01 | Raison |
|------------------------|--------|
| **Tests automatisés** | Hors cycle |
| **Scripts QA** | Hors cycle |
| **API tests** | Pas d'API détaillée INC-01 |
| **SQL tests** | Pas de SQL |
| **CRM réel** | Hors INC-01 |
| **Sync CRM** | Non bloquante / hors INC-01 |
| **Dashboard / BI** | Hors INC-01 |
| **STAT-07** | Hors INC-01 |
| **STAT-08** | Hors INC-01 |
| **Multi-interventions** | Post-MVP |
| **Pièces jointes avancées** | Hors INC-01 |
| **Signature avancée** | Hors INC-01 |

---

## 11. Risques QA

| Risque | Impact | Réduction |
|--------|--------|-----------|
| **Scénarios trop techniques** | Perte métier | Rester orienté flux SAV |
| **Tests automatisés introduits trop tôt** | Surcharge | Rester documentaire |
| **CRM réintroduit** | Blocage STAT-06 | Exclure des critères |
| **Dashboard requis** | Élargissement | Liste / fiche suffisantes |
| **STAT-07/08 activés** | Confusion | Hors périmètre |
| **Journal trop détaillé** | Surcharge | Journal minimal |
| **Oubli visibilité fiche / liste** | Démo incomplète | Critères globaux |
| **RS-03 sous-testée** | Risque planning | Détailler intervention / créneau / technicien |

---

## 12. Décisions retenues

| Décision | Statut |
|----------|--------|
| Scénarios QA métier documentaires | Retenu |
| Scénario nominal complet QA-NOM-001 à QA-NOM-016 | Retenu |
| Vérification par RS-01 à RS-05 | Retenu |
| Données `SAV-DEMO-001` / `INT-DEMO-001` utilisées | Retenu |
| Vérification front / back / data | Retenu |
| Vérification du journal minimal | Retenu |
| Pas de test automatisé | Retenu |
| Pas de script | Retenu |
| Pas de CRM réel | Retenu |
| Pas de dashboard | Retenu |

---

## 13. Garde-fous

- ne pas créer de test automatisé ;
- ne pas créer de script ;
- ne pas créer de cas de test exécutable ;
- ne pas créer de code ;
- ne pas créer d'API ;
- ne pas créer de SQL ;
- ne pas créer de CSV / JSON ;
- ne pas introduire de données réelles ;
- ne pas introduire de CRM réel ;
- ne pas rendre la synchronisation bloquante ;
- ne pas ajouter dashboard / BI ;
- ne pas activer STAT-07 / STAT-08 ;
- ne pas élargir INC-01.

---

## 14. Critères de sortie

- [x] données de référence reprises ;
- [x] scénarios nominaux QA définis ;
- [x] détail QA par RS-01 à RS-05 défini ;
- [x] vérification front / back / data définie ;
- [x] vérification statuts définie ;
- [x] vérification journal minimal définie ;
- [x] critères d'acceptation QA globaux listés ;
- [x] hors périmètre QA listé ;
- [x] risques QA identifiés ;
- [x] décisions retenues listées ;
- [x] garde-fous repris.

---

## 15. Prochaine action

Le prochain livrable est :

`inc-01-refusal-scenarios.md`

**Objectif :** décrire les scénarios de refus métier et les transitions non autorisées, sans automatisation.
