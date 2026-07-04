---
status: candidate
version: v1.1
type: prompt-template
family: Repository execution prompts
updated_after: SFIA prompt catalog v1.1
scope: perform safe repository cleanup
---

# Perform Safe Repository Cleanup

**Version:** v1.1  
**Status:** Candidate template  
**Family:** Repository execution prompts  
**Scope:** Perform safe repository cleanup

## 1. Purpose

Safely clean up or restructure repository content using git mv, audits and protected path checks.

## 2. Use When

Files need reorganization, duplicate cleanup, or index updates without brutal deletion.

## 3. Do Not Use When

Changes are purely content edits with no moves or the scope is too broad.

## 4. Required Inputs

- <REPO_PATH>
- <BRANCH_NAME>
- <EXPECTED_COMMIT>
- <CLEANUP_SCOPE>
- <FILES_TO_MOVE>
- <INDEX_UPDATES>

## 5. Guardrails

- No push without explicit human validation.
- No PR creation unless the template explicitly requests preparation only and human approval is obtained.
- No merge.
- No raw Notion sync.
- No Notion publication.
- No code change in documentation cycles.
- Protected paths must be declared and respected.
- Human validation remains required for significant decisions.
- Use git mv for moves.
- No brutal deletion without justification.
- Audit before action.

## 6. Full Prompt Template

```text
Objectif :
Effectuer un cleanup repository sécurisé : `<CLEANUP_SCOPE>`.

Repo :
<REPO_PATH>

Branche actuelle :
<BRANCH_NAME>

Dernier commit attendu :
<EXPECTED_COMMIT>

Contexte :
<CYCLE_CONTEXT>

Phase / contexte SFIA :
repository cleanup

Sources de référence :
- docs/architecture/sfia-repository-blueprint.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md

Dossier cible :
<TARGET_FOLDER>

Type de capitalisation attendu :
audit / cleanup report

Périmètre :
Audit before action; move files with git mv; update indexes; verify protected paths and untracked files; no brutal deletion.

Hors périmètre :
code changes, app/backend/CI paths, Notion sync, brutal rm -rf.

Fichiers à lire :
Repository blueprint, rules, files in cleanup scope

Fichiers à modifier :
<FILES_TO_MOVE>, <INDEX_UPDATES>

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
1. Pre-cycle audit: git status, branch, commit. 2. List moves planned. 3. Use git mv only. 4. Update indexes. 5. Verify no protected paths touched. 6. Review untracked files. 7. Diff review. 8. Commit. 9. Cleanup report with reserves.

Commandes de vérification :
git branch --show-current
git status --short
git log --oneline --decorate -20
git diff --stat
git diff --name-only
git status --short  # verify untracked expected files not added

Commit attendu :
docs: clean up SFIA <cleanup-scope>

Résultat attendu :
Cleanup report, files moved, diff summary, reserves, commit, no push/PR.

Garde-fous :
git mv only. No brutal delete. No protected paths. No Notion sync. No push/PR. Human validation.

```

## 7. Expected Outputs

- Cleanup report
- Moved files via git mv
- Updated indexes
- Commit

## 8. Validation

Repository execution + protected paths + diff validation per checklist.

Use `method/sfia-fast-track/checklists/sfia-validation-checklist.md` before concluding.

## 9. Related References

- `prompts/prompt-catalog.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/sfia-repository-blueprint.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

## 10. Notes

If doubt on a move, classify reserve and request human arbitration.
