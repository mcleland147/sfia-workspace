# Interv360 — Clôture du cycle architecture fonctionnelle détaillée

**Projet** : PRJ-INTERV360  
**Phase** : 05-functional-architecture  
**Type** : Clôture de cycle  
**Statut** : Draft  
**Branche** : `arch/interv360-functional-detail`

---

## 1. Objectif

Ce document **clôture** le cycle d'architecture fonctionnelle détaillée Interv360.

Ce cycle a permis de transformer les décisions issues des cycles précédents — clarification, BPMN et ADR — en une **architecture fonctionnelle consolidée**.

Il **ne produit pas** de backlog, de user stories, de tests, de code, de maquette UI finale, d'API, de modèle technique, de BPMN ou de delivery.

---

## 2. Livrables produits

| Livrable | Rôle |
|----------|------|
| `functional-architecture-scope.md` | Cadrage du cycle |
| `functional-domains.md` | Domaines fonctionnels et responsabilités |
| `business-objects.md` | Objets métier et relations |
| `status-and-transitions.md` | Statuts, transitions et règles fonctionnelles |
| `integration-functional-view.md` | Vue fonctionnelle de la sync CRM simulée |
| `dashboard-and-alerts.md` | Dashboard, indicateurs et alertes |
| `functional-architecture-summary.md` | Synthèse consolidée |
| `2026-06-28-functional-architecture-cycle-closure.md` | Clôture du cycle |

---

## 3. Résultats consolidés

Le cycle a consolidé :

| Élément | Résultat |
|---------|----------|
| Domaines fonctionnels | 7 domaines structurants |
| Objets métier | 16 objets fonctionnels |
| Statuts | 8 statuts / indicateurs |
| Cycle métier | STAT-01 à STAT-06 |
| Indicateurs internes | STAT-07 retard, STAT-08 anomalie d'intégration |
| Clôture locale | Autonome, non conditionnée par la sync CRM |
| Sync CRM simulée | Post-clôture, cible représentative, non source de vérité |
| Anomalies | STAT-08, gravités, reprise manuelle |
| Dashboard | Visibilité, priorisation, non source de vérité |
| ADR intégrées | ADR-001 à ADR-004 |

---

## 4. Architecture fonctionnelle obtenue

Interv360 est structuré autour d'un objet central : **l'intervention**.

La chaîne fonctionnelle principale est :

```
Demande SAV → Qualification → Planification → Intervention terrain → Clôture locale → Sync CRM simulée → Anomalies éventuelles → Pilotage
```

Les statuts principaux sont :

```
— → STAT-01 → STAT-02 → STAT-03 → STAT-04 ⇄ STAT-05 → STAT-06
```

Les indicateurs parallèles sont :

- **STAT-07** : retard opérationnel
- **STAT-08** : anomalie d'intégration

---

## 5. Décisions ADR intégrées

| ADR | Intégration dans l'architecture fonctionnelle |
|-----|-----------------------------------------------|
| ADR-001 | Séparation entre statuts métier, indicateur retard et anomalie d'intégration |
| ADR-002 | Interv360 source de vérité locale ; CRM simulé cible représentative |
| ADR-003 | STAT-08, gravités, visibilité dashboard et reprise manuelle |
| ADR-004 | Clôture locale autonome ; synchronisation externe non bloquante |

---

## 6. Garde-fous respectés

- aucun backlog produit ;
- aucune user story produite ;
- aucun cas de test produit ;
- aucun scénario de test produit ;
- aucun code applicatif produit ;
- aucune maquette UI finale produite ;
- aucun composant front produit ;
- aucune API produite ;
- aucun schéma SQL produit ;
- aucun modèle technique produit ;
- aucun BPMN produit ;
- aucun BPMN existant modifié ;
- aucun SVG modifié ;
- aucune publication Notion réalisée ;
- aucun appel API Notion réalisé ;
- aucun delivery ouvert.

---

## 7. Points ouverts / suites possibles

Le cycle permet maintenant d'alimenter plusieurs suites possibles :

| Suite | Objectif |
|-------|----------|
| Design UX/UI | Préparer les vues et parcours à partir des domaines, objets, statuts et dashboard |
| Second lot ADR | Formaliser clôture sans signature, doublons ou reprise manuelle si nécessaire |
| Cadrage technique futur | Traduire l'architecture fonctionnelle en hypothèses techniques sans le faire dans ce cycle |
| Capitalisation méthode SFIA | Standardiser la méthode d'architecture fonctionnelle détaillée |
| Prompts réutilisables | Formaliser une famille de prompts architecture fonctionnelle |

---

## 8. Recommandation post-cycle

**Recommandation principale :**

Créer la **PR** du cycle architecture fonctionnelle détaillée vers `main`.

Après merge, deux trajectoires sont possibles :

1. ouvrir un cycle de **capitalisation méthode SFIA** sur l'architecture fonctionnelle détaillée ;
2. poursuivre Interv360 vers la **préparation UX/UI** ou un **second lot ADR** ciblé.

**Recommandation préférée :**

Après merge, **capitaliser la méthode architecture fonctionnelle détaillée** avant de passer au design UX/UI.

Cette capitalisation pourra produire :

- une méthode générique ;
- un standard de livrables ;
- des templates ;
- une famille de prompts ;
- une checklist BPMN → ADR → architecture fonctionnelle.

---

## 9. Préparation PR

| Élément | Valeur |
|---------|--------|
| Branche source | `arch/interv360-functional-detail` |
| Branche cible | `main` |
| Type | Documentation / architecture fonctionnelle projet |
| Code applicatif | Non |
| Notion | Non |
| Delivery | Non |

**Titre PR recommandé :**

```
Add Interv360 detailed functional architecture
```

**Résumé PR recommandé :**

```
Cette PR ajoute le cycle d'architecture fonctionnelle détaillée Interv360.
Elle consolide les décisions issues des cycles clarification, BPMN et ADR en une architecture fonctionnelle structurée : domaines, objets métier, statuts, transitions, sync CRM simulée, anomalies, dashboard et synthèse de cycle.
```

---

## 10. Conclusion

Le cycle **architecture fonctionnelle détaillée Interv360** est **complet**.

Il fournit un socle fonctionnel clair, aligné avec les ADR structurantes et exploitable pour la suite du projet.

La prochaine action recommandée est la **préparation de la PR vers `main`**, sans merge automatique.

---

*Clôture de cycle — Interv360 — SFIA — Draft.*
