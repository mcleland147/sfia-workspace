# SFIA Studio Next — Review Pack FULL
# ML4C / CP2 — ENV-B — Sécurisation des tests PostgreSQL

**Date/heure :** 2026-11-11 16:38 CET
**Cycle :** 7 — Intégration / DevOps
**Profil :** Standard — sécurisation dispositif de test
**Macro-lot :** ML4C / CP2 ENV-B
**Versioning :** NO RELEASE
**Publisher :** Cursor
**ENV-C cleanup / ENV-D LIVE / ML4C build :** NON AUTORISÉS

---

## 1. Git Truth Check

| Item | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Worktree | `sfia-workspace-ml4c-cp2-t2-diag-20261111` |
| Baseline main | `42aa373947446a8c20694b06c559ee0da1cba580` |
| Branche corrective locale | `fix/next-env-b-vitest-pg-gate` |
| HEAD correctif | `b7166fd8ef99452af33413c2b77a67fc9ed20bac` |
| Tree | `7c17e56bdfdb1d35ca77adadf4ede21fdcbd5765` |
| Docs CP2 | `ab0c2ba3…` (non modifiée) |
| Handoff ENV-01 | `795a6ded…` |
| Push projet / PR / merge | **NON** |
| Upstream branche | **aucun** (local only) |

---

## 2. Sources

- ENV-01 handoff + main ENV-01 / versioning blobs
- `e2e-pg-gate.ts`, Vitest config, db/client, suites PG, README
- Décisions/contrats CP2 lus sur branche candidate (non mergés dans ce correctif)

---

## 3. Fichiers modifiés

| Fichier | Nature |
| --- | --- |
| `web/src/lib/e2e-pg-gate.ts` | `assertApprovedVitestMutativeDatabaseUrl` + `prepareVitestMutativeDatabaseUrl` |
| `web/tests/setup/vitest-pg-target.ts` | **nouveau** setup Vitest fail-closed |
| `web/vitest.config.ts` | `setupFiles` |
| `web/src/db/client.ts` | assert e2e si `VITEST=true` avant `postgres()` |
| `mission-continuity-accept01.pg.test.ts` | retire `/5433\|sfia_next_dev/` → exige `/sfia_next_e2e` |
| `intent-continuity-global.pg.test.ts` | idem |
| `tests/unit/e2e-pg-gate.test.ts` | preuves A/B/C + prepare |
| `web/README.md` | doc technique Vitest PG ENV-B |

---

## 4. Conception

Contrôle **centralisé**, échec par défaut :
1. `setupFiles` résout `DATABASE_URL` → `sfia_next_e2e` (rewrite **process** depuis opérateur approuvé, sans éditer `.env.local`).
2. `db/client.ts` sous Vitest refuse toute URL non-e2e **avant** ouverture socket.
3. Playwright conserve `assertApprovedOperatorDatabaseUrl` / preflight inchangés dans le rôle.
4. Unit sans `DATABASE_URL` : setup no-op.

Droits PG complémentaires : rôle actuel peut atteindre opérateur et e2e — **non modifié** ce cycle ; réserve pour GO ultérieur (rôle test read/write e2e-only).

---

## 5. Preuves A–G

| Preuve | Résultat | Méthode |
| --- | --- | --- |
| A — refuse `sfia_next_dev` | **PASS** | unit `VITEST_PG_TARGET_FORBIDDEN` + node assert (no network) |
| B — refuse absent/invalide/ambigu | **PASS** | unit gate |
| C — `sfia_next_e2e` autorisé | **PASS** | unit + Vitest A05 integration |
| D — lancement direct fichier PG | **PASS** | `vitest run …/create-project.pg.test.ts -t A05` |
| E — unit sans base | **PASS** | `document-act` 94 PASS |
| F — Playwright gate | **PASS** | unit operator/preflight existants inchangés (8 tests fichier gate) |
| G — aucune écriture opérateur | **PASS** | READ ONLY : pilots 8850 / max `created_at` inchangé avant/après A05 ; A05 créé sur e2e (count last 2 min = 1) |

Logs locaux : `.tmp-sfia-review/env-b-*.log|txt` (non versionnés).

---

## 6. Non-régression / environnements

- Conteneurs observés : DEV :5433, RECETTE :5434 (non mutés), :3200 listen non utiliséé.
- `sfia_next_dev` : lecture seule pour preuve G uniquement.
- Branche locale seulement ; main / docs CP2 non poussés.

---

## 7. Réserves et décisions Morris

| Réserve | Exit |
| --- | --- |
| Pas de push/PR du correctif | GO publication projet distinct |
| ENV-C cleanup 25 pilots | GO CLEANUP distinct |
| Séparation rôles PG | GO ultérieur |
| ENV-D LIVE | non autorisé |
| ML4C build global | non autorisé |

---

## 8. Actions non exécutées

Cleanup ; LIVE Nora ; mutation RECETTE/STABLE ; changement permissions PG ; push/PR/merge projet.

---

## 9. Verdict

**ENV-B IMPLEMENTED — SAFETY VERIFIED**

Aucune écriture opérateur durant la preuve A05. Refus opérateur démontré sans connexion mutative.

---

## 10. Instruction ChatGPT §9.1

Avant revue : lire à distance `sfia/review-handoff` / `sfia-review-handoff/latest-chatgpt-review.md`, vérifier SHAs, preuves et réserves.

---

## 11. Git Review Index

| Ref | SHA |
| --- | --- |
| main baseline | 42aa373947446a8c20694b06c559ee0da1cba580 |
| Correctif local HEAD | b7166fd8ef99452af33413c2b77a67fc9ed20bac |
| Tree | 7c17e56bdfdb1d35ca77adadf4ede21fdcbd5765 |
| ENV-01 handoff | 795a6ded899e23e9c6505deaa3725dd8ebf5c388 |
| Docs CP2 | ab0c2ba3affc1556d2e5a57d863af20685509de1 |
