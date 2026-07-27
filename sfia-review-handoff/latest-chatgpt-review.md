# Review pack FULL — SFIA Studio V3-Native Option A — Path-aware required check PR publication

## Métadonnées cycle

| Champ | Valeur |
|-------|--------|
| **Date/heure** | 2026-07-27 06:30:37 CEST (+0200) |
| **Cycle** | 13 — PR readiness, publication et création de PR (+ 7 DevOps, 9 QA) |
| **Profil SFIA** | Critical |
| **Typologie** | EVOL / DOC |
| **Gate consommé** | `GO PUBLISH OPTION A PATH-AWARE REQUIRED CHECK BRANCH AND CREATE PR — SFIA STUDIO V3-NATIVE` |
| **Workspace** | `/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation` |
| **HEAD local** | `e9813524e90d75d7d737b5ef330f8923f75cda43` |
| **origin/main** | `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| **merge-base** | `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| **Verdict** | `PATH-AWARE REQUIRED CHECK PR CREATED — CI FAILURE REQUIRES MORRIS REVIEW` |

## Local Git Truth Check (pré-push)

| Check | Résultat |
|-------|----------|
| pwd / toplevel | `/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check` |
| remote | `https://github.com/mcleland147/sfia-workspace.git` |
| fetch --prune | OK |
| HEAD exact | YES — `e9813524e90d75d7d737b5ef330f8923f75cda43` |
| origin/main exact | YES — `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| merge-base exact | YES — `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| status initial | clean tracked ; untracked `.tmp-sfia-review/` only |
| staged | vide |
| opérations Git actives | aucune |
| branche distante avant push | absente |
| PR ouverte pour cette branche | aucune |
| branch protection main | absente (404) |
| rulesets | empty list |
| `git diff --check origin/main...HEAD` | **FAIL exit 2** — trailing whitespace doc 32 L48, L245 |

**Note critique :** le claim local antérieur `git diff --check : PASS` (cycle de préparation / corps PR) était **inexact** pour le contenu commité : le check local de préparation n'avait pas couvert le fichier doc 32 encore untracked. Aucune correction dans ce cycle (gate).

## Status final (post-cycle projet)

- branche tracke `origin/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation` @ `e9813524e90d75d7d737b5ef330f8923f75cda43`
- working tree : aucun tracked modifié ; untracked `.tmp-sfia-review/` only
- aucun nouveau commit projet

## Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md` (handoff publish-in-cycle)
- handoff précédent : branche `sfia/review-handoff`, blob `cee32239e5b76bbefb564ac8f5de42507ebbeb27`
- workflow HEAD blob `801a8759bb7440666799b95edf13f9ee6d9332f8`
- doc 32 HEAD blob `cc5459efed4f6e4d2f1e867fb94b81b49f3bde57`
- docs 30/31 (contexte gouvernance CI)
- run Actions `30237044632`

Contenu workflow + doc 32 : inchangé depuis handoff préparation (mêmes blobs / même HEAD). Les diffs embarqués ci-dessous sont **rstrip** pour publication handoff (`git diff --check` handoff) ; les blobs projet ci-dessus restent la source de vérité (TW présent dans blob doc 32).

## Commits (origin/main..HEAD)

```
e981352 docs(sfia-studio): prepare path-aware required check and main protection
b55f2fb ci(sfia-studio): prepare path-aware required gate workflow
```

OID complets :
- `b55f2fb77623d993d0c449705904143b2ed2b3cb`
- `e9813524e90d75d7d737b5ef330f8923f75cda43`

## Diff stat / name-status

```
 .github/workflows/sfia-studio-ci.yml               | 144 +++++++++-
 ...quired-check-and-main-protection-preparation.md | 294 +++++++++++++++++++++
 2 files changed, 435 insertions(+), 3 deletions(-)
```

```
M	.github/workflows/sfia-studio-ci.yml
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md
```

## Publication distante

| Champ | Valeur |
|-------|--------|
| Commande | `git push -u origin delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation` |
| Force | non |
| SHA remote | `e9813524e90d75d7d737b5ef330f8923f75cda43` |
| Match local | YES |
| Upstream | configuré |
| Mutation main | aucune |

## Pull request

| Champ | Valeur |
|-------|--------|
| Numéro | **#270** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/270 |
| Titre | `ci(sfia-studio): add path-aware required gate preparation` |
| State | OPEN |
| Draft | false |
| Base | `main` @ `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| Head ref | `delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation` |
| Head SHA | `e9813524e90d75d7d737b5ef330f8923f75cda43` |
| Fichiers | **2** |
| +/- | +435 / −3 |
| mergeable | MERGEABLE |
| mergeStateStatus | UNSTABLE (CI rouge) |
| auto-merge | null |
| labels / reviewers | aucun ajouté |

### Corps PR

Voir PR #270. Sections Objectif / Changements / Fichiers / Validations locales / Gouvernance / Réserves conformes au gate. **Alerte :** Validations locales affirme encore `git diff --check : PASS` — claim hérité, **contredit** par CI et Truth Check.

## CI observée

| Champ | Valeur |
|-------|--------|
| Workflow | **SFIA Studio CI** |
| Event | `pull_request` |
| Run ID | **30237044632** |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/30237044632 |
| Head SHA | `e9813524e90d75d7d737b5ef330f8923f75cda43` |
| Conclusion run | **failure** |

### Checks / jobs exacts (noms GitHub)

| Check / job | Job ID | Conclusion |
|-------------|--------|------------|
| **Detect SFIA Studio changes** | 89886711919 | **success** |
| **Build and validate SFIA Studio** | 89886726562 | **failure** |
| **SFIA Studio Required Gate** | 89886895119 | **failure** |

Nom réel du gate final observé : **`SFIA Studio Required Gate`** (exact).

### Detect — preuve Studio in-scope

Log `Detect Studio scope` :
- `event_name=pull_request`
- **`studio_changed=true`**
- base/head scannés : `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` / `e9813524e90d75d7d737b5ef330f8923f75cda43`
- motif : modification de `.github/workflows/sfia-studio-ci.yml` ⇒ in-scope

Job lourd **exécuté**.

### Build and validate — steps

Success : Setup Node.js, Install, Typecheck, Lint, Build, Unit tests (Vitest), Modeled governance, Secret pattern scan.

**Échec :** `Trailing whitespace check` (exit 2) :
- `32-path-aware-required-check-and-main-protection-preparation.md:48: trailing whitespace.`
- `32-path-aware-required-check-and-main-protection-preparation.md:245: trailing whitespace.`
- Lignes concernées (texte, TW omis dans ce pack handoff) :
  - L48 : `**Avant :** \`pull_request.paths\` limitait le déclenchement aux chemins Studio.`
  - L245 : `Dette évitée : required check global incompatible path-filter.`

Skipped : Post Setup Node.js (après failure).

### SFIA Studio Required Gate — steps

- Aggregate required gate : **failure**
- Inputs : `detect_result=success`, `validate_result=failure`, `studio_changed=true`
- Message : Required gate FAIL: Studio validation required but result=failure

Fail-closed du gate : **observé et correct** sur cette PR in-scope.

## Limite de preuve — PR hors Studio

**NON PROUVÉ.** Cette PR modifie le workflow ⇒ Studio-in-scope. Aucune PR hors Studio observée. Chemin `studio_changed=false` → gate PASS sans job lourd : **dû**.

## Findings / réserves

| ID | Statut |
|----|--------|
| F-A6-PM-G01 | MITIGATED proposé — **not CLOSED** |
| F-CI-01, F-CI-02, F-CI-04 | OPEN |
| F-CI-03, F-CI-05 | MITIGATED |
| F-CI-06 / F-CI-06B | MITIGATED, not CLOSED |
| **Nouveau constat (non fermé)** | Trailing whitespace doc 32 sur PR #270 — cause CI failure run 30237044632 ; **aucune correction dans ce cycle** |

Réserves : B5, R1, R-T-A3-1..4, R-M01, U-M02 OPEN ; C1–C4 RECOMMENDED — NOT VALIDATED ; B2 recommended not validated ; M1 **not applied** ; required check **not configured** ; Option A **not COMPLETE** ; T-A7 **not open**.

## Actions non exécutées

- correction workflow / doc 32
- nouveau commit projet / amend / rebase / force-push
- merge / auto-merge / merge queue
- ruleset / branch protection / required check config
- approbation / labels / reviewers
- fermeture finding / ouverture T-A7
- suppression de branche

## Décisions Morris requises

1. Revue PR #270 + CI rouge (whitespace doc 32).
2. Décider d'un GO correctif éventuel.
3. Ne pas activer M1 / required check tant que CI et preuve hors Studio non revues.
4. Gate suivant candidat (NOT CONSUMED) : `GO REVIEW OPTION A PATH-AWARE REQUIRED CHECK PR AND CI — SFIA STUDIO V3-NATIVE`

## Gates suivants

- `GO REVIEW OPTION A PATH-AWARE REQUIRED CHECK PR AND CI — SFIA STUDIO V3-NATIVE` — **NOT CONSUMED**
- Tout GO de correction CI — **NOT CONSUMED**
- Activation M1 / protection — **NOT AUTHORIZED**

---

## Patch PR — workflow (rstrip pour handoff ; blob projet fait foi)

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
```

## Patch PR — document 32 (rstrip pour handoff ; blob projet fait foi ; TW L48/L245 dans blob)

```diff
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

## Preuve Git équivalente

| Path | Blob HEAD |
|------|-----------|
| `.github/workflows/sfia-studio-ci.yml` | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
| `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md` | `cc5459efed4f6e4d2f1e867fb94b81b49f3bde57` |
| Handoff précédent | `cee32239e5b76bbefb564ac8f5de42507ebbeb27` |

Vérification TW locale (projet, avant correction — non appliquée) :

```
git diff --check origin/main...HEAD
# doc32:48 trailing whitespace
# doc32:245 trailing whitespace
# exit 2
```

## Verdict

`PATH-AWARE REQUIRED CHECK PR CREATED — CI FAILURE REQUIRES MORRIS REVIEW`

Publication branche + PR #270 réussies. Check `SFIA Studio Required Gate` observé (fail, agrégation correcte). CI failure due à trailing whitespace doc 32 — **aucune correction**. Hors Studio non prouvé.
