---
status: candidate
version: v1.1
type: prompt-template
family: PR and post-merge prompts
updated_after: SFIA prompt catalog v1.1
scope: write post-merge status
---

# Write Post-Merge Status

**Version:** v1.1  
**Status:** Candidate template  
**Family:** PR and post-merge prompts  
**Scope:** Document post-merge closure

## 1. Purpose

Document post-merge closure for a significant PR with reserves, guardrails and next steps.

## 2. Use When

A significant PR was merged and closure trace is required.

## 3. Do Not Use When

No merge occurred or PR was trivial with no trace requirement.

## 4. Required Inputs

- <PR_NUMBER>
- <SOURCE_BRANCH>
- <TARGET_BRANCH>
- <MERGE_COMMIT>
- <RESERVES>
- <TARGET_POST_MERGE_FILE>

## 5. Guardrails

- No push without explicit human validation.
- No PR creation unless the template explicitly requests preparation only and human approval is obtained.
- No merge.
- No raw Notion sync.
- No Notion publication.
- No code change in documentation cycles.
- Protected paths must be declared and respected.
- Human validation remains required for significant decisions.

## 6. Full Prompt Template

```text
Objectif :
Rédiger le post-merge status pour PR #<PR_NUMBER>.

Repo :
<REPO_PATH>

Branche actuelle :
<BRANCH_NAME>

Dernier commit attendu :
<EXPECTED_COMMIT>

Contexte :
<CYCLE_CONTEXT>

Phase / contexte SFIA :
post-merge closure

Sources de référence :
PR summary, merge commit, validation reserves, delivery pipeline

Dossier cible :
<TARGET_FOLDER>

Type de capitalisation attendu :
post-merge status / audit

Périmètre :
Create post-merge document with PR, branches, merge commit, decision, reserves, guardrails, capitalized elements, next step.

Hors périmètre :
code changes beyond post-merge doc, push (unless commit locally requested), Notion sync.

Fichiers à lire :
PR materials, merge info

Fichiers à modifier :
<TARGET_POST_MERGE_FILE>

Fichiers interdits / chemins protégés :
- <PROTECTED_PATHS>
  (declare project-specific protected paths for this cycle; use generic SFIA categories plus project paths)
- Example project paths only — not universal:
  - projects/<project>/app/
  - projects/<project>/backend/
  - .github/workflows/
  - tools/<sensitive-tool>/
  - projects/<project>/03-design/exports/

Actions attendues :
1. Gather PR and merge metadata. 2. Document decision and reserves. 3. List capitalized elements. 4. Write post-merge status. 5. Commit if requested.

Commandes de vérification :
git branch --show-current
git status --short
git log --oneline --decorate -20
git diff --stat
git diff --name-only

Commit attendu :
docs: record SFIA <cycle-object> post-merge status

Résultat attendu :
Post-merge status document, commit hash, no push unless explicitly requested later.

Garde-fous :
No Notion sync. No automatic publication. Protected paths respected.

```

## 7. Expected Outputs

- Post-merge status document
- Commit

## 8. Validation

POST-MERGE COMPLETE / COMPLETE WITH RESERVES / INCOMPLETE per validation checklist §13.

Use `method/sfia-fast-track/checklists/sfia-validation-checklist.md` before concluding.

## 9. Related References

- `prompts/prompt-catalog.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `docs/foundation/sfia-engineering-principles.md`
- `method/sfia-fast-track/templates/post-merge-template.md`
- `docs/architecture/sfia-delivery-pipeline.md`

## 10. Notes

Significant PRs are not fully closed without this trace.
