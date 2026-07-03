# [Nom du projet] — Synthèse d'architecture fonctionnelle détaillée

**Projet** : [Code ou nom du projet]  
**Phase** : [Phase documentaire — ex. 05-functional-architecture]  
**Type** : Synthèse architecture fonctionnelle  
**Statut** : Draft  
**Branche** : [Nom de la branche Git]  
**Méthode associée** : `docs/practices/architecture/functional-architecture-method.md`  
**Standard associé** : `docs/practices/architecture/functional-architecture-deliverables-standard.md`

---

## 1. Objectif

Ce document **consolide** l'architecture fonctionnelle détaillée de **[nom du projet]**.

Il synthétise :

- les domaines fonctionnels ;
- les objets métier ;
- les statuts et transitions ;
- les intégrations vues du métier ;
- le dashboard et les alertes ;
- les décisions structurantes déjà intégrées.

Ce document **consolide** les livrables existants **sans créer** de nouvelle décision structurante.

Il **ne produit pas** de backlog, de user stories, de tests, de code, d'API, de modèle technique, de maquette UI finale ou de delivery.

---

## 2. Vision fonctionnelle consolidée

[Décrire la vision fonctionnelle consolidée en 2 à 5 paragraphes.]

La **source de vérité fonctionnelle** est : [source de vérité].

Les éventuelles **cibles externes** ou systèmes consommateurs sont : [systèmes].

Le **pilotage** rend visibles les situations à suivre, sans remplacer les objets métier, statuts ou règles sources.

---

## 3. Domaines fonctionnels consolidés

| Domaine | Responsabilité principale | Livrable source |
|---------|---------------------------|-----------------|
| [Domaine] | [Responsabilité] | `functional-domains.md` |

---

## 4. Objets métier structurants

| Objet métier | Rôle dans l'architecture fonctionnelle | Livrable source |
|--------------|----------------------------------------|-----------------|
| [Objet] | [Rôle] | `business-objects.md` |

---

## 5. Statuts et transitions consolidés

| Famille | Statuts / indicateurs | Rôle |
|---------|----------------------|------|
| [Famille — ex. Cycle métier] | [Statuts] | [Rôle] |
| [Famille — ex. Indicateur] | [Statuts / indicateurs] | [Rôle] |

**Chaîne fonctionnelle principale :**

```
[Décrire la chaîne de statuts principale — ex. — → STAT-A → STAT-B → STAT-C]
```

**Indicateurs parallèles éventuels :**

[Décrire les indicateurs qui ne remplacent pas le statut métier principal.]

**Principes :**

- [Principe 1 — ex. Les indicateurs ne remplacent pas le statut métier principal]
- [Principe 2]
- [Principe 3]

---

## 6. Règles fonctionnelles structurantes

| Règle | Description | Source |
|-------|-------------|--------|
| [Règle] | [Description] | [ADR / livrable / RG] |

---

## 7. Intégrations fonctionnelles consolidées

| Système ou cible | Rôle fonctionnel | Source de vérité ? | Effet sur le cycle métier |
|------------------|------------------|:------------------:|---------------------------|
| [Système] | [Rôle] | [Oui / Non] | [Effet] |

Les intégrations sont décrites ici d'un **point de vue fonctionnel**.

Ce document **ne produit pas** d'API, de contrat technique, de JSON, de mapping SQL ou de solution d'intégration.

---

## 8. Anomalies, exceptions ou reprises

| Situation | Traitement fonctionnel | Effet sur le cycle principal | Visibilité |
|-----------|------------------------|------------------------------|------------|
| [Situation] | [Traitement] | [Effet] | [Dashboard / historique / autre] |

---

## 9. Dashboard, alertes et pilotage

**Situations visibles :**

- [Situation visible 1]
- [Situation visible 2]
- [Situation visible 3]

| Vue fonctionnelle | Objectif | Acteurs concernés |
|-------------------|----------|-------------------|
| [Vue] | [Objectif] | [Acteurs] |

**Principes :**

- Le dashboard **rend visible**.
- Le dashboard **ne devient pas** source de vérité.
- La priorité **aide à décider** mais ne décide pas automatiquement.
- Les situations visibles doivent être **traçables**.

---

## 10. Alignement ADR ou décisions structurantes

| ADR / décision | Décision intégrée | Impact fonctionnel |
|----------------|-------------------|-------------------|
| [ADR ou décision] | [Décision] | [Impact] |

---

## 11. Ce que l'architecture fonctionnelle permet maintenant

| Suite possible | Apport |
|----------------|--------|
| UX/UI | [Apport] |
| Spécification fonctionnelle détaillée | [Apport] |
| Cadrage technique futur | [Apport] |
| Backlog futur | [Apport] |
| Tests futurs | [Apport] |

Ces suites sont **préparées** mais **non produites** dans ce cycle.

---

## 12. Points de vigilance consolidés

- [Point de vigilance 1]
- [Point de vigilance 2]
- [Point de vigilance 3]

**Garde-fous génériques :**

- Ne pas transformer les documents fonctionnels en backlog
- Ne pas produire de user stories dans ce cycle
- Ne pas transformer les objets métier en modèle SQL
- Ne pas transformer les intégrations fonctionnelles en API
- Ne pas faire du dashboard une source de vérité
- Ne pas modifier les BPMN dans ce cycle

---

## 13. Conclusion

L'architecture fonctionnelle détaillée de **[nom du projet]** est désormais structurée autour de :

- **[nombre]** domaines fonctionnels ;
- **[nombre]** objets métier ;
- **[nombre]** statuts ou indicateurs ;
- [principes structurants principaux].

Cette synthèse peut servir de base à la **clôture du cycle** d'architecture fonctionnelle, puis à la phase suivante : **[phase suivante]**.

---

*Template SFIA — Synthèse architecture fonctionnelle — Réutilisable.*
