# Interv360 — INC-04 List Filtering and Local Summary

**Projet** : Interv360  
**Incrément** : INC-04  
**Cycle** : List Filtering and Local Summary  
**Mode** : SFIA Fast Delivery  
**Statut** : Clôturé — prêt pour PR  
**Branche** : `delivery/interv360-inc-04-list-filtering-local-summary`

---

## 1. Objectif

INC-04 améliore l'exploitation de la liste multi-demandes Interv360.

L'objectif est d'ajouter des filtres locaux simples et une synthèse légère par statut, sans transformer le démonstrateur en dashboard décisionnel.

---

## 2. Décision de périmètre

**Option retenue :**

**Filtres locaux + synthèse légère par statut**

**Justification :**

- INC-03 a introduit plusieurs demandes fictives ;
- la liste devient plus utile si elle peut être filtrée ;
- une synthèse légère améliore la lisibilité ;
- aucun backend/API/DB n'est nécessaire ;
- le cadre local fictif reste maîtrisé ;
- la valeur démonstrateur augmente sans complexité excessive.

---

## 3. Réflexion d'optimisation SFIA

Le processus `delivery → PR prep → push PR → merge summary` serait trop long pour INC-04.

Il n'apporte pas de valeur SFIA suffisante, car :

- le cadre technique est stable ;
- les garde-fous sont connus ;
- le type d'évolution est limité ;
- la PR peut être préparée dans le document principal.

**Décision :**

- conserver un seul document INC-04 ;
- intégrer la préparation PR au même cycle ;
- ne pas créer de documents intermédiaires.

---

## 4. Périmètre autorisé

INC-04 peut introduire :

- un filtre `Toutes les demandes` ;
- un filtre par statut existant ;
- une synthèse locale du nombre de demandes par statut ;
- une indication du filtre actif ;
- une sélection conservée ou réinitialisée proprement si le filtre masque la demande sélectionnée ;
- les tests associés ;
- la documentation applicative ;
- une section PR intégrée au présent document.

---

## 5. Hors périmètre

INC-04 ne doit pas introduire :

- backend ;
- API ;
- DB serveur ;
- SQL ;
- CRM ;
- données réelles ;
- authentification ;
- multi-utilisateur ;
- dashboard décisionnel lourd ;
- graphiques ;
- export ;
- recherche avancée ;
- tri complexe ;
- nouveaux statuts hors nominal ;
- STAT-05 / STAT-07 / STAT-08 ;
- modification Controlled Delivery ;
- publication Notion.

---

## 6. Résultat attendu

Le démonstrateur doit permettre de :

- voir le nombre de demandes par statut ;
- filtrer la liste par statut ;
- revenir à toutes les demandes ;
- conserver une expérience claire de sélection ;
- continuer à exécuter le workflow nominal sur la demande sélectionnée ;
- conserver le reset multi-demandes ;
- conserver le journal filtré par demande.

---

## 7. Validation attendue

- build OK ;
- tests OK ;
- filtres OK ;
- synthèse locale OK ;
- sélection maîtrisée après filtre ;
- workflow nominal inchangé ;
- reset multi-demandes OK ;
- journal par demande OK ;
- aucun backend/API/DB.

---

## 8. Mini-clôture

| Contrôle | Résultat |
|----------|----------|
| Build | OK |
| Tests | OK |
| Nombre de tests | 48 tests passés |
| Fichiers de tests | 14 fichiers |
| Filtres locaux | OK |
| Synthèse par statut | OK |
| Sélection demande | OK |
| Workflow nominal | OK |
| Reset multi-demandes | OK |
| Journal | OK |
| Garde-fous | OK |

---

## 9. Changements réalisés

- Ajout de `requestListFilters.ts` (comptage, filtrage, statuts visibles) ;
- `RequestsList` enrichi : synthèse locale, filtres `Toutes` + statuts existants, filtre actif, état vide ;
- `App.tsx` : état `statusFilter`, réalignement automatique de la sélection, reset du filtre ;
- Tests unitaires filtres + tests liste + smoke test filtre ;
- Section INC-04 dans `app/README.md`.

---

## 10. Préparation PR intégrée

### Titre proposé

`Add Interv360 INC-04 local request filtering`

### Description proposée

```markdown
## Summary

This PR improves the Interv360 multi-request local demo with lightweight local filtering and status summary.

It adds:

- local request filters;
- a lightweight status summary;
- active filter indication;
- clearer request list exploitation;
- selection behavior aligned with active filters;
- updated application documentation.

## Validation

- Build: OK
- Tests: 48 passed
- Test files: 14
- Local filters: OK
- Status summary: OK
- Nominal workflow unchanged
- Reset: OK
- Local journal: OK

## Guardrails

No backend, API, server database, SQL, CRM integration, real data, authentication, multi-user logic, heavy dashboard, chart, export, Notion publication, or Controlled Delivery change was introduced.

The nominal workflow remains unchanged.
```

---

## 11. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK (`origin/delivery/interv360-inc-04-list-filtering-local-summary`) |
| PR créée automatiquement | Non (`gh` CLI indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-inc-04-list-filtering-local-summary?expand=1 |
| Cible | `main` |
| Source | `delivery/interv360-inc-04-list-filtering-local-summary` |
| Merge automatique | Non |

**Création manuelle :** titre `Add Interv360 INC-04 local request filtering`, corps dans `/tmp/inc-04-pr-body.md`.

---

## 12. Décision

INC-04 est **clôturé** : les filtres locaux et la synthèse légère améliorent l'exploitation des demandes sans transformer le démonstrateur en dashboard.

Aucun merge automatique n'est effectué.

---

## 13. Statut merge

| Élément | Valeur |
|--------|--------|
| PR | [#35](https://github.com/mcleland147/sfia-workspace/pull/35) |
| Source | `delivery/interv360-inc-04-list-filtering-local-summary` |
| Cible | `main` |
| Méthode | Merge commit (GitHub PR merge) |
| Commit merge | `1a75a04` — `Merge pull request #35 from mcleland147/delivery/interv360-inc-04-list-filtering-local-summary` |
| Main synchronisée | OK |
| Build post-merge | OK |
| Tests post-merge | OK — 48 passés / 14 fichiers |
| Workflow métier | Inchangé |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

INC-04 est **mergé dans `main`**.

Les filtres locaux et la synthèse légère par statut sont disponibles dans la branche principale.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Fast Delivery.
