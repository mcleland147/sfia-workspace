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
| **Fichier Figma** | ✅ Créé — lien renseigné |
| **Page de référence** | ✅ **MVP P1 — Validé Morris** |
| **Production écrans P1** | ✅ Produits et validés — réserves mineures de polish |
| **Production écrans P2** | ⏳ Non produits — à valider ultérieurement si nécessaire |
| **Prototype** | P1 uniquement ou à confirmer selon statut Figma — décision Morris en cours |
| **Accès** | Équipe projet / Morris |

**Lien Figma :**

- https://www.figma.com/design/9sxmnPQjMN34kXb4JE2nmz/Chantiers360-v2-%E2%80%94-Design-Figma-MVP?node-id=0-1&t=nht2irsBbrCIUamM-1

### Frames validées (page ✅ MVP P1 — Validé Morris)

| Frame Figma | Couverture écran P1 |
|-------------|---------------------|
| **01 — Dashboard cockpit premium** | Liste chantiers / dashboard (US-02) |
| **02 — Fiche chantier — Tâches** | Fiche chantier pivot + section tâches (US-03, US-06, US-07) |
| **03 — Fiche chantier — Réserves** | Fiche chantier pivot + section réserves (US-03, US-08, US-09) |
| **04 — Création chantier** | Formulaire création chantier (US-01) |

### Frames non retenues

Toutes les **autres frames** du fichier Figma sont considérées comme **explorations / archives** — **ne pas utiliser** comme référence de design pour architecture technique ou delivery.

## 4. Écrans MVP — statut production

| # | Écran | Priorité | Statut Figma | Frame de référence |
|---|-------|----------|--------------|-------------------|
| 1 | Liste chantiers / dashboard | P1 | ✅ Validé Morris | 01 — Dashboard cockpit premium |
| 2 | Création chantier | P1 | ✅ Validé Morris | 04 — Création chantier |
| 3 | Fiche chantier (pivot) | P1 | ✅ Validé Morris | 02 / 03 — Fiche chantier |
| 4 | Section tâches | P1 | ✅ Validé Morris | 02 — Fiche chantier — Tâches |
| 5 | Section réserves | P1 | ✅ Validé Morris | 03 — Fiche chantier — Réserves |
| 6 | Section jalons / planning simple | P2 | ⏳ Non produit | — |
| 7 | Section comptes rendus | P2 | ⏳ Non produit | — |
| 8 | Vue prochaines actions | P2 | ⏳ Non produit | — |

**Source UX détaillée :** `screen-map.md`, `wireframes-functional.md`, `screen-design-spec.md`

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

**Statut gate P1 :** ✅ **OK avec réserves mineures de polish** — validation Morris 2026-07-06

**Architecture technique et delivery code :** ⏳ Non lancés — GO architecture soumis au merge de ce cycle design + décision Morris explicite

---

**Automation level :** L2–L3 — génération docs repo ; validation visuelle Morris (L0).

**Références :** `sfia-v2-design-figma-cycle-standard.md`, `02-ux-ui/`, `03-backlog/` (lecture seule)
