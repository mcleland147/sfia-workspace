---
status: generated
version: v1.1
scope: SFIA prompt templates context pack
source_files:
  - prompts/templates/01-create-foundation-document.md
  - prompts/templates/02-update-document-v1-1.md
  - prompts/templates/03-create-operational-checklist.md
  - prompts/templates/04-validate-cursor-result.md
  - prompts/templates/2026-07-04-05-validate-pr-readiness.md
  - prompts/templates/06-prepare-pr-summary.md
  - prompts/templates/07-write-post-merge-status.md
  - prompts/templates/08-capitalize-method-asset.md
  - prompts/templates/09-prepare-notion-mapping.md
  - prompts/templates/10-perform-safe-repository-cleanup.md
---

# SFIA Prompt Templates Context Pack

## Purpose

This document consolidates the 10 SFIA prompt templates into a single Markdown file.
It is intended to be uploaded as a single reference file in a GPT Project when attachment limits prevent uploading all templates individually.
The source of truth remains the individual files under `prompts/templates/`.

## Source of Truth Notice

This file is a generated context pack.
Do not edit it manually as the canonical source.
Canonical files remain:

- `prompts/templates/01-create-foundation-document.md`
- `prompts/templates/02-update-document-v1-1.md`
- `prompts/templates/03-create-operational-checklist.md`
- `prompts/templates/04-validate-cursor-result.md`
- `prompts/templates/2026-07-04-05-validate-pr-readiness.md`
- `prompts/templates/06-prepare-pr-summary.md`
- `prompts/templates/07-write-post-merge-status.md`
- `prompts/templates/08-capitalize-method-asset.md`
- `prompts/templates/09-prepare-notion-mapping.md`
- `prompts/templates/10-perform-safe-repository-cleanup.md`

## Usage in GPT Project

Upload this file to a GPT Project to give the assistant access to the full SFIA prompt template family.
The assistant should use these templates as guidance for preparing Cursor prompts, validation prompts, PR readiness prompts, post-merge prompts and capitalization prompts.

---

# Template 01 — Create Foundation Document

Source: `prompts/templates/01-create-foundation-document.md`

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
- docs/architecture/2026-06-27-sfia-decision-engine.md
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
- docs/architecture/2026-06-27-sfia-decision-engine.md
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

---

# Template 02 — Update Document v1.1

Source: `prompts/templates/02-update-document-v1-1.md`

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

---

# Template 03 — Create Operational Checklist

Source: `prompts/templates/03-create-operational-checklist.md`

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

---

# Template 04 — Validate Cursor Result

Source: `prompts/templates/04-validate-cursor-result.md`

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

---

# Template 05 — Validate PR Readiness

Source: `prompts/templates/2026-07-04-05-validate-pr-readiness.md`

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

---

# Template 06 — Prepare PR Summary

Source: `prompts/templates/06-prepare-pr-summary.md`

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

---

# Template 07 — Write Post-Merge Status

Source: `prompts/templates/07-write-post-merge-status.md`

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

---

# Template 08 — Capitalize Method Asset

Source: `prompts/templates/08-capitalize-method-asset.md`

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

---

# Template 09 — Prepare Notion Mapping

Source: `prompts/templates/09-prepare-notion-mapping.md`

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

---

# Template 10 — Perform Safe Repository Cleanup

Source: `prompts/templates/10-perform-safe-repository-cleanup.md`

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
