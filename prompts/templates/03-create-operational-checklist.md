---
status: candidate
version: v1.1
type: prompt-template
family: Documentation creation prompts
updated_after: SFIA prompt catalog v1.1
scope: create operational checklist
---

# Create Operational Checklist

**Version:** v1.1  
**Status:** Candidate template  
**Family:** Documentation creation prompts  
**Scope:** Create an operational checklist from a specification

## 1. Purpose

Transform a SFIA engine spec or method document into an operational checklist with checkboxes and validation criteria.

## 2. Use When

A specification exists and needs a practical checklist for cycle validation (engine spec, method, guardrails).

## 3. Do Not Use When

No underlying specification exists or the deliverable is not checklist-shaped.

## 4. Required Inputs

- <REPO_PATH>
- <BRANCH_NAME>
- <EXPECTED_COMMIT>
- <SOURCE_SPEC>
- <TARGET_CHECKLIST>
- <CHECKLIST_OBJECT>

## 5. Guardrails

- No push without explicit human validation.
- No PR creation unless the template explicitly requests preparation only and human approval is obtained.
- No merge.
- No raw Notion sync.
- No Notion publication.
- No code change in documentation cycles.
- Protected paths must be declared and respected.
- Human validation remains required for significant decisions.
- Checklist does not replace human validation.
- Distinguish doctrine (spec) from operational tool (checklist).

## 6. Full Prompt Template

```text
Objectif :
Créer la checklist opérationnelle `<TARGET_CHECKLIST>` à partir de `<SOURCE_SPEC>`.

Repo :
<REPO_PATH>

Branche actuelle :
<BRANCH_NAME>

Dernier commit attendu :
<EXPECTED_COMMIT>

Contexte :
<CYCLE_CONTEXT>

Phase / contexte SFIA :
method capitalization / operational tooling

Sources de référence :
- <SOURCE_SPEC>
- docs/foundation/sfia-engineering-principles.md
- method/sfia-fast-track/checklists/sfia-validation-checklist.md (reference pattern)

Dossier cible :
<TARGET_FOLDER>

Type de capitalisation attendu :
checklist

Périmètre :
- lire la spec source ;
- dériver sections avec cases à cocher ;
- inclure décisions possibles et anti-patterns ;
- mettre à jour method/sfia-fast-track/checklists/README.md si applicable.

Hors périmètre :
code, push, PR, Notion sync, autonomous automation claims.

Fichiers à lire :
<SOURCE_SPEC> and related references

Fichiers à modifier :
<TARGET_CHECKLIST> and checklists README if applicable

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
1. Verify git state. 2. Read source spec. 3. Create checklist. 4. Update README. 5. Verify diff. 6. Commit.

Commandes de vérification :
git branch --show-current
git status --short
git log --oneline --decorate -20
git diff --stat
git diff --name-only

Commit attendu :
docs: add SFIA <checklist-object> checklist

Résultat attendu :
Checklist created, README updated, commit hash, no push/PR.

Garde-fous :
Standard SFIA guardrails: no Notion sync, no push, no PR, no merge, no code, protected paths, human validation.

```

## 7. Expected Outputs

- Operational checklist file
- Updated checklists README
- Commit

## 8. Validation

COMPLETE / INCOMPLETE. Verify checklist derives from spec and includes validation section.

Use `method/sfia-fast-track/checklists/sfia-validation-checklist.md` before concluding.

## 9. Related References

- `prompts/prompt-catalog.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `docs/foundation/sfia-engineering-principles.md`
- `method/sfia-fast-track/checklists/README.md`

## 10. Notes

Follow structure of sfia-validation-checklist.md as reference pattern.
