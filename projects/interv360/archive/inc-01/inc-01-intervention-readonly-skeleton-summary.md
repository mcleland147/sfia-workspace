# Interv360 — INC-01 Intervention readonly skeleton summary

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Intervention readonly skeleton  
**Statut** : Clôturé  
**Branche** : `delivery/interv360-inc-01-intervention-readonly-skeleton`

---

## 1. Objectif du cycle

Ce cycle a créé une **vue readonly** d'intervention terrain INC-01.

Il complète la liste, la fiche demande, la qualification readonly et la planification readonly avec un affichage d'intervention fictif pour `SAV-DEMO-001`.

Le cycle ne vise pas à implémenter une action terrain, un compte rendu actif ni une transition vers STAT-04.

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
- pas de transition métier ;
- pas de workflow actif.

**Sources :** [`inc-01-planning-readonly-skeleton-summary.md`](inc-01-planning-readonly-skeleton-summary.md), [`inc-01-demo-reset-summary.md`](inc-01-demo-reset-summary.md)

**Commit applicatif :** `5e9b67f` — `feat: add INC-01 intervention readonly skeleton`

---

## 3. Fichiers créés ou modifiés

| Fichier | Rôle |
|---------|------|
| `projects/interv360/app/src/ui/intervention/InterventionReadonly.tsx` | Vue intervention terrain readonly |
| `projects/interv360/app/src/ui/intervention/InterventionReadonly.css` | Styles de la vue |
| `projects/interv360/app/src/ui/intervention/InterventionReadonly.test.tsx` | Tests de la vue |
| `projects/interv360/app/src/domain/requestStatus.ts` | Champs intervention readonly |
| `projects/interv360/app/src/seed/demoRequests.ts` | Seed fictif enrichi |
| `projects/interv360/app/src/app/App.tsx` | Intégration après `PlanningReadonly` |
| `projects/interv360/app/src/tests/App.smoke.test.tsx` | Smoke test mis à jour |
| `projects/interv360/app/README.md` | Documentation mise à jour |

---

## 4. Vue intervention readonly créée

La vue `InterventionReadonly` affiche pour `SAV-DEMO-001` :

| Élément | Valeur |
|---------|--------|
| Titre | `Intervention terrain` |
| Mode | `Vue readonly` |
| Demande | `SAV-DEMO-001` |
| Statut | `STAT-01` |
| Lieu | `Zone Démo Atelier` |
| Créneau | `J+1 matin` |
| Technicien | `Technicien Démo 01` |
| Checklist sécurité | Accès site fictif confirmé ; Consignes de démonstration prises en compte ; Matériel de diagnostic démo prévu |
| Notes | `Intervention fictive préparée pour démonstration readonly.` |
| Données | Fictives uniquement |

La vue ne contient **aucun bouton métier**.

---

## 5. Garde-fous fonctionnels

La vue ne permet pas :

- de démarrer une intervention ;
- de terminer une intervention ;
- de valider une intervention ;
- de passer en STAT-04 ;
- de saisir un compte rendu ;
- de modifier les données ;
- de sauvegarder une action ;
- de déclencher un workflow ;
- de clôturer une demande.

Elle affiche uniquement des informations fictives readonly.

---

## 6. Couche data

Les données restent accessibles via la couche data existante.

| Sujet | Décision |
|-------|----------|
| Source demande | `getRequestById()` |
| Accès direct `localStorage` depuis UI | Non |
| Seed | `src/seed/demoRequests.ts` |
| Données réelles | Interdites |
| Transition statut | Non implémentée |
| Action terrain | Non implémentée |
| Compte rendu actif | Non implémenté |

---

## 7. Vérifications réalisées

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
| Nombre de tests | 19 tests passés |
| Fichiers de tests | 8 fichiers |

---

## 8. Garde-fous respectés

Le cycle n'a pas créé :

- action terrain ;
- compte rendu actif ;
- transition STAT-04 ;
- workflow complet STAT-01 → STAT-06 ;
- bouton démarrer / terminer / valider / compte rendu ;
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

## 9. Limites assumées

Le cycle ne couvre pas encore :

- intervention active ;
- saisie de compte rendu ;
- validation terrain ;
- passage STAT-03 → STAT-04 ;
- compte rendu mobile ;
- journal fonctionnel métier complet ;
- clôture locale STAT-06 ;
- workflow complet INC-01.

---

## 10. Décision de clôture

**Décision proposée :**

- [x] Cycle intervention readonly skeleton clôturé
- [ ] Cycle à compléter
- [ ] Cycle à reprendre

### Décision

Le cycle `delivery/interv360-inc-01-intervention-readonly-skeleton` est **clôturé avec succès**.

La vue intervention readonly est en place, testée, et respecte les décisions techniques, data et fonctionnelles précédentes.

Cette clôture **n'autorise pas encore** l'implémentation d'une action terrain, d'un compte rendu actif, d'une transition STAT-04 ni du flux SAV complet INC-01.

---

## 11. Prochain cycle recommandé

Ouvrir un cycle séparé :

`delivery/interv360-inc-01-report-readonly-skeleton`

**Objectif :**

- préparer une vue readonly de compte rendu ;
- afficher un résultat fictif ;
- maintenir les données fictives uniquement ;
- ne pas permettre encore de saisie ou validation de compte rendu ;
- ne pas permettre de transition vers STAT-06.

**Alternative :**

`delivery/interv360-inc-01-readonly-demo-summary`

**Objectif :**

- consolider les vues readonly existantes ;
- vérifier la cohérence liste / fiche / qualification / planification / intervention ;
- décider si l'on termine les vues readonly avant d'ouvrir les actions métier.

**Recommandation :**

Ouvrir ensuite `delivery/interv360-inc-01-report-readonly-skeleton` pour compléter le parcours readonly avant toute transition métier.
