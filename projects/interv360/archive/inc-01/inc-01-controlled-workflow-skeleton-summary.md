# Interv360 — INC-01 Controlled workflow skeleton summary

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Controlled workflow skeleton  
**Phase** : Phase 2 — Réalisation groupée contrôlée  
**Statut** : Clôturé  
**Branche** : `delivery/interv360-inc-01-controlled-workflow-skeleton`

---

## 1. Objectif du cycle

Ce cycle a implémenté le **workflow local contrôlé** INC-01.

Il constitue le premier lot de réalisation groupée de la phase 2.

L'objectif était d'implémenter le flux nominal local sur données fictives, sans backend, sans API, sans base de données et sans données réelles.

---

## 2. Décision de référence

Le cycle s'inscrit dans la décision de passage en phase 2 :

[`2026-06-30-inc-01-phase-2-delivery-decision.md`](2026-06-30-inc-01-phase-2-delivery-decision.md)

La phase 2 autorise une réalisation groupée contrôlée lorsque les règles sont suffisamment stabilisées.

**Commit applicatif :** `7e675bc` — `feat: add INC-01 controlled workflow skeleton`

---

## 3. Fichiers créés

| Fichier | Rôle |
|---------|------|
| `projects/interv360/app/src/ui/workflow/WorkflowActionControl.tsx` | Contrôle d'action workflow |
| `projects/interv360/app/src/ui/workflow/WorkflowActionControl.css` | Styles du contrôle d'action |
| `projects/interv360/app/src/ui/workflow/WorkflowActionControl.test.tsx` | Tests du contrôle d'action |
| `projects/interv360/app/src/ui/workflow/WorkflowJournalReadonly.tsx` | Journal workflow readonly |
| `projects/interv360/app/src/ui/workflow/WorkflowJournalReadonly.css` | Styles du journal |
| `projects/interv360/app/src/ui/workflow/WorkflowJournalReadonly.test.tsx` | Tests du journal |
| `projects/interv360/app/src/data/requestsRepository.workflow.test.ts` | Tests repository du workflow |

---

## 4. Fichiers modifiés

| Fichier | Rôle |
|---------|------|
| `projects/interv360/app/src/domain/requestStatus.ts` | Types `DemoWorkflowEventType` et `DemoWorkflowEvent` |
| `projects/interv360/app/src/data/localStorageKeys.ts` | Clé `STORAGE_KEY_JOURNAL` |
| `projects/interv360/app/src/data/requestsRepository.ts` | Transitions contrôlées et journal local |
| `projects/interv360/app/src/app/App.tsx` | Intégration workflow et journal |
| `projects/interv360/app/src/tests/App.smoke.test.tsx` | Parcours nominal + reset |
| `projects/interv360/app/src/data/requestsRepository.test.ts` | Vérification reset journal |
| `projects/interv360/app/README.md` | Documentation phase 2 et workflow |

---

## 5. Workflow local contrôlé implémenté

Le workflow implémente uniquement le flux nominal INC-01 :

| Statut source | Action UI | Statut cible | Événement journal |
|--------------|-----------|--------------|-------------------|
| `STAT-01` | `Qualifier la demande` | `STAT-02` | `qualification.confirmed` |
| `STAT-02` | `Planifier l'intervention` | `STAT-03` | `planning.confirmed` |
| `STAT-03` | `Marquer l'intervention réalisée` | `STAT-04` | `intervention.completed` |
| `STAT-04` | `Clôturer avec compte rendu fictif` | `STAT-06` | `report.closed` |
| `STAT-06` | Aucun bouton | Aucun changement | Aucun événement |

**Règles appliquées :**

- une seule action visible selon le statut courant ;
- aucune action disponible en `STAT-06` ;
- aucune transition multiple en un clic ;
- aucune transition hors flux nominal ;
- aucune transition vers `STAT-05`, `STAT-07` ou `STAT-08`.

---

## 6. Journal local fictif

Un journal local fictif a été ajouté.

| Sujet | Décision |
|-------|----------|
| Stockage | `localStorage` |
| Clé | `interv360-inc01:journal` |
| Accès | `src/data/` uniquement |
| Affichage | `WorkflowJournalReadonly` |
| Données | Fictives uniquement |
| Reset | Journal vidé |

Le journal trace les événements suivants :

- `qualification.confirmed` ;
- `planning.confirmed` ;
- `intervention.completed` ;
- `report.closed`.

Le journal est local, fictif et réinitialisable.

---

## 7. Comportement reset

Le reset conserve son rôle de mécanisme de démonstration.

**Après reset :**

| Élément | État restauré |
|---------|---------------|
| Demande | `SAV-DEMO-001` |
| Statut | `STAT-01` |
| Journal | Vide |
| Données | Fictives uniquement |

Le reset purge les clés préfixées puis recharge le seed initial.

---

## 8. Couche data

Les écritures métier locales sont centralisées dans `src/data/requestsRepository.ts`.

La couche UI ne manipule pas directement `localStorage`.

| Sujet | État |
|-------|------|
| Transitions | Centralisées repository |
| Journal | Centralisé repository |
| Accès stockage UI | Non |
| Backend | Non |
| API | Non |
| DB / SQL | Non |
| Données réelles | Non |

---

## 9. Vérifications réalisées

**Commandes exécutées :**

```bash
cd projects/interv360/app
npm run build
npm run test -- --run
```

**Résultats :**

| Contrôle | Résultat |
|----------|----------|
| Build | OK |
| Tests | OK |
| Nombre de tests | 38 tests passés |
| Fichiers de tests | 12 fichiers |

---

## 10. Tests renforcés

Le cycle ajoute ou renforce les tests sur :

- transitions repository ;
- transitions invalides ;
- journal local fictif ;
- reset du journal ;
- affichage de l'action selon statut ;
- disparition des actions en STAT-06 ;
- affichage du journal readonly ;
- parcours nominal complet ;
- non-régression des vues readonly.

---

## 11. Garde-fous respectés

Le cycle n'a pas créé :

- backend ;
- API ;
- base de données ;
- SQL / DDL / migration ;
- CRM réel ;
- données réelles ;
- dashboard ;
- multi-utilisateur ;
- authentification avancée ;
- publication Notion ;
- push ;
- PR.

Le cycle n'a pas introduit :

- STAT-05 ;
- STAT-07 ;
- STAT-08 ;
- appel réseau `fetch` ou `axios` ;
- coordonnées personnelles ;
- workflow hors nominal INC-01.

---

## 12. Apport phase 2

Ce cycle valide le changement de régime décidé en phase 2.

La phase 1 avait sécurisé le cadre par micro-cycles.

La phase 2 démontre qu'un lot fonctionnel plus large peut être livré rapidement, à condition de conserver :

- des règles explicites ;
- un périmètre limité ;
- des garde-fous techniques ;
- des tests renforcés ;
- une documentation de clôture.

---

## 13. Limites assumées

Le workflow reste volontairement limité :

- données fictives uniquement ;
- une seule demande `SAV-DEMO-001` ;
- stockage local uniquement ;
- aucune logique multi-utilisateur ;
- aucune authentification ;
- aucune intégration externe ;
- aucun CRM ;
- aucun dashboard ;
- aucun cas d'erreur métier avancé ;
- aucun statut hors nominal.

---

## 14. Décision de clôture

**Décision proposée :**

- [x] Cycle controlled workflow skeleton clôturé
- [ ] Cycle à compléter
- [ ] Cycle à reprendre

### Décision

Le cycle `delivery/interv360-inc-01-controlled-workflow-skeleton` est **clôturé avec succès**.

Le workflow local contrôlé INC-01 est implémenté sur données fictives, avec journal local, reset compatible et tests renforcés.

Cette clôture **n'autorise pas encore** :

- l'ajout d'un backend ;
- l'ajout d'une API ;
- l'ajout d'une base de données ;
- l'utilisation de données réelles ;
- l'ouverture de statuts hors nominal ;
- une publication Notion ;
- un push ou une PR automatique.

---

## 15. Prochain cycle recommandé

Ouvrir un cycle séparé :

`delivery/interv360-inc-01-controlled-workflow-validation`

**Objectif :**

- valider fonctionnellement le workflow local complet ;
- vérifier le parcours de bout en bout ;
- identifier les irritants UX ;
- confirmer que le workflow peut être présenté comme démonstrateur local ;
- ne pas ajouter de nouvelle fonctionnalité majeure.

**Alternative :**

`delivery/interv360-inc-01-demo-script`

**Objectif :**

- produire un script de démonstration ;
- expliquer comment présenter la phase 2 ;
- expliciter les limites ;
- préparer la capitalisation SFIA.

**Recommandation :**

Ouvrir ensuite `delivery/interv360-inc-01-controlled-workflow-validation` pour valider le lot applicatif avant toute capitalisation.
