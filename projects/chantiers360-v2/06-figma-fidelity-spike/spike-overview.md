# Chantiers360 v2 — Figma Fidelity Spike — Vue d'ensemble

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/06-figma-fidelity-spike/spike-overview.md`  
**Cycle :** Figma Fidelity Spike (post arbitrages PR #103)  
**Branche :** `cycle/chantiers360-v2-figma-fidelity-spike`

## Objectif du spike

Valider que la **stack front validée Morris** (Next.js App Router + React + TypeScript + Tailwind CSS) permet de reproduire la frame Figma P1 **01 — Dashboard cockpit premium** avec une **fidélité visuelle élevée / pixel-close** sur desktop de référence (~1440px).

## Périmètre strict

| Inclus | Détail |
|--------|--------|
| Route `/` | Dashboard uniquement |
| Composants locaux | Sidebar, hero, cartes chantier, badges, panneaux latéraux |
| Données | Mock statiques — `app/data/mockChantiers.ts` |
| Stack spike | Next.js 15 + Tailwind 3 |

## Frame cible

| Élément | Valeur |
|---------|--------|
| **Frame** | 01 — Dashboard cockpit premium |
| **Node ID** | `38:502` |
| **Capture** | `04-design/captures/01-dashboard-cockpit-premium.png` |

## Hors périmètre

- Création chantier, fiche chantier, tâches, réserves, jalons, CR, prochaines actions
- US-01 à US-04 — **INC-01 non lancé**
- PostgreSQL, Drizzle, migrations, SQL
- Authentification
- API réelles
- Delivery INC-01 complet

## Lien M8 / M9

- **M8** — Figma Fidelity Spike validé Morris : ce cycle l'exécute
- **M9** — Frame Dashboard `38:502` : seule frame implémentée

## Rappel

**Delivery INC-01 (M7) reste non autorisé.** Ce spike ne constitue pas un GO delivery.

---

**Documents liés :** `figma-reference.md`, `2026-07-06-visual-comparison-report.md`, `2026-07-06-spike-decisions.md`, `2026-07-06-spike-readiness.md`
