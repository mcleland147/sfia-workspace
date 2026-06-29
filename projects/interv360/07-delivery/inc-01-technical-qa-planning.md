# Interv360 — INC-01 technical QA and planning

**Type** : Préparation QA détaillée et planification technique  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 07-delivery  
**Cycle** : Technical design  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Draft  
**Branche** : `delivery/interv360-technical-design`  
**Documents associés** : [`technical-design-plan.md`](technical-design-plan.md), [`inc-01-application-architecture.md`](inc-01-application-architecture.md), [`inc-01-front-back-data-decisions.md`](inc-01-front-back-data-decisions.md), [`inc-01-data-model.md`](inc-01-data-model.md), [`inc-01-api-strategy.md`](inc-01-api-strategy.md), [`inc-01-status-rules.md`](inc-01-status-rules.md), [`inc-01-qa-strategy.md`](inc-01-qa-strategy.md)

---

## 1. Objectif

Ce document prépare la **QA détaillée** et la **planification technique** de **INC-01 — Flux SAV minimal démontrable**.

Il vise à organiser les vérifications et la trajectoire technique avant réalisation, **sans créer de tests automatisés ni de scripts**.

Ce document **ne crée pas** :

- de code ;
- de scripts ;
- de tests automatisés ;
- de cas de test exécutables ;
- d'API détaillée ;
- de SQL ;
- de BPMN ;
- de sprint plan ferme ;
- de chiffrage contractuel.

---

## 2. Principes QA / planning

La préparation QA et planning doit respecter les principes suivants :

- vérifier le flux par séquence **RS-01 à RS-05** ;
- vérifier les responsabilités **front / back / data** ;
- vérifier les transitions **STAT-01 à STAT-06** ;
- préparer les **refus métier** sans créer de scripts ;
- préparer des **données de démonstration** sans jeu de test formel exécutable ;
- maintenir **Interv360** source locale ;
- ne pas dépendre d'un **CRM réel** ;
- ne pas rendre la **synchronisation bloquante** ;
- ne pas introduire **dashboard / BI** ;
- ne pas activer **STAT-07 / STAT-08** ;
- garder **Figma** non bloquant.

---

## 3. Périmètre de vérification INC-01

| Élément | Vérification attendue |
|---------|-----------------------|
| **RS-01** | Demande créée, STAT-01 visible liste + fiche |
| **RS-02** | Qualification minimale, STAT-02 visible |
| **RS-03** | Intervention créée, créneau + technicien, STAT-03 visible |
| **RS-04** | Consultation technicien, CR simple, résultat, STAT-04 |
| **RS-05** | Clôture locale, STAT-06 visible liste + fiche |
| **Statuts** | Chemin nominal respecté |
| **Data** | Objets, liens et journal minimal conservés |
| **API** | Aucune API externe obligatoire |
| **CRM** | Aucune dépendance |
| **Dashboard** | Hors périmètre |

---

## 4. Points de contrôle front / back / data

| Couche | Points de contrôle |
|--------|--------------------|
| **Front** | Écrans accessibles ; actions utilisateur disponibles ; statuts visibles ; liste et fiche cohérentes ; Figma non bloquant |
| **Back** | Préconditions contrôlées ; transitions appliquées côté back ; refus métier respectés ; orchestration RS-01 à RS-05 cohérente ; aucune dépendance CRM |
| **Data** | Objets persistés ; liens demande / intervention / CR conservés ; statut courant conservé ; journal fonctionnel minimal ; STAT-06 conservé localement |
| **QA** | Vérification par séquence ; vérification bout en bout ; vérification des refus ; vérification des garde-fous |

---

## 5. Vérification par séquence

| Séquence | Vérification technique / QA | Critère de passage |
|----------|-----------------------------|--------------------|
| **RS-01** | Création demande, liste, fiche, statut STAT-01 | Demande visible liste + fiche avec statut cohérent |
| **RS-02** | Checklist qualification, transition STAT-02 | STAT-02 appliqué uniquement après qualification minimale |
| **RS-03** | Intervention, créneau, technicien, STAT-03 | STAT-03 uniquement après intervention + créneau + technicien |
| **RS-04** | Consultation technicien, CR, résultat, STAT-04 | CR et résultat liés à intervention |
| **RS-05** | Clôture locale, STAT-06, visibilité liste + fiche | STAT-06 local sans CRM ni sync |

---

## 6. Scénarios de refus à préparer

| Refus à préparer | Raison |
|------------------|--------|
| Clôturer une demande STAT-01 | Qualification / intervention / CR manquants |
| Passer STAT-01 directement en STAT-03 | Qualification manquante |
| Passer STAT-02 directement en STAT-06 | Planification / CR manquants |
| Passer STAT-03 directement en STAT-06 | CR / résultat manquants |
| Appliquer STAT-07 | Hors INC-01 |
| Appliquer STAT-08 | Hors INC-01 |
| Rendre CRM obligatoire | Hors INC-01 |
| Rendre dashboard obligatoire | Hors INC-01 |
| Clôturer sans résultat exploitable | Clôture invalide |

**Précision :** ces scénarios sont à préparer pour un **futur plan de test**, pas à automatiser dans ce document.

---

## 7. Données de démonstration à formaliser

| Donnée | Usage |
|--------|-------|
| Demande SAV fictive | Point d'entrée RS-01 |
| Demandeur / client fictif | Contexte métier |
| Motif simple | Libellé |
| Priorité simple | Priorisation légère |
| Checklist qualification | Passage STAT-02 |
| Créneau simple | Planification RS-03 |
| Technicien fictif | Affectation |
| Commentaire technicien | CR |
| Résultat intervention | Condition clôture |
| Journal fonctionnel minimal | Démonstration des transitions |

**Précision :** ces données devront être formalisées dans un **futur jeu de données** si un cycle QA dédié est ouvert.

---

## 8. Préparation de la planification technique

| Séquence | Charge relative | Point d'attention planning |
|----------|-----------------|----------------------------|
| **RS-01** | M | Socle demande / liste / fiche structurant |
| **RS-02** | S | Qualification limitée mais dépend de RS-01 |
| **RS-03** | L | Séquence la plus structurante — intervention / planning / technicien |
| **RS-04** | M | Parcours technicien + CR simple |
| **RS-05** | M | Clôture locale + visibilité STAT-06 |

**Précision :** cette planification reste **indicative** et ne constitue **pas** un sprint plan ferme.

---

## 9. Ordre de réalisation recommandé

L'ordre recommandé reste **strictement séquentiel** :

**RS-01 → RS-02 → RS-03 → RS-04 → RS-05**

### Justification

- chaque séquence dépend du résultat de la précédente ;
- le flux doit rester démontrable progressivement ;
- les statuts doivent être validés dans l'ordre ;
- **RS-03** ne doit pas commencer sans **RS-02** stabilisé ;
- **RS-05** ne doit pas être abordé sans CR / résultat exploitable.

---

## 10. Préparation de la non-régression fonctionnelle

| Après réalisation de | Non-régression à vérifier |
|----------------------|---------------------------|
| **RS-02** | RS-01 reste cohérent |
| **RS-03** | RS-01 / RS-02 restent cohérents |
| **RS-04** | RS-01 / RS-02 / RS-03 restent cohérents |
| **RS-05** | RS-01 à RS-04 restent cohérents |

**Précision :** la non-régression reste **fonctionnelle et documentaire** à ce stade.

---

## 11. Risques QA / planning

| Risque | Impact | Réduction |
|--------|--------|-----------|
| Tests détaillés trop tôt | Surcharge | Préparer seulement |
| Automatisation prématurée | Perte temps | Reporter |
| RS-03 sous-estimée | Retard | Isoler planning simple |
| CRM réintroduit | Blocage | Garder hors INC-01 |
| Dashboard réintroduit | Élargissement | Liste / fiche suffisantes |
| STAT-07/08 activés | Confusion | Hors INC-01 |
| Figma bloquant | Ralentissement | Specs Git suffisantes |
| Refus métier oubliés | Anomalies tardives | Préparer scénarios de refus |

---

## 12. Conditions avant démarrage réalisation

| Condition | Statut attendu |
|-----------|----------------|
| Architecture applicative validée | À confirmer |
| Choix front / back / data validés | À confirmer |
| Modèle data conceptuel validé | À confirmer |
| Stratégie API validée | À confirmer |
| Règles statuts validées | À confirmer |
| Données de démonstration prêtes | À préparer |
| Stratégie QA détaillée prête | À préparer |
| Périmètre INC-01 gelé | À confirmer |
| Figma non bloquant confirmé | À confirmer |

---

## 13. Décisions retenues

| Décision | Statut |
|----------|--------|
| QA organisée par RS-01 à RS-05 | Retenu |
| Contrôle front / back / data | Retenu |
| Vérification du chemin STAT-01 à STAT-06 | Retenu |
| Scénarios de refus à préparer | Retenu |
| Données de démonstration à formaliser | Retenu |
| Planification séquentielle RS-01 à RS-05 | Retenu |
| Non-régression fonctionnelle progressive | Retenu |
| Aucun test automatisé dans ce cycle | Retenu |
| Aucun sprint plan ferme | Retenu |

---

## 14. Garde-fous

- ne **pas** créer de test automatisé ;
- ne **pas** créer de script ;
- ne **pas** créer de cas de test exécutable ;
- ne **pas** créer de code ;
- ne **pas** créer d'API détaillée ;
- ne **pas** créer de SQL ;
- ne **pas** créer de BPMN ;
- ne **pas** créer de sprint plan ferme ;
- ne **pas** créer de chiffrage contractuel ;
- ne **pas** introduire CRM réel ;
- ne **pas** rendre la synchronisation bloquante ;
- ne **pas** ajouter dashboard / BI ;
- ne **pas** activer STAT-07 / STAT-08 ;
- ne **pas** rendre Figma bloquant ;
- ne **pas** élargir INC-01.

---

## 15. Critères de sortie

- [x] périmètre de vérification défini ;
- [x] points de contrôle front / back / data définis ;
- [x] vérification par séquence documentée ;
- [x] scénarios de refus à préparer listés ;
- [x] données de démonstration à formaliser listées ;
- [x] planification technique indicative définie ;
- [x] ordre de réalisation recommandé ;
- [x] non-régression fonctionnelle préparée ;
- [x] risques QA / planning identifiés ;
- [x] conditions avant réalisation listées ;
- [x] décisions retenues listées ;
- [x] garde-fous repris.

---

## 16. Prochaine action

Le prochain livrable est :

**[`technical-design-summary.md`](technical-design-summary.md)**

**Objectif :** synthétiser le cycle technical design et décider si la branche peut être clôturée par PR.

---

*Préparation QA et planification technique INC-01 — Draft.*
