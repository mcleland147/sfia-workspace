# SFIA Review Pack — FULL

## Métadonnées
- Date/heure/fuseau : 2026-07-27 13:56:53 CEST (+0200)
- Cycle : 13 — PR readiness (compléments 7 DevOps, 8 Delivery, 9 QA, 15 Capitalisation)
- Profil SFIA : Critical
- Typologie : PR documentaire bornée / formalisation finding de gouvernance
- Gate consommé : `GO OPEN PR FOR CLEAN F-A6-PM-G01 MITIGATED FORMALIZATION — SFIA STUDIO V3-NATIVE`
- Worktree : `/Users/morris/Projects/sfia-workspace-fa6-mitigated-clean`
- Branche : `docs/sfia-studio-fa6-mitigated-from-main`
- HEAD : `67f140a19cf4a992dbc0d7b053abfde579a9a68c`
- Parent : `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513`
- origin/main : `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513`
- Status Git : propre ; sync upstream ; staged/untracked vides ; ops Git aucune
- Handoff initial blob : `fa525f5cc91e68e59577b776b585b82b6996deb5`

## Sources / CKC
- Template v2.6 + handoff push validé
- CKC PR readiness : candidate ou absent — fallback template
- Limite respectée : aucun merge, modification de branche, scope élargi

## A. Compare distant
- merge-base : `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513`
- ahead/behind : `0 / 1`
- Commits :
```
> 67f140a docs(sfia-studio): formalize F-A6 as mitigated after M1
```
- Stat :
```
 .../24-ci-and-merge-governance-preparation.md      | 51 ++++++++++++++++++++--
 1 file changed, 47 insertions(+), 4 deletions(-)
```
- name-status : `M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md`
- GitHub compare :
```json
{"additions":47,"ahead_by":1,"behind_by":0,"commits":[{"message":"docs(sfia-studio): formalize F-A6 as mitigated after M1\n\nCo-authored-by: Cursor \u003ccursoragent@cursor.com\u003e","sha":"67f140a19cf4a992dbc0d7b053abfde579a9a68c"}],"deletions":4,"files":[{"additions":47,"deletions":4,"filename":"projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md","status":"modified"}],"files_count":1,"status":"ahead","total_commits":1}
```

### Diff complet (compare)
```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md
index 73dee62..f62ff9c 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md
@@ -286,10 +286,53 @@ Applicable aux futurs cycles SFIA Studio Option A (et réutilisable pour CI Stud

 ### Capitalisation F-A6-PM-G01

-| État | Qualification |
+| Champ | Valeur |
+|------|--------|
+| Statut | `MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED` |
+| CLOSED | **NON** |
+| Sévérité initiale | **Major** (gouvernance) — conservée |
+| Problème initial | Merge #267 sans review PR/CI formelle / CI absente — conservé |
+| Date/heure mitigation | 2026-07-27 11:35:05 CEST (+0200) — Europe/Paris |
+| Décision Morris | D-M1-02 — formalisation MITIGATED approuvée (`GO FORMALIZE F-A6-PM-G01 AS MITIGATED AFTER M1 — SFIA STUDIO V3-NATIVE`) |
+| Décision Morris négative | D-M1-03 — F-A6-PM-G01 **non CLOSED** |
+| M1 | techniquement et comportementalement COMPLETE (D-M1-01) |
+| Option A COMPLETE | **NON** (D-M1-05) |
+| T-A7 | **NON OUVERTE** (D-M1-06) |
+
+#### Critères historiques de clôture (conservés — non convertis en CLOSED)
+
+| État | Qualification historique (doc 24) |
 |------|----------------|
-| Mitigation | **préparée** (workflow + gouvernance documentée) |
-| Clos | **NON** — exige run GitHub prouvé + gouvernance appliquée sur PR réelle + (éventuellement) required checks appliqués sous GO Morris |
+| Mitigation | **préparée** (workflow + gouvernance documentée) — puis **appliquée et prouvée** (voir preuves ci-dessous) |
+| Clos | **NON** — exigeait run GitHub prouvé + gouvernance appliquée sur PR réelle + (éventuellement) required checks sous GO Morris ; la formalisation **CLOSED** reste une décision Morris séparée |
+
+#### Preuves factuelles de mitigation (M1)
+
+| Preuve | Référence |
+|--------|-----------|
+| P3 intégré sur `main` | PR #270 |
+| Workflow blob | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
+| Ruleset M1 actif | ID `19798462` — `SFIA Studio Main Required Gate — M1` — enforcement `active` — cible `refs/heads/main` |
+| Required check | `SFIA Studio Required Gate` — integration ID `15368` |
+| Preuve hors Studio PASS | PR #272 CLOSED non mergée — run `30248284607` |
+| Preuve Studio failure BLOCKED | PR #273 — run `30248328467` |
+| Preuve Studio recovery PASS | PR #273 — run `30248480927` |
+| PR de preuve fermées sans merge | #272 et #273 — `merged=false` |
+| Branches et worktrees de preuve | supprimés |
+| Preuves GitHub | runs, checks et logs conservés |
+| Bypass | non utilisé |
+
+#### Réserves conservées
+
+- finding **non CLOSED** ;
+- document 32 obsolète (correction sous gate séparé) ;
+- capitalisation / REX M1 encore requise (gate séparé) ;
+- rollback non testé ;
+- bypass non testé ;
+- F-CI-* inchangés ;
+- configuration M1 loose initiale (approvals 0 ; conversation resolution false ; up-to-date false) ;
+- Option A non COMPLETE ;
+- T-A7 non ouverte.

 ---

@@ -339,7 +382,7 @@ Ce cycle **n’a modifié aucun** ruleset / branch protection distant.

 | ID | Sévérité | Description | Action ce cycle |
 |----|----------|-------------|-----------------|
-| F-A6-PM-G01 | **Major** (gouvernance) | Merge #267 sans review PR/CI formelle / CI absente | Mitigation **préparée** · **non clos** |
+| F-A6-PM-G01 | **Major** (gouvernance) | Merge #267 sans review PR/CI formelle / CI absente | **MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED** (voir Capitalisation F-A6-PM-G01) |
 | F-CI-01 | **Observation** | Pin Node Studio absent ; CI candidate Node 20 = précédent Interv360 | Documenté · pas de modif `package.json` |
 | F-CI-02 | **Observation** | `npm audit` 12 high après `npm ci` | Hors périmètre · cycle deps séparé si Morris |
 | F-CI-03 | **Observation** | Validation locale Node 24 ≠ CI Node 20 | Limite explicite |
```

## B. Section F-A6 complète
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

## C. PR avant
- OPEN avec ce head/SHA : aucune

## D. Création PR
- Commande : `gh pr create --repo mcleland147/sfia-workspace --base main --head docs/sfia-studio-fa6-mitigated-from-main --title ... --body ...`
- PR_CREATE_EXIT=0
- stdout :
```
https://github.com/mcleland147/sfia-workspace/pull/274
```
- stderr : (vide)
- Numéro : #274
- URL : https://github.com/mcleland147/sfia-workspace/pull/274
- state : OPEN ; draft : False
- base : `main` / `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513`
- head : `docs/sfia-studio-fa6-mitigated-from-main` / `67f140a19cf4a992dbc0d7b053abfde579a9a68c`
- commits : 1 ; changed files : 1
- additions/deletions : 47 / 4
- mergeable : UNKNOWN ; mergeStateStatus : UNKNOWN
- autoMergeRequest : None
- titre : `docs(sfia-studio): formalize F-A6 as mitigated after M1`
- Corps relu : conforme au corps attendu (Objectif / Portée / Preuves M1 / Réserves / Validation / Anti-claims)

### Diff PR relu
```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md
index 73dee62d..f62ff9c3 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md
@@ -286,10 +286,53 @@ Applicable aux futurs cycles SFIA Studio Option A (et réutilisable pour CI Stud

 ### Capitalisation F-A6-PM-G01

-| État | Qualification |
+| Champ | Valeur |
+|------|--------|
+| Statut | `MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED` |
+| CLOSED | **NON** |
+| Sévérité initiale | **Major** (gouvernance) — conservée |
+| Problème initial | Merge #267 sans review PR/CI formelle / CI absente — conservé |
+| Date/heure mitigation | 2026-07-27 11:35:05 CEST (+0200) — Europe/Paris |
+| Décision Morris | D-M1-02 — formalisation MITIGATED approuvée (`GO FORMALIZE F-A6-PM-G01 AS MITIGATED AFTER M1 — SFIA STUDIO V3-NATIVE`) |
+| Décision Morris négative | D-M1-03 — F-A6-PM-G01 **non CLOSED** |
+| M1 | techniquement et comportementalement COMPLETE (D-M1-01) |
+| Option A COMPLETE | **NON** (D-M1-05) |
+| T-A7 | **NON OUVERTE** (D-M1-06) |
+
+#### Critères historiques de clôture (conservés — non convertis en CLOSED)
+
+| État | Qualification historique (doc 24) |
 |------|----------------|
-| Mitigation | **préparée** (workflow + gouvernance documentée) |
-| Clos | **NON** — exige run GitHub prouvé + gouvernance appliquée sur PR réelle + (éventuellement) required checks appliqués sous GO Morris |
+| Mitigation | **préparée** (workflow + gouvernance documentée) — puis **appliquée et prouvée** (voir preuves ci-dessous) |
+| Clos | **NON** — exigeait run GitHub prouvé + gouvernance appliquée sur PR réelle + (éventuellement) required checks sous GO Morris ; la formalisation **CLOSED** reste une décision Morris séparée |
+
+#### Preuves factuelles de mitigation (M1)
+
+| Preuve | Référence |
+|--------|-----------|
+| P3 intégré sur `main` | PR #270 |
+| Workflow blob | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
+| Ruleset M1 actif | ID `19798462` — `SFIA Studio Main Required Gate — M1` — enforcement `active` — cible `refs/heads/main` |
+| Required check | `SFIA Studio Required Gate` — integration ID `15368` |
+| Preuve hors Studio PASS | PR #272 CLOSED non mergée — run `30248284607` |
+| Preuve Studio failure BLOCKED | PR #273 — run `30248328467` |
+| Preuve Studio recovery PASS | PR #273 — run `30248480927` |
+| PR de preuve fermées sans merge | #272 et #273 — `merged=false` |
+| Branches et worktrees de preuve | supprimés |
+| Preuves GitHub | runs, checks et logs conservés |
+| Bypass | non utilisé |
+
+#### Réserves conservées
+
+- finding **non CLOSED** ;
+- document 32 obsolète (correction sous gate séparé) ;
+- capitalisation / REX M1 encore requise (gate séparé) ;
+- rollback non testé ;
+- bypass non testé ;
+- F-CI-* inchangés ;
+- configuration M1 loose initiale (approvals 0 ; conversation resolution false ; up-to-date false) ;
+- Option A non COMPLETE ;
+- T-A7 non ouverte.

 ---

@@ -339,7 +382,7 @@ Ce cycle **n’a modifié aucun** ruleset / branch protection distant.

 | ID | Sévérité | Description | Action ce cycle |
 |----|----------|-------------|-----------------|
-| F-A6-PM-G01 | **Major** (gouvernance) | Merge #267 sans review PR/CI formelle / CI absente | Mitigation **préparée** · **non clos** |
+| F-A6-PM-G01 | **Major** (gouvernance) | Merge #267 sans review PR/CI formelle / CI absente | **MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED** (voir Capitalisation F-A6-PM-G01) |
 | F-CI-01 | **Observation** | Pin Node Studio absent ; CI candidate Node 20 = précédent Interv360 | Documenté · pas de modif `package.json` |
 | F-CI-02 | **Observation** | `npm audit` 12 high après `npm ci` | Hors périmètre · cycle deps séparé si Morris |
 | F-CI-03 | **Observation** | Validation locale Node 24 ≠ CI Node 20 | Limite explicite |
```
- Égalité compare local / PR diff : True

## F. Checks
- Run ID : `30263815161`
- Workflow : `SFIA Studio CI`
- Event : `pull_request`
- Head SHA : `67f140a19cf4a992dbc0d7b053abfde579a9a68c`
- URL : https://github.com/mcleland147/sfia-workspace/actions/runs/30263815161
- Observation initiale : Detect SFIA Studio changes pending puis success
- Observation 2 : Build and validate SFIA Studio in_progress (studio_changed=true)
- Required Gate : NOT_YET_LISTED au moment de l’observation
- Qualification globale : **PENDING**
- Checks snapshot :
```
Build and validate SFIA Studio	pending	0	https://github.com/mcleland147/sfia-workspace/actions/runs/30263815161/job/89969708873
Detect SFIA Studio changes	pass	8s	https://github.com/mcleland147/sfia-workspace/actions/runs/30263815161/job/89969671952
```
- Run view :
```json
{"conclusion":"","databaseId":30263815161,"event":"pull_request","headSha":"67f140a19cf4a992dbc0d7b053abfde579a9a68c","jobs":[{"completedAt":"2026-07-27T11:55:57Z","conclusion":"success","databaseId":89969671952,"name":"Detect SFIA Studio changes","startedAt":"2026-07-27T11:55:49Z","status":"completed","steps":[{"completedAt":"2026-07-27T11:55:51Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-07-27T11:55:50Z","status":"completed"},{"completedAt":"2026-07-27T11:55:54Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-07-27T11:55:51Z","status":"completed"},{"completedAt":"2026-07-27T11:55:54Z","conclusion":"success","name":"Detect Studio scope","number":3,"startedAt":"2026-07-27T11:55:54Z","status":"completed"},{"completedAt":"2026-07-27T11:55:55Z","conclusion":"success","name":"Post Checkout","number":6,"startedAt":"2026-07-27T11:55:54Z","status":"completed"},{"completedAt":"2026-07-27T11:55:55Z","conclusion":"success","name":"Complete job","number":7,"startedAt":"2026-07-27T11:55:55Z","status":"completed"}],"url":"https://github.com/mcleland147/sfia-workspace/actions/runs/30263815161/job/89969671952"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":89969708873,"name":"Build and validate SFIA Studio","startedAt":"2026-07-27T11:56:00Z","status":"in_progress","steps":[{"completedAt":"2026-07-27T11:56:02Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-07-27T11:56:01Z","status":"completed"},{"completedAt":"2026-07-27T11:56:05Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-07-27T11:56:02Z","status":"completed"},{"completedAt":"2026-07-27T11:56:09Z","conclusion":"success","name":"Setup Node.js","number":3,"startedAt":"2026-07-27T11:56:05Z","status":"completed"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Install dependencies","number":4,"startedAt":"2026-07-27T11:56:09Z","status":"in_progress"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Typecheck","number":5,"startedAt":"0001-01-01T00:00:00Z","status":"pending"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Lint","number":6,"startedAt":"0001-01-01T00:00:00Z","status":"pending"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Build","number":7,"startedAt":"0001-01-01T00:00:00Z","status":"pending"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Unit tests (Vitest)","number":8,"startedAt":"0001-01-01T00:00:00Z","status":"pending"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Modeled governance tests","number":9,"startedAt":"0001-01-01T00:00:00Z","status":"pending"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Secret pattern scan (targeted)","number":10,"startedAt":"0001-01-01T00:00:00Z","status":"pending"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Trailing whitespace check","number":11,"startedAt":"0001-01-01T00:00:00Z","status":"pending"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Post Setup Node.js","number":21,"startedAt":"0001-01-01T00:00:00Z","status":"pending"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Post Checkout","number":22,"startedAt":"0001-01-01T00:00:00Z","status":"pending"}],"url":"https://github.com/mcleland147/sfia-workspace/actions/runs/30263815161/job/89969708873"}],"status":"in_progress","url":"https://github.com/mcleland147/sfia-workspace/actions/runs/30263815161","workflowName":"SFIA Studio CI"}
```

## État final
- Status local :
```
## docs/sfia-studio-fa6-mitigated-from-main...origin/docs/sfia-studio-fa6-mitigated-from-main
```
- origin/main : `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513`
- Workflow blob : `801a8759bb7440666799b95edf13f9ee6d9332f8`
- Ruleset : `{"enforcement":"active","id":19798462,"name":"SFIA Studio Main Required Gate — M1"}`
- Branche historique : `c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf`
- F-A6 : MITIGATED — NOT CLOSED
- F-CI-* / doc 32 / Option A COMPLETE / T-A7 : inchangés / NON / NON OUVERTE
- Merge : ABSENT

## Actions non exécutées
- nouveau commit / amend / rebase / merge local ou GitHub / auto-merge
- force push / modification branche / changement base-head
- CLOSED F-A6 ; F-CI ; doc 32 ; REX ; Option A COMPLETE ; T-A7 ; workflow/ruleset
- relance/annulation/correction des checks

## Réserves
- Checks encore PENDING — PR OPEN ≠ PR READY
- mergeable/mergeStateStatus encore UNKNOWN au moment de la création
- Required Gate pas encore listé dans les jobs au 2e snapshot

## Gates suivants candidats (NOT CONSUMED)
- `GO ASSESS PR READINESS FOR CLEAN F-A6-PM-G01 MITIGATED FORMALIZATION — SFIA STUDIO V3-NATIVE`
- `GO CORRECT OPTION A DOCUMENT 32 POST-P3 AND M1 — SFIA STUDIO V3-NATIVE`
- `GO CAPITALIZE OPTION A M1 IMPLEMENTATION AND PROOFS — SFIA STUDIO V3-NATIVE`

## Anti-claims
- PR ouverte ≠ PR READY
- PR ouverte ≠ merge
- checks pending ≠ success
- MITIGATED ≠ CLOSED
- M1 COMPLETE ≠ Option A COMPLETE
- handoff publié ≠ merge projet

## Verdict
`SFIA STUDIO V3-NATIVE CLEAN F-A6-PM-G01 MITIGATED FORMALIZATION PR OPENED — SINGLE-FILE DIFF VERIFIED — CHECKS PENDING — NOT MERGED — NOT CLOSED`

## Handoff Git
- décision : required
- mode : publish-in-cycle
- commit attendu : `docs(review-handoff): record clean F-A6 PR opening`
