# Interv360 — INC-01 Requests list skeleton summary

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Requests list skeleton  
**Statut** : Clôturé  
**Branche** : `delivery/interv360-inc-01-list-skeleton`

---

## 1. Objectif du cycle

Ce cycle a créé le **premier écran squelette INC-01** : la liste des demandes SAV.

Il s'inscrit dans la trajectoire INC-01, sans implémenter le flux complet STAT-01 → STAT-06.

---

## 2. Décisions de référence

Le cycle respecte les décisions précédentes :

- mono-app React + TypeScript + Vite ;
- séparation logique UI / domain / data / seed ;
- persistance locale via `localStorage` ;
- préfixe de stockage `interv360-inc01:` ;
- accès au stockage uniquement via `src/data/` ;
- données fictives uniquement ;
- pas de backend ;
- pas d'API ;
- pas de base serveur ;
- pas de CRM.

**Sources :** [`2026-06-30-inc-01-local-persistence-decision.md`](2026-06-30-inc-01-local-persistence-decision.md), [`inc-01-app-foundation-summary.md`](inc-01-app-foundation-summary.md)

**Commit applicatif :** `d1dbee9` — `feat: add INC-01 requests list skeleton`

---

## 3. Fichiers créés ou modifiés

| Fichier | Rôle |
|---------|------|
| `projects/interv360/app/src/domain/requestStatus.ts` | Types `RequestStatus` et `DemoRequest` |
| `projects/interv360/app/src/seed/demoRequests.ts` | Seed fictif `SAV-DEMO-001` |
| `projects/interv360/app/src/data/localStorageKeys.ts` | Préfixe `interv360-inc01:` |
| `projects/interv360/app/src/data/requestsRepository.ts` | Lecture / initialisation `localStorage` |
| `projects/interv360/app/src/ui/requests/RequestsList.tsx` | Écran liste squelette |
| `projects/interv360/app/src/ui/requests/RequestsList.css` | Styles de l'écran |
| `projects/interv360/app/src/ui/requests/RequestsList.test.tsx` | Tests de l'écran |
| `projects/interv360/app/src/app/App.tsx` | Intégration de `RequestsList` |
| `projects/interv360/app/src/tests/App.smoke.test.tsx` | Smoke test mis à jour |
| `projects/interv360/app/README.md` | Statut applicatif mis à jour |

---

## 4. Données fictives affichées

Le squelette affiche uniquement des données de démonstration :

| Élément | Valeur |
|---------|--------|
| Demande | `SAV-DEMO-001` |
| Titre | `Machine client en panne intermittente` |
| Client | `Client Démo Industrie` |
| Site | `Lyon Démo` |
| Statut | `STAT-01` |
| Technicien | `Technicien Démo 01` |

Un bandeau précise que les données sont fictives.

---

## 5. Couche data

La couche data respecte la décision de persistance locale :

| Sujet | Décision |
|-------|----------|
| Mécanisme | `localStorage` |
| Préfixe | `interv360-inc01:` |
| Clé requests | `interv360-inc01:requests` |
| Accès direct depuis l'UI | Non |
| Point d'accès | `src/data/requestsRepository.ts` |
| Seed | `src/seed/demoRequests.ts` |
| Reset démo | Non exposé dans ce cycle (pas de contrôle UI) |

La couche UI ne manipule pas directement `localStorage`.

---

## 6. Vérifications réalisées

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
| Nombre de tests | 3 tests passés |
| Fichiers de tests | 2 fichiers |

---

## 7. Garde-fous respectés

Le cycle n'a pas créé :

- flux complet STAT-01 → STAT-06 ;
- transitions de statut ;
- STAT-05 / STAT-07 / STAT-08 ;
- backend serveur ;
- API externe ;
- base serveur ;
- SQL / DDL / migration ;
- CRM réel ;
- données réelles ;
- dashboard ;
- multi-utilisateur ;
- sprint Jira ;
- tickets ;
- publication Notion.

---

## 8. Limites assumées

Le cycle ne couvre pas encore :

- fiche détail demande ;
- actions métier ;
- qualification ;
- planification ;
- intervention mobile ;
- compte rendu mobile ;
- clôture locale STAT-06 ;
- reset démo (contrôle utilisateur) ;
- journal fonctionnel ;
- tests de workflow.

---

## 9. Décision de clôture

**Décision proposée :**

- [x] Cycle requests list skeleton clôturé
- [ ] Cycle à compléter
- [ ] Cycle à reprendre

### Décision

Le cycle `delivery/interv360-inc-01-list-skeleton` est **clôturé avec succès**.

Le premier écran squelette INC-01 est en place, testé, et respecte les décisions techniques et data précédentes.

Cette clôture **n'autorise pas encore** l'implémentation complète du flux SAV INC-01.

---

## 10. Prochain cycle recommandé

Ouvrir un cycle séparé :

`delivery/interv360-inc-01-request-detail-skeleton`

**Objectif :**

- créer le squelette de la fiche demande ;
- afficher les détails fictifs de SAV-DEMO-001 ;
- maintenir l'accès data via `src/data/` ;
- ne pas ajouter de transition de statut ;
- ne pas implémenter le workflow complet ;
- ne pas ajouter de backend, API, DB ou CRM.

**Alternative :**

`delivery/interv360-inc-01-demo-reset`

**Objectif :**

- implémenter le reset explicite de la démo ;
- purger les clés `interv360-inc01:` ;
- recharger le seed fictif ;
- ne pas ajouter de workflow métier.

**Recommandation :**

Ouvrir ensuite `delivery/interv360-inc-01-request-detail-skeleton`, puis traiter le reset démo dans un cycle dédié.
