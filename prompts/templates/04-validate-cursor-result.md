---
status: candidate
version: v1.1
type: prompt-template
family: Validation prompts
updated_after: SFIA prompt catalog v1.1
scope: validate cursor result
---

# Validate Cursor Result

**Version:** v1.1  
**Status:** Candidate template  
**Family:** Validation prompts  
**Scope:** Validate a Cursor execution result

## 1. Purpose

Validate a Cursor execution result against the original prompt contract, diff, protected paths and SFIA validation criteria.

## 2. Use When

Cursor has produced an execution report and optionally a commit; validation is required before next step.

## 3. Do Not Use When

Execution has not yet occurred or validation is purely hypothetical.

## 4. Required Inputs

- <ORIGINAL_PROMPT>
- <CURSOR_REPORT>
- <COMMIT_HASH_OR_NONE>
- <FILES_MODIFIED>
- <DIFF_STAT>
- <VERIFICATION_OUTPUTS>

## 5. Guardrails

- No push without explicit human validation.
- No PR creation unless the template explicitly requests preparation only and human approval is obtained.
- No merge.
- No raw Notion sync.
- No Notion publication.
- No code change in documentation cycles.
- Protected paths must be declared and respected.
- Human validation remains required for significant decisions.
- Validation does not replace human decision.
- No commit by default in this template.

## 6. Full Prompt Template

```text
Objectif :
Valider le résultat Cursor du cycle `<CYCLE_NAME>` selon le contrat prompt et la checklist SFIA.

Repo :
<REPO_PATH>

Branche actuelle :
<BRANCH_NAME>

Dernier commit attendu :
<EXPECTED_COMMIT>

Contexte :
<CYCLE_CONTEXT>

Phase / contexte SFIA :
validation

Sources de référence :
- method/sfia-fast-track/checklists/sfia-validation-checklist.md
- method/sfia-fast-track/automation/sfia-validation-engine.md
- <ORIGINAL_PROMPT>

Dossier cible :
<TARGET_FOLDER>

Type de capitalisation attendu :
audit or none

Périmètre :
- analyser prompt initial vs retour Cursor ;
- vérifier diff, fichiers, chemins protégés ;
- classer réserves ;
- produire décision SFIA et prochaine étape.

Hors périmètre :
- modifier le repository sauf demande explicite ;
- push, PR, merge ;
- Notion sync.

Fichiers à lire :
Original prompt, Cursor report, diff outputs, validation checklist

Fichiers à modifier :
None by default

Fichiers interdits / chemins protégés :
Verify declared protected paths were not touched unless authorized.

Actions attendues :
1. Read original prompt and Cursor report. 2. Apply sfia-validation-checklist.md. 3. Classify reserves. 4. Produce structured validation report. 5. Propose next step.

Commandes de vérification :
Review provided:
- git diff --stat
- git diff --name-only
- verification command outputs from Cursor report

Commit attendu :
Aucun commit attendu par défaut.

Résultat attendu :
Structured validation report:
- Décision (GO / GO avec réserves / NO-GO / COMPLETE / INCOMPLETE)
- Niveau de conformité
- Réserves classées
- Actions correctives
- Prochaine étape

Garde-fous :
Read-only validation by default. No push. No PR. No merge. No Notion. Human decides.

```

## 7. Expected Outputs

- Validation report
- SFIA decision
- Classified reserves
- Next step recommendation

## 8. Validation

Apply full sfia-validation-checklist.md sections relevant to prompt, repository, diff, commit, protected paths.

Use `method/sfia-fast-track/checklists/sfia-validation-checklist.md` before concluding.

## 9. Related References

- `prompts/prompt-catalog.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `docs/foundation/sfia-engineering-principles.md`

## 10. Notes

This template is analysis-only unless explicitly extended to fix issues.
