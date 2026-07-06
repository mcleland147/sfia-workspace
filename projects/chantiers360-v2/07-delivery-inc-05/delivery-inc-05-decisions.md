# Chantiers360 v2 — Delivery INC-05 — Décisions

**Branche :** `delivery/chantiers360-v2-inc-05`  
**Base :** `3f7acfe` (main post-clôture INC-04)

## Décisions d'entrée

| # | Décision | Valeur |
|---|----------|--------|
| D1 | GO INC-05 Morris | ✅ Accordé (2026-07-06) |
| D2 | US confirmées backlog | **US-12, US-13** — `delivery-increments.md` |
| D3 | Dépendance INC-04 | ✅ INC-04 CLOSED WITH RESERVES |

## Arbitrage périmètre — backlog vs modèle manuel

| Source | Position |
|--------|----------|
| Backlog / `functional-decisions.md` §5 | Prochaines actions **100 % dérivées** — pas de saisie manuelle |
| Prompt delivery (modèle `prochaines_actions`) | Table + formulaire manuel — **non retenu** |

**Décision D4 :** suivre le backlog et `functional-decisions.md` — **pas de migration ni table `prochaines_actions`**. Agrégation depuis `taches`, `reserves`, `chantiers` (jalons + retard).

## Décisions techniques

| # | Décision | Valeur |
|---|----------|--------|
| D5 | Route vue transverse | `/prochaines-actions` |
| D6 | Navigation US-13 | `/chantiers/[id]?tab=taches|reserves|jalons` |
| D7 | Sources agrégées | Tâches (À faire/En cours), réserves (Ouverte/En cours de traitement), jalons (intervention/jalon), statut En retard |
| D8 | Retard | Via statut chantier `En retard` (INC-01) — pas de champ booléen séparé |

## Décisions de sortie

| # | Décision | Statut |
|---|----------|--------|
| V1 | Livraison INC-05 complète | ✅ |
| V2 | QA-G3 requis avant PR | ⏳ En attente Morris |
| V3 | Clôture INC-05 | ⏳ Hors ce cycle |
| V4 | GO post-MVP | ⏳ Hors scope |

---

**Documents liés :** `delivery-inc-05-implementation-report.md`, `../../03-backlog/delivery-increments.md`
