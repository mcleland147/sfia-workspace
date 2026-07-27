# Review pack FULL — Path-aware required check PR #270 whitespace correction

## Métadonnées cycle

| Champ | Valeur |
|-------|--------|
| **Date/heure** | 2026-07-27 06:40:44 CEST (+0200) |
| **Cycle** | 8 — Delivery correctif borné (+9 QA, +13 PR readiness limitée) |
| **Profil SFIA** | Standard |
| **Typologie** | DOC / EVOL corrective |
| **Gate consommé** | `GO CORRECT OPTION A PATH-AWARE REQUIRED CHECK PR WHITESPACE AND RERUN CI — SFIA STUDIO V3-NATIVE` |
| **Workspace** | `/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation` |
| **HEAD initial** | `e9813524e90d75d7d737b5ef330f8923f75cda43` |
| **HEAD final** | `9f03916243c470587f6958e058fd58909e5bd75a` |
| **origin/main** | `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| **merge-base** | `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A PATH-AWARE REQUIRED CHECK PR WHITESPACE CORRECTED — CI GREEN — READY FOR MORRIS PR READINESS DECISION` |

## Status initial / final

| | Initial | Final |
|--|---------|-------|
| tracked dirty | non | non |
| staged | vide | vide |
| untracked | `.tmp-sfia-review/` only | `.tmp-sfia-review/` only |
| ops Git actives | aucune | aucune |
| remote SHA | `e9813524…` | `9f039162…` |

## Sources consultées

- template cycle / handoff précédent blob `7a16b97d3df08d035bf3e617b878161ff4e1ae95`
- workflow blob inchangé `801a8759bb7440666799b95edf13f9ee6d9332f8`
- doc 32 avant `cc5459efed4f6e4d2f1e867fb94b81b49f3bde57` → après `1bc7b6544d27d687bf9e33757863f1397b1494b6`
- PR #270 ; run initial `30237044632` ; run corrigé `30237640228`

## Run initial (échec)

| Champ | Valeur |
|-------|--------|
| Run | **30237044632** |
| Head | `e9813524…` |
| Detect | success ; `studio_changed=true` |
| Build | failure — Trailing whitespace check |
| Gate | failure — validate_result=failure |
| Cause | doc 32 L48 et L245 trailing whitespace (deux espaces de fin) |

## Correction

Fichier unique :
`projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md`

Preuve caractères invisibles (avant) — repr Python :

```
L48: '**Avant :** `pull_request.paths` limitait le déclenchement aux chemins Studio.  \n'
L245: 'Dette évitée : required check global incompatible path-filter.  \n'
```

Après :

```
L48: '**Avant :** `pull_request.paths` limitait le déclenchement aux chemins Studio.\n'
L245: 'Dette évitée : required check global incompatible path-filter.\n'
```

`git diff --check` après correction : PASS (exit 0).
Workflow inchangé (même blob).

### Diff exact du commit correctif

```diff
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

Preuve repr des lignes de diff (espaces visibles) :

```
'-**Avant :** `pull_request.paths` limitait le déclenchement aux chemins Studio.  '
'+**Avant :** `pull_request.paths` limitait le déclenchement aux chemins Studio.'
'-Dette évitée : required check global incompatible path-filter.  '
'+Dette évitée : required check global incompatible path-filter.'
```

## Commit / push

| Champ | Valeur |
|-------|--------|
| Commit | `9f03916243c470587f6958e058fd58909e5bd75a` |
| Message | `docs(sfia-studio): remove trailing whitespace from path-aware preparation` |
| Parent | `e9813524e90d75d7d737b5ef330f8923f75cda43` |
| Amend / rebase / force | non |
| Push | `git push origin delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation` |
| SHA remote | `9f03916243c470587f6958e058fd58909e5bd75a` |

Diff PR global inchangé en fichiers : toujours 2 (workflow M + doc 32 A).
`git diff --check origin/main...HEAD` : PASS.

## PR #270 — corps

Titre inchangé. Claim inexact corrigé après PASS local réel.

### Avant (extrait Validations locales / Réserves)

```
- documentation du ruleset candidat M1 et des options de bypass.
## Validations locales
- `git diff --check` : PASS
## Réserves
- le comportement réel sur une PR hors Studio reste à prouver ;
- aucune activation M1 avant revue de la CI et preuve hors Studio.
```

Corps avant complet :

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
- `git diff --check` : PASS
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
- aucune activation M1 avant revue de la CI et preuve hors Studio.

Made with [Cursor](https://cursor.com)
```

### Après

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

Changements corps :
- `git diff --check : PASS` → `git diff --check : PASS après correction whitespace du document 32`
- réserve ajoutée sur run initial 30237044632

## Nouveau run CI

| Champ | Valeur |
|-------|--------|
| Run | **30237640228** (distinct de 30237044632) |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/30237640228 |
| Event | `pull_request` |
| Head | `9f03916243c470587f6958e058fd58909e5bd75a` |
| Workflow | SFIA Studio CI |
| Conclusion | **success** |

### Checks / jobs

| Check | Job ID | Conclusion |
|-------|--------|------------|
| Detect SFIA Studio changes | 89888367325 | **success** |
| Build and validate SFIA Studio | 89888387420 | **success** |
| SFIA Studio Required Gate | 89888526033 | **success** |

Preuves :
- Detect : `event_name=pull_request` ; `studio_changed=true`
- Trailing whitespace check : **success**
- Gate inputs : `detect_result=success` ; `validate_result=success` ; `studio_changed=true`

## Limite hors Studio

**NON PROUVÉ.** PR toujours Studio-in-scope (workflow + doc).

## Findings / réserves (inchangés)

F-A6-PM-G01 not CLOSED ; F-CI-01/02/04 OPEN ; F-CI-03/05 MITIGATED ; F-CI-06/06B MITIGATED not CLOSED.
M1 not applied ; required check not configured ; B2 not validated ; Option A not COMPLETE ; T-A7 not open.
Observation capitalisation (non appliquée ici) : le `git diff --check` du cycle de préparation n'avait pas couvert un fichier encore untracked.

## Actions non exécutées

merge, auto-merge, protection, ruleset, required check config, amend, rebase, force-push, workflow edit, finding close, T-A7.

## Décisions Morris / gates suivants

Gate suivant candidat (**NOT CONSUMED**) :
`GO REVIEW OPTION A PATH-AWARE REQUIRED CHECK PR AFTER WHITESPACE CORRECTION — SFIA STUDIO V3-NATIVE`

Ne pas conclure merge-ready sans cycle PR readiness distinct.

## Verdict

`SFIA STUDIO V3-NATIVE OPTION A PATH-AWARE REQUIRED CHECK PR WHITESPACE CORRECTED — CI GREEN — READY FOR MORRIS PR READINESS DECISION`
