# Interv360 — Batch 04 Demo Presentation Package

**Projet** : Interv360  
**Lot** : Batch 04 — Demo Presentation Package  
**Mode** : SFIA Batch Delivery  
**Statut** : Réalisation groupée contrôlée  
**Branche** : `delivery/interv360-batch-04-demo-presentation-package`

---

## 1. Objectif

Ce batch produit un package de présentation externe pour le démonstrateur Interv360.

L'objectif est de rendre le résultat présentable à un interlocuteur non impliqué dans les cycles précédents.

Le package doit expliquer :

- pourquoi le démonstrateur existe ;
- ce qu'il montre ;
- comment le présenter ;
- ce qui est déjà couvert ;
- ce qui reste volontairement fictif ou hors périmètre ;
- quelle trajectoire pourrait être envisagée ensuite.

---

## 2. Réflexion d'optimisation SFIA

Après Batch 03, le démonstrateur est prêt à être présenté.

Continuer immédiatement à ajouter des fonctionnalités n'est pas forcément le meilleur résultat utile.

Le prochain gain est de transformer le démonstrateur en support exploitable pour une présentation.

Décision :

- produire un package de présentation ;
- ne pas créer de support lourd type PowerPoint pour le moment ;
- rester en Markdown versionné ;
- garder un seul document de lot ;
- intégrer validation et préparation PR au même document.

---

## 3. Contenu du batch

| Livrable | Objectif | Risque |
|----------|----------|--------|
| Presentation package | Donner une vision complète et présentable du démonstrateur | Faible |
| Demo script | Guider le déroulé de démonstration | Faible |
| One-page summary | Fournir une synthèse courte et partageable | Faible |

---

## 4. Périmètre autorisé

Le batch peut produire :

- un package de présentation Markdown ;
- un script de démonstration ;
- une synthèse one-page ;
- une mise à jour README si utile ;
- une préparation PR intégrée.

---

## 5. Hors périmètre

Le batch ne doit pas introduire :

- modification applicative non nécessaire ;
- backend ;
- API ;
- DB serveur ;
- SQL ;
- CRM ;
- données réelles ;
- authentification ;
- multi-utilisateur ;
- publication Notion ;
- export PowerPoint ;
- support PDF ;
- modification Controlled Delivery ;
- modification `sfia-notion-sync`.

---

## 6. Résultat attendu

Le package doit permettre de présenter Interv360 en expliquant clairement :

- l'objectif ;
- le périmètre démontré ;
- les capacités visibles ;
- le scénario de démonstration ;
- les limites assumées ;
- la valeur SFIA ;
- les suites possibles.

---

## 7. Validation attendue

- livrables créés ;
- cohérence avec Batch 01, Batch 02 et Batch 03 ;
- absence de données réelles ;
- absence de publication externe ;
- aucune modification applicative non justifiée ;
- package lisible par un interlocuteur externe.

---

## 8. Mini-clôture

| Contrôle | Résultat |
|----------|----------|
| Presentation package | OK |
| Demo script | OK |
| One-page summary | OK |
| Cohérence avec app README | OK |
| Cohérence avec Batch 01-03 | OK |
| Données réelles absentes | OK |
| Modification applicative | Non |
| Publication externe | Non |
| Garde-fous | OK |

---

## 9. Changements réalisés

- Dossier `projects/interv360/08-presentation/` créé.
- `interv360-demo-presentation-package.md` — vision complète, capacités, limites, valeur SFIA, trajectoire.
- `interv360-demo-script.md` — script pas à pas avec messages oraux.
- `interv360-demo-one-page-summary.md` — synthèse courte partageable.
- `app/README.md` — mention courte Batch 04.
- Aucune modification du code applicatif.

---

## 10. Préparation PR intégrée

### Titre proposé

`Add Interv360 demo presentation package`

### Description proposée

```markdown
## Summary

This PR adds a presentation package for the Interv360 local demo.

It includes:

- a complete demo presentation package;
- a reusable demo script;
- a one-page summary;
- a clear explanation of demonstrated capabilities;
- explicit limitations and out-of-scope items;
- a suggested next-step trajectory.

## Validation

- Presentation package: OK
- Demo script: OK
- One-page summary: OK
- No application code change
- No real data
- No external publication

## Guardrails

No backend, API, database, SQL, CRM integration, real data, authentication, multi-user logic, Notion publication, Controlled Delivery change, or sfia-notion-sync update was introduced.
```

---

## 11. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-batch-04-demo-presentation-package?expand=1 |
| Cible | main |
| Source | delivery/interv360-batch-04-demo-presentation-package |
| Merge automatique | Non |

---

## 12. Décision

Le batch est clôturé si le package permet de présenter Interv360 sans dépendre de la connaissance des cycles internes.

Aucun merge automatique n'est effectué.

---

## 5. Créer les livrables de présentation

Dossier : `projects/interv360/08-presentation/`

Fichiers :

- `interv360-demo-presentation-package.md`
- `interv360-demo-script.md`
- `interv360-demo-one-page-summary.md`

---

## 6. Contenu attendu — Presentation package

Document structuré avec objectif, message clé, capacités, déroulé, limites, valeur SFIA et trajectoire — voir livrable créé.

---

## 7. Contenu attendu — Demo script

Script exploitable avec préparation, introduction, déroulé en 8 étapes, points d'attention et conclusion — voir livrable créé.

---

## 8. Contenu attendu — One-page summary

Synthèse courte objectif / message / capacités / limites / valeur / trajectoire — voir livrable créé.

---

## 7. Documentation applicative

Mention courte Batch 04 ajoutée dans `projects/interv360/app/README.md`.
