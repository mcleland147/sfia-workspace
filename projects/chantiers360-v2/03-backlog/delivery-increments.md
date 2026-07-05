# Chantiers360 v2 — Incréments de delivery MVP

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/03-backlog/delivery-increments.md`  
**Cycle :** Backlog MVP (post PR #98)

> Proposition d'incréments — **sans exécution du delivery** ni code dans ce cycle.

## MVP de référence

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

---

## INC-01 — Socle chantier : liste, création, fiche

| Attribut | Détail |
|----------|--------|
| **Objectif** | Livrer le socle navigation et gestion chantier |
| **Priorité** | P1 |
| **User stories** | US-01, US-02, US-03, US-04 |
| **Epics** | EPIC-01, EPIC-07 (partiel) |
| **Valeur utilisateur** | Créer et piloter des chantiers — point d'entrée opérationnel |
| **Dépendances** | Aucune |
| **Critères de sortie** | Liste, création, fiche, statut chantier fonctionnels ; critères US-01 à US-04 validés |
| **Risques** | Surconception formulaire — mitiger par champs minimaux |
| **Validation Morris** | ⏳ GO avant démarrage delivery INC-01 |

---

## INC-02 — Tâches et réserves

| Attribut | Détail |
|----------|--------|
| **Objectif** | Suivi opérationnel du travail et des points à lever |
| **Priorité** | P1 |
| **User stories** | US-06, US-07, US-08, US-09 |
| **Epics** | EPIC-02, EPIC-03 |
| **Valeur utilisateur** | Cœur métier — tâches et réserves centralisées par chantier |
| **Dépendances** | INC-01 (fiche chantier) |
| **Critères de sortie** | CRUD fonctionnel tâches et réserves ; statuts conformes `state-model.md` |
| **Risques** | Confusion tâche/réserve — mitiger par libellés UX clairs |
| **Validation Morris** | ⏳ GO après INC-01 ou en parallèle si socle validé |

---

## INC-03 — Jalons simples et retard

| Attribut | Détail |
|----------|--------|
| **Objectif** | Visibilité planning légère et signal retard |
| **Priorité** | P2 |
| **User stories** | US-05, US-10 |
| **Epics** | EPIC-04 |
| **Valeur utilisateur** | Planifier légèrement et repérer les chantiers en difficulté |
| **Dépendances** | INC-01 |
| **Critères de sortie** | Section jalons éditable ; retard manuel toggle ; visible liste + fiche |
| **Risques** | Dérive planning avancé — mitiger par scope jalons simples only |
| **Validation Morris** | ⏳ GO après INC-01 |

---

## INC-04 — Comptes rendus rapides

| Attribut | Détail |
|----------|--------|
| **Objectif** | Historique opérationnel textuel par chantier |
| **Priorité** | P2 |
| **User stories** | US-11 |
| **Epics** | EPIC-05 |
| **Valeur utilisateur** | Consigner l'activité terrain sans outil externe |
| **Dépendances** | INC-01 |
| **Critères de sortie** | CR créable avec date auto ; historique chronologique consultable |
| **Risques** | Surconception éditoriale — mitiger par contenu libre only |
| **Validation Morris** | ⏳ GO après INC-01 |

---

## INC-05 — Prochaines actions et navigation transverse

| Attribut | Détail |
|----------|--------|
| **Objectif** | Vue synthétique dérivée et navigation cohérente |
| **Priorité** | P2 |
| **User stories** | US-12, US-13 |
| **Epics** | EPIC-06, EPIC-07 (complet) |
| **Valeur utilisateur** | Priorisation quotidienne — réduction charge cognitive |
| **Dépendances** | INC-01, INC-02, INC-03 (sources dérivées) |
| **Critères de sortie** | Prochaines actions 100 % dérivées ; navigation vers source ; pas de saisie manuelle |
| **Risques** | Agrégation incomplète — mitiger par règles `functional-decisions.md` §5 |
| **Validation Morris** | ⏳ GO après INC-02 minimum ; idéalement INC-03 |

---

## Ordre de delivery recommandé

```
INC-01 → INC-02 → INC-03 → INC-04 → INC-05
         (P1)      (P2)      (P2)      (P2)
```

**Note :** INC-03 et INC-04 peuvent être parallélisés après INC-01 si capacité — INC-05 en dernier.

## Ce cycle ne lance pas

- Implémentation code
- Choix stack / architecture technique
- CI/CD, déploiement
- Tickets outils externes (Jira, Notion, CMP)

---

**Documents liés :** `user-stories.md`, `backlog-decisions.md`, `backlog-traceability.md`
