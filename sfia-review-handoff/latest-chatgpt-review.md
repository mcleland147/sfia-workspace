# SFIA Studio V3.1-D2-B — Documentary Closure Accelerated Publication Final Review Pack

- **Date/heure/fuseau:** 2026-08-03 08:47:13 CEST (+0200)
- **Rôle:** Cursor accelerated documentary publication Critical
- **Orchestration:** Cycle 13 PR readiness/publication + Cycle 14 post-merge (single Morris GO run)
- **Profil:** Critical
- **Typologie:** DOC

## GO Morris consommé

```
GO PUBLICATION ACCÉLÉRÉE SFIA STUDIO V3.1-D2-B DOCUMENTARY CLOSURE —
REVALIDATE THE FOUR LOCAL DOCUMENTARY CHANGES ON post-merge/sfia-studio-v3-1-d2-b-ckc-resolver AGAINST main 7084d2e9f3c67e1e76b05decdbebca3b30417e5b —
VERIFY EXACT FOUR-FILE DOC-ONLY SCOPE, CANONICAL DIFF +91/-50, R-QA-REV-01 AND R-QA-REV-02 OPEN NOT LIFTED, D2-C CLOSED, D2-D GATED AND D3 CLOSED —
IF ALL CONDITIONS REMAIN TRUE: COMMIT, PUSH, CREATE DRAFT PR, WAIT FOR REQUIRED CI, MARK READY, MERGE BY MERGE COMMIT, VERIFY MAIN CI AND COMPLETE POST-MERGE VALIDATION —
PUBLISH ONE FINAL REVIEW HANDOFF —
STOP ON ANY DRIFT —
NO BRANCH DELETION —
NO CODE CHANGE —
NO D2-C — NO D2-D — NO D3 — NO METHOD PROMOTION
```

**Date/heure GO:** 2026-08-03 08:29 CEST (+0200)

## Critical justification

Push projet, draft PR, mark-ready, merge conditionnel, deux CI distantes, actions irréversibles sans revert, fail-closed au premier drift, aucun arbitrage Cursor.

## Git Truth initial

```
2026-08-03 08:39:01 CEST (+0200)
=== GIT TRUTH ===
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
post-merge/sfia-studio-v3-1-d2-b-ckc-resolver
7084d2e9f3c67e1e76b05decdbebca3b30417e5b
7084d2e9f3c67e1e76b05decdbebca3b30417e5b
0	0
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
?? .tmp-sfia-review/
=== remote post-merge branch ===
=== existing PRs ===
[]
=== delivery ===
dd63b20828e33d96be7c686d9e793bab4c4845b6
=== auth ===
github.com
  ✓ Logged in to github.com account mcleland147 (keyring)
  - Active account: true
  - Git operations protocol: https
  - Token: gho_************************************
  - Token scopes: 'gist', 'read:org', 'repo', 'workflow'
=== handoff ===
35d81cd3a6d44df022dd5df6a542a1372b03e04f
3d8e19557e55bc4714ffe8b9dba0833f690dae81
# SFIA Studio V3.1-D2-B — Post-Merge Full Review Pack

- **Date/heure/fuseau:** 2026-08-03 08:20:10 CEST (+0200)
- **Rôle:** Cursor post-merge Standard
- **Cycle:** 14 — Post-merge
- **Profil:** Standard

```

## Handoff source

- tip: `35d81cd3a6d44df022dd5df6a542a1372b03e04f`
- blob: `3d8e19557e55bc4714ffe8b9dba0833f690dae81`
- titre: SFIA Studio V3.1-D2-B — Post-Merge Full Review Pack

## Gate 1 — Diff initial

```
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md

 .../08-implementation-backlog-and-slicing.md       | 14 +++--
 .../19-v3-1-d2-a-b-c-delivery-backlog.md           | 50 +++++++++++++++--
 .../README.md                                      | 65 +++++++++++-----------
 .../README.md                                      | 12 ++--
 4 files changed, 91 insertions(+), 50 deletions(-)

```

SHA-256 initial (`git diff --no-ext-diff --full-index | shasum -a 256`):

`d023a0d46a0ccdc823367be7befd37d0ddc1857e6e24067851a772c0bf0ea79e  -`

`git diff --check`: PASS

## Gate 2 — Normalisation de durabilité

Formulations transitoires remplacées in-place dans sections déjà modifiées uniquement (même +91/−50) :

- `DOCUMENTARY CLOSURE LOCAL PENDING DISTINCT PR READINESS` → `DOCUMENTARY CLOSURE CONTENT ALIGNED — VERSIONED PUBLICATION STATE IS GIT-AUTHORITATIVE`
- `DOCUMENTARY CLOSURE LOCAL UNCOMMITTED` → même formulation durable
- `corrections documentaires locales non commitées` / `clôture documentaire locale non commitée` → Git-authoritative
- `non poussée` → `branche documentaire de clôture`
- gate candidat PR readiness → `NO AUTOMATIC NEXT CYCLE — D2-C/D2-D/D3 + DISTINCT MORRIS GO REQUIRED`
- verdict `ALIGNED LOCALLY` / `COMMIT/PUSH/PR REQUIRES DISTINCT…` → durable Git-authoritative

### Framing README intégré sur main (complet)

```markdown
# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING LIVING — V3.1-D2-B PRODUCT PACKAGE INTEGRATED ON MAIN — POST-MERGE VALIDATED — R-QA-REV-01 AND R-QA-REV-02 CARRIED FORWARD — DOCUMENTARY CLOSURE CONTENT ALIGNED — VERSIONED PUBLICATION STATE IS GIT-AUTHORITATIVE` |
| **Date** | 2026-08-03 08:20:00 CEST (+0200) |
| **Cycle courant** | 14 — Post-merge V3.1-D2-B CKC Resolver |
| **Profil** | **Standard** |
| **Typologie** | DOC |
| **Gate courant** | GO POST-MERGE consommé le 2026-08-03 08:09 CEST (+0200) |
| **Product merge D2-B** | PR #301 · `7084d2e9f3c67e1e76b05decdbebca3b30417e5b` |
| **Delivery commit D2-B** | `dd63b20828e33d96be7c686d9e793bab4c4845b6` |
| **main** | `7084d2e9f3c67e1e76b05decdbebca3b30417e5b` |
| **Post-merge branch** | `post-merge/sfia-studio-v3-1-d2-b-ckc-resolver` (branche documentaire de clôture) |
| **Delivery branch D2-B** | conservée sur `dd63b20828e33d96be7c686d9e793bab4c4845b6` |
| **Main CI D2-B** | run `30788690355` SUCCESS · Required Gate SUCCESS |
| **Package D2-B** | 13 fichiers produit intégrés (+2000 / −2) |
| **D2-A** | product + documentary closure **complets sur main** (historique PR #298 / #299) |
| **D2-B** | **intégré `main`** — post-merge validé · F-QA-01…06 CLOSED · réserves MINOR ouvertes |
| **D2-C** | **fermé** — aucun GO Delivery consommé |
| **D2-D** | **gated** / non ouvert |
| **D3** | **fermé** |
| **Réserves D2-B** | R-QA-REV-01 MINOR OPEN NOT LIFTED · R-QA-REV-02 MINOR OPEN NOT LIFTED |
| **Réserves D2-A** | R-PR-D2A-01…03 résiduelles mineures · INHERITED-R-01 NOT LIFTED |
| **Réserve README** | `ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED` |

## Synthèse

| Lot | État |
|-----|------|
| V1 / V2 / V3.1-D1 | intégrés / clos `main` |
| **V3.1-D2 FA/TA/backlog** | adoptés / validé |
| **D2-A Delivery → QA → correctif → revalidation → merge → clôture doc** | complets sur `main` · findings fermés · réserves D2-A conservées |
| **D2-B Delivery → QA → correctif → revalidation → PR → merge** | **intégré `main`** · PR #301 MERGED · CI main `30788690355` SUCCESS |
| **Post-merge D2-B** | **VALIDATED** (présent cycle) · documentary closure content aligned — Git-authoritative |
| **Réserves D2-B** | R-QA-REV-01 · R-QA-REV-02 — **ouvertes / non levées** |
| Delivery D2-C | **fermée** |
| D2-D | **gated** |
| D3 | **fermé** |

**INHERITED-R-01 (README) :** condensation framing — **ACCEPTED — STILL TRACEABLE — NOT LIFTED**.

## Gate candidat suivant

```text
NO AUTOMATIC NEXT CYCLE —
D2-C REMAINS CLOSED —
D2-D REMAINS GATED —
D3 REMAINS CLOSED —
DISTINCT MORRIS GO REQUIRED —
ANY D2-C / D2-D / D3 OR METHOD CYCLE REQUIRES A DISTINCT MORRIS GO
```

## Verdict

`V3.1-D2-B PRODUCT PACKAGE INTEGRATED ON MAIN —
POST-MERGE VALIDATED —
R-QA-REV-01 AND R-QA-REV-02 CARRIED FORWARD WITHOUT LIFTING —
DOCUMENTARY CLOSURE CONTENT ALIGNED —
VERSIONED PUBLICATION STATE IS GIT-AUTHORITATIVE —
D2-C CLOSED —
D2-D GATED —
D3 CLOSED —
NO METHOD PROMOTION`

```

### Registre AO (extrait vivant post-normalisation)

```markdown
## AO. Registre merge / post-merge D2-B — 2026-08-03

Ce registre complète l'historique du backlog sans réécrire les registres D2-A datés AH–AN.

| Élément | État |
|---------|------|
| GO mark-ready + merge D2-B | consommé 2026-08-03 07:52 CEST (+0200) |
| GO post-merge D2-B | consommé 2026-08-03 08:09 CEST (+0200) |
| PR | [#301](https://github.com/mcleland147/sfia-workspace/pull/301) **MERGED** |
| Stratégie | merge commit |
| Delivery commit | `dd63b20828e33d96be7c686d9e793bab4c4845b6` |
| Merge SHA | `7084d2e9f3c67e1e76b05decdbebca3b30417e5b` |
| Parent 1 | `bb685f1205b33f887ee27b42ac918c96386a6e33` |
| Parent 2 | `dd63b20828e33d96be7c686d9e793bab4c4845b6` |
| Package | treize fichiers · +2000 / −2 |
| Stories | BL-D2-B-01…06 **intégrées** |
| CI PR (historique) | run `30771445892` / #75 SUCCESS |
| CI main | run `30788690355` SUCCESS · Required Gate SUCCESS |
| Branche Delivery | conservée à distance sur `dd63b208…` |
| Branche post-merge | `post-merge/sfia-studio-v3-1-d2-b-ckc-resolver` — branche documentaire de clôture |
| Findings fermés | F-QA-01…06 |
| Réserves ouvertes | **R-QA-REV-01 MINOR** · **R-QA-REV-02 MINOR** — NOT LIFTED |
| D2-C | **fermé** — aucun GO Delivery |
| D2-D | **gated** / non ouvert |
| D3 | **fermé** |
| Commit / push / PR documentaire dans ce cycle post-merge | **hors cycle 14** — publication versionnée Git-authoritative |
| Clôture documentaire | contenu aligné — VERSIONED PUBLICATION STATE IS GIT-AUTHORITATIVE |

### R-QA-REV-01 MINOR — OPEN NOT LIFTED

`oa.ckc.resolution_started` et événements d'échec associés peuvent porter un `ts` dérivé d'un `resolvedAt` invalide (émission started avant validation ISO). Aucun succès, aucune preuve, aucun `consumed=true`.

### R-QA-REV-02 MINOR — OPEN NOT LIFTED

Sondes adversariales indépendantes exécutées via `vite-node` temporaire hors include Vitest `__tests__/**`. Limitation d'outillage uniquement ; package non muté.

**Statut :** `D2-B PRODUCT PACKAGE INTEGRATED ON MAIN — POST-MERGE VALIDATED — R-QA-REV-01 AND R-QA-REV-02 CARRIED FORWARD WITHOUT LIFTING — DOCUMENTARY CLOSURE CONTENT ALIGNED — VERSIONED PUBLICATION STATE IS GIT-AUTHORITATIVE — D2-C CLOSED — D2-D GATED — D3 NOT OPENED — NO METHOD PROMOTION`.

```

## Diff final avant commit

```
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md

 .../08-implementation-backlog-and-slicing.md       | 14 +++--
 .../19-v3-1-d2-a-b-c-delivery-backlog.md           | 50 +++++++++++++++--
 .../README.md                                      | 65 +++++++++++-----------
 .../README.md                                      | 12 ++--
 4 files changed, 91 insertions(+), 50 deletions(-)

```

SHA-256 final:

`1dacf2fe3de67f70720e6ff8fa330892fe45e6dc16830abbfc44a0c63fcaa49b  -`

`git diff --check`: PASS · +91/−50 · 4 fichiers

## Gate 3 — Commit

- message: `docs(sfia-studio): close V3.1-D2-B documentary status`
- DOC_COMMIT_SHA: `deaed6f6fcd681a8f9bdd10114afda15f48904ec`
- parent: `7084d2e9f3c67e1e76b05decdbebca3b30417e5b`
- 4 fichiers · +91/−50 · aucun `.tmp-sfia-review/**`

```
deaed6f docs(sfia-studio): close V3.1-D2-B documentary status
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md

```

## Gate 4 — Push

Remote `origin/post-merge/sfia-studio-v3-1-d2-b-ckc-resolver` = `deaed6f6fcd681a8f9bdd10114afda15f48904ec` · no force push · origin/main remained `7084d2e9…` · Delivery remained `dd63b208…`

## Gate 5 — Draft PR #302

- URL: https://github.com/mcleland147/sfia-workspace/pull/302
- title: docs(sfia-studio): close V3.1-D2-B documentary status
- OPEN draft · base main@7084d2e9… · head `deaed6f6fcd681a8f9bdd10114afda15f48904ec` · 1 commit · 4 files · +91/−50

### Body complet

```markdown
## Summary

Aligns living documentary status for SFIA Studio V3.1-D2-B after product integration on main.

This four-file documentary package records that the D2-B product package is integrated via PR #301, that post-merge product validation completed, and that documentary closure content is aligned. Versioned publication state is Git-authoritative.

## Base and commit

- Base: `main` @ `7084d2e9f3c67e1e76b05decdbebca3b30417e5b`
- Documentary commit: `deaed6f6fcd681a8f9bdd10114afda15f48904ec`
- Message: `docs(sfia-studio): close V3.1-D2-B documentary status`
- Commits: 1
- Files: 4
- Diff: +91 / −50

## Files

1. `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md`
2. `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md`
3. `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md`
4. `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md`

No code, tests, configuration, workflows, dependencies, lockfiles, prompts, or method files are included.

## Product integration references

- Product PR #301 MERGED
- Product merge commit: `7084d2e9f3c67e1e76b05decdbebca3b30417e5b`
- Product Delivery commit: `dd63b20828e33d96be7c686d9e793bab4c4845b6`
- Product main CI run `30788690355` SUCCESS · Required Gate SUCCESS

## Reserves (carried forward — not lifted)

### R-QA-REV-01 MINOR — OPEN NOT LIFTED

`oa.ckc.resolution_started` / associated failure events may carry invalid `ts` when `resolvedAt` is invalid (started emitted before ISO validation). No success, no proof, no `consumed=true`.

### R-QA-REV-02 MINOR — OPEN NOT LIFTED

Independent adversarial probes executed via temporary `vite-node` outside Vitest `__tests__/**`. Tooling limitation only; package not mutated.

## Boundaries

- D2-C closed
- D2-D gated / not opened
- D3 closed
- No automatic next cycle
- Any D2-C / D2-D / D3 or method cycle requires a distinct Morris GO
- No method promotion
- No branch deletion

## Authorization

The Morris accelerated-publication GO authorizes mark-ready and merge only if all remote and local preconditions remain true after required CI success.

## Rollback

Rollback requires a distinct Morris GO and would revert only the documentary commit `deaed6f6fcd681a8f9bdd10114afda15f48904ec`. No data migration. No automatic rollback is authorized by this PR.

```

## Gate 6 — CI PR

- run ID: `30791031335`
- headSha: `deaed6f6fcd681a8f9bdd10114afda15f48904ec`
- completed / success

- Detect SFIA Studio changes: success
  - Detect Studio scope: success
- Build and validate SFIA Studio: success
  - Typecheck: success
  - Lint: success
  - Build: success
  - Unit tests (Vitest): success
  - Modeled governance tests: success
  - Secret pattern scan (targeted): success
  - Trailing whitespace check: success
- SFIA Studio Required Gate: success
  - Aggregate required gate: success

## Gate 7 — Ready for review

`gh pr ready 302` → isDraft=false · MERGEABLE CLEAN · checks SUCCESS · no reviews/threads · scope inchangé

## Gate 8 — Merge

```
GH_PROMPT_DISABLED=1 gh pr merge 302 --merge --match-head-commit deaed6f6fcd681a8f9bdd10114afda15f48904ec
```

- DOC_MERGE_SHA: `5ca7a2603b000a468f6baea81ffc6c53acf0cd70`
- parent 1: `7084d2e9f3c67e1e76b05decdbebca3b30417e5b`
- parent 2: `deaed6f6fcd681a8f9bdd10114afda15f48904ec`
- origin/main: `5ca7a2603b000a468f6baea81ffc6c53acf0cd70`

```
commit 5ca7a2603b000a468f6baea81ffc6c53acf0cd70
Merge: 7084d2e deaed6f
Author:     mcleland147 <m.cleland@live.fr>
AuthorDate: Mon Aug 3 08:44:14 2026 +0200
Commit:     GitHub <noreply@github.com>
CommitDate: Mon Aug 3 08:44:14 2026 +0200

    Merge pull request #302 from mcleland147/post-merge/sfia-studio-v3-1-d2-b-ckc-resolver

    docs(sfia-studio): close V3.1-D2-B documentary status

```

Branches préservées:

```
deaed6f6fcd681a8f9bdd10114afda15f48904ec	refs/heads/post-merge/sfia-studio-v3-1-d2-b-ckc-resolver
dd63b20828e33d96be7c686d9e793bab4c4845b6	refs/heads/delivery/sfia-studio-v3-1-d2-b-ckc-resolver
```

## Gate 9 — CI main

- MAIN_RUN_ID: `30791170025`
- event push · headSha `5ca7a2603b000a468f6baea81ffc6c53acf0cd70` · completed / success

- Detect SFIA Studio changes: success
  - Detect Studio scope: success
- Build and validate SFIA Studio: success
  - Typecheck: success
  - Lint: success
  - Build: success
  - Unit tests (Vitest): success
  - Modeled governance tests: success
  - Secret pattern scan (targeted): success
  - Trailing whitespace check: success
- SFIA Studio Required Gate: success
  - Aggregate required gate: success

## Gate 10 — Validation documentaire finale sur main

Quatre fichiers lus depuis `5ca7a2603b000a468f6baea81ffc6c53acf0cd70` :

- aucun statut transitoire vivant (LOCAL PENDING / UNCOMMITTED / CHANGES REMAIN LOCAL / READY FOR DISTINCT PR READINESS / CI PENDING / PR REMAINS DRAFT / MERGE NOT AUTHORIZED)
- D2-B product integrated · post-merge validated · documentary closure content aligned · Git-authoritative
- R-QA-REV-01 OPEN NOT LIFTED
- R-QA-REV-02 OPEN NOT LIFTED
- D2-C closed · D2-D gated · D3 closed · no automatic next cycle · no method promotion
- PR #301 still MERGED @ `7084d2e9…` (ancestor of DOC_MERGE_SHA)

## Diff utile complet du commit documentaire

```diff
commit deaed6f6fcd681a8f9bdd10114afda15f48904ec
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Mon Aug 3 08:41:12 2026 +0200

    docs(sfia-studio): close V3.1-D2-B documentary status

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
index 2a8609f8460f0077444ce77fc702258df7dbaa7d..412ddc5dbb9f163fe144c7de6b7c2d7779ea328c 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
@@ -60,7 +60,8 @@ Docs :
 | Post-merge D2-A | produit et documentation intégrés sur main · PR #298 et #299 mergées · main synchronisée · CI main finales vertes |
 | Documentary closure D2-A | PR #299 · merge commit `983cef38c972ef1646166669613e680efba8f487` · main CI run `30759197858` SUCCESS · Required Gate SUCCESS · R-MR-PM-D2A-01 CLOSED |
 | PR readiness corrective D2-A | PASS LOCALLY · R-PR-PM-D2A-01…03 CLOSED · publication et merge soumis à gates Morris distincts |
-| Delivery D2-B | **fermée** — aucun GO Delivery D2-B consommé |
+| Delivery D2-B | **intégrée `main`** — PR #301 · merge commit `7084d2e9f3c67e1e76b05decdbebca3b30417e5b` · Delivery `dd63b20828e33d96be7c686d9e793bab4c4845b6` · CI main `30788690355` SUCCESS |
+| Post-merge D2-B | **validé** (cycle 14) · F-QA-01…06 CLOSED · R-QA-REV-01 / R-QA-REV-02 MINOR ouvertes · documentary closure content aligned — Git-authoritative |
 | Delivery D2-C | **fermée** |
 | D2-D (extensions) | **gated** · non ouvert |
 | D3 | **non ouvert** |
@@ -70,7 +71,7 @@ Docs :
 | Lot | Contenu | Statut |
 |-----|---------|--------|
 | **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
-| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **cadrage arbitré** · **conception validée** · **FA-C adoptée** · **TA adoptée** · **backlog validé** · D2-A product **intégré `main`** · clôture documentaire **intégrée `main`** · QA/CI vertes · findings fermés · réserves conservées · post-merge final **validé** · documentary closure **complete on main** · D2-B/C **fermées** · slicing **A→B→C** · D2-D gated · D3 **non ouvert** |
+| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **cadrage arbitré** · **conception validée** · **FA-C adoptée** · **TA adoptée** · **backlog validé** · D2-A product **intégré `main`** · clôture documentaire D2-A **intégrée `main`** · D2-B product **intégré `main`** (PR #301) · post-merge D2-B **validé** · F-QA-01…06 CLOSED · R-QA-REV-01/02 ouvertes · D2-C **fermée** · slicing **A→B→C** · D2-D gated · D3 **non ouvert** |
 | **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |

 ### Réserves QA
@@ -79,11 +80,14 @@ R-QA-01…09 **CLOSED**. QA-G3 PASS. Historique PR readiness conservé.

 ### Réserves D2

-**Findings fermés :** R-QA-D2A-01 · R-PR-D2A-04 · R-CI-D2A-01 · R-MR-D2A-01 · R-PR-PM-D2A-01 · R-PR-PM-D2A-02 · R-PR-PM-D2A-03 · R-MR-PM-D2A-01.
+**Findings fermés :** R-QA-D2A-01 · R-PR-D2A-04 · R-CI-D2A-01 · R-MR-D2A-01 · R-PR-PM-D2A-01 · R-PR-PM-D2A-02 · R-PR-PM-D2A-03 · R-MR-PM-D2A-01 · F-QA-01…06 (D2-B).

-**Réserves conservées (mineures / NOT LIFTED) :** R-PR-D2A-01 · R-PR-D2A-02 · R-PR-D2A-03 · INHERITED-R-01 — NOT LIFTED.
+**Réserves D2-A conservées (mineures / NOT LIFTED) :** R-PR-D2A-01 · R-PR-D2A-02 · R-PR-D2A-03 · INHERITED-R-01 — NOT LIFTED.

-D2-B, D2-C et D3 restent **fermés** malgré l’intégration réussie de D2-A —
+**Réserves D2-B conservées (mineures / NOT LIFTED) :** R-QA-REV-01 · R-QA-REV-02 — OPEN — NOT LIFTED.
+
+D2-B product est **intégré sur main** ; D2-C et D3 restent **fermés** ; D2-D reste **gated** —
+toute ouverture D2-C / D2-D / D3 exige un GO Morris distinct —
 voir [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) /
 [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) /
 [`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) /
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
index ff7af5d0355d6df82ab19b302b18984031495ef6..0d7c093ed29a28891425cef8b51c449ab7d0bca8 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
@@ -268,7 +268,7 @@ Objectif : résoudre CKC Core depuis mapping validé ; statut D2 + projection T-
 | **Réversibilité** | Moyenne |
 | **Profil Delivery candidat** | Critical |
 | **Gate Morris** | GO DELIVERY D2-B (après A) |
-| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+| **Statut** | `INTEGRATED ON MAIN — PR #301 — POST-MERGE VALIDATED — R-QA-REV-01/02 OPEN` |

 **Critères d’acceptation :**

@@ -299,7 +299,7 @@ Objectif : résoudre CKC Core depuis mapping validé ; statut D2 + projection T-
 | **Réversibilité** | Moyenne |
 | **Profil Delivery candidat** | Critical |
 | **Gate Morris** | GO DELIVERY D2-B |
-| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+| **Statut** | `INTEGRATED ON MAIN — PR #301 — POST-MERGE VALIDATED — R-QA-REV-01/02 OPEN` |

 **Critères d’acceptation :**

@@ -330,7 +330,7 @@ Objectif : résoudre CKC Core depuis mapping validé ; statut D2 + projection T-
 | **Réversibilité** | Moyenne |
 | **Profil Delivery candidat** | Critical |
 | **Gate Morris** | GO DELIVERY D2-B |
-| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+| **Statut** | `INTEGRATED ON MAIN — PR #301 — POST-MERGE VALIDATED — R-QA-REV-01/02 OPEN` |

 **Critères d’acceptation :**

@@ -363,7 +363,7 @@ Objectif : résoudre CKC Core depuis mapping validé ; statut D2 + projection T-
 | **Réversibilité** | Haute |
 | **Profil Delivery candidat** | Critical |
 | **Gate Morris** | GO DELIVERY D2-B |
-| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+| **Statut** | `INTEGRATED ON MAIN — PR #301 — POST-MERGE VALIDATED — R-QA-REV-01/02 OPEN` |

 **Critères d’acceptation :**

@@ -394,7 +394,7 @@ Objectif : résoudre CKC Core depuis mapping validé ; statut D2 + projection T-
 | **Réversibilité** | Haute |
 | **Profil Delivery candidat** | Critical |
 | **Gate Morris** | GO DELIVERY D2-B |
-| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+| **Statut** | `INTEGRATED ON MAIN — PR #301 — POST-MERGE VALIDATED — R-QA-REV-01/02 OPEN` |

 **Critères d’acceptation :**

@@ -426,7 +426,7 @@ Objectif : résoudre CKC Core depuis mapping validé ; statut D2 + projection T-
 | **Réversibilité** | Moyenne |
 | **Profil Delivery candidat** | Critical |
 | **Gate Morris** | GO DELIVERY D2-B |
-| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+| **Statut** | `INTEGRATED ON MAIN — PR #301 — POST-MERGE VALIDATED — R-QA-REV-01/02 OPEN` |

 **Critères d’acceptation :**

@@ -1005,3 +1005,41 @@ des dix-sept stories.
 | Commit / push / PR du présent cycle post-merge final | **non exécutés** |

 **Statut :** `D2-A PRODUCT AND DOCUMENTARY CLOSURE COMPLETE ON MAIN — POST-MERGE VALIDATED — POST-MERGE AND DELIVERY BRANCHES PRESERVED — RESERVES CARRIED FORWARD — D2-B AND D2-C REMAIN CLOSED — D2-D GATED — D3 NOT OPENED`.
+
+## AO. Registre merge / post-merge D2-B — 2026-08-03
+
+Ce registre complète l'historique du backlog sans réécrire les registres D2-A datés AH–AN.
+
+| Élément | État |
+|---------|------|
+| GO mark-ready + merge D2-B | consommé 2026-08-03 07:52 CEST (+0200) |
+| GO post-merge D2-B | consommé 2026-08-03 08:09 CEST (+0200) |
+| PR | [#301](https://github.com/mcleland147/sfia-workspace/pull/301) **MERGED** |
+| Stratégie | merge commit |
+| Delivery commit | `dd63b20828e33d96be7c686d9e793bab4c4845b6` |
+| Merge SHA | `7084d2e9f3c67e1e76b05decdbebca3b30417e5b` |
+| Parent 1 | `bb685f1205b33f887ee27b42ac918c96386a6e33` |
+| Parent 2 | `dd63b20828e33d96be7c686d9e793bab4c4845b6` |
+| Package | treize fichiers · +2000 / −2 |
+| Stories | BL-D2-B-01…06 **intégrées** |
+| CI PR (historique) | run `30771445892` / #75 SUCCESS |
+| CI main | run `30788690355` SUCCESS · Required Gate SUCCESS |
+| Branche Delivery | conservée à distance sur `dd63b208…` |
+| Branche post-merge | `post-merge/sfia-studio-v3-1-d2-b-ckc-resolver` — branche documentaire de clôture |
+| Findings fermés | F-QA-01…06 |
+| Réserves ouvertes | **R-QA-REV-01 MINOR** · **R-QA-REV-02 MINOR** — NOT LIFTED |
+| D2-C | **fermé** — aucun GO Delivery |
+| D2-D | **gated** / non ouvert |
+| D3 | **fermé** |
+| Commit / push / PR documentaire dans ce cycle post-merge | **hors cycle 14** — publication versionnée Git-authoritative |
+| Clôture documentaire | contenu aligné — VERSIONED PUBLICATION STATE IS GIT-AUTHORITATIVE |
+
+### R-QA-REV-01 MINOR — OPEN NOT LIFTED
+
+`oa.ckc.resolution_started` et événements d'échec associés peuvent porter un `ts` dérivé d'un `resolvedAt` invalide (émission started avant validation ISO). Aucun succès, aucune preuve, aucun `consumed=true`.
+
+### R-QA-REV-02 MINOR — OPEN NOT LIFTED
+
+Sondes adversariales indépendantes exécutées via `vite-node` temporaire hors include Vitest `__tests__/**`. Limitation d'outillage uniquement ; package non muté.
+
+**Statut :** `D2-B PRODUCT PACKAGE INTEGRATED ON MAIN — POST-MERGE VALIDATED — R-QA-REV-01 AND R-QA-REV-02 CARRIED FORWARD WITHOUT LIFTING — DOCUMENTARY CLOSURE CONTENT ALIGNED — VERSIONED PUBLICATION STATE IS GIT-AUTHORITATIVE — D2-C CLOSED — D2-D GATED — D3 NOT OPENED — NO METHOD PROMOTION`.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
index 0fc0a1254e914dcbafb032889281b574e643378e..4b6439d332e02497febb3133119e4d3d431d3ee9 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
@@ -2,26 +2,26 @@

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | `FRAMING LIVING — V3.1-D2-A PRODUCT AND DOCUMENTARY CLOSURE COMPLETE ON MAIN — POST-MERGE VALIDATED — RESERVES CARRIED FORWARD` |
-| **Date** | 2026-08-02 19:51:05 CEST (+0200) |
-| **Cycle courant** | 14 — Post-merge final V3.1-D2-A documentary closure |
+| **Statut** | `FRAMING LIVING — V3.1-D2-B PRODUCT PACKAGE INTEGRATED ON MAIN — POST-MERGE VALIDATED — R-QA-REV-01 AND R-QA-REV-02 CARRIED FORWARD — DOCUMENTARY CLOSURE CONTENT ALIGNED — VERSIONED PUBLICATION STATE IS GIT-AUTHORITATIVE` |
+| **Date** | 2026-08-03 08:20:00 CEST (+0200) |
+| **Cycle courant** | 14 — Post-merge V3.1-D2-B CKC Resolver |
 | **Profil** | **Standard** |
 | **Typologie** | DOC |
-| **Gate courant** | GO POST-MERGE consommé le 2026-08-02 19:43 CEST (+0200) |
-| **Product merge** | PR #298 · `a804f29df3015fe0c71213d09b95159f04065dfc` |
-| **Documentary closure merge** | PR #299 · `983cef38c972ef1646166669613e680efba8f487` |
-| **main** | `983cef38c972ef1646166669613e680efba8f487` |
-| **Post-merge branch** | conservée sur `99e55d4ff05af66445f2522f85910faebceaded4` |
-| **Delivery branch** | conservée sur `f048a9c25e478bd7bf4cffb6617f6b085c8cf689` |
-| **Main CI** | run `30759197858` SUCCESS · Required Gate SUCCESS |
-| **QA-G3 D2-A** | **ACCEPTED BY MORRIS** |
-| **Package** | 20 fichiers produit + 4 fichiers clôture documentaire intégrés |
-| **Documentation** | **COMPLETE ON MAIN** |
-| **D2-B** | **fermé** — aucun GO Delivery consommé |
-| **D2-C** | **fermé** |
+| **Gate courant** | GO POST-MERGE consommé le 2026-08-03 08:09 CEST (+0200) |
+| **Product merge D2-B** | PR #301 · `7084d2e9f3c67e1e76b05decdbebca3b30417e5b` |
+| **Delivery commit D2-B** | `dd63b20828e33d96be7c686d9e793bab4c4845b6` |
+| **main** | `7084d2e9f3c67e1e76b05decdbebca3b30417e5b` |
+| **Post-merge branch** | `post-merge/sfia-studio-v3-1-d2-b-ckc-resolver` (branche documentaire de clôture) |
+| **Delivery branch D2-B** | conservée sur `dd63b20828e33d96be7c686d9e793bab4c4845b6` |
+| **Main CI D2-B** | run `30788690355` SUCCESS · Required Gate SUCCESS |
+| **Package D2-B** | 13 fichiers produit intégrés (+2000 / −2) |
+| **D2-A** | product + documentary closure **complets sur main** (historique PR #298 / #299) |
+| **D2-B** | **intégré `main`** — post-merge validé · F-QA-01…06 CLOSED · réserves MINOR ouvertes |
+| **D2-C** | **fermé** — aucun GO Delivery consommé |
 | **D2-D** | **gated** / non ouvert |
 | **D3** | **fermé** |
-| **Réserves** | R-PR-D2A-01…03 résiduelles mineures ; INHERITED-R-01 NOT LIFTED |
+| **Réserves D2-B** | R-QA-REV-01 MINOR OPEN NOT LIFTED · R-QA-REV-02 MINOR OPEN NOT LIFTED |
+| **Réserves D2-A** | R-PR-D2A-01…03 résiduelles mineures · INHERITED-R-01 NOT LIFTED |
 | **Réserve README** | `ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED` |

 ## Synthèse
@@ -30,17 +30,11 @@
 |-----|------|
 | V1 / V2 / V3.1-D1 | intégrés / clos `main` |
 | **V3.1-D2 FA/TA/backlog** | adoptés / validé |
-| **D2-A Delivery → QA → correctif → revalidation** | complets · R-QA-D2A-01 CLOSED |
-| **QA-G3** | **ACCEPTED BY MORRIS** |
-| **PR #298** | **MERGED** |
-| **Product CI** | **SUCCESS** |
-| **Product post-merge** | **VALIDATED** |
-| **PR #299** | **MERGED** |
-| **Documentary main CI** | **SUCCESS** (`30759197858`) |
-| **Documentation** | **COMPLETE ON MAIN** |
-| **R-MR-PM-D2A-01** | **CLOSED** |
-| **Réserves** | **carried forward** |
-| Delivery D2-B/C | **fermées** |
+| **D2-A Delivery → QA → correctif → revalidation → merge → clôture doc** | complets sur `main` · findings fermés · réserves D2-A conservées |
+| **D2-B Delivery → QA → correctif → revalidation → PR → merge** | **intégré `main`** · PR #301 MERGED · CI main `30788690355` SUCCESS |
+| **Post-merge D2-B** | **VALIDATED** (présent cycle) · documentary closure content aligned — Git-authoritative |
+| **Réserves D2-B** | R-QA-REV-01 · R-QA-REV-02 — **ouvertes / non levées** |
+| Delivery D2-C | **fermée** |
 | D2-D | **gated** |
 | D3 | **fermé** |

@@ -50,18 +44,21 @@

 ```text
 NO AUTOMATIC NEXT CYCLE —
-D2-B AND D2-C REMAIN CLOSED —
+D2-C REMAINS CLOSED —
 D2-D REMAINS GATED —
 D3 REMAINS CLOSED —
-ANY NEW DELIVERY OR METHOD CYCLE REQUIRES A DISTINCT MORRIS GO
+DISTINCT MORRIS GO REQUIRED —
+ANY D2-C / D2-D / D3 OR METHOD CYCLE REQUIRES A DISTINCT MORRIS GO
 ```

 ## Verdict

-`V3.1-D2-A PRODUCT AND DOCUMENTARY CLOSURE COMPLETE ON MAIN —
+`V3.1-D2-B PRODUCT PACKAGE INTEGRATED ON MAIN —
 POST-MERGE VALIDATED —
-RESERVES CARRIED FORWARD —
-NO D2-B —
-NO D2-C —
+R-QA-REV-01 AND R-QA-REV-02 CARRIED FORWARD WITHOUT LIFTING —
+DOCUMENTARY CLOSURE CONTENT ALIGNED —
+VERSIONED PUBLICATION STATE IS GIT-AUTHORITATIVE —
+D2-C CLOSED —
 D2-D GATED —
-NO D3`
+D3 CLOSED —
+NO METHOD PROMOTION`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
index 56aa4684632098bd2709ff60f6dd60e41c5c2d2d..e59f524a9e9d64e5f892061020e3ec95826dbb87 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
@@ -10,10 +10,10 @@
 | Typologie | EVOL |
 | Branche locale | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
 | Base / HEAD | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
-| Statut | `V3.1-D2-A PRODUCT AND DOCUMENTARY CLOSURE COMPLETE ON MAIN — POST-MERGE VALIDATED — RESERVES CARRIED FORWARD` |
+| Statut | `V3.1-D2-A PRODUCT AND DOCUMENTARY CLOSURE COMPLETE ON MAIN — D2-B PRODUCT ALSO INTEGRATED ON MAIN (PR #301) — POST-MERGE D2-B VALIDATED — R-QA-REV-01/02 OPEN — D2-A RESERVES CARRIED FORWARD` |
 | Merge product | PR #298 · `a804f29df3015fe0c71213d09b95159f04065dfc` |
 | Documentary closure merge | PR #299 · `983cef38c972ef1646166669613e680efba8f487` |
-| Post-merge | cycle 14 final validé · main CI `30759197858` SUCCESS · branches préservées · final status update local |
+| Post-merge | D2-A clôture validée (historique) · D2-B product merge `7084d2e9…` · main CI `30788690355` SUCCESS · Delivery D2-B préservée `dd63b208…` · frontières D2-C/D2-D/D3 inchangées |

 Le profil Standard est proportionné à un diff de fonctions de domaine pures,
 types readonly, constante statique et tests, sans resolver, infrastructure,
@@ -162,8 +162,10 @@ QualifyCycle. Aucun commit/push/PR projet, aucune promotion méthode.

 Le fingerprint doit être mis à jour explicitement si un champ contractuel D1
 change ; le test empêche une dérive silencieuse. `INHERITED-R-01` reste
-acceptée, traçable et non levée. D2-B dépend d'une intégration/validation
-ultérieure de D2-A et d'un gate Morris distinct.
+acceptée, traçable et non levée. D2-A est intégré et validé sur `main`.
+D2-B product est désormais aussi intégré sur `main` (PR #301) avec ses propres
+réserves MINOR R-QA-REV-01 / R-QA-REV-02 ouvertes et non levées. D2-C, D2-D et D3
+restent soumis à un gate Morris distinct.

 ## T. Readiness QA

@@ -297,7 +299,7 @@ Les quatre sont mineures/résiduelles et **non bloquantes** pour l’intégratio

 ### Z.5 Frontières

-- D2-B **fermé** ;
+- D2-B product **intégré `main`** (PR #301 · merge `7084d2e9…`) — réserves R-QA-REV-01/02 ouvertes ;
 - D2-C **fermé** ;
 - D2-D **gated** ;
 - D3 **fermé** ;

```

## Réserves

### R-QA-REV-01 MINOR — OPEN NOT LIFTED

`oa.ckc.resolution_started` / failure events may carry invalid `ts` when `resolvedAt` is invalid. No success/proof/`consumed=true`.

### R-QA-REV-02 MINOR — OPEN NOT LIFTED

Independent probes via temporary `vite-node` outside Vitest `__tests__/**`.

Neither reserve was lifted, closed, or reformulated as accepted.

## Frontières / non-actions

- D2-C closed · D2-D gated · D3 closed
- no code/tests/config/method/prompts changes
- no branch deletion · no force push · no admin · no squash/rebase/auto-merge
- single documentary commit · single terminal handoff
- PR #301 metadata untouched

## Git Truth final

```
branch=post-merge/sfia-studio-v3-1-d2-b-ckc-resolver
HEAD=deaed6f6fcd681a8f9bdd10114afda15f48904ec
origin/main=5ca7a2603b000a468f6baea81ffc6c53acf0cd70
origin/doc=deaed6f6fcd681a8f9bdd10114afda15f48904ec
origin/delivery=dd63b20828e33d96be7c686d9e793bab4c4845b6
?? .tmp-sfia-review/

```

## Verdict

V3.1-D2-B DOCUMENTARY CLOSURE ACCELERATED PUBLICATION PASS WITH RESERVES —
FOUR-FILE DOCUMENTARY PACKAGE COMMITTED AND PUSHED —
DRAFT PR CREATED, CI SUCCESSFUL AND MARKED READY —
MERGED BY MERGE COMMIT —
MAIN CI SUCCESSFUL —
FINAL DOCUMENTARY CONTENT VERIFIED ON MAIN —
R-QA-REV-01 AND R-QA-REV-02 REMAIN OPEN NOT LIFTED —
DOCUMENTARY AND DELIVERY BRANCHES PRESERVED —
NO AUTOMATIC NEXT CYCLE —
NO D2-C —
NO D2-D —
NO D3 —
NO METHOD PROMOTION
