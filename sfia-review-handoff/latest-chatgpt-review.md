# Review pack FULL — PR readiness #270 — Path-aware required check

## Métadonnées cycle

| Champ | Valeur |
|-------|--------|
| **Date/heure** | 2026-07-27 06:49:31 CEST (+0200) |
| **Cycle** | 13 — PR readiness (+7 DevOps, +9 QA) |
| **Profil SFIA** | Critical |
| **Typologie** | EVOL / DOC / DevOps |
| **Gate consommé** | `GO PR READINESS OPTION A PATH-AWARE REQUIRED CHECK PR #270 — SFIA STUDIO V3-NATIVE` |
| **Workspace** | `/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation` |
| **HEAD** | `9f03916243c470587f6958e058fd58909e5bd75a` |
| **origin/main** | `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| **merge-base** | `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A PATH-AWARE REQUIRED CHECK PR #270 — PR READINESS PASS — READY FOR MORRIS MERGE STRATEGY DECISION` |

## Status initial / final

Identiques : tracked clean ; staged vide ; untracked `.tmp-sfia-review/` only ; aucune opération Git active ; upstream syncé ; remote SHA = HEAD.

## CKC

- recherché : oui
- candidat présent : `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md`
- statut : candidate — experimental cognitive guidance — **aucune autorité d'exécution**

## Sources consultées

- template cycle + handoff blob départ `8f1ace9bb3415eefc7aab5e65a64d8836c2a6f94`
- workflow HEAD blob `801a8759bb7440666799b95edf13f9ee6d9332f8`
- doc 32 blob `1bc7b6544d27d687bf9e33757863f1397b1494b6`
- docs 30/31 (contexte)
- PR #270 ; runs `30237044632` (fail) et `30237640228` (success)
- protections/rulesets lecture seule

## PR #270 metadata

| Champ | Valeur |
|-------|--------|
| URL | https://github.com/mcleland147/sfia-workspace/pull/270 |
| Titre | `ci(sfia-studio): add path-aware required gate preparation` |
| State | OPEN |
| Draft | false |
| mergeable | MERGEABLE |
| mergeStateStatus | CLEAN |
| Base | `main` @ `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| Head ref | `delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation` |
| Head SHA | `9f03916243c470587f6958e058fd58909e5bd75a` |
| Fichiers | **2** |
| +/- | +435 / −3 |
| auto-merge | null |
| labels / reviewers / reviews / comments | vides |

### Corps PR actuel

```markdown
## Objectif

Préparer un required check SFIA Studio path-aware avant toute activation de protection sur `main`.

## Changements

- déclenchement du workflow sur toutes les PR vers `main` ;
- détection fail-closed du périmètre SFIA Studio ;
- validation lourde uniquement lorsque Studio est concerné ;
- ajout du check final stable `SFIA Studio Required Gate` ;
- maintien du push `main` filtré sur les chemins Studio ;
- documentation du ruleset candidat M1 et des options de bypass.

## Fichiers

- `.github/workflows/sfia-studio-ci.yml`
- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md`

## Validations locales

- YAML : PASS
- structure jobs et conditions : PASS
- matrice simulée : 8/8 PASS
- `git diff --check` : PASS après correction whitespace du document 32
- npm ci : PASS
- typecheck : PASS
- lint : PASS
- build : PASS
- Vitest : 655 PASS
- modeled governance : 73 PASS
- lockfile : inchangé

## Gouvernance

- push projet autorisé par gate Morris ;
- création de PR autorisée ;
- merge non autorisé ;
- protection et ruleset non appliqués ;
- required check non encore configuré ;
- B2 recommandé mais non validé ;
- F-A6-PM-G01 non CLOSED ;
- Option A non COMPLETE ;
- T-A7 non ouvert.

## Réserves

- le nom réel du check doit être observé dans GitHub ;
- le comportement réel sur une PR hors Studio reste à prouver ;
- aucune activation M1 avant revue de la CI et preuve hors Studio ;
- le run initial 30237044632 a échoué sur deux trailing whitespaces du document 32 ; correction dédiée appliquée ensuite.
```

Cohérence corps : OK (objectif, 2 fichiers, check contextualisé, run initial rouge, anti-claims protection/required/M1/hors Studio).

## Commits (graph parents)

```
9f03916243c470587f6958e058fd58909e5bd75a  parent e9813524…  docs(sfia-studio): remove trailing whitespace from path-aware preparation
e9813524e90d75d7d737b5ef330f8923f75cda43  parent b55f2fb7…  docs(sfia-studio): prepare path-aware required check and main protection
b55f2fb77623d993d0c449705904143b2ed2b3cb  parent 60d9ac9b…  ci(sfia-studio): prepare path-aware required gate workflow
```

Trois commits seulement. Commit correctif : parent exact `e9813524…` ; name-status unique doc 32 ; workflow non touché (blob inchangé `801a8759…`).

## Diff stat / name-status

```
 .github/workflows/sfia-studio-ci.yml               | 144 +++++++++-
 .../32-path-aware-required-check-and-main-protection-preparation.md | 294 +++++++++++++++++++++
 2 files changed, 435 insertions(+), 3 deletions(-)

M	.github/workflows/sfia-studio-ci.yml
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md
```

`git diff --check origin/main...HEAD` : **PASS** (exit 0).
Aucun package-lock / method / prompts / .sfia / secret marker dans le diff.

## A. Scope — PASS

- Diff strictement conforme (2 fichiers).
- Aucun fichier supplémentaire / commit inattendu.
- Dette introduite (documentée) : logique multi-jobs à maintenir ; preuve hors Studio encore due ; M1 non appliqué.

## B. Workflow — PASS structurel

| Contrôle | Résultat |
|----------|----------|
| name `SFIA Studio CI` | OK |
| permissions `contents: read` | OK |
| concurrency + `cancel-in-progress: true` | OK (réserve : annule runs head antérieurs) |
| PR → main sans paths filter | OK |
| push → main paths Studio | OK |
| Detect + fetch-depth 0 | OK |
| studio_changed true/false fail-closed | OK |
| validate conditionnel Node 24 + steps complets | OK |
| aucun continue-on-error | OK |
| Required Gate `always()` needs detect+validate | OK |
| PASS hors Studio / PASS Studio / FAIL detect / FAIL validate | logique OK (hors Studio **non prouvé distant**) |

Risque contournement : faible sur PR (detect fail-closed + gate always). Push hors paths Studio ne déclenche pas (volontaire).

## C. Validation

### Locales (cycle readiness)

- `git diff --check` PASS
- YAML : PyYAML absent ; structure/clés critiques vérifiées ; `continue-on-error` absent
- lockfile inchangé
- secrets absents du diff
- DOC32 TW résiduel : aucun

### Distantes

**Preuve failure** run `30237044632` @ `e9813524…` :
- Detect success ; `studio_changed=true`
- Build failure (Trailing whitespace)
- Required Gate failure (fail-closed)

**Preuve success** run `30237640228` @ `9f039162…` :
- event `pull_request` ; conclusion **success**
- Detect success ; `studio_changed=true`
- Build success ; Trailing whitespace **success**
- **SFIA Studio Required Gate** **success** (`validate_result=success`)

Check runs head courant : 3/3 success. Nom exact gate observé : `SFIA Studio Required Gate`.

Gap : scénario `studio_changed=false` / validate skipped / gate success **NON PROUVÉ**.

## D. Documentation — PASS

Doc 32 : path-filter, P3 vs M1 NOT APPLIED, matrice, B0/B1/B2 (B2 recommandé non validé), F-A6-PM-G01 non CLOSED, Option A non COMPLETE, T-A7 non ouvert, TW absents.

Corps PR aligné ; anti-claims présents.

## E. Risques / réserves

1. **Hors Studio non prouvé** — non bloquant potentiel pour merge workflow (décision Morris) ; **bloquant pour activation M1** tant que preuve absente ou stratégie contrôlée non décidée.
2. Renommage futur du job/check casserait un required check ultérieur.
3. Concurrency cancel-in-progress.
4. `main` peut avancer avant merge → re-vérifier merge-base.
5. Ruleset / required check **non configurés** (état actuel confirmé).

## F. Merge readiness

| Qualification | Statut |
|---------------|--------|
| Techniquement intégrable | **OUI** (CI verte, scope clean, mergeable CLEAN) |
| Prêt pour décision Morris | **OUI** |
| Merge autorisé par ce cycle | **NON** |
| Activation M1 autorisée | **NON** |
| Preuve hors Studio | **NON** |

### Recommandation stratégie (non décision)

- **H2 squash recommandé** : un commit unique sur `main` aligné sur le titre PR ; évite de conserver le commit whitespace correctif comme bruit d'historique ; cohérent avec #268 (CI workflow).
- **H1 merge commit** alternatif si Morris veut préserver explicitement la séquence 3 commits (préparation → docs → fix) sur `main`.

Morris sélectionne H1 ou H2. Aucune exécution ici.

## Protections / rulesets (lecture)

- Branch protection `main` : **absente** (404)
- Rulesets : **[]**
- Required check : **non configuré**

## Findings inchangés

F-A6-PM-G01 MITIGATED proposé not CLOSED ; F-CI-01/02/04 OPEN ; F-CI-03/05 MITIGATED ; F-CI-06/06B MITIGATED not CLOSED.

## Anti-claims

- CI verte ≠ merge autorisé
- Check observé ≠ required configuré
- M1 ≠ appliqué
- B2 ≠ validé
- Option A ≠ COMPLETE
- T-A7 ≠ ouvert
- Hors Studio ≠ prouvé
- F-A6-PM-G01 ≠ CLOSED

## Actions non exécutées

Aucune modification projet/PR ; aucun commit/push projet ; aucun merge/auto-merge/approval/review/label ; aucun ruleset/protection ; aucun amend/rebase/force-push ; pas de fermeture finding ; pas de T-A7.

## Gates suivants

- `GO MERGE OPTION A PATH-AWARE REQUIRED CHECK PR #270 — STRATEGY H1 OR H2 TO BE SELECTED — SFIA STUDIO V3-NATIVE` — **NOT CONSUMED**
- Activation M1 / preuve hors Studio : gates séparés ultérieurs — **NOT CONSUMED**

## Décisions Morris requises

1. Sélection H1 vs H2 pour merge #270.
2. Moment de la preuve hors Studio (avant ou après merge, avant M1).
3. Ne pas appliquer M1 sans preuve hors Studio ou stratégie contrôlée.

---

## Patch complet — workflow (rstrip handoff ; blob `801a8759…` fait foi)

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

## Patch complet — document 32 (rstrip handoff ; blob `1bc7b654…` fait foi)

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md
new file mode 100644
index 0000000..1bc7b65
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

## Patch commit correctif `9f039162…` (whitespace only)

```diff
commit 9f03916243c470587f6958e058fd58909e5bd75a
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Mon Jul 27 06:38:02 2026 +0200

    docs(sfia-studio): remove trailing whitespace from path-aware preparation

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md
index cc5459e..1bc7b65 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md
@@ -45,7 +45,7 @@

 ## 3. Problème path-filter

-**Avant :** `pull_request.paths` limitait le déclenchement aux chemins Studio.
+**Avant :** `pull_request.paths` limitait le déclenchement aux chemins Studio.
 Un required check global fondé sur `Build and validate SFIA Studio` resterait **absent/pending** pour les PR hors Studio → **blocage mono-repo**.

 **Après (P3 préparé localement) :**
@@ -242,7 +242,7 @@ Réserves B5 · R1 · R-T-A3-* · R-M01 · U-M02 OPEN · C1–C4 NOT VALIDATED.
 | Cancel concurrency | réserve head courant vs ancien |
 | Preuve distante absente | anti-claim + GO push/PR |

-Dette évitée : required check global incompatible path-filter.
+Dette évitée : required check global incompatible path-filter.
 Dette introduite : logique multi-jobs à maintenir ; preuve GitHub encore due.

 ---
```

## Verdict

`SFIA STUDIO V3-NATIVE OPTION A PATH-AWARE REQUIRED CHECK PR #270 — PR READINESS PASS — READY FOR MORRIS MERGE STRATEGY DECISION`

Réserve explicite non bloquante pour readiness merge : preuve hors Studio absente — bloquante pour M1.
