# Chantiers360 v2 — Rapport comparaison visuelle spike

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/06-figma-fidelity-spike/2026-07-06-visual-comparison-report.md`  
**Date :** 2026-07-06  
**Référence :** capture `01-dashboard-cockpit-premium.png` vs implémentation `app/` route `/`

## Tableau de comparaison

| Zone | Figma / capture | Implémentation spike | Statut | Commentaire |
|------|-----------------|----------------------|--------|-------------|
| **Sidebar** | Navy étroit, icônes, avatar AL | Sidebar 72px, icônes SVG, avatar violet | acceptable | Icônes simplifiées — formes proches |
| **Hero** | Fond navy, titre, CTA blanc pill | Hero navy-hero, même hiérarchie | OK | Titre et CTA alignés |
| **Stats grid** | 2×2 métriques colorées | 2×2 cartes navy-card | OK | Couleurs accent proches |
| **Nav pills** | Tableau de bord actif | Pills hero top nav | acceptable | Espacement légèrement différent |
| **Cartes chantier** | 6 cartes, accent top, progress ring | 6 cartes mock, ring SVG | OK | Structure et densité proches |
| **Badges retard** | Pills jaune « Retard Xj » | RetardBadge amber | OK | 2 cartes avec retard |
| **Filtres** | Tous / En cours / En retard | Filter pills interactifs | OK | État actif dark |
| **Typography** | Sans-serif moderne (Inter-like) | Inter via next/font | OK | — |
| **Colors** | Navy, purple, accents | Tailwind tokens custom | acceptable | Hex approximatifs |
| **Spacing** | Grille aérée | gap-4 / p-5 / px-8 | acceptable | Légère variance padding hero |
| **Ombres / radius** | Cards rounded ~16px, ombre douce | rounded-2xl shadow-card | OK | — |
| **Panneau droit** | Todo + Répartition | RightPanels | OK | Barres colorées présentes |
| **Responsive** | Desktop only design | Desktop fixe — pas de breakpoints | non traité | Hors scope spike |

## Réserves visuelles

1. **Icônes sidebar** — SVG génériques, pas export Figma exact
2. **Progress ring** — taille et épaisseur trait légèrement différents
3. **Nav hero** — pills moins compactes que capture
4. **Responsive** — non implémenté (desktop référence uniquement)
5. **Polish micro** — espacements ±2–4px possibles vs Figma

## Verdict

**VALIDATED FOR PR — minor reserves accepted by Morris**

Fidélité globale **pixel-close** sur desktop validée Morris (D1). Réserves mineures acceptées (D2) — aucune correction bloquante requise avant PR.

> **D3 — GO delivery INC-01 : non accordé.** Merge du spike ≠ autorisation delivery.
