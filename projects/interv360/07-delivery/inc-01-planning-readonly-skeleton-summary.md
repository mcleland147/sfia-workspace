# Interv360 — INC-01 Planning readonly skeleton summary

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Planning readonly skeleton  
**Statut** : Clôturé  
**Branche** : `delivery/interv360-inc-01-planning-readonly-skeleton`

---

## 1. Objectif du cycle

Ce cycle a créé une **vue readonly** de planification INC-01.

Il complète la liste, la fiche demande et la vue qualification avec un affichage de planification fictif pour `SAV-DEMO-001`.

Le cycle ne vise pas à implémenter une action de planification ni une transition vers STAT-03.

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

**Sources :** [`inc-01-qualification-readonly-skeleton-summary.md`](inc-01-qualification-readonly-skeleton-summary.md), [`inc-01-demo-reset-summary.md`](inc-01-demo-reset-summary.md)

**Commit applicatif :** `e2d180d` — `feat: add INC-01 planning readonly skeleton`

---

## 3. Fichiers créés ou modifiés

| Fichier | Rôle |
|---------|------|
| `projects/interv360/app/src/ui/planning/PlanningReadonly.tsx` | Vue planification readonly |
| `projects/interv360/app/src/ui/planning/PlanningReadonly.css` | Styles de la vue |
| `projects/interv360/app/src/ui/planning/PlanningReadonly.test.tsx` | Tests de la vue |
| `projects/interv360/app/src/domain/requestStatus.ts` | Champs `planningSlotLabel`, `planningTechnicianLabel`, `planningReadonlyNotes` |
| `projects/interv360/app/src/seed/demoRequests.ts` | Seed fictif enrichi |
| `projects/interv360/app/src/app/App.tsx` | Intégration après `QualificationReadonly` |
| `projects/interv360/app/src/tests/App.smoke.test.tsx` | Smoke test mis à jour |
| `projects/interv360/app/README.md` | Documentation mise à jour |

---

## 4. Vue planification readonly créée

La vue `PlanningReadonly` affiche pour `SAV-DEMO-001` :

| Élément | Valeur |
|---------|--------|
| Titre | `Planification SAV` |
| Mode | `Vue readonly` |
| Demande | `SAV-DEMO-001` |
| Statut | `STAT-01` |
| Créneau | `J+1 matin` |
| Technicien | `Technicien Démo 01` |
| Notes | `Créneau fictif proposé pour démonstration readonly.` |
| Données | Fictives uniquement |

La vue ne contient **aucun bouton métier**.

---

## 5. Garde-fous fonctionnels

La vue ne permet pas :

- de planifier une intervention ;
- d'affecter un technicien ;
- de valider un créneau ;
- de passer en STAT-03 ;
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
| Action de planification | Non implémentée |

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
| Nombre de tests | 16 tests passés |
| Fichiers de tests | 7 fichiers |

---

## 8. Garde-fous respectés

Le cycle n'a pas créé :

- action de planification ;
- transition STAT-03 ;
- workflow complet STAT-01 → STAT-06 ;
- bouton planifier / affecter / valider ;
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

- planification active ;
- affectation active ;
- passage STAT-02 → STAT-03 ;
- intervention mobile ;
- compte rendu mobile ;
- journal fonctionnel métier complet ;
- clôture locale STAT-06 ;
- workflow complet INC-01.

---

## 10. Décision de clôture

**Décision proposée :**

- [x] Cycle planning readonly skeleton clôturé
- [ ] Cycle à compléter
- [ ] Cycle à reprendre

### Décision

Le cycle `delivery/interv360-inc-01-planning-readonly-skeleton` est **clôturé avec succès**.

La vue planification readonly est en place, testée, et respecte les décisions techniques, data et fonctionnelles précédentes.

Cette clôture **n'autorise pas encore** l'implémentation d'une action de planification, d'une transition STAT-03 ni du flux SAV complet INC-01.

---

## 11. Prochain cycle recommandé

Ouvrir un cycle séparé :

`delivery/interv360-inc-01-intervention-readonly-skeleton`

**Objectif :**

- préparer une vue readonly d'intervention terrain ;
- afficher les informations fictives d'intervention ;
- maintenir les données fictives uniquement ;
- ne pas permettre encore d'action terrain ;
- ne pas permettre de transition de statut.

**Alternative :**

`delivery/interv360-inc-01-planning-action-decision`

**Objectif :**

- cadrer les conditions d'une future action de planification ;
- définir les règles avant transition vers STAT-03 ;
- ne pas implémenter encore la transition.

**Recommandation :**

Ouvrir ensuite `delivery/interv360-inc-01-intervention-readonly-skeleton` pour compléter les vues readonly avant d'introduire des actions métier.
