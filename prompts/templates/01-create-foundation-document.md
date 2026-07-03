---
status: candidate
version: v1.1
type: prompt-template
family: Documentation creation prompts
updated_after: SFIA prompt catalog v1.1
scope: create foundation document
---

# Create Foundation Document

**Version:** v1.1  
**Status:** Candidate template  
**Family:** Documentation creation prompts  
**Scope:** Create a new SFIA foundation document

## 1. Purpose

Create a new SFIA foundation document in the correct repository location with v1.1 structure, guardrails and traceability.

## 2. Use When

A new foundation-level reference document must be created (architecture, foundation, automation spec, or similar structural reference).

## 3. Do Not Use When

The task is only a minor correction, a localized update, or application code work.

## 4. Required Inputs

- <REPO_PATH>
- <BRANCH_NAME>
- <EXPECTED_COMMIT>
- <TARGET_FILE>
- <FOUNDATION_OBJECTIVE>
- <REFERENCE_SOURCES>
- <PROTECTED_PATHS>
- <INDEX_FILES_TO_UPDATE>

## 5. Guardrails

- No push without explicit human validation.
- No PR creation unless the template explicitly requests preparation only and human approval is obtained.
- No merge.
- No raw Notion sync.
- No Notion publication.
- No code change in documentation cycles.
- Protected paths must be declared and respected.
- Human validation remains required for significant decisions.
- Preserve Engineering Principles compliance.
- Do not touch tools/cmp-001/ unless explicitly in scope.

## 6. Full Prompt Template

```text
Objectif :
Créer le document foundation SFIA `<TARGET_FILE>` dans le cadre de `<FOUNDATION_OBJECTIVE>`.

Repo :
<REPO_PATH>

Branche actuelle :
<BRANCH_NAME>

Dernier commit attendu :
<EXPECTED_COMMIT>

Contexte :
<CYCLE_CONTEXT>

Phase / contexte SFIA :
<SFIA_PHASE> (foundation consolidation / architecture / automation / method)

Sources de référence :
- docs/foundation/sfia-engineering-principles.md
- docs/architecture/sfia-decision-engine.md
- <REFERENCE_SOURCES>

Dossier cible :
<TARGET_FOLDER>

Type de capitalisation attendu :
foundation

Périmètre :
- créer `<TARGET_FILE>` ;
- ajouter front matter foundation v1.1 si applicable ;
- inclure Objectif, Positionnement, sections métier, Décision, Next Steps ;
- mettre à jour README/index si demandé : <INDEX_FILES_TO_UPDATE> ;
- mettre à jour tracking docs si demandé.

Hors périmètre :
- modification code applicatif ;
- push, PR, merge ;
- Notion sync ou publication ;
- tools/cmp-001/ ;
- chemins protégés non autorisés.

Fichiers à lire :
- docs/foundation/sfia-engineering-principles.md
- docs/architecture/sfia-decision-engine.md
- <REFERENCE_SOURCES>

Fichiers à modifier :
- <TARGET_FILE>
- <INDEX_FILES_TO_UPDATE> (si applicable)

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
1. Vérifier branche, commit attendu et git status.
2. Lire les sources de référence.
3. Créer le document foundation avec structure v1.1.
4. Vérifier conformité Engineering Principles.
5. Mettre à jour index/tracking si demandé.
6. Exécuter les commandes de vérification.
7. Créer le commit documentaire.

Commandes de vérification :
git branch --show-current
git status --short
git log --oneline --decorate -20
git diff --stat
git diff --name-only

Commit attendu :
docs: create SFIA <foundation-object>

Résultat attendu :
Afficher :
- fichiers créés ou modifiés ;
- résumé du document ;
- contrôles exécutés ;
- chemins protégés non touchés ;
- hash et message du commit ;
- pas de push ;
- pas de PR ;
- réserves éventuelles.

Garde-fous :
- Ne pas exécuter Notion sync.
- Ne pas publier dans Notion.
- Ne pas push.
- Ne pas créer de PR.
- Ne pas merger.
- Ne pas modifier de code.
- Ne pas toucher aux chemins protégés.
- Validation humaine requise avant push/PR/publication.

```

## 7. Expected Outputs

- New foundation document at `<TARGET_FILE>`
- Updated README/index if applicable
- Updated tracking docs if applicable
- Execution report
- Local commit

## 8. Validation

Decision: COMPLETE / COMPLETE AVEC RÉSERVES / INCOMPLETE / NO-GO. Validate deliverable location, principles compliance, diff scope and commit message.

Use `method/sfia-fast-track/checklists/sfia-validation-checklist.md` before concluding.

## 9. Related References

- `prompts/prompt-catalog.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `docs/foundation/sfia-engineering-principles.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `docs/architecture/sfia-repository-blueprint.md`

## 10. Notes

Adapt `<foundation-object>` in the commit message. Foundation documents must align with Documentation Routing Matrix.
