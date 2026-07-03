# Interv360 — INC-01 Phase 2 REX

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Phase 2 REX  
**Phase** : Phase 2 — Réalisation groupée contrôlée  
**Statut** : Retour d'expérience  
**Branche** : `delivery/interv360-inc-01-phase-2-rex`

---

## 1. Objectif du REX

Ce document capitalise le **retour d'expérience** de la phase 2 INC-01.

Il vise à identifier ce que la phase 2 a apporté à Interv360 et à la méthode SFIA.

Il sert aussi à préparer une méthode réutilisable pour passer d'un cadrage fonctionnel à une réalisation applicative contrôlée.

**Sources :** [`inc-01-phase-2-delivery-decision.md`](inc-01-phase-2-delivery-decision.md), [`inc-01-controlled-workflow-skeleton-summary.md`](inc-01-controlled-workflow-skeleton-summary.md), [`inc-01-controlled-workflow-validation.md`](inc-01-controlled-workflow-validation.md), [`inc-01-demo-script.md`](inc-01-demo-script.md)

---

## 2. Rappel du changement de régime

### Phase 1 — Micro-cycles

La phase 1 a volontairement avancé par micro-cycles.

**Objectif :**

- sécuriser le périmètre ;
- stabiliser les choix techniques ;
- séparer readonly et actions métier ;
- éviter les dérives ;
- documenter les décisions ;
- produire un parcours consultatif stable.

### Phase 2 — Réalisation groupée contrôlée

La phase 2 a ensuite introduit une réalisation groupée contrôlée.

**Objectif :**

- accélérer le delivery ;
- regrouper les transitions cohérentes ;
- maintenir les garde-fous ;
- renforcer les tests ;
- produire une démo présentable.

---

## 3. Résultat obtenu en phase 2

La phase 2 a permis de livrer :

| Élément | Résultat |
|--------|----------|
| Décision phase 2 | Réalisée |
| Workflow local contrôlé | Réalisé |
| Transitions nominales | Réalisées |
| Journal local fictif | Réalisé |
| Reset compatible | Réalisé |
| Validation fonctionnelle | Réalisée |
| Script de démonstration | Réalisé |
| Build | OK |
| Tests | 38 tests passés |
| Données réelles | Aucune |
| Backend / API / DB | Aucun |

---

## 4. Workflow obtenu

Le workflow local contrôlé couvre :

| Transition | Action | Événement |
|------------|--------|-----------|
| `STAT-01 → STAT-02` | Qualifier la demande | `qualification.confirmed` |
| `STAT-02 → STAT-03` | Planifier l'intervention | `planning.confirmed` |
| `STAT-03 → STAT-04` | Marquer l'intervention réalisée | `intervention.completed` |
| `STAT-04 → STAT-06` | Clôturer avec compte rendu fictif | `report.closed` |

Le workflow reste volontairement limité :

- une seule demande fictive ;
- stockage local ;
- journal fictif ;
- reset explicite ;
- aucun backend ;
- aucune API ;
- aucune donnée réelle.

---

## 5. Apport réel de la phase 2

La phase 2 a apporté :

- un gain de vitesse significatif ;
- une livraison fonctionnelle plus visible ;
- un démonstrateur plus convaincant ;
- une meilleure perception du produit ;
- une preuve que les garde-fous SFIA peuvent rester actifs même en réalisation groupée ;
- une base concrète pour présenter la valeur d'Interv360.

Le passage en réalisation groupée était pertinent parce que les règles étaient déjà stabilisées.

---

## 6. Comparaison micro-cycles / réalisation groupée

| Critère | Micro-cycles phase 1 | Réalisation groupée phase 2 |
|--------|----------------------|-----------------------------|
| Vitesse | Lente | Rapide |
| Sécurisation | Très forte | Forte |
| Traçabilité | Très détaillée | Synthétique mais suffisante |
| Risque de dérive | Faible | Moyen, mais maîtrisé par garde-fous |
| Valeur visible | Progressive | Forte |
| Effort documentaire | Élevé | Plus raisonnable |
| Pertinence | Démarrage / cadrage | Réalisation une fois règles stabilisées |

---

## 7. Enseignement principal

L'enseignement principal est le suivant :

> La SFIA ne doit pas imposer un rythme unique.
>
> Elle doit adapter le niveau de contrôle au niveau de maturité du sujet.

Quand le périmètre est instable, les micro-cycles sont utiles.

Quand les règles sont stabilisées, une réalisation groupée contrôlée est plus efficace.

---

## 8. Méthode SFIA réutilisable

La méthode réutilisable proposée est :

### Étape 1 — Go / no-go

Valider si l'incrément mérite d'être réalisé.

### Étape 2 — Arbitrage technique

Choisir la stack, la persistance et les limites techniques.

### Étape 3 — Cadrage data

Définir les objets, les données fictives, les interdits et les seeds.

### Étape 4 — Parcours readonly

Construire le parcours consultatif avant les actions métier.

### Étape 5 — Décision de transition

Identifier la première transition ou le flux nominal autorisable.

### Étape 6 — Passage en phase 2

Acter le changement de rythme si les règles sont suffisamment claires.

### Étape 7 — Réalisation groupée contrôlée

Implémenter un lot fonctionnel cohérent.

### Étape 8 — Validation fonctionnelle

Valider build, tests, garde-fous, reset et démonstration.

### Étape 9 — Script de démonstration

Préparer le récit et les limites.

### Étape 10 — Capitalisation

Transformer l'expérience en standard SFIA réutilisable.

---

## 9. Garde-fous indispensables

Les garde-fous qui ont permis d'aller vite sans dériver sont :

- interdits explicites ;
- données fictives uniquement ;
- reset obligatoire ;
- stockage local centralisé ;
- absence de backend/API/DB ;
- tests renforcés ;
- documentation de clôture ;
- revue des transitions autorisées ;
- séparation claire démonstrateur / outil de production.

---

## 10. Points de vigilance

| Sujet | Vigilance |
|------|-----------|
| Documentation | Ne pas surdocumenter chaque micro-évolution |
| Rythme | Passer en lot groupé dès que les règles sont stables |
| Scope | Ne pas ouvrir trop de dimensions à la fois |
| Démo | Toujours expliciter les limites |
| Code | Garder les écritures centralisées |
| Tests | Renforcer les tests dès que le lot grossit |
| Capitalisation | Ne pas attendre la fin du projet pour formaliser la méthode |

---

## 11. Ce que ce REX apporte à la SFIA

Ce REX montre que la SFIA peut devenir un **cadre de delivery adaptatif**.

Elle ne sert pas uniquement à documenter.

Elle sert à :

- décider ;
- cadrer ;
- réaliser ;
- accélérer ;
- contrôler ;
- valider ;
- capitaliser.

La valeur n'est pas seulement dans les livrables.

Elle est dans la capacité à choisir le bon niveau de contrôle au bon moment.

---

## 12. Décision de capitalisation

**Décision proposée :**

- [x] Capitaliser la méthode phase 1 / phase 2 dans SFIA
- [ ] Continuer uniquement sur Interv360 sans capitalisation
- [ ] Reprendre la méthode avant capitalisation

### Décision

La méthode phase 1 / phase 2 doit être **capitalisée comme méthode SFIA réutilisable**.

Elle peut devenir un standard de delivery pour les futurs incréments Interv360 ou d'autres projets pilotés avec SFIA.

---

## 13. Prochain cycle recommandé

Ouvrir un cycle séparé :

`method/controlled-delivery-standard`

**Objectif :**

- créer un standard SFIA de delivery contrôlé ;
- formaliser la différence entre micro-cycles et réalisation groupée ;
- définir les critères de passage phase 1 → phase 2 ;
- produire un template réutilisable ;
- produire une checklist ;
- produire une famille de prompts.

**Alternative :**

`delivery/interv360-inc-01-final-demo-package`

**Objectif :**

- préparer un package de démonstration final ;
- regrouper script, validation, REX et limites ;
- préparer une éventuelle présentation.

**Recommandation :**

Ouvrir ensuite `method/controlled-delivery-standard` pour capitaliser la méthode dans SFIA.
