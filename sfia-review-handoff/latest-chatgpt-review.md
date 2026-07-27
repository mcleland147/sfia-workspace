# SFIA Review Pack — Controlled M1 Bypass Behavior Test (FULL)

## Metadata
- date/heure/fuseau: 2026-07-27 19:46:28 CEST (+0200)
- cycle: 9 — QA / validation (+ 7 DevOps, 10 Sécurité, 12 RUN readiness, 14 Post-merge, 15 Capitalisation)
- profil SFIA: Critical
- typologie: QA / DEVOPS / GOVERNANCE / BYPASS / CONTROLLED FAILURE / REVERT
- gate consommé: `GO EXECUTE CONTROLLED M1 BYPASS BEHAVIOR TEST — SFIA STUDIO V3-NATIVE`
- repo: `mcleland147/sfia-workspace`
- worktrees:
  - probe: `/Users/morris/Projects/sfia-workspace-m1-bypass-probe`
  - revert: `/Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert`
- branches: `qa/sfia-studio-m1-bypass-probe`, `qa/sfia-studio-m1-bypass-probe-revert`, `sfia/review-handoff`
- main initial: `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13`
- handoff initial blob: `e5de7f960503de3f93b3d5d373c11b5d10ee09bb`

## 1. Status Git initial
- origin/main = `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13`
- ruleset actif, required check exact, bypass actor exact
- concurrent: 0 PR ouvertes, 0 CI queued/in_progress, aucune branche/PR probe préexistante

## 2. Ruleset initial complet
```json
{
  "id": 19798462,
  "name": "SFIA Studio Main Required Gate — M1",
  "target": "branch",
  "source_type": "Repository",
  "source": "mcleland147/sfia-workspace",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "exclude": [],
      "include": [
        "refs/heads/main"
      ]
    }
  },
  "rules": [
    {
      "type": "pull_request",
      "parameters": {
        "required_approving_review_count": 0,
        "dismiss_stale_reviews_on_push": false,
        "required_reviewers": [],
        "require_code_owner_review": false,
        "require_last_push_approval": false,
        "required_review_thread_resolution": false,
        "allowed_merge_methods": [
          "merge",
          "squash",
          "rebase"
        ]
      }
    },
    {
      "type": "required_status_checks",
      "parameters": {
        "strict_required_status_checks_policy": false,
        "do_not_enforce_on_create": false,
        "required_status_checks": [
          {
            "context": "SFIA Studio Required Gate",
            "integration_id": 15368
          }
        ]
      }
    },
    {
      "type": "non_fast_forward"
    },
    {
      "type": "deletion"
    }
  ],
  "node_id": "RRS_lACqUmVwb3NpdG9yec5MdiYIzgEuGb4",
  "created_at": "2026-07-27T09:31:28.759+02:00",
  "updated_at": "2026-07-27T19:27:23.150+02:00",
  "bypass_actors": [
    {
      "actor_id": 295557155,
      "actor_type": "User",
      "bypass_mode": "pull_request"
    }
  ],
  "current_user_can_bypass": "pull_requests_only",
  "_links": {
    "self": {
      "href": "https://api.github.com/repos/mcleland147/sfia-workspace/rulesets/19798462"
    },
    "html": {
      "href": "https://github.com/mcleland147/sfia-workspace/rules/19798462"
    }
  }
}
```
- `current_user_can_bypass` = `pull_requests_only`
- bypass actor user `295557155` mode `pull_request`

## 3. Plan de neutralisation (avant bypass)
```markdown
# Plan de neutralisation — M1 bypass probe (préparé AVANT bypass)

## Artefact
- path: `projects/sfia-studio/.m1-bypass-probe.txt`
- contenu: texte explicite probe temporaire + une ligne avec espace final volontaire
- échec CI attendu: uniquement `Trailing whitespace check` via `git diff --check BASE...HEAD`
- hors scope: TypeScript, lint, tests, secret scan, build, workflow, ruleset, docs 24/32/33

## Revert (immédiat après merge probe)
- branche: `qa/sfia-studio-m1-bypass-probe-revert`
- worktree: `/Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert`
- action: supprimer exclusivement `.m1-bypass-probe.txt`
- commit: `revert(sfia-studio): remove controlled M1 bypass probe`
- PR titre: `revert(sfia-studio): remove controlled M1 bypass probe`
- merge: squash NORMAL (sans bypass, sans --admin)
- validation: Detect/Build/Required Gate SUCCESS

## Commandes prévues
```bash
git fetch origin --prune
git worktree add -b qa/sfia-studio-m1-bypass-probe-revert \
  /Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert origin/main
cd /Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert
git rm projects/sfia-studio/.m1-bypass-probe.txt
git commit -m "revert(sfia-studio): remove controlled M1 bypass probe"
git push -u origin HEAD
gh pr create --base main --title "revert(sfia-studio): remove controlled M1 bypass probe" --body "..."
# wait CI success
gh pr merge <N> --squash --match-head-commit <SHA>   # NO --admin
```

## Stop / urgence
- si revert PR non créable: CRITICAL STOP, ne pas toucher ruleset, fournir état exact
- si CI revert échoue: CRITICAL STOP, main polluée temporairement
- durée max pollution: 15 minutes
- ne jamais utiliser --admin / désactivation ruleset pour "réparer"
```

## 4. Fichier probe (whitespace rendu explicitement)
Espaces rendus `·` :
```
1|TEMPORARY·M1·BYPASS·PROBE·—·DO·NOT·KEEP
2|This·file·is·an·inoffensive·controlled·governance·probe·artifact.
3|No·executable·code.·No·secrets.·No·product·data.
4|Gate:·GO·EXECUTE·CONTROLLED·M1·BYPASS·BEHAVIOR·TEST·—·SFIA·STUDIO·V3-NATIVE
5|INTENTIONAL_TRAILING_WHITESPACE_LINE·
6|End·of·probe·file.
```
- path: `projects/sfia-studio/.m1-bypass-probe.txt`
- bytes: 292
- local `git diff --cached --check` a détecté trailing whitespace ligne 5

## 5. Commit / push probe
- commit: `f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23`
- message: `qa(sfia-studio): add controlled M1 bypass probe`
- 1 fichier ajouté, 6 insertions
```
commit f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Mon Jul 27 19:36:55 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Mon Jul 27 19:36:55 2026 +0200

    qa(sfia-studio): add controlled M1 bypass probe

    Co-authored-by: Cursor <cursoragent@cursor.com>

A	projects/sfia-studio/.m1-bypass-probe.txt
```

## 6. PR probe #277
```json
{
  "additions": 6,
  "baseRefName": "main",
  "baseRefOid": "49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13",
  "body": "## Objectif\n\nDémontrer comportementalement le bypass explicite du ruleset M1 (`19798462`) sur une PR dont le required gate est volontairement en échec, puis neutraliser immédiatement l’artefact.\n\n## Gate Morris consommé\n\n`GO EXECUTE CONTROLLED M1 BYPASS BEHAVIOR TEST — SFIA STUDIO V3-NATIVE`\n\n## Artefact temporaire\n\n- `projects/sfia-studio/.m1-bypass-probe.txt`\n- texte inoffensif uniquement\n- une ligne avec trailing whitespace volontaire\n- aucun code produit, secret, workflow, ruleset, docs 24/32/33\n\n## Failure intentionnelle attendue\n\n- step `Trailing whitespace check` = failure\n- `SFIA Studio Required Gate` = failure\n- merge normal bloqué\n\n## Bypass\n\n- bypass explicite ruleset mode `pull_request` uniquement\n- **interdit** : `--admin`, désactivation ruleset, push direct sur main\n\n## Revert immédiat obligatoire\n\n- PR revert dédiée après merge probe\n- merge revert **normal** (sans bypass)\n- suppression exclusive de l’artefact\n\n## Gouvernance\n\n- F-A6 reste MITIGATED NOT CLOSED\n- Option A non COMPLETE\n- T-A7 non ouverte\n- D1–D7 NOT DECIDED\n- cette PR et son commit ne doivent pas être conservés fonctionnellement sur `main`\n\n## DO NOT KEEP\n\nCette PR est un probe de gouvernance contrôlé. Neutralisation obligatoire.\n\nMade with [Cursor](https://cursor.com)",
  "deletions": 0,
  "files": [
    {
      "path": "projects/sfia-studio/.m1-bypass-probe.txt",
      "additions": 6,
      "deletions": 0,
      "changeType": "ADDED"
    }
  ],
  "headRefName": "qa/sfia-studio-m1-bypass-probe",
  "headRefOid": "f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23",
  "isDraft": false,
  "mergeStateStatus": "BLOCKED",
  "mergeable": "MERGEABLE",
  "number": 277,
  "state": "OPEN",
  "title": "qa(sfia-studio): controlled M1 bypass probe — DO NOT KEEP",
  "url": "https://github.com/mcleland147/sfia-workspace/pull/277"
}
```

### Diff probe complet
```diff
diff --git a/projects/sfia-studio/.m1-bypass-probe.txt b/projects/sfia-studio/.m1-bypass-probe.txt
new file mode 100644
index 00000000..b234fa8b
--- /dev/null
+++ b/projects/sfia-studio/.m1-bypass-probe.txt
@@ -0,0 +1,6 @@
+TEMPORARY M1 BYPASS PROBE — DO NOT KEEP
+This file is an inoffensive controlled governance probe artifact.
+No executable code. No secrets. No product data.
+Gate: GO EXECUTE CONTROLLED M1 BYPASS BEHAVIOR TEST — SFIA STUDIO V3-NATIVE
+INTENTIONAL_TRAILING_WHITESPACE_LINE
+End of probe file.
```

## 7. CI probe (run 30290065655)
```json
{
  "databaseId": 30290065655,
  "workflowName": "SFIA Studio CI",
  "event": "pull_request",
  "headSha": "f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23",
  "status": "completed",
  "conclusion": "failure",
  "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30290065655"
}
```
### Jobs/steps
- Detect SFIA Studio changes | id=90057389766 | status=completed | conclusion=success
  - step: Set up job | status=completed | conclusion=success
  - step: Checkout | status=completed | conclusion=success
  - step: Detect Studio scope | status=completed | conclusion=success
  - step: Post Checkout | status=completed | conclusion=success
  - step: Complete job | status=completed | conclusion=success
- Build and validate SFIA Studio | id=90057428994 | status=completed | conclusion=failure
  - step: Set up job | status=completed | conclusion=success
  - step: Checkout | status=completed | conclusion=success
  - step: Setup Node.js | status=completed | conclusion=success
  - step: Install dependencies | status=completed | conclusion=success
  - step: Typecheck | status=completed | conclusion=success
  - step: Lint | status=completed | conclusion=success
  - step: Build | status=completed | conclusion=success
  - step: Unit tests (Vitest) | status=completed | conclusion=success
  - step: Modeled governance tests | status=completed | conclusion=success
  - step: Secret pattern scan (targeted) | status=completed | conclusion=success
  - step: Trailing whitespace check | status=completed | conclusion=failure
  - step: Post Setup Node.js | status=completed | conclusion=skipped
  - step: Post Checkout | status=completed | conclusion=success
  - step: Complete job | status=completed | conclusion=success
- SFIA Studio Required Gate | id=90057782135 | status=completed | conclusion=failure
  - step: Set up job | status=completed | conclusion=success
  - step: Aggregate required gate | status=completed | conclusion=failure
  - step: Complete job | status=completed | conclusion=success

Preuve déterministe:
- Detect SUCCESS
- Typecheck/Lint/Build/Vitest/Modeled/Secret SUCCESS
- **Trailing whitespace check FAILURE** (seul échec de validation)
- Required Gate FAILURE
- mergeStateStatus BLOCKED

Verdict étape: `M1 BYPASS PROBE BLOCKED NORMALLY — REQUIRED GATE FAILURE VERIFIED`

## 8. Preuve merge normal bloqué
- commande: `gh pr merge 277 --squash --match-head-commit f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23 ...` (sans `--admin`)
- exit: `NORMAL_MERGE_EXIT=1`
- stderr:
```
X Pull request mcleland147/sfia-workspace#277 is not mergeable: the base branch policy prohibits the merge.
To have the pull request merged after all the requirements have been met, add the `--auto` flag.
To use administrator privileges to immediately merge the pull request, add the `--admin` flag.
```
- GraphQL pré-bypass:
```json
{
  "data": {
    "repository": {
      "pullRequest": {
        "id": "PR_kwDOTHYmCM73C0jC",
        "mergeStateStatus": "BLOCKED",
        "viewerCanMergeAsAdmin": false,
        "mergeable": "MERGEABLE",
        "commits": {
          "nodes": [
            {
              "commit": {
                "oid": "f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23",
                "statusCheckRollup": {
                  "state": "FAILURE"
                }
              }
            }
          ]
        }
      }
    }
  }
}
```
- `viewerCanMergeAsAdmin` = `false`
- required checks state = `FAILURE`

## 9. Revalidation pré-bypass
- main toujours `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13`
- ruleset actif / bypass actor inchangé / `current_user_can_bypass=pull_requests_only`
- seule PR ouverte = #277
- plan revert prêt
- fenêtre: `2026-07-27 19:39:48 CEST (+0200)`

## 10. Bypass explicite
- mécanisme: **REST `PUT /repos/mcleland147/sfia-workspace/pulls/277/merge`** en tant qu’acteur bypass du ruleset `19798462` (mode `pull_request`)
- **absence de `--admin`** : confirmée (commande REST sans flag admin ; `gh pr merge --admin` non utilisé ; `viewerCanMergeAsAdmin=false`)
- distinction: `gh pr merge` normal refusé par branch policy ; REST merge réussi via capacité bypass ruleset
- payload:
```json
{
  "commit_title": "qa(sfia-studio): controlled M1 bypass probe — DO NOT KEEP",
  "commit_message": "Controlled M1 ruleset bypass probe under GO EXECUTE CONTROLLED M1 BYPASS BEHAVIOR TEST.\nRequired gate was intentionally failing (trailing whitespace).\nImmediate revert required. Do not keep.\nBypass mechanism: ruleset 19798462 bypass actor pull_request (NOT --admin).",
  "sha": "f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23",
  "merge_method": "squash"
}
```
- exit: `BYPASS_EXIT=0`
- stderr: `(empty)`
- réponse:
```json
{
  "sha": "17840f45f74bbae702bd1a18acb9723b149a6ea0",
  "merged": true,
  "message": "Pull Request successfully merged"
}
```
- merge probe SHA: `17840f45f74bbae702bd1a18acb9723b149a6ea0`
- mergedAt: `2026-07-27T17:40:01Z` by `mcleland147`
- verdict: `M1 RULESET BYPASS BEHAVIOR VERIFIED — FAILED REQUIRED GATE OVERRIDDEN EXPLICITLY`

## 11. Main pollué (fenêtre temporaire)
- main pollué: `17840f45f74bbae702bd1a18acb9723b149a6ea0`
- CI push/main pendant pollution (attendu failure whitespace): run `30290261912` conclusion `failure`
- durée pollution: **173 secondes** (< 900)

## 12. Revert immédiat
- branche: `qa/sfia-studio-m1-bypass-probe-revert`
- worktree: `/Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert`
- commit: `b502c0069f836a729090bdc187dd98a0c26591ca` `revert(sfia-studio): remove controlled M1 bypass probe`
```
commit b502c0069f836a729090bdc187dd98a0c26591ca
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Mon Jul 27 19:40:15 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Mon Jul 27 19:40:15 2026 +0200

    revert(sfia-studio): remove controlled M1 bypass probe

    Co-authored-by: Cursor <cursoragent@cursor.com>

D	projects/sfia-studio/.m1-bypass-probe.txt
```
- PR revert #278
```json
{
  "additions": 0,
  "baseRefName": "main",
  "baseRefOid": "17840f45f74bbae702bd1a18acb9723b149a6ea0",
  "body": "## Objectif\n\nNeutraliser complètement l’artefact du probe de bypass M1.\n\n## Références\n\n- PR probe: #277\n- head probe: `f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23`\n- merge probe (bypass): `17840f45f74bbae702bd1a18acb9723b149a6ea0`\n- mécanisme: REST merge as ruleset bypass actor (`pull_request`) — **sans** `--admin`\n\n## Neutralisation\n\n- suppression exclusive de `projects/sfia-studio/.m1-bypass-probe.txt`\n- 1 fichier\n- required gate normal exigé\n- **aucun bypass autorisé** sur cette PR de revert\n- **aucun** `--admin`\n- aucune suppression automatique de branche\n\n## Gouvernance\n\n- F-A6 reste MITIGATED NOT CLOSED\n- Option A non COMPLETE\n- T-A7 non ouverte\n\nMade with [Cursor](https://cursor.com)",
  "deletions": 6,
  "files": [
    {
      "path": "projects/sfia-studio/.m1-bypass-probe.txt",
      "additions": 0,
      "deletions": 6,
      "changeType": "DELETED"
    }
  ],
  "headRefName": "qa/sfia-studio-m1-bypass-probe-revert",
  "headRefOid": "b502c0069f836a729090bdc187dd98a0c26591ca",
  "isDraft": false,
  "number": 278,
  "state": "OPEN",
  "title": "revert(sfia-studio): remove controlled M1 bypass probe",
  "url": "https://github.com/mcleland147/sfia-workspace/pull/278"
}
```

### Diff revert
```diff
diff --git a/projects/sfia-studio/.m1-bypass-probe.txt b/projects/sfia-studio/.m1-bypass-probe.txt
deleted file mode 100644
index b234fa8b..00000000
--- a/projects/sfia-studio/.m1-bypass-probe.txt
+++ /dev/null
@@ -1,6 +0,0 @@
-TEMPORARY M1 BYPASS PROBE — DO NOT KEEP
-This file is an inoffensive controlled governance probe artifact.
-No executable code. No secrets. No product data.
-Gate: GO EXECUTE CONTROLLED M1 BYPASS BEHAVIOR TEST — SFIA STUDIO V3-NATIVE
-INTENTIONAL_TRAILING_WHITESPACE_LINE
-End of probe file.
```

## 13. CI revert (run 30290283916)
```json
{
  "databaseId": 30290283916,
  "workflowName": "SFIA Studio CI",
  "event": "pull_request",
  "headSha": "b502c0069f836a729090bdc187dd98a0c26591ca",
  "status": "completed",
  "conclusion": "success",
  "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30290283916"
}
```
### Jobs/steps
- Detect SFIA Studio changes | id=90058118812 | status=completed | conclusion=success
  - step: Set up job | status=completed | conclusion=success
  - step: Checkout | status=completed | conclusion=success
  - step: Detect Studio scope | status=completed | conclusion=success
  - step: Post Checkout | status=completed | conclusion=success
  - step: Complete job | status=completed | conclusion=success
- Build and validate SFIA Studio | id=90058182419 | status=completed | conclusion=success
  - step: Set up job | status=completed | conclusion=success
  - step: Checkout | status=completed | conclusion=success
  - step: Setup Node.js | status=completed | conclusion=success
  - step: Install dependencies | status=completed | conclusion=success
  - step: Typecheck | status=completed | conclusion=success
  - step: Lint | status=completed | conclusion=success
  - step: Build | status=completed | conclusion=success
  - step: Unit tests (Vitest) | status=completed | conclusion=success
  - step: Modeled governance tests | status=completed | conclusion=success
  - step: Secret pattern scan (targeted) | status=completed | conclusion=success
  - step: Trailing whitespace check | status=completed | conclusion=success
  - step: Post Setup Node.js | status=completed | conclusion=success
  - step: Post Checkout | status=completed | conclusion=success
  - step: Complete job | status=completed | conclusion=success
- SFIA Studio Required Gate | id=90058571305 | status=completed | conclusion=success
  - step: Set up job | status=completed | conclusion=success
  - step: Aggregate required gate | status=completed | conclusion=success
  - step: Complete job | status=completed | conclusion=success
- mergeState CLEAN / MERGEABLE
- merge squash **normal** (sans bypass, sans `--admin`)
- commande: `gh pr merge 278 --squash --match-head-commit b502c0069f836a729090bdc187dd98a0c26591ca`
- exit: `REVERT_MERGE_EXIT=0`
- merge revert SHA: `df9d9c6e688be367f54aa9376e67543eab80533a`
- mergedAt: `2026-07-27T17:42:54Z`

## 14. CI post-revert push/main
- état: `SUCCESS`
```json
{
  "databaseId": 30290479092,
  "workflowName": "SFIA Studio CI",
  "event": "push",
  "headSha": "df9d9c6e688be367f54aa9376e67543eab80533a",
  "status": "completed",
  "conclusion": "success",
  "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30290479092"
}
```
### Jobs/steps
- Detect SFIA Studio changes | id=90058766113 | status=completed | conclusion=success
  - step: Set up job | status=completed | conclusion=success
  - step: Checkout | status=completed | conclusion=success
  - step: Detect Studio scope | status=completed | conclusion=success
  - step: Post Checkout | status=completed | conclusion=success
  - step: Complete job | status=completed | conclusion=success
- Build and validate SFIA Studio | id=90058836535 | status=completed | conclusion=success
  - step: Set up job | status=completed | conclusion=success
  - step: Checkout | status=completed | conclusion=success
  - step: Setup Node.js | status=completed | conclusion=success
  - step: Install dependencies | status=completed | conclusion=success
  - step: Typecheck | status=completed | conclusion=success
  - step: Lint | status=completed | conclusion=success
  - step: Build | status=completed | conclusion=success
  - step: Unit tests (Vitest) | status=completed | conclusion=success
  - step: Modeled governance tests | status=completed | conclusion=success
  - step: Secret pattern scan (targeted) | status=completed | conclusion=success
  - step: Trailing whitespace check | status=completed | conclusion=success
  - step: Post Setup Node.js | status=completed | conclusion=success
  - step: Post Checkout | status=completed | conclusion=success
  - step: Complete job | status=completed | conclusion=success
- SFIA Studio Required Gate | id=90059202821 | status=completed | conclusion=success
  - step: Set up job | status=completed | conclusion=success
  - step: Aggregate required gate | status=completed | conclusion=success
  - step: Complete job | status=completed | conclusion=success

## 15. Validation finale main
- main final: `df9d9c6e688be367f54aa9376e67543eab80533a`
- probe merge ancêtre: oui
- revert merge = HEAD main: oui
- fichier probe: **ABSENT**
- diff net `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13`…`origin/main`: **VIDE**
```
(empty)
```
- document 33 blob: `6c87cf4016d6a33f096df921acf8bafd4d73af4e` inchangé
- ruleset final:
```json
{
  "id": 19798462,
  "name": "SFIA Studio Main Required Gate — M1",
  "target": "branch",
  "source_type": "Repository",
  "source": "mcleland147/sfia-workspace",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "exclude": [],
      "include": [
        "refs/heads/main"
      ]
    }
  },
  "rules": [
    {
      "type": "pull_request",
      "parameters": {
        "required_approving_review_count": 0,
        "dismiss_stale_reviews_on_push": false,
        "required_reviewers": [],
        "require_code_owner_review": false,
        "require_last_push_approval": false,
        "required_review_thread_resolution": false,
        "allowed_merge_methods": [
          "merge",
          "squash",
          "rebase"
        ]
      }
    },
    {
      "type": "required_status_checks",
      "parameters": {
        "strict_required_status_checks_policy": false,
        "do_not_enforce_on_create": false,
        "required_status_checks": [
          {
            "context": "SFIA Studio Required Gate",
            "integration_id": 15368
          }
        ]
      }
    },
    {
      "type": "non_fast_forward"
    },
    {
      "type": "deletion"
    }
  ],
  "node_id": "RRS_lACqUmVwb3NpdG9yec5MdiYIzgEuGb4",
  "created_at": "2026-07-27T09:31:28.759+02:00",
  "updated_at": "2026-07-27T19:27:23.150+02:00",
  "bypass_actors": [
    {
      "actor_id": 295557155,
      "actor_type": "User",
      "bypass_mode": "pull_request"
    }
  ],
  "current_user_can_bypass": "pull_requests_only",
  "_links": {
    "self": {
      "href": "https://api.github.com/repos/mcleland147/sfia-workspace/rulesets/19798462"
    },
    "html": {
      "href": "https://github.com/mcleland147/sfia-workspace/rules/19798462"
    }
  }
}
```
- comparaison configurable initial/final: **identique** (meta diffs: [])

## 16. Branches / worktrees conservés
```
f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23	refs/heads/qa/sfia-studio-m1-bypass-probe
b502c0069f836a729090bdc187dd98a0c26591ca	refs/heads/qa/sfia-studio-m1-bypass-probe-revert
```
- worktrees probe + revert présents
- aucune suppression

## 17. Qualification
- `BYPASS TEST PASSED` : required gate rouge + merge normal bloqué + bypass explicite identifiable (REST as ruleset bypass actor, not `--admin`) + merge probe + revert normal + main net + ruleset inchangé

## 18. Gouvernance
- rollback (cycle précédent) = testé avec succès
- bypass = **testé comportementalement avec succès**
- F-A6 = MITIGATED — NOT CLOSED
- Option A = non COMPLETE
- T-A7 = non ouverte
- D1–D7 = NOT DECIDED
- configuration M1 loose inchangée
- bypass testé ≠ recommandé comme méthode normale

## 19. Anti-claims
- bypass testé ≠ F-A6 CLOSED
- bypass testé ≠ Option A COMPLETE
- bypass testé ≠ T-A7 OPEN
- revert réussi ≠ absence de trace Git (probe+revert restent dans l’historique)
- main net ≠ autorisation cleanup branches/worktrees

## 20. Décisions Morris non prises
- clôture F-A6
- durcissement ruleset
- cleanup branches/worktrees
- ouverture T-A7
- D1–D7

## 21. Actions non exécutées
- `gh pr merge --admin`
- désactivation/mutation ruleset
- modification workflow / docs 24/32/33 / code produit
- push direct main / force push / amend / rebase / auto-merge
- suppression branches/worktrees
- Notion/CMP

## 22. Gates candidats (NOT CONSUMED)
- réévaluation F-A6
- décision de durcissement du ruleset
- cleanup branches/worktrees
- ouverture T-A7 après clôture de la séquence prudente

## 23. Verdict
`SFIA STUDIO M1 CONTROLLED BYPASS BEHAVIOR TEST PASSED — FAILED REQUIRED GATE BLOCKED NORMAL MERGE AND WAS EXPLICITLY BYPASSED — PROBE MERGED THEN FULLY REVERTED — MAIN NET STATE RESTORED — RULESET 19798462 UNCHANGED — F-A6 MITIGATED NOT CLOSED — OPTION A NOT COMPLETE — T-A7 NOT OPEN`

## Review Handoff Git
- commit attendu: `docs(review-handoff): record controlled M1 bypass test`
