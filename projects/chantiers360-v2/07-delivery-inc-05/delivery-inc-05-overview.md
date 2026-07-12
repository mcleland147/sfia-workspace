# Chantiers360 v2 — Delivery INC-05 — Vue d'ensemble

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/07-delivery-inc-05/delivery-inc-05-overview.md`  
**Branche :** `delivery/chantiers360-v2-inc-05`  
**Décision Morris :** GO INC-05 accordé (2026-07-06)

## Objectif

Livrer la **vue prochaines actions dérivées** (INC-05) et la **navigation transverse** vers les sections sources des chantiers.

## User stories couvertes

| US | Intitulé | Statut |
|----|----------|--------|
| US-12 | Consulter les prochaines actions | ✅ |
| US-13 | Naviguer depuis prochaines actions | ✅ |

## Fonctionnalités livrées

| Fonctionnalité | Détail |
|----------------|--------|
| Vue transverse | Route `/prochaines-actions` — agrégation dérivée |
| Sources | Tâches ouvertes, réserves ouvertes, jalons, chantiers en retard |
| Navigation | Lien vers fiche chantier + onglet source (`?tab=`) |
| Accès | Lien depuis hero tableau de bord |
| Persistance | **Aucune table dédiée** — lecture des tables existantes |

## Hors périmètre INC-05

Saisie manuelle d'actions, IA générative, notifications, agenda avancé, workflow validation, affectation multi-utilisateur, espace client, devis/facturation, refonte dashboard, capitalisation post-INC-05, V0, Notion/CMP.

## Stack

- Next.js 15 App Router + React 19 + TypeScript
- Drizzle ORM + PostgreSQL (lecture agrégée)
- Playwright E2E (`e2e/inc-05.spec.ts`)

## Routes impactées

| Route | US |
|-------|-----|
| `/prochaines-actions` | US-12 — vue dérivée |
| `/chantiers/[id]?tab=` | US-13 — navigation section source |

---

**Documents liés :** `2026-07-07-delivery-inc-05-implementation-report.md`, `2026-07-07-delivery-inc-05-validation-report.md`, `2026-07-06-delivery-inc-05-decisions.md`
