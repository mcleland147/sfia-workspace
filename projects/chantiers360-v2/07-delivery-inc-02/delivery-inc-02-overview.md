# Chantiers360 v2 — Delivery INC-02 — Vue d'ensemble

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/07-delivery-inc-02/delivery-inc-02-overview.md`  
**Branche :** `delivery/chantiers360-v2-inc-02`  
**Décision Morris :** GO INC-02 accordé (2026-07-06)

## Objectif

Livrer le suivi opérationnel **tâches et réserves** (INC-02) depuis la fiche chantier existante — persistance PostgreSQL, server actions, UI onglets Tâches / Réserves.

## User stories couvertes

| US | Intitulé | Statut |
|----|----------|--------|
| US-06 | Ajouter une tâche | ✅ |
| US-07 | Changer le statut d'une tâche | ✅ |
| US-08 | Ajouter une réserve | ✅ |
| US-09 | Changer le statut d'une réserve | ✅ |

## Statuts implémentés

| Entité | Statuts |
|--------|---------|
| Tâche | À faire, En cours, Terminée |
| Réserve | Ouverte, En cours de traitement, Levée |

## Hors périmètre INC-02

Jalons (INC-03), comptes rendus (INC-04), prochaines actions (INC-05), auth, espace client, devis/facturation, refonte dashboard, V0.

## Stack

- Next.js 15 App Router + React 19 + TypeScript
- Drizzle ORM + PostgreSQL
- Playwright E2E (`e2e/inc-02.spec.ts`)

## Routes impactées

| Route | US |
|-------|-----|
| `/chantiers/[id]` | US-06 à US-09 — sections Tâches et Réserves |

## Artefacts

- `projects/chantiers360-v2/app/` — code INC-02
- `07-delivery-inc-02/` — documentation delivery
- `08-qa-test/inc-02/` — documentation QA

---

**Documents liés :** `delivery-inc-02-implementation-report.md`, `delivery-inc-02-validation-report.md`, `delivery-inc-02-decisions.md`
