# Chantiers360 v2 — Décisions spike Figma Fidelity

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/06-figma-fidelity-spike/spike-decisions.md`

## Décisions prises dans le spike

| # | Décision | Détail |
|---|----------|--------|
| S1 | Emplacement app | `projects/chantiers360-v2/app/` |
| S2 | Framework | Next.js 15 App Router |
| S3 | Styling | Tailwind CSS 3 — tokens custom navy/accent |
| S4 | Données | Mock statique `data/mockChantiers.ts` — 6 chantiers alignés capture |
| S5 | Progress indicator | SVG ring inline — pas de lib chart |
| S6 | Filtres | Client state local — pas de routing |
| S7 | Icônes | SVG inline Heroicons-like — pas d'export Figma |
| S8 | Font | Inter via `next/font/google` |

## Adaptations visuelles

| Adaptation | Raison |
|------------|--------|
| Couleurs hex custom Tailwind | Pas de tokens Figma exportés |
| Sidebar 72px fixe | Approximation largeur capture |
| Panneau droit 300px fixe | Densité proche capture desktop |

## Dette / réserves

- Icônes non issues du fichier Figma
- Responsive non traité
- Filtres non persistés — spike UI only
- Boutons non cliquables (pas de navigation)

## Décisions Morris attendues

| # | Question | Options |
|---|----------|---------|
| D1 | Fidélité pixel-close acceptable ? | Oui / Corrections mineures / Non |
| D2 | Corrections requises avant delivery ? | Liste ou aucune |
| D3 | GO delivery INC-01 possible après corrections ? | GO / NO-GO — M7 toujours requis |

> **M7 non accordé** — validation spike ≠ GO delivery INC-01.

---

**Documents liés :** `visual-comparison-report.md`, `spike-readiness.md`
