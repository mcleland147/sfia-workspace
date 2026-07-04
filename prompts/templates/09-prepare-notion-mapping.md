---
status: candidate
version: v1.1
type: prompt-template
family: Notion preparation prompts
updated_after: SFIA prompt catalog v1.1
scope: prepare notion mapping
---

# Prepare Notion Mapping

**Version:** v1.1  
**Status:** Candidate template  
**Family:** Notion preparation prompts  
**Scope:** Prepare Notion mapping without publication

## 1. Purpose

Prepare Notion content mapping from repository sources without sync or publication.

## 2. Use When

Future Notion publication may be planned and mapping must be defined first.

## 3. Do Not Use When

Raw sync is requested or mapping sources are insufficient.

## 4. Required Inputs

- <REPO_SOURCES>
- <MAPPING_TARGET>
- <PUBLISHABLE_DOCS>
- <INTERNAL_EXCLUDE_LIST>

## 5. Guardrails

- No push without explicit human validation.
- No PR creation unless the template explicitly requests preparation only and human approval is obtained.
- No merge.
- No raw Notion sync.
- No Notion publication.
- No code change in documentation cycles.
- Protected paths must be declared and respected.
- Human validation remains required for significant decisions.
- Do NOT run raw Notion sync.
- Do NOT publish to Notion.
- Do NOT modify tools/cmp-001/.
- Do NOT regenerate CMP JSON payloads.

## 6. Full Prompt Template

```text
Objectif :
Préparer le mapping Notion pour `<MAPPING_TARGET>` sans publication.

Repo :
<REPO_PATH>

Branche actuelle :
<BRANCH_NAME>

Dernier commit attendu :
<EXPECTED_COMMIT>

Contexte :
<CYCLE_CONTEXT>

Phase / contexte SFIA :
Notion preparation

Sources de référence :
- method/sfia-fast-track/core/sfia-knowledge-layer.md
- <REPO_SOURCES>

Dossier cible :
<TARGET_FOLDER>

Type de capitalisation attendu :
Notion mapping document

Périmètre :
Define repository sources, publishable vs internal docs, target Notion structure, editorialization rules, dry-run plan, human validation requirement.

Hors périmètre :
Notion sync, Notion publish, CMP payload regeneration, tools/cmp-001 execution.

Fichiers à lire :
<REPO_SOURCES>, knowledge layer, notion plans if any

Fichiers à modifier :
<MAPPING_OUTPUT_FILE>

Fichiers interdits / chemins protégés :
- <PROTECTED_PATHS>
  (declare project-specific protected paths for this cycle; use generic SFIA categories plus project paths)
- Example project paths only — not universal:
  - projects/<project>/app/
  - projects/<project>/backend/
  - .github/workflows/
  - tools/<sensitive-tool>/
  - projects/<project>/03-design/exports/
- tools/cmp-001/ (strictly forbidden)

Actions attendues :
1. Inventory sources. 2. Classify publishable vs internal. 3. Define mapping structure. 4. Plan editorialization. 5. Document dry-run approach. 6. Commit mapping doc.

Commandes de vérification :
git branch --show-current
git status --short
git log --oneline --decorate -20
git diff --stat
git diff --name-only
grep -n "sync\|publish" <MAPPING_OUTPUT_FILE> (ensure no auto-sync instructions)

Commit attendu :
docs: prepare SFIA Notion mapping

Résultat attendu :
Mapping document, publishable/excluded lists, NOTION PREPARATION READY / WITH RESERVES / BLOCKED decision.

Garde-fous :
STRICT:
- Ne pas lancer de raw Notion sync.
- Ne pas publier dans Notion.
- Ne pas modifier tools/cmp-001/.
- Ne pas régénérer payloads CMP.
- Validation humaine avant toute publication future.

```

## 7. Expected Outputs

- Notion mapping document
- Publishable/excluded classification
- Preparation decision

## 8. Validation

Notion preparation checklist §15. BLOCK if raw sync planned.

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

Notion is curated knowledge layer, not raw repository mirror.
