# Interv360 — INC-01 Readonly demo summary

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Readonly demo summary  
**Statut** : Consolidation  
**Branche** : `delivery/interv360-inc-01-readonly-demo-summary`

---

## 1. Objectif du cycle

Ce cycle consolide le **parcours readonly complet** INC-01.

Il ne modifie pas le code applicatif.

Il vise à vérifier que la démo readonly est cohérente, rejouable et suffisamment stable avant toute introduction d'action métier ou de transition de statut.

---

## 2. État du parcours readonly INC-01

À ce stade, le parcours readonly couvre :

| Bloc | État |
|------|------|
| Liste des demandes | Présent |
| Fiche demande | Présent |
| Reset démo | Présent |
| Qualification readonly | Présent |
| Planification readonly | Présent |
| Intervention readonly | Présent |
| Compte rendu readonly | Présent |
| Workflow actif | Non implémenté |
| Transitions statut | Non implémentées |
| Données réelles | Interdites |

---

## 3. Demande de démonstration

La démonstration repose sur une demande fictive unique :

| Élément | Valeur |
|---------|--------|
| Demande | `SAV-DEMO-001` |
| Statut courant | `STAT-01` |
| Client | `Client Démo Industrie` |
| Site | `Lyon Démo` |
| Technicien | `Technicien Démo 01` |
| Données | Fictives uniquement |

Le statut reste volontairement `STAT-01`.

Aucune transition métier n'est exécutée dans le parcours readonly.

---

## 4. Parcours utilisateur readonly

Le parcours actuellement visible permet de consulter :

1. la liste des demandes ;
2. la fiche de la demande ;
3. la qualification fictive ;
4. la planification fictive ;
5. l'intervention terrain fictive ;
6. le compte rendu fictif ;
7. le reset explicite de la démo.

Le parcours est démontrable sans saisie, sans validation et sans modification métier.

**Composition applicative actuelle** (`App.tsx`) :

```text
DemoResetControl
RequestsList
RequestDetail
QualificationReadonly
PlanningReadonly
InterventionReadonly
ReportReadonly
```

---

## 5. Composants applicatifs consolidés

| Composant | Rôle | Action métier |
|-----------|------|---------------|
| `RequestsList` | Liste readonly des demandes | Non |
| `RequestDetail` | Fiche readonly de la demande | Non |
| `DemoResetControl` | Reset explicite des données fictives | Action technique de démo uniquement |
| `QualificationReadonly` | Vue qualification readonly | Non |
| `PlanningReadonly` | Vue planification readonly | Non |
| `InterventionReadonly` | Vue intervention readonly | Non |
| `ReportReadonly` | Vue compte rendu readonly | Non |

Le seul bouton existant est le reset explicite de démonstration.

Ce bouton ne constitue pas une action métier.

---

## 6. Couche data et seed

| Sujet | Décision |
|-------|----------|
| Persistance locale | `localStorage` |
| Préfixe stockage | `interv360-inc01:` |
| Accès stockage | `src/data/` uniquement |
| Seed principal | `SAV-DEMO-001` |
| Reset | Purge + rechargement du seed |
| Données réelles | Interdites |
| Backend | Non |
| API | Non |
| DB / SQL | Non |

La couche UI ne doit pas accéder directement au stockage local.

**Sources de cycles précédents :** [`inc-01-report-readonly-skeleton-summary.md`](inc-01-report-readonly-skeleton-summary.md), [`inc-01-demo-reset-summary.md`](inc-01-demo-reset-summary.md), [`inc-01-list-skeleton-summary.md`](inc-01-list-skeleton-summary.md)

---

## 7. Couverture de tests

Dernier état connu (cycle report readonly skeleton, commit `78ed23d`) :

| Contrôle | Résultat |
|----------|----------|
| Build | OK |
| Tests | OK |
| Nombre de tests | 22 tests passés |
| Fichiers de tests | 9 fichiers |

Les tests couvrent notamment :

- présence de la liste ;
- présence de la fiche ;
- reset explicite ;
- qualification readonly ;
- planification readonly ;
- intervention readonly ;
- compte rendu readonly.

---

## 8. Garde-fous toujours actifs

Le périmètre INC-01 readonly exclut :

- workflow complet STAT-01 → STAT-06 ;
- transition STAT-01 → STAT-02 ;
- transition STAT-02 → STAT-03 ;
- transition STAT-03 → STAT-04 ;
- transition STAT-04 → STAT-06 ;
- STAT-05 / STAT-07 / STAT-08 ;
- saisie active ;
- validation ;
- clôture ;
- backend ;
- API ;
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

## 9. Évaluation de stabilité

| Critère | État |
|---------|------|
| Parcours consultable de bout en bout | Oui |
| Données fictives cohérentes | Oui |
| Reset démo disponible | Oui |
| Build OK | Oui |
| Tests OK | Oui |
| Workflow absent | Oui |
| Transitions absentes | Oui |
| Données réelles absentes | Oui |

### Conclusion

Le parcours readonly INC-01 est **suffisamment stable** pour être présenté comme démonstrateur consultatif.

Il ne doit **pas** être présenté comme un workflow opérationnel.

---

## 10. Décision de consolidation

**Décision proposée :**

- [x] Parcours readonly consolidé
- [ ] Parcours readonly à compléter
- [ ] Parcours readonly à reprendre

### Décision

Le parcours readonly INC-01 est **consolidé**.

Il constitue une base démontrable pour illustrer le flux SAV minimal sans introduire encore d'actions métier.

Cette consolidation **n'autorise pas encore** les transitions de statut ni l'implémentation du workflow complet.

---

## 11. Options pour la suite

### Option A — Action transition decision

**Cycle :**

`delivery/interv360-inc-01-action-transition-decision`

**Objectif :**

- cadrer les premières actions métier ;
- définir la première transition autorisable ;
- préciser les règles de passage STAT-01 → STAT-02 ;
- décider les conditions de test et de rollback ;
- ne pas implémenter encore la transition.

### Option B — UI polish readonly

**Cycle :**

`delivery/interv360-inc-01-readonly-ui-polish`

**Objectif :**

- améliorer la cohérence visuelle ;
- harmoniser les espacements ;
- améliorer la lisibilité des blocs readonly ;
- ne pas introduire de nouvelle action métier.

### Option C — Demo script

**Cycle :**

`delivery/interv360-inc-01-demo-script`

**Objectif :**

- produire un script de démonstration ;
- expliquer comment présenter le parcours readonly ;
- expliciter les limites ;
- préparer la bascule vers les futures actions métier.

---

## 12. Recommandation

**Recommandation :**

Ouvrir ensuite `delivery/interv360-inc-01-action-transition-decision`.

**Justification :**

Le parcours readonly est désormais complet et stable.  
Avant de coder une action métier, il faut cadrer précisément la première transition autorisée, les règles associées et les garde-fous de retour arrière.

Aucune transition ne doit être implémentée sans ce cadrage.
