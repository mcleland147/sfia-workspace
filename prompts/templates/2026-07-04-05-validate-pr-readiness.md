---
status: candidate
version: v1.1
type: prompt-template
family: Validation prompts
updated_after: SFIA prompt catalog v1.1
scope: validate pr readiness
---

# Validate PR Readiness

**Version:** v1.1  
**Status:** Candidate template  
**Family:** Validation prompts  
**Scope:** Assess whether a branch is ready for PR

## 1. Purpose

Assess whether a branch is ready for PR creation without creating the PR automatically.

## 2. Use When

One or more local commits exist and human wants PR readiness decision before opening PR.

## 3. Do Not Use When

PR already merged or no commits exist on the branch.

## 4. Required Inputs

- <REPO_PATH>
- <BRANCH_NAME>
- <BASE_COMMIT>
- <PR_SUMMARY_DRAFT>
- <RESERVES>

## 5. Guardrails

- No push without explicit human validation.
- No PR creation unless the template explicitly requests preparation only and human approval is obtained.
- No merge.
- No raw Notion sync.
- No Notion publication.
- No code change in documentation cycles.
- Protected paths must be declared and respected.
- Human validation remains required for significant decisions.
- Do not create PR automatically.
- READY FOR PR still requires human validation before PR creation.

## 6. Full Prompt Template

```text
Objectif :
Évaluer si la branche `<BRANCH_NAME>` est prête pour une PR.

Repo :
<REPO_PATH>

Branche actuelle :
<BRANCH_NAME>

Dernier commit attendu :
<EXPECTED_COMMIT>

Contexte :
<CYCLE_CONTEXT>

Phase / contexte SFIA :
PR readiness validation

Sources de référence :
- method/sfia-fast-track/checklists/sfia-validation-checklist.md (§12)
- docs/architecture/sfia-delivery-pipeline.md

Dossier cible :
<TARGET_FOLDER>

Type de capitalisation attendu :
none

Périmètre :
Validate branch, commits, diff, protected paths, docs, reserves, human validation plan.

Hors périmètre :
PR creation, push, merge, Notion sync.

Fichiers à lire :
Diff, commit log, tracking docs, validation checklist

Fichiers à modifier :
None

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
1. Verify branch and commits. 2. Review diff scope. 3. Check protected paths. 4. Verify controls executed. 5. Identify reserves. 6. Decide READY FOR PR / READY FOR PR WITH RESERVES / NOT READY FOR PR.

Commandes de vérification :
git branch --show-current
git log --oneline <BASE_COMMIT>..HEAD
git diff --stat <BASE_COMMIT>..HEAD
git diff --name-only <BASE_COMMIT>..HEAD

Commit attendu :
Aucun commit attendu.

Résultat attendu :
PR readiness decision with reserves and conditions for human PR creation.

Garde-fous :
No automatic PR. No push. No merge. No Notion sync. Human must approve PR creation.

```

## 7. Expected Outputs

- READY FOR PR / READY FOR PR WITH RESERVES / NOT READY FOR PR
- Reserve list
- Conditions before PR

## 8. Validation

Use validation checklist §12 PR readiness.

Use `method/sfia-fast-track/checklists/sfia-validation-checklist.md` before concluding.

## 9. Related References

- `prompts/prompt-catalog.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-delivery-pipeline.md`

## 10. Notes

Pair with 06-prepare-pr-summary.md when ready.
