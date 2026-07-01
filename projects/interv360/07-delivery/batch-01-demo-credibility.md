# Interv360 — Batch 01 Demo Credibility

**Projet** : Interv360  
**Lot** : Batch 01 — Demo Credibility  
**Mode** : SFIA Batch Delivery  
**Statut** : Réalisation groupée contrôlée  
**Branche** : `delivery/interv360-batch-01-demo-credibility`

---

## 1. Objectif

Ce batch renforce la crédibilité du démonstrateur local Interv360.

Il regroupe plusieurs petits incréments cohérents afin d'éviter une succession de cycles trop courts et peu rentables méthodologiquement.

Le lot reste strictement local, fictif et sans intégration externe.

---

## 2. Réflexion d'optimisation SFIA

Le processus INC par INC devient trop long pour des enrichissements locaux de faible risque.

Continuer avec :

- une branche par INC ;
- un document par INC ;
- une PR par INC ;
- un post-merge par INC ;

n'apporte plus assez de valeur SFIA sur ce type de périmètre.

Décision :

- regrouper plusieurs incréments cohérents dans un seul lot ;
- conserver les garde-fous essentiels ;
- produire une seule PR de lot ;
- tracer le lot dans un seul document.

Ce batch sert à valider le passage de **Fast Delivery par incrément** à **Batch Delivery par lot cohérent**.

---

## 3. Contenu du batch

| Incrément | Objet | Objectif | Risque |
|----------|-------|----------|--------|
| INC-05 | Priorité / criticité fictive | Rendre les demandes plus lisibles opérationnellement | Faible |
| INC-06 | Recherche locale simple | Retrouver rapidement une demande fictive | Faible |
| INC-07 | Fiche détail enrichie | Donner plus de contexte métier fictif | Faible |
| INC-08 | Robustesse UX / états vides | Améliorer les cas sans résultat et les comportements limites | Faible |

---

## 4. Périmètre autorisé

Le batch peut introduire :

- un attribut de priorité fictif ;
- un attribut de criticité fictif simple ;
- des badges visuels de priorité / criticité ;
- une recherche locale simple ;
- un état vide lorsque la recherche ou les filtres ne retournent aucune demande ;
- une fiche détail enrichie avec des champs fictifs ;
- des ajustements UX légers ;
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
- tri complexe ;
- recherche avancée ;
- statuts hors nominal ;
- STAT-05 / STAT-07 / STAT-08 ;
- modification du workflow nominal ;
- modification Controlled Delivery ;
- publication Notion.

---

## 6. Résultat attendu

Le démonstrateur doit permettre de :

- visualiser une priorité fictive par demande ;
- visualiser une criticité fictive simple ;
- rechercher localement une demande ;
- filtrer et rechercher de manière combinée si simple ;
- consulter une fiche détail plus riche ;
- comprendre les cas sans résultat ;
- conserver le workflow nominal ;
- conserver le reset multi-demandes ;
- conserver le journal filtré par demande.

---

## 7. Validation attendue

- build OK ;
- tests OK ;
- priorité affichée ;
- criticité affichée ;
- recherche locale OK ;
- état vide OK ;
- fiche détail enrichie OK ;
- filtres existants toujours OK ;
- workflow nominal inchangé ;
- reset OK ;
- journal OK ;
- aucun backend/API/DB.

---

## 8. Mini-clôture

| Contrôle | Résultat |
|----------|----------|
| Build | OK |
| Tests | OK |
| Nombre de tests | 55 |
| Fichiers de tests | 14 |
| Priorité / criticité | OK |
| Recherche locale | OK |
| État vide | OK |
| Fiche détail enrichie | OK |
| Filtres existants | OK |
| Workflow nominal | OK |
| Reset multi-demandes | OK |
| Journal | OK |
| Garde-fous | OK |

---

## 9. Changements réalisés

- Types `RequestPriority` et `RequestCriticality` ajoutés au domaine ; champs enrichis sur `DemoRequest` (catégorie, canal, impact, centre démo).
- Seed `demoRequests` enrichi avec priorités, criticités et champs de détail fictifs pour les trois demandes démo.
- Composant `RequestBadges` et helpers `requestIndicators` pour libellés français et recherche locale.
- Recherche locale combinée aux filtres statut via `searchLocalRequests` et `filterVisibleRequests`.
- Liste : champ recherche, badges priorité/criticité, message d'état vide unifié, reset recherche.
- Fiche détail : badges, priorité, criticité, catégorie, canal, impact, centre démo.
- `App` : état `searchQuery`, réalignement sélection, reset restaure filtre Toutes et recherche vide.
- Tests étendus (filtres, liste, détail, smoke App) ; README applicatif section Batch 01.

---

## 10. Préparation PR intégrée

### Titre proposé

`Improve Interv360 demo credibility with local request indicators`

### Description proposée

```markdown
## Summary

This PR improves the credibility of the Interv360 local demo by grouping several low-risk demo enhancements into one coherent batch.

It adds:

- fictitious request priority indicators;
- lightweight criticality indicators;
- local request search;
- richer fictitious request details;
- empty states for local filters/search;
- updated application documentation.

## Validation

- Build: OK
- Tests: 55 passed
- Test files: 14
- Priority / criticality indicators: OK
- Local search: OK
- Empty states: OK
- Existing filters: OK
- Nominal workflow unchanged
- Reset: OK
- Local journal: OK

## Guardrails

No backend, API, server database, SQL, CRM integration, real data, authentication, multi-user logic, heavy dashboard, chart, export, routing, new dependency, Notion publication, or Controlled Delivery change was introduced.

The nominal workflow remains unchanged.
```

---

## 11. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-batch-01-demo-credibility?expand=1 |
| Cible | main |
| Source | delivery/interv360-batch-01-demo-credibility |
| Merge automatique | Non |

---

## 12. Décision

Le batch est clôturé si les enrichissements renforcent la crédibilité du démonstrateur sans modifier le workflow nominal ni introduire d'intégration externe.

Aucun merge automatique n'est effectué.

---

## 5. Implémentation attendue

Implémenter uniquement des améliorations locales, simples et cohérentes.

### INC-05 — Priorité / criticité fictive

Ajouter aux demandes fictives des champs simples, par exemple :

- `priority`: `low | medium | high`
- `criticality`: `standard | sensitive | urgent`

Les libellés peuvent être adaptés en français côté UI :

- Basse / Moyenne / Haute ;
- Standard / Sensible / Urgente.

Afficher ces informations :

- dans la liste ;
- dans le détail ;
- éventuellement dans l'overview si utile.

Ne pas utiliser de vraies données.

---

### INC-06 — Recherche locale simple

Ajouter une recherche locale simple sur :

- ID demande ;
- titre / objet fictif ;
- statut ;
- priorité ;
- criticité.

Comportement attendu :

- champ texte simple ;
- recherche locale en mémoire ;
- compatible avec filtre statut existant si simple ;
- bouton ou action de reset de recherche si utile.

Ne pas ajouter de recherche avancée.

Ne pas ajouter de dépendance.

---

### INC-07 — Fiche détail enrichie

Enrichir la fiche détail avec quelques champs fictifs utiles :

- catégorie fictive ;
- canal fictif ;
- impact fictif ;
- date fictive ;
- site fictif générique non réel, par exemple `Centre démo Nord`, `Centre démo Sud`.

Éviter :

- noms de vraies personnes ;
- adresses réelles ;
- emails ;
- numéros de téléphone ;
- clients réels.

---

### INC-08 — États vides / robustesse UX

Ajouter un état vide simple lorsque :

- aucun résultat ne correspond au filtre ;
- aucun résultat ne correspond à la recherche ;
- la combinaison filtre + recherche ne retourne rien.

Le message doit rester clair :

```text
Aucune demande fictive ne correspond aux critères locaux.
```

Le reset doit restaurer :

- demandes seed ;
- filtre Toutes ;
- recherche vide ;
- sélection SAV-DEMO-001 ;
- journal vide.

---

## 6. Tests attendus

Conserver les tests existants.

Ajouter ou adapter les tests pour vérifier :

- priorité affichée ;
- criticité affichée ;
- recherche locale par ID ;
- recherche locale par texte ;
- combinaison filtre + recherche ;
- état vide ;
- reset de recherche ;
- fiche détail enrichie ;
- workflow nominal inchangé ;
- reset multi-demandes inchangé ;
- journal filtré inchangé ;
- absence de statuts interdits.

---

## 7. Documentation applicative

Mettre à jour :

`projects/interv360/app/README.md`

Ajouter une section Batch 01 :

- priorités fictives ;
- criticité fictive ;
- recherche locale ;
- détails enrichis ;
- états vides ;
- pas de backend/API/DB ;
- pas de données réelles ;
- workflow nominal inchangé.

---

## 13. Statut merge

| Élément | Valeur |
|--------|--------|
| PR | #36 — https://github.com/mcleland147/sfia-workspace/pull/36 |
| Source | `delivery/interv360-batch-01-demo-credibility` |
| Cible | `main` |
| Méthode | Merge commit (GitHub PR merge) |
| Commit merge | `74f4476` |
| Main synchronisée | OK |
| Build post-merge | OK |
| Tests post-merge | OK — 55 passés / 14 fichiers |
| Workflow métier | Inchangé |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Batch 01 est mergé dans `main`.

Le démonstrateur Interv360 dispose désormais, dans la branche principale, des enrichissements suivants :

- priorités fictives ;
- criticité fictive ;
- recherche locale ;
- fiche détail enrichie ;
- états vides ;
- filtres existants conservés ;
- workflow nominal inchangé ;
- reset et journal conservés.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Batch Delivery.
