# 27 — CI Node Runtime Correction and Rerun (PR #268)

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 17:40:48 CEST (+0200) — Europe/Paris |
| **Cycle** | Intégration / DevOps — Correction CI Node runtime + rerun PR #268 |
| **Profil** | Critical |
| **Gate** | `GO CORRECT OPTION A CI NODE RUNTIME AND RE-RUN PR CI — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-option-a-ci-governance` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-ci-merge-governance` |
| **HEAD local initial** | `08cf62efb0bc6ac046bf82791a56a9f53e80ffeb` |
| **SHA distant initial** | `ff10c92246e624736164fdd5f1bb97a03772d33e` |
| **origin/main** | `910de87a9dad00491cd32cb6b439ce13cbc7bceb` |
| **merge-base** | `910de87…` |
| **PR** | [#268](https://github.com/mcleland147/sfia-workspace/pull/268) |
| **Handoff source** | blob `0d2ae9aeb649baada7d52b1ec382fac5de217e34` |
| **Correction** | `node-version: "20"` → `"24"` (seule ligne) |
| **Package/lockfile/engines/.nvmrc** | **NON modifiés** |
| **Merge** | **INTERDIT** |
| **Branch protection / required checks** | **PROPOSED — NOT APPLIED** |
| **Verdict provisoire** | `PUBLICATION / RUN IN PROGRESS` — complété après push |

---

## 1. Truth Check

| Contrôle | Résultat |
|----------|----------|
| HEAD local `08cf62e…` · upstream `ff10c92…` · ahead 1 | **PASS** |
| Ahead commit = doc 26 uniquement | **PASS** |
| `origin/main` / merge-base `910de87…` | **PASS** |
| PR #268 OPEN non-draft non-mergée | **PASS** |
| Workflow distant encore Node **20** | **PASS** |
| Handoff `0d2ae9ae…` | **PASS** |
| Runs initiaux failure 30201400028 / 30201461893 | **PASS** |

---

## 2. Cause F-CI-05 (rappel)

Build CI sous Node 20 : `ERR_UNKNOWN_BUILTIN_MODULE` / `node:sqlite` chargé via `lib/d1/db.ts` pendant `next build` (collecte page). Revue doc 26 : Node 22/24 build PASS ; recommandation Morris appliquée = **Node 24 workflow-only**.

---

## 3. Diff exact

```diff
-          node-version: "20"
+          node-version: "24"
```

Fichier : `.github/workflows/sfia-studio-ci.yml`  
Aucune autre ligne modifiée (job, paths, permissions, cache, timeout, concurrency, commandes inchangés).

---

## 4. Validation locale Node 24

| Champ | Valeur |
|-------|--------|
| Node | **v24.16.0** |
| npm | **11.13.0** |
| Source runtime | binaire temporaire `/tmp/sfia-node-repro/...` (hors repo) |

| Commande | rc | Durée |
|----------|-----|-------|
| `npm ci` | 0 | ~6 s |
| `npm run typecheck` | 0 | ~1 s |
| `npm run lint` | 0 | ~4 s |
| `npm run build` | 0 | ~7 s |
| `npm test` | 0 | ~7 s · **71** files · **655** tests PASS |
| modeled `node --test` (3 fichiers) | 0 | <1 s · **73** pass |
| secret scan | PASS | — |
| `git diff --check origin/main...HEAD` | 0 | — |
| YAML parse | YAML_OK | — |
| actionlint | **ABSENT** | — |
| npm audit (sans correction) | 12 high | Observation F-CI-02 |

Warnings : stderr fixtures tests intentionnels ; aucun ExperimentalWarning sqlite sous 24.

---

## 5. Commits / push (à compléter)

| Commit | Message |
|--------|---------|
| `08cf62e…` | `docs(sfia-studio): review CI governance PR failure` (conservé) |
| _(ci)_ | `ci(sfia-studio): use Node 24 for project validation` |
| _(docs)_ | `docs(sfia-studio): record CI Node runtime correction` |

| Champ | Valeur |
|-------|--------|
| Push | `git push origin delivery/sfia-studio-v3-native-option-a-ci-merge-governance` |
| Force | **NON** |
| SHA distant final | _pending_ |
| Run ID / URL | _pending_ |
| Conclusion | _pending_ |

---

## 6. Findings / réserves (statut attendu après run)

| ID | Statut cible |
|----|--------------|
| F-CI-05 | `MITIGATED — REMOTE SUCCESS OBSERVED` **si** run intégralement vert · sinon OPEN |
| F-CI-03 | `MITIGATED` si local+CI Node 24 · pas de baseline globale |
| F-CI-01 | **OPEN** (pas de engines/.nvmrc) |
| F-CI-02 | **OPEN** |
| F-CI-04 | **OPEN** (actionlint absent) |
| F-A6-PM-G01 | **OPEN** |
| B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 | **OPEN** |
| C1–C4 | RECOMMENDED — NOT VALIDATED |

---

## 7. Gouvernance

Même succès CI ≠ PR merge-ready · H1/H2/H3 non décidé · GO merge non proposé · required check non appliqué · revue post-correction obligatoire.

Gate suivant candidat (si vert) :

`GO REVIEW OPTION A CI GOVERNANCE PR AFTER CORRECTION — SFIA STUDIO V3-NATIVE` (**NOT consumed**)

---

## 8. Anti-claims

- Correction ≠ merge autorisé
- Node 24 CI ≠ baseline produit globale
- F-CI-05 mitigé ≠ CLOSED
- F-A6-PM-G01 non clos
- T-A6 / Option A non COMPLETE
- T-A7 non ouvert
