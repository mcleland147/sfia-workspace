# Interv360 — INC-01 refusal scenarios

**Type** : Scénarios de refus métier  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Implementation planning  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-implementation-planning`  
**Documents associés** : [`implementation-planning-plan.md`](implementation-planning-plan.md), [`inc-01-demo-data.md`](inc-01-demo-data.md), [`inc-01-qa-scenarios.md`](inc-01-qa-scenarios.md), [`inc-01-status-rules.md`](inc-01-status-rules.md), [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md)

---

## 1. Objectif

Ce document décrit les scénarios de refus métier pour sécuriser le flux :

**INC-01 — Flux SAV minimal démontrable**

Il complète les scénarios QA nominaux en documentant les cas où une action doit être **refusée** ou considérée comme **hors périmètre**.

Le chemin nominal autorisé reste :

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

## 2. Principes de refus

Les scénarios de refus doivent respecter les principes suivants :

- empêcher les sauts de statut non autorisés ;
- empêcher la clôture prématurée ;
- empêcher l'introduction de CRM réel ;
- empêcher l'activation de STAT-07 / STAT-08 ;
- empêcher l'élargissement vers dashboard / BI ;
- maintenir STAT-05 hors chemin nominal ;
- laisser le front déclencher mais pas décider seul ;
- maintenir le contrôle côté back / métier ;
- préserver le statut courant en cas de refus ;
- conserver une cohérence front / back / data.

---

## 3. Données de référence

| Donnée | Valeur |
|--------|--------|
| **Demande SAV** | `SAV-DEMO-001` |
| **Intervention** | `INT-DEMO-001` |
| **Client** | `Client Démo Industrie` |
| **Site** | `Lyon Démo` |
| **Technicien** | `Technicien Démo 01` |
| **Créneau** | `J+1 matin` |
| **Chemin nominal autorisé** | `STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06` |

Ces données sont **fictives** et servent uniquement à documenter les refus métier.

---

## 4. Scénarios de refus principaux

| ID | Scénario de refus | Statut de départ | Action demandée | Refus attendu |
|----|-------------------|------------------|-----------------|---------------|
| **REF-001** | Clôturer une demande non qualifiée | STAT-01 | Passer STAT-06 | Refus — qualification / intervention / CR requis |
| **REF-002** | Planifier sans qualification | STAT-01 | Passer STAT-03 | Refus — qualification obligatoire |
| **REF-003** | Clôturer une demande qualifiée sans intervention | STAT-02 | Passer STAT-06 | Refus — planification / réalisation / CR requis |
| **REF-004** | Clôturer une intervention planifiée sans CR | STAT-03 | Passer STAT-06 | Refus — CR + résultat requis |
| **REF-005** | Clôturer sans résultat exploitable | STAT-04 | Passer STAT-06 | Refus — résultat exploitable requis |
| **REF-006** | Appliquer STAT-07 | Tout statut | Activer retard | Refus — hors INC-01 |
| **REF-007** | Appliquer STAT-08 | Tout statut | Activer anomalie intégration | Refus — hors INC-01 |
| **REF-008** | Rouvrir STAT-06 vers STAT-01 | STAT-06 | Réouverture | Refus — hors INC-01 |
| **REF-009** | Imposer un retour CRM avant clôture | STAT-04 | Attendre CRM | Refus — CRM hors INC-01 |
| **REF-010** | Rendre dashboard obligatoire pour accepter INC-01 | Tout statut | Exiger dashboard | Refus — dashboard hors INC-01 |

---

## 5. Détail des refus par séquence

### RS-01 — Refus liés à la création / qualification

| Refus | Raison | Comportement attendu |
|-------|--------|----------------------|
| Créer une demande sans informations minimales | Demande insuffisante | Pas de création valide |
| Passer directement STAT-01 → STAT-03 | Qualification manquante | Statut reste STAT-01 |
| Passer directement STAT-01 → STAT-06 | Flux incomplet | Statut reste STAT-01 |

### RS-02 — Refus liés à la qualification

| Refus | Raison | Comportement attendu |
|-------|--------|----------------------|
| Qualifier sans checklist minimale | Qualification insuffisante | Statut reste STAT-01 |
| Passer STAT-02 → STAT-06 | Intervention / CR manquants | Statut reste STAT-02 |
| Considérer STAT-05 obligatoire | Hors nominal | Ne bloque pas INC-01 |

### RS-03 — Refus liés à la planification

| Refus | Raison | Comportement attendu |
|-------|--------|----------------------|
| Planifier sans intervention créée | Données manquantes | Statut reste STAT-02 |
| Planifier sans créneau | Planification incomplète | Statut reste STAT-02 |
| Planifier sans technicien | Affectation manquante | Statut reste STAT-02 |
| Passer STAT-03 → STAT-06 sans CR | CR manquant | Statut reste STAT-03 |

### RS-04 — Refus liés au CR / résultat

| Refus | Raison | Comportement attendu |
|-------|--------|----------------------|
| Saisir CR sans intervention associée | Incohérence | Refus |
| Passer STAT-04 sans CR exploitable | Réalisation insuffisante | Statut précédent conservé |
| Clôturer sans résultat | Résultat requis | Statut reste STAT-04 |
| Activer STAT-08 depuis CR | Hors INC-01 | Refus |

### RS-05 — Refus liés à la clôture locale

| Refus | Raison | Comportement attendu |
|-------|--------|----------------------|
| Clôturer sans CR | Précondition manquante | Statut reste STAT-04 |
| Clôturer sans résultat exploitable | Précondition manquante | Statut reste STAT-04 |
| Imposer CRM avant clôture | Hors INC-01 | Clôture locale reste autonome |
| Transformer sync en bloquant | Hors décision | Refus |
| Rouvrir STAT-06 via anomalie | Hors INC-01 | Refus |

---

## 6. Comportement attendu en cas de refus

| Couche | Comportement attendu |
|--------|----------------------|
| **Front** | Affiche que l'action n'est pas possible ou que les préconditions ne sont pas réunies |
| **Back** | Refuse la transition et conserve le statut courant |
| **Data** | Ne modifie pas le statut courant |
| **Journal** | Peut tracer l'action refusée plus tard, mais non obligatoire dans INC-01 |
| **QA** | Vérifie que le refus ne dégrade pas le flux nominal |

---

## 7. Transitions explicitement non autorisées

| Transition | Statut INC-01 |
|------------|---------------|
| STAT-01 → STAT-03 | Non autorisée |
| STAT-01 → STAT-06 | Non autorisée |
| STAT-02 → STAT-06 | Non autorisée |
| STAT-03 → STAT-06 | Non autorisée |
| STAT-04 → STAT-08 | Non autorisée |
| STAT-06 → STAT-01 | Non autorisée |
| STAT-06 → STAT-08 | Non autorisée |
| Toute transition vers STAT-07 | Non autorisée |
| Toute transition vers STAT-08 | Non autorisée |
| Toute transition dépendant d'un CRM réel | Hors INC-01 |

---

## 8. Vérification front / back / data des refus

| Couche | Vérification |
|--------|--------------|
| **Front** | Action bloquée ou message fonctionnel visible |
| **Back** | Précondition refusée |
| **Data** | Statut courant inchangé |
| **Journal** | Aucune obligation de trace refus dans INC-01 |
| **QA** | Scénario de refus documenté et comparé au nominal |

---

## 9. Critères d'acceptation des refus

- [ ] Les transitions interdites ne modifient pas le statut courant
- [ ] La clôture sans qualification est refusée
- [ ] La clôture sans intervention est refusée
- [ ] La clôture sans CR est refusée
- [ ] La clôture sans résultat exploitable est refusée
- [ ] STAT-07 n'est pas activé
- [ ] STAT-08 n'est pas activé
- [ ] STAT-06 ne dépend pas d'un CRM
- [ ] STAT-06 ne dépend pas d'une synchronisation externe réussie
- [ ] STAT-06 n'est pas rouvert par une anomalie
- [ ] Le dashboard n'est pas requis
- [ ] Le statut courant reste cohérent après refus

---

## 10. Hors périmètre des refus INC-01

| Élément hors périmètre | Raison |
|------------------------|--------|
| **Gestion complète des erreurs techniques** | Futur cycle |
| **Codes erreurs applicatifs détaillés** | Futur cycle implémentation |
| **Messages UI définitifs** | Futur cycle UX / réalisation |
| **Logs techniques** | Futur cycle implémentation |
| **Audit complet** | Post-MVP |
| **CRM réel** | Hors INC-01 |
| **Anomalies intégration** | INC-04 |
| **Retard / SLA** | Futurs incréments |
| **Dashboard / BI** | Futurs incréments |
| **Tests automatisés de refus** | Hors cycle |

---

## 11. Risques liés aux refus

| Risque | Impact | Réduction |
|--------|--------|-----------|
| **Refus non documentés** | Anomalies tardives | Lister refus principaux |
| **Messages front trop techniques** | Mauvaise compréhension métier | Rester fonctionnel |
| **Back trop permissif** | Sauts de statut | Contrôler préconditions |
| **Data modifiée malgré refus** | Incohérence | Conserver statut courant |
| **CRM réintroduit comme précondition** | Blocage | Refus explicite |
| **STAT-07/08 activés par erreur** | Confusion | Hors INC-01 |
| **Refus transformés en tests automatisés trop tôt** | Surcharge | Rester documentaire |

---

## 12. Décisions retenues

| Décision | Statut |
|----------|--------|
| Refus documentaires uniquement | Retenu |
| Transitions non autorisées listées | Retenu |
| Statut courant conservé en cas de refus | Retenu |
| Contrôle back des préconditions | Retenu |
| Front informatif uniquement | Retenu |
| STAT-05 non obligatoire | Retenu |
| STAT-07 / STAT-08 refusés | Retenu |
| CRM non obligatoire | Retenu |
| Dashboard non obligatoire | Retenu |
| Pas de test automatisé | Retenu |

---

## 13. Garde-fous

- ne pas créer de test automatisé ;
- ne pas créer de script ;
- ne pas créer de cas de test exécutable ;
- ne pas créer de code ;
- ne pas créer d'API ;
- ne pas créer de SQL ;
- ne pas créer de CSV / JSON ;
- ne pas introduire de CRM réel ;
- ne pas rendre la synchronisation bloquante ;
- ne pas ajouter dashboard / BI ;
- ne pas activer STAT-07 ;
- ne pas activer STAT-08 ;
- ne pas rendre STAT-05 obligatoire ;
- ne pas élargir INC-01.

---

## 14. Critères de sortie

- [x] données de référence reprises ;
- [x] scénarios de refus principaux définis ;
- [x] refus par RS-01 à RS-05 définis ;
- [x] comportement attendu en cas de refus défini ;
- [x] transitions explicitement non autorisées listées ;
- [x] vérification front / back / data définie ;
- [x] critères d'acceptation des refus listés ;
- [x] hors périmètre listé ;
- [x] risques identifiés ;
- [x] décisions retenues listées ;
- [x] garde-fous repris.

---

## 15. Prochaine action

Le prochain livrable est :

`inc-01-implementation-estimate.md`

**Objectif :** produire une estimation détaillée indicative de réalisation d'INC-01, sans chiffrage contractuel.
