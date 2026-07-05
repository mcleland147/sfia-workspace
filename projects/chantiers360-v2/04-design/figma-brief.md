# Chantiers360 v2 — Brief Design Figma MVP

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/04-design/figma-brief.md`  
**Cycle :** Design Figma MVP — rattrapage (post PR #99 backlog, post PR #100 standard SFIA v2.0)  
**Standard :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md`

> Brief **repo-first** — Git = source de vérité méthodologique. Figma = validation visuelle, **pas source unique**.

## 1. Objectif du cycle

Produire dans Figma une **validation visuelle** des écrans MVP Chantiers360 v2, en complément des wireframes Markdown (`02-ux-ui/`), avant architecture technique et delivery code.

**Contexte rattrapage :** le backlog MVP a été produit et mergé (PR #99) **avant** introduction du standard Design Figma MVP (PR #100). Ce cycle **n'invalide pas** le backlog — il prépare la validation visuelle et documente les écarts éventuels dans `design-to-backlog-alignment.md`.

## 2. MVP de référence

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

## 3. Lien Figma

| Élément | Valeur |
|---------|--------|
| **Fichier Figma** | À renseigner par Morris |
| **Prototype** | Optionnel — parcours P1 recommandé si utile |
| **Accès** | Équipe projet / Morris |

**Lien Figma :**

- À renseigner par Morris

## 4. Écrans MVP à produire

| # | Écran | Priorité | Source UX |
|---|-------|----------|-----------|
| 1 | Liste chantiers | P1 | `screen-map.md` §1, `wireframes-functional.md` §1 |
| 2 | Création / édition chantier | P1 | `screen-map.md` §2, `wireframes-functional.md` §8 |
| 3 | Fiche chantier (pivot) | P1 | `screen-map.md` §3, `wireframes-functional.md` §2 |
| 4 | Section tâches | P1 | `screen-map.md` §4, `wireframes-functional.md` §3 |
| 5 | Section réserves | P1 | `screen-map.md` §5, `wireframes-functional.md` §4 |
| 6 | Section jalons / planning simple | P2 | `screen-map.md` §6, `wireframes-functional.md` §5 |
| 7 | Section comptes rendus | P2 | `screen-map.md` §7, `wireframes-functional.md` §6 |
| 8 | Vue prochaines actions | P2 | `screen-map.md` §8, `wireframes-functional.md` §7 |

**Ordre de production recommandé :** P1 d'abord (écrans 1–5), puis P2 (écrans 6–8).

## 5. Niveau de fidélité attendu

| Niveau | Statut | Attendu |
|--------|--------|---------|
| **Basse fidélité** | Autorisée | Structure, zones, hiérarchie |
| **Moyenne fidélité** | **Recommandée** | Écrans MVP lisibles, statuts, actions principales |
| **Haute fidélité** | Optionnelle | Non requise au MVP |
| **Design system complet** | **Hors cible** | Pas de bibliothèque composants obligatoire |

## 6. Prototype simple

| Attribut | Détail |
|----------|--------|
| **Statut** | Recommandé si utile — non obligatoire |
| **Périmètre minimum** | Liste → fiche → section tâches (parcours P1) |
| **Extension optionnelle** | Prochaines actions → retour fiche |

## 7. Contraintes de scope

- Projet **from scratch** — aucune reprise V0
- **Web responsive** possible — pas d'app mobile native
- Formulaires **courts** — champs obligatoires minimaux
- **Prochaines actions 100 % dérivées** — pas de saisie manuelle
- **Retard manuel** — toggle, pas de calcul automatique MVP
- **Planning simple visible mais non dominant** — pas de calendrier graphique
- Compte rendu : **date auto** + contenu libre

## 8. Exclusions confirmées

| Exclusion | Statut |
|-----------|--------|
| Devis | ❌ Hors MVP |
| Facturation | ❌ Hors MVP |
| Intégrations comptables | ❌ Hors MVP |
| Accès client | ❌ Hors MVP |
| Planning avancé / Gantt | ❌ Hors MVP |
| Design system complet | ❌ Hors cible initiale |
| Code / architecture technique | ❌ Hors cycle |

## 9. Entrées validées (prérequis)

| Entrée | Source | Statut |
|--------|--------|--------|
| Cadrage détaillé | `00-framing/` | ✅ PR #96 |
| Architecture fonctionnelle | `01-functional-architecture/` | ✅ PR #97 |
| UX/UI Markdown | `02-ux-ui/` | ✅ PR #98 |
| Backlog MVP | `03-backlog/` | ✅ PR #99 — non modifié dans ce cycle |

## 10. Livrables Git (ce dossier)

| Fichier | Rôle |
|---------|------|
| `figma-brief.md` | Ce document |
| `screen-design-spec.md` | Spécification écran par écran |
| `figma-review-checklist.md` | Checklist revue Morris |
| `design-decisions.md` | Décisions design tracées |
| `design-to-backlog-alignment.md` | Alignement backlog — écarts éventuels |

## 11. Gate Morris design

Le cycle est **validé** si Morris confirme :

1. Validation visuelle des écrans P1 (minimum)
2. Cohérence parcours avec UX/UI Markdown
3. Impacts backlog documentés (`design-to-backlog-alignment.md`)
4. GO avant **architecture technique** et **delivery code**

**Statut gate :** ⏳ En attente — lien Figma et revue visuelle Morris

---

**Automation level :** L2–L3 — génération docs repo ; validation visuelle Morris (L0).

**Références :** `sfia-v2-design-figma-cycle-standard.md`, `02-ux-ui/`, `03-backlog/` (lecture seule)
