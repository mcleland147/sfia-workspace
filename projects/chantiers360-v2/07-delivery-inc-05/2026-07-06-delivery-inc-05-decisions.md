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
| Backlog / `2026-07-05-functional-decisions.md` §5 | Prochaines actions **100 % dérivées** — pas de saisie manuelle |
| Prompt delivery (modèle `prochaines_actions`) | Table + formulaire manuel — **non retenu** |

**Décision D4 :** suivre le backlog et `2026-07-05-functional-decisions.md` — **pas de migration ni table `prochaines_actions`**. Agrégation depuis `taches`, `reserves`, `chantiers` (jalons + retard).

## Décisions techniques

| # | Décision | Valeur |
|---|----------|--------|
| D5 | Route vue transverse | `/prochaines-actions` |
| D6 | Navigation US-13 | `/chantiers/[id]?tab=taches|reserves|jalons` |
| D7 | Sources agrégées | Tâches (À faire/En cours), réserves (Ouverte/En cours de traitement), jalons (intervention/jalon), statut En retard |
| D8 | Retard | Via statut chantier `En retard` (INC-01) — pas de champ booléen séparé |
| D9 | R-UX-01 — frame Figma `/prochaines-actions` | **Accepté sans maquette dédiée** — extrapolation patterns UI existants ; pas de rattrapage design ce cycle |

## Décisions de sortie

| # | Décision | Statut |
|---|----------|--------|
| V1 | Livraison INC-05 complète | ✅ |
| V2 | QA-G3 + PR readiness | ✅ **GO QA WITH RESERVES** Morris (2026-07-07) — `2026-07-07-pr-readiness-inc-05.md` |
| V3 | QA-G4 post-merge PR #125 | ✅ **QA-G4 OK WITH RESERVES** (2026-07-07) — `2026-07-07-qa-g4-post-merge-report.md` ; PR #126 `6e5ec82` |
| V4 | Clôture INC-05 | ✅ **INC-05 CLOSED WITH RESERVES** — Morris (2026-07-07) — `2026-07-07-inc-05-closure-report.md` |
| V5 | GO post-MVP | ❌ **Non accordé** — décisions séparées |
| V6 | INC-05 CLOSED WITH RESERVES | ✅ Acté (2026-07-07) — aligné V4 |
| V7 | GO post-MVP | ❌ **Non accordé** |
| V8 | Capitalisation MVP | ⏳ **Non lancée** |
| V9 | Comparaison V0 | ⏳ **Non lancée** — fin de pilote uniquement |

---

**Documents liés :** `2026-07-07-delivery-inc-05-implementation-report.md`, `2026-07-07-inc-05-closure-report.md`, `2026-07-07-pr-readiness-inc-05.md`, `../../03-backlog/delivery-increments.md`
