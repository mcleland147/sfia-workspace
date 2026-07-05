# Chantiers360 v2 — Backlog MVP — Overview

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/03-backlog/mvp-backlog-overview.md`  
**Cycle :** Backlog MVP (post PR #98)  
**Version :** 1.0 — draft revue Morris

> **Niveau document :** backlog **fonctionnel** MVP — pas de tickets techniques, pas de code, pas d'architecture technique.

## 1. Objectif du cycle backlog MVP

Structurer le **backlog fonctionnel** du MVP Chantiers360 v2 à partir du cadrage détaillé, de l'architecture fonctionnelle et de l'UX/UI validés — pour préparer un delivery incrémental **sans lancer le code** dans ce cycle.

## 2. Périmètre du backlog

| Inclus | Exclu |
|--------|-------|
| Epics fonctionnels MVP | Devis, facturation, intégrations comptables |
| User stories fonctionnelles | Accès client |
| Critères d'acceptation fonctionnels | Planning avancé, Gantt |
| Incréments de delivery proposés | Architecture technique, API, base de données |
| Matrice de traçabilité | Code applicatif, CI/CD |
| | Tickets Jira / Notion / CMP |
| | Chantiers360 V0 |

## 3. MVP confirmé

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

Inchangé depuis bootstrap (PR #95) — validé à chaque cycle.

## 4. Méthode de découpage

1. **Epics** — regroupements fonctionnels alignés domaines + navigation UX.
2. **User stories** — besoins utilisateur testables, sans granularité technique.
3. **Critères d'acceptation** — validation fonctionnelle Given/When/Then ou checklist.
4. **Incréments** — tranches de valeur utilisateur ordonnées (INC-01 à INC-05).
5. **Traçabilité** — lien cadrage → UC → archi → écrans → stories → incréments.

## 5. Priorisation P1 / P2

| Priorité | Contenu | Source |
|----------|---------|--------|
| **P1** | UC-01 à UC-05 — chantier, liste, statut, tâches, réserves | `functional-decisions.md` |
| **P2** | UC-06 à UC-09 — jalons, retard, compte rendu, prochaines actions | `functional-decisions.md` |

**Delivery :** P1 d'abord (INC-01, INC-02) ; P2 ensuite (INC-03 à INC-05).

## 6. Exclusions

- Devis, facturation, intégrations comptables *(extensions métier futures)*
- Accès client, portail consultation
- Planning avancé, ressources, Gantt, multi-équipe
- Architecture technique, modèle de données, stack
- Code, app/, backend/, frontend/
- Reprise Chantiers360 V0
- Automatisation L5 global

## 7. Critères de validation du backlog

Le backlog MVP est **valide** si :

1. Toutes les user stories minimales attendues sont couvertes.
2. Chaque story a des critères d'acceptation fonctionnels testables.
3. Les 5 incréments couvrent l'intégralité du MVP sans dérive.
4. La matrice de traçabilité ne montre aucune fonctionnalité hors MVP.
5. Aucun élément technique (API, DB, framework) n'est introduit.
6. P1/P2 respectés dans epics, stories et incréments.

**Gate Morris** requis avant delivery incrémental (code).

## 8. Limites avant delivery

Ce cycle **arrête** le backlog documentaire. Le cycle suivant **Delivery incrémental** couvrira :

- choix stack / architecture technique *(cycle dédié si requis)*
- implémentation par incrément
- validation, PR, post-merge

**Aucun code** ne doit être produit avant validation Morris du backlog et GO delivery.

---

**Documents liés :** `epics.md`, `user-stories.md`, `acceptance-criteria.md`, `delivery-increments.md`, `backlog-traceability.md`, `backlog-decisions.md`

**Automation level :** L2 — gate Morris avant delivery.
