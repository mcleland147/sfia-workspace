# SFIA Review Pack — F-A6 Closure Documentation PR Readiness (FULL)

## Metadata
- date/heure/fuseau: 2026-07-27 20:28:44 CEST (+0200)
- cycle: 13 — PR readiness (+ 9 QA, 15 Capitalisation, 14 Post-merge, 7 DevOps)
- profil SFIA: Critical
- typologie: PR-READINESS / DOC / GOVERNANCE / FINDING / CLOSURE
- gate consommé: `GO PR READINESS F-A6-PM-G01 CLOSURE DOCUMENTATION — SFIA STUDIO V3-NATIVE`
- repo: `mcleland147/sfia-workspace`
- worktree: `/Users/morris/Projects/sfia-workspace-fa6-closure`
- branche: `docs/sfia-studio-fa6-closure`
- HEAD: `a13759d5420d2e1d9915ab05a4dbb3872d85e8a0`
- parent: `df9d9c6e688be367f54aa9376e67543eab80533a`
- origin/main: `df9d9c6e688be367f54aa9376e67543eab80533a`
- merge-base: `df9d9c6e688be367f54aa9376e67543eab80533a`
- ahead/behind `origin/main...HEAD`: `0 / 1` — **Cas A** (base inchangée)
- blob doc24 base: `f62ff9c314d0de1b72e681bf0a15c00e6f96b198`
- blob doc24 HEAD: `53810c033fd4f9a75021a731b141325f914540de`
- handoff initial blob: `0e6bbfea993fa43888f072cd82c484388d6fd6bb`
- mode: lecture seule projet — **aucune** modification du commit

## 1. Local Git Truth
```
pwd=/Users/morris/Projects/sfia-workspace-fa6-closure
toplevel=/Users/morris/Projects/sfia-workspace-fa6-closure
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
branch=docs/sfia-studio-fa6-closure
HEAD=a13759d5420d2e1d9915ab05a4dbb3872d85e8a0
PARENT=df9d9c6e688be367f54aa9376e67543eab80533a
origin/main=df9d9c6e688be367f54aa9376e67543eab80533a
merge-base=df9d9c6e688be367f54aa9376e67543eab80533a
ahead_behind=0	1
## docs/sfia-studio-fa6-closure...origin/main [ahead 1]
diff_stat_empty=0
cached_empty=0
untracked:
active_ops:
(none if blank above)
worktree /Users/morris/Projects/sfia-workspace
HEAD c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf
branch refs/heads/delivery/sfia-studio-control-tower-fast-track

worktree /Users/morris/Projects/sfia-codex-pilot
HEAD ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
branch refs/heads/method/codex-operating-model-pilot

worktree /Users/morris/Projects/sfia-task-tracker
HEAD b763a318fb84e23e482ed23a0bd561c1d9e719e6
branch refs/heads/cadrage/task-tracker-light

worktree /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
HEAD cae841519ed1d2dd825e6ecb998337cd47b4a1e1
branch refs/heads/method/sfia-cycle-knowledge-contracts

worktree /Users/morris/Projects/sfia-workspace-d1-conversational-convergence
HEAD 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
branch refs/heads/ux/sfia-studio-d1-conversational-convergence

worktree /Users/morris/Projects/sfia-workspace-d1-platform-integration
HEAD c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
branch refs/heads/delivery/sfia-studio-d1-shared-platform-integration

worktree /Users/morris/Projects/sfia-workspace-doc32-post-p3-m1
HEAD dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
branch refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction

worktree /Users/morris/Projects/sfia-workspace-docs-recover
HEAD 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
branch refs/heads/docs/sfia-studio-recover-unmerged-project-docs

worktree /Users/morris/Projects/sfia-workspace-fa6-closure
HEAD a13759d5420d2e1d9915ab05a4dbb3872d85e8a0
branch refs/heads/docs/sfia-studio-fa6-closure

worktree /Users/morris/Projects/sfia-workspace-fa6-mitigated-clean
HEAD 67f140a19cf4a992dbc0d7b053abfde579a9a68c
branch refs/heads/docs/sfia-studio-fa6-mitigated-from-main

worktree /Users/morris/Projects/sfia-workspace-framing-next-increment
HEAD 88fa4658da07156614de270d8172f147535ddbf9
branch refs/heads/framing/sfia-studio-next-product-increment

worktree /Users/morris/Projects/sfia-workspace-m1-bypass-probe
HEAD f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23
branch refs/heads/qa/sfia-studio-m1-bypass-probe

worktree /Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert
HEAD b502c0069f836a729090bdc187dd98a0c26591ca

```
Attendus respectés pour identité Git. STOP local non déclenché.

## 2. Fraîcheur de base
- parent == origin/main == merge-base
- 1 commit ahead, 0 behind
- document 24 non modifié sur main hors ce commit
- **Cas A** — pas de rebase requis

## 3. Commit candidat
```
commit a13759d5420d2e1d9915ab05a4dbb3872d85e8a0
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Mon Jul 27 20:16:22 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Mon Jul 27 20:16:22 2026 +0200

    docs(sfia-studio): close F-A6 after M1 governance proofs

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../24-ci-and-merge-governance-preparation.md      | 139 +++++++++++++++------
 1 file changed, 101 insertions(+), 38 deletions(-)

```
```
commit a13759d5420d2e1d9915ab05a4dbb3872d85e8a0
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Mon Jul 27 20:16:22 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Mon Jul 27 20:16:22 2026 +0200

    docs(sfia-studio): close F-A6 after M1 governance proofs

    Co-authored-by: Cursor <cursoragent@cursor.com>

M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md

```
- message: `docs(sfia-studio): close F-A6 after M1 governance proofs` — **exact**
- parent unique ; 1 fichier ; M ; 101 / 38
- `git show --check` / `git diff --check` : **clean**
- périmètre commit : **PASS** (le FAIL readiness est documentaire, pas de scope)

## 4. Document 24 initial (Capitalisation avant clôture)
```markdown
### Capitalisation F-A6-PM-G01

| Champ | Valeur |
|------|--------|
| Statut | `MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED` |
| CLOSED | **NON** |
| Sévérité initiale | **Major** (gouvernance) — conservée |
| Problème initial | Merge #267 sans review PR/CI formelle / CI absente — conservé |
| Date/heure mitigation | 2026-07-27 11:35:05 CEST (+0200) — Europe/Paris |
| Décision Morris | D-M1-02 — formalisation MITIGATED approuvée (`GO FORMALIZE F-A6-PM-G01 AS MITIGATED AFTER M1 — SFIA STUDIO V3-NATIVE`) |
| Décision Morris négative | D-M1-03 — F-A6-PM-G01 **non CLOSED** |
| M1 | techniquement et comportementalement COMPLETE (D-M1-01) |
| Option A COMPLETE | **NON** (D-M1-05) |
| T-A7 | **NON OUVERTE** (D-M1-06) |

#### Critères historiques de clôture (conservés — non convertis en CLOSED)

| État | Qualification historique (doc 24) |
|------|----------------|
| Mitigation | **préparée** (workflow + gouvernance documentée) — puis **appliquée et prouvée** (voir preuves ci-dessous) |
| Clos | **NON** — exigeait run GitHub prouvé + gouvernance appliquée sur PR réelle + (éventuellement) required checks sous GO Morris ; la formalisation **CLOSED** reste une décision Morris séparée |

#### Preuves factuelles de mitigation (M1)

| Preuve | Référence |
|--------|-----------|
| P3 intégré sur `main` | PR #270 |
| Workflow blob | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
| Ruleset M1 actif | ID `19798462` — `SFIA Studio Main Required Gate — M1` — enforcement `active` — cible `refs/heads/main` |
| Required check | `SFIA Studio Required Gate` — integration ID `15368` |
| Preuve hors Studio PASS | PR #272 CLOSED non mergée — run `30248284607` |
| Preuve Studio failure BLOCKED | PR #273 — run `30248328467` |
| Preuve Studio recovery PASS | PR #273 — run `30248480927` |
| PR de preuve fermées sans merge | #272 et #273 — `merged=false` |
| Branches et worktrees de preuve | supprimés |
| Preuves GitHub | runs, checks et logs conservés |
| Bypass | non utilisé |

#### Réserves conservées

- finding **non CLOSED** ;
- document 32 obsolète (correction sous gate séparé) ;
- capitalisation / REX M1 encore requise (gate séparé) ;
- rollback non testé ;
- bypass non testé ;
- F-CI-* inchangés ;
- configuration M1 loose initiale (approvals 0 ; conversation resolution false ; up-to-date false) ;
- Option A non COMPLETE ;
- T-A7 non ouverte.

---

```

## 5. Document 24 final complet
```markdown
# 24 — CI and Merge Governance Preparation (Option A)

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 13:36:48 CEST (+0200) — Europe/Paris |
| **Cycle** | Intégration / DevOps — CI et gouvernance de merge SFIA Studio Option A |
| **Profil** | Critical |
| **Gate** | `GO PREPARE OPTION A CI AND MERGE GOVERNANCE — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **origin/main** | `910de87a9dad00491cd32cb6b439ce13cbc7bceb` |
| **Branche source** | `framing/sfia-studio-v3-native-option-a-after-t-a6` @ `aef7fd6d5a678857cf36e490f1550866d47c8887` |
| **Branche delivery** | `delivery/sfia-studio-v3-native-option-a-ci-merge-governance` (locale, **aucun upstream**) |
| **Worktree delivery** | `/Users/morris/Projects/sfia-workspace-option-a-ci-governance` |
| **Handoff source** | blob `69257aebdef7e351fb391d25447e5e92504f87ed` · Option F |
| **Finding capitalisé** | **F-A6-PM-G01** — **CLOSED** (formalisation locale sous `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE`) ; états antérieurs supersédés : mitigation préparée → MITIGATED NOT CLOSED |
| **CI GitHub run** | **prouvée** (M1 + post-merge ; voir Capitalisation F-A6-PM-G01) |
| **Branch protection / required checks** | **APPLIED** via ruleset M1 `19798462` (état antérieur de préparation : PROPOSED — supersédé) |
| **T-A6 COMPLETE** | **NON** |
| **Option A COMPLETE** | **NON** |
| **T-A7** | **NON ouvert** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A CI AND MERGE GOVERNANCE PREPARED — GITHUB RUN AND APPLICATION REQUIRE MORRIS GO` |
| **Gate suivant candidat** | `GO PUBLISH OPTION A CI GOVERNANCE BRANCH AND CREATE PR — SFIA STUDIO V3-NATIVE` (**NOT consumed**) |

---

## 1. Gate consommé

Gate Morris :

`GO PREPARE OPTION A CI AND MERGE GOVERNANCE — SFIA STUDIO V3-NATIVE`

Autorisé : lecture repo/config GitHub, branche locale, workflow candidat sous `.github/workflows/**`, docs CI/gouvernance, validations locales, commits locaux, review pack FULL, handoff L3.

**Non autorisé / non exécuté** : push branche projet, PR, merge, rulesets/branch protections distants, required checks, auto-merge, merge queue, runtime métier Option A, T-A7, fermeture de réserve.

---

## 2. Truth Check

| Contrôle | Résultat |
|----------|----------|
| Repo `mcleland147/sfia-workspace` | **PASS** |
| `origin/main` = `910de87…` | **PASS** (inchangé) |
| Branche source = framing after T-A6 @ `aef7fd6…` | **PASS** |
| Merge-base avec `origin/main` | `910de87…` |
| Avance / retard vs `origin/main` | **+2 / −0** (docs 22 + README T-A6 + 23) |
| Contenu source = docs post-merge/cadrage uniquement | **PASS** |
| Pas de workflow SFIA Studio concurrent | **PASS** (seul `interv360-ci.yml`) |
| Pas de PR ouverte workflows / sfia-studio | **PASS** |
| Pas d’opération Git active | **PASS** |
| Worktrees T-A6 / framing / main non checkoutés pour delivery | **PASS** |
| Worktree delivery créé | **PASS** · aucun upstream |

**Verdict Truth Check :** PASS — cycle autorisé à écrire.

---

## 3. Sources

| Source | Usage |
|--------|-------|
| Template cycle · routing · méthode · operating model · garde-fous | méthode |
| Handoff blob `69257aeb…` | recommandation Option F + gate |
| Docs `22` / `23` · finding **F-A6-PM-G01** · PR #267 | constat CI ABSENT |
| `.github/workflows/interv360-ci.yml` | pattern CI repo (paths, Node 20, `npm ci`) |
| `projects/sfia-studio/app/package.json` + `package-lock.json` | scripts / lockfile |
| `projects/sfia-studio/sfia-v3-modeled/**/tests/*.mjs` | non-régression modeled |
| Docs OPS1 Node engines (Cas B) | pin Node Studio **non figé** |
| Harness `engines.node >=20` | borne inférieure tooling, **≠** pin Studio |

**Index Option A racine :** aucun README canonique `v3-native-option-a/README.md` — **non inventé** ; pas de mise à jour d’index.

---

## 4. Cycle Knowledge Contract

| Champ | Valeur |
|-------|--------|
| **Contrat trouvé** | **non** (pas de CKC DevOps / intégration dédié) |
| **Path** | n/a |
| **Statut** | **absent** |
| **Pilotes disponibles** | `pilots/01-cadrage.md` … `04-qa-validation.md` uniquement |
| **Usage** | experimental cognitive guidance (QA pilot **périphérique** seulement) |
| **Autorité** | **aucune** autorité d’exécution |
| **Fallback** | méthode cycles + workflow Interv360 + architecture réelle SFIA Studio |
| **Limites** | aucune modification distante GitHub · aucun merge · aucun push projet |

---

## 5. État CI initial

| Élément | Fait |
|---------|------|
| Workflows existants | **1** — `.github/workflows/interv360-ci.yml` |
| Paths Interv360 | `projects/interv360/**` + workflow lui-même |
| Couverture `projects/sfia-studio/**` | **aucune** |
| Checks GitHub PR #267 | **absents** (cause racine de F-A6-PM-G01 côté observabilité CI) |
| Dependabot / CODEOWNERS / templates PR Studio | **absents** sous `.github/` (hors `workflows/`) |

---

## 6. Analyse préalable (architecture réelle)

| Rubrique | Fait |
|----------|------|
| Package manager | **npm** (`package-lock.json` lockfileVersion **3**) |
| Working directory app | `projects/sfia-studio/app` |
| Node Studio pin | **absent** (pas de `.nvmrc` / `.node-version` / `engines` dans `app/package.json`) |
| Node CI retenu | **20** — dérivé du **précédent repo** Interv360 CI + borne harness `>=20` ; **pas** une décision `engines` Studio |
| Node local de validation | **v24.16.0** (écart documenté ; run GitHub **non** prouvé sur 20) |
| Lockfile | présent · `npm ci` **OK** localement |
| Scripts package | `typecheck`, `lint`, `build`, `test` (vitest), `test:e2e` (playwright — **hors** CI candidate) |
| Suites OA ciblées | couvertes par `npm test` (Vitest global) |
| Modeled | `node --test` sur 3 fichiers governance sous `sfia-v3-modeled/v3-native-option-a/tests/` |
| Secrets CI | **aucun** requis |
| Permissions GHA | `contents: read` |
| Réseau | `npm ci` (registry) + Next build — **pas** de service productif Option A |
| Services externes tests | non requis pour les suites retenues (provider live hors scope) |
| Non-déterminisme | aucun observé sur suites retenues |
| Ubuntu | commandes Node/npm standards — **compatibles** ; e2e Playwright **exclu** (coût / deps navigateur) |
| macOS-only | **non** pour les commandes retenues |

### Qualification des commandes

| Commande | Qualification |
|----------|----------------|
| `npm ci` | **obligatoire chaque PR** (paths Studio) |
| `npm run typecheck` | **obligatoire** |
| `npm run lint` | **obligatoire** |
| `npm run build` | **obligatoire** |
| `npm test` | **obligatoire** (runtime Studio + OA T-A3…T-A6 via Vitest) |
| `node --test` modeled (3 fichiers) | **obligatoire** (modeled hors Vitest app) |
| Secret pattern scan (git grep) | **obligatoire** (léger, sans outil externe) |
| `git diff --check` | **obligatoire** sur PR (base…HEAD) |
| `npm run test:e2e` / Playwright | **locale / hors CI** (coût, browsers) |
| `npm audit fix` | **non applicable** ce cycle (interdit de modifier lockfile) |
| Matrice multi-Node | **écartée** (pas de besoin démontré ; pin Studio ouvert) |

---

## 7. Architecture CI retenue

| Champ | Valeur |
|-------|--------|
| Fichier | `.github/workflows/sfia-studio-ci.yml` |
| Nom workflow | `SFIA Studio CI` |
| Jobs | **1** — `validate` / check name **`Build and validate SFIA Studio`** |
| Runner | `ubuntu-latest` |
| Actions | `actions/checkout@v4`, `actions/setup-node@v4` |
| Cache | npm via `cache-dependency-path: projects/sfia-studio/app/package-lock.json` |
| Permissions | `contents: read` |
| Concurrency | `sfia-studio-ci-${{ github.workflow }}-${{ github.event.pull_request.number \|\| github.ref }}` · `cancel-in-progress: true` |
| Timeout | **30** minutes |
| Secrets | **aucun** |
| Déploiement / DB / exécution réelle Option A | **aucun** |

### Paths déclencheurs

- `projects/sfia-studio/**` (inclut `app/**` **et** `sfia-v3-modeled/**`)
- `.github/workflows/sfia-studio-ci.yml`

Événements : `pull_request` (tous branches) + `push` vers `main`, filtrés par paths.

### Alternatives écartées

| Alternative | Motif d’écart |
|-------------|----------------|
| Étendre Interv360 CI | mélange de projets ; chemins / jobs distincts |
| Matrice Node 18/20/22/24 | pin Studio ouvert ; coût sans besoin démontré |
| Job séparé par suite OA | redondant avec `npm test` unique |
| Playwright e2e en CI | hors périmètre ; deps navigateur ; non exigé pour F-A6-PM-G01 |
| Scanner secrets SaaS | dépendance externe non maîtrisée |
| Modifier `engines` / lockfile | **interdit** ce cycle → cycle correctif séparé si Morris l’exige |

---

## 8. Jobs / checks / commandes exactes

**Check GitHub candidat (nom affiché) :** `Build and validate SFIA Studio`

Étapes (cwd app sauf mention) :

1. Checkout (`fetch-depth: 0`)
2. Setup Node **20** + cache npm
3. `npm ci`
4. `npm run typecheck`
5. `npm run lint`
6. `npm run build`
7. `npm test`
8. Modeled (cwd `projects/sfia-studio`) :

```bash
node --test \
  sfia-v3-modeled/v3-native-option-a/tests/evidence-review-maturity-governance.test.mjs \
  sfia-v3-modeled/v3-native-option-a/tests/execution-contract-governance.test.mjs \
  sfia-v3-modeled/v3-native-option-a/tests/execution-attempt-governance.test.mjs
```

9. Secret pattern scan (workspace) — `BEGIN … PRIVATE KEY` / `AKIA…`
10. Trailing whitespace — `git diff --check` base…HEAD (PR) ou before…HEAD (push)

**Anti-doublon :** pas d’alias séparés T-A3/T-A4/T-A5/T-A6 — Vitest global + modeled dédié.

---

## 9. Validation locale

Formulation obligatoire :

**WORKFLOW LOCALLY VALIDATED — GITHUB ACTIONS RUN NOT YET PROVEN**

| Étape | rc | Durée locale | Résultat |
|-------|-----|--------------|----------|
| `npm ci` | 0 | ~7.3 s | 414 packages |
| `npm run typecheck` | 0 | ~2 s | PASS |
| `npm run lint` | 0 | ~5 s | PASS |
| `npm run build` | 0 | ~9 s | PASS |
| `npm test` | 0 | ~7 s | **71** files · **655** tests PASS |
| modeled `node --test` (3 fichiers) | 0 | <1 s | **73** pass · 0 fail |
| secret scan | 0 | <1 s | aucun match |
| `git diff --check origin/main...HEAD` | 0 | <1 s | PASS |
| YAML parse (`ruby -ryaml`) | 0 | <1 s | **YAML_OK** |
| actionlint | n/a | — | **non disponible** localement · **non installé** (repo non modifié) |

**Host local :** Darwin · Node **v24.16.0** (≠ Node 20 CI).

**npm audit :** 12 high severity signalés après `npm ci` — **Observation** ; correction lockfile **hors** périmètre.

**Skipped inattendus :** aucun.

---

## 10. Limites de validation

- Aucun run GitHub Actions n’a eu lieu.
- Le nom exact du check sur l’UI GitHub doit être **ré-observé** après le premier run avant required status.
- Node 20 CI non exécuté localement (Node 20 absent sur la machine).
- actionlint non exécuté.
- `npm audit` non traité.
- Playwright non inclus.
- Pin `engines.node` Studio reste **OPEN** (Cas B OPS1).

---

## 11. Gouvernance PR / CI / merge (séquence fermée)

Applicable aux futurs cycles SFIA Studio Option A (et réutilisable pour CI Studio) :

1. **PR readiness** validé (doc + preuves locales).
2. **GO Morris de publication** explicite.
3. Branche poussée + **PR créée**.
4. Cycle **`GO REVIEW [SCOPE] PR AND CI`** (obligatoire).
5. Checks obligatoires **confirmés** sur le head SHA reviewé.
6. **Stratégie de merge explicitement choisie** :
   - **H1** — merge commit ;
   - **H2** — squash merge ;
   - **H3** — rebase merge (**seulement** si justifié).
7. **GO Morris de merge** exact (texte + SHA + stratégie).
8. Merge exécuté.
9. **Post-merge** review.
10. Suppression de branche **uniquement** sur GO Morris séparé ou règle explicite déjà adoptée.

### Stop conditions

- CI absente ;
- CI en échec ;
- checks incomplets ;
- head SHA modifié après review ;
- base avancée ;
- conflits ;
- finding Critical/Major non traité ;
- review pack incomplet ;
- handoff obsolète ;
- stratégie de merge non décidée ;
- gate merge absent.

### Anti-claims

- PR ouverte ≠ ready to merge ;
- mergeable ≠ validée ;
- CI absente ≠ PASS ;
- tests locaux ≠ CI distante ;
- recommandation H1/H2/H3 ≠ décision Morris ;
- merge ≠ incrément COMPLETE ;
- merge ≠ production ready.

### Capitalisation F-A6-PM-G01

| Champ | Valeur |
|------|--------|
| Statut | `CLOSED — M1 GOVERNANCE CONTROL APPLIED, BEHAVIORALLY PROVEN, ROLLBACK-TESTED AND BYPASS-QUALIFIED` |
| CLOSED | **OUI** |
| Sévérité initiale | **Major** (gouvernance) — conservée comme information historique |
| Problème initial | Merge #267 sans review PR/CI formelle / CI absente — **objet exclusif** de la clôture |
| Date/heure mitigation | 2026-07-27 11:35:05 CEST (+0200) — Europe/Paris |
| Date/heure clôture | 2026-07-27 20:14:47 CEST (+0200) — Europe/Paris |
| Décision Morris de mitigation (antérieure) | D-M1-02 — formalisation MITIGATED (`GO FORMALIZE F-A6-PM-G01 AS MITIGATED AFTER M1 — SFIA STUDIO V3-NATIVE`) — **supersédée** pour le statut CLOSED |
| Décision Morris antérieure NOT CLOSED | D-M1-03 — F-A6-PM-G01 **non CLOSED** — **supersédée** par le GO de clôture ci-dessous |
| Décision Morris de clôture | `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
| M1 | techniquement et comportementalement COMPLETE (D-M1-01) |
| Option A COMPLETE | **NON** (D-M1-05) — inchangé |
| T-A7 | **NON OUVERTE** (D-M1-06) — inchangé |

#### Décision Morris de clôture

| Champ | Valeur |
|------|--------|
| Décision validée | F-A6-PM-G01 = **CLOSED** |
| Autorité | Morris — gate `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` |
| Objet exact | traitement du problème initial (#267 sans review PR/CI formelle ; absence de CI SFIA Studio observable ; absence de contrôle de merge démontré) |
| Date/heure/fuseau | 2026-07-27 20:14:47 CEST (+0200) — Europe/Paris |
| Preuves déterminantes | required gate path-aware actif ; #272 hors Studio PASS ; #273 BLOCKED + recovery ; #275/#276 merges + CI post-merge ; rollback ruleset restore identique (1 s) ; #277 bypass explicite REST sans `--admin` ; #278 revert normal + CI post-revert SUCCESS ; pollution 173 s ; diff net vide ; ruleset `19798462` actif inchangé |
| Condition technique restante | **aucune** pour le problème initial F-A6 |
| Hardening loose | **distinct** — non absorbé par cette clôture ; aucune décision de durcissement ici |
| Intégration Git canonique | formalisation **locale** sur branche `docs/sfia-studio-fa6-closure` ; `main` reste inchangé jusqu’à PR/merge futurs |

#### Critères historiques de clôture (tous satisfaits)

| Critère | Statut |
|---------|--------|
| Run GitHub prouvé | **satisfait** |
| Gouvernance appliquée sur PR réelle | **satisfait** |
| Required checks appliqués | **satisfait** |
| Blocage d’une PR invalide | **satisfait** |
| Recovery validée | **satisfait** |
| Post-merge validé | **satisfait** |
| Rollback validé | **satisfait** |
| Bypass qualifié | **satisfait** |
| Contrôle actif sur `main` | **satisfait** |
| Documentation et REX disponibles | **satisfait** |

État antérieur (supersédé) : avant ce GO, le statut était `MITIGATED — … — NOT CLOSED` et la formalisation CLOSED était une décision Morris séparée.

#### Preuves factuelles (mitigation M1 + clôture)

| Preuve | Référence |
|--------|-----------|
| P3 intégré sur `main` | PR #270 |
| Workflow blob (référence historique M1) | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
| Ruleset M1 actif | ID `19798462` — `SFIA Studio Main Required Gate — M1` — enforcement `active` — cible `refs/heads/main` |
| Required check | `SFIA Studio Required Gate` — integration ID `15368` |
| Preuve hors Studio PASS | PR #272 CLOSED non mergée — run `30248284607` |
| Preuve Studio failure BLOCKED | PR #273 — run `30248328467` |
| Preuve Studio recovery PASS | PR #273 — run `30248480927` |
| PR de preuve fermées sans merge | #272 et #273 — `merged=false` |
| Formalisation MITIGATED (antérieure) | PR #274 |
| Alignement document 32 | PR #275 — squash `ae61c3ed48d4d1c9fe751eddd73617ba15480734` |
| REX M1 intégré | PR #276 — squash `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13` — doc `33` blob `6c87cf4016d6a33f096df921acf8bafd4d73af4e` |
| Rollback ruleset | désactivation puis restauration identique en **1 s** — `RULESET_RESTORED_IDENTICALLY` — main inchangé pendant le test |
| Bypass comportemental | PR #277 — run `30290065655` (Trailing whitespace → Required Gate failure) ; merge normal bloqué ; bypass REST explicite acteur ruleset (sans `--admin`) — squash `17840f45f74bbae702bd1a18acb9723b149a6ea0` |
| Revert normal | PR #278 — run `30290283916` SUCCESS ; squash `df9d9c6e688be367f54aa9376e67543eab80533a` (sans bypass) |
| CI post-revert | run `30290479092` SUCCESS |
| Pollution bornée | **173 s** ; diff net `49f2edfa…`…`df9d9c6…` **vide** ; fichier probe absent |
| État final `main` (au moment de la formalisation) | `df9d9c6e688be367f54aa9376e67543eab80533a` |
| Preuves GitHub | runs, checks et logs conservés |

#### Réserves F-A6 devenues obsolètes (retirées)

Les items suivants **ne sont plus** des réserves ouvertes de F-A6 :

- finding non CLOSED ;
- document 32 obsolète (corrigé via PR #275) ;
- capitalisation / REX M1 encore requise (intégré via PR #276) ;
- rollback non testé (prouvé) ;
- bypass non testé (prouvé comportementalement).

#### Sujets distincts non bloquants après clôture

Ces sujets **ne rouvrent pas** F-A6. Ils relèvent d’un futur cycle de hardening, d’un backlog, ou d’un finding distinct. **Aucune** décision de durcissement n’est prise ici.

- configuration M1 loose : approvals = `0` ; strict up-to-date = `false` ; conversation resolution = `false` ;
- bypass actor Morris conservé (mode `pull_request`) — capacité désormais **qualifiée**, non recommandée comme méthode normale ;
- auditabilité organisationnelle limitée (audit log org non accessible dans les cycles de preuve) ;
- traces Git permanentes du probe/revert (#277/#278) ;
- findings F-CI-* inchangés ;
- Option A non COMPLETE ;
- T-A7 non ouverte ;
- D1–D7 du REX restent `NOT DECIDED` (hors clôture F-A6).

#### Anti-claims de clôture

- F-A6 CLOSED ≠ Option A COMPLETE ;
- F-A6 CLOSED ≠ T-A7 OPEN ;
- F-A6 CLOSED ≠ ruleset hardened ;
- F-A6 CLOSED ≠ bypass recommandé ;
- F-A6 CLOSED ≠ production-ready ;
- F-A6 CLOSED ≠ D1–D7 décidées ;
- clôture documentaire locale ≠ intégration sur `main` ;
- commit local ≠ PR ;
- PR future ≠ merge.

---

## 12. Proposition branch protection / required checks

**Statut historique (cycle de préparation) :** `PROPOSED — NOT APPLIED — MORRIS GO REQUIRED` — **supersédé**.

**État actuel (post-M1) :** ruleset `19798462` (`SFIA Studio Main Required Gate — M1`) **actif** sur `refs/heads/main` ; required check `SFIA Studio Required Gate` / integration `15368`. La proposition ci-dessous reste la trace du cycle de préparation ; elle ne contredit plus l’application M1 ultérieure.

Ce cycle de préparation **n’avait modifié aucun** ruleset / branch protection distant (l’application M1 relève de cycles postérieurs).

| Élément | Proposition |
|---------|-------------|
| Check candidat | `Build and validate SFIA Studio` (job `validate`) |
| Required | **seulement après** premier run GitHub observé (nom UI confirmé) |
| Branche à jour | recommandé pour `main` après preuve CI |
| Review | ≥1 review humaine Morris (ou règle CODEOWNERS future) — **candidat** |
| Force-push `main` | **interdire** |
| Suppression branche head | **pas automatique** ; GO Morris séparé |
| Stratégies merge `main` | laisser H1/H2 disponibles ; H3 restreint ; **choix par cycle** |
| Ordre d’activation | (1) publier workflow via PR · (2) obtenir 1er run vert · (3) observer nom check · (4) GO Morris apply required · (5) ensuite seulement exiger sur merges Studio |

**Ne pas** rendre required avant observation du nom réel sur GitHub.

---

## 13. Sécurité

- Permissions minimales `contents: read`.
- Aucun secret projet / token write.
- Aucune écriture GitHub depuis le workflow.
- Scan patterns secrets **local** (git grep) — couverture limitée volontairement.
- Pas d’exécution réelle Option A / provider live.

---

## 14. Coûts / temps raisonnables

| Estimation | Valeur |
|------------|--------|
| Local (ci + suites) | ~**30 s** sur machine de validation |
| CI GitHub attendue | typiquement **2–8 min** (cold cache + Next build) — **non mesurée** |
| Timeout job | 30 min (marge) |
| Concurrency cancel | limite les runs PR obsolètes |

---

## 15. Findings

| ID | Sévérité | Description | Action ce cycle |
|----|----------|-------------|-----------------|
| F-A6-PM-G01 | **Major** (gouvernance) — sévérité initiale historique | Merge #267 sans review PR/CI formelle / CI absente | **CLOSED — M1 GOVERNANCE PROOFS COMPLETE — MORRIS CLOSURE DECISION RECORDED** (voir Capitalisation F-A6-PM-G01) |
| F-CI-01 | **Observation** | Pin Node Studio absent ; CI candidate Node 20 = précédent Interv360 | Documenté · pas de modif `package.json` |
| F-CI-02 | **Observation** | `npm audit` 12 high après `npm ci` | Hors périmètre · cycle deps séparé si Morris |
| F-CI-03 | **Observation** | Validation locale Node 24 ≠ CI Node 20 | Limite explicite |
| F-CI-04 | **Minor** | actionlint non disponible | YAML validé via Ruby · actionlint reporté absent |

**Critical technique bloquant CI :** aucun.

---

## 16. Réserves (inchangées — OPEN)

| Réserve | Statut |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** |
| R-T-A3-2 | **OPEN** |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** |
| U-M02 | **OPEN** |
| C1–C4 | **RECOMMENDED — NOT VALIDATED** |

Le workflow CI **ne ferme** aucune réserve métier/architecture · **ne débloque pas** l’exécution réelle · **ne rend pas** Option A production-ready.

---

## 17. Décisions

### Validées (ce cycle — préparation locale)

- Créer workflow dédié `sfia-studio-ci.yml` (ne pas étendre Interv360).
- Job unique `Build and validate SFIA Studio`.
- Paths limités à `projects/sfia-studio/**` + workflow.
- Node **20** comme version **CI candidate** (précédent repo), sans figer `engines` Studio.
- Inclure Vitest global + 3 tests modeled + scans légers.
- Exclure Playwright e2e de la CI candidate.
- Documenter gouvernance H1/H2/H3 + stop conditions + anti-claims.
- Branch protection / required checks : **PROPOSED — NOT APPLIED**.

### Candidates (Morris)

- Publier branche + créer PR CI/gouvernance.
- Après 1er run : activer required check sous GO distinct.
- Choisir pin `engines.node` Studio (cycle config séparé).
- Traiter `npm audit` (cycle deps séparé).
- Politique review obligatoire / CODEOWNERS.

### Morris requises (historique de préparation — statut actualisé)

- GO publish + PR — **consommé** dans les cycles postérieurs de publication CI/gouvernance ;
- GO review PR and CI — **consommé** dans les cycles postérieurs ;
- GO apply branch protection / required checks — **consommé** via M1 (ruleset `19798462`) ;
- GO merge (avec H1/H2/H3 explicite) — **consommé** pour les merges Studio gouvernés postérieurs ;
- fermeture F-A6-PM-G01 — **consommé** : `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (formalisation locale dans ce document ; intégration `main` en attente de PR/merge).

---

## 18. Gate suivant candidat

```
GO PUBLISH OPTION A CI GOVERNANCE BRANCH AND CREATE PR
— SFIA STUDIO V3-NATIVE
```

**NOT consumed.**

Ensuite (obligatoire avant merge) :

```
GO REVIEW OPTION A CI GOVERNANCE PR AND CI
— SFIA STUDIO V3-NATIVE
```

Ne pas proposer directement un merge.

---

## 19. Fichiers de ce cycle

| Path | Action |
|------|--------|
| `.github/workflows/sfia-studio-ci.yml` | **créé** |
| `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md` | **créé** |
| Index Option A | **non modifié** (absent · non inventé) |

**Non modifiés :** Interv360 workflow · runtime · tests · modeled · T-A0…T-A6 · package.json · lockfiles · tsconfig · lint/test/build config · method · prompts · main · T-A6 worktree.

---

## 20. Verdict

Verdict historique du cycle de préparation (conservé) :

`SFIA STUDIO V3-NATIVE OPTION A CI AND MERGE GOVERNANCE PREPARED — GITHUB RUN AND APPLICATION REQUIRE MORRIS GO`

Addendum de clôture F-A6 (formalisation locale) :

`SFIA STUDIO F-A6-PM-G01 MORRIS CLOSURE DECISION FORMALIZED LOCALLY — DOCUMENT 24 UPDATED — HISTORICAL CRITERIA, ROLLBACK AND BYPASS PROOFS RECORDED — LOOSE-CONFIG HARDENING KEPT DISTINCT — CANONICAL MAIN INTEGRATION PENDING — OPTION A NOT COMPLETE — T-A7 NOT OPEN`

```

## 6. Sections modifiées — Capitalisation F-A6
```markdown
### Capitalisation F-A6-PM-G01

| Champ | Valeur |
|------|--------|
| Statut | `CLOSED — M1 GOVERNANCE CONTROL APPLIED, BEHAVIORALLY PROVEN, ROLLBACK-TESTED AND BYPASS-QUALIFIED` |
| CLOSED | **OUI** |
| Sévérité initiale | **Major** (gouvernance) — conservée comme information historique |
| Problème initial | Merge #267 sans review PR/CI formelle / CI absente — **objet exclusif** de la clôture |
| Date/heure mitigation | 2026-07-27 11:35:05 CEST (+0200) — Europe/Paris |
| Date/heure clôture | 2026-07-27 20:14:47 CEST (+0200) — Europe/Paris |
| Décision Morris de mitigation (antérieure) | D-M1-02 — formalisation MITIGATED (`GO FORMALIZE F-A6-PM-G01 AS MITIGATED AFTER M1 — SFIA STUDIO V3-NATIVE`) — **supersédée** pour le statut CLOSED |
| Décision Morris antérieure NOT CLOSED | D-M1-03 — F-A6-PM-G01 **non CLOSED** — **supersédée** par le GO de clôture ci-dessous |
| Décision Morris de clôture | `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
| M1 | techniquement et comportementalement COMPLETE (D-M1-01) |
| Option A COMPLETE | **NON** (D-M1-05) — inchangé |
| T-A7 | **NON OUVERTE** (D-M1-06) — inchangé |

#### Décision Morris de clôture

| Champ | Valeur |
|------|--------|
| Décision validée | F-A6-PM-G01 = **CLOSED** |
| Autorité | Morris — gate `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` |
| Objet exact | traitement du problème initial (#267 sans review PR/CI formelle ; absence de CI SFIA Studio observable ; absence de contrôle de merge démontré) |
| Date/heure/fuseau | 2026-07-27 20:14:47 CEST (+0200) — Europe/Paris |
| Preuves déterminantes | required gate path-aware actif ; #272 hors Studio PASS ; #273 BLOCKED + recovery ; #275/#276 merges + CI post-merge ; rollback ruleset restore identique (1 s) ; #277 bypass explicite REST sans `--admin` ; #278 revert normal + CI post-revert SUCCESS ; pollution 173 s ; diff net vide ; ruleset `19798462` actif inchangé |
| Condition technique restante | **aucune** pour le problème initial F-A6 |
| Hardening loose | **distinct** — non absorbé par cette clôture ; aucune décision de durcissement ici |
| Intégration Git canonique | formalisation **locale** sur branche `docs/sfia-studio-fa6-closure` ; `main` reste inchangé jusqu’à PR/merge futurs |

#### Critères historiques de clôture (tous satisfaits)

| Critère | Statut |
|---------|--------|
| Run GitHub prouvé | **satisfait** |
| Gouvernance appliquée sur PR réelle | **satisfait** |
| Required checks appliqués | **satisfait** |
| Blocage d’une PR invalide | **satisfait** |
| Recovery validée | **satisfait** |
| Post-merge validé | **satisfait** |
| Rollback validé | **satisfait** |
| Bypass qualifié | **satisfait** |
| Contrôle actif sur `main` | **satisfait** |
| Documentation et REX disponibles | **satisfait** |

État antérieur (supersédé) : avant ce GO, le statut était `MITIGATED — … — NOT CLOSED` et la formalisation CLOSED était une décision Morris séparée.

#### Preuves factuelles (mitigation M1 + clôture)

| Preuve | Référence |
|--------|-----------|
| P3 intégré sur `main` | PR #270 |
| Workflow blob (référence historique M1) | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
| Ruleset M1 actif | ID `19798462` — `SFIA Studio Main Required Gate — M1` — enforcement `active` — cible `refs/heads/main` |
| Required check | `SFIA Studio Required Gate` — integration ID `15368` |
| Preuve hors Studio PASS | PR #272 CLOSED non mergée — run `30248284607` |
| Preuve Studio failure BLOCKED | PR #273 — run `30248328467` |
| Preuve Studio recovery PASS | PR #273 — run `30248480927` |
| PR de preuve fermées sans merge | #272 et #273 — `merged=false` |
| Formalisation MITIGATED (antérieure) | PR #274 |
| Alignement document 32 | PR #275 — squash `ae61c3ed48d4d1c9fe751eddd73617ba15480734` |
| REX M1 intégré | PR #276 — squash `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13` — doc `33` blob `6c87cf4016d6a33f096df921acf8bafd4d73af4e` |
| Rollback ruleset | désactivation puis restauration identique en **1 s** — `RULESET_RESTORED_IDENTICALLY` — main inchangé pendant le test |
| Bypass comportemental | PR #277 — run `30290065655` (Trailing whitespace → Required Gate failure) ; merge normal bloqué ; bypass REST explicite acteur ruleset (sans `--admin`) — squash `17840f45f74bbae702bd1a18acb9723b149a6ea0` |
| Revert normal | PR #278 — run `30290283916` SUCCESS ; squash `df9d9c6e688be367f54aa9376e67543eab80533a` (sans bypass) |
| CI post-revert | run `30290479092` SUCCESS |
| Pollution bornée | **173 s** ; diff net `49f2edfa…`…`df9d9c6…` **vide** ; fichier probe absent |
| État final `main` (au moment de la formalisation) | `df9d9c6e688be367f54aa9376e67543eab80533a` |
| Preuves GitHub | runs, checks et logs conservés |

#### Réserves F-A6 devenues obsolètes (retirées)

Les items suivants **ne sont plus** des réserves ouvertes de F-A6 :

- finding non CLOSED ;
- document 32 obsolète (corrigé via PR #275) ;
- capitalisation / REX M1 encore requise (intégré via PR #276) ;
- rollback non testé (prouvé) ;
- bypass non testé (prouvé comportementalement).

#### Sujets distincts non bloquants après clôture

Ces sujets **ne rouvrent pas** F-A6. Ils relèvent d’un futur cycle de hardening, d’un backlog, ou d’un finding distinct. **Aucune** décision de durcissement n’est prise ici.

- configuration M1 loose : approvals = `0` ; strict up-to-date = `false` ; conversation resolution = `false` ;
- bypass actor Morris conservé (mode `pull_request`) — capacité désormais **qualifiée**, non recommandée comme méthode normale ;
- auditabilité organisationnelle limitée (audit log org non accessible dans les cycles de preuve) ;
- traces Git permanentes du probe/revert (#277/#278) ;
- findings F-CI-* inchangés ;
- Option A non COMPLETE ;
- T-A7 non ouverte ;
- D1–D7 du REX restent `NOT DECIDED` (hors clôture F-A6).

#### Anti-claims de clôture

- F-A6 CLOSED ≠ Option A COMPLETE ;
- F-A6 CLOSED ≠ T-A7 OPEN ;
- F-A6 CLOSED ≠ ruleset hardened ;
- F-A6 CLOSED ≠ bypass recommandé ;
- F-A6 CLOSED ≠ production-ready ;
- F-A6 CLOSED ≠ D1–D7 décidées ;
- clôture documentaire locale ≠ intégration sur `main` ;
- commit local ≠ PR ;
- PR future ≠ merge.

---


```

### §12
```markdown
## 12. Proposition branch protection / required checks

**Statut historique (cycle de préparation) :** `PROPOSED — NOT APPLIED — MORRIS GO REQUIRED` — **supersédé**.

**État actuel (post-M1) :** ruleset `19798462` (`SFIA Studio Main Required Gate — M1`) **actif** sur `refs/heads/main` ; required check `SFIA Studio Required Gate` / integration `15368`. La proposition ci-dessous reste la trace du cycle de préparation ; elle ne contredit plus l’application M1 ultérieure.

Ce cycle de préparation **n’avait modifié aucun** ruleset / branch protection distant (l’application M1 relève de cycles postérieurs).

| Élément | Proposition |
|---------|-------------|
| Check candidat | `Build and validate SFIA Studio` (job `validate`) |
| Required | **seulement après** premier run GitHub observé (nom UI confirmé) |
| Branche à jour | recommandé pour `main` après preuve CI |
| Review | ≥1 review humaine Morris (ou règle CODEOWNERS future) — **candidat** |
| Force-push `main` | **interdire** |
| Suppression branche head | **pas automatique** ; GO Morris séparé |
| Stratégies merge `main` | laisser H1/H2 disponibles ; H3 restreint ; **choix par cycle** |
| Ordre d’activation | (1) publier workflow via PR · (2) obtenir 1er run vert · (3) observer nom check · (4) GO Morris apply required · (5) ensuite seulement exiger sur merges Studio |

**Ne pas** rendre required avant observation du nom réel sur GitHub.

---


```

### §17 (source de la contradiction)
```markdown
## 17. Décisions

### Validées (ce cycle — préparation locale)

- Créer workflow dédié `sfia-studio-ci.yml` (ne pas étendre Interv360).
- Job unique `Build and validate SFIA Studio`.
- Paths limités à `projects/sfia-studio/**` + workflow.
- Node **20** comme version **CI candidate** (précédent repo), sans figer `engines` Studio.
- Inclure Vitest global + 3 tests modeled + scans légers.
- Exclure Playwright e2e de la CI candidate.
- Documenter gouvernance H1/H2/H3 + stop conditions + anti-claims.
- Branch protection / required checks : **PROPOSED — NOT APPLIED**.

### Candidates (Morris)

- Publier branche + créer PR CI/gouvernance.
- Après 1er run : activer required check sous GO distinct.
- Choisir pin `engines.node` Studio (cycle config séparé).
- Traiter `npm audit` (cycle deps séparé).
- Politique review obligatoire / CODEOWNERS.

### Morris requises (historique de préparation — statut actualisé)

- GO publish + PR — **consommé** dans les cycles postérieurs de publication CI/gouvernance ;
- GO review PR and CI — **consommé** dans les cycles postérieurs ;
- GO apply branch protection / required checks — **consommé** via M1 (ruleset `19798462`) ;
- GO merge (avec H1/H2/H3 explicite) — **consommé** pour les merges Studio gouvernés postérieurs ;
- fermeture F-A6-PM-G01 — **consommé** : `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (formalisation locale dans ce document ; intégration `main` en attente de PR/merge).

---


```

## 7. Diff complet
```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md
index f62ff9c..53810c0 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md
@@ -12,9 +12,9 @@
 | **Branche delivery** | `delivery/sfia-studio-v3-native-option-a-ci-merge-governance` (locale, **aucun upstream**) |
 | **Worktree delivery** | `/Users/morris/Projects/sfia-workspace-option-a-ci-governance` |
 | **Handoff source** | blob `69257aebdef7e351fb391d25447e5e92504f87ed` · Option F |
-| **Finding capitalisé** | **F-A6-PM-G01** — mitigation **préparée**, **non clos** |
-| **CI GitHub run** | **NON prouvé** |
-| **Branch protection / required checks** | **PROPOSED — NOT APPLIED — MORRIS GO REQUIRED** |
+| **Finding capitalisé** | **F-A6-PM-G01** — **CLOSED** (formalisation locale sous `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE`) ; états antérieurs supersédés : mitigation préparée → MITIGATED NOT CLOSED |
+| **CI GitHub run** | **prouvée** (M1 + post-merge ; voir Capitalisation F-A6-PM-G01) |
+| **Branch protection / required checks** | **APPLIED** via ruleset M1 `19798462` (état antérieur de préparation : PROPOSED — supersédé) |
 | **T-A6 COMPLETE** | **NON** |
 | **Option A COMPLETE** | **NON** |
 | **T-A7** | **NON ouvert** |
@@ -288,59 +288,116 @@ Applicable aux futurs cycles SFIA Studio Option A (et réutilisable pour CI Stud

 | Champ | Valeur |
 |------|--------|
-| Statut | `MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED` |
-| CLOSED | **NON** |
-| Sévérité initiale | **Major** (gouvernance) — conservée |
-| Problème initial | Merge #267 sans review PR/CI formelle / CI absente — conservé |
+| Statut | `CLOSED — M1 GOVERNANCE CONTROL APPLIED, BEHAVIORALLY PROVEN, ROLLBACK-TESTED AND BYPASS-QUALIFIED` |
+| CLOSED | **OUI** |
+| Sévérité initiale | **Major** (gouvernance) — conservée comme information historique |
+| Problème initial | Merge #267 sans review PR/CI formelle / CI absente — **objet exclusif** de la clôture |
 | Date/heure mitigation | 2026-07-27 11:35:05 CEST (+0200) — Europe/Paris |
-| Décision Morris | D-M1-02 — formalisation MITIGATED approuvée (`GO FORMALIZE F-A6-PM-G01 AS MITIGATED AFTER M1 — SFIA STUDIO V3-NATIVE`) |
-| Décision Morris négative | D-M1-03 — F-A6-PM-G01 **non CLOSED** |
+| Date/heure clôture | 2026-07-27 20:14:47 CEST (+0200) — Europe/Paris |
+| Décision Morris de mitigation (antérieure) | D-M1-02 — formalisation MITIGATED (`GO FORMALIZE F-A6-PM-G01 AS MITIGATED AFTER M1 — SFIA STUDIO V3-NATIVE`) — **supersédée** pour le statut CLOSED |
+| Décision Morris antérieure NOT CLOSED | D-M1-03 — F-A6-PM-G01 **non CLOSED** — **supersédée** par le GO de clôture ci-dessous |
+| Décision Morris de clôture | `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
 | M1 | techniquement et comportementalement COMPLETE (D-M1-01) |
-| Option A COMPLETE | **NON** (D-M1-05) |
-| T-A7 | **NON OUVERTE** (D-M1-06) |
+| Option A COMPLETE | **NON** (D-M1-05) — inchangé |
+| T-A7 | **NON OUVERTE** (D-M1-06) — inchangé |

-#### Critères historiques de clôture (conservés — non convertis en CLOSED)
+#### Décision Morris de clôture

-| État | Qualification historique (doc 24) |
-|------|----------------|
-| Mitigation | **préparée** (workflow + gouvernance documentée) — puis **appliquée et prouvée** (voir preuves ci-dessous) |
-| Clos | **NON** — exigeait run GitHub prouvé + gouvernance appliquée sur PR réelle + (éventuellement) required checks sous GO Morris ; la formalisation **CLOSED** reste une décision Morris séparée |
+| Champ | Valeur |
+|------|--------|
+| Décision validée | F-A6-PM-G01 = **CLOSED** |
+| Autorité | Morris — gate `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` |
+| Objet exact | traitement du problème initial (#267 sans review PR/CI formelle ; absence de CI SFIA Studio observable ; absence de contrôle de merge démontré) |
+| Date/heure/fuseau | 2026-07-27 20:14:47 CEST (+0200) — Europe/Paris |
+| Preuves déterminantes | required gate path-aware actif ; #272 hors Studio PASS ; #273 BLOCKED + recovery ; #275/#276 merges + CI post-merge ; rollback ruleset restore identique (1 s) ; #277 bypass explicite REST sans `--admin` ; #278 revert normal + CI post-revert SUCCESS ; pollution 173 s ; diff net vide ; ruleset `19798462` actif inchangé |
+| Condition technique restante | **aucune** pour le problème initial F-A6 |
+| Hardening loose | **distinct** — non absorbé par cette clôture ; aucune décision de durcissement ici |
+| Intégration Git canonique | formalisation **locale** sur branche `docs/sfia-studio-fa6-closure` ; `main` reste inchangé jusqu’à PR/merge futurs |
+
+#### Critères historiques de clôture (tous satisfaits)
+
+| Critère | Statut |
+|---------|--------|
+| Run GitHub prouvé | **satisfait** |
+| Gouvernance appliquée sur PR réelle | **satisfait** |
+| Required checks appliqués | **satisfait** |
+| Blocage d’une PR invalide | **satisfait** |
+| Recovery validée | **satisfait** |
+| Post-merge validé | **satisfait** |
+| Rollback validé | **satisfait** |
+| Bypass qualifié | **satisfait** |
+| Contrôle actif sur `main` | **satisfait** |
+| Documentation et REX disponibles | **satisfait** |
+
+État antérieur (supersédé) : avant ce GO, le statut était `MITIGATED — … — NOT CLOSED` et la formalisation CLOSED était une décision Morris séparée.

-#### Preuves factuelles de mitigation (M1)
+#### Preuves factuelles (mitigation M1 + clôture)

 | Preuve | Référence |
 |--------|-----------|
 | P3 intégré sur `main` | PR #270 |
-| Workflow blob | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
+| Workflow blob (référence historique M1) | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
 | Ruleset M1 actif | ID `19798462` — `SFIA Studio Main Required Gate — M1` — enforcement `active` — cible `refs/heads/main` |
 | Required check | `SFIA Studio Required Gate` — integration ID `15368` |
 | Preuve hors Studio PASS | PR #272 CLOSED non mergée — run `30248284607` |
 | Preuve Studio failure BLOCKED | PR #273 — run `30248328467` |
 | Preuve Studio recovery PASS | PR #273 — run `30248480927` |
 | PR de preuve fermées sans merge | #272 et #273 — `merged=false` |
-| Branches et worktrees de preuve | supprimés |
+| Formalisation MITIGATED (antérieure) | PR #274 |
+| Alignement document 32 | PR #275 — squash `ae61c3ed48d4d1c9fe751eddd73617ba15480734` |
+| REX M1 intégré | PR #276 — squash `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13` — doc `33` blob `6c87cf4016d6a33f096df921acf8bafd4d73af4e` |
+| Rollback ruleset | désactivation puis restauration identique en **1 s** — `RULESET_RESTORED_IDENTICALLY` — main inchangé pendant le test |
+| Bypass comportemental | PR #277 — run `30290065655` (Trailing whitespace → Required Gate failure) ; merge normal bloqué ; bypass REST explicite acteur ruleset (sans `--admin`) — squash `17840f45f74bbae702bd1a18acb9723b149a6ea0` |
+| Revert normal | PR #278 — run `30290283916` SUCCESS ; squash `df9d9c6e688be367f54aa9376e67543eab80533a` (sans bypass) |
+| CI post-revert | run `30290479092` SUCCESS |
+| Pollution bornée | **173 s** ; diff net `49f2edfa…`…`df9d9c6…` **vide** ; fichier probe absent |
+| État final `main` (au moment de la formalisation) | `df9d9c6e688be367f54aa9376e67543eab80533a` |
 | Preuves GitHub | runs, checks et logs conservés |
-| Bypass | non utilisé |

-#### Réserves conservées
+#### Réserves F-A6 devenues obsolètes (retirées)
+
+Les items suivants **ne sont plus** des réserves ouvertes de F-A6 :
+
+- finding non CLOSED ;
+- document 32 obsolète (corrigé via PR #275) ;
+- capitalisation / REX M1 encore requise (intégré via PR #276) ;
+- rollback non testé (prouvé) ;
+- bypass non testé (prouvé comportementalement).
+
+#### Sujets distincts non bloquants après clôture

-- finding **non CLOSED** ;
-- document 32 obsolète (correction sous gate séparé) ;
-- capitalisation / REX M1 encore requise (gate séparé) ;
-- rollback non testé ;
-- bypass non testé ;
-- F-CI-* inchangés ;
-- configuration M1 loose initiale (approvals 0 ; conversation resolution false ; up-to-date false) ;
+Ces sujets **ne rouvrent pas** F-A6. Ils relèvent d’un futur cycle de hardening, d’un backlog, ou d’un finding distinct. **Aucune** décision de durcissement n’est prise ici.
+
+- configuration M1 loose : approvals = `0` ; strict up-to-date = `false` ; conversation resolution = `false` ;
+- bypass actor Morris conservé (mode `pull_request`) — capacité désormais **qualifiée**, non recommandée comme méthode normale ;
+- auditabilité organisationnelle limitée (audit log org non accessible dans les cycles de preuve) ;
+- traces Git permanentes du probe/revert (#277/#278) ;
+- findings F-CI-* inchangés ;
 - Option A non COMPLETE ;
-- T-A7 non ouverte.
+- T-A7 non ouverte ;
+- D1–D7 du REX restent `NOT DECIDED` (hors clôture F-A6).
+
+#### Anti-claims de clôture
+
+- F-A6 CLOSED ≠ Option A COMPLETE ;
+- F-A6 CLOSED ≠ T-A7 OPEN ;
+- F-A6 CLOSED ≠ ruleset hardened ;
+- F-A6 CLOSED ≠ bypass recommandé ;
+- F-A6 CLOSED ≠ production-ready ;
+- F-A6 CLOSED ≠ D1–D7 décidées ;
+- clôture documentaire locale ≠ intégration sur `main` ;
+- commit local ≠ PR ;
+- PR future ≠ merge.

 ---

 ## 12. Proposition branch protection / required checks

-**Statut :** `PROPOSED — NOT APPLIED — MORRIS GO REQUIRED`
+**Statut historique (cycle de préparation) :** `PROPOSED — NOT APPLIED — MORRIS GO REQUIRED` — **supersédé**.
+
+**État actuel (post-M1) :** ruleset `19798462` (`SFIA Studio Main Required Gate — M1`) **actif** sur `refs/heads/main` ; required check `SFIA Studio Required Gate` / integration `15368`. La proposition ci-dessous reste la trace du cycle de préparation ; elle ne contredit plus l’application M1 ultérieure.

-Ce cycle **n’a modifié aucun** ruleset / branch protection distant.
+Ce cycle de préparation **n’avait modifié aucun** ruleset / branch protection distant (l’application M1 relève de cycles postérieurs).

 | Élément | Proposition |
 |---------|-------------|
@@ -382,7 +439,7 @@ Ce cycle **n’a modifié aucun** ruleset / branch protection distant.

 | ID | Sévérité | Description | Action ce cycle |
 |----|----------|-------------|-----------------|
-| F-A6-PM-G01 | **Major** (gouvernance) | Merge #267 sans review PR/CI formelle / CI absente | **MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED** (voir Capitalisation F-A6-PM-G01) |
+| F-A6-PM-G01 | **Major** (gouvernance) — sévérité initiale historique | Merge #267 sans review PR/CI formelle / CI absente | **CLOSED — M1 GOVERNANCE PROOFS COMPLETE — MORRIS CLOSURE DECISION RECORDED** (voir Capitalisation F-A6-PM-G01) |
 | F-CI-01 | **Observation** | Pin Node Studio absent ; CI candidate Node 20 = précédent Interv360 | Documenté · pas de modif `package.json` |
 | F-CI-02 | **Observation** | `npm audit` 12 high après `npm ci` | Hors périmètre · cycle deps séparé si Morris |
 | F-CI-03 | **Observation** | Validation locale Node 24 ≠ CI Node 20 | Limite explicite |
@@ -431,13 +488,13 @@ Le workflow CI **ne ferme** aucune réserve métier/architecture · **ne débloq
 - Traiter `npm audit` (cycle deps séparé).
 - Politique review obligatoire / CODEOWNERS.

-### Morris requises (non créées ici)
+### Morris requises (historique de préparation — statut actualisé)

-- GO publish + PR ;
-- GO review PR and CI ;
-- GO apply branch protection / required checks ;
-- GO merge (avec H1/H2/H3 explicite) ;
-- toute fermeture F-A6-PM-G01.
+- GO publish + PR — **consommé** dans les cycles postérieurs de publication CI/gouvernance ;
+- GO review PR and CI — **consommé** dans les cycles postérieurs ;
+- GO apply branch protection / required checks — **consommé** via M1 (ruleset `19798462`) ;
+- GO merge (avec H1/H2/H3 explicite) — **consommé** pour les merges Studio gouvernés postérieurs ;
+- fermeture F-A6-PM-G01 — **consommé** : `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE` (formalisation locale dans ce document ; intégration `main` en attente de PR/merge).

 ---

@@ -475,4 +532,10 @@ Ne pas proposer directement un merge.

 ## 20. Verdict

+Verdict historique du cycle de préparation (conservé) :
+
 `SFIA STUDIO V3-NATIVE OPTION A CI AND MERGE GOVERNANCE PREPARED — GITHUB RUN AND APPLICATION REQUIRE MORRIS GO`
+
+Addendum de clôture F-A6 (formalisation locale) :
+
+`SFIA STUDIO F-A6-PM-G01 MORRIS CLOSURE DECISION FORMALIZED LOCALLY — DOCUMENT 24 UPDATED — HISTORICAL CRITERIA, ROLLBACK AND BYPASS PROOFS RECORDED — LOOSE-CONFIG HARDENING KEPT DISTINCT — CANONICAL MAIN INTEGRATION PENDING — OPTION A NOT COMPLETE — T-A7 NOT OPEN`

```

## 8. Recherche contradictions
### Occurrences classées
```json
[
  {
    "line": 15,
    "pattern": "NOT CLOSED",
    "class": "historique/supersédé",
    "text": "| **Finding capitalisé** | **F-A6-PM-G01** — **CLOSED** (formalisation locale sous `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE`) ; états antérieurs supersédés : mitigation préparée → MITIGATED NOT CLOSED |",
    "excerpt": "| **Finding capitalisé** | **F-A6-PM-G01** — **CLOSED** (formalisation locale sous `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE`) ; états antérieurs supersédés : mitigation préparée → MITIGATED NOT CLOSED |"
  },
  {
    "line": 15,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "| **Finding capitalisé** | **F-A6-PM-G01** — **CLOSED** (formalisation locale sous `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE`) ; états antérieurs supersédés : mitigation préparée → MITIGATED NOT CLOSED |",
    "excerpt": "| **Finding capitalisé** | **F-A6-PM-G01** — **CLOSED** (formalisation locale sous `GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE`) ; états antérieurs supersédés : mitigation préparée → MITIGATED NOT CLOSED |"
  },
  {
    "line": 19,
    "pattern": "Option A COMPLETE",
    "class": "anti-claim / hors scope / attendu NON",
    "text": "| **Option A COMPLETE** | **NON** |",
    "excerpt": "| **Option A COMPLETE** | **NON** |"
  },
  {
    "line": 20,
    "pattern": "T-A7",
    "class": "anti-claim / hors scope / attendu NON",
    "text": "| **T-A7** | **NON ouvert** |",
    "excerpt": "| **T-A7** | **NON ouvert** |"
  },
  {
    "line": 34,
    "pattern": "T-A7",
    "class": "anti-claim / hors scope / attendu NON",
    "text": "**Non autorisé / non exécuté** : push branche projet, PR, merge, rulesets/branch protections distants, required checks, auto-merge, merge queue, runtime métier Option A, T-A7, fermeture de réserve.",
    "excerpt": "**Non autorisé / non exécuté** : push branche projet, PR, merge, rulesets/branch protections distants, required checks, auto-merge, merge queue, runtime métier Option A, T-A7, fermeture de réserve."
  },
  {
    "line": 291,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "| Statut | `CLOSED — M1 GOVERNANCE CONTROL APPLIED, BEHAVIORALLY PROVEN, ROLLBACK-TESTED AND BYPASS-QUALIFIED` |",
    "excerpt": "| Statut | `CLOSED — M1 GOVERNANCE CONTROL APPLIED, BEHAVIORALLY PROVEN, ROLLBACK-TESTED AND BYPASS-QUALIFIED` |"
  },
  {
    "line": 292,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "| CLOSED | **OUI** |",
    "excerpt": "| CLOSED | **OUI** |"
  },
  {
    "line": 297,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "| Décision Morris de mitigation (antérieure) | D-M1-02 — formalisation MITIGATED (`GO FORMALIZE F-A6-PM-G01 AS MITIGATED AFTER M1 — SFIA STUDIO V3-NATIVE`) — **supersédée** pour le statut CLOSED |",
    "excerpt": "| Décision Morris de mitigation (antérieure) | D-M1-02 — formalisation MITIGATED (`GO FORMALIZE F-A6-PM-G01 AS MITIGATED AFTER M1 — SFIA STUDIO V3-NATIVE`) — **supersédée** pour le statut CLOSED |"
  },
  {
    "line": 298,
    "pattern": "NOT CLOSED",
    "class": "historique/supersédé",
    "text": "| Décision Morris antérieure NOT CLOSED | D-M1-03 — F-A6-PM-G01 **non CLOSED** — **supersédée** par le GO de clôture ci-dessous |",
    "excerpt": "| Décision Morris antérieure NOT CLOSED | D-M1-03 — F-A6-PM-G01 **non CLOSED** — **supersédée** par le GO de clôture ci-dessous |"
  },
  {
    "line": 298,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "| Décision Morris antérieure NOT CLOSED | D-M1-03 — F-A6-PM-G01 **non CLOSED** — **supersédée** par le GO de clôture ci-dessous |",
    "excerpt": "| Décision Morris antérieure NOT CLOSED | D-M1-03 — F-A6-PM-G01 **non CLOSED** — **supersédée** par le GO de clôture ci-dessous |"
  },
  {
    "line": 301,
    "pattern": "Option A COMPLETE",
    "class": "anti-claim / hors scope / attendu NON",
    "text": "| Option A COMPLETE | **NON** (D-M1-05) — inchangé |",
    "excerpt": "| Option A COMPLETE | **NON** (D-M1-05) — inchangé |"
  },
  {
    "line": 302,
    "pattern": "T-A7",
    "class": "anti-claim / hors scope / attendu NON",
    "text": "| T-A7 | **NON OUVERTE** (D-M1-06) — inchangé |",
    "excerpt": "| T-A7 | **NON OUVERTE** (D-M1-06) — inchangé |"
  },
  {
    "line": 308,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "| Décision validée | F-A6-PM-G01 = **CLOSED** |",
    "excerpt": "| Décision validée | F-A6-PM-G01 = **CLOSED** |"
  },
  {
    "line": 332,
    "pattern": "NOT CLOSED",
    "class": "historique/supersédé",
    "text": "État antérieur (supersédé) : avant ce GO, le statut était `MITIGATED — … — NOT CLOSED` et la formalisation CLOSED était une décision Morris séparée.",
    "excerpt": "État antérieur (supersédé) : avant ce GO, le statut était `MITIGATED — … — NOT CLOSED` et la formalisation CLOSED était une décision Morris séparée."
  },
  {
    "line": 332,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "État antérieur (supersédé) : avant ce GO, le statut était `MITIGATED — … — NOT CLOSED` et la formalisation CLOSED était une décision Morris séparée.",
    "excerpt": "État antérieur (supersédé) : avant ce GO, le statut était `MITIGATED — … — NOT CLOSED` et la formalisation CLOSED était une décision Morris séparée."
  },
  {
    "line": 342,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "| Preuve hors Studio PASS | PR #272 CLOSED non mergée — run `30248284607` |",
    "excerpt": "| Preuve hors Studio PASS | PR #272 CLOSED non mergée — run `30248284607` |"
  },
  {
    "line": 361,
    "pattern": "NOT CLOSED",
    "class": "historique — réserve retirée",
    "text": "- finding non CLOSED ;",
    "excerpt": "- finding non CLOSED ;"
  },
  {
    "line": 361,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "- finding non CLOSED ;",
    "excerpt": "- finding non CLOSED ;"
  },
  {
    "line": 364,
    "pattern": "rollback non testé",
    "class": "historique — réserve retirée (prouvé)",
    "text": "- rollback non testé (prouvé) ;",
    "excerpt": "- rollback non testé (prouvé) ;"
  },
  {
    "line": 365,
    "pattern": "bypass non testé",
    "class": "historique — réserve retirée (prouvé)",
    "text": "- bypass non testé (prouvé comportementalement).",
    "excerpt": "- bypass non testé (prouvé comportementalement)."
  },
  {
    "line": 377,
    "pattern": "T-A7",
    "class": "anti-claim / hors scope / attendu NON",
    "text": "- T-A7 non ouverte ;",
    "excerpt": "- T-A7 non ouverte ;"
  },
  {
    "line": 378,
    "pattern": "D1–D7",
    "class": "anti-claim / hors scope / attendu NON",
    "text": "- D1–D7 du REX restent `NOT DECIDED` (hors clôture F-A6).",
    "excerpt": "- D1–D7 du REX restent `NOT DECIDED` (hors clôture F-A6)."
  },
  {
    "line": 382,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "- F-A6 CLOSED ≠ Option A COMPLETE ;",
    "excerpt": "- F-A6 CLOSED ≠ Option A COMPLETE ;"
  },
  {
    "line": 382,
    "pattern": "Option A COMPLETE",
    "class": "anti-claim / hors scope / attendu NON",
    "text": "- F-A6 CLOSED ≠ Option A COMPLETE ;",
    "excerpt": "- F-A6 CLOSED ≠ Option A COMPLETE ;"
  },
  {
    "line": 383,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "- F-A6 CLOSED ≠ T-A7 OPEN ;",
    "excerpt": "- F-A6 CLOSED ≠ T-A7 OPEN ;"
  },
  {
    "line": 383,
    "pattern": "T-A7",
    "class": "anti-claim / hors scope / attendu NON",
    "text": "- F-A6 CLOSED ≠ T-A7 OPEN ;",
    "excerpt": "- F-A6 CLOSED ≠ T-A7 OPEN ;"
  },
  {
    "line": 384,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "- F-A6 CLOSED ≠ ruleset hardened ;",
    "excerpt": "- F-A6 CLOSED ≠ ruleset hardened ;"
  },
  {
    "line": 385,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "- F-A6 CLOSED ≠ bypass recommandé ;",
    "excerpt": "- F-A6 CLOSED ≠ bypass recommandé ;"
  },
  {
    "line": 386,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "- F-A6 CLOSED ≠ production-ready ;",
    "excerpt": "- F-A6 CLOSED ≠ production-ready ;"
  },
  {
    "line": 387,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "- F-A6 CLOSED ≠ D1–D7 décidées ;",
    "excerpt": "- F-A6 CLOSED ≠ D1–D7 décidées ;"
  },
  {
    "line": 387,
    "pattern": "D1–D7",
    "class": "anti-claim / hors scope / attendu NON",
    "text": "- F-A6 CLOSED ≠ D1–D7 décidées ;",
    "excerpt": "- F-A6 CLOSED ≠ D1–D7 décidées ;"
  },
  {
    "line": 396,
    "pattern": "PROPOSED — NOT APPLIED",
    "class": "historique/supersédé explicite",
    "text": "**Statut historique (cycle de préparation) :** `PROPOSED — NOT APPLIED — MORRIS GO REQUIRED` — **supersédé**.",
    "excerpt": "**Statut historique (cycle de préparation) :** `PROPOSED — NOT APPLIED — MORRIS GO REQUIRED` — **supersédé**."
  },
  {
    "line": 442,
    "pattern": "CLOSED",
    "class": "statut courant / anti-claim / attendu",
    "text": "| F-A6-PM-G01 | **Major** (gouvernance) — sévérité initiale historique | Merge #267 sans review PR/CI formelle / CI absente | **CLOSED — M1 GOVERNANCE PROOFS COMPLETE — MORRIS CLOSURE DECISION RECORDED** (voir Capitalisation F-A6-PM-G01) |",
    "excerpt": "| F-A6-PM-G01 | **Major** (gouvernance) — sévérité initiale historique | Merge #267 sans review PR/CI formelle / CI absente | **CLOSED — M1 GOVERNANCE PROOFS COMPLETE — MORRIS CLOSURE DECISION RECORDED** (voir Capitalisation F-A6-PM-G01) |"
  },
  {
    "line": 481,
    "pattern": "PROPOSED — NOT APPLIED",
    "class": "CONTRADICTION RÉELLE — présenté sous Validées sans marqueur supersédé ; header/§12 = APPLIED",
    "text": "- Branch protection / required checks : **PROPOSED — NOT APPLIED**.",
    "excerpt": "- Branch protection / required checks : **PROPOSED — NOT APPLIED**."
  },
  {
    "line": 541,
    "pattern": "T-A7",
    "class": "anti-claim / hors scope / attendu NON",
    "text": "`SFIA STUDIO F-A6-PM-G01 MORRIS CLOSURE DECISION FORMALIZED LOCALLY — DOCUMENT 24 UPDATED — HISTORICAL CRITERIA, ROLLBACK AND BYPASS PROOFS RECORDED — LOOSE-CONFIG HARDENING KEPT DISTINCT — CANONICAL MAIN INTEGRATION PENDING — OPTION A NOT COMPLETE — T-A7 NOT ",
    "excerpt": "`SFIA STUDIO F-A6-PM-G01 MORRIS CLOSURE DECISION FORMALIZED LOCALLY — DOCUMENT 24 UPDATED — HISTORICAL CRITERIA, ROLLBACK AND BYPASS PROOFS RECORDED — LOOSE-CONFIG HARDENING KEPT DISTINCT — CANONICAL MAIN INTEGRATION PENDING — OPTION A NOT COMPLETE — T-A7 NOT OPEN`"
  }
]
```

### Contradictions réelles
```json
[
  {
    "line": 481,
    "pattern": "PROPOSED — NOT APPLIED",
    "class": "CONTRADICTION RÉELLE — présenté sous Validées sans marqueur supersédé ; header/§12 = APPLIED",
    "text": "- Branch protection / required checks : **PROPOSED — NOT APPLIED**.",
    "excerpt": "- Branch protection / required checks : **PROPOSED — NOT APPLIED**."
  }
]
```

**Bloqueur :** ligne **481** — sous `### Validées (ce cycle — préparation locale)` :
`- Branch protection / required checks : **PROPOSED — NOT APPLIED**.`
sans marqueur `historique` / `supersédé`, alors que :
- header L17 : **APPLIED** via ruleset M1 ;
- §12 : APPLIED ;
- §17 Morris requises : GO apply **consommé** via M1.

L364–365 (`rollback/bypass non testé`) = réserves **retirées** sous titre explicite — **pas** contradiction.

Verdict contradiction : `F-A6 CLOSURE DOCUMENTARY CONTRADICTION DETECTED — NOT READY`

## 9. Preuves recoupées
- workflow blob `801a8759bb7440666799b95edf13f9ee6d9332f8` : présent
- doc33 blob `6c87cf4016d6a33f096df921acf8bafd4d73af4e` : présent
- PR #275 squash `ae61c3ed48d4d1c9fe751eddd73617ba15480734` : présent
- PR #276 squash `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13` : présent
- PR #277 squash `17840f45f74bbae702bd1a18acb9723b149a6ea0` : présent
- PR #278 squash `df9d9c6e688be367f54aa9376e67543eab80533a` : présent (= origin/main)
- rollback 1 s / pollution 173 s / run post-revert `30290479092` : référencés dans doc
- ruleset live:
```json
{"bypass_actors":[{"actor_id":295557155,"actor_type":"User","bypass_mode":"pull_request"}],"enforcement":"active","id":19798462,"name":"SFIA Studio Main Required Gate — M1","rules":["pull_request","required_status_checks","non_fast_forward","deletion"]}

```
- integration ID `15368` : référencé dans doc
- Aucune référence SHA manquante côté objets Git locaux

## 10. Portée de la décision
Confirmé exclusif au problème #267 / CI absente / contrôle merge.
Anti-claims présents : Option A NON, T-A7 NON, hardening distinct, D1–D7 NOT DECIDED, integration main pending.
Sujets distincts listés (loose, bypass actor, audit, traces, F-CI-*).

## 11. Validations documentaires / Git
- whitespace : PASS
- markers TODO/FIXME/TBD/conflict : absents
- secrets : absents
- UTF-8 + newline final : PASS
- titres dupliqués : aucun
- Markdown : tables clôture lisibles

## 12. Analyse dette (étape 9)
- diff globalement nécessaire pour formaliser CLOSED
- 101/38 justifiés pour critères/preuves/anti-claims
- **simplification / annotation minimale requise** avant PR : annoter L481 comme historique/supersédé (alignement header/§12)
- cette recommandation de modification ⇒ **NOT READY — DOCUMENTARY CORRECTION REQUIRED**
- **ne pas corriger dans ce cycle**

## 13. PR candidate (NON créée — bloquée)
- branche: `docs/sfia-studio-fa6-closure`
- base: `main`
- head: `a13759d5420d2e1d9915ab05a4dbb3872d85e8a0`
- titre candidat: `docs(sfia-studio): close F-A6 after M1 governance proofs`

### Corps candidat (préparé, non publié)
```markdown
## Objectif

Formaliser sur `main`, via le document canonique 24, la décision Morris de clôture du finding `F-A6-PM-G01`.

## Gate Morris de clôture

`GO CLOSE F-A6-PM-G01 AFTER M1 GOVERNANCE PROOFS — SFIA STUDIO V3-NATIVE`

## Problème initial (objet exclusif)

- merge #267 sans revue PR/CI formelle ;
- absence de CI SFIA Studio observable ;
- absence de contrôle de merge démontré.

## Critères historiques

Tous satisfaits : run GitHub, gouvernance PR réelle, required checks, blocage, recovery, post-merge, rollback, bypass, contrôle actif, REX.

## Rollback

Ruleset `19798462` désactivé puis restauré à l’identique en 1 seconde ; main inchangé pendant le test.

## Bypass

PR #277 : Required Gate rouge (trailing whitespace) ; merge normal bloqué ; bypass REST explicite acteur ruleset **sans** `--admin` ; PR #278 revert normal ; CI revert + post-revert SUCCESS ; pollution 173 s ; diff net vide.

## Périmètre

- 1 fichier : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md`
- 101 insertions / 38 suppressions
- head : `a13759d5420d2e1d9915ab05a4dbb3872d85e8a0`

## Décision

- F-A6-PM-G01 = `CLOSED — M1 GOVERNANCE CONTROL APPLIED, BEHAVIORALLY PROVEN, ROLLBACK-TESTED AND BYPASS-QUALIFIED`
- hardening loose **distinct** (non absorbé)
- Option A non COMPLETE
- T-A7 non ouverte
- D1–D7 NOT DECIDED

## Validations

- `git diff --check` conforme
- aucune contradiction de statut courant (états historiques marqués supersédés)
- references SHA/runs recoupées

## Risques / réserves

- configuration M1 loose inchangée (hors F-A6)
- bullet historique §17 « PROPOSED — NOT APPLIED » sous préparation locale (non état courant ; §12/header = APPLIED)
- intégration sur `main` uniquement après merge de cette PR

## Stratégie de merge

Candidate recommandée : **H2 — squash** (non décidée ici).

## Post-merge

Review post-merge requis ; aucune suppression automatique de branche.

```

## 14. Stratégies de merge (candidates, non décidées)
- **H1** merge commit : acceptable mais bruyant pour 1 commit doc
- **H2** squash : **recommandé par défaut** après correction + re-readiness
- **H3** rebase merge : non préféré
- H2 recommandé ≠ H2 décidé ; non applicable tant que NOT READY

## 15. Matrice PR readiness
| Item | Statut | Note |
|------|--------|------|
| identité branche/HEAD | PASS | docs/sfia-studio-fa6-closure @ a13759d5420d2e1d9915ab05a4dbb3872d85e8a0 |
| base | PASS | origin/main = parent = df9d9c6e688be367f54aa9376e67543eab80533a (Cas A) |
| worktree propre | PASS | clean ; aucun staged/untracked ; aucune op Git |
| périmètre | PASS | 1 fichier doc 24 ; message exact ; 101/38 |
| diff complet | PASS | capturé intégralement |
| contenu complet | PASS | statut CLOSED, critères, rollback, bypass, anti-claims présents |
| contradictions | FAIL | L481 §17 Validées : PROPOSED — NOT APPLIED sans supersession ; header/§12 = APPLIED |
| preuves | PASS | SHA/runs/ruleset recoupés |
| cohérence gouvernance | FAIL | état ruleset ambigu entre §17 et header/§12 |
| validation Markdown | PASS | UTF-8, newline, markers, trailing clean |
| secrets | PASS |  |
| whitespace | PASS | git diff --check / show --check clean |
| dette | FAIL | correction documentaire requise avant PR (annotation supersédé L481) |
| risques | PASS WITH RESERVATION | risque de lecture CLOSED + BP non appliqué si §17 lu isolément |
| titre/body candidate | PASS WITH RESERVATION | préparés mais publication bloquée |
| stratégie candidate | PASS | H2 recommandé non décidé — non applicable tant que NOT READY |
| handoff | PASS | publication L3 de ce verdict |

**Blockers :** contradictions §17 L481 ; dette documentaire de correction minimale.

## 16. Réserves
- configuration M1 loose inchangée (hors F-A6) — OK distinct
- formalisation CLOSED absente de main jusqu’à PR/merge futur
- Candidates §17 (« Après 1er run : activer… ») restent historiques de préparation — non bloquantes si L481 corrigé

## 17. Actions non exécutées
- aucune modification doc 24 / amend / nouveau commit projet
- aucun rebase / cherry-pick / reset
- aucun push branche projet / PR / merge
- aucune modification ruleset / workflow / doc 33
- aucun hardening / cleanup / Option A COMPLETE / T-A7 / D1–D7 / Notion/CMP

## 18. État canonique main
- `origin/main` = `df9d9c6e688be367f54aa9376e67543eab80533a` inchangé
- F-A6 CLOSED formalisé **localement seulement**
- ruleset `19798462` active

## 19. Gate candidat (NOT CONSUMED)
`GO CORRECT F-A6-PM-G01 CLOSURE DOCUMENT §17 PROPOSED BULLET THEN RE-RUN PR READINESS — SFIA STUDIO V3-NATIVE`

(Le gate `GO PUBLISH F-A6-PM-G01 CLOSURE BRANCH AND CREATE PR — SFIA STUDIO V3-NATIVE` reste **non éligible** tant que NOT READY.)

## 20. Verdict
`SFIA STUDIO F-A6-PM-G01 CLOSURE DOCUMENTATION NOT PR READY — DOCUMENTARY CORRECTION REQUIRED — NO PUSH OR PR`

Sous-verdict contradiction : `F-A6 CLOSURE DOCUMENTARY CONTRADICTION DETECTED — NOT READY`

## Anti-claims de ce cycle
- PR READY ≠ branche poussée / PR créée / CI verte / merge autorisé
- F-A6 CLOSED décidé ≠ CLOSED intégré sur main
- F-A6 CLOSED ≠ Option A COMPLETE / T-A7 OPEN
- H2 recommandé ≠ H2 décidé
- Ce cycle n’a **pas** modifié le commit `a13759d…`

## Review Handoff Git
- décision: required
- mode: publish-in-cycle
- branche: `sfia/review-handoff`
- fichier: `sfia-review-handoff/latest-chatgpt-review.md`
- commit attendu: `docs(review-handoff): record F-A6 closure PR readiness`
