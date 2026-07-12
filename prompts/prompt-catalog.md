---
status: candidate
version: v1.1
updated_after: SFIA prompt generation engine specification
scope: prompt catalog
---

# SFIA Prompt Catalog v1.1

**Version:** v1.1
**Status:** Candidate catalog
**Updated after:** SFIA prompt generation engine specification
**Scope:** Prompt catalog

## 1. Objectif

Le Prompt Catalog est la bibliothèque opérationnelle des prompts-types SFIA.

Il sert à :

- standardiser les prompts ;
- accélérer les cycles ;
- éviter les oublis ;
- appliquer les garde-fous ;
- préparer l'automation future ;
- capitaliser les prompts utiles.

Le Prompt Catalog ne remplace pas le Prompt Generation Engine.

Il traduit la doctrine du Prompt Generation Engine en familles de prompts et prompt cards réutilisables dans les cycles SFIA.

## 2. Documents de référence

- `docs/foundation/sfia-engineering-principles.md`
- `docs/architecture/2026-06-27-sfia-decision-engine.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/automation/sfia-automation-architecture.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`

## 3. Existing Inputs Audit

| Source | Finding | Decision |
|--------|---------|----------|
| `prompts/prompt-catalog.md` (v1.0 Draft) | Interv360 pilot catalog with 14+ candidate prompts, maturity model, role mapping | Preserve as historical reference in Annexe A ; v1.1 normative catalog built from P1 engines and recent foundation cycles |
| `prompts/architecture/PROMPT-ARCH-001-*.md` | Draft prompt — architecture review | Keep as project pilot asset ; not part of v1.1 normative cards |
| `prompts/security/PROMPT-SEC-001-*.md` | Draft prompt — security review | Keep as project pilot asset ; not part of v1.1 normative cards |
| `prompts/ux-ui/`, `prompts/qa/`, `prompts/bpmn/` | Prompt family documents (15+10+7 candidates) | Reference in Annexe A ; future integration after full templates cycle |
| `prompts/tooling/penpot/` | Design tooling prompt family | Out of scope v1.1 catalog ; Figma Design-first remains separate |
| P1 engine specs + validation checklist | Doctrine for prompt structure, execution and validation | Primary source for v1.1 prompt cards |
| Recent foundation v1.1 cycles | Proven patterns: create engine spec, update foundation, validation checklist | Informed the 26 v1.1 prompt cards |

Few executable full prompt templates exist yet. The v1.1 catalog defines **prompt cards** first ; full templates follow in a dedicated cycle.

## 4. Principes communs des prompts SFIA

Tout prompt SFIA doit préciser :

- objectif ;
- repository ;
- branche ;
- dernier commit attendu ;
- contexte ;
- phase ou contexte SFIA ;
- sources de référence ;
- dossier cible ;
- type de capitalisation attendu ;
- périmètre ;
- hors périmètre ;
- fichiers à lire ;
- fichiers à modifier ;
- fichiers interdits ou chemins protégés ;
- actions attendues ;
- commandes de vérification ;
- commit attendu si applicable ;
- résultat attendu.

Garde-fous communs :

- no push ;
- no PR ;
- no merge ;
- no raw Notion sync ;
- no publication Notion ;
- no code change in documentation cycles ;
- protected paths respected ;
- human validation required.

## 5. Structure standard d'une prompt card

```text
Prompt Card — <Name>
**Family:**
**Purpose:**
**Use when:**
**Do not use when:**
**Required inputs:**
**Expected actions:**
**Guardrails:**
**Expected outputs:**
**Validation:**
**Related references:**
```

Les prompt cards de cette passe restent concises. Les templates complets longs seront produits dans un cycle suivant.

## 6. Familles de prompts

| Family | Role |
|--------|------|
| Framing prompts | Cadrer un cycle, une intention ou une correction |
| Documentation creation prompts | Créer un nouveau document SFIA |
| Documentation consolidation prompts | Mettre à jour ou harmoniser un document existant |
| Repository execution prompts | Encadrer une exécution Git/documentaire |
| Validation prompts | Valider un résultat Cursor, un diff, un commit ou un livrable |
| PR and post-merge prompts | Préparer ou clôturer une PR |
| Capitalization prompts | Transformer un cycle en actif méthode réutilisable |
| Notion preparation prompts | Préparer une publication Notion sans sync brute |

## 7. Prompt Cards

### Prompt Card — Frame New SFIA Cycle

**Family:** Framing prompts

**Purpose:**
Open or frame a new SFIA cycle with clear objective, scope and guardrails.

**Use when:**
A new cycle must be opened with explicit boundaries.

**Do not use when:**
The cycle is already fully defined in an existing prompt.

**Required inputs:**
- cycle objective;
- repository path;
- branch;
- expected commit;
- SFIA phase;
- reference sources;
- target folder;
- capitalization type;

**Expected actions:**
1. verify git state;
2. confirm scope and out of scope;
3. identify protected paths;
4. produce or select execution prompt;

**Guardrails:**
- no push;
- no PR;
- no merge;
- human validation required;

**Expected outputs:**
- framed cycle scope;
- recommended prompt family;
- guardrails summary;

**Validation:**
GO / INCOMPLETE / NEEDS HUMAN VALIDATION

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Frame Documentation Cycle

**Family:** Framing prompts

**Purpose:**
Frame a documentation-only cycle without code changes.

**Use when:**
A foundation, method or checklist document must be created or updated.

**Do not use when:**
The task requires application code changes.

**Required inputs:**
- document objective;
- target file or folder;
- reference sources;
- branch;
- expected commit;

**Expected actions:**
1. verify documentation routing;
2. list files to read and modify;
3. declare protected paths;
4. define verification commands;

**Guardrails:**
- no code change;
- no push;
- no PR;
- no Notion sync;

**Expected outputs:**
- cycle frame;
- documentation routing decision;
- execution prompt outline;

**Validation:**
COMPLETE / INCOMPLETE

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Frame Targeted Correction

**Family:** Framing prompts

**Purpose:**
Frame a small correction cycle with minimal scope.

**Use when:**
A localized fix or harmonization is needed.

**Do not use when:**
The change affects multiple unrelated areas or requires restructuring.

**Required inputs:**
- correction objective;
- target files;
- expected commit;
- out of scope;

**Expected actions:**
1. narrow scope to one useful result;
2. identify protected paths;
3. define validation criteria;

**Guardrails:**
- no scope creep;
- no push without validation;

**Expected outputs:**
- correction frame;
- minimal action list;

**Validation:**
GO / GO avec réserves

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Create Foundation Document

**Family:** Documentation creation prompts

**Purpose:**
Create a new SFIA foundation document in the correct repository location.

**Use when:**
A new foundation-level reference document must be created.

**Do not use when:**
The task is only a minor correction to an existing document.

**Required inputs:**
- repository path;
- branch;
- expected commit;
- document objective;
- reference sources;
- target file;
- scope;
- out of scope;
- protected paths;
- expected commit message;

**Expected actions:**
1. verify branch, status and expected commit;
2. read reference sources;
3. create target document;
4. update index or tracking files if requested;
5. run verification commands;
6. create commit if requested;

**Guardrails:**
- no code change;
- no push;
- no PR;
- no Notion sync;
- protected paths respected;

**Expected outputs:**
- document created;
- updated indexes if applicable;
- execution report;
- commit hash if committed;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Create Engine Specification

**Family:** Documentation creation prompts

**Purpose:**
Create a new SFIA automation engine specification.

**Use when:**
A P1 or future engine spec must be documented.

**Do not use when:**
The engine is already fully specified.

**Required inputs:**
- engine name;
- scope;
- reference sources;
- target file;
- inputs and outputs outline;

**Expected actions:**
1. read automation architecture and related engines;
2. create spec following engine template;
3. update automation README and tracking docs;

**Guardrails:**
- no executable implementation;
- no autonomous automation claims;

**Expected outputs:**
- engine spec document;
- tracking update;
- commit;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Create Operational Checklist

**Family:** Documentation creation prompts

**Purpose:**
Create an operational checklist from an engine or method specification.

**Use when:**
A spec exists and needs an operational checklist.

**Do not use when:**
No underlying specification exists yet.

**Required inputs:**
- source specification;
- target checklist path;
- validation criteria;

**Expected actions:**
1. derive checklist from spec;
2. add checkbox sections;
3. link related references;

**Guardrails:**
- checklist must not replace human validation;

**Expected outputs:**
- checklist document;
- README update if needed;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Create Reusable Template

**Family:** Documentation creation prompts

**Purpose:**
Create a reusable SFIA template for cycles, PR, audit or REX.

**Use when:**
A repeatable pattern must be templated.

**Do not use when:**
The deliverable is a one-off document.

**Required inputs:**
- template type;
- target folder;
- structure requirements;

**Expected actions:**
1. create template with placeholders;
2. document usage guidance;

**Guardrails:**
- template must align with Fast Track conventions;

**Expected outputs:**
- template file;
- catalog or README reference;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Update Document to v1.1

**Family:** Documentation consolidation prompts

**Purpose:**
Update an existing document to v1.1 while preserving historical content.

**Use when:**
A foundation or method document needs v1.1 enrichment.

**Do not use when:**
The document is already at v1.1.

**Required inputs:**
- target document;
- v1.1 sections to add;
- reference sources;
- consistency rule;

**Expected actions:**
1. preserve v1.0 content;
2. add v1.1 sections;
3. update front matter;
4. update tracking docs;

**Guardrails:**
- do not delete historical content without replacement;

**Expected outputs:**
- updated document;
- tracking update;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Harmonize with Engineering Principles

**Family:** Documentation consolidation prompts

**Purpose:**
Align a document with SFIA Engineering Principles.

**Use when:**
A document must reference or comply with engineering principles.

**Do not use when:**
The document is unrelated to execution principles.

**Required inputs:**
- target document;
- engineering principles sections;

**Expected actions:**
1. add principles reference;
2. verify no contradiction;
3. add compliance anchor if missing;

**Guardrails:**
- principles prevail on tension;

**Expected outputs:**
- harmonized document;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Generalize Project-Specific Logic

**Family:** Documentation consolidation prompts

**Purpose:**
Replace project-specific hardcoding with generic SFIA patterns.

**Use when:**
Project-specific paths or examples must become generic with project examples.

**Do not use when:**
The content is genuinely project-specific.

**Required inputs:**
- target sections;
- project example to preserve;

**Expected actions:**
1. define generic categories;
2. move project paths to examples;
3. add prompt-declaration rule;

**Guardrails:**
- Interv360 is example not universal standard;

**Expected outputs:**
- generalized document;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Add Cross-References

**Family:** Documentation consolidation prompts

**Purpose:**
Add lightweight cross-references between related SFIA documents.

**Use when:**
Documents need linking without duplication.

**Do not use when:**
Full content merge is required.

**Required inputs:**
- source and target documents;
- reference type;

**Expected actions:**
1. add cross-ref sections;
2. update README indexes;

**Guardrails:**
- do not duplicate full content;

**Expected outputs:**
- updated documents with cross-refs;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Execute Documentation Change

**Family:** Repository execution prompts

**Purpose:**
Execute a controlled documentation change in Git.

**Use when:**
Documentation files must be created or modified per prompt contract.

**Do not use when:**
Code or infrastructure changes are required.

**Required inputs:**
- full prompt contract;
- files to modify;
- protected paths;

**Expected actions:**
1. pre-check git state;
2. read sources;
3. apply changes in scope;
4. verify diff;
5. commit if requested;
6. produce execution report;

**Guardrails:**
- execute only the prompt;
- no push;
- no PR;
- protected paths respected;

**Expected outputs:**
- files modified;
- diff summary;
- verification results;
- commit if created;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Create File and Update Indexes

**Family:** Repository execution prompts

**Purpose:**
Create a new file and update related README or index files.

**Use when:**
A new asset needs creation plus index update.

**Do not use when:**
Indexes do not need updating.

**Required inputs:**
- target file;
- index files;
- folder routing;

**Expected actions:**
1. create file;
2. update README or catalog entries;
3. verify paths;

**Guardrails:**
- target folder only;
- no unrelated index changes;

**Expected outputs:**
- new file;
- updated indexes;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Perform Safe Repository Cleanup

**Family:** Repository execution prompts

**Purpose:**
Clean up or restructure repository content safely.

**Use when:**
Repository organization needs improvement.

**Do not use when:**
Changes are purely document content without moves.

**Required inputs:**
- cleanup scope;
- forbidden paths;
- git mv requirements;

**Expected actions:**
1. audit before action;
2. use git mv for moves;
3. no brutal deletion;
4. verify diff;

**Guardrails:**
- no destructive cleanup;
- no touch to protected paths;

**Expected outputs:**
- cleanup report;
- diff;
- reserves if any;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Validate Cursor Result

**Family:** Validation prompts

**Purpose:**
Validate a Cursor execution result against the prompt contract.

**Use when:**
Cursor has returned an execution report to validate.

**Do not use when:**
Validation happens before execution.

**Required inputs:**
- original prompt;
- execution report;
- diff;
- verification command outputs;

**Expected actions:**
1. apply validation checklist;
2. classify reserves;
3. produce SFIA decision;

**Guardrails:**
- validation does not replace human decision;

**Expected outputs:**
- validation report;
- decision;
- reserves;
- next step;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Validate Documentation Deliverable

**Family:** Validation prompts

**Purpose:**
Validate a documentation deliverable for routing, completeness and coherence.

**Use when:**
A document was produced and must be validated.

**Do not use when:**
The deliverable is code or binary.

**Required inputs:**
- deliverable path;
- routing matrix;
- reference sources;

**Expected actions:**
1. check location;
2. check sources cited;
3. check principles compliance;
4. check status and role;

**Guardrails:**
- no GO without evidence;

**Expected outputs:**
- deliverable validation decision;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Validate Commit

**Family:** Validation prompts

**Purpose:**
Validate a local commit against cycle scope and format.

**Use when:**
A commit was created and must be validated.

**Do not use when:**
No commit was requested.

**Required inputs:**
- commit hash;
- commit message;
- diff;
- protected paths;

**Expected actions:**
1. verify message format;
2. verify scope;
3. verify no forbidden files;

**Guardrails:**
- commit too large is a reserve;

**Expected outputs:**
- commit validation decision;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Validate PR Readiness

**Family:** Validation prompts

**Purpose:**
Assess whether a branch is ready for PR creation.

**Use when:**
A PR may be opened after human validation.

**Do not use when:**
No PR is planned.

**Required inputs:**
- branch;
- commits;
- diff;
- reserves;
- PR summary draft;

**Expected actions:**
1. apply PR readiness checklist;
2. decide READY / NOT READY;

**Guardrails:**
- Validation Engine does not create PR;

**Expected outputs:**
- PR readiness decision;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Prepare PR Summary

**Family:** PR and post-merge prompts

**Purpose:**
Prepare a structured PR summary for human review.

**Use when:**
A PR will be created after human validation.

**Do not use when:**
The cycle is not ready for PR.

**Required inputs:**
- branch;
- commits;
- diff stat;
- reserves;
- test results if applicable;

**Expected actions:**
1. summarize changes;
2. list reserves;
3. state validation status;
4. do not create PR;

**Guardrails:**
- no automatic PR creation;

**Expected outputs:**
- PR summary text;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Review PR Readiness

**Family:** PR and post-merge prompts

**Purpose:**
Review PR readiness with explicit decision.

**Use when:**
Human wants a second validation before PR.

**Do not use when:**
PR already merged.

**Required inputs:**
- PR summary;
- diff;
- checklist results;

**Expected actions:**
1. review against validation checklist;
2. produce READY FOR PR decision;

**Guardrails:**
- human must approve PR creation;

**Expected outputs:**
- readiness review decision;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Write Post-Merge Status

**Family:** PR and post-merge prompts

**Purpose:**
Document post-merge closure with reserves and next steps.

**Use when:**
A significant PR was merged and needs closure trace.

**Do not use when:**
No merge occurred.

**Required inputs:**
- PR number;
- source and target branches;
- merge commit;
- reserves;

**Expected actions:**
1. create post-merge status document;
2. list capitalized elements;
3. propose next step;

**Guardrails:**
- PR not closed without this trace for significant PRs;

**Expected outputs:**
- post-merge status document;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Capitalize Project Cycle

**Family:** Capitalization prompts

**Purpose:**
Transform a project cycle output into a reusable SFIA asset.

**Use when:**
A cycle produced learnings worth capitalizing.

**Do not use when:**
Nothing reusable was produced.

**Required inputs:**
- cycle outputs;
- capitalization type;
- target folder;
- routing matrix;

**Expected actions:**
1. identify asset type;
2. route to correct folder;
3. update tracking docs;

**Guardrails:**
- capitalization by default;

**Expected outputs:**
- capitalization artifact;
- tracking update;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Capitalize Method Asset

**Family:** Capitalization prompts

**Purpose:**
Promote a validated practice into method, template or checklist.

**Use when:**
A method asset is stable enough to promote.

**Do not use when:**
Asset is still draft or project-specific.

**Required inputs:**
- source evidence;
- target method path;
- maturity level;

**Expected actions:**
1. create or update method asset;
2. link from catalog;
3. update indexes;

**Guardrails:**
- evidence required for promotion;

**Expected outputs:**
- method asset;
- catalog reference;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Update Foundation Tracking Documents

**Family:** Capitalization prompts

**Purpose:**
Update v1.1 foundation tracking inventory, impact matrix or consolidation plan.

**Use when:**
Foundation work must be tracked.

**Do not use when:**
No foundation change occurred.

**Required inputs:**
- changed documents;
- tracking files to update;

**Expected actions:**
1. append Update section;
2. list remaining work;

**Guardrails:**
- tracking must reflect actual state;

**Expected outputs:**
- updated tracking documents;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md`

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Prepare Notion Mapping

**Family:** Notion preparation prompts

**Purpose:**
Prepare Notion content mapping from repository sources.

**Use when:**
Notion publication may be planned after human validation.

**Do not use when:**
Raw sync is requested.

**Required inputs:**
- source documents;
- mapping target;
- editorialization rules;

**Expected actions:**
1. define mapping;
2. exclude non-publishable content;
3. no sync;

**Guardrails:**
- no raw Notion sync;
- human validation before publish;

**Expected outputs:**
- mapping document or plan;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md` — Notion section

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

### Prompt Card — Prepare Notion Dry-Run

**Family:** Notion preparation prompts

**Purpose:**
Prepare a Notion publication dry-run without publishing.

**Use when:**
Mapping exists and dry-run is the next step.

**Do not use when:**
Mapping is incomplete.

**Required inputs:**
- mapping document;
- dry-run scope;

**Expected actions:**
1. simulate publication structure;
2. identify gaps;
3. no publish;

**Guardrails:**
- no automatic publication;

**Expected outputs:**
- dry-run report;
- reserves;
- BLOCKED or READY decision;

**Validation:**
`method/sfia-fast-track/checklists/sfia-validation-checklist.md` — Notion section

**Related references:**
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

## 8. Garde-fous communs

Toutes les prompt cards héritent des garde-fous SFIA v1.1 :

- Engineering Principles first ;
- prompt as contract ;
- repository-first ;
- human validation first ;
- guardrails before execution ;
- documentation routing by default ;
- no push / PR / merge without human validation ;
- no raw Notion sync ;
- protected paths generic + project-specific declared in prompt ;
- one cycle, one useful result ;
- validation via `method/sfia-fast-track/checklists/sfia-validation-checklist.md`.

## 9. Validation attendue

Chaque exécution de prompt card doit être validée avec :

- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`

Décisions possibles :

- GO / GO avec réserves / NO-GO ;
- COMPLETE / COMPLETE AVEC RÉSERVES / INCOMPLETE ;
- READY FOR PR / READY FOR PR WITH RESERVES / NOT READY FOR PR ;
- POST-MERGE COMPLETE / INCOMPLETE ;
- NOTION PREPARATION READY / WITH RESERVES / BLOCKED.

## 10. Full Prompt Templates

The priority full prompt templates are maintained in:

- `prompts/templates/`

| Template | Source prompt card | Status |
|----------|--------------------|--------|
| `prompts/templates/01-create-foundation-document.md` | Create Foundation Document | Candidate |
| `prompts/templates/02-update-document-v1-1.md` | Update Document to v1.1 | Candidate |
| `prompts/templates/03-create-operational-checklist.md` | Create Operational Checklist | Candidate |
| `prompts/templates/04-validate-cursor-result.md` | Validate Cursor Result | Candidate |
| `prompts/templates/2026-07-04-05-validate-pr-readiness.md` | Validate PR Readiness | Candidate |
| `prompts/templates/06-prepare-pr-summary.md` | Prepare PR Summary | Candidate |
| `prompts/templates/07-write-post-merge-status.md` | Write Post-Merge Status | Candidate |
| `prompts/templates/08-capitalize-method-asset.md` | Capitalize Method Asset | Candidate |
| `prompts/templates/09-prepare-notion-mapping.md` | Prepare Notion Mapping | Candidate |
| `prompts/templates/10-perform-safe-repository-cleanup.md` | Perform Safe Repository Cleanup | Candidate |

These templates are operational skeletons derived from the v1.1 prompt cards.

They must be adapted before execution.

See also: `prompts/templates/README.md`

## 11. Anti-patterns

| Anti-pattern | Risk |
|--------------|------|
| Prompt without expected commit | Execution on wrong base |
| Prompt without protected paths | Repository risk |
| Prompt without sources | Ungrounded output |
| Prompt without target folder | Documentation drift |
| Prompt mixing several cycles | Diff too broad |
| Prompt allowing push by default | Human validation bypassed |
| Prompt allowing raw Notion sync | Knowledge governance bypassed |
| Prompt without validation checklist | Result validated by feeling |
| Prompt too generic | Cursor improvises |
| Prompt too long without structure | Execution becomes ambiguous |

## 12. Décision

`prompts/prompt-catalog.md` is the SFIA v1.1 candidate catalog for reusable prompt families and prompt cards.

It operationalizes the Prompt Generation Engine by providing reusable prompt patterns aligned with:

- Engineering Principles ;
- Repository Execution Engine ;
- Validation Engine ;
- Validation Checklist ;
- Rules & Guardrails ;
- Knowledge Layer.

The catalog is the index of prompt families and prompt cards.

Full operational prompt templates are maintained separately in `prompts/templates/`.

## 13. Next Steps

1. Use the templates on upcoming SFIA cycles ;
2. update templates after real usage ;
3. reconcile pilot Interv360 prompt families with v1.1 families ;
4. prepare P2 cross-references ;
5. index SFIA v2.0 delivery QA/Test family — voir §14 ci-dessous.

## 14. Supplément SFIA v2.0 — Delivery QA/Test (pilote)

> Entrée minimale hors catalogue v1.1 normatif — capitalisation pilote Chantiers360 v2 INC-01 (PR #111).

| Élément | Valeur |
|---------|--------|
| **Famille** | Delivery QA/Test — incrément delivery |
| **Fichier** | `prompts/qa/delivery-qa-test-prompt-family.md` |
| **IDs** | `PROMPT-QA-D-001` à `PROMPT-QA-D-008` |
| **Distinct de** | `PROMPT-QA-001` à `010` — famille amont `qa-tester-prompt-family.md` |
| **Standard** | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md` |
| **Usage** | QA-G0…G4 ; stratégie/scénarios ; tests ; rapports ; réserves ; QA readiness (QA-G3) ; post-merge (QA-G4) ; PR readiness delivery |
| **Closure / capitalisation** | `2026-07-06-sfia-v2-incremental-delivery-closure-standard.md` |

## 15. Supplément SFIA v2.0 — Design coverage (pilote)

> Entrée minimale — capitalisation pilote Chantiers360 v2 R-UX-01 (INC-05 `/prochaines-actions`).

| Élément | Valeur |
|---------|--------|
| **Famille** | Design coverage — extrapolation UI Cursor |
| **Standard** | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-coverage-standard.md` |
| **Bloc prompt type** | §9 — « Écran sans frame Figma dédiée — extrapolation DA existante » |
| **Réserve type** | R-UX-XX — §8 |
| **Routing** | `sfia-cycle-routing-guide.md` — §6.15 |
| **Checklist** | `sfia-validation-checklist.md` — §12.2 |
| **Usage** | Matrice Figma vs extrapolation ; sources cohérence ; gates Morris ; delivery écrans dérivés |
| **Liens** | `sfia-v2-design-figma-cycle-standard.md` ; `sfia-v2-figma-fidelity-gate-standard.md` |
| **Exemple pilote** | Chantiers360 v2 — R-UX-01 acceptée, non bloquante |

---

## 16. Supplément SFIA v2.0 — Technical Architecture & Decision Documentation (pilote)

> Entrée minimale — capitalisation pilote Chantiers360 v2 `05-technical-architecture/`.

| Élément | Valeur |
|---------|--------|
| **Famille** | Technical architecture & decision documentation |
| **Standard** | `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-07-sfia-v2-technical-architecture-decision-documentation-standard.md` |
| **Templates** | §18 — ADR light, DAA light, DAT light |
| **Routing** | `sfia-cycle-routing-guide.md` — §6.16 |
| **Checklist** | `sfia-validation-checklist.md` — §12.3 |
| **Usage** | Register vs ADR vs DAA vs DAT ; gates Morris ; NFR ; QA linkage |
| **Liens** | `sfia-v2-delivery-qa-test-standard.md` ; `sfia-v2-design-coverage-standard.md` |
| **Exemple pilote** | Chantiers360 v2 — stack/Drizzle/auth différée — ADR futurs recommandés, non produits dans cycle standard |

---

## 17. Supplément SFIA v2.x — Method Versioning (pilote)

> Entrée minimale — registre v2.0 à v2.2.1 capitalisé depuis Chantiers360 v2 post-MVP.

| Élément | Valeur |
|---------|--------|
| **Famille** | SFIA v2.x method versioning |
| **Standard** | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md` |
| **Registre** | §6 — v2.0 baseline → v2.2.1 patches |
| **Routing** | `sfia-cycle-routing-guide.md` — §6.17 |
| **Checklist** | `sfia-validation-checklist.md` — §12.4 |
| **Usage** | Minor vs patch vs major ; registre ; repository-first ; gates Morris |
| **Liens** | `sfia-v2-automation-levels.md` ; standards v2.1 / v2.2 |
| **Exemple pilote** | PR #129 v2.1 ; #130 v2.1.1 ; #131 v2.2 ; #132 v2.2.1 |

---

## 18. Supplément SFIA v2.4 — Consolidation & Operating Efficiency

> Entrée minimale — standard v2.4 acté PR #139 ; alignement documentaire v2.4.1 acté PR #140. **Catalogue maintenu Candidate** — maturation prompt cards v2.4 à confirmer par usage réel.

| Élément | Valeur |
|---------|--------|
| **Famille** | SFIA v2.4 consolidation |
| **Standard** | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md` |
| **Routing** | `sfia-cycle-routing-guide.md` — §4.3 |
| **Checklist** | `sfia-validation-checklist.md` — §3.2, §3.3, §12.5 |
| **Engines** | `sfia-prompt-generation-engine.md` §7.1 ; `sfia-repository-execution-engine.md` §23 |
| **Usage** | Tout **nouveau prompt** post-v2.4 doit intégrer : type cycle ; profil projet ; niveau QA ; gate Morris ; périmètre / hors périmètre ; garde-fous v2.4 ; PR readiness adaptée |
| **Handoff** | Documentaire ChatGPT ↔ Cursor ↔ Git — **non agent autonome** |
| **Interdit** | v3.0 ; `.sfia/` ; agent handoff réel ; L5 global ; prompts d'orchestration autonome |
| **v3.0** | Immediate NO-GO |

---

## Annexe A — Catalogue pilote Interv360 (historique v1.0)

Le catalogue v1.0 Draft recensait les prompts candidats issus du projet pilote Interv360.

Contenu historique préservé via Git et résumé ci-dessous :

| Élément | Contenu historique |
|---------|-------------------|
| Familles pilote | Cadrage, Arbitrages, UX/UI, Rôles, Architecture, Sécurité, Gouvernance, Notion/Sync |
| Prompts candidats Interv360 | PROMPT-CAD-001 à PROMPT-GOV-002 (14 entrées) |
| Prompts Draft formalisés | PROMPT-ARCH-001, PROMPT-SEC-001 |
| Famille UX/UI V1 Governance | 15 prompts candidats (PROMPT-UXUI-001 à 015) |
| Famille QA / Testeur | 10 prompts candidats (PROMPT-QA-001 à 010) |
| Famille BPMN | 7 prompts Draft (PROMPT-BPMN-001 à 007) |
| Maturité | Candidat → Draft → Tested → Validated → Deprecated |

Ces entrées restent des **actifs pilote** utiles pour les projets métier.

Elles ne constituent pas la bibliothèque normative v1.1 des cycles foundation/automation.

Intégration future : après création des templates complets v1.1, réconcilier les familles pilote avec les 8 familles normatives v1.1.

*Référentiel SFIA — Prompt Catalog v1.1 — candidate catalog aligned with P1 automation engines.*
