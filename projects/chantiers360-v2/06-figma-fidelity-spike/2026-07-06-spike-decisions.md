# Chantiers360 v2 — Décisions spike Figma Fidelity

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/06-figma-fidelity-spike/2026-07-06-spike-decisions.md`

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

## Décision Morris — revue spike

**Date :** 2026-07-06  
**Frame :** 01 — Dashboard cockpit premium (`38:502`)  
**Référence :** `04-design/captures/01-dashboard-cockpit-premium.png`

| # | Question | Décision Morris | Statut |
|---|----------|-----------------|--------|
| **D1** | Fidélité pixel-close acceptable ? | **Oui** | ✅ Validé |
| **D2** | Corrections requises avant PR ? | **Aucune correction bloquante** | ✅ Validé |
| **D3** | GO delivery INC-01 ? | **Non accordé** à ce stade | ❌ En attente |

### Réserves acceptées (D2)

| Réserve | Statut Morris |
|---------|---------------|
| Icônes SVG génériques | ✅ Acceptée — non bloquante |
| Progress ring légèrement différent | ✅ Acceptée — non bloquante |
| Espacements hero à quelques px près | ✅ Acceptée — non bloquante |
| Responsive non traité | ✅ Acceptée — hors scope spike |

### Synthèse décision

| Élément | Verdict |
|---------|---------|
| **Spike validé pour PR** | ✅ Oui |
| **Passage Figma → Cursor → Next.js/Tailwind** | ✅ Jugé viable |
| **Gate fidélité Figma (M8/M9)** | ✅ Satisfait pour la frame Dashboard |
| **GO delivery INC-01 (M7)** | ❌ **Non accordé** — décision Morris séparée après merge du spike |

> La validation du spike **ne constitue pas** un GO delivery INC-01. Le delivery reste soumis à une décision Morris explicite post-merge.

## Décisions Morris attendues

_Section historique — décisions tranchées le 2026-07-06 (voir section ci-dessus)._

| # | Question | Résultat |
|---|----------|----------|
| D1 | Fidélité pixel-close acceptable ? | ✅ Oui |
| D2 | Corrections requises avant PR ? | ✅ Aucune bloquante |
| D3 | GO delivery INC-01 ? | ❌ Non accordé |

> **M7 non accordé** — validation spike ≠ GO delivery INC-01.

---

**Documents liés :** `2026-07-06-visual-comparison-report.md`, `2026-07-06-spike-readiness.md`
