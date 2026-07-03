---
status: candidate
version: v1.1
type: prompt-template
family: PR and post-merge prompts
updated_after: SFIA prompt catalog v1.1
scope: prepare pr summary
---

# Prepare PR Summary

**Version:** v1.1  
**Status:** Candidate template  
**Family:** PR and post-merge prompts  
**Scope:** Prepare a structured PR summary

## 1. Purpose

Prepare structured PR title and body text for human review before PR creation.

## 2. Use When

PR readiness is validated or near-validated and a PR summary is needed.

## 3. Do Not Use When

Branch is not ready or PR should not be opened.

## 4. Required Inputs

- <REPO_PATH>
- <BRANCH_NAME>
- <BASE_BRANCH>
- <COMMITS>
- <DIFF_SUMMARY>
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
- Template prepares text only — does not create PR.

## 6. Full Prompt Template

```text
Objectif :
Préparer le résumé PR structuré pour la branche `<BRANCH_NAME>`.

Repo :
<REPO_PATH>

Branche actuelle :
<BRANCH_NAME>

Dernier commit attendu :
<EXPECTED_COMMIT>

Contexte :
<CYCLE_CONTEXT>

Phase / contexte SFIA :
PR preparation

Sources de référence :
Diff, commits, validation results, sfia-delivery-pipeline.md

Dossier cible :
<TARGET_FOLDER>

Type de capitalisation attendu :
none

Périmètre :
Produce PR title, summary, files changed, validation performed, risks/reserves, guardrails, next step.

Hors périmètre :
PR creation, push, merge, Notion sync.

Fichiers à lire :
Diff and validation artifacts

Fichiers à modifier :
Optional: save summary to <TARGET_FOLDER>/pr-summary.md if requested

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
1. Gather diff and commit info. 2. Summarize changes. 3. List validation performed. 4. Document reserves. 5. Output PR summary markdown. 6. Do NOT create PR.

Commandes de vérification :
git log, git diff --stat

Commit attendu :
Optional: docs: prepare SFIA <cycle-object> PR summary — only if saving summary file.

Résultat attendu :
PR summary containing:
- Title
- Summary
- Files changed
- Validation performed
- Risks / reserves
- Notion / automation guardrails
- Next step
Explicit: PR not created.

Garde-fous :
No PR creation. No push. No merge. No Notion sync.

```

## 7. Expected Outputs

- PR summary text (markdown)
- Optional saved summary file

## 8. Validation

Human reviews summary before PR creation.

Use `method/sfia-fast-track/checklists/sfia-validation-checklist.md` before concluding.

## 9. Related References

- `prompts/prompt-catalog.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `docs/foundation/sfia-engineering-principles.md`
- `method/sfia-fast-track/templates/pr-body-template.md`

## 10. Notes

Use method/sfia-fast-track/templates/pr-body-template.md as additional reference if available.
