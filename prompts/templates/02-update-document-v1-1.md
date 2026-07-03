---
status: candidate
version: v1.1
type: prompt-template
family: Documentation consolidation prompts
updated_after: SFIA prompt catalog v1.1
scope: update document to v1.1
---

# Update Document to v1.1

**Version:** v1.1  
**Status:** Candidate template  
**Family:** Documentation consolidation prompts  
**Scope:** Update an existing document to v1.1

## 1. Purpose

Update an existing SFIA document to v1.1 while preserving historical content and adding operational clarifications.

## 2. Use When

A v1.0 or pre-v1.1 document needs v1.1 enrichment (Consistency Rule, Engineering Principles reference, engine cross-refs, decision section).

## 3. Do Not Use When

The document is already at v1.1 or the change requires creating a wholly new document.

## 4. Required Inputs

- <REPO_PATH>
- <BRANCH_NAME>
- <EXPECTED_COMMIT>
- <TARGET_FILE>
- <V1_1_SECTIONS_TO_ADD>
- <REFERENCE_SOURCES>
- <TRACKING_FILES>

## 5. Guardrails

- No push without explicit human validation.
- No PR creation unless the template explicitly requests preparation only and human approval is obtained.
- No merge.
- No raw Notion sync.
- No Notion publication.
- No code change in documentation cycles.
- Protected paths must be declared and respected.
- Human validation remains required for significant decisions.
- Do not delete historical v1.0 content without explicit replacement.
- v1.1 clarification prevails on tension for current execution.

## 6. Full Prompt Template

```text
Objectif :
Mettre à jour `<TARGET_FILE>` vers v1.1 en préservant le contenu historique utile.

Repo :
<REPO_PATH>

Branche actuelle :
<BRANCH_NAME>

Dernier commit attendu :
<EXPECTED_COMMIT>

Contexte :
<CYCLE_CONTEXT>

Phase / contexte SFIA :
foundation consolidation v1.1

Sources de référence :
- docs/foundation/sfia-engineering-principles.md
- <REFERENCE_SOURCES>

Dossier cible :
<TARGET_FOLDER>

Type de capitalisation attendu :
foundation

Périmètre :
- préserver le contenu existant utile ;
- ajouter Consistency Rule v1.1 si applicable ;
- ajouter Engineering Principles reference si applicable ;
- ajouter sections v1.1 : <V1_1_SECTIONS_TO_ADD> ;
- mettre à jour front matter v1.1 ;
- ajouter décision v1.1 ;
- mettre à jour tracking docs : <TRACKING_FILES>.

Hors périmètre :
- réécriture brutale du document ;
- suppression de contenu historique sans section de remplacement ;
- code, push, PR, Notion sync.

Fichiers à lire :
- <TARGET_FILE>
- docs/foundation/sfia-engineering-principles.md
- <REFERENCE_SOURCES>

Fichiers à modifier :
- <TARGET_FILE>
- <TRACKING_FILES>

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
1. Vérifier branche, commit et git status.
2. Lire le document cible et les sources.
3. Ajouter les sections v1.1 sans supprimer l'historique.
4. Vérifier cohérence avec Engineering Principles.
5. Mettre à jour tracking docs.
6. Exécuter vérifications et commit.

Commandes de vérification :
git branch --show-current
git status --short
git log --oneline --decorate -20
git diff --stat
git diff --name-only

Commit attendu :
docs: update SFIA <document-object> to v1.1

Résultat attendu :
Afficher sections ajoutées, diff summary, commit, pas de push/PR, réserves.

Garde-fous :
- Ne pas exécuter Notion sync. Ne pas publier Notion. Ne pas push. Ne pas PR. Ne pas merger. Ne pas modifier code. Chemins protégés respectés. Validation humaine requise.

```

## 7. Expected Outputs

- Updated document at v1.1
- Tracking docs updated
- Execution report
- Commit

## 8. Validation

COMPLETE / COMPLETE AVEC RÉSERVES / INCOMPLETE. Verify historical content preserved and v1.1 sections added.

Use `method/sfia-fast-track/checklists/sfia-validation-checklist.md` before concluding.

## 9. Related References

- `prompts/prompt-catalog.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `docs/foundation/sfia-engineering-principles.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

## 10. Notes

Replace `<document-object>` in commit message with a short slug.
