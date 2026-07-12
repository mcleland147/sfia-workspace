# Chantiers360 v2 — Décisions design

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/04-design/2026-07-06-design-decisions.md`  
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

## 3. Direction visuelle premium retenue (Morris)

| # | Élément | Détail | Statut |
|---|---------|--------|--------|
| 7 | **Dashboard cockpit premium** | Frame 01 — liste chantiers / entrée principale | ✅ Validé Morris |
| 8 | **Hero sombre** | En-tête fiche chantier — identité + statut | ✅ Validé Morris |
| 9 | **Sidebar compacte** | Navigation latérale — structure app | ✅ Validé Morris |
| 10 | **Accent violet** | Couleur d'accent direction premium | ✅ Validé Morris |
| 11 | **Cartes chantier premium** | Liste dashboard — statut + retard visibles | ✅ Validé Morris |
| 12 | **Fiche tâches / réserves controlled premium** | Frames 02/03 — onglets, sections distinctes | ✅ Validé Morris |
| 13 | **Formulaire création chantier sobre et stable** | Frame 04 — champs minimaux, layout stable | ✅ Validé Morris |

**Frames non retenues :** toutes les autres frames Figma = explorations / archives — **exclues** de la référence design.

## 4. Fidélité et périmètre visuel

| # | Décision | Détail | Statut |
|---|----------|--------|--------|
| 14 | Niveau fidélité atteint | Moyenne fidélité — polish mineur possible | ✅ Validé Morris |
| 15 | Design system complet | **Hors cible** — direction premium sans bibliothèque exhaustive | ✅ Confirmé |
| 16 | Écrans P1 | Dashboard, création, fiche, tâches, réserves — **produits et validés** | ✅ Validé Morris |
| 17 | Écrans P2 | Jalons, comptes rendus, prochaines actions — **non produits** | ⏳ Ultérieur |

## 5. Prototype et lien Figma

| # | Décision | Détail | Statut |
|---|----------|--------|--------|
| 18 | Lien Figma | Page `38:2` MVP P1 — 4 frames node-ids documentés `figma-brief.md` §3 | ✅ Renseigné |
| 19 | Prototype simple | P1 uniquement ou à confirmer selon statut Figma | ⏳ Morris |

## 6. Apprentissage méthode (capitalisation pilote)

| # | Apprentissage | Détail |
|---|---------------|--------|
| 20 | **Figma AI + direction validée** | Figma AI fonctionne mieux avec une **direction visuelle validée** puis déclinaison **écran par écran** |
| 21 | **Génération multi-écrans rejetée** | Génération multi-écrans **non contrôlée** rejetée — frames exploratoires archivées, non retenues comme référence |

## 7. Arbitrages Morris tranchés

| # | Arbitrage | Décision retenue | Statut |
|---|-----------|------------------|--------|
| 22 | Navigation sections fiche | **Onglets** horizontaux | ✅ Morris |
| 23 | Placement retard | **Badge visible** dans hero / fiche | ✅ Morris |
| 24 | Densité liste chantiers | **Cartes premium** (dashboard cockpit) | ✅ Morris |
| 25 | Prototype Figma | **P1 uniquement** ou à confirmer selon statut Figma | ⏳ Morris |

## 8. Exclusions confirmées

| # | Exclusion | Statut |
|---|-----------|--------|
| 26 | Devis | ❌ Hors MVP |
| 27 | Facturation | ❌ Hors MVP |
| 28 | Intégrations comptables | ❌ Hors MVP |
| 29 | Accès client | ❌ Hors MVP |
| 30 | Planning avancé / Gantt | ❌ Hors MVP |
| 31 | V0 | ❌ Non consultée — from scratch |
| 32 | Code / app / backend | ❌ Hors cycle |

## 9. Gates et cycles suivants

| # | Gate | Prérequis | Statut |
|---|------|-----------|--------|
| 33 | **Gate Morris design P1** | Validation visuelle P1 + checklist | ✅ **OK avec réserves mineures** |
| 34 | Alignement backlog | Aucun écart bloquant | ✅ Confirmé |
| 35 | **GO architecture technique** | Merge cycle design + décision Morris explicite | ⏳ **Non autorisé** avant merge |
| 36 | **GO delivery code** | Après architecture technique validée | ❌ **Non autorisé** |

## 10. Héritage UX/UI (non remis en cause)

Décisions héritées `2026-07-05-ux-decisions.md` — maintenues pour Figma :

- Entrée principale = liste chantiers / dashboard
- Fiche chantier = pivot
- Prochaines actions = vue transverse dérivée (P2 — non produite)
- Retard manuel — badge visible, pas de calcul auto MVP
- Planning simple visible mais non dominant (P2 — non produit)
- Compte rendu : date auto + contenu libre (P2 — non produit)

---

**Automation level :** L2 — gate Morris P1 validé ; architecture/delivery différés.

**Documents liés :** `figma-brief.md`, `figma-review-checklist.md`, `design-to-backlog-alignment.md`
