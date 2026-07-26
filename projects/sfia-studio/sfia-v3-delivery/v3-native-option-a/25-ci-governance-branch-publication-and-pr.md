# 25 — CI Governance Branch Publication and PR

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 14:07:17 CEST (+0200) — Europe/Paris |
| **Cycle** | Intégration / DevOps — publication branche CI/gouvernance + création PR |
| **Profil** | Critical |
| **Gate** | `GO PUBLISH OPTION A CI GOVERNANCE BRANCH AND CREATE PR — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-option-a-ci-governance` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-ci-merge-governance` |
| **HEAD initial** | `5dd1b50d368779599d1abfc8c7313b752d915877` |
| **HEAD pré-push** | `67a7a1f7d3a5c9189027f6bcef68bda39636bf8e` |
| **HEAD final** | `467833391aa79aaa3196344ee73c40328d65d869` |
| **origin/main** | `910de87a9dad00491cd32cb6b439ce13cbc7bceb` |
| **merge-base** | `910de87a9dad00491cd32cb6b439ce13cbc7bceb` |
| **Upstream** | `origin/delivery/sfia-studio-v3-native-option-a-ci-merge-governance` |
| **Handoff source** | blob `f16528f9c27390e757b354f4e799c75cd447cbfe` |
| **PR** | [#268](https://github.com/mcleland147/sfia-workspace/pull/268) |
| **Statut CI** | `GITHUB ACTIONS FIRST RUN FAILED — CORRECTIVE CYCLE REQUIRES MORRIS GO` |
| **Merge** | **INTERDIT** |
| **Branch protection / required checks** | **PROPOSED — NOT APPLIED** |
| **Workflow modifié après publication** | **NON** |
| **T-A6 COMPLETE** | **NON** |
| **Option A COMPLETE** | **NON** |
| **T-A7** | **NON ouvert** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A CI GOVERNANCE PR CREATED — CI CORRECTION REQUIRES MORRIS GO` |
| **Gate suivant candidat** | `GO REVIEW OPTION A CI GOVERNANCE PR AND CI — SFIA STUDIO V3-NATIVE` (**NOT consumed**) |

---

## 1. Truth Check (pré-push)

| Contrôle | Résultat |
|----------|----------|
| Worktree / branche / HEAD `5dd1b50…` | **PASS** |
| `origin/main` / merge-base `910de87…` | **PASS** |
| +4 / −0 puis +5 après doc 25 | **PASS** |
| Branche distante / PR absentes avant push | **PASS** |
| Handoff `f16528f9…` | **PASS** |
| Périmètre docs + workflow uniquement | **PASS** |
| Revalidation YAML / diff-check / secrets | **PASS** |

---

## 2. Commits publiés (vs `origin/main`)

| SHA | Message | Nature |
|-----|---------|--------|
| `1f25857…` | `docs(sfia-studio): record T-A6 post-merge review` | docs héritées |
| `aef7fd6…` | `docs(sfia-studio): frame next Option A step after T-A6` | docs héritées |
| `2492069…` | `ci(sfia-studio): prepare project validation workflow` | CI |
| `5dd1b50…` | `docs(sfia-studio): define CI and merge governance` | docs |
| `67a7a1f…` | `docs(sfia-studio): prepare CI governance branch publication` | docs 25 initial |
| _(final)_ | `docs(sfia-studio): record CI governance pull request` | docs 25 final |

**Hors scope :** aucun runtime · test · modeled · package · lockfile · Interv360.

---

## 3. Publication

| Champ | Valeur |
|-------|--------|
| Commande | `git push -u origin delivery/sfia-studio-v3-native-option-a-ci-merge-governance` |
| Force | **NON** |
| SHA distant initial | `67a7a1f7d3a5c9189027f6bcef68bda39636bf8e` |
| Match local/distant | **PASS** |
| Upstream | créé · tracking OK |

---

## 4. Pull Request

| Champ | Valeur |
|-------|--------|
| Number | **268** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/268 |
| State | **OPEN** |
| Draft | **false** |
| Base | `main` |
| Head | `delivery/sfia-studio-v3-native-option-a-ci-merge-governance` |
| Head SHA (création) | `67a7a1f7d3a5c9189027f6bcef68bda39636bf8e` |
| Titre | `ci(sfia-studio): add project validation workflow and merge governance` |
| Changed files | **6** |
| Additions / deletions | **+1202 / −23** (au head `67a7a1f…`) |
| Mergeable | **MERGEABLE** |
| Merge state | **UNSTABLE** (check en échec) |
| Conflits | **aucun** |
| Reviewers | **aucun** |
| Labels | **aucun** |
| Auto-merge | **null / inactif** |
| Merge queue | **non observé / non activé** |

### Body PR (tel que publié)

```markdown
## Summary

- ajoute un workflow GitHub Actions dédié à `projects/sfia-studio/**` ;
- formalise la séquence PR readiness → publication → review PR/CI → choix H1/H2/H3 → GO merge → post-merge ;
- ajoute les documents post-merge et cadrage non encore intégrés ;
- ne modifie aucun runtime métier.

## Workflow

- nom : `SFIA Studio CI`
- job : `validate`
- check attendu : `Build and validate SFIA Studio`
- Node : 20 candidat
- package manager : npm
- working directory : `projects/sfia-studio/app`
- permissions : `contents: read`
- timeout : 30 minutes
- concurrency : annulation des runs PR précédents
- déclencheurs : paths SFIA Studio + workflow.

## Validation locale

- `npm ci` PASS
- typecheck PASS
- lint PASS
- build PASS
- Vitest : 655 PASS
- modeled : 73 PASS
- secret scan PASS
- diff-check PASS
- YAML parse PASS
- actionlint non exécuté
- validation locale sous Node 24.16.0
- GitHub Actions sous Node 20 non encore prouvé.

## Findings / observations

- F-A6-PM-G01 OPEN — mitigation préparée
- F-CI-01 Node pin OPEN
- F-CI-02 npm audit : 12 high
- F-CI-03 local Node 24 vs CI Node 20
- F-CI-04 actionlint absent.

## Governance

- CI absente ou en échec = stop
- tests locaux ≠ CI distante
- mergeable ≠ validé
- stratégie H1/H2/H3 à décider explicitement
- GO Morris de merge obligatoire
- post-merge obligatoire.

## Branch protection

- PROPOSED — NOT APPLIED
- required check non activé avant observation du nom réel sur GitHub
- aucune protection modifiée par cette PR.

## Reservations

Maintenir OPEN :

- B5
- R1
- R-T-A3-1 à R-T-A3-4
- R-M01
- U-M02
- C1–C4 RECOMMENDED — NOT VALIDATED.

## Anti-claims

- CI non encore prouvée avant le premier run
- F-A6-PM-G01 non clos
- T-A6 non COMPLETE
- Option A non COMPLETE
- aucun T-A7
- aucune branch protection appliquée
- aucun required check actif
- aucun merge autorisé.

## Review focus

1. syntaxe et sécurité du workflow ;
2. déclencheurs paths ;
3. Node 20 ;
4. reproductibilité des commandes ;
5. noms de job/check ;
6. modeled tests ;
7. gouvernance PR/CI/merge ;
8. findings audit/actionlint ;
9. absence de modification métier.

## Merge

- interdit dans ce cycle ;
- cycle suivant obligatoire :
  `GO REVIEW OPTION A CI GOVERNANCE PR AND CI — SFIA STUDIO V3-NATIVE`.
```

(Note GitHub : footer « Made with Cursor » éventuellement ajouté côté UI — non inventé.)

### Fichiers PR

1. `.github/workflows/sfia-studio-ci.yml` (ADDED)
2. `…/23-next-option-a-step-after-t-a6.md` (ADDED)
3. `…/24-ci-and-merge-governance-preparation.md` (ADDED)
4. `…/25-ci-governance-branch-publication-and-pr.md` (ADDED)
5. `…/t-a6-…/22-post-merge-review.md` (ADDED)
6. `…/t-a6-…/README.md` (MODIFIED)

---

## 5. Premier run GitHub Actions

| Champ | Valeur |
|-------|--------|
| Workflow name réel | **SFIA Studio CI** |
| Run ID | **30201400028** |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/30201400028 |
| Event | `pull_request` |
| Branch | `delivery/sfia-studio-v3-native-option-a-ci-merge-governance` |
| Head SHA | `67a7a1f7d3a5c9189027f6bcef68bda39636bf8e` |
| Status | `completed` |
| Conclusion | **`failure`** |
| Job / check name réel | **`Build and validate SFIA Studio`** |
| Job URL | https://github.com/mcleland147/sfia-workspace/actions/runs/30201400028/job/89791831576 |
| Attente | ~**63 s** (poll 30 s) |
| Started | 2026-07-26T12:05:58Z |
| Completed | 2026-07-26T12:07:01Z |
| Node observé (CI) | **20** (setup-node) |

### Étapes

| Step | Conclusion |
|------|------------|
| Checkout | success |
| Setup Node.js | success |
| Install dependencies (`npm ci`) | success |
| Typecheck | success |
| Lint | success |
| **Build** | **failure** |
| Unit tests / modeled / secret / whitespace | **skipped** |

### Cause observée (Build)

```
Error: No such built-in module: node:sqlite
code: ERR_UNKNOWN_BUILTIN_MODULE
Failed to collect configuration for /nouvelle-demande
```

Compile Next.js OK ; échec à la collecte page data. Aligné avec **F-CI-01 / F-CI-03** (Node 20 CI vs Node 24 local où `npm run build` avait PASS).

**Correction workflow ce cycle :** **INTERDITE / NON effectuée.**

Qualification :

`GITHUB ACTIONS FIRST RUN FAILED — CORRECTIVE CYCLE REQUIRES MORRIS GO`

**Finding nouveau :** **F-CI-05** (Major) — premier run GitHub `Build` échoue sur `node:sqlite` sous Node 20 ; correctif exige GO Morris (Node pin et/ou workflow et/ou runtime hors périmètre ce cycle).

---

## 6. Findings / réserves

| ID | Statut |
|----|--------|
| F-A6-PM-G01 | OPEN — mitigation préparée · **non clos** |
| F-CI-01 | OPEN (Node pin) |
| F-CI-02 | OPEN (npm audit 12 high) |
| F-CI-03 | OPEN (local 24 vs CI 20) — **corroboré** par F-CI-05 |
| F-CI-04 | OPEN (actionlint absent) |
| **F-CI-05** | **OPEN — Major** — Build CI fail `node:sqlite` / Node 20 |
| B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 | **OPEN** |
| C1–C4 | RECOMMENDED — NOT VALIDATED |

---

## 7. Protections

- Branch protection : **non modifiée**
- Required check : **non appliqué** (nom réel observé : `Build and validate SFIA Studio` — **ne pas** activer tant qu’échec)
- Auto-merge / merge queue : **non activés**

---

## 8. Anti-claims

- PR ouverte ≠ ready to merge
- MERGEABLE ≠ validé
- CI failure ≠ PASS
- tests locaux ≠ CI distante
- premier run observé ≠ merge autorisé
- F-A6-PM-G01 non clos
- T-A6 / Option A non COMPLETE
- T-A7 non ouvert

---

## 9. Gate suivant

```
GO REVIEW OPTION A CI GOVERNANCE PR AND CI
— SFIA STUDIO V3-NATIVE
```

**NOT consumed.** Aucun gate de merge proposé. Correctif CI = cycle séparé sous GO Morris.

---

## 10. Verdict

`SFIA STUDIO V3-NATIVE OPTION A CI GOVERNANCE PR CREATED — CI CORRECTION REQUIRES MORRIS GO`
