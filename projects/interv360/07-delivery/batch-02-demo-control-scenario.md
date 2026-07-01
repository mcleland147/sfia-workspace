# Interv360 — Batch 02 Demo Control & Scenario

**Projet** : Interv360  
**Lot** : Batch 02 — Demo Control & Scenario  
**Mode** : SFIA Batch Delivery  
**Statut** : Réalisation groupée contrôlée  
**Branche** : `delivery/interv360-batch-02-demo-control-scenario`

---

## 1. Objectif

Ce batch améliore le pilotage de la démonstration Interv360.

L'objectif est de rendre la démo plus facile à présenter, rejouer et expliquer, sans modifier le workflow métier nominal.

Le lot reste local, fictif et sans intégration externe.

---

## 2. Réflexion d'optimisation SFIA

Le sujet est cohérent, faible en risque et centré sur l'expérience de démonstration.

Un traitement incrément par incrément serait trop long et produirait trop de documents intermédiaires pour une valeur SFIA limitée.

Décision :

- utiliser Batch Delivery ;
- conserver un seul document de lot ;
- intégrer validation et préparation PR au même document ;
- ne pas créer de summary séparé.

---

## 3. Contenu du batch

| Incrément logique | Objet | Objectif | Risque |
|------------------|-------|----------|--------|
| DEMO-01 | Scénario guidé | Donner un fil conducteur clair à la démo | Faible |
| DEMO-02 | Progression visuelle | Montrer où l'on se situe dans le scénario | Faible |
| DEMO-03 | Reset de scénario | Revenir facilement à l'état initial de démo | Faible |
| DEMO-04 | Aide contextuelle | Expliquer rapidement les zones clés | Faible |

---

## 4. Périmètre autorisé

Le batch peut introduire :

- une zone de scénario guidé ;
- des étapes de démonstration locales ;
- un indicateur de progression ;
- une action simple pour revenir au début du scénario ;
- une aide contextuelle courte ;
- une meilleure mise en évidence de la demande active ;
- des tests associés ;
- une mise à jour du README ;
- une préparation PR intégrée.

---

## 5. Hors périmètre

Le batch ne doit pas introduire :

- backend ;
- API ;
- DB serveur ;
- SQL ;
- CRM ;
- données réelles ;
- authentification ;
- multi-utilisateur ;
- dashboard décisionnel lourd ;
- graphique ;
- export ;
- routing React ;
- nouvelle dépendance ;
- workflow alternatif ;
- nouveaux statuts ;
- STAT-05 / STAT-07 / STAT-08 ;
- modification du workflow nominal ;
- modification Controlled Delivery ;
- publication Notion.

---

## 6. Résultat attendu

Le démonstrateur doit permettre de :

- comprendre rapidement le scénario de démonstration ;
- visualiser les étapes principales ;
- suivre l'état courant du scénario ;
- revenir facilement à l'état initial de démo ;
- conserver les filtres, recherche, sélection, workflow, reset et journal existants ;
- améliorer la présentation sans complexifier l'architecture.

---

## 7. Validation attendue

- build OK ;
- tests OK ;
- scénario guidé visible ;
- progression visible ;
- reset de scénario OK ;
- aide contextuelle visible ;
- filtres/recherche existants OK ;
- workflow nominal inchangé ;
- reset global OK ;
- journal OK ;
- aucun backend/API/DB.

---

## 8. Mini-clôture

| Contrôle | Résultat |
|----------|----------|
| Build | OK |
| Tests | OK |
| Nombre de tests | 60 |
| Fichiers de tests | 15 |
| Scénario guidé | OK |
| Progression visuelle | OK |
| Reset scénario | OK |
| Aide contextuelle | OK |
| Filtres/recherche | OK |
| Workflow nominal | OK |
| Reset global | OK |
| Journal | OK |
| Garde-fous | OK |

---

## 9. Changements réalisés

- `demoScenarioSteps.ts` — six étapes locales avec résumé et aide contextuelle.
- `DemoScenarioGuide.tsx` — guide visuel, progression, navigation précédent/suivant, reset scénario.
- `App.tsx` — état local `scenarioStepIndex`, intégration du guide, reset global restaure l'étape 1.
- `DemoOverview.tsx` — panneau « Scénario courant » et libellé Batch 02.
- Navigation interne — lien ancre `#section-scenario`.
- Tests — `DemoScenarioGuide.test.tsx`, extensions smoke App et DemoOverview.
- `README.md` — section Batch 02.

---

## 10. Préparation PR intégrée

### Titre proposé

`Improve Interv360 demo control and guided scenario`

### Description proposée

```markdown
## Summary

This PR improves the Interv360 local demo control experience with a guided scenario layer.

It adds:

- a guided demo scenario;
- visual scenario progression;
- contextual demo guidance;
- scenario reset support;
- clearer demo control experience;
- updated application documentation.

## Validation

- Build: OK
- Tests: 60 passed
- Test files: 15
- Guided scenario: OK
- Scenario progression: OK
- Scenario reset: OK
- Existing filters/search: OK
- Nominal workflow unchanged
- Reset: OK
- Local journal: OK

## Guardrails

No backend, API, server database, SQL, CRM integration, real data, authentication, multi-user logic, dashboard, chart, export, routing, new dependency, Notion publication, or Controlled Delivery change was introduced.

The nominal workflow remains unchanged.
```

---

## 11. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-batch-02-demo-control-scenario?expand=1 |
| Cible | main |
| Source | delivery/interv360-batch-02-demo-control-scenario |
| Merge automatique | Non |

---

## 12. Décision

Le batch est clôturé si le scénario guidé améliore la conduite de démonstration sans modifier le workflow nominal ni introduire d'intégration externe.

Aucun merge automatique n'est effectué.

---

## 5. Implémentation attendue

Implémenter uniquement des améliorations locales, simples et cohérentes.

### DEMO-01 — Scénario guidé

Composant `DemoScenarioGuide.tsx` avec six étapes :

1. Sélectionner une demande fictive.
2. Observer le statut et les indicateurs.
3. Filtrer ou rechercher une demande.
4. Exécuter une transition workflow.
5. Vérifier le journal local.
6. Réinitialiser la démo.

---

### DEMO-02 — Progression visuelle

Progression locale React :

- étape courante ;
- total d'étapes ;
- boutons `Étape précédente` / `Étape suivante` ;
- liste des étapes avec mise en évidence.

---

### DEMO-03 — Reset scénario

Action `Revenir au début du scénario` :

- retour à l'étape 1 ;
- sans modification des données métier ;
- le reset global restaure aussi l'étape 1.

---

### DEMO-04 — Aide contextuelle

Bloc « Aide contextuelle » par étape, court et orienté présentation.

---

## 6. Tests attendus

- guide de scénario affiché ;
- première étape visible ;
- navigation précédent/suivant ;
- reset scénario à l'étape 1 ;
- reset global restaure le scénario ;
- filtres/recherche et workflow inchangés.

---

## 7. Documentation applicative

Section Batch 02 ajoutée dans `projects/interv360/app/README.md`.

---

## 13. Statut merge

| Élément | Valeur |
|--------|--------|
| PR | #38 — https://github.com/mcleland147/sfia-workspace/pull/38 |
| Source | `delivery/interv360-batch-02-demo-control-scenario` |
| Cible | `main` |
| Méthode | Merge commit (GitHub PR merge) |
| Commit merge | `27e4b28` |
| Main synchronisée | OK |
| Build post-merge | OK |
| Tests post-merge | OK — 60 passés / 15 fichiers |
| Workflow métier | Inchangé |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Batch 02 est mergé dans `main`.

Le démonstrateur Interv360 dispose désormais, dans la branche principale, des enrichissements suivants :

- scénario guidé de démonstration ;
- progression visuelle ;
- aide contextuelle ;
- reset scénario ;
- meilleure lisibilité de l'état courant de démonstration ;
- conservation des filtres, recherche, sélection, workflow nominal, reset global et journal.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Batch Delivery.
