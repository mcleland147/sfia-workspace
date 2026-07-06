# Chantiers360 v2 — Delivery INC-03 — Vue d'ensemble

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/07-delivery-inc-03/delivery-inc-03-overview.md`  
**Branche :** `delivery/chantiers360-v2-inc-03`  
**Décision Morris :** GO INC-03 accordé (2026-07-06)

## Objectif

Livrer le **planning simple / jalons simples** (INC-03) depuis la fiche chantier — champs optionnels sur l'entité `chantiers`, onglet Jalons actif, résumé visible sur la fiche.

## User story couverte

| US | Intitulé | Statut |
|----|----------|--------|
| US-10 | Renseigner des jalons simples | ✅ |

## Champs implémentés (tous optionnels)

| Champ | Libellé UI |
|-------|------------|
| `planned_start_date` | Date de début prévue |
| `planned_end_date` | Date de fin prévue |
| `next_intervention_date` | Prochaine intervention |
| `upcoming_milestone` | Jalon à venir |
| `simple_planning_comment` | Commentaire planning simple |

## Hors périmètre INC-03

INC-04 comptes rendus, INC-05 prochaines actions, planning avancé, Gantt, dépendances, ressources/charges, auth, espace client, devis/facturation, refonte dashboard, V0, Notion/CMP.

## Stack

- Next.js 15 App Router + React 19 + TypeScript
- Drizzle ORM + PostgreSQL
- Playwright E2E (`e2e/inc-03.spec.ts`)

## Routes impactées

| Route | US |
|-------|-----|
| `/chantiers/[id]` | US-10 — onglet Jalons + résumé planning |

## Artefacts

- `projects/chantiers360-v2/app/` — code INC-03
- `07-delivery-inc-03/` — documentation delivery
- `08-qa-test/inc-03/` — documentation QA

---

**Documents liés :** `delivery-inc-03-implementation-report.md`, `delivery-inc-03-validation-report.md`, `delivery-inc-03-decisions.md`
