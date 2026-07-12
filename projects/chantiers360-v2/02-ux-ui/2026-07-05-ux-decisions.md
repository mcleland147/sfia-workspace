# Chantiers360 v2 — Décisions UX/UI

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/02-ux-ui/ux-decisions.md`  
**Cycle :** UX/UI (post PR #97)

> Trace des décisions UX/UI prises dans ce cycle.  
> Arbitrages structurants = **Morris**. Exécution = **Cursor** (L2).

## 1. MVP confirmé

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

| Statut | ✅ Inchangé — hérité architecture fonctionnelle PR #97 |

---

## 2. Navigation et structure

| # | Décision | Justification |
|---|----------|---------------|
| 1 | **Entrée principale = liste chantiers** | Vue d'ensemble immédiate — `navigation-model.md` |
| 2 | **Fiche chantier = pivot** | Toutes actions opérationnelles rattachées au chantier |
| 3 | **Prochaines actions = vue transverse** | Priorisation quotidienne — accès depuis liste |
| 4 | **Profondeur navigation limitée** | Max 2 niveaux — simplicité terrain |
| 5 | **Sections sur fiche** | Tâches, réserves, jalons, comptes rendus — onglets ou équivalent UX |

---

## 3. Principes UX appliqués

| # | Décision | Détail |
|---|----------|--------|
| 6 | Simplicité terrain | Formulaires courts, actions inline |
| 7 | Lecture rapide | Statut + retard visibles en liste |
| 8 | Saisie courte | Champs obligatoires minimaux only |
| 9 | Prochaines actions dérivées | Pas de saisie manuelle — Morris PR #97 |
| 10 | Compte rendu léger | Date auto + contenu libre |
| 11 | Retard manuel | Toggle sur fiche — pas de calcul auto MVP |

---

## 4. Planning et contenu

| # | Décision | Détail |
|---|----------|--------|
| 12 | **Planning simple visible mais non dominant** | Section jalons — pas de calendrier graphique |
| 13 | Pas de Gantt | Planning avancé hors MVP |
| 14 | Historique CR chronologique | Plus récent en haut |

---

## 5. Exclusions maintenues

| # | Exclusion | Statut |
|---|-----------|--------|
| 15 | Accès client | ❌ Hors MVP |
| 16 | Devis | ❌ Hors MVP — extension future |
| 17 | Facturation | ❌ Hors MVP — extension future |
| 18 | Intégrations comptables | ❌ Hors MVP — extension future |
| 19 | Planning avancé | ❌ Hors MVP |
| 20 | Application mobile native | ❌ Hors MVP — web responsive possible |
| 21 | Gestion fine rôles / permissions | ❌ Hors MVP — petite équipe simple |

---

## 6. Limites de ce cycle

| # | Décision | Détail |
|---|----------|--------|
| 22 | **Pas de maquette graphique haute fidélité** | Wireframes textuels Markdown only |
| 23 | **Pas de design system complet** | Pas de tokens, composants, charte |
| 24 | **Pas de code** | Pas app/, frontend/, backend/ |
| 25 | **Pas de backlog** | Cycle backlog MVP suivant |
| 26 | **Pas d'architecture technique** | Cycle dédié ultérieur |
| 27 | **V0 exclue** | From scratch — comparaison fin pilote |

---

## 7. Priorisation écrans (héritée architecture fonctionnelle)

| Priorité | Écrans |
|----------|--------|
| **P1** | Liste, création/édition chantier, fiche, tâches, réserves |
| **P2** | Jalons, comptes rendus, prochaines actions |

---

## 8. Décisions Morris requises (post cycle)

| # | Décision | Statut |
|---|----------|--------|
| 1 | Valider documentation UX/UI (ce cycle) | ⏳ En attente |
| 2 | Confirmer wireframes textuels suffisants pour backlog | ⏳ En attente |
| 3 | Autoriser cycle backlog MVP | ⏳ Après validation UX/UI |
| 4 | Maintenir exclusion V0 | ✅ Confirmé |

---

## 9. Gate suivant

**Prochain cycle autorisé après validation Morris :** **Backlog MVP**

Prérequis :

- UX/UI validée (5 documents `02-ux-ui/`)
- MVP et exclusions confirmés
- Pas de dérive vers code ou architecture technique

---

**Documents produits :**

| Fichier | Rôle |
|---------|------|
| `ux-ui-overview.md` | Objectif, principes, critères validation |
| `screen-map.md` | Carte 8 écrans fonctionnels |
| `wireframes-functional.md` | 8 wireframes textuels |
| `user-flows.md` | 7 flux UX prioritaires |
| `ux-decisions.md` | Ce document |

**Automation level :** L2 — gate Morris avant backlog MVP.
