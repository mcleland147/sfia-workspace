# Interv360 — Technical design summary

**Type** : Synthèse de conception technique  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 04-delivery  
**Cycle** : Technical design  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Statut** : Ready for closure  
**Branche** : `delivery/interv360-technical-design`  
**Documents associés** : [`technical-design-plan.md`](technical-design-plan.md), [`inc-01-application-architecture.md`](inc-01-application-architecture.md), [`inc-01-front-back-data-decisions.md`](inc-01-front-back-data-decisions.md), [`inc-01-data-model.md`](inc-01-data-model.md), [`inc-01-api-strategy.md`](inc-01-api-strategy.md), [`inc-01-status-rules.md`](inc-01-status-rules.md), [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md)

---

## 1. Objectif

Ce document synthétise le cycle **technical design** appliqué à :

**INC-01 — Flux SAV minimal démontrable**

Il vérifie que les **arbitrages techniques préparatoires** ont été produits et que l'incrément dispose maintenant d'un cadrage technique suffisant pour préparer une **future réalisation**.

Ce document **ne lance pas** le développement.

Il **ne crée pas** de code, d'API détaillée, de SQL, de tests automatisés, de BPMN, de sprint plan ferme ou de chiffrage contractuel.

---

## 2. Décision de clôture

**Le cycle technical design INC-01 peut être clôturé.**

### Justification

- l'architecture applicative cible est définie au niveau conception ;
- les responsabilités front / back / data sont clarifiées ;
- le modèle de données conceptuel / logique est défini ;
- la stratégie API est cadrée ;
- les règles de statuts sont formalisées ;
- la QA détaillée et la planification technique sont préparées ;
- les garde-fous INC-01 sont consolidés ;
- aucun hors périmètre n'a été réintroduit.

### Statut recommandé

**`Ready for implementation planning`**

Cela signifie que INC-01 est prêt pour un **futur cycle de planification de réalisation**, mais **pas** pour un démarrage de code sans validation finale du périmètre, des données de démonstration et de la stratégie QA détaillée.

---

## 3. Livrables produits

| Livrable | Statut | Rôle |
|----------|:------:|------|
| [`technical-design-plan.md`](technical-design-plan.md) | ✅ | Plan du cycle |
| [`inc-01-application-architecture.md`](inc-01-application-architecture.md) | ✅ | Architecture applicative cible |
| [`inc-01-front-back-data-decisions.md`](inc-01-front-back-data-decisions.md) | ✅ | Décisions front / back / data |
| [`inc-01-data-model.md`](inc-01-data-model.md) | ✅ | Modèle conceptuel / logique |
| [`inc-01-api-strategy.md`](inc-01-api-strategy.md) | ✅ | Stratégie API ou absence d'API externe requise |
| [`inc-01-status-rules.md`](inc-01-status-rules.md) | ✅ | Règles de transition STAT-01 à STAT-06 |
| [`inc-01-technical-qa-planning.md`](inc-01-technical-qa-planning.md) | ✅ | QA détaillée et planification technique |
| [`technical-design-summary.md`](technical-design-summary.md) | ✅ | Synthèse et décision de clôture |

---

## 4. Synthèse INC-01

| Élément | Valeur |
|---------|--------|
| **Incrément** | INC-01 — Flux SAV minimal démontrable |
| **Séquences** | RS-01 à RS-05 |
| **Chemin nominal** | STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06 |
| **Résultat cible** | STAT-06 — Clôturée localement |
| **Source locale** | Interv360 |
| **CRM réel** | Exclu |
| **Synchronisation externe** | Non bloquante |
| **Dashboard / BI** | Exclus |
| **STAT-05** | Hors chemin nominal |
| **STAT-07 / STAT-08** | Hors INC-01 |
| **Figma** | Non bloquant |

---

## 5. Synthèse architecture applicative

| Axe | Décision |
|-----|----------|
| **Architecture** | 4 couches logiques |
| **Présentation** | Écrans Liste, Fiche, Planning, Technicien, Compte rendu |
| **Applicative / orchestration** | Coordination RS-01 à RS-05 |
| **Métier** | Qualification, planification, CR, clôture, transitions |
| **Persistance** | Demandes, interventions, CR, statuts, journal minimal |
| **Source de vérité** | Interv360 local |
| **Microservices** | Non imposés |
| **Stack** | Non imposée |

L'architecture reste **logique** et ne constitue **pas** une implémentation.

---

## 6. Synthèse front / back / data

| Couche | Décision consolidée |
|--------|---------------------|
| **Front** | Affiche les écrans, déclenche les actions et rend les statuts visibles |
| **Back** | Orchestre le flux, contrôle les préconditions et applique les transitions |
| **Data** | Conserve objets, états, liens et journal fonctionnel minimal |
| **QA** | Vérifie comportements, refus et garde-fous |
| **Design** | Guide les parcours sans bloquer la réalisation |

Le **front ne décide pas** les transitions. Les statuts sont **gouvernés hors UI**.

---

## 7. Synthèse modèle de données

| Élément data | Décision |
|--------------|----------|
| **Objets conceptuels** | Demande SAV, Qualification, Intervention, Créneau, Technicien, Compte rendu, Résultat intervention, Statut, Journal fonctionnel minimal |
| **Relations** | 0..1 qualification, 0..1 intervention, 1 créneau, 1 technicien, 0..1 CR, 1 résultat |
| **Statut courant** | Conservé localement |
| **Journal** | Trace minimale |
| **SQL** | Non créé |
| **Base cible** | Non imposée |
| **Multi-intervention** | Post-MVP |
| **Historique complet** | Post-MVP |

---

## 8. Synthèse stratégie API

| Axe API | Décision |
|---------|----------|
| **API externe** | Non requise comme prérequis INC-01 |
| **Stratégie** | Orchestration applicative interne prioritaire |
| **Interfaces internes** | Possibles selon architecture retenue |
| **Contrats détaillés** | Reportés |
| **CRM API** | Hors INC-01 |
| **Anomalies API** | Hors INC-01 |
| **OpenAPI** | Non créé |
| **Routes / payloads** | Non créés |

---

## 9. Synthèse règles de statuts

| Sujet | Décision |
|-------|----------|
| **Chemin nominal** | STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06 |
| **STAT-01** | Demande créée / à qualifier |
| **STAT-02** | Demande qualifiée |
| **STAT-03** | Intervention planifiée |
| **STAT-04** | Réalisation engagée / CR saisi |
| **STAT-06** | Clôture locale |
| **STAT-05** | Hors chemin nominal |
| **STAT-07** | Hors INC-01 |
| **STAT-08** | Hors INC-01 |
| **Transitions** | Contrôlées côté back |
| **Clôture** | Locale, sans CRM ni sync |

---

## 10. Synthèse QA / planning technique

| Axe | Décision |
|-----|----------|
| **QA** | Organisée par RS-01 à RS-05 |
| **Vérification** | Front / back / data |
| **Refus** | Scénarios à préparer |
| **Données de démo** | À formaliser |
| **Planification** | Séquentielle RS-01 → RS-05 |
| **Charge relative** | RS-03 la plus structurante |
| **Non-régression** | Progressive après chaque séquence |
| **Tests automatisés** | Non créés |
| **Sprint plan ferme** | Non créé |

---

## 11. Conditions avant démarrage réalisation

| Condition | Statut recommandé |
|-----------|-------------------|
| Architecture applicative | Validée en conception |
| Front / back / data | Validés en conception |
| Modèle data | Validé en conception |
| Stratégie API | Validée en conception |
| Règles statuts | Validées en conception |
| Données de démonstration | À formaliser |
| Stratégie QA détaillée | À finaliser |
| Périmètre INC-01 | À geler avant réalisation |
| Figma non bloquant | À confirmer |

---

## 12. Garde-fous consolidés

| Garde-fou | Statut |
|-----------|:------:|
| Pas de code | ✅ |
| Pas d'API détaillée | ✅ |
| Pas d'OpenAPI | ✅ |
| Pas de payload JSON | ✅ |
| Pas de SQL | ✅ |
| Pas de DDL / migration | ✅ |
| Pas de test automatisé | ✅ |
| Pas de BPMN | ✅ |
| Pas de sprint plan ferme | ✅ |
| Pas de chiffrage contractuel | ✅ |
| Pas de CRM réel | ✅ |
| Pas de synchronisation bloquante | ✅ |
| Pas de dashboard / BI | ✅ |
| STAT-05 hors chemin nominal | ✅ |
| STAT-07 / STAT-08 hors INC-01 | ✅ |
| Figma non bloquant | ✅ |
| INC-01 non élargi | ✅ |

---

## 13. Points restant à traiter

| Point | Futur cycle recommandé |
|-------|------------------------|
| Données de démonstration formelles | QA / implementation planning |
| Scénarios de test métier détaillés | QA |
| Scénarios de refus détaillés | QA |
| Choix de stack si nécessaire | Implementation planning |
| Contrats API détaillés si architecture séparée | Implementation |
| Estimation détaillée | Implementation planning |
| Sprint plan | Implementation planning |
| Démarrage code | Futur cycle réalisation uniquement |

---

## 14. Décision PR

**La branche `delivery/interv360-technical-design` peut être poussée et proposée en PR vers `main`.**

### PR recommandée

- une **PR unique** ;
- uniquement documentation technical design INC-01 ;
- aucun fichier `exports/` ;
- pas de code ;
- pas de tests ;
- pas de SQL ;
- pas d'API détaillée ;
- pas de changement Figma / Penpot.

### Titre PR recommandé

**`Design Interv360 INC-01 technical foundation`**

---

## 15. Prochaine action recommandée

1. Pousser la branche `delivery/interv360-technical-design` ;
2. Créer une PR vers `main` ;
3. Merger manuellement après revue ;
4. Nettoyer la branche ;
5. Ouvrir ensuite, si souhaité, un futur cycle :

**`delivery/interv360-implementation-planning`**

### Cible future

**INC-01 — Flux SAV minimal démontrable**

### Objectif futur

Préparer le démarrage réalisation :

- données de démonstration formelles ;
- scénarios QA détaillés ;
- estimation détaillée ;
- planification de réalisation ;
- éventuels choix de stack ;
- préparation backlog de réalisation.

---

## 16. Critères de sortie

- [x] livrables du cycle listés ;
- [x] décision de clôture formulée ;
- [x] synthèse INC-01 produite ;
- [x] synthèse architecture produite ;
- [x] synthèse front / back / data produite ;
- [x] synthèse data model produite ;
- [x] synthèse API produite ;
- [x] synthèse statuts produite ;
- [x] synthèse QA / planning produite ;
- [x] conditions avant réalisation listées ;
- [x] garde-fous consolidés ;
- [x] décision PR formulée ;
- [x] prochaine action indiquée.

---

*Synthèse technical design INC-01 — Ready for closure.*
