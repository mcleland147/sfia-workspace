# Chantiers360 v2 — Décisions design

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/04-design/design-decisions.md`  
**Cycle :** Design Figma MVP — rattrapage

> Trace des décisions design. Arbitrages structurants = **Morris**.

## 1. Contexte cycle

| # | Décision | Détail | Statut |
|---|----------|--------|--------|
| 1 | Design Figma introduit en **rattrapage post-backlog** | Backlog mergé PR #99 avant standard Figma PR #100 | ✅ Documenté |
| 2 | Rattrapage **n'invalide pas** le backlog | Alignement via `design-to-backlog-alignment.md` si écarts | ✅ Documenté |
| 3 | Standard SFIA v2.0 appliqué | `sfia-v2-design-figma-cycle-standard.md` | ✅ PR #100 |

## 2. Doctrine Git / Figma

| # | Décision | Détail | Statut |
|---|----------|--------|--------|
| 4 | **Git = source de vérité** méthodologique | Brief, spec, checklist, décisions, alignement backlog versionnés | ✅ Confirmé |
| 5 | **Figma ≠ source unique** | Validation visuelle externe — arbitrages scope/backlog dans repo | ✅ Confirmé |
| 6 | Automatiser la doc, pas la validation visuelle | Cursor L2–L3 docs ; Morris L0 validation design | ✅ Confirmé |

## 3. Fidélité et périmètre visuel

| # | Décision | Détail | Statut |
|---|----------|--------|--------|
| 7 | Niveau fidélité cible | **Moyenne fidélité** recommandée — basse autorisée | ✅ Documenté |
| 8 | Haute fidélité | Optionnelle — non requise MVP | ✅ Confirmé |
| 9 | Design system complet | **Hors cible** initiale — composants minimaux | ✅ Confirmé |
| 10 | Écrans P1 prioritaires | Liste, création/édition, fiche, tâches, réserves | ✅ Hérité UX PR #98 |
| 11 | Écrans P2 secondaires | Jalons, comptes rendus, prochaines actions | ✅ Hérité UX PR #98 |

## 4. Prototype et lien Figma

| # | Décision | Détail | Statut |
|---|----------|--------|--------|
| 12 | Prototype simple | Recommandé si utile — parcours P1 minimum | ⏳ Morris |
| 13 | Lien Figma | Fichier créé — lien renseigné dans `figma-brief.md` §3 ; écrans MVP à produire | ✅ Fichier Figma créé / lien renseigné |

## 5. Exclusions confirmées

| # | Exclusion | Statut |
|---|-----------|--------|
| 14 | Devis | ❌ Hors MVP |
| 15 | Facturation | ❌ Hors MVP |
| 16 | Intégrations comptables | ❌ Hors MVP |
| 17 | Accès client | ❌ Hors MVP |
| 18 | Planning avancé / Gantt | ❌ Hors MVP |
| 19 | V0 | ❌ Non consultée — from scratch |
| 20 | Code / app / backend | ❌ Hors cycle |

## 6. Arbitrages Morris en attente

| # | Arbitrage | Options | Statut |
|---|-----------|---------|--------|
| 21 | Pattern navigation sections fiche | Onglets horizontaux vs liste latérale vs autre | ⏳ Morris |
| 22 | Placement toggle retard | En-tête fiche vs formulaire édition | ⏳ Morris |
| 23 | Densité visuelle liste chantiers | Cartes vs lignes compactes | ⏳ Morris |
| 24 | Production prototype Figma | Oui / Non / P1 only | ⏳ Morris |

## 7. Décision requise avant architecture technique

| # | Gate | Prérequis | Statut |
|---|------|-----------|--------|
| 25 | **Gate Morris design** | Validation visuelle P1 + checklist complétée | ⏳ En attente |
| 26 | Alignement backlog | `design-to-backlog-alignment.md` — écarts traités ou confirmés absents | ⏳ En attente |
| 27 | **GO architecture technique** | Après gate design + pas d'écart backlog bloquant | ⏳ Non autorisé |
| 28 | **GO delivery code** | Après architecture technique validée | ⏳ Non autorisé |

## 8. Héritage UX/UI (non remis en cause)

Décisions héritées `ux-decisions.md` — maintenues pour Figma :

- Entrée principale = liste chantiers
- Fiche chantier = pivot
- Prochaines actions = vue transverse dérivée
- Retard manuel — pas de calcul auto MVP
- Planning simple visible mais non dominant
- Compte rendu : date auto + contenu libre

---

**Automation level :** L2 — gate Morris avant cycles suivants.

**Documents liés :** `figma-brief.md`, `figma-review-checklist.md`, `design-to-backlog-alignment.md`
