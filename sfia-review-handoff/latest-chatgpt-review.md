# Review Pack FULL — Prepare Option A Path-Aware Required Check and Main Protection

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-27 01:13:26 CEST (+0200) — Europe/Paris |
| **Cycle** | Intégration / DevOps · QA/validation · capitalisation |
| **Profil** | Critical |
| **Gate** | `GO PREPARE OPTION A PATH-AWARE REQUIRED CHECK AND MAIN PROTECTION IMPLEMENTATION — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation` (**no upstream**) |
| **HEAD** | `e9813524e90d75d7d737b5ef330f8923f75cda43` |
| **Base / origin/main** | `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| **Handoff source** | blob `15b844931aa10244d24fef938ad6f85650c3fde8` |
| **Niveau** | FULL |
| **Push projet / PR / ruleset / protection** | **NON** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A PATH-AWARE REQUIRED CHECK AND MAIN PROTECTION IMPLEMENTATION PREPARED LOCALLY — READY FOR MORRIS PUSH AND PR DECISION` |
| **Gate suivant candidat** | `GO PUBLISH OPTION A PATH-AWARE REQUIRED CHECK BRANCH AND CREATE PR — SFIA STUDIO V3-NATIVE` (**NOT consumed**) |

---

## 1. Truth Check / Git

**PASS** — main `60d9ac9…` · parents #269 OK · protections/rulesets absents · pas de PR concurrente · branche locale dédiée.

### Status final

```
## delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation
?? .tmp-sfia-review/
```

### Commits locaux

```
e981352 docs(sfia-studio): prepare path-aware required check and main protection
b55f2fb ci(sfia-studio): prepare path-aware required gate workflow
```

### name-status

```
M	.github/workflows/sfia-studio-ci.yml
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md
```

---

## 2. Template / CKC / sources

| Élément | Valeur |
|---------|--------|
| Template | `prompts/templates/sfia-cycle-execution-template.md` |
| CKC QA | `pilots/04-qa-validation.md` · candidate · aucune autorité |
| CKC DevOps | **absent** |
| Fallback | méthode + docs 30/31 + workflow + handoff merge #269 |
| Handoff source | blob `15b84493…` — PR #269 MERGED VIA H1 |

---

## 3. Design résumé

P3 path-aware : PR all → detect → validate conditionnel → **SFIA Studio Required Gate** (`always()`, fail-closed).
Push main path-filtered ; treat as Studio-in-scope.
M1 ruleset candidat documenté · **NOT APPLIED**. B2 bypass recommandé · **non validé**.

---

## 4. Validations

| Contrôle | Résultat |
|----------|----------|
| YAML | **PASS** |
| Structure (detect/validate/gate/always/no continue-on-error/contents:read/Node24) | **PASS** |
| Matrice gate simulée 8/8 | **PASS** |
| `git diff --check` | **PASS** |
| npm ci / typecheck / lint / build / Vitest 655 / modeled 73 | **PASS** |
| package-lock modifié | **NON** |
| Preuve GitHub distante | **NON** (anti-claim) |

---

## 5. Contenu complet — workflow modifié

```yaml
name: SFIA Studio CI

on:
  pull_request:
    branches:
      - main
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
  detect:
    name: Detect SFIA Studio changes
    runs-on: ubuntu-latest
    timeout-minutes: 5
    outputs:
      studio_changed: ${{ steps.detect.outputs.studio_changed }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Detect Studio scope
        id: detect
        shell: bash
        run: |
          set -euo pipefail

          studio_changed="false"
          event_name="${{ github.event_name }}"

          is_studio_path() {
            case "$1" in
              projects/sfia-studio/*|.github/workflows/sfia-studio-ci.yml)
                return 0
                ;;
              *)
                return 1
                ;;
            esac
          }

          scan_range() {
            local base_sha="$1"
            local head_sha="$2"
            local file=""
            local found="false"

            git rev-parse --verify "${base_sha}^{commit}" >/dev/null
            git rev-parse --verify "${head_sha}^{commit}" >/dev/null

            while IFS= read -r -d '' file; do
              if is_studio_path "${file}"; then
                found="true"
                break
              fi
            done < <(git diff -z --name-only "${base_sha}...${head_sha}")

            printf '%s' "${found}"
          }

          if [ "${event_name}" = "pull_request" ]; then
            base_sha="${{ github.event.pull_request.base.sha }}"
            head_sha="${{ github.event.pull_request.head.sha }}"
            if [ -z "${base_sha}" ] || [ -z "${head_sha}" ]; then
              echo "Missing pull_request base/head SHA; fail-closed." >&2
              exit 1
            fi
            studio_changed="$(scan_range "${base_sha}" "${head_sha}")"
          elif [ "${event_name}" = "push" ]; then
            # Path filters already constrain push triggers to Studio-relevant paths.
            # Fail-closed: treat triggered push runs as Studio-in-scope.
            # Optionally corroborate with before...sha when resolvable.
            before_sha="${{ github.event.before }}"
            head_sha="${{ github.sha }}"
            studio_changed="true"
            if [ -n "${before_sha}" ] && [ "${before_sha}" != "0000000000000000000000000000000000000000" ]; then
              if ! git rev-parse --verify "${before_sha}^{commit}" >/dev/null 2>&1; then
                echo "Cannot resolve github.event.before; fail-closed." >&2
                exit 1
              fi
              corroborate="$(scan_range "${before_sha}" "${head_sha}")"
              echo "push corroborate studio_changed=${corroborate}"
            fi
          else
            echo "Unsupported event_name=${event_name}; fail-closed." >&2
            exit 1
          fi

          if [ "${studio_changed}" != "true" ] && [ "${studio_changed}" != "false" ]; then
            echo "Invalid studio_changed value; fail-closed." >&2
            exit 1
          fi

          echo "event_name=${event_name}"
          echo "studio_changed=${studio_changed}"
          echo "studio_changed=${studio_changed}" >> "${GITHUB_OUTPUT}"

  validate:
    name: Build and validate SFIA Studio
    needs: detect
    if: >
      needs.detect.result == 'success' &&
      (
        (github.event_name == 'pull_request' && needs.detect.outputs.studio_changed == 'true') ||
        github.event_name == 'push'
      )
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

  required_gate:
    name: SFIA Studio Required Gate
    needs:
      - detect
      - validate
    if: always()
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
      - name: Aggregate required gate
        shell: bash
        run: |
          set -euo pipefail

          detect_result="${{ needs.detect.result }}"
          validate_result="${{ needs.validate.result }}"
          studio_changed="${{ needs.detect.outputs.studio_changed }}"

          echo "detect_result=${detect_result}"
          echo "validate_result=${validate_result}"
          echo "studio_changed=${studio_changed}"

          if [ "${detect_result}" != "success" ]; then
            echo "Required gate FAIL: detection did not succeed (result=${detect_result})." >&2
            exit 1
          fi

          if [ "${studio_changed}" != "true" ] && [ "${studio_changed}" != "false" ]; then
            echo "Required gate FAIL: unknown studio_changed value." >&2
            exit 1
          fi

          if [ "${studio_changed}" = "false" ]; then
            echo "Required gate PASS: non-Studio pull request; heavy validation not required."
            exit 0
          fi

          if [ "${validate_result}" != "success" ]; then
            echo "Required gate FAIL: Studio validation required but result=${validate_result}." >&2
            exit 1
          fi

          echo "Required gate PASS: Studio validation succeeded."

```

---

## 6. Diff utile complet (`origin/main...HEAD`)

```diff
diff --git a/.github/workflows/sfia-studio-ci.yml b/.github/workflows/sfia-studio-ci.yml
index e705920..801a875 100644
--- a/.github/workflows/sfia-studio-ci.yml
+++ b/.github/workflows/sfia-studio-ci.yml
@@ -2,9 +2,8 @@ name: SFIA Studio CI

 on:
   pull_request:
-    paths:
-      - "projects/sfia-studio/**"
-      - ".github/workflows/sfia-studio-ci.yml"
+    branches:
+      - main
   push:
     branches:
       - main
@@ -20,8 +19,103 @@ concurrency:
   cancel-in-progress: true

 jobs:
+  detect:
+    name: Detect SFIA Studio changes
+    runs-on: ubuntu-latest
+    timeout-minutes: 5
+    outputs:
+      studio_changed: ${{ steps.detect.outputs.studio_changed }}
+    steps:
+      - name: Checkout
+        uses: actions/checkout@v4
+        with:
+          fetch-depth: 0
+
+      - name: Detect Studio scope
+        id: detect
+        shell: bash
+        run: |
+          set -euo pipefail
+
+          studio_changed="false"
+          event_name="${{ github.event_name }}"
+
+          is_studio_path() {
+            case "$1" in
+              projects/sfia-studio/*|.github/workflows/sfia-studio-ci.yml)
+                return 0
+                ;;
+              *)
+                return 1
+                ;;
+            esac
+          }
+
+          scan_range() {
+            local base_sha="$1"
+            local head_sha="$2"
+            local file=""
+            local found="false"
+
+            git rev-parse --verify "${base_sha}^{commit}" >/dev/null
+            git rev-parse --verify "${head_sha}^{commit}" >/dev/null
+
+            while IFS= read -r -d '' file; do
+              if is_studio_path "${file}"; then
+                found="true"
+                break
+              fi
+            done < <(git diff -z --name-only "${base_sha}...${head_sha}")
+
+            printf '%s' "${found}"
+          }
+
+          if [ "${event_name}" = "pull_request" ]; then
+            base_sha="${{ github.event.pull_request.base.sha }}"
+            head_sha="${{ github.event.pull_request.head.sha }}"
+            if [ -z "${base_sha}" ] || [ -z "${head_sha}" ]; then
+              echo "Missing pull_request base/head SHA; fail-closed." >&2
+              exit 1
+            fi
+            studio_changed="$(scan_range "${base_sha}" "${head_sha}")"
+          elif [ "${event_name}" = "push" ]; then
+            # Path filters already constrain push triggers to Studio-relevant paths.
+            # Fail-closed: treat triggered push runs as Studio-in-scope.
+            # Optionally corroborate with before...sha when resolvable.
+            before_sha="${{ github.event.before }}"
+            head_sha="${{ github.sha }}"
+            studio_changed="true"
+            if [ -n "${before_sha}" ] && [ "${before_sha}" != "0000000000000000000000000000000000000000" ]; then
+              if ! git rev-parse --verify "${before_sha}^{commit}" >/dev/null 2>&1; then
+                echo "Cannot resolve github.event.before; fail-closed." >&2
+                exit 1
+              fi
+              corroborate="$(scan_range "${before_sha}" "${head_sha}")"
+              echo "push corroborate studio_changed=${corroborate}"
+            fi
+          else
+            echo "Unsupported event_name=${event_name}; fail-closed." >&2
+            exit 1
+          fi
+
+          if [ "${studio_changed}" != "true" ] && [ "${studio_changed}" != "false" ]; then
+            echo "Invalid studio_changed value; fail-closed." >&2
+            exit 1
+          fi
+
+          echo "event_name=${event_name}"
+          echo "studio_changed=${studio_changed}"
+          echo "studio_changed=${studio_changed}" >> "${GITHUB_OUTPUT}"
+
   validate:
     name: Build and validate SFIA Studio
+    needs: detect
+    if: >
+      needs.detect.result == 'success' &&
+      (
+        (github.event_name == 'pull_request' && needs.detect.outputs.studio_changed == 'true') ||
+        github.event_name == 'push'
+      )
     runs-on: ubuntu-latest
     timeout-minutes: 30
     defaults:
@@ -94,3 +188,47 @@ jobs:
               echo "No previous SHA available; skipping whitespace range check"
             fi
           fi
+
+  required_gate:
+    name: SFIA Studio Required Gate
+    needs:
+      - detect
+      - validate
+    if: always()
+    runs-on: ubuntu-latest
+    timeout-minutes: 5
+    steps:
+      - name: Aggregate required gate
+        shell: bash
+        run: |
+          set -euo pipefail
+
+          detect_result="${{ needs.detect.result }}"
+          validate_result="${{ needs.validate.result }}"
+          studio_changed="${{ needs.detect.outputs.studio_changed }}"
+
+          echo "detect_result=${detect_result}"
+          echo "validate_result=${validate_result}"
+          echo "studio_changed=${studio_changed}"
+
+          if [ "${detect_result}" != "success" ]; then
+            echo "Required gate FAIL: detection did not succeed (result=${detect_result})." >&2
+            exit 1
+          fi
+
+          if [ "${studio_changed}" != "true" ] && [ "${studio_changed}" != "false" ]; then
+            echo "Required gate FAIL: unknown studio_changed value." >&2
+            exit 1
+          fi
+
+          if [ "${studio_changed}" = "false" ]; then
+            echo "Required gate PASS: non-Studio pull request; heavy validation not required."
+            exit 0
+          fi
+
+          if [ "${validate_result}" != "success" ]; then
+            echo "Required gate FAIL: Studio validation required but result=${validate_result}." >&2
+            exit 1
+          fi
+
+          echo "Required gate PASS: Studio validation succeeded."
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md
new file mode 100644
index 0000000..cc5459e
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md
@@ -0,0 +1,294 @@
+# 32 — Path-Aware Required Check and Main Protection Preparation
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-07-27 01:12:00 CEST (+0200) — Europe/Paris |
+| **Cycle** | Intégration / DevOps · QA/validation · capitalisation (Standard) |
+| **Profil** | Critical |
+| **Gate** | `GO PREPARE OPTION A PATH-AWARE REQUIRED CHECK AND MAIN PROTECTION IMPLEMENTATION — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
+| **Repo** | `mcleland147/sfia-workspace` |
+| **Worktree** | `/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check` |
+| **Branche** | `delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation` |
+| **HEAD (base)** | `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
+| **origin/main** | `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
+| **Push projet / PR / ruleset / protection** | **NON** |
+| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A PATH-AWARE REQUIRED CHECK AND MAIN PROTECTION IMPLEMENTATION PREPARED LOCALLY — READY FOR MORRIS PUSH AND PR DECISION` |
+
+---
+
+## 1. Sources consultées
+
+- `prompts/templates/sfia-cycle-execution-template.md`
+- workflow `origin/main:.github/workflows/sfia-studio-ci.yml`
+- docs 30 et 31 (gouvernance CI / post-merge)
+- docs 24 (H1/H2/H3, séquence PR/CI/merge)
+- handoff blob `15b844931aa10244d24fef938ad6f85650c3fde8`
+- CKC candidat QA : `pilots/04-qa-validation.md` (candidate · pas d’autorité)
+- CKC DevOps dédié : **absent** → fallback méthode + docs 30/31 + workflow
+- PR #268 / #269 · run post-merge `30222087181` · protections/rulesets (lecture)
+
+---
+
+## 2. Truth Check
+
+| Contrôle | Résultat |
+|----------|----------|
+| `origin/main` = `60d9ac9…` | **PASS** |
+| Parents merge #269 | `508ef7c…` + `a42a85c…` |
+| Protections / rulesets | **absents** |
+| Required check | **non appliqué** |
+| PR ouverte concurrente | **aucune** |
+| Branche locale dédiée | créée depuis `origin/main` |
+| Branches delivery/docs | **conservées** (non touchées) |
+
+---
+
+## 3. Problème path-filter
+
+**Avant :** `pull_request.paths` limitait le déclenchement aux chemins Studio.
+Un required check global fondé sur `Build and validate SFIA Studio` resterait **absent/pending** pour les PR hors Studio → **blocage mono-repo**.
+
+**Après (P3 préparé localement) :**
+
+1. `pull_request` vers `main` **sans** filtre `paths` ;
+2. job **Detect SFIA Studio changes** (fail-closed) ;
+3. job **Build and validate SFIA Studio** conditionnel ;
+4. job final toujours présent **`SFIA Studio Required Gate`**.
+
+`push`/`main` reste path-filtered (pas de régression de coût) ; les push déclenchés sont traités Studio-in-scope fail-closed.
+
+---
+
+## 4. Design avant / après
+
+### Avant
+
+```
+PR (paths Studio only) → Build and validate SFIA Studio
+push main (paths Studio) → Build and validate SFIA Studio
+```
+
+### Après
+
+```
+PR → main (all paths)
+  → Detect SFIA Studio changes  → studio_changed true|false (fail-closed)
+  → Build and validate SFIA Studio  (si PR && true, ou push)
+  → SFIA Studio Required Gate  (always(); agrège)
+
+push → main (paths Studio|workflow)
+  → Detect (studio_changed=true fail-closed)
+  → Build and validate SFIA Studio
+  → SFIA Studio Required Gate
+```
+
+---
+
+## 5. Jobs
+
+### Detect SFIA Studio changes
+
+- checkout `fetch-depth: 0`
+- PR : `git diff -z --name-only base...head` ; match `projects/sfia-studio/*` ou `.github/workflows/sfia-studio-ci.yml`
+- sortie `studio_changed` strictement `true`/`false`
+- échec si SHA manquants/non résolvables ou valeur invalide
+- push : `studio_changed=true` (path filter + fail-closed) ; corroboration `before...sha` si résolvable
+
+### Build and validate SFIA Studio
+
+- dépend de `detect` success
+- condition PR : `studio_changed == true` ; push : toujours si detect OK
+- Node **24** · npm ci · typecheck · lint · build · Vitest · modeled · secret · whitespace
+- **pas** de `continue-on-error`
+
+### SFIA Studio Required Gate
+
+- `needs: [detect, validate]` · `if: always()`
+- PASS si detect success && `studio_changed=false`
+- PASS si detect success && `studio_changed=true` && validate success
+- FAIL si detect ≠ success
+- FAIL si Studio concerné et validate ∈ {failure, cancelled, skipped, unknown}
+- logs courts non sensibles
+
+### Permissions / concurrency
+
+- `contents: read` inchangé
+- concurrency cancel-in-progress conservée
+- **Réserve :** un run cancelled sur un **ancien** head ≠ état du head courant
+
+### Actions tierces
+
+- uniquement `actions/checkout@v4` et `actions/setup-node@v4` (déjà présentes)
+- **aucune** nouvelle action tierce
+
+---
+
+## 6. Triggers
+
+| Event | Filtre | Effet |
+|-------|--------|-------|
+| `pull_request` → `main` | **aucun path** | gate toujours créé |
+| `push` → `main` | paths Studio + workflow | validation Studio |
+
+---
+
+## 7. Matrice des scénarios
+
+| Cas | Détection | Validation | Gate attendu | Preuve locale |
+|-----|-----------|------------|--------------|---------------|
+| 1 PR Studio success | true | success | success | **simulé** (script) |
+| 2 PR Studio failure | true | failure | failure | **simulé** |
+| 3 PR Studio cancelled | true | cancelled | failure | **simulé** |
+| 4 PR Studio skipped anormal | true | skipped | failure | **simulé** |
+| 5 PR hors Studio | false | skipped | success | **simulé** |
+| 6 détection failure | (fail) | skipped | failure | **simulé** |
+| 7 modif workflow Studio | true | exécutée | conforme | **inspecté** (paths) |
+| 8 push main Studio | true | exécutée | conforme | **inspecté** |
+
+**Limite :** GitHub n’a pas exécuté ce workflow distant. Preuve réelle = futur GO push/PR.
+
+---
+
+## 8. Validations locales
+
+| Contrôle | Résultat |
+|----------|----------|
+| YAML parse | **PASS** |
+| Structure jobs/noms | **PASS** |
+| `always()` sur gate | **PASS** |
+| `continue-on-error` | **absent** |
+| permissions | `contents: read` |
+| `git diff --check` | **PASS** |
+| Scénarios gate (script) | **8/8 PASS** |
+| npm ci / typecheck / lint / build / Vitest 655 / modeled 73 | **PASS** (local Node; lockfile non modifié) |
+
+---
+
+## 9. Configuration candidate M1 (**NOT APPLIED**)
+
+| Élément | Valeur candidate |
+|---------|------------------|
+| Target | default branch `main` |
+| Require PR | oui |
+| Required approvals | **0** initialement |
+| Code owners | non |
+| Conversation resolution | option documentée · **non validée** |
+| Required status check | **`SFIA Studio Required Gate`** |
+| Branches up to date | **non** initialement |
+| Block force pushes | oui |
+| Restrict deletions | oui |
+| Linear history | non |
+| Signed commits | non (ce cycle) |
+| Merge queue | non |
+| Deployments | non |
+| Bypass | décision Morris **ouverte** |
+
+Aucun ID de ruleset inventé · **aucune** API d’application.
+
+---
+
+## 10. Bypass B0 / B1 / B2 (**non validés**)
+
+| Option | Description | Reco |
+|--------|-------------|------|
+| B0 | aucun bypass | maximalement strict · friction ops |
+| B1 | bypass rôles limités non documenté | opaque |
+| **B2** | bypass administratif exceptionnel **tracé** | **recommandé** (non décision) |
+
+B2 ≠ décision Morris validée · ≠ configuré.
+
+---
+
+## 11. Plan d’activation futur (gates séparés)
+
+1. `GO PUBLISH … PATH-AWARE … BRANCH AND CREATE PR` (futur)
+2. `GO REVIEW … PATH-AWARE … PR AND CI`
+3. `GO MERGE …` (stratégie H à choisir)
+4. `GO APPLY OPTION A MAIN RULESET M1 …` (après observation du nom check)
+5. Décision séparée F-A6-PM-G01 / delete branches
+
+**Ne pas** rendre required avant observation du nom réel sur GitHub.
+
+---
+
+## 12. Rollback
+
+| Couche | Rollback |
+|--------|----------|
+| Workflow | revert du commit workflow vers version `60d9ac9…` |
+| Ruleset futur | désactiver/supprimer ruleset sous GO Morris (non applicable ici) |
+
+---
+
+## 13. Findings
+
+| ID | Impact |
+|----|--------|
+| F-A6-PM-G01 | MITIGATED proposé · **non CLOSED** · ruleset futur = étape suivante |
+| F-CI-01 / 02 / 04 | OPEN · **hors cycle** |
+| F-CI-03 / 05 | MITIGATED |
+| F-CI-06 / 06B | MITIGATED, non CLOSED |
+
+Réserves B5 · R1 · R-T-A3-* · R-M01 · U-M02 OPEN · C1–C4 NOT VALIDATED.
+
+---
+
+## 14. Risques / dette
+
+| Risque | Mitigation |
+|--------|------------|
+| Condition GHA mal formée | revue + simulation gate |
+| Coût CI (toutes PR) | detect léger ; validate conditionnel |
+| Cancel concurrency | réserve head courant vs ancien |
+| Preuve distante absente | anti-claim + GO push/PR |
+
+Dette évitée : required check global incompatible path-filter.
+Dette introduite : logique multi-jobs à maintenir ; preuve GitHub encore due.
+
+---
+
+## 15. Fichiers
+
+| Action | Path |
+|--------|------|
+| Modifié | `.github/workflows/sfia-studio-ci.yml` |
+| Créé | `…/32-path-aware-required-check-and-main-protection-preparation.md` |
+| README | **non** (absent · non inventé) |
+
+---
+
+## 16. Actions non exécutées
+
+Push projet · PR · merge · ruleset · branch protection · delete branches · fermeture findings · T-A7 · package/lockfile · autres workflows.
+
+---
+
+## 17. Anti-claims
+
+- préparation locale ≠ workflow distant validé
+- YAML valide ≠ GitHub Actions exécuté
+- gate inspecté ≠ required check actif
+- workflow mergé futur ≠ ruleset actif
+- ruleset actif futur ≠ F-A6-PM-G01 CLOSED
+- required check ≠ Option A COMPLETE
+- T-A7 non ouvert
+- push/PR/merge/protection **non** autorisés dans ce cycle
+- P3 / M1 **préparés** · **non intégrés** · **non appliqués**
+- B2 recommandé · **non validé**
+
+---
+
+## 18. Gates suivants candidats (**NOT consumed**)
+
+```
+GO PUBLISH OPTION A PATH-AWARE REQUIRED CHECK BRANCH AND CREATE PR
+— SFIA STUDIO V3-NATIVE
+```
+
+Puis revue/CI · merge · (ultérieur) apply ruleset M1 · delete branches · décision F-A6.
+
+---
+
+## 19. Verdict
+
+`SFIA STUDIO V3-NATIVE OPTION A PATH-AWARE REQUIRED CHECK AND MAIN PROTECTION IMPLEMENTATION PREPARED LOCALLY — READY FOR MORRIS PUSH AND PR DECISION`

```

---

## 7. Contenu complet — document 32

```markdown
# 32 — Path-Aware Required Check and Main Protection Preparation

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-27 01:12:00 CEST (+0200) — Europe/Paris |
| **Cycle** | Intégration / DevOps · QA/validation · capitalisation (Standard) |
| **Profil** | Critical |
| **Gate** | `GO PREPARE OPTION A PATH-AWARE REQUIRED CHECK AND MAIN PROTECTION IMPLEMENTATION — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation` |
| **HEAD (base)** | `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| **origin/main** | `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| **Push projet / PR / ruleset / protection** | **NON** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A PATH-AWARE REQUIRED CHECK AND MAIN PROTECTION IMPLEMENTATION PREPARED LOCALLY — READY FOR MORRIS PUSH AND PR DECISION` |

---

## 1. Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md`
- workflow `origin/main:.github/workflows/sfia-studio-ci.yml`
- docs 30 et 31 (gouvernance CI / post-merge)
- docs 24 (H1/H2/H3, séquence PR/CI/merge)
- handoff blob `15b844931aa10244d24fef938ad6f85650c3fde8`
- CKC candidat QA : `pilots/04-qa-validation.md` (candidate · pas d’autorité)
- CKC DevOps dédié : **absent** → fallback méthode + docs 30/31 + workflow
- PR #268 / #269 · run post-merge `30222087181` · protections/rulesets (lecture)

---

## 2. Truth Check

| Contrôle | Résultat |
|----------|----------|
| `origin/main` = `60d9ac9…` | **PASS** |
| Parents merge #269 | `508ef7c…` + `a42a85c…` |
| Protections / rulesets | **absents** |
| Required check | **non appliqué** |
| PR ouverte concurrente | **aucune** |
| Branche locale dédiée | créée depuis `origin/main` |
| Branches delivery/docs | **conservées** (non touchées) |

---

## 3. Problème path-filter

**Avant :** `pull_request.paths` limitait le déclenchement aux chemins Studio.
Un required check global fondé sur `Build and validate SFIA Studio` resterait **absent/pending** pour les PR hors Studio → **blocage mono-repo**.

**Après (P3 préparé localement) :**

1. `pull_request` vers `main` **sans** filtre `paths` ;
2. job **Detect SFIA Studio changes** (fail-closed) ;
3. job **Build and validate SFIA Studio** conditionnel ;
4. job final toujours présent **`SFIA Studio Required Gate`**.

`push`/`main` reste path-filtered (pas de régression de coût) ; les push déclenchés sont traités Studio-in-scope fail-closed.

---

## 4. Design avant / après

### Avant

```
PR (paths Studio only) → Build and validate SFIA Studio
push main (paths Studio) → Build and validate SFIA Studio
```

### Après

```
PR → main (all paths)
  → Detect SFIA Studio changes  → studio_changed true|false (fail-closed)
  → Build and validate SFIA Studio  (si PR && true, ou push)
  → SFIA Studio Required Gate  (always(); agrège)

push → main (paths Studio|workflow)
  → Detect (studio_changed=true fail-closed)
  → Build and validate SFIA Studio
  → SFIA Studio Required Gate
```

---

## 5. Jobs

### Detect SFIA Studio changes

- checkout `fetch-depth: 0`
- PR : `git diff -z --name-only base...head` ; match `projects/sfia-studio/*` ou `.github/workflows/sfia-studio-ci.yml`
- sortie `studio_changed` strictement `true`/`false`
- échec si SHA manquants/non résolvables ou valeur invalide
- push : `studio_changed=true` (path filter + fail-closed) ; corroboration `before...sha` si résolvable

### Build and validate SFIA Studio

- dépend de `detect` success
- condition PR : `studio_changed == true` ; push : toujours si detect OK
- Node **24** · npm ci · typecheck · lint · build · Vitest · modeled · secret · whitespace
- **pas** de `continue-on-error`

### SFIA Studio Required Gate

- `needs: [detect, validate]` · `if: always()`
- PASS si detect success && `studio_changed=false`
- PASS si detect success && `studio_changed=true` && validate success
- FAIL si detect ≠ success
- FAIL si Studio concerné et validate ∈ {failure, cancelled, skipped, unknown}
- logs courts non sensibles

### Permissions / concurrency

- `contents: read` inchangé
- concurrency cancel-in-progress conservée
- **Réserve :** un run cancelled sur un **ancien** head ≠ état du head courant

### Actions tierces

- uniquement `actions/checkout@v4` et `actions/setup-node@v4` (déjà présentes)
- **aucune** nouvelle action tierce

---

## 6. Triggers

| Event | Filtre | Effet |
|-------|--------|-------|
| `pull_request` → `main` | **aucun path** | gate toujours créé |
| `push` → `main` | paths Studio + workflow | validation Studio |

---

## 7. Matrice des scénarios

| Cas | Détection | Validation | Gate attendu | Preuve locale |
|-----|-----------|------------|--------------|---------------|
| 1 PR Studio success | true | success | success | **simulé** (script) |
| 2 PR Studio failure | true | failure | failure | **simulé** |
| 3 PR Studio cancelled | true | cancelled | failure | **simulé** |
| 4 PR Studio skipped anormal | true | skipped | failure | **simulé** |
| 5 PR hors Studio | false | skipped | success | **simulé** |
| 6 détection failure | (fail) | skipped | failure | **simulé** |
| 7 modif workflow Studio | true | exécutée | conforme | **inspecté** (paths) |
| 8 push main Studio | true | exécutée | conforme | **inspecté** |

**Limite :** GitHub n’a pas exécuté ce workflow distant. Preuve réelle = futur GO push/PR.

---

## 8. Validations locales

| Contrôle | Résultat |
|----------|----------|
| YAML parse | **PASS** |
| Structure jobs/noms | **PASS** |
| `always()` sur gate | **PASS** |
| `continue-on-error` | **absent** |
| permissions | `contents: read` |
| `git diff --check` | **PASS** |
| Scénarios gate (script) | **8/8 PASS** |
| npm ci / typecheck / lint / build / Vitest 655 / modeled 73 | **PASS** (local Node; lockfile non modifié) |

---

## 9. Configuration candidate M1 (**NOT APPLIED**)

| Élément | Valeur candidate |
|---------|------------------|
| Target | default branch `main` |
| Require PR | oui |
| Required approvals | **0** initialement |
| Code owners | non |
| Conversation resolution | option documentée · **non validée** |
| Required status check | **`SFIA Studio Required Gate`** |
| Branches up to date | **non** initialement |
| Block force pushes | oui |
| Restrict deletions | oui |
| Linear history | non |
| Signed commits | non (ce cycle) |
| Merge queue | non |
| Deployments | non |
| Bypass | décision Morris **ouverte** |

Aucun ID de ruleset inventé · **aucune** API d’application.

---

## 10. Bypass B0 / B1 / B2 (**non validés**)

| Option | Description | Reco |
|--------|-------------|------|
| B0 | aucun bypass | maximalement strict · friction ops |
| B1 | bypass rôles limités non documenté | opaque |
| **B2** | bypass administratif exceptionnel **tracé** | **recommandé** (non décision) |

B2 ≠ décision Morris validée · ≠ configuré.

---

## 11. Plan d’activation futur (gates séparés)

1. `GO PUBLISH … PATH-AWARE … BRANCH AND CREATE PR` (futur)
2. `GO REVIEW … PATH-AWARE … PR AND CI`
3. `GO MERGE …` (stratégie H à choisir)
4. `GO APPLY OPTION A MAIN RULESET M1 …` (après observation du nom check)
5. Décision séparée F-A6-PM-G01 / delete branches

**Ne pas** rendre required avant observation du nom réel sur GitHub.

---

## 12. Rollback

| Couche | Rollback |
|--------|----------|
| Workflow | revert du commit workflow vers version `60d9ac9…` |
| Ruleset futur | désactiver/supprimer ruleset sous GO Morris (non applicable ici) |

---

## 13. Findings

| ID | Impact |
|----|--------|
| F-A6-PM-G01 | MITIGATED proposé · **non CLOSED** · ruleset futur = étape suivante |
| F-CI-01 / 02 / 04 | OPEN · **hors cycle** |
| F-CI-03 / 05 | MITIGATED |
| F-CI-06 / 06B | MITIGATED, non CLOSED |

Réserves B5 · R1 · R-T-A3-* · R-M01 · U-M02 OPEN · C1–C4 NOT VALIDATED.

---

## 14. Risques / dette

| Risque | Mitigation |
|--------|------------|
| Condition GHA mal formée | revue + simulation gate |
| Coût CI (toutes PR) | detect léger ; validate conditionnel |
| Cancel concurrency | réserve head courant vs ancien |
| Preuve distante absente | anti-claim + GO push/PR |

Dette évitée : required check global incompatible path-filter.
Dette introduite : logique multi-jobs à maintenir ; preuve GitHub encore due.

---

## 15. Fichiers

| Action | Path |
|--------|------|
| Modifié | `.github/workflows/sfia-studio-ci.yml` |
| Créé | `…/32-path-aware-required-check-and-main-protection-preparation.md` |
| README | **non** (absent · non inventé) |

---

## 16. Actions non exécutées

Push projet · PR · merge · ruleset · branch protection · delete branches · fermeture findings · T-A7 · package/lockfile · autres workflows.

---

## 17. Anti-claims

- préparation locale ≠ workflow distant validé
- YAML valide ≠ GitHub Actions exécuté
- gate inspecté ≠ required check actif
- workflow mergé futur ≠ ruleset actif
- ruleset actif futur ≠ F-A6-PM-G01 CLOSED
- required check ≠ Option A COMPLETE
- T-A7 non ouvert
- push/PR/merge/protection **non** autorisés dans ce cycle
- P3 / M1 **préparés** · **non intégrés** · **non appliqués**
- B2 recommandé · **non validé**

---

## 18. Gates suivants candidats (**NOT consumed**)

```
GO PUBLISH OPTION A PATH-AWARE REQUIRED CHECK BRANCH AND CREATE PR
— SFIA STUDIO V3-NATIVE
```

Puis revue/CI · merge · (ultérieur) apply ruleset M1 · delete branches · décision F-A6.

---

## 19. Verdict

`SFIA STUDIO V3-NATIVE OPTION A PATH-AWARE REQUIRED CHECK AND MAIN PROTECTION IMPLEMENTATION PREPARED LOCALLY — READY FOR MORRIS PUSH AND PR DECISION`

```

---

## 8. Findings / réserves (inchangés)

F-A6-PM-G01 MITIGATED proposé · non CLOSED · F-CI-01/02/04 OPEN · F-CI-03/05 MITIGATED · F-CI-06/06B MITIGATED non CLOSED · réserves OPEN · C1–C4 NOT VALIDATED

---

## 9. Non-exécutions / anti-claims

Push projet · PR · merge · ruleset · branch protection · delete branches · fermeture findings · T-A7 · package/lockfile · autres workflows : **NON**

Préparation locale ≠ distant validé · YAML ≠ Actions exécuté · gate ≠ required actif · P3/M1 préparés non intégrés/appliqués · Option A non COMPLETE.

---

## 10. Gates suivants (**NOT consumed**)

```
GO PUBLISH OPTION A PATH-AWARE REQUIRED CHECK BRANCH AND CREATE PR
— SFIA STUDIO V3-NATIVE
```

Puis review/CI · merge · apply M1 · delete branches · décision F-A6.

---

## 11. Handoff (après publish)

Message : `docs(review-handoff): record Studio path-aware required check preparation`

---

## 12. Verdict exact

`SFIA STUDIO V3-NATIVE OPTION A PATH-AWARE REQUIRED CHECK AND MAIN PROTECTION IMPLEMENTATION PREPARED LOCALLY — READY FOR MORRIS PUSH AND PR DECISION`

---

## 13. Instruction ChatGPT

Après réception du rapport Cursor, ChatGPT doit obligatoirement lire depuis Git la branche `sfia/review-handoff` et le fichier `sfia-review-handoff/latest-chatgpt-review.md`, puis vérifier cycle, branche, HEAD/base, fichiers, contenu complet workflow ou diff utile, contenu complet document 32, validations, réserves, décisions Morris, verdict. Si handoff absent/obsolète/incohérent/synthesis-only : `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.
