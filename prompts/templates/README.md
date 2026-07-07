# SFIA Prompt Templates

This folder contains full reusable prompt templates derived from the SFIA Prompt Catalog v1.1.

The catalog remains the index of prompt families and cards:

- `../prompt-catalog.md`

The templates in this folder are operational prompt skeletons intended to be adapted before use.

## Templates

| Template | Family | Use |
|----------|--------|-----|
| `01-create-foundation-document.md` | Documentation creation | Create a new SFIA foundation document |
| `02-update-document-v1-1.md` | Documentation consolidation | Update an existing document to v1.1 |
| `03-create-operational-checklist.md` | Documentation creation | Create an operational checklist from a spec |
| `04-validate-cursor-result.md` | Validation | Validate a Cursor execution result |
| `05-validate-pr-readiness.md` | Validation | Assess whether a branch is ready for PR |
| `06-prepare-pr-summary.md` | PR and post-merge | Prepare a structured PR summary |
| `07-write-post-merge-status.md` | PR and post-merge | Document post-merge closure |
| `08-capitalize-method-asset.md` | Capitalization | Promote a validated asset into method capitalisation |
| `09-prepare-notion-mapping.md` | Notion preparation | Prepare Notion mapping without publication |
| `10-perform-safe-repository-cleanup.md` | Repository execution | Perform safe repository cleanup |

## Template selection

Prompt templates must be selected through the SFIA Cycle Routing Guide:

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`

The guide maps each cycle type to:

- mandatory references;
- prompt template or prompt family;
- validation controls;
- expected decision.

Templates should not be used in isolation. They must be selected according to the cycle type and completed with the relevant repository context, scope, guardrails and validation rules.

## SFIA v2.4 — complément templates

Tout template adapté pour un cycle post-v2.4 doit intégrer les champs du contrat prompt v2.4 (`sfia-prompt-generation-engine.md` §7.1) :

- type de cycle (INC / EVOL / RUN / CAPA / DOC ou méthode / projet) ;
- profil projet si applicable ;
- niveau QA attendu ;
- gate Morris requis ;
- périmètre / hors périmètre ;
- garde-fous v2.4 ;
- statut attendu : READY FOR REVIEW / READY WITH RESERVES / NOT READY.

Référence : `sfia-v2.4-consolidation-operating-efficiency-standard.md` — ne pas recopier intégralement.

Handoff = **documentaire uniquement** — pas d'agent autonome. v3.0 = immediate NO-GO.

## Common Guardrails

- no push without human validation;
- no PR creation unless explicitly approved;
- no merge;
- no raw Notion sync;
- no Notion publication;
- no protected path modification without explicit scope;
- no code change in documentation cycles;
- use the SFIA Validation Checklist before concluding.

## Related References

- `../prompt-catalog.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
