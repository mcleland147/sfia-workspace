# Review Pack FULL — Correct Option A CI Node Runtime and Re-run PR CI

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 17:45:25 CEST (+0200) — Europe/Paris |
| **Cycle** | Intégration / DevOps — Correction CI Node 24 + rerun |
| **Profil** | Critical |
| **Gate** | `GO CORRECT OPTION A CI NODE RUNTIME AND RE-RUN PR CI — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-option-a-ci-governance` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-ci-merge-governance` |
| **HEAD initial** | `08cf62efb0bc6ac046bf82791a56a9f53e80ffeb` |
| **SHA distant initial** | `ff10c92246e624736164fdd5f1bb97a03772d33e` |
| **HEAD final** | `dc461a1d6adf9e743e2585850561985ff4031c9e` |
| **SHA distant final** | `dc461a1d6adf9e743e2585850561985ff4031c9e` |
| **origin/main** | `910de87a9dad00491cd32cb6b439ce13cbc7bceb` |
| **PR** | [#268](https://github.com/mcleland147/sfia-workspace/pull/268) |
| **Handoff source** | blob `0d2ae9aeb649baada7d52b1ec382fac5de217e34` |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A CI NODE RUNTIME CORRECTED — GITHUB ACTIONS STILL FAILING, ADDITIONAL REVIEW REQUIRES MORRIS GO` |
| **Gate suivant** | `GO REVIEW OPTION A CI CORRECTED RUN FAILURE — SFIA STUDIO V3-NATIVE` (**NOT consumed**) |

---

## 1. Truth Check / Git

Truth Check **PASS**. Status final:

```
## delivery/sfia-studio-v3-native-option-a-ci-merge-governance...origin/delivery/sfia-studio-v3-native-option-a-ci-merge-governance
?? .tmp-sfia-review/
```

Commits vs main:

```
dc461a1 docs(sfia-studio): record corrected CI run failure outcome
b0ad1e3 docs(sfia-studio): record CI Node runtime correction
e322bf6 ci(sfia-studio): use Node 24 for project validation
08cf62e docs(sfia-studio): review CI governance PR failure
ff10c92 docs(sfia-studio): align doc 25 HEAD final SHA
941701f docs(sfia-studio): pin publication document HEAD SHA
4678333 docs(sfia-studio): record CI governance pull request
67a7a1f docs(sfia-studio): prepare CI governance branch publication
5dd1b50 docs(sfia-studio): define CI and merge governance
2492069 ci(sfia-studio): prepare project validation workflow
aef7fd6 docs(sfia-studio): frame next Option A step after T-A6
1f25857 docs(sfia-studio): record T-A6 post-merge review
```

Push standard non forcé. Pas de merge/rebase/amend/force-push. Pas de package/lockfile/runtime/tests/modeled.

---

## 2. Cause / correction

F-CI-05 : Node 20 × `node:sqlite` au build.
Correction exacte : `node-version: "20"` → `"24"` (seule ligne).

### Workflow avant

```yaml
name: SFIA Studio CI

on:
  pull_request:
    paths:
      - "projects/sfia-studio/**"
      - ".github/workflows/sfia-studio-ci.yml"
  push:
    branches:
      - main
    paths:
      - "projects/sfia-studio/**"
      - ".github/workflows/sfia-studio-ci.yml"

permissions:
  contents: read

concurrency:
  group: sfia-studio-ci-${{ github.workflow }}-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true

jobs:
  validate:
    name: Build and validate SFIA Studio
    runs-on: ubuntu-latest
    timeout-minutes: 30
    defaults:
      run:
        shell: bash
        working-directory: projects/sfia-studio/app
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: npm
          cache-dependency-path: projects/sfia-studio/app/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Typecheck
        run: npm run typecheck

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Unit tests (Vitest)
        run: npm test

      - name: Modeled governance tests
        working-directory: projects/sfia-studio
        run: |
          node --test \
            sfia-v3-modeled/v3-native-option-a/tests/evidence-review-maturity-governance.test.mjs \
            sfia-v3-modeled/v3-native-option-a/tests/execution-contract-governance.test.mjs \
            sfia-v3-modeled/v3-native-option-a/tests/execution-attempt-governance.test.mjs

      - name: Secret pattern scan (targeted)
        working-directory: ${{ github.workspace }}
        run: |
          set -euo pipefail
          # Fail closed on common high-signal secret markers under Studio paths.
          # No external scanner dependency; patterns are intentionally narrow.
          matches="$(git grep -nE 'BEGIN (RSA |OPENSSH )?PRIVATE KEY|AKIA[0-9A-Z]{16}' -- 'projects/sfia-studio' || true)"
          if [ -n "${matches}" ]; then
            echo "Potential secret material detected under projects/sfia-studio:" >&2
            printf '%s\n' "${matches}" >&2
            exit 1
          fi
          echo "Secret pattern scan passed"

      - name: Trailing whitespace check
        working-directory: ${{ github.workspace }}
        run: |
          set -euo pipefail
          if [ "${{ github.event_name }}" = "pull_request" ]; then
            BASE_SHA="${{ github.event.pull_request.base.sha }}"
            git diff --check "${BASE_SHA}...HEAD"
          else
            # Push to main: check the pushed commit range when available.
            BEFORE="${{ github.event.before }}"
            if [ -n "${BEFORE}" ] && [ "${BEFORE}" != "0000000000000000000000000000000000000000" ]; then
              git diff --check "${BEFORE}...HEAD"
            else
              echo "No previous SHA available; skipping whitespace range check"
            fi
          fi
```

### Workflow après

```yaml
name: SFIA Studio CI

on:
  pull_request:
    paths:
      - "projects/sfia-studio/**"
      - ".github/workflows/sfia-studio-ci.yml"
  push:
    branches:
      - main
    paths:
      - "projects/sfia-studio/**"
      - ".github/workflows/sfia-studio-ci.yml"

permissions:
  contents: read

concurrency:
  group: sfia-studio-ci-${{ github.workflow }}-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true

jobs:
  validate:
    name: Build and validate SFIA Studio
    runs-on: ubuntu-latest
    timeout-minutes: 30
    defaults:
      run:
        shell: bash
        working-directory: projects/sfia-studio/app
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "24"
          cache: npm
          cache-dependency-path: projects/sfia-studio/app/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Typecheck
        run: npm run typecheck

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Unit tests (Vitest)
        run: npm test

      - name: Modeled governance tests
        working-directory: projects/sfia-studio
        run: |
          node --test \
            sfia-v3-modeled/v3-native-option-a/tests/evidence-review-maturity-governance.test.mjs \
            sfia-v3-modeled/v3-native-option-a/tests/execution-contract-governance.test.mjs \
            sfia-v3-modeled/v3-native-option-a/tests/execution-attempt-governance.test.mjs

      - name: Secret pattern scan (targeted)
        working-directory: ${{ github.workspace }}
        run: |
          set -euo pipefail
          # Fail closed on common high-signal secret markers under Studio paths.
          # No external scanner dependency; patterns are intentionally narrow.
          matches="$(git grep -nE 'BEGIN (RSA |OPENSSH )?PRIVATE KEY|AKIA[0-9A-Z]{16}' -- 'projects/sfia-studio' || true)"
          if [ -n "${matches}" ]; then
            echo "Potential secret material detected under projects/sfia-studio:" >&2
            printf '%s\n' "${matches}" >&2
            exit 1
          fi
          echo "Secret pattern scan passed"

      - name: Trailing whitespace check
        working-directory: ${{ github.workspace }}
        run: |
          set -euo pipefail
          if [ "${{ github.event_name }}" = "pull_request" ]; then
            BASE_SHA="${{ github.event.pull_request.base.sha }}"
            git diff --check "${BASE_SHA}...HEAD"
          else
            # Push to main: check the pushed commit range when available.
            BEFORE="${{ github.event.before }}"
            if [ -n "${BEFORE}" ] && [ "${BEFORE}" != "0000000000000000000000000000000000000000" ]; then
              git diff --check "${BEFORE}...HEAD"
            else
              echo "No previous SHA available; skipping whitespace range check"
            fi
          fi
```

---

## 3. Validation locale Node 24.16.0

npm 11.13.0 · npm ci / typecheck / lint / build / Vitest 655 / modeled 73 / secret / YAML : PASS · actionlint ABSENT · audit 12 high.

---

## 4. Run corrigé 30208754162

- URL: https://github.com/mcleland147/sfia-workspace/actions/runs/30208754162
- Head: `b0ad1e35c1a6f91ff37529e3427eb1e2b5a7c3b1`
- Node CI: **v24.18.0**
- Conclusion: **failure**
- PASS: checkout · setup Node 24 · npm ci · typecheck · lint · **build** · Vitest · modeled · secret
- FAIL: Trailing whitespace (`27-…md:53`) — **non corrigé**
- F-CI-06 OPEN Minor
- Qualification: `GITHUB ACTIONS CORRECTED RUN FAILED — ADDITIONAL CORRECTIVE REVIEW REQUIRES MORRIS GO`

Run documentaire ultérieur éventuel sur tip `dc461a1d6adf9e743e2585850561985ff4031c9e` : non utilisé pour conclure le correctif Node.

---

## 5. PR body (après mise à jour)

```markdown
## Summary

- ajoute un workflow GitHub Actions dédié à `projects/sfia-studio/**` ;
- formalise la séquence PR readiness → publication → review PR/CI → choix H1/H2/H3 → GO merge → post-merge ;
- ajoute les documents post-merge et cadrage non encore intégrés ;
- ne modifie aucun runtime métier.

## Workflow

- nom : `SFIA Studio CI`
- job : `validate`
- check : `Build and validate SFIA Studio`
- Node : **24** (correctif Morris — remplace 20)
- package manager : npm
- working directory : `projects/sfia-studio/app`
- permissions : `contents: read`
- timeout : 30 minutes

## Correction CI (Node runtime)

- Cause F-CI-05 : Node 20 × `node:sqlite` au `next build`.
- Correctif : `node-version: "20"` → `"24"` uniquement.
- Pas de package.json / lockfile / `.nvmrc` / engines / runtime / tests / modeled.
- Validation locale Node v24.16.0 : PASS (ci, typecheck, lint, build, Vitest 655, modeled 73).

## Run corrigé observé

- Run : https://github.com/mcleland147/sfia-workspace/actions/runs/30208754162
- Head : `b0ad1e3…`
- Node CI : **v24.18.0**
- Conclusion : **failure**
- PASS : checkout · setup Node 24 · npm ci · typecheck · lint · **build** · Vitest · modeled · secret scan
- FAIL : **Trailing whitespace check** (`27-…md:53`) — **non corrigé** dans le cycle Node (interdit)
- Finding F-CI-06 OPEN Minor
- F-CI-05 reste OPEN (run non intégralement vert) ; build Node/sqlite PASS
- F-CI-03 MITIGATED (Node 24 local+CI) — pas de baseline globale

## Governance

- merge **interdit**
- required check **non appliqué**
- H1/H2/H3 non décidé
- cycle suivant : `GO REVIEW OPTION A CI CORRECTED RUN FAILURE — SFIA STUDIO V3-NATIVE`

## Reservations

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 OPEN · C1–C4 RECOMMENDED — NOT VALIDATED · F-A6-PM-G01 OPEN
```

---

## 6. Findings / réserves

- F-A6-PM-G01 OPEN
- F-CI-01 OPEN
- F-CI-02 OPEN
- F-CI-03 MITIGATED (Node 24) — pas baseline globale
- F-CI-04 OPEN
- F-CI-05 OPEN (build PASS ; run non entièrement vert)
- F-CI-06 OPEN Minor
- B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 OPEN
- C1–C4 RECOMMENDED — NOT VALIDATED
- Protections / required check / auto-merge / H1-H3 / GO merge : non

---

## 7. Document 26 (extrait métadonnées + lien correction)

```
# 26 — CI Governance PR and CI Review (PR #268)

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 15:12:43 CEST (+0200) — Europe/Paris (Truth Check) · finalisation ~15:14 CEST |
| **Cycle** | QA / validation — Revue PR et CI workflow SFIA Studio |
| **Profil** | Critical |
| **Gate** | `GO REVIEW OPTION A CI GOVERNANCE PR AND CI — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-option-a-ci-governance` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-ci-merge-governance` |
| **HEAD local = distant** | `ff10c92246e624736164fdd5f1bb97a03772d33e` |
| **origin/main** | `910de87a9dad00491cd32cb6b439ce13cbc7bceb` |
| **merge-base** | `910de87…` |
| **avance/retard** | **+8 / −0** |
| **PR** | [#268](https://github.com/mcleland147/sfia-workspace/pull/268) |
| **Handoff source** | blob `1d27f1ddaf79aeb1a17c4f17e15e873511ebb428` |
| **Correction appliquée** | **NON** |
| **Push projet** | **NON** |
| **Merge** | **INTERDIT** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A CI GOVERNANCE PR REVIEW COMPLETE — CI CORRECTION FRAMED, MORRIS GO REQUIRED` |
| **Gate suivant candidat** | `GO CORRECT OPTION A CI NODE RUNTIME AND RE-RUN PR CI — SFIA STUDIO V3-NATIVE` (**CONSUMED** dans cycle suivant — voir [27](./27-ci-node-runtime-correction-and-rerun.md)) |
| **Correction exécutée** | Voir [27-ci-node-runtime-correction-and-rerun.md](./27-ci-node-runtime-correction-and-rerun.md) — Node 24 workflow-only (analyse historique ci-dessous inchangée) |

---

## 1. Truth Check

| Contrôle | Résultat |
|----------|----------|
| Worktree / branche | **PASS** |
| HEAD = `ff10c92…` = upstream = remote | **PASS** |
| `origin/main` = `910de87…` | **PASS** |
| +8 / −0 | **PASS** |
| PR #268 OPEN non-draft non-mergée | **PASS** |
```

(analyse historique inchangée ; lien vers doc 27 ajouté)

---

## 8. Contenu complet document 27

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
| **Verdict provisoire** | remplacé — voir §9 |

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
| SHA distant final | `b0ad1e35c1a6f91ff37529e3427eb1e2b5a7c3b1` |
| Commits poussés | `08cf62e` · `e322bf6` · `b0ad1e3` |
| Run ID / URL | **30208754162** · https://github.com/mcleland147/sfia-workspace/actions/runs/30208754162 |
| Conclusion | **failure** (voir §9) |

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

---

## 9. Résultat run corrigé (observation — sans nouveau correctif)

| Champ | Valeur |
|-------|--------|
| Workflow | SFIA Studio CI |
| Run | 30208754162 |
| Head | `b0ad1e35c1a6f91ff37529e3427eb1e2b5a7c3b1` |
| Node CI observé | **v24.18.0** |
| Conclusion job | **failure** |
| Qualification | `GITHUB ACTIONS CORRECTED RUN FAILED — ADDITIONAL CORRECTIVE REVIEW REQUIRES MORRIS GO` |

Steps PASS : Checkout · Setup Node 24 · npm ci · Typecheck · Lint · **Build** · Vitest · Modeled · Secret scan.

Step FAIL : **Trailing whitespace check** — `27-ci-node-runtime-correction-and-rerun.md:53` trailing whitespace.

**Aucun correctif whitespace appliqué dans ce cycle** (interdit). Finding **F-CI-06** OPEN Minor.

| Finding | Statut après run |
|---------|------------------|
| F-CI-05 | **OPEN** (build PASS sous Node 24 ; run non intégralement vert) |
| F-CI-03 | **MITIGATED** (Node 24 local+CI) · pas de baseline globale |
| F-CI-01 · F-CI-02 · F-CI-04 | **OPEN** |
| F-CI-06 | **OPEN Minor** |
| F-A6-PM-G01 | **OPEN** |

**Verdict exact :**

`SFIA STUDIO V3-NATIVE OPTION A CI NODE RUNTIME CORRECTED — GITHUB ACTIONS STILL FAILING, ADDITIONAL REVIEW REQUIRES MORRIS GO`

**Gate suivant candidat (NOT consumed) :**

`GO REVIEW OPTION A CI CORRECTED RUN FAILURE — SFIA STUDIO V3-NATIVE`

---

## 9. Non-modifications

workflow hors node-version : NON · packages : NON · runtime/tests/modeled : NON · merge : NON · T-A7 : NON · findings CLOSED abusivement : NON · gate suivant consommé : NON

---

## 10. Verdict exact

`SFIA STUDIO V3-NATIVE OPTION A CI NODE RUNTIME CORRECTED — GITHUB ACTIONS STILL FAILING, ADDITIONAL REVIEW REQUIRES MORRIS GO`
