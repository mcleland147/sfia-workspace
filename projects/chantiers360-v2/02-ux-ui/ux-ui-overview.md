# Chantiers360 v2 — UX/UI Overview

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/02-ux-ui/ux-ui-overview.md`  
**Cycle :** UX/UI (post PR #97)  
**Version :** 1.0 — draft revue Morris

> **Niveau document :** UX/UI **fonctionnelle** — wireframes textuels, pas de maquette graphique haute fidélité, pas de design system complet, pas de code.

## 1. Objectif du cycle UX/UI

Traduire l'architecture fonctionnelle MVP en **parcours écran**, **carte d'écrans** et **wireframes textuels** exploitables pour le cycle backlog et le delivery — sans produire de code, d'architecture technique ni de design system complet.

## 2. MVP de référence

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

## 3. Principes UX du MVP

| Principe | Application |
|----------|-------------|
| **Simplicité terrain** | Interface utilisable en conditions chantier — peu de friction |
| **Lecture rapide** | Informations essentielles visibles sans scroll excessif |
| **Peu de profondeur** | Max 2 niveaux : liste → fiche → section |
| **Fiche chantier pivot** | Toute action opérationnelle part ou revient au chantier |
| **Prochaines actions visibles** | Accès direct depuis l'entrée — priorisation quotidienne |
| **Saisie courte** | Formulaires minimaux — champs obligatoires only |
| **Pas de surcharge** | Pas de modules commerciaux, client, planning avancé au MVP |

## 4. Utilisateurs cibles

| Utilisateur | Contexte UX |
|-------------|-------------|
| **Artisan indépendant** | Usage solo — mobile web possible, pas d'app native MVP |
| **Petite équipe bâtiment** | 2–5 personnes — même vue, pas de rôles fins |
| **Conducteur de travaux léger** | Mises à jour rapides tâches / réserves sur fiche |
| **Responsable opérationnel** | Liste chantiers + prochaines actions le matin |

**Hors MVP :** client final — pas d'espace consultation / validation.

## 5. Posture produit

- **Outil interne** — centré artisan / PME, pas portail client.
- **Opérationnel d'abord** — suivi chantier, pas gestion commerciale.
- **MVP pilote SFIA** — simplicité prioritaire sur exhaustivité.
- **From scratch** — aucune reprise V0 ; comparaison fin pilote only.

## 6. Contraintes UX

| Contrainte | Détail |
|------------|--------|
| Navigation | Entrée = liste chantiers ; pivot = fiche chantier |
| Prochaines actions | Vue transverse — 100 % dérivée, pas de saisie manuelle |
| Compte rendu | Date auto ; contenu libre ; saisie textuelle courte |
| Retard | Toggle manuel sur fiche — signal visuel en liste |
| Planning simple | Visible sur fiche — section dédiée, non dominante |
| Multi-utilisateur | Petite équipe — pas d'écrans rôles / permissions |
| Responsive | Web utilisable mobile — pas d'app native MVP |

## 7. Exclusions

| Exclusion | Cycle |
|-----------|-------|
| Maquette graphique haute fidélité | Hors ce cycle |
| Design system complet (tokens, composants) | Hors ce cycle |
| Code applicatif (app/, frontend/, backend/) | Hors ce cycle |
| Architecture technique, API, base de données | Cycle dédié ultérieur |
| Backlog détaillé, user stories | Cycle backlog MVP |
| Devis, facturation, intégrations comptables | Hors MVP |
| Accès client | Hors MVP |
| Planning avancé, Gantt | Hors MVP |
| Chantiers360 V0 | Interdit |

## 8. Critères de validation UX

Le cycle UX/UI est **valide** si :

1. Tous les écrans P1 et P2 de l'architecture fonctionnelle ont une description UX.
2. Les wireframes textuels couvrent les 7 zones attendues.
3. Les flux UX prioritaires sont documentés sans backlog ni user stories.
4. Les décisions UX sont tracées dans `ux-decisions.md`.
5. Le MVP et les exclusions Morris restent inchangés.
6. Aucun code, design system complet ou maquette haute fidélité n'est produit.

**Gate Morris** requis avant cycle backlog MVP.

---

**Documents liés :** `screen-map.md`, `wireframes-functional.md`, `user-flows.md`, `ux-decisions.md`

**Sources :** `01-functional-architecture/` — navigation-model, functional-decisions

**Automation level :** L2 — gate Morris avant backlog MVP.
