# Chantiers360 v2 — Delivery INC-01 — Vue d'ensemble

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/07-delivery-inc-01/delivery-inc-01-overview.md`  
**Branche :** `delivery/chantiers360-v2-inc-01`  
**Décision Morris :** M7 — GO delivery INC-01 accordé (2026-07-06)

## Objectif

Livrer le **socle chantier** (INC-01) : création, liste, fiche et modification de statut — avec persistance PostgreSQL local/dev et réutilisation de la direction visuelle du spike Dashboard (PR #104).

## User stories couvertes

| US | Intitulé | Statut |
|----|----------|--------|
| US-01 | Créer un chantier | ✅ |
| US-02 | Consulter la liste des chantiers | ✅ |
| US-03 | Ouvrir une fiche chantier | ✅ |
| US-04 | Modifier le statut d'un chantier | ✅ |

## Hors périmètre INC-01

Tâches, réserves, jalons avancés, comptes rendus, prochaines actions, auth, rôles, espace client, devis, facturation, intégrations comptables, mobile, IA, V0.

## Stack

- Next.js 15 App Router + React 19 + TypeScript
- Tailwind CSS (tokens spike)
- PostgreSQL local/dev
- Drizzle ORM
- Auth : **différée** (M3)

## Routes

| Route | US |
|-------|-----|
| `/` | US-02 — dashboard / liste |
| `/chantiers/nouveau` | US-01 — création |
| `/chantiers/[id]` | US-03, US-04 — fiche + statut |

## Artefacts

- `projects/chantiers360-v2/app/` — application INC-01
- `07-delivery-inc-01/` — documentation delivery

---

**Documents liés :** `2026-07-06-delivery-inc-01-implementation-report.md`, `2026-07-06-delivery-inc-01-validation-report.md`, `2026-07-06-delivery-inc-01-decisions.md`
