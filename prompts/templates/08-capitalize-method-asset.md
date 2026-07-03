---
status: candidate
version: v1.1
type: prompt-template
family: Capitalization prompts
updated_after: SFIA prompt catalog v1.1
scope: capitalize method asset
---

# Capitalize Method Asset

**Version:** v1.1  
**Status:** Candidate template  
**Family:** Capitalization prompts  
**Scope:** Promote a validated asset into method capitalization

## 1. Purpose

Promote a validated cycle output into a reusable SFIA method asset (practice, checklist, template, prompt).

## 2. Use When

A cycle produced stable evidence and a reusable asset should be promoted.

## 3. Do Not Use When

Asset is draft, project-specific only, or lacks evidence.

## 4. Required Inputs

- <SOURCE_EVIDENCE>
- <ASSET_TYPE>
- <TARGET_METHOD_PATH>
- <MATURITY_LEVEL>
- <ROUTING_MATRIX_REF>

## 5. Guardrails

- No push without explicit human validation.
- No PR creation unless the template explicitly requests preparation only and human approval is obtained.
- No merge.
- No raw Notion sync.
- No Notion publication.
- No code change in documentation cycles.
- Protected paths must be declared and respected.
- Human validation remains required for significant decisions.
- Quality by evidence — promotion requires documented proof.

## 6. Full Prompt Template

```text
Objectif :
Capitaliser l'actif `<ASSET_TYPE>` vers `<TARGET_METHOD_PATH>`.

Repo :
<REPO_PATH>

Branche actuelle :
<BRANCH_NAME>

Dernier commit attendu :
<EXPECTED_COMMIT>

Contexte :
<CYCLE_CONTEXT>

Phase / contexte SFIA :
capitalization

Sources de référence :
- <SOURCE_EVIDENCE>
- method/sfia-fast-track/core/sfia-knowledge-layer.md
- docs/foundation/sfia-engineering-principles.md

Dossier cible :
<TARGET_FOLDER>

Type de capitalisation attendu :
<ASSET_TYPE> (method / practice / template / prompt / checklist)

Périmètre :
Identify asset type, route per Documentation Routing Matrix, create/update asset, update README/index and tracking docs.

Hors périmètre :
code, Notion sync, push, PR unless later validated.

Fichiers à lire :
<SOURCE_EVIDENCE> and routing references

Fichiers à modifier :
<TARGET_METHOD_PATH>, indexes, tracking docs

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
1. Verify evidence. 2. Confirm routing. 3. Create/update asset. 4. Update indexes. 5. Update tracking. 6. Commit.

Commandes de vérification :
git branch --show-current
git status --short
git log --oneline --decorate -20
git diff --stat
git diff --name-only

Commit attendu :
docs: capitalize SFIA <asset-object>

Résultat attendu :
Capitalized asset, updated indexes, commit, reserves if any.

Garde-fous :
Evidence required. No Notion sync. No push/PR by default. Protected paths respected.

```

## 7. Expected Outputs

- Method asset file
- Updated catalog/index
- Tracking update
- Commit

## 8. Validation

Capitalization checklist §14. Evidence and routing verified.

Use `method/sfia-fast-track/checklists/sfia-validation-checklist.md` before concluding.

## 9. Related References

- `prompts/prompt-catalog.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `docs/foundation/sfia-engineering-principles.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`

## 10. Notes

Maturity levels: Candidate → Tested → Validated.
