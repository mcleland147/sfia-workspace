# Interv360 — INC-03 PR Preparation

**Projet** : Interv360  
**Incrément** : INC-03 — Multi Requests Local Demo  
**Cycle** : PR Preparation  
**Mode** : SFIA accéléré  
**Statut** : Préparation PR  
**Branche** : `delivery/interv360-inc-03-pr-preparation`

---

## 1. Objectif

Ce document prépare une PR courte pour INC-03.

INC-03 étend le démonstrateur Interv360 à plusieurs demandes SAV fictives locales, sans modifier le cadre technique local et sans introduire de données réelles.

---

## 2. Branche source

**Branche source proposée :**

`delivery/interv360-inc-03-pr-preparation`

**Base de travail :**

`delivery/interv360-inc-03-multi-requests-local-demo`

**Commit principal :**

`5f6e2cc` — `feat: add INC-03 multi-request local demo`

**Écart avec `main` :**

1 commit au-dessus de `main` (`1b6dc89`).

---

## 3. Branche cible pressentie

**Cible pressentie :**

`main`

À confirmer avant push / PR.

---

## 4. Résumé des changements

INC-03 apporte :

- trois demandes SAV fictives locales ;
- une sélection de demande depuis la liste ;
- un détail synchronisé avec la demande sélectionnée ;
- un workflow appliqué uniquement à la demande sélectionnée ;
- un journal filtré par `requestId` ;
- un reset multi-demandes ;
- une mise à jour de l'overview démo ;
- une mise à jour documentaire applicative.

---

## 5. Demandes fictives

| ID | Statut initial | Rôle |
|----|----------------|------|
| `SAV-DEMO-001` | `STAT-01` | Demande nominale principale |
| `SAV-DEMO-002` | `STAT-02` | Demande déjà qualifiée / en planification |
| `SAV-DEMO-003` | `STAT-06` | Demande clôturée |

---

## 6. Fichiers principaux

| Fichier | Rôle |
|---------|------|
| `projects/interv360/app/src/seed/demoRequests.ts` | Seed multi-demandes |
| `projects/interv360/app/src/data/requestsRepository.ts` | Transitions applicables à toute demande seed |
| `projects/interv360/app/src/app/App.tsx` | État de sélection `selectedRequestId` |
| `projects/interv360/app/src/ui/requests/RequestsList.tsx` | Sélection cliquable |
| `projects/interv360/app/src/ui/demo/DemoOverview.tsx` | Libellé overview INC-03 |
| `projects/interv360/app/src/tests/App.smoke.test.tsx` | Test smoke multi-demandes |
| `projects/interv360/app/README.md` | Section INC-03 |
| `projects/interv360/07-delivery/inc-03-multi-requests-local-demo.md` | Décision, réalisation, mini-clôture |

---

## 7. Validation

| Contrôle | Résultat |
|----------|----------|
| Build | OK |
| Tests | OK |
| Nombre de tests | 42 tests passés |
| Fichiers de tests | 13 fichiers |
| Multi-demandes | OK |
| Sélection demande | OK |
| Workflow nominal | OK |
| Reset multi-demandes | OK |
| Journal filtré par demande | OK |
| Garde-fous | OK |

---

## 8. Garde-fous

INC-03 n'introduit pas :

- backend ;
- API ;
- DB serveur ;
- SQL ;
- CRM ;
- données réelles ;
- email ;
- téléphone ;
- authentification ;
- multi-utilisateur ;
- routing React ;
- nouvelle dépendance ;
- STAT-05 / STAT-07 / STAT-08 ;
- modification Controlled Delivery ;
- publication Notion.

---

## 9. Proposition de titre PR

**Titre proposé :**

`Add Interv360 INC-03 multi-request local demo`

**Alternative :**

`Add multi-request local demo to Interv360`

---

## 10. Proposition de description PR

```markdown
## Summary

This PR extends the Interv360 local demo from a single fictitious SAV request to multiple fictitious local requests.

It adds:

- three local fictitious requests;
- request selection from the list;
- synchronized request detail;
- workflow actions applied only to the selected request;
- workflow journal filtered by request ID;
- multi-request demo reset;
- updated demo overview;
- updated application documentation.

## Validation

- Build: OK
- Tests: 42 passed
- Test files: 13
- Multi-request selection: OK
- Nominal workflow: OK
- Reset: OK
- Local journal filtered by request: OK

## Guardrails

No backend, API, server database, SQL, CRM integration, real data, email, phone number, authentication, multi-user logic, routing, new dependency, Notion publication, or Controlled Delivery change was introduced.

The nominal workflow remains unchanged.
```

---

## 11. Décision

**Décision proposée :**

- [x] PR INC-03 prête à préparer
- [ ] PR INC-03 à compléter
- [ ] PR INC-03 à reprendre

### Décision

INC-03 peut être poussé et présenté en PR après confirmation explicite.

---

## 12. Prochaine étape recommandée

**Cycle possible uniquement sur demande explicite :**

`delivery/interv360-inc-03-push-and-pr`

**Objectif :**

- relancer les vérifications ;
- pousser la branche ;
- créer la PR vers `main` ;
- ne rien merger automatiquement.

**Alternative :**

`delivery/interv360-inc-04-scope-and-delivery`

**Objectif :**

- ouvrir directement le prochain incrément en mode SFIA accéléré.
