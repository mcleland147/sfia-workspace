# [Nom du projet] — Clôture du cycle d'architecture fonctionnelle

**Projet** : [Code ou nom du projet]  
**Phase** : [Phase documentaire — ex. 05-functional-architecture]  
**Type** : Clôture de cycle  
**Statut** : Draft  
**Branche** : [Nom de la branche Git]  
**Méthode associée** : `docs/methods/architecture/functional-architecture-method.md`  
**Checklist associée** : `docs/methods/architecture/functional-architecture-checklist.md`

---

## 1. Objectif

Ce document **acte la clôture** du cycle d'architecture fonctionnelle détaillée de **[nom du projet]**.

Il confirme :

- les livrables produits ;
- les décisions consolidées ;
- les exclusions respectées ;
- les points ouverts ;
- la suite recommandée.

Il **ne crée pas** de nouveau périmètre fonctionnel.

Il **ne produit pas** de backlog, user stories, tests, code, API, modèle technique, BPMN, maquette UI finale ou delivery.

---

## 2. Rappel du périmètre du cycle

| Élément | Résultat |
|---------|----------|
| Projet | [Nom du projet] |
| Branche | [Nom de branche] |
| Phase | [Phase] |
| Objectif du cycle | [Objectif] |
| Statut | [Draft / Validé / À relire] |

---

## 3. Livrables produits

| Livrable | Rôle | Statut |
|----------|------|--------|
| `functional-architecture-scope.md` | Cadrage du périmètre | [Statut] |
| `functional-domains.md` | Domaines fonctionnels | [Statut] |
| `business-objects.md` | Objets métier | [Statut] |
| `status-and-transitions.md` | Statuts et transitions | [Statut] |
| `integration-functional-view.md` | Vue fonctionnelle des intégrations | [Statut] |
| `dashboard-and-alerts.md` | Dashboard et alertes | [Statut] |
| `functional-architecture-summary.md` | Synthèse consolidée | [Statut] |
| `functional-architecture-cycle-closure.md` | Clôture du cycle | [Statut] |

---

## 4. Résultats consolidés

| Élément | Résultat |
|---------|----------|
| Domaines fonctionnels | [Nombre / synthèse] |
| Objets métier | [Nombre / synthèse] |
| Statuts ou indicateurs | [Nombre / synthèse] |
| Intégrations fonctionnelles | [Synthèse] |
| Dashboard / pilotage | [Synthèse] |
| Source de vérité | [Synthèse] |
| Points ouverts | [Nombre / synthèse] |

---

## 5. Décisions ou ADR intégrées

| ADR / décision | Statut | Impact sur l'architecture fonctionnelle |
|----------------|--------|----------------------------------------|
| [ADR ou décision] | [Statut — ex. Accepted] | [Impact] |

---

## 6. Exclusions confirmées

- [ ] Aucun backlog produit
- [ ] Aucune user story produite
- [ ] Aucun cas de test produit
- [ ] Aucun scénario de test produit
- [ ] Aucun code applicatif produit
- [ ] Aucune API produite
- [ ] Aucun SQL produit
- [ ] Aucun modèle technique produit
- [ ] Aucun BPMN produit ou modifié
- [ ] Aucun SVG modifié
- [ ] Aucune maquette UI finale produite
- [ ] Aucun composant front produit
- [ ] Aucun planning de delivery produit
- [ ] Aucune publication Notion réalisée
- [ ] Aucun appel API Notion réalisé
- [ ] Aucun fichier `.env` modifié
- [ ] Aucun secret affiché ou commité

---

## 7. Points ouverts

| Point ouvert | Nature | Recommandation |
|--------------|--------|----------------|
| [Point] | [Métier / fonctionnel / décisionnel / technique futur] | [Recommandation] |

---

## 8. Risques résiduels

| Risque | Impact potentiel | Traitement recommandé |
|--------|------------------|----------------------|
| [Risque] | [Impact] | [Traitement] |

---

## 9. Passage à la phase suivante

| Phase possible | Conditions de passage | Commentaire |
|----------------|----------------------|-------------|
| UX/UI | [Conditions] | [Commentaire] |
| Spécifications fonctionnelles détaillées | [Conditions] | [Commentaire] |
| Cadrage technique | [Conditions] | [Commentaire] |
| Backlog futur | [Conditions] | [Commentaire] |

La clôture **ne déclenche pas automatiquement** ces phases.

---

## 10. Préparation revue / PR

- [ ] Tous les livrables attendus sont présents
- [ ] La synthèse ne crée pas de nouvelle décision structurante
- [ ] La clôture ne crée pas de nouveau contenu métier
- [ ] Les exclusions sont confirmées
- [ ] Les fichiers interdits n'ont pas été modifiés
- [ ] Le working tree est clean après commit
- [ ] La branche est poussée sur `origin`
- [ ] La PR peut être ouverte manuellement ou via `gh` si disponible

**Éléments PR (à compléter si applicable) :**

| Élément | Valeur |
|---------|--------|
| Branche source | [Nom de branche] |
| Branche cible | `main` |
| Titre PR recommandé | [Titre] |

---

## 11. Conclusion

Le cycle d'architecture fonctionnelle détaillée de **[nom du projet]** est **clôturable**.

Les livrables produits permettent de disposer d'une vision fonctionnelle consolidée, traçable et exploitable pour la suite.

La prochaine étape recommandée est : **[prochaine étape — ex. PR vers main, UX/UI, capitalisation méthode]**.

---

*Template SFIA — Clôture cycle architecture fonctionnelle — Réutilisable.*
