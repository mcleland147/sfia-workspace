# Interv360 — INC-01 Request detail skeleton summary

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Request detail skeleton  
**Statut** : Clôturé  
**Branche** : `delivery/interv360-inc-01-request-detail-skeleton`

---

## 1. Objectif du cycle

Ce cycle a créé le **squelette de la fiche demande INC-01**.

Il complète le premier écran liste `RequestsList` avec un affichage détail pour la demande fictive `SAV-DEMO-001`.

Le cycle ne vise pas à implémenter le workflow complet STAT-01 → STAT-06.

---

## 2. Décisions de référence

Le cycle respecte les décisions précédentes :

- mono-app React + TypeScript + Vite ;
- séparation logique UI / domain / data / seed ;
- persistance locale via `localStorage` ;
- accès au stockage uniquement via `src/data/` ;
- données fictives uniquement ;
- pas de backend ;
- pas d'API ;
- pas de base serveur ;
- pas de CRM ;
- pas de transition métier.

**Sources :** [`inc-01-list-skeleton-summary.md`](inc-01-list-skeleton-summary.md), [`inc-01-local-persistence-decision.md`](inc-01-local-persistence-decision.md)

**Commit applicatif :** `71a092f` — `feat: add INC-01 request detail skeleton`

---

## 3. Fichiers créés ou modifiés

| Fichier | Rôle |
|---------|------|
| `projects/interv360/app/src/ui/requests/RequestDetail.tsx` | Fiche demande squelette |
| `projects/interv360/app/src/ui/requests/RequestDetail.css` | Styles de la fiche |
| `projects/interv360/app/src/ui/requests/RequestDetail.test.tsx` | Tests de la fiche |
| `projects/interv360/app/src/domain/requestStatus.ts` | Types enrichis pour l'affichage détail |
| `projects/interv360/app/src/seed/demoRequests.ts` | Seed fictif `SAV-DEMO-001` enrichi |
| `projects/interv360/app/src/data/requestsRepository.ts` | Ajout de `getRequestById()` |
| `projects/interv360/app/src/app/App.tsx` | Composition liste + fiche |
| `projects/interv360/app/src/tests/App.smoke.test.tsx` | Smoke test mis à jour |
| `projects/interv360/app/README.md` | Statut applicatif mis à jour |

---

## 4. Fiche demande créée

La fiche `RequestDetail` affiche les informations fictives de `SAV-DEMO-001` :

| Élément | Valeur |
|---------|--------|
| Demande | `SAV-DEMO-001` |
| Titre | `Machine client en panne intermittente` |
| Client | `Client Démo Industrie` |
| Site | `Lyon Démo` |
| Statut | `STAT-01` |
| Technicien | `Technicien Démo 01` |
| Description | `Panne intermittente constatée sur une machine de démonstration.` |
| Priorité | `Priorité démo` |
| Création | `J-2` |
| Qualification | `Contexte confirmé, intervention nécessaire.` |

Un bandeau indique que les données sont fictives uniquement.

---

## 5. Couche data

L'accès aux données reste centralisé dans `src/data/`.

| Sujet | Décision |
|-------|----------|
| Accès direct `localStorage` depuis UI | Non |
| Fonction détail | `getRequestById()` |
| Source liste | `getRequests()` |
| Seed | `src/seed/demoRequests.ts` |
| Données réelles | Interdites |
| Workflow | Non implémenté |

`RequestDetail` consomme les données via la couche data et ne manipule pas directement le stockage navigateur.

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
| Nombre de tests | 6 tests passés |
| Fichiers de tests | 3 fichiers |

---

## 7. Garde-fous respectés

Le cycle n'a pas créé :

- workflow complet STAT-01 → STAT-06 ;
- transition de statut ;
- boutons de qualification, planification ou clôture ;
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

- actions métier ;
- modification de statut ;
- qualification active ;
- planification active ;
- intervention mobile ;
- compte rendu mobile ;
- clôture locale STAT-06 ;
- reset démo (contrôle utilisateur) ;
- journal fonctionnel ;
- tests de workflow.

---

## 9. Décision de clôture

**Décision proposée :**

- [x] Cycle request detail skeleton clôturé
- [ ] Cycle à compléter
- [ ] Cycle à reprendre

### Décision

Le cycle `delivery/interv360-inc-01-request-detail-skeleton` est **clôturé avec succès**.

La fiche demande squelette est en place, testée, et respecte les décisions techniques et data précédentes.

Cette clôture **n'autorise pas encore** l'implémentation complète du flux SAV INC-01.

---

## 10. Prochain cycle recommandé

Ouvrir un cycle séparé :

`delivery/interv360-inc-01-demo-reset`

**Objectif :**

- implémenter le reset explicite de la démo ;
- purger les clés `interv360-inc01:` ;
- recharger le seed fictif ;
- vérifier que liste et fiche redeviennent cohérentes après reset ;
- ne pas ajouter de workflow métier.

**Alternative :**

`delivery/interv360-inc-01-qualification-readonly-skeleton`

**Objectif :**

- préparer une vue readonly de la qualification ;
- afficher les éléments de qualification fictifs ;
- ne pas permettre encore de transition STAT-01 → STAT-02.

**Recommandation :**

Traiter d'abord `delivery/interv360-inc-01-demo-reset` pour fiabiliser la rejouabilité de la démo avant d'ajouter de nouveaux écrans.
